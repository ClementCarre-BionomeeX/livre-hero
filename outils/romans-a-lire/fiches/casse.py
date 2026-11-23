# Fiche de « Histoire d'un casse-noisette » (id casse) pour livre.py (texte de Dumas, 1844).
# Texte : gut.py sur Gutenberg n° 5104 (miroir orkeilius/gutenberg_fr_mirror), entre fiches/casse_texte.py pre et post.
HEAD = """// « Histoire d'un casse-noisette », Alexandre Dumas, 1844 : un livre à lire, sans choix (lecture: true). Texte de Dumas,
// domaine public, d'après l'édition numérique du projet Gutenberg. Les titres des chapitres sont ceux de Dumas (raccourcis pour VII à X) ; les
// titres des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude."""

BASE = {
  "id": "casse",
  "title": "Histoire d'un casse-noisette",
  "subtitle": "Un conte à lire · Alexandre Dumas, 1844",
  "summary": "Le soir de Noël, à Nuremberg, la petite Marie trouve sous l'arbre un drôle de bonhomme de bois à grosse tête, qui casse les noisettes entre ses mâchoires. Son frère lui brise trois dents ; Marie le soigne. À minuit, dans le salon désert, l'armoire aux joujoux s'éveille et les souris sortent de partout.",
  "tags": ["fantasy", "humour"],
  "author": "Alexandre Dumas",
  "lecture": True,
  "age": 8,
  "skin": "parchemin",
  "cover": {"motif": "etoile", "color": "#2a3a5a"},
  "glossary": None,
  "voice": "troisième personne, passé",
  "version": 1,
  "notice": {
    "title": "Un conte de Noël de 1844",
    "text": [
      "*Histoire d'un casse-noisette* a paru en 1844. Dumas y raconte à sa façon un conte allemand d'E. T. A. Hoffmann, *Casse-Noisette et le Roi des souris* (1816), et c'est sa version que Tchaïkovski a mise en musique pour son ballet. Le texte est celui de Dumas, d'après une édition de Gallica numérisée par le projet Gutenberg ; le volume contenait aussi « L'Égoïste » et « Nicolas le philosophe », qui ne sont pas repris ici.",
      "La numérisation avait perdu des lettres accentuées, surtout en fin de ligne : les « à », les « é » et les « où » manquants ont été rétablis, ainsi que quelques coquilles. Les titres des chapitres sont ceux de Dumas ; les quatre chapitres de l'histoire de la princesse Pirlipate portaient de longues phrases en guise de titres, raccourcies ici.",
    ],
  },
  "intro": [],
  "world": {"start": {"place": "boudoir", "hour": 20, "gold": 0, "food": 0, "items": [], "kits": {"guerrier": [], "rodeur": [], "voleur": [], "mage": [], "pretre": [], "barde": []}}},
}

def roman(n):
    out = ''
    for v, r in ((100, 'C'), (90, 'XC'), (50, 'L'), (40, 'XL'), (10, 'X'), (9, 'IX'), (5, 'V'), (4, 'IV'), (1, 'I')):
        while n >= v: out += r; n -= v
    return out

TITRES = [
  "Préface",
  "Le parrain Drosselmayer",
  "L'arbre de Noël",
  "Le petit homme au manteau de bois",
  "Choses merveilleuses",
  "La bataille",
  "La maladie",
  "La naissance de Pirlipate",
  "La vengeance de dame Souriçonne",
  "La noisette Krakatuk",
  "Le jeune homme qui devait la casser",
  "L'oncle et le neveu",
  "La capitale",
  "Le royaume des poupées",
  "Le voyage",
  "Conclusion",
]


