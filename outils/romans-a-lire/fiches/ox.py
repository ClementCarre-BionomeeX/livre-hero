# Fiche du recueil « Le Docteur Ox » pour livre.py (textes de Jules Verne et de Paul Verne, Hetzel, 1874).
# Texte : miroir Gutenberg FR (11589), fiches/ox_texte.py pre, gut.py p1.txt … p5.txt, ox_texte.py post c1.json … c5.json ch.json.
# L'orthographe du temps reste telle quelle (« très-beau », « Groënland », « norwégien », « dénoûment »).
# Ce qui doit rester caché jusqu'à sa page (titres de pages, qui, aspect, lieux, résumés) : ce que fait le gaz du
# docteur Ox (I4_2, I9, I12, I15 à I17) ; qui est le petit vieillard et ce que devient Zacharius (II3 à II5) ; qui est
# l'inconnu de la nacelle et la fin du voyage (III1_8, III1_9) ; ce qu'est devenu Louis Cornbutte (IV11_2, IV12_1) ;
# ce que trame André Vasling (IV13 à IV15) ; qui meurt dans les glaces (IV16) ; l'issue de l'ascension (V1_8 à V1_10).
HEAD = """// « Le Docteur Ox », Jules Verne, 1874 : un livre à lire, sans choix (lecture: true). Recueil de quatre récits de
// Jules Verne et d'un récit de son frère Paul, domaine public, d'après l'édition numérisée par le Projet Gutenberg
// (Hetzel). Les titres des chapitres de « Maître Zacharius » et d'« Un hivernage dans les glaces » sont ceux de Verne ;
// ceux du « Docteur Ox », très longs chez Verne, sont de Claude et cités dans les résumés, comme les titres des pages
// et tout ce qui vit dans les tags (gens, lieux, mots, résumés)."""

BASE = {
  "id": "ox",
  "title": "Le Docteur Ox",
  "subtitle": "Quatre récits de Jules Verne, et une ascension du mont Blanc par son frère Paul · 1874",
  "summary": "Un recueil en cinq récits. « Une fantaisie du docteur Ox » : Quiquendone, petite ville flamande si paisible qu'on y met dix ans à prendre une décision, accepte l'offre d'un savant étranger qui veut l'éclairer au gaz, à ses frais. Bientôt, la ville la plus calme du monde change d'humeur. « Maître Zacharius » : à Genève, au temps des premières montres, un vieil horloger de génie, orgueilleux de son œuvre, voit toutes ses horloges s'arrêter l'une après l'autre. « Un drame dans les airs » : un aéronaute, à Francfort, s'élève en ballon avec un passager qu'il n'a pas invité. « Un hivernage dans les glaces » : à Dunkerque, un vieux capitaine part chercher son fils perdu dans les mers du Groenland, avec la fiancée de celui-ci à son bord. Enfin, le récit vrai d'une ascension du mont Blanc en 1871, par Paul Verne. Une comédie, un conte fantastique, deux aventures, un récit de montagne. Le livre en entier, sans choix, page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  "tags": ["aventure", "humour"],
  "author": "Jules Verne",
  "lecture": True,
  "age": 11,
  "skin": "parchemin",
  "cover": {"motif": "bouteille", "color": "#4a3a2a"},
  "glossary": None,
  "voice": "troisième personne, passé",
  "version": 1,
  "notice": {
    "title": "Un livre de 1874",
    "text": [
      "Le volume a paru chez Hetzel en 1874. « Une fantaisie du docteur Ox » était alors toute récente ; « Maître Zacharius », « Un drame dans les airs » et « Un hivernage dans les glaces » datent des débuts de Verne, vingt ans plus tôt, avant ses grands romans. Le dernier récit, l'ascension du mont Blanc, est de son frère Paul Verne, qui l'a vraiment faite en août 1871. Le texte est celui de l'édition de Hetzel, sans retouche, avec son orthographe du temps (« très-beau », « Groënland », « norwégien »). L'avertissement de l'éditeur, qui présente le volume, n'est pas repris.",
      "« Un hivernage dans les glaces » décrit en passant les habitants du Groenland avec le regard d'un Européen de 1855. « Maître Zacharius » est un conte fantastique et religieux. Ces façons de voir sont datées ; le livre les garde telles qu'il les a écrites.",
    ],
    "reminder": "Ce chapitre décrit les habitants du Groenland avec le regard d'un Européen de 1855.",
  },
  "intro": [],
  "world": {"start": {"place": "parloir", "hour": 20, "gold": 0, "food": 0, "items": [], "kits": {"guerrier": [], "rodeur": [], "voleur": [], "mage": [], "pretre": [], "barde": []}}},
}

