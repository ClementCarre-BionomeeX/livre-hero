# Fiche du « Capitaine Pamphile » (id pamphile) pour livre.py (texte de Dumas, 1840).
# Texte : gut.py sur Gutenberg n° 18697 (miroir orkeilius/gutenberg_fr_mirror), entre fiches/pamphile_texte.py pre et post.
HEAD = """// « Le Capitaine Pamphile », Alexandre Dumas, 1840 : un livre à lire, sans choix (lecture: true). Texte de Dumas,
// domaine public, d'après l'édition numérique du projet Gutenberg. Les titres des chapitres sont ceux de Dumas ; les
// titres des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude."""

BASE = {
  "id": "pamphile",
  "title": "Le Capitaine Pamphile",
  "subtitle": "Un roman à lire · Alexandre Dumas, 1840",
  "summary": "Paris, 1831. Dans l'atelier d'un peintre vivent un ours, un singe et une grenouille ; un soir, entre deux pipes, un ami lit à la compagnie le récit des voyages du capitaine Pamphile, de Marseille, qui ne paie jamais ce qu'il peut prendre. De l'Afrique au Canada et de Philadelphie à Londres, une farce féroce sur le commerce, les hommes et les bêtes.",
  "tags": ["aventure", "humour", "voyage"],
  "author": "Alexandre Dumas",
  "lecture": True,
  "age": 14,
  "skin": "parchemin",
  "cover": {"motif": "vague", "color": "#2c4a3b"},
  "glossary": None,
  "voice": "première personne, passé",
  "version": 1,
  "notice": {
    "title": "Un livre de 1840, et une satire",
    "reminder": "Ce chapitre montre des violences, racontées avec l'ironie et les mots de 1840.",
    "text": [
      "*Le Capitaine Pamphile* a paru en 1840. Le texte est celui de Dumas, sans retouche, d'après l'édition numérisée par le projet Gutenberg ; la notice de l'éditeur numérique qui ouvrait le volume n'est pas reprise. Les titres des chapitres sont ceux de Dumas : ils annoncent souvent, pour rire, ce qui arrivera un peu plus tard.",
      "Le narrateur est Dumas lui-même, et ses amis sont des artistes de son temps : les peintres Decamps, Jadin et Flers, l'illustrateur Tony Johannot, l'écrivain Alphonse Karr.",
      "Le livre est une farce, mais une farce noire. Pamphile tue les bêtes pour le plaisir ou le profit, fait pendre un matelot, pille les navires, et finit négrier : il achète des prisonniers de guerre en Afrique et les vend aux Antilles. Dumas raconte tout cela sur le ton de l'éloge, et c'est ce ton faussement admiratif qui accuse.",
      "Le texte emploie les mots et les images de 1840 pour les Africains, les Amérindiens et les Chinois, y compris des mots aujourd'hui injurieux. Ils sont laissés tels quels.",
    ],
  },
  "intro": [],
  "world": {"start": {"place": "paris", "hour": 11, "gold": 0, "food": 0, "items": [], "kits": {"guerrier": [], "rodeur": [], "voleur": [], "mage": [], "pretre": [], "barde": []}}},
}

def roman(n):
    out = ''
    for v, r in ((100, 'C'), (90, 'XC'), (50, 'L'), (40, 'XL'), (10, 'X'), (9, 'IX'), (5, 'V'), (4, 'IV'), (1, 'I')):
        while n >= v: out += r; n -= v
    return out

