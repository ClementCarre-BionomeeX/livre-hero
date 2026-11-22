# Fiche de « Michel Strogoff » pour livre.py (texte de Verne, 1876).
# Texte : elg.py (div3, parties div2) sur l'export TEI d'Ebooks libres et gratuits, puis fiches/strogoff_texte.py.
HEAD = """// « Michel Strogoff », Jules Verne, 1876 : un livre à lire, sans choix (lecture: true). Texte de Verne, domaine
// public, d'après l'édition numérique d'Ebooks libres et gratuits. Les notes de l'auteur sont remises entre parenthèses
// à leur appel. Les titres des chapitres sont de Verne ; ceux des pages, comme tout ce qui vit dans les tags (gens,
// lieux, mots, résumés), sont de Claude."""

BASE = {
  "id": "strogoff",
  "title": "Michel Strogoff",
  "subtitle": "Un roman à lire · Jules Verne, 1876",
  "summary": "Juillet, à Moscou, pendant un bal au palais. Une dépêche arrive : les Tartares ont envahi la Sibérie, le télégraphe est coupé, et le frère du czar est isolé à Irkoutsk, à cinq mille verstes. Un traître, Ivan Ogareff, marche avec les envahisseurs pour le livrer. Il faut qu'une lettre passe. Le czar la confie à un courrier de trente ans, né en Sibérie : Michel Strogoff. Il voyagera sous un faux nom, à travers un pays en guerre, sans jamais dire qui il est, pas même à sa mère s'il la croise en chemin. Le roman de Verne en entier, sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  "tags": ["aventure", "voyage", "guerre"],
  "author": "Jules Verne",
  "lecture": True,
  "age": 11,
  "skin": "sable",
  "cover": {"motif": "sceau", "color": "#6a3b2a"},
  "glossary": None,
  "voice": "troisième personne, passé",
  "version": 1,
  "notice": {
    "title": "Un livre de 1876",
    "reminder": "Ce chapitre décrit l'armée tartare avec le regard et les mots de 1876.",
    "text": [
      "Le roman a paru en feuilleton dans le *Magasin d'éducation et de récréation*, puis en deux volumes chez Hetzel en 1876. Le texte est celui de Verne, sans retouche, avec ses notes ; ses mesures sont russes (verstes, roubles, kopeks) et l'auteur en donne lui-même l'équivalent.",
      "L'invasion de la Sibérie par les Tartares de Boukhara est inventée, et la géographie, très exacte, est celle d'un lecteur de cartes : Verne n'est jamais allé en Russie. Hetzel, son éditeur, a fait lire le manuscrit à Tourgueniev, et le roman ménage avec soin l'empire des czars, qui était alors l'allié espéré de la France.",
      "Les Tartares, les Kirghis et les peuples d'Asie centrale y sont décrits en barbares, en hordes fanatiques et cruelles, face aux Russes civilisés ; les tsiganes, en voleurs et en espions. C'est le regard d'un Européen de ce temps-là. Le roman parle aussi de guerre, de massacres, de pillage et d'un supplice. Le premier chapitre de la seconde partie s'ouvre sur un rappel de cette notice.",
    ],
  },
  "intro": [],
  "world": {"start": {"place": "moscou", "hour": 22, "gold": 0, "food": 0, "items": [], "kits": {"guerrier": [], "rodeur": [], "voleur": [], "mage": [], "pretre": [], "barde": []}}},
}

T1 = ["Une fête au Palais-Neuf", "Russes et Tartares", "Michel Strogoff", "De Moscou à Nijni-Novgorod", "Un arrêté en deux articles",
      "Frère et sœur", "En descendant le Volga", "En remontant la Kama", "En *tarentass* nuit et jour", "Un orage dans les monts Ourals",
      "Voyageurs en détresse", "Une provocation", "Au-dessus de tout, le devoir", "Mère et fils", "Les marais de la Baraba",
      "Un dernier effort", "Versets et chansons"]
