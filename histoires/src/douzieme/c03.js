// Le Douzième Coup · chapter 3 (act I, the night). Line, the apprentice and the gleaner leave the village by the back,
// cross the red stakes (one way for both: `monde: "route_nuit"`), walk the taken meadows hand in hand on one pinch of
// sand, and reach the old farm and its barn. At midnight the one who passes goes through; the Guard arrives; the one
// who stays runs to the hour-stone. Both meet again at B03 (act II), sixty years apart.
var J = { has: "role:passe" }, R = { has: "role:reste" };
var P = {};

Object.assign(P, {
  K03_veillee: { act: "I", title: "La veillée", place: "troisnoyers", takes: "night",
    text: [
      "On attend onze heures. Line s'est assise dans son fauteuil, toute bottée, son châle croisé, et elle dort comme dorment les vieux horlogers : par quarts d'heure, en rouvrant l'œil à chaque sonnerie pour vérifier que personne n'a retardé.",
      "Dans la rue, les deux gardes du capitaine jouent aux dés sur la margelle du puits. On entend rouler les dés, puis un juron, toujours le même, toujours de la même voix : il y en a un des deux qui perd avec constance.",
      { if: J, text: "Tu regardes Line dormir. Tu regardes aussi la boutique, puisque c'est la dernière fois : les brucelles par ordre de taille, le tour à archet, la marque que ton coude a faite, en neuf ans, sur le bord de l'établi. Les quarante horloges s'arrêteront l'une après l'autre, dans la semaine, faute de quelqu'un pour les remonter. Tu te demandes laquelle tiendra le plus longtemps. Le régulateur, sans doute. Il a toujours eu le dernier mot." },
      { if: R, text: "Tu n'avais jamais passé une soirée dans une maison. On y est assis, voilà la différence, et l'on y entend le temps, que dehors on se contente de voir. {autre} regarde la boutique comme on regarde quelqu'un sur un quai. Toi, tu regardes la trappe, puis tes mains, puis la vieille qui dort, et tu fais le compte de ce que tu lui dois, qui a cessé depuis ce matin de tenir en écus." },
      "À dix heures et demie, Line est debout sans transition. « Par le jardin. Le mur du fond donne chez Lubin, et de chez Lubin on gagne les prés sans passer devant un uniforme. Reste à savoir par où l'on entre dans la lisière. Il y a le coude de la haie, entre le gué et le bois. Et il y a le fossé aux Aulnes, plus au nord, par où les glaneurs ont leurs habitudes. Vous avez des yeux et des jambes : décidez. »",
      { if: R, text: "Le fossé aux Aulnes. Ce matin, au puits, le capitaine a lu ces mots-là dans son carnet, à ton nom, de sa voix qui range." },
      { if: { all: [J, { has: "route:reperee" }] }, text: "Tu as vu le coude de près cet après-midi : cent pas d'ombre, un fossé à sec, la corde aux chiffons qui passe au-dessus." },
      { if: { all: [R, { has: "route:reperee" }] }, text: "Tu as vu le coude de près cet après-midi : cent pas d'ombre, un fossé à sec, la corde aux chiffons qui passe au-dessus. Et les piquets doublés, l'herbe fauchée devant chaque poste." },
    ],
    choices: [
      { label: "« Le coude de la haie. »", monde: "route_nuit", option: "coude", fx: { flag: "nuit:coude" }, to: "K03_jardin", big: true },
      { label: "« Le fossé aux Aulnes. »", monde: "route_nuit", option: "fosse", fx: { flag: "nuit:fosse" }, to: "K03_jardin", big: true },
    ] },
  K03_jardin: { act: "I", title: "Le mur du fond", place: "troisnoyers",
    text: [
      "Line éteint la chandelle entre deux doigts mouillés. Elle ne se retourne pas sur ses horloges : elle leur dit seulement, de la porte du jardin, « Bonsoir », comme chaque soir depuis quarante ans, et elle tire la porte.",
      "Le mur du fond est bas, moussu, et elle le passe à califourchon avec une vigueur qui lui coûte une quinte de toux, écrasée dans le châle. De l'autre côté, c'est le jardin du père Lubin : des rangs de poireaux, un rosier, la lune.",
      { if: { all: [{ has: "monde:lubin_reste" }, { not: { has: "monde:lubin_force" } }, { not: { has: "monde:lubin_part" } }] }, text: "Le banc est au bout du jardin, tourné vers les prés, et le père Lubin est dessus, en habit de noces, très droit. Il ne dort pas. « Bonsoir, l'Adeline, dit-il sans bouger la tête. Tu passes devant ? Tu verras donc la suite avant moi. Tu me la raconteras. » Line s'arrête. C'est la seule fois de la nuit qu'elle perd trois pas. « Tiens-toi droit, Lubin, dit-elle. Tu en as pour longtemps. »" },
      { if: { any: [{ has: "monde:lubin_force" }, { has: "monde:lubin_part" }] }, text: "Le banc du père Lubin est resté sous le rosier, vide, avec sa tuile de calage. Line passe la main sur le dossier, en marchant, comme on touche un bénitier." },
      "Au-delà du jardin, le pré communal descend dans le clair de lune. On voit les jalons, pâles, en ligne, et trois lueurs rousses : les lanternes des postes.",
    ],
    choices: [
      { label: "Prendre à droite, vers le coude de la haie", if: { has: "nuit:coude" }, hide: { not: { has: "nuit:coude" } }, to: "K03_coude" },
      { label: "Prendre à gauche, vers le fossé aux Aulnes", if: { has: "nuit:fosse" }, hide: { not: { has: "nuit:fosse" } }, to: "K03_fosse" },
    ] },

  // ------------------------------------------------------------ the bend of the hedge
  K03_coude: { act: "I", title: "Cent pas de haie", place: "troisnoyers",
    text: [
      "On longe la haie à la file, courbés, Line au milieu. L'aubépine sent fort, la nuit. À trente pas sur la gauche, la lanterne du gué éclaire deux paires de bottes et le bas d'une hallebarde ; à droite, celle du bois se balance au bout d'un bras. Entre les deux, il y a le fossé, que la lune ne trouve pas.",
      "Reste à y descendre sans qu'une pierre roule.",
    ],
    choices: [
      { label: "Y descendre le premier, à tâtons, et guider les autres de la voix", test: { dom: "discretion", diff: 0, label: "Discrétion", help: [{ if: { has: "route:reperee" }, v: 25 }, { if: { has: "trou_haie" }, v: 10 }, { if: { has: "route:clocher" }, v: 5 }, { if: { voie: "leste" }, v: 10 }, { if: { voie: "coureur" }, v: 10 }] },
        win: { fx: { ep: ["perso", 400] }, to: "K03_coude_passe" }, lose: { fx: { pv: -1 }, to: "K03_coude_passe" } },
    ] },
  K03_coude_passe: { act: "I", title: "Sous la corde aux chiffons", place: "troisnoyers",
    text: [
      { outcome: "win", text: "Tes pieds retrouvent la souche, la pierre plate, le tournant. Line descend derrière toi en te tenant l'épaule, et elle ne jure qu'une fois, très bas, contre un houx. La corde aux chiffons passe au-dessus de vos têtes, noire sur le ciel." },
      { outcome: "lose", text: "Une pierre part sous ton talon et roule jusqu'au fond, avec le bruit que font les pierres la nuit, qui est celui d'un tombereau. « Qui va là ? » La lanterne du gué se lève. Vous restez à plat ventre dans les orties, tous les trois, un long quart d'heure, pendant qu'un garde bat la haie du manche de sa hallebarde à six pas de vos têtes. Line étouffe sa toux à pleines mains ; tu sens ses épaules sauter contre ton bras. Le garde s'en va. On repart, raides, trempés de rosée." },
      "Au bout du fossé, l'herbe change sous la main.",
    ],
    choices: [{ label: "Passer", to: "K03_dedans" }] },

  // ------------------------------------------------------------ the gleaners' ditch
  K03_fosse: { act: "I", title: "Le fossé aux Aulnes", place: "troisnoyers",
    text: [
      "Le fossé commence derrière la dernière grange, sous des aulnes, et s'en va vers la lisière en tournant deux fois. On y marche dans une eau morte, jusqu'aux chevilles. C'est le chemin des glaneurs : on y trouve, piétinés dans la vase, des choses tombées des sacs, un sabot dépareillé, une cuiller.",
      { if: R, text: "Tu marches devant. Tu connais chaque racine. Au second tournant, là où il y a la souche fendue, tu t'arrêtes : l'eau, devant toi, est trouble, et elle ne l'est jamais à cette heure. Quelqu'un vient d'y marcher." },
      { if: J, text: "{autre} marche devant, sans bruit. Au second tournant, {autre:il} s'arrête net, une main levée. Tu regardes l'eau, comme {autre:lui} : elle est trouble." },
      "Deux lanternes sourdes s'ouvrent ensemble, à dix pas. « Le fossé aux Aulnes, dit une voix satisfaite. Quatre nuits sur sept. Le capitaine avait bien noté. » Ils sont deux, en casaque noire, de l'eau jusqu'aux mollets, et ils s'ennuient ici depuis la tombée du jour.",
      "Derrière eux, à vingt pas, il y a la souche, et après la souche l'herbe qui ne plie plus. Ils n'ont pas de sablier à la ceinture : la Garde n'en donne qu'aux officiers.",
    ],
    choices: [
      { label: "Foncer sur celui qui te barre le passage", fight: { title: "Le fossé aux Aulnes", enemies: [{ id: "garde_sable", n: 1 }], terrain: "nature",
        win: { fx: { ep: ["seance", 600] }, to: "K03_fosse_passe" }, lose: { fx: { pv: 2 }, to: "K03_fosse_traine" },
        flee: { label: "Te jeter de côté et courir vers la souche", dom: "discretion", diff: 0, to: "K03_fosse_passe" } } },
      { label: "Lui jeter la vase du fossé au visage, et passer en courant", test: { dom: "discretion", diff: 0, label: "Discrétion", help: [{ if: { voie: "leste" }, v: 10 }, { if: { voie: "coureur" }, v: 10 }] },
        win: { fx: { ep: ["perso", 400] }, to: "K03_fosse_passe" }, lose: { fx: { pv: -2 }, to: "K03_fosse_traine" } },
    ] },
  K03_fosse_passe: { act: "I", title: "La souche fendue", place: "troisnoyers",
    text: [
      "Tu passes. Derrière toi, cela crie, cela patauge ; une lanterne tombe à l'eau et s'éteint avec un sifflement. Line court, ce que tu n'aurais pas cru possible, son châle d'une main, le sablier serré contre elle de l'autre. {autre} est déjà à la souche.",
      "Les gardes s'arrêtent où l'herbe change. Ils savent ce qu'il en coûte de faire dix pas de plus sans sable. L'un d'eux souffle dans un sifflet, longuement, vers le village : trois coups, qui disent à qui de droit par où vous êtes entrés.",
    ],
    choices: [{ label: "Passer la souche", to: "K03_dedans" }] },
  K03_fosse_traine: { act: "I", title: "De l'eau jusqu'aux mollets", place: "troisnoyers",
    text: [
      "Tu te retrouves dans l'eau, la figure dans la vase, un genou de garde entre les épaules. Quelque chose fait lâcher prise à l'homme : un bruit mat, un cri. Line, au-dessus de toi, tient à deux mains le pied de sa lanterne, et la regarde avec surprise. « Quarante ans que je porte cette lanterne. Je ne savais pas qu'elle servait à cela. »",
      "{autre} te relève par le col. Vous courez. Les gardes s'arrêtent à la souche, où l'herbe change : ils n'ont pas de sable, et ils savent ce qu'il en coûte. L'un d'eux siffle vers le village, trois coups longs.",
    ],
    choices: [{ label: "Passer la souche", to: "K03_dedans" }] },

  // ------------------------------------------------------------ inside
  K03_dedans: { act: "I", title: "La main dans la main", place: "ferme", ambiance: "champs",
    text: [
      "« Donnez-vous la main, dit Line. Le sable prête son temps à celui qui le porte, et à ce que celui-là tient. Une pincée pour trois, si personne ne lâche. Qui lâche reste. »",
      { if: R, text: "Tu fais sauter le bouchon du sablier de corne. Une pincée descend dans le col. Tu prends la main de {autre}, qui est moite, et {autre} prend celle de la vieille. Tu n'avais jamais mené personne là-dedans. On y va seul, d'ordinaire, et l'on en est seul responsable." },
      { if: J, text: "{autre} ouvre un petit sablier de corne, d'un coup de pouce, comme d'autres ouvrent une tabatière. Sa main est sèche, chaude, dure. Celle de Line, dans ton autre main, est froide et ne pèse rien. Tu es au milieu. Tu t'avises que c'est la place qu'on donne aux enfants." },
      "Trois pas, et le monde se retire. Le silence d'une campagne a un grain : on y entend son sang. Celui-ci est d'une autre espèce. Le bruit y manque comme une marche manque sous le pied. Les grenouilles du fossé se taisent toutes au milieu d'une note. L'air a la consistance du lait. La lune est toujours là, plus pâle, et sa lumière tombe sur les prés à la façon d'une poussière.",
      { if: J, text: "Tout ton corps veut ressortir. Tu ne savais pas qu'on pouvait avoir peur avec les genoux, avec la peau du dos, avec les dents. L'herbe craque sous tes souliers et reste couchée derrière toi : de toute la Dormante, votre trace est la seule chose qui ait bougé depuis Pâques." },
      { if: R, text: "Tu marches comme on t'a appris, ou plutôt comme tu t'es appris : sans courir, sans compter ton souffle, les yeux sur un point. Tu sens au bout de ton bras le poids des deux autres, leur lenteur de gens qui regardent partout. « Ne regardez pas, dis-tu. Marchez. » C'est la première fois de ta vie que tu donnes un ordre, et il est obéi." },
    ],
    choices: [{ label: "Marcher vers la Ferme-Vieille", hide: R, to: "K03_pres" }, { label: "Marcher vers la Ferme-Vieille : une pincée", hide: J, fx: { stock: { sable: -1 } }, to: "K03_pres" }] },
  K03_pres: { act: "I", title: "Les prés pris", place: "ferme", ambiance: "champs",
    text: [
      "Il y a une demi-lieue de prés. On les traverse en ligne droite, parce que rien n'y fait obstacle : les barrières sont ouvertes, ouvertes depuis le jour où l'on a fui.",
      "Vous passez à trois pas du berger. De près, Bastien est un homme de trente ans, mal rasé, qui a une dent de moins sur le devant et de la sueur aux tempes, une sueur du lundi de Pâques qui brille encore. Ses yeux sont tournés vers le village. Ils vous traversent. Son chien a une oreille dressée.",
      { if: R, text: "Tu l'as croisé cent fois. Les enfants de la bande lui ont mis un chapeau à plumes, que tu lui as ôté, une nuit, sans le dire à personne. Il n'en a jamais rien su ; ou il le saura dans dix ans, quand la chose aura fini de lui arriver." },
      { if: J, text: "« Il nous voit ? » demandes-tu, et ta voix ne va nulle part : elle tombe à tes pieds. « Il verra passer quelque chose, dit Line. Une ombre, un trait. Il se demandera toute sa vie ce que c'était. Avance. »" },
      "Plus loin, c'est une charrette de foin abandonnée, les ridelles pleines, et une fourche plantée dedans. Plus loin encore, un vol d'étourneaux à hauteur d'homme, une quarantaine, pris au ras de l'herbe dans le moment où ils se posaient. Il faut le contourner. Line passe la main sous l'un d'eux, sans le toucher, comme on se chauffe à une chandelle.",
      "« Depuis ce printemps, dit-elle. Je les ai vus se poser de ma fenêtre, avec la lunette. Ils y mettent un an par coup d'aile. » Elle a parlé pour elle. Au bout du pré, trois toits et un quatrième, plus haut, sortent de la clarté grise.",
    ],
    choices: [{ label: "Entrer dans la cour de la ferme", to: "K03_ferme" }] },
  K03_ferme: { act: "I", title: "La Ferme-Vieille", place: "ferme",
    text: [
      "La cour est carrée, pavée de galets, fermée de trois côtés par la maison, l'étable et le fournil. Les derniers fermiers sont partis en mars, avec leurs bêtes ; ils ont laissé un seau au bord du puits, une échelle contre le fournil, et le chat.",
      "Le chat est en l'air. Il a sauté de la margelle, les pattes de devant tendues, la queue en balancier, et il se trouve à deux pieds du sol depuis le printemps, les yeux fixés sur l'endroit où il compte arriver. « Il retombera sur ses pattes, dit Line. Il a tout son temps. »",
      "Elle s'est arrêtée au milieu de la cour. Elle regarde la maison où elle est née : la porte basse, le banc de pierre, la fenêtre de la chambre du haut. Elle regarde les deux noyers, de part et d'autre du portail, et, entre eux, une souche large comme une table, grise, fendue. « Il y en avait trois. On a abattu celui-là l'été de mes neuf ans, pour payer une dette. Ma mère en a pleuré une semaine, et puis il y a eu de quoi pleurer mieux. »",
      "Le quatrième toit est celui de la grange. Elle est en pierre, quand tout le reste est en torchis ; elle est plus haute que la maison ; et elle est plantée de biais dans la cour, tournée d'un huitième de tour, comme une chose qui était là d'abord et dont on s'est arrangé.",
    ],
    choices: [{ label: "Suivre Line jusqu'à la porte de la grange", to: "K03_grange" }] },
  K03_grange: { act: "I", title: "La porte dans le mur", place: "ferme",
    text: [
      "La clef à la feuille de noyer tourne sans effort. Dedans, cela sent le foin de l'an passé et la pierre froide. Line bat le briquet : dans la Dormante, la flamme de sa lanterne monte toute droite et brûle sans trembler, tant que sa main tient l'anse.",
      "Au fond de la grange, pris dans le mur, il y a le cadre. Deux montants et un linteau, chacun d'un seul bloc, d'une pierre plus sombre et plus serrée que le moellon d'alentour ; ils ne doivent rien au mur, c'est le mur qui s'appuie sur eux. Dans le cadre, il y a de la maçonnerie, des clous, une faux pendue, une toile d'araignée. Le linteau porte douze entailles, et la douzième est plus longue.",
      "À hauteur de main, dans le montant de droite, quelqu'un a creusé une niche de la taille d'un œuf. Line y loge le sablier de laiton, couché. « À minuit juste, tu le redresses. Le sable met à couler le temps de douze coups d'horloge. Tant qu'il coule, la porte donne. Quand il a fini, c'est un mur, et tu es d'un côté ou de l'autre. »",
      { if: J, text: "Elle cherche sa montre à son gousset, se souvient qu'elle te l'a donnée, et te la réclame d'un claquement de doigts. Minuit moins un quart." },
      { if: R, text: "Elle demande l'heure à {autre}, qui tire de sa veste une montre d'argent grosse comme un oignon. Minuit moins un quart." },
      { if: J, text: "Tu lèves les yeux, sans raison. La grosse poutre qui traverse la grange est noire, lisse, sans une marque." },
      { if: R, text: "Tu lèves la lanterne, par habitude de regarder ce qu'il y a à prendre. Rien : du foin, des outils, une grosse poutre noire et lisse en travers de la grange." },
    ],
    choices: [{ label: "Attendre minuit", to: "K03_adieux" }] },
  K03_adieux: { act: "I", title: "Minuit moins un quart", place: "ferme",
    text: [
      "Un quart d'heure, c'est long quand on n'a rien à y mettre, et court pour ce qu'il faudrait y dire.",
      { if: J, text: "Line te boutonne ta veste jusqu'en haut, comme quand tu avais six ans, puis s'aperçoit de ce qu'elle fait et redéfait un bouton. « Tu vas arriver dans du foin. C'était du foin, de mon temps. Ne bouge pas avant le jour. Au jour, tu vas à la borne, sur la route, à vingt toises ; tu ouvres le Cahier ; tu écris que tu es en vie. Ensuite seulement tu fais des bêtises. »" },
      { if: J, text: "Elle te regarde. Elle a une goutte de sang au coin de la bouche, qu'elle essuie du pouce sans y penser. Tu comprends qu'elle attend que tu dises quelque chose, et qu'elle ne le demandera pas." },
      { if: R, text: "Tu te tiens près de la porte de la grange, parce qu'il faut bien que quelqu'un écoute dehors, et parce que ce quart d'heure-là n'est pas à toi. La vieille boutonne la veste de {autre} jusqu'en haut. {autre} se laisse faire, les bras le long du corps. Tu as vu des mères faire cela, dans des maisons prises, sur des enfants qui partaient pour l'école et n'y sont jamais arrivés." },
      { if: R, text: "Puis {autre} se tourne vers toi. Vous vous connaissez depuis ce matin. Dans un quart d'heure, vous serez les deux seules personnes au monde à savoir ce que l'autre fait." },
    ],
    choices: [
      { label: "« Je reviendrai. Gardez-moi de la soupe. »", hide: R, fx: { flag: "j:adieu_promesse" }, to: "K03_lanternes" },
      { label: "« Merci pour la borne de Vauxelles. »", hide: R, fx: { flag: "j:adieu_merci" }, to: "K03_lanternes" },
      { label: "Ne rien dire, et la serrer contre toi, ce que personne n'a jamais osé", hide: R, fx: { flag: "j:adieu_bras" }, to: "K03_lanternes" },
      { label: "Lui tendre la main : « À la borne. »", hide: J, fx: { flag: "r:adieu_main" }, to: "K03_lanternes" },
      { label: "« Écris gros. Je lis mal. »", hide: J, fx: { flag: "r:adieu_gros" }, to: "K03_lanternes" },
      { label: "« Si tu vois une porte bleue, à Roquebise, après la fontaine... Non. Rien. Va. »", hide: J, fx: { flag: "r:adieu_porte" }, to: "K03_lanternes" },
    ] },
  K03_lanternes: { act: "I", title: "Des lanternes dans la cour", place: "ferme", urgent: 60,
    text: [
      { if: J, after: "j:adieu_promesse", text: "« De la soupe, dit Line. Dans neuf jours. Elle sera à point. » Sa voix n'a pas tremblé. Elle a seulement mis un temps entre les mots." },
      { if: J, after: "j:adieu_merci", text: "« Tu avais une cuiller à la main, dit Line. Tu ne voulais pas la lâcher. J'ai pensé : voilà quelqu'un qui tient à ses outils. » Elle renifle, une fois, sèchement, comme on souffle la limaille." },
      { if: J, after: "j:adieu_bras", text: "Elle est toute en os, sous le châle, et elle sent l'huile de pied de bœuf. Elle reste raide le temps d'un battement, puis une main sèche te tapote le dos, deux fois, comme on vérifie qu'un boîtier est bien fermé. « Allons, dit-elle dans ton épaule. Allons. »" },
      { if: R, after: "r:adieu_main", text: "{autre} prend ta main. C'est la seconde fois de la nuit, et celle-ci ne doit rien au sable." },
      { if: R, after: "r:adieu_gros", text: "« En bâtons, dit {autre}. Promis. » {autre:Il} sourit, pour la première fois depuis la soupe, et tu vois que c'est quelqu'un de ton âge." },
      { if: R, after: "r:adieu_porte", text: "{autre} attend la suite, qui ne vient pas. « Une porte bleue », répète-t-{autre:il}, et {autre:il} le range quelque part, soigneusement, à la façon de la vieille." },
      "Dehors, un galet roule. Puis un autre. Par la fente de la porte, la cour est pleine de lueurs rousses qui avancent en ligne : dix lanternes, quinze, chacune au bout d'un bras noir. Ceux-là ont du sable, on le voit à leur pas. Une voix égale, sans colère, qui range : « La grange. Vivants, tous les trois. Je veux la vieille et ce qu'elle porte. »",
      "« Minuit moins rien », dit Line, très calme.",
    ],
    choices: [
      { label: "Redresser le sablier", hide: R, to: "K03j_seuil", timeout: true },
      { label: "Te jeter contre la porte de la grange, le dos au vantail", hide: J, fx: { flag: "r:porte_tenue", pv: -2 }, to: "K03r_minuit", timeout: true },
      { label: "Sortir au-devant d'eux en criant que la vieille s'est sauvée par les prés", hide: J, test: { dom: "social", diff: -10, label: "Social", help: [{ if: { voie: "diseur" }, v: 10 }, { if: { has: "r_garde_pris" }, v: 20 }] },
        win: { fx: { flag: "r:fausse_piste", ep: ["perso", 500] }, to: "K03r_minuit" }, lose: { fx: { flag: "r:porte_tenue", pv: -2 }, to: "K03r_minuit" } },
      { label: "Te coucher à plat ventre, comme le capitaine te l'a ordonné", hide: { any: [J, { not: { has: "r_garde_pris" } }] }, fx: { flag: "r:couche" }, to: "K03r_minuit" },
    ] },
});

