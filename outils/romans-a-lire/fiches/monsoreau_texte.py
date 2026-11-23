# monsoreau_texte.py pre t1 t2 t3 sortie.txt titres.json | post ch.json titres.json sortie.json : retouches de « La Dame
# de Monsoreau » (Gutenberg n° 9637 à 9639, miroir orkeilius/gutenberg_fr_mirror, trois parties). pre : les trois
# parties en un seul texte ; chaque partie numérote ses chapitres à partir de I, on les renumérote d'un trait
# (« CHAPITRE N. ») pour que gut.py les lise ; les titres de Dumas viennent des tables des matières (titres.json) ;
# un seul chapitre n'en a pas (SANS).
# post : ils reviennent sur leurs chapitres ; les cinq notes « [*] » de Dumas vont entre parenthèses à leur appel ; contrôles (97 chapitres, plus de crochets ni de soulignés).
import json, re, sys
SANS = 'Sur le chemin de Méridor'  # le chapitre XIV de la troisième partie n'a pas de titre : celui-ci est de Claude
def roman(n):
    out = ''
    for v, r in ((100, 'C'), (90, 'XC'), (50, 'L'), (40, 'XL'), (10, 'X'), (9, 'IX'), (5, 'V'), (4, 'IV'), (1, 'I')):
        while n >= v: out += r; n -= v
    return out
def pre(*a):
    *srcs, out, tit = a; T = []; parts = []; n = 0
    for src in srcs:
        t = open(src, encoding='utf8').read().replace('\r', '')
        toc = t[t.index('TABLE DES MATI'):t.index('\nCHAPITRE PREMIER\n')]
        for m in re.finditer(r'(?ms)^([IVXLC]+)\.(?:--(.*?))?(?=\n\n|\Z)', toc): T.append(re.sub(r'\s+', ' ', m.group(2) or SANS).strip())
        body = t[t.index('\nCHAPITRE PREMIER\n'):]
        body = body[:min(i for i in (body.find('\nFIN DE LA '), body.find("End of Project Gutenberg")) if i > 0)]
        L = []
        for l in body.split('\n'):
            if re.fullmatch(r'CHAPITRE ([IVXLC]+|PREMIER)', l.strip()): n += 1; l = 'CHAPITRE %s.' % roman(n)
            L.append(l)
            if T[n - 1] == SANS and l.startswith('CHAPITRE '): L += ['', SANS.upper()]  # sinon gut.py prendrait la 1re phrase pour titre
        parts.append('\n'.join(L))
    assert len(T) == n, (len(T), n)
    open(out, 'w', encoding='utf8').write('\n\n'.join(parts))
    json.dump(T, open(tit, 'w', encoding='utf8'), ensure_ascii=False, indent=0)
def post(a, tit, b):
    C = json.load(open(a, encoding='utf8')); T = json.load(open(tit, encoding='utf8'))
    assert len(C) == len(T) == 97, (len(C), len(T))
    for c, t in zip(C, T):
        c['head'] = t.rstrip('.').replace('_', '')
        P = []  # les notes « [*] … » vont entre parenthèses à la place de leur appel « [*] »
        for p in c['paras']:
            if p.startswith('[*] '):
                k = max(i for i, q in enumerate(P) if '[*]' in q); P[k] = P[k].replace('[*]', ' (' + p[4:].strip() + ')', 1).replace('  (', ' ('); continue
            P.append(p)
        c['paras'] = P
        for p in c['paras']: assert not re.search(r'[\[\]_]|Gutenberg', p), p[:80]
    json.dump(C, open(b, 'w', encoding='utf8'), ensure_ascii=False, indent=0)
if sys.argv[1] == 'pre': pre(*sys.argv[2:])
else: post(*sys.argv[2:5])
