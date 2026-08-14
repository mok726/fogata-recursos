# Guía de migración - Reorganización de CSS

## 1. Reemplazar archivos en `content/css/`

Copiá estos archivos tal cual, pisando los que ya existen:

```
content/css/
├── base.css              (NUEVO)
├── layout.css             (reescrito - ver notas abajo)
├── main.css               (reescrito - mucho más chico)
├── variables.css          (sin cambios de contenido)
├── components/
│   ├── chips.css          (NUEVO)
│   ├── icons.css          (NUEVO - arregla el bug de íconos)
│   ├── components.css     (reescrito - sin .chip/.meta)
│   ├── cards.css          (reescrito - fusiona cards.css + cards-v2.css)
│   ├── disclosure.css     (sin cambios de contenido)
│   ├── search.css         (sin cambios de contenido)
│   ├── navbar.css         (sin cambios de contenido)
│   ├── footer.css         (sin cambios de contenido)
│   └── responsive.css     (sin cambios de contenido)
└── pages/
    ├── home.css            (reescrito - hero-button ahora con ámbito)
    ├── activity.css        (reescrito - sin la regla base de íconos)
    ├── ages.css             (sin cambios de contenido)
    ├── badges.css           (sin cambios de contenido, cambia dónde se carga)
    └── feedback.css         (NUEVO - la página no tenía estilos)
```

## 2. Borrar estos archivos (ya no se usan / están duplicados)

```
content/css/css/                      ← toda la carpeta duplicada
content/css/main.css.old
content/css/components/cards-old.css
content/css/components/cards-v2.css   ← fusionado dentro de cards.css
content/css/components/layout.css-funciona
content/css/components/print.css.bak
content/css/components/print.css.bck-multihojas
content/css/pages/activity-old.css
content/css/pages/activity.css.bak-premock
```

`content/css/components/print.css` se deja igual — no se tocó, no estaba en el problema que veníamos resolviendo.

## 3. Reemplazar `content/_includes/layouts/base.njk`

Usá el archivo `base.njk` adjunto. El único cambio real es el bloque `<!-- CSS -->`:
ahora sólo carga `main.css` (que ya hace `@import` de todo lo transversal), en vez de
8 `<link>` de los cuales 5 apuntaban a archivos que nunca existieron.

## 4. Actualizar el front-matter de cada template

Estos son los cambios exactos de `styles:` en cada archivo, comparados con lo que ya
tenían (algunos ya usaban este mecanismo, sólo hay que ajustar qué listan):

**`content/activities/activity.njk`** (o donde esté el layout de detalle de actividad)
```diff
 styles:
-  - /css/cards.css
   - /css/pages/activity.css
-  - /css/disclosure.css
```
(`cards.css` y `disclosure.css` ahora son transversales, ya los carga `main.css`)

**`content/activities.njk`**
```diff
 styles:
-  - /css/cards.css
   - /css/components/search.css
```
(`cards.css` ahora es transversal; el path de `search.css` cambió a `components/`)

**`content/_includes/layouts/badge-page.njk`**
```diff
 styles:
-  - /css/layout.css
-  - /css/navbar.css
-  - /css/footer.css
   - /css/pages/badges.css
```
(`layout.css`/`navbar.css`/`footer.css` ya son transversales vía `main.css` - cargarlos
de nuevo acá no rompía nada, pero era trabajo de más)

**`content/_includes/layouts/age-page.njk`** (y `sdg-page.njk` si sigue el mismo patrón)
```diff
 styles:
-  - /css/cards.css
   - /css/pages/ages.css
```

**`content/feedback.njk`** — no tenía `styles:`, hay que agregarlo:
```yaml
styles:
  - /css/pages/feedback.css
```

**Home / `index.njk`** — no pude confirmar su front-matter actual porque los 6 archivos
`index.njk` que subiste pisaron entre sí (quedó sólo uno en disco). Si el de home no
tiene `styles:` todavía, agregale:
```yaml
styles:
  - /css/pages/home.css
```

## 5. Cambios de comportamiento a verificar visualmente

- **Botones en la home vs. resto del sitio**: antes `.hero-button` de `home.css`
  pisaba silenciosamente al de `components.css` en TODO el sitio (incluida la 404).
  Ahora `home.css` sólo afecta `.home-hero .hero-button`. Revisá que la home se
  vea igual, y que la 404 use el botón verde/blanco base (antes probablemente se
  veía con los colores de home sin que lo notaras).
- **Íconos**: deberían aparecer de verdad ahora (antes decían "schedule", "cake",
  "productivity" como texto). Si seguís viendo texto, revisá que el link a
  Google Fonts en `<head>` cargue bien (Network tab).
- **`.grid` / `.empty-state` / `.search-box` / `.listing-header` / `.section-header`**:
  ahora tienen una sola definición en `layout.css` (o `search.css` para el search-box).
  Si alguna página se veía distinta a propósito por el conflicto viejo, avisame para
  ajustar esa página puntual en vez de la regla global.
- **`/feedback/`**: va a cambiar de aspecto por primera vez (antes no tenía estilos).

## 6. Pendiente para la próxima sesión

No llegué a auditar `taxonomy-page.njk`, `metodoScout-page.njk`, `skill-page.njk`,
`valoresScout-page.njk`, `activityType-page.njk`, `print-activities.njk`, ni los
`index.njk` de badges/activities/etc. (se pisaron entre sí al subirlos). Si querés
que sigamos, subí esos con nombres distintos y seguimos el mismo proceso.
