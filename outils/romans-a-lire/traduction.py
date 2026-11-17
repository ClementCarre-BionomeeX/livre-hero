# traduction.py dossier chapitres.json : traduction faite pour la bibliothèque (« Enlevé ! », 2026), un fichier par
# chapitre (01.txt, 02.txt…) : première ligne = titre du chapitre, puis paragraphes séparés d'une ligne vide.
# Un paragraphe sur plusieurs lignes (vers, lettre) garde ses lignes.
import re, json, sys, os
sys.path.insert(0, sys.argv[0].rsplit('/', 1)[0]); from typo import typo
d = sys.argv[1]; chs = []
for f in sorted(x for x in os.listdir(d) if re.match(r'^\d+\.txt$', x)):
    t = open(os.path.join(d, f), encoding='utf8').read().replace('\r', '').strip()
    blocks = re.split(r'\n\s*\n', t)
    head = blocks[0].strip()
    paras = ['\n'.join(typo(l) for l in b.strip().split('\n')) for b in blocks[1:] if b.strip()]
    chs.append({'n': 'C' + str(int(f[:-4])), 'head': head, 'paras': paras})
json.dump(chs, open(sys.argv[2], 'w', encoding='utf8'), ensure_ascii=False)
for c in chs: print(c['n'], c['head'], len(c['paras']), sum(len(p.split()) for p in c['paras']))
