# Fiche des « Voyages de Gulliver » pour livre.py (Jonathan Swift, 1726 ; traduction de l'abbé Desfontaines, 1727).
# Texte : elg.py (div3 div2) sur le fichier TEI d'Ebooks libres et gratuits (swift-voyages_gulliver.xml), puis
# fiches/gulliver_texte.py. Les chapitres sont numérotés par voyage : I1 à I8 (Lilliput), II1 à II6, III1 à III10, IV1 à IV12.
HEAD = """// « Voyages de Gulliver » (Gulliver's Travels), Jonathan Swift, 1726 : un livre à lire, sans choix (lecture: true).
// Texte de Swift (1667-1745, domaine public), dans la traduction de l'abbé Desfontaines (1727, domaine public), revue
// au XIXe siècle, d'après l'édition d'Ebooks libres et gratuits. Les sommaires en italique ouvrent les chapitres de cette
// édition ; les titres des chapitres et des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés),
// sont de Claude."""

BASE = {
  "id": "gulliver",
  "title": "Voyages de Gulliver",
  "subtitle": "Un livre à lire · Jonathan Swift, 1726",
  "summary": "Un chirurgien de marine anglais fait naufrage et s'éveille sur une plage, cloué au sol par des centaines de fils : autour de lui s'agite un peuple haut de six pouces. Après Lilliput viennent un pays de géants, une île qui vole, une académie de savants fous, des immortels qu'on plaint, et enfin un pays où les chevaux raisonnent et où les hommes sont des bêtes. Les quatre voyages de Swift en entier, une satire où chaque peuple renvoie un miroir à l'Europe. Sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  "tags": ["voyage", "aventure", "humour"],
  "author": "Jonathan Swift",
  "lecture": True,
  "age": 12,
  "skin": "parchemin",
  "cover": {"motif": "etoile", "color": "#5a3d22"},
  "glossary": None,
  "voice": "première personne, passé",
  "version": 1,
  "notice": {
    "title": "Un livre de 1726",
    "text": [
      "Jonathan Swift, prêtre irlandais et pamphlétaire, publie les « Voyages de Gulliver » en 1726, sans nom d'auteur, comme le récit véritable d'un capitaine de vaisseau. Sous les petits hommes, les géants et les savants fous, il vise les partis, les cours, les guerres et les savants de son temps.",
      "Le texte est la traduction de l'abbé Desfontaines, parue dès 1727 et revue au XIXe siècle. Desfontaines traduit librement : il abrège, adoucit les passages les plus crus, ajoute çà et là ses propres réflexions (sur l'éducation à Lilliput, par exemple) et regroupe quelques chapitres. C'est ainsi que les lecteurs français ont connu Gulliver pendant deux siècles.",
      "La satire est rude, surtout dans le dernier voyage : les hommes y deviennent des bêtes sales et méchantes, et le voyageur finit par ne plus supporter les siens. Les mesures sont celles de l'époque : un pouce vaut 2,7 centimètres, un pied 32 centimètres, une toise près de 2 mètres.",
    ],
  },
  "intro": [],
  "world": {"start": {"place": "mer", "hour": 0, "gold": 0, "food": 0, "items": [], "kits": {"guerrier": [], "rodeur": [], "voleur": [], "mage": [], "pretre": [], "barde": []}}},
}

