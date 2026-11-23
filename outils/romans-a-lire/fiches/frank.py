# Fiche de « Frankenstein » (id frank) pour livre.py (roman de Mary Shelley, 1818, traduction de 1821).
# Texte : gut.py sur Gutenberg n° 62404 à 62406 (miroir orkeilius/gutenberg_fr_mirror), entre fiches/frank_texte.py pre et post.
HEAD = """// « Frankenstein », Mary Shelley, 1818 : un livre à lire, sans choix (lecture: true). Traduction française de 1821 (J. S.,
// attribuée à Jules Saladin), domaine public, d'après l'édition numérique du projet Gutenberg. Les chapitres n'ont pas de titre ; les
// titres des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude."""

BASE = {
  "id": "frank",
  "title": "Frankenstein",
  "subtitle": "Un roman à lire · Mary Shelley, 1818 · traduction de 1821",
  "summary": "Dans les glaces du pôle, l'équipage d'un navire de découverte recueille un homme à bout de forces, qui poursuivait sur un traîneau une silhouette gigantesque. Il s'appelle Victor Frankenstein. Étudiant à Ingolstadt, il a voulu percer le secret de la vie, et il y est parvenu.",
  "tags": ["fantastique", "drame", "voyage"],
  "author": "Mary Shelley",
  "lecture": True,
  "age": 13,
  "skin": "parchemin",
  "cover": {"motif": "flocon", "color": "#2f3b44"},
  "glossary": None,
  "voice": "première personne, passé",
  "version": 1,
  "notice": {
    "title": "Un roman de 1818",
    "reminder": "Ce chapitre raconte un meurtre.",
    "text": [
      "*Frankenstein ou le Prométhée moderne* a paru à Londres en 1818, sans nom d'auteur ; Mary Shelley avait vingt ans. Le texte est celui de la première traduction française, parue à Paris en 1821 sous les initiales J. S. et attribuée à Jules Saladin, d'après l'édition numérique du projet Gutenberg. Elle suit la version de 1818, plus ancienne que celle que Mary Shelley a revue en 1831 et que l'on lit le plus souvent aujourd'hui.",
      "Le roman commence par les lettres de Robert Walton à sa sœur ; Victor Frankenstein prend ensuite la parole, et la créature raconte elle-même sa vie au milieu du livre. La traduction avait laissé le mot anglais *Switzerland* pour la Suisse : il a été remplacé, avec quelques coquilles de la numérisation. Les chapitres n'ont pas de titre ; la préface, sans signature, est de Percy Shelley, le mari de l'autrice.",
      "Le livre raconte des meurtres, dont celui d'un enfant, une exécution et des corps de morts. La créature fait peur, mais Mary Shelley lui donne la parole aussi longtemps qu'à son créateur.",
    ],
  },
  "intro": [],
  "world": {"start": {"place": "lac", "hour": 20, "gold": 0, "food": 0, "items": [], "kits": {"guerrier": [], "rodeur": [], "voleur": [], "mage": [], "pretre": [], "barde": []}}},
}

def roman(n):
    out = ''
    for v, r in ((100, 'C'), (90, 'XC'), (50, 'L'), (40, 'XL'), (10, 'X'), (9, 'IX'), (5, 'V'), (4, 'IV'), (1, 'I')):
        while n >= v: out += r; n -= v
    return out

TITRES = [
  "Préface",
  "Première lettre",
  "Deuxième lettre",
  "Troisième lettre",
  "Quatrième lettre",
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
  "",
  "",
  "",
]


