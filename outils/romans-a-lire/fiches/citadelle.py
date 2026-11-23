# Fiche de « La Citadelle écarlate » pour livre.py (Robert E. Howard, Weird Tales, janvier 1933 ; traduction nouvelle par Claude, 2026).
# Texte : /mnt/project-files/livre-heros/classiques/citadelle/NN.txt, passé par traduction.py (pages C1_1…). Source anglaise :
# la version de Weird Tales, d'après la copie du dépôt WillemBlokland/NMLfinal (story_texts/651.txt). Cette copie écrit
# « Tamar » pour la capitale d'Aquilonie : la traduction rétablit Tarantia, le nom des autres récits. Les chapitres de Howard
# sont seulement numérotés : leurs titres sont de Claude ; les épigraphes sont traduites en vers libres.
# Ce qui doit rester caché jusqu'à sa page : le nom de l'homme délivré (Pélias, C3_7) ; qui meurt dans les fosses (C3_3) ;
# le sort d'Arpello (C4_2) ; celui de Strabonus, d'Amalrus et de Tsotha (C5_4 et C5_5).
HEAD = """// « La Citadelle écarlate » (The Scarlet Citadel), Robert E. Howard, 1933 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais paru dans Weird Tales
// en janvier 1933 (domaine public). Les chapitres de Howard sont seulement numérotés ; leurs titres, ceux des pages et
// tout ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude."""

BASE = {
  "id": "citadelle",
  "title": "La Citadelle écarlate",
  "subtitle": "Un récit de Conan le Cimmérien · Robert E. Howard, 1933",
  "summary": "Trahi par un allié, Conan, roi d'Aquilonie, voit sa chevalerie tomber dans la plaine de Shamu et se retrouve aux fers. On l'emmène à Khorshemish, au pied de la citadelle rouge du sorcier Tsotha-lanti, sous laquelle s'ouvrent des fosses dont personne ne revient. Pendant ce temps, son royaume le croit mort.",
  "tags": ["aventure", "fantastique", "guerre"],
  "author": "Robert E. Howard · traduction de Claude (2026)",
  "lecture": True,
  "age": 14,
  "skin": "parchemin",
  "cover": {"motif": "oeil", "color": "#5a1414"},
  "glossary": None,
  "voice": "troisième personne, passé",
  "version": 1,
  "notice": {
    "title": "Un récit de 1933",
    "reminder": "Ce chapitre décrit des scènes de grande violence.",
    "text": [
      "Robert E. Howard publie *La Citadelle écarlate* en janvier 1933 dans *Weird Tales*, une revue américaine de récits étranges. C'est le deuxième récit de Conan à paraître ; comme dans *Le Phénix sur l'épée*, le Cimmérien y est déjà roi d'Aquilonie. Le monde est celui de l'« âge hyborien », un passé imaginaire plein de royaumes et de dieux inventés. Howard est mort en 1936, à trente ans ; ses récits sont dans le domaine public.",
      "La traduction est nouvelle, faite pour cette bibliothèque à partir du texte anglais, et elle suit Howard de près. Elle allège les mots qui désignent un esclave kouchite et des gardes par la couleur de leur peau, et les insultes qui s'y attachent. La copie anglaise écrit « Tamar » pour la capitale d'Aquilonie ; la traduction garde Tarantia, le nom des autres récits. Chaque chapitre s'ouvre sur quelques vers ou un proverbe, que Howard attribue à des chants ou à des livres imaginaires ; ils sont traduits en vers libres.",
      "Il faut nommer ce que le récit montre. Des batailles sanglantes et un massacre ; un homme éventré, dont un sorcier relève ensuite le cadavre ; des monstres dans les souterrains ; un prince jeté du haut d'une tour ; une décapitation. Les méchants menacent de faire écorcher les femmes du roi ou de sacrifier des jeunes filles, et les femmes du palais sont emmenées de force par des soldats.",
    ],
  },
  "intro": [],
  "world": {"start": {"place": "shamu", "hour": 18, "gold": 0, "food": 0, "items": [], "kits": {"guerrier": [], "rodeur": [], "voleur": [], "mage": [], "pretre": [], "barde": []}}},
}

