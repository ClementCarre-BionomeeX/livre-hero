# Fiche d'« Ombres sur Zamboula » pour livre.py (Robert E. Howard, Weird Tales, novembre 1935 ; traduction nouvelle par Claude, 2026).
# Texte : /mnt/project-files/livre-heros/classiques/zamboula/NN.txt (d'après Gutenberg 42196, « Shadows in Zamboula »),
# passé par traduction.py (pages C1_1…). Les titres des quatre chapitres sont ceux de Howard, traduits.
# Ce qui doit rester caché jusqu'à sa page (titres de pages, qui, aspect, lieux, résumés) : ce qu'est la chose qui entre dans
# la chambre (C2_1) ; qui sont vraiment Zabibi et Alafdhal (C4_4 : d'où deux fiches séparées pour Nafertari et Jungir Khan) ;
# où est l'Étoile de Khorala (C4_5) ; le sort d'Aram Baksh (C4_5).
HEAD = """// « Ombres sur Zamboula » (Shadows in Zamboula), Robert E. Howard, 1935 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais paru dans Weird Tales
// en novembre 1935 (Project Gutenberg n° 42196, domaine public). Les titres des chapitres sont ceux de Howard ; ceux des
// pages et tout ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude."""

BASE = {
  "id": "zamboula",
  "title": "Ombres sur Zamboula",
  "subtitle": "Un récit de Conan le Cimmérien · Robert E. Howard, 1935",
  "summary": "Zamboula, ville de caravanes au bord du désert, où personne ne dort dans les rues après la tombée de la nuit, pas même les mendiants. Conan, à court d'argent, a loué la chambre la moins chère de la ville, chez un aubergiste dont les hôtes, dit un nomade, disparaissent parfois sans laisser de trace. Au-delà des palmiers, un tambour se met à battre. Un récit de Conan le Cimmérien, de Robert E. Howard, en entier, dans une traduction nouvelle, sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  "tags": ["aventure", "fantastique"],
  "author": "Robert E. Howard · traduction de Claude (2026)",
  "lecture": True,
  "age": 16,
  "skin": "parchemin",
  "cover": {"motif": "etoile", "color": "#3a2a18"},
  "glossary": None,
  "voice": "troisième personne, passé",
  "version": 1,
  "notice": {
    "title": "Un récit de 1935",
    "text": [
      "Robert E. Howard publie *Ombres sur Zamboula* en novembre 1935 dans *Weird Tales*, une revue américaine de récits étranges. Conan y traverse une ville de caravanes du désert, dans l'« âge hyborien », un passé imaginaire plein de royaumes et de dieux inventés. Howard est mort en 1936, à trente ans ; ses récits sont dans le domaine public.",
      "La traduction est nouvelle, faite pour cette bibliothèque à partir du texte anglais, et elle suit Howard de près, sauf sur un point. Chez Howard, les mangeurs d'hommes du récit sont des esclaves noirs, et il les décrit sans cesse par leur couleur de peau, leurs cheveux, leurs lèvres, en les comparant à des bêtes ; il parle aussi de la population « métissée » de la ville comme d'une chose impure. La traduction a retiré tout cela. Les cannibales sont ici « les hommes de Darfar », un culte d'esclaves venus de ce pays, sans couleur de peau. Le nom du dieu-singe, Hanuman, est celui d'un dieu bien réel de l'Inde, que Howard a pris pour en faire un démon.",
      "Il faut nommer ce que le récit montre. Une jeune femme est enlevée dans la rue, nue, pour être mangée. Conan la caresse alors qu'elle est encore sous le choc, puis attend d'elle d'être « payé ». Un prêtre la force à danser nue au milieu de cobras. Il y a aussi des meurtres d'enfants racontés par leur auteur, et une vengeance d'une grande cruauté.",
    ],
  },
  "intro": [],
  "world": {"start": {"place": "bazar", "hour": 17, "gold": 0, "food": 0, "items": [], "kits": {"guerrier": [], "rodeur": [], "voleur": [], "mage": [], "pretre": [], "barde": []}}},
}

