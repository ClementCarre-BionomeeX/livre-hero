# Fiche de « Les Mille et Un Fantômes » (id fantomes) pour livre.py (texte de Dumas, 1849).
# Texte : gut.py sur Gutenberg n° 15208 (miroir orkeilius/gutenberg_fr_mirror), entre fiches/fantomes_texte.py pre et post.
HEAD = """// « Les Mille et Un Fantômes », Alexandre Dumas, 1849 : un livre à lire, sans choix (lecture: true). Texte de Dumas,
// domaine public, d'après l'édition numérique du projet Gutenberg. Les titres des chapitres sont ceux de Dumas ; les
// titres des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude."""

BASE = {
  "id": "fantomes",
  "title": "Les Mille et Un Fantômes",
  "subtitle": "Un livre à lire · Alexandre Dumas, 1849",
  "summary": "Fontenay-aux-Roses, 1er septembre 1831. Dumas venait chasser ; il assiste aux aveux d'un carrier qui a tué sa femme et jure que la tête lui a parlé. Le soir, chez le maire, de vieux témoins de la Révolution et une dame d'une pâleur de marbre racontent, chacun à son tour, ce qu'ils ont vu de l'autre monde.",
  "tags": ["fantastique", "historique"],
  "author": "Alexandre Dumas",
  "lecture": True,
  "age": 14,
  "skin": "parchemin",
  "cover": {"motif": "lune", "color": "#2b2f3a"},
  "glossary": None,
  "voice": "première personne, passé",
  "version": 1,
  "notice": {
    "title": "Des contes noirs de 1849",
    "reminder": "Ce chapitre montre la mort de près : meurtre, guillotine ou pendaison.",
    "text": [
      "*Les Mille et Un Fantômes* ont paru en 1849. Le texte est celui de Dumas, sans retouche, d'après l'édition illustrée Calmann-Lévy numérisée par le projet Gutenberg ; les légendes des gravures ne sont pas reprises. Les titres des chapitres sont ceux de Dumas, et la lettre qui ouvre le livre sert de préface.",
      "Le livre est un dîner où chacun raconte : le narrateur, Dumas lui-même, écoute le maire Ledru, un médecin sceptique, un antiquaire, un prêtre, un vieux cartomancien et une dame pâle. Plusieurs convives sont des personnages réels de l'époque, et les récits mêlent l'histoire de la Terreur au fantastique.",
      "Les contes sont noirs : un meurtre et une tête tranchée, la guillotine et les expériences sur les suppliciés, une profanation de tombeaux, un pendu, un vampire. Dumas les raconte avec précision.",
    ],
  },
  "intro": [],
  "world": {"start": {"place": "fontenay", "hour": 5, "gold": 0, "food": 0, "items": [], "kits": {"guerrier": [], "rodeur": [], "voleur": [], "mage": [], "pretre": [], "barde": []}}},
}

def roman(n):
    out = ''
    for v, r in ((100, 'C'), (90, 'XC'), (50, 'L'), (40, 'XL'), (10, 'X'), (9, 'IX'), (5, 'V'), (4, 'IV'), (1, 'I')):
        while n >= v: out += r; n -= v
    return out

TITRES = [
  "À M. ***",
  "La rue de Diane à Fontenay-aux-Roses",
  "L'impasse des Sergents",
  "Le procès-verbal",
  "La maison de Scarron",
  "Le soufflet de Charlotte Corday",
  "Solange",
  "Albert",
  "Le chat, l'huissier et le squelette",
  "Les tombeaux de Saint-Denis",
  "L'Artifaille",
  "Le bracelet de cheveux",
  "Les monts Carpathes",
  "Le château de Brankovan",
  "Les deux frères",
  "Le monastère de Hango",
]


