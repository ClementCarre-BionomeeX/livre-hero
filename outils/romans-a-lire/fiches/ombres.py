# Fiche d'« Ombres au clair de lune » pour livre.py (Robert E. Howard, Weird Tales, avril 1934 ; traduction nouvelle par Claude, 2026).
# Texte : /mnt/project-files/livre-heros/classiques/ombres/NN.txt (d'après Gutenberg 42188, « Shadows in the Moonlight »),
# passé par traduction.py (pages C1_1…). Les chapitres de Howard sont seulement numérotés : leurs titres sont de Claude.
# Ce qui doit rester caché jusqu'à sa page (titres de pages, qui, aspect, lieux, résumés) : ce que sont les statues
# (C2_1) ; ce qui rôde dans les bois et a lancé la pierre (C3_3, C3_4) ; ce qui arrive aux pirates dans la ruine (C3_4, C4_1).
HEAD = """// « Ombres au clair de lune » (Shadows in the Moonlight), Robert E. Howard, 1934 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais paru dans Weird Tales
// en avril 1934 (Project Gutenberg n° 42188, domaine public). Les chapitres de Howard sont seulement numérotés ; leurs
// titres, ceux des pages et tout ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude."""

BASE = {
  "id": "ombres",
  "title": "Ombres au clair de lune",
  "subtitle": "Un récit de Conan le Cimmérien · Robert E. Howard, 1934",
  "summary": "Sur le Vilayet, mer intérieure d'un âge oublié, Olivia fuit à cheval à travers les roseaux le seigneur hyrkanien qui la tient captive. Il la rattrape au bord de l'eau, quand un homme surgit des roseaux, l'épée à la main : un barbare venu du Nord, seul survivant d'une bande que ce même seigneur a fait massacrer. Ensemble, ils prennent la mer et abordent une île qu'on dit déserte, où un perroquet crie des mots que personne ne comprend. Un récit de Conan le Cimmérien, de Robert E. Howard, en entier, dans une traduction nouvelle, sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  "tags": ["aventure", "fantastique"],
  "author": "Robert E. Howard · traduction de Claude (2026)",
  "lecture": True,
  "age": 14,
  "skin": "parchemin",
  "cover": {"motif": "lune", "color": "#22303f"},
  "glossary": None,
  "voice": "troisième personne, passé",
  "version": 1,
  "notice": {
    "title": "Un récit de 1934",
    "text": [
      "Robert E. Howard, jeune Texan qui vit de sa plume, publie *Ombres au clair de lune* en avril 1934 dans *Weird Tales*, une revue populaire de récits étranges. C'est l'une des aventures de Conan le Cimmérien, qu'il a inventé deux ans plus tôt. Howard est mort en 1936, à trente ans ; ses récits sont dans le domaine public.",
      "Conan vit dans un âge imaginaire que Howard place très loin avant l'histoire connue, l'« âge hyborien » : des royaumes inventés, comme l'Ophir, le Koth ou le Touran, des dieux inventés, comme Crom ou Mitra, et une mer intérieure, le Vilayet. Chaque récit se lit seul.",
      "La traduction est nouvelle, faite pour cette bibliothèque à partir du texte anglais, et elle suit Howard de près, dans son style rapide et chargé. Elle adoucit une injure et retire deux comparaisons qui jugent des peuples par la couleur de leur peau, ordinaires dans les revues américaines du temps.",
      "C'est un récit violent. Un homme y est tué avec acharnement, on y torture un captif en rêve, des pirates y meurent en grand nombre. Olivia a été vendue par son père et retenue captive par un seigneur qui l'a humiliée ; le récit le dit sans détails, mais il le dit.",
    ],
  },
  "intro": [],
  "world": {"start": {"place": "roseaux", "hour": 16, "gold": 0, "food": 0, "items": [], "kits": {"guerrier": [], "rodeur": [], "voleur": [], "mage": [], "pretre": [], "barde": []}}},
}

T = ["L'île du Vilayet", "Les statues et les pirates", "Ce qui rôdait sous les arbres", "Quarante-quatre"]
R = [
  "Dans les roseaux du Vilayet, Shah Amurath, seigneur hyrkanien d'Akif, rattrape Olivia, une fille du roi d'Ophir qui s'était enfuie de son palais. Un rescapé des kozaki, que les Hyrkaniens ont massacrés au bord de l'Ilbars, surgit et le tue. C'est Conan le Cimmérien ; il emmène Olivia dans sa barque, vers le nord. À l'aube, ils abordent une île boisée. Un perroquet crie des mots inconnus, une énorme pierre taillée est lancée sur eux depuis un fourré, et sur un plateau ils trouvent une ruine pleine de statues de fer noir. Ils aperçoivent une voile au nord et passent la nuit dans la ruine.",
  "Olivia rêve d'un jeune homme torturé dans cette salle par des guerriers que son père, un être divin, a changés en statues en montrant la lune. À son réveil, elle croit voir les statues bouger sous la lune, et s'enfuit. La barque est fracassée, et quelque chose les poursuit dans les arbres. Au matin, des pirates débarquent d'une galère hyrkanienne. Conan tue en duel leur chef, Sergius de Khrosha, mais Aratus l'assomme d'un coup de fronde. Ivanos le protège ; on l'emmène ligoté dans la ruine. Olivia, seule sur les falaises, s'évanouit.",
  "Le soir, quelque chose escalade la falaise vers Olivia ; elle s'enfuit vers le camp des pirates, attend qu'ils soient ivres morts, et coupe les liens de Conan tandis que la lune entre dans la salle. Au pied des falaises, un homme-singe gris les attaque ; Conan le tue au terme d'une lutte terrible. C'est lui qui avait lancé la pierre. Des cris de massacre montent des ruines. Conan et Olivia gagnent la galère.",
  "Au petit jour, quarante-quatre pirates rescapés de la nuit demandent à monter à bord. Conan exige d'être reconnu capitaine selon la loi de la Fraternité Rouge ; Ivanos le soutient, et tous jurent sur la garde de leur épée. Olivia choisit de partir avec lui.",
]
CHAPTERS = [{"title": "Chapitre " + str(i + 1) + " · " + t, "text": r} for i, (t, r) in enumerate(zip(T, R))]
CHAPTERS[0]["notice"] = True

