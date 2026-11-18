// L'Île Folle-Aiguille · side story « Le diable du calme » (owes its question to Stevenson's The Bottle Imp: would you
// take a damnation on yourself to lift it from someone else?). Act III, Fargue in the calm: Kerangoff, an old topman,
// brought back from a far port a little corked flask in which something dark seems to move. The man who sold it to him
// swore it brings wind to whoever owns it, but that its owner must sell it for less than he paid, or the devil inside
// takes him when he dies. In the calm, the flask goes from hand to hand, cheaper each time, until it reaches Maodez,
// the youngest topman, Maodez, for one sou. Below a sou there is only the liard. Maodez comes to the galley in tears. Fargue buys it
// for a liard (tc:achete), throws it overboard (tc:jette), or sells it on to the baron, who collects curiosities
// (tc:baron). Wired in A3f_jours.
module.exports = {
  passages: {
    TC_fiole: { act: "III", title: "Le diable du calme", place: "sargues", ambiance: "mer", second: true,
      fx: { meet: "kerangoff" },
      text: [
        "Kerangoff la montre le septième jour du calme, à la veillée, sur le gaillard d'avant, à la lueur d'une lanterne. C'est une fiole de verre épais, grosse comme un œuf de poule, bouchée à la cire, d'un vert si sombre qu'on la croirait noire. Il faut l'approcher de la flamme pour voir qu'il y a quelque chose dedans. Une ombre. Une petite ombre, qui bouge quand on ne la regarde pas, et qui s'arrête quand on la regarde.",
        "Kerangoff est un vieux gabier de cinquante ans, aux oreilles percées d'anneaux d'or, qui a navigué partout. Il l'a achetée, dit-il, dans un port des mers chaudes, à un marchand qui pleurait de soulagement en la lui vendant. Le marchand lui a dit la règle : la fiole donne du vent à qui la possède. Du vent, tout le vent qu'on veut. Mais celui qui la possède doit la revendre, avant de mourir, moins cher qu'il ne l'a payée. S'il meurt avec, la chose qui est dedans emporte son âme. Et s'il la revend au même prix, ou plus cher, elle revient.",
        "Les hommes rient. Puis ils ne rient plus. Ça fait sept jours qu'il n'y a pas un souffle. Quelqu'un demande à Kerangoff combien il l'a payée. Deux piastres, dit-il. Quelqu'un demande s'il la vendrait une piastre et demie. Kerangoff la vend sur-le-champ, avec un empressement qui fait froid dans le dos.",
      ],
      choices: [{ label: "Suivre, les jours suivants, le voyage de la fiole", to: "TC_prix" }] },
    TC_prix: { act: "III", title: "Le diable du calme", place: "sargues", ambiance: "mer", second: true,
      text: [
        "Fargue la suit, de sa cambuse, comme on suit une maladie. Celui qui l'a achetée une piastre et demie la garde une nuit, la frotte, lui parle, souffle dessus, et rien ne vient. Le lendemain, il la revend une piastre. Puis elle passe à quarante sous. Puis à vingt. Chaque acheteur la garde une nuit ou deux, espère, n'obtient rien, et la revend vite, avec une hâte de plus en plus visible, comme on se débarrasse d'une braise.",
        "Personne ne croit à la fiole. Tout le monde le dit. Mais personne ne veut mourir avec. Et à chaque vente, le prix baisse, et la marge se rétrécit, et les hommes commencent à faire le compte. Combien de ventes restent possibles, avant qu'on arrive au bout de la monnaie ? Le sou. Le demi-sou. Le liard. Après le liard, il n'y a rien. Celui qui l'achètera un liard ne pourra plus jamais la vendre.",
        "Le quatorzième jour, elle vaut deux sous. Jégou, le violoneux, l'achète, en riant trop fort. Le lendemain, il ne rit plus. Il ne l'a gardée qu'une nuit. Il a fait un rêve dont il refuse de parler. Il la revend un sou. À Maodez. Le plus jeune gabier du bord, quinze ans, un gamin de Lannoz embarqué au dernier moment, qui l'a achetée parce que tout le monde riait, et qu'il voulait faire l'homme.",
        "Le soir, Maodez descend à la cambuse. Il a les yeux rouges. Il tient la fiole dans son poing, serrée à blanchir les jointures. Il dit qu'il a essayé de la revendre un demi-sou, toute la journée, à tout le monde. Personne ne veut. Tout le monde a fait le compte. Après lui, il ne reste que le liard, et personne n'achètera une chose qu'il ne pourra plus jamais revendre. Il dit qu'il ne croit pas au diable. Il dit qu'il ne dort plus. Il dit que la chose, dans la fiole, l'a regardé, cette nuit.",
      ],
      choices: [
        { label: "Lui acheter la fiole pour un liard, et la garder", fx: { flag: "tc:achete" }, to: "TC_achete" },
        { label: "La lui prendre des mains, et la jeter par-dessus bord", fx: { flag: "tc:jette" }, to: "TC_jette" },
        { label: "La porter au baron, qui collectionne les curiosités", fx: { flag: "tc:baron" }, to: "TC_baron" },
      ] },
    TC_achete: { act: "III", title: "Le diable du calme", place: "sargues", ambiance: "mer", second: true,
      text: [
        "Fargue fouille sa poche. Il en sort un liard, une petite pièce de cuivre usée, presque lisse, qui ne vaut rien. Il la pose sur la table. Il tend la main. Maodez le regarde sans comprendre. Puis il comprend. Il dit que non. Il dit que Fargue ne pourra plus jamais la revendre. Fargue dit qu'il le sait. Il dit qu'il sait compter. Il garde la main tendue.",
        "Le garçon pose la fiole dans sa paume. Elle est tiède, de la tiédeur d'une main d'enfant qui l'a serrée toute la journée. Fargue la met dans la poche de son tablier, et retourne à ses oignons. Maodez reste là, debout, une minute. Puis il éclate en sanglots, d'un coup, comme on lâche une voile, et Fargue le laisse pleurer, sans le toucher, en coupant ses oignons, parce qu'un garçon de quinze ans qui pleure ne veut pas qu'on le regarde.",
        "Le bruit se répand en une heure. Le cuisinier a acheté la fiole un liard. Les hommes le regardent passer avec une sorte d'horreur respectueuse. Kerangoff vient le trouver, le soir, et lui demande s'il est fou. Fargue dit qu'il a la peau assez dure pour un diable de plus. Il dit qu'il en a déjà quelques-uns, de diables, et qu'ils s'entendent bien entre eux. Kerangoff s'en va en se signant.",
        "La nuit, dans la cambuse, Fargue sort la fiole et la pose devant la lanterne. L'ombre bouge, à l'intérieur. Il la regarde longtemps. Il ne croit pas au diable. Il croit aux hommes, ce qui est pire. Il se dit qu'il a acheté un liard la tranquillité d'un enfant, et que c'est la meilleure affaire de sa vie. Il se dit aussi qu'il a maintenant, dans sa poche, quelque chose qu'il ne pourra jamais vendre, et que ça ressemble beaucoup à ce qu'il porte déjà. Il range la fiole dans son coffre, à côté de choses plus lourdes. Il dort bien, cette nuit-là. Maodez aussi.",
      ],
      choices: [{ label: "Retourner aux marmites", fx: { quest: "TC" }, back: "A3f_jours" }] },
    TC_jette: { act: "III", title: "Le diable du calme", place: "sargues", ambiance: "mer", second: true,
      text: [
        "Fargue prend la fiole des mains du garçon. Il monte sur le pont. Il va à la lisse. Maodez le suit en courant, et la moitié de l'équipage, qui a compris, se lève et regarde. Fargue lève le bras, et lance la fiole, de toutes ses forces, le plus loin qu'il peut, dans la nuit. On l'entend tomber, très loin, dans les herbes. Un petit bruit mou. Puis rien.",
        "Il dit, à voix haute, pour que tout le monde l'entende, que la règle disait qu'il fallait la vendre, et que lui, il ne vend rien, il jette. Il dit qu'un diable qui coule dans les herbes des Sargues aura bien du mal à remonter. Il dit que le premier qui reparle de cette fiole fera la plonge pendant un mois. Les hommes rient, d'un rire de soulagement. Maodez rit aussi. Il dort, cette nuit-là.",
        "Le surlendemain, au matin, Lagadec remonte son filet à poissons, tendu le long du bord depuis le début du calme. Dans les mailles, au milieu des herbes jaunes, des crabes et d'un poisson mort, il y a une fiole de verre vert sombre, bouchée à la cire. Lagadec la regarde. Il devient blanc. Il la laisse tomber sur le pont. Elle ne se casse pas.",
        "Fargue la ramasse. Il dit que c'est une autre fiole, que les mers chaudes en sont pleines, que les courants rapportent tout. Il le dit très calmement. Personne ne le croit. Il la jette de nouveau, plus loin, avec une pierre de lest attachée au goulot. On ne la revoit pas. Mais les hommes, désormais, regardent les herbes autour du navire avec une attention nouvelle, et Maodez ne dort plus près de la lisse. Fargue se dit qu'il a voulu tuer une peur en la jetant à la mer, et que la mer, comme toujours, l'a rendue plus grosse. Il se dit qu'on n'en finit jamais avec une chose en refusant de la payer.",
      ],
      choices: [{ label: "Retourner aux marmites", fx: { quest: "TC" }, back: "A3f_jours" }] },
    TC_baron: { act: "III", title: "Le diable du calme", place: "sargues", ambiance: "mer", second: true,
      text: [
        "Fargue prend la fiole, et dit au garçon d'attendre. Il monte à la grand-chambre, à l'heure des échecs. Le baron Clavières est en robe de chambre, devant l'échiquier. Fargue pose la fiole à côté du roi blanc. Il raconte l'histoire, toute l'histoire, le port des mers chaudes, la règle, les prix qui tombent, Maodez, le sou. Il la raconte bien, sobrement, avec les silences qu'il faut. Le baron écoute, ravi, comme un enfant à qui l'on conte une histoire de brigands.",
        "Puis le baron prend la fiole, l'approche de la bougie, et regarde l'ombre bouger. Il dit que c'est délicieux. Il dit qu'il collectionne les curiosités, les reliques, les mains de gloire et les dents de saints, et qu'il n'a rien d'aussi charmant. Il dit qu'il l'achète. Combien ? Fargue dit : un liard. Le baron éclate de rire. Il dit qu'il n'a jamais rien payé un liard de sa vie, et qu'il ne sait même pas à quoi ressemble cette pièce. Fargue lui en montre une, au creux de sa main. Le baron la prend entre deux doigts, la regarde avec curiosité, comme une pièce d'un pays lointain, puis la repose dans la paume de Fargue, et garde la fiole. Il dit : « Voilà. Payé. Rendez-la au petit. »",
        "Fargue redescend, et donne le liard à Maodez. Il lui dit que la fiole est chez le baron, qu'elle est payée, et qu'il n'y a plus rien à craindre. Le garçon le regarde comme on regarde un saint. Il s'endort avant la fin de la soupe, la tête sur la table de la cambuse.",
        "Fargue reste éveillé, longtemps. Il ne croit pas au diable. Il pense quand même qu'il vient de vendre une damnation à un homme qui n'en connaît pas le prix, parce qu'il n'a jamais rien eu à payer, et qu'il l'a fait en souriant. Il pense que c'est exactement ce qu'il est venu faire sur ce navire, d'une certaine façon, avec d'autres monnaies. Il pense que le baron l'a remercié. Le lendemain, il voit la fiole posée sur l'étagère de la grand-chambre, entre une tabatière et un crâne de singe, à la place d'honneur. Le baron la montre à tout le monde. Il dit que c'est son diable. Il dit qu'il espère qu'il fera du vent. Fargue espère, lui, sans trop savoir pourquoi, qu'elle n'en fera pas.",
      ],
      choices: [{ label: "Retourner aux marmites", fx: { quest: "TC" }, back: "A3f_jours" }] },
  },
  extras: {
    people: {
      kerangoff: { name: "Kerangoff", aka: ["le vieux gabier aux anneaux d'or"], qui: "Vieux gabier de la Cormorane, qui a navigué partout et rapporté d'un port des mers chaudes une fiole de verre vert." },
    },
    quests: [
      { id: "TC", act: "III", kind: "annexe", title: "Le diable du calme", start: "TC_fiole", doit: "diablebouteille", echo: ["tc:achete", "tc:jette", "tc:baron"] },
    ],
  },
};
