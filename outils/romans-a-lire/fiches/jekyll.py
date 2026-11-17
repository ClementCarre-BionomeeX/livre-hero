# Fiche de « L'Étrange Cas du Dr Jekyll et de Mr Hyde » pour livre.py (traduction de Théo Varlet).
HEAD = """// « L'Étrange Cas du Dr Jekyll et de Mr Hyde » (Strange Case of Dr Jekyll and Mr Hyde), R. L. Stevenson, 1886 : un livre
// à lire, sans choix (lecture: true). Texte : la traduction de Théo Varlet (1871-1938, domaine public), d'après l'édition
// électronique du groupe Ebooks libres et gratuits (2003). Texte gardé tel quel, sauf la typographie et une virgule
// égarée (« plein de, santé »). Tout ce qui n'est pas de Stevenson ou de son traducteur vit dans les tags : gens, lieux,
// mots, résumés des chapitres."""

BASE = {
  "id": "jekyll",
  "title": "L'Étrange Cas du Dr Jekyll et de Mr Hyde",
  "subtitle": "Un roman à lire · R. L. Stevenson, 1886",
  "summary": "Londres, un dimanche. M. Utterson, notaire austère, se promène avec son cousin Enfield quand celui-ci lui montre une porte sans sonnette au fond d'une petite rue, et lui raconte ce qu'il a vu là une nuit d'hiver : un petit homme qui piétinait une enfant, et qui a payé pour se tirer d'affaire avec le chèque d'un gentleman respecté. Utterson connaît ce nom. Il a dans son coffre-fort un testament qui l'inquiète depuis longtemps. Le roman de Stevenson en entier, dans la traduction de Théo Varlet, sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  "tags": ["fantastique", "enquete"],
  "author": "R. L. Stevenson · traduction de Théo Varlet",
  "lecture": True,
  "age": 13,
  "skin": "parchemin",
  "cover": {"motif": "sceau", "color": "#3a2626"},
  "glossary": None,
  "voice": "troisième personne, passé",
  "version": 1,
  "notice": {
    "title": "Un livre de 1886",
    "text": [
      "*L'Étrange Cas du Dr Jekyll et de Mr Hyde* a paru à Londres en janvier 1886. Le roman est donné ici en entier, dans la traduction française de Théo Varlet.",
      "C'est une histoire de peur, courte et serrée : un notaire enquête sur un ami qu'il croit en danger. Le livre raconte des violences, dont un meurtre, et parle d'une drogue qui ronge celui qui la prend.",
      "Les deux derniers chapitres sont des lettres laissées par deux des personnages : le récit y passe à la première personne.",
    ],
  },
  "intro": [],
  "world": {"start": {"place": "laporte", "hour": 14, "gold": 0, "food": 0, "items": [], "kits": {"guerrier": [], "rodeur": [], "voleur": [], "mage": [], "pretre": [], "barde": []}}},
}

