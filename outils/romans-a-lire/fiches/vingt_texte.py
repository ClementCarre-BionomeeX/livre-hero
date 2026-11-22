# vingt_texte.py ch.json sortie.json : retouches de « Vingt mille lieues sous les mers » après elg.py (édition
# illustrée d'Ebooks libres et gratuits). Les légendes des gravures (paragraphes « [FIGURE] … ») sont retirées : le
# livre n'a pas les images. Le « FIN » final et une coquille (« Éccclésiaste ») aussi. La note du correcteur d'ELG (« sic ») n'est pas de Verne : retirée aussi.
import json, re, sys
C = json.load(open(sys.argv[1], encoding='utf8')); n = 0
for c in C:
    keep = []
    for p in c['paras']:
        if p.startswith('[FIGURE]'):
            assert len(p.split()) <= 25, p; n += 1; continue
        p = re.sub(r" \(\*Note de l'auteur : sic\. Il faut probablement lire minéral\. \(Note du correcteur – ELG\.\)\.\*\)", '', p)
        p = re.sub(r" \(\*Note de l'auteur : sic\.[^)]*\)[^)]*\)", '', p)
        assert '[FIGURE]' not in p and 'ELG' not in p, p[:80]
        keep.append(p)
    c['paras'] = [x.replace('Éccclésiaste', 'Ecclésiaste') for x in keep if x != 'FIN']
json.dump(C, open(sys.argv[2], 'w', encoding='utf8'), ensure_ascii=False, indent=0)
print(n, 'légendes retirées')
