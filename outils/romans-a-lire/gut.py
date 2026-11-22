# gut.py source.txt [source2.txt …] chapitres.json : texte brut de Gutenberg (miroir orkeilius/gutenberg_fr_mirror).
# Un chapitre s'ouvre sur une ligne « CHAPITRE N. » (ou « CHAPITRE PREMIER »), ou sur une ligne qui ne porte que le
# numéro romain attendu (« XXXII »), suivie du titre sur une ou deux lignes. Une ligne seule « PRÉFACE », « ÉPILOGUE »
# ou « CONCLUSION » ouvre aussi un chapitre (ids « P », « E », « CONCL »). Plusieurs fichiers (les tomes) se suivent.
# Dans chaque fichier, la table des matières du début est sautée (on commence au premier chapitre qui a du texte) et
# l'on s'arrête à « FIN », « FIN DU TOME… », à la « TABLE » finale ou à la licence. Les paragraphes sont séparés par des lignes vides ;
# l'italique _…_ devient *…* ; les notes « [Note 1: …] » vont entre parenthèses à la fin du paragraphe qui porte
# l'appel « [1] » ; typo.py aligne la typographie. Les titres restent tels quels : la fiche les réécrit. Les « oe » de
# cœur, œil, sœur… redeviennent « œ » ; une ligne coupée sur un trait d'union se recolle sans espace.
import json, re, sys
sys.path.insert(0, sys.argv[0].rsplit('/', 1)[0]); from typo import typo
HEADS = {'PRÉFACE': 'P', 'ÉPILOGUE': 'E', 'CONCLUSION': 'CONCL'}
def roman(n):
    out = ''
    for v, r in ((100, 'C'), (90, 'XC'), (50, 'L'), (40, 'XL'), (10, 'X'), (9, 'IX'), (5, 'V'), (4, 'IV'), (1, 'I')):
        while n >= v: out += r; n -= v
    return out
chs = []; cur = None; buf = []; intitle = False; nexpect = [1]
def flush():
    if buf and cur is not None:
        t = ''
        for x in buf:  # une ligne finie par un trait d'union se recolle sans espace (« haut-/de-chausses »)
            x = x.strip(); t = t + x if t.endswith('-') and not t.endswith('--') else (t + ' ' + x if t else x)
        cur['raw'].append(t)
    buf.clear()
for src in sys.argv[1:-1]:
    L = open(src, encoding='utf8').read().replace('\r', '').split('\n')
    end = next((i for i, l in enumerate(L) if l.startswith('*** END OF') or re.match(r'^(FIN( DU TOME.*)?\.?|TABLE)$', l.strip())), len(L))
    def head_at(i, expect=None):
        s = L[i].strip()
        m = re.match(r'^CHAPITRE\s+([IVXLC]+|PREMIER)\.?$', s)
        if m: return 'I' if m.group(1) == 'PREMIER' else m.group(1)
        if expect is not None and s.rstrip('.') == roman(expect): return s.rstrip('.')
        return HEADS.get(s)
    # début : la première tête suivie, après son titre, d'un paragraphe en minuscules (la table n'en a pas)
    def has_body(i):
        j = i + 1
        while j < end and j < i + 12:
            s = L[j].strip()
            if s and head_at(j): return False
            if s and not s.isupper() and not s.startswith('CHAPITRE') and not re.match(r'^[IVXLC]+\s', s) and j > i + 2: return True
            j += 1
        return False
    start = next(i for i in range(end) if head_at(i, nexpect[0]) and has_body(i))
    for i in range(start, end):
        l = L[i]; h = head_at(i, nexpect[0])
        if h:
            flush()
            if h == 'CONCL' and cur is not None and not cur['raw'] and not buf: cur['title'] = 'CONCLUSION'; intitle = True; continue  # « CHAPITRE LXVII / CONCLUSION »
            cur = {'n': h, 'title': '', 'raw': []}; chs.append(cur); intitle = h not in ('P', 'E', 'CONCL')
            if intitle: nexpect[0] += 1
            continue
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
    out = []; notes = {}
    raw = c.pop('raw')
    for p in raw:
        m = re.match(r'^\[Note (\d+):\s*(.*)\]$', p)
        if m: notes[m.group(1)] = m.group(2)
    for p in raw:
        if re.match(r'^\[Note \d+:', p): continue
        calls = re.findall(r'\[(\d+)\]', p)
        p = re.sub(r'\[(\d+)\]', '', p)
        for k in calls:
            if k in notes: p = p + ' (*Note : ' + notes[k].strip().rstrip('.') + '.*)'
        p = re.sub(r'_([^_]+)_', r'*\1*', p)
        p = re.sub(r'(?<=\w)- (?=\w)', '-', p)  # « haut- de-chausses » (coupure de la saisie)
        p = re.sub(r'([cCsSmMvVnNbBhHfF]|^|\W)([oO])e(?=u|il)', lambda m: m.group(1) + ('œ' if m.group(2) == 'o' else 'Œ'), p)  # coeur → cœur
        p = re.sub(r'\bOE(?=[a-zé])', 'Œ', p)  # « OEuvres »
        p = re.sub(r'^\s*--\s*', '— ', p); p = re.sub(r'\s*--\s*', ' — ', p)
        p = re.sub(r'^[–-]\s*', '— ', p); p = re.sub(r'\s–\s', ' — ', p)
        out.append(typo(p))
    c['head'] = typo(c.pop('title')); c['paras'] = [p for p in out if p]
json.dump(chs, open(sys.argv[-1], 'w', encoding='utf8'), ensure_ascii=False, indent=0)
for c in chs: print(c['n'], c['head'][:50], len(c['paras']), sum(len(p.split()) for p in c['paras']))
