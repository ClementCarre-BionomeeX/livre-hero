# Fiche de « La Fille du géant du gel » pour livre.py (Robert E. Howard, écrit en 1932 ; traduction nouvelle par Claude, 2026).
# Texte : /mnt/project-files/livre-heros/classiques/atali/01.txt, passé par traduction.py (pages C1_1…). Source anglaise :
# la copie du dépôt WillemBlokland/NMLfinal (story_texts/301.txt). Weird Tales refusa le récit en 1932 ; Howard en fit une autre
# version sans Conan (« Gods of the North », 1934) ; celle-ci ne parut qu'après sa mort. Howard est mort en 1936 : ses textes
# sont dans le domaine public en France. Le récit n'a pas de chapitres.
# Ce qui doit rester caché jusqu'à sa page : qui est la jeune femme (C1_5) ; ce que Conan tient dans la main (C1_5).
HEAD = """// « La Fille du géant du gel » (The Frost-Giant's Daughter), Robert E. Howard, écrit en 1932 : un livre à lire, sans choix
// (lecture: true). Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais (domaine
// public en France). Le titre du chapitre, ceux des pages et tout ce qui vit dans les tags (gens, lieux, mots, résumés) sont
// de Claude."""

BASE = {
  "id": "atali",
  "title": "La Fille du géant du gel",
  "subtitle": "Un récit de Conan le Cimmérien · Robert E. Howard, 1932",
  "summary": "Sur un champ de bataille du Nord glacé, le jeune Conan, mercenaire chez les Æsir, vient d'abattre le dernier de ses ennemis. Épuisé, il tombe dans la neige. Quand il relève les yeux, une jeune femme aux cheveux d'or rit de lui, pieds nus sur la neige, et l'invite à la suivre.",
  "tags": ["aventure", "fantastique"],
  "author": "Robert E. Howard · traduction de Claude (2026)",
  "lecture": True,
  "age": 16,
  "skin": "parchemin",
  "cover": {"motif": "flocon", "color": "#2a3f5a"},
  "glossary": None,
  "voice": "troisième personne, passé",
  "version": 1,
  "notice": {
    "title": "Un récit de 1932",
    "reminder": "Ce récit montre un homme qui poursuit une femme pour la prendre de force.",
    "text": [
      "Robert E. Howard écrit *La Fille du géant du gel* en 1932. La revue *Weird Tales* le refuse ; Howard en tire une autre version sans Conan, et celle-ci ne paraît qu'après sa mort. Conan y est jeune, mercenaire chez les Æsir, un peuple du Nord glacé où l'on jure par Ymir, le géant du gel. Le monde est celui de l'« âge hyborien », un passé imaginaire plein de royaumes et de dieux inventés. Howard est mort en 1936, à trente ans ; ses textes sont dans le domaine public en France.",
      "La traduction est nouvelle, faite pour cette bibliothèque à partir du texte anglais, et elle suit Howard de près. Le récit tient en un seul chapitre.",
      "Il faut nommer ce que le récit montre. Il s'ouvre sur un champ de bataille couvert de morts, et les combats sont sanglants. Surtout, la jeune femme, presque nue, se moque de Conan et l'attire ; fou de désir, il la poursuit pour s'emparer d'elle, et l'étreint de force avant qu'elle ne lui échappe. Le récit montre cette violence sans la condamner.",
    ],
  },
  "intro": [],
  "world": {"start": {"place": "champ", "hour": 12, "gold": 0, "food": 0, "items": [], "kits": {"guerrier": [], "rodeur": [], "voleur": [], "mage": [], "pretre": [], "barde": []}}},
}

T = ["La Fille du géant du gel"]
R = [
  "Sur un champ de neige rouge, les pillards de Wulfhere et les loups de Bragi se sont entretués ; Conan tue Heimdul, le dernier des Vanir, puis s'effondre. Une jeune femme presque nue, aux cheveux d'or, se moque de lui et s'enfuit sur la neige. Fou de désir, Conan la poursuit jusqu'aux montagnes du nord, sous les feux de l'aurore boréale, tue deux géants vêtus de glace qui lui barrent la route, et la rattrape. Elle appelle Ymir, et le ciel s'embrase. Conan se réveille entre les mains de Niord et de ses guerriers, qui n'ont trouvé dans la neige que ses propres traces.",
]
CHAPTERS = [{"title": t, "text": r} for t, r in zip(T, R)]
CHAPTERS[0]["notice"] = True

