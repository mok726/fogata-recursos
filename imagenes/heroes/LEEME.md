# Heroes de las cards de los índices

Si existe `<sección>-<id>.png` (o `.jpg`, `.webp`), la card del
índice lo usa como portada; si no, usa el hero por defecto
(`imagenes/actividades/activity-card.png`). Ejemplos:

- `ods-13.png` → ODS 13 en /ods/
- `edades-manada.png` → Manada en /edades/
- `habilidades-liderazgo.png` → /habilidades/liderazgo/
- `valoresscout-hermandad-y-fraternidad.jpg`, `metodoscout-marco-simbolico.png`,
  `activitytype-juego.png`

El nombre va siempre en minúsculas (el build corre en Linux,
que distingue mayúsculas).

El `<id>` es el último tramo de la URL de la página de detalle.
El nombre del archivo va **todo en minúsculas** (el sitio lo busca así),
aunque la URL tenga mayúsculas (`/valoresScout/...` → `valoresscout-...`).
Las insignias usan `hero_image` de `content/_data/badges.js`.
Tamaño sugerido: 2048×873 (como el hero por defecto).
