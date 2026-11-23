# fantomes_texte.py pre source.txt sortie.txt | post ch.json sortie.json : retouches des « Mille et un fantômes »
# (Gutenberg n° 15208, miroir orkeilius/gutenberg_fr_mirror, édition illustrée Calmann-Lévy).
# pre : la page de titre part ; les légendes des gravures « [Illustration: …] » aussi ; « [Footnote N: …] » devient « [Note N: …] » ; la lettre-dédicace « A M. *** »
# devient la préface ; le chapitre I n'a pas de numéro dans la source : pre l'ajoute ; les numéros « II », « III »… sont
# indentés, pre les écrit « CHAPITRE N. » et garde le titre en capitales sur la ligne suivante. On s'arrête à « FIN. ».
# post : ids P, I à XV ; « A » et « O » majuscules isolés deviennent « À » et « Ô » ; titres vides (la fiche les écrit) ; contrôles.
import json, re, sys
def roman(n):
    out = ''
    for v, r in ((100, 'C'), (90, 'XC'), (50, 'L'), (40, 'XL'), (10, 'X'), (9, 'IX'), (5, 'V'), (4, 'IV'), (1, 'I')):
        while n >= v: out += r; n -= v
    return out
def etoiles(par):
    parts = par.split('*')
    if len(parts) % 2 == 0: return par
    for k in range(1, len(parts), 2):
        if parts[k].endswith(' '): parts[k] = parts[k].rstrip(' '); parts[k + 1] = ' ' + parts[k + 1].lstrip(' ')
        if parts[k].startswith(' '): parts[k] = parts[k].lstrip(' '); parts[k - 1] = parts[k - 1].rstrip(' ') + ' '
    return '*'.join(parts)
if sys.argv[1] == 'pre':
    t = open(sys.argv[2], encoding='utf8').read().replace('\r', '')
    t = re.sub(r'\[Illustration(:[^\]]*)?\]', '', t)
    t = t.replace('[Footnote ', '[Note ')
    L = t.split('\n')
    start = next(i for i, l in enumerate(L) if l.strip() == 'A M. ***')
    end = next(i for i, l in enumerate(L) if i > start and l.strip() == 'FIN.')
    out = ['PRÉFACE', '']; n = 0
    for l in L[start + 1:end]:
        s = l.strip()
        if s == 'LA RUE DE DIANE A FONTENAY-AUX-ROSES':
            n += 1; out += ['CHAPITRE I.', '', s]; continue
        m = re.match(r'^([IVX]+)$', s)
        if m and l.startswith('   '):
            n += 1; assert m.group(1) == roman(n), l
            out.append('CHAPITRE %s.' % m.group(1)); continue
        out.append(s if l.startswith('        ') and s.isupper() else l)
    assert n == 15, n
    open(sys.argv[3], 'w', encoding='utf8').write('\n'.join(out) + '\nFIN\n')
else:
    C = json.load(open(sys.argv[2]))
    ids = ['P'] + [roman(k) for k in range(1, 16)]
    assert [c['n'] for c in C] == ids, [c['n'] for c in C]
    for c in C:
        c['head'] = ''
        c['paras'] = [etoiles(re.sub(r"(?<![\w'’])O ", 'Ô ', re.sub(r"(?<![\w'’])A (?=[\w'’])", 'À ', p))) for p in c['paras']]
        for p in c['paras']: assert not re.search(r'[_\[\]]|Gutenberg|Illustration', p) and p.count('*') % 2 == 0, (c['n'], p[:80])
    json.dump(C, open(sys.argv[3], 'w'), ensure_ascii=False, indent=0)