CHAPTERS = [
  {"title": "Chapitre I · À propos d'une porte", "text": "Au cours de leur promenade du dimanche, Enfield raconte à son cousin Utterson ce qu'il a vu devant une porte délabrée d'une petite rue : un petit homme qui a piétiné une fillette, puis payé cent livres avec le chèque d'un homme très honorable. L'homme s'appelle Hyde. Utterson, troublé, demande seulement s'il avait bien une clef."},
  {"title": "Chapitre II · En quête de Mr Hyde", "text": "Le testament de son ami le Dr Jekyll lègue tout à Edward Hyde. Utterson va voir le Dr Lanyon, qui s'est brouillé avec Jekyll pour des raisons de science et ne connaît pas Hyde. Le notaire guette la porte nuit après nuit et finit par rencontrer Hyde, qui lui donne son adresse et lui laisse une impression de dégoût qu'il ne s'explique pas. Il apprend de Poole que Hyde a une clef du laboratoire de Jekyll et que les domestiques ont ordre de lui obéir."},
  {"title": "Chapitre III · La parfaite tranquillité du Dr Jekyll", "text": "Après un dîner, Utterson reste seul avec Jekyll et lui parle du testament. Jekyll balaie ses inquiétudes : il peut se débarrasser de Hyde quand il veut. Il fait seulement promettre à Utterson de veiller sur les droits de Hyde s'il lui arrivait malheur."},
  {"title": "Chapitre IV · L'assassinat de Sir Danvers Carew", "text": "Un an plus tard, une servante voit de sa fenêtre Hyde massacrer à coups de canne un vieux gentleman, sir Danvers Carew. On retrouve sur Carew une lettre pour Utterson. Le notaire reconnaît la canne, qu'il avait offerte à Jekyll, et conduit l'inspecteur Newcomen au logis de Hyde à Soho : Hyde a disparu."},
  {"title": "Chapitre V · L'incident de la lettre", "text": "Jekyll, malade, jure qu'il en a fini avec Hyde et montre à Utterson une lettre d'adieu signée de Hyde. Poole assure pourtant qu'aucun messager n'est venu. Le soir, Guest, le clerc d'Utterson, compare l'écriture de cette lettre à celle d'un billet de Jekyll : elles se ressemblent, à la pente près."},
  {"title": "Chapitre VI · Le remarquable incident du Dr Lanyon", "text": "Hyde reste introuvable et Jekyll revit : il reçoit ses amis, fait le bien. Puis sa porte se ferme. Utterson trouve Lanyon mourant, terrifié, qui refuse d'entendre parler de Jekyll. Lanyon meurt quelques semaines plus tard en laissant à Utterson une enveloppe à n'ouvrir qu'après la mort ou la disparition de Jekyll. Utterson la range sans l'ouvrir."},
  {"title": "Chapitre VII · L'incident de la fenêtre", "text": "Utterson et Enfield, passant par la cour, voient Jekyll assis à sa fenêtre et l'invitent à sortir. Au milieu de la conversation, une expression d'horreur traverse son visage et il referme brusquement la fenêtre. Les deux hommes repartent sans un mot."},
  {"title": "Chapitre VIII · La dernière nuit", "text": "Poole vient chercher Utterson : depuis une semaine, l'homme enfermé dans le cabinet du docteur n'a pas sa voix, réclame en vain un produit chez tous les droguistes, et Poole l'a vu masqué. Utterson et Poole enfoncent la porte et trouvent Hyde mort, empoisonné, vêtu d'habits trop grands. De Jekyll, aucune trace : seulement un testament refait au nom d'Utterson, un billet et un pli scellé."},
  {"title": "Chapitre IX · La narration du Dr Lanyon", "text": "Lanyon raconte : une lettre de Jekyll l'a prié d'aller chercher un tiroir dans son cabinet et de le remettre à minuit à un messager. Le messager était Hyde. Devant Lanyon, Hyde a bu un mélange, et s'est changé sous ses yeux en Henry Jekyll. Lanyon ne s'en est pas remis."},
  {"title": "Chapitre X · Henry Jekyll fait l'exposé complet de son cas", "text": "La confession de Jekyll : sa double vie, la drogue qui sépare en lui le bon et le mauvais, la liberté de Hyde, puis Hyde qui prend le dessus et revient seul, sans la drogue. Après le meurtre de Carew, il a lutté, puis a perdu : le sel qui servait au mélange est épuisé et le nouveau ne fait plus effet. Il écrit sa dernière page avant de devenir Hyde pour toujours."},
]

