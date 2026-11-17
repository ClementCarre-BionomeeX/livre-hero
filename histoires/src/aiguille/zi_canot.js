// L'Île Folle-Aiguille · side story « Le canot de l'Écueil » (owes its question to Lord Jim: can a man come back from
// one minute of fear?). At the Écueil-Rouge, Victorine goes ashore with the water party: two sailors, and Talec, a quiet
// quartermaster who keeps the boat. The crater rumbles; Talec pushes off and rows to the ship, leaving the three of them
// on the rock. The rumble is nothing. He comes back an hour later, grey. Victorine tells the captain (zi:dit), keeps it
// between them (zi:tait), or asks him to row her alone, next morning, to the foot of the crater (zi:rame). Wired in
// A3w_ecueil.
module.exports = {
  passages: {
    ZI_corvee: { act: "III", title: "Le canot de l'Écueil", place: "ecueil_rouge", ambiance: "nature",
      fx: { meet: "talec" },
      text: [
        "La corvée d'eau part à la troisième heure de l'après-midi : deux matelots avec des seaux de toile, Victorine avec sa sacoche, parce qu'on ne sait jamais ce qu'une eau de volcan porte dans le ventre, et Talec à l'aviron. Talec est quartier-maître, breton, trente ans, carré, taciturne, avec des mains de charpentier et des yeux clairs qui regardent toujours un peu à côté de ce qu'ils regardent. Il a la réputation de la meilleure nage du bord et de la plus mauvaise conversation.",
        "Il échoue le canot dans une anse de roche rouge, sans un mot, et reste assis à l'arrière, l'aviron en travers des genoux. « Je garde le canot », dit-il. C'est la règle. On le laisse.",
        "La source est à deux cents pas, dans une fente du basalte, une eau tiède qui sent l'œuf et le fer. Victorine la goûte du bout de la langue, la crache, la goûte encore. Les matelots attendent son verdict comme un arrêt de cour. Elle a juste le temps de dire qu'on peut la boire, à condition de la laisser reposer une nuit dans les barriques.",
        "Alors la montagne gronde.",
      ],
      choices: [{ label: "Lever la tête vers le cratère", to: "ZI_grondement" }] },
    ZI_grondement: { act: "III", title: "Le canot de l'Écueil", place: "ecueil_rouge", ambiance: "nature",
      text: [
        "C'est un bruit qui vient d'en dessous, de très loin, du fond de la terre, comme un meuble énorme qu'on déplacerait dans une cave. Le sol frémit sous les semelles. Des cailloux roulent. La fumée blanche du cratère s'épaissit d'un coup, devient jaune, s'élargit en champignon, et une pluie de cendre fine se met à tomber, douce, tiède, qui grise les cheveux et les épaules.",
        "Les deux matelots lâchent les seaux et courent vers l'anse. Victorine court derrière eux, sa sacoche contre la poitrine. Ils arrivent sur la roche rouge au moment où le canot, à cinquante brasses déjà, file vers la Cormorane, Talec à la nage, courbé sur ses avirons, qui tire comme un forçat et ne se retourne pas.",
        "Un des matelots crie son nom. Puis un juron. Puis plus rien. Ils restent là, tous les trois, sur la roche, sous la cendre, à regarder le canot rapetisser.",
        "Le grondement cesse. La fumée redevient blanche, et mince, et verticale, comme si rien ne s'était passé. Un oiseau de mer, le seul qu'on ait vu sur l'Écueil, vient se poser sur un rocher à côté d'eux et se lisse les plumes. Le matelot le plus âgé crache par terre. « Il a eu peur d'une indigestion », dit-il.",
      ],
      choices: [{ label: "Attendre le canot", to: "ZI_retour" }] },
    ZI_retour: { act: "III", title: "Le canot de l'Écueil", place: "ecueil_rouge", ambiance: "nature",
      text: [
        "Il revient une heure plus tard. Seul. On l'a vu, depuis l'anse, accoster la Cormorane, rester un long moment accroché à la coupée sans monter, puis repousser et revenir, à une nage lente, cassée, d'homme qui rame vers un tribunal.",
        "Il échoue le canot à la même place. Il ne dit rien. Les matelots montent sans le regarder, avec les seaux, et l'un d'eux, en passant, lui marche exprès sur le pied. Talec ne bouge pas. Il a la figure grise sous la cendre, et les yeux clairs fixés sur le fond du canot, sur l'eau de cale, où flotte un brin de filin.",
        "À bord, on a pris la chose pour un oubli : un canot qui vient à la coupée et repart, c'est un oubli, un seau, un ordre. Il y a trois témoins. Les deux matelots ne parleront pas ; à bord, on règle ces affaires-là entre soi, la nuit, avec les poings, et on ne va pas chez la capitaine. Il reste Victorine.",
        "Pendant la nage, elle est assise en face de lui, à l'arrière. Il rame sans lever les yeux. À mi-chemin, il dit, très bas, pour elle seule : « J'ai entendu le bruit, et après je ramais. Il n'y a rien entre les deux. Je vous le jure. Rien. J'ai cherché. »",
      ],
      choices: [{ label: "Le regarder ramer", to: "ZI_choix" }] },
    ZI_choix: { act: "III", title: "Le canot de l'Écueil", place: "cormorane", ambiance: "mer",
      text: [
        "Victorine a vu cette chose-là avant lui, chez d'autres. Chez un chirurgien de l'Hôtel-Dieu qui avait lâché une artère et quitté la salle en courant, et qu'on avait retrouvé le soir dans une église, à genoux, sans savoir comment il y était entré. Chez un père, à Varnèse, qui s'était sauvé de la maison en feu avant ses enfants, et qui avait passé dix ans à essayer de mourir dans des incendies qui ne voulaient pas de lui. La peur est une seconde de vide entre deux battements du cœur. On y tombe. Personne n'en revient tout à fait.",
        "Elle sait aussi que cet homme tient le canot. Qu'il le tiendra encore, demain, à Lannoz, sur l'île, partout où il faudra que quelqu'un attende à l'arrière avec l'aviron en travers des genoux, pendant que les autres sont à terre. Et que, la prochaine fois, ce sera peut-être le petit mousse, ou la capitaine, ou elle, sur la roche.",
        "Le soir, Talec vient frapper au carré de l'infirmerie. Il reste sur le seuil, sa casquette dans les mains. « Vous allez le dire à la capitaine, dit-il. C'est votre droit. Je voulais seulement savoir quand. Pour être là. »",
      ],
      choices: [
        { label: "« Ce soir. Avec vous. Elle doit savoir qui tient ses canots. »", fx: { flag: "zi:dit" }, to: "ZI_dit" },
        { label: "« Je ne dirai rien. Ce qui s'est passé reste dans le canot. »", fx: { flag: "zi:tait" }, to: "ZI_tait" },
        { label: "« Demain, à l'aube, vous me menez au pied du cratère. Seule. Et vous m'attendez. »", fx: { flag: "zi:rame" }, to: "ZI_rame" },
      ] },
    ZI_dit: { act: "III", title: "Le canot de l'Écueil", place: "cormorane", ambiance: "mer",
      text: [
        "La capitaine Ribaud les reçoit dans la grand-chambre, debout, les mains dans le dos. Talec raconte lui-même. Victorine n'a pas besoin d'ouvrir la bouche ; il dit tout, le bruit, les avirons, la coupée, avec une précision terrible, comme un homme qui lit son propre acte d'accusation et tient à ce qu'il soit complet.",
        "La capitaine écoute sans l'interrompre. Puis elle dit : « Vous ne tiendrez plus un canot à mon bord, Talec. Jamais. Vous passerez à la pompe et aux voiles. Le reste ne regarde que vous. » Elle s'arrête. « Je vous remercie d'être venu. Les hommes qui viennent sont rares. Ceux qui ont abandonné un poste et qui viennent le dire, je n'en ai connu qu'un avant vous, et c'était moi. Sortez. »",
        "Il sort. Victorine reste. La capitaine se verse un verre, n'en offre pas. « Vous avez bien fait, docteur. Je vous en voudrai quand même, un peu, longtemps. On en veut toujours à ceux qui vous obligent à être juste. »",
        "Talec passe le reste du voyage à la pompe et dans la mâture. Il fait le travail de deux hommes. On le laisse en paix, et on lui parle peu.",
      ],
      choices: [{ label: "Remonter sur le pont", fx: { quest: "ZI" }, back: "A3w_ecueil" }] },
    ZI_tait: { act: "III", title: "Le canot de l'Écueil", place: "cormorane", ambiance: "mer",
      text: [
        "Il la regarde longtemps, sur le seuil, comme s'il cherchait le prix. « Merci », dit-il, et le mot a l'air de lui coûter plus cher que tout le reste.",
        "La nuit suivante, dans le poste d'équipage, il y a du bruit, des coups sourds, un juron, puis le silence. Au matin, Talec a l'arcade ouverte et la lèvre fendue, et il vient se faire recoudre à l'infirmerie sans un mot, et les deux matelots de la corvée ont les jointures écorchées. L'affaire est réglée, à la façon du bord. Personne n'en parle plus.",
        "Victorine recoud l'arcade. Elle sent, sous ses doigts, la peau trembler, sans arrêt, d'un petit frisson fin, comme le compas de la capitaine devant la pierre. « Ça passera, dit-elle. — Non, dit Talec. Mais je m'y habituerai. » Et il retourne tenir le canot, à l'aviron, comme avant, les yeux clairs fixés sur la terre où sont les autres, sans jamais les quitter.",
      ],
      choices: [{ label: "Remonter sur le pont", fx: { quest: "ZI" }, back: "A3w_ecueil" }] },
    ZI_rame: { act: "III", title: "Le canot de l'Écueil", place: "ecueil_rouge", ambiance: "nature",
      text: [
        "Il la mène à l'aube, sans un mot, dans l'anse de roche rouge. Elle saute à terre. Elle monte seule, par la pente de cendre, jusqu'au bord du cratère, une heure de marche, et chaque pas fait glisser derrière elle une petite avalanche grise qui roule jusqu'à la mer. De là-haut, on voit le canot, minuscule, dans l'anse, et l'homme à l'arrière.",
        "Elle reste au bord du cratère deux heures. Elle regarde l'intérieur : un puits de roche jaune, fumant, avec au fond une mare de boue grise qui bouillonne, lentement, et crève en bulles grasses, avec un bruit de bouche. L'odeur de soufre brûle les yeux. Vers la deuxième heure, la montagne gronde, une fois, sous ses pieds, moins fort que la veille. Elle reste plantée là, et regarde l'anse.",
        "Le canot est toujours là. L'homme s'est levé, debout à l'arrière, l'aviron serré à deux mains, comme un pieu. Il attend.",
        "Quand elle redescend, il a les mains en sang, à force de serrer le bois. Ils se taisent tous les deux. Il rame jusqu'à la Cormorane, lentement, régulièrement, la meilleure nage du bord. À la coupée, en l'aidant à monter, il dit seulement, sans la regarder : « Il y avait quelque chose entre les deux, cette fois. Je l'ai trouvé. »",
      ],
      choices: [{ label: "Remonter sur le pont", fx: { quest: "ZI" }, back: "A3w_ecueil" }] },
  },
  extras: {
    people: {
      talec: { name: "Talec", aka: ["le quartier-maître"], qui: "Quartier-maître de la Cormorane, la meilleure nage du bord, qui tient le canot." },
    },
    quests: [
      { id: "ZI", act: "III", kind: "annexe", title: "Le canot de l'Écueil", start: "ZI_corvee", doit: "lordjim", echo: ["zi:dit", "zi:tait", "zi:rame"] },
    ],
  },
};
