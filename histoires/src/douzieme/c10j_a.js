// Le Douzième Coup · chapter 10, the one who passes, first half (act III, 19 June 541, two days before the Grand
// Midi). Up the rue du Cadran to the hill of the Jurés. The gate and its twelve copper watchmen (`j:entre_clef` |
// `j:entre_josquin` | `j:entre_aubespin`). Hub `K10j_cour`, the court of the Guild, around the sundial of the Jurés.
// Josquin and his night papers (`j:josquin_placards`, joins, `monde:josquin_ami`) ; the Grand Master behind his
// twelve rings (`j:coudrier_vu`, `j:coudrier_croit`, `j:coudrier_tiphaine`, `j:coudrier_sait`, the lock:
// `monde:combinaison`) ; the under-master's workshop (`j:aubespin_atelier`, `j:aubespin_apprenti` |
// `j:aubespin_refuse`, `j:sait_berceaux`) ; the Jurés one by one (council `jures`, motion `suspension`: Rouet,
// Lunel and 481 `j:lunel_481`, Cliquet and the bronze wedge `j:vu_cale`, Balancourt and the register of the seal
// `j:lu_sceau`) ; the great hall and its model of the Tower (`j:vu_maquette`) ; the apprentices and the assault of
// the eve (duel `d_apprentis`, `j:assaut_gagne`). Noon under the Tower (M10).
var P = {};
var CLEF = { item: "clef_apprenti" };
var JOSQ = { present: "josquin" };
var PREUVE = { has: "j:preuve_oderic" };

