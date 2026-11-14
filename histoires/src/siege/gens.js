// The people of Sarance: what each says when the hero comes to them (people.at sends the reader here), and the topics
// that open as the story goes on. These passages carry no act: one meets the same people from the first day to the last.

module.exports = {
  // ------------------------------------------------------------------ Bertrand d'Aussonne
  T_aussonne: {
    title: "Le capitaine d'Aussonne", back: true,
    text: [
      { first: true, text: "Le capitaine d'Aussonne t'écoute jusqu'au bout, debout, et te laisse debout toi aussi. Il a une balafre blanche de la tempe au menton, des yeux lourds et fatigués, et la manie de regarder vers le sud quand il réfléchit." },
      { again: true, text: "Aussonne te salue d'un signe de tête. « L'intendance. Parlez. »" },
      { regard: { aussonne: ["allie", "admiratif"] }, text: "Il te serre l'avant-bras, à la manière des soldats." },
    ],
    choices: [
      { label: "Lui parler de Josse Bréhal", hide: { seen: "TA_brehal" }, to: "TA_brehal" },
      { label: "Lui parler de la solde de la garnison", if: { day: { max: 4 } }, hide: { any: [{ has: "solde:payee" }, { not: { day: { max: 4 } } }] }, to: "TA_solde" },
      { label: "Lui demander quand viendra l'armée du Roi", hide: { seen: "TA_roi" }, to: "TA_roi" },
      { label: "Lui dire que ses soldats et les malades réclament le même grain", after: "marche:flux", hide: { seen: "D_soldats" }, to: "D_soldats" },
      { label: "Lui demander ce qu'il attend de toi, avant le vote sur la reddition", camp: "garnison", if: { day: { min: 9 } }, hide: { any: [{ camp: "garnison" }, { not: { day: { min: 9 } } }, { has: "vote:reddition" }] }, to: "TA_camp" },
      { label: "Lui parler de la lettre du Roi", if: { any: [{ clue: "l_courrier" }, { clue: "l_jacquemin" }, { item: "lettre_roi" }] }, hide: { any: [{ seen: "TA_lettre" }, { not: { any: [{ clue: "l_courrier" }, { clue: "l_jacquemin" }, { item: "lettre_roi" }] } }] }, to: "TA_lettre" },
      { label: "Lui dire ce que fait son lieutenant, la nuit", if: { has: "b:verite" }, hide: { any: [{ not: { has: "b:verite" } }, { has: "oudart:arrete" }, { has: "oudart:fui" }, { seen: "O_denonce" }] }, to: "O_denonce" },
    ],
  },
  TA_brehal: {
    title: "Josse Bréhal",
    text: [
      "« Bréhal ? Un homme exact. Le seul de cette ville qui savait compter sans se tromper en sa faveur. » Aussonne regarde ses mains. « On l'a trouvé au pied de la Tour du Sel, le manteau plein de vin. Je ne l'aurais pas cru buveur. On se trompe sur les gens. »",
      "Il hésite, ce qui ne lui ressemble pas. « Deux jours avant, il est venu me voir. Il voulait savoir pourquoi je lui avais demandé l'état exact des greniers. Je ne lui avais rien demandé. Je l'ai renvoyé : j'avais une ville à défendre. Mes écritures, c'est mon lieutenant qui les tient, de Lys. Je pensais que Bréhal confondait. »",
    ],
    fx: { clue: "b_demande", set: { sait: "secretaire" }, tie: "lieutenant" },
    choices: [{ back: "T_aussonne" }],
  },
  TA_solde: {
    title: "La solde",
    text: [
      { first: true, text: "« Trois semaines de retard. » Aussonne le dit comme on annonce une blessure. « Soixante écus pour la garnison. Le Conseil n'a pas un sou, à en croire Carbonnel. Mes sergents font leur devoir, mais un soldat qu'on ne paie pas finit par compter, lui aussi. Et Oudart me dit que certains parlent de passer la rivière. »" },
      { again: true, text: "« Toujours soixante écus », dit Aussonne." },
      { if: { gold: { max: 1199 } }, text: "Ta bourse est loin du compte. Au comptoir du Lombard, sur la place du Marché, on prête à tout le monde, et cher." },
    ],
    choices: [
      { label: "Lui remettre les soixante écus de la solde", fx: { gold: -1200, flag: "solde:payee", regard: { aussonne: "cordial" }, ep: ["seance", 800] }, to: "TA_solde_payee" },
      { back: "T_aussonne" },
    ],
  },
  TA_solde_payee: {
    title: "La solde payée",
    text: [
      "Aussonne compte les écus deux fois, puis il les fait porter dans la cour, où l'on appelle les sergents un à un. Tu entends les noms résonner contre les murs, et chaque fois le bruit d'une main qui frappe une épaule.",
      "« Je n'oublierai pas », dit le capitaine. Venant de lui, c'est un discours.",
    ],
    choices: [{ back: "T_aussonne" }],
  },
  TA_roi: {
    title: "L'armée du Roi",
    text: [
      "« Le Roi viendra. » Aussonne regarde vers le sud, par la fenêtre, la route vide. « Il a promis. Le Roi tient parole. »",
      { once: true, text: "Sa main gauche s'est fermée sur le pommeau de son épée pendant qu'il parlait, et elle ne s'est pas rouverte." },
    ],
    choices: [{ back: "T_aussonne" }],
  },
  TA_camp: {
    title: "Ce que veut le capitaine",
    text: [
      "Aussonne t'emmène sur le chemin de ronde du château, loin des oreilles. Le vent fait claquer sa cape.",
      "« Le Conseil votera sur la reddition au dixième jour. Vassal et Carbonnel voteront pour, parce qu'ils ont des caves pleines et peur pour leurs vitres. De Lys aussi, j'ai fini par le comprendre. Aubron votera contre, mais pour de mauvaises raisons. » Il se tourne vers toi. « J'ai besoin de ta voix. Et j'ai besoin de tes greniers pour tenir jusqu'au Roi. Je ne te demande pas de m'aimer. Je te demande de tenir avec moi. »",
    ],
    choices: [
      { label: "Te ranger à ses côtés : la garnison du Roi", fx: { camp: "garnison", regard: { aussonne: "allie" } }, to: "TA_camp_oui" },
      { label: "Lui demander du temps pour réfléchir", back: "T_aussonne" },
    ],
  },
  TA_camp_oui: {
    title: "Avec la garnison",
    text: [
      "Aussonne hoche la tête une fois. « Bien. » Il appelle un sergent et lui dit, devant toi, que l'intendance a désormais accès au château à toute heure, et que ses ordres valent les siens dans la Basse-Ville.",
      "En redescendant la rampe, tu croises Oudart de Lys qui monte. Il te sourit, et son sourire a quelque chose de pensif.",
    ],
    choices: [{ back: "T_aussonne" }],
  },
  TA_lettre: {
    title: "La lettre du Roi",
    text: [
      { if: { not: { item: "lettre_roi" } }, text: "Tu lui parles d'un pli au sceau rouge, arrivé au neuvième jour du siège. Aussonne te regarde longtemps, sans ciller. « Le courrier du Roi ne regarde que moi. » C'est tout ce que tu obtiens. Il se garde de nier, et s'en tient là." },
      { if: { item: "lettre_roi" }, text: "Tu poses la lettre sur la table, le sceau rompu tourné vers lui. Aussonne ne la touche pas. Il devient très pâle, puis très calme." },
      { if: { item: "lettre_roi" }, text: "« À Pont-Aubert, le Margrave a pendu le capitaine au créneau de sa propre porte, avec ses trois sergents. Il avait rendu la place à bonnes conditions. » Il parle bas. « Si je lis cette lettre au Conseil, la ville ouvre ses portes le lendemain, et c'est mon tour. Alors je tiens. Je tiens jusqu'à ce que le Margrave se lasse, ou que l'hiver le chasse, ou que le Roi change d'avis. »" },
      { if: { item: "lettre_roi" }, text: "« Faites ce que vous voulez de ce papier. Lisez-le au Conseil, si vous croyez que c'est juste. Vous m'aurez pendu avant le Margrave, voilà tout. »" },
    ],
    fx: { set: { sait: "secretaire" } },
    choices: [
      { label: "Lui promettre de garder le secret", if: { item: "lettre_roi" }, hide: { not: { item: "lettre_roi" } }, fx: { flag: "lettre:secret", regard: { aussonne: "redevable" } }, back: "T_aussonne" },
      { label: "Lui dire que la ville a le droit de savoir", if: { item: "lettre_roi" }, hide: { not: { item: "lettre_roi" } }, fx: { flag: "lettre:annoncee", regard: { aussonne: "hostile" } }, back: "T_aussonne" },
      { back: "T_aussonne", hide: { item: "lettre_roi" } },
    ],
  },
  O_denonce: {
    title: "Le lieutenant",
    text: [
      "Tu racontes au capitaine ce que tu sais : la demande faite à Bréhal en son nom, la garde de la Tour du Sel, les lumières des Moulins à minuit.",
      { if: { any: [{ item: "bouton" }, { item: "carnet" }, { has: "oudart:vu" }] }, text: "Tu poses sur la table ce que tu as de plus solide. Aussonne le regarde longtemps." },
      { if: { item: "bouton" }, text: "Il prend le bouton d'argent au lys, le retourne, et le pose à côté de son propre gant. « Il m'a fait broder ces lys lui-même, quand je l'ai fait lieutenant. Il en était fier. »" },
      { if: { not: { any: [{ item: "bouton" }, { item: "carnet" }, { has: "oudart:vu" }] } }, text: "Aussonne t'écoute jusqu'au bout. « Des lumières dans la nuit, et des racontars de sentinelle. Vous accusez l'homme qui m'a sauvé la vie à Saint-Clair. » Il se lève. « Revenez avec une preuve, ou ne revenez pas. »" },
    ],
    fx: { flag: "oudart:soupcon" },
    choices: [
      { label: "Le laisser faire arrêter Oudart", if: { any: [{ item: "bouton" }, { item: "carnet" }, { has: "oudart:vu" }] }, hide: { not: { any: [{ item: "bouton" }, { item: "carnet" }, { has: "oudart:vu" }] } }, fx: { flag: ["oudart:arrete", "oudart:denonce"], regard: { aussonne: "redevable", oudart: "hostile" } }, to: "O_arrestation" },
      { label: "Prendre congé", hide: { any: [{ item: "bouton" }, { item: "carnet" }, { has: "oudart:vu" }] }, back: true },
    ],
  },
  O_arrestation: {
    title: "L'arrestation",
    text: [
      "Aussonne fait fermer les portes du château et appeler Oudart de Lys dans la salle du Conseil. Tu attends dans l'embrasure d'une fenêtre.",
      "Oudart entre en souriant, voit les quatre sergents, voit ta présence, et cesse de sourire. Il ne tire pas l'épée. Il défait lui-même son ceinturon et le pose sur la table.",
      "« Vous me remercierez un jour, capitaine, dit-il. Le jour où le Margrave entrera par la brèche et que vous compterez les morts. »",
      "On l'emmène dans la tour basse. Aussonne reste debout, seul au milieu de la salle, et tu sors sans qu'il te le demande.",
    ],
    fx: { ep: ["histoire", 2000], tie: "oudart_margrave" },
    choices: [{ label: "Descendre dans la cour", to: "H_chateau" }],
  },

  // ------------------------------------------------------------------ Oudart de Lys
  T_oudart: {
    title: "Oudart de Lys", back: true,
    text: [
      { first: true, text: "Oudart de Lys te salue avec une révérence de cour, à moitié pour rire. Il a des yeux clairs, une moustache soignée, un pourpoint bleu à boutons d'argent, et cette facilité des gens qui savent qu'on les aime." },
      { first: true, text: "« L'intendance ! Enfin quelqu'un qui saura dire au capitaine combien de jours il nous reste. Moi, il ne m'écoute plus. »" },
      { again: true, text: "Oudart te sourit. « Que puis-je pour les greniers ? »" },
      { if: { item: "bouton" }, text: "Au deuxième bouton de son pourpoint, il manque un bouton d'argent. Un fil bleu pend à sa place." },
    ],
    choices: [
      { label: "Lui parler de Josse Bréhal", hide: { seen: "TO_brehal" }, to: "TO_brehal" },
      { label: "Lui demander pourquoi il a relevé Hoël de sa garde, la nuit de la mort de Bréhal", if: { clue: "b_hoel" }, hide: { any: [{ seen: "TO_garde" }, { not: { clue: "b_hoel" } }] }, to: "TO_garde" },
      { label: "Lui parler de la Truie", after: "marche:truie", hide: { any: [{ has: "truie:brulee" }, { missed: "II_truie" }, { seen: "S1_sortie" }] }, to: "TO_sortie" },
      { label: "L'accuser d'avoir tué Josse Bréhal", if: { any: [{ has: "b:verite" }, { clues: "B", min: 4 }] }, hide: { any: [{ seen: "O_confrontation" }, { has: "oudart:arrete" }, { has: "oudart:fui" }, { not: { any: [{ has: "b:verite" }, { clues: "B", min: 4 }] } }] }, to: "O_confrontation" },
    ],
  },
  TO_brehal: {
    title: "Bréhal, selon Oudart",
    text: [
      "« Pauvre Bréhal. » Oudart secoue la tête. « Il buvait, vous savez. Depuis la mort de sa femme. Il montait sur la Tour du Sel pour regarder le camp avec sa gourde, et parler tout seul. Une nuit, il a regardé de trop près. »",
      "« C'est moi qui ai fait relever le corps, au matin. Il sentait le vin à dix pas. Je n'en ai rien dit au capitaine, par respect. Le capitaine aimait bien Bréhal. »",
    ],
    choices: [{ back: "T_oudart" }],
  },
  TO_garde: {
    title: "La garde de la Tour du Sel",
    text: [
      "Oudart ne cesse pas de sourire, mais son sourire devient plus lent. « Hoël ? Je l'ai relevé parce qu'il dormait debout. J'ai pris sa garde moi-même : je voulais voir les feux du camp de nuit, il y avait des mouvements de troupes. »",
      "« J'ai regardé une heure, et je suis redescendu. Je n'ai vu personne monter. Bréhal a dû venir après. » Il te tapote l'épaule. « Vous faites bien de poser des questions. C'est votre charge. »",
    ],
    choices: [{ back: "T_oudart" }],
  },
  TO_sortie: {
    title: "Une sortie de nuit",
    text: [
      "« La Truie ? » Oudart s'anime. « Elle tirera dans trois jours, quand ils auront fini de monter le contrepoids. Si elle tire, la Basse-Ville brûle. J'ai proposé au capitaine une sortie de nuit : vingt sergents par la barbacane, des pots de poix, et on y met le feu. Il dit que c'est de la folie. Moi, je dis que c'est maintenant ou jamais. »",
      "« Il me faudrait de la poix, beaucoup, et quelqu'un pour témoigner au Conseil que c'était utile et pas seulement glorieux. Venez avec nous. »",
      { if: { not: { has: "poix" } }, text: "De la poix, on en trouve aux tanneries, chez Gilles Aubron, ou dans les entrepôts de Dame Vassal." },
    ],
    choices: [
      { label: "Accepter : vous sortirez cette nuit", if: { has: "poix" }, takes: "night", to: "S1_sortie" },
      { label: "Lui dire que tu reviendras avec de la poix", hide: { has: "poix" }, back: "T_oudart" },
      { label: "Refuser", back: "T_oudart" },
    ],
  },
  O_confrontation: {
    title: "Face à Oudart",
    text: [
      "Tu lui dis ce que tu sais. Tu le dis dans l'ordre, sans hausser la voix, comme on lit un registre : la demande au nom du capitaine, la garde relevée, le vin sur le manteau d'un homme qui ne buvait plus, les lumières des Moulins.",
      { if: { item: "bouton" }, text: "À la fin, tu poses le bouton d'argent sur la table, entre vous deux." },
      "Oudart t'écoute jusqu'au bout. Puis il s'assied, se sert un gobelet, t'en sert un autre.",
      "« Je ne voulais pas le tuer. Il m'a attrapé par le pourpoint, sur le parapet, en criant qu'il allait tout dire au capitaine. On s'est battus. Il est tombé. » Il boit. « Le vin, c'est moi. C'était plus propre. »",
      "« Maintenant, écoutez-moi, parce que personne d'autre ne vous le dira. Le Roi ne viendra pas. Le capitaine a reçu sa lettre il y a quinze jours, et il la cache. Le Margrave prendra la ville, cet hiver ou le prochain. Une ville prise d'assaut, on la donne aux soldats trois jours. Vous savez ce que ça veut dire. »",
      "« Moi, j'ouvre la Poterne des Moulins la nuit du douzième jour, au signal des trois lumières. Le Margrave entre sans combat, et il a juré qu'il n'y aurait pas de sac. Il me fera seigneur de Sarance. Je ne vous mens pas : je le fais aussi pour moi. »",
      "« Vous pouvez me faire pendre. Ou vous pouvez vous taire trois nuits, et sauver neuf mille personnes. »",
    ],
    fx: { flag: "b:verite", quest: "I_brehal", tie: ["oudart_margrave", "lieutenant"], set: { sait: "secretaire" } },
    choices: [
      { label: "Lui promettre de te taire jusqu'à la nuit du douzième jour", fx: { promise: "oudart", flag: "pacte:oudart", regard: { oudart: "allie" } }, to: "O_pacte" },
      { label: "Lui dire que tu vas tout raconter au capitaine", fx: { regard: { oudart: "hostile" } }, to: "O_fuite" },
    ],
  },
  O_pacte: {
    title: "Le silence",
    text: [
      "Oudart lève son gobelet vers toi. « Vous verrez. Dans dix ans, on dira que vous avez sauvé Sarance, et personne ne saura comment. »",
      "Tu sors du château avec son secret, qui pèse plus lourd que les clés des greniers.",
    ],
    choices: [{ label: "Descendre dans la cour", to: "H_chateau" }],
  },
  O_fuite: {
    title: "Le lieutenant s'en va",
    text: [
      "Oudart soupire. « Je m'en doutais. » Il se lève sans hâte, prend son manteau. « Le temps que vous trouviez le capitaine, je serai de l'autre côté de la Dorve. Jacquemin connaît la passe. »",
      "Il s'arrête à la porte. « Ma poterne ne s'ouvrira pas. Mais le Margrave viendra quand même, par la brèche. Souvenez-vous, ce jour-là, que je vous avais offert autre chose. »",
      "Quand tu arrives chez Aussonne avec deux sergents, la chambre du lieutenant est vide. On retrouve son cheval à l'écurie, et sa barque, au matin, échouée sur l'autre rive.",
    ],
    fx: { flag: ["oudart:fui", "oudart:denonce"], ep: ["histoire", 1500] },
    choices: [{ label: "Descendre dans la cour", to: "H_chateau" }],
  },

  // ------------------------------------------------------------------ Dame Aliénor Vassal
  T_alienor: {
    title: "Dame Vassal", back: true,
    text: [
      { first: true, text: "Dame Aliénor Vassal est une femme grande et sèche, vêtue de gris, avec un trousseau de clés à la ceinture comme une abbesse. Elle te regarde de haut en bas, et tu as la sensation très nette d'être pesé{e}." },
      { first: true, text: "« L'étranger{e} qu'on a fait intendant{e}. C'était une idée de Carbonnel, je suppose. Il a toujours aimé les choses qui ne lui coûtent rien. »" },
      { again: true, text: "Dame Vassal t'accorde un regard. « Encore vous. »" },
      { regard: { alienor: ["hostile", "rancunier"] }, text: "Elle te reçoit debout, sans t'offrir de siège, avec une politesse qui gèle l'air." },
    ],
    choices: [
      { label: "Lui parler de Josse Bréhal", hide: { seen: "TL_brehal" }, to: "TL_brehal" },
      { label: "Lui parler des trois cents setiers qui manquent", if: { clue: "g_compte" }, hide: { any: [{ has: "g:trouve" }, { not: { clue: "g_compte" } }] }, to: "TL_grain" },
      { label: "Lui acheter de la poix pour la défense", if: { gold: { min: 100 } }, why: "Il te faut cinq écus.", hide: { any: [{ has: "poix" }, { regard: { alienor: ["hostile", "rancunier"] } }] }, fx: { gold: -100, flag: "poix" }, to: "TL_poix" },
      { label: "Accepter son invitation à souper", camp: "jures", if: { day: { min: 9 } }, hide: { any: [{ seen: "TL_souper" }, { not: { day: { min: 9 } } }, { has: "vote:reddition" }, { regard: { alienor: ["hostile", "rancunier"] } }] }, takes: 2, to: "TL_souper" },
    ],
  },
  TL_brehal: {
    title: "Bréhal, selon Dame Vassal",
    text: [
      "« Bréhal se mêlait de mes affaires. » Elle ne baisse pas les yeux. « La veille de sa mort, je le lui ai dit sur la place du Marché, assez fort pour que tout le monde l'entende : ça finirait mal. Vous le saurez de toute façon, autant que ce soit par moi. »",
      "« Je ne l'ai pas poussé de sa tour, si c'est la question. Je n'ai jamais eu besoin de pousser personne. Il suffit d'attendre. »",
    ],
    fx: { clue: "b_alienor" },
    choices: [{ back: "T_alienor" }],
  },
  TL_poix: {
    title: "La poix",
    text: [
      "Dame Vassal fait un signe à son commis. « Vingt pots, de l'entrepôt de la rue Basse. À porter où l'intendance le dira. » Elle prend ton argent, le compte, et ajoute : « La guerre aussi, c'est du commerce. Seulement, on y paie d'avance. »",
    ],
    choices: [{ back: "T_alienor" }],
  },
  TL_grain: {
    title: "Le grain manquant",
    text: [
      { if: { not: { any: [{ clue: "g_caves" }, { clue: "g_carbonnel" }] } }, text: "« Trois cents setiers ? » Dame Vassal sourit avec une patience de maîtresse d'école. « Bréhal comptait mal, à la fin. Comptez mieux que lui, intendant{e}, et revenez me voir quand vous saurez de quoi vous parlez. »" },
      { if: { any: [{ clue: "g_caves" }, { clue: "g_carbonnel" }] }, text: "Tu lui dis ce que tu sais : le bon de grain gâté, la signature de Carbonnel, les sacs au S couronné dans ses caves. Elle t'écoute sans un geste." },
      { if: { any: [{ clue: "g_caves" }, { clue: "g_carbonnel" }] }, text: "« Bien », dit-elle enfin, et elle s'assied pour la première fois. « Parlons franchement, puisque vous êtes moins sot qu'on me l'avait dit. Ce grain, je l'ai payé. Pas à la ville : à Carbonnel, qui me devait plus qu'il ne vaut. Il est à moi par contrat, sinon par la loi. Qu'est-ce que vous voulez ? »" },
    ],
    choices: [
      { label: "Lui dire ce que tu veux", if: { any: [{ clue: "g_caves" }, { clue: "g_carbonnel" }] }, hide: { not: { any: [{ clue: "g_caves" }, { clue: "g_carbonnel" }] } }, to: "G_negoce" },
      { back: "T_alienor" },
    ],
  },
  TL_souper: {
    title: "Le souper des jurés",
    text: [
      "La salle à manger des Vassal sent la cire et le chapon. Sur la table, du pain blanc, du vin de la côte, des poires. Autour, Carbonnel, deux maîtres de la guilde des drapiers, un chanoine, et Dame Vassal en bout de table, qui découpe elle-même.",
      "On parle de tout sauf du siège jusqu'aux poires. Puis Dame Vassal pose son couteau. « Messire de Rouvre, le héraut du Margrave, m'a fait savoir que les conditions tiennent jusqu'au soir du dixième jour, et pas une heure de plus. » Personne ne demande comment elle le sait. Tout le monde le sait.",
      "« Les vies et les biens saufs. Les franchises confirmées. C'est mieux que ce que nous aurions du Roi, qui nous oublie, et du capitaine, qui nous fera tous mourir pour son honneur. » Elle te regarde. « Il nous manque une voix. »",
    ],
    fx: { tie: "alienor_heraut", meet: "heraut" },
    choices: [
      { label: "Lever ton verre avec les jurés", fx: { camp: "jures", regard: { alienor: "allie" } }, to: "TL_souper_oui" },
      { label: "Remercier pour le souper, et partir", back: "T_alienor" },
    ],
  },
  TL_souper_oui: {
    title: "Avec les jurés",
    text: [
      "Les verres se lèvent. Carbonnel boit le sien d'un trait, soulagé comme un homme à qui l'on ôte une épine. Dame Vassal te fait asseoir à sa droite pour le reste du repas.",
      "En sortant, son commis te glisse que les gardes de la maison Vassal seront à tes ordres si les choses tournent mal, et une bourse, « pour les menus frais de l'intendance ».",
    ],
    fx: { gold: 400 },
    choices: [{ back: "T_alienor" }],
  },
  G_negoce: {
    title: "Ce que tu veux",
    text: [
      "Dame Vassal attend, les mains croisées. Elle a déjà fait le compte de ce que tu peux exiger et de ce que tu peux offrir. Elle attend de voir si tu sais compter aussi.",
      { if: { has: "grain:vendu" }, text: "« Je vous préviens : il n'en reste pas trois cents. J'en ai vendu une part, ces derniers jours. Il y a des gens qui paient très cher le pain blanc, en temps de siège. »" },
    ],
    choices: [
      { label: "La menacer de tout révéler au Conseil si le grain n'est pas à la Halle ce soir", fx: { regard: { alienor: "rancunier" } }, to: "G_rendu" },
      { label: "Lui demander son prix", to: "G_prix" },
      { label: "Faire saisir ses caves par les sergents du capitaine", to: "G_saisie" },
      { label: "Ne rien faire pour l'instant", back: "T_alienor" },
    ],
  },
  G_prix: {
    title: "Le prix",
    text: [
      "« Mon prix ? » Dame Vassal a presque l'air amusée. « Votre voix. Le jour où le Conseil votera sur la reddition, vous voterez pour. Le grain sera à la Halle ce soir, et personne ne saura d'où il vient. »",
    ],
    choices: [
      { label: "Promettre ta voix pour la reddition", fx: { promise: "alienor", flag: "grain:achete", regard: { alienor: "cordial" } }, to: "G_achete" },
      { label: "Refuser", back: "G_negoce" },
    ],
  },
  G_achete: {
    title: "Le marché conclu",
    text: [
      "Dame Vassal te tend la main par-dessus la table. Sa poigne est sèche et ferme. « Je savais qu'on finirait par s'entendre. »",
      "À la nuit, des charrettes bâchées traversent la place du Marché sans lanternes, et des hommes de la maison Vassal montent des sacs aux greniers de la Halle. Les gardes de nuit ont reçu chacun un écu pour ne pas savoir compter.",
    ],
    fx: { flag: "g:trouve", quest: "II_grain", ep: ["seance", 1500] },
    choices: [{ label: "Faire la tournée des greniers pour voir les sacs rentrer", to: "G_versement" }],
  },
  G_rendu: {
    title: "Le grain rendu",
    text: [
      "Dame Vassal se lève. « Vous ne ferez pas carrière, intendant{e}. » Mais elle appelle son commis, et lui donne l'ordre à voix basse.",
      "À la nuit, des charrettes bâchées traversent la place du Marché. Tu les suis jusqu'à la Halle, et tu comptes toi-même les sacs qu'on monte aux greniers.",
    ],
    fx: { flag: ["g:trouve", "g:rendu"], quest: "II_grain", ep: ["seance", 1500] },
    choices: [{ label: "Faire la tournée des greniers pour voir les sacs rentrer", to: "G_versement" }],
  },
  G_saisie: {
    title: "La saisie",
    text: [
      "Aussonne t'écoute, demande à voir le bon, le lit deux fois. « Une jurée du Conseil. » Il se lève. « Je ne fais pas la loi dans les caves des marchands. Mais je la fais dans une ville assiégée. »",
      "Une heure plus tard, vingt sergents enfoncent la porte des caves de la maison Vassal sous les yeux de toute la place. Dame Vassal, debout sur son perron, garde le silence. On l'emmène au château, avec Carbonnel qu'on est allé chercher à l'Hôtel de ville en chemise.",
      "La place du Marché applaudit les sacs qui sortent, un à un, cousus du S couronné des greniers.",
    ],
    fx: { flag: ["g:trouve", "g:rendu", "alienor:arretee"], quest: "II_grain", stock: { moral: 8 }, regard: { alienor: "hostile", carbonnel: "craintif", gilles: "admiratif" }, ep: ["seance", 1500] },
    choices: [{ label: "Faire la tournée des greniers pour voir les sacs rentrer", to: "G_versement" }],
  },
  G_versement: {
    title: "Les sacs rentrent", place: "halle",
    text: [
      "Les sacs montent aux greniers, et tu les comptes au fur et à mesure, un bâton de craie à la main, une marche après l'autre.",
      { if: { not: { has: "grain:vendu" } }, text: "Deux cent soixante. Il en manque quarante pour faire le compte de Bréhal : ceux-là, on les a déjà mangés, ou vendus, ou perdus. Deux cent soixante setiers, c'est plus de quatre jours de pain pour toute la ville." },
      { if: { has: "grain:vendu" }, text: "Cent vingt. Le reste a déjà été vendu sous le manteau, sac par sac, à ceux qui pouvaient payer. Cent vingt setiers, c'est deux jours de pain pour toute la ville." },
      { if: { promise: "gilles", is: "en cours" }, text: "Tu as promis à Gilles Aubron que le port aurait sa part du grain retrouvé." },
    ],
    choices: [
      { label: "Tout verser aux greniers de la ville", if: { not: { has: "grain:vendu" } }, hide: { has: "grain:vendu" }, fx: { stock: { ble: 260 } }, to: "H_halle" },
      { label: "Tout verser aux greniers de la ville", if: { has: "grain:vendu" }, hide: { not: { has: "grain:vendu" } }, fx: { stock: { ble: 120 } }, to: "H_halle" },
      { label: "En faire porter une part au port, comme promis à Gilles, et verser le reste", if: { promise: "gilles", is: "en cours" }, hide: { not: { promise: "gilles", is: "en cours" } }, fx: { stock: { ble: 90 }, flag: "grain:part_port" }, to: "H_halle" },
    ],
  },

  // ------------------------------------------------------------------ Maître Renaud Carbonnel
  T_carbonnel: {
    title: "Maître Carbonnel", back: true,
    text: [
      { first: true, text: "Maître Carbonnel te reçoit dans son cabinet de l'Hôtel de ville, entre des piles de registres et un sceau de bronze grand comme une assiette. Il essuie ses lunettes sans arrêt, et sourit avant de répondre à chaque question, comme pour s'excuser de la réponse." },
      { again: true, text: "Carbonnel essuie ses lunettes. « Ah. L'intendance. »" },
      { regard: { carbonnel: "craintif" }, text: "Il se lève quand tu entres, et reste debout." },
    ],
    choices: [
      { label: "Lui parler de Josse Bréhal", hide: { seen: "TC_brehal" }, to: "TC_brehal" },
      { label: "Lui montrer le bon de sortie de grain gâté", if: { item: "bon" }, hide: { any: [{ seen: "TC_bon" }, { not: { item: "bon" } }] }, to: "TC_bon" },
      { label: "Consulter le registre des bons de l'Hôtel de ville", if: { has: "carbonnel:registre" }, hide: { any: [{ item: "bon" }, { not: { has: "carbonnel:registre" } }] }, takes: 1, to: "TC_registre" },
      { label: "Exiger l'argent du trésor de la ville pour la défense", if: { clue: "g_carbonnel" }, hide: { any: [{ has: "tresor:pris" }, { not: { clue: "g_carbonnel" } }] }, to: "TC_tresor" },
    ],
  },
  TC_brehal: {
    title: "Bréhal, selon Carbonnel",
    text: [
      "Carbonnel pâlit, essuie ses lunettes. « Bréhal… oui. Il est venu me voir, la veille de… Une histoire de papiers. Un bon. Je lui ai dit de voir ça avec le greffier. Les bons, on les copie tous au registre, vous savez. Tous. C'est la règle. »",
      "Il le dit trop vite, et il le regrette aussitôt, à voir sa tête.",
    ],
    fx: { flag: "carbonnel:registre" },
    choices: [{ back: "T_carbonnel" }],
  },
  TC_registre: {
    title: "Le registre des bons",
    text: [
      "Le greffier de l'Hôtel de ville te donne le registre sans discuter : l'intendance a le droit de tout voir. Tu remontes les pages jusqu'au début du mois.",
      "La copie est là, au deuxième jour : un bon de sortie pour trois cents setiers de grain gâté, au sceau de la ville, signé R. Carbonnel. Tu en fais faire une copie conforme par le greffier, qui tremble un peu en appliquant le sceau.",
    ],
    fx: { item: "bon", clue: "g_bon" },
    choices: [{ back: "T_carbonnel" }],
  },
  TC_bon: {
    title: "Le bon",
    text: [
      "Carbonnel regarde le bon comme on regarde un serpent sur son oreiller. Ses lunettes tombent sur le registre. Il ne les ramasse pas.",
      "« Elle m'a tenu, dit-il enfin. Vassal. Mes dettes. Trois mille écus, depuis la mauvaise année des draps. Elle a dit qu'elle effacerait tout. Elle a dit que le grain serait mieux gardé dans ses caves que dans les greniers de la ville, que c'était une précaution, qu'on le rendrait. » Il se tord les mains. « Ce n'était pas du grain gâté. C'était du bon blé. Je le savais. »",
      "« Ne me faites pas pendre. J'ai des petits-enfants. »",
    ],
    fx: { clue: "g_carbonnel", tie: "dette_carbonnel", regard: { carbonnel: "craintif" }, ep: ["perso", 400] },
    choices: [{ back: "T_carbonnel" }],
  },
  TC_tresor: {
    title: "Le trésor de la ville",
    text: [
      "« Le trésor ? » Carbonnel ouvre la bouche pour dire qu'il est vide. Il croise ton regard, la referme. Il se lève, va jusqu'à un coffre ferré derrière la tapisserie, et l'ouvre avec une clé qu'il porte au cou.",
      "« Soixante écus. C'est tout ce qu'il reste. Je les gardais pour… pour après. » Il te les compte d'une main tremblante.",
    ],
    fx: { gold: 1200, flag: "tresor:pris", regard: { carbonnel: "craintif" } },
    choices: [{ back: "T_carbonnel" }],
  },

  // ------------------------------------------------------------------ Mère Ysaure
  T_ysaure: {
    title: "Mère Ysaure", back: true,
    text: [
      { first: true, text: "Mère Ysaure est petite, ridée, les manches roulées sur des avant-bras de lavandière. Elle a un grain de beauté sur la joue et une voix qui porte jusqu'au fond de la salle sans jamais crier." },
      { first: true, text: "« C'est vous, le nouvel intendant ? » Elle ne te laisse pas répondre. « Alors c'est à vous que je demande du pain. J'ai quatre-vingts malades, des blessés, et sept cents réfugiés dans mon cloître. Ils mangent tous. »" },
      { again: true, text: "Mère Ysaure s'essuie les mains à son tablier. « Faites vite, on m'attend. »" },
      { regard: { ysaure: ["trahi", "hostile"] }, text: "Elle te regarde comme on regarde quelqu'un qu'on a cessé d'attendre." },
    ],
    choices: [
      { label: "Lui demander comment elle votera au Conseil", hide: { any: [{ has: "vote:reddition" }, { seen: "TY_vote" }] }, to: "TY_vote" },
      { label: "Lui demander à nouveau comment elle votera", if: { seen: "TY_vote" }, hide: { any: [{ not: { seen: "TY_vote" } }, { has: "vote:reddition" }] }, to: "TY_vote" },
      { label: "Lui parler du flux", after: "marche:flux", hide: { seen: "T_ysaure_flux" }, to: "T_ysaure_flux" },
    ],
  },
  TY_vote: {
    title: "Le vote de Mère Ysaure",
    text: [
      { if: { not: { has: "vote:rations" } }, text: "« La demi-ration ? » Elle réfléchit. « Je voterai pour si mes malades gardent la leur. Un homme qui a perdu son sang a besoin de pain pour en refaire. Sinon, je ne sais pas. »" },
      { if: { all: [{ has: "vote:rations" }, { not: { has: "vote:exp" } }] }, text: "« Mettre dehors les gens du Plessis ? » Elle te regarde comme si tu avais proposé de brûler l'église. « Contre. Et je le dirai en chaire, s'il le faut. »" },
      { if: { all: [{ has: "vote:exp" }, { not: { has: "vote:reddition" } }] }, text: "« La reddition. » Elle soupire. « Je ne sais plus. J'ai enterré plus de gens cette semaine qu'en un an. Si l'on me dit que le Roi vient, je tiendrai. Si personne ne vient, à quoi bon ? »" },
    ],
    fx: { sound: { rations: ["ysaure"] } },
    choices: [
      { label: "Lui promettre que ses malades garderont leur ration", if: { not: { has: "vote:rations" } }, hide: { any: [{ has: "vote:rations" }, { has: "hospice:promis" }] }, fx: { flag: "hospice:promis", sway: { rations: { ysaure: "pour" } } }, back: "T_ysaure" },
      { label: "Lui dire qu'il faut tenir encore", if: { all: [{ has: "vote:exp" }, { not: { has: "vote:reddition" } }] }, hide: { not: { all: [{ has: "vote:exp" }, { not: { has: "vote:reddition" } }] } }, fx: { sway: { reddition: { ysaure: "contre" } } }, back: "T_ysaure" },
      { label: "Lui dire qu'il est temps de faire la paix", if: { all: [{ has: "vote:exp" }, { not: { has: "vote:reddition" } }] }, hide: { not: { all: [{ has: "vote:exp" }, { not: { has: "vote:reddition" } }] } }, fx: { sway: { reddition: { ysaure: "pour" } } }, back: "T_ysaure" },
      { back: "T_ysaure" },
    ],
  },
  T_ysaure_flux: {
    title: "Le flux",
    text: [
      "Mère Ysaure t'emmène derrière les draps tendus au fond de la salle. Une vingtaine de paillasses, des bassins, des enfants trop calmes, l'odeur.",
      "« Ça vient de la faim et de l'eau croupie. Ça tue les petits et les vieux d'abord. » Elle parle sans émotion, comme on dicte une ordonnance. « Il me faut du pain blanc, du bouillon, et de l'eau bouillie. Il me faut du bois. Et il me faut que la ville cesse d'entasser les gens comme des harengs. »",
      "« Le capitaine, lui, veut la ration pleine pour ses soldats. Il y a un assaut qui vient, dit-il. Il a sûrement raison. Les deux ne tiendront pas dans vos greniers. »",
    ],
    choices: [{ label: "Décider qui recevra le grain", to: "D_soldats" }],
  },
  D_soldats: {
    title: "Le grain des uns et des autres",
    text: [
      "Les soldats veulent la ration pleine pour l'assaut qui vient. L'Hôtel-Dieu veut du pain blanc et du bouillon pour ses malades. Tu fais le compte une fois, puis une deuxième, puis une troisième, et le compte reste le même : tu ne peux pas donner aux deux.",
      { if: { has: "hospice:promis" }, text: "Tu as promis à Mère Ysaure que ses malades garderaient leur ration." },
      { if: { has: "solde:payee" }, text: "Les sergents t'ont salué{e} ce matin quand tu es passé{e} dans la cour. Ils savent qui a payé leur solde." },
    ],
    choices: [
      { label: "Donner la ration pleine aux soldats", fx: { flag: "soldats:pleine", quest: "II_flux", regard: { aussonne: "cordial", ysaure: "distant" } }, via: "soldats", to: "D_choix" },
      { label: "Donner le grain à l'Hôtel-Dieu", fx: { flag: "hospice:ble", quest: "II_flux", regard: { aussonne: "mefiant", ysaure: "allie" } }, via: "hospice", to: "D_choix" },
      { label: "Partager : un peu aux uns, un peu aux autres", fx: { flag: "grain:partage", quest: "II_flux", regard: { aussonne: "distant", ysaure: "distant" } }, via: "partage", to: "D_choix" },
    ],
  },
  D_choix: {
    title: "Le partage", back: true,
    text: [
      { via: "soldats", text: "Les sergents reçoivent leurs miches entières, sous les regards de la file. À l'Hôtel-Dieu, Mère Ysaure coupe le pain blanc en tranches de plus en plus fines. Elle ne vient pas te le reprocher. Elle t'envoie seulement, chaque soir, le nombre des morts." },
      { via: "hospice", text: "On porte à l'Hôtel-Dieu des sacs de farine et du bois. Dans la cour du château, les sergents mangent la demi-ration comme tout le monde, et le capitaine te salue désormais d'un mouvement de tête plus court." },
      { via: "partage", text: "Tu coupes la part en deux. Les soldats ont un peu plus, les malades ont un peu plus, et personne n'en a assez. Le capitaine et l'abbesse te remercient du bout des lèvres, chacun persuadé que l'autre a eu la meilleure part." },
    ],
  },

  // ------------------------------------------------------------------ Gilles Aubron
  T_gilles: {
    title: "Gilles Aubron", back: true,
    text: [
      { first: true, text: "Gilles Aubron est roux, large, les mains comme des battoirs, et il parle pour être entendu de l'autre rive. Les bateliers autour de lui se taisent quand il ouvre la bouche, et rient quand il rit." },
      { first: true, text: "« Tiens, l'intendance ! Tu viens compter nos dents ? » Il te détaille. « Je t'ai vu{e} au Chat-Huant, avant. Tu payais tes chopes. C'est déjà ça. »" },
      { again: true, text: "Gilles Aubron te fait une place sur sa barque retournée. « Alors ? »" },
      { regard: { gilles: ["hostile", "trahi", "rancunier"] }, text: "Il crache dans l'eau avant de te répondre." },
      { regard: { gilles: ["allie", "admiratif"] }, text: "Il te donne une claque dans le dos qui te coupe le souffle." },
    ],
    choices: [
      { label: "Lui parler de la ration", if: { not: { has: "vote:rations" } }, hide: { any: [{ has: "vote:rations" }, { seen: "TG_ration" }] }, to: "TG_ration" },
      { label: "Lui demander de la poix des tanneries", hide: { any: [{ has: "poix" }, { regard: { gilles: ["hostile", "trahi", "rancunier"] } }] }, to: "TG_poix" },
      { label: "Lui parler de la Truie", after: "marche:truie", hide: { any: [{ has: "truie:brulee" }, { missed: "II_truie" }, { seen: "S2_brulot" }] }, to: "TG_truie" },
      { label: "Lui demander ses charpentiers pour le toit de la Halle", after: "marche:bombarde", hide: { any: [{ has: "halle:reparee" }, { regard: { gilles: ["hostile", "trahi", "rancunier"] } }] }, to: "TG_toit" },
      { label: "Te rendre à l'assemblée de nuit des métiers", camp: "commune", if: { day: { min: 9 } }, hide: { any: [{ seen: "TG_assemblee" }, { not: { day: { min: 9 } } }, { has: "vote:reddition" }, { regard: { gilles: ["hostile", "trahi", "rancunier"] } }] }, takes: 2, to: "TG_assemblee" },
    ],
  },
  TG_ration: {
    title: "La ration, selon Gilles",
    text: [
      "« La demi-ration ? Je voterai contre. » Gilles se penche vers toi. « Pas parce que je ne sais pas compter. Parce que la demi-ration, ce sera pour nous. Chez les Vassal, chez les drapiers, on mange de la viande le dimanche, et on en mangera encore à Noël. »",
      "« Coupe le pain de tout le monde, et ouvre les caves de tout le monde. Ce jour-là, je voterai pour. »",
    ],
    fx: { sound: { rations: ["gilles"] } },
    choices: [
      { label: "Lui demander ses bateliers pour tenir le mur des tanneries, si l'assaut vient", hide: { has: "gilles:berge" }, fx: { flag: "gilles:berge" }, to: "TG_berge" },
      { back: "T_gilles" },
    ],
  },
  TG_berge: {
    title: "Les bateliers",
    text: [
      "Gilles réfléchit, les yeux plissés vers le mur des tanneries qu'on voit d'ici. « Si les échelles viennent par là, mes gars peuvent passer par la berge, sous le mur, avec les barques. On les prend à revers. » Il sourit. « Personne n'y a pensé au château, je parie. »",
      "« D'accord. Mais tu n'oublieras pas qui est venu, le jour où il faudra partager. »",
    ],
    fx: { promise: "gilles" },
    choices: [{ back: "T_gilles" }],
  },
  TG_poix: {
    title: "La poix des tanneries",
    text: [
      "« De la poix ? » Gilles appelle un tanneur. « On en a des tonneaux, pour les cuirs. C'est la ville qui les aura payés, de toute façon, d'une manière ou d'une autre. »",
      "Le soir même, vingt pots de poix sont rangés dans la tour d'Angle.",
    ],
    fx: { flag: "poix" },
    choices: [{ back: "T_gilles" }],
  },
  TG_truie: {
    title: "La Truie, selon Gilles",
    text: [
      "« La Truie est sur la butte aux Pendus, au bord de la Dorve. » Gilles trace la boucle de la rivière du bout du doigt sur sa barque. « De Lys veut sortir par la barbacane avec vingt sergents. Ils seront morts avant le fossé. Moi, je descends la Dorve de nuit avec trois barques chargées de fagots et de poix, au fil du courant, sans rames. On les échoue au pied de la butte, on met le feu, et le vent fait le reste. »",
      "« Il me faut quelqu'un qui connaisse les étoiles et le courant pour tenir la première barque. Ou quelqu'un qui ait de la chance. »",
    ],
    choices: [
      { label: "Accepter : vous descendrez la Dorve cette nuit", if: { has: "poix" }, takes: "night", to: "S2_brulot" },
      { label: "Lui dire que tu reviendras avec de la poix", hide: { has: "poix" }, back: "T_gilles" },
      { label: "Refuser", back: "T_gilles" },
    ],
  },
  TG_toit: {
    title: "Le toit",
    text: [
      "« Mes charpentiers ? » Gilles croise les bras. « Ils réparent les barques. Les barques, c'est notre pain à nous. » Il te laisse mariner un moment. « Je te les prête, deux jours. Mais le grain qu'ils auront sauvé de la pluie, le port en aura sa part. Tu me le promets ? »",
    ],
    choices: [
      { label: "Le lui promettre", fx: { promise: "gilles", flag: "halle:reparee", quest: "II_toit", regard: { gilles: "cordial" } }, to: "TG_toit_oui" },
      { back: "T_gilles", label: "Refuser" },
    ],
  },
  TG_toit_oui: {
    title: "Les charpentiers",
    text: [
      "Le lendemain à l'aube, six charpentiers du port grimpent sur le toit de la Halle avec des cordes et des tuiles prises sur les maisons détruites. Ils travaillent sous les pierres de la Truie en chantant des chansons de rivière, et le soir, le trou est fermé.",
    ],
    choices: [{ back: "T_gilles" }],
  },
  TG_assemblee: {
    title: "L'assemblée de nuit",
    text: [
      "Ils sont deux cents sur le quai, à la lueur des torches : bateliers, tanneurs, meuniers, foulons, des femmes aussi, les bras croisés sous le châle. Gilles est debout sur une barque retournée.",
      "« Le capitaine veut tenir pour son Roi. Les jurés veulent rendre la ville pour leurs caves. Et nous ? On nous demande de mourir pour les uns, ou de nous taire pour les autres. » Un grondement. « Je dis que Sarance est à ceux qui la font tourner. Je dis qu'on jure, ici, ensemble, que nous ne laisserons personne vendre la ville par-dessus nos têtes. »",
      "Les mains se lèvent, une à une. Gilles te regarde, en bas de sa barque. Tout le quai te regarde.",
    ],
    choices: [
      { label: "Lever la main avec eux", fx: { camp: "commune", regard: { gilles: "allie" } }, to: "TG_assemblee_oui" },
      { label: "Rester les mains dans tes poches", back: "T_gilles" },
    ],
  },
  TG_assemblee_oui: {
    title: "Le serment",
    text: [
      "Ta main se lève, et un cri monte du quai, qui fait aboyer les chiens jusque dans le camp du Margrave. Gilles saute de sa barque et te serre dans ses bras comme un frère.",
      "« L'intendance est avec nous ! » Tu entends ton titre répété par deux cents voix, et tu comprends que tu viens de choisir pour toi, et pour beaucoup d'autres.",
    ],
    choices: [{ back: "T_gilles" }],
  },

  // ------------------------------------------------------------------ Mahaut Bréhal
  T_mahaut: {
    title: "Mahaut Bréhal", back: true,
    text: [
      { first: true, text: "Mahaut Bréhal a le visage de quelqu'un qui n'a pas dormi depuis deux jours. Elle tord un linge au-dessus d'un baquet, et continue de le tordre longtemps après qu'il ne coule plus." },
      { first: true, text: "Tu lui dis qui tu es. Elle te regarde enfin. « C'est vous qui avez ses clés. » Elle le dit sans reproche, comme on arrête un compte." },
      { first: true, text: "« On dit qu'il était ivre. Mon père ne buvait plus depuis six ans, depuis que ma mère est morte. Pas une goutte, même à Noël. Il ne l'aurait pas fait pour une tour, ni pour le Margrave, ni pour personne. »" },
      { first: true, text: "Elle se tait, puis ajoute plus bas : « Il disait toujours qu'il cachait ce qui comptait là où l'on mesure juste. Il riait en le disant. Je n'ai jamais su ce que ça voulait dire. »" },
      { again: true, text: "Mahaut lève les yeux de son baquet. « Vous avez du nouveau ? »" },
    ],
    fx: { clue: "b_vin", flag: "mahaut:boisseau" },
    choices: [
      { label: "Lui promettre de trouver ce qui est arrivé à son père", hide: { any: [{ promise: "mahaut" }, { has: "b:verite" }] }, fx: { promise: "mahaut", regard: { mahaut: "curieux" } }, back: "T_mahaut" },
      { label: "Lui dire qui a tué son père", if: { has: "b:verite" }, hide: { any: [{ not: { has: "b:verite" } }, { has: "mahaut:verite" }] }, to: "TM_verite" },
    ],
  },
  TM_verite: {
    title: "La vérité",
    text: [
      "Tu lui dis tout, dans un coin du cloître, assise sur le bord du puits. La demande faite en son nom, la garde relevée, les lumières, le parapet. Le nom.",
      "Mahaut écoute sans pleurer. Quand tu as fini, elle reste un long moment à regarder ses mains, rouges de l'eau des baquets.",
      { if: { has: "oudart:arrete" }, text: "« Il est dans la tour basse ? » Tu dis oui. « Alors je n'ai plus rien à demander à personne. »" },
      { if: { has: "oudart:fui" }, text: "« Il est de l'autre côté de la rivière. » Elle hoche la tête. « Il reviendra avec le Margrave. Je l'attendrai. »" },
      { if: { has: "pacte:oudart" }, text: "« Et vous l'avez laissé libre. » Elle te regarde enfin. « Pour la ville. » Elle le constate, et tu gardes le silence." },
      { if: { not: { any: [{ has: "oudart:arrete" }, { has: "oudart:fui" }, { has: "pacte:oudart" }] } }, text: "« Merci de me l'avoir dit à moi d'abord. » Elle se lève, reprend son linge. « Il disait que vous seriez quelqu'un de bien. Il le disait de tout le monde. Il avait raison pour vous. »" },
    ],
    fx: { flag: "mahaut:verite", ep: ["perso", 500] },
    choices: [{ back: "T_mahaut" }],
  },

  // ------------------------------------------------------------------ Hoël
  T_hoel: {
    title: "Hoël", back: true,
    text: [
      { first: true, text: "Hoël a vingt-deux ans, des joues de laboureur, des yeux qui fuient. Il serre son gobelet ou sa pique, selon l'heure, comme une main tendue pour ne pas tomber." },
      { again: true, text: "Hoël te salue d'un hochement de tête." },
    ],
    choices: [
      { label: "Lui parler de la nuit où Bréhal est mort", hide: { any: [{ clue: "b_hoel" }, { seen: "TH_muet" }] }, test: { dom: "social", diff: 0, label: "Social" }, win: { to: "TH_nuit" }, lose: { to: "TH_muet" } },
      { label: "Lui offrir à boire, et reparler de cette nuit-là", if: { gold: { min: 10 } }, why: "Il te faut dix sous.", hide: { any: [{ clue: "b_hoel" }, { not: { seen: "TH_muet" } }] }, fx: { gold: -10 }, to: "TH_nuit" },
    ],
  },
  TH_nuit: {
    title: "La nuit du dixième jour",
    text: [
      "Hoël regarde autour de lui, puis se penche. « J'étais de garde à la Tour du Sel, cette nuit-là. Le lieutenant est venu une heure avant minuit. Il m'a dit d'aller dormir, qu'il prendrait la garde lui-même. Le lieutenant, prendre une garde de nuit ! J'ai pas discuté. »",
      "« Le matin, on a trouvé l'intendant en bas. Le lieutenant m'a dit de dire que j'avais fait ma garde jusqu'au bout et que j'avais rien vu. Il m'a donné un écu. » Il te montre la pièce, qu'il garde sur lui comme une brûlure. « Un écu tout neuf. »",
    ],
    fx: { clue: "b_hoel", tie: "hoel_oudart", regard: { hoel: "redevable" } },
    choices: [{ back: "T_hoel" }],
  },
  TH_muet: {
    title: "Hoël se tait",
    text: [
      "Hoël devient rouge, puis blanc. « J'ai fait ma garde, j'ai rien vu. » Il le répète deux fois, et il s'en va pisser contre le mur pour ne plus avoir à te regarder.",
    ],
    choices: [{ back: "T_hoel" }],
  },

  // ------------------------------------------------------------------ Jacquemin
  T_jacquemin: {
    title: "Jacquemin", back: true,
    text: [
      { first: true, text: "Jacquemin est maigre comme un loup de mars, avec une cicatrice qui lui fend le sourcil. Il garde sa burette d'huile à la main pendant que tu lui parles, et ses yeux restent sur les roues." },
      { first: true, text: "« Je parle pas aux gens du château. » Tu lui dis que tu es de la Halle. Il réfléchit. « C'est pire ou c'est mieux ? »" },
      { again: true, text: "Jacquemin pose sa burette. « Quoi encore ? »" },
      { regard: { jacquemin: ["redevable", "allie", "cordial"] }, text: "Il te fait un sourire en coin, presque un sourire d'enfant." },
    ],
    choices: [
      { label: "Lui demander s'il traverse la Dorve, la nuit", hide: { seen: "TJ_passe" }, to: "TJ_passe" },
      { label: "Lui demander ce qu'il a porté pour le château", if: { seen: "TJ_passe" }, hide: { any: [{ clue: "l_jacquemin" }, { not: { seen: "TJ_passe" } }] }, to: "TJ_courrier" },
      { label: "Lui parler de l'homme qui paie en argent neuf", if: { any: [{ clue: "b_lumieres" }, { clue: "b_carnet" }] }, hide: { any: [{ clue: "b_argent" }, { not: { any: [{ clue: "b_lumieres" }, { clue: "b_carnet" }] } }] }, to: "TJ_argent" },
      { label: "Lui parler de l'eau qui frissonne sous la Tour du Sel", if: { seen: "R_mine" }, hide: { any: [{ has: "mine:noyee" }, { has: "contremine" }, { not: { seen: "R_mine" } }, { missed: "II_mine" }] }, to: "TJ_mine" },
      { label: "Lui demander de te faire passer la Dorve, pour de bon", if: { all: [{ seen: "TJ_passe" }, { regard: { jacquemin: ["redevable", "allie", "cordial"] } }] }, hide: { not: { all: [{ seen: "TJ_passe" }, { regard: { jacquemin: ["redevable", "allie", "cordial"] } }] } }, to: "F_fuite_depart" },
    ],
  },
  TJ_passe: {
    title: "La passe des Saules",
    text: [
      "« La Dorve ? » Jacquemin hausse les épaules. « Il y a une passe, sous les saules, en aval. L'eau est basse, le courant tire vers l'autre rive. On passe à la perche, sans lumière, quand la lune est cachée. Le poste du Margrave est à cent pas. Ils dorment, ou ils boivent. »",
      "« Je passe pour qui paie. Pour le château aussi, des fois. C'est pas un secret. Enfin, si. »",
    ],
    choices: [{ back: "T_jacquemin" }],
  },
  TJ_courrier: {
    title: "Le courrier du château",
    text: [
      "Jacquemin se gratte la cicatrice. « Ce que je porte, je le lis pas. Je sais pas lire. » Il attend. Il attend visiblement quelque chose.",
    ],
    choices: [
      { label: "Lui donner deux écus", if: { gold: { min: 40 } }, why: "Il te faut deux écus.", fx: { gold: -40, regard: { jacquemin: "cordial" } }, to: "TJ_courrier_dit" },
      { label: "Lui promettre de payer ses traversées plus tard, de la caisse de l'intendance", hide: { promise: "jacquemin" }, fx: { promise: "jacquemin", regard: { jacquemin: "cordial" } }, to: "TJ_courrier_dit" },
      { back: "T_jacquemin", label: "Laisser tomber" },
    ],
  },
  TJ_courrier_dit: {
    title: "Le pli au sceau rouge",
    text: [
      "« Au neuvième jour du siège, j'ai rapporté un pli de l'autre côté. Un gros sceau rouge, avec la fleur. Un homme du Roi me l'a donné, à l'auberge de Saint-Clair, de l'autre côté des collines. Il m'a payé cinq écus et m'a dit de le remettre au capitaine en main propre. »",
      "« Le capitaine l'a lu devant moi. Il est devenu tout gris. Puis il m'a dit qu'il n'y avait pas de réponse, et de ne parler de ce pli à personne. » Jacquemin te regarde enfin. « Et voilà que j'en parle. »",
    ],
    fx: { clue: "l_jacquemin", tie: "jacquemin_chateau" },
    choices: [{ back: "T_jacquemin" }],
  },
  TJ_argent: {
    title: "L'argent neuf",
    text: [
      "Jacquemin devient méfiant d'un coup. « Qui t'a parlé de ça ? » Il regarde le Moulin du milieu, puis toi. « Il y a un homme qui vient la nuit, avec la clé de la Poterne. Il allume la lanterne du moulin, trois fois. Après, je porte un pli de l'autre côté, à un homme du Margrave qui attend sous les saules. »",
      "« Il garde son capuchon. Il a des gants de daim, une bague. Il paie en écus si neufs qu'ils sentent encore la forge. Je sais pas qui c'est. Je veux pas savoir. » Il te montre ses mains, qui tremblent un peu. « Il est du château, ça c'est sûr. Les sentinelles le saluent. »",
    ],
    fx: { clue: "b_argent", tie: "jacquemin_inconnu" },
    choices: [{ back: "T_jacquemin" }],
  },
  TJ_mine: {
    title: "L'eau sous la Tour du Sel",
    text: [
      "Jacquemin écoute, puis il siffle entre ses dents. « Une mine. Ils creusent sous le mur. » Il réfléchit. « Mon grand-père disait qu'il y a un vieux conduit, du temps des moines, qui va du bief des Moulins jusqu'au fossé de la Tour du Sel. On l'a muré il y a cent ans. Si on le rouvre et qu'on lève la vanne du bief, l'eau descend toute seule. »",
      "« La mine est plus basse que le bief, sûrement. Elle se remplit comme un seau. Ceux qui sont dedans… » Il ne finit pas.",
    ],
    choices: [
      { label: "Rouvrir le conduit et lever la vanne cette nuit", takes: "night", to: "M_noyer" },
      { back: "T_jacquemin" },
    ],
  },

  // ------------------------------------------------------------------ Pernette, le Lombard, Adélaïde
  S_pernette: {
    title: "La boulangerie de Pernette", place: "marche", back: true, shop: "pernette",
    text: [
      { first: true, text: "Pernette pétrit dans l'arrière-boutique, les avant-bras blancs jusqu'aux coudes, et vend par une fenêtre ouverte sur la place. Les jetons de la ration d'un côté, les pièces de ceux qui achètent en plus de l'autre." },
      { again: true, text: "Pernette te fait signe par sa fenêtre." },
      { if: { day: { max: 3 } }, text: "« Le pain de quatre livres à quatre sous, pour ceux qui ont de quoi. Après, ça montera. Ça monte toujours. »" },
      { if: { day: { min: 4 } }, text: "Pernette baisse la voix : « Je pourrais vendre ma miche le triple, il y aurait des acheteurs. Les prix, c'est la peur qui les fixe. »" },
    ],
  },
  T_tasca: {
    title: "Le comptoir du Lombard", back: true,
    text: [
      { first: true, text: "Ugolin Tasca te reçoit derrière une grille de fer, entre deux balances et un registre ouvert. Il porte des lunettes rondes, une moustache fine, et il te sourit avec tout le visage, sauf les yeux." },
      { first: true, text: "« L'intendance ! Je vous attendais. Tout le monde vient me voir, tôt ou tard. Le capitaine a besoin de soixante écus pour la solde, je le sais, le Conseil ne les a pas, je le sais aussi. Moi, je les ai. »" },
      { again: true, text: "Ugolin Tasca lève les yeux de sa balance. « Que puis-je ? »" },
    ],
    choices: [
      { label: "Lui emprunter soixante écus, à rendre au douzième jour", hide: { promise: "tasca" }, fx: { promise: "tasca", gold: 1200 }, to: "TT_pret" },
    ],
  },
  TT_pret: {
    title: "Le prêt",
    text: [
      "Tasca compte soixante écus sur le comptoir, en piles de dix, et te tend une plume. Tu signes au bas d'une page couverte d'une écriture serrée.",
      "« Au douzième jour, à six heures du soir. » Il sèche ton nom avec du sable. « Je ne prête pas à la ville. Les villes ne paient jamais. Je prête à vous. »",
    ],
    choices: [{ back: "T_tasca" }],
  },
  T_adelaide: {
    title: "Adélaïde du Plessis", back: true,
    text: [
      { first: true, text: "Adélaïde du Plessis a la peau brune et les mains d'une femme qui a fait les moissons. Elle porte un foulard noir de veuve et parle doucement, en pesant chaque mot, comme on traverse un gué." },
      { first: true, text: "« Nous sommes sept cents. Le Plessis, Varennes, les Granges. Les soldats du Margrave ont brûlé nos fermes en passant ; nous sommes venus avec ce qui restait. » Elle montre le cloître : des familles entières sous les arcades, des vaches attachées aux colonnes, des enfants qui jouent avec des osselets. « Les sœurs sont bonnes. Mais il pleut dans le cloître, et il y a cent personnes qui dorment dans la cour. »" },
      { again: true, text: "Adélaïde se lève quand tu entres. « Intendant{e}. »" },
    ],
    choices: [
      { label: "Chercher un toit pour ceux qui dorment dans la cour", hide: { quest: "I_plessis" }, to: "TP_logis" },
      { label: "Lui promettre que personne ne mettra les gens du Plessis hors des murs", hide: { promise: "adelaide" }, fx: { promise: "adelaide", regard: { adelaide: "cordial" } }, to: "TP_promesse" },
    ],
  },
  TP_logis: {
    title: "Un toit",
    text: [
      "Tu passes la journée à chercher. Les entrepôts des drapiers, vides depuis le siège, sont fermés à clé, et la clé est chez Carbonnel. La nef de Saint-Aubin est grande, sèche, et Mère Ysaure en a la garde.",
    ],
    choices: [
      { label: "Faire ouvrir les entrepôts des drapiers, au nom de l'intendance", fx: { quest: "I_plessis", flag: "plessis:abri", regard: { carbonnel: "mefiant", alienor: "mefiant", adelaide: "cordial" }, ep: ["seance", 600] }, via: "drapiers", to: "TP_logis_fait" },
      { label: "Demander à Mère Ysaure d'ouvrir la nef de Saint-Aubin", fx: { quest: "I_plessis", flag: "plessis:abri", regard: { ysaure: "cordial", adelaide: "cordial" }, ep: ["seance", 600] }, via: "eglise", to: "TP_logis_fait" },
    ],
  },
  TP_logis_fait: {
    title: "Sous un toit",
    text: [
      { via: "drapiers", text: "Le greffier de Carbonnel t'apporte la clé en traînant les pieds. Le soir même, deux cents personnes dorment au sec sur des balles de laine, et les drapiers de la place te regardent passer comme on regarde un voleur." },
      { via: "eglise", text: "Mère Ysaure hésite une seconde, puis elle fait pousser les bancs contre les murs. Le soir, la nef de Saint-Aubin sent la paille et le lait, et le curé dit sa messe au milieu des dormeurs." },
      "Adélaïde te remercie sans phrases, d'un regard.",
    ],
    choices: [{ back: "T_adelaide" }],
  },
  TP_promesse: {
    title: "Une promesse",
    text: [
      "Adélaïde te regarde longtemps. « On dit au Plessis qu'une promesse de seigneur vaut ce que vaut le seigneur. » Elle te prend la main, la serre. « Je le dirai aux autres. Ils dormiront mieux. »",
    ],
    choices: [{ back: "T_adelaide" }],
  },
};
