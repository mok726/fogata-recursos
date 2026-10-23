// scripts/make-thumbs.js
//
// Genera versiones livianas (WebP) de las imágenes que se muestran
// chicas en el sitio: tarjetas de actividad, íconos de rama y logo.
//
// Las originales no se tocan. Las miniaturas van a .cache/thumbs/
// (ignorado por git) y Eleventy las copia a docs/imagenes/_thumbs/.
// Sólo se regenera una miniatura si no existe o si la original es
// más nueva, así que después de la primera vez es casi instantáneo.
//
// Uso: node scripts/make-thumbs.js

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const presets = require("../content/_data/thumbPresets.js");

const ROOT = path.join(__dirname, "..");
const OUT = path.join(ROOT, ".cache", "thumbs");

const IMAGE_EXT = /\.(png|jpe?g|webp)$/i;


function needsUpdate(source, target) {

  if (!fs.existsSync(target)) {
    return true;
  }

  return fs.statSync(source).mtimeMs > fs.statSync(target).mtimeMs;

}


function sourcesFor(preset) {

  const dir = path.join(ROOT, preset.dir);

  if (preset.files) {
    return preset.files.map(f => path.join(dir, f));
  }

  return fs.readdirSync(dir)
    .filter(f => IMAGE_EXT.test(f))
    .map(f => path.join(dir, f));

}


async function main() {

  let created = 0;
  let skipped = 0;
  let failed = 0;

  for (const [name, preset] of Object.entries(presets)) {

    const targetDir = path.join(OUT, name);

    fs.mkdirSync(targetDir, { recursive: true });

    for (const source of sourcesFor(preset)) {

      const target = path.join(
        targetDir,
        path.basename(source).replace(IMAGE_EXT, ".webp")
      );

      if (!needsUpdate(source, target)) {
        skipped++;
        continue;
      }

      try {

        await sharp(source)
          .resize({
            width: preset.width,
            height: preset.height,
            fit: "inside",
            withoutEnlargement: true
          })
          .webp({ quality: preset.quality || 70 })
          .toFile(target);

        created++;

      } catch (err) {

        console.error(`  ✗ ${path.relative(ROOT, source)}: ${err.message}`);
        failed++;

      }

    }

  }

  console.log(
    `Miniaturas: ${created} generadas, ${skipped} sin cambios, ${failed} con error.`
  );

}


main();