TITRES = [
  "Introduction à l'aide de laquelle le lecteur fera connaissance avec les principaux personnages de cette histoire et l'auteur qui l'a écrite",
  "Comment Jacques Ier voua une haine féroce à Tom, et cela à propos d'une carotte",
  "Comment mademoiselle Camargo tomba en la possession de M. Decamps",
  "Comment le capitaine Pamphile, commandant le brick de commerce la Roxelane fit, sur le bord de la rivière Bango, une meilleure chasse que n'avait fait Alexandre Decamps, dans la plaine Saint-Denis",
  "Comment Jacques Ier fut arraché des bras de sa mère expirante et porté à bord du brick de commerce la Roxelane (capitaine Pamphile)",
  "Comment Jacques Ier commença par plumer des poules et finit par plumer un perroquet",
  "Comment Tom embrassa la fille de la portière, qui montait de la crème, et quelle décision fut prise à propos de cet événement",
  "Comment Tom démit le poignet d'un garde municipal, et d'où venait la frayeur que lui inspirait cette respectable milice",
  "Comment le capitaine Pamphile apaisa une sédition à bord du brick la Roxelane, et de ce qui s'ensuivit",
  "Comment le capitaine Pamphile, croyant aborder sur une île, aborda sur une baleine, et devint le serviteur du Serpent-Noir",
  "Comment le capitaine Pamphile remonta le fleuve Saint-Laurent pendant cinq journées, et échappa au Serpent-Noir vers la fin de la sixième",
  "Comment le capitaine Pamphile passa deux nuits fort agitées, l'une sur un arbre, l'autre dans une hutte",
  "Comment le capitaine Pamphile fit la rencontre de la mère de Tom sur les bords de la rivière Delawarre, et de ce qui s'ensuivit",
  "Comment Jacques Ier, n'ayant pu digérer l'épingle du papillon, fut atteint d'une perforation de la péritonite",
  "Comment Tony Johannot, n'ayant pas assez de bois pour passer son hiver, se procura une chatte, et comment, cette chatte étant morte, Jacques II eut la queue gelée",
  "Comment le capitaine Pamphile proposa un prix de deux mille francs et la croix de la Légion d'honneur, afin de savoir si le nom de Jeanne d'Arc s'écrivait par un Q ou par un K",
  "Comment le capitaine Pamphile, ayant abordé sur la côte d'Afrique, au lieu d'un chargement d'ivoire qu'il venait y chercher, fut forcé de prendre une partie de bois d'ébène",
  "Comment le capitaine Pamphile, s'étant défait avantageusement de sa cargaison de bois d'ébène à la Martinique, et de son alcool aux grandes Antilles, retrouva son ancien ami le Serpent-Noir cacique des Mosquitos, et acheta son caciquat pour une demi-pipe d'eau-de-vie",
  "Comment le cacique des Mosquitos donna une constitution à son peuple, pour se faciliter un emprunt de douze millions",
  "Conclusion",
  "Pièces justificatives",
]


