// Anuncia la «Actividad del día» en redes. Lo corre deploy.yml
// una vez por día, después de publicar el sitio.
//
// Uso: node anunciar.mjs docs/actividad-del-dia.json
//
// Cada red se activa sola si están sus secrets (Settings →
// Secrets and variables → Actions). Sin secrets, se saltea.
//   Telegram: TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID (@canal o id)
//   Mastodon: MASTODON_URL (https://instancia), MASTODON_TOKEN
//   Bluesky:  BSKY_HANDLE, BSKY_APP_PASSWORD
//   Facebook: FB_PAGE_ID, FB_PAGE_TOKEN (token de Página)
//   Instagram: IG_USER_ID + FB_PAGE_TOKEN (cuenta profesional
//              vinculada a la Página; permisos instagram_basic e
//              instagram_content_publish)
// DRY_RUN=1 sólo muestra lo que publicaría.
// REDES=telegram,bluesky limita a esas redes (default: todas).

import { readFileSync } from "node:fs";

const datos = JSON.parse(readFileSync(process.argv[2], "utf8"));
const hoy = new Intl.DateTimeFormat("en-CA", {
  timeZone: "America/Argentina/Buenos_Aires",
  year: "numeric", month: "2-digit", day: "2-digit"
}).format(new Date());

const act = datos.dias.find(d => d.fecha === hoy);
if (!act) {
  console.error(`No hay actividad para ${hoy} en el JSON.`);
  process.exit(1);
}

const env = process.env;
const titulo = `🔥 Actividad del día: ${act.title}`;
const texto = (max) => {
  // Título + descripción recortada para que entre con el link.
  const resto = max - titulo.length - act.url.length - 4;
  let d = act.description || "";
  if (d.length > resto) d = d.slice(0, Math.max(0, resto - 1)).replace(/\s+\S*$/, "") + "…";
  return `${titulo}\n\n${d}\n\n${act.url}`;
};

async function pedir(url, opts, quien) {
  const r = await fetch(url, opts);
  const cuerpo = await r.text();
  if (!r.ok) throw new Error(`${quien}: HTTP ${r.status} ${cuerpo.slice(0, 800)}`);
  return cuerpo ? JSON.parse(cuerpo) : {};
}

const redes = {

  telegram: {
    activa: env.TELEGRAM_BOT_TOKEN && env.TELEGRAM_CHAT_ID,
    publicar: () => pedir(
      `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendPhoto`,
      { method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: env.TELEGRAM_CHAT_ID, photo: act.image, caption: texto(1024) }) },
      "Telegram")
  },

  mastodon: {
    // Mastodon arma la vista previa del link con og:image.
    activa: env.MASTODON_URL && env.MASTODON_TOKEN,
    publicar: () => pedir(
      `${env.MASTODON_URL.replace(/\/$/, "")}/api/v1/statuses`,
      { method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${env.MASTODON_TOKEN}` },
        body: JSON.stringify({ status: texto(500), language: "es", visibility: "public" }) },
      "Mastodon")
  },

  bluesky: {
    activa: env.BSKY_HANDLE && env.BSKY_APP_PASSWORD,
    publicar: async () => {
      const api = "https://bsky.social/xrpc/";
      const ses = await pedir(api + "com.atproto.server.createSession",
        { method: "POST", headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ identifier: env.BSKY_HANDLE, password: env.BSKY_APP_PASSWORD }) },
        "Bluesky");
      const auth = { Authorization: `Bearer ${ses.accessJwt}` };
      const embed = { $type: "app.bsky.embed.external",
        external: { uri: act.url, title: act.title, description: act.description || "" } };
      try {
        // Miniatura de la tarjeta (límite de Bluesky: ~1 MB).
        const img = Buffer.from(await (await fetch(act.image)).arrayBuffer());
        if (img.length < 950_000) {
          const blob = await pedir(api + "com.atproto.repo.uploadBlob",
            { method: "POST", headers: { ...auth, "Content-Type": "image/jpeg" }, body: img }, "Bluesky");
          embed.external.thumb = blob.blob;
        }
      } catch (e) { console.warn("Bluesky: sin miniatura:", e.message); }
      const t = texto(300);
      const ini = Buffer.byteLength(t.slice(0, t.lastIndexOf(act.url)));
      return pedir(api + "com.atproto.repo.createRecord",
        { method: "POST", headers: { ...auth, "Content-Type": "application/json" },
          body: JSON.stringify({ repo: ses.did, collection: "app.bsky.feed.post", record: {
            $type: "app.bsky.feed.post", text: t, langs: ["es"], createdAt: new Date().toISOString(), embed,
            facets: [{ index: { byteStart: ini, byteEnd: ini + Buffer.byteLength(act.url) },
              features: [{ $type: "app.bsky.richtext.facet#link", uri: act.url }] }] } }) },
        "Bluesky");
    }
  },

  instagram: {
    // Imagen + texto. En Instagram los links del texto no son
    // clickeables: se deja la URL igual y se remite a la bio.
    activa: env.IG_USER_ID && env.FB_PAGE_TOKEN,
    publicar: async () => {
      const api = `https://graph.facebook.com/v21.0/${env.IG_USER_ID}`;
      const caption = `${titulo}\n\n${act.description || ""}\n\n` +
        `Ficha completa: link en la bio o ${act.url}\n\n` +
        "#scouts #actividadesscout #educacionnoformal #fogataderecursos";
      const cont = await pedir(`${api}/media`,
        { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({ image_url: act.image, caption, access_token: env.FB_PAGE_TOKEN }) },
        "Instagram");
      // El contenedor puede tardar unos segundos en procesarse.
      for (let i = 0; ; i++) {
        try {
          return await pedir(`${api}/media_publish`,
            { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: new URLSearchParams({ creation_id: cont.id, access_token: env.FB_PAGE_TOKEN }) },
            "Instagram");
        } catch (e) {
          if (i >= 5) throw e;
          await new Promise(r => setTimeout(r, 5000));
        }
      }
    }
  },

  facebook: {
    // Publicación en una Página (no en un perfil personal: Meta no lo permite).
    activa: env.FB_PAGE_ID && env.FB_PAGE_TOKEN,
    publicar: () => pedir(
      `https://graph.facebook.com/v21.0/${env.FB_PAGE_ID}/feed`,
      { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ message: texto(2000).replace(`\n\n${act.url}`, ""), link: act.url,
          access_token: env.FB_PAGE_TOKEN }) },
      "Facebook")
  }

};

console.log(`${hoy}: ${act.title} → ${act.url}`);
let fallas = 0;

const elegidas = (env.REDES || "todas").split(",").map(x => x.trim().toLowerCase());
const todas = elegidas.includes("todas");

for (const [nombre, red] of Object.entries(redes)) {
  if (!todas && !elegidas.includes(nombre)) continue;
  if (!red.activa) { console.log(`- ${nombre}: sin secrets, se saltea`); continue; }
  if (env.DRY_RUN) { console.log(`- ${nombre}: (prueba) publicaría`); continue; }
  try { await red.publicar(); console.log(`- ${nombre}: publicado`); }
  catch (e) { fallas++; console.error(`- ${nombre}: ERROR ${e.message}`); }
}

// Falla el job (y GitHub avisa por mail) si alguna red falló.
process.exit(fallas ? 1 : 0);
