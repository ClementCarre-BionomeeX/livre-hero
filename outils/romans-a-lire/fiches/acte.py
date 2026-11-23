# Fiche de « Acté » (id acte) pour livre.py (texte de Dumas, 1839).
# Texte : gut.py sur Gutenberg n° 18321 (miroir orkeilius/gutenberg_fr_mirror), entre fiches/acte_texte.py pre et post.
HEAD = """// « Acté », Alexandre Dumas, 1839 : un livre à lire, sans choix (lecture: true). Texte de Dumas,
// domaine public, d'après l'édition numérique du projet Gutenberg. Les chapitres de Dumas n'ont pas de titre ; les
// titres des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude."""

BASE = {
  "id": "acte",
  "title": "Acté",
  "subtitle": "Un roman à lire · Alexandre Dumas, 1839",
  "summary": "Corinthe, l'an 57. Acté, fille du vieil Amyclès, cueille des fleurs au bord de la mer quand aborde une birème dorée. Il en descend un jeune Romain à la barbe d'or, Lucius, venu disputer aux Grecs les couronnes de la lutte, de la course et du chant. Elle lui ouvre la maison de son père, puis son cœur.",
  "tags": ["historique", "drame"],
  "author": "Alexandre Dumas",
  "lecture": True,
  "age": 14,
  "skin": "parchemin",
  "cover": {"motif": "feuille", "color": "#4a2a2a"},
  "glossary": None,
  "voice": "troisième personne, passé",
  "version": 1,
  "notice": {
    "title": "Un roman antique de 1839",
    "reminder": "Ce chapitre montre des meurtres et des supplices.",
    "text": [
      "*Acté* a paru en 1839. Le texte est celui de Dumas, sans retouche, d'après l'édition établie par ebooksgratuits.com et diffusée par le projet Gutenberg ; la présentation des éditeurs n'est pas reprise. Les chapitres de Dumas n'ont pas de titre.",
      "Dumas suit de près les historiens latins, Tacite et Suétone surtout : les crimes, les fêtes et la fin de l'empereur sont tirés de leurs récits. Acté a existé ; l'aventure qu'il lui prête est de lui. Le dernier chapitre parle des souvenirs que Dumas a recueillis lui-même en Italie.",
      "Le livre se passe à la cour de Rome au premier siècle. Il raconte des empoisonnements, des meurtres de femmes, la persécution des chrétiens, des combats de gladiateurs et des supplices dans l'arène, avec leur sang.",
    ],
  },
  "intro": [],
  "world": {"start": {"place": "rivage", "hour": 9, "gold": 0, "food": 0, "items": [], "kits": {"guerrier": [], "rodeur": [], "voleur": [], "mage": [], "pretre": [], "barde": []}}},
}

def roman(n):
    out = ''
    for v, r in ((100, 'C'), (90, 'XC'), (50, 'L'), (40, 'XL'), (10, 'X'), (9, 'IX'), (5, 'V'), (4, 'IV'), (1, 'I')):
        while n >= v: out += r; n -= v
    return out

TITRES = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
]


