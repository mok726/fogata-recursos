// Chequeos del sitio para la página interna /pendientes/.
// Se calcula en cada build: imágenes que faltan, vacías, rotas o
// que nadie usa, heroes de índices, insignias y datos de fichas
// que no coinciden con los catálogos.

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const IMG_EXT = /\.(jpe?g|png|webp|gif|svg)$/i;
const BIG = 1.5 * 1024 * 1024;

const rel = p => path.relative(ROOT, p).split(path.sep).join("/");

function walk(dir, filter, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith(".") || e.name === "node_modules") continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, filter, out);
    else if (!filter || filter(e.name)) out.push(p);
  }
  return out;
}

// Mira los primeros bytes: ¿es de verdad una imagen del tipo que dice?
function imageState(file) {
  if (!fs.existsSync(file)) return "falta";
  const size = fs.statSync(file).size;
  if (size === 0) return "vacía";
  if (/\.svg$/i.test(file)) return "ok";
  const fd = fs.openSync(file, "r");
  const b = Buffer.alloc(12);
  fs.readSync(fd, b, 0, 12, 0);
  fs.closeSync(fd);
  const jpg = b[0] === 0xff && b[1] === 0xd8;
  const png = b.slice(0, 4).toString("hex") === "89504e47";
  const webp = b.slice(0, 4).toString() === "RIFF" && b.slice(8, 12).toString() === "WEBP";
  const gif = b.slice(0, 3).toString() === "GIF";
  if (!(jpg || png || webp || gif)) return "corrupta";
  return "ok";
}

const fmtSize = n => n >= 1048576 ? (n / 1048576).toFixed(1) + " MB" : Math.round(n / 1024) + " KB";

