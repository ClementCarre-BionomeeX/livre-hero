# Fiche de « La Reine de la Côte noire » pour livre.py (Robert E. Howard, Weird Tales, mai 1934 ; traduction nouvelle par Claude, 2026).
# Texte : /mnt/project-files/livre-heros/classiques/reine/NN.txt (d'après Gutenberg 42183, « Queen of the Black Coast »,
# fichier en latin-1), passé par traduction.py (pages C1_1…). Les épigraphes du « Chant de Bêlit » sont traduites en vers libres.
# Ce qui doit rester caché jusqu'à sa page (titres de pages, qui, aspect, lieux, résumés) : ce qu'est l'être ailé et
# d'où viennent les hyènes (C3_1, C3_2) ; ce qui arrive aux hommes de N'Gora et à Bêlit (C3_3) ; la fin (C4_3, C5_1).
HEAD = """// « La Reine de la Côte noire » (Queen of the Black Coast), Robert E. Howard, 1934 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais paru dans Weird Tales
// en mai 1934 (Project Gutenberg n° 42183, domaine public). Les titres des chapitres et les épigraphes sont ceux de
// Howard, traduits ; les titres des pages et tout ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude."""

BASE = {
  "id": "reine",
  "title": "La Reine de la Côte noire",
  "subtitle": "Un récit de Conan le Cimmérien · Robert E. Howard, 1934",
  "summary": "Poursuivi par la garde d'Argos, un jeune barbare du Nord saute d'un étalon sur le pont d'une galère marchande qui part pour les côtes du sud. Le patron le prend à bord à contrecœur, et l'on descend vers Koush, le long de rivages où un nom fait trembler les marins : celui de Bêlit, la reine de la côte noire, et de sa galère, la *Tigresse*. Un récit de Conan le Cimmérien, de Robert E. Howard, en entier, dans une traduction nouvelle, sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  "tags": ["aventure", "fantastique", "mer"],
  "author": "Robert E. Howard · traduction de Claude (2026)",
  "lecture": True,
  "age": 15,
  "skin": "parchemin",
  "cover": {"motif": "vague", "color": "#3a1e22"},
  "glossary": None,
  "voice": "troisième personne, passé",
  "version": 1,
  "notice": {
    "title": "Un récit de 1934",
    "text": [
      "Robert E. Howard publie *La Reine de la Côte noire* en mai 1934 dans *Weird Tales*, une revue américaine de récits étranges. C'est l'une des aventures de Conan le Cimmérien, dans l'« âge hyborien », un passé imaginaire plein de royaumes et de dieux inventés. Howard est mort en 1936, à trente ans ; ses récits sont dans le domaine public. Celui-ci est souvent tenu pour l'un de ses plus beaux.",
      "Chaque chapitre s'ouvre sur quelques vers du « Chant de Bêlit », écrits par Howard. La traduction, nouvelle, faite pour cette bibliothèque, les rend en vers libres, et suit le récit de près dans son style chargé et rapide.",
      "Howard écrit à une époque où les revues américaines peignaient volontiers les Africains en sauvages, et son récit en garde la marque : les corsaires de Bêlit et les villages de la côte n'y ont presque jamais de nom. La traduction garde l'histoire entière, mais retire une comparaison qui fait d'un homme noir une bête, et une phrase qui prête à tout un peuple le goût de l'or.",
      "C'est un récit violent, où l'on meurt beaucoup, souvent de façon horrible. On y parle aussi d'amour et de désir avec une grande franchise, sans scène crue.",
    ],
  },
  "intro": [],
  "world": {"start": {"place": "argos", "hour": 10, "gold": 0, "food": 0, "items": [], "kits": {"guerrier": [], "rodeur": [], "voleur": [], "mage": [], "pretre": [], "barde": []}}},
}

