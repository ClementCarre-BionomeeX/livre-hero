# Fiche de « Gabriel Lambert » (id lambert) pour livre.py (texte de Dumas, 1844).
# Texte : gut.py sur Gutenberg n° 46747 (miroir orkeilius/gutenberg_fr_mirror), entre fiches/lambert_texte.py pre et post.
HEAD = """// « Gabriel Lambert », Alexandre Dumas, 1844 : un livre à lire, sans choix (lecture: true). Texte de Dumas,
// domaine public, d'après l'édition numérique du projet Gutenberg. Les titres des chapitres sont ceux de Dumas ; les
// titres des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude."""

BASE = {
  "id": "lambert",
  "title": "Gabriel Lambert",
  "subtitle": "Un roman à lire · Alexandre Dumas, 1844",
  "summary": "Toulon, 1835. Parmi les forçats qui rament pour lui, Dumas croit reconnaître un homme croisé autrefois dans les salons de Paris. Un nom gravé sur une carte de visite, un duel au bois de Boulogne, le journal d'un médecin et la confession d'une jeune paysanne normande remontent peu à peu le fil d'une vie fausse de bout en bout.",
  "tags": ["drame", "intrigue"],
  "author": "Alexandre Dumas",
  "lecture": True,
  "age": 14,
  "skin": "parchemin",
  "cover": {"motif": "plume", "color": "#3a3a46"},
  "glossary": None,
  "voice": "première personne, passé",
  "version": 1,
  "notice": {
    "title": "Un roman de 1844, au temps de la peine de mort",
    "reminder": "Ce chapitre parle de la peine de mort ou d'un suicide.",
    "text": [
      "*Gabriel Lambert* a paru en 1844. Le texte est celui de Dumas, sans retouche, d'après l'édition numérisée par le projet Gutenberg ; le volume contenait aussi d'autres récits, qui ne sont pas repris ici.",
      "Le narrateur est Dumas lui-même, et le roman se présente comme une histoire vraie qu'on lui a racontée. Une grande partie en est faite de récits rapportés : le journal du docteur Fabien, la confession de Marie Granger, une lettre de forçat écrite dans la langue du bagne.",
      "En 1844, la loi française punit encore de mort les faussaires, et la guillotine est publique. Le livre parle de condamnation à mort, de grâce royale, de la vie des forçats, et raconte un suicide en détail, sur le ton froid d'un témoin.",
    ],
  },
  "intro": [],
  "world": {"start": {"place": "bastide", "hour": 9, "gold": 0, "food": 0, "items": [], "kits": {"guerrier": [], "rodeur": [], "voleur": [], "mage": [], "pretre": [], "barde": []}}},
}

def roman(n):
    out = ''
    for v, r in ((100, 'C'), (90, 'XC'), (50, 'L'), (40, 'XL'), (10, 'X'), (9, 'IX'), (5, 'V'), (4, 'IV'), (1, 'I')):
        while n >= v: out += r; n -= v
    return out

TITRES = [
  "Le forçat",
  "Henry de Faverne",
  "Le foyer de l'Opéra",
  "Préparatifs",
  "L'allée de la Muette",
  "Le manuscrit",
  "",
  "Le malade",
  "Le billet de cinq cents francs",
  "Un coin du voile",
  "Un terrible aveu",
  "Départ pour Paris",
  "Confession",
  "Suite de la confession",
  "La bouquetière",
  "Catastrophe",
  "Bicêtre",
  "Une veillée du roi",
  "Le pendu",
  "Procès-verbal",
]


