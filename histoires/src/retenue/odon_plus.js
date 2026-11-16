// Odon, the scenes added: the Chat Ferré, the grille and the men on the bridge, the courier who comes from the lavoir,
// the parcel opened on the way up, the letter told to the captain, Anicet's memory, the doors of the rue du Lavoir and
// the bell of the lavoir (a new ending: the dam breaks on a quarter that is already up).
var A = "I";
module.exports = {
  // ------------------------------------------------------------------ before the bridge
  O_chat: { act: A, title: "Le Chat Ferré", place: "hauteville", fx: { learn: "bastien_dette", time: 0.25 },
    text: [
      "Tu laisses Colin et Thomin au coin de la rue et tu suis Bastien Vellard jusqu'au Chat Ferré. L'enseigne grince au vent : un chat de fer découpé, la queue en point d'interrogation.",
      "Par la porte vitrée, tu le vois entrer. On l'accueille comme un prince. Derrière son comptoir, maître Lucas, le patron, ouvre un grand livre noir à une page qu'il connaît par cœur. Bastien pose sur le comptoir une liasse de billets.",
      "Lucas compte, recompte, puis il raye une ligne d'un seul trait de plume, lentement, de bout en bout. Bastien rit et lève le pichet qu'on lui tend.",
      "Le fils Vellard vient de payer ses dettes de jeu, ce soir, à neuf heures, avec l'argent de quelqu'un.",
    ],
    choices: [{ label: "Rejoindre tes hommes, et descendre au pont", to: "O_pont", fx: { time: 0.25 } }] },

  // ------------------------------------------------------------------ the bridge, before the courier
  O_grille: { act: A, title: "La grille du ponceau", place: "pont", fx: { flag: "odon:grille", time: 0.25 },
    text: [
      "Tu descends dans les orties, au pied de la culée, avec la lanterne. La grille du ponceau pend sur son gond, la rouille en écailles. Derrière, la bouche noire de l'égout souffle un air froid qui sent la garance.",
      "Tu la soulèves, tu la laisses retomber. Elle tombe de travers, à moitié ouverte. Ce printemps encore, tu as écrit au capitaine : *grille du ponceau à refaire*. Il a contresigné, et la grille est restée sur son gond ; le guet de Corvèze tient ses écritures mieux que ses grilles.",
      "Tu pourrais la caler avec une pierre, et le passage serait fermé. Tu remontes sur le pont sans y toucher. Tu sais très bien pourquoi, et tu préfères éviter d'y penser.",
    ],
    choices: [{ label: "Remonter à ta lanterne", back: "O_pont" }] },
  O_hommes: { act: A, title: "Colin et Thomin", place: "pont", fx: { flag: "colin:mere", time: 0.25 },
    text: [
      "Colin a dix-neuf ans, un duvet de moustache qu'il peigne tous les matins, et une mère qui vend des beignets sur la place du Lavoir. Thomin en a trente, une femme, trois enfants, et une dette de soupe envers toi qu'il ne paiera jamais.",
      "« Sergent, dit Thomin. On attend qui, au juste ? »",
      "« Des porteurs. »",
      "« Qui portent quoi ? »",
      "Tu laisses la question au vent. Colin souffle sur ses doigts. « Ma mère dit que le lavoir déborde, ce soir. Elle dit que la dernière fois qu'il a débordé en novembre, c'était l'année où mon grand-père s'est noyé. » Il rit, pour qu'on le croie sans peur.",
    ],
    choices: [{ label: "Remonter à ta lanterne", back: "O_pont" }] },
  O_courriere: { act: A, title: "Neuf heures et demie", place: "pont",
    text: [
      "À neuf heures et demie, une silhouette monte la rue des Teinturiers d'un pas rapide, un paquet long serré contre elle. Une jeune femme, en châle de laine, des souliers de courrier.",
      { if: { has: "odon:grille" }, text: "En bas, contre la culée, la grille du ponceau pend toujours de travers, à moitié ouverte, comme tu l'as laissée." },
    ],
    choices: [
      { label: "L'arrêter et saisir le paquet", to: "O_saisie" },
      { label: "Lui demander ce qu'elle porte, et pour qui", to: "O_parle" },
      { label: "Lui demander si elle vient du lavoir, et si elle a vu Nine", if: { second: true }, to: "O_courriere_nine" },
      { label: "Détourner les yeux, et la laisser passer", to: "O_laisse", via: "aveugle" },
    ] },
  O_courriere_nine: { act: A, title: "Les osselets", place: "pont",
    text: [
      "« Tu viens d'en bas ? Tu es passée par le lavoir ? Tu as vu ma fille ? »",
      "La jeune femme s'arrête. Elle te regarde mieux. « Nine ? Vous êtes le père de Nine ? » Et d'un coup, tu la reconnais : la petite Ternier, qui jouait aux osselets avec Nine sur les pavés du lavoir, les genoux toujours écorchés. Maëlle. Elle a grandi. Elle fait la course de nuit, maintenant.",
      "« Elle essorait les draps de l'hospice, dit Maëlle. Elle a dit que vous l'aviez embrassée sur le front, à huit heures, et que vous faites ça quand vous avez des ordres qui ne vous plaisent pas. »",
      "Colin, derrière toi, étouffe un rire. Tu évites de te retourner.",
    ],
    choices: [
      { label: "« Et ce paquet, petite ? »", to: "O_parle" },
      { label: "« Passe. Je ne t'ai pas vue. »", to: "O_laisse", via: "ilde" },
    ] },

  // ------------------------------------------------------------------ the parcel, on the way up
  O_montee: { act: A, title: "La Côte, avec le paquet", place: "hauteville", fx: { time: 0.25 },
    text: [
      "Tu remontes vers la Haute-Ville par la Côte, le paquet sous le bras. Deux cent douze marches. À chaque palier, le paquet pèse un peu plus.",
      "Au palier de la Vierge, sous la niche où brûle une veilleuse, tu t'arrêtes pour souffler. La ficelle est un nœud de courrier, propre, serré. La toile cirée luit à la veilleuse.",
      "Le capitaine a dit : sans l'ouvrir.",
    ],
    choices: [
      { label: "Défaire le nœud", to: "O_paquet_ouvert", fx: { learn: "cle" } },
      { label: "Remonter sans y toucher", to: "O_bureau" },
    ] },
  O_paquet_ouvert: { act: A, title: "Le palier de la Vierge", place: "hauteville",
    text: [
      "Une clé de fer forgé, longue comme ton avant-bras, l'anneau large comme ta paume. Deux lettres gravées sur la tige : *F. V.* Ferréol Vellard. L'homme qui a bâti la digue. Cette clé-là, tu l'as vue une fois, il y a vingt ans, pendue à la ceinture du vieux Ferréol, à une procession.",
      "Contre la clé, une lettre cachetée de vert.",
    ],
    choices: [
      { label: "Casser le cachet", to: "O_lettre_lue", fx: { flag: "odon:lettre" } },
      { label: "Refaire le nœud, et remonter", to: "O_bureau" },
    ] },
  O_lettre_lue: { act: A, title: "Cire verte", place: "hauteville",
    text: [
      "L'écriture est grande, penchée, tremblée sur les fins de mots.",
      "*Trois heures, la vanne de fond. Il faut quatre bras. Qu'Ilde fasse lever les Foulons à deux heures.*",
      "Tu relis. Les Foulons. Faire lever les Foulons. La rue du Lavoir, la troisième maison après la fontaine.",
      "Tu replies la lettre. Le cachet refuse de se recoller. Tu remontes les dernières marches avec le paquet sous le bras et la lettre dans ta poche de poitrine, contre l'insigne.",
    ],
    choices: [{ label: "Entrer chez le capitaine", to: "O_bureau" }] },
  O_lettre_dite: { act: A, title: "Ce que dit la lettre", place: "hauteville", fx: { time: 0.25 },
    text: [
      "« Capitaine. La lettre qui était avec la clé, je l'ai lue. Elle dit d'ouvrir la vanne de fond à trois heures, et de faire lever les Foulons à deux heures. »",
      "Rambert te regarde un moment. Puis il rit, d'un rire bref, sans gaieté.",
      "« Les Foulons ont les pieds dans l'eau depuis que la ville existe, Brasseur. Un vieux fou mourant veut vider son lac sur les teinturiers la veille du vote. Le Conseil l'en empêche. Voilà ce que tu as lu. » Il tend la main. « La lettre. »",
      "Tu la lui donnes. Il la tient au-dessus de la chandelle jusqu'à ce que la cire verte coule sur ses doigts.",
      "« Va dormir. »",
    ],
    choices: [
      { label: "Rentrer chez toi", to: "O_chambre" },
      { label: "Descendre aux Foulons chercher Nine", to: "O_nine_rue" },
    ] },

  // ------------------------------------------------------------------ the tower
  O_anicet: { act: A, title: "Le garçon de vannes", place: "hauteville", fx: { learn: "veine", time: 0.25 },
    text: [
      "Dans la rue des Cordiers, Anicet s'arrête pour vomir contre un mur, puis il se redresse, plus droit qu'avant.",
      "« J'avais quinze ans, dit-il. Garçon de vannes, chez le vieux Ferréol. On a fini la digue au printemps de mes seize. Le jour de la fête, le vieux m'a pris par l'épaule et il m'a emmené dans la galerie basse. Il m'a montré un joint, au pied du mur, côté vallée. Il pleurait déjà, ce joint-là. Il m'a dit : *Mon fils et le fils de mon fils devront le surveiller. Un jour, il faudra vider le lac pour le refaire. Ce jour-là, ils diront que c'est trop cher.* »",
      "Il crache. « Soixante ans que je sonne pour les autres. Je n'ai jamais sonné pour ça. »",
    ],
    choices: [{ label: "Monter à la tour", to: "O_tour", via: "anicet" }] },
  O_lunette: { act: A, title: "La lunette du guetteur", place: "hauteville", fx: { learn: "signal", flag: "odon:lunette" },
    text: [
      "Dans la chambre des cloches, la lunette du guetteur est vissée sur son trépied, braquée sur la route de Lyre. Tu la tournes vers la digue. Le cuivre est froid. Tu cherches longtemps dans le noir avant de trouver.",
      "La Maison des Vannes. Trois lanternes posées côte à côte sur l'appui de la fenêtre du haut, à égale distance, bien alignées. On les a placées là pour être vues.",
      "Plus bas, au pied du mur, une lueur bouge sur l'eau du canal. Une barque, ou une lanterne sourde.",
      "Dans l'escalier, les bottes montent toujours.",
    ],
    choices: [
      { label: "Sonner", to: "O_tocsin" },
      { label: "Barrer la trappe avec ta hallebarde, puis sonner", test: { dom: "combat", diff: 0, label: "Tenir la trappe" }, win: { to: "O_tocsin", via: "trappe" }, lose: { to: "O_tocsin", via: "lutte" } },
    ] },

  // ------------------------------------------------------------------ the rue du Lavoir
  O_portes: { act: A, title: "Onze portes", place: "foulons", fx: { time: 0.5 },
    text: [
      "Tu frappes avec le pommeau de ton épée. Une porte, deux portes. Des volets s'ouvrent, des têtes en bonnet de nuit. « C'est le sergent Brasseur ! » On te connaît. On te croit à moitié.",
      "À la septième porte, la veuve Gosse te répond à travers le bois, sans ouvrir. « Je suis née dans cette maison, sergent. Mon père y est mort, mon homme y est mort. Si l'eau vient, elle me trouvera dans mon fauteuil. Allez réveiller les jeunes. »",
      { if: { has: "colin:mere" }, text: "Sur la place du Lavoir, la mère de Colin range son étal à beignets sous l'auvent. Tu lui dis de monter à Saint-Rieul. Elle te demande où est son fils. « Sur le pont. Il monte après vous. » Tu mens. Elle monte quand même." },
    ],
    choices: [
      { label: "Enfoncer la porte de la veuve Gosse", test: { dom: "combat", diff: -10, label: "Enfoncer la porte" }, win: { to: "O_nine", via: "rue", fx: { flag: "gosse:sauvee" } }, lose: { to: "O_nine", via: "rue" } },
      { label: "La laisser, et passer à la porte suivante", to: "O_nine", via: "rue" },
    ] },
  O_cloche_nuit: { act: A, title: "La cloche du lavoir", place: "foulons", fx: { time: 0.5 },
    text: [
      "La cloche du lavoir pend sous l'auvent, au pilier du milieu. On la sonne le lundi à l'aube pour la grande lessive, et quand un enfant tombe à l'eau.",
      "Tu tires sur la corde. Elle est graisseuse, froide. La cloche est petite, aigre ; elle crie plus qu'elle ne sonne. Tu tires à coups pressés, à coups courts.",
      "Les volets s'ouvrent un à un. Des gens sortent, en chemise, une lanterne, un enfant sur la hanche. Ils voient le sergent du guet pendu à la corde de leur cloche, et ils se taisent d'un coup.",
      "« Montez ! cries-tu. Tous à Saint-Rieul ! Prenez les couvertures, laissez le reste ! L'eau descend du lac cette nuit ! »",
      "Nine sort la dernière, avec Guillot, le berceau dans les bras. Elle te regarde. Elle commence à crier les noms des maisons, une par une, de sa voix de lavoir.",
    ],
    choices: [{ label: "Monter avec eux par la Côte", to: "O_cloche" }] },
  O_cloche: { act: A, title: "Le parvis", place: "hauteville", end: true, fx: { time: 4 },
    text: [
      "À minuit et demi, le quartier des Foulons est sur le parvis de Saint-Rieul. Huit cents personnes dans le froid, sous le porche, dans l'église ouverte par le curé en chemise. On a monté les vieux sur des portes. On a monté les poules.",
      "On t'insulte un peu. On te demande ce que tu sais. Tu dis : la digue. On te croit à moitié. Tout le monde reste.",
      "À quatre heures, la pluie. À cinq heures et demie, la tour du guet tremble. Un grondement descend la vallée, énorme, continu. La Sorge se soulève entre ses rives comme une bête qui se lève. La vague passe sur les Foulons. Quand elle est passée, il reste des toits, et le clocher de Saint-Blaise.",
      "Sur le parvis, huit cents personnes regardent l'endroit où étaient leurs maisons. D'abord le silence. Puis une femme se met à pleurer, et toutes les autres.",
      { if: { has: "gosse:sauvee" }, text: "La veuve Gosse est assise sur les marches, dans son fauteuil, que deux teinturiers ont monté avec elle dedans. Elle se tait. Elle te tient la main." },
      { if: { not: { has: "gosse:sauvee" } }, text: "Il manque des gens. La veuve Gosse, du bout de la rue du Lavoir. Un vieux foulon qui dormait près de sa porte. Ceux qui ont tenu la cloche pour une farce." },
      "La digue a cédé. La clé est restée en bas, dans la rue Haute. Tu as fait lever les vivants, et le lac a pris tout le reste : les maisons, les métiers, les cuves, les draps.",
      "À huit heures, le Conseil se réunit dans une ville sans quartier bas. Quelqu'un demande qui a fait sonner la cloche du lavoir à minuit, et pourquoi. On cherche le sergent Brasseur. Pour le remercier, ou pour lui demander ce qu'il savait.",
    ] },
};
