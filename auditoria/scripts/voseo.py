"""G3: pasa a voseo rioplatense la zona editable de las actividades. Uso: voseo.py [--dry] [archivos]"""
import glob,re,sys,os
sys.path.insert(0,os.path.dirname(__file__))
from voseo_lib import imp_vos,sa
from zona import partes
PRES={'sientes':'sentís','puedes':'podés','usas':'usás','tienes':'tenés','necesitas':'necesitás','haces':'hacés','quieres':'querés','comes':'comés','vives':'vivís','consumes':'consumís','sabes':'sabés','conoces':'conocés','caes':'caés','encuentras':'encontrás','eres':'sos','crees':'creés','generas':'generás','dejas':'dejás','colocas':'colocás','cepillas':'cepillás','diviertes':'divertís','viertes':'vertés','unes':'unís','mueves':'movés','desperdicias':'desperdiciás','investigas':'investigás','decides':'decidís','sacas':'sacás','trasladas':'trasladás','utilizas':'utilizás','aprietas':'apretás','sueltas':'soltás','reciclas':'reciclás','pasas':'pasás','conectas':'conectás','enjabonas':'enjabonás','jabonas':'jabonás','bañas':'bañás','lavas':'lavás','prefieres':'preferís','imaginas':'imaginás','observas':'observás','llevas':'llevás','detienes':'detenés','produces':'producís','pones':'ponés','elaboras':'elaborás','despiertas':'despertás','levantas':'levantás','agregas':'agregás','escuchas':'escuchás','hueles':'olés','recibes':'recibís','eliges':'elegís','deseas':'deseás','debes':'debés','piensas':'pensás','gastas':'gastás','ahorras':'ahorrás','apagas':'apagás','enciendes':'encendés','cierras':'cerrás','abres':'abrís','recuerdas':'recordás','juegas':'jugás','compartes':'compartís','participas':'participás','aprendes':'aprendés','cuidas':'cuidás','proteges':'protegés','reduces':'reducís','reutilizas':'reutilizás','separas':'separás','caminas':'caminás','viajas':'viajás','llegas':'llegás','sales':'salís','vienes':'venís','dices':'decís','consigues':'conseguís','sigues':'seguís','tratas':'tratás','intentas':'intentás','logras':'lográs','cambias':'cambiás','escribes':'escribís','lees':'leés','miras':'mirás','hablas':'hablás','ofreces':'ofrecés','consideras':'considerás','conviertes':'convertís','contribuyes':'contribuís','terminas':'terminás','empiezas':'empezás','comienzas':'comenzás','preparas':'preparás','riegas':'regás','cultivas':'cultivás','siembras':'sembrás','pegas':'pegás','recoges':'recogés','guardas':'guardás','buscas':'buscás','respetas':'respetás','valoras':'valorás','disfrutas':'disfrutás','compras':None,'notas':None,'imaginaste':None,'entiendes':'entendés','preguntas':None,'vas':'vas','estás':'estás','das':'das','ves':'ves','conduces':'conducís','tomas':None,'bebes':None,'crees':'creés','sientas':None,'alimentas':'alimentás','cocinas':None,'compartes':'compartís','creas':'creás','descubres':'descubrís','eliminas':'eliminás','evitas':'evitás','pierdes':'perdés','vuelves':'volvés','duermes':'dormís','juntas':None,'calientas':'calentás','calculas':'calculás','cuentas':None,'piensas':'pensás','mides':'medís','pides':'pedís','tocas':'tocás','tiras':None,'votas':'votás','manejas':'manejás'}
PRES={k:v for k,v in PRES.items() if v}
VERBOS=set("""prepara pregunta investiga organiza comparte explica pide reúne lee identifica coloca reflexiona divide elige busca crea observa registra haz escribe piensa discute usa toma visita compara revisa presenta dibuja aprende planifica recuerda anima invita consigue asigna llena encuentra añade participa asegura construye lleva entrega ayuda planta recolecta contacta averigua habla define muestra comienza riega forma mezcla realiza coordina incluye corta selecciona obtén cubre elabora designa envía mantén ten diseña ofrece decora juega prueba imagina describe etiqueta retira inventa proporciona consulta cuenta repite cierra introduce escucha monitorea cocina convierte establece repasa entrevista utiliza contribuye responde examina descubre conecta explora deja marca rompe camina recibe guía instala distribuye limpia clasifica traza continúa inspecciona cuida cuelga resalta pon reconoce lava tira informa sigue recorre cava decide acompaña celebra vacía exhibe evita considera extiende saca trae calienta vierte cultiva corre propón intercambia comunica apaga conversa adopta verifica promociona trata debate mejora actualiza pega esconde mira desafía forra descarga conoce ordena ilustra espera reduce enseña junta recoge disfruta recopila analiza publica dirige accede tiñe aconseja visualiza mapea aplica enumera desarrolla empieza remoja licúa presiona pasa aparta demuestra configura imita alienta pesa perfora proyecta estudia mueve salta ubica numera vuelve agrupa ensaya di repiensa recorta alisa moldea graba edita agrega entierra desentierra solicita vuela compra congela regresa monta voltea multiplica sé da quita anota calcula practica firma completa evalúa simula experimenta audita transforma inicia implementa vigila arma canta actúa nombra aplica involucra señala filma difunde fomenta sube reemplaza determina representa baja intenta trabaja documenta compila desarrolla pinta escoge escribe ahorra recicla reutiliza dona promueve sal ve contesta lanza mide adivina mantén imprime convence""".split())
AMBIGN=set("pregunta prueba muestra forma lista planta cuenta marca guía toma entrevista mezcla cocina debate visita ayuda compra etiqueta junta corre sigue lleva espera pasa vuelve monta baja sube".split())
NOUNNEXT=set("de del final clave guía inicial generadora abierta central es son"   .split())
def es_verbo(w):
    return w.lower() in VERBOS
