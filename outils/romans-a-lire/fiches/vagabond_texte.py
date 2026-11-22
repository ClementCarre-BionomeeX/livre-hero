# vagabond_texte.py : « Le Vagabond des étoiles » de Jack London (traduction Paul Gruyer et Louis Postif, Crès, 1925 ;
# Gutenberg 65405), en deux temps autour de gut.py.
#   python3 vagabond_texte.py avant 65405.txt source.txt  : les notes de bas de page de cette saisie sont des blocs en
#     retrait « [2] Le Minnesota… » ; elles deviennent « [Note 2: …] », que gut.py sait lire. La note 6 (sur le titre
#     anglais du roman, accrochée à un titre de chapitre) est retirée. La préface des traducteurs, qui raconte tout le
#     livre jusqu'à sa fin, n'est pas reprise : la notice de la fiche la remplace.
#   python3 vagabond_texte.py apres chapitres.json : retire l'appel « [6] » du titre du chapitre VII, et, après la
#     dernière page, la signature « (Notes des Traducteurs.) », la table et la publicité de l'éditeur. Dans les notes,
#     l'italique intérieur est retiré (la note entière est en italique). La note des traducteurs qui dit l'évolution
#     « battue en brèche par la science » est retirée : elle est fausse, et elle n'est pas de London.
import json, re, sys
if sys.argv[1] == 'avant':
    L = open(sys.argv[2], encoding='utf8').read().replace('Hendrik Bamel', 'Hendrik Hamel').split('\n'); out = []; i = 0
    start = next(k for k, l in enumerate(L) if l.strip() == 'LE VAGABOND DES ÉTOILES' and k > 100)
    L = L[start:]
    while i < len(L):
        m = re.match(r'^  \[(\d+)\] (.*)$', L[i])
        if m:
            body = [m.group(2).strip()]; i += 1
            while i < len(L) and L[i].startswith('    ') and L[i].strip(): body.append(L[i].strip()); i += 1
            if m.group(1) != '6': out.append('[Note ' + m.group(1) + ': ' + ' '.join(body) + ']')
            continue
        out.append(L[i].replace('LA CAMISOLE DE FORCE[6]', 'LA CAMISOLE DE FORCE')); i += 1
    open(sys.argv[3], 'w', encoding='utf8').write('\n'.join(out))
else:
    P = sys.argv[2]; chs = json.load(open(P, encoding='utf8'))
    assert len(chs) == 28, len(chs)
    last = chs[-1]['paras']; k = last.index('(Notes des Traducteurs.)'); chs[-1]['paras'] = last[:k]
    for c in chs:
        c['head'] = c['head'].replace('[6]', '')
        ps = []
        for p in c['paras']:
            p = re.sub(r" \(\*Note : On sait que cette loi de l'évolution[^)]*\.\*\)", '', p)
            p = re.sub(r'\(\*Note : (.*?)\*\)$', lambda m: '(*Note : ' + m.group(1).replace('*', '') + '*)', p)
            ps.append(p)
        c['paras'] = ps
        for p in c['paras']: assert '[' not in p and '_' not in p and '--' not in p, (c['n'], p[:80])
    json.dump(chs, open(P, 'w', encoding='utf8'), ensure_ascii=False, indent=0)
    print('ok', sum(len(c['paras']) for c in chs), 'paragraphes')