PLACES = {
  "roseaux": {"ambiance": "eau", "name": "Les roseaux du Vilayet", "map": "vilayet", "x": 30, "y": 80, "region": "La côte sud-ouest", "desc": "Une jungle de hauts roseaux, une petite clairière, et l'eau bleue qui clapote contre la rive basse."},
  "mer": {"ambiance": "mer", "name": "Le Vilayet", "map": "vilayet", "x": 40, "y": 55, "region": "La mer intérieure", "desc": "Une grande mer intérieure que les galères hyrkaniennes tiennent comme un étang."},
  "baie": {"ambiance": "eau", "name": "La baie de l'île", "map": "vilayet", "x": 52, "y": 30, "region": "L'île", "desc": "Une baie bleue et calme, des arbres qui trempent leurs racines dans l'eau, une barque amarrée."},
  "bois": {"ambiance": "foret", "name": "Les bois de l'île", "map": "vilayet", "x": 54, "y": 27, "region": "L'île", "desc": "Des arches de feuillage, une herbe courte et douce, des fruits dorés, et des fourrés où rien ne laisse de traces."},
  "ruines": {"ambiance": "temple", "name": "La ruine du plateau", "map": "vilayet", "x": 55, "y": 24, "region": "L'île", "desc": "Un grand bâtiment de pierre verdâtre au toit crevé, et dans sa salle, entre les piliers, des statues de fer noir."},
  "plateau": {"ambiance": "champs", "name": "Le plateau", "map": "vilayet", "x": 56, "y": 23, "region": "L'île", "desc": "Un plateau d'herbe haute, presque nu, entre les bois du rivage et les falaises du nord."},
  "falaises": {"ambiance": "montagne", "name": "Les falaises du nord", "map": "vilayet", "x": 57, "y": 19, "region": "L'île", "desc": "Le point le plus haut de l'île : un chaos de rochers qui plonge à pic sur les bois de la plage."},
  "galere": {"ambiance": "mer", "name": "La galère à l'ancre", "map": "vilayet", "x": 50, "y": 22, "region": "L'île", "desc": "Une galère hyrkanienne au mât peint, à l'ancre près d'une étroite plage."},
}

PEOPLE = {
  "olivia": {"name": "Olivia", "aka": ["Olivia"], "f": True, "face": {"age": "jeune", "hair": "noir", "coif": "boucles", "skin": "clair"}, "qui": "Une jeune femme qui fuit le seigneur hyrkanien qui la tient captive.", "aspect": {"allure": "mince, en sandales et tunique", "visage": "cheveux sombres et bouclés, épaules blanches"}},
  "shahamurath": {"name": "Shah Amurath", "aka": ["Shah Amurath"], "face": {"age": "adulte", "hair": "noir", "coif": "court", "iris": "brun", "shape": "allonge"}, "qui": "Le seigneur hyrkanien d'Akif, vainqueur des kozaki.", "aspect": {"allure": "grand, mince, dur comme l'acier", "visage": "casque d'or ciselé, yeux bruns moqueurs", "signe": "cotte de mailles argentée"}},
  "conan": {"name": "Conan le Cimmérien", "aka": ["Conan", "Cimmérien"], "face": {"age": "jeune", "hair": "noir", "coif": "milong", "beard": "sans", "iris": "bleu", "skin": "hale"}, "qui": "Un barbare venu de Cimmérie, au nord, qui combattait avec les kozaki.", "aspect": {"allure": "géant bronzé, souple comme un fauve", "visage": "crinière noire, yeux bleus brûlants", "signe": "une grande épée"}},
  "sergius": {"name": "Sergius de Khrosha", "aka": ["Sergius"], "face": {"age": "adulte", "hair": "noir", "coif": "rase", "beard": "moustache", "iris": "noir", "shape": "rond"}, "qui": "Un Kothien, chef de la bande de pirates, qui connaît Conan de longue date.", "aspect": {"allure": "géant ventru, nu jusqu'à la taille", "visage": "crâne rasé, moustaches tombantes", "signe": "babouches vertes à bouts retroussés"}},
  "aratus": {"name": "Aratus", "aka": ["Aratus"], "face": {"age": "adulte", "hair": "brun", "coif": "court", "shape": "allonge"}, "qui": "Un pirate brythunien, lieutenant de Sergius.", "aspect": {"allure": "pirate à tête de rat", "signe": "une fronde"}},
  "ivanos": {"name": "Ivanos", "aka": ["Ivanos"], "face": {"age": "adulte", "hair": "brun", "coif": "court", "shape": "allonge"}, "qui": "Un pirate corinthien, lieutenant de Sergius, qui déteste Aratus.", "aspect": {"allure": "Corinthien maigre"}},
}
NO_AUTO = ["olivia", "shahamurath"]  # nommés à la première page (C1_1)
MEET = {"C1_1": ["olivia", "shahamurath"]}

