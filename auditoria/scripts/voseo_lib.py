import re,glob,os,sys,unicodedata
sys.path.insert(0,os.path.dirname(__file__))
def sa(s):  # sin acentos (conserva ñ)
    return ''.join(c for c in unicodedata.normalize('NFD',s) if unicodedata.category(c)!='Mn' or c=='̃').replace('ñ','ñ')
from collections import Counter
INF=Counter()
for f in glob.glob(os.path.join(os.path.dirname(__file__),'../../content/activities/*.md')):
    txt=open(f,encoding='utf-8').read().split('## Texto original completo')[0]
    for w in re.findall(r'\b[a-záéíóúñ]{1,}(?:ar|er|ir)\b',txt.lower()):
        INF[w]+=1
EXPL=set('pedir seguir elegir medir repetir servir vestir competir corregir conseguir despedir sentir preferir divertir convertir advertir mentir hervir dormir morir volver mover llover devolver resolver envolver recordar contar mostrar encontrar probar jugar costar soltar volar sonar soñar almorzar forzar colgar rogar renovar pensar cerrar empezar comenzar despertar regar sembrar calentar merendar negar recomendar atravesar entender encender defender perder querer extender oler hacer poner tener venir salir decir ir ser oír caer traer valer saber caber reunir actuar enviar averiguar construir destruir incluir distribuir contribuir sustituir huir leer ver dar usar unir creer deber comer beber reír escoger recoger proteger comprometer someter meter barrer romper esconder aprender comprender responder consumir escribir describir subir añadir decidir dividir cubrir descubrir abrir vivir imprimir permitir discutir compartir mirar repensar'.split())
for w in EXPL: INF[w]+=1000
IRR_IMP={'haz':'hacé','pon':'poné','ten':'tené','ven':'vení','sal':'salí','di':'decí','mantén':'mantené','obtén':'obtené','propón':'proponé','sé':'sé','contén':'contené','detén':'detené','compón':'componé','dispón':'disponé','supón':'suponé','ve':'andá'}
IRR_PRES={'eres':'sos','puedes':'podés','tienes':'tenés','quieres':'querés','vienes':'venís','dices':'decís','haces':'hacés','pones':'ponés','sales':'salís','sabes':'sabés','prefieres':'preferís','sientes':'sentís','piensas':'pensás','encuentras':'encontrás','recuerdas':'recordás','juegas':'jugás','cierras':'cerrás','duermes':'dormís','pides':'pedís','sigues':'seguís','eliges':'elegís','vuelves':'volvés','entiendes':'entendés','enciendes':'encendés','consigues':'conseguís','pierdes':'perdés','mueves':'movés','cuentas':'contás','muestras':'mostrás','pruebas':'probás','riegas':'regás','compites':'competís','mides':'medís','sirves':'servís','construyes':'construís','incluyes':'incluís','contribuyes':'contribuís','oyes':'oís','hueles':'olés','empiezas':'empezás','comienzas':'comenzás','cuelgas':'colgás'}
VOW={'a':'á','e':'é','i':'í'}
STEM=[('ie','e'),('ue','o'),('i','e'),('ue','u'),('y','')]
def infinitivo(stem,vocal):
    """stem sin la vocal final del imperativo tú; devuelve infinitivo conocido o None"""
    s=sa(stem)
    ends=['ar'] if vocal=='a' else ['er','ir']
    cands=[s]
    for a,b in STEM:
        i=s.rfind(a)
        if i>=0: cands.append(s[:i]+b+s[i+len(a):])
    if s.endswith('y'): cands.append(s[:-1])  # construye->constru(ir)
    best=None
    for c in cands:
        for e in ends:
            if INF.get(c+e,0)>(INF.get(best,0) if best else 0): best=c+e
        if best: return best
    if vocal=='a' and len(s)>1: return s+'ar'
    return None
CL=r'(me|te|se|nos|les|le|los|las|lo|la)'
def imp_vos(word):
    """imperativo tú (con o sin clíticos) -> voseo, o None"""
    low=word.lower(); cap=word[0].isupper()
    def ret(x): return (x[0].upper()+x[1:]) if cap else x
    if low in IRR_IMP: return ret(IRR_IMP[low])
    mm=re.fullmatch(r'(haz|pon|di|ten|sal|ven)'+CL+CL+'?',low)
    if mm:
        b={'haz':'hace','pon':'pone','di':'deci','ten':'tene','sal':'sali','ven':'veni'}[mm.group(1)]
        rest=low[len(mm.group(1)):]
        if re.fullmatch(CL+CL,rest): b=b[:-1]+VOW[b[-1]]
        return ret(b+rest)
    m=re.fullmatch(r'([a-záéíóúñü]+?)'+CL+'?'+CL+'?',low)
    acc=bool(re.search('[áéíóú]',low[:-1]))
    order=list(range(2,len(low)+1)) if acc else list(range(len(low),1,-1))
    for split in order:
        base,cl=low[:split],low[split:]
        if cl and not re.fullmatch(CL+CL+'?',cl): continue
        if not cl:
            b=base
        else:
            b=sa(base) if re.search('[áéíóú]',base) else base
            if cl and not re.search('[áéíóú]',base) and sa(base) not in ('da','di','haz','pon','ten','ven','sal','ve','mantén'): 
                # sin tilde con clítico: monosílabo (dile, dale) o irregular
                pass
        bb=sa(b)
        nv=None
        if bb in ('ha','haz'): nv='hacé'
        if acc and not cl and split<len(low): continue
        if sa(base) in IRR_IMP or base in IRR_IMP:
            nv=IRR_IMP.get(base) or IRR_IMP.get(sa(base))
            if base=='di' or sa(base)=='di': nv='decí'
        if nv is None and bb and bb[-1] in 'ae':
            inf=infinitivo(bb[:-1],bb[-1])
            if inf: nv=inf[:-2]+VOW[inf[-2]]
        if nv is None: continue
        if base=='da' and cl: nv='da'
        if len(re.findall('[aeiouáéíóú]',nv))==1 and nv not in ('sé',): nv=sa(nv)
        if cl:
            ncl=len(re.findall(CL,cl)) if len(cl)>3 else 1
            n2=re.fullmatch(CL+CL,cl)
            if n2: return ret(nv+cl)              # explicáselo: conserva tilde
            return ret(sa(nv[:-1])+sa(nv[-1])+cl) # explicales, asegurate
        return ret(nv)
    return None
def pres_vos(word):
    low=word.lower(); cap=word[0].isupper()
    def ret(x): return (x[0].upper()+x[1:]) if cap else x
    if low in IRR_PRES: return ret(IRR_PRES[low])
    m=re.fullmatch(r'([a-zñ]+)(as|es)',low)
    if not m: return None
    stem,end=m.groups()
    inf=infinitivo(stem,'a' if end=='as' else 'e')
    if not inf: return None
    r=inf[:-2]+VOW[inf[-2]]+'s'
    if len(re.findall('[aeiouáéíóú]',r))==1: r=sa(r)
    return ret(r)