// ======================================================================== the one who passes
Object.assign(P, {
  K03j_seuil: { act: "I", title: "Le temps de douze coups", place: "ferme",
    text: [
      "Tu redresses le sablier dans sa niche. Le sable gris se met à tomber, d'un filet si mince qu'on le croirait immobile, et les douze entailles du linteau s'allument l'une après l'autre, de gauche à droite, d'une lueur de bois pourri.",
      "Dans le cadre, le mur cesse d'être sûr de lui. Les moellons sont encore là, la faux, la toile d'araignée ; mais on les voit comme on voit le fond d'un ruisseau, à travers quelque chose qui coule. Il vient de là un air tiède, qui sent le foin neuf.",
      "Derrière toi, le vantail de la grange reçoit un coup d'épaule, puis un second. Tu entends la voix de {autre}, qui crie quelque chose aux gardes, et le bois qui gémit. Line est entre la porte et toi, la lanterne haute. Elle te tourne le dos. Elle dit, sans se retourner, de la voix dont elle t'envoyait régler l'horloge du moulin :",
      "« Va, maintenant. Et si tu y rencontres une gamine de neuf ans qui te demande l'heure... » La onzième entaille s'allume. « Donne-la-lui. »",
    ],
    choices: [{ label: "Entrer dans le mur", to: "K03j_paille" }] },
  K03j_paille: { act: "I", title: "Du foin neuf", place: "ferme", fx: { ep: ["histoire", 1500] },
    text: [
      "Cela tient en un pas, qui dure plus longtemps qu'un pas : le temps d'entendre, très loin, une grosse cloche sonner un coup, un seul, si grave qu'on le reçoit dans la poitrine. Puis ton pied trouve quelque chose de mou, tu tombes en avant, et tu as du foin dans la bouche.",
      "Tu restes où tu es. Il fait noir, d'un noir ordinaire, tiède, plein de bruits. Sous toi, de l'autre côté d'un plancher, une vache souffle et remue sa chaîne. Une souris court dans la paille. Dehors, un chien aboie, deux fois, et une voix d'homme lourde de sommeil lui crie : « Paix, Finaud ! »",
      "Tu te retournes. Le mur du fond est un mur, avec une faux pendue dans un cadre de pierre. Dans le montant de droite, la niche est vide. Tu as le sablier dans la main : tu ne te rappelles pas l'avoir repris. Il ne luit plus. Le sable, dedans, est devenu du sable.",
      "Tu écoutes la vache jusqu'au matin. Tu n'avais jamais rien entendu d'aussi vivant.",
    ],
    choices: [{ label: "Au petit jour, te glisser dehors et gagner la borne", to: "B03" }] },
});

