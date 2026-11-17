// L'Île Folle-Aiguille · side story « Le conteur du poteau » (owes its question to The Thousand and One Nights: is a
// story worth a life, and how long may one let a man buy his life one night at a time?). Act IV, Fargue at the
// mutineers' camp: the mutineers have caught old Gwenaël Kerhoas, sailmaker, loyal to the captain, sneaking down to the
// stream. Malandain means to hang him at dawn, as an example. Kerhoas, tied to a post by the fire, begins a story, and
// stops it at the best moment, at cock-crow, and the camp, furious, puts off the hanging to hear the end. Each night he
// begins another. Fargue lets the nights go on (uo:nuits), cuts the ropes one night and sends him back up (uo:libere),
// or ends a story himself, before the camp, with an ending the old man had not foreseen (uo:fin). Wired in A4f_jours.
module.exports = {
  passages: {
    UO_poteau: { act: "IV", title: "Le conteur du poteau", place: "plage", ambiance: "nuit", second: true,
      fx: { meet: "kerhoas" },
      text: [
        "On l'a pris au ruisseau, à la tombée du jour, avec deux bidons vides et un couteau de voilier à la ceinture. Gwenaël Kerhoas, maître voilier, soixante ans, une barbe blanche en éventail, des mains couturées de cicatrices d'aiguille, qui a cousu toutes les voiles de la Cormorane et qui est resté fidèle à la capitaine par habitude plus que par conviction. Malandain le fait attacher au poteau des tentes, près du grand feu, et annonce qu'on le pendra à l'aube, à la vergue d'un cocotier, pour que la chapelle le voie.",
        "Le vieux ne proteste pas. Il demande seulement une chique, qu'on lui refuse, puis un peu d'eau, qu'on lui donne. Puis, au moment où le camp s'installe autour du feu avec le rhum, il se met à parler, tout seul, à voix haute, comme on parle en cousant. Il raconte l'histoire d'un pêcheur de Morlenc qui a trouvé dans son filet une bouteille, bouchée de plomb, cachetée d'un sceau qu'il ne connaissait pas. Le camp écoute d'abord par moquerie. Puis on se tait. Puis on se rapproche.",
        "L'histoire est longue, et bonne. Le pêcheur ouvre la bouteille. Il en sort une fumée qui prend la forme d'une femme. La femme lui promet trois choses s'il la remet dans la bouteille. Le pêcheur hésite. Les hommes, autour du feu, retiennent leur souffle. Le vieux s'arrête net, au moment où le pêcheur va répondre. Il regarde le ciel. Il dit que l'aube vient, qu'il est fatigué, et qu'on le pendra bientôt, de toute façon, alors à quoi bon.",
        "Un hurlement de protestation monte autour du feu. On veut la fin. Malandain jure. Boucaut dit qu'on peut bien le pendre demain. Coquerel dit qu'il veut savoir ce qu'a répondu le pêcheur. Malandain, après un long silence, dit que c'est bon, pour un jour. Le vieux sourit dans sa barbe. Fargue, de l'autre côté du feu, l'a vu sourire.",
      ],
      choices: [{ label: "Laisser passer les nuits, en écoutant", to: "UO_nuits" }] },
    UO_nuits: { act: "IV", title: "Le conteur du poteau", place: "plage", ambiance: "nuit", second: true,
      text: [
        "La deuxième nuit, il finit l'histoire du pêcheur, et il en commence une autre, celle d'un baleinier qui a perdu son ombre dans une tempête, et il s'arrête, à l'aube, au moment où l'ombre frappe à la porte. La troisième nuit, celle d'une sœur qui avait épousé un noyé. La quatrième, celle d'un roi qui voulait acheter la mer. Chaque histoire en contient une autre, qui en contient une autre, comme des boîtes, et chaque fois, au moment où la dernière boîte va s'ouvrir, le vieux regarde le ciel et dit que l'aube vient.",
        "Le camp ne pense plus qu'à ça. Le jour, on se dispute sur ce que fera la sœur, sur ce que dira le roi. On apporte au vieux de l'eau, du biscuit, une chique, une couverture. Coquerel lui gratte le dos. Malandain ne dit plus rien de la pendaison ; il écoute comme les autres, l'œil dur, et il rit aux bons endroits malgré lui. Le poteau est devenu une chaire.",
        "Fargue, lui, compte. Il compte les nuits. Il voit que le vieux faiblit. Il a soixante ans, il est attaché debout depuis quatre jours, il dort assis contre le poteau, il a les chevilles enflées et la voix qui s'use. Il voit aussi que le jeu ne peut pas durer : un jour, l'histoire sera mauvaise, ou le rhum manquera, ou Malandain se lassera, et ce jour-là, à l'aube, on le pendra pour de bon, et la fin de l'histoire avec lui.",
        "La cinquième nuit, après la dernière bordée, quand le camp ronfle, Fargue s'approche du poteau avec un bol de bouillon. Le vieux le boit. Il dit merci. Il dit, très bas, qu'il a encore des histoires pour un mois, peut-être deux. Il dit qu'il ne sait pas s'il a encore des jambes pour un mois. Il regarde Fargue, avec ses yeux de voilier, qui mesurent tout. Il dit qu'il sait que Fargue tient le camp, et que c'est à lui de dire combien de temps dure une histoire.",
      ],
      choices: [
        { label: "Le laisser conter, nuit après nuit, et le nourrir mieux", fx: { flag: "uo:nuits" }, to: "UO_continue" },
        { label: "Couper ses liens, cette nuit, et le renvoyer vers la chapelle", fx: { flag: "uo:libere" }, to: "UO_libere" },
        { label: "Finir lui-même, devant le camp, l'histoire en cours", fx: { flag: "uo:fin" }, to: "UO_fin" },
      ] },
    UO_continue: { act: "IV", title: "Le conteur du poteau", place: "plage", ambiance: "nuit", second: true,
      text: [
        "Fargue dit qu'il ne coupera rien. Il dit qu'une histoire, c'est encore ce qui tient le mieux un camp, mieux que le rhum, mieux que la peur, et qu'un camp qui écoute le soir est un camp qui ne se bat pas. Il dit aussi, plus bas, que les jambes, ça se soigne. Dès le lendemain, il fait détacher le vieux le jour, sous garde, pour qu'il marche, et il le nourrit comme un capitaine. Malandain grogne. Il ne s'y oppose pas. Il veut savoir ce que fera le roi qui voulait acheter la mer.",
        "Les nuits passent. Le vieux conte. Le camp écoute. Quelque chose change, lentement, autour du feu. On se bat moins. On boit moins vite, pour ne pas s'endormir avant la fin. Des hommes qui ne se parlaient plus se disputent sur la sœur du noyé et finissent par rire ensemble. Fargue regarde ça avec une sorte d'effroi admiratif : un vieux voilier attaché à un poteau a fait, en une semaine, ce qu'il n'a pas pu faire en un mois avec sa louche.",
        "Il sait qu'il a fait un pari. Il a laissé un homme acheter sa vie au jour le jour avec sa voix, sans jamais la lui rendre tout à fait. Il le nourrit, il le soigne, il le garde, et il ne le libère pas. Il se dit que le vieux est plus en sécurité au poteau, avec un camp suspendu à ses lèvres, que sur le sentier de la chapelle, sous les fusils des deux bords. C'est peut-être vrai. Il se dit aussi qu'il a besoin de ces histoires autant que les autres. C'est sûrement vrai. Il ne sait pas laquelle des deux raisons l'a décidé.",
      ],
      choices: [{ label: "Retourner à la marmite", fx: { quest: "UO" }, back: "A4f_jours" }] },
    UO_libere: { act: "IV", title: "Le conteur du poteau", place: "plage", ambiance: "nuit", second: true,
      text: [
        "Fargue sort son couteau de cuisine. Il coupe les cordes, aux poignets, aux chevilles. Le vieux manque de tomber ; Fargue le soutient. Il lui donne une gourde, un quignon, et lui montre le chemin du ruisseau, celui que les sentinelles ne surveillent pas, parce que c'est lui qui place les sentinelles. Kerhoas reste un moment debout, en se frottant les poignets. Puis il dit qu'il lui doit la fin d'une histoire, et qu'il la lui dira, un jour, si Dieu le permet. Il s'enfonce dans le noir.",
        "Au matin, le poteau est vide. Le camp se réveille, et la nouvelle court, et une rage terrible monte autour du feu éteint. Pas pour le prisonnier. Pour l'histoire. On voulait savoir ce que ferait le roi. Malandain cherche le coupable. Il regarde Fargue. Fargue tourne sa marmite. Malandain ne dit rien. Il sait. Il garde le savoir pour plus tard, comme on garde une cartouche.",
        "Les soirs suivants, le camp est lugubre. On boit plus. On se bat. Deux hommes se blessent au couteau pour un mot. Fargue regarde ce qu'il a fait : il a sauvé un homme, et il a ôté au camp la seule chose qui le tenait ensemble. Le cinquième soir, n'y tenant plus, Boucaut se lève et dit qu'il connaît une histoire, lui aussi. Il la raconte mal. On se moque. Puis un autre essaie. Puis un autre. Ce sont de mauvaises histoires. On les écoute quand même.",
        "Fargue apprend plus tard, par un homme qui a vu la chapelle de loin, que le vieux voilier y est arrivé à l'aube, sur ses chevilles enflées, et qu'il conte, là-haut aussi, le soir, au feu du chœur. Il se demande si là-haut on lui laisse finir ses histoires. Il pense que oui. Il pense que c'est ce qui sépare les deux camps, plus que la poudre : là-haut, on laisse finir.",
      ],
      choices: [{ label: "Retourner à la marmite", fx: { quest: "UO" }, back: "A4f_jours" }] },
    UO_fin: { act: "IV", title: "Le conteur du poteau", place: "plage", ambiance: "nuit", second: true,
      text: [
        "La sixième nuit, au moment où le vieux, à l'aube, s'arrête au bord de la dernière boîte, celle du roi qui voulait acheter la mer, Fargue se lève de l'autre côté du feu. Il dit qu'il connaît la fin. Le camp se retourne vers lui, stupéfait. Le vieux le regarde. Fargue ne connaît pas la fin. Il l'invente, debout, de sa voix de quartier-maître, en regardant le vieux dans les yeux.",
        "Le roi qui voulait acheter la mer, dit-il, a vidé son trésor sur la plage, pièce par pièce, et la mer a tout pris, et elle est restée la mer. Alors le roi a compris qu'on n'achète pas ce qui ne se vend pas, et il a fait la seule chose qu'un roi ruiné puisse faire : il a gracié tous ses prisonniers, parce qu'il n'avait plus de quoi payer les geôliers. Fargue dit que c'est la fin. Il dit que les histoires, ça finit toujours comme ça : par une grâce, ou par un pendu, et que les bonnes finissent par une grâce.",
        "Il y a un silence. Malandain regarde Fargue, puis le vieux, puis le camp. Les hommes ont compris. Ils regardent Malandain. Pendre le conteur, maintenant, ce serait faire mentir l'histoire, et personne n'aime les histoires qui mentent. Malandain crache dans le feu. Il dit que c'est une fin de curé. Il dit qu'on n'a qu'à laisser le vieux retourner chez les siens, puisqu'il n'a plus rien à raconter. On le détache. On le pousse vers le sentier, à l'aube, sous les rires.",
        "Avant de partir, le vieux passe près de Fargue. Il dit, à voix basse, que ce n'était pas la vraie fin. La vraie fin, c'est que le roi devient pêcheur, et qu'il trouve une bouteille. Il dit que la fin de Fargue est meilleure, parce qu'elle sert à quelque chose. Il dit qu'il la racontera, désormais, à sa façon. Puis il s'en va en boitant. Fargue retourne à sa marmite. Il se dit qu'il vient d'arracher un homme à la mort avec un mensonge, devant trente témoins qui le savaient, et qui ont eu besoin de le croire. Il se dit que c'est peut-être ça, commander.",
      ],
      choices: [{ label: "Retourner à la marmite", fx: { quest: "UO" }, back: "A4f_jours" }] },
  },
  extras: {
    people: {
      kerhoas: { name: "Gwenaël Kerhoas", aka: ["le maître voilier", "le conteur"], qui: "Maître voilier de la Cormorane, resté fidèle à la capitaine, conteur intarissable." },
    },
    quests: [
      { id: "UO", act: "IV", kind: "annexe", title: "Le conteur du poteau", start: "UO_poteau", doit: "milleetunenuits", echo: ["uo:nuits", "uo:libere", "uo:fin"] },
    ],
  },
};
