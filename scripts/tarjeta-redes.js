// Saca la imagen para redes de la «Actividad del día»: captura cada
// tarjeta de docs/redes/tarjeta/ (pages/redes-tarjeta.njk) y la guarda
// en docs/redes/<fecha>.jpg (1080 px de ancho). La publica
// .github/scripts/anunciar.mjs; si no está, usa la imagen og de siempre.
//
// Uso (después de eleventy): node scripts/tarjeta-redes.js
// Necesita Chrome o Chromium: CHROME_PATH=/ruta/al/ejecutable, o
// el Google Chrome que traen los runners de GitHub. Si no hay
// navegador o algo falla, avisa y sale sin error: el build sigue.

const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const site = require("../content/_data/site.js");

const DOCS = path.join(__dirname, "..", "docs");
const SALIDA = path.join(DOCS, "redes");
const PREFIJO = site.pathPrefix.replace(/\/$/, "");

const tipos = {
  ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript",
  ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp",
  ".svg": "image/svg+xml", ".json": "application/json"
};

// Servidor mínimo de docs/ con el prefijo del sitio (/fogata-recursos).
function servir() {
  const srv = http.createServer((req, res) => {
    let url = decodeURIComponent(req.url.split("?")[0]);
    if (url.startsWith(PREFIJO)) url = url.slice(PREFIJO.length);
    let f = path.join(DOCS, url);
    if (!f.startsWith(DOCS)) { res.statusCode = 403; return res.end(); }
    if (fs.existsSync(f) && fs.statSync(f).isDirectory()) f = path.join(f, "index.html");
    if (!fs.existsSync(f)) { res.statusCode = 404; return res.end(); }
    res.setHeader("Content-Type", tipos[path.extname(f).toLowerCase()] || "application/octet-stream");
    fs.createReadStream(f).pipe(res);
  });
  return new Promise(ok => srv.listen(0, "127.0.0.1", () => ok(srv)));
}

async function main() {
  let chromium;
  try { ({ chromium } = require("playwright-core")); }
  catch { return console.warn("tarjeta-redes: falta playwright-core, se saltea."); }

  const opciones = process.env.CHROME_PATH
    ? { executablePath: process.env.CHROME_PATH }
    : { channel: "chrome" };
  let navegador;
  try { navegador = await chromium.launch({ ...opciones, args: ["--no-sandbox"] }); }
  catch (e) {
    return console.warn(`tarjeta-redes: no hay Chrome (${e.message.split("\n")[0]}), se saltea.`);
  }

  const srv = await servir();
  try {
    const pagina = await navegador.newPage({ viewport: { width: 540, height: 1200 }, deviceScaleFactor: 2 });
    await pagina.goto(`http://127.0.0.1:${srv.address().port}${PREFIJO}/redes/tarjeta/`,
      { waitUntil: "networkidle", timeout: 60000 });
    await pagina.evaluate(() => document.fonts.ready);
    // Fotos originales (las cambia el script de la página).
    await pagina.waitForFunction(() => [...document.images].every(i => i.complete),
      null, { timeout: 30000 });

    fs.mkdirSync(SALIDA, { recursive: true });
    for (const t of await pagina.$$(".home-daily-dia")) {
      const fecha = await t.getAttribute("data-fecha");
      const archivo = path.join(SALIDA, `${fecha}.jpg`);
      await t.screenshot({ path: archivo, type: "jpeg", quality: 85 });
      console.log(`tarjeta-redes: ${path.relative(DOCS, archivo)} ` +
        `(${Math.round(fs.statSync(archivo).size / 1024)} KB)`);
    }
  } catch (e) {
    console.warn(`tarjeta-redes: ERROR ${e.message}; los anuncios usan la imagen og.`);
  } finally {
    await navegador.close();
    srv.close();
  }
}

main();
