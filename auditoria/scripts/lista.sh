#!/bin/sh
# Uso: auditoria/scripts/lista.sh BADGE  -> "codigo slug" ordenado por código
for f in $(grep -l "^activity_code: \"$1-" content/activities/*.md); do
  echo "$(sed -n "s/^activity_code: \"\(.*\)\"/\1/p" $f) $(basename $f .md)"
done | sort
