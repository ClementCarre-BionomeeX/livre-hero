// The six crossroads of Sarance, the morning report and the moves between places. These passages carry no act: the
// act in progress stays the one the story is in (the engine keeps the last act seen).
var MOVES = {
  halle: { label: "Gagner la Halle aux grains", to: "H_halle" },
  marche: { label: "Passer sur la place du Marché", to: "H_marche" },
  port: { label: "Descendre au port des Bateliers", to: "H_port" },
  chateau: { label: "Monter au château", to: "H_chateau" },
  hotel: { label: "Monter à l'Hôtel-Dieu", to: "H_hotel" },
  remparts: { label: "Monter sur les remparts", to: "H_remparts" },
};
function moves(here) { return Object.keys(MOVES).filter(function (k) { return k !== here; }).map(function (k) { return { label: MOVES[k].label, to: MOVES[k].to }; }); }
var SLEEP = { label: "Aller dormir à la Maison des Greniers", when: "night", takes: "morning", to: "N_matin" };
module.exports = { moves: moves, SLEEP: SLEEP, passages: {
  // ------------------------------------------------------------------ la Halle aux grains
  H_halle: {
    title: "La Halle aux grains", place: "halle", hub: true, backName: "la Halle aux grains",
    text: [
      { first: true, text: "La Halle aux grains occupe tout un côté de la Basse-Ville : une nef de chêne sur quarante piliers, un toit de tuiles qui descend presque jusqu'au sol, et sous les combles, les greniers de la ville. Au rez-de-chaussée, les boulangers jurés viennent chercher leur farine, et la ville vient chercher son pain." },
      { first: true, text: "La Maison des Greniers est collée contre le pignon : deux pièces, un bureau et une chambre. Les livres de Bréhal sont encore sur la table, ses lunettes posées sur le dernier registre, sa cape au clou." },
      { again: true, when: "day", text: "La Halle, ses piliers de chêne, l'odeur de farine et de poussière. La file devant les comptoirs des boulangers." },
      { again: true, when: "night", text: "La Halle dans la nuit. Deux gardes dorment à moitié devant les escaliers des greniers, une lanterne entre eux." },
      { after: "marche:bombarde", before: "halle:reparee", text: "Au milieu du toit, la pierre de la Truie a ouvert un trou grand comme une charrette. Quand il pleut, l'eau tombe droit sur les sacs du grenier ouest." },
      { after: "halle:reparee", text: "Des tuiles neuves, plus rouges que les autres, marquent l'endroit où la pierre est tombée." },
      { by: "rations", cases: { demi: "Sur les comptoirs, les pains de la demi-ration, plus petits que la main.", quart: "Sur les comptoirs, des pains du quart de ration, durs comme des galets. Les gens les regardent longtemps avant de les prendre." }, else: "Sur les comptoirs, les grosses miches de la ration pleine, que l'on compte encore une par bouche." },
    ],
    choices: [
      { label: "Monter aux greniers et compter toi-même le grain", hide: { seen: "A_compte" }, takes: 2, to: "A_compte" },
      { label: "Recompter les sacs, cette fois avec méthode", if: { has: "compte:flou" }, hide: { any: [{ not: { has: "compte:flou" } }, { clue: "g_compte" }] }, takes: 2, to: "A_recompte" },
      { label: "Vider le boisseau étalon et le mesurer", if: { has: "mahaut:boisseau" }, hide: { any: [{ not: { has: "mahaut:boisseau" } }, { seen: "G_boisseau" }] }, takes: 1, to: "G_boisseau" },
      { label: "Surveiller la distribution du pain", when: "day", takes: 1, to: "G_distribution" },
      { label: "Faire réparer le toit de la Halle", after: "marche:bombarde", hide: { has: "halle:reparee" }, to: "G_toit" },
      { label: "Te plonger dans les registres de Bréhal", when: "day", takes: 4, to: "G_comptes" },
      SLEEP,
    ].concat(moves("halle")),
  },
  G_distribution: {
    title: "La distribution", place: "halle", back: true,
    text: [
      "Les boulangers jurés reçoivent la farine au poids, sous l'œil de deux sergents, et la ville défile devant leurs comptoirs avec ses jetons de plomb : un jeton par bouche, un pain par jeton.",
      { by: "rations", cases: { demi: "Depuis la demi-ration, les gens ne parlent plus dans la file. Ils regardent les pains des autres.", quart: "Au quart de ration, des enfants attendent seuls dans la file, avec les jetons de toute leur famille, pendant que les parents dorment pour moins sentir la faim." }, else: "À ration pleine, la file avance vite. Des commères se racontent la nuit, un vieux siffle, et un boulanger plaisante avec les sergents." },
      { if: { stock: "moral", max: 30 }, text: "Une femme jette son jeton aux pieds d'un sergent et s'en va sans pain. Personne ne le ramasse." },
      { if: { stock: "moral", min: 70 }, text: "Quelqu'un te reconnaît et te salue d'un « Bonjour, l'intendance ! » qui fait rire la file." },
      { after: "marche:flux", text: "Les sœurs de l'Hôtel-Dieu passent avec une civière couverte. La file s'écarte, et se referme derrière elles." },
      { once: true, text: "Tu repères vite le tour de main d'un boulanger, un pouce sur le plateau de la balance. Un mot à l'oreille du sergent suffit : le plateau redevient juste." },
    ],
    fx: { stock: { moral: 2 } },
  },
  G_comptes: {
    title: "Les registres", place: "halle", back: true,
    text: [
      "Tu passes de longues heures sur les registres de Bréhal, une chandelle à portée de main. Il écrivait petit, droit, sans une rature, et chaque page tombe juste jusqu'au premier jour du siège.",
      { if: { not: { clue: "g_compte" } }, text: "Ensuite, les comptes se mettent à flotter, comme si quelqu'un les avait repris après lui sans comprendre ses colonnes." },
      { if: { clue: "g_compte" }, text: "Tu reportes tes propres chiffres à la suite des siens. À la dernière ligne, tu écris combien de jours il reste à la ville, et tu le barres, parce que ce nombre change chaque matin." },
    ],
  },
  N_matin: {
    title: "Le matin", place: "halle", backName: "la Maison des Greniers",
    text: [
      "Tu te réveilles dans le lit de Bréhal, sous les combles de la Maison des Greniers. Par la lucarne, tu vois le toit de la Halle et, plus loin, les fumées du camp du Margrave.",
      { if: { day: { min: 2, max: 2 } }, text: "Un sergent frappe à ta porte avant le jour : les boulangers attendent leur farine, et c'est toi qui dois signer les bons. Tu signes ton nom pour la première fois sous celui de Bréhal." },
      { if: { day: { min: 3, max: 3 } }, text: "Les cloches de Saint-Aubin sonnent matines. En bas, la file du pain est déjà longue." },
      { if: { day: { min: 5, max: 6 } }, after: "bataille:tanneurs", text: "On enterre encore les morts de l'assaut au cimetière de Saint-Aubin. Le glas sonne toutes les heures." },
      { if: { day: { min: 6 } }, after: "marche:bombarde", before: "truie:brulee", text: "Tu as dormi entre deux coups de la Truie. Elle tire toutes les heures, de jour comme de nuit, et l'on finit par compter les pierres comme on compte les cloches." },
      { after: "marche:flux", text: "Sous ta fenêtre, une charrette passe avec deux corps cousus dans des draps. Le flux." },
      { after: "marche:expulsion", text: "La nuit, on a encore entendu les voix dans le fossé, au pied de la Porte des Tanneurs. Puis le vent a tourné." },
      { if: { stock: "moral", max: 25 }, text: "Quelqu'un a écrit à la craie sur la porte de la Halle : « Le pain des riches est dans leurs caves. »" },
      { if: { days: "ble", max: 4 }, text: "Ce matin, tes chiffres ne te laissent plus dormir : au train où va la ville, il reste moins de cinq jours de blé dans les greniers." },
      { if: { day: { min: 11 } }, text: "Le camp du Margrave s'agite comme une fourmilière qu'on a frappée du pied. Les échelles sortent des tentes." },
    ],
    choices: [{ label: "Commencer la journée", to: "H_halle" }],
  },

  // ------------------------------------------------------------------ la place du Marché
  H_marche: {
    title: "La place du Marché", place: "marche", hub: true, backName: "la place du Marché",
    text: [
      { first: true, text: "La place du Marché est en pente, pavée de galets ronds. En haut, l'Hôtel de ville et son beffroi ; en bas, la boulangerie de Pernette, le comptoir du Lombard derrière ses grilles, et la maison Vassal, la plus haute de la place, avec ses volets verts." },
      { first: true, text: "Avant le siège, on y vendait le grain de tout le pays. Il reste des étals de cuir, de chandelles et de clous, et beaucoup de gens debout, qui regardent ceux qui achètent." },
      { again: true, when: "day", text: "La place du Marché, le beffroi, les volets verts de la maison Vassal, la file devant la boulangerie." },
      { again: true, when: "night", text: "La place du Marché, de nuit. Une lanterne au beffroi. Toutes les fenêtres sont noires, sauf une, chez les Vassal." },
      { after: "marche:bombarde", before: "truie:brulee", text: "Une pierre de la Truie a fendu la fontaine en deux. L'eau coule entre les pavés." },
    ],
    choices: [
      { label: "Écouter ce qu'on dit sur la place", when: "day", takes: 1, to: "M_place" },
      { label: "Descendre dans les caves de la maison Vassal, à la faveur de la nuit", when: "night", if: { any: [{ clue: "g_carbonnel" }, { clue: "g_bon" }] }, hide: { any: [{ clue: "g_caves" }, { has: "g:trouve" }, { not: { any: [{ clue: "g_carbonnel" }, { clue: "g_bon" }] } }] }, takes: 1,
        test: { dom: "discretion", diff: -10, label: "Discrétion" }, win: { to: "G_caves" }, lose: { to: "G_caves_pris" } },
      SLEEP,
    ].concat(moves("marche")),
  },
  M_place: {
    title: "Sur la place", place: "marche", back: true, rumeur: "place",
    text: [
      "Tu t'adosses au pilier de l'Hôtel de ville, là où les commères attendent leur tour de pain, et tu écoutes.",
    ],
  },

  // ------------------------------------------------------------------ le port des Bateliers
  H_port: {
    title: "Le port des Bateliers", place: "port", hub: true, backName: "le port des Bateliers",
    text: [
      { first: true, text: "Le port des Bateliers longe la Dorve au pied de l'éperon : des quais de pierre noire, des barques tirées au sec, des filets qui sèchent. En amont, les trois Moulins de la ville sont bâtis sur l'eau, reliés à la rive par des passerelles, et la Poterne des Moulins s'ouvre dans le mur juste derrière eux." },
      { first: true, text: "Sur l'autre rive, à portée d'arbalète, les feux d'un poste du Margrave. Les bateliers ne sortent plus leurs barques que de nuit, et pas loin." },
      { first: true, text: "Le Chat-Huant, où tu logeais encore hier, ouvre sa porte basse sur le quai." },
      { again: true, when: "day", text: "Le port, les barques, les Moulins qui tournent au fil de l'eau, et en face, les feux du poste du Margrave." },
      { again: true, when: "night", text: "Le port, de nuit. Les roues des Moulins grincent dans le noir. Une lanterne au Chat-Huant." },
    ],
    choices: [
      { label: "Entrer au Chat-Huant", to: "P_chathuant" },
      { label: "Guetter les Moulins jusqu'à minuit", when: "night", if: { any: [{ clue: "b_carnet" }, { clue: "b_lumieres" }] }, hide: { any: [{ has: "b:verite" }, { not: { any: [{ clue: "b_carnet" }, { clue: "b_lumieres" }] } }] }, takes: 2, to: "P_guet" },
      { label: "Faire tendre les chaînes de la Dorve devant les Moulins", after: "S_guerre", hide: { has: "chaines:pretes" }, takes: 2, to: "S_chaines" },
      SLEEP,
    ].concat(moves("port")),
  },
  P_chathuant: {
    title: "Le Chat-Huant", place: "port", back: true, rumeur: "port", shop: "noir", taverne: { mise: 5, adversaire: "un batelier édenté" },
    text: [
      { first: true, text: "Le Chat-Huant est bas de plafond, enfumé, plein de bateliers qui boivent sans payer et de soldats qui paient sans boire. L'hôtesse, une grande femme aux bras nus, a un mot pour chacun." },
      { first: true, text: "Elle te reconnaît. « Alors, c'est vrai ? On t'a fait{e} intendant{e} ? » Elle te pousse un gobelet. « Celui-là est pour la maison. Les suivants, tu les paieras comme tout le monde. »" },
      { again: true, text: "Le Chat-Huant, sa fumée, ses bateliers, et la grande hôtesse qui essuie ses gobelets." },
    ],
  },
  P_guet: {
    title: "Les Moulins à minuit", place: "port",
    text: [
      "Tu t'installes contre un tas de filets, face aux Moulins, et tu attends. Les heures passent au bruit des roues. Le poste du Margrave, en face, éteint ses feux un à un.",
      { if: { day: { max: 7 } }, text: "Un peu avant minuit, dans le Moulin du milieu, une lumière s'allume derrière la lucarne qui donne sur la rivière. Elle s'éteint, se rallume, s'éteint. Trois fois. Puis plus rien. De l'autre côté de l'eau, une lanterne répond, une seule fois." },
      { if: { day: { max: 7 } }, text: "Personne ne sort du moulin. Quand tu t'approches de la passerelle, la porte est fermée de l'intérieur." },
      { if: { day: { min: 8 } }, text: "Un peu avant minuit, une silhouette en manteau sombre passe la Poterne des Moulins avec une clé, et traverse la passerelle. Le capuchon est relevé. Dans le Moulin du milieu, une lumière s'allume, trois fois, et une lanterne répond sur l'autre rive." },
      { if: { day: { min: 8 } }, text: "La silhouette ressort. En passant sous la lanterne de la Poterne, elle relève une main gantée pour refermer, et la lueur accroche un pourpoint bleu sous le manteau, et le profil d'Oudart de Lys." },
    ],
    fx: { clue: "b_lumieres" },
    choices: [
      { label: "Le suivre jusqu'au château", if: { day: { min: 8 } }, hide: { not: { day: { min: 8 } } }, fx: { flag: ["oudart:vu", "b:verite"], quest: "I_brehal", tie: ["oudart_margrave", "lieutenant"], set: { sait: "secretaire" } }, to: "P_suivi" },
      { back: "H_port" },
    ],
  },
  P_suivi: {
    title: "Dans les rues", place: "port",
    text: [
      "Tu le suis de loin. Il monte par la rue des Tanneurs, sans se presser, et entre au château par la petite porte de la cour, qu'un archer lui ouvre en le saluant.",
      "Tu restes un long moment dans le noir, en bas de la rampe. Le lieutenant du capitaine fait des signaux à l'ennemi, la nuit, depuis les Moulins. Bréhal l'a vu avant toi, de la Tour du Sel. Bréhal est mort.",
    ],
    choices: [{ label: "Rentrer à la Maison des Greniers et réfléchir", takes: "morning", to: "N_matin" }],
  },

  // ------------------------------------------------------------------ le château
  H_chateau: {
    title: "Le château", place: "chateau", hub: true, backName: "le château",
    text: [
      { first: true, text: "Le château de Sarance est une vieille forteresse carrée, plantée au sommet de l'éperon. On y entre par une rampe et une porte gardée. Dans la cour, des sergents s'exercent à la pique, des chevaux maigres attendent qu'on les mange, et l'on monte par un escalier à vis jusqu'à la salle du Conseil." },
      { first: true, text: "Du haut des murs, on voit toute la boucle de la Dorve, le camp du Margrave sur les pâtures et, par temps clair, la route du sud par où l'armée du Roi doit venir." },
      { again: true, text: "Le château, sa cour, ses sergents, et la route du sud, vide, au loin." },
    ],
    choices: [
      { label: "Demander à consulter le registre du courrier", hide: { seen: "L_courrier" }, takes: 1, to: "L_courrier" },
      { label: "Te glisser dans le logis du capitaine pendant son tour des remparts", when: "day", if: { clue: "l_courrier" }, hide: { any: [{ not: { clue: "l_courrier" } }, { item: "lettre_roi" }, { seen: "L_fouille" }, { seen: "L_fouille_pris" }] }, takes: 1,
        test: { dom: "discretion", diff: -20, label: "Discrétion" }, win: { to: "L_fouille" }, lose: { to: "L_fouille_pris" } },
      SLEEP,
    ].concat(moves("chateau")),
  },

  // ------------------------------------------------------------------ l'Hôtel-Dieu
  H_hotel: {
    title: "L'Hôtel-Dieu", place: "hotel", hub: true, backName: "l'Hôtel-Dieu",
    text: [
      { first: true, text: "L'Hôtel-Dieu de Sarance est une longue salle voûtée, avec deux rangées de lits et un autel au fond, pour que les malades entendent la messe sans se lever. Derrière, le cloître des Pénitentes, ses arcades et son puits." },
      { first: true, text: "Les sœurs y soignent les blessés des remparts, les vieux, les femmes en couches. Depuis le siège, elles ont aussi ouvert le cloître aux gens des villages, qui sont arrivés avec leurs vaches, leurs enfants et leurs coffres." },
      { again: true, text: "L'Hôtel-Dieu, l'odeur de vinaigre et de cire, les lits alignés, le murmure des sœurs." },
      { after: "marche:flux", text: "On a tendu des draps au fond de la salle pour séparer les malades du flux. Les sœurs y entrent avec un linge sur la bouche." },
      { after: "marche:expulsion", text: "Le cloître des Pénitentes est vide. On a laissé les draps tendus entre les colonnes. Le vent les fait bouger." },
    ],
    choices: [
      { label: "Aider les sœurs aux soins", when: "day", takes: 2, to: "O_soins" },
      SLEEP,
    ].concat(moves("hotel")),
  },
  O_soins: {
    title: "Les soins", place: "hotel", back: true,
    text: [
      "Une sœur te met un tablier dans les mains sans demander qui tu es. Tu portes de l'eau, tu tiens des jambes pendant qu'on recoud, tu changes des linges. Le temps passe sans que tu le sentes.",
      { after: "bataille:tanneurs", text: "Les blessés de l'assaut occupent la moitié de la salle. Un tanneur de quinze ans te demande si la porte a tenu. Tu lui dis que oui, deux fois, parce qu'il redemande." },
      { after: "marche:flux", text: "Derrière les draps du flux, l'air est épais. Tu vides des bassins jusqu'à ne plus sentir tes bras." },
      "En partant, une sœur te frotte les mains au vinaigre, et te glisse un peu d'onguent pour tes propres écorchures.",
    ],
    fx: { regard: { ysaure: "cordial" } },
    fxEvery: { pv: 4 },
  },

  // ------------------------------------------------------------------ les remparts
  H_remparts: {
    title: "Les remparts", place: "remparts", hub: true, backName: "les remparts",
    text: [
      { first: true, text: "Le chemin de ronde fait le tour de la Basse-Ville, de la Porte des Tanneurs jusqu'aux Moulins. C'est un couloir de pierre entre deux murets, assez large pour deux hommes de front, avec des créneaux tous les trois pas. À l'angle nord-est, la Tour du Sel, ronde et trapue, garde le coude du rempart." },
      { first: true, text: "En face, sur les pâtures, le camp du Margrave : des centaines de tentes, des enclos, des fumées, des cris de sergents, des forges qui sonnent toute la journée. Il est si près qu'on entend les chiens." },
      { again: true, when: "day", text: "Le chemin de ronde, les créneaux, et le camp du Margrave étalé sur les pâtures." },
      { again: true, when: "night", text: "Le chemin de ronde, de nuit. Les feux du camp, des centaines, comme une ville en face de la ville." },
      { after: "marche:truie", before: "truie:brulee", text: "Sur la butte aux Pendus, la Truie dresse son grand bras contre le ciel." },
      { after: "truie:brulee", text: "Sur la butte aux Pendus, il reste de la Truie un tas de poutres noires." },
      { after: "barbacane:perdue", text: "Devant la Porte des Tanneurs, la barbacane est aux mains du Margrave. Ses arbalétriers tirent de là sur tout ce qui se montre." },
      { after: "marche:expulsion", text: "Au pied du mur, dans le fossé, entre la ville et le camp, les gens du Plessis. Ils ont fait des abris avec leurs manteaux." },
    ],
    choices: [
      { label: "Monter en haut de la Tour du Sel", takes: 1, to: "R_tour" },
      { label: "Observer le camp du Margrave", when: "day", takes: 1, to: "R_camp" },
      { label: "Regarder la Truie de plus près", after: "marche:truie", hide: { any: [{ seen: "R_truie" }, { has: "truie:brulee" }] }, to: "R_truie" },
      { label: "Écouter le sol au pied de la Tour du Sel", after: "marche:mine", hide: { any: [{ has: "mine:noyee" }, { has: "contremine" }, { missed: "II_mine" }] }, takes: 1, to: "R_mine" },
      { label: "Faire jeter du pain par-dessus le mur, aux gens du fossé", after: "marche:expulsion", hide: { has: "passage:accorde" }, takes: 1, to: "E_pain" },
      SLEEP,
    ].concat(moves("remparts")),
  },
  R_camp: {
    title: "Le camp du Margrave", place: "remparts", back: true,
    text: [
      "Tu restes une heure dans un créneau, à regarder le camp. Les tentes des chevaliers sont au centre, rayées de couleurs, autour du grand pavillon du Margrave et de sa bannière, une tour d'or sur fond rouge. Les fantassins dorment à l'extérieur, sous des abris de branchages.",
      { if: { day: { max: 4 } }, text: "Des charrettes arrivent du nord en longues files : du fourrage, des tonneaux, des bœufs. Le Margrave mange, lui." },
      { if: { day: { min: 5, max: 9 } }, text: "Les charrettes du nord sont moins nombreuses. Dans les enclos, on abat des chevaux." },
      { if: { day: { min: 8 } }, text: "Derrière le camp, au bord du ruisseau, des hommes creusent des fosses. Tu comptes les corps qu'on y porte : plus de dix, dans l'heure. Le flux n'est pas seulement chez vous." },
      { if: { day: { min: 10 } }, text: "Il pleut sur les pâtures depuis deux jours. Les fossés du camp sont devenus des mares, et les tentes s'affaissent." },
    ],
  },
} };
