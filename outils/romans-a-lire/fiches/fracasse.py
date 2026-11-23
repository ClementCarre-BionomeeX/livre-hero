# Fiche du « Capitaine Fracasse » pour livre.py (texte de Théophile Gautier, 1863).
# Texte : gut.py sur Gutenberg n° 60746 (miroir orkeilius/gutenberg_fr_mirror), entre fiches/fracasse_texte.py pre et post.
HEAD = """// « Le Capitaine Fracasse », Théophile Gautier, 1863 : un livre à lire, sans choix (lecture: true). Texte de Gautier,
// domaine public, d'après l'édition Charpentier de 1913 numérisée par le projet Gutenberg. Les titres des chapitres sont
// de Gautier ; ceux des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude."""

BASE = {
  "id": "fracasse",
  "title": "Le Capitaine Fracasse",
  "subtitle": "Un roman à lire · Théophile Gautier, 1863",
  "summary": "Sous Louis XIII, dans les Landes, le jeune baron de Sigognac meurt de faim dans un château en ruine, avec un vieux valet, un chat noir et un chien. Une nuit d'orage, une troupe de comédiens ambulants frappe à sa porte. Il les suit sur les routes, pour l'amour d'une jeune comédienne, Isabelle, et devient lui-même comédien sous un nom de théâtre : le capitaine Fracasse.",
  "tags": ["historique", "aventure"],
  "author": "Théophile Gautier",
  "lecture": True,
  "age": 12,
  "skin": "parchemin",
  "cover": {"motif": "plume", "color": "#6b3d22"},
  "glossary": None,
  "voice": "troisième personne, passé",
  "version": 1,
  "notice": {
    "title": "Un livre de 1863",
    "reminder": "Ce chapitre montre un supplice public, celui de la roue, avec le regard et les mots de 1863.",
    "text": [
      "*Le Capitaine Fracasse* a paru en feuilleton dans la *Revue nationale et étrangère*, de 1861 à 1863. Gautier en avait l'idée depuis trente ans. Le texte est celui de l'édition de 1913, sans retouche ; ses gravures, de Gustave Doré, ne sont pas reprises.",
      "Gautier écrit pour le plaisir des mots : des descriptions longues comme des tableaux, des tournures du XVIIe siècle, des noms de la mythologie et du théâtre à chaque page. Le glossaire en explique une partie.",
      "C'est un roman de cape et d'épée : des duels, des bretteurs à gages, un enlèvement, un grand seigneur qui veut prendre de force une femme qui le refuse, et une exécution sur la place de Grève. Çà et là, le livre parle des « juifs » prêteurs d'argent et lance des injures sur la couleur de la peau : ce sont les préjugés de l'époque.",
    ],
  },
  "intro": [],
  "world": {"start": {"place": "sigognac", "hour": 18, "gold": 0, "food": 0, "items": [], "kits": {"guerrier": [], "rodeur": [], "voleur": [], "mage": [], "pretre": [], "barde": []}}},
}

def roman(n):
    out = ''
    for v, r in ((50, 'L'), (40, 'XL'), (10, 'X'), (9, 'IX'), (5, 'V'), (4, 'IV'), (1, 'I')):
        while n >= v: out += r; n -= v
    return out
TITRES = ["Le château de la misère", "Le chariot de Thespis", "L'auberge du *Soleil bleu*", "Brigands pour les oiseaux",
  "Chez monsieur le marquis", "Effet de neige", "Où le roman justifie son titre", "Les choses se compliquent",
  "Coups d'épée, coups de bâton et autres aventures", "Une tête dans une lucarne", "Le Pont-Neuf", "Le *Radis couronné*",
  "Double attaque", "Les délicatesses de Lampourde", "Malartic à l'œuvre", "Vallombreuse", "La bague d'améthyste",
  "En famille", "Orties et toiles d'araignée", "Déclaration d'amour de Chiquita", "Hymen, ô hyménée !",
  "Le château du bonheur"]

