# Fiche de « La Femme au collier de velours » (id velours) pour livre.py (texte de Dumas, 1850).
# Texte : gut.py sur Gutenberg n° 18003 (miroir orkeilius/gutenberg_fr_mirror), entre fiches/velours_texte.py pre et post.
HEAD = """// « La Femme au collier de velours », Alexandre Dumas, 1850 : un livre à lire, sans choix (lecture: true). Texte de Dumas,
// domaine public, d'après l'édition numérique du projet Gutenberg. Les titres des chapitres sont ceux de Dumas ; les
// titres des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude."""

BASE = {
  "id": "velours",
  "title": "La Femme au collier de velours",
  "subtitle": "Un roman à lire · Alexandre Dumas, 1850",
  "summary": "Dumas se souvient de son ami Charles Nodier et de l'histoire qu'il racontait : celle du jeune Hoffmann, peintre, musicien et poète, qui quitte sa fiancée de Mannheim pour le Paris de 1793 et s'éprend d'une danseuse de l'Opéra, qui porte au cou un étroit collier de velours noir fermé par une agrafe de diamants.",
  "tags": ["fantastique", "historique"],
  "author": "Alexandre Dumas",
  "lecture": True,
  "age": 14,
  "skin": "parchemin",
  "cover": {"motif": "oeil", "color": "#3a2230"},
  "glossary": None,
  "voice": "troisième personne, passé",
  "version": 1,
  "notice": {
    "title": "Un conte fantastique de 1850",
    "reminder": "Ce chapitre montre la Terreur et la guillotine.",
    "text": [
      "*La Femme au collier de velours* a paru en 1850. Le texte est celui de Dumas, sans retouche, d'après l'édition établie par ebooksgratuits.com et diffusée par le projet Gutenberg. Les titres des chapitres sont ceux de Dumas.",
      "Le premier chapitre est un long souvenir de Charles Nodier et de ses soirées à l'Arsenal ; le conte commence au deuxième. Son héros est l'écrivain allemand E. T. A. Hoffmann, jeune, tel que Dumas l'imagine, et l'on croise Danton et madame Du Barry.",
      "Le livre se passe sous la Terreur, au pied de l'échafaud. Il montre des exécutions, la passion du jeu, et une nuit d'amour qui tourne à l'épouvante.",
    ],
  },
  "intro": [],
  "world": {"start": {"place": "tunis", "hour": 5, "gold": 0, "food": 0, "items": [], "kits": {"guerrier": [], "rodeur": [], "voleur": [], "mage": [], "pretre": [], "barde": []}}},
}

def roman(n):
    out = ''
    for v, r in ((100, 'C'), (90, 'XC'), (50, 'L'), (40, 'XL'), (10, 'X'), (9, 'IX'), (5, 'V'), (4, 'IV'), (1, 'I')):
        while n >= v: out += r; n -= v
    return out

TITRES = [
  "L'Arsenal",
  "La famille d'Hoffmann",
  "Un amoureux et un fou",
  "Maître Gottlieb Murr",
  "Antonia",
  "Le serment",
  "Une barrière de Paris en 1793",
  "Comment les musées et les bibliothèques étaient fermés, mais comment la place de la Révolution était ouverte",
  "« Le Jugement de Pâris »",
  "Arsène",
  "La deuxième représentation du « Jugement de Pâris »",
  "L'estaminet",
  "Le portrait",
  "Le tentateur",
  "Le numéro 113",
  "Le médaillon",
  "Un hôtel de la rue Saint-Honoré",
]


