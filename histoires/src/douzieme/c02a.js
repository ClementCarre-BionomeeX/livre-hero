// Le Douzième Coup · chapter 2, first half (act I, the day before the night: the village of the Trois-Noyers being
// emptied). One street, read by both players, each in their own words (`if: J` / `if: R`). The morning's errand is a
// role (`matin:fil` at la Goton's, `matin:clef` at the church); the rest is open to both: the inn, the dealer's cart,
// the sergeant's register. The second half (c02b.js) holds old Lubin, Pierrot's goat, the Watchers' shrine and the
// afternoon with Line.
var J = { has: "role:passe" }, R = { has: "role:reste" };
var P = {};

// ======================================================================== the street
Object.assign(P, {
  K02_place: { act: "I", title: "La rue des Trois-Noyers", backName: "la rue des Trois-Noyers", place: "troisnoyers", hub: true,
    text: [
      { first: true, text: "À huit heures, la rue des Trois-Noyers ressemble à un grenier qu'on aurait vidé par la fenêtre. Il y a des lits debout contre les murs, des pétrins, des rouets, un berceau plein d'oignons. Sur la place, sous les trois noyers qui ont donné leur nom au village et qui vont le garder pour eux, le sergent a fait porter une table où il inscrit les partants." },
      { first: true, text: "Tout le village tient dans cette rue. L'église est au bout d'en haut, avec son affiche. L'auberge du Cadran sans Aiguille est au milieu, devant le puits. La maison de Line est au bout d'en bas, volets clos ; après elle viennent la maison du père Lubin, le pré communal, puis les jalons rouges de la Garde. Après les jalons, c'est une affaire de trois cents toises." },
      { first: true, if: J, text: "On te salue au passage, d'un mot, d'un coup de menton. Tu as réglé toutes les pendules de cette rue ; tu sais dans quelle maison l'on se lève tôt, et dans laquelle on fait semblant." },
      { first: true, if: R, text: "Personne ne te salue. On te compte : une ménagère rentre son linge, un vieux déplace son tabouret de façon à garder l'œil sur toi et sur sa brouette à la fois. Tu marches au milieu de la rue, les mains bien visibles, comme on traverse une cour où il y a un chien." },
      { again: true, before: "M02", text: "La rue, les charrettes, les trois noyers. L'ombre du clocher a tourné d'un cran sur la place." },
      { again: true, after: "M02", text: "L'après-midi, la rue s'est vidée d'un tiers. Les premières charrettes ont pris vers midi la route de Vauxelles-le-Neuf ; celles qui restent ont l'air plus pressées, et l'on a cessé de plier le linge avant de le charger." },
    ],
    choices: [
      { label: "La maison aux draps, chez la Goton", to: "K02_goton", hide: { any: [{ not: { has: "matin:fil" } }, { has: "fil:fait" }] }, big: true },
      { label: "L'église, où le bedeau emballe les saints", to: "K02_eglise", hide: { any: [{ not: { has: "matin:clef" } }, { has: "clef:fait" }] }, big: true },
      { label: "L'auberge du Cadran sans Aiguille", to: "K02_auberge" },
      { label: "La table du sergent, sous les noyers", to: "K02_sergent" },
      { label: "La dernière maison avant les prés : le père Lubin", role: "lubin", option: "moi", to: "K02_lubin", hide: { quest: "I_lubin" } },
      { label: "Le pré communal, où un gamin crie après une chèvre", role: "chevre", option: "moi", to: "K02_pierrot", hide: { any: [{ has: "chevre:sauvee" }, { has: "chevre:perdue" }] } },
      { label: "Le reposoir des Veilleurs, au bout de la rue", to: "K02_orable" },
      { label: "La charrette de Thomasse, pour lui remettre le portrait", to: "K02_thomasse", if: R, hide: { any: [{ not: { item: "portrait" } }, { quest: "I_portrait" }] } },
      { label: "Midi approche : porter à Line ce que tu lui as promis", to: "M02", if: { any: [{ has: "fil:fait" }, { has: "clef:fait" }] }, why: "Line attend ce que tu lui as promis ce matin.", hide: { seen: "M02" }, big: true },
      { label: "L'établi de Line, où elle coud les Cahiers", to: "K02_couture", hide: { any: [{ not: { has: "tantot:couture" } }, { has: "tantot:fait" }] }, big: true },
      { label: "Descendre vers les jalons reconnaître le chemin de cette nuit", to: "K02_lisiere", hide: { any: [{ not: { has: "tantot:lisiere" } }, { has: "tantot:fait" }] }, big: true },
      { label: "Le soir vient : pousser la porte de l'horlogère", to: "B02", if: { has: "tantot:fait" }, why: "Il te reste à faire ce dont tu t'es chargé{e} à midi.", hide: { not: { seen: "M02" } }, big: true },
    ] },
});

