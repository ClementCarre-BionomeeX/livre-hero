// L'Île Folle-Aiguille · side story « La cloche de la Pélagie » (owes its question to Ibsen's The Wild Duck: must one
// break a family's founding lie in the name of truth, when the lie is what keeps it standing?). Act III, the mousse at
// Lannoz: in the village, the Pezron house keeps, hung over the hearth, the bell of the Pélagie, wrecked forty years ago
// on the reefs of the west. Old Hervé Pezron, the story goes, rowed out alone in the storm and saved six men. His widow
// lives on that story, and his grandson Youenn, fifteen, means to sign on at Morlenc to be worthy of it. Lagadec, who
// was one of the six, recognizes the bell and tells the child, in a low voice, what the old man had really rowed out
// for. The child tells the widow (ur:veuve), tells Youenn before he leaves (ur:youenn), or keeps quiet (ur:tait).
// Wired in A3o_lannoz.
module.exports = {
  passages: {
    UR_maison: { act: "III", title: "La cloche de la Pélagie", place: "lannoz", ambiance: "village",
      fx: { meet: "pezron" },
      text: [
        "Lagadec t'a demandé de l'accompagner au village : il veut acheter du fromage qui pique, et il dit qu'on y comprend mieux sa langue quand on vient avec un enfant. Vous entrez, courbés, dans la maison la plus basse de la rue-ruisseau, parce qu'on y vend du lait. Il y fait noir, chaud, la fumée de tourbe stagne sous le toit et vous pique les yeux. Une vieille femme, menue, très droite, vous fait asseoir près de l'âtre.",
        "Au-dessus de l'âtre, à la place où d'autres maisons ont un crucifix, pend une cloche de navire. Une cloche de bronze, verte de vert-de-gris, grosse comme une tête d'homme, au battant attaché avec un ruban noir pour qu'elle ne sonne pas. Sur la panse, des lettres en relief, que la fumée a noircies et que quelqu'un a frottées, souvent, avec amour, au point de les user : PÉLAGIE.",
        "La vieille femme voit que tu regardes. Elle sourit. Elle s'appelle Tifaine Pezron. C'est la cloche de son mari, dit-elle, ou plutôt la cloche que son mari a rapportée, la nuit où il a sauvé six hommes. Elle raconte. Elle a raconté cette histoire mille fois, tu le vois à la façon dont les phrases tombent à leur place, polies comme des galets.",
        "Il y a quarante ans, une nuit de tempête, un trois-mâts s'est jeté sur les récifs de l'ouest. Hervé Pezron, pêcheur, a vu les feux de détresse depuis la lande. Il a mis son canot à l'eau, seul, dans une mer que personne n'aurait affrontée. Il a fait trois voyages. Il a ramené six hommes. Le navire a coulé avec les autres. Il a ramené la cloche au troisième voyage, arrachée au beffroi qui flottait. Il est mort dix ans plus tard, en mer, et l'on n'a jamais retrouvé son corps.",
        "Lagadec n'a pas touché à son lait. Il regarde la cloche. Il a le visage d'un homme qui voit un mort se lever. Tu remarques que ses mains tremblent.",
      ],
      choices: [{ label: "Sortir avec lui dans la rue-ruisseau", to: "UR_lagadec" }] },
    UR_lagadec: { act: "III", title: "La cloche de la Pélagie", place: "lannoz", ambiance: "village",
      text: [
        "Le petit-fils entre au moment où vous partez. Youenn Pezron, quinze ans, maigre, une figure ardente sous des cheveux noirs coupés au bol. Il apprend que vous êtes de la Cormorane, et il s'illumine. Il dit qu'il partira pour Morlenc au printemps, qu'il s'engagera comme mousse, qu'il sera marin comme son grand-père, et qu'il fera un jour ce que son grand-père a fait. Il dit cela devant la cloche, en la regardant, comme on prête serment.",
        "Dehors, Lagadec marche vite, sans rien dire, jusqu'à un muret à la sortie du village. Il s'assied. Il sort sa pipe et ne l'allume pas. Puis il parle, très bas, en regardant la lande. Il dit qu'il avait dix-sept ans. Il dit qu'il était sur la Pélagie. Il dit qu'il était un des six.",
        "« Il est venu, oui. Seul, oui, dans une mer de fou. Mais il n'est pas venu pour nous. Il est venu pour la cargaison : du drap fin et des barriques d'eau-de-vie, qu'il savait, parce que tout Lannoz savait, que la Pélagie portait. Il a d'abord chargé son canot de barriques. On criait, accrochés au gréement, on le voyait faire. Au deuxième voyage, il a vu qu'on le voyait. Six hommes vivants, c'est six témoins. Il nous a pris. Il nous a ramenés. Il a dit au village qu'il était venu pour nous. »",
        "Lagadec dit qu'il y en avait d'autres, accrochés à l'avant, qu'on a entendus crier jusqu'au matin, et que Pezron n'est pas retourné les chercher, parce que l'avant était trop près des brisants, et que les barriques étaient à l'arrière. Il dit que les six se sont tus. Ils étaient vivants grâce à lui. On ne dénonce pas l'homme qui vous a tiré de l'eau, même s'il vous a tiré de l'eau pour se taire. La cloche, il l'a prise au troisième voyage. Lagadec dit qu'elle pèse soixante livres, et qu'à sa place, dans le canot, il y avait la place d'un homme.",
        "Il allume enfin sa pipe. Il dit qu'il ne dira rien. Il dit qu'il a près de soixante ans et qu'il a fait le serment, il y a quarante ans, avec les cinq autres, sur la grève. Il dit qu'il te l'a dit à toi, parce qu'il ne pouvait plus le garder dans cette maison, devant cette cloche, devant ce garçon. Il dit que tu fais ce que tu veux. Il dit qu'il ne veut pas savoir quoi.",
      ],
      choices: [
        { label: "Retourner dans la maison, et dire la vérité à la vieille Tifaine", fx: { flag: "ur:veuve" }, to: "UR_veuve" },
        { label: "Rattraper Youenn, et lui dire, à lui seul, avant qu'il parte en mer", fx: { flag: "ur:youenn" }, to: "UR_youenn" },
        { label: "Ne rien dire à personne, et laisser la cloche au-dessus de l'âtre", fx: { flag: "ur:tait" }, to: "UR_tait" },
      ] },
    UR_veuve: { act: "III", title: "La cloche de la Pélagie", place: "lannoz", ambiance: "village",
      text: [
        "Tu reviens seul{e}, le lendemain, à l'heure où Youenn est aux tourbières. Tifaine Pezron carde sa laine, près de l'âtre. Tu t'assieds en face d'elle. Tu ne sais pas comment commencer. Alors tu dis simplement qu'un homme de la Cormorane était sur la Pélagie, et qu'il t'a raconté la nuit autrement qu'elle.",
        "Ses mains s'arrêtent. Elle te regarde longtemps. Puis elle dit : « Les barriques. » Elle le dit sans question. Tu te tais. Elle reprend sa laine. Elle dit qu'elle a su, le lendemain, en voyant le drap fin dans la grange et l'eau-de-vie sous le lit. Elle dit qu'elle a brûlé le drap et vidé l'eau-de-vie dans la tourbière, la nuit, seule. Elle dit qu'Hervé ne lui en a jamais parlé, et qu'elle ne lui en a jamais parlé non plus, pendant dix ans, et qu'ils ont été, malgré ça, ou à cause de ça, assez heureux.",
        "Elle dit qu'elle a raconté l'histoire des six hommes mille fois, pour que ce soit elle qui la raconte, et pas le village, et que, à force, l'histoire est devenue vraie, pour tout le monde, sauf pour elle. Elle dit que tu viens de la soulager d'un poids qu'elle portait seule depuis quarante ans : quelqu'un d'autre sait. Elle dit que ça ne change rien. Elle dit merci.",
        "Puis elle te demande, d'une voix très dure, une seule chose : que Youenn ne le sache jamais. Elle dit que l'enfant a besoin d'un grand-père, et qu'elle lui en a fabriqué un, avec ses mains, comme on carde de la laine noire jusqu'à ce qu'elle devienne douce. Elle dit qu'un mensonge qu'on a porté quarante ans finit par tenir un toit. Elle dit que, si tu le retires, la maison tombe. Tu promets. Elle regarde la cloche. Elle dit que c'est elle qui la frotte, tous les matins, depuis quarante ans. Tu comprends qu'elle frotte les lettres pour les effacer.",
      ],
      choices: [{ label: "Regagner le ruisseau", fx: { quest: "UR" }, back: "A3o_lannoz" }] },
    UR_youenn: { act: "III", title: "La cloche de la Pélagie", place: "lannoz", ambiance: "village",
      text: [
        "Tu retrouves Youenn aux tourbières, le lendemain, en train de couper des mottes avec une bêche étroite, torse nu, couvert de boue noire jusqu'aux coudes. Tu l'aides. Vous travaillez une heure côte à côte. Puis, parce qu'il te reparle de son grand-père et de Morlenc, tu lui dis. Tout. Les barriques, les deux premiers voyages, les hommes de l'avant, la cloche à la place d'un homme. Tu lui dis que l'homme qui te l'a raconté était un des six.",
        "Youenn pose sa bêche. Il te regarde avec une haine pure, d'un coup, la haine qu'on a pour celui qui vous arrache une dent. Il dit que tu mens. Il dit que tu mens par jalousie, parce que tu viens de la ville et que ta famille n'a pas de cloche. Il te frappe. Tu ne te défends pas. Il te frappe encore, puis il s'arrête, et il s'assied dans la boue, et il pleure, avec des sanglots d'enfant de quinze ans qui ne savait pas qu'il en avait encore.",
        "Tu restes à côté de lui jusqu'au soir. Il ne dit plus rien. Quand le soleil se couche, il se lève, il reprend sa bêche, et il dit qu'il partira quand même pour Morlenc. Il dit qu'il sera marin. Il dit qu'il fera, un jour, ce que son grand-père a dit qu'il avait fait. Il dit qu'il faudra bien que quelqu'un, dans la famille, le fasse pour de vrai.",
        "Tu ne sais pas si tu as détruit un garçon ou si tu en as fabriqué un autre. Tu sais que, ce soir-là, en passant devant la maison des Pezron, tu as vu, par la porte ouverte, Youenn monté sur un tabouret, qui défaisait le ruban noir du battant. La cloche a sonné, une fois, dans la nuit de Lannoz, et tout le village est sorti sur les seuils. Tifaine, assise devant l'âtre, n'a pas bougé. Elle souriait, peut-être. Il faisait trop sombre pour en être sûr{e}.",
      ],
      choices: [{ label: "Regagner le ruisseau", fx: { quest: "UR" }, back: "A3o_lannoz" }] },
    UR_tait: { act: "III", title: "La cloche de la Pélagie", place: "lannoz", ambiance: "village",
      text: [
        "Tu ne dis rien. Tu retournes à la corvée d'eau avec Lagadec, qui ne te pose aucune question, et qui porte deux barriques à la fois, en silence, comme pour s'épuiser. Le soir, au bivouac du ruisseau, il te donne sa ration de lard sans un mot. Tu la manges. Vous savez tous les deux ce que ça veut dire.",
        "Le deuxième jour, Youenn vient au ruisseau. Il veut voir la Cormorane de près, parler aux marins, toucher les cordages. On le laisse monter dans le canot de Talec. Il pose mille questions. Il demande à Lagadec, parce qu'on lui a dit qu'il était le plus ancien, s'il a connu des sauvetages, de vrais, dans la tempête. Lagadec le regarde longtemps. Puis il dit que oui. Il dit qu'il a connu un homme qui en a sauvé six. Il dit que c'était un homme courageux. C'est vrai, aussi.",
        "Youenn rayonne. Tu le regardes rayonner. Tu penses à la cloche au-dessus de l'âtre, aux lettres usées à force d'être frottées, aux hommes de l'avant qui ont crié jusqu'au matin. Tu penses que cette famille tient debout sur un canot plein de barriques, et qu'elle tient debout quand même, et qu'un garçon de quinze ans va partir en mer pour être digne d'un homme qui n'a jamais existé. Tu te dis qu'il le deviendra peut-être, lui, cet homme. Tu te dis que c'est la seule façon dont un mensonge peut être racheté : quand quelqu'un le rend vrai, après.",
        "Quand la Cormorane lève l'ancre, tu vois, sur la grève, Tifaine Pezron, toute petite et très droite, qui regarde le navire partir. Elle ne fait pas de signe. Elle reste là. Tu as l'impression, absurde, qu'elle sait que tu sais, et qu'elle te remercie, ou qu'elle te maudit. Lagadec, à côté de toi, ôte son bonnet, une seconde, puis le remet.",
      ],
      choices: [{ label: "Regagner le ruisseau", fx: { quest: "UR" }, back: "A3o_lannoz" }] },
  },
  extras: {
    people: {
      pezron: { name: "Tifaine Pezron", aka: ["la vieille Tifaine", "la veuve Pezron"], f: true, qui: "Veuve de Lannoz, qui garde au-dessus de son âtre la cloche d'un trois-mâts naufragé, la Pélagie." },
    },
    quests: [
      { id: "UR", act: "III", kind: "annexe", title: "La cloche de la Pélagie", start: "UR_maison", doit: "canardsauvage", echo: ["ur:veuve", "ur:youenn", "ur:tait"] },
    ],
  },
};
