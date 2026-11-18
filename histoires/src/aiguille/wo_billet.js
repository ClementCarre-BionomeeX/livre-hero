// L'Île Folle-Aiguille · side story « Le billet de Petit-Jules » (owes its question to The Merchant of Venice: must a bond
// be kept to the letter when its letter is cruel, and who may judge it?). Act III, in the calm: Petit-Jules has lost
// at dice, to Hilaire Boucaut, his whole pay for the voyage and more, and has signed with his cross a paper that gives
// Boucaut, if he cannot pay at the next port, the little finger of his left hand. The forecastle laughs, then stops
// laughing: Boucaut keeps sharpening a knife. The men ask the cook to judge. Fargue pays the debt himself (wo:paie),
// judges by the letter and finds the flaw in it (wo:lettre), or proves that Boucaut's dice are loaded (wo:des).
// Wired in A3f_jours.
module.exports = {
  passages: {
    WO_des: { act: "III", title: "Le billet de Petit-Jules", place: "sargues", ambiance: "mer", second: true,
      text: [
        "Petit-Jules entre dans la cambuse comme on entre à confesse, en se tordant les mains. Il a quinze ans. Il a des oreilles décollées, des taches de rousseur, et une admiration pour Fargue qu'il ne cache pas plus qu'un chien ne cache sa queue. Il a perdu aux dés. Il a perdu sa paie du voyage entier, qu'on lui versera au retour ; puis il a joué la paie du voyage suivant, qu'il n'a pas encore ; puis, quand il n'avait plus rien à jouer, il a joué sur parole.",
        "« Et Boucaut m'a fait signer un papier, dit-il. C'est Daguenet qui l'a écrit, parce qu'il a une belle main. J'ai fait ma croix. » Il sort de sa chemise une feuille pliée en quatre, graisseuse, qu'il tend à Fargue en tremblant. Fargue lit, à la lueur du fourneau. C'est écrit en belles lettres rondes, avec des fautes : *Si Jules Arnoult ne rend pas à Hilaire Boucaut les quarante livres au premier port, Hilaire Boucaut aura le droit de lui couper le petit doigt de la main gauche, devant témoins, et la dette sera payée.*",
        "« Tout le monde a ri, quand j'ai signé, dit Petit-Jules. Moi aussi. C'était pour rire. » Il avale sa salive. « Boucaut, il ne rit plus. Il aiguise son couteau, le soir, sur le gaillard d'avant, en me regardant. Il dit qu'un papier, c'est un papier. Il dit que s'il laisse passer ça, plus personne ne le paiera jamais. Et les autres disent qu'il a raison. »",
      ],
      choices: [{ label: "Monter au gaillard d'avant, où Boucaut aiguise son couteau", to: "WO_gaillard" }] },
    WO_gaillard: { act: "III", title: "Le billet de Petit-Jules", place: "sargues", ambiance: "nuit", second: true,
      text: [
        "Boucaut est assis sur le cabestan, sous la lanterne, et il passe son couteau sur une pierre à huile, avec un bruit doux, régulier, comme une respiration. C'est un gros homme chauve, aux bras couverts de sirènes, qui a un commerce de rhum, de dés et de petits prêts, et qui ne fait jamais crédit sans un papier. Autour de lui, la bordée attend. Ils ont tous joué contre lui, un jour ou l'autre. Ils lui doivent tous un peu. Ils ont tous, ce soir, un intérêt à ce qu'un papier soit un papier.",
        "« Le cuisinier vient plaider pour son mousse, dit Boucaut, sans lever les yeux. C'est touchant. » Il crache sur la pierre. « Je n'ai rien contre le petit. Il joue mal, c'est tout. Mais il a signé. Devant témoins. Et sur ce navire, ou bien un papier vaut quelque chose, ou bien rien ne vaut rien, et alors tes dettes à toi non plus, cuisinier. » Un murmure d'approbation. Fargue reconnaît la logique. C'est celle de toutes les banques de Morlenc, en plus franc.",
        "Quelqu'un, dans la bordée, propose que Fargue juge. Il est le plus vieux, après Gobert, et Gobert dort. Il a la réputation d'être juste, ce qui veut dire, sur un navire, qu'il donne la même ration à tout le monde. Les autres approuvent. Boucaut hausse les épaules : qu'il juge, pourvu qu'il juge selon le papier. Fargue prend la feuille. Il la relit. Il regarde aussi, sur le tonneau qui sert de table, les deux dés de Boucaut, en os jauni, qui ont roulé toute la nuit d'avant.",
      ],
      choices: [
        { label: "Payer lui-même les quarante livres, devant tout le monde", if: { gold: { min: 40 } }, fx: { flag: "wo:paie", gold: -40 }, to: "WO_paie" },
        { label: "Juger selon le papier, mot à mot, et y chercher la faille", fx: { flag: "wo:lettre" }, to: "WO_lettre" },
        { label: "Prendre les dés de Boucaut, et les faire rouler devant la bordée", fx: { flag: "wo:des" }, to: "WO_pipes" },
      ] },
    WO_paie: { act: "III", title: "Le billet de Petit-Jules", place: "sargues", ambiance: "nuit", second: true,
      text: [
        "Il descend à la cambuse, ouvre sa caisse, et remonte avec quarante livres comptées, qu'il pose sur le tonneau, une à une, devant Boucaut, en les faisant sonner. Boucaut les compte. Il range son couteau. Il déchire le papier, solennellement, en quatre, et jette les morceaux à la mer. La bordée applaudit, un peu déçue. On aurait aimé voir un doigt. On aime aussi voir un geste.",
        "Petit-Jules pleure de soulagement. Il veut embrasser les mains de Fargue. Fargue le repousse, d'une bourrade. Il lui dit qu'il lui doit quarante livres, à présent, à lui, et qu'il les lui rendra en épluchant des oignons jusqu'à la fin de ses jours, et que s'il rejoue aux dés, il lui coupera lui-même les dix doigts, et la langue avec. Petit-Jules jure. Il jure sur la tête de sa mère, de sa grand-mère, et du navire.",
        "Le soir, seul dans la cambuse, Fargue fait ses comptes. Quarante livres, c'est ce que coûte une pierre au cimetière des Hollandes, avec un nom dessus. C'est aussi un mois de pension chez les sœurs de la Basse-Fosse. Il pense à Lisette. Il pense que c'était son argent à elle. Il pense qu'il vient d'acheter le petit doigt d'un garçon qui n'est pas son fils, et qui le suivrait en enfer, et il se demande, avec une lucidité désagréable, si ce n'était pas cela, précisément, qu'il achetait.",
      ],
      choices: [{ label: "Retourner à la cambuse", fx: { quest: "WO" }, back: "A3f_jours" }] },
    WO_lettre: { act: "III", title: "Le billet de Petit-Jules", place: "sargues", ambiance: "nuit", second: true,
      text: [
        "Il lit à voix haute, lentement, devant tous. *Au premier port.* Il demande à Boucaut quel est le premier port. Boucaut dit : Lannoz, ou ce qu'on trouvera. Fargue dit que la Cormorane a déjà mouillé à Brisegrève, qui est une roche à forçats, et que la carte de la capitaine promet ensuite des cailloux à moines, des îlots à cris et des landes à moutons, sans un quai ni une capitainerie. Que le prochain vrai port, avec un quai et une capitainerie, sera donc Morlenc, au retour. Que la dette court donc jusqu'à Morlenc. Et qu'à Morlenc, Petit-Jules aura sa paie, et pourra payer.",
        "Boucaut proteste. La bordée rit. Fargue continue. *Le petit doigt de la main gauche.* Il demande à Petit-Jules de montrer sa main gauche. Il la montre. Fargue compte, gravement, en touchant chaque doigt : un, deux, trois, quatre, cinq. Il demande lequel est le petit. Petit-Jules montre l'auriculaire. Fargue dit que ça dépend de quel côté on compte, et que le papier ne le dit pas, et qu'il faudrait faire venir Daguenet pour savoir ce qu'il voulait écrire, mais que Daguenet ne s'en souviendra pas, car il était ivre.",
        "À la fin, tout le gaillard d'avant rit à s'en tenir les côtes, et Boucaut lui-même, vaincu, rengaine son couteau avec un sourire jaune. Il dit qu'on règlera à Morlenc. Fargue garde le papier. Il le plie et le met dans sa poche. En redescendant, il pense que la loi, c'est cela : un couteau qu'on aiguise, et un vieux cuisinier qui sait lire, et qui sait que tout texte a un trou, et que les hommes rient quand on le leur montre. Il pense aussi que la prochaine fois, Boucaut fera écrire le papier par quelqu'un de sobre.",
      ],
      choices: [{ label: "Retourner à la cambuse", fx: { quest: "WO" }, back: "A3f_jours" }] },
    WO_pipes: { act: "III", title: "Le billet de Petit-Jules", place: "sargues", ambiance: "nuit", second: true,
      text: [
        "Il prend les dés sur le tonneau. Il les soupèse, l'un après l'autre, dans le creux de sa main, comme on soupèse un œuf pour savoir s'il est frais. Puis il les jette sur le pont, sous la lanterne. Six et six. Il les ramasse. Il les rejette. Six et six. Il les rejette encore, et encore, dix fois. Six et cinq, une fois. Six et six, neuf fois. La bordée a cessé de respirer.",
        "Il pose le couteau de cuisine qu'il a toujours à la ceinture sur le tonneau, et il fend un des dés en deux, d'un coup sec, comme on fend une noix. Dedans, il y a une goutte de plomb, coulée avec soin, du côté du un. Il montre les deux moitiés, à la ronde. Il ne dit rien. Il n'a pas besoin. Toute la bordée, en même temps, se met à calculer combien elle a perdu, depuis Morlenc, contre ces dés-là.",
        "Ce qui se passe ensuite ne regarde plus Fargue, et il a la sagesse de redescendre à la cambuse. On entend des cris, des coups, quelque chose de lourd qui tombe. Au matin, Boucaut a un œil fermé, deux dents de moins, et plus un sou ; les papiers de toutes ses dettes ont été jetés à la mer, avec ses dés et son rhum. Petit-Jules est libre. Boucaut, en passant devant la cambuse, s'arrête, et regarde Fargue un long moment, de son œil valide. Fargue lui sourit. Il sait qu'il vient de se faire un ennemi pour la vie, et que la vie, sur ce navire, risque d'être courte.",
      ],
      choices: [{ label: "Retourner à la cambuse", fx: { quest: "WO" }, back: "A3f_jours" }] },
  },
  extras: {
    quests: [
      { id: "WO", act: "III", kind: "annexe", title: "Le billet de Petit-Jules", start: "WO_des", doit: "marchandvenise", echo: ["wo:paie", "wo:lettre", "wo:des"] },
    ],
  },
};
