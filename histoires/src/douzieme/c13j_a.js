// Le Douzième Coup · chapter 13, the one who passes, first half (act IV, night of 20 to 21 June 541, from midnight
// to three). The last trial of the bar at midnight: awake through it with the grey dew (`j:hoquet_eveille`, the
// guard tied: `j:garde_ficele`) or taken with the town (`j:pris_minuit`). The port at night (hub `K13j_nuit`):
// the mill arch under the hôtel de Hautgué (`j:arche_ouverte`, `j:arche_bruit`, `j:garde_battu`,
// `j:sauvetage_manque`), the Grand Maître out through the cobwebs (`j:coudrier_libre` + `monde:coudrier_par_j`),
// the ringer's key (item `clef_sonneur`), the bronze drift handed over (`monde:chasse_en_bas` : it will lie at the
// foot of the lever for sixty years), his plan (`j:coudrier_plan`) ; Perrine told when to be out
// (`monde:perrine_sortie`) or to stand with wax (`monde:perrine_debout`) ; under the Trois-Chandelles, the bark
// (`monde:brindille_ecorce`) and the wax for thirty children (`monde:brindille_sortie`) ; rue de la Poulie, the
// widow Hurel (`monde:hurel_debout`, `monde:hurel_lettre`) ; Tiphaine goes to engrave the Droit
// (`monde:droit_grave`, `monde:droit_coin`) ; the duke's last barge (`j:vu_duc_nuit`). Then M13, on the star of
// Saint-Gnomon-le-Vieux.
var P = {};
var JOSQUIN = { present: "josquin" };
var PERRINE = { present: "perrine" };
var CONNAIT_ANSEL = { any: [{ has: "monde:su:ansel" }, { has: "j:ansel_parle" }] };
var TIPHAINE = { any: [{ has: "j:tiphaine_guilde" }, { has: "j:tiphaine_atelier" }] };
var ECORCE_J = { all: [{ item: "ecorce_fievrier" }, { not: { has: "monde:aelis_ecorce" } }] };
var SORTI = { any: [{ has: "j:coudrier_libre" }, { has: "j:sauvetage_manque" }] };

