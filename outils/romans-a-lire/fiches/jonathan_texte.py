# jonathan_texte.py pre source.txt dossier/, puis gut.py dossier/p1.txt c1.json, gut.py dossier/p2.txt c2.json et
# gut.py dossier/p3.txt c3.json, puis jonathan_texte.py post c1.json c2.json c3.json sortie.json : retouches des
# « Naufragés du Jonathan » (Gutenberg 60450, d'après l'édition Hetzel illustrée de 1909).
# Avant gut.py : le livre a trois parties, dont les chapitres recommencent à I ; chacune va dans son fichier, de son
# titre à sa ligne « FIN DE LA … PARTIE » (ou au « FIN. » final ; la table et la liste des corrections de la saisie
# tombent) ; les légendes « [Illustration: …] » tombent ; les notes, écrites en retrait sous le paragraphe
# (« [1] texte »), deviennent « [Note 1: texte] », que gut.py met à leur appel. Les blocs en retrait à lignes courtes
# (chansons, affiches) gardent leurs retours à la ligne : « ¦ » en pre, « \n » en post.
# Après gut.py : les chapitres prennent les ids I1…I5, II1…II11, III1…III15 ; le « A » sans accent en tête de phrase
# redevient « À » ; les espaces mal placés autour de l'italique en sortent (même découpe que drapeau_texte.py) ; les
# fautes de la saisie relevées à la relecture sont corrigées (liste FIX).
import json, os, re, sys
ROM = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV"]
FIX = [('Syrdey', 'Sirdey'), ('Maurice Raynaud', 'Maurice Reynaud'), ('occurence', 'occurrence')]
PARTS = [('\n\n\n\nLES NAUFRAGÉS DU JONATHAN\n', '\nFIN DE LA PREMIÈRE PARTIE.\n'),
         ('\n\n\n\nDEUXIÈME PARTIE\n', '\nFIN DE LA DEUXIÈME PARTIE.\n'),
         ('\n\n\n\nTROISIÈME PARTIE.\n', '\nFIN.\n')]
if sys.argv[1] == 'pre':
    s = open(sys.argv[2], encoding='utf8').read().replace('\r', '')
    n = 0
    for k, (a, b) in enumerate(PARTS):
        t = s[s.index(a) + len(a):s.index(b)] + '\n'
        t = re.sub(r'\n *\[Illustration[^\]]*\]\n', '\n', t, flags=re.S)
        assert 'Illustration' not in t
        out = []
        for blk in t.split('\n\n'):
            m = re.match(r'^ {2}\[(\d+)\] (.*)$', blk, flags=re.S)
            if m:
                n += 1; out.append('[Note ' + m.group(1) + ': ' + re.sub(r'\s+', ' ', m.group(2)).strip().rstrip(']') + ']'); continue
            L = blk.strip('\n').split('\n')
            if len(L) > 1 and all(l.startswith('  ') and 0 < len(l.strip()) < 50 for l in L): blk = '¦\n'.join(L)
            out.append(blk)
        open(os.path.join(sys.argv[3], 'p%d.txt' % (k + 1)), 'w', encoding='utf8').write('\n\n\n\n' + '\n\n'.join(out))
    print(n, 'notes'); sys.exit()
C = []
for part, f, n in (('I', sys.argv[2], 5), ('II', sys.argv[3], 11), ('III', sys.argv[4], 15)):
    cs = json.load(open(f, encoding='utf8'))
    assert [c['n'] for c in cs] == ROM[:n], [c['n'] for c in cs]
    for c in cs:
        c['n'] = part + str(ROM.index(c['n']) + 1); C.append(c)
for c in C:
    out = []
    for p in c['paras']:
        p = p.replace('¦ ', '\n').replace('¦', '\n')
        p = re.sub(r'(^|\n|[.!?…»] |— |« )A (?=[a-zéèêàù])', r'\1À ', p)
        p = re.sub(r'(^|\n|— |« )A (?=[A-ZÉ])', r'\1À ', p)
        assert p.count('*') % 2 == 0, (c['n'], p[:80])
        q = p.split('*')
        for i in range(1, len(q), 2):
            m = re.match(r'^(\s*)(.*?)(\s*[?!:;,]?)$', q[i], re.S)
            q[i - 1] += m.group(1); q[i] = m.group(2); q[i + 1] = m.group(3) + q[i + 1]
        p = re.sub(r'(?<=\S)  +', ' ', '*'.join(q))
        for a, b in FIX: p = p.replace(a, b)
        p = re.sub(r'\bIle\b', 'Île', p)  # « l'Ile Neuve » : la majuscule sans accent de la saisie
        assert '[' not in p and ']' not in p and '_' not in p and 'Gutenberg' not in p, (c['n'], p[:80])
        out.append(p)
    c['paras'] = out
assert len(C) == 31
assert all(a not in json.dumps(C, ensure_ascii=False) for a, b in FIX)
json.dump(C, open(sys.argv[5], 'w', encoding='utf8'), ensure_ascii=False, indent=0)
print(len(C), 'chapitres')