R = [
  "Toulon, mai 1835. Le narrateur, Dumas lui-même, s'est retiré dans une bastide pour écrire, et le commandant du port met à son service une barque montée par douze forçats. L'un d'eux, Gabriel, refuse avec hauteur de faire une course ; le garde-chiourme le raille en l'appelant « monsieur le docteur ».",
  "Le narrateur cherche en vain où il a déjà vu cet homme. Le lendemain, Gabriel Lambert s'est fait porter malade ; un autre forçat, Rossignol, fait signe qu'il y a un message. Sous une pierre, le narrateur trouve une carte de visite : « Le vicomte Henry de Faverne ».",
  "Le nom réveille un souvenir. Un soir de Robert le Diable, au foyer de l'Opéra, le baron Olivier d'Hornoy, de retour de la Guadeloupe, a frappé de sa canne ce Faverne, qui se disait créole de l'île. Olivier assure que c'est faux. On se battra le lendemain à six heures, allée de la Muette.",
  "Le narrateur réunit les témoins : Alfred de Nerval, qui sort d'une nuit de jeu et ne parle que de cartes, et le docteur Fabien. Olivier a passé la nuit à écrire ses lettres.",
  "Au bois de Boulogne, Olivier montre son calme : son pouls bat comme au repos. Faverne, livide, a appris l'escrime sur le tard ; Olivier le blesse gravement, et Fabien le prend en charge.",
  "De retour à Paris, le narrateur va trouver Fabien, qui a soigné le blessé, et lui demande ce qu'il sait de cet homme. Le docteur lui remet son journal.",
  "Journal de Fabien. Faverne blessé n'a personne : ni père, ni mère, ni parent. Il murmure peut-être un nom de femme, Louise, et veut qu'on ferme sa porte à double tour.",
  "Le blessé injurie Olivier, qui l'aurait calomnié ; Fabien, ami d'Olivier depuis dix ans, menace de se retirer, et Faverne croit le retenir par l'argent. Le comte de Macartie fait prendre de ses nouvelles, ce qui rassure fort le blessé.",
  "La blessure guérit vite. Faverne s'intéresse fort à une loi qui remplacerait la mort par les galères pour les faussaires, et glisse des billets de banque à Fabien. Fabien paie un bijoutier avec ces billets ; l'un d'eux est faux, la police vient chez le docteur, et le bijoutier est lavé de tout soupçon.",
  "Trois mois plus tard, un billet plein de fautes rappelle Fabien rue Taitbout : le « baron » de Faverne est malade de peur. Il boit le rhum à pleins verres et demande au médecin un poison sûr, de l'acide prussique.",
  "À minuit, Faverne avoue : il n'est ni baron ni créole, et une jeune paysanne, assise avec son enfant sur une borne au coin de la rue Taitbout, menace son mariage. Fabien recueille Marie Granger, de Trouville, qui raconte : Gabriel Lambert, fils du paysan Thomas Lambert, imitait toutes les écritures et toutes les gravures, et détestait les travaux des champs.",
  "Le maire prend Gabriel pour secrétaire. Un banquier lui montre un billet de cinq cents francs ; Gabriel le dévore des yeux et dit qu'il serait facile à imiter. Le billet porte : « La loi punit de mort le contrefacteur ». Muni de mille francs, il part pour Paris, après une dernière nuit avec Marie.",
  "Une lettre de Paris arrive, puis plus rien. Marie se sait enceinte. Le maire lui conseille d'épouser le pêcheur André Morin ; elle se confie au vieux curé, qui savait déjà, et qui l'aide.",
  "Thomas Lambert part pour Paris et en revient muet. L'enfant naît en secret. Le maire raconte avoir vu Gabriel à Paris, riche, à cheval, en homme du monde. Marie décide de partir.",
  "À Paris, Marie apprend que Gabriel a vécu enfermé chez un graveur sur cuivre. Déguisée en bouquetière pour approcher de l'Opéra, elle le voit au bras d'une dame, avec un homme âgé et une jeune fille charmante. C'est cette nuit-là que Fabien l'a recueillie.",
  "Faverne convoque Fabien : Marie refuse l'argent, elle veut le mariage. Le baron paie un porteur en billets ; le porteur est un agent de police, V…, qui l'arrête comme faussaire. Le prisonnier joue l'évanouissement et le suicide, l'agent s'en moque et trouve dans le secrétaire une centaine de faux billets. Marie repart pour Trouville.",
  "Six mois plus tard, Gabriel Lambert, condamné à mort, appelle Fabien à Bicêtre la veille de son exécution. Son vieux père est près de lui. Le condamné supplie Fabien, médecin du roi, d'aller demander sa grâce : même les galères à perpétuité valent mieux que la mort.",
  "Aux Tuileries, le roi, seul dans son cabinet, étudie le dossier pendant qu'on rit au salon de la reine, et commue la peine. À Bicêtre, à minuit, le père apprend que son fils ira au bagne : il le maudit et s'en va. Fin du récit de Fabien.",
  "En juin 1841, le narrateur reçoit une lettre de Rossignol, le forçat de la barque. Il a été rivé à la même chaîne que Gabriel, qui voulait mourir sans oser se tuer. Rossignol raconte, avec une gouaille terrible, comment il l'a « aidé » à se pendre à un mûrier du port.",
  "En octobre 1842, à Toulon, le secrétaire du commandant du port montre au narrateur le procès-verbal de la mort de Gabriel Lambert. Le surveillant y note que son compagnon paraissait dormir, mais ne dormait pas.",
]

