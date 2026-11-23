# capitaine_texte.py pre tome1.txt tome2.txt sortie.txt | post ch.json sortie.json : « Le Capitaine Aréna » d'Alexandre
# Dumas (Gutenberg n° 8693 pour le premier volume, n° 8692 pour le second ; miroir orkeilius/gutenberg_fr_mirror).
# pre : les deux volumes se suivent, du premier « CHAPITRE » à « FIN DU … VOLUME ». Dans le règlement de la maison des
# fous, cité au chapitre I, la ligne « CHAPITRE V. » d'un article devient « Chapitre V. », pour que gut.py n'y voie pas
# un chapitre. Les titres en deux parties (« EXCURSION AUX ILES ÉOLIENNES. » puis « LIPARI. ») tiennent sur une ligne.
# Les notes de Dumas (« [Note: …] » dans la phrase, et les citations « [1] » à « [4] » du chapitre XVI, données sous
# le paragraphe) deviennent « (*Note : …*) » à l'endroit de l'appel.
# post : remplace les lignes d'étoiles par « * * * » et vérifie qu'il ne reste ni crochet ni reste de Gutenberg.
# Deux retouches, dites dans la notice : au chapitre II, les créanciers des seigneurs siciliens sont « presque tous des
# usuriers » (« des juifs et des usuriers » chez Dumas) ; au chapitre XVII, la phrase qui refuse aux métayers de Pestum
# d'appartenir à l'espèce humaine est coupée après « il n'y a plus de jeunes filles à déflorer ».
import json, re, sys
def note(t):
    t = re.sub(r'\s+', ' ', t.replace('_', '')).strip()
    return '(*Note : ' + t.rstrip('.') + '.*)'
if sys.argv[1] == 'pre':
    out = []
    for src in sys.argv[2:4]:
        T = open(src, encoding='utf8').read().replace('\r', '')
        a = T.index('\nCHAPITRE '); b = T.index('\nFIN DU ')
        T = T[a:b]
        T, n = re.subn(r'\n +CHAPITRE V\.\n', '\n            Chapitre V.\n', T); assert n <= 1
        T, n = re.subn(r'\n(EXCURSION AUX ILES ÉOLIENNES)\.\n\n+([A-Z]+)\.\n', r'\n\1 : \2.\n', T); print('titres', n)
        # citations numérotées : le bloc de notes sous le paragraphe, rattaché aux appels
        m = re.search(r'\n\n(\[1\] .*?)\n\n\n', T, re.S)
        if m:
            notes = dict((k, note(v)) for k, v in re.findall(r'\[(\d)\]\s+(.*?)(?=\n\[\d\]|\Z)', m.group(1), re.S))
            T = T[:m.start()] + '\n\n' + T[m.end():]
            for k, v in notes.items():
                assert T.count(';[%s]' % k) + T.count('.[%s]' % k) == 1, k
                T = T.replace(';[%s]' % k, '; ' + v + ';').replace('.[%s]' % k, ' ' + v + '.')
            print('citations', len(notes))
        T, n = re.subn(r' ?\[[Nn]ote:\s*(.*?)\]', lambda m: ' ' + note(m.group(1)), T, flags=re.S); print('notes', n)
        assert '[' not in T, T[T.index('[') - 80:T.index('[') + 80]
        out.append(T)
    open(sys.argv[4], 'w', encoding='utf8').write('\n'.join(out) + '\n\nFIN\n')
else:
    C = json.load(open(sys.argv[2]))
    R = [('II', 'presque tous des juifs et des usuriers', 'presque tous des usuriers'),
         ('XVII', re.compile(r"(il n'y a plus de jeunes filles à déflorer) ?; car je n'admets pas que les trois ou quatre "
                             r"bipèdes qui habitent la métairie attenant aux temples aient un sexe quelconque et "
                             r"appartiennent même à l'espèce humaine\."), r'\1.')]
    for c in C:
        for n, a, b in R:
            if c['n'] != n: continue
            t = '\n'.join(c['paras'])
            t, k = (re.subn(a, b, t) if not isinstance(a, str) else (t.replace(a, b), t.count(a)))
            assert k == 1, (n, k); c['paras'] = t.split('\n')
        c['paras'] = ['* * *' if re.fullmatch(r'[*\s]+', p) else p for p in c['paras']]
        for p in c['paras']:
            assert '[' not in p and 'Gutenberg' not in p and '_' not in p and 'juif' not in p and 'espèce humaine' not in p, p[:200]
    json.dump(C, open(sys.argv[3], 'w'), ensure_ascii=False)