R = [
  "Dans une soirée d'enfants, Dumas s'endort dans un fauteuil et se réveille ficelé par une bande de petits démons. Pour sa liberté, il offre des gâteaux, puis un feu d'artifice ; on lui réclame un conte. Il promet le Casse-Noisette de Nuremberg.",
  "À Nuremberg, le président Silberhaus a deux enfants, Fritz, neuf ans, batailleur, et Marie, sept ans et demi, douce et rêveuse. Leur parrain Drosselmayer, conseiller de médecine à la perruque de verre et à l'emplâtre sur l'œil, répare les horloges et fabrique des merveilles. Le soir de Noël, les enfants attendent dans le noir que la porte du salon s'ouvre.",
  "Sous l'arbre illuminé, Marie trouve une poupée, Fritz un alezan et des hussards. Le parrain a construit un château où de petits personnages entrent et sortent, et l'un d'eux lui ressemble. Fritz voudrait qu'ils sortent par une autre porte ; le parrain refuse, et les enfants retournent à leurs joujoux.",
  "Marie découvre, appuyé à l'arbre, un petit bonhomme contrefait à grosse tête, en polonaise de velours violet : un casse-noisette, qui sert à tous. Fritz lui donne une noisette trop dure et lui brise trois dents. Marie le prend sous sa protection, le panse avec un ruban, et le parrain, quand elle le compare à lui, voit son nez s'allonger tandis que les parents éclatent de rire.",
  "Restée seule au salon, Marie couche son blessé dans le lit de sa poupée, mademoiselle Claire. Minuit sonne. Sur la pendule, la chouette prend les traits du parrain Drosselmayer. Les souris sortent de partout, menées par un roi à sept têtes, et dans l'armoire les joujoux s'éveillent. Casse-Noisette se lève et appelle aux armes.",
  "Les hussards chargent, les canons tonnent, les poupées font de la charpie. Les souris prennent la batterie, et la réserve de pain d'épice ne tient pas. Casse-Noisette est cerné. Marie lance son soulier sur le roi des souris, et tout disparaît ; elle tombe évanouie, le bras en sang.",
  "Marie se réveille dans son lit, soignée par le chirurgien Wandelstern ; on la croit tombée contre l'armoire. Le parrain vient la voir, chante une étrange chanson d'horloger et promet de raconter l'histoire de la noisette Krakatuk et de la princesse Pirlipate.",
  "Récit du parrain. Dans un petit royaume sans nom naît la princesse Pirlipate, que six gardiennes veillent avec des chats sur les genoux. Le roi avait fait préparer des boudins ; dame Souriçonne et sa famille ont dévoré le lard. Le mécanicien Christian-Élias Drosselmayer invente des pièges qui chassent les souris du royaume. Dame Souriçonne jure de se venger sur la princesse.",
  "Malgré les gardiennes, dame Souriçonne atteint le berceau, et Pirlipate devient un monstre à grosse tête et à bouche immense. Sommé de la guérir, le mécanicien consulte l'astrologue : la princesse retrouvera sa beauté en mangeant l'amande de la noisette Krakatuk, cassée par un jeune homme jamais rasé, toujours botté, qui la lui donnera les yeux fermés et reculera de sept pas sans trébucher. Les deux savants partent chercher la noisette.",
  "Après plus de quatorze ans de voyage sur toute la terre, le mécanicien et l'astrologue rentrent bredouilles. Avant de se livrer au roi, le mécanicien passe par Nuremberg chez son frère Christophe-Zacharias, marchand de joujoux. Celui-ci possède une noisette dorée qu'il garde depuis des années, et sous la dorure on lit : Krakatuk.",
  "Le fils de Zacharias, Nathaniel, jamais rasé, toujours botté, casse les noisettes des jeunes filles : les astres le désignent. Onze mille prétendants se cassent les dents sur la noisette avant lui. Nathaniel la brise, Pirlipate redevient belle ; il recule de sept pas, et au septième, la reine des souris se jette entre ses jambes. L'histoire du parrain finit sur le sort du jeune homme et sur la réponse de la princesse.",
  "Guérie, Marie comprend que son Casse-Noisette est le neveu du parrain, et qu'elle seule peut le délivrer de son enchantement. Elle lui parle tout haut devant l'armoire. Le parrain, mystérieux, lui dit qu'elle seule peut le sauver, si elle reste ferme et fidèle.",
  "La nuit, le roi des souris vient réclamer à Marie ses dragées, puis ses poupées de sucre, puis ses livres d'images et sa robe, sous peine de dévorer Casse-Noisette. Marie cède tout. Casse-Noisette lui demande seulement une épée ; Fritz lui procure le sabre d'un vieux major de cuirassiers qu'il vient de mettre à la retraite. La nuit suivante, il revient vainqueur, offre à Marie les sept couronnes du roi des souris et l'invite à le suivre.",
  "Casse-Noisette mène Marie à une vieille armoire du corridor, grimpe à la pelisse du président, en tire un escalier de cèdre, et Marie passe par la manche. Elle débouche dans la forêt de Noël, aux fruits d'or et d'argent, puis au bord d'un fleuve qui sent la rose, où chantent des cygnes.",
  "Un char tiré par des dauphins d'or porte Marie sur le fleuve d'essence de rose jusqu'à Confiturembourg, capitale du royaume des poupées, ville de sucreries où une émeute s'apaise au seul mot de confiseur. Au palais des Massepains, les sœurs de Casse-Noisette accueillent Marie. Elle se sent soulevée par des vagues, et tombe de très haut.",
  "Marie se réveille dans son lit, et personne ne croit à son voyage. Elle montre les sept couronnes ; le parrain prétend les lui avoir données autrefois. Un jour, assise devant l'armoire, elle dit tout haut qu'elle aimerait Casse-Noisette même sous sa figure de bois. Un fracas, elle s'évanouit, et quand elle revient à elle, le neveu du parrain arrive de voyage.",
]

