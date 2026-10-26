#!/bin/bash
# Uso: montaje_badge.sh BADGE DIR_SALIDA — genera DIR/BADGE-N.jpg de a 6 imágenes, ordenadas por código
b=$1; out=$2
slugs=$(python3 -c "
import sys;sys.path.insert(0,'auditoria/scripts');import vista,glob,os
l=[]
for p in glob.glob(vista.ACT+'/*.md'):
    s=os.path.basename(p)[:-3];fm,_=vista.load(s)
    if '$b' in [str(x).strip() for x in fm.get('activity_badges') or []]: l.append((str(fm.get('activity_code')),s))
print(' '.join(s for _,s in sorted(l)))")
set -- $slugs; n=1
while [ $# -gt 0 ]; do
  chunk=("${@:1:6}"); shift $(( $# < 6 ? $# : 6 ))
  auditoria/scripts/montaje.sh "$out/$b-$n.jpg" "${chunk[@]}"; n=$((n+1))
done
ls "$out"/$b-*.jpg
