// L'Île Folle-Aiguille · side story « Les enfants du marais » (owes its question to Oliver Twist: is a child who steals
// to eat a thief, and who is guilty, the hand or the one who lives off it?). In the Basse-Fosse a girl of ten lifts the
// child's three sous; the chase ends in an old salt-house on the marsh, where the widow Gâche keeps a school for small
// hands. A lesson (the snuffbox), a morning's work on the quay (ye:vole, or ye:pris), or a refusal (ye:refuse). Then
// Fauvette, the girl, and what is done for her: the nuns of the rue des Tanneurs (ye:soeurs), the watch (ye:denonce),
// or nothing (ye:laisse). Wired in A2m_bf.
module.exports = {
  passages: {
    YE_main: { act: "II", title: "La main", place: "basse_fosse", ambiance: "ville",
      text: [
        "Tu sens la main au moment où elle repart. Une main légère comme une plume, un frôlement contre ta hanche, et tes trois sous, les trois sous du bosco pour la bière, ne sont plus dans ta poche. Tu te retournes. Une fille de dix ans, pieds nus, en jupe de toile trop longue, un fichu rouge sur la tête, file entre les jambes des portefaix sans courir, du pas tranquille de quelqu'un qui rentre chez soi.",
        "Elle sait que tu as senti. Elle te regarde par-dessus son épaule, une seconde, avec des yeux noirs très vifs, et elle te fait un clin d'œil. Puis elle se met à courir.",
      ],
      choices: [{ label: "Courir derrière elle", test: { dom: "nature", diff: 1, label: "Une fille qui connaît chaque ruelle" },
        win: { to: "YE_saline" }, lose: { to: "YE_perdue" } }] },
    YE_perdue: { act: "II", title: "La main", place: "basse_fosse", ambiance: "ville",
      text: [
        "Elle tourne à gauche, à droite, passe sous une charrette, saute un caniveau, s'engouffre dans une cour, en ressort par une fenêtre, et quand tu ressors de la cour à ton tour, il n'y a plus personne, que des lessives qui pendent, et une vieille femme qui te regarde en mâchant du tabac.",
        "Tu cherches longtemps. Tu finis par la trouver, au bord du marais, là où les ruelles de la Basse-Fosse s'effilochent dans les roseaux : elle est assise sur une borne, en train de compter tes trois sous, et elle t'attend.",
        "« T'es tenace, dit-elle. Ça se paie, d'être tenace. Viens. Je vais te présenter. »",
      ],
      choices: [{ label: "La suivre", to: "YE_saline" }] },
    YE_saline: { act: "II", title: "La saline", place: "basse_fosse", ambiance: "nuit",
      text: [
        "Au bord du marais, sur pilotis, il y a une vieille saline abandonnée, un long bâtiment de planches noires où l'on faisait bouillir l'eau de mer, autrefois, dans de grands bacs de fer, pour en tirer du sel. Les bacs sont toujours là, rouillés, alignés dans la pénombre comme des cercueils sans couvercle. Dans chaque bac, il y a un enfant. Il y en a douze, quinze, peut-être davantage ; ils dorment, mangent, jouent aux osselets, dans le sel durci du fond, et leurs yeux brillent dans la pénombre quand vous entrez, tous à la fois, comme les yeux d'une portée de chats.",
        "Au fond, près d'un brasero, dans un fauteuil de velours crevé qui a dû appartenir à un évêque, une vieille femme fume une pipe en terre. Elle est énorme, molle, couverte de châles, avec des bagues à tous les doigts, et une voix d'une douceur exquise.",
        "« Entre, mon petit cœur. Fauvette m'a dit que tu courais vite et que tu ne lâchais pas. Ce sont deux qualités. Dans notre commerce, il n'en faut que trois. » Elle tire sur sa pipe. « La troisième, c'est les doigts. Montre-moi tes doigts. »",
        "Fauvette te pousse dans le dos. La veuve Gâche, c'est son nom, prend ta main dans les siennes, chaudes, moites, chargées d'or, et la retourne, et palpe tes doigts un à un, comme un marchand de chevaux palpe un paturon.",
        "« Fins, dit-elle. Je m'en doutais. Tu as faim, mon petit cœur ? Ici, on a toujours à manger. C'est la seule maison de Morlenc où un enfant a toujours à manger. Demande à n'importe lequel. »",
        "Dans les bacs, personne ne dit le contraire.",
      ],
      choices: [
        { label: "Manger, et prendre la leçon", to: "YE_lecon" },
        { label: "« Rends-moi mes trois sous. Je m'en vais. »", to: "YE_refus" },
      ] },
    YE_lecon: { act: "II", title: "La leçon", place: "basse_fosse", ambiance: "nuit",
      text: [
        "La soupe est bonne. C'est le plus inquiétant. Une soupe de poisson épaisse, avec du pain, servie par Fauvette dans des écuelles d'étain volées à trois tavernes différentes, dont les noms sont gravés sur le bord.",
        "Puis la veuve Gâche s'endort. Exprès. Elle ferme les yeux dans son fauteuil d'évêque, la pipe au bec, les mains croisées sur son ventre, et elle se met à ronfler, très doucement, avec une régularité de pendule. Sa tabatière d'argent dépasse de la poche de son tablier, à moitié, comme un appât.",
        "« Vas-y, chuchote Fauvette. Si elle se réveille, tu dors dehors. Si elle se réveille pas, t'es de la maison. »",
        "Tous les yeux, dans les bacs, sont tournés vers toi. Le brasero crépite. Le ronflement continue, égal, régulier, sans un accroc. Et tu as l'impression, très nette, absurde, qu'entre deux ronflements, sous ses paupières fermées, la vieille te regarde.",
      ],
      choices: [{ label: "Prendre la tabatière", test: { dom: "discretion", diff: 1, label: "Une main qui ne pèse rien" },
        win: { to: "YE_quai" }, lose: { to: "YE_reveil" } }] },
    YE_reveil: { act: "II", title: "La leçon", place: "basse_fosse", ambiance: "nuit",
      text: [
        "Ta main est sur la tabatière quand une autre main, chaude, moite, chargée d'or, se referme sur ton poignet, comme un piège à loup.",
        "La veuve Gâche ouvre les yeux. Elle sourit. Elle n'a pas l'air fâchée. Elle a l'air contente, au contraire, comme une maîtresse d'école devant un élève qui vient de faire la faute qu'elle attendait.",
        "« Trop lourd, mon petit cœur. Trop pressé. Tu penses à ce que tu prends. Il ne faut jamais penser à ce qu'on prend. Il faut penser à autre chose : à ta mère, à la mer, à une chanson. La main fait le reste. » Elle te lâche. « On recommencera demain. Tu as le temps. Tout le monde a le temps, ici. »",
        "Elle te rend tes trois sous, en souriant, sans que tu l'aies demandé. C'est bien pire.",
      ],
      choices: [{ label: "Sortir de la saline, et ne pas revenir", fx: { flag: "ye:refuse" }, to: "YE_fauvette" }] },
    YE_quai: { act: "II", title: "Le quai", place: "quai_hollandes", ambiance: "ville",
      text: [
        "La tabatière est dans ta main, la vieille ronfle toujours, et toute la saline éclate en applaudissements silencieux, des dizaines de petites mains qui battent sans bruit, dans le sel, comme des papillons de nuit.",
        "Le lendemain matin, à l'heure où les armateurs descendent à la Bourse, Fauvette t'emmène « faire le quai ». C'est simple : elle bouscule, tu prends. Un gros homme en redingote puce, qui parle de cours du sucre avec un autre gros homme. Fauvette lui marche sur le pied, s'excuse en pleurant, il la repousse, il jure, et pendant qu'il jure, sa montre, une montre d'or à répétition, avec sa chaîne, glisse dans ta manche, sans que tu saches très bien comment. Ta main a pensé à autre chose. Elle a fait le reste.",
        "Vous courez. Derrière vous, la montre se met à sonner dans ta manche, l'heure entière, onze coups, en plein Quai des Hollandes.",
      ],
      choices: [{ label: "Courir plus vite que onze coups", test: { dom: "nature", diff: 1, label: "Une montre qui sonne" },
        win: { fx: { flag: "ye:vole", gold: 30 }, to: "YE_partage" }, lose: { fx: { flag: "ye:pris" }, to: "YE_pris" } }] },
    YE_partage: { act: "II", title: "Le partage", place: "basse_fosse", ambiance: "nuit",
      text: [
        "La veuve Gâche pèse la montre dans sa paume, l'ouvre, la referme, écoute sonner la demie, et sourit. Elle te donne trente sous, sur la valeur. Trente sous. La montre en vaut trois cents livres. Tu le sais, parce que tu as vu le prix d'une montre pareille chez l'horloger du Quai-aux-Harengs, une fois, en passant.",
        "« C'est la règle, mon petit cœur. Toi, tu as le risque. Moi, j'ai le reste. C'est comme ça partout, à Morlenc. Demande à n'importe quel armateur. »",
        "Fauvette, à côté de toi, compte sur ses doigts. Elle a dix ans. Elle fait le quai depuis quatre ans. Elle sait compter jusqu'à trois cents. Elle te regarde, et tu vois dans ses yeux noirs ce qu'elle a calculé depuis longtemps : combien de montres il faudra pour sortir de la saline, et que le nombre est plus grand que le nombre de montres de Morlenc.",
      ],
      choices: [{ label: "Prendre les trente sous", to: "YE_fauvette" }] },
    YE_pris: { act: "II", title: "Le guet", place: "quai_hollandes", ambiance: "ville",
      text: [
        "Une main d'homme t'attrape au col, une main énorme, gantée de blanc : un sergent du guet. La montre sonne toujours dans ta manche. Le gros homme en redingote puce arrive, essoufflé, rouge, et réclame qu'on te pende.",
        "Fauvette a disparu. Bien sûr.",
        "On te traîne à la capitainerie du port. Là, par chance, ou par malchance, l'officier de garde reconnaît ta vareuse : un mousse de la Cormorane. La Cormorane est au baron Clavières. On n'arrête pas les mousses du baron Clavières sans lui en parler. On lui en parle. Il fait répondre qu'on te rende au bosco, et qu'on lui envoie la note.",
        "Maître Gobert vient te chercher en personne. Il ne dit rien sur le chemin. À bord, il te fait récurer le pont, seul, avec un seau et une brique, jusqu'à minuit. Puis il s'assied à côté de toi, sur le pont mouillé. « Ta mère t'a pas appris qu'on vole pas ? — Je n'ai plus de mère. — Alors moi, je te l'apprends. Une fois. » Il se lève. « Il y en aura pas deux. »",
      ],
      choices: [{ label: "Penser à Fauvette, qui n'a pas de Gobert", fx: { regard: { gobert: "mefiant" } }, to: "YE_fauvette" }] },
    YE_refus: { act: "II", title: "La saline", place: "basse_fosse", ambiance: "nuit",
      text: [
        "La veuve Gâche te regarde longtemps, à travers la fumée de sa pipe, avec ses yeux doux et lourds.",
        "« Fauvette, rends-lui ses trois sous. » Fauvette te les rend. « Tu as un toit, mon petit cœur, et quelqu'un qui te nourrit. Tu peux te permettre de dire non. C'est un luxe, tu sais. » Elle souffle un rond de fumée qui monte vers les poutres, où pendent des filets à sel pourris. « Eux, dans les bacs, ils ne peuvent pas se le permettre. Pense à ça, quand tu mangeras ta soupe, ce soir, à bord. Pense que c'est la mienne qui est la seule à ne rien demander. »",
        "Tu sors. Personne ne te retient.",
      ],
      choices: [{ label: "Sortir sur la digue", fx: { flag: "ye:refuse" }, to: "YE_fauvette" }] },
    YE_fauvette: { act: "II", title: "Fauvette", place: "basse_fosse", ambiance: "ville",
      text: [
        "Fauvette te rejoint plus tard, sur la digue du marais, au coucher du soleil. Elle s'assied à côté de toi, les pieds dans le vide, au-dessus de l'eau grise où flottent des choses qu'on préfère ne pas nommer.",
        "« Elle te plaît, ta Cormorane ? » Tu dis que oui. « Ils prennent des filles, à bord ? » Tu dis que non. Puis tu dis qu'il y a une timonière, et une canonnière peut-être. Elle réfléchit. « Faut être grande. » Elle crache dans l'eau. « Je serai jamais grande. Elle nous garde jusqu'à douze ans, la Gâche. Après, les garçons, elle les vend à la presse, et les filles, elle les vend ailleurs. Tout le monde sait où. »",
        "Elle le dit sans émotion particulière, comme elle dirait qu'il va pleuvoir. Elle a dix ans. Il lui reste deux ans.",
      ],
      choices: [
        { label: "L'emmener rue des Tanneurs, à la porte bleue des Sœurs", to: "YE_soeurs" },
        { label: "Aller dire au guet ce qu'il y a dans la saline", to: "YE_denonce" },
        { label: "Lui laisser tes sous, et rentrer à bord", to: "YE_laisse" },
      ] },
    YE_soeurs: { act: "II", title: "La porte bleue", place: "basse_fosse", ambiance: "ville",
      text: [
        "La porte bleue des Sœurs de la rue des Tanneurs s'ouvre sur un parloir blanchi à la chaux, sentant le savon noir et la soupe aux poireaux. Sœur Marthe vous écoute debout, les mains dans ses manches, en regardant Fauvette de haut en bas, avec une sévérité qui ne trompe personne.",
        "« Elle vole, dit Sœur Marthe. — Oui, ma sœur. — Elle ment. — Oui, ma sœur. — Elle va me mettre la maison sens dessus dessous. — Oui, ma sœur. » Sœur Marthe soupire. « Bien. Elle couchera au deuxième, avec les autres. Il y a une grande qui est malade et qui s'ennuie ; elle lui fera la lecture. Tu sais lire, petite ? — Non. — Elle t'apprendra. Elle s'appelle Lisette. Elle a très mauvais caractère, elle aussi. Vous vous entendrez. »",
        "Fauvette regarde le parloir, les murs blancs, le crucifix, le pot de géraniums sur la fenêtre, comme on regarde une cage. Puis elle te regarde, toi. Elle ne dit pas merci. Elle dit : « Si je m'ennuie, je me sauve. — Si tu t'ennuies, dit Sœur Marthe, tu laveras les escaliers. On ne s'ennuie jamais en lavant les escaliers. »",
      ],
      choices: [{ label: "Laisser Fauvette à la porte bleue", fx: { flag: "ye:soeurs" }, back: "A2m_bf" }] },
    YE_denonce: { act: "II", title: "Le guet", place: "basse_fosse", ambiance: "nuit",
      text: [
        "Le sergent du guet t'écoute en se curant les ongles. Puis il appelle six hommes, et ils descendent au marais à la nuit, avec des lanternes et des gourdins, et tu les suis de loin.",
        "La saline est vide. Les bacs sont vides. Le fauteuil d'évêque est vide, et encore tiède. Il reste le brasero, qui fume, et sur le brasero, une marmite de soupe qui bout toute seule. Quelqu'un avait prévenu. Quelqu'un prévient toujours, à la Basse-Fosse.",
        "Le sergent mange une écuelle de soupe, dit qu'elle est excellente, et remonte en ville en sifflant. Le lendemain, la veuve Gâche a une autre saline, ailleurs, et les mêmes enfants, et toi, dans la Basse-Fosse, une réputation. Fauvette, tu ne la revois pas. Une fois, au coin de la rue des Cordiers, tu crois apercevoir un fichu rouge, qui se retourne, et qui disparaît.",
      ],
      choices: [{ label: "Rentrer à bord", fx: { flag: "ye:denonce" }, back: "A2m_bf" }] },
    YE_laisse: { act: "II", title: "Fauvette", place: "basse_fosse", ambiance: "ville",
      text: [
        "Tu lui donnes tout ce que tu as dans les poches. Elle compte, très vite, d'un coup d'œil. Elle dit que c'est pas beaucoup. Elle le garde.",
        "Puis elle saute de la digue, et s'en va vers la saline, sans courir, du pas tranquille de quelqu'un qui rentre chez soi. Elle ne se retourne pas. Elle n'a jamais eu besoin de se retourner pour savoir ce qu'il y a derrière elle.",
      ],
      choices: [{ label: "Rentrer à bord", fx: { flag: "ye:laisse" }, back: "A2m_bf" }] },
  },
  extras: {
    people: {
      fauvette: { name: "Fauvette", aka: ["la fille au fichu rouge"], f: true,
        qui: "Une voleuse de dix ans, pieds nus, au fichu rouge, qui fait le quai pour la veuve Gâche." },
      gache: { name: "La veuve Gâche", aka: ["la Gâche", "la veuve"], f: true,
        qui: "Une vieille femme énorme et douce, qui tient au bord du marais une école pour les petites mains." },
    },
    quests: [
      { id: "YE", act: "II", kind: "annexe", title: "Les enfants du marais", start: "YE_main", doit: "olivertwist", echo: ["ye:soeurs", "ye:denonce", "ye:laisse"] },
    ],
  },
};