def titre(i, t):
    if i == 0: return t
    return "Chapitre " + roman(i) + " · " + t
CHAPTERS = [{"title": titre(i, t), "text": r} for i, (t, r) in enumerate(zip(TITRES, R))]

PLACES = {
  "boudoir": {"ambiance": "ville", "name": "Le boudoir du comte de M…", "map": "paris", "x": 50, "y": 45, "region": "Paris", "desc": "Un petit salon retiré, plafond de Boucher, buffets chargés de gâteaux, et un grand fauteuil à la Voltaire où l'on s'endort."},
  "salon": {"ambiance": "ville", "name": "Le salon du président", "map": "nuremberg", "x": 50, "y": 50, "region": "Nuremberg", "desc": "Une grande pièce où l'on dresse le soir de Noël un sapin couvert de lumières et de bonbons."},
  "armoire": {"ambiance": "nuit", "name": "L'armoire vitrée", "map": "nuremberg", "x": 55, "y": 48, "region": "Le salon du président, à droite en entrant", "desc": "Une armoire aux carreaux brillants : sur les rayons, les hussards de Fritz, les poupées de Marie, et un petit lit blanc."},
  "chambre": {"ambiance": "ville", "name": "La chambre de Marie", "map": "nuremberg", "x": 45, "y": 52, "region": "Nuremberg", "desc": "Un petit lit, des carreaux couverts de givre, et la nuit un rayon de lune entre les rideaux."},
  "royaume": {"ambiance": "chateau", "name": "Le petit royaume sans nom", "map": "pirlipate", "x": 50, "y": 50, "region": "Dans les environs de Nuremberg", "desc": "Un palais, une cuisine où mijotent les boudins du roi, un âtre où vit la famille des souris, et une chambre où six gardiennes veillent un berceau."},
  "monde": {"ambiance": "route", "name": "Les quatre parties du monde", "map": "pirlipate", "x": 20, "y": 30, "region": "L'Europe, l'Amérique, l'Afrique, l'Asie, et une cinquième", "desc": "Quinze années de routes, de forêts et de mers, et des noisettes de toutes les formes."},
  "boutique": {"ambiance": "ville", "name": "La boutique de Zacharias", "map": "nuremberg", "x": 60, "y": 55, "region": "Nuremberg", "desc": "Une boutique de joujoux, où un jeune homme botté casse les noisettes des jeunes filles."},
  "foret": {"ambiance": "foret", "name": "La forêt de Noël", "map": "poupees", "x": 30, "y": 60, "region": "Au-delà de la manche de la pelisse", "desc": "Une prairie qui scintille, et des arbres chargés de fruits d'or et d'argent, de rubans et de bouquets."},
  "fleuve": {"ambiance": "eau", "name": "Le fleuve d'essence de rose", "map": "poupees", "x": 45, "y": 50, "region": "Le royaume des poupées", "desc": "Un fleuve parfumé où glissent des cygnes à colliers d'or et des poissons de diamant."},
  "confiturembourg": {"ambiance": "ville", "name": "Confiturembourg", "map": "poupees", "x": 60, "y": 40, "region": "Capitale du royaume des poupées", "desc": "Une ville de sucreries, des fontaines de limonade et d'orgeat, une brioche en obélisque, et une foule qui se querelle et s'apaise."},
  "palais": {"ambiance": "chateau", "name": "Le palais des Massepains", "map": "poupees", "x": 70, "y": 30, "region": "Confiturembourg", "desc": "Un palais rose aux cent tourelles, sa coupole semée d'étoiles d'or et d'argent."},
}


