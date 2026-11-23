# Fiche de « La Tulipe noire » pour livre.py (texte d'Alexandre Dumas, 1850).
# Texte : gut.py sur Gutenberg n° 26504 (miroir orkeilius/gutenberg_fr_mirror), entre fiches/tulipe_texte.py pre et post.
HEAD = """// « La Tulipe noire », Alexandre Dumas, 1850 : un livre à lire, sans choix (lecture: true). Texte de Dumas, domaine
// public, numérisé par le projet Gutenberg. Les titres des chapitres sont de Dumas ; ceux des pages, comme tout ce qui
// vit dans les tags (gens, lieux, mots, résumés), sont de Claude."""

BASE = {
  "id": "tulipe",
  "title": "La Tulipe noire",
  "subtitle": "Un roman à lire · Alexandre Dumas, 1850",
  "summary": "Hollande, 1672. La ville de Harlem promet cent mille florins à qui fera naître une tulipe noire. Cornélius van Baërle, jeune savant de Dordrecht qui ne vit que pour ses fleurs, est sur le point d'y parvenir, quand la politique, et la jalousie d'un voisin, le jettent en prison. Il ne lui reste que trois caïeux, et la fille de son geôlier, Rosa.",
  "tags": ["historique", "aventure"],
  "author": "Alexandre Dumas",
  "lecture": True,
  "age": 12,
  "skin": "parchemin",
  "cover": {"motif": "fleur", "color": "#2a2233"},
  "glossary": None,
  "voice": "troisième personne, passé",
  "version": 1,
  "notice": {
    "title": "Un livre de 1850",
    "reminder": "Ce chapitre montre une foule qui massacre deux hommes, avec le regard et les mots de 1850.",
    "text": [
      "*La Tulipe noire* a paru en 1850. Le texte est celui de l'édition complète numérisée par le projet Gutenberg, sans retouche ; la seule note de Dumas est restée à sa place, entre parenthèses.",
      "Le roman part d'un fait réel : le 20 août 1672, à la Haye, la foule a massacré les frères Jean et Corneille de Witt, qui avaient gouverné la république des Provinces-Unies. Dumas le raconte sans rien cacher, et l'on y voit les corps mis en pièces.",
      "La suite est une histoire d'amour et de fleurs : la « tulipomanie », la folie des tulipes, avait vraiment saisi la Hollande au XVIIe siècle, et des bulbes s'y vendaient le prix d'une maison.",
    ],
  },
  "intro": [],
  "world": {"start": {"place": "lahaye", "hour": 10, "gold": 0, "food": 0, "items": [], "kits": {"guerrier": [], "rodeur": [], "voleur": [], "mage": [], "pretre": [], "barde": []}}},
}

def roman(n):
    out = ''
    for v, r in ((50, 'L'), (40, 'XL'), (10, 'X'), (9, 'IX'), (5, 'V'), (4, 'IV'), (1, 'I')):
        while n >= v: out += r; n -= v
    return out
TITRES = [ "Un peuple reconnaissant",  "Les deux frères",  "L'élève de Jean de Witt",  "Les massacreurs",  "L'amateur de tulipes et son voisin",  "La haine d'un tulipier",  "L'homme heureux fait connaissance avec le malheur",  "Une invasion",  "La chambre de famille",  "La fille du geôlier",  "Le testament de Cornélius van Baërle",  "L'exécution",  "Ce qui se passait pendant ce temps-là dans l'âme d'un spectateur",  "Les pigeons de Dordrecht",  "Le guichet",  "Maître et écolière",  "Premier caïeu",  "L'amoureux de Rosa",  "Femme et fleur",  "Ce qui s'était passé pendant ces huit jours",  "Le second caïeu",  "Épanouissement",  "L'envieux",  "Où la tulipe noire change de maître",  "Le président van Herysen",  "Un membre de la société horticole",  "Le troisième caïeu",  "La chanson des fleurs",  "Où van Baërle, avant de quitter Loewestein, règle ses comptes avec Gryphus",  "Où l'on commence de se douter à quel supplice était réservé Cornélius van Baërle",  "Harlem",  "Une dernière prière",  "Conclusion"]