R = [
  "Le 7 mai de l'an 57, à Corinthe, la jeune Acté cueille des fleurs près de la mer quand une birème dorée approche en chantant. En descendent un jeune Romain à la barbe d'or, Lucius, et un adolescent délicat, Sporus. Acté leur montre le stade, où l'on prépare les jeux, et conduit Lucius chez son père, le vieil Amyclès, qui lui offre l'hospitalité.",
  "Au repas, Lucius parle de César avec une colère étrange. Le proconsul le fait inscrire pour les jeux. Le soir, Acté le guide jusqu'à la citadelle ; ils regardent le golfe s'endormir, un cri monte du port, et Lucius la retient. Rentrée chez elle, elle trouve à son cou un collier d'or qui porte ces mots : J'appartiens à Lucius.",
  "Au gymnase, sept lutteurs se disputent le prix, dont un athlète romain et Lucius. Le Sybarite tombe sous l'athlète. Lucius se fait poudrer d'un sable mêlé d'or, enlève le colosse thébain d'un seul effort et remporte la palme, qu'il vient poser sur la tête d'Acté.",
  "Le lendemain, les statues des dieux traversent Corinthe jusqu'au cirque. Quatre quadriges courent aux couleurs des factions de Rome. Lucius se laisse distancer, puis lâche ses chevaux au bon moment et gagne. Il envoie à Acté une colombe portant deux feuilles de sa couronne d'or.",
  "Corinthe se demande si ce vainqueur est un dieu. Au théâtre, Lucius chante l'histoire de Médée, qui quitte son père pour suivre Jason, et Acté croit y entendre la sienne. Il emporte la couronne du chant. Le soir même, elle s'enfuit avec lui et regarde Corinthe disparaître derrière les vagues.",
  "Sur la birème, Acté s'éveille près de Phoebé, une tigresse apprivoisée, et d'une esclave, Sabina, dont le visage lui semble familier. Lucius se dit simple chanteur. Douze jours plus tard, à Neapolis, la ville l'accueille en triomphateur, et la fête le suit jusqu'à Rome. Au Capitole, il consacre ses trois couronnes sous son vrai nom : Néron. Acté pousse un cri.",
  "Acté est conduite dans un appartement de la maison dorée. Au bain, Sabina la mord à l'épaule et s'enfuit. Puis une femme voilée entre et lui raconte qui est Néron : le trône gagné par un crime, l'empoisonnement de Britannicus, la répudiation d'Octavie. C'est Agrippine, la mère de l'empereur. Elle voit en Acté la seule femme assez pure pour ramener son fils, quand Sporus vient chercher Acté de la part de César.",
  "Sporus guide Acté par les jardins du palais, près des prisons où gémissent des chrétiens. Néron l'accueille en Lucius. Quand elle évoque Agrippine, il raconte à son tour la vie de sa mère : ses crimes, ses ambitions, et ce qu'elle a tenté pour le reprendre. On annonce une visiteuse, et Acté craint Poppée. C'est Locuste.",
  "Néron rappelle à Locuste ce qu'elle lui doit, et la prie de deviner l'ennemi qu'il veut frapper. Chez elle, au Vélabre, une tête vivante gémit au milieu des sortilèges, un serpent enroulé autour du cou. L'oracle répond : sa mère. Néron trouvera un autre moyen. Le lendemain, il invite Acté à Baïa pour les fêtes de Minerve.",
  "À Bauli, Néron embrasse sa mère devant toute la cour et la confie à Anicétus. Acté, qui a fui l'orgie du palais, s'est réfugiée sur la trirème. En pleine mer, le navire s'ouvre. Acté soutient Agrippine dans l'eau jusqu'à une barque de pêcheur, puis gagne seule la côte. Agrippine fait annoncer à son fils qu'elle a survécu ; Anicétus vient à la villa et la tue. Épuisée, Acté est recueillie par un vieillard qui se nomme Paul.",
  "Néron vient contempler le corps de sa mère, et ses craintes s'apaisent. Dans la cabane d'un pêcheur, Paul promet à Acté une retraite et appelle Silas. Acté se souvient de l'avoir vu à Corinthe, mené devant le proconsul. Paul raconte la naissance du Christ, puis sa propre histoire : marchand au temple, il a haï Jésus et persécuté ses disciples. Acté avoue à son tour qu'elle est la maîtresse de César et qu'elle l'aime encore.",
  "Paul, Acté et Silas marchent de nuit. Dans une maison pauvre, un esclave chrétien pleure son enfant malade ; Paul le relève d'une parole. Au tombeau d'Ascagne, Rome apparaît. La troupe descend sous terre, où un peuple entier attend l'apôtre : ce sont les Catacombes.",
  "Acté vit parmi les chrétiens et prie avec les jeunes filles. Au-dessus d'elle, Rome change : Poppée règne, Octavie est mise à mort, la moitié de la ville brûle, Poppée meurt à son tour, et Néron accuse les chrétiens. On apprend que Paul est arrêté. Acté promet d'aller à Rome le sauver.",
  "Acté entre à Rome, un poignard à la ceinture. La maison dorée prépare des noces : Néron épouse Sabina au Capitole. Acté surprend la mariée seule et lève son arme ; elle découvre la vérité sur Sporus. On l'arrête et on la jette dans la prison des chrétiens, avec Paul et Silas. Paul la baptise au moment où Anicétus vient la chercher pour César ; c'est l'apôtre qu'on emmène, et il est décapité sur le Forum.",
  "Pour les ides de mars, Néron offre des jeux. Les gladiateurs combattent et meurent selon toutes les règles de l'arène. Puis viennent les chrétiens : Acté, attachée à un arbre, et Silas, armé d'un arc et monté sur un cheval numide, qui doit la défendre. Silas abat le taureau, tient tête au lion. Enfin, une tigresse entre dans l'arène. Le soir, des lettres de Gaule troublent l'empereur.",
  "Trois mois plus tard, par une nuit d'orage, cinq cavaliers fuient Rome sur la voie Nomentane. Les paysans crient mort à Néron, les soldats racontent qu'ils ont tué un fuyard pris pour lui. Un vétéran reconnaît l'homme voilé : c'est César. Le récit revient en arrière, au soulèvement de Vindex en Gaule et de Galba en Espagne.",
  "Néron s'indigne d'être traité de mauvais chanteur. La nouvelle de la mort de Vindex le rend fou de joie, mais à Rome les présages se multiplient. Au théâtre, le public applaudit un seul vers, celui où l'on demande sa mort. Pendant un festin, les lettres d'Espagne annoncent que Galba est proclamé empereur. Néron frappe Sporus et fait appeler Locuste.",
  "Locuste prépare un poison pour Néron. Galba approche, les prétoriens se vendent, et la boîte d'or disparaît. Néron s'enfuit à la villa de Phaon, se traîne dans une carrière, boit l'eau d'une mare. Sporus lui avoue sa haine et l'a dénoncé. Les cavaliers arrivent ; Epaphrodite enfonce le poignard. Le lendemain soir, une femme vient laver le corps et lui donne une tombe.",
  "Le peuple doute de la mort de Néron : une main inconnue fleurit sa tombe pendant quinze ans, un faux Néron paraît chez les Parthes, les Pères de l'Église en font le précurseur de l'Antéchrist. Dix-huit siècles plus tard, Dumas trouve partout autour de Rome le souvenir de Néron, jusqu'au voiturin qui lui montre son tombeau.",
]