R = [
  "Dans les Landes, entre Dax et Mont-de-Marsan, le château de Sigognac tombe en ruine. Le dernier baron, un jeune homme de vingt-cinq ou vingt-six ans, y vit de rien avec son vieux valet Pierre, son chat Béelzébuth, son chien Miraut et son cheval Bayard. Une nuit d'orage, on frappe à la porte.",
  "Ce sont des comédiens ambulants égarés, avec leur chariot. Sigognac les reçoit comme il peut ; ils apportent leurs provisions. Il voit Isabelle, la jeune amoureuse de la troupe, et le lendemain, sur les conseils de Blazius, le Pédant, il part avec eux pour Paris.",
  "La troupe fait halte dans une auberge misérable, le *Soleil bleu*, tenue par un Espagnol, Chirriguirri. Une petite fille maigre, Chiquita, regarde avec convoitise le collier de perles d'Isabelle. Un cavalier passe et salue.",
  "La nuit, Chiquita rejoint un bandit, Agostin, qui dresse sur la route des mannequins pour faire croire à une bande. Au matin, il attaque le chariot. Sigognac le désarme. Isabelle donne à Chiquita le collier qu'elle convoitait.",
  "Au château de Bruyères, le marquis accueille les comédiens et fait jouer une comédie. Sigognac reçoit des habits du Pédant. La marquise remarque Léandre, le jeune premier ; Yolande de Foix, une voisine belle et dure, est parmi les invités. Le soir, Sigognac dit son amour à Isabelle.",
  "Sur la route, la neige tombe. Isabelle raconte sa vie de comédienne. Matamore, le plus maigre de la troupe, s'écarte du chariot ; on le retrouve mort de froid au pied d'un arbre.",
  "Pour remplacer Matamore et sauver la troupe, Sigognac prend son rôle et son nom de théâtre : le capitaine Fracasse. Dans une ferme, un ancien comédien, Bellombre, les héberge ; Chiquita et Agostin rôdent la nuit autour du chariot. Fracasse joue, et on l'applaudit.",
  "À Poitiers, à l'hôtellerie des *Armes de France*, Zerbine, la soubrette, retrouve le marquis de Bruyères. Le jeune duc de Vallombreuse remarque Isabelle et la poursuit ; elle le repousse. Sigognac lui tient tête.",
  "Les gens du duc attendent les comédiens à la sortie du théâtre ; Hérode et Sigognac les mettent en fuite. Vallombreuse et Sigognac se battent en duel, et Sigognac blesse le duc. Léandre, lui, croit suivre la marquise à un rendez-vous et tombe dans un piège.",
  "Vallombreuse, blessé, jure de se venger. Isabelle refuse d'épouser Sigognac : elle ne veut pas qu'un baron descende jusqu'à elle. Au théâtre, Yolande de Foix reconnaît Sigognac sous le masque de Fracasse.",
  "La troupe arrive à Paris. Sur le Pont-Neuf, une querelle montée contre Sigognac tourne court ; Vallombreuse passe en carrosse. Un de ses hommes, Mérindol, va chercher un bretteur, Jacquemin Lampourde.",
  "Au cabaret du *Radis couronné*, Lampourde retrouve Malartic, un autre bretteur, et revoit Agostin et Chiquita.",
  "Vallombreuse tente de gagner Isabelle : il achète la duègne Léonarde, couvre la jeune femme de présents, et elle le refuse. La même nuit, Lampourde attaque Sigognac et trouve plus fort que lui.",
  "Lampourde vient rendre l'argent au duc : il a de la probité dans son métier, et tuer le capitaine Fracasse est au-dessus de ses talents. Sigognac a brisé sa rapière. Vallombreuse lui ordonne de garder la somme.",
  "Malartic monte l'enlèvement : un faux intendant engage la troupe pour une fête, et sur la route, des hommes masqués attaquent. Sigognac se bat ; Isabelle est emportée en carrosse.",
  "Isabelle est enfermée au château du duc. Chiquita, qui s'y est glissée, l'y trouve et repart prévenir les amis. Vallombreuse vient lui faire sa cour ; elle lui répond que l'amour ne se commande pas.",
  "Sigognac et les comédiens donnent l'assaut au château, avec Lampourde, qui s'est pris d'admiration pour lui. Sigognac blesse gravement Vallombreuse. Le prince, père du duc, arrive au son du cor, et voit au doigt d'Isabelle une bague d'améthyste.",
  "Le chirurgien Laurent sauve le duc. Le prince reconnaît en Isabelle la fille qu'il a eue d'une comédienne, Cornélia, et qu'il a longtemps cherchée. Vallombreuse est son frère.",
  "Sigognac rentre seul dans son château en ruine. Pierre, Miraut et Béelzébuth l'attendent. Vallombreuse, guéri, vient le chercher : Isabelle l'aime, et le roi lui fait une place.",
  "Agostin est roué en place de Grève. Avant que le bourreau frappe, Chiquita lui plante un couteau dans le cœur. Puis elle vient se donner à Isabelle.",
  "Isabelle a fini par dire oui. Le prince bénit le mariage, et Isabelle devient baronne de Sigognac.",
  "Le château de la misère est relevé et devient le château du bonheur. Le vieux Béelzébuth meurt ; en creusant sa tombe, Sigognac trouve un coffret plein d'or.",
]
CHAPTERS = [{"title": "Chapitre " + roman(i + 1) + " · " + t, "text": r} for i, (t, r) in enumerate(zip(TITRES, R))]
CHAPTERS[19]["notice"] = True

