# Fiche du « Phénix sur l'épée » pour livre.py (Robert E. Howard, Weird Tales, décembre 1932 ; traduction nouvelle par Claude, 2026).
# Texte : /mnt/project-files/livre-heros/classiques/phenix/NN.txt, passé par traduction.py (pages C1_1…). Source anglaise :
# la version de Weird Tales, d'après la copie du dépôt WillemBlokland/NMLfinal (story_texts/589.txt), seule copie complète
# trouvée en ligne. Les chapitres de Howard sont seulement numérotés : leurs titres sont de Claude ; les épigraphes
# (Les Chroniques némédiennes, La Route des rois) sont traduites en vers libres.
# Ce qui doit rester caché jusqu'à sa page (titres de pages, qui, aspect, lieux, résumés) : le sort de Dion (C3_2) ;
# ce que Thoth-Amon envoie (C3_2) ; qui meurt dans la chambre du roi (C5_2 à C5_4).
HEAD = """// « Le Phénix sur l'épée » (The Phoenix on the Sword), Robert E. Howard, 1932 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais paru dans Weird Tales
// en décembre 1932 (domaine public). Les chapitres de Howard sont seulement numérotés ; leurs titres, ceux des pages et
// tout ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude."""

BASE = {
  "id": "phenix",
  "title": "Le Phénix sur l'épée",
  "subtitle": "Un récit de Conan le Cimmérien · Robert E. Howard, 1932",
  "summary": "Conan, l'ancien voleur et mercenaire, est roi d'Aquilonie. Il s'ennuie dans les affaires d'État, griffonne une carte des pays du Nord et sent venir quelque chose qu'il ne peut pas fendre de son épée. Dans une maison obscure de la capitale, un hors-la-loi et son esclave stygien préparent sa mort.",
  "tags": ["aventure", "fantastique", "intrigue"],
  "author": "Robert E. Howard · traduction de Claude (2026)",
  "lecture": True,
  "age": 14,
  "skin": "parchemin",
  "cover": {"motif": "plume", "color": "#3a2a1a"},
  "glossary": None,
  "voice": "troisième personne, passé",
  "version": 1,
  "notice": {
    "title": "Un récit de 1932",
    "reminder": "Ce chapitre décrit un combat sanglant.",
    "text": [
      "Robert E. Howard publie *Le Phénix sur l'épée* en décembre 1932 dans *Weird Tales*, une revue américaine de récits étranges. C'est le tout premier récit de Conan à paraître : Howard le montre déjà roi d'Aquilonie, au milieu de sa vie, et racontera plus tard sa jeunesse de voleur, de pirate et de mercenaire. Le monde est celui de l'« âge hyborien », un passé imaginaire plein de royaumes et de dieux inventés. Howard est mort en 1936, à trente ans ; ses récits sont dans le domaine public.",
      "La traduction est nouvelle, faite pour cette bibliothèque à partir du texte anglais, et elle suit Howard de près. Elle allège les mots qui désignent sans cesse le Stygien par la couleur de sa peau. Chaque chapitre s'ouvre sur quelques vers, que Howard attribue à des livres imaginaires ; ils sont traduits en vers libres.",
      "Il faut nommer ce que le récit montre. Un homme est poignardé ; le dernier chapitre décrit un combat sanglant dans la chambre du roi, avec des crânes fendus, et une créature monstrueuse.",
    ],
  },
  "intro": [],
  "world": {"start": {"place": "repaire", "hour": 5, "gold": 0, "food": 0, "items": [], "kits": {"guerrier": [], "rodeur": [], "voleur": [], "mage": [], "pretre": [], "barde": []}}},
}

