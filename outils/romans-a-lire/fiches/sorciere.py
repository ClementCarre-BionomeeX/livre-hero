# Fiche d'« Une sorcière naîtra » pour livre.py (Robert E. Howard, Weird Tales, décembre 1934 ; traduction nouvelle par Claude, 2026).
# Texte : /mnt/project-files/livre-heros/classiques/sorciere/NN.txt (d'après Gutenberg 42227, « A Witch Shall Be Born »),
# passé par traduction.py (pages C1_1…). Les titres des six chapitres sont ceux de Howard, traduits.
# Ce qui doit rester caché jusqu'à sa page (titres de pages, qui, aspect, lieux, résumés) : qui est la visiteuse (C1_2) ;
# ce qu'est le mendiant (C3_4) ; la ruse des machines de siège (C5_3) ; ce qui vit dans le temple (C6_3) ; la fin (C6_4).
HEAD = """// « Une sorcière naîtra » (A Witch Shall Be Born), Robert E. Howard, 1934 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais paru dans Weird Tales
// en décembre 1934 (Project Gutenberg n° 42227, domaine public). Les titres des chapitres sont ceux de Howard ; ceux des
// pages et tout ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude."""

BASE = {
  "id": "sorciere",
  "title": "Une sorcière naîtra",
  "subtitle": "Un récit de Conan le Cimmérien · Robert E. Howard, 1934",
  "summary": "Une nuit, Taramis, reine de Khauran, voit apparaître dans sa chambre une femme qui a son visage, trait pour trait, et pas du tout son regard. Au matin, la reine ouvre les portes de la ville aux mercenaires d'un aventurier, et le capitaine de sa garde, un Cimmérien nommé Conan, est le seul à crier que ce n'est pas elle. Un récit de Conan le Cimmérien, de Robert E. Howard, en entier, dans une traduction nouvelle, sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  "tags": ["aventure", "fantastique"],
  "author": "Robert E. Howard · traduction de Claude (2026)",
  "lecture": True,
  "age": 16,
  "skin": "parchemin",
  "cover": {"motif": "lune", "color": "#3a1c22"},
  "glossary": None,
  "voice": "troisième personne, passé",
  "version": 1,
  "notice": {
    "title": "Un récit de 1934",
    "text": [
      "Robert E. Howard publie *Une sorcière naîtra* en décembre 1934 dans *Weird Tales*, une revue américaine de récits étranges. Conan y est capitaine de la garde de Khauran, un petit royaume au bord du désert, dans l'« âge hyborien », un passé imaginaire plein de royaumes et de dieux inventés. Howard est mort en 1936, à trente ans ; ses récits sont dans le domaine public.",
      "La traduction est nouvelle, faite pour cette bibliothèque à partir du texte anglais, et elle suit Howard de près. Elle allège les passages où Howard décrit des peuples par des traits physiques ou des caractères de « race » : le nez des mercenaires shémites et la « fatalité de leur race », la couleur de peau de voyageurs venus de l'est, et, dans la lettre d'Astreas, un jugement sur les paysans de Khauran et une comparaison avec des esclaves noirs.",
      "C'est le plus dur des récits de Conan, et il faut nommer ce qu'il contient : un viol, que le récit ne montre pas mais qu'il laisse entendre sans doute possible à la fin du premier chapitre ; la torture d'une prisonnière pendant des mois ; une crucifixion décrite longuement ; des femmes livrées aux soldats ; des sacrifices humains.",
    ],
  },
  "intro": [],
  "world": {"start": {"place": "palais", "hour": 2, "gold": 0, "food": 0, "items": [], "kits": {"guerrier": [], "rodeur": [], "voleur": [], "mage": [], "pretre": [], "barde": []}}},
}

