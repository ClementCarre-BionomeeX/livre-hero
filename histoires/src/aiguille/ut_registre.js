// L'Île Folle-Aiguille · side story « Le panier de la veuve Lesneven » (owes its question to Crime and Punishment: may
// one kill a harmful creature for the good of many, and what becomes of the one who has reckoned it out?). Act II, the
// mousse in the Basse-Fosse: Aurélien Cozanet, a former schoolmaster who now writes letters for the poor, gives the
// child two sous to carry a basket of almond cakes to the widow Lesneven, the pawnbroker who holds half the quarter in
// her ledger. The child smells bitter almond on the cakes, and understands. Cozanet, caught, explains his arithmetic:
// one death, forty families freed. The child throws the basket into the marsh and says nothing (ut:jette), warns the
// widow (ut:previent), or steals the ledger and burns it, so that the reason dies instead of the woman (ut:registre).
// Wired in A2m_bf.
module.exports = {
  passages: {
    UT_panier: { act: "II", title: "Le panier de la veuve Lesneven", place: "basse_fosse", ambiance: "ville",
      fx: { meet: "cozanet" },
      text: [
        "Il a une table pliante au coin de la rue des Cordiers, sous un auvent de toile, avec un encrier, une boîte de plumes, une pile de papier jaune et un écriteau : Lettres, suppliques, comptes. Trois sous la page. Aurélien Cozanet est un homme de trente ans, maigre, rasé de près, dans une redingote râpée qu'il brosse tous les matins avec un soin désespéré. Il a été maître d'école, dit-on, avant que l'école ferme. Il écrit pour les gens de la Basse-Fosse les lettres qu'ils ne savent pas écrire, et il les écrit bien.",
        "Il t'appelle, en te voyant passer. Il a un panier d'osier sur sa table, couvert d'un linge blanc. Il te demande si tu veux gagner deux sous. Il s'agit de porter ce panier rue du Puits-Salé, à la maison à volets gris, chez la veuve Lesneven. De la part d'un débiteur reconnaissant, dit-il. Sans nom. Elle aime les douceurs, ajoute-t-il, en souriant d'un sourire qui ne monte pas jusqu'aux yeux.",
        "Tout le monde, à la Basse-Fosse, connaît la veuve Lesneven. Elle prête sur gages. Les montres, les alliances, les outils, les draps, les filets. À six sous par livre et par semaine. Elle tient tout dans un grand registre relié de cuir noir, qu'elle garde sous son oreiller. On dit que la moitié du quartier y est inscrite. On dit qu'elle a fait vendre la barque de trois veuves de pêcheurs l'hiver dernier. On dit beaucoup de choses. On paie.",
      ],
      choices: [{ label: "Prendre le panier", to: "UT_amande" }] },
    UT_cahier: { act: "II", title: "Le panier de la veuve Lesneven", place: "basse_fosse", ambiance: "ville",
      text: [
        "Le cahier est ouvert entre vous, à côté de l'encrier, et Cozanet ne fait rien pour le cacher. C'est un cahier d'écolier, à couverture bleue, réglé à l'encre rouge, comme ceux qu'il faisait remplir autrefois à ses élèves. Il est rempli d'une écriture de maître, droite, égale, sans une rature, de celles qui font honte aux enfants qui en ont.",
        "Des colonnes. Un nom de famille par ligne. Le nombre d'enfants. L'objet mis en gage : un drap de noces, une montre de grand-père, des outils de calfat, un violon. La somme prêtée. L'intérêt par semaine. L'intérêt de l'intérêt. Le total à ce jour. Quarante et une lignes, soigneusement additionnées en bas de page, et reportées en haut de la page suivante, comme dans un vrai livre de comptes. La dernière page est intitulée, en lettres rondes : « Hypothèse de la mort de V. L. »",
        "En dessous, une seule ligne, longue, d'une encre plus fraîche : la veuve a soixante-dix-huit ans, une santé de fer, elle peut vivre encore douze ans ; en douze ans, elle aura tiré des quarante et une familles une somme qu'il a calculée au liard près, et qui ferait vivre une paroisse. Le chiffre est souligné deux fois. On sent, au trait, la main d'un homme qui a trouvé la preuve qu'il cherchait.",
        "Tout en bas de la page, il y a une quarante-deuxième ligne, rayée d'un trait si appuyé que la plume a crevé le papier. On lit encore, sous la rature : « Cozanet A., une alliance d'or, à la mort de ma femme. » Tu lèves les yeux. Cozanet regarde la ligne rayée, lui aussi. Il ne dit rien. Il n'a pas besoin de dire qu'il ne s'est pas compté.",
      ],
      choices: [
        { back: "UT_amande", label: "Revenir au tabouret, en face de Cozanet" }
      ] },
    UT_boutique: { act: "II", title: "Le panier de la veuve Lesneven", place: "basse_fosse", ambiance: "ville",
      text: [
        "Tu laisses le panier sur la table, et Cozanet ne le retient pas. La boutique de la veuve Lesneven est au fond d'une cour, derrière un porche bas, et sa vitrine donne sur la rue par une seule fenêtre grillagée, si sale qu'il faut coller le front au verre pour voir dedans. Tu colles le front.",
        "Dedans, c'est une caverne. Des objets jusqu'au plafond, entassés, étiquetés d'un numéro au bout d'une ficelle : des pendules, des bassines de cuivre, des fers à repasser, des bottes, un berceau, une harpe sans cordes, des montres par dizaines, pendues à des clous comme des poissons au sel. Les pendules sont toutes arrêtées, chacune à une heure différente. On dirait le grenier où le temps de tout un quartier est venu mourir.",
        "Au milieu, derrière un comptoir à grille, une très petite femme en noir, aux mains pareilles à des racines, compte des sous dans une soucoupe, un par un, avec ses lèvres. Une fille entre, maigre, un châle sur le bras. La veuve prend le châle, le palpe, le flaire, le retourne, dit un prix. La fille dit quelque chose. La veuve répète le prix, plus bas, sans lever les yeux. La fille prend les sous et sort sans un mot, les épaules nues.",
        "Puis un gros chat roux saute sur le comptoir. La veuve le regarde, et son visage change d'un coup : il fond, il rajeunit, il devient presque tendre. Elle sort de sa poche un croûton de gâteau, un gâteau doré, aux amandes, et le lui émiette dans la paume, en lui parlant tout bas, comme on parle à un enfant. Le chat mange. Elle sourit. Tu décolles ton front du carreau. Il y laisse une trace ronde dans la poussière.",
      ],
      choices: [
        { back: "UT_amande", label: "Revenir chez Cozanet, où le panier attend" }
      ] },
    UT_amande: { act: "II", title: "Le panier de la veuve Lesneven", place: "basse_fosse", ambiance: "ville",
      text: [
        { first: true, text: "Le panier est léger. Tu marches. Au coin de la rue du Puits-Salé, parce que tu as faim, parce que tu as seize ans et qu'un panier de gâteaux est une tentation de seize ans, tu soulèves le linge. Ce sont des gâteaux aux amandes, petits, dorés, une douzaine, rangés sur une serviette. Ils sentent fort. Trop fort. Une odeur d'amande amère, de noyau de pêche écrasé, qui pique le nez comme le vinaigre." },
        { first: true, text: "Tu sais ce que c'est. Ta mère, quand tu étais petit{e}, t'a appris à ne jamais manger les amandes amères qu'on trouve parfois dans les sacs, parce qu'une poignée suffit à tuer un enfant. Celles-ci, on ne les a pas trouvées par hasard. Il y en a assez, dans une douzaine de gâteaux, pour une vieille femme gourmande. Tu restes au coin de la rue, le panier à la main, le cœur battant à grands coups dans tes oreilles." },
        { first: true, text: "Tu reviens sur tes pas. Cozanet te voit arriver avec le panier. Il comprend avant que tu ouvres la bouche. Il ne s'enfuit pas. Il pose sa plume. Il te fait signe de t'asseoir sur le tabouret des clients, de l'autre côté de la table, et il croise les mains, comme un maître d'école qui va expliquer une règle de trois." },
        { first: true, text: "« Quarante et une familles, dit-il. Je les ai comptées. J'écris leurs lettres, je connais leurs dettes, je sais ce qu'elles doivent, et à qui. Quarante et une familles qui donnent chaque semaine à cette femme le pain de leurs enfants, pour payer l'intérêt d'un intérêt. Elle n'a pas d'héritier. À sa mort, le registre ira au feu, ou à personne, et les gages reviendront à ceux qui les réclameront. Une vie contre quarante et une. Une vie mauvaise contre quarante et une. Fais le compte. »" },
        { first: true, text: "Il dit qu'il ne la hait pas. Il dit qu'il a fait le calcul, simplement, et que le calcul est juste, et qu'un homme qui sait qu'un calcul est juste et qui ne fait rien est un lâche. Il dit qu'il ne t'a pas choisi{e} au hasard : un mousse qui embarque dans trois jours, qu'on ne reverra jamais. Il dit qu'il en a honte. Il dit qu'il n'avait pas le courage de porter le panier lui-même. Il te regarde, et ses yeux sont ceux d'un homme qui n'a pas dormi depuis une semaine. Il demande ce que tu vas faire." },
        { again: true, text: "Cozanet attend, les mains croisées sur la table, et le panier est posé entre vous, sous son linge." }
      ],
      choices: [
        { label: "Regarder le cahier ouvert sur la table de Cozanet", to: "UT_cahier", hide: { seen: "UT_cahier" } },
        { label: "Aller voir, de la rue, la boutique de la veuve, avant de répondre", to: "UT_boutique", hide: { seen: "UT_boutique" } },
        { label: "Jeter le panier dans le marais, et ne rien dire à personne", fx: { flag: "ut:jette" }, to: "UT_jette" },
        { label: "Aller prévenir la veuve Lesneven, et lui montrer les gâteaux", fx: { flag: "ut:previent" }, to: "UT_previent" },
        { label: "Voler le registre sous l'oreiller de la veuve, et le brûler", fx: { flag: "ut:registre" }, to: "UT_registre" },
      ] },
    UT_jette: { act: "II", title: "Le panier de la veuve Lesneven", place: "basse_fosse", ambiance: "ville",
      text: [
        "Tu te lèves, tu prends le panier, et tu marches jusqu'au bord du marais, derrière les fosses aux chiens. Cozanet te suit à distance. Tu jettes les gâteaux un par un dans l'eau noire, où ils flottent un moment, dorés, absurdes, avant de s'enfoncer. Puis tu jettes le panier. Puis le linge. Tu te retournes. Cozanet est là, les bras ballants.",
        "Tu lui dis que tu ne diras rien. Tu lui dis que tu ne sais pas faire le compte, toi, que tu ne sais compter que les nœuds et les biscuits, mais que tu sais qu'on ne demande pas à un enfant de porter la mort dans un panier. Tu lui dis qu'un homme qui fait faire son calcul par un autre n'est pas sûr de son calcul. Il baisse la tête. Il dit que c'est la meilleure réfutation qu'on lui ait jamais faite, et qu'elle vient d'un mousse.",
        "Le lendemain, en passant rue des Cordiers, tu vois la table pliante, l'encrier, la pile de papier jaune. Cozanet écrit une lettre pour une vieille femme qui lui dicte en pleurant. Il lève les yeux vers toi, une seconde. Il a l'air d'un homme qui a dormi. Il te fait un signe de tête, et se remet à écrire.",
        "La veuve Lesneven prête toujours, à six sous la livre. Les quarante et une familles paient toujours. Rien n'a changé dans la Basse-Fosse, sinon une douzaine de gâteaux au fond du marais, et un homme qui a renoncé à un calcul. Tu te demandes, certaines nuits, ce qu'il aurait fallu faire, à la place. Tu ne trouves pas. Tu te dis que tu as au moins refusé de te tromper de la façon qu'on te proposait.",
      ],
      choices: [{ label: "Repartir chercher des bras pour Gobert", fx: { quest: "UT" }, back: "A2m_bf" }] },
    UT_previent: { act: "II", title: "Le panier de la veuve Lesneven", place: "basse_fosse", ambiance: "ville",
      text: [
        "Tu portes le panier rue du Puits-Salé. La maison aux volets gris sent la cire, le camphre et le vieux linge. La veuve Lesneven est une petite femme ronde, en bonnet de dentelle, assise derrière un comptoir couvert de montres étiquetées, d'alliances enfilées sur un fil, de rabots, de compas, de couteaux. Elle a des yeux noirs, vifs, très gais. Elle te demande ce que tu lui apportes, et si c'est à vendre.",
        "Tu poses le panier. Tu soulèves le linge. Tu lui dis de sentir. Elle sent. Elle comprend en une seconde, beaucoup plus vite que toi. Elle ne crie pas. Elle recouvre le panier, elle le pousse au bout du comptoir, et elle te demande, d'une voix calme, qui. Tu dis que tu ne diras pas qui. Tu dis que tu es venu{e} pour qu'elle vive, pas pour qu'on pende quelqu'un. Elle te regarde longtemps, avec ses yeux gais.",
        "Puis elle rit. Un petit rire sec. Elle dit qu'elle sait qui. Elle dit qu'il n'y a qu'un homme dans la Basse-Fosse qui sache faire des gâteaux aussi jolis, parce qu'il a appris la pâtisserie chez sa mère avant d'apprendre le latin. Elle dit qu'elle a son nom dans le registre : une montre en argent, gagée il y a deux ans, jamais dégagée. Elle dit qu'elle ne le dénoncera pas. Elle dit qu'un homme qui veut vous tuer avec des gâteaux aux amandes vous rend un hommage, d'une certaine façon.",
        "Elle sort une montre en argent d'un tiroir, et te la tend. Elle te dit de la lui rapporter. Gratuitement. De sa part. Sans un mot. Elle dit que c'est le meilleur moyen qu'elle connaisse de faire peur à un homme. Tu rapportes la montre à Cozanet. Il la prend, il l'ouvre, il voit à l'intérieur du couvercle le portrait d'une femme jeune. Il se met à pleurer. Tu ne sais pas si la veuve Lesneven a fait une bonne action ou une cruauté. Tu soupçonnes qu'elle ne le sait pas non plus, et que ça l'amuse.",
      ],
      choices: [{ label: "Repartir chercher des bras pour Gobert", fx: { quest: "UT" }, back: "A2m_bf" }] },
    UT_registre: { act: "II", title: "Le panier de la veuve Lesneven", place: "basse_fosse", ambiance: "ville",
      text: [
        "Tu dis à Cozanet que, si c'est le registre qui fait le mal, c'est le registre qui doit mourir. Il te regarde, bouche bée. Il dit que c'est impossible : elle dort dessus. Tu dis que les vieilles femmes vont à la messe. Le dimanche, à sept heures, la veuve Lesneven va à la première messe, à la chapelle des Cordiers, avec son bonnet de dentelle, et elle laisse sa servante, qui dort aussi tard qu'elle peut. Tu le sais, parce que tu l'as demandé à trois enfants des rues pour un sou chacun.",
        "Le dimanche matin, tu entres par la fenêtre de la cour, qui ferme mal. La chambre sent le camphre. Le registre est sous l'oreiller, gros comme une bible, relié de cuir noir, avec un fermoir de cuivre. Tu le prends. Il est lourd de quarante et une familles. Tu ressors par la fenêtre. Tu cours jusqu'au marais. Cozanet t'attend, avec un briquet. Il n'ose pas l'allumer. C'est toi qui le fais.",
        "Le registre brûle mal, comme tous les livres épais. Il faut l'ouvrir, arracher les pages par poignées, les tordre, les jeter dans la flamme. Tu vois passer des noms, des sommes, des objets : une alliance, deux filets, un rabot, une montre d'argent. Cozanet reconnaît la sienne. Il ne dit rien. Quand c'est fini, il ne reste que la reliure, noire, racornie. Tu la jettes dans l'eau.",
        "La Basse-Fosse sait, le soir même, que le registre de la veuve a brûlé. Elle crie, elle va au guet, elle accuse tout le monde. Mais personne ne se souvient plus de ce qu'il doit. Les gages restent dans sa boutique, mais les dettes n'existent plus nulle part. On rit, dans les tavernes. On boit à la santé du voleur. Tu bois avec eux une bière qu'un calfat te paie, sans savoir à qui il trinque.",
        "Puis, en rentrant, tu passes devant la maison aux volets gris, et tu vois la veuve Lesneven assise sur son seuil, seule, dans la nuit, son bonnet de dentelle de travers. Elle pleure. Une vieille femme qui pleure sur un livre de comptes. Tu as volé une femme pour sauver quarante et une familles, et tu as appris ce soir-là que le calcul était juste, et que ça ne suffisait pas à te faire dormir. Cozanet, lui, dort très bien. Tu trouves ça injuste. Tu trouves ça instructif.",
      ],
      choices: [{ label: "Repartir chercher des bras pour Gobert", fx: { quest: "UT" }, back: "A2m_bf" }] },
  },
  extras: {
    people: {
      cozanet: { name: "Aurélien Cozanet", aka: ["l'écrivain public", "Cozanet"], qui: "Ancien maître d'école, écrivain public au coin de la rue des Cordiers, à la Basse-Fosse." },
    },
    quests: [
      { id: "UT", act: "II", kind: "annexe", title: "Le panier de la veuve Lesneven", start: "UT_panier", doit: "crimechatiment", echo: ["ut:jette", "ut:previent", "ut:registre"] },
    ],
  },
};
