# Fiche de « Georges » (id georges) pour livre.py (texte de Dumas, 1843).
# Texte : gut.py sur Gutenberg n° 18271 (miroir orkeilius/gutenberg_fr_mirror), entre fiches/georges_texte.py pre et post.
HEAD = """// « Georges », Alexandre Dumas, 1843 : un livre à lire, sans choix (lecture: true). Texte de Dumas (avec
// Félicien Mallefille), domaine public, d'après l'édition numérique du projet Gutenberg. Les titres des chapitres sont
// de Dumas ; les titres des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude."""

BASE = {
  "id": "georges",
  "title": "Georges",
  "subtitle": "Un roman à lire · Alexandre Dumas, 1843",
  "summary": "L'île de France, au temps des planteurs et des esclaves. Enfant, Georges Munier a vu son père, un homme de couleur riche et brave, chassé des rangs par les blancs. Quatorze ans plus tard, il revient d'Europe, transformé, décidé à affronter le préjugé qui l'a humilié. Une jeune créole, un frère qui court les mers, un homme d'Anjouan qui attend son heure : la partie va se jouer entre eux tous.",
  "tags": ["historique", "aventure", "mer"],
  "author": "Alexandre Dumas",
  "lecture": True,
  "age": 13,
  "skin": "parchemin",
  "cover": {"motif": "vague", "color": "#2a4a3a"},
  "glossary": None,
  "voice": "troisième personne, passé",
  "version": 1,
  "notice": {
    "title": "Un livre de 1843, sur l'esclavage",
    "reminder": "Ce chapitre montre des violences et des morts, avec le regard et les mots de 1843.",
    "text": [
      "*Georges* a paru en 1843. Dumas l'a écrit avec Félicien Mallefille. Le texte est celui de Dumas, sans retouche, tel que l'a numérisé le projet Gutenberg.",
      "C'est un roman contre le préjugé de couleur, écrit par un homme dont la grand-mère avait été esclave à Saint-Domingue. Il se passe à l'île de France, l'actuelle île Maurice, devenue anglaise en 1810, où l'esclavage n'est aboli qu'en 1835.",
      "Le livre emploie les mots de son temps, que l'on ne dit plus : « nègre », « mulâtre ». Le narrateur et ses personnages prêtent aussi aux uns et aux autres des traits de « race » que l'on sait aujourd'hui faux et blessants. On les a laissés tels quels, pour ne pas trahir le texte ; le livre lui-même montre ce qu'ils ont de cruel.",
      "On y voit l'esclavage, la traite, des châtiments, une révolte et sa répression, une exécution.",
    ],
  },
  "intro": [],
  "world": {"start": {"place": "pieterboot", "hour": 17, "gold": 0, "food": 0, "items": [], "kits": {"guerrier": [], "rodeur": [], "voleur": [], "mage": [], "pretre": [], "barde": []}}},
}

def roman(n):
    out = ''
    for v, r in ((100, 'C'), (90, 'XC'), (50, 'L'), (40, 'XL'), (10, 'X'), (9, 'IX'), (5, 'V'), (4, 'IV'), (1, 'I')):
        while n >= v: out += r; n -= v
    return out

TITRES = [
  "L'île de France",
  "Lions et léopards",
  "Trois enfants",
  "Quatorze ans après",
  "L'enfant prodigue",
  "Transfiguration",
  "La berloque",
  "La toilette du nègre marron",
  "La rose de la rivière noire",
  "Le bain",
  "Le prix des nègres",
  "Le bal",
  "Le négrier",
  "Philosophie négrière",
  "La boîte de Pandore",
  "La demande en mariage",
  "Les courses",
  "Laïza",
  "Le Yamsé",
  "Le rendez-vous",
  "Le refus",
  "La révolte",
  "Un cœur de père",
  "Les grands bois",
  "Juge et bourreau",
  "La chasse aux nègres",
  "La répétition",
  "L'église du Saint-Sauveur",
  "Le « Leycester »",
  "Le combat",
]