R = [
  "Le 20 août 1672, la Haye court au Buitenhof, la prison où l'on garde Corneille de Witt, accusé par un chirurgien, Tyckelaer, de l'avoir payé pour assassiner le nouveau stathouder, Guillaume d'Orange. Son frère Jean, l'ancien grand pensionnaire de Hollande, vient le chercher. Dans la prison, le geôlier Gryphus et sa fille Rosa.",
  "Les deux frères se retrouvent. Corneille a gardé les lettres compromettantes du ministre français Louvois ; il les a confiées à son filleul de Dordrecht, Cornélius van Baërle. Jean envoie son valet Craeke dire à Cornélius de les brûler sans les lire.",
  "Un jeune homme pâle regarde la foule, avec un officier, et fait éloigner les cavaliers du capitaine Tilly qui protègent la prison : c'est Guillaume d'Orange. Rosa conseille aux deux frères de sortir par une autre porte.",
  "La voiture des de Witt trouve la grille fermée. La foule les arrache de la voiture et les massacre.",
  "À Dordrecht, Cornélius van Baërle, riche et savant, ne vit que pour ses tulipes. Son voisin, Isaac Boxtel, tulipier comme lui et ruiné par sa jalousie, l'épie par-dessus le mur.",
  "La société horticole de Harlem promet cent mille florins à qui fera naître la grande tulipe noire. Boxtel jette dans les plates-bandes de Cornélius deux chats attachés l'un à l'autre ; les tulipes survivent.",
  "Corneille de Witt a confié à son filleul un paquet scellé. Craeke arrive trop tard : Cornélius enveloppe dans la lettre trois caïeux de la tulipe noire. On l'arrête sous les yeux de sa nourrice.",
  "C'est Boxtel qui l'a dénoncé. Il fouille le séchoir de son voisin à la recherche des caïeux, et ne les trouve pas.",
  "On enferme Cornélius au Buitenhof, dans la chambre même où avait dormi Corneille de Witt. Rosa éclaire la scène de sa lanterne.",
  "Gryphus se casse le bras en tombant ; Cornélius le lui remet. Rosa, reconnaissante, le prévient de ce qui l'attend.",
  "Cornélius est condamné à mort. La nuit, il donne à Rosa les trois caïeux et écrit son testament sur une page de la Bible de son parrain.",
  "Sur l'échafaud, au moment où le bourreau lève son épée, on lui annonce que le prince lui fait grâce de la vie : il sera enfermé à vie au château de Loewestein.",
  "Boxtel, qui attendait au pied de l'échafaud de quoi hériter, apprend ce que Cornélius a laissé à Rosa.",
  "À Loewestein, Cornélius attrape des pigeons pour écrire à Dordrecht. Rosa a obtenu du prince que son père devienne geôlier de la forteresse : elle est là.",
  "Gryphus fait sa ronde avec un molosse et fouille le prisonnier. Rosa revient au guichet ; elle a les trois caïeux.",
  "Rosa ne sait pas lire. Cornélius lui apprend, dans la Bible de Corneille de Witt, et lui enseigne les tulipes.",
  "Cornélius plante un premier caïeu dans une cruche qu'il cache sous sa fenêtre ; Rosa plantera le second au jardin. Gryphus surprend la cruche et écrase le caïeu sous son soulier.",
  "Un homme, Jacob, rôde autour de Rosa et l'a vue planter. Cornélius s'inquiète ; Rosa lui reproche d'aimer plus les tulipes qu'elle-même.",
  "Rosa ne vient plus. Huit jours sans la voir, et un seul billet : « Soyez tranquille, votre tulipe se porte bien. »",
  "Rosa revient. Ils se réconcilient, et Cornélius lui parle d'amour.",
  "Le second caïeu a poussé ; Rosa garde la plante dans sa chambre. Gryphus ne se doute de rien.",
  "La tulipe s'épanouit : elle est noire. On écrira au président de la société de Harlem, M. van Herysen.",
  "Le faux Jacob épie Rosa, lui vole une clef, et voit tout.",
  "La tulipe a disparu. Rosa, désespérée, l'avoue à Cornélius, qui accuse Gryphus. Le voleur, lui, est déjà en route pour Harlem.",
  "Rosa s'enfuit à Harlem et court chez le président van Herysen. Un homme l'a précédée avec une tulipe noire, sous le nom de Boxtel.",
  "Van Herysen écoute à peine Rosa. Elle va chercher justice plus haut, et trouve un étranger grave qui l'écoute : le prince.",
  "Devant le prince, Rosa raconte l'histoire des trois caïeux et montre le troisième, enveloppé dans la page de la Bible. Guillaume la croit.",
  "À Loewestein, Cornélius, seul, chante une chanson de fleurs. Gryphus le croit fou et sort son couteau.",
  "Cornélius se défend contre Gryphus avec son bâton. Un colonel arrive avec un ordre, et l'emmène.",
  "Dans la voiture, Cornélius croit qu'on le mène à un nouveau supplice. Pendant ce temps, Guillaume interroge Rosa, et lui dit de se faire belle pour dimanche.",
  "Le 15 mai 1673, Harlem fête la tulipe noire. On la promène en procession, et la foule acclame celui qui la présente.",
  "Cornélius, conduit sous escorte, aperçoit la tulipe noire et demande à la voir de près, une seule fois.",
  "Le prince met la main de Rosa dans celle de Cornélius. Le voleur de la tulipe est démasqué et meurt d'apoplexie. Cornélius est libre, Rosa reçoit les cent mille florins.",
]
CHAPTERS = [{"title": "Chapitre " + roman(i + 1) + " · " + t, "text": r} for i, (t, r) in enumerate(zip(TITRES, R))]
CHAPTERS[3]["notice"] = True

