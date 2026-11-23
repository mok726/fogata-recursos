# Códigos QR de las fichas

Cada ficha tiene su QR en `imagenes/actividades/qr/<slug>.png`, que apunta a
`<sitio>/activities/<slug>`. Se usa en la versión para imprimir y en la
«Actividad del día» de la portada.

La dirección del sitio **no está escrita en los scripts**: sale de
`content/_data/site.js` (`url` + `pathPrefix`), a través de `url_sitio.sh`.

## Scripts

| Script | Qué hace |
|---|---|
| `url_sitio.sh` | Muestra la URL que van a usar los QR. Correrlo antes de regenerar, para comprobar. |
| `generate_qr.sh` | Genera los QR de todas las fichas de `content/activities` que todavía no tienen. |
| `generar_qr_lista.sh lista.txt` | Genera los QR de una lista de slugs (sirve para fichas de PRs sin mergear, p. ej. `qr-pendientes.txt`). |

Necesitan `curl`, `file` y `node` (`jq` es opcional). Usan el servicio
api.qrserver.com, con una pausa de 1 s entre QR. Si una descarga falla, se
conserva el QR anterior.

## Regenerar todos los QR (por ejemplo, al pasar a fogata.com.ar)

1. Cambiar `url` y `pathPrefix` en `content/_data/site.js`
   (para el dominio propio: `url: "https://fogata.com.ar"`, `pathPrefix: ""`).
2. Comprobar la URL:

   ```bash
   scripts/devenv/url_sitio.sh
   # → https://fogata.com.ar
   ```

3. Regenerar todo, pisando los existentes:

   ```bash
   FORZAR=1 scripts/devenv/generate_qr.sh
   FORZAR=1 scripts/devenv/generar_qr_lista.sh scripts/devenv/qr-pendientes.txt   # fichas de PRs abiertos
   ```

   Son unos 1.800 QR a 1 por segundo: más o menos media hora.

4. Commitear `imagenes/actividades/qr/` junto con el cambio de `site.js`
   (o justo después), para que los QR impresos no apunten a una dirección vieja.

## Variables

- `FORZAR=1`: regenera aunque el QR ya exista.
- `SITE_URL` / `PATH_PREFIX`: las mismas que lee `site.js`; permiten probar
  otra dirección sin tocar el archivo, p. ej.
  `SITE_URL=https://fogata.com.ar PATH_PREFIX= scripts/devenv/url_sitio.sh`.
- `BASE_URL`: fuerza la dirección a mano (sin `/activities`), ignorando `site.js`.