R = [
  "Le narrateur emmène son lecteur, en rêve, jusqu'à l'île de France, et lui montre l'île du haut du Pieterboot : Port-Louis, ses montagnes, ses rivières, ses quartiers. En 1810, l'île est française et attend l'Anglais ; le 23 août, la canonnade éclate du côté de Grand-Port.",
  "Le combat naval de Grand-Port, raconté comme un drame : les frégates anglaises arborent de fausses couleurs, le capitaine Duperré force la passe, le général Decaen accourt avec les colons. Les Anglais perdent leurs navires ; parmi leurs blessés, un jeune officier, sir Williams Murrey, survit à sa blessure.",
  "Trois mois plus tard, les Anglais débarquent en force. Dans la garde nationale, les blancs chassent de leurs rangs Pierre Munier, un riche planteur de couleur ; il se bat à part avec ses esclaves et prend un drapeau anglais. Le petit Henri de Malmédie veut s'emparer du trophée, que garde Georges, douze ans ; l'enfant gâté le blesse au front d'un coup de sabre. L'île capitule, et Pierre Munier envoie ses deux fils en France.",
  "Quatorze ans après, le Leycester entre en rade de Port-Louis. Il porte le nouveau gouverneur, lord Williams Murrey, qui a repris en pleine tempête le commandement du navire, et un jeune homme brun, décoré, qui a vingt-cinq ans et en paraît trente. Les deux hommes se sont estimés pendant trois mois sans rien savoir l'un de l'autre.",
  "À terre, le jeune étranger croise MM. de Malmédie père et fils, et murmure entre ses dents. Devant une porte, il sert d'interprète entre une belle jeune fille et un marchand chinois, Miko-Miko, à qui il parle dans sa langue. Puis il monte vers un vieillard qui guette la mer du haut de la montagne de la Découverte : c'est Pierre Munier, et l'étranger est Georges.",
  "Ce que Georges a fait de quatorze ans : un enfant chétif qui se forge un corps, un esprit et une volonté pour combattre le préjugé de couleur. Collège à Paris, une fortune gagnée au jeu en une soirée, un duel où il laisse tirer l'adversaire sans riposter, Londres, l'Égypte d'Ibrahim-Pacha, l'Espagne et la croix. À Moka, chez son père, il promet aux trois cents esclaves de la plantation des cases, des jardins et une justice.",
  "Le samedi soir, sur l'habitation de M. de Malmédie à la rivière Noire, les esclaves veillent autour du feu. Antonio le Malais, laid et rusé, chante, raconte et se fait donner la banane du pauvre Cambeba. Nazim, un jeune homme d'Anjouan, le traite de chien devant tous ; Antonio ravale l'insulte et promet de se venger. Laïza, le frère de Nazim, quitte la veillée avec lui.",
  "Dans les bois, Laïza prépare la fuite de Nazim, qui veut regagner Anjouan et leur père par la mer : un canot creusé dans un tronc d'arbre, des vivres, et de l'huile de coco pour glisser entre les mains de ceux qui voudraient le saisir. Laïza reste, car il aime en silence une jeune fille blanche qu'on appelle la rose de la rivière Noire. Antonio les a écoutés et court vers Port-Louis.",
  "La jeune fille à l'éventail est Sara de Malmédie, nièce et pupille de M. de Malmédie, promise à son cousin Henri. Elle parle à sa gouvernante anglaise de l'étranger qui l'a aidée ; Henri en prend ombrage. Une invitation arrive : dîner et bal chez le gouverneur, le lundi suivant. En attendant, Sara part pour deux jours à la campagne.",
  "Sara se rend à l'habitation de la rivière Noire. Orpheline et riche, elle a été élevée par une gouvernante craintive qui tremble pour elle. Elle se baigne dans la baie ; un requin franchit la barre et fonce sur elle. Un esclave se jette à la nage pour lui couper la route, et deux coups de fusil partent du rivage : c'est le jeune étranger de Port-Louis.",
  "À table, les chasseurs s'attribuent la gloire de la journée. Le commandeur ramène Nazim, repris et blessé ; Laïza, le nageur du matin, demande la grâce de son frère, que M. de Malmédie refuse par principe. L'étranger, qui a tout entendu, offre mille piastres pour les deux hommes, les obtient, et les rend libres sur-le-champ.",
  "Au dîner du gouverneur, on annonce M. Georges Munier, le mulâtre, que tout le monde tient à distance et qui étonne tout le monde. Henri reproche à Sara d'y avoir pris plaisir ; elle refuse de danser avec lui, puis refuse aussi Georges pour ne pas humilier son cousin. Georges, qui a compris, lui parle d'un rêve, et repart pour Moka.",
  "Pierre Munier veut acheter des bras pour la plantation, et il a répondu de nuit aux signaux d'un navire négrier. Sara, de son côté, s'aperçoit qu'elle n'aime pas son cousin. Georges demande à Miko-Miko le plan intérieur de la maison Malmédie. Bientôt, le capitaine du négrier se présente à Moka ; il dévisage longtemps le père et le fils, puis se jette dans leurs bras : c'est Jacques.",
  "L'histoire de Jacques : parti enfant sur un corsaire, élève du capitaine Bertrand, poursuivi par le Leycester et sauvé par une ruse de nuit, il hérite de la Calypso quand son capitaine meurt d'une morsure de serpent sur la côte d'Afrique. Depuis, il fait la traite avec une bonne humeur sans scrupules et se bat contre les croiseurs qui la pourchassent.",
  "Georges retrouve un frère marchand d'hommes et l'aime quand même. Miko-Miko lui rapporte le plan de la maison, puis porte à Sara un coffret qui cache une lettre. Le soir, un ouragan s'abat sur l'île ; Jacques regagne son navire, et Georges passe par les toits jusqu'au pavillon de Sara, qui lui avoue son amour. Il disparaît au moment où l'oncle et le cousin entrent.",
  "Le port compte ses épaves, et la ville prépare la fête musulmane du Yamsé et des courses offertes par le gouverneur. Chez les Malmédie, en présence de lord Murrey, Georges demande la main de Sara ; elle déclare devant tous qu'elle l'aime. M. de Malmédie refuse. Le gouverneur, ému, regarde partir un homme qui, dit-il, va droit à sa perte.",
  "Premier jour des fêtes : les Lascars quêtent sur le port, tout Port-Louis se presse au champ de Mars. Miko-Miko gagne la course au cochon en gardant la queue de la bête, Antonio la course en sac pendant que Bijou et Télémaque se mordent. À la grande course, Henri de Malmédie monte Gester ; un cheval inconnu, Antrim, le rattrape, et son cavalier, Georges, lui cingle le visage d'un coup de cravache devant toute la colonie.",
  "Laïza vient à Moka : les esclaves de l'île sont bien plus nombreux que les blancs, ils sont décidés à se soulever, et il leur faut un chef. Jacques arrive à son tour : le Leycester croise devant l'île pour le bloquer, et des jeunes gens ont promis à Henri d'attendre Georges à huit ou dix sur la route. Jacques supplie son frère de partir avec lui ; Georges refuse, et fait dire aux révoltés qu'ils ont un chef.",
  "Le second jour du Yamsé, processions, combats simulés et feux d'artifice sur la plaine Verte. La fête finie, des milliers d'esclaves se retrouvent en secret au bord de la rivière. Antonio harangue la foule avec une fable de singes et de serpents. Au point du jour, Laïza frappe dans ses mains, et un cavalier sort de la forêt : c'est Georges, qui accepte de les mener.",
  "Deux jours passent sans trahison apparente. Le jour fixé, deux lettres arrivent à Moka : l'une de Sara, heureuse et pleine d'espoir, l'autre du gouverneur, qui convoque Georges pour lui annoncer de bonnes nouvelles. Malgré le danger, Georges y va, et laisse son père en larmes.",
  "Chez lord Murrey, M. de Malmédie accorde enfin la main de Sara. Georges s'incline et ne répond pas : c'est trop tard. Sara suit son oncle, sans comprendre. Le gouverneur révèle alors qu'il sait tout du soulèvement, et fait conduire Georges à la prison de la Police, avec des égards.",
  "Georges descelle un barreau. La nuit, la révolte entre dans Port-Louis, mais le gouverneur a fait illuminer les rues et défoncer des tonneaux d'arack et de rhum : la plupart des insurgés s'arrêtent pour boire. Laïza et sa troupe se battent pourtant jusque devant la prison. Georges le rejoint, ordonne la retraite vers les bois, et tombe, frappé d'une balle tirée d'un buisson. Laïza a reconnu le tireur : Antonio le Malais.",
  "À Moka, Pierre Munier attend en tremblant, puis découvre que tous ses esclaves sont partis armés. On lui ramène son fils blessé, que Laïza a pansé. Le vieillard, qui a toute sa vie plié devant les blancs, abandonne sans hésiter l'habitation bâtie par trois générations pour suivre le brancard dans les bois.",
  "La petite troupe s'enfonce dans les grands bois, parmi les fougères géantes et les lianes. Un esclave fugitif lui ouvre l'entrée d'une caverne cachée, que l'on fortifie ; Pierre Munier y prend un poste, et l'on attend la nuit.",
  "La nuit, Laïza fait sa ronde avec Pierre Munier : les Anglais suivent leurs traces avec un chien. Un homme rampe autour de la retraite ; Laïza le saisit à la gorge : c'est Antonio. Devant les révoltés qui répondent d'une seule voix, il le juge pour ses trahisons, puis l'exécute. Il va ensuite au combat.",
  "Les soldats attaquent la caverne ; Pierre Munier fait sauter la mine qui en ferme l'entrée. Laïza obtient de lui qu'il fuie seul vers le sud, pour entraîner le chien sur sa piste, et emporte Georges. Le sang du blessé guide une autre patrouille : Laïza court avec Georges dans les bras sous les balles, jusqu'au bout de ses forces. Georges arrache ses pansements plutôt que de se rendre.",
  "Georges se réveille en prison, soigné par le chirurgien du régiment, et apprend comment s'est achevée sa fuite. Il prend tout sur lui, sans jamais nommer son père ni Sara, et se laisse juger avec une politesse glaciale. Il rédige son testament, sans nouvelles de Sara, reçoit la visite de l'exécuteur, lit Paul et Virginie la dernière nuit, et descend à six heures.",
  "Georges a demandé à marcher à pied. Sur les marches de l'église du Saint-Sauveur l'attend une femme en deuil : c'est Sara, qui, devant la foule, lui demande de la prendre pour épouse. Pendant la messe, Miko-Miko lui glisse un billet : « Nous sommes là. Tiens-toi prêt. »",
  "Le soir, la Calypso file vers l'est. Une frégate paraît au loin ; Jacques la reconnaît et explique à son père pourquoi sa corvette doit fuir plutôt que se battre au canon. On soupe en famille, puis Jacques règle sa route pour la nuit et s'endort tranquillement.",
  "Au matin, le Leycester est en chasse et gagne sur la Calypso. Jacques fait déjeuner ses hôtes, puis bat le branle-bas ; Sara descend sous le pont, Georges reste sur le pont, le sabre à la main. Les deux navires échangent leurs bordées, puis les pirates de Jacques se lancent à l'abordage.",
]