R1 = [
  "« Comme quoi il est inutile de chercher, même sur les meilleures cartes, la petite ville de Quiquendone. » Verne présente Quiquendone, en Flandre, ses deux mille trois cent quatre-vingt-treize habitants, et leur calme sans égal.",
  "« Où le bourgmestre van Tricasse et le conseiller Niklausse s'entretiennent des affaires de la ville. » Une conversation qui prend son temps, dans le parloir du bourgmestre, et la maison où il vit avec sa femme, sa fille Suzel, sa sœur Tatanémance et sa servante Lotchè.",
  "« Où le commissaire Passauf fait une entrée aussi bruyante qu'inattendue. » On parle de l'éclairage au gaz que le docteur Ox offre à la ville, quand quelqu'un frappe à la porte.",
  "« Où le docteur Ox se révèle comme un physiologiste de premier ordre et un audacieux expérimentateur. » Qui est le docteur Ox ? Et que dit-il à son préparateur Ygène, dans leur cabinet de travail ?",
  "« Où le bourgmestre et le conseiller vont faire une visite au docteur Ox, et ce qui s'ensuit. »",
  "« Où Frantz Niklausse et Suzel van Tricasse forment quelques projets d'avenir. » Deux fiancés très patients.",
  "« Où les andante deviennent des allegro et les allegro des vivace. » Une représentation des Huguenots au théâtre de Quiquendone, où l'on joue d'ordinaire les opéras très, très lentement.",
  "« Où l'antique et solennelle valse allemande se change en tourbillon. » Le lendemain du théâtre, puis une soirée chez le bourgmestre.",
  "« Où le docteur Ox et son préparateur Ygène ne se disent que quelques mots. »",
  "« Dans lequel on verra que l'épidémie envahit la ville entière et quel effet elle produisit. » Les plantes, les bêtes et les gens de Quiquendone changent.",
  "« Où les Quiquendoniens prennent une résolution héroïque. » Une vieille querelle avec la ville voisine de Virgamen revient à la mémoire de tous.",
  "« Dans lequel le préparateur Ygène émet un avis raisonnable, qui est repoussé avec vivacité par le docteur Ox. »",
  "« Où il est prouvé une fois de plus que d'un lieu élevé on domine toutes les petitesses humaines. » Le bourgmestre et le conseiller montent à la tour du beffroi.",
  "« Où les choses sont poussées si loin que les habitants de Quiquendone, les lecteurs et même l'auteur réclament un dénoûment immédiat. »",
  "« Où le dénoûment éclate. »",
  "« Où le lecteur intelligent voit bien qu'il avait deviné juste, malgré toutes les précautions de l'auteur. »",
  "« Où s'explique la théorie du docteur Ox. »",
]
T1 = ["Quiquendone", "Le parloir du bourgmestre", "Le commissaire Passauf", "Le docteur Ox", "Une visite au docteur",
      "Frantz et Suzel", "Les Huguenots", "La valse", "Quelques mots", "L'épidémie", "Une résolution héroïque",
      "Un avis raisonnable", "La tour du beffroi", "Un dénoûment immédiat", "Le dénoûment", "Le lecteur intelligent",
      "La théorie du docteur Ox"]
