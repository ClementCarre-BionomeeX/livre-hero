# Fiche du « Capitaine Paul » (id paul) pour livre.py (texte de Dumas, 1838).
# Texte : gut.py sur Gutenberg n° 15574 (miroir orkeilius/gutenberg_fr_mirror), entre fiches/paul_texte.py pre et post.
HEAD = """// « Le Capitaine Paul », Alexandre Dumas, 1838 : un livre à lire, sans choix (lecture: true). Texte de Dumas,
// domaine public, d'après l'édition numérique du projet Gutenberg. Cette édition ne titre pas ses chapitres ; les
// titres des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude."""

BASE = {
  "id": "paul",
  "title": "Le Capitaine Paul",
  "subtitle": "Un roman à lire · Alexandre Dumas, 1838",
  "summary": "Octobre 1779. Une frégate inconnue mouille devant Port-Louis, en Bretagne, et tout le pays se demande qui la commande. Un jeune comte vient y livrer un prisonnier d'État ; le capitaine Paul, marin sans nom au service de l'Amérique, accepte de le conduire à Cayenne. Quelques mois plus tard, le même capitaine frappe à la porte d'un sombre château du Morbihan, où l'on prépare un mariage.",
  "tags": ["historique", "aventure", "mer"],
  "author": "Alexandre Dumas",
  "lecture": True,
  "age": 12,
  "skin": "parchemin",
  "cover": {"motif": "etoile", "color": "#1f3348"},
  "glossary": None,
  "voice": "troisième personne, passé",
  "version": 1,
  "notice": {
    "title": "Un livre de 1838",
    "reminder": "Ce chapitre montre un combat naval, avec le regard et les mots de 1838.",
    "text": [
      "*Le Capitaine Paul* a paru en feuilleton dans *le Siècle* en 1838. Le texte est celui de Dumas, sans retouche, tel que l'a numérisé le projet Gutenberg ; cette édition ne donne pas de titres aux chapitres, seulement leur numéro.",
      "Le héros s'inspire de John Paul Jones, le marin écossais qui se battit pour l'indépendance des États-Unis et mourut à Paris en 1793. Le château d'Auray et ses habitants sont de Dumas.",
      "La préface, écrite pour une édition plus tardive, raconte l'histoire du livre et laisse deviner ce que deviennent les personnages : on peut la lire après le roman.",
    ],
  },
  "intro": [],
  "world": {"start": {"place": "paris", "hour": 10, "gold": 0, "food": 0, "items": [], "kits": {"guerrier": [], "rodeur": [], "voleur": [], "mage": [], "pretre": [], "barde": []}}},
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
  "",
]