R = [
  "Lettre de Dumas à un ami : on lui demande des contes, il en donnera, et il dit son regret d'une société disparue, celle de l'ancien régime, qu'il a encore entrevue enfant chez madame de Montesson.",
  "Le 1er septembre 1831, le narrateur, Dumas lui-même, vient chasser à Fontenay-aux-Roses. Le gibier est rare. Vers une heure, dans la rue de Diane, un homme aux mains sanglantes s'assoit sur une borne et fait dire au maire qu'il a tué sa femme.",
  "Le meurtrier, le carrier Jacquemin, supplie le maire, M. Ledru, de ne pas le quitter : il a vu quelque chose de terrible. On descend avec lui dans la cave, où gît le corps de sa femme.",
  "Le commissaire de police dresse son procès-verbal devant le docteur Robert, l'abbé Moulle, le maire et le narrateur. Jacquemin avoue : jalousie, une épée, la tête tranchée. Mais la tête l'a mordu au pouce, et elle a parlé. Le docteur croit à la folie, ou à la ruse.",
  "M. Ledru invite le narrateur à son dîner du jeudi, dans l'ancienne maison de Scarron. Il lui présente ses hôtes : Alliette, le vieux cartomancien, l'abbé Moulle, ami de Cazotte, le chevalier Lenoir, l'antiquaire, et le docteur. Au jardin, sous les tilleuls, attend une dame pâle et blonde, vêtue de noir, qui semble à peine vivante.",
  "À table, on dispute : une tête coupée peut-elle sentir et parler ? Le docteur dit non, tous les autres disent oui. M. Ledru, ancien ami de Danton, raconte qu'il a vu sous la Terreur un nommé Legros souffleter la tête de Charlotte Corday, et la tête rougir. Legros le lui a dit en face : les têtes vivent encore dans le panier.",
  "Le récit de M. Ledru continue : en 1793, il sauve d'une patrouille une jeune aristocrate déguisée, Solange, qui ne lui connaît que son prénom, Albert. Grâce à Marceau, il fait passer le père de Solange en Angleterre. Elle devait le rejoindre ; elle reste, par amour.",
  "Ledru fait des expériences sur les suppliciés dans une ancienne chapelle du cimetière de Clamart. Un soir de grandes exécutions, l'une des têtes ouvre les yeux et lui parle : c'est celle de Solange, arrêtée et guillotinée le jour même.",
  "Le docteur Robert, qui ne croit qu'aux hallucinations, raconte un cas d'Édimbourg : un juge qui a fait pendre un bandit voit chaque soir un chat, puis un huissier de cour, puis un squelette, que personne d'autre ne voit. Trois mois jour pour jour après l'exécution, on le trouve mort dans son lit.",
  "Le chevalier Lenoir raconte l'ouverture des tombeaux royaux de Saint-Denis, en 1793. Un ouvrier soufflette le corps de Henri IV ; la nuit suivante, on l'entend gémir dans la fosse commune où l'ont mené une femme et des rois en colère. Un vieux gardien prophétise que les rois reviendront à Saint-Denis, et la prophétie s'accomplit en 1824.",
  "L'abbé Moulle croit aux bons et aux mauvais génies. Jeune vicaire à Étampes, il a surpris dans son église le bandit l'Artifaille, l'a ramené à Dieu au prix de toutes ses économies, et lui a donné la médaille qu'il portait depuis sa naissance. Pendu un an plus tard, l'Artifaille fait demander des prières sous son gibet. Cette nuit-là, l'abbé voit le bourreau, venu voler la médaille, se faire pendre par le mort.",
  "Alliette, qui se croit plusieurs fois réincarné, raconte l'histoire d'une jeune femme de Bâle : partie aux eaux, elle perd son mari, qui demandait qu'elle porte un bracelet de ses cheveux. Les cheveux sont perdus ; chaque nuit, un bracelet de fer invisible lui serre le poignet. Puis la dame pâle prend la parole : elle va dire pourquoi elle est si pâle.",
  "La dame pâle, Hedwige, est polonaise. En 1825, devant l'avance des Russes, son père l'envoie avec dix serviteurs vers un monastère des Carpathes. Des partisans moldaves attaquent ; leur chef, Kostaki, la réclame, mais son frère Grégoriska arrête le combat et exige qu'on la conduise à leur mère. Kostaki l'emporte à cheval jusqu'à un vieux château.",
  "Au château de Brankovan, le maître est Grégoriska, demi-frère de Kostaki, élevé dans les cours d'Europe. Il révèle à Hedwige l'histoire de sa mère, la princesse Smérande, et lui conseille la plus grande prudence.",
  "Les deux frères aiment Hedwige : Kostaki par la menace, Grégoriska par les égards. Elle aime Grégoriska, qui prépare leur fuite. Le soir prévu, Kostaki part sur la route du monastère de Hango ; son cheval revient seul, couvert de sang. Devant le corps, les yeux du mort se rouvrent et se fixent sur Hedwige.",
  "Chaque nuit, à l'heure de sa mort, Kostaki revient boire le sang d'Hedwige. Grégoriska l'épouse pour avoir le droit de la défendre, et affronte son frère au cimetière de Hango, avec une épée bénie. Hedwige se tait, minuit sonne. Un an plus tard, M. Ledru meurt, et le narrateur réunit les contes qu'il a recueillis depuis.",
]

