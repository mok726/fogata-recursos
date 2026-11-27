#!/bin/bash
# Devuelve la dirección pública del sitio (url + pathPrefix), leída de
# content/_data/site.js, sin barra final. Ejemplos:
#   https://mok726.github.io/fogata-recursos
#   https://fogata.com.ar
#
# Lo usan generate_qr.sh y generar_qr_lista.sh (con `source`), así la URL
# no queda escrita a mano en los scripts: al cambiar el dominio en site.js
# alcanza con regenerar los QR.
#
# Respeta las mismas variables que site.js (SITE_URL, PATH_PREFIX).
# Requiere node.

url_sitio() {
    local repo="$1"
    command -v node >/dev/null 2>&1 || { echo "❌ Falta node para leer site.js" >&2; return 1; }
    SITE_JS="$repo/content/_data/site.js" node -e '
        const s = require(process.env.SITE_JS);
        const url = String(s.url || "").replace(/\/+$/, "");
        const prefijo = String(s.pathPrefix || "").replace(/^\/*/, "/").replace(/\/+$/, "");
        if (!url) { console.error("site.js no tiene url"); process.exit(1); }
        console.log(url + (prefijo === "/" ? "" : prefijo));
    '
}

# Si se corre directo, muestra la URL (útil para comprobar antes de regenerar).
if [[ "${BASH_SOURCE[0]}" == "$0" ]]; then
    url_sitio "$(cd "$(dirname "$(readlink -f "$0")")/../.." && pwd)"
fi