R = [
  "L'auteur prévient : le fait sur lequel repose ce roman a paru possible à des savants sérieux, et il sert surtout à peindre des passions humaines. L'histoire est née pendant un été pluvieux près de Genève, où quelques amis s'étaient promis d'écrire chacun une histoire de revenants ; celle-ci est la seule qui ait été achevée.",
  "De Saint-Pétersbourg, Robert Walton écrit à sa sœur, Mme Saville, restée en Angleterre. Il rêve depuis l'enfance d'atteindre le pôle, pays de lumière perpétuelle, et de découvrir le secret de l'aimant. Poète manqué, il a hérité d'une fortune, s'est endurci sur les baleiniers du Nord, et part pour Archangel louer un vaisseau.",
  "À Archangel, Walton a loué son vaisseau et engage son équipage. Une chose lui manque : un ami, quelqu'un d'aussi instruit et d'aussi ardent que lui, qui partagerait ses espoirs et corrigerait ses projets. Il fait le portrait de son lieutenant et de son maître d'équipage, un homme doux et généreux, puis promet de revenir.",
  "Le 7 juillet, un navire qui rentre en Angleterre emporte un mot de Walton : il va bien, il a déjà croisé des glaces flottantes, l'équipage est courageux. Il promet d'être froid, persévérant et prudent.",
  "Le vaisseau est pris dans les glaces. L'équipage voit passer au loin, sur un traîneau tiré par des chiens, une silhouette d'homme de taille gigantesque. Le lendemain, un second traîneau dérive sur un glaçon, et son passager, à demi mort, demande où va le navire avant d'accepter de monter à bord. Walton le soigne et s'attache à cet homme brisé et noble. Quand Walton lui confie son ambition, l'étranger promet de lui raconter sa propre histoire, comme un avertissement ; Walton l'écrira chaque soir sous sa dictée.",
  "Victor Frankenstein est né à Genève, dans une famille de syndics. Son père a épousé Caroline Beaufort, la fille d'un ami ruiné. Ils recueillent Élisabeth Lavenza, la fille d'une sœur du père morte en Italie, que Victor aime comme une sœur et davantage. Avec son ami Henri Clerval, il grandit heureux, mais il dévore Corneille Agrippa, Paracelse et Albert le Grand, et rêve de l'élixir de vie. À quinze ans, il voit la foudre réduire un chêne en lambeaux, et la science moderne le dégoûte un temps de tout.",
  "Victor doit partir pour l'université d'Ingolstadt. Élisabeth attrape la fièvre scarlatine ; sa mère la soigne, prend le mal et meurt, en confiant à Élisabeth la place de mère auprès des petits. À Ingolstadt, le professeur Krempe se moque des alchimistes que Victor a lus. Le professeur Waldman, au contraire, fait l'éloge des chimistes modernes qui ont pénétré les secrets de la nature, et Victor sort de son cours décidé à suivre cette voie.",
  "Pendant deux ans, Victor étudie avec fureur. Pour comprendre la vie, il observe la mort, dans les cimetières et les charniers, jusqu'au jour où il découvre comment animer la matière. Il entreprend de fabriquer un être humain de grande taille, avec des matériaux pris aux salles de dissection et aux abattoirs. Pâle, amaigri, il laisse passer tout un été sans écrire à sa famille.",
  "Une nuit de novembre, la créature ouvre un œil jaune et terne. Victor, saisi d'horreur devant ce qu'il a fait, s'enfuit dans sa chambre, rêve qu'Élisabeth se change en cadavre de sa mère, et se réveille devant la créature penchée sur son lit. Il passe la nuit dans la cour, erre au matin sous la pluie et tombe sur Henri Clerval, qui arrive de Genève. L'appartement est vide. Victor rit d'un rire de fou, tombe en proie à une fièvre nerveuse, et Clerval le soigne pendant tout l'hiver.",
  "Une lettre d'Élisabeth donne les nouvelles de la maison : Justine Moritz, la jeune servante qu'elle aime, et les petits frères, Ernest et Guillaume, si joli avec ses fossettes. Convalescent, Victor ne supporte plus la vue de ses instruments, et les éloges de ses professeurs le mettent au supplice. Clerval apprend les langues orientales ; au printemps, les deux amis font une longue promenade dans la campagne, et Victor retrouve un peu de joie.",
  "Une lettre du père annonce la mort de Guillaume, trouvé étranglé dans la plaine de Plainpalais ; il portait le portrait de sa mère, qui a disparu. Victor rentre en hâte. Arrivé de nuit devant les portes fermées de Genève, il marche vers le lieu du meurtre sous un orage magnifique, et, à la lueur d'un éclair, voit une forme gigantesque escalader le mont Salève. Il sait aussitôt qui est l'assassin. Au matin, Ernest lui apprend qu'on a trouvé le portrait dans la poche de Justine Moritz, arrêtée.",
  "Justine est jugée. Elle explique sa nuit dehors, sans pouvoir expliquer le portrait. Élisabeth témoigne pour elle, mais les juges la condamnent. Dans sa prison, Justine avoue à Élisabeth qu'elle a menti à son confesseur, qui la menaçait de l'enfer : elle est innocente. Victor, qui sait la vérité et se croit incapable de la faire croire, se tait. Justine meurt sur l'échafaud.",
  "La famille se retire à Belrive. Victor fuit dans une barque sur le lac la nuit et pense à s'y jeter ; il redoute le monstre lâché au milieu des siens. Élisabeth a perdu sa confiance dans la justice des hommes. Pour le distraire, son père organise au mois d'août une excursion dans la vallée de Chamouny, au pied du mont Blanc.",
  "Victor monte seul au Montanvert et s'assoit devant la mer de glace. Une forme d'homme traverse le glacier en bondissant : la créature. Victor l'insulte et se jette sur elle ; elle l'évite sans peine et lui demande de l'écouter. Elle était bonne ; le malheur l'a rendue méchante. Victor la suit jusqu'à une cabane de berger, où elle allume un feu et commence son récit.",
  "La créature raconte. Elle s'éveille dans la confusion des sensations, s'enfuit dans la forêt d'Ingolstadt, découvre le froid, la faim, la lune, le chant des oiseaux, et le feu qu'un voyageur a laissé. Un berger fuit en la voyant ; au village, on la chasse à coups de pierres. Elle se réfugie dans un appentis adossé à une chaumière, d'où elle observe, par une fente, un vieillard aveugle, un jeune homme et une jeune fille.",
  "La créature comprend que ses voisins sont pauvres et tristes. Elle cesse de voler leurs provisions, et chaque nuit elle coupe leur bois et le pose devant la porte. Elle apprend leurs noms, le vieillard, Félix et Agathe, puis leurs mots. Elle se voit dans une eau claire et comprend avec horreur qu'elle est le monstre que les hommes fuient.",
  "Au printemps arrive une jeune Arabe voilée, Safie, que Félix aime. Comme elle apprend la langue du pays, la créature l'apprend avec elle, et en écoutant Félix lire *Les Ruines* de Volney, elle découvre l'histoire des empires, la richesse et la pauvreté, la naissance et la famille. Elle se demande ce qu'elle est : sans parents, sans amis, sans nom.",
  "La créature apprend l'histoire de la famille De Lacey. À Paris, Félix a aidé à s'évader un marchand turc condamné à tort, qui lui promettait sa fille Safie. Le Turc trahit sa promesse ; la famille est ruinée, emprisonnée, exilée. Safie, à qui sa mère chrétienne a appris la liberté, s'enfuit pour rejoindre Félix.",
  "La créature trouve dans la forêt *Le Paradis perdu*, les *Vies* de Plutarque et *Werther*, et se reconnaît tour à tour en Adam et en Satan. Dans la poche de ses habits, elle découvre le journal de Victor sur sa création. Elle décide de se présenter au vieillard aveugle pendant que les autres sont sortis. Il l'écoute avec bonté ; mais Félix, Agathe et Safie rentrent, et Félix la frappe à coups de bâton.",
  "La famille quitte la chaumière, et la créature la brûle. Elle part vers Genève, la patrie de son créateur. En chemin, elle sauve une petite fille de la noyade ; un homme lui tire dessus. Près de Genève, elle saisit un enfant pour en faire son ami : c'est Guillaume Frankenstein, qui la menace de son père. Elle l'étrangle, prend le portrait, et le glisse dans la robe d'une jeune fille endormie dans une grange. Elle exige maintenant de Victor une compagne aussi difforme qu'elle.",
  "Victor refuse, puis se laisse toucher. La créature promet de partir avec sa compagne pour les déserts de l'Amérique du Sud, loin des hommes, et Victor jure de la créer. Elle disparaît sur la glace. Victor redescend vers Chamouny et rentre à Genève, accablé.",
  "Des semaines passent sans que Victor ose commencer. Son père lui demande s'il aime toujours Élisabeth et propose le mariage ; Victor veut d'abord aller en Angleterre, où il trouvera les connaissances qui lui manquent. Clerval l'accompagne. Ils partent à la fin du mois d'août, descendent le Rhin de Strasbourg à Rotterdam, au milieu des vignes et des châteaux qui enchantent Henri, et arrivent à Londres.",
  "Victor prend ses renseignements à Londres pendant que Clerval voit le monde. Ils visitent Oxford, Matlock, les lacs du Cumberland, Édimbourg. À Perth, Victor laisse son ami et s'installe seul dans une des îles les plus pauvres des Orkneys, une roche battue par la mer, pour y faire son travail en secret.",
  "Un soir, Victor imagine une race de démons née de son œuvre. Il lève les yeux : la créature le regarde par la fenêtre, avec un sourire. Victor déchire l'ouvrage presque achevé. La créature jure de se venger : « Je serai avec toi la nuit de tes noces. » La nuit suivante, Victor jette les restes à la mer depuis une barque, s'endort, dérive tout le jour et aborde une côte inconnue, où des pêcheurs l'arrêtent pour un meurtre commis la nuit même.",
  "Victor est en Irlande, devant M. Kirwin, un magistrat bienveillant. Des pêcheurs ont trouvé un jeune homme étranglé sur la plage. On le confronte au corps : c'est Henri Clerval. Victor tombe dans une fièvre de deux mois, en prison. Kirwin, qui le traite avec bonté, fait venir son père. Les assises reconnaissent son innocence, et le père ramène son fils.",
  "Le père et le fils passent par Le Havre et Paris. Élisabeth écrit : si Victor aime une autre femme, il est libre. Victor répond qu'il l'aime et qu'il lui confiera un terrible secret le lendemain du mariage. À Genève, on fixe la noce. Victor porte des pistolets et un poignard, persuadé que le combat l'attend. Après la cérémonie, les époux prennent une barque pour Évian, sous un ciel où les nuages s'amassent.",
  "À Évian, l'orage éclate sur le lac. Victor fait le guet dans l'auberge, l'arme à la main ; un cri part de la chambre. Il est trop tard. À la fenêtre paraît la créature, qui lui montre le corps du doigt en ricanant ; Victor tire, elle plonge dans le lac. De retour à Genève, Victor voit son père mourir de chagrin et perd la raison pendant des mois. Guéri, il raconte tout à un juge criminel, qui l'écoute sans le croire.",
  "Victor jure vengeance sur les tombes des siens ; un rire lui répond. Il poursuit la créature le long du Rhin, sur la Méditerranée, à travers la Tartarie et la Russie ; elle lui laisse des messages gravés et de quoi manger. Sur la mer gelée, en traîneau, il est près de l'atteindre quand la glace se brise. Walton reprend la plume : il a vérifié l'histoire de Victor, qui refuse de livrer son secret. Le navire est pris dans les glaces, l'équipage exige le retour, et Walton cède. Victor s'éteint. La nuit, Walton surprend la créature penchée sur le corps de son créateur. Elle dit ses crimes et son désespoir, annonce qu'elle mourra au pôle sur un bûcher, et s'éloigne sur un radeau de glace.",
]

