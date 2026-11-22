# fourrures_texte.py pre source.txt dossier/, puis gut.py dossier/p1.txt c1.json et gut.py dossier/p2.txt c2.json, puis
# fourrures_texte.py post c1.json c2.json sortie.json : retouches du « Pays des fourrures » (Gutenberg 17796, saisie des
# Ebooks libres et gratuits).
# Avant gut.py : le livre est coupé en ses deux parties, dont les chapitres recommencent à « I » (la table du début est
# sautée) ; les numéros « XII. » perdent leur point pour que gut.py les reconnaisse. Les onze notes, rangées en fin de
# livre sous la forme « [n] texte », deviennent « [Note n: texte] » à la fin de leur partie, et gut.py les remet à leur appel.
# Après gut.py : les chapitres prennent les ids I1…I23 et II1…II24, et les fautes de la saisie relevées à la relecture
# sont corrigées (liste FIX). Les listes (personnel de l'expédition, tableau des fourrures) gardent une ligne par entrée : « ¦ » en pre, retour à la\n# ligne en post.
import json, os, re, sys
def roman(n):
    out = ''
    for v, r in ((10, 'X'), (9, 'IX'), (5, 'V'), (4, 'IV'), (1, 'I')):
        while n >= v: out += r; n -= v
    return out
ROM = [roman(i) for i in range(1, 25)]
FIX = [('85, 000 francs', '85 000 francs'), ('par 52024 de latitude', "par 52° 24' de latitude"), ('Magde', 'Madge'), ('pètrels', 'pétrels'), ('Paulinariver', 'Paulina-river'),
       ('Whasburn', 'Washburn'), ('Fort-EspéranceFort-Espérance', 'Fort-Espérance'), ('abordparce', 'abord parce'),
       ('obsurité', 'obscurité'), ('dureé', 'durée'), ('rogés par', 'rongés par'), ('chochléarias', 'cochléarias'),
       ('Esquimauux', 'Esquimaux'), ('Jasper Hoson', 'Jasper Hobson'), ('Wolwérènes', 'Wolvérènes'), ('Mrs. Rae,', 'Mrs. Raë,'),
       ('des Raë, des Franklin', 'des Rae, des Franklin')]
if sys.argv[1] == 'pre':
    s = open(sys.argv[2], encoding='utf8').read().replace('\r', '')
    k = s.index('\n[1] Et, en effet, cette prévision'); e = s.index('End of the Project Gutenberg')
    notes = {}
    for m in re.finditer(r'^\[(\d+)\] (.*?)(?=\n\[|\Z)', s[k:e].strip('\n'), re.S | re.M):
        notes[m.group(1)] = ' '.join(m.group(2).split())
    assert sorted(notes, key=int) == [str(i) for i in range(1, 12)], notes
    s = s[:k]
    s = re.sub(r'^([IVXL]+)\.$', r'\1', s, flags=re.M)
    s = s.replace('Blaireaux 1, 069', 'Blaireaux: 1, 069')
    s = re.sub(r'(\d), (\d{3})\b', r'\1 \2', s)  # « 92, 288 » : milliers
    blocks = s.split('\n\n')  # listes (personnel, tableau des fourrures) : blocs dont toutes les lignes sont courtes
    s = '\n\n'.join('¦\n'.join(b.split('\n')) if b.count('\n') >= 1 and all(0 < len(l) < 45 for l in b.split('\n'))
                    and not re.match(r'^[IVXL]+$', b.split('\n')[0]) else b for b in blocks)
    a = s.index('\nPREMIÈRE PARTIE\n\n\n\n\nI\n'); b = s.index('\nDEUXIÈME PARTIE\n', a)
    parts = [s[a + len('\nPREMIÈRE PARTIE\n'):b], s[b + len('\nDEUXIÈME PARTIE\n'):]]
    os.makedirs(sys.argv[3], exist_ok=True)
    for i, t in enumerate(parts):
        calls = [n for n in notes if '[' + n + ']' in t]
        t = t.rstrip() + '\n\n' + '\n\n'.join('[Note ' + n + ': ' + notes[n] + ']' for n in calls) + '\n\nFIN\n'
        open(os.path.join(sys.argv[3], 'p%d.txt' % (i + 1)), 'w', encoding='utf8').write(t)
        print('partie', i + 1, 'notes', calls)
    sys.exit()
C1 = json.load(open(sys.argv[2], encoding='utf8')); C2 = json.load(open(sys.argv[3], encoding='utf8'))
assert [c['n'] for c in C1] == ROM[:23] and [c['n'] for c in C2] == ROM[:24], ([c['n'] for c in C1], [c['n'] for c in C2])
for c in C1: c['n'] = 'I' + str(ROM.index(c['n']) + 1)
for c in C2: c['n'] = 'II' + str(ROM.index(c['n']) + 1)
C = C1 + C2
for c in C:
    out = []
    for p in c['paras']:
        p = p.replace('¦ ', '\n')
        for a, b in FIX: p = p.replace(a, b)
        p = re.sub(r'(?<![sd] )\bRae\b', 'Raë', p)  # le forgeron s'écrit Raë ; « les Rae », « des Rae » : l'explorateur
        assert '[' not in p and ']' not in p and '_' not in p and 'Gutenberg' not in p, (c['n'], p[:80])
        out.append(p)
    c['paras'] = out
json.dump(C, open(sys.argv[4], 'w', encoding='utf8'), ensure_ascii=False, indent=0)
print(len(C), 'chapitres')
