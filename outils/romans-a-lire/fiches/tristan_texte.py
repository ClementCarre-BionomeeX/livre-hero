# tristan_texte.py pre source.txt sortie.txt | post ch.json sortie.json : retouches du « Roman de Tristan et Iseut »
# renouvelé par Joseph Bédier (1900 ; Gutenberg n° 42256, miroir orkeilius/gutenberg_fr_mirror).
# pre : chaque ligne d'épigraphe (retrait de quatre espaces, après la note de l'éditeur) reçoit une marque de fin de vers « §§ ».
# post : la préface de Gaston Paris perd son italique (inversé : les titres cités restent en italique) et sa signature ; la note
# additionnelle de Bédier (ses sources, en bibliographie) et le faux-titre sont retirés ; le titre du chapitre III, sur trois
# lignes, est ôté du texte ; chaque épigraphe devient un paragraphe en vers italiques suivi de « — Source ».
import json, re, sys
SRC = {'I': 'Gottfried de Strasbourg', 'II': '*Sir Tristrem*', 'III': '*Lai de la Folie Tristan*', 'IV': 'Gottfried de Strasbourg',
       'V': "Rambaut, comte d'Orange", 'VI': 'Gottfried de Strasbourg', 'VII': "Eilhart d'Oberg", 'VIII': 'Béroul',
       'IX': 'Roman en prose de *Tristan*', 'X': 'Béroul', 'XI': '*Le Lai mortel*', 'XII': 'Béroul',
       'XIII': '*Le Domnei des amanz*', 'XIV': '*La Folie Tristan*', 'XV': 'Thomas', 'XVI': 'Thomas', 'XVII': 'Marie de France',
       'XVIII': 'Thomas', 'XIX': 'Dante, *Enfer*, chant V'}
if sys.argv[1] == 'pre':
    L = open(sys.argv[2], encoding='utf8').read().replace('\r', '').split('\n')
    start = next(i for i, l in enumerate(L) if l.strip() == 'PRÉFACE')
    note = next(i for i, l in enumerate(L) if l.strip() == 'NOTE ADDITIONNELLE')
    roman = next(i for i in range(note, len(L)) if L[i].strip() == 'I')
    for i in range(roman, len(L)):
        if L[i].startswith('    ') and not L[i].strip().startswith('('): L[i] = L[i].strip() + ' §§'
    fin = next(i for i in range(roman, len(L)) if L[i].strip() == 'TABLE DES CHAPITRES')
    out = L[:note] + L[roman:fin]
    open(sys.argv[3], 'w', encoding='utf8').write('\n'.join(out))
else:
    C = json.load(open(sys.argv[2]))
    assert [c['n'] for c in C] == ['P'] + list(SRC), [c['n'] for c in C]
    P = C[0]['paras']; assert P[-1] == 'GASTON PARIS.', P[-1]
    P = P[:-1]
    for k, p in enumerate(P):  # « *A* B *C* » → « A *B* C » : les titres cités restent seuls en italique
        assert p.startswith('*') and p.endswith('*'), p[:50]
        P[k] = re.sub(r'\*(\s*)([^*]*?)(\s*)\*', r'\1*\2*\3', p[1:-1])
    C[0]['paras'] = P
    for c in C[1:]:
        a = c['paras']
        if c['n'] == 'III':
            assert a[0] == 'DE LA' and a[1] == "BELLE AUX CHEVEUX D'OR", a[:2]; a = a[2:]
        assert '§§' in a[0] and a[1].startswith('(') and a[1].endswith(')'), (c['n'], a[:2])
        vers = [v.strip() for v in a[0].split('§§') if v.strip()]
        if c['n'] == 'IX': vers = [' '.join(vers).replace('ami ?—Amie', 'ami ? — Amie')]  # de la prose, pas des vers
        c['paras'] = ['\n'.join('*%s*' % v for v in vers) + '\n— ' + SRC[c['n']]] + a[2:]
    for c in C:
        c['head'] = ''
        for p in c['paras']:
            assert not re.search(r'[_\[\]^{}§]|Gutenberg|CHAPITRE', p) and p.count('*') % 2 == 0, (c['n'], p[:80])
    json.dump(C, open(sys.argv[3], 'w'), ensure_ascii=False, indent=0)
