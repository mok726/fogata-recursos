"""G3: léxico rioplatense. Uso: python3 auditoria/scripts/lexico.py [--dry]"""
import glob,re,sys,os
sys.path.insert(0,os.path.dirname(__file__)); from zona import partes
SKIP=('image_prompt','image:','link:','permalink:','slug:','activity_code','url:','badge','layout:')
R=[
 # canilla (fem.)
 (r'\bdel grifo\b','de la canilla'),(r'\bal grifo\b','a la canilla'),(r'\bel grifo\b','la canilla'),(r'\bun grifo\b','una canilla'),
 (r'\blos grifos\b','las canillas'),(r'\bunos grifos\b','unas canillas'),(r'\bgrifo abierto\b','canilla abierta'),(r'\bgrifo cerrado\b','canilla cerrada'),
 (r'\bgrifos\b','canillas'),(r'\bgrifo\b','canilla'),
 # lapicera (fem.)
 (r'\bun bol[ií]grafo\b','una lapicera'),(r'\bel bol[ií]grafo\b','la lapicera'),(r'\blos bol[ií]grafos\b','las lapiceras'),(r'\bunos bol[ií]grafos\b','unas lapiceras'),
 (r'\bbol[ií]grafo desechable\b','lapicera descartable'),(r'\bbol[ií]grafos\b','lapiceras'),(r'\bbol[ií]grafo\b','lapicera'),
 # pajita (fem.)
 (r'\bpajillas?/popotes?/carrizos\b','pajitas'),(r'\bpajillas?/popotes?\b','pajitas'),(r'\bPajilla/popote\b','Pajita'),
 (r'\bBombillas para beber \(popotes\)','Pajitas'),(r'\buna bombilla para beber \(popote\)','una pajita'),
 (r'\bpopotes\b','pajitas'),(r'\bpopote\b','pajita'),(r'\bpajillas\b','pajitas'),(r'\bpajilla\b','pajita'),
 # remera
 (r'\bcamisetas\b','remeras'),(r'\bcamiseta\b','remera'),
 # torta (fem.)
 (r'\bventa de pasteles\b','venta de tortas'),(r'\bpasteles de lodo\b','tortas de barro'),(r'\bPasteles de Lodo\b','Tortas de Barro'),
 (r'\bun "pastel de chocolate"','una "torta de chocolate"'),(r'\bPastel de chocolate\b','Torta de chocolate'),(r'\bun pastel de carne\b','un pastel de carne'),
 (r'\bpanes, pasteles\b','panes, tortas'),(r'^(\s*- )Pasteles$',r'\1Tortas'),
 # heladera (fem.)
 (r'\bdel refrigerador\b','de la heladera'),(r'\bel refrigerador\b','la heladera'),(r'\bun refrigerador eficiente\b','una heladera eficiente'),
 (r'\bRefrigerador eficiente\b','Heladera eficiente'),(r'\btu refrigerador\b','tu heladera'),(r'\brefrigerador\b','heladera'),(r'\bRefrigerador\b','Heladera'),
 (r'\bla nevera\b','la heladera'),(r'\bnevera\b','heladera'),
 # basural / tacho
 (r'\bel tiradero de basura\b','el basural'),(r'\bal tiradero de basura\b','al basural'),(r'\btiraderos de basura\b','basurales'),(r'\btiradero de basura\b','basural'),
 (r'\bel tiradero\b','el basural'),(r'\btiradero\b','basural'),
 (r'\bal basurero municipal\b','al basural municipal'),(r'\blixiviados de basureros\b','lixiviados de basurales'),(r'\bUn basurero al aire libre\b','Un basural a cielo abierto'),
 (r'\bBasurero vac[ií]o\b','Tacho vacío'),(r'\bbasurero vac[ií]o\b','tacho vacío'),(r'\bel basurero\b','el tacho de basura'),
 (r'\bel cubo de la basura\b','el tacho de basura'),(r'\bbotes de basura\b','tachos de basura'),(r'\bCubo de pl[aá]stico\b','Balde de plástico'),(r'\bun cubo compostador\b','una compostera'),
 # computadora (fem.)
 (r'\bUn computador\b','Una computadora'),(r'\bel computador\b','la computadora'),(r'\bcomputadores\b','computadoras'),(r'\bcomputador\b','computadora'),(r'\bComputador\b','Computadora'),(r'\bOrdenador\b','Computadora'),
 # cartulina
 (r'\bPapel de construcci[oó]n blanco\b','Cartulina blanca'),(r'\buna hoja grande de papel de construcci[oó]n\b','una cartulina grande'),(r'\bpapel de construcci[oó]n\b','cartulina'),
 # gaseosa
 (r'\bde refrescos\b','de gaseosa'),(r'\bde refresco\b','de gaseosa'),
 # varios
 (r'\bpiscinas\b','piletas'),(r'\bpiscina\b','pileta'),(r'\bcoches\b','autos'),(r'\bcoche\b','auto'),(r'\bfrijoles\b','porotos'),
 (r'\bautob[uú]s\b','colectivo'),(r'\brotuladores\b','marcadores'),(r'\bpalomitas de ma[ií]z\b','pochoclo'),(r'\bpalomitas\b','pochoclo'),
 (r'\bla acera\b','la vereda'),(r'\bacera\b','vereda'),(r'\bguisantes\b','arvejas'),(r'\buna chaqueta\b','una campera'),(r'\bchaqueta\b','campera'),
 (r'\btel[eé]fonos m[oó]viles\b','celulares'),(r'\btel[eé]fono m[oó]vil\b','celular'),(r'\bmando a distancia\b','control remoto'),
 (r'\bgafas de buceo\b','antiparras'),(r'\bGafas de buceo\b','Antiparras'),(r'\bgafas con montura\b','anteojos con armazón'),(r'\bgafas,','anteojos,'),
 (r'\bMaquinillas de afeitar\b','Afeitadoras descartables'),(r'\bmaquinillas de afeitar\b','afeitadoras descartables'),
 (r'\blodo\b','barro'),(r'\bLodo\b','Barro'),(r'\bpapel peri[oó]dico\b','papel de diario'),
]
C=[(re.compile(a,re.M),b) for a,b in R]
def fn(l):
    if l.lstrip().startswith(SKIP): return l
    for p,b in C: l=p.sub(b,l)
    return l
dry='--dry' in sys.argv; n=0
for f in sorted(glob.glob('content/activities/*.md')):
    t=open(f,encoding='utf-8',newline='').read()
    a,o=partes(t)
    u='\n'.join(fn(l) for l in a.split('\n'))+o
    if u!=t:
        n+=1
        if not dry: open(f,'w',encoding='utf-8',newline='').write(u)
print('archivos',n)