def titre(i, t):
    if not t: return "Chapitre " + roman(i + 1)
    return "Chapitre " + roman(i + 1) + " · " + t
CHAPTERS = [{"title": titre(i, t), "text": r} for i, (t, r) in enumerate(zip(TITRES, R))]
for i in (16, 18): CHAPTERS[i]["notice"] = True

PLACES = {
  "bastide": {"ambiance": "port", "name": "La bastide du fort Lamalgue", "map": "france", "x": 72, "y": 88, "region": "Toulon", "desc": "Une petite maison de campagne au bord de la mer, à cinquante pas du fort, face à la redoute où commença la fortune de Bonaparte."},
  "rade": {"ambiance": "mer", "name": "La rade de Toulon", "map": "france", "x": 70, "y": 90, "region": "Toulon", "desc": "Une rade bleue où glissent les canots de la marine, menés à la rame par des forçats sous la garde d'un argousin."},
  "paris": {"ambiance": "ville", "name": "Paris", "map": "france", "x": 50, "y": 28, "region": "Paris", "desc": "Le Paris des clubs, des tables de jeu et des boulevards, où l'on juge un homme à son cheval et à son tailleur."},
  "opera": {"ambiance": "ville", "name": "L'Opéra", "map": "france", "x": 51, "y": 27, "region": "Paris, rue Le Peletier", "desc": "Le foyer des abonnés et des dandys, un soir de Robert le Diable, et la file des voitures à la sortie."},
  "muette": {"ambiance": "foret", "name": "L'allée de la Muette", "map": "france", "x": 48, "y": 28, "region": "Bois de Boulogne", "desc": "Une allée du bois de Boulogne, noyée de brouillard à l'aube, où l'on vient se battre loin des regards."},
  "cabinet": {"ambiance": "ville", "name": "Le cabinet du docteur Fabien", "map": "france", "x": 50, "y": 29, "region": "Paris", "desc": "Un cabinet de médecin, des livres, une lampe, et des confidences reçues à minuit."},
  "taitbout": {"ambiance": "ville", "name": "L'appartement de la rue Taitbout", "map": "france", "x": 51, "y": 28, "region": "Paris, rue Taitbout, n° 11", "desc": "Un appartement de luxe neuf, valets, tapis et secrétaire à secrets, où l'on ferme la porte à double tour."},
  "trouville": {"ambiance": "village", "name": "Trouville", "map": "france", "x": 40, "y": 24, "region": "Normandie, près de Pont-l'Évêque", "desc": "Un village de pêcheurs et de paysans sur la côte normande, avec sa mairie, son curé et ses haies."},
  "bicetre": {"ambiance": "souterrain", "name": "Bicêtre", "map": "france", "x": 51, "y": 30, "region": "Aux portes de Paris", "desc": "Une prison aux portes massives, des corridors sombres, et en bas quelques marches, les cachots des condamnés à mort."},
  "tuileries": {"ambiance": "chateau", "name": "Les Tuileries", "map": "france", "x": 50, "y": 27, "region": "Paris", "desc": "Le palais du roi : au salon, la reine et les princesses à leur tapisserie ; plus loin, le cabinet où le roi travaille seul."},
  "bagne": {"ambiance": "port", "name": "Le bagne de Toulon", "map": "france", "x": 71, "y": 89, "region": "Toulon, l'arsenal", "desc": "L'arsenal où les forçats, enchaînés deux à deux, traînent les canons, empilent les planches et passent devant la corderie."},
}