def titre(i, t):
    return "Chapitre " + roman(i + 1) + " · " + t
CHAPTERS = [{"title": titre(i, t), "text": r} for i, (t, r) in enumerate(zip(TITRES, R))]
for i in (21, 24, 25, 29): CHAPTERS[i]["notice"] = True

PLACES = {
  "pieterboot": {"ambiance": "montagne", "name": "Le Pieterboot", "map": "maurice", "x": 52, "y": 42, "region": "L'île de France, au centre", "desc": "Un pic d'où l'on voit toute l'île : les montagnes, les rivières, les plaines de cannes, la mer de tous les côtés."},
  "grandport": {"ambiance": "port", "name": "Grand-Port", "map": "maurice", "x": 80, "y": 78, "region": "L'île de France, au sud-est", "desc": "Une rade fermée de récifs devant Mahebourg ; en août 1810, Français et Anglais s'y canonnent à bout portant."},
  "portlouis": {"ambiance": "ville", "name": "Port-Louis", "map": "maurice", "x": 30, "y": 36, "region": "L'île de France, au nord-ouest", "desc": "La capitale aux maisons de bois, ses deux ruisseaux, son camp malabar et sa population venue de tous les pays du monde."},
  "rade": {"ambiance": "port", "name": "La rade de Port-Louis", "map": "maurice", "x": 24, "y": 32, "region": "Port-Louis, devant l'île aux Tonneliers", "desc": "Le port où toute la ville accourt quand on signale un navire d'Europe ; des forts, des quais et des mâts serrés."},
  "decouverte": {"ambiance": "montagne", "name": "La montagne de la Découverte", "map": "maurice", "x": 36, "y": 30, "region": "Au-dessus de Port-Louis", "desc": "Le sommet aux mâts de signaux d'où l'on guette les voiles au large ; un vieillard y monte à chaque navire."},
  "moka": {"ambiance": "champs", "name": "L'habitation de Moka", "map": "maurice", "x": 48, "y": 48, "region": "L'île de France, quartier de Moka", "desc": "La belle plantation de Pierre Munier, bâtie par trois générations, au pied des montagnes."},
  "malmedie": {"ambiance": "ville", "name": "La maison de M. de Malmédie", "map": "maurice", "x": 32, "y": 40, "region": "Port-Louis, près du théâtre", "desc": "Une grande maison de ville, sa cour plantée de manguiers et de lilas de Chine, et le pavillon où Sara passe ses journées."},
  "gouvernement": {"ambiance": "chateau", "name": "Le palais du Gouvernement", "map": "maurice", "x": 28, "y": 38, "region": "Port-Louis", "desc": "La résidence du gouverneur anglais, ses salons illuminés, ses dîners et ses bals."},
  "habnoire": {"ambiance": "champs", "name": "L'habitation de la rivière Noire", "map": "maurice", "x": 18, "y": 64, "region": "L'île de France, à l'ouest", "desc": "La propriété des Malmédie au bord de la grande rivière Noire, ses champs, ses cases et son hangar où l'on veille le samedi."},
  "baie": {"ambiance": "eau", "name": "La baie de la rivière Noire", "map": "maurice", "x": 12, "y": 68, "region": "L'île de France, à l'ouest", "desc": "Une anse claire entre les rochers, fermée par une barre ; les requins la franchissent avec la marée."},
  "troismamelles": {"ambiance": "foret", "name": "Les bois des Trois-Mamelles", "map": "maurice", "x": 26, "y": 58, "region": "Au pied des Trois-Mamelles", "desc": "Des massifs de bambous et de grands arbres où l'on se cache la nuit sous la Croix du Sud."},
  "champdemars": {"ambiance": "ville", "name": "Le champ de Mars", "map": "maurice", "x": 34, "y": 38, "region": "Port-Louis", "desc": "La grande pelouse au pied des montagnes où l'on court les chevaux, les cochons et les sacs, sous les yeux de toute la colonie."},
  "plaineverte": {"ambiance": "nuit", "name": "La plaine Verte", "map": "maurice", "x": 38, "y": 34, "region": "Port-Louis, près du camp malabar", "desc": "Le lieu des processions du Yamsé, des danses et des feux d'artifice, au bord d'une rivière."},
  "police": {"ambiance": "ville", "name": "La Police", "map": "maurice", "x": 30, "y": 40, "region": "Port-Louis, rue du Gouvernement", "desc": "La prison de Port-Louis, un grand bâtiment aux fenêtres grillées, gardé par des sentinelles anglaises."},
  "grandsbois": {"ambiance": "foret", "name": "Les grands bois", "map": "maurice", "x": 62, "y": 62, "region": "L'île de France, vers le piton du Milieu", "desc": "Une forêt épaisse de fougères géantes, de takamakas et de lianes, où les fugitifs se cachent depuis toujours."},
  "caverne": {"ambiance": "souterrain", "name": "La caverne des fugitifs", "map": "maurice", "x": 66, "y": 66, "region": "Au cœur des grands bois", "desc": "Une grotte dont l'entrée se cache derrière un éboulis, que l'on peut fermer, fortifier, et miner."},
  "eglise": {"ambiance": "temple", "name": "L'église du Saint-Sauveur", "map": "maurice", "x": 33, "y": 42, "region": "Port-Louis", "desc": "Une petite église sur le chemin de l'échafaud, avec quatre marches et un vieux prêtre sous le porche."},
  "calypso": {"ambiance": "mer", "name": "La Calypso", "map": "maurice", "x": 8, "y": 20, "region": "En mer, au large de l'île", "desc": "Une corvette fine et rapide, pont lavé, cuivres brillants et canons obusiers, que son capitaine mène comme un cheval de race."},
  "afrique": {"ambiance": "foret", "name": "La côte d'Afrique", "map": "monde", "x": 52, "y": 60, "region": "Afrique", "desc": "Les rivages où les négriers vont charger leur cargaison humaine, et où les serpents tuent en quelques minutes."},
  "paris": {"ambiance": "ville", "name": "Paris", "map": "monde", "x": 48, "y": 24, "region": "France", "desc": "Le collège, les salons, le jeu et les salles de tir où un jeune homme de couleur apprend à se faire respecter."},
  "orient": {"ambiance": "route", "name": "L'Orient et l'Espagne", "map": "monde", "x": 62, "y": 34, "region": "De la Grèce à l'Égypte, puis Cadix", "desc": "Les voyages d'un jeune homme qui cherche des combats : Grèce, Turquie, Syrie, Égypte, puis le fort du Trocadéro."},
}


