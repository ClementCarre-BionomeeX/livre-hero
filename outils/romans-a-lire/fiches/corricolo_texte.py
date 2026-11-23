# corricolo_texte.py pre source.txt sortie.txt | post ch.json sortie.json : « Le Corricolo » d'Alexandre Dumas
# (Gutenberg n° 9262, miroir orkeilius/gutenberg_fr_mirror).
# pre : le texte va de l'« Introduction » au « FIN. » final. L'introduction devient une « PRÉFACE » (id P) ; les deux parties
# numérotent chacune leurs chapitres à partir de I : ils deviennent « CHAPITRE 1. » à « CHAPITRE 49. », suivis de leur titre,
# pour gut.py. Les notes de Dumas (« [1] » dans la phrase, le texte en bas de chapitre sous « Note: », ou en retrait sous
# le paragraphe) deviennent « (*Note : …*) » à l'endroit de l'appel ; la longue note du chapitre XII (les articles de la
# capitulation de 1799) suit le paragraphe qui l'appelle, en italique. Les filets « ---- » deviennent « * * * », le grec
# « [Greek: alexiana] » devient *alexiana*.
# post : remplace les lignes d'étoiles par « * * * », les noms tus « de *** » par « de ∗∗∗ » (étoiles qui ne passent pas
# pour de l'italique), et vérifie qu'il ne reste ni crochet ni reste de Gutenberg.
# Retouches, dites dans la notice (liste R) : au chapitre I, le cuisinier du pacha, désigné par sa couleur et comparé à un
# objet verni, devient « un grand Nubien », puis « le Nubien » ; au chapitre VI, le prêteur que Dumas appelle « le juif »
# devient « l'usurier » ; au chapitre XX, dans l'édit de Dioclétien, « que les Juifs ont cloué » devient « qu'on a cloué » ;
# aux chapitres XLIV et XLV, le petit paysan « pris pour un nègre » est pris « pour un Africain », et « juif » au sens
# de brocanteur rapace devient « brocanteurs », « rapace ».
import json, re, sys
def roman(n):
    out = ''
    for v, r in ((100, 'C'), (90, 'XC'), (50, 'L'), (40, 'XL'), (10, 'X'), (9, 'IX'), (5, 'V'), (4, 'IV'), (1, 'I')):
        while n >= v: out += r; n -= v
    return out
FIX = [("Voici tes termes de cette capitulation", "Voici les termes de cette capitulation")]
R = [('I', "un beau nègre de Nubie, noir comme de l'encre et luisant comme s'il eût été passé au vernis ;", 'un grand Nubien ;', 1),
     ('I', 'le nègre', 'le Nubien', 8), ('I', 'Le nègre', 'Le Nubien', 1),
     ('VI', 'un juif', 'un usurier', 1), ('VI', 'le juif', "l'usurier", 9), ('VI', 'Le juif', "L'usurier", 8),
     ('VI', "s'appelai Félix", "s'appelait Félix", 1), ('VI', 'au juif', "à l'usurier", 1), ('VI', 'du juif', "de l'usurier", 1),
     ('XX', "que les Juifs ont cloué sur une croix", "qu'on a cloué sur une croix", 1),
     ('XLIV', "que nous avions pris pour un nègre, n'était pas plus Africain que", "que nous avions pris pour un Africain, ne l'était pas plus que", 1),
     ('XLIV', 'mon petit nègre aux haillons', 'mon petit sauvage aux haillons', 1),
     ('XLV', 'pour un nègre, je', 'pour un Africain, je', 1),
     ('XLV', 'au plus juif de mes brocanteurs', 'au plus rapace de mes brocanteurs', 1),
     ('XLV', 'les vendre aux juifs ou', 'les vendre aux brocanteurs ou', 1)]
def flat(t):
    return re.sub(r'\s+', ' ', t.replace('_', '')).strip()
def note(t):
    return '(*Note : ' + flat(t).rstrip('.') + '.*)'
