// Lot i1 of "Le Trésor des Taiseurs": Act I opens on the Beffroi square (I_debut, the act's crossroads I_hub), Lison
// Vasse joins, Tibère and Gildas may come back, the riddle of the Queen's clock (the rhyme of the seven mutes, the noon
// automata, the bell-ringers, the canon, the guards), the night climb in the tower, the first cache (IB_cache: the leaf
// f_beffroi and the amber lens), Odeline's letter read again under the lens, and four side quests on the square.

var HUB = "I_hub";
var P = {};

// ==================================================================== the arrival on the square
Object.assign(P, {
  I_debut: { act: "I", title: "La place du Beffroi", place: "beffroi", backName: "l'entrée de la place",
    text: [
      { first: true, text: "La rue des Drapiers débouche d'un seul coup sur la place du Beffroi, et la ville s'écarte pour lui faire de la place. Les pavés sont posés en arêtes de poisson, gris et luisants. Au nord, la façade du Conseil des Comptoirs aligne sous sa corniche quarante blasons peints, un par maison de commerce ; tu les comptes, par une vieille habitude d'inventaire, et le compte est juste ; c'est peut-être le seul qui le soit derrière cette façade. Au sud, un bras de canal vient mourir contre un escalier de pierre où trois barques plates tirent sur leurs amarres. Au milieu de tout se dresse le Beffroi de la reine : une tour de brique rose et de pierre blanche, haute de trois cents pieds, avec son cadran d'émail bleu semé d'étoiles d'or." },
      { first: true, text: "Sous le cadran court une galerie de pierre percée de huit petites portes de bois, une grande et sept étroites. À midi, dit-on, une reine en sort, suivie de sept muets, et ils font le tour de la galerie pendant que sonne le carillon. Les gens de Salvèze n'y lèvent plus les yeux. Les étrangers s'arrêtent, bouche ouverte, et se font couper la bourse ; c'est, pour les coupeurs, le meilleur emplacement de la ville." },
      { first: true, text: "Le carnet d'Odeline pèse dans ta poche intérieure, contre le cornet d'os. Ses dernières lignes t'ont mené ici, au pied de cette tour, et s'arrêtent là. Le reste, il faudra l'entendre." },
      { first: true, if: { has: "metier:lire" }, text: "Tu connais la place par les actes : des baux de marchands d'oublies, des procès-verbaux de rixes, un registre de la confrérie des Carillonneurs que tu as recopié un hiver pour un notaire. Tu la regardes aujourd'hui pour la première fois. Elle est plus vaste que dans les papiers." },
      { first: true, if: { has: "poids:dette" }, text: "Tu repères d'instinct les coins d'ombre et les sorties : la ruelle du Sel, le passage sous les arcades, le pont du canal. Les gens à qui tu dois de l'argent fréquentent les places, le jour du marché." },
      { first: true, with: "tibere", text: "Tibère s'arrête au bord des pavés et souffle par le nez. « Douze ans de ronde ici, dit-il. Je connais chaque pavé qui bouge. » Il regarde la façade du Conseil un moment de trop, puis il crache de côté, discrètement, comme on le fait au Guet quand l'officier a le dos tourné." },
      { first: true, with: "gildas", text: "Frère Gildas lève la tête vers le cadran et l'observe longtemps, les mains rentrées dans ses manches. Il murmure une phrase en latin, trop bas pour que tu la saisisses. Quand ses yeux redescendent sur toi, il a l'air d'un homme qui vient de reconnaître une écriture." },
      { again: true, text: "L'entrée de la place, au débouché de la rue des Drapiers. Le Beffroi, le Conseil, le canal. Le cornet est dans ta poche." },
    ],
    choices: [
      { label: "Aller voir l'homme à la balafre, sous les arcades", hide: { any: [{ not: { has: "tibere:refuse" } }, { seen: "I_tibere" }, { present: "tibere" }] }, to: "I_tibere" },
      { label: "Aller au-devant du moine assis sur la margelle du puits", hide: { any: [{ not: { has: "gildas:refuse" } }, { seen: "I_gildas" }, { present: "gildas" }] }, to: "I_gildas" },
      { label: "Traverser la place jusqu'au pied du Beffroi", big: true,
        if: { not: { any: [{ all: [{ has: "tibere:refuse" }, { not: { seen: "I_tibere" } }, { not: { present: "tibere" } }] }, { all: [{ has: "gildas:refuse" }, { not: { seen: "I_gildas" } }, { not: { present: "gildas" } }] }] } },
        why: "Quelqu'un t'attend sur la place, et il te regarde.", hide: { seen: "I_lison" }, to: "I_lison" },
      { label: "Le pied du Beffroi", hide: { not: { seen: "I_lison" } }, back: HUB },
    ] },

  I_tibere: { act: "I", title: "Sous les arcades", place: "beffroi", backName: "les arcades",
    text: [
      "Tibère Gaucelm est adossé à un pilier des arcades, entre un marchand de rubans et un écrivain public qui dort sur son pupitre. Il a brossé son vieux manteau du Guet et en a décousu les galons ; on voit encore, sur le drap plus foncé, la place qu'ils occupaient. Il te voit, il fait semblant de ne pas te voir, puis il renonce et décroise les bras.",
      "« Tiens, dit-il. Le monde est petit. » Il se gratte la balafre. « Je {{oreille#ib_tibere_passe|passais par ici, voilà tout|t'attends depuis l'aube, parce qu'on me paie pour savoir où tu vas}}. Tu m'as dit non, l'autre jour. Je l'ai bien pris. Mais une place comme celle-ci, avec des gardes du Conseil à chaque coin, ça demande quelqu'un qui connaît les gardes. »",
      "Il baisse la voix. « Et puis {{oreille|je n'ai rien de mieux à faire cette semaine|Rosalie a cousu une robe pour la femme d'un échevin, et je voudrais la voir passer sur cette place}}. Je prends {{oreille|ce que tu voudras bien me donner|déjà cinq ducats ailleurs, alors ce que tu me donneras, je le boirai}}. »",
      { if: { has: "poids:dette" }, text: "Tu sais ce que c'est, un homme qui a besoin d'être utile parce qu'il doit de l'argent. Tu le reconnais à la façon dont il tient ses mains : ouvertes, et prêtes à se refermer sur n'importe quoi." },
    ],
    choices: [
      { label: "« Viens. Tu connaîtras les gardes. »", fx: { join: "tibere", unflag: "tibere:refuse", conf: { tibere: 10 } }, back: "I_debut" },
      { label: "« Je sais qui te paie, Tibère. Viens quand même : je préfère t'avoir sous les yeux. »", hide: { not: { voile: "ib_tibere_passe" } },
        fx: { join: "tibere", unflag: "tibere:refuse", flag: "ib:tibere_su", conf: { tibere: -5 }, fear: { tibere: 10 } }, back: "I_debut" },
      { label: "« Non. Reste où tu es. »", fx: { flag: "ib:tibere_battant", conf: { tibere: -5 } }, back: "I_debut" },
    ] },

  I_gildas: { act: "I", title: "Le moine du puits", place: "beffroi", backName: "le puits de la place",
    text: [
      "Frère Gildas est assis sur la margelle du puits de la reine, son bâton couché sur les genoux. Des enfants lui tournent autour et se demandent à voix haute s'il mendie. Il se lève quand tu approches, et il sort de sa manche une lettre pliée en quatre, scellée de cire grise, où l'on a gravé une montagne.",
      "« Vous m'avez dit non, et je l'ai entendu, dit-il. Mon abbé, lui, ne l'a pas entendu. Il m'écrit que ma place est auprès de vous jusqu'à ce que l'âme d'Odeline soit en repos, et il ne me laisse pas le choix. Je vous le laisse, à vous. Lisez. »",
      "La lettre est brève, d'une main ferme et ronde. *Frère Gildas, vous irez auprès de l'héritier d'Odeline Carrus et vous l'aiderez de votre savoir. {{loupe#ib_abbe|Ne le quittez pas tant qu'il cherchera|Ce qu'il porte à l'oreille appartient au Mont : reprenez-le avant qu'il ne parle}}. Que Dieu vous garde le silence. Dom Évrard, abbé.*",
      "Gildas attend, sans insister. Il a les ongles noirs d'encre, et de la poussière des chemins jusqu'aux genoux : les deux métiers de l'homme sont écrits sur lui, l'un en haut, l'autre en bas.",
    ],
    choices: [
      { label: "« Restez, alors. Nous verrons ce que vaut votre savoir. »", fx: { join: "gildas", unflag: "gildas:refuse", item: "ib_lettre_abbe", conf: { gildas: 10 } }, back: "I_debut" },
      { label: "« Suivez-moi si vous voulez, mais de loin. »", fx: { met: "gildas", flag: "ib:gildas_loin", item: "ib_lettre_abbe" }, back: "I_debut" },
    ] },

  I_lison: { act: "I", title: "Les marches du canal", place: "beffroi", backName: "les marches du canal",
    text: [
      "Au pied du Beffroi, l'escalier du canal descend dans l'eau verte. Une barque plate y est amarrée, peinte d'un bleu passé, avec un œil blanc dessiné à la proue. Une jeune femme s'y tient debout, une gaffe ferrée à la main, occupée à repêcher un panier d'osier qui flotte entre deux pieux. Elle a des tresses brunes nouées sur la nuque, des taches de rousseur jusque dans le cou, et des avant-bras de rameuse, durs comme du bois de frêne.",
      "Elle ramène le panier, l'égoutte, le jette au fond de la barque et lève les yeux sur toi comme sur quelqu'un qui arrive en retard. « C'est toi, la boutique Carrus. Lison Vasse. Je fais la course sur les canaux, trois liards le pont. Je {{oreille#ib_lison_hasard|passais par hasard, ce matin, et j'ai entendu parler de toi|savais à quelle heure tu traverserais la place, on me l'a dit hier soir, aux Joncs}}. »",
      "Elle monte deux marches, s'essuie les mains sur sa jupe. « Tout le quai dit que tu cherches quelque chose dans la tour. Moi, je connais les carillonneurs, les gardes, et l'heure où ils boivent. {{oreille#ib_lison_aide|Je t'aide pour le plaisir de voir un cambriolage bien fait|Je t'aide pour être là le jour où tu poseras ce que tu portes à l'oreille}}. »",
      { with: "tibere", text: "Tibère la toise. « Une Vasse des marais. On les voyait au port, au Guet. Toujours un couteau dans la botte. » Lison lui sourit. « Et toi, toujours un pichet dans la main. Chacun son outil, sergent. »" },
      { with: "gildas", text: "Lison regarde Frère Gildas une seconde de plus que les autres. « Un moine du Mont, dit-elle. {{oreille#ib_lison_moine|On n'en voit jamais en ville|J'en ai vu un pareil aux Joncs, à la Saint-Aymeric, assis à la droite de ma grand-mère}}. » Gildas incline la tête pour toute réponse." },
    ],
    choices: [
      { label: "« Monte. Enfin, descends. Bref, viens. »", fx: { join: "lison", flag: "lison:rencontre", conf: { lison: 5 } }, to: HUB },
      { label: "« Qui t'envoie ? »", to: "I_lison_mots" },
      { label: "« On t'a dit hier soir, aux Joncs, à quelle heure je passerais. Qui ? »", hide: { not: { any: [{ voile: "ib_lison_hasard" }, { voile: "ib_lison_aide" }] } }, to: "I_lison_mission" },
      { label: "« Je n'ai besoin de personne. Passe ton chemin. »", to: "I_lison_refus" },
    ] },

  I_lison_mots: { act: "I", title: "Lison Vasse", place: "beffroi", backName: "les marches du canal",
    text: [
      "« Personne ne m'envoie, dit Lison. J'ai une barque, des dettes et une grand-mère. » Elle compte sur ses doigts. « La barque me nourrit. Les dettes, je les paie quand il pleut. Et ma grand-mère {{oreille#ib_lison_grandmere|fait de la dentelle aux Joncs-Bas et se plaint de ses yeux|m'a dit de te suivre, de te regarder faire, et de lui rapporter l'os si tu ne vaux rien}}. »",
      "Elle s'assied sur la marche, les coudes sur les genoux. « Odeline Carrus, je l'ai connue un peu. Elle venait aux Joncs une fois l'an acheter des anguilles fumées, et elle repartait sans les anguilles. {{oreille|Une drôle de cliente|Ma grand-mère pleurait chaque fois qu'elle repartait}}. »",
      "Elle te détaille de haut en bas, sans gêne, comme on regarde une barque qu'on va acheter. « Tu as {{oreille#ib_lison_cousine|l'air de quelqu'un qui paie ses courses|la même façon de pencher la tête qu'une cousine à moi, partie des Joncs quand j'étais petite, et ça me dérange}}. C'est déjà ça. »",
      { with: "tibere", text: "Tibère grogne quelque chose sur les marais et les menteurs. Lison garde le dos tourné. « Les menteurs, sergent, ce sont ceux qui croient qu'on ne les entend pas. »" },
    ],
    choices: [
      { label: "« Bon. Viens. »", fx: { join: "lison", flag: "lison:rencontre", conf: { lison: 5 } }, to: HUB },
      { label: "« Ta grand-mère t'a dit de me suivre et de lui rapporter ce que je porte. Dis-le-moi en face. »", hide: { not: { any: [{ voile: "ib_lison_grandmere" }, { voile: "ib_lison_hasard" }, { voile: "ib_lison_aide" }] } }, to: "I_lison_mission" },
      { label: "« Je n'ai besoin de personne. »", to: "I_lison_refus" },
    ] },
});

Object.assign(P, {
  I_lison_mission: { act: "I", title: "Ce que dit Lison", place: "beffroi", backName: "le bord du canal",
    fx: { join: "lison", flag: ["lison:rencontre", "lison:mission"], clue: "ib_c_lison", ep: ["perso", 400] },
    text: [
      "Tu le lui dis tout bas, au bord du canal : les Joncs, la grand-mère, l'os qu'elle doit rapporter. Lison reste où elle est. Elle regarde l'eau, puis ton oreille, puis la poche où tu ranges le cornet. Elle fait claquer sa langue, une fois.",
      "« Tu m'écoutes avec ça, dit-elle. Évidemment. Odeline te l'a laissé, et toi tu t'en sers sur la première fille qui te parle gentiment. » Elle se mord la joue. « Bon. Ma grand-mère s'appelle Ancolie. Elle est aveugle, elle fait de la dentelle, et elle sait des choses que la ville a oubliées. Elle m'a dit : va voir ce que vaut l'héritier d'Odeline, et si l'héritier ne vaut rien, reprends ce qui est à nous. »",
      "« Ce qui est à vous ? » Elle hausse les épaules. « À nous, aux Joncs, à des gens morts depuis longtemps. Je ne vais pas te faire l'histoire au bord d'un canal. {{oreille#ib_lison_choix|Pour l'instant, je fais ce qu'on m'a dit|Pour l'instant, tu ne m'as pas encore donné de raison de lui désobéir}}. »",
      "Elle te tend la main, sèche et dure, une main de rameuse. « Je reste. Tu sais pourquoi je suis là, je sais que tu le sais. C'est plus propre comme ça. Et si un jour je te prends ton os, je te préviendrai la veille. »",
      { with: "tibere", text: "Tibère a tout entendu, appuyé à la rambarde. Il garde le silence. Il se frotte la nuque, longtemps, comme un homme qui a mal au cou." },
    ],
    choices: [
      { label: "Lui serrer la main", fx: { conf: { lison: 10 } }, back: HUB },
      { label: "« Préviens-moi l'avant-veille. Je dors mal. »", fx: { conf: { lison: 15 } }, back: HUB },
    ] },

  I_lison_refus: { act: "I", title: "La batelière têtue", place: "beffroi", backName: "les marches du canal",
    fx: { join: "lison", flag: "lison:rencontre" },
    text: [
      "Tu tournes le dos à Lison et tu remontes les marches. Tu as fait vingt pas sur la place quand une voix dit, juste derrière ton épaule : « Le garde de la porte de la tour s'appelle Norbert. Il prend le service à la nuit tombée et il a soif dès la deuxième heure. Tu le savais ? »",
      "Elle marche à côté de toi, les mains dans le dos, sa gaffe passée en travers des épaules comme un joug. « Le chanoine qui a les clés doit de l'argent à une banque. Le vieux carillonneur sourd d'une oreille connaît un air qu'on ne joue plus. Tu le savais aussi ? » Elle attend. « Non. Moi si. »",
      "« Je {{oreille#ib_lison_tetue|suis têtue, c'est de famille|n'ai pas le droit de rentrer aux Joncs sans toi, alors autant être utile}}, dit-elle. Je te suis de toute façon. Tu peux choisir si c'est devant ou derrière. »",
    ],
    choices: [
      { label: "« Devant. Je préfère te voir. »", fx: { conf: { lison: 5 } }, to: HUB },
      { label: "« On t'interdit de rentrer sans moi. Qui ? »", hide: { not: { voile: "ib_lison_tetue" } }, to: "I_lison_mission" },
    ] },

  // ------------------------------------------------------------------ the act's crossroads
  I_hub: { act: "I", title: "La place du Beffroi", place: "beffroi", hub: true, backName: "la place du Beffroi",
    text: [
      { first: true, text: "Vue du pied de la tour, la place est un marché qui ne finit jamais. Des marchands d'oublies poussent leurs fours roulants. Un crieur du Conseil, perché sur une borne, lit une ordonnance que personne n'écoute ; il le sait, et lit quand même, car on le paie à l'ordonnance. Sous les arcades, des vieux assis sur un long banc de pierre regardent passer le monde en mâchant. Autour du puits de la reine, des enfants se tiennent par la main et tournent en chantant." },
      { first: true, text: "D'ici partent les chemins de toute la ville : le pont des Changeurs vers l'île des Changeurs et ses banques ; la rue des Échelles, qui grimpe aux Gouttières ; la grande rue couverte des Halles ; et, au sud, le quai qui descend au port aux Sauniers. La boutique d'Odeline est à quelques rues, sur le quai des Lanternes." },
      { again: true, when: "day", text: "La place du Beffroi, son vacarme de marché, ses pavés en arêtes de poisson. Le cadran bleu luit au-dessus des toits." },
      { again: true, when: "night", text: "La place, la nuit. Les fours des oubliers sont éteints, les arcades pleines d'ombre. Une lanterne brûle à la porte de la tour, où un garde du Conseil bâille sur sa hallebarde. Le cadran a perdu ses couleurs ; on le devine à son tic-tac, qu'on entend jusqu'au canal, et qui bat sur la place vide comme le pouls d'une chose endormie." },
      { with: "lison", again: true, text: "Lison s'est assise sur une borne, les jambes croisées, et pèle une pomme ridée avec son couteau en regardant la tour. La pelure descend d'un seul ruban jusqu'au pavé." },
      { after: "ib:alerte", before: "beffroi:ouverte", text: "Depuis l'autre nuit, des gardes du Conseil supplémentaires font les cent pas au pied de la tour. Aux étals, on parle encore des cloches qui ont sonné toutes seules à minuit." },
      { after: "beffroi:ouverte", text: "Le Beffroi a gardé son air de tous les jours. Son cadran tourne, ses muets sortent à midi, et tu es seul{e} à savoir ce qu'il a rendu. Tu as dans la poche une loupe d'ambre, et tu regardes les écriteaux de la place d'un autre œil." },
      { after: "ib:oublies", text: "Herminie, la marchande d'oublies, te glisse un cornet de gaufres roulées chaque fois que tu passes devant son four." },
      { after: "ib:cage_ouverte", again: true, when: "day", text: "Trois pigeons bagués de rouge tournent au-dessus de la place, se posent sur la margelle du puits, repartent. Ils cherchent une cage disparue." },
      { after: "ib:baptistine_reconnue", again: true, when: "day", text: "Au clocher, une cloche sonne l'heure, nette, frappée de près. Les vieux du banc lèvent la tête ensemble. « La petite à Médard », dit l'un d'eux." },
    ],
    choices: [
      { label: "Le pied du Beffroi : la porte, le cadran, la sacristie", to: "IB_pied" },
      { label: "Les étals et les bancs de la place", to: "IB_marche" },
      { label: "Les enfants qui chantent autour du puits de la reine", hide: { night: true }, to: "IB_comptine" },
      { label: "La maison des Carillonneurs, rue du Battant", to: "IB_confrerie" },
      { label: "La barque de Lison, aux marches du canal", hide: { not: { present: "lison" } }, to: "IB_barque" },
      { label: "Dire à Lison ce que tu as entendu sous ses mots", hide: { any: [{ seen: "I_lison_mission" }, { has: "lison:mission" }, { not: { any: [{ voile: "ib_lison_hasard" }, { voile: "ib_lison_aide" }, { voile: "ib_lison_grandmere" }, { voile: "ib_lison_tetue" }, { voile: "ib_lison_mere" }] } }] }, to: "I_lison_mission" },
      { label: "Aller chercher Tibère à la taverne du Battant", hide: { any: [{ not: { has: "ib:tibere_battant" } }, { present: "tibere" }, { seen: "IB_tibere_retour" }] }, to: "IB_tibere_retour" },
      { label: "Faire signe à Frère Gildas, qui te suit de loin", hide: { any: [{ not: { has: "ib:gildas_loin" } }, { present: "gildas" }, { seen: "IB_gildas_signe" }] }, to: "IB_gildas_signe" },
      { label: "Attendre la nuit dans un coin de la place", hide: { any: [{ night: true }, { has: "beffroi:ouverte" }] }, to: "IB_nuit" },
      { label: "Rôder dans le noir au pied de la tour", hide: { any: [{ not: { night: true } }, { has: "beffroi:ouverte" }] }, to: "IB_nuit" },
      { label: "La taverne du Battant, où boivent les carillonneurs", hide: { has: "ib:tibere_battant" }, to: "IB_taverne" },
      { label: "Suivre le regard de Tibère vers le perron du Conseil", hide: { any: [{ not: { present: "tibere" } }, { seen: "IB_rosalie" }, { night: true }, { not: { seen: "IB_medard" } }] }, to: "IB_rosalie" },
      { label: "Une course de nuit sur l'Effrontée, avec Lison", hide: { any: [{ not: { present: "lison" } }, { not: { seen: "IB_lettre_suite" } }, { seen: "IB_lison_nuit" }] }, to: "IB_lison_nuit" },
      { label: "Chercher Frère Gildas, parti prier à la chapelle basse", hide: { any: [{ not: { present: "gildas" } }, { seen: "IB_gildas_chapelle" }, { not: { seen: "IB_comptine" } }] }, to: "IB_gildas_chapelle" },
      { label: "Un garçon en livrée grise qui court vers toi, un billet à la main", hide: { any: [{ not: { has: "beffroi:ouverte" } }, { seen: "IB_lothaire_billet" }] }, to: "IB_lothaire_billet" },
      { label: "Lison, assise sur les marches du canal, qui regarde ta poche", hide: { any: [{ not: { has: "beffroi:ouverte" } }, { not: { present: "lison" } }, { seen: "IB_lison_loupe" }] }, to: "IB_lison_loupe" },
      { label: "L'île des Changeurs, par le pont des Changeurs", to: "IC_pont" },
      { label: "Les Gouttières, par la rue des Échelles", to: "IG_entree" },
      { label: "Les Halles, par la grande rue couverte", to: "IG_halles" },
      { label: "La boutique d'Odeline, sur le quai des Lanternes", to: "IQ_boutique" },
      { label: "Le port aux Sauniers, par le quai du sud", to: "IF_port" },
      { label: "Rentrer à la boutique avec le feuillet et la loupe", big: true, if: { all: [{ has: "beffroi:ouverte" }, { quest: "I_beffroi" }] }, why: "Le Beffroi garde encore son secret.", hide: { not: { has: "beffroi:ouverte" } }, to: "IF_mandat" },
    ] },

  IB_pied: { act: "I", title: "Au pied du Beffroi", place: "beffroi", backName: "le pied du Beffroi",
    text: [
      { first: true, text: "De près, le Beffroi est une montagne de brique rose posée sur un socle de pierre blanche. La porte de la tour, cloutée de fer, est gardée par deux hommes du Conseil en casaque bleue. À gauche, une chapelle basse s'appuie contre le socle : c'est la sacristie du chanoine du Beffroi, qui a la garde des clés. À droite, une échoppe à volets peints porte une enseigne en forme de roue dentée : l'atelier du maître horloger de la République." },
      { first: true, text: "Tout en haut, le cadran bleu tourne si lentement que l'aiguille semble immobile. Sous lui, les huit portes de la galerie des automates sont fermées. Un pigeon est perché sur le linteau de la septième." },
      { again: true, when: "day", text: "Le socle blanc, la porte cloutée et ses deux gardes, la sacristie à gauche, l'atelier de l'horloger à droite. Le cadran au-dessus." },
      { after: "ib:norbert_assomme", again: true, when: "day", text: "Norbert monte la garde avec les autres, un bandeau sale sous son chapeau. Il te regarde passer en fronçant les sourcils ; visiblement, il cherche d'où il te connaît, et la réponse lui échappe." },
      { again: true, when: "night", text: "Le pied de la tour, la nuit. Un seul garde, une lanterne, la porte close. La sacristie est noire ; une lumière veille encore chez l'horloger." },
    ],
    choices: [
      { label: "Lever les yeux sur le cadran et son inscription", hide: { night: true }, to: "IB_horloge" },
      { label: "Attendre midi, pour voir sortir la reine et ses muets", hide: { any: [{ night: true }, { seen: "IB_midi" }] }, to: "IB_midi" },
      { label: "Parler aux gardes de la porte", hide: { night: true }, to: "IB_gardes" },
      { label: "Attendre l'heure de la fermeture, près de la chapelle basse", hide: { any: [{ night: true }, { has: "beffroi:ouverte" }] }, to: "IB_fermeture" },
      { label: "Frapper à la sacristie du chanoine", hide: { any: [{ night: true }, { all: [{ has: "beffroi:ouverte" }, { has: "ib:permis" }, { not: { seen: "IB_chanoine_apres" } }] }] }, to: "IB_chanoine" },
      { label: "Le chanoine, qui te fait signe depuis le seuil de la sacristie", hide: { any: [{ night: true }, { not: { has: "beffroi:ouverte" } }, { not: { has: "ib:permis" } }, { seen: "IB_chanoine_apres" }] }, to: "IB_chanoine_apres" },
      { label: "Entrer dans l'atelier de l'horloger", to: "IB_horloger" },
      { back: HUB },
    ] },

  IB_comptine: { act: "I", title: "La comptine des sept muets", place: "beffroi", backName: "le puits de la reine",
    text: [
      { first: true, text: "Autour du puits de la reine, une ronde de sept ou huit enfants tourne en frappant des pieds. Les plus grands ont dix ans ; les plus petits trébuchent. Ils chantent une comptine que tout Salvèze connaît, sur un air de quatre notes qui monte et redescend, et à chaque vers l'un d'eux s'accroupit et met la main sur sa bouche." },
      { again: true, text: "Les enfants tournent toujours autour du puits, en frappant des pieds, et recommencent la comptine dès qu'elle finit." },
      { after: "ib:pigeon_mange", again: true, text: "Depuis la soupe au pigeon, les enfants du puits t'ouvrent la ronde quand tu passes. Le plus petit te tient la main un tour entier." },
      "« Sept muets pour la reine, l'un qui coud, l'autre qui peine, l'un qui compte, l'autre qui ment, l'un qui dort, l'autre qui attend, et le septième {{oreille#ib_comptine|garde sa langue au fond de sa main|ouvre la main quand on le tait à minuit}} ! »",
      "Au dernier vers, toute la ronde s'arrête, et le dernier debout doit tendre la main fermée à celui qui mène. Celui qui mène l'ouvre de force, la trouve vide, et tout le monde crie.",
      { with: "lison", text: "Lison chantonne avec eux, du bout des lèvres, sans s'en rendre compte. Quand elle s'en aperçoit, elle se tait net et regarde ailleurs." },
      { with: "gildas", text: "Frère Gildas écoute la comptine jusqu'au bout, immobile. « On la chantait déjà quand j'étais novice, dit-il. Les enfants du Mont la chantent aussi, avec un vers de plus. Il m'a échappé. »" },
    ],
    choices: [
      { label: "Demander aux enfants qui leur a appris la comptine", to: "IB_enfants" },
      { label: "« À minuit, sous la galerie. Lison, tu connais cette chanson mieux que tu ne le dis. »", hide: { any: [{ not: { voile: "ib_comptine" } }, { not: { present: "lison" } }, { seen: "IB_lison_comptine" }] }, to: "IB_lison_comptine" },
      { back: HUB },
    ] },

  IB_enfants: { act: "I", title: "Les enfants du puits", place: "beffroi", backName: "le puits de la reine",
    text: [
      "Tu t'accroupis à hauteur de la ronde. Les enfants s'arrêtent, se poussent du coude, et le plus grand, un garçon aux genoux écorchés, s'avance en chef de bande. « La chanson, c'est le vieux Médard qui la chante, dit-il. Sous les arcades. Il la chante faux exprès, pour qu'on rie. Il dit que {{oreille#ib_gamin|c'est la chanson de la reine et qu'elle est bête|c'est la chanson de la reine, et que si on la chante juste, la tour l'entend}}. »",
      "Une petite fille tire ta manche et ouvre la main. Dedans, une dent jaunâtre, percée d'un trou. « C'est une dent de la reine, dit-elle. Je l'ai trouvée dans le puits. Deux liards. » Tu regardes la dent : {{pie#ib_dent|une dent longue comme un ongle, polie par les doigts, très vieille|une dent de cheval limée à la râpe, percée d'un trou de ver, vieille de l'été dernier}}.",
      "Le garçon aux genoux écorchés ajoute, très vite, comme on lâche un secret pour qu'il ne brûle pas : « Le vieux Médard, il dit aussi que les muets de la tour, {{oreille|ce sont des fous qu'on enfermait|c'étaient des gens qui parlaient deux fois en même temps}}. »",
    ],
    choices: [
      { label: "Acheter la dent pour deux liards, pour le plaisir de la petite", fx: { gold: -2, conf: { lison: 3 } }, hide: { seen: "IB_enfants" }, once: true, back: "IB_comptine" },
      { label: "Rendre la dent à la petite en lui disant que c'est une dent de cheval", hide: { not: { voile: "ib_dent" } }, once: true, fx: { note: "La petite fille te regarde avec un respect neuf, et va essayer la dent sur un marchand de rubans." }, back: "IB_comptine" },
      { label: "Le banc des vieux, sous les arcades, où chante Médard", to: "IB_medard" },
      { back: HUB },
    ] },
});

