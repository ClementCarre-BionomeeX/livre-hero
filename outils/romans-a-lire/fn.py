# fn.py source.txt chapitres.json : « La Flèche noire », traduction La Chesnais (Mercure de France, 1901), Project
# Gutenberg n° 70065 → chapitres et paragraphes. Les vers (lignes en retrait) gardent leurs lignes, en italique ;
# « A » majuscule seul devient « À » (typographie de 1901 sans accent sur les capitales).
import re, json, sys
sys.path.insert(0, sys.argv[0].rsplit('/', 1)[0]); from typo import typo
L = open(sys.argv[1], encoding='utf8').read().replace('\r', '').split('\n')
start = next(i for i, l in enumerate(L) if l.strip() == 'PROLOGUE')
end = next(i for i, l in enumerate(L) if l.strip() == 'TABLE DES MATIÈRES')
blocks = []; cur = []
for l in L[start:end]:
    if l.strip(): cur.append(l)
    elif cur: blocks.append(cur); cur = []
if cur: blocks.append(cur)
ROM = {'PREMIER': '1'}
def caps(s):  # « Etat », « A » : capitales sans accent de l'édition
    s = re.sub(r'(^|[\s«—(\'’])A(?=\s)', r'\1À', s)
    for a, b in (('Etre', 'Être'), ('Etat', 'État'), ('Etait', 'Était'), ('Elle-même', 'Elle-même'), ('Ecoute', 'Écoute'), ('Ecoutez', 'Écoutez'), ('Eh', 'Eh')):
        s = re.sub(r'\b' + a + r'\b', b, s)
    return s
chs = []; book = None; want = None
for b in blocks:
    t = ' '.join(x.strip() for x in b)
    if t == 'PROLOGUE': chs.append({'n': 'P', 'raw': []}); want = 'title'; continue
    m = re.match(r'^LIVRE (PREMIER|[IVX]+)$', t)
    if m: book = 'I' if m.group(1) == 'PREMIER' else m.group(1); want = 'booktitle'; continue
    m = re.match(r'^CHAPITRE (PREMIER|[IVX]+)$', t)
    if m:
        k = m.group(1); num = 1 if k == 'PREMIER' else ['I','II','III','IV','V','VI','VII','VIII'].index(k) + 1
        chs.append({'n': book + str(num), 'raw': []}); want = 'title'; continue
    if want == 'booktitle': want = None; continue
    if want == 'title': chs[-1]['head'] = t; want = None; continue
    if all(x.startswith('    ') for x in b):
        chs[-1]['raw'].append('\n'.join('*' + caps(typo(x.strip())) + '*' for x in b)); continue
    chs[-1]['raw'].append(caps(typo(t)))
# italique _…_ → *…* ; notes de l'auteur [n] remises entre parenthèses à la fin du paragraphe qui les appelle
for c in chs:
    ps = [re.sub(r'_([^_]+)_', r'*\1*', p) for p in c.pop('raw')]
    notes = {}
    for p in ps:
        m = re.match(r'^\[(\d)\]\s*(.*)$', p)
        if m: notes[m.group(1)] = re.sub(r'\s*\(\*Note de l.auteur\.\*\)\s*$', '', m.group(2)).strip()
    out = []
    for p in ps:
        if re.match(r'^\[\d\]', p): continue
        for k, v in notes.items():
            if '[' + k + ']' in p: p = p.replace('[' + k + ']', '') + ' (*Note de Stevenson : ' + (v[0].lower() if v.startswith('À ') else v[0]) + v[1:] + '*)'
        out.append(p)
    c['paras'] = out
json.dump(chs, open(sys.argv[2], 'w', encoding='utf8'), ensure_ascii=False)
for c in chs: print(c['n'], c.get('head'), len(c['paras']), sum(len(p.split()) for p in c['paras']))
