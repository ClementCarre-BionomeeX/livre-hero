# Fiche d'« Au-delà de la rivière Noire » pour livre.py (Robert E. Howard, Weird Tales, mai et juin 1935 ; traduction nouvelle par Claude, 2026).
# Texte : /mnt/project-files/livre-heros/classiques/riviere/NN.txt (d'après Gutenberg 42254, « Beyond the Black River »),
# passé par traduction.py (pages C1_1…). Les titres des huit chapitres sont ceux de Howard, traduits.
# Ce qui doit rester caché jusqu'à sa page (titres de pages, qui, aspect, lieux, résumés) : ce qui attend la barque (C3_1) ;
# les bêtes de Zogar (C4_3-C4_4) ; ce qu'est la flamme verte et son lien avec Zogar (C7_1-C7_2) ; le sort du fort, de Balthus et
# de Zogar (C6_3, C6_6, C8_1).
HEAD = """// « Au-delà de la rivière Noire » (Beyond the Black River), Robert E. Howard, 1935 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais paru dans Weird Tales
// en mai et juin 1935 (Project Gutenberg n° 42254, domaine public). Les titres des chapitres sont ceux de Howard ; ceux des
// pages et tout ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude."""

BASE = {
  "id": "riviere",
  "title": "Au-delà de la rivière Noire",
  "subtitle": "Un récit de Conan le Cimmérien · Robert E. Howard, 1935",
  "summary": "Le Conajohara est une mince bande de forêt que l'Aquilonie a prise aux Pictes, tenue par un fort de rondins au bord de la rivière Noire. Balthus, un jeune homme venu de l'est pour s'y établir, rencontre sur la piste un coureur des bois cimmérien qui vient de tuer un Picte embusqué. Sur l'autre rive, un sorcier a juré de se venger du fort, et les tambours parlent chaque nuit. Un récit de Conan le Cimmérien, de Robert E. Howard, en entier, dans une traduction nouvelle, sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  "tags": ["aventure", "fantastique"],
  "author": "Robert E. Howard · traduction de Claude (2026)",
  "lecture": True,
  "age": 15,
  "skin": "parchemin",
  "cover": {"motif": "feuille", "color": "#1f2b22"},
  "glossary": None,
  "voice": "troisième personne, passé",
  "version": 1,
  "notice": {
    "title": "Un récit de 1935",
    "text": [
      "Robert E. Howard publie *Au-delà de la rivière Noire* en mai et juin 1935 dans *Weird Tales*, une revue américaine de récits étranges. Conan y est coureur des bois sur une frontière de colons, dans l'« âge hyborien », un passé imaginaire plein de royaumes et de dieux inventés. Howard est mort en 1936, à trente ans ; ses récits sont dans le domaine public.",
      "C'est un récit de frontière, écrit comme les histoires de l'Ouest américain : des colons prennent la terre d'un peuple de la forêt, les Pictes, qui se défend. Le récit dit lui-même qu'on les a chassés « par la tuerie et le massacre », et Conan juge cette colonisation folle ; mais la plupart du temps, on voit les Pictes avec les yeux de colons qui les craignent et les appellent « diables ». La traduction est nouvelle et suit Howard de près. Elle retire une phrase sur la « race blanche » des Pictes et les mots qui opposent sans cesse les « hommes blancs » aux Pictes « à la peau sombre ». Elle garde en revanche, tel quel, le jugement de Howard sur la barbarie qui ferme le récit.",
      "Il faut nommer ce que le récit montre : des têtes coupées, un prisonnier mis en pièces par une bête, des massacres de colons, et un jeune couple tué sur la route, la femme dépouillée de ses vêtements et mutilée.",
    ],
  },
  "intro": [],
  "world": {"start": {"place": "piste", "hour": 18, "gold": 0, "food": 0, "items": [], "kits": {"guerrier": [], "rodeur": [], "voleur": [], "mage": [], "pretre": [], "barde": []}}},
}