Object.assign(P, {
  IB_lison_comptine: { act: "I", title: "La chanson des Joncs", place: "beffroi", backName: "le puits de la reine", with: "lison",
    text: [
      { with: "lison", text: "Lison s'éloigne de la ronde de quelques pas, jusqu'au rebord du puits, et crache dans l'eau noire avant de répondre. « Aux Joncs, on la chante aussi. Les vieilles la chantent en faisant la dentelle, pour compter les points. Sept points, un nœud. Le septième point, on le saute. »" },
      { with: "lison", text: "Elle tourne la tête vers toi. « Ce que tu as entendu, je l'ai entendu toute ma vie. {{oreille#ib_lison_dentelle|C'est une chanson de vieilles, ça ne veut rien dire|C'est la première chose qu'on apprend aux enfants des Joncs, pour qu'ils sachent un jour où aller}}. Minuit, la galerie, le septième. D'accord. Je n'en sais pas plus, et c'est vrai. »" },
      { with: "lison", text: "Elle se frotte le nez du dos de la main. « Ce qui est vrai aussi, c'est que je n'aurais rien dit si tu ne l'avais pas entendu. Retiens ça, la prochaine fois que tu te demanderas si je mens. »" },
    ],
    choices: [{ back: "IB_comptine" }] },

  IB_medard: { act: "I", title: "Le banc des vieux", place: "beffroi", backName: "le banc des arcades",
    fx: { clue: "ib_c_taiseurs" },
    text: [
      { first: true, text: "Sous les arcades s'allonge un banc de pierre de vingt pieds, poli par trois siècles de fonds de culotte. Cinq vieux y sont assis, alignés comme des pots sur une étagère. Le plus vieux a une barbe blanche coupée au couteau, une oreille bouchée de coton, et des mains énormes, déformées, posées à plat sur les genoux : des mains de sonneur, aux jointures grosses comme des noix. Les autres l'appellent Médard." },
      { again: true, text: "Médard Coquart est à sa place sur le banc des vieux, les mains à plat sur les genoux, l'oreille bouchée de coton." },
      { after: "ib:medard_non", again: true, text: "Il tourne vers toi sa mauvaise oreille, celle qui est bouchée de coton. C'est une réponse." },
      { after: "ib:faux_air", again: true, text: "« Les sept, à minuit, dit-il sans te regarder. Juste, et faux. Quarante ans de corde, et je l'ai entendu de mon lit. » Il crache entre ses pieds." },
      { if: { has: "pf:comptine" }, first: true, text: "Tu lui dis que le père Gobelin, le marchand de cornets du quai, connaît la comptine lui aussi. Médard ricane. « Gobelin ! Il avait peur de sa grand-mère. Il a toujours peur d'elle, et elle est morte depuis cinquante ans. »" },
      "Quand tu parles de la tour, il tourne vers toi sa bonne oreille. « Quarante ans j'ai sonné là-haut, dit-il. Quarante ans à tirer les cordes de la Grosse Ysaure, et la confrérie m'a mis au banc quand mes doigts ont gonflé. » Il ricane. « Tu veux savoir pour l'horloge ? Tout le monde veut savoir pour l'horloge, et il n'y en a pas un sur cent qui distingue un battant d'un marteau. Des ânes, du premier échevin au dernier badaud. Les gens qui l'ont faite, on les appelait les Taiseurs, quand j'étais petit. Mon grand-père disait ça : les Taiseurs, des gens qui parlaient deux fois dans la même phrase. »",
      "Un des vieux du banc lui donne un coup de coude. Médard hausse les épaules. « Quoi ? Ce sont des contes. {{oreille#ib_medard_contes|Il n'y a rien dans cette tour que des cloches et des pigeons|Il y a dans cette tour une chose que j'ai juré de ne pas montrer, et ma main tremble chaque midi}}. »",
      "Il fredonne, faux, trois notes de la comptine des enfants, puis il s'arrête. « L'air de la reine, la confrérie ne le joue plus depuis trois cents ans. {{oreille|On l'a perdu, voilà tout|On le transmet de bouche à oreille au plus vieux de la confrérie, et le plus vieux, c'est moi}}. »",
      { with: "tibere", text: "Tibère se penche à ton oreille. « Je le connais, le Médard. Il boit au Battant, le soir, du vin de Corbelle. Deux pichets et il chante. Trois et il pleure. »" },
    ],
    choices: [
      { label: "Le convaincre que l'air doit être joué une dernière fois", hide: { has: "ib:air_tente" },
        test: { dom: "social", diff: -10, label: "Délier la langue d'un vieux carillonneur", help: [{ if: { has: "metier:parole" }, v: 15 }, { with: "gildas", v: 10 }, { if: { has: "ib:baptistine" }, v: 10 }] },
        win: { fx: { flag: "ib:air_tente" }, to: "IB_medard_air" }, lose: { fx: { flag: ["ib:air_tente", "ib:medard_non"] }, to: "IB_medard_non" } },
      { label: "L'inviter au Battant pour deux pichets de vin de Corbelle", hide: { has: "ib:air_tente" }, fx: { gold: -3, flag: "ib:air_tente" }, to: "IB_medard_air" },
      { label: "Lui chanter le dernier vers comme le cornet te l'a fait entendre", hide: { any: [{ not: { voile: "ib_comptine" } }, { seen: "IB_medard_air" }] }, fx: { conf: { lison: 5 } }, to: "IB_medard_air" },
      { label: "« Votre main tremble chaque midi. Montrez-moi pourquoi. »", hide: { any: [{ not: { voile: "ib_medard_contes" } }, { seen: "IB_medard_air" }] }, to: "IB_medard_air" },
      { label: "Laisse-moi lui parler comme on parle aux Joncs", who: "lison", hide: { seen: "IB_medard_air" }, to: "IB_medard_air" },
      { back: HUB },
    ] },

  IB_medard_non: { act: "I", title: "Le vieux se lève", place: "beffroi", backName: "le banc des arcades",
    text: [
      "Médard se lève, opération qui lui prend du temps, et pose sur toi un regard de cloche fêlée. « Tu parles bien, dit-il. Tu parles comme les marchands du Conseil quand ils viennent nous expliquer qu'il faut fondre une cloche pour payer un canon. » Il part vers la rue du Battant en traînant la jambe.",
      "Le vieux du bout du banc, muet jusque-là, crache entre ses pieds. « Sa petite-fille, dit-il, les yeux ailleurs. Baptistine. Elle a tout le chant dans la tête, et elle n'a pas juré, elle. La confrérie ne fait pas jurer les filles. »",
    ],
    choices: [
      { label: "La maison des Carillonneurs, où travaille Baptistine", to: "IB_confrerie" },
      { back: HUB },
    ] },

  IB_medard_air: { act: "I", title: "L'air de la reine", place: "beffroi", backName: "le banc des arcades",
    fx: { ep: ["perso", 500], conf: { lison: 3 } },
    text: [
      "Médard regarde longtemps ses mains. Puis il se met à fredonner, très bas, les yeux fermés, en battant la mesure du pouce sur son genou. La comptine des enfants a laissé place à un air plus lent, en sept temps, qui descend comme on descend un escalier. Les autres vieux du banc se taisent. L'un d'eux ôte son bonnet.",
      "« On commence par la Grosse Ysaure, murmure Médard entre deux notes, et on descend. La Bavarde, la Veuve, le Bourdon, la Clarine, la Mouche. Et {{oreille#ib_air|la Petite, pour finir, aussi fort qu'on peut|la Petite, on lève le battant, et on la laisse se taire : c'est le silence qui ouvre}}. »",
      "Il rouvre les yeux. Ils sont mouillés, et il s'en fâche. « Voilà. Tu l'as. Mon grand-père me l'a donné sur ce banc, quand j'avais douze ans, et il m'a dit : {{oreille#ib_medard_grandpere|tu ne le joueras jamais, c'est un air qui porte malheur|tu le donneras à quelqu'un qui l'entend deux fois, et à personne d'autre}}. » Il te regarde, et regarde ton oreille. « Je ne sais pas ce que tu entends, toi. Mais tu as la tête de quelqu'un qui entend. »",
      { with: "lison", text: "Lison s'est accroupie devant le vieux pendant qu'il chantait. Elle lui remet son bonnet sur la tête, doucement, et Médard la laisse faire." },
      { with: "gildas", text: "Frère Gildas a fermé les yeux, lui aussi. Ses lèvres bougent sur les sept temps, sans un son. Il les rouvre quand Médard se tait, et il demande le nom de la septième cloche. « La Petite, dit Médard. On l'appelait la Muette, avant. »" },
    ],
    choices: [
      { label: "Remercier le vieux et lui laisser une pièce pour son vin", fx: { gold: -1, fac: { taiseurs: 3 } }, back: HUB },
      { label: "Le remercier, simplement", back: HUB },
    ] },

  IB_confrerie: { act: "I", title: "La maison des Carillonneurs", place: "beffroi", backName: "la maison des Carillonneurs",
    text: [
      { first: true, text: "La maison de la confrérie est une bâtisse étroite de la rue du Battant, avec une cloche de bronze peinte en guise d'enseigne. Au rez-de-chaussée, une salle basse aux bancs cirés sent le suif et le chanvre ; des cordes neuves y sont enroulées sur des chevilles. Au fond, sur une estrade, attend un clavier d'étude en bois : des leviers ronds alignés comme des manches de couteaux, qui font sonner des lames de fer au lieu de cloches." },
      { again: true, text: "La salle basse de la confrérie, ses cordes enroulées, son clavier d'étude au fond." },
      { after: "ib:cle", again: true, text: "Le doyen lève les yeux de ses comptes, regarde tes mains, puis ta poche. Il garde ses questions pour lui et retourne à ses comptes, plus lentement." },
      "Le doyen de la confrérie, un homme sec en tablier de cuir, te reçoit debout, comme on reçoit un fournisseur. « La tour appartient à la République, l'horloge au maître horloger, les cloches à la confrérie. Les visiteurs, nous leur vendons une gravure du Beffroi pour un liard. » Il désigne une pile de gravures sur la table. « Notre serment {{oreille#ib_doyen|interdit de jouer autre chose que les airs du Conseil|interdit de jouer l'air de la reine, sauf pour qui le demande à deux voix ; et personne ne l'a demandé depuis trois siècles}}. »",
      { when: "day", text: "Au fond de la salle, une jeune fille aux tresses rousses frappe le clavier d'étude du plat des poings, avec une précision furieuse. Les lames de fer tintent. Le doyen soupire sans se retourner. « Baptistine, dit-il. La petite-fille de Médard. Elle joue mieux que la moitié de mes compagnons. Elle ne montera jamais là-haut. »" },
      { when: "night", text: "À cette heure, la salle est vide, à l'exception du doyen qui fait ses comptes à la chandelle. Le clavier d'étude attend sous une toile." },
    ],
    choices: [
      { label: "Acheter une gravure du Beffroi pour un liard", once: true, fx: { gold: -1, item: "ib_gravure" }, back: "IB_confrerie" },
      { label: "« Je vous le demande à deux voix. »", hide: { any: [{ not: { voile: "ib_doyen" } }, { seen: "IB_doyen" }] }, to: "IB_doyen" },
      { label: "Parler à Baptistine, au clavier d'étude", hide: { any: [{ night: true }, { has: "beffroi:ouverte" }] }, to: "IB_baptistine" },
      { label: "Écouter ce qui agite la confrérie", hide: { any: [{ not: { has: "ib:bapt_joue" } }, { seen: "IB_baptistine_apres" }] }, to: "IB_baptistine_apres" },
      { back: HUB },
    ] },

  IB_doyen: { act: "I", title: "À deux voix", place: "beffroi", backName: "la maison des Carillonneurs",
    fx: { clue: "ib_c_serment", ep: ["perso", 300] },
    text: [
      "Le doyen te regarde comme on regarde un chien qui se met à parler. Il pose sa plume. Il va fermer la porte de la rue, et revient lentement, en s'essuyant les mains sur son tablier.",
      "« À deux voix, répète-t-il. Il y a un vieux texte, dans le coffre de la confrérie, qui dit qu'un jour quelqu'un viendra le demander à deux voix, et qu'il faudra le laisser monter. Personne n'a jamais su ce que ça voulait dire. Mon prédécesseur pensait qu'il fallait venir à deux. » Il secoue la tête. « Je ne sais pas comment vous avez su la formule. Je ne veux pas le savoir. »",
      "Il sort de son tablier un anneau de fer avec une seule clé, longue et noire. « La petite porte des carillonneurs, côté canal. Elle donne dans l'escalier, sous le garde. Je {{oreille#ib_doyen_cle|ne vous ai rien donné|vous la donne parce que j'ai peur de ce que dira la ville si je refuse, et plus peur encore de ce qu'elle dira si j'accepte}}. Rapportez-la avant l'aube. »",
    ],
    choices: [
      { label: "Prendre la clé", fx: { item: "ib_cle_carillon", flag: "ib:cle" }, back: HUB },
    ] },

  IB_baptistine: { act: "I", title: "Baptistine", place: "beffroi", backName: "le clavier d'étude",
    text: [
      "Baptistine Coquart a quinze ans, des tresses rousses et des poignets bandés de toile, à force de frapper. Elle continue de frapper quand tu t'approches. « Si c'est pour une gravure, c'est le doyen. Si c'est pour me dire qu'une fille, ça ne monte pas, c'est déjà fait ce matin. »",
      "Quand tu parles de son grand-père et de l'air de la reine, ses poings restent en l'air. « Il te l'a chanté ? » Elle te dévisage. « {{oreille#ib_bapt_air|Il ne le chante à personne|Il me le chante tous les soirs depuis que j'ai six ans, et il me fait jurer de l'oublier}}. »",
      "Elle baisse la voix, l'œil sur le doyen. « Il y a une chose que personne ne sait, à part moi et maître Vauquelin. La nuit, l'horloger désengage les automates, pour ménager les rouages : un levier de buis, dans la salle des roues, derrière la troisième roue. Si on ne le remet pas, la reine et ses muets dorment jusqu'à midi. » Elle hausse les épaules. « Je le sais parce que je l'ai remis une fois, pour voir. On m'a battue pour ça. »",
      "Elle reprend ses leviers, frappe trois notes, s'arrête. « Je veux jouer une fois sur le vrai clavier. Une seule. {{oreille#ib_bapt_prix|C'est tout ce que je demande|Et si tu m'emmènes, je te donne le carnet de mon grand-père}}. »",
    ],
    fx: { flag: ["ib:baptistine", "ib:levier"] },
    choices: [
      { label: "« Je t'emmènerai, la nuit où je monterai. Donne-moi le carnet. »", hide: { not: { voile: "ib_bapt_prix" } }, once: true, fx: { item: "ib_partition", flag: "ib:bapt_promesse" }, back: "IB_confrerie" },
      { label: "« Si je monte un jour, tu joueras. Je te le promets. »", hide: { voile: "ib_bapt_prix" }, once: true, fx: { flag: "ib:bapt_promesse", conf: { lison: 3 } }, back: "IB_confrerie" },
      { label: "La remercier pour le levier", back: "IB_confrerie" },
    ] },
});