PEOPLE = {
  "georges": {"name": "Georges Munier", "aka": ["Georges", "Georges Munier"], "face": {"age": "jeune", "hair": "noir", "coif": "long", "skin": "dore", "beard": "moustache"}, "qui": "Le fils cadet de Pierre Munier, un homme de couleur élevé en Europe, qui a juré de combattre le préjugé.", "aspect": {"allure": "vingt-cinq ans, grave, élégant, décoré", "signe": "une fine cicatrice au front"}},
  "pierre": {"name": "Pierre Munier", "aka": ["Pierre Munier"], "face": {"age": "ancien", "hair": "blanc", "coif": "court", "skin": "dore"}, "qui": "Un riche planteur de couleur du quartier de Moka, père de Jacques et de Georges, brave au feu et humble devant les blancs.", "aspect": {"allure": "grand, maigre, une carabine damasquinée"}},
  "jacques": {"name": "Jacques Munier", "aka": ["Jacques"], "face": {"age": "adulte", "hair": "noir", "coif": "court", "skin": "cuivre"}, "qui": "Le fils aîné de Pierre Munier, parti enfant sur un corsaire, aujourd'hui capitaine de la Calypso.", "aspect": {"allure": "jovial, hâlé, toile bleue et sabre courbe"}},
  "sara": {"name": "Sara de Malmédie", "aka": ["Sara"], "face": {"age": "jeune", "hair": "noir", "coif": "long", "skin": "dore"}, "qui": "La nièce et pupille de M. de Malmédie, une jeune créole riche et orpheline, promise à son cousin Henri.", "aspect": {"allure": "vive, rieuse, nageuse et cavalière", "signe": "un éventail chinois"}},
  "henri": {"name": "Henri de Malmédie", "aka": ["Henri"], "face": {"age": "jeune", "hair": "chatain", "coif": "court", "skin": "clair"}, "qui": "Le fils de M. de Malmédie, enfant gâté devenu un jeune homme plein de morgue, fiancé à sa cousine Sara.", "aspect": {"allure": "élégant, emporté, une badine à la main"}},
  "malmedie": {"name": "M. de Malmédie", "aka": ["Malmédie"], "face": {"age": "mur", "hair": "gris", "coif": "degarni", "skin": "clair"}, "qui": "Un riche colon blanc de Port-Louis, chef de bataillon de la garde nationale en 1810, père d'Henri et tuteur de Sara.", "aspect": {"allure": "important, satisfait de lui-même"}},
  "murrey": {"name": "Lord Williams Murrey", "aka": ["Murrey", "lord Murrey", "Williams Murrey"], "face": {"age": "adulte", "hair": "blond", "coif": "court", "skin": "clair"}, "qui": "Un officier de marine anglais devenu diplomate, nouveau gouverneur de l'île de France.", "aspect": {"allure": "quarante ans, en paraît trente", "signe": "un ancien commodore"}},
  "laiza": {"name": "Laïza", "aka": ["Laïza"], "face": {"age": "adulte", "hair": "noir", "coif": "rase", "skin": "ebene"}, "qui": "Un homme d'Anjouan, fils de chef, réduit en esclavage sur l'habitation Malmédie.", "aspect": {"allure": "une force d'Hercule, un calme de roi", "signe": "le lion d'Anjouan"}},
  "nazim": {"name": "Nazim", "aka": ["Nazim"], "face": {"age": "jeune", "hair": "noir", "coif": "court", "skin": "ebene"}, "qui": "Le jeune frère de Laïza, esclave comme lui, qui ne rêve que de revoir Anjouan.", "aspect": {"allure": "beau, fier, rapide à la course", "signe": "le cerf d'Anjouan"}},
  "antonio": {"name": "Antonio le Malais", "aka": ["Antonio"], "face": {"age": "adulte", "hair": "noir", "coif": "court", "skin": "cuivre"}, "qui": "Un Malais né à Tingoram, conteur, chanteur et intrigant, qui ne pardonne pas une insulte.", "aspect": {"allure": "gros torse, bras démesurés, longues jambes"}},
  "mikomiko": {"name": "Miko-Miko", "aka": ["Miko-Miko"], "face": {"age": "adulte", "hair": "noir", "coif": "tresses", "skin": "beige"}, "qui": "Un marchand chinois de Port-Louis qui va partout avec sa perche de bambou et ses deux paniers.", "aspect": {"allure": "muet par force, vif, dévoué", "signe": "une perche à deux paniers"}},
  "telemaque": {"name": "Télémaque", "aka": ["Télémaque"], "face": {"age": "mur", "hair": "gris", "coif": "court", "skin": "ebene"}, "qui": "Le vieux serviteur de Pierre Munier, qui a veillé sur ses fils enfants.", "aspect": {"allure": "fidèle, inquiet, toujours aux aguets"}},
  "bijou": {"name": "Bijou", "aka": ["Bijou"], "face": {"age": "adulte", "hair": "noir", "coif": "court", "skin": "ebene"}, "qui": "Le serviteur d'Henri de Malmédie, ennemi juré de Télémaque.", "aspect": {"allure": "attaché à ses maîtres, querelleur"}},
  "henriette": {"name": "Ma mie Henriette", "aka": ["Henriette", "ma mie Henriette"], "face": {"age": "mur", "hair": "chatain", "coif": "chignon", "skin": "clair"}, "qui": "La gouvernante anglaise de Sara, venue d'outre-mer pour l'élever.", "aspect": {"allure": "sèche, pincée, peureuse et tendre"}},
  "cambeba": {"name": "Cambeba", "aka": ["Cambeba"], "face": {"age": "adulte", "hair": "noir", "coif": "court", "skin": "ebene"}, "qui": "Un esclave de l'habitation Malmédie, timide, dont Antonio convoite la banane.", "aspect": {"allure": "craintif, penché sur son feu"}},
  "duperre": {"name": "Le capitaine Duperré", "aka": ["Duperré"], "face": {"age": "adulte", "hair": "brun", "coif": "court", "skin": "hale"}, "qui": "Le capitaine de vaisseau qui commande la division française au combat de Grand-Port, en 1810.", "aspect": {"allure": "un marin d'Empire, sûr de lui"}},
  "decaen": {"name": "Le général Decaen", "aka": ["Decaen"], "face": {"age": "mur", "hair": "gris", "coif": "court", "skin": "clair"}, "qui": "Le gouverneur français de l'île de France en 1810.", "aspect": {"allure": "à cheval à la tête des colons"}},
  "bertrand": {"name": "Le capitaine Bertrand", "aka": ["Bertrand", "capitaine Bertrand"], "face": {"age": "mur", "hair": "gris", "coif": "court", "skin": "hale", "beard": "moustache"}, "qui": "Le premier capitaine de la Calypso, corsaire, admirateur de Napoléon, maître de Jacques.", "aspect": {"allure": "rude, autoritaire, sifflant quand il est content"}},
  "tetedefer": {"name": "Maître Tête-de-Fer", "aka": ["Tête-de-Fer"], "face": {"age": "mur", "hair": "gris", "coif": "court", "skin": "hale"}, "qui": "Le premier lieutenant de Jacques à bord de la Calypso.", "aspect": {"allure": "un vieux loup de mer sûr"}},
}