PLACES = {
  "sigognac": {"ambiance": "chateau", "name": "Le château de Sigognac", "map": "france", "x": 32, "y": 82, "region": "Les Landes, entre Dax et Mont-de-Marsan", "desc": "Deux tours rondes, des fenêtres sans vitres, des salles où pleut le plafond, des portraits d'ancêtres et un jardin aux ronces."},
  "landes": {"ambiance": "route", "name": "Les routes de Gascogne", "map": "france", "x": 34, "y": 80, "region": "Les Landes", "desc": "La lande nue, les bruyères, les pins, des ornières de sable où le chariot s'enfonce."},
  "soleilbleu": {"ambiance": "village", "name": "L'auberge du *Soleil bleu*", "map": "france", "x": 33, "y": 78, "region": "Les Landes", "desc": "Un hameau de cahutes, une auberge sale, un hôte espagnol, une cuisine sans rien dedans."},
  "bruyeres": {"ambiance": "chateau", "name": "Le château de Bruyères", "map": "france", "x": 35, "y": 74, "region": "La Gascogne", "desc": "Un château neuf aux toits bleus et aux murs vermeils, des ifs taillés, une salle pour la comédie."},
  "neige": {"ambiance": "neige", "name": "Sous la neige", "map": "france", "x": 37, "y": 66, "region": "Sur la route du Poitou", "desc": "Une route blanche, un vent glacial, des corbeaux, et un chariot qui avance à peine."},
  "bellombre": {"ambiance": "village", "name": "La ferme de Bellombre", "map": "france", "x": 38, "y": 62, "region": "Le Poitou", "desc": "Une grande ferme, une salle chaude, un ancien comédien devenu paysan, et une grange pour jouer."},
  "poitiers": {"ambiance": "ville", "name": "Poitiers", "map": "france", "x": 38, "y": 56, "region": "Le Poitou", "desc": "L'hôtellerie des *Armes de France*, un jeu de paume changé en théâtre, des rues où guettent des laquais."},
  "pontneuf": {"ambiance": "ville", "name": "Le Pont-Neuf", "map": "france", "x": 50, "y": 30, "region": "Paris", "desc": "La statue d'Henri IV, la Samaritaine, les chanteurs, les charlatans, les filous, et toute la ville qui passe."},
  "paris": {"ambiance": "nuit", "name": "Paris la nuit", "map": "france", "x": 51, "y": 31, "region": "Paris", "desc": "Des rues noires, un quai désert, un hôtel où logent les comédiens, et des hommes qui attendent dans l'ombre."},
  "radis": {"ambiance": "souterrain", "name": "Le *Radis couronné*", "map": "france", "x": 49, "y": 31, "region": "Paris", "desc": "Un bouge enfumé, des piliers gras, des bretteurs, des voleurs, et une enfant qui dort dans un coin."},
  "hotelduc": {"ambiance": "chateau", "name": "L'hôtel de Vallombreuse", "map": "france", "x": 50, "y": 29, "region": "Paris", "desc": "Des tapisseries, des laquais, un valet de chambre qui pare son maître, et un duc qui ne supporte pas qu'on lui dise non."},
  "vallombreuse": {"ambiance": "chateau", "name": "Le château de Vallombreuse", "map": "france", "x": 56, "y": 26, "region": "Loin de Paris", "desc": "Des douves, un pont-levis, une galerie de portraits, une chambre dorée qui est une prison, et des gardes qui boivent."},
  "greve": {"ambiance": "ville", "name": "La place de Grève", "map": "france", "x": 51, "y": 30, "region": "Paris", "desc": "La place devant l'Hôtel de Ville, une foule matinale, et un échafaud où l'on a dressé la roue."},
}

