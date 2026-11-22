# quatre_texte.py chapitres.json : retouches de « La Marque des quatre » après gut.py (Gutenberg 76433, traduction Hachette 1896).
# La saisie garde « A » pour « À » en majuscule ; on le rétablit devant un mot (« A moi », « A Greenwich »).
import json, re, sys
P = sys.argv[1]; chs = json.load(open(P, encoding='utf8'))
assert len(chs) == 12 and chs[0]['n'] == 'I' and chs[-1]['n'] == 'XII'
n = 0
for c in chs:
    for i, p in enumerate(c['paras']):
        q = re.sub(r'(^|[\s«—(])A (?=[a-zàâéèêîôûçA-Z])', r'\1À ', p)
        n += q != p; c['paras'][i] = q
for c in chs:
    for p in c['paras']:
        assert '[' not in p and '_' not in p and '--' not in p and 'Gutenberg' not in p, (c['n'], p[:80])
        assert not re.search(r'(^|[\s«—(])A ', p), (c['n'], p[:80])
json.dump(chs, open(P, 'w', encoding='utf8'), ensure_ascii=False, indent=0)
print('ok', n)