PLACES = {
  "lahaye": {"ambiance": "ville", "name": "La Haye", "map": "hollande", "x": 30, "y": 50, "region": "La capitale des Provinces-Unies", "desc": "Des maisons gothiques, des canaux, un grand parc, et une foule qui court, le couteau à la ceinture."},
  "buitenhof": {"ambiance": "souterrain", "name": "La prison du Buitenhof", "map": "hollande", "x": 31, "y": 52, "region": "La Haye", "desc": "Une prison aux fenêtres grillées, un escalier de pierre, une chambre de famille, et un geôlier qui tient les clefs."},
  "dordrecht": {"ambiance": "ville", "name": "Dordrecht", "map": "hollande", "x": 48, "y": 70, "region": "Sur la Meuse", "desc": "Une belle maison sur le port, un jardin de tulipes, un séchoir plein d'oignons rares, et le mur du voisin."},
  "loewestein": {"ambiance": "chateau", "name": "Le château de Loewestein", "map": "hollande", "x": 62, "y": 72, "region": "Au confluent du Wahal et de la Meuse", "desc": "Une forteresse au bord de l'eau, une cellule au sommet, un guichet dans la porte, et des pigeons sur le toit."},
  "route": {"ambiance": "route", "name": "Sur la route", "map": "hollande", "x": 42, "y": 42, "region": "Entre Dordrecht et Harlem", "desc": "Delft, Rotterdam, des digues, des moulins, et une voiture aux rideaux fermés."},
  "harlem": {"ambiance": "ville", "name": "Harlem", "map": "hollande", "x": 36, "y": 22, "region": "La ville des fleurs", "desc": "Le bois, l'hôtel de ville, la société horticole, et une estrade dressée pour la fête de la tulipe."},
}