SENT=re.compile(r'(^\s*(?:\d+[.)]|[-*])\s+(?:\*\*[^*]+\*\*\s*(?:\([^)]*\))?\s*:\s*)?¡?|[.!?;]\s+[¡"«]?|^\s*(?:title|description|summary):\s*"¡?|^#+\s*¡?|^¡?)([A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)\b')
CLIT=re.compile(r'\b([a-zñ]*[áéíóú][a-zñ]*(?:me|te|se|nos|les|le|los|las|lo|la){1,2}|[Dd]i(?:le|les|lo|la|los|las)|[Hh]az(?:lo|la|los|las)|[Pp]on(?:te|lo|la|los|las)|[Dd]a(?:le|les|lo|la)|[Tt]en(?:lo|la))\b',re.I)
def conv_line(l,stats):
    st=l.lstrip()
    if st.startswith(('image_prompt','image:','link:','permalink:','slug:','activity_code','url:','badge','layout:','- http','Origin','origin','license','attribution','  - title','- title','author','source')): return l
    if re.match(r'^\s*[a-z_]+:',l) and not re.match(r'^\s*(title|description|summary):',l): return l
    if 'http' in l and st.startswith('-'): return l
    out=l
    # 1) imperativos al inicio de oración / ítem
    def rep_start(m):
        w=m.group(2)
        if not es_verbo(w): return m.group(0)
        nxt=out[m.end():m.end()+15].split()
        if w.lower() in AMBIGN and (not nxt or nxt[0].lower().strip(':,.') in NOUNNEXT or out[m.end():m.end()+1]==':'): return m.group(0)
        v=imp_vos(w)
        if not v or v==w: return m.group(0)
        stats['imp']+=1
        return m.group(1)+v
    out=SENT.sub(rep_start,out)
    # 2) encadenados: "Prepará X y coloca Y" -> "y colocá"
    def rep_chain(m):
        w=m.group(2)
        if not es_verbo(w) or w.lower() in AMBIGN: return m.group(0)
        v=imp_vos(w)
        if not v or v==w: return m.group(0)
        stats['cad']+=1
        return m.group(1)+v
    if re.search(r'[áéí]\b',out):
        out=re.sub(r'((?:,\s*)?(?:\by|\bo|\be|\bluego|\bdespués|\bni|,)\s+)([a-záéíóúñ]+)\b',lambda m: rep_chain(m) if re.search(r'\b\w+[áéí]\b',out[:m.start()]) else m.group(0),out)
    # 3) imperativo + clítico con tilde, en cualquier posición
    def rep_cl(m):
        w=m.group(1)
        mm=re.fullmatch(r'(.+?)((?:me|te|se|nos|les|le|los|las|lo|la){1,2})',w,re.I)
        base=sa(mm.group(1)).lower() if mm else ''
        okb=any(sa(v)==base for v in VERBOS) or base in ('di','haz','pon','ten','da')
        if not okb: return w
        v=imp_vos(w)
        if not v or v==w: return w
        stats['cl']+=1; return v
    out=CLIT.sub(rep_cl,out)
    # 4) presente indicativo
    def rep_pres(m):
        w=m.group(0); v=PRES.get(w.lower())
        if not v or v==w.lower(): return w
        stats['pres']+=1
        return v[0].upper()+v[1:] if w[0].isupper() else v
    out=re.sub(r'\b[A-Za-záéíóúñ]+\b',rep_pres,out)
    # 5) pronombres
    out=re.sub(r'\btú\b','vos',out); out=re.sub(r'\bTú\b','Vos',out)
    out=re.sub(r'\b(para|a|de|en|por|sin|con|entre|hacia|sobre) ti\b',r'\1 vos',out)
    out=re.sub(r'\bcontigo\b','con vos',out); out=re.sub(r'\bContigo\b','Con vos',out)
    return out
def run(files,dry):
    stats={'imp':0,'cad':0,'cl':0,'pres':0}; n=0
    for f in files:
        t=open(f,encoding='utf-8',newline='').read()
        a,o=partes(t)
        lines=a.split('\n')
        new=[conv_line(l,stats) for l in lines]
        u='\n'.join(new)+o
        if u!=t:
            n+=1
            if not dry: open(f,'w',encoding='utf-8',newline='').write(u)
    print('archivos',n,stats)
if __name__=='__main__':
    args=[a for a in sys.argv[1:] if not a.startswith('--')]
    run(args or sorted(glob.glob('content/activities/*.md')),'--dry' in sys.argv)