T = ["Un tambour commence", "Ceux qui rôdent la nuit", "Des mains qui serrent", "Danse, fille, danse !"]
R = [
  "À Zamboula, ville de caravanes gouvernée par le satrape touranien Jungir Khan, un nomade zuagir avertit Conan : les étrangers qui dorment chez l'aubergiste Aram Baksh disparaissent, et l'on trouve des os calcinés dans une fosse au-delà des palmiers. Conan, sans le sou, va quand même dormir dans la chambre qu'il a payée, au bord du désert. Il remarque des huttes abandonnées dont même les mendiants ne veulent pas. Un tambour se met à battre.",
  "La porte verrouillée s'ouvre dans la nuit : un esclave de Darfar, un mangeur d'hommes, entre avec un gourdin, et Conan le tue. Aram vend ses hôtes étrangers aux cannibales de Darfar. Conan arrache aux cannibales une jeune danseuse, Zabibi : son amant, Alafdhal, a été rendu fou par une drogue du prêtre Totrasmek, qui la désire. Conan assomme le fou dans une ruelle, le ramène chez elle, puis accepte, contre un prix, de l'accompagner tuer Totrasmek dans le temple d'Hanuman. Derrière l'idole, une main énorme happe Zabibi par une porte secrète.",
  "Conan entre dans le couloir du temple. Il y trouve Baal-ptéor, un étrangleur sacré du pays de Kosala, serviteur de Totrasmek, qui l'égare par des illusions et colle son épée à une table aimantée. Ils s'étranglent l'un l'autre ; Conan lui brise le cou, reprend son épée et suit les cris de Zabibi.",
  "Totrasmek accuse Zabibi d'avoir voulu voler à son amant l'Étoile de Khorala, un anneau qui asservit les cœurs, et la fait danser entre quatre cobras ; Conan le tue. Elle prend la fiole qui rend la raison et guérit son amant. Puis elle avoue qu'elle est Nafertari, et lui Jungir Khan, le satrape : elle paie Conan d'un sac d'or et lui ordonne de chercher l'anneau. Conan prend un cheval, livre Aram Baksh aux cannibales et part dans le désert, avec l'Étoile de Khorala, qu'il avait retirée du doigt du satrape en le ligotant.",
]
CHAPTERS = [{"title": "Chapitre " + str(i + 1) + " · " + t, "text": r} for i, (t, r) in enumerate(zip(T, R))]
CHAPTERS[1]["notice"] = True

PLACES = {
  "bazar": {"ambiance": "ville", "name": "Le bazar des Fourbisseurs", "map": "zamboula", "x": 50, "y": 50, "region": "Zamboula", "desc": "Un coin de bazar où passent marchands, mendiants, courtisanes, nomades et cavaliers touraniens."},
  "taverne": {"ambiance": "nuit", "name": "La taverne d'Aram Baksh", "map": "zamboula", "x": 20, "y": 52, "region": "Le bord du désert", "desc": "La dernière maison habitée de la rue, entre un jardin de dattiers et une palmeraie, au bord du désert."},
  "huttes": {"ambiance": "nuit", "name": "Les huttes abandonnées", "map": "zamboula", "x": 22, "y": 56, "region": "Le bord du désert", "desc": "Une rangée de huttes vides en face de la taverne, sous des palmiers épars."},
  "rues": {"ambiance": "ville", "name": "Les rues de nuit", "map": "zamboula", "x": 40, "y": 50, "region": "Zamboula", "desc": "Des rues désertes, des maisons sans lumière, des boutiques fermées et des arches obscures."},
  "temple": {"ambiance": "temple", "name": "Le temple d'Hanuman", "map": "zamboula", "x": 56, "y": 44, "region": "Zamboula", "desc": "Un édifice trapu au milieu d'une place, des portes de bronze ouvertes, une idole de marbre noir."},
  "maison": {"ambiance": "ville", "name": "Une maison derrière une porte cintrée", "map": "zamboula", "x": 46, "y": 46, "region": "Zamboula", "desc": "Une maison au fond d'une rue étroite, des lampes de cuivre et un divan de velours."},
}

PEOPLE = {
  "conan": {"name": "Conan le Cimmérien", "aka": ["Conan", "Cimmérien"], "face": {"age": "jeune", "hair": "noir", "coif": "milong", "beard": "sans", "iris": "bleu", "skin": "hale", "marks": ["cicatrice"]}, "qui": "Un barbare du Nord, arrivé du désert, sans le sou.", "aspect": {"allure": "un géant, large de poitrine", "visage": "sourcils noirs, yeux bleus", "signe": "une épée droite à la hanche"}},
  "aram": {"name": "Aram Baksh", "aka": ["Aram Baksh", "Aram"], "face": {"age": "adulte", "hair": "noir", "beard": "longue", "iris": "noir"}, "qui": "Un aubergiste de Zamboula, au bord du désert.", "aspect": {"allure": "corpulent, pas feutré", "visage": "nez crochu, petits yeux noirs mobiles", "signe": "une barbe noire jusqu'à la poitrine"}},
  "jungir": {"name": "Jungir Khan", "aka": ["Jungir Khan"], "face": {"age": "jeune"}, "qui": "Le satrape touranien qui gouverne Zamboula.", "aspect": {"allure": "le maître de la ville"}},
  "nafertari": {"name": "Nafertari", "aka": ["Nafertari"], "f": True, "qui": "La maîtresse du satrape, qui le gouverne, dit-on.", "aspect": {"allure": "celle qui gouverne le gouverneur"}},
  "zabibi": {"name": "Zabibi", "aka": ["Zabibi"], "f": True, "face": {"age": "jeune", "hair": "noir", "coif": "long", "skin": "clair"}, "qui": "Une danseuse de Zamboula.", "aspect": {"allure": "grande, mince et souple", "visage": "cheveux épais, très bruns et lustrés"}},
  "alafdhal": {"name": "Alafdhal", "aka": ["Alafdhal"], "face": {"age": "jeune"}, "qui": "L'amant de Zabibi, un jeune officier touranien.", "aspect": {"allure": "grand, jeune soldat"}},
  "totrasmek": {"name": "Totrasmek", "aka": ["Totrasmek"], "face": {"age": "adulte", "skin": "clair"}, "qui": "Le grand prêtre d'Hanuman, que toute la ville craint.", "aspect": {"allure": "large et gras", "visage": "des yeux de serpent", "signe": "de grosses mains blanches"}},
  "baal": {"name": "Baal-ptéor", "aka": ["Baal-ptéor"], "face": {"age": "adulte", "hair": "noir", "coif": "court", "beard": "sans", "iris": "noir", "skin": "brun"}, "qui": "Le serviteur de Totrasmek, venu du pays de Kosala.", "aspect": {"allure": "énorme, des bras trop longs", "visage": "large et arrogant", "signe": "les plus grandes mains du monde"}},
}

