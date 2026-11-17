// The second reading: the next evening, the will read again word for word, as the will asked. Every passage here is
// `second: true`. The second answers of the quatrains open the gardener's confession, the attic and its letters, the
// baptismal register; two o'clock leads to the kitchen oven; and dawn brings a judgement with what was found.
module.exports = {
  // ------------------------------------------------------------------ act I, again
  S_voiture: { act: "I", title: "La route des iris, encore", place: "route", second: true,
    fx: { meet: ["brissac"] },
    text: [
      "Le lendemain soir, la même voiture, la même odeur de cuir mouillé, la même route blanche entre les murets. Mais cette fois, Maître Brissac est assis en face de toi, la jambe allongée sur la banquette, le pied gauche emmailloté, et il grimace à chaque ornière avec une application de martyr.",
      "« La goutte, dit-il, n'a jamais empêché un notaire d'assister à une seconde lecture. Il n'y en a pas eu à Sauvebonne depuis cent ans. Je ne la manquerais pas pour mon pied droit. »",
      "Les iris défilent derrière la vitre, violets et gris, et tu les reconnais un par un, comme on reconnaît les visages d'une foule qu'on a déjà traversée. Tu as la chemise lilas sur les genoux. Tu sais ce qu'il y a dedans. Tu sais ce qu'il y a sous la dalle de la chapelle. Tu sais qu'une demoiselle en gris est partie ce matin à pied par l'allée des cyprès, et que personne ne l'a retenue.",
      "« Mademoiselle Marchal sera là, dit Brissac, comme s'il t'avait entendu{e} penser. Je l'ai fait rattraper sur la route de Grasse. *Mot pour mot*, dit le testament. Elle était là hier. Elle sera là ce soir. » Il ferme les yeux. « Et le codicille de Monsieur Hector est retourné sous sa plaque, avec les trois autres à leur place. Jaume s'en est chargé à midi. J'aime les choses faites dans l'ordre. »",
    ],
    choices: [
      { label: "Demander à Maître Brissac pourquoi il vous a dit « Lisez mieux »", hide: { seen: "S_voiture_brissac" }, to: "S_voiture_brissac" },
      { label: "Descendre devant la grille", fx: { until: 18 }, to: "A_grille" },
    ] },

  S_voiture_brissac: { act: "I", title: "Lisez mieux", place: "route", second: true,
    text: [
      "Brissac rouvre un œil. « Parce que vous avez lu comme un clerc, dit-il. Un mot, une chose. *Graine*, l'orangerie. *Clef*, la statue. C'est très bien, un clerc. On ne lui demande pas de penser, on lui demande de copier sans faute. » Il rouvre l'autre œil. « Elle, elle n'écrivait jamais un mot qui ne servait qu'une fois. Elle disait que les mots sont comme les essences : un bon parfumeur en tire trois notes, une de tête, une de cœur, une de fond. »",
      "Il regarde par la vitre. « J'ai rédigé ce testament sous sa dictée. J'ai fait le notaire. J'ai lu, j'ai cacheté, j'ai juré de me taire, et je me tais. » Il se tait, en effet, un long moment. « Lisez la note de cœur, cette fois. »",
    ],
    choices: [
      { label: "Descendre devant la grille", fx: { until: 18 }, to: "A_grille" },
    ] },

  S_lecture2: { act: "I", title: "La seconde lecture", place: "salon", second: true,
    fx: { flag: "lu", meet: ["hector", "berenice", "odile", "fine"], ep: ["histoire", 300] },
    text: [
      "Tu te places devant la cheminée, sous le portrait, comme hier. Maître Brissac s'est installé dans un fauteuil du coin, sa canne entre les genoux, et il ferme les yeux comme on les ferme au concert.",
      "Hector est assis cette fois, jambes croisées, sa pièce immobile dans sa main. Il ne sourit pas. Il a le teint d'un homme qui a passé la journée à faire des comptes et qui a trouvé partout le même total. Bérénice ne prie plus : elle le regarde. Odile est revenue. Elle a gardé son chapeau gris et ses gants gris, et sa malle attend dans le vestibule, comme un chien couché devant une porte.",
      "Tu lis. *Moi, Aurore Castellane, veuve Ferrier.* Les mots sont les mêmes, et ils n'ont plus le même poids. *Je laisse mon bien à qui saura le trouver.* Tu entends sous les mots une autre voix, plus basse, qui dit autre chose.",
      "*Si le partage se fait avant l'aube, qu'on relise ce testament le lendemain soir, à la même heure, mot pour mot, et que tout recommence.*",
      "« Tout recommence, dit Hector d'une voix plate. Sauf qu'on connaît les réponses. Alors finissons-en. Graine, clef, parfum, nom. Allons à la chapelle et allons nous coucher. »",
      "« Le juge cherchera à son rythme », dit Brissac sans ouvrir les yeux.",
    ],
    choices: [
      { label: "Relire le premier quatrain", to: "A_q1" },
    ] },

  S_brissac_salon: { act: "I", title: "Le notaire au coin du feu", place: "salon", second: true,
    text: [
      "Tu t'approches du fauteuil de Maître Brissac. Il a les yeux ouverts, à présent, fixés sur le portrait au-dessus de la cheminée.",
      "« Le peintre était un mauvais peintre, dit-il. Mais il savait les fleurs. » Il tourne la tête vers toi. « Vous avez vu le bouquet ? Jasmin, iris, rose. Elle disait : le jasmin pour la nuit où on se rencontre, l'iris pour les trois ans qu'il faut attendre, la rose pour le reste. » Il sourit, de travers. « Elle disait beaucoup de choses. Elle disait aussi qu'un notaire n'a pas de cœur, seulement des minutes. »",
    ],
    choices: [
      { back: "A_salon" },
    ] },

  S_q1_fille: { act: "I", title: "La fille", place: "salon", second: true,
    fx: { meet: ["jaume"] },
    text: [
      "« Une fille », dis-tu.",
      "*Je viens de toi, et je ne suis pas toi ; tu m'as donné ton nom, que je ne porte pas.*",
      "Le mot tombe dans le salon comme une pierre dans un puits, et on attend longtemps le bruit de l'eau. Hector fronce les sourcils, sans comprendre. Bérénice porte la main à son scapulaire. Odile a pâli.",
      "À la porte de l'office, Jaume a lâché son chapeau. Il ne le ramasse pas. Maître Brissac, dans son coin, a fermé les yeux de nouveau, et ses mains se sont crispées sur le pommeau de sa canne.",
    ],
    choices: [
      { label: "Suivre Jaume, qui sort sans un mot vers le jardin", to: "S_jaume_aveu" },
    ] },

  S_jaume_aveu: { act: "I", title: "Ce que dit le jardinier", place: "jardin", second: true,
    fx: { flag: ["odile:fille", "codicille:1"], item: "codicille1", ep: ["perso", 300] },
    text: [
      "Tu rattrapes Jaume au rond-point, devant la Flore. Il s'est arrêté là, dans le noir, les bras ballants, et il parle avant que tu aies rien demandé, comme on vide un seau trop longtemps porté.",
      "« Elle est revenue de Gênes au printemps, avec un panier. Dans le panier, il y avait une petite, endormie, dans un châle qui sentait l'iris. Elle me l'a mise dans les bras. Elle a dit : *Jaume, c'est une greffe. Je te demande de lui donner tes racines.* Ma Rose pleurait. Elle avait jamais pu en avoir. On a dit au curé que c'était un miracle. »",
      "Il s'essuie le nez du revers de la main. « Trente et un ans, j'ai tenu ma langue. Elle passait devant ma maison tous les jours. Elle regardait la petite jouer dans le champ du ruisseau. Elle lui a appris à sentir, à lire, à se tenir. Elle l'a prise chez elle, à vingt ans, comme demoiselle de compagnie, pour l'avoir près d'elle sans rien dire. » Il lève vers toi des yeux mouillés. « Elle avait peur. Pas des gens. D'elle. Elle disait qu'elle avait le cœur trop sec pour faire une mère. Elle s'est trompée. Elle se trompait jamais, sauf là. »",
      "Il fouille dans la poche de son tablier et te tend un papier plié en quatre, cacheté de cire lilas. « Le tiroir aux graines. Je l'ai remis à midi, et je l'ai repris tout à l'heure. Je voulais pas que le neveu y mette encore les pattes. »",
    ],
    choices: [
      { back: "A_jardin" },
    ] },

  // ------------------------------------------------------------------ act II, again
  S_chambre_hector: { act: "II", title: "La chambre d'Hector", place: "salon", second: true,
    text: [
      "Hector est au salon, à faire des réussites sur le guéridon en surveillant la porte. Tu montes à sa chambre par l'escalier de service, une bougie à la main.",
      "C'est la chambre d'un homme qui voyage léger et vit lourd : un sac de cuir, trois gilets, une douzaine de cravates, un jeu de cartes, une liasse de reconnaissances de dettes nouées d'un ruban de soie rose comme des lettres d'amour. Dans la cheminée froide, des cendres de papier, beaucoup.",
    ],
    choices: [
      { label: "Fouiller les cendres de la cheminée", test: { dom: "discretion", diff: 0, label: "Discrétion" }, win: { to: "S_brouillons" }, lose: { to: "S_hector_surprend" } },
    ] },

  S_brouillons: { act: "II", title: "Les brouillons", place: "salon", second: true,
    fx: { item: "brouillons", flag: "preuve:brouillons" },
    text: [
      "Tu remues les cendres du bout du tisonnier. La plupart sont réduites en poussière noire. Mais au fond, sous la grille, là où le feu a mal tiré, quelques feuilles froissées en boule ont seulement roussi.",
      "Tu les déplies sur ton genou. Des essais d'écriture, page après page. *Aurore Castellane. Aurore Castellane. Aurore Castellane.* Les premiers sont maladroits, trop penchés, trop appuyés ; les derniers ressemblent à s'y méprendre à la grande écriture nette du testament. Sur une feuille, une phrase entière, recopiée trois fois : *à mon neveu Hector, qui porte mon nom.*",
      "Au coin d'une page, le filigrane se devine encore dans le papier roussi : une grappe de raisin.",
      "Tu replies les brouillons dans ta veste et tu redescends sans bruit. Au salon, Hector retourne un valet de pique, et jure.",
    ],
    choices: [
      { back: "B_nuit" },
    ] },

  S_hector_surprend: { act: "II", title: "Le neveu à la porte", place: "salon", second: true,
    fx: { flag: "hector:mefiant" },
    text: [
      "Tu as à peine touché les cendres qu'une voix aimable dit derrière toi : « On cherche quelque chose ? »",
      "Hector est appuyé au chambranle, les bras croisés, sa pièce dansant entre ses doigts. Il entre, prend le tisonnier de tes mains avec douceur, et remue lui-même les cendres jusqu'à ce qu'il n'en reste que de la poussière.",
      "« Des lettres de créanciers, dit-il. On les brûle, ça soulage. Essayez, un jour. » Il te raccompagne à la porte, une main amicale sur ton épaule, et sa main pèse. « Cinq cents livres, murmure-t-il à ton oreille, si le juge lit ce soir comme il a lu hier. Pensez-y. Les clercs vivent longtemps et gagnent peu. »",
    ],
    choices: [
      { back: "B_nuit" },
    ] },

  S_berenice_r2: { act: "II", title: "Bérénice et ses lettres", place: "salon", second: true,
    fx: { flag: "berenice:temoin", meet: ["berenice"] },
    text: [
      "Tu trouves Bérénice dans la bibliothèque, devant Rabelais, et tu lui dis à voix basse que ses lettres sont dans le tiroir de la console du bureau, rangées par date, et que tu ne les liras pas.",
      "Elle devient très rouge, puis très blanche. « Comment savez-vous… » Elle s'arrête. Elle te regarde comme on regarde un prédicateur qui vient de citer votre confession. Puis elle s'assoit, lentement, sur l'escabeau des rayonnages.",
      "« Hier, à deux heures moins le quart, dit-elle, j'allais au bureau chercher ces lettres. Par la fenêtre de l'escalier, j'ai vu une lanterne aller à la chapelle, et revenir un quart d'heure après. Celui qui la portait avait un gilet clair. » Elle serre son chapelet. « Je n'ai rien dit. J'avais mes propres raisons de me promener la nuit. » Elle lève le menton. « Ce soir, je n'en ai plus. Si vous avez besoin que je le dise devant Maître Brissac, je le dirai. Sur les Évangiles, s'il le faut, et même sur Montaigne. »",
    ],
    choices: [
      { back: "B_nuit" },
    ] },

  S_odile_dire: { act: "II", title: "Ce que tu dis à Odile", place: "salon", second: true,
    fx: { flag: "odile:sait" },
    text: [
      "Odile est à sa fenêtre, comme hier, la couverture sur les épaules. Tu t'assois près d'elle sur le rebord, et tu lui dis.",
      { if: { has: "odile:fille" }, text: "Tu lui dis ce que Jaume t'a dit au pied de la Flore : Gênes, le panier, le châle qui sentait l'iris, la greffe." },
      { if: "enigme:p_journal", text: "Tu lui montres la dernière page du carnet vert, et les nombres, et les flacons de l'orgue, et ce qu'ils écrivent quand on les lit dans l'ordre de l'alphabet." },
      { if: { has: "odile:prenom" }, text: "Tu lui montres l'acte de baptême que tu as recopié dans le registre de la chapelle : *Odile Aurore.* Le second prénom qu'on lui a donné et qu'on ne lui a jamais dit." },
      "Elle t'écoute sans t'interrompre, les yeux fermés, comme elle écoute un parfum. Quand tu as fini, elle reste longtemps immobile. Dehors, les iris murmurent.",
      "« Elle me faisait sentir ses essais, dit-elle enfin. Tous les soirs. Elle me demandait : *Qu'est-ce que tu sens ?* Et je lui disais. Et elle disait : *Moi aussi.* » Elle rouvre les yeux. Ils sont secs. « Je croyais qu'elle parlait du parfum. »",
      "Elle se lève, retire son chapeau gris, ses gants gris, et les pose sur le rebord. « Je ne pars pas demain. »",
    ],
    choices: [
      { back: "B_nuit" },
    ] },

  S_q3_souvenir: { act: "II", title: "Le souvenir", place: "bureau", second: true,
    fx: { meet: ["odile"] },
    text: [
      "« Un souvenir », dis-tu.",
      "*Je m'en vais quand on m'ouvre, et je reste quand on part. Celle qui m'a fait sera morte, et moi, je serai là.*",
      "Odile ouvre les yeux. « Le grenier, dit-elle. Elle montait au grenier, les soirs de mai, toute seule, avec une bougie. Elle redescendait les yeux rouges, et elle disait que c'était la poussière. » Elle prend une bougie sur la console. « Elle m'a toujours défendu d'y monter. Je crois que ce soir, elle ne dirait rien. »",
    ],
    choices: [
      { label: "Monter au grenier avec Odile", to: "S_grenier" },
    ] },

  S_grenier: { act: "II", title: "Le grenier", place: "grenier", second: true,
    text: [
      "Le grenier court sur toute la longueur de la Bastide, sous les tuiles, bas, poussiéreux, encombré de cinquante ans de vie qu'on n'a pas eu le cœur de jeter : des chaises éventrées, un berceau d'osier, des cartons à chapeau, des alambics hors d'usage, une poupée sans tête qui te regarde quand même. La bougie fait danser des ombres immenses sur les chevrons, et le vent, dehors, souffle entre les tuiles avec un bruit de flûte fêlée.",
      "Au fond, sous la lucarne, une malle de cuir clouté, fermée d'un simple loquet. Sur le couvercle, une couche de poussière, et dans la poussière, la trace nette de deux mains, toutes récentes : quelqu'un l'a ouverte peu de temps avant de mourir.",
      "Dedans, enveloppé dans du papier de soie, un châle de cachemire qui sent l'iris si fort que la tête te tourne. Une petite robe de baptême brodée. Une mèche de cheveux châtains, nouée d'un fil lilas. Et un paquet de quatre lettres jaunies, nouées d'un ruban.",
      "Odile s'est agenouillée devant la malle. Elle a pris le châle, et elle l'a porté à son visage, et elle ne bouge plus.",
    ],
    choices: [
      { label: "Dénouer le ruban et lire les lettres", hide: { has: "enigme:p_lettres" }, to: "S_lettres" },
      { label: "Redescendre au bureau prendre le flacon Aurore", hide: { has: "codicille:3" }, to: "B_orgue" },
    ] },

  S_lettres: { act: "II", title: "Les lettres signées A.", place: "grenier", second: true, puzzle: "p_lettres",
    fx: { item: "lettres" },
    text: [
      "Tu dénoues le ruban. Les lettres sont pliées si souvent qu'elles se déchirent aux plis, et il faut les ouvrir comme on ouvre une fleur séchée, du bout des doigts. Aucune n'est datée. Toutes sont signées de la même initiale.",
    ],
    choices: [
      { back: "S_grenier" },
    ] },

  S_lettres_lues: { act: "II", title: "A.", place: "grenier", second: true,
    text: [
      "Dans l'ordre, les lettres racontent une histoire très simple, et très vieille. Un jeune homme qui ne savait plus compter jusqu'à trois. Une jeune femme qui attendait un enfant et ne voulait pas d'un mari. Un acte rédigé en secret, un prénom porté en second, comme un secret dans une poche. Un homme qui passe tous les dimanches devant la maison du bas et ne s'arrête jamais.",
      "*Je rédigerai l'acte moi-même.* Tu as copié des centaines d'actes. Tu connais cette écriture-là, ronde, appliquée, un peu raide, avec ses *d* qui s'enroulent comme des crosses d'évêque : c'est celle de l'étude, celle des registres d'il y a trente ans, celle de ton patron quand il avait vingt-cinq ans et la goutte nulle part.",
      "*A.* Anatole.",
      "Odile a lu par-dessus ton épaule. Elle ne dit rien. Elle replie les lettres une à une, dans l'ordre, et renoue le ruban d'un nœud parfait.",
    ],
    choices: [
      { back: "S_grenier" },
    ] },

  S_deuxh: { act: "II", title: "Deux heures, encore", place: "salon", second: true,
    text: [
      "Tu t'assois sur la banquette du vestibule, dans le noir, et tu attends. L'horloge compte. Cette fois, tu sais ce que tu attends.",
      "À deux heures moins le quart, un pas dans l'escalier. Mais la silhouette ne va pas vers la porte du jardin. Elle traverse le vestibule, ouvre la porte de l'office, et descend vers la cuisine. Elle tient quelque chose de blanc à la main, plié, serré contre le gilet de soie.",
      { if: { has: "hector:mefiant" }, text: "Au bas des marches, il s'arrête, tourne la tête vers la banquette où tu es assis{e}, et reste immobile le temps de trois battements de l'horloge. Puis il repart. Il sait que tu es là. Il y va quand même : il n'a plus le choix." },
      "La chapelle n'a plus rien à lui donner. Ce soir, il a autre chose à faire disparaître.",
    ],
    choices: [
      { label: "Le suivre à la cuisine", to: "S_four" },
      { label: "Le laisser faire", to: "B_nuit" },
    ] },

  S_four: { act: "II", title: "Le four à pain", place: "salon", second: true,
    text: [
      "La cuisine est noire, à part la braise du potager qui rougeoie sous la cendre. Fine est montée se coucher. Hector s'est accroupi devant la gueule du four à pain, encore tiède de la fournée du soir, et il a ouvert la porte de fonte. Dans la lumière rouge, tu vois son visage : un visage d'enfant qui va faire une bêtise et qui le sait.",
      "Il déplie le papier blanc, le regarde une dernière fois, et l'approche de la braise.",
    ],
    choices: [
      { label: "Bondir sur lui", test: { dom: "combat", diff: 0, label: "Combat" }, win: { to: "S_four_ok" }, lose: { to: "S_four_ko" } },
    ] },

  S_four_ok: { act: "II", title: "Le vrai codicille", place: "salon", second: true,
    fx: { item: "vrai_codicille", flag: ["hector:confondu", "vrai:codicille"], ep: ["histoire", 500] },
    text: [
      "Tu lui saisis le poignet avant que le papier ne touche la braise. Il se débat, sans conviction, comme un homme qui n'a jamais su se battre et qui ne compte pas commencer. Le papier tombe sur le carrelage. Tu le ramasses. Un coin est roussi. Le reste est intact.",
      "Le vieux vergé de Hollande, jauni sur les bords. La grande écriture nette, sans une rature. *Quatrième et dernier codicille. La Bastide aux Iris, la Maison Castellane et le reste de mes biens iront à celle qui porte mon prénom en second, ma fille, Odile. Que Jaume lui dise ce que je n'ai pas su dire. Aurore Castellane.*",
      "Hector s'assoit par terre, contre le four, les jambes étendues, et se met à rire doucement, sans joie. « Je l'ai trouvé hier, sous la plaque, en y glissant l'autre. Je n'ai pas eu le cœur de le brûler. Je l'ai gardé dans ma poche toute la journée, contre ma poitrine. Je le relisais. *Ma fille.* » Il secoue la tête. « Ma tante avait une fille, et je l'ai appris en volant. C'est bien ma chance. »",
    ],
    choices: [
      { back: "B_nuit" },
    ] },

  S_four_ko: { act: "II", title: "La braise", place: "salon", second: true,
    fx: { item: "codicille_brule", flag: ["hector:confondu", "codicille:brule"] },
    text: [
      "Tu bondis. Ton pied glisse sur le carrelage gras. Le temps de te rattraper à la table, le papier a touché la braise, et une flamme jaune court le long du bord, gourmande.",
      "Tu l'arraches du four à pleine main. Tu le bats contre ta cuisse. Il te reste dans les doigts un lambeau noirci, grand comme une carte à jouer, où l'on lit encore, dans le vieux vergé jauni, de la grande écriture nette : *…celle qui porte mon prénom en second, ma fille, Od…*",
      "Hector te regarde souffler sur tes doigts brûlés. Il ne rit pas. « Ça ne prouve rien, dit-il. Un bout de papier. » Mais il ne le dit pas comme un homme qui y croit.",
    ],
    choices: [
      { back: "B_nuit" },
    ] },

  // ------------------------------------------------------------------ act III, again
  S_q4_prenom: { act: "III", title: "Le prénom", place: "chapelle", second: true,
    text: [
      "« Un prénom », dis-tu.",
      "*On me donne, et jamais on ne me vend.* Un nom de famille, on en hérite. Un prénom, on le reçoit, au baptême, devant un prêtre, un parrain et une marraine, et on l'inscrit dans un registre.",
      "Le registre de la chapelle de la Bastide est rangé sous l'autel, dans un coffre de bois noir que Jaume ouvre tous les ans pour la fête de la Sainte-Aurore.",
    ],
    choices: [
      { label: "Aller à la chapelle et ouvrir le registre", fx: { until: 3 }, to: "S_registre" },
    ] },

  S_registre: { act: "III", title: "Le registre des baptêmes", place: "chapelle", second: true,
    fx: { item: "acte_bapteme", flag: "odile:prenom", ep: ["histoire", 300] },
    text: [
      "Sous l'autel, le coffre de bois noir s'ouvre sans clef. Le registre est un gros cahier relié de parchemin, gondolé, où les curés successifs ont inscrit, d'écritures de plus en plus pressées, les baptêmes, les mariages et les morts de la Bastide et des fermes alentour.",
      "Tu remontes les années à la lueur de la veilleuse. Des Marchal, des Roux, des Castellane. Trente et un ans en arrière, un douze mai :",
      "*A été baptisée en cette chapelle Odile Aurore, née de père et de mère inconnus. Parrain : Jaume Marchal, jardinier. Marraine : Aurore Castellane, veuve Ferrier.*",
      "Et en marge, d'une autre encre, d'une écriture ronde et appliquée, avec des *d* qui s'enroulent comme des crosses d'évêque : *acte dressé par A. Brissac, clerc.*",
      "Tu recopies l'acte mot pour mot sur une page de ton carnet, et tu signes la copie, comme on t'a appris. Tu remets le registre à sa place. La veilleuse rouge tremble devant l'autel, et sur la dalle neuve, le nom de la morte a l'air de sourire.",
    ],
    choices: [
      { back: "C_chapelle" },
    ] },

  S_aube: { act: "III", title: "L'aube, encore", place: "salon", second: true, hub: true, backName: "le salon",
    text: [
      { first: true, text: "À six heures moins le quart, le jour gris monte derrière les collines. Maître Brissac n'a pas dormi. Il est assis dans son fauteuil du coin, la jambe sur le tabouret, la chemise lilas sur les genoux, et il a l'air de n'avoir jamais rien attendu d'autre de sa vie que ce matin-là." },
      { first: true, text: "Ils sont tous là. Hector près de la cheminée, le visage gris. Bérénice sur sa chaise droite. Odile près de la fenêtre, tête nue, sans gants. Jaume et Fine à la porte de l'office. Et au-dessus de la cheminée, la jeune femme au bouquet, avec son ironie au coin des lèvres." },
      { again: true, text: "Le salon dans le petit jour, tous les visages tournés vers toi." },
      "« Le testament fait de vous le juge, dit Brissac. Montrez ce que vous avez trouvé. Puis jugez. »",
    ],
    choices: [
      { label: "Poser sur le guéridon le vrai quatrième codicille", if: { has: "vrai:codicille" }, hide: { seen: "S_aube_vrai" }, to: "S_aube_vrai" },
      { label: "Démontrer que le codicille de la chapelle est un faux", if: { any: [{ has: "hector:confondu" }, { has: "hector:aveu" }, { has: "preuve:brouillons" }, { has: "berenice:temoin" }, { clue: "i_encre" }, { clue: "i_filigrane" }] }, hide: { seen: "S_aube_faux" }, to: "S_aube_faux" },
      { label: "Dire qui est Odile Marchal", if: { any: [{ has: "odile:fille" }, { has: "odile:prenom" }, "enigme:p_journal", { has: "odile:lettre" }, { has: "fine:temoin" }, { has: "acte:reconnaissance" }] }, hide: { seen: "S_aube_fille" }, to: "S_aube_fille" },
      { label: "Demander à Maître Brissac qui signait A.", if: { any: ["enigme:p_lettres", { has: "acte:reconnaissance" }] }, hide: { seen: "S_aube_brissac" }, to: "S_aube_brissac" },
      { label: "Prononcer ton jugement", fx: { until: 6 }, to: "F_relecture" },
    ] },

  S_aube_vrai: { act: "III", title: "Le vrai codicille", place: "salon", second: true,
    fx: { flag: "verdict:vrai" },
    text: [
      "Tu poses sur le guéridon la feuille au coin roussi. Brissac la prend, la lève vers la fenêtre, où le jour blanchit. Le vieux vergé de Hollande, sans date. L'écriture nette. Il lit à voix haute, lentement, et sa voix grave tremble au dernier mot. *Ma fille, Odile.*",
      "Personne ne parle. Hector regarde le tapis. Bérénice a porté la main à sa bouche. Jaume, à la porte, s'est mis à pleurer sans bruit, comme pleurent les vieux arbres quand on les taille.",
    ],
    choices: [
      { back: "S_aube" },
    ] },

  S_aube_faux: { act: "III", title: "Le faux", place: "salon", second: true,
    fx: { flag: "faux:ecarte" },
    text: [
      "Tu poses à côté le codicille de la chapelle, et tu dis pourquoi c'est un faux, dans l'ordre, comme on rédige un acte.",
      { if: { clue: "i_filigrane" }, text: "Le papier : un vergé de la papeterie Roux, de cette année, quand Madame Castellane écrivait tout sur une rame de Hollande achetée il y a trente ans." },
      { if: { clue: "i_encre" }, text: "L'encre, qu'Odile a sentie fraîche dans la chapelle." },
      { if: { has: "preuve:brouillons" }, text: "Les brouillons roussis tirés de la cheminée d'Hector, où la signature de la morte s'améliore de page en page, et où une phrase revient trois fois : *à mon neveu Hector, qui porte mon nom.*" },
      { if: { has: "berenice:temoin" }, text: "Bérénice se lève. D'une voix claire, elle dit la lanterne qui allait à la chapelle à deux heures moins le quart, la nuit dernière, et le gilet clair de celui qui la portait." },
      { if: { has: "hector:confondu" }, text: "Le four à pain, à deux heures, et le papier qu'Hector y portait." },
      { if: { has: "codicille:brule" }, text: "Tu poses sur le guéridon le lambeau noirci, et tu le lis : *…celle qui porte mon prénom en second, ma fille, Od…*" },
      { if: { has: "hector:aveu" }, text: "Hector se lève avant que tu aies fini. Il dit ce qu'il a fait, simplement, dans l'ordre, sans une excuse : la papeterie Roux, les brouillons, la plaque, le vrai codicille dans sa poche. Bérénice le regarde comme on regarde un frère qu'on vient de rencontrer." },
      "Hector écoute jusqu'au bout. Puis il fait sauter sa pièce une dernière fois, la rattrape, et la pose sur le guéridon, à côté des papiers, comme on pose une mise qu'on abandonne. « Je joue mal, dit-il. Je l'ai toujours su. C'est pour ça que je joue. »",
    ],
    choices: [
      { back: "S_aube" },
    ] },

  S_aube_fille: { act: "III", title: "Odile Aurore", place: "salon", second: true,
    fx: { flag: "odile:reconnue" },
    text: [
      "Tu dis qui est Odile Marchal.",
      { if: { has: "odile:fille" }, text: "Tu répètes ce que Jaume t'a dit au pied de la Flore, et Jaume, à la porte, hoche la tête à chaque phrase, comme on approuve un compte juste." },
      { if: { has: "odile:prenom" }, text: "Tu lis la copie de l'acte de baptême : *Odile Aurore. Marraine : Aurore Castellane.*" },
      { if: { has: "fine:temoin" }, text: "Fine, à la porte de l'office, dit d'une voix forte que la Rose du Jaume était maigre comme une trique jusqu'à la Saint-Joseph, et qu'elle avait une petite au sein à Pâques." },
      { if: { has: "odile:lettre" }, text: "Odile sort de son col la lettre du coffret, *Pour Odile. Après*, et la tend à Maître Brissac sans un mot. Il la lit. Il la lui rend." },
      { if: "enigme:p_journal", text: "Tu ouvres le carnet vert à la dernière page, et tu lis la vraie formule de l'Aurore, flacon par flacon, lettre par lettre : *Ma fille est Odile.*" },
      "Odile ne bouge pas. Elle regarde le portrait au-dessus de la cheminée, la jeune femme au bouquet, et pour la première fois tu vois ce que tu aurais dû voir hier : la même bouche, les mêmes yeux un peu trop grands, et cette ironie au coin des lèvres, qui ne doit rien au talent du peintre.",
    ],
    choices: [
      { back: "S_aube" },
    ] },

  S_aube_brissac: { act: "III", title: "A.", place: "salon", second: true,
    fx: { flag: "brissac:pere" },
    text: [
      { if: "enigme:p_lettres", text: "Tu poses devant Maître Brissac les quatre lettres nouées d'un ruban lilas." },
      { if: { has: "acte:reconnaissance" }, text: "Tu poses à côté le papier timbré jauni de la boîte de fer-blanc, avec ses deux lignes au crayon : *Pas encore. Maintenant, si tu veux.*" },
      "Il ne les ouvre pas. Il les connaît. Il pose la main dessus, à plat, comme on pose la main sur un livre saint pour jurer, et il reste ainsi un long moment, les yeux fermés.",
      "« J'avais vingt-cinq ans, dit-il enfin. J'étais le petit clerc du vieux Maître Aubanel. Elle en avait quarante-trois, une maison, une fortune, et pas la moindre envie d'un mari, encore moins d'un petit clerc. Elle m'a dit : *Anatole, tu feras un très bon notaire, et un père épouvantable. Fais le notaire.* » Il ouvre les yeux, et ils sont pleins d'eau. « J'ai fait le notaire. Trente et un ans. Tous les dimanches, je suis passé devant la maison du bas. »",
      "Odile a traversé le salon. Elle s'arrête devant le fauteuil. Elle ne dit rien. Elle tend la main, et elle la pose sur la sienne, sur les lettres.",
    ],
    choices: [
      { back: "S_aube" },
    ] },

  F_relecture: { act: "III", title: "La seconde lecture", place: "salon", end: true, second: true,
    fx: { flag: "fin:relecture" },
    text: [
      "Tu juges. Le soleil sort des collines au même instant, et il touche les champs d'iris, qui s'allument tous ensemble, violets, gris, blancs, des milliers de lames dressées dans la lumière.",
      { if: { has: "verdict:vrai" }, text: "Le vrai quatrième codicille est valable. La Bastide aux Iris, la Maison Castellane et le secret de l'Aurore vont à celle qui porte le prénom de la morte en second, sa fille, Odile. Maître Brissac dresse l'acte d'une main qui tremble pour la première fois en trente ans, et il fait trois pâtés, qu'il laisse." },
      { if: { all: [{ not: { has: "verdict:vrai" } }, { has: "faux:ecarte" }, { has: "odile:reconnue" }] }, text: "Le codicille de la chapelle est écarté, et le vrai ne se lit plus qu'en lambeaux, ou plus du tout. Mais le juge a dit qui est Odile, et Maître Brissac en prend acte : une fille reconnue hérite de sa mère, avant les neveux et les nièces. La Bastide est à elle. Hector et Bérénice gardent ce que les trois premiers codicilles ne leur ont pas pris, c'est-à-dire presque rien, et un peu plus que ce qu'ils méritaient." },
      { if: { all: [{ not: { has: "verdict:vrai" } }, { has: "faux:ecarte" }, { not: { has: "odile:reconnue" } }] }, text: "Le codicille de la chapelle est écarté. Sans dernier codicille, la loi reprend ses droits, et le bien se partage entre les héritiers du sang, Hector et Bérénice. Comme hier. Odile remet son chapeau gris." },
      { if: { all: [{ not: { has: "faux:ecarte" } }, { has: "odile:reconnue" }] }, text: "Le codicille de la chapelle reste debout, faute de preuve. Mais Odile est la fille de la morte, et la loi protège les enfants contre les testaments : la moitié du bien lui revient, quoi qu'écrive un neveu de la main de sa tante. Hector garde l'autre moitié, et la honte, qu'il porte avec élégance." },
      { if: { all: [{ not: { has: "faux:ecarte" } }, { not: { has: "odile:reconnue" } }, { not: { has: "verdict:vrai" } }] }, text: "Faute de preuve, le codicille de la chapelle reste valable, et Hector hérite de tout, comme hier. Tu as lu deux fois, et tu n'as pas mieux lu. Odile remet son chapeau gris." },
      { if: { has: "hector:confondu" }, text: "Hector ne sera pas poursuivi. Odile l'a demandé, d'une voix calme : *Elle aimait les devinettes. Il a seulement donné une mauvaise réponse.* Il part à midi, pour la province, avec ses gilets, ses dettes et sa pièce d'argent, que Bérénice lui a rendue sans un mot. Il fait le tour de la Bastide avant de monter en voiture, et il salue la Flore." },
      { if: { has: "berenice:temoin" }, text: "Bérénice garde la bibliothèque. On la trouvera, cet hiver, à lire Montaigne au coin du feu en levant les yeux au ciel toutes les trois pages. L'école des filles des cueilleuses ouvrira au printemps, dans la maison du bas, avec l'argent d'Odile et les livres de Bérénice. Ce sera, dit-on à Sauvebonne, la seule école du pays où l'on apprend à lire dans Rabelais." },
      { if: { has: "acte:reconnaissance" }, text: "Avant midi, Maître Brissac fait enregistrer à Sauvebonne un acte vieux de trente et un ans, sur un papier timbré qui n'a plus cours. Le receveur proteste. Le notaire paie l'amende sans discuter, et en redemande." },
      { if: { has: "brissac:pere" }, text: "Maître Brissac ne remonte pas en voiture avec toi. Il reste à la Bastide pour déjeuner, et puis pour souper, et puis on lui fait un lit dans la chambre bleue. Il a la goutte, dit-il, il ne peut pas voyager. Odile lui coupe sa viande, et il la laisse faire." },
      { if: { has: "odile:sait" }, text: "Le soir, Odile monte au grenier avec une bougie. Elle redescend les yeux rouges, et elle dit que c'est la poussière. Puis elle va au bureau, s'assoit devant l'orgue à parfums, débouche le flacon numéro un, l'Ambre, et commence à écrire." },
      "Tu reprends la route de Sauvebonne à pied, au milieu de la matinée, la chemise lilas sous le bras, vide. Le testament reste à la Bastide, à sa place. Le long de la route blanche, les iris ne sont plus une foule. Ce sont des fleurs. On les arrachera dans trois ans, et leurs racines sentiront enfin quelque chose.",
      "Tu as lu deux fois. C'est le métier, dirait Brissac. Il faut toujours lire deux fois.",
    ] },
};
