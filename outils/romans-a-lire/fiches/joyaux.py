# Fiche des « Joyaux de Gwahlur » pour livre.py (Robert E. Howard, Weird Tales, mars 1935 ; traduction nouvelle par Claude, 2026).
# Texte : /mnt/project-files/livre-heros/classiques/joyaux/NN.txt (d'après Gutenberg 42236, « Jewels of Gwahlur »),
# passé par traduction.py (pages C1_1…). Les titres des quatre chapitres sont ceux de Howard, traduits.
# Ce qui doit rester caché jusqu'à sa page (titres de pages, qui, aspect, lieux, résumés) : ce qui s'éveille dans la
# chambre de l'oracle (C2_2-C2_3) ; ce qui arrive à Zargheba (C2_5) ; ce que sont les serviteurs de Bît-Yakin (C3_5, C4_4) ;
# ce qui se passe devant l'autel (C4_6) ; le sort des Dents (C4_8).
HEAD = """// « Les Joyaux de Gwahlur » (Jewels of Gwahlur), Robert E. Howard, 1935 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais paru dans Weird Tales
// en mars 1935 (Project Gutenberg n° 42236, domaine public). Les titres des chapitres sont ceux de Howard ; ceux des
// pages et tout ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude."""

BASE = {
  "id": "joyaux",
  "title": "Les Joyaux de Gwahlur",
  "subtitle": "Un récit de Conan le Cimmérien · Robert E. Howard, 1935",
  "summary": "Au royaume de Keshan, on garde depuis des siècles un trésor dont personne n'a vu la couleur : les Dents de Gwahlur. Conan est venu les prendre, sous couvert d'offrir son épée au roi ; un Stygien qui a la même idée lui dispute la place. Le grand prêtre décide d'interroger l'oracle, une princesse morte depuis mille ans, dans le palais désert d'une vallée que nul ne visite plus. Conan part en avance. Un récit de Conan le Cimmérien, de Robert E. Howard, en entier, dans une traduction nouvelle, sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  "tags": ["aventure", "fantastique"],
  "author": "Robert E. Howard · traduction de Claude (2026)",
  "lecture": True,
  "age": 15,
  "skin": "parchemin",
  "cover": {"motif": "oeil", "color": "#233024"},
  "glossary": None,
  "voice": "troisième personne, passé",
  "version": 1,
  "notice": {
    "title": "Un récit de 1935",
    "text": [
      "Robert E. Howard publie *Les Joyaux de Gwahlur* en mars 1935 dans *Weird Tales*, une revue américaine de récits étranges. Conan, devenu aventurier et chef de guerre à louer, y court après un trésor dans les royaumes du Sud de l'« âge hyborien », un passé imaginaire plein de royaumes et de dieux inventés. Howard est mort en 1936, à trente ans ; ses récits sont dans le domaine public.",
      "La traduction est nouvelle, faite pour cette bibliothèque à partir du texte anglais, et elle suit Howard de près. Elle allège ce que Howard écrit sur la « race » des peuples du Sud : la hiérarchie de couleur qu'il prête au Keshan (une noblesse « métissée » qui descendrait d'une « race blanche » régnant sur un peuple noir), et les mots qui désignent sans cesse les prêtres et les soldats par leur couleur de peau. Ces mots sont devenus « royaumes du Sud », « lanciers », « prêtres » ou « colosse ». Quelques insultes que Conan adresse à Muriela ont aussi été adoucies.",
      "Il faut nommer ce que le récit montre. Muriela est une esclave, achetée à un marchand, que son maître fouette. Conan la démasque en lui arrachant ses vêtements, la frappe et l'assoit sur ses genoux ; plus tard, il compte se servir d'elle. Le dernier chapitre décrit un massacre en détail.",
    ],
  },
  "intro": [],
  "world": {"start": {"place": "falaises", "hour": 6, "gold": 0, "food": 0, "items": [], "kits": {"guerrier": [], "rodeur": [], "voleur": [], "mage": [], "pretre": [], "barde": []}}},
}

