import re, json, sys
sys.path.insert(0, sys.argv[0].rsplit('/',1)[0]); from typo import typo
L = open(sys.argv[1], encoding='utf8').read().split('\n')
start = next(i for i,l in enumerate(L) if l.startswith('[Illustration] I'))
end = next(i for i,l in enumerate(L) if l.strip()=='TABLE DES MATIÈRES')
chapters = []; cur = None; buf = []; skiptitle = False
def flush():
    if buf and cur is not None: cur['raw'].append(' '.join(x.strip() for x in buf))
    buf.clear()
# drop the plates' captions: any block (between blank lines) with an indented line
seg=L[start:end]; keep=[True]*len(seg); i=0
while i<len(seg):
    if not seg[i].strip(): i+=1; continue
    j=i
    while j<len(seg) and seg[j].strip(): j+=1
    if any(x.startswith('    ') for x in seg[i:j]):
        for k in range(i,j): keep[k]=False
    i=j
for l in [x if k else '' for x,k in zip(seg,keep)]:
    m = re.match(r'^\[Illustration\] (LIVRE DEUXIÈME|[IVXL]+)\s*$', l)
    if m:
        flush()
        if m.group(1).startswith('LIVRE'): skiptitle='livre'; continue
        cur = {'n': m.group(1), 'raw': []}; chapters.append(cur); skiptitle = True; continue
    if l.strip()=='[Illustration]' or l.startswith('     ') : flush(); continue
    if skiptitle:
        if not l.strip(): 
            if skiptitle=='done': skiptitle=False
            continue
        if l.strip().isupper() or skiptitle=='livre': skiptitle='done'; continue
        skiptitle=False
    if not l.strip(): flush(); continue
    buf.append(l)
flush()
# merge broken paragraphs (page breaks around the plates)
for c in chapters:
    out = []
    for p in c['raw']:
        p = p.strip()
        if not p: continue
        if out and (out[-1].endswith('-') and not out[-1].endswith('--') or (not re.search(r'[.!?»:…;)\]]$', out[-1].rstrip('-')) and re.match(r'^[a-zàâçéèêëîïôûùüÿœ,;]', p)) or re.match(r'^[a-zàâçéèêëîïôûùüÿœ]', p) and not re.search(r'[.!?»…]$', out[-1])):
            out[-1] = out[-1][:-1] + p if out[-1].endswith('-') and not out[-1].endswith('--') and re.match(r'^[a-zà-ÿ]', p) and False else out[-1] + ' ' + p
        else: out.append(p)
    c['paras'] = [typo(p) for p in out]
json.dump(chapters, open(sys.argv[2],'w',encoding='utf8'), ensure_ascii=False, indent=0)
for c in chapters: print(c['n'], len(c['paras']), sum(len(p.split()) for p in c['paras']), '|', c['paras'][0][:60])
