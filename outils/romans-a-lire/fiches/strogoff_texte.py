# strogoff_texte.py ch.json sortie.json : retouches de « Michel Strogoff » après elg.py (édition d'Ebooks libres et
# gratuits). Les titres de chapitres, souvent en capitales dans la source, sont remis en minuscules avec leurs noms
# propres ; quelques coquilles de saisie sont corrigées (espace manquante avant un nom de navire en italique,
# « — , » après une incise, « — à » en tête de réplique, « …. »).
import json, re, sys
TITRES = {
    'I1': "Une fête au Palais-Neuf", 'I2': "Russes et Tartares", 'I3': "Michel Strogoff",
    'I4': "De Moscou à Nijni-Novgorod", 'I5': "Un arrêté en deux articles", 'I6': "Frère et sœur",
    'I7': "En descendant le Volga", 'I8': "En remontant la Kama", 'I9': "En *tarentass* nuit et jour",
    'I10': "Un orage dans les monts Ourals", 'I11': "Voyageurs en détresse", 'I12': "Une provocation",
    'I13': "Au-dessus de tout, le devoir", 'I14': "Mère et fils", 'I15': "Les marais de la Baraba",
    'I16': "Un dernier effort", 'I17': "Versets et chansons",
    'II1': "Un camp tartare", 'II2': "Une attitude d'Alcide Jolivet", 'II3': "Coup pour coup",
    'II4': "L'entrée triomphale", 'II5': "Regarde de tous tes yeux, regarde !", 'II6': "Un ami de grande route",
    'II7': "Le passage de l'Yeniseï", 'II8': "Un lièvre qui traverse la route", 'II9': "Dans la steppe",
    'II10': "Baïkal et Angara", 'II11': "Entre deux rives", 'II12': "Irkoutsk", 'II13': "Un courrier du czar",
    'II14': "La nuit du 5 au 6 octobre", 'II15': "Conclusion",
}
C = json.load(open(sys.argv[1], encoding='utf8')); n = 0
def fix(p):
    p = re.sub(r"([a-zéèàù])\*([A-Z][^*]{1,40}\*)", r"\1 *\2", p)   # « le*Caucase* » → « le *Caucase* »
    p = p.replace(' — , ', ' —, ').replace('….', '…').replace('!…J', '!… J')
    p = re.sub(r'^— à\b', '— À', p)
    p = p.replace('à là tombée', 'à la tombée').replace("l'égypte", "l'Égypte").replace('Ce jour là', 'Ce jour-là')
    p = p.replace('présent a cette entrevue', 'présent à cette entrevue')
    p = p.replace('Sire, unhe nouvelle', 'Sire, une nouvelle').replace('Takhsir,répondit', 'Takhsir, répondit')
    return p
for c in C:
    assert c['n'] in TITRES, c['n']
    c['head'] = TITRES[c['n']]
    new = [fix(p) for p in c['paras']]
    n += sum(a != b for a, b in zip(new, c['paras'])); c['paras'] = new
assert len(C) == len(TITRES)
json.dump(C, open(sys.argv[2], 'w', encoding='utf8'), ensure_ascii=False, indent=0)
print(n, 'paragraphes retouchés')
