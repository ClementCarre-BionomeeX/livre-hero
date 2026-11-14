// Act II · « La ville qui se tait », first part: the five crossroads of Orbeval (one per quarter), the hero's inn and
// sleep, the bridge (the money-changer, the goldsmith) and the quai des Orfèvres (the water gate, the assay room, the
// widow, the daughter, the master of the Mint). Who is where at what hour is not written here: the people's schedules
// (base.js, people.at) put them on the crossroads, and the engine adds their line and the way to speak to them.

var MOVES = {
  pont: { label: "Gagner le Pont des Changeurs", to: "H_pont" },
  orfevres: { label: "Longer le canal jusqu'au quai des Orfèvres", to: "H_orfevres" },
  tanneurs: { label: "Descendre le long du canal, vers les Tanneurs", to: "H_tanneurs" },
  haute: { label: "Monter les escaliers de la Haute-Ville", to: "H_haute" },
  teint: { label: "Suivre l'Aune jusqu'au port des Teinturiers", to: "H_teint" },
};
function moves(except) { return Object.keys(MOVES).filter(function (k) { return k !== except; }).map(function (k) { return Object.assign({}, MOVES[k]); }); }
// The hearing, on the third day: a line on every crossroads.
var DAY3 = { if: { day: { min: 3 } }, text: "Ce soir, à la cloche, on juge Hugon Maupas." };
module.exports.moves = moves;

