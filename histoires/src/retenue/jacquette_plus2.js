// Jacquette, second pass: the boards of the spillway that keep the lake high (told by Gaudry, a new savoir), the
// son of the old man who comes to the cabin to dive for the pointeau, and the barge down to Ilde's shop at midnight.
// Five new endings.
var A = "I";
module.exports = {
  _savoirs: {
    hausses: { title: "Les hausses du déversoir", text: "Au déversoir de la pointe des Hêtres, six planches de chêne gardent le lac deux pieds plus haut depuis août. On devait les retirer à la Saint-Michel." },
  },
  _add: {
    J_octroi_prise: [
      { label: "Dire à Gaudry que le lac est trop haut, et pourquoi", if: { savoir: "veine_vue" }, to: "J_gaudry_lac" },
    ],
    J_pied: [
      { label: "Aller seule au déversoir, abattre les hausses", if: { savoir: "hausses" }, to: "J_deversoir", via: "seule", fx: { flag: "deversoir:seule", time: 0.75 } },
    ],
    J_cabane: [
      { label: "Ouvrir à celui qui frappe", if: { lu: "B_galerie_seul" }, to: "J_bastien_porte" },
      { label: "Descendre la Sorge en barque, jusqu'à l'apothicairerie", if: { lu: "I_maison" }, to: "J_foulons_barque" },
    ],
  },

  // ------------------------------------------------------------------ the boards of the spillway
  J_gaudry_lac: { act: A, title: "Le lac de Gaudry", place: "lac", fx: { learn: "hausses", time: 0.5 },
    text: [
      "Au poste, Gaudry t'assoit près du poêle. Il trempe sa plume. Tu poses ta main sur son registre.",
      "« Gaudry. Tu as vu le lac, ce soir. Tu l'as dit toi-même : jamais si haut. Au pied de la digue, il sort de l'eau brune entre les pierres. Grosse comme mon bras. Cet été, elle était grosse comme mon doigt. »",
      "Gaudry lève les yeux. Il a passé trente ans sur ce lac. Le jeune douanier, Firmin, s'arrête de bourrer sa pipe.",
      "« C'est les hausses, dit Gaudry après un long moment. Au déversoir de la pointe des Hêtres. Six planches de chêne sur le seuil, pour garder deux pieds d'eau de plus. Le Conseil les a fait poser en août, à cause de la sécheresse, pour que les moulins tournent. On devait les retirer à la Saint-Michel. » Il se gratte la joue. « Personne n'a donné l'ordre. »",
      "Il regarde ses sacs de sel saisis, puis toi, puis le poêle.",
    ],
    choices: [
      { label: "« Viens avec moi les abattre. Toi, Firmin, et moi. Tu as des haches au poste. »", test: { dom: "social", diff: -5, label: "Décider un douanier" }, win: { to: "J_deversoir", via: "gaudry", fx: { flag: "deversoir:gaudry", time: 0.5 } }, lose: { to: "J_octroi" } },
    ] },
  J_deversoir: { act: A, title: "Le déversoir des Hêtres", place: "lac", fx: { time: 0.25 },
    text: [
      { via: "gaudry", text: "Gaudry rame, Firmin tient la lanterne, toi les trois haches entre tes genoux. Vous accostez à la pointe des Hêtres à minuit et demi." },
      { via: "seule", text: "Tu reprends le lac à rebours, ton sel sous la bâche, jusqu'à la pointe des Hêtres. Tu accostes à minuit et demi, une hache de bûcheron à la main." },
      "Le déversoir est un seuil de pierre long de vingt pas, entre deux culées, au ras du lac. Sur le seuil, six planches de chêne épaisses comme une main, calées dans des rainures et serrées par des coins de fer. Le lac les pousse de tout son poids. L'eau passe déjà par-dessus, en une lame mince et noire.",
      "En contrebas du seuil, le coursier de pierre descend dans la forêt, vers le ruisseau de la Combe. Au bout du coursier, dans la clairière, il y a trois lueurs rouges : les meules des charbonniers. Ils dorment à côté, dans leurs huttes, pour surveiller le feu.",
    ],
    choices: [
      { label: "Descendre d'abord réveiller les charbonniers", to: "J_charbonniers", fx: { time: 0.5 } },
      { label: "Attaquer les coins tout de suite", to: "J_hache", fx: { flag: "charbonniers:surpris" } },
    ] },
  J_charbonniers: { act: A, title: "La clairière des meules", place: "lac",
    text: [
      "Tu dévales le coursier à sec, sur la mousse glissante. Dans la clairière, les huttes de branches sont serrées contre les meules qui fument. Tu cognes sur les montants avec le manche de ta hache.",
      "Un homme sort, puis deux, puis une femme avec un petit dans les bras. Ils ont le visage noir de suie et les yeux rouges. Ils te reconnaissent : la Loutre leur vend du sel, à eux aussi.",
      "« On va lâcher le déversoir, dis-tu. L'eau va descendre par ici. Montez sur la butte, avec vos bêtes. »",
      "Le plus vieux regarde ses meules. Elles brûlent depuis neuf jours. Si l'eau passe dessus, c'est neuf jours de travail en fumée froide. Il crache dans ses mains.",
      "« Il faut combien de bras, là-haut ? »",
    ],
    choices: [{ label: "« Tous ceux que vous avez. »", to: "J_hache", fx: { flag: "charbonniers:aident" } }] },
  J_hache: { act: A, title: "Les coins de fer", place: "lac", fx: { time: 1.5 },
    text: [
      { if: { has: "charbonniers:aident" }, text: "Les charbonniers montent avec des masses et des pinces. Ils connaissent le bois mieux que toi : ils frappent les coins de biais, là où le fer a rouillé dans le chêne." },
      { if: { has: "deversoir:gaudry" }, text: "Gaudry frappe comme il fait tout, lentement, sans s'arrêter. Firmin rate sa première planche et se blesse au pied. Il continue en boitant." },
      { if: { has: "deversoir:seule" }, text: "Tu es seule. La hache rebondit sur le fer. Le chêne mouillé est dur comme de la pierre." },
      "La première planche cède à une heure et quart. Elle part d'un coup, aspirée, et l'eau s'engouffre par le vide avec un bruit de tonnerre. Le seuil tremble sous vos pieds.",
    ],
    choices: [
      { label: "Continuer, planche après planche, dans le courant", test: { dom: "nature", diff: 0, label: "Tenir sur le seuil" }, win: { to: "J_lac_baisse" }, lose: { to: "J_hache_chute" } },
    ] },
  J_hache_chute: { act: A, title: "Le coursier", place: "lac", fx: { time: 0.5 },
    text: [
      "Une planche cède sous ta hache plus tôt que prévu. Le courant te prend les jambes. Tu tombes dans le coursier, et l'eau te roule sur la pierre lisse, vers la forêt, en te cognant partout.",
      "Une main t'attrape par la tresse. Tu ne sais pas laquelle. On te tire sur la culée, et tu vomis l'eau du lac sur la mousse.",
      "Tu as le bras gauche ouvert du coude au poignet. Tu le serres dans ton foulard. Tu reprends la hache de la main droite.",
    ],
    choices: [{ label: "Retourner sur le seuil", to: "J_lac_baisse" }] },
  J_lac_baisse: { act: A, title: "Deux pieds", place: "lac", fx: { time: 2.5 },
    text: [
      { if: { has: "deversoir:seule" }, text: "À quatre heures, tu as abattu deux planches sur six. Tes mains sont en sang. La pluie commence. Les quatre autres planches tiennent, et le lac passe par le vide comme par une porte." },
      { if: { not: { has: "deversoir:seule" } }, text: "À trois heures, la sixième planche s'en va. Le lac passe tout entier sur le seuil, un torrent de deux pieds de haut, qui descend le coursier et entre dans la forêt en couchant les fougères." },
      { if: { has: "charbonniers:surpris" }, text: "En bas, dans la clairière, des cris. Les lueurs rouges s'éteignent l'une après l'autre sous l'eau, dans un sifflement de vapeur. Des silhouettes noires courent vers la butte, une femme avec un enfant, un homme qui tire un âne. Personne ne t'avait vue venir." },
      "Tu restes sur la culée, à regarder le lac. Il descend. Lentement, si lentement qu'il faut une heure pour le voir : une ligne de vase mouillée sur les rochers de la pointe, d'abord large comme un doigt, puis comme une main.",
      "Au bout du lac, sur la digue, la lumière de la Maison des Vannes est toujours seule.",
    ],
    choices: [
      { label: "Ramer jusqu'à la digue, au jour", to: "J_hausses", hide: { has: "deversoir:seule" } },
      { label: "Ramer jusqu'à la digue, au jour", to: "J_hausse_seule", hide: { not: { has: "deversoir:seule" } } },
    ] },
  J_hausses: { act: A, title: "En plein jour", place: "digue", end: true, fx: { time: 3 },
    text: [
      "Au jour, sous la pluie, tu arrives au pied de la digue avec Gaudry. Le bouillon brun sort toujours du mur. Il est plus gros que cette nuit. La pierre autour a commencé à bouger : un bloc s'est avancé d'un doigt, et l'eau sort par les joints tout autour.",
      "À sept heures, le mur se met à cracher par dix trous. La berge est déjà pleine de monde, parce qu'il fait jour, et qu'à Corvèze on monte voir quand la Sorge est brune. On voit la digue suer. On voit les pierres bouger. Quelqu'un crie. Toute la vallée court vers les hauteurs, en plein jour, les enfants dans les bras.",
      "À sept heures et demie, la digue s'ouvre. Lentement, pierre après pierre, parce que le lac a deux pieds de moins à pousser. La vague qui descend la vallée est brune et haute, et les Foulons sont vides quand elle les prend.",
      "Le vieux garde-vannes est sorti sur le seuil de sa maison, au bout de la digue, du côté qui tient. Il regarde l'eau partir. Gaudry ôte son chapeau.",
      { if: { has: "charbonniers:surpris" }, text: "Le soir, tu apprends qu'un charbonnier s'est cassé la jambe en fuyant la clairière dans le noir, et que leurs meules sont perdues. Tu leur porteras du sel tout l'hiver, sans le leur faire payer." },
      { if: { has: "charbonniers:aident" }, text: "Le soir, les charbonniers descendent en ville, noirs de suie, voir ce qu'est devenue la vallée. Le plus vieux te serre la main sans rien dire. Leurs meules sont perdues. Ils sont vivants, et ils savent ce qu'ils ont fait de leur nuit." },
      "Au Conseil, Gaudry raconte les hausses, posées en août et oubliées. Le Conseil cherche longtemps qui devait donner l'ordre de les retirer. Le registre du Conseil dit : la maison Corlay.",
    ] },
  J_hausse_seule: { act: A, title: "Un quart d'heure", place: "foulons", end: true, fx: { time: 2 },
    text: [
      "Tu rames jusqu'au pied de la digue dans la pluie, avec une seule main. Le bouillon brun est là. Il est deux fois plus gros que cette nuit.",
      "À cinq heures et demie, rien. Tu attends, la rame en travers des genoux. À cinq heures trois quarts, la digue cède.",
      "Tu la vois céder de tout près : le mur se fend en long, puis il s'ouvre comme une porte, et le lac passe. Ta barque est déjà dans le canal de fuite, tirée à l'abri de la culée. Tu te couches au fond.",
      "Quand tu descends en ville, l'après-midi, on parle d'un quart d'heure. La première vague a pris les Foulons un quart d'heure plus tard qu'on ne l'aurait cru. Les lavandières de la rue du Lavoir étaient déjà debout, pour le linge du lundi, et elles ont eu le temps de monter. Au Pichet, le père Mallet a eu le temps de descendre de son lit et de grimper à la poutre.",
      "Tu n'as abattu que deux planches. Tu le sais. Deux planches de chêne, un quart d'heure, et une centaine de personnes vivantes qui ignoreront toujours ton nom. C'est peu. Tu le gardes pour toi. Tu vas t'asseoir sur le quai, et tu regardes tes mains.",
    ] },

  // ------------------------------------------------------------------ the son at the cabin
  J_bastien_porte: { act: A, title: "Le fils du vieux", place: "berge", fx: { time: 0.25 },
    text: [
      "On frappe à ta porte. C'est un homme jeune, en habit de ville trempé, qui sent le vin, la boue et la peur. Tu le reconnais. Tu l'as vu au bras de son père, aux enterrements. Bastien Vellard.",
      "« La Loutre. Mon père t'a donné la clé de la grille du canal. Mène-moi sous la digue par l'eau. Jusqu'à la galerie basse. »",
      "« Ton père est là-haut. Prends l'escalier. »",
      "« Il ne doit pas me voir. » Il serre les mâchoires. « Il y a un moyen d'ouvrir la vanne sans la clé. Il me l'a montré quand j'avais huit ans. Il faut descendre sous l'eau. »",
    ],
    choices: [
      { label: "Le prendre dans ta barque", to: "J_bastien_canal" },
      { label: "Lui fermer la porte au nez", back: "J_cabane" },
    ] },
  J_bastien_canal: { act: A, title: "Le canal de fuite", place: "digue", fx: { time: 0.5 },
    text: [
      "Tu prends une corde de chanvre, ta lanterne sourde, et tu le fais asseoir à l'avant. Tu passes la grille. Le canal de fuite s'enfonce sous la digue en tunnel, noir, voûté, avec l'eau qui coule vers toi.",
      "Bastien parle tout bas, sans que tu lui demandes rien. Il dit qu'il a fait quelque chose ce soir. Il ne dit pas quoi. Il dit que c'est à cause de lui que le paquet n'arrive pas.",
      "Au bout du tunnel, une échelle de fer monte vers la galerie. Vous montez. L'eau de la galerie vous prend à la taille. Il fait si froid que Bastien se met à claquer des dents tout de suite.",
      "La veine est là, une fente noire qui pleure. Bastien passe devant elle sans la regarder. Il compte ses pas jusqu'à un anneau scellé au mur.",
    ],
    choices: [
      { label: "Lui attacher la corde à la taille, et la tenir", test: { dom: "nature", diff: -5, label: "Tenir la corde" }, win: { to: "J_bastien_pointeau" }, lose: { to: "J_bastien_pointeau", fx: { flag: "bastien:emporte" } } },
    ] },
  J_bastien_pointeau: { act: A, title: "Sous l'eau", place: "digue", fx: { time: 1 },
    text: [
      "Bastien plonge. Tu tiens la corde passée dans l'anneau, les pieds calés contre la paroi. Il remonte, il respire, il replonge. Trois fois. Quatre. La cinquième fois, la corde se tend d'un coup dans tes mains.",
      "La vanne s'ouvre avec un bruit de canon. L'eau de la galerie part vers le fond, aspirée.",
      { if: { not: { has: "bastien:emporte" } }, text: "La corde te brûle les paumes. Tu tiens. Tu tires. Bastien ressort de l'eau au bout de la corde, le pointeau de bronze serré contre la poitrine, comme un nouveau-né." },
      { if: { has: "bastien:emporte" }, text: "La corde file entre tes paumes, t'arrache la peau, et part. Bastien disparaît vers le fond avec elle. Tu cours dans l'eau, tu tombes, tu te relèves. Tu le retrouves dans le canal de fuite, au pied de l'échelle, accroché à un barreau, la tête à peine hors de l'eau. Tu le tires dans ta barque. Il respire. Il a encore le pointeau de bronze dans une main." },
      "Vous restez assis sur la margelle, dans le noir, à écouter la digue rugir. Bastien tremble. Puis il parle.",
      "« À huit heures, je suis allé chez Corlay. J'ai vendu le plan de mon père pour quatre cents écus. C'est pour ça que le paquet n'est pas venu. »",
    ],
    choices: [
      { label: "« Monte le lui dire toi-même. »", to: "J_fils_monte" },
      { label: "« Personne ne le saura par moi. Viens, je te ramène en ville. »", to: "J_secret_fils" },
    ] },
  J_fils_monte: { act: A, title: "L'escalier de service", place: "digue", end: true, fx: { time: 3 },
    text: [
      "Bastien monte l'escalier de service, une marche après l'autre, avec le pointeau dans les mains. Tu montes derrière lui.",
      "Le vieux est dans sa cuisine, dans son fauteuil, une seule lanterne à la fenêtre. Il a entendu la vanne. Il voit son fils entrer, trempé, avec le bouchon de bronze. Il voit aussi son visage.",
      "Bastien pose le pointeau sur la table. Il dit tout, debout, sans baisser les yeux. Corlay, les quatre cents écus, la porte du jardin.",
      "Le vieux écoute jusqu'au bout. Il regarde le pointeau. Il dit : « Tu t'en souvenais. »",
      "Puis il ferme les yeux, longtemps. Tu sors sur le seuil pour les laisser seuls. Il pleut. En bas, la Sorge monte, brune, vers les Foulons.",
      "Au jour, tu redescends avec ta barque. On te dira plus tard que le fils est resté avec son père jusqu'à midi, jusqu'à la fin, et qu'il est allé au Conseil le lendemain dire lui-même ce qu'il avait fait. Le Conseil lui a donné la Charge quand même. Ou à cause de ça. Lequel des deux, tu l'ignores encore.",
    ] },
  J_secret_fils: { act: A, title: "Ce que tu sais de lui", place: "foulons", end: true, fx: { time: 3 },
    text: [
      "Tu ramènes Bastien par le canal, puis par la Sorge, dans la pluie. Tu le déposes au quai des Moulins à cinq heures. Il part vers la Haute-Ville sans se retourner, le pointeau sous sa veste.",
      "Au jour, la Sorge est haute de cinq pieds. La digue tient. Les Foulons ont de l'eau jusqu'aux fenêtres, et des gens sur les toits, parce que personne ne les a prévenus. Tu passes la matinée à les descendre dans ta barque.",
      "À midi, on te dit que le vieux garde-vannes est mort dans son fauteuil. On te dit aussi que son fils a ouvert la vanne cette nuit, seul, en héros, et que le Conseil l'a confirmé dans la Charge à huit heures.",
      "Le soir, Bastien Vellard passe sur le quai, en noir. Il te voit. Il s'arrête une seconde. Puis il continue.",
      "Tu as promis. Tu tiens ta promesse. Mais chaque fois qu'il passera sur le quai, pendant vingt ans, il saura que tu sais, et toi tu sauras qu'il le sait. Dans cette vallée, ça s'appelle une dette. Un jour, tu la réclameras.",
    ] },

  // ------------------------------------------------------------------ down to the shop at midnight
  J_foulons_barque: { act: A, title: "Sous l'arche", place: "pont", fx: { time: 0.5 },
    text: [
      "Tu laisses le sel dans les roseaux. Tu pousses ta barque dans la Sorge, et tu te laisses descendre avec le courant, sans ramer, à plat ventre, la lanterne éteinte.",
      "Au pont des Moulins, la lanterne du guet brûle au milieu du tablier. Tu entends les voix au-dessus de toi : trois hommes, et l'un d'eux parle de sa fille. Tu passes sous l'arche du milieu, dans le noir, à une perche d'eux.",
      "Les Foulons dorment. L'apothicairerie a encore de la lumière au premier étage.",
    ],
    choices: [{ label: "Frapper chez Ilde", to: "J_ilde_nuit" }] },
  J_ilde_nuit: { act: A, title: "L'apothicaire", place: "foulons", fx: { time: 0.5 },
    text: [
      "Ilde Saunier t'ouvre en robe de chambre, une bougie à la main. Elle a cinquante-huit ans et des yeux qui ne dorment pas. Elle te reconnaît à ta tresse avant de voir ton visage.",
      "« Jacquette ? Le paquet. Tu l'as eu ? »",
      "Elle te fait monter. Elle te dit tout, vite, à voix basse : le vieux, la veine, la clé, la lettre, Bastien derrière la porte, le guet sur le pont. Elle a donné le paquet à une courrière à neuf heures, une fille des Foulons, Maëlle Ternier. Elle ne sait pas où est Maëlle.",
      "« Le pont est gardé, dis-tu. Si elle est maligne, elle a pris la berge, de l'autre côté. Elle a pu laisser le paquet chez moi. »",
      "Ilde regarde la pendule. Minuit et demi. « Il faut lever le quartier à deux heures. Il me faut quelqu'un qui crie fort. Et il faut quelqu'un à la cabane. »",
    ],
    choices: [
      { label: "« Lève le quartier. Moi, je remonte à la cabane. »", to: "J_pierre_tard", fx: { flag: "foulons:leves", time: 1.5 } },
      { label: "« Je reste. Je crie plus fort que toi. »", to: "J_quartier_debout" },
    ] },
  J_pierre_tard: { act: A, title: "À contre-courant", place: "berge", fx: { item: "paquet", time: 0.5 },
    text: [
      "Remonter la Sorge à la rame, de nuit, contre le courant, te prend une heure et demie. Tu passes sous l'arche du pont sans respirer. Tu as les épaules en feu.",
      "À deux heures, tu entends derrière toi, aux Foulons, la cloche du lavoir qui sonne à la volée, et des portes qui claquent.",
      "Devant ta cabane, la planche à craie est vide. Sous la pierre bleue, il y a une toile cirée ficelée en croix.",
    ],
    choices: [{ label: "Courir au canal", to: "J_chambre", via: "seule" }] },
  J_quartier_debout: { act: A, title: "Deux heures", place: "foulons", fx: { flag: "foulons:leves", time: 2 },
    text: [
      "À deux heures, Ilde prend la cloche du lavoir. Toi, tu prends les quais, avec ta voix de passeuse, celle qui porte d'une rive à l'autre par-dessus le vent.",
      "« Debout ! La digue ! Montez à Saint-Rieul ! »",
      "On te connaît, aux Foulons. On t'achète du sel, on te dénonce à l'octroi, on t'invite aux noces. Les volets s'ouvrent. On grogne. Quand on voit Ilde derrière toi, en robe de chambre et en sabots, avec la cloche, on se tait et on s'habille.",
      "Fulbert Cosson, le teinturier, sort sur son seuil, une lanterne à la main. Il te regarde, puis il regarde Ilde. Il rentre chez lui. Une minute plus tard, il ressort avec sa femme et ses enfants, et il monte la Côte avec les autres, sans un mot.",
      "À trois heures, le quartier est sur le parvis. À la fenêtre de la Maison des Vannes, au bout de la vallée, il y a une lanterne. Elle reste seule.",
    ],
    choices: [{ label: "Attendre avec eux", to: "J_parvis" }] },
  J_parvis: { act: A, title: "Le parvis de Saint-Rieul", place: "hauteville", end: true, fx: { time: 3 },
    text: [
      "À quatre heures, la pluie. Les gens se serrent sous le porche de Saint-Rieul, les enfants sur les genoux. Ilde passe de groupe en groupe avec sa sacoche. Toi, tu restes au bord du parvis, à regarder la lanterne seule, là-bas.",
      "À cinq heures et demie, la digue cède. Le bruit monte de la vallée, puis la vague, brune, qui couvre tout. Les Foulons disparaissent sous l'eau, les toits d'abord, puis la cheminée de la teinturerie.",
      "Le parvis se tait. Puis une femme se met à compter ses enfants à voix haute. Puis d'autres. Ils sont tous là.",
      "Ilde vient s'asseoir à côté de toi sur la marche. Elle regarde l'endroit où était la digue. « Il a attendu jusqu'au bout, là-haut, dit-elle. Avec sa lanterne. »",
      "Le paquet, la courrière : tu ignores où ils sont. Tu sais que mille personnes sont vivantes sur ce parvis, et qu'un vieil homme est mort dans sa maison au bout du lac, parce que tu n'as pas pu être à deux endroits à la fois. Tu choisirais la même chose. Tu le sais aussi, et ça ne console pas.",
    ] },
};
