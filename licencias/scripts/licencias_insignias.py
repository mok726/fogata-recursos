# Uso (desde la raíz del repo): python3 licencias/scripts/licencias_insignias.py
import re,json
p='content/_data/badges.js'; s=open(p,encoding='utf-8').read()
N4=("CC BY-NC-SA 4.0","https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es")
FAO_ARR=("© FAO – Todos los derechos reservados","https://www.fao.org/contact-us/terms/en/")
WOSM=("© World Scout Bureau Inc. – Todos los derechos reservados","https://www.scout.org")
SAAC=("© Scouts de Argentina A.C. – Todos los derechos reservados","https://www.scouts.org.ar")
SOLA=("© Solafrica – Sin licencia publicada","https://www.solafrica.ch/scout-badge")
UNK=("© FAO – Licencia sin confirmar","https://www.fao.org/yunga/resources/yunga-publications/en")
notes={'arr':"Autorizado: uso no comercial del original citando a la FAO. Pendiente: traducción y adaptación, autorización solicitada a la FAO el 26/10/2026.",
 'cc3':"Adaptación de una obra de la FAO publicada bajo CC BY-NC-SA 3.0 IGO.",
 'ccby':"Adaptación de una obra de la FAO publicada bajo CC BY 4.0.",
 'mix':"Las actividades de la FAO usan CC BY-NC-SA 4.0. Las del kit Tide Turners (© World Scout Bureau) esperan autorización, solicitada a la OMMS el 26/10/2026. Ver la licencia de cada actividad.",
 'wosm':"Autorizado: reproducción por organizaciones miembro de la OMMS. Pendiente: publicación en este sitio, autorización solicitada a la OMMS el 26/10/2026.",
 'saac':"Pendiente: autorización solicitada a Scouts de Argentina el 26/10/2026.",
 'sol':"Titular: Solafrica (manual Scouts Go Solar, 2015). Pendiente: autorización solicitada a Scouts de Argentina el 26/10/2026; falta pedirla a Solafrica.",
 'pend':"Licencia de la edición original sin confirmar. Pendiente: autorización solicitada a la FAO el 26/10/2026.",
 'unk':"Sin actividades publicadas. Licencia de la edición original sin confirmar; autorización solicitada a la FAO el 26/10/2026."}
M={'agricultura':(UNK,'unk'),'genero':(UNK,'unk'),'gobernanza':(UNK,'unk'),
 'bosques':(FAO_ARR,'arr'),'nutricion':(FAO_ARR,'arr'),'agua':(FAO_ARR,'arr'),'sacc':(FAO_ARR,'arr'),'cambioclimatico':(FAO_ARR,'arr'),
 'oceano':(FAO_ARR,'arr'),'biodiversidad':(FAO_ARR,'arr'),'hambre':(FAO_ARR,'arr'),'suelos':(FAO_ARR,'arr'),
 'plastics':(N4,'mix'),'energia':(N4,'cc3'),'rrd':(UNK,'pend'),'polinizadores':(UNK,'pend'),'ciudadesverdes':(UNK,'pend'),
 'gosolar':(SOLA,'sol'),'mundomejor':(SAAC,'saac'),'cfn':(WOSM,'wosm'),'general':(N4,None)}
ids=[(m.start(),m.group(1)) for m in re.finditer(r'\bid:\s*"([^"]+)"',s)]
out=[];last=0
for k,(pos,bid) in enumerate(ids):
    nxt=ids[k+1][0] if k+1<len(ids) else len(s)
    seg=s[pos:nxt]
    (t,u),nk=M[bid]
    rep=f'license: {{\n    type: {json.dumps(t,ensure_ascii=False)},\n    url: {json.dumps(u)}'+(f',\n    note: {json.dumps(notes[nk],ensure_ascii=False)}' if nk else '')+'\n  }'
    seg2,n=re.subn(r'license:\s*\{[^}]*\}',rep,seg,count=1)
    assert n==1,bid
    out.append(s[last:pos]+seg2); last=nxt
s=''.join(out)+s[last:]
open(p,'w',encoding='utf-8').write(s)
