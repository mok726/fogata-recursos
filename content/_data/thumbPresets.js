// Tamaños de las miniaturas que genera scripts/make-thumbs.js.
// Los usa también el filtro "thumb" de eleventy.config.js.
//
// width/height son el máximo; se respeta la proporción original.

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

  // Logo del navbar (32px).
  logo: {
    dir: "imagenes",
    files: ["favicon.png"],
    height: 96,
    quality: 85
  }

};
