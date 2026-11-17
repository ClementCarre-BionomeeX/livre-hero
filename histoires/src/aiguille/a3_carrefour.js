// L'Île Folle-Aiguille · act III, the crossroads of the voyage. Three legs, each opened by a choice of whom to follow:
// III.1 Morlenc to Brisegrève (the child or the doctor), III.2 the Sargasso calms with the Red Reef and the Shaper's
// islet (the child, the doctor, or in a second reading the cook), III.3 Lannoz and the landfall (the child or the
// doctor). The branches set the quiet defaults of whoever was not followed. The four ports of call are declared here;
// each one's « Lever l'ancre » leads to a branch that sends the reader back into the chapter of the one followed.
function played(ch, who) { return { has: "regard:" + ch + "=" + who }; }
module.exports = {
  passages: {
    C3: { act: "III", title: "La route du Couchant", place: "mer_couchant", hub: true, noLead: true, backName: "la route du Couchant", ambiance: "mer",
      text: [
        { first: true, text: "La Cormorane descend vers le sud par un vent de nord-est qui ne mollit pas de quatre jours. Le ciel d'hiver reste bas, couleur de plomb mouillé ; la mer, en dessous, est d'un vert si sombre qu'on la dirait creusée dans une ardoise. Les côtes du Ponant ont disparu le premier soir. Il n'y a plus, du matin au soir, que l'horizon, qui recule à mesure qu'on avance, avec une patience de créancier." },
        { first: true, text: "À bord, trente et quelques personnes apprennent à vivre ensemble dans un espace où l'on ne tiendrait pas, à terre, une noce de campagne. On dort en hamacs, épaule contre épaule, dans une odeur de goudron, de laine mouillée et de cale. On mange à heures fixes, par plats de huit. On veille par quarts de quatre heures, tribord et bâbord, et la cloche du bord découpe les jours en morceaux égaux qui ont tous le même goût de biscuit." },
        { first: true, text: "Dix jours jusqu'à Brisegrève, où l'on fera de l'eau. Ces dix jours, tu les passeras avec l'une ou l'autre." },
        { again: true, text: "Le navire file sa route sous le ciel bas. La cloche sonne les quarts." },
      ],
      choices: [
        { label: "{joueur} · jusqu'à Brisegrève", fx: { team: "mousse", set: { "regard:III.1": "mousse" } }, to: "A3m_debut", big: true },
        { label: "Victorine Davrigny · jusqu'à Brisegrève", fx: { team: "victorine", set: { "regard:III.1": "victorine" } }, to: "A3v_debut", big: true },
      ] },
    C3_fin: { act: "III", title: "Brisegrève", branch: [
      { if: played("III.1", "mousse"), to: "C3_fin_v" },
      { fx: { flag: "m3:defaut" }, to: "C3_fin_v" },
    ] },
    C3_fin_v: { act: "III", title: "Brisegrève", branch: [
      { if: played("III.1", "victorine"), to: "C3_recit" },
      { fx: { flag: "v3:defaut" }, to: "C3_recit" },
    ] },
    C3_recit: { act: "III", title: "Brisegrève", place: "mer_couchant", ambiance: "mer",
      text: [
        "Brisegrève s'efface derrière la poupe, d'abord le fort, puis la roche, puis la fumée du fort, qui reste longtemps debout sur la mer comme une plume plantée dans un encrier.",
        { if: { has: "m3:defaut" }, text: "{joueur} a passé ces dix jours à apprendre que la mer ne se laisse pas apprendre : à vomir par-dessus la lisse, puis à ne plus vomir, à grimper dans la mâture sous les jurons de Gobert, et le soir, à la cambuse, à éplucher des oignons en écoutant chanter le maître-coq." },
        { if: { has: "v3:defaut" }, text: "Victorine a passé ces dix jours à soigner trois mains écrasées, une dent, un mal de mer baronnial et une fièvre qui ne voulait rien dire, et à Brisegrève, elle a dîné chez le gouverneur, qui l'a trouvée charmante tant qu'elle s'est tue." },
        { if: { has: "brousse:abord" }, text: "Sur le gaillard d'avant, un homme maigre aux cheveux blancs se tient face au vent, les yeux fermés, et respire. Il respire comme on boit après une longue soif. Les matelots le regardent de loin, sans oser l'approcher." },
        "Au sud de Brisegrève commence une autre mer. Le vent tombe un peu chaque jour. L'eau change de couleur, passe du vert au bleu, du bleu à un bleu si profond qu'il en devient violet. Des herbes flottantes apparaissent, jaunes, en longues traînées, puis en îles, puis en prairies. La mer des Sargues.",
      ],
      choices: [{ label: "La mer des Sargues", to: "C3b", big: true }] },

    C3b: { act: "III", title: "La mer des Sargues", place: "sargues", hub: true, noLead: true, backName: "la mer des Sargues", ambiance: "mer",
      text: [
        { first: true, text: "On entre dans les Sargues comme on entre dans une maison abandonnée : en baissant la voix. Le vent meurt. La houle s'aplatit en longues ondulations huileuses où le soleil se brise en mille éclats, et sur cette eau sans mouvement s'étendent à perte de vue les herbes jaunes, entrelacées, épaisses, vivantes de crabes minuscules et de petits poissons transparents. La Cormorane les fend lentement, à deux nœuds, à un nœud, à rien. Les voiles pendent. Le soleil tape. Le brai fond entre les planches du pont et colle aux pieds nus." },
        { first: true, text: "Les marins appellent ces semaines « la marmite ». On y attend le vent en cuisant à petit feu, et l'on y cuit autre chose que la viande : les rancunes, les dettes, les idées. Deux escales coupent la route : l'Écueil-Rouge, un récif où personne ne va, et un îlot boisé où l'on dit qu'il y a une source." },
        { first: true, text: "Ces semaines-là, tu les vivras avec l'un ou l'autre." },
        { again: true, text: "Les herbes jaunes, l'eau immobile, le soleil. Le navire attend le vent." },
      ],
      choices: [
        { label: "{joueur} · la marmite", fx: { team: "mousse", set: { "regard:III.2": "mousse" } }, to: "A3n_debut", big: true },
        { label: "Victorine Davrigny · la marmite", fx: { team: "victorine", set: { "regard:III.2": "victorine" } }, to: "A3w_debut", big: true },
        { label: "Lucien Fargue · la marmite", second: true, fx: { team: "fargue", set: { "regard:III.2": "fargue" } }, to: "A3f_debut", big: true },
      ] },
    // The Red Reef is left: back into the chapter of whoever is followed.
    A3_ecueil_leve: { act: "III", title: "L'Écueil-Rouge", branch: [
      { if: played("III.2", "victorine"), to: "A3w_apres_ecueil" },
      { to: "A3n_apres_ecueil" },
    ] },
    C3b_fin: { act: "III", title: "La mer des Sargues", branch: [
      { if: played("III.2", "mousse"), to: "C3b_fin_v" },
      { fx: { flag: "m3b:defaut" }, to: "C3b_fin_v" },
    ] },
    // The doctor not followed: the captain finds the pistol herself; at least a doubt reaches the stern.
    C3b_fin_v: { act: "III", title: "La mer des Sargues", branch: [
      { if: played("III.2", "victorine"), to: "C3b_fin_x" },
      { fx: { flag: ["v3b:defaut", "complot:soupcon"] }, to: "C3b_fin_x" },
    ] },
    // The invisible passenger, if nobody settled his fate, is caught by the crew in the flour.
    C3b_fin_x: { act: "III", title: "La mer des Sargues", branch: [
      { if: { any: [{ has: "xi:protege" }, { has: "xi:livre" }, { has: "xi:mort" }] }, to: "C3b_recit" },
      { if: { has: "xi:signes" }, fx: { flag: "xi:defaut" }, to: "C3b_recit" },
      { to: "C3b_recit" },
    ] },
    C3b_recit: { act: "III", title: "La mer des Sargues", place: "sargues", ambiance: "mer",
      text: [
        "Le vent revient un matin, d'un coup, comme un homme qui rentre après une longue absence et fait claquer la porte. Les voiles se gonflent. Le navire tressaille, gémit de toutes ses membrures, et s'arrache aux herbes jaunes avec un bruit de tissu qu'on déchire. L'équipage entier pousse un cri.",
        { if: { has: "m3b:defaut" }, text: "{joueur} a passé la marmite à la cambuse, à la mâture et dans l'eau tiède de la cale, et a vu de l'Écueil-Rouge et de l'îlot ce qu'on en voit depuis le pont : une fumée, un rocher rouge, des arbres." },
        { if: { has: "v3b:defaut" }, text: "Victorine a passé la marmite à soigner les premières gencives qui saignent. Le dernier soir des calmes, la capitaine Ribaud est venue la trouver à l'infirmerie, très pâle, avec un pistolet chargé trouvé dans le hamac d'un homme qui n'a aucune raison d'en avoir un. « Je ne vous demande rien, docteur, a-t-elle dit. Je voulais que quelqu'un d'autre l'ait vu. »" },
        { if: { has: "xi:defaut" }, text: "Le dernier jour des calmes, les matelots ont trouvé dans la farine de la cambuse les empreintes de deux pieds nus qui n'appartenaient à personne, et le soir même, à coups de seaux d'eau et de sacs de farine jetés à la volée, ils ont fait apparaître un homme. Un homme blanc de farine, nu, maigre, qui hurlait. On l'a enfermé dans la soute à voiles. Le lendemain, la soute était vide, et la chaloupe de rechange, qui pendait à la poupe, avait disparu dans la nuit, avec un baril d'eau." },
        "Au sud, le ciel change. Il devient d'un gris sale, chargé, et l'air sent la tourbe. Lannoz est à quatre jours.",
      ],
      choices: [{ label: "Vers Lannoz", to: "C3c", big: true }] },

    C3c: { act: "III", title: "Lannoz", place: "mer_lannoz", hub: true, noLead: true, backName: "la route de Lannoz", ambiance: "mer",
      text: [
        { first: true, text: "Lannoz monte de la mer un matin de bruine, une longue île basse, brune, pelée, que le vent a peignée dans le même sens depuis la création du monde. Pas un arbre. Des landes de bruyère morte, des tourbières qui luisent comme des plaques d'étain, des collines rondes où paissent des moutons noirs, et sur la côte, au fond d'une anse, un village de pierres sèches qui fume par toutes ses cheminées sans parvenir à se réchauffer." },
        { first: true, text: "Dernière aiguade avant Folle-Aiguille. Dans l'anse, un autre navire est déjà à l'ancre : un brick à coque jaunâtre." },
        { first: true, text: "Ces derniers jours, tu les vivras avec l'une ou l'autre." },
        { again: true, text: "La bruine, les landes brunes, l'anse grise." },
      ],
      choices: [
        { label: "{joueur} · Lannoz", fx: { team: "mousse", set: { "regard:III.3": "mousse" } }, to: "A3o_debut", big: true },
        { label: "Victorine Davrigny · Lannoz", fx: { team: "victorine", set: { "regard:III.3": "victorine" } }, to: "A3x_debut", big: true },
      ] },
    // Lannoz is left: the council at the stern, seen by whoever is followed.
    A3_lannoz_leve: { act: "III", title: "Lannoz", branch: [
      { if: played("III.3", "victorine"), to: "A3x_conseil" },
      { to: "A3o_conseil" },
    ] },
    C3c_fin: { act: "III", title: "Lannoz", branch: [
      { if: played("III.3", "mousse"), to: "C3c_fin_v" },
      { fx: { flag: "m3c:defaut" }, to: "C3c_fin_v" },
    ] },
    C3c_fin_v: { act: "III", title: "Lannoz", branch: [
      { if: played("III.3", "victorine"), to: "A3_terre" },
      { fx: { flag: "v3c:defaut" }, to: "A3_terre" },
    ] },
    A3_terre: { act: "III", title: "Terre", place: "mer_couchant", ambiance: "mer",
      text: [
        "Le quarante-troisième jour après Morlenc, à l'aube, la vigie crie terre.",
        "Elle est là, au sud-ouest, encore à demi noyée dans la brume du matin, et elle grandit à mesure que le soleil la dégage, comme une chose qu'on sort lentement de l'eau. Une île. Un croissant épais, vert sombre, presque noir, hérissé de forêt jusqu'au bord de la mer. Au milieu, un plateau à falaises droites, coupé net comme une table, qui porte sur son dessus une autre forêt, plus claire, suspendue dans le ciel. Au nord, des collines rousses, trouées. À l'ouest, une dent de roche noire qui pointe vers le ciel.",
        { if: { has: "m3c:defaut" }, text: "{joueur} a vu Lannoz depuis la lisse : une anse grise, un brick jaune, des moutons noirs ; et la nuit du départ, l'enfant a remarqué que le maître-coq ne chantait plus." },
        { if: { has: "v3c:defaut" }, text: "Victorine a passé Lannoz à l'infirmerie, et la dernière nuit à l'arrière, dans la grand-chambre, autour d'une table où l'on a parlé à voix basse jusqu'au matin." },
        "Alors la timonière pousse un cri bref. Tout le monde se tourne vers la barre. Annick Lemerle a lâché la roue et regarde l'habitacle, la bouche ouverte.",
        "Dans la boîte de cuivre, sous la vitre, l'aiguille du compas tourne. Elle tourne lentement, d'un mouvement régulier, comme une girouette par un vent qui change ; elle s'arrête, frissonne, repart dans l'autre sens. Le second compas, celui de la grand-chambre, fait la même chose. Le baron Clavières, en robe de chambre sur le pont, regarde l'aiguille, puis l'île, et sourit.",
        "« Folle-Aiguille », dit-il.",
        "La Cormorane entre dans la baie à midi, à la sonde, sous huniers seuls, et mouille par six brasses dans une eau verte et lisse comme une eau de citerne, au fond d'une anse cernée de forêt. Pas un oiseau ne chante. L'air est chaud, mouillé, épais, et sent la feuille pourrie et la fleur. Sur un éperon, au-dessus de l'anse, des ruines grises percent la verdure : un clocher sans toit, des murs, une porte.",
        "On appelle l'endroit l'Anse-Morte. Personne ne demande pourquoi.",
      ],
      choices: [{ label: "Folle-Aiguille", to: "C4", big: true }] },
  },
  extras: {
    escales: {
      brisegreve: { name: "Brisegrève", at: "brisegreve", quests: ["XM"], depart: { label: "Lever l'ancre pour le sud", to: "C3_fin" }, desc: "L'île-forteresse, sa prison d'État et son aiguade." },
      ecueil: { name: "L'Écueil-Rouge", at: "ecueil_rouge", quests: ["XP"], depart: { label: "Rembarquer et quitter l'Écueil", to: "A3_ecueil_leve" }, desc: "Un récif de lave rouge où est tombée une pierre du ciel." },
      ilot: { name: "L'îlot du Façonneur", at: "ilot", quests: ["XF"], depart: { label: "Lever l'ancre et quitter l'îlot", to: "C3b_fin" }, desc: "Un îlot boisé, une source, une maison blanche." },
      lannoz: { name: "Lannoz", at: "lannoz", quests: ["XE"], depart: { label: "Lever l'ancre pour Folle-Aiguille", to: "A3_lannoz_leve" }, desc: "La dernière aiguade : landes, tourbières, moutons noirs." },
    },
    places: {
      mer_couchant: { ambiance: "mer", name: "La route du Couchant", map: "couchant", region: "couchant", x: 50, y: 15, desc: "La haute mer, au sud de Morlenc." },
      brisegreve: { ambiance: "mer", name: "Brisegrève", map: "couchant", region: "couchant", x: 44, y: 30, desc: "Une île-forteresse de granit : le fort, la prison d'État, le bourg des soldats, l'aiguade au pied de la roche." },
      sargues: { ambiance: "mer", name: "La mer des Sargues", map: "couchant", region: "sargues", x: 50, y: 50, desc: "Des calmes, des herbes jaunes à perte de vue, une chaleur de four." },
      ecueil_rouge: { ambiance: "nature", name: "L'Écueil-Rouge", map: "couchant", region: "sargues", x: 40, y: 54, desc: "Un récif de lave rougeâtre, un cratère, une pierre noire." },
      ilot: { ambiance: "nature", name: "L'îlot du Façonneur", map: "couchant", region: "sargues", x: 58, y: 60, desc: "Un îlot boisé, une source, une maison blanche, des cris la nuit." },
      mer_lannoz: { ambiance: "mer", name: "Au large de Lannoz", map: "couchant", region: "lannoz", x: 48, y: 72, desc: "La mer grise sous la bruine." },
      lannoz: { ambiance: "nature", name: "Lannoz", map: "couchant", region: "lannoz", x: 46, y: 76, desc: "L'anse, le village de pierres sèches, les landes et les tourbières." },
    },
  },
};
