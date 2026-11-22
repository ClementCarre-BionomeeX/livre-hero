# billet_texte.py pre source.txt dossier/, puis gut.py dossier/p1.txt c1.json, puis billet_texte.py post c1.json sortie.json :
# retouches d'« Un billet de loterie » (Gutenberg 15203, saisie d'Ebooks libres et gratuits).
# Avant gut.py : on part du chapitre I (la table des matières du début n'a que les numéros) ; les chapitres de Verne
# n'ont pas de titre, et gut.py prendrait la première réplique pour un titre : on glisse une ligne « SANS TITRE » après
# chaque numéro. L'unique note, rangée en fin de livre (« [1] texte »), va à son appel, entre parenthèses en italique.
# Après gut.py : le « A » sans accent en tête de phrase redevient « À », et les fautes de la saisie relevées à la
# relecture sont corrigées (liste FIX).
import json, os, re, sys
ROM = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX"]
FIX = [('Hammersfest', 'Hammerfest'), ('Hemlboë', 'Helmboë'), ('Joëlle vit bien', 'Hulda vit bien'), ("l'Orscarslot", "l'Oscarslot"),
       ('domestique Pink', 'domestique Fink'), ('vieux Pink', 'vieux Fink')]
if sys.argv[1] == 'pre':
    s = open(sys.argv[2], encoding='utf8').read().replace('\r', '')
    k = s.index('\n     [1] Environ cent mille francs.'); e = s.index('End of the Project Gutenberg')
    note = re.sub(r'\s+', ' ', s[k:e]).strip()[4:].strip().rstrip('.')
    s = s[:k].replace('_-- _', '-- ') + '\n'
    assert s.count('[1]') == 1
    s = s.replace('[1]', ' (_Note : ' + note + '._)')
    a = s.index('\n\n\n\nI\n\n-- Quelle heure')
    s = re.sub(r'^(' + '|'.join(ROM) + r')\n\n', r'\1\n\nSANS TITRE\n\n', s[a:], flags=re.M)
    assert s.count('SANS TITRE') == 20
    open(os.path.join(sys.argv[3], 'p1.txt'), 'w', encoding='utf8').write(s)
    print('1 note'); sys.exit()
C = json.load(open(sys.argv[2], encoding='utf8'))
assert [c['n'] for c in C] == ROM, [c['n'] for c in C]
for c in C:
    out = []
    for p in c['paras']:
        p = re.sub(r'(^|\n|[.!?…»] |— |« )A (?=[a-zéèêàù])', r'\1À ', p)
        p = re.sub(r'(^|\n|— |« )A (?=[A-ZÉ])', r'\1À ', p)
        p = re.sub(r'\*([^*\n]*?)\s+\*(?=\S)', r'*\1* ', p)  # « _Viken _et » : l'espace sort de l'italique
        for a, b in FIX: p = p.replace(a, b)
        assert '[' not in p and ']' not in p and '_' not in p and 'Gutenberg' not in p, (c['n'], p[:80])
        out.append(p)
    c['paras'] = out
assert all(a not in json.dumps(C, ensure_ascii=False) for a, b in FIX)
json.dump(C, open(sys.argv[3], 'w', encoding='utf8'), ensure_ascii=False, indent=0)
print(len(C), 'chapitres')