T = ["Le croissant rouge sang", "L'arbre de mort", "Une lettre pour la Némédie", "Les loups du désert", "La voix du cristal", "Les ailes du vautour"]
R = [
  "Taramis, reine de Khauran, voit entrer dans sa chambre une jeune femme qui est son portrait exact : Salomé, sa sœur jumelle, qu'on croyait morte, abandonnée au désert à sa naissance parce qu'elle portait entre les seins le croissant rouge des sorcières. Élevée par un magicien du Khitaï, elle revient prendre le trône. Elle a écarté les gardes et fait entrer Constantius, le Faucon, chef de mercenaires shémites, dont Taramis avait refusé la main. Elle ouvre les portes de la ville à ses hommes et lui livre sa sœur.",
  "Valerius, jeune soldat blessé, raconte à Ivga comment la reine a dissous l'armée et fait de Constantius son époux, et comment Conan, capitaine de la garde, a crié que ce n'était pas Taramis avant d'être pris après un combat furieux. Constantius fait clouer Conan à une croix, près de la route des caravanes, et le laisse aux vautours. Conan en tue un avec les dents. Olgerd Vladislav, ancien hetman kozak devenu chef de nomades zuagirs, le fait détacher et l'emmène.",
  "Sept mois plus tard, le savant Astreas écrit à un ami de Némédie : Khauran est écrasée d'impôts et de violences, la reine a aboli le culte d'Ishtar, institué des sacrifices et caché un monstre dans le temple ; on dit que Conan pousse les Zuagirs à attaquer. Dans un cachot, Salomé tourmente Taramis et lui montre la tête de son conseiller Krallidès. Le mendiant sourd à qui elle fait jeter la tête est Valerius, qui sait désormais que la vraie reine vit.",
  "Sous la tente d'Olgerd, Conan annonce qu'il va prendre Khauran dans la semaine : il a réuni trois mille exilés khauraniens à l'oasis d'Akrel, et les Zuagirs le suivent, lui. Olgerd veut tirer son couteau ; Conan lui brise le bras, lui laisse la vie et le renvoie seul au désert, puis appelle ses hommes.",
  "Valerius et ses compagnons préparent la délivrance de Taramis pendant la bataille. Constantius sort dans la plaine, persuadé de disperser les nomades. Par un globe de cristal, Salomé suit la bataille : les machines de siège étaient fausses, les exilés de Khauran ont fendu les rangs des mercenaires, Khumbanigash est tombé. Salomé descend vers la prison pour en finir avec sa sœur, et y trouve un geôlier tué.",
  "Valerius délivre Taramis, mais Salomé la lui reprend et l'entraîne au temple pour la livrer à Thaug. Valerius tue le prêtre et transperce Salomé. Sur les marches, le peuple voit les deux reines et comprend. Salomé meurt en appelant Thaug, et le monstre sort du temple ; les archers de Conan l'abattent. Taramis retrouve son trône ; Conan refuse de rester et repart avec ses Zuagirs, après avoir fait clouer Constantius à la croix où il avait pendu.",
]
CHAPTERS = [{"title": "Chapitre " + str(i + 1) + " · " + t, "text": r} for i, (t, r) in enumerate(zip(T, R))]
CHAPTERS[1]["notice"] = True

PLACES = {
  "palais": {"ambiance": "chateau", "name": "Le palais de Khauran", "map": "khauran", "x": 50, "y": 50, "region": "Khauran", "desc": "La chambre de la reine, ses candélabres d'or et ses tentures de velours, et les tours qui dominent la ville."},
  "ville": {"ambiance": "ville", "name": "Les rues de Khauran", "map": "khauran", "x": 48, "y": 54, "region": "Khauran", "desc": "Des ruelles, des cours ouvertes et des toits en jardins, sous la garde des mercenaires."},
  "croix": {"ambiance": "route", "name": "La croix sur la route des caravanes", "map": "khauran", "x": 60, "y": 66, "region": "La plaine", "desc": "À un mille des murs, au bord de la route, là où s'arrêtent les vautours du désert."},
  "cachots": {"ambiance": "souterrain", "name": "Les cachots", "map": "khauran", "x": 51, "y": 49, "region": "Khauran", "desc": "Une prison reliée au palais par une galerie voûtée, et un cachot tout au fond."},
  "camp": {"ambiance": "route", "name": "Le camp des Zuagirs", "map": "khauran", "x": 82, "y": 78, "region": "Le désert", "desc": "Des rangées de tentes en poil de chameau, des palmiers, et une tente de soie pleine de butin."},
  "tour": {"ambiance": "ville", "name": "Une tour près du rempart", "map": "khauran", "x": 46, "y": 58, "region": "Khauran", "desc": "Une chambre où des hommes en mailles usées parlent bas, l'épée au côté."},
  "temple": {"ambiance": "temple", "name": "Le temple d'Ishtar", "map": "khauran", "x": 52, "y": 47, "region": "Khauran", "desc": "Un grand édifice en face du palais, son portique à colonnes, sa nef, son autel et une porte de métal."},
}