Object.assign(P, {
  K10j_route: { act: "III", title: "La rue du Cadran", place: "basse", ambiance: "ville", takes: "morning",
    text: [
      "Tu as rebouché sous l'anneau avant le jour. La ville basse s'éveille par l'eau : une perche qui cogne un quai, un seau, des sabots sur une planche. Tu lui tournes le dos, et tu montes.",
      "La rue du Cadran part du port et ne fait pas un détour. Elle a été tracée, comme tout ce qui compte ici, par des gens qui regardaient la Tour et tiraient droit. Elle est pavée de grès, large de quatre toises, bordée de maisons de plus en plus hautes et de moins en moins bavardes. En bas, on crie le hareng. À mi-côte, on vend des gants. Plus haut, on ne vend rien : on possède.",
      "Entre les pavés, à cette heure, il reste de la paille. Des brins neufs, blonds, écrasés par des roues larges, depuis le quai jusqu'en haut. Un balayeur les pousse au ruisseau, avec le zèle d'un homme qu'on paie pour avoir fini avant sept heures.",
      { after: "j:sait_voiture", text: "Quatre nuits sur six, a dit la Guigne. Tu comptes les crottins frais, rangés par deux, au pas : des chevaux bais, bien nourris, qui ont monté ici après minuit." },
      "À chaque carrefour, une fontaine, et sur chaque fontaine une horloge. Un homme en livrée grise, une clef au cou, va de l'une à l'autre, lève le nez, compare à une montre, et repart. C'est un régleur juré. Il y en a vingt dans la ville, et leur métier est qu'aucun cadran de Méridane n'ait d'avis personnel.",
      { after: "j:vu_hoquet", text: "Tu le regardes faire à trois fontaines. Il ne touche à rien. Les horloges sont justes entre elles, et justes avec la Tour ; quelqu'un, cette nuit, a rendu aux quatre grands cadrans leur psaume de retard, et les vingt régleurs ont suivi sans se demander ce qu'ils suivaient." },
      { after: "j:quai_brule", text: "Tu as pris par les ponts d'en haut. Au coin de la rue des Gantiers, deux rubans verts regardaient passer les figures ; tu leur as montré le dos d'une hotte qui montait du lait." },
      "La rue finit sur une esplanade. À droite, un mur, et derrière ce mur des toits d'ardoise à girouettes : le Palais. Devant, plus haut que tout, si près qu'il faut renverser la tête, la Tour. À gauche, un autre mur, plus vieux, de pierre grise, percé d'un portail à deux tours rondes. Au-dessus du portail, dans un cercle, un balancier de bronze.",
    ],
    choices: [{ label: "Aller au portail de gauche", to: "K10j_porte", big: true }] },

  K10j_porte: { act: "III", title: "Douze hommes de cuivre", backName: "le portail de la colline", place: "guilde", ambiance: "chateau",
    text: [
      { first: true, text: "On ne les voit pas d'abord. On voit le portail, ouvert à deux battants, la cour au-delà, un portier dans sa loge. Puis on s'aperçoit que les deux statues qui flanquent l'entrée ont les pieds posés à plat sur le pavé, sans socle, et que celle de gauche a tourné la tête." },
      { first: true, text: "Ils sont de cuivre rouge, hauts de six pieds, faits de plaques rivées. Ils ont des épaules, des bras, des mains à trois doigts, et, à la place du visage, un ovale lisse, sans un trait, où le matin se reflète. Dans la poitrine, derrière une grille en forme de cœur, une lanterne brûle, d'une clarté grise, sans flamme : une pincée de quelque chose, dans une coupelle, qui luit." },
      { first: true, text: "Tu en comptes deux au portail, deux à la porte basse de gauche, et d'autres, plus loin, le long du mur, qui marchent. Ils marchent sans bruit, d'un pas égal, chacun sur son tronçon ; arrivés au bout, ils se croisent, et repartent. Leur lanterne ne tremble pas. Des pigeons se sont habitués, et se posent dessus." },
      { first: true, text: "Un gros bourgeois descend de chaise devant le portail, un rouleau sous le bras. Il fait trois pas. L'homme de cuivre de droite fait un pas, lui aussi, et lui pose sur l'épaule ses trois doigts, sans peser. Le bourgeois s'arrête net, la bouche ouverte. Il ne se débat pas : il a l'air d'un homme qui a oublié au milieu d'une phrase ce qu'il allait dire. Le portier sort de sa loge en bâillant, lit le rouleau, hausse les épaules, et touche le bras de cuivre avec un petit bâton à bout de bronze. Les trois doigts se lèvent. Le bourgeois finit son pas. « Fournisseur, dit le portier. Par la porte des communs, comme tout le monde. »" },
      { again: true, text: "Le portail, la loge, les deux hommes de cuivre aux pieds à plat. Leur lanterne grise ne tremble pas." },
      { first: true, after: "monde:su:clef", text: "*ILS NE REGARDENT PAS LES FIGURES. ILS REGARDENT LA CLEF.* Soixante ans plus loin, ils marchent encore, et {autre} en a besoin d'une." },
    ],
    choices: [
      { label: "La porte basse de gauche, ta clef de bronze à la main", hide: { not: CLEF }, fx: { flag: "j:entre_clef" }, to: "K10j_entree", big: true },
      { label: "Dire au portier : « Josquin, l'apprenti du Grand Maître. Il m'attend. »", hide: { not: { seen: "K07j_reglage_fin" } }, fx: { flag: "j:entre_josquin" }, to: "K10j_entree" },
      { label: "Dire au portier : « Le sous-maître Aubespin m'a dit de le demander. »", hide: { not: { has: "j:aubespin_connait" } }, fx: { flag: "j:entre_aubespin" }, to: "K10j_entree" },
      { label: "Dire au portier que tu viens pour l'assaut des apprentis", hide: { any: [{ seen: "K07j_reglage_fin" }, { has: "j:aubespin_connait" }, CLEF] }, fx: { flag: "j:entre_josquin" }, to: "K10j_entree" },
      { label: "Regarder de près celui qui a tourné la tête", hide: { seen: "K10j_cuivre" }, to: "K10j_cuivre" },
    ] },

  K10j_cuivre: { act: "III", title: "Un ovale sans visage", place: "guilde", ambiance: "chateau",
    text: [
      "Tu t'approches autant qu'on peut s'approcher d'une chose qui a des mains. Il te laisse venir. L'ovale lisse descend vers toi, et tu t'y vois, tout petit, déformé, avec le portail dans le dos.",
      "C'est un ouvrage de quatre cents ans, et il n'a pas de jeu. Les rivets sont à fleur. Aux coudes, aux genoux, des rotules de bronze, graissées de frais. Aucun bruit de rouage : tu colles presque l'oreille, et tu n'entends ni échappement, ni ressort, ni chaîne. Il marche sans mouvement d'horlogerie. Ce qui le mène est dans la coupelle.",
      "Tu regardes la lanterne. La pincée grise y est posée sur un fond de verre, grosse comme une noisette, et elle baisse : il y a, autour, le cerne de ce qu'elle était au début du mois. Un homme de cuivre de la Guilde dépense à peu près une noisette en trente jours, pour marcher jour et nuit. Tu as vu un papillon, dans une cuve, à Roquebise, s'arrêter et repartir pour une pincée de ce gris-là.",
      "L'ovale s'incline encore. Il s'arrête à la hauteur de ta ceinture, de tes poches, de tes mains. Il cherche quelque chose, et ta figure lui est égale.",
      { if: CLEF, text: "Il trouve la clef, dans ton poing. La tête se relève, lentement, et se retourne vers la rue. Tu n'existes plus : tu es de la maison." },
      { if: { not: CLEF }, text: "Il ne trouve rien. La main à trois doigts se soulève d'un pouce, hésite, et retombe : tu es encore dans la rue, où ses ordres ne vont pas. Un pas de plus, et il te tiendrait là jusqu'à ce qu'un Maître vienne, avec la figure du bourgeois de tout à l'heure." },
    ],
    choices: [{ back: "K10j_porte" }] },

  K10j_entree: { act: "III", title: "De la maison", place: "guilde", ambiance: "chateau",
    text: [
      { after: "j:entre_clef", text: "Tu marches à la porte basse, la clef au bout des doigts, bien visible. Les deux hommes de cuivre ne font pas un geste. L'un d'eux a un pigeon sur l'épaule. La clef entre dans une serrure usée par quatre siècles de pouces d'apprentis, tourne à gauche, et la porte s'ouvre sur un passage voûté qui sent la cire et l'huile fine." },
      { after: "j:entre_clef", text: "Le portier, de sa loge, t'a suivi{e} de l'œil. « La clef de la Foire, dit-il. C'est donc toi. » Il n'en dit pas plus. On sent qu'on a causé, à la loge, du concours de cette année, et que tout le monde n'a pas été content." },
      { after: "j:entre_josquin", text: "« Josquin ? » Le portier consulte une ardoise. « Le petit du Grand Maître. Il a laissé un mot : *s'il vient quelqu'un des champs qui sait régler, qu'on me sonne.* Trois jours qu'il me le redemande. » Il tire un cordon. Quelque part, une clochette. Puis il prend son bâton à bout de bronze et te précède jusqu'au portail, où il touche l'un après l'autre les deux bras de cuivre, comme on tient des chiens pendant qu'entre un visiteur." },
      { after: "j:entre_josquin", text: "« Tu restes dans la cour et dans les salles basses. Sans clef, tu ne montes aucun escalier seul{e} : ils sont douze, et il y en a un sur chaque palier. Je ne vais pas te déprendre toutes les heures. »" },
      { after: "j:entre_aubespin", text: "Au nom du sous-maître, le portier se lève, ce qu'il n'avait pas fait pour le bourgeois. « Monsieur Aubespin a donné votre signalement avant-hier. *Des mains de quelqu'un qui lime, et l'air de venir de loin.* » Il te regarde les mains. « C'est cela. » Il prend son bâton à bout de bronze, et te fait passer entre les deux hommes de cuivre en les touchant l'un après l'autre." },
      { after: "j:entre_aubespin", text: "« Son atelier est au fond de la cour, la porte au papillon. Sans clef, vous ne montez aucun escalier seul{e}. Monsieur le sous-maître vous en fera donner une, s'il vous garde. » Il a dit *s'il vous garde* du ton dont on parle d'un chat." },
      "Le passage débouche dans la lumière.",
    ],
    choices: [{ label: "Entrer dans la cour", to: "K10j_cour", big: true }] },

  K10j_cour: { act: "III", title: "La cour de la Guilde", backName: "la cour de la Guilde", place: "guilde", ambiance: "chateau", hub: true,
    text: [
      { first: true, text: "C'est une cour carrée, dallée, grande comme une place de village, fermée de quatre corps de logis à arcades. Elle est d'un silence de cloître. On y entend ce qu'on n'entend nulle part ailleurs dans Méridane : rien. Les Horlogers-Jurés ont défendu, il y a trois cents ans, qu'aucune horloge sonnât dans leur cour. Ils en ont assez chez eux." },
      { first: true, text: "Au milieu, sur un socle de trois marches, il y a un cadran solaire. Une table de marbre, un style de bronze, et les douze heures gravées en éventail. La première maison du royaume où l'on fabrique le temps garde au centre de sa cour, depuis les Fondateurs, l'instrument qui s'en passe. Sur le socle, une ligne : *POUR MÉMOIRE.*" },
      { first: true, text: "Et, par-dessus le toit du logis de l'est, la Tour. D'ici, elle n'est plus un monument : c'est une paroi. On voit les joints de ses pierres, les abat-son de la Chambre haute, et, sous le grand cadran, une petite porte de fer à laquelle monte un escalier sans rampe." },
      { first: true, text: "Des apprentis traversent en tablier, sans courir. Un homme de cuivre fait le tour des arcades. À une fenêtre du premier, un vieillard en bonnet prend le soleil, les yeux fermés." },
      { again: true, text: "La cour, son silence, le cadran solaire sur ses trois marches. La Tour bouche le ciel de l'est." },
      { again: true, after: "j:assaut_gagne", text: "Deux apprentis te saluent en passant, du menton. Un troisième change de galerie." },
    ],
    choices: [
      { label: "Le logis du nord : la porte aux douze anneaux", to: "K10j_antichambre" },
      { label: "Le fond de la cour : une porte où l'on a ciselé un papillon", to: "K10j_aubespin_porte" },
      { label: "Le logis du sud : la grande salle", to: "K10j_grande_salle" },
      { label: "Les arcades de l'ouest : le réfectoire des apprentis", to: "K10j_apprentis" },
      { label: "La fenêtre du vieillard en bonnet", hide: { seen: "K10j_lunel" }, to: "K10j_lunel" },
      { label: "Maître Lunel, à sa fenêtre", hide: { not: { seen: "K10j_lunel" } }, to: "K10j_lunel" },
      { label: "Une petite porte ferrée, sous l'arcade : *Trésor et Sceau*", to: "K10j_tresor" },
      { label: "Un atelier d'où sort un bruit de lime", to: "K10j_cliquet" },
      { label: "Un gros homme en bas de soie, qui traverse en soufflant", hide: { any: [{ not: { seen: "K08j_rouet" } }, { seen: "K10j_rouet" }] }, to: "K10j_rouet" },
      { label: "T'asseoir au pied du cadran solaire, et attendre midi", hide: { seen: "K10j_midi" }, to: "K10j_midi", big: true },
      { label: "Laisser tomber le soir sur la colline", hide: { not: { seen: "K10j_midi" } }, to: "K10j_soir", big: true },
    ] },

  // ---------- Josquin ----------
  K10j_apprentis: { act: "III", title: "Le réfectoire", backName: "le réfectoire des apprentis", place: "guilde", ambiance: "chateau",
    text: [
      { first: true, text: "Une salle longue, voûtée, deux tables, des bancs. Les apprentis de la colline y mangent, y dorment à moitié, et y font l'opinion. Ils sont une trentaine, de douze à dix-huit ans, en tablier de cuir, et ils ont tous cette pâleur des gens qui regardent de petites choses à la lampe." },
      { first: true, text: "On parle de l'assaut. C'est un usage de la veille du Grand Midi : les apprentis des sept Jurés se rencontrent dans la cour, à la baguette de buis, par paires, devant qui veut voir. On dit que les Fondateurs réglaient ainsi les querelles d'atelier, pour épargner les outils. Cette année, il n'y a qu'une querelle, et elle a deux noms : ceux qui tiennent pour le vieux, ceux qui tiennent pour le jeune." },
      { first: true, after: "j:concours_gagne", text: "Les têtes se tournent. On te connaît : tu es *la clef de la Foire*. Aymon Foliot te fait de la place sur son banc. À l'autre table, un grand garçon blond, large, bien peigné, te regarde sans amitié en cassant du pain." },
      { first: true, before: "j:concours_gagne", text: "On te regarde à peine. Un{e} de plus, des champs, en visite. Aymon Foliot, qui t'a vu{e} à la Foire, lève deux doigts. À l'autre table, un grand garçon blond, large, bien peigné, parle haut." },
      { again: true, text: "Les deux tables, les tabliers de cuir. On reparle de l'assaut." },
    ],
    choices: [
      { label: "Aymon Foliot, et ce qui se dit à sa table", hide: { seen: "K10j_aymon" }, to: "K10j_aymon" },
      { label: "Le grand blond de l'autre table", hide: { duel: "d_apprentis" }, to: "K10j_baudouin" },
      { label: "Un garçon à besicles, au bout du banc, qui mange en lisant", hide: { any: [JOSQ, { seen: "K10j_josquin" }] }, to: "K10j_josquin" },
      { back: "K10j_cour" },
    ] },

  K10j_aymon: { act: "III", title: "Ceux du vieux, ceux du jeune", place: "guilde", ambiance: "chateau",
    text: [
      "« Vous tombez bien, dit Aymon. On comptait. » Il a fait, avec des miettes, deux tas sur la table. « Sept Jurés, sept ateliers. Chez le sous-maître, ils sont neuf, et ils se tiennent comme un seul : il les choisit lui-même, il les paie, et il leur explique. Chez Cliquet, cinq, qui font ce que font les neuf. Chez Balancourt, on ne lime plus, on écrit : quatre commis. Cela fait le tas du jeune. »",
      "Il pousse l'autre. « Chez le Grand Maître, il y a Josquin. Un. Le vieux ne prend qu'un apprenti à la fois, il dit qu'au-delà on n'enseigne plus, on fait la classe. Chez Lunel, trois, qui font surtout la lecture au patron. Chez Rouet, deux, qui s'occupent de ses vignes. Chez mon oncle, moi, et un petit. »",
      "« Vous voyez la colline. Le jeune a les mains, le vieux a les livres. Depuis un an, tout ce qui se fabrique ici de neuf sort de la porte au papillon. Le Grand Maître dit non à tout, et il a raison une fois sur deux, ce qui est beaucoup pour un homme qui dit toujours non. » Aymon balaie ses miettes. « Demain, on vote. Après-demain, on saura qui était la Guilde. »",
      { after: "j:sait_vote", text: "Tu demandes où en est son oncle. « Avec le nombre. Il a demandé hier à dîner combien étaient pour. J'ai dit six. Il a repris du gigot. »" },
    ],
    choices: [{ back: "K10j_apprentis" }] },

  K10j_josquin: { act: "III", title: "Pardon de vous alarmer", place: "guilde", ambiance: "chateau",
    text: [
      { after: "K07j_reglage_fin", text: "Josquin lève le nez, te reconnaît, et renverse sa soupe. Il se confond en excuses auprès de la table, du banc, de son voisin, qui n'a rien reçu. Puis il te serre la main à deux mains, tachées d'encre jusqu'au poignet : d'une encre noire, grasse, qui n'est pas celle du scriptorium." },
      { before: "K07j_reglage_fin", text: "Le garçon à besicles lève le nez. Il a seize ans, des doigts tachés d'encre jusqu'au poignet, et il s'excuse d'avoir levé le nez. « Pardon. Vous cherchez quelqu'un ? Je suis Josquin. L'apprenti de maître Coudrier. On me cherche rarement. »" },
      "Il t'emmène dehors, sous l'arcade, où personne n'écoute. Il a les yeux rouges de quelqu'un qui ne dort plus.",
      "« Mon maître lit demain, devant les sept. Le chapitre de l'Interdit. Ma copie. » Il remonte ses besicles du poignet. « Il lira très bien. On l'écoutera avec beaucoup de respect. Maître Rouet regardera l'heure. Et l'on votera. Je le sais, il le sait, et il lira quand même, parce que c'est la règle et qu'il n'a jamais rien fait d'autre que la règle. »",
      { after: "j:lu_placard", text: "Tu dis que tu as lu, hier, sur une fontaine de la ville basse, un quart de feuille collé à la mie de pain. Qu'il finissait par *pardon de vous alarmer*. Josquin devient de la couleur de son papier. Il regarde ses mains. Il les cache derrière son dos, puis comprend que c'est avouer, et les ramène devant lui." },
      { after: "j:lu_placard", text: "« Quarante par nuit. À la main : je n'ai pas de presse, et un imprimeur me dénoncerait. Je sors par les communs, avec la corbeille aux plumes. Les hommes de cuivre me laissent, j'ai ma clef. » Sa voix tremble, et tient. « Il y a quarante mille personnes dans cette ville à qui personne ne demande rien. J'ai pensé qu'elles avaient le droit de savoir ce qu'on vote. J'ai sans doute tort. Mon maître dirait que j'ai tort. Je n'ai pas osé le lui demander. »" },
      { before: "j:lu_placard", text: "Il hésite. Puis, plus bas : « Il y a des papiers, dans la ville. Sur les fontaines. Vous en verrez. » Il regarde ses mains, et les met dans son dos. « On dit qu'ils sont d'une écriture d'enfant. Je trouve cela injuste. Celui qui les écrit s'applique. »" },
    ],
    choices: [
      { label: "« Cette nuit, je porte la corbeille avec toi. »", hide: { not: { has: "j:lu_placard" } }, fx: { join: "josquin", flag: ["j:josquin_placards", "monde:josquin_ami"], conf: { josquin: 15 }, ep: ["perso", 500] }, to: "K10j_josquin_fin" },
      { label: "« Tes papiers font rire les porteurs d'eau. Il faut autre chose. Mène-moi à ton maître. »", fx: { join: "josquin", conf: { josquin: 5 } }, to: "K10j_josquin_fin" },
      { label: "« Arrête. On t'a vu : un homme en gris les décolle, et il sait lire une écriture. »", hide: { not: { has: "j:lu_placard" } }, fx: { join: "josquin", flag: "j:josquin_arrete", conf: { josquin: -5 } }, to: "K10j_josquin_fin" },
    ] },

  K10j_josquin_fin: { act: "III", title: "Un tournevis long comme l'avant-bras", place: "guilde", ambiance: "chateau",
    text: [
      { after: "j:josquin_placards", text: "Il te regarde comme si tu venais de lui offrir une presse. « Avec moi. » Il ôte ses besicles, les essuie, les remet de travers. « Personne n'a jamais rien porté avec moi. Je vous préviens que je cours mal. Si l'on nous prend, vous direz que je vous ai forcé{e} : on me croira capable de tout, depuis que j'ai un maître qui dit non. »" },
      { after: "j:josquin_arrete", text: "Il encaisse. Il regarde longtemps ses doigts noirs. « Un homme en gris. Un régleur. » Il respire. « Alors il le sait depuis trois jours, et l'on ne m'a pas arrêté. Cela veut dire que quelqu'un, là-haut, aime mieux savoir ce que j'écris que m'empêcher d'écrire. » Il a compris cela tout seul, et cela lui fait plus peur que le cachot." },
      { if: { not: { any: [{ has: "j:josquin_placards" }, { has: "j:josquin_arrete" }] } }, text: "« À mon maître. » Il se redresse. C'est le seul mot qui lui donne de la taille. « Il reçoit mal. Je vous en préviens, pour que vous ne le preniez pas pour vous : il reçoit mal le Roi. Mais il écoute tout, jusqu'au bout, et il n'oublie rien de ce qu'on lui a dit, ce qui est très incommode pour les menteurs. »" },
      "Il tire de son tablier un tournevis long comme l'avant-bras, s'aperçoit qu'il l'a tiré, le rentre. « Pardon. C'est une habitude. Quand je marche à côté de quelqu'un, il me faut quelque chose dans la main. Venez. Avec moi, les hommes de cuivre vous laissent les escaliers. »",
    ],
    choices: [{ back: "K10j_apprentis" }] },

  K10j_baudouin: { act: "III", title: "Le grand Baudouin", place: "guilde", ambiance: "chateau", duel: "d_apprentis", duelLabel: "Prendre une baguette au râtelier",
    text: [
      "Il s'appelle Baudouin Passavant, il a dix-huit ans, et il est premier apprenti du sous-maître. C'est un beau garçon, sûr de ses mains et de son avenir, qui porte son tablier comme un habit. Il a fini second à la Foire il y a deux ans, et il lui en est resté une dent contre les concours.",
      { after: "j:concours_gagne", text: "« La clef de la Foire. » Il t'a laissé{e} venir. « Monsieur Aubespin dit que vous avez un revenu au bleu qu'il ne connaît pas. Il l'a dit devant nous neuf, à table. Il n'avait jamais dit cela de personne. » Le compliment lui fait le même effet qu'une arête." },
      { before: "j:concours_gagne", text: "« Quelqu'un des champs. » Il t'a laissé{e} venir. « On vous a vu{e} tourner dans la cour comme une mouche dans un mouvement. Vous cherchez qui ? Le vieux ? Il ne reçoit que les gens qu'il peut gronder. »" },
      "« Il y a assaut ce matin, dans la cour. Trois touches, à la baguette de buis. Josquin tire pour l'atelier du Grand Maître, puisqu'il y est seul ; il tire comme il écrit, en s'excusant, et je le toucherai trois fois avant qu'il ait fini sa révérence. » Il sourit. « À moins qu'on ne le remplace. L'usage le permet : *un bras de la maison, ou un bras qui en a la clef.* »",
      { if: { not: CLEF }, text: "Il regarde tes mains vides. « Vous n'avez pas la clef. Peu importe. Je dirai que je vous prête la mienne. J'ai envie de voir comment on se tient, aux champs. »" },
      "Les deux tables se sont tues. Trente apprentis attendent de savoir de quel tas tu es.",
    ],
    choices: [{ back: "K10j_apprentis" }] },

  K10j_assaut_gagne: { act: "III", title: "Trois touches", place: "guilde", ambiance: "chateau",
    text: [
      "La troisième lui arrive au milieu de la poitrine, à plat, sur le cuir du tablier, avec un bruit de livre qu'on ferme. Baudouin Passavant regarde la baguette. Il regarde la cour, où trente apprentis font un silence qui vaut une acclamation, et la fenêtre du premier, où le vieillard en bonnet a ouvert un œil.",
      "Il salue. Il salue bien, de l'épée et de la tête, en garçon qu'on a dressé ; et en se relevant il te dit, pour toi seul{e}, sans colère : « Vous tirez comme quelqu'un qui a peu de temps. Monsieur Aubespin dit que c'est la seule manière. » Puis il raccroche sa baguette au râtelier, et s'en va sans se retourner vers la porte au papillon.",
      "On t'entoure. Aymon te tape sur l'épaule. Un petit de douze ans te demande si aux champs on apprend cela avec les vaches. On a touché trois fois le premier bras du jeune, la veille du vote, devant la maison. Cela ne change pas une voix au Conseil. Cela change, dans un réfectoire, la figure de ceux qui n'osaient pas compter les miettes du petit tas.",
      { with: "josquin", text: "Josquin a les besicles embuées. « Il m'aurait touché trois fois, dit-il. Il me l'avait promis à déjeuner. » Il cherche son tournevis, le trouve, le range. « Je vais le dire à mon maître. Il répondra que c'est un enfantillage. Mais il demandera votre nom. »" },
    ],
    choices: [{ label: "Raccrocher ta baguette", to: "K10j_cour", big: true }] },

  K10j_assaut_perdu: { act: "III", title: "Trois touches", place: "guilde", ambiance: "chateau",
    text: [
      "La troisième t'arrive sous le coude, où le buis fait le plus mal. Baudouin Passavant a une allonge de faucheur et dix ans de salle ; il t'a lu{e} en deux passes, et il t'a rendu ta lecture avec les intérêts.",
      "Il salue. Il salue bien. « Vous tenez votre garde trop près, dit-il, sans méchanceté, en maître déjà. On voit que vous avez appris seul{e}, ou d'un seul maître. C'est un défaut qu'on a beaucoup, chez le vieux. » Il raccroche sa baguette, et les neuf du papillon l'emmènent en faisant du bruit.",
      "Tu te frottes le coude. Aymon te tend ta veste. « Il a perdu une touche, remarque-t-il. Contre Josquin, il n'en aurait pas perdu. Personne ne lui en avait pris une depuis la Chandeleur. » C'est une consolation d'apprenti, comptée juste.",
      { with: "josquin", text: "Josquin te regarde ton coude avec un remords affreux. « C'est à ma place que vous l'avez reçu. Pardon. Je vous dois une touche. Je n'ai aucune idée de la manière dont on rend cela. »" },
    ],
    choices: [{ label: "Raccrocher ta baguette", to: "K10j_cour", big: true }] },

  // ---------- the Grand Master ----------
  K10j_antichambre: { act: "III", title: "Douze anneaux", backName: "l'antichambre du Grand Maître", place: "guilde", ambiance: "chateau",
    text: [
      { first: true, text: "Le logis du nord est le plus vieux. On y monte par un escalier de pierre, droit, où un homme de cuivre se tient sur le palier, sa lanterne grise au cœur." },
      { first: true, if: { not: { any: [CLEF, JOSQ] } }, text: "Il te regarde monter : l'ovale lisse descend à tes mains. Tu t'arrêtes à la sixième marche. D'en bas, tu vois la porte, et tu la regardes de là." },
      { first: true, text: "La porte du Grand Maître est de chêne, basse, noire, sans poignée. À hauteur de poitrine, elle porte un tambour de bronze gros comme un pain, fait de douze anneaux enfilés sur un même axe. Chaque anneau tourne sous le doigt, avec un cliquet doux, et montre par une petite fenêtre un chiffre, de I à XII ; entre le XII et le I, il y a une face lisse, où l'on n'a rien gravé." },
      { first: true, text: "Douze anneaux à treize faces. Tu fais le compte par habitude : cela donne plus de combinaisons qu'il n'y a de grains dans un boisseau de blé. Maître Gobin, rue des Aiguilliers, a fait cela il y a quarante ans, et s'est dépêché de l'oublier.", if: { has: "j:sait_douze_anneaux" } },
      { first: true, text: "Douze anneaux à treize faces. Tu fais le compte par habitude : cela donne plus de combinaisons qu'il n'y a de grains dans un boisseau de blé.", if: { not: { has: "j:sait_douze_anneaux" } } },
      { again: true, text: "L'escalier droit, l'homme de cuivre, la porte noire et son tambour de bronze." },
      { first: true, with: "josquin", text: "Josquin s'arrête devant la porte et se tourne vers le mur. « Pardon. Je ne dois pas vous laisser voir. Je ne dois pas le voir moi-même : il m'ouvre de l'intérieur, depuis trois ans. Il dit que le jour où je saurai ce qu'il faut savoir, je n'aurai pas besoin qu'on me donne les chiffres. » Il frappe : trois coups, et il attend." },
    ],
    choices: [
      { label: "Entrer derrière Josquin", hide: { not: JOSQ }, to: "K10j_coudrier", big: true },
      { label: "Frapper, la clef de bronze dans l'autre main", hide: { any: [JOSQ, { not: CLEF }] }, to: "K10j_coudrier", big: true },
      { label: "Crier d'en bas que tu apportes un billet de maître Baudri, d'Arvoise", hide: { any: [JOSQ, CLEF, { not: { item: "lettre_baudri" } }] }, to: "K10j_coudrier", big: true },
      { back: "K10j_cour" },
    ] },

  K10j_coudrier: { act: "III", title: "Barnabé Coudrier", backName: "le cabinet du Grand Maître", place: "guilde", ambiance: "chateau", fx: { meet: "coudrier", flag: "j:coudrier_vu" },
    text: [
      { first: true, text: "On entend, de l'autre côté, douze petits cliquets, très vite, d'une main qui ne regarde plus. La porte s'ouvre sur un dos." },
      { first: true, text: "Il est déjà retourné à sa table. C'est un grand vieillard sec, voûté, en houppelande de drap brun usée aux coudes, avec des mains énormes, noueuses, tachées, des mains de forgeron qui auraient fait toute leur vie des choses de la taille d'un pois. Il a soixante-dix ans. Sa figure, quand il la tourne enfin, est telle qu'on te l'a dite : une porte fermée, avec deux yeux gris dans les ais." },
      { first: true, text: "Le cabinet est petit, nu, sans une horloge. Une table, un lit de sangle, un coffre, des livres par terre. Par la fenêtre, on a la Tour à vingt toises, et la petite porte de fer sous le cadran. Sur la table, un cahier ouvert, d'une écriture ronde : la copie de Josquin, annotée dans les marges d'une main qui appuie." },
      { first: true, text: "« Qu'est-ce que c'est ? » Il n'a pas dit *qui*. « Je travaille. Je lis demain devant six ânes et un serpent, il me faut la journée pour décider dans quel ordre je les insulte. Parlez. Vous avez le temps que met ce sablier. » Il retourne, sur la table, un sablier de trois doigts de haut. Le sable en est blond : du sable de rivière." },
      { again: true, text: "Le vieillard à sa table, la copie de Josquin, la Tour à la fenêtre. Il a retourné son sablier en te voyant entrer." },
      { first: true, with: "josquin", text: "Josquin s'est mis contre le mur, les mains dans le dos. Son maître ne l'a pas regardé ; il a seulement poussé vers lui, du coude, sans se retourner, une assiette où il reste la moitié d'un pain et un fromage. C'est le déjeuner du Grand Maître. Josquin le mange debout, sans bruit, avec la reconnaissance d'un chien." },
    ],
    choices: [
      { label: "Lui remettre le billet de maître Baudri", hide: { any: [{ not: { item: "lettre_baudri" } }, { seen: "K10j_coudrier_baudri" }] }, fx: { drop: "lettre_baudri" }, to: "K10j_coudrier_baudri" },
      { label: "« On a écrit sous votre sceau, le quinze, aux dames de Sainte-Aure. Le d penchait en arrière. »", hide: { seen: "K10j_coudrier_faux" }, to: "K10j_coudrier_faux" },
      { label: "« J'ai vu ses cuves, à Roquebise. Douze. Il ne les fait pas faire pour une chambre. »", hide: { any: [{ not: { has: "j:aubespin_connait" } }, { seen: "K10j_coudrier_cuves" }] }, to: "K10j_coudrier_cuves" },
      { label: "Poser sur sa table ce que tu rapportes du quai des Barges", hide: { any: [{ not: PREUVE }, { has: "j:coudrier_croit" }] }, fx: { flag: "j:coudrier_croit", ep: ["histoire", 600] }, to: "K10j_coudrier_preuve" },
      { label: "« Il y a rue des Aiguilliers quelqu'un qui sait les quarante chapitres par cœur. »", hide: { any: [{ not: { has: "j:tiphaine_temoin" } }, { seen: "K10j_coudrier_tiphaine" }] }, to: "K10j_coudrier_tiphaine" },
      { label: "« Si vous perdez demain, que ferez-vous après-demain ? »", hide: { seen: "K10j_coudrier_demain" }, to: "K10j_coudrier_demain" },
      { label: "Lui dire d'où tu viens, et de quand", hide: { any: [{ has: "j:coudrier_sait" }, { not: { seen: "K10j_coudrier_demain" } }] }, to: "K10j_coudrier_verite" },
      { back: "K10j_cour" },
    ] },

  K10j_coudrier_baudri: { act: "III", title: "Un billet d'Arvoise", place: "guilde", ambiance: "chateau",
    text: [
      "Il prend le billet entre deux doigts, comme une pièce d'horlogerie douteuse. Il le lit. Il le relit. Quelque chose bouge dans les ais de la porte.",
      "« Baudri. » Il pose le papier. « Je l'ai eu trois ans sur mon banc, avant qu'il passe aux ponts. Il n'avait aucune main. Il avait l'œil. Je lui ai dit : *va bâtir des choses grosses, mon garçon, tes erreurs s'y verront de plus loin.* » Il te regarde, pour la première fois, comme on regarde quelqu'un. « Il écrit que vous avez sondé sa troisième pile avec un fil à plomb de maçon, et que vous lui avez dit son fait sur un chantier, devant ses hommes. Il écrit que vous aviez raison. Baudri ne m'a jamais écrit que quelqu'un avait raison. Il me l'a dit de moi une fois, en 529, et il a boudé un mois. »",
      "Il retourne le sablier, qui n'était pas fini. « Vous avez un second tour. Asseyez-vous sur le coffre. On ne s'assoit pas sur les livres. »",
    ],
    choices: [{ back: "K10j_coudrier" }] },

  K10j_coudrier_faux: { act: "III", title: "Un d qui recule", place: "guilde", ambiance: "chateau",
    text: [
      "« Je le sais. » Il a répondu avant la fin. « L'abbesse m'a écrit, par mon apprenti. Elle m'a renvoyé les deux lettres, la vraie et l'autre, épinglées ensemble, avec trois lignes où elle me demande si je deviens gâteux ou si l'on me vole. C'est une femme de sens. Je lui ai répondu que les deux n'étaient pas incompatibles. »",
      "Il ouvre un tiroir, en tire deux feuilles, les pose côte à côte. Le même sceau, le même balancier dans son cercle. « Mon écriture. La sienne, qui fait la mienne. Il la fait mieux que moi : je tremble un peu, depuis deux ans, et il a eu la délicatesse de ne pas trembler. C'est à cela qu'on la reconnaît. Cela, et le *d*. Il n'a jamais su faire un *d* qui avance. Je le lui ai reproché quand il avait huit ans. »",
      "« Vous me direz : montrez cela au Conseil. » Les grosses mains se referment. « Le sceau est dans un coffre à trois clefs. Pour l'en sortir, il en faut deux. J'ai la mienne. Je ne l'ai pas tournée le quinze. Donc Balancourt a tourné la sienne, et Balancourt dira qu'il a cru signer pour une quittance : il signe vingt quittances par jour, et il ne lit que les chiffres. Le registre du sceau portera deux noms, en règle. Un faux fait dans les formes, cela s'appelle un acte. »",
      { after: "j:rouet_averti", text: "Tu dis que maître Rouet le sait aussi, depuis le coche d'eau, et qu'il a rangé la chose dans une armoire. Le vieillard a un bruit de gorge qui pourrait être un rire. « Rouet. Il a de l'esprit, sous sa graisse. Il s'en sert comme d'un parapluie : seulement quand il pleut sur lui. »" },
    ],
    choices: [{ back: "K10j_coudrier" }] },

  K10j_coudrier_cuves: { act: "III", title: "Ce que le verre boit", place: "guilde", ambiance: "chateau",
    text: [
      "Tu dis la verrerie de Roquebise, la nuit, les cuves hautes comme un homme, et le papillon qui s'arrêtait pour une pincée. Tu dis qu'on en a soufflé douze.",
      "Le vieillard ne t'interrompt pas. Quand tu as fini, il se lève, va à la fenêtre, et regarde la petite porte de fer.",
      "« Douze. » Il a perdu sa voix d'insulte. « On lui en a voté une. Une cloche de verre, pour une chambre, pour une enfant. Le Conseil a vu le dessin : une chose de la taille d'un lit. J'ai dit non, et l'on m'a répondu que je n'avais pas de cœur. » Il se retourne. « Savez-vous ce que fait le Balancier, quand on le tient ? Il sue. Le temps qu'on lui retient lui sort par la pierre, en rosée, tout autour. Les Fondateurs en ont ramassé de quoi faire marcher douze hommes de cuivre pendant quatre cents ans, en le tenant, dit le Livre, *le temps d'un soupir.* »",
      "« Il veut le tenir un an. » Il compte sur ses gros doigts, et s'arrête. « Je lui ai appris à calculer. Il a calculé. Il ne lui faut pas douze cuves pour une princesse. Il lui en faut douze pour ce que rendra la Tour, si on la saigne un an. » Il revient s'asseoir, lourdement. « J'ai cru qu'il voulait sauver une enfant et qu'il se trompait de moyen. C'est moi qui me trompais. Il se sert de l'enfant comme d'un entonnoir. »",
    ],
    choices: [{ back: "K10j_coudrier" }] },

  K10j_coudrier_preuve: { act: "III", title: "L'empêchement de la Reine", place: "guilde", ambiance: "chateau",
    text: [
      { after: "j:lettre_oderic", text: "Tu déplies la lettre sur la copie de Josquin. Il la lit debout, les deux poings sur la table. Il met longtemps : il lit comme il lime, sans rien passer." },
      { after: "j:lettre_oderic", text: "« *Durant l'empêchement de la Reine.* » Sa voix est très basse. « Datée d'hier. Avec un dais. » Il relève la tête. « Vous avez pris cela dans la poche de qui ? Non. Ne me le dites pas. Un Grand Maître ne doit pas savoir qu'on vole pour lui. »" },
      { if: { all: [{ has: "j:epreuve_sceau" }, { not: { has: "j:lettre_oderic" } }] }, text: "Tu poses la cire sur la copie de Josquin. Il la prend dans sa grosse paume, la tourne vers la fenêtre, suit les lettres du pouce, à l'envers et à l'endroit. *ODERIC, PAR LA GRÂCE DE DIEU, RÉGENT D'AURIME.*" },
      { if: { all: [{ has: "j:epreuve_sceau" }, { not: { has: "j:lettre_oderic" } }] }, text: "« Marteau. » Il a reconnu la taille. « Josse Marteau, des Monnaies. Il grave le cheval toujours du même pied. Livré quand ? » Tu dis : le douze. « Le douze. » Il repose la cire comme on pose un mort." },
      "Il reste un moment sans rien dire. Dans la cour, un homme de cuivre passe sous la fenêtre ; on voit glisser sa lanterne.",
      "« Je suis un imbécile. » Il le dit avec une sorte de soulagement, en homme qui retrouve enfin une clef. « Je me bats depuis six mois contre une erreur de doctrine. Je cite le Livre. Je fais copier des chapitres. Et pendant ce temps-là un duc achète ma maison, en payant ses dettes, pour qu'elle lui fabrique un trône. Il n'y a aucune doctrine là-dedans. Il y a un marché, et je suis le seul de la colline à ne pas avoir été acheté, parce que personne n'a pensé que je valais le prix. »",
      { after: "j:oui_marche", text: "Tu lui dis le reste : une salle basse, deux voix, *la mère avec l'enfant*, un an, douze mille écus. Et la phrase : *Monseigneur aura ce qu'il a payé.* Le vieillard ferme les yeux. « Il l'a dit de cette voix-là. Celle qu'il prend pour répondre à côté. Le duc achète un an. Melchior lui vend un an, et garde le reste pour lui. Il y a deux voleurs dans cette affaire, et le second vole le premier. »" },
      "Il te rend ce que tu as apporté. « Gardez. Chez moi, on fouillera. Demain, quand j'aurai fini de lire, et qu'ils auront regardé l'heure, vous serez dans la salle, et je vous ferai signe. Ils ont six voix contre un chapitre. Nous verrons ce qu'ils ont contre une date. »",
    ],
    choices: [{ back: "K10j_coudrier" }] },

  K10j_coudrier_tiphaine: { act: "III", title: "Le troisième article", place: "guilde", ambiance: "chateau", fx: { flag: "j:coudrier_tiphaine" },
    text: [
      "Tu dis qu'il y a, chez maître Gobin, depuis avant-hier, un neveu de province. Qu'il a passé quatre ans au scriptorium de Sainte-Aure, sous un voile, à relier, et onze nuits à lire le Livre en entier pendant qu'on dormait. Qu'il le sait.",
      "« Gobin. » Le vieillard a failli sourire. « Il m'a pris une apprentie sous le nez. Je la lui avais refusée moi-même, par lettre, il y a quatre ans : *Mademoiselle, le troisième article.* Elle m'avait répondu que le troisième article ne savait pas limer, et qu'elle, si. » Il regarde ses mains. « J'ai gardé sa réponse. Je la relis quand je me trouve trop intelligent. »",
      "« Quarante chapitres. De mémoire. » Il réfléchit. « Ma copie en a un. Ils diront que je l'ai choisi. S'il y a dans la salle quelqu'un qui peut réciter ce qui vient avant et ce qui vient après, on ne dira plus que je cite : on dira que le Livre parle. Les Jurés ont peur de trois choses : la Reine, les dettes, et le Livre quand il est entier. »",
      "Il frappe la table du plat de la main. « Qu'elle monte. En culotte, en voile, en ce qu'elle voudra : je ne regarde pas les habits, je regarde les mains. Je la ferai entrer demain par la porte des apprentis, comme *lecteur du Grand Maître*. Il n'y a pas d'article contre les lecteurs. Et si Balancourt en trouve un, je lui ferai remarquer qu'il a signé un faux le quinze, ce qui calme. »",
      { with: "josquin", text: "Josquin a cessé de mâcher. « Maître. Vous avez refusé une main parce qu'un papier le voulait ? » C'est la première fois de sa vie qu'il pose une question sans demander pardon. Le vieillard le regarde un long moment. « Oui. Finis ton pain. »" },
    ],
    choices: [{ back: "K10j_coudrier" }] },

  K10j_coudrier_demain: { act: "III", title: "Si je ne redescends pas", place: "guilde", ambiance: "chateau",
    text: [
      "Le sablier est vide depuis longtemps. Il ne l'a pas retourné.",
      "« Après-demain. » Il regarde la Tour. « Après-demain, à midi moins un quart, la Reine monte à la Chambre haute. Melchior descend à la Chambre basse, par la porte de fer, avec sa permission votée et sa cale dans la poche. Au premier coup de midi, il pose la main sur le levier. » Il se tourne vers toi. « Moi aussi, je descendrai. J'ai une clef de cette porte, que le Conseil ne peut pas m'ôter : elle est au Grand Maître depuis les Fondateurs. J'aurai soixante-dix ans, lui trente. Je compte sur ma mauvaise humeur. »",
      "Tu demandes ce qu'il fera, en bas.",
      "« Ce que dit le Livre. *Nul ne le tiendra.* S'il le tient, je le lui ôte des mains avant le coup suivant, et tout ce qu'on aura perdu, c'est une note de cloche un peu longue. » Il a un geste d'épaule. « Si je n'y arrive pas, vous aurez un Grand Maître de moins et une cloche qui s'arrête au milieu de son compte. C'est arrivé en 481. On s'en est tirés avec trois psaumes de retard et un Foliot déposé. »",
      "Il se tait. Puis, d'une autre voix, plus lente : « Si je ne redescends pas de cette Tour, il faudra que quelqu'un entre ici. Il y a, dans ce coffre, ce que les Grands Maîtres se passent de la main à la main, et qu'on ne copie pas. Josquin ne sait pas ouvrir. Je ne le lui ai pas appris : je voulais qu'il trouve. » Il considère la porte noire, de l'intérieur, où l'on voit le dos du tambour de bronze.",
      { after: "j:coudrier_croit", text: "« Vous m'avez apporté ce matin plus que tout mon Conseil en six mois. Écoutez donc, et retenez : je ne le dirai pas deux fois, et je nierai l'avoir dit. »" },
      { before: "j:coudrier_croit", text: "« Je ne vous connais pas. Vous avez des mains honnêtes et l'air de quelqu'un qui en sait plus qu'il ne devrait, ce qui d'ordinaire s'exclut. Je vais faire une sottise, à mon âge : me fier à des mains. Écoutez, et retenez. »" },
    ],
    choices: [{ label: "Écouter", fx: { flag: "monde:combinaison", ep: ["histoire", 600] }, to: "K10j_serrure", big: true }] },

  K10j_serrure: { act: "III", title: "Ce qu'il faut savoir", place: "guilde", ambiance: "chateau",
    text: [
      "« Douze anneaux, un par Heure. Treize faces : les douze chiffres, et une face lisse. Un imbécile essaie des dates. Un homme adroit essaie des suites. Un savant cherche dans le Livre un nombre à douze chiffres, et il en trouve quarante, tous faux. »",
      "« Gobin m'a demandé ce que je voulais qu'on sût pour entrer. Je lui ai répondu : ce que sait un enfant de chœur. Qu'il y a douze Heures. Qu'on en nomme onze. Que la dernière ne se nomme pas, qu'on ne la sonne qu'une fois, et qu'on la laisse en blanc dans tous les calendriers. » Il lève un doigt énorme. « Chaque anneau sur son Heure. Le premier au I, le second au II, et ainsi jusqu'au onzième. Et le douzième, sur rien. Sur la face lisse. »",
      "« Tout le monde met douze au douzième. Cela paraît si naturel. La porte reste fermée pour tout le monde. » Les ais de sa figure se desserrent d'une ligne. « Elle ne s'ouvre qu'à ceux qui savent qu'il y a une chose qu'on ne tient pas, qu'on ne nomme pas, et à quoi l'on ne met pas de chiffre. C'est toute ma doctrine. Elle tient dans une serrure. Melchior n'a jamais su l'ouvrir : il est trop intelligent, et il met douze. »",
      "Tu le retiens. Tu le tiens même si bien que tu sais déjà à qui tu l'écriras ce soir, dans un Cahier, pour une porte qui sera la même dans soixante ans, avec un homme de cuivre sur le palier.",
    ],
    choices: [{ back: "K10j_coudrier" }] },

  K10j_coudrier_verite: { act: "III", title: "De quand", place: "guilde", ambiance: "chateau", fx: { flag: ["j:coudrier_sait", "monde:coudrier_sait"], ep: ["perso", 600] },
    text: [
      "Tu le dis. Tu n'as trouvé aucune manière habile, depuis la ferme des Noyers ; tu prends la plus courte. Que tu es né{e} après. Que dans ton pays la cloche a sonné onze, un jour de Grand Midi, et que le douzième n'est pas venu. Que la ville est prise depuis soixante ans, avec la Reine, l'enfant, et quarante mille personnes, et que cela gagne d'un quart de lieue par an. Que tu es revenu{e} par une porte.",
      "Il t'écoute comme il lit. Il ne dit pas que c'est impossible. C'est un homme qui garde depuis quarante ans, sous une tour, une chose qu'il ne comprend pas ; il a perdu l'habitude de ce mot.",
      "« Onze. » Il le répète deux fois. « Donc je n'y arrive pas. » Il n'y a aucune plainte dans sa voix : il vérifie un calcul. « Je descends, je me bats avec lui au levier, et la barre se coince à fond, entre le onzième et le douzième. C'est la seule manière que cela dure soixante ans. S'il l'avait tenue seul, il l'aurait rendue au bout de son année : il veut sa récolte, pas un désert. » Il regarde ses mains. « C'est donc moi qui la coince. En voulant la lui ôter. »",
      "Il reste longtemps ainsi. La Tour, à la fenêtre, fait son petit saut d'aiguille.",
      "« Et que dit-on de moi, chez vous ? »",
      "Tu hésites. Il attend. Tu dis le mot que dit la Chronique : *le Maudit.*",
      "« Ah. » Il hoche la tête, avec une espèce de satisfaction amère. « C'est bien trouvé. C'est même juste, si c'est ma main qui est dessus. Les ducs ont de bons greffiers. » Il se lève. Il est très grand, debout, sous son plafond bas. « Je descendrai quand même, vous l'entendez ? Vous me dites que j'échoue. Je vous réponds qu'un homme qui sait par où il échoue a une chance de plus que les autres. Et vous serez là, cette fois, vous qui n'y étiez pas. Cela fait déjà une chose de changée. Maintenant sortez : j'ai un Conseil à insulter, et il me faut refaire mon ordre. »",
      { with: "josquin", text: "Josquin est contre le mur, blanc, le pain dans la main. Il a tout entendu. Il regarde son maître, puis toi, puis la Tour. Il ne s'excuse pas. Il n'a plus rien, pour une fois, dont il croie devoir s'excuser." },
    ],
    choices: [{ back: "K10j_coudrier" }] },

  // ---------- the under-master ----------
  K10j_aubespin_porte: { act: "III", title: "La porte au papillon", backName: "la porte au papillon", place: "guilde", ambiance: "chateau",
    text: [
      { first: true, text: "Le logis du fond a été refait à neuf : des fenêtres hautes, des vitres claires, de la pierre blanche. Sur la porte, à la place du heurtoir, quelqu'un a fait ciseler dans le bronze un papillon aux ailes ouvertes, grand comme la main. On le soulève par le corps pour frapper." },
      { first: true, text: "Par les fenêtres, on voit neuf établis, neuf lampes à boule d'eau, neuf dos. Personne ne lève la tête. Il règne là-dedans une activité sans bruit, exacte, heureuse, celle d'une ruche où chaque abeille a compris le plan." },
      { first: true, text: "Sur un banc, sous l'arcade, un long homme funèbre trie des bordereaux. Monsieur Fourchon a pour toi le regard qu'on a pour un colis." },
      { again: true, text: "La pierre blanche, les neuf dos, le papillon de bronze. Monsieur Fourchon trie." },
    ],
    choices: [
      { label: "Soulever le papillon", hide: { seen: "K10j_aubespin" }, to: "K10j_aubespin", big: true },
      { label: "Frapper encore à l'atelier du sous-maître", hide: { any: [{ not: { seen: "K10j_aubespin" } }, { has: "j:aubespin_apprenti" }, { has: "j:aubespin_refuse" }] }, to: "K10j_aubespin_offre" },
      { label: "Monsieur Fourchon, et ses bordereaux", hide: { seen: "K10j_fourchon" }, to: "K10j_fourchon" },
      { back: "K10j_cour" },
    ] },

  K10j_fourchon: { act: "III", title: "Sans un clou", place: "guilde", ambiance: "chateau",
    text: [
      { after: "j:bordereau_signe", text: "« Le commissionnaire de la Foire. » Il t'a remis{e}. Monsieur Fourchon n'oublie pas une figure qui lui a fait signer quelque chose. « Maître Ragot a livré. Douze berceaux de chêne, assemblés à queue d'aronde, chevillés de bois, sans un clou ni une vis. Je les ai reçus hier, comptés, mesurés. Il en manquait un demi-pouce au septième : il le reprend à ses frais. »" },
      { before: "j:bordereau_signe", text: "Il ne te connaît pas, et te le fait sentir. Mais il a devant lui douze feuilles pareilles, et tu lis celle du dessus à l'envers pendant qu'il cherche ses lunettes. *Douze berceaux de chêne, à queue d'aronde, chevillés de bois, sans un clou ni une vis. Pour M. le sous-maître. À monter cette nuit.*" },
      "Tu demandes pourquoi sans un clou. Monsieur Fourchon te regarde comme si tu avais demandé pourquoi l'eau mouille.",
      "« Parce que monsieur le sous-maître l'a écrit. » Il réfléchit, par acquit de conscience. « Il a dit une fois, devant moi, que le fer boit mal, que le cuivre boit trop, et que le chêne ne boit rien. Je n'ai pas demandé quoi. Je tiens les comptes. »",
      { after: "j:sait_berceaux", text: "*Porte basse de la Tour, nuit du dix-neuf au vingt, hors des livres.* C'est cette nuit. Douze berceaux, pour coucher douze cuves ; du bois que rien n'attaque, pour porter un verre qui boit." },
      { before: "j:sait_berceaux", text: "*À monter cette nuit.* Tu regardes, par-dessus le toit, la petite porte de fer. Douze berceaux : il faut bien qu'on y couche douze choses." },
    ],
    choices: [{ label: "Le laisser à ses comptes", fx: { flag: "j:sait_berceaux" }, to: "K10j_aubespin_porte" }] },

  K10j_aubespin: { act: "III", title: "Une paire de mains", place: "guilde", ambiance: "chateau", fx: { flag: "j:aubespin_atelier" },
    text: [
      "On t'ouvre. On te fait traverser l'atelier, entre les neuf dos, jusqu'à une pièce du fond, blanche, haute, où il n'y a qu'une table de marbre et une fenêtre sur la Tour.",
      "Sur la table, sous une cloche de verre épais, grande comme une ruche, une rose. Elle est ouverte à demi. Une goutte d'eau est arrêtée au bord d'un pétale, ronde, avec la fenêtre dedans.",
      "« Depuis Pâques. » Il est entré derrière toi, sans bruit. Il a son habit gris, ses manchettes, son odeur de mélisse. « Je l'ai coupée le matin de Pâques. Elle a l'âge qu'elle avait. La goutte aussi. Il y faut une pincée par mois, renouvelée par cette petite trappe : c'est tout l'entretien. » Il te laisse regarder. « Voilà ce que le Conseil vote demain. Ceci, en plus grand. Une chambre au lieu d'une cloche, une enfant au lieu d'une rose, et le temps qu'il faudra aux médecins pour trouver ce qu'ils cherchent. Monsieur le Grand Maître appelle cela un sacrilège. Je vous laisse juge. »",
      { after: "j:aubespin_brave", text: "Il te regarde, de ses deux yeux. « Vous portiez des caisses, hier soir, sur un quai. Vous m'avez offert votre figure, en plein flambeau, avec une insolence qui m'a fait plaisir. Je me suis demandé toute la nuit ce que vous cherchiez là. Puis je me suis rappelé que je vous avais dit de venir me voir, et qu'on ne vient pas voir quelqu'un sans s'être renseigné. Vous êtes renseigné{e}. C'est très bien. Cela nous dispensera de mentir. »" },
      { if: { all: [{ has: "j:aubespin_vu_quai" }, { not: { has: "j:aubespin_brave" } }] }, text: "Il te regarde, de ses deux yeux. « Vous portiez des caisses, hier soir, sur un quai. Vous vous cachiez dessous, et mal. Je ne vous en veux pas : on ne vient pas voir quelqu'un sans s'être renseigné. Vous êtes renseigné{e}. Cela nous dispensera de mentir. »" },
      { after: "monde:su:vairons", text: "Un gris, un brun. Tu penses à une autre figure, la même, que {autre} a vue de près sous une tente, avec quinze ans de plus et soixante ans de plus. Celle-ci n'a pas encore décidé d'y arriver." },
      "« Je vous ai dit, à Roquebise, que j'avais l'usage d'une paire de mains. Je vous le redis ici, où cela vaut contrat. » Il s'assoit au bord du marbre. « J'ai neuf garçons, qui font ce que je dessine. Il m'en faut un dixième, qui sache ce que je n'ai pas dessiné. Vous avez un recuit que personne n'enseigne. Vous savez donc des choses que personne n'enseigne. Asseyez-vous à mon dixième établi. Après-demain, à midi, je descends à la Chambre basse ; j'aurai besoin, derrière moi, de quelqu'un qui ne tremble pas et qui ne pose pas de questions. »",
    ],
    choices: [
      { label: "« J'en pose une. Douze cuves, pour une rose ? »", fx: { flag: "j:aubespin_question" }, to: "K10j_aubespin_offre" },
      { label: "Regarder la rose, et le laisser attendre", to: "K10j_aubespin_offre" },
    ] },

  K10j_aubespin_offre: { act: "III", title: "Le dixième établi", place: "guilde", ambiance: "chateau",
    text: [
      { after: "j:aubespin_question", first: true, text: "Il ne cille pas. Il sourit, d'un seul côté. « Vous avez compté. Naturellement. » Il descend du marbre, va à la fenêtre. « Je pourrais vous répondre qu'on n'en vote qu'une et que les onze autres sont de rechange. Vous ne me croiriez pas, et vous auriez raison. Le Balancier rend ce qu'on lui retient. Il le rend en sable. Personne n'en a recueilli depuis les Fondateurs : on le laisse boire à la pierre, par piété. Je trouve cette piété coûteuse. »" },
      { after: "j:aubespin_question", first: true, text: "« Une pincée arrête une rose un mois. Savez-vous ce qu'en ferait un médecin ? Un chirurgien, qui aurait devant lui une heure au lieu d'un cri ? Une mère ? » Il se retourne. Il y croit. C'est ce qui le rend redoutable : il n'a pas, comme le duc, la figure d'un homme qui ment. « On me demande d'endormir une enfant. J'en profite pour ouvrir une mine. Je vole mon acheteur, c'est entendu. Je le vole au profit de tout le monde. »" },
      { before: "j:aubespin_question", first: true, text: "Il attend. Il sait attendre : il a une rose qui attend depuis Pâques. « Vous regardez la goutte, dit-il enfin. Tout le monde regarde la goutte. On se demande si elle souffre. Elle ne souffre pas. Elle ne sait pas qu'elle est arrêtée. Une petite fille me l'a dit, à Roquebise, en chemise, avec plus de justesse que tout mon Conseil. »" },
      { again: true, text: "La pièce blanche, la rose sous sa cloche. Il attend ta réponse, les mains croisées sur un genou." },
      "« Eh bien ? »",
    ],
    choices: [
      { label: "« Je m'assois. » Et savoir, après-demain, où il aura les mains", fx: { flag: "j:aubespin_apprenti", regard: { aubespin: "cordial" }, ep: ["histoire", 400] }, to: "K10j_aubespin_fin" },
      { label: "« Non. Elle ne sait pas qu'elle est arrêtée : c'est bien ce que je vous reproche. »", fx: { flag: "j:aubespin_refuse", regard: { aubespin: "curieux" }, ep: ["perso", 400] }, to: "K10j_aubespin_fin" },
      { label: "« Laissez-moi la journée. »", to: "K10j_aubespin_porte" },
    ] },

  K10j_aubespin_fin: { act: "III", title: "Un gris, un brun", place: "guilde", ambiance: "chateau",
    text: [
      { after: "j:aubespin_apprenti", text: "« Bien. » Il n'a marqué ni surprise ni joie. Il ouvre un tiroir du marbre, en tire une clef de bronze, toute pareille à celle de la Foire, et la pose devant toi. « Celle-ci ouvre aussi la porte de fer. Vous serez ici après-demain, à onze heures. Vous porterez ce qu'on vous donnera à porter. » Il te regarde encore, de l'œil gris, puis de l'œil brun. « Vous acceptez vite, pour quelqu'un qui compte les cuves. Je me suis demandé si vous veniez m'aider ou me surveiller. J'ai conclu que cela revenait au même : dans les deux cas, vous serez derrière moi, et j'aime savoir qui j'ai dans le dos. »" },
      { after: "j:aubespin_apprenti", text: "Tu prends la clef. Elle est tiède : il la portait sur lui." },
      { after: "j:aubespin_refuse", text: "Il incline la tête, de son inclinaison exacte. « C'est une objection de moraliste. Je la respecte : j'ai été élevé par un homme qui n'en avait pas d'autre. » Il remet la cloche d'aplomb, du bout du doigt, d'un demi-cheveu. « Il vous dira que nul ne doit tenir. Demandez-lui donc pourquoi il garde, depuis quarante ans, la clef d'une chose qu'il ne faut pas toucher. On ne garde pas ce qu'on méprise. Il en a envie, comme moi. Il a seulement eu la chance d'avoir peur. »" },
      { after: "j:aubespin_refuse", text: "« Vous sortirez par où vous êtes entré{e}. Je ne vous ferai pas arrêter : je n'en ai pas le goût, et vous m'intéressez davantage en liberté. » À la porte, il ajoute, sans se retourner : « Après-demain, tenez-vous loin de la Tour. C'est un conseil. Je n'en donne pas souvent : ils ne me coûtent rien, et je me méfie de ce qui ne coûte rien. »" },
    ],
    choices: [{ label: "Retraverser l'atelier, entre les neuf dos", fx: { item: "clef_tour" }, hide: { not: { has: "j:aubespin_apprenti" } }, to: "K10j_aubespin_porte" },
      { label: "Retraverser l'atelier, entre les neuf dos", hide: { has: "j:aubespin_apprenti" }, to: "K10j_aubespin_porte" }] },

  // ---------- the Jurés ----------
  K10j_rouet: { act: "III", title: "De combien est le nombre", place: "guilde", ambiance: "chateau",
    text: [
      "Maître Rouet traverse la cour comme un navire marchand traverse une rade : avec lenteur, avec majesté, et en soufflant. Il te voit. Il change de cap sans en avoir l'air, et vous vous trouvez, par hasard, derrière un pilier.",
      { after: "j:rouet_averti", text: "« Jeune personne. Vous ne m'avez rien dit sur le coche, et je n'ai rien entendu. » Sa voix aimable est la même ; il a seulement les yeux plus petits. « Depuis, je me suis promené. J'ai regardé le registre du sceau, qui est public pour un Juré. Le quinze : deux noms. Balancourt, et un autre. J'ai trouvé cela instructif. »" },
      { before: "j:rouet_averti", text: "« Jeune personne du coche. Vous voilà sur la colline. On monte vite, de nos jours. » Sa voix est aimable. « Vous m'avez demandé ce qu'on votait. Je vais vous rendre un service que vous n'avez pas demandé : je vais vous dire comment. »" },
      "Il compte sur ses doigts, qui sont courts et bien soignés. « Aubespin : pour. Cliquet : pour, il respire par lui. Balancourt : pour, il a ses raisons dans un tiroir. Lunel : il votera comme le dernier qui aura parlé, et le règlement veut que le rapporteur parle le dernier ; le rapporteur est Aubespin. Foliot : avec le nombre. Moi... » Il se regarde l'ongle. « Coudrier : contre. Seul. »",
      { if: PREUVE, text: "Tu lui dis, sans rien sortir, qu'il existe une lettre du duc de Hautgué, datée d'hier, où il est question de l'empêchement de la Reine, et d'un dais. Maître Rouet ne bouge pas. Puis son triple menton fait un mouvement de marée." },
      { if: PREUVE, text: "« L'empêchement. » Il a très bien entendu. « Jeune personne, j'ai trois maisons sur la place du Palais. Elles sont louées à la Maison de la Reine, sur bail de neuf ans, et la Reine paie à la Saint-Jean, rubis sur l'ongle. Un régent paie quand il veut, à qui il veut, et il a ses propres amis à loger. » Il tire son mouchoir. « On m'avait présenté une expérience de physique. Vous me décrivez un changement de locataire. Ce n'est plus du tout la même question. »" },
      { if: { not: PREUVE }, text: "« Voilà le nombre. Il est de six. Je n'ai aucune raison de ne pas en être. Si vous m'en trouvez une, d'ici demain, une raison solide, de celles qui se chiffrent, vous savez où je dîne. »" },
    ],
    choices: [
      { label: "« Alors votez pour votre locataire. »", hide: { not: PREUVE }, fx: { sway: { suspension: { rouet: "contre" } }, sound: { suspension: true }, flag: "j:voix_rouet", ep: ["histoire", 500] }, to: "K10j_cour" },
      { label: "Le remercier du compte", hide: PREUVE, fx: { sound: { suspension: true } }, to: "K10j_cour" },
    ] },

  K10j_lunel: { act: "III", title: "Le doyen", backName: "la fenêtre de maître Lunel", place: "guilde", ambiance: "chateau", fx: { meet: "lunel" },
    text: [
      { first: true, text: "Maître Lunel a quatre-vingt-huit ans, un bonnet de velours, une couverture sur les genoux, et il prend le soleil à sa fenêtre avec l'application d'un homme à qui l'on en a compté les heures. Trois apprentis se relaient pour lui faire la lecture. Il s'endort à la deuxième page et se réveille quand on s'arrête." },
      { first: true, text: "Il est doyen des Jurés depuis vingt ans. Il a été un grand horloger : on montre encore, dans la grande salle, une montre à répétition qu'il a faite à trente ans et que personne n'a su copier. Il vote, dit-on, avec le dernier qui lui a parlé. Les mauvaises langues ajoutent qu'il faut lui parler de près." },
      { first: true, text: "L'apprenti de service te fait signe que tu peux. Le vieillard ouvre un œil, très bleu, et te considère avec bienveillance. « Vous êtes le petit Foliot ? Non. Vous êtes trop maigre. Qui êtes-vous ? Cela ne fait rien. Asseyez-vous dans le soleil. »" },
      { again: true, before: "j:lunel_481", text: "Maître Lunel, à sa fenêtre. Il a oublié qui tu es, et il est content de te revoir." },
      { again: true, after: "j:lunel_481", text: "Maître Lunel, à sa fenêtre. Il regarde sa manchette, de temps en temps, et remue les lèvres." },
    ],
    choices: [
      { label: "« Maître. Vous étiez à la Guilde, en 481 ? »", hide: { any: [{ not: { any: [{ has: "j:sait_cire" }, { seen: "K07j_interdit" }] } }, { has: "j:lunel_481" }] }, fx: { flag: "j:lunel_481", ep: ["histoire", 500] }, to: "K10j_lunel_481" },
      { label: "Lui demander ce qu'il pense du vote", hide: { seen: "K10j_lunel_vote" }, to: "K10j_lunel_vote" },
      { back: "K10j_cour" },
    ] },

  K10j_lunel_vote: { act: "III", title: "Le dernier qui a parlé", place: "guilde", ambiance: "chateau",
    text: [
      "« Le vote. » Il cherche. « On vote une cloche de verre. Le petit Melchior m'a expliqué cela mardi, très bien, avec un dessin. C'est pour la petite princesse. C'est une bonne action. Je suis pour. »",
      "Il ferme l'œil. Il le rouvre. « Barnabé est venu mercredi. Il m'a lu une page. Il lit bien, Barnabé, il a une voix de chantre. Il dit que le Livre le défend. Le Livre est le Livre. Je suis contre. »",
      "L'apprenti de service, derrière lui, lève les yeux au plafond.",
      "« Voyez-vous, dit maître Lunel avec douceur, à mon âge on a entendu tant de gens avoir raison, les uns après les autres, que l'on ne sait plus où donner de la tête. Alors je donne raison au dernier. C'est le seul dont je me souvienne. »",
    ],
    choices: [{ label: "Le laisser à son soleil", fx: { sound: { suspension: ["lunel"] } }, to: "K10j_lunel" }] },

  K10j_lunel_481: { act: "III", title: "Trois psaumes", place: "guilde", ambiance: "chateau",
    text: [
      "L'œil bleu s'ouvre tout grand. Quelque chose y vient, de très loin, comme une barque sort du brouillard.",
      "« 481. » La voix n'est plus la même. Elle a soixante ans de moins. « J'avais vingt-huit ans. J'étais second chez le Grand Maître Évrard. Un Foliot. Un homme magnifique. Il a voulu voir. Il est descendu un jour de none, sans rien dire au Conseil, avec son sonneur. Il a tenu la barre entre le troisième coup et le quatrième. »",
      "Il a pris ton poignet. Sa main est légère et froide. « Je traversais cette cour. Là, où vous voyez le cadran. J'avais sous le bras un mouvement, pour le porter au doreur. J'ai fait un pas. Et le pas d'après, le soleil avait tourné. L'ombre du style était sur le cinq. Elle était sur le trois quand j'avais levé le pied. »",
      "« Je n'ai rien senti. Personne n'a rien senti. Mais j'avais une femme. Elle était en couches, rue des Gantiers, depuis le matin. La sage-femme lui tenait la main, et elles ont entendu sonner none, toutes les deux, par la fenêtre. » Il se tait. Sa bouche tremble. « L'enfant venait. Il était à moitié venu. On les a tenus là trois psaumes, la mère, la sage-femme, et lui, entre deux coups. Quand le quatrième a sonné, la sage-femme a fini son geste. Il était trop tard de trois psaumes. Il était bleu. »",
      "« On a déposé Évrard. On a dit aux gens que l'horloge avait eu une panne. On m'a fait Juré l'année suivante, pour que je me taise, et je me suis tu. » L'œil bleu te cherche. « Le petit Melchior dit : une chambre. Évrard aussi disait : un instant. Qu'est-ce qu'il y a dans cette chambre ? Qui est-ce qui sera à moitié venu, cette fois ? »",
      "Sa main retombe. Le brouillard revient, tu le vois revenir. « Il faut que je m'en souvienne demain. Je ne m'en souviendrai pas. Je ne me souviens que du dernier. »",
    ],
    choices: [
      { label: "Écrire *481* sur sa manchette, à l'encre, en gros", fx: { sway: { suspension: { lunel: "contre" } }, flag: "j:voix_lunel", ep: ["perso", 500] }, to: "K10j_lunel" },
      { label: "Lui promettre d'être le dernier à lui parler, demain", fx: { flag: "j:lunel_promis" }, to: "K10j_lunel" },
    ] },

  K10j_cliquet: { act: "III", title: "Une cale de bronze", backName: "l'atelier de maître Cliquet", place: "guilde", ambiance: "chateau", fx: { meet: "cliquet" },
    text: [
      { first: true, text: "L'atelier est petit, propre, plein de jour. Un homme de vingt-six ans, en bras de chemise, lime à l'étau, penché, la langue entre les dents. C'est maître Cliquet, le plus jeune Juré qu'on ait fait depuis un siècle. Il doit sa chaîne au sous-maître, qui l'a proposé, soutenu, et fait élire ; il le sait, il le dit, et il lime pour lui avec une ferveur de converti." },
      { first: true, text: "Ce qu'il lime est un bloc de bronze, long comme la main, taillé en coin : épais d'un pouce à un bout, d'une ligne à l'autre. Les deux faces sont dressées au marbre. Sur l'une, il achève une rainure. À côté de l'étau, un dessin, coté, d'une écriture où les *d* penchent en arrière." },
      { first: true, text: "« Vous regardez mon ouvrage ? » Il est content qu'on regarde. « C'est une pièce pour monsieur le sous-maître. Je ne sais pas à quoi elle sert : il ne me l'a pas dit, et je ne l'ai pas demandé. Il m'a donné les cotes à un cheveu. Regardez cette pente. Un en douze, tout du long. C'est très beau, une pente juste. »" },
      { first: true, text: "Tu regardes la pente. Un coin de bronze, dressé au cheveu, avec une rainure pour qu'il ne glisse pas. On chasse cela sous une barre, d'un coup de maillet, et la barre ne redescend plus." },
      { first: true, after: "j:oui_marche", text: "*J'ai de quoi le caler.* Elle est là, sa cale. Elle a encore de la limaille dans sa rainure, et c'est un Juré qui la lui fait, en tirant la langue." },
      { again: true, text: "Maître Cliquet, son étau, son coin de bronze. Il vérifie la pente au marbre." },
    ],
    choices: [
      { label: "« Maître. Une rose sous une cloche, on la retient avec une pincée. À quoi sert un coin ? »", hide: { seen: "K10j_cliquet_fin" }, test: { dom: "savoir", diff: 5, label: "Faire voir à un Juré ce qu'il lime", help: [{ if: { voie: "rouage" }, v: 15 }, { if: { has: "j:oui_marche" }, v: 15 }, { if: { has: "j:vu_maquette" }, v: 10 }, { if: { has: "j:assaut_gagne" }, v: 5 }] },
        win: { fx: { sway: { suspension: { cliquet: "indecis" } }, flag: ["j:vu_cale", "j:voix_cliquet"], ep: ["histoire", 500] }, to: "K10j_cliquet_fin" }, lose: { fx: { flag: "j:vu_cale" }, to: "K10j_cliquet_fin" } },
      { back: "K10j_cour" },
    ] },

  K10j_cliquet_fin: { act: "III", title: "Un en douze", place: "guilde", ambiance: "chateau",
    text: [
      { outcome: "win", text: "Tu prends le dessin. Tu lui montres la rainure : une rainure d'arrêt, comme on en met aux clavettes. Tu lui montres la pente. Tu lui demandes ce qu'on fait, dans son métier, d'un coin au douzième, dressé au marbre, en bronze dur." },
      { outcome: "win", text: "« On bloque. » Il a répondu en ouvrier, sans réfléchir. Puis il réfléchit, et tu vois la chose lui venir, par degrés, en commençant par les oreilles. « On bloque une pièce qui a du rappel. Un levier. Pour qu'il tienne sans la main. » Il regarde son étau. « Il m'a dit que la suspension se rendait à volonté. *On lâche, et tout reprend.* Il l'a dit au Conseil. Pourquoi faire une cale, si l'on veut pouvoir lâcher ? »" },
      { outcome: "win", text: "Il a posé sa lime. Il est très jeune, tout à coup, sous sa chaîne de Juré. « Je lui dois tout. Vous le savez ? On a dû vous le dire. » Il essuie ses mains. « Je la finirai : je l'ai promise, et je ne livre pas d'ouvrage manqué. Mais demain, avant de lever la main, je lui demanderai à quoi elle sert. Devant les autres. S'il me répond, je vote. S'il me répond à côté... » Il ne finit pas. Il sait comment répond le sous-maître." },
      { outcome: "lose", text: "Tu poses ta question. Maître Cliquet rit, gentiment. « Vous êtes des champs. Chez monsieur le sous-maître, on ne demande pas à quoi sert une pièce : on la fait juste, et elle sert. Il a tout le plan dans la tête. Nous, nous avons les cotes. » Il reprend sa lime. « C'est un grand repos, croyez-moi, de travailler pour quelqu'un qui sait. »" },
      { outcome: "lose", text: "Tu regardes une dernière fois le coin de bronze. Tu en sais, toi, l'usage. Lui le saura après-demain, à midi, avec tout le monde." },
    ],
    choices: [{ back: "K10j_cliquet" }] },

  K10j_tresor: { act: "III", title: "Trésor et Sceau", backName: "le bureau du trésorier", place: "guilde", ambiance: "chateau", fx: { meet: "balancourt" },
    text: [
      { first: true, text: "Une pièce basse, grillée, où il fait frais en juin. Quatre commis à quatre pupitres. Au fond, derrière une balustrade, un homme sec, jaune, en habit noir, à la chaîne de Juré, qui additionne. Maître Balancourt a la figure d'un homme qui a longtemps eu peur d'un chiffre, et qui en a été délivré par quelqu'un." },
      { first: true, text: "Contre le mur, un coffre de fer à trois serrures. Dessus, sur un pupitre à chaîne, un registre in-folio, ouvert, où quiconque est de la maison peut lire : c'est le journal du sceau. La Guilde tient à ce qu'on sache quand elle a scellé, et qui a tourné les clefs. Elle a quatre cents ans de journaux, et pas un faux. C'est du moins ce qui est gravé au-dessus de la porte." },
      { again: true, text: "Les quatre pupitres, le coffre à trois serrures, le journal du sceau sur son pupitre à chaîne." },
      { first: true, if: { not: { any: [CLEF, JOSQ, { has: "j:aubespin_apprenti" }] } }, text: "Un commis lève le nez. « On n'entre pas sans clef. » Il se rassoit : tu as l'air trop pauvre pour être un voleur d'importance. Du seuil, on voit le registre, et l'on ne peut pas le lire." },
    ],
    choices: [
      { label: "Lire le journal du sceau, à la date du quinze", hide: { any: [{ has: "j:lu_sceau" }, { not: { any: [CLEF, JOSQ, { has: "j:aubespin_apprenti" }] } }] }, fx: { flag: "j:lu_sceau", ep: ["histoire", 400] }, to: "K10j_sceau" },
      { label: "Maître Balancourt, derrière sa balustrade", hide: { any: [{ seen: "K10j_balancourt" }, { not: { has: "j:lu_sceau" } }] }, to: "K10j_balancourt" },
      { back: "K10j_cour" },
    ] },

  K10j_sceau: { act: "III", title: "Le journal du sceau", place: "guilde", ambiance: "chateau",
    text: [
      "Les pages sont réglées en quatre colonnes : le jour, l'objet, la première clef, la seconde. Juin tient en neuf lignes. La Guilde scelle peu.",
      "*Le 3. Brevet de maîtrise du sieur Hanoteau. Coudrier. Balancourt.*",
      "*Le 9. Quittance à Monseigneur de Hautgué, pour quarante mille écus, en extinction des dettes de la maison. Balancourt. Aubespin.*",
      "*Le 15. Lettre aux Dames de Sainte-Aure. Balancourt. Aubespin.*",
      "Tu relis la ligne du quinze. *Lettre aux Dames de Sainte-Aure.* On n'a pas même pris la peine de mentir sur l'objet. Deux clefs, deux noms, la colonne remplie : la chose est en règle. Il y manque seulement que la lettre était signée d'un troisième, qui n'a pas tourné la sienne.",
      "Et la ligne du neuf, au-dessus. Quarante mille écus. Le duc a payé les dettes de la Guilde douze jours avant la fête ; et depuis ce jour-là, le trésorier tourne sa clef avec le sous-maître.",
      { with: "josquin", text: "Josquin lit par-dessus ton bras. Il devient très rouge. « C'est écrit. C'est écrit dans le journal, sous le nez de toute la maison, depuis quatre jours. » Sa voix monte. « Personne ne lit le journal. On est si sûr qu'il est honnête qu'on ne le lit plus. »" },
    ],
    choices: [{ back: "K10j_tresor" }] },

  K10j_balancourt: { act: "III", title: "Un homme délivré d'un chiffre", place: "guilde", ambiance: "chateau",
    text: [
      "Il te reçoit debout, la plume à la main, en homme pressé. De près, il sent l'encre et la pastille de réglisse.",
      "« Le quinze ? » Il ne feint pas de chercher. « Une lettre pour l'abbaye. Monsieur le sous-maître me l'a présentée fermée : il s'agissait de faire venir le Livre à Méridane, pour la séance. Chose naturelle. J'ai tourné ma clef. Je la tourne pour toutes les pièces qu'un Juré me présente ; je suis trésorier, non pas censeur. »",
      "Tu dis qu'elle portait la signature du Grand Maître.",
      "La plume s'arrête. Il met un temps à répondre, et dans ce temps tu vois passer, sur sa figure jaune, l'ancien chiffre : celui dont on l'a délivré. « Je n'ai pas lu la signature. On ne lit pas une lettre scellée. » Sa voix s'est durcie. « Écoutez-moi, jeune personne. Cette maison devait quarante mille écus, depuis onze ans, à des gens qui parlaient de saisir la colline. Je n'en dormais plus. Monseigneur de Hautgué a payé, d'un trait de plume, sans rien demander. Rien. Il a dit seulement qu'il aimait les horloges. »",
      "« Depuis, je dors. » Il te regarde bien en face. « Vous venez me dire que j'ai signé un faux. C'est possible. Je vous réponds que je voterai demain pour l'homme grâce à qui les huissiers ne sont pas dans cette cour. Si c'est un crime, il est inscrit au journal, à sa date, avec mon nom. Je n'ai jamais rien fait qui n'y soit. »",
      "Il se rassoit. Il reprend son addition où il l'avait laissée. On ne le fera pas changer d'avis : c'est un honnête homme qu'on a acheté sans le lui dire, et il défendra son prix comme il défendrait sa vertu.",
    ],
    choices: [{ label: "Le laisser à sa colonne", fx: { sound: { suspension: ["balancourt"] } }, to: "K10j_tresor" }] },

  // ---------- the great hall ----------
  K10j_grande_salle: { act: "III", title: "La grande salle", backName: "la grande salle", place: "guilde", ambiance: "chateau",
    text: [
      { first: true, text: "C'est là qu'on vote. Une nef de bois sombre, longue de quarante pas, à charpente apparente. Au fond, sur une estrade, une table en fer à cheval, sept fauteuils, celui du milieu plus haut d'un dossier. Devant, des bancs pour les maîtres de la ville, qui ont le droit d'écouter et le devoir de se taire." },
      { first: true, text: "Aux murs, les Grands Maîtres. Quarante et un portraits, depuis les Fondateurs, peints sur le même fond brun, avec la même chaîne. Ils ont l'air de s'être beaucoup ennuyés. Le trente-septième est retourné contre le mur : on voit le châssis, la toile nue, et une étiquette." },
      { first: true, text: "Au milieu de la salle, sous une housse qu'un apprenti est en train d'ôter pour la séance de demain, il y a une chose haute de dix pieds, en bois, en laiton et en verre." },
      { again: true, text: "La nef, la table en fer à cheval, les quarante et un portraits. Au milieu, la chose de dix pieds, sans sa housse." },
    ],
    choices: [
      { label: "La chose de dix pieds", hide: { seen: "K10j_maquette" }, fx: { flag: "j:vu_maquette", ep: ["histoire", 400] }, to: "K10j_maquette" },
      { label: "Le portrait retourné", hide: { seen: "K10j_portrait" }, to: "K10j_portrait" },
      { label: "Le fauteuil du milieu", hide: { seen: "K10j_fauteuils" }, to: "K10j_fauteuils" },
      { back: "K10j_cour" },
    ] },

  K10j_maquette: { act: "III", title: "La Tour, coupée en deux", place: "guilde", ambiance: "chateau",
    text: [
      "C'est la Tour. Elle est à l'échelle d'un pouce pour une toise, et on l'a fendue du haut en bas, comme un fruit, pour montrer le dedans. Les Fondateurs l'ont faite pour enseigner ; on l'ôte de sa housse aux grandes séances, afin que les Jurés sachent de quoi ils parlent.",
      "En haut, sous la lanterne, une chambre ronde, à huit baies : la Chambre haute. Une cloche y pend, grosse comme le poing, et de la cloche descend une corde, jusqu'à un anneau scellé dans le plancher. Il y a un petit lit, qu'on a ajouté cette année, en bois blanc, d'une autre main.",
      "Dessous, la vis de l'escalier. Tu comptes les marches de laiton, par dizaines : trois cent soixante. Quatre cadrans, à mi-hauteur, avec leurs renvois. Puis le massif des fondations, et, dedans, une salle voûtée, sans fenêtre : la Chambre basse.",
      "Tu t'accroupis. La Chambre basse a un puits au milieu, rond, sans margelle, qu'on a figuré par un tube de verre noir qui s'enfonce dans le socle. Au-dessus du puits, portée par deux chevalets, une barre de laiton, longue comme la main, qui oscille : on a mis dedans un mouvement, pour la leçon. Elle monte, elle descend, d'un battement lent. À son bout, un levier, avec une poignée faite pour une main. Et, entre la barre et la cloche, d'un bout à l'autre de la Tour, un fil de laiton tendu, fin comme un cheveu.",
      "La barre descend. Le fil tire. Là-haut, le marteau frappe la cloche, d'un tintement de verre. Tu regardes cela trois fois. Ce que le royaume appelle la Patiente est la voix d'une chose qui bat dans une cave ; et le levier est fait pour qu'on puisse, d'une seule main, empêcher la barre de remonter.",
      "Deux portes donnent sur la Chambre basse. L'une, de fer, s'ouvre dehors, sous le grand cadran, au bout d'un escalier sans rampe. L'autre est une grille, au fond, sur un boyau qui sort du socle de la maquette et qu'on a scié net, au bord, avec une étiquette : *Vers Saint-Gnomon. Condamné.*",
      { after: "j:sait_dessous", text: "Le Droit. *Un pas. Un seul. Très lourd. Et puis rien, le temps de compter quatre.* Tu regardes la petite barre de laiton monter et descendre. Tu comptes. Quatre." },
      { after: "monde:su:deux", text: "*UN EN HAUT, À LA CORDE. UN EN BAS, AU LEVIER. 360 MARCHES ENTRE LES DEUX.* Les voilà toutes les deux, la corde et la poignée, à dix pieds l'une de l'autre, dans une boîte. Tu pourrais les toucher ensemble en écartant les bras. Il n'y a qu'ici qu'on le peut." },
    ],
    choices: [{ back: "K10j_grande_salle" }] },

  K10j_portrait: { act: "III", title: "Le trente-septième", place: "guilde", ambiance: "chateau",
    text: [
      "L'étiquette, collée au châssis, dit : *Évrard Foliot, Grand Maître de 466 à 481. Déposé.* On ne l'a pas décroché. On l'a retourné : la Guilde n'efface rien, elle met au coin.",
      "Tu regardes autour de toi. L'apprenti a le dos tourné. Tu écartes le cadre du mur, de deux doigts, et tu passes la tête.",
      "C'est un homme de cinquante ans, large, sanguin, magnifique, la main posée sur un globe. Il rit. C'est le seul des quarante et un qui rie. Le peintre lui a mis dans l'œil une lueur de gourmandise, celle d'un enfant devant une porte qu'on lui a défendue. Il a, à la mâchoire, quelque chose d'Aymon.",
      "En bas de la toile, dans le coin, d'une petite écriture qui n'est pas du peintre : *Il a voulu voir. B. C., 524.* Barnabé Coudrier, l'année où on l'a fait Grand Maître, est venu écrire cela sur l'envers de son prédécesseur, tout seul, un soir. Il n'a pas écrit : *il a eu tort.*",
    ],
    choices: [{ back: "K10j_grande_salle" }] },

  K10j_fauteuils: { act: "III", title: "Sept fauteuils", place: "guilde", ambiance: "chateau",
    text: [
      "Tu montes sur l'estrade. Les sept fauteuils ont chacun leur nom, sur une plaque d'émail, et leur usure.",
      "Celui du milieu est en chêne nu, sans coussin. Les accoudoirs sont creusés par de grosses mains. À sa droite, le fauteuil du sous-maître : le cuir en est neuf, et l'on a posé devant, sur la table, un rouleau de dessins et une carafe. À sa gauche, le doyen : un coussin, une chaufferette, un petit pupitre pour appuyer le menton.",
      "Aux bouts du fer à cheval, face à face, Foliot et Rouet. La place de Foliot est celle d'où l'on voit toutes les mains se lever avant la sienne. Tu ne sais si c'est le hasard ou trois générations de prudence.",
      "Sur la table, devant le fauteuil du milieu, une petite sonnette, un sablier blond, et l'ordre du jour, d'une belle main de commis. *Séance du vingt de juin. Un seul objet : la suspension dite de la Chambre haute, sur le rapport de M. le sous-maître. M. le Grand Maître entendu. Les sept opineront à main levée, dans l'ordre des sièges, le rapporteur le dernier.*",
      "Le vingt. Demain. Tout le monde, dans la ville, croit qu'on vote le jour de la fête. La colline votera la veille, portes closes, et l'on annoncera la chose faite au son des cloches.",
    ],
    choices: [{ label: "Quitter l'estrade avant qu'on te voie", fx: { flag: "j:sait_seance" }, to: "K10j_grande_salle" }] },

  // ---------- noon ----------
  K10j_midi: { act: "III", title: "Midi, sous la paroi", place: "guilde", ambiance: "chateau",
    text: [
      "Tu t'assois sur la marche du cadran solaire. L'ombre du style est un trait fin, noir, qui rampe vers le douze. La cour s'est vidée : c'est l'heure, et les gens de la maison ont une façon à eux de l'attendre, qui est de ne pas lever la tête. Ils savent.",
      "L'ombre touche le chiffre.",
      "Tu as entendu la Patiente à une lieue, dans la paille de la Foire. Tu l'as entendue hier dans les murs, la main à plat sur la poitrine. Ici, à vingt toises, sous les abat-son, on ne peut plus dire qu'on l'entend. Le premier coup te prend par les os. Les dalles de la cour le rendent, les arcades le rendent, les vitres de l'atelier au papillon se mettent à chanter toutes ensemble ; et un pigeon, sur l'épaule d'un homme de cuivre, s'envole et se repose, comme il fait tous les jours.",
      "Entre deux coups, tu écoutes. Maintenant que tu sais, tu l'entends : sous la cloche, sous le pavé, dans le ventre de la colline, quelque chose descend, et tire. Le coup n'est que la fin d'un geste qui commence beaucoup plus bas.",
      "Douze. L'ombre du style a déjà quitté le chiffre, d'un cheveu. Le cadran solaire n'attend personne.",
      { with: "josquin", text: "Josquin s'est assis à côté de toi sans rien dire. Au douzième, il a remué les lèvres. « Je les compte depuis que j'ai trois ans, dit-il. On m'a trouvé dans un panier, là, au portail, un matin de Grand Midi. On me l'a raconté si souvent que je crois m'en souvenir. Le sous-maître aussi, trente ans avant moi. Nous sommes deux enfants de la même porte. » Il essuie ses besicles. « Je me demande souvent pourquoi cela n'a pas donné le même homme. »" },
      "Tu ouvres le Cahier contre le marbre tiède, à l'endroit où l'on a gravé *POUR MÉMOIRE.*",
    ],
    choices: [
      { label: "Écrire", hide: { not: { has: "monde:combinaison" } }, fx: { flag: "monde:combinaison_midi" }, to: "M10", big: true },
      { label: "Écrire", hide: { has: "monde:combinaison" }, to: "M10", big: true },
    ] },
});