PLACES = {
  "laporte": {"ambiance": "ville", "name": "La porte de la petite rue", "map": "londres", "x": 46, "y": 52, "region": "Londres", "desc": "Une porte écaillée, sans sonnette ni heurtoir, sous un pignon aveugle, dans une petite rue commerçante et proprette. Derrière : une cour."},
  "chezutterson": {"ambiance": "ville", "name": "Chez M. Utterson", "map": "londres", "x": 34, "y": 46, "region": "Londres", "desc": "Le logis de célibataire du notaire : le coin du feu, le cabinet de travail, le coffre-fort."},
  "lanyon": {"ambiance": "ville", "name": "Chez le Dr Lanyon", "map": "londres", "x": 30, "y": 30, "region": "Cavendish Square", "desc": "La maison du Dr Lanyon, sur Cavendish Square, où il reçoit la foule de ses malades."},
  "maisonjekyll": {"ambiance": "ville", "name": "La maison du Dr Jekyll", "map": "londres", "x": 52, "y": 46, "region": "Londres", "desc": "Une belle maison ancienne sur une place, au coin de la petite rue : un vestibule chauffé, des meubles de chêne, un vieux maître d'hôtel."},
  "cabinet": {"ambiance": "nuit", "name": "Le cabinet du docteur", "map": "londres", "x": 50, "y": 53, "region": "Londres", "desc": "Au fond du jardin, l'ancien amphithéâtre de dissection, puis un escalier, une porte de serge rouge et une grande pièce garnie de vitrines, avec trois fenêtres poussiéreuses sur la cour."},
  "riviere": {"ambiance": "nuit", "name": "La rue près du fleuve", "map": "londres", "x": 60, "y": 72, "region": "Londres", "desc": "Une rue tranquille non loin de la Tamise, sous la lune, vue de la fenêtre d'une servante."},
  "soho": {"ambiance": "ville", "name": "Soho", "map": "londres", "x": 40, "y": 40, "region": "Soho", "desc": "Un quartier sale et misérable, avec ses débits de gin, ses gargotes françaises et ses enfants en guenilles, sous le brouillard brun."},
  "parc": {"ambiance": "champs", "name": "Regent's Park", "map": "londres", "x": 28, "y": 18, "region": "Londres", "desc": "Le grand parc au nord de Londres, ses bancs, un beau jour de janvier où le givre fond."},
  "hotel": {"ambiance": "ville", "name": "Un hôtel de Portland Street", "map": "londres", "x": 32, "y": 24, "region": "Londres", "desc": "Un hôtel de Portland Street, un salon particulier, un feu."},
}

PAGES = {
  "I_1": ["La porte sans sonnette", "laporte"],
  "I_2": ["Ce qu'Enfield vit une nuit d'hiver", "laporte"],
  "I_3": ["Un nom : Hyde", "laporte"],
  "II_1": ["Le testament du Dr Jekyll", "chezutterson"],
  "II_2": ["M. Seek", "laporte"],
  "II_3": ["Une nuit de gelée", "laporte"],
  "II_4": ["Chez le Dr Jekyll", "maisonjekyll"],
  "III_1": ["Un dîner entre vieux amis", "maisonjekyll"],
  "IV_1": ["Sous la lune", "riviere"],
  "IV_2": ["Le brouillard sur Soho", "soho"],
  "V_1": ["Dans le cabinet du docteur", "cabinet"],
  "V_2": ["Deux écritures", "chezutterson"],
  "VI_1": ["Le Dr Lanyon", "lanyon"],
  "VI_2": ["Une enveloppe scellée", "chezutterson"],
  "VII_1": ["À la fenêtre", "laporte"],
  "VIII_1": ["La visite de Poole", "chezutterson"],
  "VIII_2": ["La voix derrière la porte", "maisonjekyll"],
  "VIII_3": ["Le billet du droguiste", "maisonjekyll"],
  "VIII_4": ["La hache et le tisonnier", "cabinet"],
  "VIII_5": ["La porte de serge rouge", "cabinet"],
  "VIII_6": ["Trois plis sur le pupitre", "cabinet"],
  "IX_1": ["Une lettre recommandée", "lanyon"],
  "IX_2": ["Le tiroir", "lanyon"],
  "IX_3": ["Le messager de minuit", "lanyon"],
  "IX_4": ["Ce que vit Lanyon", "lanyon", {"fx": {"qui": {
      "hyde": "Le Dr Jekyll lui-même, changé par une drogue de sa composition : son côté mauvais, seul et sans masque.",
      "jekyll": "Un savant respecté, qui a trouvé une drogue capable de le changer en Edward Hyde, et de le ramener."}}}],
  "X_1": ["Les deux natures", "cabinet"],
  "X_2": ["La première nuit", "cabinet"],
  "X_3": ["Devant la glace", "cabinet"],
  "X_4": ["Un déguisement commode", "cabinet"],
  "X_5": ["La main sur le drap", "cabinet"],
  "X_6": ["Le choix", "cabinet"],
  "X_7": ["Un banc de Regent's Park", "parc"],
  "X_8": ["Une nuit à l'hôtel", "hotel"],
  "X_9": ["Le limon de l'abîme", "cabinet"],
  "X_10": ["La dernière dose", "cabinet"],
}

