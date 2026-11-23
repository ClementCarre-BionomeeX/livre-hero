# tulipe_texte.py pre source.txt sortie.txt | post ch.json sortie.json : retouches de « La Tulipe noire » (Gutenberg
# n° 26504, miroir orkeilius/gutenberg_fr_mirror, texte complet ; le n° 1910 est abrégé).
# pre : la table du début (entre « /* » et « */ ») part ; la seule note, « [1] Mynheer: monsieur », passe au format
# « [Note 1: …] » juste après le paragraphe qui porte son appel. post : fin des titres XXIX et XXX ôtée du texte ; contrôles (33 chapitres, plus de crochets ni de soulignés).
import json, re, sys
def pre(a, b):
    t = open(a, encoding='utf8').read().replace('\r', '')
    t = t[t.index('\n*/\n') + 4:t.index('\n[1] Mynheer: monsieur')]
    P = t.split('\n\n'); k = next(i for i, p in enumerate(P) if '[1]' in p)
    P.insert(k + 1, '[Note 1: Mynheer : monsieur, en hollandais.]')
    open(b, 'w', encoding='utf8').write('\n\n'.join(P))
def post(a, b):
    C = json.load(open(a, encoding='utf8'))
    assert len(C) == 33, len(C)
    # les titres des chapitres XXIX et XXX tiennent sur deux lignes : leur fin est restée en tête du texte
    assert C[28]['paras'][0] == 'Gryphus' and C[29]['paras'][0] == 'van Baërle'
    C[28]['paras'].pop(0); C[29]['paras'].pop(0)
    for c in C:
        for p in c['paras']: assert not re.search(r'[\[\]_]|Gutenberg', p), p[:80]
    json.dump(C, open(b, 'w', encoding='utf8'), ensure_ascii=False, indent=0)
(pre if sys.argv[1] == 'pre' else post)(sys.argv[2], sys.argv[3])
