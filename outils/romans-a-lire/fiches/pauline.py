# Fiche de « Pauline » (id pauline) pour livre.py (texte de Dumas, 1838).
# Texte : gut.py sur Gutenberg n° 71510 (miroir orkeilius/gutenberg_fr_mirror), entre fiches/pauline_texte.py pre et post.
HEAD = """// « Pauline », Alexandre Dumas, 1838 : un livre à lire, sans choix (lecture: true). Texte de Dumas,
// domaine public, d'après l'édition numérique du projet Gutenberg. Les chapitres de Dumas n'ont pas de titre ; les
// titres des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude."""

BASE = {
  "id": "pauline",
  "title": "Pauline",
  "subtitle": "Un roman à lire · Alexandre Dumas, 1838",
  "summary": "En Suisse, Dumas croise deux fois son ami Alfred de Nerval au bras d'une femme voilée qui veut rester inconnue. Des mois plus tard, Alfred lui raconte tout : une tempête sur la côte normande, une abbaye en ruine, une clef enterrée dans la nuit, et une jeune femme que tout Paris croit morte.",
  "tags": ["drame", "intrigue"],
  "author": "Alexandre Dumas",
  "lecture": True,
  "age": 14,
  "skin": "parchemin",
  "cover": {"motif": "lune", "color": "#2f2a3e"},
  "glossary": None,
  "voice": "première personne, passé",
  "version": 1,
  "notice": {
    "title": "Un roman noir de 1838",
    "reminder": "Ce chapitre montre un crime violent contre une femme.",
    "text": [
      "*Pauline* a paru en 1838. Le texte est celui de Dumas, sans retouche, d'après l'édition Michel Lévy de 1848 numérisée par le projet Gutenberg. Le volume contenait aussi « Murat » et « Pascal Bruno », qui ne sont pas repris ici. Les chapitres de Dumas n'ont pas de titre.",
      "Le récit passe de bouche en bouche : Dumas écoute son ami Alfred, qui rapporte à son tour la confession de Pauline. Le roman emprunte au roman noir anglais ses ruines, ses souterrains et ses portes dérobées.",
      "Le livre raconte des meurtres, une femme ligotée qu'on se dispute puis qu'on tue, un empoisonnement, et la lente agonie d'une prisonnière dans un caveau. Il montre aussi la chasse au sanglier et au tigre avec leur sang.",
    ],
  },
  "intro": [],
  "world": {"start": {"place": "grisier", "hour": 20, "gold": 0, "food": 0, "items": [], "kits": {"guerrier": [], "rodeur": [], "voleur": [], "mage": [], "pretre": [], "barde": []}}},
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
]


