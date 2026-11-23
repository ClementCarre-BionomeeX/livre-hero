# velours_texte.py pre source.txt sortie.txt | post ch.json sortie.json : retouches de « La Femme au collier de velours »
# (Gutenberg n° 18003, miroir orkeilius/gutenberg_fr_mirror, texte établi par ebooksgratuits.com).
# pre : on garde le texte depuis le premier « CHAPITRE I. » qui suit la table, jusqu'à la mention de fin de Gutenberg.
# post : ids I à XVII ; titres vides (la fiche les écrit) ; contrôles.
import json, re, sys
def roman(n):
    out = ''
    for v, r in ((100, 'C'), (90, 'XC'), (50, 'L'), (40, 'XL'), (10, 'X'), (9, 'IX'), (5, 'V'), (4, 'IV'), (1, 'I')):
        while n >= v: out += r; n -= v
    return out
def etoiles(par):
    parts = par.split('*')
    if len(parts) % 2 == 0: return par
    for k in range(1, len(parts), 2):
        if parts[k].endswith(' '): parts[k] = parts[k].rstrip(' '); parts[k + 1] = ' ' + parts[k + 1].lstrip(' ')
        if parts[k].startswith(' '): parts[k] = parts[k].lstrip(' '); parts[k - 1] = parts[k - 1].rstrip(' ') + ' '
    return '*'.join(parts)
if sys.argv[1] == 'pre':
    t = open(sys.argv[2], encoding='utf8').read().replace('\r', '')
    i = t.index('\nCHAPITRE I.\n')  # la table écrit « CHAPITRE I. L'arsenal. » sur une seule ligne
    j = t.index("End of Project Gutenberg's")
    open(sys.argv[3], 'w', encoding='utf8').write(t[i:j].rstrip() + '\n\nFIN\n')
else:
    C = json.load(open(sys.argv[2]))
    assert [c['n'] for c in C] == [roman(k) for k in range(1, 18)], [c['n'] for c in C]
    for c in C:
        c['head'] = ''
        c['paras'] = [etoiles(p) for p in c['paras']]
        for p in c['paras']: assert not re.search(r'[_\[\]]|Gutenberg', p) and p.count('*') % 2 == 0, (c['n'], p[:80])
    json.dump(C, open(sys.argv[3], 'w'), ensure_ascii=False, indent=0)
