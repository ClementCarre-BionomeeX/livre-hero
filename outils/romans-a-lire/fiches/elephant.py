# Fiche de « La Tour de l'éléphant » pour livre.py (Robert E. Howard, Weird Tales, mars 1933 ; traduction nouvelle par Claude, 2026).
# Texte : /mnt/project-files/livre-heros/classiques/elephant/NN.txt, passé par traduction.py (pages C1_1…). Source anglaise :
# l'édition du Project Gutenberg of Australia (n° 0600831), recopiée dans le dépôt dpjanes/iotdb-nlp ; il y manque une
# quinzaine de paragraphes, repris d'une seconde copie (rzwink/ellegon-rpg), où quelques mots étaient fautifs (« floor »
# pour « door », « road » pour « roof ») : la traduction suit la leçon sûre des deux. Les chapitres de Howard sont
# seulement numérotés : leurs titres sont de Claude.
# Ce qui doit rester caché jusqu'à sa page (titres de pages, qui, aspect, lieux, résumés) : le sort de Taurus (C2_7) ;
# ce qu'est l'idole de la chambre d'ivoire (C3_1) ; ce que devient Yara (C3_4).
HEAD = """// « La Tour de l'éléphant » (The Tower of the Elephant), Robert E. Howard, 1933 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais paru dans Weird Tales
// en mars 1933 (Project Gutenberg of Australia, domaine public). Les chapitres de Howard sont seulement numérotés ; leurs
// titres, ceux des pages et tout ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude."""

BASE = {
  "id": "elephant",
  "title": "La Tour de l'éléphant",
  "subtitle": "Un récit de Conan le Cimmérien · Robert E. Howard, 1933",
  "summary": "Dans une taverne du Maul, le quartier des voleurs de Zamora, un jeune barbare venu du Nord entend parler d'une tour d'argent où le prêtre Yara garde un joyau, le Cœur de l'Éléphant. Personne n'a jamais pu le voler. Le barbare ne voit pas pourquoi.",
  "tags": ["aventure", "fantastique"],
  "author": "Robert E. Howard · traduction de Claude (2026)",
  "lecture": True,
  "age": 14,
  "skin": "parchemin",
  "cover": {"motif": "etoile", "color": "#1f2a3d"},
  "glossary": None,
  "voice": "troisième personne, passé",
  "version": 1,
  "notice": {
    "title": "Un récit de 1933",
    "reminder": "Ce chapitre montre un être torturé et un cœur arraché.",
    "text": [
      "Robert E. Howard publie *La Tour de l'éléphant* en mars 1933 dans *Weird Tales*, une revue américaine de récits étranges. C'est l'une des toutes premières aventures de Conan : il est encore un jeune voleur, nouveau venu dans les villes civilisées de l'« âge hyborien », un passé imaginaire plein de royaumes et de dieux inventés. Howard est mort en 1936, à trente ans ; ses récits sont dans le domaine public.",
      "La traduction est nouvelle, faite pour cette bibliothèque à partir du texte anglais, et elle suit Howard de près. Elle laisse de côté les mots qui désignent des peuples par la couleur de leur peau (les prêtres « au crâne jaune » du Khitaï), et rend par « engeance » ou « peuple » ce que Howard appelle la « race » de Yara.",
      "Il faut nommer ce que le récit montre. Au début, un homme se vante de vendre une jeune fille enlevée ; on se bat au couteau dans le noir. Le dernier chapitre montre un être torturé, puis un cœur arraché.",
    ],
  },
  "intro": [],
  "world": {"start": {"place": "maul", "hour": 23, "gold": 0, "food": 0, "items": [], "kits": {"guerrier": [], "rodeur": [], "voleur": [], "mage": [], "pretre": [], "barde": []}}},
}

