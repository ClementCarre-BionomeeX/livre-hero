// Still more of the house: the auction catalogue, the courtyard and the cab in the street, the forger at his bench,
// the glass eye, the monkey musician (both readings); the street behind Mélie (first night); the nephew's late visit
// again, the watchman's own story told to the old man, the register of what one knows, the clock wound up (second).
module.exports = {
  A_catalogue: { act: "I", title: "Le catalogue de la vente", place: "loge",
    text: [
      "Sur la table de la loge, Pigache a laissé un exemplaire du catalogue, imprimé sur beau papier, avec une gravure de la Sibylle en frontispice. *Vente après décès de la collection de feu Monsieur Hippolyte Orsenne. 1 247 lots.* Tu le feuillettes à la lueur de ta lanterne.",
      "*Lot n° 1 : la Sibylle, automate écrivain, et son œil.* *Lot n° 7 : un crocodile du Nil, quinze pieds.* *Lot n° 88 : un sablier de verre de Venise, dit de Mnémosyne, 1612.* *Lot n° 311 : un oiseau mécanique en argent, chantant.* *Lot n° 312 : une dent de narval.* *Lot n° 313 : une balle de plomb aplatie, montée en épingle. Sans valeur.*",
      "Quelqu'un a souligné au crayon, très légèrement, les lots 88, 311, 312 et 313. Et en marge du 313, de la même main légère : *Toute la valeur.*",
    ],
    choices: [
      { back: "A_loge" },
    ] },

  A_cour: { act: "I", title: "La cour et la rue", place: "loge",
    text: [
      "Tu sors dans la cour pavée et tu vas jusqu'à la grille. La rue des Antiquaires est vide, luisante, avec ses boutiques aux volets clos, ses enseignes de fer qui grincent au vent, et au bout, la place Saint-Eustache, où les fenêtres du cercle du Commerce brillent encore derrière leurs rideaux rouges.",
      "Un fiacre stationne devant le cercle, lanternes éteintes, le cocher endormi sur son siège sous une toile cirée. Il n'attend personne de visible. Il a l'air d'attendre une heure.",
      "Tu te retournes vers la maison. Elle te regarde de toutes ses fenêtres noires, et de la lucarne ronde de sa tour, qui ne reflète rien.",
    ],
    choices: [
      { back: "A_loge" },
    ] },

  A_gobe_parle: { act: "I", title: "Ce que restaure Gobe", place: "reserve",
    text: [
      "Tu demandes à Gobe ce qu'il restaure. Il hésite, puis, comme tous les artisans à qui l'on pose enfin la question, il parle, à voix basse, avec un plaisir coupable.",
      "« Je rends aux choses ce que le temps leur prend. Une plume à un oiseau, une dent à un crocodile, une couleur à une pierre. » Il prend la corne de narval en plâtre, la fait tourner dans la lumière. « Celle-ci, je l'ai faite en six nuits. Regardez la spirale. Regardez le grain. Regardez l'usure du bout, là où un marin l'a tenue pendant trois ans de mer. Elle est plus vraie que la vraie. La vraie a été mal conservée. »",
      "Il la repose, avec un soupir. « Mes originaux, personne n'en veut. On dit que je n'ai pas de style. C'est vrai. J'ai tous les styles. C'est pire. »",
    ],
    choices: [
      { back: "A_reserve" },
    ] },

  A_oeil_verre: { act: "I", title: "L'œil de verre", place: "reserve",
    text: [
      "Dans son écrin de velours, l'œil de verre bleu est taillé à facettes, en poire, exactement comme la Larme de la Sibylle. À la lueur de la lampe de Gobe, il brille d'un bleu vif, joyeux, franc, un bleu de vitrail. Il renvoie la lumière avec générosité, comme un ami.",
      "Tu te souviens de la Larme, là-haut, qui avalait la lumière au lieu de la rendre. La copie est parfaite, sauf en cela : elle a l'air honnête.",
      "« Une étude, dit Gobe en refermant l'écrin. Pour le catalogue. Pigache veut une gravure exacte. » Il ment très mal, et il le sait, et il a l'air de s'en excuser.",
    ],
    choices: [
      { back: "A_reserve" },
    ] },

  A_singe: { act: "I", title: "Le singe musicien", place: "automates",
    text: [
      "Dans l'ombre, sur un socle bas, un petit singe en habit rouge à galons d'or tient un violon sous le menton. Il a de vrais poils, un vrai museau, de vrais yeux de verre jaunes, et des mains de cuir si fines qu'on y voit des ongles. On l'a fait avec un vrai singe, empaillé, puis rempli de rouages. Mélie, sans doute, pour la peau, et Orsenne pour le reste.",
      "Il te regarde. Il a l'expression de tous les singes, ce mélange d'intelligence et de chagrin qui fait penser qu'ils ont compris quelque chose sur nous et qu'ils préfèrent se taire. Tu laisses sa clef tranquille. Certaines choses gagnent à garder leur violon muet.",
    ],
    choices: [
      { back: "A_automates" },
    ] },

  A_ruelle: { act: "I", title: "La ruelle", place: "jardin", second: false,
    text: [
      "Tu ouvres la petite porte du fond, derrière Mélie. La ruelle est noire, étroite, ruisselante, entre deux murs aveugles. Au bout, tu entends ses pas qui s'éloignent, réguliers, sans hâte. Tu fais trois pas. Quelque chose te frôle l'épaule, dans le noir, en descendant le long du mur de la tour. Tu lèves la lanterne.",
      "Une corde. Une corde mince, tendue, qui pend du haut de la tour jusqu'à hauteur d'homme, avec un crochet de fer au bout, et qui remonte, doucement, lentement, pendant que tu la regardes, et disparaît dans le noir, au-dessus du lierre.",
      "Quand tu baisses la lanterne, les pas de Mélie se sont tus.",
    ],
    choices: [
      { back: "A_jardin" },
    ] },

  S_aristide_nuit: { act: "II", title: "Les gants", place: "loge", second: true,
    text: [
      "Minuit et demi. La sonnette de la grille tinte. Aristide Orsenne, sous son parapluie, en habit de soirée, la fleur blanche à la boutonnière. « Mes gants, dit-il. Je les ai oubliés dans le vestibule. » Tu sais où ils sont. Tu les lui tends avant qu'il les cherche.",
      "Il a un petit temps d'arrêt. Puis il les enfile, doigt à doigt, et son regard tombe sur la flasque d'argent, sur la table de la loge.",
      { if: { has: "flasque:bue" }, text: "Il la soupèse. Il sourit. « Vous y avez goûté. Bien. La nuit sera douce. » Tu sais exactement à quel point elle sera douce. Tu lui rends son sourire." },
      { if: { not: { has: "flasque:bue" } }, text: "Il la soupèse. Pleine. « Vous ne buvez pas ? » Tu prends la flasque, tu la débouches, et tu la lui tends, avec la plus grande politesse. « À la mémoire de votre oncle, Monsieur. » Il regarde la flasque. Il regarde toi. Il la repousse avec un rire léger. « Je sors du cercle. J'ai assez bu pour deux. » Il repart sous son parapluie, sans siffler, et tu sais qu'il pense à toi jusqu'au bout de la rue." },
    ],
    choices: [
      { back: "A_loge" },
    ] },

  S_gardien: { act: "II", title: "Le gardien", place: "tour", second: true,
    text: [
      "« Et vous ? demande Orsenne. Qui êtes-vous, pour garder la maison d'un mort à deux écus la nuit ? »",
      { if: { voie: "soldat" }, text: "Tu lui dis : l'armée, les gardes, les nuits debout devant des portes qui n'avaient rien à garder. Il hoche la tête. « Un soldat. J'en ai été un, deux ans, à vingt ans. On m'a tiré dessus, on m'a manqué, et j'ai compris que tout ce qui dure est un hasard. Depuis, je collectionne les hasards. »" },
      { if: { voie: "etudiant" }, text: "Tu lui dis : la faculté, les manuels, les gravures du cabinet Orsenne dans les livres, l'axolotl, la Sibylle, le crocodile. Il a l'air touché, puis agacé d'être touché. « Un étudiant. Vous êtes venu voir mes choses avant qu'on les disperse. Vous êtes le seul. Prenez garde : c'est comme ça que j'ai commencé. »" },
      { if: { voie: "serrurier" }, text: "Tu lui dis : les serrures, les mécanismes, les doigts patients. Il se penche vers toi, ravi. « Un serrurier ! Alors vous avez vu ce que j'ai fait à la Sibylle. Les tringles. Le tube. Dites-moi franchement : est-ce que c'est propre ? » Tu lui dis que c'est propre. Il rougit comme un écolier." },
      "« Bon, conclut-il. Vous ferez l'affaire. Vous ferez même mieux que l'affaire, ce qui est rare et fatigant. »",
    ],
    choices: [
      { back: "S_chambre_noire" },
    ] },

  S_registre2: { act: "II", title: "Ce que tu sais", place: "loge", second: true,
    text: [
      "Tu ouvres le registre de garde, et sous ton nom, dans la colonne *Observations*, tu écris tout ce que tu sais, en petites lettres serrées, pour ne pas le perdre si le sable se mettait à remonter encore : *11 h, la Sibylle écrit. Minuit, le crocodile. 1 h, la lime. 2 h, la soupe. 3 h, l'ours tombe, l'œil change. 4 h, « Qui suis-je ? ». 6 h, Quatremain, verre, menottes.*",
      "Tu relis. On dirait l'emploi du temps d'un fou. C'est l'emploi du temps exact de la nuit qui vient.",
      "Au bas de la page, tu ajoutes : *Ne pas boire.* Et tu soulignes deux fois.",
    ],
    choices: [
      { back: "A_loge" },
    ] },

  S_horloge_remontee: { act: "II", title: "L'horloge remontée", place: "automates", second: true,
    text: [
      "*Ne pas remonter avant la vente.* Tu ouvres la porte vitrée de l'horloge astronomique, tu trouves la clef sur son crochet, et tu la remontes. Douze tours. Le balancier hésite, puis se met à battre, lourd, lent, avec un bruit de cœur de géant. Les sept planètes d'argent frémissent sur le cadran bleu. Tu mets les aiguilles à l'heure.",
      "Au-dessus de la coupole, quelque chose tombe, comme une cuillère sur un plancher. Un long silence. Puis, par le tube de la Sibylle, très faible, une voix cassée, qui ne s'adresse à personne : « Tiens. Le temps repart. »",
    ],
    choices: [
      { back: "A_automates" },
    ] },
};