T = ["Conan perd sa hache", "Le sorcier de Gwawela", "Ceux qui rampent dans le noir", "Les bêtes de Zogar Sag", "Les enfants de Jhebbal Sag", "Les haches rouges de la frontière", "Le diable dans le feu", "Le Conajohara n'est plus"]
R = [
  "Sur une piste du Conajohara, Balthus, un jeune homme du Tauran, échappe à une flèche picte grâce à Conan, qui vient de tuer l'archer. Conan, coureur des bois au service du fort Tuscelan, lui parle de Zogar Sag, un sorcier picte que le gouverneur Valannus a jeté en prison et qui a juré de tuer ceux qui l'avaient pris. Ils trouvent le marchand Tiberias égorgé par une bête aux traces d'oiseau géant. En ramenant le corps, ils sont attirés à l'écart par un cri de femme ; une chose de flamme bleue en profite pour emporter la tête du mort.",
  "Au fort Tuscelan, dernier poste de l'Aquilonie au bord de la rivière Noire, Valannus reçoit Conan et Balthus. La garnison est affaiblie par l'eau empoisonnée et la peur de la magie de Zogar Sag ; le roi n'envoie pas de renforts. Valannus demande à Conan de traverser la rivière cette nuit avec quelques hommes pour tuer ou prendre le sorcier dans son village de Gwawela. Conan choisit des coureurs des bois, et Balthus se joint à eux.",
  "La barque traverse la rivière dans le noir. Conan et neuf hommes partent vers Gwawela ; Balthus et un compagnon gardent l'embarcation. Des Pictes surgissent de l'eau, tranchent la gorge du compagnon et assomment Balthus.",
  "Balthus se réveille attaché à un poteau à Gwawela, devant une pyramide faite des têtes de ses compagnons ; un coureur des bois blessé est attaché près de lui. Des guerriers de nombreux clans sont rassemblés. Zogar Sag appelle de la forêt un tigre à dents de sabre, qui met le blessé en pièces, puis un serpent géant. Une lance jetée de l'ombre transperce le serpent : c'est Conan, qui délivre Balthus dans la panique, tue au passage la bête enchaînée derrière l'autel où sont les têtes des victimes, et fuit avec lui par-dessus la palissade.",
  "Conan et Balthus fuient vers l'ouest. Conan tue un léopard lancé sur leur piste, puis trace dans la terre le signe de Jhebbal Sag, un dieu ancien des bêtes : une panthère s'incline devant lui et renonce. Conan explique que Zogar a uni quinze ou seize clans, trois mille guerriers, pour attaquer le fort. Ils se cachent le jour sur une colline, puis gagnent la rivière, loin au sud, et y tuent une bande de Pictes.",
  "Conan tue un messager picte pour lui prendre sa pirogue et repasse la rivière. Un chien sauvage, Balafre, se joint à eux. Ils arrivent trop tard : le fort est assiégé et perdu. Conan décide d'avertir les colons. Sur la route, ils trouvent un jeune couple massacré. Conan part prévenir les hommes partis aux salines ; Balthus fait fuir les femmes et les enfants des cabanes vers Velitrium, puis s'embusque derrière des troncs avec Balafre pour retenir les Pictes.",
  "Conan rejoint les hommes des salines et les mène vers le sud-est. La flamme verte l'attire avec la voix de Balthus. C'est un démon, fils de Jhebbal Sag comme Zogar, et lié à lui : ce qui frappe l'un frappe l'autre. Il veut tuer Conan, qui a osé tracer le signe sacré. Conan le combat et lui tranche presque la tête.",
  "Les Pictes ont été repoussés devant Velitrium. L'unique survivant du fort raconte à Conan la mort de Valannus, puis celle de Zogar Sag, frappé sans arme des mêmes blessures que le démon : sa mort a brisé l'élan des Pictes. Balthus et Balafre sont morts en retenant les Pictes assez longtemps pour sauver les femmes et les enfants. Conan boit à leur mémoire et jure de les venger. Le Conajohara est perdu pour l'Aquilonie.",
]
CHAPTERS = [{"title": "Chapitre " + str(i + 1) + " · " + t, "text": r} for i, (t, r) in enumerate(zip(T, R))]
CHAPTERS[1]["notice"] = True