Object.assign(P, {
  IB_horloge: { act: "I", title: "Le cadran de la reine", place: "beffroi", backName: "le cadran",
    text: [
      "Le cadran fait douze pieds de large. Sur l'émail bleu brillent des étoiles d'or à huit branches, une lune de cuivre qui montre ses quartiers, et une seule aiguille, forgée en forme de main dont l'index désigne l'heure. Autour, en lettres d'or écaillées, court une inscription dans la vieille langue du delta, que les marchands de la place lisent sans la comprendre depuis trois siècles.",
      "*La reine compte les heures pour son peuple ; {{loupe#ib_cadran|ses sept muets les sonnent à sa place, et la ville dort en paix|ses sept muets gardent sa parole, et le septième la rend à qui sait se taire à minuit}}.*",
      "Sous le cadran, la galerie de pierre ouvre ses huit portes de chêne. Chaque porte porte une figure sculptée : une couronne sur la grande, et sur les sept petites, une main posée sur une bouche. La septième main est un peu plus grande que les autres, et la pierre autour est plus claire, comme si on l'avait retaillée.",
      { with: "gildas", text: "Frère Gildas lit l'inscription à mi-voix, en traduisant mot à mot. « La reine compte les heures pour son peuple ; ses sept muets les sonnent à sa place. » Il s'arrête. « Le reste est abîmé. Il manque des lettres, ou il y en a trop. On a écrit par-dessus, peut-être. Il faudrait une meilleure lumière que la mienne. »" },
      { with: "tibere", text: "Tibère plisse les yeux vers la galerie. « Les gamins du Guet pariaient sur les muets, à midi : lequel sortirait le dernier. C'était toujours le septième. Toujours. On n'a jamais compris comment le vieux Ruchaud gagnait à tous les coups. »" },
      { if: { lens: "loupe" }, text: "Tu lèves la loupe d'ambre vers le cadran, à bout de bras, et les lettres d'or se mettent à luire par endroits." },
    ],
    choices: [{ back: "IB_pied" }] },

  IB_midi: { act: "I", title: "Midi au Beffroi", place: "beffroi", backName: "la place à midi", takes: "noon",
    fx: { flag: "ib:midi" },
    text: [
      "À midi, la place ralentit sans s'arrêter. Les marchands lèvent la tête par habitude, les étrangers par curiosité. Là-haut, une roue grince ; un poids descend quelque part dans la tour avec un bruit de chaîne. La grande porte de la galerie s'ouvre la première.",
      "La reine sort. Elle est de bois peint, grandeur nature, avec une couronne de cuivre et une robe bleue écaillée, et elle glisse sur un rail en tournant lentement la tête vers la place. Derrière elle, les sept muets sortent un à un de leurs petites portes, vêtus de gris, une main sur la bouche. Le carillon joue l'air du Conseil, un air de marche pour les jours de foire. Ils font le tour de la galerie. Ils rentrent. La représentation a duré le temps de compter jusqu'à quatre-vingts.",
      "Le septième rentre le dernier. Il s'arrête devant sa porte un instant de plus que les autres, et sa main libre, la droite, reste fermée. Cette main {{pie#ib_main|est un poing de bois peint, comme celle des autres|est un poing de bronze articulé sous la peinture, dont le pouce est un loquet}}. Puis la porte se referme sur lui avec un claquement sec.",
      { with: "lison", text: "Lison a suivi le septième muet des yeux jusqu'à sa porte. « Il ne tient rien, dit-elle. Il serre. »" },
      { if: { voile: "ib_comptine" }, text: "Minuit, a dit la comptine sous le cornet. L'automate sort à midi seulement. Il faudrait le faire sortir à l'autre heure." },
    ],
    choices: [{ back: "IB_pied" }] },

  IB_gardes: { act: "I", title: "Les gardes de la porte", place: "beffroi", backName: "la porte de la tour",
    text: [
      "Deux gardes du Conseil encadrent la porte cloutée, en casaque bleue frappée de la tour d'argent. L'un est grand et roux ; l'autre, petit, s'appuie sur sa hallebarde comme sur une canne. Le grand te barre la route avant que tu aies ouvert la bouche. « La tour est fermée aux visiteurs. Ordre du Conseil. Il faut un billet du chanoine. »",
      { if: { has: "pf:garde_muette" }, text: "Le petit garde, tu l'as entendu au Falot, le lendemain de la fête, raconter ses nuits sur le palier. Il te reconnaît aussi. Il bâille pour se donner une contenance." },
      "Le petit bâille. « Et le chanoine n'en donne plus depuis {{oreille#ib_gants|le printemps dernier|que les gants gris lui ont payé ses dettes de la semaine dernière}}. » Le grand lui jette un regard noir, et le petit se tait.",
      "« Personne ne monte {{oreille#ib_garde_nuit|la nuit, même pas nous|la nuit, sauf Norbert qui dort sur le palier du deuxième avec sa bouteille}}, ajoute le grand. Circulez. »",
      { with: "tibere", text: "Tibère salue le grand garde d'un doigt sur le front. « Oudin. Ta femme va mieux ? » Le garde rougit, grogne qu'elle va bien, et regarde ailleurs. Tibère s'en tient là, et il a l'air content de lui." },
    ],
    choices: [
      { label: "Glisser deux ducats dans le gant du petit garde", fx: { gold: -40 }, hide: { has: "ib:permis" },
        test: { dom: "social", diff: -20, label: "Acheter un garde du Conseil", help: [{ with: "tibere", v: 15 }, { if: { has: "passe:voleur" }, v: 5 }, { if: { has: "pf:garde_muette" }, v: 10 }] },
        win: { fx: { flag: "ib:permis", note: "Le petit garde te souffle : « À la deuxième heure de nuit. On aura le dos tourné. »" }, back: "IB_pied" },
        lose: { fx: { note: "Le grand garde a vu ton geste. Il prend les ducats, et il te fait reculer du bout de sa hallebarde." }, back: "IB_pied" } },
      { label: "« Les gants gris sont déjà montés, alors ? Le Conseil le sait ? »", hide: { any: [{ not: { voile: "ib_gants" } }, { has: "ib:permis" }] }, to: "IB_gardes_gants" },
      { back: "IB_pied" },
    ] },

  IB_gardes_gants: { act: "I", title: "Les gants gris", place: "beffroi", backName: "la porte de la tour",
    fx: { clue: "ib_c_gants", flag: "ib:permis", ep: ["perso", 300] },
    text: [
      "Le petit garde blêmit. Le grand le regarde, puis toi, puis la façade du Conseil de l'autre côté de la place, comme pour mesurer la distance jusqu'aux fenêtres des échevins. « Qui vous a dit ça ? »",
      "Tu te tais. Le silence fait son travail. Le petit garde finit par cracher le morceau, très bas : « Un homme en gants gris, poli, la voix douce. Il est venu trois fois, avec deux types muets comme des tombes. Il a payé le chanoine, il a payé Norbert, et il est monté une nuit. Il est redescendu à l'aube, de mauvaise humeur. »",
      "Le grand garde soupire. « Bon. Si quelqu'un d'autre monte, on ne l'a pas plus vu que celui-là. Deuxième heure de nuit. On fait la ronde du canal. » Il ajoute, sans te regarder : « Et vous ne nous avez jamais parlé. »",
    ],
    choices: [{ back: "IB_pied" }] },

  IB_chanoine: { act: "I", title: "La sacristie du Beffroi", place: "beffroi", backName: "la sacristie",
    text: [
      "La sacristie sent la cire froide et le chou. Le chanoine Sidoine Mainfroy est un homme rond aux joues couperosées, en surplis taché, qui compte des cierges dans un coffre. Un trousseau de clés énorme pend à sa ceinture et tinte à chaque cierge, si bien qu'il compte deux fois : une fois de la voix, une fois des clés.",
      "« Le Beffroi, dit-il, appartient à Dieu, à la République et à la confrérie, dans cet ordre, et j'en garde les clés au nom des trois, ce qui fait de moi, vous en conviendrez, l'homme le plus chargé de la place. Monter ? Pour quoi faire ? Il n'y a là-haut que des cloches, des rouages et de la fiente de pigeon. » Il referme le coffre d'un coup de genou. « La tour {{oreille#ib_chanoine_dette|n'est pas à vendre, et elle ne se visite pas|est déjà vendue, ou presque : la Banque Marrel tient mes billets, et son homme aux gants gris a eu sa nuit}}. »",
      { with: "gildas", text: "Frère Gildas salue le chanoine d'une inclinaison profonde. Le chanoine lui rend un salut plus court, en regardant sa bure du Mont avec une politesse inquiète. « Le Mont s'intéresse à nos cloches, maintenant ? » Gildas répond qu'il s'intéresse à toutes les choses que Dieu a laissé faire aux hommes." },
      { if: { has: "passe:voleur" }, text: "Tu comptes les clés du trousseau machinalement : vingt-deux. Une seule est assez longue pour la porte de la tour. Vieille habitude de métier." },
    ],
    choices: [
      { label: "Lui demander la permission de monter, pour l'âme d'Odeline", hide: { any: [{ has: "ib:permis" }, { has: "ib:chanoine_non" }] },
        test: { dom: "social", diff: -10, label: "Obtenir un billet du chanoine", help: [{ with: "gildas", v: 15 }, { if: { has: "metier:parole" }, v: 10 }, { if: { fac: "moines", min: 5 }, v: 10 }] },
        win: { fx: { flag: "ib:permis", item: "ib_billet_chanoine" }, to: "IB_chanoine_oui" },
        lose: { fx: { flag: "ib:chanoine_non" }, to: "IB_chanoine_non" } },
      { label: "Offrir une aumône pour la refonte des cloches", hide: { any: [{ has: "ib:permis" }, { has: "ib:chanoine_non" }] }, fx: { gold: -60, flag: "ib:permis", item: "ib_billet_chanoine" }, to: "IB_chanoine_oui" },
      { label: "Demander à voir les vieux registres du chapitre", hide: { any: [{ seen: "IB_archives" }, { not: { any: [{ has: "ib:permis" }, { present: "gildas" }] } }] }, to: "IB_archives" },
      { label: "« La Banque Marrel tient vos billets, mon père. Le Conseil serait ravi de l'apprendre. »", hide: { any: [{ not: { voile: "ib_chanoine_dette" } }, { has: "ib:permis" }] }, to: "IB_chanoine_dette" },
      { back: "IB_pied" },
    ] },

  IB_chanoine_oui: { act: "I", title: "Le billet du chanoine", place: "beffroi", backName: "la sacristie",
    text: [
      "Le chanoine soupire comme on soupire au confessionnal, prend une plume, et écrit trois lignes sur un bout de vélin qu'il signe d'un paraphe en forme d'escargot. « Pour régler l'horloge de la reine, au nom de la confrérie. Les gardes de nuit ne savent pas lire, mais ils connaissent mon escargot. » Il sable l'encre. « Vous montez à vos risques. Si vous tombez, je ne vous enterre pas gratis. »",
      { outcome: "win", text: "Il ajoute, la main encore sur le billet : « Odeline Carrus. Elle me donnait des chandelles, à la Toussaint, pour les noyés. Une femme bizarre. Je l'aimais bien. »" },
    ],
    choices: [{ back: "IB_pied" }] },

  IB_chanoine_non: { act: "I", title: "La porte de la sacristie", place: "beffroi", backName: "la sacristie",
    text: [
      "Le chanoine te pousse dehors avec son coffre de cierges, au sens propre, en avançant sur toi jusqu'à ce que tu sois sur le seuil. « Pour l'âme d'Odeline Carrus, je dirai une messe. Pour la tour, revenez avec un ordre du Conseil, ou avec un miracle. » La porte claque.",
      "Sur la place, tu entends le trousseau tinter derrière le battant, longtemps : le chanoine recompte ses clés, une à une, pour s'assurer qu'elles sont toutes là.",
    ],
    choices: [{ back: "IB_pied" }] },

  IB_chanoine_dette: { act: "I", title: "Les billets du chanoine", place: "beffroi", backName: "la sacristie",
    fx: { flag: ["ib:permis", "ib:chanoine_tenu"], item: "ib_billet_chanoine", clue: "ib_c_chanoine", fac: { banque: -3 } },
    text: [
      "Le chanoine devient très pâle, puis très rouge. Il ferme la porte de la sacristie, la verrouille, et s'assied sur son coffre de cierges comme si ses jambes avaient cédé. « Qui vous a dit ça ? Le doyen ? Ce vieux fou de Médard ? »",
      "Tu gardes le silence. Il se frotte le visage. « Onze cents ducats. Les cloches de la tour sont fêlées, la Mouche et la Clarine, il fallait les refondre, et le Conseil n'a pas un liard. La Banque a prêté. Et puis un homme est venu, un homme poli en gants gris, et il m'a dit que la Banque oublierait la dette si je lui ouvrais la tour une nuit. » Il te regarde. « Il est redescendu les mains vides, et furieux. »",
      "Il écrit un billet d'une main qui tremble. « Prenez. Montez. Trouvez ce qu'il cherchait, ou ne trouvez rien, mais ne dites rien au Conseil. {{oreille#ib_chanoine_peur|Je prierai pour vous|Si la Banque apprend que je vous ai ouvert, elle me fera saisir jusqu'à mon bréviaire}}. »",
    ],
    choices: [{ back: "IB_pied" }] },

  IB_horloger: { act: "I", title: "L'atelier de l'horloger", place: "beffroi", backName: "l'atelier de l'horloger",
    text: [
      "L'atelier sent l'huile de pied de bœuf et la limaille. Des roues dentées de toutes tailles pendent au plafond comme des jambons ; des ressorts dorment dans des bocaux ; sur l'établi, sous une loupe de verre fixée à un bras de cuivre, une petite horloge de table attend qu'on lui remette les entrailles. Maître Aldebert Vauquelin, moustache cirée, manches retroussées, lève à peine les yeux.",
      { when: "day", text: "« Si c'est pour une montre, je n'en fais plus : la montre est une horloge pour gens pressés, et je méprise les gens pressés. Si c'est pour l'horloge de la reine, je n'ai pas le temps. Je suis seul pour graisser quarante roues et six poids, et je n'ai plus d'apprenti. » Il souffle sur une pièce. « Mon apprenti {{oreille#ib_apprenti|s'est cassé la jambe dans l'escalier de la tour|a reçu dix ducats d'un homme en gants gris pour lui dessiner la tour, et il a filé à Port-Vasier avec l'argent}}. »" },
      { when: "night", text: "À cette heure, Vauquelin travaille à la chandelle, les yeux rouges. « Si vous êtes un voleur, il n'y a rien ici qui vaille le dérangement. Si vous êtes un client, revenez demain. » Il reste assis." },
      { with: "tibere", text: "Tibère regarde les roues suspendues avec méfiance, comme si elles allaient lui tomber dessus, et garde les mains dans son dos." },
    ],
    choices: [
      { label: "Lui proposer tes bras pour graisser les rouages", hide: { any: [{ night: true }, { seen: "IB_graisseur" }] },
        test: { dom: "savoir", diff: 0, label: "Se faire engager comme graisseur", help: [{ if: { has: "metier:mains" }, v: 20 }, { arch: "voleur", v: 5 }, { with: "gildas", v: 5 }] },
        win: { to: "IB_graisseur" }, lose: { fx: { note: "Vauquelin te fait démonter une roue d'essai, te regarde faire, et soupire. Il te prend quand même, faute de mieux, à demi-salaire." }, to: "IB_graisseur" } },
      { label: "Lui parler de son septième muet", hide: { any: [{ not: { has: "beffroi:ouverte" } }, { seen: "IB_horloger_apres" }] }, to: "IB_horloger_apres" },
      { label: "« Votre apprenti a été payé par la Banque. Vous ne le reverrez pas. »", hide: { any: [{ not: { voile: "ib_apprenti" } }, { seen: "IB_graisseur" }] }, fx: { conf: { tibere: 2 } }, to: "IB_graisseur" },
      { back: "IB_pied" },
    ] },
});

Object.assign(P, {
  IB_graisseur: { act: "I", title: "Graisseur des rouages", place: "beffroi", backName: "la salle des roues", takes: "evening",
    fx: { flag: ["ib:graisseur", "ib:levier"], gold: 5, ep: ["perso", 400] },
    text: [
      "Vauquelin t'engage pour la journée, cinq liards et la soupe, et te fait monter par l'escalier des carillonneurs avec un pot de graisse de mouton et un pinceau de crin. L'escalier tourne sur lui-même deux cents fois. Au premier palier, tu trouves la chapelle haute, vide. Au deuxième, une porte de garde, un tabouret, et une bouteille vide couchée dessous. Au troisième s'ouvre la salle des poids, où six pierres grosses comme des veaux pendent à des chaînes dans un puits carré qui descend jusqu'au socle.",
      "Puis vient la salle des roues, sous le cadran : quarante roues de fer et de chêne, des arbres de couche, des cames, des leviers, et le battement régulier de l'échappement, qui emplit tout. Vauquelin te montre où graisser, où ne jamais mettre la main, et, derrière la troisième roue, un levier de buis poli par les doigts. « Les automates, dit-il. Je les désengage le soir, pour ménager les rails. On les remet le matin. Ne touche jamais à ça. »",
      "Tu graisses jusqu'au soir. Par une lucarne, tu vois l'envers de la galerie : les huit automates sur leur rail, de dos, en rang, comme des acteurs qui attendent derrière le rideau. Le septième porte une plaque de bronze vissée dans le dos, et une serrure à la place du cœur.",
      { with: "lison", text: "Lison a refusé de graisser quoi que ce soit. En revanche, elle a passé l'après-midi à compter les marches et les portes, et à te les réciter à voix basse dans l'ordre. Elle les sait par cœur." },
      "Au soir, Vauquelin compte tes pots, te paie, et te dit de revenir demain si tu veux. Il ferme la petite porte du canal derrière toi avec une clé qu'il garde au cou. Tu as vu où il range la clé de rechange : sous le pot de graisse vide, au pied de l'escalier.",
    ],
    choices: [
      { label: "Te glisser derrière une roue au lieu de partir, et attendre la nuit dans la tour", to: "IB_cachette" },
      { label: "Sortir avec lui, et revenir plus tard par la petite porte", fx: { flag: "ib:cle_vauquelin" }, back: HUB },
    ] },

  IB_marche: { act: "I", title: "Les étals de la place", place: "beffroi", backName: "les étals",
    text: [
      { first: true, text: "Le marché de la place du Beffroi s'étire des arcades au canal. Il y a les fours roulants des marchands d'oublies, qui sentent le beurre et le miel. Il y a un colporteur aux reliques, assis sur sa malle ouverte, au milieu d'os enveloppés de soie ; à en juger par le nombre, sainte Ursule avait au moins six bras. Un joueur de bonneteau a monté sa planche sur deux tonneaux et fait voler trois gobelets d'étain sous le nez des badauds. Et, sur sa borne de pierre, le crieur du Conseil lit à pleine voix une ordonnance que personne n'écoute." },
      { again: true, when: "day", text: "Les étals de la place : les oublies, les reliques, le bonneteau, le crieur sur sa borne." },
      { after: "ib:cuvelier_tenu", again: true, when: "day", text: "Anseaume Cuvelier pousse sa charrette à l'autre bout des étals. Il te voit, et il prend une autre allée, ses deux gardes derrière lui." },
      { again: true, when: "night", text: "Les étals sont fermés, bâchés, ficelés. Seul le colporteur aux reliques dort sur sa malle, un bras passé dans la poignée, comme on dort sur un trésor. La borne du crieur est vide." },
    ],
    choices: [
      { label: "Le four d'Herminie, la marchande d'oublies", hide: { night: true }, to: "IB_oublies" },
      { label: "Le colporteur aux reliques", hide: { night: true }, to: "IB_colporteur" },
      { label: "La planche du joueur de bonneteau", hide: { night: true }, to: "IB_bonneteau" },
      { label: "Le crieur du Conseil, sur sa borne", hide: { night: true }, to: "IB_crieur" },
      { label: "Le puits de la reine, au milieu de la place", to: "IB_puits" },
      { label: "La façade du Conseil des Comptoirs", hide: { night: true }, to: "IB_conseil" },
      { label: "Les deux hommes en manteau gris qui te suivent depuis le four d'Herminie", hide: { any: [{ night: true }, { seen: "IB_ruelle" }, { not: { seen: "IB_medard" } }] }, to: "IB_ruelle" },
      { label: "Creuser sous la borne du crieur, comme le dit la gravure", hide: { any: [{ not: { voile: "ib_gravure" } }, { seen: "IB_borne" }] }, to: "IB_borne" },
      { back: HUB },
    ] },

  IB_barque: { act: "I", title: "La barque de Lison", place: "beffroi", backName: "la barque de Lison", with: "lison",
    text: [
      { with: "lison", text: "La barque de Lison s'appelle *l'Effrontée* ; le nom est peint à l'envers sur le tableau arrière, pour que les poissons le lisent, dit-elle. Au fond, l'inventaire est vite fait : un panier d'osier, une couverture roulée, une lanterne, des nasses, une gourde, et un coffre de bord fermé d'un cadenas. Elle s'assied sur le banc de nage, les avant-bras sur les genoux, et te regarde t'asseoir en face comme on regarde un passager qui va tout faire chavirer." },
      { with: "lison", when: "day", text: "« Tu veux savoir des choses, dit-elle. Tout le monde veut savoir des choses. Pose tes questions. Je réponds à une sur deux, c'est le tarif. »" },
      { with: "lison", when: "night", text: "La nuit, le canal clapote contre la coque, et la lanterne fait danser des ronds sur l'eau. Lison a ôté ses bottes. « Les gardes changent à minuit, dit-elle. On a le temps. Pose tes questions. »" },
      { with: "lison", text: "« Ma grand-mère ? » Elle tire sur une de ses tresses. « Elle a quatre-vingt-quatre ans. Elle est aveugle depuis ses cinquante ans, et elle voit mieux que moi. Elle {{oreille#ib_lison_mere|m'a élevée parce que ma mère est morte jeune, voilà tout|m'a élevée pour que je garde une chose que je n'ai jamais vue, et je commence à en avoir assez}}. »" },
      { with: "lison", text: "« Et toi ? Tu fais quoi, quand tu as trouvé ce que tu cherches ? Tu le revends ? » Elle sourit de travers. « Odeline revendait. {{oreille#ib_lison_odeline|C'était son métier, je ne la juge pas|C'est pour ça que ma grand-mère ne lui a jamais pardonné d'être partie}}. »" },
    ],
    choices: [
      { label: "Lui demander ce qu'elle pense de toi, vraiment", hide: { seen: "IB_barque_toi" }, to: "IB_barque_toi" },
      { label: "Ouvrir son coffre de bord pendant qu'elle a le dos tourné", hide: { any: [{ seen: "IB_barque_coffre" }, { has: "ib:lison_coffre" }] }, to: "IB_barque_coffre" },
      { back: HUB },
    ] },

  IB_barque_toi: { act: "I", title: "Ce que pense Lison", place: "beffroi", backName: "la barque de Lison", with: "lison",
    text: [
      { with: "lison", text: "Lison met longtemps à répondre. Elle repêche une feuille dans l'eau avec deux doigts, l'examine, la rejette. « Je pense que tu {{oreille#ib_lison_pense|es comme les autres gens de la ville, à courir après ce qui brille|es la première personne de la ville qui écoute avant de parler, et que ça me fait peur}}. »" },
      { with: "lison", text: "Elle se lève, fait tanguer la barque exprès, et reprend sa gaffe. « Et je pense que tu ronfles. Je t'ai entendu{e}, l'autre nuit, depuis le quai. » Elle te regarde du coin de l'œil. « {{oreille|Ne te fais pas d'idées|Je suis restée sur le quai toute la nuit pour te surveiller, et j'ai trouvé ça moins long que prévu}}. »" },
      { with: "lison", if: { has: "poids:amour" }, else: "Tu restes sans réponse, et elle a l'air de trouver ça très bien.", text: "Tu penses, malgré toi, à quelqu'un d'autre, à qui tu n'as jamais rien dit. Lison voit passer la chose sur ton visage, et elle a la bonté de regarder l'eau." },
    ],
    choices: [
      { label: "« Moi aussi, tu me fais peur. »", fx: { conf: { lison: 10 } }, back: "IB_barque" },
      { label: "« Je ne ronfle pas. »", fx: { conf: { lison: 5 } }, back: "IB_barque" },
    ] },

  IB_barque_coffre: { act: "I", title: "Le coffre de l'Effrontée", place: "beffroi", backName: "la barque de Lison", with: "lison",
    fx: { flag: "ib:lison_coffre" },
    text: [
      { with: "lison", text: "Lison s'est penchée par-dessus bord pour démêler une amarre. Le cadenas du coffre est un vieux cadenas de marinier, de ceux qui s'ouvrent en tirant fort au bon endroit. Tu tires au bon endroit. Dedans, tu trouves une chemise de rechange, un couteau à anguilles, un sac de sel, et une petite bourse de cuir brodée de joncs, lourde." },
      { with: "lison", text: "Dans la bourse, il y a vingt ducats d'argent et un billet plié. *Pour la course, et pour le reste. {{loupe#ib_lison_billet|Garde l'œil sur l'héritier|Si l'héritier entend, ramène-le aux Joncs avant la Saint-Jean, de gré ou de force}}. A.* C'est une écriture d'aveugle, énorme, de travers, qui déborde des lignes." },
      { with: "lison", text: "Quand tu relèves la tête, Lison te regarde, assise sur le plat-bord, les bras croisés. Elle a l'air de quelqu'un qui vient de gagner un pari contre elle-même, et la colère attendra. « Tu fouilles, dit-elle. Odeline fouillait aussi. Remets tout comme c'était, la bourse à gauche. »" },
    ],
    choices: [
      { label: "Tout remettre en place, la bourse à gauche", fx: { conf: { lison: 3 } }, back: "IB_barque" },
      { label: "« Ta grand-mère paie bien. Pour me surveiller ? »", fx: { flag: "lison:mission", conf: { lison: -3 } }, back: "IB_barque" },
    ] },

  IB_tibere_retour: { act: "I", title: "Tibère au Battant", place: "beffroi", backName: "la taverne du Battant",
    text: [
      "Tibère est au fond du Battant, la taverne des carillonneurs, devant un pichet à moitié vide et un jeu de dés qu'il garde en main. Il les fait rouler entre ses doigts, d'une main à l'autre, comme un chapelet. Il te voit entrer et range les dés dans sa poche, vite, avec la honte de quelqu'un qu'on surprend à manger en cachette.",
      "« Tu as changé d'avis, dit-il. {{oreille#ib_tibere_battant|Je savais que tu reviendrais|J'espérais que tu reviendrais, parce que l'homme aux gants gris veut des nouvelles et que je n'en ai plus}}. » Il vide le pichet. « Je viens. Je connais le garde de nuit de la tour. Norbert. Il me doit trois parties. »",
    ],
    choices: [
      { label: "« Viens. »", fx: { join: "tibere", unflag: ["tibere:refuse", "ib:tibere_battant"], conf: { tibere: 5 } }, back: HUB },
      { label: "« Qui veut des nouvelles, Tibère ? »", hide: { not: { voile: "ib_tibere_battant" } }, fx: { join: "tibere", unflag: ["tibere:refuse", "ib:tibere_battant"], flag: "ib:tibere_su", fear: { tibere: 10 } }, to: "IB_tibere_aveu" },
    ] },

  IB_tibere_aveu: { act: "I", title: "Le pichet vide", place: "beffroi", backName: "la taverne du Battant",
    text: [
      { with: "tibere", text: "Tibère regarde le fond de son pichet. Il le tourne, le retourne. « Je ne sais pas de quoi tu parles », dit-il, et il le dit si mal qu'il en a honte lui-même. Il repose le pichet. « Un homme poli. Il me donne cinq ducats la semaine pour savoir où tu vas. Je lui dis où tu vas. Ce n'est pas grand-chose, où tu vas. Tout le monde le voit. »" },
      { with: "tibere", text: "« Je ne lui dis pas ce que tu fais, ajoute-t-il très vite. Ce que tu dis, ce que tu trouves. {{oreille#ib_tibere_rosalie|Je ne suis pas un mouchard|Je lui dirais tout pour vingt ducats, et Rosalie pourrait ouvrir sa boutique}}. » Il se lève. « Je viens quand même. Si tu veux. Tu me surveilleras. Ce sera nouveau. »" },
    ],
    choices: [
      { label: "« Je te surveillerai. Viens. »", back: HUB },
    ] },

  IB_gildas_signe: { act: "I", title: "Le moine du puits", place: "beffroi", backName: "le puits de la reine",
    fx: { join: "gildas", unflag: ["ib:gildas_loin", "gildas:refuse"], conf: { gildas: 5 } },
    text: [
      "Frère Gildas t'a suivi{e} toute la journée à vingt pas, en gardant toujours la même distance. Il s'asseyait sur une borne quand tu t'arrêtais, il priait quand tu parlais aux gens, il regardait le Beffroi quand tu regardais le Beffroi. Quand tu lui fais signe, il se lève aussitôt.",
      { with: "gildas", text: "« Merci, dit-il simplement. Je commençais à avoir mal au dos, sur vos bornes de la République. » Il marche à côté de toi, le bâton à la main. « J'ai écouté, de loin. J'ai entendu des enfants, un vieux, un chanoine. Chacun dit la même chose sans le savoir : qu'il faut se taire pour entendre. C'est une drôle de ville. »" },
    ],
    choices: [{ back: HUB }] },
});

