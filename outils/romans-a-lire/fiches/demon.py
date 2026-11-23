# Fiche du « Démon de fer » pour livre.py (Robert E. Howard, Weird Tales, août 1934 ; traduction nouvelle par Claude, 2026).
# Texte : /mnt/project-files/livre-heros/classiques/demon/NN.txt (d'après Gutenberg 42209, « The Devil in Iron »),
# passé par traduction.py (pages C1_1…). Les chapitres de Howard sont seulement numérotés : leurs titres sont de Claude.
# Ce qui doit rester caché jusqu'à sa page (titres de pages, qui, aspect, lieux, résumés) : qui est le géant du dôme
# (C5_2, C6_1) ; ce qu'est la cité et ses habitants (C5_2) ; ce que peut le couteau (C6_6) ; la fin (C6_6).
HEAD = """// « Le Démon de fer » (The Devil in Iron), Robert E. Howard, 1934 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais paru dans Weird Tales
// en août 1934 (Project Gutenberg n° 42209, domaine public). Les chapitres de Howard sont seulement numérotés ; leurs
// titres, ceux des pages et tout ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude."""

BASE = {
  "id": "demon",
  "title": "Le Démon de fer",
  "subtitle": "Un récit de Conan le Cimmérien · Robert E. Howard, 1934",
  "summary": "Après une nuit d'orage, un pêcheur naufragé sur Xapur, île déserte de la mer de Vilayet, trouve un dôme de pierre verte que la foudre a fendu. Sur la côte, un seigneur hyrkanien prépare un piège pour le chef des kozaks qui ravagent sa frontière : un barbare venu du Nord, nommé Conan. Il lui faut un appât, et une île d'où l'on ne s'échappe pas. Un récit de Conan le Cimmérien, de Robert E. Howard, en entier, dans une traduction nouvelle, sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  "tags": ["aventure", "fantastique"],
  "author": "Robert E. Howard · traduction de Claude (2026)",
  "lecture": True,
  "age": 15,
  "skin": "parchemin",
  "cover": {"motif": "sceau", "color": "#24342c"},
  "glossary": None,
  "voice": "troisième personne, passé",
  "version": 1,
  "notice": {
    "title": "Un récit de 1934",
    "text": [
      "Robert E. Howard publie *Le Démon de fer* en août 1934 dans *Weird Tales*, une revue américaine de récits étranges. Conan y est chef des *kozaks*, les bandes des steppes, sur les rives de la mer de Vilayet, dans l'« âge hyborien », un passé imaginaire plein de royaumes et de dieux inventés. Howard est mort en 1936, à trente ans ; ses récits sont dans le domaine public.",
      "La traduction est nouvelle, faite pour cette bibliothèque à partir du texte anglais, et elle suit Howard de près. Elle allège le portrait d'un pêcheur yuetshi, que Howard décrit presque comme une bête, et une phrase qui juge une femme à la pureté de sa « race ».",
      "C'est un récit violent. Octavia y est une captive, vendue et maltraitée, menacée de torture. Et il faut le dire clairement : à la fin, Conan l'embrasse de force alors qu'elle le repousse, et le récit veut qu'elle finisse par céder. C'était un lieu commun des récits d'aventure du temps ; aujourd'hui, on appelle cela une étreinte imposée.",
    ],
  },
  "intro": [],
  "world": {"start": {"place": "dome", "hour": 6, "gold": 0, "food": 0, "items": [], "kits": {"guerrier": [], "rodeur": [], "voleur": [], "mage": [], "pretre": [], "barde": []}}},
}

T = ["Le dôme de Xapur", "Le piège de Ghaznavi", "La fugitive", "La cité qui n'était plus", "La voix de l'Abîme", "Le couteau des Yuetshi"]
R = [
  "Après une nuit d'orage, un pêcheur yuetshi naufragé sur Xapur, île déserte du Vilayet, trouve un dôme de pierre verte fendu par la foudre. À l'intérieur, un géant repose sur un bloc d'or, un poignard en croissant sur la poitrine, comme conservé depuis des siècles. Le pêcheur prend le poignard : le géant ouvre les yeux, se lève et lui brise le cou.",
  "À Khawarizm, Jehungir Agha, que le roi Yezdigerd presse d'en finir avec les kozaks, écoute le plan de son conseiller Ghaznavi pour attirer leur chef, Conan, seul sur l'île de Xapur. La captive némédienne Octavia devra le séduire pendant des pourparlers ; puis on lui fera croire qu'elle s'est enfuie et cachée là-bas. Octavia refuse, puis cède sous la menace.",
  "Donnée par Jehungir à Jelal Khan, Octavia s'évade, gagne la mer à cheval et nage jusqu'à Xapur. Elle monte l'escalier taillé dans la falaise. Dans la forêt obscure, elle entend un tambour, et un bras l'emporte dans le noir.",
  "Conan arrive seul à Xapur, tandis que Jehungir le guette depuis les roseaux. Sur l'île, les ruines sont devenues une cité aux tours de pierre verte. Une trace et un lambeau de soie lui font comprendre qu'on a emporté Octavia. Il entre dans la ville, où Yateli, une jeune femme ensommeillée, lui parle de Dagon, de Khosatral Khel et de la révolte des Yuetshi, puis s'endort. Suivi par un pas qui n'a rien d'humain, il s'enfuit par un passage secret.",
  "Le passage le mène à une salle où un serpent vivant dort sur un trône de cuivre. Derrière un mur, une voix de cloche lui fait voir l'histoire de Khosatral Khel : un être venu de l'Abîme, dieu de Dagon, endormi par un prêtre yuetshi grâce à un couteau tombé du ciel, puis réveillé par le pêcheur. Il a relevé la cité et ses morts, qui ne vivent que la nuit. Conan entend sangloter une femme.",
  "Jehungir et ses archers montent dans l'île. Conan affronte Khosatral, un géant de fer vivant que son épée ne coupe pas, et s'enferme avec Octavia dans une chambre d'acier. Le géant s'éloigne, appelé ailleurs. Conan tue le serpent du trône, prend le couteau des Yuetshi dans le dôme et sort de la ville. Khosatral a massacré les archers ; Conan tue Jehungir, puis frappe le géant avec le couteau jusqu'à le tuer, et la cité retombe en ruine. Octavia repousse Conan, qui l'embrasse de force et l'emporte.",
]
CHAPTERS = [{"title": "Chapitre " + str(i + 1) + " · " + t, "text": r} for i, (t, r) in enumerate(zip(T, R))]
CHAPTERS[1]["notice"] = True