R = [
  "Fin 1834, à la salle d'armes de Grisier, le narrateur, Dumas lui-même, se souvient : en Suisse, il a croisé deux fois son ami Alfred de Nerval au bras d'une femme voilée qui voulait rester inconnue ; à Baveno, sur le lac Majeur, il a jeté un bouquet dans leur voiture ; plus loin, il a trouvé une tombe. Et voici qu'Alfred entre dans la salle. Après un assaut, il emmène le narrateur souper et lui raconte l'histoire de Pauline.",
  "Récit d'Alfred. Riche depuis la mort d'un oncle, il voyage. À Trouville, son hôtesse, madame Oseraie, parle des vols et des meurtres qui terrifient la Normandie ; un Anglais est trouvé poignardé, sa femme a disparu. Seul dans sa barque, Alfred est surpris par une tempête et jeté à la côte. Il s'abrite dans une abbaye en ruine, et un bruit le réveille.",
  "Dans la nuit, Alfred voit un jeune homme sortir d'un souterrain et enfouir une clef. Au matin, des pêcheurs le ramènent : les ruines sont celles de l'abbaye de Grand-Pré, près du château de Burcy, où chasse le comte Horace de Beuzeval, le mari de Pauline de Meulien, qu'Alfred a aimée en silence. À Dives, on annonce que la comtesse de Beuzeval vient d'être assassinée dans son parc. Alfred, qui a étudié l'anatomie, accompagne les médecins : la morte qu'on lui montre est une inconnue.",
  "Alfred revient de nuit, armé, déterre la clef et descend dans les caveaux de l'abbaye. Derrière une grille, il trouve Pauline vivante, enfermée dans un tombeau. Il descelle la grille et l'emporte vers la barque.",
  "À Trouville, Pauline accepte l'aide d'Alfred, qui seul sait qu'elle vit : elle doit quitter la France. Elle pose ses conditions : elle sera sa sœur, mademoiselle de Nerval, et gagnera sa vie en donnant des leçons. Ils partent par Le Havre pour Brighton, puis Londres.",
  "À Londres, Alfred installe sa « sœur » dans une petite maison de Piccadilly. Elle lui demande de ne plus parler de son amour, et lui fait jurer le silence avant de tout raconter.",
  "Récit de Pauline. Riche héritière, elle a passé trois années heureuses entre Paris et le château de Meulien. Chez madame de Lucienne, lors d'une chasse, le comte Horace de Beuzeval abat d'une balle sûre le sanglier qui s'acharne sur Paul de Lucienne. On raconte ensuite comment, aux Indes, il a tué une tigresse seul, à pied, avec un simple poignard ; un Malais l'a suivi depuis.",
  "Le comte fascine et effraie Pauline. À un bal de charité, il verse une somme énorme, danse avec elle et chante les vers désespérés de Faust. Pauline s'évanouit ; dans son gant, elle trouve un billet au crayon : « Vous m'aimez !… merci, merci ! »",
  "Le comte la poursuit jusqu'à la campagne et lui écrit une lettre passionnée, qu'elle brûle. Sa mère devine son trouble. Madame de Lucienne demande la main de Pauline pour le comte ; six semaines plus tard, le mariage est fait.",
  "Horace présente à Pauline ses deux amis inséparables, qu'elle appellera Henri et Max. Il est sujet à des tristesses et à des cauchemars. Fin août, les trois hommes partent chasser en Normandie, au château de Burcy. Le comte écrit que le château est en ruine et qu'elle ne doit pas venir ; Pauline, inquiète des crimes dont parlent les journaux, part le rejoindre sans l'avertir et arrive seule : il la reçoit d'un visage glacé.",
  "Un pari de chasse emmène les trois amis pour la nuit ; Pauline reste au château avec le Malais. Elle découvre un pavillon fermé, puis, derrière un livre, une porte cachée et un escalier. De sa fenêtre, elle voit trois hommes porter vers le pavillon un fardeau d'où sort un bras de femme ; plus tard, quelqu'un entre dans sa chambre par la boiserie.",
  "Pauline croit d'abord à une maîtresse cachée. La nuit suivante, elle suit le souterrain jusqu'à un laboratoire et, par un carreau, voit Horace, Max et Henri en blouse de paysan, armés, ivres, se disputer une femme liée sur un lit. Le comte met fin à la querelle d'un coup de pistolet. Pauline crie et s'évanouit.",
  "Pauline se réveille dans le caveau, avec une lampe, un verre de poison et une lettre du comte. Elle raconte la lumière qui meurt, la faim, le délire, jusqu'à l'arrivée d'Alfred, et lui fait renouveler son serment.",
  "Pauline vit comme la sœur d'Alfred. Le docteur Sercey s'inquiète d'une maladie d'estomac laissée par le poison et conseille un voyage : ils parcourent l'Écosse. Puis la mère d'Alfred écrit : le comte Horace de Beuzeval, veuf, demande la main de Gabrielle, la sœur d'Alfred. Alfred court à Paris et trouve sa sœur au bal de l'ambassade d'Angleterre, avec le comte.",
  "Alfred ferme la porte de sa mère au comte, puis le rencontre à cheval. Lié par son serment, il ne peut le dénoncer : il le provoque. Ils se battent au pistolet à Versailles, devant des officiers qui ignorent tout. Alfred est blessé, le comte tombe.",
  "À Londres, Pauline apprend la nouvelle par un journal et tombe gravement malade. Elle aime Alfred et le lui dit, mais refuse de lier sa vie à la sienne. Ils partent pour la Suisse et l'Italie. Son vœu est exaucé : elle repose dans un jardin au-dessus du lac Majeur, là même où le narrateur, sans savoir qui y dormait, était venu prier.",
]

