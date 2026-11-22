# grant_texte.py c1.json c2.json c3.json sortie.json : « Les Enfants du capitaine Grant » (Gutenberg 14163, miroir FR)
# après gut.py, une partie par fichier (la numérotation des chapitres repart à I dans chaque partie). Les ids
# deviennent « I1 »… « III22 » (partie + numéro), le titre de Verne perd ses soulignés et les paragraphes vides partent.
import json, re, sys
ROM = {r: i + 1 for i, r in enumerate('I II III IV V VI VII VIII IX X XI XII XIII XIV XV XVI XVII XVIII XIX XX XXI XXII XXIII XXIV XXV XXVI'.split())}
out = []
for k, f in enumerate(sys.argv[1:-1]):
    for c in json.load(open(f, encoding='utf8')):
        c['n'] = ('I', 'II', 'III')[k] + str(ROM[c['n']])
        c['head'] = c['head'].strip('_* ')
        c['paras'] = [p for p in c['paras'] if p.strip() and p.strip() != 'FIN' and not p.startswith('End of Project Gutenberg')]
        assert not any('[Note' in p or 'Gutenberg' in p for p in c['paras']), c['n']
        out.append(c)
assert len(out) == 70, len(out)
json.dump(out, open(sys.argv[-1], 'w', encoding='utf8'), ensure_ascii=False, indent=0)
print(len(out), 'chapitres', sum(len(p.split()) for c in out for p in c['paras']), 'mots')
