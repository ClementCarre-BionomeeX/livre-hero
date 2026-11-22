# carpathes_texte.py pre source.txt sortie.txt, puis gut.py sortie.txt ch.json, puis carpathes_texte.py post ch.json ch2.json :
# retouches du « Château des Carpathes » (Gutenberg 5082). Les chapitres de Verne n'ont pas de titre : une ligne
# « SANS TITRE » est posée sous chaque numéro pour que gut.py ne prenne pas la première phrase pour un titre. Les notes
# de Verne sont entre crochets au fil du texte : elles vont entre parenthèses en italique, comme ailleurs. Le « Fin »
# final devient « FIN », où gut.py s'arrête. Après gut.py : « A » sans accent en tête de phrase redevient « À », et
# les majuscules sans accent de la saisie (Etes, Etait, Ecosse, Elisée) prennent le leur ; sept fautes de frappe corrigées.
import json, re, sys
FIX = [('saluat-il', 'salua-t-il'), ('répliquat-il', 'répliqua-t-il'), ('génerations', 'générations'), ('personellement', 'personnellement'),
       ('représentationdu', 'représentation du'), ('àune', 'à une'), ('clients !Il', 'clients ! Il')]
if sys.argv[1] == 'pre':
    s = open(sys.argv[2], encoding='utf8').read().replace('\r', '')
    s = re.sub(r'\n([IVX]+)\n', r'\n\1\n\nSANS TITRE\n', s)
    n = len(re.findall(r'\[(?!EBook|This file|Last updated)[^\]]*\]', s))
    s = re.sub(r'\s*\[(?!EBook|This file|Last updated)([^\]]*)\]', lambda m: ' (_Note : ' + re.sub(r'\s+', ' ', m.group(1)).strip().rstrip('.').replace('_', '') + '._)', s)
    s = s.replace('\nFin\n', '\nFIN\n')  # gut.py s'arrête là
    open(sys.argv[3], 'w', encoding='utf8').write(s); print(n, 'notes'); sys.exit()
C = json.load(open(sys.argv[2], encoding='utf8'))
ROM = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII"]
assert [c['n'] for c in C] == ROM, [c['n'] for c in C]
for c in C:
    out = []
    for p in c['paras']:
        p = re.sub(r'(^|[.!?…»] |— |« )A (?=[a-zéèêàù])', r'\1À ', p)
        for a, b in FIX: p = p.replace(a, b)
        p = re.sub(r'\bE(?=tait\b|cosse\b|lisée\b)', 'É', p); p = re.sub(r'\bEtes\b', 'Êtes', p)
        assert '[' not in p and ']' not in p and '_' not in p and 'Gutenberg' not in p, (c['n'], p[:80])
        out.append(p)
    c['paras'] = out
assert all(a not in json.dumps(C, ensure_ascii=False) for a, b in FIX)
json.dump(C, open(sys.argv[3], 'w', encoding='utf8'), ensure_ascii=False, indent=0)
print(len(C), 'chapitres')