PEOPLE = {
  "marie": {"name": "Marie Silberhaus", "aka": ["Marie"], "face": {"age": "enfant", "hair": "blond", "coif": "boucles", "skin": "porcelaine"}, "qui": "La fille du président Silberhaus, sept ans et demi, douce, rêveuse, qui prend soin des joujoux blessés.", "aspect": {"allure": "robe de soie, ruban blanc", "signe": "le bras en écharpe"}},
  "fritz": {"name": "Fritz Silberhaus", "aka": ["Fritz"], "face": {"age": "enfant", "hair": "chatain", "coif": "court", "skin": "clair"}, "qui": "Le frère de Marie, neuf ans, joufflu, fanfaron, général de ses hussards de plomb.", "aspect": {"allure": "sabre de bois à la ceinture"}},
  "parrain": {"name": "Le parrain Drosselmayer", "aka": ["parrain Drosselmayer", "conseiller de médecine"], "face": {"age": "ancien", "hair": "blanc", "coif": "degarni", "skin": "ivoire"}, "qui": "Le parrain des enfants, conseiller de médecine, qui répare les horloges et fabrique des joujoux mécaniques.", "aspect": {"allure": "redingote jaune, perruque de verre", "signe": "un emplâtre noir sur l'œil"}},
  "casse": {"name": "Casse-Noisette", "aka": ["Casse-Noisette", "Casse-noisette", "casse-noisette"], "face": {"age": "jeune", "hair": "blanc", "coif": "court", "skin": "#c9a27a", "beard": "barbe"}, "qui": "Un petit bonhomme de bois à grosse tête, en polonaise de velours violet, qui casse les noisettes entre ses mâchoires.", "aspect": {"allure": "polonaise de velours violet, manteau de bois", "signe": "un ruban blanc au menton"}},
  "president": {"name": "Le président Silberhaus", "aka": ["président Silberhaus"], "face": {"age": "mur", "hair": "chatain", "coif": "court", "skin": "clair", "beard": "moustache"}, "qui": "Le père de Fritz et de Marie, magistrat fort considéré à Nuremberg.", "aspect": {"allure": "habit noir, montre à chaîne"}},
  "presidente": {"name": "La présidente", "aka": ["présidente"], "face": {"age": "adulte", "hair": "brun", "coif": "chignon", "skin": "clair"}, "qui": "La mère de Fritz et de Marie, qui veille sur eux et leur lit des histoires le soir.", "aspect": {"allure": "bonnet de dentelle"}},
  "trudchen": {"name": "Mademoiselle Trudchen", "aka": ["Trudchen"], "face": {"age": "mur", "hair": "gris", "coif": "chignon", "skin": "clair"}, "qui": "La gouvernante des enfants, silencieuse, qui tricote en les surveillant.", "aspect": {"allure": "tricot à la main"}},
  "rat": {"name": "Le roi des souris", "aka": ["roi des souris"], "face": {"age": "adulte", "hair": "gris", "coif": "couronne", "skin": "#8a8580"}, "qui": "Le fils de dame Souriçonne, un roi à sept têtes couronnées qui mène l'armée des souris.", "aspect": {"allure": "sept têtes, sept couronnes d'or"}},
  "souriconne": {"name": "Dame Souriçonne", "aka": ["dame Souriçonne", "Souriçonne", "reine des souris"], "face": {"age": "ancien", "hair": "gris", "coif": "couronne", "skin": "#8a8580"}, "qui": "La reine des souris, qui vit sous l'âtre d'un petit royaume et ne pardonne pas qu'on la chasse.", "aspect": {"allure": "petite couronne, longue queue"}},
  "pirlipate": {"name": "La princesse Pirlipate", "aka": ["Pirlipate"], "face": {"age": "enfant", "hair": "blond", "coif": "boucles", "skin": "porcelaine"}, "qui": "La fille du roi d'un petit royaume sans nom, née d'une beauté miraculeuse.", "aspect": {"allure": "berceau gardé par six chats"}},
  "mecanicien": {"name": "Christian-Élias Drosselmayer", "aka": ["Christian-Élias Drosselmayer", "Christian-Élias"], "face": {"age": "mur", "hair": "gris", "coif": "court", "skin": "clair"}, "qui": "L'horloger et mécanicien de la cour d'un petit royaume, natif de Nuremberg.", "aspect": {"allure": "redingote, boîte à outils"}},
  "astrologue": {"name": "L'astrologue", "aka": ["l'astrologue"], "face": {"age": "ancien", "hair": "blanc", "coif": "long", "skin": "clair", "beard": "longue"}, "qui": "L'astrologue de la cour, ami du mécanicien, qui lit l'avenir dans les étoiles.", "aspect": {"allure": "longue robe, lunette d'approche"}},
  "zacharias": {"name": "Christophe-Zacharias Drosselmayer", "aka": ["Christophe-Zacharias", "Zacharias"], "face": {"age": "mur", "hair": "gris", "coif": "degarni", "skin": "clair"}, "qui": "Le frère du mécanicien, marchand de joujoux à Nuremberg.", "aspect": {"allure": "tablier de boutiquier"}},
  "nathaniel": {"name": "Nathaniel Drosselmayer", "aka": ["Nathaniel Drosselmayer", "Nathaniel"], "face": {"age": "jeune", "hair": "chatain", "coif": "court", "skin": "clair"}, "qui": "Le fils de Zacharias, étudiant revenu de Tubingen, qui n'a jamais porté que des bottes.", "aspect": {"allure": "habit rouge brodé d'or, bottes"}},
  "wandelstern": {"name": "Le chirurgien Wandelstern", "aka": ["Wandelstern"], "face": {"age": "mur", "hair": "gris", "coif": "court", "skin": "clair"}, "qui": "Le chirurgien qui soigne le bras de Marie.", "aspect": {"allure": "habit noir, trousse"}},
  "claire": {"name": "Mademoiselle Claire", "aka": ["mademoiselle Claire", "Mademoiselle Claire"], "face": {"age": "enfant", "hair": "blond", "coif": "boucles", "skin": "porcelaine"}, "qui": "La poupée neuve de Marie, reçue à Noël.", "aspect": {"allure": "robe de poupée, petit lit blanc"}},
}

