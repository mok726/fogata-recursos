#!/bin/bash
# Uso: montaje.sh salida.jpg slug1 slug2 ... (máx. 6) — arma una grilla 2x3 con el nombre de cada imagen
out=$1; shift
tmp=$(mktemp -d)
args=()
for s in "$@"; do
  img=$(grep -m1 '^image:' content/activities/$s.md | sed 's/image: *"\{0,1\}\/\{0,1\}//; s/"\s*$//' | tr -d '\r')
  convert "$img" -resize 600x -gravity south -background white -splice 0x22 -pointsize 18 -annotate +0+2 "$s" "$tmp/$s.jpg" 2>/dev/null || convert -size 600x260 xc:gray -pointsize 20 -annotate +10+130 "FALTA $s" "$tmp/$s.jpg"
  args+=("$tmp/$s.jpg")
done
montage "${args[@]}" -tile 2x -geometry +3+3 "$out"
rm -rf "$tmp"