// ======================================================================== the grey thread (the one sent to la Goton)
Object.assign(P, {
  K02_goton: { act: "I", title: "La maison aux draps", place: "troisnoyers", fx: { meet: "goton" },
    text: [
      "La maison aux draps se reconnaît de loin. La Goton a tendu des cordes de sa fenêtre au noyer du charron, et douze draps y sèchent, qu'elle a lavés ce matin pour les emporter propres. Elle a quatre-vingt-quatre ans. Elle est assise au milieu, sur un coffre, comme un général sous ses drapeaux.",
      "C'est elle qui coud les morts des Trois-Noyers. Elle a fait cela soixante ans, et les accouchements par-dessus le marché, de sorte que toute la paroisse lui est passée deux fois par les mains : en arrivant, et en partant. Elle te regarde venir avec l'intérêt d'une personne du métier.",
      "« Le fil gris de l'Adeline. » Elle n'a pas attendu ta question ; à son âge, on gagne du temps où l'on peut. « Je l'ai eu, je ne l'ai plus. Il a servi. Tu lui diras cela, et qu'elle n'avait qu'à le réclamer du vivant de mon mari. »",
      { if: J, text: "Elle te prend le menton entre deux doigts secs et te tourne la tête vers le jour. « Toi, tu loges chez l'horlogère. C'est drôle. J'ai déjà vu cette figure-là quelque part, il y a longtemps. » Elle te lâche. « Remarque, à mon âge, on a tout vu quelque part. »" },
      { if: R, text: "« Toi, tu es de la bande aux noisetiers. Reste où je te vois, les mains hors des poches. D'où es-tu, avant ? » Tu dis Roquebise. Elle se tait, le temps qu'un drap claque. « Roquebise. J'y suis née. J'y ai dansé à la noce de ma sœur Ysabeau, l'année du Grand Midi ; j'avais vingt-quatre ans et des souliers rouges. » Elle ôte la main qu'elle tenait sur sa bourse. « Assieds-toi, pays. »" },
    ],
    choices: [{ label: "« Servi à quoi ? »", to: "K02_goton_drap" }] },
  K02_goton_drap: { act: "I", title: "Le coffre", place: "troisnoyers",
    text: [
      "La Goton se lève en trois temps et ouvre le coffre. Dedans, plié en huit, sentant la lavande, il y a un drap de lin fin comme une nappe d'autel. C'est son linceul. Elle l'a cousu elle-même il y a vingt ans, « pour être sûre de l'ouvrage », et brodé au point de tige : les douze Heures tout autour, et au milieu son nom, *Marguerite Hureau, née le troisième jour de mai de l'an 517, morte le*, suivi d'un blanc. Elle a laissé la place, comme on laisse une ligne à remplir par l'administration.",
      "« L'ourlet, dit-elle. Je l'ai fait au fil de l'Adeline, tout le tour. C'est le plus beau fil que j'aie tenu : il ne casse jamais, il reste clair, et la nuit, quand j'ouvre le coffre... » Elle referme le coffre et se rassoit dessus. « On ne découd pas un linceul. Ça porte malheur, et à mon âge le malheur n'a plus loin à courir pour me rattraper. »",
    ],
    choices: [
      { label: "Lui dire pourquoi Line en a besoin cette nuit", test: { dom: "social", diff: 0, label: "Social", help: [{ if: { voie: "diseur" }, v: 10 }, { if: { voie: "heurier" }, v: 10 }] },
        win: { fx: { flag: "goton:donne", ep: ["perso", 300] }, to: "K02_goton_dire" }, lose: { to: "K02_goton_marche" } },
      { label: "Offrir de lui recoudre l'ourlet au fil blanc, point pour point", to: "K02_goton_coudre" },
      { label: "Parler de la pluie, et attendre que le soleil l'endorme", test: { dom: "discretion", diff: 0, label: "Discrétion", help: [{ if: { voie: "leste" }, v: 15 }] },
        win: { fx: { flag: "goton:volee" }, to: "K02_goton_somme" }, lose: { fx: { pv: -1, flag: "goton:battoir" }, to: "K02_goton_marche" } },
    ] },
  K02_goton_dire: { act: "I", title: "Ce que l'Adeline n'a jamais demandé", place: "troisnoyers",
    text: [
      { if: J, text: "Tu lui dis ce qui peut se dire dans une rue : que Line veut coudre deux cahiers avant la nuit, que cela regarde la Dormante, et qu'elle y travaille depuis soixante ans." },
      { if: R, text: "Tu lui dis ce que tu sais, qui est peu : que la vieille va cette nuit à la ferme où elle est née, qu'il lui faut ce fil pour y aller, et qu'une femme qui garde un fil en compte pendant des années a ses raisons." },
      "La Goton t'écoute sans cligner. « L'Adeline n'a jamais rien demandé à personne. Ni un coup de main, ni un mari, ni l'heure. Si elle redemande un fil prêté, c'est que le monde va finir, ou qu'il va recommencer. » Elle tend la main, paume ouverte. « Passe-moi mes ciseaux. Dans le panier, sous les pinces. »",
      "Elle découd son linceul elle-même, à petits coups, en tirant le fil gris entre le pouce et l'index, et elle l'enroule à mesure sur un os de poulet qui lui sert de bobine. « Je m'en irai dans un drap sans ourlet. Là où je vais, on regarde peu aux finitions. »",
    ],
    choices: [{ label: "Tenir le drap pendant qu'elle tire", to: "K02_goton_fil" }] },
  K02_goton_marche: { act: "I", title: "Le marché de la Goton", place: "troisnoyers",
    text: [
      { after: "goton:battoir", text: "La Goton avait fermé les yeux. Elle les rouvre à l'instant où ta main touche le couvercle, et son battoir à linge, qu'elle gardait le long de sa jupe, t'arrive sur les doigts avec une justesse de soixante ans de lessive." },
      "« Des raisons, tout le monde en a. Moi, j'ai un linceul. » Elle te regarde de bas en haut, puis elle regarde tes mains. « Montre. Tourne. Tu sais tenir une aiguille ? Alors voilà mon marché. Tu me défais cet ourlet et tu me le refais au fil blanc, aussi fin, aussi droit. Si je trouve un point plus long que l'autre, je garde tout. »",
    ],
    choices: [{ label: "Accepter le marché", to: "K02_goton_coudre" }] },
  K02_goton_coudre: { act: "I", title: "Les volets clos", place: "troisnoyers",
    text: [
      "Elle te fait entrer, étaler le linceul sur la table, et fermer les volets. « Tu verras mieux. »",
      "Dans le noir, le drap disparaît. Il en reste le tour : un trait mince, d'un gris de perle, qui luit tout seul et dessine sur la table un rectangle parfait, de la taille d'une personne couchée.",
      { if: J, text: "Tu as vu cette lueur ce matin, sous un verre retourné, dans le sablier de Line. Le fil a trempé dans le même sable." },
      { if: R, text: "Tu connais cette lueur. C'est celle des sabliers de corne, la nuit, dans la lisière, quand on les sort pour compter ce qui reste." },
      "« Vingt ans que je dors au-dessus de ça, dit la Goton derrière toi. Les nuits sans lune, j'ouvre le coffre pour y voir clair jusqu'au pot. » Elle te met une aiguille dans la main. « Allez. Découds petit, recouds petit. »",
    ],
    choices: [
      { label: "Découdre, et recoudre au fil blanc", test: { dom: "discretion", diff: 0, label: "Doigts", help: [{ if: { voie: "rouage" }, v: 10 }, { if: { voie: "heurier" }, v: 10 }, { if: { voie: "leste" }, v: 5 }, { if: { item: "trousse" }, v: 5 }] },
        win: { fx: { flag: "goton:cousu", ep: ["perso", 300] }, to: "K02_goton_fil" }, lose: { to: "K02_goton_fil" } },
    ] },
  K02_goton_somme: { act: "I", title: "Le sommeil des justes", place: "troisnoyers",
    text: [
      "Tu parles du temps qu'il fera à Vauxelles-le-Neuf, de la cherté des charrettes, du curé. La Goton répond de plus en plus tard, puis de plus en plus bas, puis par un petit sifflement du nez. Le soleil est sur ses mains. Les draps font autour de vous une chambre blanche.",
      "Tu la soulèves du coffre comme on déplace une poule qui couve : d'un seul geste, sans à-coup, en la reposant sur le banc. Elle soupire et ne s'éveille pas. Le linceul est sous une couche de lavande. Tu tires le fil gris de l'ourlet par longueurs d'un bras, vite, en l'enroulant sur ton poignet. Quand tu replies le drap, ses bords pendent, effilochés, autour des douze Heures.",
      "Tu refermes le coffre. Tu la rassois dessus. Elle dort toujours, la bouche un peu ouverte, gardant de tout son poids un linceul défait.",
    ],
    fx: { flag: "fil:fait", regard: { goton: "trahi" } },
    choices: [{ label: "Filer entre les draps", back: "K02_place" }] },
  K02_goton_fil: { act: "I", title: "Douze brasses de fil gris", place: "troisnoyers", fx: { flag: "fil:fait" },
    text: [
      { after: "goton:cousu", text: "Tu défais, tu refais. L'aiguille entre et sort au ras de la broderie, à points serrés, et quand tu rouvres les volets la Goton promène son ongle le long de l'ourlet, tout le tour, en silence. Arrivée au bout, elle recommence dans l'autre sens. « Qui t'a appris ? » Elle n'attend pas la réponse. « Peu importe. Tu coudras le mien de linceul, le jour venu, si tu es dans le pays. C'est un compliment. »" },
      { outcome: "lose", text: "Tu défais proprement. Pour refaire, c'est une autre histoire : au bout d'une aune, la Goton te retire le drap des mains. « Des points de bourrelier. On coud une selle, comme ça, on ne coud pas une chrétienne. » Elle reprend l'ouvrage elle-même, en t'injuriant avec méthode, et te charge d'enfiler les aiguilles, ce que ses yeux ne font plus. À vous deux, vous avez fini avant onze heures." },
      "Le fil gris est enroulé sur un os de poulet : douze brasses, peut-être treize. Au jour, c'est un fil comme un autre, un peu raide, d'un gris de vieille cendre. Dans le creux de la main, il est tiède.",
      { if: { not: { has: "goton:volee" } }, text: "« Tu diras à l'Adeline que la Goton lui pardonne les dragées, dit la vieille en te raccompagnant jusqu'au premier drap. Elle comprendra. Ou elle fera celle qui a oublié, ce qui revient au même. »" },
    ],
    choices: [{ label: "Regagner la rue", back: "K02_place" }] },
});

