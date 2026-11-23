# fracasse_texte.py pre source.txt sortie.txt | post ch.json sortie.json : retouches du « Capitaine Fracasse » (Gutenberg
# n° 60746, miroir orkeilius/gutenberg_fr_mirror, édition Charpentier de 1913 illustrée par Gustave Doré).
# pre : le catalogue de l'éditeur et la page de titre partent ; les légendes des gravures « [Illustration: …] » aussi ;
# la table finale est coupée. post : « A » et « O » majuscules isolés deviennent « À » et « Ô » ; contrôles (22 chapitres, plus de crochets ni de soulignés).
import json, re, sys
def pre(a, b):
    t = open(a, encoding='utf8').read().replace('\r', '')
    t = re.sub(r'\[Illustration:[^\]]*\]', '', t)
    i = t.index('\nI.\n'); j = t.index('\nTABLE DES CHAPITRES\n')
    open(b, 'w', encoding='utf8').write(t[i:j])
def post(a, b):
    C = json.load(open(a, encoding='utf8'))
    assert len(C) == 22, len(C)
    # le titre du chapitre IX tient sur deux lignes, et l'épilogue porte son nom en tête du chapitre XXII
    assert C[8]['paras'][0] == 'ET AUTRES AVENTURES.' and C[21]['paras'][0] == 'ÉPILOGUE.'
    C[8]['paras'].pop(0); C[21]['paras'].pop(0)
    if C[-1]['paras'] and C[-1]['paras'][-1].rstrip('.') == 'FIN': C[-1]['paras'].pop()
    for c in C:
        c['paras'] = [re.sub(r"(?<![\w'’])O ", 'Ô ', re.sub(r"(?<![\w'’])A (?=[\w'’])", 'À ', p)) for p in c['paras']]
        for p in c['paras']: assert not re.search(r'[\[\]_]|Gutenberg|Illustration', p), p[:80]
    json.dump(C, open(b, 'w', encoding='utf8'), ensure_ascii=False, indent=0)
(pre if sys.argv[1] == 'pre' else post)(sys.argv[2], sys.argv[3])
