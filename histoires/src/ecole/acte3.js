// Act III, « Le printemps » (days 13 to 18): the Rector's kindness, Valérien's visit, Maître Salvanhac's clear morning,
// the duel of honour, the eve, the great exam on the dike, the Rector's offer, the word before the town, and the five
// endings. The epilogue tells what became of each one.
function endFx(id, more) { return Object.assign({ flag: "fin:" + id, ep: ["histoire", 2000] }, more || {}); }
var GOT = { all: [{ has: "accuse:S:qui" }, { has: "accuse:S:preuve" }] };
var EXAM_HELP = [
  { if: { item: "cahier" }, v: 25 },
  { if: { has: "salvanhac:lecon" }, v: 15 },
  { if: { has: "tete:etudiee" }, v: 5 },
  { if: { has: "vilmorin:aide" }, v: 5 },
  { if: { has: "valerien:allie" }, v: 5 },
  { if: { item: "pierre_chant" }, v: 5 },
  { if: { all: [{ has: "recteur:note" }, { not: { item: "cahier" } }] }, v: -10 },
];

module.exports = { passages: {
  C_printemps: {
    act: "III", title: "Le printemps", place: "cour",
    text: [
      "Le printemps vient d'un coup, comme l'hiver. Un matin, les tilleuls ont des feuilles, la neige a fondu dans les gouttières, et les martinets tournent autour du clocher en criant. Le grand examen est dans six jours. Les quatrièmes années passent leurs nuits à réviser. Les premières années font les braves.",
      { if: { has: "salvanhac:protege" }, text: "Maître Salvanhac a repris ses cours. Il appelle encore certains élèves par un autre nom, mais de moins en moins. Il a l'air de quelqu'un qui revient d'un long voyage et qui retrouve sa maison, pièce par pièce." },
      { if: { not: { has: "salvanhac:protege" } }, text: "Maître Salvanhac ne descend plus de sa chambre que pour le thé du jeudi. On le voit parfois à sa fenêtre, au dernier étage, qui regarde la digue pendant des heures." },
      "Dans la cour, le Recteur t'arrête, la main sur ton épaule, tout sourire. « Alors, notre Tête ? Vous y arrivez ? » Il te regarde avec une grande bonté, et il attend la réponse.",
      { if: { has: "recteur:soupconne" }, text: "Il ajoute, sans cesser de sourire : « On me dit que vous aimez la bibliothèque, la nuit. C'est bien, d'aimer les livres. Il faut seulement savoir lesquels. »" },
    ],
    fx: { ep: ["seance", 300] },
    choices: [
      { label: "Lui avouer que tu bloques sur la note du grand signe", fx: { trait: { franchise: 1 } }, to: "C_recteur_aide" },
      { label: "Lui répondre que tout avance très bien", fx: { trait: { franchise: -1 } }, to: "C_recteur_bien" },
    ],
  },
  C_recteur_aide: {
    act: "III", title: "La note", place: "cour",
    text: [
      "Le Recteur hoche la tête avec compréhension. « La Tête se chante en *sol*, dit-il. En *sol*, très haut, très fort, pour dominer la mer. C'est ainsi que je l'ai fait chanter, la première nuit. » Il lève la main comme pour diriger un chœur. « Ne craignez pas de forcer. La mer est forte. »",
      "Il te tapote l'épaule et s'en va, très content de lui.",
    ],
    fx: { flag: "recteur:note" },
    choices: [{ back: "H_cour" }],
  },
  C_recteur_bien: {
    act: "III", title: "La cour", place: "cour",
    text: [
      "« À la bonne heure, dit le Recteur. Vous ferez honneur au collège. » Il te regarde une seconde de plus qu'il ne faudrait, puis il s'éloigne vers le réfectoire, les mains dans le dos.",
    ],
    choices: [{ back: "H_cour" }],
  },
  C_valerien: {
    act: "III", title: "La visite", place: "dortoir", montrer: "valerien",
    text: [
      "Le quatorzième soir, Valérien de Vaucombe entre dans le dortoir des premières années, où personne ne l'a jamais vu. Les conversations s'arrêtent. Il traverse l'allée centrale entre les lits, s'arrête devant le tien, et s'assoit sur ton coffre sans demander.",
      { if: { has: "val:vu_oncle" }, text: "Ce que tu as vu au pied de l'escalier des maîtres, il le tait. Tout est dans sa façon de regarder ailleurs." },
      "« Mon oncle m'a demandé de te surveiller, dit-il à voix basse. Il dit que tu fouilles. Que tu poses des questions à la vieille Mélisande, à Nanon, aux poissonnières. Il dit que tu veux salir la digue. » Il te regarde enfin. « Il ne m'a jamais rien demandé de toute ma vie. Alors je voudrais savoir ce que tu cherches. »",
    ],
    choices: [
      { label: "Lui montrer le cahier de Solène", if: { item: "cahier" }, hide: { not: { item: "cahier" } }, to: "K_valerien_verite" },
      { label: "Lui montrer la page signée", if: { item: "page" }, hide: { any: [{ not: { item: "page" } }, { item: "cahier" }] }, to: "K_valerien_verite" },
      { label: "Lui dire ce que tu crois, sans rien pouvoir lui montrer", fx: { trait: { franchise: 1, audace: 1 } }, to: "C_valerien_doute" },
      { label: "Lui dire que tu cherches seulement de quoi réussir ton examen", fx: { trait: { franchise: -2 } }, to: "C_valerien_mensonge" },
    ],
  },
  C_valerien_doute: {
    act: "III", title: "La visite", place: "dortoir",
    text: [
      "Tu lui dis ce que tu crois. Une élève, il y a trente ans. Une noyade. Des cahiers disparus. Un vieux maître qui oublie. Une encre, un thé, un godet d'argent.",
      "Valérien t'écoute jusqu'au bout, de plus en plus pâle. Puis il se lève. « Tu n'as rien, dit-il. Rien que des histoires de bonnes femmes et un vieux fou. Mon oncle a tenu cette ville au-dessus de l'eau pendant trente ans. » Sa voix tremble. « Après-demain, dans la cour, devant témoins. Duel d'honneur. Et tu retireras chaque mot. »",
      "Il s'en va à grands pas. Tout le dortoir a entendu.",
    ],
    fx: { flag: "val:defi" },
    choices: [{ back: "H_dortoir" }],
  },
  C_valerien_mensonge: {
    act: "III", title: "La visite", place: "dortoir",
    text: [
      "Tu lui dis que tu cherches dans les vieux livres de quoi comprendre la Tête, rien de plus. Que la bibliothèque, la nuit, c'est pour être tranquille.",
      "Valérien te regarde longtemps. Il sait que tu mens, ou il le devine, et il te sait gré de mentir, peut-être. « Bien, dit-il. Je lui dirai ça. » Il se lève. « Mais en ville, on dit que tu traites mon oncle de voleur. Ça, je ne peux pas le laisser dire. Après-demain, dans la cour, devant témoins. Pour la forme. »",
    ],
    fx: { flag: "val:defi" },
    choices: [{ back: "H_dortoir" }],
  },
  C_lucide: {
    act: "III", title: "Le matin clair", place: "salles",
    text: [
      "Le quinzième jour, à dix heures, Maître Salvanhac te fait appeler dans sa chambre, au dernier étage. Il est debout à la fenêtre, rasé de près, en robe propre, le merle sur l'épaule. Il se retourne quand tu entres, et il dit ton nom, ton vrai nom, du premier coup.",
      "« Je dors mieux depuis quelque temps, dit-il. Je me souviens de choses. Elles reviennent dans le désordre, comme des oiseaux qui rentrent le soir. Hier, il en est revenu une très grande. » Il montre le portrait au fusain de la jeune fille sans nom. « Solène Arlaud. Ma meilleure élève. La meilleure de toute ma vie. »",
      "Il te raconte. La fille du port, boursière comme toi. Les deux ans passés à dessiner la digue, signe par signe, sur tout ce qu'elle trouvait. Le garçon de troisième année qui l'aidait à porter les pierres d'essai. La nuit de la première épreuve, la tempête, la Tête qu'elle voulait vérifier, seule. Le corps sur la grève, au matin. Et deux jours plus tard, Évariste devant le conseil, avec le cahier, et tout le monde qui applaudissait.",
      "« Je n'ai rien dit, dit le vieux maître. Évariste pleurait. La ville avait besoin d'un héros vivant. Je me suis dit qu'elle s'en moquerait, elle, de son nom. J'ai eu tort pendant trente ans. Il y a trois ans, j'ai voulu parler. Je l'ai dit à Évariste, en ami. Le jeudi suivant, il m'a servi le thé. »",
      "Il prend ta main et la retourne, paume en l'air. « La Tête se chante en *ré*. Bas. Doucement. On ne domine pas la mer, on lui répond. C'était son idée à elle : chaque signe donne la vague au suivant. » Il trace le geste dans ta paume, du bout du doigt, trois fois. « Le jour de l'examen, je serai debout sur la digue. Et si tu parles, je parlerai après toi. »",
    ],
    fx: { flag: ["salvanhac:lecon", "salvanhac:temoin"], regard: { salvanhac: "allie" }, pratique: { magie: 2 }, ep: ["histoire", 1000] },
    choices: [{ label: "Le remercier, et redescendre", to: "H_salles" }],
  },
  C_duel: {
    act: "III", title: "Le duel d'honneur", place: "cour", duel: "d_printemps", duelLabel: "Saluer, et entrer dans le cercle",
    text: [
      "Le seizième jour, à dix heures, la cour des tilleuls est pleine. Le collège entier est là, aux fenêtres, sur les marches, assis sur la margelle du puits. Un duel d'honneur, avec les Arts, entre le neveu du Recteur et la bourse de Brèches : on n'en a pas vu depuis dix ans.",
      { if: { not: { has: "val:defi" } }, text: "Valérien t'a fait porter son défi la veille, par un de ses amis, sur un papier plié : on dit en ville que tu traites son oncle de voleur. Il demande réparation." },
      "Valérien t'attend sous le grand tilleul. Il a perdu ses airs de fanfaron. Il a l'air de quelqu'un qui fait une chose qu'on a choisie pour lui.",
      { with: "jodoc", text: "Jodoc te tient ta robe, en silence, ce qui chez lui est rare." },
      { with: "yse", text: "Ysé te souffle : « Il ne va pas attaquer. Il va t'attendre. Il a tout appris de toi, cet hiver. »" },
    ],
    choices: [
      { label: "Refuser le duel, et laisser dire", fx: { trait: { audace: -2 } }, to: "C_refus" },
    ],
  },
  C_duel_gagne: {
    act: "III", title: "Le duel d'honneur", place: "cour",
    text: [
      "Ta dernière touche le jette à genoux dans le gravier, sous le tilleul. Le collège retient son souffle. Valérien se relève lentement, époussette sa chemise, et te salue, très bas, avec une correction parfaite.",
      "« Je retire ce que j'ai dit, dit-il à voix haute, pour toute la cour. » Puis, plus bas, pour toi : « Maintenant, dis-moi ce que tu sais. Pour de vrai. »",
    ],
    fx: { regard: { valerien: "curieux" } },
    choices: [
      { label: "Lui montrer le cahier de Solène", if: { item: "cahier" }, hide: { not: { item: "cahier" } }, to: "K_valerien_verite" },
      { label: "Lui montrer la page signée", if: { item: "page" }, hide: { any: [{ not: { item: "page" } }, { item: "cahier" }] }, to: "K_valerien_verite" },
      { label: "Lui dire que tu le lui diras sur la digue, le jour de l'examen", back: "H_cour" },
    ],
  },
  C_duel_perdu: {
    act: "III", title: "Le duel d'honneur", place: "cour",
    text: [
      "Sa troisième touche te fait tomber assis{e} dans le gravier. Le collège applaudit, sans beaucoup de joie. Valérien se tient au-dessus de toi, essoufflé, et il ne savoure rien. « La règle, dit-il. Tu retires. »",
      "Toute la cour attend.",
    ],
    choices: [
      { label: "Retirer, à voix haute, ce que tu n'as jamais dit", fx: { trait: { franchise: -1 } }, to: "C_retire" },
      { label: "Te relever et refuser de retirer quoi que ce soit", fx: { trait: { franchise: 1, audace: 1 } }, to: "C_retire_non" },
    ],
  },
  C_retire: {
    act: "III", title: "Le duel d'honneur", place: "cour",
    text: [
      "Tu te relèves, tu époussettes ta robe, et tu dis, assez fort pour la cour : « Je n'ai jamais traité le Recteur de voleur. » C'est vrai. Valérien hoche la tête, le visage fermé. La cour se disperse.",
      "Au premier étage, derrière la fenêtre du logis, le Recteur laisse retomber le rideau.",
    ],
    choices: [{ back: "H_cour" }],
  },
  C_retire_non: {
    act: "III", title: "Le duel d'honneur", place: "cour",
    text: [
      "Tu te relèves, et tu maintiens chaque mot. Un murmure parcourt la cour. Valérien te regarde, désemparé : la règle n'a rien prévu pour ce cas. Dame Castagnet ouvre sa fenêtre. « Ce duel est terminé, dit-elle, de sa voix qui ne force jamais. Tout le monde en classe. »",
      "Valérien ramasse sa robe. En passant près de toi, il dit très vite : « Tu es complètement fou. » Il n'a pas l'air fâché.",
    ],
    fx: { regard: { valerien: "curieux" } },
    choices: [{ back: "H_cour" }],
  },
  C_refus: {
    act: "III", title: "Le refus", place: "cour",
    text: [
      "Tu dis non. Une rumeur se répare avec la vérité, et la tienne attendra la digue.",
      "La cour murmure, déçue. Valérien te regarde longtemps, puis il hoche la tête, comme si ta réponse lui convenait, et il s'en va le premier. Le soir, au réfectoire, personne ne bêle.",
    ],
    choices: [{ back: "H_cour" }],
  },
  C_veille: {
    act: "III", title: "La veille", place: "dortoir",
    text: [
      "La veille de l'examen, le dortoir ne dort pas. On révise à la chandelle, on se fait réciter les signes, on se rassure, on se dispute. Quelqu'un pleure doucement sous sa couverture.",
      { with: "jodoc", if: { has: "jodoc:entraine2" }, text: "Jodoc est assis sur son lit, une plaque de fer sur les genoux. Il y grave des nœuds de tenue, un après l'autre, en se racontant tes histoires de moutons. Ses mains sont sûres." },
      { with: "jodoc", if: { not: { has: "jodoc:entraine2" } }, text: "Jodoc est couché tout habillé, les yeux ouverts, et il regarde le plafond. Quand tu lui parles, il te répond par des oui et des non." },
      { with: "yse", if: { has: "gazette:prete" }, text: "Ysé rentre tard, couverte d'encre jusqu'aux coudes. Elle a passé la soirée chez l'imprimeur de la rue des Drapiers. « Mille feuilles, te souffle-t-elle. Sous une bâche, dans la boutique. Il n'attend qu'un signe pour les distribuer sur la digue. »" },
      { with: "yse", if: { not: { has: "gazette:prete" } }, text: "Ysé révise ses signes à voix basse, en tapotant le rythme sur ton bras." },
      { if: { has: "maud:viendra" }, text: "Par la lucarne, en bas, tu vois une lanterne bouger au pied de la digue, côté mer. Maud." },
      "Vers dix heures, Nanon monte au dortoir, essoufflée par l'escalier, et te glisse un billet. L'écriture ronde et soignée du Recteur : « Demain, après votre épreuve, je vous attendrai au pavillon de la digue. Nous aurons à parler de votre avenir. É. D. »",
    ],
    choices: [{ label: "Souffler ta chandelle, et essayer de dormir", takes: "morning", to: "N_matin" }],
  },

  // ------------------------------------------------------------------ the great exam
  X_examen: {
    act: "III", title: "Le grand examen", place: "digue",
    text: [
      "Le dix-huitième jour, à neuf heures, toute la ville de Hautsignes est sur la digue. Les pêcheurs ont tiré leurs barques au sec. Les marchands ont fermé leurs boutiques. On s'est mis en habits du dimanche, on a apporté des pliants, des paniers, des enfants sur les épaules. Sur une estrade tendue de bleu, devant la grande plaque de bronze, les maîtres sont assis en robe d'apparat, le Recteur au milieu.",
      "Les élèves passent par années, chacun devant son signe, sur la pierre même. Un élève de première année reprend un petit signe du parapet en une demi-heure, sous les applaudissements de sa famille. Un autre rate, et sa pierre se fendille, et il pleure. Les maîtres notent.",
      { if: { has: "salvanhac:temoin" }, text: "Sur l'estrade, Maître Salvanhac est assis tout au bout, droit, rasé, les mains sur les genoux. Il te cherche des yeux et te fait un petit signe de tête." },
      { if: { has: "maud:viendra" }, text: "Au premier rang de la foule, une grande femme aux mains rouges se tient debout, les bras croisés, un cahier de toile bleue serré contre elle dans son châle. Elle a refusé la chaise qu'on lui offrait." },
      { if: { has: "valerien:allie" }, text: "Valérien passe devant toi avant son tour. Il te serre la main, brièvement, sous les yeux de son oncle." },
      "Vient le tour de Jodoc, au parapet.",
    ],
    fx: { ep: ["seance", 500] },
    choices: [
      { label: "Regarder Jodoc", if: { has: "jodoc:entraine2" }, hide: { not: { has: "jodoc:entraine2" } }, to: "X_jodoc_ok" },
      { label: "Regarder Jodoc", if: { not: { has: "jodoc:entraine2" } }, hide: { has: "jodoc:entraine2" }, to: "X_jodoc_ko" },
    ],
  },
  X_jodoc_ok: {
    act: "III", title: "Le grand examen", place: "digue",
    text: [
      "Jodoc s'agenouille devant son petit signe, un ciseau dans une main, un maillet dans l'autre. Toute la ville le regarde. Il te cherche dans la foule, te trouve, et tu lui souris.",
      { if: { has: "jodoc:signe" }, text: "Tu lèves trois doigts, le signe dont vous êtes convenus : trois coups, trois moutons. Jodoc rit tout seul, devant toute la ville." },
      "Il grave. Trois coups. Le petit signe du parapet se met à bourdonner, juste et clair, et le bourdonnement court le long de la pierre. Mère Fage, sur l'estrade, se lève à moitié de sa chaise, puis se rassoit, et on la voit s'essuyer les yeux avec le coin de son foulard.",
      "Jodoc se relève, immense, rouge comme un coquelicot, et salue la foule comme un acteur.",
    ],
    fx: { flag: "jodoc:examen", conf: { jodoc: 20 } },
    choices: [{ label: "Marcher jusqu'à la Tête quand on appelle ton nom", to: "X_tour" }],
  },
  X_jodoc_ko: {
    act: "III", title: "Le grand examen", place: "digue",
    text: [
      "Jodoc s'agenouille devant son petit signe. Toute la ville le regarde. Ses mains tremblent si fort que le ciseau cliquette contre la pierre. Le premier coup glisse. Le deuxième écaille le granit. Il s'arrête, le maillet levé, et reste ainsi, figé, pendant que le sablier se vide.",
      "Mère Fage fait un trait sur sa liste. Jodoc se relève lentement, sans regarder personne, et va s'asseoir au bout de la digue, les pieds au-dessus de l'eau.",
    ],
    choices: [{ label: "Marcher jusqu'à la Tête quand on appelle ton nom", to: "X_tour" }],
  },
  X_tour: {
    act: "III", title: "La Tête", place: "digue",
    text: [
      "On appelle ton nom. La foule s'écarte. Tu marches jusqu'au bout de la digue, jusqu'à la Tête, avec l'impression que la demi-lieue de granit n'en finit pas. Derrière toi, la ville entière. Devant toi, le grand signe fendu, l'étai de bois, et la mer.",
      "Le Recteur s'est levé sur l'estrade. Il te regarde, les mains jointes.",
      { if: { item: "cahier" }, text: "Sous ta robe, contre ta peau, le cahier de toile bleue." },
      { if: { has: "salvanhac:lecon" }, text: "Dans ta paume, tu sens encore le geste que le vieux maître y a tracé." },
      "Tu poses les mains sur la pierre. Elle est froide, et sa voix fausse grince sous tes doigts.",
    ],
    choices: [
      { label: "Reprendre le signe de la Tête", test: { dom: "magie", diff: -10, label: "Magie", help: EXAM_HELP }, win: { to: "X_reussi" }, lose: { to: "X_rate" } },
    ],
  },
  X_reussi: {
    act: "III", title: "La Tête", place: "digue",
    text: [
      { if: { item: "cahier" }, text: "Tu traces le signe tel qu'il est dans le cahier, courbe après courbe, chacune passant la vague à la suivante, et tu chantes la note de la marge, en *ré*, bas, doucement." },
      { if: { not: { item: "cahier" } }, text: "Tu traces le signe tel que tu l'as appris de la pierre elle-même, courbe après courbe, et tu cherches la note dans la vibration du granit, jusqu'à la trouver." },
      "La fente se referme. Lentement, comme une plaie qui cicatrise sous les yeux. Le granit se met à vibrer, juste, profond, et la vibration part de la Tête et court tout le long de la digue, de bloc en bloc, de signe en signe, jusqu'à la ville. La note fausse s'éteint. Pour la première fois depuis la tempête, la digue chante juste.",
      "Il y a un silence immense. Puis la ville crie. Les pêcheurs lancent leurs bonnets, les enfants hurlent, les élèves t'entourent. Sur l'estrade, Dame Castagnet est debout. Maître Vilmorin applaudit au-dessus de sa tête. Mère Fage tape du pied.",
      "Le Recteur descend de l'estrade, fend la foule, et te serre dans ses bras devant toute la ville. Il sent la violette. À ton oreille, très bas, il dit : « Le pavillon. Tout de suite. »",
    ],
    fx: { quest: "III_examen", ep: ["histoire", 2000] },
    choices: [
      { label: "Suivre le Recteur jusqu'au pavillon de la digue", to: "X_offre" },
      { label: "Rester sur la digue et prendre la parole devant la ville", fx: { trait: { audace: 2 } }, to: "X_parole" },
    ],
  },
  X_offre: {
    act: "III", title: "Le pavillon", place: "digue",
    text: [
      "Le pavillon de la digue est une petite maison de pierre à mi-longueur, où les gardiens rangent leurs outils. Le Recteur ferme la porte derrière vous. Le bruit de la foule n'arrive plus qu'étouffé. Il s'assoit sur un banc, lourdement. Il a l'air vieux, soudain.",
      { if: { item: "cahier" }, text: "« Tu as trouvé son cahier, dit-il. Je le sais depuis la première ligne de ton tracé. Personne au monde ne trace la Tête comme ça, à part elle. Je l'ai cherché trente ans, ce cahier. Orbéric l'avait caché. »" },
      { if: { not: { item: "cahier" } }, text: "« Tu as sa main, dit-il. La même. Je l'ai vu au thé, la première fois, à ta façon de tenir la théière. Je me suis dit : celui-là, ou celle-là, saura refaire la Tête. Moi, je n'ai jamais su. »" },
      "« J'avais dix-neuf ans, dit-il. Elle était morte. La ville avait peur. Le conseil voulait un nom, un vivant, quelqu'un à applaudir. J'étais là, avec son cahier dans les mains. Je n'avais rien préparé. Il a suffi d'une seconde, et après cette seconde, il y a eu trente ans. »",
      "Il relève la tête. « Voici ce que je t'offre. Tu passes en quatrième année dès l'automne. Tu deviens mon élève, et après moi, gardien de la digue. La ville te paiera toute ta vie pour la chanter. Ton village aura une école, un vrai maître, un toit neuf à l'église. Je peux tout ça. Je ne te demande qu'une chose : le silence. Et le cahier, si tu l'as. »",
      { if: { has: "salvanhac:protege" }, text: "Il ajoute, plus bas : « Et Orbéric. Je sais que tu as touché à mon encre. Je ne lui en servirai plus. Il finira ses jours en paix. C'est ma parole. »" },
    ],
    choices: [
      { label: "Accepter", fx: { flag: "offre:acceptee", drop: "cahier", trait: { franchise: -2 } }, to: "F_silence" },
      { label: "Refuser, ressortir, et parler devant la ville", fx: { trait: { audace: 1, franchise: 1 } }, to: "X_parole" },
      { label: "Refuser son offre, et garder pour toi ce que tu sais", fx: { flag: "offre:refusee", trait: { audace: -1 } }, to: "F_silence" },
    ],
  },
  X_parole: {
    act: "III", title: "Devant la ville", place: "digue",
    accuse: { mystery: "S", label: "Prendre la parole",
      to: [
        { if: GOT, to: "F_maitrise" },
        { to: "F_renvoi" },
      ] },
    text: [
      "Tu remontes sur l'estrade. La foule se tait peu à peu, intriguée. Les maîtres te regardent. Le Recteur, derrière toi, reste immobile.",
      { if: { has: "castagnet:allie" }, text: "Dame Castagnet se lève et vient se placer à côté de toi, les mains croisées. Personne n'osera te couper la parole." },
      { if: { has: "valerien:allie" }, text: "Valérien sort du rang des élèves et monte les marches de l'estrade, et se tient de l'autre côté. Son oncle le regarde. Valérien soutient ce regard." },
      { if: { has: "salvanhac:temoin" }, text: "Au bout de l'estrade, Maître Salvanhac s'est levé, appuyé sur sa canne." },
      { if: { has: "maud:viendra" }, text: "Au premier rang, Maud Arlaud s'avance jusqu'au pied de l'estrade." },
    ],
    choices: [{ label: "Te taire au dernier moment, et redescendre", fx: { flag: "offre:refusee", trait: { audace: -2 } }, to: "F_silence" }],
  },
  X_rate: {
    act: "III", title: "La Tête", place: "digue",
    text: [
      { if: { all: [{ has: "recteur:note" }, { not: { item: "cahier" } }] }, text: "Tu chantes la Tête en *sol*, haut et fort, comme le Recteur te l'a appris. La pierre se raidit, refuse, grince." },
      "Tu traces, tu cherches la note, tu la perds. Le granit vibre, puis se cabre sous tes mains, et la fente s'élargit d'un doigt avec un craquement sec. Une vague passe par-dessus le parapet et te trempe jusqu'aux épaules. La foule gémit.",
      "Dame Castagnet descend de l'estrade, sans se presser, vient se placer à côté de toi et chante. La fente se referme d'un doigt. Pas plus. La Tête garde sa voix fausse.",
      "Sur l'estrade, le Recteur se lève et lève les mains. « Ce signe est le plus difficile de la digue, dit-il à la foule, d'une voix chaude. Il fallait du courage pour l'affronter en première année. Le collège est fier. L'an prochain, nous y reviendrons ensemble. » On applaudit, poliment. Il te sourit avec une immense bonté.",
    ],
    choices: [
      { label: "Monter sur l'estrade et prendre la parole quand même", fx: { trait: { audace: 2 } }, to: "X_parole_rate" },
      { label: "Te taire, et redescendre de la digue", fx: { trait: { audace: -1 } }, to: "F_redouble" },
    ],
  },
  X_parole_rate: {
    act: "III", title: "Devant la ville", place: "digue",
    accuse: { mystery: "S", label: "Prendre la parole",
      to: [
        { if: GOT, to: "F_digue" },
        { to: "F_renvoi" },
      ] },
    text: [
      "Tu montes sur l'estrade, trempé{e}, les mains écorchées par le granit. Un murmure court dans la foule : l'élève qui a raté veut parler. Le Recteur fait un geste aimable, pour qu'on te laisse.",
      { if: { has: "castagnet:allie" }, text: "Dame Castagnet remonte derrière toi et se place à ta droite, les mains croisées." },
      { if: { has: "valerien:allie" }, text: "Valérien monte les marches et se place à ta gauche." },
      { if: { has: "salvanhac:temoin" }, text: "Maître Salvanhac s'est levé, appuyé sur sa canne." },
      { if: { has: "maud:viendra" }, text: "Maud Arlaud s'avance au pied de l'estrade, le cahier dans son châle." },
    ],
    choices: [{ label: "Te taire au dernier moment, et redescendre", fx: { trait: { audace: -2 } }, to: "F_redouble" }],
  },

  // ------------------------------------------------------------------ the endings
  F_maitrise: {
    act: "III", title: "Le nom sur la digue", place: "digue", end: true, epilogue: true, fx: endFx("maitrise", { quest: "III_examen" }),
    text: [
      "Tu parles. Tu racontes une élève de quatrième année, boursière, fille du port, qui dessinait des signes pour la mer sur tout ce qu'elle trouvait. Tu lèves le cahier de toile bleue, la page recollée. Tu dis son nom, Solène Arlaud, devant la grande plaque de bronze, et la digue qui chante juste sous vos pieds le prend dans sa vibration.",
      { if: { has: "melisande:temoin" }, text: "Sœur Mélisande, au troisième rang, dit d'une voix claire que le papier est du collège et l'écriture celle de la petite Arlaud. Elle a vu ses fiches de prêt quatre ans durant." },
      { if: { has: "salvanhac:temoin" }, text: "Maître Salvanhac parle après toi, lentement, d'une voix qui porte jusqu'au bout de la digue. Il dit tout : le cahier, la nuit de l'épreuve, trente ans de silence, et le thé du jeudi. Il montre sa main." },
      { if: { has: "maud:viendra" }, text: "Maud Arlaud monte les marches de l'estrade, va jusqu'à la grande plaque de bronze, et pose la main dessus, sur le nom gravé. Son geste suffit." },
      { if: { has: "gazette:prete" }, text: "Avant midi, la gazette d'Ysé passe de main en main sur toute la longueur de la digue. Mille feuilles. Le soir, toute la ville connaît le nom de Solène Arlaud, et le lendemain, la moitié du royaume." },
      "Le Recteur Daubrac ne nie pas. Il reste assis sur l'estrade, les mains sur les genoux, très droit, pendant que la ville le regarde. Quand Dame Castagnet lui demande de se lever, il se lève. Il descend les marches seul, et la foule s'écarte devant lui sans un cri, ce qui est pire qu'un cri.",
      { if: { has: "valerien:allie" }, text: "Valérien le regarde partir. Il ne le suit pas." },
      "Le soir, sur la digue, on pose des lanternes. La nuit des noyés est passée depuis longtemps, et personne n'a rien organisé. Elles s'allument toutes seules, une par une, au pied de la petite stèle, et la mer en est couverte jusqu'au matin.",
    ],
  },
  F_silence: {
    act: "III", title: "Le gardien de la digue", place: "digue", end: true, epilogue: true, fx: endFx("silence", { quest: "III_examen" }),
    text: [
      { if: { has: "offre:acceptee" }, text: "Tu acceptes. Le Recteur ferme les yeux, une seconde, comme un homme qui pose un fardeau. Puis il se lève, redresse sa robe, et ouvre la porte du pavillon sur la ville qui t'acclame." },
      { if: { all: [{ has: "offre:acceptee" }, { has: "cahier:trouve" }] }, text: "Le soir même, dans son salon, devant toi, il brûle le cahier de toile bleue dans la cheminée, page après page. Il pleure en le faisant. Tu regardes les signes de Solène se tordre et noircir, et tu n'arrêtes pas sa main." },
      { if: { has: "offre:refusee" }, text: "Tu refuses son offre. Tu ne diras rien non plus. Le Recteur te regarde sans comprendre, puis il comprend, et cela lui fait plus peur que tout le reste. « Tu me laisses vivre avec ça, dit-il. C'est ça, ton choix. » Tu ressors du pavillon. La ville t'acclame. Tu souris." },
      "La Tête chante juste. Tout le monde le dit, toute la ville le sait : la bourse de Brèches a refait le grand signe en première année. On t'appelle déjà l'héritier, dans les tavernes du port.",
      "À l'automne, tu passes en quatrième année. Tu chantes la digue les nuits de tempête, à côté du Recteur, qui ne trace jamais rien. La pierre tient. La ville dort.",
      "Au pied de la digue, côté mer, la petite stèle continue de s'effacer, un peu plus chaque hiver.",
    ],
  },
  F_renvoi: {
    act: "III", title: "La diligence", end: true, epilogue: true, fx: endFx("renvoi"),
    text: [
      { if: { is: { "accuse-S-qui": "daubrac" } }, text: "Tu accuses le Recteur. Mais tes mots tombent sur la digue comme de la pluie sur la mer. La foule écoute, puis murmure, puis rit, un peu, de gêne. Le Recteur se lève, très calme, et pose une main paternelle sur ton épaule. « Cet enfant est épuisé, dit-il. L'examen, la Tête, la tempête. Ramenez-le au collège. »" },
      { if: { all: [{ not: { is: { "accuse-S-qui": "daubrac" } } }, { is: { "accuse-S-qui": ["salvanhac", "castagnet", "vilmorin"] } }] }, text: "Tu nommes quelqu'un, devant toute la ville, et ce nom n'est pas le bon. Tu le sais à la seconde où il sort de ta bouche, au visage de celui que tu viens de désigner. Le Recteur, derrière toi, laisse le silence durer, puis il fait signe qu'on te raccompagne." },
      { if: { not: { is: { "accuse-S-qui": ["daubrac", "salvanhac", "castagnet", "vilmorin"] } } }, text: "Le registre de Nanon porte ton nom deux fois. La seconde, il n'y a plus rien à discuter." },
      "Le conseil du collège se réunit le soir même. Le lendemain matin, Nanon t'aide à porter ta malle jusqu'au portail. Elle a glissé dedans, en douce, un pot de confiture de coings.",
      "La diligence de Brèches part à huit heures. Par la fenêtre, tu regardes la colline, le clocher, les quatre ailes grises, et en bas, la longue ligne de la digue sur la mer. Tu as dix-huit sous dans ta poche, comme en arrivant.",
      { with: "yse", text: "Au moment où la diligence s'ébranle, Ysé court à côté de la portière et te lance un petit E de plomb. « Pour que tu reviennes, crie-t-elle. Il me le faut. »" },
    ],
  },
  F_digue: {
    act: "III", title: "Le nom rendu", place: "digue", end: true, epilogue: true, fx: endFx("digue", { quest: "III_examen" }),
    text: [
      "Tu parles. Trempé{e}, les mains en sang, ta Tête ratée derrière toi, tu racontes Solène Arlaud. Et tu lèves les pièces, et la ville se tait.",
      { if: { has: "salvanhac:temoin" }, text: "Maître Salvanhac parle après toi. Il dit tout, de sa voix jeune dans son corps de vieillard, et il montre sa main." },
      { if: { has: "maud:viendra" }, text: "Maud Arlaud monte sur l'estrade et pose la main sur la plaque de bronze. La foule s'écarte autour d'elle." },
      { if: { has: "gazette:prete" }, text: "Le soir, la gazette d'Ysé est sur toutes les tables de Hautsignes." },
      "Le Recteur Daubrac quitte l'estrade en silence, ce jour-là, et le collège quelques semaines plus tard. Dame Castagnet devient Recteur. Sa première décision est de faire graver un nom sur la grande plaque de bronze, au-dessus de l'autre.",
      "Ta Tête, elle, est toujours fendue. L'examen est raté. Dame Castagnet t'offre de redoubler, comme on offre une chose due. Tu la remercies, et tu refuses.",
      "En juin, tu quittes le collège. Tu descends au port, et tu entres comme apprenti{e} chez les gardiens de la digue, ceux qui grattent le sel, posent les étais, et connaissent chaque bloc par son nom. Maud Arlaud te loge au-dessus de la halle. Le dimanche, tu travailles sur la Tête avec le cahier de Solène, ouvert sur tes genoux. Tu as le temps. Elle avait dit trente ans.",
    ],
  },
  F_redouble: {
    act: "III", title: "Une seconde première année", place: "dortoir", end: true, epilogue: true, fx: endFx("redouble"),
    text: [
      "Tu redescends de la digue en silence, trempé{e}, les mains écorchées. La foule t'applaudit poliment, comme on applaudit un vaincu courageux. Le Recteur t'a souri. Il a eu raison de sourire.",
      "Le conseil se réunit le soir. Tu redoubles ta première année.",
      { if: { has: "jodoc:examen" }, text: "Jodoc, lui, passe en deuxième année. Il vient te voir au dortoir avec un pot de cidre et deux gobelets. Il a l'air gêné d'être heureux. Tu lui dis d'être heureux. Il essaie." },
      { if: { not: { has: "jodoc:examen" } }, text: "Jodoc redouble aussi. Une quatrième fois. Son père est venu le chercher, puis il est reparti seul. Jodoc avait supplié Dame Castagnet de lui laisser une dernière chance, et la vice-rectrice avait dit oui. Il est sur le lit voisin du tien, à la place d'Ysé. « Toi et moi, dit-il. L'année prochaine. Je te ferai répéter. »" },
      { if: { item: "cahier" }, text: "Le cahier de toile bleue est au fond de ta malle, sous tes chemises. Tu ne l'as montré à personne. Certains soirs, tu l'ouvres, et tu regardes la Tête, dessinée trois fois, avec la ligne de musique dans la marge." },
      "Par la lucarne, la digue chante faux, toutes les nuits, d'une voix de plus en plus basse. Tu l'écoutes en t'endormant. Tu as un an.",
    ],
  },
},

epilogue: [
  { if: { has: "fin:maitrise" }, text: "**Solène Arlaud.** Son nom est gravé au-dessus de celui d'Évariste Daubrac sur la plaque de bronze. La petite stèle a été relevée, nettoyée et scellée dans le granit, côté ville, là où les enfants passent." },
  { if: { has: "fin:digue" }, text: "**Solène Arlaud.** Son nom est gravé sur la plaque de bronze. Sa Tête attend encore qu'on la refasse." },
  { if: { has: "fin:silence" }, text: "**Solène Arlaud.** La petite stèle a disparu sous les algues, puis sous le sable, un hiver de grande marée." },
  { if: { any: [{ has: "fin:renvoi" }, { has: "fin:redouble" }] }, text: "**Solène Arlaud.** Une poissonnière continue de descendre chaque semaine au pied de la digue, avec un coquillage." },
  { if: { any: [{ has: "fin:maitrise" }, { has: "fin:digue" }] }, text: "**Évariste Daubrac.** Il a quitté Hautsignes au début de l'été. On dit qu'il enseigne l'écriture aux enfants d'un village de montagne, sous un autre nom, et qu'il ne trace jamais un signe." },
  { if: { has: "fin:silence" }, text: "**Évariste Daubrac.** Il est resté Recteur jusqu'à sa mort. On l'a enterré au pied de la digue, sous une belle pierre, avec beaucoup de discours." },
  { if: { any: [{ has: "fin:renvoi" }, { has: "fin:redouble" }] }, text: "**Évariste Daubrac.** Le Recteur a fait étayer la Tête de poutres de chêne, et de fer l'hiver suivant." },
  { if: { has: "salvanhac:protege" }, text: "**Orbéric Salvanhac.** Il a retrouvé sa mémoire, pièce par pièce, jusqu'à son dernier hiver. Le merle est resté. Il siffle toujours les deux mêmes notes." },
  { if: { not: { has: "salvanhac:protege" } }, text: "**Orbéric Salvanhac.** Le vieux maître est mort au début de l'hiver suivant, dans sa chambre au-dessus de la mer. On a retrouvé le merle sur son oreiller." },
  { if: { has: "valerien:allie" }, text: "**Valérien de Vaucombe.** Il a renoncé au nom de son oncle et repris celui de son père. Il est passé en deuxième année, premier de sa promotion au Verre, et il a cessé de parler de la capitale." },
  { if: { all: [{ not: { has: "valerien:allie" } }, { has: "val:battu" }, { has: "val:battu2" }] }, text: "**Valérien de Vaucombe.** Il n'a jamais oublié qu'on l'avait battu deux fois. Il en a fait le meilleur escrimeur du collège." },
  { if: { all: [{ not: { has: "valerien:allie" } }, { not: { all: [{ has: "val:battu" }, { has: "val:battu2" }] } }] }, text: "**Valérien de Vaucombe.** Il est resté au collège, premier de sa promotion, seul à sa table du réfectoire." },
  { if: { has: "jodoc:examen" }, text: "**Jodoc Marchal.** Il est passé en deuxième année à sa troisième tentative. Mère Fage l'a pris comme aide à l'atelier. Il ne tremble plus que les jours de pluie." },
  { if: { all: [{ has: "jodoc:passe" }, { not: { has: "jodoc:examen" } }] }, text: "**Jodoc Marchal.** Il a réussi l'épreuve d'automne de Mère Fage, puis il a raté le grand examen. Mère Fage a écrit à son père une lettre de deux pages, ce qu'elle n'a jamais fait pour personne." },
  { if: { has: "gazette:prete" }, text: "**Ysé Lorne.** Sa gazette a fait rouvrir l'imprimerie de son père. Il est sorti de prison au printemps suivant, sur la requête de la ville de Hautsignes." },
  { if: { all: [{ not: { has: "gazette:prete" } }, { conf: "yse", min: 40 }] }, text: "**Ysé Lorne.** Elle t'écrit encore, une fois par mois, des lettres pleines de fautes volontaires pour voir si tu les remarques." },
  { if: { has: "maud:viendra" }, text: "**Maud Arlaud.** Elle a gardé le cahier de toile bleue dans un coffre, sous son lit, enveloppé dans le plus beau linge de sa mère." },
  { if: { has: "castagnet:allie" }, text: "**Ernestine Castagnet.** Elle a été élue Recteur au premier tour. Elle n'a jamais haussé la voix." },
  { if: { has: "vilmorin:aide" }, text: "**Octave Vilmorin.** Il a payé ses dettes au printemps, on ne sait comment. Il continue de faire danser des arcs-en-ciel dans les couloirs." },
  { if: { has: "epreuve:ok" }, text: "**Mère Fage.** Ta plaque de l'épreuve d'automne est pendue au mur de l'atelier, avec une étiquette et une date, parmi des centaines d'autres." },
  { if: { has: "enigme:p_page" }, text: "**La page signée.** Sœur Mélisande l'a fait relier en tête du cahier de toile bleue, à la place qu'elle n'aurait jamais dû quitter." },
  { if: { has: "pecheur:sauve" }, text: "**Le pêcheur de la tempête.** Il t'apporte une sole chaque dimanche, et la laisse à Nanon, à la loge, avec un signe de tête." },
  { if: { has: "val:battu3" }, text: "**Le duel d'honneur.** On le raconte encore au collège, au réfectoire, le premier soir, aux premières années." },
  { if: { trait: "audace", min: 3 }, text: "**Toi.** On dit de toi au collège que tu vas toujours de l'avant. Selon qui le dit, c'est un compliment ou un reproche." },
  { if: { trait: "audace", max: -3 }, text: "**Toi.** On dit de toi que tu réfléchis trois fois avant de faire un pas. Les gardiens de la digue disent que c'est une qualité." },
  { if: { trait: "franchise", min: 3 }, text: "**Toi.** On sait, à Hautsignes, que ta parole tient." },
  { if: { trait: "franchise", max: -3 }, text: "**Toi.** Tu as appris, au collège, qu'on peut dire beaucoup de choses vraies sans dire la vérité." },
] };
