#!/bin/bash
# Uso: ./generar_image.sh "nombre archivo" "prompt" [sinpausa]
# Requiere: curl, jq, base64. Opcional: ImageMagick (convert) para recortar a banner.
# Variables de entorno:
#   MY_CF_TOKEN      token de API de Cloudflare con permiso "Workers AI"
#   MY_CF_ACCOUNT    Account ID de Cloudflare
#   CF_MODELO        klein (default, 1792x768) | schnell (1024x1024, se recorta)
#   CF_OUTDIR        carpeta de salida (default imagenes/actividades)
#   CF_VARIEDAD      1 (default): agrega rasgos al azar para variar a las personas; 0: no
#   CF_STEPS         pasos (schnell: 1-8, default 8)
set -euo pipefail
 
FILENAME="${1:-}"
PROMPT="${2:-}"
SINPAUSA="${3:-}"
 
CF_TOKEN="${MY_CF_TOKEN:-}"
CF_ACCOUNT="${MY_CF_ACCOUNT:-}"
MODELO="${CF_MODELO:-klein}"
STEPS="${CF_STEPS:-8}"
 
if [[ -z "$CF_TOKEN" || -z "$CF_ACCOUNT" ]]; then
    echo "ERROR: faltan variables de entorno."
    echo "  export MY_CF_TOKEN='tu_token_de_Cloudflare'"
    echo "  export MY_CF_ACCOUNT='tu_account_id'"
    exit 1
fi
[[ -z "$FILENAME" ]] && { echo "Error: falta el nombre de archivo."; exit 1; }
[[ -z "$PROMPT" ]]   && { echo "Error: falta el prompt."; exit 1; }
command -v jq >/dev/null || { echo "Error: instalá jq (apt install jq)."; exit 1; }
 
# Convierte "Árboles y Ñandúes!" en "arboles-y-nandues"
sanitize_and_translate() {
    local s="$1"
    # Pares uno por uno (los rangos [áé] fallan con locale C/POSIX)
    local from=(á à â ä ã å é è ê ë í ì î ï ó ò ô ö õ ú ù û ü ñ ç Á À Â Ä Ã É È Ê Ë Í Ì Î Ï Ó Ò Ô Ö Õ Ú Ù Û Ü Ñ Ç æ œ)
    local to=(a a a a a a e e e e i i i i o o o o o u u u u n c a a a a a e e e e i i i i o o o o o u u u u n c ae oe)
    for i in "${!from[@]}"; do s="${s//${from[$i]}/${to[$i]}}"; done
    echo "$s" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9_-]/-/g; s/--*/-/g; s/^-//; s/-$//'
}
 
# Mueve archivo.jpg existente a archivo_1.jpg, archivo_2.jpg, ...
archive_existing_file() {
    local f="$1"
    [[ -e "$f" ]] || return 0
    local name="${f%.*}" ext="${f##*.}" n=1
    while [[ -e "${name}_${n}.${ext}" ]]; do ((n++)); done
    mv "$f" "${name}_${n}.${ext}"
    echo "📦 Archivo existente movido a: ${name}_${n}.${ext}"
}
 
SLUG=$(sanitize_and_translate "$FILENAME")
[[ -z "$SLUG" ]] && { echo "Error: nombre de archivo inválido."; exit 1; }
OUTPUT_FILE="${CF_OUTDIR:-imagenes/actividades}/$SLUG.jpg"
mkdir -p "$(dirname "$OUTPUT_FILE")"
 
# No mencionar "website", "banner", "header", "interface" ni "text": FLUX los dibuja.
PROMPTStyle="Documentary photograph, natural light, realistic, shallow depth of field."
PROMPTUniforme=""
# Variedad de personas: se suma al azar un rasgo de grupo y uno individual por imagen,
# para que no salgan todos con la misma cara. CF_VARIEDAD=0 lo desactiva.
GRUPOS=(
 "A mixed group of girls and boys with diverse appearances."
 "Mostly girls in the group, with different hairstyles and skin tones."
 "Mostly boys in the group, with different builds and skin tones."
 "A diverse group: light, olive and brown skin tones, straight, wavy and curly hair."
 "People of different heights and body types, some with freckles."
)
DETALLES=(
 "One of them wears glasses."
 "One girl has long braids."
 "One boy has curly black hair."
 "One girl has a high ponytail."
 "One of them is red-haired with freckles."
 "One boy is chubby and smiling."
 "One girl has dark skin and curly hair tied up."
 "One of them has blond hair."
 "One of them wears a knitted hat."
 "One of them has indigenous South American features."
)
VARIEDAD=""
if [[ "${CF_VARIEDAD:-1}" == "1" ]]; then
    VARIEDAD="${GRUPOS[RANDOM % ${#GRUPOS[@]}]} ${DETALLES[RANDOM % ${#DETALLES[@]}]}"
fi
FULLPROMPT="$PROMPTStyle $PROMPT $VARIEDAD $PROMPTUniforme"
 
API="https://api.cloudflare.com/client/v4/accounts/$CF_ACCOUNT/ai/run/@cf/black-forest-labs"
TMP_JSON=$(mktemp); TMP_IMG=$(mktemp --suffix=.jpg)
trap 'rm -f "$TMP_JSON" "$TMP_IMG"' EXIT
 
echo "Generando $SLUG con $MODELO ..."
if [[ "$MODELO" == "klein" ]]; then
    # FLUX.2 klein 4B: acepta ancho/alto, pide multipart.
    CODE=$(curl -s -w "%{http_code}" -o "$TMP_JSON" -X POST "$API/flux-2-klein-4b" \
        -H "Authorization: Bearer $CF_TOKEN" \
        -F "prompt=$FULLPROMPT" -F "width=1792" -F "height=768")
else
    # FLUX.1 schnell: solo prompt + steps (max 8). Sale 1024x1024.
    CODE=$(curl -s -w "%{http_code}" -o "$TMP_JSON" -X POST "$API/flux-1-schnell" \
        -H "Authorization: Bearer $CF_TOKEN" -H "Content-Type: application/json" \
        -d "$(jq -n --arg p "$FULLPROMPT" --argjson s "$STEPS" --argjson r "$RANDOM" '{prompt:$p, steps:$s, seed:$r}')")
fi
 
if [[ "$CODE" != "200" ]] || ! jq -e '.result.image' "$TMP_JSON" >/dev/null 2>&1; then
    echo "Error: HTTP $CODE"
    jq -r '.errors // .' "$TMP_JSON" 2>/dev/null || cat "$TMP_JSON"
    # exit 2 = cuota diaria agotada (lo usa generar_lote.sh para esperar)
    if [[ "$CODE" == "429" ]] || grep -qiE 'neurons|daily|quota|limit' "$TMP_JSON"; then exit 2; fi
    exit 1   # el archivo anterior queda intacto
fi
 
jq -r '.result.image' "$TMP_JSON" | base64 -d > "$TMP_IMG"
 
if [[ "$MODELO" != "klein" ]] && command -v convert >/dev/null; then
    # schnell sale cuadrado: recorta franja central 21:9
    convert "$TMP_IMG" -gravity center -crop 100%x43%+0+0 +repage "$TMP_IMG" \
        || echo "Aviso: no se pudo recortar, queda cuadrada."
fi
 
archive_existing_file "$OUTPUT_FILE"
mv "$TMP_IMG" "$OUTPUT_FILE"
echo "OK: $OUTPUT_FILE"
 
# Pausa entre llamadas en lote, salvo que se pase el 3er parámetro
[[ -z "$SINPAUSA" ]] && sleep 5
exit 0
 
