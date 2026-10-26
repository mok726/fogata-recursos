"""Chequeos mecánicos sobre todas las actividades (front matter y estructura).
Uso: python3 auditoria/scripts/chequeo_automatico.py > auditoria/chequeo-automatico.md
"""
import os, re, sys, glob, collections, json
import yaml

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
ACT = os.path.join(ROOT, "content", "activities")

def load(path):
    txt = open(path, encoding="utf-8").read()
    m = re.match(r"^---\r?\n(.*?)\r?\n---\r?\n(.*)$", txt, re.S)
    if not m:
        return None, txt, "sin front matter"
    try:
        return yaml.safe_load(m.group(1)) or {}, m.group(2), None
    except Exception as e:
        return None, m.group(2), "YAML inválido: %s" % str(e).splitlines()[0]

REQUIRED = ["title", "duration", "description", "image", "branch", "age_group",
            "activity_badges", "activity_code", "references", "license"]
SECTIONS = ["## Resumen", "## Preparación", "## Desarrollo", "## Cierre"]

issues = collections.defaultdict(list)
titles = collections.defaultdict(list)
codes = collections.defaultdict(list)
data = {}
for path in sorted(glob.glob(os.path.join(ACT, "*.md"))):
    slug = os.path.basename(path)[:-3]
    fm, body, err = load(path)
    if err:
        issues[slug].append(err); continue
    data[slug] = fm
    for k in REQUIRED:
        if fm.get(k) in (None, "", []):
            issues[slug].append("campo vacío/faltante: `%s`" % k)
    o = fm.get("original")
    if not isinstance(o, bool):
        issues[slug].append("`original` no es booleano: %r" % o)
    if "Origin" in fm and "origin" not in fm:
        pass
    for b in fm.get("activity_badges") or []:
        if isinstance(b, str) and b != b.strip():
            issues[slug].append("id de insignia con espacios: %r" % b)
    img = fm.get("image") or ""
    if img and not os.path.exists(os.path.join(ROOT, img.lstrip("/"))):
        issues[slug].append("imagen no existe: `%s`" % img)
    pl = fm.get("permalink") or ""
    if pl and pl.strip("/").split("/")[-1] != slug:
        issues[slug].append("permalink `%s` no coincide con el nombre de archivo" % pl)
    for ref in fm.get("references") or []:
        if isinstance(ref, dict) and not ref.get("url"):
            issues[slug].append("referencia sin url: %r" % ref.get("title"))
    for s in SECTIONS:
        if s not in body:
            issues[slug].append("falta sección `%s`" % s)
    if "image_prompt" not in fm:
        issues[slug].append("sin `image_prompt`")
    # Palabras en portugués u otros restos frecuentes de la conversión
    for k in ("skills", "competencies", "category", "activity_type", "materials"):
        for v in fm.get(k) or []:
            if isinstance(v, str) and re.search(r"ção|ções|ã", v):
                issues[slug].append("valor en portugués en `%s`: %r" % (k, v))
    titles[str(fm.get("title", "")).strip().lower()].append(slug)
    if fm.get("activity_code"):
        codes[str(fm["activity_code"]).strip()].append(slug)

for t, s in titles.items():
    if len(s) > 1:
        for x in s:
            issues[x].append("título duplicado con: " + ", ".join(y for y in s if y != x))
for c, s in codes.items():
    if len(s) > 1:
        for x in s:
            issues[x].append("activity_code `%s` duplicado con: %s" % (c, ", ".join(y for y in s if y != x)))

print("# Chequeo automático de actividades\n")
print("Generado por `auditoria/scripts/chequeo_automatico.py`. %d archivos, %d con observaciones.\n" % (len(glob.glob(os.path.join(ACT, '*.md'))), len(issues)))
cnt = collections.Counter()
for v in issues.values():
    for i in v:
        cnt[re.sub(r"[:(].*", "", i).strip()] += 1
print("## Resumen por tipo\n\n| Tipo | Cantidad |\n|---|---|")
for k, n in cnt.most_common():
    print("| %s | %d |" % (k, n))
print("\n## Detalle\n")
for slug in sorted(issues):
    print("- **%s**: %s" % (slug, "; ".join(issues[slug])))
json.dump({k: v for k, v in issues.items()}, open(os.path.join(ROOT, "auditoria", "chequeo-automatico.json"), "w"), ensure_ascii=False, indent=1)
