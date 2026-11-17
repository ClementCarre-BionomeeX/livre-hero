// L'Île Folle-Aiguille · side story « L'éponge » (owes its question to Oedipus the King: must one go on seeking a
// truth that leads back to oneself, and what does one owe to those it harmed?). Act III, Victorine at the Écueil-Rouge:
// the men of the water party cut their hands and shins on the red rock, and the cuts fester. Gaudrémont blames a poison
// in the stone. Victorine investigates, and finds that the only man who healed clean is the one who refused her care:
// the sponge she washed every wound with carried the rot from one man to the next. She tells the crew (vw:avoue), burns
// the sponge and lets the rock take the blame (vw:tait), or tells only the wounded (vw:blesses). Wired in A3w_ecueil.
module.exports = {
  passages: {
    VW_coupures: { act: "III", title: "L'éponge", place: "ecueil_rouge", ambiance: "nature",
      text: [
        "La roche rouge coupe. Elle coupe comme du verre pilé, sans qu'on la sente, et l'on s'aperçoit seulement en remontant dans le canot qu'on saigne des paumes, des genoux, des tibias, par vingt petites entailles fines comme des traits de plume. Les hommes de la corvée d'eau en reviennent chaque soir zébrés. Victorine les reçoit à l'infirmerie, un par un, avec sa cuvette d'eau de mer, son éponge et sa charpie. Elle lave, elle panse. C'est un travail de couturière.",
        "Le troisième jour, les entailles de Lozac s'enflamment. Puis celles du petit Bihannic. Puis celles de Talec, le patron du canot. Les bords rougissent, gonflent, se soulèvent ; le pus vient, épais, jaune, puant ; la fièvre suit. Le quatrième jour, ils sont six. Bihannic a une traînée rouge qui lui monte de la main jusqu'au coude, comme un fil qu'on tirerait vers le cœur.",
        "Le professeur Gaudrémont, consulté sans qu'on le lui demande, rend son oracle à la table de la capitaine, entre la soupe et le biscuit : la roche est volcanique, donc sulfureuse, donc vénéneuse ; elle laisse dans les plaies des particules qui les empoisonnent ; il l'a lu, il l'a même écrit. La capitaine interdit la corvée d'eau. Le bord est rassuré. Un poison qui a un nom fait moins peur qu'un mal qui n'en a pas.",
      ],
      choices: [{ label: "Chercher quand même, plaie par plaie, ce qui les relie", to: "VW_enquete" }] },
    VW_enquete: { act: "III", title: "L'éponge", place: "cormorane", ambiance: "mer",
      text: [
        "Victorine n'aime pas les oracles qui tombent si bien. Elle reprend ses notes. Elle fait la liste des hommes de la corvée, depuis le premier jour : quatorze. Elle note qui s'est coupé, où, quel jour. Elle note qui a suppuré. Elle cherche ce qui les distingue. Ce n'est pas la roche : tous y ont marché. Ce n'est pas la profondeur des coupures : Lozac avait des égratignures, et Morin, une entaille au genou qui allait jusqu'à l'os, et Morin guérit très bien.",
        "Morin guérit très bien. Elle relève la tête. Elle le fait venir. Morin est un vieux matelot à demi sourd, qui se méfie des médecins depuis un chirurgien de l'Amirauté qui lui a scié trois orteils pour une engelure. Il s'est coupé le premier jour, oui. Il n'est pas venu à l'infirmerie, non. Il s'est lavé le genou à l'eau de mer, au seau, avec sa main, il a pissé dessus comme son père le lui a appris, et il a mis une chique de tabac par-dessus. La plaie est rose, sèche, propre. C'est la plus belle plaie du bord.",
        "Elle cherche d'autres Morin. Il y en a deux autres : un gabier qui avait honte de montrer sa fesse, un mousse qui avait peur d'elle. Tous deux se sont soignés seuls, à l'eau de mer. Tous deux ont des plaies propres. Les onze qu'elle a soignés ont tous suppuré, sans exception, dans l'ordre exact où elle les a soignés, le premier soir.",
      ],
      choices: [{ label: "Regarder ce qu'elle a fait, le premier soir, dans l'ordre", to: "VW_ordre" }] },
    VW_ordre: { act: "III", title: "L'éponge", place: "cormorane", ambiance: "mer",
      text: [
        "Le premier soir, le premier qu'elle a lavé, c'était Kerdraon, qui avait déjà, au pouce, un vieux panaris mal fermé, d'avant l'Écueil, dont il ne lui avait rien dit. Elle a nettoyé le pouce avec le reste. Puis Lozac. Puis Bihannic. Puis les autres. Avec la même cuvette, qu'elle vidait par-dessus bord entre deux hommes. Et avec la même éponge, qu'elle rinçait dans l'eau de mer, et qu'elle pressait, et qui restait humide, tiède, dans le creux de sa main, d'une plaie à l'autre.",
        "Elle prend l'éponge, sur l'étagère de l'infirmerie. Une belle éponge fine, couleur de miel, qu'Hector lui avait offerte pour son premier cabinet, à Varnèse, il y a quinze ans, et qu'elle a emportée partout, par habitude et par tendresse. Elle la sent. Elle sent ce qu'elle n'avait pas voulu sentir : sous l'odeur de la mer, une odeur douce, sucrée, de linge oublié. L'odeur des plaies de Bihannic. Elle l'a portée d'un homme à l'autre, chaque soir, en croyant laver.",
        "Elle s'assied sur le coffre. Elle connaît assez son métier pour savoir que personne, à la Faculté, ne lui aurait appris à se méfier d'une éponge. Elle sait aussi que ça ne change rien à la traînée rouge sur le bras de Bihannic. Elle a cherché le poison. Elle l'a trouvé. Il était dans sa main.",
        "Il faut d'abord soigner. Elle fait bouillir de l'eau douce, la précieuse, dans la marmite de Fargue, qui la lui donne sans un mot quand il voit son visage. Elle fait bouillir la charpie, les pinces, la cuvette. Elle ouvre les plaies, une par une, avec une lame passée à la flamme, et elle les draine. Bihannic perd deux doigts. Les autres guérissent, lentement. Il reste à savoir quoi dire.",
      ],
      choices: [
        { label: "Dire tout, devant l'équipage, au pied du grand mât", fx: { flag: "vw:avoue" }, to: "VW_avoue" },
        { label: "Brûler l'éponge, et laisser la roche porter la faute", fx: { flag: "vw:tait" }, to: "VW_tait" },
        { label: "Le dire aux onze, et à eux seuls", fx: { flag: "vw:blesses" }, to: "VW_blesses" },
      ] },
    VW_avoue: { act: "III", title: "L'éponge", place: "cormorane", ambiance: "mer",
      text: [
        "Elle demande à la capitaine de rassembler l'équipage. La capitaine la regarde, comprend sans savoir, et fait siffler. Victorine monte sur le panneau de cale, l'éponge à la main. Elle dit que la roche n'y est pour rien. Elle dit que c'est elle. Elle explique, avec des mots de matelot, le pouce de Kerdraon, l'éponge, l'ordre des hommes, Morin et sa chique. Elle dit que Bihannic a perdu deux doigts par sa main à elle. Puis elle jette l'éponge par-dessus bord, et elle descend.",
        "Il y a un grand silence. Puis Gaudrémont, rouge comme sa roche, proteste que les particules sulfureuses n'en sont pas moins réelles, et personne ne l'écoute. Puis Morin, qui n'a rien entendu, demande ce qu'elle a dit, et on le lui répète à l'oreille, et il éclate de rire, et il dit : « La chique ! J'vous l'avais bien dit, que la chique ! »",
        "Les jours suivants, la moitié de l'équipage cesse de venir à l'infirmerie. Ils se soignent à la chique et à l'urine, comme Morin, et ils guérissent, pour la plupart, et ceux qui ne guérissent pas finissent par revenir, la tête basse. L'autre moitié vient davantage. Ils disent qu'une médecin qui avoue, c'est rare, et qu'on peut lui confier un bras. Bihannic, lui, vient tous les jours faire changer son pansement, avec ses trois doigts, sans un reproche, et c'est le plus dur.",
        "Elle tient désormais, dans un carnet à part, la liste de ses fautes. La première ligne dit : *Une éponge. Onze hommes. Deux doigts.* Elle la relit chaque fois qu'elle se trouve habile.",
      ],
      choices: [{ label: "Retourner à l'infirmerie", fx: { quest: "VW" }, back: "A3w_ecueil" }] },
    VW_tait: { act: "III", title: "L'éponge", place: "cormorane", ambiance: "mer",
      text: [
        "Elle met l'éponge dans le feu de la cambuse, une nuit, quand Fargue dort. Elle brûle mal. Elle se tord, elle grésille, elle sent la mer et le pus. Victorine reste devant, à la regarder se tordre, jusqu'à ce qu'il n'en reste qu'une pincée de cendre noire, qu'elle jette dans l'eau. Le cadeau d'Hector. Quinze ans. Elle ne pleure pas. Elle n'en a pas le droit, pense-t-elle, ce soir.",
        "Elle fait bouillir son linge, désormais, et ses instruments, et elle se lave les mains entre deux hommes, à l'eau-de-vie, ce qui fait jaser : on dit que la médecin boit par les doigts. Elle laisse dire. Les plaies, au bord, ne suppurent plus. Gaudrémont triomphe : depuis qu'on a interdit la roche, plus d'empoisonnement. Il en fera un chapitre. Il le lui lit. Elle le félicite.",
        "Bihannic, à qui il manque deux doigts, la remercie chaque matin de lui avoir sauvé la main. Il dit que sans elle, avec ce poison de roche, il aurait perdu le bras. C'est exact. Elle accepte chaque fois le remerciement, parce qu'il est exact. Elle a appris quelque chose, et ses malades à venir en profiteront. Elle se répète que c'est l'essentiel. Elle le croit presque. Elle sait seulement qu'elle porte désormais deux choses : une faute, et la gratitude d'un garçon qu'elle a mutilé, qui pèse plus lourd que la faute.",
      ],
      choices: [{ label: "Retourner à l'infirmerie", fx: { quest: "VW" }, back: "A3w_ecueil" }] },
    VW_blesses: { act: "III", title: "L'éponge", place: "cormorane", ambiance: "mer",
      text: [
        "Elle les réunit dans l'entrepont, le soir, les onze, à la lueur d'un fanal, assis sur les coffres, pansés, fiévreux encore pour certains. Elle leur dit. Ils ont le droit de savoir ce qu'on leur a fait, pense-t-elle, et l'équipage n'a pas à s'en mêler : ce sont leurs plaies. Elle leur montre l'éponge. Elle leur dit qu'elle la brûlera, ou qu'elle la leur donnera, à leur choix, et qu'ils pourront en faire ce qu'ils voudront, et d'elle aussi.",
        "Ils se regardent. Kerdraon, celui du panaris, est le plus pâle de tous : il a compris d'où venait le mal, avant elle. Il dit que c'est sa faute, à lui, son pouce, qu'il aurait dû le montrer. Lozac lui dit de se taire. Talec, le patron du canot, qui est l'aîné, prend l'éponge, la tourne entre ses doigts, la sent, fait la grimace. Puis il la rend à Victorine. Il dit qu'on ne brûle pas un outil parce qu'il a mal servi. On le nettoie. Il dit qu'elle n'a qu'à la faire bouillir, comme le reste.",
        "Bihannic ne dit rien. Il regarde sa main, où il manque deux doigts. Puis il demande, d'une petite voix, si ses deux doigts sont perdus à cause de l'éponge, ou à cause de la roche, ou à cause de Kerdraon. Victorine lui répond : à cause de moi. Il hoche la tête. Il dit merci de le lui avoir dit. Il dit que ça ne lui rend pas ses doigts, mais que ça lui rend autre chose, il ne sait pas quoi.",
        "Les onze gardent le secret. L'équipage continue de croire au poison de la roche, et Gaudrémont à son chapitre. Victorine garde l'éponge. Elle la fait bouillir chaque soir, longuement, dans une casserole à part. Elle s'en sert encore. Elle se dit qu'elle a rendu la vérité à ceux à qui elle appartenait, et qu'elle en a privé les autres. Elle ne sait pas si l'on peut partager une faute comme un pain, en onze parts.",
      ],
      choices: [{ label: "Retourner à l'infirmerie", fx: { quest: "VW" }, back: "A3w_ecueil" }] },
  },
  extras: {
    quests: [
      { id: "VW", act: "III", kind: "annexe", title: "L'éponge", start: "VW_coupures", doit: "oedipe", echo: ["vw:avoue", "vw:tait", "vw:blesses"] },
    ],
  },
};
