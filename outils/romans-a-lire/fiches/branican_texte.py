# branican_texte.py pre source.txt dossier/, puis gut.py dossier/p1.txt c1.json et gut.py dossier/p2.txt c2.json, puis
# branican_texte.py post c1.json c2.json sortie.json : retouches de « Mistress Branican » (Gutenberg 17914, saisie d'Ebooks
# libres et gratuits).
# Avant gut.py : le livre a deux parties, dont les chapitres recommencent à I ; chacune va dans son fichier, de son
# titre à la suivante (ou à la « Bibliographie » finale). Les notes de Verne, rangées en fin de livre (« [1] texte »), vont
# à leur appel, entre parenthèses en italique ; la sixième (« Environ 4000 kilomètres », sur « Ce groupe », qui ne mesure
# que trente milles) est une erreur de la saisie qui recopie la cinquième : on la retire avec son appel.
# La chanson des matelots (I1) garde ses vers (« ¦ », rendu en saut de ligne après gut.py).
# Après gut.py : les chapitres prennent les ids I1…I17 et II1…II16 ; le « A » sans accent en tête de phrase redevient
# « À » ; les lignes d'étoiles qui coupent le journal de Dolly deviennent « * * * » ; les espaces mal placés autour de
# l'italique en sortent (même découpe que drapeau_texte.py).
import json, os, re, sys
ROM = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII"]
FIX = [('mûlatresse', 'mulâtresse'), ('King-WilliamStreet', 'King-William-Street'), ('la FitzRoy', 'la Fitz-Roy')]
if sys.argv[1] == 'pre':
    s = open(sys.argv[2], encoding='utf8').read().replace('\r', '')
    k = s.index('\n[1] Nom abréviatif de Dorothée.'); e = s.index('End of the Project Gutenberg')
    notes = {m.group(1): re.sub(r'\s+', ' ', m.group(2)).strip().rstrip('.') for m in re.finditer(r'^\[(\d+)\] (.*?)(?=^\[\d+\]|\Z)', s[k:e].strip(), re.S | re.M)}
    assert sorted(notes, key=int) == [str(i) for i in range(1, 16)], notes
    assert notes['6'] == notes['5'] == 'Environ 4000 kilomètres'
    del notes['6']
    s = s[:s.index('\nBibliographie\n', s.index('\n\n\n\nPremière partie\n'))].replace('_-- _', '-- ')
    s = s.replace('Ce groupe[6],', 'Ce groupe,')
    v = "_En voilà une,\nLa jolie une!\nUne s'en va, ça ira,\nDeux revient, ça va bien!\n\nEn voici deux,\nLa jolie deux!\nDeux s'en va, ça ira,\nTrois revient, ça va bien..._\n"
    assert s.count(v) == 1  # la chanson du cabestan : un couplet par paragraphe, vers gardés (« ¦ »)
    s = s.replace(v, v[:-1].replace('\n\n', '_\n\n_').replace('\n', '¦').replace('¦¦', '\n\n') + '\n')
    for n, t in notes.items():
        assert s.count('[' + n + ']') == 1, n
        s = s.replace('[' + n + ']', ' (_Note : ' + t + '._)')
    a = s.index('\n\n\n\nPremière partie\n')
    b = s.index('\n\n\n\nDeuxième partie\n')
    open(os.path.join(sys.argv[3], 'p1.txt'), 'w', encoding='utf8').write(s[a + 20:b] + '\n')
    open(os.path.join(sys.argv[3], 'p2.txt'), 'w', encoding='utf8').write(s[b + 20:] + '\n')
    print(len(notes), 'notes'); sys.exit()
C = []
for part, f, n in (('I', sys.argv[2], 17), ('II', sys.argv[3], 16)):
    cs = json.load(open(f, encoding='utf8'))
    assert [c['n'] for c in cs] == ROM[:n], [c['n'] for c in cs]
    for c in cs:
        c['n'] = part + str(ROM.index(c['n']) + 1); C.append(c)
for c in C:
    out = []
    for p in c['paras']:
        if re.match(r'^\*( \*)+$', p.strip()): out.append('* * *'); continue
        p = re.sub(r'(^|\n|[.!?…»] |— |« )A (?=[a-zéèêàù])', r'\1À ', p)
        p = re.sub(r'(^|\n|— |« )A (?=[A-ZÉ])', r'\1À ', p)
        assert p.count('*') % 2 == 0, (c['n'], p[:80])
        q = p.split('*')
        for i in range(1, len(q), 2):
            m = re.match(r'^(\s*)(.*?)(\s*[?!:;]?)$', q[i], re.S)
            q[i - 1] += m.group(1); q[i] = m.group(2); q[i + 1] = m.group(3) + q[i + 1]
        p = re.sub(r'(?<=\S)  +', ' ', '*'.join(q)).replace('¦', '\n')
        for a, b in FIX: p = p.replace(a, b)
        assert '[' not in p and ']' not in p and '_' not in p and 'Gutenberg' not in p, (c['n'], p[:80])
        out.append(p)
    c['paras'] = out
assert len(C) == 33
assert all(a not in json.dumps(C, ensure_ascii=False) for a, b in FIX)
json.dump(C, open(sys.argv[4], 'w', encoding='utf8'), ensure_ascii=False, indent=0)
print(len(C), 'chapitres')