T2 = ["Un camp tartare", "Une attitude d'Alcide Jolivet", "Coup pour coup", "L'entrée triomphale", "Regarde de tous tes yeux, regarde !",
      "Un ami de grande route", "Le passage de l'Yeniseï", "Un lièvre qui traverse la route", "Dans la steppe", "Baïkal et Angara",
      "Entre deux rives", "Irkoutsk", "Un courrier du czar", "La nuit du 5 au 6 octobre", "Conclusion"]
ROM = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII"]

R1 = [
  "Au Palais-Neuf de Moscou, le czar donne une fête. Le général Kissoff lui apporte dépêche sur dépêche : le fil est coupé au-delà de Tomsk. Deux correspondants de journaux, le Français Alcide Jolivet et l'Anglais Harry Blount, flairent la nouvelle avant tout le monde.",
  "Au conseil, le czar apprend l'étendue du désastre : Féofar-Khan, émir de Boukhara, a soulevé les Kirghis et envahi la Sibérie. Ivan Ogareff, un colonel cassé de ses grades, est passé aux Tartares pour se venger ; il veut livrer Irkoutsk et le grand-duc, frère du czar.",
  "Il faut un courrier pour prévenir le grand-duc. Le général Kissoff présente Michel Strogoff, courrier du czar, né à Omsk, fils de la vieille Marfa. Le czar lui confie une lettre et un ordre : ne jamais dire qui il est.",
  "Michel Strogoff part sous le nom de Nicolas Korpanoff, négociant d'Irkoutsk. Dans le train de Nijni-Novgorod, des marchands parlent de la guerre ; les deux correspondants sont du voyage. Une jeune Livonienne voyage seule.",
  "Nijni-Novgorod, en pleine foire. Michel Strogoff croise une troupe de tsiganes et entend une conversation inquiétante. Le gouverneur interdit aux sujets russes de quitter la province, et chasse les étrangers d'origine asiatique.",
  "La jeune Livonienne est bloquée à Nijni-Novgorod : elle n'a pas de permis. Michel Strogoff la retrouve au bureau de police et l'emmène comme sa sœur, sur son propre permis.",
  "À bord du *Caucase*, sur le Volga, avec la foule des fuyants. Les deux correspondants se retrouvent, rivaux mais courtois. Michel Strogoff observe et se tait.",
  "Kazan, puis la Kama. La nuit, sur le pont, Michel Strogoff surprend les tsiganes. La jeune fille lui dit son nom, Nadia Fédor, et pourquoi elle va à Irkoutsk : rejoindre son père exilé.",
  "À Perm, Michel Strogoff loue un *tarentass* et part à toute allure, de relais en relais, avec Nadia. Il apprend à la connaître.",
  "La traversée des monts Ourals, en pleine nuit, dans un orage terrible. Les chevaux s'affolent, la foudre tombe. Puis des cris, plus haut sur la route.",
  "Les deux correspondants sont en détresse : leur télègue s'est coupée en deux et leur iemschik est parti avec la moitié de devant. Michel Strogoff les prend avec lui. À la descente, un ours attaque, et Michel Strogoff le tue au couteau.",
  "Ekaterinbourg, puis la steppe. Au relais d'Ichim, un voyageur à tournure militaire exige les chevaux de Michel Strogoff, et le frappe au visage d'un coup de fouet.",
  "Michel Strogoff ne relève pas l'insulte : sa mission passe avant tout. Nadia comprend qu'il porte un secret. On franchit l'Ichim, puis l'Irtyche en crue. Au milieu du fleuve, des barques tartares abordent le bac ; Nadia est enlevée, Michel Strogoff se jette à l'eau.",
  "Michel Strogoff, blessé, recueilli par un moujik, arrive à Omsk, où les Tartares sont entrés. Au relais, il se trouve face à sa mère, la vieille Marfa, et doit la renier sous les yeux des espions.",
  "Michel Strogoff traverse à cheval les marais de la Baraba, les nuages de moustiques et les villages désertés. Il apprend que les Tartares sont devant lui.",
  "Dans la nuit, Michel Strogoff se cache dans un taillis au passage d'un détachement tartare, qui parle de sa mère. Il s'échappe et traverse l'Obi à la nage, sous les balles.",
  "Kolyvan, sous les combats. Au bureau du télégraphe, Harry Blount et Alcide Jolivet se disputent le fil pour envoyer leurs dépêches. Les Tartares entrent dans la ville et prennent Michel Strogoff.",
]
R2 = [
  "Le camp de l'émir, près de Tomsk : son armée, ses prisonniers. Harry Blount est blessé ; Alcide Jolivet le soigne. Une colonne arrive : celle d'Ivan Ogareff.",
  "Ivan Ogareff se présente à l'émir et la tsigane Sangarre, son espionne, le rejoint. Les deux correspondants sont relâchés. Nadia et Marfa, prisonnières, se lient d'amitié, et Marfa comprend qui est le « frère » dont parle Nadia.",
  "Michel Strogoff est prisonnier parmi les autres. Ivan Ogareff, prévenu par Sangarre, cherche le courrier du czar et veut faire parler Marfa sous le knout. Michel Strogoff arrache le fouet au bourreau et en frappe le traître au visage : il s'est trahi.",
  "Tomsk, prise par les Tartares. L'émir et Ivan Ogareff y font une entrée triomphale, au milieu des danses et des fêtes. Michel Strogoff est amené devant eux.",
  "Le jugement de l'émir. Michel Strogoff ne regardera plus la route d'Irkoutsk : on lui brûle les yeux devant sa mère. Nadia le retrouve dans la nuit.",
  "Nadia guide Michel Strogoff vers l'est. Ils rencontrent Nicolas Pigassof, un employé du télégraphe qui les prend dans sa kibitka.",
  "Krasnoiarsk, abandonnée. Le passage de l'Yeniseï, sur un radeau improvisé. Michel Strogoff écoute ce que Nadia voit.",
  "Nicolas s'inquiète d'un lièvre qui traverse la route. Plus loin, à Nijni-Oudinsk, les Tartares les surprennent. Un cavalier insulte Michel Strogoff ; Nicolas, si doux, l'abat, et les Tartares l'emmènent garrotté.",
  "Michel Strogoff et Nadia marchent dans la steppe, seuls, sans vivres, jusqu'à l'épuisement. Serko, blessé, les mène à Nicolas, que les Tartares ont enterré vivant jusqu'au cou. Il meurt dans leurs bras. Devant eux, le lac Baïkal.",
  "Le lac Baïkal. Un radeau de fugitifs descend l'Angara vers Irkoutsk ; les deux correspondants sont à bord.",
  "La nuit sur l'Angara, entre deux rives tenues par les Tartares, avec les glaces qui descendent et l'eau couverte de naphte.",
  "Irkoutsk assiégée. Le grand-duc organise la défense. Les exilés politiques demandent à se battre ; le grand-duc les gracie et met à leur tête Wassili Fédor, le père de Nadia.",
  "Un courrier du czar se présente au grand-duc avec la lettre impériale : c'est Ivan Ogareff, sous le nom de Michel Strogoff. Il prépare la trahison de la nuit.",
  "La nuit du 5 au 6 octobre : le feu sur l'Angara et l'assaut des Tartares. Nadia surprend Ivan Ogareff à la porte de Bolchaïa.",
  "Ce qui est arrivé aux yeux de Michel Strogoff. Le siège est levé, les exilés reviennent, et l'histoire s'achève à Omsk et à Saint-Pétersbourg.",
]
CHAPTERS = [{"title": "Première partie · " + ROM[i] + ". " + T1[i], "text": r} for i, r in enumerate(R1)] + \
           [{"title": "Deuxième partie · " + ROM[i] + ". " + T2[i], "text": r} for i, r in enumerate(R2)]
