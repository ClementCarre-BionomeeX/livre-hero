# drapeau_texte.py pre source.txt dossier/, puis gut.py dossier/p1.txt c1.json, puis drapeau_texte.py post c1.json sortie.json :
# retouches de « Face au drapeau » (Gutenberg 16826, saisie d'Ebooks libres et gratuits).
# Avant gut.py : on part du chapitre I (après la table) ; les trois vers de la romance que fredonne Serkö (ch. XI)
# gardent leurs retours à la ligne (« ¦ », rendu en saut de ligne après gut.py).
# Après gut.py : le « A » sans accent en tête de phrase redevient « À » ; les espaces mal placés autour de l'italique
# (« le* Sword* », « goélette* Ebba *ne ») sortent de l'italique.
import json, os, re, sys
ROM = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII"]
FIX = [("FIN DES NOTES DE L'INGÉNIEUR SIMON HART", "*Fin des notes de l'ingénieur Simon Hart.*")]
if sys.argv[1] == 'pre':
    s = open(sys.argv[2], encoding='utf8').read().replace('\r', '')
    a = s.index('\n\n\nI\nHealthful-House\n') + 3
    e = s.index('End of the Project Gutenberg')
    s = s[a:e].replace('_-- _', '-- ')
    v = '    ... ces lieux charmants\n    Où mon âme ravie\n    Aimait à contempler Sylvie...\n'
    assert s.count(v) == 1
    s = s.replace(v, '... ces lieux charmants¦Où mon âme ravie¦Aimait à contempler Sylvie...\n')
    assert '[' not in s, s[s.index('['):s.index('[') + 80]
    open(os.path.join(sys.argv[3], 'p1.txt'), 'w', encoding='utf8').write(s)
    print('ok'); sys.exit()
C = json.load(open(sys.argv[2], encoding='utf8'))
assert [c['n'] for c in C] == ROM, [c['n'] for c in C]
for c in C:
    out = []
    for p in c['paras']:
        p = p.replace('¦', '\n')
        p = re.sub(r'(^|\n|[.!?…»] |— |« )A (?=[a-zéèêàù])', r'\1À ', p)
        p = re.sub(r'(^|\n|— |« )A (?=[A-ZÉ])', r'\1À ', p)
        assert p.count('*') % 2 == 0, (c['n'], p[:80])
        q = p.split('*')  # les espaces (et « ? » « ! » « : ») collés au bord de l'italique en sortent : « le* Sword ?* » → « le *Sword* ? »
        for i in range(1, len(q), 2):
            m = re.match(r'^(\s*)(.*?)(\s*[?!:;]?)$', q[i], re.S)
            q[i - 1] += m.group(1); q[i] = m.group(2); q[i + 1] = m.group(3) + q[i + 1]
        p = re.sub(r'(?<=\S)  +', ' ', q[0] + ''.join(('*' if i % 2 else '*') + x for i, x in enumerate(q[1:], 1)))
        for a, b in FIX: p = p.replace(a, b)
        assert '[' not in p and ']' not in p and '_' not in p and 'Gutenberg' not in p, (c['n'], p[:80])
        out.append(p)
    c['paras'] = out
json.dump(C, open(sys.argv[3], 'w', encoding='utf8'), ensure_ascii=False, indent=0)
print(len(C), 'chapitres')