R2 = [
  "Genève, au bord du Rhône, en un temps où l'on fabriquait les premières montres. Maître Zacharius, vieil horloger de génie, vit avec sa fille Gérande, son apprenti Aubert Thün et la vieille servante Scholastique. Depuis quelque temps, les montres qu'il a faites s'arrêtent, et lui-même dépérit.",
  "L'orgueil de maître Zacharius, qui a inventé l'échappement et croit avoir mis la vie dans ses horloges.",
  "Gérande promène son père dans Genève. Un petit vieillard étrange s'attache à leurs pas.",
  "Les clients de maître Zacharius viennent se plaindre. Gérande tente de ramener son père à Dieu, à l'église de Saint-Pierre.",
  "Maître Zacharius quitte Genève. Gérande et Aubert le cherchent le long du lac Léman, jusque dans les montagnes.",
]
T2 = ["Une nuit d'hiver", "L'orgueil de la science", "Une visite étrange", "L'église de Saint-Pierre", "L'heure de la mort"]
R3 = ["Francfort, en septembre 185… Un aéronaute s'apprête à monter en ballon pendant la grande foire. Personne n'ose l'accompagner ; il part seul. Mais quand il s'élève, il n'est pas seul dans la nacelle. Un récit de Jules Verne à la première personne."]
T3 = ["Un drame dans les airs"]
R4 = [
  "Dunkerque, le 12 mai. Le vieux capitaine Jean Cornbutte annonce au curé le retour de son navire, la Jeune-Hardie, et le mariage de son fils Louis avec sa nièce Marie. Toute la noce va au bout de la jetée attendre le brick.",
  "Jean Cornbutte décide de partir. Marie veut venir.",
  "La Jeune-Hardie longe la côte de Norvège jusqu'à Bodoë, relâche aux Feroë, et se prépare à affronter les glaces.",
  "Les premiers bancs de glace, les passes étroites, et le second André Vasling qui conteste les choix du timonier Penellan.",
  "La mer libre, puis l'île Liverpool, sur la côte du Groenland, et ses habitants.",
  "La côte est bloquée par les glaces. Une petite troupe part à pied chercher un abri pour le navire.",
  "L'équipage installe le navire pour l'hiver polaire.",
  "Jean Cornbutte tient conseil et prépare une expédition vers le nord, en traîneau, malgré la nuit qui vient.",
  "La caravane se met en route et construit une maison de neige.",
  "Une tempête de neige.",
  "Au matin, une obscurité complète. Puis, au loin, un nuage de fumée.",
  "Le retour vers la Jeune-Hardie, à travers les glaces.",
  "Le froid, la maladie, et deux camps qui se forment à bord.",
  "Le 20 janvier : la faim, le scorbut, et un danger nouveau.",
  "Des ours blancs autour du navire.",
  "Le printemps arctique, le dégel, et le retour.",
]
T4 = ["Le pavillon noir", "Le projet de Jean Cornbutte", "Lueur d'espoir", "Dans les passes", "L'île Liverpool",
      "Le tremblement de glaces", "Les installations de l'hivernage", "Plan d'explorations", "La maison de neige",
      "Enterrés vivants", "Un nuage de fumée", "Retour au navire", "Les deux rivaux", "Détresse", "Les ours blancs", "Conclusion"]
R5 = ["Chamonix, le 18 août 1871. Paul Verne, le frère de Jules, veut faire l'ascension du mont Blanc, malgré le temps, le guide-chef et l'accident de l'année d'avant. Avec son ami Donatien Levesque et des guides, il monte par les Grands-Mulets. Un récit vrai, à la première personne."]
T5 = ["Quarantième ascension française au mont Blanc"]
ROM = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII"]
assert len(R1) == len(T1) == 17 and len(R2) == len(T2) == 5 and len(R4) == len(T4) == 16
CHAPTERS = ([{"title": "Une fantaisie du docteur Ox · " + ROM[i] + ". " + T1[i], "text": r} for i, r in enumerate(R1)]
            + [{"title": "Maître Zacharius · " + ROM[i] + ". " + T2[i], "text": r} for i, r in enumerate(R2)]
            + [{"title": T3[0], "text": R3[0]}]
            + [{"title": "Un hivernage dans les glaces · " + ROM[i] + ". " + T4[i], "text": r} for i, r in enumerate(R4)]
            + [{"title": "Quarantième ascension française au mont Blanc, par Paul Verne", "text": R5[0]}])
CHAPTERS[27]["notice"] = True  # « L'île Liverpool » : les habitants du Groenland