module.exports.passages = {
  // ------------------------------------------------------------------ crossroads
  H_pont: { act: "II", title: "Le Pont des Changeurs", place: "pont", hub: true,
    text: [
      { first: true, text: "Le Pont des Changeurs, en plein jour, est la rue la plus riche d'Orbeval. On y pèse, on y compte, on y parle toutes les langues du fleuve. À sa tête, côté Haute-Ville, l'enseigne du Pot d'Étain grince au vent : c'est là que tu dors." },
      { again: true, when: "day", text: "Le Pont des Changeurs, ses boutiques, ses balances, le bruit d'argent qui ne s'arrête jamais. L'enseigne du Pot d'Étain grince à sa tête." },
      { when: "night", text: "La nuit, le pont n'est plus qu'un couloir de volets clos. Une seule lumière : celle du Pot d'Étain, où l'on boit encore." },
      DAY3,
    ],
    choices: [
      { label: "Entrer boire un verre dans la salle commune du Pot d'Étain", takes: 1, to: "T_salle" },
      { label: "Te reposer dans ta chambre jusqu'au soir", when: "day", takes: "evening", to: "N_repos" },
      { label: "Monter dans ta chambre et dormir jusqu'au matin", when: "night", to: "N_dormir" },
    ].concat(moves("pont")) },

  H_orfevres: { act: "II", title: "Le quai des Orfèvres", place: "orfevres", hub: true,
    text: [
      { first: true, text: "Le quai des Orfèvres longe un canal étroit, aux eaux sombres et propres, qui descend vers les Tanneurs. Les maisons y sont de pierre blanche, avec des portes cloutées et des marches qui descendent jusqu'à l'eau. D'un côté de la place, la Monnaie : un bâtiment carré, sans fenêtres au rez-de-chaussée, avec deux gardes en livrée à la porte. En face, plus petite, plus vieille, la Maison de l'Essai, où vivait et travaillait l'essayeur-juré." },
      { first: true, text: "Les volets de la Maison de l'Essai sont tirés. Un crêpe noir pend au heurtoir. Côté canal, une porte d'eau, basse, fermée d'une chaîne, ouvre directement sur le quai." },
      { again: true, when: "day", text: "Le quai des Orfèvres, la Monnaie et ses gardes, la Maison de l'Essai et son crêpe noir au heurtoir. Le canal file vers les Tanneurs." },
      { when: "night", text: "Le soir est tombé sur le quai. Une lanterne brûle devant la Monnaie, où veille un garde. À la Maison de l'Essai, les volets sont clos ; un filet de lumière passe sous ceux de l'étage." },
      DAY3,
    ],
    choices: [
      { label: "Examiner la porte d'eau de la Maison de l'Essai, côté canal", takes: 1, to: "O_porte" },
      { label: "Entrer dans la salle des essais", if: { has: "essai:ouvert" }, hide: { not: { has: "essai:ouvert" } }, takes: 1, to: "O_salle" },
      { label: "Forcer la porte d'eau et entrer dans la salle des essais, à la faveur de la nuit", when: "night", hide: { any: [{ seen: "O_salle" }, { has: "essai:surpris" }] }, takes: 1,
        test: { dom: "discretion", diff: -10, label: "Discrétion" }, win: { via: "nuit", to: "O_salle" }, lose: { to: "O_surpris" } },
    ].concat(moves("orfevres")) },

  H_tanneurs: { act: "II", title: "Les Tanneurs", place: "tanneurs", hub: true,
    text: [
      { first: true, text: "Les Tanneurs vivent au bord du canal, entre l'écluse et le pont des Lavandières. L'eau y est trouble, l'air sent la chaux et l'écorce de chêne qu'on fait macérer dans les cuves. Des peaux sèchent sur des perches, au-dessus des têtes. Sur les marches qui descendent au canal, les lavandières battent le linge à genoux." },
      { first: true, text: "Au coin de la rue des Cuves, une enseigne en fer découpé : une lanterne à volet fermé. La Lanterne Sourde, où la veille de la fête l'essayeur a giflé un batelier devant tout le monde." },
      { again: true, when: "day", text: "Les Tanneurs, l'odeur de chaux, les peaux sur les perches, le battoir des lavandières. L'écluse, en bas ; le pont des Lavandières, en haut ; la Lanterne Sourde au coin de la rue des Cuves." },
      { when: "night", text: "La nuit, les Tanneurs sont noirs, sauf la Lanterne Sourde, où l'on chante, et la maison de l'éclusier, où brûle une chandelle. On entend l'eau passer sous les portes de l'écluse." },
      { if: { all: [{ day: { min: 1, max: 1 } }, { not: { night: true } }] }, text: "Le ciel se couvre lentement du côté de l'aval. Les lavandières regardent en l'air, et rentrent le linge des perches les plus hautes." },
      DAY3,
    ],
    choices: [
      { label: "Entrer à la Lanterne Sourde", takes: 1, to: "T_lanterne" },
    ].concat(moves("tanneurs")) },

  H_haute: { act: "II", title: "La Haute-Ville", place: "haute", hub: true,
    text: [
      { first: true, text: "On monte à la Haute-Ville par cent douze marches, ou par une rampe pour les voitures qui fait trois fois le tour de la colline. En haut, l'air est plus froid et plus propre. Une place pavée, l'Échevinage et ses arcades, sa grande horloge et sa cloche. À gauche, la tour du Guet, carrée, avec des fenêtres comme des meurtrières. À droite, derrière un mur, la cour de l'Hôtel-Dieu, où l'on soigne les pauvres et où l'on garde les morts." },
      { again: true, when: "day", text: "La place de la Haute-Ville : les arcades de l'Échevinage, la tour du Guet, la cour de l'Hôtel-Dieu. L'horloge marque les heures, et chaque heure la cloche les dit." },
      { when: "night", text: "La nuit, la place est vide. L'horloge de l'Échevinage brille d'une lanterne intérieure. Les hôtels des grandes familles ont leurs fenêtres éclairées derrière des rideaux." },
      { if: { all: [{ day: { min: 2, max: 2 } }, { not: { night: true } }] }, fresh: "m_corps_main", text: "À l'Hôtel-Dieu, deux hommes chargent une bière sur une charrette tendue de noir : on enterre l'essayeur à trois heures." },
      DAY3,
    ],
    choices: [
      { label: "Demander à voir le corps, à la salle des morts de l'Hôtel-Dieu", fresh: "m_corps_main", if: { item: "jeton" }, takes: 1, to: "H_corps" },
      { label: "Te présenter à l'Échevinage et attendre l'audience", hide: { not: { day: { min: 3 } } }, fx: { flag: "cloche:attendue", until: 18 }, to: "C_cloche" },
    ].concat(moves("haute")) },

  H_teint: { act: "II", title: "Les Teinturiers", place: "teinturiers", hub: true,
    text: [
      { first: true, text: "En aval du grand pont, la ville se termine dans le port : des quais de bois, des grues, des barges de sel et de vin amarrées en rang, et derrière, les Teinturiers, où l'eau qui sort des cuves colore le fleuve en bleu, en rouge sang, en jaune, par longues traînées qui ne se mélangent pas tout de suite." },
      { first: true, text: "Sur le quai, une auberge de planches peintes en bleu : le Bassin Bleu. Plus loin, le bureau du port, avec son registre et son commis. Et au bout du quai, une longue barge à fond plat, plus grosse que les autres, son nom peint en lettres jaunes sur la poupe : la Vouivre." },
      { again: true, when: "day", text: "Le port, les grues, les traînées de couleur sur l'eau. Le Bassin Bleu, le bureau du port, la Vouivre au bout du quai." },
      { when: "night", text: "La nuit, le port grince et clapote. Les barges se frottent contre les quais. Le Bassin Bleu a ses volets ouverts et sa lanterne bleue allumée." },
      DAY3,
    ],
    choices: [
      { label: "Boire un verre au Bassin Bleu", takes: 1, to: "T_bassin" },
      { label: "Aller voir la Vouivre, au bout du quai", when: "day", takes: 1, to: "T_vouivre" },
    ].concat(moves("teint")) },

  // ------------------------------------------------------------------ the inn
  T_salle: { act: "II", title: "La salle du Pot d'Étain", place: "pont", rumeur: "pot", back: true,
    text: [
      { first: true, text: "La salle commune du Pot d'Étain est basse, enfumée, pleine de marchands de passage qui parlent de prix et de routes. On t'apporte un pot de vin coupé d'eau et une assiette de harengs. Tu écoutes." },
      { again: true, text: "La salle commune, le vin coupé d'eau, les marchands. Tu écoutes encore." },
    ] },
  N_dormir: { act: "II", title: "La nuit", place: "pont", backName: "ta chambre du Pot d'Étain", takes: "morning",
    text: [
      "Tu montes dans ta chambre, tu poses le jeton du guet et la lettre d'adieu sur la table, à côté de la chandelle. Tu t'allonges tout habillé{e}. Par la fenêtre, le pont dort ; le fleuve, lui, ne dort jamais.",
      { if: { day: { min: 2, max: 2 } }, text: "Tu te réveilles à l'aube du deuxième jour. Il a plu toute la nuit ; les toits fument. Deux jours encore." },
      { if: { day: { min: 3, max: 3 } }, text: "Tu te réveilles à l'aube du troisième jour, avec le sentiment d'avoir rêvé de portes d'écluse. Ce soir, à la cloche, on juge Hugon Maupas." },
    ],
    choices: [{ label: "Descendre sur le pont", to: "H_pont" }] },

  N_repos: { act: "II", title: "Ta chambre", place: "pont", backName: "ta chambre du Pot d'Étain",
    text: [
      "Tu tires le rideau, tu t'allonges sur le lit sans te déshabiller, les mains sous la nuque. Tu ne dors pas vraiment. Tu remets dans l'ordre ce que tu as entendu, qui l'a dit, à quelle heure, et ce qui ne va pas ensemble.",
      "Quand tu rouvres les yeux, la lumière a changé. Les cloches sonnent les vêpres.",
    ],
    choices: [{ label: "Descendre sur le pont", to: "H_pont" }] },

  // ------------------------------------------------------------------ the money-changer
  P_isaline: { act: "II", title: "Le comptoir de la changeuse", place: "pont", montrer: "isaline", back: true,
    fx: { meet: "isaline", clue: "m_isaline_bague" },
    text: [
      { first: true, text: "Dame Isaline Veillon ne lève pas la tête quand tu t'approches. Elle prend un écu dans une pile, le laisse tomber sur la plaque de marbre, écoute, le pose sur un des deux plateaux de sa balance, regarde l'aiguille, le range. Puis un autre. Elle a des mains brunes, sèches, très précises, et des lunettes rondes qui lui grossissent les yeux." },
      { first: true, text: "« Tu viens pour le petit Maupas, dit-elle enfin. Tout le pont le sait déjà. Tu n'as pas la tête d'un client. »" },
      { again: true, text: "Dame Veillon fait sonner ses écus sur le marbre. « Encore toi. » Ce n'est ni une plainte ni un bonjour." },
      { first: true, text: "Tu lui demandes ce qui s'est passé ce matin-là." },
      { first: true, text: "« Il est venu à l'ouverture. Les manches trempées jusqu'au coude, les mains écorchées, comme s'il avait tiré quelque chose de lourd hors de l'eau. Il a posé la bague sur mon comptoir sans me regarder. Je l'ai reconnue tout de suite : une balance gravée dans l'or, et autour, en petites lettres, *Juste poids, juste titre*. Il n'y en a qu'une comme ça à Orbeval. J'ai fermé le globe de la balance dessus. J'ai dit au petit d'attendre. Il a attendu. Il n'a pas couru. » Elle repose un écu. « Un assassin aurait couru. Ou il n'aurait pas apporté la bague chez la seule changeuse qui pouvait la reconnaître. Mais je ne suis pas échevin. »" },
      { regard: { isaline: ["cordial", "allie"] }, text: "Elle te regarde par-dessus ses lunettes, et pour la première fois elle sourit, à peine. « Tu as de la patience, toi. C'est rare chez les jeunes. »" },
    ],
    choices: [
      { label: "Lui demander ce que valent vraiment les écus d'Orbeval", hide: { seen: "P_isaline_ecus" }, to: "P_isaline_ecus" },
      { label: "Lui demander si elle sait où était Hugon la nuit de la fête", regard: { isaline: ["cordial", "allie"] }, hide: { clue: "m_isaline_hugon" }, to: "P_isaline_alibi" },
    ] },
  P_isaline_ecus: { act: "II", title: "Le juste poids", place: "pont", montrer: "isaline",
    fx: { clue: "d_isaline", regard: { isaline: "cordial" } },
    text: [
      "Dame Veillon prend un écu d'Orbeval dans une pile, un autre dans une boîte de fer à part, plus vieux, la tranche usée. Elle les laisse tomber l'un après l'autre sur le marbre.",
      "Le vieux sonne clair, longtemps, comme un petit grelot. Le neuf sonne aussi, mais plus court, et plus bas. Un son mat, comme une cuillère sur une assiette fêlée.",
      "« Tu entends ? Les écus d'Orbeval pèsent juste. Je les pèse, ils pèsent juste. Mais ceux des dix dernières années sonnent mat. Il y a moins d'argent dedans qu'on ne le dit, et plus de cuivre. Pas beaucoup. Un rien par pièce. Mais multiplie ce rien par deux mille écus par semaine, pendant dix ans. » Elle range les deux pièces. « Je ne suis pas la seule à le savoir. Je suis la seule à le dire. Personne ne m'écoute : je suis une vieille femme, et je suis changeuse, et les changeurs disent toujours du mal de la monnaie des autres. »",
      "Elle se penche. « Celui qui dit si les écus sont bons, à la Monnaie, c'est l'essayeur-juré. Il signe chaque fonte. Il était mort, ce matin-là. Moi, je n'en tire rien. Je te le dis, c'est tout. »",
    ],
    choices: [{ back: "P_isaline" }] },
  P_isaline_alibi: { act: "II", title: "La table de Chandelle", montrer: "isaline", back: true,
    fx: { clue: "m_isaline_hugon" },
    text: [
      "Dame Veillon repose ses lunettes sur son nez et réfléchit, en regardant le fleuve entre deux maisons.",
      "« La nuit de la fête, je tenais la table de Chandelle à la Lanterne Sourde, comme tous les soirs. Le petit Maupas est venu s'asseoir à dix heures. Il a perdu trois sous contre moi, de dix heures à onze heures passées. Il jouait mal. Il regardait la porte, tout le temps, comme quelqu'un qui attend, ou qui a peur qu'on entre. »",
      "« À onze heures et demie, il est parti. Où, je n'en sais rien. Après, je ne l'ai plus vu jusqu'au matin, sur mon comptoir. »",
      "Elle hausse les épaules. « Les échevins ne m'ont rien demandé. Ils ne demandent jamais rien aux changeuses, sauf de leur prêter de l'argent. »",
    ] },
  P_isaline_essais: { act: "II", title: "Les chiffres", montrer: "isaline", back: true,
    fx: { flag: "ecus:verite", quest: "II_ecus", regard: { isaline: "allie" } },
    text: [
      "Dame Veillon prend la feuille de Théophane, l'approche de ses lunettes, et la lit lentement, une ligne après l'autre, en remuant les lèvres. Elle ne dit rien pendant longtemps.",
      "« Celui qui a écrit ça sait compter, dit-elle enfin. Ici, le titre du registre : onze deniers d'argent fin sur douze. Là, l'autre chiffre, le vrai, celui qu'il a trouvé en refaisant l'essai lui-même : dix deniers et demi. Un demi-denier sur chaque écu. » Elle pose la feuille sur le marbre et l'aplatit de la paume. « Deux mille écus par semaine. Dix ans. Tu sais combien ça fait, d'argent ? Assez pour acheter ce pont, avec ses maisons. »",
      "« *Tous les jeudis. Toujours lui.* » Elle relit la marge à voix basse. « Les fontes se font le jeudi, à la Monnaie. Et le jeudi, c'est l'essayeur-juré qui fait l'essai et qui signe. » Elle te rend la feuille. « Moi, je ne tire rien de rien. »",
      "Puis, comme tu t'en vas, sans lever les yeux de sa balance : « Si on me le demande, à l'Échevinage, je dirai ce que j'ai pesé. Devant tout le monde. Il serait temps. »",
    ] },

  // ------------------------------------------------------------------ the goldsmith
  P_faverge: { act: "II", title: "La boutique de l'orfèvre", place: "pont", montrer: "faverge", back: true,
    fx: { clue: ["m_bague_serree", "m_mains_gaspard"] },
    text: [
      { first: true, text: "La boutique de Maître Faverge est si étroite qu'on y entre de côté. Un établi sous la fenêtre, des burins rangés par taille, un petit fourneau, une odeur de cire chaude et de borax. Le vieil orfèvre a une loupe vissée à l'œil, et il ne l'enlève pas pour te parler." },
      { again: true, text: "Maître Faverge, sa loupe, son établi. « Encore des questions ? Pose-les vite, l'or refroidit. »" },
      { first: true, text: "« La bague d'Ombreuil ? C'est moi qui l'ai faite, il y a vingt ans, quand il a été nommé. Or rouge, une balance gravée, la devise autour. Une belle pièce. Il voulait que je l'élargisse depuis deux ans : elle lui mordait le doigt, il ne pouvait plus l'ôter. Je lui disais : ôtez-la, que je la mette sur le mandrin. Il disait qu'il ne pouvait pas, que c'était comme ça, qu'il la garderait jusque dans la tombe. » Il souffle sur son ouvrage. « Il ne croyait pas si bien dire. »" },
      { first: true, text: "« Il avait de belles mains, Ombreuil. Des mains d'essayeur, longues, blanches. Il les soignait comme d'autres leurs chevaux, il les montrait volontiers. Il pesait au grain près, on disait, rien qu'en soupesant. »" },
    ],
    choices: [
      { label: "Lui demander s'il connaissait Théophane Lescot, le second de l'essayeur", hide: { clue: "m_doigt_theo" }, to: "P_faverge_theo" },
    ] },
  P_faverge_theo: { act: "II", title: "Le petit Lescot", place: "pont", montrer: "faverge", back: true,
    fx: { clue: "m_doigt_theo" },
    text: [
      "Maître Faverge enlève enfin sa loupe. Il a un œil plus petit que l'autre, à force.",
      "« Le petit Lescot ? Il a été mon apprenti. De onze à quinze ans. Doué. Les mains un peu tremblantes, il se rongeait les ongles, je le grondais. À quinze ans, il est tombé d'une charrette, la veille de la Saint-Éloi, il s'est cassé le petit doigt de la main droite. Le rebouteux l'a mal remis. Après ça, il ne tenait plus le burin fin. » Il hausse les épaules. « Un orfèvre sans petit doigt, c'est un charpentier. Je l'ai recommandé à Ombreuil, pour l'Essai : là, on pèse, on fond, on écrit des chiffres. Pas besoin de petits doigts pour ça. »",
      "« Un voleur, lui ? » Il remet sa loupe. « Il comptait les pièces de sa paie deux fois pour être sûr qu'on ne lui en avait pas donné une de trop. »",
    ] },
  P_faverge_doigt: { act: "II", title: "Un petit doigt", place: "pont", montrer: "faverge", back: true,
    fx: { clue: "m_doigt_theo" },
    text: [
      "Maître Faverge écoute, puis il enlève sa loupe, lentement, et il la pose sur l'établi, à côté de la bague en cours. Il regarde ses propres mains.",
      "« Les ongles rongés. Et le petit doigt de la main droite, tordu, mal ressoudé. » Il ne te regarde pas. « J'ai eu un apprenti comme ça, autrefois. Le petit Lescot. Il est tombé d'une charrette à quinze ans. »",
      "Il se tait. Il reprend sa loupe, ne la remet pas. Dans la boutique voisine, quelqu'un fait sonner une balance.",
      "« Ombreuil, lui, il avait des mains sans un défaut, dit-il enfin. Sans un défaut. »",
    ] },
  P_faverge_bague: { act: "II", title: "Une bague qui glisse", place: "pont", montrer: "faverge", back: true,
    fx: { clue: "m_bague_serree" },
    text: [
      "« Glissé ? » Maître Faverge pose son burin. « Cette bague-là ? Du doigt d'Ombreuil ? »",
      "Il secoue la tête, deux fois. « Impossible. Elle lui entrait dans la chair. Je l'ai vu essayer de l'enlever au savon, l'hiver dernier, ici, sur ce tabouret : il a fini par saigner, et la bague n'a pas bougé d'un cheveu. Il aurait fallu la scier, ou couper le doigt. »",
      "Il reprend son burin. Sa main tremble un peu, et il attend qu'elle se calme avant de toucher l'or.",
    ] },

  // ------------------------------------------------------------------ the quai des Orfèvres
  O_porte: { act: "II", title: "La porte d'eau", place: "orfevres", back: true,
    fx: { clue: "m_porte_eau" },
    text: [
      { first: true, text: "La porte d'eau de la Maison de l'Essai est une porte basse, ferrée, au ras du quai, par où l'on faisait entrer autrefois le bois et le charbon des fourneaux en barque. Elle ouvre sur trois marches qui descendent dans le canal. Une chaîne la ferme, passée dans deux anneaux et tenue par un cadenas." },
      { again: true, text: "La porte d'eau, ses trois marches, la chaîne et le cadenas." },
      "La chaîne est rouillée sur toute sa longueur, d'un brun sale, écailleux. Sauf trois maillons, au milieu, qui brillent : frottés de frais, comme si on avait tiré dessus il y a peu, fort, et souvent.",
      { fresh: "m_brouette", text: "Dans la vase du quai, juste sous la porte, il y a une trace de roue. Une seule roue, étroite : une brouette. La trace est profonde en descendant vers les marches, comme si elle avait été lourdement chargée, et beaucoup moins profonde en remontant. Les pluies d'automne ne sont pas encore venues ; la vase a tout gardé.",
        else: "Dans la vase du quai, sous la porte, la pluie de la nuit a tout lissé. Il n'y a plus que des flaques, et quelques feuilles mortes." },
    ],
    choices: [
      { label: "Relever la trace de la roue, et sa profondeur", fresh: "m_brouette", hide: { clue: "m_brouette" }, fx: { clue: "m_brouette" }, to: "O_porte_trace" },
    ] },
  O_porte_trace: { act: "II", title: "La trace", place: "orfevres", back: true,
    text: [
      "Tu t'accroupis dans la vase. Tu mesures la largeur de la roue avec ton pouce, la profondeur avec ton doigt. Tu suis la trace de la porte jusqu'à la dernière marche : elle descend droit dans l'eau, s'arrête au bord, puis repart, plus légère, en biais, jusqu'à la porte.",
      "Quelqu'un a sorti de la Maison de l'Essai quelque chose de lourd, par la porte d'eau, de nuit, en brouette. Et l'a laissé au canal.",
      "Au-dessus de toi, le ciel s'est encore assombri. Les premières gouttes tombent sur le quai, larges et espacées.",
    ] },
  O_surpris: { act: "II", title: "Surpris{e}", place: "orfevres",
    fx: { flag: "essai:surpris", regard: { sibylle: "hostile" }, pv: -2 },
    text: [
      "Le cadenas cède avec un bruit qui te semble énorme dans le silence du quai. Tu pousses la porte. Une marche, deux. Et une lumière, en haut de l'escalier intérieur, une servante en chemise de nuit avec une chandelle, qui hurle comme si tu étais le diable en personne.",
      "Tu ressors à reculons, tu glisses sur les marches mouillées, tu te cognes l'épaule contre le chambranle. Le garde de la Monnaie arrive en courant, sa hallebarde en travers. Tu files le long du canal sans demander ton reste.",
      "Demain, toute la Maison de l'Essai saura qu'on a voulu entrer chez la veuve, la nuit. Et elle saura sans doute qui.",
    ],
    choices: [{ label: "T'éloigner dans le noir", to: "H_orfevres" }] },
  O_salle: { act: "II", title: "La salle des essais", place: "orfevres", back: true,
    fx: { clue: ["m_poids", "m_registre"], item: "registre" },
    text: [
      { via: "nuit", text: "Le cadenas cède sans bruit sous ta lame. Tu tires la porte d'eau, tu montes trois marches dans le noir, et tu allumes un bout de chandelle à l'abri de ta main." },
      { via: "P_sibylle", text: "Dame Ombreuil ouvre elle-même la porte de la salle des essais avec une clé qu'elle porte à la ceinture. Elle ne te suit pas à l'intérieur. « Ne touchez à rien qui brûle », dit-elle, et elle referme derrière toi." },
      "La salle des essais est une longue pièce voûtée, au rez-de-chaussée. Un fourneau de briques à soufflet, éteint, froid. Des creusets, des pinces, des coupelles d'os calciné rangées sur une étagère. Une grande table de chêne, impeccable. Et sous un globe de verre, la balance d'essai, si fine qu'on dit qu'elle pèse un cheveu.",
      "Sur la table, rangé au carré, le registre des essais : un gros livre relié de cuir, de la main de l'essayeur. Tu l'ouvres. Une écriture penchée, serrée, régulière, sans une rature. Fonte après fonte, dix ans durant : le nombre d'écus, le titre essayé, *conforme*, la signature. Tu recopies une page, en suivant les lettres de ton mieux.",
      "Dans un coin, contre le mur, un coffret de chêne ouvert, doublé de velours vert : les poids de laiton de l'Essai, du plus petit, pas plus gros qu'une lentille, au plus gros. Il y a un logement vide. Le plus grand, au bout de la rangée : un cube, à en juger par la forme du creux, de la taille d'un poing. Le reste du coffret est poussiéreux. Le logement vide, lui, est propre, et sent le vinaigre.",
      "Le sol de dalles a été lavé. Tout le sol. Il est encore plus propre que la table.",
      { second: true, text: "Sous la table, contre un pied, quelque chose a échappé au seau et à la brosse : un bouton de corne, arraché, avec un bout de fil brun. L'essayeur ne portait que du gris." },
    ] },

  // ------------------------------------------------------------------ the widow
  P_sibylle: { act: "II", title: "Dame Ombreuil", backName: "Dame Ombreuil", montrer: "sibylle", back: true,
    fx: { meet: "sibylle" },
    text: [
      { if: { place: "orfevres" }, text: "Une servante aux yeux rouges te fait entrer dans un salon aux volets clos, où brûlent quatre chandelles, même en plein jour. Au-dessus de la cheminée, un grand portrait : un homme assis, en robe grise, les mains posées sur une balance. Au-dessous, droite sur une chaise à dossier haut, une femme en noir t'attend sans se lever." },
      { if: { place: "haute" }, text: "La chapelle de l'Hôtel-Dieu est froide et sent la cire. Devant l'autel, sur deux tréteaux, une bière fermée sous un drap noir brodé d'argent. Une femme en noir veille, seule, droite sur sa chaise. Elle tourne à peine la tête quand tu t'assieds au bout de son banc." },
      { first: true, text: "Dame Sibylle Ombreuil a quarante-cinq ans, un visage long et pâle, des cheveux blonds tirés en un chignon si serré qu'il lui relève les sourcils. Elle n'a pas pleuré. Elle n'a pas l'air de quelqu'un qui pleure." },
      { regard: { sibylle: "hostile" }, text: "« On a essayé de forcer ma porte d'eau, cette nuit, dit-elle avant que tu aies ouvert la bouche. La servante a vu quelqu'un qui vous ressemblait. Je vous donne le temps de dire ce que vous avez à dire. Ensuite, vous sortez, et vous ne revenez pas. »" },
      { regard: { sibylle: ["neutre", "distant", "mefiant"] }, text: "« Vous travaillez pour la mère du garçon, dit-elle. Je le sais. Tout le monde le sait. Je ne vois pas ce que vous espérez de moi. »" },
      { regard: { sibylle: ["cordial", "craintif"] }, text: "« Encore vous, dit-elle, sans hostilité. Asseyez-vous, puisque vous êtes là. »" },
      { first: true, text: "Tu lui demandes ce qui s'est passé la nuit de la fête." },
      { first: true, text: "« Mon mari est rentré à neuf heures et demie, de la Lanterne Sourde, où il était allé chercher ce garçon pour lui dire ce qu'il pensait de lui. Il était en colère. Il est monté se coucher. J'ai pris mon remède pour dormir, comme chaque soir depuis des années, et je n'ai rien entendu jusqu'au matin. C'est la servante qui m'a réveillée : le guet était en bas. »" },
      { first: true, text: "Elle parle comme on récite. Elle regarde le mur, ou le portrait, ou la bière : pas toi." },
      { again: true, text: "Elle attend que tu parles, les mains croisées sur sa robe noire. Elle ne t'aidera pas à commencer." },
      { first: true, text: "« Il soignait ses mains, vous savez. C'était sa fierté. Des mains d'essayeur. Il disait qu'un essayeur qui a des cals au doigt ne sent plus le poids d'un grain. » Pour la première fois, sa voix bouge. Très peu." },
    ],
    choices: [
      { label: "Lui dire que tu es désolé{e}, et lui laisser le temps", hide: { regard: { sibylle: ["cordial", "craintif", "hostile"] } }, fx: { regard: { sibylle: "cordial" }, clue: ["m_sibylle_nuit", "m_mains_gaspard"] }, to: "P_sibylle_doux" },
      { label: "Lui demander pourquoi elle n'a pas voulu approcher le corps", hide: { seen: "P_sibylle_dur" }, fx: { regard: { sibylle: "mefiant" }, clue: ["m_sibylle_nuit", "m_mains_gaspard"] }, to: "P_sibylle_dur" },
      { label: "Regarder le portrait au-dessus de la cheminée", if: { place: "orfevres" }, hide: { any: [{ not: { place: "orfevres" } }, { clue: "m_portrait" }] }, fx: { clue: "m_portrait" }, to: "P_sibylle_portrait" },
      { label: "Lui demander la permission de voir la salle des essais", regard: { sibylle: "cordial" }, if: { place: "orfevres" }, hide: { any: [{ not: { place: "orfevres" } }, { has: "essai:ouvert" }] }, fx: { flag: "essai:ouvert" }, via: "P_sibylle", to: "O_salle" },
    ] },
  P_sibylle_doux: { act: "II", title: "Dame Ombreuil", montrer: "sibylle", back: true,
    text: [
      "Tu ne dis rien d'autre. Tu restes assis{e}, les mains sur les genoux, et tu attends.",
      "Elle attend aussi. Longtemps. Puis elle dit, sans te regarder : « Vingt-deux ans. J'avais vingt-trois ans quand je l'ai épousé. Il était déjà essayeur-juré. Il était déjà comme ça : exact. Il comptait tout, les bougies, le pain, les mots. Il ne m'a jamais frappée, jamais trompée, jamais menti. » Elle s'arrête sur le dernier mot, comme sur une marche qui manque. « Je crois. »",
      "« Je suis fatiguée. Revenez si vous voulez. Mais je n'ai rien de plus à vous dire. »",
    ] },
  P_sibylle_dur: { act: "II", title: "Dame Ombreuil", montrer: "sibylle", back: true,
    text: [
      "Quelque chose passe sur son visage, et s'en va aussitôt.",
      "« Vous l'avez vu ? Moi, on me l'a montré. Il avait passé la nuit contre les portes d'une écluse. Je l'ai reconnu à son manteau. Je n'avais pas besoin de voir le reste. Je n'ai pas *voulu* voir le reste. Est-ce que c'est un crime, à Orbeval, de ne pas vouloir regarder son mari mort ? »",
      "Elle se lève. L'entretien est fini.",
    ] },
  P_sibylle_portrait: { act: "II", title: "Le portrait", place: "orfevres", montrer: "sibylle", back: true,
    text: [
      "Le portrait est bien peint, par quelqu'un qui savait son métier et qu'on a bien payé. Gaspard Ombreuil y est assis dans un fauteuil à bras, en robe grise d'officier de la Monnaie. Un homme grand, même assis, et un peu voûté, comme les gens qui passent leur vie penchés sur une table. Le front haut, dégarni. Une barbe grise taillée court, carrée. Un grain de beauté sous l'œil gauche, que le peintre n'a pas osé effacer.",
      "Ses mains sont posées sur une balance d'essai, très en lumière, longues, blanches, les ongles en amande. À l'annulaire gauche, une bague d'or rouge. Le peintre a mis plus de soin aux mains qu'au visage.",
      "« Il l'a fait faire pour ses vingt ans de charge, dit Dame Ombreuil derrière toi. Il trouvait que le peintre l'avait vieilli. »",
    ] },
  P_sibylle_mains: { act: "II", title: "Les mains", montrer: "sibylle", back: true,
    fx: { regard: { sibylle: "craintif" }, flag: "sibylle:mains" },
    text: [
      "Tu lui dis ce que tu sais des mains du noyé.",
      "Elle devient blanche. Pas pâle : blanche, d'un coup, comme une chandelle. Ses mains à elle se serrent l'une contre l'autre sur ses genoux.",
      "« Je n'ai pas regardé ses mains. Je vous l'ai dit. Je n'ai rien regardé. » Elle respire. « Il y avait beaucoup de monde dans cette salle, et l'odeur, et la sergente qui me pressait. J'ai vu le manteau. J'ai dit oui. »",
      "Elle se tait, et toi aussi, et dans le silence tu entends sa respiration, courte, comme celle de quelqu'un qui vient de monter un escalier trop vite.",
      "« Allez-vous-en, dit-elle. S'il vous plaît. »",
    ] },
  P_sibylle_aveu: { act: "II", title: "Le lit", montrer: "sibylle", back: true,
    fx: { clue: ["d_coffre", "m_chaine"], flag: "sibylle:aveu", regard: { sibylle: "craintif" } },
    text: [
      "Tu lui dis ce qu'a dit sa fille : le lit qui n'était pas défait, au matin, et qu'elle a refait elle-même.",
      "Elle ne nie pas. Elle ferme les yeux.",
      "« Je n'ai pas pris mon remède, ce soir-là, dit-elle. Je l'ai entendu rentrer, à neuf heures et demie. Je l'ai entendu descendre à la salle des essais, et quelqu'un est venu, plus tard, et il y a eu des voix. Je ne me suis pas levée. On ne descend pas, chez nous, quand il travaille. Vers minuit, j'ai entendu la chaîne de la porte d'eau. Je me suis dit qu'il recevait une livraison de charbon. La nuit de la fête. » Un rire, très bref, sans joie. « Je me suis dit beaucoup de choses. »",
      "« Le matin, le lit n'était pas défait. Et sous l'escalier, il y a un coffre dont il gardait la clé sur lui, toujours, même au bain. Je ne l'avais jamais vu ouvert. Ce matin-là, il était ouvert, et vide. »",
      "Elle ouvre les yeux. « Alors quand on m'a montré un manteau gris au fond d'une salle, j'ai dit oui. Vous comprenez ? Il valait mieux qu'il soit mort. Pour Oriane, pour moi, pour son nom. Il valait mieux être veuve d'un essayeur noyé que femme d'un homme qui part dans la nuit avec un coffre plein. J'ai dit oui sans regarder. Je ne savais pas. Je ne voulais pas savoir. »",
      "« Et maintenant, dit-elle très bas, vous allez me demander qui j'ai enterré. »",
    ] },

  // ------------------------------------------------------------------ the daughter, at home
  P_oriane: { act: "II", title: "Oriane", place: "orfevres", montrer: "oriane", back: true,
    fx: { meet: "oriane" },
    text: [
      { first: true, text: "Oriane Ombreuil te reçoit dans l'escalier, parce que sa mère ne veut personne au salon. Elle a dix-huit ans, des tresses noires, une robe de deuil trop grande, empruntée, qui lui tombe des épaules. Elle s'assied sur une marche, les genoux serrés, et toi deux marches plus bas." },
      { again: true, text: "Oriane s'assied sur sa marche, dans l'escalier, comme la première fois." },
      { regard: { oriane: ["neutre", "distant"] }, text: "« Vous travaillez pour la mère de Hugon. » Elle a dit le prénom, pas le nom. Elle s'en rend compte, et elle rougit, et elle relève le menton. « Je n'ai rien à vous dire. »" },
      { regard: { oriane: ["cordial", "allie"] }, text: "« Vous l'avez vu ? dit-elle tout de suite. Comment il va ? Est-ce qu'il mange ? »" },
    ],
    choices: [
      { label: "Lui dire que Hugon ne dit rien, à personne, même pas à sa mère", hide: { any: [{ seen: "P_oriane_parle" }, { regard: { oriane: ["cordial", "allie"] } }] }, fx: { regard: { oriane: "cordial" } }, to: "P_oriane_parle" },
      { label: "Lui demander ce qu'elle a entendu, la nuit de la fête", regard: { oriane: ["cordial", "allie"] }, hide: { clue: "m_voix" }, fx: { clue: "m_voix" }, to: "P_oriane_nuit" },
      { label: "Lui demander comment était la maison, le matin", regard: { oriane: ["cordial", "allie"] }, hide: { any: [{ clue: "m_lit" }, { not: { clue: "m_voix" } }] }, fx: { clue: "m_lit" }, to: "P_oriane_matin" },
    ] },
  P_oriane_parle: { act: "II", title: "Oriane", place: "orfevres", montrer: "oriane", back: true,
    text: [
      "Elle baisse la tête. Ses doigts tirent sur un fil de sa manche.",
      "« Il ne dira rien. Il est comme ça. Quand il a peur, il se tait, et plus il a peur, plus il se tait. » Elle tire le fil, qui casse. « Mon père disait que c'était un sournois. Ce n'est pas un sournois. C'est quelqu'un qui n'a jamais eu le droit de parler, alors il ne sait pas. »",
      "« On devait partir, dit-elle tout à coup, très vite, comme on saute dans l'eau froide. La nuit de la fête. Tous les deux. À Basse-Aune, et plus loin. Il avait une place sur une barge de sel. Je devais le retrouver au pont des Lavandières, à une heure. »",
      "Elle relève les yeux. « Et il n'est pas venu. Pas à une heure. »",
    ],
    choices: [{ back: "P_oriane" }] },
  P_oriane_nuit: { act: "II", title: "Les voix", place: "orfevres", montrer: "oriane",
    text: [
      "« Je faisais mon sac, dans ma chambre. À dix heures, j'ai entendu père en bas, dans la salle des essais. Il se disputait avec un homme. Des voix d'hommes, fortes ; pas les mots. Ça a duré, je ne sais pas, le temps de plier deux robes. Puis plus rien. Rien du tout. »",
      "Elle se mord la lèvre.",
      "« J'ai cru que c'était Hugon. Qu'il était venu lui parler de moi, malgré la gifle, malgré tout. Il est assez bête pour ça. J'ai eu tellement peur que je n'ai pas osé descendre. À minuit et demie, je suis sortie par la grande porte, sans bruit. La salle des essais était noire. »",
    ],
    choices: [{ back: "P_oriane" }] },
  P_oriane_matin: { act: "II", title: "Le matin", place: "orfevres", montrer: "oriane",
    text: [
      "Oriane réfléchit, les sourcils froncés.",
      "« Je suis rentrée à quatre heures, par la porte de la cuisine. Personne n'avait rien vu. Je me suis couchée. Au matin, la servante criait dans l'escalier, le guet était en bas. Je suis passée devant la chambre de mes parents. » Elle hésite. « Le lit de père n'était pas défait. Les draps tirés, le traversin bien droit. Et mère était dedans, à genoux sur le lit, à refaire le pli du drap, comme si ça avait de l'importance. Elle ne fait jamais les lits. Jamais. Nous avons une servante pour ça. »",
      "« Je n'y ai pas pensé, sur le moment. On pense à des choses bêtes, ces matins-là. »",
    ],
    choices: [{ back: "P_oriane" }] },
  P_oriane_heure: { act: "II", title: "Une heure et demie", montrer: "oriane", back: true,
    fx: { clue: "m_oriane_vu", regard: { oriane: "allie" } },
    text: [
      "Tu lui dis ce que tu as appris : qu'à une heure, le noyé était déjà dans l'écluse.",
      "Elle te regarde comme si tu venais de parler une langue étrangère.",
      "« C'est impossible, dit-elle. C'est impossible, parce qu'à une heure et demie je l'ai vu. Mon père. Du pont des Lavandières, où j'attendais Hugon. Il a traversé le quai des Tanneurs, de l'autre côté du canal, sous la lanterne de la rue des Cuves. Sa capuche grise, sa démarche, voûté, les mains dans les manches. Il venait de chez la mère Garnaude. Il ne m'a pas vue : je me suis cachée derrière la pile du pont. »",
      "« Hugon est arrivé à deux heures, trempé jusqu'aux genoux, blanc comme un linge. Il n'a rien voulu dire. Rien. Et le matin, on a trouvé père dans l'écluse, et Hugon avait sa bague. » Sa voix se casse. « Alors j'ai cru que… entre une heure et demie et deux heures… J'ai cru que Hugon l'avait suivi, et… »",
      "Elle se tait. Elle te regarde. Et tu vois dans ses yeux qu'elle compte, elle aussi, les heures, et qu'elle n'arrive pas au bout du compte.",
    ] },
  P_oriane_voix: { act: "II", title: "Dix heures", montrer: "oriane", back: true,
    fx: { regard: { oriane: "allie" }, flag: "oriane:soulagee" },
    text: [
      "Tu lui dis où était Hugon à dix heures : à la Lanterne Sourde, à perdre trois sous à la Chandelle contre une vieille changeuse qui s'en souvient très bien.",
      "Oriane ne dit rien. Elle porte la main à sa bouche. Puis elle se met à pleurer, sans bruit, sans se cacher, les yeux grands ouverts, comme quelqu'un qui pose enfin un fardeau qu'il portait sans le savoir.",
      "« Ce n'était pas lui, dit-elle. Dans la salle des essais. Ce n'était pas lui. »",
      "Elle s'essuie le visage d'un revers de manche. « Alors qui ? »",
    ] },
  P_oriane_lettre: { act: "II", title: "Une écriture", montrer: "oriane", back: true,
    text: [
      "Oriane prend la lettre d'adieu, la lit, une fois, deux fois. Elle fronce les sourcils.",
      "« Théophane écrivait comme un écolier, dit-elle lentement. Tout rond, tout droit, en appuyant. Il me faisait ses comptes de couture quand j'étais petite, avec des lettres comme des pommes. Ça… ça penche. Ça serre. On dirait… »",
      "Elle s'arrête. Elle te rend la lettre, vite, comme si elle brûlait.",
      "« Non. Rien. Je ne sais pas. Les gens écrivent autrement quand ils ont peur. »",
    ] },

  // ------------------------------------------------------------------ the master of the Mint
  P_malestroit: { act: "II", title: "Le maître de la Monnaie", backName: "Malestroit", montrer: "malestroit", back: true,
    fx: { meet: "malestroit", clue: "r_malestroit_dit" },
    text: [
      { if: { place: "orfevres" }, text: "On te fait attendre une heure dans un vestibule de pierre nue, entre deux gardes qui ne te regardent pas. Puis on t'introduit dans un bureau aux murs couverts de registres, où un homme d'une cinquantaine d'années signe des papiers sans s'arrêter." },
      { if: { place: "haute" }, text: "À l'Échevinage, tu attrapes Malestroit entre deux portes, dans une galerie où des clercs courent avec des liasses. Il s'arrête, parce qu'il y a du monde et qu'un homme qui va être réélu ne bouscule personne en public." },
      { first: true, text: "Évrard Malestroit a des cheveux noirs, sans doute teints, une moustache impeccable, un visage carré, rasé de frais, et la voix d'un homme qui n'a pas dû hausser le ton depuis vingt ans, parce qu'il n'en a jamais eu besoin." },
      { regard: { malestroit: "hostile" }, text: "« Vous, dit-il. Je vous ai déjà dit de sortir. Je ne le dirai pas une troisième fois : la prochaine fois, ce seront mes gens. »" },
      { first: true, regard: { malestroit: ["neutre", "mefiant", "distant"] }, text: "« La mère de l'assassin a engagé quelqu'un, dit-il sans lever les yeux. C'est touchant. Que voulez-vous ? »" },
      { again: true, regard: { malestroit: ["neutre", "mefiant", "distant", "cordial"] }, text: "Malestroit ne lève pas les yeux de ses papiers. « Encore vous. Vous avez le temps que je mets à signer ceci. »" },
      { first: true, text: "Tu lui demandes où il était la nuit de la fête." },
      { first: true, text: "Il lève enfin les yeux, et il sourit, sans plaisir. « Au banquet des échevins, comme chaque année. Toute la nuit, jusqu'à une heure du matin. Cent personnes vous le diront, dont l'échevin qui jugera votre batelier. » Il reprend sa plume. « Gaspard Ombreuil était le plus honnête homme de cette Monnaie. Il a été tué par un voyou parce qu'il défendait sa fille. Son second était un voleur qui a pris la fuite, et la Monnaie portera plainte contre lui s'il reparaît. Voilà toute l'affaire. Elle sera close après-demain. »" },
    ] },
  P_malestroit_soir: { act: "II", title: "L'hôtel Malestroit", place: "haute", montrer: "malestroit", back: true,
    text: [
      "Un valet en livrée t'ouvre, te regarde, referme la porte, et la rouvre dix minutes plus tard. Malestroit te reçoit dans une bibliothèque où brûle un grand feu. Il est en robe de chambre, un verre à la main, et il a l'air beaucoup plus vieux que le matin.",
      { regard: { malestroit: "hostile" }, text: "« Je devrais vous faire jeter dans la rue, dit-il. Je ne le fais pas. Demandez-vous pourquoi. »" },
      "« Vous avez parlé à Brisson, dit-il. Brisson parle à tout le monde. Il est venu me voir aussi, cet après-midi, pour me dire ce qu'il savait. Il a l'air de croire que cela me fera retirer ma candidature. » Il boit. « Asseyez-vous. »",
    ] },
  P_malestroit_aveu: { act: "II", title: "Onze heures", montrer: "malestroit", back: true,
    fx: { flag: "r:aveu", clue: ["r_lumiere", "r_bourse", "d_note_theo"], item: "note_theo" },
    text: [
      "Tu lui dis ce qu'a vu Brisson : le banquet quitté avant onze heures, le retour vers minuit, les souliers mouillés.",
      "Malestroit ne nie pas. Il te regarde longtemps, comme on évalue un adversaire au jeu de dames, et il décide que tu n'en vaux pas la peine, ou que la partie est perdue de toute façon.",
      "« Lescot m'a fait porter un billet, la veille de la fête. » Il sort de son pourpoint un petit papier plié, usé aux pliures, et te le met dans la main. « Lisez. Je sais d'où vient l'argent qui manque. Onze heures, à la Monnaie. Je suis allé au rendez-vous. Avec cent écus, dans une bourse. »",
      "« Oui. Pour qu'il se taise. Je savais depuis un an que les écus étaient légers. Je savais qu'on volait à la fonte. Je ne savais pas qui. Je ne voulais pas le savoir, pas avant les élections : un maître de la Monnaie sous qui l'on a volé dix ans n'est pas réélu, on le pend en effigie. J'aurais fait ce qu'il fallait, après. » Il hausse les épaules. « Cela vous dégoûte. Vous n'avez jamais été réélu{e}. »",
      "« Il n'est jamais venu. J'ai attendu une demi-heure dans la cour de la Monnaie, avec ma bourse, comme un imbécile. À onze heures et quart, il y avait de la lumière en face, à la Maison de l'Essai, au rez-de-chaussée, dans la salle des essais. Elle s'est éteinte un peu après. J'ai cru que Lescot était là-bas, chez son maître, à se donner du courage, ou à se faire acheter par un autre. Je suis rentré au banquet. J'avais marché dans le caniveau. »",
      "Il reprend le billet, hésite, et te le tend. « Gardez-le. Je ne veux plus le voir. Et si vous le montrez aux échevins, dites-leur que je l'ai donné de moi-même. Cela comptera peut-être, à la fin. »",
    ] },
  P_malestroit_ecus: { act: "II", title: "La porte", montrer: "malestroit", back: true,
    fx: { regard: { malestroit: "hostile" }, flag: "malestroit:menace", pv: -2 },
    text: [
      "Malestroit lit. Rien ne bouge sur son visage, sauf un petit muscle, au coin de la mâchoire, qui se serre et se desserre.",
      "« Qui vous a donné ça ? » Il n'attend pas la réponse. Il sonne. Deux hommes entrent, plus grands que les gardes de la porte, sans livrée.",
      "« Raccompagnez. »",
      "Ils te raccompagnent. Dans l'escalier, l'un d'eux te pousse, et tu rates trois marches. En bas, sur le quai, l'autre te dit à l'oreille, gentiment, que l'eau des canaux est froide en cette saison, et que des gens y tombent tous les jours.",
    ] },
  P_malestroit_manche: { act: "II", title: "Du sang", montrer: "malestroit", back: true,
    text: [
      "Pour la première fois, Malestroit rit. Un vrai rire, bref, presque joyeux.",
      "« Du sang sur ma manche ? Du vin. Du vin de Bourgonne, renversé sur moi par l'échevin Brisson, qui me déteste et qui tient mal son verre. C'est lui qui le raconte partout, j'imagine ? Il raconte qu'il a vu le diable, aussi, une fois, derrière l'Échevinage. Demandez-lui. »",
    ] },
};
