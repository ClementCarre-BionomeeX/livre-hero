# Fiche d'« Un billet de loterie » pour livre.py (texte de Verne, 1886).
# Texte : miroir Gutenberg FR (15203, saisie d'Ebooks libres et gratuits), fiches/billet_texte.py pre, gut.py p1.txt,
# billet_texte.py post c1.json ch.json.
# Les chapitres de Verne n'ont qu'un numéro : leurs titres sont de Claude, comme ceux des pages.
# Ce qui doit rester caché jusqu'à sa page (titres, qui, aspect, lieux, résumés) : ce que contient l'enveloppe de la
# Marine (XI_5) ; ce qui lie dame Hansen à Sandgoïst (XIV_4) ; qui réclame le gros lot (XIX_3) ; ce qu'a fait le
# professeur pendant ses absences (XX_1, XX_2).
HEAD = """// « Un billet de loterie », Jules Verne, 1886 : un livre à lire, sans choix (lecture: true). Texte de Verne, domaine public,
// d'après l'édition numérisée par le Projet Gutenberg (saisie d'Ebooks libres et gratuits). L'unique note de l'auteur
// reste entre parenthèses à sa place. Verne n'a pas titré ses chapitres : leurs titres, comme ceux des pages, sont de
// Claude, ainsi que tout ce qui vit dans les tags (gens, lieux, mots, résumés)."""

BASE = {
  "id": "billet",
  "title": "Un billet de loterie",
  "subtitle": "Le numéro 9672 · Jules Verne, 1886",
  "summary": "Norvège, 1862. Au hameau de Dal, dans le Telemark, dame Hansen tient une auberge avec ses deux enfants : Joël, guide de montagne, et Hulda, fiancée à leur cousin Ole Kamp, parti pêcher la morue sur les bancs de Terre-Neuve. Ole doit rentrer en mai pour le mariage, et ses lettres parlent d'une fortune qu'il rapportera. Mais un voyageur peu aimable vient inspecter l'auberge, et la mère se tait. Le roman en entier, sans choix, page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  "tags": ["drame", "aventure"],
  "author": "Jules Verne",
  "lecture": True,
  "age": 10,
  "skin": "parchemin",
  "cover": {"motif": "bouteille", "color": "#3b5f7a"},
  "glossary": None,
  "voice": "troisième personne, passé",
  "version": 1,
  "notice": {
    "title": "Un livre de 1886",
    "text": [
      "Le roman a paru dans le Magasin d'éducation et de récréation, puis en volume chez Hetzel en 1886. Le texte est celui de Verne, sans retouche ; Verne avait seulement numéroté ses chapitres, et les titres qu'on lit ici sont ajoutés pour s'y retrouver. Les lieux existent : le Telemark, le lac Tinn, la chute du Rjukanfos, le Gousta, Bergen, Christiania (aujourd'hui Oslo). Les personnages sont inventés.",
      "En 1862, la Norvège a sa propre constitution et son parlement, le Storthing, mais elle partage son roi avec la Suède. Verne, qui l'a visitée en 1861, en fait un pays sans crime et sans noblesse, peuplé de gens honnêtes et instruits : c'est une Norvège un peu rêvée.",
    ],
  },
  "intro": [],
  "world": {"start": {"place": "auberge", "hour": 20, "gold": 0, "food": 0, "items": [], "kits": {"guerrier": [], "rodeur": [], "voleur": [], "mage": [], "pretre": [], "barde": []}}},
}

