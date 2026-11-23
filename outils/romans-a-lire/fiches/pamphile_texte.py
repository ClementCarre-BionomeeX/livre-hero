# pamphile_texte.py pre source.txt sortie.txt | post ch.json sortie.json : retouches du « Capitaine Pamphile »
# (Gutenberg n° 18697, miroir orkeilius/gutenberg_fr_mirror, édition ebooksgratuits).
# pre : la « PRÉFACE » de cette édition est une notice d'ebooksgratuits (résumé et commentaires), pas un texte de Dumas :
# on la retire. Chaque « Chapitre N » est suivi de son titre en italique sur plusieurs lignes : pre écrit « CHAPITRE N. »
# puis « SANS TITRE » et retire le titre (la fiche reprend les titres de la table). « Conclusion » devient « CONCLUSION »,
# « Pièces justificatives » « ÉPILOGUE » (renommé « PJ » dans post). Coupe à la fin du texte.
# post : ids I à XIX, CONCL, PJ ; titres vides ; contrôles.
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
if sys.argv[1] == 'pre':
    L = open(sys.argv[2], encoding='utf8').read().replace('\r', '').split('\n')
    toc_end = next(i for i, l in enumerate(L) if l.strip() == 'Pièces justificatives.')
    pref = next(i for i, l in enumerate(L) if i > toc_end and l.strip() == 'PRÉFACE')
    ch1 = next(i for i, l in enumerate(L) if i > pref and l.strip() == 'Chapitre I')
    out = L[:pref]; i = ch1; n = 0
    while i < len(L):
        s = L[i].strip()
        m = re.match(r'^Chapitre ([IVXL]+)$', s)
        if m:
            n += 1; assert m.group(1) == roman(n), s
            out += ['CHAPITRE %s.' % m.group(1), '', 'SANS TITRE', '']
            i += 1
            while not L[i].strip(): i += 1
            assert L[i].startswith('_'), L[i]
            while not L[i].rstrip().endswith('_'): i += 1
            i += 1; continue
        if s == 'Conclusion': out.append('CONCLUSION'); i += 1; continue
        if s == 'Pièces justificatives': out.append('ÉPILOGUE'); i += 1; continue
        if s.startswith('End of Project Gutenberg'): break
        out.append(L[i]); i += 1
    assert n == 19
    open(sys.argv[3], 'w', encoding='utf8').write('\n'.join(out))
else:
    C = json.load(open(sys.argv[2]))
    ids = [roman(k) for k in range(1, 20)] + ['CONCL', 'E']
    assert [c['n'] for c in C] == ids, [c['n'] for c in C]
    C[-1]['n'] = 'PJ'
    for c in C:
        c['head'] = ''
        c['paras'] = [etoiles(p) for p in c['paras']]
        for p in c['paras']: assert not re.search(r'[_\[\]]|Gutenberg|SANS TITRE', p) and p.count('*') % 2 == 0, (c['n'], p[:80])
    json.dump(C, open(sys.argv[3], 'w'), ensure_ascii=False, indent=0)