CHAPTERS[17]["notice"] = True

PLACES = {
  "moscou": {"ambiance": "ville", "name": "Moscou", "map": "russie", "x": 6, "y": 50, "region": "La Russie d'Europe", "desc": "Le Palais-Neuf illuminé pour une fête, ses salons, ses uniformes, et le cabinet du czar où arrivent les dépêches."},
  "nijni": {"ambiance": "ville", "name": "Nijni-Novgorod", "map": "russie", "x": 14, "y": 48, "region": "La Russie d'Europe", "desc": "La ville au confluent du Volga et de l'Oka, et sa foire géante, des marchands de toute l'Asie entassés dans des rues de bois."},
  "volga": {"ambiance": "eau", "name": "Le Volga et la Kama", "map": "russie", "x": 20, "y": 52, "region": "La Russie d'Europe", "desc": "Le pont du *Caucase*, le *steam-boat* chargé de fuyards, Kazan au bord du fleuve, puis la Kama et ses rives boisées."},
  "ourals": {"ambiance": "montagne", "name": "Les monts Ourals", "map": "russie", "x": 30, "y": 46, "region": "Entre l'Europe et l'Asie", "desc": "Une route de défilés et de forêts, la nuit, sous un orage qui fait tout trembler."},
  "steppe": {"ambiance": "route", "name": "La route de poste", "map": "russie", "x": 36, "y": 52, "region": "La Sibérie occidentale", "desc": "La grande route de Sibérie, ses relais de poste, ses télègues, et la steppe à perte de vue."},
  "ichim": {"ambiance": "village", "name": "Le relais d'Ichim", "map": "russie", "x": 40, "y": 54, "region": "La Sibérie occidentale", "desc": "Une maison de poste au bord de la steppe, des chevaux qu'on se dispute, et une salle où tout le monde regarde."},
  "irtyche": {"ambiance": "eau", "name": "L'Irtyche", "map": "russie", "x": 45, "y": 52, "region": "La Sibérie occidentale", "desc": "Un fleuve large et rapide, en crue, et un bac que le courant emporte."},
  "omsk": {"ambiance": "ville", "name": "Omsk", "map": "russie", "x": 47, "y": 54, "region": "La Sibérie occidentale", "desc": "La ville natale de Michel Strogoff, sa ville haute qui résiste encore, sa ville basse aux mains des Tartares."},
  "baraba": {"ambiance": "champs", "name": "Les marais de la Baraba", "map": "russie", "x": 52, "y": 52, "region": "La Sibérie occidentale", "desc": "Des marécages sans fin, des roseaux plus hauts qu'un cavalier, des moustiques en nuages, et des villages vides."},
  "obi": {"ambiance": "eau", "name": "L'Obi", "map": "russie", "x": 57, "y": 50, "region": "La Sibérie occidentale", "desc": "Un taillis au bord de la route, des Tartares à la lueur des torches, puis un grand fleuve à traverser à la nage."},
  "kolyvan": {"ambiance": "combat", "name": "Kolyvan", "map": "russie", "x": 59, "y": 50, "region": "La Sibérie occidentale", "desc": "Une petite ville au bord de l'Obi, la fusillade aux portes, et le bureau du télégraphe où l'on paie au mot."},
  "camp": {"ambiance": "combat", "name": "Le camp de l'émir", "map": "russie", "x": 61, "y": 48, "region": "Près de Tomsk", "desc": "Une plaine couverte de tentes, de cavaliers et de prisonniers, et la tente de l'émir au milieu."},
  "tomsk": {"ambiance": "ville", "name": "Tomsk", "map": "russie", "x": 63, "y": 46, "region": "La Sibérie occidentale", "desc": "Une grande ville prise par les Tartares, une place préparée pour la fête de l'émir, son trône, ses danses et ses torches."},
  "route": {"ambiance": "route", "name": "La route de l'Est", "map": "russie", "x": 72, "y": 48, "region": "La Sibérie orientale", "desc": "Une route vide, des villages abandonnés, une kibitka tirée par un seul cheval, et le chien qui court derrière."},
  "yenisei": {"ambiance": "eau", "name": "Krasnoiarsk et l'Yeniseï", "map": "russie", "x": 74, "y": 46, "region": "La Sibérie orientale", "desc": "Une ville désertée, et un fleuve immense, coupé d'îles, à passer sans bateau."},
  "angara": {"ambiance": "eau", "name": "Le Baïkal et l'Angara", "map": "russie", "x": 86, "y": 54, "region": "La Sibérie orientale", "desc": "Un lac grand comme une mer, un radeau de fugitifs, puis la rivière rapide qui descend vers Irkoutsk entre deux rives ennemies."},
  "irkoutsk": {"ambiance": "ville", "name": "Irkoutsk", "map": "russie", "x": 88, "y": 50, "region": "La Sibérie orientale", "desc": "La capitale de la Sibérie orientale, assiégée, ses églises, ses remparts de bois, et le palais du grand-duc."},
}