Object.assign(P, {
  K13j_route: { act: "IV", title: "Onze, et le bassin", place: "basse", ambiance: "eau", takes: "night",
    text: [
      "Tu refermes le Cahier sur tes genoux. Le quai dort : des gabares bord à bord, des lampions éteints qu'on a pendus pour demain, et l'odeur du pain que les boulangers enfournent.",
      "Là-haut, l'œil jaune de la Tour a ses deux aiguilles l'une sur l'autre. La Patiente commence à dire minuit. Tu comptes, comme toute la ville compte en dormant : les coups entrent dans les maisons, passent sous les portes, et quarante mille dormeurs se retournent d'un quart.",
      "Un. Deux. À chacun, le bassin se ride d'un bord à l'autre, et redevient lisse.",
      "Onze.",
      "Le bassin est resté ridé.",
    ],
    choices: [
      { label: "Fermer le poing sur la boulette de cire grise", hide: { not: { item: "rosee_grise" } }, fx: { drop: "rosee_grise", flag: "j:hoquet_eveille", ep: ["histoire", 600] }, to: "K13j_hoquet_eveil", big: true },
      { label: "Attendre le douzième", fx: { flag: "j:pris_minuit" }, to: "K13j_hoquet_pris", big: true },
    ] },

  K13j_hoquet_pris: { act: "IV", title: "Une ligne sautée", place: "basse", ambiance: "eau", takes: "night",
    text: [
      "Douze.",
      "Le coup tombe, rond, pareil aux autres. Tu respires. Puis tu regardes la lune. Elle était au-dessus du pignon à la cloche bleue. Elle est sur la cheminée voisine, d'une main plus à droite. Sur le quai, la chandelle d'un veilleur de barge a perdu un doigt.",
      "Entre le onzième et le douzième, il y a eu un long moment où tu n'étais nulle part. Tu en connais le goût : la bouche sèche, et l'impression d'avoir sauté une ligne en lisant.",
      "Cette nuit, là-haut, quelqu'un a tenu la barre le temps de trois psaumes, et il l'a lâchée. C'était la dernière répétition.",
      { with: "perrine", text: "Perrine se frotte les bras. « J'ai eu froid d'un coup, dit-elle. Comme si on m'avait posée et reprise. » Elle regarde la lune, elle aussi. Elle sait lire un ciel : elle vend des almanachs." },
    ],
    choices: [{ label: "Te lever des trois marches", to: "K13j_nuit", big: true }] },

  K13j_hoquet_eveil: { act: "IV", title: "Trois psaumes", place: "basse", ambiance: "eau", takes: "night",
    text: [
      "Tu fermes le poing. La cire est tiède ; dedans, la pincée de rosée luit entre tes doigts comme un ver luisant, et quelque chose en toi continue pendant que tout s'arrête.",
      "Le bassin est une plaque de verre ridé. Le veilleur de barge a la bouche ouverte sur un bâillement. Une chauve-souris est clouée en l'air, à six pieds du quai, les ailes en tente. La lune seule marche, avec la flamme des chandelles.",
      "Tu es la seule chose qui bouge dans Méridane, toi et un homme, là-haut, qui tient une barre à deux mains et qui compte.",
      { with: "perrine", text: "Perrine est assise une marche plus bas, le dos contre ton genou, les yeux ouverts. Tu passes la main devant. Elle regarde, à travers ta main, un quai d'il y a un instant." },
      "La rosée fond dans ton poing. Tu as le temps de trois psaumes, pourvu que tu coures.",
    ],
    choices: [
      { label: "Courir au quai des Barges : dans une cave, un homme est assis sur un tonneau", fx: { flag: "j:garde_ficele", ep: ["perso", 500] }, to: "K13j_hoquet_cave", big: true },
      { label: "Marcher jusqu'au milieu du quai, et regarder ta ville arrêtée", fx: { flag: "j:vu_ville_arretee", ep: ["perso", 500] }, to: "K13j_hoquet_quai" },
    ] },

  K13j_hoquet_cave: { act: "IV", title: "Un nœud de marinier", place: "basse", ambiance: "eau", takes: "night",
    text: [
      "Tu cours entre des gens qui ne te voient pas passer. La chaîne du quai des Barges est baissée : deux hommes la tenaient, et ils la tiennent encore. La porte basse de l'hôtel, au ras de l'eau, est entrouverte sur un valet qui rapportait une cruche. Tu te glisses sous son coude.",
      "La cave sent le vin et le salpêtre. La chandelle brûle par terre. Le ruban vert est sur son tonneau, un cure-dent à la bouche. En face de lui, debout, un vieillard énorme a le doigt levé, au milieu d'une phrase.",
      "Tu as des mains de quinze ans et une corde à linge décrochée dans le corridor. Tu ficelles l'homme du duc à son tonneau, les poignets, les chevilles, d'un nœud qu'un marinier t'a montré sur ce quai. Tu lui ôtes sa canne plombée. Tu lui laisses le cure-dent.",
      "Tu ne peux rien pour le vieillard : un homme que le coup tient ne se pousse pas, et celui-ci pèse le poids d'une armoire. Tu regardes son doigt levé. Puis tu ressors, sous le coude du valet, pendant que la rosée finit de fondre.",
      "Tu es sur le quai quand le douzième coup tombe. Dans la cave, derrière le soupirail, une grosse voix achève : « ... et un imbécile en compte treize. » Un silence. « Tiens. On vous a ficelé. C'est la première chose sensée qu'on fasse dans cette maison. »",
    ],
    choices: [{ label: "Reprendre ton souffle sur le quai", to: "K13j_nuit", big: true }] },

  K13j_hoquet_quai: { act: "IV", title: "Ce que verra l'autre", place: "basse", ambiance: "eau", takes: "night",
    text: [
      "Tu marches au milieu du quai. Tes pas font le seul bruit de la ville, et ils te reviennent des façades.",
      "Un mousse dort dans un rouleau de câble, une main pendante. Un chat a été pris en l'air, entre deux gabares, les quatre pattes tendues vers un bord qu'il atteindra dans trois psaumes. À la fenêtre d'une soupente, une chandelle brûle pour quelqu'un qui tourne une page.",
      "C'est cela que {autre} traverse depuis neuf jours. Tu le sais par des bâtons, d'une borne à l'autre. Tu ne l'avais jamais vu. Cela tient en un mot que les bâtons ne disent pas : tout est là. Rien ne manque. Il manque seulement que cela continue.",
      "Demain, ce quai aura cette figure, à midi, avec du monde dessus. Et quelqu'un y marchera comme tu marches, en faisant le seul bruit.",
      "La rosée finit de fondre. Tu regagnes les trois marches. Le douzième coup tombe ; le chat touche son bord.",
    ],
    choices: [{ label: "Te rasseoir un instant, puis te lever", to: "K13j_nuit", big: true }] },

  K13j_nuit: { act: "IV", title: "La dernière nuit du port", backName: "le quai", place: "basse", ambiance: "eau", takes: "night", hub: true,
    text: [
      { first: true, text: "Il est minuit passé, et la ville basse dort d'un sommeil de veille de fête : léger, plein de portes qui battent et d'enfants qu'on recouche. Aux carrefours, les niches ont leurs chandelles. Sur l'eau, la lune a posé une route." },
      { first: true, text: "Demain, à pareille heure, il n'y aura plus de pareille heure. Tu as une nuit pour faire le tour de ce qui peut encore être déplacé." },
      { first: true, with: "josquin", text: "Josquin a la chaîne du Grand Maître roulée dans sa chemise. Il marche vite, les coudes au corps. « Dites-moi où. Je ne veux plus qu'on me dise *attends.* »" },
      { again: true, text: "Le quai, les gabares, la route de lune sur le bassin. La Tour a son œil jaune." },
      { again: true, after: "j:coudrier_libre", text: "Quelque part entre le port et la colline, un vieil homme sans chapeau remonte les ruelles à pied, comme on rentre de promenade." },
    ],
    choices: [
      { label: "Le bief, derrière l'hôtel du duc", hide: SORTI, to: "K13j_bief" },
      { label: "À la Patiente, où l'on n'a pas couché", to: "K13j_patiente_nuit" },
      { label: "Le pont des Trois-Chandelles", to: "K13j_pont_nuit" },
      { label: "La rue de la Poulie, sous l'enseigne du Dé", hide: { any: [{ not: CONNAIT_ANSEL }, { seen: "K13j_hurel" }] }, to: "K13j_poulie" },
      { label: "La rue des Aiguilliers : une lime, chez le vieux Gobin", hide: { any: [{ not: TIPHAINE }, { seen: "K13j_gobin" }] }, to: "K13j_gobin" },
      { label: "Le quai des Barges, où l'on charge encore", hide: { seen: "K13j_barges" }, to: "K13j_barges" },
      { label: "Saint-Gnomon-le-Vieux : il va être trois heures", to: "K13j_gnomon", big: true },
    ] },

  // --- the mill arch ---
  K13j_bief: { act: "IV", title: "La brique de chez Tuilot", backName: "le bief", place: "basse", ambiance: "eau", takes: "night",
    text: [
      "L'ancien bief est une eau morte, noire, entre le derrière de l'hôtel et un mur de tannerie. Il sent la cave. Au ras de l'eau, dans les fondations, une arche a été bouchée de briques plus rouges que le reste ; les joints en sont partis, et la lune y met des ombres.",
      { after: "j:garde_ficele", text: "Tu sais ce qu'il y a derrière : une cave, une chandelle, un homme ficelé à un tonneau, et un vieillard qui lui explique pourquoi." },
      { after: "j:guigne_alliee", text: "Sous le saule, on siffle deux notes. La Guigne est là, pieds nus, avec un petit de huit ans qu'elle appelle le Furet, et une pince de carrier longue comme lui. « Je t'avais dit après minuit. T'es à l'heure, pour quelqu'un d'honnête. »" },
      { with: "josquin", text: "Josquin est entré dans l'eau jusqu'aux genoux sans ôter ses souliers. Il a posé la main à plat sur les briques, comme sur le flanc d'une bête. « Il est derrière. Je l'entends. Il parle. »" },
      "Il y a là quarante briques à ôter, une à une, sans en laisser choir à l'eau.",
    ],
    choices: [
      { label: "Dégarnir l'arche, brique à brique", test: { dom: "discretion", diff: 5, label: "Ôter quarante briques au-dessus d'une eau qui porte le bruit", help: [{ if: { has: "j:guigne_alliee" }, v: 15 }, { if: { has: "j:plan_cave" }, v: 10 }, { if: { voie: "rouage" }, v: 10 }, { if: { voie: "leste" }, v: 5 }, { if: JOSQUIN, v: 5 }] },
        win: { fx: { flag: "j:arche_ouverte" }, to: "K13j_arche" }, lose: { fx: { flag: ["j:arche_ouverte", "j:arche_bruit"] }, to: "K13j_arche" } },
      { back: "K13j_nuit" },
    ] },

  K13j_arche: { act: "IV", title: "Cent ans d'araignées", place: "basse", ambiance: "eau", takes: "night",
    text: [
      { outcome: "win", text: "La dernière brique vient dans ta main comme un pain qu'on défourne. Aucune n'a touché l'eau." },
      { outcome: "lose", text: "La trente-huitième t'échappe. Elle fait dans le bief le bruit d'une carpe qui saute, et ce bruit monte le long des murs jusqu'aux toits." },
      "Derrière l'arche, il y a le conduit du moulin : une voûte basse, où l'on avance courbé, les pieds dans une vase froide. Les araignées y travaillent depuis cent ans. Leurs toiles pendent d'un mur à l'autre, épaisses comme des rideaux, grises d'une farine qu'aucune meule n'a faite depuis les grands-pères. On les crève de la tête. Elles se collent aux cils, à la bouche, au dos.",
      "Au bout, une vanne de bois pourri ferme le conduit. Par les fentes, il vient de la lumière : une chandelle, posée par terre.",
      { if: { all: [{ not: { has: "j:arche_bruit" } }, { not: { has: "j:garde_ficele" } }] }, text: "Tu colles l'œil à une fente. Le ruban vert est sur son tonneau, le menton sur la poitrine, la bouche ouverte. En face de lui, un vieillard énorme marche de long en large, et il parle. « ... d'où il suit, mon ami, que le soleil et l'horloge ne tombent d'accord que quatre jours par an. Vous dormez ? » Il se penche. « Il dort. L'équation du temps n'a jamais manqué son homme. »" },
      { if: { has: "j:garde_ficele" }, text: "Tu colles l'œil à une fente. Le ruban vert est sur son tonneau, ficelé comme un saucisson, le cure-dent toujours à la bouche. En face de lui, un vieillard énorme est assis sur une futaille, les mains sur les genoux, et il attend, tourné vers la vanne." },
      { if: { all: [{ has: "j:arche_bruit" }, { not: { has: "j:garde_ficele" } }] }, text: "Tu colles l'œil à une fente. Le ruban vert est debout, la canne plombée à la main, et il regarde la vanne. Il a entendu la carpe. Derrière lui, un vieillard énorme s'est arrêté de marcher." },
    ],
    choices: [
      { label: "Pousser la vanne", hide: { all: [{ has: "j:arche_bruit" }, { not: { has: "j:garde_ficele" } }] }, fx: { flag: ["j:coudrier_libre", "monde:coudrier_par_j"], ep: ["histoire", 1000] }, to: "K13j_coudrier_libre", big: true },
      { label: "Enfoncer la vanne, et lui tomber dessus", hide: { any: [{ not: { has: "j:arche_bruit" } }, { has: "j:garde_ficele" }] },
        fight: { title: "Dans la cave du duc", enemies: [{ id: "homme_duc", n: 1 }], terrain: "interieur",
          win: { fx: { flag: ["j:coudrier_libre", "monde:coudrier_par_j", "j:garde_battu"], ep: ["histoire", 1000] }, to: "K13j_coudrier_libre" },
          lose: { fx: { flag: "j:sauvetage_manque", pv: -3 }, to: "K13j_arche_perdu" } } },
      { label: "Passer par la fente l'ordre aux trois cires : « Contre-ordre de Monseigneur. »", hide: { any: [{ not: { has: "j:arche_bruit" } }, { has: "j:garde_ficele" }, { not: { item: "ordre_arret" } }] }, test: { dom: "social", diff: 5, label: "Avoir la voix d'un homme du duc", help: [{ if: { voie: "diseur" }, v: 15 }, { if: { has: "j:engage_barges" }, v: 10 }] },
        win: { fx: { flag: ["j:coudrier_libre", "monde:coudrier_par_j"], ep: ["histoire", 1000] }, to: "K13j_coudrier_libre" }, lose: { fx: { flag: "j:sauvetage_manque", pv: -1 }, to: "K13j_arche_perdu" } },
    ] },

  K13j_arche_perdu: { act: "IV", title: "À l'aube, quelqu'un d'autre", place: "basse", ambiance: "eau", takes: "night",
    text: [
      "Il est plus fort que toi, et il est payé au mois. Tu te retrouves dans le conduit, puis dans le bief, de l'eau noire jusqu'à la poitrine, avec le bruit de la vanne qu'on cale derrière toi à coups de talon.",
      "Par le soupirail, la grosse voix descend, sans colère, pour toute la rue. « Allez dormir ! Vous avez fait le trou : c'est le plus long. Un autre que vous finira l'ouvrage au petit jour, quand ce monsieur aura sommeil. J'ai un apprenti qui sait attendre, et c'est tout ce qu'il sait. »",
      "Tu sors de l'eau sous le saule. Tu as des toiles d'araignée plein les cheveux, et tu les garderas jusqu'au matin.",
    ],
    choices: [{ back: "K13j_nuit" }] },

  K13j_coudrier_libre: { act: "IV", title: "Sans chaîne, sans chapeau", backName: "le Grand Maître", place: "basse", ambiance: "eau", takes: "night", fx: { item: "clef_sonneur" },
    text: [
      { first: true, text: "La vanne cède d'une pièce. Il la regarde tomber, puis il te regarde, gris{e} de toiles jusqu'aux sourcils." },
      { first: true, after: "j:coudrier_averti", text: "« Je l'avais dit. Je ne voyais personne d'autre qui fût assez mal élevé. »" },
      { first: true, before: "j:coudrier_averti", text: "« Tiens. Je comptais sur Josquin. Il est bien élevé : il serait venu à l'aube, en demandant pardon. »" },
      { first: true, text: "Il ôte son chapeau, et il le pose sur la tête du ruban vert, avec soin, un peu de côté. « Je vous le laisse, mon ami. Vous direz à Monseigneur que je suis sorti par un endroit où il a des araignées, et qu'il fasse balayer. »" },
      { first: true, text: "Il faut ôter douze briques de plus pour ses épaules. Il passe le conduit plié en deux, en soufflant, et les toiles de cent ans lui font dans le dos une pèlerine. Sous le saule, il se redresse. Il respire la nuit comme on boit." },
      { first: true, text: "Il fouille sa houppelande, et il en tire une clef noire, courte, au panneton en trèfle. « La Cage de la cloche a deux clefs. L'une est au registre : monsieur le sous-maître signera pour elle à neuf heures, avec les autres. L'autre, les Grands Maîtres la portent sur eux depuis 481, pour qu'il y ait toujours quelqu'un qui puisse monter rendre un coup. Je descends, demain. Elle ne me sert à rien en bas. » Il te la met dans la main." },
      { first: true, after: "monde:su:lesquelles", text: "« Vous savez pourquoi c'est à vous que je la donne. On vous l'a écrit avant qu'on me l'ait dit. »" },
      { first: true, with: "josquin", text: "Josquin lui tend la chaîne, à deux mains. Le vieillard la regarde. « Garde. Je t'ai dit que j'aimais mieux arriver nu. » Puis, plus bas : « Tu avais les pieds dans l'eau. Je t'ai entendu respirer derrière la brique. Tu respires comme ta mère. »" },
      { again: true, text: "Sous le saule, le vieillard secoue ses toiles, sans y parvenir. Il attend que tu aies fini." },
    ],
    choices: [
      { label: "Lui donner le chasse de bronze de maître Cliquet", hide: { any: [{ not: { item: "chasse_bronze" } }, { has: "monde:chasse_en_bas" }] }, fx: { drop: "chasse_bronze", flag: "monde:chasse_en_bas", ep: ["histoire", 600] }, to: "K13j_coudrier_chasse" },
      { label: "« Que ferez-vous, demain, en bas ? »", hide: { seen: "K13j_coudrier_demain" }, fx: { flag: "j:coudrier_plan" }, to: "K13j_coudrier_demain" },
      { label: "Le regarder remonter vers sa colline", to: "K13j_nuit", big: true },
    ] },

  K13j_coudrier_chasse: { act: "IV", title: "Pour celui qui descendra", place: "basse", ambiance: "eau", takes: "night",
    text: [
      "Il prend la tige de bronze, la fait rouler entre deux doigts, en regarde le bout plat à la lune. « Le profil de la rainure. Cliquet a une conscience, donc, et elle travaille au centième. »",
      "« *Donnez-le à celui qui descendra.* Il a dit cela ? » Il pèse la tige dans sa paume. « Je descends demain, et je n'aurai pas le temps de m'en servir : j'aurai les deux mains prises. Mais je l'aurai sur moi. Et ce que j'ai sur moi, à ce que vous dites, y sera encore dans soixante ans, à la même place, pour quelqu'un qui viendra d'une autre heure. »",
      "Il la glisse dans sa manche gauche. « Je la laisserai tomber au pied du levier, du côté du petit bout. Écrivez-le à qui de droit. C'est la première lettre que je poste de cette façon. »",
    ],
    choices: [{ back: "K13j_coudrier_libre" }] },

  K13j_coudrier_demain: { act: "IV", title: "Plusieurs manières d'échouer", place: "basse", ambiance: "eau", takes: "night",
    text: [
      { after: "j:coudrier_sait", text: "« J'échouerai. C'est écrit chez vous, dans un livre relié de noir, avec mon nom et un adjectif. » Il s'est assis sur la borne du saule. « Mais il y a plusieurs manières d'échouer, et l'on m'a laissé le choix de la mienne. »" },
      { before: "j:coudrier_sait", text: "« J'irai lui ôter ce levier. J'ai soixante-dix ans, il en a trente, et il aura neuf garçons derrière lui. » Il s'est assis sur la borne du saule. « Je ne suis pas sûr d'y arriver. Il y a plusieurs manières de n'y pas arriver, et je choisirai la mienne. »" },
      "« S'il a les deux mains à la barre et que je les lui prenne, la barre se coince à fond. Je le sais : c'est moi qui ai dessiné la crémaillère. Je me battrai donc bas, aux poignets, pour qu'elle se coince où elle est, et pas un cran plus loin. Un cran de moins à remonter, pour celui qui viendra. »",
      { after: "monde:ansel_travers", text: "Tu lui dis le maillet : un coup d'un quart de travers, donné par un enfant de treize ans qui a vu l'eau debout. Il t'écoute sans bouger. « Ansel. Le petit Hurel. » Il hoche la tête. « Alors je ferai en sorte que l'autre n'ait pas le loisir de regarder son coin. Un homme qu'on tient aux poignets ne vérifie pas son ouvrage. »" },
      { after: "j:sait_quarantieme", text: "Il te regarde. « Et la phrase. » Tu ouvres la bouche. Il lève une main large comme une assiette. « Ne me dites pas ce que vous en ferez. Je serai pris en bas, la main sur ce levier. Si je le sais, je l'aurai sur la figure pendant soixante ans, et le premier qui descendra le lira. »" },
      "Il se lève. « À onze heures, je traverse ma cour. Je dirai à Lunel que je suis allé me promener. C'est vrai : je n'ai pas tant marché depuis ma jeunesse. »",
    ],
    choices: [{ back: "K13j_coudrier_libre" }] },

  // --- À la Patiente ---
  K13j_patiente_nuit: { act: "IV", title: "Trois cents couverts", backName: "la Patiente", place: "basse", ambiance: "ville", takes: "night",
    text: [
      { first: true, text: "La salle basse a toutes ses chandelles. Dame Tiennette n'a pas couché : elle compte des pots, par rangées de douze, sur le comptoir, sur les tables, sur les bancs. Demain, on dînera ici à trois services, de onze heures à la nuit, et l'on y boira le petit vin de Saint-Gnomon jusqu'à la lie." },
      { first: true, before: "K13j_perrine_heure", if: { not: PERRINE }, text: "Perrine est assise sur la dernière marche de la soupente, sa hotte faite, les mains sur les genoux. Elle t'attendait." },
      { again: true, text: "La salle basse, ses rangées de pots. Dame Tiennette compte." },
    ],
    choices: [
      { label: "Perrine, et l'heure qu'elle t'a demandée", hide: { seen: "K13j_perrine_heure" }, to: "K13j_perrine_heure" },
      { label: "Dame Tiennette, derrière ses pots", hide: { seen: "K13j_tiennette_nuit" }, to: "K13j_tiennette_nuit" },
      { back: "K13j_nuit" },
    ] },

  K13j_perrine_heure: { act: "IV", title: "À quelle heure", place: "basse", ambiance: "ville", takes: "night",
    text: [
      "« Tu sais, à présent. » Elle n'a pas fait de question. « Je l'ai vu à ta figure, sur le quai. Tu comptais quelque chose. »",
      "Elle a dix-sept ans, une hotte, et un père que la Thiorne a gardé. Elle a appris de bonne heure qu'il y a des jours où l'eau monte, et qu'on gagne peu à discuter avec elle.",
      "« Je ne te demande pas ce que c'est. Je te demande l'heure, et l'endroit. Le reste, tu me le diras dans un pays où l'on a le temps. »",
    ],
    choices: [
      { label: "« Avant onze heures. La porte d'Occident, le halage. Marche jusqu'au septième peuplier, et ne te retourne qu'au huitième. »", fx: { flag: "monde:perrine_sortie", ep: ["perso", 600] }, to: "K13j_perrine_fin" },
      { label: "« Reste, avec de la cire dans les oreilles. Après, il faudra quelqu'un debout, pour ceux qui sortiront. »", hide: { not: { has: "j:sait_cire" } }, fx: { flag: "monde:perrine_debout", ep: ["perso", 600] }, to: "K13j_perrine_fin" },
    ] },

  K13j_perrine_fin: { act: "IV", title: "Le septième peuplier", place: "basse", ambiance: "ville", takes: "night",
    text: [
      { after: "monde:perrine_sortie", text: "« Le septième peuplier. » Elle le répète une fois. Les colporteurs ont la mémoire des chemins : dans dix ans, elle saura encore lequel." },
      { after: "monde:perrine_sortie", text: "« Et toi, tu seras à quel peuplier ? » Tu te tais. Elle hoche la tête. « C'est bien ce que je pensais. » Elle tire de sa hotte un almanach, le dernier du paquet, et le corne à la page de juin. « Tiens. Je n'ai jamais rien donné : je vends. Il fallait une première fois. »" },
      { after: "monde:perrine_debout", before: "monde:perrine_sortie", text: "Elle prend la cire, la pétrit entre deux doigts, l'essaie dans une oreille. Tu la vois écouter le silence que cela fait. « Debout. Dans une ville couchée. » Elle réfléchit, en marchande. « Il leur faudra des almanachs. Ils ne sauront plus quel jour on est. »" },
      { after: "monde:perrine_debout", before: "monde:perrine_sortie", text: "« Je sortirai la dernière, alors. Après ceux qui pleurent. » Elle ôte la cire, la roule dans son mouchoir. « Tu m'as fait faire la route de neuf jours pour me dire de rester sur place. C'est bien d'un associé. »" },
      "Elle t'embrasse sur la joue, vite, à la manière des gens qui ont une tournée à finir.",
    ],
    choices: [{ back: "K13j_patiente_nuit" }] },

  K13j_tiennette_nuit: { act: "IV", title: "Où l'on me trouvera", place: "basse", ambiance: "ville", takes: "night", fx: { pv: 3 },
    text: [
      "« Fermer ? » Elle a posé le pot qu'elle tenait. « Un jour de Grand Midi ? J'ai trois cents couverts, deux barriques en perce et un cochon qui cuit depuis vêpres. »",
      "Tu lui dis ce que tu peux. Elle t'écoute en essuyant ses mains, large, lente, sans cesser de regarder la salle.",
      "« J'ai menti pour toi aux rubans verts, l'autre soir, sans te demander pourquoi. Je ne vais pas me mettre à te croire maintenant : cela gâterait tout. » Elle te coupe une tranche de pâté épaisse comme une semelle, et te la met dans la main. « Mange. Tu as une figure de carême. »",
      "« Demain à midi, je serai derrière ce comptoir. S'il arrive ce que tu dis, c'est là qu'on me trouvera. J'aime autant. Je n'ai jamais su où me mettre ailleurs. »",
    ],
    choices: [{ back: "K13j_patiente_nuit" }] },

  // --- under the bridge ---
  K13j_pont_nuit: { act: "IV", title: "Trois chandelles", backName: "le pont", place: "basse", ambiance: "eau", takes: "night",
    text: [
      { first: true, text: "Sous l'arche, les trois chandelles de la niche éclairent un tas d'enfants. Ils dorment les uns sur les autres, comme des chiots, une trentaine, avec des pieds qui dépassent. L'eau du canal passe à une main de la banquette, noire, sans bruit." },
      { first: true, text: "La Guigne veille, adossée à sa pile, la paupière gauche sur l'œil. À l'écart, sur la meilleure paillasse, sous une couverture de cheval, une petite de quatre ans dort d'un autre sommeil. Un garçon à tignasse de paille est assis contre elle, les genoux au menton." },
      { first: true, after: "monde:su:brindille", text: "On t'a écrit, en bâtons, qui dort sous ce pont dans soixante ans, et à quelle place." },
      { again: true, text: "L'arche, les trois chandelles, le tas d'enfants. La Guigne ne dort pas." },
    ],
    choices: [
      { label: "Tirer de ta chemise l'écorce rousse, et dire la manière", hide: { any: [{ not: ECORCE_J }, { has: "monde:brindille_ecorce" }] }, fx: { drop: "ecorce_fievrier", flag: "monde:brindille_ecorce", ep: ["histoire", 600] }, to: "K13j_brindille_nuit" },
      { label: "Leur donner la cire, l'heure, et le chemin du bief", hide: { any: [{ not: { has: "j:sait_cire" } }, { has: "monde:brindille_sortie" }] }, fx: { flag: "monde:brindille_sortie", ep: ["histoire", 600] }, to: "K13j_guigne_cire" },
      { back: "K13j_nuit" },
    ] },

  K13j_brindille_nuit: { act: "IV", title: "Elle a fait la tête", place: "basse", ambiance: "eau", takes: "night",
    text: [
      "C'est un morceau large comme la main, roux, roulé, qui a fait neuf jours de route entre deux pages. Il y a de quoi mener un enfant au bout. Un.",
      "La Guigne le prend, le flaire, le casse. Elle met de l'eau du canal dans une gamelle, la gamelle sur trois chandelles arrachées à la niche, et elle regarde bouillir. Les petits se sont éveillés. Ils font cercle, en silence : sous ce pont, on n'a jamais rien fait cuire pour quelqu'un qui ne pouvait pas payer.",
      "« Trois semaines, dis-tu. Une cuillerée le matin, à jeun. » Moineau compte sur ses doigts, deux mains et un doigt, et recommence, pour être sûr.",
      "On lui glisse la première entre les dents. La petite fronce le nez. Elle tourne la tête, les yeux fermés, avec une grimace d'une grande précision.",
      "« Elle a fait la tête ! » Moineau en pleure, et il rit en même temps, la morve au nez. « Elle a fait la tête ! Elle avait rien fait depuis l'Ascension ! »",
      "La Guigne essuie la cuiller sur sa jupe. Elle ne te regarde pas. « T'avais quoi d'autre à faire, cette nuit, de plus pressé que ça ? » Elle attend. « C'est bien ce que je me disais. »",
    ],
    choices: [{ back: "K13j_pont_nuit" }] },

  K13j_guigne_cire: { act: "IV", title: "Le jour où le bon Dieu regarde ailleurs", place: "basse", ambiance: "eau", takes: "night",
    text: [
      "« De la cire. Dans les oreilles. À trente. » Elle répète chaque mot comme on mord une pièce.",
      "Tu dis le reste : demain, à midi, onze coups, et tout ce qui les aura entendus restera où il est. Ceux qui auront de la cire resteront debout, dans une ville couchée. Qu'ils sortent alors par le bief des Teinturiers, la petite sur un dos, et qu'ils marchent jusqu'au septième peuplier du halage.",
      "« Une ville couchée », dit la Guigne lentement. Elle regarde les trente. « Avec toutes ses portes ouvertes, et personne pour crier au voleur. »",
      "Elle se tait. Tu vois passer sur sa figure la plus grande tentation de sa vie, tout entière, d'un bord à l'autre, comme un nuage sur un champ.",
      "« On sortira, dit-elle enfin. La petite d'abord. Mais je te promets pas qu'on sortira les mains vides. Faut pas demander aux gens d'être des saints le jour où le bon Dieu regarde ailleurs. »",
      "Elle crache dans le canal, pour sceller. Sous ce pont, cela vaut un notaire.",
    ],
    choices: [{ back: "K13j_pont_nuit" }] },

  // --- rue de la Poulie ---
  K13j_poulie: { act: "IV", title: "Sous l'enseigne du Dé", backName: "la rue de la Poulie", place: "basse", ambiance: "ville", takes: "night",
    text: [
      "C'est une rue de couturières, étroite, où les maisons se touchent du front. L'enseigne est un dé à coudre de fer-blanc, gros comme un seau, piqué de mille trous, où la lune fait une passoire.",
      { after: "j:ansel_mere", text: "Il y a de la lumière au premier. La porte s'ouvre avant que tu aies frappé. C'est une femme de quarante ans, petite, les doigts piqués, un fil autour du cou. « Il est venu. Il est reparti. Il a dit qu'on le regarderait, s'il manquait à l'appel. » Elle a deux boulettes de cire dans le creux de la main. « Il a dit que quelqu'un passerait peut-être, avec des mains qui parlent. »" },
      { before: "j:ansel_mere", text: "Il y a de la lumière au premier : on y coud pour la fête. Tu frappes. C'est une femme de quarante ans, petite, les doigts piqués, un fil autour du cou, qui ouvre sa croisée d'abord, en personne prudente. « À cette heure ? Je ne livre que demain. »" },
    ],
    choices: [
      { label: "Lui tendre la lettre de son fils, qui sent la terre", hide: { not: { item: "lettre_ansel" } }, fx: { drop: "lettre_ansel", flag: ["monde:hurel_lettre", "monde:hurel_debout"], ep: ["perso", 800] }, to: "K13j_hurel" },
      { label: "« Il dit vrai. Mettez la cire avant onze heures, et sortez de la ville après. »", hide: { not: { has: "j:ansel_mere" } }, fx: { flag: "j:hurel_vue", ep: ["perso", 400] }, to: "K13j_hurel" },
      { label: "Lui parler d'Ansel, d'une montre neuve et de l'eau debout", hide: { any: [{ has: "j:ansel_mere" }, { item: "lettre_ansel" }] }, test: { dom: "social", diff: 5, label: "Se faire croire d'une mère, à une heure du matin", help: [{ if: { voie: "diseur" }, v: 15 }, { if: { has: "j:ansel_parle" }, v: 15 }, { if: { voie: "tetu" }, v: 5 }] },
        win: { fx: { flag: "monde:hurel_debout", ep: ["perso", 600] }, to: "K13j_hurel" }, lose: { to: "K13j_hurel" } },
      { back: "K13j_nuit" },
    ] },

  K13j_hurel: { act: "IV", title: "Tout ce qu'il dit", place: "basse", ambiance: "ville", takes: "night",
    text: [
      { after: "monde:hurel_lettre", text: "Elle prend la feuille. Elle est jaune, cassante, et elle sent la terre. Elle lit l'adresse, puis le reste, debout sur son seuil, à la lune. Elle connaît cette écriture : c'est elle qui a tenu la main qui l'a apprise." },
      { after: "monde:hurel_lettre", text: "« Il tire la langue pour faire ses *g.* » Elle touche le mot *Mère*, du bout d'un doigt piqué. « Ce papier est vieux. Mon fils a treize ans. » Elle te regarde. Elle ne demande pas comment. Les veuves savent qu'il arrive des choses sans explication, et qu'on vit quand même. « *Mets de la cire dans tes oreilles.* Il n'avait personne à qui donner sa lettre. Il a fallu qu'elle fasse le grand tour. »" },
      { if: { all: [{ has: "monde:hurel_debout" }, { not: { has: "monde:hurel_lettre" } }] }, text: "Elle t'écoute jusqu'au bout. Quand tu dis la montre, elle porte la main à sa bouche : il la lui a montrée dimanche, par-dessus le mur des communs, sans un mot, avec un sourire qui lui avait fait peur." },
      { if: { all: [{ has: "monde:hurel_debout" }, { not: { has: "monde:hurel_lettre" } }] }, text: "« Il ne parle plus depuis la Saint-Marc. On m'a dit : c'est la règle de l'atelier. J'ai dit : bien. On dit toujours *bien* aux gens qui ont une chaîne. » Elle serre son fil autour de son doigt, à le rendre blanc. « De la cire. Avant onze heures. Je croirai tout ce qu'il dit, et tout ce qu'on me dit de lui. C'est pour cela qu'il ne me disait rien. »" },
      { if: { not: { has: "monde:hurel_debout" } }, text: "Elle t'écoute, de sa croisée, la tête penchée. Quand tu as fini, elle reste un moment silencieuse. « Mon fils est chez les Jurés. Il a une montre. On ne donne pas une montre à un enfant qu'on mène à mal. » Elle referme un battant. « Allez dormir. Vous avez de la fièvre, ou vous avez bu : à votre âge, c'est la même chose. »" },
      { if: { not: { has: "monde:hurel_debout" } }, text: "L'autre battant reste entrouvert d'un doigt. Derrière, la chandelle ne s'éteint pas. Tu as mis quelque chose dans cette maison, qui n'y était pas hier ; tu ignores si cela suffira." },
      { if: { has: "monde:hurel_debout" }, text: "« Et après ? Quand je serai debout, avec ma cire ? » Tu dis : le halage, le septième peuplier. « Non. » Elle secoue la tête. « J'irai à la porte de fer. C'est par là qu'il ressortira. Une mère qui attend à la mauvaise porte, on en voit tous les jours. Je veux la bonne. »" },
    ],
    choices: [{ back: "K13j_nuit" }] },

  // --- rue des Aiguilliers ---
  K13j_gobin: { act: "IV", title: "Un chapitre qu'on ne lui a pas demandé", place: "basse", ambiance: "ville", takes: "night",
    text: [
      "L'atelier du vieux Gobin a sa lampe à boule d'eau. Le maître dort dans son fauteuil, les lunettes sur le front. À l'établi, Tiphaine a ôté sa robe noire pour un tablier de cuir, et elle affûte un burin sur une pierre, à petits coups ronds.",
      "« Je ne dormirai pas. Autant servir. » Elle essaie le fil du burin sur son ongle. « Je sais un chapitre par cœur que personne ne m'a demandé. Le trente-neuvième. Je vais l'écrire où il servira. »",
      "« Dans le Droit, devant la grille de bronze, il y a un mur de pierre tendre. Celui d'en bas viendra par l'escalier, ou il viendra par là. S'il vient par là, il aura de quoi lire en reprenant son souffle. » Elle range le burin dans sa manche. « J'en ai pour jusqu'à l'aube. Les sœurs gravaient les tombes ; on m'a appris sur des noms. Ce sera mon premier texte pour un vivant. »",
      { after: "j:sait_dessous", text: "Tu lui dis le pas qu'on entend derrière la grille. Elle hoche la tête. « Je graverai entre deux. Il laisse le temps de compter quatre. C'est assez pour une lettre. »" },
    ],
    choices: [
      { label: "« Ajoutez ceci : le coin se chasse par le petit bout, à gauche du levier quand on regarde le puits. »", hide: { not: { has: "j:sait_chasser" } }, fx: { flag: ["monde:droit_grave", "monde:droit_coin"], ep: ["histoire", 700] }, to: "K13j_tiphaine_nuit" },
      { label: "« Gravez gros. On vous lira à la veilleuse. »", fx: { flag: "monde:droit_grave", ep: ["histoire", 500] }, to: "K13j_tiphaine_nuit" },
    ] },

  K13j_tiphaine_nuit: { act: "IV", title: "Pour un vivant", place: "basse", ambiance: "ville", takes: "night",
    text: [
      { after: "monde:droit_coin", text: "Elle se le fait dire deux fois, et elle le redit, les yeux fermés, de sa voix de réfectoire, sans y changer une syllabe. « *Le coin se chasse par le petit bout, à gauche du levier quand on regarde le puits.* Je le mettrai dessous, à part, en plus gros. Le Livre l'a oublié. Un ouvrier l'a su : cela vaut un chapitre. »" },
      "Elle prend une chandelle, un briquet, et le maillet de buis du vieux Gobin, qu'elle soupèse. Sur le seuil, elle se retourne.",
      "« À l'abbaye, on m'a dit que j'avais une mémoire, et rien avec. Je croyais que c'était un reproche. » Elle rabat son capuchon. « C'est un outil. Il fallait seulement trouver le mur. »",
      "Elle s'en va par la rue des Aiguilliers, vers la vieille église, d'un pas de sœur tourière qui porte un message. Le vieux Gobin, dans son fauteuil, n'a pas remué. Sur l'établi, le pignon qu'elle taillait est fini.",
    ],
    choices: [{ back: "K13j_nuit" }] },

  // --- the duke ---
  K13j_barges: { act: "IV", title: "La dernière barge", place: "basse", ambiance: "eau", takes: "night", fx: { flag: "j:vu_duc_nuit", ep: ["histoire", 300] },
    text: [
      "On charge encore, au quai des Barges, à la lanterne sourde. Il ne reste qu'une barge à quai, basse sur l'eau, et les hommes y descendent des caisses longues, qui pèsent leur poids d'argenterie.",
      "Un homme regarde faire, botté jusqu'aux cuisses, un grand limier blanc et feu couché à ses pieds. Il a quarante ans, une belle tête, et la tranquillité de quelqu'un qui a tout prévu, y compris le beau temps. Monseigneur de Hautgué part chasser à la Louvière au petit jour, avec douze gentilshommes : il s'est levé de bonne heure pour voir partir sa vaisselle.",
      "« La dernière, Gaucelin ? — La dernière, Monseigneur. — Alors qu'on largue. Et qu'on me réveille les chiens. » Il bâille, sans mettre la main. « C'est une chose curieuse. Je n'ai jamais si bien dormi que cette semaine. »",
      "La barge s'écarte du quai et prend le fil de l'eau, sans une rame, vers la deuxième écluse. Il la suit des yeux jusqu'au pont. Puis il siffle son limier, et il rentre : il a une messe à cinq heures, et il tient à ce qu'on l'y voie.",
      { after: "j:preuve_oderic", text: "Tu as sur toi de quoi le faire pendre, dans un royaume où l'on pendrait les ducs. Il passe à dix pas, et le limier te flaire. L'homme ne tourne pas la tête. Demain, à midi, il sera à trois lieues, dans des fougères, avec douze témoins. Il attendra qu'on vienne le chercher pour lui apprendre un malheur." },
    ],
    choices: [{ back: "K13j_nuit" }] },

  // --- three o'clock ---
  K13j_gnomon: { act: "IV", title: "Trois heures, sur une étoile", place: "basse", ambiance: "temple", takes: "night",
    text: [
      "La vieille église est enfoncée de six marches, et pleine d'un bruit de dormeurs. Les pèlerins à billet sont sur leur paille, dans les bas-côtés, leurs souliers près d'eux ; on en entend qui ronflent, un qui prie en dormant. Le bedeau s'est endormi sur une chaise, son trousseau sur le ventre.",
      "Dans le dallage, la règle de laiton traverse la nef de biais. Du trou de la voûte tombe, à cette heure, une pièce plus pâle que celle du jour : la lune a pris le tour du soleil. Elle est à une dalle de l'étoile de cuivre. *ICI MIDI, QUOI QU'ON SONNE.*",
      { after: "monde:droit_grave", text: "Derrière l'autel, très loin sous les dalles, on entend un petit bruit régulier, de buis sur de l'acier. Quelqu'un grave." },
      { after: "j:coudrier_libre", text: "Tu as des toiles d'araignée jusque dans le col, et une clef noire dans ta poche, au panneton en trèfle." },
      { after: "j:sauvetage_manque", text: "Tu as des toiles d'araignée jusque dans le col, les habits trempés, et un trou de quarante briques derrière toi, pour un autre." },
      "Tu t'assois sur l'étoile. Tu ouvres le Cahier sur tes genoux. La pièce de lune arrive sur la page.",
      { with: "perrine", text: "Perrine s'est couchée sur la paille, près d'une famille de pèlerins, sa hotte sous la tête. « Réveille-moi à dix heures, dit-elle. Pas avant. Je veux avoir dormi une dernière fois dans une ville qui fait du bruit. »" },
    ],
    choices: [{ label: "Écrire", to: "M13", big: true }] },
});

module.exports = { passages: P, extras: {
  items: {
    clef_sonneur: { name: "Clef du sonneur", kind: "divers", keep: true, price: 0, desc: "Une clef noire, courte, au panneton en trèfle : la seconde clef de la Cage de la cloche. Les Grands Maîtres la portent sur eux depuis 481, pour qu'il y ait toujours quelqu'un qui puisse monter rendre un coup." },
  },
} };