T = ["Conan se fait pirate", "Le Lotus noir", "L'horreur dans la jungle", "L'attaque venue du ciel", "Le bûcher"]
R = [
  "À Argos, Conan, poursuivi par la garde pour avoir tué un juge qui voulait lui faire trahir un ami, saute sur le pont de l'*Argus*, la galère du marchand Tito, qui part pour les côtes de Koush. Au sud de la Stygie, la *Tigresse* de Bêlit, une Shémite à la tête de corsaires noirs, rattrape l'*Argus*. Tito et ses marins sont tués ; Conan se bat seul sur le pont de la *Tigresse* jusqu'à ce que Bêlit arrête ses guerriers. Elle lui offre d'être son roi, et il accepte.",
  "Bêlit et Conan écument la côte. Bêlit veut remonter le Zarkheba, un fleuve empoisonné que tous évitent, pour piller une cité dont on parle. Un serpent géant enlève une vigie. Ils trouvent une cité en ruine, où un singe ailé les observe. Sous un autel piégé, ils découvrent un caveau plein de joyaux, et Bêlit se pare d'un collier de pierres rouges. La créature ailée crève les tonneaux d'eau ; Conan part en chercher dans la jungle avec vingt hommes, et s'endort sous le parfum du lotus noir.",
  "Dans son sommeil, Conan voit l'histoire de la cité : un peuple ailé très ancien, dégradé par les eaux du fleuve, dont il ne reste qu'un être, qui a changé en hyènes des guerriers stygiens égarés. Il voit aussi ses hommes fuir devant le monstre. Réveillé, il trouve N'Gora fou et les autres morts au pied d'une falaise. Au bord du fleuve, ses guerriers ont été dévorés, et Bêlit pend à la vergue de la *Tigresse*, au bout de son collier.",
  "Conan dresse pour Bêlit un bûcher sur la *Tigresse*, avec son butin, jette au fleuve les joyaux de la cité, et attend sur la pyramide. Il abat à l'arc la plupart des hyènes et tue les dernières à mains nues. La pyramide s'écroule ; l'être ailé fond sur lui, mais l'apparition de Bêlit l'arrête un instant, et Conan le coupe en deux. Les hyènes mortes redeviennent des hommes et tombent en poussière. Conan descend le fleuve sur la *Tigresse*.",
  "À l'embouchure, Conan lance vers le large la *Tigresse* en flammes, avec le corps de Bêlit, et reste seul sur la plage, face à la jungle.",
]
CHAPTERS = [{"title": "Chapitre " + str(i + 1) + " · " + t, "text": r} for i, (t, r) in enumerate(zip(T, R))]
CHAPTERS[0]["notice"] = True

PLACES = {
  "argos": {"ambiance": "port", "name": "Les quais d'Argos", "map": "cotenoire", "x": 30, "y": 8, "region": "Argos", "desc": "Une rue en pente qui descend aux quais, des pilotis, et des galères marchandes prêtes à partir."},
  "argus": {"ambiance": "mer", "name": "L'Argus", "map": "cotenoire", "x": 34, "y": 30, "region": "Les côtes du sud", "desc": "Une petite galère marchande d'Argos, haute de poupe, à la voile de soie rayée, avec vingt rameurs."},
  "cote": {"ambiance": "mer", "name": "Les côtes de Koush", "map": "cotenoire", "x": 38, "y": 55, "region": "Koush", "desc": "Des plages frangées de palmiers, une ligne de ressac, et des villages aux hauts murs sur le rivage."},
  "tigresse": {"ambiance": "mer", "name": "La Tigresse", "map": "cotenoire", "x": 40, "y": 62, "region": "Koush", "desc": "Une longue galère mince comme un serpent, quarante avirons de chaque bord, une flamme cramoisie au mât."},
  "fleuve": {"ambiance": "eau", "name": "Le Zarkheba", "map": "cotenoire", "x": 50, "y": 76, "region": "Le Sud", "desc": "Un fleuve large, sombre et trouble, entre des rives de jungle où aucune bête ne vient boire."},
  "cite": {"ambiance": "temple", "name": "La cité morte", "map": "cotenoire", "x": 60, "y": 82, "region": "Le Sud", "desc": "Des tours de pierre verte qui vacillent, des jetées brisées, une pyramide de marbre et un vieil autel."},
  "jungle": {"ambiance": "foret", "name": "La jungle du Zarkheba", "map": "cotenoire", "x": 64, "y": 86, "region": "Le Sud", "desc": "Des lianes pendues comme des pythons, un sol spongieux qui monte doucement, et un silence des premiers âges."},
  "plage": {"ambiance": "mer", "name": "L'embouchure du Zarkheba", "map": "cotenoire", "x": 46, "y": 70, "region": "Le Sud", "desc": "Une plage blanche à l'embouchure du fleuve, entre la mer et les palmes de la jungle."},
}