PEOPLE = {
  "michel": {"name": "Michel Strogoff", "aka": ["Michel Strogoff", "Michel", "Nicolas Korpanoff", "Korpanoff"], "face": {"age": "adulte", "hair": "brun", "coif": "court"}, "qui": "Un courrier du czar, né à Omsk, qui voyage sous le nom de Nicolas Korpanoff.", "aspect": {"allure": "grand, vigoureux, trente ans", "visage": "cheveux noirs bouclés, regard droit et calme", "signe": "ne dit jamais qui il est"}},
  "nadia": {"name": "Nadia Fédor", "aka": ["Nadia Fédor", "Nadia"], "face": {"age": "jeune", "hair": "chatain", "coif": "long"}, "qui": "Une jeune fille de Riga qui va seule à Irkoutsk rejoindre son père exilé.", "aspect": {"allure": "seize ou dix-sept ans, grave et décidée", "visage": "beaux yeux, cheveux châtains", "signe": "ne se plaint jamais"}},
  "marfa": {"name": "Marfa Strogoff", "aka": ["Marfa Strogoff", "Marfa"], "face": {"age": "ancien", "hair": "blanc", "coif": "long"}, "qui": "La mère de Michel Strogoff, veuve d'un chasseur, à Omsk.", "aspect": {"allure": "vieille Sibérienne droite et fière", "signe": "a la haine du traître"}},
  "ogareff": {"name": "Ivan Ogareff", "aka": ["Ivan Ogareff", "Ogareff"], "face": {"age": "adulte", "hair": "brun", "coif": "court", "beard": "moustache"}, "qui": "Un ancien colonel russe, cassé de ses grades, passé aux Tartares pour se venger.", "aspect": {"allure": "militaire, grand, robuste, impérieux", "visage": "épaisses moustaches, regard dur", "signe": "rusé, ambitieux, sans pitié"}},
  "sangarre": {"name": "Sangarre", "aka": ["Sangarre"], "face": {"age": "adulte", "hair": "noir", "coif": "long", "skin": "hale"}, "qui": "Une tsigane, à la tête d'une troupe de bohémiens.", "aspect": {"allure": "grande, fière, l'œil ardent", "signe": "dévouée à son maître"}},
  "jolivet": {"name": "Alcide Jolivet", "aka": ["Alcide Jolivet", "Jolivet", "Alcide"], "face": {"age": "adulte", "hair": "brun", "coif": "court", "beard": "moustache"}, "qui": "Le correspondant d'un journal français, qui écrit à « sa cousine ».", "aspect": {"allure": "grand, maigre, gai et bavard", "visage": "brun comme un Provençal", "signe": "un carnet et un bon mot pour tout"}},
  "blount": {"name": "Harry Blount", "aka": ["Harry Blount", "Blount"], "face": {"age": "adulte", "hair": "roux", "coif": "court", "beard": "barbe"}, "qui": "Le correspondant anglais du *Daily-Telegraph*, rival d'Alcide Jolivet.", "aspect": {"allure": "grand, maigre, raide et froid", "visage": "roux, à la mode du Lancashire", "signe": "parle peu, ne cède jamais"}},
  "feofar": {"name": "Féofar-Khan", "aka": ["Féofar-Khan", "Féofar"], "face": {"age": "adulte", "hair": "noir", "coif": "court", "beard": "barbe"}, "qui": "L'émir de Boukhara, qui a lancé ses Tartares sur la Sibérie.", "aspect": {"allure": "chef de guerre d'Asie centrale", "habits": "costume de guerre, aigrette de diamants"}},
  "czar": {"name": "Le czar", "aka": ["czar"], "face": {"age": "mur", "hair": "chatain", "coif": "court", "beard": "barbe"}, "qui": "L'empereur de Russie, qui confie sa lettre à Michel Strogoff.", "aspect": {"allure": "haut de taille, l'air affable", "visage": "front soucieux, physionomie calme"}},
  "kissoff": {"name": "Le général Kissoff", "aka": ["général Kissoff", "Kissoff"], "face": {"age": "mur", "hair": "gris", "coif": "court", "beard": "moustache"}, "qui": "Le chef de la police, qui apporte au czar les dépêches de Sibérie.", "aspect": {"allure": "officier de confiance du czar"}},
  "grandduc": {"name": "Le grand-duc", "aka": ["grand-duc"], "face": {"age": "adulte", "hair": "chatain", "coif": "court", "beard": "barbe"}, "qui": "Le frère du czar, en tournée à Irkoutsk quand la guerre éclate.", "aspect": {"allure": "prince et soldat, ferme"}},
  "pigassof": {"name": "Nicolas Pigassof", "aka": ["Nicolas Pigassof", "Pigassof", "Nicolas"], "face": {"age": "adulte", "hair": "blond", "coif": "court"}, "qui": "Un employé du télégraphe qui rentre chez lui, à Irkoutsk.", "aspect": {"allure": "gros garçon placide et bon", "signe": "ne se presse jamais"}},
  "serko": {"name": "Serko", "aka": ["Serko"], "face": {}, "qui": "Le chien de Nicolas Pigassof.", "aspect": {"allure": "chien fidèle qui suit la kibitka"}},
  "wassili": {"name": "Wassili Fédor", "aka": ["Wassili Fédor", "Wassili"], "face": {"age": "mur", "hair": "gris", "coif": "court", "beard": "barbe"}, "qui": "Un médecin de Riga exilé à Irkoutsk, le père de Nadia.", "aspect": {"allure": "exilé politique, digne et courageux"}},
}
NO_AUTO = ["pigassof", "nadia"]
MEET = {"II6_4": ["pigassof"], "I8_4": ["nadia"]}