def titre(i, t):
    if i == 0: return t
    return "Chapitre " + roman(i) + " · " + t
CHAPTERS = [{"title": titre(i, t), "text": r} for i, (t, r) in enumerate(zip(TITRES, R))]
for i in (2, 3, 7, 10, 15): CHAPTERS[i]["notice"] = True

PLACES = {
  "paris": {"ambiance": "ville", "name": "Paris", "map": "paris", "x": 50, "y": 45, "region": "Paris", "desc": "Sous la Terreur : les patrouilles de sans-culottes, le club des Cordeliers, la place de la Révolution et son échafaud, une petite chambre rue Taranne."},
  "fontenay": {"ambiance": "village", "name": "Fontenay-aux-Roses", "map": "paris", "x": 45, "y": 85, "region": "Au sud de Paris", "desc": "Un village de jardins et de roses, au-delà des carrières de Montrouge et de leurs grandes roues ; une Grande-Rue, et la petite rue de Diane."},
  "cave": {"ambiance": "souterrain", "name": "La cave de l'impasse des Sergents", "map": "paris", "x": 47, "y": 88, "region": "Fontenay-aux-Roses", "desc": "Une maison calme, un rosier, un chat roux au soleil ; en bas, une cave éclairée d'une chandelle posée sur un tonneau."},
  "maison": {"ambiance": "village", "name": "La maison de M. Ledru", "map": "paris", "x": 43, "y": 84, "region": "Fontenay-aux-Roses, rue de Diane", "desc": "L'ancienne maison de Scarron : sa chambre, ses cartes du Tendre, une grande table en fer à cheval et un salon où la nuit tombe pendant qu'on raconte."},
  "jardin": {"ambiance": "village", "name": "Le jardin de M. Ledru", "map": "paris", "x": 42, "y": 86, "region": "Fontenay-aux-Roses", "desc": "Un jardin de curé, avec son quinconce de tilleuls, ses dahlias, ses rosiers et ses espaliers, et une vue immense sur la plaine."},
  "clamart": {"ambiance": "nuit", "name": "Le cimetière de Clamart", "map": "paris", "x": 30, "y": 80, "region": "Au sud de Paris", "desc": "Des tombes fraîchement remuées, des arbres rares qui cliquettent au vent, la grande fosse du jour, et une ancienne chapelle changée en laboratoire."},
  "saintdenis": {"ambiance": "temple", "name": "L'abbaye de Saint-Denis", "map": "paris", "x": 55, "y": 8, "region": "Au nord de Paris", "desc": "La basilique des rois de France, ses caveaux ouverts en 1793, son cimetière et sa fosse commune, et le cabaret d'en face."},
  "edimbourg": {"ambiance": "ville", "name": "Édimbourg", "map": "europe", "x": 36, "y": 14, "region": "Écosse", "desc": "La maison d'un juge du tribunal criminel, son cabinet de travail, sa grande glace et le fauteuil en face du lit."},
  "etampes": {"ambiance": "temple", "name": "Notre-Dame d'Étampes", "map": "france", "x": 50, "y": 30, "region": "Étampes", "desc": "Une église romane aux vitraux admirables, un confessionnal dans l'ombre, un tabernacle, et une châsse de la Vierge couronnée d'or."},
  "gibet": {"ambiance": "nuit", "name": "La Justice d'Étampes", "map": "france", "x": 51, "y": 31, "region": "Hors de la porte de Paris", "desc": "Le gibet de la ville, dans la plaine, où l'on pend les voleurs et les assassins, sous une lune qui roule entre les nuages."},
  "suisse": {"ambiance": "montagne", "name": "La route de Bâle à Louèche", "map": "europe", "x": 50, "y": 50, "region": "Suisse", "desc": "Une route de diligence par Berne, Thun et le col de la Gemmi, jusqu'aux eaux de Louèche."},
  "carpathes": {"ambiance": "montagne", "name": "Les monts Carpathes", "map": "europe", "x": 70, "y": 45, "region": "Entre Pologne et Moldavie", "desc": "Des pics, des forêts sans limites, des steppes sans fin, des sentiers de bêtes fauves, et des partisans embusqués aux flancs de la montagne."},
  "brankovan": {"ambiance": "chateau", "name": "Le château de Brankovan", "map": "europe", "x": 74, "y": 50, "region": "Moldavie", "desc": "Un château du quatorzième siècle, des escaliers éclairés de torches de résine, une chambre aux portes qui ferment en dedans, et une chapelle."},
  "hango": {"ambiance": "temple", "name": "Le monastère de Hango", "map": "europe", "x": 76, "y": 52, "region": "Moldavie", "desc": "Un monastère à une demi-lieue du château par le droit chemin, avec la tombe des Brankovan dans un cimetière clos d'arbousiers."},
}