WORDS = {
  "Zamboula|Zamboulien|Zamboulan": "Une ville de caravanes au bord du désert, bâtie par les Stygiens et gouvernée par les Touraniens.",
  "Touran|Touraniens|Touranien|touranien|touraniens|touraniennes": "Le grand royaume hyrkanien, à l'est, qui gouverne Zamboula.",
  "Hyrkaniens": "Les peuples cavaliers de l'est, dont les Touraniens.",
  "Stygie|Stygien|Stygiens|stygien": "Un royaume du sud où règnent des prêtres sorciers.",
  "Zuagirs|Zuagir|zuagirs": "Des nomades du désert.",
  "satrape": "Un gouverneur de province, chez les Touraniens.",
  "Darfar": "Un pays du Sud d'où viennent des esclaves qui, dit le récit, mangent la chair humaine en l'honneur de leur dieu.",
  "Yog": "Le dieu des hommes de Darfar, Seigneur des Demeures vides, qu'on adore par le feu.",
  "Hanuman": "Un dieu-singe que Totrasmek adore à Zamboula ; Howard a pris ce nom à un dieu bien réel de l'Inde.",
  "Set": "Le dieu-serpent de la Stygie.",
  "Erlik": "Le dieu des Touraniens.",
  "Pelishtim": "Les gens d'une cité du Shem, qui servent de gardes à Zamboula.",
  "Shem|shémites": "Un pays de prairies et de déserts, à l'ouest.",
  "koushites": "Du Koush, un vaste pays du Sud.",
  "Ghanara": "Une femme du Ghanata, un pays du désert.",
  "Kharamun": "Le désert qui entoure Zamboula.",
  "Khemi": "La capitale de la Stygie.",
  "Aghrapur": "La capitale du Touran.",
  "Ghazan": "Une ville dont on boit le vin.",
  "Wadai": "Un pays du Sud, voisin de Darfar.",
  "Kosala|Kosalien": "Un pays lointain de l'est, où l'on sacrifie des hommes au dieu Yajur.",
  "Yajur": "Le dieu sanguinaire de Kosala.",
  "Yota-pong": "Un temple de Kosala, où l'on sacrifie à Yajur.",
  "Khorala": "Un lieu qui a donné son nom à un joyau, l'Étoile de Khorala.",
  "Ophir": "Un royaume hyborien, au sud.",
  "Zamora": "Un royaume de l'est, connu pour ses voleurs et ses danses.",
  "khalats": "De longues robes à manches, serrées d'une ceinture.",
  "souk": "Un marché, dans les pays de l'est.",
  "Crom": "Le dieu sombre des Cimmériens, qui vit sur une montagne et n'écoute pas les prières.",
}

PT = {
  "C1_1": ("L'avertissement du Zuagir", "bazar"),
  "C1_2": ("La garde de la ville", "bazar"),
  "C1_3": ("La dernière maison de la rue", "taverne"),
  "C1_4": ("La chambre aux deux portes", "taverne"),
  "C2_1": ("Une porte qui s'ouvre", "taverne"),
  "C2_2": ("Un cri sous les arbres", "huttes"),
  "C2_3": ("La danseuse", "huttes"),
  "C2_4": ("Un homme dans la ruelle", "rues"),
  "C2_5": ("Le prix", "rues"),
  "C2_6": ("Le temple d'Hanuman", "temple"),
  "C3_1": ("Le couloir en fer à cheval", "temple"),
  "C3_2": ("Brumes et illusions", "temple"),
  "C3_3": ("L'étrangleur de Yota-pong", "temple"),
  "C4_1": ("Derrière le mur", "temple"),
  "C4_2": ("L'Étoile de Khorala", "temple"),
  "C4_3": ("La danse des Cobras", "temple"),
  "C4_4": ("Le lotus d'or", "maison"),
  "C4_5": ("La porte du mur ouest", "taverne"),
}
PAGES = {p: list(t) for p, t in PT.items()}
