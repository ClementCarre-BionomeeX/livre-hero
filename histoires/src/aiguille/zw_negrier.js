// L'Île Folle-Aiguille · side story « Le brick des Palmes » (owes its question to Tamango: what is freedom worth to men
// who have taken a ship and cannot sail it?). In the calm of the Sargues, a brick drifts two miles off, sails in rags:
// a slaver of the Côte des Palmes where the captives rose and killed the crew, and have been dying of thirst since,
// unable to steer. Victorine goes over with the boat and water. Their leader, Madou, asks for one thing. She gives water
// and a course, and leaves (zw:eau), obtains from the captain that Lemerle and two men stay aboard to teach them the helm
// while the calm lasts (zw:barre), or accepts the captain's law: an escort to Lannoz, and the Amirauté judge (zw:loi).
// Wired in A3w_jours.
module.exports = {
  passages: {
    ZW_brick: { act: "III", title: "Le brick des Palmes", place: "sargues", ambiance: "mer",
      fx: { meet: "madou" },
      text: [
        "On le voit au lever du jour, à deux milles, pris dans les herbes jaunes comme une mouche dans du miel : un brick, les voiles en lambeaux, les vergues de travers, le pavillon arraché. Il ne bouge pas plus que la Cormorane. Rien ne bouge, dans la mer des Sargues. Mais quand le vent du matin, ce souffle tiède qui ne pousse rien, passe sur lui et vient jusqu'à la Cormorane, la moitié de l'équipage se met à vomir par-dessus le bastingage.",
        "Gobert, qui a navigué sur la Côte des Palmes dans sa jeunesse, devient tout pâle. Il dit, sans regarder personne : « C'est un négrier. Ça se sent à dix milles. On ne l'oublie jamais. »",
        "À la longue-vue, la capitaine Ribaud voit des hommes sur le pont. Beaucoup. Noirs, nus, maigres, assis ou couchés, qui ne font rien. La barre est abandonnée, la mâture vide, et il n'y a pas un blanc à bord. Elle baisse la longue-vue. « Ils se sont révoltés, dit-elle. Ils ont tué l'équipage. Et ils ne savent pas manœuvrer. Ils dérivent depuis des semaines. Ils meurent de soif. » Elle se tait. « Un navire de révoltés, c'est un navire de pirates, au regard de la loi. On devrait passer au large. »",
        "On ne peut passer nulle part : il n'y a pas de vent. Victorine dit qu'elle va y aller, avec le canot et deux barriques d'eau. La capitaine la regarde longtemps. Elle dit oui. Elle donne quatre hommes armés, et un ordre : revenir avant la nuit.",
      ],
      choices: [{ label: "Monter à bord du brick", to: "ZW_pont" }] },
    ZW_pont: { act: "III", title: "Le brick des Palmes", place: "sargues", ambiance: "mer",
      text: [
        "Ils regardent le canot approcher sans un geste. Quand Victorine monte à l'échelle, des dizaines de visages se tournent vers elle, des visages creusés, aux lèvres fendues, aux yeux immenses, et elle voit sur le pont ce qu'elle n'oubliera pas : les fers, encore rivés aux chevilles, avec la chaîne coupée à la hache ; les taches sombres sur les planches, lavées par la pluie et jamais effacées ; et à l'arrière, un tas de vêtements d'officiers, soigneusement plié, avec des souliers alignés.",
        "On ouvre les barriques. Victorine organise la distribution, un gobelet chacun, pas plus, sinon ils en meurent, et ils obéissent, en file, sans se battre, avec une discipline qui la saisit. Il y en a cent douze. Il y en avait deux cents au départ, dit-on. L'entrepont, en dessous, elle n'y descend qu'une fois. Elle remonte et ne dit rien.",
        "Celui qui commande s'appelle Madou. Un homme de trente ans, très grand, une cicatrice de fer rouge sur l'épaule, qui parle un français de marin, appris en six mois de cale, fait de jurons et d'ordres. C'est lui qui a tué le capitaine, avec la barre du cabestan. Il le dit tranquillement. Puis il emmène Victorine à la barre, et il pose la main sur la roue, et il la fait tourner, et il la regarde tourner dans le vide, comme une chose ensorcelée.",
        "« Ça, dit-il. Je ne sais pas. Personne ne sait. Les blancs savaient. Nous, on a pris le navire, et le navire ne veut pas de nous. » Il la regarde. « Tu es de l'autre navire. Ton navire sait. Dis-lui. »",
      ],
      choices: [{ label: "Retraverser, et parler à la capitaine", to: "ZW_capitaine" }] },
    ZW_capitaine: { act: "III", title: "Le brick des Palmes", place: "cormorane", ambiance: "mer",
      text: [
        "La capitaine Ribaud l'écoute dans la grand-chambre, debout, les mains dans le dos, comme toujours quand elle va dire non. Elle dit que la loi est claire. Que des esclaves révoltés qui ont tué leur équipage sont des meurtriers et des pirates, et que la cargaison, puisque c'est ainsi qu'on les appelle, revient à l'armateur, ou, à défaut, à l'Amirauté, au premier juge venu. Que si le vent revient, elle doit escorter le brick jusqu'à Lannoz, où il y a un juge de l'Amirauté. Qu'elle le fera. Qu'elle n'aime pas ça. Qu'elle le fera quand même, parce que sinon c'est elle que le juge pendra.",
        "Puis elle s'assied, et elle se tait un long moment. « Ou bien, dit-elle enfin, plus bas, on ne les a jamais vus. On leur donne de l'eau. On leur dit où est la terre. Et on passe. Ce qu'ils feront ensuite ne regarde ni la loi ni moi. » Elle lève les yeux vers Victorine. « Vous me demandez autre chose. Je le vois. Dites. »",
        "Victorine pense à la barre qui tourne dans le vide. Elle pense que l'eau ne suffira pas : sans quelqu'un qui sache tenir un cap, ils dériveront jusqu'à la mort, avec leurs barriques pleines. Elle pense aussi aux quatre semaines de vivres qui restent, au calme, aux hommes de Fargue qui murmurent, et à ce que coûtera chaque bras prêté à ce brick.",
      ],
      choices: [
        { label: "Leur donner l'eau, et un cap tracé à la craie sur le pont, et repartir", fx: { flag: "zw:eau" }, to: "ZW_eau" },
        { label: "Obtenir que Lemerle et deux hommes leur apprennent la barre, tant que dure le calme", fx: { flag: "zw:barre" }, to: "ZW_barre" },
        { label: "Accepter la loi, et l'escorte jusqu'à Lannoz", fx: { flag: "zw:loi" }, to: "ZW_loi" },
      ] },
    ZW_eau: { act: "III", title: "Le brick des Palmes", place: "sargues", ambiance: "mer",
      text: [
        "On leur porte six barriques. Victorine, à genoux sur le pont du brick, trace à la craie une grande rose des vents, et une flèche, et elle montre à Madou le soleil, le matin, le soir, et la flèche. Le nord-est. Vingt jours, avec du vent. La côte des Palmes, quelque part par là, ou une autre côte, qui ne les connaîtra pas. Madou regarde la flèche longtemps. Il dit qu'il a compris. Elle n'en est pas sûre. Lui non plus.",
        "Le vent revient trois jours plus tard, dans la nuit. Au matin, la Cormorane s'ébranle, et le brick, à deux milles, s'ébranle aussi, poussé par les mêmes risées, ses voiles en lambeaux à demi gonflées, et il tourne lentement, lentement, comme un animal qui cherche sa direction en reniflant. Puis il prend la sienne. Le nord-est, à peu près.",
        "Victorine le regarde à la longue-vue jusqu'à ce qu'il ne soit plus qu'un point. Il y a, à la barre, une silhouette très grande, qui tient la roue des deux mains, et qui ne la lâche pas. Elle ne saura jamais s'il est arrivé quelque part.",
      ],
      choices: [{ label: "Regagner l'infirmerie", fx: { quest: "ZW" }, back: "A3w_jours" }] },
    ZW_barre: { act: "III", title: "Le brick des Palmes", place: "sargues", ambiance: "mer",
      text: [
        "La capitaine dit oui, d'une voix sèche, comme on signe une lettre de change qu'on ne pourra pas payer. Annick Lemerle, la timonière, part sur le brick avec deux matelots volontaires, Rivoal et un autre, et une caisse de biscuit. Elle n'a pas dit un mot. Elle a regardé le brick, elle a craché dans l'eau pour la chance, elle a pris son sac.",
        "Pendant cinq jours de calme, on la voit, à la longue-vue, sur le pont du brick, qui montre. La barre, la boussole, les étoiles. Les drisses, les écoutes, les bras de vergue. Elle fait monter des hommes dans la mâture, par grappes, en hurlant. Elle fait répéter la manœuvre cent fois. Madou est toujours à côté d'elle. Le soir, on entend chanter, sur le brick, un chant qu'on ne connaît pas, très lent, à plusieurs voix, qui monte dans la nuit comme une fumée. À bord de la Cormorane, les hommes de Fargue disent qu'on perd du temps, des bras et des vivres pour des pirates. Fargue lui-même ne dit rien. Il écoute le chant.",
        "Le vent revient le sixième jour. Lemerle revient avec lui, maigre, brûlée, les mains en sang. Le brick appareille en même temps que la Cormorane. Il vire mal, il tremble, il manque de chavirer à la première risée, puis il prend son cap, et il le tient. Madou, à la barre, lève la main vers la Cormorane. Lemerle, sur la dunette, lève la sienne. Elle dit à Victorine, sans la regarder : « Ils apprennent plus vite que nos novices. Ils ont plus de raisons. »",
      ],
      choices: [{ label: "Regagner l'infirmerie", fx: { quest: "ZW" }, back: "A3w_jours" }] },
    ZW_loi: { act: "III", title: "Le brick des Palmes", place: "sargues", ambiance: "mer",
      text: [
        "Elle accepte. Elle se dit qu'à Lannoz il y aura un juge, un procès, des témoins, et qu'un juge peut entendre ce qu'on lui dit de l'entrepont. Elle se le dit plusieurs fois. Le vent revient trois jours plus tard ; on passe une remorque au brick, et la Cormorane le traîne derrière elle, lentement, dans les herbes, comme une barque de pêche traîne un filet trop lourd.",
        "Madou a compris, le premier soir, quand il a vu la remorque. Il est venu à l'avant du brick, au bout de la remorque, et il a regardé Victorine, sur la dunette de la Cormorane, sans un geste. Il est resté là toute la nuit. Le lendemain matin, la remorque a été coupée. Le brick dérivait à un mille, les voiles affalées. On l'a rattrapé. On a passé une autre remorque, et deux hommes armés à bord.",
        "À Lannoz, le juge de l'Amirauté a écouté Victorine, poliment, une heure. Puis il a déclaré le brick de bonne prise, et la cargaison propriété de l'Amirauté, en attendant la vente. Victorine a vu, depuis le quai, les cent douze descendre la passerelle, enchaînés de nouveau, en file, avec la même discipline. Madou marchait le dernier. Il ne l'a pas regardée. Le juge lui a dit, en la raccompagnant, qu'elle avait agi en bonne sujette, et qu'il le noterait.",
      ],
      choices: [{ label: "Regagner l'infirmerie", fx: { quest: "ZW" }, back: "A3w_jours" }] },
  },
  extras: {
    people: {
      madou: { name: "Madou", aka: ["le chef du brick"], qui: "L'homme qui commande les captifs révoltés du brick des Palmes." },
    },
    quests: [
      { id: "ZW", act: "III", kind: "annexe", title: "Le brick des Palmes", start: "ZW_brick", doit: "tamango", echo: ["zw:eau", "zw:barre", "zw:loi"] },
    ],
  },
};
