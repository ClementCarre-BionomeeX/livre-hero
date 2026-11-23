# Fiche de « Larrons dans la maison » pour livre.py (Robert E. Howard, Weird Tales, janvier 1934 ; traduction nouvelle par Claude, 2026).
# Texte : /mnt/project-files/livre-heros/classiques/larrons/NN.txt, passé par traduction.py (pages C1_1…). Source anglaise :
# la version de Weird Tales, d'après la copie du dépôt WillemBlokland/NMLfinal (story_texts/642.txt). Les chapitres de Howard
# sont seulement numérotés : leurs titres sont de Claude ; l'épigraphe (« Old Rime ») est traduite en vers libre.
# Ce qui doit rester caché jusqu'à sa page : ce que Murilo voit dans le fauteuil (C1_3, puis C3_1) ; le nom de Thak (C3_3) ;
# le sort des patriotes (C3_7) ; la fin de Thak et de Nabonidus (C3_9).
HEAD = """// « Larrons dans la maison » (Rogues in the House), Robert E. Howard, 1934 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais paru dans Weird Tales
// en janvier 1934 (domaine public). Les chapitres de Howard sont seulement numérotés ; leurs titres, ceux des pages et
// tout ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude."""

BASE = {
  "id": "larrons",
  "title": "Larrons dans la maison",
  "subtitle": "Un récit de Conan le Cimmérien · Robert E. Howard, 1934",
  "summary": "Dans une cité de Corinthie, le jeune noble Murilo reçoit en cadeau une oreille coupée : le Prêtre rouge, maître secret de la ville, a découvert ses trafics. Pour sauver sa tête, il fait évader de prison un voleur cimmérien et lui demande de tuer le prêtre cette nuit même. Mais la maison de Nabonidus est pleine de pièges, et quelqu'un d'autre y est déjà entré.",
  "tags": ["aventure", "fantastique", "intrigue"],
  "author": "Robert E. Howard · traduction de Claude (2026)",
  "lecture": True,
  "age": 14,
  "skin": "parchemin",
  "cover": {"motif": "oeil", "color": "#6a1a1a"},
  "glossary": None,
  "voice": "troisième personne, passé",
  "version": 1,
  "notice": {
    "title": "Un récit de 1934",
    "reminder": "Ce chapitre décrit des scènes de grande violence.",
    "text": [
      "Robert E. Howard publie *Larrons dans la maison* en janvier 1934 dans *Weird Tales*, une revue américaine de récits étranges. Conan y est encore un jeune voleur, dans une cité de Corinthie sans nom. Le monde est celui de l'« âge hyborien », un passé imaginaire plein de royaumes et de dieux inventés. Howard est mort en 1936, à trente ans ; ses récits sont dans le domaine public.",
      "La traduction est nouvelle, faite pour cette bibliothèque à partir du texte anglais, et elle suit Howard de près, avec son humour noir. Le récit s'ouvre sur un vers de comptine, traduit en vers libre.",
      "Il faut nommer ce que le récit montre. Conan tue un geôlier et un rival, et se venge brutalement d'une femme qui l'a trahi. Dans la maison du prêtre, des hommes pris au piège d'une poudre de folie s'entretuent sous les yeux du lecteur, et un long combat à mort, très sanglant, oppose Conan à une créature.",
    ],
  },
  "intro": [],
  "world": {"start": {"place": "cour", "hour": 21, "gold": 0, "food": 0, "items": [], "kits": {"guerrier": [], "rodeur": [], "voleur": [], "mage": [], "pretre": [], "barde": []}}},
}