// ======================================================================== the key (the one sent to the church)
Object.assign(P, {
  K02_eglise: { act: "I", title: "L'église des Trois-Noyers", place: "troisnoyers", fx: { meet: "anicet" },
    text: [
      "L'église a un clocher carré coiffé d'ardoise et une horloge à une seule aiguille, qui retarde depuis toujours. L'affiche de la Régence est clouée sur la porte. Quelqu'un, dans la nuit, a dessiné dessous au charbon un sablier renversé qui se vide dans une bourse.",
      "Dans la nef, le bedeau emballe les saints. Il y en a onze, un par Heure, en bois peint, et il les couche l'un après l'autre dans une charrette pleine de paille, les pieds devant, sainte Aure en tête. La douzième niche est vide, comme dans toutes les églises d'Aurime ; de celle-là, il emporte le rideau.",
      "Le curé est parti hier, le premier, « afin de préparer l'accueil des fidèles ». Il a pris le ciboire, les registres et le tronc. Il a laissé les saints, qui sont lourds.",
      "Le bedeau s'appelle Anicet. Soixante-douze ans, long, maigre, voûté par un demi-siècle d'escaliers. Par la porte de la sacristie, derrière lui, on voit une casaque noire assise sur le coffre aux chasubles : un caporal de la Garde, qui pointe des clefs sur une liste, une à une, en remuant les lèvres.",
    ],
    choices: [{ label: "« Je viens de la part de Line. »", to: "K02_bedeau" }] },
  K02_bedeau: { act: "I", title: "Quatre-vingt-seize marches", place: "troisnoyers",
    text: [
      "Anicet jette un œil vers la sacristie, et répond beaucoup plus fort qu'il n'est nécessaire dans une église vide : « L'horloge ! Bien sûr que l'Adeline envoie pour l'horloge. Il faut la remonter une dernière fois avant de partir. Question de décence : on ne laisse pas une horloge s'arrêter toute seule. »",
      "Puis, entre ses dents, en bourrant de paille les pieds de saint Gnomon : « Quatre-vingt-seize marches. Mes genoux en font douze. Monte. Remonte le poids jusqu'en haut de sa caisse, et quand il y sera, passe la main derrière la poulie. J'y ai mis au mois de mars ce qu'on m'a demandé d'y mettre. »",
      "« Le capitaine a eu trente et une clefs ce matin. Il en voulait trente-deux. Il sait compter, c'est le malheur de cet homme. »",
    ],
    choices: [
      { label: "« Pourquoi l'avoir cachée dès le mois de mars ? »", to: "K02_bedeau_line", hide: { seen: "K02_bedeau_line" } },
      { label: "Monter au clocher", to: "K02_clocher" },
    ] },
  K02_bedeau_line: { act: "I", title: "Un demi-quart d'heure par mois", place: "troisnoyers", fx: { flag: "anicet:aveu" },
    text: [
      "« Parce qu'elle me l'a demandé. On ne demande pas pourquoi à l'Adeline. J'ai essayé une fois, à la Saint-Jean de 564, sur un autre sujet. J'attends toujours la fin de la réponse. »",
      "Il cale saint Gnomon entre deux bottes de paille et s'essuie les mains à son tablier. « Cette horloge retarde d'un demi-quart d'heure par mois. Depuis quarante ans. Chaque mois, l'Adeline monte la régler, en disant qu'une paroisse qui a une horlogère et une horloge fausse est la risée du canton. Elle y passe une heure. Elle redescend. Elle me dit bonsoir. »",
      "Il regarde le clocher à travers la voûte, comme si elle était de verre. « C'est moi qui la retarde. Le premier dimanche de chaque mois, d'un cran sur la roue de compte. » Un silence. « Tu garderas cela pour toi. Ou tu le lui diras quand ma charrette aura passé le pont : j'aimerais autant être loin. »",
    ],
    choices: [{ label: "Monter au clocher", to: "K02_clocher" }] },
  K02_clocher: { act: "I", title: "La chambre de l'horloge", place: "troisnoyers",
    text: [
      "« Où va cette graine-là ? » lance le caporal, de son coffre. « Remonter l'horloge, caporal, répond Anicet. À moins que la Régence ait aussi réquisitionné l'heure. » La casaque noire grogne, se lève, et vient se planter au pied de l'escalier. « Je fouille à la descente. Ce qui est dans cette église est au roi. »",
      "Quatre-vingt-seize marches de chêne, creusées au milieu par les sabots de dix bedeaux. La chambre de l'horloge est sous les cloches : une cage de fer forgé haute comme un homme, pleine de roues noires.",
      { if: J, text: "Tu la connais par cœur. C'est une horloge à foliot, plus vieille que Line, que tu graisses chaque année à la Saint-Michel ; elle bat lentement, avec un bruit de boiterie. Tu regardes la roue de compte. Une des chevilles est plus brillante que les autres, usée par un pouce." },
      { if: R, text: "Tu n'avais jamais vu le dedans d'une horloge. C'est une bête de fer, avec des dents, qui respire à grands coups espacés ; chaque fois qu'elle avance d'un cran, tout le plancher le sent. Tu t'étonnes qu'il faille tant de ferraille pour dire une chose que les coqs savent tout seuls." },
      "La manivelle est froide et lourde. Le poids, un bloc de pierre cerclé, monte dans sa caisse de planches, tour après tour, jusqu'à buter. Tu passes la main derrière la poulie. Tes doigts rencontrent un chiffon gras, et dans le chiffon une clef longue comme la main, en fer battu, dont l'anneau a la forme d'une feuille de noyer.",
    ],
    choices: [{ label: "Regarder par les abat-son, du côté des prés", to: "K02_clocher_vue" }] },
  K02_clocher_vue: { act: "I", title: "Ce qu'on voit du clocher", place: "troisnoyers", fx: { flag: "route:clocher" },
    text: [
      "Par les lames des abat-son, on voit tout le pays. Du côté du couchant, c'est une campagne ordinaire : des champs, la route de Vauxelles avec sa file de charrettes, de la poussière, des gens.",
      "Du côté du levant, les prés communaux descendent en pente douce, d'un vert de mai, pendant trois cents toises. Puis le vert change. Cela se fait sans fossé, sans ligne tracée ; l'herbe prend simplement un ton plus sourd, comme une étoffe vue du côté de l'envers, et tout ce qui est au-delà a ce ton-là. Les haies l'ont. Les pommiers l'ont, qui sont en fleurs depuis Pâques sans qu'un seul pétale en soit tombé. À la métairie des Aulnes, une fumée sort d'une cheminée, toute droite, et reste où elle est.",
      "Les hirondelles viennent jusqu'au changement et virent, toutes au même endroit, comme devant une vitre. Plus loin, à une demi-lieue, trois toits de tuile et un quatrième, plus haut, de pierre grise : la Ferme-Vieille et sa grange. Plus loin encore, la route royale s'en va vers l'est entre ses bornes, droite, blanche, vide, jusqu'à une butte, et au-delà de la butte le bas du ciel a une clarté grise et fixe, qui est à la place où l'on met Méridane sur les cartes. Tu as beau savoir ce que c'est : on jurerait que quelque chose, de là-bas, regarde par ici.",
      "Tu t'obliges à regarder plus près. Sur la ligne des jalons rouges, la Garde a trois piquets : un à la croisée du chemin de la ferme, un au gué, un à la corne du bois. Entre le gué et le bois, la haie du pré Bastien fait un coude où l'on ne voit pas un homme debout, sur cent pas. Tu mets la clef dans ta chemise, et le coude de la haie dans ta mémoire.",
    ],
    choices: [{ label: "Redescendre : le caporal attend en bas", to: "K02_clocher_descente" }] },
  K02_clocher_descente: { act: "I", title: "La fouille", place: "troisnoyers",
    text: [
      "À mi-escalier, tu entends les bottes du caporal sur la première marche. Il ne monte pas ; il attend, ce qui est pire. Une clef longue comme la main fait, dans une chemise, une bosse que l'on prendrait difficilement pour autre chose.",
    ],
    choices: [
      { label: "Remonter, et laisser tomber la clef par l'abat-son dans les orties du cimetière", fx: { pv: -1, flag: "clef:orties" }, to: "K02_clef" },
      { label: "La glisser sous ton pied, dans ton soulier, et descendre en boitant un peu", hide: R, test: { dom: "discretion", diff: 0, label: "Discrétion", help: [{ if: { voie: "leste" }, v: 15 }] },
        win: { fx: { ep: ["perso", 300] }, to: "K02_clef" }, lose: { to: "K02_clocher_statue" } },
      { label: "La nouer dans tes cheveux, sous ton bonnet, et descendre les mains ouvertes", hide: J, test: { dom: "discretion", diff: 0, label: "Discrétion", help: [{ if: { voie: "leste" }, v: 15 }] },
        win: { fx: { ep: ["perso", 300] }, to: "K02_clef" }, lose: { to: "K02_clocher_statue" } },
      { label: "Descendre la burette à la main, et lui expliquer l'horloge jusqu'à ce qu'il demande grâce", test: { dom: "social", diff: 0, label: "Social", help: [{ if: { voie: "rouage" }, v: 15 }, { if: { voie: "diseur" }, v: 10 }] },
        win: { fx: { ep: ["perso", 300] }, to: "K02_clef" }, lose: { to: "K02_clocher_statue" } },
    ] },
  K02_clocher_statue: { act: "I", title: "Saint Gnomon", place: "troisnoyers", fx: { flag: "anicet:statue" },
    text: [
      "La main du caporal se ferme sur ta manche. « Doucement. Qu'est-ce que tu as là ? »",
      "Dans la nef, quelque chose de très lourd rencontre le dallage, avec le bruit que fait un saint de chêne tombant de quatre pieds. Le caporal te lâche. Les saints sont au roi, ils sont sur sa liste, et il en manque un à l'appel : il court.",
      "Saint Gnomon gît en trois morceaux au pied de la charrette, et son cadran a roulé sous un banc. Anicet contemple le désastre avec une consternation très bien faite. Quand tu passes derrière lui, il dit sans remuer les lèvres : « Cinquante ans que je le porte à la procession. Il a toujours été trop lourd pour ce qu'il faisait. »",
    ],
    choices: [{ label: "Sortir pendant que le caporal ramasse le saint de midi", to: "K02_clef" }] },
  K02_clef: { act: "I", title: "La clef à la feuille de noyer", place: "troisnoyers", fx: { flag: "clef:fait" },
    text: [
      { after: "clef:orties", text: "Le caporal te retourne les poches, te fait ôter tes chaussures, secoue ton bonnet, et trouve une burette d'huile. Il a l'air d'un homme à qui l'on doit quelque chose. Dehors, tu contournes le chevet. La clef est dans les orties du cimetière, entre deux tombes d'avant le Bond, et les orties des Trois-Noyers tiennent à ce qu'on leur confie." },
      { before: "clef:orties", text: "Dehors, sous le porche, tu respires. La clef est contre ta peau, froide, lourde, avec sa feuille de noyer qui te marque la poitrine." },
      "C'est une clef de grange comme il y en a dans toutes les fermes, à ceci près qu'elle est plus vieille que le fer dont on fait les clefs aujourd'hui. Le panneton porte trois dents inégales. Sur la tige, on a gravé douze traits, et le douzième est plus long.",
    ],
    choices: [{ label: "Regagner la rue", back: "K02_place" }] },
});

