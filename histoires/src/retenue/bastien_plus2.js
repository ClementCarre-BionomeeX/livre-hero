// Bastien, second pass: the run to the bridge to take back what he sold, the dice against Malzieu at midnight (a
// drapier's vote, or his fullers, won at the table), and Pernelle's second key at the garden door. Five new endings.
var A = "I";
module.exports = {
  _add: {
    B_chat: [
      { label: "Courir au pont des Moulins, avant la courrière", if: { lu: "M_pont" }, to: "B_course_pont" },
    ],
    B_boire: [
      { label: "Repousser le pichet, et attendre les joueurs de minuit", if: { lu: "C_vote_nuit" }, to: "B_attendre" },
    ],
    B_dette_nuit: [
      { label: "Retenir la porte, et parler à Pernelle Daguet", if: { lu: "O_pernelle" }, to: "B_pernelle_jardin" },
    ],
  },

  // ------------------------------------------------------------------ the bridge
  B_course_pont: { act: A, title: "Le raidillon", place: "pont", fx: { time: 0.25 },
    text: [
      "Tu laisses tes vingt écus sur la table et tu remontes l'escalier en courant. Maître Lucas te crie quelque chose. La porte Saint-Rieul, le raidillon, les pavés mouillés : tu tombes une fois, tu te relèves avec la paume en sang.",
      "Au milieu du pont des Moulins, une lanterne accrochée à une hallebarde. Le sergent Brasseur tient sous son bras une toile cirée ficelée en croix. Un de ses jeunes emmène une fille en châle gris vers la Haute-Ville, par le bras. Elle se retourne pour regarder le paquet.",
      "Tu arrives une minute trop tard. Tu le sais. Tu marches quand même vers la lanterne.",
      "« Sergent. Ce paquet est pour mon père. Ce sont ses remèdes, de chez l'apothicaire. »",
      "Brasseur te regarde. Il t'a ramené trois fois du Chat Ferré à la Maison des Vannes, sur son épaule.",
    ],
    choices: [
      { label: "« Vous avez soigné votre femme avec les remèdes d'Ilde. Mon père en a besoin cette nuit. »", test: { dom: "social", diff: -15, label: "Mentir à un honnête homme" }, win: { to: "B_escorte" }, lose: { to: "B_pont_saisi" } },
    ] },
  B_pont_saisi: { act: A, title: "Ordre du capitaine", place: "pont", fx: { time: 0.25 },
    text: [
      "Brasseur soupèse le paquet. « Des remèdes, Vellard ? Ça pèse comme une barre de fer. » Il le garde sous son bras. « Ordre du capitaine. Rien ne monte vers la digue. Va te coucher. »",
      "Tu restes au bout du pont. Une demi-heure plus tard, un valet en livrée verte descend de la Haute-Ville, prend le paquet des mains du sergent et remonte vers la rue Haute.",
      "Tu sais où il va. Tu y étais à huit heures.",
    ],
    choices: [{ label: "Le suivre jusqu'à la maison Corlay", to: "B_corlay", fx: { time: 0.5 } }] },
  B_escorte: { act: A, title: "Les remèdes", place: "pont", fx: { item: "paquet", time: 0.25 },
    text: [
      "Brasseur regarde la toile cirée, puis toi. Il cherche quelque chose sur ton visage. Tu le laisses chercher.",
      "« Ton père est au plus mal ? »",
      "« Il meurt, sergent. »",
      "C'est la seule chose vraie que tu as dite. Brasseur le sent. Il te tend le paquet. « Le capitaine m'a dit : les porteurs. Toi, tu es le fils. » Il se tourne vers le jeune garde. « Ramène la petite. Elle n'a rien porté. »",
      "La courrière revient vers vous, le bras libre. Elle te regarde prendre son paquet avec les yeux qu'on a pour un voleur.",
    ],
    choices: [{ label: "« Viens avec moi. Tu me diras qui te l'a donné. »", to: "B_maelle_route" }] },
  B_maelle_route: { act: A, title: "Dix bornes à deux", place: "berge", fx: { time: 1.25 },
    text: [
      "Vous marchez côte à côte sur la route de la Digue. Elle s'appelle Maëlle. Elle a vingt-deux ans, un petit frère, un loyer en retard. Ilde lui a donné un écu d'argent pour porter ça à une passeuse, à la cabane des Loutres.",
      "« Et toi, demande-t-elle. Tu es qui, pour le garde ? »",
      "« Le fils du garde-vannes. »",
      "Elle marche un moment en silence. Puis : « Ilde m'a dit de me méfier de tout le monde. Elle a dit : surtout de ceux qui connaissent le chemin. »",
      "La digue grandit devant vous, noire, avec sa lanterne. À mi-chemin de l'escalier, tu t'arrêtes. Tu as le paquet dans les bras, la courrière à côté de toi, et ton père en haut des deux cents marches.",
    ],
    choices: [
      { label: "Monter, et donner la clé à ton père sans rien lui dire", to: "B_retour_pere" },
      { label: "Monter, et lui dire d'abord ce que tu as fait à huit heures", to: "B_confesse_pere" },
    ] },
  B_retour_pere: { act: A, title: "Le fils qui rapporte la clé", place: "digue", end: true, fx: { flag: "foulons:leves", time: 6 },
    text: [
      "Ton père t'ouvre. Il voit la toile cirée dans tes bras, et la courrière derrière toi. Il se tait. Il te prend le visage dans ses mains froides, et il le garde un long moment.",
      "À trois heures, vous descendez tous les trois à la vanne. Maëlle prend un rayon, toi l'autre. Ton père tourne la clé. Quarante tours. La digue rugit.",
      "Maëlle redescend à deux heures, avant la vanne, pour lever les Foulons avec Ilde. Au jour, le quartier est sur le parvis, la Sorge dans les rues, la digue debout.",
      "Ton père meurt à midi. Avant de mourir, il dit à Ilde, devant toi : « Mon fils a passé le pont. » Il le dit avec une fierté qui te brûle.",
      "Le lendemain, le Conseil te confirme dans la Charge des Vannes, à quatre voix contre trois. Corlay vote contre. Il te regarde pendant tout le vote. Il sait ce que tu as fait à huit heures, et il sait que tu le sais. Il a la lettre de ton père, sans la clé, et toi tu as la clé.",
      "Tu as vingt ans de Charge devant toi, et dans cette salle un homme qui peut te défaire d'une phrase. Tu apprendras à vivre avec. Ton père, lui, est mort fier de toi.",
    ] },
  B_confesse_pere: { act: A, title: "Avant la clé", place: "digue", end: true, fx: { flag: "foulons:leves", time: 6 },
    text: [
      "Ton père t'ouvre. Tu restes sur le seuil, le paquet serré contre toi.",
      "« À huit heures, je suis allé chez Corlay. Je lui ai dit ton plan. Il a payé mes dettes. Le pont était gardé à cause de moi. Cette fille a été arrêtée à cause de moi. » Tu lui tends la toile cirée. « Et je l'ai reprise au sergent avec un mensonge. Voilà. »",
      "Ton père prend la clé. Il regarde Maëlle, puis toi. Il dit : « Entrez. Il fait froid. »",
      "C'est tout ce qu'il dit de la nuit. Vous tournez la roue, tous les trois. Maëlle est redescendue lever les Foulons. Au jour, la digue tient, le quartier est vivant sur le parvis.",
      "À onze heures, ton père t'appelle près du fauteuil. Il te donne son carnet de mesures, avec trois feuilles pliées entre les pages. « Le Conseil a payé tes dettes il y a trois ans, dit-il. Pour que je me taise. Moi aussi, j'ai été vendu, et j'ai pris l'argent. Nous sommes deux. » Il meurt à midi.",
      "La Charge, tu la laisses aux autres. Tu lis les trois feuilles devant le Conseil le jour de l'enterrement, et tu dis ce que tu as fait, toi aussi, à huit heures. Tu quittes la salle avant le vote. Dehors, la courrière t'attend sur les marches. Elle marche à côté de toi jusqu'au pont, muette.",
    ] },

  // ------------------------------------------------------------------ the dice at midnight
  B_attendre: { act: A, title: "La tête froide", place: "hauteville", fx: { time: 1.25 },
    text: [
      "Tu repousses le pichet. Tu demandes de l'eau. Maître Lucas lève un sourcil.",
      "Tu sais comment finissent les soupers de la rue Haute. À minuit, Aubrac et Malzieu, les deux voix sûres de Corlay, descendent au Chat Ferré finir la nuit, en riant fort. Malzieu joue gros quand il a bu. Il perd gros, et il paie toujours, parce qu'il a deux moulins aux Foulons et qu'il se croit riche.",
      "Tu te mets à la table du fond, celle qui a la meilleure chandelle. Tu as vingt écus. Tu les fais rouler entre tes doigts. Tu attends.",
    ],
    choices: [{ label: "Attendre minuit", to: "B_malzieu" }] },
  B_malzieu: { act: A, title: "Les voix sûres", place: "hauteville", fx: { time: 0.25 },
    text: [
      "À minuit et quart, la porte du haut s'ouvre sur des rires. Aubrac descend le premier, gros, rouge, le gilet ouvert, avec la majesté d'un homme qui vient de bien souper aux frais d'un autre. Malzieu le suit, maigre, élégant, l'œil brillant de vin. Ils voient le fils Vellard seul à la table du fond, et ils échangent un regard.",
      "« Vellard ! dit Malzieu. On a parlé de vous, ce soir. On a même bu à votre santé. »",
      "Il s'assoit en face de toi. Il pose une bourse sur la table. Aubrac s'assoit à côté, pour regarder.",
      "Maître Lucas t'apporte les dés. Il les pose devant toi, du côté opposé à Malzieu. Ce sont les siens, ceux du tiroir de gauche. Il te regarde une seconde de plus que d'habitude.",
    ],
    choices: [
      { label: "Jouer avec les dés de maître Lucas", test: { dom: "discretion", diff: -5, label: "Tricher sans trembler" }, win: { to: "B_gagne" }, lose: { to: "B_perdu" } },
      { label: "Demander d'autres dés, et jouer honnêtement", test: { dom: "social", diff: -20, label: "Gagner à la loyale" }, win: { to: "B_gagne" }, lose: { to: "B_perdu" } },
    ] },
  B_gagne: { act: A, title: "Mille écus sur parole", place: "hauteville", fx: { time: 1.25 },
    text: [
      "À une heure et demie, Malzieu a perdu sa bourse, sa montre et sa parole pour mille écus. Il signe la reconnaissance de dette sur une page du livre noir de maître Lucas, d'une main qui penche. Aubrac est parti depuis longtemps.",
      "Malzieu te regarde, dégrisé d'un coup. « Mille écus, Vellard. Je ne les ai pas. Vous le savez. »",
      "« Je sais. »",
      "Il attend. Il a compris qu'il y a autre chose. Il a été drapier trente ans.",
    ],
    choices: [
      { label: "« Votre voix, demain à huit heures. Contre Corlay. »", to: "B_des" },
      { label: "« Vos fouleurs. Réveillez-les. Qu'ils lèvent les Foulons, à deux heures. »", to: "B_malzieu_foulons" },
    ] },
  B_des: { act: A, title: "La Charge aux dés", place: "hauteville", end: true, fx: { time: 6 },
    text: [
      "Malzieu dit oui. Il est à court de choix. Il sort du Chat Ferré à deux heures, sous les premières gouttes, voûté.",
      "Tu restes à la table du fond. Tu fais le compte : Rouvray, Pons et Garnier pour toi, par fidélité à ton père. Malzieu, maintenant. Quatre. Corlay, Aubrac, et Dame Hesdin qui fera ce qu'elle voudra : trois au plus. Tu viens de gagner la Charge des Vannes aux dés.",
      "À cinq heures et demie, le Chat Ferré tremble. Les bouteilles tombent des étagères. Maître Lucas court à la porte, puis il revient très lentement s'asseoir derrière son comptoir.",
      "À huit heures, le Conseil se réunit dans une ville qui a perdu son quartier bas et compte ses morts. On vote quand même, parce qu'il faut quelqu'un pour la digue, ou ce qu'il en reste. Malzieu lève la main pour toi, le regard sur la table. Quatre voix contre trois.",
      "La Charge des Vannes est à toi pour vingt ans. Ton père est mort cette nuit dans sa maison, au bout de la digue, quand la digue est partie. Tu as gardé la tête froide toute la nuit, comme tu le voulais. Tu as joué juste. Tu as gagné. Et entre minuit et cinq heures et demie, l'idée t'a manqué de demander autre chose à un homme qui te devait mille écus.",
    ] },
  B_malzieu_foulons: { act: A, title: "Les fouleurs de Malzieu", place: "foulons", end: true, fx: { flag: "foulons:leves", time: 6 },
    text: [
      "Malzieu te regarde comme si tu avais perdu l'esprit. Puis il voit ton visage. Il se lève.",
      "Vous descendez ensemble aux Foulons, par le pont. Le sergent Brasseur voit passer un drapier du Conseil et le fils Vellard bras dessus bras dessous, et il s'écarte, la bouche ouverte. Malzieu frappe chez son contremaître, rue des Cardeurs. Le contremaître réveille les fouleurs. Les fouleurs réveillent les rues.",
      "À trois heures, le quartier monte la Côte. Malzieu marche à côté de toi, dégrisé, les souliers dans la boue. Il demande : « C'est vrai, cette histoire de digue ? » Tu réponds : « Mon père le dit. » Il se tait.",
      "À cinq heures et demie, la digue cède. Du parvis de Saint-Rieul, au milieu de mille personnes vivantes, tu regardes la vague passer sur les Foulons. Puis tu regardes le bout de la vallée, là où était la Maison des Vannes, au bout de la digue. Le vide.",
      "Ton père est mort cette nuit, seul, avec sa lanterne. Tu as fait monter un quartier avec un coup de dés truqué et la dette d'un ivrogne. Entre minuit et deux heures, tu as oublié ton père. Tu y penseras désormais tous les jours.",
      "Malzieu te rend ta reconnaissance de dette le lendemain, sur les marches de l'Hôtel. Tu la déchires devant lui. Il hoche la tête. Ce sont vos derniers mots.",
    ] },
  B_perdu: { act: A, title: "La parole d'un Vellard", place: "hauteville", end: true, fx: { time: 4.5 },
    text: [
      "Tu perds. Les dés tournent mal, ce soir, ou les mains tremblent. À une heure, tes vingt écus sont chez Malzieu. À une heure et demie, tu joues sur parole. À deux heures, tu as signé trois cents écus dans le livre noir de maître Lucas, sur la page qu'il avait rayée à neuf heures.",
      "Malzieu se lève, satisfait, en bâillant. « On se reverra à l'Hôtel, Vellard. Après le vote. »",
      "Tu restes seul à la table du fond. Maître Lucas range ses dés dans le tiroir de gauche, et le tiroir reçoit toute son attention.",
      "À quatre heures, la pluie. Tu penses à la ligne rayée et à la ligne neuve, juste en dessous. Tu as vendu ton père pour effacer l'une, et tu as écrit l'autre de ta main en trois heures.",
      "Dehors, au bout de la rue des Orfèvres, entre deux maisons, on voit la vallée. À la fenêtre de la Maison des Vannes, une seule lanterne.",
      "Le jeu reprend toujours ce qu'il donne. Ton père le disait. La suite de la nuit, ce sont d'autres qui la tiennent.",
    ] },

  // ------------------------------------------------------------------ Pernelle's second key
  B_pernelle_jardin: { act: A, title: "La porte du jardin", place: "hauteville", fx: { time: 0.25 },
    text: [
      "Tu retiens la porte avec ton épaule avant qu'elle se ferme. Pernelle Daguet recule d'un pas.",
      "« Mademoiselle. Ce que j'ai dit à Monsieur, tout à l'heure. Que la digue cède cette nuit. C'est vrai. Mon père l'a mesurée. Vous l'avez écrit. Vous écrivez tout. »",
      "Elle te regarde longtemps, dans la lumière de la lanterne du jardin. Puis elle dit, très vite, très bas :",
      "« Le coffre a deux clés. Monsieur garde l'une sur lui. L'autre est dans mon pupitre depuis douze ans. Revenez à minuit, quand les invités partent. Pas avant. »",
      "Elle referme la porte.",
    ],
    choices: [{ label: "Attendre minuit dans la rue Haute", to: "B_attente_jardin", fx: { time: 1.25 } }] },
  B_attente_jardin: { act: A, title: "La rue Haute, de onze heures à minuit", place: "hauteville",
    text: [
      "Tu attends dans l'encoignure d'une porte cochère, en face de la maison Corlay. La bourse de vingt écus pèse dans ta poche. Tu pourrais aller la boire. Tu restes.",
      "Par les fenêtres du premier étage, tu vois le souper finir. Corlay qui rit. Une femme en gris perle, au bout de la table, qui garde son sérieux. Puis les invités sortent dans la rue, à minuit, en riant fort, et ils passent à deux pas de toi sans te voir.",
      "La porte du jardin s'ouvre. Pernelle Daguet te met dans les bras une toile cirée ficelée en croix. Elle a gardé le froid du coffre.",
      "« Allez-vous-en vite », dit-elle. Et elle referme.",
    ],
    choices: [{ label: "Descendre vers le pont", to: "B_pont_minuit", fx: { item: "cle_vannes" } }] },
  B_pont_minuit: { act: A, title: "Le sergent, à minuit", place: "pont", fx: { time: 0.25 },
    text: [
      "La porte Saint-Rieul se ferme derrière toi. Le raidillon. Au milieu du pont des Moulins, la lanterne, la hallebarde, et Brasseur, seul. Ses deux jeunes dorment contre le parapet.",
      "Il voit ce que tu portes. Il a vu passer la même toile cirée sous le bras du valet vert, il y a deux heures, dans l'autre sens.",
      "« Vellard. Elle est remontée chez Corlay à dix heures. Et la voilà qui redescend avec toi. »",
      "« La secrétaire me l'a donnée. Elle sait ce qu'elle fait. Moi, j'apprends. »",
      "Brasseur regarde longtemps la rue Haute, là-haut, la maison aux fenêtres qui s'éteignent une à une. Puis il décroche sa lanterne et te la tend. « Prends ça. La route est noire. »",
    ],
    choices: [{ label: "Courir vers la digue", to: "B_route_fin", fx: { time: 1 } }] },
};