WORDS = {
  "verste|verstes": "Mesure russe de distance, un peu plus d'un kilomètre.",
  "tarentass": "Une voiture de voyage russe à quatre roues, posée sur de longues perches qui servent de ressorts.",
  "télègue|télègues": "Une petite charrette russe à quatre roues, sans ressorts, tirée par des chevaux de poste.",
  "kibitka|kibitkas": "Une voiture de voyage couverte, à deux ou quatre roues, en usage en Sibérie.",
  "iemschik|iemschiks": "Le postillon russe qui conduit les chevaux d'un relais à l'autre.",
  "podaroshna": "Le permis de voyage qui donne droit aux chevaux de la poste impériale.",
  "moujik|moujiks": "Un paysan russe.",
  "knout": "Un fouet de lanières de cuir, instrument de châtiment en Russie et chez les Tartares.",
  "tsigane|tsiganes": "Peuple voyageur venu de l'Inde il y a des siècles ; Verne dit aussi « bohémiens ».",
  "Tartare|Tartares": "Au temps de Verne, le nom qu'on donne aux peuples turcs et mongols d'Asie centrale.",
  "émir": "Un prince musulman ; ici, le souverain de Boukhara.",
  "khan": "Un titre de chef chez les peuples turcs et mongols.",
  "Boukhara": "Un émirat d'Asie centrale, dans l'actuel Ouzbékistan, autour de la ville du même nom.",
  "Kirghis": "Un peuple nomade des steppes d'Asie centrale.",
  "Usbeck|Usbecks": "Les Ouzbeks, un peuple d'Asie centrale, l'un des piliers de l'armée de l'émir.",
  "Cosaque|Cosaques": "Des cavaliers russes, soldats et colons des frontières.",
  "Livonienne": "Une femme de Livonie, la région de Riga, sur la Baltique.",
  "steam-boat": "Mot anglais : un bateau à vapeur.",
  "kopek|kopeks": "La petite monnaie russe ; il en faut cent pour faire un rouble.",
  "rouble|roubles": "La monnaie russe.",
  "deh-baschi": "Chez les Tartares, un officier qui commande dix hommes.",
  "koumys": "Une boisson de lait de jument fermenté, chez les nomades d'Asie.",
  "naphte": "Le pétrole brut, qui brûle à la surface de l'eau.",
  "taillis": "Un bois de jeunes arbres serrés.",
  "relais": "Une maison de poste où l'on change de chevaux.",
}

