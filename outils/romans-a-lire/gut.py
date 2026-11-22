# gut.py source.txt chapitres.json : texte brut de Gutenberg (miroir orkeilius/gutenberg_fr_mirror) dont les chapitres
# s'ouvrent sur une ligne « CHAPITRE N. » (ou « CHAPITRE PREMIER ») suivie du titre en capitales, sur une ou deux lignes.
# Une ligne seule « PRÉFACE », « ÉPILOGUE » ou « CONCLUSION » ouvre aussi un chapitre (ids « P », « E », « C »).
# La table des matières du début est sautée (on commence au premier chapitre qui a du texte). Les paragraphes sont
# séparés par des lignes vides ; l'italique _…_ devient *…* ; typo.py aligne la typographie. Les titres restent en
# capitales : la fiche les réécrit. Les « oe » de cœur, œil, sœur… redeviennent « œ » ; une ligne coupée sur un trait
# d'union se recolle sans espace.
import json, re, sys
sys.path.insert(0, sys.argv[0].rsplit('/', 1)[0]); from typo import typo
L = open(sys.argv[1], encoding='utf8').read().split('\n')
end = next((i for i, l in enumerate(L) if l.startswith('*** END OF')), len(L))
HEADS = {'PRÉFACE': 'P', 'ÉPILOGUE': 'E', 'CONCLUSION': 'C'}
def head_at(i):
    s = L[i].strip()
    m = re.match(r'^CHAPITRE\s+([IVXLC]+|PREMIER)\.?$', s)
    if m: return 'I' if m.group(1) == 'PREMIER' else m.group(1)
    return HEADS.get(s)
# début : la première tête suivie, après son titre, d'un paragraphe en minuscules (la table n'en a pas)
heads = [i for i in range(end) if head_at(i)]
def has_body(i):
    j = i + 1; seen = 0
    while j < end and j < i + 12:
        s = L[j].strip()
        if s and not s.isupper() and not head_at(j) and not s.startswith('CHAPITRE'): return True
        if s and head_at(j): return False
        j += 1
    return False
start = next(i for i in heads if has_body(i))
chs = []; cur = None; buf = []; intitle = False
def flush():
    if buf and cur is not None:
        t = ''
        for x in buf:  # une ligne finie par un trait d'union se recolle sans espace (« haut-/de-chausses »)
            x = x.strip(); t = t + x if t.endswith('-') and not t.endswith('--') else (t + ' ' + x if t else x)
        cur['raw'].append(t)
    buf.clear()
for i in range(start, end):
    l = L[i]; h = head_at(i)
    if h:
        flush()
        if h == 'C' and cur is not None and not cur['raw'] and not buf: cur['title'] = 'CONCLUSION'; intitle = True; continue  # « CHAPITRE LXVII / CONCLUSION »
        cur = {'n': h, 'title': '', 'raw': []}; chs.append(cur); intitle = h not in ('P', 'E', 'C'); continue
    if intitle:
        if not l.strip():
            if cur['title']: intitle = False
            continue
        if l.strip().isupper() or not cur['title'] and len(l.strip()) < 90:
            cur['title'] = (cur['title'] + ' ' + l.strip()).strip(); continue
        intitle = False
    if not l.strip(): flush(); continue
    buf.append(l)
flush()
for c in chs:
    out = []
    for p in c.pop('raw'):
        p = re.sub(r'_([^_]+)_', r'*\1*', p)
        p = re.sub(r'(?<=\w)- (?=\w)', '-', p)  # « haut- de-chausses » (coupure de la saisie)
        p = re.sub(r'([cCsSmMvVnNbBhHfF]|^|\W)([oO])e(?=u|il)', lambda m: m.group(1) + ('œ' if m.group(2) == 'o' else 'Œ'), p)  # coeur → cœur
        p = re.sub(r'^[–-]\s*', '— ', p); p = re.sub(r'\s–\s', ' — ', p)
        out.append(typo(p))
    c['head'] = c.pop('title'); c['paras'] = [p for p in out if p]
json.dump(chs, open(sys.argv[2], 'w', encoding='utf8'), ensure_ascii=False, indent=0)
for c in chs: print(c['n'], c['head'][:50], len(c['paras']), sum(len(p.split()) for p in c['paras']))
