// Prologue, the eye (post `p` = oeil): the street, the rounds of the watch, the back lane and the treasury cart, the
// tavern, the Gants-Noirs, the way out through the cooper's cellars; then the job seen from the street.
// Sets: monde:p:rondes, monde:p:fuite, monde:p:charretier, monde:p:gants_ecartes, monde:p:descente_tenue,
// monde:p:ruelle_tenue, monde:p:reine=propre (only when the eye itself takes the lock, cleanly). Personal: p:o_bache,
// p:o_douce, p:o_ramoneur.
var PLAN = function (h, e, r, f) { return [{ if: { scrutin: "plan_p", is: "haut" }, to: h }, { if: { scrutin: "plan_p", is: "echange" }, to: e }, { if: { scrutin: "plan_p", is: "ruelle" }, to: r }, { to: f }]; };

module.exports = {
  passages: {
    Po_rue: { act: "P", title: "Dans la foule", place: "ferronniers", hub: true, backName: "la rue en fête",
      text: [
        { first: true, text: "Tu quittes le porche les mains dans les poches, et la foule te prend. C'est le poste que les deux autres plaignent toujours, celui où l'on ne touche à rien : on marche, on regarde, on compte. La Douairière dit que c'est le seul des trois qui demande de l'intelligence, et elle ajoute, pour être juste, que c'est aussi celui qu'on pend le dernier." },
        { first: true, text: "La rue des Ferronniers, vue à hauteur d'épaule, est faite de dos. Dos de bourgeois, dos de servantes, dos d'apprentis en goguette ; et par-dessus, les enseignes de fer qui grincent, et les lanternes qui font danser sur tout cela des ombres de clefs. Devant le perron des Maîtres, deux gardes du guet en casaque bleue s'ennuient debout. Un troisième vient de tourner le coin, une lanterne au poing, du pas d'un homme qui fait le même tour depuis vingt ans." },
        { again: true, text: "La rue, les dos, les enseignes. Les deux gardes du perron ont changé de pied d'appui." },
        { after: "Po_rondes_ok", text: "Tu sais maintenant quand passe la lanterne du sergent, et tu la sens venir avant de la voir, comme on sent venir une marche dans un escalier connu." },
        { after: "p:o_ramoneur", before: "Po_gants", text: "Sur la façade d'en face, l'échelle du ramoneur aux mains propres est toujours dressée contre un balcon." },
      ],
      choices: [
        { label: "Emboîter le pas au sergent, de loin, et compter ses tours", to: "Po_rondes", hide: { any: [{ seen: "Po_rondes_ok" }, { seen: "Po_rondes_ko" }] } },
        { label: "Faire le tour par la ruelle de derrière", to: "Po_ruelle" },
        { label: "Entrer au Marteau d'Or, où boivent les gens de service", to: "Po_marteau" },
        { label: "Visiter la cour du tonnelier, derrière le porche", to: "Po_cour", hide: { seen: "Po_quai" } },
        { label: "Suivre des yeux ce ramoneur, qui a les mains bien blanches", to: "Po_ramoneur", if: { any: [{ seen: "Po_ruelle" }, { seen: "Po_rondes" }] }, hide: { any: [{ not: { any: [{ seen: "Po_ruelle" }, { seen: "Po_rondes" }] } }, { seen: "Po_ramoneur" }] } },
        { label: "S'occuper de l'échelle des Gants-Noirs", to: "Po_gants", if: { has: "p:o_ramoneur" }, hide: { any: [{ not: { has: "p:o_ramoneur" } }, { seen: "Po_gants" }] } },
        { label: "Onze heures approchent : regagner le porche du tonnelier", to: "Pc_porche", big: true },
      ] },

    // ------------------------------------------------------------ the rounds
    Po_rondes: { act: "P", title: "La lanterne du sergent", place: "ferronniers",
      text: [
        "Le sergent est un homme entre deux âges, large, lent, qui porte sa lanterne basse pour éclairer les seuils. Tu le suis à trente pas, de vitrine en vitrine, en t'arrêtant quand il s'arrête. Il fait le tour du pâté : la rue, le coin de l'apothicaire, la venelle des Limeurs, et de là, quelquefois, la ruelle de derrière, où il s'engage ou ne s'engage pas, selon une règle qui lui appartient.",
        "Toute l'affaire tient dans cette règle. Il faut la lui prendre sans qu'il sente la main.",
      ],
      choices: [
        { label: "Faire trois tours derrière lui, en comptant sur les clochers", takes: 1, test: { dom: "nature", diff: 10, label: "Nature" }, win: { fx: { flag: "monde:p:rondes", ep: ["perso", 400] }, to: "Po_rondes_ok" }, lose: { to: "Po_rondes_ko" } },
        { label: "T'asseoir sur une borne avec une gaufre et le regarder passer", takes: 1, test: { dom: "savoir", diff: 10, label: "Savoir" }, win: { fx: { flag: "monde:p:rondes", ep: ["perso", 400] }, to: "Po_rondes_ok" }, lose: { to: "Po_rondes_ko" } },
      ] },
    Po_rondes_ok: { act: "P", title: "La règle du sergent", place: "ferronniers",
      text: [
        "Trois tours suffisent. Le sergent passe devant le perron au quart, à la demie, aux trois quarts et à l'heure, avec une exactitude dont il tire visiblement de la fierté : il lève les yeux vers le clocher des Heures à chaque passage, pour le plaisir de se trouver d'accord avec lui.",
        "Quant à la ruelle, il s'y engage un tour sur deux. À l'heure et à la demie, il la longe jusqu'au bout, en éclairant la porte de la cour. Au quart et aux trois quarts, il coupe par la venelle des Limeurs, où une fenêtre de rez-de-chaussée s'entrouvre sur son passage et lui tend un gobelet. De la demie aux trois quarts, la ruelle n'appartient à personne.",
      ],
      choices: [{ back: "Po_rue" }] },
    Po_rondes_ko: { act: "P", title: "« Tu cherches quelque chose ? »", place: "ferronniers",
      text: [
        "Au deuxième tour, le sergent s'arrête sous une enseigne, se retourne, et lève sa lanterne à hauteur de ton visage.",
        "« Ça fait deux fois que je te trouve derrière moi. Tu cherches quelque chose, ou tu as perdu quelqu'un ? »",
        "Tu dis une cousine, la foule, un rendez-vous manqué au coin de l'apothicaire. Il t'écoute en hochant la tête, avec la patience d'un homme à qui l'on a déjà servi la cousine. « Cherche-la de l'autre côté de la rue. De ce côté-ci, c'est moi qui cherche. » Il te regarde t'éloigner. Tu n'auras pas sa règle ce soir ; tu as seulement appris qu'il a de la mémoire.",
      ],
      choices: [{ back: "Po_rue" }] },

    // ------------------------------------------------------------ the back lane
    Po_ruelle: { act: "P", title: "La ruelle aux Cendres", place: "ferronniers", backName: "la ruelle",
      text: [
        { first: true, text: "Derrière l'hôtel des Maîtres, la fête montre son envers. La ruelle aux Cendres est un boyau de pavés gras entre deux murs sans fenêtres, où les cuisines de la guilde jettent depuis midi ce que trois cents convives ne mangeront pas. Une seule lanterne, à l'angle, y répand une clarté d'huile sale ; au-delà, l'obscurité est de cette espèce épaisse et tiède où l'on entend remuer avant de voir, et où l'esprit, faute de mieux, donne un visage à chaque tas d'épluchures." },
        { first: true, text: "À mi-longueur, une porte cochère : la cour de l'hôtel. Devant elle, rangée contre le mur, une charrette basse à deux roues, attelée d'un mulet qui dort debout. Une bâche de toile cirée est pliée sur le plateau, près d'un coffre de chêne bardé de fer, ouvert et vide, garni de paille. Plus loin, la porte des cuisines bat sur ses gonds, et une fille en tablier y vide un baquet." },
        { again: true, text: "La ruelle aux Cendres, son pavé gras, sa lanterne unique. Le mulet dort toujours entre ses brancards." },
      ],
      choices: [
        { label: "Regarder la charrette de près", to: "Po_charrette", hide: { seen: "Po_charrette" } },
        { label: "Dire un mot à la fille des cuisines", to: "Po_souillon", hide: { seen: "Po_souillon" } },
        { back: "Po_rue" },
      ] },
    Po_charrette: { act: "P", title: "La charrette du trésor", place: "ferronniers",
      text: [
        "Le mulet t'accorde un œil, juge que tu n'apportes pas d'avoine, et le referme. Sur le flanc de la charrette, on a peint les armes de la guilde, une clef d'argent sur champ d'azur, et dessous, en petites lettres : *Trésor des Maîtres. Défense d'y toucher.* Les Maîtres du Fer croient à l'écriture comme d'autres aux verrous.",
        "Le coffre est ce qu'il doit être : chêne de trois doigts, pentures forgées, une serrure à moraillon grosse comme un poing. La caisse de la Serrure-Reine y entrera juste. La bâche se fixe par quatre cordelettes à des taquets de fer.",
      ],
      choices: [
        { label: "Entamer au couteau trois des quatre cordelettes, par-dessous", test: { dom: "discretion", diff: 10, label: "Discrétion" }, win: { fx: { flag: "p:o_bache", ep: ["perso", 300] }, to: "Po_charrette_ok" }, lose: { to: "Po_charrette_ko" } },
        { label: "Laisser la charrette comme elle est", back: "Po_ruelle" },
      ] },
    Po_charrette_ok: { act: "P", title: "Trois cordelettes sur quatre", place: "ferronniers",
      text: [
        "La lame passe sous la toile, mord le chanvre aux trois quarts, et s'arrête. Vues d'en haut, les cordelettes sont entières. Tirées d'un coup sec, elles lâcheront ensemble, et la bâche viendra comme une nappe.",
        "Le mulet a suivi l'opération d'une oreille. Il garde son opinion.",
      ],
      choices: [{ back: "Po_ruelle" }] },
    Po_charrette_ko: { act: "P", title: "Le mulet", place: "ferronniers",
      text: [
        "Tu te glisses entre la roue et le mur, le couteau tiré. C'est le moment que choisit le mulet pour se rappeler qu'il a une jambe de derrière. Elle part sans colère, par principe, et te cueille à la cuisse.",
        "Tu ressors de là à cloche-pied, les dents serrées sur un mot que la Douairière défend. La bâche restera bien attachée. Il y a des gardiens que les Maîtres du Fer n'ont pas forgés et qui valent les autres.",
      ],
      fx: { pv: -2 },
      choices: [{ back: "Po_ruelle" }] },
    Po_souillon: { act: "P", title: "La fille au baquet", place: "ferronniers",
      text: [
        "Elle a quinze ans, les bras rouges jusqu'aux coudes, et elle vide son baquet d'eau grasse avec un large geste de semeuse, sans regarder où cela tombe. Cela tombe à un pouce de tes souliers.",
        "« Pardon. Enfin, pardon : c'est une ruelle, aussi. » Elle s'essuie le front du revers du poignet. Elle s'appelle Toinette, elle est debout depuis quatre heures du matin, et elle en veut à l'univers, en commençant par le chef des sauces.",
      ],
      choices: [
        { label: "La plaindre, et l'écouter se plaindre", test: { dom: "social", diff: 20, label: "Social" }, win: { fx: { ep: ["perso", 250], flag: "p:o_toinette" }, to: "Po_souillon_ok" }, lose: { to: "Po_souillon_ko" } },
        { label: "Lui offrir deux sous pour une part de pâté, et causer en mangeant", if: { gold: { min: 2 } }, fx: { gold: -2, flag: "p:o_toinette" }, to: "Po_souillon_ok" },
      ] },
    Po_souillon_ok: { act: "P", title: "Ce que savent les cuisines", place: "ferronniers",
      text: [
        "Les cuisines savent tout, et les cuisines parlent à qui les plaint. À minuit sonnant, dit Toinette, deux valets descendent la merveille par l'escalier de derrière. Toujours les deux mêmes : le grand Amable et le petit Lubin. Ils traversent la cour, lèvent la barre, chargent le coffre, et le charretier mène le tout au trésor, qui est la porte d'après, à trente pas. « Trente pas, avec un mulet ! Les Maîtres disent que c'est la tradition. Moi je dis que c'est pour donner à boire au charretier. »",
        "« Et la porte des cuisines, tu la fermes quand ? »",
        "« Quand le chef dort. Il dort au café. » Elle reprend son baquet. « Pourquoi, tu veux du café ? »",
      ],
      choices: [{ back: "Po_ruelle" }] },
    Po_souillon_ko: { act: "P", title: "Un baquet de plus", place: "ferronniers",
      text: [
        "Tu trouves le mot qu'il ne fallait pas, ou le ton. Elle te regarde de la tête aux pieds, conclut que tu es de ces gens qui causent aux filles de cuisine le soir dans les ruelles, et rentre en claquant la porte. Le baquet suivant, vidé par l'imposte, te manque de moins loin.",
      ],
      choices: [{ back: "Po_ruelle" }] },

    // ------------------------------------------------------------ the tavern
    Po_marteau: { act: "P", title: "Au Marteau d'Or", place: "ferronniers", backName: "le Marteau d'Or", taverne: { mise: 4, adversaire: "un valet de pied" },
      text: [
        { first: true, text: "Le Marteau d'Or est à la Saint-Fer ce que la sacristie est à la messe : l'endroit où ceux qui servent la cérémonie viennent en dire ce qu'ils en pensent. Cochers, porteurs de chaise, valets de pied y boivent en livrée, le col défait, pendant que leurs maîtres portent des santés à vingt pas de là. On y parle fort et on y joue serré." },
        { first: true, text: "Au bout du comptoir, un gros homme en blouse de roulier, le fouet passé autour du cou, entretient avec un pichet une conversation où il fait les demandes et les réponses. À une table, près du feu, quatre casaques bleues du guet soupent de harengs, la hallebarde contre le mur." },
        { again: true, text: "Le Marteau d'Or, sa fumée, ses livrées. Le gros roulier est toujours au bout du comptoir ; les casaques bleues, près du feu." },
        { after: "monde:p:charretier", text: "Gros-Martin a posé le front sur son bras. Il ronfle avec modestie." },
      ],
      choices: [
        { label: "T'accouder près du gros roulier", to: "Po_martin", hide: { seen: "Po_martin" } },
        { label: "Prendre un banc dos à dos avec la table du guet", to: "Po_gardes", hide: { seen: "Po_gardes" } },
        { back: "Po_rue" },
      ] },
    Po_martin: { act: "P", title: "Gros-Martin", place: "ferronniers",
      text: [
        "Il s'appelle Gros-Martin, et il mène la charrette du trésor depuis onze ans. « Trente pas, dit-il. Une fois l'an. Les Maîtres me donnent un écu pour trente pas : ça met le pas plus cher que chez le pape. » Il rit, boit, s'attendrit sur son mulet, qui s'appelle Syndic, par affection.",
        "Il a déjà son compte, ou peu s'en faut. Il lui reste une heure et demie à tenir, et il regarde le fond de son pichet avec l'inquiétude d'un homme qui voit baisser une rivière.",
      ],
      choices: [
        { label: "Lui offrir le pichet suivant, et celui d'après", if: { gold: { min: 6 } }, fx: { gold: -6, flag: "monde:p:charretier", ep: ["perso", 300] }, to: "Po_martin_ok" },
        { label: "Trinquer à sec, et le faire boire à ta santé, sur son ardoise", test: { dom: "social", diff: 10, label: "Social" }, win: { fx: { flag: "monde:p:charretier", ep: ["perso", 400] }, to: "Po_martin_ok" }, lose: { to: "Po_martin_ko" } },
        { label: "Le laisser à son pichet", back: "Po_marteau" },
      ] },
    Po_martin_ok: { act: "P", title: "La santé du mulet", place: "ferronniers",
      text: [
        "Vous buvez au mulet, puis aux Maîtres, puis à la mère de Gros-Martin, qui était une sainte. Au troisième pichet, il t'explique en confidence que la bâche a quatre cordelettes et qu'il n'en noue jamais que deux, parce que le trésor est à trente pas et que la vie est courte. Au quatrième, il cherche son fouet, qu'il a autour du cou.",
        "À minuit, il tiendra debout : les rouliers tiennent toujours debout. Quant à voir ce qui se passe derrière sa charrette, c'est une autre question, et il l'a noyée.",
      ],
      choices: [{ back: "Po_marteau" }] },
    Po_martin_ko: { act: "P", title: "Un homme qui a de la tête", place: "ferronniers",
      text: [
        "« À ta santé, sur mon ardoise ? » Gros-Martin te considère avec une lenteur majestueuse. « Mon garçon, ma fille, je sais plus, j'y vois double : j'ai onze ans de Saint-Fer. Tous les ans, y en a un qui veut me faire boire avant minuit. L'an dernier, c'était un Gant-Noir. Il a roulé sous la table. » Il lève son pichet. « À la tienne quand même. Sur la tienne. »",
      ],
      choices: [{ back: "Po_marteau" }] },
    Po_gardes: { act: "P", title: "Dos à dos avec le guet", place: "ferronniers",
      text: [
        "Les harengs délient les langues, surtout celles qu'on paie pour se taire. Les quatre gardes parlent du service, c'est-à-dire qu'ils s'en plaignent. Double ronde ce soir, sur ordre : le prévôt veut du monde autour des Maîtres.",
        "« Et lui, où il est, le Cadenas ? »",
        "« Dedans. À la fête. En bourgeois, avec un habit marron qui lui va comme un bât à une vache. Il mange debout près du buffet et il regarde les mains des gens. » Le garde crache une arête. « Y a deux ans, il a pris un coupeur de bourses comme ça, au milieu d'un menuet. Il dit que les visages mentent et que les mains ont pas appris. »",
      ],
      fx: { ep: ["perso", 200], flag: "monde:p:cadenas_dedans" },
      choices: [{ back: "Po_marteau" }] },

    // ------------------------------------------------------------ the Gants-Noirs
    Po_ramoneur: { act: "P", title: "Un ramoneur trop propre", place: "ferronniers",
      text: [
        "Un ramoneur, à la Saint-Fer, n'a rien d'étonnant : on vient de loin pour boire aux frais des Maîtres. Celui-ci porte la hotte, le hérisson, la raclette, et le bonnet enfoncé. Il a seulement oublié un détail du costume, qui est la suie. Quand il s'essuie le nez, tu vois ses mains. Elles sont blanches, soignées, et il vient d'ôter des gants pour manger sa gaufre.",
        "Il traîne une échelle, qu'il dresse sans se presser contre la maison du cirier, juste en face de l'hôtel des Maîtres, sous un balcon de fer forgé.",
      ],
      fx: { flag: "p:o_ramoneur" },
      choices: [
        { label: "Monter après lui, quand il aura disparu par le balcon", test: { dom: "discretion", diff: 10, label: "Discrétion" }, win: { fx: { ep: ["perso", 400] }, to: "Po_douce" }, lose: { to: "Po_ramoneur_ko" } },
        { label: "Le suivre des yeux depuis la rue, et attendre", test: { dom: "nature", diff: 10, label: "Nature" }, win: { fx: { ep: ["perso", 300] }, to: "Po_douce_bas" }, lose: { to: "Po_ramoneur_ko" } },
      ] },
    Po_ramoneur_ko: { act: "P", title: "Une échelle, et personne dessus", place: "ferronniers",
      text: [
        "Un cortège de mitrons passe entre lui et toi, portant une pièce montée en forme de coffre-fort. Quand le dernier bonnet blanc s'est écoulé, le ramoneur n'est plus sur son échelle, ni au balcon, ni dans la rue.",
        "L'échelle, elle, est restée, appuyée à la façade du cirier. Elle mène à un balcon, et de ce balcon une personne leste passerait sans peine au toit voisin, qui touche presque celui des Maîtres. Tu sais au moins par où ils comptent venir.",
      ],
      choices: [{ back: "Po_rue" }] },
    Po_douce_bas: { act: "P", title: "La lorgnette", place: "ferronniers",
      text: [
        "Tu attends, adossé{e} à une borne. Le faux ramoneur enjambe le balcon, dit un mot à quelqu'un dans l'ombre de la porte-fenêtre, et repart par les toits.",
        "Le quelqu'un s'avance alors jusqu'à la rampe. C'est une femme en pourpoint sombre, tête nue, les cheveux coupés à la nuque. Elle porte à son œil une petite lorgnette de théâtre et la promène sur la façade des Maîtres, fenêtre après fenêtre, avec la tranquillité d'une abonnée qui cherche des connaissances dans les loges. Ses mains sont gantées de noir.",
        "La lorgnette descend vers la rue, passe sur la foule, et s'arrête sur toi. Elle y reste le temps d'un sourire. Puis la femme te salue, de deux doigts au front, et rentre.",
      ],
      fx: { meet: "douce", clue: "g_balcon", flag: "p:o_douce" },
      choices: [{ back: "Po_rue" }] },
    Po_douce: { act: "P", title: "Sans-Bruit", place: "ferronniers",
      text: [
        "Tu montes derrière lui, barreau par barreau, et tu passes la rampe du balcon au moment où il la quitte par les toits. La porte-fenêtre est entrouverte. Dans la pièce, sans lumière, quelqu'un est assis sur le bras d'un fauteuil.",
        "« Entre donc. Tu fais un bruit de régiment. » La voix est basse, amusée. Une femme de trente ans, en daim sombre, une lorgnette de théâtre sur les genoux, des gants noirs. « Rossignol, à la démarche. Laisse-moi deviner : la vieille vous a mis à trois dessus, avec sa chanson de l'œil, de la voix et de la main. Tu es l'œil. On met toujours à l'œil celui qui pense trop. »",
        "Douce Malatrait. Elle a appris le métier au grenier de la Clef Tordue, sur la paillasse où tu dors peut-être.",
      ],
      fx: { meet: "douce", flag: "p:o_douce" },
      choices: [
        { label: "« On vous a commandé la même pièce. Qui ? »", test: { dom: "social", diff: 0, label: "Social" }, win: { fx: { clue: "g_billets", ep: ["perso", 400] }, to: "Po_douce_qui" }, lose: { to: "Po_douce_non" } },
        { label: "« La Douairière vous salue. »", to: "Po_douce_salut" },
        { label: "Repasser la rampe sans un mot : tu as vu ce que tu voulais voir", fx: { clue: "g_balcon" }, back: "Po_rue" },
      ] },
    Po_douce_qui: { act: "P", title: "Un client à particule", place: "ferronniers",
      text: [
        "Elle rit sans bruit, ce qui est sa spécialité. « Tu demandes ça comme on demande l'heure. Ça me plaît. » Elle fait tourner la lorgnette entre ses doigts. « Je te dirai ceci, parce que cela m'agace et qu'il faut bien que je le dise à quelqu'un : mon client ne paie pas en écus. Il paie en billets à ordre, sur beau papier, signés d'un nom à particule, et payables à la Saint-Glinglin. J'ai accepté parce qu'un homme qui signe des billets pareils finit toujours par devoir un service plus gros que sa dette. »",
        "« Et la serrure ? »",
        "« Il s'en moque, de la serrure. Il veut savoir si je vaux mieux que vous. C'est flatteur pour tout le monde. » Elle se lève. « Maintenant va-t'en par où tu es venu. À minuit, on ne se connaît plus. »",
      ],
      choices: [{ back: "Po_rue" }] },
    Po_douce_non: { act: "P", title: "Une porte bien fermée", place: "ferronniers",
      text: [
        "« Qui ? » Elle répète le mot avec gourmandise. « Tu demanderas à Marjolaine si, de son temps, on donnait le nom du client à la concurrence. Elle te répondra par une gifle, et elle aura raison. »",
        "Elle te montre la rampe du balcon, d'un doigt ganté. L'audience est levée.",
      ],
      fx: { clue: "g_balcon" },
      choices: [{ back: "Po_rue" }] },
    Po_douce_salut: { act: "P", title: "Deux duellistes", place: "ferronniers",
      text: [
        "Quelque chose passe sur son visage, trop vite pour un nom. « Elle me salue. Elle t'a dit de le dire, ou tu inventes pour voir la tête que je fais ? » Elle n'attend pas la réponse. « Dis-lui que je la salue aussi. Dis-lui que ses escaliers grincent toujours, que son onguent sent toujours le saindoux, et que ce soir je lui prends une serrure sous le nez, avec tout le respect. »",
        "Elle se détourne vers la fenêtre. « Elle m'a tout appris, tu sais. Sauf à partager. »",
      ],
      fx: { clue: "g_balcon", flag: "p:o_douce_salut" },
      choices: [{ back: "Po_rue" }] },

    Po_gants: { act: "P", title: "L'échelle du cirier", place: "ferronniers",
      text: [
        "L'échelle est toujours là, contre la façade du cirier, sous le balcon. C'est par elle que les Gants-Noirs montent, et par elle qu'ils comptent redescendre, chargés, à l'heure où vous voudrez la rue pour vous.",
        "Il y a plus d'une manière de retirer une échelle à quelqu'un.",
      ],
      choices: [
        { label: "Aller trouver le sergent : « Il y a un ramoneur bien propre, là-haut… »", test: { dom: "social", diff: 10, label: "Social" }, win: { fx: { flag: "monde:p:gants_ecartes", ep: ["perso", 400] }, to: "Po_gants_guet" }, lose: { to: "Po_gants_ko" } },
        { label: "Scier aux trois quarts le quatrième barreau", test: { dom: "discretion", diff: 10, label: "Discrétion" }, win: { fx: { flag: "monde:p:gants_ecartes", ep: ["perso", 400] }, to: "Po_gants_scie" }, lose: { to: "Po_gants_ko" } },
        { label: "N'y pas toucher : chacun son métier, et la rue est à tout le monde", back: "Po_rue" },
      ] },
    Po_gants_guet: { act: "P", title: "Un bon citoyen", place: "ferronniers",
      text: [
        "Le sergent t'écoute, lève sa lanterne vers le balcon du cirier, et son visage prend l'expression d'un chien d'arrêt. Un ramoneur, à dix heures du soir, avec une échelle, en face des Maîtres : même le guet d'Aiguemorne sait additionner.",
        "Deux casaques bleues se postent au pied de la façade. Le sergent, lui, garde l'échelle sous le bras comme une pièce à conviction. Les Gants-Noirs, cette nuit, redescendront par ailleurs, et plus tard qu'ils ne pensaient. Tu t'éloignes avec la modestie des bons citoyens, en espérant que le sergent oubliera le tien de visage.",
      ],
      choices: [{ back: "Po_rue" }] },
    Po_gants_scie: { act: "P", title: "Le quatrième barreau", place: "ferronniers",
      text: [
        "Une scie à guichet, large de deux doigts, tient dans une manche. Tu t'adosses à l'échelle comme un badaud fatigué, et tu travailles derrière ton dos, à l'aveugle, en réglant ton geste sur le grincement des enseignes. Le frêne cède aux trois quarts. Un peu de cire de chandelle dans le trait, de la poussière par-dessus.",
        "Le barreau portera le poids d'un homme qui monte. Celui d'un homme qui descend vite, avec neuf livres d'acier, c'est moins sûr. Personne n'en mourra : c'est le quatrième, on tombe de trois pieds. On tombe seulement au mauvais moment.",
      ],
      choices: [{ back: "Po_rue" }] },
    Po_gants_ko: { act: "P", title: "Mains gantées", place: "ferronniers",
      text: [
        "Une main se pose sur ton épaule, légère, gantée de noir. « Laisse. » C'est un petit homme au foulard remonté, sorti de nulle part, qui te sourit des yeux. « On t'a vu venir depuis le coin de l'apothicaire. La patronne dit qu'on ne touche pas aux Rossignols ce soir, alors je te touche pas. Mais tu touches pas à l'échelle. »",
        "Il s'assied sur le premier barreau, tire une pomme, et la mange en te regardant t'en aller.",
      ],
      choices: [{ back: "Po_rue" }] },

    // ------------------------------------------------------------ the way out
    Po_cour: { act: "P", title: "La cour du tonnelier", place: "ferronniers",
      text: [
        "Derrière le porche, une cour encombrée de futailles, de cercles de châtaignier et de douelles mises à sécher en tours carrées. Le tonnelier est à la fête avec toute sa maison ; un apprenti, laissé de garde, dort dans un cuvier, les pieds dépassant du bord.",
        "Au fond, sous un appentis, deux vantaux de chêne posés à plat sur le sol : une trappe à barriques, avec son plan incliné qui s'enfonce dans le noir. Une odeur en monte, de vin tourné, de salpêtre et, par-dessous, d'eau qui court.",
      ],
      choices: [
        { label: "Soulever un vantail et descendre voir où cela mène", test: { dom: "nature", diff: 20, label: "Nature", help: [{ if: { item: "lanterne" }, v: 15 }] }, win: { fx: { ep: ["perso", 300] }, to: "Po_caves" }, lose: { fx: { pv: -1 }, to: "Po_caves" } },
        { back: "Po_rue" },
      ] },
    Po_caves: { act: "P", title: "Les caves", place: "ferronniers", ambiance: "souterrain",
      text: [
        { outcome: "lose", text: "Le plan incliné est poli par un siècle de barriques. Tu le descends sur le dos, plus vite que prévu, et tu arrives en bas dans une position qui n'a rien d'un repérage." },
        "Les caves du tonnelier s'en vont sous la rue en trois nefs basses, voûtées de brique, où des foudres plus hauts qu'un homme s'alignent comme les piliers d'une église qu'on aurait consacrée au vin. La clarté de la trappe s'épuise en dix pas. Au-delà, il faut marcher la main sur les cercles de fer, d'un foudre au suivant, dans une obscurité où chaque goutte qui tombe semble tomber exprès, et où l'on se surprend à compter ses propres pas comme s'ils pouvaient manquer.",
        "Le bruit d'eau grandit. Au bout de la troisième nef, une grille, et derrière la grille un escalier glissant qui descend vers une lueur grise.",
      ],
      choices: [
        { label: "Ouvrir la grille et descendre vers la lueur", test: { dom: "discretion", diff: 20, label: "Discrétion" }, win: { to: "Po_quai" }, lose: { to: "Po_grille" } },
        { label: "Soulever la grille hors de ses gonds, à l'épaule", test: { dom: "combat", diff: 20, label: "Combat" }, win: { to: "Po_quai" }, lose: { to: "Po_grille" } },
      ] },
    Po_grille: { act: "P", title: "Une grille de tonnelier", place: "ferronniers", ambiance: "souterrain",
      text: [
        "La serrure est de ces vieilles bêtes à gorge simple qu'on ouvre d'ordinaire en les regardant ; celle-ci a rouillé dans l'humidité jusqu'à ne plus faire qu'un bloc avec son pêne. Tu t'y acharnes un bon moment. Elle finit par céder d'un coup, avec un cri de fer qui roule sous les voûtes, et tu restes immobile, la main sur le barreau, à écouter si le cuvier, là-haut, a cessé de ronfler.",
        "Il ronfle.",
      ],
      choices: [{ label: "Descendre l'escalier", to: "Po_quai" }] },
    Po_quai: { act: "P", title: "Le quai aux Futailles", place: "ferronniers", ambiance: "eau",
      text: [
        "L'escalier débouche sous une arche, au ras de la Morne. Un quai étroit, des anneaux scellés, deux barques à fond plat retournées sur des tréteaux : c'est par ici que le tonnelier reçoit son merrain et livre ses foudres, par l'eau, sans payer l'octroi de la porte haute. La rivière passe, noire, lente, portant des reflets de lanternes qui viennent de très haut.",
        "D'ici, en longeant le quai vers l'aval, on est aux Bas-Fonds en trois cents pas, sans croiser une rue. Tu refais le chemin en sens inverse, en comptant les foudres : sept dans la première nef, neuf dans la seconde, la grille, vingt-deux marches. Dans une heure, il faudra peut-être le refaire en courant.",
      ],
      fx: { flag: "monde:p:fuite", ep: ["perso", 500] },
      choices: [{ label: "Remonter dans la rue", back: "Po_rue" }] },

    // ------------------------------------------------------------ the job, from the street
    Po_coup: { act: "P", title: "La rue, avant minuit", place: "ferronniers",
      text: [
        "La foule s'est éclaircie. Il reste sur le pavé ceux qui n'ont nulle part où dormir et ceux qui n'en ont pas envie ; les enseignes grincent au-dessus d'eux avec un bruit plus distinct. Aux fenêtres de l'hôtel des Maîtres, les lustres brûlent toujours.",
        { if: { has: "monde:p:rondes" }, text: "Le sergent vient de passer devant le perron, les yeux levés vers le clocher des Heures. Tu sais où il sera dans un quart d'heure.", else: "Le sergent est quelque part dans le pâté de maisons, avec sa lanterne. Tu aurais donné cher pour savoir où." },
      ],
      choices: [{ label: "À ton poste", to: PLAN("Po_c_haut", "Po_c_echange", "Po_c_ruelle", "Po_c_foire"), big: true }] },

    Po_c_haut: { act: "P", title: "La venelle du gantier", place: "ferronniers",
      text: [
        "Ton affaire, c'est le chemin du retour : que la main, en redescendant des toits avec neuf livres d'acier, trouve la venelle du gantier vide, et la cour du tonnelier ouverte.",
        "Tu te postes au coin. La venelle est un trait d'ombre entre deux pignons. Tout y est tranquille jusqu'à minuit moins dix, où deux gardes du guet s'y engagent, sans lanterne, pour un besoin que la Saint-Fer et la bière des Maîtres expliquent assez. Ils s'installent contre le mur, juste sous la gouttière, et entament une conversation qui promet d'être longue.",
      ],
      choices: [
        { label: "Renverser une pile de cercles dans la cour d'à côté : « Au voleur ! Par ici ! »", test: { dom: "discretion", diff: 0, label: "Discrétion", help: [{ if: { has: "monde:p:rondes" }, v: 15 }] }, win: { fx: { flag: "monde:p:descente_tenue", ep: ["seance", 1200] }, to: "Po_c_haut_ok" }, lose: { fx: { ep: ["seance", 600] }, to: "Po_c_haut_ko" } },
        { label: "Aller à eux, l'air important : « Le sergent vous demande au perron. Tout de suite. »", test: { dom: "social", diff: 0, label: "Social", help: [{ if: { has: "monde:p:rondes" }, v: 15 }] }, win: { fx: { flag: "monde:p:descente_tenue", ep: ["seance", 1200] }, to: "Po_c_haut_ok" }, lose: { fx: { ep: ["seance", 600] }, to: "Po_c_haut_ko" } },
      ] },
    Po_c_haut_ok: { act: "P", title: "Une venelle vide", place: "ferronniers",
      text: [
        "Ils partent en rajustant leurs chausses, du trot lourd des gens qu'on dérange pour le service. La venelle est vide. Tu lèves les yeux : là-haut, contre le ciel, une forme passe le chéneau, hésite, et commence à descendre.",
        "Tu ouvres la barrière de la cour du tonnelier, et tu la tiens.",
      ],
      choices: [{ label: "Filer avant que le guet revienne", to: "Po_fuite" }] },
    Po_c_haut_ko: { act: "P", title: "Deux gardes qui ont le temps", place: "ferronniers",
      text: [
        "Ils t'écoutent, ou ils écoutent le bruit, sans bouger d'un pied. « Minute », dit le plus gros, qui n'a pas fini. La Saint-Fer rend le guet philosophe.",
        "Là-haut, contre le ciel, une forme vient de passer le chéneau. Elle voit les casaques, se fige, et repart le long du faîtage chercher une autre descente, plus loin, plus haute, plus mauvaise. Tu ne peux rien faire d'ici que serrer les poings dans tes poches.",
      ],
      choices: [{ label: "Faire le tour pour la retrouver de l'autre côté", to: "Po_fuite" }] },

    Po_c_echange: { act: "P", title: "La porte des cuisines", place: "ferronniers",
      text: [
        "Ton affaire, c'est la sortie de la voix : la porte des cuisines, la ruelle aux Cendres, et que tout cela soit désert quand quelqu'un en sortira avec un manteau trop lourd.",
        "La porte bat toujours sur ses gonds. Dans la ruelle, le mulet dort. Mais sur le seuil des cuisines, un marmiton fume une pipe de terre, assis sur un seau retourné, avec l'air d'un homme qui a décidé de finir sa journée là.",
      ],
      choices: [
        { label: "« Le chef te cherche. Il a trouvé une souris dans la crème. »", test: { dom: "social", diff: 0, label: "Social", help: [{ if: { has: "p:o_toinette" }, v: 20 }] }, win: { fx: { flag: "monde:p:ruelle_tenue", ep: ["seance", 1200] }, to: "Po_c_echange_ok" }, lose: { fx: { ep: ["seance", 600] }, to: "Po_c_echange_ko" } },
        { label: "Jeter un caillou dans la lanterne de l'angle, et laisser faire le noir", test: { dom: "nature", diff: 0, label: "Nature", help: [{ if: { has: "monde:p:rondes" }, v: 15 }] }, win: { fx: { flag: "monde:p:ruelle_tenue", ep: ["seance", 1200] }, to: "Po_c_echange_ok" }, lose: { fx: { ep: ["seance", 600] }, to: "Po_c_echange_ko" } },
      ] },
    Po_c_echange_ok: { act: "P", title: "Un seuil libre", place: "ferronniers",
      text: [
        "Le seuil est libre, la ruelle noire. Tu t'adosses au mur, à côté de la porte, et tu écoutes la fête par le dedans : un grand bruit de chaises, une voix qui porte une santé, des vivats.",
        "Puis des pas vifs sur les dalles de la cuisine, et quelqu'un passe la porte près de toi, sans courir, un manteau serré sur la poitrine. Vous ne vous regardez pas. C'est la règle : dans la rue, on se connaît à la Clef Tordue.",
      ],
      choices: [{ label: "Partir de ton côté", to: "Po_fuite" }] },
    Po_c_echange_ko: { act: "P", title: "Un marmiton sédentaire", place: "ferronniers",
      text: [
        "Le marmiton tire sur sa pipe. Il a vu passer aujourd'hui quarante oies, douze cochons de lait et un nombre incalculable de menteurs ; il lui en reste une incrédulité paisible. Il ne bouge pas de son seau.",
        "Quand la porte s'ouvre enfin derrière lui, et que quelqu'un sort vite, un manteau serré sur la poitrine, il lève la tête, suit des yeux, fronce le sourcil. « Hé ! La sortie des invités, c'est devant ! » Sa voix porte loin dans la ruelle.",
      ],
      choices: [{ label: "Lui barrer la vue, puis filer", to: "Po_fuite" }] },

    Po_c_ruelle: { act: "P", title: "Trente pas de pavé", place: "ferronniers",
      text: [
        "Minuit. Tu es dans l'encoignure d'une porte murée, à dix pas de la charrette, depuis assez longtemps pour que le mulet t'ait oublié{e}.",
        "La barre de la cour se lève. Deux valets sortent, le grand et le petit, une caisse de noyer entre eux, tenue par des poignées de corde. Ils la posent dans le coffre, sur la paille. Le moraillon retombe. Le charretier arrive du Marteau d'Or en suivant le mur de la main.",
        { if: { has: "monde:p:charretier" }, text: "Gros-Martin met trois essais à trouver le marchepied. Il s'installe, cherche ses guides, et s'adresse au mulet en l'appelant Monseigneur." },
        "Entre la charrette et la porte du trésor, il y a trente pas. Les valets marchent derrière, les mains libres, en parlant du souper qu'on leur garde.",
      ],
      choices: [
        { label: "Te couler sous la bâche pendant que la charrette roule, et vider le coffre par l'arrière", test: { dom: "discretion", diff: 0, label: "Discrétion", help: [{ if: { has: "monde:p:rondes" }, v: 15 }, { if: { has: "monde:p:charretier" }, v: 15 }, { if: { has: "p:o_bache" }, v: 10 }] },
          win: { fx: { set: { "monde:p:reine": "propre" }, ep: ["seance", 1500] }, to: "Po_c_ruelle_ok" }, lose: { fx: { ep: ["seance", 700] }, to: "Po_c_ruelle_ko" } },
      ] },
    Po_c_ruelle_ok: { act: "P", title: "Sous la bâche", place: "ferronniers",
      text: [
        "Sous la bâche, il fait noir et cela sent le chanvre ciré. Le coffre a un moraillon gros comme le poing, que personne, depuis onze ans, n'a pris la peine de cadenasser pour trente pas. Tu le lèves. Tu sors la caisse de noyer, tu en tires à tâtons une masse d'acier froid enveloppée de serge, tu remets à sa place un pavé que tu avais choisi d'avance pour son poids, et tu refermes le tout.",
        "La charrette s'arrête devant le trésor. Tu es déjà dans l'encoignure d'en face, le dos au mur, la Serrure-Reine contre le ventre, quand les valets déchargent une caisse où dort un pavé d'Aiguemorne. Ils la portent avec le même respect. Il n'y a pas de raison que cela change avant demain.",
      ],
      choices: [{ label: "T'éloigner du pas d'un promeneur", to: "Po_fuite" }] },
    Po_c_ruelle_ko: { act: "P", title: "« Lubin, la bâche bouge ! »", place: "ferronniers",
      text: [
        "Tu es sous la bâche, la main sur le moraillon, quand la charrette prend un cahot. Ton coude heurte le coffre. « Lubin, dit une voix, la bâche bouge. »",
        "La suite tient en six secondes. Tu arraches la caisse, tu roules à bas du plateau, tu tombes sur un genou, et tu cours, neuf livres d'acier dans les bras, pendant que derrière toi le grand valet hurle au voleur avec une voix de chantre et que le mulet, réveillé, brait pour son compte. Aux fenêtres des Maîtres, des têtes paraissent. La cloche d'alarme de la guilde commence à sonner.",
      ],
      choices: [{ label: "Courir", to: "Po_fuite" }] },

    Po_c_foire: { act: "P", title: "La foire, vue de la ruelle", place: "ferronniers",
      text: [
        "Tu as ta ruelle, ta charrette et ton idée. Minuit sonne ; tu attends la caisse.",
        "Elle ne vient pas. À sa place, par la porte des cuisines restée ouverte, arrive de la grande salle un bruit que tu n'avais pas prévu : un timbre, des cris, une cavalcade de chaises. Puis la porte de la cour s'ouvre à la volée, les deux valets en sortent les mains vides, et derrière eux, dans la clarté des cuisines, passe en courant quelqu'un que tu connais.",
      ],
      choices: [
        { label: "Jeter la bâche sur les valets et faire le chemin libre", test: { dom: "combat", diff: -10, label: "Combat", help: [{ if: { has: "p:o_bache" }, v: 20 }] }, win: { fx: { flag: "monde:p:foire_oeil", ep: ["seance", 1200] }, to: "Po_c_foire_ok" }, lose: { fx: { pv: -3, ep: ["seance", 600] }, to: "Po_c_foire_ko" } },
      ] },
    Po_c_foire_ok: { act: "P", title: "Deux valets sous une toile", place: "ferronniers",
      text: [
        "La bâche s'abat sur eux comme un filet sur des perdreaux. Ils se débattent dessous, à deux, avec des jurons étouffés ; le mulet, qui en a vu d'autres, recule d'un pas pour ne pas être mêlé à l'affaire.",
        "« Par les caves ! » La personne qui court t'a entendu{e}, ou a deviné. Vous filez ensemble vers le porche du tonnelier, et tu constates en courant qu'elle tient contre elle quelque chose de lourd, enveloppé dans une nappe.",
      ],
      choices: [{ label: "Courir", to: "Po_fuite" }] },
    Po_c_foire_ko: { act: "P", title: "Le grand Amable", place: "ferronniers",
      text: [
        "Le grand valet a des bras de portefaix. Il te cueille au vol, bâche comprise, et pendant un moment très long vous dansez tous les deux sur le pavé gras une danse sans grâce, dont tu sors avec une oreille en feu et une manche en moins.",
        "Quand tu te dégages enfin, la ruelle est pleine de cris, la cloche d'alarme sonne, et la personne que tu voulais couvrir a disparu depuis longtemps, par ses propres moyens.",
      ],
      choices: [{ label: "Courir", to: "Po_fuite" }] },

    Po_fuite: { act: "P", title: "Le chemin des Bas-Fonds", place: "ferronniers",
      text: [
        "Il reste à rentrer. C'est la moitié du métier, disent les vieux, et celle qu'on oublie de préparer.",
        { if: { has: "monde:p:fuite" }, text: "Tu as préparé. La cour du tonnelier, la trappe, sept foudres, neuf foudres, la grille, vingt-deux marches : tu connais le chemin dans le noir." },
      ],
      urgent: 25,
      choices: [
        { label: "Par les caves du tonnelier et le quai", if: { has: "monde:p:fuite" }, why: "Personne n'a reconnu ce chemin.", fx: { ep: ["perso", 400] }, to: "Po_fuite_caves" },
        { label: "Par l'escalier des Cent-Verrous, au milieu des fêtards", test: { dom: "social", diff: 10, label: "Social" }, win: { fx: { ep: ["perso", 300] }, to: "Po_fuite_rue" }, lose: { fx: { pv: -2 }, to: "Po_fuite_rue_ko" } },
        { label: "Par les venelles, en coupant au plus noir", timeout: true, test: { dom: "discretion", diff: 10, label: "Discrétion" }, win: { fx: { ep: ["perso", 300] }, to: "Po_fuite_rue" }, lose: { fx: { pv: -2 }, to: "Po_fuite_rue_ko" } },
      ] },
    Po_fuite_caves: { act: "P", title: "Sept foudres, neuf foudres", place: "ferronniers", ambiance: "souterrain",
      text: [
        "La trappe, le plan incliné, le noir. Tu comptes les foudres de la main, sans ralentir. Derrière toi, au-dessus, la rue peut bien crier ce qu'elle veut : elle crie au-dessus de dix pieds de brique.",
        "La grille, l'escalier, le quai. La Morne passe, lente, indifférente aux serrures. En trois cents pas tu es aux Bas-Fonds, et tu n'as croisé qu'un chat.",
      ],
      choices: [{ label: "Pousser la porte charretière de la Clef Tordue", to: "Pc_retour", big: true }] },
    Po_fuite_rue: { act: "P", title: "Un passant parmi d'autres", place: "ferronniers",
      text: [
        "Tu marches. Courir, c'est signer. Tu te mêles à une bande d'apprentis qui redescendent en chantant, bras dessus, bras dessous, et tu chantes avec eux le refrain du serrurier cocu, que tout Aiguemorne connaît, jusqu'au bas des Cent-Verrous.",
      ],
      choices: [{ label: "Pousser la porte charretière de la Clef Tordue", to: "Pc_retour", big: true }] },
    Po_fuite_rue_ko: { act: "P", title: "Le coin de l'apothicaire", place: "ferronniers",
      text: [
        "Au coin de l'apothicaire, tu donnes en plein dans une casaque bleue qui arrivait en sens inverse. Vous tombez ensemble. Le garde est jeune, essoufflé, et aussi surpris que toi ; il attrape ce qu'il trouve, qui est ton col, et ton col lui reste dans la main.",
        "Tu dévales les Cent-Verrous quatre à quatre, en semant derrière toi, sans doute, un signalement : taille moyenne, sans col.",
      ],
      choices: [{ label: "Pousser la porte charretière de la Clef Tordue", to: "Pc_retour", big: true }] },
  },

  extras: {
    clues: {
      g_balcon: { rev: "G", text: "Douce Malatrait, Sans-Bruit, surveillait l'hôtel des Maîtres à la lorgnette depuis le balcon du cirier, le soir de la Saint-Fer." },
      g_billets: { rev: "G", text: "Douce Malatrait : son client ne paie pas en écus, mais « en billets à ordre, signés d'un nom à particule ». La serrure lui importe peu : il veut savoir qui vaut le mieux, d'elle ou des Rossignols." },
    },
  },
};