Object.assign(P, {
  // ------------------------------------------------------------------ the night: ways into the tower
  IB_nuit: { act: "I", title: "La place dans le noir", place: "beffroi", backName: "la place dans le noir", takes: "night",
    text: [
      { first: true, text: "La nuit tombe sur la place comme un couvercle. Les oubliers éteignent leurs fours et les poussent sous les arcades ; les vieux quittent leur banc ; les gardes de jour s'en vont en traînant leurs hallebardes. Il reste le tic-tac du cadran, que le vacarme du jour couvre toujours ; le clapotis du canal ; et une lanterne à la porte de la tour. Le tic-tac l'emporte bientôt sur le reste : l'oreille qui l'a saisi une fois le retrouve partout, et la place vide semble respirer à sa cadence." },
      { again: true, text: "La place dans le noir, le tic-tac du cadran, la lanterne de la porte. Le Beffroi est une masse plus noire que le ciel." },
      { after: "ib:alerte", text: "Depuis les cloches de l'autre nuit, deux gardes au lieu d'un font les cent pas devant la porte, et ils ont l'œil." },
      { after: "ib:bapt_promesse", text: "Une ombre se détache des arcades : Baptistine, un châle sur la tête, les poignets bandés. « Tu as promis, chuchote-t-elle. Je viens. Je connais les marches dans le noir. » Elle s'est dispensée de demander la permission." },
      { with: "lison", text: "Lison a amené *l'Effrontée* sous la tour, par le canal, et l'a amarrée à un anneau rouillé, juste sous la petite porte des carillonneurs. « Pour la sortie, dit-elle. On ne sait jamais par où on sort. »" },
      { with: "tibere", text: "Tibère compte les pas du garde à mi-voix, en vieux sergent. « Quarante aller, quarante retour. Il s'arrête au coin du canal pour pisser. C'est là. »" },
    ],
    choices: [
      { label: "Montrer au garde le billet du chanoine", hide: { not: { has: "ib:permis" } }, to: "IB_entree_tour" },
      { label: "Ouvrir la petite porte des carillonneurs avec la clé du doyen", hide: { not: { item: "ib_cle_carillon" } }, to: "IB_entree_tour" },
      { label: "Prendre la clé de rechange sous le pot de graisse, au pied de la petite porte", hide: { not: { has: "ib:cle_vauquelin" } }, to: "IB_entree_tour" },
      { label: "Forcer la petite porte du canal", to: "IB_effraction" },
      { label: "Monter par les toits du Conseil jusqu'au colombier de la tour", to: "IB_toits" },
      { label: "Renoncer pour cette nuit", back: HUB },
    ] },

  IB_fermeture: { act: "I", title: "À la fermeture", place: "beffroi", backName: "la chapelle basse", takes: "evening",
    text: [
      "Le soir, le chanoine fait sa tournée de fermeture : il ouvre la chapelle basse pour les vêpres, la ferme, monte dire un pater à la chapelle haute, redescend, verrouille la porte de la tour derrière lui, et rentre souper. Il le fait depuis vingt ans dans le même ordre, avec le même trousseau. L'assistance des vêpres se compose de trois vieilles et d'un mendiant qui dort.",
      "Pendant le pater du chanoine, en haut, la porte de la tour reste ouverte. Le garde de jour est parti ; le garde de nuit n'est pas encore arrivé. Tu as tout juste le temps de traverser la chapelle, de passer la porte, de te glisser sous l'escalier, derrière les cordes de rechange.",
      { with: "any", text: "À plusieurs, vous feriez trop de bruit. Tes compagnons attendront la nuit dehors, et te rejoindront quand tu leur ouvriras la petite porte du canal." },
    ],
    choices: [
      { label: "Te glisser sous l'escalier pendant le pater", test: { dom: "discretion", diff: -10, label: "Se laisser enfermer dans la tour", help: [{ if: { has: "passe:voleur" }, v: 10 }, { arch: "voleur", v: 10 }] },
        win: { to: "IB_cachette" },
        lose: { fx: { note: "Le chanoine redescend plus tôt que prévu, te trouve sous l'escalier, et te raccompagne dehors par l'oreille en te traitant de pilleur de troncs." }, back: "IB_pied" } },
      { label: "Te mêler aux dévotes et rester agenouillé{e} dans un coin sombre de la chapelle", test: { dom: "social", diff: -10, label: "Passer pour une âme pieuse", help: [{ with: "gildas", v: 15 }, { arch: "pretre", v: 10 }] },
        win: { to: "IB_cachette" },
        lose: { fx: { note: "Le chanoine te tape sur l'épaule à la fin des vêpres. « La maison de Dieu ferme, mon enfant. Elle rouvre demain, Dieu aussi. »" }, back: "IB_pied" } },
      { back: "IB_pied" },
    ] },

  IB_cachette: { act: "I", title: "Enfermé{e} dans la tour", place: "beffroi", backName: "le dessous de l'escalier", takes: "night",
    text: [
      "Tu attends dans le noir, accroupi{e} dans l'odeur de chanvre et de fiente. La tour vit autour de toi, et tu découvres qu'une tour de trois siècles a des organes : les poids descendent dans leur puits avec un bruit de chaîne, à intervalles réguliers, comme une chose qui déglutit ; l'échappement bat, là-haut, comme un cœur de bois. Tu en comptes soixante battements, puis cent ; puis tu renonces, parce que ton propre cœur s'est mis à suivre la mesure, et que cette compagnie te déplaît. Une souris passe sur ton pied.",
      "À la nuit, une clé tourne dans la porte. Le garde de nuit entre avec une lanterne et une bouteille, monte en soufflant, et s'installe au deuxième palier. Tu l'entends déboucher la bouteille. Plus tard, tu l'entends chanter. Plus tard encore, ronfler. Les trois étapes ont pris moins d'une heure.",
      "Tu descends ouvrir de l'intérieur la petite porte du canal. Le verrou est un gros pêne de fer, gras, silencieux. L'air de la nuit entre, froid et humide.",
      { with: "any", text: "Tes compagnons sont là, dans l'ombre du canal. Ils se glissent à l'intérieur un par un." },
    ],
    choices: [{ label: "Monter", to: "IB_escalier" }] },

  IB_effraction: { act: "I", title: "La petite porte du canal", place: "beffroi", backName: "la petite porte",
    text: [
      "La petite porte des carillonneurs donne directement sur l'eau, au fond d'une niche de pierre, à trois marches au-dessus du canal. Elle est basse, ferrée, avec une serrure à gros panneton et un judas grillagé. Le garde de nuit passe à quarante pas, revient, repasse.",
      "La serrure {{pie#ib_serrure|est une forte serrure de ville, neuve et graissée|a été changée la semaine dernière, mais on a laissé l'ancienne gâche, et le pêne n'y entre qu'à moitié}}.",
      { with: "lison", text: "Lison regarde la porte, puis le canal. « Le judas, dit-elle. Ma gaffe passe dans le grillage. Il y a un verrou à l'intérieur, à hauteur de main. »" },
    ],
    choices: [
      { label: "Crocheter la serrure entre deux passages du garde", test: { dom: "discretion", diff: -10, label: "Crocheter une serrure de ville", help: [{ item: "crochets", v: 15 }, { if: { has: "passe:voleur" }, v: 10 }, { if: { has: "metier:mains" }, v: 5 }] },
        win: { to: "IB_entree_tour" }, lose: { to: "IB_pris" } },
      { label: "Pousser la porte d'un coup d'épaule, là où le pêne tient mal", hide: { not: { voile: "ib_serrure" } }, to: "IB_entree_tour" },
      { label: "Enfoncer la porte", test: { dom: "combat", diff: -20, label: "Enfoncer une porte ferrée", help: [{ with: "tibere", v: 15 }] },
        win: { fx: { flag: "ib:bruit" }, to: "IB_entree_tour" }, lose: { to: "IB_pris" } },
      { label: "Laisse-moi passer la gaffe par le judas", who: "lison", test: { dom: "discretion", diff: 0, label: "Tirer un verrou avec une gaffe" },
        win: { fx: { conf: { lison: 3 } }, to: "IB_entree_tour" }, lose: { to: "IB_pris" } },
      { back: "IB_nuit" },
    ] },

  IB_toits: { act: "I", title: "Les toits du Conseil", place: "beffroi", backName: "les toits du Conseil",
    text: [
      "Les toits du Conseil des Comptoirs touchent presque le flanc du Beffroi, au nord, à la hauteur de la galerie des automates. Pour y monter, il faut passer par la cour des écuries, grimper sur un appentis, puis sur la gouttière, et suivre le faîte d'ardoise sur cinquante pas. Au bout, entre le toit et la tour, s'ouvre un vide de six pieds au-dessus de la place, et de l'autre côté, la lucarne du colombier.",
      { when: "night", text: "Les ardoises sont froides et grasses de rosée. En bas, la lanterne du garde fait un rond jaune sur les pavés. Au-dessus, la lune se tient entre deux nuages." },
      { with: "lison", text: "Lison retire ses bottes et les noue autour de son cou. « Sur l'ardoise, pieds nus, dit-elle. Comme sur le plat-bord. »" },
    ],
    choices: [
      { label: "Suivre le faîte et sauter jusqu'à la lucarne", test: { dom: "discretion", diff: -20, label: "Courir sur les toits du Conseil", help: [{ item: "corde", v: 10 }, { with: "lison", v: 10 }, { arch: "voleur", v: 10 }] },
        win: { to: "IB_pigeons" }, lose: { fx: { pv: -3 }, to: "IB_pris" } },
      { label: "Lancer ta corde à nœuds jusqu'à la grille du colombier, et passer à la force des bras", hide: { not: { item: "corde" } }, test: { dom: "nature", diff: -10, label: "Traverser le vide à la corde", help: [{ with: "tibere", v: 5 }, { with: "lison", v: 10 }] },
        win: { to: "IB_pigeons" }, lose: { fx: { pv: -4 }, to: "IB_pris" } },
      { back: "IB_nuit" },
    ] },

  IB_pris: { act: "I", title: "Le corps de garde", place: "beffroi", backName: "le corps de garde",
    fx: { flag: "ib:alerte" },
    text: [
      "Une main t'agrippe le col, une lanterne te brûle les yeux. Le garde de nuit souffle comme un soufflet de forge et crie pour en appeler d'autres. Peu après, tu es assis{e} sur un banc du corps de garde du Conseil, sous la façade, entre un ivrogne et un voleur de poules, devant un sergent qui écrit ton nom à l'envers dans un registre.",
      "« Tentative d'effraction sur un bâtiment de la République, dit le sergent. Ça fait dix ducats d'amende ou trois mois de galère sur la Salve. Ou bien le juge, demain. Le juge est de mauvaise humeur, demain. » Il lève les yeux. « {{oreille#ib_sergent|Je ne fais que mon travail|Deux ducats dans ma main et je n'ai rien écrit}}. »",
      { with: "tibere", text: "Tibère a été pris avec toi. Il regarde le sergent avec une sorte de tendresse. « Frémin. Tu me dois toujours cette jambe de mouton, depuis la Saint-Martin. »" },
    ],
    choices: [
      { label: "Laisse-moi lui rappeler la jambe de mouton", who: "tibere", fx: { conf: { tibere: 5 } }, to: "IB_pris_libre" },
      { label: "Glisser deux ducats dans la main du sergent", hide: { not: { voile: "ib_sergent" } }, fx: { gold: -40 }, to: "IB_pris_libre" },
      { label: "Profiter qu'on emmène l'ivrogne pour filer par la porte de derrière", test: { dom: "discretion", diff: -10, label: "Fausser compagnie au Guet du Conseil", help: [{ with: "lison", v: 10 }, { arch: "voleur", v: 10 }] },
        win: { to: "IB_pris_libre" }, lose: { to: "IB_geole" } },
      { label: "Attendre le juge", to: "IB_geole" },
    ] },

  IB_pris_libre: { act: "I", title: "Dehors", place: "beffroi", backName: "la place",
    text: [
      "Le corps de garde te recrache sur la place, dans le froid. La nuit continue. Le garde de la tour a repris sa ronde, l'air plus méfiant. Le bilan de l'expédition tient en trois lignes : une heure perdue, un peu de fierté en moins, et la connaissance exacte des bancs du corps de garde.",
      { with: "lison", text: "Lison t'attend sous les arcades, assise sur ses talons. « Joli, dit-elle. On recommence ? »" },
    ],
    choices: [{ back: "IB_nuit" }] },

  IB_geole: { act: "I", title: "Une nuit au corps de garde", place: "beffroi", backName: "le corps de garde", takes: "morning",
    fx: { gold: -20 },
    text: [
      "Tu passes la nuit sur le banc, entre l'ivrogne qui ronfle et le voleur de poules qui te raconte sa vie, en commençant par son baptême. À l'aube, le juge reste chez lui : il a la goutte. Le sergent, fatigué de vous, te fait payer une amende d'un ducat, qu'il empoche, et t'ouvre la porte en te recommandant de ne plus jamais toucher à la tour.",
      "Le voleur de poules te serre la main en sortant. « Le colombier, dit-il, du coin de la bouche. Il y a des trucs, là-haut, dans les vieux nids. Mon frère y montait, gamin. » Puis il s'en va dans la brume en sifflant.",
      { with: "any", text: "Tes compagnons t'attendent sur la place, transis, avec un pain chaud. Tout le monde se tait, et c'est presque pire." },
    ],
    choices: [{ back: HUB }] },

  // ------------------------------------------------------------------ the climb
  IB_entree_tour: { act: "I", title: "Le pied de la tour", place: "beffroi", backName: "le pied de la tour",
    text: [
      "Dedans, il fait plus froid que dehors. L'air sent la pierre mouillée, le chanvre et la fiente. Une lanterne sourde, ou la lune par une meurtrière, suffit à voir l'escalier : une vis de pierre qui monte dans le mur, marche après marche, chacune creusée au milieu par trois siècles de sonneurs. Elle s'enfonce dans le noir au-dessus de toi, et le battement de l'horloge descend par ce conduit comme par une gorge.",
      { outcome: "win", text: "Le passage a été plus facile que tu ne le pensais. Cette facilité t'inquiète un peu." },
      { if: { has: "ib:permis" }, text: "Le garde a lu le paraphe en escargot à la lueur de sa lanterne, ou fait semblant, et il a ouvert." },
      { if: { has: "ib:bruit" }, text: "La porte a fait un bruit de tonnerre en cédant. Tu tends l'oreille. Le garde de nuit chante, quelque part en haut, une chanson de marinier. Il n'a rien entendu, ou il a décidé de ne rien entendre." },
      { after: "ib:bapt_promesse", text: "Baptistine passe devant, sans lumière, une main sur le mur. Elle compte les marches à mi-voix, en carillonneuse." },
    ],
    choices: [{ label: "Monter l'escalier", to: "IB_escalier" }] },

  IB_escalier: { act: "I", title: "L'escalier de la reine", place: "beffroi", backName: "l'escalier",
    text: [
      "L'escalier monte en tournant, si étroit qu'on y frotte des deux épaules. Tous les vingt tours, une meurtrière laisse voir la place, de plus en plus petite. À la chapelle haute, une veilleuse rouge brûle devant une statue de la reine qu'on a repeinte en sainte, par économie. Plus haut, une voix chante faux, et une odeur d'eau-de-vie descend les marches.",
      "Sur le mur de la vis, à hauteur d'œil, des sonneurs ont gravé leurs noms au couteau, siècle après siècle ; tu en lis des centaines. Près du deuxième palier, une inscription plus ancienne que les autres, d'une main soignée : *{{loupe#ib_vis|Ici monta Aymeric, chancelier, la nuit des Comptoirs|Ici monta Aymeric Vasse, chancelier, la nuit des Comptoirs, avec la parole de la reine dans sa manche}}.*",
      { with: "gildas", text: "Frère Gildas pose deux doigts sur l'inscription ancienne, un instant, comme on touche une relique. Puis il retire sa main et reprend sa montée." },
      { with: "lison", text: "Lison s'arrête devant le même nom gravé, et elle lève les sourcils. Elle garde ses réflexions pour elle, mais elle monte la marche suivante plus lentement." },
    ],
    choices: [
      { label: "Une échelle de meunier, à gauche, vers le colombier", hide: { seen: "IB_pigeons" }, to: "IB_pigeons" },
      { label: "Continuer vers la voix qui chante, au deuxième palier", to: "IB_garde_ivre" },
    ] },
});

Object.assign(P, {
  IB_pigeons: { act: "I", title: "Le colombier", place: "beffroi", backName: "le colombier",
    text: [
      "Le colombier occupe tout un étage de la tour, sous un plancher de chêne fendu. Des centaines de boulins sont creusés dans la brique, du sol au plafond, et chaque boulin abrite un pigeon, ou un nid, ou un squelette de pigeon. Le sol est une croûte de fiente blanche épaisse comme un doigt. Quand tu entres, deux cents ailes battent ensemble, et le vent qu'elles soulèvent sent la plume et la poussière.",
      "Dans un boulin du fond, plus grand que les autres, il y a un nid ancien, abandonné, tressé de paille et de fil d'or arraché à quelque chose. Au milieu du nid, un anneau terni. Il {{pie#ib_anneau|est un anneau de cuivre vert-de-grisé, un anneau de pauvre|est une chevalière d'or sous le vert-de-gris, gravée d'une tour et d'une plume, l'ancien sceau du Conseil du temps de la reine}}.",
      "Sur une poutre, quelqu'un a installé une cage d'osier neuve, avec trois pigeons bagués de rouge et un sac de grain. L'osier est encore vert : la cage a trois semaines, et la tour trois siècles.",
      { with: "tibere", text: "Tibère regarde les pigeons bagués, en silence. Il a l'air de quelqu'un qui reconnaît une couleur." },
    ],
    choices: [
      { label: "Prendre l'anneau dans le vieux nid", once: true, fx: { item: "ib_tr_chevaliere", clock: { tresors: 1 }, flag: "tresor:ib_chevaliere" }, back: "IB_pigeons" },
      { label: "Ouvrir la cage et laisser partir les pigeons bagués de rouge", once: true, fx: { flag: "ib:cage_ouverte", fac: { banque: -2 } }, back: "IB_pigeons" },
      { label: "Descendre par l'échelle de meunier vers le palier du garde", to: "IB_garde_ivre" },
      { label: "Suivre la passerelle de planches vers la salle des poids", to: "IB_poids" },
    ] },

  IB_garde_ivre: { act: "I", title: "Le garde du deuxième palier", place: "beffroi", backName: "le deuxième palier",
    text: [
      "Au deuxième palier, l'escalier s'élargit en une petite salle voûtée. Elle contient une porte de chêne, un tabouret, une lanterne posée par terre, et, sur le tabouret, le garde de nuit, Norbert, gros homme au nez violet, la casaque ouverte, une bouteille d'eau-de-vie de prune entre les genoux. Il te voit. Il met un certain temps à décider si tu es vrai{e}.",
      "« Halte, dit-il enfin, sans se lever. Personne ne passe. {{oreille#ib_ivre|Ordre du Conseil, et ordre de Norbert|Sauf que l'homme aux gants gris m'a payé pour laisser passer ce soir, et ses deux gaillards attendent dans la galerie des muets depuis la tombée de la nuit}}. » Il boit. « Vous êtes du chanoine ? Du Conseil ? Des pigeons ? »",
      { if: { has: "ib:permis" }, text: "Tu lui montres le billet au paraphe en escargot. Il le regarde à l'envers, longtemps. « L'escargot, dit-il. Bon. » Il rote. « Montez, montez. Tout le monde monte, cette nuit. »" },
    ],
    choices: [
      { label: "Passer : le billet du chanoine suffit", hide: { not: { has: "ib:permis" } }, to: "IB_poids" },
      { label: "Laisse-moi lui parler de ses trois parties de dés", who: "tibere", fx: { conf: { tibere: 3 } }, to: "IB_garde_parle" },
      { label: "Lui offrir de partager la bouteille et le faire parler", to: "IB_garde_parle" },
      { label: "Attendre qu'il s'endorme, et passer sur la pointe des pieds", test: { dom: "discretion", diff: 0, label: "Passer devant un garde ivre", help: [{ arch: "voleur", v: 10 }, { with: "lison", v: 5 }] },
        win: { to: "IB_poids" },
        lose: { to: "IB_garde_reveil" } },
      { label: "L'assommer avant qu'il ne crie", test: { dom: "combat", diff: 0, label: "Assommer un garde ivre", help: [{ with: "tibere", v: 10 }] },
        win: { fx: { flag: "ib:norbert_assomme" }, to: "IB_poids" }, lose: { to: "IB_garde_reveil" } },
    ] },

  IB_garde_parle: { act: "I", title: "La bouteille de Norbert", place: "beffroi", backName: "le deuxième palier",
    text: [
      "Norbert se pousse sur son tabouret pour te faire de la place sur un coin, ce qui ne libère rien du tout. L'eau-de-vie de prune brûle la gorge et sent la cave. Après deux gorgées, il t'appelle son ami. Après trois, il pleure sur sa femme, qui l'a quitté pour un marchand de sel.",
      "« Des gens qui montent la nuit, j'en vois plus qu'avant, dit-il en essuyant son nez. Avant, personne. Maintenant, tout le monde. Ce soir {{oreille#ib_ivre_soir|je n'ai vu personne, sur ma vie|j'ai vu monter le monsieur poli aux gants gris, et il n'est pas redescendu}}. Moi je ne vois rien. Je suis payé pour garder la porte. La porte, elle est là. » Il tapote la porte. Elle n'est pas fermée.",
      { with: "tibere", text: "Tibère rappelle à Norbert une partie de dés de l'hiver dernier, au Battant, où Norbert a perdu sa ceinture. Norbert rit jusqu'à s'étrangler, et finit par lui donner l'accolade. « Gaucelm ! Je te croyais mort ou banquier. »" },
      "Norbert finit par s'endormir, la bouteille contre le ventre, avec un sourire d'enfant. Tu passes.",
    ],
    choices: [{ label: "Monter vers la salle des poids", to: "IB_poids" }] },

  IB_garde_reveil: { act: "I", title: "Norbert se réveille", place: "beffroi", backName: "le deuxième palier",
    text: [
      "Une marche craque. Norbert ouvre un œil, puis l'autre, et se lève d'un bond, plus vite que sa corpulence ne le laissait prévoir, sa hallebarde courte à la main. « Ah non ! Ah non, pas deux fois dans la même nuit ! » Il oublie d'appeler à l'aide. Il a trop bu pour y penser, et trop peu pour renoncer à se battre.",
    ],
    choices: [
      { label: "Te battre", fight: { title: "Le garde du deuxième palier", enemies: [{ id: "garde_guet", n: 1 }], spare: true,
        win: { fx: { flag: "ib:norbert_assomme" }, to: "IB_poids" },
        lose: { to: "IB_pris" },
        flee: { label: "Redescendre l'escalier en courant", dom: "discretion", diff: -10, to: "IB_pris_libre" },
        calm: { to: "IB_garde_parle" } } },
      { label: "Lui tendre sa propre bouteille, qui a roulé à tes pieds", to: "IB_garde_parle" },
    ] },

  IB_poids: { act: "I", title: "La salle des poids", place: "beffroi", backName: "la salle des poids",
    text: [
      "La salle des poids est un puits carré de vingt pieds de côté, qui descend dans le noir jusqu'au socle de la tour, et d'où monte un souffle froid, à l'odeur de cave. Six chaînes y pendent, chacune tenant une pierre grosse comme un veau, à des hauteurs différentes. Cinq descendent si lentement que l'œil les croit immobiles. La sixième, celle de la sonnerie, tombe d'un coup d'une coudée chaque fois que l'horloge frappe, avec un fracas de chaîne qui fait trembler la passerelle.",
      "La passerelle traverse le puits sur des planches posées de travers, sans rambarde. Elle {{pie#ib_passerelle|est solide, faite de chêne épais|a deux planches pourries au milieu, recouvertes de fiente pour qu'on ne le voie pas}}. De l'autre côté, une porte basse, et le battement de l'échappement.",
      { with: "lison", text: "Lison s'est arrêtée au bord, une main sur le chambranle. « Je n'aime pas le vide quand il n'y a pas d'eau dedans », dit-elle à voix basse. C'est la première fois que tu l'entends avouer une peur." },
    ],
    choices: [
      { label: "Traverser en enjambant les deux planches pourries", hide: { not: { voile: "ib_passerelle" } }, to: "IB_mecanisme" },
      { label: "Traverser vite, sans regarder en bas", test: { dom: "nature", diff: -10, label: "Traverser une passerelle sans rambarde", help: [{ item: "corde", v: 10 }, { with: "tibere", v: 5 }] },
        win: { to: "IB_mecanisme" }, lose: { fx: { pv: -4 }, to: "IB_chute" } },
      { label: "Laisse-moi passer devant et sonder les planches avec ma gaffe", who: "lison", fx: { conf: { lison: 5 } }, to: "IB_mecanisme" },
    ] },

  IB_chute: { act: "I", title: "Dans le puits des poids", place: "beffroi", backName: "le puits des poids",
    text: [
      "La planche cède sous ton pied. Tu tombes, tu heurtes une chaîne, tu t'y accroches, elle te brûle les paumes en glissant, et tu atterris à plat ventre sur un poids de pierre, dix pieds plus bas, le souffle coupé. Le poids oscille. La chaîne grince.",
      "Quand tu retrouves ton souffle, tu découvres que tu as de la compagnie : à côté de toi, accrochée au poids par un clou rouillé, pend une petite bourse de cuir pourri, oubliée là par quelqu'un qui est tombé avant toi, il y a longtemps. Dedans, des pièces vertes.",
      "Une échelle de fer scellée dans le mur remonte jusqu'à la salle des roues. Tu y montes, les mains en sang.",
      { with: "any", text: "Tes compagnons t'attendent en haut de l'échelle, blancs comme des linges. Une main t'aide à passer le rebord." },
    ],
    choices: [
      { label: "Emporter la bourse oubliée", once: true, fx: { item: "ib_tr_bourse", clock: { tresors: 1 }, flag: "tresor:ib_bourse" }, to: "IB_mecanisme" },
      { label: "Monter sans t'attarder", to: "IB_mecanisme" },
    ] },

  IB_mecanisme: { act: "I", title: "La salle des roues", place: "beffroi", backName: "la salle des roues",
    text: [
      "La salle des roues s'étend sous le cadran. Quarante roues de fer et de chêne y sont engrenées les unes dans les autres, avec des arbres de couche, des cames, des leviers, et au milieu l'échappement qui bat, tic, tac, si fort qu'il faut se parler à l'oreille. L'envers du cadran est un grand disque de bois peint en noir, percé au centre par l'axe de l'aiguille. Par une lucarne, on devine le rail de la galerie et les automates, de dos.",
      { if: { has: "ib:levier" }, text: "Derrière la troisième roue, le levier de buis est là, poli par les doigts, abaissé. Les automates dorment." },
      { if: { has: "ib:levier" }, else: "Il y a vingt leviers dans cette salle. Un seul doit réveiller les automates. Les dix-neuf autres sont pour toi autant d'énigmes.", text: "Il suffit de le relever." },
      { with: "gildas", text: "Frère Gildas regarde les roues tourner avec une attention de copiste. « Celui qui a fait ça, dit-il, savait compter mieux que tous les marchands de cette ville. » Il touche du doigt une roue de buis noirci. « Celle-ci est d'origine. Les autres ont été changées. »" },
    ],
    choices: [
      { label: "Relever le levier de buis, derrière la troisième roue", hide: { not: { has: "ib:levier" } }, fx: { flag: "ib:enclenche" }, to: "IB_galerie" },
      { label: "Chercher le bon levier en suivant les tringles jusqu'aux automates", hide: { has: "ib:levier" },
        test: { dom: "savoir", diff: -10, label: "Lire un mécanisme d'horloge", help: [{ if: { has: "metier:mains" }, v: 15 }, { with: "gildas", v: 10 }, { if: { has: "ib:graisseur" }, v: 20 }] },
        win: { fx: { flag: ["ib:enclenche", "ib:levier"] }, to: "IB_galerie" },
        lose: { fx: { flag: ["ib:enclenche", "ib:levier"], pv: -2, note: "Tu tires trois mauvais leviers. Le troisième fait sonner un coup de cloche solitaire dans la nuit. Le quatrième est le bon." }, to: "IB_galerie" } },
      { label: "Sortir par la lucarne et longer la corniche, loin de la galerie où attendent les gants gris", hide: { any: [{ not: { any: [{ voile: "ib_ivre" }, { voile: "ib_ivre_soir" }] } }, { has: "ib:lothaire_vu" }, { not: { has: "ib:enclenche" } }] }, to: "IB_corniche" },
      { label: "Laisse-moi faire : sept muets, sept tringles, je compte comme à la dentelle", who: "lison", hide: { has: "ib:levier" }, fx: { flag: ["ib:enclenche", "ib:levier"], conf: { lison: 3 } }, to: "IB_galerie" },
    ] },
});