PEOPLE = {
  "utterson": {"name": "M. Utterson", "aka": ["Utterson"], "face": {"age": "mur", "hair": "gris", "coif": "court", "shape": "allonge"}, "qui": "Un notaire de Londres, austère et fidèle à ses amis. Il garde le testament du Dr Jekyll.", "aspect": {"allure": "grand, maigre, triste", "visage": "mine renfrognée, rarement un sourire", "habits": "pardessus sombre", "voix": "froide, avare de mots"}},
  "enfield": {"name": "M. Richard Enfield", "aka": ["Enfield"], "face": {"age": "adulte", "hair": "chatain", "coif": "court"}, "qui": "Un parent éloigné d'Utterson, homme du monde, son compagnon de promenade du dimanche.", "aspect": {"allure": "Londonien bien connu", "signe": "pose le moins de questions possible"}},
  "hyde": {"name": "Mr Hyde", "aka": ["Hyde", "Edward Hyde"], "face": {"age": "jeune", "hair": "noir", "coif": "court", "skin": "porcelaine"}, "qui": "Un petit homme qui a piétiné une fillette dans la rue. Personne ne le connaît, et tous ceux qui le voient le haïssent aussitôt.", "aspect": {"allure": "petit, comme contrefait", "visage": "pâle, un sourire déplaisant", "signe": "inspire un dégoût immédiat", "voix": "rauque, chuchotée, un peu brisée"}},
  "jekyll": {"name": "Le Dr Jekyll", "aka": ["Jekyll", "Henry Jekyll", "Harry Jekyll"], "face": {"age": "mur", "hair": "chatain", "coif": "court", "shape": "carre"}, "qui": "Un médecin riche et estimé, ancien camarade d'Utterson et de Lanyon. Il a fait son testament au profit d'un certain Edward Hyde.", "aspect": {"allure": "grand, bien bâti, la cinquantaine", "visage": "rasé de près, l'air bon", "voix": "chaleureuse"}},
  "lanyon": {"name": "Le Dr Lanyon", "aka": ["Lanyon"], "face": {"age": "mur", "hair": "blanc", "coif": "court", "shape": "rond"}, "qui": "Un médecin célèbre de Cavendish Square, vieil ami d'Utterson et de Jekyll.", "aspect": {"allure": "cordial, actif, plein de santé", "visage": "rubicond, mèche blanchie trop tôt", "voix": "exubérante"}},
  "poole": {"name": "Poole", "aka": ["Poole"], "face": {"age": "ancien", "hair": "gris", "coif": "degarni"}, "qui": "Le maître d'hôtel du Dr Jekyll, à son service depuis vingt ans.", "aspect": {"allure": "vieux domestique digne", "habits": "livrée bien tenue"}},
  "carew": {"name": "Sir Danvers Carew", "aka": ["Carew", "Danvers Carew"], "face": {"age": "ancien", "hair": "blanc", "coif": "court"}, "qui": "Un vieux gentleman, membre du Parlement, client d'Utterson.", "aspect": {"allure": "beau vieillard courtois", "visage": "cheveux blancs, air bienveillant"}},
  "servante": {"name": "La servante", "f": True, "face": {"age": "jeune", "hair": "brun", "coif": "chignon"}, "qui": "Une servante qui vit seule dans une maison près du fleuve. Elle regardait la rue, à sa fenêtre, cette nuit-là.", "aspect": {"allure": "jeune femme rêveuse à sa fenêtre"}},
  "newcomen": {"name": "L'inspecteur Newcomen", "aka": ["Newcomen"], "face": {"age": "adulte", "hair": "brun", "coif": "court", "beard": "moustache"}, "qui": "Un inspecteur de Scotland Yard, chargé de l'enquête sur le meurtre de Carew.", "aspect": {"allure": "policier ambitieux"}},
  "vieille": {"name": "La logeuse de Soho", "f": True, "face": {"age": "ancien", "hair": "blanc", "coif": "chignon", "skin": "ivoire"}, "qui": "La vieille femme qui garde le logis de Hyde à Soho.", "aspect": {"visage": "face d'ivoire, cheveux d'argent", "signe": "méchante sous ses airs polis"}},
  "guest": {"name": "M. Guest", "aka": ["Guest"], "face": {"age": "adulte", "hair": "brun", "coif": "court"}, "qui": "Le principal clerc d'Utterson, grand connaisseur en écritures.", "aspect": {"allure": "clerc discret et fin", "signe": "étudie les écritures"}},
  "bradshaw": {"name": "Bradshaw", "aka": ["Bradshaw"], "face": {"age": "jeune", "hair": "chatain", "coif": "court"}, "qui": "Un valet de pied du Dr Jekyll.", "aspect": {"allure": "jeune valet"}},
}
MEET = {"IV_1": ["servante"], "IV_2": ["vieille"]}

