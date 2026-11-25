// Línea de tiempo del proyecto (/linea-de-tiempo/).
//
// Junta dos fuentes:
//   - content/_data/lineaDeTiempo.yml: hitos cargados a mano (la historia
//     previa al repo y todo lo que git no puede saber).
//   - el historial de git: insignias nuevas, tandas de fichas y cantidades
//     redondas de fichas publicadas. Se recalcula en cada build, así que
//     se actualiza sola cuando entran fichas o insignias.
//
// Sin historial git (clon superficial) quedan solo los hitos manuales.

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const yaml = require("js-yaml");

const RAIZ = path.join(__dirname, "..");
const DIR_ACT = "content/activities/";
const BADGES = "content/_data/badges.js";
const MANUALES = "content/_data/lineaDeTiempo.yml";
const AJUSTES = "content/_data/lineaDeTiempoAjustes.yml";

// Una tanda de fichas entra a la línea si suma al menos esto en un día.
const TANDA_MINIMA = 10;
// Cantidades de fichas publicadas que se marcan como hito.
const MARCAS = [100, 250, 500, 750, 1000, 1250, 1500, 1750, 2000, 2500, 3000];

function git(args) {
  return execSync(`git ${args}`, {
    cwd: RAIZ,
    encoding: "utf8",
    maxBuffer: 128 * 1024 * 1024
  });
}

const dia = iso => iso.slice(0, 10);

// Primera alta de cada ficha con su nombre actual, siguiendo renombres.
function altasDeFichas() {
  const log = git(`log -M --name-status --format="§§%cI" -- ${DIR_ACT}`);
  const actuales = new Set(
    fs.readdirSync(path.join(RAIZ, DIR_ACT))
      .filter(f => f.endsWith(".md"))
      .map(f => DIR_ACT + f)
  );
  const alias = {};   // nombre viejo -> nombre actual
  const alta = {};    // nombre actual -> fecha ISO
  let fecha = "";

  // git log va del más nuevo al más viejo.
  for (const linea of log.split("\n")) {
    if (linea.startsWith("§§")) { fecha = linea.slice(2); continue; }
    const partes = linea.split("\t");
    const estado = partes[0];
    if (!estado) continue;
    if (estado.startsWith("R")) {
      const [, viejo, nuevo] = partes;
      const actual = alias[nuevo] || (actuales.has(nuevo) ? nuevo : null);
      if (actual) alias[viejo] = actual;
    } else if (estado === "A") {
      const p = partes[1];
      const actual = alias[p] || (actuales.has(p) ? p : null);
      if (actual) alta[actual] = fecha;
    }
  }
  return alta;
}

// Primera aparición de cada id en badges.js.
function altasDeInsignias() {
  const log = git(`log --reverse -p --format="§§%cI" -- ${BADGES}`);
  const alta = {};
  let fecha = "";
  for (const linea of log.split("\n")) {
    if (linea.startsWith("§§")) { fecha = linea.slice(2); continue; }
    const m = linea.match(/^\+\s*id:\s*["']([^"']+)["']/);
    if (m && !alta[m[1]]) alta[m[1]] = fecha;
  }
  return alta;
}

function insigniaPrincipal(archivo) {
  try {
    const fm = matter(fs.readFileSync(path.join(RAIZ, archivo), "utf8")).data;
    const b = fm.activity_badges;
    return Array.isArray(b) ? b[0] : b || null;
  } catch (e) {
    return null;
  }
}

function listaDeNombres(nombres, max = 6) {
  if (nombres.length <= max) {
    return nombres.length > 1
      ? nombres.slice(0, -1).join(", ") + " y " + nombres.at(-1)
      : nombres[0] || "";
  }
  return nombres.slice(0, max).join(", ") + ` y ${nombres.length - max} más`;
}

// Ajustes de la parte automática (content/_data/lineaDeTiempoAjustes.yml):
//   hasta + insignias: fechas «de historia» para lo que se cargó de golpe
//     al crear el sitio. Lo que git fechó antes de `hasta` toma la fecha de
//     su insignia; lo posterior queda con la fecha real.
//   notas: texto propio para el hito de una insignia.
//   colecciones: insignias que no son insignias oficiales; llevan
//     `nota_colecciones` si no tienen nota propia.
function ajustes() {
  try {
    const a = yaml.load(fs.readFileSync(path.join(RAIZ, AJUSTES), "utf8")) || {};
    return {
      hasta: String(a.hasta || ""),
      insignias: a.insignias || {},
      notas: a.notas || {},
      colecciones: new Set(a.colecciones || []),
      notaColecciones: a.nota_colecciones || ""
    };
  } catch (e) {
    return { hasta: "", insignias: {}, notas: {}, colecciones: new Set(), notaColecciones: "" };
  }
}

const fichas = n => `${n.toLocaleString("es-AR")} ${n === 1 ? "ficha" : "fichas"}`;