if sys.argv[1] == 'pre':
    T = open(sys.argv[2], encoding='utf8').read().replace('\r', '')
    a = T.index('\nIntroduction\n'); b = T.index('\nFIN.\n')
    T = T[a:b]
    for x, y in FIX:
        assert T.count(x) == 1, x; T = T.replace(x, y)
    T = T.replace('[Greek: alexiana]', '_alexiana_')
    T, n = re.subn(r'\n *----\n', '\n* * *\n', T); assert n == 2, n
    T, n = re.subn(r'\n\n\n+DEUXIÈME PARTIE\.\n', '\n\n', T); assert n == 1
    # découpe en chapitres sur les lignes qui ne portent qu'un numéro romain, entourées de lignes vides
    parts = re.split(r'\n\n+([IVX]+)\n\n', T)
    head, rest = parts[0], parts[1:]
    chaps = [('P', head)] + [(rest[i], rest[i + 1]) for i in range(0, len(rest), 2)]
    assert len(chaps) == 50, len(chaps)
    out = []; nn = 0
    for k, (num, body) in enumerate(chaps):
        notes = {}
        # notes en bas de chapitre, sous « Note: » ou « Notes: »
        m = re.search(r'\n\n+Notes?:\n\n(.*)$', body, re.S)
        if m:
            body = body[:m.start()]
            for i, v in re.findall(r'\[(\d)\]\s+(.*?)(?=\n\s*\[\d\]|\Z)', m.group(1), re.S): notes[i] = v.strip()
        # notes en retrait sous le paragraphe : « ··[1] … » et les paragraphes en retrait qui suivent
        def grab(mm):
            notes[mm.group(1)] = mm.group(2); return '\n\n'
        body = re.sub(r'\n\n  \[(\d)\] (.*?(?:\n {2,}.*?)*(?:\n\n {3}\S.*?(?:\n {2,}.*?)*)*)\n\n', grab, body)
        for i, v in notes.items():
            if v.startswith('Voici les termes de cette capitulation'):
                arts = [flat(x) for x in v.split('\n\n')]
                pat = re.compile(r'(\n\n[^\n](?:[^\n]|\n(?!\n))*?) ?\[' + i + r'\]((?:[^\n]|\n(?!\n))*)')
                mm = pat.search(body); assert mm, (num, i)
                ins = '\n\n'.join('_' + ('Note : ' if j == 0 else '') + x + '_' for j, x in enumerate(arts))
                body = body[:mm.start()] + mm.group(1) + mm.group(2) + '\n\n' + ins + body[mm.end():]
            else:
                body, c = re.subn(r' ?\[' + i + r'\]', lambda _: ' ' + note(v), body); assert c == 1, (num, i, c)
        assert '[' not in body, (num, body[body.index('[') - 80:body.index('[') + 80])
        if num == 'P':
            out.append('PRÉFACE\n\n' + body.split('\n', 2)[2] if body.startswith('\nIntroduction\n') else 'PRÉFACE\n\n' + body)
        else:
            nn += 1
            body = body.lstrip('\n'); title, _, txt = body.partition('\n\n')
            out.append('CHAPITRE %s.\n\n%s\n\n%s' % (roman(nn), flat(title), txt))
    assert nn == 49
    open(sys.argv[3], 'w', encoding='utf8').write('\n\n\n'.join(out) + '\n\nFIN\n')
else:
    C = json.load(open(sys.argv[2]))
    for c in C:
        for n, a, b, k in R:
            if c['n'] != n: continue
            t = '\n'.join(c['paras']); assert t.count(a) == k, (n, a, t.count(a)); c['paras'] = t.replace(a, b).split('\n')
        c['paras'] = ['* * *' if re.fullmatch(r'[*\s]+', p) else p.replace('***', '∗∗∗') for p in c['paras']]
        for p in c['paras']:
            assert p == '* * *' or not re.search(r'\*\*|\* \*', p), p[:200]
            assert '[' not in p and 'Gutenberg' not in p and '_' not in p and 'nègre' not in p, p[:200]
            assert not re.search(r'\bjuifs?\b|les Juifs ont', p) or c['n'] == 'XX', p[:200]
    json.dump(C, open(sys.argv[3], 'w'), ensure_ascii=False)