PLACES = {
  "piste": {"ambiance": "foret", "name": "La piste de Velitrium", "map": "conajohara", "x": 55, "y": 50, "region": "Le Conajohara", "desc": "Une piste étroite entre deux murailles vertes, à quelques milles de la rivière Noire."},
  "fort": {"ambiance": "chateau", "name": "Le fort Tuscelan", "map": "conajohara", "x": 40, "y": 50, "region": "Le Conajohara", "desc": "Une palissade de rondins sur la rive est de la rivière Noire, ses tours, son donjon et sa place d'exercice."},
  "riviere": {"ambiance": "eau", "name": "La rivière Noire", "map": "conajohara", "x": 36, "y": 58, "region": "La frontière", "desc": "Une rivière maussade, sombre et luisante, bordée de buissons, entre la forêt picte et le Conajohara."},
  "gwawela": {"ambiance": "village", "name": "Gwawela", "map": "conajohara", "x": 28, "y": 56, "region": "Le pays picte", "desc": "Un village de huttes de boue et de clayonnage dans une palissade, et une longue hutte ornée de crânes."},
  "foret": {"ambiance": "foret", "name": "La forêt picte", "map": "conajohara", "x": 18, "y": 64, "region": "Le pays picte", "desc": "Une forêt immense et obscure à l'ouest de la rivière, des pistes, des rochers et des collines."},
  "route": {"ambiance": "route", "name": "La route de Velitrium", "map": "conajohara", "x": 60, "y": 48, "region": "Le Conajohara", "desc": "La route qui va du fort à la rivière du Tonnerre, et les cabanes de rondins des colons."},
  "bois": {"ambiance": "foret", "name": "Les bois du nord", "map": "conajohara", "x": 58, "y": 36, "region": "Le Conajohara", "desc": "Des bois épais entre la route et les salines, au bord du marais."},
  "velitrium": {"ambiance": "ville", "name": "Velitrium", "map": "conajohara", "x": 80, "y": 48, "region": "La rivière du Tonnerre", "desc": "Une ville frontière rude et turbulente, ses tavernes au bord de la rivière du Tonnerre."},
}

PEOPLE = {
  "balthus": {"name": "Balthus", "aka": ["Balthus"], "face": {"age": "jeune", "hair": "blond", "coif": "boucles", "beard": "sans", "skin": "clair"}, "qui": "Un jeune homme du Tauran, venu tenir la frontière.", "aspect": {"allure": "taille moyenne, bras épais et musclés", "visage": "ouvert, tignasse fauve en broussaille"}},
  "conan": {"name": "Conan le Cimmérien", "aka": ["Conan", "Cimmérien"], "face": {"age": "jeune", "hair": "noir", "coif": "milong", "beard": "sans", "iris": "bleu", "skin": "hale", "marks": ["cicatrice"]}, "qui": "Un barbare du Nord, coureur des bois au service du fort.", "aspect": {"allure": "grand, souple comme une panthère", "visage": "sombre, balafré, yeux bleus brûlants", "signe": "un casque à cornes de taureau"}},
  "valannus": {"name": "Valannus", "aka": ["Valannus"], "face": {"age": "jeune"}, "qui": "Le gouverneur du Conajohara, au fort Tuscelan.", "aspect": {"allure": "jeune, bien bâti, grave", "visage": "finement ciselé"}},
  "zogar": {"name": "Zogar Sag", "aka": ["Zogar Sag", "Zogar"], "face": {"age": "adulte"}, "qui": "Un sorcier picte de Gwawela, qui a juré de se venger.", "aspect": {"allure": "maigre, sous des plumes d'autruche", "visage": "hideux et malveillant"}},
  "tiberias": {"name": "Tiberias", "aka": ["Tiberias"], "face": {"age": "adulte", "skin": "clair"}, "qui": "Un marchand de Velitrium.", "aspect": {"allure": "petit et gras, tunique d'hermine"}},
  "balafre": {"name": "Balafre", "aka": ["Balafre"], "qui": "Un grand chien redevenu sauvage, qui vit dans les bois.", "aspect": {"allure": "grand, maigre, couturé de cicatrices"}},
}

