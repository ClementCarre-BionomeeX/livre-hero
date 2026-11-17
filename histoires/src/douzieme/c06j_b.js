// Le Douzième Coup · chapter 6, the one who passes, second half (act II, Arvoise in 541, the hour before the blessing
// of the bridge and the day after). With what was gathered in the morning: the master builder closes his own bridge
// (`monde:pont_reporte`, `monde:baudri_vit`), or the stone carts are sent over first and it falls empty
// (`monde:pont_sauve`), or noon strikes on the procession (`monde:pont_tombe`, with or without the ferrymen's boats:
// `monde:pont_secours`). Evening with the ferrymen; at dawn, the hour-stone of the fourteenth league (B06).
var P = {};
var LINE = { has: "monde:line_route" };
var PREUVES = [{ has: "j:preuve_plongee" }, { has: "j:preuve_fil" }, { has: "j:preuve_remous" }, { has: "j:preuve_sondeur" }, { has: "j:preuve_rapport" }];
var DEUX = { count: PREUVES, min: 2 };
var CLOS = { any: [{ has: "monde:pont_reporte" }, { has: "monde:pont_sauve" }, { has: "monde:pont_tombe" }] };

Object.assign(P, {
  K06j_heure: { act: "II", title: "L'heure qui reste", backName: "le quai, avant midi", place: "arvoise", hub: true,
    text: [
      { first: true, text: "Tu refermes le Cahier. Le quai est noir de monde. Sur l'estrade de la rive, les échevins ont pris leurs places, en robe ; les enfants en blanc sont rangés par deux ; la musique de la ville accorde. Au clocher d'en face, l'aiguille a passé le quart." },
      { first: true, if: { count: PREUVES, max: 0 }, text: "Tu fais le compte de ce que tu tiens. Tu as une certitude, et rien à mettre dans la main de quelqu'un." },
      { first: true, if: { count: PREUVES, min: 1, max: 1 }, text: "Tu fais le compte de ce que tu tiens. Une chose. Une seule, contre huit ans de pierre et un rapport scellé." },
      { first: true, if: DEUX, text: "Tu fais le compte de ce que tu tiens. C'est plus qu'il n'en faut pour douter. Reste à savoir si c'est assez pour un homme qui a décidé de ne pas douter." },
      { again: true, text: "Le quai, la foule, l'estrade des échevins. L'aiguille du clocher monte vers midi." },
    ],
    choices: [
      { label: "Porter à maître Baudri ce que tu as", to: "K06j_baudri_preuves", if: { any: [DEUX, { has: "j:preuve_rapport" }] }, why: "Il t'a déjà écouté une fois. Il te faudrait de quoi le forcer à regarder.", hide: { seen: "K06j_baudri_preuves" } },
      { label: "Aller droit à l'évêque, dont le carrosse arrive", to: "K06j_eveque", hide: { seen: "K06j_eveque" } },
      { label: "Montrer le remous à la foule, avec des copeaux", to: "K06j_foule", if: { has: "j:preuve_remous" }, why: "Il te faudrait une chose que tout le monde puisse voir de la berge.", hide: { seen: "K06j_foule" } },
      { label: "Dire aux passeurs de mettre leurs bachots à l'eau, sous le pont, en aval", to: "K06j_bachots", hide: { seen: "K06j_bachots" } },
      { label: "Midi va sonner", to: "K06j_midi", big: true },
    ] },
  K06j_bachots: { act: "II", title: "Neuf bachots", place: "arvoise", fx: { flag: ["j:bachots_prets", "monde:pont_secours"] },
    text: [
      "Aubin Lebac t'écoute sans décroiser les bras. « Les bachots à l'eau. En aval de la troisième. Avec des gaffes et des cordes. » Il ne demande pas pourquoi. Il regarde la rivière, puis ses huit hommes.",
      "« On nous congédie à midi, dit-il lentement. D'ici là, on est encore les passeurs d'Arvoise, et un passeur a toujours le droit d'être sur l'eau. » Il se lève. Les autres se lèvent derrière lui, d'un seul mouvement. « Gervais ! Les neuf bachots. Deux hommes par bord. On se tient à l'ancre, cinquante pas sous le pont, sur une ligne, comme pour la joute. Si l'on nous demande ce qu'on fait là, on regarde la fête. »",
      "En un quart d'heure, il y a sur la Thiorne, en aval des cinq arches, une ligne de barques noires à bonnets rouges, immobiles dans le courant. La foule les montre du doigt et trouve cela joli.",
    ],
    choices: [{ back: "K06j_heure" }] },

  // ------------------------------------------------------------ Baudri
  K06j_baudri_preuves: { act: "II", title: "Regarder le bas", place: "arvoise",
    text: [
      "Maître Baudri a mis son habit de drap, sa chaîne de maître, son chapeau. Il sort de la loge, sa fille au bras. Tu te plantes devant lui.",
      { after: "j:preuve_rapport", text: "Pour toute parole, tu lui tends les deux feuilles. Il les prend, agacé, y jette les yeux pour s'en débarrasser, et ses yeux restent. Il connaît cette écriture : fine, droite, celle qu'il a au bas de son rapport, dans un cadre, au mur de la loge. *Sable fin et coulant jusqu'à trente pieds.* Il lit jusqu'au bout. Il lit la ligne en travers, *Vu. À refaire. M.*, et il la relit." },
      { after: "j:preuve_rapport", text: "Tu as vu des horloges s'arrêter. Cela fait le même effet : rien ne tombe, rien ne casse, et quelque chose qui allait ne va plus. Maître Baudri s'assoit sur une pierre de taille, lourdement, les feuilles sur les genoux. « Douze, dit-il. J'ai fondé à quinze. Sur du sable. » Il lève les yeux vers ses cinq arches blanches, et tu préférerais ne pas avoir vu sa figure." },
      { before: "j:preuve_rapport", after: "j:preuve_plongee", text: "Tu parles vite. Le garçon du bac a plongé : les pieux sont à nu, il y a passé le bras jusqu'à l'épaule. Gervais est là, derrière toi, trempé, grelottant, son bonnet rouge à la main ; il répète, il montre la longueur de son bras." },
      { before: "j:preuve_rapport", after: "j:preuve_fil", text: "Guillemine lâche le bras de son père. « Un pouce vers l'amont, dit-elle. La moitié en dix jours. Ce n'est pas mon crochet. {hero} l'a lu comme moi. » Elle a parlé haut, devant les compagnons, pour la première fois de sa vie." },
      { before: "j:preuve_rapport", after: "j:preuve_remous", text: "Tu lui mets un copeau dans la main. Tu lui dis de le jeter lui-même, du parapet, à trois toises du bec de la troisième, et de regarder où il va." },
      { before: "j:preuve_rapport", after: "j:preuve_sondeur", text: "Tu dis le nom de Thibert. Tu dis : trente pieds, deux feuilles, cent écus par an. Maître Baudri devient gris sous son hâle : cet homme boit depuis huit ans à cent pas de sa loge, et il ne s'était jamais demandé avec quoi." },
      { before: "j:preuve_rapport", text: "Il ne répond pas. Il regarde sa fille, le garçon mouillé, la rivière. Un homme qui a décidé de ne pas douter peut tenir contre une raison. Il ne tient pas longtemps contre deux qui ne se connaissent pas et disent la même chose. « Le bachot, dit-il enfin, d'une voix qu'on ne lui connaît pas. Mon plomb. Je descends voir. »" },
    ],
    choices: [
      { label: "Attendre qu'il parle", hide: { not: { has: "j:preuve_rapport" } }, to: "K06j_fermeture" },
      { label: "Descendre avec lui sous la troisième arche", hide: { has: "j:preuve_rapport" }, to: "K06j_baudri_descend" },
    ] },
  K06j_baudri_descend: { act: "II", title: "Huit ans, vus d'en dessous", place: "arvoise",
    text: [
      "Il descend en habit de fête dans une barque de passeur. Il n'a pas regardé son pont d'en dessous depuis le décintrement : on ne regarde pas sous sa maison quand elle est finie.",
      "Il pend son plomb au crochet, lui-même. Il attend que le poids se pose. Il regarde le trait de mars, et la pointe, et l'espace entre les deux. Puis il fait une chose que tu n'attendais pas : il ôte son habit, sa chaîne, il se couche à plat ventre dans le bachot et il plonge le bras dans l'eau, le long du bec de la pile, jusqu'à l'épaule, jusqu'à la joue.",
      "Il reste ainsi longtemps. Quand il se relève, sa manche de chemise ruisselle. Il a dans le poing une poignée de quelque chose, qu'il ouvre : du sable, fin, gris, qui coule entre ses doigts et retourne à la rivière.",
      "« Elle vit, dit-il. Je l'ai sentie sous ma main. Elle bouge comme une dent. »",
      "Au-dessus de vous, sur le tablier, la musique de la ville attaque une marche.",
    ],
    choices: [{ label: "Remonter", to: "K06j_fermeture" }] },
  K06j_fermeture: { act: "II", title: "« Fermez le pont »", place: "arvoise", fx: { flag: ["monde:pont_reporte", "monde:baudri_vit"], ep: ["histoire", 1200] },
    text: [
      "Maître Baudri monte sur une pierre de taille, à l'entrée de son pont. Il est tête nue. Il lève les deux bras, et dix mille personnes, qui attendaient un discours, se taisent pour l'entendre.",
      "« Le pont est fermé. » Il a une voix de chantier, qui porte jusqu'à l'autre rive. « Je l'ai bâti, je le ferme. La troisième pile est fondée sur du sable. Je ne le savais pas ce matin. Je le sais. Personne n'y posera le pied avant que je l'aie reprise par en dessous, et cela prendra un an. » Il se tourne vers ses compagnons. « La chaîne du chantier. En travers. Et quatre hommes devant. »",
      "Il y a d'abord un silence, puis le bruit que fait une foule à qui l'on retire une fête : une espèce de plainte, longue, où il entre de la colère. Sur l'estrade, les échevins sont debout. L'un d'eux, un gros homme à bajoues, robe fourrée, chaîne d'or, est descendu de trois marches. « Maître Baudri perd la tête ! crie-t-il. Huit ans de dépenses ! Le rapport des sondeurs... »",
      { after: "j:preuve_rapport", text: "« Le rapport des sondeurs, le voici, monsieur Malestroit. » Baudri tient les deux feuilles au-dessus de sa tête. « Le vrai. Avec votre main en travers. » L'échevin s'arrête au milieu d'une marche. On voit, de la berge, ses bajoues changer de couleur." },
      { before: "j:preuve_rapport", text: "« Le rapport des sondeurs dit le roc à douze pieds, monsieur Malestroit. Je viens d'y mettre le bras. J'aimerais beaucoup connaître celui qui l'a écrit, et celui qui le lui a fait écrire. » L'échevin s'arrête au milieu d'une marche." },
      "Alors le carrosse violet, qui attendait à l'entrée du quai, ouvre sa portière. Monseigneur Fulbert en descend, tout rond, et traverse la foule à pied, sans se presser, en bénissant à droite et à gauche. Il regarde maître Baudri sur sa pierre, tête nue, la manche trempée. Il regarde les cinq arches. « Un homme qui ferme son propre pont le jour de sa gloire, dit-il assez haut, ou bien il est fou, ou bien il est le seul de nous tous à faire son métier. Je bénirai de la rive. Elle est à tout le monde. »",
    ],
    choices: [{ label: "Midi sonne", to: "K06j_te_deum" }] },
  K06j_te_deum: { act: "II", title: "Midi sur la rive", place: "arvoise", takes: "noon",
    text: [
      "Midi sonne au clocher d'en face. Douze coups, que l'eau porte un à un. Tu les comptes tous, les dents serrées, les yeux sur la troisième pile.",
      "Il ne se passe rien. Les cinq arches blanches sont là, vides, sous leurs guirlandes, dans le soleil. Un pigeon se pose sur l'estrade violette, au milieu, où personne ne chante. La Thiorne passe dessous, pleine, sans rides, et ne dit pas ce qu'elle aurait fait.",
      "Sur la berge, les enfants en blanc chantent le *Te Deum*, face à l'eau, par deux, les plus petits devant. La petite au grand cierge chante la bouche ouverte, sans savoir les paroles. Monseigneur bénit le fleuve, le pont, la foule, les passeurs. Les gens sont déçus. Ils sont déçus, vivants, et ils rentreront ce soir chez eux en disant que ce n'était pas la peine de venir de si loin.",
      { with: "perrine", text: "Perrine est à côté de toi. Elle regarde le pont vide. Elle se tait pendant toute la bénédiction ; puis elle se mouche, bruyamment, dans un coin de son drap rouge. « Il avait raison, dit-elle. Mon père. Huit ans, et il a fallu que ce soit quelqu'un de la route qui vienne le leur dire. » Elle renifle. « Je vais déballer. Ils ont beau être déçus, ils ont des sous. »" },
      "Personne ne saura jamais combien. Toi seul{e}, sur ce quai, portes un chiffre.",
    ],
    choices: [{ label: "L'après-midi", to: "K06j_apres" }] },

  // ------------------------------------------------------------ the bishop, the crowd
  K06j_eveque: { act: "II", title: "Le secrétaire de Monseigneur", place: "arvoise",
    text: [
      "Le carrosse violet s'est arrêté à l'entrée du quai. On ne parle pas à un évêque : on parle à son secrétaire, un abbé long, jaune, qui se tient à la portière comme un loquet.",
      "« Monseigneur se recueille. Monseigneur a un pont à bénir. Si c'est pour une aumône, voyez l'aumônier ; si c'est pour une image, je n'en signe pas. »",
      "Par-dessus son épaule, dans l'ombre du carrosse, deux petits yeux te regardent, qui ne se recueillent pas du tout.",
    ],
    choices: [
      { label: "Parler pour les yeux, par-dessus l'abbé", test: { dom: "social", diff: 5, label: "Te faire entendre", help: [{ if: { voie: "diseur" }, v: 15 }, { if: { voie: "heurier" }, v: 15 }, { if: { has: "j:preuve_rapport" }, v: 25 }, { if: DEUX, v: 15 }, { if: { has: "j:connait_eveque" }, v: 5 }] },
        win: { fx: { flag: "j:eveque_ecoute", ep: ["seance", 700] }, to: "K06j_chariots" }, lose: { to: "K06j_eveque_refus" } },
    ] },
  K06j_eveque_refus: { act: "II", title: "Une portière", place: "arvoise",
    text: [
      "Tu parles trop vite. Tu dis *sable*, *passeurs*, *midi*, dans le désordre. L'abbé jaune te coupe d'un geste, avec la lassitude d'un homme qui écarte dix illuminés par jour de fête.",
      "« Les passeurs. Bien sûr. Monseigneur a reçu leur supplique, et celle des charpentiers de bateaux. » La portière se ferme. Derrière la vitre, les petits yeux te suivent encore un instant, intrigués, puis une main gantée tire le rideau.",
    ],
    choices: [{ back: "K06j_heure" }] },
  K06j_foule: { act: "II", title: "Crier, c'est son métier", place: "arvoise",
    text: [
      "Perrine grimpe sur une borne d'amarrage, sa hotte au dos, un almanach dans chaque main. Elle a la voix qu'il faut pour vendre du papier à des gens qui ne savent pas lire.",
      "« Bonnes gens d'Arvoise et d'ailleurs ! Avant la bénédiction, un prodige ! Un prodige gratis, offert par la maison, visible de la berge ! Regardez l'eau sous la grande arche ! Regardez ce que fait la Thiorne quand on lui met un pont sur le dos ! »",
      "Tu jettes le premier copeau. Puis un autre. Les lavandières, qui ont compris, jettent les leurs, et un pain de savon. Tout cela file, vire, fait ses trois tours contre le bec de la troisième pile, et s'enfonce.",
    ],
    choices: [
      { label: "Jeter, et laisser Perrine dire ce que cela veut dire", test: { dom: "social", diff: 0, label: "Convaincre la berge", help: [{ if: { voie: "diseur" }, v: 10 }, { if: { conf: "perrine", min: 10 }, v: 15 }, { if: { has: "j:preuve_plongee" }, v: 15 }, { if: { has: "j:perrine_dit_vrai" }, v: 10 }] },
        win: { fx: { flag: "j:foule_gagnee", ep: ["seance", 700] }, to: "K06j_chariots" }, lose: { to: "K06j_foule_rate" } },
    ] },
  K06j_foule_rate: { act: "II", title: "La fille à Josselin", place: "arvoise",
    text: [
      { with: "perrine", text: "Les gens regardent les copeaux. Ils trouvent cela curieux. Puis quelqu'un, dans la foule, reconnaît Perrine : « C'est la fille à Josselin ! La fille du passeur ! » Et tout s'explique, aux yeux de tout le monde : les passeurs perdent leur pain à midi, les passeurs font des tours avec des copeaux." },
      "On rit. On vous jette une croûte. Deux sergents de la ville arrivent, bonhommes, et font descendre Perrine de sa borne par le bras. « Pas de scandale un jour de fête, ma belle. Va vendre tes images. »",
      "Elle se dégage. Elle est blanche. « Ils l'ont dit à mon père, les mêmes mots », dit-elle entre ses dents. Sur l'estrade, la musique attaque une marche.",
    ],
    choices: [{ back: "K06j_heure" }] },

  // ------------------------------------------------------------ the stone carts
  K06j_chariots: { act: "II", title: "Les chariots d'abord", place: "arvoise",
    text: [
      { after: "j:eveque_ecoute", text: "« Laissez, l'abbé. » La voix sort du carrosse, grasse, tranquille. Monseigneur Fulbert se penche à la portière et t'écoute jusqu'au bout, en te regardant la bouche, comme font les gens qui ont beaucoup confessé. Il ne dit ni oui ni non. Il descend." },
      { after: "j:eveque_ecoute", text: "Il va à maître Baudri, à pied, à travers la foule qui s'ouvre. « Maître, on me dit qu'à Méridane, avant de livrer un pont, on y fait passer les chariots de la carrière, chargés, pour l'honneur de celui qui l'a bâti. Je suis vieux, je suis gros, et je porte sur moi mille écus de dorures. J'aimerais mieux que vos pierres passent avant mon ventre. Faites-moi ce plaisir. »" },
      { after: "j:foule_gagnee", text: "Ce n'est pas la fille à Josselin que la berge écoute : ce sont les lavandières, qui ont perdu six pains de savon et le disent, et le garçon au bonnet rouge, qui montre la longueur de son bras. Un mot part du bord de l'eau et remonte le quai, de bouche en bouche, comme le feu dans un chaume : « Les chariots ! Les chariots d'abord ! »" },
      { after: "j:foule_gagnee", text: "Dix mille personnes le scandent. Les échevins se consultent. Monseigneur Fulbert, à sa portière, écoute la foule avec intérêt, et fait dire à maître Baudri qu'un évêque de son poids ne voit aucun inconvénient à passer après des pierres." },
      "Maître Baudri devient rouge jusqu'aux oreilles. Douter de son pont devant le diocèse ! « Six chariots ? dit-il. J'en mettrai douze. À pleine charge, roue dans roue. Et je marcherai devant. »",
      "On attelle. Douze fardiers de la carrière de Saint-Leu, chargés de moellons, huit bœufs à chaque. Les bouviers n'ont pas l'air à la fête. Guillemine a pris le bras de son père, des deux mains ; il se dégage, doucement, et va se placer à la tête du premier attelage, son chapeau à la main, face à son pont.",
    ],
    choices: [
      { label: "Courir te mettre à côté de lui, à l'entrée du tablier", fx: { flag: "j:pres_baudri" }, to: "K06j_chariots_passent" },
      { label: "Regarder de la berge, les yeux sur la troisième pile", to: "K06j_chariots_passent" },
    ] },
  K06j_chariots_passent: { act: "II", title: "Douze fardiers", place: "arvoise", takes: "noon",
    text: [
      "Le premier fardier s'engage. Les jantes mordent la pierre neuve avec un bruit de meule. Il passe la première arche, la seconde. Baudri marche devant, à reculons presque, tourné vers ses bœufs, en leur parlant. Le second fardier suit, le troisième. Midi sonne au clocher d'en face.",
      "Au sixième coup, le premier attelage est sur la troisième pile, sous l'estrade violette. Au septième, tu vois une guirlande de buis, tendue d'un parapet à l'autre, se détendre. Elle pend. Les deux parapets se sont rapprochés.",
      "Le bruit vient après. Ce n'est pas un fracas : c'est un craquement sourd, profond, qui semble sortir de l'eau, et que tous les maçons de la berge reconnaissent avant de l'avoir compris. La troisième pile tourne. Elle tourne sur son pied, lentement, vers l'amont, avec ses oriflammes, comme un homme qui s'endort debout. La grande arche s'ouvre à la clef d'une fente noire.",
      "« Coupez les traits ! » hurle un bouvier. Les hommes sautent des fardiers. Maître Baudri est au milieu de son pont, immobile, et regarde la fente courir entre ses pieds.",
    ],
    choices: [
      { label: "Le saisir à bras-le-corps, et le tirer en arrière", hide: { not: { has: "j:pres_baudri" } }, test: { dom: "combat", diff: 0, label: "L'arracher de là", help: [{ if: { voie: "tetu" }, v: 20 }, { if: { voie: "coureur" }, v: 10 }] },
        win: { fx: { flag: ["monde:pont_sauve", "monde:baudri_vit"], ep: ["histoire", 1200] }, to: "K06j_chariots_fin" }, lose: { fx: { flag: ["monde:pont_sauve", "monde:baudri_vit", "j:baudri_blesse"], pv: -3, ep: ["histoire", 1000] }, to: "K06j_chariots_fin" } },
      { label: "Crier son nom, de toutes tes forces", hide: { any: [{ has: "j:pres_baudri" }, LINE] }, fx: { flag: "monde:pont_sauve", ep: ["histoire", 1000] }, to: "K06j_chariots_fin" },
      { label: "Crier son nom, avec Line, qui a une voix à réveiller un clocher", hide: { any: [{ has: "j:pres_baudri" }, { not: LINE }] }, fx: { flag: ["monde:pont_sauve", "monde:baudri_vit"], ep: ["histoire", 1000] }, to: "K06j_chariots_fin" },
    ] },
  K06j_chariots_fin: { act: "II", title: "Ce qui tombe à midi", place: "arvoise",
    text: [
      { if: { all: [{ has: "j:pres_baudri" }, { not: { has: "j:baudri_blesse" } }] }, text: "Tu cours. Le tablier tremble sous tes pieds comme une bête. Tu prends cet homme lourd par la taille, par l'habit, par ce qui vient, et tu tires. Il ne résiste pas ; il ne t'aide pas non plus. Il regarde la fente. Vous reculez ensemble sur la seconde arche, sur la première, et Guillemine vous reçoit tous les deux sur la culée, à pleins bras." },
      { if: { has: "j:baudri_blesse" }, text: "Tu cours. Tu le prends par la taille. Il pèse le poids de ses huit ans ; il ne veut pas venir. Un moellon du parapet te frappe à l'épaule, un autre l'atteint à la jambe, et c'est Guillemine, arrivée derrière toi, qui vous traîne tous les deux, l'un par le col, l'autre par la ceinture, jusqu'à la culée." },
      { if: { all: [{ not: { has: "j:pres_baudri" } }, { has: LINE.has }] }, text: "Tu cries. Tout le monde crie. C'est une voix d'enfant qui porte, aiguë, par-dessus dix mille autres : « COUREZ ! » Line est debout sur une borne, les mains en porte-voix. Maître Baudri lève la tête, comme réveillé. Guillemine est déjà sur le tablier ; elle l'attrape par le poignet, et ils courent." },
      { if: { all: [{ not: { has: "j:pres_baudri" } }, { not: { has: LINE.has } }] }, text: "Tu cries. Tout le monde crie. Maître Baudri n'entend rien : il regarde la fente. C'est Guillemine qui va le chercher. Elle court sur le pont qui s'ouvre, elle attrape son père par le poignet, et elle tire. Il vient. Elle l'a ramené jusqu'à la seconde arche ; elle le tenait. Puis il s'est retourné, pour voir, et il a retiré sa main." },
      "La grande arche tombe d'une pièce, puis la quatrième, que rien ne contrebute. La troisième pile se couche dans la Thiorne avec son estrade violette. Six fardiers descendent avec elle ; les bœufs, délivrés à temps de quatre d'entre eux, nagent vers la saulaie. Une gerbe d'eau grise monte plus haut que le clocher, retombe sur la berge, et dix mille personnes sont trempées, muettes, vivantes.",
      "Il reste deux arches du côté d'Arvoise, une de l'autre, et entre elles un trou de soixante toises où le fleuve passe, brun, écumant, en roulant des pierres blanches. Sur la rive, les enfants en blanc tiennent leurs cierges éteints. La petite du premier rang regarde l'endroit où elle devait chanter. Elle a encore la bouche ouverte.",
      { with: "perrine", text: "Perrine t'a pris le bras, et le serre à te faire mal. « Dessus, dit-elle. Ils auraient été dessus. Tous. » Elle le répète plusieurs fois." },
    ],
    choices: [{ label: "L'après-midi", to: "K06j_apres" }] },

  // ------------------------------------------------------------ noon on the procession
  K06j_midi: { act: "II", title: "Le Te Deum", place: "arvoise", takes: "noon", urgent: 60, fx: { flag: "monde:pont_tombe" },
    text: [
      "La procession s'ébranle. Monseigneur Fulbert marche en tête, sous un dais, précédé de la croix. Derrière lui les échevins, maître Baudri et sa fille, la musique de la ville, les quarante enfants en blanc, deux par deux, les plus petits devant ; puis le saint Gnomon doré de Vauxelles sur son brancard, les bannières, les confréries. La foule suit, pressée contre la chaîne que les sergents retiennent encore.",
      "Ils passent la première arche, la seconde. Ils s'arrêtent sur la troisième pile, devant l'estrade. Midi sonne au clocher d'en face, et les enfants entonnent.",
      "Tu vois une guirlande de buis se détendre, d'un parapet à l'autre. Puis le bruit : un craquement sourd, profond, qui sort de l'eau. La troisième pile tourne sur son pied, lentement, avec ses oriflammes. Le chant continue une mesure encore, parce que des enfants ne s'arrêtent pas de chanter sans qu'on le leur dise.",
      "La grande arche s'ouvre.",
    ],
    choices: [
      { label: "Courir sur le tablier, vers les enfants", fx: { flag: "j:vers_enfants" }, to: "K06j_midi_secours" },
      { label: "Courir sur le tablier, vers Guillemine et son père", fx: { flag: "j:vers_baudri" }, to: "K06j_midi_secours" },
      { label: "Sauter dans le premier bachot, et gagner l'aval", fx: { flag: "j:vers_eau" }, to: "K06j_midi_secours", timeout: true },
    ] },
  K06j_midi_secours: { act: "II", title: "Ce qu'on peut", place: "arvoise",
    text: [
      "Il n'y a plus de temps ; il y a des morceaux. Un parapet qui s'en va. Le dais de l'évêque, à plat sur l'eau, comme un nénuphar violet. Le saint doré de Vauxelles, debout dans le courant jusqu'à la poitrine, son style à la main, qui descend la Thiorne en regardant au loin d'un air mécontent. Des taches blanches partout.",
      { after: "j:bachots_prets", text: "Et les neuf bachots. Ils sont sur leur ligne, cinquante pas sous le pont, à l'ancre, deux hommes par bord, gaffes parées : les passeurs d'Arvoise, qu'on congédiait à midi. Ils n'ont pas un cri. Aubin Lebac lève le bras, et les neuf barques entrent dans l'écume, bonnets rouges en avant, à la rencontre de ce qui descend." },
      { before: "j:bachots_prets", text: "À la cale, les passeurs ont bondi. Il leur faut le temps de détacher, de pousser, de prendre le courant : celui que met un enfant à couler." },
    ],
    choices: [
      { label: "Les enfants, au bord de la cassure", hide: { not: { has: "j:vers_enfants" } }, test: { dom: "combat", diff: 5, label: "Sauver", help: [{ if: { voie: "tetu" }, v: 10 }, { if: { voie: "coureur" }, v: 15 }, { if: { voie: "heurier" }, v: 10 }, { if: { has: "j:bachots_prets" }, v: 15 }] },
        win: { fx: { flag: ["j:secours_reussi", "monde:pont_secours"], pv: -2, ep: ["histoire", 900] }, to: "K06j_midi_fin" }, lose: { fx: { pv: -4, ep: ["histoire", 500] }, to: "K06j_midi_fin" } },
      { label: "Le maître d'œuvre, debout au milieu de son pont", hide: { not: { has: "j:vers_baudri" } }, test: { dom: "combat", diff: 5, label: "L'arracher de là", help: [{ if: { voie: "tetu" }, v: 20 }, { if: { voie: "coureur" }, v: 10 }] },
        win: { fx: { flag: ["j:secours_reussi", "monde:baudri_vit"], pv: -2, ep: ["histoire", 900] }, to: "K06j_midi_fin" }, lose: { fx: { pv: -4, ep: ["histoire", 500] }, to: "K06j_midi_fin" } },
      { label: "L'eau, et ce qu'elle emporte", hide: { not: { has: "j:vers_eau" } }, test: { dom: "combat", diff: 5, label: "Repêcher", help: [{ if: { voie: "tetu" }, v: 10 }, { if: { voie: "coureur" }, v: 10 }, { if: { voie: "heurier" }, v: 10 }, { if: { has: "j:bachots_prets" }, v: 25 }] },
        win: { fx: { flag: ["j:secours_reussi", "monde:pont_secours"], pv: -2, ep: ["histoire", 900] }, to: "K06j_midi_fin" }, lose: { fx: { pv: -4, ep: ["histoire", 500] }, to: "K06j_midi_fin" } },
    ] },
  K06j_midi_fin: { act: "II", title: "Le compte", place: "arvoise", fx: { flag: "j:compte_fait" },
    text: [
      { after: "j:vers_enfants", outcome: "win", text: "Tu es sur la seconde arche quand la troisième s'en va. Les petits du premier rang sont au bord de la cassure, figés, leurs cierges à la main. Tu en prends deux sous les bras, tu pousses les autres devant toi, à coups de genou, en hurlant ; ils se mettent à courir, enfin, comme une volée de pigeons. La petite au grand cierge est la dernière. Tu la jettes à un maçon par-dessus trois toises de vide qui s'élargit, et tu sautes après elle." },
      { after: "j:vers_enfants", outcome: "lose", text: "Tu es sur la seconde arche quand la troisième s'en va. Tu en attrapes un, par sa robe blanche, au bord de la cassure. Un seul. Les autres étaient plus loin, et il y a maintenant de l'air entre eux et toi. Tu recules sur un tablier qui penche, l'enfant contre ta poitrine. Il a les yeux fermés. Il chante encore, tout bas." },
      { after: "j:vers_baudri", outcome: "win", text: "Maître Baudri est debout au bord de la fente, et regarde descendre huit ans. Guillemine le tire par le bras, des deux mains ; il ne vient pas. Tu le prends par la taille. À deux, vous l'arrachez de là, à reculons, pendant que la clef de la grande arche tombe à l'endroit où il était. Il se laisse traîner jusqu'à la culée, muet, les yeux ouverts." },
      { after: "j:vers_baudri", outcome: "lose", text: "Maître Baudri est debout au bord de la fente. Guillemine le tire par le bras. Tu arrives, tu prends l'autre. Il vous regarde tous les deux, sa fille et toi, avec une grande douceur, et il se dégage : un homme de ce poids, quand il a décidé. « Va », dit-il à Guillemine. Tu emportes la fille. Elle se débat. Derrière vous, la grande arche descend avec celui qui l'a tracée." },
      { after: "j:vers_eau", outcome: "win", text: "Le bachot file dans l'écume. Gervais est à la gaffe, toi aux mains. Tu saisis ce qui passe : une manche, des cheveux, une robe blanche qui flotte comme une méduse. Tu hisses, tu retournes, tu hisses encore. Le fond de la barque se couvre d'enfants qui toussent. Gervais plonge, deux fois, trois fois, son bonnet rouge reparaît toujours, et chaque fois il tient quelqu'un." },
      { after: "j:vers_eau", outcome: "lose", text: "Le bachot file dans l'écume, prend une vague de travers, embarque. Tu saisis une manche ; elle te reste dans la main. Tu en saisis une autre et tu tiens : une femme, lourde, qu'il faut deux hommes pour hisser. Pendant ce temps, des taches blanches passent, à dix pieds, à vingt, et s'enfoncent une à une, comme les copeaux." },
      { after: "monde:pont_secours", text: "On compte, le soir, sur le quai, à la lanterne. Les passeurs ont tiré de l'eau cent quatorze personnes, dont l'évêque, qui flottait très bien, et trente-trois enfants. Il en manque onze. Onze, que l'on retrouvera à la saulaie, à la pointe de l'île, où la Thiorne rend ce qu'elle a pris." },
      { before: "monde:pont_secours", text: "On compte, le soir, sur le quai, à la lanterne. On compte longtemps, parce que les paroisses se sont mêlées et que les mères ne veulent pas donner les noms. Il en manque quarante. La Chronique avait dit quarante. Tu l'avais lu dans une écriture en bâtons, et tu étais là, et il en manque quarante." },
      { if: { all: [{ has: "j:vers_baudri" }, { has: "j:secours_reussi" }] }, text: "Maître Baudri est assis sur une pierre de taille, à l'entrée de ce qui reste. Il vit. Il a demandé le compte ; on le lui a dit. Il n'a plus rien demandé." },
    ],
    choices: [{ label: "L'après-midi", to: "K06j_apres" }] },
});

