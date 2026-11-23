# Fiche de « L'Ombre qui glisse » pour livre.py (Robert E. Howard, Weird Tales, septembre 1933 ; traduction nouvelle par Claude, 2026).
# Texte : /mnt/project-files/livre-heros/classiques/xuthal/NN.txt, passé par traduction.py (pages C1_1…), découpé à 690 mots.
# Source anglaise : la version de Weird Tales, d'après la copie du dépôt WillemBlokland/NMLfinal (story_texts/685.txt).
# Le récit est aussi connu sous le titre de « Xuthal of the Dusk » ; l'id du livre est xuthal. Les chapitres de Howard sont
# seulement numérotés : leurs titres sont de Claude.
# Ce qui doit rester caché jusqu'à sa page : le piège de Thalis (C1_11) ; ce qui arrive à Thalis et l'aspect de Thog (C2_3) ;
# qui meurt dans l'escalier (C3_2) ; l'issue du combat (C3_3).
HEAD = """// « L'Ombre qui glisse » (The Slithering Shadow), Robert E. Howard, 1933 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais paru dans Weird Tales
// en septembre 1933 (domaine public). Les chapitres de Howard sont seulement numérotés ; leurs titres, ceux des pages et
// tout ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude."""

BASE = {
  "id": "xuthal",
  "title": "L'Ombre qui glisse",
  "subtitle": "Un récit de Conan le Cimmérien · Robert E. Howard, 1933",
  "summary": "Derniers survivants d'une armée anéantie, Conan et la Brythunienne Natala meurent de soif dans le désert du Sud quand une ville aux murs verts surgit des vagues de chaleur. Ses portes sont ouvertes, ses salles somptueuses et désertes, ses gardes dorment comme des morts. Quelque chose d'autre, pourtant, rôde dans ses palais.",
  "tags": ["aventure", "fantastique", "drame"],
  "author": "Robert E. Howard · traduction de Claude (2026)",
  "lecture": True,
  "age": 16,
  "skin": "parchemin",
  "cover": {"motif": "oeil", "color": "#1f4a3a"},
  "glossary": None,
  "voice": "troisième personne, passé",
  "version": 1,
  "notice": {
    "title": "Un récit de 1933",
    "reminder": "Ce chapitre décrit une scène de torture et des violences sanglantes.",
    "text": [
      "Robert E. Howard publie *L'Ombre qui glisse* en septembre 1933 dans *Weird Tales*, une revue américaine de récits étranges ; on le connaît aussi sous le titre de *Xuthal of the Dusk*. Conan y est un soldat de fortune, rescapé d'une armée de mercenaires. Le monde est celui de l'« âge hyborien », un passé imaginaire plein de royaumes et de dieux inventés. Howard est mort en 1936, à trente ans ; ses récits sont dans le domaine public.",
      "La traduction est nouvelle, faite pour cette bibliothèque à partir du texte anglais, et elle suit Howard de près. Elle allège les mots qui désignent sans cesse les gens de Xuthal par la couleur de leur peau. Le récit garde le regard de son époque sur les femmes : Natala a été prise sur un marché aux esclaves, Conan la traite avec rudesse, et les deux femmes se disputent un homme.",
      "Il faut nommer ce que le récit montre. Il est sensuel : la Stygienne Thalis va presque nue et parle de plaisirs. Au deuxième chapitre, elle attache Natala nue à un anneau et la fouette, puis une créature monstrueuse la touche. Les combats sont très sanglants, avec des membres tranchés et un homme éventré.",
    ],
  },
  "intro": [],
  "world": {"start": {"place": "desert", "hour": 15, "gold": 0, "food": 0, "items": [], "kits": {"guerrier": [], "rodeur": [], "voleur": [], "mage": [], "pretre": [], "barde": []}}},
}

T = ["La cité du désert", "Le couloir secret", "Le puits sans fond", "Le vin d'or"]
R = [
  "Rescapés de l'armée du prince Almuric, anéantie aux confins de Kush, Conan et Natala, une Brythunienne qu'il a tirée d'un marché aux esclaves, n'ont plus d'eau dans le désert du Sud. Au moment où Conan tire son sabre pour épargner à Natala une longue agonie, une ville surgit à l'horizon. Xuthal est ouverte, somptueuse et muette ; le garde de la porte, qu'on croyait mort, se jette sur Conan ; une ombre énorme emporte un dormeur sur son estrade. La Stygienne Thalis, venue là toute jeune, leur explique la ville : ses habitants passent leur vie dans les rêves du lotus noir, et leur dieu Thog se nourrit d'eux. Elle offre à Conan de rester avec elle.",
  "Thalis a entraîné Natala par une porte secrète, dans un couloir obscur, pour la laisser à celui qui habite les ténèbres. Natala la blesse d'un coup de dague ; folle de rage, Thalis l'attache à un anneau et la fouette. Puis une forme noire sort de l'ombre.",
  "Conan se jette contre le mur, puis contre les guerriers de Xuthal tirés de leurs rêves par le tumulte. Il se fraie un chemin dans un escalier, se perd dans les salles du haut et tombe par une trappe dans le couloir secret, où il trouve Natala aux prises avec le monstre. Le combat roule dans le noir jusqu'au bord d'un puits.",
  "Conan revient, déchiré et à bout de forces, et délivre Natala. Par un autre tunnel, ils remontent dans une salle à fontaine, où Natala trouve près d'une dormeuse une jarre du vin d'or de Xuthal. L'élixir rend à Conan toute sa vigueur. Par une fenêtre du mur, une corde de soie les descend dans le désert, en route vers l'oasis du sud.",
]
CHAPTERS = [{"title": "Chapitre " + str(i + 1) + " · " + t, "text": r} for i, (t, r) in enumerate(zip(T, R))]
CHAPTERS[1]["notice"] = True
CHAPTERS[2]["notice"] = True