def titre(i, t):
    if not t: return "Chapitre " + roman(i + 1)
    return "Chapitre " + roman(i + 1) + " · " + t
CHAPTERS = [{"title": titre(i, t), "text": r} for i, (t, r) in enumerate(zip(TITRES, R))]
for i in (11, 12): CHAPTERS[i]["notice"] = True

PLACES = {
  "suisse": {"ambiance": "montagne", "name": "Les lacs et les bains de Suisse", "map": "europe", "x": 52, "y": 50, "region": "Suisse", "desc": "Le lac des Quatre-Cantons à Fluélen et la galerie souterraine des bains de Pfeffers, où l'on croise des voyageurs qui veulent rester inconnus."},
  "baveno": {"ambiance": "eau", "name": "Le lac Majeur", "map": "europe", "x": 53, "y": 56, "region": "Italie du Nord, de Baveno à Sesto Calende", "desc": "Une auberge au bord de l'eau, des lauriers-roses, des myrtes et des orangers, trois îles, et sur une colline un jardin qui domine le lac."},
  "grisier": {"ambiance": "ville", "name": "La salle d'armes de Grisier", "map": "paris", "x": 55, "y": 35, "region": "Paris", "desc": "Une salle d'armes et son petit salon, où l'on écoute le maître, le fleuret à la main et le cigare à la bouche."},
  "trouville": {"ambiance": "port", "name": "Trouville", "map": "normandie", "x": 70, "y": 40, "region": "Normandie, côte du Calvados", "desc": "Un petit port de pêcheurs, l'un des plus pittoresques de Normandie, avec l'auberge de madame Oseraie."},
  "cote": {"ambiance": "mer", "name": "La côte du Calvados", "map": "normandie", "x": 45, "y": 35, "region": "De Trouville à l'embouchure de l'Orne", "desc": "Des galets, des dunes, des rochers, une mer qui se révolte la nuit sous la foudre, et des pêcheurs qui passent au matin."},
  "abbaye": {"ambiance": "souterrain", "name": "L'abbaye de Grand-Pré", "map": "normandie", "x": 40, "y": 45, "region": "Sur la colline, près de Dives", "desc": "Une abbaye en ruine : un cloître, une chapelle ouverte au ciel, un petit cimetière, et sous la voûte, les caveaux des anciens supérieurs."},
  "burcy": {"ambiance": "chateau", "name": "Le château de Burcy", "map": "normandie", "x": 36, "y": 52, "region": "Près de Dives", "desc": "Un vieux château de chasse, avec son parc, son allée de marronniers, un pavillon fermé dans un massif de chênes, et des murs plus épais qu'il n'y paraît."},
  "manche": {"ambiance": "mer", "name": "La Manche", "map": "europe", "x": 38, "y": 32, "region": "Du Havre à Brighton", "desc": "Une nuit froide et calme sur le pont d'un paquebot, sous les étoiles."},
  "londres": {"ambiance": "ville", "name": "Londres", "map": "europe", "x": 38, "y": 24, "region": "Angleterre, Piccadilly", "desc": "Une petite maison meublée à Piccadilly, un jardin, une pelouse et un banc, loin de tous ceux qui pourraient reconnaître un visage."},
  "meulien": {"ambiance": "champs", "name": "La campagne de Meulien", "map": "europe", "x": 43, "y": 38, "region": "Aux environs de Paris", "desc": "Le château de la famille de Pauline et celui des Lucienne, voisins, avec leurs forêts de chasse et leurs pavillons au bord des clairières."},
  "paris": {"ambiance": "ville", "name": "Paris", "map": "paris", "x": 40, "y": 55, "region": "Faubourg Saint-Germain", "desc": "Les hôtels du faubourg Saint-Germain, les bals de charité, les ambassades et les allées où l'on se rencontre à cheval."},
  "inde": {"ambiance": "foret", "name": "Les Indes", "map": "monde", "x": 70, "y": 45, "region": "De Goa à Bombay", "desc": "Une garnison anglaise, un dîner d'officiers, et à trois lieues un marais de roseaux où une tigresse a mis bas."},
  "ecosse": {"ambiance": "montagne", "name": "L'Écosse", "map": "europe", "x": 36, "y": 10, "region": "Écosse", "desc": "Les lacs, les ruines et les sentiers des romans de Walter Scott, que l'on visite le livre à la main."},
  "versailles": {"ambiance": "foret", "name": "Versailles", "map": "europe", "x": 41, "y": 42, "region": "Près de la pièce d'eau des Suisses", "desc": "Un terrain choisi par des officiers de la garnison, vingt pas mesurés, et le soleil en face."},
}