R = [
  "Un soir de mars, à huit heures, dans l'auberge de Dal, dame Hansen fume sa pipe et sa fille Hulda attend son frère Joël, parti conduire un voyageur au lac Tinn. On frappe : un jeune garçon apporte une lettre arrivée de loin. Elle vient de Ole, le fiancé de Hulda, qui pêche sur les bancs de Terre-Neuve. Hulda la regarde longtemps avant de l'ouvrir.",
  "Dal, quelques maisons peintes au fond de la vallée du Vestfjorddal, dans le Telemark, entre Bergen et Christiania. En 1862, aucun chemin de fer n'y passe encore. L'auberge de dame Hansen est la plus accueillante du pays : une maison de sapin aux parois roses, aux planchers semés de branches de bouleau et de genévrier, où l'on mange bien pour quelques skillings.",
  "Les Hansen descendent peut-être d'une vieille famille. Harald Hansen, l'aubergiste, est mort il y a dix-huit mois, laissant à sa veuve l'auberge et un petit soeter dans la montagne. Dame Hansen est une femme froide et soucieuse. Joël, vingt-cinq ans, est guide dans le Telemark ; Hulda, dix-huit ans, tient la maison avec grâce. Les deux enfants s'aiment tendrement, et ils aiment leur cousin Ole Kamp, élevé avec eux.",
  "Ole Kamp, jeune marin plein d'avenir, maître sur le Viken, un navire de Bergen, est parti depuis un an pour la pêche d'hiver à Terre-Neuve. Avant son départ, lors de son dernier séjour à Dal, il a demandé la main de Hulda. Le pasteur Andresen est venu de Moel pour les fiançailles. Depuis, ses lettres sont pleines d'espoir : la pêche est bonne, et il rapportera, dit-il, une fortune.",
  "Hulda et Joël se demandent sur quoi Ole fonde cet espoir. Dame Hansen, elle, vient d'être fort troublée par un homme qui lui a annoncé la visite d'un certain M. Sandgoïst. Joël fixe la date du mariage et prépare la noce : Siegfrid, l'amie de Hulda, fille du fermier Helmboë de Bamble, sera fille d'honneur, et l'on brode costumes et corsages pendant tout le printemps.",
  "Un voyageur arrive en kariol : un homme de plus de soixante ans, maigre, lunettes, figure déplaisante. Il exige la meilleure chambre et le meilleur dîner, ne trouve rien à son goût, ne regarde rien du pays, mais visite toutes les pièces, examine le mobilier, interroge dame Hansen sur l'auberge, et repart le lendemain matin sans être allé plus loin.",
  "Hulda attend Joël au passage du Maan. L'orage les force à s'abriter dans la hutte du passeur. Joël, inquiet du retard d'Ole, parle pour ne pas se taire. Hulda lui raconte la visite de l'étrange voyageur, un certain Sandgoïst, de Drammen, et la peur de leur mère. Joël devine qu'il y a entre eux quelque chose de grave.",
  "Pour distraire sa sœur, Joël l'emmène voir le Rjukanfos, la plus belle chute du Telemark. Au bord du gouffre, un voyageur imprudent s'avance sur la roche glissante, au lieu même où la légende fait tomber le fiancé de la belle Marie. Son pied manque ; il reste accroché au-dessus de l'abîme. Hulda le retient, Joël rampe jusqu'à lui au péril de sa vie, et tous trois remontent. Le blessé, un homme âgé au visage aimable, est ramené à l'auberge.",
  "Le voyageur s'appelle Sylvius Hog, de Christiania, professeur de droit et député au Storthing, l'homme le plus aimé de Norvège. Sa bonté contraste en tout avec le visiteur précédent. Verne explique au passage comment la Norvège, unie à la Suède par son roi, garde ses lois, son parlement et sa fierté.",
  "Sylvius Hog, la jambe blessée, se laisse soigner par Hulda et Joël et se demande comment s'acquitter de sa dette. Il refuse toute idée qu'on ne lui doive rien. Les jours passent ; Joël conduit des touristes au Gousta, le professeur s'attache au frère et à la sœur et sent qu'un chagrin pèse sur eux. On est au 9 juin, et le Viken a deux semaines de retard.",
  "Joël raconte au professeur l'histoire d'Ole. Sylvius Hog veut croire qu'un retard n'est pas un naufrage et écrit aux armateurs de Bergen, Help frères. Leur réponse est vague : le Viken a bien quitté Saint-Pierre-Miquelon, et de grands mauvais temps ont soufflé. Le professeur écrit à la Marine. Le 15 juin, un mois de retard. Puis une lettre officielle arrive pour Hulda.",
  "Le professeur reste seul, abattu, puis reprend courage. Le document ne dit rien du lieu du naufrage. L'histoire fait le tour des journaux de Norvège et d'Europe, et l'on offre de plus en plus d'argent à Hulda pour ce qu'elle a reçu, par superstition. Elle refuse tout, approuvée par Sylvius Hog ; dame Hansen, elle, pense aux sommes offertes. Sylvius Hog part en voyage, sans dire où.",
  "Sylvius Hog est allé à Bergen. Chez son ami Help junior, il apprend où et quand la bouteille a été repêchée. Il réunit capitaines et pilotes : le navire a pu heurter les glaces en dérive, et son équipage se réfugier sur un champ de glace poussé vers le Groenland. Le commandant de l'aviso Telegraf accepte d'aller chercher les survivants. Le navire appareille sous les hourras de Bergen.",
  "À Dal, la maison est comme morte. Dame Hansen vit enfermée. Un jour, Sandgoïst revient et entre en maître. Devant Joël et Hulda, il exige qu'on lui cède ce que Hulda a reçu. Joël refuse. Alors la mère avoue, et le frère et la sœur apprennent le secret qui pesait sur la maison. Hulda se sacrifie.",
  "Sylvius Hog revient sans rien dire de son voyage et apprend ce qui s'est passé. Il en est bouleversé, et il le dit à dame Hansen. Sandgoïst fait annoncer partout qu'il possède le précieux numéro et compte le revendre aux enchères ; l'opinion se retourne contre Hulda, qu'on croit vénale. Le professeur s'absente encore un jour, sans dire pourquoi, puis propose d'emmener Joël et Hulda à Christiania.",
  "La kariol descend la vallée du Maan jusqu'à Moel ; une barque traverse le lac Tinn jusqu'à Tinoset, où attend une calèche. On s'arrête à Bamble chez le fermier Helmboë et Siegfrid, qui ne désespère pas. Puis on roule toute la nuit, par Kongsberg et ses mines d'argent, jusqu'à Drammen et à son fiord.",
  "Christiania, petite capitale au fond de son fiord, entre ses collines. Sylvius Hog loge ses jeunes amis à l'Hôtel Victoria. C'est dimanche, la veille du tirage, et la ville est pleine de gens venus de partout. Joël et Hulda se promènent sur les quais, au milieu de la foule qui parle d'eux.",
  "Le professeur passe la matinée au grand bazar de M. Benett et y achète, pour sa petite Hulda, une parure de mariée norvégienne complète, couronne, broches et ceinture. Il veut qu'elle assiste au tirage, comme Ole l'a demandé. Puis tous trois déjeunent, et Sylvius Hog mange de grand appétit.",
  "Le 15 juillet, la grande salle de l'Université de Christiania est comble. Six petites filles tirent les chiffres de six urnes ; le gros lot de cent mille marks est réservé au centième et dernier numéro. Les lots se succèdent pendant des heures. Le 9672 n'est pas encore sorti. Puis vient le dernier tirage.",
  "Sylvius Hog raconte à qui veut l'entendre ce qu'il savait et ce qu'il a fait. Le Viken s'est brisé sur un iceberg, cinq hommes ont survécu, et l'histoire de chacun s'éclaire. Le retour se fait par Bamble, et une noce a lieu à Dal, où le professeur ouvre le bal. Et dans la grande salle de l'auberge, sous un petit cadre de bois, le billet est accroché à la place d'honneur.",
]
T = ["Une lettre de loin", "Dal, dans le Telemark", "La famille Hansen", "Le Viken", "Les préparatifs de la noce",
     "Un voyageur désagréable", "Au passage du Maan", "Le Rjukanfos", "Sylvius Hog", "Une dette à payer",
     "Le retard du Viken", "Ce que tout le monde veut acheter", "À Bergen", "Le secret de dame Hansen", "Le numéro aux enchères",
     "Vers Christiania", "La veille du tirage", "Le bazar de M. Benett", "Le tirage", "Le cadre de bois"]