PLACES = {
  "champ": {"ambiance": "neige", "name": "Le champ de bataille", "map": "nordheim", "x": 45, "y": 60, "region": "Les plaines de neige entre Asgard et Vanaheim", "desc": "Une neige piétinée et rouge, des boucliers perdus, des casques à cornes, et des barbes rousses et blondes tournées vers le ciel."},
  "glaces": {"ambiance": "neige", "name": "Les étendues glacées", "map": "nordheim", "x": 50, "y": 35, "region": "Vers les montagnes du nord, le pays d'Ymir", "desc": "Des collines basses en chaînes brisées, des montagnes bleues au loin, et au-dessus l'aurore boréale qui flamboie en éventail."},
}

PEOPLE = {
  "conan": {"name": "Conan le Cimmérien", "aka": ["Conan", "Cimmérien"], "face": {"age": "jeune", "hair": "noir", "coif": "milong", "beard": "sans", "iris": "bleu", "skin": "hale"}, "qui": "Un jeune guerrier venu du sud, qui se bat aux côtés des Æsir.", "aspect": {"allure": "grand, cotte de mailles, casque à cornes", "visage": "sombre et balafré, des yeux bleus"}},
  "atali": {"name": "Atali", "aka": ["Atali"], "face": {"age": "jeune", "hair": "roux", "coif": "long", "skin": "ivoire"}, "qui": "La fille d'Ymir, le géant du gel ; selon les légendes, elle se montre aux mourants sur les champs de bataille.", "aspect": {"allure": "pieds nus, un voile de gaze", "visage": "des cheveux d'or rouge, des yeux changeants"}},
  "heimdul": {"name": "Heimdul", "aka": ["Heimdul"], "face": {"age": "adulte", "hair": "roux", "coif": "long", "skin": "clair", "beard": "barbe"}, "qui": "Un guerrier de Vanaheim, le dernier de la bande de Bragi encore debout.", "aspect": {"allure": "grand, casque à cornes", "visage": "une barbe rouge comme le sang"}},
  "niord": {"name": "Niord", "aka": ["Niord"], "face": {"age": "adulte", "hair": "blond", "coif": "long", "skin": "clair", "beard": "barbe"}, "qui": "Un chef des Æsir, qui devait rejoindre la bande de Wulfhere avant la bataille.", "aspect": {"allure": "mailles et fourrures"}},
  "horsa": {"name": "Horsa", "aka": ["Horsa"], "face": {"age": "adulte", "hair": "blond", "coif": "long", "skin": "clair", "beard": "barbe"}, "qui": "Un guerrier de Niord, qui ne croit guère aux légendes.", "aspect": {"allure": "mailles et fourrures"}},
  "gorm": {"name": "Gorm", "aka": ["Gorm"], "face": {"age": "ancien", "hair": "blanc", "coif": "long", "skin": "clair", "beard": "longue"}, "qui": "Un vieux guerrier de Niord, blessé à la tête dans sa jeunesse.", "aspect": {"allure": "mailles et fourrures", "visage": "un regard égaré et étrange"}},
}

WORDS = {
  "corselet|corselets": "Une cuirasse légère qui protège le buste.",
  "congère|congères": "Un amas de neige poussé par le vent.",
  "Valhalla": "Dans les légendes du Nord, la grande salle où les guerriers morts au combat festoient auprès des dieux.",
  "aurore boréale": "Les grandes lueurs colorées qui dansent la nuit dans le ciel des pays du Nord.",
  "gaze": "Une étoffe très fine et transparente.",
  "quenouille": "Le bâton où l'on attache la laine ou le lin qu'on va filer.",
}

PT = {
  "C1_1": ("Le dernier debout", "champ"),
  "C1_2": ("Le rire sur la neige", "champ"),
  "C1_3": ("Les frères de glace", "glaces"),
  "C1_4": ("Le feu du ciel", "glaces"),
  "C1_5": ("Le voile", "glaces"),
}
PAGES = {p: list(t) for p, t in PT.items()}