module.exports = function pendientes(collectionApi) {
  const badges = require(path.join(ROOT, "content/_data/badges.js"))();
  const catalogs = {
    skills: ["Habilidad", require(path.join(ROOT, "content/_data/allskills.js"))],
    scout_values: ["Valor scout", require(path.join(ROOT, "content/_data/scoutValues.js"))],
    scout_method: ["Método scout", require(path.join(ROOT, "content/_data/scoutMethod.js"))],
    activity_type: ["Tipo de actividad", require(path.join(ROOT, "content/_data/activityTypes.js"))]
  };
  const names = {};
  for (const [k, [, list]] of Object.entries(catalogs)) names[k] = new Set(list.map(x => x.name));

  const badgeIds = new Map();
  for (const b of badges) {
    badgeIds.set(String(b.id).toLowerCase(), b);
    for (const a of b.aliases || []) badgeIds.set(String(a).toLowerCase(), b);
  }

  const activities = collectionApi.getFilteredByGlob("content/activities/*.md");
  const fichaRef = a => ({ title: a.data.title || a.fileSlug, url: a.url, file: rel(a.inputPath) });

  // ---------- Imágenes de las fichas ----------
  const fichaImg = { falta: [], vacía: [], corrupta: [], sin: [] };
  for (const a of activities) {
    const img = a.data.image;
    if (!img) { fichaImg.sin.push(fichaRef(a)); continue; }
    if (/^https?:/i.test(img)) continue;
    const st = imageState(path.join(ROOT, img));
    if (st !== "ok") fichaImg[st].push({ ...fichaRef(a), image: img });
  }

  // ---------- Referencias a imágenes en todo el código y contenido ----------
  const textFiles = [
    ...walk(path.join(ROOT, "content"), n => /\.(md|njk|js|json|css|html|txt|xml)$/i.test(n)),
    ...walk(path.join(ROOT, "js")),
    ...walk(path.join(ROOT, "lib")),
    ...walk(path.join(ROOT, "scripts")),
    path.join(ROOT, "eleventy.config.js")
  ];
  const referenced = new Set();
  const tokenRe = /[\w.\-%]+\.(?:jpe?g|png|webp|gif|svg)/gi;
  for (const f of textFiles) {
    if (/\.bak$|\.bck$/.test(f)) continue;
    let txt;
    try { txt = fs.readFileSync(f, "utf8"); } catch { continue; }
    for (const m of txt.match(tokenRe) || []) referenced.add(decodeURIComponent(m).toLowerCase());
  }

  // Convenciones que arman el nombre en la plantilla (no aparecen literal).
  const slugs = new Set(activities.map(a => a.fileSlug.toLowerCase()));
  const pageUrls = new Map();
  for (const u of collectionApi.getAll().flatMap(i => i.data.pagination?.hrefs || [i.url])) {
    if (u) pageUrls.set(u.split("/").filter(Boolean).join("-").toLowerCase(), u);
  }
  const pageBases = new Set(pageUrls.keys());
  const usedByConvention = file => {
    const r = rel(file);
    const name = path.basename(r).toLowerCase();
    const stem = name.replace(IMG_EXT, "");
    if (r.startsWith("imagenes/actividades/")) return slugs.has(stem);
    if (r.startsWith("imagenes/heroes/")) return pageBases.has(stem);
    if (r.startsWith("imagenes/insignias/")) return badgeIds.has(stem);
    if (r.startsWith("imagenes/ods/")) return /^ods-\d+$/.test(stem);
    if (r.startsWith("imagenes/ramas/")) return true;
    return false;
  };

  const allImages = walk(path.join(ROOT, "imagenes"), n => IMG_EXT.test(n));
  const vacias = [], rotas = [], pesadas = [], sobrantes = [];
  for (const f of allImages) {
    const size = fs.statSync(f).size;
    const st = imageState(f);
    const item = { file: rel(f), size: fmtSize(size) };
    if (st === "vacía") vacias.push(item);
    else if (st === "corrupta") rotas.push(item);
    if (size > BIG) pesadas.push({ ...item, bytes: size });
    const name = path.basename(f).toLowerCase();
    if (!referenced.has(name) && !usedByConvention(f)) sobrantes.push(item);
  }
  pesadas.sort((a, b) => b.bytes - a.bytes);


  // ---------- Heroes de las páginas de índices ----------
  const sections = ["ods", "edades", "activitytype", "habilidades", "metodoscout", "valoresscout"];
  const heroExists = base => ["png", "jpg", "jpeg", "webp"].some(ext => {
    const f = path.join(ROOT, "imagenes/heroes", base + "." + ext);
    return fs.existsSync(f) && fs.statSync(f).size > 0;
  });
  const heroesFaltan = [...pageBases]
    .filter(b => sections.some(s => b.startsWith(s + "-")) && !/-print$/.test(b))
    .filter(b => !heroExists(b))
    .sort()
    .map(b => ({ file: "imagenes/heroes/" + b + ".jpg", url: pageUrls.get(b) }));

  // ---------- Insignias ----------
  const insignias = [];
  for (const b of badges) {
    const logo = b.logo || "/imagenes/insignias/" + b.id + ".png";
    const sl = imageState(path.join(ROOT, logo));
    if (sl !== "ok") insignias.push({ id: b.id, name: b.name, what: "Logo " + sl, file: logo });
    if (!b.hero_image) insignias.push({ id: b.id, name: b.name, what: "Sin hero_image", file: "" });
    else {
      const sh = imageState(path.join(ROOT, b.hero_image));
      if (sh !== "ok") insignias.push({ id: b.id, name: b.name, what: "Hero " + sh, file: b.hero_image });
    }
  }

  // ---------- Datos de las fichas ----------
  const badgeDesconocida = [], taxonomia = [], linkRelativo = [], sinDescripcion = [], pendientesLicencia = [];
  const titles = new Map();
  const list = v => (Array.isArray(v) ? v : v ? [v] : []);

  for (const a of activities) {
    const d = a.data;
    const ref = fichaRef(a);

    for (const id of list(d.activity_badges)) {
      const k = String(id && id.id ? id.id : id).toLowerCase();
      if (!badgeIds.has(k)) badgeDesconocida.push({ ...ref, value: k });
    }

    for (const [key, [label]] of Object.entries(catalogs)) {
      for (const v of list(d[key])) {
        if (typeof v === "string" && !names[key].has(v)) taxonomia.push({ ...ref, what: label, value: v });
      }
    }

    for (const l of list(d.link)) {
      const u = typeof l === "string" ? l : l && l.url;
      // "www.algo.org/…" está bien (la plantilla le antepone https://);
      // lo que falla es una ruta sin dominio ("/fogata-recursos/…", "../…").
      if (u && !/^(https?:|mailto:)/i.test(u) && !/^[\w-]+(\.[\w-]+)+(\/|$)/.test(u)) linkRelativo.push({ ...ref, value: u });
    }

    if (!d.description || !String(d.description).trim()) sinDescripcion.push(ref);

    if (d.license && d.license.pending) pendientesLicencia.push({ ...ref, value: d.license.pending });

    const t = String(d.seo_title || d.title || "").trim().toLowerCase();
    if (t) titles.set(t, [...(titles.get(t) || []), ref]);
  }

  const duplicados = [...titles.entries()]
    .filter(([, refs]) => refs.length > 1)
    .map(([title, refs]) => ({ title: refs[0].title, refs }));

  const groups = [
    {
      id: "fichas-imagen",
      title: "Fichas: imagen que falta o está rota",
      help: "La ficha declara una imagen que no existe, pesa 0 bytes o no es un archivo de imagen válido. Se ve rota o cae en la genérica.",
      kind: "ficha-img",
      items: [
        ...fichaImg.falta.map(x => ({ ...x, state: "falta" })),
        ...fichaImg.vacía.map(x => ({ ...x, state: "vacía (0 bytes)" })),
        ...fichaImg.corrupta.map(x => ({ ...x, state: "corrupta" }))
      ]
    },
    {
      id: "fichas-sin-imagen",
      title: "Fichas sin imagen propia",
      help: "No declaran «image» ni hay un archivo imagenes/actividades/<slug>.jpg|png|webp. Muestran la imagen genérica.",
      kind: "ficha",
      items: fichaImg.sin
    },
    {
      id: "imagenes-vacias",
      title: "Imágenes de 0 bytes",
      help: "Archivos vacíos en imagenes/ (marcadores sin imagen). Regenerarlos o borrarlos.",
      kind: "file",
      items: vacias
    },
    {
      id: "imagenes-rotas",
      title: "Imágenes corruptas",
      help: "El contenido no corresponde a JPG/PNG/WebP/GIF (archivo truncado, HTML guardado como imagen, etc.).",
      kind: "file",
      items: rotas
    },
    {
      id: "heroes-faltan",
      title: "Páginas de índices sin hero",
      help: "Caen en el hero genérico. Convención: imagenes/heroes/<sección>-<id>.png|jpg|webp.",
      kind: "hero",
      items: heroesFaltan
    },
    {
      id: "insignias",
      title: "Insignias: logo o hero faltante",
      help: "Datos de content/_data/badges.js.",
      kind: "badge",
      items: insignias
    },
    {
      id: "imagenes-sobrantes",
      title: "Imágenes que nadie usa",
      help: "No aparecen en ninguna ficha, plantilla, CSS ni JS, ni encajan en una convención (slug de ficha, hero de índice, id de insignia). Revisar antes de borrar: alguna puede estar reservada para algo futuro.",
      kind: "file",
      items: sobrantes
    },
    {
      id: "pesadas",
      title: "Imágenes de más de 1,5 MB",
      help: "Las miniaturas se generan en el build, pero el original pesado se publica igual y se usa en el hero.",
      kind: "file",
      items: pesadas
    },
    {
      id: "taxonomia",
      title: "Nombres que no están en los catálogos",
      help: "Habilidad, valor, método o tipo que no coincide exacto con allskills/scoutValues/scoutMethod/activityTypes. La ficha no aparece en esa página.",
      kind: "ficha-val",
      items: taxonomia
    },
    {
      id: "insignia-desconocida",
      title: "Insignias que no existen",
      help: "activity_badges con un id que no está en badges.js. La ficha cae en General.",
      kind: "ficha-val",
      items: badgeDesconocida
    },
    {
      id: "link-relativo",
      title: "Enlaces «link:» sin dominio",
      help: "La plantilla antepone https:// a todo lo que no lo tiene: una ruta interna tiene que ser la URL completa (https://mok726.github.io/fogata-recursos/…).",
      kind: "ficha-val",
      items: linkRelativo
    },
    {
      id: "sin-descripcion",
      title: "Fichas sin descripción",
      help: "Sin «description»: afecta cards, buscadores y redes.",
      kind: "ficha",
      items: sinDescripcion
    },
    {
      id: "duplicados",
      title: "Títulos repetidos",
      help: "Mismo título (o seo_title) en fichas distintas. Usar seo_title para diferenciarlas en buscadores.",
      kind: "dup",
      items: duplicados
    },
    {
      id: "licencia-pendiente",
      title: "Fichas esperando permiso",
      help: "Tienen license.pending. Informativo: no es un error.",
      kind: "ficha-val",
      info: true,
      items: pendientesLicencia
    }
  ];

  return [{ generated: new Date(), total: activities.length, images: allImages.length, groups }];
};
