# moret_texte.py pre source.txt sortie.txt | post ch.json sortie.json : retouches du « Comte de Moret »
# (Gutenberg n° 37771, miroir orkeilius/gutenberg_fr_mirror ; édition de New York, 1866, en quatre volumes).
# pre : la numérotation des chapitres reprend à « Ier » à chaque volume ; on renumérote d'un trait (« CHAPITRE N. »,
# 73 chapitres), on retire les lignes « … VOLUME. » ; le rébus de l'enseigne ([Illustration]) s'en va ; la croix des
# signatures du cardinal ([+]) devient « † ». gut.py s'arrête au « FIN. » final.
# post : contrôles (73 chapitres, plus de crochets ni de soulignés) ; les titres restent en capitales, la fiche les réécrit.
import json, re, sys
def roman(n):
    out = ''
    for v, r in ((100, 'C'), (90, 'XC'), (50, 'L'), (40, 'XL'), (10, 'X'), (9, 'IX'), (5, 'V'), (4, 'IV'), (1, 'I')):
        while n >= v: out += r; n -= v
    return out
def etoiles(par):  # l'espace sort de l'italique « *…* »
    parts = par.split('*')
    if len(parts) % 2 == 0: return par
    for k in range(1, len(parts), 2):
        if parts[k].endswith(' '): parts[k] = parts[k].rstrip(' '); parts[k + 1] = ' ' + parts[k + 1].lstrip(' ')
        if parts[k].startswith(' '): parts[k] = parts[k].lstrip(' '); parts[k - 1] = parts[k - 1].rstrip(' ') + ' '
    return '*'.join(parts)
N = 73
if sys.argv[1] == 'pre':
    L = open(sys.argv[2], encoding='utf8').read().replace('\r', '').split('\n')
    out = []; n = 0
    for l in L:
        s = l.strip()
        if re.fullmatch(r'CHAPITRE [IVXL]+(er)?\.', s): n += 1; out.append('CHAPITRE %s.' % roman(n)); continue
        if re.fullmatch(r'(FIN DU )?(PREMIER|DEUXIÈME|TROISIÈME|QUATRIÈME) VOLUME\.', s): continue
        if s == '[Illustration]': continue
        out.append(l.replace(' [+] ', ' † '))
    assert n == N, n
    open(sys.argv[3], 'w', encoding='utf8').write('\n'.join(out))
else:
    C = json.load(open(sys.argv[2]))
    assert [c['n'] for c in C] == [roman(k) for k in range(1, N + 1)], [c['n'] for c in C]
    for c in C:
        c['paras'] = [etoiles(p) for p in c['paras']]
        for p in c['paras']: assert not re.search(r'[_\[\]]|Gutenberg', p) and p.count('*') % 2 == 0, (c['n'], p[:80])
    json.dump(C, open(sys.argv[3], 'w'), ensure_ascii=False, indent=0)