PEOPLE = {
  "alfred": {"name": "Alfred de Nerval", "aka": ["Alfred de Nerval", "Alfred", "monsieur de Nerval"], "face": {"age": "jeune", "hair": "brun", "coif": "court", "skin": "clair", "beard": "moustache"}, "qui": "Un jeune peintre devenu riche, ami de quinze ans du narrateur, bon tireur et cœur fidèle.", "aspect": {"allure": "paletot de voyage, crayons en poche", "signe": "un sourire triste"}},
  "pauline": {"name": "Pauline de Meulien", "aka": ["Pauline de Meulien", "Pauline", "comtesse de Beuzeval"], "face": {"age": "jeune", "hair": "brun", "coif": "long", "skin": "porcelaine"}, "qui": "Une jeune femme du faubourg Saint-Germain, belle, instruite, musicienne, que le narrateur a vue passer voilée en Suisse.", "aspect": {"allure": "voile sur le visage, tartan sur les épaules", "signe": "une grande pâleur"}},
  "grisier": {"name": "Grisier", "aka": ["Grisier"], "face": {"age": "mur", "hair": "gris", "coif": "court", "skin": "clair", "beard": "moustache"}, "qui": "Le maître d'armes chez qui le narrateur et ses amis tirent le fleuret.", "aspect": {"allure": "plastron, fleuret à la main"}},
  "labattut": {"name": "Labattut", "aka": ["Labattut"], "face": {"age": "jeune", "hair": "chatain", "coif": "court", "skin": "clair"}, "qui": "Un élève de Grisier, sur le point de partir pour l'Italie.", "aspect": {"allure": "masque d'escrime sous le bras"}},
  "oseraie": {"name": "Madame Oseraie", "aka": ["madame Oseraie"], "face": {"age": "mur", "hair": "gris", "coif": "chignon", "skin": "clair"}, "qui": "L'aubergiste de Trouville, qui raconte au coin du feu les crimes de la région.", "aspect": {"allure": "bonnet normand, tablier"}},
  "horace": {"name": "Le comte Horace de Beuzeval", "aka": ["Horace de Beuzeval", "comte Horace", "Horace", "monsieur de Beuzeval"], "face": {"age": "jeune", "hair": "blond", "coif": "court", "skin": "porcelaine"}, "qui": "Un gentilhomme à la mode, riche d'un héritage des Indes, célèbre pour son courage et son sang-froid.", "aspect": {"allure": "lèvres minces, mains de femme", "signe": "un pli sur le front"}},
  "malais": {"name": "Le Malais", "aka": ["le Malais", "Le Malais"], "face": {"age": "adulte", "hair": "noir", "coif": "turban", "skin": "brun"}, "qui": "Le serviteur ramené des Indes par le comte, qui garde le costume de son pays.", "aspect": {"allure": "turban et costume malais", "signe": "salue les mains croisées"}},
  "lucienne": {"name": "Madame de Lucienne", "aka": ["madame de Lucienne"], "face": {"age": "mur", "hair": "chatain", "coif": "chignon", "skin": "clair"}, "qui": "Une voisine de campagne de Pauline et de sa mère, mère de famille et conseillère.", "aspect": {"allure": "robe de campagne, voix douce"}},
  "mlucienne": {"name": "Monsieur de Lucienne", "aka": ["monsieur de Lucienne"], "face": {"age": "mur", "hair": "gris", "coif": "court", "skin": "clair", "beard": "moustache"}, "qui": "Le mari de madame de Lucienne, vieil ami du père de Pauline.", "aspect": {"allure": "carabine en bandoulière"}},
  "paul": {"name": "Paul de Lucienne", "aka": ["Paul"], "face": {"age": "jeune", "hair": "chatain", "coif": "court", "skin": "clair"}, "qui": "Le fils des Lucienne, chasseur ardent.", "aspect": {"allure": "habit de chasse, cor en sautoir"}},
  "lucie": {"name": "Lucie de Lucienne", "aka": ["Lucie"], "face": {"age": "jeune", "hair": "blond", "coif": "long", "skin": "clair"}, "qui": "La fille des Lucienne, amie de Pauline.", "aspect": {"allure": "amazone, à cheval"}},
  "henri": {"name": "Henri", "aka": ["Henri"], "face": {"age": "jeune", "hair": "brun", "coif": "court", "skin": "clair", "beard": "moustache"}, "qui": "L'un des deux amis inséparables du comte ; Pauline tait son vrai nom.", "aspect": {"allure": "habit de chasse, fusil à l'épaule"}},
  "max": {"name": "Max", "aka": ["Max"], "face": {"age": "jeune", "hair": "noir", "coif": "court", "skin": "clair", "beard": "barbe"}, "qui": "L'autre ami inséparable du comte ; Pauline tait aussi son vrai nom.", "aspect": {"allure": "vareuse de canotier"}},
  "sercey": {"name": "Le docteur Sercey", "aka": ["docteur Sercey", "Sercey"], "face": {"age": "mur", "hair": "gris", "coif": "court", "skin": "clair"}, "qui": "Un médecin de Londres, qui soigne Pauline.", "aspect": {"allure": "redingote noire, lunettes"}},
  "gabrielle": {"name": "Gabrielle de Nerval", "aka": ["Gabrielle"], "face": {"age": "jeune", "hair": "chatain", "coif": "long", "skin": "clair"}, "qui": "La jeune sœur d'Alfred, qui vit à Paris avec leur mère.", "aspect": {"allure": "robe de bal blanche", "signe": "une joie d'enfant"}},
  "mnerval": {"name": "Madame de Nerval", "aka": ["madame de Nerval"], "face": {"age": "mur", "hair": "gris", "coif": "chignon", "skin": "clair"}, "qui": "La mère d'Alfred et de Gabrielle.", "aspect": {"allure": "robe sombre, éventail fermé"}},
}