PEOPLE = {
  "conan": {"name": "Conan le Cimmérien", "aka": ["Conan", "Cimmérien"], "face": {"age": "jeune", "hair": "noir", "coif": "court", "beard": "sans", "iris": "bleu", "skin": "hale", "marks": ["cicatrice"]}, "qui": "Un barbare du Nord, capitaine de la garde de la reine de Khauran.", "aspect": {"allure": "presque un géant, bruni par le soleil", "visage": "crinière noire, yeux bleus brûlants", "signe": "mailles noires"}},
  "taramis": {"name": "Taramis", "aka": ["Taramis"], "f": True, "face": {"age": "jeune", "hair": "noir", "coif": "chignon", "skin": "clair"}, "qui": "La reine de Khauran, aimée de son peuple.", "aspect": {"allure": "souple, digne, royale", "visage": "cheveux noirs relevés, yeux sombres"}},
  "salome": {"name": "Salomé", "aka": ["Salomé"], "f": True, "face": {"age": "jeune", "hair": "noir", "coif": "chignon", "skin": "clair"}, "qui": "La sœur jumelle de Taramis, qu'on croyait morte à sa naissance.", "aspect": {"allure": "le portrait de la reine, en panthère", "visage": "yeux étincelants, lèvres cruelles", "signe": "un croissant rouge sur la poitrine"}},
  "constantius": {"name": "Constantius", "aka": ["Constantius", "Faucon"], "face": {"age": "adulte", "hair": "noir", "coif": "court", "beard": "moustache", "iris": "brun", "skin": "hale"}, "qui": "Un aventurier kothien, le Faucon, voïvode des Compagnies libres.", "aspect": {"allure": "grand, mince, souple comme l'acier", "visage": "aquilin, mince moustache noire", "signe": "bottes de Kordava"}},
  "valerius": {"name": "Valerius", "aka": ["Valerius"], "face": {"age": "jeune", "beard": "sans", "skin": "hale"}, "qui": "Un jeune soldat de l'armée de Khauran.", "aspect": {"allure": "jeune, nerveux, ardent"}},
  "ivga": {"name": "Ivga", "aka": ["Ivga"], "f": True, "face": {"age": "jeune"}, "qui": "La jeune fille qu'aime Valerius.", "aspect": {"allure": "douce et vive"}},
  "olgerd": {"name": "Olgerd Vladislav", "aka": ["Olgerd"], "face": {"age": "adulte", "hair": "noir", "coif": "court", "beard": "barbe", "iris": "gris", "skin": "hale"}, "qui": "Un ancien hetman kozak, devenu chef d'une bande de nomades zuagirs.", "aspect": {"allure": "grand, dur, vêtu de soie", "visage": "courte barbe noire, yeux gris", "signe": "couteau tcherkesse"}},
  "djebal": {"name": "Djebal", "aka": ["Djebal"], "face": {"age": "adulte", "skin": "hale"}, "qui": "Un nomade zuagir de la bande d'Olgerd.", "aspect": {"allure": "maigre, en robe blanche"}},
  "astreas": {"name": "Astreas", "aka": ["Astreas"], "face": {"age": "mur"}, "qui": "Un savant de Némédie qui voyage en Orient.", "aspect": {"allure": "savant voyageur, épistolier"}},
  "khumbanigash": {"name": "Khumbanigash", "aka": ["Khumbanigash"], "face": {"age": "adulte", "hair": "noir", "coif": "court", "beard": "longue", "iris": "noir", "skin": "hale"}, "qui": "Le général des mercenaires shémites.", "aspect": {"allure": "géant aux épaules de taureau", "visage": "grande barbe noire", "signe": "mailles d'argent"}},
  "zang": {"name": "Zang", "aka": ["Zang"], "face": {"age": "ancien", "beard": "sans"}, "qui": "Un prêtre au service de la reine.", "aspect": {"allure": "pas de chat, silencieux", "visage": "parchemin jauni tendu sur un crâne"}},
}
NO_AUTO = ["taramis"]
MEET = {"C1_1": ["taramis"]}