PEOPLE = {
  "cornelius": {"name": "Cornélius van Baërle", "aka": ["Cornélius van Baërle", "van Baërle", "Cornélius"], "face": {"age": "jeune", "hair": "chatain", "coif": "milong"}, "qui": "Un jeune savant de Dordrecht, riche et doux, qui ne vit que pour ses tulipes.", "aspect": {"allure": "rêveur, bon, tout à ses fleurs"}},
  "rosa": {"name": "Rosa", "aka": ["Rosa"], "face": {"age": "jeune", "hair": "blond", "coif": "long"}, "qui": "La fille du geôlier, une jeune Frisonne qui ne sait pas lire.", "aspect": {"allure": "dix-huit ans, les yeux bleus", "signe": "le casque d'or des Frisonnes"}},
  "gryphus": {"name": "Gryphus", "aka": ["Gryphus"], "face": {"age": "ancien", "hair": "gris", "coif": "degarni", "beard": "barbe"}, "qui": "Le geôlier, père de Rosa, brutal et soupçonneux.", "aspect": {"allure": "vieux, grossier, méfiant"}},
  "boxtel": {"name": "Isaac Boxtel", "aka": ["Isaac Boxtel", "Boxtel"], "face": {"age": "adulte", "hair": "noir", "coif": "court"}, "qui": "Le voisin de Cornélius, tulipier comme lui, rongé par l'envie.", "aspect": {"allure": "sec, jaloux, l'œil à la lunette"}},
  "jacob": {"name": "Jacob", "aka": ["Jacob"], "face": {"age": "adulte", "hair": "noir", "coif": "court"}, "qui": "Un homme qui veut épouser Rosa et rôde à Loewestein.", "aspect": {"allure": "sournois, toujours à épier"}},
  "corneille": {"name": "Corneille de Witt", "aka": ["Corneille de Witt", "Corneille"], "face": {"age": "mur", "hair": "gris", "coif": "milong", "beard": "moustache"}, "qui": "L'ancien bourgmestre de Dordrecht, frère de Jean de Witt et parrain de Cornélius.", "aspect": {"allure": "quarante-neuf ans, grave, fier"}},
  "jean": {"name": "Jean de Witt", "aka": ["Jean de Witt", "grand pensionnaire"], "face": {"age": "mur", "hair": "brun", "coif": "milong", "beard": "moustache"}, "qui": "L'ancien grand pensionnaire, qui a gouverné la Hollande pendant vingt ans.", "aspect": {"allure": "calme, sévère, un Romain de Hollande"}},
  "guillaume": {"name": "Guillaume d'Orange", "aka": ["Guillaume d'Orange", "Guillaume", "prince d'Orange"], "face": {"age": "jeune", "hair": "brun", "coif": "long"}, "qui": "Le jeune prince d'Orange, que l'on appelle le Taciturne.", "aspect": {"allure": "pâle, froid, silencieux"}},
  "tilly": {"name": "Le capitaine Tilly", "aka": ["Tilly"], "face": {"age": "adulte", "hair": "chatain", "coif": "court", "beard": "moustache"}, "qui": "Le capitaine des cavaliers qui gardent la prison.", "aspect": {"allure": "soldat loyal, obéissant"}},
  "tyckelaer": {"name": "Tyckelaer", "aka": ["Tyckelaer"], "face": {"age": "adulte", "hair": "roux", "coif": "court"}, "qui": "Le chirurgien qui a accusé Corneille de Witt.", "aspect": {"allure": "faux témoin, héros de la foule"}},
  "craeke": {"name": "Craeke", "aka": ["Craeke"], "face": {"age": "jeune", "hair": "blond", "coif": "court"}, "qui": "Le valet de Jean de Witt.", "aspect": {"allure": "fidèle, bon cavalier"}},
  "herysen": {"name": "M. van Herysen", "aka": ["van Herysen", "Herysen"], "face": {"age": "ancien", "hair": "blanc", "coif": "court"}, "qui": "Le président de la société horticole de Harlem.", "aspect": {"allure": "petit, grêle, amoureux des fleurs"}},
  "deken": {"name": "Le colonel van Deken", "aka": ["van Deken"], "face": {"age": "adulte", "hair": "brun", "coif": "court", "beard": "moustache"}, "qui": "Un officier du prince d'Orange.", "aspect": {"allure": "discret, sûr"}},
}
NO_AUTO = ["cornelius", "guillaume", "tyckelaer", "craeke", "herysen"]
MEET = {"V_1": ["cornelius"], "III_1": ["guillaume"], "I_4": ["tyckelaer"], "VII_3": ["craeke"], "XXV_3": ["herysen"]}

