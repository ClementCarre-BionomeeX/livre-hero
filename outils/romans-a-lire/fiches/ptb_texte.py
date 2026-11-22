# ptb_texte.py pre source.txt dossier/, puis gut.py dossier/p1.txt c1.json et gut.py dossier/p2.txt c2.json, puis
# ptb_texte.py post c1.json c2.json sortie.json : retouches de « P'tit-Bonhomme » (Gutenberg 55135, Hetzel 1893).
# Avant gut.py : le livre a deux parties (« Les premiers pas », « Dernières étapes »), dont les chapitres recommencent à
# I ; chacune va dans son fichier, de son titre à sa ligne « FIN DE LA … PARTIE » (la table et la liste des corrections
# de la saisie tombent) ; les légendes « [Illustration: …] » tombent, comme la ligne de points qui coupe l'affiche du
# théâtre ; les notes, écrites en retrait sous le paragraphe (« [1] texte »), deviennent « [Note 1: texte] », que
# gut.py met à leur appel. Les blocs en retrait à lignes courtes (affiche, complainte) gardent leurs retours à la
# ligne : « ¦ » en pre, « \n » en post.
# Après gut.py : les chapitres prennent les ids I1…I16, II1…II15 ; le « A » sans accent en tête de phrase redevient
# « À » ; les espaces mal placés autour de l'italique en sortent (même découpe que drapeau_texte.py) ; les fautes de la
# saisie relevées à la relecture sont corrigées (liste FIX), « Ile » et « Emeraude » prennent leur accent.
import json, os, re, sys
ROM = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI"]
FIX = []
PARTS = [('\nLES PREMIERS PAS\n', '\nFIN DE LA PREMIÈRE PARTIE\n'),
         ('\nDERNIÈRES ÉTAPES\n', '\nFIN DE LA DEUXIÈME ET DERNIÈRE PARTIE.\n')]
if sys.argv[1] == 'pre':
    s = open(sys.argv[2], encoding='utf8').read().replace('\r', '').replace('.....', '…')
    n = 0
    for k, (a, b) in enumerate(PARTS):
        t = s[s.index(a) + len(a):s.index(b)] + '\n'
        t = re.sub(r'\n *\[Illustration[^\]]*\]\n', '\n', t, flags=re.S)
        t = re.sub(r'\n *(\. ){10,}\.? *\n', '\n', t)
        assert 'Illustration' not in t
        if k == 0:  # l'affiche du théâtre de Limerick (ch. VII) : une ligne par ligne d'affiche
            i = t.index('\n                     _Pour les représentations'); j = t.index('etc., etc.\n', i) + 11
            L = [l.strip() for l in t[i:j].split('\n') if l.strip()]
            assert L[:3] == ['_Pour les représentations', 'de_', 'Miss Anna Waston.'], L[:3]
            t = t[:i] + '\n' + '¦'.join(['_Pour les représentations de_ Miss Anna Waston.'] + L[3:]) + '\n' + t[j:]
        out = []
        for blk in t.split('\n\n'):
            m = re.match(r'^ {2}\[(\d+)\] (.*)$', blk, flags=re.S)
            if m:
                n += 1; out.append('[Note ' + m.group(1) + ': ' + re.sub(r'\s+', ' ', m.group(2)).strip() + ']'); continue
            L = blk.strip('\n').split('\n')
            if len(L) > 1 and all(l.startswith('  ') and 0 < len(l.strip()) < 75 for l in L): blk = '¦\n'.join(L)
            out.append(blk)
        open(os.path.join(sys.argv[3], 'p%d.txt' % (k + 1)), 'w', encoding='utf8').write('\n\n\n\n' + '\n\n'.join(out))
    print(n, 'notes'); sys.exit()
C = []
for part, f, n in (('I', sys.argv[2], 16), ('II', sys.argv[3], 15)):
    cs = json.load(open(f, encoding='utf8'))
    assert [c['n'] for c in cs] == ROM[:n], [c['n'] for c in cs]
    for c in cs:
        c['n'] = part + str(ROM.index(c['n']) + 1); C.append(c)
for c in C:
    out = []
    for p in c['paras']:
        p = p.replace('¦ ', '\n').replace('¦', '\n')
        p = re.sub(r'(^|\n|[.!?…»] |— |« )A (?=[a-zéèêàù])', r'\1À ', p)
        p = re.sub(r'(^|\n|— |« |\*)A (?=[A-ZÉ])', r'\1À ', p)
        assert p.count('*') % 2 == 0, (c['n'], p[:80])
        q = p.split('*')
        for i in range(1, len(q), 2):
            m = re.match(r'^(\s*)(.*?)(\s*[?!:;,]?)$', q[i], re.S)
            q[i - 1] += m.group(1); q[i] = m.group(2); q[i + 1] = m.group(3) + q[i + 1]
        p = re.sub(r'(?<=\S)  +', ' ', '*'.join(q))
        p = re.sub(r'([?!])\.\.(?!\.)', r'\1…', p)
        for a, b in FIX: p = p.replace(a, b)
        p = re.sub(r'\bIle\b', 'Île', p); p = re.sub(r'\bEmeraude\b', 'Émeraude', p)  # « l'Ile Emeraude » : les majuscules sans accent de la saisie
        assert '[' not in p and ']' not in p and '_' not in p and 'Gutenberg' not in p, (c['n'], p[:80])
        out.append(p)
    c['paras'] = out
assert len(C) == 31
assert all(a not in json.dumps(C, ensure_ascii=False) for a, b in FIX)
json.dump(C, open(sys.argv[4], 'w', encoding='utf8'), ensure_ascii=False, indent=0)
print(len(C), 'chapitres')
