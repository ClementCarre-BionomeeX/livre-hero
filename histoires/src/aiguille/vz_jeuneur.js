// L'Île Folle-Aiguille · side story « Le jeûneur du calme » (owes its question to Kafka's A Hunger Artist: what does
// one owe a man who starves himself before an audience, and does the audience own a share of his hunger?). Act III,
// Fargue in the Sargasso calm: Pacôme Hénaff, a scrawny gabier, announces that he will eat nothing until the wind
// comes back. The crew bets its tobacco on him, and he becomes the show of the calm, in a barrel on the forecastle.
// Fargue, the man who feeds the ship, slips broth into his water (vz:ruse), breaks up the bets and the crowd
// (vz:public), or serves him a plate every evening and lets him go on (vz:laisse). Wired in A3f_jours.
module.exports = {
  passages: {
    VZ_pari: { act: "III", title: "Le jeûneur du calme", place: "sargues", ambiance: "mer", second: true,
      fx: { meet: "henaff" },
      text: [
        "Le quatrième jour du calme, Pacôme Hénaff, gabier d'artimon, rend son écuelle pleine à la cambuse. Il la pose sur le comptoir, devant Fargue, avec la cérémonie d'un homme qui dépose les armes. Il annonce, assez fort pour que tout l'entrepont l'entende, qu'il ne mangera plus rien pendant quinze jours. Rien. Pas une miette. De l'eau seulement, sa pinte, comme les autres. Quinze jours : plus que n'importe quel homme de Morlenc, plus que le calme lui-même, peut-être. On verra qui cède le premier, de lui ou du ciel.",
        "C'est un petit homme maigre, déjà, aux joues creuses, aux yeux trop grands, que personne n'a jamais remarqué en sept ans de bord, sauf pour le plaindre quand il glisse dans les enfléchures. On rit. Puis, le soir, quelqu'un parie une chique qu'il tiendra trois jours. Quelqu'un d'autre parie deux chiques qu'il n'en tiendra pas deux. Le lendemain, il y a un carnet de paris, tenu par le maître voilier, et la moitié du tabac du bord y est engagée.",
        "Le sixième jour, Hénaff s'installe dans un baril vide, scié en deux, sur le gaillard d'avant, pour qu'on puisse le voir sans entrer dans son hamac. On vient le regarder, après le quart. On lui parle. On lui fait sentir des biscuits, des oignons, une sardine. Il sourit, il refuse, avec une grâce de duchesse. Il a l'air heureux. Il est, pour la première fois de sa vie, ce qu'on regarde.",
        "Fargue l'observe depuis la porte de la cambuse. Il nourrit ce navire. Chaque bouche qui mange, il la connaît, et il sait ce qu'elle laisse dans l'écuelle. Celle-là ne laisse rien, puisqu'elle ne prend rien, et ça le dérange plus qu'il ne saurait dire.",
      ],
      choices: [{ label: "Aller lui porter sa pinte, un soir, et lui demander pourquoi", to: "VZ_pourquoi" }] },
    VZ_carnet: { act: "III", title: "Le jeûneur du calme", place: "sargues", ambiance: "nuit", second: true,
      text: [
        "Le carnet de paris est cloué au pied du mât de misaine, par un clou de charpentier, avec un bout de crayon pendu à une ficelle. Quelqu'un a protégé la couverture avec un morceau de toile goudronnée, pour la rosée. On a pris soin de ce carnet comme on ne prend soin de rien d'autre, à bord, depuis que le vent est tombé.",
        "Fargue le feuillette à la lumière du fanal. Les premières pages sont pleines de rires : une chique qu'il ne tiendra pas trois jours, deux chiques qu'il craquera devant une sardine. Puis les paris montent. Le cinquième jour, on parie du tabac pour une semaine. Le septième, une montre. Gobert a parié, d'une écriture laborieuse, une demi-livre de tabac sur le douzième jour, et il a souligné deux fois. Petit-Jules a parié tout son tabac, avec cette seule mention : « il tiendra ».",
        "Personne n'a écrit qu'il mourrait. On a parié sur le jour où il mangerait, jamais sur le jour où il ne mangerait plus jamais. Fargue tourne la dernière page écrite. En bas, au crayon, d'une main qui a appuyé fort, quelqu'un a parié une bouteille d'eau-de-vie sur « le seizième jour ». Pas de nom. Le seizième jour, c'est le lendemain du terme qu'Hénaff s'est fixé.",
        "Fargue regarde longtemps la ligne sans nom. Il pense que sur un navire de quarante hommes, il y en a toujours un qui fait le calcul que les autres n'osent pas faire, et qui le fait au crayon, pour pouvoir l'effacer. Il referme le carnet. Il rabat la toile goudronnée. La rosée commence à perler sur le clou.",
      ],
      choices: [
        { back: "VZ_pourquoi", label: "Revenir s'asseoir sur l'écoutille, près du baril" }
      ] },
    VZ_medecin: { act: "III", title: "Le jeûneur du calme", place: "sargues", ambiance: "nuit", second: true,
      text: [
        "La lumière brûle encore sous la porte de Victorine. Elle ouvre en chemise de nuit, un châle sur les épaules, une plume à la main, avec la tête d'une femme qui n'a pas dormi depuis le début du calme, et qui n'en attend plus rien. Elle voit qui c'est. Elle ne demande pas pourquoi. Elle dit : « Hénaff. »",
        "Elle répond en médecin, sèchement, sans phrases. Le pouls est lent, faible, irrégulier depuis hier. Les gencives commencent à saigner, à cause du calme, autant que du jeûne. Il a perdu le tiers de son poids. Par cette chaleur, sans manger, et avec ce qu'il boit, elle lui donne cinq jours, peut-être six. Elle ne lui donne pas le quinzième. Elle dit que le cœur lâchera avant la tête, comme toujours chez les obstinés.",
        "Fargue demande si elle peut le forcer. Elle dit que non. Elle dit qu'on peut forcer un enfant, un fou, ou un prisonnier. Elle dit qu'Hénaff n'est rien de tout ça, et que c'est bien le problème. Elle dit qu'elle a passé sa vie à soigner des gens qui voulaient vivre, et qu'elle n'a jamais su quoi faire de ceux qui voulaient autre chose.",
        "Puis elle le regarde, avec une drôle d'ironie fatiguée. Elle dit : « Vous nourrissez ce navire, Fargue. Moi, je le compte. Chacun son métier. Ce soir, je crois que c'est le vôtre. » Elle referme la porte. Fargue reste une seconde dans la coursive, dans l'odeur de cire et de laudanum, avec le sentiment désagréable qu'on vient de lui confier un homme.",
      ],
      choices: [
        { back: "VZ_pourquoi", label: "Remonter sur le gaillard, près du baril" }
      ] },
    VZ_pourquoi: { act: "III", title: "Le jeûneur du calme", place: "sargues", ambiance: "nuit", second: true,
      text: [
        { first: true, text: "Le neuvième jour, à la nuit, quand les regardeurs sont partis se coucher, Fargue monte sur le gaillard avec la pinte d'eau. Hénaff est recroquevillé dans son demi-baril, très maigre, d'une maigreur nouvelle, celle où l'on voit les dents sous les lèvres et les os sous les tempes. Il boit l'eau à petites gorgées. Il remercie. Fargue s'assied sur l'écoutille et attend, parce qu'il sait attendre, et que les hommes parlent toujours à qui attend." },
        { first: true, text: "Hénaff parle. Il est né l'année de la grande disette, dans une paroisse de l'intérieur. Sa mère lui donnait sa part de pain, et la sienne, en disant qu'elle avait déjà mangé. Elle est morte au printemps. Il avait six ans. Depuis, il dit que chaque bouchée qu'il avale, c'est quelqu'un qui ne l'avale pas. Il le sait, même quand il n'y a personne en face. Il mange quand même, comme tout le monde, parce qu'il faut. Mais là, dans ce calme, où personne n'a besoin de lui, où les voiles pendent, il a trouvé une chose qu'il sait faire mieux que tous les autres. Ne pas prendre." },
        { first: true, text: "Il dit aussi, avec un petit rire, qu'on ne l'a jamais tant regardé. Qu'on lui parle, maintenant. Que le maître voilier lui dit bonjour. Il dit qu'il ira jusqu'au quinzième jour, qu'il en est sûr, et qu'il veut être encore là, ce jour-là, dans son baril, pour que tout le monde voie qu'il a tenu." },
        { first: true, text: "Fargue regarde ses mains, sur le bord du baril. Il connaît ces mains-là. Il les a vues sur Annette, le dernier hiver. Il a, dans la cambuse, un fond de bouillon de lard qu'il garde pour les malades, et une bouteille de vin cuit. Victorine, ce matin, lui a dit sans le regarder que le gabier d'artimon mourrait avant la fin de son pari. Il en reste neuf jours. Les voiles pendent." },
        { again: true, text: "Hénaff, dans son demi-baril, boit sa pinte à petites gorgées, et les voiles pendent dans la nuit sans vent." }
      ],
      choices: [
        { label: "Regarder le carnet de paris, cloué au pied du mât de misaine", to: "VZ_carnet", hide: { seen: "VZ_carnet" } },
        { label: "Aller demander à la médecin combien de jours il lui reste vraiment", to: "VZ_medecin", hide: { seen: "VZ_medecin" } },
        { label: "Mêler du bouillon à sa pinte d'eau, sans rien lui dire", fx: { flag: "vz:ruse" }, to: "VZ_ruse" },
        { label: "Fermer le carnet de paris, et chasser les regardeurs", fx: { flag: "vz:public" }, to: "VZ_public" },
        { label: "Lui porter son écuelle chaque soir, et le laisser choisir", fx: { flag: "vz:laisse" }, to: "VZ_laisse" },
      ] },
    VZ_ruse: { act: "III", title: "Le jeûneur du calme", place: "sargues", ambiance: "mer", second: true,
      text: [
        "Dès le lendemain, la pinte de Hénaff n'est plus tout à fait de l'eau. Fargue y met un tiers de bouillon dégraissé, filtré trois fois au linge pour qu'il soit clair, et coupé d'eau saumâtre pour qu'il ait le goût de la cuve. Il la porte lui-même, chaque soir. Hénaff la boit à petites gorgées, comme toujours, et remercie. Il ne remarque rien. Ou il remarque, et il ne dit rien. Fargue ne saura jamais lequel des deux.",
        "Le jeûneur tient. Il ne grossit pas, mais il cesse de maigrir. Les os restent sous la peau, sans percer. Le onzième jour de son pari, il tient. Le treizième, il tient encore. Les parieurs perdent, puis gagnent, puis perdent ; le carnet du maître voilier est couvert de ratures. Victorine vient l'examiner, s'étonne, tâte le pouls, regarde Fargue. Fargue regarde ailleurs. Elle ne dit rien non plus.",
        "Le quinzième jour, au coucher du soleil, le maître voilier ferme son carnet et le déclare vainqueur. On crie. On tape sur les bastingages. Hénaff se dresse dans son baril, les bras levés, et le gaillard l'acclame. Il a tenu. Il a battu le ciel, qui, lui, n'a toujours pas cédé. Ce soir-là, il mange une écuelle entière de la soupe de Fargue, en pleurant, devant tout le monde, et on applaudit chaque cuillerée.",
        "Fargue a sauvé un homme en lui volant sa victoire, et l'homme ne le sait pas. Il en a l'habitude, en vérité. Il a passé sa vie à donner aux gens ce qu'ils ne demandaient pas, en le cachant dans ce qu'ils demandaient. Ce soir-là, en lavant les écuelles, il se demande pour la première fois si c'est un don ou une manière de voler, et s'il fait autre chose, depuis Morlenc, avec ce navire tout entier.",
      ],
      choices: [{ label: "Retourner à la cambuse", fx: { quest: "VZ" }, back: "A3f_jours" }] },
    VZ_public: { act: "III", title: "Le jeûneur du calme", place: "sargues", ambiance: "mer", second: true,
      text: [
        "Le lendemain matin, Fargue va trouver le maître voilier, lui prend le carnet de paris des mains, et le jette au fourneau, sous les yeux de l'entrepont. Il dit, de sa voix de quartier-maître, que le tabac misé retournera à ceux qui l'ont misé, et que le premier qui monte au gaillard regarder un homme crever, il lui sert sa ration dans le même baril. Personne ne discute. On discute rarement Fargue, quand il s'essuie les mains de cette façon.",
        "Le gaillard se vide. Hénaff, dans son demi-baril, voit partir ses regardeurs un par un. Il les appelle. Ils détournent la tête. Le soir, il est seul. Il pleure, de rage d'abord, puis de quelque chose d'autre. Il crie à Fargue, quand Fargue monte avec la pinte, qu'il lui a tout pris, que c'était à lui, que c'était la seule chose. Fargue pose la pinte et ne répond pas. Il redescend.",
        "Vers minuit, il remonte. Il trouve Hénaff assis par terre, à côté du baril, qui le regarde arriver. Fargue lui tend un quignon de pain et un oignon. Hénaff le regarde longtemps. Puis il dit, très bas, que sans personne pour regarder, ne pas manger ne veut plus rien dire. Que ce n'est plus qu'avoir faim. Il prend le pain. Il le mange, lentement, en regardant la mer, dans le noir, sans un témoin hormis le maître-coq.",
        "Quelques jours plus tard, Hénaff remonte dans les enfléchures, où il glisse un peu moins qu'avant. Il ne parle plus du jeûne. Il ne parle plus à Fargue non plus, ou très peu. Fargue lui a sauvé la vie en lui ôtant son public, et il sait qu'un homme pardonne plus volontiers à qui le laisse mourir qu'à qui l'empêche d'être vu.",
      ],
      choices: [{ label: "Retourner à la cambuse", fx: { quest: "VZ" }, back: "A3f_jours" }] },
    VZ_laisse: { act: "III", title: "Le jeûneur du calme", place: "sargues", ambiance: "mer", second: true,
      text: [
        "Chaque soir, Fargue monte au gaillard avec la pinte d'eau et une écuelle pleine. La meilleure soupe du bord, celle du carré, avec le lard et l'oignon frit. Il pose l'écuelle au bord du baril. Il ne dit rien. Il attend une heure, assis sur l'écoutille. Puis il redescend l'écuelle pleine, et la donne aux mousses, qui se battent pour elle. Le lendemain, il recommence.",
        "Hénaff regarde l'écuelle. Chaque soir, plus longtemps. Il ne la touche pas. Il comprend ce que fait Fargue, et Fargue le sait : Fargue le laisse libre, sans ruse et sans sermon, avec seulement, chaque soir, le choix sous le nez, chaud, fumant, qui sent le lard. C'est une politesse. C'est aussi la chose la plus dure qu'on puisse faire à un jeûneur.",
        "Le dixième jour de son pari, Hénaff ne se lève plus. On ne vient presque plus le regarder : les regardeurs se lassent de tout, même d'un homme qui meurt, quand il meurt trop lentement. Le carnet de paris est fermé faute de mises. Ce soir-là, quand Fargue pose l'écuelle, Hénaff tend la main. Il la prend. Il mange trois cuillerées, puis il vomit, puis il recommence, plus doucement, à petites gorgées, et Fargue lui tient la tête. Le lendemain, personne ne remarque que le jeûneur a cédé, sauf Fargue, et le maître voilier, qui garde le tabac.",
        "Hénaff, guéri, dit à Fargue qu'il a perdu. Fargue lui dit qu'il a choisi, ce qui n'est pas pareil, et que lui, Fargue, a passé des jours à le regarder choisir sans y mettre la main, et que c'était plus dur que de faire la soupe. Hénaff le regarde, surpris. Il dit qu'il ne savait pas que quelqu'un avait regardé pour de bon. Fargue dit qu'un cuisinier regarde toujours ce qu'on laisse dans l'écuelle. C'est son métier.",
      ],
      choices: [{ label: "Retourner à la cambuse", fx: { quest: "VZ" }, back: "A3f_jours" }] },
  },
  extras: {
    people: {
      henaff: { name: "Pacôme Hénaff", aka: ["le jeûneur", "le gabier d'artimon"], qui: "Gabier d'artimon de la Cormorane, qui a jeûné, pendant le calme, devant tout l'équipage." },
    },
    quests: [
      { id: "VZ", act: "III", kind: "annexe", title: "Le jeûneur du calme", start: "VZ_pari", doit: "artistefaim", echo: ["vz:ruse", "vz:public", "vz:laisse"] },
    ],
  },
};