NO_AUTO = ["alfred", "grisier", "malais", "pauline"]
MEET = {"I_2": ["alfred", "pauline"], "I_3": ["grisier"], "VII_4": ["malais"]}

WORDS = {
  "fleuret|fleurets": "Une épée d'entraînement, à lame carrée et à bout mouché.",
  "paletot": "Un manteau court et ample.",
  "galet": "Les cailloux ronds et polis que la mer roule sur les plages.",
  "cloître": "Dans une abbaye, la galerie couverte qui entoure une cour.",
  "caveau|caveaux": "Une chambre souterraine où l'on enterre les morts.",
  "pince": "Une barre de fer qui sert de levier.",
  "paquebot": "Un navire qui transporte régulièrement les voyageurs et le courrier.",
  "tartan": "Une étoffe de laine à carreaux, à la mode écossaise ; un châle fait de cette étoffe.",
  "meute": "La troupe de chiens qui chasse ensemble.",
  "piqueur|piqueurs": "À la chasse à courre, le valet à cheval qui mène les chiens.",
  "carabine": "Un fusil court.",
  "calepin": "Un petit carnet ; au bal, celui où les danseuses inscrivent les noms de leurs cavaliers.",
  "chaise de poste": "Une voiture de voyage rapide, qui change de chevaux à chaque relais.",
  "fontes": "Les deux étuis de cuir, attachés à la selle, où l'on range les pistolets.",
  "postillon": "Celui qui conduit une voiture de poste, monté sur l'un des chevaux.",
  "contredanse": "Une danse à figures, où plusieurs couples se font face.",
  "baldaquin": "Le dais de tissu qui surmonte un lit à colonnes.",
}