T = ["Le lion pris au piège", "Sous la citadelle", "Les Salles de l'Horreur", "Le roi tombé du ciel", "Sous les murs de Shamar"]
R = [
  "Dans la plaine de Shamu, en Ophir, Conan, roi d'Aquilonie, a vu ses cinq mille chevaliers tomber jusqu'au dernier : le roi Amalrus d'Ophir, qui l'avait appelé à l'aide, s'est rangé avec Strabonus de Koth. Seul debout parmi les morts, le roi tient l'armée à distance, jusqu'à ce que le sorcier Tsotha-lanti l'abatte d'une piqûre de sa bague empoisonnée. Couché aux fers dans un char, Conan entre à Khorshemish, la capitale de Koth, dominée par la citadelle écarlate de Tsotha.",
  "Dans la citadelle, les deux rois proposent à Conan sa liberté contre une abdication en faveur du prince Arpello de Pellia, qui leur livrerait l'Aquilonie. Conan les insulte et refuse. Tsotha le fait descendre dans les fosses creusées sous la citadelle, l'enchaîne au mur et part pour le siège de Shamar en promettant de s'occuper de ses femmes.",
  "Dans le noir, un serpent géant frôle Conan sans le toucher. Un esclave qui le connaît d'autrefois vient avec les clefs, se moque de lui et veut le tuer ; le serpent l'emporte, et Conan se libère avec les clefs tombées. Il erre dans les souterrains, où rôdent des choses sans nom, et délivre un captif qu'une fleur monstrueuse tenait depuis des années. L'homme se nomme : c'est un sorcier, ennemi de Tsotha, et ses pouvoirs reviennent. Il ouvre la grille, emmène Conan jusqu'au sommet de la tour, lui montre dans un cristal Shamar assiégée et Tarantia livrée à Arpello, puis appelle une créature ailée qui emporte le roi dans la nuit.",
  "À Tarantia, la nouvelle de la mort du roi a semé le chaos. Les barons sont partis, le peuple a chassé le comte Trocero, et Arpello s'est proclamé roi : il fait décapiter les marchands qui protestent et laisse ses soldats piller. Le jeune Athémidès soulève la foule contre lui et court supplier Trocero de revenir. Au lever du soleil, devant la foule massée au pied de la grande tour, une forme ailée passe au-dessus des murs.",
  "Shamar va tomber sous l'assaut des armées de Koth et d'Ophir quand une armée aquilonienne descend des collines, avec Conan à sa tête. Les archers bossoniens et les piquiers du Gunderland brisent l'infanterie ennemie, puis la charge des rois se fracasse sous les flèches avant que les chevaliers du Poitain ne l'enfoncent. Les défenseurs de Shamar font une sortie, et la bataille tourne au massacre au bord du Tybor. Tsotha s'enfuit sur une monture étrange, et Conan le poursuit au-delà du fleuve.",
]
CHAPTERS = [{"title": "Chapitre " + str(i + 1) + " · " + t, "text": r} for i, (t, r) in enumerate(zip(T, R))]
CHAPTERS[2]["notice"] = True
CHAPTERS[4]["notice"] = True

PLACES = {
  "shamu": {"ambiance": "combat", "name": "La plaine de Shamu", "map": "hyborie", "x": 45, "y": 60, "region": "Les prairies d'Ophir, près de la frontière d'Aquilonie", "desc": "Une plaine jonchée de morts au soleil couchant, des étendards de soie renversés dans le sang, et un monceau d'hommes et de chevaux où le dernier combattant tient encore."},
  "khorshemish": {"ambiance": "ville", "name": "Khorshemish", "map": "hyborie", "x": 60, "y": 75, "region": "La capitale de Koth, qu'on appelle la Reine du Sud", "desc": "Des flèches et des tours minces teintées de rose à l'aube, des rues pavées de blanc, et au-dessus de tout la citadelle écarlate, comme une éclaboussure de sang dans le ciel."},
  "coupole": {"ambiance": "chateau", "name": "La salle à coupole de jais", "map": "hyborie", "x": 61, "y": 74, "region": "Dans la citadelle écarlate", "desc": "Une coupole de jais sculpté, des portes en arc ajouré qui luisent de gemmes sombres, et des rois qui boivent pendant qu'on marchande un royaume."},
  "fosses": {"ambiance": "souterrain", "name": "Les fosses", "map": "hyborie", "x": 61, "y": 76, "region": "Sous la citadelle écarlate", "desc": "Des couloirs creusés bien avant la ville, des tunnels qui se croisent dans le noir, un puits d'où monte un vent, et des choses qui rampent et ricanent hors de la lumière."},
  "tour": {"ambiance": "nuit", "name": "Le sommet de la citadelle", "map": "hyborie", "x": 62, "y": 73, "region": "Sur le toit de la plus haute tour", "desc": "Des salles d'or et de lapis-lazuli, un cristal sur une table d'ébène, puis un toit balayé par le vent, avec les lumières de Khorshemish tout en bas."},
  "tarantia": {"ambiance": "ville", "name": "Tarantia", "map": "hyborie", "x": 30, "y": 30, "region": "La capitale d'Aquilonie", "desc": "Des flèches et des coupoles étincelantes, une place du marché où l'on pend et où l'on harangue, et une grande tour à côté du palais royal."},
  "shamar": {"ambiance": "combat", "name": "Shamar", "map": "hyborie", "x": 45, "y": 55, "region": "Sur le Tybor, à la frontière sud de l'Aquilonie", "desc": "Une ville fortifiée sur la rive nord du fleuve, des murs qui ploient sur les mines, des tours qui penchent, et devant elle une plaine couverte de pavillons ennemis."},
}