def titre(i, t):
    if i <= 4: return t
    return "Chapitre " + roman(i - 4)
CHAPTERS = [{"title": titre(i, t), "text": r} for i, (t, r) in enumerate(zip(TITRES, R))]
for i in (10, 19, 24, 26): CHAPTERS[i]["notice"] = True

PLACES = {
  "lac": {"ambiance": "eau", "name": "Le lac de Genève", "map": "geneve", "x": 45, "y": 50, "region": "Le Léman, entre Genève et Évian", "desc": "Un grand lac bleu entre le Jura et les Alpes, où les orages d'été éclatent en quelques minutes."},
  "petersbourg": {"ambiance": "ville", "name": "Saint-Pétersbourg", "map": "nord", "x": 30, "y": 75, "region": "Russie", "desc": "La capitale du tsar, où souffle déjà le vent froid du nord."},
  "archangel": {"ambiance": "port", "name": "Archangel", "map": "nord", "x": 50, "y": 55, "region": "Russie, sur la mer Blanche", "desc": "Un port du Grand Nord, entouré de glace et de neige, où l'on arme les baleiniers."},
  "vaisseau": {"ambiance": "neige", "name": "Le vaisseau de Walton", "map": "nord", "x": 60, "y": 18, "region": "La mer polaire", "desc": "Un navire de découverte pris dans les glaces, sous un brouillard épais et un soleil qui ne se couche plus."},
  "geneve": {"ambiance": "ville", "name": "La maison des Frankenstein", "map": "geneve", "x": 30, "y": 55, "region": "Genève", "desc": "La demeure d'une famille de syndics, dans une petite république qui se gouverne elle-même."},
  "belrive": {"ambiance": "village", "name": "La campagne de Belrive", "map": "geneve", "x": 38, "y": 45, "region": "Sur la rive est du lac, près de Genève", "desc": "Une maison de campagne au bord du lac, avec ses jardins et ses grands arbres."},
  "ingolstadt": {"ambiance": "ville", "name": "Ingolstadt", "map": "allemagne", "x": 60, "y": 60, "region": "Bavière", "desc": "Une ville universitaire aux clochers blancs, avec ses collèges, ses amphithéâtres et ses auberges de diligence."},
  "laboratoire": {"ambiance": "nuit", "name": "La chambre haute de Victor", "map": "allemagne", "x": 62, "y": 58, "region": "Ingolstadt, au haut de la maison", "desc": "Une cellule solitaire sous les toits, séparée du reste de la maison par une galerie et un escalier, encombrée d'instruments."},
  "foret": {"ambiance": "foret", "name": "La forêt d'Ingolstadt", "map": "allemagne", "x": 55, "y": 50, "region": "Autour d'Ingolstadt", "desc": "Des bois épais traversés de ruisseaux, où l'hiver vient vite."},
  "village": {"ambiance": "village", "name": "Le village", "map": "allemagne", "x": 45, "y": 42, "region": "Allemagne, à quelques lieues d'Ingolstadt", "desc": "Des chaumières propres, des jardins, des jattes de lait sur les fenêtres, et des paysans qui prennent les pierres pour arme."},
  "chaumiere": {"ambiance": "village", "name": "La chaumière des De Lacey", "map": "allemagne", "x": 40, "y": 35, "region": "Allemagne, au bord d'un bois", "desc": "Une petite maison pauvre et propre, un jardin, et un appentis de planches adossé au mur, où l'on peut regarder par une fente."},
  "route": {"ambiance": "route", "name": "La route de Genève", "map": "allemagne", "x": 25, "y": 80, "region": "Entre l'Allemagne et la Suisse", "desc": "Des forêts, des rivières, des champs, et des lieues de chemin sous le soleil ou la pluie."},
  "saleve": {"ambiance": "nuit", "name": "Plainpalais et le mont Salève", "map": "geneve", "x": 25, "y": 70, "region": "Aux portes de Genève", "desc": "La plaine devant la ville, où l'on se promène le soir, et la montagne escarpée qui la borne au sud."},
  "tribunal": {"ambiance": "ville", "name": "Le tribunal de Genève", "map": "geneve", "x": 28, "y": 60, "region": "Genève", "desc": "La cour où les juges votent avec des boules blanches et noires, et la prison voisine."},
  "chamouny": {"ambiance": "montagne", "name": "La vallée de Chamouny", "map": "geneve", "x": 75, "y": 80, "region": "Savoie, au pied du mont Blanc", "desc": "Une vallée entre des montagnes immenses, des glaciers qui descendent jusqu'aux champs, et l'Arve qui gronde."},
  "merdeglace": {"ambiance": "montagne", "name": "La mer de glace", "map": "geneve", "x": 80, "y": 75, "region": "Au-dessus de Chamouny, en face du Montanvert", "desc": "Un glacier immense aux vagues gelées, couvert de brouillard, dominé par le mont Blanc."},
  "paris": {"ambiance": "ville", "name": "Paris", "map": "france", "x": 50, "y": 40, "region": "France", "desc": "La capitale, ses prisons, ses tribunaux et ses hôtels de négociants."},
  "rhin": {"ambiance": "eau", "name": "Le Rhin", "map": "allemagne", "x": 20, "y": 35, "region": "De Strasbourg à Rotterdam", "desc": "Un fleuve bordé de vignes, d'îles et de châteaux en ruines sur des rochers à pic."},
  "londres": {"ambiance": "ville", "name": "Londres", "map": "bretagne", "x": 65, "y": 80, "region": "Angleterre", "desc": "Une ville immense, la Tamise, les clochers de Saint-Paul et la Tour."},
  "oxford": {"ambiance": "ville", "name": "Oxford", "map": "bretagne", "x": 55, "y": 75, "region": "Angleterre", "desc": "Une ville de collèges anciens, pleine des souvenirs de la guerre civile."},
  "orkney": {"ambiance": "mer", "name": "Une île des Orkneys", "map": "bretagne", "x": 55, "y": 5, "region": "Au nord de l'Écosse", "desc": "Un rocher stérile battu par les vagues, cinq habitants, trois chaumières, et la mer partout."},
  "irlande": {"ambiance": "port", "name": "Une petite ville d'Irlande", "map": "bretagne", "x": 20, "y": 50, "region": "La côte irlandaise", "desc": "Un port de pêcheurs avec sa jetée, ses rues étroites et son magistrat."},
  "prison": {"ambiance": "ville", "name": "La prison", "map": "bretagne", "x": 22, "y": 52, "region": "Irlande", "desc": "Une cellule, une fenêtre grillée, et une vieille garde-malade."},
  "manche": {"ambiance": "mer", "name": "La traversée vers la France", "map": "france", "x": 40, "y": 15, "region": "De Holyhead au Havre", "desc": "Les routes d'Angleterre, puis la mer jusqu'au Havre."},
  "evian": {"ambiance": "nuit", "name": "L'auberge d'Évian", "map": "geneve", "x": 70, "y": 35, "region": "Sur la rive sud du lac", "desc": "Une auberge au bord de l'eau, avec ses couloirs et ses chambres à volets."},
  "cimetiere": {"ambiance": "nuit", "name": "Le cimetière de Genève", "map": "geneve", "x": 32, "y": 52, "region": "Genève", "desc": "Les tombes de la famille, sous les arbres qui frémissent au vent de la nuit."},
  "poursuite": {"ambiance": "neige", "name": "Les déserts de Russie", "map": "nord", "x": 45, "y": 70, "region": "De la mer Noire au Grand Nord", "desc": "Des plaines blanches, des rivières gelées, des villages perdus."},
  "banquise": {"ambiance": "neige", "name": "La mer gelée", "map": "nord", "x": 55, "y": 25, "region": "L'océan du Nord", "desc": "Des montagnes de glace, des crevasses, et un silence que coupent seulement les craquements des glaçons."},
}


