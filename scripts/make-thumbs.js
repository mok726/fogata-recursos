// scripts/make-thumbs.js
//
// Genera versiones livianas (WebP) de las imágenes que se muestran
// chicas en el sitio: tarjetas de actividad, íconos de rama y logo.
//
// Las originales no se tocan. Las miniaturas van a .cache/thumbs/
// (ignorado por git) y Eleventy las copia a docs/imagenes/_thumbs/.
// Sólo se regenera una miniatura si no existe o si cambió el
// contenido de la original o el preset. Se compara por hash y no
// por fecha porque en GitHub Actions todos los archivos tienen la
// fecha del checkout.
//
// Uso: node scripts/make-thumbs.js

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const presets = require("../content/_data/thumbPresets.js");

const ROOT = path.join(__dirname, "..");
const OUT = path.join(ROOT, ".cache", "thumbs");
const MANIFEST = path.join(ROOT, ".cache", "thumbs-manifest.json");

const IMAGE_EXT = /\.(png|jpe?g|webp)$/i;


function readManifest() {

  try {
    return JSON.parse(fs.readFileSync(MANIFEST, "utf8"));
  } catch {
    return {};
  }

}


function fingerprint(source, preset) {

  return crypto
    .createHash("sha1")
    .update(JSON.stringify(preset))
    .update(fs.readFileSync(source))
    .digest("hex");

}


function sourcesFor(preset) {

  const dir = path.join(ROOT, preset.dir);

  if (preset.files) {
    return preset.files.map(f => path.join(dir, f));
  }

  return fs.readdirSync(dir)
    .filter(f => IMAGE_EXT.test(f))
    .sort()
    .map(f => path.join(dir, f));

}


async function main() {

  const manifest = readManifest();
  const seen = {};

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

      const key = path.relative(OUT, target);

      // x.png y x.jpg darían la misma miniatura: se usa la primera.
      if (key in seen) {
        console.warn(`  ! ${path.relative(ROOT, source)}: ya existe ${key}, se omite`);
        continue;
      }

      const hash = fingerprint(source, preset);

      if (manifest[key] === hash && fs.existsSync(target)) {
        seen[key] = hash;
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

        seen[key] = hash;
        created++;

      } catch (err) {

        console.error(`  ✗ ${path.relative(ROOT, source)}: ${err.message}`);
        seen[key] = null;
        failed++;

      }

    }

  }

  fs.writeFileSync(MANIFEST, JSON.stringify(seen, null, 1));

  console.log(
    `Miniaturas: ${created} generadas, ${skipped} sin cambios, ${failed} con error.`
  );

}


main();
