// L'Île Folle-Aiguille · side story « La poudre rouge » (owes its question to The Shadow-Line: what does one owe to the
// men one is responsible for, once one discovers that the remedy one vouched for is a fraud?). Act III, in the calm: a
// tertian fever, caught from the water taken at the Red Reef, runs through the forecastle. Victorine opens the chest of
// fever bark she bought on the Quai des Hollandes: under the first layer, three quarters of it is brick dust and aloes.
// She tells the whole crew (wm:dit), keeps silent and gives the brick dust to the least sick as if it were bark
// (wm:cache), or goes to ask the baron for the private chest he keeps in the great cabin (wm:baron). Wired in A3w_jours,
// for those who bought the bark.
module.exports = {
  passages: {
    WM_fievre: { act: "III", title: "La poudre rouge", place: "sargues", ambiance: "mer",
      text: [
        "La fièvre arrive au neuvième jour du calme, à heure fixe, comme un créancier. Elle prend un homme à midi, le secoue d'un froid de glace pendant une heure sous le soleil qui cuit le pont, puis le brûle pendant six heures, puis le lâche, trempé, vidé, étonné d'être vivant. Le surlendemain, à midi, elle revient. Une fièvre tierce, de celles qui dorment dans l'eau des marais et des criques. Victorine sait d'où elle vient : les barriques remplies à l'Écueil-Rouge, d'une eau tiède qui dormait au creux de la roche, si claire, si douce, si belle à boire.",
        "Ils sont six, le premier jour. Onze, le troisième. Dans l'entrepont, sous la chaleur, les hamacs des fiévreux tremblent tous ensemble, à la même heure, avec un bruit de feuilles, et les hommes valides passent devant sans les regarder, en se signant à la dérobée, comme on passe devant une maison où il y a eu un crime.",
        "Elle a de quoi. C'est ce qui la tient debout. Dans le coffre de bois sec, au fond de l'infirmerie, il y a les quatre livres d'écorce qu'elle a achetées au Quai des Hollandes, rouges et amères, au prix d'un cheval, en marchandant comme une poissonnière, et en se félicitant du cachet de cire de l'apothicaire, qui garantissait la marchandise. Elle ouvre le coffre pour la première fois. Elle prend la cuiller.",
      ],
      choices: [{ label: "Préparer la première dose", to: "WM_brique" }] },
    WM_brique: { act: "III", title: "La poudre rouge", place: "sargues", ambiance: "nuit",
      text: [
        "La première couche est bonne. Rouge, fine, amère à vous retourner la langue, avec cette odeur de cave et d'écorce mouillée qu'on n'imite pas. Elle en prépare six doses. Puis elle creuse, pour la suite, et la cuiller rencontre une autre couleur. Un rouge plus orange, plus terne. Elle en met sur sa langue. C'est amer, à cause de l'aloès qu'on y a mêlé pour tromper. Sous l'amertume, ça crisse sous la dent. De la brique pilée.",
        "Elle vide le coffre sur une toile, à la lueur de la lanterne, et elle trie, à la pointe du scalpel, comme on trie des lentilles, pendant trois heures. À la fin, il y a sur la toile un petit tas d'écorce vraie, de quoi soigner peut-être cinq hommes jusqu'au bout, et un grand tas de poussière de brique, qui a coûté le prix d'un cheval. Le cachet de cire est intact sur le couvercle. Il est très beau. Elle le regarde longtemps.",
        "Elle aurait pu goûter au Quai des Hollandes. Elle a goûté le dessus. Elle était pressée, il y avait dix choses à faire, l'apothicaire avait l'air honnête, il avait une barbe d'apôtre et une fille à marier. Elle pense à tous les traités qu'elle a lus, et à celui qu'on n'écrit pas, où il serait dit que la faute d'un médecin se mesure en hommes. Il y en a onze dans l'entrepont. Il y en aura d'autres demain.",
      ],
      choices: [
        { label: "Réunir l'équipage, et dire la vérité, toute", fx: { flag: "wm:dit" }, to: "WM_dit" },
        { label: "Garder l'écorce pour les plus atteints, et donner la brique aux autres, sans rien dire", fx: { flag: "wm:cache" }, to: "WM_cache" },
        { label: "Monter à la grand-chambre, où le baron garde son propre coffre", fx: { flag: "wm:baron" }, to: "WM_baron" },
      ] },
    WM_dit: { act: "III", title: "La poudre rouge", place: "sargues", ambiance: "mer",
      text: [
        "Elle le dit au pied du grand mât, devant tous ceux qui tiennent debout, avec le coffre ouvert et les deux tas sur la toile. Elle dit l'apothicaire, le cachet, la brique, l'aloès. Elle dit qu'elle n'a pas goûté. Elle dit qu'il y a de quoi soigner cinq hommes, qu'elle choisira les cinq selon la gravité, et qu'elle soignera les autres avec ce qui reste : l'eau, l'ombre, les compresses, et le temps. Elle dit qu'il en mourra peut-être. Elle ne dit pas *pardon*. Ça lui paraît indécent.",
        "Il y a un silence. Puis Gobert crache par-dessus bord, et il dit, d'une voix que tout le monde entend : « Un apothicaire du Quai des Hollandes. J'aurais pu vous le dire. Ils mettraient de la brique dans l'hostie. » Et quelqu'un rit. Puis un autre. Un rire de marins, sans la moindre gaieté, celui qu'on a dans la tempête quand le mât casse, et qui veut dire : *bon, on y est*. Un gabier valide demande ce qu'il faut faire. Elle le lui dit. Dix hommes se proposent pour éventer les hamacs, la nuit, à tour de rôle.",
        "Il en meurt deux, dans la semaine, de ceux qui n'ont pas eu l'écorce. On les coud dans leurs hamacs. Elle lit les prières, faute d'aumônier à bord. Les hommes l'écoutent tête nue. Quand elle relève les yeux, personne ne la regarde de travers. Elle aurait préféré, peut-être. On la regarde comme on regarde quelqu'un du bord, quelqu'un qui s'est trompé de cap, qui l'a dit, et qui est resté sur le pont. C'est la première fois qu'elle comprend ce que les marins entendent par *du bord*.",
      ],
      choices: [{ label: "Retourner aux hamacs", fx: { quest: "WM" }, back: "A3w_jours" }] },
    WM_cache: { act: "III", title: "La poudre rouge", place: "sargues", ambiance: "nuit",
      text: [
        "Elle range le petit tas d'écorce vraie dans un flacon, à part, sous clef. Elle remet la brique dans le coffre, et le cachet sur le couvercle. Puis elle fait ses tournées, comme avant, avec sa cuiller et son air de médecin. Aux cinq plus atteints, l'écorce. Aux autres, la poudre rouge du coffre, dans un peu de vin, à heure fixe, avec les mêmes mots, la même assurance, la même main sur le front. *Ça va passer. C'est la meilleure écorce du Quai des Hollandes.*",
        "Il se produit une chose qu'elle a lue dans de vieux traités, et à laquelle elle n'a jamais cru. Trois des hommes à la brique guérissent. Pas plus vite que les fièvres ne guérissent seules ; mais ils guérissent en souriant, en la remerciant, en vantant la poudre aux autres. Deux autres meurent. Elle les coud dans leurs hamacs. Un gabier pleure sur le premier en disant qu'il n'aura pas eu de chance, que la poudre ne prend pas sur tout le monde. Elle approuve. Elle lit la prière.",
        "Le soir, elle tient son journal de bord médical, comme chaque soir. Elle écrit la vérité, en latin, pour que personne à bord ne puisse la lire. Elle écrit : *Trois guérisons par la foi et la brique. Deux morts par la brique et le silence.* Elle ajoute, en dessous, après un long moment : *ou par la fièvre*. Elle regarde ces trois mots jusqu'à ce que la chandelle soit presque finie, et elle ne les barre pas.",
      ],
      choices: [{ label: "Retourner aux hamacs", fx: { quest: "WM" }, back: "A3w_jours" }] },
    WM_baron: { act: "III", title: "La poudre rouge", place: "sargues", ambiance: "nuit",
      text: [
        "Le baron Clavières voyage avec son médecin dans un coffre : une petite malle de cuir repoussé doublée de velours vert, avec des compartiments, des flacons à bouchons d'argent, et une boîte d'écorce qu'il a payée, dit-il, le double de son poids en argent fin, à un herboriste qu'il connaît depuis trente ans et qui ne l'a jamais volé. Il l'écoute raconter l'histoire de la brique avec une jubilation à peine dissimulée. « Le cachet de cire, dit-il. Vous avez cru au cachet de cire. Docteur, docteur. Vous qui doutez de tout. »",
        "Puis il ouvre la malle. Il pèse la boîte dans sa main. Il dit qu'il en a besoin, lui, qu'il est un homme âgé, sujet aux fièvres, qu'un armateur malade ne vaut rien et qu'un armateur mort vaut moins encore, et qu'onze matelots, c'est beaucoup, mais qu'on en trouve d'autres dans tous les ports. Victorine attend. Elle connaît assez le baron pour savoir qu'il aime qu'on attende. Il soupire, enfin, avec une immense mauvaise grâce. « La moitié. Et vous me direz merci devant la capitaine. Et vous ne raconterez à personne que j'ai un cœur. Ça me ferait du tort à la Bourse. »",
        "Avec la moitié du baron et le petit tas du coffre, elle soigne tout le monde. Personne ne meurt. Au dîner, devant la capitaine, elle dit merci au baron, comme convenu, et il agite la main, comme on chasse une mouche. Elle n'a jamais su s'il avait fait ça par bonté, par vanité, ou pour le plaisir de la voir lui demander quelque chose. Elle soupçonne que lui non plus. Plus tard, en relisant son journal, elle constate qu'elle a écrit *le baron* pendant trois semaines, et qu'à partir de ce jour-là, elle écrit *Clavières*.",
      ],
      choices: [{ label: "Retourner aux hamacs", fx: { quest: "WM" }, back: "A3w_jours" }] },
  },
  extras: {
    quests: [
      { id: "WM", act: "III", kind: "annexe", title: "La poudre rouge", start: "WM_fievre", doit: "lignedombre", echo: ["wm:dit", "wm:cache", "wm:baron"] },
    ],
  },
};
