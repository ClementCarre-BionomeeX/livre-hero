// L'Île Folle-Aiguille · side story « Le couteau dans le sac » (owes its question to Tolstoy's God Sees the Truth, but
// Waits: what does a man do with the truth when it comes twenty-five years too late, and what is forgiveness worth
// when nothing can be given back?). Act III, the ship's boy at the Écueil-Rouge: old Aurèle Ménez, a quiet topman who
// spent twenty-five years in the hulks for a murder at a cattle fair, recognises in Pélage Coatanroch, a braggart
// shipped at Brisegrève, the man who put the knife in his bag. Then the ship's boy and Ménez both see Coatanroch
// stealing water from the scuttlebutt, and the bosun asks who did it. The boy names him (si:denonce), keeps silent as
// the old man does (si:tait), or pushes the old man to face him (si:face). Optional: SI_bagne. Wired in A3n_ecueil.
module.exports = {
  passages: {
    SI_poste: { act: "III", title: "Le couteau dans le sac", place: "ecueil_rouge", ambiance: "mer",
      fx: { meet: "menez" },
      text: [
        "Aurèle Ménez a soixante ans, une barbe blanche taillée court, et la manie de plier ses affaires au carré, chaque soir, comme si on allait venir les inspecter. Il reste sobre, il jure peu, il fuit les dés. Il prie, à genoux, dans un coin du poste, sans se cacher et sans se montrer. Les hommes l'appellent le Bedeau, sans méchanceté. Il répare tes vareuses sans que tu le lui demandes, et il t'a appris à faire une épissure longue que même Maître Gobert ne sait pas faire aussi bien.",
        "Un soir de mouillage sous l'Écueil, dans la chaleur du poste, un nouveau parle plus fort que les autres. Pélage Coatanroch, embarqué à Brisegrève, cinquante-cinq ans, gros, rouge, une voix de marchand de bestiaux. Il raconte ses affaires. Il dit qu'il a fait toutes les foires de la côte, autrefois, avant la mer, et qu'il en a vu de belles. Il raconte la foire de Penlarvor, il y a vingt-cinq ans, où un maquignon a été tué dans sa charrette, la nuit, et où on a pris un pauvre bougre qui dormait à côté, avec le couteau dans son sac.",
        "« Il criait qu'il était innocent, dit Coatanroch en riant. Ils crient tous. Moi, je l'ai vu partir pour le bagne, attaché à la charrette. Il avait l'air de ne pas comprendre. C'était quelque chose. »",
        "Dans son coin, Aurèle Ménez a cessé de plier sa chemise. Il la tient entre ses mains, à demi pliée. Il regarde Coatanroch. Tu vois son visage, dans la lumière de la lanterne, et tu comprends. Il garde le silence. Il finit de plier sa chemise, au carré, avec beaucoup de soin. Puis il se couche, le visage contre la cloison."
      ],
      choices: [
        { label: "Trouver Ménez, le lendemain, seul à la proue", to: "SI_proue" }
      ] },
    SI_proue: { act: "III", title: "Le couteau dans le sac", place: "ecueil_rouge", ambiance: "mer",
      text: [
        { first: true, text: "Il est assis sur le beaupré, les jambes dans le vide, et il regarde la fumée de l'Écueil. Tu t'assieds à côté de lui. Il a compris pourquoi tu es là." },
        { first: true, text: "Il dit que c'était lui. Le pauvre bougre de Penlarvor. Qu'il avait trente-cinq ans, une femme, deux enfants, une charrette de cidre à vendre. Qu'il dormait sous sa charrette, cette nuit-là, et qu'il s'est réveillé avec des gendarmes autour de lui, et un couteau plein de sang dans son sac, un couteau qu'il n'avait jamais vu. Qu'il a fait vingt-cinq ans. Que sa femme est morte la sixième année. Que ses enfants ont été placés, et qu'il ne sait pas où, et qu'ils ne savent pas qui il est." },
        { first: true, text: "Il dit qu'il avait toujours pensé qu'un jour, il saurait. Il dit qu'il avait cru que savoir ferait quelque chose. Il regarde ses mains. « Eh bien, dit-il, je sais. C'est un gros homme rouge qui rit fort. Et ça ne fait rien. Ma femme est toujours morte. » Il dit ça avec une sorte d'étonnement, comme s'il découvrait une loi de la nature." },
        { again: true, text: "Ménez regarde la fumée de l'Écueil, assis sur le beaupré, ses mains vides sur les genoux." }
      ],
      choices: [
        { label: "Lui demander ce que c'était, le bagne", to: "SI_bagne", hide: { seen: "SI_bagne" } },
        { label: "Aller voir Coatanroch, qui joue aux dés près du cabestan", to: "SI_coatanroch", hide: { seen: "SI_coatanroch" } },
        { label: "Prendre le quart de nuit, cette nuit-là, près du charnier", to: "SI_eau" }
      ] },
    SI_bagne: { act: "III", title: "Le couteau dans le sac", place: "ecueil_rouge", ambiance: "mer",
      text: [
        "Il en parle peu, et précisément, comme un charpentier parle d'un bois. La chaîne de trois mètres, rivée à la cheville, qu'on partageait avec un autre homme, pendant des années, jour et nuit, jusqu'à connaître sa respiration mieux que la sienne. Les fers qu'on ne retirait que pour mourir. Le bonnet vert des condamnés à perpétuité, le bonnet rouge des autres. Lui, il avait le rouge. On le lui a fait remarquer, plusieurs fois, comme une chance.",
        "Il dit que les premières années, il criait qu'il était innocent, comme tous. Puis qu'il a arrêté, parce que les gardes riaient et que les autres forçats riaient aussi, et que le rire, là-bas, était plus dur que le bâton. Il dit qu'il s'est mis à prier la dixième année, parce que c'était la seule chose qu'on ne pouvait pas lui prendre, et qu'il ne sait pas s'il croit. Il dit que ça ne change rien à la prière.",
        "Il te montre sa cheville gauche. Un anneau de peau blanche, lisse, brillante, autour de l'os, comme la marque d'un bracelet qu'on aurait porté si longtemps que la chair a pris sa forme. Il dit qu'il la sent encore, la chaîne, les nuits de pluie. Il dit que l'homme avec qui il la partageait s'appelait Lucas, et qu'il est mort la quinzième année, et qu'ils ont mis deux jours à venir les détacher l'un de l'autre.",
        "Il rabat son pantalon. Il dit qu'il ne faut pas en parler aux autres. Il dit que sur un navire, un ancien forçat, on le regarde toujours, quand quelque chose disparaît."
      ],
      choices: [
        { back: "SI_proue", label: "Retourner à la proue, près de Ménez" }
      ] },
    SI_coatanroch: { act: "III", title: "Le couteau dans le sac", place: "ecueil_rouge", ambiance: "mer",
      text: [
        "Coatanroch joue aux dés contre lui-même, faute d'adversaires, sur le couvercle d'un seau retourné, et il triche, ce qui est un exploit dans ces conditions. Il t'accueille à grands gestes, comme un client. Il te propose une partie, une chique, une gorgée d'une bouteille plate qu'il a sortie de sa ceinture et qui sent le cidre de pommes sures. Tu refuses tout. Il rit et boit pour deux.",
        "Il parle. Il parle bien, avec des mains qui vendent. Il te raconte les foires d'autrefois, les chevaux qu'on faisait trotter avec un piment sous la queue, les vaches qu'on gonflait d'eau la veille pour la pesée, les maquignons qui se tapaient dans la main et se volaient en se tapant. Il dit que c'était un beau métier, plein de vie, et qu'il l'a quitté pour la mer à cause d'une histoire de dettes.",
        "Puis, entre deux phrases, sans changer de voix, il te demande qui est le vieux à la barbe blanche, celui qui prie dans son coin. Depuis quand il navigue. D'où il vient. S'il a de la famille. Il pose ses questions en lançant les dés, sans te regarder, avec cet air détaché qu'ont tous les marchands quand une affaire les intéresse.",
        "Tu réponds que tu ne sais pas. Il hoche la tête. Il ramasse ses dés. Tu remarques qu'il garde, depuis le premier soir, son hamac à l'autre bout du poste, le plus loin possible de celui du Bedeau, et qu'il dort tourné vers lui, les yeux mi-clos, comme un chien qui garde un os ou qui a peur d'un plus gros."
      ],
      choices: [
        { back: "SI_proue", label: "Retourner à la proue, près de Ménez" }
      ] },
    SI_eau: { act: "III", title: "Le couteau dans le sac", place: "ecueil_rouge", ambiance: "nuit",
      fx: { meet: "coatanroch" },
      text: [
        "Le charnier est une barrique cerclée de cuivre, au pied du grand mât, cadenassée, d'où l'on tire chaque jour la ration de chaque homme, mesurée au gobelet, sous l'œil du bosco. Dans le calme qui a précédé l'Écueil, on a appris ce que vaut un gobelet. Voler l'eau, à bord, c'est le crime qui ne se pardonne pas.",
        "À la deuxième heure du quart, tu vois une forme se glisser au pied du mât. Elle a une petite scie, un tuyau de plume, une gourde. Elle travaille vite, sans bruit, à la jointure d'une douelle. Tu reconnais la carrure. Coatanroch. Tu ouvres la bouche pour crier. Une main se pose sur ton bras. Ménez est là, à côté de toi, dans l'ombre. Il a tout vu, lui aussi. Il secoue la tête, une fois.",
        "Au matin, le bosco trouve la douelle percée, rebouchée à la cire, et la barrique plus légère d'une demi-gourde. Il fait aligner l'équipage sur le pont. Il dit, de sa voix des grands jours, qu'il y a un voleur à bord, et qu'il veut le nom avant midi, sinon toute la bordée de quart est privée d'eau pendant trois jours. Il regarde Ménez. Le bosco sait, comme tout le monde, ce qu'on dit des vieux qui ont une marque à la cheville.",
        "« Ménez, dit-il. Tu étais de quart. Tu as vu quelque chose ? » Ménez regarde droit devant lui. Il dit : « Je n'ai rien à dire, maître. » Le bosco se tourne vers toi. Coatanroch, au deuxième rang, est devenu gris. Il te regarde. Ménez ne te regarde pas."
      ],
      choices: [
        { label: "Donner le nom de Coatanroch", fx: { flag: "si:denonce" }, to: "SI_denonce" },
        { label: "Dire, comme Ménez, que tu n'as rien à dire", fx: { flag: "si:tait" }, to: "SI_tait" },
        { label: "Demander au bosco de laisser Ménez parler le premier, seul à seul avec Coatanroch", fx: { flag: "si:face" }, to: "SI_face" }
      ] },
    SI_denonce: { act: "III", title: "Le couteau dans le sac", place: "ecueil_rouge", ambiance: "mer",
      text: [
        "Tu dis le nom. Tu dis la scie, le tuyau de plume, la douelle. Coatanroch nie, puis crie, puis pleure. On fouille son sac. On y trouve la petite scie, et la gourde, encore humide. Le bosco ne dit rien. Il le fait attacher au grand mât, pour la journée, en plein soleil, sans eau, à la vue de tous. C'est la loi du bord, et personne ne la discute.",
        "Ménez, toute la journée, travaille à l'autre bout du pont, sans regarder le grand mât. Le soir, quand on détache Coatanroch, à demi mort de soif, la langue gonflée, c'est Ménez qui lui apporte un gobelet, de sa propre ration, et qui le lui tient pendant qu'il boit, parce qu'il a les mains trop raides. Coatanroch boit. Il le regarde. Ses yeux se mouillent, et il détourne la tête.",
        "Plus tard, dans le noir du poste, Ménez te dit, à voix basse, sans colère : « Tu as bien fait. Tu as dit ce que tu as vu. Personne ne l'avait fait pour moi, à Penlarvor. » Il se tait un moment. « Seulement, maintenant, je ne saurai jamais ce que j'aurais fait. »",
        "Il se retourne contre la cloison. Il dort mal, cette nuit-là. Il se lève deux fois pour prier, à genoux, dans le coin, et tu l'entends, les deux fois, prononcer un nom qui n'est pas celui d'un saint."
      ],
      choices: [
        { label: "Remonter sur le pont, face à l'Écueil", fx: { quest: "SI" }, back: "A3n_ecueil" }
      ] },
    SI_tait: { act: "III", title: "Le couteau dans le sac", place: "ecueil_rouge", ambiance: "nuit",
      text: [
        "Tu dis que tu n'as rien à dire. Le bosco te regarde longtemps, puis il hausse les épaules. La bordée de quart est privée d'eau trois jours, toi, Ménez, et quatre autres qui n'y sont pour rien et qui vous regardent de travers. Le troisième jour, tu as la langue comme du cuir. Ménez, à côté de toi, prie, les lèvres sèches et blanches.",
        "La troisième nuit, quelqu'un s'agenouille près du hamac de Ménez, dans le noir. Tu reconnais la voix, basse, cassée. Coatanroch. Il pleure. Il dit qu'il sait qui il est. Qu'il l'a reconnu le premier soir, à sa façon de plier sa chemise, la même qu'à Penlarvor, sous la charrette. Il dit que c'est lui qui a tué le maquignon, pour une bourse de quarante écus, et qu'il a mis le couteau dans le sac du premier homme qui dormait. Il dit qu'il a vécu vingt-cinq ans avec ça et qu'il n'en peut plus. Il dit : « Dénonce-moi. Je dirai tout à la capitaine. Pardonne-moi. »",
        "Ménez ne répond pas tout de suite. Puis il dit, très doucement, si doucement que tu l'entends à peine : « Dieu te pardonnera, peut-être. Moi, je ne sais pas. Je ne sais plus ce que c'est. Va te coucher. » Coatanroch reste encore un moment à genoux. Puis il s'en va.",
        "Le lendemain, Ménez est calme. Il plie ses affaires au carré. Il te dit qu'il a dormi d'une traite, pour la première fois depuis des années. Il dit qu'il n'a plus envie de rien savoir. Il a l'air, ce matin-là, d'un homme très vieux et très léger, qui pourrait s'envoler du beaupré au premier coup de vent."
      ],
      choices: [
        { label: "Remonter sur le pont, face à l'Écueil", fx: { quest: "SI" }, back: "A3n_ecueil" }
      ] },
    SI_face: { act: "III", title: "Le couteau dans le sac", place: "ecueil_rouge", ambiance: "mer",
      text: [
        "Le bosco te dévisage, étonné, puis Ménez, puis Coatanroch, qui transpire à grosses gouttes. Il est plus fin qu'il n'en a l'air. Il dit : « Une heure. Dans la fosse aux câbles. Après, je veux un nom. » Il fait rompre les rangs.",
        "Dans la fosse aux câbles, à l'avant, sous le pont, il fait noir et chaud et l'on se tient courbé. Ménez s'assied sur un rouleau de chanvre. Coatanroch reste debout, la tête contre les barrots. Tu restes à l'échelle, parce que Ménez te l'a demandé. Ménez dit seulement : « Penlarvor. La charrette de cidre. Tu te rappelles ? »",
        "Coatanroch nie d'abord, longtemps, avec une voix de marchand qui cherche un client. Puis il se tait. Puis il s'assied à son tour, par terre, dans le chanvre, et il dit oui. Il dit tout. La bourse, le couteau, le sac. Il dit qu'il a pensé à lui toutes les nuits pendant vingt-cinq ans, et Ménez dit, avec une petite voix sèche : « Moi aussi. » C'est le seul moment où il élève un peu la voix.",
        "Au bout de l'heure, ils remontent. Coatanroch va droit au bosco et se dénonce pour l'eau. Pour l'eau seulement. Il prend sa journée au grand mât. Ménez lui porte à boire, le soir. Il ne le lui tient pas. Il pose le gobelet à ses pieds, et il s'en va. Tu ne sauras jamais tout ce qui s'est dit dans la fosse aux câbles. Tu sais seulement que, le lendemain, les deux hommes travaillent côte à côte à épisser un câble, sans se parler, et que leurs mains, à un moment, se croisent sur le même toron."
      ],
      choices: [
        { label: "Remonter sur le pont, face à l'Écueil", fx: { quest: "SI" }, back: "A3n_ecueil" }
      ] }
  },
  extras: {
    people: {
      menez: { name: "Aurèle Ménez", aka: ["le Bedeau"], qui: "Vieux gabier qui plie ses affaires au carré et prie dans un coin du poste ; il a fait vingt-cinq ans de bagne pour un meurtre commis à la foire de Penlarvor." },
      coatanroch: { name: "Pélage Coatanroch", qui: "Ancien marchand de bestiaux embarqué à Brisegrève, gros, rouge, beau parleur, qui raconte trop volontiers la foire de Penlarvor." }
    },
    quests: [
      { id: "SI", act: "III", kind: "annexe", title: "Le couteau dans le sac", start: "SI_poste", doit: "dieuvoit", echo: ["si:denonce", "si:tait", "si:face"] }
    ]
  }
};
