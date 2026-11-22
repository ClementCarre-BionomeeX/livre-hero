# jaune_texte.py chapitres.json : retouches du « Mystère de la chambre jaune » après gut.py (Gutenberg 13765).
# Les deux plans dessinés par Rouletabille (chapitres VI et XIV) ne sont pas reproduits : on le dit, et leur légende suit.
# Les titres de V et XI tiennent sur deux lignes : leur fin, prise pour un paragraphe, rejoint le titre.
import json, sys
P = sys.argv[1]; chs = json.load(open(P, encoding='utf8'))
for c in chs:
    if c['n'] in ('V', 'XI'):
        c['head'] = c['head'] + ' ' + c['paras'].pop(0).rstrip('.')
NOTE = "*(Le plan n'est pas reproduit ici ; sa légende, qui suit, en donne chaque endroit.)*"
n = 0
for c in chs:
    for i, p in enumerate(c['paras']):
        if p == '[Illustration]': c['paras'][i] = NOTE; n += 1
assert n == 2, n
for c in chs:
    for p in c['paras']: assert '[' not in p and '_' not in p and '--' not in p, (c['n'], p[:80])
json.dump(chs, open(P, 'w', encoding='utf8'), ensure_ascii=False, indent=0)
print('ok', n)
