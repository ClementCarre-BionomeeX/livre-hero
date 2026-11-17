// L'Île Folle-Aiguille · side story « La cabane des fiévreux » (owes its question to A Journal of the Plague Year: may one
// shut the sick away from the healthy, and who goes with them?). In the second week of the siege, the bloody flux enters
// the chapel: three men, then five. The captain wants them out, in the old colonists' drying hut below the wall, before
// the whole garrison takes it; the mutineers can see the hut. Victorine agrees and sends them down (wa:dehors), refuses
// and keeps them in the sacristy behind a curtain of vinegar sheets (wa:dedans), or goes down with them to the hut
// (wa:avec). Wired in A4w_jours.
module.exports = {
  passages: {
    WA_flux: { act: "IV", title: "La cabane des fiévreux", place: "misericorde", ambiance: "chateau",
      text: [
        "Le premier, c'est un gabier de Morlenc, un matin, qui se lève trois fois dans la nuit et qu'on trouve à l'aube recroquevillé derrière le chevet, gris, les lèvres sèches, dans une odeur que Victorine reconnaît avant d'avoir vu. Le flux de sang. La dysenterie des camps, des sièges, des navires trop longs. Le soir, ils sont trois. Le surlendemain, cinq.",
        "Elle sait d'où ça vient : de l'eau de la source, qu'on puise trop près de l'endroit où l'on vide les seaux, faute de place ; des mains qu'on ne lave pas ; des mouches. Elle fait bouillir l'eau. Elle fait creuser une fosse de l'autre côté de la cour. Elle fait laver les mains au vinaigre, et les hommes rient d'elle, puis cessent de rire. Ça ne suffit pas. Dans une nef close, sous le soleil, avec quarante personnes serrées sur la paille, le flux court de paillasse en paillasse comme un feu dans un champ de chaume.",
        "Le quatrième jour, la capitaine Ribaud la prend à part, sous le porche. Elle a les yeux rouges de trois nuits sans sommeil. « En bas du mur, à vingt pas, il y a la cabane où les colons faisaient sécher le tabac. Un toit, quatre murs, une porte. On y met les malades. On leur descend de l'eau et du bouillon par une corde. Sinon, dans dix jours, je n'ai plus de garnison, et Fargue n'a plus qu'à monter ouvrir la porte. »",
        "Victorine regarde par la meurtrière. La cabane est là, au pied du mur, dans les cailloux, à découvert. On la voit de la plage. On la voit de la forêt.",
      ],
      choices: [{ label: "Répondre à la capitaine", to: "WA_choix" }] },
    WA_choix: { act: "IV", title: "La cabane des fiévreux", place: "misericorde", ambiance: "chateau",
      text: [
        "« Ils la verront, dit Victorine. Les mutins. Cinq hommes couchés dans une cabane, sans armes, hors des murs. — Ils les verront, dit la capitaine. Ils les laisseront, j'espère. Personne ne va chercher la dysenterie avec un couteau. Et s'ils y vont… » Elle ne finit pas sa phrase.",
        "Victorine pense au gabier de Morlenc, qui lui a serré la main ce matin, très fort, quand elle lui a donné à boire, et qui lui a demandé s'il allait mourir. Elle pense aux trente-cinq autres, sur la paille, qui ne sont pas encore malades. Elle pense à ce qu'elle a vu à l'Hôtel-Dieu de Morlenc, pendant la fièvre de l'été, quand on murait les salles. Elle pense que la capitaine a raison, et qu'on ne peut pas faire ça.",
        "La capitaine attend. Elle ne donnera pas l'ordre sans l'accord de la médecin. Elle le lui a dit : sur les malades, c'est vous qui commandez.",
      ],
      choices: [
        { label: "« Faites-les descendre. Je descendrai les soigner, de jour, et je remonterai. »", fx: { flag: "wa:dehors" }, to: "WA_dehors" },
        { label: "« Ils restent. Je les isole dans la sacristie, derrière des draps au vinaigre. »", fx: { flag: "wa:dedans" }, to: "WA_dedans" },
        { label: "« Je descends avec eux. Jour et nuit. Remontez-moi quand ce sera fini. »", fx: { flag: "wa:avec" }, to: "WA_avec" },
      ] },
    WA_dehors: { act: "IV", title: "La cabane des fiévreux", place: "misericorde", ambiance: "chateau",
      text: [
        "On les descend le soir même, sur des brancards, par la petite porte de la sacristie. Ils ne protestent pas. Le gabier de Morlenc regarde Victorine, en passant, sans un mot, avec des yeux d'enfant qu'on envoie au lit sans souper. Elle lui dit qu'elle descendra demain matin. Il hoche la tête.",
        "Elle descend chaque matin, par la corde, avec des seaux de bouillon et d'eau bouillie, et elle reste jusqu'à midi, et elle remonte, en se lavant les mains au vinaigre jusqu'aux coudes. Le flux cesse de courir dans la nef. Au bout de huit jours, il n'y a plus de nouveau malade à la chapelle. La capitaine avait raison.",
        "Dans la cabane, il en meurt deux. Le troisième soir, un mutin vient rôder autour, à la nuit ; Victorine l'apprend le lendemain par le gabier de Morlenc, qui l'a vu se pencher à la porte, renifler, et repartir en courant. On les laisse en paix. Le gabier de Morlenc remonte le douzième jour, guéri, maigre comme un clou. Il ne dit jamais rien à Victorine de ces douze nuits. Quand elle le croise dans la nef, il lui fait un petit salut poli, comme on salue quelqu'un qu'on a connu ailleurs.",
      ],
      choices: [{ label: "Retourner à tes blessés", fx: { quest: "WA" }, back: "A4w_jours" }] },
    WA_dedans: { act: "IV", title: "La cabane des fiévreux", place: "misericorde", ambiance: "chateau",
      text: [
        "La capitaine accepte, d'un hochement de tête, sans discuter, et sans cacher qu'elle pense que c'est une erreur. On vide la sacristie. On tend, à l'entrée, deux draps trempés de vinaigre, qu'on mouille toutes les heures. Victorine y couche les cinq. Personne d'autre n'entre. Elle mange seule, à part, dans un coin du chœur, dans une écuelle qu'elle lave elle-même à l'eau bouillante.",
        "Le flux court encore huit jours. Il en prend trois de plus, dans la nef, malgré les draps, malgré le vinaigre. La sacristie est pleine. Il en meurt deux, puis un troisième. La garnison, un soir, n'a plus que vingt et un hommes debout pour garder les murs, et la capitaine passe la nuit au clocher, un mousquet dans chaque main.",
        "Puis le flux s'arrête, comme il est venu, sans qu'on sache pourquoi. Les malades guérissent, ceux qui doivent guérir. Le gabier de Morlenc se lève le dixième jour. Il dit à Victorine, en titubant hors de la sacristie, qu'il savait qu'elle ne les mettrait pas dehors. Que tout le monde le savait, dans la sacristie. Que ça les a aidés. Elle ne sait pas s'il dit vrai. Elle compte les trois morts de la nef, qui ne seraient peut-être pas morts. Elle compte les deux de la sacristie, qui seraient peut-être morts dehors aussi. Les comptes ne tombent jamais juste, dans son métier.",
      ],
      choices: [{ label: "Retourner à tes blessés", fx: { quest: "WA" }, back: "A4w_jours" }] },
    WA_avec: { act: "IV", title: "La cabane des fiévreux", place: "misericorde", ambiance: "nuit",
      text: [
        "La capitaine la regarde longtemps. Puis elle dit : « Vous êtes la seule médecin de cette île. — Alors faites en sorte qu'on ne me tire pas dessus », dit Victorine. Et elle descend le soir même, derrière les brancards, avec sa sacoche, une lanterne, un baril de vinaigre et deux seaux.",
        "La cabane sent le tabac, la poussière et bientôt la maladie. Elle y passe dix nuits. Elle dort assise contre le mur, une heure par-ci, une heure par-là. Elle fait boire, elle lave, elle porte les seaux. Elle parle aux malades, la nuit, pour qu'ils sachent qu'elle est là. Le gabier de Morlenc lui raconte toute sa vie, en délirant, deux fois. Elle apprend qu'il a une fiancée qui s'appelle Mathurine et un chien qui s'appelle Mathurin, et qu'il les confond quand il a de la fièvre.",
        "La quatrième nuit, des pas, dehors. Elle ouvre la porte, la lanterne levée. Ce sont deux hommes de Fargue, avec des couteaux. Ils voient la lanterne, la femme, les cinq hommes couchés dans leur ordure, et ils sentent l'odeur. Ils reculent. L'un d'eux dit, très bas : « C'est la médecin. » L'autre crache par terre et dit que Fargue a donné l'ordre de ne pas la toucher. Ils s'en vont. Le lendemain matin, au pied de la porte de la cabane, il y a une calebasse de lait de coco et trois mangues. Personne ne sait qui les a apportées.",
        "Il en meurt un, sur les cinq. Elle remonte le onzième jour, avec quatre hommes debout, et elle dort deux jours entiers, dans la sacristie, sans rêver.",
      ],
      choices: [{ label: "Retourner à tes blessés", fx: { quest: "WA" }, back: "A4w_jours" }] },
  },
  extras: {
    quests: [
      { id: "WA", act: "IV", kind: "annexe", title: "La cabane des fiévreux", start: "WA_flux", doit: "peste", echo: ["wa:dehors", "wa:dedans", "wa:avec"] },
    ],
  },
};
