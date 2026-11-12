// Les Vannes de Vaudrenne · the passages. Act I: the upper town, five places in any order, until midnight. Act II:
// the lock, the bailli's men, the winch room (a rendezvous: `charniere`), the choice of the gates (`monde`), dawn.
var HUB = "V_place";
module.exports = {
  // ---------------------------------------------------------------- act I · the upper town
  V_arrivee: { act: "I", title: "Le bac ne passe plus", place: "vaudrenne",
    text: [
      "L'Aune a la couleur du café au lait et la voix d'une foule. Elle a mangé l'appontement du bac, les deux premières marches du quai et la moitié d'un saule dont la tête dépasse encore, comme celle d'un homme qui se noie sans se presser. L'homme du bac a attaché sa barque à un anneau de fer très haut dans le mur, et il la regarde comme on regarde un cheval qu'on va devoir abattre.",
      "« Pas ce soir, dit-il. Ni demain. Allez à l'Anguille, sur la place. Mahaut vous trouvera une paillasse. »",
      "Vaudrenne monte en escaliers depuis la rivière : en bas le Bas-Port, ses tanneries, son odeur d'écorce et de chaux ; en haut la ville des meuniers, ses toits d'ardoise, son clocher, et les trois grandes roues des moulins qui ne tournent plus, bloquées par l'eau trop haute. Entre les deux, au milieu du courant, l'écluse : une digue de pierre noire, deux tours trapues, et les vannes hautes, fermées.",
      "Il pleut. Il pleut depuis trois jours, dit-on, et personne ne sait plus très bien à quoi ressemblait le ciel avant.",
    ],
    choices: [{ label: "Monter vers la place", to: HUB }] },

  V_place: { act: "I", title: "La place du Marché", place: "vaudrenne",
    text: [
      { if: { not: { seen: "V_auberge" } }, text: "La place est vide, sauf d'eau. Les auvents du marché dégouttent sur des tréteaux nus. À l'enseigne de l'Anguille, un poisson de fer blanc grince au bout de sa chaîne." },
      { if: { seen: "V_auberge" }, text: "La place, encore. Le poisson de fer de l'Anguille grince. La pluie n'a pas changé d'avis." },
      "D'ici on voit tout : la chapelle des Noyés à l'angle, ses murs verts de mousse ; la maison de l'éclusier, au bout du quai haut, volets clos ; l'hôtel du bailli, la seule façade de la place qui ait des vitres à chaque fenêtre ; et l'escalier des Tanneurs, qui plonge vers le Bas-Port.",
      { if: { has: "monde:cle_bailli" }, text: "Une lanterne verte brûle au balcon du bailli. Quelqu'un, dit-on, lui a porté la clé des vannes." },
      { if: { has: "monde:cle_gardee" }, text: "Sous les auvents, on chuchote qu'un des voyageurs a trouvé la clé des vannes et ne l'a rendue à personne." },
      "La cloche sonne neuf heures. Minuit à l'écluse, avait dit l'homme du bac : c'est l'heure où l'on décide, quand l'Aune monte.",
    ],
    choices: [
      { label: "Entrer à l'Anguille", to: "V_auberge" },
      { label: "Aller à la maison de l'éclusier", to: "V_eclusier", hide: { seen: "V_eclusier_cle" } },
      { label: "Entrer dans la chapelle des Noyés", to: "V_chapelle" },
      { label: "Descendre l'escalier des Tanneurs vers le Bas-Port", to: "V_quai" },
      { label: "Frapper à l'hôtel du bailli", to: "V_bailli", hide: { seen: "V_bailli" } },
      { label: "Il est presque minuit : descendre à l'écluse", to: "V_minuit", exit: true, big: true },
    ] },

  V_auberge: { act: "I", title: "L'Anguille", place: "vaudrenne", shop: "anguille",
    text: [
      "Une salle basse, des poutres noires, un feu qui fume parce que le vent rabat dans la cheminée. Des meuniers en tablier blanc à une table, des tanneurs aux mains brunes à une autre, et entre les deux un espace vide que personne ne traverse.",
      "Mahaut est une femme sèche aux cheveux tirés, qui pose les bols sans les cogner et rend la monnaie sans la compter. « Paillasse au grenier, soupe, pain. Pour le reste, on verra. Vous êtes au moins le troisième étranger de la soirée. »",
      { if: { seen: "V_bailli" }, text: "Elle jette un coup d'œil à ton manteau, sur lequel la pluie n'a pas encore séché depuis l'hôtel du bailli, et ne dit rien. Ça se voit, qu'elle ne dit rien." },
    ],
    choices: [
      { label: "Demander à Mahaut où est passé l'éclusier", to: "V_auberge_joss", hide: { seen: "V_auberge_joss" } },
      { label: "T'asseoir à la table des meuniers", to: "V_auberge_meuniers", hide: { seen: "V_auberge_meuniers" } },
      { back: HUB },
    ] },
  V_auberge_joss: { act: "I", title: "Ce que Mahaut a vu", place: "vaudrenne",
    text: [
      "Mahaut essuie un bol qui n'en a pas besoin. « Joss ? Personne ne l'a vu depuis avant-hier. Il est monté chez le bailli, le soir. Une dispute, il a dit, en buvant son vin debout. Il avait sa tête des jours de crue, celle où il ne parle à personne qu'à la rivière. »",
      "« Il n'est pas redescendu ? »",
      "« Pas par la place. » Elle repose le bol. « L'hôtel a deux portes, et des caves qui datent du temps où la chapelle avait des chanoines. Moi je dis ça. Je sers la soupe. »",
    ],
    choices: [{ label: "Hocher la tête", fx: { clue: "e_vu", ep: ["perso", 300] }, to: "V_auberge" }] },
  V_auberge_meuniers: { act: "I", title: "La table des meuniers", place: "vaudrenne",
    text: [
      "Ils sont trois, farinés jusqu'aux sourcils même un jour où les roues ne tournent pas. Le plus vieux te fait place sur le banc sans te regarder.",
      "« Les moulins sont au bailli, maintenant, dit le plus jeune, avec une rancune qu'il n'arrive pas à cacher. Il les a rachetés l'an dernier, quand les grains ont gelé, pour une bouchée de pain. Les prés autour aussi. Nous, on tourne les meules pour lui. »",
      "Le vieux lui donne un coup de coude. Le jeune hausse les épaules et boit.",
    ],
    choices: [
      { label: "Lui demander ce que ferait le bailli si l'eau montait encore", test: { dom: "social", diff: -10, label: "Social" },
        win: { fx: { clue: "b_moulins", ep: ["perso", 400] }, to: "V_auberge_meuniers_ok" }, lose: { fx: { clue: "b_moulins" }, to: "V_auberge_meuniers_ko" } },
    ] },
  V_auberge_meuniers_ok: { act: "I", title: "Les prés qui boivent", place: "vaudrenne",
    text: [
      "Le jeune baisse la voix. « Quand l'Aune monte, on ouvre les vannes hautes, et l'eau part dans les prés du Haut. Les prés boivent, les moulins chôment un mois. C'est comme ça depuis toujours. » Il regarde son bol. « Seulement, les prés et les moulins, maintenant, c'est à lui. Si on n'ouvre pas, l'eau prend l'autre chemin. »",
      "Il n'a pas besoin de dire lequel. À l'autre table, un tanneur s'est arrêté de manger.",
    ],
    choices: [{ label: "Le remercier et te lever", to: "V_auberge" }] },
  V_auberge_meuniers_ko: { act: "I", title: "Un banc trop étroit", place: "vaudrenne",
    text: [
      "Tu poses ta question trop tôt, ou trop fort. Le vieux repose son bol. « Le bailli fera ce qu'il voudra, étranger. C'est à lui, maintenant, les moulins, et les prés, et nous avec. » Le jeune ne relève pas les yeux, et tu comprends que la conversation est finie.",
    ],
    choices: [{ label: "Te lever", to: "V_auberge" }] },

  V_eclusier: { act: "I", title: "La maison de l'éclusier", place: "vaudrenne",
    text: [
      "Une maison étroite, collée contre la tour nord de l'écluse comme un enfant contre sa mère. Les volets sont clos. Sur la porte, la marque de la crue de l'An Gris, peinte en rouge, est plus haute que le linteau.",
      "Personne ne répond. La porte tient par un loquet et une serrure qui a connu de meilleures années.",
    ],
    choices: [
      { label: "Forcer la serrure", test: { dom: "discretion", diff: 0, label: "Discrétion" },
        win: { fx: { ep: ["perso", 300] }, to: "V_eclusier_dedans" }, lose: { to: "V_eclusier_epaule" } },
      { label: "Enfoncer la porte d'un coup d'épaule", test: { dom: "combat", diff: -10, label: "Combat" },
        win: { to: "V_eclusier_dedans" }, lose: { fx: { pv: -2 }, to: "V_eclusier_epaule" } },
      { back: HUB },
    ] },
  V_eclusier_epaule: { act: "I", title: "Une porte têtue", place: "vaudrenne",
    text: [
      "La porte ne cède pas. Mais en faisant le tour, tu trouves, côté rivière, une fenêtre dont le volet bat au vent. Tu passes la jambe, puis le reste, et tu tombes dans une cuisine froide en renversant un seau.",
    ],
    choices: [{ label: "Te relever", to: "V_eclusier_dedans" }] },
  V_eclusier_dedans: { act: "I", title: "Chez Joss", place: "vaudrenne",
    text: [
      "Une pièce nue : un lit fait au carré, une table, une chaise, un poêle éteint. Au mur, des clés pendues à des clous, chacune avec une étiquette de bois. Une seule manque : la plus grande, celle dont le clou porte, gravé au couteau, *vannes hautes*.",
      "Sur la table, ouvert, le registre de l'écluse. La dernière page est de la main de Joss, une écriture penchée, appuyée, qui troue presque le papier.",
    ],
    choices: [
      { label: "Lire le registre", fx: { clue: "e_registre", ep: ["perso", 300] }, to: "V_eclusier_registre", hide: { seen: "V_eclusier_registre" } },
      { label: "Chercher la grande clé", to: "V_eclusier_cle", hide: { any: [{ seen: "V_eclusier_cle" }, { has: "monde:cle_bailli" }, { has: "monde:cle_gardee" }] } },
      { back: HUB },
    ] },
  V_eclusier_registre: { act: "I", title: "Le registre de l'écluse", place: "vaudrenne",
    text: [
      "Des colonnes de chiffres : la hauteur de l'eau, matin et soir, depuis trente ans. Les trois derniers jours, les chiffres grimpent comme une fièvre.",
      "Puis, en travers de la colonne, sans date : *Ordre de M. le bailli, tenir les vannes hautes fermées quoi qu'il monte. Refusé.* Le mot *refusé* est souligné deux fois.",
      "Et en dessous, d'une autre encre, plus petite, presque timide : *Si je ne reviens pas, la clé est où Lise la cachait.*",
    ],
    choices: [{ label: "Refermer le registre", to: "V_eclusier_dedans" }] },
  V_eclusier_cle: { act: "I", title: "Où Lise la cachait", place: "vaudrenne",
    text: [
      "Tu ne sais pas qui est Lise. Mais la maison est petite, et il n'y a pas tant d'endroits où une femme cache quelque chose dans une maison d'homme seul. Tu cherches sous le lit, dans le poêle, derrière les clés. Rien.",
      "C'est la chaise qui te trahit : son pied gauche est plus clair que les autres, plus récent. Il se dévisse. Dedans, roulée dans un chiffon huilé, une clé de fer longue comme ton avant-bras.",
      { if: { has: "e_registre" }, text: "Tu repenses au mot souligné deux fois." },
      "Dehors, la cloche sonne dix heures. Cette clé ouvre le treuil des vannes hautes. Celui qui l'a choisira, à minuit, où ira l'eau. Ou du moins, il aura son mot à dire.",
    ],
    choices: [
      { label: "Garder la clé pour toi et pour les autres voyageurs", monde: "cle", option: "gardee", fx: { flag: "monde:cle_gardee", ep: ["perso", 300] }, to: "V_eclusier_garde", big: true },
      { label: "La porter au bailli : c'est à la ville de décider", monde: "cle", option: "bailli", fx: { flag: "monde:cle_bailli", gold: 10 }, to: "V_eclusier_bailli", big: true },
    ] },
  V_eclusier_garde: { act: "I", title: "Le poids d'une clé", place: "vaudrenne",
    text: [
      "Tu la glisses sous ton manteau. Elle pèse plus lourd qu'une clé ne devrait peser.",
      "En refermant la porte derrière toi, tu vois une ombre s'écarter du coin de la tour, un homme en cape de pluie qui s'éloigne à grands pas vers la place. Il ne court pas. Il n'en a pas besoin : il sait où il va.",
    ],
    choices: [{ back: HUB }] },
  V_eclusier_bailli: { act: "I", title: "Une clé bien reçue", place: "vaudrenne",
    text: [
      "L'hôtel du bailli s'ouvre avant que tu aies frappé. Un valet prend la clé dans un mouchoir, comme une chose sale, et revient avec une petite bourse. « M. le bailli vous remercie. La ville vous remercie. »",
      "La porte se referme. À une fenêtre de l'étage, un rideau retombe.",
    ],
    choices: [{ back: HUB }] },

  V_chapelle: { act: "I", title: "La chapelle des Noyés", place: "vaudrenne",
    text: [
      "Il fait plus froid dedans que dehors. Pas de saints, pas d'autel doré : un seul mur couvert de noms, du sol jusqu'à hauteur d'homme, et devant ce mur une vieille femme qui change les chandelles une par une, avec une patience de rivière.",
      "« L'An Gris, dit-elle sans se retourner. Il y a quarante et un ans. Deux cent dix-sept noms. J'avais neuf ans, j'étais sur le toit de la tannerie avec mon père. C'est moi qui les ai gravés, plus tard, quand j'ai eu la main assez sûre. »",
      "Elle s'appelle Ermengarde. Elle a des yeux de quelqu'un qui a beaucoup regardé l'eau.",
    ],
    choices: [
      { label: "Lire ce qui est gravé sous les noms", fx: { clue: "b_regle", ep: ["perso", 300] }, to: "V_chapelle_regle", hide: { seen: "V_chapelle_regle" } },
      { label: "Lui demander ce qu'il y a sous la chapelle", to: "V_crypte", hide: { seen: "V_crypte" } },
      { back: HUB },
    ] },
  V_chapelle_regle: { act: "I", title: "Les prés boivent, le port vit", place: "vaudrenne",
    text: [
      "Sous le dernier nom, en lettres plus grandes et moins belles, comme si on les avait gravées en colère :",
      "*LES PRÉS BOIVENT, LE PORT VIT. QUAND L'AUNE MONTE, ON OUVRE LES VANNES HAUTES.*",
      "« Cette année-là, dit Ermengarde, le bailli d'alors avait des blés dans les prés du Haut. Il a fait tenir les vannes fermées. » Elle allume une chandelle à une autre. « Les blés ont été sauvés. Très beaux, ces blés. »",
    ],
    choices: [{ label: "Rester un moment devant le mur", to: "V_chapelle" }] },
  V_crypte: { act: "I", title: "La crypte des chanoines", place: "vaudrenne",
    text: [
      "Ermengarde te regarde longtemps. Puis elle décroche une lanterne. « Il y avait des chanoines, avant. Ils avaient des caves. Les caves allaient loin. On les a murées, du côté de la ville, il y a cent ans. Murées, à ce qu'on dit. »",
      "L'escalier tourne sur lui-même, glissant, et finit dans une salle basse où dorment trois tombeaux sans nom. Au fond, une arche, et derrière l'arche un couloir voûté qui monte vers la ville haute. Le mur qui le fermait est tombé, ou on l'a fait tomber. La poussière du sol est fraîchement remuée.",
    ],
    choices: [
      { label: "Examiner le couloir", test: { dom: "nature", diff: 0, label: "Nature" },
        win: { fx: { clue: "e_crypte", ep: ["perso", 400] }, to: "V_couloir" }, lose: { to: "V_couloir" } },
      { label: "Remonter : ce n'est pas ton affaire", back: "V_chapelle" },
    ] },
  V_couloir: { act: "I", title: "Le couloir sous la ville", place: "vaudrenne",
    text: [
      { if: { clue: "e_crypte" }, text: "À trois pas de l'arche, une chandelle de suif blanc, à moitié consumée. Pas de la chandelle d'église : de celle qu'on brûle chez les riches." },
      "Tu montes longtemps, courbé, dans une odeur de cave et de vieux vin. Le couloir finit contre une porte de chêne bardée de fer, avec un judas. Derrière, une respiration. Puis une voix éraillée, très calme :",
      "« Si c'est encore Ravel avec sa soupe, je ne mange pas. Si c'est quelqu'un d'autre, la barre est de votre côté. »",
      { if: { has: "monde:joss_libre" }, text: "Mais la barre est déjà levée, la porte entrouverte, et il n'y a plus personne derrière : quelqu'un est passé avant toi." },
    ],
    choices: [
      { label: "Lever la barre et libérer l'homme", monde: "joss", option: "libre", hide: { has: "monde:joss_libre" }, fx: { flag: "monde:joss_libre", ep: ["seance", 1000] }, to: "V_joss", big: true },
      { label: "Le laisser là pour l'instant : le bailli ne doit pas savoir qu'on sait", monde: "joss", option: "laisse", hide: { has: "monde:joss_libre" }, fx: { flag: "monde:joss_laisse" }, to: "V_chapelle", big: true },
      { if: { has: "monde:joss_libre" }, back: "V_chapelle" },
    ] },
  V_joss: { act: "I", title: "Joss Ferrand", place: "vaudrenne",
    text: [
      "Il sort en clignant des yeux, un homme large et gris, les poignets marqués par une corde qu'on a retirée hier. Il sent la cave et la colère froide.",
      "« Joss Ferrand, éclusier. Le bailli voulait que je tienne les vannes fermées. J'ai dit non. Il m'a dit que j'avais besoin de repos. » Il fait jouer ses épaules. « Deux jours de repos. Ça monte de combien, dehors ? »",
      "Tu lui dis. Il ferme les yeux une seconde, comme s'il comptait. « Alors à minuit, ce sera trop tard pour le Bas-Port, si personne n'ouvre. J'y serai. Avec ou sans ma clé. »",
    ],
    choices: [{ label: "Remonter avec lui par la chapelle", back: HUB }] },

  V_quai: { act: "I", title: "Le Bas-Port", place: "vaudrenne",
    text: [
      "L'escalier des Tanneurs descend entre deux murs qui suintent, et en bas l'eau est déjà dans les rues : à la cheville, puis au mollet. Les maisons du Bas-Port ont des portes hautes et des seuils de pierre, et ce soir on empile des sacs de sable sur les seuils, à la lueur des torches, en silence.",
      "Une fille d'une quinzaine d'années traîne un sac plus lourd qu'elle. Ses mains sont brunes jusqu'aux poignets, tannées comme du cuir. « Vous êtes du bac ? Alors vous ne servez à rien, dit-elle sans méchanceté. Sauf si vous portez des sacs. »",
      { if: { has: "monde:basport_prevenu" }, text: "Plus loin, des gens s'en vont déjà, un baluchon sur l'épaule, vers l'escalier : quelqu'un est passé les prévenir de ce qui se prépare." },
    ],
    choices: [
      { label: "Porter des sacs avec elle", test: { dom: "nature", diff: 0, label: "Nature" },
        win: { fx: { ep: ["perso", 400], conf: {} }, to: "V_quai_sacs" }, lose: { fx: { pv: -2 }, to: "V_quai_sacs" }, hide: { seen: "V_quai_sacs" } },
      { label: "Lui demander où est son père", to: "V_bastien", hide: { seen: "V_bastien" } },
      { back: HUB },
    ] },
  V_quai_sacs: { act: "I", title: "Les sacs", place: "vaudrenne",
    text: [
      "Une heure de sacs. Le sable mouillé pèse comme du plomb, le jute te scie les doigts, l'eau entre dans tes bottes et n'en ressort plus. La fille s'appelle Ninon. Elle ne parle pas en travaillant, et toi non plus.",
      "Quand vous vous arrêtez enfin, adossés au mur d'une tannerie, elle te montre du menton une encoche peinte en rouge au-dessus de vos têtes. « L'An Gris. Ma grand-mère était sur le toit. » Elle regarde l'eau à vos pieds. « Ils disent qu'on ne reverra jamais ça. Ils disaient pareil hier. »",
    ],
    choices: [{ label: "Regarder l'encoche", fx: { clue: "b_niveau" }, to: "V_quai" }] },
  V_bastien: { act: "I", title: "Bastien", place: "vaudrenne",
    text: [
      "Son père est sur le seuil de la tannerie, un homme épais aux bras nus malgré le froid, qui empile les sacs avec une régularité de maçon. Il ne s'arrête pas pour te parler.",
      "« Le bailli a fait crier qu'on monte à la ville haute, cette nuit, au cas où. Au cas où quoi ? Il ne l'a pas dit. » Un sac. « J'ai vingt peaux dans les cuves, la maison de mon père, et une fille. Je ne monte nulle part tant que l'éclusier ne m'a pas dit de monter. Et l'éclusier, personne ne l'a vu. »",
    ],
    choices: [
      { label: "Lui dire ce que tu sais, et le convaincre d'évacuer le quartier", if: { any: [{ clue: "e_registre" }, { clue: "b_moulins" }, { clue: "e_vu" }] }, why: "Tu ne sais encore rien qui puisse le convaincre.",
        test: { dom: "social", diff: -10, label: "Social" },
        win: { fx: { flag: "monde:basport_prevenu", ep: ["seance", 800] }, to: "V_bastien_ok" }, lose: { to: "V_bastien_ko" } },
      { label: "Le laisser à ses sacs", to: "V_quai" },
    ] },
  V_bastien_ok: { act: "I", title: "On monte", place: "vaudrenne",
    text: [
      "Tu parles du registre, des moulins, de la dispute chez le bailli. Bastien pose son sac. Il regarde sa fille, puis l'eau, puis l'escalier.",
      "« Ninon. Va chez les Aubry, chez la veuve Pâris, chez tout le monde. Dis-leur de prendre les petits et les vieux et de monter à la chapelle. » Il se tourne vers toi. « Les hommes restent. Si quelqu'un doit ouvrir ces vannes cette nuit, il aura besoin de bras. »",
    ],
    choices: [{ back: HUB }] },
  V_bastien_ko: { act: "I", title: "Un homme sur son seuil", place: "vaudrenne",
    text: [
      "Il t'écoute jusqu'au bout, puis reprend ses sacs. « Des on-dit d'auberge, étranger. Moi j'ai des peaux dans les cuves. »",
    ],
    choices: [{ label: "Le laisser", to: "V_quai" }] },

  V_bailli: { act: "I", title: "L'hôtel du bailli", place: "vaudrenne",
    text: [
      "Un valet t'ouvre, te débarrasse de ton manteau mouillé avec deux doigts et te fait attendre dans une antichambre où tout brille : le parquet, les chandeliers, les boutons de la livrée. Puis on t'introduit.",
      "Guérand Morel est un homme rond et soigné, aux gants de peau fine qu'il ne retire pas pour écrire. Il a une voix douce, de celles qui n'ont jamais eu besoin de crier. « Un voyageur. Bloqué par l'Aune, comme tous les ans. Asseyez-vous. »",
      "« J'ai un service à demander aux étrangers de passage. Des gens sans attaches, sans parti. À minuit, à l'écluse, il y aura du désordre : les tanneurs du Bas-Port voudront forcer les vannes hautes, et les ouvrir, ce qui noierait les prés et les moulins dont vit la ville haute. Mes sergents ne suffiront pas. Vingt pièces pour tenir les vannes fermées jusqu'à l'aube. »",
    ],
    choices: [
      { label: "Accepter ses vingt pièces", fx: { gold: 20, item: "bourse_morel", flag: "paye_bailli" }, to: "V_bailli_oui" },
      { label: "Lire ce qu'il ne dit pas", test: { dom: "social", diff: -10, label: "Social" }, win: { fx: { ep: ["perso", 400], flag: "morel_lu" }, to: "V_bailli_lu" }, lose: { to: "V_bailli_non" } },
      { label: "Refuser poliment", to: "V_bailli_non" },
    ] },
  V_bailli_oui: { act: "I", title: "Vingt pièces", place: "vaudrenne",
    text: [
      "Il pose la bourse sur la table, scellée de cire verte, et la pousse vers toi du bout d'un doigt ganté. « À minuit. Mes sergents vous attendront à la tour sud. Ravel les commande ; il vous dira où vous mettre. »",
    ],
    choices: [{ label: "Prendre la bourse et sortir", to: HUB }] },
  V_bailli_lu: { act: "I", title: "Les gants", place: "vaudrenne",
    text: [
      "Tu ne regardes pas son visage : tu regardes ses gants. Ils sont tachés, au bout de l'index droit, d'une poussière grise et fine, la poussière des caves. Et quand il dit *les tanneurs*, sa voix ne change pas, mais ses doigts se referment, un instant, sur la plume.",
      "Il ne craint pas le désordre. Il le prépare.",
    ],
    choices: [
      { label: "Accepter quand même, pour être là où il le veut", fx: { gold: 20, item: "bourse_morel", flag: "paye_bailli" }, to: "V_bailli_oui" },
      { label: "Refuser", to: "V_bailli_non" },
    ] },
  V_bailli_non: { act: "I", title: "Une porte bien huilée", place: "vaudrenne",
    text: [
      "Il sourit sans que rien ne bouge au-dessus de sa bouche. « Comme il vous plaira. Les nuits de crue sont longues pour les gens sans emploi. » Le valet te rend ton manteau, toujours mouillé.",
    ],
    choices: [{ back: HUB }] },

  V_minuit: { act: "I", title: "Minuit moins le quart", place: "vaudrenne",
    text: [
      "La cloche sonne les trois quarts. Tu descends le quai haut vers l'écluse, et la ville descend avec toi : des meuniers avec des lanternes, des tanneurs avec des perches, des sergents en cape de pluie, des gens qui ne savent pas pourquoi ils viennent mais qui viennent quand même.",
      "Et les autres voyageurs, ceux du bac. Tu les reconnais à leur façon de regarder tout le monde.",
    ],
    choices: [{ label: "Rejoindre l'écluse", to: "V_ecluse", big: true }] },

  // ---------------------------------------------------------------- act II · the night of the water
  V_ecluse: { act: "II", title: "L'écluse, à minuit", place: "vaudrenne",
    fx: { ep: ["histoire", 3000] },
    text: [
      "L'écluse est une digue de pierre noire jetée en travers de l'Aune, avec une tour à chaque bout. Ce soir, l'eau arrive à deux mains du parapet. Elle ne fait plus de bruit : elle pousse, c'est tout, comme une épaule contre une porte.",
      "Sur la digue, il y a déjà du monde. À la tour sud, une dizaine de sergents en cape, piques à l'épaule, autour d'un homme maigre au nez cassé : Ravel. À la tour nord, où est le treuil des vannes hautes, la porte est gardée par quatre hommes qui ne portent pas la livrée du bailli, et qui ne devraient pas être là.",
      { if: { has: "monde:joss_libre" }, text: "Et au milieu de la digue, sous la pluie, Joss Ferrand, l'éclusier, debout, les bras croisés, qui regarde l'eau monter. Quand Ravel l'a vu arriver, il est devenu très pâle." },
      { if: { has: "monde:joss_laisse" }, text: "Joss Ferrand n'est pas là. Quelqu'un sait où il est, et l'a laissé où il est." },
      { if: { has: "monde:basport_prevenu" }, text: "Derrière toi, sur le quai, les gens du Bas-Port sont venus en nombre, Bastien en tête, les vieux et les petits à l'abri de la chapelle." },
      { if: { has: "monde:cle_gardee" }, text: "La clé des vannes est entre les mains des voyageurs. Ravel le sait : il ne vous quitte pas des yeux." },
      { if: { has: "monde:cle_bailli" }, text: "La clé des vannes pend à la ceinture de Ravel, au bout d'une chaîne." },
    ],
    choices: [
      { label: "Marcher droit sur la porte du treuil", to: "V_gardes", big: true },
      { label: "Rejoindre les sergents de Ravel, comme convenu", if: { has: "paye_bailli" }, why: "Tu n'as rien convenu avec le bailli.", to: "V_ravel" },
    ] },
  V_ravel: { act: "II", title: "Ravel", place: "vaudrenne",
    text: [
      "Ravel te place au bout de la ligne, sans un mot, d'un coup de menton. Il sent le vin et la peur. « Personne ne monte à la tour nord, dit-il. Personne. Les ordres. »",
      "D'ici tu vois tout : la porte du treuil, les quatre hommes qui la gardent, le quai qui se remplit, l'eau qui monte. Et tu comprends que les vingt pièces du bailli, ce n'est pas pour tenir des vannes. C'est pour qu'on puisse dire, demain, que des étrangers les ont tenues.",
    ],
    choices: [
      { label: "Rendre la bourse à Ravel et passer de l'autre côté", if: { item: "bourse_morel" }, why: "Tu n'as plus la bourse.", fx: { drop: "bourse_morel", gold: -20, ep: ["perso", 400] }, to: "V_gardes" },
      { label: "Tenir la ligne jusqu'à l'aube", fx: { flag: "ligne_tenue" }, to: "V_treuil" },
    ] },
  V_gardes: { act: "II", title: "La porte du treuil", place: "vaudrenne",
    combat: { title: "Les hommes de main du bailli", enemies: [{ id: "homme_main", n: 2 }, "sergent"], terrain: "bati",
      win: { fx: { ep: ["seance", 1500] }, to: "V_treuil" },
      lose: { to: "V_treuil_tard" },
      talk: { label: "Leur dire ce que contient le registre de Joss", diff: -10, win: { fx: { ep: ["seance", 1500] }, to: "V_treuil" } },
      flee: { label: "Te replier sur le quai", dom: "discretion", diff: -10, to: "V_treuil_tard" } },
    text: [
      "Les quatre hommes de la porte se redressent quand tu approches. Deux d'entre eux ont des gourdins, un autre une épée de sergent qu'il tient comme un balai. Le quatrième s'en va en courant prévenir quelqu'un.",
      "« On passe pas », dit le plus grand. Il le dit comme on récite.",
    ] },
  V_treuil_tard: { act: "II", title: "Trop tard pour la porte", place: "vaudrenne",
    text: [
      "Tu te retrouves sur les pavés du quai, la lèvre fendue, avec le goût de la rivière dans la bouche. Mais d'autres que toi ont continué : la porte du treuil est ouverte, à présent, et des voix montent de l'escalier de la tour. Tu te relèves et tu montes.",
    ],
    choices: [{ label: "Monter dans la tour", to: "V_treuil" }] },

  V_treuil: { act: "II", title: "Le treuil des vannes hautes", place: "vaudrenne", charniere: true,
    text: [
      "La salle du treuil est ronde, basse, pleine d'un grondement qui monte par le plancher. Au milieu, la grande roue de chêne et de fer, et sa serrure, une gueule de fer noir.",
      "Vous êtes tous là, les voyageurs du bac. Et derrière vous, dans l'escalier, d'autres arrivent : des tanneurs, des meuniers, des sergents qui ne savent plus pour qui ils sont.",
      { if: { has: "monde:joss_libre" }, text: "Joss pose la main sur la roue, comme on la pose sur l'encolure d'une bête. « Si on ouvre, les prés du Haut boivent, les moulins chôment un mois, le bailli perd sa récolte. Si on n'ouvre pas, dans une heure le Bas-Port est sous l'eau jusqu'aux toits. C'est tout. C'est toujours tout. »" },
      { if: { not: { has: "monde:joss_libre" } }, text: "Personne ici ne sait exactement ce que fait cette roue. Mais tout le monde a vu l'encoche rouge sur les murs du Bas-Port." },
      { if: { has: "monde:cle_bailli" }, text: "La serrure est fermée, et la clé est restée à la ceinture de Ravel, en bas. Il faudra forcer." },
      "Dehors, la cloche de la chapelle sonne. Quelqu'un doit décider maintenant.",
    ],
    choices: [
      { label: "Ouvrir les vannes hautes", monde: "vannes", option: "ouvertes", if: { not: { has: "monde:cle_bailli" } }, why: "Sans la clé, il faut forcer la serrure.",
        fx: { flag: "monde:vannes_ouvertes", ep: ["histoire", 3000] }, to: "V_ouvertes", big: true },
      { label: "Forcer la serrure et ouvrir les vannes", monde: "vannes", option: "ouvertes", if: { has: "monde:cle_bailli" }, test: { dom: "combat", diff: -10, label: "Combat" },
        win: { fx: { flag: "monde:vannes_ouvertes", ep: ["histoire", 3000] }, to: "V_ouvertes" }, lose: { fx: { flag: "monde:vannes_ouvertes", pv: -3 }, to: "V_ouvertes_force" }, big: true },
      { label: "Laisser les vannes fermées", monde: "vannes", option: "fermees", fx: { flag: "monde:vannes_fermees" }, to: "V_fermees", big: true },
    ] },
  V_ouvertes_force: { act: "II", title: "La serrure", place: "vaudrenne",
    text: [
      "La serrure ne cède pas au premier coup, ni au deuxième. Tu t'ouvres la main sur le fer. C'est Bastien qui finit, avec une barre de cabestan et tout le poids de ses épaules, et la gueule de fer s'ouvre avec un bruit d'os.",
    ],
    choices: [{ label: "Pousser la roue avec les autres", to: "V_ouvertes" }] },
  V_ouvertes: { act: "II", title: "Les prés boivent", place: "vaudrenne",
    text: [
      "Il faut six hommes pour faire tourner la roue. Le premier tour est le plus dur ; ensuite la rivière vous aide, et c'est presque trop facile, comme si elle n'attendait que ça.",
      "Par la meurtrière, tu vois les vannes hautes se lever, et l'Aune se jeter de côté, dans le grand canal qui file vers les prés du Haut. Le grondement change de note. Sur le quai, en bas, quelqu'un crie, puis tout le monde crie, et ce n'est pas de peur.",
    ],
    choices: [{ label: "Attendre l'aube", to: "V_aube" }] },
  V_fermees: { act: "II", title: "Les blés du bailli", place: "vaudrenne",
    text: [
      "Personne ne touche à la roue. Ravel monte, essoufflé, voit qu'elle n'a pas bougé, et redescend sans un mot. Le grondement sous le plancher monte d'un ton, puis d'un autre.",
      "Par la meurtrière, tu vois l'eau passer par-dessus le quai bas, d'abord en nappe, puis en vague, et entrer dans les rues du Bas-Port comme on entre chez soi.",
    ],
    choices: [{ label: "Attendre l'aube", to: "V_aube" }] },

  V_aube: { act: "II", title: "L'aube sur Vaudrenne", place: "vaudrenne", end: true,
    text: [
      { if: { has: "monde:vannes_ouvertes" }, text: "Au matin, la pluie s'arrête, comme si elle avait été payée pour ça. Les prés du Haut sont un lac gris où flottent des gerbes et des piquets de clôture. Les trois roues des moulins ont de l'eau jusqu'à l'essieu. Le Bas-Port a les pieds mouillés, et c'est tout : l'eau s'est arrêtée à un pied sous l'encoche des sacs de Ninon." },
      { if: { has: "monde:vannes_fermees" }, text: "Au matin, la pluie s'arrête. Les prés du Haut sont verts et luisants, intacts, et les trois roues des moulins se remettent à tourner avant midi. Le Bas-Port, lui, a de l'eau jusqu'aux fenêtres de l'étage. Sur les murs des tanneries, une deuxième encoche viendra s'ajouter à la rouge." },
      { if: { all: [{ has: "monde:vannes_fermees" }, { has: "monde:basport_prevenu" }] }, text: "Mais les vieux et les petits ont passé la nuit dans la chapelle des Noyés, au sec, et Ermengarde n'aura pas de noms à graver cette année. Bastien a perdu ses peaux et sa maison. Il a gardé sa fille." },
      { if: { all: [{ has: "monde:vannes_fermees" }, { not: { has: "monde:basport_prevenu" } }] }, text: "Personne n'avait prévenu le Bas-Port. Ermengarde, dans la chapelle, prépare déjà son burin." },
      { if: { has: "monde:joss_libre" }, text: "Joss Ferrand note la hauteur de l'eau dans son registre, comme tous les matins depuis trente ans. Puis, sous la ligne, il écrit autre chose, et il porte le registre au juge du roi, à Montclair, par le premier bac." },
      { if: { all: [{ not: { has: "monde:joss_libre" } }, { has: "monde:joss_laisse" }] }, text: "Quelqu'un finit par se souvenir de Joss. On le trouve dans la cave des chanoines, vivant, furieux. Le bailli jure qu'il n'en savait rien." },
      { if: { has: "paye_bailli" }, text: "Le bailli te fait savoir, par son valet, qu'il te remercie. Tu ne sais pas encore très bien de quoi." },
      "Le bac repasse à midi. Vous montez dedans, les voyageurs, sans beaucoup vous parler. Chacun de vous a vu la même nuit d'un autre côté. Sur l'autre rive, vous vous retournez tous en même temps vers Vaudrenne, et aucun de vous ne sait dire si c'est la ville qui a changé, ou vous.",
    ],
    choices: [] },
};