ROM = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX"]
assert len(R) == len(T) == 20
CHAPTERS = [{"title": ROM[i] + ". " + T[i], "text": r} for i, r in enumerate(R)]
CHAPTERS[1]["notice"] = True

M = {"map": "norvege"}
PLACES = {
  "auberge": {"ambiance": "village", "name": "L'auberge de Dal", "x": 40, "y": 58, "region": "Le Vestfjorddal, dans le Telemark", "desc": "Une maison de sapin aux parois roses, aux balcons sculptés, où l'on sert la meilleure cuisine du Telemark."},
  "dal": {"ambiance": "village", "name": "Dal", "x": 41, "y": 57, "region": "Le Telemark", "desc": "Un hameau de quelques maisons peintes, éparses au fond de l'étroite vallée du Vestfjorddal, au pied des collines."},
  "maan": {"ambiance": "eau", "name": "Le passage du Maan", "x": 42, "y": 59, "region": "Près de Dal", "desc": "Une rivière impétueuse qu'on passe en bac, avec la hutte du passeur un peu en arrière de la rive."},
  "rjukanfos": {"ambiance": "montagne", "name": "Le Rjukanfos", "x": 33, "y": 55, "region": "Le haut du Vestfjorddal", "desc": "Une chute célèbre où le Maan se jette dans un gouffre, entre deux murailles à pic, dans un nuage d'écume."},
  "gousta": {"ambiance": "montagne", "name": "Le Gousta", "x": 37, "y": 53, "region": "Au-dessus du Vestfjorddal", "desc": "La plus haute montagne du Telemark, un cône de neige qui sort d'une forêt de sapins."},
  "bergen": {"ambiance": "ville", "name": "Bergen", "x": 8, "y": 42, "region": "La côte ouest", "desc": "Un vieux port de commerce entre deux fiords, d'où partent les navires pour la grande pêche."},
  "tinn": {"ambiance": "eau", "name": "Le lac Tinn", "x": 45, "y": 62, "region": "Le Telemark", "desc": "Un long lac entre des montagnes boisées, semé d'îlots, de Moel à Tinoset."},
  "bamble": {"ambiance": "champs", "name": "La ferme de Bamble", "x": 52, "y": 70, "region": "Le Telemark", "desc": "Le gaard du fermier Helmboë, l'un des plus importants de la province."},
  "route": {"ambiance": "route", "name": "La route de Christiania", "x": 63, "y": 66, "region": "Par Kongsberg et Drammen", "desc": "Une route de montagne, puis de forêts et de champs, coupée de barrières à péage, jusqu'au fiord de Christiania."},
  "christiania": {"ambiance": "ville", "name": "Christiania", "x": 72, "y": 63, "region": "Au fond de son fiord", "desc": "La capitale de la Norvège, qu'on appelle aujourd'hui Oslo : un port animé, des quartiers neufs et une ceinture de collines vertes."},
  "hotel": {"ambiance": "ville", "name": "L'Hôtel Victoria", "x": 73, "y": 62, "region": "Christiania", "desc": "Un hôtel de la capitale, sous le vestibule duquel on lit : Fiat lux."},
  "benett": {"ambiance": "ville", "name": "Le bazar de M. Benett", "x": 71, "y": 62, "region": "Christiania", "desc": "Un immense magasin où l'on trouve de tout, des kariols aux bijoux anciens."},
  "universite": {"ambiance": "ville", "name": "L'Université de Christiania", "x": 72, "y": 61, "region": "Christiania", "desc": "Une grande salle, des cours, et ce jour-là une foule qui déborde jusque dans les rues."},
}
for p in PLACES.values(): p.update(M)

