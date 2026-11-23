# harmental_texte.py pre source.txt sortie.txt | post ch.json sortie.json : retouches du « Chevalier d'Harmental »
# (Gutenberg n° 18028, miroir orkeilius/gutenberg_fr_mirror).
# Cette édition ne donne pas de titres aux chapitres, seulement « Chapitre 1 » à « Chapitre 48 » : pre les change en
# « CHAPITRE I. » suivi d'une ligne « SANS TITRE », pour que gut.py ne prenne pas la première phrase pour un titre.
# Le « Post-Scriptum » qui suit le chapitre 48 devient « ÉPILOGUE » (id PS après post) ; on coupe avant la bibliographie.
# Les vers en italique (une ligne entière entre soulignements) gardent leurs lignes (« ¶ »).
# post : ids I à XLVIII puis PS ; titres vides (la fiche écrit « Chapitre N ») ; contrôles.
import json, re, sys
def roman(n):
    out = ''
    for v, r in ((100, 'C'), (90, 'XC'), (50, 'L'), (40, 'XL'), (10, 'X'), (9, 'IX'), (5, 'V'), (4, 'IV'), (1, 'I')):
        while n >= v: out += r; n -= v
    return out
def etoiles(par):  # l'espace sort de l'italique « *…* »
    parts = par.split('*')
    if len(parts) % 2 == 0: return par
    for k in range(1, len(parts), 2):
        if parts[k].endswith(' '): parts[k] = parts[k].rstrip(' '); parts[k + 1] = ' ' + parts[k + 1].lstrip(' ')
        if parts[k].startswith(' '): parts[k] = parts[k].lstrip(' '); parts[k - 1] = parts[k - 1].rstrip(' ') + ' '
    return '*'.join(parts)
FIX = []
if sys.argv[1] == 'pre':
    L = open(sys.argv[2], encoding='utf8').read().replace('\r', '').split('\n')
    toc_end = next(i for i, l in enumerate(L) if l.strip() == 'Post Scriptum.')
    out = []
    for i, l in enumerate(L):
        s = l.strip()
        if i > toc_end:
            m = re.match(r'^Chapitre (\d+)$', s)
            if m: out += ['CHAPITRE %s.' % roman(int(m.group(1))), '', 'SANS TITRE']; continue
            if s == 'Post-Scriptum': out.append('ÉPILOGUE'); continue
        out.append(l)
    T = '\n'.join(out)
    T = T[:T.index('Bibliographie--OEuvres complètes', T.index('ÉPILOGUE'))]
    for a, b in FIX: assert a in T, a; T = T.replace(a, b)
    V = T.split('\n'); out = []; prev = False
    for l in V:
        verse = bool(re.match(r'^_[^_]+_$', l.strip())) and len(l.strip()) < 70
        if verse and prev: out[-1] += ' ¶ ' + l.strip()
        else: out.append(l)
        prev = verse
    open(sys.argv[3], 'w', encoding='utf8').write('\n'.join(out))
else:
    C = json.load(open(sys.argv[2]))
    ids = [roman(k) for k in range(1, 49)] + ['E']
    assert [c['n'] for c in C] == ids, [c['n'] for c in C]
    for c in C:
        c['head'] = ''
        if c['n'] == 'E': c['n'] = 'PS'
        c['paras'] = [etoiles(p.replace(' ¶ ', '\n')) for p in c['paras']]
        for p in c['paras']: assert not re.search(r'[_¶\[\]]|Gutenberg|SANS TITRE', p) and p.count('*') % 2 == 0, (c['n'], p[:80])
    json.dump(C, open(sys.argv[3], 'w'), ensure_ascii=False, indent=0)
