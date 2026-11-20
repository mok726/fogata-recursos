#!/bin/bash
# Genera imágenes en lote desde un archivo de prompts, N por día, y espera solo al día siguiente.
# Uso: ./generar_lote.sh prompts.tsv [por_dia]
#   prompts.tsv: una línea por imagen, separada por TAB:  carpeta<TAB>slug<TAB>prompt
#                (líneas vacías o que empiezan con # se ignoran)
# Correr desde la raíz del repo (donde está imagenes/). Ej. en otra sesión:
#   nohup ../scripts/generar_lote.sh ../scripts/prompts-p1.tsv 50 > lote.log 2>&1 &
# Lo ya generado se anota en <prompts>.hechos; si lo cortás y lo relanzás, sigue donde quedó.
# Para regenerar una imagen, borrá su línea del .hechos.
# Cloudflare reinicia la cuota gratis a las 00:00 UTC.
set -uo pipefail

PROMPTS="${1:?Uso: generar_lote.sh prompts.tsv [por_dia]}"
POR_DIA="${2:-90}"
#GEN="$(dirname "$(readlink -f "$0")")/generar_image.sh"
GEN="./scripts/devenv/generar_image.sh"
HECHOS="$PROMPTS.hechos"
touch "$HECHOS"

esperar_reset() {
    # Duerme hasta las 00:10 UTC del día siguiente
    local ahora objetivo
    ahora=$(date -u +%s)
    objetivo=$(date -u -d "tomorrow 04:10" +%s)
    echo "$(date '+%F %T') ⏸  $1. Espero hasta $(date -d "@$objetivo" '+%F %T') ($(( (objetivo-ahora)/60 )) min)."
#    sleep $(( objetivo - ahora ))
    sleep  94000
}
 
while true; do
    pendientes=$(grep -vE '^\s*(#|$)' "$PROMPTS" | cut -f2 | grep -vxFf "$HECHOS" | wc -l)
    if (( pendientes == 0 )); then
        echo "$(date '+%F %T') ✅ Terminado: no quedan pendientes."
        exit 0
    fi
    echo "$(date '+%F %T') ▶  Nueva tanda: $pendientes pendientes, hasta $POR_DIA hoy."

    hoy=0; errores=0
    while IFS=$'\t' read -r carpeta slug prompt; do
        [[ -z "${carpeta// }" || "$carpeta" == \#* ]] && continue
        grep -qxF "$slug" "$HECHOS" && continue
        (( hoy >= POR_DIA )) && break

        CF_OUTDIR="$carpeta" bash "$GEN" "$slug" "$prompt" sinpausa < /dev/null
        rc=$?
        if (( rc == 0 )); then
            echo "$slug" >> "$HECHOS"; ((hoy++)); errores=0
            sleep 3
        elif (( rc == 2 )); then
            echo "$(date '+%F %T') Cuota de Cloudflare agotada tras $hoy imágenes."
            break
        else
            echo "$(date '+%F %T') ❌ Falló $slug (se reintenta en la próxima tanda)."
            ((errores++))
            if (( errores >= 5 )); then
                echo "5 errores seguidos: revisá token/red. Corto."
                exit 1
            fi
            sleep 10
        fi
    done < "$PROMPTS"

    pendientes=$(grep -vE '^\s*(#|$)' "$PROMPTS" | cut -f2 | grep -vxFf "$HECHOS" | wc -l)
    (( pendientes == 0 )) && continue
    # Si no se llegó al tope y quedan pendientes, es porque fallaron: igual esperamos al otro día
    esperar_reset "Hechas $hoy hoy, quedan $pendientes"
done
