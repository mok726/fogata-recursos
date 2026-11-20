#!/bin/bash
# Genera los QR de una lista de actividades, aunque todavía no estén en content/activities
# (por ejemplo, fichas de PRs sin mergear).
#
# Uso:  scripts/devenv/generar_qr_lista.sh lista.txt
#       cat lista.txt | scripts/devenv/generar_qr_lista.sh -
#
# La lista tiene una actividad por línea. Cada línea puede ser el slug
# (anemometro-de-vasitos), la ruta del .md (content/activities/anemometro-de-vasitos.md)
# o una línea de prompts-TODO.tsv (se toma la 2.ª columna). Se ignoran las líneas
# vacías y las que empiezan con #.
#
# Se puede correr desde cualquier carpeta: las rutas salen de la ubicación del script.
# Si el QR ya existe, lo saltea; con FORZAR=1 lo regenera.

set -u

LISTA="${1:-}"
if [[ -z "$LISTA" ]]; then
    echo "Uso: $0 lista.txt   (o '-' para leer de la entrada estándar)"
    exit 1
fi
if [[ "$LISTA" != "-" && ! -f "$LISTA" ]]; then
    echo "❌ No encuentro la lista: $LISTA"
    exit 1
fi

REPO="$(cd "$(dirname "$(readlink -f "$0")")/../.." && pwd)"
QR_DIR="$REPO/imagenes/actividades/qr"
BASE_URL="https://mok726.github.io/fogata-recursos/activities"
QR_API="https://api.qrserver.com/v1/create-qr-code"
mkdir -p "$QR_DIR"

# Codifica la URL para pasarla como parámetro (con jq si está, si no con sed).
codificar() {
    if command -v jq >/dev/null 2>&1; then
        printf '%s' "$1" | jq -sRr @uri
    else
        printf '%s' "$1" | sed 's/%/%25/g; s/ /%20/g; s/&/%26/g; s/?/%3F/g; s/#/%23/g; s/:/%3A/g; s#/#%2F#g'
    fi
}

hechos=0; salteados=0; errores=0

while IFS= read -r linea || [[ -n "$linea" ]]; do
    linea="${linea%$'\r'}"
    [[ -z "${linea//[[:space:]]/}" || "$linea" == \#* ]] && continue

    # Línea de TSV: tomar la columna del slug.
    if [[ "$linea" == *$'\t'* ]]; then
        linea="$(printf '%s' "$linea" | cut -f2)"
    fi
    slug="$(basename "$linea" .md)"
    slug="${slug//[[:space:]]/}"
    [[ -z "$slug" ]] && continue

    qr="$QR_DIR/$slug.png"
    if [[ -s "$qr" && "${FORZAR:-0}" != "1" ]]; then
        echo "⏭️  $slug ya tiene QR"
        ((salteados++))
        continue
    fi

    url="$BASE_URL/$slug"
    echo "📱 $slug → $url"
    tmp="$(mktemp)"
    if curl -L --max-redirs 5 -sf -o "$tmp" "$QR_API?size=300x300&data=$(codificar "$url")" \
        && file "$tmp" | grep -q "PNG image"; then
        mv "$tmp" "$qr"
        ((hechos++))
    else
        echo "❌ Falló $slug"
        rm -f "$tmp"
        ((errores++))
    fi
    sleep 1
done < <(if [[ "$LISTA" == "-" ]]; then cat; else cat "$LISTA"; fi)

echo ""
echo "✨ Listo: $hechos generados, $salteados ya existían, $errores con error."
echo "📁 $QR_DIR"
(( errores == 0 ))
