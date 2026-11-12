// Act III · the trial of the founders, in the great square of Valcendre. The child enters the frozen day of each of the
// five (the Tower, the Sheaf, the Boat, the Stag, the Quill-and-Key) and lives one hour as him or her ("tu" is then the
// founder). After each memory, the verdict: keep the founder frozen here (the world never learns) or give him back to the
// world (he melts, and up there his descendants remember what he did): proces:<id>=garde|rendu. Then the child speaks.
var A = { act: "III", noLead: true };
function P(o) { return Object.assign({}, A, o); }
var FOUNDERS = ["tour", "gerbe", "barque", "cerf", "plume"];
function done(f) { return { has: "proces:" + f }; }
function rendu(f) { return { has: "proces:" + f + "=rendu" }; }
function verdict(f, garde, rend) {
  return [
    { label: "Le garder ici, dans sa glace. Que le monde ne sache jamais", fx: { flag: ["proces:" + f, "proces:" + f + "=garde"], ep: ["perso", 800] }, to: garde },
    { label: "Le rendre au monde. Qu'il fonde, et que là-haut on se souvienne", fx: { flag: ["proces:" + f, "proces:" + f + "=rendu"], ep: ["perso", 1200] }, to: rend },
  ];
}
module.exports = {
  III_p_place: P({ title: "La grand-place", place: "valcendre", hub: true,
    text: [
      { first: true, text: "Toute la ville est venue. Ils sont debout autour de la grand-place, serrés, des milliers, en silence, les enfants sur les épaules des pères. Ardaël est assis sur les marches du palais, seul, et sa couronne de givre lui goutte sur le front. Il ne regarde pas les statues. Il te regarde, toi." },
      { first: true, text: "Le Sans-Nom te mène jusqu'au socle noir. « Pose la main sur la glace, dit-il. Tu tomberas dedans. Une heure, là-bas. Ici, ça ne dure qu'une respiration. Et quand tu reviendras, ils voudront savoir. »" },
      "Les cinq statues attendent, dos à dos. Dans la glace, leurs yeux bougent.",
      { if: { any: [rendu("tour"), rendu("gerbe"), rendu("barque"), rendu("cerf"), rendu("plume")] }, text: "Là où tu as rendu quelqu'un au monde, il n'y a plus qu'une flaque sur la pierre noire, et la foule s'écarte pour ne pas marcher dedans." },
    ],
    choices: [
      { label: "L'homme à la tour", hide: done("tour"), to: "III_p_tour" },
      { label: "La femme à la gerbe", hide: done("gerbe"), to: "III_p_gerbe" },
      { label: "L'homme à la barque", hide: done("barque"), to: "III_p_barque" },
      { label: "Le chevalier au cerf", hide: done("cerf"), to: "III_p_cerf" },
      { label: "L'homme à la plume et à la clé", hide: done("plume"), to: "III_p_plume" },
      { label: "Un vieil homme à la lance sans fer", hide: { any: [{ not: done("tour") }, { seen: "III_t_tour" }] }, to: "III_t_tour" },
      { label: "Un berger, au bord de la place", hide: { any: [{ not: done("gerbe") }, { seen: "III_t_gerbe" }] }, to: "III_t_gerbe" },
      { label: "Une femme au châle, qui regarde l'homme à la barque", hide: { any: [{ not: done("barque") }, { seen: "III_t_barque" }] }, to: "III_t_barque" },
      { label: "Un garçon à la fronde, devant le chevalier", hide: { any: [{ not: done("cerf") }, { seen: "III_t_cerf" }] }, to: "III_t_cerf" },
      { label: "Une très vieille femme, appuyée sur deux enfants", hide: { any: [{ not: done("plume") }, { seen: "III_t_plume" }] }, to: "III_t_plume" },
      { label: "Te retourner vers la foule, et parler", if: { all: FOUNDERS.map(done) }, why: "Tu n'as pas tout vu.", to: "III_p_parole", big: true },
    ] }),

  // ---- La Tour: Aldric de la Tour, war leader, ancestor of the crown of Esquarre
  III_p_tour: P({ title: "La Tour", place: "valcendre",
    text: [
      "Tu poses la main sur la glace. Le froid te prend le poignet, puis tout le bras, puis il n'y a plus de froid.",
      "Tu es dans une tente. Il fait chaud. Tu as cinquante ans, des épaules de bœuf, un genou qui te fait mal quand il va pleuvoir, et il va pleuvoir. Tu t'appelles Aldric de la Tour. Tu as faim, et tu remets le repas à plus tard, parce que les autres attendent.",
      "Sur la table, une carte. La vallée, la rivière, le village aux tours fines qu'ils appellent Valcendre. Tu l'as dessinée toi-même, en trois ans de commerce et de visites, à leur table, à leurs fêtes. Tu sais où sont leurs greniers. Tu sais combien ils ont de lances, et c'est presque rien.",
      "Autour de la table, les quatre autres. La grosse Berthe, qui ne dit rien. Osric, le passeur, qui regarde ses mains. Le petit de Brenne, qui a dix-neuf ans et brûle d'envie. Et le frère à la plume, qui écrit tout ce qu'on dit.",
    ],
    choices: [{ label: "Parler, puisque c'est à toi de parler", to: "III_p_tour2" }] }),

  III_p_tour2: P({ title: "Le conseil", place: "valcendre",
    text: [
      "Tu parles. Tu entends ta voix, une voix calme, une voix de bon père. Tu dis : nos gens ont faim. Tu dis : cette terre est la meilleure du nord et ils ne la labourent pas, ils la chantent. Tu dis : ils sont peu, et l'hiver vient. Tu ne dis pas une seule fois le mot tuer. Tu dis : il faut que ce soit fait vite, et une fois.",
      "Tu sens ce qu'il sent, et c'est le pire. Il n'a pas de haine. Il a mangé à leur table la semaine dernière, il a fait danser une de leurs filles, il a trouvé leur musique belle. Il a fait le compte, c'est tout. Le compte est juste. Il dort bien.",
      "Le frère à la plume lève la tête : « Et les enfants ? »",
      "Tu sens la réponse monter dans la gorge d'Aldric. Tu essaies de la retenir, de toutes tes forces. Elle sort quand même, de sa voix calme : « Ceux qui se souviendront, nous les aurons sur le dos dans vingt ans. »",
      "Personne ne répond. Berthe se lève, et sort de la tente. Elle revient un peu plus tard. Elle ne dit toujours rien.",
    ],
    choices: [{ label: "Lâcher la glace", to: "III_p_tour3" }] }),

  III_p_tour3: P({ title: "Ce que tu as vu", place: "valcendre",
    text: [
      "Tu es sur la place, à genoux, la main brûlée de froid. Une respiration a passé. La foule attend.",
      "Tu sais qui tu as vu : l'homme le plus raisonnable du monde. Ses descendants portent la couronne d'Esquarre. Ils ont mis une tour sur leur sceau, au-dessus de la plume et de la clé, et ils ont gouverné trois cents ans en faisant des comptes justes.",
      { with: "ysolde", text: "Ysolde est derrière toi. « Isaure, dit-elle à mi-voix. Elle a son menton. Elle a la même façon de dire vite, et une fois. »" },
      "Si tu le rends au monde, la reine se réveillera un matin en sachant d'où vient sa couronne. Tout Esquarre le saura.",
    ],
    choices: verdict("tour", "III_p_tour_garde", "III_p_tour_rendu") }),

  III_p_tour_garde: P({ title: "La glace", place: "valcendre",
    text: ["Tu te relèves et tu dis : « Qu'il reste. » Les yeux d'Aldric, dans la glace, se ferment. La foule ne dit rien. Tu ne sais pas si c'est une punition ou une grâce. Tu crois que lui non plus."],
    choices: [{ label: "Revenir vers les autres statues", to: "III_p_place" }] }),

  III_p_tour_rendu: P({ title: "La flaque", place: "valcendre",
    text: ["Tu dis : « Qu'il parte. » La glace d'Aldric se met à couler, d'abord lentement, puis d'un coup, avec un bruit d'averse. Il ne reste qu'une flaque, et dans la flaque, un instant, le reflet d'une couronne. Quelque part, très loin, très haut, une reine d'Esquarre se réveille en sursaut et ne sait pas pourquoi."],
    choices: [{ label: "Revenir vers les autres statues", to: "III_p_place" }] }),

  // ---- La Gerbe: Berthe, the grain mother, from whom the valley villages descend
  III_p_gerbe: P({ title: "La Gerbe", place: "valcendre",
    text: [
      "Tu poses la main sur la glace, et tu es une femme. Lourde, essoufflée, des mains rouges et des avant-bras de pétrisseuse. Tu t'appelles Berthe. On t'appelle la Gerbe, parce que tu as nourri trois villages avec un champ, l'année de la grande faim.",
      "Il fait nuit. Tu n'es pas dans la vallée. Tu es sur la colline, en arrière, avec les chariots, les femmes, les enfants, les bœufs. Quatre cents personnes qui attendent de descendre quand ce sera fini. Ta famille, celle des autres. Ils ont faim. Tu as promis qu'ils n'auraient plus faim.",
      "En bas, dans la vallée, une lueur. Puis dix. Puis toute la vallée. Le vent apporte l'odeur, puis les cris.",
    ],
    choices: [{ label: "Regarder", to: "III_p_gerbe2" }] }),

  III_p_gerbe2: P({ title: "La colline", place: "valcendre",
    text: [
      "Une petite fille te tire par la manche. « C'est quoi, maman, la lumière ? » Tu la prends dans tes bras. Tu lui caches les yeux contre ton épaule. Tu ne caches pas les tiens. Berthe regarde jusqu'au bout. C'est la seule chose qu'elle se permet.",
      "Au matin, vous descendez. Les chariots roulent sur la cendre encore chaude. Les hommes de Brenne ont déjà creusé la fosse. Berthe fait semer l'orge le jour même, dans la cendre, parce que la cendre, c'est bon pour la terre. Elle le sait. Elle est la meilleure paysanne du monde.",
      "Elle donne un nom à chaque champ. Elle donne un nom au premier hameau, au bord de la petite rivière, sous la lune pâle de cette nuit-là : Sauvelune.",
    ],
    choices: [{ label: "Lâcher la glace", to: "III_p_gerbe3" }] }),

  III_p_gerbe3: P({ title: "Ce que tu as vu", place: "valcendre",
    text: [
      "Tu es sur la place. Tu as les joues mouillées et tu ne sais pas si ce sont les larmes de Berthe ou les tiennes.",
      "Sauvelune. Le moulin, le temple, le pré des foins, la Sauve où Pim a appris à nager. Tout ça a poussé dans la cendre de ceux qui se tiennent autour de toi, en ce moment, et qui te regardent.",
      { if: { souv: "enfant:chanson" }, text: "La chanson des foins te revient : « Fauche le pré, fauche la nuit… » Tu comprends, pour la première fois, ce qu'on fauchait la nuit." },
      "Si tu la rends au monde, tous les villages de la vallée sauront sur quoi ils ont semé. Ce ne sont pas des seigneurs. Ce sont des meuniers, des forgerons, des enfants. Ils n'ont rien fait. Ils mangent.",
    ],
    choices: verdict("gerbe", "III_p_gerbe_garde", "III_p_gerbe_rendu") }),

  III_p_gerbe_garde: P({ title: "La glace", place: "valcendre",
    text: ["« Qu'elle reste. » Tu le dis pour Sauvelune, et tu le sais. Berthe, dans la glace, baisse les yeux, et ce n'est pas de la honte, c'est du soulagement. Un vieil Orsan, au premier rang, crache par terre. Un autre lui pose la main sur l'épaule."],
    choices: [{ label: "Revenir vers les autres statues", to: "III_p_place" }] }),

  III_p_gerbe_rendu: P({ title: "La flaque", place: "valcendre",
    text: ["« Qu'elle parte. » La glace de Berthe fond lentement, comme du beurre au soleil. Dans la vallée des Cendres, cette nuit, des paysans rêveront d'une lueur sur une colline, et d'une petite fille qui demande ce que c'est. Au matin, ils ne sauront pas pourquoi ils ont envie de pleurer en semant."],
    choices: [{ label: "Revenir vers les autres statues", to: "III_p_place" }] }),

  // ---- La Barque: Osric the ferryman, half-Orsan, who guided the boats in exchange for his wife's life
  III_p_barque: P({ title: "La Barque", place: "valcendre",
    text: [
      "Tu poses la main sur la glace. Tu es dans une barque, à l'avant, une perche dans les mains. Tu t'appelles Osric. Tu as trente ans. Ta mère était de Valcendre, ton père de la côte, et tu es le seul homme au monde à connaître les deux langues et tous les bancs de sable de la rivière.",
      "Derrière toi, dans la nuit, trente barques. Pas une lanterne. Des hommes en armes, couchés au fond, qui respirent fort. Tu les guides au son, à l'odeur, à la couleur de l'eau. Tu es très bon.",
      "Dans ta poche, un papier. Le frère à la plume l'a écrit pour toi, Aldric l'a signé. *La maison d'Osric le passeur sera épargnée, et tous ceux qui y seront.* Ta femme est dans cette maison. Ta femme s'appelle Iselde. Elle chante. Elle ne sait pas.",
    ],
    choices: [{ label: "Pousser sur la perche", to: "III_p_barque2" }] }),

  III_p_barque2: P({ title: "La maison du passeur", place: "valcendre",
    text: [
      "Vous accostez. Les hommes sautent. Tu cours. Tu cours vers ta maison, au bout du quai, avec le papier dans la main, et tu cries les mots qu'on t'a appris à crier, dans leur langue à eux : *ici, épargnée, signé.*",
      "Ta maison est déjà en feu. Les hommes de Brenne sont arrivés par l'autre rive. Ils ne savaient pas lire. Ou ils savaient. Ou ça n'avait aucune importance.",
      "Iselde est sur le seuil. Elle te voit. Elle voit le papier, elle voit les barques derrière toi, et elle comprend, et c'est ça que tu emportes dans la glace depuis trois cents ans : pas sa mort. Le moment où elle a compris.",
    ],
    choices: [{ label: "Lâcher la glace", to: "III_p_barque3" }] }),

  III_p_barque3: P({ title: "Ce que tu as vu", place: "valcendre",
    text: [
      "Tu es sur la place. Tu tiens encore, dans ta main fermée, un papier qui n'existe pas.",
      "Osric a vécu quarante ans de plus. Il a fondé une compagnie de bateliers, puis une ville, au bord de la mer, avec un quai pour chaque barque. Vasselin. Il ne s'est jamais remarié. Il a payé des chanteurs pour chanter, chaque soir, sous sa fenêtre, des chansons qu'il ne comprenait pas.",
      { with: "pie", text: "Pie, à côté de toi, dit tout bas : « Un sauf-conduit. Il avait un sauf-conduit. » Il a la voix de quelqu'un qui en a fabriqué beaucoup." },
      "Si tu le rends au monde, Vasselin saura d'où vient son premier quai. Et quelque part ici, peut-être, une femme qui s'appelle Iselde cessera d'attendre sur un seuil.",
    ],
    choices: verdict("barque", "III_p_barque_garde", "III_p_barque_rendu") }),

  III_p_barque_garde: P({ title: "La glace", place: "valcendre",
    text: ["« Qu'il reste. » Osric, dans la glace, ne bouge pas. Il regarde toujours vers le quai. Une femme dans la foule, une femme en robe bleue, se détourne et s'en va par une ruelle, sans se presser, et tu ne la revois pas."],
    choices: [{ label: "Revenir vers les autres statues", to: "III_p_place" }] }),

  III_p_barque_rendu: P({ title: "La flaque", place: "valcendre",
    text: ["« Qu'il parte. » La glace d'Osric se fend en deux, proprement, comme une coque qui touche un roc. L'eau coule entre les pavés, vers la foule, et une femme en robe bleue s'avance, s'agenouille, et trempe la main dedans. Elle reste comme ça longtemps. Puis elle se relève, et elle sourit, et elle te fait un signe de tête, et elle s'en va vers les portes de la ville."],
    choices: [{ label: "Revenir vers les autres statues", fx: { flag: "iii:iselde" }, to: "III_p_place" }] }),

  // ---- Le Cerf: Raoul de Brenne, nineteen, who went in first with the fire. Ysolde's ancestor.
  III_p_cerf: P({ title: "Le Cerf", place: "valcendre",
    text: [
      "Tu poses la main sur la glace, et tu as dix-neuf ans. Tu t'appelles Raoul de Brenne. Tu portes un cerf sur l'écu, le cerf que ton grand-père a pris à la chasse du roi. Tu as une épée neuve, et tu ne t'es jamais battu.",
      "Tu as peur. Tu as tellement peur que tu as envie de rire. Le frère à la plume vous a dit, ce soir, à la messe : ils ne sont pas comme nous, ils parlent aux morts, ils volent les noms des enfants dans les berceaux. Tu le crois à moitié. La moitié suffit.",
      "Tu sautes de la barque. Tu as une torche dans la main gauche. Devant toi, une maison ronde, une porte ouverte, de la lumière, et une voix qui chante, une voix de vieille femme, une liste, toujours la même mélodie, des noms.",
    ],
    choices: [
      { label: "Retenir son bras", to: "III_p_cerf2" },
      { label: "Le laisser faire. Regarder", to: "III_p_cerf2" },
    ] }),

  III_p_cerf2: P({ title: "La maison ronde", place: "valcendre",
    text: [
      "Ça ne change rien. Tu n'es qu'un passager. Raoul entre. La vieille femme est assise près du feu, et elle chante les noms, et elle ne s'arrête pas quand il entre. Elle le regarde et elle continue. Elle chante plus fort.",
      "Il crie quelque chose, pour qu'elle se taise. Elle continue. Il frappe.",
      "Ensuite c'est plus facile. C'est ça que tu découvres, dans son corps, et que tu voudrais ne jamais avoir su : le premier coup est le seul qui coûte. Le reste de la nuit, il ne compte plus. Il a la torche, il a l'épée, et chaque fois qu'une voix chante des noms, il va vers elle.",
      "À l'aube, il est assis sur un muret, couvert de suie. Il a enlevé son casque. Il a le visage d'un garçon. Il pleure, et il ne sait pas pourquoi, et il se jure de ne jamais en parler, et il tient parole.",
    ],
    choices: [{ label: "Lâcher la glace", to: "III_p_cerf3" }] }),

  III_p_cerf3: P({ title: "Ce que tu as vu", place: "valcendre",
    text: [
      "Tu es sur la place. Tu as l'odeur de la suie dans le nez, et elle ne part pas.",
      "Les Brenne ont changé d'armes, deux générations plus tard. Le cerf est devenu un loup sur une tour. Personne n'a jamais su pourquoi. Personne n'a jamais demandé.",
      { with: "ysolde", text: "Ysolde a tout vu. Tu ne sais pas comment, mais elle a vu : elle s'est approchée pendant que tu étais dedans, elle a posé la main sur ton épaule, et la glace l'a prise avec toi. Elle est blanche. Elle a la main sur son épée, et elle la serre, et elle ne la tire pas. « Il avait dix-neuf ans, dit-elle. Moi, à Lisse, j'en avais vingt-neuf. Je n'ai pas d'excuse. »" },
      { without: "ysolde", text: "Tu penses à Ysolde, quelque part là-haut, avec l'épée de son père, un loup sur une tour, et qui ne sait pas." },
      "Si tu le rends au monde, la maison de Brenne saura. La dernière de la maison de Brenne, c'est Ysolde.",
    ],
    choices: verdict("cerf", "III_p_cerf_garde", "III_p_cerf_rendu") }),

  III_p_cerf_garde: P({ title: "La glace", place: "valcendre",
    text: [
      "« Qu'il reste. » Raoul, dans la glace, a toujours le visage d'un garçon qui pleure sur un muret.",
      { with: "ysolde", text: "Ysolde se tourne vers toi. « Tu l'as fait pour moi, dit-elle. Ne le fais plus. » Elle n'est pas en colère. Elle est fatiguée." },
    ],
    choices: [{ label: "Revenir vers les autres statues", fx: { conf: { ysolde: -5 } }, to: "III_p_place" }] }),

  III_p_cerf_rendu: P({ title: "La flaque", place: "valcendre",
    text: [
      "« Qu'il parte. » La glace de Raoul fond d'un coup, comme du givre sous une paume. Il ne reste qu'une flaque, et dans la flaque, un écu au cerf, qui coule lui aussi.",
      { with: "ysolde", text: "Ysolde s'agenouille au bord. Elle ne touche pas l'eau. « Bien, dit-elle. Je saurai. Tout le monde saura. Et on verra ce que vaut un nom, quand on sait ce qu'il y a dessous. »" },
    ],
    choices: [{ label: "Revenir vers les autres statues", fx: { conf: { ysolde: 10 }, flag: "ysolde:sait_cerf" }, to: "III_p_place" }] }),

  // ---- La Plume et la Clé: Frère Anselin, first Chancellor, who wrote every name before crossing it out
  III_p_plume: P({ title: "La Plume et la Clé", place: "valcendre",
    text: [
      "Tu poses la main sur la glace. Tu as froid. Tu as toujours froid. Tu t'appelles Frère Anselin, tu as quarante ans, et tu es assis dans une grange, au milieu de la vallée brûlée, avec un registre neuf sur les genoux.",
      "Devant toi, en file, les prisonniers. Ceux qu'on a gardés pour la fin. Un par un, on te les amène, et tu leur demandes leur nom, et ils te le disent, et tu l'écris. Puis tu leur demandes les noms qu'ils portent, les leurs, ceux de leurs morts, les cent noms que chaque Orsan porte. Ils ne comprennent pas pourquoi. Tu dis : pour que quelqu'un les ait. Ils te les disent. Tu les écris tous.",
      "Après, on les emmène.",
    ],
    choices: [{ label: "Écrire", to: "III_p_plume2" }] }),

  III_p_plume2: P({ title: "Le registre noir", place: "valcendre",
    text: [
      "Ça dure trois jours. Ta main saigne à la fin. Tu as écrit des milliers de noms. Le troisième soir, seul, à la chandelle, tu les relis tous, à voix basse, du premier au dernier, comme eux le faisaient. Tu ne sais pas les prononcer. Tu les dis quand même.",
      "Puis tu prends la plume, et tu les barres. Un par un. Chaque trait est une partie du pacte. Tu as trouvé la forme toi-même, dans un livre très vieux : on ne peut faire oublier au monde que ce qu'on a d'abord écrit. On ne peut rayer que ce qui est inscrit. L'Hiver prendra tout ce qui est barré.",
      "Tu sens, en lui, la chose la plus étrange de toutes. Il ne barre pas les noms pour les effacer. Il les barre pour qu'ils soient gardés. Quelque part. Par quelqu'un. Il ferme le registre, il tourne la clé dans la serrure, il grave sur le dos une plume et une clé croisées. Et il fonde, avec ce registre, une maison de greffiers dont le seul devoir sera de ne jamais l'ouvrir.",
      "Il a eu froid toute sa vie, ensuite.",
    ],
    choices: [{ label: "Lâcher la glace", to: "III_p_plume3" }] }),

  III_p_plume3: P({ title: "Ce que tu as vu", place: "valcendre",
    fx: { clue: "n_registre_noir" },
    text: [
      "Tu es sur la place. Tu as l'encre sous les ongles. Tu as les noms dans la bouche, tous, des milliers, et tu sais les prononcer, toi.",
      { with: "hylas", text: "Hylas est à côté de toi, et il pleure sans bruit, ce qu'il ne fait jamais. « La Chancellerie, dit-il. Trois cents ans de greffiers. On nous a appris à garder. On ne nous a jamais dit quoi. » Puis, plus bas : « Mordace l'a ouvert. Il a ouvert le registre. Il a appris que ça marchait. Il a appris à vendre ce que l'autre avait gardé. »" },
      { without: "hylas", text: "Tu penses au caveau, sous la tour des Greffiers, et au registre aux noms barrés. Quelqu'un l'a ouvert. Quelqu'un a appris que ça marchait. Et quelqu'un a commencé à barrer d'autres noms, pour de l'argent." },
      "Si tu le rends au monde, la Chancellerie des Noms saura sur quoi elle est fondée. Et son Greffier-Majeur avec elle.",
    ],
    choices: verdict("plume", "III_p_plume_garde", "III_p_plume_rendu") }),

  III_p_plume_garde: P({ title: "La glace", place: "valcendre",
    text: ["« Qu'il reste. » Anselin, dans la glace, ferme les yeux. Tu as l'impression qu'il a encore froid. Tu as l'impression qu'il préfère."],
    choices: [{ label: "Revenir vers les autres statues", to: "III_p_place" }] }),

  III_p_plume_rendu: P({ title: "La flaque", place: "valcendre",
    text: ["« Qu'il parte. » La glace d'Anselin ne fond pas comme les autres : elle se craquelle, en mille lignes fines, comme une page qu'on a trop pliée, puis elle tombe en poussière blanche. Dans la tour de Pallanche, au fond du caveau, un registre noir se met à suinter, et l'encre des traits, sur chaque nom, se met à pâlir."],
    choices: [{ label: "Revenir vers les autres statues", to: "III_p_place" }] }),

  // ---- The speech to the people
  III_p_parole: P({ title: "La parole", place: "valcendre",
    text: [
      "Tu te tournes vers la foule. Des milliers de visages. Ils attendent ce que tu vas dire, et tu comprends que c'est ça, le procès : pas les verdicts. Ce que le seul d'entre eux qui a vécu là-haut va dire, maintenant, après avoir été les cinq.",
      { if: { all: FOUNDERS.map(rendu) }, text: "Il n'y a plus de statues. Le socle noir est vide, mouillé, et l'eau coule en cinq ruisseaux entre les pavés jusqu'aux pieds de la foule. Là-haut, cinq maisons se souviennent ce soir." },
      { if: { not: { any: FOUNDERS.map(rendu) } }, text: "Les cinq statues sont toujours là, dos à dos. Tu les as toutes gardées. Là-haut, personne ne saura rien. Ici, on le sait déjà." },
      { if: { all: [{ any: FOUNDERS.map(rendu) }, { not: { all: FOUNDERS.map(rendu) } }] }, text: "Il reste des statues, et il y a des flaques. Tu as choisi, un par un. Tu ne sais pas si tu as été juste. Tu sais que tu as choisi." },
    ],
    choices: [
      { label: "« Ils savaient. Tous les cinq. Et ils ont choisi l'oubli pour ne pas avoir à le porter. »", fx: { flag: "parole:accuse" }, to: "III_p_parole2" },
      { label: "« Ils avaient faim, et peur, et ils ont fait le pire. Mais ceux d'en haut, aujourd'hui, ne sont pas eux. »", fx: { flag: "parole:separe" }, to: "III_p_parole2" },
      { label: "Ne rien dire. Dire les noms, ceux d'Anselin, du premier au dernier", test: { dom: "magie", label: "Les noms", help: [{ if: { has: "nord:chant_lu" }, v: 15 }, { if: { present: "corbe" }, v: 10 }, { if: { has: "iii:noms_dits" }, v: 10 }] },
        win: { fx: { flag: ["parole:noms", "aelan:dit_les_noms"], ep: ["perso", 3000] }, to: "III_p_parole_noms" },
        lose: { fx: { flag: "parole:noms_rate" }, to: "III_p_parole_rate" } },
    ] }),

  III_p_parole_noms: P({ title: "Les noms", place: "valcendre",
    text: [
      "Tu ouvres la bouche, et c'est le premier nom qui sort. Puis le deuxième. Tu ne les cherches pas, ils sont là, dans l'ordre où Anselin les a écrits, dans la voix d'Anselin, puis dans la tienne.",
      "Au dixième, quelqu'un dans la foule dit le onzième avec toi. Au centième, ils sont mille. La place chante les noms, sans mesure, comme une marée. Les ponts entre les tours tremblent. Très loin, au bout du blanc, quelque chose de lourd craque, comme une porte sur ses gonds.",
      "Tu t'arrêtes avant la fin. Tu ne sais pas pourquoi. Quelque chose en toi sait que si tu disais le dernier, la porte s'ouvrirait pour de bon, maintenant, ici, sans que personne ait choisi. La foule s'arrête avec toi.",
      "Ardaël s'est levé. Il te regarde comme on regarde une épée qu'on ne savait pas tranchante.",
    ],
    choices: [{ label: "Reprendre ton souffle", to: "III_p_revelation" }] }),

  III_p_parole_rate: P({ title: "Les noms", place: "valcendre",
    text: [
      "Tu commences. Les premiers noms viennent, puis ils s'emmêlent, et tu les perds, comme on perd le fil d'une prière apprise trop tôt. Tu t'arrêtes au quarantième.",
      "Personne ne rit. Une vieille femme, au premier rang, dit le quarante et unième, doucement, pour toi. Puis elle se tait. C'est assez. C'est plus que personne n'a fait en trois cents ans.",
    ],
    choices: [{ label: "Reprendre ton souffle", to: "III_p_revelation" }] }),

  III_p_parole2: P({ title: "La foule", place: "valcendre",
    text: [
      { if: { has: "parole:accuse" }, text: "Un grondement monte de la foule, qui n'est ni un oui ni un non. Les gens se regardent. Une femme crie un nom, un seul, le sien, ou celui de quelqu'un. D'autres répondent. Ce n'est pas de la colère. C'est quelque chose qui ressemble à du soulagement : quelqu'un l'a dit." },
      { if: { has: "parole:separe" }, text: "La foule se tait. Puis un vieil homme dit, très fort : « Et nous ? On attend qu'ils soient d'autres gens ? » Personne ne lui répond. Mais personne ne te hue non plus. Une femme hoche la tête, lentement, et une autre, et tu ne sauras jamais combien." },
    ],
    choices: [{ label: "Te tourner vers Ardaël", to: "III_p_revelation" }] }),

  // ---- The revelation: the crown, the door, and what Maëra refused
  III_p_revelation: P({ title: "La couronne", place: "valcendre",
    fx: { clue: "n_couronne" },
    text: [
      "Le soir, Ardaël te reçoit seul, dans la salle sans murs, au sommet du palais. Le Sans-Nom garde l'escalier.",
      "« Je vais te dire ce que ta mère ne voulait pas que tu saches, dit-il. Il y a une porte, au bout du blanc. La Porte des Cendres. C'est par elle que nous sommes entrés, et par sa fente que nous rentrons. Elle a trois clés, et ce sont des voix. »",
      "« Qui chante tous les noms l'ouvre. Pour tous. Les morts et les oubliés rentrent chez eux, là-haut, en une nuit, et le monde ne sera plus jamais le même. Il sera plus lourd. Il sera vrai. »",
      "« Qui porte la couronne la tient fermée. Je la tiens depuis trois cent douze ans. Je suis fatigué. Je suis si fatigué que je laisse passer ce qui passe. C'est ça, ta neige : un vieil homme qui ne serre plus la main. »",
      "« Et qui garde le registre la tient fermée aussi, mais d'en haut, et pour lui seul. Celui qui garde le registre noir, à Pallanche, peut barrer ce qu'il veut. Il ne lui manque qu'une chose pour tout barrer, et pour toujours. »",
      "Il te regarde.",
      "« Toi. Le seul né de nous, ici, et qui a grandi là-haut. Le seul qui puisse porter les noms d'un côté à l'autre sans les perdre. La neige glisse sur toi : tu l'as remarqué. Avec toi, un homme pourrait chanter tous les noms, ou porter la couronne, ou fermer le registre pour de bon. Ta mère t'a donné au soleil pour que personne ne te demande jamais de choisir. »",
    ],
    choices: [
      { label: "« Tu veux que je prenne ta couronne. »", to: "III_p_revelation2" },
      { label: "« Qui garde le registre ? »", to: "III_p_revelation2" },
    ] }),

  III_p_revelation2: P({ title: "Mordace", place: "valcendre",
    text: [
      "« Je ne veux rien, dit Ardaël. Je l'ai voulu. Ton frère a été élevé pour ça, et il ne peut pas : là-haut, le monde l'oublie entre deux pas. Toi, tu peux. Je ne te le demanderai pas. Je te dis seulement que ça existe. »",
      "« Celui qui garde le registre, tu le connais. Il était l'apprenti de ton greffier aveugle, il y a vingt ans. Il attendait son maître de l'autre côté de la porte, au col, le soir où ton greffier t'a emporté. Il a vu tes yeux, à la lueur de la lanterne. Il a compris avant tout le monde. Depuis, il te cherche, et il prépare un grand livre où il n'y aura plus qu'un seul nom à écrire pour que tout tienne : le tien. »",
      { with: "hylas", text: "Une voix, depuis l'escalier. Hylas est monté, malgré le Sans-Nom. « Mordace, dit-il. C'est moi qui lui ai appris à lire les registres. C'est moi qui l'ai emmené au col, ce soir-là, pour tenir les chevaux. Il avait seize ans. Il m'a demandé qui tu étais, et je lui ai répondu. »" },
      "Ardaël se lève. « Je vais vous rendre au monde, toi et les tiens. La porte, je peux encore l'entrouvrir. Une fois. Et je te ferai un présent, parce que tu es mon fils et que je n'ai jamais rien pu te donner. Tu pourras emmener quelqu'un. Une âme, une seule, qui rentrera avec toi par la porte, pour de bon. Réfléchis cette nuit. »",
    ],
    choices: [{ label: "Passer la nuit à Valcendre", fx: { flag: "iii:revelation", ep: ["perso", 2000] }, to: "III_a_nuit" }] }),
};
