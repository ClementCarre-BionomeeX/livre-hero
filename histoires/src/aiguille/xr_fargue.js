// L'Île Folle-Aiguille · act II, chapter II.1 followed by the cook (second reading), the days between the men and the
// pitted man: the paupers' pit where Lisette's mother lies (fargue:tombe_annette or fargue:fosse), a game of chess with
// the professor at the Navigators' café (fargue:echecs_gagne or fargue:echecs_perdu), the first night in the galley of
// the Cormorane and what goes into the flour barrel (fargue:pistolet_farine or fargue:farine_propre). Wired between
// A2f_hommes and A2f_sabran.
module.exports = {
  passages: {
    XR_jours: { act: "II", title: "Les jours de l'armement", place: "basse_fosse", hub: true, noLead: true, backName: "Morlenc", ambiance: "ville", second: true,
      text: [
        { first: true, text: "Restent huit jours avant l'appareillage. Fargue les passe à faire ce qu'un maître-coq fait avant un long voyage, acheter du lard, des pois, de l'oignon, du vinaigre, du citron, et à faire ce que fait un homme qui prépare autre chose, c'est-à-dire exactement la même chose, en regardant mieux autour de lui." },
        { again: true, text: "Morlenc continue, autour de lui, à vendre, à acheter, à pendre et à prier. Il a encore quelques jours à lui." },
      ],
      choices: [
        { label: "Monter au cimetière des Hollandes, à la fosse des pauvres", to: "XR_fosse", hide: { seen: "XR_fosse" } },
        { label: "Jouer aux échecs au café des Navigateurs, où le professeur tient table", to: "XR_echecs", hide: { seen: "XR_echecs" } },
        { label: "Passer la première nuit dans la cambuse de la Cormorane", to: "XR_cambuse", hide: { seen: "XR_cambuse" } },
        { label: "Passer à la Truie-qui-file, où quelqu'un t'attend", to: "A2f_sabran", big: true },
      ] },

    XR_fosse: { act: "II", title: "La fosse des pauvres", place: "haute_ville", ambiance: "nuit", second: true,
      text: [
        "Le cimetière des Hollandes a deux étages, comme la ville. En haut, les terrasses des familles, les chapelles de marbre, les anges qui pleurent pour quarante livres la larme. En bas, contre le mur nord, là où le soleil ne vient jamais et où l'eau des terrasses suinte par les joints des pierres, la fosse des pauvres : une longue tranchée qu'on ouvre au printemps et qu'on referme à l'automne, avec de la chaux entre les couches, comme on fait les confitures.",
        "Annette y est depuis onze ans. Quelque part. Au deuxième ou au troisième rang de l'hiver de cette année-là, entre un portefaix et une fille de la rue des Tanneurs, morte de la même toux qui mange aujourd'hui Lisette, dans la même chambre de la Basse-Fosse, un soir de février où Fargue était en mer.",
        "Il n'y a pas de croix. Il y a le mur, verdi, ruisselant, couvert de mousse et d'escargots, et sur le mur, gravés au couteau, des centaines de noms, de prénoms, d'initiales, que les familles y ont laissés faute de mieux, les uns par-dessus les autres, si serrés qu'on dirait une écriture inconnue, une seule longue phrase dans une langue que parleraient les morts entre eux. Au milieu, à hauteur d'homme, un *A* et un *L* entrelacés, qu'il a gravés lui-même au retour.",
        "Il reste devant le mur, le chapeau à la main. Il chante, à mi-voix, la berceuse. Les escargots, sur la pierre mouillée, continuent leur chemin, très lentement, d'un nom à un autre, comme s'ils les lisaient.",
        "Il a dans sa poche l'argent du baron. Le marbrier des terrasses, en haut, fait des pierres convenables pour cent livres, avec le nom, les dates, une ancre. On n'y mettrait pas Annette, on ne sait plus où elle est. On y mettrait son nom.",
      ],
      choices: [
        { label: "Monter chez le marbrier, et payer une pierre avec un nom", fx: { gold: -100 }, to: "XR_fosse_pierre" },
        { label: "Garder chaque sou pour Lisette, qui vit", to: "XR_fosse_mur" },
      ] },
    XR_fosse_pierre: { act: "II", title: "La pierre", place: "haute_ville", ambiance: "ville", second: true,
      text: [
        "Le marbrier est un homme pâle aux mains blanches de poussière, qui parle des morts comme un tailleur parle de ses clients : avec respect, et le mètre à la main. Il propose un ange. Fargue refuse l'ange. Il propose une urne. Fargue refuse l'urne. Il propose, enfin, avec un soupir d'artiste méconnu, une simple dalle de granit gris, à poser contre le mur du bas, puisque Monsieur insiste pour le mur du bas.",
        "*ANNETTE FARGUE. ELLE CHANTAIT.*",
        "« Pas de dates ? — Elle n'aimait pas les dates. Elle disait que ça faisait des comptes. »",
        "Fargue paie d'avance. Le marbrier le raccompagne jusqu'à la grille avec une considération toute neuve. Un homme qui paie d'avance une pierre sans ange, dans la Basse-Fosse, c'est un homme qui va partir loin, ou qui a fait quelque chose. Souvent les deux.",
      ],
      choices: [{ label: "Redescendre vers le port", fx: { flag: "fargue:tombe_annette" }, back: "XR_jours" }] },
    XR_fosse_mur: { act: "II", title: "Le mur", place: "haute_ville", ambiance: "nuit", second: true,
      text: [
        "Il pose la main à plat sur le mur, sur le *A* et le *L*. La pierre est froide, mouillée, vivante d'escargots.",
        "« Je ne t'achète rien, Annette, dit-il. Tu comprendras. L'argent va à la petite. Tu aurais fait pareil, en me traitant d'imbécile pour avoir seulement hésité. »",
        "Il reste encore un moment. Puis il redescend par les terrasses, entre les anges à quarante livres, en sifflotant, parce qu'Annette n'aimait pas qu'on soit triste devant elle, et qu'il n'a jamais su lui refuser quoi que ce soit, sauf de rester à terre.",
      ],
      choices: [{ label: "Redescendre vers le port", fx: { flag: "fargue:fosse" }, back: "XR_jours" }] },

    XR_echecs: { act: "II", title: "Le café des Navigateurs", place: "quai_hollandes", ambiance: "ville", second: true,
      text: [
        "Le café des Navigateurs est l'endroit de Morlenc où l'on parle le plus de la mer et où l'on en sent le moins l'odeur : boiseries, lustres, gazettes sur des bâtons, cartes marines encadrées, et des armateurs en gilet qui calculent, sur le marbre des tables, des naufrages au centime près. Un cuisinier en foulard rouge n'y entre que par la porte de derrière. Fargue entre par la grande, et personne n'ose le lui faire remarquer, parce qu'il a l'air de savoir ce qu'il fait.",
        "Au fond, sous la grande carte du Ponant, le professeur Gaudrémont tient table d'échecs, comme chaque soir de sa vie à terre, et ruine les capitaines en retraite à un écu la partie, en les insultant à chaque coup avec une érudition admirable.",
        "« Un cuisinier ! tonne-t-il. On m'envoie un cuisinier ! L'Académie a donc fini de me haïr en secret ! Asseyez-vous, cuisinier ! Vous connaissez la marche du cavalier, au moins ? »",
        "Fargue s'assied. Il connaît la marche du cavalier. Il l'a apprise en prison, avec un jeu taillé dans de la mie de pain durcie au soleil, contre un faussaire qui trichait et un évêque défroqué qui ne trichait pas, ce qui le rendait beaucoup plus dangereux.",
        "Au vingtième coup, le professeur a perdu une tour et le fil de ses insultes. Au trentième, Fargue voit le mat en quatre coups. Gaudrémont ne le voit pas. Il parle, en jouant, de son matériel pour le voyage, et en particulier d'un compas de déclinaison fabriqué à Morlenc sur ses propres plans, « le seul instrument au monde capable de dire à un marin quand son aiguille lui ment ».",
      ],
      choices: [
        { label: "Donner le mat, et le regarder rugir", to: "XR_echecs_gagne" },
        { label: "Perdre, adroitement, et le faire parler de son compas", to: "XR_echecs_perdu" },
      ] },
    XR_echecs_gagne: { act: "II", title: "Le café des Navigateurs", place: "quai_hollandes", ambiance: "ville", second: true,
      text: [
        "Mat en quatre coups. Le professeur regarde l'échiquier, puis le cuisinier, puis l'échiquier, avec l'expression d'un homme qui vient de voir un phoque réciter Virgile.",
        "Puis il éclate. Il éclate d'un rire de tonnerre qui fait trembler les lustres et se retourner les armateurs, et il frappe la table si fort que les pièces sautent. « Mat ! Par un cuisinier ! Garçon ! Une bouteille ! La meilleure ! C'est le cuisinier qui ne paie pas ! »",
        "Ils boivent. Le professeur exige une revanche pour chaque soir, à bord. Fargue promet. Il ne saura rien du compas de déclinaison, ce soir-là, sinon que le professeur le range dans une boîte d'acajou dont il porte la clef au cou, et qu'il en parle comme un père de sa fille. C'est déjà beaucoup.",
      ],
      choices: [{ label: "Sortir dans le soir, avec un ami de plus", fx: { flag: "fargue:echecs_gagne", regard: { gaudremont: "cordial" } }, back: "XR_jours" }] },
    XR_echecs_perdu: { act: "II", title: "Le café des Navigateurs", place: "quai_hollandes", ambiance: "ville", second: true,
      text: [
        "Fargue joue un coup de débutant, un fou lancé à l'aventure, et le professeur fond dessus avec un cri de triomphe. Puis un autre. Puis il laisse sa dame en prise, avec une distraction parfaite, en demandant comment, au juste, un compas peut savoir que l'aiguille ment.",
        "Gaudrémont, vainqueur, devient généreux, et généreux, il devient bavard. Il explique, en dessinant sur le marbre avec du vin : il existe des endroits, rares, où le fer de la terre détourne l'aiguille, la fait tourner, trembler, mentir de plusieurs quarts. Son instrument, une seconde aiguille montée sur un cercle gradué, mesure l'écart et permet de corriger. « Avec ceci, cuisinier, un homme qui a pris un relèvement faux, sur une île menteuse, peut retrouver le vrai. Sans ceci, il creuse dans la mer ! »",
        "Fargue paie l'écu de la défaite. Il le paie avec plaisir. C'est l'écu le mieux placé de sa vie.",
      ],
      choices: [{ label: "Sortir dans le soir, en sachant une chose de plus", fx: { flag: "fargue:echecs_perdu", regard: { gaudremont: "cordial" } }, back: "XR_jours" }] },

    XR_cambuse: { act: "II", title: "La cambuse", place: "cormorane", ambiance: "nuit", second: true,
      text: [
        "La cambuse de la Cormorane est un réduit au-dessous du gaillard d'avant, entre le puits aux chaînes et la soute à pain, où l'on ne tient debout qu'en courbant la nuque. Un fourneau de fonte maçonné sur un lit de briques, un billot, une marmite assez grande pour bouillir un homme, des crochets, des couteaux, un hublot de la taille d'une assiette. Fargue y descend à la nuit, avec une lanterne, pour faire connaissance.",
        "Il connaît les cambuses. Celle-ci a un défaut que n'ont pas les autres, et qu'il découvre en posant la lanterne sur le billot : on y entend le navire. Pas les bruits ordinaires, les craquements, le clapotis, les rats. Autre chose, venu de l'avant, à travers les membrures : un long murmure de bois qui travaille, monte, descend, se tait, reprend, comme une respiration de dormeur, ou comme quelqu'un, très loin, au fond d'une cave, qui récite une prière sans fin en changeant de langue toutes les trois phrases. Il reste longtemps sans bouger à l'écouter. Il finit par comprendre que c'est l'étrave, qui parle à l'eau du port. Il ne se sent pas mieux.",
        "Il range. Les couteaux par taille. Les épices par couleur. Les barils de farine contre la cloison, trois, cerclés de fer, avec leur couvercle cloué. Il en décloue un, l'ouvre, plonge le bras dans la farine jusqu'à l'épaule, et la sent couler entre ses doigts, fraîche, douce, profonde.",
        "Dans son sac, il y a un pistolet, chargé, enveloppé de toile cirée. Une farine bien tassée garde un pistolet au sec pendant six mois. Personne ne fouille la farine. Personne, sauf le cuisinier.",
      ],
      choices: [
        { label: "Enfouir le pistolet au fond du baril", to: "XR_cambuse_pistolet" },
        { label: "Le garder dans ton sac, et laisser la farine à la farine", to: "XR_cambuse_propre" },
      ] },
    XR_cambuse_pistolet: { act: "II", title: "La cambuse", place: "cormorane", ambiance: "nuit", second: true,
      text: [
        "Le pistolet descend dans la farine comme un noyé dans la vase, sans bruit, et la farine se referme sur lui. Fargue lisse la surface du plat de la main, recloue le couvercle avec les mêmes clous, dans les mêmes trous, et fait au fer de la marmite, sur le cercle, une petite marque que personne ne remarquera, en forme de note de musique.",
        "Puis il s'assied sur le billot, et il écoute encore l'étrave parler à l'eau. Il a maintenant un secret dans la cambuse. Le navire, à sa manière, en a d'autres. Ils vont bien s'entendre.",
      ],
      choices: [{ label: "Remonter sur le pont", fx: { flag: "fargue:pistolet_farine" }, back: "XR_jours" }] },
    XR_cambuse_propre: { act: "II", title: "La cambuse", place: "cormorane", ambiance: "nuit", second: true,
      text: [
        "Il retire son bras de la farine, blanc jusqu'à l'épaule, comme un homme qui sort d'un rêve de neige. Il secoue sa manche. Il garde le pistolet dans son sac, sous sa chemise de rechange, avec les autres choses qu'on ne range nulle part.",
        "La farine est pour le pain. Le pain est pour l'équipage. On peut préparer une mutinerie ; on ne gâche pas une fournée. Il y a des principes qu'un cuisinier garde jusqu'au bout, même quand il en a perdu tous les autres.",
      ],
      choices: [{ label: "Remonter sur le pont", fx: { flag: "fargue:farine_propre" }, back: "XR_jours" }] },
  },
  extras: {},
};
