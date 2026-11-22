# autour_texte.py pre source.txt propre.txt, puis gut.py propre.txt ch.json, puis autour_texte.py post ch.json sortie.json :
# retouches d'« Autour de la Lune » (Gutenberg 46111, édition Hetzel illustrée).
# Avant gut.py : les légendes des gravures (« [Illustration: …] », parfois sur deux lignes) partent ; le « CHAPITRE
# PRÉLIMINAIRE » et ses deux lignes de titre deviennent une « PRÉFACE » (id « P ») que la fiche renomme ; les notes de
# Verne, en retrait sous le paragraphe (« [1] Il est bien entendu… »), prennent la forme « [Note 1: …] » que gut.py range
# à leur appel. Après gut.py : les deux formules de Barbicane (chapitre IV), saisies en texte (« v^2 », « v_{o} »),
# reprennent exposants et indices ; le tiret collé des dialogues prend ses espaces, et le « A » sans accent en tête
# de phrase redevient « À ».
import json, re, sys
if sys.argv[1] == 'pre':
    L = open(sys.argv[2], encoding='utf8').read().replace('\r', '').split('\n'); out = []; i = 0
    while i < len(L):
        l = L[i]
        if l.lstrip().startswith('[Illustration'):  # la légende, jusqu'au « ] »
            while not L[i].rstrip().endswith(']'): i += 1
            i += 1; continue
        if l.strip() == 'CHAPITRE PRÉLIMINAIRE':
            out.append('PRÉFACE'); i += 1
            while not L[i].strip(): i += 1
            while L[i].strip(): i += 1  # « QUI RÉSUME LA PREMIÈRE PARTIE… / POUR SERVIR DE PRÉFACE A LA SECONDE. »
            continue
        m = re.match(r'^  \[(\d+)\] (.*)$', l)
        if m:  # la note en retrait, jusqu'à la ligne vide
            t = [m.group(2).strip()]; i += 1
            while L[i].strip(): t.append(L[i].strip()); i += 1
            out.append('[Note ' + m.group(1) + ': ' + ' '.join(t) + ']'); continue
        out.append(l); i += 1
    open(sys.argv[3], 'w', encoding='utf8').write('\n'.join(out))
    sys.exit()
def formule(p):
    p = p.replace('v_{o}^2', 'v₀²').replace('v^2', 'v²').replace("m'/m", 'm′/m').replace(' - ', ' − ')
    return re.sub(r'^1/2\(', '½ (', p)
C = json.load(open(sys.argv[2], encoding='utf8')); n = 0
for c in C:
    out = []
    for p in c['paras']:
        if '^' in p or '_{' in p: p = '*' + formule(p) + '*'; n += 1
        p = re.sub(r'^—\s*', '— ', p); p = re.sub(r'(?<=\S)\s*—\s*(?=\S)', ' — ', p)  # « —Et le moyen », « Lune,—oui »
        p = re.sub(r'(^|[.!?…»] |— |« )A (?=[a-zéèêàù])', r'\1À ', p)
        assert '[' not in p and ']' not in p and '_' not in p, (c['n'], p[:80])
        out.append(p)
    c['paras'] = out
assert len(C) == 24 and C[0]['n'] == 'P', [c['n'] for c in C]
assert n == 2, n
json.dump(C, open(sys.argv[3], 'w', encoding='utf8'), ensure_ascii=False, indent=0)
print(n, 'formules')
