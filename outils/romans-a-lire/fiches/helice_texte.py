# helice_texte.py pre source.txt dossier/, puis gut.py dossier/p1.txt c1.json et gut.py dossier/p2.txt c2.json, puis
# helice_texte.py post c1.json c2.json sortie.json : retouches de « L'Île à hélice » (Gutenberg 17798, saisie d'Ebooks
# libres et gratuits).
# Avant gut.py : le livre a deux parties, dont les chapitres recommencent à I ; chacune va dans son fichier, de son
# titre à « FIN DE LA … PARTIE ». Les têtes « IV -- Titre » sont coupées en deux lignes (numéro, puis titre) pour gut.py.
# Les six notes de Verne, rangées en fin de livre (« [1] texte »), vont à leur appel, entre parenthèses en italique.
# Après gut.py : les chapitres prennent les ids I1…I14 et II1…II14 ; le « A » sans accent en tête de phrase redevient
# « À » ; les espaces mal placés autour de l'italique en sortent (même découpe que drapeau_texte.py).
import json, os, re, sys
ROM = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV"]
FIX = [('JemTankerdon', 'Jem Tankerdon'), ('Gand et Benardel', 'Gand et Bernardel'), ('pour-leur', 'pour leur'), ('Erro-mango', 'Erromango'),
       ('les Nouvelle-Hébrides', 'les Nouvelles-Hébrides'), ('Taio-Haë', 'Taio-Haé'), ('Taïo-Haé', 'Taio-Haé'), ('sensiblement ci vers', 'sensiblement vers'),
       ('à Papaeté', 'à Papeeté')]
if sys.argv[1] == 'pre':
    s = open(sys.argv[2], encoding='utf8').read().replace('\r', '')
    k = s.index('\nFIN DE LA SECONDE ET DERNIÈRE PARTIE'); e = s.index('End of the Project Gutenberg')
    notes = {m.group(1): re.sub(r'\s+', ' ', m.group(2)).strip().rstrip('.') for m in re.finditer(r'^\[(\d)\] (.*?)(?=^\[\d\]|\Z)', s[k:e].split('\n', 2)[2].strip(), re.S | re.M)}
    assert sorted(notes) == ['1', '2', '3', '4', '5', '6'], notes
    s = s[:k + 1].replace('_-- _', '-- ')
    for n, t in notes.items():
        assert s.count('[' + n + ']') == 1, n
        s = s.replace('[' + n + ']', ' (_Note : ' + t + '._)')
    s = re.sub(r'^([IVX]+) -- (.+)$', r'\1\n\2', s, flags=re.M)
    a = s.index('\n\n\n\nPREMIÈRE PARTIE\n') + 4
    b = s.index('\nFIN DE LA PREMIÈRE PARTIE')
    c = s.index('\nSECONDE PARTIE\n', b)
    open(os.path.join(sys.argv[3], 'p1.txt'), 'w', encoding='utf8').write('\n\n' + s[a:b].split('\n', 1)[1] + '\n')
    open(os.path.join(sys.argv[3], 'p2.txt'), 'w', encoding='utf8').write('\n\n' + s[c + 16:] + '\n')
    print(len(notes), 'notes'); sys.exit()
C = []
for part, f in (('I', sys.argv[2]), ('II', sys.argv[3])):
    cs = json.load(open(f, encoding='utf8'))
    assert [c['n'] for c in cs] == ROM, [c['n'] for c in cs]
    for c in cs:
        c['n'] = part + str(ROM.index(c['n']) + 1); C.append(c)
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
assert len(C) == 28
json.dump(C, open(sys.argv[4], 'w', encoding='utf8'), ensure_ascii=False, indent=0)
print(len(C), 'chapitres')
