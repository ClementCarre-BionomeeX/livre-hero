# fantome_texte.py chapitres.json : retouches du « Fantôme de l'Opéra » après gut.py (Gutenberg 62215).
# Le titre de l'avant-propos, en capitales, est pris pour un paragraphe : il est retiré (la fiche donne les titres).
# La ligne de fin du projet Gutenberg, restée dans l'épilogue, est retirée. Les lignes de points qui coupent certaines scènes deviennent « * * * ».
import json, sys
P = sys.argv[1]; chs = json.load(open(P, encoding='utf8'))
assert chs[0]['n'] == 'P' and chs[0]['paras'][0].startswith("OÙ L'AUTEUR"); chs[0]['paras'].pop(0)
assert chs[-1]['n'] == 'E' and chs[-1]['paras'][-1].startswith('End of the Project Gutenberg'); chs[-1]['paras'].pop()
n = 0
for c in chs:
    for i, p in enumerate(c['paras']):
        if p.replace('…', '').replace('.', '').strip() == '': c['paras'][i] = '* * *'; n += 1
assert n == 5, n
for c in chs:
    for p in c['paras']: assert '[' not in p and ']' not in p and '_' not in p and '--' not in p and 'Gutenberg' not in p, (c['n'], p[:80])
json.dump(chs, open(P, 'w', encoding='utf8'), ensure_ascii=False, indent=0)
print('ok', n)
