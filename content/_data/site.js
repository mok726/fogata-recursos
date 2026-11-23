module.exports = {

  name:
    "Fogata de Recursos",

  description:
    "Biblioteca scout de actividades, juegos y recursos educativos reutilizables.",

  // Dirección pública del sitio. Para pasar al dominio propio
  // (fogata.com.ar) alcanza con cambiar estos dos valores:
  //   url: "https://fogata.com.ar", pathPrefix: ""
  // y configurar el dominio en Settings → Pages del repositorio.
  // Después, regenerar los QR de las fichas: ver scripts/devenv/QR.md.
  // Las URLs viejas escritas a mano en las fichas
  // (https://mok726.github.io/fogata-recursos/…) se reescriben solas
  // al generar el sitio (ver urlAnterior en eleventy.config.js).
  url:
    process.env.SITE_URL ??
    "https://mok726.github.io",

  pathPrefix:
    process.env.PATH_PREFIX ??
    "/fogata-recursos",

  // Dirección anterior del sitio, para reescribir enlaces viejos.
  urlAnterior:
    "https://mok726.github.io/fogata-recursos",

  author:
    "Mariano S. Cosentino",

  language:
    "es",

  // Códigos de verificación (solo el valor de content="…"):
  // Google Search Console y Bing Webmaster Tools.
  verification: {
    google: "",
    bing: ""
  },

  repository:
    "https://github.com/mok726/fogata-recursos"

};