module.exports = {
  passages: P,
  extras: {
    people: {
      coudrier: { name: "Maître Coudrier", f: false, aka: ["maître Coudrier", "Coudrier", "le Grand Maître", "Barnabé Coudrier"], face: { age: "ancien", skin: "clair", hair: "blanc", coif: "degarni", beard: "sans", eyes: "lourds", iris: "gris", nose: "busque", lips: "fines", shape: "allonge" },
        aspect: { allure: "grand vieillard sec et voûté", habits: "une houppelande brune usée aux coudes", signe: "des mains de forgeron" }, qui: "Grand Maître des Horlogers-Jurés.", desc: "Grand Maître des Horlogers-Jurés depuis 524. Une figure de porte fermée. Il dit non à tout, et il garde depuis quarante ans la clef d'une chose qu'on ne doit pas toucher." },
      lunel: { name: "Maître Lunel", f: false, aka: ["maître Lunel", "Lunel", "le doyen"], face: { age: "ancien", skin: "clair", hair: "blanc", coif: "degarni", beard: "sans", eyes: "tombants", iris: "clair", nose: "fin", lips: "fines", shape: "ovale" },
        aspect: { allure: "quatre-vingt-huit ans, tout petit", habits: "un bonnet de velours, une couverture", signe: "prend le soleil les yeux fermés" }, qui: "Doyen des Jurés.", desc: "Doyen des Jurés. Il a été un grand horloger. Il donne raison au dernier qui lui a parlé : c'est le seul dont il se souvienne." },
      cliquet: { name: "Maître Cliquet", f: false, aka: ["maître Cliquet", "Cliquet"], face: { age: "jeune", skin: "clair", hair: "chatain", coif: "court", beard: "sans", eyes: "ronds", iris: "noisette", nose: "retrousse", lips: "pleines", shape: "rond" },
        aspect: { allure: "vingt-six ans, en bras de chemise", habits: "une chaîne de Juré toute neuve", signe: "lime la langue entre les dents" }, qui: "Le plus jeune des Jurés.", desc: "Le plus jeune des Jurés. Il doit sa chaîne au sous-maître, et lime pour lui des pièces dont il ne demande pas l'usage." },
      balancourt: { name: "Maître Balancourt", f: false, aka: ["maître Balancourt", "Balancourt", "le trésorier"], face: { age: "mur", skin: "clair", hair: "gris", coif: "court", beard: "sans", eyes: "lourds", iris: "brun", nose: "fin", lips: "fines", shape: "allonge" },
        aspect: { allure: "sec, jaune, toujours debout", habits: "un habit noir, une plume à la main", signe: "sent l'encre et la réglisse" }, qui: "Trésorier de la Guilde, Juré.", desc: "Trésorier de la Guilde. Il a eu peur onze ans d'un chiffre de quarante mille écus. Le duc de Hautgué l'en a délivré." },
      foliot: { name: "Maître Foliot", f: false, aka: ["maître Foliot", "Foliot"], face: { age: "mur", skin: "clair", hair: "chatain", coif: "court", beard: "sans", eyes: "amande", iris: "noisette", nose: "fin", lips: "fines", shape: "carre" },
        aspect: { allure: "un homme moyen en tout", habits: "du drap gris, sans un bijou", signe: "regarde les autres mains avant la sienne" }, qui: "Juré, oncle d'Aymon.", desc: "Juré. Petit-neveu du Grand Maître Évrard, déposé en 481. Depuis, les Foliot votent avec le nombre." },
      baudouin: { name: "Baudouin Passavant", f: false, aka: ["Baudouin", "le grand Baudouin"], face: { age: "jeune", skin: "clair", hair: "blond", coif: "milong", beard: "sans", eyes: "amande", iris: "clair", nose: "fin", lips: "pleines", shape: "carre" },
        aspect: { allure: "dix-huit ans, large, bien peigné", habits: "un tablier porté comme un habit", signe: "une allonge de faucheur" }, qui: "Premier apprenti du sous-maître.", desc: "Premier apprenti du sous-maître. Second à la Foire il y a deux ans. Il tire bien, et il le sait." },
    },
    items: {
      clef_tour: { name: "Clef de bronze du sous-maître", kind: "divers", keep: true, desc: "Une clef de bronze, pareille à celle des apprentis, avec un papillon dans l'anneau. Elle ouvre aussi la porte de fer de la Tour. Il la portait sur lui." },
    },
    councils: {
      jures: { title: "Le Conseil des sept Jurés", hero: false, order: ["coudrier", "lunel", "foliot", "rouet", "balancourt", "cliquet", "aubespin"],
        members: { coudrier: {}, lunel: {}, foliot: {}, rouet: {}, balancourt: {}, cliquet: {}, aubespin: {} } },
    },
    motions: {
      suspension: { council: "jures", title: "La suspension de la Chambre haute", shown: { has: "j:sait_vote" },
        text: "Le greffier lit : « Qu'il soit permis à monsieur le sous-maître de suspendre le cours de l'heure dans la seule Chambre haute de la Tour, pour le temps que requerra la santé de Madame Aélis, et de l'y rendre ensuite. »",
        lean: { coudrier: "contre", lunel: "pour", foliot: "pour", rouet: "pour", balancourt: "pour", cliquet: "pour", aubespin: "pour" },
        say: {
          coudrier: { contre: "Le Balancier bat pour tous, et nul ne le tiendra. J'ai dit.", pour: "Soit." },
          lunel: { pour: "Le petit Melchior m'a très bien expliqué. C'est une bonne action.", contre: "Quatre cent quatre-vingt-un. J'avais une femme, messieurs. Contre." },
          foliot: { pour: "Je me range au sentiment de la compagnie.", contre: "Je me range au sentiment de la compagnie, puisqu'il a changé." },
          rouet: { pour: "La Reine le demande. Pour.", contre: "J'ai relu mes baux. Contre." },
          balancourt: { pour: "La maison a des obligations. Pour.", contre: "Contre.", abstention: "Je m'abstiens. Qu'on l'inscrive au journal." },
          cliquet: { pour: "Je fais confiance au rapporteur.", contre: "On m'a répondu à côté. Contre.", abstention: "Je ne sais plus ce que j'ai limé. Je m'abstiens." },
          aubespin: { pour: "Pour. On n'attendait pas autre chose de moi." },
        },
        fx: { adopte: { flag: "j:vote_adopte" }, rejete: { flag: ["j:vote_rejete", "monde:vote_interdit"] } } },
    },
    duels: {
      d_apprentis: { title: "L'assaut de la veille", foe: "baudouin", rule: "Trois touches à la baguette de buis, dans la cour, devant les apprentis des sept ateliers.",
        touches: 3, dom: "combat", skill: 5,
        intro: "On a fait cercle autour du cadran solaire. Baudouin Passavant prend sa garde comme on la prend dans les salles : le poing haut, la pointe basse, sans un pli à son tablier. Il te laisse le soleil dans l'œil, par politesse de fort.",
        style: { attaque: 2, parade: 1, feinte: 2 },
        tells: {
          attaque: ["Baudouin rassemble ses talons, d'un petit coup sec.", "Il baisse le menton et ne sourit plus."],
          parade: ["Baudouin ouvre un peu la main, la baguette en travers, et attend."],
          feinte: ["Baudouin regarde ton coude, et son poignet tourne.", "Il a un demi-sourire, pour la galerie."],
        },
        win: { to: "K10j_assaut_gagne", fx: { flag: "j:assaut_gagne", ep: ["seance", 700], conf: { josquin: 10 } } },
        lose: { to: "K10j_assaut_perdu", fx: { pv: -2, ep: ["seance", 300] } } },
    },
  },
};