T = ["Les conjurés", "Le roi et sa carte", "L'Anneau du serpent", "Le sage de Golamira", "La nuit des assassins"]
R = [
  "Avant l'aube, dans une maison obscure de la capitale d'Aquilonie, le hors-la-loi Ascalante raille les quatre nobles qui le croient à leur service : Volmana, Gromel, Dion et le poète Rinaldo. Il a éloigné de la ville les troupes du roi Conan ; cette nuit, avec ses coquins, il entrera au palais par un souterrain pour tuer le roi, puis il se débarrassera de ses complices. Son esclave Thoth-Amon, un grand sorcier de Stygie qui a perdu son Anneau, le sert par force : Ascalante tient son secret. Il l'envoie surveiller Dion.",
  "Le roi Conan s'ennuie dans les affaires d'État et regrette ses jours libres. Le peuple, excité par les chansons de Rinaldo, pleure le roi tyran qu'il a tué. Conan refuse de faire pendre le poète, et confie à son ami Prospero, qui part pour la Némédie, qu'il sent un danger caché. Il lui montre la carte des pays du Nord qu'il dessine lui-même.",
  "Dans son jardin, Dion tremble de peur. Thoth-Amon lui propose un pacte et lui raconte sa puissance passée, perdue avec l'Anneau du serpent de Set. Dion n'écoute pas, mais le mot d'anneau lui rappelle son porte-bonheur, acheté à un voleur : c'est l'Anneau. Thoth-Amon le poignarde et reprend son bien. Avec le sang, il appelle des gouffres de la nuit une créature à laquelle il donne à flairer une sandale d'Ascalante.",
  "Conan rêve qu'on l'appelle. Il descend un couloir de pierre noire sculpté de dieux anciens, jusqu'à la crypte du sage Épémitréus, mort depuis quinze cents ans, qui combattit jadis le dieu-serpent Set. Le sage l'avertit qu'un disciple de Set menace le royaume, et trace sur sa lame un signe de feu. Conan s'éveille, l'épée à la main : un phénix est gravé sur la lame. Un bruit furtif dans le couloir, et il revêt son armure.",
  "Les conjurés enfoncent la porte et trouvent le roi debout, à demi armé. Conan brise son épée sur le casque de Gromel, prend une vieille hache au mur et se bat seul contre tous ; Volmana tombe, puis Rinaldo, que le roi ne voulait pas tuer. Alors une ombre difforme entre, et les coquins s'enfuient en hurlant. La créature de Thoth-Amon tue Ascalante de terreur et se jette sur le roi ; Conan la frappe avec le tronçon de son épée marquée du phénix. La cour arrive ; le grand prêtre de Mitra reconnaît le signe d'Épémitréus, et la créature a laissé sa forme dessinée en sang sur le sol.",
]
CHAPTERS = [{"title": "Chapitre " + str(i + 1) + " · " + t, "text": r} for i, (t, r) in enumerate(zip(T, R))]
CHAPTERS[4]["notice"] = True

PLACES = {
  "repaire": {"ambiance": "nuit", "name": "La maison d'Ascalante", "map": "tarantia", "x": 35, "y": 60, "region": "Tarantia, dans un dédale de ruelles", "desc": "Une maison obscure au fond d'une ruelle, une porte qu'on verrouille vite, et une chambre où l'on boit dans une coupe d'or."},
  "cabinet": {"ambiance": "chateau", "name": "Le cabinet du roi", "map": "tarantia", "x": 60, "y": 40, "region": "Le palais royal de Tarantia", "desc": "Des tapisseries, des boiseries polies, un sol d'ivoire, un plafond sculpté d'arabesques d'argent, et une table à écrire d'ivoire incrustée d'or."},
  "attalus": {"ambiance": "foret", "name": "Le jardin de Dion", "map": "aquilonie", "x": 55, "y": 55, "region": "Le domaine du baron d'Attalus, à la campagne", "desc": "Un jardin flamboyant de fleurs et d'arbres en fleurs, des fontaines partout, et un bosquet rond où l'on s'assoit sur un siège de marbre."},
  "crypte": {"ambiance": "souterrain", "name": "La crypte du Golamira", "map": "aquilonie", "x": 40, "y": 30, "region": "Au cœur du mont Golamira", "desc": "Un couloir de pierre noire sculpté de dieux anciens, un escalier dont chaque marche porte le Serpent, et une crypte où un tombeau porte un phénix."},
  "chambre": {"ambiance": "chateau", "name": "La chambre du roi", "map": "tarantia", "x": 62, "y": 38, "region": "Le palais royal de Tarantia", "desc": "Une grande chambre sous une haute coupole dorée, une porte dorée marquée du dragon d'Aquilonie, de vieilles armes aux murs."},
}