Q = {"map": "quiquendone"}
G = {"map": "leman"}
A = {"map": "airs"}
N = {"map": "nord"}
B = {"map": "montblanc"}
PLACES = {
  "parloir": {"ambiance": "ville", "name": "La maison du bourgmestre", "x": 45, "y": 45, "region": "Quiquendone, en Flandre", "desc": "Une maison paisible, où les portes ne crient pas : le parloir, son poêle, son portrait d'ancêtre, et la chambre de Suzel.", **Q},
  "ville": {"ambiance": "ville", "name": "Les rues de Quiquendone", "x": 55, "y": 55, "region": "Quiquendone, en Flandre", "desc": "Une petite ville flamande, ses maisons à pignon, sa place, sa maison commune, ses jardins de tulipes.", **Q},
  "usine": {"ambiance": "ville", "name": "L'usine du docteur Ox", "x": 25, "y": 70, "region": "Quiquendone, en Flandre", "desc": "Le cabinet de travail du docteur Ox et de son préparateur, ses cuves et ses gazomètres.", **Q},
  "theatre": {"ambiance": "ville", "name": "Le théâtre de Quiquendone", "x": 62, "y": 38, "region": "Quiquendone, en Flandre", "desc": "Une salle où l'on joue l'opéra avec une extrême lenteur, ses loges, son parterre et ses galeries.", **Q},
  "beffroi": {"ambiance": "ville", "name": "La tour du beffroi", "x": 50, "y": 25, "region": "Quiquendone, en Flandre", "desc": "La haute tour de la ville, son escalier, sa cloche et sa vue sur toute la Flandre.", **Q},
  "audenarde": {"ambiance": "route", "name": "La porte d'Audenarde", "x": 80, "y": 60, "region": "Quiquendone, en Flandre", "desc": "La porte de la ville qui mène vers la campagne flamande et vers Virgamen.", **Q},
  "zacharius": {"ambiance": "ville", "name": "La maison de maître Zacharius", "x": 40, "y": 55, "region": "Genève, sur l'île du Rhône", "desc": "Une vieille maison au bord du Rhône, son atelier plein d'horloges, et la chambre de Gérande.", **G},
  "geneve": {"ambiance": "ville", "name": "Genève", "x": 45, "y": 45, "region": "Au bout du lac Léman", "desc": "La vieille ville, la promenade de la Treille, l'église de Saint-Pierre.", **G},
  "andernatt": {"ambiance": "montagne", "name": "Le château d'Andernatt", "x": 75, "y": 75, "region": "Les gorges des Dents-du-Midi", "desc": "Un château en ruines dans les montagnes, au-dessus du Rhône.", **G},
  "lac": {"ambiance": "route", "name": "Les bords du lac Léman", "x": 60, "y": 55, "region": "La rive du lac, de Genève vers le Valais", "desc": "Les villages et les routes qui longent le lac, Thonon, Évian, puis l'ermitage de Notre-Dame du Sex.", **G},
  "francfort": {"ambiance": "ville", "name": "Francfort", "x": 50, "y": 80, "region": "Francfort-sur-le-Mein, en Allemagne", "desc": "La ville de la grande foire de septembre, et la place d'où partent les ballons.", **A},
  "nacelle": {"ambiance": "nuit", "name": "Dans la nacelle", "x": 50, "y": 30, "region": "Dans le ciel d'Allemagne", "desc": "Une nacelle ronde de quatre pieds, ses sacs de lest, ses instruments, sous un ballon gonflé au gaz d'éclairage.", **A},
  "dunkerque": {"ambiance": "port", "name": "Dunkerque", "x": 50, "y": 92, "region": "La côte de Flandre, en France", "desc": "Le port, ses jetées, la vieille église et la maison de Jean Cornbutte.", **N},
  "jeunehardie": {"ambiance": "mer", "name": "À bord de la Jeune-Hardie", "x": 45, "y": 60, "region": "La mer du Nord, puis les mers du Groenland", "desc": "Un brick de Dunkerque, son pont, sa cabine et son équipage.", **N},
  "liverpool": {"ambiance": "neige", "name": "L'île Liverpool", "x": 30, "y": 35, "region": "La côte est du Groenland", "desc": "Une île de la côte du Groenland, découverte en 1821, et quelques familles de chasseurs.", **N},
  "hivernage": {"ambiance": "neige", "name": "La baie de l'hivernage", "x": 25, "y": 20, "region": "La côte est du Groenland", "desc": "Une petite baie abritée par une pointe de terre, où le navire est pris dans la glace.", **N},
  "banquise": {"ambiance": "neige", "name": "Sur les glaces", "x": 20, "y": 8, "region": "Au nord de l'hivernage", "desc": "Des plaines de glace et de neige sous la nuit polaire, des icebergs, une maison de neige.", **N},
  "chamonix": {"ambiance": "village", "name": "Chamonix", "x": 50, "y": 85, "region": "La vallée de Chamonix, en Savoie", "desc": "Le village des guides, ses hôtels, et en face le Brevent.", **B},
  "mulets": {"ambiance": "montagne", "name": "Les Grands-Mulets", "x": 45, "y": 50, "region": "Le massif du mont Blanc, à 3 050 mètres", "desc": "Des rochers qui dominent le glacier des Bossons, et la petite cabane des guides.", **B},
  "sommet": {"ambiance": "neige", "name": "Les pentes du mont Blanc", "x": 50, "y": 15, "region": "Le massif du mont Blanc", "desc": "Le dôme du Goûter, le Grand-Plateau, et la cime.", **B},
}

