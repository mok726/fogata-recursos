"""Zona editable de una actividad: todo antes de '## Texto original completo', sin la línea image_prompt."""
import re
MARK='## Texto original completo'
def partes(t):
    i=t.find(MARK)
    a,o=(t,'') if i<0 else (t[:i],t[i:])
    return a,o
def editar(t,fn):
    """Aplica fn(str)->str a la zona editable, salteando líneas image_prompt."""
    a,o=partes(t)
    lines=a.split('\n')
    out=[l if l.lstrip().startswith(('image_prompt','image:','link:','- http','url:','files:')) or 'http' in l and l.lstrip().startswith('-') else fn(l) for l in lines]
    return '\n'.join(out)+o
