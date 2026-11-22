# archipel_texte.py pre source.txt dossier/, puis gut.py dossier/p1.txt c1.json, puis archipel_texte.py post c1.json
# sortie.json : retouches de « L'Archipel en feu » (Gutenberg 17660, saisie d'Ebooks libres et gratuits).
# Avant gut.py : la table des matières du début est sautée par gut.py ; les trois notes, rangées en fin de livre
# (« 1         texte »), vont à leur appel « [n] », entre parenthèses en italique. La note 1 date de « 1661 » les séismes
# de Vostitsa et de Thèbes : ce sont ceux de 1861 et de 1853.
# Après gut.py : le « A » sans accent en tête de phrase redevient « À », et les fautes de la saisie relevées à la
# relecture sont corrigées (liste FIX).
import json, os, re, sys
FIX = [('Elizondo', 'Elizundo'), ('Hadfjine', 'Hadjine'), ('Frederik Adam', 'Frédérik Adam'), ('Kari-Ali', 'Kara-Ali'),
       ('Chaidari', 'Chaïdari'), ('le pirat qui', 'le pirate qui')]
if sys.argv[1] == 'pre':
    s = open(sys.argv[2], encoding='utf8').read().replace('\r', '')
    k = s.index('\n1         Depuis'); e = s.index('End of the Project Gutenberg'); notes = {}
    for m in re.finditer(r'^(\d)\s{5,}(.*?)(?=^\d\s{5,}|\Z)', s[k:e].strip('\n') + '\n', flags=re.M | re.S):
        notes[m.group(1)] = re.sub(r'\s+', ' ', m.group(2)).strip().rstrip('.')
    assert len(notes) == 3, notes
    notes['1'] = notes['1'].replace('Vostitsa en 1661, Thèbes en 1661', 'Vostitsa en 1861, Thèbes en 1853')
    assert '1861' in notes['1']
    s = s[:k] + '\n'
    for n, t in notes.items():
        assert s.count('[' + n + ']') == 1, n
        s = s.replace('[' + n + ']', ' (_Note : ' + t + '._)')
    a = s.index('\n\n\n\nI\n\nNavire au large\n')
    open(os.path.join(sys.argv[3], 'p1.txt'), 'w', encoding='utf8').write(s[a:])
    print(len(notes), 'notes'); sys.exit()
C = json.load(open(sys.argv[2], encoding='utf8'))
ROM = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV"]
assert [c['n'] for c in C] == ROM, [c['n'] for c in C]
for c in C:
    out = []
    for p in c['paras']:
        p = re.sub(r'(^|\n|[.!?…»] |— |« )A (?=[a-zéèêàù])', r'\1À ', p)
        for a, b in FIX: p = p.replace(a, b)
        assert '[' not in p and ']' not in p and '_' not in p and 'Gutenberg' not in p, (c['n'], p[:80])
        out.append(p)
    c['paras'] = out
json.dump(C, open(sys.argv[3], 'w', encoding='utf8'), ensure_ascii=False, indent=0)
print(len(C), 'chapitres')
