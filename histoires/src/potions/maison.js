// The house (the shop, the back room, the garden, the room under the roof), the woods around it (the edge, the pond,
// the combe of ferns, the hamlet, and later the Creux), the morning, Ortie's evenings and Ortie's mischief. These
// passages carry no act: the act in progress stays the one the story is in.
var WITH = "ortie";
var HOME = {
  boutique: { label: "Passer dans la boutique", to: "H_boutique" },
  atelier: { label: "Passer à l'arrière-boutique, au chaudron", to: "H_atelier" },
  jardin: { label: "Passer au jardin", to: "H_jardin" },
  chambre: { label: "Monter à la chambre", to: "H_chambre" },
};
function home(here) { return Object.keys(HOME).filter(function (k) { return k !== here; }).map(function (k) { return { label: HOME[k].label, to: HOME[k].to }; }); }
var WOODS = {
  lisiere: { label: "Partir à la lisière du bois", to: "H_lisiere" },
  etang: { label: "Partir à l'étang des Saules", to: "H_etang" },
  combe: { label: "Partir à la combe aux Fougères", to: "H_combe" },
  hameau: { label: "Descendre aux Ronceraies", to: "H_hameau" },
};
function woods() { return Object.keys(WOODS).map(function (k) { return { label: WOODS[k].label, takes: 1, to: WOODS[k].to }; }); }
var HOMEWARD = { label: "Prendre le sentier de la boutique", takes: 1, to: "H_boutique" };
var SLEEP = { label: "Te coucher", when: "night", takes: "morning", to: "N_matin" };

