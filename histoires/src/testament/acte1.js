// Act I · « La lecture », shared by both readings unless tagged: the road through the iris fields, the gate, the
// heirs in the salon, the reading of the will, the first quatrain, and the garden at nightfall (orangery, statue of
// Flora, sundial, the gardener's house).
module.exports = {
  A_voiture: { act: "I", title: "La route des iris", place: "route", second: false,
    text: [
      "La voiture de l'étude sent le cuir mouillé et la pipe de Maître Brissac, qui n'y est pas. Tu y es seul{e}, avec le testament sur les genoux dans sa chemise de soie lilas, et le cocher qui chante faux sur le siège.",
      "La route sort de Sauvebonne entre deux murets de pierre sèche, puis les murets s'écartent, et les champs commencent. Des iris, à perte de vue : des milliers de lames vertes dressées vers le ciel, et au-dessus, en nappes, les fleurs violettes et grises, si nombreuses qu'elles font une brume à hauteur d'homme. Le soir tombe sur elles. Le violet fonce jusqu'au noir, le gris pâlit jusqu'au blanc, et le vent qui descend des collines les couche toutes du même côté, avec un bruit de soie froissée, comme si un peuple immense saluait le passage d'un corbillard.",
      "L'odeur entre par la portière. Elle est poudrée, froide, un peu terreuse, l'odeur d'une chambre où quelqu'un a longtemps dormi. On dit à Sauvebonne que la racine d'iris doit sécher trois ans avant de sentir quoi que ce soit. On dit aussi que Madame Castellane avait mis trente ans à devenir aimable, et qu'elle était morte juste avant d'y arriver.",
      "Au bout de la route, sur une butte, la Bastide aux Iris : une longue maison ocre aux volets lilas, trois cyprès noirs devant, comme trois notaires qui attendent qu'on signe.",
    ],
    choices: [
      { label: "Ouvrir la chemise lilas et relire le testament en route", hide: { seen: "A_voiture_lire" }, to: "A_voiture_lire" },
      { label: "Demander au cocher s'il a connu Madame Castellane", hide: { seen: "A_cocher" }, to: "A_cocher" },
      { label: "Descendre devant la grille", fx: { until: 18 }, to: "A_grille" },
    ] },

  A_voiture_lire: { act: "I", title: "Ce que tu vas lire", place: "route",
    text: [
      "Tu dénoues le ruban. Quatre pages de papier vergé, une grande écriture nette, sans une rature : une écriture qui n'a jamais hésité de sa vie.",
      "Tu as copié des centaines de testaments. On y lègue des fermes, des créances, des lits à baldaquin, des rancunes. Celui-ci commence comme les autres, *Moi, Aurore Castellane, veuve Ferrier, saine d'esprit et lasse de corps*, puis il bifurque d'un coup, comme un cheval qui voit un serpent : *je laisse mon bien à qui saura le trouver.*",
      "Plus bas, ton propre titre : *le clerc de Maître Brissac, qui lira ceci, sera seul juge de ce qui sera trouvé.* Ton nom n'y est pas. Ta fonction y est, ce qui est plus inquiétant.",
      "Et plus bas encore, des vers. Tu refermes la chemise. Le cocher a cessé de chanter. Il te regarde par-dessus son épaule, avec la mine d'un homme qui transporte une bombe et le sait.",
    ],
    choices: [
      { label: "Descendre devant la grille", fx: { until: 18 }, to: "A_grille" },
    ] },

  A_grille: { act: "I", title: "La grille", place: "jardin",
    fx: { meet: ["jaume"] },
    text: [
      "La grille de fer forgé est ouverte. Un vieil homme la tient, noueux comme un cep de vigne, chapeau de paille à la main malgré le soir, une serpette passée à la ceinture de son tablier. Il te salue d'un mouvement de tête si lent qu'on le dirait taillé dans le même bois que lui.",
      "« Jaume, dit-il. Le jardinier. On vous attend au salon. Le neveu, la nièce, la petite. » Il réfléchit, et ajoute : « Et la morte. Elle est à la chapelle, au bout du jardin. Mais elle vous attend aussi, d'une certaine façon. Elle attendait toujours tout le monde. »",
      { second: true, text: "Il te regarde un instant de trop, comme hier soir. Il a les yeux rouges. Il n'a pas dormi. Personne, dans cette maison, n'a dormi depuis le partage." },
    ],
    choices: [
      { label: "Demander à Jaume comment est morte Madame Castellane", hide: { seen: "A_jaume1" }, to: "A_jaume1" },
      { label: "Entrer au salon", to: "A_salon" },
    ] },

  A_jaume1: { act: "I", title: "Le jardinier", place: "jardin",
    text: [
      "« Dans son fauteuil, dit Jaume. Au salon. Avec une fleur d'iris sur les genoux, qu'elle était en train de sentir. Le docteur Vidal a dit : le cœur. Moi, je dis qu'elle avait fini. » Il remet son chapeau. « Quarante ans que je fais pousser ses iris. Elle les sentait tous, un par un, chaque printemps, et elle me disait lequel était raté. Elle se trompait jamais. »",
      "Il regarde la maison. Une lampe vient de s'allumer derrière les volets lilas du salon.",
      "« Ils sont là depuis midi, dit-il. Le neveu a déjà compté les cuillers. La nièce a déjà prié trois fois. La petite n'a rien dit. » Il hausse ses épaules maigres. « La petite ne dit jamais rien. C'est comme ça qu'on sait qu'elle pense. »",
    ],
    choices: [
      { back: "A_grille" },
    ] },

  A_salon: { act: "I", title: "Le salon", place: "salon", hub: true, backName: "le salon",
    fx: { meet: ["hector", "berenice", "odile"] },
    text: [
      { first: true, second: false, text: "Le salon de la Bastide est une grande pièce basse, aux murs tendus de toile lilas passée, où la lumière des lampes tombe en flaques sur un parquet ciré à se mirer dedans. Tout y sent l'iris : les rideaux, les coussins, les bouquets secs dans les vases de Moustiers, et jusqu'au feu de sarments qui craque dans la cheminée. Au-dessus de la cheminée, un grand portrait de femme jeune, en robe blanche, un bouquet à la main, regarde la pièce avec une expression d'ironie si vivante qu'on cherche malgré soi le fauteuil où elle se serait assise." },
      { first: true, second: false, text: "Le fauteuil est là, près de la fenêtre. Vide. Personne ne s'y assoit. Une fleur d'iris fanée traîne encore sur le coussin, et personne n'a osé l'enlever." },
      { first: true, second: false, text: "Trois personnes t'attendent, et elles se sont placées, sans le savoir, comme pour un tableau de genre intitulé *L'Héritage*. Près de la cheminée, un homme de quarante ans en gilet de soie fanée fait sauter une pièce d'argent entre ses doigts. Sur une chaise droite, une femme maigre en noir égrène un chapelet. Debout près de la fenêtre, une jeune femme en robe grise, les mains jointes devant elle, regarde le fauteuil vide." },
      { first: true, second: true, text: "Le salon lilas, le feu de sarments, le fauteuil vide avec sa fleur fanée. Rien n'a bougé depuis hier, sauf les gens. Hector se tient près de la cheminée, sans sa pièce. Bérénice ne prie pas. Odile est revenue ; elle a gardé son chapeau. Et dans le fauteuil du coin, sa jambe sur un tabouret, Maître Brissac regarde le portrait." },
      { again: true, before: "lu", text: "Le salon lilas, le feu de sarments, le portrait au-dessus de la cheminée. Hector fait sauter sa pièce, Bérénice égrène son chapelet, Odile regarde le fauteuil vide." },
      { after: "lu", text: "Depuis la lecture, le salon a changé de température. Hector arpente le parquet, les mains dans le dos. Bérénice prie plus vite. Odile n'a pas bougé de sa fenêtre." },
    ],
    choices: [
      { label: "Te présenter au neveu, qui joue avec sa pièce", second: false, before: "lu", hide: { seen: "A_hector1" }, to: "A_hector1" },
      { label: "Saluer la nièce en noir", second: false, before: "lu", hide: { seen: "A_berenice1" }, to: "A_berenice1" },
      { label: "T'approcher de la jeune femme à la fenêtre", second: false, before: "lu", hide: { seen: "A_odile1" }, to: "A_odile1" },
      { label: "Regarder le portrait au-dessus de la cheminée", hide: { seen: "A_portrait" }, to: "A_portrait" },
      { label: "T'approcher du fauteuil vide", hide: { seen: "A_fauteuil" }, to: "A_fauteuil" },
      { label: "Approcher la dernière page du testament d'une flamme", second: true, if: "lu", hide: { has: "enigme:q5" }, to: "S_flamme" },
      { label: "Ouvrir la chemise lilas et lire le testament", second: false, hide: { has: "lu" }, fx: { until: 19 }, to: "A_lecture" },
      { label: "Parler à Maître Brissac, au coin du feu", second: true, hide: { seen: "S_brissac_salon" }, to: "S_brissac_salon" },
      { label: "Relire le testament, mot pour mot", second: true, hide: { has: "lu" }, fx: { until: 19 }, to: "S_lecture2" },
      { label: "Chercher la réponse au premier quatrain", if: "lu", hide: { has: "enigme:q1" }, to: "A_q1" },
      { label: "Écouter ce que Fine murmure à la porte de l'office", if: "lu", hide: { seen: "A_fine1" }, to: "A_fine1" },
    ] },

  A_hector1: { act: "I", title: "Hector Castellane", place: "salon",
    text: [
      "« Le clerc ! » Hector Castellane t'accueille comme un ami qu'il n'aurait jamais vu, ce qui est sa manière de traiter tout le monde. Il a été beau, et il l'est encore à la lueur des lampes, avec un visage qui commence à glisser vers le bas comme une pâtisserie oubliée au soleil. « Brissac ne vient pas ? La goutte, je parie. Cet homme a la goutte chaque fois qu'il y a une famille à affronter. Je l'envie. »",
      "Il lance sa pièce, la rattrape, la fait disparaître entre ses doigts, la fait réapparaître derrière ton oreille. « Ma tante m'a appris ce tour quand j'avais six ans. C'est la seule chose qu'elle m'ait jamais donnée. Ce soir, j'espère qu'elle se rattrape. »",
      "Il baisse la voix, comme on baisse la voix pour une plaisanterie. « Entre nous : elle détestait les notaires, les curés et les héritiers. Si son testament est aussi aimable qu'elle, nous allons passer une soirée délicieuse. »",
    ],
    choices: [
      { back: "A_salon" },
    ] },

  A_berenice1: { act: "I", title: "Bérénice Castellane", place: "salon",
    text: [
      "Bérénice Castellane lève les yeux de son chapelet le temps exact qu'exige la politesse, et pas une seconde de plus. Elle est maigre, droite comme un cierge, et elle en a la pâleur, la raideur et cette manière de brûler par le haut.",
      "« Vous lirez lentement, j'espère, dit-elle. Ma tante écrivait vite, et pensait plus vite encore, et pas toujours dans le bon sens. » Un grain glisse entre ses doigts. « Je prie pour elle depuis trois jours. Elle en a besoin. Elle n'a pas mis les pieds à la messe depuis trente ans, sauf pour les enterrements, où elle venait sentir les fleurs. »",
      "Elle reprend son chapelet. « Si le bon Dieu me donne quelque chose ce soir, ce sera une école. Pour les filles des cueilleuses. Qu'elles apprennent à lire autre chose que des étiquettes. » Elle te regarde enfin. « Vous savez lire, vous. C'est déjà ça. »",
    ],
    choices: [
      { back: "A_salon" },
    ] },

  A_odile1: { act: "I", title: "Odile Marchal", place: "salon",
    text: [
      "La jeune femme en gris ne se retourne pas tout de suite. Elle a les yeux fermés. Tu comprends au bout d'un moment qu'elle sent la pièce, comme d'autres l'écouteraient.",
      "« Elle est encore partout, dit-elle à voix basse. Dans les rideaux. Dans le fauteuil. Elle portait l'Aurore depuis quarante ans, et la maison en est imprégnée jusqu'aux poutres. Dans un mois, ce sera parti. » Elle ouvre les yeux. Ils sont verts, très clairs, avec une paillette d'or dans le gauche. « Odile Marchal. J'étais sa demoiselle de compagnie. Je lui faisais la lecture. Je sentais pour elle, à la fin, quand son nez a commencé à la trahir. »",
      "Elle désigne d'un mouvement de menton les deux autres. « Eux sont de la famille. Moi, je suis de la maison. Je ne suis là que parce qu'elle l'a demandé. » Elle sourit, à peine. « Elle demandait rarement. »",
    ],
    choices: [
      { back: "A_salon" },
    ] },

  A_portrait: { act: "I", title: "Le portrait", place: "salon",
    fx: { clue: "i_bouquet" },
    text: [
      "Aurore Castellane à vingt ans, peinte en pied, en robe blanche, dans un champ d'iris. Le peintre n'était pas un grand peintre, mais il était amoureux, ce qui revient souvent au même. Il a peint la bouche un peu trop rouge, les yeux un peu trop grands, et une ironie au coin des lèvres qui ne doit rien à son talent.",
      { if: { has: "avis:amour" }, text: "Un grand amour, disait-on en ville, lui avait laissé un parfum et pas de mari. À voir ce portrait, tu crois volontiers au parfum." },
      { if: { has: "avis:riche" }, text: "La femme la plus riche de Sauvebonne, disait-on, et la plus avare de compliments. Le peintre, lui, ne l'a pas été." },
      { if: { has: "avis:devinettes" }, text: "Elle aimait les devinettes plus que les gens, disait-on. Elle regarde le spectateur comme on regarde quelqu'un à qui l'on vient d'en poser une." },
      "Elle tient à la main un petit bouquet de trois fleurs, serrées dans un ruban : de gauche à droite, un brin de jasmin, un iris, une rose. Le peintre les a faites avec un soin d'herboriste, pétale par pétale, alors que la robe est bâclée et les mains à peine dessinées. On dirait que le bouquet comptait plus que la femme.",
    ],
    choices: [
      { back: "A_salon" },
    ] },

  A_lecture: { act: "I", title: "La lecture", place: "salon",
    fx: { flag: "lu", ep: ["histoire", 300] },
    text: [
      "Tu te places devant la cheminée, sous le portrait. Hector s'assoit enfin. Bérénice suspend son chapelet. Odile reste debout. À la porte de l'office, une grosse femme en tablier, le visage rouge, se tamponne les yeux avec un torchon : la cuisinière. Derrière elle, Jaume, son chapeau à la main.",
      "Tu lis. *Moi, Aurore Castellane, veuve Ferrier, saine d'esprit et lasse de corps, je laisse mon bien à qui saura le trouver.*",
      "Hector cesse de sourire. Bérénice fait un signe de croix, au cas où.",
      "*Mes héritiers passeront la nuit qui suit cette lecture sous mon toit. Quatre codicilles sont cachés dans ma maison. Chacun donne le chemin du suivant ; le premier est ci-dessous. Le dernier dira à qui revient la Bastide aux Iris. Le clerc de Maître Brissac, qui lira ceci, sera seul juge de ce qui sera trouvé.*",
      "Trois paires d'yeux se posent sur toi, et tu sens, pour la première fois de ta vie, ce que ressent une pièce d'or sur une table de jeu.",
      "*Si le partage se fait avant l'aube, qu'on relise ce testament le lendemain soir, à la même heure, mot pour mot, et que tout recommence.*",
      "« C'est absurde, dit Bérénice. — C'est charmant, dit Hector. — C'est elle », dit Odile, si bas que toi seul{e} l'entends.",
      "Puis tu lis les vers, et le salon se tait.",
    ],
    choices: [
      { label: "Lire le premier quatrain", to: "A_q1" },
    ] },

  A_q1: { act: "I", title: "Le premier quatrain", place: "salon", puzzle: "q1",
    text: [
      "Tu relis le premier quatrain à voix haute, lentement, comme Bérénice l'a demandé. Les mots tombent dans le silence du salon un à un, comme des graines dans un sillon.",
    ],
    choices: [
      { back: "A_salon" },
    ] },

  A_q1_graine: { act: "I", title: "La graine", place: "salon",
    fx: { ep: ["perso", 200] },
    text: [
      "« Une graine », dis-tu.",
      { second: false, text: "Hector claque des doigts, comme s'il l'avait trouvé lui-même une seconde trop tard. Bérénice fronce les sourcils, cherche une objection, n'en trouve pas, et en conçoit de l'humeur. Odile regarde vers la fenêtre, vers le jardin noir." },
      { second: true, text: "« Évidemment », dit Hector, qui le savait depuis hier, et qui a l'air de trouver que tu as mis bien longtemps. Bérénice ne dit rien. Odile regarde vers la fenêtre, vers le jardin noir." },
      "« L'orangerie, dit Jaume depuis la porte. Elle y gardait ses graines d'iris dans un meuble à tiroirs. Une par variété. Elle leur donnait des noms. » Il tourne son chapeau entre ses doigts. « Une seule porte le sien. »",
      "Hector est déjà debout. « Eh bien, allons cueillir. » Jaume décroche une lanterne. La nuit est tombée sur les iris.",
    ],
    choices: [
      { label: "Aller au jardin avec la lanterne de Jaume", fx: { until: 19 }, to: "A_jardin" },
    ] },

  A_fine1: { act: "I", title: "La cuisinière", place: "salon",
    fx: { meet: ["fine"] },
    text: [
      "Fine t'attrape par la manche à la porte de l'office, et t'attire dans le couloir avec la force tranquille d'une femme qui pétrit le pain depuis quarante ans.",
      "« Des devinettes, souffle-t-elle. Elle a fait ça. Bien sûr qu'elle a fait ça. Elle en posait au marchand de charbon, au facteur, au curé. Au curé surtout. » Elle s'essuie les yeux. « Elle disait que les gens qui trouvent les devinettes ont l'esprit propre, et que les autres ont les ongles sales. Le neveu, il a les ongles faits. Vous comprenez ce que je veux dire. »",
      "Elle jette un coup d'œil vers le salon et baisse encore la voix. « Elle m'a dit, la semaine d'avant, en me rendant sa tasse : *Fine, mes vers ont toujours deux fonds, comme mes malles.* J'ai pas compris. J'ai jamais compris ses phrases. Elle les faisait pour plus tard. »",
    ],
    choices: [
      { back: "A_salon" },
    ] },

  A_jardin: { act: "I", title: "Le jardin, la nuit", place: "jardin", hub: true, backName: "le jardin",
    text: [
      { first: true, text: "Le jardin de la Bastide descend en terrasses vers les champs, et la nuit en a fait un pays inconnu. La lanterne de Jaume découpe dans le noir des morceaux de choses : une allée de buis, une fontaine qui bavarde toute seule, un bras de pierre qui tient une corne d'abondance. Au-delà du cercle de lumière, les iris murmurent, des milliers, tout autour de la maison, comme une foule massée au pied d'un échafaud et qui attend qu'on commence." },
      { first: true, text: "Hector marche devant, trop vite. Bérénice suit, son chapelet dans une main, l'ourlet de sa robe dans l'autre. Odile ferme la marche, sans lanterne. Elle n'en a pas besoin : elle connaît le jardin par cœur, à l'odeur." },
      { again: true, text: "Les allées de buis, la fontaine, le grand rond de nuit où murmurent les iris. Au bout du jardin, la chapelle, une lueur de veilleuse à sa fenêtre." },
    ],
    choices: [
      { label: "Entrer dans l'orangerie", hide: { has: "codicille:1" }, to: "A_orangerie" },
      { label: "T'approcher de la statue de Flore", hide: { seen: "A_flore" }, to: "A_flore" },
      { label: "Lire l'inscription du cadran solaire", hide: { seen: "A_cadran" }, to: "A_cadran" },
      { label: "Descendre jusqu'à la maison du jardinier", hide: { seen: "A_maison_bas" }, to: "A_maison_bas" },
      { label: "Pousser jusqu'à la chapelle, au bout de l'allée des cyprès", hide: { seen: "A_chapelle_soir" }, to: "A_chapelle_soir" },
      { label: "Entrer dans la distillerie, derrière l'orangerie", hide: { seen: "A_distillerie" }, to: "A_distillerie" },
      { label: "Rentrer à la Bastide avec le premier codicille", if: "codicille:1", fx: { until: 21 }, to: "B_souper" },
    ] },

  A_orangerie: { act: "I", title: "L'orangerie", place: "jardin",
    text: [
      "L'orangerie est une longue serre aux vitres embuées, chaude comme une étable, où les orangers en caisse passent l'hiver comme des vieillards en pension. L'air est épais, sucré, avec une pointe d'amertume. La lanterne fait trembler des ombres de feuilles sur le verre, et dehors, de l'autre côté de la buée, le noir colle aux vitres.",
      "Au fond, contre le mur de pierre, un meuble de chêne à cent petits tiroirs, chacun portant une étiquette écrite à la main : *Belle de Vence. Sultane. Gris de lin. Mademoiselle Fine.* Fine, à la porte, rougit jusqu'au cou.",
      "Hector ouvre les tiroirs au hasard, deux à la fois, à pleines mains, et répand des graines sur le carrelage comme un semeur ivre. Jaume serre les mâchoires.",
    ],
    choices: [
      { label: "Chercher le tiroir qui porte le nom de Madame Castellane", to: "A_tiroir" },
    ] },

  A_tiroir: { act: "I", title: "Le tiroir Aurore", place: "jardin",
    fx: { item: "codicille1", flag: "codicille:1", ep: ["histoire", 200] },
    text: [
      "Tu promènes la lanterne le long des étiquettes, une rangée après l'autre. *Mistral. Nuit de Mai. Vieux Jaume.* Tout en haut, à gauche, un tiroir plus petit que les autres, l'étiquette presque effacée : *Aurore.*",
      "Il est vide de graines. Il contient un papier plié en quatre, cacheté d'une goutte de cire lilas.",
      "Tu brises le cachet et tu lis à voix haute, parce que c'est ton rôle. *Premier codicille. À Jaume, mon jardinier, je laisse la maison du bas et le champ du ruisseau. Il les a assez arrosés.*",
      "Jaume ôte son chapeau. Il ne dit rien. Il regarde le tiroir vide, et sa mâchoire travaille.",
      { second: false, text: "Sous le legs, le deuxième quatrain. Hector te prend le papier des mains pour le lire lui-même, le lit, et te le rend avec un sourire. « Une clef, évidemment. Mais laquelle ? Il y a quatre cents clefs dans cette maison. Ma tante en collectionnait. »" },
      { second: true, text: "Sous le legs, le deuxième quatrain, mot pour mot. Hector ne te prend pas le papier, cette fois. Il le connaît. Il regarde Jaume." },
    ],
    choices: [
      { back: "A_jardin" },
    ] },

  A_flore: { act: "I", title: "La statue de Flore", place: "jardin",
    text: [
      "Au milieu du rond-point, sur un socle carré, une Flore de pierre grise répand des fleurs de pierre d'une corne d'abondance. Le lichen lui a fait des taches de rousseur, la pluie lui a usé le nez, et un plaisantin du siècle dernier lui a gravé une moustache que personne n'a jamais effacée.",
      "Autour de son cou, au bout d'un ruban de fer rouillé, pend une grosse clef de fer forgé, longue comme la main. Une clef de décor, sans doute : on en mettait aux statues, autrefois, pour figurer les saisons.",
      "Odile s'est arrêtée près de toi. « Elle venait ici tous les soirs, dit-elle. Elle tapotait le socle avec sa canne, trois coups, comme on frappe à une porte. Je croyais que c'était une superstition. »",
    ],
    choices: [
      { back: "A_jardin" },
    ] },

  A_cadran: { act: "I", title: "Le cadran solaire", place: "jardin",
    text: [
      "Contre le mur de la terrasse, un cadran solaire de marbre, rongé, son style de bronze tordu par un coup de vent ou un coup de colère. La nuit, il ne sert à rien, et il en a l'air conscient, comme un vieux serviteur qu'on garde par habitude.",
      "Une devise gravée tourne autour du cadran, en lettres usées que la lanterne fait ressortir une à une : *JE NE COMPTE QUE LES HEURES CLAIRES.*",
      "Dessous, plus petit, d'une autre main, plus récente, au couteau : *et toi, les autres.*",
      { second: true, text: "Cette fois, tu regardes l'écriture du couteau, et non plus ce qu'elle dit. Des lettres rondes, appliquées, un peu raides, que tu as vues mille fois dans les registres de l'étude." },
    ],
    choices: [
      { back: "A_jardin" },
    ] },

  A_maison_bas: { act: "I", title: "La maison du bas", place: "jardin",
    text: [
      "En bas du jardin, au bord du champ du ruisseau, une maisonnette basse sous une treille : la maison du jardinier. La porte est ouverte. Dedans, un lit de fer, une table, un fourneau, et au mur, fixée par quatre clous, une petite robe d'enfant en coton blanc brodé, jaunie, si petite qu'elle tiendrait dans les deux mains.",
      "Jaume t'a suivi{e}. Il voit ton regard sur la robe et ne dit rien d'abord. Puis il tire de sa poche sa serpette, la regarde, et la range.",
      "« Vous aimez les devinettes, vous aussi, dit-il. Tout le monde ici aime les devinettes, ce soir. Moi, j'en ai qu'une. Je la posais à la petite, quand elle avait cinq ans. »",
    ],
    choices: [
      { label: "Écouter la devinette de Jaume", hide: { has: "enigme:p_greffe" }, to: "A_jaume_devinette" },
      { back: "A_jardin" },
    ] },

  A_jaume_devinette: { act: "I", title: "La devinette du jardinier", place: "jardin", puzzle: "p_greffe",
    text: [
      "Jaume s'assoit sur le seuil, sa lanterne entre les pieds.",
    ],
    choices: [
      { back: "A_maison_bas" },
    ] },

  A_jaume_greffe: { act: "I", title: "La greffe", place: "jardin",
    fx: { clue: "i_jaume_odile", flag: "jaume:confiance" },
    text: [
      "Jaume hoche la tête, lentement, plusieurs fois, comme on approuve un plant qui a pris.",
      "« La greffe. La petite trouvait toujours. Elle avait cinq ans, elle disait *la greffe* en tapant des mains, et elle voulait que je lui en fasse une sur son doigt. » Il rit, d'un rire de gorge, enroué. « Je l'ai élevée. Je ne l'ai pas faite. Ce n'est pas la même chose, et c'est aussi bien. »",
      "Il se relève, et ses genoux craquent comme du bois sec. « Elle est arrivée ici un printemps, enveloppée dans un châle qui sentait l'iris, et ma femme l'a prise sur son sein. On ne m'a jamais demandé mon avis. On ne demande pas son avis à un porte-greffe. »",
    ],
    choices: [
      { back: "A_maison_bas" },
    ] },
};
