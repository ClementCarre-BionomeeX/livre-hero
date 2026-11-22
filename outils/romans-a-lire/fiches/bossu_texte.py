# bossu_texte.py ch.json sortie.json : retouches du « Bossu » après elg.py (div4, parties div3 ; édition d'Ebooks
# libres et gratuits). La saisie garde « oe » pour « œ » (cœur, œil, sœur…) et « A » pour « À » en majuscule : on les
# remet. Quelques paragraphes coupés au milieu d'une phrase (un paragraphe qui commence en minuscule, ou après « M. »)
# sont recollés ; « ! . », « . . » et une apostrophe inverse égarée sont corrigés.
import json, re, sys
C = json.load(open(sys.argv[1], encoding='utf8')); n = 0
def fix(p):
    p = re.sub(r'oe(?=\w)(?!ll)', 'œ', p)  # sauf moelle, moelleux
    p = re.sub(r'\bOe(?=\w)', 'Œ', p)
    p = re.sub(r'\bA (?=[a-zàâéèêîôûç]|[A-Z][a-zé]|M\.|l\'|L\')', 'À ', p)
    p = re.sub(r'\bEve\b', 'Ève', p).replace('Merœur', 'Mercœur')
    p = re.sub(r'([!?.]) \.$', r'\1', p).replace(' .', '.').replace('.`', '.')
    return p
for c in C:
    out = []
    for p in c['paras']:
        if out and (re.match(r'^[a-zé]', p) or out[-1].endswith(' M.')): out[-1] += ' ' + p; continue
        out.append(p)
    new = [fix(p) for p in out]
    n += len(c['paras']) - len(new) + sum(a != b for a, b in zip(new, out)); c['paras'] = new
json.dump(C, open(sys.argv[2], 'w', encoding='utf8'), ensure_ascii=False, indent=0)
print(n, 'retouches')
