# tour_texte.py ch.json sortie.json : retouches du « Tour du monde en quatre-vingts jours » après elg.py (édition
# d'Ebooks libres et gratuits). Les titres de chapitres, souvent en capitales dans la source, sont remis en minuscules
# avec leurs noms propres. Les légendes des gravures de l'édition Hetzel (« [FIGURE] … »), qui coupent le récit, sont
# retirées. « — , » après une incise devient « —, ».
import json, sys
TITRES = [
    "Dans lequel Phileas Fogg et Passepartout s'acceptent réciproquement l'un comme maître, l'autre comme domestique",
    "Où Passepartout est convaincu qu'il a enfin trouvé son idéal",
    "Où s'engage une conversation qui pourra coûter cher à Phileas Fogg",
    "Dans lequel Phileas Fogg stupéfie Passepartout, son domestique",
    "Dans lequel une nouvelle valeur apparaît sur la place de Londres",
    "Dans lequel l'agent Fix montre une impatience bien légitime",
    "Qui témoigne une fois de plus de l'inutilité des passeports en matière de police",
    "Dans lequel Passepartout parle un peu plus peut-être qu'il ne conviendrait",
    "Où la mer Rouge et la mer des Indes se montrent propices aux desseins de Phileas Fogg",
    "Où Passepartout est trop heureux d'en être quitte en perdant sa chaussure",
    "Où Phileas Fogg achète une monture à un prix fabuleux",
    "Où Phileas Fogg et ses compagnons s'aventurent à travers les forêts de l'Inde et ce qui s'ensuit",
    "Dans lequel Passepartout prouve une fois de plus que la fortune sourit aux audacieux",
    "Dans lequel Phileas Fogg descend toute l'admirable vallée du Gange sans même songer à la voir",
    "Où le sac aux bank-notes s'allège encore de quelques milliers de livres",
    "Où Fix n'a pas l'air de connaître du tout les choses dont on lui parle",
    "Où il est question de choses et d'autres pendant la traversée de Singapore à Hong-Kong",
    "Dans lequel Phileas Fogg, Passepartout, Fix, chacun de son côté, va à ses affaires",
    "Où Passepartout prend un trop vif intérêt à son maître, et ce qui s'ensuit",
    "Dans lequel Fix entre directement en relation avec Phileas Fogg",
    "Où le patron de la *Tankadère* risque fort de perdre une prime de deux cents livres",
    "Où Passepartout voit bien que, même aux antipodes, il est prudent d'avoir quelque argent dans sa poche",
    "Dans lequel le nez de Passepartout s'allonge démesurément",
    "Pendant lequel s'accomplit la traversée de l'océan Pacifique",
    "Où l'on donne un léger aperçu de San Francisco, un jour de meeting",
    "Dans lequel on prend le train express du chemin de fer du Pacifique",
    "Dans lequel Passepartout suit, avec une vitesse de vingt milles à l'heure, un cours d'histoire mormone",
    "Dans lequel Passepartout ne put parvenir à faire entendre le langage de la raison",
    "Où il sera fait le récit d'incidents divers qui ne se rencontrent que sur les rail-roads de l'Union",
    "Dans lequel Phileas Fogg fait tout simplement son devoir",
    "Dans lequel l'inspecteur Fix prend très sérieusement les intérêts de Phileas Fogg",
    "Dans lequel Phileas Fogg engage une lutte directe contre la mauvaise chance",
    "Où Phileas Fogg se montre à la hauteur des circonstances",
    "Qui procure à Passepartout l'occasion de faire un jeu de mots atroce, mais peut-être inédit",
    "Dans lequel Passepartout ne se fait pas répéter deux fois l'ordre que son maître lui donne",
    "Dans lequel Phileas Fogg fait de nouveau prime sur le marché",
    "Dans lequel il est prouvé que Phileas Fogg n'a rien gagné à faire ce tour du monde, si ce n'est le bonheur",
]
C = json.load(open(sys.argv[1], encoding='utf8')); n = f = 0
assert len(C) == len(TITRES)
for c, t in zip(C, TITRES):
    c['head'] = t
    ps = []
    for p in c['paras']:
        if p.startswith('[FIGURE]'): f += 1; continue
        q = p.replace(' — , ', ' —, '); n += q != p; ps.append(q)
    c['paras'] = ps
    assert not any('[FIGURE]' in p for p in ps)
json.dump(C, open(sys.argv[2], 'w', encoding='utf8'), ensure_ascii=False, indent=0)
print(f, 'légendes retirées,', n, 'paragraphes retouchés')
