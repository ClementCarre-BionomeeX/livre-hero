// Acte I · La route : le départ d'Orbec, la halte du gué, la nuit, la halte du col, la descente vers Vèze.
module.exports = {
  A_depart: { act: "I", title: "Le pli de la margrave", fx: { meet: "margrave" },
    text: [
      "La salle d'audience du château d'Orbec sent la cire froide et le chien mouillé. La margrave t'y reçoit debout, parce qu'une femme assise accorde du temps, et qu'elle garde le sien pour elle.",
      "« Le conseil de Vèze vote après-demain au soir. Douze voix, et il m'en faut sept. » Elle te tend un pli cacheté de rouge : la tour et les trois clés d'Orbec. « Ceci les fera tomber du bon côté. Tu le remets au prévôt Aubertin en main propre, dans la salle du conseil, devant témoins. À lui seul. Son clerc, sa femme et son confesseur attendront, le confesseur surtout, qui lui répète tout. »",
      "Elle ajoute six sous pour la route, ce qui donne une idée de l'estime où elle tient ses courriers, et deux jours de pain. Puis elle te jauge comme un maquignon jauge un cheval avant la foire : « Il y a des gens, dans cette marche, qui paieraient cher pour lire ce pli avant le prévôt. Tu en croiseras peut-être. »",
      "La route de Vèze passe par le gué de la Saulne, puis par le col des Corneilles. Deux jours, si le ciel se tient.",
    ],
    choices: [{ label: "Glisser le pli contre ta poitrine et prendre la route", to: "H1_gue" }] },

  H1_gue: { act: "I", title: "Le gué de la Saulne", halte: { id: "gue", nom: "le gué de la Saulne", suite: "T1_nuit" },
    text: [
      "Tu arrives au gué à l'heure où l'eau devient plus sombre que le ciel. La Saulne a gonflé des pluies de la semaine ; elle roule, jaune et lourde, entre deux rangées de pieux qui marquent le passage, et sous son grondement on entend le choc patient des pierres qu'elle emporte vers l'aval, une à une, comme un compte qu'on égrène. Chaque pieu porte un anneau de fer, et chaque anneau une traînée de rouille qui descend vers l'eau.",
      "Sur l'autre rive, une cabane de passeur, une barque tirée au sec, une lanterne. Sur ta rive, la route, la boue, et le soir qui tombe.",
    ] },

  T1_nuit: { act: "I", title: "La nuit sur la route",
    text: [
      "Le gué est derrière toi. La route monte entre les châtaigniers, et la nuit monte avec elle ; tu dors deux heures contre un muret, le pli serré sous ta veste, et tu repars avant l'aube parce que le froid a décidé pour toi.",
      { fil: "rival", text: "Vers minuit, un cheval passe au trot sur la route, en contrebas. Tu reconnais le pas : un cavalier pressé, sur une bête ferrée de neuf." },
      { fil: "dette", text: "Tu penses à Gilles Tranchemer et à son carnet. Une dette envers un passeur se rembourse rarement en argent, et toujours au moment le plus mal choisi." },
      { fil: "secret", text: "À la première lueur, tu regardes encore le cachet. Deux couches de cire, l'une sur l'autre. La maison d'Orbec ? Quelqu'un d'autre ? Le pli garde son secret, et tu le portes quand même." },
      "Au matin, le col des Corneilles se découpe au-dessus de toi, blanc de givre, et les oiseaux qui lui donnent son nom tournent déjà autour de la croix de pierre.",
    ],
    choices: [{ label: "Monter vers le col", to: "H2_col" }] },

  H2_col: { act: "I", title: "Le col des Corneilles", halte: { id: "col", nom: "le col des Corneilles", suite: "T2_descente" },
    text: [
      "Le col est une selle de rocaille entre deux sommets chauves. Une chapelle sans toit y tient encore debout par habitude ; à côté, la croix de pierre, et autour de la croix les corneilles, qui se querellent avec l'acharnement d'un chapitre de chanoines devant une succession. Le vent arrive par rafales, chargé de grésil, et il cherche l'ouverture de chaque vêtement avec une obstination de douanier.",
      "De l'autre côté, la route plonge vers la vallée de Vèze. On devine la ville, au fond, sous une fumée bleue.",
    ] },

  T2_descente: { act: "I", title: "La descente",
    text: [
      "La descente prend la journée. Le grésil devient pluie, la pluie devient bruine, et vers le soir les murs de Vèze sortent de la brume, avec leurs tours carrées et la flèche de la maison du conseil.",
      { fil: "rival", text: "Devant la porte, un cheval gris attend, attaché à un anneau, la robe encore fumante." },
      { if: { clock: "retard", min: 1 }, text: "Le soleil est déjà bas. Tu as perdu du temps sur la route, et la porte de Vèze ferme au dernier coup de vêpres." },
      "La file des charrettes s'étire jusqu'au pont-levis. Les gardes fouillent les ballots avec la lenteur de gens payés à l'heure.",
    ],
    choices: [{ label: "Prendre ta place dans la file", to: "H3_porte" }] },
};