NO_AUTO = []
MEET = {}

WORDS = {
  "berloque": "Aux colonies, la veillée du samedi soir des esclaves, où chacun travaille pour soi, cuisine, fume ou cause autour du feu.",
  "nègre marron|nègres marrons": "Se dit d'un esclave qui s'est enfui de l'habitation pour vivre caché dans les bois.",
  "Yamsé": "À l'île de France, la fête des musulmans de l'Inde qui pleure la mort de Hoseïn, petit-fils du Prophète, avec processions, danses et feux.",
  "Lascars|Lascar": "Les marins et les ouvriers musulmans venus de l'Inde, à l'île de France.",
  "commandeur": "Sur une plantation, l'homme chargé de surveiller et de punir les esclaves au travail.",
  "ajoupa": "Un abri de branchages et de feuilles, monté en hâte dans les bois.",
  "langouti": "Une pièce d'étoffe nouée autour des reins, le vêtement des esclaves.",
  "négrier|négriers": "Un navire, ou son capitaine, qui fait la traite : il achète des captifs en Afrique pour les vendre comme esclaves.",
  "créole|créoles": "Une personne née aux colonies, de parents venus d'Europe.",
  "arack": "Une eau-de-vie d'Orient, tirée du riz ou de la sève du palmier.",
  "tanrecs|tanrec": "Un petit mammifère couvert de piquants, venu de Madagascar, qui ressemble au hérisson.",
  "gouhn": "Une grande construction de bambou et de papier peint, portée en procession pendant le Yamsé.",
  "palanquin": "Une chaise couverte que des porteurs portent sur leurs épaules au moyen de brancards.",
  "mulâtre|mulâtres|mulâtresse": "Au temps du roman, le mot qu'on employait pour une personne née d'un parent blanc et d'un parent noir ; on dit aujourd'hui métis.",
  "corvette": "Un navire de guerre à trois mâts, plus petit et plus rapide qu'une frégate.",
}