T = ["Les chemins de l'intrigue", "Une déesse s'éveille", "Le retour de l'oracle", "Les Dents de Gwahlur"]
R = [
  "Conan est venu au Keshan pour les Dents de Gwahlur, un trésor caché, en offrant au roi de mener son armée contre le Pount. Le Stygien Thutmekri, envoyé par les rois de Zembabwei, propose une alliance et demande une part du trésor en gage. Le grand prêtre Gorulga décide de consulter l'oracle d'Alkmeenon : le corps intact de la princesse Yelaya, dans un palais désert au fond d'une vallée fermée de falaises. Conan s'y rend avant les prêtres. Il trouve en route la momie d'un certain Bît-Yakin et un manuscrit qu'il déchiffre mal, puis la morte sur son estrade. Un gong l'attire dans une cour, et le sol cède sous lui.",
  "Emporté par une rivière souterraine, Conan remonte dans le palais. Dans la chambre de l'oracle, la morte s'éveille et lui parle ; il reconnaît l'accent corinthien et démasque Muriela, une danseuse esclave que Zargheba, l'associé de Thutmekri, a amenée pour jouer l'oracle et faire parler les dieux en faveur du Stygien. Le prêtre Gwarunga leur a livré le chemin secret. Conan lui fait la leçon : elle dira aux prêtres ce que lui veut. Il part régler son compte à Zargheba et trouve sa tête pendue à un arbre.",
  "Gorulga et ses acolytes arrivent. Muriela, en Yelaya, leur ordonne de chasser le Stygien et de confier les Dents à Conan ; les prêtres partent chercher le trésor. Gwarunga, resté en arrière, l'attaque ; Conan l'assomme. Muriela retourne dans la chambre de l'oracle et pousse un cri : le vrai corps de Yelaya est revenu sur l'estrade, et Muriela a disparu par une porte secrète. Sous le palais, des fresques expliquent à Conan le secret de Bît-Yakin et de ses serviteurs ; une pierre manque de l'écraser. Quand il remonte, Yelaya et Gwarunga ont disparu.",
  "Conan suit les prêtres dans les cavernes. Gwarunga, caché sur une galerie derrière le corps de Yelaya, leur ordonne d'une voix terrible de donner les Dents à Thutmekri ; Conan le tue. Il délivre Muriela, enchaînée sur une idole, et lui raconte l'histoire de Bît-Yakin, un vieux sage pelishti qui a fait parler l'oracle pendant des siècles, servi par des êtres gris venus des jungles. Devant l'autel, ces serviteurs massacrent les prêtres. Conan prend le coffret des Dents, mais quand Muriela et le trésor tombent ensemble du pont de pierre, il ne peut en sauver qu'un : il rattrape Muriela, et les Dents disparaissent dans la rivière. Il l'emmène vers le Pount.",
]
CHAPTERS = [{"title": "Chapitre " + str(i + 1) + " · " + t, "text": r} for i, (t, r) in enumerate(zip(T, R))]
CHAPTERS[1]["notice"] = True

PLACES = {
  "falaises": {"ambiance": "montagne", "name": "Les falaises d'Alkmeenon", "map": "keshan", "x": 40, "y": 70, "region": "Le Keshan", "desc": "Des remparts de pierre à pic, jade et cramoisi, qui sortent de la jungle et ferment une vallée ronde."},
  "keshia": {"ambiance": "ville", "name": "Keshia", "map": "keshan", "x": 62, "y": 30, "region": "Le Keshan", "desc": "La capitale du Keshan : un palais de pierre, de boue et de bambou au milieu des huttes en ruche."},
  "vallee": {"ambiance": "foret", "name": "La vallée d'Alkmeenon", "map": "keshan", "x": 42, "y": 68, "region": "Alkmeenon", "desc": "Des jardins retournés à la jungle, des fleurs pâles, une avenue envahie d'herbes et des pavillons en ruine."},
  "palais": {"ambiance": "chateau", "name": "Le palais d'Alkmeenon", "map": "keshan", "x": 43, "y": 66, "region": "Alkmeenon", "desc": "Un palais désert aux dômes brillants, sa salle du trône et la chambre de l'oracle derrière une porte d'or."},
  "dessous": {"ambiance": "souterrain", "name": "Sous le palais", "map": "keshan", "x": 44, "y": 67, "region": "Alkmeenon", "desc": "Une rivière noire qui court dans le noir, des corniches et des couloirs taillés dans le roc."},
  "grottes": {"ambiance": "souterrain", "name": "Les cavernes du dragon", "map": "keshan", "x": 46, "y": 64, "region": "Alkmeenon", "desc": "Une porte de bronze en gueule de dragon, des cavernes aux voûtes phosphorescentes, des galeries et des ponts de pierre."},
}

PEOPLE = {
  "conan": {"name": "Conan le Cimmérien", "aka": ["Conan", "Cimmérien"], "face": {"age": "jeune", "hair": "noir", "coif": "milong", "beard": "sans", "iris": "bleu", "skin": "hale"}, "qui": "Un barbare du Nord, venu au Keshan offrir son épée au roi.", "aspect": {"allure": "puissant, souple comme une panthère", "visage": "crinière noire taillée au carré", "signe": "un bandeau d'argent"}},
  "thutmekri": {"name": "Thutmekri", "aka": ["Thutmekri"], "face": {"age": "adulte"}, "qui": "Un aventurier stygien, envoyé des rois de Zembabwei.", "aspect": {"allure": "fripon à l'esprit délié"}},
  "zargheba": {"name": "Zargheba", "aka": ["Zargheba"], "face": {"age": "adulte", "hair": "noir", "beard": "barbe"}, "qui": "Un Shémite, l'associé de Thutmekri.", "aspect": {"allure": "petit, courte barbe noire"}},
  "gorulga": {"name": "Gorulga", "aka": ["Gorulga"], "face": {"age": "adulte"}, "qui": "Le grand prêtre de Keshan.", "aspect": {"allure": "plumes d'autruche, voix profonde", "visage": "un profil ciselé dans le cuivre"}},
  "yelaya": {"name": "Yelaya", "aka": ["Yelaya"], "f": True, "face": {"age": "jeune", "hair": "noir", "coif": "chignon", "skin": "clair"}, "qui": "Une princesse d'Alkmeenon, morte depuis mille ans, qu'on consulte comme un oracle.", "aspect": {"allure": "étendue sur une estrade d'ivoire", "visage": "pâle comme l'albâtre", "signe": "un joyau cramoisi dans les cheveux"}},
  "bityakin": {"name": "Bît-Yakin", "aka": ["Bît-Yakin"], "face": {"age": "ancien", "beard": "barbe"}, "qui": "Un Pelishti venu jadis dans la vallée avec ses serviteurs.", "aspect": {"allure": "une momie dans une niche"}},
  "muriela": {"name": "Muriela", "aka": ["Muriela"], "f": True, "face": {"age": "jeune", "hair": "noir", "coif": "long", "skin": "clair"}, "qui": "Une danseuse corinthienne, esclave de Zargheba.", "aspect": {"allure": "mince, terrifiée, bonne comédienne", "visage": "cheveux sombres et soyeux"}},
  "gwarunga": {"name": "Gwarunga", "aka": ["Gwarunga"], "face": {"age": "adulte"}, "qui": "Un prêtre de Keshan, de la suite de Gorulga.", "aspect": {"allure": "un colosse au visage mauvais"}},
}

