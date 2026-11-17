// L'Île Folle-Aiguille · act III, more of the cook in the calms (second reading). The galley at night and the memory of
// the Maraude's last night, when he and Larrouy left their captain on the beach (fargue:souvenir_ecrit or
// fargue:souvenir_brule); Malandain who asks to be first and is told to wait for Lannoz (fargue:malandain_attend or
// fargue:malandain_promis); Marjolaine on the bowsprit (penchant); Lagadec who is afraid of the island (fargue:lagadec);
// the sauerkraut he hides from everyone and gives the doctor (fargue:choucroute).
module.exports = {
  passages: {
    // ---------------------------------------------------------------- the galley at night
    XH_nuit: { act: "III", title: "La cambuse, la nuit", place: "cormorane", ambiance: "nuit", second: true,
      text: [
        "Une nuit sans sommeil, Fargue reste seul dans la cambuse, le fourneau éteint, une chandelle collée sur le billot. Il épluche des oignons pour le lendemain, parce que ses mains ont besoin de quelque chose à faire pendant que sa tête travaille. Les épluchures tombent dans un seau, en spirale, une par oignon, sans se rompre. Il n'a jamais su faire autrement.",
        "Dans la chaleur immobile des Sargues, l'odeur de l'oignon lui rappelle une autre cambuse. Plus petite, plus sale, plus chaude encore. Celle de la Maraude, il y a vingt et un ans, quand il n'était pas cuisinier mais quartier-maître, et que le cuisinier était un vieil homme des îles du Levant à qui il manquait les deux oreilles et qui chantait en épluchant, comme lui maintenant. C'est de lui qu'il tient la manie. Il ne sait pas ce qu'il est devenu. Il ne s'est jamais demandé.",
        "Il se rappelle la dernière nuit, et de cette nuit-là, surtout la plage. La lune. Le capitaine debout au bord de l'eau, très droit, en habit, comme pour une revue, avec un pistolet chargé d'une seule balle que Larrouy venait de lui donner. Les hommes dans le canot, qui ne disaient rien. Et le capitaine qui ne disait rien non plus, qui les regardait s'éloigner, et qui, au dernier moment, a levé la main, sans menace, pour saluer.",
        "Fargue pose son couteau. Il regarde ses mains, la droite, et la gauche aux trois doigts. Il se demande, pour la millième fois, ce que le capitaine a fait de sa balle.",
        "Sur le billot, à côté des oignons, il y a la lettre qu'il écrit à Lisette depuis Morlenc, et qu'il n'envoie jamais, parce qu'il n'y a pas de poste dans les Sargues, et parce qu'il ne l'enverrait pas s'il y en avait.",
      ],
      choices: [
        { label: "Écrire cette nuit-là dans la lettre, telle qu'elle a été", fx: { flag: "fargue:souvenir_ecrit" }, to: "XH_nuit_ecrit" },
        { label: "Brûler la page à la chandelle, et finir les oignons", fx: { flag: "fargue:souvenir_brule" }, to: "XH_nuit_brule" },
      ] },
    XH_nuit_ecrit: { act: "III", title: "La cambuse, la nuit", place: "cormorane", ambiance: "nuit", second: true,
      text: [
        "Il prend la plume. Il écrit lentement, de sa grosse écriture appliquée de cuisinier qui a appris tard, en tirant la langue. Il écrit la plage, la lune, l'habit, le pistolet, la main levée. Il écrit la colonie, aussi, ce qu'il en a vu, ce qu'il en a fait, ce qu'il a laissé faire. Il écrit jusqu'à l'aube, deux pages, recto verso, sans une rature, comme on vide une cale.",
        "Puis il relit. Il pense à Lisette lisant cela, près de sa fenêtre aux géraniums, avec ses joues trop roses. Il plie les pages en quatre, et les glisse tout au fond de son sac, sous ses chemises, avec les trois piastres qu'il n'a plus et la berceuse de sa mère qu'il n'a jamais écrite.",
        "Il ne les enverra pas. Mais elles sont écrites, maintenant. Elles existent hors de sa tête. Il se sent plus léger, de deux pages exactement, et plus lourd d'autre chose, qu'il ne sait pas nommer, et qui est peut-être la peur qu'on les trouve.",
      ],
      choices: [{ label: "Allumer le fourneau pour le café du matin", back: "A3f_jours" }] },
    XH_nuit_brule: { act: "III", title: "La cambuse, la nuit", place: "cormorane", ambiance: "nuit", second: true,
      text: [
        "Il approche la page de la chandelle. Le papier brunit, se recroqueville, prend feu par un coin, et brûle, et la petite flamme jaune éclaire un instant la cambuse entière, les casseroles pendues, les sacs de lentilles, le visage de Fargue, qui la regarde sans ciller.",
        "Il laisse tomber la cendre dans le seau aux épluchures. Il reprend un oignon. Il l'épluche, en spirale, sans rompre la peau.",
        "Ce qui n'est pas écrit n'existe qu'une fois, dans une seule tête, et meurt avec elle. Il a toujours pensé que c'était la meilleure manière de garder un secret. Il commence à se demander si c'est aussi la meilleure manière de le porter.",
      ],
      choices: [{ label: "Allumer le fourneau pour le café du matin", back: "A3f_jours" }] },

    // ---------------------------------------------------------------- Malandain
    XH_malandain: { act: "III", title: "La pierre à aiguiser", place: "cormorane", ambiance: "nuit", second: true,
      text: [
        "Malandain aiguise son couteau sur une pierre, assis sur l'affût de sa pièce, à la lueur du fanal. Le bruit est régulier, patient, presque reposant. Il aiguise ce couteau tous les soirs depuis Morlenc. Le couteau n'a jamais servi. Il n'en a jamais eu autant besoin.",
        "Fargue s'assied à côté de lui. Ils regardent la mer immobile, les herbes jaunes sous la lune.",
        "« Quand ? demande Malandain sans lever les yeux.",
        "— Pas encore.",
        "— Je sais, pas encore. Je demande quand. » La pierre glisse sur la lame, une fois, deux fois. « Les autres commencent à parler. Ceux de la capitaine, je veux dire. Le second regarde trop. La médecin regarde trop. Le gosse aux oreilles regarde tout. Il faudra montrer, à un moment. Montrer qu'on ne joue pas. » Il essaie le fil sur son pouce. Une goutte de sang perle. Il la lèche. « Je veux être le premier. »",
        "Fargue le regarde. Il voit un homme simple, d'une simplicité terrible, qui ne demande rien d'autre au monde que d'être utile à quelqu'un, et qui a choisi d'être utile de cette façon-là parce que personne ne lui en a jamais proposé une autre.",
      ],
      choices: [
        { label: "« À Lannoz. Pas avant. Et un seul. »", fx: { flag: "fargue:malandain_promis", penche: { malandain: -1 } }, to: "XH_malandain_promis" },
        { label: "« Personne n'est le premier. On attend le signal, tous ensemble. »", test: { dom: "social", diff: 1, label: "Faire attendre un chien" }, win: { fx: { flag: "fargue:malandain_attend" }, to: "XH_malandain_attend" }, lose: { fx: { flag: "fargue:malandain_promis" }, to: "XH_malandain_promis" } },
      ] },
    XH_malandain_promis: { act: "III", title: "La pierre à aiguiser", place: "cormorane", ambiance: "nuit", second: true,
      text: [
        "Malandain hoche la tête, lentement, comme un homme qui reçoit un ordre de mission. Il range son couteau.",
        "« À Lannoz, répète-t-il. Un seul. » Il sourit. Il a de belles dents, très blanches, très régulières, qui ne vont pas avec le reste. « C'est bien, d'avoir une date. Ça aide à dormir. »",
        "Il s'en va vers son hamac. Fargue reste seul sur l'affût, à regarder la goutte de sang séchée sur la pierre à aiguiser.",
        "Il vient de donner une date. Il le sait : c'est la chose la plus grave qu'on puisse donner à un homme comme celui-là. Plus grave qu'un couteau. Un couteau, on peut le reprendre. Une date, elle arrive toute seule, qu'on le veuille ou non, et elle trouve toujours quelqu'un.",
      ],
      choices: [{ label: "Redescendre à la cambuse", back: "A3f_jours" }] },
    XH_malandain_attend: { act: "III", title: "La pierre à aiguiser", place: "cormorane", ambiance: "nuit", second: true,
      text: [
        "Malandain cesse d'aiguiser. Il regarde Fargue, longtemps, avec une incompréhension sincère, comme un chien à qui l'on a montré le gibier et qu'on retient par le collier.",
        "« Tous ensemble, dit-il.",
        "— Tous ensemble. Au signal. Celui qui part avant, c'est celui qui nous fait tous pendre. À Morlenc, on pend les mutins en commençant par celui qui a tiré le premier. Ça fait un exemple. Tu veux être l'exemple ? »",
        "Malandain réfléchit. Ça prend du temps. Puis il range son couteau, sans un mot, et s'en va vers son hamac, en traînant un peu les pieds, comme un enfant puni.",
        "Fargue a gagné quelque chose. Quelques jours, peut-être. Il sait que la patience de Malandain est une corde, et qu'il vient d'en tirer un bon bout. Il ne sait pas combien il en reste.",
      ],
      choices: [{ label: "Redescendre à la cambuse", back: "A3f_jours" }] },

    // ---------------------------------------------------------------- Marjolaine
    XH_marjolaine: { act: "III", title: "La gabière", place: "cormorane", ambiance: "nuit", second: true,
      text: [
        "Marjolaine Cotentin, gabière, vingt-deux ans, les bras durs comme des cordages et la langue plus dure encore, passe ses nuits de calme assise à califourchon sur le beaupré, au-dessus de l'eau, là où il fait un peu moins chaud. Fargue lui monte une tasse de café. Il s'assied sur le gaillard, à ses pieds, et attend qu'elle parle.",
        "« Vous m'avez dit des choses, à Morlenc, dit-elle enfin. Des choses à moitié. » Elle souffle sur son café. « Je les ai finies toute seule, les choses. Je sais compter. Je sais qui vous parlez, et qui vous ne parlez pas. »",
        { if: { has: "fargue:marjolaine" }, text: "Il lui a dit, sur le pont, au dixième jour, à mots couverts, ce qu'il préparait. Elle a écouté, sans oui ni non, et elle a dit : « J'y penserai. » Elle y a pensé." },
        "« Moi, dit-elle, j'ai une mère à Kerverzot, trois frères, et pas de dot. La part d'un gabier, à l'arrivée, c'est cent livres. Combien, la part d'un ami de la Chanson ? »",
      ],
      choices: [
        { label: "Lui dire la vérité : une part d'homme, pas moins, pas plus", fx: { penche: { marjolaine: -1 } }, to: "XH_marjolaine_part" },
        { label: "Lui dire de rester du côté de la capitaine, et de ne plus rien demander", fx: { penche: { marjolaine: 2 } }, to: "XH_marjolaine_non" },
      ] },
    XH_marjolaine_part: { act: "III", title: "La gabière", place: "cormorane", ambiance: "nuit", second: true,
      text: [
        "« Une part d'homme, dit-il. Comme les autres. Ni plus ni moins. Pas de passe-droit parce que tu es une fille, pas de rabais non plus. »",
        "Elle le regarde par-dessus sa tasse. Puis elle rit, d'un rire bref, sec, qui ne ressemble pas du tout à un rire de fille.",
        "« Une part d'homme. C'est la première fois qu'on me la propose. » Elle finit son café. « Les autres me proposent des choses, la nuit, dans l'entrepont, mais jamais une part. » Elle lui rend la tasse. « J'y suis, la Chanson. Pour la part. Pas pour vous. »",
        "Elle remonte dans le beaupré, et regarde la mer. Fargue redescend, avec la tasse vide, et cette pensée qui ne le quitte plus de la nuit : il vient de recruter quelqu'un en lui disant la vérité. Il avait oublié que ça marchait aussi.",
      ],
      choices: [{ label: "Redescendre à la cambuse", back: "A3f_jours" }] },
    XH_marjolaine_non: { act: "III", title: "La gabière", place: "cormorane", ambiance: "nuit", second: true,
      text: [
        "« Reste du côté de la capitaine, dit-il. Fais ton quart, prends ta paie, rentre à Kerverzot avec tes cent livres, et marie-toi avec un garçon qui n'a jamais vu d'île. »",
        "Elle le regarde, surprise. « Vous me chassez ?",
        "— Je te garde. » Il se lève. « Ce que je prépare, ce n'est pas pour une fille de vingt-deux ans avec une mère et trois frères. C'est pour des hommes qui n'ont plus rien à perdre, ou qui croient ne plus rien avoir. Toi, tu as encore tout. Garde-le. »",
        "Il redescend. Elle reste sur son beaupré, sa tasse à la main, à le regarder partir, avec une expression qu'il ne voit pas, et qui est peut-être de la gratitude, et peut-être de la vexation, et sans doute les deux, comme chez la plupart des gens qu'on épargne.",
      ],
      choices: [{ label: "Redescendre à la cambuse", back: "A3f_jours" }] },

    // ---------------------------------------------------------------- Lagadec
    XH_lagadec: { act: "III", title: "Le Hareng", place: "cormorane", ambiance: "nuit", second: true,
      text: [
        "Lagadec vient boire à la cambuse, tard, quand tout le monde dort. Il a été de la Maraude, lui aussi, simple matelot, quinze ans à l'époque. Il est le seul à bord, avec Fargue, à savoir ce qu'il y a au bout du voyage. Ils n'en parlent jamais. Ce soir, Lagadec en parle.",
        "« J'en rêve, dit-il. Tous les soirs, depuis qu'on est dans les herbes. Je rêve de la chapelle. Je rêve qu'on ouvre la porte, et qu'ils sont tous là, dedans, à nous attendre, assis sur les bancs, bien sages, avec leurs habits du dimanche, et qu'ils se retournent tous en même temps. » Il boit. « Ils ont pas de visage, dans le rêve. Juste des chapeaux. »",
        "Fargue l'écoute. Il pose devant lui une écuelle de soupe chaude, qu'il n'a pas demandée.",
        "« Tu peux encore descendre à Lannoz, dit Fargue. Je dirai que tu as déserté. Personne ne te cherchera. »",
        "Lagadec regarde la soupe. « Et ma part ?",
        "— Pas de part. Pas de chapelle. »",
        "Lagadec mange sa soupe, lentement, jusqu'au fond, en raclant l'écuelle avec sa cuillère, comme on gratte une décision. Puis il se lève. « Je reste. J'ai rêvé de ça vingt ans pour rien. Autant que ça rapporte. »",
      ],
      choices: [{ label: "Laver l'écuelle", fx: { flag: "fargue:lagadec" }, back: "A3f_jours" }] },

    // ---------------------------------------------------------------- the sauerkraut
    XH_choucroute: { act: "III", title: "La choucroute", place: "cormorane", ambiance: "mer", second: true,
      text: [
        "Au fond de la cambuse, derrière les sacs de pois, dans un recoin où personne ne regarde, Fargue garde quatre tonnelets de choucroute. Il les a achetés à Morlenc, de sa poche, à un marchand hollandais, avec les derniers sous qu'il avait après le parloir des Sœurs. Il ne les a déclarés à personne. Il les garde pour lui, pour ses hommes, pour plus tard, pour l'île, où l'on aura besoin de dents.",
        "Le vingtième jour, la médecin vient le trouver. Elle a examiné les bouches de l'avant. Elle dit qu'il y a des gencives qui saignent, des dents qui bougent, de vieilles cicatrices qui se rouvrent, et qu'il lui faudrait des citrons, ou n'importe quoi de frais, n'importe quoi d'acide, et qu'elle sait qu'il n'en a pas.",
        "Fargue la regarde. Il pense aux quatre tonnelets. Il pense à ses hommes, à qui il les destine. Il pense que parmi les gencives qui saignent, à l'avant, il y a celles de ses hommes, et celles des autres, et que le scorbut ne fait pas la différence.",
      ],
      choices: [
        { label: "Lui montrer les tonnelets", fx: { flag: "fargue:choucroute", regard: { victorine: "cordial" } }, to: "XH_choucroute_donne" },
        { label: "Lui dire qu'il n'a rien, et garder les tonnelets", to: "XH_choucroute_garde" },
      ] },
    XH_choucroute_donne: { act: "III", title: "La choucroute", place: "cormorane", ambiance: "mer", second: true,
      text: [
        "Il la mène au fond de la cambuse. Il déplace les sacs de pois. Elle voit les tonnelets. Elle en ouvre un. L'odeur aigre, puissante, monte dans la chaleur, et elle ferme les yeux, comme on respire un bouquet.",
        "« Vous les cachiez, dit-elle.",
        "— Je les gardais. C'est différent. Un cuisinier garde toujours quelque chose. Sinon, le jour où il n'y a plus rien, il n'est plus cuisinier, il est un homme comme les autres avec une marmite vide. »",
        "Elle ne demande pas pour qui il les gardait. Elle le regarde, simplement, d'un regard de médecin qui sait lire autre chose que les gencives. Puis elle dit merci, et elle repart avec un tonnelet sous chaque bras, comme une ménagère qui revient du marché.",
        "Dans huit jours, les gencives de l'avant ne saigneront plus. Fargue le sait. Il sait aussi que, sur l'île, ses hommes auront moins de dents. Il a fait un calcul. Il ne sait pas encore s'il était bon.",
      ],
      choices: [{ label: "Remettre les sacs de pois en place", back: "A3f_jours" }] },
    XH_choucroute_garde: { act: "III", title: "La choucroute", place: "cormorane", ambiance: "mer", second: true,
      text: [
        "« Rien, dit-il. J'ai des pois, du lard, du biscuit. Pas de citrons. Je suis désolé, Madame. »",
        "Elle le regarde. Elle hoche la tête. Elle s'en va. Elle ne le croit pas, il le voit à sa nuque, mais elle n'a pas le droit de fouiller une cambuse, et elle le sait, et il le sait.",
        "Le soir, il ouvre un tonnelet en cachette, et en sert une louche à chacun de ses hommes, dans leur soupe, sans rien dire. Ils trouvent la soupe aigre. Ils la mangent quand même.",
        "À l'avant, les gencives continuent de saigner. Il y a parmi elles celles du gabier Daguenet, qui est un brave garçon, et qui chante bien, et qui ne sera jamais à lui. Fargue ne pense pas à Daguenet. Il s'applique à ne pas y penser, avec l'énergie d'un homme qui récure une casserole très sale.",
      ],
      choices: [{ label: "Remettre les sacs de pois en place", back: "A3f_jours" }] },
  },
  extras: {},
};