R = [
  "En 1831, le narrateur, Dumas lui-même, enlève à un Anglais une tortue promise à la soupe, la baptise Gazelle et la confie à son domestique. Puis il la porte chez son ami le peintre Decamps, dont l'atelier abrite un ours, Tom, un singe, Jacques Ier, et une grenouille, mademoiselle Camargo.",
  "Gazelle fait révolution dans l'atelier. Pour une carotte, Jacques Ier se brouille à jamais avec Tom. Decamps invite le narrateur à une soirée : mademoiselle Camargo doit y manger cent mouches, et le peintre Jadin y lire un manuscrit.",
  "Soirée chez Decamps, en robe de chambre et pantoufles, au milieu des armes, des oiseaux empaillés et des pipes. On raconte comment Alexandre, le frère du peintre, parti chasser dans la plaine Saint-Denis avec un chien d'arrêt fort singulier, en est revenu avec une grenouille qui lui a coûté six cent soixante francs.",
  "Le docteur Thierry fait de la grenouille un baromètre et lui sert son souper de mouches. Fau, l'ami intime de Jacques, est de la fête. Les pipes allumées, Jadin commence sa lecture.",
  "Le manuscrit : en 1827, le capitaine marseillais Pamphile, du brick de commerce la Roxelane, chasse au bord de la rivière Bango, en Afrique. Il abat un tigre, envoie un hippopotame à son cuisinier par le fil de l'eau, puis tue une guenon et garde son petit : Jacques Ier. Dans la mer des Indes, il « échange » la moitié de la cargaison d'un navire chinois à coups de canon, et commande de l'ivoire à deux chefs africains. Le lendemain de la lecture, mademoiselle Camargo meurt d'indigestion.",
  "Après le dîner funèbre, Jadin reprend : à bord, Jacques vole le sucre du perroquet Catacoua, se fait mordre le pouce, guérit au rhum, devient un plumeur de volailles hors pair, et finit par plumer le perroquet, qui tombe à la mer et s'y noie.",
  "Jacques a avalé l'épingle d'un papillon ; le docteur du bord veut le saigner, le petit Double-Bouche devine la vérité. À Marseille, Jacques est vendu et passe de main en main jusqu'à Fau. Pendant ce temps, Tom saisit par la taille, dans l'escalier, la petite fille de la portière, puis dévaste un repas de noces : le propriétaire exige qu'il parte.",
  "Tom passe chez le voisin et démet le poignet d'un garde municipal. Fau l'emmène au bal masqué de l'Odéon, où chacun croit voir un acteur déguisé en ours. À la fin du bal, la garde veut le mettre dehors ; découvrant un vrai ours, elle le fusille. Alexandre Decamps arrivait avec une lettre de Cuvier qui lui ouvrait le Jardin des Plantes.",
  "Comment Tom était venu du Canada : en 1829, Pamphile, censé pêcher la baleine, pille les baleiniers du côté de Terre-Neuve. Il refuse la morue à ses hommes affamés ; l'équipage se révolte. Pamphile fait pendre le meneur, Gaetano, et dîne. Le lendemain, le capitaine a disparu, et l'équipage proclame Policar à sa place.",
  "Jeté à la mer, Pamphile nage jusqu'à une île qui avance toute seule : une baleine harponnée, que remorque un chef huron, le Serpent-Noir. Le chef la vend au cap Breton et fait de Pamphile son rameur ; le canot remonte le Saint-Laurent.",
  "Cinq jours sur le fleuve au service du chef. Un vol de pigeons si immense qu'il fait la nuit en plein jour. Le sixième jour, une tempête fait chavirer le canot, et Pamphile ne rejoint pas les autres.",
  "Première nuit, attaché dans un chêne, entre une bande de loups et un boa. Seconde nuit, dans la hutte d'une vieille Indienne qui convoite sa montre, et dont le fils vient de perdre un œil. Le jeune Sioux, qui doit la vie à des soldats français, le sauve de sa mère et lui montre le chemin : Pamphile aperçoit Philadelphie.",
  "Sur la route, Pamphile rencontre une ourse apprivoisée échappée de New-York, et la fait danser. À Philadelphie, il retrouve son équipage en train de boire la cargaison, vend l'ourse à Policar, regagne son brick à la nage et s'y cache dans la sainte-barbe avec l'aide de Double-Bouche. En mer, il jette Policar par-dessus bord comme on l'y avait jeté. L'ourse met bas à Paris : un des oursons est Tom.",
  "Peu après la mort de Tom, Jacques Ier tombe malade de l'épingle avalée jadis. Fau lui apporte des pralines ; Jacques II, le singe de Tony Johannot, vient à son chevet. Jacques Ier meurt, et Jacques II le venge sur Gazelle.",
  "Tony Johannot, à court de bois, prend une chatte, Michette, pour tenir chaud à Jacques II. Le singe mange la pâtée de la chatte, qui en meurt, et se gèle la queue. Une farce avec deux peaux de lion lui coûte cette queue. Il se console à la bouteille.",
  "Pour son treizième voyage, Pamphile se fait passer à Orléans pour un envoyé de l'Académie, venu trancher une grave question sur Jeanne d'Arc. Les notables le comblent de présents, et il goûte chez le préfet une eau-de-vie dont il retient le fournisseur.",
  "En mer, Pamphile arrête un trois-mâts nantais et lui prend son eau-de-vie. Sur la côte d'Afrique, ses deux fournisseurs d'ivoire sont en guerre ; il prend le parti des Petits-Namaquois, écrase les Cafres, puis achète les prisonniers : il repart avec une cargaison d'hommes à vendre.",
  "Après une traversée où meurent trente-deux captifs, Pamphile vend les autres à la Martinique. Sur la côte des Mosquitos, en Amérique centrale, il retrouve son vieil ami le Serpent-Noir, cacique du pays, et lui achète son titre de cacique, parchemin de Londres compris, contre de l'eau-de-feu.",
  "Deux consuls de Son Altesse le cacique des Mosquitos débarquent en Angleterre. Londres se couvre de gravures d'un pays riche et heureux ; on vend des terres aux émigrants. Le cacique, don Gusman y Pamphilos, donne une constitution à son peuple et obtient d'un banquier un emprunt de douze millions.",
  "Les émigrants découvrent à Mosquitos quelques cabanes et le Serpent-Noir qui leur demande de l'eau-de-feu. Le cacique et ses consuls ont disparu. Un dernier entrefilet donne des nouvelles de Jacques II.",
  "Les pièces justificatives : la constitution de don Gusman y Pamphilos, et une lettre d'Alphonse Karr, qui réclame sa part dans l'histoire de Jacques II.",
]

