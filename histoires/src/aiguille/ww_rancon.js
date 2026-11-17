// L'Île Folle-Aiguille · side story « Le corps du fils » (owes its question to the last song of the Iliad: what does one
// owe to the enemy's grief, and is giving back a body a defeat?). Act V, the last morning: a young mutineer taken in the
// last skirmish, Loeiz Kerbrat, nineteen, died in the night in Victorine's care, in the nave. At dawn, an old man comes
// up the slope alone, unarmed, with a white rag on a stick: his father, Job Kerbrat, cook's mate, of Fargue's people.
// He asks for the body, to bury it on the beach with his own hands. The garrison growls: the dead mutineer goes to the
// sea, like a traitor. Victorine washes and sews the body and gives it back (ww:rend), leaves the decision to the
// captain and the men (ww:garde), or carries the body down herself with the old man, to the beach (ww:porte).
// Wired in A5x_debut.
module.exports = {
  passages: {
    WW_pere: { act: "V", title: "Le corps du fils", place: "misericorde", ambiance: "mer",
      fx: { meet: "kerbrat" },
      text: [
        "Le garçon est mort à quatre heures, sans bruit, entre deux tournées, sur la paille, contre le mur de la nef, là où on l'avait couché avec une balle dans le ventre, l'avant-veille, après l'escarmouche du verger. Loeiz Kerbrat, dix-neuf ans, gabier, mutin. Il a demandé de l'eau, toute la première nuit, et Victorine lui en a donné, contre toutes les règles, parce qu'il allait mourir et qu'elle le savait. La deuxième nuit, il ne demandait plus rien. Il tenait la main de Victorine, et il l'appelait *maman*, poliment, en s'excusant.",
        "À l'aube, la sentinelle crie. Un homme monte la pente, seul, lentement, en s'arrêtant tous les dix pas pour souffler, avec un chiffon blanc noué au bout d'un bâton. Un vieil homme, petit, voûté, à la barbe grise, en tablier de cuisine, sans arme. On le met en joue. Il continue de monter. Il s'arrête devant la porte, sous les canons des mousquets, et il ôte son bonnet, et il le tord dans ses mains.",
        "Il dit qu'il s'appelle Job Kerbrat. Qu'il est aide-cuisinier, sous les ordres de Fargue. Qu'il a appris, par un guetteur, que son fils était mort cette nuit. Il dit qu'il ne vient pas se battre, ni parlementer, ni rien demander pour les autres. Il vient chercher son fils. Pour l'enterrer lui-même, sur la plage, avec ses mains. Il dit qu'il n'a rien à donner en échange, que ce qu'il a sur lui : un couteau de cuisine, une montre en argent qui ne marche plus, et trois piastres. Il les pose par terre, devant la porte. Puis il attend.",
      ],
      choices: [{ label: "Écouter ce qu'en disent les hommes de la garnison", to: "WW_garnison" }] },
    WW_garnison: { act: "V", title: "Le corps du fils", place: "misericorde", ambiance: "mer",
      text: [
        "Ils grondent. Trois des leurs sont morts dans l'escarmouche du verger, couchés dans la fosse de la cour depuis l'avant-veille, et l'un d'eux, Yves Quintin, est mort d'un coup de couteau, peut-être du couteau de ce garçon-là. Un matelot dit que le corps du mutin ira à la mer, cousu dans un sac, sans prière, comme on fait des traîtres. Un autre dit qu'on pourrait garder le vieux, aussi, comme otage, puisqu'il est venu tout seul. Un troisième crache par la meurtrière. Personne ne dit rien de gentil. Ils ont peur, ils sont fatigués, et ils ont un mort de l'autre camp entre les mains, ce qui est un pouvoir, pour des gens qui n'en ont plus aucun.",
        "La capitaine Ribaud est au clocher, avec sa longue-vue, à surveiller la plage. Elle fait dire que, pour un mort, c'est la médecin qui décide. C'est elle qui l'a soigné. C'est son mort. Victorine regarde le corps du garçon, sous le drap, contre le mur. Elle regarde le vieil homme, par la porte entrebâillée, debout dans le soleil, le bonnet tordu dans ses mains. Il a les mêmes oreilles que son fils. Elle ne l'avait pas remarqué, chez le fils. Elle le remarque chez le père.",
        "Elle pense que, dans quelques heures, tout le monde descendra à l'anse, où se décidera ce qui doit se décider entre les deux camps, et que ce qu'on fait ce matin d'un mort pèsera dans la balance, d'un côté ou de l'autre, d'un poids qu'elle ne sait pas mesurer.",
      ],
      choices: [
        { label: "Laver le corps, le coudre dans un drap propre, et le rendre au père", fx: { flag: "ww:rend" }, to: "WW_rend" },
        { label: "Laisser la garnison décider, puisque ce sont eux qui ont perdu des hommes", fx: { flag: "ww:garde" }, to: "WW_garde" },
        { label: "Porter le corps elle-même jusqu'à la plage, avec le vieil homme", fx: { flag: "ww:porte" }, to: "WW_porte" },
      ] },
    WW_rend: { act: "V", title: "Le corps du fils", place: "misericorde", ambiance: "mer",
      text: [
        "Elle le lave elle-même, dans la sacristie, avec l'eau de la source, et elle coud le drap, à grands points de chirurgien, en laissant le visage découvert jusqu'au bout, pour que le père le voie. Les hommes la regardent faire, de la nef, en silence, avec des visages fermés. Personne ne l'aide. Personne ne l'en empêche. Quand elle a fini, elle demande deux hommes pour porter le corps jusqu'à la porte. Personne ne bouge. Puis un vieux gabier se lève, en grommelant, et un autre avec lui.",
        "Le vieil homme s'agenouille devant le corps de son fils, sur le seuil, et il lui touche le visage, longtemps, du bout des doigts, comme un aveugle. Puis il se relève, et il regarde Victorine, et il lui embrasse les mains, toutes les deux, très vite, avant qu'elle puisse les retirer. Il ramasse ses piastres, sa montre et son couteau, et il les lui tend. Elle refuse. Il insiste. Elle prend la montre qui ne marche plus. Il charge le corps sur son dos, à la manière des portefaix, et il redescend la pente, très lentement, plié en deux, sans que personne tire.",
        "Les mousquets de la garnison le suivent jusqu'en bas. Aucun ne part. À midi, on voit, sur la plage, au loin, une fumée, et des hommes debout autour d'un trou, et l'on entend, porté par le vent, un chant de veillée de Morlenc, que quelques-uns, dans la chapelle, reprennent tout bas, sans le vouloir, parce que c'est le même chant chez eux.",
      ],
      choices: [{ label: "Revenir dans la nef", fx: { quest: "WW" }, back: "A5x_debut" }] },
    WW_garde: { act: "V", title: "Le corps du fils", place: "misericorde", ambiance: "mer",
      text: [
        "Elle dit aux hommes que ce sont eux qui ont perdu trois camarades, et que c'est à eux de décider. Elle le dit honnêtement. Elle se sent lâche en le disant, et elle ne sait pas si elle l'est. Ils délibèrent, à voix basse, dans la nef, autour du corps, pendant une heure, pendant que le vieil homme attend dehors, debout, sous le soleil qui monte. Puis le plus âgé vient lui dire leur décision. Le corps ira à la mer. Cousu dans un sac. Sans prière. Le vieux peut rentrer chez les siens. On ne le retiendra pas.",
        "On le lui dit. Il écoute. Il ne supplie pas. Il remet son bonnet. Il ramasse ses piastres, sa montre, son couteau. Il demande seulement, d'une voix tranquille, à quelle heure on jettera le corps, et de quel côté de l'éperon, pour qu'il puisse le regarder partir. On le lui dit. Il redescend la pente.",
        "À midi, deux hommes de la garnison jettent le sac à la mer, du haut de l'éperon, côté nord. En bas, sur les rochers, un petit vieil homme se tient debout, tête nue, le bonnet sur le cœur. Le sac flotte un moment, puis s'enfonce. Le vieil homme ne bouge pas. Il reste là, sur son rocher, tout l'après-midi, à regarder l'eau, et quand la garnison descend vers l'anse, il est toujours là. Les hommes passent près de lui sans le regarder. Plusieurs, plus tard, diront qu'ils ont eu honte. Aucun ne le dit ce jour-là.",
      ],
      choices: [{ label: "Revenir dans la nef", fx: { quest: "WW" }, back: "A5x_debut" }] },
    WW_porte: { act: "V", title: "Le corps du fils", place: "misericorde", ambiance: "mer",
      text: [
        "Elle le lave, elle le coud dans un drap, et puis, au lieu de le rendre sur le seuil, elle prend les pieds, et elle dit au vieil homme de prendre les épaules. Il la regarde, stupéfait. La garnison aussi. Quelqu'un crie qu'elle est folle, qu'ils vont la prendre, qu'on ne la reverra plus. Elle dit qu'elle sera de retour avant midi, et que si elle n'est pas de retour, on saura au moins à quoi s'en tenir sur les gens d'en bas, ce qui est une information militaire de première importance. La capitaine, du clocher, ne dit rien. Elle regarde, avec sa longue-vue.",
        "Ils descendent la pente ensemble, lentement, le corps entre eux, comme deux bûcherons portent un tronc. En bas, à l'orée de la plage, les mutins les attendent. Ils sont vingt, trente, armés, silencieux. Ils s'écartent. Personne ne touche à la médecin. Au premier rang, un vieux gabier à barbe blanche regarde Victorine poser le corps sur le sable, et se redresser, et s'essuyer les mains sur sa jupe. Il ôte son bonnet. Les autres l'imitent, un par un, et la plage entière se découvre, comme à l'église.",
        "Elle aide à creuser. Elle reste jusqu'à ce qu'on ait fini, et que le vieil homme ait planté sur la tombe un aviron, en guise de croix. Puis elle remonte, seule, sans qu'on la suive, sans qu'on lui tire dessus. À la chapelle, on la regarde revenir comme on regarde une revenante. Elle ne sait pas si elle a fait la paix ou si elle a seulement montré qu'on pouvait la faire. Elle sait que, dans quelques heures, les deux camps se retrouveront face à face à l'anse, et qu'elle a vu, ce matin, trente mutins se découvrir devant un drap cousu à points de chirurgien. C'est quelque chose. Elle s'interdit de croire que c'est assez.",
      ],
      choices: [{ label: "Revenir dans la nef", fx: { quest: "WW" }, back: "A5x_debut" }] },
  },
  extras: {
    people: {
      kerbrat: { name: "Job Kerbrat", aka: ["le vieil aide-cuisinier"], qui: "Aide-cuisinier de la Cormorane, passé avec Fargue, père d'un jeune gabier." },
    },
    quests: [
      { id: "WW", act: "V", kind: "annexe", title: "Le corps du fils", start: "WW_pere", doit: "iliade", echo: ["ww:rend", "ww:garde", "ww:porte"] },
    ],
  },
};