PEOPLE = {
  "conan": {"name": "Conan le Cimmérien", "aka": ["Conan", "Cimmérien"], "face": {"age": "mur", "hair": "noir", "coif": "milong", "beard": "sans", "iris": "bleu", "skin": "hale"}, "qui": "Un ancien voleur, pirate et mercenaire venu du Nord, devenu roi d'Aquilonie en renversant le roi Numédidès.", "aspect": {"allure": "puissant, vêtements riches et simples", "visage": "crinière noire taillée au carré, cicatrices", "signe": "un bandeau de drap d'argent"}},
  "ascalante": {"name": "Ascalante", "aka": ["Ascalante"], "face": {"age": "adulte", "hair": "brun", "coif": "court", "skin": "clair", "beard": "sans"}, "qui": "Un ancien comte devenu hors-la-loi, pilleur de caravanes dans le désert du Sud, revenu en secret dans la capitale.", "aspect": {"allure": "grand, maigre, velours usé", "visage": "un sourire cynique"}},
  "thoth": {"name": "Thoth-Amon", "aka": ["Thoth-Amon", "Thoth"], "face": {"age": "adulte", "hair": "noir", "coif": "rase", "skin": "brun", "beard": "sans"}, "qui": "Un géant stygien, l'esclave d'Ascalante, autrefois grand sorcier dans le Sud.", "aspect": {"allure": "géant sombre, marques de fouet", "visage": "des yeux où passent des lueurs rouges"}},
  "dion": {"name": "Dion d'Attalus", "aka": ["Dion"], "face": {"age": "mur", "hair": "chatain", "coif": "degarni", "skin": "clair", "beard": "sans"}, "qui": "Un gros baron riche et superstitieux, qui se croit des droits au trône par une goutte de sang royal.", "aspect": {"allure": "gras, nerveux, une chaîne d'or en main"}},
  "volmana": {"name": "Volmana de Karaban", "aka": ["Volmana"], "face": {"age": "mur", "hair": "gris", "coif": "court", "skin": "clair", "beard": "barbe"}, "qui": "Un comte nabot et ruiné, qui veut retrouver la faveur royale de l'ancien régime.", "aspect": {"allure": "petit, en armure complète"}},
  "gromel": {"name": "Gromel", "aka": ["Gromel"], "face": {"age": "adulte", "hair": "brun", "coif": "court", "skin": "hale", "beard": "barbe"}, "qui": "Un Bossonien géant, commandant de la Légion noire, qui veut toute l'armée.", "aspect": {"allure": "géant, en armure complète"}},
  "rinaldo": {"name": "Rinaldo", "aka": ["Rinaldo"], "face": {"age": "jeune", "hair": "blond", "coif": "milong", "skin": "clair", "beard": "sans"}, "qui": "Un ménestrel, grand poète, dont les chansons dressent le peuple contre Conan.", "aspect": {"allure": "habit de ménestrel, chapeau à plumes", "visage": "des yeux bleus exaltés"}},
  "prospero": {"name": "Prospero", "aka": ["Prospero"], "face": {"age": "adulte", "hair": "noir", "coif": "court", "skin": "hale", "beard": "sans"}, "qui": "Un Poitevin, l'ami et le bras droit du roi Conan.", "aspect": {"allure": "armure ciselée d'or, cotte de soie", "visage": "des yeux sombres et rieurs"}},
  "publius": {"name": "Publius", "aka": ["Publius"], "face": {"age": "mur", "hair": "gris", "coif": "degarni", "skin": "clair", "beard": "sans"}, "qui": "Le chancelier du roi, homme de projets plutôt que d'action.", "aspect": {"allure": "gros, inquiet, en robe"}},
  "pallantides": {"name": "Pallantides", "aka": ["Pallantides"], "face": {"age": "adulte", "hair": "brun", "coif": "court", "skin": "hale", "beard": "moustache"}, "qui": "Le commandant des Dragons noirs, la garde fidèle du roi.", "aspect": {"allure": "armure noire, main sur l'épée"}},
  "epemitreus": {"name": "Épémitréus", "aka": ["Épémitréus"], "face": {"age": "ancien", "hair": "blanc", "coif": "long", "skin": "ivoire", "beard": "longue"}, "qui": "Le sage d'Aquilonie, mort depuis quinze cents ans, qui combattit le dieu-serpent Set ; on dit qu'il dort au cœur du mont Golamira.", "aspect": {"allure": "figure vague assise sur un tombeau", "visage": "une barbe blanche"}},
}

WORDS = {
  "sénéchal": "Un grand officier de la cour, chargé de rendre la justice ou de commander au nom du roi.",
  "sérail": "Le palais où un souverain tient ses femmes enfermées.",
  "ceste": "Un gantelet de cuir garni de métal, que portaient les lutteurs de l'Antiquité.",
  "dossière": "La pièce d'armure qui protège le dos.",
  "épaulière": "La pièce d'armure qui protège l'épaule.",
  "upas": "Un arbre d'Asie dont la sève passait pour un poison mortel.",
  "sophiste": "Un beau parleur qui sait faire paraître vrai ce qui est faux.",
  "acolyte|acolytes": "Un aide du prêtre ; ici, un serviteur d'un culte.",
  "stylet": "Une petite pointe dont on se servait pour écrire sur la cire.",
}

PT = {
  "C1_1": ("Avant l'aube", "repaire"),
  "C1_2": ("Le maître et l'esclave", "repaire"),
  "C2_1": ("Un roi qui s'ennuie", "cabinet"),
  "C2_2": ("La carte du Nord", "cabinet"),
  "C3_1": ("Dans le jardin de Dion", "attalus"),
  "C3_2": ("Le porte-bonheur", "attalus"),
  "C4_1": ("Le couloir de pierre noire", "crypte"),
  "C5_1": ("La porte dorée", "chambre"),
  "C5_2": ("La vieille hache", "chambre"),
  "C5_3": ("Une ombre sur le mur", "chambre"),
  "C5_4": ("Le tronçon d'épée", "chambre"),
  "C5_5": ("Le signe du phénix", "chambre"),
}
PAGES = {p: list(t) for p, t in PT.items()}