WORDS = {
  "Keshan": "Un royaume du Sud, aux confins du Koush, entre les herbages et les forêts.",
  "Keshani|keshani": "De Keshan.",
  "Keshia": "La capitale du Keshan.",
  "Koush": "Un vaste pays du Sud, au-delà de la Stygie.",
  "Pount": "Un royaume voisin du Keshan, son vieil ennemi.",
  "Zembabwei|Zembabwéens": "Un grand royaume marchand du Sud, gouverné par deux rois jumeaux.",
  "Stygien|stygiens|Stygie": "De Stygie, un royaume du sud où règnent des prêtres sorciers.",
  "Shem|Shémite|shémite|Shémites|shémites": "Le Shem, un vaste pays de prairies et de déserts, et ses habitants.",
  "Corinthie|Corinthienne|corinthien|corinthienne": "Un royaume hyborien de cités, au nord.",
  "Akbitana": "Une cité du Shem, renommée pour son acier.",
  "Asgalun": "Une cité du Shem.",
  "Pelishtim|Pelishti|pelishti|pelishtim|Pelishtia": "Une cité du Shem de l'ouest, et ses gens, renommés pour leurs sages.",
  "Ptéor": "Un dieu des Pelishtim.",
  "Dagon": "Un dieu de la mer, qu'on adore en Stygie.",
  "Derketo": "Une déesse de l'amour et de la mort, adorée au Shem et en Stygie.",
  "Mitra": "Le grand dieu des royaumes hyboriens.",
  "Crom": "Le dieu sombre des Cimmériens, qui vit sur une montagne et n'écoute pas les prières.",
  "Barachas": "Des îles de la mer de l'ouest, repaire de pirates.",
  "Côte noire": "Une longue côte du Sud, où Conan a été chef de corsaires.",
  "Alkmeenon": "Une ancienne cité du Keshan, abandonnée depuis des siècles, au fond d'une vallée fermée.",
  "Koth": "Un grand royaume hyborien, au nord du Shem.",
  "Touran": "Le grand royaume hyrkanien, à l'est.",
  "Gwahlur": "Le roi des ténèbres, dans les légendes du Keshan.",
}

PT = {
  "C1_1": ("Les falaises", "falaises"),
  "C1_2": ("Deux aventuriers à Keshia", "keshia"),
  "C1_3": ("La vallée interdite", "vallee"),
  "C1_4": ("Le palais désert", "palais"),
  "C1_5": ("La chambre de l'oracle", "palais"),
  "C1_6": ("Le gong", "palais"),
  "C2_1": ("La rivière sous le palais", "dessous"),
  "C2_2": ("Un bruit dans le palais", "palais"),
  "C2_3": ("Une voix musicale", "palais"),
  "C2_4": ("Le chemin secret", "palais"),
  "C2_5": ("Le bosquet de lotus", "vallee"),
  "C3_1": ("Les prêtres de Keshan", "palais"),
  "C3_2": ("L'oracle parle", "palais"),
  "C3_3": ("Un prêtre resté en arrière", "palais"),
  "C3_4": ("Un brin de soie", "palais"),
  "C3_5": ("Les fresques", "dessous"),
  "C4_1": ("La porte du dragon", "grottes"),
  "C4_2": ("Une voix sous la voûte", "grottes"),
  "C4_3": ("Sur la galerie", "grottes"),
  "C4_4": ("Le dieu d'airain", "grottes"),
  "C4_5": ("L'autel", "grottes"),
  "C4_6": ("Le coffret de cuivre", "grottes"),
  "C4_7": ("Le pont de pierre", "grottes"),
  "C4_8": ("Le choix", "grottes"),
}
PAGES = {p: list(t) for p, t in PT.items()}