PEOPLE = {
  "tricasse": {"name": "Le bourgmestre van Tricasse", "aka": ["van Tricasse", "Van Tricasse"], "face": {"age": "mur", "hair": "gris", "coif": "court", "beard": "sans", "skin": "clair"}, "qui": "Le bourgmestre de Quiquendone, un homme modéré en tout, qui ne décide jamais rien.", "aspect": {"allure": "cinquante ans, ni gras ni maigre"}},
  "niklausse": {"name": "Le conseiller Niklausse", "aka": ["conseiller Niklausse", "Niklausse"], "face": {"age": "mur", "hair": "gris", "coif": "degarni", "beard": "sans", "skin": "clair"}, "qui": "Le conseiller de Quiquendone, vieil ami du bourgmestre, aussi calme que lui."},
  "passauf": {"name": "Le commissaire Passauf", "aka": ["Passauf"], "face": {"age": "mur", "hair": "brun", "coif": "court", "beard": "moustache", "skin": "clair"}, "qui": "Le commissaire civil de Quiquendone, dont on parle depuis dix ans de supprimer la charge."},
  "ox": {"name": "Le docteur Ox", "aka": ["docteur Ox"], "face": {"age": "mur", "hair": "brun", "coif": "boucles", "beard": "barbe", "skin": "clair"}, "qui": "Un savant étranger, physiologiste et chimiste, qui offre à Quiquendone un éclairage au gaz.", "aspect": {"allure": "demi-gros, taille moyenne, sang chaud"}},
  "ygene": {"name": "Gédéon Ygène", "aka": ["Ygène"], "face": {"age": "adulte", "hair": "brun", "coif": "court", "beard": "sans", "skin": "clair"}, "qui": "Le préparateur du docteur Ox, qui lui obéit aveuglément.", "aspect": {"allure": "grand, sec, maigre, tout en hauteur"}},
  "suzel": {"name": "Suzel van Tricasse", "aka": ["Suzel"], "face": {"age": "jeune", "hair": "blond", "coif": "tresses", "skin": "clair"}, "qui": "La fille du bourgmestre, dix-sept ans, blonde et rose."},
  "frantz": {"name": "Frantz Niklausse", "aka": ["Frantz"], "face": {"age": "jeune", "hair": "blond", "coif": "court", "beard": "sans", "skin": "clair"}, "qui": "Le fils du conseiller Niklausse, vingt-deux ans, fiancé à Suzel van Tricasse."},
  "tatanemance": {"name": "Tatanémance", "aka": ["Tatanémance"], "face": {"age": "mur", "hair": "gris", "coif": "chignon", "skin": "clair"}, "qui": "La tante Hermance, sœur du bourgmestre, vieille fille ; sa nièce Suzel l'appelait ainsi petite."},
  "lotche": {"name": "Lotchè Janshéu", "aka": ["Lotchè"], "face": {"age": "adulte", "hair": "blond", "coif": "chignon", "skin": "clair"}, "qui": "La servante du bourgmestre, une brave fille qui ne perd pas la tête."},
  "zacharius": {"name": "Maître Zacharius", "aka": ["maître Zacharius", "Maître Zacharius", "Zacharius"], "face": {"age": "ancien", "hair": "blanc", "coif": "long", "beard": "sans", "skin": "clair"}, "qui": "Un vieil horloger de Genève, savant et orgueilleux, l'inventeur de l'échappement.", "aspect": {"allure": "âge indéchiffrable", "visage": "tête maigre et pointue, longue chevelure blanche"}},
  "gerande": {"name": "Gérande", "aka": ["Gérande"], "face": {"age": "jeune", "hair": "chatain", "coif": "long", "skin": "clair"}, "qui": "La fille de maître Zacharius, pieuse et douce."},
  "aubert": {"name": "Aubert Thün", "aka": ["Aubert"], "face": {"age": "jeune", "hair": "brun", "coif": "court", "beard": "sans", "skin": "clair"}, "qui": "L'apprenti de maître Zacharius, dévoué à lui et à Gérande."},
  "scholastique": {"name": "Scholastique", "aka": ["Scholastique"], "face": {"age": "ancien", "hair": "gris", "coif": "chignon", "skin": "clair"}, "qui": "La vieille servante de maître Zacharius, bavarde et dévote."},
  "vieillard": {"name": "Le petit vieillard", "aka": ["petit vieillard"], "face": {"age": "ancien", "hair": "blanc", "coif": "degarni", "beard": "barbe", "skin": "clair"}, "qui": "Un petit vieillard étrange, que personne à Genève ne connaît."},
  "aeronaute": {"name": "L'aéronaute", "aka": [], "face": {"age": "adulte", "hair": "brun", "coif": "court", "beard": "moustache", "skin": "clair"}, "qui": "Le narrateur d'« Un drame dans les airs », qui fait des ascensions en ballon dans les villes d'Allemagne."},
  "jean": {"name": "Jean Cornbutte", "aka": ["Jean Cornbutte"], "face": {"age": "ancien", "hair": "blanc", "coif": "court", "beard": "barbe", "skin": "hale"}, "qui": "Un vieux capitaine de Dunkerque, qui a fait construire le brick la Jeune-Hardie."},
  "louis": {"name": "Louis Cornbutte", "aka": ["Louis Cornbutte"], "face": {"age": "jeune", "hair": "brun", "coif": "court", "beard": "sans", "skin": "hale"}, "qui": "Le fils de Jean Cornbutte, capitaine de la Jeune-Hardie, fiancé à sa cousine Marie."},
  "marie": {"name": "Marie", "aka": ["Marie"], "face": {"age": "jeune", "hair": "blond", "coif": "long", "skin": "clair"}, "qui": "La nièce de Jean Cornbutte, vingt ans à peine, fiancée de Louis.", "aspect": {"allure": "belle Flamande, sang hollandais"}},
  "penellan": {"name": "Penellan", "aka": ["Penellan"], "face": {"age": "mur", "hair": "gris", "coif": "court", "beard": "barbe", "skin": "hale"}, "qui": "Un marin breton de la Jeune-Hardie, qui a déjà pêché la baleine dans les mers arctiques."},
  "vasling": {"name": "André Vasling", "aka": ["André Vasling", "Vasling"], "face": {"age": "adulte", "hair": "blond", "coif": "court", "beard": "barbe", "skin": "clair"}, "qui": "Le second de la Jeune-Hardie, Hollandais d'origine, bon marin."},
  "misonne": {"name": "Fidèle Misonne", "aka": ["Misonne"], "face": {"age": "mur", "hair": "brun", "coif": "court", "beard": "barbe", "skin": "hale"}, "qui": "Le charpentier de la Jeune-Hardie."},
  "turquiette": {"name": "Alain Turquiette", "aka": ["Turquiette"], "face": {"age": "adulte", "hair": "brun", "coif": "court", "beard": "moustache", "skin": "hale"}, "qui": "Un matelot de la Jeune-Hardie."},
  "clerbaut": {"name": "Le compère Clerbaut", "aka": ["Clerbaut"], "face": {"age": "ancien", "hair": "gris", "coif": "degarni", "beard": "barbe", "skin": "clair"}, "qui": "Un vieil ami de Jean Cornbutte, à Dunkerque."},
  "paul": {"name": "Paul Verne", "aka": [], "face": {"age": "mur", "hair": "brun", "coif": "court", "beard": "barbe", "skin": "clair"}, "qui": "Le frère de Jules Verne, qui raconte son ascension du mont Blanc."},
  "levesque": {"name": "Donatien Levesque", "aka": ["Donatien Levesque", "Levesque"], "face": {"age": "adulte", "hair": "brun", "coif": "court", "beard": "moustache", "skin": "clair"}, "qui": "Un ami et compatriote de Paul Verne, touriste enragé et marcheur intrépide."},
}
MET_AT_START = []
NO_AUTO = ["tricasse", "marie"]  # nommés à la première page (I1_1) : « van Tricasse », « Marie de Bourgogne »
MEET = {"I2_1": ["tricasse"], "III1_1": ["aeronaute"], "IV1_1": ["marie"], "V1_1": ["paul"]}

