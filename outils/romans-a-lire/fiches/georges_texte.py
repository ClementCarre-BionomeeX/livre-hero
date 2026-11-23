# georges_texte.py pre source.txt sortie.txt | post ch.json sortie.json : retouches de « Georges »
# (Gutenberg n° 18271, miroir orkeilius/gutenberg_fr_mirror).
# pre : après la table, chaque « Chapitre N—Titre » devient « CHAPITRE N. » suivi du titre ; on coupe avant la
# bibliographie. post : titres sans soulignements (le « _Leycester_ » garde ses guillemets), ids I à XXX, contrôles.
import json, re, sys
def etoiles(par):  # l'espace sort de l'italique « *…* »
    parts = par.split('*')
    if len(parts) % 2 == 0: return par
    for k in range(1, len(parts), 2):
        if parts[k].endswith(' '): parts[k] = parts[k].rstrip(' '); parts[k + 1] = ' ' + parts[k + 1].lstrip(' ')
        if parts[k].startswith(' '): parts[k] = parts[k].lstrip(' '); parts[k - 1] = parts[k - 1].rstrip(' ') + ' '
    return '*'.join(parts)
def roman(n):
    out = ''
    for v, r in ((100, 'C'), (90, 'XC'), (50, 'L'), (40, 'XL'), (10, 'X'), (9, 'IX'), (5, 'V'), (4, 'IV'), (1, 'I')):
        while n >= v: out += r; n -= v
    return out
if sys.argv[1] == 'pre':
    L = open(sys.argv[2], encoding='utf8').read().replace('\r', '').split('\n')
    toc_end = next(i for i, l in enumerate(L) if l.startswith('Bibliographie'))
    out = []; titres = []
    for i, l in enumerate(L):
        m = re.match(r'^Chapitre ([IVXL]+)—(.+)$', l.strip())
        if i > toc_end and m: out += ['CHAPITRE %s.' % m.group(1), m.group(2)]; continue
        out.append(l)
    T = '\n'.join(out)
    T = T[:T.index('\nBibliographie', T.index('CHAPITRE XXX.'))]
    open(sys.argv[3], 'w', encoding='utf8').write(T)
else:
    C = json.load(open(sys.argv[2]))
    assert [c['n'] for c in C] == [roman(k) for k in range(1, 31)], [c['n'] for c in C]
    for c in C:
        c['head'] = c['head'].replace('_', '').replace('*', '').replace('«', '« ').replace('»', ' »').replace('  ', ' ')
        c['paras'] = [etoiles(p.replace('M***', 'M…').replace('M.**', 'M. …')) for p in c['paras']]  # « M. de M*** » : la discrétion de Dumas, sans astérisques
        for p in c['paras']: assert not re.search(r'[_\[\]]|Gutenberg', p) and p.count('*') % 2 == 0, (c['n'], p[:80])
    json.dump(C, open(sys.argv[3], 'w'), ensure_ascii=False, indent=0)
