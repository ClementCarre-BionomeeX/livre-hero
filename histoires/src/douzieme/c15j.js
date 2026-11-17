// Le Douzième Coup · chapter 15, the one who passes (act V, inside the eleventh stroke). `K15_instant` is read by
// both (the gaze along the wire breaks : the one below can move, the one above has no sand). Then the upper Tower
// in the held note : the Cage (bell, hammer, cord, the pigeon between two slats), the trap and the ladder, the
// round landing (the oak door, the copper ring : a yellow point climbing), the stair (Baudouin stopped in his
// descent : `j:vu_baudouin_fige`), the gallery behind the great dial (hub `K15j_galerie` : the square, the twelve
// doors, the captain, the bollard of the rue aux Oies, the canal road, the lower town, the hill of the Jurés, the
// sky, the great hand), the south face and the rungs (`j:vu_reine_figee`), and the wait against the milky glass
// until sabots are heard. M15 is the reunion.
var P = {};
var J = { has: "role:passe" }, R = { has: "role:reste" };
var CORDE_C = { has: "monde:corde_coupee" };
var SORTIS = { has: "monde:noyers_sortis" };
var ATTELE = { has: "monde:girard_attele" };
var PROMIS = { has: "j:promis_reine" };

Object.assign(P, {
  K15_instant: { act: "V", title: "La note", place: "tour", ambiance: "chateau",
    text: [
      { if: J, text: "Vous vous regardez. Cela dure, et rien ne dit combien : il n'y a plus de quoi mesurer." },
      { if: J, text: "Puis, tout au fond, {autre} bouge. La main brune quitte le levier. La figure se détourne, revient, se lève encore vers toi ; une bouche s'ouvre sur un mot que trois cent soixante marches mangent en route. Et {autre} s'en va du rond de la lunette, vite, d'un pas de quelqu'un pour qui les pas sont restés des pas." },
      { if: J, text: "Tu veux en faire autant. Tu ordonnes à ta main de s'ouvrir. Elle y met le temps d'un Pater. Tes doigts se déplient l'un après l'autre, comme ceux d'un gant qu'on retourne." },
      { if: J, text: "Tu comprends alors, avec une lenteur qui fait partie de la chose. {autre} te l'a écrit vingt fois, en bâtons, d'un bout à l'autre d'une route : sans sable sur soi, on ralentit, puis on est pris. {autre} en a un sachet au cou. Toi, tu as passé neuf jours dans une ville qui battait, et tu n'en as jamais eu besoin." },
      { if: J, text: "Tu regardes tes ongles. Ils sont gris." },
      { if: R, text: "Vous vous regardez. Cela dure, et rien ne dit combien : ton sablier, contre ta poitrine, est la seule chose de cette Tour qui compte encore." },
      { if: R, text: "C'est lui qui te réveille. Il chuinte. Tu baisses les yeux sur ta main, sur le cuir, sur d'autres mains qui n'y étaient pas ; et tu lâches. Tu peux lâcher. Tu peux reculer d'un pas, et ton sabot fait sur le pavé son bruit de sabot, tout seul, dans une note d'or qui emplit la voûte et qui ne décroît pas." },
      { if: R, text: "Tu connais cela. C'est ton métier. Tu as marché neuf jours dans des endroits où tout se tenait, sauf toi. Celui-ci vient seulement d'être pris : il est encore tiède." },
      { if: R, text: "Tu relèves la tête vers l'œil de la voûte. Là-haut, {autre} n'a pas bougé. Tu attends un signe, une main. Il vient une main, enfin, si lente qu'on dirait qu'elle pousse. Tu comprends, d'un coup, avec le ventre : {autre} a vécu neuf jours dans une ville qui battait, et n'a pas un grain sur {autre:lui}." },
      { if: R, text: "Tu cries : « J'arrive ! » La voûte te le rend. Rien d'autre ne répond." },
    ],
    choices: [
      { label: "Vouloir te lever", hide: R, to: "K15j_poix", big: true },
      { label: "Regarder où tu es", hide: J, to: "K15r_cave", big: true },
    ] },

  K15j_poix: { act: "V", title: "Dans de la poix", place: "tour", ambiance: "chateau",
    text: [
      "Tu te lèves. Cela se décide en haut, et cela descend : la nuque, les épaules, les reins, les genoux. Chaque jointure attend que la précédente ait fini. C'est marcher dans de la poix, avec une tête qui est restée vive et qui regarde faire.",
      "Tu es sans douleur et sans froid. Tu as seulement la sensation, très nette, que le monde t'a mis{e} sur sa liste, et qu'il te rangera à ton tour, sans hâte, quand il aura fini avec les pigeons.",
      "Autour de toi, la note tient. Elle a cessé d'être un bruit : c'est le lieu où tu es. Tu la respires. Elle a un goût de bronze et de soleil.",
      { after: "j:pose_corde", before: "monde:corde_coupee", text: "Ta main a lâché la corde. Il t'a fallu la regarder faire." },
      { after: "j:pose_cahier", text: "Tu as refermé le Cahier contre toi. Il t'a fallu regarder tes bras le faire." },
      { after: "j:pose_regard", text: "Tu t'es relevé{e} du bord du trou. Il t'a fallu regarder tes genoux le faire." },
      "{autre} monte. Il y a trois cent soixante marches. Tu peux en descendre une part : chaque marche que tu feras est une marche que {autre} n'aura pas à faire, et tu ignores combien de marches il te reste dans les jambes.",
    ],
    choices: [{ label: "Regarder la Cage, puisqu'il faut y passer du temps", to: "K15j_cage", big: true }] },

  K15j_cage: { act: "V", title: "La Cage, dans la note", place: "tour", ambiance: "chateau", hub: true, backName: "la Cage",
    text: [
      { first: true, text: "C'est la même Cage, et c'en est le portrait. La cloche, le marteau, le banc, les lames de chêne : chaque chose est à sa place, avec une netteté de chose peinte. La poussière qui dansait dans les rais de soleil s'est arrêtée de danser. Elle pend, en l'air, grain par grain, comme des étoiles de jour." },
      { first: true, text: "Tu passes la main dedans. Les grains s'écartent autour de tes doigts, et restent où tu les as mis." },
      { again: true, text: "La Cage, la poussière arrêtée dans le soleil. La note." },
    ],
    choices: [
      { label: "La cloche", hide: { seen: "K15j_cloche" }, to: "K15j_cloche" },
      { label: "Le marteau, contre le bronze", hide: { seen: "K15j_marteau" }, to: "K15j_marteau" },
      { label: "La corde", hide: { seen: "K15j_corde" }, to: "K15j_corde" },
      { label: "Le pigeon, entre deux lames", hide: { seen: "K15j_pigeon" }, to: "K15j_pigeon" },
      { label: "Le banc des sonneurs", hide: { any: [{ not: { has: "monde:nom_cage" } }, { seen: "K15j_banc" }] }, to: "K15j_banc" },
      { label: "La trappe, et l'échelle", to: "K15j_trappe", big: true },
    ] },

  K15j_cloche: { act: "V", title: "Un tremblement qui se tient", place: "tour", ambiance: "chateau",
    text: [
      "Tu lèves la main vers la lèvre de bronze. Il te faut du temps pour l'atteindre, et tu en profites pour la regarder : verte, noire, avec sa place claire où frappe le marteau.",
      "Tu la touches. Tu attendais le bourdon dans ta paume, ce fourmillement qui remonte jusqu'à l'épaule. C'est autre chose. Le bronze est écarté de lui-même. La cloche a pris la forme que lui a donnée le coup, un peu ovale, d'un cheveu, et elle la garde. C'est un tremblement, qu'on a arrêté au plus large.",
      "Douze pieds de bronze se tiennent ainsi, déformés d'un cheveu, sur toute une ville. Quarante mille personnes sont dans ce cheveu-là.",
      "Tu retires ta main. Elle y a laissé, sur le vert, cinq marques plus sombres, qui ne s'effacent pas.",
    ],
    choices: [{ back: "K15j_cage" }] },

  K15j_marteau: { act: "V", title: "La tête d'enclume", place: "tour", ambiance: "chateau",
    text: [
      "Le marteau est contre la lèvre. Il y est entré : on voit, autour de la tête d'enclume, le bronze qui cède, d'une ligne, comme une joue sous un doigt. Le bras de chêne est fléchi. Le déclic est au bout de sa course, la dent dégagée.",
      "Le fil part de là. Il descend par le trou du plancher, tendu à rompre. Tu avances le doigt. Tu le touches, et tu retires le doigt plus vite que tu ne fais rien d'autre : il est tranchant comme une lame, et il t'a marqué{e} d'un trait blanc.",
      "Au huitième coup, le marteau avait frappé faux. Tu regardes la tête de près. Elle porte un peu de biais, d'un rien, sur le bord de la place claire. Une secousse est venue par le fil, d'en bas, à contretemps, et la Patiente garde depuis ce matin la trace exacte d'une bousculade entre deux hommes, à trois cent soixante marches sous elle.",
      "Un marteau qui a frappé onze fois attend la douzième. Il est fait pour cela. Il a l'air, là, penché contre son bronze, d'un homme à qui l'on a coupé la parole.",
    ],
    choices: [{ back: "K15j_cage" }] },

  K15j_corde: { act: "V", title: "Ce qui pend du joug", place: "tour", ambiance: "chateau",
    text: [
      { if: { not: CORDE_C }, text: "La corde descend du joug, lustrée, grosse comme le poignet, et s'en va par le trou du plancher vers la chambre d'en dessous. Elle est entière. Elle a encore, à hauteur de ton épaule, la torsion que lui a donnée le dernier coup : elle vrille, et elle garde sa vrille." },
      { if: { all: [{ not: CORDE_C }, { has: "j:baudouin_cede" }] }, text: "Tu as levé la paume, et un garçon de vingt ans a rangé son couteau. Elle est là pour cela." },
      { if: { all: [{ not: CORDE_C }, { not: { has: "j:baudouin_cede" } }] }, text: "On a voulu la couper. Il y a dans le chanvre, à deux coudées du plancher, une entaille de sellier, nette, profonde d'un doigt. Elle s'est arrêtée là." },
      { if: CORDE_C, text: "La corde pend du joug sur trois coudées, et finit. Le bout est net, taillé d'un seul coup de biais, avec la propreté d'un ouvrier. Il se balançait. Il s'est arrêté au bout de son balancement, de côté, et il y reste, comme un doigt qui montre quelque chose." },
      { if: CORDE_C, text: "L'autre morceau est tombé par le trou. Il est en bas, dans une chambre, en tas sur un dallage, autour d'un anneau de fer." },
      { if: CORDE_C, text: "Tu mesures. Du plancher au moignon, en levant le bras, il manque deux coudées. Avec un banc, il en manquerait une." },
      "C'est par là qu'on la sonnait à bras, avant le fil. Quarante sonneurs s'y sont pendus de tout leur poids, à midi, quatre siècles durant. Il y faut un homme, t'a dit une enfant. Elle t'a mesuré{e} du regard, et elle a ajouté quelque chose.",
    ],
    choices: [{ back: "K15j_cage" }] },

  K15j_pigeon: { act: "V", title: "Les ailes ouvertes", place: "tour", ambiance: "chateau",
    text: [
      "Il passait, au onzième coup, entre deux lames du couchant. Il y est. Il a les ailes ouvertes, les pattes rentrées, le cou tendu ; une plume de sa queue s'est détachée, et elle l'accompagne, à un pouce, sans tomber.",
      "Tu approches la figure. Tu vois son œil, rond, orange, avec un point noir qui te regarde et ne te voit pas. Tu vois chaque barbe de chaque plume. Jamais personne n'a vu un pigeon de si près, de si longtemps. C'est une bête grise, commune, qui allait d'un toit à un autre, et elle est belle comme une chose taillée.",
      "Derrière lui, par la fente, le pays. Les toits, bleus et bruns. Les fumées : elles montent des cheminées jusqu'à une certaine hauteur, et là elles tiennent, penchées toutes du même côté, comme des arbres sous un vent d'ouest. Sur la place, une poussière de têtes. Aucune ne remue.",
      "{autre} a marché neuf jours là-dedans. Tu as lu cela dans un Cahier, à des bornes, en bâtons. Tu croyais l'avoir compris.",
    ],
    choices: [{ back: "K15j_cage" }] },

  K15j_banc: { act: "V", title: "Une oreille ouverte", place: "tour", ambiance: "chateau",
    text: [
      "Ton nom est sur le dossier, sous *Thibaut, 481*, en lettres droites. La sciure que tu as soufflée est encore en l'air, devant le banc : une petite fumée blonde, arrêtée.",
      "Dessous, l'oreille que tu as gravée, seule, ouverte, sans croix. Tu la regardes. Tu avais écrit cela pour dire : *celui-ci a entendu.* Tu as entendu. Tu entends encore.",
      "Thibaut, lui, avait de la cire. Il est descendu de cette Cage sur ses jambes, au bout de trois psaumes, et il a eu un an 482. Toi, tu es le premier nom de ce banc qui soit resté dessous.",
    ],
    choices: [{ back: "K15j_cage" }] },

  K15j_trappe: { act: "V", title: "Vingt échelons", place: "tour", ambiance: "chateau",
    text: [
      "La trappe est restée levée. Dessous, l'échelle : vingt échelons de frêne, dans une cheminée de pierre large comme une armoire.",
      "Tu t'assois au bord. Tu passes une jambe, puis l'autre. Cela prend le temps de dire les douze prières, et tu les dis, pour compter : tu en es à *none* quand ton pied trouve le premier barreau.",
      "Descendre une échelle demande de lâcher une main avant d'avoir assuré l'autre. Ton corps n'y consent plus. Il tient à ce qu'il tient. Tu dois convaincre chaque doigt, un par un, et tu leur parles, tout bas, comme on parle à une bête qui a peur d'un pont.",
      "Au dixième échelon, tu t'arrêtes. Tu cherches ton souffle, et tu trouves que tu as oublié de respirer depuis le troisième. Cela te revient comme un détail. Tu prends une goulée de note, lente, épaisse, et tu repars.",
      "En bas, la porte de fer bâille. On l'a forcée, tantôt, avec une clef qui tournait mal.",
    ],
    choices: [{ label: "Passer la porte de fer", to: "K15j_palier", big: true }] },

  K15j_palier: { act: "V", title: "Le palier rond", place: "tour", ambiance: "chateau", hub: true, backName: "le palier",
    text: [
      { first: true, text: "Le palier rond, dallé. Au milieu, l'anneau de cuivre, et le fil qui le traverse, raide, luisant. À droite, la porte de chêne aux armes d'Aurime. Elle est fermée." },
      { first: true, text: "Il y a ici une épaisseur de silence que tu reconnais, et dedans la note, qui passe à travers la pierre comme la chaleur passe à travers un mur de four." },
      { again: true, text: "Le palier, l'anneau de cuivre, le fil. La porte de chêne, fermée." },
    ],
    choices: [
      { label: "La porte de chêne", hide: { seen: "K15j_porte" }, to: "K15j_porte" },
      { label: "Te pencher sur l'anneau de cuivre", hide: { seen: "K15j_anneau" }, to: "K15j_anneau" },
      { label: "La vis, vers le bas", to: "K15j_vis", big: true },
    ] },

  K15j_porte: { act: "V", title: "La clef en dedans", place: "tour", ambiance: "chateau",
    text: [
      "Tu mets l'œil au trou. La clef est en dedans : on en voit le bout, qui bouche le jour. Autour, par le peu qui reste, il passe un fil de lumière blanche.",
      "Tu frappes. Ta main monte, redescend, touche le chêne. Le bruit sort mat, sans écho, et tombe à tes pieds.",
      "Derrière ce bois, à huit pas, il y a une femme en blanc, à un pas d'une fenêtre, le bras levé, une enfant sur la hanche. Tu le sais par une écriture en bâtons.",
      { after: "j:vu_fenetre", text: "Tu le sais aussi pour l'avoir vu, par un carreau, à cent cinquante pieds du sol : c'est toi qui l'as fait venir à cette fenêtre." },
      { if: PROMIS, text: "Tu colles ta bouche au trou de la serrure. Tu dis : « Madame. C'est moi. Je suis resté{e}. » Cela met longtemps à sortir, et personne ne l'entend. Tu l'as dit tout de même. On t'a reproché, dans cette Tour, de savoir comment cela finit ; personne ne t'a défendu de tenir compagnie." },
      { if: { not: PROMIS }, text: "Tu dis, contre le bois : « Il y a quelqu'un. » C'est tout ce que tu trouves, et cela met longtemps à sortir. Une reine t'a dit ce matin, ou l'aurait pu, que cela change une chambre." },
    ],
    choices: [{ back: "K15j_palier" }] },

  K15j_anneau: { act: "V", title: "Un point jaune", place: "tour", ambiance: "chateau", fx: { flag: "j:vu_point_jaune" },
    text: [
      "Tu te mets à genoux au bord de l'anneau. C'est long. Tu regardes dans le puits de la vis, le long du fil.",
      "Du noir. Les meurtrières y font, de loin en loin, des barreaux de jour, immobiles, où la poussière pend. Tout en bas, le pois de perle.",
      "Et entre le pois et toi, très bas encore, il y a un point jaune. Il est de la couleur d'une flamme de suif. Il n'est à sa place dans aucune des choses de cette Tour : il bouge. Il tourne, en montant, autour du fil, comme une étincelle le long d'une mèche. Il disparaît derrière le noyau de la vis, reparaît plus haut d'un cheveu.",
      "C'est une veilleuse. Quelqu'un la porte au poing, et court.",
      "Tu regardes ce point jusqu'à en avoir les yeux pleins. De toute ta vie, tu n'as rien vu d'aussi vivant.",
    ],
    choices: [{ back: "K15j_palier" }] },

  K15j_vis: { act: "V", title: "En descendant", place: "tour", ambiance: "chateau",
    text: [
      "La vis tourne à droite, à la descente. Tu vas la main au mur, puis l'épaule, puis tout le flanc : tu te laisses glisser le long de la pierre, de marche en marche, comme un sac qu'on descend.",
      "Tu comptes. C'est un compte qui ne ressemble à aucun autre. Entre *douze* et *treize*, tu as le temps de te rappeler une cuisine, une table, une vieille femme qui dit : *on reste longtemps comme on était*, et de trouver qu'elle aurait pu prévenir pour le reste.",
      "Aux meurtrières, tu t'arrêtes. Tes yeux s'y prennent d'eux-mêmes, et il faut les en détacher. Une tranche de toit, avec un chat au milieu d'un saut. Une tranche de place. Une tranche de ciel, où trois hirondelles tiennent à rien.",
      "Le gris a gagné tes mains. Il est sous la peau, aux jointures, comme une farine. Tu les regardes sans effroi : l'effroi est quelque part derrière toi dans l'escalier, et il descend moins vite encore.",
      "Vers la centième marche, il y a quelqu'un.",
    ],
    choices: [{ label: "T'arrêter devant lui", fx: { flag: "j:vu_baudouin_fige" }, to: "K15j_baudouin", big: true }] },

  K15j_baudouin: { act: "V", title: "Celui qui redescendait", place: "tour", ambiance: "chateau",
    text: [
      "C'est Baudouin Passavant. Il redescendait, de son pas long. Le coup l'a trouvé un pied en l'air, la main gauche à la corde qui sert de rampe, la tête un peu tournée vers le haut.",
      "Il a son bandeau gris sur les oreilles. Dessous, de la cire. Il est pris autrement que toi : sa peau a gardé sa couleur, ses membres leur poids d'homme. Il est seulement arrêté, avec tout le reste, le temps de cette note ; et quand elle finira, il achèvera son pas, il descendra, il sortira par la porte de fer avec les huit autres, sur ses jambes, dans une ville de statues.",
      { if: CORDE_C, text: "Il a encore son couteau à la main. Il y a du chanvre sur la lame, trois brins, blonds." },
      { if: { all: [{ not: CORDE_C }, { has: "j:baudouin_cede" }] }, text: "Son couteau est au fourreau. Sa main droite est ouverte, à demi levée, à hauteur de sa poitrine, et il la regarde du coin de l'œil : c'est la paume que tu lui as montrée, là-haut, et qu'il essaie depuis sur lui-même, pour comprendre ce qu'elle veut dire dans une autre main que celle du maître." },
      { if: { all: [{ not: CORDE_C }, { not: { has: "j:baudouin_cede" } }] }, text: "Il se tient le poignet droit de la main gauche. Son couteau est resté là-haut, sous le banc, où tu l'as envoyé. Il a la bouche serrée de quelqu'un qui cherche comment il dira cela en bas." },
      "Il a vingt ans. Il a la figure de quelqu'un qui a fait ce qu'on lui a dit, et qui commence à se demander à qui il l'a dit.",
      "Tu passes devant lui. Il faut le contourner, sur une marche large d'un pied, et tu le frôles de l'épaule. Il est tiède.",
    ],
    choices: [{ label: "Descendre encore", to: "K15j_seuil_galerie", big: true }] },

  K15j_seuil_galerie: { act: "V", title: "La cent quarantième", place: "tour", ambiance: "chateau",
    text: [
      "À la cent quarantième marche, une porte basse, à gauche à présent, ouvre sur du jour.",
      "Tu veux poser le pied sur la cent quarante et unième. Ton genou plie, et il reste plié. Tu attends. Tu lui parles. Il a fini : c'est un genou de statue, à présent, gris sous la toile, et il te porte encore à condition de ne plus lui demander de marches.",
      "Tu as descendu la moitié de la Tour. Il reste à {autre} deux cent vingt marches, moins celles qu'{autre:il} a déjà dans les jambes.",
      "Tu te tournes vers le jour. La galerie est de plain-pied. Si l'on doit t'y trouver, que ce soit devant quelque chose à regarder.",
    ],
    choices: [{ label: "Passer la porte basse", to: "K15j_galerie", big: true }] },

  K15j_galerie: { act: "V", title: "Derrière l'aiguille arrêtée", place: "tour", ambiance: "chateau", hub: true, backName: "la galerie",
    text: [
      { first: true, text: "Le balcon de pierre, la barre de fer, le grand cadran de verre laiteux. Derrière le mur, les renvois des quatre cadrans tournaient avec un bruit de moulin. Ils se taisent. C'est la première fois que tu entends cette Tour sans son horloge, et elle paraît plus haute." },
      { first: true, text: "La grande aiguille est en travers du carreau clair. Elle a rejoint la petite. Elles sont l'une sur l'autre, dorées, droites, la pointe en haut, comme deux mains jointes." },
      { first: true, text: "Tu t'adosses au verre. Il est tiède de soleil. Tu as devant toi, par-dessus la barre, tout ce que tu as traversé en neuf jours, et tu peux le regarder aussi longtemps que tes yeux voudront bouger." },
      { again: true, text: "La galerie, le verre tiède, les deux aiguilles jointes. Le gris te monte aux coudes." },
      { again: true, after: "j:vu_point_jaune", text: "Dans l'escalier, derrière toi, quelque chose a changé à la note : il s'y mêle un bruit, très petit, régulier, qui monte." },
    ],
    choices: [
      { label: "La place", hide: { seen: "K15j_vue_place" }, to: "K15j_vue_place" },
      { label: "Les douze portes peintes", hide: { seen: "K15j_vue_theatre" }, to: "K15j_vue_theatre" },
      { label: "Le pied de la Tour", hide: { seen: "K15j_vue_pied" }, to: "K15j_vue_pied" },
      { label: "La borne de la rue aux Oies", hide: { seen: "K15j_vue_borne" }, to: "K15j_vue_borne" },
      { label: "Le chemin du canal", hide: { seen: "K15j_vue_canal" }, to: "K15j_vue_canal" },
      { label: "La ville basse", hide: { seen: "K15j_vue_basse" }, to: "K15j_vue_basse" },
      { label: "La colline des Jurés", hide: { seen: "K15j_vue_guilde" }, to: "K15j_vue_guilde" },
      { label: "Le ciel", hide: { seen: "K15j_vue_ciel" }, to: "K15j_vue_ciel" },
      { label: "La grande aiguille", hide: { seen: "K15j_aiguille" }, to: "K15j_aiguille" },
      { label: "Te traîner jusqu'à la face du midi", hide: { seen: "K15j_sud" }, to: "K15j_sud" },
      { label: "Ne plus bouger, et écouter l'escalier", to: "K15j_attente", big: true },
    ] },

  K15j_vue_place: { act: "V", title: "Cinq mille bouches rondes", place: "tour", ambiance: "chateau",
    text: [
      "Ils ont dit *Onze.* Ils ont encore la bouche de l'avoir dit : cinq mille ronds noirs, dans cinq mille figures levées, et sur chacune la même joie qui s'apprêtait. Ils avaient pris leur souffle pour le douzième. Ils l'ont.",
      "Des chapeaux sont en l'air. On les avait lancés un coup trop tôt, par impatience : il y en a trente, quarante, à des hauteurs diverses, au-dessus des têtes, avec leurs rubans. Un enfant, sur des épaules, a lâché une balle rouge. Elle est à un pied de sa main.",
      "Le jet de la fontaine des Jurés est une tige de verre. Autour, les gouttes font un collier.",
      "Tu cherches ce qui cloche, parce que quelque chose cloche, et tu le trouves : les ombres. Elles sont toutes ramassées sous les gens, courtes, rondes, exactes. Aucune ne penche. C'est midi, à la lettre, et il le restera.",
      "Tu connais plusieurs de ces figures. Un marchand d'oublies. La femme qui t'a rendu ta monnaie en liards rognés, le premier jour. Un archer qui t'a dit de circuler. Ils ont tous l'air de bonnes gens. On a l'air de bonnes gens, la bouche ouverte.",
    ],
    choices: [{ back: "K15j_galerie" }] },

  K15j_vue_theatre: { act: "V", title: "La onzième Heure", place: "tour", ambiance: "chateau",
    text: [
      "Près de la fontaine, les douze portes. Onze sont ouvertes. Devant la onzième, la petite Heure timide est sortie d'un pas : une fillette de dix ans, en robe bleu de nuit, qui tient une lanterne de papier et regarde ses pieds.",
      "Florizel est au milieu de l'estrade, en pourpoint cerise, énorme, les bras ouverts. Il a levé sa canne vers la douzième porte. Il a la bouche pleine d'un vers.",
      { if: { has: "monde:florizel_piece" }, text: "C'est ta pièce. Tu l'as écrite, ou autant vaut, sur un coin de table, entre deux chopes ; il t'a dit que la douzième porte serait vide, parce que le public aime attendre. Puis il a mis quelqu'un derrière, sans te le dire, parce qu'un effet le mène par le nez." },
      { if: { not: { has: "monde:florizel_piece" } }, text: "Il t'avait offert d'en être, et tu as passé ton chemin. La pièce s'est faite sans toi, et elle est allée jusqu'à sa onzième porte, comme toutes les choses qu'on ne fait pas." },
      "La douzième est fermée. Dans la fente, entre les deux battants de toile peinte, on voit un œil, un bout de couronne en carton doré, et une main gantée de blanc, déjà posée sur le loquet. Colombe attend sa réplique. Elle l'attend avec tout son corps, penchée, un talon levé.",
      "Elle a appris ce rôle en quatre jours. Elle le sait encore.",
    ],
    choices: [{ back: "K15j_galerie" }] },

  K15j_vue_pied: { act: "V", title: "Un flocon de savon", place: "tour", ambiance: "chateau",
    text: [
      "Tu te penches par-dessus la barre. Cela se fait par degrés, et le vide vient à toi sans vertige : le vertige est une affaire de gens pressés.",
      "Au pied de la Tour, le dais rouge, ses quatre porteurs, la haie des archers. Devant la porte de bronze, le capitaine Hardouin. D'ici, c'est une cuirasse, un panache, une main sur une épée. Il regarde le cadran. Il te regarde donc, à peu près, et il a l'air de te tenir pour responsable.",
      { if: { has: "monde:hardouin_tour" }, text: "Il est là parce que tu le lui as demandé, dans un corridor, la veille. Il a dégarni des grilles pour garder une porte. Il a obéi à quelqu'un de ton âge, contre sa règle, sur ta bonne mine. Sous son oreille gauche, il y a un point blanc : il s'est rasé ce matin en hâte, pour être à l'heure." },
      { if: { not: { has: "monde:hardouin_tour" } }, text: "Sous son oreille gauche, il y a un point blanc : il s'est rasé en hâte, ce matin. Un capitaine des gardes qui se rase en hâte le jour du Grand Midi avait mal dormi, et tu ne sauras pas de quoi." },
      "Près de la porte basse, un homme en noir, sans chapeau, une trousse sous le coude, a la tête renversée vers le haut de la Tour, plus haut que le cadran : vers la Chambre haute. C'est maître Anthelme. Il est le seul, sur cette place, qui ne regarde pas l'heure.",
    ],
    choices: [{ back: "K15j_galerie" }] },

  K15j_vue_borne: { act: "V", title: "La rue aux Oies", place: "tour", ambiance: "chateau",
    text: [
      "Au bord de la place, là où la rue aux Oies débouche en pente, il y a la borne.",
      { if: SORTIS, text: "Un garçon boulanger est dessus, sa couronne de pain à la main, mordue. Il a la bouche ouverte comme les autres, et pleine. La borne des Noyer est à un boulanger. Les Noyer sont sur une route, loin, dans une charrette bleue, à se disputer sur ce qu'ils ont manqué." },
      { if: { all: [{ not: SORTIS }, ATTELE] }, text: "Josse Noyer est dessus, debout, une main en visière. Il a les épaules libres. Il a laissé sa fille au pont avec un garçon de quatorze ans et une jument, parce qu'un{e} apprenti{e} le lui a fait promettre ; et il est monté voir la fête tout seul, en homme qui se la racontera." },
      { if: { all: [{ not: SORTIS }, { not: ATTELE }] }, text: "Elle est vide. Il y a, au pied, un chapeau d'homme, tombé, le fond en l'air, de la grosseur d'une lentille." },
      { if: { all: [{ not: SORTIS }, { not: ATTELE }, { has: "j:line_consigne" }] }, text: "À la demie de dix heures, une enfant a dit à son père qu'elle avait envie. Il l'a posée. Elle a couru, comme tu le lui avais dit, sans s'arrêter pour personne ; et lui a sauté de sa borne, et il la cherche depuis, dans les rues qui descendent. De lui, il te reste un chapeau." },
      { if: { all: [{ not: SORTIS }, { not: ATTELE }, { not: { has: "j:line_consigne" } }] }, text: "Elle était sur les épaules de son père, tout à l'heure, quand tu as regardé d'ici : deux nattes, et le cadran dans les yeux. Quelqu'un est venu la prendre. Tu ignores qui. Il te suffit de savoir, par un Cahier, qu'on l'a prise ; et que son père a sauté de la borne, en criant, et qu'il court encore." },
      { if: { has: "j:line_promesse" }, text: "Tu lui as dit que vous vous reverriez, et de quoi elle aurait l'air : une robe grise, des lunettes. Elle a répondu qu'elle s'ennuierait, d'ici là, et qu'elle ferait quelque chose pour toi." },
    ],
    choices: [{ back: "K15j_galerie" }] },

  K15j_vue_canal: { act: "V", title: "Jusqu'au septième arbre", place: "tour", ambiance: "chateau",
    text: [
      "Par-dessus les toits, le pré de la Foire, vide, avec ses charrettes rangées comme des dominos. Puis le bassin, et le chemin du canal entre ses peupliers. Leurs feuilles sont retournées, toutes, du côté pâle : un coup de vent passait.",
      { if: SORTIS, text: "Le chemin est vide jusqu'où porte l'œil. Très loin, vers Roquebise, la poussière que tu as vue de la Cage est retombée. Il y a une charrette bleue, quelque part au-delà de ce qu'on voit, qui roule encore, avec trois Noyer dessus, dans un monde où les roues tournent." },
      { if: { all: [{ not: SORTIS }, ATTELE, { has: "monde:girard_jure" }] }, text: "Passé le septième, près du ponceau, le point bleu. Tu le fixes. Il est où il était quand tu l'as vu de la Cage : au-delà de l'arbre grêle, dont on t'a écrit qu'il était le bord. Il a juré sur la tête de sa jument. D'ici, une jument est une chose claire, à côté du bleu, qui a peut-être quatre pattes. Elle est à sa place. Il a tenu." },
      { if: { all: [{ not: SORTIS }, ATTELE, { not: { has: "monde:girard_jure" } }] }, text: "Le point bleu a bougé. Il était passé le septième arbre, quand tu l'as vu de la Cage. Il est en deçà, à présent, de trente pas, le nez vers la ville. Il a posé quelque chose de clair au ponceau, et il revient : il vient chercher son père. Tu mesures de l'œil trente pas, entre une charrette et un arbre grêle, et tu sais de quel côté de cet arbre le monde s'arrête." },
      { if: { all: [{ not: SORTIS }, { not: ATTELE }, { has: "j:line_consigne" }] }, text: "Passé le septième, sur le petit pont, il y a quelque chose de clair, de minuscule, qui est assis. Elle a couru. Elle a compté les arbres. Elle attend, comme tu le lui as dit, avec sa boîte de fer sur les genoux, que quelqu'un vienne la chercher ; et elle regarde par ici." },
      { if: { all: [{ not: SORTIS }, { not: ATTELE }, { not: { has: "j:line_consigne" } }] }, text: "Passé le septième arbre, il y a quelque chose de clair, de minuscule, sur le chemin. À cette distance, on ne voit pas si cela marche. Tu décides que cela marche. On t'a écrit qu'on l'avait posée là, et qu'on lui avait dit de compter." },
      "Au-delà, la plaine, blonde, avec des villages. Elle est exactement comme elle était. Rien n'y marque l'endroit où les blés bougent encore.",
    ],
    choices: [{ back: "K15j_galerie" }] },

  K15j_vue_basse: { act: "V", title: "Les toits du bas", place: "tour", ambiance: "chateau",
    text: [
      "La ville basse est un damier de toits bruns, coupé de canaux. L'eau y luit comme du fer-blanc. Sur le bassin, une voile est gonflée, et le bateau qu'elle tire a devant lui une moustache d'écume, blanche, dure, comme sculptée.",
      "C'est trop loin pour une figure. Tu sais seulement où regarder.",
      { if: { has: "monde:perrine_sortie" }, text: "Le quai des Almanachs, l'étal sous son auvent vert. Il est fermé : on voit le volet, de la grosseur d'un grain de riz. Elle est sortie avant onze heures par le halage, avec son ballot. Tu lui avais dit un peuplier. Elle t'a demandé auquel tu serais, et tu n'as pas su mentir assez vite." },
      { if: { all: [{ has: "monde:perrine_debout" }, { not: { has: "monde:perrine_sortie" } }] }, text: "Le quai des Almanachs, l'auvent vert. Elle est dessous, debout, de la cire dans les oreilles, au milieu de gens qui viennent de s'arrêter. Elle a dû le sentir à ceci : le crieur de moules, à côté d'elle, n'a pas fini son mot. Elle sortira la dernière, a-t-elle dit, après ceux qui pleurent. Elle a une heure de cette note devant elle, sans la savoir, comme Baudouin sur sa marche." },
      { if: { not: { any: [{ has: "monde:perrine_sortie" }, { has: "monde:perrine_debout" }] } }, text: "Le quai des Almanachs, l'auvent vert. Elle est dessous. Elle vendait. Elle a un almanach à la main, tendu à quelqu'un, ouvert à la page de juin, et la bouche sur un prix." },
      { if: { has: "j:perrine_adieu_vrai" }, text: "Tu lui as dit adieu pour de bon, ce matin, avec les mots. Elle t'a donné l'almanach de l'année, pour que tu saches au moins quel jour on était." },
      { if: { has: "monde:brindille_sortie" }, text: "Plus près, le pont des Trois-Chandelles. Dessous, il n'y a personne : trente gueux en sont sortis debout cette nuit, une petite sur un dos." },
      { if: { has: "monde:tiphaine_partie" }, text: "Et quelque part dans ce damier, rue des Aiguilliers, une ancienne novice a les doigts écorchés d'avoir tenu un burin, et dort peut-être, la tête sur un établi, pendant que tout s'arrête autour d'elle." },
    ],
    choices: [{ back: "K15j_galerie" }] },

  K15j_vue_guilde: { act: "V", title: "La cour des Jurés", place: "tour", ambiance: "chateau",
    text: [
      "Du côté du levant, la colline des Jurés est tout près, sous toi : on donnerait du pain aux moineaux de sa cour. Les quatre logis, le cadran solaire, la poterne.",
      "À la poterne, le père Loquet dort sur son tabouret, le menton sur la poitrine, sa baguette en travers des genoux. Il dormait avant. Il n'aura rien su.",
      "À une fenêtre du logis de l'est, une figure, un œil bleu : maître Lunel, qui regardait la Tour. C'est lui qui racontera, dans soixante ans, à quelqu'un qui écrit en bâtons, qu'un vieillard a traversé la cour en disant qu'il allait se promener.",
      { if: { has: "monde:josquin_debout" }, text: "Dans la ruelle, à dix pas de la porte de fer, Josquin est debout. Il a les mains aux oreilles, à plat, par-dessus la cire, et il regarde autour de lui avec la figure de quelqu'un qui compte des morts. Il a un charbon à la ceinture. Tu lui as dit d'écrire sur les murs." },
      { if: { has: "j:josquin_porte" }, text: "Dans la ruelle, contre la porte de fer, Josquin est assis, le front relevé. Il comptait les coups, des lèvres. Il a la bouche sur *onze*, arrondie, comme toute la place." },
      { if: { has: "j:aymon_escalier" }, text: "Aymon Foliot est à côté, la main à plat sur le vantail. Il a de la cire, lui. Il a gardé cette porte une heure, pour que personne n'y entre derrière toi, et il la gardera jusqu'à ce que neuf apprentis en sortent." },
      "Les quatre rubans verts sont à l'entrée de la ruelle, la tête dans les épaules, comme des hommes sous une averse. Ils y resteront.",
      { if: { has: "j:coudrier_libre" }, text: "Le plus gros a sur la tête un chapeau de vieillard, noir, à larges bords, un peu de côté." },
    ],
    choices: [{ back: "K15j_galerie" }] },

  K15j_vue_ciel: { act: "V", title: "Midi, à la lettre", place: "tour", ambiance: "chateau",
    text: [
      "Tu lèves la tête. Cela prend du temps, et le ciel arrive par degrés : d'abord le bord des toits, puis les fumées penchées, puis le bleu.",
      "Il y a trois nuages, ronds, blancs, à plat sur le dessous comme des pains. Ils venaient de l'ouest. Leurs ombres sont posées sur la ville basse, nettes, et l'on voit, à la limite, des toits coupés en deux, moitié soleil, moitié gris.",
      "Des hirondelles. Tu en comptes onze, puis tu cesses. Chacune est une petite ancre noire, plantée dans le bleu à une hauteur différente. L'une d'elles a le bec ouvert, à un doigt d'une mouche.",
      "Le soleil est au-dessus de la Tour. On le connaît à ce qu'il fait. L'ombre de la Tour est ramassée à son pied, courte comme une marche. Toute la Tour est un gnomon, et toute la ville est son cadran ; à cet instant, l'ombre touche le chiffre que personne n'a gravé.",
      { after: "j:sait_quarantieme", text: "*La Douzième sonne dans l'heure de qui la nomme.* C'était la page blanche. On te l'a lue dans un silence." },
    ],
    choices: [{ back: "K15j_galerie" }] },

  K15j_aiguille: { act: "V", title: "Longue comme une barque", place: "tour", ambiance: "chateau",
    text: [
      "La grande aiguille est dehors, de l'autre côté du carreau clair, à trois pieds de ta figure. Tu l'as vue avancer, ce matin : elle avait le pas d'une chose qui ne s'est jamais pressée. Elle est arrivée.",
      "Elle est en cuivre doré, creuse, longue comme une barque, rivetée. De si près, on voit les coups de marteau du chaudronnier, et un nid de guêpes, sous la nervure, gros comme le poing. Les guêpes sont autour, en l'air, chacune à sa place.",
      "Son ombre te barre la figure. Elle est froide. Elle l'était déjà ce matin, d'un instant, quand elle passait. Elle ne passe plus.",
      "Tu penses à quelqu'un qui a vu cette ombre-là, du dedans, sur des pierres grises, pendant deux jours, sans savoir d'où elle tombait. {autre} a campé dessous. {autre} t'a écrit : *LA TOUR PENCHE D'UN RIEN.* Tu avais répondu qu'elle était droite. Vous aviez raison tous les deux, à soixante ans près.",
    ],
    choices: [{ back: "K15j_galerie" }] },

  K15j_sud: { act: "V", title: "La face qu'on ne regarde pas", place: "tour", ambiance: "chateau",
    text: [
      "Tu suis le balcon, la hanche à la barre, d'un pas qui n'en est plus un : tu avances un pied, et tu attends que le reste vienne. La face du couchant. Puis celle du midi.",
      "Le petit cadran sans dorure. Au-dessus, les barreaux de fer, vingt et un, avec le trou du septième. Ils passent contre la croisée étroite, à losanges de plomb.",
      { after: "j:vu_fenetre", text: "Tu les as montés ce matin. Tu regardes tes mains, grises aux jointures, et tu regardes le premier barreau, à hauteur de ta poitrine. Tu lèves un bras. Il s'arrête à mi-chemin, et il reste là, levé, pendant que tu fais le compte de ce qu'il faudrait : vingt fois ce geste, et une enjambée." },
      { before: "j:vu_fenetre", text: "Tu regardes le premier barreau, à hauteur de ta poitrine. Tu lèves un bras. Il s'arrête à mi-chemin, et il reste là, levé, pendant que tu fais le compte de ce qu'il faudrait : vingt fois ce geste, et une enjambée." },
      "D'en bas, en te collant au mur, on voit le plomb de la croisée, et derrière le plomb une tache blanche, immobile, haute. C'est une manche. Il y a un bras dedans, levé vers une crémone.",
    ],
    choices: [
      { label: "Monter quand même, un barreau par prière",
        test: { dom: "nature", diff: 15, label: "Vingt barreaux, avec des mains de statue", help: [{ if: { voie: "leste" }, v: 10 }, { if: { voie: "tetu" }, v: 10 }, { if: { has: "j:vu_fenetre" }, v: 5 }] },
        win: { to: "K15j_croisee", fx: { flag: "j:vu_reine_figee", ep: ["perso", 800] } },
        lose: { to: "K15j_barreau_bas" } },
      { back: "K15j_galerie" },
    ] },

  K15j_croisee: { act: "V", title: "À un pas de la croisée", place: "tour", ambiance: "chateau",
    text: [
      "Tu montes. Le mot est juste, et il est loin du compte. Tu décides une main ; elle part ; tu attends qu'elle arrive. Tu décides un pied. Entre deux barreaux, tu dis une prière entière, et tu les sais dans l'ordre : au sixième, tu en es à *sexte.*",
      "Le septième manque. Tu regardes les deux trous dans la pierre. L'enjambée, ce matin, a duré le temps d'un battement. Celle-ci, tu la fais comme on traverse une rivière à gué : tu t'y engages, tu es au milieu, entre deux fers, et le huitième barreau vient sous ta semelle au bout d'une attente où tu as eu le loisir de penser à tout ce que tu n'as pas dit.",
      "Au douzième, la croisée est à ta gauche.",
      "Elle est là. À un pas du plomb. Elle a l'enfant sur la hanche gauche, serrée, et le bras droit levé, la main ouverte, les doigts à deux pouces de la crémone de cuivre. Sa manche a glissé jusqu'au coude. Elle a la figure tournée vers la vitre : vers l'endroit où il y avait, il y a un instant, une paume collée au carreau.",
      "Elle te regarde, donc. Elle regarde l'endroit où tu étais, et tu y es revenu{e}. Tu vois ses yeux de tout près. Ils sont gris, cernés, très ouverts ; elle a entendu onze, elle a compris qu'il n'y en aurait pas d'autre, et elle a fait un pas de plus.",
      "L'enfant montre la fenêtre du doigt. Elle a la bouche ouverte, elle aussi, sur autre chose qu'un chiffre : elle parlait à sa mère. Elle a les joues grises, ou roses ; le plomb des losanges fait de l'ombre, et tu ne veux pas te tromper.",
      { after: "j:bague_rendue", text: "À l'annulaire de la main levée, un anneau d'or pâle a tourné, la pierre en dedans. Elle le retenait du pouce. Elle a ouvert la main pour la crémone, et il tient à peine." },
      "Tu restes là, cramponné{e} à du fer, à cent cinquante pieds d'un jardin de simples. Tu recolles ta paume au carreau, à la même place. Cela prend du temps. Tu veux que ce soit fait.",
    ],
    choices: [{ back: "K15j_galerie" }] },

  K15j_barreau_bas: { act: "V", title: "Le premier barreau", place: "tour", ambiance: "chateau",
    text: [
      "Ta main arrive au premier barreau. Elle se pose dessus. Tu lui dis de serrer.",
      "Elle serre, très lentement, comme se ferme une fleur le soir, et quand elle a serré tu lui dis de tirer, et il ne vient rien. Le bras est d'accord. C'est l'épaule qui a fini. Elle est grise sous la toile ; elle a la dureté et le calme d'une chose qui ne sera plus dérangée.",
      "Tu restes un long moment, la main au fer, la figure levée vers une croisée où il y a une manche blanche. Tu ne monteras pas. Tu le sais, et tu mets à le savoir tout le temps qu'il faut.",
      "« Madame », dis-tu au mur. « Je suis en bas. »",
      "Puis tu décroches tes doigts, un par un, en leur parlant.",
    ],
    choices: [{ back: "K15j_galerie" }] },

  K15j_attente: { act: "V", title: "Contre le verre laiteux", place: "tour", ambiance: "chateau",
    text: [
      "Tu t'adosses au grand cadran. Tu te laisses descendre le long du verre, jusqu'à être assis{e}, les jambes devant toi, sur la pierre tiède. C'est la dernière chose que tes genoux font pour toi.",
      "Le gris est à tes épaules. Tu le sens venir comme on sent venir le sommeil dans une charrette : par les bords. Il ne fait pas mal. Les gens qu'il a pris avaient tous l'air de regarder quelque chose, t'a écrit {autre}. Tu choisis donc ce que tu regardes. Tu regardes la porte basse, par où l'on arrive.",
      { if: { item: "vis_line" }, text: "Tu as dans ta poche une vis, la plus petite d'une montre. Il te faut le temps d'un psaume pour la trouver, et tu la tiens dans ton poing fermé. Une enfant de neuf ans a dit qu'il en manquerait une tant que tu ne serais pas revenu{e} la mettre." },
      { if: { secret: "j_efface" }, text: "Tu penses à ce qu'un vieil homme t'a dit dans un cabinet. Si le douzième sonne dans cette heure-ci, rien de ce qui est né de la Dormante n'aura été. Ni le Cahier. Ni la route. Ni ces sabots, dans l'escalier, que tu entends maintenant, et qui montent quatre à quatre vers quelqu'un qui pourrait les défaire d'un coup de corde." },
      { if: { secret: "j_rester" }, text: "Tu penses que tu voulais rester ici. Dans cette ville, avec ces gens. Tu y es, et tu y restes : c'est une chose qu'il faut demander avec plus de soin." },
      { if: { secret: "j_malade" }, text: "Tu penses à une vieille femme qui tousse dans un mouchoir, et à ce qu'elle t'a fait jurer de taire. Tu le tais depuis neuf jours. Il n'y a plus beaucoup de jours où le dire." },
      "D'abord, c'est dans la note : un grain, un petit défaut régulier, comme un caillou dans une roue. Puis cela s'en détache. Cela devient un bruit à part, sec, pressé, que tu connais, et que personne à Méridane ne fait de cette façon, parce qu'on y porte des souliers.",
      "Des sabots.",
      "Ils montent. Ils s'arrêtent, repartent, glissent, jurent. Une voix, entre deux paliers, crie ton nom, tout de travers, en mangeant la moitié des lettres, comme quelqu'un qui ne l'a jamais dit qu'à une table et qui l'a lu depuis sur une couverture de Cahier.",
      "Tu veux répondre. Ta bouche s'ouvre. Il en sort, très tard, un bruit, à la place d'un mot.",
      "La porte basse s'emplit de quelqu'un.",
    ],
    choices: [{ label: "Regarder", to: "M15", big: true }] },
});

module.exports = { passages: P, extras: {} };