R = [
  "Dumas raconte la vie de son livre : comment, à partir du Pilote de Cooper et de souvenirs recueillis en Bretagne, l'histoire de Paul Jones a mûri en lui ; comment il en a écrit le drame pendant une tempête qui le retenait sur la côte de Calabre ; comment le drame a dormi dans une armoire, et comment il est devenu un roman en feuilleton. Cette préface, écrite après coup, révèle par endroits ce que deviennent les personnages.",
  "Octobre 1779 : une belle frégate inconnue est à l'ancre devant Port-Louis, en face de Lorient, et le pays ne parle que d'elle. Le jeune comte Emmanuel d'Auray, mousquetaire, voudrait savoir qui la commande. Un enseigne de marine moqueur et philosophe lui parle du capitaine Paul, puis l'emmène à bord.",
  "À bord de l'Indienne, l'enseigne présente les marins de toutes les nations qui forment l'équipage. Dans la cabine, un vieil officier bourru reçoit le comte, qui lui remet un ordre du ministre : conduire à Cayenne un prisonnier d'État. La nuit même, le prisonnier est amené à bord, et la frégate disparaît.",
  "En mer, l'Indienne rencontre une frégate anglaise, le Drake. Le capitaine Paul, un beau jeune homme de vingt-cinq ans, paraît enfin sans déguisement. Le prisonnier reste sous les boulets sans broncher ; Paul lui permet de prendre une hache à l'abordage. Le Drake est pris. Paul veut entendre son histoire, car on ne déporte pas les braves.",
  "Six mois plus tard, Emmanuel revient de Paris au château d'Auray, sur la côte du Morbihan : il a arrangé le mariage de sa sœur Marguerite avec le baron de Lectoure, un favori qui lui obtiendra un régiment. Sa mère, la marquise, en deuil éternel, l'accueille sans émotion. Un cavalier qu'il croit connaître entre au château : on annonce M. Paul.",
  "Paul rappelle à Emmanuel toutes les fois où ils se sont croisés sans qu'il le sache, jusqu'à l'enseigne et au vieil officier de l'Indienne. Il sait tout : le prisonnier, Lusignan, n'avait commis d'autre crime que d'aimer Marguerite, qui lui a donné un enfant qu'on lui a arraché. Paul tient ses lettres. Marguerite arrive ; Paul se cache dans un cabinet.",
  "Marguerite supplie son frère de la sauver de ce mariage : elle préfère le couvent, la misère, la mort. Emmanuel ne veut rien entendre. Paul a tout écouté. Il rejoint au bord de la mer un jeune homme qui l'attend : c'est Lusignan, à qui il apprend que Marguerite l'aime toujours.",
  "Paul a ramené Lusignan en Bretagne. Le soir, il va trouver une petite maison à la lisière du parc, où vit un vieux serviteur, Achard. La marquise y est venue avant lui : ils parlent à mots couverts d'une tombe sous un grand chêne, d'un enfant élevé en Écosse et disparu, et d'un secret que la marquise craint par-dessus tout.",
  "Paul se présente à Achard, qui reconnaît en lui le portrait vivant de son père. Le jeune marin, qui a couru le monde sans savoir d'où il venait, se prépare à tout entendre, et découvre que ceux qu'il est venu aider le touchent de plus près qu'il ne croyait.",
  "Achard raconte : le comte de Morlaix aimait mademoiselle de Sablé ; une haine de famille les a séparés, elle a épousé le marquis d'Auray, et une nuit Morlaix a apporté chez Achard une femme voilée qui a mis au monde un fils. Quatre ans plus tard, Morlaix s'est battu avec le marquis dans le parc. L'enfant a été envoyé en Écosse. Marguerite vient apporter des provisions au vieillard.",
  "Paul parle à Marguerite comme un ami de Lusignan : il sait tout, ne la méprise pas, et lui promet de l'aider. Elle le remercie comme un frère, sans savoir à quel point le mot est juste. Puis Paul demande à Achard de le conduire à la tombe de son père.",
  "Le contrat doit être signé le soir même ; la marquise a préparé le marquis, qui vit depuis vingt ans comme un enfant sans volonté, à jouer son rôle. Le baron de Lectoure arrive de Paris, élégant et frivole. Marguerite lui avoue tout, espérant qu'il se retirera ; il répond qu'un mariage est un arrangement, et la laisse à ses spasmes.",
  "Au dîner, Lectoure s'amuse aux dépens d'un voisin naïf, M. Lajarry. Paul remet à Marguerite l'adresse de son enfant. Emmanuel le somme de rendre les lettres de sa sœur ; Paul refuse, et refuse aussi de se battre avec lui, mais provoque Lectoure, qu'il traite d'infâme.",
  "La marquise mène la signature d'une main de fer. Marguerite se jette aux pieds de son père ; le vieillard, tiré de sa torpeur, commence à parler de lettres et de duel. Puis il aperçoit Paul, et tombe évanoui. Au même moment, on apprend qu'Achard se meurt.",
  "Le marquis se meurt, et Achard aussi, à qui l'on a refusé prêtre et médecin. Paul veille le vieillard, lui parle de ses doutes et de sa foi, et le réconforte. Une voix appelle dans la nuit : Marguerite.",
  "Cachée malgré elle, Marguerite a entendu la confession de son père. Elle s'est enfuie chez Achard ; la marquise y vient aussi, seule, au chevet du vieillard, pour reprendre des papiers. Cachés derrière les rideaux, Paul et Marguerite entendent tout. Paul se montre et réclame la cassette.",
  "Au matin, le lieutenant Walter règle avec Emmanuel les conditions du duel de Paul et de Lectoure. Marguerite supplie sa mère au nom de son propre enfant ; la marquise reste de marbre et sort.",
  "Emmanuel trouve Paul seul et veut le forcer à se battre. Paul refuse encore, sans s'expliquer ; Emmanuel, hors de lui, tire. Marguerite détourne le coup, et le mot qu'elle crie change tout.",
  "Seul avec la marquise, Paul pose sur la table le régiment d'Emmanuel et une commission de gouverneur de la Guadeloupe pour Lusignan. Au bord de la mer, il désarme Lectoure, qui accepte ses excuses de bonne grâce. Le lendemain, la frégate a quitté la rade.",
  "Cinq ans plus tard, la paix est signée. À la Guadeloupe, le commodore Paul vient revoir ses amis, puis repart. Dumas résume ensuite sa carrière : la Russie, la mer Noire, et un dernier retour en Bretagne, au château d'Auray, pendant la Révolution.",
]