PLACES = {
  "dome": {"ambiance": "temple", "name": "Le dôme de Xapur", "map": "vilayet", "x": 52, "y": 70, "region": "Xapur", "desc": "Un dôme de pierre verte, dure comme le fer, au milieu des arbres de l'île, et dedans un bloc d'or."},
  "khawarizm": {"ambiance": "ville", "name": "Le palais de Khawarizm", "map": "vilayet", "x": 30, "y": 84, "region": "Khawarizm", "desc": "La demeure de Jehungir Agha, gardien de la frontière de la côte, ses divans et ses esclaves."},
  "marais": {"ambiance": "eau", "name": "Les marais de la côte", "map": "vilayet", "x": 44, "y": 78, "region": "La côte sud", "desc": "Des roseaux plus hauts qu'un homme, une eau brumeuse, et une pointe à mille pas de l'île."},
  "falaises": {"ambiance": "montagne", "name": "L'escalier des falaises", "map": "vilayet", "x": 50, "y": 72, "region": "Xapur", "desc": "Des falaises à pic de cent cinquante pieds, et un seul sentier taillé dans le roc, sur la face ouest."},
  "foret": {"ambiance": "foret", "name": "La forêt de Xapur", "map": "vilayet", "x": 52, "y": 71, "region": "Xapur", "desc": "Des arbres serrés contre les falaises, un terreau spongieux, et une obscurité où pas une étoile ne perce."},
  "cite": {"ambiance": "ville", "name": "La cité de pierre verte", "map": "vilayet", "x": 53, "y": 70, "region": "Xapur", "desc": "Des remparts, des maisons à toits plats, des rues en rayons de roue, et un grand édifice à dômes au centre."},
  "palais": {"ambiance": "souterrain", "name": "Le palais aux dômes", "map": "vilayet", "x": 53, "y": 69, "region": "Xapur", "desc": "Des couloirs tendus de tapisseries, des passages secrets, une salle ronde au trône de cuivre."},
}

PEOPLE = {
  "conan": {"name": "Conan le Cimmérien", "aka": ["Conan", "Cimmérien"], "face": {"age": "jeune", "hair": "noir", "coif": "court", "beard": "sans", "iris": "bleu", "skin": "hale"}, "qui": "Un barbare du Nord devenu chef des kozaks, qui ravagent la frontière du Touran.", "aspect": {"allure": "grand, bronzé, félin", "visage": "yeux bleus qui couvent un feu", "signe": "écharpe cramoisie, cimeterre"}},
  "jehungir": {"name": "Jehungir Agha", "aka": ["Jehungir"], "face": {"age": "adulte", "hair": "noir", "coif": "court", "skin": "hale"}, "qui": "Le seigneur hyrkanien de Khawarizm, gardien de la frontière de la côte.", "aspect": {"allure": "bel homme, orgueilleux et cruel", "signe": "casque pointu"}},
  "ghaznavi": {"name": "Ghaznavi", "aka": ["Ghaznavi"], "face": {"age": "mur", "hair": "gris", "coif": "court", "beard": "barbe", "skin": "hale"}, "qui": "Le conseiller de Jehungir Agha.", "aspect": {"allure": "conseiller rusé", "visage": "barbe striée de gris"}},
  "octavia": {"name": "Octavia", "aka": ["Octavia"], "f": True, "face": {"age": "jeune", "hair": "blond", "coif": "long", "skin": "clair"}, "qui": "La fille d'un seigneur de Némédie, enlevée par les cavaliers de Jehungir et tenue en esclavage.", "aspect": {"allure": "grande, superbe, fière", "visage": "cheveux d'or, yeux clairs"}},
  "gilzan": {"name": "Gilzan", "aka": ["Gilzan"], "face": {"age": "adulte", "hair": "noir", "coif": "court", "beard": "barbe", "skin": "hale"}, "qui": "Le tortionnaire shémite de Jehungir.", "aspect": {"allure": "trapu, très musclé", "visage": "barbe frisée d'un noir bleuté"}},
  "yateli": {"name": "Yateli", "aka": ["Yateli"], "f": True, "face": {"age": "jeune", "hair": "noir", "coif": "court", "skin": "brun"}, "qui": "Une jeune femme de la cité, qui semble à moitié endormie.", "aspect": {"allure": "mince et langoureuse", "visage": "cheveux noirs coupés au carré"}},
  "khosatral": {"name": "Khosatral Khel", "aka": ["Khosatral"], "face": {"age": "adulte", "hair": "noir", "coif": "milong", "beard": "sans", "iris": "noir", "skin": "brun"}, "qui": "Celui que les gens de la cité invoquent comme leur dieu.", "aspect": {"allure": "un nom qu'on prononce avec crainte"}},
}
NO_AUTO = []
MEET = {}