V = ["Voyage à Lilliput", "Voyage à Brobdingnag", "Voyage à Laputa", "Voyage au pays des Houyhnhnms"]
T = [
  ["Le naufrage", "L'homme Montagne", "La corde et le bâton", "Gros-boutiens et petits-boutiens", "La flotte de Blefuscu", "Les lois de Lilliput", "L'acte d'accusation", "Le retour"],
  ["Dans le champ d'orge", "La petite nourrice", "À la cour de la reine", "Le roi s'informe de l'Europe", "La poudre et les livres", "L'aigle"],
  ["L'île volante", "Les Laputiens", "L'aimant", "Lagado", "L'académie des projets", "Les académiciens politiques", "L'île des sorciers", "Luggnagg", "Les struldbruggs", "Le Japon"],
  ["Les yahous", "Chez le maître cheval", "La langue des Houyhnhnms", "Le vrai et le faux", "La guerre et la loi", "L'argent", "Parallèle des yahous et des hommes", "Les mœurs des Houyhnhnms", "L'assemblée", "L'exhortation", "Pedro de Mendez", "Au lecteur"],
]
R = [
  [
    "Un chirurgien de Nottingham, marié, sans fortune, s'engage sur l'Antilope pour la mer du Sud. Le vaisseau se brise au nord-ouest de la terre de Van-Diemen ; le naufragé nage jusqu'à une côte et s'endort dans l'herbe. Il s'éveille attaché au sol par une multitude de fils : de petits hommes hauts de six pouces le criblent de flèches, puis le nourrissent par centaines, et l'endorment d'un vin drogué. On le hisse sur un chariot à vingt-deux roues, tiré par quinze cents chevaux, jusqu'à un vieux temple près de la capitale, où on l'enchaîne par la jambe.",
    "L'empereur de Lilliput vient le voir à cheval. Six savants lui apprennent la langue, trois cents tailleurs lui font un habit, et tout le royaume accourt. Deux commissaires fouillent ses poches et en dressent l'inventaire : un grand coffre d'argent plein de poussière, une machine qui fait un bruit de moulin et que le voyageur consulte avant d'agir. On lui prend son sabre et ses pistolets. Il garde ses lunettes et sa lunette d'approche, qu'il ne montre pas.",
    "Les Lilliputiens obtiennent les grandes charges en dansant sur la corde, et les fils de soie en sautant par-dessus un bâton. Le voyageur divertit la cour : l'armée défile entre ses jambes. Après bien des requêtes, et malgré l'amiral Skyresh Bolgolam, son ennemi, il obtient sa liberté en jurant d'observer les articles de l'empereur : il sera l'allié de Lilliput contre l'île de Blefuscu.",
    "Le voyageur visite Mildendo, la capitale, en enjambant les murailles. Reldresal, secrétaire d'État, vient lui expliquer les affaires de l'empire : deux partis s'y déchirent, les hauts-talons et les bas-talons, et l'empire est en guerre avec Blefuscu, qui accueille les gros-boutiens, exilés pour avoir cassé leurs œufs par le gros bout. Le voyageur promet de défendre l'empereur.",
    "À la nage et à gué, le voyageur traverse le canal, accroche toute la flotte de Blefuscu avec des crochets et l'entraîne jusqu'au port de Lilliput, le visage criblé de flèches. L'empereur le fait nardac, mais veut aussitôt réduire Blefuscu en province ; le voyageur refuse de servir à asservir un peuple libre, et l'empereur ne le lui pardonne pas. La paix signée, il reçoit les ambassadeurs de Blefuscu. Une nuit, le feu prend au palais de l'impératrice ; il l'éteint d'une façon que la loi punit de mort.",
    "Le voyageur décrit Lilliput : l'écriture de travers, les morts enterrés la tête en bas, la fraude punie plus durement que le vol, l'ingratitude tenue pour un crime. Les emplois vont à la probité plutôt qu'au génie. Les enfants sont élevés hors de leur famille, dans des séminaires publics où l'on forme le jugement plutôt que la mémoire, filles comme garçons, et où l'on punit par la honte plutôt que par les coups.",
    "Un seigneur de la cour vient de nuit avertir le voyageur : Bolgolam, Flimnap et d'autres ont dressé contre lui un acte d'accusation, pour l'incendie éteint, pour son refus d'asservir Blefuscu, pour ses égards envers les ambassadeurs. L'empereur, par clémence, se contente qu'on lui crève les yeux ; on compte ensuite réduire sa nourriture jusqu'à ce qu'il dépérisse. Le voyageur ne veut pas lever la main sur un prince qui l'a comblé : il prend la mer, passe à Blefuscu à gué et se met sous la protection de son roi.",
    "Sur la côte de Blefuscu, le voyageur trouve une chaloupe de son pays, renversée par la marée. Lilliput réclame qu'on le renvoie pieds et mains liés ; le roi de Blefuscu refuse poliment et lui offre de rester, mais le voyageur préfère partir. Cinq cents ouvriers lui font des voiles, il charge des vivres, des bœufs et des moutons minuscules, et prend la mer. Un vaisseau anglais le recueille. De retour en Angleterre, il montre ses petites bêtes avec profit, les vend six cents livres sterling, et repart deux mois plus tard.",
  ],
  [
    "L'Aventure, poussée par la tempête, découvre une terre inconnue. Le voyageur descend avec quelques matelots, s'éloigne pour explorer, et voit ses compagnons fuir à la rame devant un géant qui marche dans la mer. Seul, perdu dans un champ d'orge aux épis hauts de quarante pieds, il est ramassé par un moissonneur. Le laboureur, maître du champ, l'emporte chez lui, le pose sur la table, le défend du chat et d'un enfant d'un an ; pendant sa sieste, il se bat au sabre contre deux rats.",
    "La fille du laboureur, neuf ans, le soigne, lui fait un lit dans le berceau de sa poupée et l'appelle Grildrig, le petit homme ; il l'appelle Glumdalclitch, la petite nourrice. Son maître, voyant qu'il y a de l'argent à gagner, le montre au marché comme une bête curieuse, puis de ville en ville, dix fois par jour, jusqu'à la capitale, Lorbrulgrud.",
    "À demi mort de fatigue, le voyageur est acheté par la reine, qui garde Glumdalclitch pour le servir. Trois savants du roi concluent qu'il n'est qu'un jeu de la nature. On lui fait une boîte pour chambre, des meubles, des habits. Le nain de la reine, jaloux, le tourmente. Le voyageur décrit le royaume, enfermé par des montagnes infranchissables. Il risque sa vie plus d'une fois : une grenouille dans sa barque, et surtout un singe qui l'emporte sur les toits du palais.",
    "Le voyageur joue du clavecin avec deux bâtons, en courant sur les touches. Le roi, homme de bon sens, se fait raconter l'Angleterre en cinq audiences : le Parlement, les tribunaux, les finances, l'armée, l'histoire du dernier siècle. À la sixième, il pose ses questions, puis rend son jugement : la plupart des compatriotes du voyageur sont la plus pernicieuse race d'insectes que la nature ait jamais laissée ramper sur la terre.",
    "Piqué au vif, le voyageur offre au roi le secret de la poudre à canon, de quoi raser les villes et briser toute révolte. Le roi, horrifié, lui défend de jamais lui en reparler. Le voyageur décrit la littérature de ce peuple, ses lois qui tiennent en peu de mots, ses livres, sa médecine et son armée.",
    "Deux ans ont passé. Pendant un voyage de la cour vers la mer, un page porte la boîte du voyageur sur le rivage ; un aigle l'enlève par son cordon et la lâche en pleine mer. Un vaisseau anglais la recueille, et le capitaine Thomas Viletcks croit d'abord son passager fou. Le voyageur rentre chez lui, se penche pour passer les portes et trouve les siens tout petits ; sa femme jure qu'il ne reprendra plus la mer.",
  ],
  [
    "Le voyageur repart sur la Bonne-Espérance. Des pirates prennent son navire ; un Hollandais parmi eux le fait abandonner dans un canot. Il aborde sur des îlots de rochers et se croit perdu, quand une île vole au-dessus de lui, couverte de galeries et de gens. On le hisse à bord par une chaîne.",
    "Les Laputiens ont la tête penchée, un œil tourné en dedans et l'autre vers le ciel, et ils sont si absorbés que des valets doivent les frapper d'une vessie pour qu'ils écoutent ou répondent. On mesure le voyageur au quart de cercle pour lui faire un habit qui ne lui va pas. Ces savants méprisent la géométrie pratique, vivent dans des maisons de travers et tremblent que le soleil ne s'éteigne ou qu'une comète ne les détruise.",
    "L'île volante tient sur un aimant immense, posé sur un essieu de diamant au fond d'une grotte : en l'inclinant, les astronomes la font monter, descendre et voyager au-dessus du royaume. C'est ainsi que le roi soumet les villes révoltées : il leur cache le soleil et la pluie, ou menace de laisser tomber l'île sur elles.",
    "Lassé des Laputiens, trop absorbés pour causer, le voyageur obtient son congé et descend à Lagado, capitale des Balnibarbes. Il loge chez Munodi, ancien gouverneur disgracié. Les champs sont en friche, les maisons en ruine, les gens en haillons, sauf sur les terres de Munodi, qui fait comme ses ancêtres et en est mal vu à la cour. Munodi explique : des gens revenus de Laputa ont fondé partout des académies de projets, qui promettent de tout refaire et n'ont encore rien achevé.",
    "Le voyageur visite l'académie de Lagado : un savant tire des rayons de soleil des concombres, un autre bâtit les maisons par le toit, un aveugle mélange les couleurs, un autre fait labourer les champs par des cochons. À l'école des langues, l'un veut réduire tous les mots à des monosyllabes, l'autre abolir les mots tout à fait ; un maître de mathématiques fait avaler à ses élèves des démonstrations écrites sur du pain à chanter.",
    "Le voyageur passe chez les académiciens politiques. Les uns veulent que les princes choisissent leurs favoris pour leur sagesse, et on les tient pour fous ; un médecin propose de soigner les assemblées comme des malades ; d'autres veulent taxer les vices et les folies, ou découvrir les complots en examinant ce que mangent les suspects. Le voyageur ajoute sa propre méthode pour lire des complots dans n'importe quelle lettre, puis songe au retour.",
    "En route pour Luggnagg, le voyageur passe à Gloubbdoubdrib, l'île des sorciers, dont le gouverneur est servi par des spectres. Il obtient d'évoquer les morts : César et Brutus, Homère, Aristote et Descartes, puis les grands de l'histoire moderne. Les morts disent la vérité, et l'histoire en sort défigurée : des héros lâches, des rois menteurs, des fortunes faites par le crime.",
    "À Luggnagg, le voyageur est arrêté, puis conduit à la cour, où l'on rampe jusqu'au trône en léchant le plancher. Le roi, satisfait de son entretien, le loge et le garde trois mois.",
    "On parle au voyageur des struldbruggs, ces enfants nés avec une tache au front et qui ne meurent jamais. Enthousiaste, il dit ce qu'il ferait s'il était immortel : il s'enrichirait, deviendrait savant, verrait le monde changer. On lui répond que les struldbruggs vieillissent sans fin, perdent la mémoire et le goût de tout, et deviennent à quatre-vingts ans morts aux yeux de la loi. On lui en montre quelques-uns : il perd toute envie de l'immortalité.",
    "Muni d'une lettre du roi de Luggnagg, le voyageur passe au Japon, où l'empereur l'autorise à gagner Nangasaki sans accomplir la cérémonie imposée aux Hollandais. Il embarque sur un vaisseau hollandais en se faisant passer pour l'un d'eux, débarque à Amsterdam et rentre à Redriff, après cinq ans et demi d'absence.",
  ],
  [
    "Le voyageur, devenu capitaine, part avec un équipage recruté en route. Ses matelots se mutinent, l'enferment, puis l'abandonnent sur un rivage inconnu. Il croise des bêtes hideuses, velues, aux griffes longues, qui grimpent aux arbres et l'assaillent. Deux chevaux surviennent, le dévisagent, hennissent entre eux comme s'ils raisonnaient, et répètent un mot : yahou.",
    "Le cheval gris pommelé conduit le voyageur à sa maison, une longue bâtisse de bois où vivent des chevaux qui se saluent et dînent assis. On le compare à un yahou attaché dans la cour : il lui ressemble trait pour trait, à ses habits près. Il se nourrit de lait et de pain d'avoine, et dort dans une chambre à part.",
    "Le voyageur apprend la langue des Houyhnhnms, qui parlent du nez et de la gorge. Son maître, qu'il appelle Son Honneur, s'étonne d'un yahou qui raisonne. Surpris un matin sans ses habits, le voyageur doit avouer qu'il est fait comme les yahous, et supplie qu'on garde son secret. Il raconte d'où il vient : le maître ne comprend pas qu'un vaisseau ait été bâti par des yahous.",
    "Les Houyhnhnms n'ont pas de mot pour le mensonge : ils disent « la chose qui n'est pas ». Le voyageur explique qu'en Europe les yahous gouvernent et que les chevaux les servent, bridés, ferrés, montés et fouettés. Son maître s'indigne. Puis le voyageur raconte sa vie et doit dire pourquoi ses matelots avaient fui leur pays.",
    "Le voyageur décrit à son maître la guerre et ses causes, de la gloire des princes à la couleur d'un habit, puis les armes, les sièges et les batailles. Son maître lui ordonne de se taire. Il décrit ensuite les gens de loi, qui prouvent selon qu'on les paie que le noir est blanc.",
    "Le voyageur explique l'argent, le luxe, l'ivrognerie, les médecins et les maladies d'Europe, puis la noblesse. Son maître le croit bien né, à sa raison et à son bon naturel ; le voyageur répond qu'il est né d'honnêtes parents, sans plus, et que la noblesse d'Europe, nourrie dans l'oisiveté, ne donne souvent que des enfants malingres.",
    "Le voyageur avoue que les Houyhnhnms l'ont convaincu : il n'a plus envie de défendre son espèce. Son maître compare les yahous de son pays et ceux que le voyageur décrit : avidité, querelles, goût pour certaines pierres brillantes, ivresse, chefs flattés. Les yahous d'Europe ne diffèrent des siens que par un peu de raison, dont ils se servent pour aggraver leurs vices.",
    "Le voyageur observe les yahous de près, sous la garde d'un cheval alezan. Il décrit la sagesse des Houyhnhnms : la raison suffit à tout, ils ignorent la dispute et les opinions, s'aiment tous également, élèvent leurs petits sans tendresse aveugle et donnent la même éducation aux femelles et aux mâles.",
    "L'assemblée de la nation débat d'une seule question : faut-il exterminer les yahous ? Le maître du voyageur prend la parole et parle de son yahou étranger, qui a la figure des autres mais quelque teinture de raison. Le voyageur décrit aussi les Houyhnhnms qui n'écrivent pas, ne connaissent pas la maladie, meurent sans qu'on les pleure, et n'ont aucun mot pour le mal.",
    "Le voyageur vit heureux parmi les Houyhnhnms et ne pense plus aux siens qu'avec dégoût. Mais l'assemblée a désapprouvé son maître d'héberger un yahou qui raisonne : elle l'exhorte à le renvoyer. Le voyageur s'évanouit de douleur. Avec l'aide de l'alezan, il bâtit un canot, se prosterne pour baiser le pied de son maître, et part en pleurant.",
    "Le voyageur cherche une île déserte pour y vivre seul. Sur une côte, des sauvages le blessent d'une flèche au genou. Des marins portugais l'emmènent malgré lui. Leur capitaine, Pedro de Mendez, le traite avec bonté, mais le voyageur ne voit en lui qu'un yahou poli. À Lisbonne, il ose à peine regarder par la fenêtre ; dom Pedro le décide à rentrer chez lui. Il embrasse froidement sa femme et ses enfants, supporte mal leur vue, achète deux chevaux et passe quatre heures par jour à leur parler.",
    "Le voyageur jure n'avoir dit que la vérité, se moque des voyageurs menteurs, et raille l'idée de conquérir ses pays au nom de la Couronne : il décrit comment on fonde une colonie, par le meurtre et le pillage. Il prend congé du lecteur et retourne à son petit jardin de Redriff.",
  ],
]
CHAPTERS = [{"title": V[v] + " · " + ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"][i] + ". " + T[v][i], "text": R[v][i]} for v in range(4) for i in range(len(T[v]))]

PLACES = {
  "mer": {"ambiance": "mer", "name": "La mer", "map": "monde", "x": 50, "y": 60, "region": "Les mers du Sud et de l'Inde", "desc": "Des vaisseaux marchands, des tempêtes, des chaloupes, et des terres que nulle carte ne porte."},
  "redriff": {"ambiance": "village", "name": "Redriff", "map": "monde", "x": 30, "y": 20, "region": "Sur la Tamise, près de Londres", "desc": "La maison du voyageur, sa femme, ses enfants, et plus tard une écurie neuve."},
  "rivage": {"ambiance": "champs", "name": "Le rivage de Lilliput", "map": "lilliput", "x": 30, "y": 70, "region": "L'empire de Lilliput", "desc": "Une herbe courte et fine, des arbres de sept pieds, et un vieux temple où l'on enchaîne le géant."},
  "mildendo": {"ambiance": "ville", "name": "Mildendo", "map": "lilliput", "x": 45, "y": 45, "region": "La capitale de Lilliput", "desc": "Une ville carrée de cinq cents pieds de côté, des maisons de trois à cinq étages, et un palais entouré d'une muraille haute de vingt-trois pouces."},
  "blefuscu": {"ambiance": "mer", "name": "Blefuscu", "map": "lilliput", "x": 70, "y": 20, "region": "L'île au nord-est de Lilliput", "desc": "Un empire rival, un port plein de vaisseaux de guerre, et un canal de quatre cents toises entre les deux."},
  "ferme": {"ambiance": "champs", "name": "La ferme du laboureur", "map": "brobdingnag", "x": 30, "y": 70, "region": "Brobdingnag, près de la côte", "desc": "Des champs d'orge aux épis hauts comme des arbres, des haies de cent vingt pieds, une maison où un chat vaut trois bœufs."},
  "lorbrulgrud": {"ambiance": "chateau", "name": "Lorbrulgrud", "map": "brobdingnag", "x": 55, "y": 45, "region": "La capitale de Brobdingnag", "desc": "L'Orgueil de l'univers : une ville coupée par un fleuve, et un palais de sept milles de tour aux chambres hautes de deux cent quarante pieds."},
  "laputa": {"ambiance": "montagne", "name": "Laputa", "map": "laputa", "x": 45, "y": 25, "region": "L'île volante", "desc": "Une île ronde de quatre mille pas, des galeries en terrasses, un palais au sommet et, au fond d'une grotte, l'aimant qui la porte."},
  "lagado": {"ambiance": "ville", "name": "Lagado", "map": "laputa", "x": 40, "y": 55, "region": "Les Balnibarbes", "desc": "Une capitale grande comme la moitié de Londres, des maisons de travers, des champs en friche et des gens en haillons."},
  "academie": {"ambiance": "ville", "name": "L'académie de Lagado", "map": "laputa", "x": 50, "y": 60, "region": "À Lagado", "desc": "Une suite de bâtiments des deux côtés d'une rue, et dans chaque chambre un projet."},
  "gloubbdoubdrib": {"ambiance": "nuit", "name": "Gloubbdoubdrib", "map": "laputa", "x": 25, "y": 75, "region": "L'île des sorciers", "desc": "Une île fertile, un palais au milieu d'un parc, des gardes étranges et des serviteurs qui s'évanouissent d'un geste."},
  "luggnagg": {"ambiance": "chateau", "name": "Luggnagg", "map": "laputa", "x": 70, "y": 70, "region": "Un royaume entre les Balnibarbes et le Japon", "desc": "Un port, la cour de Trildrogdrib, et un trône qu'on approche en rampant."},
  "japon": {"ambiance": "ville", "name": "Le Japon", "map": "laputa", "x": 85, "y": 50, "region": "Yedo et Nangasaki", "desc": "Une cour fermée aux étrangers, et le port où les vaisseaux hollandais attendent leur cargaison."},
  "houyhnhnms": {"ambiance": "champs", "name": "Le pays des Houyhnhnms", "map": "houyhnhnms", "x": 40, "y": 50, "region": "Une terre australe inconnue", "desc": "Des herbages, des champs d'avoine, des yahous dans les arbres, et une longue maison de bois couverte de paille."},
  "cote": {"ambiance": "mer", "name": "La côte", "map": "houyhnhnms", "x": 20, "y": 75, "region": "Le rivage du pays des Houyhnhnms", "desc": "La plage où l'équipage abandonne son capitaine, et d'où l'on voit, par beau temps, une île au nord-est."},
  "lisbonne": {"ambiance": "ville", "name": "Lisbonne", "map": "monde", "x": 35, "y": 45, "region": "Le Portugal", "desc": "Le port, la maison du capitaine Pedro de Mendez, et un vaisseau anglais en partance."},
}

PEOPLE = {
  "gulliver": {"name": "Lemuel Gulliver", "aka": ["Quinbus Flestrin", "homme Montagne", "Grildrig"], "face": {"age": "adulte", "hair": "chatain", "coif": "court"}, "qui": "Le narrateur, chirurgien de marine, qui raconte ses quatre voyages.", "aspect": {"allure": "chirurgien de marine, curieux de tout", "habits": "justaucorps, chapeau, épée, lunettes de poche"}},
  "marie": {"name": "Marie Burton", "aka": ["Marie Burton"], "f": True, "face": {"age": "adulte", "hair": "brun", "coif": "chignon"}, "qui": "La femme du voyageur, fille d'un marchand de Londres.", "aspect": {"allure": "épouse patiente d'un homme qui part toujours"}},
  "bates": {"name": "M. Bates", "aka": ["Bates"], "face": {"age": "mur", "hair": "gris", "coif": "court"}, "qui": "Le chirurgien de Londres chez qui le voyageur a fait son apprentissage.", "aspect": {"allure": "maître chirurgien bienveillant"}},
  "empereur": {"name": "L'empereur de Lilliput", "aka": ["empereur de Lilliput", "Golbasto"], "face": {"age": "jeune", "hair": "brun", "coif": "court", "skin": "hale"}, "qui": "Le souverain des Lilliputiens, plus grand qu'aucun de ses courtisans.", "aspect": {"allure": "prince fier, cavalier excellent", "visage": "lèvre épaisse, nez aquilin, teint d'olive", "habits": "casque d'or à plumet, épée nue"}},
  "bolgolam": {"name": "Skyresh Bolgolam", "aka": ["Skyresh Bolgolam", "Bolgolam"], "face": {"age": "mur", "hair": "noir", "coif": "court"}, "qui": "Le grand amiral de Lilliput, ennemi du voyageur.", "aspect": {"allure": "ministre habile, d'un esprit aigre"}},
  "flimnap": {"name": "Flimnap", "aka": ["Flimnap"], "face": {"age": "adulte", "hair": "brun", "coif": "court"}, "qui": "Le grand trésorier de Lilliput, le meilleur danseur de corde de l'empire.", "aspect": {"allure": "courtisan agile et jaloux"}},
  "reldresal": {"name": "Reldresal", "aka": ["Reldresal"], "face": {"age": "adulte", "hair": "brun", "coif": "court"}, "qui": "Le secrétaire d'État de Lilliput, ami du voyageur.", "aspect": {"allure": "ministre courtois et prudent"}},
  "roiblefuscu": {"name": "Le roi de Blefuscu", "aka": ["roi de Blefuscu"], "face": {"age": "adulte", "hair": "noir", "coif": "court"}, "qui": "Le souverain de l'île rivale de Lilliput.", "aspect": {"allure": "prince sage et accueillant"}},
  "laboureur": {"name": "Le laboureur", "aka": ["laboureur"], "face": {"age": "adulte", "hair": "brun", "coif": "court", "beard": "barbe"}, "qui": "Le géant qui ramasse le voyageur dans son champ, puis l'exhibe pour de l'argent.", "aspect": {"allure": "fermier géant, avide de gain"}},
  "glumdalclitch": {"name": "Glumdalclitch", "aka": ["Glumdalclitch"], "f": True, "face": {"age": "enfant", "hair": "blond", "coif": "tresses"}, "qui": "La fille du laboureur, neuf ans, qui veille sur le voyageur comme sur une poupée.", "aspect": {"allure": "fillette géante, adroite et tendre", "signe": "habille et soigne son petit homme"}},
  "reine": {"name": "La reine de Brobdingnag", "aka": [], "f": True, "face": {"age": "adulte", "hair": "brun", "coif": "chignon"}, "qui": "La reine des géants, qui achète le voyageur et en fait son favori.", "aspect": {"allure": "reine bonne et curieuse"}},
  "roibrob": {"name": "Le roi de Brobdingnag", "aka": [], "face": {"age": "mur", "hair": "gris", "coif": "court", "beard": "barbe"}, "qui": "Le roi des géants, savant et plein de bon sens.", "aspect": {"allure": "prince philosophe et mathématicien"}},
  "nain": {"name": "Le nain de la reine", "aka": ["nain de la reine"], "face": {"age": "adulte", "hair": "roux", "coif": "court"}, "qui": "Le plus petit homme de Brobdingnag, trente pieds de haut, jaloux du voyageur.", "aspect": {"allure": "nain insolent et méchant"}},
  "viletcks": {"name": "Thomas Viletcks", "aka": ["Thomas Viletcks"], "face": {"age": "mur", "hair": "gris", "coif": "court"}, "qui": "Le capitaine anglais qui recueille la boîte du voyageur en pleine mer.", "aspect": {"allure": "capitaine honnête et sensé"}},
  "robinson": {"name": "Guillaume Robinson", "aka": ["Guillaume Robinson"], "face": {"age": "adulte", "hair": "brun", "coif": "court"}, "qui": "Le capitaine de la Bonne-Espérance, qui emmène le voyageur dans son troisième voyage.", "aspect": {"allure": "capitaine de Cornouailles"}},
  "hollandais": {"name": "Le Hollandais", "aka": ["Hollandais"], "face": {"age": "adulte", "hair": "blond", "coif": "court"}, "qui": "Un pirate qui veut jeter le voyageur à la mer et le fait abandonner dans un canot.", "aspect": {"allure": "pirate cruel, chrétien de nom"}},
  "roilaputa": {"name": "Le roi de Laputa", "aka": [], "face": {"age": "mur", "hair": "gris", "coif": "long"}, "qui": "Le souverain de l'île volante, perdu dans ses calculs.", "aspect": {"allure": "roi distrait, astronome", "visage": "tête penchée, un œil vers le ciel"}},
  "munodi": {"name": "Munodi", "aka": ["Munodi"], "face": {"age": "mur", "hair": "gris", "coif": "court"}, "qui": "Un seigneur balnibarbe, ancien gouverneur de Lagado, qui loge le voyageur.", "aspect": {"allure": "grand seigneur disgracié et sensé"}},
  "gouverneur": {"name": "Le gouverneur de Gloubbdoubdrib", "aka": [], "face": {"age": "ancien", "hair": "blanc", "coif": "long", "beard": "longue"}, "qui": "Le chef des sorciers, qui évoque les morts pour le voyageur.", "aspect": {"allure": "prince magicien, servi par des spectres"}},
  "roiluggnagg": {"name": "Le roi de Luggnagg", "aka": ["roi de Luggnagg"], "face": {"age": "adulte", "hair": "noir", "coif": "court"}, "qui": "Le souverain devant qui l'on rampe en léchant le plancher.", "aspect": {"allure": "roi cruel et bienveillant tour à tour"}},
  "maitre": {"name": "Le maître", "aka": ["Son Honneur", "gris pommelé", "gris-pommelé"], "face": {"age": "mur", "hair": "gris", "coif": "court"}, "qui": "Le Houyhnhnm gris pommelé qui recueille le voyageur et l'instruit.", "aspect": {"allure": "cheval gris pommelé, sage et grave"}},
  "alezan": {"name": "L'alezan", "aka": ["alezan"], "face": {"age": "jeune", "hair": "roux", "coif": "court"}, "qui": "Un bidet alezan, valet du maître, qui aide le voyageur à parler la langue et à bâtir son canot.", "aspect": {"allure": "petit cheval alezan, serviable"}},
  "mendez": {"name": "Pedro de Mendez", "aka": ["Pedro de Mendez", "dom Pedro"], "face": {"age": "adulte", "hair": "noir", "coif": "court", "beard": "moustache"}, "qui": "Le capitaine portugais qui ramène le voyageur à Lisbonne.", "aspect": {"allure": "capitaine généreux et poli"}},
}
NO_AUTO = ["reine", "roibrob", "roilaputa", "gouverneur", "gulliver", "laboureur", "roiluggnagg"]
MEET = {"I1_1": ["gulliver"], "II1_3": ["laboureur"], "II3_1": ["reine", "roibrob"], "III2_1": ["roilaputa"], "III7_1": ["gouverneur"], "III8_1": ["roiluggnagg"]}

WORDS = {
  "Lilliput": "L'empire des petits hommes, hauts de six pouces.",
  "Blefuscu": "L'île voisine de Lilliput, son ennemie.",
  "gros-boutiens": "Les Lilliputiens qui veulent casser leurs œufs par le gros bout, exilés à Blefuscu : Swift vise les querelles religieuses de l'Angleterre.",
  "nardac": "Le plus haut titre d'honneur de Lilliput.",
  "Hurgo": "Un grand seigneur, à Lilliput.",
  "Brobdingnag": "Le pays des géants, hauts comme des clochers.",
  "Laputa": "L'île volante des savants distraits.",
  "Balnibarbes": "Le royaume de terre ferme que gouverne le roi de Laputa.",
  "struldbrugg|struldbruggs": "Un immortel de Luggnagg, né avec une tache au front.",
  "Houyhnhnm|Houyhnhnms": "Un cheval doué de raison ; le mot veut dire, dans leur langue, « la perfection de la nature ».",
  "yahou|yahous": "Une bête à figure humaine, sale et méchante, au pays des Houyhnhnms.",
  "toise|toises": "Une mesure de longueur d'environ deux mètres.",
  "lieue|lieues": "Une mesure de distance d'environ quatre kilomètres.",
  "justaucorps": "Un habit d'homme serré à la taille, qui descend jusqu'aux genoux.",
  "chaloupe": "Une grande barque qu'on embarque sur un vaisseau.",
  "tories|whigs": "Les deux grands partis politiques de l'Angleterre de Swift.",
  "clavecin": "Un instrument à clavier, ancêtre du piano, dont les cordes sont pincées.",
}

P = "I1_1 I1_2 I1_3 I2_1 I2_2 I2_3 I2_4 I3_1 I3_2 I4_1 I4_2 I5_1 I5_2 I6_1 I6_2 I6_3 I6_4 I7_1 I7_2 I7_3 I7_4 I8_1 I8_2 I8_3 II1_1 II1_2 II1_3 II1_4 II1_5 II2_1 II2_2 II2_3 II3_1 II3_2 II3_3 II3_4 II3_5 II3_6 II4_1 II4_2 II4_3 II4_4 II5_1 II5_2 II5_3 II6_1 II6_2 II6_3 II6_4 II6_5 III1_1 III1_2 III1_3 III2_1 III2_2 III3_1 III3_2 III4_1 III4_2 III4_3 III5_1 III5_2 III6_1 III6_2 III7_1 III7_2 III7_3 III8_1 III8_2 III9_1 III9_2 III9_3 III9_4 III10_1 III10_2 IV1_1 IV1_2 IV1_3 IV2_1 IV2_2 IV2_3 IV3_1 IV3_2 IV3_3 IV4_1 IV4_2 IV4_3 IV5_1 IV5_2 IV5_3 IV6_1 IV6_2 IV7_1 IV8_1 IV9_1 IV9_2 IV10_1 IV10_2 IV10_3 IV10_4 IV11_1 IV11_2 IV11_3 IV11_4 IV12_1 IV12_2".split()
PT = [
  ("Le naufrage de l'Antilope", "mer"), ("Mille petits hommes", "rivage"), ("Le chariot à vingt-deux roues", "rivage"),
  ("L'empereur à cheval", "rivage"), ("On délibère sur le géant", "rivage"), ("La fouille", "rivage"), ("L'inventaire", "rivage"),
  ("Danseurs de corde", "mildendo"), ("Les articles de la liberté", "mildendo"),
  ("Mildendo", "mildendo"), ("Reldresal", "mildendo"),
  ("La flotte enlevée", "blefuscu"), ("Le feu au palais", "mildendo"),
  ("Les lois de Lilliput", "mildendo"), ("La probité avant le génie", "mildendo"), ("Les séminaires", "mildendo"), ("Former le jugement", "mildendo"),
  ("Une visite de nuit", "mildendo"), ("Les articles de l'accusation", "mildendo"), ("La clémence de l'empereur", "mildendo"), ("Le passage à Blefuscu", "blefuscu"),
  ("Une chaloupe à la dérive", "blefuscu"), ("La réponse du roi", "blefuscu"), ("Le retour en Angleterre", "mer"),
  ("L'Aventure dans la tempête", "mer"), ("Le champ d'orge", "ferme"), ("Le moissonneur", "ferme"), ("Sur la table du laboureur", "ferme"), ("Le chat et les rats", "ferme"),
  ("Le berceau de la poupée", "ferme"), ("Au marché", "ferme"), ("La route de la capitale", "lorbrulgrud"),
  ("Acheté par la reine", "lorbrulgrud"), ("Les trois savants", "lorbrulgrud"), ("Une boîte pour chambre", "lorbrulgrud"), ("Le pays des géants", "lorbrulgrud"), ("La grenouille", "lorbrulgrud"), ("Le singe", "lorbrulgrud"),
  ("Le clavecin", "lorbrulgrud"), ("L'Angleterre racontée", "lorbrulgrud"), ("Les doutes du roi", "lorbrulgrud"), ("Le jugement du roi", "lorbrulgrud"),
  ("Le secret de la poudre", "lorbrulgrud"), ("Les livres des géants", "lorbrulgrud"), ("La faiblesse du genre humain", "lorbrulgrud"),
  ("Vers la frontière", "lorbrulgrud"), ("L'aigle", "mer"), ("Un pygmée parmi les matelots", "mer"), ("Le récit au capitaine", "mer"), ("Une maison trop petite", "redriff"),
  ("Les pirates", "mer"), ("Abandonné dans un canot", "mer"), ("L'île qui vole", "laputa"),
  ("Les frappeurs", "laputa"), ("Le tailleur et le quart de cercle", "laputa"),
  ("L'aimant", "laputa"), ("Comment le roi châtie les villes", "laputa"),
  ("Las des Laputiens", "lagado"), ("Munodi", "lagado"), ("Les terres de Munodi", "lagado"),
  ("Les concombres et le soleil", "academie"), ("La machine à écrire les livres", "academie"),
  ("Les académiciens politiques", "academie"), ("Lire les complots", "academie"),
  ("L'île des sorciers", "gloubbdoubdrib"), ("César et Brutus", "gloubbdoubdrib"), ("L'histoire défigurée", "gloubbdoubdrib"),
  ("Arrêté à Luggnagg", "luggnagg"), ("La poussière du trône", "luggnagg"),
  ("Les immortels", "luggnagg"), ("Si j'étais struldbrugg", "luggnagg"), ("Le portrait des struldbruggs", "luggnagg"), ("Morts aux yeux de la loi", "luggnagg"),
  ("La lettre pour l'empereur", "japon"), ("Nangasaki", "japon"),
  ("L'équipage révolté", "cote"), ("Les bêtes velues", "houyhnhnms"), ("Deux chevaux", "houyhnhnms"),
  ("La maison de bois", "houyhnhnms"), ("Un yahou vêtu", "houyhnhnms"), ("Du lait et de l'avoine", "houyhnhnms"),
  ("Apprendre la langue", "houyhnhnms"), ("La perfection de la nature", "houyhnhnms"), ("Le secret des habits", "houyhnhnms"),
  ("La chose qui n'est pas", "houyhnhnms"), ("Les chevaux d'Europe", "houyhnhnms"), ("Né d'honnêtes parents", "houyhnhnms"),
  ("Les causes de la guerre", "houyhnhnms"), ("La science de la guerre", "houyhnhnms"), ("Les gens de loi", "houyhnhnms"),
  ("L'argent", "houyhnhnms"), ("Médecins et gens de qualité", "houyhnhnms"),
  ("Parallèle des yahous et des hommes", "houyhnhnms"),
  ("Les mœurs des Houyhnhnms", "houyhnhnms"),
  ("L'assemblée de la nation", "houyhnhnms"), ("Sans livres et sans maladies", "houyhnhnms"),
  ("Une vie heureuse", "houyhnhnms"), ("L'exhortation", "houyhnhnms"), ("Un coup de foudre", "houyhnhnms"), ("Le départ", "cote"),
  ("La flèche", "mer"), ("Les Portugais", "mer"), ("Dom Pedro", "lisbonne"), ("Deux chevaux à l'écurie", "redriff"),
  ("Les voyageurs menteurs", "redriff"), ("Au lecteur", "redriff"),
]
assert len(P) == len(PT) == 106
PAGES = {p: list(t) for p, t in zip(P, PT)}