WORDS = {
  "Vilayet": "Une grande mer intérieure de l'âge hyborien, à l'est des royaumes ; ses rives sud-ouest appartiennent aux Hyrkaniens.",
  "Hyrkanien|Hyrkaniens|hyrkanien|hyrkanienne": "Le peuple de cavaliers venu de l'est qui tient le Touran et les côtes du Vilayet.",
  "Touran": "Le royaume hyrkanien des bords du Vilayet, dont le roi est Yildiz.",
  "kozak|kozaki": "Ce que les Hyrkaniens appellent les bandes d'aventuriers et de hors-la-loi des steppes, qui pillent leurs frontières.",
  "Cimmérie|Cimmérien": "Un pays de collines sombres et froides, loin au nord-ouest, peuplé de barbares.",
  "Ophir|Ophiréenne": "Un petit royaume riche de l'âge hyborien, au sud-ouest.",
  "Koth|Kothien|Kothiens": "Un grand royaume de l'âge hyborien, au sud, voisin de l'Ophir.",
  "Shémite|Shémites|shémite|shémites": "Du Shem, un pays de prairies et de déserts au sud des royaumes hyboriens.",
  "Zamorien|Zamoriens": "De Zamora, un royaume de l'est, réputé pour ses voleurs.",
  "Brythunien|Brythuniens": "De Brythunie, un royaume du nord-est de l'âge hyborien.",
  "Corinthien|Corinthiens": "De Corinthie, un royaume de l'âge hyborien, entre l'ouest et l'est.",
  "hyboriens": "Des royaumes de l'âge hyborien, l'âge oublié que Howard imagine bien avant l'histoire connue.",
  "Akif": "Une ville hyrkanienne de la côte du Vilayet, dont Shah Amurath est le seigneur.",
  "Ilbars": "Un fleuve qui se jette dans le Vilayet, où les kozaki ont été massacrés.",
  "Compagnons Libres": "Une bande de mercenaires et de pillards sans maître, de toutes les races.",
  "Fraternité Rouge": "Le nom que se donnent les pirates du Vilayet, avec leurs propres lois.",
  "Crom": "Le dieu sombre des Cimmériens, qui vit sur une montagne et ne donne rien aux hommes que le courage.",
  "Mitra": "Le grand dieu des royaumes hyboriens de l'ouest.",
  "Ishtar": "Une déesse adorée au Koth et au Shem.",
  "mangonneaux": "Des machines de guerre qui lancent de grosses pierres.",
  "balistes": "Des machines de guerre, sortes de grandes arbalètes qui lancent des traits ou des pierres.",
  "cyclopéens": "D'une taille énorme, comme si des géants les avaient posés.",
  "anthropoïde": "Qui ressemble à un homme ; se dit des grands singes.",
  "plat-bord": "Le rebord supérieur de la coque d'un bateau.",
  "pagne": "Un morceau d'étoffe noué autour des reins.",
}

PT = {
  "C1_1": ("Dans les roseaux", "roseaux"),
  "C1_2": ("Le rescapé de l'Ilbars", "roseaux"),
  "C1_3": ("Une fille du roi d'Ophir", "mer"),
  "C1_4": ("Une nuit sur le Vilayet", "mer"),
  "C1_5": ("Le perroquet", "baie"),
  "C1_6": ("Une pierre dans la clairière", "bois"),
  "C1_7": ("Les hommes de fer", "ruines"),
  "C1_8": ("Une voile au nord", "ruines"),
  "C2_1": ("Le rêve d'Olivia", "ruines"),
  "C2_2": ("Sous la lune", "plateau"),
  "C2_3": ("Au bord de l'eau", "bois"),
  "C2_4": ("La Fraternité Rouge", "falaises"),
  "C2_5": ("Le duel", "plateau"),
  "C3_1": ("Quelque chose sur la falaise", "falaises"),
  "C3_2": ("La nuit des pirates", "ruines"),
  "C3_3": ("Dans l'ombre des falaises", "plateau"),
  "C3_4": ("Des cris dans la nuit", "plateau"),
  "C4_1": ("Le serment sur la garde", "galere"),
}
PAGES = {p: list(t) for p, t in PT.items()}