PEOPLE = {
  "jacquemin": {"name": "Pierre Jacquemin", "aka": ["Jacquemin", "Pierre Jacquemin"], "face": {"age": "adulte", "hair": "brun", "coif": "court", "skin": "hale", "beard": "barbe"}, "qui": "Un carrier de Fontenay-aux-Roses, qui vient d'avouer un meurtre.", "aspect": {"allure": "mains sanglantes, habits de carrier", "signe": "tremble de terreur"}},
  "antoine": {"name": "La mère Antoine", "aka": ["mère Antoine"], "face": {"age": "ancien", "hair": "gris", "coif": "chignon", "skin": "hale"}, "qui": "La servante du maire de Fontenay.", "aspect": {"allure": "tablier, bonnet de servante"}},
  "ledru": {"name": "M. Ledru", "aka": ["M. Ledru", "monsieur Ledru", "Ledru"], "face": {"age": "ancien", "hair": "blanc", "coif": "court", "skin": "clair"}, "qui": "Le maire de Fontenay-aux-Roses, savant, hospitalier, qui reçoit ses amis chaque jeudi dans l'ancienne maison de Scarron.", "aspect": {"allure": "grande taille, habit simple", "signe": "dîne à deux heures"}},
  "robert": {"name": "Le docteur Robert", "aka": ["docteur Robert"], "face": {"age": "adulte", "hair": "brun", "coif": "court", "skin": "clair"}, "qui": "Un médecin de Fontenay, bruyant et sceptique, qui ne croit qu'à ce qu'il touche.", "aspect": {"allure": "chandelle à la main, trousse sous le bras", "signe": "rit des revenants"}},
  "moulle": {"name": "L'abbé Moulle", "aka": ["abbé Moulle", "Moulle"], "face": {"age": "ancien", "hair": "blanc", "coif": "court", "skin": "clair"}, "qui": "Un prêtre de Saint-Sulpice, homme du monde, ancien ami de Cazotte.", "aspect": {"allure": "soutane soignée, voix douce"}},
  "alliette": {"name": "Alliette", "aka": ["Alliette", "Etteilla"], "face": {"age": "ancien", "hair": "gris", "coif": "long", "skin": "beige"}, "qui": "Un vieux cartomancien, qui se dit plusieurs fois revenu au monde et a connu Cagliostro.", "aspect": {"allure": "habit râpé, jeu de cartes en poche"}},
  "lenoir": {"name": "Le chevalier Lenoir", "aka": ["chevalier Lenoir", "Lenoir"], "face": {"age": "ancien", "hair": "blanc", "coif": "court", "skin": "clair"}, "qui": "Un antiquaire, qui a sauvé sous la Révolution les monuments des églises.", "aspect": {"allure": "lunettes, mains d'archiviste"}},
  "hedwige": {"name": "Hedwige", "aka": ["Hedwige", "Edwige", "dame pâle"], "face": {"age": "jeune", "hair": "blond", "coif": "long", "skin": "porcelaine"}, "qui": "Une dame vêtue de noir, d'une pâleur de marbre, qui écoute sans rien dire chez M. Ledru.", "aspect": {"allure": "robe noire, grand châle", "signe": "une pâleur de morte"}},
  "solange": {"name": "Solange", "aka": ["Solange"], "face": {"age": "jeune", "hair": "brun", "coif": "long", "skin": "clair"}, "qui": "Une jeune aristocrate cachée sous la Terreur, sous le costume d'une fille du peuple.", "aspect": {"allure": "costume de grisette, mains de reine", "signe": "lèvres railleuses"}},
  "legros": {"name": "Legros", "aka": ["Legros"], "face": {"age": "adulte", "hair": "noir", "coif": "court", "skin": "hale"}, "qui": "Un homme de l'échafaud, sous la Terreur.", "aspect": {"allure": "bonnet rouge, manches retroussées"}},
  "sympson": {"name": "Le docteur Sympson", "aka": ["docteur Sympson"], "face": {"age": "mur", "hair": "gris", "coif": "court", "skin": "clair"}, "qui": "Un médecin d'Édimbourg, qui a accompagné Walter Scott en France.", "aspect": {"allure": "redingote noire"}},
  "john": {"name": "John", "aka": ["John"], "face": {"age": "adulte", "hair": "roux", "coif": "court", "skin": "clair"}, "qui": "Le domestique d'un juge d'Édimbourg.", "aspect": {"allure": "livrée, chandelier à la main"}},
  "artifaille": {"name": "L'Artifaille", "aka": ["Artifaille"], "face": {"age": "adulte", "hair": "noir", "coif": "court", "skin": "hale", "beard": "barbe"}, "qui": "Un voleur fameux des environs d'Étampes, dont on dit qu'il connaît l'herbe qui coupe le fer.", "aspect": {"allure": "pistolet à la ceinture, fausse clef", "signe": "s'évade de toutes les prisons"}},
  "kostaki": {"name": "Kostaki", "aka": ["Kostaki"], "face": {"age": "jeune", "hair": "noir", "coif": "long", "skin": "hale", "beard": "moustache"}, "qui": "Un jeune chef de partisans moldaves, violent et passionné.", "aspect": {"allure": "sabre sous le bras, longs cheveux noirs", "signe": "un sourire de menace"}},
  "gregoriska": {"name": "Grégoriska", "aka": ["Grégoriska"], "face": {"age": "jeune", "hair": "blond", "coif": "long", "skin": "clair"}, "qui": "Le frère aîné de Kostaki, élevé dans les cours d'Europe, maître du château de Brankovan.", "aspect": {"allure": "mains blanches couvertes de bagues", "signe": "de grands yeux bleus"}},
  "smerande": {"name": "La princesse Smérande", "aka": ["Smérande", "princesse Brankovan"], "face": {"age": "mur", "hair": "blanc", "coif": "tresses", "skin": "clair"}, "qui": "La mère de Kostaki et de Grégoriska, dernière princesse de la lignée des Brankovan.", "aspect": {"allure": "tunique d'or, bonnet de zibeline"}},
  "bazile": {"name": "Le père Bazile", "aka": ["père Bazile"], "face": {"age": "ancien", "hair": "blanc", "coif": "rase", "skin": "clair", "beard": "longue"}, "qui": "Le supérieur du monastère de Hango.", "aspect": {"allure": "robe de moine, croix sur la poitrine"}},
}