def titre(i, t):
    if not t: return "Chapitre " + roman(i + 1)
    return "Chapitre " + roman(i + 1) + " · " + t
CHAPTERS = [{"title": titre(i, t), "text": r} for i, (t, r) in enumerate(zip(TITRES, R))]
for i in (9, 12, 14, 17): CHAPTERS[i]["notice"] = True

PLACES = {
  "rivage": {"ambiance": "mer", "name": "La plage de Corinthe", "map": "grece", "x": 40, "y": 45, "region": "Corinthe, sous la porte occidentale", "desc": "Une prairie entre un bois d'oliviers et un ruisseau bordé de lauriers-roses, puis le sable où les birèmes viennent aborder."},
  "maison": {"ambiance": "ville", "name": "La maison d'Amyclès", "map": "grece", "x": 45, "y": 48, "region": "Corinthe", "desc": "Une maison grecque près de la place, avec son triclinium, sa volière de colombes et un seuil où le vieillard accueille ses hôtes."},
  "citadelle": {"ambiance": "montagne", "name": "La citadelle de Corinthe", "map": "grece", "x": 46, "y": 52, "region": "Sur la colline qui domine la ville", "desc": "Un mûrier au sommet de la colline, et sous les yeux deux golfes, Salamine, et au loin la citadelle d'Athènes, comme un point blanc."},
  "gymnase": {"ambiance": "combat", "name": "Le gymnase de Corinthe", "map": "grece", "x": 42, "y": 50, "region": "Corinthe, au bout de l'allée des pins", "desc": "Une arène sablée où les lutteurs s'enduisent d'huile, sous les yeux des huit juges et du proconsul."},
  "cirque": {"ambiance": "combat", "name": "Le cirque de Corinthe", "map": "grece", "x": 38, "y": 54, "region": "En vue du port de Crissa", "desc": "Une longue piste coupée par la spina, ses autels et ses bornes, où les quadriges tournent sept fois devant les statues des dieux."},
  "theatre": {"ambiance": "ville", "name": "Le théâtre de Corinthe", "map": "grece", "x": 44, "y": 46, "region": "Corinthe", "desc": "Des gradins pleins de femmes et de jeunes gens, une scène où gronde le tonnerre de Claudius Pulcher, et une pluie de safran qui embaume l'air."},
  "mer": {"ambiance": "mer", "name": "La birème de Lucius", "map": "grece", "x": 20, "y": 55, "region": "De la mer Ionienne à la mer Tyrrhénienne", "desc": "Un navire doré aux voiles blanches, une chambre tendue de pourpre, et sur la poupe un filet à mailles d'or où l'on se couche au soleil."},
  "naples": {"ambiance": "port", "name": "Neapolis", "map": "italie", "x": 55, "y": 60, "region": "Campanie, au pied du Vésuve", "desc": "Une ville grecque couchée au fond de son golfe, entre Herculanum et Pouzzoles, qui ouvre une brèche dans ses murs pour accueillir un vainqueur."},
  "capitole": {"ambiance": "temple", "name": "Le Capitole", "map": "rome", "x": 45, "y": 45, "region": "Rome", "desc": "La colline des temples, où le vainqueur des jeux consacre ses couronnes à Jupiter très bon et très grand."},
  "palais": {"ambiance": "chateau", "name": "La maison dorée", "map": "rome", "x": 55, "y": 50, "region": "Rome, sur le Palatin", "desc": "Le palais de l'empereur, ses appartements, ses bains chauffés, ses corridors secrets connus de quelques esclaves."},
  "jardins": {"ambiance": "nuit", "name": "Les jardins de la maison dorée", "map": "rome", "x": 60, "y": 52, "region": "Rome", "desc": "Des jardins grands comme une campagne, un lac sous la lune, et sous terre les prisons où l'on garde les chrétiens."},
  "velabre": {"ambiance": "nuit", "name": "La maison de Locuste", "map": "rome", "x": 42, "y": 55, "region": "Rome, au Vélabre", "desc": "Une maison sombre aux fioles de grès et de verre, aux réchauds de bronze, où l'on brûle du cyprès arraché aux tombeaux."},
  "bauli": {"ambiance": "chateau", "name": "Bauli", "map": "italie", "x": 52, "y": 58, "region": "Golfe de Baïa", "desc": "Le palais de l'empereur au bord de la mer, ses festins, ses jardins peuplés de nymphes et de satyres, et le quai d'où partent les trirèmes."},
  "golfe": {"ambiance": "mer", "name": "Le golfe de Baïa", "map": "italie", "x": 50, "y": 60, "region": "Entre Baïa et Pouzzoles", "desc": "Une mer calme sous la lune, le pont de Caligula, et un phare qui s'éteint au mauvais moment."},
  "lucrin": {"ambiance": "eau", "name": "La villa du lac Lucrin", "map": "italie", "x": 51, "y": 57, "region": "Golfe de Baïa", "desc": "La villa d'Agrippine au bord du lac, sa chambre, son lit, et ses portes ouvertes à ceux qui viennent de Bauli."},
  "cabane": {"ambiance": "mer", "name": "La cabane du pêcheur", "map": "italie", "x": 53, "y": 61, "region": "Face à l'île de Nisida", "desc": "Une cabane sur la grève du Pausilippe, un manteau brun au bout d'un bâton pour faire signe à l'île voisine."},
  "route": {"ambiance": "route", "name": "La route de Rome", "map": "italie", "x": 48, "y": 40, "region": "Du golfe de Naples aux monts Albains", "desc": "Des chemins parcourus de nuit, la maison d'un esclave affranchi, et sur la voie Appienne le tombeau d'Ascagne, d'où l'on voit Rome."},
  "catacombes": {"ambiance": "souterrain", "name": "Les Catacombes", "map": "rome", "x": 50, "y": 75, "region": "Sous la campagne romaine, près de la voie Appienne", "desc": "Une ville sous la ville, des galeries et des chapelles creusées dans le tuf, où des familles entières vivent, prient et enterrent leurs morts."},
  "rome": {"ambiance": "ville", "name": "Rome", "map": "rome", "x": 48, "y": 48, "region": "Rome", "desc": "Les rues, le Forum, les statues de l'empereur et le théâtre, où le peuple applaudit ou se tait selon le vent."},
  "prison": {"ambiance": "souterrain", "name": "La prison des chrétiens", "map": "rome", "x": 58, "y": 54, "region": "Rome, sous le palais", "desc": "Un cachot où l'on vient prendre au hasard des victimes pour les fêtes, et un soupirail qui laisse voir un coin de ciel."},
  "amphitheatre": {"ambiance": "combat", "name": "L'amphithéâtre", "map": "rome", "x": 40, "y": 40, "region": "Rome", "desc": "Deux cent mille spectateurs, une arène plantée d'arbres pour les chasses, la porte sana vivaria et le spoliaire sous les gradins."},
  "nomentane": {"ambiance": "route", "name": "La voie Nomentane", "map": "rome", "x": 70, "y": 25, "region": "Au nord-est de Rome", "desc": "Une route de campagne par une nuit d'orage, le camp des prétoriens sur le côté, et des cadavres dans la boue."},
  "villa": {"ambiance": "souterrain", "name": "La villa de Phaon", "map": "rome", "x": 80, "y": 20, "region": "Entre la voie Salaria et la voie Nomentane", "desc": "Une carrière de sable, des ronces, une mare d'eau croupie, et une petite chambre au fond, fermée par un rocher."},
  "tombeau": {"ambiance": "temple", "name": "Le tombeau de Néron", "map": "rome", "x": 45, "y": 30, "region": "Rome, sur la colline des Jardins", "desc": "Une tombe de porphyre surmontée d'un autel de marbre, que des mains inconnues ont longtemps fleurie."},
}


