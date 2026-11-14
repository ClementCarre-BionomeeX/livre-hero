// Act II, « Les bouches inutiles » (days 4 to 10): after the assault, the herald's terms, the Sow, the roof of the
// Hall, the hidden grain, the flux, the second Council (the useless mouths) and the expulsion, the mine, the King's
// letter, the riot, and the third Council (the surrender).
module.exports = {
  B1_victoire: {
    act: "II", title: "La porte a tenu", place: "remparts",
    text: [
      "Le soleil se lève sur le fossé plein d'échelles brisées. Les cors du Margrave sonnent la retraite, longtemps, comme on appelle des chiens perdus. Sur le chemin de ronde, les tanneurs s'assoient où ils sont, contre le parapet, et certains s'endorment tout de suite.",
      "Aussonne passe le long du mur, s'arrête devant toi, te regarde. « Bien. » Il repart. Derrière lui, Oudart de Lys te fait un clin d'œil, le visage noir de fumée.",
      { if: { battle: "tanneurs", losses: { min: 2 } }, text: "On descend les morts par l'escalier de la tour d'Angle, sur des portes arrachées. Tu en connais deux de vue : un batelier qui chantait au Chat-Huant, et un des commis de la Halle." },
      { if: { battle: "tanneurs", losses: { max: 1 } }, text: "On compte les morts : peu. Les sœurs de l'Hôtel-Dieu montent avec des civières pour les blessés, et l'on entend des rires, nerveux, qui ressemblent à des sanglots." },
      "Dans la ville, les cloches sonnent encore, autrement. Pour la première fois depuis onze jours, Sarance a battu quelqu'un.",
    ],
    fx: { flag: "bataille:tanneurs" },
    choices: [{ label: "Laisser les blessés aux sœurs, et faire le tour du rempart", takes: 2, to: "H_remparts" }],
  },
  B1_defaite: {
    act: "II", title: "La barbacane", place: "remparts",
    text: [
      "La porte a tenu, de justesse, mais la barbacane est tombée. Les soldats du Margrave y sont retranchés, à cinquante pas du mur, derrière leurs mantelets, et leurs arbalétriers tirent sur tout ce qui bouge aux créneaux.",
      "Dans la confusion, une échelle a passé le mur des tanneries assez longtemps pour que quelques hommes du Margrave mettent le feu à un grenier de la rue Basse. On a sauvé ce qu'on a pu. Quarante setiers de blé de la ville y étaient entreposés en attendant la mouture.",
      "Aussonne garde le silence. Il regarde la barbacane, longtemps, et sa main gauche se serre sur la poignée de son épée.",
    ],
    fx: { flag: "bataille:tanneurs" },
    choices: [{ label: "Laisser les blessés aux sœurs, et faire le tour du rempart", takes: 2, to: "H_remparts" }],
  },
  H_heraut: {
    act: "II", title: "Le héraut", place: "remparts",
    text: [
      "Une trompette sonne devant la Porte des Tanneurs : trois notes, puis trois encore. Un cavalier attend au bord du fossé, seul, en tabard rouge à la tour d'or, une branche verte à la main. On ne tire pas sur un héraut.",
      "Aussonne monte à la porte, et le Conseil derrière lui. On te fait signe de suivre.",
      "« Messire Gautier de Rouvre, héraut de Monseigneur le Margrave de Hautpré, seigneur légitime de Sarance par sa défunte épouse. » Il a une voix de chantre, claire et sans colère. « Monseigneur salue la vaillance de la garnison. Il offre ceci : les portes ouvertes, la garnison libre de partir avec ses armes et ses bannières, les vies et les biens des habitants saufs, les franchises de la ville confirmées. »",
      "« Ces conditions tiennent cinq jours, jusqu'au soir du dixième jour de ce mois. Passé ce terme, Monseigneur prendra la ville par la force, et il ne répondra plus de ce que feront ses soldats. »",
      "Il salue, tourne bride, et repart au pas, sans se retourner. Sur le rempart, personne ne parle. Puis Gilles Aubron crache par-dessus le parapet, et Dame Vassal dit, très bas, à Carbonnel : « Les biens saufs. Tu as entendu ? »",
    ],
    fx: { meet: "heraut", ep: ["histoire", 300] },
    choices: [{ label: "Rester sur le rempart", to: "H_remparts" }],
  },

  // ------------------------------------------------------------------ the Sow
  S1_sortie: {
    title: "La sortie", place: "remparts",
    text: [
      "Minuit. Vingt sergents, Oudart de Lys et toi, dans le noir de la barbacane, chacun avec un pot de poix sur le dos et une mèche dans la ceinture. On a graissé les gonds de la petite porte.",
      { if: { has: "barbacane:perdue" }, text: "La barbacane est aux mains du Margrave : vous sortez par une échelle, au bout du mur des tanneries, un par un, dans le fossé." },
      "Oudart passe devant, sans casque, la moustache au vent, et se retourne pour sourire. « Si on meurt, ce sera la plus belle mort de la saison. »",
      "Vous traversez les pâtures à quatre pattes, entre les feux de garde. La butte aux Pendus, la Truie au-dessus de vous comme une bête endormie. Autour du bâti, des charpentiers dorment dans la sciure. Un chien lève la tête.",
    ],
    choices: [
      { label: "Charger avant que le chien aboie", fight: { title: "La butte aux Pendus", enemies: [{ id: "chien", n: 1 }, { id: "servant", n: 2 }], terrain: "ville",
        win: { to: "S1_feu" }, lose: { fx: { pv: -4 }, to: "S1_retraite" },
        flee: { label: "Te replier dans le fossé", dom: "discretion", diff: 0, to: "S1_retraite" } } },
    ],
  },
  S1_feu: {
    title: "La Truie brûle", place: "remparts",
    text: [
      "Les pots éclatent contre les poutres, la poix coule, et les mèches prennent. En un instant, le bâti de la Truie est une torche haute comme le clocher de Saint-Aubin. Les flammes éclairent tout le camp du Margrave, et des milliers d'hommes qui sortent de leurs tentes en chemise.",
      "Vous courez. Oudart rit en courant. Un carreau d'arbalète siffle à côté de ta tête. Vous sautez dans le fossé, vous remontez par l'échelle, et sur le rempart toute la Basse-Ville est là pour vous acclamer.",
      "Oudart lève les bras vers la foule, un peu comme un acteur. Puis il se tourne vers toi, essoufflé, et te serre la main. « On fait une belle paire, l'intendance. »",
    ],
    fx: { flag: "truie:brulee", quest: "II_truie", stock: { moral: 10 }, regard: { oudart: "cordial" }, ep: ["seance", 1200] },
    choices: [{ label: "Aller dormir quelques heures", takes: "morning", to: "N_matin" }],
  },
  S1_retraite: {
    title: "La retraite", place: "remparts",
    text: [
      "Le chien aboie. Puis dix chiens. Des torches s'allument partout autour de la butte, et les sergents lâchent leurs pots dans l'herbe pour courir plus vite. Vous repassez le fossé sous les carreaux.",
      "Trois sergents ne remontent pas l'échelle. Sur le rempart, Oudart de Lys compte les siens, la mâchoire serrée, et ne te dit rien. La Truie est toujours là, intacte, sur sa butte.",
    ],
    fx: { stock: { moral: -4 } },
    choices: [{ label: "Aller dormir quelques heures", takes: "morning", to: "N_matin" }],
  },
  S2_brulot: {
    title: "Les brûlots", place: "port",
    text: [
      "Trois barques à fond plat, chargées de fagots, de paille et de pots de poix, attachées l'une derrière l'autre. Gilles Aubron dans la dernière, toi dans la première, deux bateliers au milieu. Pas de rames : la Dorve vous portera.",
      "Vous glissez le long des Moulins, sous la Poterne, puis hors des murs. Le courant prend les barques comme on prend un enfant dans ses bras. Il faut seulement les garder au milieu du lit, loin des berges et des postes de garde, en se guidant sur les étoiles et sur le bruit de l'eau.",
      "La butte aux Pendus approche, noire sur le ciel. Il faut savoir le moment exact où pousser la perche pour échouer la barque au pied de la Truie.",
    ],
    choices: [
      { label: "Tenir la barque au fil du courant, et choisir le moment", test: { dom: "nature", diff: 0, label: "Nature" }, win: { to: "S2_feu" }, lose: { fx: { pv: -3 }, to: "S2_rate" } },
    ],
  },
  S2_feu: {
    title: "Le feu sur l'eau", place: "port",
    text: [
      "Tu pousses la perche au bon moment. La barque racle le gravier au pied de la butte. Tu allumes, tu sautes à l'eau, et les deux autres barques viennent s'échouer contre la première. Le feu monte d'un coup, la poix gicle, et le vent du sud couche les flammes contre la charpente de la Truie.",
      "Vous nagez vers l'aval, dans le froid qui coupe le souffle, pendant que le camp tout entier s'éveille dans la lumière orange. Gilles te repêche par le col, à la passe des Saules, en riant comme un enfant.",
      "Au matin, sur la butte aux Pendus, il reste de la Truie un tas de poutres noires. Sur le quai, les bateliers chantent.",
    ],
    fx: { flag: "truie:brulee", quest: "II_truie", stock: { moral: 10 }, regard: { gilles: "admiratif" }, ep: ["seance", 1200] },
    choices: [{ label: "Aller dormir quelques heures", takes: "morning", to: "N_matin" }],
  },
  S2_rate: {
    title: "Le feu sur l'eau", place: "port",
    text: [
      "Tu pousses trop tard. La barque passe la butte, frotte une souche, se met en travers. Le feu prend trop tôt, dans la paille, et une sentinelle donne l'alerte sur la berge. Tu sautes à l'eau avec les bateliers. Les barques brûlent au milieu de la Dorve, pour rien, en éclairant tout.",
      "Gilles te repêche à la passe des Saules. Il ne te reproche rien. « La rivière, c'est comme ça. Elle te donne, et elle te reprend. » Mais il regarde longtemps, en silence, ses trois barques qui brûlent au loin.",
    ],
    fx: { stock: { moral: -3 } },
    choices: [{ label: "Aller dormir quelques heures", takes: "morning", to: "N_matin" }],
  },

  // ------------------------------------------------------------------ the roof of the Hall
  G_toit: {
    title: "Le toit crevé", place: "halle",
    text: [
      "Tu montes voir. La pierre de la Truie a traversé le toit et deux planchers de grenier, et elle a fini sa course dans un tas de sacs éventrés. Par le trou, on voit le ciel gris. Quand il pleuvra, l'eau tombera droit sur le grain du grenier ouest, et le grain mouillé germe ou pourrit en trois jours.",
      "Le maître couvreur de la ville, un vieux aux mains tremblantes, fait son devis à voix haute : des poutres, des lattes, des tuiles à prendre sur les maisons détruites, six hommes, deux jours. « Quarante écus. Pas un sou de moins, avec les pierres qui tombent. »",
    ],
    choices: [
      { label: "Payer les couvreurs", if: { gold: { min: 800 } }, why: "Il te faut quarante écus.", fx: { gold: -800, flag: "halle:reparee", quest: "II_toit", ep: ["seance", 600] }, to: "G_toit_fait" },
      { label: "Faire déplacer les sacs du grenier ouest vers les autres greniers", takes: 3, fx: { flag: "halle:reparee", quest: "II_toit", stock: { ble: -15 } }, to: "G_toit_sacs" },
      { back: "H_halle" },
    ],
  },
  G_toit_fait: {
    title: "Les couvreurs", place: "halle",
    text: [
      "Les couvreurs travaillent deux jours sous les pierres de la Truie, encordés, en jurant. Le deuxième soir, le trou est fermé. Les tuiles neuves sont plus rouges que les autres. On voit la réparation de loin.",
    ],
    choices: [{ back: "H_halle" }],
  },
  G_toit_sacs: {
    title: "Les sacs", place: "halle",
    text: [
      "Tu fais monter tous les commis, les porteurs et quelques soldats. Trois heures durant, une chaîne de dos courbés fait passer les sacs du grenier ouest dans les deux autres, où ils s'entassent jusqu'aux poutres. Le grenier ouest reste vide sous son trou, et la pluie y tombe désormais sur du plancher nu.",
      "Les sacs du fond, déjà mouillés par l'averse de la nuit, sentent l'aigre. Tu en fais jeter une quinzaine aux cochons de l'Hôtel-Dieu.",
    ],
    choices: [{ back: "H_halle" }],
  },

  // ------------------------------------------------------------------ the Vassal cellars
  G_caves: {
    title: "Les caves Vassal", place: "marche",
    text: [
      "La maison Vassal a une porte de cave sur la ruelle, derrière, fermée d'un cadenas que tu ouvres avec la patience d'un voleur et une épingle à cheveux. Les marches descendent dans une odeur de terre et de futaille.",
      "La première cave est pleine de vin. La deuxième, de draps en ballots. La troisième, la plus grande, voûtée, est pleine de sacs de blé jusqu'à la voûte, en rangs serrés, comme dans un grenier.",
      "Tu approches ta chandelle. Chaque sac est cousu du S couronné des greniers de la ville de Sarance. Tu en ouvres un : du bon blé, sec, doré, qui coule entre tes doigts.",
      { if: { has: "grain:vendu" }, text: "Un bon tiers des rangées est vide, et des traces fraîches de sacs traînés vont vers l'escalier." },
      "Tu remontes sans bruit, et tu refermes le cadenas derrière toi.",
    ],
    fx: { clue: "g_caves", ep: ["seance", 800] },
    choices: [{ label: "T'éloigner dans la nuit", to: "H_marche" }],
  },
  G_caves_pris: {
    title: "La lanterne", place: "marche",
    text: [
      "Le cadenas cède, mais au bas des marches une lanterne s'allume. Deux gardes de la maison Vassal, en jaque de cuir, te regardent avec intérêt. Derrière eux, en robe de chambre grise, Dame Aliénor Vassal en personne.",
      "« L'intendance, dans ma cave, à minuit. » Elle n'a pas l'air surprise. « Raccompagnez notre intendant{e} jusqu'à la rue. Avec égards. Nous nous reverrons au Conseil. »",
      "Les gardes te remontent par les bras. La porte se referme sur toi, et tu entends qu'on ajoute un deuxième cadenas.",
    ],
    fx: { regard: { alienor: "hostile" } },
    choices: [{ label: "T'éloigner dans la nuit", to: "H_marche" }],
  },

  // ------------------------------------------------------------------ the second Council
  C2_seance: {
    act: "II", title: "Le Conseil des bouches inutiles", place: "chateau",
    text: [
      "On a fermé les volets de la salle du Conseil à cause des pierres de la Truie, et allumé les chandelles en plein jour. Mère Ysaure arrive la dernière, un linge encore à la ceinture, et ne s'assied pas.",
      { if: { stock: "flux", min: 10 }, text: "Elle annonce les chiffres de l'Hôtel-Dieu d'une voix plate : le flux a gagné la grande salle et le cloître. Onze morts depuis ce matin, dont sept enfants des villages." },
      "Aussonne attend qu'elle ait fini. Puis il fait un signe au greffier. « J'ai déposé cette motion moi-même. Je veux que chacun vote à voix haute, et que chacun s'en souvienne. »",
      { if: { days: "ble", max: 6 }, text: "Tous les regards viennent vers toi, pour le compte des jours. Il en reste moins d'une semaine." },
      { if: { days: "ble", min: 7 }, text: "Tous les regards viennent vers toi, pour le compte des jours. Il en reste davantage qu'Aussonne ne le croit, et moins qu'il ne faudrait." },
      { if: { promise: "adelaide", is: "en cours" }, text: "Tu as promis à Adélaïde du Plessis que personne ne mettrait ses gens hors des murs." },
    ],
    council: { motion: "exp", to: "C2_apres", label: "Passer au vote" },
  },
  C2_apres: {
    act: "II", title: "Après le vote", place: "chateau",
    text: [
      { if: { vote: "exp", is: "adopte" }, text: "La motion est adoptée. Demain à l'aube, sept cents personnes sortiront par la Porte des Tanneurs. Mère Ysaure se lève en silence et quitte la salle. Gilles Aubron renverse son tabouret en sortant." },
      { if: { vote: "exp", is: "rejete" }, text: "La motion est rejetée. Aussonne hoche la tête comme s'il s'y attendait, et fait noter le vote au registre. Mère Ysaure ferme les yeux, et ses lèvres bougent." },
      { if: { all: [{ vote: "exp", is: "adopte" }, { vote: "exp", hero: "pour" }] }, text: "En passant derrière toi, Dame Vassal te touche l'épaule, d'un doigt. « Vous avez fait ce qu'il fallait. Personne ne vous en remerciera. »" },
    ],
    fx: { ep: ["seance", 600] },
    choices: [{ label: "Descendre dans la cour", to: "H_chateau" }],
  },
  E_expulsion: {
    act: "II", title: "La Porte des Tanneurs", place: "remparts",
    text: [
      "Le jour se lève sur la Porte des Tanneurs. Les gens des villages arrivent par la rue des Tanneurs, en silence, sous la garde des sergents : des familles, des vieux portés sur des brancards, des enfants qui tiennent des poules. Ils ont laissé leurs vaches. On les a mangées.",
      "Adélaïde du Plessis marche la dernière. Quand elle passe sous la voûte, elle lève les yeux vers le rempart, et ses yeux s'arrêtent sur toi.",
      { if: { promise: "adelaide", is: "rompue" }, text: "Tu lui avais promis. Elle le sait, tu le sais, et la foule qui s'est massée sur le rempart pour regarder le sait aussi." },
      { after: "plessis:abri", text: "Ceux qui dormaient au sec, depuis quelques nuits, ont roulé leurs couvertures avec soin, comme on les roule quand on compte revenir." },
      "La porte se referme. De l'autre côté du fossé, une ligne d'arbalétriers du Margrave attend. Un sergent du camp crie quelque chose. Les sept cents s'arrêtent au bord du fossé, entre les deux armées, et s'assoient dans l'herbe.",
      "Ils ne passeront pas. Le Margrave veut que la ville les voie.",
    ],
    fx: { stock: { moral: -4 } },
    choices: [
      { label: "Descendre sous la porte, et demander au héraut de les laisser passer", test: { dom: "social", diff: -10, label: "Social" }, win: { to: "E_passage" }, lose: { to: "E_refus" } },
      { label: "Rester sur le rempart", to: "H_remparts" },
    ],
  },
  E_passage: {
    title: "Le passage", place: "remparts",
    text: [
      "On te fait sortir par le guichet, avec un drapeau blanc. Messire de Rouvre vient à cheval jusqu'au bord du fossé, et t'écoute poliment.",
      "Tu ne lui parles pas de pitié. Tu lui parles de ce que dira le pays, des villages qui ne lui ouvriront plus leurs portes, des chroniqueurs qui écriront « Sarance » à côté de « Pont-Aubert ». Tu lui parles du flux, aussi, que sept cents malades porteront dans son camp s'il les garde au bord de ses lignes.",
      "Le héraut sourit à moitié. « Vous avez l'âme d'un marchand, intendant{e}. Monseigneur aime les marchands. » Il repart au galop. Une heure plus tard, la ligne d'arbalétriers s'ouvre, et les gens du Plessis passent, lentement, vers le sud, avec un sauf-conduit.",
      "Adélaïde est la dernière à passer. Elle ne se retourne pas.",
    ],
    fx: { flag: "passage:accorde", regard: { adelaide: "redevable" }, ep: ["seance", 1000] },
    choices: [{ label: "Gravir l'escalier du rempart", to: "H_remparts" }],
  },
  E_refus: {
    title: "Le refus", place: "remparts",
    text: [
      "Messire de Rouvre t'écoute du haut de son cheval, au bord du fossé. Puis il secoue la tête. « Ces gens sont à vous, intendant{e}. Monseigneur n'a pas de pain pour les bouches que vous refusez de nourrir. Reprenez-les, ou regardez-les. »",
      "Tu remontes par le guichet. Derrière toi, les gens du Plessis s'installent dans le fossé avec leurs manteaux.",
    ],
    choices: [{ label: "Gravir l'escalier du rempart", to: "H_remparts" }],
  },
  E_pain: {
    title: "Le pain du fossé", place: "remparts", back: true,
    text: [
      "Tu fais monter des sacs de pain sur le rempart, au-dessus du fossé, et des soldats les jettent un par un, aussi loin qu'ils peuvent. En bas, des mains se tendent. Des enfants courent. Les arbalétriers du Margrave regardent sans tirer.",
      { if: { day: { max: 9 } }, text: "Adélaïde fait la distribution elle-même, en bas, un pain pour quatre, et lève la main vers toi quand elle a fini." },
      { if: { day: { min: 10 } }, text: "Ils sont moins nombreux à se lever pour le pain. Certains restent couchés sous leurs manteaux, même quand le pain tombe tout près." },
      "Sur le rempart, les soldats qui jettent le pain ont faim, eux aussi. Tout le monde se tait.",
    ],
    fx: { stock: { ble: -4 }, regard: { adelaide: "cordial" } },
    fxEvery: { stock: { ble: -4 } },
  },

  // ------------------------------------------------------------------ the mine
  R_mine: {
    title: "Le bruit sous la terre", place: "remparts",
    text: [
      { first: true, text: "Au pied de la Tour du Sel, dans la salle basse, une sentinelle te montre un seau d'eau posé sur les dalles. Tu attends. Au bout d'un moment, l'eau frissonne, sans raison, et des cercles naissent au milieu de la surface. Puis plus rien. Puis encore." },
      { first: true, text: "Tu colles l'oreille contre la dalle. Très loin, très bas : des coups réguliers, sourds, comme un cœur. Ils creusent. Ils creusent une galerie sous le mur, pour l'étayer de bois, y mettre le feu, et faire tomber la tour dans son trou." },
      { again: true, text: "Le seau d'eau, sur les dalles de la salle basse. Les cercles à la surface. Les coups, plus proches qu'hier." },
      { if: { has: "contremine" }, text: "Dans un coin, les mineurs de la garnison ont ouvert un puits dans le sol. Tu entends leurs pioches répondre à celles d'en face." },
      "Le sergent du secteur se gratte la nuque. « Une contre-mine, il faudrait. Des bras, du bois, et du pain pour ceux qui creusent. Ou alors savoir par où passe l'eau, sous cette ville. »",
    ],
    choices: [
      { label: "Faire creuser une contre-mine par les mineurs de la garnison", hide: { has: "contremine" }, takes: 2, fx: { flag: "contremine", quest: "II_mine", stock: { ble: -10 }, ep: ["seance", 800] }, to: "R_contremine" },
      { back: "H_remparts" },
    ],
  },
  R_contremine: {
    title: "La contre-mine", place: "remparts",
    text: [
      "Les mineurs de la garnison sont six, des gars de la Montagne, petits et carrés. Tu leur fais donner la ration pleine et un tonneau de vin, et tu leur fais porter tout le bois de la charpente d'une maison détruite. Ils descendent en silence, et creusent vers le bruit.",
      "Au soir, ils remontent noirs de terre. « On est sur eux. Quand ils viendront, on fera tomber leur galerie et la nôtre, avec ceux qui seront dedans. Mais il faudra le faire au bon moment. »",
    ],
    choices: [{ back: "H_remparts" }],
  },
  M_noyer: {
    title: "La vanne", place: "port",
    text: [
      "Jacquemin t'emmène dans le bief des Moulins, à minuit, avec deux meuniers et des pics. Sous la passerelle du Moulin d'amont, contre la berge, un vieux mur de briques mangé de mousse. Vous l'attaquez à coups de pic, dans l'eau jusqu'aux genoux. Derrière, un conduit voûté, assez haut pour un enfant, qui descend dans le noir vers la Tour du Sel.",
      "Jacquemin pose la main sur la roue de la vanne. Il te regarde. Tu fais signe que oui.",
      "La vanne monte. L'eau du bief s'engouffre dans le conduit avec un bruit de bête, et tout le bief baisse d'un pied en quelques minutes. Au loin, sous la terre, tu crois entendre quelque chose. Des cris, peut-être. Peut-être l'eau seule.",
      "Le matin, dans la salle basse de la Tour du Sel, le seau d'eau est immobile sur les dalles. Il le reste toute la journée, et les jours suivants.",
      "Jacquemin ne parle pas, en rentrant. Devant le Moulin, il te dit seulement : « Ils étaient combien, en dessous ? » Tu l'ignores.",
    ],
    fx: { flag: "mine:noyee", quest: "II_mine", regard: { jacquemin: "cordial" }, ep: ["seance", 1200] },
    choices: [{ label: "Aller dormir", takes: "morning", to: "N_matin" }],
  },

  // ------------------------------------------------------------------ the King's letter
  L_courrier: {
    title: "Le registre du courrier", place: "chateau",
    text: [
      "Le registre du courrier du château est tenu dans une petite pièce au pied de l'escalier, par un clerc à manchettes de lustrine. L'intendance a le droit de le voir : les achats de grain passent par les lettres. Le clerc te le tend en soupirant.",
      "Les entrées sont toutes de la même main, une belle écriture penchée. « Le lieutenant tient la correspondance du capitaine », dit le clerc. « Moi, je recopie. »",
      "Tu remontes les pages. Des lettres aux villes voisines, aux abbayes, au sénéchal. Rien de l'extérieur depuis le début du siège, sauf une ligne, au neuvième jour : « Reçu du Roi, une lettre close, par le passeur des Moulins. »",
      "Pas de réponse inscrite. Tu poses la question au clerc. Il hausse les épaules. « Le capitaine l'a gardée. »",
    ],
    fx: { clue: "l_courrier", set: { sait: "secretaire" }, tie: "lieutenant" },
    choices: [{ back: "H_chateau" }],
  },
  L_fouille: {
    title: "Le logis du capitaine", place: "chateau",
    text: [
      "Le logis d'Aussonne est une chambre de soldat : un lit étroit, un coffre, une table, un crucifix, une armure sur son chevalet. Tu as peu de temps. Tu entends le capitaine, très loin, qui crie un ordre sur le chemin de ronde.",
      "Le coffre n'est pas fermé. Des chemises, une bible, des lettres de femme nouées d'un ruban et, tout au fond, sous une cotte pliée, un pli au grand sceau rouge du Roi, rompu.",
      "Tu le lis debout, près de la fenêtre. Tu le relis. Puis tu le glisses sous ta chemise, et tu refermes le coffre.",
    ],
    fx: { item: "lettre_roi", flag: "l:lue", quest: "II_lettre", ep: ["seance", 1200] },
    choices: [{ label: "Traverser la cour sans courir", to: "H_chateau" }],
  },
  L_fouille_pris: {
    title: "Le capitaine", place: "chateau",
    text: [
      "Tu as la main dans le coffre quand la porte s'ouvre. Aussonne est sur le seuil, la cape mouillée. Il revient chercher ses gants.",
      "Il te regarde un long moment. Il ne crie pas. « Sortez. » Tu sors. Dans l'escalier, tu l'entends refermer le coffre avec une clé, et donner un tour de plus.",
    ],
    fx: { regard: { aussonne: "hostile" } },
    choices: [{ label: "Descendre dans la cour", to: "H_chateau" }],
  },

  // ------------------------------------------------------------------ the riot
  R_emeute: {
    act: "II", title: "L'émeute", place: "halle",
    text: [
      "Ça commence par un cri, sur la place devant la Halle, et ça devient une foule en moins de temps qu'il n'en faut pour descendre l'escalier. Trois cents, quatre cents personnes, des femmes devant, des hommes avec des barres de fer et des maillets de tonnelier. Les deux sergents de garde ont reculé jusqu'à la porte.",
      "« Le pain ! Le pain des greniers ! » Une pierre traverse un volet. Quelqu'un a apporté une poutre pour enfoncer la grande porte.",
      "Ils te voient. Le cri change. « L'intendance ! » Ils savent qui tient les clés.",
    ],
    choices: [
      { label: "Faire ouvrir un grenier, et distribuer", fx: { stock: { ble: -30, moral: 12 }, regard: { gilles: "cordial", aussonne: "mefiant" } }, via: "ouvert", to: "R_emeute_fin" },
      { label: "Monter sur les marches et leur parler", test: { dom: "social", diff: -10, label: "Social" }, win: { fx: { stock: { moral: 8 } }, via: "parole", to: "R_emeute_fin" }, lose: { fx: { pv: -3, stock: { moral: 2 } }, via: "sang", to: "R_emeute_fin" } },
      { label: "Faire venir les sergents du château pour dégager la place", fx: { stock: { moral: 4 }, flag: "emeute:sang", regard: { gilles: "hostile", ysaure: "distant" } }, via: "sang", to: "R_emeute_fin" },
    ],
  },
  R_emeute_fin: {
    title: "Après l'émeute", place: "halle",
    text: [
      { via: "ouvert", text: "Tu fais ouvrir le grenier est. Les sacs descendent, les boulangers jurés pétrissent toute la nuit, et la foule se disperse avec du pain sous le bras. Le lendemain, la ville est calme. Le grenier est vide, lui aussi." },
      { via: "parole", text: "Tu leur parles du compte, simplement : combien il reste, combien on mange, combien de jours. Tu leur dis que si l'on ouvre aujourd'hui, on mourra de faim avant la fin du mois. Une femme crie que c'est un mensonge. Une autre la fait taire. La poutre retombe sur les pavés, et la foule se défait comme une pâte qu'on cesse de pétrir." },
      { via: "sang", text: "Les sergents arrivent au pas de charge, la pique basse. La foule se brise. Quand la place est vide, il reste trois corps sur les pavés, un sabot, un panier renversé, et du sang dans les rigoles." },
      { via: "sang", text: "Une pierre t'a ouvert le front. Une sœur te recoud sur les marches de la Halle, sans anesthésie, en parlant d'autre chose." },
    ],
    fx: { ep: ["seance", 800] },
    choices: [{ label: "Passer dans la Halle", to: "H_halle" }],
  },

  // ------------------------------------------------------------------ the third Council
  C3_seance: {
    act: "II", title: "Le Conseil de la reddition", place: "chateau",
    text: [
      "Le dixième jour, à six heures du soir. Le terme du héraut expire à minuit. La salle du Conseil est pleine : on a laissé entrer les maîtres des métiers, les chanoines, les capitaines de quartier, qui se tiennent debout contre les murs. Tout le monde sait de quoi on va parler.",
      { after: "oudart:arrete", text: "La place d'Oudart de Lys est vide. On a laissé son tabouret." },
      { after: "oudart:fui", text: "La place d'Oudart de Lys est vide. On ne parle pas de lui." },
      { after: "alienor:arretee", text: "Dame Vassal et Carbonnel sont assis entre deux sergents, sur des bancs qu'on a apportés. On leur a laissé leur voix : le Conseil n'a jamais voté leur exclusion." },
      "Aussonne ouvre la séance debout. « Le Roi viendra. Je l'ai dit le premier jour, je le redis ce soir. Nous avons tenu dix jours. Nous tiendrons dix jours de plus. » Personne ne répond.",
      { if: { item: "lettre_roi" }, text: "Sous ta chemise, contre ta peau, la lettre du Roi." },
      { if: { has: "lettre:annoncee" }, text: "Aussonne ne te quitte pas des yeux. Il sait ce que tu portes, et que tu as dit que la ville avait le droit de savoir." },
      { if: { days: "ble", max: 5 }, text: "Tu donnes ton compte : il reste moins de cinq jours de pain dans les greniers. Un murmure fait le tour de la salle." },
      { if: { days: "ble", min: 6 }, text: "Tu donnes ton compte. Il reste du pain pour un peu plus d'une semaine, si rien ne brûle et si personne ne vole." },
    ],
    choices: [
      { label: "Lire la lettre du Roi au Conseil", if: { item: "lettre_roi" }, hide: { not: { item: "lettre_roi" } }, to: "C3_lettre" },
    ],
    council: { motion: "reddition", to: "C3_apres", label: "Passer au vote" },
  },
  C3_lettre: {
    act: "II", title: "La lettre lue", place: "chateau",
    text: [
      "Tu te lèves et tu tires la lettre de ta chemise. Aussonne voit le sceau rouge, et tout son corps se fige.",
      "Tu lis lentement, à voix haute, pour que les gens du fond entendent. « Notre ost ne descendra pas vers vous avant le printemps. Tenez si vous le pouvez. Rendez la place à bonnes conditions si vous ne le pouvez plus. Nous ne vous en ferons pas reproche. »",
      "Le silence qui suit est le plus long de ta vie.",
      "Puis tout le monde parle à la fois. Un chanoine pleure. Carbonnel rit, d'un rire aigu, et se cache la bouche. Mère Ysaure se signe. Dame Vassal regarde Aussonne avec quelque chose comme de la pitié.",
      "Aussonne se tait. Il s'assied, très droit, et pose les deux mains à plat sur la table. Il a l'air d'un homme qui attend la corde.",
      "C'est Gilles Aubron qui se lève, et sa voix couvre la salle. « Le Roi nous laisse. Le Margrave nous veut. Et ce conseil de seigneurs et de marchands nous a caché la vérité pendant quinze jours. » Il se tourne vers les maîtres des métiers, contre le mur. « Sarance n'a plus de maître qu'elle-même. »",
    ],
    fx: { flag: "lettre:lue_conseil", sway: { reddition: { aussonne: "pour", ysaure: "pour", carbonnel: "pour" } }, regard: { aussonne: "trahi", gilles: "admiratif" }, stock: { moral: -5 }, ep: ["histoire", 1500] },
    council: { motion: "reddition", to: "C3_apres", label: "Passer au vote" },
  },
  D_tasca: {
    title: "Les hommes du Lombard", creditor: "tasca",
    text: [
      "Deux hommes t'attendent, adossés au mur, les bras croisés. Des anciens soldats, à leur allure, en jaque de cuir et bonnet de laine. L'un d'eux tient un papier plié en quatre, ton nom au bas.",
      "« Le seigneur Tasca te salue. Le douzième jour, six heures, soixante écus. Il est six heures passées. » Il regarde ta bourse. « Le seigneur Tasca dit qu'il prend aussi les bagues et les épées, au poids. »",
    ],
    choices: [
      { label: "Les repousser", fight: { title: "Les hommes du Lombard", enemies: [{ id: "gros_bras", n: 2 }], terrain: "ville", spare: true,
        win: { to: "D_tasca_fin" }, lose: { fx: { pv: -3, gold: -200 }, to: "D_tasca_fin" } } },
      { label: "Leur dire que la ville paiera, après le siège", fx: { regard: { tasca: "hostile" } }, to: "D_tasca_fin" },
    ],
  },
  D_tasca_fin: {
    title: "Les hommes du Lombard", back: true,
    text: [
      "Ils s'en vont sans se presser, en regardant par-dessus leur épaule. Le Lombard attendra. Le Lombard sait attendre. Il a une ville entière de débiteurs, et un registre où les noms ne s'effacent pas.",
    ],
  },
};