function automaticos(badges, aj = ajustes()) {
  const ajustar = (id, f) =>
    aj.hasta && f < aj.hasta && aj.insignias[id] ? String(aj.insignias[id]) : f;
  const nombre = {};
  for (const b of badges) nombre[b.id] = b.name;
  const hitos = [];

  // Fichas nuevas por día y por insignia principal.
  const altas = Object.entries(altasDeFichas())
    .map(([archivo, f]) => {
      const ins = insigniaPrincipal(archivo) || "sin-insignia";
      return [archivo, ajustar(ins, f), ins];
    })
    .sort((a, b) => a[1].localeCompare(b[1]));
  const porDia = {};
  for (const [, f, ins] of altas) {
    const d = dia(f);
    ((porDia[d] ||= {})[ins] ||= 0);
    porDia[d][ins]++;
  }

  // Cada insignia nueva es su propio hito, con las fichas que entraron
  // con ella ese mismo día.
  for (const [id, f] of Object.entries(altasDeInsignias())) {
    if (!nombre[id]) continue;          // insignia que ya no existe
    const d = dia(ajustar(id, f));
    const n = (porDia[d] || {})[id] || 0;
    if (n) delete porDia[d][id];
    const nota = aj.notas[id] || (aj.colecciones.has(id) ? aj.notaColecciones : "");
    hitos.push({
      fecha: d,
      tipo: "insignia",
      titulo: `Nueva insignia: ${nombre[id]}`,
      texto: [nota, n ? `Llega con ${fichas(n)}.` : ""].filter(Boolean).join(" "),
      enlace: `/badges/${id}/`,
      auto: true
    });
  }

  // Lo demás que entró el mismo día, si es una tanda grande.
  for (const [d, grupos] of Object.entries(porDia)) {
    const total = Object.values(grupos).reduce((a, b) => a + b, 0);
    if (total < TANDA_MINIMA) continue;
    const detalle = Object.entries(grupos)
      .sort((a, b) => b[1] - a[1])
      .map(([id, n]) => `${nombre[id] || "otras"} (${n})`);
    hitos.push({
      fecha: d,
      tipo: "fichas",
      titulo: `+${total} fichas`,
      texto: listaDeNombres(detalle, 5),
      enlace: "",
      auto: true
    });
  }

  let acumulado = 0;
  let marca = 0;
  for (const [, f] of altas) {
    acumulado++;
    if (acumulado === MARCAS[marca]) {
      // Dos marcas el mismo día: queda la más alta.
      const previa = hitos.findIndex(h => h.tipo === "marca" && h.fecha === dia(f));
      if (previa >= 0) hitos.splice(previa, 1);
      hitos.push({
        fecha: dia(f),
        tipo: "marca",
        titulo: `${acumulado.toLocaleString("es-AR")} fichas en la colección`,
        texto: "",
        enlace: "/activities/",
        auto: true
      });
      marca++;
    }
  }

  return hitos;
}

// "2019", "2019-03", "2019-03-15", "aprox. 2015", "2015?" -> clave de orden.
function claveDeOrden(fecha) {
  const m = String(fecha).match(/(\d{4})(?:-(\d{1,2}))?(?:-(\d{1,2}))?/);
  if (!m) return "0000-00-00";
  const p = n => String(n || 0).padStart(2, "0");
  return `${m[1]}-${p(m[2])}-${p(m[3])}`;
}

const MESES = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio",
  "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

// Fecha legible: "15 de marzo", "marzo", "aprox. 2015"...
function fechaLegible(fecha) {
  const s = String(fecha).trim();
  // "aprox. 2026-04" -> "aprox. abril"; "aprox. 2013" queda igual.
  const m = s.match(/^(.*?)\s*(\d{4})(?:-(\d{1,2}))?(?:-(\d{1,2}))?$/);
  if (!m) return s;                      // texto libre: se muestra tal cual
  const pre = m[1] ? m[1] + " " : "";
  if (m[4]) return `${pre}${Number(m[4])} de ${MESES[Number(m[3]) - 1]}`;
  if (m[3]) return pre + MESES[Number(m[3]) - 1];
  return m[1] ? s : "";
}

function hitosManuales() {
  try {
    return yaml.load(fs.readFileSync(path.join(RAIZ, MANUALES), "utf8")) || [];
  } catch (e) {
    console.warn(`[fogata] No se pudo leer ${MANUALES}: ${e.message}`);
    return [];
  }
}

// Devuelve [{ anio, hitos: [...] }], del más viejo al más nuevo.
function lineaDeTiempo(badges, manuales = hitosManuales()) {
  let auto = [];
  try {
    auto = automaticos(badges);
  } catch (e) {
    console.warn("[fogata] Línea de tiempo sin historial git: solo hitos manuales.");
  }

  const todos = [...(manuales || []).map(h => ({ ...h, auto: false })), ...auto]
    .filter(h => h && h.fecha && h.titulo)
    .map(h => ({
      ...h,
      fecha: String(h.fecha),
      tipo: h.tipo || "otro",
      clave: claveDeOrden(h.fecha),
      fechaLegible: fechaLegible(h.fecha),
      datetime: /^\d{4}(-\d{2}){0,2}$/.test(String(h.fecha)) ? String(h.fecha) : ""
    }))
    // Mismo día: primero lo manual (suele ser el hito «humano»).
    .sort((a, b) => a.clave.localeCompare(b.clave) || (a.auto - b.auto));

  const porAnio = [];
  for (const h of todos) {
    const anio = h.clave.slice(0, 4) === "0000" ? "Sin fecha" : h.clave.slice(0, 4);
    let g = porAnio.at(-1);
    if (!g || g.anio !== anio) porAnio.push(g = { anio, hitos: [] });
    g.hitos.push(h);
  }
  return porAnio;
}

module.exports = { lineaDeTiempo, claveDeOrden, fechaLegible };