PEOPLE = {
  "acte": {"name": "Acté", "aka": ["Acté"], "face": {"age": "jeune", "hair": "brun", "coif": "long", "skin": "hale"}, "qui": "Une jeune Corinthienne de quinze ou seize ans, fille du vieil Amyclès, rapide comme Diane chasseresse.", "aspect": {"allure": "tunique légère, couronne de fleurs", "signe": "un collier d'or au cou"}},
  "lucius": {"name": "Lucius", "aka": ["Lucius", "Néron"], "face": {"age": "jeune", "hair": "blond", "coif": "court", "skin": "clair", "beard": "barbe"}, "qui": "Un jeune Romain à la barbe d'or, venu disputer aux Grecs les couronnes de la lutte, de la course et du chant.", "aspect": {"allure": "robe de pourpre, lyre à la main", "signe": "une barbe d'or"}},
  "sporus": {"name": "Sporus", "aka": ["Sporus"], "face": {"age": "jeune", "hair": "noir", "coif": "long", "skin": "porcelaine"}, "qui": "Le jeune compagnon de Lucius, frêle et blanc comme une fille, qui le sert en tout.", "aspect": {"allure": "robe blanche brodée de palmes d'or", "signe": "un petit miroir au cou"}},
  "amycles": {"name": "Amyclès", "aka": ["Amyclès"], "face": {"age": "ancien", "hair": "blanc", "coif": "court", "skin": "hale", "beard": "longue"}, "qui": "Le père d'Acté, un vieillard de Corinthe hospitalier et pieux, juge aux jeux.", "aspect": {"allure": "manteau grec, bâton de juge"}},
  "lybicus": {"name": "Lybicus", "aka": ["Lybicus"], "face": {"age": "adulte", "hair": "noir", "coif": "rase", "skin": "ebene"}, "qui": "Le gardien noir de Phoebé, la tigresse apprivoisée de Lucius.", "aspect": {"allure": "pagne, poignard à la ceinture"}},
  "lentulus": {"name": "Cneus Lentulus", "aka": ["Lentulus", "Cneus Lentulus"], "face": {"age": "mur", "hair": "gris", "coif": "court", "skin": "clair"}, "qui": "Le proconsul romain de Corinthe, qui préside aux jeux.", "aspect": {"allure": "toge bordée de pourpre, licteurs"}},
  "sabina": {"name": "Sabina", "aka": ["Sabina"], "face": {"age": "jeune", "hair": "noir", "coif": "long", "skin": "porcelaine"}, "qui": "Une jeune esclave que Lucius donne à Acté, et dont le visage lui semble connu.", "aspect": {"allure": "tunique d'esclave", "signe": "un regard triste"}},
  "galba": {"name": "Sulpicius Galba", "aka": ["Galba", "Sulpicius Galba"], "face": {"age": "ancien", "hair": "gris", "coif": "degarni", "skin": "clair"}, "qui": "Un vieux patricien d'une famille aussi ancienne que Rome, vainqueur en Afrique et en Germanie.", "aspect": {"allure": "toge, anneau de sénateur"}},
  "agrippine": {"name": "Agrippine", "aka": ["Agrippine"], "face": {"age": "mur", "hair": "noir", "coif": "chignon", "skin": "clair"}, "qui": "La mère de l'empereur, veuve de Claude, une femme belle encore et rompue aux secrets du palais.", "aspect": {"allure": "stole sombre, voile sur la tête", "signe": "une voix vibrante"}},
  "anicetus": {"name": "Anicétus", "aka": ["Anicétus"], "face": {"age": "mur", "hair": "noir", "coif": "court", "skin": "hale", "beard": "barbe"}, "qui": "Un affranchi de l'empereur, commandant de la flotte de Misène, son confident pour les basses besognes.", "aspect": {"allure": "manteau d'officier de marine"}},
  "locuste": {"name": "Locuste", "aka": ["Locuste"], "face": {"age": "ancien", "hair": "gris", "coif": "long", "skin": "beige"}, "qui": "Une empoisonneuse que l'empereur a tirée de prison et logée comme une maîtresse.", "aspect": {"allure": "cheveux défaits sur le visage", "signe": "parle sans bouger"}},
  "acerronie": {"name": "Acerronie", "aka": ["Acerronie"], "face": {"age": "jeune", "hair": "chatain", "coif": "chignon", "skin": "clair"}, "qui": "Une jeune esclave de la suite d'Agrippine.", "aspect": {"allure": "tunique de servante"}},
  "paul": {"name": "Paul", "aka": ["Paul"], "face": {"age": "ancien", "hair": "blanc", "coif": "court", "skin": "hale", "beard": "longue"}, "qui": "Un vieillard venu de Tarse, apôtre du Christ, qui a fait des tentes à Corinthe et prêché à la synagogue.", "aspect": {"allure": "manteau brun, bâton de voyage"}},
  "silas": {"name": "Silas", "aka": ["Silas"], "face": {"age": "jeune", "hair": "noir", "coif": "court", "skin": "brun"}, "qui": "Un jeune Syrien chrétien, compagnon de Paul, habitué aux forêts et au désert.", "aspect": {"allure": "tunique courte, arc à l'épaule"}},
  "timothee": {"name": "Timothée", "aka": ["Timothée"], "face": {"age": "mur", "hair": "gris", "coif": "court", "skin": "hale", "beard": "barbe"}, "qui": "Le pêcheur chrétien qui abrite Paul dans sa cabane, face à l'île de Nisida.", "aspect": {"allure": "bras nus, filets sur l'épaule"}},
  "poppee": {"name": "Poppée", "aka": ["Poppée"], "face": {"age": "jeune", "hair": "blond", "coif": "chignon", "skin": "porcelaine"}, "qui": "La favorite de l'empereur, puis son épouse, qui ferre ses mules d'or.", "aspect": {"allure": "épingles d'or dans les cheveux"}},
  "phaon": {"name": "Phaon", "aka": ["Phaon"], "face": {"age": "mur", "hair": "chatain", "coif": "court", "skin": "clair"}, "qui": "Un affranchi de l'empereur, qui possède une villa hors de Rome.", "aspect": {"allure": "tunique d'affranchi"}},
  "epaphrodite": {"name": "Epaphrodite", "aka": ["Epaphrodite"], "face": {"age": "adulte", "hair": "noir", "coif": "court", "skin": "beige"}, "qui": "Le secrétaire de l'empereur.", "aspect": {"allure": "tablettes à la ceinture"}},
  "vindex": {"name": "Julius Vindex", "aka": ["Vindex", "Julius Vindex"], "face": {"age": "adulte", "hair": "brun", "coif": "court", "skin": "clair", "beard": "moustache"}, "qui": "Un préteur d'Aquitaine, de race royale, qui appelle la Gaule à la révolte.", "aspect": {"allure": "cuirasse et manteau de préteur"}},
}

