// The second reading, « Le réveil »: every passage here is `second: true`. The marsh hospital at seven in the morning,
// the map drawn in delirium on the bed, the faces of the islands; the port and its prison, the quartermaster's store,
// the count's white house; the route of the drift; the marsh, the reed people, the island of herons; it ends on
// `carte`, according to what was found and what is done with the map.
module.exports = {
  S_reveil: { act: "II", title: "Le réveil", place: "hopital", second: true,
    fx: { meet: ["agathe"] },
    text: [
      "Un plafond blanc, une fissure en forme de rivière. Une odeur de linge bouilli, de cire et de quinquina. Tu es couché{e} dans un lit de fer, au milieu d'une longue salle voûtée où vingt autres lits s'alignent sous des draps blancs tendus, comme des collines. Par les hautes fenêtres entre une lumière grise de matin de marais.",
      "Une clochette sonne. *Ding.* Une grande religieuse osseuse s'approche entre les lits, et sa cornette blanche, aux ailes empesées, claque quand elle tourne la tête. Elle a les yeux bleus, qui tombent un peu aux coins. Elle sent le linge bouilli et la cire. Tu la connais. Tu l'as vue en haut d'une colline de draps.",
      "« Sept heures, dit-elle. Vous voilà revenu{e}. Sœur Agathe. Vous m'avez mordue. » Elle te montre un pansement sur sa main, sans rancune. « Trois jours de fièvre. On vous a trouvé{e} dans une barque, à la dérive, à l'entrée du port. Vous dessiniez. Vous n'avez fait que ça. »",
      "Elle désigne le pied du lit. Là, roulée, une grande feuille faite de dizaines de feuilles de température collées les unes aux autres avec de la mie de pain, couvertes au dos d'un archipel au crayon, d'un trait sûr, nerveux, magnifique. Ta carte de fièvre.",
    ],
    choices: [
      { label: "Dérouler la carte de fièvre", to: "S_carte" },
    ] },

  S_carte: { act: "II", title: "La carte de fièvre", place: "hopital", second: true,
    text: [
      "Tu la déroules sur ton lit. Elle est là, toute entière, telle que tu l'as rêvée : la mer, que ta main a hachurée de noir, l'île des cloches, l'île blanche, la tour, l'entrepôt sur pilotis, le mât, et au centre, une tache grise estompée au doigt, entourée de petits oiseaux dessinés en trois traits. Au coin, dans un cartouche de roseaux, la légende, six lignes de ta main.",
      "Au bas de la feuille, une écriture d'une autre main, que tu reconnais : le docteur a noté tes températures, jour après jour, sur l'autre face, et le papier en garde les colonnes comme une carte garde ses latitudes. Quarante et un. Quarante et un. Quarante. Trente-sept et demi.",
      "Tu regardes les îles. Tu regardes la salle. Les draps tendus. La clochette. La cornette. Tout ce que tu as dessiné cette nuit est vrai, a dit un vieil homme dans l'encre. Les îles sont des gens.",
    ],
    choices: [
      { label: "Regarder autour de toi", to: "S_salle" },
    ] },

  S_salle: { act: "II", title: "La salle des fiévreux", place: "hopital", second: true, hub: true, backName: "la salle",
    text: [
      { first: true, text: "La salle des fiévreux de Saint-Lazare-des-Salines est longue comme une église, et l'on y entend les mêmes bruits qu'à l'église : des soupirs, des toux, des prières, et le pas des sœurs sur les dalles. Ton lit est le dernier, sous une fenêtre qui donne sur le port." },
      { again: true, text: "La salle des fiévreux, les lits sous leurs draps tendus, la clochette de Sœur Agathe, ta carte roulée au pied de ton lit." },
    ],
    choices: [
      { label: "Parler à Sœur Agathe de ce que tu as dit en délire", hide: { seen: "S_agathe" }, to: "S_agathe" },
      { label: "Attendre la visite du docteur", hide: { seen: "S_leclou" }, to: "S_leclou" },
      { label: "Recevoir la visiteuse qui demande l'apprenti de Malbrouck", if: { seen: "S_agathe" }, hide: { seen: "S_iris" }, to: "S_iris" },
      { label: "Recevoir le grand monsieur en blanc qui attend à la porte", if: { seen: "S_leclou" }, hide: { seen: "S_comte_visite" }, to: "S_comte_visite" },
      { label: "Regarder qui rôde au bout de la salle", if: { seen: "S_comte_visite" }, hide: { seen: "S_brunel_visite" }, to: "S_brunel_visite" },
      { label: "Regarder la plaque au pied de ton lit", hide: { seen: "S_lit_douze" }, to: "S_lit_douze" },
      { label: "Vider les poches de ton manteau", hide: { seen: "S_manteau" }, to: "S_manteau" },
      { label: "Parler à l'homme qui tousse dans le lit voisin", if: { seen: "S_lit_douze" }, hide: { seen: "S_voisin" }, to: "S_voisin" },
      { label: "Aller jusqu'à la chapelle au bout de la salle", if: { seen: "S_agathe" }, hide: { seen: "S_chapelle" }, to: "S_chapelle" },
      { label: "Quitter l'hôpital et descendre au port", if: { seen: "S_leclou" }, hide: { seen: "S_port" }, fx: { until: 9 }, to: "S_port" },
    ] },

  S_agathe: { act: "II", title: "Ce que tu as dit", place: "hopital", second: true,
    text: [
      "Sœur Agathe s'assoit au bord de ton lit, droite comme une colonne. « Vous avez parlé, dit-elle. Beaucoup. Des cloches, du sel, d'une horloge, d'un rat. Et d'un pendu qui rame. » Elle hésite, ce qui chez elle doit être rare. « Et d'un nom. Joachim. Vous disiez : pas par là, pas par là, Joachim avait raison. »",
      "« Joachim est en prison, au port, dit-elle encore. Le guide de votre expédition. Le quartier-maître est rentré il y a huit jours, seul, et il a dit que le guide vous avait menés exprès dans les chenaux de la Morte, pour vous noyer et vous voler. On va le juger samedi. On dit qu'on le pendra. » Elle se lève. « Je ne crois pas les quartiers-maîtres. Je les soigne depuis trente ans. Ils mentent sur leur pouls. »",
    ],
    choices: [
      { back: "S_salle" },
    ] },

  S_leclou: { act: "II", title: "Le docteur", place: "hopital", second: true,
    fx: { meet: ["leclou"] },
    text: [
      "Le docteur Leclou arrive à huit heures moins une, sa montre à répétition à la main, petit, sec, en redingote noire, des lunettes sur le nez. Il prend ton poignet entre deux doigts froids, et regarde le cadran de sa montre, et tu entends le tic-tac. Tu as envie de rire. Tu ne ris pas : tu as vu sa poitrine s'ouvrir en cadran, cette nuit.",
      "« Quatre-vingts, dit-il. Guéri, ou presque. Vous pouvez sortir à midi, contre avis médical. Vous sortirez à neuf heures, je le vois à vos yeux. Les gens qui ont dessiné toute une nuit sortent toujours trop tôt. » Il note, ferme son carnet. « Quinquina, une dose matin et soir. Et ne retournez pas dans les marais. On n'en revient pas deux fois. »",
      { if: { voie: "batelier" }, text: "Tu lui dis que tu es né{e} sur une barge, et que les marais, tu les connais. Il hausse les épaules. « Tous les noyés de mon registre connaissaient les marais. C'est pour ça qu'ils y allaient. »" },
    ],
    choices: [
      { back: "S_salle" },
    ] },

  S_iris: { act: "II", title: "Iris Malbrouck", place: "hopital", second: true,
    fx: { meet: ["iris"], flag: "iris:avec" },
    text: [
      "Une jeune femme en habit de voyage brun s'approche de ton lit, à grands pas, un compas de laiton pendu au cou au bout d'une chaîne, des taches d'encre aux doigts. Elle a le front de ton maître, et son nez, et sa façon de regarder les choses comme si elle allait les mesurer.",
      "« Iris Malbrouck, dit-elle. Graveuse. Je suis arrivée de la capitale hier soir, par la diligence. On m'a dit que mon père était mort, et que vous étiez vivant{e}. » Elle a les yeux secs. « Je ne crois pas que mon père soit mort. Il ne meurt pas. Il a perdu deux doigts au pôle et il a continué de dessiner. »",
      "Elle voit la carte, au pied de ton lit, et se penche dessus. Longtemps. Puis elle pose le doigt sur la tache grise au centre, entourée de petits oiseaux. « C'est son trait, dit-elle, très bas. C'est son trait, de votre main. Qu'est-ce qu'il y a, là ? »",
      "Tu lui dis : des hérons, une brume, une voix qui rit. Elle se redresse. « Alors je viens avec vous. »",
    ],
    choices: [
      { back: "S_salle" },
    ] },

  S_comte_visite: { act: "II", title: "Le maître des salines", place: "hopital", second: true,
    fx: { meet: ["saintaubry"] },
    text: [
      "Il entre dans la salle des fiévreux comme on entre dans une de ses propriétés : grand, majestueux, en manteau blanc à col de fourrure, la barbe blanche peignée, et il sent le sel et l'eau de Cologne. Les sœurs s'écartent. Les malades se taisent. Le comte de Saint-Aubry, maître des salines de Brésille.",
      "Tu le reconnais. Tu l'as vu sur un trône de sel, cette nuit, perdre sa couronne sous la pluie.",
      "« Mon pauvre cartographe, dit-il, d'une voix lente. Quelle épreuve. J'ai payé cette expédition, je me sens responsable. » Ses yeux gris tombent sur la carte roulée au pied de ton lit. « On me dit que vous avez dessiné, pendant votre fièvre. Des cartes. Je vous en offre deux cents écus. Pour la mémoire de votre maître. Un souvenir. »",
    ],
    choices: [
      { label: "Lui vendre la carte de fièvre", hide: { any: [{ has: "carte:vendue" }, { has: "carte:gardee" }] }, fx: { flag: "carte:vendue", gold: 12000 }, to: "S_vendue" },
      { label: "Lui dire que la carte n'est pas à vendre", hide: { any: [{ has: "carte:vendue" }, { has: "carte:gardee" }] }, fx: { flag: "carte:gardee" }, to: "S_gardee" },
    ] },

  S_vendue: { act: "II", title: "Deux cents écus", place: "hopital", second: true,
    text: [
      "Le comte compte deux cents écus d'or sur ta couverture, en piles bien droites, comme des tours de sel. Il roule la carte avec un soin infini, la glisse sous son manteau, te tapote la main, et s'en va.",
      "Tu regardes les écus. Tu fermes les yeux. Sous tes paupières, la carte est là, entière, chaque île, chaque trait. Tu l'as dessinée. Ta main s'en souvient. Il a acheté le papier ; il n'a pas acheté ta main.",
    ],
    choices: [
      { back: "S_salle" },
    ] },

  S_gardee: { act: "II", title: "Pas à vendre", place: "hopital", second: true,
    text: [
      "Le comte sourit, d'un sourire qui n'atteint pas les yeux gris. « Tout est à vendre, jeune cartographe. Tout. C'est la seule loi de la nature que je connaisse. » Il se lève. « Réfléchissez. La fièvre rend sentimental. Je repasserai. »",
      "Il s'en va. Tu remarques, quand il passe la porte, qu'il fait un petit signe de tête à quelqu'un, au bout de la salle, près du bénitier.",
    ],
    choices: [
      { back: "S_salle" },
    ] },

  S_brunel_visite: { act: "II", title: "Le quartier-maître", place: "hopital", second: true,
    fx: { meet: ["brunel"], clue: "i_brunel" },
    text: [
      "Près du bénitier, un gros homme en gilet de cuir taché tourne son chapeau entre des doigts courts et gras. Il s'approche de ton lit avec une mine de circonstance, et ses petits yeux prudents font le tour de toi, du lit, de la carte, de la fenêtre, comme on fait un inventaire.",
      "« Brunel, dit-il. Le quartier-maître. Tu te souviens de moi ? » Tu te souviens d'un rat derrière un comptoir. « Je suis rentré le premier. Seul. Huit jours de marais à pied. J'ai cru que tout le monde était mort. J'ai dit que c'était la faute du guide. » Il baisse la voix. « Tu te souviens de quelque chose ? De la nuit de la tempête ? Les fiévreux disent n'importe quoi. Personne ne les croit. »",
      "Il te regarde un long moment. Puis il te tapote l'épaule, de ses doigts gras. « Dors, petit{e}. » Et il s'en va. Le mot te glace le sang : tu l'as entendu, cette nuit, dans la gueule d'un rat.",
    ],
    choices: [
      { back: "S_salle" },
    ] },

  // ------------------------------------------------------------------ the port
  S_port: { act: "II", title: "Le port de Brésille", place: "port", second: true, hub: true, backName: "le port",
    text: [
      { first: true, text: "Le port de Brésille sent le sel, la vase et le goudron. Les barges plates des salines y attendent, chargées de sel en pains, et au-delà des jetées commencent les Bouches-Noires : une étendue infinie de roseaux gris-vert, plus hauts qu'un homme, où le fleuve se perd en mille bras, sous un ciel bas où passent, lentement, des hérons." },
      { first: true, text: "Sur le quai, la prison du port, un cube de pierre noire aux fenêtres grillées. Plus loin, l'entrepôt de l'expédition, sur pilotis, avec son enseigne neuve : *Brunel, avitaillement.* Et sur la colline, au-dessus des toits, l'hôtel blanc du comte de Saint-Aubry, posé comme un bloc de sel sur un tapis vert." },
      { again: true, text: "Le port, ses barges de sel, la prison noire, l'entrepôt sur pilotis, et au-delà, les roseaux à perte de vue." },
    ],
    choices: [
      { label: "Entrer à la prison du port", hide: { seen: "S_prison" }, to: "S_prison" },
      { label: "Parler à Joachim dans sa cellule", if: { seen: "S_prison" }, to: "S_joachim" },
      { label: "Faire la conversation au geôlier", if: { seen: "S_prison" }, hide: { seen: "S_geolier" }, to: "S_geolier" },
      { label: "Regarder les porteuses de sel sur le quai", hide: { seen: "S_quai_sel" }, to: "S_quai_sel" },
      { label: "Boire un verre au cabaret des bateliers", hide: { seen: "S_cabaret" }, to: "S_cabaret" },
      { label: "Te glisser dans l'entrepôt de Brunel", hide: { item: "registre_brunel" }, test: { dom: "discretion", diff: 0, label: "Discrétion" }, win: { fx: { item: "registre_brunel" }, to: "S_entrepot" }, lose: { to: "S_entrepot_vu" } },
      { label: "Lire la ligne bizarre du carnet de Brunel", if: { item: "registre_brunel" }, hide: { has: "enigme:g1" }, to: "S_carnet" },
      { label: "Porter le carnet au lieutenant du port", if: { has: "enigme:g1" }, hide: { has: "joachim:libre" }, fx: { flag: "joachim:libre" }, to: "S_lieutenant" },
      { label: "Monter à l'hôtel de Saint-Aubry", if: { has: "enigme:g1" }, hide: { seen: "S_hotel" }, fx: { time: 1 }, to: "S_hotel" },
      { label: "Partir dans les marais avec la marée de midi", if: { has: "route:trouvee" }, fx: { until: 12 }, to: "S_marais" },
    ] },

  S_prison: { act: "II", title: "La prison", place: "port", second: true,
    text: [
      "Le geôlier est un vieil homme à jambe de bois qui mange des moules dans un chapeau. Il te laisse entrer pour un sou, parce que c'est jour de visite et qu'il n'en vient jamais. « Le Roselin ? Au fond. Il dit rien. Il se tient sur une jambe toute la journée. On dirait un héron. Ça me met mal à l'aise, rapport à ma jambe. »",
    ],
    choices: [
      { label: "Aller au fond, jusqu'à la cellule", fx: { gold: -1 }, to: "S_joachim" },
    ] },

  S_joachim: { act: "II", title: "Joachim", place: "port", second: true,
    fx: { meet: ["joachim"] },
    text: [
      { first: true, text: "Dans la dernière cellule, un homme maigre, couleur de vase, se tient debout sur une jambe, l'autre repliée contre le genou, les bras croisés, au milieu d'un rayon de jour qui tombe de la lucarne. Il ne bouge pas. Ses cheveux longs lui tombent sur les épaules. Il te regarde à travers les barreaux sans ciller. Tu l'as vu pendu à un mât, ramant la tête en bas." },
      { first: true, text: "« Toi, dit-il, de sa voix lente et rare. Tu es vivant{e}. Bon. » Il ne change pas de jambe. « Je vous avais dit : pas par là. »" },
      { again: true, text: "Joachim, debout sur une jambe dans son rayon de jour, te regarde à travers les barreaux." },
      { if: { has: "joachim:libre" }, text: "La porte de la cellule est ouverte. Joachim n'est pas encore sorti. Il attendait que tu viennes le chercher." },
    ],
    choices: [
      { label: "Lui dire le mot des roseaux", hide: { has: "joachim:mot" }, fx: { flag: "joachim:mot" }, to: "S_joachim_mot" },
      { label: "Retracer avec lui la route de la dérive", if: { all: [{ has: "joachim:mot" }, { has: "joachim:libre" }] }, hide: { has: "route:trouvee" }, to: "S_route" },
      { back: "S_port" },
    ] },

  S_joachim_mot: { act: "II", title: "Patience", place: "port", second: true,
    text: [
      "Tu approches ton visage des barreaux, et tu dis, à voix basse : « Patience. »",
      "Joachim pose enfin son autre pied par terre. Il te regarde, et quelque chose bouge sur son visage, qui pourrait être un sourire chez quelqu'un d'autre. « Qui te l'a dit ? » Tu dis : toi, dans ma fièvre. Il hoche la tête, comme si c'était l'explication la plus ordinaire du monde. « La fièvre, chez nous, on dit que c'est le marais qui parle. Il parle bien, à ce que je vois. »",
      "Il s'approche des barreaux. « La nuit de la tempête, le gros a coupé les amarres. Les trois barques de devant sont parties à la dérive, avec le vieux, toi, et deux autres. Moi, j'étais dans la sienne. Il m'a assommé. Il a ramé huit jours vers Brésille, il m'a livré, et il a dit que j'avais tout fait. » Il retourne dans son rayon de jour. « Le vieux vit. Les miens l'ont trouvé, j'en suis sûr. Je sais où. Mais il faut sortir d'ici. Et il faut savoir par où le courant t'a pris, toi, pour savoir où il l'a laissé, lui. »",
    ],
    choices: [
      { back: "S_joachim" },
    ] },

  S_entrepot: { act: "II", title: "L'entrepôt de Brunel", place: "port", second: true,
    text: [
      "Tu te glisses par une trappe de chargement, entre deux pilotis, et tu te retrouves dans l'entrepôt : des tonneaux jusqu'au plafond, des sacs, des caisses, des rouleaux de cordage neuf. Exactement le Magasin de ta fièvre, moins les rats à lorgnon. L'odeur est la même : biscuit, goudron, eau-de-vie.",
      "Sur un comptoir, sous une pierre, un carnet de comptes relié de cuir gras. Tu le prends. Et accroché à un clou, derrière le comptoir, un bout d'amarre épais comme un poignet, tranché net, au couteau. Il l'a gardé. Les gens qui comptent tout gardent tout.",
    ],
    choices: [
      { back: "S_port" },
    ] },

  S_entrepot_vu: { act: "II", title: "Le gardien de l'entrepôt", place: "port", second: true,
    text: [
      "Un chien énorme se dresse dans l'ombre de l'entrepôt avant même que tu aies passé la trappe, et un commis à moitié endormi lève une lanterne. « Qui va là ? » Tu ressors à reculons, avec un sourire d'ivrogne et une excuse de batelier perdu{e}. Le commis te regarde partir longtemps.",
      "Il faudra revenir quand il dormira mieux.",
    ],
    choices: [
      { back: "S_port" },
    ] },

  S_carnet: { act: "II", title: "Le carnet de Brunel", place: "port", second: true, puzzle: "g1",
    text: [
      "Tu ouvres le carnet sur une borne du quai. Des colonnes de chiffres, une écriture grasse et appliquée. Biscuit, eau-de-vie, cordage, gages. Et une ligne qui détonne.",
    ],
    choices: [
      { back: "S_port" },
    ] },

  S_g1: { act: "II", title: "Les cordes", place: "port", second: true,
    text: [
      "*Le comte paie les cordes.* Chaque mot retourné sur lui-même, comme un gant qu'on enlève. Brunel a écrit ses secrets à l'envers, mot par mot, avec la ruse d'un homme qui croit que personne ne lit jamais un carnet de comptes jusqu'au bout.",
      "Et en face, dans la colonne des recettes, la date du quatorze septembre, la nuit de la tempête : *Reçu de M. le C. : 300 écus.*",
    ],
    choices: [
      { back: "S_port" },
    ] },

  S_lieutenant: { act: "II", title: "Le lieutenant du port", place: "port", second: true,
    text: [
      "Le lieutenant du port est un jeune homme maigre, qui lit le carnet de Brunel trois fois, en remuant les lèvres, puis la ligne à l'envers, quatre fois. Il devient très pâle. « Monsieur le comte, dit-il. Monsieur le comte paie aussi ma solde. » Il referme le carnet. Il réfléchit. Il a l'air d'un homme qui compte ses chances, et qui trouve qu'il en a peu.",
      "Puis il se lève, prend son trousseau, et descend à la prison. « Le Roselin sort, dit-il au geôlier. Faute de preuves. » Il te rend le carnet. « Gardez-le. Si je le garde, il disparaîtra. Si vous le gardez, c'est vous qui disparaîtrez, peut-être, mais au moins ce ne sera pas ma faute. »",
    ],
    choices: [
      { back: "S_port" },
    ] },

  S_route: { act: "II", title: "La route de la dérive", place: "port", second: true, puzzle: "g2",
    text: [
      "Joachim, libre, s'accroupit sur le quai devant la prison, déroule ta carte de fièvre sur les pavés, et pose à côté la vieille carte du port, celle des bateliers, où sont marqués les repères des premiers chenaux.",
      { if: { has: "carte:vendue" }, text: "Tu n'as plus la carte : le comte l'a achetée. Tu prends un bout de charbon, et tu la redessines sur les pavés, de mémoire, île par île. Ta main s'en souvient. Joachim te regarde faire sans un mot." },
    ],
    choices: [
      { back: "S_joachim" },
    ] },

  S_g2: { act: "II", title: "Où il est", place: "port", second: true,
    text: [
      "La cloche du bac, les salines, le moulin à marée, l'entrepôt. Les cloches, le sel, l'horloge, le magasin. Ta barque a dérivé de repère en repère, et ta fièvre a fait de chacun une île, dans l'ordre exact où tu les as croisés, à demi mort{e}, au fond de ta barque.",
      "Joachim pose le doigt sur la tache grise au centre de ta carte, puis sur la carte des bateliers, au-delà de l'entrepôt, là où les chenaux deviennent blancs, faute de relevés. « Là, dit-il. L'île aux Hérons. On y va avec la marée de midi. »",
    ],
    choices: [
      { back: "S_port" },
    ] },

  // ------------------------------------------------------------------ the count
  S_hotel: { act: "II", title: "L'hôtel de Saint-Aubry", place: "comte", second: true,
    text: [
      "L'hôtel du comte est blanc, d'un blanc de sel, avec des colonnes, des perrons, des statues de nymphes qui tiennent des urnes vides. On te fait attendre dans un salon où tout est blanc, les murs, les fauteuils, le piano, le tapis, comme si le maître de maison avait voulu vivre à l'intérieur d'un de ses tas de sel.",
      "Le comte entre, majestueux, et s'assoit sans t'offrir de siège. « Vous avez réfléchi ? » Tu poses sur le piano blanc le carnet de Brunel, ouvert à la ligne retournée. Il la lit. Il ne change pas de visage. Les grands propriétaires ont des visages de propriété : rien n'y bouge sans autorisation.",
      "« Trois cents écus, dit-il. Pour des cordes. C'est cher, pour des cordes. » Il referme le carnet du bout d'un doigt. « Que voulez-vous ? De l'argent ? J'en ai. Une place ? J'en ai. Je n'ai jamais eu besoin d'avoir raison, jeune cartographe. J'ai toujours eu besoin d'avoir le dernier mot, ce qui coûte moins cher. »",
    ],
    choices: [
      { label: "Lui dire que tu veux la vérité sur les marais", fx: { flag: "comte:confronte" }, to: "S_comte_verite" },
    ] },

  S_comte_verite: { act: "II", title: "Les gens des roseaux", place: "comte", second: true,
    text: [
      "Le comte se lève et va à la fenêtre, d'où l'on voit tout le delta, gris-vert, jusqu'à la mer. « La vérité ? Votre maître a écrit à l'Académie, de là-bas, par un batelier, il y a un mois. Il a écrit que les Bouches-Noires étaient habitées. Des villages. Des familles. Des gens qui vivent sur l'eau depuis mille ans. » Il hausse les épaules. « On n'assèche pas un marais habité. On assèche un marais vide. Il fallait que la carte revienne vide, ou pas du tout. »",
      "Il se retourne. « Je n'ai tué personne. J'ai acheté des cordes. Ce qui arrive aux gens qui sont au bout des cordes ne m'appartient pas. » Il te raccompagne lui-même à la porte, avec une politesse de glace. « Bonne journée. Évitez les marais. »",
    ],
    choices: [
      { back: "S_port" },
    ] },

  // ------------------------------------------------------------------ the marsh
  S_marais: { act: "II", title: "Les Bouches-Noires", place: "marais", second: true,
    text: [
      "À midi, la marée tourne, et la barque de Joachim entre dans les roseaux. Il rame debout, à l'arrière, d'une seule rame, comme on fait chez lui, sans bruit. Les roseaux se referment derrière vous comme un rideau. Le port disparaît. Le ciel se réduit à une bande grise au-dessus des tiges, qui sifflent et se courbent au vent avec un bruit de foule qui chuchote.",
      { if: { has: "iris:avec" }, text: "Iris est assise à l'avant, le compas de son père à la main, et elle relève les angles à chaque coude du chenal sur un carnet posé sur ses genoux, sans un mot, avec l'acharnement de quelqu'un qui dessine pour ne pas penser." },
      "Vous passez la cloche du bac, qui sonne dans la brume. Les vieilles salines abandonnées, aux tas blancs comme des tentes. Le moulin à marée, dont la roue tourne comme une horloge, tic, tac. L'entrepôt sur pilotis, vide, ses portes battantes. Chaque repère est une île de ta fièvre, que tu reconnais au passage comme on reconnaît un visage dans une foule. Et au-delà, les chenaux deviennent blancs sur toutes les cartes du monde.",
    ],
    choices: [
      { label: "Accoster au moulin à marée", hide: { seen: "S_moulin" }, to: "S_moulin" },
      { label: "Longer les salines abandonnées", hide: { seen: "S_salines_mortes" }, to: "S_salines_mortes" },
      { label: "Entrer dans la brume", fx: { time: 3 }, to: "S_roselins" },
    ] },

  S_roselins: { act: "II", title: "Les gens des roseaux", place: "marais", second: true,
    text: [
      "La brume tombe, d'un coup, épaisse, grise, qui colle aux cils. Et dans la brume, des cris : mille hérons, rauques, enroués, comme mille vieillards qui toussent dans une église noyée. Ton sang se glace. Tu connais ce bruit.",
      "Puis des formes sortent de la brume, sans bruit : des barques longues et plates, faites de roseaux liés, chacune poussée par un homme ou une femme debout, couleur de vase, les cheveux longs. Elles vous entourent. Personne ne parle. Une vieille femme, à l'avant de la plus grande barque, te regarde, toi, l'étranger{e}, avec des yeux noirs et patients, et attend.",
      "Joachim, derrière toi, ne dit rien. Il te laisse parler. C'est ton mot, à présent.",
    ],
    choices: [
      { label: "Dire « Patience »", to: "S_ile_herons" },
    ] },

  S_ile_herons: { act: "II", title: "L'île aux Hérons", place: "marais", second: true,
    fx: { flag: "malbrouck:retrouve", meet: ["malbrouck"], ep: ["histoire", 500] },
    text: [
      "La vieille femme hoche la tête. Les barques de roseaux s'écartent. Derrière la brume, il y a une île : de la vase, des saules, et sur des pilotis, un village de maisons rondes en roseau tressé, reliées par des passerelles, avec des fumées bleues qui montent droit. Sur chaque toit, des hérons, immobiles, sur une patte.",
      "Et sur la passerelle du milieu, assis sur un tabouret, enveloppé dans une couverture de plumes, maigre, barbu, des lunettes de travers et un crayon derrière chaque oreille, un vieil homme dessine. Il lève la tête. Il rit. Même de loin, il rit.",
      "« Par ici, petit{e}, crie Eustache Malbrouck. Par ici ! Tu as mis le temps ! »",
      { if: { has: "iris:avec" }, text: "Iris saute de la barque avant qu'elle touche, tombe dans la vase jusqu'aux genoux, se relève, court sur la passerelle, et s'arrête devant son père. Ils se regardent. Ils ne s'embrassent pas : ils sont de la même race que leurs cartes, précis, secs, pudiques. Elle dit seulement : « Tu as encore perdu tes lunettes. » Il dit : « Elles sont sur mon nez. » Elle dit : « Justement. » Et puis elle pleure, et lui aussi, en riant." },
      "Il a de la fièvre, lui aussi, et une jambe cassée qu'une Roseline a remise en place avec des attelles de saule. Les deux bateliers de l'expédition sont là, vivants, maigres, en train d'apprendre à pêcher l'anguille avec des enfants qui rient d'eux. Et sur les genoux de ton maître, il y a une carte.",
    ],
    choices: [
      { label: "Parcourir le village sur les passerelles", to: "S_village" },
      { label: "Regarder la carte de ton maître", to: "S_vraie_carte" },
    ] },

  S_vraie_carte: { act: "II", title: "La vraie carte", place: "marais", second: true,
    fx: { item: "carte_malbrouck" },
    text: [
      "C'est la plus belle carte que tu aies jamais vue. Les Bouches-Noires, entières, levées pendant un mois sur une jambe cassée, avec l'aide des Roselins qui le portaient de barque en barque : chaque chenal, chaque îlot, chaque saule. Et sur les îlots, de petits ronds, tracés avec soin, avec des noms écrits en petites capitales : des villages. Quarante-trois villages. Des noms que personne, à Brésille, n'a jamais entendus.",
      "« Le comte veut un marais vide, dit Malbrouck. Je lui ai fait un marais plein. » Il te tend la carte. « Tu l'as trouvée. Tu choisis ce qu'on en fait. Moi, je suis trop vieux, et trop en colère, et j'ai trop de fièvre. Je ferais une bêtise. »",
    ],
    choices: [
      { label: "Porter la carte à l'Académie, pour que le royaume sache que les marais sont habités", fx: { flag: "carte:academie" }, to: "S_choix" },
      { label: "Laisser la carte aux Roselins, et à eux seuls", fx: { flag: "carte:roselins" }, to: "S_choix" },
      { label: "Rapporter la carte au comte, qui l'a payée", fx: { flag: "carte:comte" }, to: "S_choix" },
    ] },

  S_choix: { act: "II", title: "Le retour", place: "marais", second: true,
    text: [
      "Le soir tombe sur le village des roseaux. Les hérons, sur les toits, rentrent la tête dans les épaules. Les Roselins allument de petits feux dans des pots de terre posés sur l'eau, et la brume devient dorée.",
      "Demain, vous repartirez vers Brésille, avec ton maître sur une civière de roseaux, et ce que tu as choisi de faire de sa carte.",
    ],
    choices: [
      { label: "Repartir à l'aube", fx: { until: 6 }, to: "F_carte" },
    ] },

  F_carte: { act: "II", title: "La carte", place: "marais", end: true, second: true,
    fx: { flag: "fin:carte" },
    text: [
      "Le retour se fait avec la marée du matin. Joachim rame debout. Malbrouck dort sur sa civière, un crayon dans la main, comme toi il y a quatre jours.",
      { if: { has: "carte:academie" }, text: "La carte part pour la capitale, par la diligence, dans un tube de fer-blanc, avec une lettre de Malbrouck et une lettre de toi. Trois mois plus tard, l'Académie la publie, gravée sur cuivre par Iris Malbrouck, avec les quarante-trois villages. Le roi signe une ordonnance : les Bouches-Noires sont habitées, on ne les asséchera pas. Le comte de Saint-Aubry plante son blé ailleurs, sur des terres plus sèches et des gens plus faibles." },
      { if: { has: "carte:roselins" }, text: "La carte reste au village, roulée dans une gaine de roseau, sous le toit de la vieille femme aux yeux patients. À Brésille, tu dis que l'expédition a échoué, que les marais sont impraticables, que la carte est perdue. Personne n'y retournera de sitôt : les marais qu'on ne sait pas dessiner, on ne sait pas les vendre. Les Roselins restent invisibles, comme ils l'ont voulu depuis mille ans." },
      { if: { has: "carte:comte" }, text: "Tu portes la carte à l'hôtel blanc. Le comte la déroule sur son piano, et la regarde longtemps, les quarante-trois villages, les quarante-trois noms. Puis il la roule, la glisse sous son bras, et te paie, en or. Tu sais ce qu'il en fera. Tu l'as su en la lui tendant. Joachim ne te parle plus. Malbrouck non plus, pendant un an." },
      { if: { has: "joachim:libre" }, text: "Joachim retourne à ses roseaux. Avant de partir, il se tient un moment devant toi, sur une jambe, et il dit : « Tu reviendras. Tu as le mot. » Puis il s'en va, et la brume le reprend." },
      { if: { has: "enigme:g3" }, text: "Dans un coin de la carte des Bouches-Noires, au-dessus du village aux hérons, tu as écrit un nom, en petites capitales, de ta main : *CRUE*. Ce sera le premier nom de Roselin écrit sur une carte. Il y en aura d'autres." },
      { if: { has: "enigme:g1" }, text: "Brunel est arrêté sur le quai le jour même, avec son carnet en guise d'acte d'accusation, en train de charger une barge pour la mer. Il compte, en montant dans la voiture de la maréchaussée, les pavés sous ses pieds. Il en trouve trois cents." },
      { if: { has: "comte:confronte" }, text: "Le comte de Saint-Aubry n'est pas inquiété. On n'inquiète pas les comtes. Mais quand tu passes sous ses fenêtres, il ferme ses rideaux blancs, et cela, pour un homme de son espèce, est une défaite." },
      { if: { has: "carte:vendue" }, text: "Ta carte de fièvre, celle que tu as vendue deux cents écus au comte, finit dans un tiroir de l'hôtel blanc, où elle dort sous la poussière, entre deux titres de rente. Peu importe. Tu la sais par cœur." },
      { if: { not: { has: "carte:vendue" } }, text: "Ta carte de fièvre, tu la gardes. Tu la fais encadrer, plus tard, dans ton atelier, à côté de la vraie, et les visiteurs demandent toujours pourquoi tu as accroché un dessin d'enfant à côté d'un chef-d'œuvre. Tu dis : c'est la même carte. Personne ne comprend. Malbrouck, lui, rit." },
      "Les années passent. Tu dessines d'autres cartes, de vraies, avec des latitudes et des sondes. Mais certaines nuits, quand tu as un peu de fièvre, ta main se met à tracer toute seule, sur le bord du papier, de petites îles qui n'existent pas encore. Tu la laisses faire. Tu as appris à lire ta propre main.",
    ] },
};