PEOPLE = {
  "hansen": {"name": "Dame Hansen", "aka": ["dame Hansen"], "face": {"age": "mur", "hair": "gris", "coif": "foulard", "skin": "clair", "iris": "bleu"}, "qui": "La veuve de l'aubergiste Harald Hansen, qui tient l'auberge de Dal.", "aspect": {"allure": "froide, soucieuse, silencieuse"}},
  "hulda": {"name": "Hulda Hansen", "aka": ["Hulda Hansen", "Hulda"], "face": {"age": "jeune", "hair": "blond", "coif": "long", "skin": "clair", "iris": "bleu"}, "qui": "La fille de dame Hansen, fiancée à son cousin Ole Kamp.", "aspect": {"allure": "dix-huit ans, douce et sérieuse"}},
  "joel": {"name": "Joël Hansen", "aka": ["Joël Hansen", "Joël"], "face": {"age": "jeune", "hair": "chatain", "coif": "court", "beard": "sans", "skin": "clair", "iris": "bleu"}, "qui": "Le fils de dame Hansen, guide de montagne dans le Telemark.", "aspect": {"allure": "vingt-cinq ans, grand, l'allure hardie", "visage": "blond presque châtain, yeux bleu sombre"}},
  "ole": {"name": "Ole Kamp", "aka": ["Ole Kamp", "Ole"], "face": {"age": "jeune", "hair": "blond", "coif": "court", "beard": "sans", "skin": "clair", "iris": "bleu"}, "qui": "Le cousin de Joël et de Hulda, jeune marin de Bergen, fiancé à Hulda."},
  "sandgoist": {"name": "Sandgoïst", "aka": ["Sandgoïst"], "face": {"age": "ancien", "hair": "gris", "coif": "court", "beard": "sans", "skin": "clair"}, "qui": "Un homme de Drammen, que dame Hansen connaît.", "aspect": {"allure": "maigre, un peu courbé", "visage": "nez pointu, petits yeux, grosses lunettes"}},
  "hog": {"name": "Sylvius Hog", "aka": ["Sylvius Hog", "professeur Hog", "monsieur Sylvius", "Sylvius"], "face": {"age": "mur", "hair": "blanc", "coif": "court", "beard": "sans", "skin": "clair", "iris": "bleu"}, "qui": "Un professeur de droit de Christiania, député au Storthing.", "aspect": {"allure": "soixante ans, grand, droit, vigoureux", "visage": "belle figure aimable et souriante"}},
  "siegfrid": {"name": "Siegfrid Helmboë", "aka": ["Siegfrid"], "face": {"age": "jeune", "hair": "blond", "coif": "long", "skin": "clair", "iris": "bleu"}, "qui": "L'amie de Hulda, fille du fermier Helmboë de Bamble.", "aspect": {"allure": "jolie blonde de dix-huit ans"}},
  "helmboe": {"name": "Le fermier Helmboë", "aka": ["fermier Helmboë", "Helmboë"], "face": {"age": "mur", "hair": "blond", "coif": "court", "beard": "barbe", "skin": "clair"}, "qui": "Un riche fermier de Bamble, père de Siegfrid."},
  "andresen": {"name": "Le pasteur Andresen", "aka": ["pasteur Andresen"], "face": {"age": "mur", "hair": "gris", "coif": "court", "beard": "sans", "skin": "clair"}, "qui": "Le pasteur de Moel, obligeant et bon marcheur."},
  "help": {"name": "Help junior", "aka": ["Help junior"], "face": {"age": "adulte", "hair": "chatain", "coif": "court", "beard": "barbe", "skin": "clair"}, "qui": "L'un des frères Help, armateurs à Bergen, ami de Sylvius Hog."},
  "benett": {"name": "M. Benett", "aka": ["M. Benett", "monsieur Benett"], "face": {"age": "adulte", "hair": "brun", "coif": "court", "beard": "moustache", "skin": "clair"}, "qui": "Le propriétaire du grand bazar de Christiania, connu de toute la Norvège."},
}
MET_AT_START = []
NO_AUTO = ["hansen", "hulda", "joel", "ole", "siegfrid", "helmboe", "benett"]  # nommés dès la 1re page, ou en passant (Benett en V_2)
MEET = {"I_2": ["hansen", "hulda", "joel", "ole"], "V_2": ["siegfrid", "helmboe"], "XVIII_1": ["benett"]}

