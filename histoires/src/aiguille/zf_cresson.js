// L'Île Folle-Aiguille · side story « La marchande de cresson » (owes its question to The Body Snatcher: who is guilty,
// when the anatomist buys a body he can tell was killed for him?). Every morning the doctor buys cress from Jacotte at
// the corner of the Cormoran. On the third morning Jacotte is not there. That night the prosector of the Faculté,
// Dubreuil, an old friend of her student days, invites her to a « fresh subject »: it is Jacotte, with a scarf hiding
// her throat. Victorine goes to the Prévôté (zf:denonce), buys the body back for a grave (zf:rachat), or stays and
// works, because a body is a body and she has never had one so fresh (zf:disseque). Wired in A2v_jours.
module.exports = {
  passages: {
    ZF_coin: { act: "II", title: "La marchande de cresson", place: "quai_hollandes", ambiance: "ville",
      fx: { meet: "jacotte" },
      text: [
        "Au coin de la rue du Cormoran, chaque matin, à six heures, il y a une fille de quinze ans avec un panier de cresson, qui crie *Cresson de fontaine, la santé du corps !* d'une voix aiguë comme un sifflet de bosco, et qui vend la botte deux liards. Elle s'appelle Jacotte. Elle a des sabots trop grands, un fichu rouge, des mains gercées, violettes de froid, et un rire qu'on entend d'un bout à l'autre du quai.",
        "Victorine lui achète une botte le premier matin, par politesse. Le deuxième, par habitude. Elle lui regarde les mains, et lui donne un pot de graisse de mouton pour les gerçures, et Jacotte rit, et dit que la graisse, elle va la manger. Le troisième matin, Victorine descend à six heures, ses deux liards à la main. Le coin de la rue du Cormoran est vide.",
        "Il est vide aussi le quatrième. Une marchande de poisson, à côté, hausse les épaules. « Elle a dû trouver un galant. Ou un marin. À cet âge-là, on disparaît. On revient enceinte, ou on revient pas. »",
      ],
      choices: [{ label: "Ouvrir le billet qu'on te remet le soir même", to: "ZF_billet" }] },
    ZF_billet: { act: "II", title: "La marchande de cresson", place: "faculte", ambiance: "nuit",
      text: [
        "Le billet est d'Anatole Dubreuil, prosecteur de la Faculté. Elle l'a connu étudiant, quand elle se cachait sous le nom de son mari au dernier rang de l'amphithéâtre ; il était le seul à savoir, et le seul à n'avoir rien dit. Il est devenu gros, chauve, brillant. Il a appris qu'elle était en ville. *Chère amie. Un sujet tout frais, ce soir, à la chapelle. Une rareté. Venez, si l'anatomie vous manque encore. On ne vous verra pas. D.*",
        "La chapelle désaffectée de la Faculté, la nuit, sent la cire, le vinaigre et la chair. Deux lampes à réflecteur éclairent une table de pierre au milieu de la nef. Dubreuil, en tablier de cuir, aiguise un scalpel sur une pierre à huile en sifflotant. Il l'accueille comme une vieille camarade, l'embrasse sur les deux joues, lui tend un tablier. « Je vous l'ai gardée, dit-il. Arrivée il y a une heure. Je ne l'ai pas encore ouverte. Vous verrez, c'est de la belle ouvrage. Pas un jour. »",
        "Il soulève le drap.",
        "Elle a quinze ans, des mains gercées et violettes, et un fichu rouge noué serré autour du cou, que personne n'a ôté. Ses sabots ne sont plus là. Elle a des taches de rousseur sur le nez, que Victorine n'avait pas remarquées, au coin de la rue, dans le froid du matin.",
      ],
      choices: [{ label: "Dénouer le fichu", to: "ZF_cou" }] },
    ZF_poing: { act: "II", title: "La marchande de cresson", place: "faculte", ambiance: "nuit",
      text: [
        "La main droite de Jacotte est fermée. Les doigts se sont raidis autour de quelque chose, et la raideur des morts, qui commence à peine, les tient serrés comme ceux d'un enfant qui ne veut pas rendre un caillou. Victorine les ouvre un à un, doucement, avec les gestes qu'on a pour un vivant, et Dubreuil, derrière elle, a la décence de se taire.",
        "Dans la paume, il y a deux liards. Deux petites pièces de cuivre noircies, tièdes encore de la chaleur qui reste au creux d'une main morte, dans une salle froide. Le prix d'une botte de cresson. Sous les ongles, cassés, il y a du vert : des débris de feuilles, mâchés, écrasés, mêlés à de la terre noire et à quelque chose de plus sombre, brun et sec, que Victorine connaît trop bien.",
        "Victorine reste un moment avec les deux liards dans sa propre main. Elle se dit que quelqu'un, dans la nuit, a acheté une botte de cresson à une fille de quinze ans, et qu'elle a serré la monnaie, et qu'elle l'a gardée serrée pendant tout le reste, parce que deux liards, à quinze ans, quand on a des sabots trop grands, valent la peine qu'on se batte pour eux.",
        "Elle pose les pièces sur la poitrine de la fille, côte à côte, comme on pose des pièces sur les yeux des morts, dans les vieux pays, pour le passeur. Dubreuil hausse un sourcil. Il dit que c'est très joli, et très superstitieux, de la part d'une femme de science. Elle dit qu'elle rembourse une dette.",
      ],
      choices: [
        { back: "ZF_cou", label: "Revenir au scalpel qu'il tend toujours" }
      ] },
    ZF_registre: { act: "II", title: "La marchande de cresson", place: "faculte", ambiance: "nuit",
      text: [
        "Dubreuil tient un registre, comme tout ce qu'il fait, avec une minutie de comptable. Il le sort d'un tiroir de la sacristie avec une certaine fierté : un gros livre relié de toile, où chaque sujet a sa ligne, son numéro, sa date, son sexe, son âge estimé, son prix, et, dans une dernière colonne, la mention de ce qu'on en a tiré. Un cœur, pour la collection. Un squelette, vendu à un collège. Un cerveau, dans l'alcool.",
        "Victorine tourne les pages. Les deux premières années, les sujets arrivent au rythme de l'hiver et des fièvres : beaucoup de vieillards, des noyés, des enfants des hospices. L'âge estimé dépasse souvent soixante ans. Puis, depuis l'automne, la colonne des âges change. Dix-neuf ans. Vingt-deux. Dix-sept. Quatorze. Les prix aussi changent : les frères ont augmenté leur tarif, et Dubreuil a payé sans discuter, en notant en marge, d'une écriture élégante, *qualité supérieure*.",
        "Elle compte. Onze sujets depuis l'automne, tous jeunes, tous arrivés le soir même de leur mort, et à côté de quatre d'entre eux, dans la colonne des observations, la même mention discrète, presque coquette : *cou à ne pas ouvrir*. Dubreuil, par-dessus son épaule, dit que c'est une simple note de technique, pour les étudiants, qui abîment tout.",
        "Victorine referme le registre. Elle dit qu'il faudrait relier ce livre-là en peau humaine, pour la cohérence. Dubreuil rit, sincèrement, de son bon gros rire d'étudiant, et dit qu'elle a toujours eu de l'esprit. Puis il cesse de rire, parce qu'elle a gardé le livre sous son bras.",
      ],
      choices: [
        { back: "ZF_cou", label: "Revenir à la table de pierre" }
      ] },
    ZF_cou: { act: "II", title: "La marchande de cresson", place: "faculte", ambiance: "nuit",
      text: [
        { first: true, text: "Sous le fichu, le cou porte des marques. Dix petites lunes violettes, deux rangées de cinq, de chaque côté de la gorge, là où des doigts ont serré. Le larynx est enfoncé. Les yeux, quand Victorine soulève les paupières, sont semés de points rouges, comme une poussière de sang." },
        { first: true, text: "Dubreuil regarde par-dessus son épaule. Il ne dit rien pendant un moment. Puis il soupire, d'un soupir de commerçant contrarié. « Oui. Bon. Je ne regarde jamais le cou, voyez-vous. Ce n'est pas mon affaire. » Il essuie son scalpel. « Les fournisseurs de la Faculté sont deux frères, de la Basse-Fosse. Ils prennent ce qu'ils trouvent dans les fosses communes, la nuit, et on les paie dix livres le sujet, et l'on ne pose pas de questions, parce que l'Académie, l'hiver dernier, a voté contre les dissections. Sans eux, il n'y aurait plus d'anatomie à Morlenc. » Il regarde la fille. « Les fosses communes, l'hiver, c'est lent. Les frères doivent manquer de patience. »" },
        { first: true, text: "Il lui tend le scalpel, par le manche. « Vous êtes médecin, Victorine. Elle est morte. Rien ne la rendra vivante. Ce qu'elle peut nous apprendre, ce soir, elle ne l'apprendra à personne d'autre. Pas de gâchis. C'est ce que vous disiez, autrefois, au dernier rang. »" },
        { first: true, text: "Elle regarde le scalpel. Elle regarde Jacotte. Elle pense au pot de graisse de mouton. Elle pense aussi, et elle a honte d'y penser, qu'elle n'a jamais eu, de toute sa vie, un corps aussi frais sous les mains." },
        { again: true, text: "Dubreuil tend toujours le scalpel par le manche, et Jacotte attend, sous les lampes, le fichu dénoué." }
      ],
      choices: [
        { label: "Ouvrir le poing fermé de Jacotte", to: "ZF_poing", hide: { seen: "ZF_poing" } },
        { label: "Demander à voir le registre des sujets", to: "ZF_registre", hide: { seen: "ZF_registre" } },
        { label: "Remettre le fichu, et partir pour la Prévôté, cette nuit même", fx: { flag: "zf:denonce" }, to: "ZF_prevote" },
        { label: "Payer les dix livres, et emporter Jacotte pour lui donner une tombe", fx: { flag: "zf:rachat", gold: -10 }, to: "ZF_rachat" },
        { label: "Prendre le scalpel", fx: { flag: "zf:disseque" }, to: "ZF_disseque" },
      ] },
    ZF_prevote: { act: "II", title: "La marchande de cresson", place: "haute_ville", ambiance: "nuit",
      text: [
        "Elle remet le fichu, doucement, en refaisant le nœud. Elle ôte le tablier. Dubreuil la regarde faire, et comprend, et pâlit. « Victorine. Si vous faites ça, la Faculté ferme la chapelle. Vingt étudiants n'apprendront rien cette année. Des gens mourront, faute de chirurgiens qui sachent où passe l'artère. Plus que deux frères n'en tueront jamais. » Elle ne répond pas. Elle sort.",
        "Le lieutenant de la Prévôté la reçoit à deux heures du matin, en bonnet de nuit, avec une mauvaise grâce exemplaire. Il l'écoute. Il écrit. Le lendemain, on arrête deux frères dans une cave de la Basse-Fosse, avec une charrette, des sacs, et une paire de sabots trop grands. Ils avouent quatre filles. Ils disent qu'ils ont commencé l'hiver dernier, quand les fosses ont gelé. On les pendra à la Croix-des-Marées le mois prochain, quand la Cormorane sera loin.",
        "La Faculté ferme la chapelle de dissection. Le professeur gras et satisfait de l'amphithéâtre fait savoir, par la gazette, qu'une femme qui se faisait passer pour médecin s'est mêlée d'une affaire de police. Dubreuil ne lui écrit plus. Le coin de la rue du Cormoran reste vide, les derniers matins. Une autre fille finit par s'y mettre, avec du cresson. Elle crie moins fort.",
      ],
      choices: [{ label: "Rentrer au Cormoran", fx: { quest: "ZF" }, back: "A2v_jours" }] },
    ZF_rachat: { act: "II", title: "La marchande de cresson", place: "faculte", ambiance: "nuit",
      text: [
        "Elle tire dix livres de sa bourse, les pose sur la table de pierre, à côté des pieds nus de Jacotte. Dubreuil regarde l'argent, puis elle, et il a l'air presque soulagé. « Comme vous voudrez. Je n'avais pas encore commencé. » Il l'aide lui-même à rouler la fille dans le drap.",
        "Elle la fait porter, à l'aube, dans une charrette à bras, par un portefaix à qui elle donne deux livres de plus pour qu'il ne pose pas de questions, jusqu'au cimetière des Hollandes. Le fossoyeur prend encore trois livres. Jacotte est enterrée au pied du mur des pauvres, à côté d'une fosse commune, dans un trou à elle seule, avec son fichu rouge, et une botte de cresson, parce que Victorine n'a rien trouvé d'autre à mettre.",
        "Elle ne dit rien à la Prévôté. Les deux frères de la Basse-Fosse continuent. Elle le sait. Elle se dit qu'elle a sauvé un corps et laissé courir des assassins, et qu'elle a fait, de toutes les choses possibles cette nuit-là, la plus petite. Elle se dit aussi que c'était la seule qui fût pour Jacotte, et pas pour elle.",
      ],
      choices: [{ label: "Rentrer au Cormoran", fx: { quest: "ZF" }, back: "A2v_jours" }] },
    ZF_disseque: { act: "II", title: "La marchande de cresson", place: "faculte", ambiance: "nuit",
      text: [
        "Elle prend le scalpel. Elle met le tablier. Elle laisse le fichu sur le cou, noué ; elle ne regardera pas le cou. Et elle travaille.",
        "Elle travaille jusqu'à l'aube, avec Dubreuil, sous les deux lampes, dans l'odeur de cire et de vinaigre. Elle retrouve tout ce que ses mains savaient, et que des années de campagne avaient endormi. Elle voit des choses qu'elle n'avait jamais vues : le trajet exact d'un nerf qu'elle cherchait, à Varnèse, à tâtons, dans des cuisses de paysans ; la forme d'une valvule ; la couleur d'un foie de quinze ans. Elle prend des notes. Elle fait des dessins. C'est la plus belle nuit de science de sa vie.",
        "À l'aube, quand elle se lave les mains au seau, longtemps, elle s'aperçoit qu'elle n'a pas regardé une seule fois le visage. Elle se retourne. Dubreuil a remis le drap. Elle ne le soulève pas.",
        "En rentrant au Cormoran, elle passe au coin de la rue. Il est vide. Elle a dans sa sacoche un carnet plein de choses vraies, précieuses, qui sauveront des vies, à Varnèse et ailleurs. Elle sait, en montant l'escalier, qu'elle ne pourra jamais l'ouvrir sans penser à des mains gercées, et qu'elle l'ouvrira quand même, souvent, parce qu'il est bon.",
      ],
      choices: [{ label: "Rentrer au Cormoran", fx: { quest: "ZF" }, back: "A2v_jours" }] },
  },
  extras: {
    people: {
      jacotte: { name: "Jacotte", aka: ["la marchande de cresson"], f: true,
        qui: "Une marchande de cresson de quinze ans, au coin de la rue du Cormoran." },
    },
    quests: [
      { id: "ZF", act: "II", kind: "annexe", title: "La marchande de cresson", start: "ZF_coin", doit: "resurrectionniste", echo: ["zf:denonce", "zf:rachat", "zf:disseque"] },
    ],
  },
};
