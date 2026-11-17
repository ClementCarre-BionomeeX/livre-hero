// L'Île Folle-Aiguille · side story « Le carnet de la cambuse » (owes its question to Balzac's Gobseck: what does the
// man who lends learn about those who borrow, and what does it make of him?). Act III, Fargue in the becalmed sea: a
// young topman asks the cook for an advance on his share of the treasure, and by evening half the forecastle is at
// the cambuse door. Fargue opens a carnet. He hears a dandy who wants a silk scarf, a gambler who fears a beating, and
// a quiet man who wants only a written promise for his mother. He lends at interest and holds the crew by its debts
// (sk:usure), gives from his own savings to the one who asked for nothing (sk:donne), or burns the carnet before the
// whole cambuse (sk:brule). Wired in A3f_jours.
module.exports = {
  passages: {
    SK_avance: { act: "III", title: "Le carnet de la cambuse", place: "sargues", ambiance: "mer", second: true,
      fx: { meet: "lomig" },
      text: [
        "Le premier à venir, c'est Lomig, un gabier de vingt-deux ans, beau comme un valet de cœur, qui porte un anneau d'or à l'oreille gauche et une chemise propre le dimanche, même dans le calme. Il entre dans la cambuse en se baissant, avec un sourire qui a déjà servi. Il demande à Fargue, comme on demande du sel, s'il pourrait lui avancer quelque chose sur sa part du trésor.",
        "Fargue touille sa soupe. Il demande combien. Lomig dit : dix écus. Fargue dit : sur quelle part ? Lomig rit. Tout le monde sait qu'il y a une part. Le baron l'a promise, on en parle au poste tous les soirs, on la compte, on la dépense dix fois. Fargue hoche la tête. Il dit : « Reviens ce soir. »",
        "Le soir, ils sont neuf, à la porte de la cambuse. Le bruit a couru plus vite que le vent, qui ne court plus du tout. Ils attendent en file, gênés, en faisant semblant d'être venus pour un quignon. Fargue les regarde, un par un, par-dessus sa marmite. Il sort de son coffre un carnet relié de toile cirée, tout neuf, acheté à Morlenc pour noter ses recettes. Il l'ouvre à la première page. Il trempe sa plume.",
        "« Un à la fois, dit-il. Et on s'assoit. Ici, on prête assis. »"
      ],
      choices: [
        { label: "Faire entrer les emprunteurs, un par un", to: "SK_file" }
      ] },
    SK_file: { act: "III", title: "Le carnet de la cambuse", place: "sargues", ambiance: "nuit", second: true,
      text: [
        { first: true, text: "La cambuse devient un confessionnal. Fargue s'assied sur son tabouret, le carnet sur le genou, une chandelle sur le fourneau froid. L'emprunteur s'assied en face, sur une caisse de biscuit. La porte reste entrouverte, et la file, dehors, écoute sans en avoir l'air." },
        { first: true, text: "Il apprend vite. Il apprend qu'un homme qui emprunte dit toujours la vérité sur ce qu'il veut, et presque jamais sur pourquoi il le veut. Il apprend que les plus fiers demandent le plus, et que les plus humbles demandent pour un autre. Il apprend qu'un carnet ouvert sur un genou fait parler les hommes mieux que le rhum, parce que le rhum vous fait oublier qui vous êtes, et que le carnet vous oblige à vous en souvenir." },
        { again: true, text: "La chandelle, le carnet ouvert, la caisse de biscuit. La file attend dehors." }
      ],
      choices: [
        { label: "Écouter Lomig, qui veut dix écus pour une écharpe", to: "SK_lomig", hide: { seen: "SK_lomig" } },
        { label: "Écouter Brélivet, le joueur, qui a un œil au beurre noir", to: "SK_brelivet", hide: { seen: "SK_brelivet" } },
        { label: "Écouter Kerneis, le dernier de la file, qui n'a rien demandé", to: "SK_kerneis", hide: { seen: "SK_kerneis" } },
        { label: "Fermer la porte, et décider ce qu'on fait du carnet", to: "SK_choix", if: { count: [{ seen: "SK_lomig" }, { seen: "SK_brelivet" }, { seen: "SK_kerneis" }], min: 2 }, why: "Fargue veut d'abord entendre la file." }
      ] },
    SK_lomig: { act: "III", title: "Le carnet de la cambuse", place: "sargues", ambiance: "nuit", second: true,
      text: [
        "Lomig explique, en riant, avec ses belles dents. À Brisegrève, il a rencontré une fille, sur la jetée. Une fille de sergent. Il lui a promis une écharpe de soie rouge, comme en portent les dames de Morlenc. Le bosco en a une, dans son coffre de pacotille, qu'il vend vingt écus. Lomig en a dix. Il lui en faut dix autres.",
        "Fargue demande s'il reverra la fille. Lomig dit : sûrement pas. Brisegrève est derrière, l'île est devant, et après l'île, avec sa part, il ira à Morlenc, où il y a des filles bien plus belles. Fargue demande alors pourquoi l'écharpe. Lomig cesse de rire. Il cherche. Il dit, au bout d'un moment, avec une sincérité qui le surprend lui-même : « Pour que quelqu'un, quelque part, pense à moi en la mettant. »",
        "Il rit de nouveau, très vite, pour effacer la phrase. Il dit qu'il la lui fera porter par un navire, au retour. Il dit qu'il sait bien que c'est bête. Il dit qu'il rendra quinze, si Fargue veut. Il dit vingt. Il dit qu'il rendra ce qu'il faudra.",
        "Fargue écrit, dans le carnet : Lomig, dix écus, une écharpe pour une fille qu'il ne reverra pas. Il regarde la ligne. C'est la phrase la plus honnête qu'il ait écrite depuis longtemps, et elle est dans un livre de comptes."
      ],
      choices: [
        { back: "SK_file", label: "Retourner au tabouret, devant la file" }
      ] },
    SK_brelivet: { act: "III", title: "Le carnet de la cambuse", place: "sargues", ambiance: "nuit", second: true,
      fx: { meet: "brelivet" },
      text: [
        "Brélivet est un homme de quarante ans aux mains agitées, qui tient sa casquette comme on tient un volant. Il a l'œil gauche fermé, gonflé, violet. Il ne s'assoit pas sur la caisse ; il s'y pose, au bord, prêt à partir. Il parle vite, en regardant la porte.",
        "Il a joué. Aux dés, avec la bordée de bâbord, depuis Brisegrève, tous les soirs, dans la fosse aux câbles. Il a perdu, puis gagné, puis perdu davantage. Il doit, à cette heure, quarante écus, sur sa part, à trois hommes qui ne plaisantent pas. L'œil, c'est un acompte. Il demande quarante écus pour payer, et il jure, sur la tête de ses enfants, qu'il ne jouera plus.",
        "Fargue demande combien il a d'enfants. Brélivet hésite. Il dit trois. Puis il dit deux. Puis il dit qu'il ne sait plus, que sa femme l'a quitté il y a six ans et qu'elle a emmené les petits chez sa mère, à cause des dés, justement. Il dit ça sans honte, avec une sorte de stupeur, comme un homme qui raconte la vie d'un autre.",
        "Ses mains tremblent sur sa casquette. Fargue reconnaît ces mains-là : des mains qui ont envie de lancer quelque chose. Il sait, en le regardant, que s'il lui prête quarante écus ce soir, Brélivet les jouera demain, pour les doubler, avant de payer. Et qu'il perdra. Et qu'il reviendra, avec l'autre œil."
      ],
      choices: [
        { back: "SK_file", label: "Retourner au tabouret, devant la file" }
      ] },
    SK_kerneis: { act: "III", title: "Le carnet de la cambuse", place: "sargues", ambiance: "nuit", second: true,
      fx: { meet: "kerneis" },
      text: [
        "Kerneis est le dernier de la file. Un homme de trente ans, tranquille, au visage tanné et sans âge, que personne ne remarque à bord parce qu'il fait toujours ce qu'on lui dit, bien, et sans bruit. Il s'assoit sur la caisse, droit. Il ne demande pas d'argent.",
        "Il demande que Fargue écrive dans le carnet, de sa belle écriture, que si lui, Kerneis, ne revient pas de l'île, sa part ira à sa mère, Marie-Anne Kerneis, au village de Lannuzec-des-Grèves, et que Fargue, qui sait écrire et qui a de l'autorité, veille à ce que ce soit fait. Il dit qu'il ne sait pas écrire, et qu'il n'a confiance ni dans le baron ni dans les papiers. Il a confiance dans la cuisine.",
        "Fargue demande pourquoi lui. Kerneis réfléchit. Il dit : « Parce que tu donnes à chacun ce qu'il est venu chercher, et un peu plus. Je l'ai vu. Je me suis dit qu'un homme comme ça, quand il promet quelque chose, il le tient, ne serait-ce que pour pouvoir le rappeler après. » Il dit ça sans malice, comme on constate le temps qu'il fait.",
        "Fargue reste un moment sans écrire. Puis il écrit, mot pour mot, ce que Kerneis a dit, en tournant le carnet vers lui pour qu'il voie les lignes, même s'il ne sait pas les lire. Kerneis fait une croix au bas de la page, avec application. Il remercie. Il s'en va. Il est le seul, de toute la file, qui ne doive rien."
      ],
      choices: [
        { back: "SK_file", label: "Retourner au tabouret, devant la file" }
      ] },
    SK_choix: { act: "III", title: "Le carnet de la cambuse", place: "sargues", ambiance: "nuit", second: true,
      text: [
        "La file est partie. Fargue ferme la porte de la cambuse. Il reste seul, avec le carnet ouvert sur le genou, la chandelle qui coule, et neuf noms, neuf sommes, neuf raisons. En haut de la page, la date. En bas, le total. S'il prête à tous, au taux ordinaire des cambuses, un quart en sus, il tient à la fin du voyage une part de la part d'un tiers de l'équipage. Il tient aussi leurs secrets, leurs filles, leurs dés, leurs mères. Ce qui vaut plus que l'argent.",
        "Le surplus, c'est l'investissement. Il l'a toujours dit. Il regarde le carnet, et pour la première fois depuis longtemps, la maxime lui paraît un peu courte."
      ],
      choices: [
        { label: "Prêter à tous, au quart en sus, et garder le carnet sous clef", fx: { flag: "sk:usure" }, to: "SK_usure" },
        { label: "Refuser les prêts, et donner à la mère de Kerneis, de ses propres économies", fx: { flag: "sk:donne" }, to: "SK_donne" },
        { label: "Brûler le carnet, demain, devant toute la cambuse", fx: { flag: "sk:brule" }, to: "SK_brule" }
      ] },
    SK_usure: { act: "III", title: "Le carnet de la cambuse", place: "sargues", ambiance: "mer", second: true,
      text: [
        "Il prête. À tous. Dix écus à Lomig, quarante à Brélivet, des sommes moindres aux autres, chaque fois avec un quart en sus, chaque fois écrit, signé d'une croix ou d'un nom, chaque fois accompagné d'un conseil gratuit, donné à mi-voix, qui vaut plus que le prêt. Le carnet se remplit. Fargue le range dans son coffre, sous clef, et porte la clef à son cou, au bout d'un cordon.",
        "Les jours suivants, la cambuse change d'atmosphère. Les hommes y viennent toujours, mais ils y entrent autrement : en saluant. Ils lui rendent de petits services sans qu'il les demande. Ils lui rapportent ce qui se dit au poste. Brélivet, qui a joué ses quarante écus le lendemain et les a perdus, comme prévu, vient lui dire, en baissant la tête, qui a gagné, et combien, et où l'argent est caché.",
        "Fargue écoute tout. Il note, dans un coin de sa tête qui n'a pas besoin de carnet. Il sait, à présent, plus de choses sur l'équipage que la capitaine, que le bosco, que Malandain. Il est le banquier de la Cormorane. Il l'est devenu sans le vouloir, en une soirée, en ouvrant un carnet acheté pour des recettes.",
        "Un soir, Lomig passe devant la cambuse avec une écharpe de soie rouge autour du cou. Il la porte lui-même. Il dit à Fargue, avec un clin d'œil, qu'elle lui va mieux qu'à la fille. Fargue sourit. Il inscrit, dans sa tête, à côté du nom de Lomig : n'a plus besoin de personne pour penser à lui. Il trouve ça triste, et il en est surpris."
      ],
      choices: [
        { label: "Revenir au fourneau", fx: { quest: "SK" }, back: "A3f_jours" }
      ] },
    SK_donne: { act: "III", title: "Le carnet de la cambuse", place: "sargues", ambiance: "mer", second: true,
      text: [
        "Le lendemain, Fargue rappelle la file. Il dit, devant tous, qu'il ne prêtera rien à personne. Que la cambuse fait de la soupe, pas de la banque. Que celui qui veut de l'argent n'a qu'à attendre l'île, comme tout le monde, et que celui qui joue n'a qu'à perdre en silence, comme un homme. Ils repartent en grognant. Lomig hausse les épaules. Brélivet devient blanc.",
        "Le soir, Fargue ouvre son coffre. Au fond, dans une chaussette de laine, il y a ses économies : quarante-trois écus, gagnés en vingt ans de cuisine, et qu'il gardait pour un projet dont il ne parle jamais. Il en compte trente. Il les coud dans une bourse de toile. Il écrit sur la toile, de sa belle écriture : Marie-Anne Kerneis, Lannuzec-des-Grèves. De la part de son fils. Il range la bourse dans le coffre, à part, pour le premier navire qui passera en sens inverse.",
        "Il garde la chose pour lui. Kerneis a demandé une promesse, rien de plus. Fargue lui a fait une avance sur une promesse, ce qui est, songe-t-il, la seule forme de crédit qu'il n'ait jamais pratiquée.",
        "Deux jours plus tard, il retrouve Brélivet à la porte de la cambuse, l'autre œil gonflé, cette fois. Il le fait entrer. Il lui pose un morceau de viande crue sur l'œil. Il ne lui donne pas un sou. Il le fait éplucher des oignons, tous les soirs, pendant une semaine, à l'heure exacte où les dés roulent dans la fosse aux câbles. Brélivet pleure sur les oignons. Il dit que c'est les oignons."
      ],
      choices: [
        { label: "Revenir au fourneau", fx: { quest: "SK" }, back: "A3f_jours" }
      ] },
    SK_brule: { act: "III", title: "Le carnet de la cambuse", place: "sargues", ambiance: "mer", second: true,
      text: [
        "Le lendemain, à l'heure de la soupe, quand la cambuse est pleine, Fargue sort le carnet de son coffre. Il l'ouvre à la page de la veille. Il lit les noms, à haute voix, l'un après l'autre, avec les sommes. Il ne lit pas les raisons. Les hommes se figent, la cuiller en l'air. Lomig rougit. Brélivet regarde ses pieds.",
        "Puis Fargue arrache la page. Puis la suivante, où il y a la promesse de Kerneis. Il hésite une seconde sur celle-là. Il la plie, la met dans sa poche. Puis il ouvre la porte du fourneau, et il jette le carnet dedans, tout entier, avec les recettes blanches qu'il n'a jamais écrites.",
        "« Sur ce navire, dit-il, on ne doit rien à personne. On doit à la mer, qui se paie toute seule. Celui qui veut une avance sur sa part, qu'il aille la demander au baron. Il lui fera signer un papier, avec un intérêt, et il le lui réclamera avec un huissier. Moi, je fais la soupe. » Il touille. La toile cirée fond en sifflant, et une odeur de cuir brûlé se mêle à celle de la soupe aux pois.",
        "La cambuse se tait. Puis Kerneis, qui est assis au fond, se lève et sort sans un mot. Fargue le retrouve le soir, sur le pont, qui l'attend. Kerneis lui demande s'il a brûlé sa page aussi. Fargue sort de sa poche le papier plié en quatre. Il le lui tend. Kerneis le prend, le regarde, le rend. Il dit : « Garde-le. Chez toi, il est au chaud. »"
      ],
      choices: [
        { label: "Revenir au fourneau", fx: { quest: "SK" }, back: "A3f_jours" }
      ] }
  },
  extras: {
    people: {
      lomig: { name: "Lomig", qui: "Gabier de vingt-deux ans, beau comme un valet de cœur, avec un anneau d'or à l'oreille, qui veut une écharpe de soie pour une fille qu'il ne reverra pas." },
      brelivet: { name: "Brélivet", qui: "Matelot de quarante ans aux mains agitées, joueur de dés, qui doit quarante écus à la bordée de bâbord." },
      kerneis: { name: "Kerneis", qui: "Matelot tranquille, que personne ne remarque, qui demande au cuisinier d'écrire que sa part ira à sa mère." }
    },
    quests: [
      { id: "SK", act: "III", kind: "annexe", title: "Le carnet de la cambuse", start: "SK_avance", doit: "gobseck", echo: ["sk:usure", "sk:donne", "sk:brule"] }
    ]
  }
};