def titre(i, t):
    if i == 0: return "Préface"
    if i == 19: return "Épilogue"
    return "Chapitre " + roman(i)
CHAPTERS = [{"title": titre(i, t), "text": r} for i, (t, r) in enumerate(zip(TITRES, R))]
for i in (3,): CHAPTERS[i]["notice"] = True

PLACES = {
  "portlouis": {"ambiance": "port", "name": "Port-Louis", "map": "bretagne", "x": 30, "y": 50, "region": "Morbihan, en face de Lorient", "desc": "Une petite ville fortifiée à l'entrée de la rade de Lorient, où les curieux commentent chaque voile qui entre."},
  "indienne": {"ambiance": "mer", "name": "L'Indienne", "map": "bretagne", "x": 8, "y": 70, "region": "En mer, au large de la Bretagne", "desc": "Une frégate de trente-deux canons, fine, rapide et parée comme une fiancée, avec un équipage venu de toutes les nations."},
  "route": {"ambiance": "route", "name": "La route de Vannes à Auray", "map": "bretagne", "x": 70, "y": 40, "region": "Morbihan", "desc": "Un chemin vicinal plein d'ornières, entre les landes et les bois de la Basse-Bretagne."},
  "chateau": {"ambiance": "chateau", "name": "Le château d'Auray", "map": "bretagne", "x": 55, "y": 55, "region": "Morbihan, au bord de l'Océan", "desc": "Un vieux château féodal aux tourelles noires et aux cours herbeuses, à une lieue et demie de toute habitation, une façade tournée vers la mer."},
  "maison": {"ambiance": "foret", "name": "La maison d'Achard", "map": "bretagne", "x": 60, "y": 48, "region": "À la lisière du parc d'Auray", "desc": "Une petite maison de deux pièces près d'une grille du parc, non loin d'un grand chêne qui garde un secret."},
  "plage": {"ambiance": "mer", "name": "La cabane du pêcheur", "map": "bretagne", "x": 42, "y": 60, "region": "Sur la grève, entre Port-Louis et Auray", "desc": "Une cabane sur le bord de la mer, où l'on se retrouve à l'écart et où l'on règle ses affaires d'honneur."},
  "paris": {"ambiance": "ville", "name": "Paris", "map": "monde", "x": 48, "y": 26, "region": "France", "desc": "Les théâtres de la Porte Saint-Martin, les directeurs, les acteurs et les journaux où naît le roman-feuilleton."},
  "sicile": {"ambiance": "mer", "name": "Le détroit de Messine", "map": "monde", "x": 54, "y": 40, "region": "Entre la Sicile et la Calabre", "desc": "Un speronare sicilien, son pilote qui lit le vent, et la prière du soir que chante tout l'équipage."},
  "guadeloupe": {"ambiance": "port", "name": "La Guadeloupe", "map": "monde", "x": 22, "y": 50, "region": "Les Antilles", "desc": "Des côtes coupées de rivières, la Soufrière qui éclaire la nuit, des cocotiers et des palmistes au bord de la mer."},
  "russie": {"ambiance": "route", "name": "La Russie de Catherine", "map": "monde", "x": 64, "y": 22, "region": "De Saint-Pétersbourg à la Crimée", "desc": "Une cour où l'on donne des grades d'amiral, et une route de plusieurs centaines de lieues à travers les nouvelles conquêtes."},
}