WORDS = {
  "Conajohara": "Une province de forêt prise aux Pictes, entre la rivière du Tonnerre et la rivière Noire.",
  "Velitrium": "Une ville frontière au bord de la rivière du Tonnerre.",
  "Tuscelan": "Le fort qui garde la rivière Noire.",
  "Aquilonie|Aquilonien|Aquiloniens|aquilonien|aquilonienne": "Le plus puissant des royaumes hyboriens, à l'ouest.",
  "Pictes|Picte|picte|pictes": "Un peuple des forêts de l'ouest, divisé en clans.",
  "Gwawela|Gwawelis": "Le village picte le plus proche du fort, de l'autre côté de la rivière.",
  "Tauran": "Une région de l'Aquilonie, de bois et de prairies.",
  "Bossoniens|bossoniens|bossoniennes": "Les gens des marches bossoniennes, une bande de villages fortifiés pleins d'archers, qui protège l'Aquilonie à l'ouest.",
  "Gundermen|Gunderman": "Les gens du Gunderland, une province du nord de l'Aquilonie, réputés pour leurs piquiers.",
  "Venarium": "Une ville fortifiée que l'Aquilonie avait bâtie en Cimmérie, et que les Cimmériens ont détruite.",
  "Cimmérie|Cimmériens": "Le pays de collines grises et de brumes, au nord, d'où vient Conan.",
  "Hyboriens|hyboriens": "Les peuples des grands royaumes de l'ouest, dont l'Aquilonie.",
  "Jhebbal Sag": "Un dieu très ancien que, dit-on, toutes les choses vivantes adoraient autrefois.",
  "Gullah": "Un dieu des Pictes, le Velu qui vit dans la lune.",
  "Jhil": "Un dieu des Pictes, dont les enfants sont des oiseaux noirs.",
  "Mitra": "Le grand dieu des royaumes hyboriens.",
  "Crom": "Le dieu sombre des Cimmériens, qui vit sur une montagne et n'écoute pas les prières.",
  "lunas": "Des pièces de monnaie.",
  "huard": "Un oiseau aquatique au cri plaintif et étrange.",
  "Koush": "Un vaste pays du Sud, au-delà de la Stygie.",
  "Stygie|Stygiens": "Un royaume du sud où règnent des prêtres sorciers.",
  "Zingara": "Un royaume du sud-ouest, au bord de la mer.",
  "Barachas": "Des îles de la mer de l'ouest, repaire de pirates.",
  "Vilayet": "Une grande mer intérieure, à l'est.",
  "Hyrkaniens": "Les peuples cavaliers de l'est.",
  "Shémites": "Les gens du Shem, un pays de prairies et de déserts.",
  "kozak": "Les bandes d'aventuriers et de hors-la-loi des steppes.",
}

PT = {
  "C1_1": ("Un pas sur la piste", "piste"),
  "C1_2": ("Le Picte dans les buissons", "piste"),
  "C1_3": ("Venarium", "piste"),
  "C1_4": ("Un cri dans la forêt", "piste"),
  "C1_5": ("L'empreinte", "piste"),
  "C1_6": ("La civière", "piste"),
  "C2_1": ("Le fort Tuscelan", "fort"),
  "C2_2": ("Le gouverneur", "fort"),
  "C2_3": ("Une douzaine d'hommes", "fort"),
  "C3_1": ("Sur la rivière", "riviere"),
  "C4_1": ("Les poteaux", "gwawela"),
  "C4_2": ("Le chaman", "gwawela"),
  "C4_3": ("Ce qui vient de la forêt", "gwawela"),
  "C4_4": ("Un second appel", "gwawela"),
  "C4_5": ("La hutte de l'autel", "gwawela"),
  "C5_1": ("Vers l'ouest", "foret"),
  "C5_2": ("Le léopard", "foret"),
  "C5_3": ("Le signe", "foret"),
  "C5_4": ("La panthère", "foret"),
  "C5_5": ("La colline", "foret"),
  "C5_6": ("Un homme qui a couru le monde", "foret"),
  "C5_7": ("Sur la rive", "riviere"),
  "C6_1": ("La plume blanche", "riviere"),
  "C6_2": ("Balafre", "riviere"),
  "C6_3": ("Les torches sur les parapets", "fort"),
  "C6_4": ("La route de l'est", "route"),
  "C6_5": ("Les cabanes", "route"),
  "C6_6": ("Les troncs abattus", "route"),
  "C7_1": ("Une voix dans les bois", "bois"),
  "C7_2": ("Le feu vert", "bois"),
  "C8_1": ("À Velitrium", "velitrium"),
}
PAGES = {p: list(t) for p, t in PT.items()}