PAGES = {
  "I1_1": ["Une nouvelle dépêche", "moscou"], "I1_2": ["Le général Kissoff", "moscou"], "I1_3": ["Deux correspondants", "moscou"], "I1_4": ["Le czar quitte la fête", "moscou"],
  "I2_1": ["Le conseil", "moscou"], "I2_2": ["Ivan Ogareff", "moscou"], "I2_3": ["Le grand-duc isolé", "moscou"], "I2_4": ["Féofar-Khan", "moscou"],
  "I3_1": ["Un courrier pour Irkoutsk", "moscou"], "I3_2": ["Le fils de Marfa", "moscou"], "I3_3": ["C'est un homme", "moscou"],
  "I4_1": ["Nicolas Korpanoff", "moscou"], "I4_2": ["Le train de Nijni-Novgorod", "moscou"], "I4_3": ["Les marchands du train", "moscou"], "I4_4": ["Le voyageur qui écoute", "moscou"], "I4_5": ["Le traître", "moscou"], "I4_6": ["La jeune Livonienne", "nijni"],
  "I5_1": ["Nijni-Novgorod", "nijni"], "I5_2": ["Encore un espion !", "nijni"], "I5_3": ["Sangarre", "nijni"], "I5_4": ["La foire", "nijni"], "I5_5": ["L'arrêté du gouverneur", "nijni"],
  "I6_1": ["Défense de partir", "nijni"], "I6_2": ["Où est la Livonienne ?", "nijni"], "I6_3": ["La maison de police", "nijni"],
  "I7_1": ["Le *Caucase*", "volga"], "I7_2": ["Les passagers de l'avant", "volga"], "I7_3": ["Ennemis !", "volga"], "I7_4": ["Le dîner des correspondants", "volga"],
  "I8_1": ["Kazan", "volga"], "I8_2": ["Les tsiganes de la nuit", "volga"], "I8_3": ["Les deux routes", "volga"], "I8_4": ["Nadia Fédor", "volga"],
  "I9_1": ["Perm", "steppe"], "I9_2": ["Le *tarentass*", "steppe"], "I9_3": ["L'iemschik", "steppe"], "I9_4": ["Demain à Ekaterinbourg", "steppe"],
  "I10_1": ["Les monts Ourals", "ourals"], "I10_2": ["L'orage", "ourals"], "I10_3": ["La foudre", "ourals"], "I10_4": ["Des cris", "ourals"],
  "I11_1": ["Une moitié de télègue", "ourals"], "I11_2": ["Une offre obligeante", "ourals"], "I11_3": ["Les nouvelles des correspondants", "ourals"], "I11_4": ["Un vieux tsigane", "ourals"], "I11_5": ["L'ours", "ourals"],
  "I12_1": ["Ekaterinbourg", "steppe"], "I12_2": ["Les pensées de Nadia", "steppe"], "I12_3": ["La sœur de Nicolas Korpanoff", "steppe"], "I12_4": ["Vers Ichim", "steppe"], "I12_5": ["Le voyageur de la berline", "ichim"],
  "I13_1": ["Un secret", "steppe"], "I13_2": ["Le passage de l'Ichim", "steppe"], "I13_3": ["La vieille Marfa", "irtyche"], "I13_4": ["Le bac", "irtyche"],
  "I14_1": ["Omsk", "omsk"], "I14_2": ["La cabane du moujik", "omsk"], "I14_3": ["Traverser Omsk", "omsk"], "I14_4": ["Le colonel", "omsk"], "I14_5": ["Mon fils !", "omsk"],
  "I15_1": ["Les ordres d'Ivan Ogareff", "baraba"], "I15_2": ["La Baraba", "baraba"], "I15_3": ["Les moustiques", "baraba"], "I15_4": ["Elamsk", "baraba"], "I15_5": ["Le vaillant cheval", "baraba"],
  "I16_1": ["Les Tartares devant lui", "steppe"], "I16_2": ["La nuit dans la steppe", "obi"], "I16_3": ["Le détachement", "obi"], "I16_4": ["Sa mère", "obi"], "I16_5": ["L'Obi", "obi"],
  "I17_1": ["Avant eux à Kolyvan", "kolyvan"], "I17_2": ["La fusillade", "kolyvan"], "I17_3": ["Le bureau du télégraphe", "kolyvan"], "I17_4": ["Versets et chansons", "kolyvan"],
  "II1_1": ["La plaine de l'émir", "camp"], "II1_2": ["L'armée tartare", "camp"], "II1_3": ["Les prisonniers", "camp"], "II1_4": ["Harry Blount blessé", "camp"], "II1_5": ["Une colonne arrive", "camp"],
  "II2_1": ["Ivan Ogareff au camp", "camp"], "II2_2": ["Sangarre", "camp"], "II2_3": ["Takhsir", "camp"], "II2_4": ["Les deux correspondants", "camp"], "II2_5": ["Un grave péril", "camp"], "II2_6": ["Nadia prisonnière", "camp"], "II2_7": ["La vieille femme et la jeune fille", "camp"],
  "II3_1": ["Marfa et Nadia", "camp"], "II3_2": ["Pourquoi ne pas fuir ?", "camp"], "II3_3": ["Sangarre a vu", "camp"], "II3_4": ["La lettre", "camp"], "II3_5": ["Le knout", "camp"],
  "II4_1": ["Tomsk", "tomsk"], "II4_2": ["Le palais de l'émir", "tomsk"], "II4_3": ["Féofar-Khan", "tomsk"], "II4_4": ["La fête commence", "tomsk"],
  "II5_1": ["Devant le trône", "tomsk"], "II5_2": ["Une voix grave", "tomsk"], "II5_3": ["Les torches", "tomsk"], "II5_4": ["Le jugement", "tomsk"],
  "II6_1": ["Quitter Tomsk", "route"], "II6_2": ["Nadia le regarde", "route"], "II6_3": ["Manges-tu, Nadia ?", "route"], "II6_4": ["Nicolas Pigassof", "route"], "II6_5": ["La kibitka", "route"],
  "II7_1": ["Krasnoiarsk", "yenisei"], "II7_2": ["La ville vide", "yenisei"], "II7_3": ["Attendons à demain", "yenisei"], "II7_4": ["Un bateau ?", "yenisei"], "II7_5": ["Le passage de l'Yeniseï", "yenisei"],
  "II8_1": ["La route libre", "route"], "II8_2": ["Un lièvre", "route"], "II8_3": ["Les maisons vides", "route"], "II8_4": ["Nijni-Oudinsk", "route"], "II8_5": ["Seuls sur la route", "route"],
  "II9_1": ["Libres encore une fois", "route"], "II9_2": ["Plus une bête de somme", "route"], "II9_3": ["Pauvre Michel", "route"], "II9_4": ["Le lac", "route"],
  "II10_1": ["Le Baïkal", "angara"], "II10_2": ["Le radeau", "angara"], "II10_3": ["Les moines", "angara"], "II10_4": ["Les premiers glaçons", "angara"], "II10_5": ["Livenitchnaia", "angara"],
  "II11_1": ["L'obscurité", "angara"], "II11_2": ["Le naphte", "angara"], "II11_3": ["Les incendies", "angara"], "II11_4": ["Les Tartares dans l'ombre", "angara"], "II11_5": ["Dieu contre nous ?", "angara"],
  "II12_1": ["Irkoutsk", "irkoutsk"], "II12_2": ["La défense", "irkoutsk"], "II12_3": ["La trahison", "irkoutsk"], "II12_4": ["Une supplique", "irkoutsk"],
  "II13_1": ["Un courrier du czar", "irkoutsk"], "II13_2": ["Le récit du courrier", "irkoutsk"], "II13_3": ["Comment as-tu pu t'échapper ?", "irkoutsk"], "II13_4": ["Le plan de la nuit", "irkoutsk"],
  "II14_1": ["Ne tenir qu'à un fil", "irkoutsk"], "II14_2": ["Le soir du 5 octobre", "irkoutsk"], "II14_3": ["Le fleuve en feu", "irkoutsk"], "II14_4": ["La porte de Bolchaïa", "irkoutsk"], "II14_5": ["Face au traître", "irkoutsk"],
  "II15_1": ["Ce que les larmes ont fait", "irkoutsk"], "II15_2": ["L'histoire de ses épreuves", "irkoutsk"],
}