PEOPLE = {
  "paul": {"name": "Le capitaine Paul", "aka": ["Paul", "capitaine Paul"], "face": {"age": "jeune", "hair": "brun", "coif": "long", "skin": "hale"}, "qui": "Le capitaine de la frégate l'Indienne, marin sans nom qui se bat pour l'indépendance de l'Amérique.", "aspect": {"allure": "vingt-cinq ans, velours noir, ceinture turque", "signe": "maître des déguisements"}},
  "emmanuel": {"name": "Le comte Emmanuel d'Auray", "aka": ["Emmanuel", "comte d'Auray", "comte Emmanuel"], "face": {"age": "jeune", "hair": "chatain", "coif": "court", "skin": "clair"}, "qui": "Le fils du marquis d'Auray, mousquetaire, pressé de rendre à son nom l'éclat de la cour.", "aspect": {"allure": "élégant uniforme de mousquetaire", "signe": "ambitieux, emporté"}},
  "marguerite": {"name": "Marguerite d'Auray", "aka": ["Marguerite"], "face": {"age": "jeune", "hair": "chatain", "coif": "long", "skin": "porcelaine"}, "qui": "La fille du marquis d'Auray, qu'on veut marier à un favori de la cour.", "aspect": {"allure": "frêle, pâle, des mains effilées"}},
  "marquise": {"name": "La marquise d'Auray", "aka": ["marquise d'Auray"], "face": {"age": "mur", "hair": "blanc", "coif": "chignon", "skin": "porcelaine"}, "qui": "La mère d'Emmanuel et de Marguerite, maîtresse absolue du château d'Auray, réputée pour sa vertu.", "aspect": {"allure": "toujours en deuil, droite, glaciale"}},
  "marquis": {"name": "Le marquis d'Auray", "aka": ["marquis d'Auray"], "face": {"age": "ancien", "hair": "gris", "coif": "court", "skin": "clair"}, "qui": "Le vieux seigneur d'Auray, qui vit enfermé depuis vingt ans, sans volonté, sous la garde de sa femme.", "aspect": {"allure": "uniforme de maître de camp, regard absent"}},
  "lusignan": {"name": "Anatole de Lusignan", "aka": ["Lusignan"], "face": {"age": "jeune", "hair": "brun", "coif": "court", "skin": "clair"}, "qui": "Un jeune homme que l'on déporte à Cayenne comme criminel d'État.", "aspect": {"allure": "doux, triste, calme sous le feu"}},
  "lectoure": {"name": "Le baron de Lectoure", "aka": ["Lectoure", "baron de Lectoure"], "face": {"age": "jeune", "hair": "blond", "coif": "court", "skin": "clair"}, "qui": "Un favori de la cour, que l'on destine à Marguerite.", "aspect": {"allure": "poudré, nonchalant, un flacon de sels"}},
  "achard": {"name": "Louis Achard", "aka": ["Achard"], "face": {"age": "ancien", "hair": "blanc", "coif": "court", "skin": "hale"}, "qui": "Un vieux serviteur qui vit seul dans une petite maison à la lisière du parc d'Auray.", "aspect": {"allure": "un vieillard pieux et fidèle"}},
  "walter": {"name": "Le lieutenant Walter", "aka": ["Walter"], "face": {"age": "adulte", "hair": "blond", "coif": "court", "skin": "hale"}, "qui": "Le lieutenant de l'Indienne, bras droit du capitaine Paul.", "aspect": {"allure": "un marin exact et dévoué"}},
  "morlaix": {"name": "Le comte de Morlaix", "aka": ["comte de Morlaix", "Morlaix"], "face": {"age": "adulte", "hair": "brun", "coif": "long", "skin": "clair"}, "qui": "Un gentilhomme breton d'autrefois, dont le vieil Achard garde le souvenir.", "aspect": {"allure": "fier, généreux, la flamme dans les yeux"}},
  "lajarry": {"name": "M. Lajarry", "aka": ["Lajarry"], "face": {"age": "mur", "hair": "gris", "coif": "degarni", "skin": "clair"}, "qui": "Un gentilhomme campagnard du voisinage, voyageur sans curiosité.", "aspect": {"allure": "bonhomme, fier de sa chasse aux canards"}},
}