// ======================================================================== the inn and the dealer's cart
Object.assign(P, {
  K02_auberge: { act: "I", title: "Au Cadran sans Aiguille", backName: "la salle du Cadran sans Aiguille", place: "troisnoyers", taverne: { mise: 1, adversaire: "un roulier qui attend son chargement" },
    text: [
      { first: true, text: "L'enseigne est un cadran d'horloge peint sur tôle, avec ses douze chiffres et rien au milieu. Le grand-père de l'aubergiste l'a fait peindre ainsi l'année qui a suivi le Grand Midi, estimant qu'il n'y avait plus d'heure à donner. Line appelle cela de la paresse érigée en philosophie." },
      { first: true, text: "Maître Gonthier vend tout. Les bancs, les brocs, le jambon, la crémaillère : chaque objet de la salle porte un prix à la craie, et lui-même circule au milieu, rouge, en nage, répétant que tout doit partir sauf la patronne, et encore, qu'on lui fasse une offre." },
      { first: true, if: R, text: "D'ordinaire, on sert les glaneurs à la porte de derrière, au double du prix. Aujourd'hui tout doit partir, et tes écus valent ceux des autres. Gonthier te désigne un banc, lui-même à vendre, d'un geste presque aimable." },
      { again: true, text: "Dans la salle du Cadran sans Aiguille, on a vendu deux bancs de plus. Les buveurs restants tiennent leur chope à la main, faute de savoir où la poser." },
    ],
    choices: [
      { label: "Voir ce qui se vend au comptoir", to: "K02_auberge_comptoir" },
      { label: "Écouter ce qui se dit aux tables", to: "K02_auberge_rumeurs", hide: { seen: "K02_auberge_rumeurs" } },
      { label: "La cour, où le brocanteur a rangé sa charrette", to: "K02_brocanteur" },
      { back: "K02_place" },
    ] },
  K02_auberge_comptoir: { act: "I", title: "Tout doit partir", place: "troisnoyers", shop: "i_cadran",
    text: [
      "Sur le comptoir, Gonthier a aligné ce que les partants ne peuvent pas charger et ce que les restants pourraient vouloir. Il n'y a pas de restants, en principe. Il a mis les prix quand même.",
    ],
    choices: [{ back: "K02_auberge" }] },
  K02_auberge_rumeurs: { act: "I", title: "Ce qui se dit au Cadran", place: "troisnoyers",
    text: [
      "On parle bas, comme dans une maison où il y a un malade. Un roulier de Port-Régent, qui attend son chargement, tient le dé de la conversation : il a vu du pays, c'est-à-dire la route.",
      "« La Régente monte à Méridane pour le Grand Midi. Comme tous les ans, pour son Serment devant la reine qui dort ; seulement cette année, c'est le soixantième, alors il y aura la cour, les évêques, tout le tremblement. Deux cents personnes dans la Dormante, avec du sable plein les poches. Vous savez ce que ça coûte, deux cents personnes en sable, pour neuf jours ? » Personne ne le sait. Lui non plus ; il hoche la tête comme s'il le savait.",
      "« Et c'est pour ça que la pincée est à un écu, quand on en trouve. La Maîtrise ramasse tout. Ils ont un camp à Arvoise, sur le fleuve, avec des cuves. On dit que le Maître des Sables y vient en personne cette semaine. » Il baisse encore la voix. « Je l'ai vu une fois, à Port-Régent, descendre de voiture. Un bel homme, pas quarante-cinq ans. Mon père l'avait vu au même endroit, à l'âge que j'ai. Il le décrivait pareil. »",
      "Quelqu'un dit que c'était le père, alors, et le fils maintenant. « Sûrement », dit le roulier, et il boit.",
    ],
    choices: [{ back: "K02_auberge" }] },
  K02_brocanteur: { act: "I", title: "La charrette de maître Babolin", place: "troisnoyers", fx: { meet: "babolin" },
    text: [
      { first: true, text: "Dans la cour de l'auberge, une charrette bâchée, peinte en jaune, attelée d'une mule philosophe. Maître Babolin suit les évacuations comme d'autres suivent les foires : il achète à ceux qui partent ce qu'ils ne peuvent emporter, et le revend, trois villages plus loin, à ceux qui arrivent sans rien. Il dit qu'il rend service deux fois. Il prend sa commission les deux fois aussi." },
      { first: true, text: "Sa bâche relevée découvre le mobilier de quinze paroisses : des horloges sans poids, des portraits d'aïeux à vendre au cadre, une pile de bénitiers. Épinglée au montant, sous verre, une gravure jaunie : *Le Grand Midi de l'an 541, d'après un témoin.*" },
      { again: true, text: "Maître Babolin compte ses bénitiers. La mule te reconnaît et n'en tire aucune conclusion." },
    ],
    choices: [
      { label: "Regarder la gravure de près", to: "K02_gravure", hide: { seen: "K02_gravure" } },
      { label: "Lui remettre les cuillers et la timbale, au compte de la Courtepaille", if: { item: "cuillers" }, hide: { not: { item: "cuillers" } }, fx: { drop: "cuillers", flag: "r:cuillers_livrees" }, to: "K02_broc_cuillers" },
      { label: "Lui vendre les cuillers pour ton propre compte", if: { item: "cuillers" }, hide: { not: { item: "cuillers" } }, fx: { drop: "cuillers", gold: 3, flag: "r:cuillers_gardees" }, to: "K02_broc_cuillers" },
      { back: "K02_auberge" },
    ] },
  K02_gravure: { act: "I", title: "D'après un témoin", place: "troisnoyers",
    text: [
      "C'est une taille-douce de la largeur de deux mains, tirée sur un papier qui a bruni. Le graveur a tout mis : la Tour des Heures au milieu, avec son cadran où les deux aiguilles se joignent ; la place noire de monde, les chapeaux en l'air, les bannières des métiers ; au balcon du palais, une dame couronnée qui tient une enfant par la main.",
      "Sur les marches de la Tour, il y a de petites figures que le burin a faites en quatre traits : des gardes, la hallebarde haute. Entre eux, une figure plus petite, tête nue, qui court vers la porte. Le graveur lui a donné des habits qu'il n'a donnés à personne d'autre sur la planche.",
      "« Un écu, dit Babolin par-dessus ton épaule. Le témoin est mort, la planche est perdue, et dans neuf jours tout le monde en voudra une : soixante ans, c'est un compte rond. Ça tient à plat dans un livre. »",
    ],
    choices: [
      { label: "L'acheter", if: { gold: { min: 1 } }, fx: { gold: -1, item: "gravure" }, back: "K02_brocanteur" },
      { label: "La lui laisser", back: "K02_brocanteur" },
    ] },
  K02_broc_cuillers: { act: "I", title: "De l'argent de fermier", place: "troisnoyers",
    text: [
      { after: "r:cuillers_livrees", text: "Babolin pèse, mord, fait la moue, et inscrit quatre écus dans un carnet graisseux, à la page de la Courtepaille, qui est longue. « Tu lui diras que c'est de l'étain argenté et qu'elle le sait. Tu lui diras aussi que je passe le fleuve avant la fin de la semaine, et que je ne ferai plus crédit de ce côté-ci. »" },
      { after: "r:cuillers_gardees", text: "« Pour ton compte à toi ? » Babolin a un sourire qui ne s'engage à rien. Il pèse, mord, et te met trois écus dans la main, un de moins qu'à la Courtepaille : c'est le prix du silence, qu'il vend comme le reste. « Je ne t'ai pas vu{e}. Je ne vois jamais personne, c'est ce qui fait ma clientèle. »" },
    ],
    choices: [{ back: "K02_brocanteur" }] },
});

