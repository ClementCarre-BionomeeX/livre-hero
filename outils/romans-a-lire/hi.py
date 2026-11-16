import re, json, sys
sys.path.insert(0, sys.argv[0].rsplit('/',1)[0]); from typo import typo
L = [l.strip() for l in open(sys.argv[1], encoding='utf8').read().replace('\r','').split('\n')]
start = next(i for i,l in enumerate(L) if l == 'I' and i > 80)
end = next(i for i,l in enumerate(L) if l.startswith('Ce livre électronique est issu'))
chs = []; cur = None; i = start
while i < end:
    l = L[i]
    if re.fullmatch(r'[IVXL]+|ÉPILOGUE', l):
        j = i + 1
        while not L[j]: j += 1
        if l == 'ÉPILOGUE': title = 'Épilogue'; nxt = j
        else: title = L[j]; nxt = j + 1
        cur = {'n': l if l != 'ÉPILOGUE' else 'EP', 'head': title, 'raw': []}; chs.append(cur); i = nxt; continue
    if l and cur is not None and not l.startswith('↑') and l not in ('* * *',):
        cur['raw'].append(l)
    i += 1
NOTE = '(*Note du traducteur : en Angleterre, les fenêtres sont à guillotine, avec des volets intérieurs.*)'
for c in chs:
    c['paras'] = [typo(p.replace('[1]', ' ' + NOTE) if '[1]' in p else p) for p in c['raw']]
    del c['raw']
json.dump(chs, open(sys.argv[2], 'w', encoding='utf8'), ensure_ascii=False)
for c in chs: print(c['n'], c['head'], len(c['paras']), sum(len(p.split()) for p in c['paras']))
