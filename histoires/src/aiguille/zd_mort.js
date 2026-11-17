// L'Île Folle-Aiguille · side story « Le mort devant la porte » (owes its question to Antigone: who buries the enemy's
// dead, when the law of the place forbids it?). In the besieged chapel, a man of Fargue's, come by night with two
// others to try the wall, is shot by the sentry and dies at the foot of the gate. Nobody comes for him; the captain
// forbids opening. On the third day the heat and the flies. The doctor goes out at night to bury him (zd:enterre),
// asks the captain for a truce flag so his own people can take him (zd:treve), or obeys and burns lime on him from
// the wall (zd:chaux). Wired in A4w_jours.
module.exports = {
  passages: {
    ZD_coup: { act: "IV", title: "Le mort devant la porte", place: "misericorde", ambiance: "nuit",
      text: [
        "Le coup de feu part à trois heures du matin, du clocher, là où la capitaine a mis une sentinelle. Un seul. Puis un cri, en bas, au pied du mur, un cri d'homme qui s'étrangle, et des pas qui s'enfuient dans les broussailles, deux paires, très vite, vers la forêt. Puis plus rien que le cri, qui faiblit, et qui finit, vers l'aube, par se taire.",
        "Au jour, on le voit, du haut du mur. Il est couché sur le dos, dans les cailloux, à dix pas de la porte, les bras en croix, avec une échelle de cordes à côté de lui. Un homme de Fargue, un de ceux qu'on a recrutés à Morlenc à la dernière heure, dont personne, à la chapelle, ne connaît bien le nom. On dit Le Gall, ou Le Garrec. Il a vingt-cinq ans, peut-être. Il a les yeux ouverts sur le ciel.",
        "Personne ne vient le chercher. Ses camarades, en bas, savent que le clocher tire. La capitaine Ribaud, en haut, a donné l'ordre : la porte ne s'ouvre pour personne, ni pour un vivant ni pour un mort. « C'est peut-être une ruse, dit-elle. Ils attendent qu'on sorte pour le prendre, et ils nous prennent avec. Il restera où il est. Il a choisi l'endroit. »",
      ],
      choices: [{ label: "Attendre", to: "ZD_mouches" }] },
    ZD_mouches: { act: "IV", title: "Le mort devant la porte", place: "misericorde", ambiance: "chateau",
      text: [
        "Le premier jour, il n'est qu'un homme couché. Le deuxième, il gonfle. Le soleil de l'île tombe sur lui de six heures du matin à six heures du soir, et la chaleur fait son œuvre, avec une rapidité que Victorine connaît et que les autres découvrent. Le troisième jour, les mouches sont venues. Des milliers, d'un vert de métal, qui font autour de lui un bourdonnement qu'on entend du chœur. Et l'odeur monte. Elle passe le mur. Elle entre dans la nef. Elle se mêle à la soupe.",
        "Les blessés vomissent. Les hommes se battent pour un rien. Le baron fait brûler des pastilles odorantes dans le chœur, ce qui ajoute à l'odeur du mort une odeur de boudoir. Une nuit, un oiseau de mer, énorme, se pose sur la poitrine du cadavre, et commence à travailler. On l'entend. Personne ne dort.",
        "Victorine sait ce qui va suivre. Elle l'a vu dans les salles communes de l'Hôtel-Dieu de Morlenc, l'été, quand les fossoyeurs faisaient grève. Après l'odeur, la fièvre. Après la fièvre, la dysenterie. Dans une chapelle assiégée, sans eau courante, avec des blessés ouverts, un mort qui pourrit à dix pas de la porte en tue d'autres, sûrement, sans tirer.",
        "Elle va trouver la capitaine.",
      ],
      choices: [{ label: "Lui parler", to: "ZD_capitaine" }] },
    ZD_capitaine: { act: "IV", title: "Le mort devant la porte", place: "misericorde", ambiance: "chateau",
      text: [
        "La capitaine Ribaud l'écoute jusqu'au bout. Elle a l'air plus fatiguée qu'en colère. « Vous avez raison, docteur. Il nous empoisonne. » Elle regarde la porte. « Et si j'ouvre cette porte, je les invite. Fargue n'attend que ça. Il a mis un homme mort devant ma porte comme on met un fromage devant un trou de souris. » Elle se tait. « Il ne sortira personne. C'est un ordre. Je suis désolée. Je ne le suis pas assez pour changer d'avis. »",
        "Elle s'en va. Victorine reste devant la porte. Par la meurtrière, à côté du gond, on voit l'homme couché, et les mouches, et le ciel. Il a une mère, quelque part, à Morlenc ou ailleurs, qui ne sait pas qu'il est là, et qui serait contente qu'on le couvre de terre. Et il a une échelle de cordes à côté de lui, qui prouve qu'il est venu pour les tuer tous.",
        "Il y a une pelle des colons, rouillée, dans la sacristie. Il y a la nuit, qui tombe vite, sous ces latitudes. Il y a aussi la sentinelle du clocher, qui tire sur tout ce qui bouge au pied du mur, et qui n'a pas d'ordre contraire.",
      ],
      choices: [
        { label: "Prendre la pelle, et sortir cette nuit par la petite porte de la sacristie", fx: { flag: "zd:enterre" }, to: "ZD_nuit" },
        { label: "Demander à la capitaine un drapeau blanc, pour que les leurs viennent le prendre", fx: { flag: "zd:treve" }, to: "ZD_treve" },
        { label: "Obéir, et faire jeter sur lui, depuis le mur, toute la chaux de la sacristie", fx: { flag: "zd:chaux" }, to: "ZD_chaux" },
      ] },
    ZD_nuit: { act: "IV", title: "Le mort devant la porte", place: "misericorde", ambiance: "nuit",
      text: [
        "Elle sort à minuit, par la petite porte de la sacristie, qui donne sur le ravin, avec la pelle et un drap. Elle fait le tour du mur à quatre pattes, dans les cailloux, sous les étoiles. L'odeur est telle, près de lui, qu'elle doit s'arrêter deux fois pour ne pas vomir. Elle a connu pire. Elle ne s'en souvient pas.",
        "Elle ne peut pas creuser ; la terre, ici, n'est que roche. Alors elle fait ce qu'on fait sur les grèves du Ponant, pour les noyés qu'on ne peut pas porter : elle le roule dans le drap, et elle le couvre de pierres, une à une, sans bruit, en les prenant dans l'éboulis, jusqu'à ce qu'il ne soit plus qu'un long tas de cailloux au pied du mur, comme un cairn. Ça lui prend trois heures. Elle a les mains en sang. Les mouches se sont envolées.",
        "Quand elle rentre par la petite porte, à l'aube, la capitaine Ribaud est là, assise sur le coffre aux chasubles, un pistolet sur les genoux. Elle l'attendait. Elle regarde les mains de Victorine. « La sentinelle, dit-elle, avait ordre de tirer sur tout ce qui bouge au pied du mur. Je lui ai dit, à minuit, que les ombres de cette nuit étaient des chèvres. » Elle se lève. « Je vous mets aux arrêts, docteur. Trois jours. Vous les ferez à la sacristie, avec vos blessés. Comme d'habitude. »",
      ],
      choices: [{ label: "Laver tes mains à la source", back: "A4w_jours" }] },
    ZD_treve: { act: "IV", title: "Le mort devant la porte", place: "misericorde", ambiance: "chateau",
      text: [
        "La capitaine refuse d'abord. Puis elle réfléchit, en regardant le cadavre par la meurtrière, et elle accepte, d'une voix sèche, comme on signe un mauvais traité. On hisse au clocher une chemise blanche au bout d'un aviron. On attend.",
        "Ils viennent au bout d'une heure, deux hommes de Fargue, sans armes, les mains en l'air, à pas lents, en regardant le clocher. Ils s'approchent du mort. Ils s'arrêtent à trois pas, à cause de l'odeur. Puis l'un d'eux, un grand roux, retire sa chemise, la noue sur son nez, et s'agenouille, et prend le mort sous les bras. L'autre prend les pieds. Ils l'emportent ainsi, lentement, vers la forêt, sans un regard pour la chapelle. Au bord des arbres, le grand roux se retourne, une fois, et lève la main vers le clocher. On ne sait pas si c'est un merci ou une menace. Peut-être les deux.",
        "Le soir, on voit monter de la plage, en bas, la fumée d'un grand feu. Et on entend, portée par le vent de terre, une chanson, une seule, chantée par une seule voix, une voix juste et grave que tout le monde, à la chapelle, reconnaît. Le maître-coq chante pour son mort. Personne, dans la nef, ne fait de plaisanterie.",
      ],
      choices: [{ label: "Retourner à tes blessés", back: "A4w_jours" }] },
    ZD_chaux: { act: "IV", title: "Le mort devant la porte", place: "misericorde", ambiance: "chateau",
      text: [
        "Il y a deux sacs de chaux vive dans la sacristie, laissés là par les colons il y a trente ans pour un mur qu'ils n'ont jamais fini. On les monte sur le mur. On les vide, à la pelle, sur l'homme couché, jusqu'à ce qu'il ne soit plus qu'une forme blanche dans les cailloux, comme un gisant de plâtre sur une tombe d'église.",
        "La chaux fait son travail. L'odeur baisse, en deux jours. Les mouches s'en vont. Les blessés cessent de vomir, et l'on recommence à manger la soupe. Victorine a eu raison sur le fond, et la capitaine sur la forme, et tout le monde est content, et personne ne regarde plus par la meurtrière.",
        "Sauf Victorine. Elle regarde, chaque matin, la forme blanche au pied du mur, qui se creuse et se déforme à mesure que la chaux mange ce qu'elle recouvre. Au bout d'une semaine, on ne reconnaît plus un homme. On reconnaît une échelle de cordes, à côté.",
      ],
      choices: [{ label: "Retourner à tes blessés", back: "A4w_jours" }] },
  },
  extras: {
    quests: [
      { id: "ZD", act: "IV", kind: "annexe", title: "Le mort devant la porte", start: "ZD_coup", doit: "antigone", echo: ["zd:enterre", "zd:treve", "zd:chaux"] },
    ],
  },
};