NO_AUTO = ["agrippine", "lentulus", "locuste", "lybicus", "phaon", "poppee", "timothee", "vindex"]
MEET = {"IV_1": ["lentulus"], "VII_5": ["agrippine"], "IX_1": ["locuste"], "XI_3": ["timothee"], "XIII_3": ["poppee"], "XV_10": ["lybicus"], "XVI_3": ["vindex"], "XVII_2": ["phaon"]}

WORDS = {
  "birème|birèmes": "Un navire antique à deux rangs de rames superposés.",
  "trirème|trirèmes": "Un navire antique à trois rangs de rames superposés.",
  "triclinium": "La salle à manger romaine, où l'on mange couché sur des lits autour de la table.",
  "proconsul": "Le gouverneur romain d'une province.",
  "licteur|licteurs": "L'huissier qui marche devant un magistrat romain en portant des faisceaux de verges.",
  "quadrige|quadriges": "Un char attelé de quatre chevaux de front.",
  "spina": "Le mur bas qui partage en deux la piste d'un cirque romain, et autour duquel tournent les chars.",
  "cythare|cithare": "Un instrument à cordes que l'on pince, tenu contre la poitrine.",
  "stole": "La longue robe des femmes romaines.",
  "chlamyde": "Un court manteau grec agrafé sur l'épaule.",
  "caldarium": "La salle chaude des bains romains.",
  "affranchi|affranchis": "Un ancien esclave rendu libre par son maître.",
  "prétorien|prétoriens": "Un soldat de la garde de l'empereur.",
  "rétiaire": "Un gladiateur armé d'un filet et d'un trident.",
  "mirmillon": "Un gladiateur casqué, armé d'une épée courte et d'un bouclier.",
  "spoliaire": "La salle sous l'amphithéâtre où l'on porte les gladiateurs morts ou blessés.",
  "bestiaire|bestiaires": "Celui qu'on jette dans l'arène contre les bêtes sauvages.",
  "sesterce|sesterces": "Une petite pièce de monnaie romaine.",
  "eunuque": "Un homme châtré, autrefois employé au service des palais.",
  "apôtre": "L'un des disciples envoyés par le Christ pour répandre sa parole.",
  "néophyte": "Une personne qui vient d'entrer dans une religion.",
  "catacombes": "Les galeries souterraines de Rome où les premiers chrétiens enterraient leurs morts et se cachaient.",
  "préteur": "Un magistrat romain chargé de la justice, ou du gouvernement d'une province.",
  "ides": "Dans le calendrier romain, le milieu du mois ; les ides de mars tombent le 15.",
}