NO_AUTO = ["casse", "pirlipate", "zacharias"]
MEET = {"III_2": ["casse"], "VII_1": ["pirlipate"], "IX_2": ["zacharias"]}

WORDS = {
  "rodomont": "Un fanfaron, qui se vante de son courage.",
  "conseiller de médecine": "En Allemagne, un titre honorifique donné à un médecin.",
  "emplâtre": "Un pansement collant posé sur une plaie.",
  "alezan": "Un cheval à la robe brun-rouge.",
  "hussard|hussards": "Un soldat de la cavalerie légère, en veste à brandebourgs.",
  "massepain|massepains": "Une friandise de pâte d'amande et de sucre.",
  "dragée|dragées": "Une amande enrobée de sucre durci.",
  "charpie": "Des fils tirés de vieux linge, dont on garnissait les plaies.",
  "andouille|andouilles": "Une charcuterie faite de boyaux de porc.",
  "âtre": "Le fond de la cheminée, où l'on fait le feu.",
  "astrologue": "Celui qui prétend lire l'avenir dans les astres.",
  "malle-poste": "Une voiture rapide qui transportait le courrier et quelques voyageurs.",
  "zwanziger|zwanzigers": "Une petite pièce d'argent d'Allemagne et d'Autriche.",
  "pelisse": "Un manteau garni de fourrure.",
  "orgeat": "Un sirop d'amande.",
  "bourgmestre": "Le maire d'une ville, en Allemagne ou en Belgique.",
}