WORDS = {
  "Telemark": "Une province montagneuse du sud de la Norvège.",
  "Storthing": "Le parlement de la Norvège.",
  "bailliage|bailliages": "Une province, en Norvège.",
  "kariol|kariols": "Une petite voiture norvégienne à deux roues et à une place, tirée par un cheval.",
  "skydskarl": "Un garçon qui s'accroche à l'arrière de la kariol pour ramener le cheval au relais.",
  "soeter|soeters": "Une petite ferme d'été dans la montagne, où l'on garde les bêtes.",
  "gaard|gaards": "Une ferme, en Norvège.",
  "field|fields": "Un plateau élevé et dénudé, en Norvège.",
  "fiord|fiords": "Un long golfe étroit entre des falaises, sur la côte de Norvège.",
  "piga": "La servante, dans les auberges norvégiennes.",
  "skilling|skillings": "Une petite monnaie norvégienne de l'époque.",
  "marks": "Une monnaie ; cent mille marks font, dit Verne, environ cent mille francs.",
  "aviso|avisos": "Un petit navire de guerre rapide, qui porte des ordres ou fait des recherches.",
  "brick-goélette": "Un voilier à deux mâts.",
  "brick": "Un voilier à deux mâts portant des voiles carrées.",
  "armateur|armateurs": "Celui qui possède et arme des navires de commerce ou de pêche.",
  "icefield|icefields": "Un vaste champ de glace flottante.",
  "iceberg|icebergs": "Une montagne de glace qui flotte sur la mer.",
  "usurier": "Celui qui prête de l'argent à un intérêt très élevé.",
  "équinoxe": "Le moment de l'année, au printemps et en automne, où le jour et la nuit sont égaux ; il amène souvent des tempêtes.",
  "flatbröd": "Une galette de pain plate et sèche, en Norvège.",
  "stock-fish": "De la morue séchée.",
  "brandevin": "De l'eau-de-vie.",
  "multers": "Des baies orange qui poussent dans les marais du Nord.",
  "Rollon": "Un chef viking qui conquit la Normandie au dixième siècle.",
  "fille d'honneur": "La demoiselle qui accompagne la mariée.",
  "posada": "Une auberge, en Espagne et en Italie.",
  "fonda": "Une auberge, en Espagne.",
}

