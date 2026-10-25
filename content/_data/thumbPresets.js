// Tamaños de las miniaturas que genera scripts/make-thumbs.js.
// Los usa también el filtro "thumb" de eleventy.config.js.
//
// width/height son el máximo; se respeta la proporción original
// salvo con fit: "cover", que recorta. format: "jpeg" o "webp"
// (por defecto).

module.exports = {

  // Imagen de las tarjetas de actividad (se muestra a ~220px de alto).
  card: {
    dir: "imagenes/actividades",
    width: 800,
    quality: 70
  },

  // Íconos de rama (36px en tarjetas, más grandes en /edades/).
  rama: {
    dir: "imagenes/ramas",
    width: 256,
    height: 256,
    quality: 80
  },

  // Vista previa al compartir (og:image). WhatsApp y Facebook
  // necesitan JPG/PNG de ~1200x630. El recorte busca la zona
  // con más detalle ("attention"): las imágenes suelen tener el
  // sujeto a la derecha y espacio vacío a la izquierda.
  og: {
    dir: "imagenes/actividades",
    width: 1200,
    height: 630,
    fit: "cover",
    position: "attention",
    format: "jpeg",
    quality: 80
  },

  // Fogata del hero de la home (~360px de ancho, x2 para retina).
  hero: {
    dir: "imagenes",
    files: ["favicon.png"],
    width: 720,
    quality: 85
  },

  // Logo del navbar (32px).
  logo: {
    dir: "imagenes",
    files: ["favicon.png"],
    height: 96,
    quality: 85
  }

};
