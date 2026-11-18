// The first reading, « La fièvre »: every passage here is `second: false`. A sea of ink, a boat, a pen that draws the
// coast; six islands, each somebody in disguise, each with a riddle; the legend of the map; and the island of mist
// at the centre, where the reading ends on `fievre`.
module.exports = {
  A_encre: { act: "I", title: "La mer d'encre", place: "encre", second: false, hub: true, backName: "la barque",
    text: [
      { first: true, text: "L'eau est noire, épaisse, lisse comme de la laque, et elle sent l'encre de noix et la fièvre. Ta barque glisse dessus sans rames, sans bruit, comme une plume sur un papier glacé. Il n'y a pas d'horizon. Il n'y a pas de ciel non plus, ou plutôt le ciel est blanc, du blanc d'une feuille qu'on n'a pas encore commencée, et la mer noire s'y arrête net, en une ligne parfaitement droite, comme la marge d'un cahier." },
      { first: true, text: "Tu as chaud. Tu as horriblement chaud, d'une chaleur qui vient de l'intérieur, des os, et qui te fait claquer des dents. Ta main droite tient une plume de héron. Elle bouge toute seule. Elle trace, sur le blanc du ciel, au fur et à mesure que la barque avance, la ligne de la côte, les anses, les pointes, les îles qui sortent de l'encre une à une, comme si c'était ta plume qui les inventait, ou comme si elles attendaient qu'on les dessine pour exister." },
      { again: true, text: "La mer d'encre, le ciel de papier, ta barque qui glisse, et ta main qui dessine la côte à mesure. Au loin, dans le blanc, des îles attendent leur trait." },
      { if: { has: "enigme:f1" }, text: "La poudre amère de la Voilière te brûle encore la langue. Ta fièvre a baissé d'un degré, et l'encre de la mer a pâli d'une nuance, comme une page qui sèche." },
    ],
    choices: [
      { label: "Lever les yeux vers le ciel blanc", if: { seen: "A_main" }, hide: { seen: "A_ciel" }, to: "A_ciel" },
      { label: "Te pencher sur ton reflet dans l'encre", if: { has: "enigme:f2" }, hide: { seen: "A_reflet" }, to: "A_reflet" },
      { label: "Repêcher la bouteille qui flotte contre la barque", if: { has: "enigme:f3" }, hide: { seen: "A_bouteille" }, to: "A_bouteille" },
      { label: "Regarder ta main dessiner", hide: { seen: "A_main" }, to: "A_main" },
      { label: "Écouter les voix qui tombent du ciel blanc", if: { seen: "A_main" }, to: "A_voix" },
      { label: "Lire la légende au coin de la carte", if: { seen: "A_main" }, hide: { has: "enigme:f5" }, to: "A_legende" },
      { label: "Laisser la barque aller vers l'île des cloches", hide: { has: "enigme:f1" }, to: "A_cloches" },
      { label: "Laisser la barque aller vers l'île blanche", if: { has: "enigme:f1" }, hide: { has: "enigme:f2" }, to: "A_sel" },
      { label: "Laisser la barque aller vers la tour qui fait tic-tac", if: { has: "enigme:f2" }, hide: { has: "enigme:f3" }, to: "A_tour" },
      { label: "Laisser la barque aller vers l'entrepôt sur pilotis", if: { has: "enigme:f3" }, hide: { has: "enigme:f4" }, to: "A_magasin_porte" },
      { label: "Laisser la barque aller vers le mât où rame un pendu", if: { has: "enigme:f4" }, hide: { has: "enigme:f6" }, to: "A_pendu" },
      { label: "Laisser la barque entrer dans la brume", if: { has: "enigme:f6" }, to: "A_herons" },
    ] },

  A_main: { act: "I", title: "La main qui dessine", place: "encre", second: false,
    fx: { item: "legende" },
    text: [
      "Tu regardes ta main comme on regarde la main d'un autre. Elle est maigre, brûlante, avec un tremblement très fin au bout des doigts, et pourtant le trait qu'elle trace est d'une sûreté que tu n'as jamais eue éveillé{e} : un trait de maître, souple, nerveux, qui suit la côte sans hésiter, qui pose les sondes, les hachures des marais, les petits arbres des îles.",
      "La carte s'étend au-dessus de toi, dans le ciel blanc, immense, et ta barque est un point au milieu. Tu y reconnais des choses que tu n'as pas encore vues : une île de cloches, une île blanche, une tour, un entrepôt, un mât, et au centre, une tache grise, estompée au doigt, que ta main refuse de dessiner.",
      { if: { voie: "graveur" }, text: "Tu reconnais le trait. C'est celui de ton maître, Eustache Malbrouck, celui que tu as copié dix mille fois sur le cuivre sans jamais l'égaler. Ta main l'a appris. Ta main s'en souvient mieux que toi." },
      "Au coin de la carte, dans un cartouche orné de roseaux, ta main a écrit le mot *Légende*, et six lignes en dessous.",
    ],
    choices: [
      { back: "A_encre" },
    ] },

  A_voix: { act: "I", title: "Les voix du ciel blanc", place: "encre", second: false,
    fx: { clue: "i_voix" },
    text: [
      "Tu tends l'oreille. Du ciel de papier tombent des voix, lointaines, déformées, comme des voix entendues sous l'eau, ou à travers une porte. Une voix de femme, douce et sans réplique : *Le lit douze délire depuis trois jours. Le lit douze dessine sur les feuilles de température. J'ai voulu prendre le crayon : on m'a mordue.*",
      "Une voix d'homme, sèche, pressée, et un tic-tac au fond : *Cent vingt pulsations. Quinquina, double dose. Une nuit encore, et nous saurons : un convalescent de plus, ou un lit de libre.*",
      "Et une troisième, grasse, prudente, tout près, comme penchée sur toi : *Le douze parle ? Des noms ? Mon nom ?*",
      "La barque tangue. Les voix s'éteignent. Le ciel redevient muet et blanc.",
    ],
    choices: [
      { back: "A_encre" },
    ] },

  A_legende: { act: "I", title: "La légende", place: "encre", second: false, puzzle: "f5",
    text: [
      "Tu lis la légende que ta main a écrite, de la même écriture que la carte, mais plus petite, plus serrée, comme un secret qu'on chuchote.",
    ],
    choices: [
      { back: "A_encre" },
    ] },

  // ------------------------------------------------------------------ the island of soft bells
  A_cloches: { act: "I", title: "L'île des Cloches Molles", place: "cloches", second: false,
    text: [
      "L'île est faite de draps. Des draps blancs, propres, tendus sur des collines invisibles, qui ondulent doucement comme une poitrine qui respire. Ta barque s'échoue sur un rivage de toile amidonnée qui crisse sous tes pieds. Partout, des cloches pendent à des perches, des cloches de toile, molles, qui se balancent dans un vent que tu ne sens pas et sonnent sans bruit, avec un mouvement de langue qui ne frappe rien.",
      "Sur chaque colline de drap, une forme est allongée, immobile, les mains sur la poitrine. Des dizaines. Elles ont toutes le même visage, pâle et luisant de sueur. Le tien.",
      "Au sommet de la plus haute colline se tient une femme immense, aux grandes ailes blanches empesées qui lui sortent de la tête au lieu des épaules, et qui claquent quand elle tourne le visage. Elle tient une clochette de cuivre, la seule qui sonne. Elle l'agite. *Ding.* Tous les corps allongés frissonnent ensemble.",
    ],
    choices: [
      { label: "Monter vers la femme aux ailes blanches", to: "A_voiliere" },
      { label: "Regarder de près un des corps couchés", hide: { seen: "A_corps" }, to: "A_corps" },
      { label: "Compter les collines de draps", if: { seen: "A_corps" }, hide: { seen: "A_lits" }, to: "A_lits" },
      { back: "A_encre" },
    ] },

  A_corps: { act: "I", title: "Le dormeur", place: "cloches", second: false,
    text: [
      "Tu te penches sur la forme la plus proche. C'est toi, en effet, en chemise de nuit d'hôpital, les lèvres sèches, les yeux qui roulent sous les paupières. Ta main droite, sur la poitrine, serre un bout de crayon. Elle dessine, sur le drap, à petits gestes obstinés, une ligne de côte.",
      "Tu touches ton propre front. Il est brûlant. Tu retires vivement ta main. Le dormeur ouvre les yeux, te regarde sans te voir, et dit, d'une voix de vieillard : « Pas par là. » Puis il les referme.",
    ],
    choices: [
      { back: "A_cloches" },
    ] },

  A_voiliere: { act: "I", title: "La Voilière", place: "cloches", second: false, puzzle: "f1",
    text: [
      "La femme aux ailes te regarde monter avec une patience infinie, comme on regarde un enfant monter un escalier trop grand. Son visage est long et osseux, ses yeux bleus tombent un peu aux coins. Elle sent le linge bouilli et la cire.",
      "« Tu as soif, dit-elle. Tu as toujours soif. Je ne te donnerai rien tant que tu ne sauras pas ce que je te donne. »",
    ],
    choices: [
      { back: "A_cloches" },
    ] },

  A_f1: { act: "I", title: "La poudre amère", place: "cloches", second: false,
    fx: { clue: "i_patients" },
    text: [
      "« Le quinquina », dis-tu. La Voilière sourit, ce qui fait claquer ses ailes. Elle sort de sa manche une cuillère d'étain, y verse une poudre brune, y ajoute une goutte d'eau, et te la met dans la bouche avec une autorité qui ne souffre aucune discussion.",
      "C'est amer à hurler. C'est amer comme une écorce de l'autre bout du monde, comme une forêt brûlée, comme un remords. Tu avales. La chaleur, dans tes os, recule d'un pas.",
      "Elle essuie la cuillère sur son tablier. « Sais-tu pourquoi on appelle les malades des patients ? Parce que c'est tout ce qu'on leur demande. Attendre, sans bouger, comme le héron au bord de l'eau attend son poisson. Les malades pressés meurent les premiers. »",
      "« Bien, dit la Voilière. À présent, va voir le Roi. Il veut ta carte. Ne la lui donne pas avant de savoir ce qu'il en fera. » Elle agite sa clochette. *Ding.* Et tu te retrouves dans ta barque.",
    ],
    choices: [
      { back: "A_encre" },
    ] },

  // ------------------------------------------------------------------ the kingdom of salt
  A_sel: { act: "I", title: "Le royaume du Sel", place: "sel", second: false,
    fx: { clue: "i_roi" },
    text: [
      "L'île est blanche, d'un blanc aveuglant, et elle crisse sous la quille : du sel. Des collines de sel, des tentes de sel, des routes de sel bordées de statues de sel, hommes et femmes figés au milieu d'un geste, une pelle à la main, un panier sur l'épaule, la bouche ouverte. Le ciel au-dessus est de plomb, bas, lourd, chargé d'une pluie qui ne tombe pas.",
      "Au centre, sur un trône de sel taillé, un roi immense, tout blanc, barbe blanche, manteau blanc à col de fourrure blanche, se tient immobile, les mains sur les genoux. Quand il parle, des grains se détachent de ses lèvres et roulent dans sa barbe.",
      "« Le cartographe, dit-il, d'une voix lente de propriétaire. Je t'attendais. J'ai payé ta carte. Je l'ai payée en écus et en patience. Je vais drainer cette mer noire, la mettre en sel et en blé, et ces petits gens des roseaux iront ailleurs, ou nulle part. » Il tend une main blanche. « Donne. »",
    ],
    choices: [
      { label: "Lui demander ce qu'il craint", to: "A_roi" },
      { label: "Regarder les statues de sel", hide: { seen: "A_statues" }, to: "A_statues" },
      { back: "A_encre" },
    ] },

  A_statues: { act: "I", title: "Les sujets de sel", place: "sel", second: false,
    text: [
      "Tu passes entre les statues. Elles sont faites avec un soin terrible : on voit les ampoules aux mains, les chemises collées au dos par la sueur, les pieds nus dans les sabots. Ce sont des ouvriers des salines. Ils ont tous les yeux tournés vers le trône.",
      "L'une d'elles, une petite fille avec un panier, a une larme de sel au coin de l'œil, qui a coulé et qui s'est figée à mi-joue. Tu la touches. Elle est tiède.",
      { if: { voie: "arpenteur" }, text: "Tu as arpenté ces terres-là, dans l'autre monde, celui d'avant la fièvre. Tu as planté tes jalons au milieu de gens qui te regardaient comme ces statues regardent le trône. Ils savaient tous que tes chiffres allaient leur prendre quelque chose." },
    ],
    choices: [
      { label: "Écouter la petite fille au panier", hide: { seen: "A_fille_sel" }, to: "A_fille_sel" },
      { back: "A_sel" },
    ] },

  A_roi: { act: "I", title: "Le Roi de Sel", place: "sel", second: false, puzzle: "f2",
    text: [
      "« Ce que je crains ? » Le Roi de Sel rit, et un morceau de sa joue tombe. « Rien. Je suis le plus riche de cette côte. » Puis il baisse la voix, et il lève les yeux vers le ciel de plomb. « Une seule chose. Devine-la, et je te laisse passer. Ne la devine pas, et tu restes, et tu deviens sel. »",
    ],
    choices: [
      { back: "A_sel" },
    ] },

  A_f2: { act: "I", title: "La pluie", place: "sel", second: false,
    text: [
      "« La pluie », dis-tu. Et comme si le ciel n'attendait que le mot, la pluie tombe.",
      "Une pluie grosse, tiède, qui frappe l'île de sel avec un bruit de mille doigts. Les collines fondent. Les tentes s'affaissent. Les statues pleurent jusqu'aux pieds, et leurs visages se défont, et sous le sel, il y a des visages de chair, qui clignent des yeux, étonnés. Le Roi de Sel se tient la tête à deux mains, et sa couronne glisse, tombe, roule jusqu'à toi.",
      "Tu la ramasses. Une couronne de sel cristallisé, lourde comme une pierre, gravée de chiffres romains : *XIV · IX*. Quand tu relèves la tête, le roi n'est plus qu'un tas de sel mouillé sur un trône vide, avec deux yeux gris au sommet, qui te regardent encore.",
    ],
    choices: [
      { back: "A_encre" },
    ] },

  // ------------------------------------------------------------------ the clock tower
  A_tour: { act: "I", title: "La Tour du Médecin-Horloge", place: "horloge", second: false,
    text: [
      "La tour sort de l'encre, ronde, étroite, faite de rouages empilés, et toute la tour fait tic-tac, si fort que l'eau autour frémit en cercles à chaque battement. Tu montes un escalier qui est un ressort, et chaque marche se tend sous ton pied et te rejette à la suivante.",
      "En haut, dans une pièce ronde, un petit homme sec en redingote noire, à lunettes, t'attend debout. À la place de la tête, il a une montre. Une grosse montre à répétition, en or, avec un cadran d'émail blanc, deux aiguilles qui tournent trop vite, et un remontoir qui lui sert de nez.",
      "« Votre pouls, dit le Médecin-Horloge, en prenant ton poignet entre deux doigts froids. Cent vingt. Trop vite. Vos jours sont en désordre. Un malade qui ne sait plus dans quel ordre ses jours sont venus ne guérit jamais : il recommence. »",
    ],
    choices: [
      { label: "Le laisser ouvrir son cadran", to: "A_cadran" },
      { label: "Lire le registre ouvert sur le pupitre", hide: { seen: "A_registre" }, to: "A_registre" },
      { label: "Descendre voir le balancier", hide: { seen: "A_balancier" }, to: "A_balancier" },
      { back: "A_encre" },
    ] },

  A_cadran: { act: "I", title: "Le cadran", place: "horloge", second: false, puzzle: "f3",
    text: [
      "Le Médecin-Horloge défait les boutons de sa redingote. Sa poitrine est un second cadran, plus grand, ouvert. Tic. Tac.",
    ],
    choices: [
      { back: "A_tour" },
    ] },

  A_f3: { act: "I", title: "Les jours à l'heure", place: "horloge", second: false,
    text: [
      "Le départ, le quai, les drapeaux, ton maître qui rit avec ses deux crayons derrière les oreilles. Le guide, debout sur une jambe, qui montre l'horizon et dit *pas par là*. La nuit de tempête, les barques qui s'éloignent, une main qui tient un couteau. Et la dérive, sur une eau blanche, seul{e}.",
      "Les aiguilles du Médecin-Horloge ralentissent. Tic. Tac. Tic. « Quatre-vingt-dix, dit-il, satisfait. Vous vous souvenez dans l'ordre. C'est un début de guérison, ou un début d'ennuis. » Il referme son cadran. « Une main qui tient un couteau. À qui, la main ? Je soigne les fièvres. Les crimes ont leurs propres médecins. »",
      "Tu repenses à la main. Tu ne vois pas le visage. Tu vois les doigts, gras, courts, et un gilet de cuir taché.",
    ],
    choices: [
      { back: "A_encre" },
    ] },

  // ------------------------------------------------------------------ the store
  A_magasin_porte: { act: "I", title: "Le Magasin", place: "magasin", second: false,
    text: [
      "Un entrepôt de planches noires, sur pilotis, au-dessus de l'encre, avec une enseigne peinte : *Magasin de l'Expédition. Tout est compté.* Des rats courent sur les poutres, gros comme des chats, avec des lorgnons sur le nez et des plumes derrière l'oreille. Ils comptent. Tu les entends : *quarante livres de biscuit, six pintes d'eau-de-vie, douze brasses d'amarre, une, deux, trois*.",
      "La porte est fermée d'un cadenas de fer en forme de rat, aux yeux de verre rouges.",
    ],
    choices: [
      { label: "Tourner les molettes du rat de fer", hide: { has: "enigme:f4" }, to: "A_rat" },
      { label: "Écouter les rats qui comptent sur les poutres", hide: { seen: "A_rats_comptent" }, to: "A_rats_comptent" },
      { back: "A_encre" },
    ] },

  A_rat: { act: "I", title: "Le rat de fer", place: "magasin", second: false, puzzle: "f4",
    text: [
      "Quatre molettes sur le ventre du rat. Tu sens dans ta poche le poids d'une couronne de sel, et ses chiffres gravés te reviennent sous les doigts.",
    ],
    choices: [
      { back: "A_magasin_porte" },
    ] },

  A_magasin: { act: "I", title: "Le marchand de rats", place: "magasin", second: false,
    fx: { clue: "i_brunel" },
    text: [
      "Dedans, des tonneaux jusqu'au plafond, des sacs, des caisses, des rouleaux de cordage. Et au milieu, derrière un comptoir, un rat énorme, gros comme un homme gros, en gilet de cuir taché, qui compte des pièces avec des doigts courts et gras, et qui lève vers toi deux petits yeux prudents.",
      "« Ah, dit-il, d'une voix grasse. L'apprenti. On m'avait dit que tu étais mort{e}. Je l'avais même écrit. » Il tapote un registre. « Tout le monde est mort. Je suis rentré le premier, j'ai fait mes comptes, j'ai tout écrit. Ça simplifie. Les morts ne réclament pas leurs gages. »",
      "Derrière lui, accroché à un clou, un bout d'amarre de barque, épais comme un poignet. Le bout est net, lisse, tranché d'un seul coup, au couteau, comme on coupe une amarre qu'on veut voir partir.",
    ],
    choices: [
      { label: "Lui demander qui a coupé l'amarre", hide: { seen: "A_rat_parle" }, to: "A_rat_parle" },
      { label: "Lire son grand livre par-dessus le comptoir", hide: { seen: "A_comptoir" }, to: "A_comptoir" },
      { back: "A_encre" },
    ] },

  A_rat_parle: { act: "I", title: "Les comptes du rat", place: "magasin", second: false,
    text: [
      "Le rat ne regarde pas l'amarre. Il regarde ses pièces. « La tempête, dit-il. Les tempêtes coupent les cordes. Tout le monde sait ça. » Il en compte trois, les glisse dans son gilet. « Et le guide. C'est le guide qui nous a menés par là. C'est un homme des roseaux, ces gens-là sont tous des voleurs et des noyeurs. On l'a mis en prison. On le pendra. Ça simplifie aussi. »",
      "Il lève vers toi ses petits yeux. « Tu ne te souviens de rien, hein ? Tu as la fièvre. On ne croit pas les fiévreux. » Il sourit, et ses dents sont jaunes et longues. « Dors. »",
    ],
    choices: [
      { back: "A_magasin" },
    ] },

  // ------------------------------------------------------------------ the rower
  A_pendu: { act: "I", title: "Le mât du Rameur", place: "pendu", second: false,
    text: [
      "Un mât planté tout droit dans l'encre, sans bateau, sans voile. À la vergue, par les pieds, pend un homme maigre, couleur de vase, les cheveux longs flottant vers l'eau. Il tient deux rames, et il rame, lentement, la tête en bas, dans le vide, avec la régularité de quelqu'un qui a l'habitude et qui n'a pas d'autre choix.",
      "Il te voit. Il ne s'arrête pas de ramer. « Toi, dit-il, d'une voix lente et rare. Tu es vivant{e}. Bon. » Il rame. « Ils m'ont pendu sans corde. Une cellule, c'est une corde. Ils disent que je vous ai noyés. Moi, je vous avais dit : pas par là. »",
    ],
    choices: [
      { label: "Lui demander le chemin de la brume", to: "A_rameur" },
      { label: "Suivre des yeux les hérons qui passent", hide: { seen: "A_herons_vol" }, to: "A_herons_vol" },
      { back: "A_encre" },
    ] },

  A_rameur: { act: "I", title: "Le mot", place: "pendu", second: false, puzzle: "f6",
    text: [
      "« Le chemin ? » Il rame. « Il n'y a pas de chemin. Il y a un mot. Chez nous, on n'entre pas par un chemin, on entre par un mot. »",
    ],
    choices: [
      { back: "A_pendu" },
    ] },

  A_f6: { act: "I", title: "Patience", place: "pendu", second: false,
    text: [
      "« Patience », dis-tu. Le rameur pendu cesse de ramer, pour la première fois. Il te regarde, la tête en bas, et il sourit, d'un sourire qui lui fend la figure à l'envers.",
      "« Tu l'as. Garde-le. Tu en auras besoin deux fois. » Il reprend ses rames. « La brume est derrière moi. Elle crie. Ce sont les hérons. Et dessous les hérons, il y a ceux que tu cherches. »",
    ],
    choices: [
      { back: "A_encre" },
    ] },

  // ------------------------------------------------------------------ the island of mist
  A_herons: { act: "I", title: "L'île aux Hérons", place: "herons", second: false,
    fx: { clue: "i_herons" },
    text: [
      "La brume se referme sur la barque comme une main mouillée. Plus de ciel blanc, plus de mer noire : un gris uniforme, épais, qui te colle aux cils. Et dans le gris, des cris. Des milliers de cris rauques, enroués, qui viennent de partout et de nulle part, le cri des hérons, comme si mille vieillards toussaient ensemble dans une église noyée.",
      "Ta plume, dans ta main, s'est arrêtée. Elle refuse de dessiner cette île. Tu la sens trembler entre tes doigts comme un oiseau qu'on tient.",
      "Et dans le gris, une voix, tout près, une voix de vieil homme qui rit en parlant, que tu connais mieux que la tienne : « Par ici, petit{e}. Par ici. Tu as mis le temps. »",
    ],
    choices: [
      { label: "Écouter ce qui se cache sous les cris", hide: { seen: "A_cris" }, to: "A_cris" },
      { label: "Suivre la voix", to: "F_fievre" },
    ] },

  F_fievre: { act: "I", title: "La fièvre", place: "herons", end: true, second: false,
    fx: { flag: "fin:fievre", meet: ["malbrouck"] },
    text: [
      "La barque touche un fond de vase. Tu descends, dans de l'encre jusqu'aux genoux. Au milieu de l'île, dans un cercle de roseaux, il y a un trou d'eau noire, rond comme un puits, et dans le puits, un vieil homme maigre, à la barbe blanche, aux lunettes de travers, un crayon derrière chaque oreille, enfoncé dans l'encre jusqu'au menton. Eustache Malbrouck. Ton maître.",
      "Il te regarde. Il rit. Même noyé, il rit. « Ne lâche pas la plume, dit-il. Tout ce que tu as dessiné cette nuit est vrai. Tout. Les îles sont des gens et les gens sont des îles. Dessine-moi le chemin, et ils viendront me chercher. »",
      { if: { has: "enigme:f5" }, text: "Tu lui dis le mot de la légende, les six lignes, les hérons. Il hoche la tête dans l'encre. « Bien. Tu sais lire ta propre main. C'est plus rare qu'on croit. »" },
      { if: { clue: "i_corde" }, text: "Tu lui parles de l'amarre coupée, du rat, de ses doigts gras. Ses yeux se durcissent derrière ses lunettes. « Je sais, dit-il. J'ai vu le couteau. Je n'ai pas vu la main qui payait le couteau. »" },
      "L'encre monte. Elle lui touche les lèvres. Tu tends la main pour le saisir, et ta main traverse la sienne comme on traverse un reflet. L'encre te monte aux genoux, à la taille, à la poitrine, chaude, si chaude, et la brume se met à sonner, *ding*, une petite clochette de cuivre, très loin au-dessus, *ding*, et la chaleur se retire d'un coup, comme une marée.",
      "Tu ouvres les yeux sur un plafond blanc. Un vrai plafond, avec une fissure en forme de rivière. Une odeur de linge bouilli, de cire et de quinquina. Une clochette sonne quelque part. Et ta main droite, sous le drap, serre un bout de crayon usé jusqu'au bois.",
    ] },
};