R = [
  "Le 4 décembre 1846, en rade de Tunis, le narrateur, Dumas lui-même, s'éveille d'un rêve triste et écrit à une amie de jeunesse, la fille de Charles Nodier. Il se souvient des dimanches de l'Arsenal, la bibliothèque dont Nodier avait la garde : l'éphémère qui ressuscite d'une goutte de pluie, la Bible introuvable, la lecture de *Christine*, le treizième convive, les danses dans le salon blanc. Nodier est mort ; l'histoire qui suit est celle qu'il racontait.",
  "Mannheim, au temps où le Rhin n'avait pas encore de bateaux à vapeur. Dans une petite chambre pleine de pinceaux, d'instruments et de papiers, un jeune homme peintre, musicien et poète, Hoffmann, guette derrière son rideau le portail de l'église des Jésuites.",
  "Son ami Zacharias Werner et lui rêvent d'aller voir Paris. Ils jouent leurs derniers frédérics d'or ; Hoffmann gagne une fortune, et un vieil officier lui fait une prédiction. Il envoie une grande part de son gain chez lui, à Kœnigsberg. Werner part pour la France ; Hoffmann, qui a vu passer une jeune fille, court chez le vieux chef d'orchestre Gottlieb Murr.",
  "Maître Gottlieb Murr, petit vieillard à la jambe tordue, juge les musiciens sans pitié et met un violon entre les mains d'Hoffmann. Pendant qu'il joue, la porte s'ouvre : dans la glace apparaît Antonia, la fille du maître.",
  "Antonia a dix-sept ans ; sa mère, cantatrice, est morte en chantant. Elle accueille Hoffmann comme un frère, chante avec lui, et le vieux Gottlieb l'appelle son fils.",
  "Hoffmann aime Antonia, mais Paris l'appelle. Antonia le laisse partir. Il lui jure de rester fidèle et de ne plus jamais jouer ; elle lui donne un médaillon où est peint son portrait.",
  "Hoffmann arrive dans le Paris de la Terreur. À la barrière, les sectionnaires examinent ses papiers, admirent sa façon de fumer et parlent de graisser la guillotine. Il loge au quai aux Fleurs.",
  "Les musées, les bibliothèques et le Luxembourg sont fermés. Sous ses fenêtres, la foule attend la sortie des condamnés de la Conciergerie. Hoffmann veut fuir ce spectacle et se trouve pris dans la foule qui court à l'échafaud ; il voit passer sur la charrette madame Du Barry, qui s'accroche à la vie et crie de terreur.",
  "Pour oublier, il va à l'Opéra, où l'on joue *Le Jugement de Pâris*. Son voisin, un petit homme vêtu de noir, médecin, porte une tabatière ornée d'une tête de mort en diamants.",
  "Arsène paraît, en Flore. Elle porte au cou un étroit collier de velours noir, fermé par une agrafe de diamants. Le médecin lui apprend qu'elle est la maîtresse de Danton. Entre les yeux de la danseuse et la tabatière du docteur passent des éclairs étranges, et Hoffmann sort comme un fou.",
  "Hoffmann retrouve Werner, puis guette Arsène à la sortie des artistes : une voiture l'emporte. Il revient à l'Opéra pour la seconde représentation ; une autre danseuse tient le rôle, et la salle lui semble sale et triste, comme si le charme s'était éteint.",
  "Danton a enlevé Arsène, jaloux d'un jeune homme de l'orchestre. Hoffmann erre dans Paris, hanté par la danseuse, et fume dans un estaminet de la rue de la Monnaie. Le petit médecin l'y retrouve : Arsène cherche un peintre pour faire son portrait.",
  "Une voiture noire les mène chez Arsène. Elle pose en bacchante et se dévêt devant le peintre comme devant un miroir. Quand Hoffmann lui baise la main, on le jette dehors.",
  "Humilié, Hoffmann croise les charrettes de condamnés, puis Werner, qui a fait fortune au jeu au Palais-Égalité. Il pense à Arsène, à l'or qu'il faudrait jeter à ses pieds, oublie son serment et court au jeu.",
  "Sous les galeries du Palais-Royal, devenu Palais-Égalité, on joue au numéro 113. Hoffmann perd tout, et dans sa poche il ne lui reste que le médaillon d'Antonia, qu'il pose sur le tapis.",
  "Le croupier refuse le médaillon. Un changeur de Heidelberg prête trois louis dessus. Hoffmann gagne une fortune et court chez Arsène : elle est partie. Dans la nuit, sur la place de la Révolution, au pied de l'échafaud, une femme est assise, un collier de velours au cou.",
  "Son amant a été arrêté la veille ; Arsène s'est enfuie de chez elle, telle qu'elle était. Hoffmann l'emmène dans un hôtel de la rue Saint-Honoré, la couvre d'or, joue pour elle, la regarde danser. Au matin, elle est glacée. Le petit médecin arrive et ouvre l'agrafe du collier de velours. Hoffmann rentre à Mannheim, où l'attendent deux tombes.",
]

def titre(i, t):
    return "Chapitre " + roman(i + 1) + " · " + t
CHAPTERS = [{"title": titre(i, t), "text": r} for i, (t, r) in enumerate(zip(TITRES, R))]
for i in (7, 16): CHAPTERS[i]["notice"] = True