WORDS = {
  "Vilayet": "Une grande mer intérieure de l'âge hyborien, dont les Hyrkaniens tiennent les rives.",
  "Hyrkaniens|hyrkanien|hyrkaniens": "Le peuple de cavaliers venu de l'est qui tient le Touran et les côtes du Vilayet.",
  "Touran": "Le grand royaume hyrkanien des bords du Vilayet, dont le roi est Yezdigerd.",
  "kozak|kozaks": "Les bandes de hors-la-loi des steppes qui pillent la frontière du Touran ; le mot veut dire « vaurien ».",
  "hetman": "Un chef des kozaks.",
  "Agha": "Un titre de seigneur, chez les Hyrkaniens.",
  "Yuetshi|yuetshi": "Un peuple de pêcheurs très ancien, qui vit dans des huttes sur la rive sud du Vilayet.",
  "Xapur": "Une île déserte du Vilayet, aux falaises à pic, qu'on appelle la Fortifiée à cause de ses ruines.",
  "Khawarizm": "Une ville hyrkanienne de la côte sud du Vilayet, gardée par Jehungir Agha.",
  "Aghrapur": "La capitale du Touran, grande cité portuaire du Vilayet.",
  "Sultanapur|Shahpur|Khorusun": "Des villes du Touran.",
  "Zaporoska": "Une rivière des steppes qui se jette dans le Vilayet, au milieu des roseaux, où campent les kozaks.",
  "Ghori": "Un fort hyrkanien à la lisière des steppes, où l'on parlemente avec les kozaks.",
  "Tarim": "Un dieu des Hyrkaniens.",
  "Mitra": "Le grand dieu des royaumes hyboriens de l'ouest.",
  "Némédie|Némédienne": "Un grand royaume hyborien de l'ouest.",
  "Hyperboréens": "Le peuple des terres neigeuses du nord.",
  "Brythunie|Brythuniennes": "Un royaume hyborien du nord-est.",
  "Corinthie": "Un royaume de l'âge hyborien.",
  "Zamora|Zamoriennes": "Un royaume de l'est, réputé pour ses voleurs.",
  "Koushite|Koushites": "De Koush, un royaume noir du sud.",
  "Shushan": "Une riche cité du Shem.",
  "Skelos": "Un sorcier de légende ; le *Livre de Skelos* est un vieux livre de magie.",
  "Xuthal": "Une cité perdue du désert, dont les habitants vivent dans les rêves du lotus noir.",
  "Peuple Libre": "Le nom que se donnent les kozaks.",
  "cimeterre": "Un sabre à lame courbe.",
  "galuchat": "Un cuir de poisson ou de raie, grenu et très dur.",
  "merlon": "La partie pleine d'un créneau, entre deux ouvertures.",
  "ichor": "Le sang des dieux, dans les vieux récits.",
  "sérail": "La partie du palais où vivent les femmes d'un prince.",
}

PT = {
  "C1_1": ("Le naufragé de Xapur", "dome"),
  "C2_1": ("Le seigneur de Khawarizm", "khawarizm"),
  "C2_2": ("Un appât pour le loup", "khawarizm"),
  "C3_1": ("Une nageuse dans la nuit", "foret"),
  "C4_1": ("Un homme seul dans une barque", "marais"),
  "C4_2": ("Des tours parmi les arbres", "foret"),
  "C4_3": ("La dormeuse", "cite"),
  "C4_4": ("Un pas dans le couloir", "palais"),
  "C5_1": ("Le trône de cuivre", "palais"),
  "C5_2": ("Ce que dit la voix", "palais"),
  "C6_1": ("Le maître de Dagon", "palais"),
  "C6_2": ("La chambre d'acier", "palais"),
  "C6_3": ("Derrière la porte", "palais"),
  "C6_4": ("Le gardien du dôme", "palais"),
  "C6_5": ("Les archers de Khawarizm", "falaises"),
  "C6_6": ("La demi-lune", "falaises"),
}
PAGES = {p: list(t) for p, t in PT.items()}