Object.assign(P, {
  IB_galerie: { act: "I", title: "La galerie des muets", place: "beffroi", backName: "la galerie des muets",
    text: [
      "Une porte basse, au fond de la salle des roues, ouvre sur l'envers de la galerie : un couloir de pierre courbe qui fait le tour de la tour derrière les huit portes. Sur le rail, les automates attendent en rang, de dos, chacun devant sa porte. La reine, la plus grande, porte une couronne de cuivre bosselée. Les sept muets sont gris. Le septième a une plaque de bronze vissée dans le dos et, quand on fait le tour, une petite serrure en forme de bouche peinte sur la poitrine. Un escalier de bois monte vers les cloches.",
      { before: "ib:lothaire_vu", text: "Et dans le couloir, assis sur un tabouret de carillonneur, les jambes croisées, un homme en manteau sombre et gants gris pèle une orange avec un petit couteau. Deux hommes se tiennent derrière lui, lame courte au côté, l'air de s'ennuyer depuis longtemps. Lothaire Brunel lève les yeux et sourit, aimable comme un notaire." },
      { before: "ib:lothaire_vu", text: "« Je vous attendais {{oreille#ib_lothaire_attente|par simple courtoisie, entre gens du métier|parce que je suis monté ici trois nuits et que cette tour ne m'a rien dit}}, dit-il. Votre maîtresse me l'avait promise pour deux mille ducats, cette cachette. Elle est morte avant de me la livrer. Je la reprends à son héritier, au même prix, c'est honnête. »" },
      { before: "ib:lothaire_vu", if: { voile: "ib_air" }, text: "Il te regarde un moment, la tête penchée. « Vous dites que vous ne savez rien. Vous pensez à une cloche. La Petite. Vous pensez qu'il ne faut pas la frapper. » Il a posé la main sur la poche de son manteau, où quelque chose de dur fait une bosse. « Nous avons le même instrument, vous et moi. Le mien est plus vieux. »" },
      { before: "ib:lothaire_vu", text: "L'un des deux hommes de main bâille. « {{oreille#ib_spad|On fait ce que le monsieur dit|On est payés pour la nuit, pas pour se battre en haut d'une tour contre des gens qui n'ont rien à perdre}}. »" },
      { after: "ib:lothaire_vu", text: "Le couloir est vide. Au pied du tabouret, il reste des pelures d'orange." },
    ],
    choices: [
      { label: "Dégainer", hide: { has: "ib:lothaire_vu" }, fight: { title: "La galerie des muets", enemies: [{ id: "spadassin", n: 2 }],
        win: { fx: { flag: "ib:lothaire_vu", fac: { banque: -5 }, ep: ["perso", 500] }, to: "IB_lothaire_fuit" },
        lose: { fx: { flag: "ib:lothaire_vu" }, to: "IB_combat_perdu" },
        flee: { label: "Sauter par la lucarne sur la corniche extérieure", dom: "discretion", diff: -10, to: "IB_corniche" } } },
      { label: "« Vous deux. Combien vous paie-t-il pour mourir ? »", hide: { any: [{ not: { voile: "ib_spad" } }, { has: "ib:lothaire_vu" }] }, fx: { flag: "ib:lothaire_vu", ep: ["perso", 500] }, to: "IB_lothaire_parle" },
      { label: "« Trois nuits, et la tour ne vous a rien dit. Elle ne vous dira rien la quatrième. »", hide: { any: [{ not: { voile: "ib_lothaire_attente" } }, { has: "ib:lothaire_vu" }] }, fx: { flag: "ib:lothaire_vu" }, to: "IB_lothaire_parle" },
      { label: "Laisse-moi lui parler comme on parle chez nous", who: "lison", hide: { has: "ib:lothaire_vu" }, fx: { flag: "ib:lothaire_vu", conf: { lison: 3 } }, to: "IB_lothaire_parle" },
      { label: "Monter vers les cloches", hide: { not: { has: "ib:lothaire_vu" } }, to: "IB_clavier" },
      { label: "Ouvrir de force la poitrine du septième muet, ici, sans attendre minuit", hide: { not: { has: "ib:lothaire_vu" } }, to: "IB_force" },
    ] },

  IB_lothaire_parle: { act: "I", title: "Lothaire Brunel", place: "beffroi", backName: "la galerie des muets",
    text: [
      "Les deux hommes de main se regardent. Le plus grand hausse les épaules, rengaine à moitié, et recule d'un pas vers l'escalier. L'autre le suit. Lothaire les laisse aller. Il finit d'ôter la peau de son orange, en un seul ruban, et la pose sur le rebord de la lucarne.",
      { with: "lison", text: "Lison s'est mise devant toi, sa gaffe en travers. Elle parle à Lothaire tout bas, d'une voix douce, en phrases qui ont l'air de politesses. Lothaire écoute, et son sourire se fige un peu. Ses paroles t'échappent ; Lothaire, lui, les entend deux fois." },
      "« Bien, dit Lothaire. Je ne me bats pas dans les escaliers, c'est mauvais pour les genoux. » Il se lève, essuie ses gants l'un contre l'autre. « Ouvrez-la, votre cachette. Je ne suis pas pressé. La Banque n'est jamais pressée : elle a l'éternité, et des intérêts. » Il passe près de toi, si près que tu sens l'orange. « {{oreille#ib_lothaire_vente|Vous me la vendrez, ce que vous trouverez|Vous trouverez ce qu'elle a trouvé, et vous mourrez comme elle, ou vous vendrez : il n'y a pas de troisième chemin}}. Tout le monde finit par vendre. Demandez à votre maîtresse. »",
      "Il descend l'escalier sans se presser. Ses pas s'éloignent, tour après tour, et se perdent sous le battement de l'échappement.",
      { with: "tibere", text: "Tibère est resté immobile pendant toute la scène, les yeux sur ses bottes. Quand Lothaire est parti, il souffle, longuement, comme un homme qui a retenu sa respiration sous l'eau." },
    ],
    choices: [{ label: "Monter vers les cloches", to: "IB_clavier" }] },

  IB_lothaire_fuit: { act: "I", title: "Les pelures d'orange", place: "beffroi", backName: "la galerie des muets",
    text: [
      "Le premier homme de main est assis contre le mur, la main sur l'épaule, et a perdu toute envie de discuter. Le second a dévalé l'escalier ; on l'entend encore tomber, quelque part en bas, et jurer. Lothaire Brunel est resté sur son tabouret. Il applaudit, trois fois, du bout de ses gants.",
      "« Joli, dit-il. Votre maîtresse aurait aimé. Elle se battait mal, elle, mais elle mentait bien. » Il se lève, sans hâte. « Je vous laisse la nuit. Ouvrez, trouvez, réjouissez-vous. {{oreille#ib_lothaire_patience|La Banque saura vous faire une offre|La Banque a d'autres moyens que les lames, et vous les verrez avant la fin du mois}}. »",
      "Il enjambe son homme blessé, et descend.",
    ],
    choices: [{ label: "Monter vers les cloches", to: "IB_clavier" }] },

  IB_combat_perdu: { act: "I", title: "Le réveil", place: "beffroi", backName: "la galerie des muets",
    fx: { flag: "ib:alerte", pv: -2 },
    text: [
      "Tu te réveilles sur la pierre froide, les poignets liés par ta propre ceinture, avec un goût de sang dans la bouche. Au-dessus de toi, les cloches. Toutes les cloches. Elles sonnent à pleine volée, dans le désordre, un vacarme qui fait trembler le couloir et vibrer tes dents. Là-haut, quelqu'un a joué les sept cloches de toutes ses forces.",
      "Puis le silence, et des pas qui dévalent l'escalier. Lothaire passe en courant devant toi, sans un regard, son manteau ramassé dans les bras, suivi de ses deux hommes. En bas, sur la place, montent des cris, des claquements de volets, des aboiements. La galerie est restée immobile. Le septième muet est toujours de dos, la main fermée.",
      { with: "any", text: "Une main tranche ta ceinture. Tes compagnons sont aussi amochés que toi, et aussi vivants. « Les gardes montent, souffle quelqu'un. Par le canal. Vite. »" },
      { without: "any", text: "Tu te libères en frottant la ceinture contre l'arête d'une roue, et tu descends en courant par l'échelle du colombier, à contre-courant des gardes qui montent." },
      "Tu ressors dans la nuit, l'oreille pleine de cloches. Lothaire a fait chou blanc. Toi aussi. Le Beffroi attendra une autre nuit.",
    ],
    choices: [{ back: HUB }] },

  IB_corniche: { act: "I", title: "La corniche", place: "beffroi", backName: "la corniche",
    text: [
      "Par la lucarne de la salle des roues, tu sors sur la corniche extérieure, une bande de pierre large comme deux mains qui fait le tour de la tour sous le cadran. La place est à deux cents pieds sous toi, noire, avec la lanterne du garde pour toute lumière, pas plus grosse qu'une tête d'épingle. Le vent tire sur tes vêtements avec l'insistance d'une main ; et le vide, dont tu attendais seulement de l'effroi, t'adresse cette invitation sourde que connaissent tous ceux qui se sont penchés d'un peu haut. Au-dessus, le cadran bleu, énorme, et son aiguille en forme de main qui approche de minuit.",
      "Tu longes le cadran, le dos à la pierre, jusqu'à l'escalier de fer qui monte du balcon de la galerie vers la chambre des cloches. Derrière les portes des muets, tu entends des voix d'hommes qui s'ennuient, et une voix douce qui leur dit de se taire. Ils te laissent passer sans t'entendre.",
      { with: "lison", text: "Lison passe la dernière, pieds nus, les yeux droit devant elle, en chantonnant entre ses dents la comptine des sept muets, pour se donner du courage." },
    ],
    choices: [
      { label: "Monter jusqu'aux cloches", test: { dom: "nature", diff: -10, label: "Longer une corniche à deux cents pieds", help: [{ item: "corde", v: 10 }, { with: "lison", v: 5 }] },
        win: { fx: { flag: "ib:lothaire_evite", ep: ["perso", 500] }, to: "IB_clavier" },
        lose: { fx: { flag: "ib:lothaire_evite", pv: -3, note: "Ton pied glisse. Tu restes pendu{e} par les mains au rebord du cadran, un long moment, avant de te rétablir. Tu as les genoux en sang." }, to: "IB_clavier" } },
    ] },

  IB_clavier: { act: "I", title: "La chambre des cloches", place: "beffroi", backName: "la chambre des cloches",
    text: [
      "Tout en haut, sous le toit en flèche, les sept cloches pendent à leur charpente de chêne, de la plus grosse à la plus petite, noires dans la lune. La Grosse Ysaure est haute comme deux hommes. La Petite, au bout, tiendrait dans tes bras. Sous elles, contre le mur, se trouve le clavier : sept leviers de bois ronds comme des manches de couteaux, reliés aux battants par des fils de fer qui montent dans le noir.",
      "Sur la planche du clavier, au-dessus des leviers, une inscription gravée, à demi effacée par les poings des sonneurs : *{{loupe#ib_clavier|Sonne pour la reine, et sonne juste|Sonne pour la reine, et retiens la dernière : sa parole est dans le silence}}.*",
      "Au loin, une horloge de couvent sonne les trois quarts. Minuit approche. En bas, sous tes pieds, le rail des automates attend.",
      { after: "ib:bapt_promesse", text: "Baptistine s'est figée devant le vrai clavier. Elle pose ses poignets bandés sur les leviers, sans appuyer, et elle tremble de la tête aux pieds. « Les vrais, dit-elle. Ils sont plus durs. »" },
      { with: "gildas", text: "Frère Gildas s'est approché de l'inscription. Il la lit, il la relit, la tête penchée, et garde longtemps le silence." },
      { if: { has: "ib:alerte" }, text: "Sur la place, en bas, les gardes de l'autre nuit font leur ronde à deux. Au premier faux pas, ils monteront." },
    ],
    choices: [
      { label: "Jouer l'air de la reine que t'a donné Médard, et laisser la Petite se taire", hide: { not: { voile: "ib_air" } }, fx: { ep: ["perso", 600] }, to: "IB_septieme_nuit" },
      { label: "Laisser Baptistine jouer l'air de son grand-père", hide: { not: { has: "ib:bapt_promesse" } }, fx: { flag: "ib:bapt_joue", ep: ["perso", 600] }, to: "IB_septieme_nuit" },
      { label: "Jouer d'après le carnet de Médard, et deviner ce que veut dire « comme il plaira à Dieu »", hide: { any: [{ not: { item: "ib_partition" } }, { voile: "ib_air" }] },
        test: { dom: "savoir", diff: -10, label: "Déchiffrer l'air de la reine", help: [{ if: { voile: "ib_comptine" }, v: 25 }, { if: { voile: "ib_partition" }, v: 40 }, { with: "gildas", v: 10 }] },
        win: { to: "IB_septieme_nuit" }, lose: { to: "IB_faux_air" } },
      { label: "Jouer six cloches en descendant, et retenir la septième, comme le dit la comptine", hide: { any: [{ not: { voile: "ib_comptine" } }, { voile: "ib_air" }] },
        test: { dom: "savoir", diff: -10, label: "Retrouver un air perdu", help: [{ if: { has: "ib:midi" }, v: 10 }, { if: { voile: "ib_doyen" }, v: 10 }, { with: "lison", v: 15 }] },
        win: { to: "IB_septieme_nuit" }, lose: { to: "IB_faux_air" } },
      { label: "Laissez-moi lire ces leviers : ils parlent une langue que je connais", who: "gildas", hide: { voile: "ib_air" },
        test: { dom: "savoir", diff: 0, label: "Lire la vieille langue du clavier", help: [{ if: { voile: "ib_comptine" }, v: 15 }] },
        win: { fx: { conf: { gildas: 5 } }, to: "IB_septieme_nuit" }, lose: { to: "IB_faux_air" } },
      { label: "Jouer les sept cloches, de la plus grosse à la plus petite", to: "IB_faux_air" },
      { label: "Ouvrir de force la poitrine du septième muet, dans la galerie", hide: { all: [{ has: "ib:lothaire_evite" }, { not: { has: "ib:lothaire_vu" } }] }, to: "IB_force" },
    ] },

  IB_faux_air: { act: "I", title: "Les cloches à minuit", place: "beffroi", backName: "la chambre des cloches",
    fx: { flag: ["ib:alerte", "ib:faux_air"] },
    text: [
      "La septième cloche frappe, et elle frappe faux. La note est juste ; le moment est faux. L'air s'achève, et la nuit répond. En bas, le rail grince, la grande porte de la galerie s'entrouvre d'un pouce, et se referme. Les muets sont restés à leur place.",
      "Puis toute la ville se réveille. Les sept cloches de la reine ont sonné à minuit, chose inouïe de mémoire de Salvèzan. Des volets claquent sur la place, des chiens hurlent, quelqu'un crie au feu, quelqu'un d'autre crie au miracle. La lanterne du garde court vers la porte de la tour. D'autres lanternes la suivent.",
      { with: "tibere", text: "« Les gardes du Conseil, dit Tibère, qui a l'oreille du métier. Six, sept. Ils montent par le grand escalier. On ne passera pas par là. »" },
      { with: "lison", text: "« *L'Effrontée* est sous la petite porte, dit Lison. Par le colombier, la corde, le canal. Maintenant. »" },
    ],
    choices: [
      { label: "Fuir par le colombier et descendre la façade jusqu'au canal", test: { dom: "discretion", diff: -10, label: "Fuir le Beffroi en pleine alerte", help: [{ with: "lison", v: 20 }, { item: "corde", v: 10 }] },
        win: { fx: { note: "Tu touches l'eau du canal au moment où les gardes ouvrent la galerie. Les gardes ne voient qu'une barque de plus sur l'eau noire." }, back: HUB },
        lose: { to: "IB_pris" } },
      { label: "Descendre au-devant des gardes et jouer le carillonneur zélé", test: { dom: "social", diff: -20, label: "Mentir à sept gardes essoufflés", help: [{ if: { has: "ib:permis" }, v: 20 }, { if: { has: "ib:graisseur" }, v: 15 }] },
        win: { fx: { note: "« Une corde de rappel qui a lâché », expliques-tu. Les gardes te croient, parce qu'ils ont envie de redescendre se coucher." }, back: HUB },
        lose: { to: "IB_pris" } },
    ] },

  IB_force: { act: "I", title: "La poitrine du septième muet", place: "beffroi", backName: "la galerie des muets",
    text: [
      "Tu redescends dans le couloir de la galerie. Le septième muet est là, de dos, sur son rail. Tu le fais pivoter : il pèse le poids d'un homme. Sur sa poitrine, sous la peinture grise écaillée, apparaît la petite serrure en forme de bouche. Sa main droite fermée, de bronze sous le bois, tient un objet caché.",
      "De clé, point. Il y a ta lame, ton levier de fortune, et le bruit que tu vas faire.",
    ],
    choices: [
      { label: "Appuyer sur le pouce de bronze, comme on lève un loquet", hide: { not: { has: "ib:main_bronze" } }, fx: { ep: ["perso", 600], note: "Le pouce cède sous ton doigt avec un déclic. La main de bronze s'ouvre : dans la paume, une petite clé verte, de la forme d'une langue." }, to: "IB_cache" },
      { label: "Forcer la main de bronze avec ta lame", test: { dom: "combat", diff: -10, label: "Forcer une main de bronze", help: [{ with: "tibere", v: 15 }, { if: { has: "metier:mains" }, v: 10 }] },
        win: { fx: { flag: "ib:casse" }, to: "IB_cache" },
        lose: { fx: { flag: ["ib:casse", "ib:alerte"], pv: -3, note: "Ta lame dérape, le pouce de bronze t'entaille la paume, mais la main finit par s'ouvrir, avec un claquement qui résonne dans toute la tour." }, to: "IB_cache" } },
      { label: "Crocheter la serrure de la poitrine", hide: { not: { item: "crochets" } }, test: { dom: "discretion", diff: -20, label: "Crocheter une serrure de trois cents ans", help: [{ if: { has: "passe:voleur" }, v: 15 }] },
        win: { to: "IB_cache" }, lose: { fx: { flag: "ib:casse" }, to: "IB_cache" } },
      { back: "IB_clavier" },
    ] },

  IB_septieme_nuit: { act: "I", title: "Minuit", place: "beffroi", backName: "la galerie des muets",
    text: [
      "La Grosse Ysaure parle la première, si grave que le plancher vibre. Puis viennent la Bavarde, la Veuve, le Bourdon, la Clarine, la Mouche, en descendant, chaque note posée sur la précédente comme une marche. Et la Petite, au bout : son battant se lève, et reste levé. Le silence dure le temps d'une prière. Sur la place, en bas, les dormeurs se retournent dans leur lit et entendent seulement un air de cloches un peu court.",
      { if: { has: "ib:bapt_joue" }, text: "C'est Baptistine qui joue. Elle frappe les leviers du plat des poings, les dents serrées, les yeux pleins d'eau, et quand vient la septième, elle lève le levier, et le tient, et le tient. Puis elle lâche, et elle éclate d'un rire silencieux, les deux mains sur la bouche." },
      "Sous tes pieds, le rail grince. Tu dévales l'escalier de bois jusqu'au balcon de la galerie, dehors, sous le cadran. Les huit portes s'ouvrent. La reine sort sous la lune, sa couronne de cuivre luisante, et glisse sur son rail en tournant la tête vers la ville endormie. Les sept muets la suivent, une main sur la bouche. Ils font le tour de la tour.",
      "Le septième reste dehors. Il s'arrête devant toi, sur le rail, à un pas. Sa main droite, qui serre depuis trois cents ans, s'ouvre dans un claquement de ressort. Dans la paume de bronze repose une petite clé, verte, de la forme d'une langue.",
      { with: "lison", text: "Lison a la bouche ouverte. Elle la referme, et elle met la main dessus, machinalement, comme le muet." },
    ],
    choices: [{ label: "Prendre la clé et ouvrir la serrure de la poitrine", big: true, to: "IB_cache" }] },
});

