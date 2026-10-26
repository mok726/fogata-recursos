"""Reemplazos de texto fuera de la sección "Texto original completo", preservando CRLF.
Uso desde Python: from fix import fix; fix('slug.md', [(viejo, nuevo), ...])
"""
import os
ACT = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))), "content", "activities")

def fix(f, reps, whole=False):
    p = os.path.join(ACT, f if f.endswith(".md") else f + ".md")
    raw = open(p, "rb").read().decode("utf-8")
    crlf = "\r\n" in raw
    s = raw.replace("\r\n", "\n")
    cut = -1 if whole else s.find("## Texto original completo")
    head, tail = (s[:cut], s[cut:]) if cut > 0 else (s, "")
    for a, b in reps:
        n = head.count(a)
        print(f, n, repr(a))
        head = head.replace(a, b)
    out = head + tail
    if crlf:
        out = out.replace("\n", "\r\n")
    open(p, "wb").write(out.encode("utf-8"))
