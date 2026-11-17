// L'Île Folle-Aiguille · side story « La petite veuve de Brisegrève » (owes its question to Laurette, or the Red Seal: what
// does a soldier owe to the one his obedience destroyed?). At Brisegrève, an old sergeant, Hédé, asks Victorine to look
// at a woman of thirty who lives in the garrison and walks every noon to the gate to wait for a husband about to be
// released. Eight years ago, a sealed order opened at the fort made the corporal Hédé command the firing squad that
// shot the young husband, a prisoner of state; since then she has been mad, and he has kept her on his pay. Victorine
// tries the shock of the truth (wj:verite), prescribes the game and the calm (wj:jeu), or tells Hédé that he must say
// it himself (wj:aveu). Wired in A3v_brisegreve.
module.exports = {
  passages: {
    WJ_sergent: { act: "III", title: "La petite veuve de Brisegrève", place: "brisegreve", ambiance: "mer",
      fx: { meet: "hede" },
      text: [
        "Le sergent l'attend au pied de l'échelle, au moment où le canot touche la roche. C'est un vieil homme sec, droit, avec une moustache blanche taillée au cordeau et un uniforme si souvent brossé qu'on voit la trame au coude. Il se présente : le sergent Hédé, trente et un ans de service, dont dix-neuf sur ce caillou. Il a entendu dire qu'il y avait une femme médecin à bord. Il voudrait qu'elle voie quelqu'un. Il dit *quelqu'un* avec une précaution extrême, comme on porte une tasse trop pleine.",
        "Il l'emmène à travers le bourg des soldats, par une ruelle qui monte, entre des maisons basses aux toits de pierre plate lestés de rochers contre le vent. À midi précis, au moment où ils arrivent devant la porte du fort, elle sort d'une des maisons. Une femme de trente ans, mince, en robe grise de bonne coupe usée jusqu'à la corde, un chapeau de paille noué sous le menton, des gants de fil. Elle porte un panier couvert d'un linge blanc. Elle marche jusqu'à la porte du fort, d'un pas pressé, joyeux, et elle s'assied sur le banc de pierre, à côté de la sentinelle, et elle attend, son panier sur les genoux, les yeux sur la porte.",
        "La sentinelle, un jeune soldat, lui dit bonjour, madame, avec un respect affectueux. Elle lui répond, avec un sourire charmant, qu'on va libérer son mari aujourd'hui, que c'est une erreur, que le gouverneur l'a promis, et qu'elle lui a fait des crêpes. Le jeune soldat dit qu'il le sait, madame. Ils ont cette conversation tous les jours, depuis huit ans.",
      ],
      choices: [{ label: "Écouter le sergent, à l'écart", to: "WJ_cachet" }] },
    WJ_cachet: { act: "III", title: "La petite veuve de Brisegrève", place: "brisegreve", ambiance: "mer",
      text: [
        "Il raconte sans s'asseoir, au garde-à-vous, les yeux sur la mer, comme on fait un rapport. Il y a huit ans, une corvette a débarqué à Brisegrève un prisonnier d'État, un jeune homme de vingt-deux ans, avec sa femme, qui avait obtenu de le suivre. Un garçon de rien, un étudiant, qui avait imprimé une feuille contre un ministre. On les a logés ensemble au fort. Ils étaient gais. Ils jouaient aux cartes avec la garde. Le caporal Hédé leur apportait du lait de chèvre.",
        "Le capitaine de la corvette avait apporté aussi une enveloppe, scellée de cire rouge, qu'on ne devait ouvrir qu'au fort. Le gouverneur l'a ouverte devant les officiers. L'ordre était de fusiller le prisonnier dans les vingt-quatre heures, sans jugement, et sans témoins. Le gouverneur a désigné le caporal Hédé pour commander le peloton, parce qu'il était le plus ancien, et parce qu'il était là. Hédé a commandé. À l'aube, dans le fossé du fort, côté mer. Elle a entendu la salve depuis la chambre. Elle est descendue en chemise. Elle a vu.",
        "« Le lendemain, dit le sergent, elle a fait des crêpes, et elle est allée l'attendre à la porte. Depuis, elle attend. Le gouverneur voulait la renvoyer sur le continent, à l'asile de Morlenc. J'ai demandé à la garder. Je paie sa chambre sur ma solde. Je la vois tous les jours. Elle m'appelle *monsieur le caporal*, elle me demande si j'ai des nouvelles, je lui dis que ce sera pour demain. » Il se tourne enfin vers Victorine. « Je voudrais savoir si elle peut guérir, madame. Avant que je meure. Je n'ai personne pour la garder, après. »",
      ],
      choices: [{ label: "Aller s'asseoir sur le banc, à côté d'elle", to: "WJ_banc" }] },
    WJ_banc: { act: "III", title: "La petite veuve de Brisegrève", place: "brisegreve", ambiance: "mer",
      text: [
        "Elle s'appelle Mélisande. Elle le dit à Victorine avec une politesse de salon, en lui offrant une crêpe de son panier, froide, parfaite, saupoudrée de sucre. Elle parle de son mari avec une gaieté intarissable : il est très savant, il écrit des choses que les ministres n'aiment pas, mais c'est un malentendu, il sortira aujourd'hui, le gouverneur est un homme charmant. Elle parle sans s'arrêter, d'une voix douce, en regardant la porte. Ses yeux ne quittent jamais la porte.",
        "Victorine l'écoute. Elle observe. Les mains ne tremblent pas. Le pouls, qu'elle prend en faisant semblant d'admirer un gant, est calme. Le teint est bon. Elle dort, elle mange, elle fait ses crêpes. C'est une folie paisible, organisée, presque confortable, un abri qu'on a bâti au bord du gouffre, pierre à pierre, et où l'on habite sans regarder par la fenêtre. Une seule fois, quand une salve d'exercice claque au loin dans la cour du fort, Mélisande s'interrompt au milieu d'un mot, et pâlit, et ses doigts se crispent sur l'anse du panier. Puis elle reprend la phrase où elle l'avait laissée.",
        "À la Faculté, on enseignait qu'une vérité brutale, assénée au bon moment, pouvait briser ces abris et rendre l'esprit à lui-même, ou le briser lui aussi. On enseignait aussi le contraire. Victorine n'a jamais su lequel des deux maîtres avait raison. Elle sait seulement que le vieux sergent attend sa réponse, au garde-à-vous, à vingt pas, comme il a attendu l'ordre de tirer.",
      ],
      choices: [
        { label: "Lui dire, à elle, doucement, que son mari est mort il y a huit ans", fx: { flag: "wj:verite" }, to: "WJ_verite" },
        { label: "Dire au sergent de continuer le jeu, et de ne jamais rien lui dire", fx: { flag: "wj:jeu" }, to: "WJ_jeu" },
        { label: "Dire au sergent que c'est à lui de le lui dire, et à personne d'autre", fx: { flag: "wj:aveu" }, to: "WJ_aveu" },
      ] },
    WJ_verite: { act: "III", title: "La petite veuve de Brisegrève", place: "brisegreve", ambiance: "mer",
      text: [
        "Elle le dit. Doucement, simplement, en tenant la main gantée dans la sienne : il est mort, madame. Il y a huit ans. À l'aube, dans le fossé, côté mer. Vous l'avez vu. Mélisande la regarde. Elle a cessé de regarder la porte. Pendant un long moment, il ne se passe rien. Puis son visage change, d'un coup, comme une vitre qui se fend, et Victorine voit passer dans ses yeux, en une seconde, huit ans de deuil, entiers, intacts, qui l'attendaient derrière la porte depuis tout ce temps.",
        "Elle ne crie pas. Elle se lève. Elle regarde autour d'elle, la sentinelle, le fort, la mer, le vieux sergent à vingt pas, avec l'air de quelqu'un qui s'éveille dans une maison inconnue. Elle regarde le sergent plus longtemps que le reste. Elle dit, d'une voix tout à fait claire, et tout à fait nouvelle : « C'est vous. C'est vous qui avez dit *feu*. » Le sergent ne bouge pas. Elle laisse tomber son panier, et les crêpes roulent sur la roche, et elle rentre chez elle, seule, d'un pas lent.",
        "Le lendemain, à midi, le banc de pierre reste vide, pour la première fois depuis huit ans. Le sergent dit à Victorine, au moment où le canot pousse, qu'elle a demandé au gouverneur à partir pour le continent par le premier navire, qu'elle a refusé l'argent de sa solde, et qu'elle ne lui adresse plus la parole. Il le dit au garde-à-vous. Il ajoute qu'il ne sait pas si on l'a guérie. Il sait seulement qu'elle est vivante, à présent, et qu'avant, elle ne l'était pas, et que lui, à présent, ne l'est plus beaucoup.",
      ],
      choices: [{ label: "Retourner au canot", fx: { quest: "WJ" }, back: "A3v_brisegreve" }] },
    WJ_jeu: { act: "III", title: "La petite veuve de Brisegrève", place: "brisegreve", ambiance: "mer",
      text: [
        "Elle se lève, remercie Mélisande pour la crêpe, et va trouver le sergent. Elle lui dit que la femme est en bonne santé. Qu'elle dort, qu'elle mange, qu'elle sourit. Que sa folie est un toit, qu'elle s'est bâti elle-même, et qu'on ne démolit pas le toit d'une maison pour faire voir le ciel à ceux qui s'y abritent. Qu'il doit continuer. Lui dire, chaque jour, que ce sera pour demain. Qu'il n'existe pas de meilleur remède, dans aucun traité.",
        "Le sergent la remercie. Il a l'air soulagé, et puis, quand il croit qu'elle ne le regarde plus, il a l'air d'autre chose, que Victorine met un moment à reconnaître : de la déception. Il espérait autre chose. Il espérait, comprend-elle, qu'on lui ordonnerait enfin de dire la vérité, pour n'avoir pas à décider de la dire, comme on lui a ordonné, il y a huit ans, de dire *feu*.",
        "Le lendemain, à midi, en remontant à bord avec les dernières barriques, elle voit, depuis le canot, la petite silhouette grise sur le banc de pierre, devant la porte, son panier sur les genoux. Et à côté d'elle, au garde-à-vous, le vieux sergent, qui lui parle. On ne les entend pas, d'en bas. On les voit seulement, tous les deux, l'un assis, l'autre debout, tournés vers la même porte fermée, attendant ensemble, chacun la sienne, une libération qui ne viendra pas.",
      ],
      choices: [{ label: "Retourner au canot", fx: { quest: "WJ" }, back: "A3v_brisegreve" }] },
    WJ_aveu: { act: "III", title: "La petite veuve de Brisegrève", place: "brisegreve", ambiance: "mer",
      text: [
        "Elle le lui dit, à l'écart, d'une voix basse : elle ne sait pas si la vérité guérira cette femme. Elle sait qu'elle n'a pas le droit de la lui dire, elle, une étrangère, entre deux marées. Si quelqu'un doit la dire, c'est lui. Pas pour la guérir. Pour qu'elle sache à qui elle a affaire, chaque jour, depuis huit ans, quand on lui dit que ce sera pour demain. Le sergent la regarde comme s'il venait de recevoir une balle. Puis il salue, et il s'en va.",
        "Victorine ne le revoit pas de la journée. Le soir, au moment où elle redescend au canot, elle passe devant la maison de Mélisande. La porte est ouverte. Le vieux sergent est à l'intérieur, assis sur une chaise, très droit, son shako sur les genoux. Mélisande est assise en face de lui. Elle ne parle pas. Elle le regarde. Sur la table, entre eux, il y a le panier, et les crêpes de midi, qu'on n'a pas mangées.",
        "Le lendemain, à midi, depuis le canot, Victorine voit Mélisande sortir, comme chaque jour, et marcher vers la porte du fort. Mais elle ne s'assied pas sur le banc. Elle passe devant, sans s'arrêter, et elle descend le sentier, côté mer, jusqu'au fossé. Le sergent la suit, à dix pas, la tête nue. Ils restent là tous les deux, au bord du fossé, longtemps, sans se toucher. La capitaine fait lever l'ancre avant que Victorine ait vu la suite. Elle a, du moins, vu ceci : la femme ne regardait plus la porte.",
      ],
      choices: [{ label: "Retourner au canot", fx: { quest: "WJ" }, back: "A3v_brisegreve" }] },
  },
  extras: {
    people: {
      hede: { name: "Le sergent Hédé", aka: ["le vieux sergent"], qui: "Vieux sergent de la garnison de Brisegrève, dix-neuf ans sur le roc." },
    },
    quests: [
      { id: "WJ", act: "III", kind: "annexe", title: "La petite veuve de Brisegrève", start: "WJ_sergent", doit: "laurette", echo: ["wj:verite", "wj:jeu", "wj:aveu"] },
    ],
  },
};
