# village_texte.py pre source.txt dossier/, puis gut.py dossier/p1.txt c1.json, puis village_texte.py post c1.json sortie.json :
# retouches du « Village aérien » (Gutenberg 16827, saisie d'Ebooks libres et gratuits).
# Avant gut.py : on s'arrête à « FIN » ; les trois notes de Verne, rangées après (« [1] texte »), vont à leur appel,
# entre parenthèses en italique ; la ligne d'étoiles qui marque un blanc au ch. XVIII tombe ; les guillemets fermants tapés à l'envers (« «vater« ») sont redressés.
# Après gut.py : le « A » sans accent en tête de phrase redevient « À » ; les espaces mal placés autour de l'italique
# en sortent (même découpe que drapeau_texte.py).
import json, os, re, sys
ROM = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII"]
FIX = [('LoMaï', 'Lo-Maï')]
if sys.argv[1] == 'pre':
    s = open(sys.argv[2], encoding='utf8').read().replace('\r', '')
    k = s.index('\nFIN\n'); e = s.index('End of the Project Gutenberg')
    notes = {m.group(1): re.sub(r'\s+', ' ', m.group(2)).strip().rstrip('.') for m in re.finditer(r'\[(\d)\] (.*?)(?=\n +\[\d\]|\Z)', s[k:e].strip(), re.S)}
    assert sorted(notes) == ['1', '2', '3'], notes
    s = s[:k + 5].replace('_-- _', '-- ')
    s = s.replace('«vater[2]«', '«vater»[2]').replace('«hommal[3]«', '«hommal»[3]')
    for n, t in notes.items():
        assert s.count('[' + n + ']') == 1, n
        s = s.replace('[' + n + ']', ' (_Note : ' + t + '._)')
    assert s.count('\n*******\n') == 1
    s = s.replace('\n*******\n', '\n')  # le blanc de section du ch. XVIII tombe
    a = s.index('\n\n\nCHAPITRE I\n_Après')
    open(os.path.join(sys.argv[3], 'p1.txt'), 'w', encoding='utf8').write(s[a:])
    print(len(notes), 'notes'); sys.exit()
C = json.load(open(sys.argv[2], encoding='utf8'))
assert [c['n'] for c in C] == ROM, [c['n'] for c in C]
for c in C:
    out = []
    for p in c['paras']:
        p = re.sub(r'(^|\n|[.!?…»] |— |« )A (?=[a-zéèêàù])', r'\1À ', p)
        p = re.sub(r'(^|\n|— |« )A (?=[A-ZÉ])', r'\1À ', p)
        assert p.count('*') % 2 == 0, (c['n'], p[:80])
        q = p.split('*')
        for i in range(1, len(q), 2):
            m = re.match(r'^(\s*)(.*?)(\s*[?!:;]?)$', q[i], re.S)
            q[i - 1] += m.group(1); q[i] = m.group(2); q[i + 1] = m.group(3) + q[i + 1]
        p = re.sub(r'(?<=\S)  +', ' ', '*'.join(q))
        for a, b in FIX: p = p.replace(a, b)
        assert '[' not in p and ']' not in p and '_' not in p and 'Gutenberg' not in p, (c['n'], p[:80])
        out.append(p)
    c['paras'] = out
json.dump(C, open(sys.argv[3], 'w', encoding='utf8'), ensure_ascii=False, indent=0)
print(len(C), 'chapitres')
