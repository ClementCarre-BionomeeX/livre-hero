// Third pass, roads that cross the eighth night: Maëlle on Guillot's boat and Maëlle in the cell with Colin; Corlay
// woken by the Council of two in the morning; Odon before the carriage with the anvil; Bastien when Dame Hesdin comes
// down into the Chat Ferré for Malzieu; Ilde climbing to her patient of the forges. Six new endings.
var A = "I";
module.exports = {
  _add: {
    M_rue: [
      { label: "Descendre rue du Lavoir, chez Guillot le batelier", if: { lu: "I_guillot" }, to: "M_guillot" },
    ],
    M_pont_nuit: [
      { label: "Parler au jeune garde, près du poêle", if: { lu: "O_hommes" }, to: "M_colin" },
    ],
    C_vote_nuit: [
      { label: "Dormir, jusqu'à ce qu'on frappe", if: { lu: "H_cle_corlay" }, to: "C_quatre_maisons", fx: { time: 2.5 } },
    ],
    O_menti: [
      { label: "Attendre : une voiture descend de la Haute-Ville", if: { lu: "H_voiture" }, to: "O_voiture_hesdin", fx: { time: 0.5 } },
    ],
    B_boire: [
      { label: "Rester au fond de la salle, et regarder qui entre", if: { lu: "H_garnier_non" }, to: "B_dame_chat", fx: { time: 2.5 } },
    ],
    I_boutique: [
      { label: "Monter chez Dame Hesdin, ta patiente des forges", if: { lu: "H_forges" }, to: "I_hesdin" },
    ],
  },

  // ------------------------------------------------------------------ Maëlle and the boatman
  M_guillot: { act: A, title: "La barque à fond plat", place: "foulons", fx: { time: 0.25 },
    text: [
      "Rue du Lavoir, la troisième maison après la fontaine. Guillot t'ouvre en chemise, une gaffe à la main. Il a vingt-cinq ans et une barque amarrée sous ses fenêtres. Derrière lui, Nine, le ventre en avant, qui te reconnaît.",
      "« Une course pour l'apothicaire, dis-tu. La cabane des Loutres, au pied de la digue. Le pont est gardé. »",
      "Guillot regarde Nine. « Son père garde le pont, ce soir, dit-il. Avec deux gars. » Il prend sa veste. « Par la Sorge, à contre-courant, il faut une heure. »",
    ],
    choices: [{ label: "Monter dans la barque", to: "M_barque_pont" }] },
  M_barque_pont: { act: A, title: "Sous l'arche", place: "pont", fx: { time: 0.5 },
    text: [
      "Guillot rame sans bruit, à petits coups, le long de la rive. Tu es couchée au fond, le paquet sur le ventre. Au-dessus de vous, le pont des Moulins, et sa lanterne au milieu du tablier.",
      "Vous passez sous l'arche du milieu. Une voix tombe d'en haut, grave : « Guillot ? C'est toi, là-dessous ? »",
      "Guillot lève les rames. La barque dérive. Il lève la tête vers la lanterne.",
    ],
    choices: [
      { label: "Rester couchée, sans un souffle", test: { dom: "discretion", diff: 0, label: "Disparaître au fond d'une barque" }, win: { to: "M_barque_passe" }, lose: { to: "M_barque_vue" } },
    ] },
  M_barque_passe: { act: A, title: "Une barque vide", place: "berge", fx: { time: 0.75 },
    text: [
      "« Je relève mes nasses, beau-père, dit Guillot. Nine veut de l'anguille. »",
      "Un silence, là-haut. Puis la voix : « Rentre vite. Le lac est haut. »",
      "Guillot reprend les rames. Le pont s'éloigne. Tu restes couchée jusqu'aux tanneries, puis tu t'assois. La Sorge est noire et rapide. Guillot rame à contre-courant, le visage fermé, en comptant ses coups.",
      "Au pied de la digue, il te pose sur le ponton de la cabane des Loutres. « Je redescends, dit-il. Nine est seule. »",
    ],
    choices: [{ label: "Regarder la cabane", to: "M_cabane_tot", via: "barque" }] },
  M_barque_vue: { act: A, title: "Le beau-père", place: "berge", fx: { time: 0.75 },
    text: [
      "Tu bouges. La barque gîte. La lanterne descend au bout d'une corde jusqu'à l'eau, et tu te retrouves dans la lumière, couchée sur le paquet, avec la tête du sergent Brasseur penchée au-dessus du parapet.",
      "Il te regarde. Il regarde Guillot. Il regarde le paquet. Il reste longtemps penché.",
      "« Tu as une femme enceinte à la maison, Guillot. Et tu promènes des courrières sur la Sorge à dix heures du soir. » La lanterne remonte. « Je n'ai rien vu. Rentre avant minuit, ou c'est moi qui viendrai le dire à Nine. »",
      "Guillot rame plus fort. Il ne dit rien jusqu'aux tanneries. Puis il rit tout bas, les dents serrées, et il rame encore plus fort.",
      "Au pied de la digue, il te pose sur le ponton de la cabane des Loutres.",
    ],
    choices: [{ label: "Regarder la cabane", to: "M_cabane_tot", via: "barque" }] },

  // ------------------------------------------------------------------ Maëlle in the cell
  M_colin: { act: A, title: "Le garde du poêle", place: "hauteville", fx: { time: 0.5 },
    text: [
      "Le jeune garde a dix-neuf ans, un duvet de moustache, et le dos tourné. Tu l'appelles. Il ne se retourne pas.",
      "« Ta mère vend des beignets, place du Lavoir. Je lui en achète le dimanche, pour mon frère. »",
      "Il se retourne. Il s'appelle Colin. Il dit que sa mère dit que le lavoir déborde, ce soir. Il dit que la dernière fois qu'il a débordé en novembre, c'était l'année de la grande crue.",
      "Tu lui dis ce que tu sais : le paquet, la digue, l'apothicaire qui devait faire lever les Foulons à deux heures. Le paquet est parti chez un drapier avec un valet vert.",
      "« Ta mère dort place du Lavoir, Colin. Au rez-de-chaussée. »",
    ],
    choices: [
      { label: "« Ouvre la grille. Je cours, toi tu restes, tu dis que je me suis sauvée. »", test: { dom: "social", diff: -5, label: "Ouvrir une grille avec des mots" }, win: { to: "M_evasion" }, lose: { to: "M_pont" } },
    ] },
  M_evasion: { act: A, title: "La grille ouverte", place: "foulons", fx: { flag: "foulons:leves", time: 1.5 },
    text: [
      "Colin regarde la porte du poste, puis la grille, puis toi. Il prend la clé sur le clou. Ses mains tremblent.",
      "« Je viens avec toi, dit-il. Ma mère, je la réveille moi-même. »",
      "Vous sortez par la cour. La porte Saint-Rieul est fermée ; Colin a l'uniforme, le garde de la poterne vous laisse passer. Vous courez sur le raidillon. Au pont, Thomin vous voit passer, ouvre la bouche, et la referme.",
      "À une heure et demie, tu sonnes la cloche du lavoir. Colin tape aux portes avec sa hallebarde en criant « Le guet ! ». Les volets s'ouvrent. On voit un uniforme. On s'habille.",
    ],
    choices: [{ label: "Monter avec eux à Saint-Rieul", to: "M_cellule_fin" }] },
  M_cellule_fin: { act: A, title: "La courrière évadée", place: "hauteville", end: true, fx: { time: 4 },
    text: [
      "À trois heures, le quartier est sur le parvis. Tibo est contre toi, sous ta couverture. La mère de Colin a apporté ses beignets froids, et elle les distribue aux enfants.",
      "Au bout de la vallée, à la fenêtre de la Maison des Vannes, une seule lanterne. Elle reste seule.",
      "À cinq heures et demie, la digue cède. Le parvis entier entend la vague, puis la voit. Elle passe sur les Foulons. Quand elle est passée, il reste des toits, et mille personnes vivantes sur les marches de Saint-Rieul.",
      "À huit heures, le capitaine Rambert vient chercher Colin sur le parvis, pour avoir ouvert une grille sans ordre. Colin le suit sans résister. La foule regarde partir le garçon qui a frappé à toutes les portes. D'abord, elle se tait. Puis une femme crie son nom. Puis cent.",
      "Rambert lâche le bras de Colin au bas de la Côte.",
      "Le paquet est chez un drapier, et le vieux de la digue est mort cette nuit, seul. Tu n'as pas porté ce qu'on t'a donné à porter. Tu as porté autre chose, que personne ne t'a donné. On t'appellera la courrière évadée, aux Foulons, pendant vingt ans, et tu te demanderas toujours si c'est un compliment.",
    ] },

  // ------------------------------------------------------------------ Corlay woken by the Council
  C_quatre_maisons: { act: A, title: "Deux heures et demie", place: "hauteville", fx: { time: 0.25 },
    text: [
      "On frappe à ta porte à coups de pommeau d'épée. Tu descends en robe de chambre. Aude est derrière toi sur le palier.",
      "Dans ton vestibule, sous ton baromètre, le capitaine Rambert, qui ne te regarde pas, et Dame Hesdin, en manteau noir, appuyée sur sa canne. Derrière elle, un colosse en tablier de cuir.",
      "Rambert lit un papier à voix haute. *Le Conseil des Sept Maisons, réuni en péril.* Quatre signatures. La règle de Ferréol, que personne n'a utilisée depuis quarante ans. Tu la connais. Tu l'avais oubliée.",
      "« La clé, Corlay », dit Dame Hesdin.",
    ],
    choices: [
      { label: "Aller la chercher toi-même au coffre, et la lui remettre", to: "C_rendue" },
      { label: "« Ce Conseil est une farce de nuit. Rambert, raccompagnez Madame. »", to: "C_refus_conseil" },
    ] },
  C_rendue: { act: A, title: "La clé rendue", place: "hauteville", end: true, fx: { flag: "foulons:leves", time: 5.5 },
    text: [
      "Tu montes au cabinet. Tu fais glisser la carte. Tu tournes les deux clés. Tu prends la toile cirée sur la liasse au ruban noir. Tu prends aussi la liasse.",
      "Tu redescends. Tu donnes la clé au colosse en tablier. Tu donnes la liasse à Dame Hesdin.",
      "« Vous la lirez au Conseil à huit heures, dis-tu. Ou je la lirai. Comme vous voudrez. »",
      "Elle te regarde longtemps, sous ton baromètre. Puis elle dit : « Lisez-la vous-même. Ça vous fera du bien. »",
      "À trois heures et demie, de la fenêtre du salon, Aude et toi, vous voyez trois lanternes au bout de la vallée. Aude te prend la main. À quatre heures, la pluie. Au jour, les Foulons dans l'eau, et vivants sur le parvis. La digue tient.",
      "À huit heures, tu lis la liasse toi-même devant les Sept. Ta voix tremble au début, puis plus du tout. Tu retires ta candidature à la Charge. Tu gardes la présidence jusqu'au printemps, le temps de vider le lac. On te regarde autrement. Tu ne sais pas encore si c'est mieux.",
    ] },
  C_refus_conseil: { act: A, title: "Une farce de nuit", place: "hauteville", end: true, fx: { time: 5.5 },
    text: [
      "Rambert ne bouge pas. Il regarde l'ordre dans sa main, puis toi. Il fait ses comptes. Le Conseil le paie. Toi aussi. Ce soir, le Conseil a quatre voix, et toi une.",
      "« Monsieur, dit-il doucement. C'est un ordre du Conseil. »",
      "C'est Aude qui monte au cabinet. Tu l'entends faire glisser la carte, tourner les clés. Elle redescend avec la toile cirée. Elle la met dans les mains du colosse en tablier. Elle ne te regarde pas.",
      "Ils partent. Tu restes dans ton vestibule, en robe de chambre, sous ton baromètre. L'aiguille est sur *Tempête*.",
      "À huit heures, au Conseil, tu siégeras dans ton fauteuil de président. Dame Hesdin posera l'ordre de la nuit sur la table, avec ses quatre signatures, et le récit de ton refus, écrit par Rambert. Tu as tenu ta clé jusqu'au bout. Ta femme l'a rendue à ta place. On le saura dans toute la ville avant midi, et c'est ce dont on se souviendra de toi.",
    ] },

  // ------------------------------------------------------------------ Odon and the carriage with the anvil
  O_voiture_hesdin: { act: A, title: "L'enclume peinte", place: "pont", fx: { time: 0.25 },
    text: [
      "À minuit moins le quart, une voiture descend de la Haute-Ville, deux lanternes à la caisse. Sur la portière, une enclume peinte. Les forges Hesdin.",
      "Tu lèves la main devant les chevaux. Tu lèves ta lanterne vers la portière. Une vieille dame en noir, une canne entre les genoux. Sur le siège, à côté du cocher, un colosse en tablier de cuir, avec une corde et une lanterne.",
      "« Ordre du capitaine, Madame. Rien ne monte vers la digue. »",
      "« Je suis le Conseil, sergent. Qui donne les ordres à votre capitaine. »",
    ],
    choices: [
      { label: "Retirer ta hallebarde, et la saluer", to: "O_salut_hesdin" },
      { label: "« Alors je monte avec vous, Madame. Il vous faudra des bras. »", to: "O_monte_hesdin" },
    ] },
  O_salut_hesdin: { act: A, title: "Le salut", place: "pont", end: true, fx: { time: 6 },
    text: [
      "Tu retires ta hallebarde. Tu salues. La voiture passe le pont et prend la route de la Digue. Ses deux lanternes rapetissent entre les saules.",
      "Colin te regarde. « Le capitaine a dit rien, sergent. »",
      "« Le capitaine a un capitaine, Colin. Ce soir, elle est passée sur ton pont. »",
      "À deux heures et demie, la même voiture redescend à toute allure, vide, et prend le chemin des Foulons. Tu entends le cocher crier aux portes : « Au nom des forges Hesdin ! Debout ! »",
      "À quatre heures, la pluie. Au jour, la Sorge est dans les Foulons jusqu'aux fenêtres basses, le quartier sur le parvis, la digue debout. Nine a monté la Côte avec son homme, le berceau sur la tête.",
      "Rambert ne te demande rien. Il sait qui est passé sur le pont. Il sait qu'il n'a rien à dire à quelqu'un qui a salué une maison du Conseil. Tu as obéi, cette nuit, à la bonne personne. Tu ne savais pas, en prenant ta lanterne, qu'il y en avait une.",
    ] },
  O_monte_hesdin: { act: A, title: "Le sergent sur le marchepied", place: "digue", end: true, fx: { flag: "foulons:leves", time: 6.5 },
    text: [
      "Dame Hesdin te regarde. Elle voit ton insigne, ta manche, ta lanterne. « Montez, sergent. »",
      "Tu laisses le pont à Colin. Tu montes sur le marchepied, une main sur la galerie de la voiture. Au pied de la digue, tu portes la vieille dame dans les deux cents marches, à moitié, quand ses jambes ne veulent plus. Elle ne te remercie pas. Elle te serre le bras.",
      "Dans la galerie basse, l'eau à la taille, le vieux Vellard explique le pointeau au colosse. Tu tiens la corde avec la dame. Au vingtième tour, la vanne s'ouvre avec un bruit de canon, et la corde manque de vous arracher les bras.",
      "Tu redescends avec la voiture pour faire lever les Foulons. Tu cognes aux portes avec ta hallebarde, rue après rue. Tu commences par la rue du Lavoir, la troisième maison après la fontaine.",
      "À huit heures, tu montes au Conseil derrière Dame Hesdin, trempé, couvert de boue, ton insigne à la manche. Elle te fait entrer dans la grande salle. Elle dit aux Sept : « Le sergent Brasseur a quitté son pont cette nuit, contre l'ordre de son capitaine. Je demande qu'on le nomme capitaine. »",
      "On rit. Puis on regarde Rambert. On ne rit plus. Tu ne seras pas capitaine. Tu seras sergent de la digue, au printemps, quand on videra le lac. C'est mieux. Tu verras ta petite-fille grandir de là-haut.",
    ] },

  // ------------------------------------------------------------------ Bastien when the lady comes into the Chat Ferré
  B_dame_chat: { act: A, title: "Une dame au Chat Ferré", place: "hauteville", fx: { time: 0.25 },
    text: [
      "À une heure, la porte du haut s'ouvre, et la salle se tait. Une vieille dame en noir descend l'escalier du Chat Ferré, une marche après l'autre, avec une canne. Derrière elle, le vieux Rouvray, en bonnet de nuit sous son chapeau.",
      "Dame Hesdin. Dans une cave de dés, à une heure du matin.",
      "Elle traverse la salle. Elle s'arrête devant Malzieu, qui joue à la table d'à côté, le gilet ouvert. Elle lui parle à voix basse. Tu entends : *Conseil*, *quatre*, *règle de Ferréol*. Malzieu rit. Il est saoul. Il ne comprend pas.",
      "Dame Hesdin se redresse. Elle te voit. Elle sait qui tu es.",
    ],
    choices: [
      { label: "Te lever, et aider Malzieu à comprendre", test: { dom: "social", diff: -5, label: "Dégriser un drapier" }, win: { to: "B_malzieu_signe" }, lose: { to: "B_malzieu_rit" } },
      { label: "Baisser les yeux sur ton verre", to: "B_malzieu_rit" },
    ] },
  B_malzieu_signe: { act: A, title: "La quatrième maison", place: "hauteville", end: true, fx: { flag: "foulons:leves", time: 6.5 },
    text: [
      "Tu prends Malzieu sous le bras. Tu lui fais boire un pot d'eau froide. Tu lui dis, lentement, ce qu'on attend de lui, avec la voix que tu prends pour emprunter de l'argent : chaude, simple, sûre. Malzieu t'aime bien. Tout le monde aime bien Bastien Vellard, à une heure du matin.",
      "Il signe. Dans la petite salle de l'Hôtel, à deux heures, avec Dame Hesdin, Rouvray et Pons. Tu tiens la chandelle. Personne ne te demande de sortir.",
      "Dame Hesdin te regarde par-dessus la table. « Vous êtes le fils. Vous écoutiez, ce soir, derrière une porte. » Elle l'affirme. Tu gardes le silence. Elle hoche la tête. « Vous écoutez bien. Ça peut servir. »",
      "À trois heures et demie, de la fenêtre de la petite salle, trois lanternes au bout de la vallée. C'est ton père, avec la clé que Corlay a rendue. Tu restes à la fenêtre jusqu'au jour.",
      "Ton père meurt à midi. Tu n'arrives pas à temps pour lui dire ce que tu as fait à huit heures, ni ce que tu as fait à une heure. Il meurt en ignorant les deux. Tu porteras les deux. L'un des deux pèse un peu moins que l'autre, et tu sais lequel.",
    ] },
  B_malzieu_rit: { act: A, title: "Malzieu rit", place: "hauteville", end: true, fx: { time: 6.5 },
    text: [
      "Malzieu rit encore. Il propose à Dame Hesdin de jouer sa voix aux dés. Elle le regarde comme on regarde un cheval boiteux. Elle remonte l'escalier, une marche après l'autre, avec Rouvray derrière elle.",
      "La salle reprend ses dés. Tu restes à ta table. Tu as baissé les yeux pendant qu'une vieille femme cherchait quatre voix pour sauver ton père. Tu as fait ça avec le même visage qu'à huit heures, à la porte du jardin.",
      "À cinq heures et demie, le Chat Ferré tremble. Les bouteilles tombent. Maître Lucas court à la porte, puis il revient très lentement s'asseoir derrière son comptoir.",
      "Tu remontes dans la rue des Orfèvres. Au bout, entre deux maisons, on voit la vallée. Au bout de la vallée, il n'y a plus de digue, et plus de lumière à la fenêtre de la Maison des Vannes.",
      "Ce que Dame Hesdin a fait du reste de sa nuit, et ce qu'elle dira au Conseil à huit heures, tu l'apprendras avec toute la ville. Tu seras dans la salle. Elle te verra. Elle se souviendra de ton visage, au Chat Ferré, baissé sur un verre.",
    ] },

  // ------------------------------------------------------------------ Ilde and her patient of the forges
  I_hesdin: { act: A, title: "La goutte de Dame Hesdin", place: "hauteville", fx: { time: 0.75 },
    text: [
      "Tu caches le paquet derrière les bocaux. Tu prends ta trousse, ton baume de colchique. Au pont, le sergent Brasseur te laisse monter : une apothicaire chez une patiente, à dix heures du soir, c'est l'ordinaire.",
      "Dame Hesdin te reçoit dans son bureau, devant le feu, son pied malade sur un tabouret. Elle a soixante-dix ans et un regard de fondeur. Tu lui défais sa bande. Tu lui étales le baume. Et tu parles, sans lever les yeux de son pied.",
      "La veine. Deux doigts. L'orage de quatre heures. La clé dans ta boutique, derrière les sangsues. Le pont gardé. Le fils derrière la porte.",
      "Dame Hesdin écoute jusqu'au bout sans bouger son pied. Puis elle dit : « Il y a trois ans, j'ai voté contre. Ensuite je me suis tue. Ilde, vous êtes la première personne qui me le fait payer. »",
      "Elle appelle Barthélemy, son maître fondeur.",
    ],
    choices: [{ label: "Lui dire où est la clé, et la laisser faire", to: "I_hesdin_fin" }] },
  I_hesdin_fin: { act: A, title: "Ce qu'on dit à un pied malade", place: "foulons", end: true, fx: { flag: "foulons:leves", time: 6.5 },
    text: [
      "Barthélemy descend avec toi aux Foulons, dans la voiture des forges. Le sergent du pont voit l'enclume peinte et s'écarte. Barthélemy prend le paquet derrière les sangsues. Il repart vers la digue, au trot, sous le nez du guet, dans une voiture qu'aucun garde de Corvèze n'oserait arrêter.",
      "À deux heures, tu frappes chez les Mallet. Le quartier se lève. À trois heures et quart, du parvis, trois lanternes au bout de la vallée.",
      "Au jour, les Foulons dans l'eau, et vivants sur le parvis. La digue tient.",
      "À huit heures, Dame Hesdin entre au Conseil en boitant, son pied bandé de ta main. Elle dit tout. Elle dit d'où elle le tient : de son apothicaire, qui le tient du garde-vannes, qui l'a mesuré pendant trois ans. Le vote est remis au printemps.",
      "Tu remontes chez Anselme à midi. Il est mort, dans son fauteuil, près du baromètre. Les trois lanternes brûlent encore à sa fenêtre. Tu les éteins une à une. Tu as fait passer sa clé par la seule porte que personne ne gardait : le pied malade d'une vieille femme qui avait honte depuis trois ans.",
    ] },
};