PEOPLE = {
  "conan": {"name": "Conan le Cimmérien", "aka": ["Conan", "Cimmérien"], "face": {"age": "jeune", "hair": "noir", "coif": "court", "beard": "sans", "iris": "bleu", "skin": "hale", "marks": ["cicatrice"]}, "qui": "Un jeune barbare de Cimmérie, venu chercher de l'emploi à Argos.", "aspect": {"allure": "grand, puissant, en armure noire", "visage": "crinière noire coupée au carré, yeux bleus", "signe": "casque à cornes, manteau écarlate"}},
  "tito": {"name": "Tito", "aka": ["Tito"], "face": {"age": "adulte", "hair": "noir", "coif": "court", "beard": "barbe", "shape": "carre", "skin": "hale"}, "qui": "Maître marinier d'Argos, patron de l'*Argus*, qui commerce avec les côtes de Koush.", "aspect": {"allure": "trapu, solide marin", "visage": "barbe noire"}},
  "belit": {"name": "Bêlit", "aka": ["Bêlit"], "f": True, "face": {"age": "jeune", "hair": "noir", "coif": "long", "iris": "noir", "skin": "clair"}, "qui": "Une Shémite, reine des corsaires de la côte noire, que les marchands redoutent.", "aspect": {"allure": "mince, souple comme une panthère", "visage": "cheveux noirs, yeux sombres brûlants", "signe": "la galère *Tigresse*"}},
  "nyaga": {"name": "N'Yaga", "aka": ["N'Yaga"], "face": {"age": "ancien", "hair": "gris", "coif": "court", "skin": "ebene"}, "qui": "Le vieux chaman de la *Tigresse*, qui soigne les blessés.", "aspect": {"allure": "vieil homme superstitieux", "signe": "ses herbes"}},
  "ngora": {"name": "N'Gora", "aka": ["N'Gora"], "face": {"age": "adulte", "hair": "noir", "coif": "court", "skin": "ebene"}, "qui": "Un sous-chef des guerriers de la *Tigresse*.", "aspect": {"allure": "grand lancier"}},
}
NO_AUTO = ["conan", "tito", "belit"]  # nommés à la première page (C1_1), Bêlit dans l'épigraphe
MEET = {"C1_1": ["conan", "tito"], "C1_3": ["belit"]}