WORDS = {
  "bourgmestre": "Le maire d'une ville, en Flandre, en Hollande ou en Allemagne.",
  "physiologiste": "Un savant qui étudie le fonctionnement du corps des êtres vivants.",
  "préparateur": "L'aide d'un savant, qui prépare ses expériences.",
  "oxy-hydrique": "Fait d'un mélange d'oxygène et d'hydrogène ; ce gaz brûle avec une flamme très chaude et très vive.",
  "gazomètre|gazomètres": "Un grand réservoir où l'on garde le gaz.",
  "beffroi": "La haute tour d'une ville, où sont les cloches qui sonnent l'alarme ou les heures.",
  "andante": "En musique, un mouvement modéré, « en allant ».",
  "allegro": "En musique, un mouvement vif et gai.",
  "vivace": "En musique, un mouvement très vif.",
  "prestissimo": "En musique, le mouvement le plus rapide.",
  "Huguenots": "Ici, « Les Huguenots », grand opéra de Meyerbeer (1836).",
  "casus belli": "Une raison de faire la guerre.",
  "échappement": "La pièce d'une horloge qui règle la marche des rouages, à petits coups réguliers.",
  "échevin|échevins": "Un magistrat municipal, adjoint du maire, dans les anciennes villes.",
  "aéronaute|aéronautes": "Celui qui voyage en ballon.",
  "aérostat|aérostats": "Un ballon gonflé d'un gaz plus léger que l'air.",
  "nacelle": "Le panier suspendu sous un ballon, où montent les voyageurs.",
  "lest": "Le poids qu'on emporte pour le jeter et alléger le ballon quand on veut monter.",
  "soupape": "Ici, l'ouverture en haut du ballon qu'on ouvre avec une corde pour laisser sortir le gaz et descendre.",
  "brick": "Un voilier à deux mâts.",
  "timonier": "Le marin qui tient la barre du navire.",
  "hivernage": "Le séjour d'un navire pris dans les glaces pendant l'hiver.",
  "scorbut": "Une maladie des marins privés de fruits et de légumes frais : les gencives saignent, les forces s'en vont.",
  "icebergs|iceberg": "De très grandes masses de glace qui flottent sur la mer.",
  "banquise": "La mer gelée, en une immense plaine de glace.",
  "guide-chef": "Le chef des guides de montagne de Chamonix.",
  "crevasse|crevasses": "Une fente profonde dans un glacier.",
  "sérac|séracs|serac": "Un grand bloc de glace dressé sur un glacier.",
  "alpenstock|alpen-stocks": "Un long bâton ferré dont on s'aide en montagne.",
}