def titre(i, t):
    if i >= 19: return t
    return "Chapitre " + roman(i + 1) + " · " + t
CHAPTERS = [{"title": titre(i, t), "text": r} for i, (t, r) in enumerate(zip(TITRES, R))]
for i in (8, 16, 17): CHAPTERS[i]["notice"] = True

PLACES = {
  "paris": {"ambiance": "ville", "name": "Paris en 1831", "map": "paris", "x": 50, "y": 50, "region": "Paris", "desc": "La ville des peintres et des gens d'esprit, du magasin de comestibles de Chevet aux ateliers du faubourg Saint-Denis."},
  "atelier": {"ambiance": "ville", "name": "L'atelier de Decamps", "map": "paris", "x": 60, "y": 35, "region": "Paris, rue du faubourg Saint-Denis", "desc": "Un atelier de peintre où l'on reçoit en robe de chambre, entre les armes, les oiseaux empaillés, les pipes bourrées, un ours dans sa niche et un singe qui peint."},
  "plaine": {"ambiance": "champs", "name": "La plaine Saint-Denis", "map": "paris", "x": 60, "y": 8, "region": "Au nord de Paris", "desc": "Le terrain de chasse des Parisiens, où le gibier est rare et les chasseurs nombreux."},
  "bal": {"ambiance": "nuit", "name": "Le bal masqué de l'Odéon", "map": "paris", "x": 45, "y": 65, "region": "Paris, rive gauche", "desc": "Un bal où les arlequins dansent la contredanse et où personne ne s'étonne de croiser un ours."},
  "johannot": {"ambiance": "ville", "name": "L'atelier de Tony Johannot", "map": "paris", "x": 40, "y": 45, "region": "Paris", "desc": "L'atelier d'un illustrateur qui grave sur bois la nuit, mal chauffé pendant l'hiver."},
  "orleans": {"ambiance": "ville", "name": "Orléans", "map": "monde", "x": 47, "y": 32, "region": "Loiret", "desc": "La ville de Jeanne d'Arc, de ses érudits, de ses confiseurs et de ses liquoristes."},
  "roxelane": {"ambiance": "mer", "name": "La Roxelane", "map": "monde", "x": 40, "y": 40, "region": "Brick de commerce, port d'attache Marseille", "desc": "Un brick fin marcheur, lesté de canons au lieu de pavés, dont le capitaine ne paie jamais une marchandise qu'il peut prendre."},
  "bango": {"ambiance": "foret", "name": "La rivière Bango", "map": "monde", "x": 52, "y": 66, "region": "Afrique, près de Saint-Paul-de-Loanda", "desc": "Une rive de fleuve africain où chassent les tigres, où nagent les hippopotames et où les singes volent les déjeuners."},
  "mer": {"ambiance": "mer", "name": "En haute mer", "map": "monde", "x": 64, "y": 70, "region": "De l'Atlantique à la mer des Indes", "desc": "La route des navires marchands, où la Roxelane fait ses « échanges » à coups de canon."},
  "terreneuve": {"ambiance": "mer", "name": "Les bancs de Terre-Neuve", "map": "monde", "x": 28, "y": 22, "region": "Atlantique Nord", "desc": "Des eaux froides où l'on pêche la morue et la baleine, entre l'Islande et le cap Farewell."},
  "saintlaurent": {"ambiance": "eau", "name": "Le fleuve Saint-Laurent", "map": "monde", "x": 24, "y": 24, "region": "Canada", "desc": "Un fleuve immense entre les forêts et les montagnes, que l'on remonte en canot vers les grands lacs."},
  "foret": {"ambiance": "foret", "name": "Les forêts du Nouveau Monde", "map": "monde", "x": 22, "y": 28, "region": "Amérique du Nord", "desc": "Une forêt vierge aux arbres comme des colonnes, aux lianes en festons, pleine de loups et de serpents."},
  "hutte": {"ambiance": "foret", "name": "La hutte des Sioux", "map": "monde", "x": 21, "y": 29, "region": "Amérique du Nord", "desc": "Une hutte de chasseurs partagée par une natte, où l'on soupe de buffle et d'eau-de-vie d'érable."},
  "delaware": {"ambiance": "route", "name": "Les bords de la Delaware", "map": "monde", "x": 23, "y": 31, "region": "Pennsylvanie", "desc": "Une route déserte entre les rochers, où l'on peut rencontrer un ours."},
  "philadelphie": {"ambiance": "port", "name": "Philadelphie", "map": "monde", "x": 23, "y": 32, "region": "Pennsylvanie", "desc": "La capitale de la Pennsylvanie, ses tavernes de matelots et son port sur la Delaware."},
  "afrique": {"ambiance": "foret", "name": "Le pays des Petits-Namaquois", "map": "monde", "x": 54, "y": 76, "region": "Afrique australe, sur la rivière Orange", "desc": "Des villages de cases, des éléphants qui viennent manger le maïs, et une guerre entre deux peuples."},
  "martinique": {"ambiance": "port", "name": "La Martinique", "map": "monde", "x": 26, "y": 44, "region": "Antilles françaises", "desc": "Une île à sucre, où l'on achète encore des hommes en cachette."},
  "mosquitos": {"ambiance": "village", "name": "La côte des Mosquitos", "map": "monde", "x": 18, "y": 46, "region": "Amérique centrale", "desc": "Une côte de cabanes au bord de la baie de Carthago, gouvernée par un chef en vieil habit d'uniforme."},
  "londres": {"ambiance": "ville", "name": "Londres", "map": "monde", "x": 46, "y": 24, "region": "Angleterre", "desc": "La ville des banquiers, des lithographies et des émigrants prêts à croire au pays de cocagne."},
}


