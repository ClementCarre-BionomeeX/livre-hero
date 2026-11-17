// L'Île Folle-Aiguille · side story « L'aveu de Madame Lebihan » (owes its question to The Princess of Clèves: must a
// wife who has done nothing confess to her husband that she loves another, and is that confession a virtue or a
// cruelty?). Act III, Victorine at Brisegrève: the governor's young wife, Clémence Lebihan, who never dines, sends for
// the doctor for her « vapours ». She loves the young ensign Hervieu de Kerros, who leaves the fort at the end of the
// month; she has never told him, never touched him, and wants to tell her husband everything, so that he will protect
// her from herself. Victorine urges her to confess (um:avoue), counsels silence (um:tait), or tells her to speak once to
// the ensign himself, and to end it (um:enseigne). Wired in A3v_brisegreve.
module.exports = {
  passages: {
    UM_billet: { act: "III", title: "L'aveu de Madame Lebihan", place: "brisegreve", ambiance: "chateau",
      fx: { meet: "clemence" },
      text: [
        "Le billet est écrit d'une petite écriture penchée, sur un papier qui sent l'iris : Madame Lebihan, souffrante, prie la médecin de la Cormorane de bien vouloir monter la voir, à l'heure qui lui conviendra, pour des vapeurs. Victorine ignorait que le gouverneur fût marié. Personne n'en parle au fort. Madame Lebihan ne dîne jamais. On la dit fragile, on la dit pieuse, on la dit très jeune. On la voit, parfois, à une fenêtre de la tour sud, la seule qui ait des rideaux.",
        "L'appartement de la tour est une boîte à bijoux posée dans un cachot : des tentures roses, un clavecin, des oiseaux en cage, un tapis épais, et partout, derrière ce luxe, le granit noir qui suinte. Clémence Lebihan a vingt-six ans. Elle a été mariée à dix-sept, à un homme de trente ans plus âgé, qui collectionne les tabatières et les prisonniers, et qui l'aime, à ce qu'il semble, comme une tabatière de plus, avec beaucoup de soin. Elle est belle, pâle, avec des yeux trop grands et des mains qui ne savent pas où se mettre.",
        "Elle n'a pas de vapeurs. Elle le dit tout de suite, en rougissant. Elle voulait parler à une femme qui ne soit pas d'ici, et qui parte bientôt, et qui soit tenue au secret par son métier. Elle demande si les médecins sont tenus au secret comme les prêtres. Victorine dit que oui, et mieux, parce qu'ils ne donnent pas de pénitence.",
      ],
      choices: [{ label: "L'écouter", to: "UM_confidence" }] },
    UM_confidence: { act: "III", title: "L'aveu de Madame Lebihan", place: "brisegreve", ambiance: "chateau",
      text: [
        "Il s'appelle Hervieu de Kerros. Il est enseigne à la garnison depuis un an. Il a vingt-quatre ans, il lit des poèmes en faisant sa ronde, il dessine les oiseaux de mer sur les marges de ses rapports. Elle l'a vu pour la première fois à la messe du fort, de sa tribune. Elle l'a revu chaque dimanche. Une fois, il lui a tendu son livre de prières, tombé sur une marche. Leurs doigts ne se sont pas touchés. Elle dit cela avec une précision qui fait mal : ils ne se sont pas touchés.",
        "Elle ne lui a jamais parlé, sinon pour dire merci, ce dimanche-là. Il ne lui a jamais rien dit. Elle ne sait même pas s'il sait. Elle croit que oui : il ne regarde plus vers la tribune, depuis l'hiver, et c'est, dit-elle, la chose la plus éloquente qu'un homme ait jamais faite pour elle. Il quitte Brisegrève à la fin du mois, muté à terre. Elle sait que c'est mieux. Elle sait aussi qu'elle n'aura plus rien, après, que la tour, les oiseaux, le clavecin et les tabatières.",
        "Et voici ce qu'elle veut faire. Elle veut tout dire à son mari. Ce soir. Elle veut lui avouer qu'elle aime un autre homme, qu'elle n'a rien fait, qu'elle ne fera rien, mais qu'elle a peur d'elle-même, et qu'elle lui demande de la protéger, de l'emmener loin, de ne plus la laisser aller à la messe, de faire ce qu'il faut. Elle dit qu'elle ne supporte plus de mentir à un homme qui ne lui a jamais rien fait de mal. Elle dit que l'aveu est le seul acte honnête qui lui reste. Elle demande à Victorine ce qu'elle en pense.",
        "Victorine pense au petit homme rond et poudré, à ses trois cents tabatières, à sa terreur des écritures. Elle pense qu'on ne sait jamais ce qu'un aveu fera à celui qui le reçoit. Elle pense que la jeune femme ne lui demande pas un conseil, mais une permission.",
      ],
      choices: [
        { label: "Lui dire d'avouer, puisque c'est ce qu'elle veut", fx: { flag: "um:avoue" }, to: "UM_avoue" },
        { label: "Lui conseiller de se taire, et de laisser partir l'enseigne", fx: { flag: "um:tait" }, to: "UM_tait" },
        { label: "Lui dire de parler une fois à l'enseigne lui-même, pour finir", fx: { flag: "um:enseigne" }, to: "UM_enseigne" },
      ] },
    UM_avoue: { act: "III", title: "L'aveu de Madame Lebihan", place: "brisegreve", ambiance: "chateau",
      text: [
        "Victorine dit qu'un aveu qu'on porte depuis un an finit par empoisonner celui qui le porte, et qu'elle a le droit de s'en décharger sur celui qu'il concerne. Clémence la remercie, très pâle. Elle dit qu'elle parlera ce soir, après le souper de son mari, à l'heure où il range ses tabatières.",
        "Le lendemain matin, le gouverneur Lebihan fait demander la médecin. Il la reçoit dans son cabinet, au milieu de ses vitrines. Il n'est pas poudré. Il n'a pas dormi. Il parle sans regarder Victorine, en tournant une tabatière d'émail entre ses doigts. Il dit que sa femme lui a fait, hier soir, une confidence. Il dit qu'il ne sait pas ce qu'on fait d'une confidence pareille. Il dit qu'il a toujours su qu'il était vieux, et gros, et ridicule, et qu'il avait épousé une enfant, mais qu'il ne savait pas qu'elle le savait aussi.",
        "Il dit qu'il a fait muter l'enseigne de Kerros dès ce matin, avec avancement, sur un navire qui part dans trois jours. Il dit qu'il a écrit une lettre de recommandation très élogieuse. Il dit que ce garçon n'y est pour rien. Puis il ouvre une petite tabatière d'or, vide, et il y range, plié en huit, un papier qu'il tenait dans sa main. Il dit que c'est le premier objet de sa collection qui ait jamais eu de la valeur. Il dit que c'est la lettre où sa femme lui demandait de la protéger. Il dit que personne, jamais, ne lui avait rien demandé.",
        "Victorine sort du cabinet sans savoir si elle a vu un homme brisé ou un homme qui vient de naître. Elle pense aux maris qui auraient fait enfermer leur femme, ou battre l'enseigne, ou qui seraient morts de chagrin. Elle pense que celui-là a fait une chose qu'on ne lit dans aucun roman : il a dit merci. Elle ne sait pas si ça suffira à Clémence, dans sa tour, avec un mari reconnaissant. Elle sait que ce n'est pas rien.",
      ],
      choices: [{ label: "Redescendre au bourg", fx: { quest: "UM" }, back: "A3v_brisegreve" }] },
    UM_tait: { act: "III", title: "L'aveu de Madame Lebihan", place: "brisegreve", ambiance: "chateau",
      text: [
        "Victorine lui dit de se taire. Elle dit qu'un aveu soulage celui qui le fait et charge celui qui le reçoit, et qu'elle n'a pas le droit de mettre sur les épaules de son mari un poids qu'elle ne peut plus porter. Elle dit que l'enseigne part dans quinze jours, et que la plupart des passions qu'on ne nourrit pas meurent de faim. Elle dit que l'honnêteté n'est pas toujours de tout dire, mais parfois de porter seule ce qu'on a fait naître seule.",
        "Clémence l'écoute, les yeux baissés. Elle dit qu'elle comprend. Elle dit que c'est dur. Elle dit que Victorine a sûrement raison, puisque Victorine a l'air de quelqu'un qui a déjà porté des choses seule. Victorine ne répond pas. Elle pense à Hector, à certaines années, à certaines choses qu'elle n'a jamais dites et qu'elle ne dira plus, puisqu'il n'y a plus personne pour les entendre.",
        "Le dimanche, Victorine monte à la messe du fort, avant l'appareillage. Elle regarde la tribune. Clémence Lebihan y est, très droite, les yeux sur son missel. En bas, près du bénitier, un jeune homme blond en uniforme d'enseigne regarde fixement l'autel, et pas une seule fois la tribune. Ils ne se regardent pas pendant toute la messe, avec une application si parfaite que c'est la chose la plus visible de la chapelle. Le gouverneur, au premier rang, compte ses tabatières en pensée, et ne voit rien.",
        "Victorine se dit qu'elle a conseillé le silence, et que le silence tient. Elle se demande combien de temps. Elle se demande si elle a protégé un mari, ou seulement l'ordre du monde, et si c'est la même chose. Elle sait qu'il y aura, dans la tour sud, encore beaucoup de dimanches.",
      ],
      choices: [{ label: "Redescendre au bourg", fx: { quest: "UM" }, back: "A3v_brisegreve" }] },
    UM_enseigne: { act: "III", title: "L'aveu de Madame Lebihan", place: "brisegreve", ambiance: "chateau",
      text: [
        "Victorine lui dit que, s'il faut avouer, ce n'est pas à son mari. C'est à l'autre. Une fois. Pour finir. Elle dit qu'on ne guérit pas d'une chose qu'on n'a jamais dite à celui qu'elle concerne, et qu'il vaut mieux une phrase, une seule, en plein jour, devant témoin, qu'un an de dimanches à regarder une nuque. Clémence la regarde avec terreur. Puis elle demande si Victorine voudra bien être le témoin.",
        "Le lendemain, sur le chemin de ronde, à l'heure où l'enseigne fait sa tournée, Victorine accompagne Madame Lebihan, qui prend l'air pour ses vapeurs. Ils se croisent. L'enseigne salue. Clémence s'arrête. Elle dit, d'une voix qui tremble mais qui porte, qu'elle sait qu'il part, qu'elle lui souhaite d'être heureux, et qu'elle l'aurait aimé, dans une autre vie, et qu'elle n'en a qu'une, et qu'elle la garde. C'est tout. Elle ne dit rien d'autre. Elle n'attend pas de réponse.",
        "L'enseigne de Kerros devient très pâle. Il reste immobile un long moment. Puis il dit, très bas, qu'il le savait, et qu'il aurait voulu ne pas le savoir, et qu'il la remercie de le lui avoir dit, parce que maintenant il pourra partir. Il s'incline. Il lui baise la main, une fois, du bout des lèvres, devant le témoin. C'est la première fois qu'ils se touchent. Puis il continue sa ronde, sans se retourner.",
        "Clémence se tient contre le parapet, les yeux fermés, longtemps. Puis elle dit à Victorine qu'elle se sent vide, et légère, et qu'elle ne savait pas qu'on pouvait mettre fin à une chose en la disant. Elle dit qu'elle ira à la messe dimanche, et qu'elle regardera l'autel. Victorine ne sait pas si elle a donné à cette femme une fin ou un souvenir de plus à garder. Elle sait seulement qu'il y a eu, sur un chemin de ronde de Brisegrève, une main baisée en plein jour, devant témoin, et que c'est peut-être tout ce qu'une vie peut supporter de bonheur interdit.",
      ],
      choices: [{ label: "Redescendre au bourg", fx: { quest: "UM" }, back: "A3v_brisegreve" }] },
  },
  extras: {
    people: {
      clemence: { name: "Clémence Lebihan", aka: ["la femme du gouverneur", "Madame Lebihan"], f: true, qui: "Jeune épouse du gouverneur de Brisegrève, qui vit dans la tour sud et ne dîne jamais." },
    },
    quests: [
      { id: "UM", act: "III", kind: "annexe", title: "L'aveu de Madame Lebihan", start: "UM_billet", doit: "princessecleves", echo: ["um:avoue", "um:tait", "um:enseigne"] },
    ],
  },
};
