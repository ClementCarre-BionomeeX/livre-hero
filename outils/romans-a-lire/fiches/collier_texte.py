# collier_texte.py pre tome1.txt tome2.txt sortie1.txt sortie2.txt | post ch.json sortie.json : retouches du « Collier de la Reine »
# (Gutenberg n° 18199 et 18200, miroir orkeilius/gutenberg_fr_mirror, édition ebooksgratuits).
# pre : « Avant-propos » devient « AVANT-PROPOS » ; « Prologue--I », « Prologue--II » et « Chapitre N » deviennent des
# « CHAPITRE N. » numérotés à la suite (le prologue prend I et II, le chapitre I devient III) pour gut.py ; la ligne
# « FIN DU PROLOGUE » s'en va ; les vers (lignes en retrait) d'un même couplet passent sur une ligne, coupés par « ¶ ».
# post : les ids reprennent la numérotation du livre (P, PRI, PRII, puis I à XCVIII) ; « ¶ » redevient un retour à la
# ligne ; le titre latin du chapitre LI perd son soulignement et prend sa note (« Rêve douloureux ») ; « coeur » → « cœur »
# dans les titres ; contrôles (101 chapitres, plus de soulignés ni de « ¶ »).
import json, re, sys
def roman(n):
    out = ''
    for v, r in ((100, 'C'), (90, 'XC'), (50, 'L'), (40, 'XL'), (10, 'X'), (9, 'IX'), (5, 'V'), (4, 'IV'), (1, 'I')):
        while n >= v: out += r; n -= v
    return out
def arabe(r):
    return next(n for n in range(1, 200) if roman(n) == r)
if sys.argv[1] == 'pre':
    for src, dst in ((sys.argv[2], sys.argv[4]), (sys.argv[3], sys.argv[5])):
        L = open(src, encoding='utf8').read().replace('\r', '').split('\n')
        end = next(i for i, l in enumerate(L) if l.startswith('*** END OF'))
        out = []; prev_verse = False
        for i, l in enumerate(L):
            s = l.strip()
            if i < end:
                if s == 'Avant-propos': l = 'AVANT-PROPOS'
                elif s == 'FIN DU PROLOGUE': l = ''
                else:
                    m = re.match(r'^Prologue--(I|II)$', s) or re.match(r'^Chapitre ([IVXLC]+)$', s)
                    if m: l = 'CHAPITRE %s.' % roman(arabe(m.group(1)) + (0 if s.startswith('Prologue') else 2))
            verse = i < end and l.startswith('    ') and s != ''
            l = s if verse else l
            if verse and prev_verse: out[-1] += ' ¶ ' + l
            else: out.append(l)
            prev_verse = verse
        open(dst, 'w', encoding='utf8').write('\n'.join(out))
else:
    C = json.load(open(sys.argv[2]))
    assert len(C) == 101, len(C)
    assert C[0]['n'] == 'P', C[0]['n']
    for k, c in enumerate(C[1:], 1):
        assert c['n'] == roman(k), (k, c['n'])
        c['n'] = 'PR' + roman(k) if k <= 2 else roman(k - 2)
    for c in C:
        c['head'] = c['head'].replace('_Aegri somnia_[2]', 'Aegri somnia (« Rêve douloureux »)').replace('coeur', 'cœur')
        c['paras'] = [p.replace(' ¶ ', '\n') for p in c['paras']]
        for p in c['paras']: assert not re.search(r'[_¶\[\]]|Gutenberg', p), (c['n'], p[:80])
    json.dump(C, open(sys.argv[3], 'w'), ensure_ascii=False, indent=0)
