// Textos cargados a mano en _data (descripciones de insignias, secciones,
// requisitos): aceptan markdown (**negrita**, *cursiva*, listas con "* "),
// HTML simple (<br>, <p>, <b>, <a>…) y saltos de línea "\n".
//   - "\n" = salto de línea; "\n\n" o <p> = párrafo nuevo.
//   - <br> se trata como "\n", así una lista "<br>* ítem" queda como lista.
const markdownIt = require("markdown-it");

const md = markdownIt({ html: true, breaks: true, linkify: true, typographer: false });

function normalizar(texto) {
  return String(texto)
    .replace(/\r\n?/g, "\n")
    .replace(/<\/?p\s*>/gi, "\n\n")
    .replace(/<br\s*\/?>/gi, "\n")
    // sangrías del archivo fuente: si no, markdown las toma como bloque de código
    .replace(/^[ \t]+/gm, "")
    .replace(/[ \t]+$/gm, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function textoRico(texto) {
  if (texto === undefined || texto === null || texto === "") return "";
  return md.render(normalizar(texto)).trim();
}

function textoPlano(texto) {
  const html = textoRico(texto);
  return html
    .replace(/<\/(p|li|h\d)>/gi, " ")
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&#x27;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

module.exports = { textoRico, textoPlano };