PEOPLE = {
  "sigognac": {"name": "Le baron de Sigognac", "aka": ["Sigognac", "baron de Sigognac", "capitaine Fracasse", "Fracasse"], "face": {"age": "jeune", "hair": "noir", "coif": "milong", "beard": "moustache"}, "qui": "Le dernier des Sigognac, un jeune gentilhomme ruiné des Landes.", "aspect": {"allure": "vingt-cinq ans, maigre, pâle, fier", "signe": "un pourpoint usé jusqu'à la corde"}},
  "pierre": {"name": "Pierre", "aka": ["Pierre"], "face": {"age": "ancien", "hair": "blanc", "coif": "court"}, "qui": "Le vieux valet de Sigognac, qui lui a appris l'escrime.", "aspect": {"allure": "vieux, sec, fidèle comme un chien"}},
  "isabelle": {"name": "Isabelle", "aka": ["Isabelle"], "face": {"age": "jeune", "hair": "chatain", "coif": "long"}, "qui": "La jeune amoureuse de la troupe, une comédienne sage et douce.", "aspect": {"allure": "jeune, modeste, d'une grâce tranquille", "signe": "porte une bague d'améthyste"}},
  "blazius": {"name": "Blazius", "aka": ["Blazius", "le Pédant"], "face": {"age": "mur", "hair": "gris", "coif": "degarni"}, "qui": "Le Pédant de la troupe, qui joue les docteurs et cite le latin.", "aspect": {"allure": "gros buveur, bon cœur", "signe": "parle toujours en citations"}},
  "herode": {"name": "Hérode", "aka": ["Hérode", "le Tyran"], "face": {"age": "mur", "hair": "noir", "coif": "court", "beard": "barbe"}, "qui": "Le Tyran de la troupe, qui joue les rois et les monstres, et la dirige.", "aspect": {"allure": "robuste, larges épaules, voix tonnante", "signe": "bonasse sous sa barbe noire"}},
  "serafina": {"name": "Sérafina", "aka": ["Sérafina", "Sérafine"], "face": {"age": "adulte", "hair": "brun", "coif": "chignon"}, "qui": "La grande coquette de la troupe, qui joue les reines.", "aspect": {"allure": "port de reine, robe fanée"}},
  "zerbine": {"name": "Zerbine", "aka": ["Zerbine", "la Soubrette"], "face": {"age": "jeune", "hair": "noir", "coif": "boucles"}, "qui": "La soubrette de la troupe, vive et rusée.", "aspect": {"allure": "brune, rieuse, l'œil malin"}},
  "leandre": {"name": "Léandre", "aka": ["Léandre"], "face": {"age": "jeune", "hair": "chatain", "coif": "milong"}, "qui": "Le jeune premier de la troupe, qui rêve de conquérir une grande dame.", "aspect": {"allure": "joli garçon, fat, poltron"}},
  "scapin": {"name": "Scapin", "aka": ["Scapin"], "face": {"age": "adulte", "hair": "roux", "coif": "court"}, "qui": "Le valet de comédie de la troupe, agile et moqueur.", "aspect": {"allure": "leste comme un renard, toujours une farce"}},
  "matamore": {"name": "Matamore", "aka": ["Matamore"], "face": {"age": "adulte", "hair": "noir", "coif": "court", "beard": "moustache"}, "qui": "Le capitan de la troupe, qui joue les fanfarons.", "aspect": {"allure": "d'une maigreur incroyable", "signe": "une immense rapière"}},
  "leonarde": {"name": "Dame Léonarde", "aka": ["Léonarde"], "face": {"age": "ancien", "hair": "gris", "coif": "chignon"}, "qui": "La duègne de la troupe, qui joue les mères.", "aspect": {"allure": "vieille, rusée, aime l'argent"}},
  "chiquita": {"name": "Chiquita", "aka": ["Chiquita"], "face": {"age": "enfant", "hair": "noir", "coif": "long"}, "qui": "Une petite fille maigre et sauvage, compagne d'un bandit.", "aspect": {"allure": "douze ou treize ans, hâve, farouche", "visage": "des yeux énormes"}},
  "agostin": {"name": "Agostin", "aka": ["Agostin"], "face": {"age": "adulte", "hair": "noir", "coif": "foulard", "beard": "barbe", "skin": "hale"}, "qui": "Un bandit espagnol qui détrousse les voyageurs sur les routes.", "aspect": {"allure": "alerte, vigoureux, hâlé", "signe": "une navaja"}},
  "bruyeres": {"name": "Le marquis de Bruyères", "aka": ["marquis de Bruyères", "Bruyères"], "face": {"age": "adulte", "hair": "chatain", "coif": "milong", "beard": "moustache"}, "qui": "Un gentilhomme gascon qui aime le théâtre et les soubrettes.", "aspect": {"allure": "jovial, généreux, galant"}},
  "marquise": {"name": "La marquise de Bruyères", "aka": ["marquise de Bruyères", "la marquise"], "face": {"age": "adulte", "hair": "blond", "coif": "chignon"}, "qui": "La femme du marquis, qui s'ennuie dans son château.", "aspect": {"allure": "belle, désœuvrée, romanesque"}},
  "yolande": {"name": "Yolande de Foix", "aka": ["Yolande de Foix", "Yolande"], "face": {"age": "jeune", "hair": "blond", "coif": "long", "skin": "porcelaine"}, "qui": "Une jeune châtelaine du voisinage, que Sigognac a aimée de loin.", "aspect": {"allure": "d'une beauté cruelle, hautaine"}},
  "vallombreuse": {"name": "Le duc de Vallombreuse", "aka": ["duc de Vallombreuse", "Vallombreuse"], "face": {"age": "jeune", "hair": "brun", "coif": "milong", "beard": "moustache"}, "qui": "Un jeune duc, riche, beau, et qu'aucune femme n'a jamais refusé.", "aspect": {"allure": "splendide, insolent, habitué à tout"}},
  "vidalinc": {"name": "Le chevalier de Vidalinc", "aka": ["Vidalinc"], "face": {"age": "jeune", "hair": "chatain", "coif": "court"}, "qui": "L'ami et le second du duc de Vallombreuse.", "aspect": {"allure": "léger, railleur, bon compagnon"}},
  "lampourde": {"name": "Jacquemin Lampourde", "aka": ["Lampourde", "Jacquemin Lampourde"], "face": {"age": "adulte", "hair": "brun", "coif": "court", "beard": "moustache"}, "qui": "Un bretteur à gages de Paris, qui a son honneur à lui.", "aspect": {"allure": "long, sec, nerveux", "signe": "aime les beaux coups d'épée"}},
  "malartic": {"name": "Malartic", "aka": ["Malartic"], "face": {"age": "adulte", "hair": "noir", "coif": "court"}, "qui": "Un bretteur et un homme de coups de main, l'ami de Lampourde.", "aspect": {"allure": "le nez cramoisi, la main sûre"}},
  "prince": {"name": "Le prince de Vallombreuse", "aka": ["prince", "le prince"], "face": {"age": "ancien", "hair": "blanc", "coif": "court", "beard": "barbe"}, "qui": "Le père du duc de Vallombreuse, un vieux seigneur grave.", "aspect": {"allure": "vieux seigneur, grand air, triste"}},
}
NO_AUTO = ["prince", "pierre", "bruyeres", "marquise"]
MEET = {"I_7": ["pierre"], "V_3": ["bruyeres"], "V_11": ["marquise"], "XVII_10": ["prince"]}

