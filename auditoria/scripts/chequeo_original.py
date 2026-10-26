"""Chequeos contra el "Texto original completo" embebido (sobre todo actividades YUNGA/FAO).
- nivel YUNGA (1: 5-10, 2: 11-15, 3: 16+) vs age_group
- URLs del original que no aparecen en link/files/references/cuerpo adaptado
- menciones a material auxiliar (anexo, plantilla, hoja de trabajo, ficha, juego de cartas...)
Uso: python3 auditoria/scripts/chequeo_original.py > auditoria/chequeo-original.md
"""
import os, re, glob, collections, json
import yaml
ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
ACT = os.path.join(ROOT, "content", "activities")
NIVEL = {"1": {"castores", "manada"}, "2": {"scouts", "caminantes"}, "3": {"caminantes", "rovers"}}
AUX = r"(anexo|ap[eé]ndice|plantilla|hoja de (trabajo|actividades)|ficha|tarjetas? (de|del)|juego de (cartas|mesa)|descarga|imprim|kit de|gu[ií]a de)"

rows = collections.defaultdict(list)
stats = collections.Counter()
for p in sorted(glob.glob(os.path.join(ACT, "*.md"))):
    slug = os.path.basename(p)[:-3]
    s = open(p, encoding="utf-8").read().replace("\r\n", "\n")
    m = re.match(r"^---\n(.*?)\n---\n(.*)$", s, re.S)
    fm = yaml.safe_load(m.group(1)) or {}
    body = m.group(2)
    if "## Texto original completo" not in body:
        continue
    adapted, orig = body.split("## Texto original completo", 1)
    orig = orig.split("## Checklist de verificación")[0]
    groups = {str(g).strip().lower() for g in fm.get("age_group") or []}
    nm = re.search(r"\bnivel ([123](?: [123])*)\b", orig)
    if nm:
        stats["con nivel"] += 1
        niveles = set(nm.group(1).split())
        esperado = set().union(*(NIVEL[n] for n in niveles))
        faltan = esperado - groups
        sobran = groups - esperado - ({"caminantes"} if "2" in niveles or "3" in niveles else set())
        if "1" in niveles and "castores" in faltan:
            faltan.discard("castores")  # castores (5-7) es opcional: YUNGA nivel 1 es 5-10
        if faltan or sobran:
            rows[slug].append("nivel YUNGA %s vs age_group %s (faltan: %s; sobran: %s)" % (
                nm.group(1), sorted(groups), ", ".join(sorted(faltan)) or "-", ", ".join(sorted(sobran)) or "-"))
    urls = set(u.rstrip(").,;") for u in re.findall(r"(?:https?://|www\.)[^\s)\]>*]+", orig))
    known = json.dumps([fm.get("link"), fm.get("files"), fm.get("references")], ensure_ascii=False) + adapted
    for u in sorted(urls):
        core = re.sub(r"^(https?://)?(www\.)?", "", u).rstrip("/")
        if core and core not in known:
            rows[slug].append("URL del original no enlazada: `%s`" % u)
            stats["urls faltantes"] += 1
    for a in sorted(set(x.group(0).lower() for x in re.finditer(AUX, orig, re.I))):
        rows[slug].append("el original menciona: «%s»" % a)
        stats["menciones aux"] += 1

print("# Chequeo contra el texto original embebido\n")
print("Generado por `auditoria/scripts/chequeo_original.py`. Solo actividades con sección \"Texto original completo\".\n")
print("Niveles YUNGA: 1 = 5–10 años (castores/manada), 2 = 11–15 (scouts/caminantes), 3 = 16+ (caminantes/rovers). Castores es opcional en nivel 1.\n")
print("Resumen:", dict(stats), "\n")
for slug in sorted(rows):
    print("- **%s**: %s" % (slug, "; ".join(rows[slug])))