PAGES = {
  "I_1": ["Le voyage rêvé", "pieterboot"], "I_2": ["Salut à l'océan Indien", "pieterboot"], "I_3": ["Port-Louis vu d'en haut", "pieterboot"], "I_4": ["Les canons du 23 août", "pieterboot"],
  "II_1": ["Le piège du drapeau", "grandport"], "II_2": ["Duperré force la passe", "grandport"], "II_3": ["Les colons en armes", "grandport"], "II_4": ["La Néréide écrasée", "grandport"], "II_5": ["La Magicienne en flammes", "grandport"],
  "III_1": ["La milice de Port-Louis", "portlouis"], "III_2": ["Un père et deux fils", "portlouis"], "III_3": ["Le canon de la montagne Longue", "portlouis"], "III_4": ["« Pas de mulâtres avec nous ! »", "portlouis"], "III_5": ["La leçon de l'enfant", "portlouis"], "III_6": ["Pierre Munier et ses hommes", "portlouis"], "III_7": ["La charge des volontaires", "portlouis"], "III_8": ["Le drapeau anglais", "portlouis"], "III_9": ["Le sabre d'Henri", "portlouis"], "III_10": ["Le départ des deux frères", "rade"],
  "IV_1": ["Un navire en vue", "rade"], "IV_2": ["Deux passagers du Leycester", "rade"], "IV_3": ["Le commodore", "rade"], "IV_4": ["Compagnons de traversée", "rade"], "IV_5": ["Le nouveau gouverneur", "rade"],
  "V_1": ["Encore eux !", "portlouis"], "V_2": ["L'éventail de Miko-Miko", "malmedie"], "V_3": ["L'interprète", "malmedie"], "V_4": ["Le vieillard de la Découverte", "decouverte"], "V_5": ["Le fils retrouvé", "decouverte"],
  "VI_1": ["Le serment d'un enfant", "paris"], "VI_2": ["Le collège Napoléon", "paris"], "VI_3": ["Deux cent mille francs au jeu", "paris"], "VI_4": ["Le tireur", "paris"], "VI_5": ["Vingt-cinq pas", "paris"], "VI_6": ["Paris et Londres", "paris"], "VI_7": ["L'Orient et le Trocadéro", "orient"], "VI_8": ["La charte de Moka", "moka"],
  "VII_1": ["La berloque", "habnoire"], "VII_2": ["La chanson d'Antonio", "habnoire"], "VII_3": ["Celui qui conte les histoires", "habnoire"], "VII_4": ["La banane de Cambeba", "habnoire"], "VII_5": ["« Tu es un chien ! »", "habnoire"], "VII_6": ["Nazim et Antonio", "habnoire"],
  "VIII_1": ["Sous la Croix du Sud", "troismamelles"], "VIII_2": ["La rose de la rivière Noire", "troismamelles"], "VIII_3": ["L'huile de coco", "troismamelles"],
  "IX_1": ["Sara et ma mie Henriette", "malmedie"], "IX_2": ["Le nouveau gouverneur est-il jeune ?", "malmedie"], "IX_3": ["Le cavalier aux chevaux arabes", "malmedie"], "IX_4": ["L'invitation au bal", "malmedie"],
  "X_1": ["Le palanquin", "habnoire"], "X_2": ["Une orpheline d'un million", "habnoire"], "X_3": ["La route de la rivière Noire", "habnoire"], "X_4": ["Le bain dans la baie", "baie"], "X_5": ["Le requin", "baie"],
  "XI_1": ["Les héros de la table", "habnoire"], "XI_2": ["Le fugitif repris", "habnoire"], "XI_3": ["Laïza demande une grâce", "habnoire"], "XI_4": ["Mille piastres", "habnoire"],
  "XII_1": ["Le luxe des créoles", "gouvernement"], "XII_2": ["Le dernier invité", "gouvernement"], "XII_3": ["La conversation de Georges", "gouvernement"], "XII_4": ["Henri et sa cousine", "gouvernement"], "XII_5": ["Sara refuse de danser", "gouvernement"], "XII_6": ["Les remerciements", "gouvernement"], "XII_7": ["Un rêve", "gouvernement"],
  "XIII_1": ["Les plans de Georges", "moka"], "XIII_2": ["Ce que Sara découvre", "malmedie"], "XIII_3": ["La reconnaissance de Miko-Miko", "moka"], "XIII_4": ["Le plan de la maison", "moka"], "XIII_5": ["Le capitaine négrier", "moka"],
  "XIV_1": ["Le corsaire de la Calypso", "calypso"], "XIV_2": ["Le capitaine Bertrand", "calypso"], "XIV_3": ["La chasse du Leycester", "calypso"], "XIV_4": ["Le mât de perroquet", "calypso"], "XIV_5": ["Le serpent à sonnettes", "afrique"], "XIV_6": ["Le nouveau maître de la Calypso", "calypso"], "XIV_7": ["Un honnête négrier", "calypso"], "XIV_8": ["Les signaux du rivage", "calypso"],
  "XV_1": ["Trois Munier réunis", "moka"], "XV_2": ["La maison de Sara", "malmedie"], "XV_3": ["Le pavillon", "malmedie"], "XV_4": ["Le coup de vent qui vient", "malmedie"], "XV_5": ["Le coffret de Boule", "malmedie"], "XV_6": ["L'ouragan", "portlouis"], "XV_7": ["Par les toits", "malmedie"], "XV_8": ["Dans le pavillon", "malmedie"],
  "XVI_1": ["Le lendemain de l'ouragan", "portlouis"], "XVI_2": ["La fête du Yamsé", "portlouis"], "XVI_3": ["Une maison gênée", "malmedie"], "XVI_4": ["Deux millions", "malmedie"], "XVI_5": ["Le refus de M. de Malmédie", "malmedie"],
  "XVII_1": ["Les quêteurs du Yamsé", "rade"], "XVII_2": ["Le diamant du capitaine hollandais", "rade"], "XVII_3": ["Le champ de Mars", "champdemars"], "XVII_4": ["La course au cochon", "champdemars"], "XVII_5": ["La course en sac", "champdemars"], "XVII_6": ["Bijou contre Télémaque", "champdemars"], "XVII_7": ["Les poneys et les chevaux", "champdemars"], "XVII_8": ["Antrim et Gester", "champdemars"],
  "XVIII_1": ["Le visiteur de la nuit", "moka"], "XVIII_2": ["Il nous manque un chef", "moka"], "XVIII_3": ["Le cerf et le lion d'Anjouan", "moka"], "XVIII_4": ["Le Leycester en vue", "moka"], "XVIII_5": ["« Dis-leur qu'ils ont un chef »", "moka"],
  "XIX_1": ["Les gouhns sur la plaine Verte", "plaineverte"], "XIX_2": ["Le lion de Kerbela", "plaineverte"], "XIX_3": ["L'assemblée de minuit", "plaineverte"], "XIX_4": ["La fable des singes", "plaineverte"], "XIX_5": ["Le cavalier de l'aube", "plaineverte"],
  "XX_1": ["L'attente", "moka"], "XX_2": ["Deux lettres", "moka"], "XX_3": ["Les adieux du fils", "moka"],
  "XXI_1": ["Le consentement", "gouvernement"], "XXI_2": ["Libre de votre main", "gouvernement"], "XXI_3": ["Trop tard", "gouvernement"], "XXI_4": ["Un secret confié à dix mille personnes", "gouvernement"],
  "XXII_1": ["La chambre de la Police", "police"], "XXII_2": ["Le barreau", "police"], "XXII_3": ["Les tonneaux défoncés", "portlouis"], "XXII_4": ["Laïza dans la mêlée", "portlouis"], "XXII_5": ["Le coup de feu du buisson", "portlouis"],
  "XXIII_1": ["Le père à Moka", "moka"], "XXIII_2": ["Les cases vides", "moka"], "XXIII_3": ["Georges blessé", "moka"], "XXIII_4": ["Adieu à l'habitation", "moka"],
  "XXIV_1": ["La source de la rivière des Créoles", "grandsbois"], "XXIV_2": ["Le guetteur", "grandsbois"], "XXIV_3": ["La caverne des marrons", "caverne"],
  "XXV_1": ["Les rondes de nuit", "grandsbois"], "XXV_2": ["Les Anglais sur la piste", "grandsbois"], "XXV_3": ["Le rôdeur", "grandsbois"], "XXV_4": ["L'aboiement du chien", "grandsbois"], "XXV_5": ["Le tribunal de la forêt", "grandsbois"], "XXV_6": ["Le tamarinier", "grandsbois"],
  "XXVI_1": ["L'assaut de la caverne", "caverne"], "XXVI_2": ["La mine", "caverne"], "XXVI_3": ["La fausse piste", "grandsbois"], "XXVI_4": ["Le feu de l'ajoupa", "grandsbois"], "XXVI_5": ["La dernière course de Laïza", "grandsbois"],
  "XXVII_1": ["Le réveil en prison", "police"], "XXVII_2": ["Le procès", "police"], "XXVII_3": ["Le testament", "police"], "XXVII_4": ["La veille", "police"], "XXVII_5": ["L'exécuteur", "police"], "XXVII_6": ["Paul et Virginie", "police"],
  "XXVIII_1": ["Le chemin de l'échafaud", "eglise"], "XXVIII_2": ["La femme en noir", "eglise"], "XXVIII_3": ["Le billet de Miko-Miko", "eglise"],
  "XXIX_1": ["La Calypso au plus près", "calypso"], "XXIX_2": ["Une voile à l'horizon", "calypso"], "XXIX_3": ["Des ailes avant tout", "calypso"], "XXIX_4": ["Le souper des quatre", "calypso"], "XXIX_5": ["La crique de Flac", "calypso"],
  "XXX_1": ["Le quart de minuit", "calypso"], "XXX_2": ["La frégate à l'aube", "calypso"], "XXX_3": ["Petite sœur", "calypso"], "XXX_4": ["Le déjeuner avant la bataille", "calypso"], "XXX_5": ["Branle-bas de combat", "calypso"], "XXX_6": ["Les premiers boulets", "calypso"], "XXX_7": ["Politesse pour politesse", "calypso"], "XXX_8": ["L'abordage", "calypso"],
}