// ======================================================================== the sergeant's register
Object.assign(P, {
  K02_sergent: { act: "I", title: "Le registre du sergent Maillefer", backName: "la table du sergent", place: "troisnoyers", fx: { meet: "maillefer" },
    text: [
      { first: true, text: "Le sergent de la paroisse s'appelle Maillefer. Il a soixante ans, une écharpe qui a servi à trois sergents plus gros que lui, et une table sous les noyers, où il tient le registre des âmes. La Régence veut savoir, pour chaque feu, combien l'on part et vers où. Elle ne s'engage à rien sur l'arrivée." },
      { first: true, text: "« Deux cent douze âmes au dernier dénombrement », dit-il à qui veut l'entendre, c'est-à-dire à une chèvre attachée au pied de la table. « Deux cent onze d'inscrites au départ. Il m'en manque une. Le capitaine veut le compte juste avant ce soir, et le capitaine a une façon de vouloir les choses... » Il trempe sa plume. « Nom, âge, feu, destination. »" },
      { again: true, text: "Maillefer recompte ses colonnes, de haut en bas puis de bas en haut, dans l'espoir que le total change d'avis." },
    ],
    choices: [
      { label: "Te faire inscrire", to: "K02_sergent_inscrire", hide: { seen: "K02_sergent_inscrire" } },
      { label: "« Bastien, le berger. Il est debout dans son pré depuis Pâques. »", if: { has: "su:bastien" }, hide: { any: [{ not: { has: "su:bastien" } }, { quest: "I_registre" }] }, fx: { quest: "I_registre", ep: ["perso", 400] }, to: "K02_sergent_bastien" },
      { label: "Lui demander le registre, pour chercher la ligne qui manque", hide: { any: [{ has: "su:bastien" }, { quest: "I_registre" }, { seen: "K02_sergent_cherche" }] },
        test: { dom: "savoir", diff: 0, label: "Savoir", help: [{ if: { voie: "rouage" }, v: 10 }] },
        win: { fx: { quest: "I_registre", flag: "su:bastien", ep: ["perso", 400] }, to: "K02_sergent_bastien" }, lose: { to: "K02_sergent_cherche" } },
      { back: "K02_place" },
    ] },
  K02_sergent_inscrire: { act: "I", title: "Nom, âge, feu, destination", place: "troisnoyers",
    text: [
      { if: J, text: "« {hero}. Quinze ans. Feu d'Adeline Noyer, horlogère. » Il écrit en tirant la langue. « Destination ? » Tu hésites. Il lève la plume. « Ta maîtresse n'a rien déclaré. Quarante horloges, et rien de déclaré. Si elle croit que la Dormante s'arrêtera devant sa porte par égard pour la mécanique... »" },
      { if: R, text: "Il te regarde, regarde ses colonnes, et repose sa plume. « Les glaneurs ne sont pas des âmes au sens du règlement. Vous n'avez pas de feu. Vous avez un feu de camp, ce qui est tout autre chose et relève de la police des chemins. » Il réfléchit, car c'est un homme juste à sa manière. « Je peux t'inscrire à la colonne des bestiaux et divers. C'est ce que j'ai de mieux. Destination ? »" },
    ],
    choices: [
      { label: "« Vauxelles-le-Neuf, comme tout le monde. »", to: "K02_sergent_inscrit" },
      { label: "« Méridane. »", fx: { flag: "maillefer:meridane" }, to: "K02_sergent_inscrit" },
    ] },
  K02_sergent_inscrit: { act: "I", title: "La colonne des destinations", place: "troisnoyers",
    text: [
      { after: "maillefer:meridane", text: "Maillefer rit, d'un rire de gorge, consciencieux, le rire d'un fonctionnaire qui a reconnu une plaisanterie et tient à le faire savoir. Puis il voit ta figure. Il cesse de rire, et il écrit *Méridane* dans la colonne, lentement. C'est la première fois depuis soixante ans que ce mot entre dans un registre de départ." },
      { before: "maillefer:meridane", text: "« Vauxelles-le-Neuf. » Il l'écrit pour la deux cent douzième fois, ou la deux cent onzième, et c'est bien là sa peine." },
      "« Si tu vois traîner une âme sans papier, ajoute-t-il, tu me l'amènes. Il m'en manque une, et j'ai fait le tour des lits. »",
    ],
    choices: [{ back: "K02_sergent" }] },
  K02_sergent_cherche: { act: "I", title: "Deux cent douze lignes", place: "troisnoyers",
    text: [
      "Tu suis les colonnes du doigt. Des noms, des âges, des feux ; des morts rayés d'un trait, des naissances ajoutées en marge. Au bout de deux cents lignes, les noms dansent, et tu n'as trouvé que ce que le sergent savait déjà : il en manque une.",
      "« J'ai fait le tour des lits, répète Maillefer en reprenant son bien. Des lits ! C'est là qu'on trouve les gens, d'habitude. »",
    ],
    choices: [{ back: "K02_sergent" }] },
  K02_sergent_bastien: { act: "I", title: "La deux cent douzième âme", place: "troisnoyers", fx: { item: "billet" },
    text: [
      { outcome: "win", text: "Tu suis les colonnes du doigt, et tu t'arrêtes aux gages. Tous les valets de la paroisse ont touché leur terme à la Saint-Jean ou à Pâques, et signé d'une croix. Une croix manque à Pâques : *Bastien Lhoste, berger du communal*. Le berger du communal est debout dans son pré, au-delà des jalons, depuis le lundi de Pâques, un pied en l'air." },
      "Maillefer ôte son chapeau. C'est moins du respect qu'un besoin d'air. « Bastien. Naturellement. Je l'ai sous les yeux tous les matins en ouvrant mes volets, je ne l'ai pas compté : on ne compte pas ce qui ne bouge plus. » Il trempe sa plume, la tient en l'air, cherche la formule. Puis il écrit, en belle ronde : *Un habitant, immobile. Ne déménagera pas.*",
      "« Deux cent douze. » Il souffle sur l'encre avec tendresse. « Tu viens de m'épargner une conversation avec le capitaine. Tiens. » Il signe un carré de papier et y appuie le cachet de la paroisse. « Un billet de roulage. Avec cela, une charrette passe le poste de la route sans qu'on la retourne. Je n'en ai que douze à donner, et j'en ai vendu onze. »",
    ],
    choices: [{ back: "K02_sergent" }] },
});