T = ["L'oreille dans le coffret", "Un os de bœuf et un poignard", "Larrons dans la maison"]
R = [
  "À une fête de la cour, Nabonidus, le Prêtre rouge, tend au jeune noble Murilo un coffret d'or : il contient l'oreille d'un secrétaire qui vendait des secrets d'État pour lui. Murilo va trouver en prison un voleur cimmérien, Conan, arrêté pour le meurtre d'un prêtre receleur, et lui promet l'évasion s'il tue Nabonidus. Mais le geôlier acheté est arrêté, et Murilo, désespéré, se rend lui-même chez le Prêtre rouge à minuit. Dans le jardin, le chien de garde est mort ; dans la maison, le serviteur Joka a la nuque brisée ; dans un grand fauteuil attend une silhouette en robe rouge.",
  "Le nouveau geôlier entre seul dans la cellule de Conan, et ne ressort pas. Libre, le Cimmérien décide qu'il doit quand même sa promesse à Murilo. Mais il passe d'abord par le Dédale, le quartier des voleurs, pour régler son compte à la fille qui l'a vendu à la police et à son nouvel amant.",
  "Murilo se réveille dans les souterrains de la maison et y retrouve Conan, entré par l'égout et bloqué par une herse. Ils découvrent Nabonidus, assommé : la chose qui porte sa robe là-haut est un autre habitant de la maison. Le prêtre et ses deux ennemis concluent une trêve de larrons. Dans un grand miroir, ils regardent la salle du haut, où des conspirateurs viennent de pénétrer, et voient jouer les pièges du prêtre. Puis il faut monter, et affronter ce qui garde la porte.",
]
CHAPTERS = [{"title": "Chapitre " + str(i + 1) + " · " + t, "text": r} for i, (t, r) in enumerate(zip(T, R))]
CHAPTERS[2]["notice"] = True

PLACES = {
  "cour": {"ambiance": "chateau", "name": "Le palais de Murilo", "map": "corinthie", "x": 45, "y": 35, "region": "Le quartier des palais de marbre et d'ivoire aux tours pourpres", "desc": "Une fête à la cour, puis la chambre d'un jeune noble, où l'on ouvre en tremblant un petit coffret d'or."},
  "cachot": {"ambiance": "souterrain", "name": "Le cachot de la ville", "map": "corinthie", "x": 55, "y": 50, "region": "La prison la plus solide de la ville", "desc": "Une cellule obscure, des chaînes au mur, du pain moisi et de l'eau, et un seul garde la nuit."},
  "dedale": {"ambiance": "ville", "name": "Le Dédale", "map": "corinthie", "x": 70, "y": 65, "region": "Les bas quartiers, à l'ombre du temple d'Anu", "desc": "Des ruelles sans pavés pleines de boue et d'ordures, des cours fermées, des escaliers qui grincent, et des gens qui ne s'occupent que de leurs affaires."},
  "maison": {"ambiance": "nuit", "name": "La maison du Prêtre rouge", "map": "corinthie", "x": 35, "y": 45, "region": "Parmi les jardins clos de murs", "desc": "Un jardin sombre où rôde un grand chien, des tentures de velours, et une salle ronde à galerie, meublée comme pour un roi."},
  "souterrains": {"ambiance": "souterrain", "name": "Les souterrains", "map": "corinthie", "x": 35, "y": 47, "region": "Sous la maison du Prêtre rouge", "desc": "Des couloirs de dalles bien jointes, un tunnel vers les égouts barré d'une herse, et au mur du fond un grand disque d'argent qui luit faiblement."},
  "salle": {"ambiance": "chateau", "name": "La salle aux miroirs", "map": "corinthie", "x": 36, "y": 44, "region": "Dans la maison du Prêtre rouge", "desc": "Des miroirs aux murs entre des tentures de velours, des divans de soie, des portes voilées de rideaux, et une épaisse corde de velours qui pend près d'une porte."},
}