PT = {
  "I_1": ("Huit heures du soir", "auberge"),
  "I_2": ("On frappe à la porte", "auberge"),
  "I_3": ("Une lettre de Terre-Neuve", "auberge"),
  "II_1": ("Le hameau de Dal", "dal"),
  "II_2": ("L'auberge de dame Hansen", "auberge"),
  "III_1": ("Les Hansen", "auberge"),
  "III_2": ("Joël et Hulda", "auberge"),
  "IV_1": ("Ole Kamp", "auberge"),
  "IV_2": ("Une demande", "auberge"),
  "IV_3": ("Les fiançailles", "auberge"),
  "V_1": ("Une fortune promise", "auberge"),
  "V_2": ("La fille d'honneur", "auberge"),
  "V_3": ("Les préparatifs", "auberge"),
  "VI_1": ("Un voyageur en kariol", "auberge"),
  "VI_2": ("Le meilleur dîner", "auberge"),
  "VI_3": ("Un hôte qui inspecte", "auberge"),
  "VI_4": ("Un départ sans rien voir", "auberge"),
  "VII_1": ("Dans la hutte du passeur", "maan"),
  "VII_2": ("Un nom", "maan"),
  "VIII_1": ("La route des chutes", "rjukanfos"),
  "VIII_2": ("Au bord du gouffre", "rjukanfos"),
  "VIII_3": ("Joël rampe", "rjukanfos"),
  "VIII_4": ("Le sauvetage", "rjukanfos"),
  "VIII_5": ("Retour à Dal", "auberge"),
  "IX_1": ("Un nom sur le livre des voyageurs", "auberge"),
  "X_1": ("Le blessé", "auberge"),
  "X_2": ("Il n'y a pas de madame Hog", "auberge"),
  "X_3": ("À la table de dame Hansen", "auberge"),
  "X_4": ("Le Gousta", "gousta"),
  "X_5": ("Le 9 juin", "maan"),
  "XI_1": ("L'histoire d'Ole", "auberge"),
  "XI_2": ("Un peu d'espoir", "auberge"),
  "XI_3": ("Une lettre aux armateurs", "auberge"),
  "XI_4": ("La réponse de Bergen", "auberge"),
  "XI_5": ("Une lettre de la Marine", "auberge"),
  "XII_1": ("Le professeur seul", "auberge"),
  "XII_2": ("Ni latitude ni longitude", "auberge"),
  "XII_3": ("Toute l'Europe en parle", "auberge"),
  "XII_4": ("Hulda refuse", "auberge"),
  "XIII_1": ("Bergen", "bergen"),
  "XIII_2": ("Où la bouteille fut trouvée", "bergen"),
  "XIII_3": ("Une réunion de marins", "bergen"),
  "XIII_4": ("Le Telegraf appareille", "bergen"),
  "XIV_1": ("Une maison morte", "auberge"),
  "XIV_2": ("Le retour de Sandgoïst", "auberge"),
  "XIV_3": ("Joël refuse", "auberge"),
  "XIV_4": ("L'aveu", "auberge"),
  "XV_1": ("Le professeur revient", "auberge"),
  "XV_2": ("Une conversation avec dame Hansen", "auberge"),
  "XV_3": ("Une annonce dans les journaux", "auberge"),
  "XVI_1": ("La kariol descend la vallée", "tinn"),
  "XVI_2": ("Sur le lac Tinn", "tinn"),
  "XVI_3": ("Chez le fermier Helmboë", "bamble"),
  "XVI_4": ("Toute la nuit sur la route", "route"),
  "XVII_1": ("Christiania", "christiania"),
  "XVII_2": ("La foule du dimanche", "christiania"),
  "XVIII_1": ("Chez M. Benett", "benett"),
  "XVIII_2": ("Des bijoux de mariée", "benett"),
  "XVIII_3": ("Le déjeuner", "hotel"),
  "XIX_1": ("La grande salle de l'Université", "universite"),
  "XIX_2": ("Les six urnes", "universite"),
  "XIX_3": ("Le centième numéro", "universite"),
  "XX_1": ("Ce que savait le professeur", "universite"),
  "XX_2": ("Le retour à Dal", "auberge"),
}
PAGES = {p: list(t) for p, t in PT.items()}