WORDS = {
  "tulipier|tulipiers": "Un amateur de tulipes, qui les cultive et en crée de nouvelles.",
  "caïeu|caïeux": "Un petit bulbe qui pousse à côté de l'oignon d'une tulipe et donne une nouvelle plante.",
  "séchoir": "La pièce où l'on fait sécher les oignons de tulipes.",
  "grand pensionnaire": "Le premier magistrat de la province de Hollande, qui gouvernait la république.",
  "stathouder|stathoudérat": "Le chef de l'armée et de l'État des Provinces-Unies, charge des princes d'Orange.",
  "Provinces-Unies": "La république des Pays-Bas, au XVIIe siècle.",
  "ruward": "L'inspecteur des digues.",
  "bourgmestre": "Le maire d'une ville de Hollande.",
  "florin|florins": "La monnaie de Hollande.",
  "geôlier": "L'homme qui garde une prison et ses prisonniers.",
  "guichet": "Une petite ouverture grillée dans la porte d'un cachot.",
  "Frisonne|Frisonnes|frisonnes": "Une femme de la Frise, au nord de la Hollande.",
  "orangiste|orangistes": "Un partisan du prince d'Orange.",
  "plate-bande|plates-bandes": "Une bande de terre où l'on cultive des fleurs.",
}

