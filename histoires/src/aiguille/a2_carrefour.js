// L'Île Folle-Aiguille · act II, the crossroads of Morlenc. One look per chapter: the reader follows the child of the
// Fanal or the doctor (and, in a second reading, the cook) through the days of the fitting-out (II.1), then one of the
// first two through the eve of sailing (II.2). What the one not followed did is settled by the branches below, which set
// its quiet defaults, so that every later page reads a world that went on without the reader.
function played(ch, who) { return { has: "regard:" + ch + "=" + who }; }
module.exports = {
  passages: {
    C2: { act: "II", title: "Morlenc", place: "quai_hollandes", hub: true, noLead: true, backName: "Morlenc", ambiance: "ville",
      text: [
        { first: true, text: "Morlenc apparaît au matin du troisième jour, du haut de la dernière colline, comme une ville posée sur l'eau par quelqu'un qui aurait voulu la noyer et se serait ravisé. Des toits d'ardoise à perte de vue, des clochers, des cheminées, et au-delà des toits une forêt de mâts plus dense que celle des clochers, qui dit assez à quoi la ville croit. La Haute-Ville se tient sur sa colline avec ses hôtels de pierre blonde, sa Bourse à colonnes et son Académie à coupole ; la Basse-Fosse croupit au pied, dans la brume des marais, avec ses tavernes, ses logeurs et ses fosses ; entre les deux, le long du fleuve, le Quai des Hollandes déroule ses magasins, ses grues et ses navires, et c'est là que l'argent de l'une se fait sur le dos de l'autre." },
        { first: true, text: "Le baron Clavières a loué pour son expédition l'étage d'une auberge du quai, le Cormoran, d'où l'on voit le trois-mâts qu'on arme. Dix jours d'armement, dit-il. Dix jours pour charger six mois de vivres, trouver vingt matelots qui ne soient ni ivrognes, ni voleurs, ni bavards, et faire taire une ville qui parle de tout." },
        { first: true, text: "Ces dix jours, plusieurs personnes les vivent en même temps, chacune de son côté. Tu n'en suivras qu'une. Ce que les autres auront fait pendant ce temps, tu le trouveras plus tard sur ton chemin." },
        { again: true, text: "Morlenc continue de vivre sans toi : la Bourse ouvre, les grues grincent, la Basse-Fosse dort jusqu'à midi." },
      ],
      choices: [
        { label: "{joueur} · les jours de l'armement", fx: { team: "mousse", set: { "regard:II.1": "mousse" } }, to: "A2m_debut", big: true },
        { label: "Victorine Davrigny · les jours de l'armement", fx: { team: "victorine", set: { "regard:II.1": "victorine" } }, to: "A2v_debut", big: true },
        { label: "Lucien Fargue · les jours de l'armement", second: true, fx: { team: "fargue", set: { "regard:II.1": "fargue" } }, to: "A2f_aube", big: true },
      ] },

    // After the chapter II.1 played by one of them: the quiet defaults of the others, then the crew the baron imposes.
    C2_fin: { act: "II", title: "Les jours de l'armement", branch: [
      { if: played("II.1", "mousse"), to: "C2_fin_v" },
      { fx: { flag: ["m2:defaut", "fargue:connu"] }, to: "C2_fin_v" },
    ] },
    C2_fin_v: { act: "II", title: "Les jours de l'armement", branch: [
      { if: played("II.1", "victorine"), to: "C2_fin_eq" },
      { fx: { flag: "v2:defaut" }, to: "C2_fin_eq" },
    ] },
    C2_fin_eq: { act: "II", title: "Les jours de l'armement", branch: [
      { fx: { recrue: ["lagadec", "malandain", "coquerel", "boucaut"], flag: "gaudremont:abord" }, to: "C2_recit" },
    ] },
    C2_recit: { act: "II", title: "Les jours de l'armement", place: "quai_hollandes", ambiance: "ville",
      text: [
        "Les jours de l'armement passent. La Cormorane s'enfonce dans l'eau du quai à mesure qu'on la charge : biscuit, bœuf salé, pois secs, eau douce en barriques, poudre, boulets, toile de rechange, cordages, un cochon, deux chèvres, et une cage de poules qui chantent à l'aube comme si elles avaient quelque chose à dire.",
        "L'équipage se forme. Le baron impose quatre hommes que lui a recommandés son maître-coq, et la capitaine Ribaud les accepte en serrant les lèvres : Isidore Lagadec, un matelot maigre aux yeux pâles ; Ulric Malandain, un canonnier énorme ; Barthélemy Coquerel, qui rit de tout ; Hilaire Boucaut, un voilier aux petites lunettes. Le professeur Gaudrémont, de l'Académie, a payé son passage, en criant.",
        { if: { has: "m2:defaut" }, text: "{joueur} a passé ces jours-là à bord, à apprendre le métier de mousse sous les jurons de Maître Gobert, et le soir à la cambuse, où le maître-coq chante en épluchant les oignons." },
        { if: { has: "v2:defaut" }, text: "Victorine Davrigny a passé ces jours-là entre la pharmacie du bord, qu'elle a vidée et remplie trois fois, et l'hôtel du baron, où elle a dîné avec des gens qu'elle n'aurait pas soignés gratuitement." },
        "La veille du départ arrive.",
      ],
      choices: [{ label: "La veille", to: "C2b", big: true }] },

    C2b: { act: "II", title: "La veille", place: "quai_hollandes", hub: true, noLead: true, backName: "la veille du départ", ambiance: "ville",
      text: [
        { first: true, text: "Le dernier jour à Morlenc est un jour de pluie fine, de marée haute à minuit et de rumeurs. Toute la Basse-Fosse sait qu'un navire du baron Clavières part demain pour une île au trésor ; la moitié de la Haute-Ville le sait aussi, et feint de l'ignorer. Le soir, la Bourse donne son bal d'hiver. Sur le quai, des gens rôdent qui n'ont rien à y faire." },
        { first: true, text: "Cette dernière journée, tu la vivras avec l'une ou l'autre. Ce qui arrive à l'une arrive aussi, aux mêmes heures, sous les yeux de l'autre ; tu ne verras que ce que voit celle que tu suis." },
      ],
      choices: [
        { label: "{joueur} · la veille", fx: { team: "mousse", set: { "regard:II.2": "mousse" } }, to: "A2mv_debut", big: true },
        { label: "Victorine Davrigny · la veille", fx: { team: "victorine", set: { "regard:II.2": "victorine" } }, to: "A2vv_debut", big: true },
      ] },
    C2b_fin: { act: "II", title: "La veille", branch: [
      { if: played("II.2", "mousse"), to: "C2b_fin_v" },
      { fx: { flag: "m2v:defaut" }, to: "C2b_fin_v" },
    ] },
    C2b_fin_v: { act: "II", title: "La veille", branch: [
      { if: played("II.2", "victorine"), to: "C2b_fin_g" },
      { fx: { flag: ["v2v:defaut", "freres:soufflet"] }, to: "C2b_fin_g" },
    ] },
    // Gabet: the cook's man comes aboard unless the captain was told no.
    C2b_fin_g: { act: "II", title: "La veille", branch: [
      { if: { has: "gabet:refuse" }, to: "A2_appareillage" },
      { fx: { recrue: "gabet" }, to: "A2_appareillage" },
    ] },
    A2_appareillage: { act: "II", title: "L'appareillage", place: "cormorane", ambiance: "mer",
      text: [
        "On appareille à minuit, à la marée haute, sans musique. La capitaine l'a voulu ainsi. « Les gens qui partent en fanfare reviennent en cercueil, a-t-elle dit au baron. Et ceux qui reviennent en fanfare n'ont rien rapporté. »",
        "Les amarres tombent l'une après l'autre dans l'eau noire du fleuve. Le pilote du port monte à bord, un petit homme en ciré qui sent le genièvre et connaît chaque banc de vase de l'estuaire par son prénom. La Cormorane glisse le long du quai, devant les magasins fermés, les grues immobiles, les fenêtres éteintes. Une seule est éclairée, très haut dans la Haute-Ville : l'hôtel Clavières, où quelqu'un veille.",
        { if: { has: "gabet:refuse" }, text: "Sur le quai, sous un réverbère, un homme à barbe frisée regarde partir le navire, les mains dans les poches. Térence Gabet. Il ne fait aucun signe. Le maître-coq, à la lisse, ne lui en fait pas non plus." },
        { if: { has: "sabran:copie" }, text: "Au bout du quai, près de la Tour des Échevins, un brigantin à coque grise lève l'ancre à la même heure, sans feux de route. Personne à bord de la Cormorane ne le remarque, sauf la timonière, qui fait un signe de croix et n'en parle à personne." },
        "Puis l'estuaire s'élargit. Les lumières de Morlenc deviennent une ligne, puis un point, puis rien. Devant, la mer. Le vent fraîchit. La Cormorane s'incline, prend son allure, et le premier paquet de mer passe par-dessus l'étrave en éclatant comme un rire.",
      ],
      choices: [{ label: "La route du Couchant", to: "C3", big: true }] },
  },
  extras: {
    places: {
      quai_hollandes: { ambiance: "ville", name: "Le Quai des Hollandes", map: "morlenc", region: "morlenc", x: 50, y: 60, desc: "Les magasins, les grues, les navires à quai, le long du fleuve ; l'auberge du Cormoran, où loge l'expédition." },
      cormorane: { ambiance: "mer", name: "La Cormorane", map: "morlenc", region: "morlenc", x: 54, y: 66, desc: "Trois-mâts de quatre cents tonneaux, coque peinte en noir avec une bande ocre, une cormorane de bois doré à la proue." },
    },
  },
};