PEOPLE = {
  "gabriel": {"name": "Gabriel Lambert", "aka": ["Gabriel Lambert", "Gabriel", "Henry de Faverne", "baron de Faverne", "Faverne"], "face": {"age": "jeune", "hair": "blond", "coif": "court", "skin": "porcelaine"}, "qui": "Un forçat du bagne de Toulon, fier et craintif, que le narrateur croit avoir croisé dans le beau monde parisien.", "aspect": {"allure": "bonnet de forçat, mains fines", "signe": "le regard fuyant"}},
  "rossignol": {"name": "Rossignol", "aka": ["Rossignol", "André Toulman"], "face": {"age": "adulte", "hair": "brun", "coif": "court", "skin": "hale", "beard": "barbe"}, "qui": "Un forçat de la barque, bavard, gouailleur et philosophe à sa façon.", "aspect": {"allure": "bonnet rouge, chaîne au pied", "signe": "parle beaucoup"}},
  "chiverny": {"name": "Le père Chiverny", "aka": ["Chiverny", "père Chiverny"], "face": {"age": "mur", "hair": "gris", "coif": "court", "skin": "hale", "beard": "moustache"}, "qui": "Le garde-chiourme qui surveille les forçats de la barque.", "aspect": {"allure": "bâton à la main"}},
  "olivier": {"name": "Olivier d'Hornoy", "aka": ["Olivier d'Hornoy", "Olivier"], "face": {"age": "jeune", "hair": "brun", "coif": "court", "skin": "clair", "beard": "moustache"}, "qui": "Un baron de retour de la Guadeloupe, ami du narrateur, homme d'épée et de sang-froid.", "aspect": {"allure": "canne à la main, gants clairs", "signe": "un calme parfait"}},
  "alfred": {"name": "Alfred de Nerval", "aka": ["Alfred de Nerval", "Alfred"], "face": {"age": "jeune", "hair": "chatain", "coif": "court", "skin": "clair", "beard": "moustache"}, "qui": "Un ami d'Olivier, joueur, témoin au duel.", "aspect": {"allure": "habit de soirée froissé, cartes en tête"}},
  "fabien": {"name": "Le docteur Fabien", "aka": ["Fabien", "docteur Fabien"], "face": {"age": "adulte", "hair": "brun", "coif": "court", "skin": "clair"}, "qui": "Un médecin, ami d'Olivier et médecin du roi par quartier, dont le journal fait le cœur du récit.", "aspect": {"allure": "trousse de chirurgien, montre à la main"}},
  "germain": {"name": "Germain", "aka": ["Germain"], "face": {"age": "adulte", "hair": "brun", "coif": "court", "skin": "clair"}, "qui": "Le valet de chambre du baron, rue Taitbout.", "aspect": {"allure": "livrée, plateau à la main"}},
  "macartie": {"name": "Le comte de Macartie", "aka": ["comte de Macartie", "monsieur de Macartie"], "face": {"age": "mur", "hair": "gris", "coif": "court", "skin": "clair"}, "qui": "Un homme du monde, père de la jeune fille que le baron doit épouser.", "aspect": {"allure": "manteau de soirée, décoration à la boutonnière"}},
  "marie": {"name": "Marie Granger", "aka": ["Marie Granger", "Marie"], "face": {"age": "jeune", "hair": "chatain", "coif": "long", "skin": "clair"}, "qui": "Une jeune paysanne de Trouville, venue à Paris avec son enfant.", "aspect": {"allure": "coiffe normande, enfant dans les bras", "signe": "une douceur obstinée"}},
  "thomas": {"name": "Thomas Lambert", "aka": ["Thomas Lambert", "père Thomas"], "face": {"age": "ancien", "hair": "blanc", "coif": "court", "skin": "hale"}, "qui": "Un paysan de Trouville, dur à la peine et droit comme son bâton.", "aspect": {"allure": "blouse, bâton de marche"}},
  "andremorin": {"name": "André Morin", "aka": ["André Morin"], "face": {"age": "jeune", "hair": "brun", "coif": "court", "skin": "hale"}, "qui": "Un pêcheur de Trouville.", "aspect": {"allure": "vareuse de pêcheur"}},
  "v": {"name": "V…", "aka": ["V…"], "face": {"age": "adulte", "hair": "brun", "coif": "court", "skin": "clair", "beard": "moustache"}, "qui": "Un agent de la police de sûreté, adroit, ironique et sans pitié.", "aspect": {"allure": "habit de porteur, pistolets en poche", "signe": "l'ironie"}},
  "filsoie": {"name": "Fil-de-soie", "aka": ["Fil-de-soie"], "face": {"age": "adulte", "hair": "noir", "coif": "court", "skin": "clair"}, "qui": "Un agent de police aux ordres de V….", "aspect": {"allure": "pas silencieux"}},
  "accacia": {"name": "Accacia", "aka": ["Accacia"], "face": {"age": "adulte", "hair": "noir", "coif": "court", "skin": "hale", "beard": "barbe"}, "qui": "Un forçat, ancien compagnon de chaîne de Rossignol.", "aspect": {"allure": "chaîne au pied"}},
}