PEOPLE = {
  "walton": {"name": "Robert Walton", "aka": ["Walton", "WALTON"], "face": {"age": "jeune", "hair": "chatain", "coif": "court", "skin": "hale", "beard": "sans"}, "qui": "Un jeune Anglais parti à la découverte du pôle, qui écrit à sa sœur les lettres où tient toute l'histoire.", "aspect": {"allure": "manteau de fourrure, carnet en main"}},
  "saville": {"name": "Marguerite Saville", "aka": ["Marguerite", "Mme Saville", "SAVILLE"], "face": {"age": "adulte", "hair": "chatain", "coif": "chignon", "skin": "clair"}, "qui": "La sœur de Walton, restée en Angleterre, à qui il adresse ses lettres.", "aspect": {"allure": "dame anglaise, mariée"}},
  "victor": {"name": "Victor Frankenstein", "aka": ["Victor", "Frankenstein", "FRANKENSTEIN"], "face": {"age": "jeune", "hair": "brun", "coif": "milong", "skin": "clair", "beard": "sans"}, "qui": "Un jeune Genevois de bonne famille, étudiant en sciences naturelles à Ingolstadt.", "aspect": {"allure": "pâle, amaigri par l'étude", "signe": "le regard fiévreux"}},
  "creature": {"name": "La créature", "aka": ["le monstre", "le Monstre", "le démon", "le Démon"], "face": {"age": "adulte", "hair": "noir", "coif": "long", "skin": "#c8bd84", "beard": "sans"}, "qui": "L'être de taille gigantesque que Victor Frankenstein a fabriqué et animé, puis abandonné ; sans nom, sans famille, il apprend seul à vivre et à parler.", "aspect": {"allure": "géant, peau jaune et tendue", "signe": "yeux humides, lèvres noires"}},
  "pere": {"name": "Le père de Victor", "aka": ["ALPHONSE FRANKENSTEIN"], "face": {"age": "mur", "hair": "gris", "coif": "court", "skin": "clair", "beard": "sans"}, "qui": "Un ancien syndic de Genève, homme droit et estimé, père de Victor, d'Ernest et de Guillaume.", "aspect": {"allure": "habit sombre de magistrat genevois"}},
  "caroline": {"name": "Caroline Beaufort", "aka": ["Caroline", "Beaufort"], "face": {"age": "adulte", "hair": "chatain", "coif": "chignon", "skin": "clair"}, "qui": "La mère de Victor, fille d'un négociant ruiné, ami de son mari.", "aspect": {"allure": "douce, en robe simple"}},
  "elisabeth": {"name": "Élisabeth Lavenza", "aka": ["Élisabeth", "ÉLISABETH", "ÉLIZABETH"], "face": {"age": "jeune", "hair": "noir", "coif": "long", "skin": "clair"}, "qui": "La cousine de Victor, orpheline élevée chez les Frankenstein, et que tout le monde destine à Victor.", "aspect": {"allure": "yeux bruns, teint vif", "signe": "cheveux noirs comme l'ébène"}},
  "clerval": {"name": "Henri Clerval", "aka": ["Clerval", "Henri", "Henry"], "face": {"age": "jeune", "hair": "blond", "coif": "court", "skin": "clair", "beard": "sans"}, "qui": "L'ami d'enfance de Victor, fils d'un négociant genevois, épris de poésie, de voyages et de langues orientales.", "aspect": {"allure": "gai, curieux de tout"}},
  "ernest": {"name": "Ernest Frankenstein", "aka": ["Ernest"], "face": {"age": "jeune", "hair": "chatain", "coif": "court", "skin": "clair"}, "qui": "Le deuxième fils de la famille, de six ans le cadet de Victor, longtemps maladif.", "aspect": {"allure": "adolescent robuste"}},
  "guillaume": {"name": "Guillaume Frankenstein", "aka": ["Guillaume"], "face": {"age": "enfant", "hair": "brun", "coif": "boucles", "skin": "porcelaine"}, "qui": "Le plus jeune frère de Victor, un petit garçon gai et câlin.", "aspect": {"allure": "yeux bleus, fossettes"}},
  "justine": {"name": "Justine Moritz", "aka": ["Justine"], "face": {"age": "jeune", "hair": "chatain", "coif": "chignon", "skin": "clair"}, "qui": "Une jeune fille recueillie par Mme Frankenstein, devenue la servante et l'amie de la maison.", "aspect": {"allure": "servante en tablier, très pieuse"}},
  "krempe": {"name": "M. Krempe", "aka": ["Krempe"], "face": {"age": "mur", "hair": "gris", "coif": "court", "skin": "hale", "beard": "sans"}, "qui": "Professeur de philosophie naturelle à Ingolstadt, savant brusque qui méprise les alchimistes.", "aspect": {"allure": "petit, ramassé, voix rude"}},
  "waldman": {"name": "M. Waldman", "aka": ["Waldman"], "face": {"age": "mur", "hair": "gris", "coif": "court", "skin": "clair", "beard": "sans"}, "qui": "Professeur de chimie à Ingolstadt, bienveillant, qui ouvre à Victor les découvertes modernes.", "aspect": {"allure": "petit, très droit, voix douce", "signe": "tempes grises, nuque noire"}},
  "lacey": {"name": "Le vieux De Lacey", "aka": ["De Lacey", "Lacey"], "face": {"age": "ancien", "hair": "blanc", "coif": "court", "skin": "clair", "beard": "sans"}, "qui": "Un vieillard aveugle, ancien bourgeois de Paris, ruiné et exilé, qui vit pauvrement dans une chaumière avec ses enfants.", "aspect": {"allure": "aveugle, joue de la guitare"}},
  "felix": {"name": "Félix De Lacey", "aka": ["Félix"], "face": {"age": "jeune", "hair": "brun", "coif": "court", "skin": "clair", "beard": "sans"}, "qui": "Le fils du vieux De Lacey, qui travaille la terre pour nourrir les siens.", "aspect": {"allure": "jeune paysan au visage triste"}},
  "agathe": {"name": "Agathe De Lacey", "aka": ["Agathe"], "face": {"age": "jeune", "hair": "chatain", "coif": "long", "skin": "clair"}, "qui": "La fille du vieux De Lacey, qui tient la maison.", "aspect": {"allure": "jeune fille en habits pauvres"}},
  "safie": {"name": "Safie", "aka": ["Safie"], "face": {"age": "jeune", "hair": "noir", "coif": "tresses", "skin": "dore"}, "qui": "Une jeune étrangère venue de loin, qui ne parle pas la langue du pays.", "aspect": {"allure": "voile sombre, habit de voyage", "signe": "yeux noirs pleins de feu"}},
  "turc": {"name": "Le marchand turc", "aka": ["le Turc"], "face": {"age": "mur", "hair": "noir", "coif": "turban", "skin": "hale", "beard": "barbe"}, "qui": "Un riche marchand établi à Paris, le père de Safie.", "aspect": {"allure": "robe de négociant oriental"}},
  "kirwin": {"name": "M. Kirwin", "aka": ["Kirwin"], "face": {"age": "ancien", "hair": "blanc", "coif": "degarni", "skin": "clair", "beard": "sans"}, "qui": "Un magistrat d'une petite ville d'Irlande, calme et bienveillant.", "aspect": {"allure": "vieux juge en habit noir"}},
  "nugent": {"name": "Daniel Nugent", "aka": ["Nugent"], "face": {"age": "adulte", "hair": "roux", "coif": "court", "skin": "hale", "beard": "barbe"}, "qui": "Un pêcheur irlandais, témoin d'une nuit de tempête.", "aspect": {"allure": "pêcheur en vareuse"}},
}

