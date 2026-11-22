# flottante_texte.py pre source.txt dossier/, puis gut.py dossier/p1.txt c1.json, puis flottante_texte.py post c1.json sortie.json :
# retouches d'« Une ville flottante » (Gutenberg 17832, saisie d'Ebooks libres et gratuits).
# Avant gut.py : on part du chapitre I (la table des matières du début n'a que les numéros) ; les chapitres de Verne
# n'ont pas de titre, et gut.py prendrait la première phrase pour un titre : on glisse une ligne « SANS TITRE » après
# chaque numéro. Le programme du concert (ch. XVI), mis en colonnes avec des italiques cassées, est récrit proprement,
# une ligne par numéro (« ¦ », rendu en saut de ligne après gut.py).
# Après gut.py : le « A » sans accent en tête de phrase redevient « À », les espaces collés au bord de l'italique
# (« le* Great Eastern* ») en sortent, et les fautes de la saisie relevées à la
# relecture sont corrigées (liste FIX).
import json, os, re, sys
ROM = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX",
       "XXI", "XXII", "XXIII", "XXIV", "XXV", "XXVI", "XXVII", "XXVIII", "XXIX", "XXX", "XXXI", "XXXII", "XXXIII", "XXXIV", "XXXV",
       "XXXVI", "XXXVII", "XXXVIII", "XXXIX"]
FIX = [('Parle *Godavery*', 'Par le *Godavery*')]
PROG = ("THIS NIGHT\n\n"
        "FIRST PART¦_Ocean Time_, Mr Mac Alpine¦_Song : Beautiful isle of the sea_, Mr Ewing¦_Reading_, Mr Affleet"
        "¦_Piano solo : Chant du berger_, Mrs Alloway¦_Scotch song_, Doctor T\n\n"
        "Intermission of ten minutes\n\n"
        "PART SECOND¦_Piano solo_, Mr Paul V¦_Burlesque : Lady of Lyon_, Doctor T¦_Entertainment_, Sir James Anderson"
        "¦_Song : Happy moment_, Mr Norville¦_Song : You remember_, Mr Ewing\n\n"
        "FINALE¦_God save the Queen_\n\n")
if sys.argv[1] == 'pre':
    s = open(sys.argv[2], encoding='utf8').read().replace('\r', '')
    s = s[:s.index('End of the Project Gutenberg')]
    a = s.index('\nTHIS NIGHT\n'); b = s.index("C'était, on le voit, un concert complet")
    s = s[:a + 1] + PROG + s[b:]
    a = s.index('\n\n\n\nI\n\n\nLe 18 mars 1867')
    s = re.sub(r'^(' + '|'.join(ROM) + r')\n\n', r'\1\n\nSANS TITRE\n\n', s[a:], flags=re.M)
    assert s.count('SANS TITRE') == 39, s.count('SANS TITRE')
    open(os.path.join(sys.argv[3], 'p1.txt'), 'w', encoding='utf8').write(s)
    print('ok'); sys.exit()
C = json.load(open(sys.argv[2], encoding='utf8'))
assert [c['n'] for c in C] == ROM, [c['n'] for c in C]
for c in C:
    out = []
    for p in c['paras']:
        p = re.sub(r'(^|\n|[.!?…»] |— |« )A (?=[a-zéèêàù])', r'\1À ', p)
        p = re.sub(r'(^|\n|— |« )A (?=[A-ZÉ])', r'\1À ', p)
        assert p.count('*') % 2 == 0, (c['n'], p[:80])
        q = p.split('*')  # les espaces (et « ? » « ! » « : ») collés au bord de l'italique en sortent : « le* Great Eastern* » → « le *Great Eastern* »
        for i in range(1, len(q), 2):
            m = re.match(r'^(\s*)(.*?)(\s*[?!:;]?)$', q[i], re.S)
            q[i - 1] += m.group(1); q[i] = m.group(2); q[i + 1] = m.group(3) + q[i + 1]
        p = re.sub(r'(?<=\S)  +', ' ', '*'.join(q))
        p = p.replace('¦', '\n')
        for a, b in FIX: p = p.replace(a, b)
        assert '[' not in p and ']' not in p and '_' not in p and 'Gutenberg' not in p and p.count('*') % 2 == 0, (c['n'], p[:80])
        out.append(p)
    c['paras'] = out
assert all(a not in json.dumps(C, ensure_ascii=False) for a, b in FIX)
json.dump(C, open(sys.argv[3], 'w', encoding='utf8'), ensure_ascii=False, indent=0)
print(len(C), 'chapitres')