PLACES = {
  "tunis": {"ambiance": "mer", "name": "La rade de Tunis", "map": "monde", "x": 51, "y": 38, "region": "À bord du Véloce, en vue de Carthage", "desc": "Un navire à l'ancre au lever du jour, devant Carthage et Tunis, et un passager qui écrit à une amie de Paris."},
  "arsenal": {"ambiance": "ville", "name": "L'Arsenal", "map": "paris", "x": 70, "y": 58, "region": "Paris, près du quai des Célestins", "desc": "La bibliothèque dont Nodier avait la garde : son appartement, sa table où l'on ajoutait toujours un couvert, et le salon blanc où l'on dansait le dimanche."},
  "paris": {"ambiance": "ville", "name": "Paris en 1793", "map": "paris", "x": 50, "y": 50, "region": "Paris", "desc": "Un Paris de cocardes et de bonnets rouges, de patrouilles, de quais déserts, de musées fermés, et de charrettes qui roulent vers la place de la Révolution."},
  "mannheim": {"ambiance": "ville", "name": "Mannheim", "map": "europe", "x": 52, "y": 36, "region": "Grand-duché de Bade, au bord du Rhin", "desc": "Une jolie ville du Rhin, son église des Jésuites, ses étudiants et ses maisons de jeu ouvertes à la saison des eaux."},
  "murr": {"ambiance": "ville", "name": "La maison de maître Gottlieb", "map": "europe", "x": 53, "y": 37, "region": "Mannheim", "desc": "Un cabinet encombré de partitions et de pupitres, des violons de Stradivarius et d'Amati, une grande glace, et un canapé où le vieillard berce sa fille."},
  "barriere": {"ambiance": "route", "name": "Une barrière de Paris", "map": "paris", "x": 85, "y": 40, "region": "Aux portes de Paris", "desc": "Un poste de sectionnaires qui lisent les passeports, examinent les mains et boivent à la République."},
  "revolution": {"ambiance": "nuit", "name": "La place de la Révolution", "map": "paris", "x": 35, "y": 40, "region": "Paris", "desc": "La grande place où se dresse l'échafaud, le fossé recouvert de planches, et la foule qui attend chaque jour à quatre heures."},
  "opera": {"ambiance": "ville", "name": "L'Opéra", "map": "paris", "x": 60, "y": 32, "region": "Paris, porte Saint-Martin", "desc": "Une salle de lustres et de fleurs le premier soir, puis de bonnets rouges et de carmagnoles le second, où l'on donne *Le Jugement de Pâris*."},
  "estaminet": {"ambiance": "ville", "name": "L'estaminet de la rue de la Monnaie", "map": "paris", "x": 52, "y": 48, "region": "Paris, près du Pont-Neuf", "desc": "Un rendez-vous des plus rudes fumeurs de Paris, si plein de fumée qu'on s'y croirait dans une taverne anglaise ou une table d'hôte allemande."},
  "boudoir": {"ambiance": "ville", "name": "Le boudoir d'Arsène", "map": "paris", "x": 55, "y": 28, "region": "Paris, rue de Hanovre", "desc": "Un boudoir de luxe, un lit de cachemire rouge, une peau de tigre aux ongles d'or et des grappes de raisin pour la pose."},
  "palais": {"ambiance": "ville", "name": "Le Palais-Égalité", "map": "paris", "x": 48, "y": 38, "region": "Paris, l'ancien Palais-Royal", "desc": "Des galeries pleines de filles en diamants, de changeurs et de tripots ; au numéro 113, sous une lanterne rouge, une banque d'or où l'on joue à la roulette."},
  "hotel": {"ambiance": "ville", "name": "Un hôtel de la rue Saint-Honoré", "map": "paris", "x": 44, "y": 40, "region": "Paris", "desc": "Un hôtel à tapis sur l'escalier, une chambre bien chauffée, une table servie, du champagne, un piano, et un rideau de damas rouge."},
}


