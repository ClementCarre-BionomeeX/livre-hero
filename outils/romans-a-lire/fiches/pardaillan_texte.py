# pardaillan_texte.py tome1.json tome2.json sortie.json : « Les Pardaillan » (Gutenberg n° 13207) et sa suite
# « L'Épopée d'amour » (n° 13339), passés chacun par gut.py, réunis en un livre en deux parties (ids « I1 »…,
# « II1 »…). L'annonce de la suite, à la fin du premier tome, est retirée. La saisie garde « A » pour « À » et
# « Etes », « Etait » sans accent : on les remet. Deux paragraphes coupés au milieu d'une phrase sont recollés, un
# « _ » orphelin retiré, « *** » devient « * * * », « — , » devient « —, ».
import json, re, sys
T1 = json.load(open(sys.argv[1], encoding='utf8')); T2 = json.load(open(sys.argv[2], encoding='utf8'))
assert len(T1) == 37 and len(T2) == 49, (len(T1), len(T2))
assert T1[-1]['paras'][-2:] == ["C'est ce que nos lecteurs connaîtront en lisant :", "L'ÉPOPÉE D'AMOUR"]
T1[-1]['paras'] = T1[-1]['paras'][:-2]
def fix(p):
    p = re.sub(r'\bA (?=[a-zàâéèêîôûç]|[A-Z][a-zé]|M\.|l\'|L\')', 'À ', p)
    p = re.sub(r'\bEt(es|ait|ant|ions|iez|aient)\b', r'Ét\1', p)
    p = p.replace(' — , ', ' —, ').replace(' —,', ' —,')
    if p == '***': p = '* * *'
    if p.startswith('_') and p.count('_') == 1: p = p[1:]
    return p
def glue(ps):
    out = []
    for p in ps:
        if out and (re.match(r'^[a-zé]', p) or (out[-1].startswith('_') and out[-1].count('_') == 1 and p.endswith('_'))):
            out[-1] += ' ' + p; continue
        out.append(p)
    return [re.sub(r'(?<![\w*])_([^_]+)_(?![\w*])', r'*\1*', p) for p in out]
out = []
for p, T in (('I', T1), ('II', T2)):
    for k, c in enumerate(T):
        out.append({'n': p + str(k + 1), 'head': c['head'], 'paras': [fix(x) for x in glue(c['paras'])]})
json.dump(out, open(sys.argv[3], 'w', encoding='utf8'), ensure_ascii=False, indent=0)
print(len(out), 'chapitres')
