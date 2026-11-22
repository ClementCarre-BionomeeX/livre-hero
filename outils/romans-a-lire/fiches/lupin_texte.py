# lupin_texte.py source.txt ch.json : « Arsène Lupin gentleman-cambrioleur » (Gutenberg 32854, édition Lafitte 1907).
# Les nouvelles sont séparées par une ligne « ------ » suivie du titre ; on saute la dédicace et la préface de Claretie,
# et l'on s'arrête à « FIN ». Paragraphes séparés par des lignes vides ; « * * * » sépare les scènes ; _…_ devient *…*.
import json, re, sys
import os; sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')); from typo import typo
ROM = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
L = open(sys.argv[1], encoding='utf8').read().replace('\r', '').split('\n')
end = next(i for i, l in enumerate(L) if l.strip() == 'FIN')
cuts = [i for i, l in enumerate(L[:end]) if l.strip() == '------']
blocks = []
for k, a in enumerate(cuts):
    b = cuts[k + 1] if k + 1 < len(cuts) else end
    blocks.append(L[a + 1:b])
chs = []
for blk in blocks:
    lines = [l for l in blk]
    j = next(i for i, l in enumerate(lines) if l.strip())
    head = lines[j].strip()
    if head in ('PRÉFACE',) or head.startswith('À Pierre'): continue
    paras = []; buf = []
    def flush():
        if buf:
            t = ''
            for x in buf:
                x = x.strip(); t = t + x if t.endswith('-') and not t.endswith('--') and not t.endswith(' -') else (t + ' ' + x if t else x)
            paras.append(t)
        buf.clear()
    for l in lines[j + 1:]:
        if not l.strip(): flush(); continue
        if re.match(r'^\s*\*(\s+\*)+\s*$', l): flush(); paras.append('* * *'); continue
        buf.append(l)
    flush()
    out = []
    for p in paras:
        if p == '* * *': out.append(p); continue
        p = re.sub(r'_([^_]+)_', r'*\1*', p)
        p = re.sub(r'([cCsSmMvVnN]|^|\W)([oO])e(?=u|il)', lambda m: m.group(1) + ('œ' if m.group(2) == 'o' else 'Œ'), p)
        out.append(typo(p))
    chs.append({'n': ROM[len(chs)], 'head': head, 'paras': out})
json.dump(chs, open(sys.argv[2], 'w', encoding='utf8'), ensure_ascii=False, indent=0)
for c in chs: print(c['n'], c['head'][:50], len(c['paras']), sum(len(p.split()) for p in c['paras']))