NO_AUTO = ["agathe", "creature", "felix", "lacey", "pere", "safie", "walton"]
MEET = {"I_1": ["walton"], "V_1": ["pere"], "VIII_1": ["creature"], "XIV_4": ["lacey", "felix", "agathe"], "XVI_1": ["safie"]}

WORDS = {
  "syndic|syndics": "À Genève, un des magistrats élus qui gouvernaient la république.",
  "philosophie naturelle": "Le nom qu'on donnait alors aux sciences de la nature : physique, chimie, histoire naturelle.",
  "alchimie": "L'ancienne science qui cherchait à changer les métaux en or et à trouver le remède de toutes les maladies.",
  "alchimistes": "Les savants de l'alchimie, qui cherchaient la pierre philosophale et l'élixir de vie.",
  "élixir de vie": "Le breuvage rêvé par les alchimistes, qui devait chasser la maladie et la mort.",
  "pierre philosophale": "La substance que cherchaient les alchimistes pour changer les métaux en or.",
  "charnier|charniers": "Un lieu où l'on entassait les ossements des morts.",
  "assises": "Le tribunal qui juge les crimes, réuni à date fixe dans une ville.",
  "apoplexie": "Une attaque brutale, souvent mortelle, qui frappe le cerveau.",
  "laudanum": "Un remède à base d'opium, qu'on prenait en gouttes pour dormir.",
  "esquif": "Une petite embarcation légère.",
  "gruau": "Une bouillie de grains d'avoine ou d'orge.",
  "lieue|lieues": "Une ancienne mesure de distance, environ quatre kilomètres.",
  "diligence|diligences": "Une grande voiture à chevaux qui transportait les voyageurs d'une ville à l'autre.",
  "échafaud": "L'estrade où l'on exécutait les condamnés.",
  "excommunication": "La sentence par laquelle l'Église chasse un fidèle de sa communauté.",
  "môle": "Ici, le Môle, une montagne en pain de sucre au-dessus de la vallée de l'Arve.",
  "magnétisme": "La force de l'aimant, qui fait tourner l'aiguille de la boussole vers le nord.",
  "Paradis perdu": "Le grand poème de Milton (1667) sur la révolte de Satan et la chute d'Adam et Ève.",
  "Werther": "*Les Souffrances du jeune Werther*, le roman de Goethe (1774) sur un jeune homme désespéré d'amour.",
  "Plutarque": "Un auteur grec qui a écrit les *Vies* des grands hommes de la Grèce et de Rome.",
  "Volney": "Un philosophe français, auteur des *Ruines* (1791), une méditation sur la grandeur et la chute des empires.",
  "Agrippa": "Corneille Agrippa, un savant du XVIe siècle, auteur d'un traité de magie.",
  "Paracelse": "Un médecin et alchimiste suisse du XVIe siècle.",
  "Tartarie": "Le nom qu'on donnait aux immenses steppes de l'Asie centrale.",
  "convalescence": "Le temps où l'on reprend des forces après une maladie.",
}