Object.assign(P, {
  IB_cache: { act: "I", title: "Ce que gardait le septième muet", place: "beffroi", backName: "la galerie des muets",
    fx: { relic: "f_beffroi", item: "loupe", flag: "beffroi:ouverte", quest: "I_beffroi", ep: ["histoire", 4000], fac: { taiseurs: 5 } },
    text: [
      { if: { has: "ib:casse" }, else: "La petite clé verte entre dans la serrure en forme de bouche comme si on l'avait huilée la veille. Au dernier quart, elle tourne d'elle-même, avec un soupir de ressort.", text: "La poitrine du septième muet cède avec un craquement de bois sec et de vieux fer. Des éclats de peinture grise tombent sur tes chaussures. Quelque part dans la tour, un ressort se détend dans le vide avec un bruit de corde de harpe cassée." },
      "Derrière la poitrine peinte s'ouvre un creux de la taille d'un livre, tapissé de plomb. Dedans repose une boîte plate en os de baleine, jaunie, fermée d'un crochet d'argent. Tu l'ouvres sur le rail, à genoux, à la lumière de la lune et du cadran.",
      "Une loupe. Une loupe ronde, grande comme la paume, taillée dans un ambre clair et doré, sertie dans un anneau d'argent noirci. Au cœur de l'ambre, un moucheron est pris depuis mille ans, les ailes ouvertes. Et sous la loupe, roulé dans une soie huilée, il y a un feuillet de vélin épais, cousu sur un bord comme une page arrachée à un livre.",
      "Tu prends la loupe. Elle est tiède. Tu la portes à ton œil, machinalement, comme on essaie une lentille, et à travers l'ambre la pierre de la galerie se met à luire par endroits, en lignes fines, comme si quelqu'un avait écrit sur les murs avec de la lumière.",
      { with: "lison", text: "Lison s'agenouille à côté de toi, les mains sur les genoux. Elle regarde la boîte d'os, la soie, la loupe, et elle dit très bas, pour elle-même : « Le moucheron. Ma grand-mère m'a parlé du moucheron. »" },
      { with: "gildas", text: "Frère Gildas est resté debout, à trois pas, les mains dans ses manches. Il regarde la loupe dans ta main, le visage fermé. Il se signe, lentement, et il recule d'un pas encore." },
      { with: "tibere", text: "Tibère se penche par-dessus ton épaule et siffle entre ses dents. « De l'ambre, dit-il. Gros comme ça. {{oreille#ib_tibere_ambre|C'est joli|Ça vaut ma dette entière, et la boutique de Rosalie, et l'homme aux gants gris en donnerait le double}}. » Il se redresse, et se met à regarder ailleurs avec beaucoup d'application." },
      { if: { has: "ib:bapt_joue" }, text: "Baptistine est descendue derrière toi. Elle regarde le septième muet, la main ouverte, et elle dit : « Mon grand-père avait raison. » Elle a l'air plus heureuse que toi." },
    ],
    choices: [
      { label: "Lire le feuillet à la lueur de la loupe", big: true, to: "IB_feuillet" },
    ] },

  IB_feuillet: { act: "I", title: "Le feuillet du Beffroi", place: "beffroi", backName: "la galerie des muets",
    text: [
      "Le feuillet est écrit d'une main nette, large, sans fioriture, en lignes serrées. En tête, une couronne dessinée à la plume, et dessous, en lettres plus grandes : *Registre de la reine Ysaure, première page.* Le texte visible est bref, presque banal.",
      "*Je, Ysaure, reine du delta, écris ceci de ma main parce que je ne puis plus parler. {{loupe#ib_feuillet_un|Mon royaume est en paix et mes marchands sont loyaux|Ils sont venus à quarante, la nuit des Comptoirs, avec les clés de mon propre palais ; Marrel tenait la lampe, et Fourcaud le couteau}}. Je confie ce registre à mon chancelier, Aymeric, {{loupe#ib_feuillet_deux|pour qu'il le garde en lieu sûr|pour qu'il le cache en sept lieux, et qu'il apprenne à ceux qui le garderont à parler deux fois}}.*",
      "*Que celui qui lit ceci {{loupe#ib_feuillet_trois|prie pour l'âme d'une reine|sache que la Charte des Hautes-Eaux est vraie, et que les titres des Comptoirs sont faux ; la preuve est sous l'eau, à Sorne, et elle attend la plus basse mer}}. Ysaure.*",
      "Sous la loupe, la seconde écriture remonte à travers la première, d'une encre brune qui a dormi trois siècles. Les mots dits restent en place ; ceux d'en dessous s'y glissent, ligne à ligne.",
      { with: "gildas", text: "Frère Gildas s'abstient de demander à lire. Il attend que tu aies fini, et il regarde la tour autour de vous, les murs, la charpente, comme un homme qui fait l'inventaire d'une maison où il a grandi." },
    ],
    choices: [
      { label: "Rouler le feuillet dans sa soie", to: "IB_lettre" },
    ] },

  IB_lettre: { act: "I", title: "La lettre d'Odeline", place: "beffroi", backName: "la galerie des muets",
    text: [
      "Tu ranges le feuillet. Ta main rencontre, dans le sac, le papier plié de la lettre d'Odeline, que tu portes depuis la cave. Tu la sors sans savoir pourquoi. Sous la loupe, avant même que tu l'aies dépliée, l'écriture tremblée se met à luire à travers le papier, en trois endroits.",
      "*À toi, si je ne suis plus là pour te le dire. Je t'ai appris à trouver ce que les gens perdent. Je ne t'ai jamais appris à écouter ce qu'ils taisent. {{loupe#lettre_un|Pardonne une vieille femme qui n'avait plus le temps|Il y a sous le Beffroi une chose que je voulais vendre pour toi, et j'ai eu tort}}. Le cornet est à toi. Porte-le, et écoute.*",
      "*{{loupe#lettre_deux|Ne cherche pas à savoir comment je suis morte|Si je meurs avant la fin du mois, ce ne sera pas un accident. Les Taiseurs ne pardonnent pas qu'on vende leur silence}}. Ne crois pas les gens de la Banque, ni ceux qui portent la bure.*",
      "*{{loupe#lettre_trois|Je t'aimais comme on aime ce qu'on a trouvé|Ton arrivée sur mon quai, je l'avais arrangée. Ta mère était une Vasse des Joncs-Bas. Elle a remis ta vie entre mes mains parce que j'avais quitté les Taiseurs, et qu'elle voulait que tu vives hors du silence}}. — O.*",
    ],
    choices: [
      { label: "Replier la lettre", to: "IB_lettre_suite" },
    ] },

  IB_lettre_suite: { act: "I", title: "Ce que taisait Odeline", place: "beffroi", backName: "la galerie des muets",
    fx: { ep: ["perso", 800] },
    text: [
      { after: "voile:lettre_un", else: "Tu replies la lettre avant la dernière ligne. Il y a des choses qu'on lit plus tard, quand on a les mains moins froides.", text: "*Une chose que je voulais vendre pour toi.* Pour toi. Les deux mille ducats de Lothaire, c'était pour toi. La nuit où tu as claqué la porte, tu pensais qu'elle vendait ses secrets par avarice. Tu restes un moment à genoux sur le rail, la lettre contre la poitrine." },
      { after: "voile:lettre_deux", text: "*Les Taiseurs ne pardonnent pas.* Le mot de Médard sur le banc, le mot que tout le monde tait. Odeline l'écrivait en clair, sous son écriture de tous les jours, et elle savait qu'elle allait mourir." },
      { after: "voile:lettre_deux", with: "gildas", text: "Frère Gildas a vu la lettre luire dans tes mains, et il garde ses questions pour lui. Il regarde la ville par-dessus le balcon de la galerie, et le vent lui rabat sa capuche sur le front." },
      { after: "voile:lettre_trois", text: "*Ta mère était une Vasse.* Tu relis la phrase quatre fois. Le nom tient dans la bouche comme un caillou." },
      { after: "voile:lettre_trois", if: { has: "passe:trouve" }, text: "L'hiver des Glaces, sous l'étal. On avait posé là l'enfant endormi, et Odeline avait attendu toute la nuit derrière son volet que quelqu'un le dépose." },
      { after: "voile:lettre_trois", if: { has: "passe:voleur" }, text: "La main d'Odeline sur ton col, le jour où tu as voulu la voler. Elle savait qui tu étais. Elle t'attendait depuis des années, et elle a joué la surprise à la perfection." },
      { after: "voile:lettre_trois", if: { has: "passe:gage" }, text: "L'homme qui t'a laissé{e} en gage, et qui n'est jamais revenu. Odeline n'a jamais réclamé sa dette. C'était un arrangement, et elle l'avait payé elle-même." },
      { after: "voile:lettre_trois", with: "lison", text: "Lison a lu par-dessus ton épaule ; elle s'est approchée sans un bruit. Son visage s'est fermé d'un coup, comme une porte. « Une Vasse, dit-elle. J'avais une cousine, partie des Joncs quand j'étais petite. Aux Joncs, on ne prononce plus son nom. » Elle se tait. « {{oreille#ib_lison_cousine_bis|Ça ne change rien|Ça change tout, et ma grand-mère le savait, et elle m'a envoyée quand même sans me le dire}}. »" },
    ],
    choices: [
      { label: "Redescendre de la tour", big: true, to: "IB_descente" },
    ] },

  IB_descente: { act: "I", title: "La descente", place: "beffroi", backName: "l'escalier", takes: "morning",
    text: [
      "Tu redescends les deux cents tours de l'escalier avec le feuillet contre la poitrine et la loupe au fond d'une poche cousue. Les marches te semblent plus nombreuses qu'à la montée. Sur les murs de la vis, à la lueur de la loupe, quelques-uns des noms gravés par les sonneurs se mettent à luire ; tu passes sans t'arrêter pour les lire.",
      { if: { has: "ib:lothaire_evite" }, text: "Au pied de la tour, contre la petite porte, Lothaire Brunel t'attend, seul, les gants croisés sur le pommeau de sa canne. Il a entendu l'air, comme toute la ville, et il a compris trop tard. Il te regarde descendre la dernière marche. « Vous pensez : une loupe, dit-il doucement. Et vous pensez : il ne l'aura pas. » Il incline la tête. « Nous verrons. » Il s'écarte pour te laisser passer, et reste où il est." },
      { if: { has: "ib:casse" }, text: "Derrière toi, là-haut, le septième muet reste immobile sur son rail, la poitrine ouverte. Demain, à midi, il restera dehors, et la ville en parlera une semaine." },
      { with: "lison", text: "*L'Effrontée* attend sous la petite porte. Lison détache l'amarre et vous emmène sur le canal noir, sans un bruit, jusqu'aux marches de la place. Elle rame bien, pour une fois, et elle se tait." },
      { without: "lison", text: "Tu sors par la petite porte du canal, longes la niche de pierre dans le noir, et reprends pied sur la place par l'escalier des barques." },
    ],
    choices: [{ label: "Attendre le jour sur la place", to: "IB_aube" }] },

  IB_aube: { act: "I", title: "L'aube sur la place", place: "beffroi", backName: "la place à l'aube",
    text: [
      "L'aube vient sur la place du Beffroi comme sur n'importe quelle place. Les oubliers allument leurs fours, les vieux reprennent leur banc, le crieur grimpe sur sa borne. Le cadran bleu retrouve ses couleurs. Les passants gardent les yeux sur leurs pieds.",
      { if: { has: "ib:bapt_joue" }, text: "Baptistine passe devant toi en courant, en route pour la confrérie, les poignets bandés, rouge jusqu'aux oreilles. Elle te fait seulement, au passage, le geste des muets : une main sur la bouche. Puis elle éclate de rire et disparaît dans la rue du Battant." },
      { if: { seen: "IB_medard_air" }, text: "Sur le banc des vieux, Médard Coquart est assis à sa place. Il a entendu l'air, cette nuit, depuis son lit. Il garde les yeux devant lui quand tu passes. Il bat seulement la mesure du pouce sur son genou, sept temps, le dernier sans frapper." },
      "Tu as une loupe d'ambre dans la poche et la première page d'un registre que trois siècles ont cherché. Tu as aussi, désormais, des ennemis qui savent ton nom et le chemin de ta boutique.",
    ],
    choices: [{ back: HUB }] },
});

Object.assign(P, {
  // ------------------------------------------------------------------ around the square
  IB_puits: { act: "I", title: "Le puits de la reine", place: "beffroi", backName: "le puits de la reine",
    text: [
      "Le puits de la reine a une margelle de marbre rose creusée en cuvette par les cordes, et une grille de fer forgé en forme de couronne au-dessus. On n'y tire plus d'eau depuis qu'une fontaine coule au bout des arcades. On y jette des liards pour les vœux, et les amoureux y crachent pour qu'ils se réalisent plus vite ; les deux usages cohabitent sans heurt.",
      "Tout au fond, à six toises, l'eau noire reflète un rond de ciel. Quand le soleil est haut, on voit luire les pièces sur le fond de vase. La plupart {{pie#ib_puits|sont des liards de cuivre, comme ceux de ta bourse|sont des liards de cuivre, mais l'une d'elles, plus grande, contre la paroi nord, est un écu d'or de la reine que la vase a gardé propre}}.",
      { when: "day", before: "ib:pigeon_trouve", text: "Sur la margelle, un pigeon se débat, une aile pendante, une bague rouge à la patte. Les enfants de la ronde l'ont vu et débattent de la question de savoir s'il se mange." },
    ],
    choices: [
      { label: "Descendre au fond du puits, à la corde, chercher l'écu d'or", hide: { any: [{ not: { voile: "ib_puits" } }, { has: "tresor:ib_ecu" }] },
        test: { dom: "nature", diff: -10, label: "Descendre dans un puits", help: [{ item: "corde", v: 20 }, { with: "tibere", v: 10 }, { with: "lison", v: 10 }] },
        win: { fx: { item: "ib_tr_ecu", clock: { tresors: 1 }, flag: "tresor:ib_ecu" }, back: "IB_puits" },
        lose: { fx: { pv: -2, item: "ib_tr_ecu", clock: { tresors: 1 }, flag: "tresor:ib_ecu", note: "La corde te scie les mains et tu prends un bain glacé jusqu'à la taille. Mais tu remontes avec l'écu." }, back: "IB_puits" } },
      { label: "Ramasser le pigeon blessé", hide: { any: [{ night: true }, { has: "ib:pigeon_trouve" }] }, to: "IB_pigeon" },
      { label: "Jeter un liard et faire un vœu", once: true, fx: { gold: -1, note: "Le liard tombe longtemps. Tu n'entends pas le plouf." }, back: "IB_puits" },
      { back: "IB_marche" },
    ] },

  IB_colporteur: { act: "I", title: "Le colporteur aux reliques", place: "beffroi", backName: "le colporteur aux reliques",
    text: [
      "Maître Pancrace est assis sur sa malle comme un évêque sur son trône : petit, chauve, une barbe teinte au henné et un chapeau de pèlerin couvert de coquilles. Devant lui, sur un velours râpé, s'alignent ses merveilles : un os de saint dans un tube de verre, une plume de l'archange, un morceau de la barque de saint Pierre, et des souvenirs de la reine Ysaure, « authentiques, je le jure sur ma part de paradis, qui est considérable ». Si la barque de saint Pierre avait fourni tous les morceaux qu'on en vend, elle aurait eu la taille d'une cathédrale.",
      "Il te présente d'abord une petite sonnette de bronze, poignée de bois tourné. « La sonnette de la reine, avec laquelle elle appelait ses muets ! Douze ducats. » La sonnette {{pie#ib_sonnette|est un bronze ancien, d'une belle patine verte|est la sonnette d'un crieur public, toute neuve, avec la tour d'argent du Conseil poinçonnée sous la poignée, mal limée}}.",
      "Puis un dé à coudre, posé dans une coquille Saint-Jacques. « Le dé de la reine, qui cousait elle-même les linceuls de ses soldats. Trois ducats, pour vous. » Le dé {{pie#ib_de|est un dé de laiton doré, comme on en vend aux Halles|est d'argent fin, très usé, gravé à l'intérieur d'une couronne et d'un Y minuscule}}.",
      { with: "gildas", text: "Frère Gildas regarde l'os de saint dans son tube de verre, et dit doucement au colporteur que c'est une côte de porc. Maître Pancrace lui répond, très digne, que les saints aussi mangeaient du porc." },
    ],
    choices: [
      { label: "Acheter le dé de la reine pour trois ducats", hide: { has: "tresor:ib_de" }, fx: { gold: -60, item: "ib_tr_de", clock: { tresors: 1 }, flag: "tresor:ib_de" }, back: "IB_colporteur" },
      { label: "Marchander le dé « de laiton » en le dénigrant", hide: { any: [{ not: { voile: "ib_de" } }, { has: "tresor:ib_de" }] },
        test: { dom: "social", diff: 0, label: "Marchander un vrai trésor comme une babiole", help: [{ if: { has: "metier:parole" }, v: 15 }] },
        win: { fx: { gold: -5, item: "ib_tr_de", clock: { tresors: 1 }, flag: "tresor:ib_de" }, back: "IB_colporteur" },
        lose: { fx: { note: "Pancrace flaire quelque chose et remet le dé dans sa poche. « Celui-là n'est plus à vendre. » Il ressortira demain, plus cher." }, back: "IB_colporteur" } },
      { label: "Lui montrer la tour poinçonnée sous la poignée de la sonnette", hide: { any: [{ not: { voile: "ib_sonnette" } }, { has: "ib:sonnette" }] }, to: "IB_crieur_sonnette" },
      { label: "Acheter la sonnette pour la rendre au crieur", hide: { any: [{ not: { seen: "IB_crieur" } }, { has: "ib:sonnette" }] }, fx: { gold: -60, flag: "ib:sonnette" }, back: "IB_colporteur" },
      { back: "IB_marche" },
    ] },

  IB_borne: { act: "I", title: "Sous la borne du crieur", place: "beffroi", backName: "la borne du crieur", takes: 2,
    fx: { item: "ib_tr_sonneur", clock: { tresors: 1 }, flag: "tresor:ib_sonneur" },
    text: [
      "La borne du crieur est un gros cylindre de pierre grise, à l'angle des arcades, poli sur le dessus par des générations de semelles. Tu attends que la place se vide, tu glisses ta lame entre la borne et le pavé, et tu creuses. Le mortier est vieux, friable. Au bout d'une heure, ta lame touche du métal.",
      "C'est un coffret de plomb, aplati par le poids des siècles, grand comme une main. Dedans, une médaille d'argent pend à un ruban pourri : une cloche gravée, sept traits dessous, et autour, en lettres minuscules, *{{loupe#ib_medaille|Au premier sonneur de la reine|Au sonneur qui gardera l'air, de la part d'Aymeric, pour qu'il ne le joue que pour qui l'entend deux fois}}.*",
    ],
    choices: [
      { label: "Porter la médaille à Médard, sur le banc des vieux", hide: { not: { seen: "IB_medard" } }, fx: { drop: "ib_tr_sonneur", fac: { taiseurs: 5 }, conf: { lison: 5 }, note: "Médard prend la médaille dans ses grosses mains déformées et la regarde longtemps. Il ne dit rien. Il la passe à son cou, sous sa chemise." }, back: "IB_marche" },
      { label: "La garder", back: "IB_marche" },
    ] },

  IB_conseil: { act: "I", title: "La façade du Conseil", place: "beffroi", backName: "la façade du Conseil",
    text: [
      "La façade du Conseil des Comptoirs occupe tout le nord de la place : trois étages de pierre blanche, quarante blasons peints sous la corniche, un perron de marbre gardé par deux hallebardiers. Des échevins en robe fourrée montent et descendent les marches, suivis de clercs qui portent leurs registres. Par les fenêtres ouvertes, on entend des voix qui se disputent en chiffres.",
      "À l'angle du perron, la pierre de fondation porte une inscription gravée en lettres capitales, dorées à la feuille chaque printemps : *{{loupe#ib_fondation|Bâti par les quarante maisons de Salvèze, l'an premier de la République, pour la liberté du commerce|Bâti par les quarante maisons avec les pierres du palais de la reine, l'an premier de leur crime, et que Dieu pardonne au tailleur}}.*",
      { with: "tibere", text: "Tibère évite toujours les marches du Conseil. Il les regarde d'en bas, avec la tête d'un homme qui y a été jugé." },
    ],
    choices: [{ back: "IB_marche" }] },

  IB_taverne: { act: "I", title: "La taverne du Battant", place: "beffroi", backName: "la taverne du Battant",
    taverne: { mise: 2, adversaire: "un compagnon carillonneur" },
    text: [
      "Le Battant est la taverne des carillonneurs, au coin de la rue du même nom : une salle basse aux poutres noires, une cloche fêlée pendue au-dessus du comptoir en guise d'enseigne, et du vin de Corbelle qui tache les dents. On y joue à la Chandelle sur une table ronde, avec un dé d'os et des enjeux de deux liards.",
      { when: "night", text: "Le soir, les compagnons de la confrérie y boivent en rang, les mains bandées. Ils chantent des airs de cloches en tapant sur la table, et ils chantent juste, ce qui est rare dans une taverne." },
      { with: "tibere", text: "Tibère s'assied près de la table de jeu, les mains vides. Il regarde le dé rouler. Il a les mains à plat sur les cuisses, très à plat." },
    ],
    choices: [{ back: HUB }] },

  // ------------------------------------------------------------------ side quest: Herminie's waffle iron
  IB_oublies: { act: "I", title: "Le four d'Herminie", place: "beffroi", backName: "le four d'Herminie",
    text: [
      "Herminie est une grande femme aux bras rouges, qui vend des oublies depuis trente ans au même coin de la place : des gaufres fines comme du papier, roulées en cornet, au miel ou à l'anis. Aujourd'hui, son four roulant est froid. Elle est assise dessus, les mains vides.",
      "« On m'a volé mon fer, dit-elle. Mon fer à oublies, celui de ma mère et de ma grand-mère, avec les armes gravées dedans. Sans lui, je ne fais plus rien. » Elle s'essuie le nez. « {{oreille#ib_herminie|Un voleur des Gouttières, sûrement|Le collecteur du Conseil me l'a pris hier, pour le droit de place, et il m'a dit que si j'en parlais il me ferait chasser de la place}}. »",
      "Elle hausse les épaules. « Le droit de place a doublé au printemps. La Banque a racheté la ferme des taxes du marché au Conseil, et c'est elle qui fixe le prix, maintenant. Personne ne peut payer. »",
    ],
    fx: { questSeen: "IB_oublies" },
    choices: [
      { label: "« Je vais chercher votre fer. »", hide: { seen: "IB_oublies_collecteur" }, to: "IB_oublies_collecteur" },
      { label: "« C'est le collecteur qui a votre fer. Je vais le lui reprendre. »", hide: { any: [{ not: { voile: "ib_herminie" } }, { seen: "IB_oublies_collecteur" }] }, fx: { conf: { lison: 3 } }, to: "IB_oublies_collecteur" },
      { label: "« Je n'ai pas le temps. »", refuse: true, back: "IB_marche" },
      { back: "IB_marche" },
    ] },

  IB_oublies_collecteur: { act: "I", title: "Le collecteur des droits de place", place: "beffroi", backName: "la charrette du collecteur",
    text: [
      "Le collecteur, Anseaume Cuvelier, fait sa tournée avec une charrette à bras, un registre et deux gardes du Conseil qui le suivent comme des chiens las. C'est un homme maigre au nez rouge, qui écrit tout et ne regarde personne. Dans sa charrette, sous une bâche, s'entassent des objets saisis : une balance, un chaudron, un étal pliant, et un long fer à oublies aux poignées de bois noirci.",
      "« Saisie légale, dit-il sans lever les yeux. Droit de place non acquitté, quinze liards. Elle paie, elle récupère. » Il mouille son crayon. « {{oreille#ib_cuvelier|Je ne fais qu'appliquer le tarif de la Banque|J'en déclare la moitié à la Banque et je garde l'autre, et le fer, je l'ai déjà promis à un brocanteur des Halles}}. »",
      "Le fer à oublies dépasse de la bâche. Ses plaques {{pie#ib_fer|sont du fer noir, gravé d'un vieux motif de fleurs|sont du fer noir, gravé des armes de la reine Ysaure, le fer des oublies de sa cour, qui vaut cent fois le droit de place}}.",
    ],
    choices: [
      { label: "Payer les quinze liards du droit de place", fx: { gold: -15, conf: { tibere: -2 } }, to: "IB_oublies_fin" },
      { label: "« La moitié pour la Banque, la moitié pour vous. Vos gardes le savent ? »", hide: { not: { voile: "ib_cuvelier" } }, fx: { flag: "ib:cuvelier_tenu" }, to: "IB_oublies_fin" },
      { label: "Laisse-moi lui parler du règlement du Guet sur les saisies", who: "tibere", fx: { conf: { tibere: 5 } }, to: "IB_oublies_fin" },
      { label: "Prendre le fer dans la charrette pendant qu'il écrit", test: { dom: "discretion", diff: -10, label: "Reprendre un objet saisi", help: [{ arch: "voleur", v: 10 }, { with: "lison", v: 10 }] },
        win: { to: "IB_oublies_fin" }, lose: { fx: { gold: -20, note: "Un des gardes te saisit le poignet. L'amende te coûte un ducat, et le collecteur te fait payer le droit de place par-dessus, pour la peine. Le fer est rendu." }, to: "IB_oublies_fin" } },
    ] },

  IB_oublies_fin: { act: "I", title: "Les oublies d'Herminie", place: "beffroi", backName: "le four d'Herminie",
    fx: { quest: "IB_oublies", flag: "ib:oublies", fac: { conseil: -2, hautes: 2 }, ep: ["perso", 300] },
    text: [
      "Tu rapportes le fer à oublies à Herminie. Elle le prend à deux mains, le serre contre sa poitrine, puis elle l'ouvre et le referme, clac, clac, pour vérifier qu'il joue bien. Une heure plus tard, son four fume, et la place sent le miel.",
      { if: { voile: "ib_fer" }, text: "Tu lui dis ce que valent les armes gravées dans les plaques. Elle te regarde longtemps, et elle rit. « Je le sais, dit-elle. Ma grand-mère le savait. On ne le vend pas. On fait des oublies avec, pour les gens de la place, comme à la cour. C'est une façon de s'en souvenir. »" },
      "Elle te met dans les mains un cornet d'oublies chaudes, puis un deuxième. « Tous les jours, tant que je serai là. » Elle baisse la voix. « Le colporteur aux reliques, Pancrace. Tout ce qu'il vend est faux, sauf une chose par semaine, qu'il ne sait pas reconnaître. Regardez bien. »",
      { with: "lison", text: "Lison mange ses oublies en marchant, et en donne la moitié aux enfants du puits. « Aux Joncs, dit-elle, on fait les mêmes, avec de la farine de châtaigne. Elles sont meilleures. » Elle en reprend une, pour vérifier." },
    ],
    choices: [{ back: "IB_marche" }] },
});

