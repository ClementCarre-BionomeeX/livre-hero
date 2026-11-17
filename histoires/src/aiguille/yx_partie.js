// L'Île Folle-Aiguille · act III followed by the cook (second reading): « La partie du pilote » (owes its question to
// The Royal Game: what does solitude make of a mind that has fed on itself for years?). In the calms, Brousse watches
// Fargue's chessboard and asks for a game. In his cell at Brisegrève he played thousands of games against himself,
// with pieces of bread, on the flagstones. He plays like nobody, then faster and faster, then against an adversary
// who is not there. Fargue stops the game (fargue:partie_arretee), plays on and wins (fargue:partie_gagnee), or lets
// himself be beaten (fargue:partie_perdue). Wired in A3f_jours.
module.exports = {
  passages: {
    YX_echiquier: { act: "III", title: "La partie du pilote", place: "sargues", ambiance: "mer", second: true,
      text: [
        "Fargue a monté son échiquier sur le gaillard d'arrière, à l'ombre de la voile qui ne sert à rien, et il rejoue une partie de mémoire, une vieille partie célèbre qu'on lui a apprise au café des Navigateurs, il y a vingt ans. Les pièces sont en buis et en ébène, usées, et le cavalier blanc a perdu une oreille. Il les déplace lentement, en fredonnant.",
        "Une ombre tombe sur l'échiquier. C'est Brousse. Le pilote se tient debout derrière lui, voûté, avec sa barbe blanche et ses yeux décolorés de cachot, et il regarde les pièces comme on regarde, après un long voyage, la maison où l'on est né.",
        "« Le fou, dit-il d'une voix enrouée. Pas le cavalier. Le fou en c4. Le cavalier perd trois coups. »",
        "Fargue regarde. Le pilote a raison. Il le regarde, lui, longtemps, cet homme qu'il a laissé sur un récif avec une balle dans le ventre. « Tu jouais, sur la Maraude ? — Non. » Brousse s'assied, de l'autre côté de l'échiquier, sans qu'on l'y ait invité. Ses mains tremblent un peu. « J'ai appris là-bas. À Brisegrève. Il y avait un vieux, dans la cellule à côté, un officier de la marine, qui frappait les coups contre le mur, en code. Il est mort la troisième année. J'ai continué tout seul. »",
        "Il touche un pion blanc, du bout du doigt, avec précaution, comme on touche une chose qu'on croyait imaginaire. « Seize ans, tout seul. Avec des boulettes de pain, sur les dalles. Des milliers de parties. Je n'ai jamais touché une vraie pièce. » Il lève les yeux. « Joue avec moi, la Chanson. Une partie. Après, on verra pour le reste. »",
      ],
      choices: [{ label: "Remettre les pièces en place", to: "YX_partie" }] },
    YX_partie: { act: "III", title: "La partie du pilote", place: "sargues", ambiance: "mer", second: true,
      text: [
        "Les dix premiers coups, Fargue croit jouer contre un maître. Brousse joue sans réfléchir, d'une main qui ne tremble plus, et chaque coup tombe comme une pierre dans un puits, juste, profond, définitif. Fargue joue bien ; il gagne les deux tiers de ses parties au café des Navigateurs, et il a battu le baron. Au douzième coup, il comprend qu'il a perdu une pièce sans voir comment. Au quinzième, une autre.",
        "Puis quelque chose change. Brousse joue de plus en plus vite. Il n'attend plus que Fargue ait joué ; il a déjà la main au-dessus de l'échiquier, il la retire, il la remet. Il murmure. Il compte, à mi-voix, des variantes, des coups, des réponses, et Fargue s'aperçoit qu'il ne compte pas la partie qui est sur l'échiquier, mais une autre, ou dix autres, qu'il joue en même temps dans sa tête, depuis seize ans, et qui ne se sont jamais arrêtées.",
        "Il transpire. Ses yeux décolorés vont de l'échiquier à la mer, de la mer à l'échiquier, sans se fixer. Il dit tout haut : « Non, pas ça, il va prendre le fou », alors que Fargue n'a pas touché à ses pièces. Il rit, un petit rire sec. Il joue un coup pour les noirs, qui sont les pièces de Fargue, et le reprend, et s'excuse. Ses mains tremblent de nouveau, beaucoup.",
        "Autour d'eux, sur le gaillard, trois matelots se sont approchés, qui regardent sans rien comprendre. Fargue regarde l'homme en face de lui. Il comprend, lui. Il a vu des hommes revenir de longues campagnes avec ça, dans la tête, une chose qui tourne et qui ne s'arrête plus. Il sait qu'on peut les ramener, quelquefois, si on les arrête à temps. Il sait aussi que Brousse est en train de gagner, malgré tout, avec deux pièces d'avance, et qu'un homme qui gagne ne s'arrête jamais de lui-même.",
      ],
      choices: [
        { label: "Renverser son roi, et dire que la partie est finie", fx: { flag: "fargue:partie_arretee" }, to: "YX_arret" },
        { label: "Jouer pour gagner, en le laissant s'emballer", fx: { flag: "fargue:partie_gagnee" }, to: "YX_gagne" },
        { label: "Le laisser gagner, sans rien dire, et finir la partie avec lui", fx: { flag: "fargue:partie_perdue" }, to: "YX_perdue" },
      ] },
    YX_arret: { act: "III", title: "La partie du pilote", place: "sargues", ambiance: "mer", second: true,
      text: [
        "Fargue couche son roi, d'un doigt. Le petit bruit du buis sur le bois fait tressaillir Brousse comme un coup de pistolet. « Tu as gagné, Nathanaël, dit Fargue doucement. C'est fini. Il n'y en a qu'une, de partie. Celle-là. Elle est finie. »",
        "Le pilote regarde le roi couché. Il ne comprend pas. Puis il comprend, et ses mains se posent à plat sur le bois, de chaque côté de l'échiquier, et il respire, très fort, comme un homme qui sort de l'eau. Ses yeux se fixent. Ils se fixent sur Fargue.",
        "« Tu as abandonné, dit-il. Avec deux pièces de moins. Tu aurais pu tenir encore vingt coups. » Il a la voix claire, maintenant, presque normale. « Tu m'as arrêté. » Il se lève, en se tenant à la lisse. « Sur le récif, tu ne t'es pas arrêté. » Il s'en va vers l'avant, lentement. Il ne rejouera plus. Fargue range les pièces une à une dans leur boîte, et il lui semble, pendant tout ce temps, qu'on vient de lui rendre une monnaie qu'il ne sait pas encore compter.",
      ],
      choices: [{ label: "Ranger l'échiquier", fx: { quest: "YX" }, back: "A3f_jours" }] },
    YX_gagne: { act: "III", title: "La partie du pilote", place: "sargues", ambiance: "mer", second: true,
      text: [
        "Fargue joue. Il joue lentement, au contraire de l'autre, en prenant tout son temps, et chaque fois qu'il prend son temps, Brousse joue trois parties dans sa tête et se trompe dans celle-ci. Au vingt-cinquième coup, le pilote laisse sa dame en prise. Au trentième, Fargue annonce le mat.",
        "Brousse regarde l'échiquier. Il ne voit pas le mat. Il continue à jouer, dans sa tête, à voix haute, des coups qui n'existent pas, pour des pièces qui ne sont plus là. Il prend un pion noir, le pose sur une case vide, l'enlève, le repose. Les matelots s'écartent. Un des gabiers fait le signe de croix.",
        "On le descend dans son hamac, le soir, avec une fièvre de cheval. Il y reste trois jours, à jouer contre le plafond, en murmurant. Le quatrième, il remonte sur le pont, très pâle, et reprend sa place à côté du compas, comme si rien ne s'était passé. Il ne regarde plus jamais l'échiquier. Fargue, lui, ne joue plus qu'avec le baron, et gagne toujours, ce qui ne l'amuse plus du tout.",
      ],
      choices: [{ label: "Ranger l'échiquier", fx: { quest: "YX" }, back: "A3f_jours" }] },
    YX_perdue: { act: "III", title: "La partie du pilote", place: "sargues", ambiance: "mer", second: true,
      text: [
        "Fargue joue les coups qu'il faut pour perdre, et il les joue lentement, en faisant semblant de chercher. Ce n'est pas facile ; il faut que l'autre ne le voie pas. Brousse ne le voit pas. Brousse ne voit plus rien que la partie qu'il joue depuis seize ans, et qu'il est en train, enfin, de gagner contre un vrai homme, avec de vraies pièces, sous un vrai ciel.",
        "Au trentième coup, il annonce le mat, d'une voix de prophète. Puis il s'arrête. Il regarde le roi noir pris dans son filet, le vrai roi, en ébène, avec sa petite croix au sommet. Il le prend dans sa main. Il le serre. Et il se met à pleurer, sans bruit, la tête baissée, avec le roi de Fargue dans son poing, comme un enfant qui tient le seul jouet qu'on lui ait jamais donné.",
        "« Merci, dit-il au bout d'un long moment. Tu as perdu exprès. J'ai vu au vingtième coup. » Il rouvre la main, et regarde le roi. « Je peux le garder ? » Fargue fait oui de la tête. Depuis, il joue avec un bouchon de liège à la place du roi noir, et c'est le baron qui gagne, maintenant, de temps en temps, ce qui rend le baron insupportable.",
      ],
      choices: [{ label: "Ranger l'échiquier", fx: { quest: "YX" }, back: "A3f_jours" }] },
  },
  extras: {
    quests: [
      { id: "YX", act: "III", kind: "annexe", title: "La partie du pilote", start: "YX_echiquier", doit: "joueurechecs", echo: ["fargue:partie_arretee", "fargue:partie_gagnee", "fargue:partie_perdue"] },
    ],
  },
};
