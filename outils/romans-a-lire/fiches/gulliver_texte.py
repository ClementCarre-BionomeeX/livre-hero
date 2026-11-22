# gulliver_texte.py chapitres.json : retouches des « Voyages de Gulliver » après elg.py (ELG, traduction de l'abbé
# Desfontaines, 1727, revue au XIXe siècle). Les images sont retirées. Les notes sont du traducteur, pas de Swift :
# « Note de l'auteur » devient « Note du traducteur ». Les voyages II à IV ouvrent chaque chapitre sur un sommaire
# (« L'auteur entreprend… ») : il passe tout entier en italique (trois d'entre eux ne l'étaient pas). Quelques coquilles
# de l'édition sont corrigées (FIX).
import json, re, sys
P = sys.argv[1]; chs = json.load(open(P, encoding='utf8'))
assert len(chs) == 36 and [c['n'] for c in chs][:2] == ['I1', 'I2']
FIX = [('Guill Robinson', 'Guillaume Robinson'), ('Lorbrulgrudou l', 'Lorbrulgrud, ou l'), ('finget.«', 'finget. «'),
       ('Gloubbdoubdrid', 'Gloubbdoubdrib'), ('M. Bâtes', 'M. Bates'), ('Melle Marie', 'Mlle Marie'), ('gens durent remarqué', 'gens eurent remarqué'),
       ("j'eus uni mon discours", "j'eus fini mon discours"), ('Flestrin,contre', 'Flestrin, contre'), ('seraiscoupable', 'serais coupable'), ('vert,qui', 'vert, qui'), ('deux jeunes, chevaux', 'deux jeunes chevaux'), ('Redriff, pour, m\'y livrer, à', 'Redriff, pour m\'y livrer à')]  # coquilles de l'édition
def ital(p): return '*' + p.replace('*', '').strip() + '*'
n = 0
for c in chs:
    c['paras'] = [p for p in c['paras'] if p != '[FIGURE]']
    ps = c['paras']
    for i, p in enumerate(ps):
        p = p.replace("Note de l'auteur", 'Note du traducteur').replace(' (Note du traducteur.).*)', '.*)')
        p = p.replace('wihgs', 'whigs').replace('traducteur : horace', 'traducteur : Horace')
        for a, b in FIX: p = p.replace(a, b)
        ps[i] = p
    if c['n'] in ('III3', 'III9', 'IV8'): ps[0] = ital(ps[0]); n += 1
assert n == 3
for c in chs:
    for p in c['paras']: assert '[' not in p and '_' not in p and '--' not in p and 'auteur :' not in p, (c['n'], p[:80])
json.dump(chs, open(P, 'w', encoding='utf8'), ensure_ascii=False, indent=0)
print('ok', sum(len(c['paras']) for c in chs), 'paragraphes')