WORDS = {
  "Argos": "Un royaume marchand de l'âge hyborien, au bord de la mer de l'Ouest, avec ses ports et ses galères.",
  "Koush": "Un royaume noir de la côte, au sud de la Stygie, où les marchands viennent acheter l'ivoire et le cuivre.",
  "Zingara": "Un royaume de l'âge hyborien, au nord d'Argos, sur la même côte.",
  "Shem": "Un pays de prairies et de déserts au sud des royaumes hyboriens, entre Argos et la Stygie.",
  "Shémite|Shémites|shémite": "Du Shem, un pays de prairies et de déserts au sud des royaumes hyboriens.",
  "Stygie|Stygiens": "Un vieux royaume sombre au sud du Shem, le long du fleuve Styx, gouverné par des prêtres et des sorciers.",
  "Styx": "Le grand fleuve de la Stygie, qui se jette dans la mer à Khemi.",
  "Khemi": "Le grand port de la Stygie, à l'embouchure du Styx, aux châteaux noirs.",
  "Set": "Le dieu-serpent des Stygiens, que les autres peuples tiennent pour un démon.",
  "Hyborien|Hyboriens": "Les peuples des royaumes du nord et de l'ouest de l'âge hyborien, comme Argos, l'Aquilonie ou la Némédie.",
  "Cimmérien|Cimmériens": "De Cimmérie, un pays de collines sombres et froides, loin au nord, peuplé de barbares.",
  "Ases": "Un peuple du Nordheim, aux cheveux d'or.",
  "Vanes": "Un peuple du Nordheim, aux cheveux roux, ennemi des Ases.",
  "Nordheim": "Les terres glacées de l'extrême nord, où vivent les Ases et les Vanes.",
  "Némédie": "Un grand royaume hyborien, rival de l'Aquilonie.",
  "Aquilonie": "Le plus puissant des royaumes hyboriens, à l'ouest.",
  "Ophir": "Un petit royaume riche de l'âge hyborien.",
  "Koth": "Un grand royaume de l'âge hyborien, au nord du Shem.",
  "Askalon": "Une ancienne cité du Shem, dont Bêlit dit descendre des rois.",
  "Zarkheba": "Un fleuve du sud, aux eaux empoisonnées, que les peuples de la côte évitent.",
  "Bel": "Le dieu des voleurs, né au Shem.",
  "Ashtoreth|Derketo|Adonis": "Des dieux du Shem.",
  "Shushan": "Une riche cité du Shem.",
  "Skelos": "Un sorcier de légende ; son « Puits » est un abîme de magie noire.",
  "Valhalla": "Le séjour des guerriers morts dans les croyances du Nordheim.",
  "galuchat": "Un cuir de poisson ou de raie, grenu et très dur.",
  "haubert": "Une longue chemise de mailles ou d'écailles de métal.",
  "coprah": "La chair séchée de la noix de coco, dont on tire de l'huile.",
  "dunette": "Le pont surélevé à l'arrière d'un navire.",
  "tauds": "Des toiles tendues au-dessus du pont pour abriter l'équipage.",
  "mantelets": "Des panneaux de bois dressés pour protéger des flèches.",
  "vergue": "La longue pièce de bois fixée en travers du mât, qui porte la voile.",
  "étrave": "La pièce qui forme l'avant de la coque d'un navire.",
  "étambot": "La pièce qui forme l'arrière de la coque d'un navire.",
  "héliotropes": "Des pierres vertes tachetées de rouge, qu'on appelle aussi pierres de sang.",
  "berserk": "Un guerrier pris d'une fureur aveugle au combat.",
}

PT = {
  "C1_1": ("Un cavalier sur les quais", "argos"),
  "C1_2": ("Le juge d'Argos", "argus"),
  "C1_3": ("Une voile à l'horizon", "cote"),
  "C1_4": ("L'abordage", "cote"),
  "C1_5": ("La reine de la côte noire", "tigresse"),
  "C2_1": ("Le fleuve qui est la Mort", "fleuve"),
  "C2_2": ("Les dieux de Conan", "fleuve"),
  "C2_3": ("Le serment de Bêlit", "fleuve"),
  "C2_4": ("L'autel des anciens", "cite"),
  "C2_5": ("Les fleurs noires", "jungle"),
  "C3_1": ("Un rêve de lotus", "jungle"),
  "C3_2": ("Cinquante hommes perdus", "jungle"),
  "C3_3": ("Le retour au fleuve", "cite"),
  "C4_1": ("Sur la pyramide", "cite"),
  "C4_2": ("La meute", "cite"),
  "C4_3": ("Du fond de l'abîme", "cite"),
  "C5_1": ("La dernière voile", "plage"),
}
PAGES = {p: list(t) for p, t in PT.items()}