// ======================================================================== the afternoon and the evening
Object.assign(P, {
  K06j_apres: { act: "II", title: "Arvoise, l'après-midi", backName: "le quai, l'après-midi", place: "arvoise", hub: true, takes: 3,
    text: [
      { first: true, after: "monde:pont_reporte", text: "L'après-midi, la foule s'en retourne par où elle est venue, grondeuse, les enfants endormis sur les épaules. Le pont est là, blanc, entier, avec une chaîne en travers et quatre maçons devant. On le regarde autrement. On lui trouve, à présent, un air de pencher, que personne n'avait vu ce matin et que tout le monde a toujours su." },
      { first: true, after: "monde:pont_sauve", text: "L'après-midi, personne ne s'en va. Dix mille personnes restent sur la berge à regarder le trou. On se montre la place de l'estrade. On se compte, par familles, plusieurs fois, sans raison, pour le plaisir de trouver le compte juste. Les cabarets ne vendent rien : on n'a pas soif, on a les jambes molles." },
      { first: true, after: "monde:pont_tombe", text: "L'après-midi n'a pas d'heures. Il y a la berge, les barques, les draps qu'on étend sur ce qu'elles rapportent. Les cloches des deux rives sonnent le glas, sans s'accorder. On a rangé les cierges éteints sur les marches de l'estrade, par deux." },
      { again: true, text: "Le quai, la rivière, le soir qui vient par l'aval." },
    ],
    fx: { flag: "j:apres_vu" },
    choices: [
      { label: "Maître Baudri", to: "K06j_baudri_soir", hide: { any: [{ seen: "K06j_baudri_soir" }, { not: { has: "monde:baudri_vit" } }] } },
      { label: "Guillemine", to: "K06j_guillemine_soir", hide: { seen: "K06j_guillemine_soir" } },
      { label: "L'estrade des échevins", to: "K06j_malestroit_fin", hide: { seen: "K06j_malestroit_fin" } },
      { label: "Le cabaret du Bac, la table sous l'escalier", to: "K06j_thibert_fin", hide: { any: [{ seen: "K06j_thibert_fin" }, { not: { seen: "K06j_thibert" } }] } },
      { label: "Le carrosse violet, d'où un abbé te fait signe", to: "K06j_eveque_soir", hide: { any: [{ seen: "K06j_eveque_soir" }, { has: "monde:pont_tombe" }] } },
      { label: "La cale du bac", to: "K06j_bac_soir", hide: { seen: "K06j_bac_soir" } },
      { label: "Perrine", to: "K06j_perrine_soir", hide: { seen: "K06j_perrine_soir" } },
      { label: "Line, assise au bord de l'eau", to: "K06j_line_soir", hide: { any: [{ not: LINE }, { seen: "K06j_line_soir" }] } },
      { label: "Le soir tombe : la soupe des passeurs", to: "K06j_veillee", big: true },
    ] },
  K06j_baudri_soir: { act: "II", title: "Le maître d'œuvre", place: "arvoise", fx: { item: "lettre_baudri" },
    text: [
      { after: "monde:pont_reporte", text: "Maître Baudri est dans sa loge, en bras de chemise, devant l'épure. Il a déjà pris un fusain. Il dessine sur le plâtre, par-dessus huit ans de traits, une enceinte de pieux autour de la troisième pile : un batardeau. « On l'assèche. On descend à trente-quatre pieds. On la reprend par en dessous, assise par assise, sans toucher à l'arche. Un an. Deux, si la rivière s'en mêle. » Il parle pour lui. Il a retrouvé la seule chose qui le tienne debout : un problème." },
      { after: "monde:pont_sauve", text: "Maître Baudri est assis sur la culée, les jambes pendantes au-dessus du vide, à la place où commençait sa grande arche. Il regarde l'eau rouler ses pierres. Il n'a pas l'air d'un homme détruit ; il a l'air d'un homme qui recompte. « Trente-quatre pieds, dit-il. Il fallait descendre à trente-quatre. On me l'a caché, et je n'ai pas cherché à le savoir : cela fait deux coupables, et un seul qui sache bâtir. Je recommencerai. Dix toises plus haut, sur le roc. Plus épais. Moins beau. »" },
      { after: "monde:pont_tombe", text: "Maître Baudri est assis sur une pierre de taille, à l'entrée de ce qui reste. Il n'a pas bougé depuis midi. On lui a apporté de l'eau ; elle est à côté de lui. « Tu me l'avais dit, fait-il sans lever la tête. Ce matin. Je t'ai mis la main sur l'épaule. » Il regarde cette main. « J'aurais préféré rester dessous. Tu ne m'as pas demandé mon avis. Tu as bien fait, je suppose. Il faut quelqu'un pour répondre. »" },
      "Il te voit, enfin, tout à fait. « Tu vas à Méridane. Ma fille me l'a dit. » Il tire de son habit un carnet, en arrache une page, écrit dessus trois lignes d'une grosse écriture carrée. « J'ai refait l'escalier de la Tour des Heures, en 530, pour le Grand Maître Coudrier. C'est un vieil homme rude, qui ne reçoit personne, et le seul de sa Guilde qui m'ait jamais payé le prix convenu. Porte-lui ceci. Il t'ouvrira, ne fût-ce que pour me dire que mon escalier grince. »",
    ],
    choices: [{ back: "K06j_apres" }] },
  K06j_guillemine_soir: { act: "II", title: "Un fil à plomb", place: "arvoise", fx: { item: "plomb" },
    text: [
      { after: "monde:pont_reporte", text: "Guillemine est sur le tablier, seule, de l'autre côté de la chaîne. Elle a pendu ses plombs aux cinq piles, un par un, et elle note. « Il m'a dit *l'appareilleuse*, tout à l'heure. Devant les compagnons. Tout haut. *L'appareilleuse fera les relevés.* » Elle a un petit rire. « Il a fallu qu'il manque de tuer dix mille personnes pour que j'aie un titre. »" },
      { if: { all: [{ has: "monde:pont_sauve" }, { has: "monde:baudri_vit" }] }, text: "Guillemine mesure ce qui reste. Elle est au bord de la cassure, à plat ventre, un plomb à la main, et elle note. « La deuxième pile n'a pas bougé. La quatrième non plus. On pourra s'y appuyer. » Elle se relève, s'essuie les mains à son tablier. « Il rebâtira. Il n'a jamais su faire autre chose. Seulement, cette fois, c'est moi qui lirai les sondages. Toutes les feuilles. Devant témoins. »" },
      { if: { all: [{ has: "monde:pont_tombe" }, { has: "monde:baudri_vit" }] }, text: "Guillemine est debout derrière son père, à trois pas. Elle ne le touche pas. Elle a les mains écorchées. « Il ne parlera plus avant longtemps, dit-elle. Ou il parlera trop. Il faudra que quelqu'un tienne les comptes, réponde au bailli, enterre les gens. » Elle redresse les épaules. « Je sais tenir un aplomb. Je vais apprendre le reste. »" },
      { if: { all: [{ not: { has: "monde:pont_reporte" } }, { not: { has: "monde:baudri_vit" } }] }, text: "Guillemine est assise à l'entrée de la loge, sur le seuil, les mains à plat sur ses genoux. On lui a rapporté la chaîne de maître, que le courant avait laissée à la saulaie. Elle la tient. « Il a retiré sa main, dit-elle. Je le tenais. Il a retiré sa main. » Elle te regarde, les yeux secs. « Je le lui avais montré avant-hier. Un pouce. Il a dit que mon crochet avait joué. »" },
      "Elle décroche de sa ceinture un plomb de laiton, tourné en poire, avec six brasses de soie. « Prends. C'est le mien, celui de mars. Il ne ment pas : il ne sait pas faire. Tu en auras l'usage, là où tu vas. Il paraît qu'à Méridane tout penche un peu, et que personne ne regarde le bas. »",
    ],
    choices: [{ back: "K06j_apres" }] },
  K06j_malestroit_fin: { act: "II", title: "L'échevin Malestroit", place: "arvoise",
    text: [
      { after: "j:preuve_rapport", if: { not: { has: "monde:pont_tombe" } }, text: "Deux sergents du bailli sont montés sur l'estrade, entre le discours et le vin d'honneur. Ils en redescendent avec l'échevin Malestroit entre eux, sa chaîne d'or de travers. Il parle beaucoup. Il dit que le marché des pierres était régulier, qu'un sondeur est un homme et peut se tromper deux fois, que la ville lui doit sa carrière. Les sergents l'écoutent avec la patience des gens payés à l'heure." },
      { after: "j:preuve_rapport", if: { has: "monde:pont_tombe" }, text: "Tu as les deux feuilles sous ta veste. Elles n'ont servi à personne : tu les as eues trop tard, ou portées trop mal. Tu montes sur l'estrade. Tu les mets dans la main du bailli, qui est là, hagard, à faire des listes. Il lit. Il lève la tête et cherche des yeux, parmi les robes fourrées, un gros homme à bajoues qui n'y est plus. On retrouvera l'échevin Malestroit le lendemain, à deux lieues, dans une voiture louée, avec un sac d'écus sur les genoux." },
      { before: "j:preuve_rapport", if: { not: { has: "monde:pont_tombe" } }, text: "L'échevin Malestroit est toujours sur l'estrade, entre ses confrères. Il parle beaucoup. Il dit qu'il avait toujours eu des doutes, qu'il l'avait écrit, que le maître d'œuvre ne l'avait pas écouté. Il le dit à qui veut l'entendre, avec ses bajoues, en regardant de temps en temps vers le cabaret du Bac. Personne, ce soir, ne peut prouver qu'il ment." },
      { before: "j:preuve_rapport", if: { has: "monde:pont_tombe" }, text: "L'échevin Malestroit pleure, sur l'estrade, devant tout le monde, de vraies larmes, qui coulent dans ses bajoues. Il dit que c'est le malheur des temps, la crue, la main de Dieu. Il fait ouvrir sa bourse pour les familles. On le bénit. Personne, ce soir, ne peut prouver ce qu'il savait, et le seul homme qui le pourrait boit sa cinquième chopine." },
    ],
    choices: [{ back: "K06j_apres" }] },
  K06j_thibert_fin: { act: "II", title: "Un homme qui se lève", place: "arvoise",
    text: [
      { if: { all: [{ has: "j:preuve_rapport" }, { not: { has: "monde:pont_tombe" } }] }, text: "La table sous l'escalier est vide. Les chopines y sont, alignées. L'hôte te montre le quai, du menton : maître Thibert est debout devant le bailli, tête nue, très droit, et il parle. Il a ses deux feuilles sous les yeux. Il dit *oui, c'est ma main*, et *oui, cent écus*, et les sommes, et les dates, avec la précision d'un homme qui mesure tout. Il ne tremble plus." },
      { if: { all: [{ has: "j:preuve_rapport" }, { not: { has: "monde:pont_tombe" } }] }, text: "« Quatre pieds deux pouces, te dit-il quand on l'emmène. La table. Je n'aurai plus à la regarder. C'est toi qui m'as fait lever. Je ne sais pas encore si je te remercie. »" },
      { if: { not: { all: [{ has: "j:preuve_rapport" }, { not: { has: "monde:pont_tombe" } }] } }, after: "monde:pont_tombe", text: "Maître Thibert est à sa table. Il n'a pas bougé de tout le jour. Il a entendu le bruit ; il a entendu les cloches. Les chopines sont alignées devant lui, sept, à distances égales, et il regarde la huitième place, vide, où sa main n'arrive plus à poser un verre droit. « Trente pieds, dit-il à la table. Je l'avais écrit. J'ai écrit autre chose après. » Il ne te voit pas." },
      { if: { not: { all: [{ has: "j:preuve_rapport" }, { not: { has: "monde:pont_tombe" } }] } }, before: "monde:pont_tombe", text: "Maître Thibert est à sa table. Il a su, par l'hôte, ce qui s'est passé à midi, et ce qui ne s'est pas passé. Il a repoussé sa chopine. « On n'a donc plus besoin de moi pour le dire, constate-t-il. La rivière l'a dit. » Il regarde ses mains, qui tremblent moins. « Je vais peut-être tout de même me lever. Demain. Il y a huit ans que je dis demain ; mais ce soir, c'est la première fois que le mot a un goût. »" },
    ],
    choices: [{ back: "K06j_apres" }] },
  K06j_eveque_soir: { act: "II", title: "Un évêque curieux", place: "arvoise", fx: { item: "sauf_conduit" },
    text: [
      "L'abbé jaune t'ouvre la portière lui-même, ce qui lui coûte. Monseigneur Fulbert occupe toute la banquette du fond. Il t'indique celle d'en face.",
      "« Assieds-toi. On me dit que tout ceci est parti de toi. D'un enfant de la route, qui porte la hotte d'une marchande d'almanachs. » Les petits yeux te parcourent. « J'ai soixante ans, mon fils. J'ai vu des gens avoir raison par science, par hasard et par entêtement. Toi, ce matin, tu avais raison comme on est pressé : en regardant l'horloge. Tu savais l'heure. »",
      "Il attend. Tu ne dis rien. Il n'insiste pas ; c'est un homme qui a beaucoup confessé, et qui sait qu'un silence est une réponse.",
      "« Bien. Je ne demande pas ce qu'on ne peut pas me dire : je l'apprends toujours plus tard, et moins cher. » Il prend sur ses genoux une écritoire de voyage, trace quatre lignes, appuie son anneau dans la cire. « Tu vas à Méridane pour la fête. La ville sera pleine de sergents, on y arrête les vagabonds par charretées. Ceci dit que tu es de ma maison. Cela n'ouvre pas le Palais ; cela ouvre les portes d'en bas, les cloîtres, et la plupart des prisons, dans le bon sens. »",
      "Il te tend le papier. « Si tu sais l'heure d'autre chose, là-bas, souviens-toi que je serai à la fête, au troisième rang des tribunes, et que j'écoute les enfants. Cela m'a réussi une fois. »",
    ],
    choices: [{ back: "K06j_apres" }] },
  K06j_bac_soir: { act: "II", title: "La corde", place: "arvoise",
    text: [
      { after: "monde:pont_reporte", text: "Les neuf passeurs sont sur leur plate. On ne les a pas congédiés : l'échevin qui devait lire le discours avait autre chose en tête. Aubin Lebac regarde le pont fermé. « Un an, il a dit. Deux, peut-être. » Il crache dans sa main, la frotte contre l'autre. « Deux ans de corde. Puis ils ouvriront leur pont, un pont qui tient, et on sera congédiés pour de bon. » Il hausse les épaules. « C'est honnête. J'aime mieux perdre mon pain à un pont solide. »" },
      { after: "monde:pont_reporte", text: "Gervais astique son cabestan. Il a entendu. Il compte : deux ans, il en aura dix-sept. « Et après ? » demande-t-il. Personne ne lui répond." },
      { after: "monde:pont_sauve", text: "Les neuf passeurs sont sur leur plate, et la plate est pleine. Tout ce qui devait traverser à pied sec traverse à la corde, par fournées de cinquante, en payant son sou. Aubin Lebac est à la barre. « Dix toises plus haut, sur le roc, il a dit. Cela leur fera dix ans. » Il a un sourire dans la barbe, qu'il n'essaie pas de cacher. « Dix ans de corde, mon Gervais. Tu la prendras après moi. »" },
      { after: "monde:pont_tombe", text: "La plate est à sa cale. On s'en sert pour les morts : c'est le seul plancher assez large. Les neuf passeurs sont debout autour, leurs bonnets à la main. Personne ne parle plus de les congédier. « On reprend la corde demain, dit Aubin Lebac. Il faut bien que les gens passent. » Il n'a pas de joie à le dire." },
      { if: { any: [{ has: "monde:pont_sauve" }, { has: "monde:pont_tombe" }] }, text: "Gervais est au cabestan, les deux mains sur la barre. Il a quinze ans, et il vient d'apprendre qu'il sera maître passeur. Il le sera trente-quatre ans. Tu sais où il sera, la dernière nuit, et ce qu'il criera après le câble." },
    ],
    choices: [
      { label: "« Un pont, ça se garde. Il faudra quelqu'un qui connaisse la rivière, à la barrière. »", hide: { not: { has: "monde:pont_reporte" } }, fx: { flag: "monde:gervais_pont" }, to: "K06j_gervais_pont" },
      { back: "K06j_apres" },
    ] },
  K06j_gervais_pont: { act: "II", title: "Gardien du pont", place: "arvoise",
    text: [
      "Gervais lève la tête. Son père aussi.",
      "« Une barrière, dis-tu. Un péage. Quelqu'un qui sache, les jours de crue, s'il faut laisser passer les fardiers ou les arrêter. Quelqu'un qui descende voir les piles, par en dessous, chaque printemps. Un maçon ne plonge pas. »",
      "Aubin Lebac te regarde longuement. « Gardien du pont, dit-il. Avec un bonnet rouge. » Il se tourne vers la loge, là-haut, où brûle une lampe. « J'irai le dire à Baudri. Il nous doit bien d'écouter les passeurs une fois : il vient d'apprendre ce que cela coûte. »",
      "Gervais a repris sa manivelle. Il l'astique, mais il regarde le pont, et pour la première fois de la journée il le regarde comme une chose qui pourrait être à lui.",
    ],
    choices: [{ back: "K06j_apres" }] },
  K06j_perrine_soir: { act: "II", title: "La pointe de l'île", place: "arvoise",
    text: [
      { with: "perrine", text: "Perrine est descendue à la saulaie, à la pointe de l'île, toute seule. Tu la trouves accroupie au bord de l'eau, sa hotte à côté d'elle." },
      { with: "perrine", after: "monde:pont_reporte", text: "« Je suis venue le lui dire, fait-elle sans se retourner. Qu'ils ont fermé. Qu'il avait raison, que c'est écrit, qu'on a trouvé le papier. » Elle a posé sur l'eau un almanach de l'an 541, ouvert, qui s'en va en tournant. « Il ne savait pas lire. Mais il aimait bien que j'en vende. »" },
      { with: "perrine", after: "monde:pont_sauve", text: "« Je suis venue le lui dire, fait-elle sans se retourner. Qu'il est tombé, leur pont, à l'heure juste, et qu'il n'y avait dessus que des cailloux. » Elle a posé sur l'eau un almanach de l'an 541, ouvert, qui s'en va en tournant. « Il aurait ri. Il riait rarement, et toujours de la rivière. »" },
      { with: "perrine", after: "monde:pont_tombe", text: "« C'est ici qu'on l'a trouvé, fait-elle sans se retourner. C'est ici qu'on les trouvera, les autres. Demain, après-demain. La Thiorne rend tout à la même place. » Elle a les mains dans l'eau jusqu'aux poignets, immobiles. « Je l'ai su huit ans. Je l'ai dit à tout le monde. Je vendais des images sur la berge. »" },
      { with: "perrine", after: "j:perrine_dit_vrai", text: "Elle se relève, s'essuie les mains à sa jupe, et te regarde bien en face. « Toi. Tu savais l'heure. Je ne te demande pas comment : tu m'as dit que tu ne pouvais pas le dire, et tu n'as pas menti. Mais écoute-moi. Je vends des almanachs depuis cinq ans. Je sais ce que c'est, quelqu'un qui devine. Tu ne devines pas. Tu te souviens. » Elle attend. « Je ne te demande rien. Je te le dis pour que tu saches que je l'ai vu. »" },
      { with: "perrine", before: "j:perrine_dit_vrai", text: "Elle se relève, s'essuie les mains à sa jupe. « On passe demain, à la fraîche, par la corde. Cinq lieues jusqu'à Sainte-Aure. Les bonnes sœurs m'achètent des aiguilles et me nourrissent pour rien. » Elle reprend sa hotte. Elle a retrouvé sa voix de marchande, un ton trop haut." },
    ],
    choices: [{ back: "K06j_apres" }] },
  K06j_line_soir: { act: "II", title: "Ce que Line a regardé", place: "arvoise",
    text: [
      "Line est assise sur une marche de la cale, les pieds dans la Thiorne, sa boîte à côté d'elle. C'est la première fois qu'elle voit un fleuve. Elle le regarde sans plaisir, en personne qui cherche comment c'est fait.",
      { if: { not: { has: "monde:pont_tombe" } }, after: "monde:line_sait", text: "« Tu le savais, dit-elle. Pour le pont. Tu le savais comme tu sais pour l'autre chose. » Elle agite ses orteils. « Et tu l'as empêché. Donc on peut. Ce qui est écrit chez toi, on peut le défaire. » Elle tourne vers toi une figure très sérieuse. « Je voulais être sûre. Maintenant je suis sûre. Pour Méridane, on fera pareil : on cherche qui a caché le vrai papier. Il y a toujours quelqu'un qui a caché un papier. »" },
      { if: { has: "monde:pont_tombe" }, after: "monde:line_sait", text: "« Tu le savais, dit-elle. Tu le savais, et c'est arrivé quand même. » Elle ne te regarde pas. « Alors ça ne sert à rien de savoir ? » Sa voix est toute petite. Tu cherches une réponse honnête. Tu dis que savoir ne suffit pas, qu'il faut une chose à mettre dans la main des gens, et que tu ne l'as pas trouvée à temps. Line réfléchit. « Pour Méridane, il faudra la trouver avant, dit-elle. Je t'aiderai à chercher. Je suis petite, je vois dessous. »" },
      { before: "monde:line_sait", text: "« Les grandes personnes avaient un papier qui disait que c'était solide, dit-elle. Et des gens qui disaient que non, et qui avaient raison, et qu'on n'écoutait pas parce qu'ils n'avaient pas de papier. » Elle agite ses orteils dans l'eau. « C'est bête. Il suffisait de regarder dessous. » Elle te jette un coup d'œil. « Toi, tu as regardé dessous tout de suite. Comme si tu savais où. »" },
    ],
    choices: [{ back: "K06j_apres" }] },

  K06j_veillee: { act: "II", title: "La soupe des passeurs", place: "arvoise", takes: "evening",
    text: [
      "Vous couchez chez les Lebac, au bord de l'eau, dans une maison basse qui sent le goudron et le poisson fumé. Perrine y a sa paillasse depuis qu'elle est née : on ne laisse pas à l'auberge la fille de Josselin.",
      { if: { not: { has: "monde:pont_tombe" } }, text: "La soupe est une soupe d'anguille. On est douze autour, et l'on parle peu, comme font les gens de rivière ; mais la femme d'Aubin te ressert trois fois sans que tu demandes, et Gervais te cède sa place près du feu. On t'appelle « {hero} de la route ». Ici, c'est un nom de famille." },
      { if: { has: "monde:pont_tombe" }, text: "On ne fait pas de soupe. La femme d'Aubin met du pain sur la table et du fromage, et personne n'y touche. Les hommes rentrent tard, un par un, mouillés, et s'assoient en silence. Gervais s'est endormi sur le banc, tout habillé, son bonnet sur les yeux. Il a plongé dix-sept fois." },
      { if: LINE, text: "Line dort contre Perrine, sa boîte dans les bras. La colporteuse n'ose plus bouger. « Je n'ai jamais eu de sœur, chuchote-t-elle. C'est lourd. Ça donne chaud. » Elle n'a pas l'air de s'en plaindre." },
      "Par la fenêtre, on voit la Thiorne, et dessus, dans la nuit claire, ce que tu as fait de cette journée.",
    ],
    choices: [{ label: "Sortir un moment sur la cale", to: "K06j_nuit" }] },
  K06j_nuit: { act: "II", title: "Ce qui est écrit", place: "arvoise", takes: "night",
    text: [
      { after: "monde:pont_reporte", text: "Le pont est blanc sous la lune, entier, désert. Une lanterne y va et vient, toute seule, du côté de la troisième pile : maître Baudri, qui ne dormira pas. Il descend son plomb, le remonte, note quelque chose, recommence." },
      { after: "monde:pont_sauve", text: "Il y a deux moignons blancs sous la lune, un de chaque rive, et entre eux le fleuve, qui fait sur les pierres tombées un bruit nouveau, que les gens d'Arvoise mettront des années à ne plus entendre." },
      { after: "monde:pont_tombe", text: "Il y a deux moignons blancs sous la lune, et entre eux le fleuve. Sur la berge, des lanternes cherchent encore. On entend, par moments, une femme appeler un nom, toujours le même, vers l'aval." },
      { if: { not: { has: "monde:pont_tombe" } }, text: "Tu penses à une ligne, dans un gros livre noir, que tu n'as jamais vu et que {autre} porte dans son sac. *Il y périt quarante personnes.* Elle était écrite depuis soixante ans. Demain matin, quand {autre} ouvrira ce livre à la même page, elle dira autre chose. Quarante personnes, qui étaient mortes avant ta naissance, se sont couchées ce soir dans leur lit, fâchées d'avoir manqué une fête." },
      { if: { not: { has: "monde:pont_tombe" } }, text: "Si cela se peut pour un pont, cela se peut pour une tour. Tu n'osais pas le penser, jusqu'ici, de peur que ce ne soit pas vrai." },
      { if: { has: "monde:pont_tombe" }, text: "*Il y périt quarante personnes.* Tu le savais. Tu l'avais, écrit en bâtons, depuis deux jours. Tu as eu une matinée, et la Chronique n'a pas bougé d'une ligne." },
      { if: { all: [{ has: "monde:pont_tombe" }, { has: "monde:pont_secours" }] }, text: "Elle aura bougé d'un chiffre. Onze, au lieu de quarante. Tu essaies de trouver que c'est beaucoup. Tu penses aux onze." },
      { if: { has: "monde:pont_tombe" }, text: "Dans six jours, il y a une tour, et quarante mille personnes. Tu regardes tes mains." },
    ],
    choices: [{ label: "Dormir, si tu peux, et te lever avant le jour", to: "K06j_aube" }] },
  K06j_aube: { act: "II", title: "Avant la première plate", place: "arvoise", takes: "morning",
    text: [
      "Le jour se lève sur la rivière dans une brume qui sent la vase. Les passeurs graissent le cabestan. La première plate part au soleil ; tu as le temps d'un Pater avant qu'on embarque.",
      "La borne de la quatorzième lieue est au bord du quai, ses guirlandes fanées. Tu t'accroupis au pied, du côté où elle fait de l'ombre à midi, le Cahier sur un genou.",
    ],
    choices: [{ label: "Ouvrir le Cahier", to: "B06", big: true }] },
});

module.exports = {
  passages: P,
  extras: {
    items: {
      lettre_baudri: { name: "Billet de maître Baudri", kind: "divers", keep: true, price: 0, desc: "Trois lignes d'une grosse écriture carrée, pour le Grand Maître Coudrier, de la part de celui qui a refait l'escalier de sa Tour." },
      plomb: { name: "Le fil à plomb de Guillemine", kind: "divers", keep: true, price: 0, desc: "Un poids de laiton tourné en poire, six brasses de soie. Il ne ment pas : il ne sait pas faire." },
      sauf_conduit: { name: "Sauf-conduit de Monseigneur Fulbert", kind: "divers", keep: true, price: 0, desc: "Quatre lignes et un anneau dans la cire : le porteur est de la maison de l'évêque. Cela ouvre les portes d'en bas, les cloîtres, et la plupart des prisons, dans le bon sens." },
    },
  },
};
