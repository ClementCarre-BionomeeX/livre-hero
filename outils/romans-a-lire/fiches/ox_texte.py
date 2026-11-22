# ox_texte.py pre source.txt dossier/, puis gut.py dossier/pN.txt cN.json pour N = 1 à 5, puis
# ox_texte.py post c1.json … c5.json sortie.json : retouches du recueil « Le Docteur Ox » (Gutenberg 11589, Hetzel).
# Avant gut.py : le volume réunit cinq récits (« Une fantaisie du docteur Ox », « Maître Zacharius », « Un drame dans
# les airs », « Un hivernage dans les glaces », et la « Quarantième ascension française au mont Blanc » de Paul Verne) ;
# chacun va dans son fichier, de son titre au suivant (l'avertissement de l'éditeur et la table tombent). Les deux
# récits sans chapitres reçoivent un « I » et leur titre, pour que gut.py y voie un chapitre. Les titres de chapitres
# écrits sur deux lignes sont recollés sur une seule. Les légendes « [Illustration…] » et les lignes d'étoiles tombent.
# Les vers en retrait (l'opéra des Huguenots) gardent leurs retours à la ligne : « ¦ » en pre, « \n » en post.
# Après gut.py : les chapitres prennent les ids I1…I17, II1…II5, III1, IV1…IV16, V1 ; le « A » sans accent en tête de
# phrase redevient « À » ; les espaces mal placés autour de l'italique en sortent (même découpe que drapeau_texte.py) ;
# les titres longs que gut.py a pris pour un paragraphe reprennent leur place ; les fautes de la saisie relevées à la relecture sont corrigées (liste FIX).
import json, os, re, sys
ROM = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII"]
FIX = [('Ponellan', 'Penellan')]
HEADS = ['\nUNE FANTAISIE\n\nDU\n\nDOCTEUR OX\n', '\nMAÎTRE ZACHARIUS\n\n[Illustration]\n', '\nUN\n\nDRAME DANS LES AIRS\n',
         '\nUN HIVERNAGE DANS LES GLACES\n\n[Illustration]\n', '\nQUARANTIÈME\n\nASCENSION FRANÇAISE\n\nAU MONT BLANC\n\nPAR\n\nPAUL VERNE\n']
SOLO = {2: 'UN DRAME DANS LES AIRS', 4: 'QUARANTIÈME ASCENSION FRANÇAISE AU MONT BLANC'}
NCH = [17, 5, 1, 16, 1]
if sys.argv[1] == 'pre':
    s = open(sys.argv[2], encoding='utf8').read().replace('\r', '')
    s = s[:s.index('End of the Project Gutenberg')]
    pos = [s.index(h) for h in HEADS]
    for k, i in enumerate(pos):
        t = s[i + len(HEADS[k]):pos[k + 1] if k + 1 < len(pos) else len(s)] + '\n'
        t = re.sub(r'\n *\[Illustration[^\]]*\]\n', '\n', t, flags=re.S)
        t = re.sub(r'\n *(\* *){5}\n', '\n', t)
        assert 'Illustration' not in t
        if k in SOLO: t = '\n\nI\n\n' + SOLO[k] + '\n\n' + t
        # titres sur deux lignes : « I\n\nComme quoi …,\nla petite ville de Quiquendone.\n\n »
        t = re.sub(r'\n([IVXL]+)\n\n((?:[^\n]+\n)+)\n', lambda m: '\n' + m.group(1) + '\n\n' + ' '.join(m.group(2).split('\n')).strip() + '\n\n'
                   if len(m.group(2)) < 200 else m.group(0), t)
        out = []
        for blk in t.split('\n\n'):
            L = blk.strip('\n').split('\n')
            if len(L) > 1 and all(l.startswith('  ') and 0 < len(l.strip()) < 75 for l in L): blk = '¦\n'.join(L)
            out.append(blk)
        open(os.path.join(sys.argv[3], 'p%d.txt' % (k + 1)), 'w', encoding='utf8').write('\n\n\n\n' + '\n\n'.join(out))
    sys.exit()
C = []
for k, f in enumerate(sys.argv[2:7]):
    cs = json.load(open(f, encoding='utf8'))
    assert [c['n'] for c in cs] == ROM[:NCH[k]], [c['n'] for c in cs]
    for c in cs:
        c['n'] = ROM[k] + str(ROM.index(c['n']) + 1); C.append(c)
for c in C:
    if not c['head']: c['head'] = c['paras'].pop(0)  # titre long (plus de 90 signes) : gut.py en a fait le premier paragraphe
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
        for a, b in FIX: p = p.replace(a, b)
        assert '[' not in p and ']' not in p and '_' not in p and 'Gutenberg' not in p, (c['n'], p[:80])
        out.append(p)
    c['paras'] = out
assert len(C) == sum(NCH)
assert all(a not in json.dumps(C, ensure_ascii=False) for a, b in FIX)
json.dump(C, open(sys.argv[7], 'w', encoding='utf8'), ensure_ascii=False, indent=0)
print(len(C), 'chapitres')
