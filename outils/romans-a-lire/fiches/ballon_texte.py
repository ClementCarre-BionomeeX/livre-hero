# ballon_texte.py ch.json sortie.json : retouches de « Cinq semaines en ballon » après elg.py (édition illustrée
# d'Ebooks libres et gratuits). Les gravures et leurs légendes (« [FIGURE] … ») sont retirées. Chaque chapitre s'ouvre
# sur le sommaire de Verne (« La fin d'un discours… — Présentation… ») : il passe en italique. « — , » devient « —, ».
import json, sys
C = json.load(open(sys.argv[1], encoding='utf8')); f = 0
for c in C:
    ps = []
    for p in c['paras']:
        if p.startswith('[FIGURE]'): f += 1; continue
        ps.append(p.replace(' — , ', ' —, '))
    assert ' — ' in ps[0] and len(ps[0]) < 600, (c['n'], ps[0][:80])
    ps[0] = '*' + ps[0].replace('*', '').strip() + '*'
    c['paras'] = ps
    assert not any('[FIGURE]' in p for p in ps)
json.dump(C, open(sys.argv[2], 'w', encoding='utf8'), ensure_ascii=False, indent=0)
print(f, 'gravures retirées')
