# deuxans_texte.py ch.json sortie.json : retouche de « Deux ans de vacances » après elg.py (édition d'Ebooks libres et
# gratuits) : « — , » après une incise devient « —, ». Verne ne titre pas ses chapitres (la tête reste vide).
import json, sys
C = json.load(open(sys.argv[1], encoding='utf8')); n = 0
for c in C:
    new = [p.replace(' — , ', ' —, ') for p in c['paras']]
    n += sum(a != b for a, b in zip(new, c['paras'])); c['paras'] = new
json.dump(C, open(sys.argv[2], 'w', encoding='utf8'), ensure_ascii=False, indent=0)
print(n, 'paragraphes retouchés')
