# Uso (desde la raíz del repo): python3 licencias/scripts/aplicar_licencias.py licencias/licencias-por-actividad.csv
import yaml,glob,os,re,json,collections,sys
NCSA4=("Creative Commons BY-NC-SA 4.0","https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es","https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png")
L={
 'propio':dict(lic=NCSA4,note=None,status=None),
 'fao_cc':dict(lic=NCSA4,note="Adaptación de una obra de la FAO publicada bajo CC BY-NC-SA 3.0 IGO. Esta adaptación no fue creada por la FAO, que no respalda ninguna organización, producto o servicio.",status=None),
 'fao_sinverificar':dict(lic=("© FAO – Licencia sin confirmar","https://www.fao.org/contact-us/terms/en/",""),note="No se pudo confirmar la licencia de la edición original. Permiso de la FAO para publicar esta adaptación: pendiente de solicitud.",status="permiso-pendiente"),
 'fao_arr':dict(lic=("© FAO – Todos los derechos reservados","https://www.fao.org/contact-us/terms/en/",""),note="La FAO autoriza el uso no comercial citándola como fuente y titular de los derechos. La traducción y la adaptación requieren su permiso: pendiente de solicitud.",status="permiso-pendiente"),
 'wosm':dict(lic=("© World Scout Bureau Inc. – Todos los derechos reservados","https://www.scout.org",""),note="La reproducción está autorizada solo a las organizaciones miembro de la OMMS. Permiso para publicar esta adaptación: pendiente de solicitud.",status="permiso-pendiente"),
 'saac':dict(lic=("© Scouts de Argentina Asociación Civil – Todos los derechos reservados","https://www.scouts.org.ar",""),note="Permiso para publicar esta adaptación: pendiente de solicitud.",status="permiso-pendiente"),
}
RANK=['propio','fao_cc','fao_sinverificar','fao_arr','saac','wosm']
def classify_ref(r):
    t=(r.get('title') or '').lower(); u=(r.get('url') or '').lower(); y=r.get('year')
    if 'tide turners' in t or 'champions for nature' in t: return 'wosm'
    if 'scouts.org.ar' in u: return 'saac'
    # Verificadas en el PDF: Energy 2019 y Plastics 2024 (CC BY-NC-SA 3.0 IGO).
    if any(k in t for k in ['energy','plastics']): return 'fao_cc'
    # Licencia no confirmada (PDF inaccesible): se pide permiso, a pedido de Mariano (2026-10-26).
    if any(k in t for k in ['green cities','pollinators','riesgo de desastres']): return 'fao_sinverificar'
    if 'fao' in (r.get('author') or '').lower() or 'fao.org' in u: return 'fao_arr'
    return None
def classify(d):
    badges=d.get('activity_badges') or []
    refs=d.get('references') or []
    cs=[c for c in map(classify_ref,refs) if c]
    if not cs:
        if set(badges)<= {'general','comunidad'}: return 'propio'
        raise Exception('sin clasificar')
    return max(cs,key=RANK.index)
def q(s): return json.dumps(s,ensure_ascii=False)
out=collections.Counter(); rows=[]
for f in sorted(glob.glob('content/activities/*.md')):
    raw=open(f,'rb').read().decode('utf-8')
    nl='\r\n' if '\r\n' in raw else '\n'
    fm=raw.split('---',2)[1]
    d=yaml.safe_load(fm)
    c=classify(d); out[c]+=1
    spec=L[c]; n,u,i=spec['lic']
    lines=["license:",f"  name: {q(n)}",f"  url: {q(u)}",f"  image: {q(i)}"]
    if spec['note']: lines.append(f"  note: {q(spec['note'])}")
    if spec['status']: lines.append(f"  status: {q(spec['status'])}")
    block=nl.join(lines)+nl
    start=raw.index('---')+3; end=raw.index('\n---',start)
    head=raw[:end]
    m=re.search(r'(?m)^license:[ \t]*\r?\n(?:[ \t]+.*\r?\n)*',head)
    if m: head=head[:m.start()]+block+head[m.end():]
    else: raise Exception('no license '+f)
    new=head+raw[end:]
    assert yaml.safe_load(new.split('---',2)[1])['license']['name']==n
    if new!=raw: open(f,'wb').write(new.encode('utf-8'))
    rows.append((os.path.basename(f)[:-3],",".join(d.get('activity_badges') or []),c,(d.get('title') or '')))
print(out)
import csv
with open(sys.argv[1],'w',newline='',encoding='utf-8') as fh:
    w=csv.writer(fh); w.writerow(['slug','insignias','clase_licencia','titulo']); w.writerows(rows)
