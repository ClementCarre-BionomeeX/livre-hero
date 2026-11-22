# vapeur_texte.py pre source.txt dossier/, puis gut.py dossier/p1.txt c1.json et gut.py dossier/p2.txt c2.json, puis
# vapeur_texte.py post c1.json c2.json sortie.json : retouches de « La Maison à vapeur » (Gutenberg 14810).
# Avant gut.py : le livre est coupé en ses deux parties, dont les chapitres recommencent à I ; les lignes « FIN DE LA … PARTIE »
# tombent. Les notes de Verne, rangées en fin de livre et numérotées de 1 à 7, vont à leur appel « [n] », entre
# parenthèses en italique.
# Après gut.py : les chapitres prennent les ids I1…I16 et II1…II14, le « A » sans accent en tête de phrase redevient « À »,
# et les fautes de la saisie relevées à la relecture sont corrigées (liste FIX).
import json, os, re, sys
ROM = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI"]
FIX = [('aditionnant', 'additionnant'), ('GreatTrunk', 'Great-Trunk'), ("s'écria-t il", "s'écria-t-il")]
if sys.argv[1] == 'pre':
    s = open(sys.argv[2], encoding='utf8').read().replace('\r', '')
    k = s.index('\n    [1] Une femme non titrée'); e = s.index('End of the Project Gutenberg'); notes = {}
    for m in re.finditer(r'^\s+\[(\d+)\]\s+(.*?)(?=^\s+\[\d+\]|\Z)', s[k:e], flags=re.M | re.S):
        notes[m.group(1)] = re.sub(r'\s+', ' ', m.group(2)).strip().rstrip('.')
    assert len(notes) == 7, len(notes)
    s = s[:k] + '\n'
    for n, t in notes.items():
        assert s.count('[' + n + ']') == 1, n
        s = s.replace('[' + n + ']', ' (_Note : ' + t + '._)')
    s = re.sub(r'^FIN DE LA .*PARTIE$', '', s, flags=re.M)
    a = s.index('\nPREMIERE PARTIE\n\n\nCHAPITRE I\n'); b = s.index('\nDEUXIEME PARTIE\n', a)
    open(os.path.join(sys.argv[3], 'p1.txt'), 'w', encoding='utf8').write(s[a:b].replace('PREMIERE PARTIE', ''))
    open(os.path.join(sys.argv[3], 'p2.txt'), 'w', encoding='utf8').write(s[b:].replace('DEUXIEME PARTIE', '') + '\n')
    print(len(notes), 'notes'); sys.exit()
C = []
for part, f, n in (('I', sys.argv[2], 16), ('II', sys.argv[3], 14)):
    cs = json.load(open(f, encoding='utf8'))
    assert [c['n'] for c in cs] == ROM[:n], [c['n'] for c in cs]
    for c in cs:
        c['n'] = part + str(ROM.index(c['n']) + 1); C.append(c)
for c in C:
    out = []
    for p in c['paras']:
        p = p.replace('¦ ', '\n').replace('¦', '\n')
        p = re.sub(r'(^|\n|[.!?…»] |— |« )A (?=[a-zéèêàù])', r'\1À ', p)
        for a, b in FIX: p = p.replace(a, b)
        assert '[' not in p and ']' not in p and '_' not in p and 'Gutenberg' not in p, (c['n'], p[:80])
        out.append(p)
    c['paras'] = out
assert all(a not in json.dumps(C, ensure_ascii=False) for a, b in FIX)
assert len(C) == 30
json.dump(C, open(sys.argv[4], 'w', encoding='utf8'), ensure_ascii=False, indent=0)
print(len(C), 'chapitres')