NO_AUTO = ["hedwige"]
MEET = {"IV_5": ["hedwige"]}

WORDS = {
  "carrier|carriers": "Un ouvrier qui extrait la pierre d'une carrière.",
  "moellon|moellons": "Une pierre de construction grossièrement taillée.",
  "procès-verbal": "Un rapport écrit et signé par un agent de l'autorité sur ce qu'il a constaté.",
  "cartomancie": "L'art de prédire l'avenir par les cartes.",
  "démonologie": "L'étude des démons et de leur pouvoir.",
  "sans-culottes": "Sous la Révolution, les révolutionnaires du peuple, qui portaient le pantalon au lieu de la culotte des nobles.",
  "muscadin": "Sous la Révolution, un jeune homme élégant, suspect d'être royaliste.",
  "tabernacle": "Dans une église, le petit coffre fermé à clef, sur l'autel, où l'on garde les hosties consacrées.",
  "ostensoir": "Une pièce d'orfèvrerie où l'on expose l'hostie à l'adoration des fidèles.",
  "ciboire": "Le vase sacré où l'on garde les hosties.",
  "châsse": "Un coffre précieux qui contient les reliques d'un saint.",
  "présidial": "Sous l'Ancien Régime, un tribunal de province.",
  "gibet": "Une potence où l'on pendait les condamnés.",
  "érésypèle": "Une inflammation de la peau, avec fièvre.",
  "litière": "Un lit couvert porté par des hommes ou des chevaux.",
  "partisans": "Des combattants qui font la guerre en petites bandes, hors de l'armée régulière.",
  "yatagan": "Un sabre turc à lame recourbée.",
  "vampire": "Un mort qui sort de sa tombe pour boire le sang des vivants.",
  "zibeline": "Une petite bête des pays froids, à la fourrure précieuse ; cette fourrure.",
}


