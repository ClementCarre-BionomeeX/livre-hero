# speronare_texte.py pre source.txt sortie.txt | post ch.json sortie.json : « Le Speronare » d'Alexandre Dumas
# (Gutenberg n° 8863, miroir orkeilius/gutenberg_fr_mirror).
# pre : le texte va du premier titre (« LA SANTA-MARIA DI PIE DI GROTTA ») à la « TABLE » finale. Les titres de chapitre
# sont des lignes en capitales, sans numéro : ils deviennent « CHAPITRE N. » suivi du titre, pour gut.py. Les notes de
# Dumas sont de trois sortes : « [Note: …] » dans la phrase, « [Note: …] » en paragraphe à part (rattaché au paragraphe
# qui précède), et une note « [1] » sous un intertitre « Note: » ; toutes deviennent « (*Note : …*) » à l'endroit de
# l'appel, ou à la fin du paragraphe. Quelques fautes de lecture optique sont corrigées (liste FIX).
# post : remplace les lignes d'étoiles par « * * * » et vérifie qu'il ne reste ni crochet de note ni reste de Gutenberg.
# Une retouche, dite dans la notice : au chapitre XX, l'entremetteur Gabriello se déguise « en juif » pour approcher
# Gelsomina, et le récit l'appelle ensuite « le juif » ; il devient un colporteur (« en colporteur », « le colporteur »).
import json, re, sys
def roman(n):
    out = ''
    for v, r in ((100, 'C'), (90, 'XC'), (50, 'L'), (40, 'XL'), (10, 'X'), (9, 'IX'), (5, 'V'), (4, 'IV'), (1, 'I')):
        while n >= v: out += r; n -= v
    return out
FIX = [("Frédéric\nH. Ce fut", "Frédéric\nII. Ce fut"), ("et rie voulant", "et ne voulant")]
def note(t):
    t = re.sub(r'\s+', ' ', t.replace('\n\n', ' ')).strip()
    return '(*Note : ' + t.rstrip('.') + '.*)'
if sys.argv[1] == 'pre':
    T = open(sys.argv[2], encoding='utf8').read().replace('\r', '')
    a = T.index('\nLA SANTA-MARIA DI PIE DI GROTTA\n'); b = T.index('\n\nTABLE\n')
    T = T[a:b]
    for x, y in FIX:
        assert T.count(x) == 1, x; T = T.replace(x, y)
    # la note [1] : l'intertitre « Note: » et le paragraphe qui suit vont à l'appel « [1] »
    m = re.search(r'\n\nNote:\n\n\[1\] (.*?)\]\n', T, re.S)
    T = T[:m.start()] + '\n' + T[m.end():]
    assert T.count(' [1]') == 1; T = T.replace(' [1]', ' ' + note(m.group(1)))
    # notes en paragraphe à part : à la fin du paragraphe d'avant
    T, n1 = re.subn(r'\n\n\[Note: (.*?)\]\n', lambda m: ' ' + note(m.group(1)) + '\n', T, flags=re.S)
    # notes dans la phrase
    T, n2 = re.subn(r' ?\[Note: (.*?)\]', lambda m: ' ' + note(m.group(1)), T, flags=re.S)
    print('notes', n1, n2)
    assert '[' not in T.replace('[EBook', ''), T[T.index('[') - 80:T.index('[') + 80]
    L = T.split('\n'); out = []; n = 0
    for i, l in enumerate(L):
        s = l.strip()
        if (s and s == l and re.fullmatch(r"[A-ZÀÂÇÉÈÊËÎÏÔÛÙÜŒ][A-ZÀÂÇÉÈÊËÎÏÔÛÙÜŒ'’ ,.-]{3,}", s)
                and s not in ('ALEX. DUMAS',) and not L[i - 1].strip() and not L[i + 1].strip()):
            n += 1; print(n, s); out += ['', '', 'CHAPITRE %s.' % roman(n), '', s.replace('’', "'"), '', '']
        else: out.append(l)
    open(sys.argv[3], 'w', encoding='utf8').write('\n'.join(out) + '\n\nFIN\n')
else:
    C = json.load(open(sys.argv[2]))
    n = 0
    for c in C:
        if c['n'] == 'XX':
            for k, p in enumerate(c['paras']):
                q, m = re.subn(r'\b([Ll]e|[Uu]n|du|en) juif\b', r'\1 colporteur', p); n += m; c['paras'][k] = q
        c['paras'] = ['* * *' if re.fullmatch(r'[*\s]+', p) else p for p in c['paras']]
        for p in c['paras']:
            assert '[' not in p and 'Gutenberg' not in p and '_' not in p and 'juif' not in p, p[:200]
    assert n == 20, n
    json.dump(C, open(sys.argv[3], 'w'), ensure_ascii=False)