Object.assign(P, {
  // ------------------------------------------------------------------ side quest: the crier's bell
  IB_crieur: { act: "I", title: "Le crieur du Conseil", place: "beffroi", backName: "la borne du crieur",
    fx: { questSeen: "IB_crieur" },
    text: [
      "Wandrille, crieur juré du Conseil des Comptoirs, est debout sur sa borne, en casaque bleue à la tour d'argent, une ordonnance déroulée entre les mains. Il a une voix énorme pour un homme si petit, une voix de foire qui passe par-dessus le marché. Il lit les yeux au loin, comme on lit au-dessus d'un vide.",
      "« Oyez ! Par ordonnance du Conseil, le prévôt et les quarante maisons garantissent à chaque bourgeois de Salvèze {{oreille#ib_crieur_pain|le pain à deux liards la miche jusqu'à la Saint-Jean|un pain qu'ils n'ont plus : les greniers de la République sont vendus à la Banque depuis la Chandeleur}} ! Que nul ne s'inquiète des bruits qui courent ! »",
      "Il redescend de sa borne, roule l'ordonnance, et te voit le regarder. « Vous trouvez que je crie mal ? Je crie sans sonnette, voilà pourquoi. On me l'a volée avant-hier, ma sonnette, pendant que je pissais. Un crieur sans sonnette, le Conseil lui retient trois jours de gages. » Il soupire. « Vingt ans de sonnette. Je la reconnaîtrais entre mille. Elle a la tour du Conseil poinçonnée sous la poignée. »",
      { after: "ib:casse", text: "Il ajoute, plus bas : « Et maintenant il faut que je crie qu'on a cassé un muet du Beffroi, et que la République offre dix ducats à qui dénoncera le coupable. Dix ducats. Pour un muet. » Il te regarde. « Vous ne savez rien, évidemment. »" },
    ],
    choices: [
      { label: "Lui rendre sa sonnette", hide: { not: { has: "ib:sonnette" } }, to: "IB_crieur_fin" },
      { label: "« Je chercherai votre sonnette. »", hide: { has: "ib:sonnette" }, back: "IB_marche" },
      { label: "« Les greniers sont vendus à la Banque. Vous le savez, et vous le criez quand même. »", hide: { any: [{ not: { voile: "ib_crieur_pain" } }, { seen: "IB_crieur_aveu" }] }, to: "IB_crieur_aveu" },
      { back: "IB_marche" },
    ] },

  IB_crieur_aveu: { act: "I", title: "Ce que crie Wandrille", place: "beffroi", backName: "la borne du crieur",
    fx: { clue: "ib_c_greniers" },
    text: [
      "Wandrille te prend par le bras et t'entraîne sous les arcades, derrière un pilier, si vite que tu manques de trébucher. « Qui vous a dit ça ? Taisez-vous. Taisez-vous, par pitié. » Il regarde autour de lui.",
      "« Mon beau-frère est commis aux greniers de la porte d'Aveline, dit-il très bas. Les greniers sont vides depuis un mois. Le grain est parti en gabares, de nuit, vers le nord. Le Conseil l'a vendu à la Banque pour payer les intérêts de la dette, et la Banque l'a revendu au duc. » Il s'essuie le front. « Je crie ce qu'on me donne à crier. Si je crie autre chose, demain c'est un autre qui crie, et moi je suis au fond du canal. »",
      { with: "tibere", text: "Tibère hoche la tête lentement. « Au Guet, dit-il, on savait. On ne disait rien non plus. »" },
    ],
    choices: [{ back: "IB_crieur" }] },

  IB_crieur_sonnette: { act: "I", title: "La sonnette de la reine", place: "beffroi", backName: "le colporteur aux reliques",
    fx: { flag: "ib:sonnette" },
    text: [
      "Tu retournes la sonnette sur le velours et tu poses le doigt sur la tour poinçonnée, sous la poignée, là où la lime a glissé. Maître Pancrace regarde ton doigt. Il regarde les deux gardes du Conseil qui passent à dix pas. Il regarde son velours, ses côtes de porc, sa plume d'archange, et fait ses comptes.",
      "« Une erreur, dit-il. Une erreur de bonne foi. Un gamin me l'a vendue hier pour une sonnette de la reine, je l'ai crue telle. Je suis trop bon, c'est mon défaut. » Il te la glisse dans la main, vite. « Rendez-la à qui de droit. {{oreille#ib_pancrace|Je n'ai rien à cacher|J'ai payé le gamin quatre liards et je l'ai vendue deux fois déjà, à des Flamands, qui me l'ont rendue}}. »",
    ],
    choices: [{ back: "IB_marche" }] },

  IB_crieur_fin: { act: "I", title: "La sonnette de Wandrille", place: "beffroi", backName: "la borne du crieur",
    fx: { quest: "IB_crieur", flag: "ib:crieur", item: "ib_ordonnance", fac: { conseil: 2 }, ep: ["perso", 300] },
    text: [
      "Wandrille prend la sonnette, la retourne, regarde la tour poinçonnée, et la fait tinter une fois, au creux de sa main. Il ferme les yeux. « Vingt ans, dit-il. C'est bête, un homme qui pleure pour une sonnette. »",
      "Il fouille sous sa casaque et en sort une feuille pliée. « Tenez. L'ordonnance d'hier, celle des greniers. On m'en donne deux copies, une pour crier, une pour l'archive. L'archive ne la réclame jamais. » Il hausse les épaules. « Elle a été écrite par un clerc de la Banque, ça se voit à la main. Il y a des gens que ça intéresse, peut-être. »",
      "Il remonte sur sa borne, fait sonner sa sonnette à toute volée, et la place entière se retourne.",
    ],
    choices: [{ back: "IB_marche" }] },

  // ------------------------------------------------------------------ side quest: the cup-and-ball man
  IB_bonneteau: { act: "I", title: "Le bonneteau de Bréval", place: "beffroi", backName: "la planche du bonneteau",
    fx: { questSeen: "IB_bonneteau" },
    text: [
      "Bréval est un beau parleur aux doigts longs, en pourpoint rouge à crevés, qui fait danser trois gobelets d'étain sur une planche posée en travers de deux tonneaux. « La boulette, la voici, la voilà, où est-elle ? Deux liards la partie, un ducat si vous trouvez ! » Autour de lui se presse un cercle de badauds, et trois compères gagnent tour à tour en poussant des cris de joie, avec une ponctualité que le hasard, d'ordinaire, s'interdit.",
      "Il pose les gobelets en ligne et lève les mains, paumes ouvertes, pour montrer qu'il n'y a rien dedans. La boulette de liège {{pie#ib_pois|est sous le gobelet du milieu, tu l'as vue passer|est coincée entre l'annulaire et l'auriculaire de sa main gauche, et sous aucun gobelet}}. Des trois gobelets, l'un {{pie#ib_gobelet|est d'étain comme les autres, un peu plus terne|est d'argent massif sous une couche d'étain, un gobelet de famille qu'il a déguisé pour ne pas se le faire voler}}.",
      { with: "tibere", text: "Tibère s'est arrêté net. Il regarde les gobelets tourner, et ses doigts bougent tout seuls, au bout de ses bras. « Le milieu, dit-il entre ses dents. {{oreille#ib_tibere_jeu|Je regarde, c'est tout|Une partie, une seule, et si je gagne j'ai la semaine de Rosalie}}. »" },
    ],
    choices: [
      { label: "Jouer une partie à deux liards", hide: { has: "ib:bonneteau" }, fx: { gold: -2, note: "Tu montres le gobelet du milieu. Bréval le soulève. Rien. Il soulève celui de gauche : la boulette. Les badauds rient." }, back: "IB_bonneteau" },
      { label: "Laisser Tibère jouer une partie", who: "tibere", hide: { any: [{ has: "ib:bonneteau" }, { seen: "IB_bonneteau_tibere" }] }, to: "IB_bonneteau_tibere" },
      { label: "Saisir la main gauche de Bréval et l'ouvrir devant tout le monde", hide: { any: [{ not: { voile: "ib_pois" } }, { has: "ib:bonneteau" }] }, to: "IB_bonneteau_fin" },
      { label: "Retourner les trois gobelets d'un coup, avant qu'il ne bouge", hide: { has: "ib:bonneteau" },
        test: { dom: "combat", diff: -10, label: "Prendre un tricheur de vitesse", help: [{ arch: "voleur", v: 10 }, { with: "lison", v: 10 }] },
        win: { to: "IB_bonneteau_fin" }, lose: { fx: { gold: -2, note: "Bréval est plus vif que toi. Il rafle les gobelets, te souhaite le bonjour, et l'un de ses compères te bouscule dans le dos." }, back: "IB_bonneteau" } },
      { back: "IB_marche" },
    ] },

  IB_bonneteau_tibere: { act: "I", title: "La partie de Tibère", place: "beffroi", backName: "la planche du bonneteau", with: "tibere",
    text: [
      { with: "tibere", text: "Tibère pose deux liards sur la planche. Il perd. Il en pose quatre. Il perd. Il fouille sa poche, en sort un ducat, le regarde, et le garde serré dans son poing pendant que les gobelets tournent. Il a le front mouillé." },
      { with: "tibere", text: "Bréval lui sourit. « Un ducat, sergent ? La chance tourne. » Tibère ouvre la main. Il regarde le ducat. Il regarde Bréval. Puis il te regarde, toi, et il dit, d'une voix enrouée : « Arrête-moi. »" },
    ],
    choices: [
      { label: "Lui refermer la main sur son ducat", fx: { conf: { tibere: 10 } }, back: "IB_bonneteau" },
      { label: "Le laisser jouer : c'est son argent", fx: { conf: { tibere: -5 }, note: "Tibère perd le ducat. Il s'en va vers le canal, et revient une heure plus tard, les yeux rouges, en disant qu'il avait une poussière." }, back: "IB_bonneteau" },
    ] },

  IB_bonneteau_fin: { act: "I", title: "La main de Bréval", place: "beffroi", backName: "la planche du bonneteau",
    fx: { quest: "IB_bonneteau", flag: "ib:bonneteau", ep: ["perso", 300] },
    text: [
      "Tu tiens le poignet de Bréval au-dessus de la planche et tu lui ouvres les doigts un par un, devant tout le monde. La boulette de liège roule sur la planche, tombe, rebondit sur les pavés. Un silence suit. Puis un débardeur qui a perdu trois parties dit un mot très laid, et le cercle des badauds se referme sur Bréval comme une main.",
      "Bréval saute par-dessus un tonneau et s'enfuit vers le canal, ses compères sur les talons, sous une pluie de trognons de chou. Il abandonne sa planche, ses tonneaux et ses trois gobelets d'étain. Les badauds se partagent les liards de la planche.",
      { with: "tibere", text: "Tibère ramasse un des gobelets, le soupèse, et te le tend. Puis il reste un moment à regarder le canal par où Bréval s'est enfui, avec une drôle de tête, comme on regarde partir quelqu'un qui vous ressemble." },
    ],
    choices: [
      { label: "Ramasser le gobelet le plus terne", hide: { not: { voile: "ib_gobelet" } }, once: true, fx: { item: "ib_tr_gobelet", clock: { tresors: 1 }, flag: "tresor:ib_gobelet" }, back: "IB_marche" },
      { back: "IB_marche" },
    ] },

  // ------------------------------------------------------------------ side quest: the ringed pigeon
  IB_pigeon: { act: "I", title: "Le pigeon bagué", place: "beffroi", backName: "le puits de la reine",
    fx: { flag: "ib:pigeon_trouve", questSeen: "IB_pigeon", item: "ib_billet_pigeon" },
    text: [
      "Le pigeon se laisse prendre sans se débattre. Il a l'aile froissée, sans doute par un coup de fronde, et une bague de cuir rouge à la patte droite. À la patte gauche est attaché un petit tube d'os fermé d'un bouchon de cire. Dedans, tu trouves un billet roulé, fin comme une pelure d'oignon.",
      "*Trois oublies, deux carillons, une barque bleue. Le sel monte. {{loupe#ib_billet_pigeon|Pour la Cour aux Draps|L'héritier Carrus a parlé au vieux carillonneur et à la batelière des Joncs ; le chanoine a peur ; le sergent ne sert plus à rien}}.*",
      "Le pigeon te regarde de son œil rond, orange, et donne un coup de bec dans ton pouce. D'ordinaire, les toits de la place ignorent les pigeons bagués de rouge. Quelqu'un en élève donc tout près, et les lâche d'une fenêtre qui voit la place.",
      { with: "lison", text: "Lison lisse les plumes de l'aile froissée, du bout des doigts, avec l'adresse des gens des marais. « Un pigeon voyageur, dit-elle. Il rentre chez lui si on le lâche. Il ira tout droit au colombier où on l'a dressé. »" },
    ],
    choices: [
      { label: "Soigner l'aile et lâcher le pigeon, puis suivre son vol des yeux", to: "IB_guetteur" },
      { label: "Garder le billet et tordre le cou au pigeon", fx: { quest: "IB_pigeon", flag: ["ib:pigeon", "ib:pigeon_mange"], conf: { lison: -3 }, note: "Le pigeon fait une maigre soupe, que les enfants du puits mangent avec toi." }, back: "IB_marche" },
    ] },

  IB_guetteur: { act: "I", title: "Le guetteur du Conseil", place: "beffroi", backName: "les combles du Conseil",
    text: [
      "Le pigeon fait trois tours au-dessus de la place, hésite, et file droit vers les toits du Conseil des Comptoirs : il disparaît dans une lucarne des combles, la troisième depuis l'angle. Tu passes par la cour des écuries, puis par un escalier de service où l'on te laisse passer, parce que tu marches vite et l'air ennuyé ; c'est le meilleur des laissez-passer.",
      "Sous les combles, dans une soupente poussiéreuse, il y a une cage à pigeons, un tabouret devant la lucarne, et un homme maigre en chapeau de feutre, assis, une ardoise sur les genoux, qui regarde la place en notant à la craie. Il est si absorbé qu'il ne t'entend pas arriver. Sur l'ardoise, en colonnes : des heures, des mots, des flèches. Ton nom est dessus.",
      "Il se retourne, te voit, et lâche sa craie. « Je {{oreille#ib_guetteur|suis clerc du Conseil, je compte les passages pour les taxes|suis payé par la Cour aux Draps pour vous regarder, et je n'ai jamais vu qui me paie}}, dit-il très vite. »",
    ],
    choices: [
      { label: "Le chasser de sa soupente et libérer ses pigeons", test: { dom: "combat", diff: 0, label: "Faire déguerpir un guetteur", help: [{ with: "tibere", v: 15 }] },
        win: { fx: { quest: "IB_pigeon", flag: ["ib:pigeon", "ib:guetteur_chasse"], fac: { banque: -3 }, ep: ["perso", 300] }, to: "IB_guetteur_fin" },
        lose: { fx: { quest: "IB_pigeon", flag: ["ib:pigeon", "ib:guetteur_fui"], ep: ["perso", 200] }, to: "IB_guetteur_fin" } },
      { label: "Le payer pour qu'il envoie désormais ce que tu lui dicteras", fx: { gold: -20, quest: "IB_pigeon", flag: ["ib:pigeon", "ib:guetteur_double"], ep: ["perso", 400] }, to: "IB_guetteur_fin" },
      { label: "« Payé par la Cour aux Draps, et vous ne savez pas qui. Moi si. Vous voulez savoir pour qui vous risquez le canal ? »", hide: { not: { voile: "ib_guetteur" } }, fx: { quest: "IB_pigeon", flag: ["ib:pigeon", "ib:guetteur_double"], ep: ["perso", 500] }, to: "IB_guetteur_fin" },
    ] },

  IB_guetteur_fin: { act: "I", title: "L'ardoise du guetteur", place: "beffroi", backName: "les combles du Conseil",
    text: [
      { if: { has: "ib:guetteur_double" }, text: "Le guetteur refuse de dire son nom, mais il accepte le marché. Il enverra ce que tu voudras, à l'heure que tu voudras, et il gardera la moitié du grain. Il efface son ardoise avec sa manche, soigneusement, et écrit en haut, à la craie : *Rien à signaler.* Puis il te regarde, avec l'air d'un homme qui vient de changer de maître et qui espère que le nouveau paiera mieux." },
      { if: { has: "ib:guetteur_chasse" }, text: "Le guetteur dévale l'escalier de service en tenant son chapeau. Tu ouvres la cage. Six pigeons bagués de rouge s'envolent par la lucarne et tournent au-dessus de la place, sans savoir où aller, puis se posent sur le Beffroi, avec les autres." },
      { if: { has: "ib:guetteur_fui" }, text: "Le guetteur te glisse entre les mains comme une anguille et s'enfuit par la lucarne, sur les toits, sa cage sous le bras. Il a laissé son ardoise." },
      "Sur l'ardoise, avant qu'elle soit effacée, tu as eu le temps de lire la dernière colonne : tes allées et venues des trois derniers jours, à l'heure près. Les gens à qui tu as parlé. Et une ligne soulignée deux fois : *La batelière : aux Joncs chaque nuit de lune.*",
    ],
    choices: [{ back: "IB_marche" }] },
});

Object.assign(P, {
  IB_archives: { act: "I", title: "Le coffre du chapitre", place: "beffroi", backName: "la sacristie",
    fx: { clue: "ib_c_horloge", ep: ["perso", 300] },
    text: [
      "Au fond de la sacristie, derrière un rideau de serge, le chanoine garde le coffre du chapitre du Beffroi : un bahut de chêne bardé de fer, plein de registres reliés en peau de truie, de chartes roulées et de comptes de cire. Une odeur de moisi monte quand on soulève le couvercle. Le chanoine te laisse faire en soupirant, une chandelle à la main.",
      "Le plus vieux registre de comptes commence l'année de la nuit des Comptoirs. Première page, d'une écriture de clerc : *Pour l'horloge de la reine, achevée la veille de la Saint-Aymeric : {{loupe#ib_registre|payé à maître A. V., horloger, cent ducats, de la cassette de la reine|payé à Aymeric Vasse, chancelier, rien : il a fait l'horloge de ses mains, pour y loger la parole de sa reine}}.* Le reste de la page a été gratté, puis récrit d'une autre main, par-dessus : les comptes du Conseil, l'année suivante.",
      { with: "gildas", text: "Frère Gildas lit par-dessus ton épaule, la chandelle tenue haut. Il pose le doigt sur la date. « La veille de la Saint-Aymeric, dit-il. La nuit des Comptoirs est tombée le lendemain. Celui qui a fini cette horloge savait ce qui allait arriver. » Il referme le registre avec précaution." },
      { if: { has: "metier:lire" }, text: "Tu reconnais le grattage : un clerc a passé la pierre ponce sur une demi-page, il y a très longtemps, et l'encre ancienne a laissé dans le vélin un fantôme brun que la ponce a épargné." },
    ],
    choices: [{ back: "IB_chanoine" }] },

  IB_ruelle: { act: "I", title: "La ruelle du Sel", place: "beffroi", backName: "la ruelle du Sel",
    text: [
      "Depuis le marché, deux hommes te suivent. Tu les as remarqués au four d'Herminie, puis au puits, puis devant le colporteur : deux grands gaillards en manteaux de laine grise, lames courtes au côté, qui regardent ailleurs chaque fois que tu te retournes. Trois rencontres en une heure font une filature. Tu prends la ruelle du Sel, qui coupe entre les arcades et le canal. Ils la prennent aussi.",
      "Au milieu de la ruelle, entre deux murs aveugles, le premier passe devant toi et se retourne. Le second ferme le passage derrière. « Le monsieur aux gants gris vous salue, dit le premier. Il voudrait que vous passiez le voir à la Cour aux Draps, demain, pour parler affaires. {{oreille#ib_ruelle|Il nous a dit d'insister|Il nous a dit de vous faire peur, pas mal ; de vous faire mal, seulement si vous criez}}. »",
      { with: "lison", text: "Lison a déjà la gaffe en main, la pointe ferrée basse. Elle sourit au deuxième homme comme on sourit à un chien qu'on va devoir battre." },
    ],
    choices: [
      { label: "Dégainer", fight: { title: "La ruelle du Sel", enemies: [{ id: "spadassin", n: 2 }],
        win: { fx: { fac: { banque: -3 }, ep: ["perso", 400] }, to: "IB_ruelle_suite" },
        lose: { fx: { gold: -10, pv: -2 }, to: "IB_ruelle_suite" },
        flee: { label: "Sauter dans le canal au bout de la ruelle", dom: "nature", diff: 0, to: "IB_ruelle_suite" } } },
      { label: "« Il vous a dit de ne pas me faire mal si je me tais. Je me tais. Et vous, vous partez. »", hide: { not: { voile: "ib_ruelle" } }, fx: { ep: ["perso", 400] }, to: "IB_ruelle_suite" },
      { label: "« Dites à votre monsieur que j'irai. »", fx: { flag: "ib:cour_aux_draps" }, to: "IB_ruelle_suite" },
    ] },

  IB_ruelle_suite: { act: "I", title: "Au bout de la ruelle", place: "beffroi", backName: "la ruelle du Sel",
    fx: { flag: "ib:ruelle" },
    text: [
      { outcome: "win", text: "Le premier homme est assis dans le ruisseau, la main sur le front. Le second est parti en courant vers les arcades, le manteau ouvert. Tu reprends ton souffle. Tes mains tremblent après, et après seulement." },
      { outcome: "lose", text: "Tu te réveilles assis{e} contre le mur, la lèvre fendue, la bourse plus légère. Les deux hommes sont partis. Ils ont laissé, sur ton genou, une carte de visite gravée : *L. Brunel, chercheur, Cour aux Draps.*" },
      { outcome: "flee", text: "L'eau du canal est glacée. Tu remontes par l'escalier des barques, cinquante pas plus loin, ruisselant{e}, sous les rires des bateliers. Les deux hommes te regardent du haut de la ruelle, haussent les épaules, et s'en vont." },
      { if: { voile: "ib_ruelle" }, text: "Le premier homme te regarde comme on regarde une diseuse de bonne aventure qui a deviné juste. Il fait un signe à l'autre. Ils s'en vont le dos raide, du pas des gens qu'on paie trop peu pour ce genre de surprise." },
      "La ruelle du Sel retrouve son silence. Au bout, le canal clapote. La Banque sait où tu marches, et elle veut que tu le saches.",
    ],
    choices: [{ back: HUB }] },

  IB_rosalie: { act: "I", title: "La robe bleue", place: "beffroi", backName: "le perron du Conseil", with: "tibere",
    text: [
      { with: "tibere", text: "Tibère s'arrête net au milieu de la place, si brusquement que tu lui marches sur le talon. Au pied du perron du Conseil, une femme d'échevin descend de sa chaise à porteurs, dans une robe de drap bleu à manches fendues, doublées de soie jaune. Derrière elle, une jeune fille de seize ans, en tablier d'apprentie, une boîte à épingles à la main, rajuste l'ourlet de la robe à genoux sur les pavés." },
      { with: "tibere", text: "« Rosalie », dit Tibère. Il ne le dit pas fort. La jeune fille relève la tête quand même, comme si elle avait entendu. Elle le voit. Elle regarde la robe, l'ourlet, ses épingles. « {{oreille#ib_rosalie|Je ne connais pas cet homme, madame|C'est mon père, madame, et il a une chemise propre, pour une fois}} », dit-elle à la femme d'échevin, qui ne lui a rien demandé." },
      { with: "tibere", text: "La femme d'échevin monte les marches. Rosalie la suit, la boîte à épingles serrée contre elle. À la dernière marche, elle se retourne une seconde vers son père. Puis la porte du Conseil se referme." },
      { with: "tibere", text: "Tibère reste planté là. « Elle a cousu ça, dit-il enfin. La robe. Les manches, la doublure. Tout. » Il renifle. « {{oreille#ib_tibere_robe|C'est du bon travail|Je donnerais tout ce que la Banque me paie pour qu'elle me regarde comme elle a regardé cette robe}}. »" },
    ],
    choices: [
      { label: "« Elle t'a regardé, Tibère. Elle a dit que ta chemise était propre. »", hide: { not: { voile: "ib_rosalie" } }, fx: { conf: { tibere: 15 }, flag: "ib:rosalie" }, back: HUB },
      { label: "Lui poser la main sur l'épaule, sans rien dire", fx: { conf: { tibere: 5 } }, back: HUB },
      { label: "Le laisser seul un moment", back: HUB },
    ] },

  IB_lison_nuit: { act: "I", title: "La nuit sur l'Effrontée", place: "beffroi", backName: "la barque de Lison", with: "lison", takes: "night",
    text: [
      { with: "lison", text: "La nuit d'après la tour, Lison te propose une course pour rien, sans destination. *L'Effrontée* glisse sous les ponts de la ville endormie, de canal en canal, entre les façades noires et les reflets des lanternes. Lison rame lentement. Elle se tait longtemps." },
      { with: "lison", text: "« La cousine dont je t'ai parlé, dit-elle enfin. Ta mère, alors. Je me souviens d'elle comme on se souvient à cinq ans : une jupe, une voix qui chantait faux, une barque qui partait. Aux Joncs, on ne dit plus son nom. Ma grand-mère te le dira, si elle le veut. Moi, je n'en ai pas le droit. » Elle relève les rames. « Je viens d'en dire plus qu'on ne m'en a jamais dit. »" },
      { with: "lison", text: "La barque dérive. Lison regarde l'eau. « Ma grand-mère m'a envoyée te surveiller, et reprendre l'os si tu ne valais rien. {{oreille#ib_lison_nuit|Je vais lui dire que tu ne vaux pas grand-chose, mais que tu peux servir|Je vais lui dire qu'elle m'a menti, et je ne sais pas encore si je rentrerai aux Joncs pour le lui dire en face}}. »" },
      { with: "lison", tendre: true, else: "Elle reprend les rames, et ramène la barque vers la place, sans se presser.", text: "Elle te regarde, dans le noir, et soutient ton regard, pour une fois. Puis elle reprend les rames, et ramène la barque vers la place, sans se presser, en chantonnant la comptine, juste, cette fois." },
    ],
    choices: [
      { label: "« Rentre aux Joncs avec moi, quand ce sera le moment. On le lui dira à deux. »", hide: { not: { voile: "ib_lison_nuit" } }, fx: { conf: { lison: 15 }, flag: "ib:lison_ensemble" }, back: HUB },
      { label: "Lui demander quelle chanson chantait ta mère", fx: { conf: { lison: 5 } }, back: HUB },
      { label: "Te taire, et regarder l'eau avec elle", fx: { conf: { lison: 5 } }, back: HUB },
    ] },

  IB_gildas_chapelle: { act: "I", title: "La chapelle basse", place: "beffroi", backName: "la chapelle basse", with: "gildas",
    text: [
      { with: "gildas", text: "Le soir, Frère Gildas va prier dans la chapelle basse du Beffroi, contre le socle de la tour, à l'heure où les dévotes sont parties. Tu l'y trouves agenouillé sur la pierre nue, sans prie-Dieu, la capuche rabattue, les mains jointes contre le front. Il prie en latin, à voix basse, très vite, comme on récite une chose apprise par cœur il y a longtemps." },
      "La chapelle {{echo#ib_chapelle|est silencieuse, à part la prière du moine|garde encore la voix d'une femme, trois siècles plus tôt : « Aymeric, prends la page, et apprends-leur à se taire »}}. Une veilleuse rouge brûle devant une statue de la reine repeinte en sainte, les mains jointes elle aussi, la bouche fermée.",
      { with: "gildas", text: "Gildas ne t'a pas entendu{e} entrer, ou il en donne l'air. Il prie longtemps pour une seule âme, et il en tait le nom. Quand il se relève, il a les genoux raides et les yeux secs. « Vous étiez là, dit-il. Pardon. Je prie mal, ces temps-ci. »" },
      "Tu {{miroir#ib_miroir_gildas|le regardes sortir sans arrière-pensée|le regardes sortir en te demandant, pour la première fois, pour qui il prie, et tu chasses la question parce qu'elle te fait peur}}.",
    ],
    choices: [{ back: HUB }] },

  IB_horloger_apres: { act: "I", title: "Vauquelin et ses roues", place: "beffroi", backName: "l'atelier de l'horloger",
    text: [
      "Maître Vauquelin est assis devant son établi, une roue de buis noirci entre les mains, celle qui commandait le septième muet. Il la fait tourner sous sa loupe de verre, lentement, dent après dent. Il garde la tête baissée quand tu entres.",
      { if: { has: "ib:casse" }, else: "« L'autre nuit, dit-il, mes automates sont sortis à minuit. Tous. Le septième s'est arrêté devant sa porte, puis il est rentré. Ce matin, la serrure de sa poitrine était ouverte, et vide. Personne n'a rien cassé. » Il te regarde enfin. « Vingt ans que je graisse cette horloge. Je ne savais pas qu'elle avait une poitrine. »", text: "« L'autre nuit, dit-il, quelqu'un a éventré mon septième muet. Il ne rentre plus. Le Conseil veut que je le répare pour la foire. » Il pose la roue. « Je le réparerai. Mais je ne remettrai pas de serrure dans sa poitrine. Il n'y a plus rien à garder, n'est-ce pas ? »" },
      "Il remet la roue sur l'établi, la regarde encore. « Celui qui a fait cette horloge était meilleur que moi. Il a compté trois cents ans d'avance. {{oreille#ib_vauquelin|Je ne veux rien savoir de plus|Je voudrais savoir son nom, pour le graver sur la roue, et ne le dire à personne}}. »",
    ],
    choices: [
      { label: "« Il s'appelait Aymeric Vasse. »", hide: { any: [{ not: { voile: "ib_vauquelin" } }, { not: { any: [{ voile: "ib_vis" }, { voile: "ib_registre" }] } }] }, once: true, fx: { fac: { taiseurs: 3 }, note: "Vauquelin prend son burin le plus fin et grave, sur le moyeu de la roue, deux lettres minuscules : A. V. Puis il la remet en place." }, back: "IB_horloger_apres" },
      { back: "IB_pied" },
    ] },
});