module.exports = {
  passages: P,
  extras: {
    items: {
      gravure: { name: "Gravure du Grand Midi", kind: "divers", flat: true, price: 1, desc: "« Le Grand Midi de l'an 541, d'après un témoin. » La Tour, la foule, la reine au balcon. Sur les marches, entre les gardes, une petite figure qui court." },
      billet: { name: "Billet de roulage", kind: "divers", flat: true, price: 0, desc: "Un carré de papier au cachet de la paroisse des Trois-Noyers : la charrette qui le montre passe le poste de la route sans être fouillée." },
    },
    people: {
      goton: { name: "La Goton", f: true, aka: ["la Goton", "Marguerite Hureau"], face: { age: "ancien", skin: "clair", hair: "blanc", coif: "foulard", eyes: "lourds", iris: "bleu", nose: "large", lips: "fines", shape: "rond" },
        aspect: { allure: "quatre-vingt-quatre ans, assise sur un coffre", signe: "un battoir à linge contre sa jupe" }, qui: "Celle qui coud les morts des Trois-Noyers.", desc: "Elle a mis au monde et cousu dans leur drap trois générations des Trois-Noyers. Née à Roquebise." },
      anicet: { name: "Anicet", f: false, aka: ["Anicet", "le bedeau"], face: { age: "ancien", skin: "clair", hair: "gris", coif: "degarni", eyes: "tombants", iris: "brun", nose: "busque", lips: "fines", shape: "allonge" },
        aspect: { allure: "soixante-douze ans, long, voûté", signe: "un trousseau de clefs à la ceinture" }, qui: "Le bedeau des Trois-Noyers.", desc: "Le bedeau des Trois-Noyers. Il sonne les cloches et remonte l'horloge depuis cinquante ans." },
      babolin: { name: "Maître Babolin", f: false, aka: ["Babolin", "le brocanteur"], face: { age: "mur", skin: "beige", hair: "gris", coif: "court", beard: "barbe", eyes: "ronds", iris: "noisette", nose: "large", lips: "pleines", shape: "rond" },
        aspect: { allure: "un brocanteur rond, en gilet jaune", signe: "une mule qui ne s'étonne de rien" }, qui: "Un brocanteur qui suit les évacuations.", desc: "Il achète à ceux qui partent et revend à ceux qui arrivent. Il fait crédit à la Courtepaille." },
      maillefer: { name: "Le sergent Maillefer", f: false, aka: ["Maillefer", "le sergent"], face: { age: "mur", skin: "clair", hair: "gris", coif: "court", beard: "moustache", eyes: "ronds", iris: "bleu", nose: "large", lips: "fines", shape: "rond" },
        aspect: { allure: "soixante ans, une écharpe trop grande", signe: "recompte ses colonnes" }, qui: "Le sergent de la paroisse des Trois-Noyers.", desc: "Il tient le registre des âmes pour l'évacuation." },
    },
    shops: {
      i_cadran: { name: "Le comptoir du Cadran sans Aiguille", sells: [{ item: "pain", price: 1 }, { item: "onguent", price: 3 }, { item: "vin_nouveau", price: 2 }, { item: "corde", price: 3 }, { item: "lanterne", price: 5 }, { item: "baton", price: 3 }, { item: "dague", price: 7 }, { item: "gilet", price: 10 }] },
    },
    quests: [
      { id: "I_registre", act: "I", kind: "annexe", title: "L'âme qui manque au registre", start: "K02_sergent" },
    ],
  },
};
