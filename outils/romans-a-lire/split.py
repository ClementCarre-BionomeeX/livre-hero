# split.py chapters.json pages.json [target] : découpe chaque chapitre en pages (~target mots) aux limites de paragraphe,
# et imprime un aperçu (début et fin de chaque page) pour écrire les titres.
import json, sys
C = json.load(open(sys.argv[1], encoding='utf8')); T = int(sys.argv[3]) if len(sys.argv) > 3 else 750
out = []
for c in C:
    ps = c['paras']; w = [len(p.split()) for p in ps]; tot = sum(w)
    n = max(1, round(tot / T)); goal = tot / n
    pages = []; cur = []; acc = 0; done = 0
    for i, p in enumerate(ps):
        cur.append(i); acc += w[i]; done += w[i]
        left = tot - done
        if len(pages) < n - 1 and acc >= goal * 0.85 and left >= goal * 0.5:
            # ne pas couper juste après une ligne qui annonce une réplique (« : »)
            if p.rstrip().endswith(':'): continue
            pages.append(cur); cur = []; acc = 0
    if cur: pages.append(cur)
    c['pages'] = pages
    for k, pg in enumerate(pages):
        words = sum(w[i] for i in pg)
        first = ps[pg[0]]; last = ps[pg[-1]]
        print(f"{c['n']}_{k+1} [{pg[0]}-{pg[-1]}] {words}m | {' '.join(first.split()[:22])} … {' '.join(last.split()[-10:])}")
json.dump(C, open(sys.argv[2], 'w', encoding='utf8'), ensure_ascii=False)
