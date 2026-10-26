"""G6: títulos con mayúscula inicial en palabras principales (estilo inglés), conectores en minúscula."""
import glob,re,sys
MIN=set('a al ante con contra de del desde durante e el en entre hacia hasta la las lo los mediante ni o para pero por que según sin so sobre tras u un una unos unas y vs. vs como cómo'.split())-{'cómo'}
def tc(s):
    out=[];first=True
    for tok in re.split(r'(\s+|-)',s):
        if not tok.strip() or tok=='-': out.append(tok); continue
        m=re.match(r'^([¡¿"(«\']*)(.*)$',tok); pre,w=m.groups()
        if not w: out.append(tok); continue
        if any(c.isupper() for c in w[1:]) or any(c.isdigit() for c in w): out.append(tok); first=False; continue  # siglas, CO2, iNaturalist
        low=w.lower()
        if not first and not pre and low in MIN: out.append(low)
        else: out.append(pre+w[0].upper()+w[1:])
        first=bool(re.search(r'[:.!?]$',w))
    return ''.join(out)
dry='--dry' in sys.argv; n=0
for f in sorted(glob.glob('content/activities/*.md')):
    t=open(f,encoding='utf-8',newline='').read()
    i=t.find('## Texto original completo'); a,o=(t,'') if i<0 else (t[:i],t[i:])
    def rt(m):
        return m.group(1)+tc(m.group(2))+m.group(3)
    j=a.index('\n---',3)
    fmt,body=a[:j],a[j:]
    fmt=re.sub(r'(?m)^(title:\s*")(.*?)("\s*\r?$)',rt,fmt,count=1)
    body=re.sub(r'(?m)^(# )(.*?)(\r?$)',rt,body,count=1)
    u=fmt+body
    if u!=a:
        n+=1
        if dry:
            for x,y in zip(a.split('\n'),u.split('\n')):
                if x!=y: print(x.strip(),'=>',y.strip())
        else: open(f,'w',encoding='utf-8',newline='').write(u+o)
print('archivos',n,file=sys.stderr)
