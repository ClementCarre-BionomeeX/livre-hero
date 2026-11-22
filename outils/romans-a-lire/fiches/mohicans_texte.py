# mohicans_texte.py chapitres.json : retouches du « Dernier des Mohicans » après elg.py (ELG, traduction Defauconpret).
# La tête du chapitre XIX porte par erreur « IXX ». Presque chaque chapitre s'ouvre sur une épigraphe (un vers de
# Shakespeare, Gray, Pope…) suivie de son auteur : l'épigraphe passe en italique et l'auteur après un tiret.
# Le chapitre VIII a une épigraphe sans auteur.
import json, re, sys
P = sys.argv[1]; chs = json.load(open(P, encoding='utf8'))
assert len(chs) == 33 and chs[18]['n'] == 'XIX'; chs[18]['head'] = ''
AUT = re.compile(r"^(Shakespeare|Burns|Gray|La Mort d'Agrippine|PARNELL|Lord Biron|Sir Walter Scott|Pope|L'\*Homère\*|Hallege)")
def ital(p): return '*' + p.replace('*', '').strip() + '*'
n = 0
for c in chs:
    ps = c['paras']
    k = next((i for i in range(4) if len(ps[i]) < 90 and AUT.match(ps[i])), None)
    if c['n'] == 'VIII': k = 0; ps[0] = ital(ps[0]); n += 1; continue
    if k is None: continue
    for i in range(k): ps[i] = ital(ps[i])
    ps[k] = '— ' + ps[k]; n += 1
assert n == 29, n
for c in chs:
    for p in c['paras']: assert '[' not in p and '_' not in p and '--' not in p, (c['n'], p[:80])
json.dump(chs, open(P, 'w', encoding='utf8'), ensure_ascii=False, indent=0)
print('ok', n)
