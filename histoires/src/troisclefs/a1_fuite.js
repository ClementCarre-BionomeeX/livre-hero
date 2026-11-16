// Act I, the way out of the Remonteur's house, lived from each post (`a1`) under each result of the vote `fuite_a1`
// (toits, egouts, porte, tie = chacun). The one whose country it is leads, and sets monde:a1:fuite=propre on a win.
// Others set: monde:a1:f_arriere, monde:a1:f_grille, monde:a1:f_brancard, monde:a1:f_lanternes, monde:a1:f_leurre.
// The voice, if it holds the unfinished letter (monde:a1:lettre_prevot), chooses here: leave it for the provost
// (monde:a1:lettre_remise) or keep it (monde:a1:lettre_gardee).
var PLAN = function (t, e, p, c) { return [{ if: { scrutin: "fuite_a1", is: "toits" }, to: t }, { if: { scrutin: "fuite_a1", is: "egouts" }, to: e }, { if: { scrutin: "fuite_a1", is: "porte" }, to: p }, { to: c }]; };
var PROPRE = { set: { "monde:a1:fuite": "propre" } };

module.exports = {
  passages: {
    // ============================================================ the hand
    A1m_fuite: { act: "I", title: "Dix secondes", place: "poids", branch: PLAN("A1m_f_toits", "A1m_f_egouts", "A1m_f_porte", "A1m_f_chacun") },

    A1m_f_toits: { act: "I", title: "La lucarne de l'alcôve", place: "poids", ambiance: "nuit",
      text: [
        "La lucarne est au-dessus du lit, dans la pente du toit. Tu montes sur le matelas crevé, tu lèves le châssis d'une épaule, et la nuit te tombe dessus, mouillée, avec une odeur d'ardoise et de fumée froide.",
        "Tu te hisses. Le toit du Remonteur est raide, luisant, et finit à dix pieds de là contre le rempart, dont le parapet le domine d'une hauteur d'homme. En bas, dans l'impasse, les lanternes font un lac jaune. Aucune ne regarde en l'air : le guet d'Aiguemorne cerne les portes, par doctrine.",
        "Derrière toi, deux têtes sortent de la lucarne l'une après l'autre. Il faut les mener jusqu'au rempart, sur dix pieds d'ardoise mouillée, sans qu'une seule glisse.",
      ],
      choices: [
        { label: "Passer la première, à plat, et tendre la main à chaque pas", test: { dom: "nature", diff: 0, label: "Nature", help: [{ if: { item: "corde" }, v: 15 }, { if: { voie: "coureur" }, v: 15 }] }, win: { fx: Object.assign({ ep: ["seance", 2000] }, PROPRE), to: "A1m_f_toits_ok" }, lose: { fx: { pv: -2, ep: ["seance", 900] }, to: "A1m_f_toits_ko" } },
        { label: "Courir jusqu'au faîte, t'y caler, et les tirer l'un après l'autre à la force des bras", test: { dom: "combat", diff: 0, label: "Combat", help: [{ if: { item: "corde" }, v: 15 }] }, win: { fx: Object.assign({ ep: ["seance", 2000] }, PROPRE), to: "A1m_f_toits_ok" }, lose: { fx: { pv: -2, ep: ["seance", 900] }, to: "A1m_f_toits_ko" } },
      ] },
    A1m_f_toits_ok: { act: "I", title: "Le rempart", place: "citadelle", ambiance: "nuit",
      text: [
        "Dix pieds. Tu les fais trois fois : une pour toi, une pour chacun des deux autres, dont tu tiens le poignet et à qui tu dis où poser le pied, tout bas, comme on apprend à marcher à un enfant. L'ardoise ne parle pas. Le parapet du rempart vous reçoit un par un.",
        "De là-haut, vous voyez l'impasse comme un puits. Les casaques bleues enfoncent la porte de la cour. Une lanterne monte l'escalier de bois, s'arrête sur le seuil de l'atelier, et reste là, immobile, longtemps. Puis la voix lente du prévôt, qui ne s'adresse à personne : « Maître Balancier. »",
        "Vous êtes déjà sur le chemin de ronde, courbés, dans le vent. Le rempart mène partout.",
      ],
      choices: [{ label: "Redescendre vers la ville basse par les toits", to: "A1c_apres", big: true }] },
    A1m_f_toits_ko: { act: "I", title: "Une ardoise", place: "poids", ambiance: "nuit",
      text: [
        "Une ardoise part sous un pied qui n'est pas le tien. Tu l'entends glisser, sauter la gouttière, et éclater sur le pavé de l'impasse, au milieu des lanternes.",
        "« Le toit ! » Vingt têtes se lèvent. Une arbalète claque ; le carreau siffle très au-dessus de vous et va se perdre contre le rempart. Tu attrapes ce que tu trouves, une manche, un col, et tu tires. Vous passez le parapet en vrac, les genoux en sang.",
        "Vous êtes sur le rempart, et toute la citadelle le sait. Les sifflets courent déjà d'une guérite à l'autre.",
      ],
      choices: [{ label: "Courir, et sauter dans le premier toit qui se présente", to: "A1c_apres", big: true }] },

    A1m_f_egouts: { act: "I", title: "La trappe de la cave", place: "poids", ambiance: "souterrain",
      text: [
        "L'escalier intérieur descend de l'alcôve au cellier, raide comme une échelle. Vous y êtes en dix marches. La cave du Remonteur est petite, propre, rangée : un tonnelet, des bocaux, et dans un angle, sous une claie, la dalle du regard, avec son anneau.",
        "Elle ne vient pas. Tu t'accroupis, tu approches la lampe. On l'a scellée, par précaution d'homme soigneux, d'une barre de fer passée dans deux pitons et fermée d'un cadenas. Un bon cadenas d'horloger, à quatre gorges, gras de son huile.",
        "Au-dessus de vous, le plancher de l'atelier résonne. Ils sont dans l'escalier de bois.",
      ],
      choices: [
        { label: "Le cadenas, au crochet, sans regarder le plafond", test: { dom: "discretion", diff: 0, label: "Discrétion", help: [{ if: { item: "rossignols" }, v: 20 }, { if: { voie: "crocheteur" }, v: 15 }] }, win: { fx: { flag: "monde:a1:f_grille", ep: ["seance", 1500] }, to: "A1m_f_egouts_ok" }, lose: { fx: { ep: ["seance", 700] }, to: "A1m_f_egouts_ko" } },
        { label: "Arracher un piton, avec le tisonnier du cellier pour levier", test: { dom: "combat", diff: 0, label: "Combat" }, win: { fx: { flag: "monde:a1:f_grille", ep: ["seance", 1500] }, to: "A1m_f_egouts_ok" }, lose: { fx: { pv: -1, ep: ["seance", 700] }, to: "A1m_f_egouts_ko" } },
      ] },
    A1m_f_egouts_ok: { act: "I", title: "Quatre gorges", place: "poids", ambiance: "souterrain",
      text: [
        "Le fer cède. Tu retiens la barre pour qu'elle ne sonne pas, tu lèves la dalle, et une haleine froide monte du noir, avec un bruit d'eau lente.",
        "Les deux autres passent. Tu descends le dernier échelon en ramenant la dalle sur ta tête, et tu as la présence d'esprit de tirer la claie par-dessus, du bout des doigts, par la fente. La cave, vue d'en haut, sera une cave.",
        "Le plancher tremble encore, là-haut. Puis la dalle se pose, et il n'y a plus de plancher, plus de guet, plus de ville : il y a le noir, et quelqu'un devant toi qui dit *à droite*.",
      ],
      choices: [{ label: "Suivre dans le collecteur", to: "A1c_apres", big: true }] },
    A1m_f_egouts_ko: { act: "I", title: "Un cadenas d'horloger", place: "poids", ambiance: "souterrain",
      text: [
        "Il résiste. Maître Balancier l'avait choisi lui-même, et le vieil homme s'y connaissait. Tes mains font ce qu'elles savent ; ton oreille, elle, est au plafond, où une voix lente vient de dire « Maître Balancier », puis, plus fort : « La cave ! Ils sont à la cave ! »",
        "Le fer cède enfin, d'un coup, avec un bruit de vaisselle. La barre tombe. Vous vous jetez dans le trou l'un sur l'autre, sans refermer, pendant que les bottes dégringolent l'escalier du cellier.",
        "Ils ont le regard, et des lanternes. Vous avez dix pas d'avance, dans un boyau, sur des gens qui n'aiment pas se mouiller.",
      ],
      choices: [{ label: "Courir dans le noir", to: "A1c_apres", big: true }] },

    A1m_f_porte: { act: "I", title: "Le brancard", place: "poids", ambiance: "nuit",
      text: [
        "Le volet de l'alcôve fait sept pieds de long. Avec le traversin, le manteau roulé et un drap par-dessus, cela dessine une forme. Tu prends les deux poignées de devant, c'est-à-dire les deux gonds, qui te scient les paumes.",
        "L'escalier de bois descend le long du mur, à ciel ouvert, vers une cour pleine de lanternes. Il a dix-huit marches. Un brancard qu'on descend doit rester d'aplomb : celui de devant lève les bras, celui de derrière les baisse, et si l'un des deux se trompe, ce qu'il y a sous le drap glisse, et montre de quoi il est fait.",
        "Devant toi marche le médecin, sans se presser. Tu regardes ses talons.",
      ],
      choices: [
        { label: "Descendre les bras haut, marche après marche, le visage dans le drap", test: { dom: "combat", diff: 5, label: "Combat" }, win: { fx: { flag: "monde:a1:f_brancard", ep: ["seance", 1500] }, to: "A1m_f_porte_ok" }, lose: { fx: { ep: ["seance", 700] }, to: "A1m_f_porte_ko" } },
        { label: "Régler ton pas sur celui de derrière, à l'oreille", test: { dom: "discretion", diff: 5, label: "Discrétion" }, win: { fx: { flag: "monde:a1:f_brancard", ep: ["seance", 1500] }, to: "A1m_f_porte_ok" }, lose: { fx: { ep: ["seance", 700] }, to: "A1m_f_porte_ko" } },
      ] },
    A1m_f_porte_ok: { act: "I", title: "Dix-huit marches", place: "poids", ambiance: "nuit",
      text: [
        "Dix-huit marches. Tu les descends les bras au-dessus de la tête, le drap contre la joue, et le brancard ne penche pas d'un doigt. Les lanternes s'écartent. Tu vois des bottes, des bas de hallebardes, une flaque. Tu ne vois aucun visage, et aucun visage ne te voit : on regarde le drap.",
        "Quelqu'un parle, devant, d'une voix d'homme de l'art qu'on dérange. Quelqu'un d'autre répond, lentement. Tu ne distingues pas les mots. Tu sens seulement, par les gonds, dans tes paumes, que le porteur de derrière a cessé de respirer.",
        "Puis les talons du médecin se remettent en marche, et tu les suis.",
      ],
      choices: [{ label: "Sortir de l'impasse, au pas", to: "A1c_apres", big: true }] },
    A1m_f_porte_ko: { act: "I", title: "La douzième marche", place: "poids", ambiance: "nuit",
      text: [
        "À la douzième marche, ton talon dérape sur le bois mouillé. Tu te rattrapes. Le brancard, lui, a pris une pente d'un pied ; et tu sens, sous le drap, le traversin partir lentement vers toi, comme un dormeur qui se retourne.",
        "Tu redresses. Trop tard d'un rien : un coin du manteau roulé dépasse du drap, gris, mou, sans rien d'une épaule. Tu descends les six dernières marches en priant que les lanternes regardent ailleurs.",
        "En bas, la voix lente du prévôt s'est tue au milieu d'une phrase.",
      ],
      choices: [{ label: "Avancer quand même", to: "A1c_apres", big: true }] },

    A1m_f_chacun: { act: "I", title: "La lucarne, seul{e}", place: "poids", ambiance: "nuit",
      text: [
        "Tu as dit les toits, et tu les prends. La lucarne de l'alcôve, le châssis levé d'une épaule, l'ardoise mouillée sous les mains. Personne derrière toi ; les deux autres ont filé chacun vers son idée.",
        "En bas, l'impasse est un lac de lanternes. Le rempart est à dix pieds. Tu n'as à porter que toi, ce qui allège et ce qui serre le cœur.",
      ],
      choices: [
        { label: "Dix pieds d'ardoise, d'une traite", test: { dom: "nature", diff: 5, label: "Nature", help: [{ if: { voie: "coureur" }, v: 15 }] }, win: { fx: { ep: ["seance", 1200] }, to: "A1m_f_chacun_ok" }, lose: { fx: { pv: -3, ep: ["seance", 600] }, to: "A1m_f_chacun_ko" } },
      ] },
    A1m_f_chacun_ok: { act: "I", title: "Trois chemins", place: "citadelle", ambiance: "nuit",
      text: [
        "Le parapet, le chemin de ronde, le vent. Tu es passé{e}.",
        "D'en haut, tu regardes l'impasse. Les casaques enfoncent la cour. Il y a du bruit vers la cave, du bruit vers la porte : les deux autres font leur chemin, et tu ne peux rien pour eux que d'arriver à la Clef Tordue.",
      ],
      choices: [{ label: "Redescendre vers la ville basse", to: "A1c_apres", big: true }] },
    A1m_f_chacun_ko: { act: "I", title: "La gouttière", place: "poids", ambiance: "nuit",
      text: [
        "L'ardoise te lâche à mi-pente. Tu glisses sur le ventre, les ongles cherchant un clou, et c'est la gouttière qui t'arrête, en pliant, avec un cri de zinc que toute l'impasse entend.",
        "« Le toit ! » Tu remontes à quatre pattes sous un carreau d'arbalète qui passe trop loin pour faire peur et assez près pour instruire. Le rempart te reçoit sur l'épaule. Tu cours.",
      ],
      choices: [{ label: "Courir sur le rempart", to: "A1c_apres", big: true }] },

    // ============================================================ the eye
    A1o_fuite: { act: "I", title: "Dix secondes", place: "poids", branch: PLAN("A1o_f_toits", "A1o_f_egouts", "A1o_f_porte", "A1o_f_chacun") },

    A1o_f_toits: { act: "I", title: "Le dernier à la lucarne", place: "poids", ambiance: "nuit",
      text: [
        "Tu passes le dernier. C'est la place de l'œil : derrière, d'où l'on voit tout le monde et où personne ne vous voit.",
        "Avant de monter, tu fais ce qu'il faut. Tu souffles la lampe : une fenêtre éclairée dit où l'on est, une fenêtre noire ne dit rien. Tu refermes le châssis derrière toi, en le retenant. Puis, à plat sur l'ardoise, tu regardes en bas, et tu comptes.",
        "Les lanternes sont des hommes. Il s'agit de savoir combien, où, et surtout de quel côté du rempart il n'y en a pas.",
      ],
      choices: [
        { label: "Compter les lanternes, et souffler à ceux de devant : « À gauche ! Le levant est vide ! »", test: { dom: "nature", diff: 0, label: "Nature", help: [{ if: { has: "monde:a1:egouts" }, v: 5 }, { if: { has: "a1:o_prevenu" }, v: 10 }] }, win: { fx: { flag: "monde:a1:f_arriere", ep: ["seance", 1500] }, to: "A1o_f_toits_ok" }, lose: { fx: { ep: ["seance", 700] }, to: "A1o_f_toits_ko" } },
      ] },
    A1o_f_toits_ok: { act: "I", title: "Le levant", place: "citadelle", ambiance: "nuit",
      text: [
        "Dix-sept lanternes. Douze dans l'impasse, trois dans la cour, deux qui montent par la venelle du rempart, vers le couchant. Au levant, rien : la sentinelle du chemin de ronde a quitté son poste pour regarder le spectacle, penchée au parapet, à cinquante pas.",
        "« À gauche. » Ceux de devant t'entendent. Vous prenez le rempart par le levant, courbés, dans le dos de l'homme qui regarde l'impasse.",
        "Tu te retournes une fois. La fenêtre de l'atelier vient de se rallumer : une lanterne y est entrée, et s'est arrêtée.",
      ],
      choices: [{ label: "Suivre les autres vers la ville basse", to: "A1c_apres", big: true }] },
    A1o_f_toits_ko: { act: "I", title: "Le couchant", place: "citadelle", ambiance: "nuit",
      text: [
        "Tu comptes. Les lanternes bougent, se croisent, se cachent l'une l'autre ; tu en trouves quinze, puis dix-huit, puis tu ne sais plus. « À droite ! » dis-tu, parce qu'il faut dire quelque chose.",
        "À droite, par la venelle du rempart, deux gardes montaient justement prendre le toit à revers. Vous leur tombez presque dans les bras. Il y a une seconde de stupeur égale des deux côtés ; c'est vous qui en sortez les premiers, par la force de l'habitude, et vous refluez vers le levant avec deux sifflets aux trousses.",
      ],
      choices: [{ label: "Courir", to: "A1c_apres", big: true }] },

    A1o_f_egouts: { act: "I", title: "Sous la ville", place: "poids", ambiance: "souterrain",
      text: [
        "Dix échelons de fer, et le noir se referme sur vous comme une eau. Tu as la lampe du mort, mouchée à demi, qui éclaire tes mains et pas beaucoup plus.",
        { if: { has: "monde:a1:egouts" }, text: "Tu es déjà venu{e}. La banquette, la mousse blanche, les petits bruits de bouche de l'eau. Quarante pas, la première fourche, et ta croix de craie dans l'angle, que tu as eu la sagesse de laisser.", else: "Tu n'es jamais venu{e}. Il y a une banquette glissante, une voûte basse où pend une mousse blanche, et une eau qui coule vers ta droite. L'eau descend à la rivière : c'est la seule chose que tu saches, et il faudra qu'elle suffise." },
        "Derrière toi, deux souffles. Ils te suivront où tu iras, sans discuter. C'est ce que veut dire mener.",
      ],
      choices: [
        { label: "« À droite. À droite. Toujours la pente. »", test: { dom: "nature", diff: -10, label: "Nature", help: [{ if: { has: "monde:a1:egouts" }, v: 35 }, { if: { item: "lanterne" }, v: 10 }, { if: { present: "fifrelin" }, v: 10 }] }, win: { fx: Object.assign({ ep: ["seance", 2000] }, PROPRE), to: "A1o_f_egouts_ok" }, lose: { fx: { pv: -2, ep: ["seance", 900] }, to: "A1o_f_egouts_ko" } },
      ] },
    A1o_f_egouts_ok: { act: "I", title: "Entre deux piles du lavoir", place: "basfonds", ambiance: "eau",
      text: [
        "À droite, à droite, toujours la pente. La grille qui pend sur un gond. La seconde fourche. Tu ne vois rien et tu ne te trompes pas : tes pieds ont appris ce chemin, ou l'eau te le dit.",
        "Derrière, très loin, il y a eu des voix, une lueur. Elles ont pris à gauche, où vient l'air. Elles sont en ce moment sous les cuisines de la citadelle, à quatre pattes, en train d'apprendre ce que tu sais.",
        "L'air change. La voûte s'ouvre sur un rond de nuit plus claire que le noir : la Morne, entre deux piles du lavoir, et les trente boîtes de paille des lavandières, vides, alignées comme des stalles. Vous sortez de sous la ville dans une odeur de savon.",
      ],
      choices: [{ label: "Gagner la Clef Tordue par le quai", to: "A1c_apres", big: true }] },
    A1o_f_egouts_ko: { act: "I", title: "Sous la soupe du guet", place: "poids", ambiance: "souterrain",
      text: [
        "À la première fourche, tu hésites. L'air vient de gauche. L'eau va à droite. Tu prends l'air.",
        "Le boyau monte, se resserre. Vous marchez courbés, puis à genoux, dans une eau glacée, et la lampe s'éteint à un endroit où tu aurais donné un écu pour la garder. Quand tu comprends enfin, sous une grille par où tombent une lueur de cuisine et l'odeur du lard, vous êtes sous la citadelle, et le guet est derrière vous dans le même tuyau.",
        "Il faut redescendre à sa rencontre, jusqu'à la fourche, et la passer avant lui. Vous y arrivez ensemble. Il y a dans le noir une mêlée brève, aveugle, de coudes et de jurons, où personne ne sait qui il frappe ; puis la pente, enfin, à droite, et vous dessus, courant dans l'eau.",
      ],
      choices: [{ label: "Courir jusqu'à la rivière", to: "A1c_apres", big: true }] },

    A1o_f_porte: { act: "I", title: "Derrière le brancard", place: "poids", ambiance: "nuit",
      text: [
        "Tu portes derrière. Tu as les deux coins du volet dans les mains, le drap devant toi, et par-dessus le drap la nuque du porteur de tête, qui descend les bras levés.",
        "C'est une bonne place pour un œil. On te croit occupé à porter ; tu comptes. Dans la cour, cinq lanternes. À la porte, deux hallebardes croisées. Et au pied de l'escalier, un homme trapu, sans lanterne, les mains derrière le dos, qui regarde descendre le cortège en mâchonnant quelque chose.",
        "Si cela tourne, il faudra lâcher et courir. Tu dois savoir par où avant d'en avoir besoin.",
      ],
      choices: [
        { label: "Tête basse, compter les hommes, et repérer le trou dans le cercle", test: { dom: "discretion", diff: 0, label: "Discrétion", help: [{ if: { has: "monde:a1:ugolin_vu" }, v: 5 }, { if: { has: "a1:o_prevenu" }, v: 10 }] }, win: { fx: { flag: "monde:a1:f_lanternes", ep: ["seance", 1500] }, to: "A1o_f_porte_ok" }, lose: { fx: { ep: ["seance", 700] }, to: "A1o_f_porte_ko" } },
      ] },
    A1o_f_porte_ok: { act: "I", title: "Le trou dans le cercle", place: "poids", ambiance: "nuit",
      text: [
        "Le trou est à gauche de la porte de la cour : un pan de mur écroulé, à hauteur de ceinture, que le garde le plus proche tient pour un mur. Tu le notes. Tu notes aussi que les deux hallebardes de la porte sont des recrues, qui regardent le drap avec des yeux ronds et reculeraient devant un mort.",
        "Le cortège s'arrête. Devant, le médecin parle. Le prévôt répond, lentement, en répétant un mot. Tu ne lèves pas la tête. Tu touches seulement du genou, deux fois, le dessous du brancard : c'est le signal de la maison pour *je sais par où*.",
        "Le cortège repart.",
      ],
      choices: [{ label: "Sortir de l'impasse, au pas", to: "A1c_apres", big: true }] },
    A1o_f_porte_ko: { act: "I", title: "Les yeux du prévôt", place: "poids", ambiance: "nuit",
      text: [
        "Tu lèves la tête une fois de trop. C'est pour compter ; mais un porteur qui regarde autour de lui a cessé d'être un porteur, et l'homme trapu, au pied de l'escalier, a justement les yeux sur toi.",
        "Il ne dit rien. Il te regarde descendre les trois dernières marches, avec cette attention lente qu'on lui connaît, et qui se pose d'abord sur les mains.",
        "Les tiennes tiennent un volet de fenêtre par ses gonds.",
      ],
      choices: [{ label: "Avancer quand même", to: "A1c_apres", big: true }] },

    A1o_f_chacun: { act: "I", title: "La cave, seul{e}", place: "poids", ambiance: "souterrain",
      text: [
        "Tu as dit la cave, et tu y descends. L'escalier du cellier, la claie, la dalle du regard, que ferme une barre cadenassée. Personne pour le fer : tu n'as que tes mains, et le tisonnier.",
        "Un piton saute. La dalle vient. Le noir monte.",
      ],
      choices: [
        { label: "Dix échelons, et la pente", test: { dom: "nature", diff: -5, label: "Nature", help: [{ if: { has: "monde:a1:egouts" }, v: 35 }, { if: { item: "lanterne" }, v: 10 }] }, win: { fx: { ep: ["seance", 1200] }, to: "A1o_f_chacun_ok" }, lose: { fx: { pv: -3, ep: ["seance", 600] }, to: "A1o_f_chacun_ko" } },
      ] },
    A1o_f_chacun_ok: { act: "I", title: "La rivière", place: "basfonds", ambiance: "eau",
      text: [
        "À droite, à droite, la pente. Tu sors entre deux piles du lavoir, dans une odeur de savon, et tu restes un moment accroupi{e} au bord de la Morne, à écouter la ville.",
        "Là-haut, des sifflets. Ils vont dans trois directions. Les deux autres courent encore.",
      ],
      choices: [{ label: "Gagner la Clef Tordue par le quai", to: "A1c_apres", big: true }] },
    A1o_f_chacun_ko: { act: "I", title: "À gauche", place: "poids", ambiance: "souterrain",
      text: [
        "Tu prends à gauche, où vient l'air, et le collecteur te le fait payer : un boyau, de l'eau jusqu'aux coudes, la lampe morte, et au bout une grille scellée sous une cuisine.",
        "Tu redescends. Tu retrouves la pente à tâtons, par l'oreille. Quand tu sors enfin au lavoir, tu as perdu une demi-heure, la peau de tes genoux, et tout ce qu'il te restait de bonne opinion sur les égouts.",
      ],
      choices: [{ label: "Gagner la Clef Tordue par le quai", to: "A1c_apres", big: true }] },

    // ============================================================ the voice
    A1v_fuite: { act: "I", title: "Dix secondes", place: "poids", branch: [
      { if: { has: "monde:a1:lettre_prevot" }, to: "A1v_f_lettre" }, { to: "A1v_f_plan" }] },
    A1v_f_lettre: { act: "I", title: "La demi-feuille", place: "poids", ambiance: "nuit",
      text: [
        "Tu as la demi-feuille dans ta manche. *À Monsieur le Prévôt Corbineau, en main propre.* Le prévôt Corbineau est en ce moment dans la cour, à vingt pas, et il monte.",
        "C'est une lettre qui ne nomme personne. Elle dit qu'un honnête homme avait peur, qu'on lui avait commandé quelque chose à la Tour, et que *les trois sont d'accord*. Laissée sur l'établi, bien en vue, sous la main du mort, elle sera lue dans une minute par celui à qui on l'écrivait. Emportée, elle est une preuve, la seule que vous ayez : et une preuve trouvée dans la poche d'un Rossignol ne vaut pas cher devant un juge.",
      ],
      urgent: 20,
      choices: [
        { label: "La poser sur l'établi, sous la main de Maître Balancier", fx: { flag: "monde:a1:lettre_remise", ep: ["histoire", 800] }, to: "A1v_f_plan" },
        { label: "La garder : on ne donne pas sa seule carte à un homme qui vous cerne", timeout: true, fx: { flag: "monde:a1:lettre_gardee", ep: ["histoire", 400] }, to: "A1v_f_plan" },
      ] },
    A1v_f_plan: { act: "I", title: "Dix secondes", place: "poids", branch: PLAN("A1v_f_toits", "A1v_f_egouts", "A1v_f_porte", "A1v_f_chacun") },

    A1v_f_toits: { act: "I", title: "Quelque chose à écouter", place: "poids", ambiance: "nuit",
      text: [
        "Les deux autres sont déjà à la lucarne. Toi, tu as dix secondes pour faire croire au guet que la maison est pleine.",
        "Tu pousses le verrou de la porte de l'escalier. Tu traînes contre elle le coffre à outils, qui racle le plancher avec un bruit de siège. Puis tu te mets au milieu de l'atelier, parmi les quarante balanciers, et tu parles : pour la porte, pour l'escalier, pour la cour.",
      ],
      choices: [
        { label: "Trois voix à toi seul{e} : une qui veut se rendre, une qui refuse, une qui pleure", test: { dom: "social", diff: 0, label: "Social", help: [{ if: { voie: "comedien" }, v: 20 }] }, win: { fx: { flag: "monde:a1:f_leurre", ep: ["seance", 1500] }, to: "A1v_f_leurre_ok" }, lose: { fx: { ep: ["seance", 700] }, to: "A1v_f_leurre_ko" } },
        { label: "« Prévôt ! Nous avons un otage ! Reculez d'un pas par marche, ou je ne réponds de rien ! »", test: { dom: "social", diff: -5, label: "Social" }, win: { fx: { flag: "monde:a1:f_leurre", ep: ["seance", 1500] }, to: "A1v_f_leurre_ok" }, lose: { fx: { ep: ["seance", 700] }, to: "A1v_f_leurre_ko" } },
      ] },
    A1v_f_egouts: { act: "I", title: "Quelque chose à écouter", place: "poids", ambiance: "nuit",
      text: [
        "Les deux autres sont déjà dans l'escalier du cellier. Toi, tu as dix secondes pour faire croire au guet que vous tenez l'étage.",
        "Tu pousses le verrou de la porte de l'escalier. Tu traînes contre elle le coffre à outils, qui racle le plancher avec un bruit de siège. Puis tu te mets au milieu de l'atelier, parmi les quarante balanciers, et tu parles : pour la porte, pour l'escalier, pour la cour.",
      ],
      choices: [
        { label: "Trois voix à toi seul{e} : une qui veut se rendre, une qui refuse, une qui pleure", test: { dom: "social", diff: 0, label: "Social", help: [{ if: { voie: "comedien" }, v: 20 }] }, win: { fx: { flag: "monde:a1:f_leurre", ep: ["seance", 1500] }, to: "A1v_f_leurre_ok" }, lose: { fx: { ep: ["seance", 700] }, to: "A1v_f_leurre_ko" } },
        { label: "« Prévôt ! Nous avons un otage ! Reculez d'un pas par marche, ou je ne réponds de rien ! »", test: { dom: "social", diff: -5, label: "Social" }, win: { fx: { flag: "monde:a1:f_leurre", ep: ["seance", 1500] }, to: "A1v_f_leurre_ok" }, lose: { fx: { ep: ["seance", 700] }, to: "A1v_f_leurre_ko" } },
      ] },
    A1v_f_leurre_ok: { act: "I", title: "Une maison pleine", place: "poids", ambiance: "nuit",
      text: [
        "Cela prend. Dans l'escalier, les bottes s'arrêtent. Tu entends le prévôt, de sa voix lente, dire à quelqu'un : « Doucement. Ils se disputent. Laissez-les se disputer, c'est autant de gagné. »",
        "Tu leur donnes encore une réplique, pour la route : une voix cassée, qui supplie qu'on ouvre. Puis tu recules sur la pointe des pieds, tu rejoins les deux autres, et tu laisses derrière toi une porte barricadée, quarante horloges, et un guet d'Aiguemorne qui négocie avec patience la reddition d'une pièce vide.",
        "Ils mettront cinq bonnes minutes à enfoncer cette porte. Le Cadenas est un homme prudent. C'est son défaut, la ville basse le dit depuis vingt ans.",
      ],
      choices: [{ label: "Rejoindre les autres", to: "A1c_apres", big: true }] },
    A1v_f_leurre_ko: { act: "I", title: "Un homme qui écoute bien", place: "poids", ambiance: "nuit",
      text: [
        "Tu parles. C'est bien fait, et un autre s'y laisserait prendre. Mais dans l'escalier il y a un silence, puis la voix lente du prévôt, sans colère :",
        "« Une seule poitrine. Les trois voix respirent au même endroit. » Un temps. « Enfoncez. Les deux autres sont déjà partis. »",
        "L'épaule d'un garde donne dans la porte. Le coffre à outils recule d'un pied. Tu n'attends pas le second coup.",
      ],
      choices: [{ label: "Rejoindre les autres, vite", to: "A1c_apres", big: true }] },

    A1v_f_porte: { act: "I", title: "Le médecin", place: "poids", ambiance: "nuit",
      text: [
        "La houppelande du mort te va aux épaules. Son bonnet de drap sent le tabac. Tu as pris sur l'établi sa trousse d'horloger, qui de loin vaut une trousse de chirurgien, et tu descends l'escalier de bois devant le brancard, du pas de quelqu'un qui a été tiré de son souper.",
        "La cour est pleine de lanternes. Elles s'écartent d'elles-mêmes devant le drap. Au pied des marches, un homme trapu, les mains derrière le dos, ne s'écarte pas.",
        "« Qui êtes-vous ? » C'est le prévôt d'Aiguemorne. Il mâchonne un clou de girofle. Il regarde ton visage, tes mains, le brancard, dans cet ordre.",
        { if: { has: "monde:p:cadenas_vu" }, text: "Il t'a déjà regardé{e} de près, hier, entre un buffet et une porte. La houppelande et le bonnet sont tout ce qui te sépare de ce souvenir." },
      ],
      choices: [
        { label: "« Le médecin de la rue Saint-Éloi. Votre mort respire, monsieur le prévôt. Il respire pour dix minutes, si vous me laissez passer. »", test: { dom: "social", diff: -5, label: "Social", help: [{ if: { voie: "comedien" }, v: 15 }, { if: { item: "fards" }, v: 10 }, { if: { has: "monde:p:cadenas_vu" }, v: -15 }, { if: { voie: "rebouteux" }, v: 15 }] }, win: { fx: Object.assign({ ep: ["seance", 2000] }, PROPRE), to: "A1v_f_porte_ok" }, lose: { fx: { ep: ["seance", 900] }, to: "A1v_f_porte_ko" } },
        { label: "Ne pas t'arrêter : « Place ! » Et l'écarter de l'épaule, comme font les gens qui ont le droit", test: { dom: "combat", diff: -5, label: "Combat", help: [{ if: { has: "monde:p:cadenas_vu" }, v: -10 }] }, win: { fx: Object.assign({ ep: ["seance", 2000] }, PROPRE), to: "A1v_f_porte_ok" }, lose: { fx: { ep: ["seance", 900] }, to: "A1v_f_porte_ko" } },
      ] },
    A1v_f_porte_ok: { act: "I", title: "« Passez »", place: "poids", ambiance: "nuit",
      text: [
        "Il te regarde. Derrière toi, sur le brancard, sous le drap, il y a un traversin crevé et un manteau roulé ; et entre cet homme et cette vérité, il n'y a que ta figure.",
        "« Il respire ? » Il répète le mot, lentement. Quelque chose passe dans ses yeux, qui n'est pas du soupçon : du soulagement. Il connaissait le vieil homme. Il fait un pas de côté. « Passez. Vite. Deux hommes pour vous ouvrir la rue ! »",
        "Deux gardes vous ouvrent la rue. Vous sortez de l'impasse des Poids escortés par le guet, au pas des porteurs, sous les lanternes ; et la veuve Tournemine, à sa fenêtre, se signe sur votre passage.",
        "Au premier coin, les deux gardes saluent et s'en retournent. Tu entends alors, très loin derrière, monter de l'atelier un cri bref, d'une seule voix. Le prévôt vient de trouver Maître Balancier à son établi. Il lui faudra le temps d'une respiration pour comprendre qui il a laissé sortir, et vous serez à trois rues.",
      ],
      choices: [{ label: "Poser le brancard, et disparaître", to: "A1c_apres", big: true }] },
    A1v_f_porte_ko: { act: "I", title: "Sous le drap", place: "poids", ambiance: "nuit",
      text: [
        "« Il respire ? » Le prévôt répète le mot. Puis, sans hâte, il tend la main vers le brancard et soulève un coin du drap.",
        "Il regarde le traversin. Il regarde le manteau roulé. Il te regarde, toi, avec une espèce de tristesse, comme un maître d'école qui avait espéré mieux.",
        "« Arrêtez-les. »",
        "Le brancard tombe. C'est le meilleur usage qu'on en puisse faire : sept pieds de volet dans les jambes de trois gardes. Vous êtes déjà sur le pan de mur écroulé, à gauche de la porte, et de l'autre côté, et dans la venelle, avec derrière vous tous les sifflets de la ville haute.",
      ],
      choices: [{ label: "Courir", to: "A1c_apres", big: true }] },

    A1v_f_chacun: { act: "I", title: "La porte, seul{e}", place: "poids", ambiance: "nuit",
      text: [
        "Tu as dit la porte, et tu la prends. Sans brancard, sans porteurs : il te reste une houppelande, un bonnet de drap, et ta figure.",
        "Tu descends l'escalier de bois en criant. C'est le plus sûr : on n'arrête pas quelqu'un qui appelle le guet.",
      ],
      choices: [
        { label: "« Au meurtre ! Là-haut ! Ils sont sur le toit, ils sont à la cave ! Montez donc ! »", test: { dom: "social", diff: 0, label: "Social", help: [{ if: { voie: "comedien" }, v: 15 }, { if: { has: "monde:p:cadenas_vu" }, v: -15 }] }, win: { fx: { ep: ["seance", 1200] }, to: "A1v_f_chacun_ok" }, lose: { fx: { pv: -2, ep: ["seance", 600] }, to: "A1v_f_chacun_ko" } },
      ] },
    A1v_f_chacun_ok: { act: "I", title: "Un voisin", place: "poids", ambiance: "nuit",
      text: [
        "Tu es un voisin, en bonnet, épouvanté. Tu montres le toit, la cave, tout à la fois. Les gardes te bousculent pour monter, et celui qui te heurte te demande pardon.",
        "Le prévôt seul ne bouge pas. Il te suit des yeux jusqu'au bout de l'impasse. Il n'a pas l'air convaincu ; il a l'air d'un homme qui ne peut pas être partout, et qui choisit.",
      ],
      choices: [{ label: "Tourner le coin, et courir", to: "A1c_apres", big: true }] },
    A1v_f_chacun_ko: { act: "I", title: "Un bonnet de mort", place: "poids", ambiance: "nuit",
      text: [
        "« Ce bonnet, dit la voix lente du prévôt, je l'ai vu trente ans sur une autre tête. »",
        "Une hallebarde s'abaisse devant toi. Tu passes dessous, par un réflexe que la Douairière t'a fait répéter cent fois dans sa cour avec un manche à balai ; le bois te rabote l'épaule. Le pan de mur, à gauche de la porte. La venelle. Tu cours, la houppelande du Remonteur te battant les jambes, et tu la laisses au premier coin, sur une borne, pliée, parce qu'on a beau courir, il y a des choses qu'on ne garde pas.",
      ],
      choices: [{ label: "Courir", to: "A1c_apres", big: true }] },
  },
};
