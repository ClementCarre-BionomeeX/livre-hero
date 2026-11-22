# begum_texte.py pre source.txt sortie.txt, puis gut.py sortie.txt ch.json, puis begum_texte.py post ch.json ch2.json :
# retouches des « Cinq Cents Millions de la Bégum » (Gutenberg 4968). La table des matières du début, qui tient lieu de
# tête au chapitre I, devient « I » et son titre ; les têtes « II     DEUX COPAINS » (numéro et titre sur une ligne) sont
# coupées en deux lignes comme gut.py les attend. Les deux notes de l'auteur, entre crochets dans le texte, passent entre
# parenthèses. Après gut.py : « A » sans accent en tête de phrase redevient « À », les capitales
# É et Ê perdues par la saisie reviennent, et
# les fautes de la saisie relevées à la relecture sont corrigées (liste FIX).
import json, re, sys
FIX = [('« MR. SHARP, *solicitor*, « 93, *Southampton row* « LONDON. »', '« MR. SHARP, *solicitor*,\n« 93, *Southampton row*,\n« LONDON. »'),
       ('« Ton père affectionné, « Fr. Sarrasin « D.M.P. »', '« Ton père affectionné,\n« Fr. Sarrasin,\n« D.M.P. »'), ('foyers Fl,', 'foyers F1,'), ("collègues I'accueillaient", "collègues l'accueillaient"),
       ('détails ; Jamais', 'détails ; jamais'), ('« - Eh quoi', '« — Eh quoi'), ('porte 0.', 'porte O.'), ('ne fat arrivée', 'ne fût arrivée'), ('CoalsButts', 'Coals-Butts')]
if sys.argv[1] == 'pre':
    s = open(sys.argv[2], encoding='utf8').read().replace('\r', '')
    i = s.index('TABLE DES MATIÈRES'); j = s.index('XX   - CONCLUSION\n') + len('XX   - CONCLUSION\n')
    s = s[:i] + 'I\n\nOÙ MR. SHARP FAIT SON ENTRÉE\n' + s[j:]
    s = re.sub(r'^([IVX]+) {3,}(\S.*)$', r'\1\n\n\2', s, flags=re.M)
    open(sys.argv[3], 'w', encoding='utf8').write(s); sys.exit()
C = json.load(open(sys.argv[2], encoding='utf8'))
ROM = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII",
       "XIX", "XX"]
assert [c['n'] for c in C] == ROM, [c['n'] for c in C]
for c in C:
    out = []
    for p in c['paras']:
        if p.startswith('Fin de Les Cinq Cents Millions'): continue  # la ligne de fin de la saisie
        p = re.sub(r' ?\[([^\]]+?)\.?\]', r' (*Note : \1.*)', p)  # les deux notes de Verne, dans le texte entre crochets
        p = re.sub(r'(^|\n|[.!?…»] |— |« )A (?=[a-zéèêàù])', r'\1À ', p)
        p = re.sub(r'\bE(?=claire|cole|cri[st]|lysée|norme|quip|viter|tats?\b|cho\b)', 'É', p); p = re.sub(r'\bEtes\b', 'Êtes', p); p = re.sub(r"(?<![\d])1'", "l'", p)  # capitales sans accent
        for a, b in FIX: p = p.replace(a, b)
        assert '[' not in p and ']' not in p and '_' not in p and 'Gutenberg' not in p, (c['n'], p[:80])
        out.append(p)
    c['paras'] = out
assert all(a not in json.dumps(C, ensure_ascii=False) for a, b in FIX)
json.dump(C, open(sys.argv[3], 'w', encoding='utf8'), ensure_ascii=False, indent=0)
print(len(C), 'chapitres')
