// The crossroads of the college (the courtyard, the classrooms, the library, the workshop, the dormitory), the two of
// the town below (the port, the dike), the lessons, the night and the morning. These passages carry no act: the act in
// progress stays the one the story is in.
var MOVES = {
  cour: { label: "Traverser la cour des tilleuls", to: "H_cour" },
  salles: { label: "Monter à l'aile des salles", to: "H_salles" },
  bibliotheque: { label: "Entrer à la bibliothèque", to: "H_biblio" },
  atelier: { label: "Descendre à l'atelier de la Main", to: "H_atelier" },
  dortoir: { label: "Monter au dortoir", to: "H_dortoir" },
};
function moves(here) { return Object.keys(MOVES).filter(function (k) { return k !== here; }).map(function (k) { return { label: MOVES[k].label, to: MOVES[k].to }; }); }
var SLEEP = { label: "Aller dormir", when: "night", takes: "morning", to: "N_matin" };
var TOWN = { label: "Descendre en ville par le portail", when: "day", to: "H_port" };
// The four lessons: everyone may follow any art; the hero's own art teaches more.
var ARTS = {
  encre: { name: "d'Encre de Maître Salvanhac", dom: "savoir" },
  chant: { name: "de Chant de Dame Castagnet", dom: "social" },
  verre: { name: "de Verre de Maître Vilmorin", dom: "discretion" },
  main: { name: "de Main de Mère Fage", dom: "nature" },
};
function lessons() {
  var out = [];
  Object.keys(ARTS).forEach(function (k) {
    var A = ARTS[k], mine = { is: { art: k } }, p1 = { magie: 2 }, p2 = { magie: 1 };
    p1[A.dom] = 1; p2[A.dom] = 1;
    out.push({ label: "Suivre le cours " + A.name + ", ton Art", if: mine, hide: { not: mine }, when: "day", takes: 3, fx: { pratique: p1 }, to: "K_lecon_" + k });
    out.push({ label: "Suivre le cours " + A.name, if: { not: mine }, hide: mine, when: "day", takes: 3, fx: { pratique: p2 }, to: "K_lecon_" + k });
  });
  return out;
}
var CAUGHT = { has: "avertissement" };
module.exports = { moves: moves, SLEEP: SLEEP, passages: {
  // ------------------------------------------------------------------ la cour des tilleuls
  H_cour: {
    title: "La cour des tilleuls", place: "cour", hub: true, veillee: true, backName: "la cour",
    text: [
      { first: true, text: "La cour du collège est un grand carré de pavés usés, fermé sur ses quatre côtés par les quatre ailes de pierre grise. Huit tilleuls y poussent en deux rangées, si vieux que leurs racines soulèvent les pavés. Au milieu, un puits à margelle de granit ; au nord, le clocher et la porte du réfectoire ; à l'ouest, la loge de la portière, près du grand portail qui donne sur la ville." },
      { again: true, saison: "automne", text: "Les tilleuls de la cour jaunissent, et le vent pousse les feuilles contre le puits. Des élèves traversent en courant, leurs livres serrés contre la poitrine." },
      { again: true, saison: "hiver", text: "Le froid tient la cour. La neige reste sur les branches des tilleuls et fond sur les pavés, et le puits fume un peu, le matin." },
      { again: true, saison: "printemps", text: "Le printemps est venu dans la cour. Les tilleuls ont des feuilles tendres, presque jaunes, et les élèves de quatrième année révisent assis par terre, adossés aux troncs." },
      { when: "night", text: "La nuit, une seule lanterne brûle au-dessus de la porte du réfectoire. Les fenêtres des maîtres s'éteignent l'une après l'autre ; celle du Recteur reste allumée tard." },
      { after: "B_tempete", before: "C_printemps", once: true, text: "Depuis la tempête, on entend parfois, la nuit, un son grave et faux monter de la digue jusqu'au collège, comme une corde de contrebasse mal accordée." },
    ],
    choices: [
      { label: "Entrer au réfectoire pour le premier dîner", hide: { seen: "A_valerien" }, when: "day", to: "A_valerien" },
      { label: "Manger au réfectoire", after: "A_valerien", takes: 1, to: "K_refectoire" },
      { label: "T'exercer à la baguette sous les tilleuls", when: "day", takes: 1, fx: { pratique: { combat: 1 } }, to: "K_escrime" },
      { label: "Te glisser jusqu'au logis du Recteur et regarder par la fenêtre", after: "A_the", when: "night", if: { not: CAUGHT }, hide: { any: [CAUGHT, { seen: "K_logis" }] }, takes: 1,
        test: { dom: "discretion", diff: -10, label: "Discrétion", help: [{ with: "yse", v: 10 }] }, win: { to: "K_logis" }, lose: { to: "S_pris_logis" } },
      { label: "Te glisser jusqu'au logis du Recteur, malgré l'avertissement", after: "A_the", when: "night", if: CAUGHT, hide: { any: [{ not: CAUGHT }, { seen: "K_logis" }] }, takes: 1,
        test: { dom: "discretion", diff: -10, label: "Discrétion", help: [{ with: "yse", v: 10 }] }, win: { to: "K_logis" }, lose: { to: "S_renvoi" } },
      TOWN,
      SLEEP,
    ].concat(moves("cour")),
  },
  K_refectoire: {
    title: "Le réfectoire", place: "cour", back: true, rumeur: "refectoire",
    text: [
      { first: true, text: "Le réfectoire est une longue salle voûtée où mangent deux cents élèves sur des bancs, par années, sous les portraits des anciens recteurs. Les premières années occupent la table du bas, près de la porte, là où il fait froid." },
      { again: true, text: "Tu prends ta place au bout de la table des premières années, devant une soupe épaisse, du pain gris et un morceau de fromage." },
      { with: "jodoc", once: true, text: "Jodoc mange pour trois et parle pour deux. Il connaît toutes les histoires du collège : il a eu trois ans pour les entendre." },
    ],
  },
  K_escrime: {
    title: "Sous les tilleuls", place: "cour", back: true,
    text: [
      { first: true, text: "Sous les tilleuls, les élèves s'exercent à la baguette deux par deux, entre les cours. La baguette de buis sert d'abord à tracer et à diriger, mais tout le collège sait qu'elle sert aussi à se battre, et Dame Castagnet ferme les yeux tant que personne ne saigne." },
      { with: "jodoc", text: "Jodoc te sert d'adversaire. Il est lent et tient toujours sa place, et chaque fois que tu le touches, il rit comme si tu lui avais raconté une bonne histoire." },
      { without: "jodoc", text: "Un élève de deuxième année accepte de croiser la baguette avec toi, en bâillant. Au bout d'une heure, il a cessé de bâiller." },
      "Tu apprends à lire une épaule, un pied qui avance, un regard qui part trop tôt. Attaque, parade, feinte : la parade arrête l'attaque, l'attaque perce la feinte, la feinte trompe la parade. Le reste est affaire de nerfs.",
    ],
  },

  // ------------------------------------------------------------------ l'aile des salles
  H_salles: {
    title: "L'aile des salles", place: "salles", hub: true, backName: "l'aile des salles",
    text: [
      { first: true, text: "L'aile des salles est un long couloir dallé de noir et de blanc, éclairé par de hautes fenêtres sur la cour. Quatre portes s'y ouvrent, chacune peinte du signe de son Art : une plume pour l'Encre, une bouche ouverte pour le Chant, un œil pour le Verre, une main pour la Main. Au bout du couloir se trouvent la salle d'étude, et l'escalier qui monte chez les maîtres." },
      { again: true, when: "day", text: "Le couloir des salles aligne ses dalles noires et blanches ; derrière les portes murmurent les cours, et parfois une note longue fait vibrer les vitres." },
      { again: true, when: "night", text: "Le couloir est vide et froid. Un rai de lumière passe sous la porte de la salle de l'Encre." },
      { after: "marche:the3", before: "C_veille", text: "Sur la porte de la salle de l'Encre, quelqu'un a punaisé un billet : « Le cours de Maître Salvanhac est repris par Dame Castagnet jusqu'à nouvel ordre. »" },
    ],
    choices: lessons().concat([
      { label: "Travailler à la salle d'étude", takes: 2, fx: { pratique: { savoir: 1 } }, to: "K_etude" },
      TOWN,
      SLEEP,
    ]).concat(moves("salles")),
  },
  K_etude: {
    title: "La salle d'étude", place: "salles", back: true,
    text: [
      { first: true, text: "La salle d'étude est une grande pièce silencieuse aux tables de chêne, où un surveillant de quatrième année lit les pieds sur un tabouret. On y entend le grattement des plumes, une page qu'on tourne, et quelqu'un qui renifle." },
      { again: true, text: "Tu reprends ta place à la table près de la fenêtre, et tu travailles." },
      { saison: "printemps", text: "Les quatrièmes années occupent les meilleures tables et parlent de l'examen à voix basse, en se tordant les doigts." },
    ],
  },
  K_lecon_encre: {
    title: "Le cours d'Encre", place: "salles", back: true,
    text: [
      { before: "marche:the3", text: "La salle de l'Encre sent le papier, la colle et la noix de galle. Les pupitres sont tachés de quarante ans d'encre, et le merle de Maître Salvanhac se promène dessus en picorant les miettes de gomme." },
      { before: "marche:the3", saison: "automne", text: "Maître Salvanhac enseigne debout, très droit, d'une voix étonnamment jeune. Il fait tracer des signes simples, des signes qui retiennent : le nœud, la cale, l'ancre. Quand un trait est juste, le papier se raidit un peu sous la plume. Il passe dans les rangs et corrige les mains une à une, en les prenant dans les siennes." },
      { before: "marche:the3", saison: "hiver", text: "Maître Salvanhac commence son cours deux fois, parce qu'il a oublié qu'il l'avait commencé, et les élèves de devant se regardent. Puis il prend la craie, et pendant une heure, il trace au tableau des signes d'une beauté qui fait taire tout le monde." },
      { before: "marche:the3", saison: "printemps", text: "Maître Salvanhac appelle chaque élève par un nom qui n'est pas le sien, et plus personne ne le corrige. Sa main, elle, se souvient de tout : elle trace encore d'un trait ferme." },
      { after: "marche:the3", text: "Dame Castagnet a repris le cours d'Encre. Elle l'enseigne avec exactitude et sans plaisir, un livre ouvert devant elle, et regarde souvent la chaise vide près de la fenêtre." },
      { if: { is: { art: "encre" } }, text: "C'est ton Art. Ta plume se fait peu à peu à la main, et la main à la plume." },
    ],
  },
  K_lecon_chant: {
    title: "Le cours de Chant", place: "salles", back: true,
    text: [
      { first: true, text: "La salle du Chant est ronde et nue, sans un meuble, sous une voûte de pierre si parfaite qu'un murmure au centre s'entend contre les murs. Dame Castagnet fait mettre les élèves en cercle et leur apprend d'abord à respirer, longtemps, avant de leur permettre un seul son." },
      { again: true, text: "Dame Castagnet donne la note d'un diapason d'argent et fait tenir aux élèves un son unique, jusqu'à ce que le verre d'eau posé au centre {{fx:ondule|se couvre de rides}}." },
      { saison: "hiver", text: "Elle fait chanter les signes de la digue sur des pierres d'essai. Une pierre bien chantée bourdonne longtemps dans la main ; une pierre mal chantée se fendille." },
      { if: { is: { art: "chant" } }, text: "C'est ton Art. Ta voix descend chaque jour un peu plus bas dans la poitrine, là où elle porte." },
    ],
  },
  K_lecon_verre: {
    title: "Le cours de Verre", place: "salles", back: true,
    text: [
      { first: true, text: "La salle du Verre a ses volets fermés en plein jour. Des plaques de verre sont dressées sur des chevalets, des miroirs pendent du plafond, des prismes traînent sur les tables. Maître Vilmorin allume une bougie, et la pièce se remplit de {{fx:irise|lumières qui ne viennent de nulle part}}." },
      { first: true, text: "Sur le plus grand des miroirs, quelqu'un a gravé une phrase il y a longtemps, à l'envers, pour qu'on la lise dans le verre : {{envers:La lumière ment mieux que nous.}}" },
      { again: true, text: "Maître Vilmorin apprend à plier un reflet, à le poser à côté de soi, à faire voir à quelqu'un sa propre main là où elle n'est pas. Il rit beaucoup, et ses élèves avec lui." },
      { with: "yse", once: true, text: "Ysé réussit du premier coup à poser un reflet de sa plume sur le pupitre voisin. Vilmorin applaudit, et elle rougit jusqu'aux oreilles." },
      { if: { is: { art: "verre" } }, text: "C'est ton Art. Tu commences à voir la lumière comme une chose qu'on peut tenir." },
    ],
  },
  K_lecon_main: {
    title: "Le cours de Main", place: "atelier", back: true,
    text: [
      { first: true, text: "Le cours de la Main se tient à l'atelier, dans la chaleur de la forge. Mère Fage fait d'abord tenir aux élèves un marteau, un ciseau, une pince, jusqu'à ce que l'outil cesse de leur paraître étranger. Les signes viennent après : on les grave dans le bois, puis dans le métal, puis dans la pierre." },
      { again: true, text: "Mère Fage passe derrière chaque établi, regarde, grogne ou se tait, et son silence vaut un compliment." },
      { with: "jodoc", text: "Jodoc, à l'établi voisin, grave un signe du premier coup, et ne s'en aperçoit même pas. Il {{fx:tremble|tremble}} seulement quand Mère Fage dit le mot « examen »." },
      { if: { is: { art: "main" } }, text: "C'est ton Art. Tes mains apprennent à écouter la matière avant de la frapper." },
    ],
  },

  // ------------------------------------------------------------------ la bibliothèque
  H_biblio: {
    title: "La bibliothèque", place: "bibliotheque", hub: true, backName: "la bibliothèque",
    text: [
      { first: true, text: "La bibliothèque occupe toute l'aile ouest, sur trois étages reliés par des escaliers de fer. La voûte est peinte d'un ciel d'étoiles, et des galeries courent le long des rayonnages, si hauts qu'on y monte par des échelles à roulettes. Des lampes à abat-jour vert éclairent les tables de lecture. Tout au fond, derrière une grille, se dresse une armoire de chêne noir ferrée de fer : le cabinet scellé, où les maîtres rangent les livres défendus." },
      { again: true, when: "day", text: "La bibliothèque luit sous ses lampes vertes, dans un silence plein de petits bruits : une échelle qui roule, une page, une toux étouffée." },
      { when: "night", text: "La nuit, la bibliothèque est noire. La lune entre seule par les fenêtres hautes et pose des carrés pâles sur les tables." },
      { after: "cabinet:bloque", before: "cahier:trouve", text: "Le cadenas du cabinet est resté bloqué. Il pend de travers dans sa chaîne, et Sœur Mélisande l'a regardé plusieurs fois d'un air pensif." },
    ],
    choices: [
      { label: "Lire au hasard des rayons", when: "day", takes: 2, fx: { pratique: { savoir: 1 } }, to: "K_biblio_lire" },
      { label: "Chercher un traité sur les encres défendues", after: "A_the", when: "day", hide: { item: "traite" }, takes: 2,
        test: { dom: "savoir", diff: -10, label: "Savoir", help: [{ with: "yse", v: 15 }] }, win: { to: "K_traite" }, lose: { to: "K_traite_rate" } },
      { label: "Ouvrir le Traité des marées, tome II", if: { item: "carnet" }, hide: { any: [{ not: { item: "carnet" } }, { seen: "Z_frag_1" }] }, takes: 1, to: "Z_frag_1" },
      { label: "Feuilleter les Psaumes de la côte", if: { item: "carnet" }, hide: { any: [{ not: { item: "carnet" } }, { seen: "Z_frag_2" }] }, takes: 1, to: "Z_frag_2" },
      { label: "Chercher l'Herbier de Maître Ancel", if: { item: "carnet" }, hide: { any: [{ not: { item: "carnet" } }, { seen: "Z_frag_3" }] }, takes: 1,
        test: { dom: "savoir", diff: 0, label: "Savoir", help: [{ with: "yse", v: 10 }] }, win: { to: "Z_frag_3" }, lose: { to: "K_herbier_rate" } },
      { label: "Monter chercher la Grammaire des signes anciens, tout en haut", if: { item: "carnet" }, hide: { any: [{ not: { item: "carnet" } }, { seen: "Z_frag_4" }] }, takes: 1, to: "Z_frag_4" },
      { label: "Étaler les morceaux de papier sur une table", if: { all: [{ has: "frag:1" }, { has: "frag:2" }, { has: "frag:3" }, { has: "frag:4" }] }, why: "Il te manque des morceaux.", hide: { any: [{ not: { has: "frag:1" } }, { has: "enigme:p_page" }] }, to: "Z_page" },
      { label: "Revenir au cabinet scellé, de nuit", after: "enigme:p_chiffre", when: "night", if: { not: CAUGHT }, hide: { any: [CAUGHT, { has: "cahier:trouve" }, { has: "cabinet:bloque" }] }, takes: 1,
        test: { dom: "discretion", diff: 0, label: "Discrétion", help: [{ with: "yse", v: 10 }] }, win: { to: "Z_cabinet" }, lose: { to: "S_pris" } },
      { label: "Revenir au cabinet scellé, de nuit, malgré l'avertissement", after: "enigme:p_chiffre", when: "night", if: CAUGHT, hide: { any: [{ not: CAUGHT }, { has: "cahier:trouve" }, { has: "cabinet:bloque" }] }, takes: 1,
        test: { dom: "discretion", diff: 0, label: "Discrétion", help: [{ with: "yse", v: 10 }] }, win: { to: "Z_cabinet" }, lose: { to: "S_renvoi" } },
      { label: "Démonter les gonds du cabinet avec Jodoc", with: "jodoc", after: "enigme:p_chiffre", when: "night", hide: { has: "cahier:trouve" }, takes: 2,
        test: { dom: "nature", diff: -10, label: "Nature", help: [{ with: "jodoc", v: 20 }] }, win: { to: "Z_gonds" }, lose: { to: "Z_gonds_rate" } },
      SLEEP,
    ].concat(moves("bibliotheque")),
  },
  K_biblio_lire: {
    title: "Entre les rayons", place: "bibliotheque", back: true,
    text: [
      { first: true, text: "Tu prends un livre, puis un autre, au hasard d'un titre ou d'une reliure : un traité des vents, un recueil de chants de pêcheurs, une histoire du collège en six volumes que personne n'a ouverte depuis longtemps. Tu lis jusqu'à ce que la lumière change." },
      { again: true, text: "Tu reprends ta lecture à la table près de la fenêtre, sous la lampe verte." },
      { once: true, after: "A_lanternes", text: "Dans l'histoire du collège, au tome six, un chapitre entier raconte la construction de la Digue Chantée, les trois années de travaux, la première nuit de tempête où les pierres ont chanté. Le chapitre célèbre le jeune Évariste Daubrac à chaque page. Il se termine par une liste des élèves qui ont aidé à graver les signes. La liste a été découpée au canif, proprement, au ras de la reliure." },
    ],
  },
  K_traite: {
    title: "Le Traité des encres défendues", place: "bibliotheque", back: true,
    text: [
      "Le traité manque au catalogue. Tu le trouves par hasard, ou presque : relié en veau noir, rangé à l'envers entre deux herbiers, au plus haut rayon de la troisième galerie. Quelqu'un l'a oublié là, ou caché là, il y a longtemps.",
      "Les pages décrivent des encres que tous les collèges ont défendues : l'encre de fièvre, l'encre qui fait mentir, l'encre de sommeil. Au milieu se trouve une page cornée. Tu la recopies mot pour mot à la lueur de la lampe, et tu remets le livre où tu l'as trouvé.",
    ],
    fx: { item: "traite", clue: "o_traite", ep: ["seance", 300] },
  },
  K_traite_rate: {
    title: "Les rayons", place: "bibliotheque", back: true,
    text: [
      "Tu passes deux heures à chercher dans les galeries, d'échelle en échelle. Les traités d'encres abondent, mais ceux des encres défendues restent introuvables. Sœur Mélisande te regarde descendre la dernière échelle les mains vides, et retourne à sa reliure.",
    ],
  },
  K_herbier_rate: {
    title: "L'herbier introuvable", place: "bibliotheque", back: true,
    text: [
      "L'Herbier de Maître Ancel devrait être aux sciences naturelles, au deuxième étage, mais sa place est vide. Tu cherches sur les rayons voisins, puis sur les chariots de retour, puis sous les tables. Il faudra revenir, ou demander.",
    ],
  },

  // ------------------------------------------------------------------ l'atelier
  H_atelier: {
    title: "L'atelier de la Main", place: "atelier", hub: true, atelier: true, backName: "l'atelier",
    text: [
      { first: true, text: "L'atelier de la Main est une ancienne grange voûtée, au bas du collège, avec une forge, deux fours à verre, des établis couverts d'outils, et une odeur de charbon, de copeaux et de métal chaud. Des pièces d'élèves pendent au mur par centaines, chacune avec une étiquette et une date : des clés, des poignées, des plaques gravées, des bols de verre soufflé." },
      { again: true, text: "La forge ronfle, les marteaux sonnent, et Mère Fage jure contre un soufflet." },
      { saison: "hiver", text: "En hiver, l'atelier est l'endroit le plus chaud du collège, et les élèves de tous les Arts se trouvent des raisons d'y passer." },
    ],
    choices: [
      { label: "Aider le grand roux qui se bat avec une pièce à la forge", hide: { any: [{ seen: "A_jodoc" }] }, when: "day", to: "A_jodoc" },
      { label: "Travailler à un établi", when: "day", takes: 2, fx: { pratique: { nature: 1 } }, to: "K_etabli" },
      { label: "Faire répéter à Jodoc l'épreuve de Mère Fage", with: "jodoc", hide: { any: [{ has: "jodoc:entraine2" }, { not: { has: "jodoc:entraine1" } }] }, takes: 2, fx: { flag: "jodoc:entraine2", conf: { jodoc: 10 }, pratique: { nature: 1 } }, to: "K_jodoc_repete" },
      { label: "Proposer à Jodoc de répéter l'épreuve de Mère Fage avec lui", with: "jodoc", hide: { has: "jodoc:entraine1" }, takes: 2, fx: { flag: "jodoc:entraine1", conf: { jodoc: 10 }, pratique: { nature: 1 } }, to: "K_jodoc_repete" },
      SLEEP,
    ].concat(moves("atelier")),
  },
  K_etabli: {
    title: "À l'établi", place: "atelier", back: true,
    text: [
      { first: true, text: "Mère Fage te donne un établi, un bloc de tilleul et un ciseau. « Grave-moi un nœud. Un vrai, qui tienne. Quand le bois se raidit sous ta main, tu as fini. » Tu y passes deux heures, et le bois reste mou. Elle passe, grogne, et te donne un autre bloc." },
      { again: true, text: "Tu reprends ton établi : le ciseau, le maillet, la sciure, et le bois qui finit parfois par se raidir sous la main." },
      { if: { has: "passe:forge" }, once: true, text: "Mère Fage s'arrête derrière toi et te regarde tenir le marteau. « Toi, tu as tenu une forge. Ça se voit au poignet. » Elle repart, et le lendemain, elle te donne du métal." },
    ],
  },
  K_jodoc_repete: {
    title: "L'épreuve répétée", place: "atelier", back: true,
    text: [
      { if: { has: "jodoc:entraine2" }, text: "Vous recommencez. Tu joues Mère Fage cette fois, debout derrière lui, les bras croisés, en grognant. Jodoc rit d'abord, puis il oublie que tu es là. Il grave le signe, et le métal se raidit. Il recommence, et le métal se raidit encore. « C'est toi qui m'as fait ça », dit-il. Tu lui réponds que c'est lui, et il a l'air de te croire un peu." },
      { if: { all: [{ has: "jodoc:entraine1" }, { not: { has: "jodoc:entraine2" } }] }, text: "L'épreuve de Mère Fage est toujours la même : graver un signe de tenue dans une plaque de fer, devant elle, en un temps donné. Jodoc la réussit seul dix fois de suite. Devant toi, qui le regardes, il rate la première, puis la deuxième. À la troisième, il pose le ciseau. « Tu vois. Dès qu'on me regarde, j'ai des mains de beurre. »" },
      { if: { all: [{ has: "jodoc:entraine1" }, { not: { has: "jodoc:entraine2" } }] }, text: "Vous recommencez jusqu'au soir. Tu lui parles pendant qu'il grave, de tout et de rien, de Brèches, des moutons. Vers la fin, il réussit une plaque en riant de l'une de tes histoires." },
    ],
  },

  // ------------------------------------------------------------------ le dortoir
  H_dortoir: {
    title: "Le dortoir", place: "dortoir", hub: true, backName: "le dortoir",
    text: [
      { first: true, text: "Le dortoir des premières années est une longue salle sous les combles : quarante lits de fer alignés de part et d'autre d'une allée centrale, un coffre au pied de chacun, et au milieu, un gros poêle de faïence que les élèves se disputent l'hiver. Les lucarnes donnent sur le port et sur la mer." },
      { again: true, when: "day", text: "Le dortoir est désert, les lits faits au carré, et la lumière tombe des lucarnes." },
      { again: true, when: "night", text: "La nuit, le dortoir respire de quarante souffles ; quelqu'un ronfle, la lune passe dans une lucarne, et le poêle craque en refroidissant." },
      { saison: "hiver", text: "Le vent de mer siffle sous les ardoises, et l'on dort avec ses bas, sa robe étalée sur la couverture." },
    ],
    choices: [
      { label: "Étudier le carnet de Maître Salvanhac", if: { item: "carnet" }, hide: { any: [{ not: { item: "carnet" } }, { has: "enigme:p_chiffre" }] }, to: "Z_carnet" },
      { label: "Écrire à l'institutrice de Brèches", saison: "automne", hide: { any: [{ has: "lettre:1" }, { not: { saison: "automne" } }] }, takes: 1, to: "K_lettre1" },
      { label: "Écrire à l'institutrice de Brèches", saison: "hiver", hide: { any: [{ has: "lettre:2" }, { not: { saison: "hiver" } }] }, takes: 1, to: "K_lettre2" },
      { label: "Parler à Ysé de sa gazette", with: "yse", after: "V_yse", hide: { seen: "K_gazette" }, to: "K_gazette" },
      { label: "Donner à Ysé de quoi écrire la vraie histoire de la digue", with: "yse", after: "K_gazette", if: { all: [{ item: "cahier" }, { item: "page" }] }, why: "Il faudrait à Ysé autre chose que des soupçons : des pièces.", hide: { has: "gazette:prete" }, to: "K_gazette_prete" },
      SLEEP,
    ].concat(moves("dortoir")),
  },
  K_lettre1: {
    title: "Une lettre à Brèches", place: "dortoir",
    text: [
      "Tu écris sur ton genou, assis{e} sur ton lit, la plume grinçante. L'institutrice voudra tout savoir : le collège, les maîtres, ce qu'on mange, si tu as des amis, si tu travailles bien.",
      "La vérité tient en peu de mots. Le collège est immense et froid, les maîtres savants et lointains, et un neveu de Recteur te traite de mouton devant tout le réfectoire.",
    ],
    fx: { flag: "lettre:1" },
    choices: [
      { label: "Écrire la vérité, telle qu'elle est", fx: { trait: { franchise: 1 } }, back: "H_dortoir" },
      { label: "Écrire une belle lettre, qui la rendra fière", fx: { trait: { franchise: -1 } }, back: "H_dortoir" },
    ],
  },
  K_lettre2: {
    title: "Une lettre à Brèches", place: "dortoir",
    text: [
      "La réponse de l'institutrice est arrivée en décembre, couverte de son écriture ronde : tout le village a lu ta lettre, le curé l'a lue en chaire, ton oncle a acheté un mouton de plus pour fêter ça.",
      "Il faut répondre. Depuis l'automne, tu as appris des choses que tu ne sais à qui confier : un vieux maître qui perd la mémoire, un thé qui te met mal à l'aise, une digue qui chante faux.",
    ],
    fx: { flag: "lettre:2" },
    choices: [
      { label: "Lui confier ce qui t'inquiète", fx: { trait: { franchise: 1 } }, back: "H_dortoir" },
      { label: "Lui parler de la neige et des cours, et garder le reste pour toi", fx: { trait: { franchise: -1 } }, back: "H_dortoir" },
    ],
  },

  // ------------------------------------------------------------------ la nuit et le matin
  N_matin: {
    title: "Le matin", place: "dortoir", reveil: true, backName: "le dortoir",
    text: [
      "La cloche du collège sonne six heures. Autour de toi, quarante élèves se lèvent en grognant, cherchent leurs bas, et se bousculent au broc d'eau froide.",
      { saison: "automne", text: "Par la lucarne, tu vois le port dans la brume du matin, et les voiles des pêcheurs qui rentrent." },
      { saison: "hiver", text: "Par la lucarne, il fait encore nuit. Le broc a gelé en surface, et Jodoc casse la glace du poing." },
      { saison: "printemps", text: "Par la lucarne, le soleil se lève sur la mer, et des martinets crient autour du clocher." },
      { after: "B_tempete", before: "X_examen", once: true, text: "Tu as encore dans l'oreille la note fausse de la digue. Tu l'as peut-être entendue cette nuit, ou peut-être rêvée." },
    ],
    fxEvery: { rest: true },
    choices: [{ label: "Descendre dans la cour", to: "H_cour" }],
  },

  // ------------------------------------------------------------------ le port
  H_port: {
    title: "Le port de Hautsignes", place: "port", hub: true, backName: "le port",
    text: [
      { first: true, text: "Le collège descend vers la ville par une rue en escalier, et la ville descend vers le port. Les quais de Hautsignes sont étroits, encombrés de filets et de casiers, bordés de maisons hautes aux pignons de bois. La halle aux poissons fume et crie sous son toit d'ardoise. Derrière, la rue des Drapiers aligne ses boutiques, et au bout des quais commence la digue." },
      { again: true, text: "Le port s'agite sous les mouettes ; la halle crie, et l'air sent la marée et le goudron." },
      { saison: "hiver", text: "En hiver, la moitié des barques reste au sec, retournées sur les quais comme des carapaces." },
      { when: "night", text: "Le port s'éteint. Les tavernes du quai restent ouvertes, et Nanon ferme le portail du collège à huit heures." },
    ],
    choices: [
      { label: "Pousser la porte d'une boutique de la rue des Drapiers", when: "day", to: "V_drapiers" },
      { label: "Flâner le long des quais", when: "day", takes: 1, to: "K_quais" },
      { label: "Marcher jusqu'à la digue", to: "H_digue" },
      { back: "H_cour" },
    ],
  },
  V_drapiers: {
    title: "Rue des Drapiers", place: "port", back: true, shop: "drapiers",
    text: [
      { first: true, text: "La rue des Drapiers vend de tout sauf du drap. Les élèves du collège y achètent leurs plumes, leur papier, leurs chandelles, et les ingrédients des encres chez un droguiste aux doigts teints en bleu, qui pèse chaque chose sur une balance de cuivre." },
      { again: true, text: "Le droguiste lève ses doigts bleus pour te saluer." },
      { first: true, text: "En pesant ses noix de galle, il se plaint d'un client : « Maître Vilmorin. Charmant homme. Il me doit quarante livres, et il en doit autant au chapelier, au tailleur, au marchand de vin. On dit qu'il a vendu sa montre. » Il soupire. « Les gens charmants coûtent cher. »" },
    ],
    fx: { clue: "s_dettes" },
  },
  K_quais: {
    title: "Les quais", place: "port", back: true, rumeur: "port",
    text: [
      { first: true, text: "Tu marches le long des quais, entre les casiers et les filets qui sèchent. Les pêcheurs ravaudent, assis sur des bornes, et parlent de la mer comme d'une voisine difficile." },
      { again: true, text: "Tu retrouves les quais, les pêcheurs et les filets. On commence à te reconnaître : l'élève du collège qui écoute." },
    ],
  },

  // ------------------------------------------------------------------ la digue
  H_digue: {
    title: "La Digue Chantée", place: "digue", hub: true, backName: "la digue",
    text: [
      { first: true, text: "La digue part du bout des quais et s'en va en ligne droite vers la mer : une demi-lieue de blocs de granit gris assemblés sans mortier, assez large pour que deux charrettes s'y croisent. Côté ville, l'eau est calme et verte ; côté mer, les vagues viennent mourir sur les blocs." },
      { first: true, text: "Les signes sont partout : gravés dans chaque bloc, profonds comme un doigt, polis par trente ans d'embruns, et certains grands comme une porte. Quand le vent souffle, la digue tout entière bourdonne, d'un son si grave qu'on le sent dans les genoux plus qu'on ne l'entend." },
      { again: true, text: "Tu retrouves le granit gris de la digue, ses signes, et le bourdonnement grave sous tes pieds." },
      { after: "B_tempete", text: "Au bout de la digue, à la Tête, un des grands signes est fendu de haut en bas, et des maçons ont posé un étai de bois en travers. Le bourdonnement de la digue a pris une note fausse, qui grince par moments." },
    ],
    choices: [
      { label: "Lire la grande plaque de bronze", hide: { seen: "K_plaque" }, to: "K_plaque" },
      { label: "Descendre les marches, côté mer, au pied de la digue", when: "day", hide: { seen: "K_stele" }, takes: 1, to: "K_stele" },
      { label: "Poser la main sur les signes et les écouter", takes: 1, fx: { pratique: { magie: 1 } }, to: "K_pierres" },
      { label: "Étudier le signe fendu de la Tête", after: "B_tempete", hide: { seen: "K_tete" }, takes: 2, fx: { pratique: { magie: 1, savoir: 1 }, flag: "tete:etudiee" }, to: "K_tete" },
      { back: "H_port" },
    ],
  },
  K_plaque: {
    title: "La plaque", place: "digue", back: true,
    text: [
      "Au milieu de la digue, une grande plaque de bronze est scellée dans le granit, verdie par le sel. Les lettres en relief ont été polies par toutes les mains qui les ont touchées.",
      "Au-dessous, quelqu'un a déposé un bouquet de bruy{{or:s4|è}}re, attaché d'un ruban du collège.",
    ],
    fx: { clue: "s_plaque" },
  },
  K_stele: {
    title: "Au pied de la digue", place: "digue", back: true,
    text: [
      "Des marches glissantes descendent le long du granit jusqu'à une petite grève de galets, côté mer, que la marée découvre deux fois par jour. Il y fait sombre et froid ; les vagues claquent contre les blocs, et l'écume te mouille le visage.",
      "Contre la digue, presque cachée par les algues, une petite {{or:s1|s}}tèle de pierre tendre, à demi rongée par le sel. Quelqu'un a gratté les algues autour de l'inscription, il y a peu de temps.",
      "Sur la stèle reposent une couronne de fleurs séchées et un coquillage posé à plat.",
    ],
    fx: { clue: "s_stele" },
  },
  K_pierres: {
    title: "Les pierres qui chantent", place: "digue", back: true,
    text: [
      { first: true, text: "Tu poses la paume à plat sur un grand signe. Le granit est froid, puis il vibre, un frémissement profond, régulier, comme un chat qui ro{{or:s5|n}}ronne sous la main. Les signes se répondent d'un bloc à l'autre, tout le long de la digue, et l'ensemble tient la mer à distance comme on tient une porte." },
      { again: true, text: "Tu reviens écouter les signes. Peu à peu, tu distingues leurs voix : les grands signes graves de la base, les petits signes aigus du parapet, et la Tête, tout au bout, qui donne le ton aux autres." },
      { after: "B_tempete", text: "Depuis la tempête, la voix de la Tête est fausse. Tous les signes de la digue l'ont suivie d'un quart de ton, et le granit grince sous ta main." },
    ],
  },
  K_tete: {
    title: "Le signe de la Tête", place: "digue", back: true,
    text: [
      "Tu passes deux heures au bout de la digue, assis{e} sur l'étai, à recopier le signe fendu dans ton cahier de cours. Il est plus grand que toi, et plus compliqué qu'aucun des signes du collège : des courbes imbriquées les unes dans les autres, qui reviennent toutes au même point, comme les fils d'une toile.",
      "La fente passe au milieu de la plus belle courbe. Le granit, de part et d'autre, ne vibre plus.",
      "À force de suivre les traits du doigt, tu sens la logique du signe : chaque courbe reçoit la vague et la passe à la suivante, et la dernière la rend à la mer. Il te manque la note qui faisait vibrer l'ensemble, et la pierre, elle, la garde pour elle.",
    ],
  },
} };