PAGES = {
  "I_1": ["Les fleurs du rivage", "rivage"], "I_2": ["La birème dorée", "rivage"], "I_3": ["Du pied droit", "rivage"], "I_4": ["Le stade et la maison d'Amyclès", "maison"],
  "II_1": ["La royauté du festin", "maison"], "II_2": ["Ce qu'on dit de César", "maison"], "II_3": ["Le licteur du proconsul", "maison"], "II_4": ["La montée à la citadelle", "citadelle"], "II_5": ["Le golfe au crépuscule", "citadelle"], "II_6": ["Le cri dans la nuit", "citadelle"],
  "III_1": ["Les inscrits de la lutte", "gymnase"], "III_2": ["Le tirage au sort", "gymnase"], "III_3": ["L'athlète et le Sybarite", "gymnase"], "III_4": ["La couronne sur la statue", "gymnase"],
  "IV_1": ["Le cortège des dieux", "cirque"], "IV_2": ["Les quatre factions", "cirque"], "IV_3": ["Les premiers tours", "cirque"], "IV_4": ["La colombe de la victoire", "cirque"],
  "V_1": ["Un dieu parmi les hommes", "theatre"], "V_2": ["Le chant de Médée", "theatre"], "V_3": ["La fuite sur la birème", "mer"],
  "VI_1": ["La tigresse et l'esclave", "mer"], "VI_2": ["Sabina", "mer"], "VI_3": ["De la Grèce à Neapolis", "naples"], "VI_4": ["Le triomphe et le nom", "capitole"],
  "VII_1": ["La maison dorée", "palais"], "VII_2": ["Le bain et la morsure", "palais"], "VII_3": ["Le caldarium", "palais"], "VII_4": ["La femme voilée", "palais"], "VII_5": ["Britannicus", "palais"], "VII_6": ["Agrippine", "palais"],
  "VIII_1": ["Les jardins sous la lune", "jardins"], "VIII_2": ["Les gémissements des prisons", "jardins"], "VIII_3": ["Lucius toujours", "jardins"], "VIII_4": ["La vie d'Agrippine", "jardins"], "VIII_5": ["Le nom de la visiteuse", "jardins"],
  "IX_1": ["La chambre des poisons", "palais"], "IX_2": ["La tête qui se plaint", "velabre"], "IX_3": ["L'oracle de Locuste", "velabre"],
  "X_1": ["Les adieux de Bauli", "bauli"], "X_2": ["Acté sur la trirème", "golfe"], "X_3": ["Le naufrage", "golfe"], "X_4": ["Le festin de l'empereur", "bauli"], "X_5": ["La villa du lac Lucrin", "lucrin"], "X_6": ["Le vieillard sur la grève", "cabane"],
  "XI_1": ["Une nuit d'angoisse", "bauli"], "XI_2": ["Devant le lit de sa mère", "lucrin"], "XI_3": ["La barque de Silas", "cabane"], "XI_4": ["Le juste de Corinthe", "cabane"], "XI_5": ["La parole de Paul", "cabane"], "XI_6": ["Le marchand du temple", "cabane"], "XI_7": ["La confession d'Acté", "cabane"],
  "XII_1": ["La marche de nuit", "route"], "XII_2": ["Chez l'affranchi", "route"], "XII_3": ["Les larmes de l'esclave", "route"], "XII_4": ["Lève-toi et parle", "route"], "XII_5": ["Sous la voie Appienne", "catacombes"],
  "XIII_1": ["Une ville sous la ville", "catacombes"], "XIII_2": ["La vie des premiers chrétiens", "catacombes"], "XIII_3": ["Le règne de Poppée", "catacombes"], "XIII_4": ["L'arrestation de Paul", "catacombes"],
  "XIV_1": ["Le poignard sous la stole", "rome"], "XIV_2": ["Le lit nuptial", "palais"], "XIV_3": ["Les noces de César", "capitole"], "XIV_4": ["Ni l'un ni l'autre", "prison"], "XIV_5": ["Le baptême", "prison"],
  "XV_1": ["Les présents de gladiateurs", "amphitheatre"], "XV_2": ["Le rétiaire et le mirmillon", "amphitheatre"], "XV_3": ["César est Dieu", "amphitheatre"], "XV_4": ["Les dimachères", "amphitheatre"], "XV_5": ["Les andabates", "amphitheatre"], "XV_6": ["Les chrétiens aux bêtes", "amphitheatre"], "XV_7": ["Le taureau", "amphitheatre"], "XV_8": ["Le lion", "amphitheatre"], "XV_9": ["La course du cheval", "amphitheatre"], "XV_10": ["La tigresse", "amphitheatre"],
  "XVI_1": ["L'homme voilé de la voie Nomentane", "nomentane"], "XVI_2": ["Salut, César", "nomentane"], "XVI_3": ["Vindex et Galba", "nomentane"],
  "XVII_1": ["Mauvais chanteur", "palais"], "XVII_2": ["La mort de Vindex", "palais"], "XVII_3": ["La forêt desséchée", "rome"], "XVII_4": ["Le dernier chant au théâtre", "rome"], "XVII_5": ["Le dîner des lettres d'Espagne", "palais"],
  "XVIII_1": ["Le poison de Locuste", "palais"], "XVIII_2": ["La boîte d'or disparue", "palais"], "XVIII_3": ["La carrière", "villa"], "XVIII_4": ["La pierre refermée", "villa"], "XVIII_5": ["La vengeance de Sporus", "villa"], "XVIII_6": ["Le dernier devoir", "villa"],
  "XIX_1": ["Le tombeau de Néron", "tombeau"],
}