PAGES = {
  "I_1": ["Le 20 août 1672", "lahaye"], "I_2": ["L'édit perpétuel", "lahaye"], "I_3": ["Le grand pensionnaire", "lahaye"], "I_4": ["Honnête Tyckelaer !", "buitenhof"],
  "II_1": ["Les cavaliers de Tilly", "buitenhof"], "II_2": ["L'escalier de pierre", "buitenhof"], "II_3": ["Le carrosse au vivier", "buitenhof"], "II_4": ["Les lettres de Louvois", "buitenhof"],
  "III_1": ["L'altesse", "lahaye"], "III_2": ["Le député Bowelt", "lahaye"], "III_3": ["La trombe", "lahaye"], "III_4": ["Le conseil de Rosa", "buitenhof"],
  "IV_1": ["La grille fermée", "lahaye"], "IV_2": ["Va toujours !", "lahaye"], "IV_3": ["Au galop !", "lahaye"], "IV_4": ["Le Tol-Hek", "lahaye"],
  "V_1": ["Cornélius van Baërle", "dordrecht"], "V_2": ["Le fils du marchand", "dordrecht"], "V_3": ["Le voisin Boxtel", "dordrecht"], "V_4": ["La lunette", "dordrecht"],
  "VI_1": ["La fièvre des tulipes", "dordrecht"], "VI_2": ["Les deux chats", "dordrecht"], "VI_3": ["Pas une tulipe touchée", "dordrecht"],
  "VII_1": ["Le parrain", "dordrecht"], "VII_2": ["Les trois caïeux", "dordrecht"], "VII_3": ["Craeke", "dordrecht"], "VII_4": ["L'arrestation", "dordrecht"],
  "VIII_1": ["L'œuvre de Boxtel", "dordrecht"], "VIII_2": ["L'échelle", "dordrecht"], "VIII_3": ["La fouille", "dordrecht"],
  "IX_1": ["Minuit au Buitenhof", "buitenhof"], "IX_2": ["La chambre de famille", "buitenhof"],
  "X_1": ["Le bras cassé", "buitenhof"], "X_2": ["La fille du geôlier", "buitenhof"],
  "XI_1": ["Les juges", "buitenhof"], "XI_2": ["L'arrêt", "buitenhof"], "XI_3": ["Gryphus au lit", "buitenhof"], "XI_4": ["Les cent mille florins", "buitenhof"], "XI_5": ["La page de la Bible", "buitenhof"],
  "XII_1": ["L'échafaud", "lahaye"], "XII_2": ["La grâce", "lahaye"],
  "XIII_1": ["Le carrosse au pied de l'échafaud", "lahaye"], "XIII_2": ["L'héritier", "lahaye"],
  "XIV_1": ["Les pigeons", "loewestein"], "XIV_2": ["Rosa à Loewestein", "loewestein"],
  "XV_1": ["La ronde du geôlier", "loewestein"], "XV_2": ["Les gentils messagers", "loewestein"], "XV_3": ["Le guichet", "loewestein"],
  "XVI_1": ["La terre de Rosa", "loewestein"], "XVI_2": ["Chaque jour", "loewestein"], "XVI_3": ["La Bible", "loewestein"],
  "XVII_1": ["Apprendre à lire", "loewestein"], "XVII_2": ["La crainte", "loewestein"], "XVII_3": ["Le faucon sur sa proie", "loewestein"], "XVII_4": ["Le caïeu écrasé", "loewestein"],
  "XVIII_1": ["Jacob", "loewestein"], "XVIII_2": ["L'homme derrière les sureaux", "loewestein"], "XVIII_3": ["Les deux amours", "loewestein"],
  "XIX_1": ["Femme et fleur", "loewestein"], "XIX_2": ["L'inquiétude", "loewestein"], "XIX_3": ["Le billet sous la porte", "loewestein"],
  "XX_1": ["Le grattement au guichet", "loewestein"], "XX_2": ["Pardon, Rosa", "loewestein"], "XX_3": ["Le bonheur, enfin", "loewestein"], "XX_4": ["Le petit cri", "loewestein"],
  "XXI_1": ["Le balcon", "loewestein"], "XXI_2": ["Ce qui met des ailes aux heures", "loewestein"], "XXI_3": ["La dot de Rosa", "loewestein"],
  "XXII_1": ["La nuit agitée", "loewestein"], "XXII_2": ["Le ciel et la terre", "loewestein"], "XXII_3": ["La garde de Dieu", "loewestein"],
  "XXIII_1": ["Le grenier", "loewestein"], "XXIII_2": ["La serrure", "loewestein"], "XXIII_3": ["La fausse clef", "loewestein"],
  "XXIV_1": ["La tulipe disparue", "loewestein"], "XXIV_2": ["Votre infâme père", "route"],
  "XXV_1": ["Le parti de Rosa", "route"], "XXV_2": ["Delft et Rotterdam", "route"], "XXV_3": ["M. van Herysen", "harlem"],
  "XXVI_1": ["Le Groote Markt", "harlem"], "XXVI_2": ["Le casque d'or", "harlem"], "XXVI_3": ["Le prince", "harlem"],
  "XXVII_1": ["Boxtel en personne", "harlem"], "XXVII_2": ["Silence !", "harlem"], "XXVII_3": ["L'histoire des trois caïeux", "harlem"],
  "XXVIII_1": ["Seul à Loewestein", "loewestein"], "XXVIII_2": ["Sorcier maudit !", "loewestein"], "XXVIII_3": ["La chanson des fleurs", "loewestein"],
  "XXIX_1": ["Le bâton et le couteau", "loewestein"], "XXIX_2": ["Le procès-verbal", "loewestein"], "XXIX_3": ["Le colonel van Deken", "loewestein"],
  "XXX_1": ["La voiture", "route"],
  "XXXI_1": ["Harlem", "harlem"], "XXXI_2": ["La fête de la tulipe", "harlem"], "XXXI_3": ["Le 15 mai 1673", "harlem"],
  "XXXII_1": ["Le carrosse", "harlem"], "XXXII_2": ["Une dernière prière", "harlem"],
  "XXXIII_1": ["La main de Rosa", "harlem"], "XXXIII_2": ["Je suis trop heureux", "harlem"],
}
