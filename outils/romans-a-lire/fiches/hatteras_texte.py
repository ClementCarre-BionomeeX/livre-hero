# hatteras_texte.py pre source.txt dossier/, puis gut.py dossier/p1.txt c1.json et gut.py dossier/p2.txt c2.json, puis
# hatteras_texte.py post c1.json c2.json sortie.json : retouches des « Aventures du capitaine Hatteras » (Gutenberg 11927).
# Avant gut.py : le livre est coupé en ses deux parties (« Les Anglais au pôle Nord », « Le désert de glace »), dont les
# chapitres recommencent à I. Les notes de Verne sont en retrait sous le paragraphe et numérotées par page de l'édition
# papier (« [1] » revient plusieurs fois dans un chapitre) : chacune va à l'appel « [n] » le plus proche au-dessus d'elle,
# entre parenthèses en italique, son italique à elle devenant des guillemets. Un italique non refermé de la saisie
# (« l'_Hérald et _le Plover_ », « _le Forward allait ») est refermé ; l'inscription « [E I] 1849 » de la pierre des marées perd ses crochets.
# Après gut.py : les chapitres prennent les ids I1…I32 et II1…II27, et le « A » sans accent en tête de phrase redevient « À ».
import json, os, re, sys
ROM = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII",
       "XVIII", "XIX", "XX", "XXI", "XXII", "XXIII", "XXIV", "XXV", "XXVI", "XXVII", "XXVIII", "XXIX", "XXX", "XXXI", "XXXII"]
if sys.argv[1] == 'pre':
    L = open(sys.argv[2], encoding='utf8').read().replace('\r', '').split('\n'); out = []; i = 0; n = 0
    while i < len(L):
        m = re.match(r'^\s+\[(\d+)\]\s+(.*)$', L[i])
        if m:  # la note, jusqu'à la ligne vide, rangée à l'appel le plus proche au-dessus
            t = [m.group(2).strip()]; i += 1
            while i < len(L) and L[i].strip(): t.append(L[i].strip()); i += 1
            t = re.sub(r'_([^_]+)_', r'« \1 »', ' '.join(t)).rstrip().rstrip('.')
            call = '[' + m.group(1) + ']'
            j = next(j for j in range(len(out) - 1, -1, -1) if call in out[j])
            out[j] = out[j].replace(call, ' (*Note : ' + t + '.*)', 1); n += 1; continue
        out.append(L[i]); i += 1
    s = '\n'.join(out).replace("l'_Hérald et\n_le Plover_", "l'_Hérald_ et\n_le Plover_")  # italiques non refermés de la saisie
    s = s.replace("destinée, _le Forward allait", "destinée, _le Forward_ allait")
    s = re.sub(r'\n +\[E  I\]\n +1849\n', '\nE I · 1849\n', s)  # l'inscription de la pierre des marées (chapitre I15)
    k = s.index('\nSECONDE PARTIE\n')
    p1 = s[:k].replace('PREMIÈRE PARTIE\n\nLES ANGLAIS AU PÔLE NORD', ''); p2 = s[k:].replace('SECONDE PARTIE\n\nLE DÉSERT DE GLACE', '')
    open(os.path.join(sys.argv[3], 'p1.txt'), 'w', encoding='utf8').write(p1)
    open(os.path.join(sys.argv[3], 'p2.txt'), 'w', encoding='utf8').write(p2 + '\n')
    print(n, 'notes'); sys.exit()
C = []
for part, f in (('I', sys.argv[2]), ('II', sys.argv[3])):
    cs = json.load(open(f, encoding='utf8'))
    assert [c['n'] for c in cs] == ROM[:len(cs)], [c['n'] for c in cs]
    for c in cs:
        c['n'] = part + str(ROM.index(c['n']) + 1); C.append(c)
for c in C:
    out = []
    for p in c['paras']:
        p = re.sub(r'(^|[.!?…»] |— |« )A (?=[a-zéèêàù])', r'\1À ', p)
        assert '[' not in p and ']' not in p and '_' not in p and 'Gutenberg' not in p, (c['n'], p[:80])
        out.append(p)
    c['paras'] = out
assert len(C) == 59 and C[31]['n'] == 'I32' and C[-1]['n'] == 'II27', len(C)
json.dump(C, open(sys.argv[4], 'w', encoding='utf8'), ensure_ascii=False, indent=0)
print(len(C), 'chapitres')