PEOPLE = {
  "conan": {"name": "Conan le Cimmérien", "aka": ["Conan", "Cimmérien", "Amra"], "face": {"age": "mur", "hair": "noir", "coif": "milong", "beard": "sans", "iris": "bleu", "skin": "hale"}, "qui": "Un ancien voleur, pirate et mercenaire venu du Nord, devenu roi d'Aquilonie ; les Kouchites l'ont connu autrefois sous le nom d'Amra, le Lion.", "aspect": {"allure": "géant en armure noire hachée de coups", "visage": "sombre et balafré, des yeux bleus et sauvages"}},
  "tsotha": {"name": "Tsotha-lanti", "aka": ["Tsotha-lanti", "Tsotha"], "face": {"age": "ancien", "hair": "noir", "coif": "rase", "skin": "clair", "beard": "barbe"}, "qui": "Le sorcier de Koth, maître de la citadelle écarlate, plus puissant que le roi qu'il sert ; on raconte de sombres histoires sur sa naissance.", "aspect": {"allure": "maigre comme un vautour, en robe de soie", "visage": "un visage d'oiseau de proie", "signe": "une large bague de forme curieuse"}},
  "strabonus": {"name": "Strabonus", "aka": ["Strabonus"], "face": {"age": "mur", "hair": "brun", "coif": "court", "skin": "clair", "beard": "barbe"}, "qui": "Le roi de Koth, avare de ses chevaliers comme de ses pièces.", "aspect": {"allure": "trapu, en armure noire", "visage": "un large visage aux yeux rusés"}},
  "amalrus": {"name": "Amalrus", "aka": ["Amalrus"], "face": {"age": "adulte", "hair": "blond", "coif": "milong", "skin": "clair", "beard": "sans"}, "qui": "Le roi d'Ophir, l'ancien allié de Conan, qui l'a attiré dans le piège.", "aspect": {"allure": "mince, raffiné, en mailles dorées", "visage": "perfide, dangereux comme un cobra"}},
  "arbanus": {"name": "Arbanus", "aka": ["Arbanus"], "face": {"age": "mur", "hair": "gris", "coif": "court", "skin": "hale", "beard": "barbe"}, "qui": "Le général de Strabonus, qui mène le siège de Shamar.", "aspect": {"allure": "un vieux soldat en armure"}},
  "shukeli": {"name": "Shukeli", "aka": ["Shukeli"], "face": {"age": "mur", "hair": "noir", "coif": "rase", "skin": "clair", "beard": "sans"}, "qui": "L'intendant de la citadelle, qui garde les clefs des fosses et prend plaisir aux supplices.", "aspect": {"allure": "gras, des mains potelées"}},
  "pelias": {"name": "Pélias", "aka": ["Pélias"], "face": {"age": "ancien", "hair": "noir", "coif": "long", "skin": "clair", "beard": "sans"}, "qui": "Un sorcier, rival de Tsotha-lanti, disparu depuis dix ans ; il aime le confort et le bon vin.", "aspect": {"allure": "maigre, des pas d'abord hésitants", "visage": "des yeux sombres et calmes"}},
  "arpello": {"name": "Arpello de Pellia", "aka": ["Arpello"], "face": {"age": "adulte", "hair": "noir", "coif": "long", "skin": "hale", "beard": "sans"}, "qui": "Un prince d'Aquilonie, le plus puissant des provinces du centre, qui prétend avoir une goutte de sang royal.", "aspect": {"allure": "large d'épaules, pourpoint de soie sur l'acier", "visage": "sombre et dur", "signe": "un bandeau de drap d'argent"}},
  "trocero": {"name": "Trocero du Poitain", "aka": ["Trocero"], "face": {"age": "mur", "hair": "noir", "coif": "court", "skin": "hale", "beard": "moustache"}, "qui": "Le comte du Poitain, à qui Conan a confié Tarantia ; il a jadis assiégé la ville lui-même.", "aspect": {"allure": "à la tête de ses chevaliers bardés d'acier"}},
  "prospero": {"name": "Prospero", "aka": ["Prospero"], "face": {"age": "adulte", "hair": "noir", "coif": "court", "skin": "hale", "beard": "sans"}, "qui": "Un Poitevin, capitaine de Trocero et ami du roi.", "aspect": {"allure": "une épée à deux mains"}},
  "publius": {"name": "Publius", "aka": ["Publius"], "face": {"age": "mur", "hair": "gris", "coif": "degarni", "skin": "clair", "beard": "sans"}, "qui": "Le chancelier du roi.", "aspect": {"allure": "gros, en robe"}},
  "athemides": {"name": "Athémidès", "aka": ["Athémidès"], "face": {"age": "jeune", "hair": "chatain", "coif": "milong", "skin": "clair", "beard": "sans"}, "qui": "Un jeune étudiant de Tarantia, qui parle bien et n'a peur de rien.", "aspect": {"allure": "grimpé sur une colonne du marché", "visage": "des paroles brûlantes"}},
}
NO_AUTO = ["pelias"]
MEET = {"C3_7": ["pelias"]}