module.exports = { SLEEP: SLEEP, passages: {
  // ------------------------------------------------------------------ la boutique
  H_boutique: {
    title: "La boutique", place: "boutique", hub: true, comptoir: true, backName: "la boutique",
    text: [
      { first: true, text: "La boutique tient dans une seule pièce basse, aux poutres noires, que Mémé appelait « le devant ». Un comptoir de chêne la coupe en deux, usé au milieu par cinquante ans de coudes et de monnaie. Derrière, jusqu'au plafond, des étagères de flacons, de pots, de sachets et de bocaux, chacun avec son étiquette de la main de Mémé ; la moitié sont vides. Une clochette de cuivre pend au-dessus de la porte. Par la fenêtre aux petits carreaux, on voit le chemin qui s'enfonce entre les houx." },
      { again: true, when: "day", text: "La boutique sent la cire, la lavande et le bois chaud. Le soleil passe en biais par les petits carreaux et pose sur le comptoir des losanges de lumière où dorment les mouches." },
      { again: true, when: "night", text: "La nuit, la boutique se resserre autour de la lampe. Les flacons des étagères prennent des reflets d'yeux, et le bois de la maison craque comme une vieille personne qui cherche sa position pour dormir ; au-dehors, les houx frottent la vitre." },
      { after: "A_enseigne", text: "Au-dessus de la porte, côté chemin, ton enseigne neuve : « {nom:boutique} »." },
      { with: WITH, when: "day", before: "B_nuit", text: "Ortie est assise sur le comptoir, ce qui est défendu, et balance les jambes, ce qui est défendu aussi." },
      { with: WITH, when: "day", after: "C_aube", text: "Ortie range les flacons par couleur, en chantonnant, et tu la laisses faire." },
      { after: "A_tiennot", before: "C_aube", if: { stock: "grisaille", min: 4 }, text: "Sur le chemin, devant la porte, les feuilles des houx ont pâli. Elles ont la couleur des vieilles pièces." },
    ],
    choices: [
      { label: "Relire la lettre de Mémé", after: "A_lettre", once: true, to: "K_relire_lettre" },
      { label: "Écouter Ortie : Bistre lui a dit quelque chose", with: WITH, after: "B_forge", hide: { seen: "B_page_indice" }, to: "B_page_indice" },
      { label: "Écouter Ortie : elle a quelque chose à te montrer", with: WITH, after: "C_aube", if: { has: "ortie:poche" }, hide: { any: [{ seen: "C_poche" }, { not: { has: "ortie:poche" } }] }, to: "C_poche" },
      { label: "Compter la caisse", takes: 1, if: { gold: { min: 1 } }, to: "K_caisse" },
      { label: "Monter te coucher", when: "night", to: "H_chambre" },
    ].concat(home("boutique"), woods()),
  },
  K_caisse: {
    title: "La caisse", place: "boutique", back: true,
    text: [
      "Tu vides la boîte en fer-blanc sur le comptoir et tu fais des piles de sous, par dix, comme Mémé, en mouillant le pouce. Compter de l'argent est une occupation qui calme les nerfs mieux que la tisane de lavande, à condition d'en avoir.",
      { if: { gold: { min: 100 } }, text: "Il y a de quoi payer la patente, et un peu plus. Tu recomptes quand même, pour le plaisir." },
      { if: { gold: { min: 40, max: 99 } }, after: "A_corvin", text: "Il y a de quoi voir venir. Pas de quoi payer la patente, pas encore." },
      { if: { gold: { max: 39 } }, after: "A_corvin", text: "Il y a de quoi acheter du miel. La patente, elle, te regarde du fond de la boîte avec ses cinq livres." },
      { with: WITH, text: "Ortie compte avec toi, à voix haute, et se trompe exprès dès la troisième pile, pour voir si tu suis. Tu suis." },
    ],
  },
  K_relire_lettre: {
    title: "La lettre", place: "boutique", back: true,
    text: [
      "Tu relis la lettre de Mémé debout derrière le comptoir. Son écriture penche comme quelqu'un qui marche contre le vent. Au bas de la feuille, le H de sa signature a fait un pâté, comme si elle avait hésité, la plume posée, avant de finir.",
      "Une vieille amie. Elle n'en a jamais eu beaucoup, de ton souvenir : le vieux Fauvel, la Berthe des Ronceraies, et la forêt.",
    ],
  },

  // ------------------------------------------------------------------ l'arrière-boutique
  H_atelier: {
    title: "L'arrière-boutique", place: "atelier", hub: true, atelier: true, backName: "l'arrière-boutique",
    text: [
      { first: true, text: "L'arrière-boutique est le royaume du chaudron. Il est noir, ventru, posé sur trois pieds dans la cheminée, et assez grand pour qu'Ortie s'y soit cachée l'hiver dernier, un après-midi entier. Au plafond pendent des bottes d'herbes qui sèchent, la tête en bas, comme des chauves-souris parfumées. Sur la grande table : les mortiers, les pilons, la balance de cuivre, les cuillères de bois rangées par taille, et le grimoire de Mémé, ouvert sur son lutrin." },
      { again: true, text: "Le chaudron t'attend dans la cheminée, la panse noire, le feu couvert sous la cendre. Les herbes du plafond remuent un peu quand tu passes." },
      { with: WITH, before: "B_nuit", text: "Ortie a grimpé sur le tabouret pour voir dans le chaudron. Elle ne touche à rien. Elle le dit trois fois." },
      { if: { has: "recette:eveil" }, text: "La page arrachée est revenue à sa place dans le grimoire, tenue par une épingle." },
    ],
    choices: [
      { label: "Lire le grimoire de Mémé", once: true, to: "K_grimoire" },
      { label: "Laisser Ortie t'aider au chaudron", with: WITH, after: "A_soir", hide: { seen: "K_invention" }, when: "day", takes: 1, to: "K_invention" },
      { label: "Chercher dans la reliure du grimoire", after: "B_page_indice", hide: { has: "recette:brume" }, takes: 1, to: "K_reliure" },
    ].concat(home("atelier")),
  },
  K_grimoire: {
    title: "Le grimoire", place: "atelier", back: true,
    fx: { flag: "recette:fievre" },
    text: [
      "Le grimoire de Mémé pèse autant qu'un chat. Tu le connais par cœur, ou tu le croyais : les trois recettes de la première page, que tu prépares depuis tes dix ans, puis des pages entières de notes sur les plantes du bois, les lunes, les champignons qu'il ne faut pas toucher, avec des dessins à la plume d'une précision maniaque.",
      "Au milieu, une page arrachée. Il en reste un bord déchiré, avec trois mots : « …l'éveil, quand le gris… »",
      "Tu as déjà vu cette déchirure cent fois sans y penser. Ce matin, elle te gêne.",
      "Dans la marge de la page suivante, Mémé a griffonné au crayon une recette que tu ne connaissais pas, avec une flèche et le mot « essayé ! » souligné deux fois : de l'écorce de saule et de la menthe, contre la fièvre.",
      "(Tu sais maintenant préparer l'élixir d'écorce de saule : de l'écorce de saule et de la menthe.)",
    ],
  },
  K_invention: {
    title: "L'invention d'Ortie", place: "atelier", back: true,
    fx: { flag: "recette:beaute", conf: { ortie: 10 }, ep: ["seance", 200] },
    text: [
      "Tu donnes à Ortie la cuillère de bois, la plus petite, et la permission de remuer. Elle la prend comme on prend une épée. Pendant une heure, elle remue, verse, pile, renifle, renverse, essuie avec sa manche, et pose des questions sur tout : pourquoi le miel, pourquoi pas le sucre, pourquoi tourner à gauche, est-ce que le chaudron a un nom.",
      "Puis elle profite de ce que tu cherches la cire pour jeter dans l'eau chaude une poignée d'églantines qu'elle avait dans sa poche depuis la veille, et un nénuphar volé à l'étang.",
      "L'eau devient rose pâle. Elle sent la haie au mois de juin. Tu en mets une goutte sur le dos de ta main : la peau devient douce comme une joue de bébé, et l'égratignure de ce matin a disparu.",
      "« C'est ma potion, dit Ortie, très calme. Elle s'appelle l'eau d'Ortie. » Vous transigez sur « eau d'églantine ». Tu l'écris dans le grimoire, de ta main, sous les recettes de Mémé. Ortie exige qu'on ajoute « inventée par Ortie », et tu l'ajoutes.",
      "(Tu sais maintenant préparer l'eau d'églantine : des églantines et un nénuphar.)",
    ],
  },
  K_reliure: {
    title: "La reliure", place: "atelier", back: true,
    fx: { flag: "recette:brume", item: "page_brume", ep: ["seance", 200] },
    text: [
      "Une page arrachée, une page cachée : Mémé avait l'habitude de ranger les choses dans les choses. Tu passes la lame d'un couteau entre le cuir et le carton de la reliure. Il y a là un papier plié, mince comme une pelure d'oignon.",
      "C'est la recette de la potion de brume, de la main de Mémé. Elle te l'avait promise pour tes dix-huit ans.",
      "(Tu sais maintenant préparer la potion de brume : de la brume de l'étang, prise à l'aube, et de l'écorce de saule.)",
    ],
  },

  // ------------------------------------------------------------------ le jardin
  H_jardin: {
    title: "Le jardin de Mémé", place: "jardin", hub: true, backName: "le jardin",
    gather: [
      { item: "bourrache", n: 2 },
      { item: "plantain", n: 2 },
      { item: "lavande", n: 2 },
      { item: "menthe", n: 1, label: "Menthe, au bord du puits" },
      { item: "orties", n: 2, verb: "Couper", label: "Orties, avec les gants" },
    ],
    text: [
      { first: true, text: "Derrière la maison, le jardin de Mémé descend en carrés jusqu'au puits : la bourrache, le plantain, la lavande, la menthe, et dans le coin du fond, contre le mur, un grand carré d'orties que personne n'a jamais eu le droit d'arracher. Une haie de buis taillée au carré tient le bois à distance, et le bois, poliment, attend derrière." },
      { again: true, when: "day", text: "Les abeilles de la mère Gaubert viennent jusqu'ici butiner la bourrache, de très loin, comme on fait un détour pour une bonne auberge." },
      { when: "night", text: "La nuit, le jardin n'a plus de couleurs. Le puits fait un trou plus noir que le reste, et la haie de buis ressemble à un mur où l'on aurait oublié de percer une porte." },
      { with: WITH, first: true, text: "Ortie traverse le carré d'orties au pas de course, en sautant, par principe. Elle y laisse des lambeaux de bas et pas une larme." },
      { if: { stock: "grisaille", min: 5 }, text: "Même ici, au bord de la haie, quelques feuilles de menthe ont grisé. Le reste du jardin tient bon, comme s'il savait à qui il appartient." },
    ],
    choices: home("jardin"),
  },

  // ------------------------------------------------------------------ la chambre
  H_chambre: {
    title: "La chambre sous le toit", place: "chambre", hub: true, veillee: true, backName: "la chambre",
    text: [
      { first: true, text: "La chambre est sous le toit, si basse qu'il faut baisser la tête près des murs. Deux lits, le tien près de la lucarne ronde, celui d'Ortie près du conduit de la cheminée, parce qu'elle a toujours froid aux pieds. Entre les deux, une malle, un tapis tressé, et la collection d'Ortie : des cailloux, des plumes, des coquilles d'escargot, un os de quelque chose, rangés par ordre d'importance." },
      { again: true, when: "day", text: "La chambre sent le linge et la poussière chaude. La lucarne découpe un rond de ciel." },
      { when: "night", text: "La nuit, par la lucarne, on voit les étoiles au-dessus du bois, et le bois lui-même, une seule masse d'ombre qui respire. Quelque part, une chouette pose une question et n'attend pas de réponse." },
      { with: WITH, when: "night", before: "B_nuit", text: "Ortie est sous ses couvertures, et ses yeux brillent au-dessus du drap. Elle ne dort pas. Elle attend, c'est évident, qu'on lui parle." },
    ],
    choices: [
      { label: "Faire boire la potion d'éveil à Lison", after: "B_lison", if: { item: "p_eveil" }, hide: { any: [{ has: "lison:reveillee" }, { has: "lison:emmenee" }, { not: { seen: "B_lison" } }] }, fx: { drop: "p_eveil" }, to: "B_lison_reveil" },
      { label: "Pleurer enfin, sous la lucarne, pendant qu'Ortie dort", after: "C_aube", hide: { any: [{ item: "larme" }, { has: "rosee:faite" }, { seen: "K_larme_toi" }] }, when: "night", to: "K_larme_toi" },
      SLEEP].concat(home("chambre")),
  },
  N_matin: {
    title: "Le matin", place: "chambre", reveil: true,
    text: [
      "Le jour entre par la lucarne. En bas, Bistre réclame son lait d'une voix de chantre.",
      { with: WITH, before: "B_nuit", text: "Ortie est déjà debout, habillée à l'envers, et te raconte son rêve avant que tu aies ouvert les deux yeux. Il y avait un crapaud géant, une tarte, et toi, mais tu étais méchante." },
      { with: WITH, after: "C_aube", text: "Ortie dort encore, roulée en boule, une main ouverte sur l'oreiller. Tu la regardes un moment avant de descendre." },
      { after: "A_corvin", if: { not: { quest: "Q_patente" } }, before: "C_patente", text: "Sur la malle, le décret de la patente, roulé, avec son sceau rouge. Tu comptes les jours sur tes doigts. C'est une mauvaise habitude, et elle ne change pas le nombre." },
      { if: { stock: "grisaille", min: 6 }, text: "Par la lucarne, le bois a la couleur d'un vieux drap. Les oiseaux chantent moins fort, ou ils sont moins nombreux." },
    ],
    choices: [
      { label: "Descendre ouvrir la boutique", to: "H_boutique" },
      { label: "Descendre au jardin", to: "H_jardin" },
      { label: "Descendre à l'arrière-boutique", to: "H_atelier" },
    ],
  },

  // ------------------------------------------------------------------ la lisière
  H_lisiere: {
    title: "La lisière", place: "lisiere", hub: true, backName: "la lisière",
    gather: [
      { item: "millepertuis", n: 2, when: "day", if: { stock: "grisaille", max: 7 } },
      { item: "eglantine", n: 2, label: "Églantines, dans la haie", if: { stock: "grisaille", max: 6 } },
    ],
    text: [
      { first: true, text: "À la lisière, le bois s'ouvre sur un grand pré qui descend vers la vallée. Les haies d'églantiers le bordent de rose et d'épines, et le millepertuis y fait des taches jaunes dans l'herbe haute. Le vieux chemin des charrettes longe le pré, puis entre dans le bois et monte vers le nord, vers le cœur des collines, où plus personne ne va." },
      { again: true, when: "day", text: "Le pré bourdonne. Le vent couche l'herbe par vagues, et les églantiers se balancent au bord du chemin." },
      { when: "night", text: "La nuit, le pré est une mer d'herbe grise sous la lune, et le vieux chemin entre dans le bois comme dans une bouche. Tu entends au loin, très loin, un bruit de roues." },
      { with: WITH, when: "day", text: "Ortie court après une sauterelle, la perd, en trouve une autre, et ramène les deux, ou les mêmes." },
      { if: { stock: "grisaille", min: 4 }, text: "Les églantiers du côté du bois ont des feuilles grises, sèches comme du papier brûlé, et leurs roses ont la couleur de la cendre." },
    ],
    choices: [
      { label: "Examiner le vieux chemin des charrettes", after: "B_cahots", hide: { has: "ornieres:suivies" }, when: "day", to: "B_ornieres" },
      { label: "Pousser jusqu'aux Ronceraies", takes: 1, to: "H_hameau" },
      HOMEWARD,
    ],
  },

  // ------------------------------------------------------------------ l'étang
  H_etang: {
    title: "L'étang des Saules", place: "etang", hub: true, backName: "l'étang",
    gather: [
      { item: "brume", n: 1, verb: "Prendre", label: "Brume en bocal, tant qu'elle couvre l'eau", if: { hour: { min: 5, max: 9 } }, takes: 1 },
      { item: "saule", n: 2, verb: "Prélever", label: "Écorce de saule" },
      { item: "nenuphar", n: 1, if: { stock: "grisaille", max: 5 }, test: { dom: "nature", diff: 30, label: "Nature" }, fail: "Le nénuphar tient au fond par une tige longue comme un bras. Tu tires, tu glisses, tu as de l'eau jusqu'aux genoux, et il reste là, blanc et satisfait." },
      { item: "fleur_lune", n: 1, when: "night", label: "Fleur de lune, sur l'eau", test: { dom: "nature", diff: 20, label: "Nature" }, fail: "Les fleurs de lune s'ouvrent au milieu de l'eau noire, hors d'atteinte. Ta branche n'en ramène qu'une feuille de nénuphar et un frisson." },
    ],
    text: [
      { first: true, text: "L'étang des Saules dort au fond d'une cuvette, sous des saules si vieux qu'ils se penchent sur l'eau comme pour y chercher quelque chose qu'ils auraient perdu. L'eau est noire, immobile, profonde d'on ne sait combien ; on y voit le ciel mieux que dans le ciel. Des nénuphars blancs flottent au milieu. Personne ne pêche ici. Les gens des Ronceraies disent que l'étang n'a pas de fond, et ceux qui le disent n'ont jamais essayé d'en trouver un." },
      { again: true, when: "day", text: "Les saules trempent leurs cheveux dans l'eau noire. Une libellule passe, et repasse, et tout le reste attend." },
      { if: { hour: { min: 5, max: 9 } }, text: "À cette heure, une brume blanche couvre l'étang à hauteur de genou. Elle bouge lentement, à contre-vent, avec une obstination qui ne ressemble pas à celle du vent." },
      { when: "night", text: "La nuit, l'étang devient un trou dans le monde, d'un noir si parfait qu'on hésite à croire qu'il y ait de l'eau dedans ; mais au milieu, sur ce noir, des fleurs blanches s'ouvrent une à une et luisent faiblement, comme des lampes qu'on aurait posées là pour des gens qui ne viennent pas." },
      { with: WITH, when: "day", text: "Ortie lance des cailloux dans l'eau. Ils font un bruit mat, sans écho, et ne remontent pas de ronds. Elle arrête." },
      { if: { stock: "grisaille", min: 5 }, text: "Sur la rive nord, les saules ont grisé du pied à la cime. Leurs feuilles tombent sur l'eau sans faire de rides." },
    ],
    choices: [
      { label: "Chercher Monseigneur dans les joncs", after: "B_dispute", hide: { has: "monseigneur:trouve" }, with: WITH, to: "K_monseigneur_joncs" },
      { label: "Prendre le sentier de la combe", takes: 1, to: "H_combe" },
      HOMEWARD,
    ],
  },

  // ------------------------------------------------------------------ la combe
  H_combe: {
    title: "La combe aux Fougères", place: "combe", hub: true, backName: "la combe",
    gather: [
      { item: "langue_cerf", n: 1, every: 2, label: "Langue-de-cerf, au fond de la combe", takes: 2, if: { stock: "grisaille", max: 6 }, test: { dom: "nature", diff: 25, label: "Nature" }, fail: "Tu descends au fond de la combe, entre les pierres moussues, et tu cherches deux heures. Il y a de la langue-de-cerf, mais trop jeune, et tu laisses vivre les jeunes." },
    ],
    text: [
      { first: true, text: "La combe aux Fougères est un ravin étroit où le jour n'entre qu'à midi, et encore, de biais. Les fougères y montent à hauteur d'homme, si serrées qu'on avance dedans comme dans de l'eau. Les pierres sont couvertes d'une mousse épaisse où le pied s'enfonce. Il y fait frais en plein août, et l'on y entend couler un ruisseau qu'on ne voit jamais." },
      { first: true, text: "Au milieu de la combe se dresse le chêne creux, mort depuis cent ans et debout par entêtement, avec un trou dans le tronc où un enfant tiendrait accroupi." },
      { again: true, text: "La combe est verte et mouillée. Les fougères se referment derrière toi, et le chêne creux te regarde passer de son œil vide." },
      { when: "night", text: "La nuit, la combe est une fosse d'ombre où les fougères remuent sans vent. Le ruisseau invisible parle plus fort, et, à force de l'écouter, on croit y distinguer des mots ; l'esprit, dans le noir, aime donner une voix à ce qui n'en a pas." },
      { if: { stock: "grisaille", min: 3 }, text: "Au nord de la combe, du côté du cœur du bois, les fougères ont grisé. La limite est nette, comme tracée à la règle." },
      { after: "B_nuit", text: "Au fond de la combe, entre deux rochers, le sentier monte vers le Creux. Tu sais désormais où il mène." },
    ],
    choices: [
      { label: "Fouiller le chêne creux", after: "B_page_indice", hide: { has: "recette:eveil" }, takes: 1, to: "B_chene" },
      { label: "Monter au Creux", after: "B_nuit", takes: 1, to: "H_creux" },
      { label: "Prendre le sentier de l'étang", takes: 1, to: "H_etang" },
      HOMEWARD,
    ],
  },

  // ------------------------------------------------------------------ le Creux (acte III)
  H_creux: {
    title: "Le Creux", place: "creux", hub: true, backName: "le Creux",
    gather: [
      { item: "rosee", n: 3, verb: "Recueillir", label: "Rosée d'argent, sur les feuilles du Vieux Chêne", if: { hour: { min: 5, max: 8 } }, takes: 1 },
      { item: "fleur_lune", n: 1, when: "night", label: "Fleur de lune, au bord de la Source" },
    ],
    text: [
      { first: true, text: "Le Creux est une combe ronde comme une coupe, au cœur du bois. Au fond, le Vieux Chêne, si large que dix hommes ne l'entoureraient pas, plonge ses racines dans une source qui sourd d'entre les pierres. L'eau est claire ; au fond, on voit briller quelque chose comme une poussière d'argent." },
      { again: true, text: "Le Vieux Chêne remue ses branches au-dessus de la Source. L'air sent la mousse, la pluie, et autre chose, de très ancien." },
      { if: { hour: { min: 5, max: 8 } }, text: "À l'aube, la rosée d'argent perle sur les feuilles du Vieux Chêne, lourde, brillante, et tombe goutte à goutte dans la Source avec un bruit de clochette." },
      { after: "C_aube", text: "Au pied du chêne, Mémé est assise entre deux racines. Elle a l'air d'en être une troisième." },
    ],
    choices: [
      { label: "Parler à Mémé", after: "C_aube", to: "K_meme" },
      { label: "Descendre vers la combe", takes: 1, to: "H_combe" },
    ],
  },
  K_meme: {
    title: "Mémé", place: "creux", back: true,
    text: [
      { first: true, text: "Mémé t'attend, assise entre les racines. Sa peau a la couleur et le grain de l'écorce, ses cheveux sont de mousse, et ses yeux, eux, n'ont pas changé : gris, vifs, et moqueurs. Quand elle parle, sa voix fait un bruit de feuilles. « Alors, ma grande. Tu tiens la boutique ? »" },
      { again: true, text: "Mémé lève la tête à ton approche. Un écureuil descend de son épaule, sans se presser." },
      { if: { not: { has: "rosee:faite" } }, text: "« La Grande Rosée, dit-elle. Une potion d'éveil, une fleur de lune, trois gouttes de ma Source, et une larme donnée de bon cœur. Une seule larme. Elle ne vaut rien si on la prend de force, et elle ne vaut rien non plus si on la donne pour faire plaisir. Il faut qu'elle tombe toute seule. »" },
      { if: { has: "rosee:faite" }, text: "« Tu l'as faite, dit Mémé, et elle ferme les yeux pour respirer l'odeur de ta besace. Je la sens d'ici. Garde-la pour la nuit de la pleine lune. »" },
      { if: { not: { has: "malbec:arrete" } }, text: "« Le sénéchal reviendra, ajoute-t-elle. Il revient toujours. Ma Source ne tiendra pas une nuit de plus, ou à peine. »" },
      { with: WITH, text: "Ortie s'est assise contre Mémé, la joue sur l'écorce de son bras. Elle ne parle pas. Pour Ortie, c'est un exploit." },
    ],
  },

  // ------------------------------------------------------------------ les Ronceraies
  H_hameau: {
    title: "Les Ronceraies", place: "hameau", hub: true, backName: "les Ronceraies",
    shop: "ruches",
    text: [
      { first: true, text: "Les Ronceraies tiennent dans un creux de la vallée, autour d'une place carrée où pousse un tilleul : vingt maisons de pierre blonde, un moulin qui fait tourner sa roue dans le ruisseau, une forge qui tinte du matin au soir, une église au clocher pointu, et, au bout du chemin, les ruches de la mère Gaubert, rangées comme des maisons plus petites. On y connaît Mémé Hulotte depuis cinquante ans, et on y appelle sa boutique « chez la sorcière », avec la même voix que pour dire « chez le boulanger »." },
      { again: true, when: "day", text: "La place des Ronceraies : le tilleul, le moulin, le marteau de la forge, et trois vieilles sur un banc qui savent déjà ce que tu viens acheter." },
      { when: "night", text: "La nuit, le hameau dort volets clos. Une seule lanterne brûle au porche de l'église, et le moulin, arrêté, laisse couler l'eau dans un murmure de confidence." },
      { before: "A_tiennot", when: "day", text: "Devant la forge, Tiennot, le fils du forgeron, attise le feu au soufflet en chantant faux." },
      { after: "A_tiennot", text: "La forge est silencieuse. Le soufflet pend, immobile, au-dessus des braises éteintes." },
      { if: { stock: "grisaille", min: 5 }, text: "Sur la place, les femmes parlent bas. Il y a des enfants endormis dans trois maisons, et l'on a fermé les volets de ces maisons-là." },
      { if: { day: { min: 2 } }, when: "day", text: "Le marchand de miel de la mère Gaubert, c'est la mère Gaubert elle-même : elle vend miel, cire et sucres d'orge sur une planche posée sur deux ruches vides." },
    ],
    choices: [
      { label: "Aller voir la charrette verte du colporteur", if: { any: [{ day: { min: 2, max: 2 } }, { day: { min: 4, max: 4 } }, { day: { min: 6, max: 6 } }, { day: { min: 8, max: 8 } }, { day: { min: 10, max: 10 } }, { day: { min: 11, max: 11 } }] }, when: "day", to: "K_gaspard" },
      { label: "Passer à la forge, voir Tiennot", after: "B_forge", to: "K_forge" },
      { label: "Parler à la vieille Berthe, sur son banc", when: "day", hide: { seen: "K_berthe_banc" }, to: "K_berthe_banc" },
      { label: "Pousser jusqu'à la lisière", takes: 1, to: "H_lisiere" },
      HOMEWARD,
    ],
  },
  K_gaspard: {
    title: "La charrette verte", place: "hameau", shop: "gaspard",
    text: [
      { first: true, text: "La charrette du colporteur est peinte en vert pomme, avec des roues jaunes, et elle tient debout par miracle sous un chargement de casseroles, de rubans, de pots, de sacs, de cages vides et de choses qu'on n'ose pas nommer. Le colporteur lui-même est un homme rond sous un chapeau de paille cabossé, la moustache en guidon et le rire facile. « Gaspard Trémolat, pour vous servir, et pour servir tout le comté ! La petite de Mémé Hulotte ? J'ai de l'écorce, j'ai des fleurs, j'ai même de la langue-de-cerf, et à des prix qui me ruinent. »" },
      { first: true, text: "Assise sur le timon, une fillette de dix ans aux tresses noires tient un registre sur ses genoux. « Lison, ma fille, dit Gaspard. Elle tient mes comptes. Moi, je les embrouille. »" },
      { again: true, before: "B_lison", text: "Gaspard soulève son chapeau. « La sorcière de Vergeronde ! Lison, sors le bon miel. » Lison sort le miel ordinaire et te fait un clin d'œil." },
      { after: "B_lison", if: { not: { has: "lison:reveillee" } }, text: "Gaspard est là, mais il ne crie plus ses prix. Lison n'est pas sur le timon. Il te vend ce que tu veux sans te regarder." },
      { after: "B_lison", if: { has: "lison:reveillee" }, text: "Lison est sur le timon, son registre sur les genoux, un peu pâle. Gaspard te salue comme on salue une reine, et il te fait des prix que sa fille désapprouve." },
      { first: true, after: "A_tiennot", text: "En descendant de la charrette pour chercher un sac, Gaspard pose le pied près de toi. Ses bottes sont couvertes d'une boue fine qui brille au soleil comme de la poudre d'argent ; la poussière de la place, elle, ne colle pas dessus." },
    ],
    fx: { meet: ["gaspard", "lison"] },
    choices: [
      { label: "Lui demander d'où vient cette boue sur ses bottes", after: "A_tiennot", hide: { clue: "g_bottes" }, if: { not: { clue: "g_bottes" } }, to: "K_gaspard_bottes" },
      { back: "H_hameau" },
    ],
  },
  K_gaspard_bottes: {
    title: "Les bottes", place: "hameau",
    fx: { clue: "g_bottes" },
    text: [
      "« Mes bottes ? » Gaspard baisse les yeux sur ses pieds avec l'étonnement d'un homme qui découvre qu'il en a. « De la boue, ma belle. De la boue de chemin. Je fais tous les chemins du comté, j'ai la boue de tous les chemins du comté. Lison, ma pipe ! »",
      "Lison ne bouge pas. Elle regarde les bottes de son père, puis le registre sur ses genoux, et le referme.",
      "Tu touches le bord de la botte du bout du doigt en te penchant pour ramasser un sou. La boue est froide comme de la neige.",
    ],
    choices: [{ back: "K_gaspard" }],
  },
  K_berthe_banc: {
    title: "La vieille Berthe", place: "hameau", back: true, fx: { meet: "berthe", flag: "recette:courage" },
    text: [
      "La vieille Berthe est assise sur le banc du tilleul, toute petite, toute courbée, son bâton de houx entre les genoux. Elle te fait signe d'approcher avec deux doigts.",
      "« Ta grand-mère et moi, on avait ton âge, dit-elle. On allait danser à la Saint-Jean, et elle dansait mieux que moi, la garce, et elle avait une amie, une grande fille pâle qui venait du bois. Ombeline. Une drôle de fille. Elle n'est jamais venue au bal. Elle attendait Hulda à la lisière, et elles partaient toutes les deux dans le bois, la nuit, comme des voleuses. »",
      "Elle hoche la tête un long moment. « Ça fait soixante ans. Elle doit être morte, Ombeline, à présent. Elle était déjà vieille quand elle était jeune, si tu vois ce que je veux dire. »",
      "Puis, parce qu'elle a parlé de danse, elle te donne la recette que Hulda lui préparait avant les bals, pour oser inviter les garçons : du millepertuis, et des orties, « pour le piquant ». Elle rit de toutes ses trois dents.",
      "(Tu sais maintenant préparer le philtre de millepertuis : du millepertuis et des orties.)",
    ],
  },
  K_forge: {
    title: "La forge", place: "hameau", back: true,
    text: [
      { if: { not: { has: "tiennot:reveille" } }, text: "Dans l'arrière-salle de la forge, Tiennot dort sur un lit de sangle, les lèvres grises, les mains grises, la respiration si lente qu'on attend chaque souffle. Maître Ferrand est assis à côté de lui, sur un tabouret trop petit, et il tient la main de son fils dans sa grosse main noire de forge." },
      { if: { not: { has: "tiennot:reveille" } }, with: WITH, text: "Ortie s'approche du lit. Elle regarde Tiennot longtemps, puis elle lui pince le bras, fort, comme d'habitude. Il ne bouge pas. Elle ressort sans un mot et va s'asseoir dehors, sur l'enclume froide." },
      { if: { has: "tiennot:reveille" }, text: "La forge tinte de nouveau. Tiennot tire le soufflet en chantant faux, et Maître Ferrand, qui frappait un fer à cheval, s'arrête pour te serrer la main à t'en faire mal." },
      { if: { has: "tiennot:reveille" }, with: WITH, text: "Tiennot et Ortie se tirent la langue de chaque côté du soufflet, avec un soulagement visible." },
    ],
    choices: [
      { label: "Faire boire la potion d'éveil à Tiennot", if: { item: "p_eveil" }, hide: { has: "tiennot:reveille" }, fx: { drop: "p_eveil" }, to: "B_tiennot_reveil" },
    ],
  },
}};
