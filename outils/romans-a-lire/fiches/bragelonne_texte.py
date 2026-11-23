# bragelonne_texte.py pre t1 t2 t3 t4 sortie.txt titres.json | post ch.json titres.json sortie.json : retouches du
# « Vicomte de Bragelonne » (Gutenberg n° 13947 à 13950, miroir orkeilius/gutenberg_fr_mirror, saisie d'Ebooks libres
# et gratuits, quatre tomes). pre : les tables du début partent ; chaque tête « Chapitre XIII — Titre » (sur une ou
# deux lignes) devient « CHAPITRE XIII. » puis le titre en capitales, que gut.py sait lire ; les titres de Dumas sont
# gardés à part (titres.json) ; la licence de fin de tome part aussi. post : ils reviennent sur leurs chapitres ; la mention « Fin du tome » part ;
# contrôles (268 chapitres, plus de crochets ni de soulignés).
import json, re, sys
# Au tome II, de CXII à CXXX, la saisie a collé le titre et la première phrase du chapitre : on les recoupe ici.
COLLES = ["Ce que l’on prend en chassant aux papillons", "Le ballet des Saisons", "Les nymphes du parc de Fontainebleau",
          "Ce qui se disait sous le chêne royal", "L’inquiétude du roi", "Le secret du roi", "Courses de nuit",
          "Où Madame acquiert la preuve que l’on peut, en écoutant, entendre ce qui se dit", "La correspondance d’Aramis",
          "Le commis d’ordre", "Fontainebleau à deux heures du matin", "Le labyrinthe",
          "Comment Malicorne avait été délogé de l’hôtel du Beau-Paon", "Ce qui s’était passé en réalité à l’auberge du Beau-Paon",
          "Un jésuite de la onzième année", "Le secret de l’État", "Mission", "Heureux comme un prince",
          "Histoire d’une naïade et d’une dryade"]
def pre(*a):
    *srcs, out, tit = a; T = []; parts = []
    for src in srcs:
        t0 = open(src, encoding='utf8').read().replace('\r', ''); L = t0[:t0.index('*** END OF')].split('\n')
        i = next(k for k, l in enumerate(L) if re.match(r'^Chapitre [IVXLC]+ — ', l) and k > 0 and not L[k - 1].strip() and k > 60)
        L = L[i:]; res = []; k = 0
        while k < len(L):
            m = re.match(r'^Chapitre ([IVXLC]+) — (.*)$', L[k])
            if m:
                t = m.group(2).strip(); k += 1
                while k < len(L) and L[k].strip(): t += ' ' + L[k].strip(); k += 1
                debut = next((t[len(c) + 1:] for c in COLLES if t.startswith(c + ' ')), None)
                if debut: t = t[:len(t) - len(debut) - 1]
                T.append(t); res += ['CHAPITRE %s.' % m.group(1), t if t.upper() in ('ÉPILOGUE', 'CONCLUSION') else t.upper()]  # « ÉPILOGUE » seul ouvrirait un chapitre E
                if debut: res += ['', debut, '']
                continue
            res.append(L[k]); k += 1
        parts.append('\n'.join(res))
    open(out, 'w', encoding='utf8').write('\n\n'.join(parts))
    json.dump(T, open(tit, 'w', encoding='utf8'), ensure_ascii=False, indent=0)
def post(a, tit, b):
    C = json.load(open(a, encoding='utf8')); T = json.load(open(tit, encoding='utf8'))
    assert len(C) == len(T) == 268, (len(C), len(T))
    assert sum(1 for t in T if any(t == c for c in COLLES)) == len(COLLES)
    for c, t in zip(C, T):
        c['head'] = t.replace("’", "'").replace('_', '')  # « _Remember_! » : titre sans soulignés
        if c['paras'] and re.match(r'^Fin du tome [IV]+$', c['paras'][-1]): c['paras'].pop()  # la mention de fin de tome
        for p in c['paras']: assert not re.search(r'[\[\]_]|Gutenberg', p), p[:80]
    json.dump(C, open(b, 'w', encoding='utf8'), ensure_ascii=False, indent=0)
if sys.argv[1] == 'pre': pre(*sys.argv[2:])
else: post(*sys.argv[2:5])
