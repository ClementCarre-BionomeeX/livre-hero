// Act II, the common thread (first half): the way down into Ferrières, the gate, the square and its sights, the
// Soufflet d'Or, Maître Crochemore in his room, and the council (posts `a2`).
// Personal marks: a2:porte=croch|limeur|char · a2:avance (took the Économat's advance) · a2:croch_juge.
// Shared marks set here: monde:a2:dentelliere (a lace merchant lodges at the manor: seen at supper).
module.exports = {
  passages: {
    // ------------------------------------------------------------ the way down
    A2c_arrivee: { act: "II", title: "La descente", place: "ferrieres",
      fx: { until: 12 },
      text: [
        "On descend à Ferrières par un chemin de mulets taillé dans le schiste, et l'on descend longtemps. À mesure que le col s'éloigne, le battement des marteaux grossit ; il cesse d'être un bruit pour devenir un état de l'air, comme la chaleur ou le brouillard, et au bout d'une demi-heure on s'aperçoit qu'on marche en mesure.",
        "La poussière est rouge. Elle monte aux chevilles, aux genoux, elle entre dans les coutures, et quand tu t'essuies le front tu ramènes sur ta manche une trace couleur de brique. Les gens que vous croisez l'ont dans les rides. Ils vous regardent passer avec la curiosité brève de ceux qui ont une tâche, et tous, hommes, femmes, enfants, portent au cou, sur un lacet, une plaque de fer grande comme le pouce où un numéro est frappé.",
        "Avant la ville, il y a les crassiers. Ce sont des collines, et elles sont l'ouvrage des hommes : cent ans de scories versées là, charretée par charretée, encore tièdes par endroits, où des enfants armés de crochets trient ce que la forge a laissé de bon. L'un d'eux lève la tête. Il a huit ans, une figure de vieux, et il vous suit des yeux jusqu'au tournant, sans cesser de trier.",
        "Puis le chemin bute sur un mur de laitier noir, percé d'une voûte. Au-dessus de la voûte, en lettres de fonte : PORTE DU MINERAI. Dessous, quatre hommes en casaque rousse, une bascule à charrettes, un pupitre, et un commis qui écrit.",
        "Une file attend : des muletiers, deux colporteurs, une femme avec un panier de poules. Chacun, en passant, dit un nom au commis. Le commis l'écrit. Personne n'entre sans que ce soit écrit.",
      ],
      choices: [
        { label: "« Nous sommes à Maître Crochemore, des Heures. Il est attendu. »", to: "A2c_porte_croch", if: { seen: "A2c_croch_plan" }, hide: { not: { seen: "A2c_croch_plan" } } },
        { label: "Montrer le passeport de compagnon limeur", to: "A2c_porte_limeur", if: { item: "passeport_limeur" }, why: "Il te faudrait le passeport que Loridan a fourni." },
        { label: "Entrer sous la bâche d'un char de minerai", to: "A2c_porte_ok",
          test: { dom: "discretion", diff: 5, label: "Passer la bascule sans peser dans le compte", help: [{ if: { voie: "coureur" }, v: 10 }, { if: { voie: "crocheteur" }, v: 5 }] },
          win: { fx: { set: { "a2:porte": "char" }, ep: ["perso", 400] }, to: "A2c_porte_ok" }, lose: { to: "A2c_porte_mal" } },
      ] },

    A2c_porte_croch: { act: "II", title: "La porte du Minerai", place: "ferrieres",
      fx: { set: { "a2:porte": "croch" } },
      text: [
        "Le commis lève le nez. C'est un petit homme couleur de registre, qui porte sa plume derrière l'oreille comme d'autres une fleur.",
        "« Crochemore. » Il feuillette. « Crochemore, Zéphyrin, président des Heures, une chaise jaune, onze caisses, arrivé hier à sept heures et demie du matin, logé au Soufflet d'Or aux frais de la maison. A fait un esclandre à la bascule parce qu'on voulait peser ses caisses. A déclaré qu'on ne pèse pas le temps. » Il vous considère par-dessus ses lunettes. « Vous êtes ses gens ? Je vous plains. Trois commis. Je mets : commis. »",
        "Il écrit. La plume gratte trois fois.",
        "« Vous répondez de vos dépenses à l'Économat, ou il en répond pour vous. Nul ne sort de la vallée avant la coulée : ordre de Maître Quincarnon, rapport aux curieux. Passez. »",
        "Un des hommes en casaque rousse soulève la barrière, sans vous regarder. Il regarde vos mains. Ici, on regarde d'abord les mains.",
      ],
      choices: [{ label: "Entrer dans Ferrières", to: "A2c_place", big: true }] },

    A2c_porte_limeur: { act: "II", title: "La porte du Minerai", place: "ferrieres",
      fx: { set: { "a2:porte": "limeur" } },
      text: [
        "Le commis déplie le passeport, le lit, le retourne, le flaire presque. C'est un petit homme couleur de registre, qui porte sa plume derrière l'oreille comme d'autres une fleur.",
        "« Compagnon limeur. Cherche de l'ouvrage. » Il a un sourire de marchand qui voit entrer un client. « De l'ouvrage, il y en a. La maison embauche toujours. Elle avance même le premier mois, à ceux qui n'ont rien : le logis, la soupe, l'outil. » Il pousse vers toi, du bout de la plume, cinq rondelles de fer frappées d'un marteau. « Cinq jetons. Vous signez là. »",
        "Derrière lui, la femme aux poules te regarde, et secoue la tête, d'un quart de pouce.",
        "« Nul ne sort de la vallée avant la coulée, ajoute le commis. Ordre de Maître Quincarnon. Après, on sort quand on est quitte. »",
      ],
      choices: [
        { label: "Signer, prendre les cinq jetons", fx: { flag: "a2:avance", clue: "s_avance" }, to: "A2c_place" },
        { label: "« Je vis sur ma bourse, merci. »", fx: { ep: ["perso", 300] }, to: "A2c_place" },
      ] },

    A2c_porte_ok: { act: "II", title: "Sous la bâche", place: "ferrieres",
      text: [
        "Le minerai de Ferrières est une pierre lourde, grasse, rouge sombre, qui tache comme le sang de bœuf. Tu en as jusqu'au menton. Au-dessus de toi, la bâche laisse passer un jour de cave.",
        "Le char s'arrête sur la bascule. Tu entends le fléau qui cherche son aplomb, le commis qui annonce un chiffre, le charretier qui proteste, par habitude, que la bascule de la maison pèse toujours à l'avantage de la maison. On lui répond de circuler. Il circule.",
        "Tu sautes au premier tournant, entre deux murs noirs. Tu es rouge de la tête aux pieds. Dans cette ville, c'est la meilleure tenue qu'on puisse avoir : en vingt pas, tu ressembles à tout le monde.",
        "Et ton nom manque au registre de la porte. Dans une vallée où tout s'écrit, cela peut servir, ou cela peut coûter.",
      ],
      choices: [{ label: "Gagner la place", to: "A2c_place", big: true }] },

    A2c_porte_mal: { act: "II", title: "La bascule", place: "ferrieres",
      fx: { set: { "a2:porte": "limeur" }, gold: -40 },
      text: [
        "Le fléau de la bascule est un honnête instrument. Il annonce au commis cent trente livres de plus que le bulletin de la mine, et le commis, qui n'a jamais vu la montagne faire de cadeau à personne, fait lever la bâche.",
        "On te sort du minerai par le collet. Les quatre casaques rousses rient, ce qui vaut mieux que le reste. Le commis ne rit pas : il calcule.",
        "« Entrée sans déclaration, usage d'un char de la maison, cent trente livres de fret à trois sous le quintal, plus l'amende. Deux écus tout rond, je vous fais grâce des deniers. Votre nom. »",
        "Tu donnes celui du passeport, et les deux écus. Il écrit le nom avec soin, en le soulignant. Te voilà dans le registre, à la page de ceux qu'on a à l'œil.",
      ],
      choices: [{ label: "Entrer, rouge et souligné{e}", to: "A2c_place", big: true }] },

    // ------------------------------------------------------------ the square
    A2c_place: { act: "II", title: "La place du Gros-Marteau", place: "ferrieres", hub: true, backName: "la place du Gros-Marteau",
      text: [
        { first: true, text: "La ville est bâtie de ce que la forge rejette. Les murs sont en laitier, noir et luisant comme du verre de bouteille ; les rues sont pavées de scories ; les toits, d'ardoise, ont pris sous la fumée une patine de vieux chaudron. Rien n'y pousse. À une fenêtre, tu vois un pot de géranium, et tu le regardes comme on regarde un étranger." },
        { first: true, text: "La place du Gros-Marteau en est le milieu. Elle tire son nom d'un martinet hors d'âge planté au centre en guise de monument, un marteau de trois quintaux sur son arbre de chêne, que le premier Quincarnon fit battre il y a deux siècles et que le dernier a fait dorer. D'un côté, l'église Sainte-Barbe, trapue, sans clocher : sa tour attend une cloche. De l'autre, une longue façade à grilles, l'Économat. Au fond, l'enseigne d'une auberge, un soufflet de forge peint en jaune." },
        { first: true, text: "Et par-dessus les toits, à main droite, la halle de la Grande Fonderie, haute comme une cathédrale, qui fume. Tout ce qui marche sur la place a l'air d'aller vers elle ou d'en revenir." },
        { again: true, text: "La place du Gros-Marteau, son marteau doré, ses pavés de scories. L'Économat d'un côté, Sainte-Barbe de l'autre, le Soufflet d'Or au fond, et la fumée de la Grande Fonderie par-dessus." },
      ],
      choices: [
        { label: "Écouter les femmes à la fontaine", to: "A2c_fontaine", once: true },
        { label: "Entrer à l'Économat", to: "A2c_economat" },
        { label: "Aller voir la Grande Fonderie, du dehors", to: "A2c_halle", once: true },
        { label: "Écouter le crieur de la maison", to: "A2c_crieur", once: true },
        { label: "Pousser la porte de Sainte-Barbe", to: "A2c_eglise", once: true },
        { label: "Regarder peser le minerai", to: "A2c_pesee", once: true },
        { label: "Attendre la relève de six heures", to: "A2c_releve", once: true, if: { count: [{ seen: "A2c_fontaine" }, { seen: "A2c_halle" }, { seen: "A2c_crieur" }, { seen: "A2c_eglise" }, { seen: "A2c_pesee" }], min: 2 }, hide: { not: { count: [{ seen: "A2c_fontaine" }, { seen: "A2c_halle" }, { seen: "A2c_crieur" }, { seen: "A2c_eglise" }, { seen: "A2c_pesee" }], min: 2 } } },
        { label: "Descendre au Soufflet d'Or", to: "A2c_soufflet", big: true },
      ] },

    A2c_fontaine: { act: "II", title: "La fontaine rouge", place: "ferrieres",
      text: [
        "La fontaine donne une eau qui a passé sur le fer : elle sort claire, et rougit dans le seau. Les femmes de Ferrières y lavent quand même, faute d'une autre, et leur linge a cette teinte de chair qu'on voit sécher à toutes les fenêtres.",
        "Elles sont une dizaine autour du bassin, les bras rouges jusqu'au coude. Elles parlent bas, toutes à la fois, et se taisent toutes à la fois quand une casaque rousse traverse la place. Tu t'assieds sur la margelle, tu délaces un soulier, et tu deviens un meuble.",
        "« …trois jours. Elle a dit trois jours. »",
        "« Elle a dit : quand le bronze coule. Pas avant. Une fois qu'il coule, y a plus un homme au monde qui peut l'arrêter, ni lui, ni ses rousses, ni le bon Dieu. Faut qu'il aille au bout ou la cloche est perdue. »",
        "« Et les petits ? »",
        "« Les petits restent au fond. C'est encore là qu'ils risquent le moins. »",
        "Une vieille, qui tordait un drap, dit sans lever la tête : « La Grise a bien parlé. Mon homme aussi parlait bien. » Et elle tord le drap, longtemps, jusqu'à ce qu'il n'en sorte plus rien.",
      ],
      fx: { clue: "s_grise" },
      choices: [{ back: "A2c_place" }] },

    A2c_economat: { act: "II", title: "L'Économat", place: "ferrieres", shop: "economat",
      text: [
        { first: true, text: "L'Économat est le seul magasin de la vallée, et il a la sérénité des choses uniques. On y trouve le pain, le lard, la chandelle, le drap, les sabots, les pics, les cercueils, le tout rangé derrière des grilles, comme dans une ménagerie, et servi par des commis à manchettes qui notent chaque sortie dans un cahier." },
        { first: true, text: "Les prix sont peints sur des ardoises, en jetons. Un homme devant toi achète une miche et une livre de lard ; il n'a point de jetons ; le commis écrit. L'homme regarde la plume courir. Il emporte son pain avec les précautions de quelqu'un qui porte une chose qui ne lui appartient pas encore." },
        { again: true, text: "Les grilles, les ardoises, les commis à manchettes. La plume qui court." },
        "« Monsieur est du dehors ? Nous prenons l'écu. » Le commis a un sourire d'une grande politesse. « Au cours de la maison. »",
      ],
      choices: [{ back: "A2c_place" }] },

    A2c_halle: { act: "II", title: "La Grande Fonderie", place: "ferrieres",
      text: [
        "On ne t'en laisse voir que la porte, mais la porte suffit : deux vantaux de chêne bardés de fer, hauts de trente pieds, ouverts ce matin pour laisser entrer un fardier de cuivre attelé de douze bœufs. Deux casaques rousses la gardent, la pertuisane au pied.",
        "Par l'ouverture, tu vois une nuit rouge. Il y a là-dedans trois fours à réverbère, gros comme des maisons, qu'on chauffe depuis une semaine pour les sécher, et dont la gueule jette sur les murs une lueur qui bouge. Il y a des ponts de bois, des grues, des chaînes. Et au milieu du sol, là où la lueur s'arrête, un trou rond, large comme une aire à battre, dont on ne voit pas le fond.",
        "« La fosse, dit quelqu'un près de toi. Le moule est dedans, enterré jusqu'au col. Vingt mille livres de bronze, d'une seule coulée. On aura mis quatre mois à la faire, et il faudra six minutes pour la remplir. »",
        "C'est un rouleur de la fonderie, qui souffle un instant contre le mur, sa brouette à côté de lui. Il a les sourcils brûlés.",
        "« La maison l'appelle la Polycarpe, rapport au prénom de Monsieur. » Il crache rouge. « Nous autres, on l'appelle la Grosse Dette. C'est nous qui la payons : un jeton par tête et par semaine depuis la Chandeleur, retenu d'office. Elle sonnera à Aiguemorne, pour la Nuit des Clefs. Paraît qu'on l'entendra jusqu'ici. Ça nous fera une belle jambe. »",
      ],
      fx: { clue: "s_grosse_dette" },
      choices: [{ back: "A2c_place" }] },

    A2c_crieur: { act: "II", title: "Le crieur de la maison", place: "ferrieres",
      text: [
        "Le crieur de Ferrières porte la casaque rousse et bat son tambour avec le manque d'entrain d'un homme qui annonce rarement de bonnes nouvelles. Il s'arrête au pied du marteau doré, déroule un papier, et lit du nez.",
        "« De par Maître Polycarpe Quincarnon, Syndic des Maîtres du Fer, seigneur des mines et forges de cette vallée. *Primo* : la coulée de la grande cloche se fera dans trois jours, à l'heure que dira le maître saintier ; les ouvriers du jour y assisteront en rang, tête nue, et il sera distribué par feu un pot de vin et un jeton. *Secundo* : la veille au soir, Monsieur traitera au Manoir-Forge messieurs les Parrains de la cloche, et la ville illuminera. *Tertio* : d'ici là, les attroupements de plus de cinq personnes sont défendus hors des chantiers, sous peine de huit jours de retenue. *Quarto* : nul ne sort de la vallée sans billet. »",
        "Il roule son papier, en tire un autre, plus court.",
        "« *Item*. Cinquante écus d'Aiguemorne à qui livrera ou fera prendre trois malfaiteurs dits les Rossignols, assassins de Maître Balancier, Remonteur de la Tour. On les croit sur les routes du nord. »",
        "Un roulement. Il s'en va lire plus loin. Sur la place, on compte machinalement ses voisins, et les groupes de six se défont en deux groupes de trois.",
      ],
      choices: [{ back: "A2c_place" }] },

    A2c_eglise: { act: "II", title: "Sainte-Barbe", place: "ferrieres", ambiance: "temple",
      text: [
        "L'église des mineurs est basse, voûtée comme une galerie, et l'on y a froid en plein midi. Il y brûle une seule lampe, devant une sainte Barbe de bois noir qui tient sa tour dans une main et, dans l'autre, une lampe de fosse qu'un mineur lui a mise un jour et que personne n'a osé reprendre.",
        "Tes yeux s'habituent. Alors tu vois les murs.",
        "Ils sont couverts, du dallage à la naissance des voûtes, de petites plaques de fer clouées côte à côte, serrées comme les écailles d'un poisson. Chacune porte un numéro. Rien d'autre : ni nom, ni date. Tu en comptes cent sur un pan large comme une porte, et la nef a quarante pas de long.",
        "Il te faut un moment pour reconnaître les plaques que les vivants portent au cou.",
        "Sous la tribune, la muraille est d'un fer plus neuf, sur toute la hauteur, et les numéros s'y suivent : deux cent douze plaques d'un seul tenant, clouées la même semaine. Un bedeau qui passe avec son éteignoir suit ton regard.",
        "« Le coup de poussier de la Vieille-Gueule. Il y a dix-neuf ans, à la Sainte-Luce. » Il mouche un cierge. « La maison a payé les clous. »",
      ],
      fx: { clue: "s_plaques", ep: ["perso", 300] },
      choices: [{ back: "A2c_place" }] },

    A2c_pesee: { act: "II", title: "La pesée", place: "ferrieres",
      text: [
        "Au coin de la place, sous un auvent, une seconde bascule reçoit le minerai des petites exploitations, celles que des familles creusent à leur compte dans les ravins. Une femme et deux garçons viennent d'y verser le contenu de six hottes.",
        "Le peseur de la maison fait jouer son fléau, annonce quatre quintaux et demi. La femme dit cinq. Elle le dit sans colère, comme on dit l'heure. Le peseur montre le fléau. La femme regarde le fléau, puis le peseur, puis ses deux garçons, et tend la main.",
        { if: { any: [{ voie: "crocheteur" }, { voie: "alchimiste" }] }, text: "Toi, tu regardes le couteau de la balance. Tu as assez limé de pivots pour reconnaître celui-là : on l'a déporté d'une ligne vers le plateau des poids, et une ligne, sur un bras de cette longueur, fait le dixième de la charge. C'est de l'ouvrage propre. Il a fallu un bon ouvrier pour voler si juste.", else: "Tu ne saurais dire où est la tricherie. Mais tu as grandi chez des gens qui en vivent, et tu reconnais, à la figure du peseur, la paix d'un homme dont la balance travaille pour lui." },
        "On paie la femme en jetons. Elle les compte deux fois, les noue dans son mouchoir, et traverse la place vers l'Économat, où ils retourneront avant le soir.",
      ],
      fx: { clue: "s_bascule" },
      choices: [{ back: "A2c_place" }] },

    A2c_releve: { act: "II", title: "La relève de six heures", place: "ferrieres", ambiance: "nuit",
      fx: { until: 18 },
      text: [
        "À six heures, une corne sonne du côté de la montagne, rauque, interminable, et la place se vide de ses commis comme une plage à la marée.",
        "Alors la Gueule rend son monde. Ils débouchent par la rue de la Mine, sur toute la largeur, sans un mot, et tu comprends pourquoi on les nomme les gueules grises : le minerai est rouge, mais la roche qu'il faut abattre pour l'atteindre est un schiste couleur de cendre, et douze heures de fond leur en font un masque où il n'y a de vivant que le blanc des yeux. Les hommes vont devant, le pic sur l'épaule. Puis les femmes, qui poussent les berlines. Puis les enfants, qui sont les plus nombreux, et qui dorment en marchant.",
        "Ils passent devant le marteau doré. Aucun ne lève la tête.",
        "Au même moment, par l'autre bout de la place, monte l'équipe de nuit, lavée, pâle, la lampe éteinte au côté. Les deux colonnes se croisent. Des mains se touchent au passage, un père et un fils, une sœur et une sœur, sans que personne ralentisse : la corne compte les retards.",
        "Au milieu de ceux qui remontent, une femme marche seule, et l'on s'écarte d'un demi-pas pour qu'elle le reste. Elle est grande, sèche, les cheveux tout blancs sous la suie, quoiqu'elle n'ait pas quarante ans. Elle regarde la halle de la fonderie comme un charpentier regarde un arbre.",
        "« La Grise », dit une voix derrière toi. C'est tout ce qu'on en dit. Elle a déjà tourné le coin.",
      ],
      fx: { meet: "zenobie", ep: ["perso", 300] },
      choices: [{ back: "A2c_place" }] },

    // ------------------------------------------------------------ the Soufflet d'Or
    A2c_soufflet: { act: "II", title: "Le Soufflet d'Or", place: "soufflet", hub: true, backName: "la salle du Soufflet d'Or",
      text: [
        { first: true, text: "Le Soufflet d'Or est l'auberge des gens du dehors : les acheteurs de fer, les voituriers, les maîtres de forges qui viennent solliciter. On y a donc mis du plâtre sur le laitier, des rideaux aux fenêtres, et sur la cheminée une pendule qui marche, ce dont l'hôtesse vous avertit dès le seuil." },
        { first: true, text: "L'hôtesse est une femme considérable. Elle s'appelle Radegonde, elle remplit sa porte, et elle porte au cou, sur un velours, la même plaque de fer que les hercheuses, en plus petit, comme d'autres portent un médaillon. Elle vous toise. Trois paires de souliers rouges, trois sacs, point de malle." },
        { first: true, text: "« Les commis du président », constate-t-elle. « Il a pris le premier étage tout entier, pour ses caisses. Il a fait arrêter ma pendule, parce qu'elle avançait de quatre minutes et que cela lui donnait des palpitations. Il a renvoyé trois fois le potage. » Elle soupire, avec une sorte d'admiration. « Vous coucherez au second, sous le toit. On soupe à sept heures. »" },
        { again: true, text: "La salle du Soufflet d'Or, son plâtre, ses rideaux, sa pendule arrêtée. Radegonde règne derrière son comptoir. Du premier étage tombent, par moments, des éclats de voix." },
      ],
      choices: [
        { label: "Faire causer l'hôtesse", to: "A2c_radegonde", once: true },
        { label: "Monter chez Maître Crochemore", to: "A2c_croch_chambre", once: true },
        { label: "« Maître, parlez-nous du Juge. »", to: "A2c_croch_juge", once: true, if: { seen: "A2c_croch_chambre" }, hide: { not: { seen: "A2c_croch_chambre" } } },
        { label: "S'asseoir à la table d'hôte", to: "A2c_table", once: true },
        { label: "Monter un moment sous le toit, seul{e}", to: "A2c_reve", once: true },
        { back: "A2c_place" },
        { label: "Tenir conseil, la porte fermée", to: "A2c_conseil", big: true, if: { seen: "A2c_croch_chambre" }, why: "Il faut d'abord voir Maître Crochemore : c'est lui qui a les entrées." },
      ] },

    A2c_radegonde: { act: "II", title: "Radegonde", place: "soufflet",
      text: [
        "Radegonde cause comme elle sert : largement, et en surveillant la porte.",
        "« Monsieur ? Je l'ai connu avec des cheveux. Il venait ici manger des tripes, du vivant de Madame, parce que Madame n'en souffrait pas l'odeur au manoir. Un homme gai. Il l'est encore : il rit en comptant, c'est sa nature. Il vous doublerait votre loyer avec une tape sur le ventre. »",
        "Elle essuie un verre, le regarde au jour.",
        "« C'est depuis Madame qu'il a changé de façon. Pas de figure : de façon. Avant, il voulait gagner. Depuis, il veut que rien ne sorte. Il a mis des grilles à l'Économat, un mur au bout de la vallée, des billets aux portes. Il a fait descendre le Grand Livre sous la fonderie, dans un caveau, parce que le papier craint le feu et qu'en haut il y avait trop de fenêtres. Toute la vallée est dans ce livre, moi comprise. » Elle touche la plaque à son cou, du même geste que d'autres touchent du bois. « Mon père devait le toit. Je dois le toit et le plâtre. »",
        "« Et Mademoiselle ? »",
        "« Mademoiselle, on la marie. À un jeune monsieur d'Aiguemorne, Belorgey, qui est dans la maison depuis huit jours et qui dit merci aux domestiques. » Elle repose le verre. « Monsieur ne laisse rien sortir, je vous dis. Alors il fait entrer un gendre. »",
      ],
      fx: { clue: "s_caveau" },
      choices: [{ back: "A2c_soufflet" }] },

    A2c_croch_chambre: { act: "II", title: "Onze caisses", place: "soufflet",
      fx: { met: "crochemore" },
      text: [
        "On entre chez Maître Crochemore comme dans une montre ouverte. Il a fait pousser le lit contre le mur, tendre des draps sur le plancher, et sur ces draps, dans un ordre qui tient de la procession, reposent les entrailles de ses onze caisses : des roues de laiton larges comme des plats, un arbre d'acier, une chaîne à maillons plats, et, couché sur deux tréteaux, un marteau de fer poli, long comme un homme, dont la tête ressemble à une poire.",
        "Le président des Heures est en bras de chemise, une loupe vissée dans l'œil, et il frotte une dent d'engrenage avec la peau de son petit doigt.",
        "« Fermez cette porte. La poussière de ce pays est une abomination : de l'oxyde, du grès, du charbon, tout ce qu'il faut pour roder un pivot en six mois. J'ai dit à l'hôtesse d'arroser l'escalier. Elle m'a regardé comme si je lui demandais d'arroser un évêque. »",
        "Il ôte sa loupe. Elle lui laisse autour de l'œil un cercle rouge qui lui donne l'air perpétuellement indigné, et il l'est.",
        "« Vous voilà. Rouges. Je l'avais prévu. Écoutez-moi, car je ne répète que pour les clients. Ceci est le mouvement de la grande cloche : le marteau, la roue de compte, le déclic. Demain, je le pose à la fonderie, sur le beffroi d'essai. Il me faut quelqu'un pour porter et pour tenir l'échelle : celui-là entrera avec moi partout où j'entre, et j'entre jusque sous la halle. » Il lève un second doigt. « Ceci », il désigne sur la commode une boîte d'acajou, « est le présent de la guilde à Maître Quincarnon : une pendule de voyage, à sonnerie, un bijou. Quelqu'un la portera au manoir de ma part, avec un compliment. Je ne me dérange pas pour les Syndics. » Un troisième doigt reste en l'air, cherche. « Le troisième fera ce que vous faites, vous autres, quand vous ne portez rien. »",
      ],
      choices: [{ back: "A2c_soufflet" }] },

    A2c_croch_juge: { act: "II", title: "L'œuvre de l'aïeul", place: "soufflet",
      fx: { flag: "a2:croch_juge", conf: { crochemore: 10 } },
      text: [
        "Il pose sa peau de chamois. C'est, chez lui, l'équivalent d'une génuflexion.",
        "« Du Juge. Enfin une question. » Il va à la fenêtre, constate la fumée, revient. « Mon bisaïeul, Aubry Crochemore, a mis onze ans à le faire. Onze ans, enfermé là-haut avec sa fille, qui lui passait les limes. Il y a dans ce bronze quatre mille pièces mobiles. J'ai ses carnets : j'en comprends la moitié, et je suis le premier horloger de ce temps. L'autre moitié… » Il agite la main. « Des cames, des cylindres, des combinaisons. Une machine qui pèse des raisons comme une balance pèse des grains. On lui lit sept procès ; les mots entrent ; les roues tournent toute une nuit ; au matin il sort une Sentence, frappée dans le métal, et depuis cent cinq ans personne n'a pu la prendre en faute. »",
        "Sa voix a baissé. Il a, pour un instant, la figure d'un enfant devant une vitrine.",
        "« On dit que c'est impossible. Les académies de trois royaumes me l'ont écrit, avec des compliments. Je réponds : montez voir. Ils ne peuvent pas monter, bien sûr. Moi non plus. » Le cercle rouge de la loupe fonce d'un ton. « Moi, le sang d'Aubry ! Il faut trois clefs, et l'on donne les clefs à un marchand de clous, à un marchand de messes et à un marchand de chevaux. Je mourrai sans avoir vu marcher l'ouvrage de ma famille. À moins… »",
        "Il vous regarde. Il a parfaitement compris, depuis la Croix-de-Fer, quel genre de commis il s'est donné.",
        "« Je vous aide à entrer. Vous m'emmenez. Je veux être dans la Chambre quand il parlera. Je veux voir tourner les quatre mille pièces. Ensuite, on pourra me pendre : j'aurai de quoi m'occuper l'esprit jusqu'en haut de l'échelle. »",
      ],
      choices: [{ back: "A2c_soufflet" }] },

    A2c_table: { act: "II", title: "La table d'hôte", place: "soufflet", ambiance: "taverne",
      fx: { until: 19, food: 1 },
      text: [
        "On soupe à sept heures, tous ensemble, d'un potage qui a été renvoyé trois fois et qui s'en ressent. La table réunit ce que la coulée a fait venir : deux maîtres de forges de la plaine, qui parlent du prix du charbon ; un chanoine d'Aiguemorne, délégué par le chapitre pour bénir le bronze, et qui bénit en attendant le rôti ; un marchand de cuivre ; un peintre d'ex-voto.",
        "Le chanoine a vu la liste des Parrains. « Trente couverts. Tout ce qui pèse dans le fer d'ici à la mer. Monsieur Quincarnon fera passer la clef autour de la table, comme il fait à chaque banquet : chacun la touche, c'est l'usage, cela porte bonheur aux affaires. » Il rit. « Elle fait le tour et lui revient. Elle lui revient toujours. »",
        "Les maîtres de forges rient aussi, d'un rire de débiteurs.",
        "Par la porte de la salle, tu vois passer dans le vestibule une femme en mante de voyage, suivie d'un valet chargé de cartons. Radegonde lui fait la révérence des grandes occasions.",
      ],
      choices: [
        { label: "Demander qui est cette dame", to: "A2c_table_dame" },
        { label: "Regarder le valet plutôt que la dame", to: "A2c_table_dame",
          test: { dom: "nature", diff: 0, label: "Reconnaître une démarche", help: [{ if: { has: "monde:a1:douce_cause" }, v: 15 }, { if: { has: "a2:douce_route" }, v: 10 }] },
          win: { fx: { flag: "a2:pipeau_reconnu", clue: "g_dentelles", ep: ["perso", 500] }, to: "A2c_table_valet" }, lose: { to: "A2c_table_dame" } },
      ] },
    A2c_table_dame: { act: "II", title: "La marchande de dentelles", place: "soufflet", ambiance: "taverne",
      fx: { flag: "monde:a2:dentelliere" },
      text: [
        "« Madame de Sainte-Aldegonde, dit le chanoine, la bouche pleine. Dentelles et points de France. Elle fournit le trousseau de Mademoiselle Quincarnon : elle loge au manoir, c'est vous dire. Elle est venue prendre ici des cartons que le roulier avait déposés. » Il s'essuie. « Une personne très bien. Des mains de fée. »",
        "La dame a déjà repassé le seuil. Tu n'as vu d'elle qu'une mante grise, un voile, et une façon de traverser un vestibule dallé sans que ses talons y fassent le moindre bruit.",
      ],
      choices: [{ back: "A2c_soufflet" }] },
    A2c_table_valet: { act: "II", title: "Le valet aux cartons", place: "soufflet", ambiance: "taverne",
      fx: { flag: ["monde:a2:dentelliere", "monde:a2:douce_vue"] },
      text: [
        "Le valet porte six cartons empilés jusqu'au menton, et il les porte mal, comme un homme dont les mains ont l'habitude de choses plus lourdes et plus courtes. Au moment de passer la porte, il se retourne pour la retenir du talon. La lumière du vestibule lui tombe sur la figure.",
        "Un nez cassé, une oreille en chou-fleur, la livrée trop étroite aux épaules. Pipeau.",
        "« Madame de Sainte-Aldegonde, dit le chanoine, qui a suivi ton regard. Dentelles et points de France. Elle fournit le trousseau de Mademoiselle : elle loge au manoir. Une personne très bien. Des mains de fée. »",
        "Des mains de fée. Tu reprends du potage, pour avoir une contenance. Sans-Bruit est dans la place, elle y est depuis deux jours, et elle couche sous le même toit que la clef.",
      ],
      choices: [{ back: "A2c_soufflet" }] },

    // ------------------------------------------------------------ a moment alone (one scene per dream)
    A2c_reve: { act: "II", title: "Sous le toit", place: "soufflet", branch: [
      { if: { is: { reve: "atelier" } }, to: "A2c_reve_atelier" }, { if: { is: { reve: "plombs" } }, to: "A2c_reve_plombs" },
      { if: { is: { reve: "nom" } }, to: "A2c_reve_nom" }, { to: "A2c_reve_large" }] },
    A2c_reve_atelier: { act: "II", title: "L'enseigne du premier Quincarnon", place: "soufflet",
      text: [
        "De la lucarne, on voit la place, et sur la place le marteau doré. Radegonde t'a dit son histoire en te donnant la chandelle : le premier Quincarnon était un compagnon limeur d'Aiguemorne, monté ici avec une mule et un soufflet, qui avait ouvert une forge à lui, au bord du torrent. Une enseigne à son nom. Il avait trois ouvriers et mangeait avec eux.",
        "Tu regardes longtemps cette chose dorée, au milieu de la ville noire. Entre la forge au bord de l'eau et l'Économat à grilles, il a suffi de six générations de gens raisonnables, dont chacun n'a fait qu'agrandir un peu ce que le père laissait.",
        "Tu penses à tes deux pitons, rue des Ferronniers. Tu te promets une chose, à voix basse, pour qu'elle compte : trois ouvriers, et la même soupe.",
      ],
      fx: { ep: ["perso", 300] },
      choices: [{ back: "A2c_soufflet" }] },
    A2c_reve_plombs: { act: "II", title: "Une dette qui se transmet", place: "soufflet",
      text: [
        "Tu as vu l'homme, à l'Économat, emporter son pain en regardant courir la plume. Tu connais ce regard. Tu l'as vu à quelqu'un des tiens, le jour où le sergent des Plombs est venu avec son papier, et tu l'avais pris alors pour de la honte. C'était de l'arithmétique : un homme qui calcule ce qu'il vaut, et qui trouve moins que rien.",
        "À Aiguemorne, au moins, la dette s'arrête à la porte de la prison. Ici, elle se lègue. Radegonde doit le toit de son père. Les enfants du crassier trient pour payer le pic du grand-père.",
        "Trois cents écus. Tu as compté cent fois cette somme comme une rançon. Ce soir, sous ce toit, elle a l'air d'autre chose : un chiffre dans un livre, que quelqu'un a écrit, et que quelqu'un pourrait rayer.",
      ],
      fx: { ep: ["perso", 300] },
      choices: [{ back: "A2c_soufflet" }] },
    A2c_reve_nom: { act: "II", title: "Des numéros", place: "soufflet",
      text: [
        "Tu sors ta clef de baptême. Tu la tiens près de la chandelle, et tu regardes le numéro frappé dessus, que tu connais mieux que ton visage.",
        "Les chiffres ont le même œil que ceux des plaques de Ferrières : le sept barré, le quatre ouvert. C'est le même jeu de poinçons, ou son frère. Tu te le dis d'abord comme une curiosité de métier. Les clefs d'hospice se commandaient à la grosse, au moins-disant, et le moins-disant d'Aiguemorne a toujours été le fer de cette vallée.",
        "Puis tu penses aux enfants du crassier, à leurs figures de vieux, et aux deux cent douze plaques sous la tribune. Un coup de poussier laisse des orphelins. Il faut bien les mettre quelque part. Tu ignores l'année de ta naissance à deux ans près ; les sœurs de la Morne la comptaient depuis ton arrivée.",
        "Tu ranges la clef. C'est une idée de nuit, et la chandelle baisse.",
      ],
      fx: { ep: ["perso", 300], clue: "j_poincons" },
      choices: [{ back: "A2c_soufflet" }] },
    A2c_reve_large: { act: "II", title: "La route d'en haut", place: "soufflet",
      text: [
        "Tu déplies la carte du colporteur sur tes genoux. Ferrières y est, avec son petit marteau. Tu y poses le doigt : tu y es. C'est la première fois que la carte et le monde disent la même chose, et tu en éprouves un contentement de géomètre.",
        "Au nord de la vallée, le colporteur a tracé un pointillé qui franchit la montagne. Les muletiers l'appellent la route d'en haut : quatre jours de neige, puis un pays où le fer d'ici se vend le double, où personne n'a entendu le nom d'Aiguemorne, et où les rivières coulent vers une autre mer.",
        "*Nul ne sort de la vallée sans billet*, a lu le crieur. Tu souris. Le pointillé passe par un col où il n'y a ni porte, ni bascule, ni commis. Tu replies la carte selon ses plis. Il y a des gens qui ont besoin de savoir qu'une porte existe, même s'ils la laissent fermée.",
      ],
      fx: { ep: ["perso", 300] },
      choices: [{ back: "A2c_soufflet" }] },

    // ------------------------------------------------------------ the council
    A2c_conseil: { act: "II", title: "Trois besognes pour une vallée", place: "soufflet", ambiance: "nuit",
      fx: { until: 22 },
      text: [
        "Vous tenez conseil au second, sous le toit, la chandelle par terre pour qu'on ne voie rien de la place. La Douairière manque. On s'en aperçoit à ceci, que personne ne dessine sur la table, et que chacun attend qu'un autre commence.",
        "C'est Maître Crochemore qui commence, monté en robe de chambre, parce qu'il ne supporte pas un silence qu'il n'a pas réglé.",
        "« Résumons, puisque vous n'en êtes pas capables. La clef est dans cette vallée. La coulée est dans trois jours, le banquet la veille. Demain, vous avez la journée pour apprendre trois choses : où elle dort, qui la garde, et quand elle sort. Après-demain, il sera trop tard pour apprendre : il faudra savoir. »",
        "**La main.** La Grande Fonderie, avec Maître Crochemore : porter le mouvement, tenir l'échelle, et pendant qu'il pose son marteau, trouver ce caveau où dort le Grand Livre, sa porte, sa serrure, et un chemin pour y descendre sans passer devant les casaques rousses.",
        "**L'œil.** Le Crassier et la Gueule : les mineurs, cette femme aux cheveux blancs dont on parle à la fontaine, ce qu'ils préparent pour le jour de la cloche ; et tout ce qui rôde dans cette ville avec un marteau ou des gants.",
        "**La voix.** Le Manoir-Forge : y porter la pendule des Heures avec le compliment du président, s'y faire garder une heure ou un jour, approcher le Syndic, sa fille, son gendre, et savoir à quelle heure la clef quitte son cou.",
        "*Chaque poste revient à un seul d'entre vous, et l'on peut changer depuis Aiguemorne. Mettez-vous d'accord à voix haute ; le premier qui choisit est servi.*",
      ],
      choices: [
        { label: "La main : tu prends la fonderie", role: "a2", option: "main", to: "A2m_matin", big: true },
        { label: "L'œil : tu prends le Crassier", role: "a2", option: "oeil", to: "A2o_matin", big: true },
        { label: "La voix : tu prends le manoir", role: "a2", option: "voix", to: "A2v_matin", big: true },
      ] },
  },

  extras: {
    places: {
      soufflet: { ambiance: "taverne", region: "ferrieres", name: "Le Soufflet d'Or", map: "pays", x: 75, y: 23, arrive: "A2c_soufflet", desc: "L'auberge des gens du dehors, sur la place du Gros-Marteau : du plâtre sur le laitier, et une pendule qui marche." },
    },
    people: {
      zenobie: { name: "Zénobie", aka: ["la Grise", "Zénobie la Grise"], qui: "La Grise : une hercheuse aux cheveux blancs, que les mineurs de Ferrières écoutent.", f: true,
        aspect: { allure: "grande, sèche, droite sous la charge", visage: "cheveux blancs sous la suie, trente-huit ans", habits: "sarrau de toile, plaque de fer au cou", signe: "regarde les murs en charpentier", voix: "basse, sans hâte" },
        desc: "Elle a perdu ses cheveux noirs en une nuit, il y a dix-neuf ans. Elle a gardé le reste." },
    },
    shops: {
      economat: { sells: [{ item: "onguent", price: 20 }, { item: "eau_de_vie", price: 10 }, { item: "corde", price: 14 }, { item: "lanterne", price: 20 }, { item: "lampe_fosse", price: 16 }, { item: "gourdin", price: 10 }, { item: "cuir", price: 110 }, { item: "rapiere", price: 110 }], food: 5 },
    },
    items: {
      lampe_fosse: { name: "Lampe de fosse", kind: "outil", bonus: { nature: 5, discretion: 5 }, price: 16, desc: "Une lampe de mineur, à tamis de laiton : elle éclaire peu, et sa flamme s'allonge quand l'air devient mauvais." },
    },
    clues: {
      s_avance: { rev: "S", text: "À la porte de Ferrières, la maison avance cinq jetons à qui n'a rien, contre une signature. « Après la coulée, on sort quand on est quitte. »" },
      s_grise: { rev: "S", text: "À la fontaine de Ferrières : « Elle a dit : quand le bronze coule. Une fois qu'il coule, plus un homme au monde ne peut l'arrêter. »" },
      s_grosse_dette: { rev: "S", text: "La grande cloche, vingt mille livres, payée par une retenue d'un jeton par tête et par semaine. Elle doit sonner à Aiguemorne pour la Nuit des Clefs." },
      s_plaques: { rev: "S", text: "À Sainte-Barbe, les murs sont couverts des plaques numérotées des morts de la mine. Deux cent douze d'un seul tenant : le coup de poussier de la Vieille-Gueule, il y a dix-neuf ans." },
      s_bascule: { rev: "S", text: "La bascule de la maison pèse un dixième en dessous. On paie le minerai en jetons, et les jetons retournent à l'Économat avant le soir." },
      s_caveau: { rev: "S", text: "Radegonde : depuis la mort de sa femme, le Syndic « veut que rien ne sorte ». Il a fait descendre le Grand Livre des dettes dans un caveau, sous la fonderie." },
      g_dentelles: { rev: "G", text: "« Madame de Sainte-Aldegonde », marchande de dentelles, loge au Manoir-Forge pour le trousseau de la fiancée. Son valet a le nez cassé de Pipeau." },
      j_poincons: { rev: "J", text: "Les clefs de baptême de l'hospice de la Morne et les plaques des mineurs de Ferrières sont frappées du même jeu de poinçons." },
    },
  },
};
