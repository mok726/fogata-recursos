"""Vista compacta: adaptación completa + del original solo metadatos y % de similitud de texto.
Uso: python3 auditoria/scripts/vista2.py --badge ID [--from N --to M]  |  slugs...
"""
import sys, os, re, difflib
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import vista

def words(t):
    return re.findall(r"\w+", t.lower())

def show(slug):
    fm, body = vista.load(slug)
    body = re.split(r"\n## Checklist de verificación", body)[0]
    parts = body.split("## Texto original completo")
    adapted = re.sub(r"\n\s*\n", "\n", parts[0]).strip()
    adapted = re.sub(r"\n## ODS involucrados\n(- .*\n?)*", "\n", adapted)
    orig = parts[1] if len(parts) > 1 else ""
    print("=" * 8, slug, "|", fm.get("activity_code"), "|", fm.get("title"))
    print("dur:", fm.get("duration"), "| edad:", fm.get("age"), fm.get("age_group"), "| lugar:", fm.get("location"))
    print("mat:", "; ".join(map(str, fm.get("materials") or [])), "| tools:", fm.get("tools"))
    if fm.get("files") or fm.get("link"):
        print("files:", fm.get("files"), "| link:", [l.get("url") if isinstance(l, dict) else l for l in fm.get("link") or []])
    print(adapted)
    if orig:
        meta = [l for l in orig.splitlines() if re.match(r"\*\*(Tiempo|Grupo Etario|Duración|Recursos y Materiales|Materiales|Edad)", l)]
        wa, wo = words(adapted), words(orig)
        sim = difflib.SequenceMatcher(None, wa, wo, autojunk=False).ratio() if wa and wo else 0
        cov = len(set(wo) & set(wa)) / max(1, len(set(wo)))
        if len(orig) < 1500:
            print("-- ORIGINAL COMPLETO:", re.sub(r"\s*\n\s*", " / ", orig.strip())[:1500], f"| sim={sim:.2f}")
        else:
            print("-- ORIGINAL:", " | ".join(meta)[:300], f"| similitud={sim:.2f} cobertura_vocab={cov:.2f}")
        extra = re.findall(r"(?i)(anexo[^.\n]*|ap[eé]ndice[^.\n]*|https?://\S+|versi[oó]n (?:online|impresa)[^.\n]*|plantilla[^.\n]*|ficha[^.\n]*)", orig)
        if extra:
            print("-- MENCIONES AUX EN ORIGINAL:", " || ".join(sorted(set(e[:90] for e in extra)))[:600])
    else:
        print("-- SIN TEXTO ORIGINAL")

args = sys.argv[1:]
if args and args[0] == "--badge":
    import glob
    b = args[1]
    lo = int(args[args.index("--from") + 1]) if "--from" in args else 0
    hi = int(args[args.index("--to") + 1]) if "--to" in args else 10**6
    sl = []
    for p in glob.glob(os.path.join(vista.ACT, "*.md")):
        s = os.path.basename(p)[:-3]
        fm, _ = vista.load(s)
        if b in [str(x).strip() for x in fm.get("activity_badges") or []]:
            sl.append((str(fm.get("activity_code")), s))
    for _, s in sorted(sl)[lo:hi]:
        show(s)
else:
    for s in args:
        show(s)