Object.assign(P, {
  // ------------------------------------------------------------------ after the cache
  IB_lothaire_billet: { act: "I", title: "Un billet de la Cour aux Draps", place: "beffroi", backName: "la place",
    fx: { item: "ib_billet_lothaire" },
    text: [
      "Un garçon en livrée grise, douze ans, des souliers trop grands de deux pointures, te court après sur la place et te tend un billet plié, scellé de cire grise sans armes. « De la part de monsieur Brunel. Il a dit d'attendre la réponse. » Il attend, en se balançant d'un pied sur l'autre.",
      "*Mes compliments pour l'autre nuit. Je vous offre trois mille ducats du feuillet et de ce qui l'accompagnait, mille de plus que votre maîtresse n'en demandait. {{loupe#ib_billet_lothaire|Ma porte vous reste ouverte, à la Cour aux Draps|La voisine du quai a entendu votre dispute la nuit des Lanternes ; un témoin se paie moins cher qu'un feuillet, et le Guet écoute les témoins}}. L. B.*",
      { with: "tibere", text: "Tibère regarde le cachet gris sans le toucher. Il connaît cette cire, et garde pour lui d'où il la connaît." },
    ],
    choices: [
      { label: "« Dis à ton maître que le feuillet n'est pas à vendre. »", fx: { flag: "ib:lothaire_refus" }, back: HUB },
      { label: "Déchirer le billet devant le garçon", fx: { flag: "ib:lothaire_refus", drop: "ib_billet_lothaire" }, back: HUB },
      { label: "« Dis-lui que j'y réfléchis. »", fx: { flag: "ib:lothaire_hesite" }, back: HUB },
    ] },

  IB_lison_loupe: { act: "I", title: "La loupe entre deux mains", place: "beffroi", backName: "les marches du canal", with: "lison",
    text: [
      { with: "lison", text: "Lison s'assied à côté de toi sur les marches du canal, les pieds au-dessus de l'eau. Elle regarde la poche où tu ranges la loupe, longtemps. « Je peux la tenir ? dit-elle. Une fois. {{oreille#ib_lison_loupe|Juste pour voir le moucheron|Si je la prends maintenant et que je saute dans la barque, je suis aux Joncs avant l'aube, et ma grand-mère me pardonne tout}}. »" },
      { with: "lison", text: "Elle tend la main, paume ouverte. Ses doigts restent fermes. Ses yeux, eux, tremblent." },
    ],
    choices: [
      { label: "Lui donner la loupe", fx: { conf: { lison: 15 }, flag: "ib:loupe_confiee", note: "Lison regarde le moucheron à travers l'ambre, longtemps, contre le ciel. Puis elle te rend la loupe, et elle se lève, et elle va pêcher au bout du quai." }, back: HUB },
      { label: "« Je sais ce que tu ferais avec. Tiens-la quand même. »", hide: { not: { voile: "ib_lison_loupe" } }, fx: { conf: { lison: 20 }, flag: ["ib:loupe_confiee", "lison:mission"] }, to: "IB_lison_loupe_suite" },
      { label: "« Pas aujourd'hui. »", fx: { conf: { lison: -3 } }, back: HUB },
    ] },

  IB_lison_loupe_suite: { act: "I", title: "Le moucheron", place: "beffroi", backName: "les marches du canal", with: "lison",
    text: [
      { with: "lison", text: "Lison prend la loupe. Elle la tient à deux mains, au-dessus de ses genoux, sans la lever vers le ciel. Elle regarde la barque, l'amarre, le canal qui file vers les marais. Tu vois ses pensées passer sur son visage, l'une après l'autre." },
      { with: "lison", text: "Puis elle lève la loupe, regarde le moucheron contre la lumière, et elle rit, d'un petit rire étonné. « Il a l'air furieux, dit-elle. Mille ans qu'il est furieux. » Elle te rend la loupe. « Tu es un drôle de voleur. Tu donnes les choses aux gens qui viennent pour les prendre. »" },
    ],
    choices: [{ back: HUB }] },

  IB_baptistine_apres: { act: "I", title: "La confrérie en émoi", place: "beffroi", backName: "la maison des Carillonneurs",
    fx: { flag: "ib:baptistine_reconnue" },
    text: [
      "La maison des Carillonneurs bourdonne comme une ruche. Le doyen, en tablier, fait les cent pas devant le clavier d'étude. Baptistine est assise sur l'estrade, les poignets bandés de frais, le menton levé. Les compagnons de la confrérie l'entourent à distance, comme on entoure un chien inconnu.",
      "« Tout le monde a entendu, dit le doyen. Toute la ville. L'air de la reine, à minuit, juste, et la septième retenue. Personne de la confrérie n'était monté. » Il regarde Baptistine. « Elle dit que c'est elle. » Un compagnon ricane. Le doyen le fait taire d'un regard. « Je la crois. Personne ici ne joue la Mouche aussi net. »",
      "Il soupire, longuement. « Elle montera. Le dimanche, pour la messe basse. Pas les jours de foire. » Baptistine garde le silence. Elle a les yeux qui brillent, et elle serre les poings sur ses genoux pour les empêcher de frapper tout seuls.",
      { if: { seen: "IB_medard_air" }, text: "Au fond de la salle, assis sur un banc, Médard Coquart regarde sa petite-fille, ses mains énormes posées à plat sur les genoux. Il garde la bouche close. Il bat la mesure, sept temps, le dernier sans frapper." },
    ],
    choices: [{ back: HUB }] },

  IB_chanoine_apres: { act: "I", title: "Le chanoine inquiet", place: "beffroi", backName: "la sacristie",
    text: [
      "Le chanoine Sidoine Mainfroy t'attrape par la manche sur le seuil de la sacristie et te tire à l'intérieur. Il a les yeux cernés et sent le vin de messe. « Les cloches, dit-il. À minuit. Et l'homme aux gants gris qui est venu ce matin me demander si je vous avais ouvert. » Il s'assied sur son coffre de cierges.",
      { if: { has: "ib:chanoine_tenu" }, text: "« Vous savez pour mes billets, ajoute-t-il très vite. Vous êtes le seul, avec lui. Ne me regardez pas comme ça. »" },
      "« J'ai dit non. {{oreille#ib_chanoine_menti|Il m'a cru, je pense|Il m'a regardé comme s'il entendait autre chose que ce que je disais, et il a souri, et il a dit : vous mentez mal, mon père}}. » Il se tord les mains. « Si la Banque saisit mes billets, je perds la chapelle, les cloches, tout. »",
    ],
    choices: [
      { label: "Lui laisser trois ducats pour faire patienter la Banque", fx: { gold: -60, fac: { conseil: 2 }, flag: "ib:chanoine_aide" }, back: "IB_pied" },
      { label: "« L'homme aux gants gris entend ce qu'on pense, mon père. Il faut mentir en pensant juste. »", hide: { not: { voile: "ib_chanoine_menti" } }, fx: { flag: "ib:chanoine_aide" }, back: "IB_pied" },
      { back: "IB_pied" },
    ] },
});

// ==================================================================== END OF PASSAGES (marker for appending)

module.exports = {
  passages: P,
  extras: {
    people: {
      ib_medard: { name: "Médard Coquart", qui: "Le plus vieux carillonneur de la confrérie du Beffroi.", aspect: { allure: "vieux sonneur assis sur le banc", visage: "barbe blanche coupée au couteau", signe: "oreille bouchée de coton, mains énormes déformées" }, f: false, face: { age: "ancien", coif: "degarni", beard: "barbe" }, desc: "Le plus vieux carillonneur de la confrérie du Beffroi. Il a sonné quarante ans les cloches de la reine, et il est sourd d'une oreille." },
      ib_baptistine: { name: "Baptistine Coquart", qui: "Petite-fille de Médard, apprentie carillonneuse.", aspect: { allure: "quinze ans, frappe à coups réguliers", visage: "tresses rousses", signe: "poignets bandés de toile", voix: "franche, piquante" }, f: true, face: { age: "jeune", coif: "tresses", hair: "roux", marks: ["rousseur"] }, desc: "Petite-fille de Médard, apprentie carillonneuse, la seule fille de la confrérie." },
      ib_eudes: { name: "Le chanoine Sidoine Mainfroy", qui: "Chanoine du Beffroi, gardien de la tour et des clés.", aspect: { allure: "homme rond", visage: "joues couperosées", habits: "surplis taché", signe: "énorme trousseau de clés qui tinte" }, f: false, face: { age: "mur", coif: "couronne" }, desc: "Chanoine du Beffroi : il a la garde de la tour, de la chapelle du rez-de-chaussée et des clés." },
      ib_aldebert: { name: "Maître Aldebert Vauquelin", qui: "Maître horloger de la République, chargé de l'horloge de la reine.", aspect: { allure: "affairé, penché sur l'établi", visage: "moustache cirée", habits: "manches retroussées", signe: "rouages et loupe de verre" }, f: false, face: { age: "mur", coif: "court", beard: "moustache" }, desc: "Maître horloger de la République, chargé de l'horloge de la reine." },
    },
    items: {
      ib_billet_lothaire: { name: "Le billet de Lothaire Brunel", kind: "document", form: "billet",
        text: "*Mes compliments pour l'autre nuit. Je vous offre trois mille ducats du feuillet et de ce qui l'accompagnait, mille de plus que votre maîtresse n'en demandait. {{loupe#ib_billet_lothaire|Ma porte vous reste ouverte, à la Cour aux Draps|La voisine du quai a entendu votre dispute la nuit des Lanternes ; un témoin se paie moins cher qu'un feuillet, et le Guet écoute les témoins}}. L. B.*",
        desc: "Un billet scellé de cire grise sans armes, apporté par un garçon en livrée grise." },
      ib_tr_ecu: { name: "L'écu d'or de la reine", kind: "tresor", price: 100, desc: "Un écu d'or au profil d'Ysaure, la couronne de sel sur la tête, repêché au fond du puits de la place. La vase l'a gardé propre comme au premier jour." },
      ib_tr_de: { name: "Le dé à coudre de la reine", kind: "tresor", price: 80, desc: "Un dé à coudre d'argent fin, très usé, gravé à l'intérieur d'une couronne et d'un Y minuscule. Pour une fois, le colporteur disait vrai, sans le savoir." },
      ib_tr_sonneur: { name: "La médaille du sonneur", kind: "tresor", price: 70, desc: "Une médaille d'argent à la cloche et aux sept traits, enterrée sous la borne du crieur pour le sonneur qui garderait l'air de la reine." },
      ib_tr_gobelet: { name: "Le gobelet d'argent de Bréval", kind: "tresor", price: 90, desc: "Un gobelet d'argent massif, déguisé sous une couche d'étain par un joueur de bonneteau qui craignait les voleurs." },
      ib_ordonnance: { name: "L'ordonnance des greniers", kind: "document", form: "acte",
        text: "*Par ordonnance du Conseil des Comptoirs, le prévôt et les quarante maisons garantissent à chaque bourgeois de Salvèze le pain à deux liards la miche jusqu'à la Saint-Jean. {{loupe#ib_ordonnance|Fait au Conseil, par le clerc des ordonnances|Copie pour la Banque : les greniers de la porte d'Aveline sont vidés et le grain livré au duc contre quittance des intérêts ; ne rien crier de ceci}}.*",
        desc: "La seconde copie de l'ordonnance des greniers, que le crieur Wandrille t'a donnée. Une main de clerc de banque." },
      ib_billet_pigeon: { name: "Le billet du pigeon bagué", kind: "document", form: "billet",
        text: "*Trois oublies, deux carillons, une barque bleue. Le sel monte. {{loupe#ib_billet_pigeon|Pour la Cour aux Draps|L'héritier Carrus a parlé au vieux carillonneur et à la batelière des Joncs ; le chanoine a peur ; le sergent ne sert plus à rien}}.*",
        desc: "Un billet roulé, fin comme une pelure d'oignon, trouvé dans le tube d'os d'un pigeon bagué de rouge." },
      ib_tr_chevaliere: { name: "La chevalière du vieux Conseil", kind: "tresor", price: 120, desc: "Une chevalière d'or, gravée d'une tour et d'une plume : le sceau du Conseil du temps de la reine, avant que les Comptoirs n'en changent les armes. Trouvée dans un nid du colombier du Beffroi." },
      ib_tr_bourse: { name: "La bourse du puits des poids", kind: "tresor", price: 60, desc: "Une bourse de cuir pourri pleine de liards verts frappés au profil d'une femme couronnée : la monnaie de la reine Ysaure. Les changeurs en donnent trois fois le poids." },
      ib_billet_chanoine: { name: "Le billet du chanoine", kind: "document", form: "billet",
        text: "*Laissez monter le porteur, pour régler l'horloge de la reine, au nom de la confrérie. {{loupe#ib_billet_chanoine|Sidoine Mainfroy, chanoine du Beffroi|Sidoine Mainfroy, qui doit onze cents ducats à la Banque Marrel et n'en dort plus}}.* Suivi d'un paraphe en forme d'escargot.",
        desc: "Trois lignes sur un bout de vélin, signées d'un paraphe en escargot que les gardes de nuit connaissent." },
      ib_gravure: { name: "Une gravure du Beffroi", kind: "document", form: "billet",
        text: "*Le Beffroi de la reine, vu de la place, avec sa galerie et ses huit portes. {{loupe#ib_gravure|Gravé pour la confrérie des Carillonneurs, et vendu un liard|Sous la borne du crieur, la reine a laissé de quoi payer son sonneur}}.*",
        desc: "Une petite gravure sur papier gris, vendue un liard aux visiteurs par la confrérie des Carillonneurs." },
      ib_cle_carillon: { name: "La clé des carillonneurs", kind: "outil", unique: true, desc: "Une longue clé noire sur un anneau de fer : la petite porte de la tour, côté canal." },
      ib_partition: { name: "Le carnet de Médard", kind: "document", form: "billet",
        text: "*L'air de la reine, en sept temps. La Grosse Ysaure. La Bavarde. La Veuve. Le Bourdon. La Clarine. La Mouche. {{loupe#ib_partition|La Petite : comme il plaira à Dieu|La Petite : lever le battant et tenir, le temps d'une prière, sans frapper}}.*\n\n*Ne le joue pour personne. {{loupe#ib_partition_bas|Ton grand-père, Médard|Joue-le pour qui l'entendra deux fois, et monte avec lui}}.*",
        desc: "Un carnet de musique taché de vin, cousu de ficelle, que Baptistine t'a donné." },
      ib_lettre_abbe: { name: "La lettre de Dom Évrard", kind: "document", form: "lettre",
        text: "*Frère Gildas, vous irez auprès de l'héritier d'Odeline Carrus et vous l'aiderez de votre savoir. {{loupe#ib_abbe|Ne le quittez pas tant qu'il cherchera|Ce qu'il porte à l'oreille appartient au Mont : reprenez-le avant qu'il ne parle}}. Que Dieu vous garde le silence. Dom Évrard, abbé.*",
        desc: "Une lettre scellée de cire grise, au sceau de la montagne, que Frère Gildas t'a laissée." },
    },
    enemies: {},
    clues: {
      ib_c_horloge: { rev: "T", text: "L'horloge de la reine fut achevée la veille de la Saint-Aymeric, la veille de la nuit des Comptoirs, payée de la cassette de la reine." },
      ib_c_comptine: { rev: "T", text: "Sous le cornet, le dernier vers de la comptine des sept muets dit : « et le septième ouvre la main quand on le tait à minuit »." },
      ib_c_air: { rev: "T", text: "L'air de la reine se joue sur sept cloches, de la Grosse Ysaure à la Petite, et la Petite ne se frappe pas : c'est le silence qui ouvre." },
      ib_c_vasse: { rev: "T", text: "Le chancelier de la reine s'appelait Aymeric Vasse. Il est monté au Beffroi la nuit des Comptoirs, la parole de la reine dans sa manche." },
      ib_c_aymeric: { rev: "T", text: "La reine a confié son registre à son chancelier Aymeric, pour qu'il le cache en sept lieux et apprenne à ceux qui le garderaient à parler deux fois." },
      ib_c_marrel: { rev: "B", text: "Le feuillet du Beffroi : la nuit des Comptoirs, quarante hommes sont entrés chez la reine avec les clés de son palais ; Marrel tenait la lampe, et Fourcaud le couteau." },
      ib_c_charte: { rev: "R", text: "Le feuillet du Beffroi : la Charte des Hautes-Eaux est vraie, les titres des Comptoirs sont faux, et la preuve attend sous l'eau, à Sorne, la plus basse mer." },
      ib_c_greniers: { rev: "B", text: "Les greniers de la République sont vides depuis un mois : le Conseil a vendu le grain à la Banque pour payer les intérêts de la dette, et la Banque l'a revendu au duc d'Aveline." },
      ib_c_gants: { rev: "B", text: "Un homme en gants gris, à la voix douce, a payé le chanoine et le garde de nuit pour monter dans le Beffroi. Il est redescendu bredouille." },
      ib_c_chanoine: { rev: "B", text: "La Banque Marrel tient onze cents ducats de billets du chanoine du Beffroi, et lui a promis de les oublier contre une nuit dans la tour." },
      ib_c_lison: { rev: "T", text: "Lison Vasse a été envoyée par sa grand-mère, Ancolie, des Joncs-Bas, pour juger l'héritier d'Odeline et reprendre le cornet s'il ne vaut rien." },
      ib_c_taiseurs: { rev: "T", text: "Le vieux Médard appelle « Taiseurs » les gens qui ont bâti l'horloge de la reine : des gens qui parlaient deux fois dans la même phrase." },
      ib_c_serment: { rev: "T", text: "Le serment des carillonneurs : ne jouer l'air de la reine que pour qui le demande à deux voix." },
    },
    veils: {
      ib_comptine: { fx: { clue: "ib_c_comptine", ep: ["perso", 300] } },
      ib_air: { fx: { clue: "ib_c_air", ep: ["perso", 400] } },
      ib_vis: { fx: { clue: "ib_c_vasse", ep: ["perso", 300] } },
      ib_registre: { fx: { clue: "ib_c_vasse", ep: ["perso", 200] } },
      ib_feuillet_un: { fx: { clue: "ib_c_marrel", ep: ["perso", 500] } },
      ib_feuillet_deux: { fx: { clue: "ib_c_aymeric", ep: ["perso", 500] } },
      ib_feuillet_trois: { fx: { clue: "ib_c_charte", ep: ["perso", 500] } },
      ib_cadran: { fx: { ep: ["perso", 200] } },
      ib_clavier: { fx: { ep: ["perso", 200] } },
      ib_lison_grandmere: { fx: { clue: "ib_c_lison" } },
      ib_lison_cousine: { fx: { ep: ["perso", 200] } },
      ib_lison_moine: { fx: { flag: "ib:gildas_joncs" } },
      ib_main: { fx: { flag: "ib:main_bronze" } },
      ib_gants: { fx: { clue: "ib_c_gants" } },
      ib_chanoine_dette: { fx: { clue: "ib_c_chanoine" } },
      ib_crieur_pain: { fx: { clue: "ib_c_greniers" } },
      ib_ordonnance: { fx: { flag: "ib:ordonnance_lue", ep: ["perso", 300] } },
      ib_billet_lothaire: { fx: { flag: "ib:temoin_achete", ep: ["perso", 300] } },
      ib_tibere_passe: { fx: { flag: "ib:tibere_su" } },
      ib_tibere_battant: { fx: { flag: "ib:tibere_su" } },
      ib_fondation: { fx: { ep: ["perso", 200] } },
      ib_medaille: { fx: { ep: ["perso", 200] } },
      ib_chapelle: { fx: { ep: ["perso", 300] } },
      ib_abbe: { fx: { flag: "ib:abbe_lu", ep: ["perso", 300] } },
    },
    quests: [
      { id: "IB_oublies", act: "I", kind: "annexe", title: "Le fer à oublies d'Herminie", start: "IB_oublies", echo: "ib:oublies" },
      { id: "IB_crieur", act: "I", kind: "annexe", title: "La sonnette du crieur", start: "IB_crieur", echo: "ib:crieur" },
      { id: "IB_bonneteau", act: "I", kind: "annexe", title: "Le bonneteau de Bréval", start: "IB_bonneteau", echo: "ib:bonneteau" },
      { id: "IB_pigeon", act: "I", kind: "annexe", title: "Le pigeon bagué", start: "IB_pigeon", echo: "ib:pigeon" },
    ],
  },
};