PEOPLE = {
  "nodier": {"name": "Charles Nodier", "aka": ["Charles Nodier", "Nodier"], "face": {"age": "mur", "hair": "gris", "coif": "milong", "skin": "clair"}, "qui": "L'écrivain bibliothécaire de l'Arsenal, savant, conteur et hôte de toute une jeunesse romantique.", "aspect": {"allure": "grand, voûté, un livre à la main", "signe": "conte sans jamais se répéter"}},
  "mnodier": {"name": "Madame Nodier", "aka": ["madame Nodier"], "face": {"age": "mur", "hair": "chatain", "coif": "chignon", "skin": "clair"}, "qui": "L'épouse de Charles Nodier, qui tient la maison de l'Arsenal.", "aspect": {"allure": "bonnet de maîtresse de maison"}},
  "chalabre": {"name": "Le marquis de Chalabre", "aka": ["marquis de Chalabre"], "face": {"age": "ancien", "hair": "blanc", "coif": "court", "skin": "clair"}, "qui": "Un bibliophile qui rêve d'une Bible que personne d'autre ne posséderait.", "aspect": {"allure": "habit à l'ancienne, loupe en poche"}},
  "hoffmann": {"name": "Hoffmann", "aka": ["Hoffmann"], "face": {"age": "jeune", "hair": "noir", "coif": "milong", "skin": "porcelaine"}, "qui": "Un jeune Allemand de Kœnigsberg, à la fois peintre, musicien et poète, d'imagination fantastique.", "aspect": {"allure": "petit, maigre, longs doigts", "signe": "fume la pipe sans relâche"}},
  "werner": {"name": "Zacharias Werner", "aka": ["Zacharias Werner", "Werner", "Zacharias"], "face": {"age": "jeune", "hair": "chatain", "coif": "court", "skin": "clair"}, "qui": "L'ami d'enfance d'Hoffmann, poète mélancolique et joueur.", "aspect": {"allure": "habit d'étudiant, poches pleines d'or"}},
  "gottlieb": {"name": "Maître Gottlieb Murr", "aka": ["Gottlieb Murr", "maître Gottlieb", "Gottlieb"], "face": {"age": "ancien", "hair": "blanc", "coif": "court", "skin": "clair"}, "qui": "Le vieux chef d'orchestre de Mannheim, ami de Paisiello et de Cimarosa, terrible juge des musiciens.", "aspect": {"allure": "petit vieillard, jambe en tire-bouchon", "signe": "sautille et tourne sur lui-même"}},
  "antonia": {"name": "Antonia", "aka": ["Antonia"], "face": {"age": "jeune", "hair": "chatain", "coif": "long", "skin": "porcelaine"}, "qui": "La fille de maître Gottlieb, qui chante comme chantait sa mère.", "aspect": {"allure": "robe simple, mince et flexible", "signe": "une voix céleste"}},
  "docteur": {"name": "Le petit médecin noir", "aka": ["petit homme noir"], "face": {"age": "mur", "hair": "noir", "coif": "court", "skin": "beige"}, "qui": "Un petit homme vêtu de noir, médecin, voisin d'Hoffmann à l'Opéra.", "aspect": {"allure": "habit noir, tabatière à tête de mort", "signe": "un rire grinçant"}},
  "arsene": {"name": "Arsène", "aka": ["Arsène"], "face": {"age": "jeune", "hair": "noir", "coif": "long", "skin": "porcelaine"}, "qui": "Une danseuse de l'Opéra, qui danse Flore dans *Le Jugement de Pâris*.", "aspect": {"allure": "costume de Flore, gaze et fleurs", "signe": "un collier de velours noir"}},
  "danton": {"name": "Danton", "aka": ["Danton"], "face": {"age": "adulte", "hair": "brun", "coif": "milong", "skin": "hale"}, "qui": "Le tribun de la Révolution, l'un des maîtres de Paris en 1793.", "aspect": {"allure": "carrure de lutteur, visage grêlé"}},
  "dubarry": {"name": "Madame Du Barry", "aka": ["Du Barry"], "face": {"age": "mur", "hair": "chatain", "coif": "court", "skin": "clair"}, "qui": "L'ancienne favorite de Louis XV, condamnée par le tribunal révolutionnaire.", "aspect": {"allure": "cheveux coupés sur la nuque"}},
  "eucharis": {"name": "Mlle Eucharis", "aka": ["Eucharis"], "face": {"age": "jeune", "hair": "blond", "coif": "chignon", "skin": "clair"}, "qui": "La femme de chambre d'Arsène.", "aspect": {"allure": "tablier de dentelle"}},
}

NO_AUTO = ["danton", "docteur"]
MEET = {"IX_3": ["docteur"], "X_4": ["danton"]}

WORDS = {
  "éphémère": "Un insecte qui ne vit qu'un jour.",
  "bibliophile|bibliophiles": "Un amateur de livres rares.",
  "frédéric|frédérics": "Une pièce d'or de Prusse.",
  "thaler|thalers": "Une grosse pièce d'argent allemande.",
  "diligence": "Une grande voiture publique à chevaux, pour les voyageurs.",
  "sectionnaire|sectionnaires": "Sous la Révolution, un membre d'une section, l'assemblée d'un quartier de Paris.",
  "carmagnole|carmagnoles": "Sous la Révolution, une veste courte des révolutionnaires, et la chanson qui porte ce nom.",
  "casaquin": "Une sorte de veste de femme.",
  "officieux": "Sous la Révolution, un domestique : on évitait le mot de valet.",
  "assignat|assignats": "Le papier-monnaie de la Révolution, qui perdit vite sa valeur.",
  "estaminet": "Un café où l'on fume.",
  "croupier|croupiers": "L'employé d'une maison de jeu qui tient la banque et ramasse les mises.",
  "changeur": "Un marchand qui change les monnaies étrangères.",
  "bacchante": "Une prêtresse de Bacchus, dieu du vin, que l'on peint couronnée de vigne.",
  "agrafe": "Un fermoir.",
  "tabatière": "Une petite boîte à tabac à priser.",
}