PAGES = {
  "P_1": ["Prisonnier des enfants", "boudoir"], "P_2": ["Un conte, un joli conte", "boudoir"],
  "I_1": ["Fritz et Marie", "salon"], "I_2": ["Le parrain aux horloges", "salon"], "I_3": ["Ce qu'apportera le parrain", "salon"], "I_4": ["La porte du salon", "salon"],
  "II_1": ["L'arbre de Noël", "salon"], "II_2": ["Le château du parrain", "salon"],
  "III_1": ["Le petit bonhomme", "salon"], "III_2": ["Knac ! knac !", "salon"], "III_3": ["Le blessé", "salon"],
  "IV_1": ["L'armoire vitrée", "armoire"], "IV_2": ["Minuit sonne", "armoire"], "IV_3": ["Le parrain sur la pendule", "armoire"], "IV_4": ["Aux armes !", "armoire"],
  "V_1": ["Sonnez la charge !", "armoire"], "V_2": ["La batterie du tabouret", "armoire"], "V_3": ["Le soulier de Marie", "armoire"],
  "VI_1": ["Le réveil", "chambre"], "VI_2": ["L'histoire promise", "chambre"],
  "VII_1": ["Une princesse est née", "royaume"], "VII_2": ["Le lard du roi", "royaume"], "VII_3": ["Le festin des souris", "royaume"], "VII_4": ["Le grand banquet", "royaume"], "VII_5": ["Les pièges du mécanicien", "royaume"],
  "VIII_1": ["La nuit de la vengeance", "royaume"], "VIII_2": ["Le mécanicien au travail", "royaume"], "VIII_3": ["L'oracle des astres", "royaume"], "VIII_4": ["Le moyen", "royaume"],
  "IX_1": ["Quinze ans de route", "monde"], "IX_2": ["Le frère de Nuremberg", "boutique"], "IX_3": ["La noisette dorée", "boutique"],
  "X_1": ["Le neveu", "boutique"], "X_2": ["Les astres ont parlé", "royaume"], "X_3": ["Le concours", "royaume"], "X_4": ["Cric ! crac !", "royaume"], "X_5": ["Les sept pas", "royaume"],
  "XI_1": ["La coupure qui ne guérit pas", "armoire"], "XI_2": ["Ce qu'il faut pour le sauver", "salon"],
  "XII_1": ["Le roi des souris revient", "chambre"], "XII_2": ["Les poupées de sucre", "chambre"], "XII_3": ["Le sabre du vieux major", "armoire"],
  "XIII_1": ["Par la manche de la pelisse", "foret"], "XIII_2": ["La forêt de Noël", "foret"],
  "XIV_1": ["Le char de coquillages", "fleuve"], "XIV_2": ["Confiturembourg", "confiturembourg"], "XIV_3": ["Le palais des Massepains", "palais"],
  "XV_1": ["Le réveil de Marie", "chambre"], "XV_2": ["Les sept couronnes", "salon"], "XV_3": ["Le neveu de Nuremberg", "salon"],
}
