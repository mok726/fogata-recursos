# Uso (desde la raíz del repo): python3 licencias/scripts/corregir_atribuciones.py
# Ajusta enlaces, atribuciones y avisos de traducción a lo declarado en licencias/emails-permisos.md.
# Idempotente; preserva finales de línea CRLF.
import glob,re,json,yaml
OK='https://openknowledge.fao.org/handle/20.500.14283/'
URLS={  # título de la referencia -> publicación original
 'Water Challenge Badge - Resource and Activity Guide':OK+'i3225e',
 'Insignia del Agua':OK+'i3225e',
 'Insignia de la Biodiversidad':OK+'i1885e',
 'Insignia de los Bosques':OK+'i3479e',
 'Insignia del Cambio Climático':OK+'i5216e',
 'Insignia Acabar con el Hambre':'https://openknowledge.fao.org/items/98e53fed-550e-43d6-8a91-3a4c8a21446c',
 'Insignia de la Nutrición':OK+'i6590e',
 'Insignia del Océano':OK+'i3465e',
 'Insignia de la Seguridad Alimentaria y el Cambio Climático':'https://openknowledge.fao.org/items/e8e82492-5c09-4d03-b72d-487f6bc9dd37',
 'Insignia de los Suelos':OK+'i3855e',
 'Energy Challenge Badge':OK+'ca4136en',
 'Tide Turners Plastic Challenge - Kit de Acción':'https://learn.scout.org/node/8523',
 'Desafío Champions for Nature - Kit de Acción':'https://sdgs.scout.org/challenges/champions-nature/nso',
 'Scouts por los ODS - Mundo Mejor':'https://scouts.org.ar/biblioteca/1497/mundo-mejor/28889/scouts-por-los-ods-mundo-mejor.pdf',
}
WOSM_C='© 2020. Organización Mundial del Movimiento Scout (World Scout Bureau Inc.)'
TN_EN="This translation was not created by the Food and Agriculture Organization of the United Nations (FAO). FAO is not responsible for the content or accuracy of this translation. The original ENGLISH edition shall be the authoritative edition."
TN_ES="Esta traducción no fue creada por la Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). La FAO no es responsable del contenido ni de la exactitud de esta traducción. La edición original en inglés será la edición que prevalece."
EN=set("the and of to with your you for this what how are can they".split())
q=lambda s: json.dumps(s,ensure_ascii=False)
def sub_block(fm,key,lines,nl):
    block=nl.join(lines)+nl
    m=re.search(r'(?m)^'+key+r':[ \t]*\r?\n(?:[ \t]+.*\r?\n)*',fm)
    return fm[:m.start()]+block+fm[m.end():]
n=0
for f in sorted(glob.glob('content/activities/*.md')):
    raw=open(f,'rb').read().decode('utf-8'); nl='\r\n' if '\r\n' in raw else '\n'
    a=raw.index('---')+3; b=raw.index('\n---',a)+1
    fm=raw[a:b]; d=yaml.safe_load(fm)
    refs=d.get('references') or []
    # enlaces a la publicación original
    for r in refs:
        u=URLS.get(r.get('title'))
        if u and r.get('url')!=u:
            fm=re.sub(r'(title: '+re.escape(q(r['title']))+r'(?:\r?\n[ \t]+(?!- ).*)*?\r?\n[ \t]+url: )"[^"]*"',lambda m:m.group(1)+q(u),fm,count=1)
    # crédito OMMS uniforme
    fm=re.sub(r'entity: "(© World Scout Bureau 2020|© 2020\. Organización Mundial del Movimiento Scout\.)"','entity: '+q(WOSM_C),fm)
    # Go Solar: el titular es Solafrica
    if 'gosolar' in (d.get('activity_badges') or []):
        fm=sub_block(fm,'author',['author:','  - Solafrica','  - YUNGA','  - Organización Mundial del Movimiento Scout'],nl)
        fm=sub_block(fm,'source',['source:','  - Solafrica - Scouts Go Solar, Manual de Energía Solar (2015)','  - Scouts de Argentina - Desafío Scouts Go Solar'],nl)
        fm=re.sub(r'(?m)^Origin: .*$','Origin: '+q('Scouts Go Solar - Manual de Energía Solar - Solafrica'),fm)
        fm=sub_block(fm,'references',['references:','  - title: "Scouts Go Solar - Manual de Energía Solar"','    author: "Solafrica, YUNGA, OMMS"','    year: 2015','    series: "Adaptación al español: Abelardo Castillo Rosas. Usado por Scouts de Argentina en el desafío Go Solar (Tribu Tierra - Mundo Mejor)"','    url: "https://www.solafrica.ch/scout-badge"'],nl)
        att=[x for x in (d.get('attributions') or []) if 'Scouts de Argentina' not in str(x.get('entity')) and 'Solafrica' not in str(x.get('entity')) and 'Castillo' not in str(x.get('entity')) and 'Desafío' not in str(x.get('role'))]
        new=[dict(entity='© Solafrica 2015',role='fuente y titular de los derechos de autor',year=2015),
             dict(entity='Abelardo Castillo Rosas',role='traducción y adaptación al español del manual',year=2015),
             dict(entity='Scouts de Argentina',role='desafío Go Solar (Tribu Tierra - Mundo Mejor)',year=2021)]+att
        lines=['attributions:']
        for x in new: lines+= [f'  - entity: {q(x["entity"])}',f'    role: {q(x["role"])}']+([f'    year: {x["year"]}'] if x.get('year') else [])
        fm=sub_block(fm,'attributions',lines,nl)
    # aviso de traducción de la FAO si el original embebido está en inglés
    if not d.get('translation_notice') and 'FAO' in str(d.get('author')) and '## Texto original completo' in raw:
        o=raw.split('## Texto original completo',1)[1][:3000].lower().split()
        if sum(1 for w in o if w in EN)>15:
            fm+=nl.join(['translation_notice:','  en: '+q(TN_EN),'  es: '+q(TN_ES)])+nl
    new_raw=raw[:a]+fm+raw[b:]
    assert yaml.safe_load(new_raw.split('---',2)[1]) is not None
    if new_raw!=raw: open(f,'wb').write(new_raw.encode('utf-8')); n+=1
print('archivos modificados:',n)