PAGES = {
  "I_1": ["Un rêve en rade de Tunis", "tunis"], "I_2": ["Lettre à une amie", "tunis"], "I_3": ["Les soirées d'autrefois", "tunis"], "I_4": ["Bizerte et l'Arsenal", "arsenal"], "I_5": ["Les bâtisseurs", "arsenal"], "I_6": ["Le taratantaleo", "arsenal"], "I_7": ["La goutte de pluie", "arsenal"], "I_8": ["Les quais et les bouquinistes", "paris"], "I_9": ["La Bible qui n'existait pas", "arsenal"], "I_10": ["Christine", "arsenal"], "I_11": ["Le treizième convive", "arsenal"], "I_12": ["Les histoires de Nodier", "arsenal"], "I_13": ["La lampe de l'église", "arsenal"], "I_14": ["Le borgne", "arsenal"], "I_15": ["Le salon s'allume", "arsenal"], "I_16": ["Nodier académicien", "arsenal"],
  "II_1": ["Mannheim", "mannheim"], "II_2": ["La chambre d'un artiste", "mannheim"], "II_3": ["La tante", "mannheim"],
  "III_1": ["Werner", "mannheim"], "III_2": ["La maison de jeu", "mannheim"], "III_3": ["La jeune fille de l'église", "mannheim"],
  "IV_1": ["Maître Gottlieb", "murr"], "IV_2": ["Connaître l'homme", "murr"], "IV_3": ["Le violon", "murr"], "IV_4": ["Un Stradivarius", "murr"], "IV_5": ["Antonia dans la glace", "murr"],
  "V_1": ["Antonia", "murr"], "V_2": ["Bonjour, frère", "murr"], "V_3": ["Le chant", "murr"],
  "VI_1": ["Le danger du chant", "murr"], "VI_2": ["La voix qui appelle à Paris", "murr"], "VI_3": ["Les fiançailles", "murr"], "VI_4": ["Le médaillon", "murr"],
  "VII_1": ["La France de 1793", "barriere"], "VII_2": ["Les déguisements", "barriere"], "VII_3": ["Le passeport", "barriere"], "VII_4": ["Le quai aux Fleurs", "paris"],
  "VIII_1": ["Les musées fermés", "paris"], "VIII_2": ["La foule du quai", "paris"], "VIII_3": ["La place de la Révolution", "revolution"],
  "IX_1": ["L'Opéra", "opera"], "IX_2": ["L'avant-propos du ballet", "opera"], "IX_3": ["La tabatière", "opera"],
  "X_1": ["Le médecin", "opera"], "X_2": ["Vestris", "opera"], "X_3": ["Arsène", "opera"], "X_4": ["Les rayons de l'agrafe", "opera"],
  "XI_1": ["Zacharias retrouvé", "paris"], "XI_2": ["La neige à la porte des artistes", "paris"], "XI_3": ["Deux visions", "paris"], "XI_4": ["La salle changée", "opera"],
  "XII_1": ["L'Opéra éteint", "opera"], "XII_2": ["La déesse des jardins", "paris"], "XII_3": ["L'estaminet", "estaminet"],
  "XIII_1": ["La voiture noire", "boudoir"], "XIII_2": ["Le boudoir", "boudoir"], "XIII_3": ["La bacchante", "boudoir"],
  "XIV_1": ["L'humiliation", "paris"], "XIV_2": ["Werner au café", "paris"], "XIV_3": ["Un million sur la table", "paris"],
  "XV_1": ["Le Palais-Égalité", "palais"], "XV_2": ["Le luxe des filles", "palais"], "XV_3": ["Le numéro 113", "palais"], "XV_4": ["Le médaillon sur le tapis", "palais"],
  "XVI_1": ["Le changeur", "palais"], "XVI_2": ["Trois louis", "palais"], "XVI_3": ["La femme assise", "revolution"],
  "XVII_1": ["Arsène", "revolution"], "XVII_2": ["L'hôtel de la rue Saint-Honoré", "hotel"], "XVII_3": ["Le champagne", "hotel"], "XVII_4": ["La danse de Flore", "hotel"], "XVII_5": ["Le petit homme noir", "hotel"], "XVII_6": ["La foule", "hotel"], "XVII_7": ["Le portrait effacé", "mannheim"],
}