PLACES = {
  "desert": {"ambiance": "route", "name": "Le désert du Sud", "map": "hyborie", "x": 60, "y": 90, "region": "Au-delà de Kush et de la Stygie", "desc": "Des sables et des pierres sous un soleil meurtrier, des brumes pourpres au loin, et des mirages qui narguent les assoiffés."},
  "porte": {"ambiance": "ville", "name": "La cour de la porte", "map": "hyborie", "x": 62, "y": 92, "region": "Xuthal, derrière le grand portail", "desc": "Des murs d'une matière verte et lisse comme du verre, des coupoles et des minarets brillants, et au centre de la cour la margelle d'un puits trop profond."},
  "salles": {"ambiance": "chateau", "name": "Les salles de Xuthal", "map": "hyborie", "x": 62, "y": 93, "region": "Le grand palais qui forme toute la ville", "desc": "Des salles de pierre verte tendues de velours, des coussins de satin, des joyaux qui brillent dans les murs, et des dormeurs immobiles comme des morts."},
  "couloir": {"ambiance": "souterrain", "name": "Le couloir secret", "map": "hyborie", "x": 62, "y": 94, "region": "Derrière les tapisseries de Xuthal", "desc": "Un couloir noir derrière une porte secrète, un anneau de métal scellé au mur, et plus loin un grand puits rond à la margelle gluante."},
}

PEOPLE = {
  "conan": {"name": "Conan le Cimmérien", "aka": ["Conan", "Cimmérien"], "face": {"age": "jeune", "hair": "noir", "coif": "milong", "beard": "sans", "iris": "bleu", "skin": "hale"}, "qui": "Un soldat de fortune venu du Nord, rescapé de l'armée du prince Almuric.", "aspect": {"allure": "géant bronzé, un pagne de soie", "visage": "une crinière noire, des yeux bleus", "signe": "un sabre et un large poignard"}},
  "natala": {"name": "Natala", "aka": ["Natala", "Brythunienne"], "face": {"age": "jeune", "hair": "blond", "coif": "milong", "skin": "porcelaine"}, "qui": "Une jeune Brythunienne que Conan a tirée d'un marché aux esclaves de Shem, et qui le suit depuis.", "aspect": {"allure": "une courte tunique de soie", "visage": "des boucles blondes, la peau très blanche"}},
  "thalis": {"name": "Thalis", "aka": ["Thalis", "Stygienne"], "face": {"age": "adulte", "hair": "noir", "coif": "long", "skin": "ivoire"}, "qui": "Une fille de roi stygien, enlevée toute jeune, que les gens de Xuthal ont recueillie dans le désert.", "aspect": {"allure": "grande et souple, une ceinture de joyaux", "visage": "des yeux sombres aux longs cils"}},
  "thog": {"name": "Thog", "aka": ["Thog"], "face": {"age": "ancien", "skin": "#1c1c22"}, "qui": "L'Ancien, le dieu de Xuthal, qui dort sous la ville et en sort quand il a faim.", "aspect": {"allure": "une grande ombre noire et informe"}},
}

WORDS = {
  "pagne": "Un morceau d'étoffe noué autour des reins.",
  "sérail": "Le palais où un souverain tient ses femmes enfermées.",
  "minaret|minarets": "Une tour haute et mince, en Orient.",
  "lotus": "Une plante dont Howard fait sortir des sucs, des poisons et des drogues ; le lotus noir de Xuthal donne des rêves.",
  "radium": "Un métal qui brille dans le noir, découvert en 1898 ; Howard en fait la lumière des joyaux de Xuthal.",
  "élixir": "Un breuvage magique qui guérit ou prolonge la vie.",
  "albâtre": "Une pierre très blanche et un peu transparente.",
  "Derketo": "Une déesse de l'amour et de la mort, adorée en Stygie et en Shem dans les récits de Howard.",
}

PT = {
  "C1_1": ("La gourde vide", "desert"),
  "C1_2": ("Le mirage", "desert"),
  "C1_3": ("Le garde de la porte", "porte"),
  "C1_4": ("Un festin sans convives", "salles"),
  "C1_5": ("Une ombre sur le mur", "salles"),
  "C1_6": ("Le rêveur", "salles"),
  "C1_7": ("Thalis", "salles"),
  "C1_8": ("Les dormeurs du lotus", "salles"),
  "C1_9": ("Le dieu de Xuthal", "salles"),
  "C1_10": ("La fille d'un roi", "salles"),
  "C1_11": ("La fontaine d'ivoire", "salles"),
  "C2_1": ("Derrière la tapisserie", "couloir"),
  "C2_2": ("Les cordelettes de soie", "couloir"),
  "C2_3": ("Ce qui sort de l'ombre", "couloir"),
  "C3_1": ("Les épées de Xuthal", "salles"),
  "C3_2": ("L'escalier de marbre", "salles"),
  "C3_3": ("Le combat dans le noir", "couloir"),
  "C4_1": ("Le retour de Conan", "couloir"),
  "C4_2": ("La porte au verrou d'or", "salles"),
  "C4_3": ("La jarre de jade", "salles"),
  "C4_4": ("La corde de soie", "desert"),
}
PAGES = {p: list(t) for p, t in PT.items()}