PEOPLE = {
  "pamphile": {"name": "Le capitaine Pamphile", "aka": ["capitaine Pamphile", "Pamphile", "don Gusman y Pamphilos"], "face": {"age": "mur", "hair": "noir", "coif": "court", "skin": "hale", "beard": "barbe"}, "qui": "Un capitaine marseillais, commandant du brick de commerce la Roxelane, qui ne recule devant rien pour un bon marché.", "aspect": {"allure": "brûle-gueule aux dents, pistolets à la ceinture", "signe": "jure « Bagasse ! »"}},
  "decamps": {"name": "Decamps", "aka": ["Decamps"], "face": {"age": "adulte", "hair": "brun", "coif": "court", "skin": "clair", "beard": "barbe"}, "qui": "Un peintre ami du narrateur, dont l'atelier du faubourg Saint-Denis abrite une ménagerie.", "aspect": {"allure": "robe de chambre, pinceau à la main"}},
  "alexandre": {"name": "Alexandre Decamps", "aka": ["Alexandre Decamps"], "face": {"age": "adulte", "hair": "brun", "coif": "court", "skin": "clair", "beard": "moustache"}, "qui": "Le frère du peintre, chasseur malchanceux et protecteur de Tom.", "aspect": {"allure": "fusil, carnier vide"}},
  "jadin": {"name": "Jadin", "aka": ["Jadin"], "face": {"age": "adulte", "hair": "chatain", "coif": "court", "skin": "clair", "beard": "moustache"}, "qui": "Un peintre de la bande, qui lit à ses amis le manuscrit des aventures du capitaine Pamphile.", "aspect": {"allure": "manuscrit sous le bras, toux de lecteur"}},
  "thierry": {"name": "Le docteur Thierry", "aka": ["Thierry", "docteur Thierry"], "face": {"age": "adulte", "hair": "brun", "coif": "court", "skin": "clair"}, "qui": "Un médecin savant et spirituel, ami des peintres et de leurs bêtes.", "aspect": {"allure": "boîte de mouches à la main"}},
  "flers": {"name": "Flers", "aka": ["Flers"], "face": {"age": "adulte", "hair": "chatain", "coif": "court", "skin": "clair", "beard": "barbe"}, "qui": "Un peintre paysagiste, habitué de l'atelier.", "aspect": {"allure": "belle voix"}},
  "fau": {"name": "Fau", "aka": ["Fau"], "face": {"age": "adulte", "hair": "brun", "coif": "court", "skin": "clair", "beard": "moustache"}, "qui": "Un ami de la bande, éducateur de Tom et confident de Jacques Ier.", "aspect": {"allure": "farceur, poches pleines de pralines"}},
  "tony": {"name": "Tony Johannot", "aka": ["Tony Johannot", "Tony"], "face": {"age": "adulte", "hair": "chatain", "coif": "court", "skin": "clair", "beard": "moustache"}, "qui": "Un célèbre illustrateur, maître de Jacques II.", "aspect": {"allure": "grave sur bois la nuit"}},
  "tom": {"name": "Tom", "aka": ["Tom"], "face": {}, "qui": "Un ours du Canada, élevé à Paris, pensionnaire de l'atelier.", "aspect": {"allure": "pataud, gourmand", "signe": "fait « Grooonnn ! »"}},
  "jacques1": {"name": "Jacques Ier", "aka": ["Jacques Ier"], "face": {}, "qui": "Un singe d'Afrique, voleur, cuisinier et peintre à ses heures.", "aspect": {"allure": "vif, grimaçant", "signe": "garde ses friandises dans ses joues"}},
  "jacques2": {"name": "Jacques II", "aka": ["Jacques II"], "face": {}, "qui": "Le singe de Tony Johannot, ami de Jacques Ier.", "aspect": {"signe": "réclame sa bouteille"}},
  "camargo": {"name": "Mademoiselle Camargo", "aka": ["mademoiselle Camargo", "Mademoiselle Camargo"], "face": {}, "qui": "Une grenouille de la plaine Saint-Denis, logée dans un bocal avec une petite échelle.", "aspect": {"signe": "grimpe à l'échelle quand il va pleuvoir"}},
  "gazelle": {"name": "Gazelle", "aka": ["Gazelle"], "face": {}, "qui": "La tortue du narrateur, arrachée à la soupe.", "aspect": {"allure": "lente, résignée, affamée"}},
  "doublebouche": {"name": "Double-Bouche", "aka": ["Double-Bouche"], "face": {"age": "enfant", "hair": "brun", "coif": "court", "skin": "hale"}, "qui": "Le mousse gourmand de la Roxelane, qui goûte à tout ce qu'il cuisine.", "aspect": {"allure": "maigre, toujours affamé", "signe": "les doigts dans la sauce"}},
  "policar": {"name": "Policar", "aka": ["Policar"], "face": {"age": "adulte", "hair": "noir", "coif": "court", "skin": "hale", "beard": "moustache"}, "qui": "Le second de la Roxelane.", "aspect": {"allure": "Provençal, chanteur, bon vivant"}},
  "catacoua": {"name": "Catacoua", "aka": ["Catacoua"], "face": {}, "qui": "Le perroquet acheté par Pamphile à l'île Rodrigue.", "aspect": {"signe": "parle et défend son sucre"}},
  "kao": {"name": "Kao-Kiou-Koan", "aka": ["Kao-Kiou-Koan"], "face": {"age": "mur", "hair": "noir", "coif": "long", "skin": "ivoire", "beard": "moustache"}, "qui": "Le capitaine d'un navire de l'empereur de Chine.", "aspect": {"allure": "pipe à opium, rêves de grandeur"}},
  "outavari": {"name": "Outavari", "aka": ["Outavari"], "face": {"age": "adulte", "hair": "noir", "coif": "crepus", "skin": "ebene"}, "qui": "Le chef des Petits-Namaquois, fournisseur d'ivoire de Pamphile.", "aspect": {"allure": "chef de guerre, sa famille autour de lui"}},
  "outavaro": {"name": "Outavaro", "aka": ["Outavaro"], "face": {"age": "adulte", "hair": "noir", "coif": "crepus", "skin": "ebene"}, "qui": "Un chef cafre, autre fournisseur d'ivoire de Pamphile.", "aspect": {"allure": "chef rival d'Outavari"}},
  "gaetano": {"name": "Gaetano", "aka": ["Gaetano"], "face": {"age": "jeune", "hair": "noir", "coif": "court", "skin": "hale"}, "qui": "Un matelot de la Roxelane, qui crie trop fort pendant une révolte.", "aspect": {"allure": "jolie voix"}},
  "serpent": {"name": "Le Serpent-Noir", "aka": ["Serpent-Noir"], "face": {"age": "mur", "hair": "noir", "coif": "long", "skin": "cuivre"}, "qui": "Un grand chef huron, harponneur de baleine et amateur d'eau-de-feu.", "aspect": {"allure": "impassible, plume à la tête", "signe": "fume le calumet"}},
  "michette": {"name": "Michette", "aka": ["Michette"], "face": {}, "qui": "Une jolie chatte de gouttière, engagée par Tony Johannot pour réchauffer son singe.", "aspect": {"allure": "délicate, dédaigneuse"}},
  "pelonge": {"name": "Ignace Nicolas Pelonge", "aka": ["Pelonge"], "face": {"age": "mur", "hair": "gris", "coif": "court", "skin": "clair"}, "qui": "Un liquoriste en gros d'Orléans, sergent-major de la garde nationale.", "aspect": {"allure": "fier de son eau-de-vie"}},
  "malvilain": {"name": "Le capitaine Malvilain", "aka": ["Malvilain"], "face": {"age": "mur", "hair": "brun", "coif": "court", "skin": "hale"}, "qui": "Le capitaine du trois-mâts nantais le Zéphir, chargé d'eau-de-vie pour New-York.", "aspect": {"allure": "politesse prudente"}},
  "karr": {"name": "Alphonse Karr", "aka": ["Alphonse Karr"], "face": {"age": "adulte", "hair": "noir", "coif": "court", "skin": "clair", "beard": "barbe"}, "qui": "Un écrivain ami de Dumas, premier maître de Jacques II.", "aspect": {"allure": "plume spirituelle"}},
}

