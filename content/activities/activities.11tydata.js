const fs = require("fs");
const path = require("path");

// Si una actividad no declara `image` en el front matter, usa
// imagenes/actividades/<slug>.(jpg|png|webp) cuando el archivo existe.
// Así las imágenes generadas aparecen sin tener que editar cada .md.
const EXTS = ["jpg", "png", "webp"];

module.exports = {
  eleventyComputed: {
    image: (data) => {
      if (data.image) return data.image;
      const slug = data.page && data.page.fileSlug;
      if (!slug) return data.image;
      for (const ext of EXTS) {
        const rel = `/imagenes/actividades/${slug}.${ext}`;
        if (fs.existsSync(path.join(__dirname, "..", "..", rel))) return rel;
      }
      return data.image;
    },
  },
};