WORDS = {
  "olifant|olifants": "Un cor d'ivoire, taillé dans une défense d'éléphant, dont on sonnait à la guerre.",
  "mangonneau|mangonneaux": "Une machine de siège qui lançait de grosses pierres.",
  "baliste|balistes": "Une machine de guerre, comme une énorme arbalète, qui lançait des traits ou des pierres.",
  "mantelet|mantelets": "Un grand panneau de bois derrière lequel on s'abritait des flèches.",
  "bourguignotte|bourguignottes": "Un casque léger, ouvert sur le visage.",
  "haubert|hauberts": "Une longue chemise de mailles d'acier.",
  "brigandine|brigandines": "Un vêtement de soldat doublé de petites plaques de fer.",
  "satrape": "Le gouverneur d'une province, au nom d'un roi étranger ; ici, un pantin au service d'un autre.",
  "spahi|spahis": "Un cavalier léger des armées d'Orient.",
  "guidon|guidons": "Un petit étendard pointu qu'on porte au bout d'une lance.",
  "sapeur|sapeurs": "Un soldat qui creuse des galeries sous les murs pour les faire tomber.",
  "encensoir|encensoirs": "Un petit vase suspendu à des chaînes où l'on brûle de l'encens.",
  "vizir": "Un ministre, dans les royaumes d'Orient ; le grand vizir est le premier d'entre eux.",
  "lotus": "Une plante dont Howard fait sortir des sucs, des poisons et des drogues.",
}

PT = {
  "C1_1": ("Le dernier debout", "shamu"),
  "C1_2": ("La bague du sorcier", "shamu"),
  "C1_3": ("La route de Khorshemish", "khorshemish"),
  "C2_1": ("Le prix d'une couronne", "coupole"),
  "C2_2": ("La grille se referme", "coupole"),
  "C3_1": ("Dans le noir", "fosses"),
  "C3_2": ("Une visite", "fosses"),
  "C3_3": ("Le marché de l'esclave", "fosses"),
  "C3_4": ("Les tunnels", "fosses"),
  "C3_5": ("Le puits", "fosses"),
  "C3_6": ("La fleur cramoisie", "fosses"),
  "C3_7": ("Le captif délivré", "fosses"),
  "C3_8": ("L'histoire des fosses", "fosses"),
  "C3_9": ("Le portier", "fosses"),
  "C3_10": ("Le cristal et les ailes", "tour"),
  "C4_1": ("Tarantia sans roi", "tarantia"),
  "C4_2": ("La grande tour", "tarantia"),
  "C5_1": ("Shamar à bout de forces", "shamar"),
  "C5_2": ("La bannière au lion", "shamar"),
  "C5_3": ("Les archers de l'Ouest", "shamar"),
  "C5_4": ("La charge", "shamar"),
  "C5_5": ("La poursuite", "shamar"),
}
PAGES = {p: list(t) for p, t in PT.items()}