T = ["Une nuit au Maul", "Le jardin et la tour", "Le Cœur de l'Éléphant"]
R = [
  "Au Maul, le quartier des voleurs de Zamora, un ravisseur venu de Koth se vante de vendre une jeune Brythunienne à un comte d'Ophir. Il parle de la tour de l'Éléphant, où le prêtre Yara garde le joyau qui fait sa magie. Un jeune Cimmérien demande pourquoi personne ne l'a volé ; on se moque de lui, le Kothien le pousse et tire l'épée. La chandelle tombe, et dans le noir le Cimmérien tue son homme.",
  "Conan escalade le mur du jardin de la tour et trouve un garde étranglé. Le meurtrier est Taurus de Némédie, le prince des voleurs, venu pour le même joyau ; ils s'associent. Taurus tue les lions du jardin avec une poudre de lotus noir, Conan tue le dernier, et ils montent par une corde jusqu'au sommet de la tour. Dans une salle pleine de joyaux, une araignée géante les attend. Conan descend ensuite l'escalier d'argent vers une porte d'ivoire.",
  "Derrière la porte d'ivoire, Conan trouve un être à tête d'éléphant, aveugle et torturé : Yag-kosha, venu jadis d'une autre planète, que Yara a asservi par la ruse et forcé à servir sa magie pendant trois cents ans. Il demande à Conan de lui arracher le cœur, d'en verser le sang sur le joyau et de porter le joyau à Yara. Conan obéit. Yara rapetisse jusqu'à disparaître dans la gemme, où Yag-kosha, rendu à ses ailes, le poursuit. Conan sort à l'aube, et la tour s'écroule derrière lui.",
]
CHAPTERS = [{"title": "Chapitre " + str(i + 1) + " · " + t, "text": r} for i, (t, r) in enumerate(zip(T, R))]
CHAPTERS[2]["notice"] = True

PLACES = {
  "maul": {"ambiance": "ville", "name": "Le Maul", "map": "zamora", "x": 35, "y": 60, "region": "Le quartier des voleurs, dans une cité de Zamora", "desc": "Des rues tortueuses et sans pavés, des tas d'ordures, des bouges où l'on boit et où l'on se bat à la lueur des torches."},
  "temples": {"ambiance": "temple", "name": "Le quartier des temples", "map": "zamora", "x": 55, "y": 45, "region": "Zamora", "desc": "Des piliers de marbre, des dômes d'or et des arches d'argent, les sanctuaires des innombrables dieux de Zamora."},
  "jardin": {"ambiance": "nuit", "name": "Le jardin de la tour", "map": "zamora", "x": 65, "y": 35, "region": "Au pied de la tour de l'Éléphant", "desc": "Deux enceintes de hauts murs, un gazon uni, une fontaine, des buissons plumeux et des arbres exotiques qui ondoient sous les étoiles."},
  "sommet": {"ambiance": "nuit", "name": "Le sommet de la tour", "map": "zamora", "x": 66, "y": 30, "region": "À cent cinquante pieds au-dessus du jardin", "desc": "Un toit plat d'un bleu sombre pailleté d'or, cerné d'un rebord incrusté de joyaux, avec une petite salle d'argent à la porte d'or."},
  "salle": {"ambiance": "chateau", "name": "La salle aux joyaux", "map": "zamora", "x": 67, "y": 31, "region": "Le haut de la tour", "desc": "Une salle de cristal que ses grands joyaux blancs éclairent seuls, avec des divans de soie et des coffres d'acajou ouverts sur des monceaux de pierreries."},
  "ivoire": {"ambiance": "temple", "name": "La chambre d'ivoire", "map": "zamora", "x": 67, "y": 32, "region": "Dans la tour, au bas de l'escalier d'argent", "desc": "Une coupole dorée, des murs de jade vert, un sol d'ivoire, un brasero d'encens sur un trépied d'or et un lit de marbre."},
  "ebene": {"ambiance": "nuit", "name": "La chambre d'ébène", "map": "zamora", "x": 67, "y": 33, "region": "Dans la tour, plus bas", "desc": "Une chambre d'ébène et de jais, un divan de soie noire, et derrière la porte un crâne d'argent qui grimace."},
}