WORDS = {
  "Khauran": "Un petit royaume au bord du désert, et sa ville, qui tient une route des caravanes.",
  "Khauranien|Khauraniens|khauranien|khauraniens": "De Khauran.",
  "Koth|Kothien|kothien": "Un grand royaume hyborien, à l'ouest de Khauran.",
  "Ishtar": "La déesse qu'on adore à Khauran.",
  "Mitra": "Le grand dieu des royaumes hyboriens de l'ouest.",
  "Shémites|Shémite|shémite|shémites": "Les peuples du Shem : gens des cités de l'ouest, ou nomades du désert de l'est.",
  "Shem": "Un vaste pays de prairies et de déserts, au sud des royaumes hyboriens.",
  "Zuagirs|Zuagir": "Des nomades du désert, au-delà de la rivière de Khauran.",
  "Zaporoska": "Une rivière des steppes où campent les kozaks.",
  "kozak|kozaki": "Les bandes d'aventuriers et de hors-la-loi des steppes, qui pillent les frontières du Touran.",
  "hetman": "Un chef des kozaks.",
  "voïvode": "Un titre de chef de guerre, chez les Kothiens.",
  "Compagnies libres": "Des troupes de mercenaires qui se vendent au plus offrant.",
  "askhaurienne": "De la dynastie askhaurienne, la famille royale de Khauran.",
  "Khitaï": "Un royaume de l'extrême est, aux jungles hantées.",
  "Stygie": "Un royaume du sud où règnent des prêtres sorciers.",
  "Paikang": "Une cité du Khitaï, aux tours pourpres.",
  "Touran|Touraniens|touranien|touraniens": "Le grand royaume hyrkanien, au nord-est.",
  "Némédie": "Un grand royaume hyborien de l'ouest.",
  "Kordava": "La capitale de la Zingara, connue pour ses cuirs.",
  "khalat": "Une longue robe à manches, qu'on serre d'une ceinture.",
  "keffieh": "Une coiffe d'étoffe des hommes du désert, tenue par un cordon.",
  "asshuri": "Les guerriers en armure des cités du Shem.",
  "Akrel": "Une oasis du désert, à l'est de Khauran.",
  "Vezek": "Un avant-poste touranien où les caravanes paient le péage.",
  "Shushan": "Une riche cité du Shem.",
  "Argos": "Un royaume hyborien du bord de la mer.",
  "Hyboriens|Hyborien|hyborienne|hyboriens": "Les peuples des grands royaumes de l'ouest, dont viennent les gens de Khauran.",
  "Pelishtim|Anakim|Akkharim": "Des cités du Shem de l'ouest.",
  "tcherkesse": "D'un peuple des steppes, renommé pour ses couteaux.",
  "bakhariote": "De Bakhariot, un pays où l'on fait de belles ceintures de cuir.",
  "tulwars": "Des sabres courbes.",
  "Crom": "Le dieu sombre des Cimmériens, qui vit sur une montagne et n'écoute pas les prières.",
  "Korveka": "Une bataille où l'armée de Khauran s'est illustrée.",
}

PT = {
  "C1_1": ("Une tête dans la lumière", "palais"),
  "C1_2": ("Le croissant rouge", "palais"),
  "C1_3": ("Le Faucon", "palais"),
  "C1_4": ("Une nuit de trahison", "palais"),
  "C2_1": ("Un soldat blessé", "ville"),
  "C2_2": ("Ce qu'a vu Valerius", "ville"),
  "C2_3": ("La croix", "croix"),
  "C2_4": ("Les vautours", "croix"),
  "C2_5": ("Les cavaliers du soir", "croix"),
  "C3_1": ("La lettre d'Astreas", "ville"),
  "C3_2": ("Le temple profané", "ville"),
  "C3_3": ("Le cachot", "cachots"),
  "C3_4": ("Le mendiant sourd", "cachots"),
  "C4_1": ("La tente d'Olgerd", "camp"),
  "C4_2": ("Trois mille exilés", "camp"),
  "C4_3": ("Le vrai chef", "camp"),
  "C5_1": ("Les conjurés", "tour"),
  "C5_2": ("Le départ des mercenaires", "palais"),
  "C5_3": ("La voix du cristal", "palais"),
  "C6_1": ("Une torche dans le cachot", "cachots"),
  "C6_2": ("La nef", "temple"),
  "C6_3": ("Les deux reines", "temple"),
  "C6_4": ("Le retour du capitaine", "temple"),
}
PAGES = {p: list(t) for p, t in PT.items()}
