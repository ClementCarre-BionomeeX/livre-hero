# maisonrouge_texte.py pre source.txt sortie.txt | post ch.json sortie.json : retouches du « Chevalier de Maison-Rouge »
# (Gutenberg n° 18006, miroir orkeilius/gutenberg_fr_mirror, édition ebooksgratuits).
# pre : les vers (lignes en retrait) d'un même couplet passent sur une ligne, coupés par « ¶ », pour que gut.py ne les
# fonde pas en prose ; un tiret de dialogue pris dans l'italique (« _--_ », « _--Vieille habitude._ », « _P.-S.--_ »)
# sort de l'italique.
# post : « ¶ » redevient un retour à la ligne (un vers par ligne) ; « oe » des titres de la table → « œ » ;
# contrôles (56 chapitres, plus de soulignés ni de « ¶ »).
import json, re, sys
if sys.argv[1] == 'pre':
    L = open(sys.argv[2], encoding='utf8').read().replace('\r', '').split('\n')
    out = []; prev_verse = False
    for l in L:
        verse = l.startswith('    ') and l.strip() != ''
        l = l.strip() if verse else l
        l = l.replace('_--_', '--').replace('_P.-S.--_', '_P.-S._--')
        l = re.sub(r'^_--(?=\S)', '--_', l)
        if verse and prev_verse: out[-1] += ' ¶ ' + l
        else: out.append(l)
        prev_verse = verse
    open(sys.argv[3], 'w', encoding='utf8').write('\n'.join(out))
else:
    C = json.load(open(sys.argv[2]))
    assert len(C) == 56, len(C)
    for c in C:
        c['head'] = c['head'].rstrip('.').replace('Moeurs', 'Mœurs').replace('oeillet', 'œillet').replace('Oeillet', 'Œillet')
        c['paras'] = [p.replace(' ¶ ', '\n') for p in c['paras']]
        for p in c['paras']: assert not re.search(r'[_¶\[\]]|Gutenberg', p), (c['n'], p[:80])
    json.dump(C, open(sys.argv[3], 'w'), ensure_ascii=False, indent=0)