// ======================================================================== the one who stays
Object.assign(P, {
  K03r_minuit: { act: "I", title: "Ce que le capitaine a vu", place: "ferme", fx: { surprend: "j_malade" },
    text: [
      { after: "r:porte_tenue", text: "Le vantail te cogne dans le dos à chaque coup d'épaule. Tu tiens, les talons plantés dans la terre battue, les bras en croix ; tu tiens le temps de trois coups, de quatre, et à travers le bois quelqu'un t'annonce avec précision ce qu'on te fera quand tu ne tiendras plus." },
      { after: "r:fausse_piste", text: "Tu sors en courant, les bras en l'air, et tu cries que la vieille a filé par le pré, vers le bois, qu'elle court comme un lièvre. Cinq lanternes partent de ce côté. Le capitaine ne bouge pas. Il te considère, écrit un mot, et marche droit sur la grange avec les dix qui restent : tu lui en as ôté cinq, et gagné le temps qu'ils mettent à comprendre." },
      { after: "r:couche", text: "Tu te couches à plat ventre dans le foin, les mains sur la nuque, comme il a dit. Tu vois des bottes passer à deux doigts de ta figure. Tu vois, sous le bras d'un garde, le fond de la grange, et tu ne peux plus regarder ailleurs." },
      "Le fond de la grange s'est éclairé de lui-même. La lueur sort du cadre, et des douze entailles du linteau, qui luisent comme luit ton sablier. Le mur s'en est retiré. À sa place il y a {autre}, de dos, déjà mince, déjà gris{autre:e}, à la façon des choses qu'on voit sous l'eau ; il y a un instant où {autre:il} est là et un instant où {autre:il} n'y est plus, et entre les deux une cloche sonne, très loin, un seul coup, que tu sens dans tes dents.",
      "Puis c'est un mur, avec une faux.",
      "Le capitaine Brassac est sur le seuil, son carnet à la main. Il a vu. Tu en es sûr{e}, parce qu'il n'écrit pas : pour la première fois, cet homme a devant lui une chose qu'il ne sait pas dans quelle colonne mettre.",
      "Line rit. C'est un vrai rire, de triomphe, qui se casse au milieu et devient une toux, longue, qui la plie en deux. Quand elle se redresse, son châle est rouge sur le devant, d'un rouge noir à la lueur des lanternes. Elle voit que tu l'as vu. Elle hausse une épaule, comme pour une bricole.",
    ],
    choices: [{ label: "Rester près d'elle", to: "K03r_brassac" }] },
  K03r_brassac: { act: "I", title: "Madame Noyer", place: "ferme",
    text: [
      "« Madame Noyer. » Brassac a retrouvé sa voix, à un cran près. « Vous êtes à la Régence, vous, votre maison et ce que vous portez. Fouillez-la. Il y a un cahier. »",
      "Ils la fouillent, avec des égards, parce qu'elle tousse. Ils trouvent une clef, un mouchoir, une loupe, un dé à coudre. Brassac regarde ces objets dans la main du caporal. « Il vous attend à Arvoise, madame. Le Maître des Sables en personne, dans quatre jours. Il tient beaucoup à vous entendre. »",
      "« Melchior ? » Line s'essuie la bouche. « Il me doit une réponse depuis quarante ans. Dites-lui que je suis une vieille femme, et que je n'ai plus la patience d'attendre les siennes. »",
      { after: "r:couche", text: "Le capitaine se tourne vers toi et laisse tomber dans le foin, près de ta main, cinq écus, un par un. « Tu as fait ta part. J'ai rayé ton nom. » Le Cahier est sous ta veste, contre ton ventre, tiède. Personne ne fouille un glaneur qu'on vient de payer." },
      { before: "r:couche", text: "Le capitaine se tourne vers toi. « Et celui-là, aux fers. Il a un sac. Je veux voir le sac. » Le Cahier est sous ta veste, contre ton ventre, tiède." },
      "Line te regarde par-dessus l'épaule d'un garde. Elle remue à peine les lèvres. *La borne. Au jour.* Puis, tout haut, au capitaine, en lui prenant le bras avec une familiarité qui le pétrifie : « Aidez-moi donc, jeune homme, vous voyez bien que je vais tomber. » Et elle tombe, en effet, de tout son poids, sur la lanterne du caporal.",
    ],
    choices: [
      { label: "Ramasser les cinq écus, et sortir à reculons pendant qu'on la relève", hide: { not: { has: "r:couche" } }, fx: { gold: 5, flag: "r:dix_ecus" }, to: "K03r_fuite" },
      { label: "Laisser les écus dans le foin, et sortir pendant qu'on la relève", hide: { not: { has: "r:couche" } }, fx: { flag: "r:ecus_laisses" }, to: "K03r_fuite" },
      { label: "Filer dans le noir, vers le fond des prés", hide: { has: "r:couche" }, test: { dom: "discretion", diff: 0, label: "Discrétion", help: [{ if: { voie: "leste" }, v: 10 }, { if: { voie: "coureur" }, v: 10 }, { if: { has: "r:fausse_piste" }, v: 10 }] },
        win: { fx: { ep: ["perso", 500] }, to: "K03r_fuite" }, lose: { fx: { pv: -2 }, to: "K03r_fuite" } },
    ] },
  K03r_fuite: { act: "I", title: "Plus avant", place: "ferme", fx: { ep: ["histoire", 1500] },
    text: [
      { outcome: "lose", text: "Une main t'attrape par le sac. Tu laisses la bretelle, puis un morceau de manche, puis de la peau ; un plat de sabre te cueille aux reins quand tu passes le portail, entre les deux noyers." },
      "Tu ne cours pas vers le village. Tu cours de l'autre côté, vers le dedans, là où un glaneur va quand il veut qu'on le laisse : la Garde compte son sable à la pincée, et ne le dépense pas pour un sac.",
      "Passé le fournil, tu t'accroupis derrière un mur. On emmène Line. Ils l'ont assise sur deux hallebardes croisées, parce qu'elle ne marche plus ; elle a croisé son châle sur le rouge, et, du haut de son brancard, elle fait à la cour de sa ferme, aux deux noyers et à la souche, un petit signe de la main, de ceux qu'on fait par la portière. Le capitaine reste le dernier. Il regarde longtemps la grange. Puis il fait clouer une planche en travers de la porte, et il poste quatre hommes.",
      "La route royale est à vingt toises, blanche sous la lune. Sa borne penche, à l'angle du verger. Tu t'y adosses, tu ramènes tes genoux, et tu attends le jour en comptant ce qui reste dans le col du sablier.",
    ],
    choices: [{ label: "Au jour, ouvrir le Cahier", fx: { stock: { sable: -1 } }, to: "B03" }] },
});

module.exports = { passages: P, extras: {} };