PAGES = {
  "P_1": ["Une histoire née d'un été pluvieux", "lac"],
  "I_1": ["Vers le pôle", "petersbourg"], "I_2": ["Un rêve d'enfant", "petersbourg"],
  "II_1": ["Sans un ami", "archangel"], "II_2": ["Le maître du navire", "archangel"],
  "III_1": ["Quelques lignes à la hâte", "vaisseau"],
  "IV_1": ["Un traîneau sur la glace", "vaisseau"], "IV_2": ["L'étranger", "vaisseau"], "IV_3": ["Le récit promis", "vaisseau"],
  "V_1": ["Une famille de Genève", "geneve"], "V_2": ["Élisabeth", "geneve"], "V_3": ["Les vieux maîtres", "geneve"], "V_4": ["La foudre sur le chêne", "belrive"],
  "VI_1": ["Le départ retardé", "geneve"], "VI_2": ["Ingolstadt", "ingolstadt"], "VI_3": ["M. Waldman", "ingolstadt"],
  "VII_1": ["Le secret de la vie", "laboratoire"], "VII_2": ["Rendre la vie", "laboratoire"], "VII_3": ["Un été perdu", "laboratoire"],
  "VIII_1": ["Une nuit de novembre", "laboratoire"], "VIII_2": ["Sous la pluie", "ingolstadt"], "VIII_3": ["La fièvre", "ingolstadt"],
  "IX_1": ["La lettre d'Élisabeth", "ingolstadt"], "IX_2": ["L'histoire de Justine", "ingolstadt"], "IX_3": ["Les professeurs", "ingolstadt"], "IX_4": ["Une promenade de printemps", "ingolstadt"],
  "X_1": ["La lettre du père", "ingolstadt"], "X_2": ["Le retour", "route"], "X_3": ["L'orage sur Plainpalais", "saleve"], "X_4": ["Ernest", "geneve"], "X_5": ["Justine accusée", "geneve"],
  "XI_1": ["Le procès", "tribunal"], "XI_2": ["Les boules noires", "tribunal"], "XI_3": ["Dans la prison", "tribunal"], "XI_4": ["Les adieux", "tribunal"],
  "XII_1": ["Le remords", "belrive"], "XII_2": ["Le lac la nuit", "belrive"], "XII_3": ["La vallée de l'Arve", "chamouny"],
  "XIII_1": ["L'Arveyron", "chamouny"], "XIII_2": ["Sur la mer de glace", "merdeglace"], "XIII_3": ["Écoutez-moi", "merdeglace"],
  "XIV_1": ["Les premiers jours", "foret"], "XIV_2": ["Le feu", "foret"], "XIV_3": ["Le village", "village"], "XIV_4": ["La cabane contre la chaumière", "chaumiere"],
  "XV_1": ["Les voisins", "chaumiere"], "XV_2": ["Le bois devant la porte", "chaumiere"], "XV_3": ["Les mots", "chaumiere"],
  "XVI_1": ["L'étrangère", "chaumiere"], "XVI_2": ["Safie", "chaumiere"], "XVI_3": ["Qui suis-je ?", "chaumiere"],
  "XVII_1": ["Le Turc de Paris", "paris"], "XVII_2": ["La fuite de Safie", "paris"],
  "XVIII_1": ["Trois livres", "chaumiere"], "XVIII_2": ["Le Paradis perdu", "chaumiere"], "XVIII_3": ["Le jour choisi", "chaumiere"], "XVIII_4": ["Le vieillard aveugle", "chaumiere"],
  "XIX_1": ["La nuit de rage", "foret"], "XIX_2": ["La chaumière vide", "chaumiere"], "XIX_3": ["L'enfant dans la rivière", "route"], "XIX_4": ["Une compagne", "saleve"],
  "XX_1": ["La réponse", "merdeglace"], "XX_2": ["Le serment", "merdeglace"], "XX_3": ["Retour à Genève", "geneve"],
  "XXI_1": ["Le courage manque", "geneve"], "XXI_2": ["La question du père", "geneve"], "XXI_3": ["En descendant le Rhin", "rhin"], "XXI_4": ["Clerval", "rhin"],
  "XXII_1": ["Londres", "londres"], "XXII_2": ["Oxford et les lacs", "oxford"], "XXII_3": ["Une île des Orkneys", "orkney"],
  "XXIII_1": ["Le soir au laboratoire", "orkney"], "XXIII_2": ["La promesse rompue", "orkney"], "XXIII_3": ["La nuit de tes noces", "orkney"], "XXIII_4": ["La barque", "orkney"], "XXIII_5": ["La dérive", "irlande"],
  "XXIV_1": ["Le magistrat", "irlande"], "XXIV_2": ["Le corps", "irlande"], "XXIV_3": ["La garde-malade", "prison"], "XXIV_4": ["Un visiteur", "prison"], "XXIV_5": ["Les assises", "prison"],
  "XXV_1": ["Vers la France", "manche"], "XXV_2": ["La lettre de Paris", "paris"], "XXV_3": ["Ma prière", "paris"], "XXV_4": ["Le jour fixé", "geneve"], "XXV_5": ["Sur le lac", "lac"],
  "XXVI_1": ["L'auberge d'Évian", "evian"], "XXVI_2": ["À la fenêtre", "evian"], "XXVI_3": ["Retour par le lac", "lac"], "XXVI_4": ["Le juge criminel", "geneve"],
  "XXVII_1": ["Sur les tombes", "cimetiere"], "XXVII_2": ["La poursuite", "poursuite"], "XXVII_3": ["Des mots sur l'écorce", "poursuite"], "XXVII_4": ["Un traîneau sur la mer gelée", "banquise"], "XXVII_5": ["Le journal de Walton", "vaisseau"], "XXVII_6": ["Le secret gardé", "vaisseau"], "XXVII_7": ["Un ami perdu", "vaisseau"], "XXVII_8": ["Le 5 septembre", "vaisseau"], "XXVII_9": ["Le retour décidé", "vaisseau"], "XXVII_10": ["Dans la cabine", "vaisseau"], "XXVII_11": ["Le dernier visiteur", "vaisseau"], "XXVII_12": ["Le radeau de glace", "banquise"],
}
