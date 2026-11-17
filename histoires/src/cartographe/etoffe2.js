// More of the waking (second reading, all `second: true`): bed twelve, the coat, the neighbour from the salt works,
// the chapel and its votive boat; on the port, the salt girl, the bargemen's tavern, the jailer; in the marsh, the
// tide mill and the old salt pans; on the island, the village, the two boatmen, the old woman's riddle (g3), the master.
module.exports = {
  S_lit_douze: { act: "II", title: "Le lit douze", place: "hopital", second: true,
    text: [
      "Au pied de ton lit de fer, une petite plaque d'émail blanc porte un chiffre romain : *XII*. Au-dessus du lit, le crochet où l'on suspend la feuille de température est vide. Les feuilles sont au pied du lit, collées à la mie de pain, couvertes d'îles.",
      "Tu comptes les lits de la salle. Vingt et un. Sous chaque drap tendu, une forme couchée, qui respire. Tu as marché sur leurs collines cette nuit, et chaque visage était le tien. De jour, ce sont des visages de sauniers, de bateliers, de pêcheuses d'anguilles, jaunes de fièvre, qui te regardent avec la curiosité un peu jalouse qu'on a pour les malades qui guérissent.",
    ],
    choices: [
      { back: "S_salle" },
    ] },

  S_manteau: { act: "II", title: "Tes poches", place: "hopital", second: true,
    text: [
      "Ton manteau de voyage pend à un clou, au-dessus du lit, raide de vase séchée. Tu en vides les poches sur ta couverture, comme on dépouille un courrier.",
      "Un bout de crayon usé jusqu'au bois. Une plume de héron grise, taillée, que tu as dû ramasser dans le fond de la barque et tailler en délire, car la taille est belle et tu ne t'en souviens pas. Un biscuit de mer ramolli, marqué au fer d'un *B* majuscule. Et une boussole de poche, dont l'aiguille tourne, tourne, et refuse de choisir un nord, comme une malade qui cherche le côté frais de l'oreiller.",
      "Tu remets la plume dans ta poche. Ta main la serre d'elle-même, avec une familiarité de vieille complice.",
    ],
    choices: [
      { back: "S_salle" },
    ] },

  S_voisin: { act: "II", title: "Le saunier", place: "hopital", second: true,
    text: [
      "Dans le lit onze, à ta droite, un homme maigre aux mains blanchies, crevassées de sel jusqu'au poignet, tousse dans un mouchoir à carreaux. Il a cinquante et un ans et en paraît soixante-dix. « Mathurin, dit-il. Saunier. Trente ans aux salines du comte. Le sel vous rentre dans la poitrine, à la longue, et il y fait des cristaux. »",
      "Il tousse encore, puis sourit, d'un sourire où il manque des dents. « Ma femme porte les paniers, à présent. Et la petite aussi, Nine, huit ans. Un sou le panier pour la mère, un demi pour la petite. Le comte dit qu'il paie au poids. C'est vrai. Il paie au poids des gens. »",
      { if: { seen: "A_fille_sel" }, text: "Une petite fille au panier, une larme de sel figée à mi-joue. *Mon père tousse dans un lit blanc, très loin, sur une île qui sonne.* Tu regardes Mathurin, et tu dois détourner les yeux, parce que la fièvre t'a appris le nom de sa fille avant lui." },
    ],
    choices: [
      { back: "S_salle" },
    ] },

  S_chapelle: { act: "II", title: "La chapelle des bateliers", place: "hopital", second: true,
    text: [
      "Au bout de la salle, une petite chapelle basse, aux murs couverts d'ex-voto : des barques peintes sur des planchettes, des maquettes de barges pendues au plafond par des fils, des bouts de rame gravés de dates. *Sauvé des eaux, 1789. Rendu à sa mère par la Vierge des Salines.* Les marais rendent peu, mais ce qu'ils rendent, on le remercie avec soin.",
      "Un ex-voto plus grand que les autres attire ton œil : une barque perdue au milieu de roseaux gris, sous un vol de hérons, dessinée à la plume d'un trait sûr, nerveux, que tu reconnaîtrais entre mille. En bas, à droite, deux initiales : *E. M.*, et une date vieille de quarante ans. Et dessous, une ligne de la même main : *Rendu par les gens des roseaux. Que Dieu les garde, puisque personne d'autre ne s'en charge.*",
    ],
    choices: [
      { back: "S_salle" },
    ] },

  // ------------------------------------------------------------------ the port
  S_quai_sel: { act: "II", title: "Les porteuses de sel", place: "port", second: true,
    text: [
      "Le long du quai, une file de femmes en jupe relevée, pieds nus, portent des paniers de sel des barges jusqu'aux entrepôts du comte, dans un va-et-vient lent qui ressemble à une procession. Un commis à chapeau, assis sur un tonneau, fait une encoche dans une baguette de bois à chaque panier.",
      "Parmi elles, une petite fille de huit ans peut-être, avec un panier à sa taille, la moitié des autres. Sur sa joue, une traînée de sel séché, à l'endroit où une larme a coulé et où le vent l'a cuite. Tu t'arrêtes net. Tu l'as vue cette nuit, statue, sur une île blanche.",
    ],
    choices: [
      { label: "Lui donner un sou, de la part de son père", if: { gold: { min: 1 } }, fx: { gold: -1 }, to: "S_nine" },
      { back: "S_port" },
    ] },

  S_nine: { act: "II", title: "Nine", place: "port", second: true,
    text: [
      "Tu poses un sou dans le panier, sur le sel. La petite te regarde avec méfiance, puis avec stupeur quand tu lui dis que son père, au lit onze, pense à elle. Elle se tait. Elle prend le sou, le frotte sur sa jupe pour en ôter le sel, et le serre dans son poing.",
      "Le commis au tonneau a tout vu. Sa baguette reste immobile, sans encoche. Il te regarde avec l'expression d'un homme qui vient d'assister à un désordre, et qui va devoir l'écrire quelque part.",
    ],
    choices: [
      { back: "S_port" },
    ] },

  S_cabaret: { act: "II", title: "Au Héron Borgne", place: "port", second: true,
    text: [
      "Le cabaret des bateliers est une salle basse et enfumée, où l'on boit un vin de marais aigre comme un procès. On t'y reconnaît. On te paie un verre, parce qu'on paie toujours un verre aux revenants : c'est moins cher qu'une messe, et plus gai.",
      "« Le comte va assécher, dit un vieux batelier à barbe d'étoupe. Il a acheté le delta au roi pour un écu symbolique, sur la foi d'une carte qui le dira vide. Une fois sec, il y mettra du blé et du sel, et nous, on ira ramer dans les champs. »",
      "« Les Roselins ? rit un autre. Des contes de nourrice. Des gens qui vivent sur l'eau, sans impôt, sans curé et sans comte ? Si ça existait, le comte l'aurait déjà acheté. »",
      "Toute la salle rit. Tu bois ton vin aigre. Tu as vu une vieille femme aux yeux patients, dans un rêve, et à Brésille, les rêves de fièvre boivent à leurs frais.",
    ],
    choices: [
      { back: "S_port" },
    ] },

  S_geolier: { act: "II", title: "Le geôlier", place: "port", second: true,
    text: [
      "Le geôlier à jambe de bois t'offre une moule, à même le chapeau. Tu la prends, par politesse. Elle est délicieuse, ce qui t'étonne plus que tout le reste de la matinée.",
      "« Ma jambe ? dit-il, sans qu'on lui ait rien demandé. Les salines. Un wagonnet de sel. Le comte m'a donné cette place pour la peine. Une jambe pour une prison, c'est le tarif. » Il mâche. « Il en vient, du monde, pour le Roselin. Le gros Brunel, deux fois, pour demander s'il parlait. Je lui ai dit : il se tient sur une jambe et il se tait. Ça l'a rassuré. Moi, ça m'inquiète. Un homme qui se tait sur une jambe, il attend quelque chose. »",
    ],
    choices: [
      { back: "S_port" },
    ] },

  // ------------------------------------------------------------------ the marsh
  S_moulin: { act: "II", title: "Le moulin à marée", place: "marais", second: true,
    text: [
      "Joachim laisse la barque glisser contre le moulin abandonné. Sa grande roue de bois noir tourne encore, poussée par le reflux, avec un claquement régulier de pales qui frappent l'eau. Tic. Tac. Tic. Un héron, perché sur le moyeu, tourne avec elle, gravement, une patte repliée, et se laisse remonter à chaque tour avec la dignité d'un médecin qui fait sa visite.",
      { if: { has: "iris:avec" }, text: "Iris sort le compas de son père et relève l'angle du moulin par rapport au clocher du bac. Elle note un chiffre, puis le raye, puis le réécrit. « Il est passé ici, dit-elle. Il a dû noter ce moulin. Il note tout ce qui tourne. »" },
      "Tu regardes la roue, et tu entends la voix sèche d'un petit homme à tête de montre : *Vos jours sont en désordre.* Ils sont en ordre, à présent. Tu les tiens comme on tient une rame.",
    ],
    choices: [
      { back: "S_marais" },
    ] },

  S_salines_mortes: { act: "II", title: "Les salines abandonnées", place: "marais", second: true,
    text: [
      "Vous longez les vieilles salines, abandonnées depuis qu'on en a creusé de plus grandes près du port. Les bassins se sont remplis de vase, et les tas de sel, jamais emportés, ont durci sous la pluie en blocs gris, hauts comme des tentes, que les herbes attaquent par le pied.",
      "Sur l'un d'eux, quelqu'un a gravé des noms, au couteau, il y a longtemps, en colonnes, comme dans un registre : des prénoms, des âges, une croix. *Jeanne, 9 ans. Pierrot, 11 ans. Margot, 8 ans.* Joachim, à l'arrière, regarde les noms sans ralentir. « Les enfants des sauniers, dit-il. Le sel les mangeait. Les vôtres, on les grave sur le sel. Les nôtres, on les grave sur l'eau. Ça dure moins longtemps, mais ça fait moins mal à regarder. »",
    ],
    choices: [
      { back: "S_marais" },
    ] },

  // ------------------------------------------------------------------ the village of the herons
  S_village: { act: "II", title: "Le village des roseaux", place: "marais", second: true,
    text: [
      "Tu marches sur les passerelles de roseau tressé, qui plient sous ton pas et se redressent derrière toi. Les maisons rondes ont des portes basses, des toits pointus où dorment les hérons, et des jardins flottants, des radeaux de terre et de racines où poussent des choux, des oignons, des fleurs d'eau jaunes.",
      "Des enfants te suivent à distance, en riant derrière leurs mains. Une femme tresse une nasse sans regarder ses doigts. Un homme, sur un radeau, fume une pipe de roseau en surveillant un filet. Partout, l'eau, qui clapote sous les pilotis, et dont personne ne se méfie, ici, puisqu'elle est la rue, le champ et le cimetière.",
      "Tu penses au comte, à sa fenêtre, à son blé. Tu essaies d'imaginer ce village sec. Tu n'y arrives pas. L'imagination a ses pudeurs.",
    ],
    choices: [
      { label: "Parler aux deux bateliers de l'expédition", hide: { seen: "S_bateliers" }, to: "S_bateliers" },
      { label: "Aller trouver la vieille femme aux yeux patients", hide: { has: "enigme:g3" }, to: "S_vieille" },
      { label: "T'asseoir près de ton maître", hide: { seen: "S_maitre" }, to: "S_maitre" },
      { back: "S_ile_herons" },
    ] },

  S_bateliers: { act: "II", title: "Pons et Ferréol", place: "marais", second: true,
    text: [
      "Pons et Ferréol, les deux bateliers de l'expédition, sont assis au bord d'une passerelle, les pieds dans l'eau, une anguille chacun entre les mains, et deux enfants roselins leur montrent, pour la dixième fois, avec une patience moqueuse, comment on la tient pour qu'elle ne file pas. L'anguille de Pons file. Les enfants hurlent de rire.",
      "« Le gros a coupé, dit Ferréol, sans lever les yeux de son anguille. On l'a vu. Trois coups de couteau dans la nuit, et nos barques qui partent dans le courant comme des feuilles. Le vieux a crié ton nom jusqu'à ce que ta barque disparaisse. »",
      "« Après, on a coulé, dit Pons. Eux nous ont repêchés. » Il désigne les enfants du menton. « Enfin, leurs parents. Depuis, on apprend l'anguille. C'est plus dur que la cartographie. Une côte, au moins, ça reste où on l'a mise. »",
    ],
    choices: [
      { back: "S_village" },
    ] },

  S_vieille: { act: "II", title: "La vieille femme", place: "marais", second: true, puzzle: "g3",
    text: [
      "La vieille femme qui t'a fait passer la brume est assise sur le seuil de la plus grande maison, sur une natte, et fume une pipe de roseau. Elle te fait signe de t'asseoir en face d'elle. Tu t'assois. Elle te regarde longtemps, avec ses yeux noirs et patients, et elle te parle, dans la langue de Brésille, lentement, comme on pose des pierres pour traverser un gué.",
      "« Le mot, tu l'avais. Le mot ouvre la brume. Mais chez nous, le nom d'une personne s'ouvre avec un autre mot. Écoute. »",
    ],
    choices: [
      { back: "S_village" },
    ] },

  S_g3: { act: "II", title: "Le nom de la vieille femme", place: "marais", second: true,
    text: [
      "La vieille femme ôte sa pipe de sa bouche, et sourit pour la première fois. Un sourire tout en rides, comme un chenal vu d'en haut.",
      "« Le fleuve, dit-elle. Oui. Chez nous, on donne aux enfants le nom de ce qui les a portés. Moi, je suis née dans une barque, pendant une crue. On m'appelle Crue. » Elle remet sa pipe. « Tu peux le dire, à présent. Tu peux même l'écrire. Sur ta carte, si tu veux. Il y a des noms qui ont besoin d'être écrits quelque part pour qu'on se souvienne qu'ils existent. »",
    ],
    choices: [
      { back: "S_village" },
    ] },

  S_maitre: { act: "II", title: "Ton maître", place: "marais", second: true,
    text: [
      "Tu t'assois sur la passerelle, à côté du tabouret de Malbrouck. Il dessine, la jambe tendue dans ses attelles de saule, les yeux sur son papier. Il dit : « Montre. » Tu lui montres ta carte de fièvre, ou tu la lui racontes, île par île. Il écoute, et il rit, et il tousse, et il rit encore.",
      "« La Voilière, dit-il. Le Roi de Sel. Le Médecin-Horloge. Le rat. » Il s'essuie les yeux sous ses lunettes. « Tu es meilleur{e} que moi. Moi, ma première fièvre, j'ai dessiné une baleine qui me récitait l'almanach. Je l'ai gravée, d'ailleurs. Elle est très bien. Elle n'a jamais servi à rien. »",
      { if: { seen: "S_chapelle" }, text: "Tu lui parles de l'ex-voto, dans la chapelle de l'hôpital, la barque, les hérons, les initiales. Il s'arrête de dessiner. « Tu l'as vu. Quarante ans. J'avais ton âge, et une fièvre, et une barque. Ils m'ont rendu, ce jour-là. Je leur devais une carte. Je leur devais une carte qui dise qu'ils sont là. »" },
      "Il reprend son crayon. « La fièvre dessine juste, tu sais. Elle dessine les gens à la place des côtes, voilà tout. Une bonne carte fait les deux. »",
    ],
    choices: [
      { back: "S_village" },
    ] },
};
