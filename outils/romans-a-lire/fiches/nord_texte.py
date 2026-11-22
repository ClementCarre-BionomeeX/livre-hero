# nord_texte.py pre source.txt dossier/, puis gut.py dossier/p1.txt c1.json et gut.py dossier/p2.txt c2.json, puis
# nord_texte.py post c1.json c2.json sortie.json : retouches de « Nord contre Sud » (Gutenberg 15646, saisie des Ebooks
# libres et gratuits). « Mme_ _Burbank » (exposant perdu) redevient « Mme Burbank ».
# Avant gut.py : le livre est coupé en ses deux parties, dont les chapitres recommencent à « I » (la table du début est
# sautée). Les sept notes, rangées en fin de livre sous la forme « [n] texte », deviennent « [Note n: texte] » à la fin
# de leur partie, et gut.py les remet à leur appel. Les italiques mal refermés de la saisie (« _Shannon _ne »,
# « _Shannon, _qui ») sont recollés au mot (« _Shannon_ ne », « _Shannon_, qui ») ; ceux qui restent
# après gut.py (« *Virginia, *commandé ») le sont en post.
# Après gut.py : les chapitres prennent les ids I1…I15 et II1…II16, le « A » sans accent en tête de phrase redevient
# « À », et les fautes de la saisie relevées à la relecture sont corrigées (liste FIX).
import json, os, re, sys
ROM = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI"]
FIX = [('Appomaltox', 'Appomattox'), ('Stonewal Jackson', 'Stonewall Jackson'), ('Nasheville', 'Nashville'),
       ('Talhassee', 'Tallahassee'), ('Thalassee', 'Tallahassee'), ('Erikcson', 'Ericsson'), ('Hea-body', 'Peabody'),
       ('Wasbah', 'Wabash'), ('Vinchester', 'Winchester'), ('Jykill', 'Jekyll'), ('Brunswik', 'Brunswick'),
       ('Critenden', 'Crittenden'), ('Braxton-Bagg', 'Braxton-Bragg'), ('hortillonages', 'hortillonnages'),
       ('*Manassas — * premier', '*Manassas* — premier'), ('Mme* *', 'Mme '), ('gazumas', 'guazumas'),
       ('senoras', 'señoras'), ('source sure', 'source sûre')]
if sys.argv[1] == 'pre':
    s = open(sys.argv[2], encoding='utf8').read().replace('\r', '')
    k = s.index('\n     [1] Environ 3000 hectares.'); e = s.index('End of the Project Gutenberg')
    notes = {}
    for m in re.finditer(r'^ {5}\[(\d+)\] (.*?)(?=\n {5}\[|\Z)', s[k:e].strip('\n'), re.S | re.M):
        notes[m.group(1)] = ' '.join(m.group(2).split())
    assert sorted(notes, key=int) == [str(i) for i in range(1, 8)], notes
    s = s[:k]
    s = re.sub(r'_([^_\n]+?)([,.;:!?]?) _', r'_\1_\2 ', s)  # « _Shannon _ne » → « _Shannon_ ne »
    s = re.sub(r'_([^_\n]+?)([,.;:!?]?) \n_', r'_\1_\2\n', s)
    a = s.index('\nPREMIÈRE PARTIE\n\nI\n'); b = s.index('\nDEUXIÈME PARTIE\n\nI\n')
    parts = [s[a + len('\nPREMIÈRE PARTIE\n'):b], s[b + len('\nDEUXIÈME PARTIE\n'):]]
    os.makedirs(sys.argv[3], exist_ok=True)
    for i, t in enumerate(parts):
        calls = [n for n in notes if '[' + n + ']' in t]
        t = t.rstrip() + '\n\n' + '\n\n'.join('[Note ' + n + ': ' + notes[n] + ']' for n in calls) + '\n\nFIN\n'
        open(os.path.join(sys.argv[3], 'p%d.txt' % (i + 1)), 'w', encoding='utf8').write(t)
        print('partie', i + 1, 'notes', calls)
    sys.exit()
C1 = json.load(open(sys.argv[2], encoding='utf8')); C2 = json.load(open(sys.argv[3], encoding='utf8'))
assert [c['n'] for c in C1] == ROM[:15] and [c['n'] for c in C2] == ROM[:16], ([c['n'] for c in C1], [c['n'] for c in C2])
for c in C1: c['n'] = 'I' + str(ROM.index(c['n']) + 1)
for c in C2: c['n'] = 'II' + str(ROM.index(c['n']) + 1)
C = C1 + C2
for c in C:
    out = []
    for p in c['paras']:
        p = re.sub(r'(^|\n|[.!?…»] |— |« )A (?=[a-zéèêàù])', r'\1À ', p)
        p = re.sub(r'\*(\w[^*]*?)([,.;:!?]?) \*(?=\w)', r'*\1*\2 ', p)  # « *Shannon, *posté » (italique mal refermé)
        for a, b in FIX: p = p.replace(a, b)
        assert '[' not in p and ']' not in p and '_' not in p and 'Gutenberg' not in p, (c['n'], p[:80])
        out.append(p)
    c['paras'] = out
assert all(a not in json.dumps(C, ensure_ascii=False) for a, b in FIX)
json.dump(C, open(sys.argv[4], 'w', encoding='utf8'), ensure_ascii=False, indent=0)
print(len(C), 'chapitres')
