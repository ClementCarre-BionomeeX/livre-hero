// L'Île Folle-Aiguille · side story « La toilette du baron » (owes its question to Don Quixote: is it madness or honour to
// behave as if the world were as noble as one says?). During the siege, the baron Clavières decides that a gentleman
// does not hide from riffraff: every morning at eight he will be shaved, powdered and dressed on the parapet of the
// chapel wall, in full view of the mutineers' muskets, by his valet, as at Morlenc. On the third morning, the valet
// refuses. The baron asks Victorine to hold the razor. She shaves him on the wall (zy:rase), refuses and leaves him to
// do it alone (zy:refuse), or brings him down by force, before the captain and the men (zy:descend). Wired in A4w_jours.
module.exports = {
  passages: {
    ZY_premier: { act: "IV", title: "La toilette du baron", place: "misericorde", ambiance: "chateau",
      text: [
        "Le premier matin, on croit à une plaisanterie. À huit heures précises, le baron Clavières sort de la sacristie en robe de chambre de soie puce, suivi de son valet, qui porte un fauteuil, un plat à barbe, un miroir, une serviette, un flacon d'eau de senteur et une boîte à poudre. Il monte l'escalier du mur. Il s'installe sur le chemin de ronde, entre deux créneaux, face à la forêt, face à la plage, face aux mutins. Il s'assied. Il tend le menton.",
        "Le valet, un homme gris et silencieux nommé Pradel, le rase. Tout le monde, dans la cour, retient son souffle. Dans la forêt, en bas, on voit bouger des formes. Un coup de feu part, enfin, et la balle s'écrase contre un merlon, à deux pieds de la tête du baron, en soulevant un nuage de poussière blanche. Le baron ne bouge pas. Il dit, sans tourner la tête, d'une voix qui porte jusqu'à la plage : « Pradel, vous m'avez coupé. Faites attention. »",
        "Le deuxième matin, il recommence. Deux balles, cette fois. Le baron se fait poudrer, sous les balles, avec une lenteur exquise, en regardant la forêt dans le miroir. Les hommes, dans la cour, ont cessé de rire. Quelques-uns, les plus jeunes, le regardent avec une admiration qui fait peur à la capitaine. Les vieux secouent la tête. La capitaine Ribaud dit qu'il est fou. Elle dit aussi qu'elle n'a aucun moyen légal de l'empêcher : c'est lui qui a armé le navire.",
      ],
      choices: [{ label: "Le troisième matin", to: "ZY_troisieme" }] },
    ZY_troisieme: { act: "IV", title: "La toilette du baron", place: "misericorde", ambiance: "chateau",
      text: [
        "Le troisième matin, Pradel refuse. Il est blanc, il tremble, il dit qu'il a une femme à Morlenc, et trois enfants, et qu'il ne montera pas. Le baron le regarde avec une surprise immense, presque douloureuse, comme on regarde un chien qui vous mord. Il ne se fâche pas. Il dit seulement : « Je vois. » Et il se tourne vers la cour, son plat à barbe à la main, et cherche des yeux quelqu'un.",
        "Il trouve Victorine. Il vient vers elle, à travers la cour, en robe de chambre, avec son plat et son rasoir, et il les lui tend, avec une courtoisie parfaite. « Docteur, vous avez la main sûre. Je vous ai vue recoudre un homme sous le feu. Voudriez-vous me faire l'honneur ? »",
        "Victorine le regarde. Elle a vu, depuis trois jours, les jeunes gens de la cour regarder le baron sur son mur, et se redresser. Elle a vu un gabier, hier, se lever pour aller chercher de l'eau à découvert, en sifflant, comme le baron, et revenir avec une balle dans l'épaule. Elle sait que cet homme est vaniteux, égoïste, qu'il a armé ce navire pour de l'or. Elle sait aussi que, depuis trois matins, la chapelle tient mieux.",
        "« C'est absurde, dit-elle. — Absolument, dit le baron. C'est pour ça qu'il faut que quelqu'un le fasse. Si l'on ne fait plus que les choses raisonnables, docteur, on finit par se cacher derrière un mur en attendant d'être tué par des gens qui ne savent pas écrire. Je préfère être tué propre. »",
      ],
      choices: [
        { label: "Prendre le rasoir, et monter sur le mur", fx: { flag: "zy:rase" }, to: "ZY_rase" },
        { label: "Refuser, et le laisser monter seul", fx: { flag: "zy:refuse" }, to: "ZY_refuse" },
        { label: "Aller chercher la capitaine, et le faire descendre de force", fx: { flag: "zy:descend" }, to: "ZY_descend" },
      ] },
    ZY_rase: { act: "IV", title: "La toilette du baron", place: "misericorde", ambiance: "chateau",
      text: [
        "Elle monte. Elle n'a jamais rasé personne d'autre qu'Hector, malade, les dernières semaines, et ses morts, pour les présenter aux familles. Elle fait mousser le savon dans le plat. Elle tend la peau du baron entre deux doigts. Il ferme les yeux, renverse la tête, offre sa gorge au rasoir, au soleil, à la forêt. Elle sent, sous sa main, son pouls. Il bat vite. Il a peur. C'est la première fois qu'elle le respecte.",
        "La première balle passe au-dessus d'eux avec un bruit de guêpe. Elle sursaute. Le rasoir tremble. Le baron, sans ouvrir les yeux, dit : « Ne vous pressez pas. Ils tirent mal. Ils ont trop bu hier soir, j'ai entendu les chansons. » Elle continue. La deuxième balle frappe le créneau, à côté d'elle, et lui envoie des éclats de pierre dans les cheveux. Elle finit la joue gauche. Elle finit la joue droite. Elle essuie la lame sur la serviette. Ses mains ne tremblent plus. Elle s'en étonne.",
        "Quand elle redescend, la cour est silencieuse. Puis un homme applaudit. Puis tous. Le baron descend derrière elle, rasé de frais, poudré, impassible, et dit à Pradel, qui baisse la tête, qu'il est renvoyé, et qu'il le reprendra à Morlenc. Le soir, Victorine se surprend à se demander si elle a servi la chapelle ou la vanité d'un homme. Elle se répond que les deux, et qu'elle ne sait pas faire la différence, ce matin-là, au soleil, avec un rasoir à la main.",
      ],
      choices: [{ label: "Retourner à tes blessés", fx: { quest: "ZY" }, back: "A4w_jours" }] },
    ZY_refuse: { act: "IV", title: "La toilette du baron", place: "misericorde", ambiance: "chateau",
      text: [
        "Elle refuse. Elle lui dit qu'elle a juré de soigner les hommes, pas de les aider à se faire tuer, et que son rasoir, elle le garde pour les plaies. Le baron s'incline, sans rancune. « Vous avez raison, dit-il. Vous avez toujours raison, docteur. C'est votre infirmité. » Et il monte seul.",
        "Il se rase lui-même, sur le mur, au miroir, en plein soleil. Il se coupe trois fois. Il saigne dans la mousse. Une balle fait voler le miroir en éclats, à six pouces de son visage. Il ramasse le plus grand morceau, et continue, en s'y regardant. Il se poudre. Il redescend, la joue zébrée de sang, la perruque de travers, avec une dignité absurde et totale, et passe devant Victorine sans la regarder.",
        "Elle soigne ses coupures, le soir, dans la sacristie. Il la laisse faire. Il ne dit rien pendant longtemps. Puis il dit, en regardant ailleurs : « Mon père se faisait raser sur le pont de ses navires, sous le feu des corsaires. Il me l'a raconté cent fois. Je n'ai jamais su si c'était vrai. » Il se tait. « À présent, j'en ai fait autant. Ça ne prouve rien pour lui. Ça prouve peut-être quelque chose pour moi. Je ne sais pas encore quoi. »",
      ],
      choices: [{ label: "Retourner à tes blessés", fx: { quest: "ZY" }, back: "A4w_jours" }] },
    ZY_descend: { act: "IV", title: "La toilette du baron", place: "misericorde", ambiance: "chateau",
      text: [
        "La capitaine Ribaud ne se fait pas prier. Elle monte sur le mur avec deux matelots, au moment où le baron s'assied, et elle lui dit, devant toute la cour, qu'elle le met aux arrêts pour mise en danger de la garnison. Le baron se lève, la toise, dit qu'il n'a d'ordres à recevoir de personne sur une expédition qu'il paie. La capitaine répond qu'il les recevra de ces deux hommes-là, qui sont plus grands que lui.",
        "Le plus grand le prend sous les bras, comme on prend un enfant, et le descend dans la cour, en robe de chambre, les jambes battantes. Le plat à barbe tombe et se brise. La poudre fait un nuage blanc. Les jeunes gens de la cour, qui regardaient le baron depuis trois jours avec des yeux de chiens, regardent la scène, et l'un d'eux se met à rire, et puis tous. Le baron, posé dans la cour, rajuste sa robe de chambre, et regarde Victorine. Il sait qui a appelé la capitaine.",
        "Personne ne monte plus sur le mur. Personne ne va plus chercher de l'eau à découvert en sifflant. Les blessures par balle diminuent de moitié. Et quelque chose aussi diminue, dans la cour, que Victorine ne sait pas nommer, et qu'elle voit dans les yeux des jeunes gens, qui se tiennent de nouveau courbés, contre les murs, en attendant. Le baron ne lui adresse plus la parole jusqu'à la fin du siège. Il a l'air, curieusement, de l'avoir prévu.",
      ],
      choices: [{ label: "Retourner à tes blessés", fx: { quest: "ZY" }, back: "A4w_jours" }] },
  },
  extras: {
    people: {
      pradel: { name: "Pradel", aka: ["le valet du baron"], qui: "Le valet de chambre du baron Clavières." },
    },
    quests: [
      { id: "ZY", act: "IV", kind: "annexe", title: "La toilette du baron", start: "ZY_premier", doit: "quichotte", echo: ["zy:rase", "zy:refuse", "zy:descend"] },
    ],
  },
};
