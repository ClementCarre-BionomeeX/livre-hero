// Act III · Dehors: the hillside, the village at dawn, the two ways (understand, avenge) and the north road, the
// assembly at the fountain, and the six endings with their epilogue (a line per person and per side quest done).

// Intent: build(EndingKind) -> TextItem*
// Why: every ending closes the same threads (each side quest's echo, each companion), so the lines are written once
// here and each ending adds its own variants.
function epilogue(kind) {
  var gardien = kind === "gardien", flammes = kind === "flammes", nord = kind === "nord";
  return [
    "—",
    // Aurèle
    { if: { has: "aurele:mort" }, text: "Aurèle repose sur le flanc de la colline, sous un cairn de pierres ocre, face au nord. Tu as gravé sur la plus grosse un nom et un 7 barré. Tu n'as pas trouvé d'autres mots." },
    { if: { all: [{ has: "aurele:libre" }, { present: "aurele" }] }, text: flammes ? "Aurèle marche à tes côtés sur la route du nord. Il ne se retourne pas vers la fumée. Il ne parle pas de Kardan, jamais, et quand on lui demande d'où lui vient la couleur de sa peau, il dit : d'une source." : "Aurèle reprend des forces lentement. Au bout d'un mois, il chante faux de nouveau. Au bout de deux, il te dit pardon, pour le départ, l'argent, le silence. Tu lui dis pardon aussi. Vous ne précisez pas pour quoi." },
    // the knife
    { if: { all: [{ has: "couteau:aurele" }, { not: { has: "aurele:mort" } }, { not: { has: "fin:gardien" } }] }, text: "Aurèle a repris son couteau. Il passe le pouce sur le manche, le soir, sans y penser, et la corne s'use de nouveau à cet endroit-là." },
    { if: { all: [{ has: "couteau:aurele" }, { has: "aurele:mort" }] }, text: "Le couteau d'Aurèle est planté au sommet du cairn, la lame dans la pierre. Garance est montée le voir, une fois. Elle n'a rien dit. Elle a laissé une pièce à côté." },
    { if: { all: [{ has: "couteau:aurele" }, { has: "fin:gardien" }] }, text: "Le couteau d'Aurèle est posé sur le bord de la vasque, à portée de ta main. C'est la seule chose de là-haut que tu aies gardée." },
    // the names
    { if: { has: "noms:copies" }, text: gardien ? "Les noms que tu as recopiés, tu les as confiés à ceux qui remontaient. Tu ne sais pas ce qu'ils en ont fait. Toi, tu les sais par cœur. Tu les récites, la nuit, pour que quelqu'un les dise." : "Les noms que tu as recopiés ont été repeints sur la plaque de la chapelle, chacun avec son vrai nom quand on a pu le retrouver. *L'homme du Nord* s'appelle Aurèle, maintenant. *Le muletier* s'appelait Faris. Il y a encore des trous. On les laisse en blanc." },
    // Kardan's journal
    { if: { has: "journal:complet" }, text: flammes ? "Le journal de Kardan a brûlé avec le reste. Tu t'en souviens mot pour mot. Tu aurais préféré l'oublier." : "Les trois pages du journal de Kardan sont sous verre, dans la chapelle, à côté de la vasque. Les enfants de l'école les recopient pour apprendre à écrire. C'est Odon qui a eu l'idée." },
    // Tobie
    { if: { all: [{ has: "tobie:ami" }, { not: { has: "tobie:blesse" } }] }, text: nord ? "Tobie fait voler son cerf-volant au-dessus de la vieille tour. Personne ne lui a dit pour son père. Un jour, il demandera. Tu ne seras pas là pour lui répondre." : "Tobie a appris la suite de la berceuse : il n'en connaissait que le premier couplet. Il la chante faux, la note qui monte au lieu de descendre. Il dit que c'est la bonne façon, et il a raison." },
    { if: { has: "tobie:blesse" }, text: "Tobie s'est relevé. Il boite un peu, et il a cessé de chanter. Tu penses à lui plus souvent qu'à tout le reste." },
    // Oriel
    { if: { has: "oriel:chardon" }, text: flammes ? "Oriel a sauvé ses herbes, et rien d'autre. On dit qu'elle soigne les blessés des deux camps, sur la route, sans demander de quel côté ils étaient." : "Oriel ne prépare plus de tisane de chardon-lune, sauf pour les amputations. Elle t'a envoyé un sachet de graines, avec un mot : *pour que tu saches toujours reconnaître l'odeur.*" },
    // Sidonie
    { if: { all: [{ met: "sidonie" }, { has: "sidonie:anneau" }] }, text: "Sidonie est allée à Vasque, deux anneaux au pouce, et elle a frappé chez la mère de Lucas. Elle y est restée une semaine. Puis elle est repartie sur les routes du sel, seule, et on dit qu'elle ne passe plus jamais par la vallée sèche." },
    { if: { all: [{ met: "sidonie" }, { not: { has: "sidonie:anneau" } }] }, text: "Sidonie est partie un matin sans dire au revoir, avec l'anneau qui lui restait. L'autre est toujours au fond du puits aux os. Elle n'en parle plus." },
    // Mattias
    { if: { has: "mattias:soleil" }, text: "Mattias a planté ses mousses à l'ombre du platane, sur la place. Il s'assoit à côté tous les jours, au soleil, les yeux mi-clos, et quand les enfants lui demandent ce qu'il fait, il répond : je regarde." },
    { if: { all: [{ has: "mattias:ami" }, { not: { has: "mattias:soleil" } }] }, text: "Mattias est resté dans le dédale, avec ses mousses et sa mousse-lumière. Parfois, la nuit, on croit l'entendre chanter dans les canaux. Personne n'a encore eu le courage d'aller voir s'il va bien." },
    // Odon
    { if: { all: [{ met: "odon" }, { not: { gone: "odon" } }] }, text: flammes ? "Frère Odon ne t'a pas suivi. Il est resté dans les cendres de Kardan, à partager son pain avec ceux qui n'avaient plus de maison. Il t'a regardé partir sans rien dire, et c'était pire que tout ce qu'il aurait pu dire." : "Frère Odon a repris la route au premier automne, après avoir partagé son pain avec tout le village. Il t'a dit : *on se reverra au sud, il n'y a que du sud.* Tu n'es pas sûr qu'il plaisantait." },
    { if: { gone: "odon" }, text: "Frère Odon vous a quittés en chemin. Tu ne sais pas où il marche. Tu espères qu'il a trouvé quelqu'un avec qui partager son pain." },
  ];
}

