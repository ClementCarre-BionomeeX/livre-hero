# lambert_texte.py pre source.txt sortie.txt | post ch.json sortie.json : retouches de « Gabriel Lambert »
# (Gutenberg n° 46747, miroir orkeilius/gutenberg_fr_mirror, édition Michel Lévy 1875).
# Le volume réunit le roman et trois récits courts (« La pêche aux filets », « Invraisemblance », « Une âme à naître ») :
# pre ne garde que le roman. Les chapitres sont numérotés « I », « II »… sur une ligne seule, le titre en capitales
# vient ensuite ; pre écrit « CHAPITRE N. » pour gut.py. Le chapitre VII n'a pas de titre : pre ajoute « SANS TITRE ».
# post : ids I à XX ; titres vides (la fiche les écrit) ; contrôles.
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
if sys.argv[1] == 'pre':
    L = open(sys.argv[2], encoding='utf8').read().replace('\r', '').split('\n')
    table = next(i for i, l in enumerate(L) if l.strip() == 'TABLE')
    start = next(i for i, l in enumerate(L) if i > table + 6 and l.strip() == 'GABRIEL LAMBERT')
    end = next(i for i, l in enumerate(L) if i > start and l.strip() == 'LA PÊCHE AUX FILETS')
    out = []; n = 0
    for l in L[start + 1:end]:
        m = re.match(r'^([IVXL]+)\.?$', l.strip())
        if m:
            n += 1; assert m.group(1) == roman(n), l
            out.append('CHAPITRE %s.' % m.group(1))
            if n == 7: out += ['', 'SANS TITRE']
            continue
        out.append(l)
    assert n == 20
    open(sys.argv[3], 'w', encoding='utf8').write('\n'.join(out) + '\nFIN\n')
else:
    C = json.load(open(sys.argv[2]))
    ids = [roman(k) for k in range(1, 21)]
    assert [c['n'] for c in C] == ids, [c['n'] for c in C]
    for c in C:
        c['head'] = ''
        c['paras'] = [etoiles(p) for p in c['paras']]
        for p in c['paras']: assert not re.search(r'[_\[\]]|Gutenberg|SANS TITRE', p) and p.count('*') % 2 == 0, (c['n'], p[:80])
    json.dump(C, open(sys.argv[3], 'w'), ensure_ascii=False, indent=0)
