// «Actividad del día»: rotación fija por fecha.
//
// Las actividades con imagen se ordenan por un hash del nombre
// de archivo (mezcla estable: no depende del orden de git ni del
// título) y cada día toca la siguiente. Recorre todas antes de
// repetir. Agregar una ficha nueva la inserta en un punto al azar
// de la vuelta, así que puede correr en uno el resto de los días;
// es aceptable (no hay estado que mantener).
//
// La usan la landing, /actividad-del-dia.json y los feeds; el
// anuncio en redes (.github/scripts/anunciar.mjs) lee ese JSON,
// así sitio y redes muestran siempre la misma ficha.

const crypto = require("crypto");

const SEMILLA = "fogata-2026";
const INICIO = "2026-11-05"; // día 0 de la rotación
const ZONA = "America/Argentina/Buenos_Aires";

// "AAAA-MM-DD" de una fecha en hora argentina.
function fechaLocal(date = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: ZONA, year: "numeric", month: "2-digit", day: "2-digit"
  }).format(date);
}

function sumarDias(fecha, n) {
  const d = new Date(fecha + "T12:00:00Z");
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}

function diasDesdeInicio(fecha) {
  return Math.round(
    (Date.parse(fecha + "T12:00:00Z") - Date.parse(INICIO + "T12:00:00Z")) / 864e5
  );
}

function hash(s) {
  return crypto.createHash("sha1").update(SEMILLA + ":" + s).digest("hex");
}

// items: [{ key, ... }] -> mismo array mezclado de forma estable.
function rotacion(items) {
  return items
    .map(it => ({ it, h: hash(it.key) }))
    .sort((a, b) => (a.h < b.h ? -1 : a.h > b.h ? 1 : 0))
    .map(x => x.it);
}

// La ficha que corresponde a `fecha` dentro de una rotación.
function delDia(lista, fecha) {
  if (!lista.length) return null;
  const n = lista.length;
  return lista[((diasDesdeInicio(fecha) % n) + n) % n];
}

module.exports = { fechaLocal, sumarDias, rotacion, delDia, INICIO, ZONA };
