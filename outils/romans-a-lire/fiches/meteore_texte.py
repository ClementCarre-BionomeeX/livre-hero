# meteore_texte.py pre source.txt dossier/, puis gut.py dossier/p1.txt c1.json, puis meteore_texte.py post c1.json sortie.json :
# retouches de « La Chasse au météore » (Gutenberg 76724, d'après l'édition Hetzel de 1908).
# Avant gut.py : on part du titre qui précède le chapitre I et l'on s'arrête au « FIN. » final (la table tombe) ; les
# légendes « [Illustration: …] » tombent ; les notes, écrites en retrait sous le paragraphe (« [1] texte »), deviennent
# « [Note 1: texte] », que gut.py met à leur appel.
# Après gut.py : le « A » sans accent en tête de phrase redevient « À » ; les espaces mal placés autour de l'italique en
# sortent (même découpe que drapeau_texte.py) ; les points de suspension à cinq points de la saisie (« 24 mars..... »)
# n'en font plus qu'un, et « ?.. », « !.. » deviennent « ?… », « !… » ; les fautes de la saisie relevées à la relecture sont corrigées (liste FIX).
import json, os, re, sys
ROM = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX", "XXI"]
FIX = [('Xéphyrin', 'Zéphyrin'), ('chose.., ', 'chose…, ')]
if sys.argv[1] == 'pre':
    s = open(sys.argv[2], encoding='utf8').read().replace('\r', '')
    a = s.index('\n\n\n\nLA CHASSE AU MÉTÉORE\n\n[Illustration]\n'); b = s.index('\nFIN.\n')
    t = s[a:b] + '\n'
    t = re.sub(r'\n *\[Illustration[^\]]*\]\n', '\n', t, flags=re.S)
    assert 'Illustration' not in t
    out = []; n = 0
    for blk in t.split('\n\n'):
        m = re.match(r'^ {2}\[(\d+)\] (.*)$', blk, flags=re.S)
        if m:
            n += 1; out.append('[Note ' + m.group(1) + ': ' + re.sub(r'\s+', ' ', m.group(2)).strip() + ']'); continue
        out.append(blk)
    t = '\n\n'.join(out).replace('.....', '…').replace('....', '…')
    open(os.path.join(sys.argv[3], 'p1.txt'), 'w', encoding='utf8').write(t)
    print(n, 'notes'); sys.exit()
C = json.load(open(sys.argv[2], encoding='utf8'))
assert [c['n'] for c in C] == ROM, [c['n'] for c in C]
for c in C:
    out = []
    for p in c['paras']:
        p = re.sub(r'(^|\n|[.!?…»] |— |« )A (?=[a-zéèêàù])', r'\1À ', p)
        p = re.sub(r'(^|\n|— |« |\*)A (?=[A-ZÉ])', r'\1À ', p)
        assert p.count('*') % 2 == 0, (c['n'], p[:80])
        q = p.split('*')
        for i in range(1, len(q), 2):
            m = re.match(r'^(\s*)(.*?)(\s*[?!:;,]?)$', q[i], re.S)
            q[i - 1] += m.group(1); q[i] = m.group(2); q[i + 1] = m.group(3) + q[i + 1]
        p = re.sub(r'(?<=\S)  +', ' ', '*'.join(q))
        p = re.sub(r'([?!])\.\.(?!\.)', r'\1…', p)  # « ?.. » de l'édition Hetzel : « ?… »
        for a, b in FIX: p = p.replace(a, b)
        assert '[' not in p and ']' not in p and '_' not in p and 'Gutenberg' not in p, (c['n'], p[:80])
        out.append(p)
    c['paras'] = out
assert all(a not in json.dumps(C, ensure_ascii=False) for a, b in FIX)
json.dump(C, open(sys.argv[3], 'w', encoding='utf8'), ensure_ascii=False, indent=0)
print(len(C), 'chapitres')
