#!/usr/bin/env bash
# Copia las actividades a _enlaces/ sin la sección "Texto original completo":
# esos enlaces son cita del original y no se corrigen, así que no se revisan.
# La sección va al final del archivo, así que los números de línea no cambian.
set -euo pipefail
rm -rf _enlaces
mkdir -p _enlaces/content/activities _enlaces/content/_data
for f in content/activities/*.md; do
  awk '/^## Texto original completo/{exit} {print}' "$f" > "_enlaces/$f"
done
cp content/_data/badges.js _enlaces/content/_data/badges.js