PEOPLE = {
  "conan": {"name": "Conan le Cimmérien", "aka": ["Conan", "Cimmérien"], "face": {"age": "jeune", "hair": "noir", "coif": "milong", "beard": "sans", "iris": "bleu", "skin": "hale"}, "qui": "Un jeune voleur barbare venu du Nord, le plus audacieux du Dédale.", "aspect": {"allure": "colosse, un simple pagne", "visage": "une crinière noire emmêlée, des yeux bleus"}},
  "murilo": {"name": "Murilo", "aka": ["Murilo"], "face": {"age": "jeune", "hair": "noir", "coif": "milong", "beard": "sans", "skin": "clair"}, "qui": "Un jeune aristocrate qui vend en secret des secrets d'État à des puissances étrangères.", "aspect": {"allure": "atours de petit-maître, manteau noir", "visage": "des boucles noires parfumées"}},
  "nabonidus": {"name": "Nabonidus", "aka": ["Nabonidus", "Prêtre rouge"], "face": {"age": "mur", "hair": "gris", "coif": "rase", "skin": "clair", "beard": "sans"}, "qui": "Le Prêtre rouge, prêtre du roi, maître secret de la ville et des intrigues du royaume.", "aspect": {"allure": "robe rouge à capuchon écarlate", "visage": "un regard énigmatique, le crâne rasé"}},
  "thak": {"name": "Thak", "aka": ["Thak"], "face": {"age": "adulte", "hair": "noir", "skin": "#2e2a28"}, "qui": "Une créature des montagnes de l'est de Zamora, ni singe ni homme, que Nabonidus a élevée pour en faire son garde et son serviteur.", "aspect": {"allure": "trapu, voûté, couvert de poils noirs", "visage": "de petits yeux rouges, de grands crocs"}},
  "joka": {"name": "Joka", "aka": ["Joka"], "face": {"age": "adulte", "hair": "noir", "coif": "court", "skin": "hale", "beard": "sans"}, "qui": "Le serviteur de Nabonidus, grand et silencieux.", "aspect": {"allure": "grand, taciturne"}},
  "athicus": {"name": "Athicus", "aka": ["Athicus"], "face": {"age": "mur", "hair": "brun", "coif": "court", "skin": "clair", "beard": "barbe"}, "qui": "Le garde de nuit de la prison, que Murilo a acheté.", "aspect": {"allure": "un geôlier aux trousseaux de clés"}},
  "petreus": {"name": "Pétréus", "aka": ["Pétréus"], "face": {"age": "jeune", "hair": "noir", "coif": "court", "skin": "hale", "beard": "sans"}, "qui": "Le chef d'un groupe de jeunes patriotes qui veulent débarrasser le royaume du Prêtre rouge.", "aspect": {"allure": "maigre, une dague à la main", "visage": "des yeux étincelants"}},
}
NO_AUTO = ["thak"]
MEET = {"C3_3": ["thak"]}

WORDS = {
  "receleur": "Celui qui garde et revend des objets volés.",
  "herse": "Une grille de fer qui tombe d'en haut pour fermer un passage.",
  "spadassin": "Un homme d'épée qu'on paie pour se battre ou pour tuer.",
  "petit-maître": "Un jeune élégant, très soigné de sa toilette, qu'on trouve un peu ridicule.",
  "gunderman": "Un homme du Gunderland, la province la plus au nord de l'Aquilonie.",
  "pagne": "Un morceau d'étoffe noué autour des reins.",
  "goule": "Un démon des légendes d'Orient qui dévore les morts.",
  "lotus": "Une plante dont Howard fait sortir des sucs, des poisons et des drogues.",
}

PT = {
  "C1_1": ("Un cadeau du Prêtre rouge", "cour"),
  "C1_2": ("Un marché au cachot", "cachot"),
  "C1_3": ("Minuit chez Nabonidus", "maison"),
  "C2_1": ("Le nouveau geôlier", "cachot"),
  "C2_2": ("Une dette au Dédale", "dedale"),
  "C3_1": ("Dans le noir", "souterrains"),
  "C3_2": ("La herse", "souterrains"),
  "C3_3": ("Le prêtre assommé", "souterrains"),
  "C3_4": ("Le grand miroir", "souterrains"),
  "C3_5": ("Ni singe ni homme", "souterrains"),
  "C3_6": ("D'autres visiteurs", "souterrains"),
  "C3_7": ("La corde de velours", "souterrains"),
  "C3_8": ("L'escalier", "salle"),
  "C3_9": ("Larrons ensemble", "salle"),
}
PAGES = {p: list(t) for p, t in PT.items()}
