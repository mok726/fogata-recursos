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

function automaticos(badges) {
  const nombre = {};
  for (const b of badges) nombre[b.id] = b.name;
  const hitos = [];

  // Insignias nuevas, agrupadas por día.
  const porDiaIns = {};
  for (const [id, f] of Object.entries(altasDeInsignias())) {
    if (!nombre[id]) continue;          // insignia que ya no existe
    (porDiaIns[dia(f)] ||= []).push(id);
  }
  for (const [d, ids] of Object.entries(porDiaIns)) {
    const nombres = ids.map(id => nombre[id]).sort((a, b) => a.localeCompare(b, "es"));
    hitos.push({
      fecha: d,
      tipo: "insignia",
      titulo: ids.length === 1
        ? `Nueva insignia: ${nombres[0]}`
        : `${ids.length} insignias nuevas`,
      texto: ids.length === 1 ? "" : listaDeNombres(nombres),
      enlace: ids.length === 1 ? `/badges/${ids[0]}/` : "",
      auto: true
    });
  }

  // Tandas de fichas por día y marcas de cantidad.
  const altas = Object.entries(altasDeFichas()).sort((a, b) => a[1].localeCompare(b[1]));
  const porDia = {};
  for (const [archivo, f] of altas) {
    const d = dia(f);
    const ins = insigniaPrincipal(archivo) || "sin-insignia";
    ((porDia[d] ||= {})[ins] ||= 0);
    porDia[d][ins]++;
  }
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
      hitos.push({
        fecha: dia(f),
        tipo: "marca",
        titulo: `${acumulado.toLocaleString("es-AR")} fichas publicadas`,
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
  const s = String(fecha);
  const m = s.match(/^(\d{4})(?:-(\d{1,2}))?(?:-(\d{1,2}))?$/);
  if (!m) return s;                      // texto libre: se muestra tal cual
  if (m[3]) return `${Number(m[3])} de ${MESES[Number(m[2]) - 1]}`;
  if (m[2]) return MESES[Number(m[2]) - 1];
  return "";
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
      fechaLegible: fechaLegible(h.fecha)
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