NO_AUTO = []
MEET = {}

WORDS = {
  "forçat|forçats": "Un condamné aux travaux forcés, envoyé au bagne.",
  "bagne|bagnes": "Une prison de forçats, dans un port de guerre, où les condamnés travaillent enchaînés.",
  "garde-chiourme|gardes-chiourme": "Un surveillant des forçats.",
  "chiourme": "L'ensemble des forçats d'un bagne.",
  "galères": "La peine des travaux forcés, qu'on appelait encore ainsi au temps où les forçats ramaient sur les galères.",
  "bastide": "En Provence, une petite maison de campagne.",
  "créole|créoles": "Une personne de famille européenne née aux colonies, comme aux Antilles.",
  "fleuret|fleurets": "Une épée d'entraînement, à lame carrée et à bout mouché.",
  "bouillotte": "Un jeu de cartes, joué pour de l'argent dans les salons.",
  "décavé": "Au jeu, qui a perdu tout son argent.",
  "commutation": "Le remplacement d'une peine par une autre, plus douce.",
  "guichetier|guichetiers": "Un gardien de prison chargé d'ouvrir et de fermer les portes.",
  "aumônier": "Un prêtre attaché à une prison, à un hôpital ou à un régiment.",
  "cabriolet": "Une voiture légère à deux roues, tirée par un cheval.",
  "acide prussique": "Un poison foudroyant, qu'on appelle aujourd'hui acide cyanhydrique.",
  "poucettes": "Une petite chaîne ou un cordon qui attache ensemble les pouces d'un prisonnier.",
  "contrefacteur|contrefacteurs": "Celui qui fabrique de faux billets ou de fausse monnaie.",
  "faussaire|faussaires": "Celui qui fabrique des faux : faux billets, fausses écritures, faux actes.",
  "exempts": "Un officier de police.",
  "carret": "Un gros fil de chanvre dont on fait les cordages.",
  "argousin|argousins": "Un surveillant de forçats.",
  "procès-verbal": "Un rapport écrit et signé par un agent de l'autorité sur ce qu'il a constaté.",
}


