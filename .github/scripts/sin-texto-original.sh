#!/usr/bin/env bash
# Copia las actividades a _enlaces/ sin la sección "Texto original completo":
# esos enlaces son cita del original y no se corrigen, así que no se revisan.
# La sección va al final del archivo, así que los números de línea no cambian.
# Los enlaces entre fichas (../<slug>/) se cambian por la ruta del .md
# (/content/activities/<slug>.md), que --root-dir resuelve contra el repo:
# así se revisa que la ficha exista, sin falsos rotos.
set -euo pipefail
rm -rf _enlaces
mkdir -p _enlaces/content/activities _enlaces/content/_data
for f in content/activities/*.md; do
  awk '/^## Texto original completo/{exit} {print}' "$f" \
    | sed -E 's#\]\(\.\./([a-z0-9-]+)/?(\#[^)]*)?\)#](/content/activities/\1.md)#g' \
    > "_enlaces/$f"
done
cp content/_data/badges.js _enlaces/content/_data/badges.js
