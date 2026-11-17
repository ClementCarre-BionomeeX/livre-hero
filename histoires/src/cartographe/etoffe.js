// More of the fever (first reading, all `second: false`): the numbers in the white sky, the reflection in the ink, the
// bottle with the roll of the expedition, the beds of the island of bells, the salt girl, the clock doctor's register
// and pendulum, the rat clerks and the rat's ledger, the herons flying home, the voices in the mist.
module.exports = {
  A_ciel: { act: "I", title: "Les chiffres du ciel", place: "encre", second: false,
    text: [
      "Tu lèves les yeux. Le ciel blanc porte, à l'endroit où tes cartes mettent d'ordinaire les latitudes, une colonne de chiffres tracés à l'encre violette, d'une écriture fine et pressée : *41. 41. 40,5. 41.* Chaque fois que ta barque avance d'une encablure, un chiffre nouveau s'écrit en bas de la colonne, tout seul, avec un petit grattement de plume.",
      "Ce sont des latitudes absurdes, des latitudes de désert ou de volcan. Ta main voudrait les recopier dans la marge de ta carte. Tu la retiens. Une carte qui note la chaleur au lieu de la distance a perdu la tête, ou bien elle te parle de toi.",
    ],
    choices: [
      { back: "A_encre" },
    ] },

  A_reflet: { act: "I", title: "Le reflet", place: "encre", second: false,
    text: [
      "Tu te penches par-dessus le bord de la barque. L'encre est si lisse qu'elle fait miroir, un miroir noir, profond, où ton visage flotte, plus pâle que nature, les cheveux collés au front.",
      "Derrière ton visage, au fond du reflet, il y a un plafond. Un plafond blanc, avec une fissure qui serpente comme une rivière, et ses affluents, et son delta. Une grande forme blanche passe devant, à ailes empesées, et se penche sur toi, d'en haut, d'en bas, tu ne sais plus. Une goutte froide tombe de nulle part sur ton front.",
      "Tu te redresses d'un coup. La mer d'encre est vide. Le ciel est blanc. Ta main a profité de l'instant pour dessiner, dans un coin de la carte, une petite fissure en forme de rivière.",
    ],
    choices: [
      { back: "A_encre" },
    ] },

  A_bouteille: { act: "I", title: "La bouteille", place: "encre", second: false,
    text: [
      "Une bouteille flotte contre la barque, bouchée à la cire, et tinte contre le bois avec la politesse d'un visiteur qui frappe. Tu la repêches. Dedans, roulé, un papier de bon grain. Tu casses le goulot sur le plat-bord.",
      "*Rôle de l'expédition Malbrouck aux Bouches-Noires. E. Malbrouck, cartographe. {hero}, apprenti{e}. J. Brunel, quartier-maître. Joachim, des Roselins, guide. Pons et Ferréol, bateliers.*",
      "En face de chaque nom, quelqu'un a écrit *mort*, d'une écriture grasse et appliquée, la même pour tous. En face du nom de Brunel, rien. En face du tien, le mot est écrit aussi, mais l'encre brille encore, fraîche, comme si on venait de le tracer, et qu'on attendait de voir s'il sècherait.",
    ],
    choices: [
      { back: "A_encre" },
    ] },

  A_lits: { act: "I", title: "Les collines numérotées", place: "cloches", second: false,
    text: [
      "Tu marches entre les collines de draps. Chacune porte, plantée à son pied comme une borne, une petite plaque d'émail avec un chiffre romain. *I. II. III.* Sur chaque colline, la même forme couchée, ton visage, ta sueur, tes mains sur la poitrine. Tu en comptes vingt et une.",
      "La douzième est vide. Le drap y est rabattu, net, avec un pli au carré, comme un lit qu'on vient de faire, ou qu'on attend de défaire. Sur l'oreiller, il y a un crayon. Tu le laisses où il est. Quelqu'un viendra le prendre pour toi, tu le sais, comme on sait ces choses-là en rêve.",
    ],
    choices: [
      { back: "A_cloches" },
    ] },

  A_fille_sel: { act: "I", title: "La petite fille de sel", place: "sel", second: false,
    text: [
      "Tu restes devant la petite fille au panier, la larme figée à mi-joue. Ses lèvres de sel bougent à peine, avec un bruit de sucre qu'on écrase.",
      "« Ma mère porte le sel au Roi, dit-elle. Un panier, un sou. Mon père tousse dans un lit blanc, très loin, sur une île qui sonne. Moi, je porte le sel aussi. On me paie la moitié, parce que je suis la moitié d'une personne. »",
      "Elle se tait. Une seconde larme commence à poindre au coin de son œil, et sèche avant de couler, en un petit grain blanc qui brille.",
    ],
    choices: [
      { back: "A_statues" },
    ] },

  A_registre: { act: "I", title: "Le registre des entrées", place: "horloge", second: false,
    text: [
      "Sur un pupitre, au milieu de la pièce ronde, un grand registre est ouvert. Le Médecin-Horloge ne t'empêche pas de lire : il a l'air de trouver que les malades devraient lire leur dossier plus souvent, ne serait-ce que pour corriger les fautes.",
      "*Entrées du mois de septembre.* Des noms, des âges, des fièvres. *Mathurin, saunier, 51 ans, poitrine.* Et tout en bas, d'une encre plus fraîche : *Le 17. Apprenti{e} sans nom, trouvé{e} dans une barque à l'entrée du port. Fièvre des marais. Dessine. Lit 12.*",
      "« Sans nom, dit le Médecin-Horloge, de sa voix de remontoir. Nous mettrons le nom à la sortie. Ou sur la pierre. Les deux registres sont tenus avec le même soin. »",
    ],
    choices: [
      { back: "A_tour" },
    ] },

  A_balancier: { act: "I", title: "La salle du balancier", place: "horloge", second: false,
    text: [
      "Sous la pièce ronde, au bout d'un escalier en ressort, une salle haute où bat un balancier énorme, une lame de cuivre longue comme un mât, qui passe et repasse au-dessus de ta tête avec un souffle de faux. Chaque battement fait trembler la tour, et l'encre dehors, et ton cœur, qui essaie de se mettre au pas et n'y parvient pas.",
      "Contre le mur, debout, une caisse d'horloge vide, de la taille exacte d'un homme couché, avec une étiquette à l'encre violette : *Lit libre.* Le Médecin-Horloge, en descendant derrière toi, la tapote affectueusement. « Ma meilleure pendule. Elle sert à tout le monde, une seule fois. »",
    ],
    choices: [
      { back: "A_tour" },
    ] },

  A_rats_comptent: { act: "I", title: "Les commis", place: "magasin", second: false,
    text: [
      "Tu tends l'oreille vers les rats à lorgnon, sur les poutres. Ils comptent à mi-voix, en se passant des bouts de papier, avec l'application de commis de banque à la veille d'une inspection.",
      "*Trois barques devant. Trois amarres. Trois coups de couteau. Une barque derrière, rentrée. Un guide, en cage. Témoins : zéro. Zéro. Zéro.* Le plus petit, tout au bout de la poutre, lève la patte : *Pardon, il en reste un, dans une barque qui dérive.* Les autres se retournent vers lui, et le regardent, et il baisse la patte, et se met à compter ses moustaches.",
    ],
    choices: [
      { back: "A_magasin_porte" },
    ] },

  A_comptoir: { act: "I", title: "Le grand livre du rat", place: "magasin", second: false,
    text: [
      "Pendant que le rat compte ses pièces, tu lis son grand livre à l'envers, par-dessus le comptoir, comme on apprend à le faire dans les ateliers où le maître écrit plus vite qu'il ne parle.",
      "*Biscuit, quarante livres. Eau-de-vie, six pintes. Amarres, douze brasses.* Et dans la colonne des recettes, une seule ligne, en lettres plus grosses que les autres : *Reçu de Sa Majesté le Roi de Sel, pour les cordes : 300.*",
      "Le rat referme le livre d'un coup de patte, sans lever les yeux. « On ne lit pas les comptes des autres, dit-il. C'est plus grave que de lire leurs lettres. Les lettres mentent. »",
    ],
    choices: [
      { back: "A_magasin" },
    ] },

  A_herons_vol: { act: "I", title: "Les hérons qui rentrent", place: "pendu", second: false,
    text: [
      "Un bruit d'ailes passe au-dessus du mât. Une file de hérons gris traverse le ciel blanc, très bas, le cou replié, les pattes traînant derrière eux comme des cannes oubliées. Ils volent sans hâte, tous dans la même direction : vers la tache grise, au centre de ta carte, que ta main refuse de dessiner.",
      "Le rameur pendu les suit des yeux, la tête en bas. « Ils rentrent, dit-il. Le soir, ils rentrent tous. Quand tu auras le mot, suis-les. Ils savent le chemin mieux que les cartes. Les cartes savent seulement le chemin de ceux qui les ont payées. »",
    ],
    choices: [
      { back: "A_pendu" },
    ] },

  A_cris: { act: "I", title: "Les voix dans la brume", place: "herons", second: false,
    text: [
      "Tu restes immobile dans la barque, et tu écoutes les hérons. Peu à peu, sous les mille cris rauques, ton oreille trie d'autres bruits. Deux voix d'hommes, qui se disputent sur la façon de vider une anguille. Un rire d'enfant, aigu, moqueur. Le choc sourd d'une perche contre un pilotis. Une odeur de fumée de saule.",
      "Et une toux de vieillard, puis un rire qui la suit, le rire de quelqu'un qui tousse trop pour son goût et rit pour se venger. Tu connais ce rire. Tu l'as entendu tous les jours de ton apprentissage, au-dessus des plaques de cuivre, chaque fois que tu ratais un trait.",
    ],
    choices: [
      { back: "A_herons" },
    ] },
};