module.exports = {
  // ---------------------------------------------------------------- the end of act II that is an ending
  D_boire: { act: "II", title: "Boire", place: "coeur",
    text: [
      "Tu te penches sur la vasque. Aurèle crie, essaie de t'en empêcher, mais sa main est collée à la pierre et il ne peut pas faire un pas. L'eau est tiède. Elle a le goût de la pluie sur les pierres, en été, quand tu étais enfant.",
      "Tu bois. Le lien te prend d'un coup, comme une main qui se referme sur ton poignet, et en même temps tu sens la main d'Aurèle se détacher. Toute l'eau de la vallée, d'un coup, descend vers toi. Tu la tiens. C'est lourd, c'est immense, et ce n'est que le premier jour.",
      "Aurèle s'est effondré à genoux. Il te regarde, et il sait qu'il ne peut plus rien. Il te reste quelques instants pour lui dire une chose, une seule, avant que la Source ne te prenne ta voix.",
    ],
    choices: [
      { label: "« Remonte. Va voir le soleil, et va dire à la mère que c'est la faute des pommes. »", fx: { flag: "gardien:remonte" }, to: "F_gardien" },
      { label: "« Repose-toi. Tu as assez porté. »", fx: { flag: "gardien:repos" }, to: "F_gardien" },
    ] },
  F_gardien: { act: "II", title: "Le nouveau Gardien", end: true, place: "coeur",
    fx: { ep: ["histoire", 10000] },
    text: [
      { if: { has: "gardien:remonte" }, text: "Aurèle remonte. Il met trois jours à trouver la sortie, en titubant. Il sort au soleil par la galerie haute, et il tombe à genoux dans l'herbe sèche, et il reste là jusqu'au soir. Puis il prend la route du nord. On dit qu'il est arrivé chez vous avant les pommes, et qu'il a planté un pommier sur la tombe de votre mère.",
        else: "Aurèle s'endort contre la vasque, la tête sur tes genoux, et il ne se réveille pas. Il a l'air d'un enfant qui a trop couru. Tu le gardes contre toi longtemps. Puis tu le confies à ceux qui sont avec toi, pour qu'ils le remontent au jour." },
      "Toi, tu restes. Tu tiens l'eau de Kardan. Tu sens chaque canal, chaque puits, chaque racine qui boit, là-haut, comme on sent ses propres doigts. Tu sens la fontaine de la place déborder, et les enfants qui y trempent les mains, et les femmes qui y lavent le linge en riant.",
      "Ils ne savent pas que c'est toi. Ils ne le sauront jamais, à moins que quelqu'un ne remonte le leur dire. Tu les entends chanter, une fois par an, à la Lune sèche. Ils chantent pour le Gardien. Ils chantent pour toi.",
      "Dans quelques années, un étranger tombera dans la Fosse. Tu l'attendras. Tu ne sais pas encore ce que tu lui diras.",
    ].concat(epilogue("gardien")) },

  // ---------------------------------------------------------------- the hillside
  O_flanc: { act: "III", title: "Le flanc de la colline", place: "kardan",
    fx: { catchup: 6, catchupWhy: "les jours et les nuits du dédale", ep: ["perso", 500] },
    text: [
      "Tu es dehors. Le vent te passe sur le visage, chargé de thym et de poussière, et tu le respires à pleins poumons. Au-dessus, le ciel d'avant l'aube, d'un bleu d'encre qui pâlit à l'est. En contrebas, Kardan dort : ses jardins en terrasses, noirs, ses toits, sa place, sa fontaine qui brille comme une pièce au fond d'un puits.",
      { if: { all: [{ has: "aurele:libre" }, { present: "aurele" }] }, text: "Aurèle s'est assis dans l'herbe, les jambes étendues, les mains à plat sur la terre. Il ne dit rien. Il regarde le ciel s'éclaircir, et des larmes coulent sur son visage sans qu'il ait l'air de s'en apercevoir." },
      { if: { has: "aurele:mort" }, text: "Tu as porté le corps d'Aurèle jusqu'ici. Il ne pèse presque rien. Tu le poses dans l'herbe, face au ciel. Tu lui dois au moins ça : la lumière du jour." },
      { if: { has: "lien:partage" }, text: "Là-bas, dans la fontaine de la place, le lien attend. Tu le sens, comme une corde tendue entre la colline et le village. Il faut que quelqu'un le prenne. Il faut que tout Kardan le prenne, ou la Source s'éteindra, et avec elle les jardins." },
      { if: { any: [{ has: "vasque:brisee" }, { has: "aurele:mort" }] }, text: "En bas, la fontaine coule déjà moins fort. Tu ne le vois pas d'ici. Tu le sais." },
      { if: { has: "mattias:soleil" }, text: "Mattias se tient un peu à l'écart, ses mousses serrées contre sa poitrine, et il regarde Kardan avec une expression que tu n'arrives pas à lire." },
      { if: { present: "sidonie" }, text: "Sidonie a déjà repéré le grenier, la maison de l'Aïeule, la porte de la milice. « Le grenier d'abord, dit-elle. Le feu se voit de loin, ça les fera sortir. Puis la fontaine. Puis la vieille. Puis on attend Bastien à la porte, et on règle ça. »" },
      { if: { present: "odon" }, text: "Odon secoue la tête. « Ou alors on descend, et on parle. À Hesna, à Oriel, à l'enfant. À l'Aïeule. On découvre pourquoi. Et on les réunit tous à la fontaine, au jour, et on leur dit ce qu'ils ont fait. Ça fait plus mal que le feu, parfois. Et ça dure plus longtemps. »" },
      "La route du nord, elle, part du bas de la colline et file vers les montagnes, droite, blanche sous la lune. Personne ne t'empêche de la prendre.",
    ],
    choices: [
      { label: "Descendre au village avant que le jour se lève", to: "O_kardan" },
      { label: "Prendre tout de suite la route du nord, avec ceux qui veulent venir", big: true, to: "F_nord" },
    ] },

  // ---------------------------------------------------------------- the village, the morning after
  O_kardan: { act: "III", title: "Kardan, au petit jour", backName: "la place de Kardan", place: "kardan", hub: true,
    text: [
      { if: { night: true }, text: "Le village dort encore, mais d'un mauvais sommeil : des chiens aboient, une fenêtre s'allume et s'éteint. On a vu des ombres sur la colline. On ne sait pas encore à qui elles appartiennent.", else: "Le jour est levé sur Kardan. Le village a l'air d'un lendemain de fête : des guirlandes de menthe fanées, des tables renversées, des lanternes de papier éventrées dans la poussière. Les gens sortent, s'étirent, et s'arrêtent net en te voyant. Certains rentrent chez eux. D'autres ne bougent plus." },
      { if: { any: [{ has: "vasque:brisee" }, { has: "aurele:mort" }] }, text: "Autour de la fontaine, un attroupement. L'eau ne déborde plus de la vasque verte. Elle coule, mais en un filet, et le filet baisse. Quelqu'un dit : *le Gardien est mort.* Quelqu'un d'autre te voit et dit : *non. Regardez.*" },
      { if: { has: "lien:partage" }, text: "La fontaine coule comme d'habitude. Mais ceux qui y boivent s'arrêtent, étonnés, une main sur la poitrine, comme si l'eau avait un goût nouveau, un goût de pierre." },
      { if: { has: "v:grenier" }, text: "Le grenier brûle encore, une colonne de fumée noire qui monte droit dans le ciel sans vent." },
      { if: { has: "v:fontaine" }, text: "La vasque de la fontaine est fendue en deux. L'eau se répand sur la place en une flaque qui s'élargit et que la poussière boit." },
      "La milice de Bastien s'est rassemblée devant la porte de la colline. Ils ne savent pas encore s'ils doivent te craindre ou te tuer.",
    ],
    choices: [
      // understand
      { label: "Frapper chez Oriel, à l'herboristerie", to: "O_oriel", hide: { any: [{ seen: "O_oriel" }, { has: "v:fontaine" }] } },
      { label: "Entrer au Puits-Vert, trouver Hesna", to: "O_hesna", hide: { any: [{ seen: "O_hesna" }, { has: "v:grenier" }] } },
      { label: "Chercher Tobie près de la vieille tour", to: "O_tobie", hide: { any: [{ seen: "O_tobie" }, { has: "v:otage" }] } },
      { label: "Aller à la forge de Garance", to: "O_garance", hide: { seen: "O_garance" } },
      { label: "Monter chez l'Aïeule, et lui demander ce qui s'est passé il y a vingt ans", if: { clues: "T", min: 2 }, why: "Il faudrait savoir d'abord ce que d'autres savent de ce temps-là : Hesna, Oriel, Tobie.", hide: { any: [{ seen: "O_maeve" }, { has: "v:otage" }] }, to: "O_maeve" },
      { label: "Réunir le village à la fontaine, et tout dire", if: { seen: "O_maeve" }, why: "Il te faut d'abord parler à l'Aïeule.", hide: { has: "v:fontaine" }, big: true, to: "O_assemblee" },
      // avenge
      { label: "Écouter Sidonie, qui a quelque chose à te dire", if: { all: [{ present: "sidonie" }, { has: "sidonie:anneau" }, { loyal: "sidonie" }] }, why: "", hide: { any: [{ not: { present: "sidonie" } }, { not: { has: "sidonie:anneau" } }, { not: { loyal: "sidonie" } }, { seen: "O_sidonie_renonce" }] }, to: "O_sidonie_renonce" },
      { label: "Mettre le feu au grenier commun", hide: { has: "v:grenier" }, to: "O_grenier" },
      { label: "Briser la fontaine de la place", hide: { has: "v:fontaine" }, to: "O_fontaine" },
      { label: "Prendre l'Aïeule en otage", hide: { any: [{ has: "v:otage" }, { seen: "O_maeve" }] }, to: "O_otage" },
      { label: "Affronter la milice de Bastien à la porte, et en finir", if: { any: [{ has: "v:grenier" }, { has: "v:fontaine" }, { has: "v:otage" }] }, why: "Tu n'as encore rien commencé de ta vengeance.", big: true, to: "O_milice" },
      // leave
      { label: "Quitter Kardan par la route du nord", big: true, to: "F_nord" },
    ] },

  O_oriel: { act: "III", title: "Oriel", place: "kardan",
    fxEvery: { time: 1 },
    text: [
      "Oriel ouvre avant que tu frappes. Elle t'attendait, assise derrière sa table, les mains à plat sur le bois, les yeux rouges. « Je savais que tu reviendrais, dit-elle. Je ne savais pas si ce serait pour me tuer. »",
      { if: { has: "oriel:chardon" }, text: "« Tu as fait semblant de boire, n'est-ce pas ? Ou tu n'as pas su. Je t'avais appris l'odeur. C'était tout ce que j'osais. »" },
      "Elle parle. Elle prépare la tisane depuis vingt ans. La première fois, c'était pour un garçon d'ici, Théoz, le fils de l'Aïeule, tiré au sort, qui pleurait de peur. Elle l'a préparée pour qu'il n'ait pas peur. Après, l'Aïeule a dit : plus jamais un des nôtres. Et les étrangers ont commencé.",
    ],
    choices: [
      { label: "Lui demander de soigner Aurèle, et de dire la vérité devant tous", if: { all: [{ has: "oriel:chardon" }, { not: { has: "aurele:mort" } }] }, why: "Il faudrait qu'elle te doive quelque chose, et qu'Aurèle soit là pour être soigné.", fx: { flag: "oriel:alliee", clue: "t_oriel", ep: ["perso", 800] }, to: "O_oriel_alliee" },
      { label: "Lui demander de dire la vérité devant tous", test: { dom: "social", diff: -10, label: "Social", help: [{ if: { has: "oriel:chardon" }, v: 20 }, { if: { present: "odon" }, v: 10 }] },
        win: { fx: { flag: "oriel:alliee", clue: "t_oriel", ep: ["perso", 600] }, to: "O_oriel_oui" }, lose: { fx: { clue: "t_oriel" }, to: "O_oriel_non" } },
    ] },
  O_oriel_alliee: { act: "III", title: "Les mains vertes", place: "kardan",
    text: [
      "Oriel pose ses mains sur la poitrine d'Aurèle, sur ses tempes, sur ses poignets. Elle prépare quelque chose qui sent le miel et le fer, et elle le lui fait boire à la petite cuillère. Ses mains ne tremblent pas. C'est la première fois que tu les vois immobiles.",
      "« Je dirai tout, dit-elle sans lever les yeux. Devant tout le monde. La tisane, les chardons, Théoz. Tout. Ça fait vingt ans que j'attends quelqu'un pour m'obliger à le dire. » Elle a un petit rire. « Et dire que c'est toi qui m'as rapporté les chardons. »",
    ],
    choices: [{ back: "O_kardan" }] },
  O_oriel_oui: { act: "III", title: "« Je le dirai »", place: "kardan",
    text: ["Oriel hoche la tête, lentement. « Je le dirai. Je ne sais pas si ça servira. Mais je le dirai. » Elle prend son châle, comme si elle allait sortir tout de suite, et puis elle se rassoit, et elle attend que tu lui dises quand."],
    choices: [{ back: "O_kardan" }] },
  O_oriel_non: { act: "III", title: "La porte fermée", place: "kardan",
    text: ["« Non, dit-elle. Je n'ai pas ce courage-là. Je te l'ai dit, je suis lâche. » Elle referme sa porte doucement, et tu l'entends pleurer derrière, comme Hesna pleurait dans le noir."],
    choices: [{ back: "O_kardan" }] },

  O_hesna: { act: "III", title: "Hesna", place: "kardan",
    fxEvery: { time: 1 },
    text: [
      "Hesna est assise sur la margelle du puits, dans la salle vide, une cruche à la main qu'elle ne remplit pas. Quand tu entres, elle lâche la cruche. Elle ne se baisse pas pour la ramasser.",
      "« Tu es vivant, dit-elle. Tu es vivant. » Elle répète ça plusieurs fois, comme une prière. Puis : « Avant, c'était le tirage au sort. Un enfant de Kardan tous les vingt ans. Mon grand-père. Le cousin de Garance. Théoz. Et puis l'Aïeule a dit plus jamais, et les étrangers ont commencé à passer. On nous a dit que le Gardien voulait des étrangers. On nous a dit que c'était mieux comme ça. On nous a dit… »",
      { if: { has: "hesna:fissure" }, text: "Elle sort de son tablier la page du registre, pliée si souvent qu'elle est douce comme un tissu, et te la donne. « Pour lui. Pour quand tu le verras. »" },
    ],
    choices: [
      { label: "Lui demander de venir à la fontaine, et de le dire devant tous", test: { dom: "social", label: "Social", help: [{ if: { has: "hesna:fissure" }, v: 25 }, { if: { present: "aurele" }, v: 15 }] },
        win: { fx: { flag: "hesna:alliee", clue: "t_hesna", ep: ["perso", 600] }, to: "O_hesna_oui" }, lose: { fx: { clue: "t_hesna" }, to: "O_hesna_non" } },
    ] },
  O_hesna_oui: { act: "III", title: "La cruche", place: "kardan",
    text: ["Hesna ramasse enfin sa cruche, la remplit au puits, et la pose sur le comptoir, comme tous les matins. « J'y serai, dit-elle. Je verserai à boire à tout le monde. Il faut bien que quelqu'un verse à boire. »"],
    choices: [{ back: "O_kardan" }] },
  O_hesna_non: { act: "III", title: "Le silence d'Hesna", place: "kardan",
    text: ["Hesna secoue la tête. Elle ne peut pas. Elle a versé la tisane à vingt étrangers ; elle ne peut pas regarder vingt voisins en face. Elle remonte dans ses chambres, et tu l'entends changer les draps du lit où tu as dormi."],
    choices: [{ back: "O_kardan" }] },

  O_tobie: { act: "III", title: "Tobie", place: "kardan",
    fxEvery: { time: 1 },
    text: [
      { if: { has: "tobie:ami" }, text: "Tobie te voit de loin et court vers toi, son cerf-volant sous le bras. Il s'arrête à trois pas, essoufflé, et te regarde des pieds à la tête comme pour vérifier qu'il ne te manque rien. « Grand-mère a dit que tu étais parti, dit-il. Je savais que c'était pas vrai. Ils disent toujours que les gens sont partis. »",
        else: "Tobie est assis au pied de la vieille tour. Quand il te voit, il se lève d'un bond et recule, prêt à s'enfuir. Il a peur de toi. Tout le monde lui a dit d'avoir peur de toi." },
      { if: { present: "aurele" }, text: "Puis il voit Aurèle, et il reste bouche bée. « C'est l'étranger, souffle-t-il. Celui de la chanson. Il a les cheveux tout blancs. »" },
    ],
    choices: [
      { label: "Lui dire la vérité sur son père, et lui demander de venir à la fontaine", if: { has: "tobie:ami" }, why: "Il ne te fait pas assez confiance pour t'écouter.", fx: { flag: "tobie:allie", clue: "t_tobie", ep: ["perso", 800] }, to: "O_tobie_verite" },
      { label: "Essayer de l'apprivoiser", hide: { has: "tobie:ami" }, test: { dom: "social", diff: -10, label: "Social", help: [{ if: { present: "aurele" }, v: 20 }] },
        win: { fx: { flag: "tobie:allie", clue: "t_tobie" }, to: "O_tobie_verite" }, lose: { to: "O_tobie_fuite" } },
    ] },
  O_tobie_verite: { act: "III", title: "Ce que Tobie sait maintenant", place: "kardan",
    text: [
      "Tu t'accroupis pour être à sa hauteur, et tu lui dis. Pas tout. Assez. Que son père n'est pas mort d'une fièvre. Qu'il a gardé l'eau du village pendant vingt ans, au fond de la colline, tout seul. Qu'il était courageux. Qu'à la fin, il a pu se reposer.",
      { if: { present: "aurele" }, text: "Aurèle s'accroupit aussi, péniblement. « Je l'ai connu, dit-il. Ton père. Une heure. Il m'a parlé de toi. Tu n'étais pas encore né, mais il savait que tu allais naître. Il voulait t'appeler Tobie. »" },
      "Tobie ne pleure pas. Il serre son cerf-volant. « C'est lui qui l'a fait, dit-il enfin. Le cerf-volant. » Puis : « Je viendrai à la fontaine. Je leur dirai. Ils me croiront, moi. Je suis le petit-fils. »",
    ],
    choices: [{ back: "O_kardan" }] },
  O_tobie_fuite: { act: "III", title: "Le garçon qui court", place: "kardan",
    text: ["Tobie s'enfuit en courant, son cerf-volant traînant derrière lui dans la poussière. Tu ne le rattrapes pas. Tu n'as pas le cœur de lui faire encore plus peur."],
    choices: [{ back: "O_kardan" }] },

  O_garance: { act: "III", title: "Garance", place: "kardan",
    fxEvery: { time: 1 },
    text: [
      "Garance ne frappe pas sur son enclume. Elle est assise sur le billot, ses énormes mains pendantes entre ses genoux. Quand tu entres, elle ne se lève pas.",
      { if: { all: [{ has: "couteau:aurele" }, { present: "aurele" }] }, text: "Aurèle voit le coffre dans le coin, sous le sac. Puis il voit son couteau, à ta ceinture. Il le prend, doucement, et le soupèse. « Tu l'as gardé », dit-il à Garance. Ce n'est pas une question. Garance le regarde, et elle ne peut plus mentir. Ça se voit sur son visage : quelque chose cède. « Je l'ai remis en état, dit-elle. Je l'ai affûté tous les ans. Je ne sais pas pourquoi. »" },
      { if: { all: [{ has: "couteau:aurele" }, { not: { present: "aurele" } }] }, text: "Tu poses le couteau d'Aurèle sur l'enclume. Garance le regarde longtemps. « Je savais, dit-elle. Je savais à qui il était. Je l'affûtais tous les ans. » Elle se tait. « Je ne savais pas ce qu'on leur faisait. Je ne voulais pas savoir. C'est différent, mais pas tant que ça. »" },
      { if: { not: { has: "couteau:aurele" } }, text: "« Le couteau, dit-elle. Je l'ai vendu hier soir, à un caravanier. Je l'ai vendu pour ne plus le voir. » Elle te regarde enfin. « C'est tout ce que j'avais à dire. »" },
    ],
    choices: [
      { label: "Lui demander d'ouvrir le coffre devant tout le village", if: { has: "couteau:aurele" }, why: "Sans le couteau, tu n'as rien à lui opposer.", fx: { flag: "garance:alliee", ep: ["perso", 600] }, to: "O_garance_coffre" },
      { label: "La laisser", to: "O_kardan" },
    ] },
  O_garance_coffre: { act: "III", title: "Le coffre", place: "kardan",
    text: ["Garance se lève, prend le coffre dans ses bras comme on porte un enfant, et sort sur la place avec. « Ils verront, dit-elle. Les bottes, la flûte, le collier du chien. Ils verront tout. Après, ils feront ce qu'ils voudront de moi. »"],
    choices: [{ label: "La suivre", to: "O_kardan" }] },

  O_maeve: { act: "III", title: "L'Aïeule", place: "kardan",
    fx: { meet: "theoz", clue: "t_maeve", flag: "maeve:verite", ep: ["seance", 3000] },
    text: [
      "La porte de l'Aïeule est ouverte. Maève est assise à sa place, devant son métier, et elle ne tisse pas. Elle t'a vu descendre de la colline, par la fenêtre. Elle a eu le temps de se préparer, et elle ne s'est pas préparée.",
      "« Théoz avait dix-sept ans, dit-elle sans que tu aies rien demandé. On tirait au sort tous les vingt ans, parmi les jeunes gens. C'était la règle depuis toujours. C'est moi qui tenais le sac. C'est ma main qui a tiré son nom. » Sa voix ne tremble pas. « Je suis descendue le voir, après, dix fois, vingt fois. Il me suppliait de le laisser sortir. Je lui disais : tiens bon, mon fils, tiens bon pour Kardan. Il a tenu vingt ans. »",
      "« Quand j'ai vu qu'il mourait, j'ai juré qu'aucun enfant de Kardan n'y descendrait plus jamais. J'ai trouvé une autre règle. J'ai mis fin au tirage, et la Lune sèche est devenue ce qu'elle est. Les étrangers. Ils ne sont personne, ici. Personne ne les pleure. » Elle te regarde. « Je pensais que personne ne les pleurait. »",
      "Tu lui dis comment Théoz est mort. Qu'Aurèle a bu à sa place, il y a sept ans. Que Théoz a souri, qu'il a lâché la vasque, et qu'il est mort dans l'heure, en paix. Que son dernier mot a été pour un enfant qui n'était pas encore né.",
      "Maève ferme les yeux. Ses mains, enfin, se mettent à trembler. Elle les laisse trembler.",
    ],
    choices: [{ label: "Attendre qu'elle parle", to: "O_maeve_fin" }] },
  O_maeve_fin: { act: "III", title: "« Réunis-les »", place: "kardan",
    text: [
      "« Réunis-les, dit-elle enfin. À la fontaine. Tous. Je ne t'en empêcherai pas. Je ne t'aiderai pas non plus : ce n'est pas à moi de parler la première. Je l'ai fait trop longtemps. »",
      { if: { has: "lien:partage" }, text: "Elle regarde par la fenêtre, vers la place. « Le lien est dans la fontaine, n'est-ce pas ? Je l'ai senti ce matin, en buvant. Comme une main sur mon épaule. » Elle a un petit rire sec. « Kardan l'avait prévu. Il avait tout prévu, sauf nous. »" },
    ],
    choices: [{ back: "O_kardan" }] },

  O_assemblee: { act: "III", title: "L'assemblée à la fontaine", place: "kardan",
    text: [
      "Ils viennent tous. Tu ne sais pas comment la nouvelle a couru, mais quand le soleil touche la place, tout Kardan est là, autour de la fontaine verte : soixante personnes, les mêmes qu'au banquet, sans les lampes et sans le vin. Bastien et ses miliciens au premier rang, la lance au pied. L'Aïeule sur le seuil de sa maison, là-haut, debout.",
      "Tu montes sur la margelle. Tu parles.",
      { if: { present: "aurele" }, text: "Tu montres Aurèle, ses cheveux blancs, sa peau couleur d'eau. Un murmure court, comme le vent dans les fèves." },
      { if: { has: "noms:copies" }, text: "Tu sors les noms recopiés et tu les lis, un par un, à voix haute, lentement. *Aldric. Mérovée la Boiteuse. Jehan des Saules.* Au bout de dix noms, la place s'est tue. Au nom de Théoz, une femme se met à pleurer. Au nom d'Aurèle, personne ne respire." },
      { if: { has: "journal:complet" }, text: "Tu lis les trois pages du journal de Kardan. *Mille porteurs ne s'usent pas. La fontaine du bas est faite pour cela.* Quelqu'un crie que c'est un faux. Personne ne le reprend." },
      { if: { has: "tobie:allie" }, text: "Tobie grimpe sur la margelle à côté de toi. Il ne fait pas de discours. Il dit : « Mon père a gardé l'eau pendant vingt ans. Grand-mère a dit qu'il était mort d'une fièvre. » Et il redescend." },
      { if: { has: "oriel:alliee" }, text: "Oriel s'avance. Elle raconte la tisane, les chardons, les commandes avant chaque Lune. Elle donne des noms. Le sien d'abord." },
      { if: { has: "hesna:alliee" }, text: "Hesna verse à boire à tout le monde, une cruche après l'autre, sans rien dire. Puis elle pose la cruche et dit : « C'est moi qui leur servais la tasse. À tous. »" },
      { if: { has: "garance:alliee" }, text: "Garance renverse le coffre au milieu de la place. Les bottes de femme, la flûte, le collier du chien roulent dans la poussière. Personne ne les ramasse." },
      { if: { present: "odon" }, text: "Odon parle le dernier, doucement. Il ne les accuse pas. Il leur demande seulement ce qu'ils feront demain, et après-demain, et dans vingt ans." },
      { if: { has: "lien:partage" }, text: "Puis tu leur dis ce qu'il faut faire. Boire tous à la fontaine, en sachant ce qu'on boit. Porter chacun une part du lien, et que personne n'ait plus à descendre.", else: "Puis tu leur dis ce qui les attend. Que la Source faiblit. Que personne ne descendra plus à leur place. Que cette fois, c'est à eux de choisir, et que ce ne sera pas un étranger." },
    ],
    choices: [
      { label: "Attendre leur réponse", big: true,
        test: { dom: "social", diff: -30, label: "Convaincre", help: [
          { if: { has: "noms:copies" }, v: 15 }, { if: { has: "journal:complet" }, v: 15 }, { if: { has: "tobie:allie" }, v: 15 },
          { if: { has: "oriel:alliee" }, v: 10 }, { if: { has: "hesna:alliee" }, v: 10 }, { if: { has: "garance:alliee" }, v: 10 },
          { if: { present: "odon" }, v: 10 }, { if: { present: "aurele" }, v: 10 }, { if: { has: "mattias:soleil" }, v: 5 },
          { if: { has: "v:grenier" }, v: -30 }, { if: { has: "v:otage" }, v: -30 }] },
        win: { fx: { flag: "assemblee:oui", fac: { kardan: 40 }, ep: ["seance", 5000] }, to: [{ if: { has: "lien:partage" }, to: "F_pacte" }, { if: { has: "aurele:libre" }, to: "F_jugement" }, { to: "F_tarie" }] },
        lose: { fx: { flag: "assemblee:non", fac: { kardan: -20 } }, to: "O_assemblee_non" } },
    ] },
  O_assemblee_non: { act: "III", title: "Le silence de la place", place: "kardan",
    text: [
      "Personne ne répond. Puis quelqu'un, au fond, crie : *menteur*. Puis un autre. Ils ont trop à perdre à te croire. Bastien fait un pas, sa lance en avant, et ses hommes le suivent, et la foule s'ouvre devant eux.",
      "Il faut partir. Maintenant.",
    ],
    choices: [{ label: "Fuir vers la route du nord", to: "F_tarie" }] },

  // ---------------------------------------------------------------- vengeance
  O_sidonie_renonce: { act: "III", title: "Sidonie", place: "kardan",
    fx: { flag: "sidonie:renonce", conf: { sidonie: 10, odon: 10 } },
    text: [
      "Sidonie te prend par le bras et t'entraîne à l'écart, sous le platane. Elle tourne les deux anneaux autour de son pouce, l'un après l'autre.",
      "« J'ai réfléchi, dans le noir, dit-elle. Lucas aurait détesté ça. Le feu, la vieille, tout ça. Il était plus bête que moi, et meilleur. » Elle te lâche le bras. « Je n'allumerai rien. Fais ce que tu veux. Moi, je vais à Vasque, porter son anneau à sa mère. C'est la seule chose qui compte, au fond. Tu me l'as rendue. »",
    ],
    choices: [{ label: "La remercier", to: "O_kardan" }] },
  O_grenier: { act: "III", title: "Le grenier", place: "kardan",
    fx: { flag: "v:grenier", mark: 1, fac: { kardan: -30 }, conf: { sidonie: 10, odon: -15 } },
    text: [
      "Le grenier commun est une grande bâtisse de pisé sur pilotis, au bout du village, pleine jusqu'au toit de grain, de fèves séchées, de figues. Toute la récolte de l'année. Tu y mets le feu par les quatre coins, avec de l'huile volée au Puits-Vert. Le pisé ne brûle pas, mais le toit, oui, et le grain, et la fumée monte noire et grasse dans le ciel du matin.",
      "Le village sort en hurlant. Des seaux, des cris, des enfants qui pleurent. Et Hesna, qui court droit vers la porte du grenier en flammes, parce qu'elle a laissé son fils dormir dans la soupente, comme chaque nuit de fête.",
    ],
    choices: [
      { label: "Te jeter dans la fumée et sortir l'enfant toi-même", fx: { pv: -6, mark: -1, flag: "hesna:sauvee" }, to: "O_grenier_enfant" },
      { label: "Laisser Hesna y aller seule", fx: { mark: 2, flag: "hesna:brulee" }, to: "O_grenier_hesna" },
    ] },
  O_grenier_enfant: { act: "III", title: "Dans la fumée", place: "kardan",
    text: ["Tu ressors du grenier avec un enfant de cinq ans dans les bras, les sourcils brûlés, les poumons en feu. Tu le poses dans les bras d'Hesna. Elle te regarde comme on regarde un orage qui vous a épargné. Le grenier, lui, brûle jusqu'au soir."],
    choices: [{ back: "O_kardan" }] },
  O_grenier_hesna: { act: "III", title: "La porte en flammes", place: "kardan",
    text: ["Hesna entre dans la fumée. Elle en ressort, longtemps après, avec l'enfant, les deux mains brûlées jusqu'au coude. Elle passe devant toi sans tourner la tête. Tu ne sauras jamais si elle t'a vu."],
    choices: [{ back: "O_kardan" }] },
  O_fontaine: { act: "III", title: "La fontaine", place: "kardan",
    fx: { flag: "v:fontaine", mark: 1, fac: { kardan: -30 }, conf: { sidonie: 10, odon: -10 } },
    text: [
      "Tu prends la masse de Garance, abandonnée devant la forge, et tu marches vers la fontaine. Les gens s'écartent. Ils comprennent avant que tu lèves les bras.",
      { if: { has: "lien:partage" }, text: "Le lien est là, dans cette eau. Tu le sais. En brisant la vasque, tu le brises aussi." },
      "Au premier coup, la vasque verte sonne comme une cloche. Au deuxième, elle se fend. Au troisième, elle s'ouvre en deux et l'eau se répand sur la place, et les enfants courent dedans en criant de joie, parce qu'ils ne comprennent pas. Oriel arrive en courant, les bras pleins de seaux, et s'arrête devant toi.",
    ],
    choices: [
      { label: "La laisser passer, et remplir ses seaux tant qu'il reste de l'eau", fx: { flag: "oriel:epargnee" }, to: "O_fontaine_oriel" },
      { label: "Lui arracher ses seaux et les jeter dans la poussière", fx: { mark: 1, flag: "oriel:humiliee" }, to: "O_fontaine_seaux" },
    ] },
  O_fontaine_oriel: { act: "III", title: "Les seaux d'Oriel", place: "kardan",
    text: ["Oriel remplit ses seaux en silence, l'un après l'autre, à genoux dans la flaque. Quand elle a fini, elle te regarde, et elle dit : « C'est pour les malades. » Puis elle s'en va, courbée sous le poids."],
    choices: [{ back: "O_kardan" }] },
  O_fontaine_seaux: { act: "III", title: "La poussière", place: "kardan",
    text: ["Les seaux roulent dans la poussière. Oriel ne les ramasse pas. Elle reste debout, les mains vides, verte jusqu'aux poignets, et elle te regarde avec une pitié qui te brûle plus que tout le reste."],
    choices: [{ back: "O_kardan" }] },
  O_otage: { act: "III", title: "La maison de l'Aïeule", place: "kardan",
    text: [
      "Tu montes à la maison de l'Aïeule à grandes enjambées, ton arme à la main. La porte est ouverte. Maève est assise devant son métier, et elle ne bouge pas en te voyant. Elle t'attendait.",
      "Mais entre elle et toi, il y a Tobie. Il a écarté les bras, comme on le fait pour arrêter une chèvre. Il tremble de tout son corps. « Non, dit-il. Non. C'est ma grand-mère. »",
    ],
    choices: [
      { label: "L'écarter de ton chemin", fx: { flag: ["v:otage", "tobie:blesse"], mark: 2, fac: { kardan: -40 }, conf: { odon: -20 } }, to: "O_otage_pris" },
      { label: "Baisser ton arme, et redescendre", to: "O_otage_renonce" },
    ] },
  O_otage_pris: { act: "III", title: "L'otage", place: "kardan",
    text: [
      "Tu l'écartes. Il tombe contre le coffre, sa tête cogne le bois, et il ne se relève pas tout de suite. Maève se lève. Elle passe devant toi pour aller à lui, et tu la laisses, et puis tu la prends par le bras. Elle ne résiste pas. Elle est légère comme un fagot.",
      "Tu la fais descendre jusqu'à la place, le couteau sous son menton. Elle ne dit pas un mot. Le village vous regarde passer en silence. Tobie s'est relevé, sur le seuil, la main sur la tête. Il ne pleure pas. Il te regarde.",
    ],
    choices: [{ label: "Arriver sur la place avec elle", to: "O_kardan" }] },
  O_otage_renonce: { act: "III", title: "Les bras écartés", place: "kardan",
    text: ["Tu baisses ton arme. Tobie ne baisse pas les bras. Il les garde écartés jusqu'à ce que tu sois sorti, jusqu'à ce que tu sois au bas de la rue, jusqu'à ce que tu ne te retournes plus."],
    choices: [{ back: "O_kardan" }] },
  O_milice: { act: "III", title: "La porte de la milice", place: "kardan",
    combat: { title: "Bastien et la milice", enemies: [{ id: "milicien", n: 2 }, "bastien"], terrain: "nature",
      win: { fx: { flag: "milice:battue", ep: ["seance", 3000] }, to: "F_flammes" },
      lose: { fx: { flag: "milice:perdu" }, to: "F_flammes" } },
    text: [
      "Bastien t'attend devant la porte de la colline, avec ses hommes, la lance basse. Il n'a pas peur, ou il ne le montre pas. « Je savais qu'il en reviendrait un, un jour, dit-il. Je l'ai toujours su. » Il assure sa prise. « Viens. Qu'on en finisse. »",
    ] },

  // ---------------------------------------------------------------- banter
  B_aurele_maison: { act: "III", title: "Aurèle, au soleil",
    text: [
      "Aurèle s'est assis sur un banc de la place, au soleil, et il regarde ses mains, qui ont repris un peu de couleur. « Elle est morte quand ? demande-t-il sans lever les yeux. La mère. » Tu lui dis. Il hoche la tête. « Avant les pommes, alors. » Il rit, un peu. « C'est la faute des pommes. »",
    ],
    choices: [
      { label: "Lui dire qu'elle l'attendait encore", fx: { conf: { aurele: 10 } }, to: "@ret" },
      { label: "Lui dire qu'elle lui avait pardonné", fx: { conf: { aurele: 10 } }, to: "@ret" },
    ] },

  // ---------------------------------------------------------------- endings
  F_pacte: { act: "III", title: "Le pacte rompu", end: true, place: "kardan",
    fx: { quest: "O_kardan", ep: ["histoire", 10000] },
    text: [
      "Ils boivent. Pas tous en même temps, pas tous de bon cœur. L'Aïeule descend la première, et elle boit à la fontaine devant tout le village, à longues gorgées, les yeux fermés. Puis Tobie. Puis Oriel. Puis Bastien, après un long moment, en posant sa lance contre le platane. Puis tous les autres, en file, comme on va à la communion.",
      "Chacun d'eux, en se redressant, porte une main à sa poitrine. Ils sentent le lien. Une part, minuscule, à peine plus lourde qu'une pièce dans une poche. Mille porteurs ne s'usent pas.",
      "Sous la colline, la Source bat plus doucement, plus amplement, comme un cœur qui se détend. L'eau de Kardan coule toujours. Elle coule même un peu plus loin qu'avant : le printemps suivant, les puits du hameau sec se remettent à suinter.",
      "On n'envoie plus d'étrangers dans le dédale. La fête de la Lune sèche existe toujours ; on y boit tous à la fontaine, une fois l'an, en disant à voix haute ce qu'on boit. Les étrangers qui passent sont invités à boire aussi. Certains le font.",
    ].concat(epilogue("pacte")) },
  F_jugement: { act: "III", title: "Le jugement de l'Aïeule", end: true, place: "kardan",
    fx: { quest: "O_kardan", ep: ["histoire", 10000] },
    text: [
      "Quand la place s'est tue, l'Aïeule descend de son seuil, lentement, et traverse la foule qui s'écarte. Elle s'arrête devant toi. « La vasque est brisée, dit-elle. Mais la Source n'est pas morte. Elle attend qu'on la tienne. » Elle se tourne vers son village. « J'ai tiré le nom de mon fils. J'ai envoyé vingt étrangers à sa place, et à la place de celui qui l'a remplacé. C'est à moi de descendre. »",
      "Personne ne la retient. Tobie lui prend la main, et elle se laisse faire jusqu'à la porte de la colline. Là, elle l'embrasse sur le front, et elle entre seule. Les sept serrures se referment derrière elle.",
      "Trois jours plus tard, la fontaine de la place se remet à déborder. L'eau a un goût nouveau, que personne n'arrive à nommer. Hesna dit que c'est le goût du thé à la menthe, trop sucré. Tout le monde rit, et puis personne ne rit plus.",
      "Kardan sait, maintenant, ce que coûte son eau. Le village a gravé un nouveau nom sur la plaque de la chapelle, en lettres d'or, en haut, au-dessus de tous les autres : *Maève, qui a pris sa part.* Et au-dessous, en lettres blanches, tous les noms des étrangers, un par un. On les lit à voix haute à chaque Lune sèche. Ça prend une heure.",
    ].concat(epilogue("jugement")) },
  F_tarie: { act: "III", title: "La source tarie", end: true, place: "kardan",
    fx: { quest: "O_kardan", ep: ["histoire", 10000] },
    text: [
      { if: { has: "assemblee:oui" }, text: "Ils te croient. Ils pleurent, ils crient, ils se taisent, mais ils te croient. Et c'est trop tard : la Source n'a plus personne pour la tenir, et le village n'a plus personne à y envoyer, parce qu'il ne veut plus. C'est peut-être la seule chose juste qui sorte de tout ça.",
        else: "Tu fuis Kardan sous les pierres et les cris, avec ceux qui t'ont suivi, et Bastien n'ose pas vous poursuivre au-delà des jardins. Derrière vous, la fontaine coule de moins en moins." },
      "La fontaine baisse jour après jour. Puis les canaux. Puis les puits. À l'automne, les jardins sont jaunes ; à l'hiver, ils sont gris. Au printemps, Kardan se vide, famille par famille, vers le nord, vers les villes, vers les bourgs où personne ne leur demande d'où ils viennent.",
      "L'Aïeule part la dernière, sur un âne, avec Tobie. Elle ne se retourne pas. On dit qu'elle a vécu encore dix ans, à Sorel, chez Brune, et qu'elle ne parlait jamais de l'eau.",
      "Dans la vallée sèche, au printemps suivant, les vieux puits du hameau se remettent à suinter. L'eau va où on l'appelle. Elle a cessé d'aller où on la retenait.",
      { if: { present: "aurele" }, text: "Aurèle est vivant. Il est vieux avant l'âge, il a les cheveux blancs et la peau couleur d'eau, mais il est vivant, et il rit de nouveau, pas souvent." },
    ].concat(epilogue("tarie")) },
  F_flammes: { act: "III", title: "Kardan en flammes", end: true, place: "kardan",
    fx: { quest: "O_kardan", mark: 2, ep: ["histoire", 8000] },
    text: [
      { if: { not: { has: "v:grenier" } }, text: "Pendant que vous vous battez, le feu prend au village : une lanterne renversée, une torche jetée, personne ne saura jamais. Le vent fait le reste." },
      { if: { has: "milice:battue" }, text: "Bastien tombe le dernier, sur les marches de la colline, la main encore serrée sur sa lance. Ses hommes s'enfuient. Plus personne ne se met en travers de ton chemin.",
        else: "Bastien te jette à terre au pied des marches, et sa lance s'arrête à un pouce de ta gorge. Il ne frappe pas. Derrière lui, le village brûle, et il regarde le village. « Va-t'en, dit-il. Va-t'en, et ne reviens jamais. » Tu t'en vas." },
      "Kardan brûle tout le jour. Le grenier, les toits de roseau, le platane de la place, qui flambe comme une torche et tombe en travers de la fontaine. Le soir, il ne reste que des murs noirs, des jardins piétinés, des gens assis dans la poussière qui ne te regardent même plus.",
      "Tu as eu ta vengeance. Elle a le goût de la fumée, et elle te reste dans la gorge des mois durant.",
      "La Source, elle, n'a pas brûlé. Personne ne la tient plus. L'eau s'en va, lentement, au fil des semaines, vers les puits du hameau sec, vers les autres villages, vers la mer peut-être. Kardan ne sera pas reconstruit.",
      { if: { has: "tobie:blesse" }, text: "Tu revois, longtemps, un enfant aux bras écartés devant une vieille femme assise." },
      { if: { has: "hesna:brulee" }, text: "Tu revois, longtemps, deux mains brûlées jusqu'au coude, qui tiennent un enfant." },
    ].concat(epilogue("flammes")) },
  F_nord: { act: "III", title: "La route du nord", end: true, place: "kardan",
    fx: { quest: "O_kardan", ep: ["histoire", 7000] },
    text: [
      "Tu tournes le dos à Kardan, et tu prends la route du nord. Le soleil se lève sur ta droite. Derrière toi, le village se réveille, et ne sait pas encore que tu es sorti.",
      { if: { all: [{ has: "aurele:libre" }, { present: "aurele" }] }, text: "Aurèle marche à côté de toi, lentement, en s'appuyant sur ton épaule. Il ne se retourne pas. « Ils trouveront quelqu'un d'autre, dit-il au bout d'une lieue. Un autre étranger. Ils trouvent toujours. » Tu ne réponds pas. Tu n'as pas de réponse." },
      { if: { has: "lien:partage" }, text: "Le lien attend dans la fontaine, et personne ne sait qu'il est là. Dans quelques semaines, l'eau baissera, et personne ne saura pourquoi." },
      { if: { has: "aurele:mort" }, text: "Tu portes le couteau d'Aurèle, et une poignée de terre de la colline dans un mouchoir. Tu la verseras sur la tombe de votre mère. C'est tout ce que tu rapportes." },
      "Kardan continue d'attendre ses étrangers. La Lune sèche revient chaque été. On y boit au Gardien, et à celui qui le nourrira. Quelque part au fond de la colline, la Source bat, et attend.",
      "Sur la borne, au bord de la route, tu t'arrêtes une dernière fois. Sous le NE BOIS PAS d'Aurèle, tu graves au couteau, en prenant ton temps : *ILS NE MANGENT PERSONNE. ILS VOUS REMPLACENT.* Et tu dates d'un 7, que tu barres, pour la première fois de ta vie.",
    ].concat(epilogue("nord")) },
};
