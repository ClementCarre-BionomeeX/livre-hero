# margot_texte.py pre tome1.txt tome2.txt sortie.txt | post ch.json sortie.json : retouches de « La Reine Margot »
# (Gutenberg n° 13856 et 13857, miroir orkeilius/gutenberg_fr_mirror, saisie d'Ebooks libres et gratuits).
# pre : les deux parties en un seul texte ; tables et en-têtes retirés ; les chapitres de la deuxième partie, numérotés
# de nouveau à partir de I, prennent la suite (XXXII…LXVI) pour que gut.py les lise d'un trait ; les notes de la fin
# (« [1] … ») vont, au format « [Note 1: …] », juste après le paragraphe qui porte leur appel.
# post : contrôles (66 chapitres, plus de crochets ni de soulignés).
import json, re, sys
def roman(n):
    out = ''
    for v, r in ((50, 'L'), (40, 'XL'), (10, 'X'), (9, 'IX'), (5, 'V'), (4, 'IV'), (1, 'I')):
        while n >= v: out += r; n -= v
    return out
def deroman(s):
    return next(n for n in range(1, 60) if roman(n) == s)
def soulignes(t):
    # la saisie place mal ses soulignés : lignes « _ _ » ou « __ » pour un blanc, « _-- _Texte » en tête de réplique,
    # espaces collées du mauvais côté (« _Verba volant, _comme »). On rend des italiques bien formées.
    t = re.sub(r'(?m)^_ ?_$', '', t)
    t = re.sub(r'(?m)^_-- ', '-- _', t)
    t = t.replace('__', '')
    out = []
    for p in t.split('\n\n'):
        p = re.sub(r'_(\s*)([^_]*?)(\s*)_', lambda m: m.group(1) + ('_' + m.group(2) + '_' if m.group(2) else '') + m.group(3), p)
        out.append(p)
    return '\n\n'.join(out)
def pre(a1, a2, b):
    t1 = open(a1, encoding='utf8').read().replace('\r', '')
    t1 = t1[t1.index('\nPREMIÈRE PARTIE\n') + 17:t1.index('\nFIN DE LA PREMIÈRE PARTIE.')]
    t2 = open(a2, encoding='utf8').read().replace('\r', '')
    body, notes = t2[t2.index('\nDEUXIÈME PARTIE\n') + 17:t2.index('\nFIN\n')], t2[t2.index('\nFIN\n') + 5:t2.index("End of Project Gutenberg")]
    N = {}
    for m in re.finditer(r'\[(\d+)\]\s*(.*?)(?=\n\s*\[\d+\]|\Z)', notes, re.S):
        N[m.group(1)] = re.sub(r'\s+', ' ', m.group(2)).strip()
    assert len(N) == 6, len(N)
    L = body.split('\n'); out = []
    for l in L:
        if re.fullmatch(r'[IVXLC]+', l.strip()) and l == l.strip(): l = roman(deroman(l) + 31)
        out.append(l)
    body = '\n'.join(out)
    paras = body.split('\n\n'); res = []
    for p in paras:
        res.append(p)
        for k in re.findall(r'\[(\d+)\]', p): res.append('[Note %s: %s]' % (k, N.pop(k)))
    assert not N, N
    open(b, 'w', encoding='utf8').write(soulignes(t1 + '\n\n' + '\n\n'.join(res)))
def post(a, b):
    C = json.load(open(a, encoding='utf8'))
    assert len(C) == 66, len(C)
    assert C[12]['paras'][0] == 'sont pas destinées'  # le titre du chapitre XIII tient sur deux lignes
    C[12]['paras'].pop(0)
    if C[-1]['paras'] and C[-1]['paras'][-1].rstrip('.') == 'FIN': C[-1]['paras'].pop()
    for c in C:
        for p in c['paras']: assert not re.search(r'[\[\]_]|Gutenberg', p), p[:80]
    json.dump(C, open(b, 'w', encoding='utf8'), ensure_ascii=False, indent=0)
if sys.argv[1] == 'pre': pre(*sys.argv[2:5])
else: post(*sys.argv[2:4])
