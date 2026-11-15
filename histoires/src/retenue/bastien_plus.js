// Bastien, the scenes added: the banc remembered, a letter to his father, the rider of the guard on the road of the
// Digue (a new ending: caught), the col de la Grève where he turns back, and the Foulons he wakes alone in the rain
// (a new ending).
var A = "I";
module.exports = {
  B_souvenir: { act: A, title: "Le banc", place: "hauteville", fx: { flag: "bastien:souvenir" },
    text: [
      "Tu fermes les yeux, au milieu du bruit, et tu es de nouveau sur le banc de la pièce d'à côté, à sept heures, la joue sur ton bras.",
      "Tu as entendu le pas d'Ilde dans l'escalier, son souffle, ses genoux. Tu as entendu ton père dire *la veine*, *deux doigts*, *avant le jour*. Tu as entendu la toile cirée qu'on pose sur la table. Tu as entendu *trois lanternes*.",
      "Puis la porte s'est ouverte. Ilde t'a regardé dormir. Tu as gardé les yeux fermés et la bouche entrouverte, comme au Chat Ferré quand le patron passe avec l'ardoise. Elle a refermé.",
      "C'est à ce moment que tu as su ce que tu allais faire. Avant, tu l'ignorais. Tu te le dis, en tout cas. Tu te le diras longtemps.",
    ],
    choices: [{ label: "Rouvrir les yeux sur la salle", back: "B_chat" }] },
  B_lettre: { act: A, title: "Une lettre", place: "hauteville", fx: { flag: "bastien:lettre", time: 0.5 },
    text: [
      "Tu demandes du papier à maître Lucas. Il t'en donne une feuille de son livre de comptes, réglée en colonnes. Tu écris dans la colonne des sommes, parce que c'est la plus large.",
      "*Père. Je t'ai entendu à sept heures. J'ai tout dit à Corlay pour quatre cents écus. Ils vont arrêter Ilde ou celui qu'elle enverra. Je ne te demande pas pardon. Je voulais que tu le saches par moi.*",
      "Tu plies la feuille en quatre. Tu donnes ton dernier écu au garçon qui rince les verres, un gamin des Foulons, pour qu'il la porte cette nuit à la Maison des Vannes. Il part en courant, ravi, l'écu serré dans le poing.",
      "Tu as écrit la vérité, et tu as fait porter ta lettre par un autre. Tu viens de faire, en petit, exactement ce qu'a fait Ilde.",
    ],
    choices: [{ label: "Revenir à ta table", back: "B_chat" }] },

  // ------------------------------------------------------------------ the rider on the road
  B_poursuite: { act: A, title: "Le cavalier", place: "berge", fx: { time: 0.25 },
    text: [
      "À la troisième borne, derrière toi, des fers sur l'empierrement. Un cheval au galop, une lanterne sourde qui balaie les fossés. Corlay a envoyé quelqu'un, ou Rambert, ou les deux.",
      "Sur le bas-côté, une charrette de charbon monte au pas vers les forges : deux mulets, une bâche. Le charretier, un grand gars voûté, s'est retourné au bruit du galop. À droite de la route, les prés descendent vers la Sorge, noirs et mouillés.",
    ],
    choices: [
      { label: "Supplier le charretier de te cacher sous sa bâche", test: { dom: "social", diff: 0, label: "Convaincre le charretier" }, win: { to: "B_charrette" }, lose: { to: "B_rattrape_nuit" } },
      { label: "Te jeter dans les prés, vers la Sorge", test: { dom: "nature", diff: -10, label: "Courir dans le noir" }, win: { to: "B_champs" }, lose: { to: "B_rattrape_nuit" } },
    ] },
  B_charrette: { act: A, title: "Sous la bâche", place: "berge", fx: { time: 0.5 },
    text: [
      "Le charretier te regarde, regarde la clé dans ta main, regarde le cavalier qui arrive. « Saute », dit-il. Tu plonges sous la bâche, dans le charbon jusqu'aux coudes.",
      "Le cheval s'arrête à côté de la charrette. Une voix jeune : « Tu as vu passer quelqu'un, charretier ? Un monsieur, en habit ? » Le charretier crache. « Un monsieur en habit, sur la route des forges, à onze heures du soir ? Si j'en vois un, je te le garde. » Le cavalier repart au galop vers la digue.",
      "Le charretier s'appelle Basile. Il te laisse descendre à la neuvième borne. Tu as la figure noire comme lui. « Je ne t'ai pas vu, dit-il. Et toi tu n'as pas vu mon charbon. »",
    ],
    choices: [{ label: "Courir jusqu'à la digue", to: "B_route_fin", via: "noir" }] },
  B_champs: { act: A, title: "Les prés de la Sorge", place: "berge", fx: { time: 0.75 },
    text: [
      "Tu sautes le fossé. Les prés sont gorgés d'eau ; tu enfonces jusqu'aux chevilles à chaque pas. Derrière toi, la lanterne s'arrête sur la route, balaie le pré, passe sur toi sans te voir, et repart.",
      "Tu rejoins la berge de la Sorge et tu la remontes dans le noir, à tâtons, en te tenant aux saules. Tu as perdu un soulier. La clé, tu la tiens toujours.",
    ],
    choices: [{ label: "Remonter jusqu'à la digue", to: "B_route_fin", via: "pres" }] },
  B_rattrape_nuit: { act: A, title: "La longe", place: "berge", fx: { drop: "cle_vannes", time: 1 },
    text: [
      "Le cheval te coupe la route. Le cavalier saute à terre : un grand garçon blond, le guet neuf de la porte Saint-Rieul. Il te prend la clé des mains sans te frapper. Il s'excuse.",
      "« Monsieur Corlay a dit de vous ramener, monsieur Vellard. Avec la clé. Il a dit : sans lui faire de mal. »",
      "Il te lie les poignets avec la longe de son cheval, et il te fait marcher devant lui, vers la ville.",
    ],
    choices: [{ label: "Marcher", to: "B_rattrape" }] },
  B_rattrape: { act: A, title: "La chambre verte", place: "hauteville", end: true, fx: { time: 4 },
    text: [
      "Corlay refuse de te recevoir. C'est Pernelle Daguet qui t'ouvre une chambre d'ami au deuxième étage, tendue de drap vert, et qui t'y enferme. Elle te laisse une bougie et une carafe d'eau. Au moment de tourner la clé, elle te regarde un moment, comme si elle allait dire quelque chose.",
      "« Vous avez essayé, dit-elle. C'est plus que les autres. »",
      "De la fenêtre de la chambre verte, on voit la vallée. Tu restes debout devant toute la nuit. Une lanterne brille à la fenêtre de la Maison des Vannes. Une seule. Tu sais combien il en faudrait.",
      "À quatre heures, la pluie. La lanterne, là-bas, tremble dans la pluie. À cinq heures et demie, elle s'éteint d'un coup. Puis le grondement monte de la vallée, et la vitre vibre contre ton front.",
      "À huit heures, on frappe. Pernelle, avec ton manteau, propre et brossé. Elle a les yeux rouges. « Monsieur vous attend à l'Hôtel. Il voudrait que vous soyez là quand il parlera de votre père. »",
      "Ce que tu diras dans cette salle, et ce que dira la digue d'ici là, il faudra d'autres yeux pour le voir.",
    ] },

  // ------------------------------------------------------------------ the col, turning back
  B_col: { act: A, title: "Le col de la Grève", place: "berge",
    text: [
      "La lanterne de la Maison des Vannes, là-bas, au bout du lac, est toute seule. Ton père a dit trois.",
      "Derrière toi, la route de Lyre descend dans le noir vers la diligence, Saint-Aubry, un autre nom. Devant toi, toute la vallée, et le quartier des Foulons au bord de l'eau, noir, endormi, toutes lumières éteintes.",
      "Tu as vingt écus et deux jambes.",
    ],
    choices: [
      { label: "Reprendre la route de Lyre", to: "B_fuite" },
      { label: "Redescendre en courant vers les Foulons", to: "B_retour", fx: { time: 1.5 } },
    ] },
  B_retour: { act: A, title: "Les Foulons, à quatre heures", place: "foulons", fx: { time: 0.5 },
    text: [
      "Tu redescends le col en courant, en tombant, en te relevant. Quand tu arrives aux premières maisons des Foulons, la pluie commence. Saint-Rieul sonne quatre heures.",
      "Tu frappes à la première porte. Une femme ouvre, voit un jeune homme en habit déchiré, couvert de boue, qui crie que la digue va céder. Elle te reconnaît. Tout le monde te connaît : le fils Vellard, l'ivrogne du Chat Ferré. Elle te claque la porte au nez.",
      "Tu frappes à la deuxième. Même chose. À la troisième, on te jette un seau d'eau.",
    ],
    choices: [
      { label: "Courir au lavoir, et sonner la cloche", to: "B_foulons", via: "cloche" },
      { label: "Crier ton nom, et celui de ton père, à chaque porte", test: { dom: "social", diff: -10, label: "Être cru" }, win: { to: "B_foulons", via: "nom" }, lose: { to: "B_foulons", via: "cloche" } },
    ] },
  B_foulons: { act: A, title: "Le fils de l'ivrogne", place: "foulons", end: true, fx: { time: 3 },
    text: [
      { via: "cloche", text: "La cloche du lavoir est petite et aigre. Tu tires dessus comme un fou. Les volets s'ouvrent. On voit le fils Vellard pendu à la corde, dans la pluie, et quelqu'un dit : « Son père garde la digue. » Ce mot-là fait lever les gens." },
      { via: "nom", text: "« Je suis Bastien Vellard ! Mon père garde la digue ! Il dit qu'elle cède cette nuit ! » Au bout de la quatrième porte, quelqu'un te croit. Au bout de la dixième, c'est la rue entière qui frappe avec toi." },
      "À cinq heures, une partie du quartier monte la Côte, sous la pluie, avec les enfants dans des couvertures. L'autre partie reste aux fenêtres, à regarder ce fils d'ivrogne qui crie dans la rue.",
      "À cinq heures et demie, la digue cède. Le grondement descend la vallée, la Sorge se soulève, et la vague passe sur les Foulons.",
      "Du haut de la Côte, trempé, tu regardes l'endroit où étaient les maisons. Les gens autour de toi se taisent. Ils sont vivants. Certains te touchent l'épaule en passant, sans un mot, puis s'écartent.",
      "Tu as fait lever un quartier. Tu l'as fait trop tard pour l'autre moitié. Et au bout de la vallée, là où était la digue, toute lumière s'est éteinte.",
    ] },
};