WORDS = {
  "baron": "Un titre de noblesse ; Sigognac est baron, mais n'a plus que des ruines.",
  "gentilhommière": "Une petite maison de gentilhomme à la campagne.",
  "Thespis": "Le premier acteur de la Grèce antique, qui jouait, dit-on, sur un chariot ; le « chariot de Thespis », c'est celui des comédiens ambulants.",
  "comédien|comédiens|comédienne|comédiennes": "Un acteur, au temps où les acteurs vont de ville en ville avec leur chariot.",
  "Matamore": "Un personnage de comédie, le capitan espagnol qui se vante et a peur de tout.",
  "Pédant": "Un personnage de comédie, le docteur ridicule qui parle latin.",
  "duègne": "Une vieille femme qui garde une jeune fille ; au théâtre, le rôle des vieilles.",
  "soubrette": "La servante rusée des comédies.",
  "bretteur|bretteurs": "Un homme qui se bat à l'épée pour de l'argent.",
  "estafier|estafiers": "Un laquais armé, homme de main d'un grand seigneur.",
  "navaja": "Un couteau espagnol à lame pliante.",
  "rapière": "Une longue épée de duel.",
  "pourpoint": "Le vêtement d'homme qui couvre le buste.",
  "feutre": "Un chapeau de feutre, à larges bords.",
  "lande|landes": "Une grande étendue de terre pauvre où poussent la bruyère et l'ajonc.",
  "roue": "Un supplice : le condamné, lié sur une roue, a les membres brisés à coups de barre.",
  "Grève": "La place de Grève, devant l'Hôtel de Ville de Paris, où l'on exécute les condamnés.",
  "chirurgien": "Le médecin qui opère et soigne les blessures.",
  "jeu de paume": "Une salle pour le jeu de paume, l'ancêtre du tennis ; les comédiens s'en servent comme théâtre.",
  "Pont-Neuf": "Le grand pont de Paris, toujours plein de monde, de chanteurs et de marchands.",
  "pistole|pistoles": "Une pièce d'or, qui vaut dix livres.",
  "écu|écus": "Une pièce de monnaie, d'argent ou d'or.",
  "histrion|histrions": "Un mot méprisant pour dire comédien.",
}