NO_AUTO = ["gazelle"]
MEET = {"I_2": ["gazelle"]}

WORDS = {
  "brick|bricks": "Un navire à deux mâts, à voiles carrées.",
  "trois-mâts": "Un grand navire à trois mâts.",
  "garcette|garcettes": "Une petite corde tressée dont on se servait à bord pour frapper les matelots punis.",
  "caronade|caronades": "Un canon court de marine, de gros calibre, qui tire à courte distance.",
  "pierrier|pierriers": "Un petit canon monté sur pivot, qu'on charge de mitraille.",
  "sainte-barbe": "Sur un navire, la soute où l'on garde la poudre.",
  "brûle-gueule": "Une pipe à tuyau très court.",
  "cacique|caciques": "Le chef d'une tribu ou d'un peuple d'Amérique.",
  "caciquat": "La dignité de cacique, et le pays qu'il gouverne.",
  "bois d'ébène": "Le nom cynique que les négriers donnaient aux captifs africains qu'ils vendaient.",
  "wigwam": "Une hutte d'Indiens d'Amérique du Nord.",
  "rapin|rapins": "Un jeune élève peintre, à tout faire dans un atelier.",
  "Bagasse": "Un juron provençal.",
}


PAGES = {
  "I_1": ["La tortue de chez Chevet", "paris"], "I_2": ["Gazelle", "paris"], "I_3": ["Une ménagerie d'atelier", "atelier"],
  "II_1": ["La carotte", "atelier"], "II_2": ["Souper et lecture", "atelier"],
  "III_1": ["Robe de chambre de rigueur", "atelier"], "III_2": ["Les pipes et les invités", "atelier"], "III_3": ["Love, chien anglais", "plaine"], "III_4": ["La plaine Saint-Denis", "plaine"], "III_5": ["Six cent soixante francs", "plaine"],
  "IV_1": ["Le baromètre vivant", "atelier"], "IV_2": ["Les mouches", "atelier"], "IV_3": ["Jadin ouvre son manuscrit", "atelier"],
  "V_1": ["La rivière Bango", "bango"], "V_2": ["L'hippopotame étiqueté", "bango"], "V_3": ["La guenon et son petit", "bango"], "V_4": ["Le navire de l'empereur de Chine", "mer"], "V_5": ["Le système d'échange", "mer"],
  "VI_1": ["Le dîner funèbre", "atelier"], "VI_2": ["Catacoua", "roxelane"], "VI_3": ["La compresse de rhum", "roxelane"], "VI_4": ["Jacques aux cuisines", "roxelane"], "VI_5": ["La mort du perroquet", "roxelane"],
  "VII_1": ["Le papillon du capitaine", "roxelane"], "VII_2": ["Double-Bouche contre le docteur", "roxelane"], "VII_3": ["Tom dans l'escalier", "atelier"],
  "VIII_1": ["Un ours dans les plates-bandes", "paris"], "VIII_2": ["Le garde municipal", "paris"], "VIII_3": ["Fau vient chercher Tom", "atelier"], "VIII_4": ["Au bal de l'Odéon", "bal"], "VIII_5": ["Le ministre de Schahabaham", "bal"], "VIII_6": ["Huit balles", "bal"],
  "IX_1": ["Pêche à la baleine", "terreneuve"], "IX_2": ["« Vive Policar ! »", "terreneuve"], "IX_3": ["Une extinction de voix", "terreneuve"],
  "X_1": ["Une île qui nage", "saintlaurent"], "X_2": ["Le Serpent-Noir", "saintlaurent"], "X_3": ["Le marché du cap Breton", "saintlaurent"], "X_4": ["Vers les grands lacs", "saintlaurent"],
  "XI_1": ["Pagayer", "saintlaurent"], "XI_2": ["Le nuage noir", "saintlaurent"], "XI_3": ["Les pigeons", "saintlaurent"], "XI_4": ["Le canot renversé", "saintlaurent"],
  "XII_1": ["Première nuit", "foret"], "XII_2": ["Lié à l'arbre", "foret"], "XII_3": ["Les loups et le boa", "foret"], "XII_4": ["La forêt vierge", "foret"], "XII_5": ["La hutte", "hutte"], "XII_6": ["Le jeune chasseur blessé", "hutte"], "XII_7": ["La montre", "hutte"], "XII_8": ["Philadelphie à l'horizon", "foret"],
  "XIII_1": ["L'ours de la route", "delaware"], "XIII_2": ["Un ours savant", "delaware"], "XIII_3": ["La taverne des Provençaux", "philadelphie"], "XIII_4": ["À la nage", "philadelphie"], "XIII_5": ["Le fantôme", "philadelphie"], "XIII_6": ["La sainte-barbe", "roxelane"], "XIII_7": ["La bascule", "roxelane"],
  "XIV_1": ["Jacques Ier malade", "atelier"], "XIV_2": ["Les pralines de Fau", "atelier"], "XIV_3": ["Jacques II", "atelier"], "XIV_4": ["La vengeance", "atelier"],
  "XV_1": ["L'hiver de Tony", "johannot"], "XV_2": ["Le bruit de ferraille", "johannot"], "XV_3": ["Michette", "johannot"], "XV_4": ["La queue en tire-bouchon", "johannot"], "XV_5": ["Les peaux de lion", "johannot"], "XV_6": ["La bouteille", "johannot"],
  "XVI_1": ["L'Académie à Orléans", "orleans"], "XVI_2": ["Le toast du préfet", "orleans"],
  "XVII_1": ["Le Zéphir", "mer"], "XVII_2": ["Douze pipes d'eau-de-vie", "mer"], "XVII_3": ["La guerre des Namaquois", "afrique"], "XVII_4": ["Outavari", "afrique"], "XVII_5": ["La reconnaissance de nuit", "afrique"], "XVII_6": ["Le Lion blanc", "afrique"], "XVII_7": ["La pirogue", "afrique"],
  "XVIII_1": ["La Martinique", "martinique"], "XVIII_2": ["La serviette blanche", "mosquitos"], "XVIII_3": ["Le caciquat", "mosquitos"],
  "XIX_1": ["Le pavillon des Mosquitos", "londres"], "XIX_2": ["Les consuls", "londres"], "XIX_3": ["Les gravures", "londres"], "XIX_4": ["Le cabinet d'histoire naturelle", "londres"], "XIX_5": ["L'emprunt", "londres"],
  "CONCL_1": ["Les émigrants", "mosquitos"],
  "PJ_1": ["La constitution des Mosquitos", "londres"], "PJ_2": ["Le parlement du cacique", "londres"], "PJ_3": ["La lettre d'Alphonse Karr", "paris"],
}
