// Maëlle, the scenes added around her first roads: the place du Lavoir, the tanneries, the cross of the drowned, the
// cabin seen from outside (all reachable in the first game, they lead to the same two endings), then the roads that open
// later: Nine's word on the bridge, the carter of the forges, the rider of the guard, the gallery and the pointeau.
var A = "I";
module.exports = {
  // ------------------------------------------------------------------ the place du Lavoir
  M_lavoir: { act: A, title: "La place du Lavoir", place: "foulons", fx: { flag: "lavoir:vu", time: 0.25 },
    text: [
      "La place du Lavoir est un carré de pavés autour d'un grand bassin couvert d'un toit de tuiles. Sous le toit, trois lanternes pendent aux poutres. Quatre lavandières finissent la lessive de l'hospice, à genoux sur les pierres inclinées, les bras rouges jusqu'aux coudes.",
      "Au pilier du milieu pend la cloche du lavoir, une petite cloche de bronze verdi. On la sonne le lundi à l'aube pour la grande lessive, et quand un enfant tombe à l'eau.",
      "Une jeune femme essore un drap avec une autre, chacune à un bout, en tournant en sens contraire. Elle a le ventre rond sous son tablier. C'est Nine Brasseur. Sur le banc, la vieille Margot plie les draps secs et compte tout haut.",
      "L'eau du bassin est plus haute que d'habitude. Elle déborde par la goulotte et file sur les pavés en un ruisseau qui rejoint la rigole des teinturiers.",
    ],
    choices: [
      { label: "Dire bonsoir à Nine", hide: { has: "nine:vue" }, to: "M_lavoir_nine" },
      { label: "Demander à la vieille Margot comment est la berge des Aulnes", hide: { has: "margot:conseil" }, to: "M_lavoir_margot" },
      { label: "Repartir", back: "M_rue" },
    ] },
  M_lavoir_nine: { act: A, title: "Nine", place: "foulons", fx: { flag: "nine:vue" },
    text: [
      "Nine lâche son bout de drap et se redresse, une main dans le creux des reins. Vous avez joué ensemble aux osselets sur ces mêmes pavés, à sept ans.",
      "« Maëlle ! Tu cours encore à cette heure ? » Elle regarde ton paquet. « C'est lourd, ça. On dirait que tu portes une enclume. »",
      "Elle rit. Puis elle baisse la voix. « Mon père est de garde sur le pont, cette nuit. Il est passé me voir à huit heures, en grand manteau. Il m'a embrassée sur le front, comme quand j'avais six ans. Il fait ça quand il a des ordres qui ne lui plaisent pas. »",
      "Elle reprend son bout de drap. « Si tu passes le pont, dis-lui que Nine l'embrasse. Il grognera. Il aime ça. »",
    ],
    choices: [{ label: "Lui promettre de faire la commission", back: "M_lavoir" }] },
  M_lavoir_margot: { act: A, title: "La vieille Margot", place: "foulons", fx: { flag: "margot:conseil" },
    text: [
      "Margot a lavé le linge des Foulons pendant cinquante ans. Ses mains sont deux racines. Elle t'écoute en continuant de plier.",
      "« Les Aulnes ? Par cette eau ? » Elle pose un drap carré sur la pile, lisse le pli du plat de la main. « La planche du déversoir est pourrie depuis la Saint-Jean. Mon petit-fils y est tombé. Prends le sentier du haut, derrière les tanneries, le long de la haie des Prêcheurs. Tu te mouilleras moins. »",
      "Elle lève les yeux vers le bassin qui déborde. « Mon homme gardait les vannes, avant le vieux Vellard. Il disait : quand le lavoir déborde en novembre, c'est que le lac a trop bu. Il disait aussi que la digue pleure. Il buvait, mon homme. »",
    ],
    choices: [{ label: "La remercier", back: "M_lavoir" }] },

  // ------------------------------------------------------------------ Nine's word on the bridge (later games)
  M_pont_nine: { act: A, title: "Nine l'embrasse", place: "pont", fx: { learn: "ponceau", flag: "pont:refoulee", time: 0.25 },
    text: [
      "« Nine vous embrasse, sergent. Je l'ai vue au lavoir, il y a une demi-heure. »",
      "Le sergent baisse sa lanterne. Il te regarde autrement, d'un coup : la fille qui jouait aux osselets avec la sienne. Il grogne, comme Nine l'avait dit.",
      "Il se tourne vers les deux jeunes. « Allez voir au bout du pont si j'y suis. » Ils s'éloignent en traînant les pieds.",
      "Il parle bas, sans te regarder, les yeux sur la Sorge. « Mon capitaine veut ce que tu portes. Je ne veux pas savoir ce que c'est. Je ne t'ai pas vue. Tu repars par où tu es venue. » Il tousse. « Au bout de la rue des Teinturiers, contre la culée, il y a une vieille bouche d'égout avec une grille qui tient par un gond. Quand j'avais ton âge, on passait par là pour aller voler des pommes en Haute-Ville. »",
      "Puis il relève la lanterne et dit très fort : « Allez, rentre chez toi, petite ! Il fait trop froid pour les courses ! »",
    ],
    choices: [{ label: "Redescendre vers la rue des Teinturiers", back: "M_rue" }] },

  // ------------------------------------------------------------------ the Aulnes, longer
  M_aulnes_tannerie: { act: A, title: "La cour des tanneries", place: "berge", fx: { time: 0.25 },
    text: [
      "Le sentier passe derrière les tanneries Bérard, le long d'une palissade. L'odeur te prend à la gorge : la chaux, la viande, l'écorce de chêne qui macère dans les fosses.",
      "Un chien se jette contre la palissade et aboie à pleine gorge. Une fenêtre s'allume à l'étage, puis une voix d'homme crie : « Qui va là ? »",
    ],
    choices: [
      { label: "Te coller à la palissade et attendre que le chien se taise", test: { dom: "discretion", diff: 0, label: "Rester immobile" }, win: { to: "M_aulnes_gue", via: "tannerie" }, lose: { to: "M_aulnes_tannerie_vu" } },
      { label: "Répondre : « La courrière ! »", to: "M_aulnes_tannerie_vu", via: "reponse" },
    ] },
  M_aulnes_tannerie_vu: { act: A, title: "La fenêtre des Bérard", place: "berge", fx: { flag: "maelle:vue_tannerie", time: 0.25 },
    text: [
      { via: "reponse", text: "Ta voix porte loin dans le vent. Tu le regrettes en la lâchant." },
      { if: { not: { via: "reponse" } }, text: "Le chien continue. Il te sent à travers les planches, il gratte, il gémit." },
      "Le tanneur Bérard se penche à sa fenêtre, une chandelle à la main. Il te reconnaît, et il hausse les épaules. « Tu cours les berges à cette heure ? Tu finiras dans la Sorge, ma fille. » Il referme ses volets.",
      "Tu repars. Une fenêtre s'est allumée, une voix a crié ton métier dans la nuit, et sur un sentier vide, cela s'entend de loin.",
    ],
    choices: [{ label: "Repartir", to: "M_aulnes_gue" }] },
  M_aulnes_haut: { act: A, title: "La haie des Prêcheurs", place: "berge", fx: { time: 0.5 },
    text: [
      "Tu remontes le déversoir jusqu'à la haie des Prêcheurs, comme Margot l'a dit. Derrière la haie court un sentier de vaches, plus haut que la berge, sec sous les feuilles mortes.",
      "D'en haut, tu vois la Sorge dans le noir : une bande grise et vivante qui charrie des choses. Une barrique passe en tournant sur elle-même. Puis une porte de grange entière, à plat, avec ses gonds.",
      "Le sentier redescend vers la berge après le moulin Brûlé, au-delà du déversoir. Tu as les pieds secs.",
    ],
    choices: [{ label: "Redescendre sur la berge", to: "M_aulnes_ombre", via: "haut" }] },
  M_aulnes_croix: { act: A, title: "La croix des Noyés", place: "berge", fx: { time: 0.25 },
    text: [
      "Au tournant du Grand Saule, la croix des Noyés se dresse au bord de l'eau : une croix de pierre grise, haute comme un homme, mangée de lichen. Au pied, des bouquets secs, une couronne de perles noires, un sabot d'enfant cloué sur une planchette.",
      "Sur le fût, des traits sont gravés au couteau, chacun avec une année. Le plus haut arrive à hauteur de ton épaule. À côté, quelqu'un a gravé : *l'eau est venue jusqu'ici, et elle a pris onze personnes.*",
      "La Sorge, ce soir, lèche déjà le socle.",
    ],
    choices: [
      { label: "Toucher la croix et repartir", to: "M_cabane_tard", fx: { time: 0.75 } },
    ] },

  // ------------------------------------------------------------------ the cabin from outside
  M_cabane_tour: { act: A, title: "Autour de la cabane", place: "berge", fx: { flag: "cabane:tour", time: 0.25 },
    text: [
      "Tu fais le tour de la cabane. La fenêtre de derrière a un carreau fendu, bouché avec du papier huilé. L'œil collé au coin du carreau, tu devines un poêle froid, un hamac, une table, et sur la table un grand papier déplié, tenu aux coins par quatre galets : une carte du lac, couverte de traits de crayon.",
      "Contre le mur, côté roseaux, il y a des sacs empilés sous une bâche. Tu soulèves un coin. Du sel gris, en gros cristaux, sans le plomb de l'octroi sur les sacs. Ce sel-là arrive de nuit, en barque.",
      "Derrière la cabane, à vingt pas, le mur de la digue monte dans le noir. Il en sort un bruit que tu n'avais pas entendu de devant : un gargouillement, comme une gouttière en plein orage, alors qu'il ne pleut pas encore.",
    ],
    choices: [
      { label: "Aller voir d'où vient ce bruit", if: { second: true }, to: "M_pied_mur" },
      { label: "Revenir devant la porte", back: "M_cabane_tard" },
    ] },
  M_pied_mur: { act: A, title: "Le pied du mur", place: "digue", fx: { learn: "veine_vue", time: 0.25 },
    text: [
      "Tu longes le mur à tâtons, le paquet sous le bras. La pierre est trempée, et froide comme un puits.",
      "Le bruit vient d'un joint, à hauteur de ta poitrine. Entre deux blocs, l'eau sort en un jet épais qui retombe dans le canal en gargouillant. Tu y mets la main. L'eau te cogne la paume. Quand tu la retires, tes doigts sont couverts d'un sable fin, doux comme de la farine.",
      "Tu as vu des fontaines. Une fontaine donne de l'eau claire. Ce mur rend de l'eau trouble, et avec l'eau, il rend son sable.",
    ],
    choices: [{ label: "Revenir à la cabane, les doigts pleins de sable", back: "M_cabane_tard" }] },

  // ------------------------------------------------------------------ the road of the Digue, longer
  M_route_charrette: { act: A, title: "La charrette des forges", place: "berge", fx: { time: 0.25 },
    text: [
      "À la quatrième borne, une charrette te rattrape au pas : deux mulets, un chargement de charbon de bois sous une bâche, une lanterne qui se balance au timon. Le charretier est un grand gars voûté, la figure noire, qui mâche une paille. Sur la ridelle, marqués au fer rouge, une enclume et un H.",
      "« Les forges Hesdin, dit-il en voyant ton regard. On monte le charbon de nuit, la route est à nous. Tu montes ? Tu as une tête à avoir froid. »",
    ],
    choices: [
      { label: "Monter à côté de lui", to: "M_route_basile" },
      { label: "Le remercier et continuer à pied", to: "M_route_borne" },
    ] },
  M_route_basile: { act: A, title: "Basile", place: "berge", fx: { flag: "basile:vu" },
    text: [
      "Il s'appelle Basile. Il parle pour deux, comme les gens qui roulent seuls toutes les nuits. Les mulets connaissent la route ; lui regarde le ciel.",
      "« Demain, la Dame vote, dit-il. Dame Hesdin, ma patronne. C'est elle qui fait la différence entre les drapiers et les autres. Tout le monde lui fait des cadeaux depuis huit jours. Corlay lui a envoyé un pâté gros comme une roue. » Il crache sa paille. « Elle l'a donné aux chiens. Elle dit qu'un homme qui vous fait des cadeaux, c'est qu'il vous a déjà menti, ou qu'il va le faire. Elle ne croit que ce qu'elle voit de ses yeux, la Dame. »",
      "À la neuvième borne, il arrête ses mulets. « Moi je bifurque vers les forges. Toi, tu as encore une borne. »",
    ],
    choices: [{ label: "Descendre", to: "M_route_borne", via: "basile" }] },
  M_route_borne: { act: A, title: "Un cheval sur la route", place: "berge",
    text: [
      { via: "basile", text: "La charrette s'éloigne sur la route des forges. Sa lanterne rapetisse entre les arbres." },
      "Derrière toi, sur la route, un cheval arrive au galop. Tu l'entends avant de le voir : les fers sur l'empierrement, de plus en plus fort, de plus en plus vite. Puis une lanterne sourde, qui balaie les bas-côtés en cadence.",
      "Un cavalier du guet. Il fouille les fossés des yeux, borne après borne.",
    ],
    choices: [
      { label: "Te jeter dans le fossé, sous les ronces", test: { dom: "discretion", diff: -10, label: "Se cacher" }, win: { to: "M_route_fosse" }, lose: { to: "M_route_cavalier" } },
      { label: "Continuer à marcher sans te retourner", test: { dom: "social", diff: -20, label: "Avoir l'air de rien" }, win: { to: "M_route_fosse", via: "marche" }, lose: { to: "M_route_cavalier" } },
    ] },
  M_route_fosse: { act: A, title: "Le fossé", place: "berge", fx: { time: 0.25 },
    text: [
      { if: { not: { via: "marche" } }, text: "Les ronces te déchirent les mains et les joues. L'eau du fossé te monte aux chevilles. Le cheval passe à deux mètres de ta tête, la lanterne balaie les ronces au-dessus de toi, et il passe." },
      { via: "marche", text: "Le cavalier ralentit à ta hauteur. Il lève sa lanterne. Tu tiens le paquet contre ta hanche comme un panier de linge et tu lui fais un signe de tête las. Il regarde ta figure, ton châle, tes sabots. Il repart au galop." },
      "Le bruit des fers s'éloigne vers la digue. Puis, plus loin, il s'arrête. Le cavalier attend quelqu'un, là-bas, au bout de la route.",
      "Tu repars, plus lentement, sur l'herbe du bas-côté, qui étouffe les pas.",
    ],
    choices: [{ label: "Avancer jusqu'à la dixième borne", to: "M_route_dixieme" }] },
  M_route_dixieme: { act: A, title: "La dixième borne", place: "berge", fx: { time: 0.25 },
    text: [
      "À la dixième borne, la forêt s'ouvre. La digue est devant toi, noire contre le ciel noir, avec sa petite lumière tout en haut.",
      "Le cheval du guet est attaché à la barrière du chemin de halage. Son cavalier s'est assis sur la borne, dos à toi, et il bat le briquet pour allumer sa pipe. Il garde l'entrée du chemin qui descend à la cabane.",
      "Il reste un autre chemin : le talus de ronces, à pic, qui tombe droit sur le canal de fuite.",
    ],
    choices: [
      { label: "Descendre par le talus", test: { dom: "nature", diff: -10, label: "Descendre dans le noir" }, win: { to: "M_cabane_tot", via: "talus" }, lose: { to: "M_cabane_tot", via: "chute", fx: { time: 0.25 } } },
    ] },
  M_route_cavalier: { act: A, title: "Le cavalier", place: "berge", fx: { drop: "paquet", time: 0.5 },
    text: [
      "Le cheval s'arrête net, en travers de la route. Le cavalier saute à terre. C'est un grand garçon blond, le guet neuf de la porte Saint-Rieul, et il a l'air aussi surpris que toi.",
      "« Une courrière, dit-il. Avec un paquet. Le capitaine a dit : une courrière avec un paquet. » Il te prend le paquet des bras, sans brutalité. Il te lie les poignets avec la longe de son cheval, en s'excusant deux fois.",
      "Il te fait marcher devant le cheval, vers la ville, sur dix bornes.",
    ],
    choices: [{ label: "Marcher", to: "M_cavalier" }] },
  M_cavalier: { act: A, title: "Dix bornes", place: "hauteville", end: true, fx: { time: 3 },
    text: [
      "Il te faut deux heures pour revenir à pied à Corvèze, les mains liées. Le garçon blond parle à son cheval pour éviter de te parler.",
      "À la porte Saint-Rieul, le capitaine Rambert vous attend sous la voûte, en bottes et en robe de chambre, avec un domestique de la maison Corlay. Le domestique prend le paquet et part en courant vers la rue Haute.",
      "« Bon travail », dit le capitaine au garçon blond. Devant toi, il se tait. On te met dans la petite salle de la porte, avec un tabouret et une fenêtre grillagée qui donne sur la vallée.",
      "De cette fenêtre, on voit la digue, très loin, et la lumière de la Maison des Vannes. Vers quatre heures, la pluie se met à tomber. Tu regardes la petite lumière à travers la pluie jusqu'au matin.",
      "Elle reste seule toute la nuit, cette lumière. Quelqu'un attendait, là-haut, et tu sais maintenant qu'il attendra en vain.",
    ] },

  // ------------------------------------------------------------------ the gallery seen with Jacquette
  M_canal_veine: { act: A, title: "La veine", place: "digue", fx: { learn: "veine_vue", time: 0.5 },
    text: [
      "Jacquette allume sa lanterne sourde et pousse une porte de fer au fond du canal de fuite. Derrière, un couloir de pierre descend en pente douce dans la digue. Il y fait plus chaud qu'au-dehors. Un bruit emplit tout, un ruissellement, comme dans une cave sous un orage.",
      "Elle s'arrête après quarante pas et lève sa lanterne.",
      "Dans la paroi de gauche, une fente court du sol à la voûte, large d'un doigt en bas, d'une main en haut. Quelqu'un l'a bouchée au mortier, plusieurs fois : des plâtres de couleurs différentes, comme les pansements d'une vieille blessure. Tous les plâtres suintent. Au pied de la fente, l'eau coule en nappe, brune, et elle emporte du sable.",
      "« Le vieux l'appelle la veine, dit Jacquette. Il vient la mesurer tous les soirs avec un compas. Elle a pris un pouce depuis la Toussaint. » Elle baisse sa lanterne. « Viens. Je n'aime pas rester devant. »",
    ],
    choices: [{ label: "La suivre vers la chambre de la vanne", to: "M_chambre_vanne", via: "canal" }] },

  // ------------------------------------------------------------------ the wheel jams
  M_roue_bloque: { act: A, title: "Le douzième tour", place: "digue", fx: { time: 0.25 },
    text: [
      "Au douzième tour, la roue s'arrête net. Le rayon te rentre dans les côtes. En face de toi, de l'autre côté du moyeu, on pousse aussi, et rien ne bouge.",
      "« La rouille, dit le vieux. On ne l'a pas ouverte depuis l'été. Le pas de vis a pris. »",
      "Contre le mur, il y a un bidon d'huile de lin, et un maillet de bois gros comme un tonnelet.",
    ],
    choices: [
      { label: "Verser l'huile dans le pas de vis et frapper au maillet", test: { dom: "nature", diff: 0, label: "Débloquer le pas de vis" }, win: { to: "M_roue", via: "huile" }, lose: { to: "M_roue", via: "force", fx: { time: 0.25 } } },
      { label: "Pousser tous ensemble, d'un coup, au signal", test: { dom: "combat", diff: -10, label: "Forcer la roue" }, win: { to: "M_roue", via: "force" }, lose: { to: "M_roue", via: "force", fx: { time: 0.5 } } },
    ] },

  // ------------------------------------------------------------------ the Foulons, one by one
  M_foulons_mallet: { act: A, title: "Le père Mallet", place: "foulons", fx: { time: 0.25 },
    text: [
      "Le père Mallet tient la blanchisserie du rez-de-chaussée et loue les chambres du dessus. Il est resté chez lui malgré la cloche. Il t'ouvre en chemise de nuit, une chandelle dans une main, un tisonnier dans l'autre.",
      "« Ternier ! Tu me dois deux mois, et tu sonnes la cloche à deux heures pour me dire que la Sorge déborde ? La Sorge déborde tous les dix ans, ma fille. On monte les meubles à l'étage, on attend, on lave. »",
      "Derrière lui, dans la boutique, sont empilés les draps de l'hospice, propres, pliés, prêts à livrer : trois semaines de travail.",
    ],
    choices: [
      { label: "« Cette fois, c'est le lac qui descend. Tout le lac. »", test: { dom: "social", diff: -10, label: "La convaincre" }, win: { to: "M_foulons_gregoire", via: "mallet" }, lose: { to: "M_foulons_gregoire", via: "mallet_non" } },
      { label: "Le laisser à ses draps, et courir à la porte suivante", to: "M_foulons_gregoire", via: "mallet_non" },
    ] },
  M_foulons_gregoire: { act: A, title: "Le vieux Grégoire", place: "foulons", fx: { time: 0.25 },
    text: [
      { via: "mallet", text: "Le père Mallet te regarde un long moment. Puis il pose son tisonnier et crie dans l'escalier : « Tout le monde en bas ! Prenez vos couvertures ! » Sa voix fait plus de bruit que ta cloche." },
      { via: "mallet_non", text: "Derrière toi, le père Mallet claque sa porte. Tu entends le verrou. Une minute plus tard, tu l'entends quand même crier dans son escalier : « Montez les draps de l'hospice ! »" },
      "Au bout de la ruelle des Cardeurs vit le vieux Grégoire, l'ancien foulon, dans une chambre au ras de la rue. Il a les jambes mortes depuis la Saint-Martin. Sa fille est placée à Lyre. Il dort dans un fauteuil, près de la porte, pour qu'on puisse lui porter sa soupe sans monter.",
      "Il est réveillé. Il a entendu la cloche, ou les cris. Il te regarde par la porte entrouverte, les mains sur les accoudoirs.",
      "« Je ne marche plus, tu sais, dit-il. Ne t'occupe pas de moi. »",
    ],
    choices: [
      { label: "Le charger sur ton dos et monter vers Saint-Rieul", to: "M_foulons", fx: { flag: "gregoire:porte", time: 0.5 } },
      { label: "Courir chercher deux hommes pour le porter", to: "M_foulons", fx: { flag: "gregoire:aide", time: 0.25 } },
    ] },

  // ------------------------------------------------------------------ Pernelle, at the Corlay house
  M_pernelle: { act: A, title: "La secrétaire", place: "hauteville", fx: { time: 0.25 },
    text: [
      "La porte Saint-Rieul est encore ouverte : il manque un quart d'heure à minuit. La rue Haute dort. Chez Corlay, au deuxième étage, une seule fenêtre est allumée.",
      "C'est une femme qui t'ouvre la porte de service : trente-cinq ans, une robe grise, des manchettes de lustrine aux poignets, une plume derrière l'oreille. Pernelle Daguet, la secrétaire. Elle regarde le paquet avant de regarder ton visage.",
      "« Ah, dit-elle. Celui-là. » Elle reste à la porte. « Monsieur paiera. Monsieur paie toujours. Mais réfléchis à une chose avant d'entrer : Monsieur paie très bien ce qu'il n'a pas encore. Ce qu'il a déjà, il le paie moins. »",
    ],
    choices: [
      { label: "« Je veux le voir. »", to: "M_corlay_porte" },
      { label: "« Qu'est-ce que vous voulez dire ? »", to: "M_pernelle_dit" },
    ] },
  M_pernelle_dit: { act: A, title: "Ce qu'il a déjà", place: "hauteville",
    text: [
      "Pernelle sort sur le seuil et tire la porte derrière elle.",
      "« Le fils Vellard est venu ici à huit heures, dit-elle. Il a vendu ce que tu portes avant toi. Monsieur a payé ses dettes, quatre cents écus, sur ma plume. Ensuite il a fait mettre le guet sur le pont. » Elle a un sourire bref. « Le jeune homme a tout vendu, et il s'en va très content. Ce soir, ce que tu portes, Monsieur le paie pour la deuxième fois. Il le paiera, parce qu'il le veut avant le vote. Mais demande ton argent avant de lâcher le paquet. Et compte-le. »",
      "Elle regarde au bout de la rue, vers la vallée noire. « Je tiens ses comptes depuis douze ans. Je sais ce que coûte une chose. Ce soir, je ne sais plus du tout ce qu'elle vaut. »",
    ],
    choices: [{ label: "Entrer", to: "M_corlay_porte", via: "pernelle" }] },

  // ------------------------------------------------------------------ alone, the pointeau (later games)
  M_galerie_porte: { act: A, title: "La porte basse", place: "digue", fx: { time: 0.5 },
    text: [
      "La cabane est vide, et la clé seule ne fait pas tourner la roue : il faut quatre bras, la lettre le dit. Mais quelqu'un t'a parlé d'une autre manière d'ouvrir. Un pointeau, en bas, dans la galerie, qu'on dévisse à la main, sous l'eau.",
      "Au fond du canal de fuite, une porte de fer est entrouverte. Derrière, un couloir descend dans la digue. Tu allumes ta chandelle de courrière, celle qu'on garde dans la poche du châle pour lire les adresses.",
      "Le couloir sent la vase et le fer mouillé. L'eau te monte aux chevilles au dixième pas, aux mollets au trentième.",
    ],
    choices: [
      { label: "Descendre", to: "M_galerie_eau" },
      { label: "Remonter, et glisser le paquet sous la pierre bleue", to: "M_pierre", via: "pose" },
    ] },
  M_galerie_eau: { act: A, title: "Jusqu'à la taille", place: "digue", fx: { learn: "veine_vue", time: 0.5 },
    text: [
      "Après quarante pas, tu passes devant la fente. Elle court dans la paroi de gauche, du sol à la voûte, couverte de plâtres de toutes les couleurs, et chaque plâtre pleure. L'eau sort de la pierre en nappe brune.",
      "Le couloir finit dans une petite salle ronde. L'eau t'arrive à la taille, si froide que tes jambes deviennent deux poids morts. Au milieu de la salle, une tige de fer sort de l'eau, coiffée d'un volant large comme une assiette : le pointeau.",
      "Tu poses ta chandelle sur une saillie. Tu prends le volant à deux mains. Il résiste. Tu y mets ton poids, tes pieds glissent sur le fond. Le volant cède d'un quart de tour, puis d'un autre.",
      "Sous l'eau, quelque chose se met à siffler.",
    ],
    choices: [
      { label: "Continuer à tourner", test: { dom: "combat", diff: -20, label: "Tenir dans l'eau froide" }, win: { to: "M_pointeau", via: "tenu" }, lose: { to: "M_pointeau", via: "tombe" } },
    ] },
  M_pointeau: { act: A, title: "Le pointeau", place: "digue", end: true, fx: { time: 3 },
    text: [
      "Le sifflement devient un grondement. L'eau de la salle se met à tourner autour de tes jambes, puis à tirer. Quelque part en dessous, la vanne de fond s'entrouvre d'un doigt, et le lac commence à passer.",
      { via: "tenu", text: "Tu tournes jusqu'à perdre le sentiment de tes mains. Le volant arrive en butée. Tu remontes le couloir à quatre pattes, dans l'eau qui te pousse aux mollets, et tu t'effondres sur les pierres du canal de fuite. Le canal, à côté de toi, s'est mis à rugir." },
      { via: "tombe", text: "Au sixième tour, tes pieds partent. L'eau te prend, te roule, te cogne contre le mur. Ta main trouve une chaîne scellée dans la pierre. Tu t'y tiens, longtemps, sans compter. Quand tu remontes le couloir, tu as perdu un sabot, ta chandelle et un ongle. Le canal, derrière toi, s'est mis à rugir." },
      "Tu restes couchée sur la pierre, trempée, jusqu'à ce que quelqu'un descende l'escalier de la digue avec une lanterne. C'est un vieil homme maigre, en chemise, qui se tient au mur. Il voit le canal plein. Il te voit. Il s'assoit à côté de toi, lentement, et il pose sa main sur ta tête.",
      "« Par le pointeau, dit-il. Toute seule. » Il rit, d'un rire qui le fait tousser. « Il faut deux hommes pour ce volant, d'habitude. »",
      "Vers quatre heures, la pluie arrive. Le lac a déjà baissé d'un pied. La veine pleure toujours, et elle tient.",
      "Personne n'a fait lever les Foulons. Le matin, la Sorge entre dans les maisons basses. Les gens se réveillent avec l'eau au lit et montent sur les toits. Ce matin-là, la Sorge prend les meubles, les draps de l'hospice, les cuves des teinturiers, et elle épargne les gens.",
      "En bas, on ignorera toujours qui a ouvert. Le vieil homme le saura. Et toi, chaque fois que tu verras une tige de fer sortir d'une eau trouble, tu sentiras ce froid jusqu'à la taille.",
    ] },
};