PAGES = {
  "I_1": ["La gentilhommière des Landes", "sigognac"], "I_2": ["Le jardin aux ronces", "sigognac"], "I_3": ["Le cabinet peint", "sigognac"], "I_4": ["Les ancêtres", "sigognac"], "I_5": ["La marmite", "sigognac"], "I_6": ["Béelzébuth", "sigognac"], "I_7": ["Pierre", "sigognac"], "I_8": ["Le baron", "sigognac"], "I_9": ["Le souper du baron", "sigognac"], "I_10": ["On frappe", "sigognac"],
  "II_1": ["Le chariot dans la cour", "sigognac"], "II_2": ["Les comédiens", "sigognac"], "II_3": ["La chambre ranimée", "sigognac"], "II_4": ["Sérafina", "sigognac"], "II_5": ["Les emplois de la troupe", "sigognac"], "II_6": ["Le Tyran", "sigognac"], "II_7": ["Le repas", "sigognac"], "II_8": ["Isabelle", "sigognac"], "II_9": ["Pas de fantômes", "sigognac"], "II_10": ["La nuit au château", "sigognac"], "II_11": ["Le matin", "sigognac"], "II_12": ["Jusqu'à Paris ?", "sigognac"], "II_13": ["Les conseils de Blazius", "sigognac"], "II_14": ["L'églantine", "sigognac"], "II_15": ["Isabelle a vaincu", "sigognac"], "II_16": ["Le départ", "landes"], "II_17": ["Le pas des bœufs", "landes"],
  "III_1": ["Un ramassis de cahutes", "soleilbleu"], "III_2": ["L'eau des mares", "soleilbleu"], "III_3": ["Maître Chirriguirri", "soleilbleu"], "III_4": ["La cuisine vide", "soleilbleu"], "III_5": ["Ces nobles voyageurs ont faim", "soleilbleu"], "III_6": ["La petite fille", "soleilbleu"], "III_7": ["Le collier de perles", "soleilbleu"], "III_8": ["Le cavalier", "soleilbleu"],
  "IV_1": ["Chiquita", "landes"], "IV_2": ["Le bandit au clair de lune", "landes"], "IV_3": ["Les mannequins", "landes"], "IV_4": ["Une bande de fantômes", "landes"], "IV_5": ["Le piège est tendu", "landes"], "IV_6": ["Au point du jour", "landes"], "IV_7": ["Le couteau ramassé", "landes"], "IV_8": ["Voilà Bruyères !", "landes"],
  "V_1": ["Le château de Bruyères", "bruyeres"], "V_2": ["L'allée des ifs", "bruyeres"], "V_3": ["Le marquis", "bruyeres"], "V_4": ["La Soubrette", "bruyeres"], "V_5": ["Un chariot comique", "bruyeres"], "V_6": ["La chambre du baron", "bruyeres"], "V_7": ["Corbache !", "bruyeres"], "V_8": ["Le premier qui m'ait demandé", "bruyeres"], "V_9": ["La visite au marquis", "bruyeres"], "V_10": ["Zerbine", "bruyeres"], "V_11": ["La marquise", "bruyeres"], "V_12": ["À sa toilette", "bruyeres"], "V_13": ["Ce doit être l'amoureux", "bruyeres"], "V_14": ["Yolande de Foix", "bruyeres"], "V_15": ["Vingt-quatre chandelles", "bruyeres"], "V_16": ["Pandolphe en colère", "bruyeres"], "V_17": ["Matamore et Scapin", "bruyeres"], "V_18": ["Un duel de comédie", "bruyeres"], "V_19": ["Barrez-lui le passage", "bruyeres"], "V_20": ["La sérénade", "bruyeres"], "V_21": ["Le pot d'eau", "bruyeres"], "V_22": ["Vous jouez admirablement", "bruyeres"], "V_23": ["Au clair de lune", "bruyeres"], "V_24": ["La lettre de Léandre", "bruyeres"],
  "VI_1": ["La marque sur l'épaule", "landes"], "VI_2": ["*Memorem dente notum*", "landes"], "VI_3": ["Isabelle se confie", "landes"], "VI_4": ["Une ingénue sans hypocrisie", "landes"], "VI_5": ["L'histoire d'Isabelle", "neige"], "VI_6": ["Sous la neige", "neige"], "VI_7": ["Où est Matamore ?", "neige"], "VI_8": ["Pas une trace", "neige"], "VI_9": ["Au pied de l'arbre", "neige"], "VI_10": ["Que faire de ce corps ?", "neige"], "VI_11": ["Le bourg", "neige"], "VI_12": ["La fosse", "neige"],
  "VII_1": ["La faim", "neige"], "VII_2": ["Dans le fourré", "neige"], "VII_3": ["Le sifflement", "neige"], "VII_4": ["Je ne m'appelle plus Sigognac", "neige"], "VII_5": ["Le capitaine Fracasse", "neige"], "VII_6": ["Le vent glacial", "neige"], "VII_7": ["Bellombre", "bellombre"], "VII_8": ["La salle de la ferme", "bellombre"], "VII_9": ["Le généreux Bellombre", "bellombre"], "VII_10": ["Un pas dans la neige", "bellombre"], "VII_11": ["Chiquita dans la voiture", "bellombre"], "VII_12": ["Qu'on se le dise !", "bellombre"], "VII_13": ["Le début de Fracasse", "bellombre"],
  "VIII_1": ["La bourse de Bellombre", "poitiers"], "VIII_2": ["Les *Armes de France*", "poitiers"], "VIII_3": ["Oreste et Pylade", "poitiers"], "VIII_4": ["Quels bons yeux", "poitiers"], "VIII_5": ["Un condiment précieux", "poitiers"], "VIII_6": ["Pas de carnage", "poitiers"], "VIII_7": ["La poésie de Zerbine", "poitiers"], "VIII_8": ["Me voici", "poitiers"], "VIII_9": ["La dame de la fenêtre", "poitiers"], "VIII_10": ["Maître Bilot", "poitiers"], "VIII_11": ["Le duc de Vallombreuse", "poitiers"], "VIII_12": ["Épousez-la", "poitiers"], "VIII_13": ["Les leçons de Blazius", "poitiers"], "VIII_14": ["Le duc au théâtre", "poitiers"], "VIII_15": ["Ce ridicule histrion", "poitiers"], "VIII_16": ["C'est ce que nous verrons", "poitiers"], "VIII_17": ["La fureur du duc", "poitiers"],
  "IX_1": ["Après la répétition", "poitiers"], "IX_2": ["La rue est libre", "poitiers"], "IX_3": ["Rentrez dans vos chenils", "poitiers"], "IX_4": ["L'honneur d'une femme", "poitiers"], "IX_5": ["Le vin du marquis", "poitiers"], "IX_6": ["Hébé", "poitiers"], "IX_7": ["Son épée au chevet", "poitiers"], "IX_8": ["Pour un duel", "poitiers"], "IX_9": ["Les conditions", "poitiers"], "IX_10": ["La rencontre", "poitiers"], "IX_11": ["Les loges de sapin", "poitiers"], "IX_12": ["Sylvie", "poitiers"], "IX_13": ["Lygdamon", "poitiers"], "IX_14": ["Le berger du Lignon", "poitiers"], "IX_15": ["Un billet", "poitiers"], "IX_16": ["Le page", "poitiers"], "IX_17": ["Le rendez-vous de Léandre", "poitiers"],
  "X_1": ["La chaise à porteurs", "poitiers"], "X_2": ["Les raisons de Vidalinc", "poitiers"], "X_3": ["Le premier échec", "poitiers"], "X_4": ["Jurez-moi", "poitiers"], "X_5": ["Consolez-vous", "poitiers"], "X_6": ["Le refus d'Isabelle", "poitiers"], "X_7": ["Se donner et se refuser", "poitiers"], "X_8": ["Le souvenir de Yolande", "poitiers"], "X_9": ["Une belle recette", "poitiers"], "X_10": ["Yolande dans la salle", "poitiers"], "X_11": ["Ô honte ! ô rage !", "poitiers"], "X_12": ["Ne pas la regarder", "poitiers"], "X_13": ["J'ai bien deviné", "poitiers"], "X_14": ["Retour à l'hôtellerie", "poitiers"], "X_15": ["Un pressentiment", "poitiers"],
  "XI_1": ["Vers Paris", "landes"], "XI_2": ["Les abords de la ville", "pontneuf"], "XI_3": ["Les rôtisseurs", "pontneuf"], "XI_4": ["Isabelle à la fenêtre", "pontneuf"], "XI_5": ["Une admiration respectueuse", "pontneuf"], "XI_6": ["La lettre du baron", "pontneuf"], "XI_7": ["La curiosité du capitaine", "pontneuf"], "XI_8": ["La vue du Pont-Neuf", "pontneuf"], "XI_9": ["La Samaritaine", "pontneuf"], "XI_10": ["La foule", "pontneuf"], "XI_11": ["Le poète", "pontneuf"], "XI_12": ["Une querelle", "pontneuf"], "XI_13": ["Un coup monté", "pontneuf"], "XI_14": ["Le carrosse du duc", "pontneuf"], "XI_15": ["Mérindol", "pontneuf"], "XI_16": ["L'escalier de Lampourde", "paris"], "XI_17": ["Chez le bretteur", "paris"],
  "XII_1": ["Une incertitude", "paris"], "XII_2": ["L'abominable bouge", "radis"], "XII_3": ["Le vacarme", "radis"], "XII_4": ["Malartic", "radis"], "XII_5": ["Les affaires", "radis"], "XII_6": ["Agostin et Chiquita", "radis"], "XII_7": ["Le sommeil de Chiquita", "radis"], "XII_8": ["Les poètes et les bretteurs", "radis"],
  "XIII_1": ["L'amour et la vengeance", "hotelduc"], "XIII_2": ["Dame Léonarde", "hotelduc"], "XIII_3": ["Que pouvez-vous faire pour moi ?", "hotelduc"], "XIII_4": ["La toilette du duc", "hotelduc"], "XIII_5": ["Le carrosse doré", "pontneuf"], "XIII_6": ["Le duc et la comédienne", "pontneuf"], "XIII_7": ["Je la refuse", "pontneuf"], "XIII_8": ["Lampourde attaque", "paris"],
  "XIV_1": ["La fureur du duc", "hotelduc"], "XIV_2": ["Animal !", "hotelduc"], "XIV_3": ["La bourse rendue", "hotelduc"], "XIV_4": ["Le récit de Lampourde", "hotelduc"], "XIV_5": ["Garde ta somme", "hotelduc"],
  "XV_1": ["La colère du baron", "pontneuf"], "XV_2": ["L'intendant", "pontneuf"], "XV_3": ["Une fête à la campagne", "pontneuf"], "XV_4": ["Au sortir du bois", "landes"], "XV_5": ["La fleur", "landes"], "XV_6": ["L'aveugle et l'enfant", "landes"], "XV_7": ["L'attaque", "landes"], "XV_8": ["Arrêté net", "landes"], "XV_9": ["Isabelle emportée", "landes"], "XV_10": ["L'homme masqué", "landes"], "XV_11": ["Le carrosse roule", "vallombreuse"],
  "XVI_1": ["La chambre inconnue", "vallombreuse"], "XVI_2": ["La salle à manger", "vallombreuse"], "XVI_3": ["La galerie", "vallombreuse"], "XVI_4": ["Les buveurs", "vallombreuse"], "XVI_5": ["Une figure sur le seuil", "vallombreuse"], "XVI_6": ["Comment es-tu ici ?", "vallombreuse"], "XVI_7": ["Loin de Paris ?", "vallombreuse"], "XVI_8": ["La corde", "vallombreuse"], "XVI_9": ["Le réveil", "vallombreuse"], "XVI_10": ["Cette courtoisie vient tard", "vallombreuse"], "XVI_11": ["Jusques à quand ?", "vallombreuse"], "XVI_12": ["Un caprice", "vallombreuse"], "XVI_13": ["Malartic en garde", "vallombreuse"], "XVI_14": ["Un héros de Plutarque", "vallombreuse"], "XVI_15": ["L'entraînement du duc", "vallombreuse"],
  "XVII_1": ["Quatre à quatre", "vallombreuse"], "XVII_2": ["Où est Isabelle ?", "vallombreuse"], "XVII_3": ["Sigognac contre Malartic", "vallombreuse"], "XVII_4": ["Un éléphant sur un fil", "vallombreuse"], "XVII_5": ["Je suis assez gros", "vallombreuse"], "XVII_6": ["La poigne d'Hérode", "vallombreuse"], "XVII_7": ["La foudre", "vallombreuse"], "XVII_8": ["Jeter bas la porte", "vallombreuse"], "XVII_9": ["Le cor", "vallombreuse"], "XVII_10": ["Le vieux seigneur", "vallombreuse"], "XVII_11": ["L'anneau", "vallombreuse"], "XVII_12": ["Il n'est pas mort", "vallombreuse"], "XVII_13": ["Je fais à la demoiselle", "vallombreuse"], "XVII_14": ["Les affaires du théâtre", "vallombreuse"], "XVII_15": ["Les habits somptueux", "vallombreuse"], "XVII_16": ["Un autre appartement", "vallombreuse"],
  "XVIII_1": ["Entre la vie et la mort", "vallombreuse"], "XVIII_2": ["Un philtre", "vallombreuse"], "XVIII_3": ["Cornélia", "vallombreuse"], "XVIII_4": ["L'enfant perdue", "vallombreuse"], "XVIII_5": ["Ma chère fille", "vallombreuse"], "XVIII_6": ["Un brin d'amour", "vallombreuse"], "XVIII_7": ["Cher frère", "vallombreuse"], "XVIII_8": ["Une humeur farouche", "vallombreuse"],
  "XIX_1": ["Le retour", "landes"], "XIX_2": ["La bonne nouvelle", "sigognac"], "XIX_3": ["Un reste de miasson", "sigognac"], "XIX_4": ["La torpeur", "sigognac"], "XIX_5": ["La chambre", "sigognac"], "XIX_6": ["Le souvenir", "sigognac"], "XIX_7": ["Le duc à Sigognac", "sigognac"],
  "XX_1": ["La place de Grève", "greve"], "XX_2": ["Sept heures", "greve"], "XX_3": ["Les principes de Lampourde", "greve"], "XX_4": ["L'échafaud", "greve"], "XX_5": ["Chiquita se donne", "hotelduc"],
  "XXI_1": ["Les façons de Chiquita", "vallombreuse"], "XXI_2": ["Fâcheusement badin", "vallombreuse"], "XXI_3": ["Une joie céleste", "vallombreuse"], "XXI_4": ["C'était écrit", "vallombreuse"], "XXI_5": ["Hymen", "vallombreuse"],
  "XXII_1": ["La baronne de Sigognac", "landes"], "XXII_2": ["*Alta petunt*", "sigognac"], "XXII_3": ["Le château relevé", "sigognac"], "XXII_4": ["Bayard", "sigognac"], "XXII_5": ["La reine détrônée", "sigognac"], "XXII_6": ["Le coffret", "sigognac"],
}