PT = {
  "I1_1": ("Une ville qui n'est sur aucune carte", "ville"),
  "I2_1": ("Dix ans de réflexion", "parloir"),
  "I2_2": ("Le bourgmestre", "parloir"),
  "I3_1": ("L'éclairage de la ville", "parloir"),
  "I3_2": ("On frappe", "parloir"),
  "I4_1": ("Un original", "usine"),
  "I4_2": ("Dans le cabinet de travail", "usine"),
  "I5_1": ("Une nuit agitée", "usine"),
  "I5_2": ("Une promenade", "ville"),
  "I6_1": ("Deux fiancés", "parloir"),
  "I7_1": ("L'opéra à Quiquendone", "theatre"),
  "I7_2": ("Fioravanti", "theatre"),
  "I7_3": ("Le quatrième acte", "theatre"),
  "I7_4": ("À minuit, point de bruit", "theatre"),
  "I8_1": ("Le lendemain", "parloir"),
  "I8_2": ("Ça ne va plus", "ville"),
  "I8_3": ("La soirée", "parloir"),
  "I9_1": ("Tout est prêt", "usine"),
  "I10_1": ("Des fraises énormes", "ville"),
  "I10_2": ("Des querelles", "ville"),
  "I11_1": ("Des têtes qui fermentent", "parloir"),
  "I11_2": ("Virgamen", "ville"),
  "I12_1": ("Assez loin ?", "usine"),
  "I13_1": ("L'heure du beffroi", "parloir"),
  "I13_2": ("L'escalier", "beffroi"),
  "I13_3": ("Tout en haut", "beffroi"),
  "I14_1": ("L'armée de Quiquendone", "audenarde"),
  "I15_1": ("Le dénoûment", "audenarde"),
  "I16_1": ("Après", "ville"),
  "I17_1": ("Une expérience", "usine"),
  "II1_1": ("Le vieil horloger", "zacharius"),
  "II1_2": ("Le souper", "zacharius"),
  "II1_3": ("La prière", "zacharius"),
  "II1_4": ("Une lumière dans la nuit", "zacharius"),
  "II2_1": ("La probité genevoise", "zacharius"),
  "II2_2": ("La montre de cristal", "zacharius"),
  "II2_3": ("L'échappement", "zacharius"),
  "II3_1": ("Les promenades", "geneve"),
  "II3_2": ("Le petit vieillard", "geneve"),
  "II3_3": ("Dans l'atelier", "zacharius"),
  "II4_1": ("Les plaintes", "zacharius"),
  "II4_2": ("Que deviendra ma fille ?", "zacharius"),
  "II4_3": ("La messe", "geneve"),
  "II5_1": ("Le départ", "lac"),
  "II5_2": ("L'ermitage", "lac"),
  "II5_3": ("La poterne", "andernatt"),
  "II5_4": ("La grande salle", "andernatt"),
  "III1_1": ("La foire de Francfort", "francfort"),
  "III1_2": ("Un passager", "nacelle"),
  "III1_3": ("Douze cents mètres", "nacelle"),
  "III1_4": ("De l'air respirable", "nacelle"),
  "III1_5": ("L'orage", "nacelle"),
  "III1_6": ("Les gravures", "nacelle"),
  "III1_7": ("Blanchard", "nacelle"),
  "III1_8": ("La boussole", "nacelle"),
  "III1_9": ("Plus haut", "nacelle"),
  "IV1_1": ("La première messe", "dunkerque"),
  "IV1_2": ("Sur la jetée", "dunkerque"),
  "IV2_1": ("Ce que raconte le second", "dunkerque"),
  "IV2_2": ("Marie insiste", "dunkerque"),
  "IV3_1": ("Vers le nord", "jeunehardie"),
  "IV3_2": ("Les Feroë", "jeunehardie"),
  "IV4_1": ("Les premières glaces", "jeunehardie"),
  "IV4_2": ("Une passe étroite", "jeunehardie"),
  "IV5_1": ("Une mer libre", "jeunehardie"),
  "IV5_2": ("Les Groënlandais", "liverpool"),
  "IV6_1": ("Une petite troupe", "hivernage"),
  "IV6_2": ("Le tremblement", "hivernage"),
  "IV7_1": ("Les préparatifs", "hivernage"),
  "IV8_1": ("Le conseil", "hivernage"),
  "IV9_1": ("La caravane", "banquise"),
  "IV10_1": ("La veille du départ", "banquise"),
  "IV10_2": ("La galerie", "banquise"),
  "IV11_1": ("L'obscurité", "banquise"),
  "IV11_2": ("Un son au loin", "banquise"),
  "IV12_1": ("Deux cris", "banquise"),
  "IV12_2": ("La baie retrouvée", "hivernage"),
  "IV13_1": ("Deux camps", "hivernage"),
  "IV14_1": ("Le 20 janvier", "hivernage"),
  "IV14_2": ("Une odeur de graisse", "hivernage"),
  "IV15_1": ("La porte", "hivernage"),
  "IV15_2": ("Les ours", "hivernage"),
  "IV16_1": ("Le retour des oiseaux", "hivernage"),
  "IV16_2": ("Le dégel", "jeunehardie"),
  "V1_1": ("Le mont Blanc fume sa pipe", "chamonix"),
  "V1_2": ("Le Brevent", "chamonix"),
  "V1_3": ("Le départ", "chamonix"),
  "V1_4": ("Les Bossons", "mulets"),
  "V1_5": ("Les Grands-Mulets", "mulets"),
  "V1_6": ("La nuit, puis le Goûter", "sommet"),
  "V1_7": ("Le Grand-Plateau", "sommet"),
  "V1_8": ("Excelsior", "sommet"),
  "V1_9": ("Redescendre", "sommet"),
  "V1_10": ("Gaspard Simon", "sommet"),
}
PAGES = {p: list(t) for p, t in PT.items()}
