// Les scènes propres à certaines cartes (resout: { carte }) et les retours des fils (resout: { type, fil }) : quand
// un fil est ouvert, une carte du bon genre ramène celui ou celle qui l'a ouvert, et la scène le noue.
var ROUTE_SEULE = [{ label: "Reprendre la route", to: "@suite" }];
var ROUTE = [
  { label: "Reprendre la route", halte: ["gue", "col"], to: "@suite" },
  { label: "Passer la porte de Vèze", halte: "porte", to: "@suite" },
];

module.exports = {
  // ---------------------------------------------------------------- Le cavalier (ouvre le fil « rival »)
  C_rival: { title: "Le cavalier en manteau gris", resout: { carte: "rival" }, fx: { meet: "fremond" },
    text: [
      { halte: "gue", text: "Un cheval gris arrive au trot derrière toi, entre dans l'eau sans ralentir, et s'arrête au milieu du gué, de l'eau jusqu'au poitrail, comme on s'arrête dans une rue. Le cavalier se retourne sur sa selle." },
      { halte: "col", text: "Un cheval gris monte le lacet du col au pas, fumant comme une marmite, et son cavalier le retient à ta hauteur." },
      { halte: "porte", text: "Un cheval gris remonte la file des charrettes au pas, et les gardes s'écartent devant lui comme devant un évêque en tournée. Le cavalier s'arrête à ta hauteur." },
      "Il porte un manteau gris, une moustache cirée en pointes, et une cravache à pommeau d'argent qu'il agite pour souligner ses phrases. « Courrier d'Orbec, n'est-ce pas ? On reconnaît la maison à la qualité des bottes : excellentes, et jamais payées. Vous allez à Vèze, je suppose. Moi aussi. Nous nous reverrons. »",
      "Il te salue de la cravache, et il pique des deux.",
    ],
    choices: [
      { label: "Retenir son visage, son cheval et ses bottes", fx: { ep: ["perso", 150] }, halte: ["gue", "col"], to: "@suite" },
      { label: "Le suivre des yeux jusqu'à la porte", halte: "porte", to: "@suite" },
    ] },

  // Le fil rival revient : une rencontre, un obstacle ou un péril ramène le cavalier.
  C_rival_revient: { title: "Le cavalier, encore", resout: { type: ["rencontre", "obstacle", "peril", "detour"], fil: "rival" },
    text: [
      { halte: "col", text: "Le cheval gris est attaché à la croix du col, et le cavalier en manteau gris t'attend, assis sur le muret de la chapelle, en se curant les ongles avec la pointe d'un couteau." },
      { halte: "porte", text: "À la porte de Vèze, le cavalier en manteau gris a quitté sa selle, et il parle à l'oreille du sergent de garde en te désignant du menton." },
      "« Je vous rachète votre pli, » dit Ancel Frémond, sans préambule. « Dix écus d'argent. Vous direz à la margrave que vous l'avez perdu dans la rivière. Elle vous croira : elle perd des courriers tous les mois. »",
    ],
    choices: [
      { label: "Refuser, et le faire dire pour qui il travaille", test: { dom: "social", label: "Social" },
        win: { fx: { fil: { noue: "rival" }, ep: ["perso", 400] }, to: "C_rival_noue" }, lose: { fx: { clock: { retard: 1 } }, to: "C_rival_echappe" } },
      { label: "Le planter là, et presser le pas", fx: { clock: { retard: 1 } }, to: "C_rival_echappe" },
    ] },
  C_rival_noue: { title: "Le jeu du cavalier",
    text: [
      "Il parle trop, comme tous ceux qui se croient plus fins que leur interlocuteur. Un nom lui échappe : celui d'un conseiller de Vèze, qui paie ses courses et ses chevaux.",
      "Tu as son nom, son visage et son prix. Il remonte en selle avec la mine d'un joueur qui a montré ses cartes avant la fin de la partie.",
    ],
    choices: ROUTE },
  C_rival_echappe: { title: "Le cavalier passe devant",
    text: ["Il hausse les épaules, salue de la cravache, et repart au galop. Il a un cheval ; tu as des bottes. Sur la route de Vèze, cela fait une différence de plusieurs heures."],
    choices: ROUTE },

  // La carte « Le Couteau dans le dos » noue le fil rival : le cavalier passe à l'acte.
  C_couteau: { title: "La main sur l'épaule", resout: { carte: "couteau", fil: "rival" },
    text: [
      { halte: "col", text: "Dans la chapelle sans toit, où tu t'es abrité{e} du grésil, une main se pose sur ton épaule. Le cavalier était là avant toi, assis dans l'ombre de l'abside." },
      { halte: "porte", text: "Sous la voûte de la porte, dans la presse, une main se pose sur ton épaule. Le cavalier s'est glissé dans la file derrière toi." },
      "Sa main serre. Son autre main, sous le manteau gris, tient une lame courte. « Le pli, » dit Ancel Frémond, très aimablement. « Doucement. »",
    ],
    choices: [
      { label: "Te dégager d'un coup de coude et lui tordre le poignet", test: { dom: "combat", label: "Combat" },
        win: { fx: { ep: ["perso", 400] }, to: "C_couteau_ok" }, lose: { fx: { pv: -3, clock: { retard: 1 } }, to: "C_couteau_ko" } },
      { label: "Lui tendre un faux pli, et filer avec le vrai", test: { dom: "discretion", label: "Discrétion" },
        win: { fx: { ep: ["perso", 400] }, to: "C_couteau_ok" }, lose: { fx: { pv: -3, clock: { retard: 1 } }, to: "C_couteau_ko" } },
    ] },
  C_couteau_ok: { title: "Le cavalier désarmé",
    text: ["La lame tombe. Le cavalier recule, se tient le poignet, et te regarde pour la première fois comme un adversaire. Il disparaît. Il a perdu sa chance, et il le sait : un courrier prévenu en vaut deux."],
    choices: ROUTE },
  C_couteau_ko: { title: "Une estafilade",
    text: ["La lame t'ouvre l'avant-bras avant que tu le repousses. Il s'enfuit sans le pli, mais tu saignes, et tu perds une heure à bander ta blessure avec un morceau de ta chemise."],
    choices: ROUTE },

  // ---------------------------------------------------------------- Le passeur (ouvre le fil « dette »)
  C_passeur: { title: "Gilles Tranchemer", resout: { carte: "passeur" }, fx: { meet: "gilles", elan: 1 },
    text: [
      { halte: "gue", text: "L'homme de la cabane descend à la barque avec une lanterne. Il a le dos voûté, un anneau de fer à l'oreille, et la voix de quelqu'un qui marchande depuis l'enfance. « Le gué ? Ce soir ? Vous voulez mourir mouillé{e}. Montez. »" },
      { halte: "col", text: "Un homme au dos voûté sort de la chapelle, un anneau de fer à l'oreille, et te montre du doigt un passage entre deux rochers que tu n'avais pas vu. « Par là, c'est deux heures de moins. Suivez-moi, et regardez où je mets les pieds. »" },
      { halte: "porte", text: "Un homme au dos voûté, un anneau de fer à l'oreille, te tire par la manche hors de la file. « Une poterne, derrière la tannerie. Le garde me doit de l'argent. Venez. »" },
      "Il te fait passer, vite et bien, sans un mot de plus. De l'autre côté, il sort un petit carnet graisseux et y écrit quelque chose. « Gilles Tranchemer. Je ne demande rien aujourd'hui. Je viendrai chercher mon prix. »",
    ],
    choices: ROUTE },

  // Le fil dette revient : un allié, un refuge ou une trahison ramène le passeur.
  C_dette_revient: { title: "Le carnet du passeur", resout: { type: ["allie", "refuge", "trahison", "tresor"], fil: "dette" },
    text: [
      { halte: "col", text: "Gilles Tranchemer t'attend au col, assis sur une pierre, son carnet ouvert sur le genou." },
      { halte: "porte", text: "Gilles Tranchemer t'attend sous la voûte de la porte, adossé au mur, son carnet ouvert à la page de ton nom." },
      "« Mon prix, » dit-il. « Un paquet à porter dans Vèze. Petit, léger. Vous ne l'ouvrez pas, vous le laissez chez le tanneur de la rue Basse, et nous sommes quittes. Ou quatre sous, si vous préférez la vertu. »",
    ],
    choices: [
      { label: "Prendre le paquet", fx: { fil: { noue: "dette" }, elan: 1 }, to: "C_dette_paquet" },
      { label: "Payer quatre sous", if: { gold: { min: 4 } }, fx: { gold: -4, fil: { noue: "dette" } }, to: "C_dette_payee" },
      { label: "Lui demander du temps", to: "C_dette_attend" },
    ] },
  C_dette_paquet: { title: "Le paquet",
    text: ["Le paquet est petit, léger, ficelé serré, et il sent le poivre. Tu le portes avec le pli. Un courrier porte ce qu'on lui confie ; il arrive qu'on lui confie deux choses, et que l'une des deux soit moins honorable."],
    choices: ROUTE },
  C_dette_payee: { title: "Quitte",
    text: ["Gilles Tranchemer compte les sous deux fois, les glisse dans sa ceinture, et rature ton nom avec un soin de copiste. « Quitte. C'est rare, des gens comme vous. »"],
    choices: ROUTE },
  C_dette_attend: { title: "Les intérêts",
    text: ["Il referme son carnet sans colère. « Du temps, j'en ai. Les intérêts aussi. » Il s'en va en sifflant."],
    choices: ROUTE },

  // La carte « L'Heure de payer » noue le fil dette.
  C_heure: { title: "L'heure de payer", resout: { carte: "heure_payer", fil: "dette" },
    text: [
      { halte: "col", text: "Au col, trois silhouettes se détachent de la chapelle. Gilles Tranchemer marche devant ; les deux autres ont des gourdins." },
      "« J'avais dit que je viendrais chercher mon prix, » dit le passeur. « Le voici : tu me dis ce qu'il y a dans ton pli. Pas le pli. Juste ce qu'il dit. »",
    ],
    choices: [
      { label: "Lui offrir tout ton argent à la place", if: { gold: { min: 2 } }, fx: { gold: -6 }, to: "C_heure_argent" },
      { label: "Le convaincre que tu n'en sais rien", test: { dom: "social", label: "Social" }, win: { fx: { ep: ["perso", 300] }, to: "C_heure_ok" }, lose: { fx: { pv: -3 }, to: "C_heure_ko" } },
    ] },
  C_heure_argent: { title: "Les poches vides",
    text: ["Tu vides ta bourse dans sa main. Il compte, il soupire, il accepte. « C'est moins que ce que vaut un secret. C'est plus que ce que vaut un courrier. » Ta dette est payée, et tu marches à présent avec des poches légères."],
    choices: ROUTE_SEULE },
  C_heure_ok: { title: "Un courrier ignorant",
    text: ["Tu jures que tu ignores tout du pli, ce qui est vrai, et tu le jures assez mal pour qu'il te croie. Il rature ton nom. « Un courrier qui ne lit pas. Les vertus se perdent. »"],
    choices: ROUTE_SEULE },
  C_heure_ko: { title: "Les gourdins",
    text: ["Il te croit à moitié, et ses compagnons se chargent de l'autre moitié. Tu as le dos endolori, la dette payée, et le pli toujours scellé. Ils cherchaient ce qu'il dit, et tu l'ignores."],
    choices: ROUTE_SEULE },

  // ---------------------------------------------------------------- Le cachet doublé (ouvre le fil « secret »)
  C_cachet: { title: "Deux cires", resout: { carte: "cachet_double" },
    text: [
      { halte: "gue", text: "En sortant le pli pour le mettre au sec, à la lumière de la lanterne du passeur, tu remarques le bord de la cire." },
      { halte: "col", text: "À l'abri de la chapelle, tu sors le pli pour vérifier qu'il a passé le grésil sans dommage, et le jour gris éclaire le bord de la cire." },
      { halte: "porte", text: "Dans la file, pendant que les gardes fouillent la charrette de devant, tu sors le pli de ta veste pour la première fois depuis Orbec, et tu regardes la cire en plein jour." },
      "Le sceau est net : la tour, les trois clés. Mais autour, la cire a coulé en deux couches, l'une sombre, presque brune, l'autre d'un rouge vif. Quelqu'un a fondu un second bâton de cire sur le premier.",
    ],
    choices: [
      { label: "Ranger le pli contre ta poitrine", fx: { ep: ["perso", 200] }, halte: ["gue", "col"], to: "@suite" },
      { label: "Ranger le pli, et avancer vers les gardes", fx: { ep: ["perso", 200] }, halte: "porte", to: "@suite" },
    ] },

  // Le fil secret revient : une rencontre ou une révélation ramène celui qui a ouvert le pli.
  C_secret_revient: { title: "Le clerc d'Orbec", resout: { type: ["rencontre", "revelation", "refuge", "presage"], fil: "secret" },
    text: [
      { halte: "col", text: "Dans la chapelle du col, un homme en robe de clerc s'est mis à l'abri du grésil, un coffret serré contre lui." },
      { halte: "porte", text: "Dans la file, deux charrettes devant toi, un homme en robe de clerc tient un coffret contre lui comme une nourrice tient un enfant." },
      "Tu le reconnais : tu l'as vu au château d'Orbec, debout derrière la margrave, la plume à la main.",
    ],
    choices: [
      { label: "Lui demander ce qu'il porte à Vèze", test: { dom: "social", label: "Social" }, win: { fx: { fil: { noue: "secret" }, ep: ["perso", 400] }, to: "C_secret_noue" }, lose: { to: "C_secret_muet" } },
      { label: "Regarder ses mains", test: { dom: "savoir", label: "Savoir" }, win: { fx: { fil: { noue: "secret" }, ep: ["perso", 400] }, to: "C_secret_noue" }, lose: { to: "C_secret_muet" } },
    ] },
  C_secret_noue: { title: "La cire sous l'ongle",
    text: [
      "Sous l'ongle de son pouce, une trace rouge vif. Il voit que tu la vois. Il pâlit, il bredouille, et il finit par tout dire, avec le soulagement des faibles à qui l'on retire un poids.",
      "Il a ouvert le pli à Orbec, la nuit avant ton départ, à la demande d'un conseiller de Vèze, maître Bérard. Il l'a lu, recacheté, et il porte à Bérard une copie, dans le coffret.",
    ],
    choices: ROUTE },
  C_secret_muet: { title: "Un clerc qui se tait",
    text: ["Il serre son coffret, il détourne la tête, et il se perd dans la foule à la première occasion. Tu retiens son visage, à défaut de son secret."],
    choices: ROUTE },

  // La carte « La Cire sous l'ongle » noue le fil secret.
  C_cire: { title: "Une trace rouge", resout: { carte: "cire_ongle", fil: "secret" },
    text: [
      { halte: "col", text: "Près de la croix du col, un homme en robe de clerc gratte son pouce avec la pointe d'un canif, pour en ôter quelque chose." },
      { halte: "porte", text: "Sous la voûte de la porte, un homme en robe de clerc tend ses papiers au garde, et sur le pouce qui tient les papiers, il y a une trace rouge." },
      "C'est de la cire. De la cire rouge vif, la même que la seconde couche de ton pli. Et l'homme, tu le reconnais : le clerc de la margrave d'Orbec.",
    ],
    choices: [
      { label: "Le prendre à part et le faire parler", fx: { ep: ["perso", 400] }, to: "C_secret_noue" },
    ] },

  // ---------------------------------------------------------------- Le jeton des marchands, à la porte (gagné en route)
  C_jeton_porte: { title: "Le jeton des marchands", resout: { carte: "sauf_conduit", halte: "porte" }, fx: { clock: { retard: -1 }, ep: ["perso", 200] },
    text: [
      "Tu sors de la file, tu remontes les charrettes, et tu montres au sergent le rond de plomb aux armes de Vèze. Il le regarde, il te regarde, et il fait la grimace d'un homme qui doit obéir à un morceau de métal.",
      "« Les marchands par la poterne, » dit-il. La poterne s'ouvre, la file proteste, et tu passes sous le saint de bois avec une heure d'avance sur ta propre journée.",
    ],
    choices: [{ label: "Entrer dans Vèze", to: "@suite" }] },
};
