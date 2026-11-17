// L'Île Folle-Aiguille · side story « Le preneur de rats » (owes its question to the legend of the Pied Piper: what
// does a town owe the man who cleans its filth, and who pays when it cheats him?). Act II, the ship's boy at Morlenc:
// the Basse-Fosse was overrun with rats since the salt-marsh flooded; the aldermen promised a hundred crowns to whoever
// would rid the quarter of them; a thin man with a bone fife led them into the estuary in three nights, and was paid
// ten sous. The boy hears him, goes to see the alderman, and that night, when the fife plays another tune and the
// children of the quarter come out barefoot and asleep, he follows them to the alderman's door (tq:suit), snatches the
// fife (tq:flute), or pays the man himself, with everything in his pockets (tq:paye). Wired in A2m_bf.
module.exports = {
  passages: {
    TQ_fifre: { act: "II", title: "Le preneur de rats", place: "basse_fosse", ambiance: "ville",
      fx: { meet: "pezennec" },
      text: [
        "Dans une ruelle qui descend vers la saline, un homme est assis sur une borne, sous la pluie fine, et joue d'un fifre. Un air de rien, trois notes qui montent, deux qui descendent, recommencées sans fin. Il est maigre comme une perche à haricots, vêtu d'un manteau fait de cent morceaux d'étoffe de toutes les couleurs, cousus ensemble sans souci d'assortiment, comme un drapeau de nation inconnue. Son fifre est en os, jauni, percé de six trous.",
        "Autour de lui, la ruelle est propre. C'est la première chose qu'on remarque à la Basse-Fosse, où rien ne l'est : pas un rat. On en voyait, dit-on, cent par nuit, le mois dernier, depuis que la grande marée a noyé la saline et les a chassés vers les maisons. Ils mangeaient le pain dans les huches et les doigts des nourrissons dans les berceaux.",
        "L'homme cesse de jouer quand tu passes. Il te regarde. Il a des yeux très clairs, presque blancs, dans une figure brune et ridée. « Tu cherches quelque chose, mousse ? dit-il. Des bras, je parie. Maître Gobert cherche toujours des bras. Moi, j'ai des bras, et je n'ai pas d'ouvrage. Assieds-toi. Je vais te raconter comment on paie les gens, à Morlenc. »"
      ],
      choices: [
        { label: "T'asseoir sur la borne voisine et l'écouter", to: "TQ_recit" }
      ] },
    TQ_recit: { act: "II", title: "Le preneur de rats", place: "basse_fosse", ambiance: "ville",
      text: [
        "Il s'appelle Mathurin Pézennec. Il est preneur de rats de son métier, de père en fils, depuis le temps où l'on payait les rats à la queue. Il est arrivé à Morlenc il y a quinze jours, sur une affiche des échevins, collée à toutes les portes : cent écus à quiconque délivrera la Basse-Fosse de sa vermine.",
        "« J'ai joué trois nuits, dit-il. Trois nuits, à marée basse, en marchant du haut de la rue des Cordiers jusqu'à la vase de l'estuaire. Ils sont sortis de partout. Des caves, des greniers, des égouts, des berceaux. Ils m'ont suivi en rangs, comme des moines à la procession, les gros devant, les petits derrière. Je suis entré dans la vase jusqu'aux genoux. Eux, jusqu'aux oreilles. La marée est montée. Fini. »",
        "Il crache. « Le lendemain, je suis allé chercher mes cent écus à l'hôtel des Échevins. Maître Glémarec m'a reçu, le premier des échevins, un homme qui a une chaîne d'or sur le ventre et un ventre sous la chaîne. Il m'a donné dix sous. Dix. Il m'a dit que les rats seraient partis tout seuls, avec la marée, que l'affiche était une façon de parler, et que, de toute manière, aucun tribunal de Morlenc ne condamnerait la ville à payer un homme pour avoir joué du fifre. Il a ri. Ses commis aussi. »",
        "Il porte le fifre à ses lèvres, joue les trois notes qui montent, s'arrête avant les deux qui descendent.",
        "« Je connais d'autres airs, dit-il doucement. Ce soir, j'en jouerai un autre. Je voulais que quelqu'un le sache, avant. Un mousse, c'est bien. Ça part, un mousse. »"
      ],
      choices: [
        { label: "Monter à l'hôtel des Échevins voir ce maître Glémarec", to: "TQ_echevin" },
        { label: "Attendre la nuit dans la ruelle", to: "TQ_nuit" }
      ] },
    TQ_echevin: { act: "II", title: "Le preneur de rats", place: "haute_ville", ambiance: "ville",
      fx: { meet: "glemarec" },
      text: [
        "L'hôtel des Échevins est un bâtiment de granit gris, à colonnes, avec des fenêtres hautes où l'on voit des commis écrire debout. On te fait attendre une heure sur un banc, sous le portrait d'un échevin mort qui a l'air d'avoir eu une indigestion. Puis on te reçoit cinq minutes.",
        "Maître Glémarec est exactement tel qu'on te l'a décrit, avec, en plus, des favoris roux et une voix de baryton dont il est fier. Il t'écoute en signant des papiers. Quand tu as fini, il pose sa plume.",
        "« Mon enfant, dit-il, la ville a des dépenses. Elle a des pauvres, qu'il faut nourrir. Elle a un quai, qu'il faut réparer. Elle a des échevins, qu'il faut bien loger. Cent écus pour un air de fifre, c'est un luxe que les contribuables ne comprendraient pas. Dix sous, c'est déjà beaucoup pour un vagabond qui a eu de la chance avec la marée. »",
        "Il te sourit. « Et puis, entre nous, s'il n'est pas content, qu'il aille jouer ailleurs. Les rats sont noyés. Ils ne reviendront pas lui rendre service. » Il rit, de son beau rire de baryton, et ses commis rient, derrière leurs pupitres, au même moment, comme un chœur bien dressé.",
        "Tu redescends l'escalier. Tu remarques, en passant dans le vestibule, un petit garçon en col de dentelle, cinq ans, qui joue avec un cerceau sous le portrait de l'échevin mort. Un commis te dit que c'est le fils de maître Glémarec. Il a peur des rats. Il est bien content qu'il n'y en ait plus."
      ],
      choices: [
        { label: "Attendre la nuit dans la ruelle du fifre", to: "TQ_nuit" }
      ] },
    TQ_nuit: { act: "II", title: "Le preneur de rats", place: "basse_fosse", ambiance: "nuit",
      text: [
        "La nuit tombe sur la Basse-Fosse comme un couvercle. La pluie a cessé. Il y a, au-dessus de la saline, une lune trouble, couleur de lait tourné, et la marée est basse, très basse : l'estuaire n'est plus qu'une plaine de vase luisante, où les épaves des barques dorment sur le flanc, et d'où monte une odeur d'œufs et de sel.",
        "Minuit sonne à la chapelle murée. Et le fifre commence.",
        "C'est un autre air. Tu le sais tout de suite. Il est doux, très doux, plus doux qu'une berceuse, et il ne monte ni ne descend : il tourne, en rond, comme une ronde d'enfants, comme une toupie, comme l'eau dans un évier. Il entre dans les oreilles et s'y installe. Tu te surprends à marcher. Tu t'arrêtes. Tu te mords la joue, fort.",
        "Les portes s'ouvrent. Toutes les portes de la ruelle, une à une, sans bruit. Et les enfants sortent. Les enfants de la Basse-Fosse, en chemise, pieds nus, les yeux ouverts et vides, les bras le long du corps, des petits, des grands, des filles avec leurs cheveux défaits, des garçons qui tiennent par la main des frères plus petits. Ils sortent de partout. Des caves, des greniers, des soupentes. Ils suivent la ruelle. Ils descendent vers la saline. Ils sont trente, cinquante, tu ne comptes plus.",
        "Devant eux, dans son manteau de cent couleurs, le preneur de rats marche lentement, en jouant, vers la vase."
      ],
      choices: [
        { label: "Les suivre", to: "TQ_greve" }
      ] },
    TQ_greve: { act: "II", title: "Le preneur de rats", place: "basse_fosse", ambiance: "nuit",
      text: [
        "Tu marches dans le cortège, entre une fillette qui suce son pouce en dormant et un grand garçon roux qui pleure sans s'en apercevoir. Personne d'autre n'est réveillé. Les parents dorment. La Basse-Fosse dort. Seul un chien aboie, très loin, puis se tait, comme si on lui avait mis la main sur la gueule.",
        "Le preneur de rats arrive au bord de la vase. Il s'arrête. Il continue à jouer. Les enfants s'arrêtent derrière lui, en rangs, sur la dernière bande de galets, et attendent.",
        "Puis il se retourne, sans cesser de jouer, et il te regarde. Il te voit, toi, éveillé{e}, au milieu des endormis. Il cligne de l'œil.",
        "Il se remet en marche, le dos à la vase. Il tourne à gauche, le long de la grève, vers l'escalier de pierre qui monte de la saline jusqu'à la Haute-Ville. Vers l'hôtel des Échevins, et la maison de maître Glémarec, qui est derrière.",
        "Au loin, à l'ouest, sur l'estuaire, tu entends le premier murmure du flot qui remonte."
      ],
      choices: [
        { label: "Les suivre jusqu'à la porte de maître Glémarec", fx: { flag: "tq:suit" }, to: "TQ_porte" },
        { label: "Courir arracher le fifre des mains du preneur de rats", fx: { flag: "tq:flute" }, to: "TQ_arrache" },
        { label: "Le rattraper et lui tendre tout ce que tu as dans les poches", fx: { flag: "tq:paye" }, to: "TQ_paye" }
      ] },
    TQ_porte: { act: "II", title: "Le preneur de rats", place: "haute_ville", ambiance: "nuit",
      text: [
        "Tu montes avec eux. L'escalier de la saline, la rue des Juges, la place des Échevins. Cinquante enfants pieds nus sur les pavés de la Haute-Ville, en chemise, en silence, derrière un fifre, sous la lune de lait tourné. Les volets restent fermés. Les bourgeois dorment bien.",
        "Devant la maison de maître Glémarec, le preneur de rats s'arrête. Les enfants l'entourent. Ils se placent, d'eux-mêmes, en cercle, autour de la maison, contre les murs, sous les fenêtres, devant la porte, comme des sentinelles. Puis le fifre se tait. Et les enfants restent là, immobiles, les yeux ouverts, à regarder la maison.",
        "Le preneur de rats te tend un marteau de porte imaginaire, d'un geste de théâtre. Tu comprends. Tu frappes.",
        "Maître Glémarec ouvre lui-même, en chemise de nuit, une chandelle à la main, la chaîne d'or autour du cou, par habitude. Il voit. Il voit cinquante enfants de la Basse-Fosse, maigres, sales, pieds nus, qui le regardent. Il voit, au milieu d'eux, son propre fils, en chemise de dentelle, les yeux ouverts et vides, qui tient la main d'une petite fille de la saline.",
        "Il pâlit. Il recule. Il dit : « Combien ? » Le preneur de rats dit : « Cent écus. Et dix sous, que je vous rends. » Il pose les dix sous sur le seuil.",
        "Maître Glémarec monte, redescend, compte cent écus dans une bourse avec des mains qui tremblent. Le fifre joue trois notes qui descendent. Les enfants se réveillent, se frottent les yeux, ne savent pas où ils sont, et rentrent chez eux en se tenant par la main, à travers la Haute-Ville, en riant. Le fils de l'échevin court se jeter dans les jambes de son père. Il dit qu'il a fait un rêve. Il a rêvé qu'il avait plein d'amis."
      ],
      choices: [
        { label: "Redescendre à la Basse-Fosse", fx: { quest: "TQ" }, back: "A2m_bf" }
      ] },
    TQ_arrache: { act: "II", title: "Le preneur de rats", place: "basse_fosse", ambiance: "nuit",
      text: [
        "Tu cours. Tu le rattrapes au pied de l'escalier, et tu lui arraches le fifre des mains. Il ne résiste pas. L'os est tiède, presque vivant. Tu le jettes de toutes tes forces dans la vase, où il s'enfonce sans bruit.",
        "Le silence tombe. Et les enfants se réveillent.",
        "Ils se réveillent tous à la fois, au bord de la vase, dans la nuit, pieds nus, en chemise, et ils se mettent à crier. Les petits hurlent. Les grands appellent leurs mères. Une fillette tombe dans la vase et s'y enfonce jusqu'à la taille. Le flot arrive, au loin, avec son grondement de charrette. Tu cours, tu tires la fillette, tu cries aux grands de prendre les petits, tu les pousses vers les maisons. Les fenêtres s'allument. Les parents sortent, en chemise eux aussi, en criant.",
        "Quand tout le monde est rentré, quand le flot a recouvert la vase, tu te retournes. Le preneur de rats est assis sur la dernière marche de l'escalier, la tête dans ses mains. Il pleure.",
        "« Je ne leur aurais pas fait de mal, dit-il. Je voulais seulement les montrer. Les montrer à ceux d'en haut. Qu'ils voient ce qu'ils ont oublié de payer. » Il se lève. « Mon père l'a fait, une fois. Il a mené les enfants jusqu'à l'église, et les bourgeois ont payé. Moi, je n'ai plus de fifre. Je n'ai plus rien. »",
        "Il s'en va, au petit jour, par la route de la côte. Tu regardes la saline, la vase, les trous des caves, et tu te demandes ce que deviendra la Basse-Fosse à la prochaine grande marée."
      ],
      choices: [
        { label: "Remonter de la grève", fx: { quest: "TQ" }, back: "A2m_bf" }
      ] },
    TQ_paye: { act: "II", title: "Le preneur de rats", place: "basse_fosse", ambiance: "nuit",
      text: [
        "Tu le rattrapes. Tu le tires par son manteau de cent couleurs. Tu vides tes poches dans sa main : quelques sous, un bout de ficelle, un caillou rond ramassé sur la falaise de chez toi, un bouton de cuivre, un quignon. Tout ce que tu as. Tu lui dis que c'est pour les rats. Que c'est un acompte, et que la ville lui doit le reste, mais que toi, tu paies ta part, parce que tu as marché toute la journée dans une Basse-Fosse sans rats.",
        "Il s'arrête. Le fifre s'arrête. Il regarde ce que tu as mis dans sa main. Il regarde longtemps le caillou rond.",
        "Puis il rit. Un vrai rire, bonhomme, un rire de vieux. « Un mousse, dit-il. Un mousse qui paie. Ça ne m'était jamais arrivé. » Il garde le caillou. Il te rend les sous, la ficelle, le bouton, le quignon. « Le caillou suffit. C'est le premier salaire honnête que je reçois dans cette ville. »",
        "Il porte le fifre à ses lèvres, et il joue les trois notes qui descendent. Les enfants se réveillent, doucement, sans peur, comme on se réveille le dimanche. Ils bâillent. Ils se regardent, étonnés d'être là. Ils rentrent chez eux en traînant les pieds, et les parents, le lendemain, n'en sauront rien, sinon qu'ils ont les pieds sales.",
        "Le preneur de rats s'en va par la route de la côte, au petit jour, sans ses cent écus, avec un caillou dans sa poche. Il te fait signe de la main, de loin, avant le tournant. Maître Glémarec ne saura jamais ce qu'il a failli payer."
      ],
      choices: [
        { label: "Remonter de la grève", fx: { quest: "TQ" }, back: "A2m_bf" }
      ] }
  },
  extras: {
    people: {
      pezennec: { name: "Mathurin Pézennec", aka: ["le preneur de rats"], qui: "Preneur de rats de père en fils, au manteau de cent morceaux et au fifre d'os, qui a délivré la Basse-Fosse en trois nuits." },
      glemarec: { name: "Maître Glémarec", aka: ["le premier des échevins"], qui: "Premier échevin de Morlenc, à chaîne d'or et voix de baryton, qui a payé dix sous pour cent écus de rats." }
    },
    quests: [
      { id: "TQ", act: "II", kind: "annexe", title: "Le preneur de rats", start: "TQ_fifre", doit: "joueurflute", echo: ["tq:suit", "tq:flute", "tq:paye"] }
    ]
  }
};