NO_AUTO = ["emmanuel", "lusignan", "marguerite", "marquise", "paul"]
MEET = {"I_2": ["emmanuel"], "III_2": ["paul"], "IV_1": ["marguerite"], "IV_2": ["marquise"], "V_2": ["lusignan"]}

WORDS = {
  "mousquetaires|mousquetaire": "Des cavaliers de la garde du roi, recrutés parmi les jeunes nobles.",
  "enseigne": "Dans la marine, le grade d'officier juste au-dessous du lieutenant de vaisseau.",
  "speronare": "Une petite barque à voiles et à rames des côtes de Sicile et de Malte.",
  "frégate|frégates": "Un navire de guerre à trois mâts, rapide, armé d'une seule batterie couverte.",
  "commodore": "Un officier de marine qui commande une petite escadre, au-dessus du capitaine de vaisseau.",
  "maître de camp": "Sous l'Ancien Régime, le colonel qui commande un régiment.",
  "brevet": "Un acte du roi qui accorde un grade, une charge ou une faveur.",
  "Convention": "L'assemblée qui gouverna la France de 1792 à 1795, après la chute de la monarchie.",
  "roman-feuilleton": "Un roman publié en morceaux, jour après jour, au bas des pages d'un journal.",
}


PAGES = {
  "P_1": ["Habent sua fata libelli", "paris"], "P_2": ["Le fils du concierge", "paris"], "P_3": ["L'Ave Maria du speronare", "sicile"], "P_4": ["Le vent du détroit", "sicile"], "P_5": ["La tempête", "sicile"], "P_6": ["Échoués sur la plage", "sicile"], "P_7": ["Le drame écrit en huit jours", "paris"], "P_8": ["Harel et mademoiselle George", "paris"], "P_9": ["La lecture", "paris"], "P_10": ["Le roman-feuilleton", "paris"], "P_11": ["Le retour du lièvre", "paris"],
  "I_1": ["La frégate mystérieuse", "portlouis"], "I_2": ["Le comte d'Auray", "portlouis"], "I_3": ["Le jeune enseigne", "portlouis"], "I_4": ["Le capitaine Paul", "portlouis"], "I_5": ["Qu'est-ce que l'honneur ?", "portlouis"],
  "II_1": ["La corbeille de noces", "indienne"], "II_2": ["L'équipage de toutes les nations", "indienne"], "II_3": ["Le vieux loup de mer", "indienne"], "II_4": ["Un prisonnier pour Cayenne", "indienne"],
  "III_1": ["Une voile anglaise", "indienne"], "III_2": ["Le vrai visage du capitaine", "indienne"], "III_3": ["Le pavillon d'Écosse", "indienne"], "III_4": ["Le prisonnier sur le pont", "indienne"], "III_5": ["L'abordage du Drake", "indienne"],
  "IV_1": ["La chaise de poste", "route"], "IV_2": ["Le sombre château", "chateau"], "IV_3": ["La marquise d'Auray", "chateau"], "IV_4": ["Le cavalier aperçu", "chateau"],
  "V_1": ["Les souvenirs d'Emmanuel", "chateau"], "V_2": ["Le gentilhomme anglais", "chateau"], "V_3": ["L'histoire de Marguerite", "chateau"], "V_4": ["Les lettres", "chateau"],
  "VI_1": ["Marguerite d'Auray", "chateau"], "VI_2": ["Plutôt le bourreau", "chateau"], "VI_3": ["« Elle t'aime toujours »", "plage"],
  "VII_1": ["Ce qui s'était passé", "plage"], "VII_2": ["Le vieil Achard", "maison"], "VII_3": ["Un secret de vingt ans", "maison"], "VII_4": ["Le cœur de bronze", "maison"],
  "VIII_1": ["Le fils revenu", "maison"], "VIII_2": ["La demi-pièce d'or", "maison"], "VIII_3": ["Dieu veut ce qu'il veut", "maison"],
  "IX_1": ["Le comte de Morlaix", "maison"], "IX_2": ["Le duel dans le parc", "maison"], "IX_3": ["La visite de Marguerite", "maison"],
  "X_1": ["Un inconnu chez Achard", "maison"], "X_2": ["Envoyé par celui qui est là-haut", "maison"], "X_3": ["« Ma sœur ! »", "maison"],
  "XI_1": ["Le jour décisif", "chateau"], "XI_2": ["Le baron de Lectoure", "chateau"], "XI_3": ["Une femme au fond de la Basse-Bretagne", "chateau"], "XI_4": ["La fiancée", "chateau"], "XI_5": ["Un arrangement social", "chateau"],
  "XII_1": ["Le dîner", "chateau"], "XII_2": ["La chasse aux canards", "chateau"], "XII_3": ["Monsieur Lajarry à Naples", "chateau"], "XII_4": ["Le refus de Paul", "chateau"],
  "XIII_1": ["La signature du contrat", "chateau"], "XIII_2": ["Le marquis se souvient", "chateau"], "XIII_3": ["Prenez garde, madame", "chateau"], "XIII_4": ["La chute du marquis", "chateau"],
  "XIV_1": ["Deux mourants", "maison"], "XIV_2": ["Le doute", "maison"], "XIV_3": ["La voix de Marguerite", "maison"],
  "XV_1": ["La confession du marquis", "maison"], "XV_2": ["Des pas dans la nuit", "maison"], "XV_3": ["La marquise chez Achard", "maison"], "XV_4": ["Justice de Dieu", "maison"],
  "XVI_1": ["Les conditions du combat", "chateau"], "XVI_2": ["Mère par une faute", "chateau"], "XVI_3": ["Le cri de Marguerite", "chateau"],
  "XVII_1": ["Pourquoi le soir", "chateau"], "XVII_2": ["Seul à seul", "chateau"], "XVII_3": ["Le pistolet", "chateau"],
  "XVIII_1": ["Le brevet et la commission", "chateau"], "XVIII_2": ["La première caresse", "chateau"], "XVIII_3": ["Le congé de Lectoure", "plage"], "XVIII_4": ["L'épée du roi", "plage"],
  "E_1": ["Cinq ans après", "guadeloupe"], "E_2": ["Les côtes de la Guadeloupe", "guadeloupe"], "E_3": ["Un navire au cap des Trois-Pointes", "guadeloupe"], "E_4": ["Le dernier adieu", "guadeloupe"], "E_5": ["La Russie de Catherine", "russie"], "E_6": ["Le retour à Auray", "chateau"], "E_7": ["L'inscription", "chateau"],
}