PEOPLE = {
  "conan": {"name": "Conan le Cimmérien", "aka": ["Conan", "Cimmérien"], "face": {"age": "jeune", "hair": "noir", "coif": "milong", "beard": "sans", "iris": "bleu", "skin": "hale"}, "qui": "Un jeune barbare venu du Nord, nouveau venu dans les villes civilisées, qui vit de vols.", "aspect": {"allure": "grand, vigoureux, tunique de pauvre", "visage": "tignasse noire, yeux bleus", "signe": "une épée au fourreau usé"}},
  "kothien": {"name": "Le ravisseur kothien", "aka": ["Kothien"], "face": {"age": "adulte", "hair": "brun", "coif": "court", "skin": "clair", "beard": "barbe"}, "qui": "Un gros ravisseur de métier, venu de Koth, qui vend des femmes enlevées.", "aspect": {"allure": "gros, grossier, chope en main"}},
  "taurus": {"name": "Taurus de Némédie", "aka": ["Taurus"], "face": {"age": "adulte", "hair": "chatain", "coif": "court", "skin": "clair", "beard": "sans"}, "qui": "Un voleur célèbre, qu'on appelle le prince des voleurs.", "aspect": {"allure": "grand, ventru, pieds nus", "signe": "une corde à nœuds roulée"}},
  "yara": {"name": "Yara", "aka": ["Yara"], "face": {"age": "ancien", "hair": "gris", "coif": "rase", "skin": "hale", "beard": "sans"}, "qui": "Le grand prêtre et sorcier de Zamora, maître de la tour ; le roi lui-même le craint.", "aspect": {"allure": "grand et maigre, robe de soie", "visage": "des yeux de vautour"}},
  "yagkosha": {"name": "Yag-kosha", "aka": ["Yag-kosha", "Yogah"], "face": {"age": "ancien", "skin": "#5f8f5a"}, "qui": "Un être très ancien, venu de la planète Yag, que Yara tient captif dans sa tour.", "aspect": {"allure": "corps d'homme vert, tête d'éléphant", "visage": "yeux de topaze, aveugles"}},
}

NO_AUTO = ["yagkosha"]
MEET = {"C3_1": ["yagkosha"]}

WORDS = {
  "spadassin|spadassins": "Un homme d'épée qu'on paie pour se battre ou pour tuer.",
  "chaperon": "Le faîte d'un mur, souvent arrondi ou en pente, qui le protège de la pluie.",
  "upas": "Un arbre d'Asie dont la sève passait pour un poison mortel.",
  "héliotrope|héliotropes": "Une pierre verte tachée de rouge, comme de gouttes de sang.",
  "chevalet": "Un instrument de torture sur lequel on étirait les membres du supplicié.",
  "brasero": "Un récipient de métal où brûlent des braises.",
  "trépied": "Un support à trois pieds.",
  "jais": "Une pierre d'un noir brillant.",
  "lapis-lazuli": "Une pierre d'un bleu profond, semée de points dorés.",
  "pygmée": "Ici, un être minuscule.",
}

PT = {
  "C1_1": ("Le Maul", "maul"),
  "C1_2": ("Dans le noir", "maul"),
  "C2_1": ("Les dieux des autres", "temples"),
  "C2_2": ("Le garde étranglé", "jardin"),
  "C2_3": ("Le prince des voleurs", "jardin"),
  "C2_4": ("Les yeux dans les buissons", "jardin"),
  "C2_5": ("Le lotus noir", "jardin"),
  "C2_6": ("Le rebord de joyaux", "sommet"),
  "C2_7": ("La porte d'or", "salle"),
  "C2_8": ("Les fils gris", "salle"),
  "C3_1": ("La chambre d'ivoire", "ivoire"),
  "C3_2": ("Ceux de Yag", "ivoire"),
  "C3_3": ("Le dernier présent", "ivoire"),
  "C3_4": ("L'aube", "ebene"),
}
PAGES = {p: list(t) for p, t in PT.items()}