PAGES = {
  "I_1": ["La bastide du fort Lamalgue", "bastide"], "I_2": ["Douze forçats pour équipage", "rade"], "I_3": ["Monsieur le docteur", "rade"],
  "II_1": ["Un visage déjà vu", "rade"], "II_2": ["La carte sous la pierre", "bastide"],
  "III_1": ["Le foyer de l'Opéra", "opera"], "III_2": ["Un coup de canne", "opera"], "III_3": ["Six heures du matin", "opera"],
  "IV_1": ["Les lettres d'Olivier", "paris"], "IV_2": ["Le joueur et le médecin", "paris"],
  "V_1": ["Le bois dans le brouillard", "muette"], "V_2": ["Soixante-six pulsations", "muette"], "V_3": ["Le duel", "muette"],
  "VI_1": ["Le journal du docteur", "cabinet"],
  "VII_1": ["Le blessé sans famille", "taitbout"], "VII_2": ["La porte fermée à double tour", "taitbout"],
  "VIII_1": ["La garde-malade", "taitbout"], "VIII_2": ["Un médecin qui ne se paie pas", "taitbout"],
  "IX_1": ["Une loi sur les faussaires", "taitbout"], "IX_2": ["Les billets de banque", "cabinet"],
  "X_1": ["Le billet mal orthographié", "taitbout"], "X_2": ["Le mal des nerfs", "taitbout"], "X_3": ["Le rhum et l'acide prussique", "taitbout"],
  "XI_1": ["Minuit chez le docteur", "cabinet"], "XI_2": ["Ni baron ni créole", "cabinet"], "XI_3": ["La femme sur la borne", "taitbout"], "XI_4": ["Marie Granger", "cabinet"],
  "XII_1": ["Le secrétaire du maire", "trouville"], "XII_2": ["Le billet de cinq cents francs", "trouville"], "XII_3": ["La dernière nuit", "trouville"],
  "XIII_1": ["Une lettre de Paris", "trouville"], "XIII_2": ["Le conseil du maire", "trouville"], "XIII_3": ["Le vieux curé", "trouville"], "XIII_4": ["Ce que le curé avait vu", "trouville"],
  "XIV_1": ["Le retour du père Thomas", "trouville"], "XIV_2": ["Un cavalier sur les boulevards", "trouville"],
  "XV_1": ["L'hôtel de Venise", "paris"], "XV_2": ["À la sortie de l'Opéra", "opera"],
  "XVI_1": ["Le baron fait appeler le docteur", "taitbout"], "XVI_2": ["Monsieur Lambert", "taitbout"], "XVI_3": ["Le porteur", "taitbout"], "XVI_4": ["Des piqûres d'épingle", "taitbout"], "XVI_5": ["Les secrets du secrétaire", "taitbout"],
  "XVII_1": ["La lettre de l'aumônier", "bicetre"], "XVII_2": ["Le cachot", "bicetre"], "XVII_3": ["Le père", "bicetre"], "XVII_4": ["Neuf heures à vivre", "bicetre"],
  "XVIII_1": ["Le cabinet du roi", "tuileries"], "XVIII_2": ["La grâce", "bicetre"],
  "XIX_1": ["La lettre de Toulon", "paris"], "XIX_2": ["Le compagnon de chaîne", "bagne"], "XIX_3": ["Ce que Gabriel n'osait demander", "bagne"], "XIX_4": ["L'endroit", "bagne"], "XIX_5": ["Le mûrier", "bagne"],
  "XX_1": ["Procès-verbal", "bagne"],
}
