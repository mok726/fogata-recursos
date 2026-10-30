# Heroes de las cards de los índices

Si existe `<sección>-<id>.png` (o `.jpg`, `.webp`), la card del
índice lo usa como portada; si no, usa el hero por defecto
(`imagenes/actividades/activity-card.png`). Ejemplos:

- `ods-13.png` → ODS 13 en /ods/
- `edades-manada.png` → Manada en /edades/
- `competencias-liderazgo.png` → /competencias/liderazgo/
- `valoresScout-hermandad.png`, `metodoScout-marco-simbolico.png`,
  `activityType-juego.png`

El `<id>` es el último tramo de la URL de la página de detalle.
Las insignias usan `hero_image` de `content/_data/badges.js`.
Tamaño sugerido: 2048×873 (como el hero por defecto).
