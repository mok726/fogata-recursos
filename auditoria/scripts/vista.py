"""Vista condensada de actividades para revisión manual.
Uso: python3 auditoria/scripts/vista.py slug1 slug2 ...  |  --badge ID [--from N --to M]
"""
import sys, os, re, glob, yaml
ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
ACT = os.path.join(ROOT, "content", "activities")

def load(slug):
    s = open(os.path.join(ACT, slug + ".md"), encoding="utf-8").read().replace("\r\n", "\n")
    m = re.match(r"^---\n(.*?)\n---\n(.*)$", s, re.S)
    return yaml.safe_load(m.group(1)) or {}, m.group(2)

def show(slug):
    fm, body = load(slug)
    body = re.split(r"\n## Checklist de verificación", body)[0]
    body = re.sub(r"\n\s*\n", "\n", body).strip()
    print("=" * 8, slug, "|", fm.get("activity_code"), "|", fm.get("title"))
    print("dur:", fm.get("duration"), "| edad:", fm.get("age"), fm.get("age_group"), "| prep:", fm.get("prep_time"), "| lugar:", fm.get("location"))
    print("mat:", "; ".join(map(str, fm.get("materials") or [])), "| tools:", fm.get("tools"))
    if fm.get("files") or fm.get("link"):
        print("files:", fm.get("files"), "| link:", fm.get("link"))
    for r in fm.get("references") or []:
        if isinstance(r, dict):
            print("ref:", r.get("title"), "|", r.get("url"))
    print(body)

def main():
    args = sys.argv[1:]
    if args and args[0] == "--badge":
        b = args[1]
        lo = int(args[args.index("--from") + 1]) if "--from" in args else 0
        hi = int(args[args.index("--to") + 1]) if "--to" in args else 10**6
        slugs = []
        for p in sorted(glob.glob(os.path.join(ACT, "*.md"))):
            slug = os.path.basename(p)[:-3]
            fm, _ = load(slug)
            if b in [str(x).strip() for x in fm.get("activity_badges") or []]:
                slugs.append((str(fm.get("activity_code")), slug))
        slugs.sort()
        for _, s in slugs[lo:hi]:
            show(s)
    else:
        for s in args:
            show(s)


if __name__ == "__main__":
    main()
