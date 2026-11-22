# chinois_texte.py pre source.txt dossier/, puis gut.py dossier/p1.txt c1.json, puis chinois_texte.py post c1.json sortie.json :
# retouches des « Tribulations d'un Chinois en Chine » (Gutenberg 45058, d'après l'édition Hetzel illustrée).
# Avant gut.py : on garde le texte de « --CHAPITRE I-- » à « FIN DES TRIBULATIONS » (la liste des corrections de la
# saisie, en fin de fichier, tombe) ; les légendes « [Illustration: …] » tombent ; les têtes « --CHAPITRE I-- » perdent
# leurs tirets ; les notes de Verne, écrites en retrait sous le paragraphe (« [1] texte »), deviennent « [Note 1: texte] »,
# que gut.py met à leur appel. Les blocs en retrait à lignes courtes (chansons, affiche) gardent leurs retours à la
# ligne : « ¦ » en pre, « \n » en post.
# Après gut.py : le « A » sans accent en tête de phrase redevient « À », et les fautes de la saisie relevées à la
# relecture sont corrigées (liste FIX).
import json, os, re, sys
ROM = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX", "XXI", "XXII"]
FIX = [('Elément', 'Élément'), ('Etait-il', 'Était-il'), ('Eternel', 'Éternel')]
if sys.argv[1] == 'pre':
    s = open(sys.argv[2], encoding='utf8').read().replace('\r', '')
    s = s[s.index('\n--CHAPITRE I--\n'):s.index('\nFIN DES TRIBULATIONS')] + '\n'
    s = re.sub(r'\n *\[Illustration[^\]]*\]\n', '\n', s, flags=re.S)
    assert 'Illustration' not in s
    s = re.sub(r'^--(CHAPITRE [IVXL]+)--$', r'\1', s, flags=re.M)
    blocks = s.split('\n\n'); out = []; n = 0
    for b in blocks:
        m = re.match(r'^ {2}\[(\d+)\] (.*)$', b, flags=re.S)
        if m:
            n += 1; out.append('[Note ' + m.group(1) + ': ' + re.sub(r'\s+', ' ', m.group(2)).strip() + ']'); continue
        L = b.strip('\n').split('\n')
        if len(L) > 1 and all(l.startswith('  ') and 0 < len(l.strip()) < 50 for l in L): b = '¦\n'.join(L)
        out.append(b)
    s = '\n\n'.join(out)
    open(os.path.join(sys.argv[3], 'p1.txt'), 'w', encoding='utf8').write('\n\n' + s)
    print(n, 'notes'); sys.exit()
C = json.load(open(sys.argv[2], encoding='utf8'))
assert [c['n'] for c in C] == ROM[:len(C)], [c['n'] for c in C]
for c in C:
    out = []
    for p in c['paras']:
        p = p.replace('¦ ', '\n').replace('¦', '\n')
        p = re.sub(r'(^|\n|[.!?…»] |— |« )A (?=[a-zéèêàù])', r'\1À ', p)
        p = re.sub(r'(^|\n|— |« )A (?=[A-ZÉ])', r'\1À ', p)
        for a, b in FIX: p = p.replace(a, b)
        assert '[' not in p and ']' not in p and '_' not in p and 'Gutenberg' not in p, (c['n'], p[:80])
        out.append(p)
    c['paras'] = out
assert all(a not in json.dumps(C, ensure_ascii=False) for a, b in FIX)
json.dump(C, open(sys.argv[3], 'w', encoding='utf8'), ensure_ascii=False, indent=0)
print(len(C), 'chapitres')