PAGES = {
  "I_1": ["La femme voilée", "suisse"], "I_2": ["Le bouquet de Baveno", "baveno"], "I_3": ["Une tombe au-dessus du lac", "baveno"], "I_4": ["Le fleuret brisé", "grisier"],
  "II_1": ["Trouville et ses brigands", "trouville"], "II_2": ["La barque dans la tempête", "cote"], "II_3": ["Les ruines dans la nuit", "abbaye"],
  "III_1": ["La chapelle en ruine", "abbaye"], "III_2": ["L'homme à la clef", "abbaye"], "III_3": ["Le nom du château", "cote"], "III_4": ["La comtesse assassinée", "burcy"],
  "IV_1": ["Retour à l'abbaye", "abbaye"], "IV_2": ["Les caveaux des supérieurs", "abbaye"], "IV_3": ["Une voix derrière la grille", "abbaye"], "IV_4": ["La fuite par la mer", "cote"],
  "V_1": ["Le réveil au port", "trouville"], "V_2": ["Les conditions de la comtesse", "trouville"], "V_3": ["Un passeport pour deux", "trouville"], "V_4": ["La traversée", "manche"],
  "VI_1": ["Le cottage", "londres"], "VI_2": ["Interrogez-moi", "londres"], "VI_3": ["La maison de Piccadilly", "londres"], "VI_4": ["Le serment", "londres"],
  "VII_1": ["Pauline de Meulien", "londres"], "VII_2": ["La chasse au sanglier", "meulien"], "VII_3": ["Le coup de carabine", "meulien"], "VII_4": ["Le Malais", "meulien"], "VII_5": ["L'héritage de Goa", "inde"], "VII_6": ["La tigresse", "inde"], "VII_7": ["Le poignard", "inde"],
  "VIII_1": ["Un génie aux prises avec le monde", "meulien"], "VIII_2": ["Les paroles du comte", "meulien"], "VIII_3": ["La quête du bal", "paris"], "VIII_4": ["Une danse", "paris"], "VIII_5": ["Le chant de Faust", "paris"],
  "IX_1": ["La nuit de larmes", "paris"], "IX_2": ["Le cavalier sur la route", "meulien"], "IX_3": ["La lettre", "meulien"], "IX_4": ["Sois heureuse, ma fille", "meulien"],
  "X_1": ["Les inséparables", "paris"], "X_2": ["Les songes d'Horace", "meulien"], "X_3": ["Le départ pour Burcy", "paris"], "X_4": ["L'arrivée au château", "burcy"],
  "XI_1": ["La chambre Louis XV", "burcy"], "XI_2": ["Le pari", "burcy"], "XI_3": ["Seule avec le Malais", "burcy"], "XI_4": ["La bibliothèque", "burcy"], "XI_5": ["La porte dérobée", "burcy"], "XI_6": ["Trois hommes dans le parc", "burcy"], "XI_7": ["La visite de la nuit", "burcy"],
  "XII_1": ["Le matin", "burcy"], "XII_2": ["La porte fermée à clef", "burcy"], "XII_3": ["Le souterrain", "burcy"], "XII_4": ["Le coup de pistolet", "burcy"],
  "XIII_1": ["Le caveau", "abbaye"], "XIII_2": ["La lampe", "abbaye"], "XIII_3": ["La faim", "abbaye"],
  "XIV_1": ["Frère et sœur", "londres"], "XIV_2": ["Le docteur Sercey", "londres"], "XIV_3": ["L'Écosse de Walter Scott", "ecosse"], "XIV_4": ["Une lettre de ma mère", "londres"], "XIV_5": ["Revenez", "londres"], "XIV_6": ["Le bal de l'ambassade", "paris"],
  "XV_1": ["Le chef de la famille", "paris"], "XV_2": ["Les fontes chargées", "paris"], "XV_3": ["La rencontre", "paris"], "XV_4": ["Les conditions", "paris"], "XV_5": ["Vingt pas", "versailles"],
  "XVI_1": ["La gazette anglaise", "londres"], "XVI_2": ["Le médecin", "londres"], "XVI_3": ["L'avenir du ciel", "londres"], "XVI_4": ["La dernière demeure", "londres"], "XVI_5": ["Naples", "baveno"],
}