WORDS = {
  "notaire": "Ici, l'homme de loi d'Utterson : en Angleterre, un *lawyer*, qui rédige et garde les testaments et conseille ses clients.",
  "caïnites": "Une secte des premiers siècles qui honorait Caïn. Utterson plaisante : il laisse chacun se perdre à sa façon.",
  "morticole": "Un mot moqueur pour un médecin.",
  "Coutts": "Une grande banque de Londres, celle des familles riches.",
  "olographe": "Un testament écrit en entier, daté et signé de la main de celui qui le fait.",
  "Cavendish square": "Une place élégante de Londres, où vivaient de nombreux médecins célèbres.",
  "Damon et Pythias": "Deux amis de la Grèce antique, restés fidèles l'un à l'autre jusque devant la mort.",
  "M. Seek": "Un jeu de mots de Stevenson : en anglais, *hide* veut dire « se cacher » et *seek* « chercher ». Si l'autre est M. Cache, Utterson sera M. Cherche, comme au jeu de cache-cache.",
  "pede claudo": "« D'un pied boiteux », en latin : le châtiment arrive lentement, mais il arrive.",
  "maître d'hôtel": "Le premier des domestiques d'une grande maison.",
  "cab": "Une voiture à cheval de louage, à deux roues, le taxi de l'époque.",
  "Soho": "Un quartier populaire du centre de Londres, connu pour ses étrangers et ses débits de boisson.",
  "amphithéâtre": "Une salle en gradins où l'on enseignait la médecine en disséquant des corps.",
  "psyché": "Un grand miroir monté sur un cadre, qu'on peut incliner pour se voir en pied.",
  "droguiste": "Un marchand de produits chimiques et de remèdes.",
  "Regent's Park": "Un grand parc royal au nord du centre de Londres.",
  "Portland Street": "Une rue de Londres, près de Regent's Park.",
  "Babylone": "Dans la Bible, une main écrit sur le mur du palais de Babylone l'annonce de la chute du roi.",
}