PAGES = {
  "P_1": ["À un ami", "paris"], "P_2": ["La société qui s'en va", "paris"],
  "I_1": ["L'ouverture de la chasse", "fontenay"], "I_2": ["Les carrières de Montrouge", "fontenay"], "I_3": ["Rue de Diane", "fontenay"],
  "II_1": ["Jacquemin", "fontenay"], "II_2": ["Si j'avais su", "fontenay"], "II_3": ["La cave", "cave"],
  "III_1": ["Le procès-verbal", "cave"], "III_2": ["Cejourd'hui", "cave"], "III_3": ["La cause du crime", "cave"], "III_4": ["La morsure", "cave"],
  "IV_1": ["La maison de Scarron", "maison"], "IV_2": ["Le cabinet secret", "maison"], "IV_3": ["Alliette", "maison"], "IV_4": ["L'abbé Moulle", "maison"], "IV_5": ["La dame pâle", "jardin"],
  "V_1": ["La table en fer à cheval", "maison"], "V_2": ["Les têtes parleraient", "maison"], "V_3": ["Trente-sept ans de silence", "maison"], "V_4": ["Charlotte Corday", "maison"],
  "VI_1": ["La patrouille", "paris"], "VI_2": ["Danton", "paris"], "VI_3": ["Solange", "paris"], "VI_4": ["Un passeport", "paris"], "VI_5": ["Elle resta", "paris"],
  "VII_1": ["Rue Taranne", "paris"], "VII_2": ["Le fossé de l'échafaud", "paris"], "VII_3": ["Clamart", "clamart"], "VII_4": ["La tête", "clamart"],
  "VIII_1": ["Le docteur Sympson", "maison"], "VIII_2": ["Le chat", "edimbourg"], "VIII_3": ["John", "edimbourg"], "VIII_4": ["L'huissier", "edimbourg"], "VIII_5": ["Le grand commissaire", "edimbourg"], "VIII_6": ["Le squelette", "edimbourg"],
  "IX_1": ["Les traces des spectres", "maison"], "IX_2": ["Henri IV debout", "saintdenis"], "IX_3": ["Le soufflet", "saintdenis"], "IX_4": ["Les plaintes du cimetière", "saintdenis"], "IX_5": ["Le cabaretier", "saintdenis"], "IX_6": ["La femme dans la ruelle", "saintdenis"],
  "X_1": ["Les deux génies", "maison"], "X_2": ["Notre-Dame d'Étampes", "etampes"], "X_3": ["L'herbe qui coupe le fer", "etampes"], "X_4": ["Le voleur dans l'église", "etampes"], "X_5": ["La médaille", "etampes"], "X_6": ["Le pendu", "etampes"], "X_7": ["La Justice", "gibet"], "X_8": ["Le bourreau sur l'échelle", "gibet"], "X_9": ["Ce que le mort a fait", "gibet"], "X_10": ["Sauvé", "etampes"],
  "XI_1": ["La mort tue la mémoire", "maison"], "XI_2": ["Le départ de Bâle", "suisse"], "XI_3": ["Le cavalier fantôme", "suisse"], "XI_4": ["Le bracelet", "suisse"],
  "XII_1": ["Sandomir", "carpathes"], "XII_2": ["Les monts Carpathes", "carpathes"], "XII_3": ["Le guide abattu", "carpathes"], "XII_4": ["Le jeune chef", "carpathes"],
  "XIII_1": ["Le château de Brankovan", "brankovan"], "XIII_2": ["Ce que Grégoriska révèle", "brankovan"], "XIII_3": ["La princesse Smérande", "brankovan"],
  "XIV_1": ["Les deux frères", "brankovan"], "XIV_2": ["La porte de la chambre", "brankovan"], "XIV_3": ["La route du monastère", "brankovan"], "XIV_4": ["L'attente", "brankovan"], "XIV_5": ["Le cheval couvert de sang", "brankovan"],
  "XV_1": ["L'enterrement", "brankovan"], "XV_2": ["Les visites de la nuit", "brankovan"], "XV_3": ["Le rameau béni", "brankovan"], "XV_4": ["Le spectre", "brankovan"], "XV_5": ["La course des morts", "hango"], "XV_6": ["Le cimetière de Hango", "hango"],
}
