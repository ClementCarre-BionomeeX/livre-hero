// Lot iii2 of "Le Trésor des Taiseurs": the abbey of the Mont-Taciturne (act III). The gate and its crossroads
// (IIIM_porte), the monks' sign language, the offices (their chants under the tuning fork), the library (book of signs,
// annals), the infirmary, the abbot Dom Évrard and his debt to the Bank, the Bank's "pilgrim", the hall of voices,
// the ways to open the road to the cache (mont:acces, then IIIR_seuil), three side quests, four treasures.

var P = {};
// The monks' signs the hero can learn (flags); three of them let the hero speak with the brothers.
var SG = ["iiim:sg_paix", "iiim:sg_non", "iiim:sg_porte", "iiim:sg_dette", "iiim:sg_etranger", "iiim:sg_mort"];
var SIGNES3 = { count: SG.map(function (f) { return { has: f }; }), min: 3 };
var SIGNES5 = { count: SG.map(function (f) { return { has: f }; }), min: 5 };
var DIAP = { item: "diapason" };

// ==================================================================== the gate (crossroads), the porter, the guesthouse
Object.assign(P, {
  IIIM_porte: { act: "III", title: "La porte du Mont-Taciturne", place: "mont", hub: true, routes: true, backName: "la cour de la porterie",
    text: [
      { first: true, text: "Le dernier lacet du chemin passe sous un rocher en surplomb, et l'abbaye est là d'un coup, collée à la montagne comme un nid d'hirondelle : une enceinte de pierre grise, un clocher carré sans flèche, des toits de lauze qui descendent en gradins jusqu'aux vignes. Le vent monte des Combes avec une odeur de sarments brûlés. Au-dessus de la porte cochère, gravée dans le linteau, une seule ligne : *Qui tacet, audit.*" },
      { first: true, text: "Tu tires la chaîne. Une cloche sonne quelque part, très loin à l'intérieur, et le guichet s'ouvre sur un visage énorme, rasé, aux sourcils blancs. Le frère portier te regarde, regarde le chemin derrière toi, puis pose la main à plat sur sa poitrine et s'efface. La porte s'ouvre en grinçant sur une cour pavée où picorent trois poules." },
      { first: true, with: "gildas", text: "Quand Frère Gildas passe le seuil, le portier se fige. Puis il porte trois doigts à sa gorge, ferme la main, et incline la tête plus bas qu'il ne l'a fait pour toi. Gildas répond par le même geste, plus court, et il entre sans se retourner. Dans la cour, deux moines qui portaient une hotte de sarments l'ont vu aussi ; ils posent la hotte et font le geste à leur tour." },
      { first: true, with: "lison", text: "Lison regarde le linteau, puis toi. « Qui se tait entend, traduit-elle. Chez nous on le dit sans latin, et on le dit en premier aux enfants. »" },
      { again: true, when: "day", text: "La cour de la porterie : les pavés usés en creux, les poules, la chaîne de la cloche qui pend contre le mur. Des frères passent en bure grise, une hotte au dos, un livre sous le bras, et ils ne font aucun bruit en dehors de leurs sandales." },
      { again: true, when: "night", text: "La cour, la nuit. Une lanterne brûle à la porterie, derrière le guichet. Le clocher se découpe sur un ciel plein d'étoiles, et l'on entend, par l'église ouverte, un moine seul qui balaie." },
      "Le portail {{echo#iiim_porte_pelerin|grince sur ses gonds de fer quand le vent le pousse|rend une voix d'homme, polie, essoufflée : « Je suis pèlerin, mon frère, et je paierai mon écot en or de la Banque, comme convenu avec votre abbé »}}.",
      { after: "iiim:pelerin_vu", before: "iiim:pelerin_parti", text: "À une fenêtre de l'hôtellerie, un homme en manteau de pèlerin, une coquille cousue à l'épaule, regarde la cour en mangeant une pomme. Il te salue de la pomme." },
      { after: "iiim:pelerin_chasse", text: "La fenêtre de l'hôtellerie est fermée. Depuis que le chapitre a mis le pèlerin dehors, le portier lave le seuil chaque matin à grande eau, et il le fait en te regardant." },
      { after: "iiim:pelerin_vaincu", text: "La fenêtre de l'hôtellerie est fermée. On a descendu le pèlerin à la grange sur une civière ; les frères ont gratté sa coquille, oubliée sur la table, et l'ont jetée dans la falaise." },
      { after: "iiim:pelerin_gildas", text: "La fenêtre de l'hôtellerie est fermée. Le pèlerin est parti la nuit où le Gardien est descendu, et dans la cour on fait, en parlant de lui, le geste de l'index vers la vallée, puis la main qui balaie." },
      { after: "iiim:pacte_lambert", text: "La fenêtre de l'hôtellerie est fermée. Séverin Lambert t'attend à la grange du bas, a-t-il dit, avec une patience de banquier." },
      { if: { all: [{ has: "iiim:pelerin_parti" }, { not: { any: [{ has: "iiim:pelerin_chasse" }, { has: "iiim:pelerin_vaincu" }, { has: "iiim:pelerin_gildas" }, { has: "iiim:pacte_lambert" }] } }] }, text: "La fenêtre de l'hôtellerie est fermée. Le pèlerin est parti avec ses hommes et sa quittance, et le portier a lavé le seuil derrière lui à grande eau." },
      { after: "iiim:acces_abbe", text: "Dom Évrard traverse la cour sans sa crosse, ce matin, les mains dans les manches. Il te fait le signe de la paix en passant, et il le fait le premier." },
      { after: "iiim:acces_epreuve", text: "Depuis ta nuit dans la salle des voix, les frères te saluent comme l'un des leurs : la main sur le cœur, puis deux doigts sur les lèvres." },
      { after: "iiim:acces_menace", text: "Les frères que tu croises baissent les yeux. Ils savent comment la porte s'est ouverte, et ils te le reprochent en se taisant un peu plus fort." },
      { after: "iiim:acces_force", text: "Les frères qui te croisent font le poing au front et le gardent là jusqu'à ce que tu sois passé{e}. On a cloué des planches neuves sur la porte de la crypte, par-dessus le chêne fendu." },
      { after: "mont:acces", text: "Le portier, quand tu passes, fait le signe de la porte : deux mains jointes qui s'écartent. Il le fait sans sourire, comme on rend un compte." },
    ],
    choices: [
      { label: "La porterie, où Frère Isidore tient les clés", to: "IIIM_portier" },
      { label: "Le cloître", to: "IIIM_cloitre" },
      { label: "L'église abbatiale", to: "IIIM_eglise" },
      { label: "La bibliothèque", to: "IIIM_biblio" },
      { label: "L'infirmerie", to: "IIIM_infirmerie" },
      { label: "Le logis de l'abbé", to: "IIIM_abbatiale" },
      { label: "L'hôtellerie des pèlerins", to: "IIIM_hotellerie" },
      { label: "Le jardin des simples et le verger des novices", to: "IIIM_jardin" },
      { label: "La grange du bas, au bord des vignes", to: "IIIM_grange" },
      { label: "Le clocher", to: "IIIM_clocher" },
      { label: "Dire au portier ce que le portail a gardé du pèlerin", hide: { any: [{ not: { voile: "iiim_porte_pelerin" } }, { seen: "IIIM_portier_pelerin" }] }, to: "IIIM_portier_pelerin" },
      { label: "Descendre vers la salle des Reflets, par le passage ouvert", big: true, if: { has: "mont:acces" }, why: "Il faut d'abord qu'on t'ouvre la voie de la cache.", to: "IIIR_seuil" },
    ] },

  IIIM_portier: { act: "III", title: "La porterie", place: "mont", backName: "la porterie",
    text: [
      { first: true, text: "La porterie est une pièce basse et chaude, avec un banc, un brasero, un tableau de clés sur le mur et un registre ouvert sur un lutrin. Frère Isidore remplit le lieu à lui seul : un homme de soixante ans, haut comme une porte, les mains larges comme des pelles à pain. Il t'indique le registre du menton, et une plume." },
      { first: true, text: "Sur le registre, chaque hôte a écrit son nom et le jour. Les trois dernières lignes sont d'une même main nette et penchée : *Séverin Lambert, pèlerin, de Salvèze, pour la Saint-Gilles du Mont.* Le pèlerin est arrivé il y a six jours. {{loupe#iiim_registre_hotes|Sous son nom, la page est blanche|Sous son nom, d'une encre qui a pâli en séchant : « reçu de Dom Évrard la promesse du passage, contre la quittance »}}." },
      { again: true, text: "Frère Isidore lève les yeux de son brasero, pose la main à plat sur sa poitrine, et attend." },
      "Le tableau de clés {{pie|porte vingt clés de fer pendues à vingt clous, toutes semblables|porte vingt clés de fer, et une vingt et unième en bronze vert, accrochée derrière les autres, qui n'ouvre aucune porte de l'abbaye : elle a le panneton d'une serrure de crypte}}.",
      { after: "iiim:acces_contourne", text: "Frère Isidore regarde la clé de bronze que tu portes, puis le clou vide derrière les autres. Il ne te la redemande pas." },
      { after: "iiim:acces_novice", text: "Frère Isidore compte ses clés chaque matin, maintenant, du doigt, une à une. Il sait que la vingt et unième a voyagé une nuit. Il ne sait pas avec qui." },
      { with: "tibere", text: "Tibère regarde les clés avec l'œil d'un ancien sergent qui a gardé des prisons. « Un homme qui tient vingt clés dort mal, dit-il. Ou il dort sur la vingt et unième. »" },
    ],
    choices: [
      { label: "Lui demander, par gestes, de t'apprendre à parler comme ici", hide: { seen: "IIIM_signes" }, to: "IIIM_signes" },
      { label: "Écrire ton nom sur le registre, sous celui du pèlerin", once: true, fx: { flag: "iiim:inscrit", fac: { moines: 3 }, note: "Tu écris ton nom. Frère Isidore souffle sur l'encre, puis trace dans l'air un cercle et un trait : trois jours d'hospitalité, selon la règle." }, back: "IIIM_portier" },
      { label: "Montrer la clé de bronze du doigt", hide: { any: [{ not: { voile: "iiim_porte_pelerin" } }, { has: "iiim:cle_crypte" }] }, to: "IIIM_portier_cle" },
      { back: "IIIM_porte" },
    ] },

  IIIM_signes: { act: "III", title: "Les premiers signes", place: "mont",
    text: [
      "Frère Isidore comprend avant que tu aies fini ton geste. Il ferme le registre, s'assied sur le banc et tapote la place à côté de lui. Puis il commence, lentement, comme on parle à un enfant qui apprend ses lettres, et il répète chaque signe trois fois.",
      "La main à plat sur le cœur : *paix*, et aussi *sois le bienvenu*, et aussi *merci*. Le poing fermé posé contre le front : *non*, *défendu*. Les deux mains jointes, paume contre paume, qu'on écarte comme un livre : *ouvrir*, *porte*, *passage*. Il te fait refaire les trois. À la troisième fois, il hoche la tête, satisfait comme un maître d'école.",
      "Puis il fait un quatrième signe, pour lui seul, en regardant la cour : trois doigts à la gorge, la main fermée. Il ne te le fait pas répéter.",
      { with: "gildas", text: "Frère Gildas, adossé au chambranle, regarde la leçon sans y prendre part. Quand le portier fait le quatrième signe, Gildas détourne la tête vers la cour." },
      { if: { has: "taiseurs:serment" }, text: "Le geste du non, tu l'as vu aux Joncs-Bas, sur la main d'une dentellière qui refusait un prix. Les deux langues se touchent par en dessous." },
    ],
    fx: { flag: ["iiim:sg_paix", "iiim:sg_non", "iiim:sg_porte"], ep: ["perso", 900], note: "Tu connais trois signes du Mont : paix, non, ouvrir." },
    choices: [{ back: "IIIM_portier" }] },

  IIIM_portier_cle: { act: "III", title: "La clé de bronze", place: "mont",
    text: [
      "Tu montres du doigt la clé de bronze, cachée derrière les autres. Le portier suit ton doigt. Son visage reste le même ; ses mains, posées sur ses genoux, se ferment lentement.",
      "Il fait le signe du non, poing au front. Puis, plus lentement, il fait un autre signe que tu ne connais pas encore : le pouce qui frotte deux doigts sur la paume ouverte. Il montre l'hôtellerie du menton. Il refait le signe, plus fort.",
      { if: { has: "iiim:sg_dette" }, text: "Le pouce sur la paume : *argent*, *dette*. Il te dit que quelqu'un, à l'hôtellerie, a voulu payer pour cette clé." },
      { if: SIGNES3, text: "Tu lui réponds avec ce que tu as : la main sur le cœur, *paix* ; puis les mains jointes qui s'ouvrent, *passage*, et le poing au front, *non*, en montrant l'hôtellerie. Le pèlerin n'aura pas le passage. Frère Isidore te regarde longtemps. Puis il décroche la clé de bronze et la pose dans ta main, et il referme tes doigts dessus avec les siens.", else: "Tu ne sais pas lui répondre dans sa langue, et ta voix, ici, sonne trop fort. Frère Isidore remet la clé derrière les autres et retourne à son brasero." },
    ],
    choices: [
      { label: "Garder la clé de bronze", if: SIGNES3, why: "Il faudrait savoir lui parler en signes (trois signes au moins).", fx: { item: "iiim_cle_bronze", flag: "iiim:cle_crypte", fac: { moines: 5 }, ep: ["perso", 1200] }, back: "IIIM_portier" },
      { back: "IIIM_portier" },
    ] },

  IIIM_portier_pelerin: { act: "III", title: "Ce que le portail a gardé", place: "mont",
    text: [
      "Tu répètes à Frère Isidore, à voix basse, les mots que le portail t'a rendus : *en or de la Banque, comme convenu avec votre abbé.* Le portier écoute sans bouger. À la fin, il prend son registre, l'ouvre au jour de l'arrivée du pèlerin, et pose dessus sa main énorme.",
      "Puis il fait un signe, lentement, pour que tu le retiennes : le pouce qui frotte deux doigts au creux de la paume. Il le refait en montrant le logis de l'abbé. Il le refait en montrant l'hôtellerie. Enfin il te prend le poignet, pose ta main à plat sur ton propre cœur, et la garde là un moment.",
      "Tu comprends le premier signe : *dette*. Le second est une prière, ou une demande. Il te demande la paix pour son abbé.",
    ],
    fx: { flag: ["iiim:sg_dette", "iiim:portier_allie"], fac: { moines: 5 }, ep: ["perso", 1000] },
    choices: [{ back: "IIIM_porte" }] },

  IIIM_hotellerie: { act: "III", title: "L'hôtellerie", place: "mont", backName: "l'hôtellerie",
    text: [
      { first: true, text: "L'hôtellerie est une longue salle blanchie à la chaux, au-dessus des celliers : huit lits de sangles, huit coffres, une table et un crucifix de bois. Il y fait plus chaud qu'ailleurs, à cause des cuves qui fermentent en dessous, et l'air sent le moût. Un frère convers y apporte matin et soir du pain, des noix et une cruche de vin clair des Combes." },
      { first: true, text: "Un seul autre lit est occupé. Sur le coffre qui va avec, un bâton de pèlerin, un chapeau à large bord, une besace de cuir fermée d'une boucle neuve." },
      { again: true, text: "Les huit lits de l'hôtellerie, la table, l'odeur du moût qui monte des celliers." },
      "La besace du pèlerin {{pie|est un sac de route usé, comme on en voit sur tous les chemins de Compostelle|est neuve sous une couche de poussière frottée exprès, et sa boucle est d'argent sous le fer noirci}}.",
      { when: "night", text: "La nuit, on entend sous le plancher le vin qui travaille dans les cuves, un bruit de bulles lentes, comme une respiration." },
    ],
    fx: { flag: "iiim:pelerin_vu" },
    choices: [
      { label: "Parler au pèlerin, qui lit à la fenêtre", hide: { any: [{ has: "iiim:pelerin_parti" }, { seen: "IIIM_pelerin" }] }, to: "IIIM_pelerin" },
      { label: "Fouiller la besace du pèlerin pendant qu'il est à l'office", hide: { any: [{ has: "iiim:pelerin_parti" }, { seen: "IIIM_pelerin_sac" }] }, to: "IIIM_pelerin_sac" },
      { label: "Dormir à l'hôtellerie", to: "IIIM_nuit_hotellerie" },
      { back: "IIIM_porte" },
    ] },

  IIIM_nuit_hotellerie: { act: "III", title: "Une nuit à l'hôtellerie", place: "mont", takes: "morning",
    text: [
      "Le lit de sangles grince à chaque mouvement. Tu dors quand même, d'un sommeil épais, et tu te réveilles deux fois : une fois à la cloche des Vigiles, au milieu de la nuit, quand les sandales des frères passent dans la galerie au-dessous ; une fois avant l'aube, parce que le silence de l'abbaye est si complet que tu entends ton propre sang.",
      { before: "iiim:pelerin_parti", text: "La seconde fois, le lit du pèlerin est vide. Son manteau est encore là, plié sur le coffre. Il revient avant Laudes, à pas de chat, et se couche tout habillé. Ses chaussures sont mouillées de rosée." },
      { with: "lison", text: "Lison dort assise, le dos au mur, entre ton lit et la porte. Au matin elle dit seulement : « Il est sorti à la troisième heure. Il est allé vers le logis de l'abbé. »", if: { not: { has: "iiim:pelerin_parti" } } },
      { with: "tibere", text: "Tibère ronfle comme une scie de long. À l'aube, il jure qu'il a l'oreille fine et qu'il n'a rien entendu." },
    ],
    fx: { rest: true, pv: "max" },
    choices: [
      { label: "Suivre le pèlerin, la nuit prochaine", hide: { any: [{ has: "iiim:pelerin_parti" }, { seen: "IIIM_pelerin_suivre" }] }, to: "IIIM_pelerin_suivre" },
      { back: "IIIM_hotellerie" },
    ] },
});

// ==================================================================== the cloister
Object.assign(P, {
  IIIM_cloitre: { act: "III", title: "Le cloître", place: "mont", backName: "le cloître",
    text: [
      { first: true, text: "Le cloître est un carré de galeries basses autour d'un préau d'herbe où pousse un buis taillé en boule. Les chapiteaux des colonnes sont sculptés de bêtes et de feuillages ; la pierre est si ancienne que les têtes des bêtes ont fondu sous la pluie. Au milieu de la galerie nord, une dalle plus grande que les autres, polie comme un galet, porte un cercle gravé." },
      { first: true, text: "Des moines vont et viennent, et se parlent. Leurs mains volent, s'arrêtent, repartent : deux frères qui se croisent échangent en trois gestes ce que deux bourgeois mettraient une phrase à se dire. L'un rit, sans un son, la main devant la bouche." },
      { again: true, text: "Le cloître, le buis en boule, les galeries où les mains des frères parlent à voix basse." },
      "La galerie de l'est {{echo#iiim_cloitre_nuit|garde l'odeur de la cire et de la pierre froide|garde deux voix d'hommes, la nuit dernière, très bas : « Trois cents ducats, frère cellérier, et le livre de comptes oublie la grange. » « L'abbé a déjà signé pour la grange. Il faut payer pour la crypte. »}}.",
      { with: "gildas", text: "Frère Gildas fait le tour des galeries une fois, lentement, une main qui touche chaque colonne au passage. Les frères qu'il croise s'arrêtent et lui font le signe des trois doigts. À la quatrième colonne de l'ouest, il s'arrête un peu plus longtemps." },
    ],
    choices: [
      { label: "La grande dalle polie, au milieu de la galerie nord", to: "IIIM_dalle" },
      { label: "Les chapiteaux sculptés", hide: { seen: "IIIM_chapiteaux" }, to: "IIIM_chapiteaux" },
      { label: "Regarder parler les frères", to: "IIIM_moines_signes" },
      { label: "La salle du chapitre, sur la galerie est", to: "IIIM_chapitre" },
      { label: "Le réfectoire", to: "IIIM_refectoire" },
      { label: "Le petit cimetière des moines, derrière le chevet", to: "IIIM_cimetiere" },
      { label: "Suivre Frère Gildas vers son ancienne cellule", who: "gildas", hide: { seen: "IIIM_gildas_cellule" }, to: "IIIM_gildas_cellule" },
      { back: "IIIM_porte" },
    ] },

  IIIM_dalle: { act: "III", title: "La dalle qui chante", place: "mont",
    text: [
      "La dalle est d'une pierre plus claire que le reste du cloître, veinée de jaune, et elle est tiède sous la main alors que les autres sont froides. Le cercle gravé au milieu a été repassé tant de fois par des pieds nus qu'il forme une cuvette. Les frères, en passant, y posent le pied droit, et en le posant ils fredonnent une note, bouche fermée.",
      "Tu poses le pied comme eux. Sous ta semelle, la pierre répond : une vibration très basse, qui monte dans tes os jusqu'aux dents.",
      { if: DIAP, text: "Dans ta poche, le diapason de Sorne se met à chanter tout seul, une note pure qui se marie à celle de la pierre. C'est une pierre chantante, de la même veine que celles des Écueils." },
      "La dalle {{echo#iiim_dalle_voix|garde la tiédeur des corps qui l'ont foulée|garde une voix de vieil homme, patiente : « Pose ton pied, et chante la note que tu as dans la gorge, pas une autre. Ici on ne ment pas, même en chantant. »}}.",
    ],
    choices: [
      { label: "Frapper le diapason sur la dalle", if: DIAP, why: "Il te faudrait le diapason de Sorne.", fx: { recharge: { echo: 3 }, note: "Le diapason a repris trois notes." }, to: "IIIM_dalle_chant" },
      { back: "IIIM_cloitre" },
    ] },

  IIIM_dalle_chant: { act: "III", title: "La note de la dalle", place: "mont",
    text: [
      "Tu frappes le diapason sur le cercle gravé. La note part, longue, et la dalle la reprend, plus grave, et la galerie entière se met à bourdonner comme une ruche. Deux frères qui passaient s'arrêtent, les yeux fermés, jusqu'à ce que le son s'éteigne. Puis l'un d'eux te fait le signe de la paix, la main sur le cœur, et repart.",
      "Le bronze, dans ta main, est chaud. Il a repris de quoi faire parler les murs.",
    ],
    choices: [{ back: "IIIM_cloitre" }] },

  IIIM_chapiteaux: { act: "III", title: "Les chapiteaux", place: "mont",
    text: [
      "Tu fais le tour des colonnes en levant la tête. Un lion qui mange sa queue. Un homme à tête de poisson. Une femme assise, couronnée, la main sur la bouche, et devant elle sept petits hommes qui tiennent chacun un doigt sur les lèvres. Plus loin, des feuilles de vigne, des grappes, un renard qui prêche à des poules.",
      "La reine à la main sur la bouche est sur le chapiteau de la quatrième colonne de l'ouest. {{pie#iiim_chapiteau_creux|La pierre y est pleine et lourde comme ailleurs|La pierre y sonne creux derrière la couronne : un bloc taillé à part, scellé au mortier, que le temps a déchaussé d'un doigt}}.",
      "Sous la scène, un mot a été gravé, à moitié effacé : *{{loupe|TACVIT ET SERVAVIT|TACVIT ET SERVAVIT · AYMERICVS FECIT · SVB CORONA}}*.",
      { with: "gildas", text: "Frère Gildas lève la tête vers la reine de pierre. « Les novices l'appellent la Dame aux doigts, dit-il. On leur dit de la saluer en passant. On ne leur dit pas pourquoi. »" },
    ],
    choices: [
      { label: "Desceller la couronne de pierre", hide: { any: [{ not: { voile: "iiim_chapiteau_creux" } }, { has: "tresor:iiim_croix" }] }, test: { dom: "nature", diff: -10, label: "Desceller le bloc sans le briser", help: [{ with: "tibere", v: 10 }, { with: "salome", v: 10 }, { if: { item: "corde" }, v: 5 }] },
        win: { fx: { item: "iiim_tr_croix", clock: { tresors: 1 }, flag: "tresor:iiim_croix", ep: ["perso", 1500] }, to: "IIIM_croix" },
        lose: { fx: { pv: -3, fac: { moines: -3 } }, to: "IIIM_chapiteau_rate" } },
      { back: "IIIM_cloitre" },
    ] },

  IIIM_croix: { act: "III", title: "Sous la couronne", place: "mont",
    text: [
      "Le bloc vient d'un coup, avec un bruit de dent qu'on arrache. Derrière, dans un creux de la taille d'un poing, un paquet de cuir noirci par trois siècles. Dedans, une petite croix d'ambre jaune, à branches égales, montée sur une chaîne d'argent. L'ambre est le même que celui de ta loupe : clair, avec des bulles prises dedans.",
      "Quand tu la tiens près de la dalle qui chante, la croix vibre doucement contre ta paume.",
      "Tu remets le bloc en place. De la galerie, on ne voit rien, sinon une fine poussière de mortier au pied de la colonne.",
    ],
    choices: [{ back: "IIIM_cloitre" }] },

  IIIM_chapiteau_rate: { act: "III", title: "Le mortier", place: "mont",
    text: [
      "Le mortier tient mieux que la pierre. Un éclat saute de la couronne et te coupe la main, et un frère qui traversait le préau te voit, perché{e} sur la balustrade, une lame plantée dans un chapiteau de trois cents ans. Il fait le poing au front, une fois, très fort, et s'en va vers le logis de l'abbé.",
      "Le bloc a bougé d'un doigt. Tu pourras réessayer quand le cloître sera vide.",
    ],
    choices: [{ back: "IIIM_cloitre" }] },

  IIIM_moines_signes: { act: "III", title: "La langue des mains", place: "mont",
    text: [
      "Tu t'assieds sur le muret du préau et tu regardes. Deux frères en sabots discutent près du lavabo ; l'un d'eux, le plus vieux, tient sous le bras un registre relié de vert, celui des comptes.",
      "Le vieux frère fait un geste que tu vois souvent ici : le pouce qui frotte deux doigts sur la paume ouverte. Puis il pointe l'index vers la vallée, loin, au-delà du mur. L'autre répond par le même index pointé, puis par un geste de la main ouverte qui glisse de haut en bas sur son visage, comme on ferme les yeux d'un mort.",
      { if: { has: "iiim:sg_dette" }, text: "*Dette*, puis *le monde*, *l'étranger*. Et la main sur le visage : *mort*. Le cellérier dit que la dette vient du dehors. L'autre lui répond que la dette tuera la maison." },
      { if: { not: { has: "iiim:sg_dette" } }, text: "Tu retiens les gestes à force de les voir revenir : le pouce sur la paume, c'est l'argent ou la dette, puisqu'ils regardent le registre ; l'index vers la vallée, c'est le dehors, l'étranger ; la main sur le visage, tu la devines à leur mine." },
      { if: SIGNES3, text: "Le vieux frère s'aperçoit que tu suis. Il te regarde, puis il fait le signe de la paix, et il ajoute, du bout des doigts, un signe que tu n'as jamais vu : les deux mains en toit au-dessus de la tête, puis brisées. *La maison qui tombe.*" },
    ],
    fx: { flag: ["iiim:sg_dette", "iiim:sg_etranger", "iiim:sg_mort"], ep: ["perso", 800] },
    choices: [{ back: "IIIM_cloitre" }] },

  IIIM_cimetiere: { act: "III", title: "Le cimetière des moines", place: "mont",
    text: [
      "Derrière le chevet de l'église, entre le mur et la falaise, un pré de tombes basses, chacune marquée d'une croix de fer forgé sans nom. Les moines du Mont se taisent aussi dans la mort. Une seule pierre, contre le mur, plus ancienne que les autres, porte une inscription.",
      "*{{loupe#iiim_tombe|HIC IACET AYMERICVS FRATER CONVERSVS|HIC IACET AYMERICVS VASSE · CANCELLARIVS YSAVRAE REGINAE · QVI TACVIT VT ILLA LOQVERETVR}}*",
      "Au pied de la pierre, quelqu'un a déposé une poignée de roseaux secs, liés d'un fil rouge. Ce ne sont pas des roseaux de montagne.",
      { with: "lison", text: "Lison s'accroupit devant les roseaux et touche le fil rouge. « On en dépose aux Joncs, sur les tombes des Vasse, dit-elle. Ma grand-mère en a envoyé ici, ou quelqu'un pour elle. »" },
      { when: "night", text: "La nuit, le vent qui descend de la falaise fait chanter les croix de fer, toutes ensemble, sur une seule note." },
    ],
    choices: [{ back: "IIIM_cloitre" }] },

  IIIM_refectoire: { act: "III", title: "Le réfectoire", place: "mont",
    text: [
      "Une longue salle voûtée, deux tables de chêne, des écuelles de bois. Les hôtes mangent au bout, sur un banc à part. On sert une soupe d'orge, du pain bis, un fromage de chèvre, un vin des Combes coupé d'eau. Une seule voix dans la salle : celle d'un frère juché dans une chaire de pierre, au milieu du mur, qui lit à voix haute la règle de l'abbaye.",
      "C'est le bibliothécaire, Frère Romaric : un vieillard sec, à la voix fêlée, le seul homme de la maison qui ait le droit de parler. « *Que le frère ne dise rien qui ne soit plus beau que le silence*, lit-il, *et quand il doit dire, qu'il {{oreille|dise peu et dise vrai|dise ce que l'abbé lui a dit de dire, et qu'il en ait honte après}}.* »",
      "Une place, à la grande table, est mise et vide : une écuelle, un pain, un gobelet. Les frères, en passant, font devant elle la main sur le visage, de haut en bas. Un frère mort, à qui l'on sert encore son pain pendant trente jours.",
      "Pour avoir du sel, ton voisin te montre comment faire : le pouce et l'index pincés, qu'on frotte. Pour le pain, la main en coupe. Tu as du sel et du pain sans un mot.",
      { with: "tibere", text: "Tibère mange en regardant ses mains, et pour une fois il a l'air content qu'on ne lui demande rien." },
    ],
    fx: { flag: "iiim:sg_mort", food: 1 },
    choices: [
      { label: "Aller trouver Frère Romaric après le repas", to: "IIIM_prosper" },
      { back: "IIIM_cloitre" },
    ] },

  IIIM_gildas_cellule: { act: "III", title: "La cellule de Gildas", place: "mont", with: "gildas",
    text: [
      "La cellule est au bout du dortoir des profès, la dernière avant le mur : un lit de planches, un prie-Dieu, une niche dans la pierre pour un livre et une lampe. Rien n'a bougé depuis le départ de Gildas, sinon qu'un frère a balayé, et posé sur le lit une couverture pliée, pour le jour où il reviendrait.",
      "Frère Gildas reste sur le seuil. « J'ai dormi ici vingt-six ans, dit-il. On entend la source sous le mur, quand on a l'oreille faite. Les premières années, je l'entendais toute la nuit. »",
      "Le mur au-dessus du lit {{echo#iiim_cellule_gildas|est nu, chaulé de frais|rend une voix jeune, étouffée dans une couverture : « Je ne peux pas. Je ne peux pas me taire en dedans, frère Ignace, ça crie »}}.",
      "Il entre, prend la couverture pliée, et la serre un moment contre lui, sans la déplier. Puis il la repose exactement où elle était.",
    ],
    fx: { conf: { gildas: 5 } },
    choices: [
      { label: "Lui demander qui était frère Ignace", hide: { not: { voile: "iiim_cellule_gildas" } }, to: "IIIM_gildas_ignace" },
      { back: "IIIM_cloitre" },
    ] },

  IIIM_gildas_ignace: { act: "III", title: "Frère Ignace", place: "mont", with: "gildas",
    text: [
      "Gildas ne te demande pas d'où tu tiens le nom. Il regarde le diapason dans ta main, puis le mur.",
      "« Le maître des novices, dit-il. Il m'a appris à me taire quand j'avais vingt ans et que j'avais trop à dire. Il est vieux. Il est à l'infirmerie, je crois, depuis l'hiver. » Il ajoute, après un temps : « Il m'a appris aussi que ce que les murs rendent, il faut le laisser aux murs. »",
      "Il sort de la cellule le premier.",
    ],
    fx: { conf: { gildas: -3 } },
    choices: [{ back: "IIIM_cloitre" }] },
});

// ==================================================================== the church and the offices (the chants under the tuning fork)
Object.assign(P, {
  IIIM_eglise: { act: "III", title: "L'église abbatiale", place: "mont", backName: "l'église abbatiale",
    text: [
      { first: true, text: "L'église est plus grande que l'abbaye ne le laissait croire de dehors : une nef unique, haute et nue, sans une peinture, éclairée par des fenêtres d'albâtre qui donnent au jour la couleur du miel. Les stalles des moines, de chêne noir, se font face de part et d'autre du chœur. Au fond, derrière l'autel, une grille de fer ferme une petite chapelle où brillent des châsses." },
      { first: true, text: "Il n'y a rien pour s'asseoir, côté hôtes, qu'un banc de pierre le long du mur. La pierre de la nef rend chaque pas, chaque toux, chaque froissement de manche, et le rend deux fois." },
      { again: true, when: "day", text: "La nef couleur de miel, les stalles vides, la grille du trésor qui brille au fond." },
      { again: true, when: "night", text: "La nef dans le noir, une seule lampe rouge devant l'autel. Tes pas sonnent jusqu'à la voûte." },
      { after: "iiim:calice_rendu", text: "Derrière la grille, le calice de saint Taciturne a retrouvé son coussin. Le vieux sacristain l'astique chaque matin, et chaque matin il le touche longtemps, pour être sûr." },
      { after: "iiim:calice_garde", text: "Derrière la grille, le calice de cuivre brille sur son coussin. Le sacristain l'astique sans rien voir. Le vrai pèse dans ton sac." },
      "Les stalles du chœur {{echo#iiim_stalles|sentent la cire et le vieux bois|rendent un chuchotement, dans la stalle de l'abbé : « Pardonnez-moi, mes frères, j'ai signé pour sauver la maison, et la maison ne le saura pas »}}.",
    ],
    choices: [
      { label: "Attendre les Vêpres, au soir", to: "IIIM_vepres" },
      { label: "Veiller jusqu'aux Vigiles, au milieu de la nuit", to: "IIIM_vigiles" },
      { label: "Rester aux Complies, avant le grand silence", hide: { not: { seen: "IIIM_vepres" } }, to: "IIIM_complies" },
      { label: "Assister aux Laudes, à l'aube", to: "IIIM_laudes" },
      { label: "La grille du trésor et ses châsses", to: "IIIM_reliquaire" },
      { label: "La porte basse derrière le chœur, et l'escalier de la crypte", to: "IIIM_voix_descente" },
      { back: "IIIM_porte" },
    ] },

  IIIM_vepres: { act: "III", title: "Les Vêpres", place: "mont", takes: "evening",
    text: [
      "La cloche sonne sept coups lents. Les frères entrent deux par deux, s'inclinent devant l'autel, gagnent leurs stalles. Dom Évrard entre le dernier, appuyé sur sa crosse : un homme lourd, au visage rouge de vigneron, qui marche comme si le sol était en pente. Il ne regarde personne.",
      "Puis ils chantent, et l'église change de taille. Les voix {{echo#iiim_vepres|montent sur le psaume du soir d'une seule coulée, sans un chef pour battre la mesure|montent sur le psaume, et sous le latin elles disent autre chose, dans la langue des Combes : « L'abbé a vendu la grange. L'abbé vend la crypte. Gardez la porte, frères, gardez la porte »}}.",
      "La seconde antienne {{echo#iiim_vepres_deux|est à deux chœurs, qui se répondent d'un côté à l'autre du chœur|est à deux chœurs : « Qui a reçu l'étranger ? » demande le côté droit. « Le cellérier, avec l'or », répond le côté gauche}}.",
      { with: "gildas", text: "Frère Gildas chante avec eux, debout contre le mur, les yeux fermés. Sa voix est grave et juste, et il ne se trompe pas d'une syllabe." },
      { with: "lison", text: "Lison se penche vers toi. « Aux Joncs, on chante comme ça en ramendant les filets, dit-elle, tout bas. Un air pour les enfants, et un autre dessous. »" },
    ],
    fx: { ep: ["perso", 900] },
    choices: [
      { label: "Rester aux Complies", to: "IIIM_complies" },
      { back: "IIIM_eglise" },
    ] },

  IIIM_complies: { act: "III", title: "Les Complies", place: "mont",
    text: [
      "Les Complies se chantent dans le noir, toutes les lampes éteintes sauf celle de l'autel. C'est l'office court, celui qui ouvre le grand silence de la nuit : après lui, même les mains ne parlent plus. Les novices chantent à part, dans le bas du chœur, six garçons en bure plus claire.",
      "Une des voix de novice {{echo#iiim_complies|déraille sur un aigu, et l'on entend un frère soupirer|déraille, et sous le latin elle chante pour elle seule : « Je pars avant la Saint-Jean. Je pars, ou je meurs ici »}}.",
      "L'hymne finale {{echo|s'éteint lentement, comme une lampe dont on baisse la mèche|s'éteint sur trois mots chantés par tous, qui ne sont pas latins : « Garde, Gardien, garde »}}.",
      "Quand la dernière note meurt, Dom Évrard trace une croix au-dessus des frères, et les frères sortent sans un bruit. Le novice qui chantait faux sort le dernier, et il se retourne vers la porte de l'église, vers la nuit, avant de suivre les autres.",
    ],
    
    choices: [{ back: "IIIM_eglise" }] },

  IIIM_vigiles: { act: "III", title: "Les Vigiles", place: "mont", takes: "midnight",
    text: [
      "On te réveille, ou tu ne dormais pas. La cloche sonne dans le noir, une seule fois. Dans l'église, les frères chantent sans lumière, de mémoire, les longs psaumes de la nuit. Le froid monte des dalles jusqu'aux genoux. Tu ne vois rien ; tu entends les voix venir de partout à la fois, comme si la voûte chantait.",
      "Au troisième nocturne, le chant {{echo#iiim_vigiles|se fait plus lent, plus grave, et la voix du chantre le porte seule un moment|se fait plus lent, et la voix du chantre dit, sous les mots : « Sous la Dame aux doigts, la clé de bronze. Sous la salle des voix, la porte des Reflets. Qui se tait en dedans passe »}}.",
      "Puis tous reprennent. La psalmodie {{echo#iiim_vigiles_deux|roule d'un côté à l'autre du chœur jusqu'au matin|roule d'un côté à l'autre, et une voix basse, au fond, reprend un vieux couplet : « Le banquier dort à l'hôtellerie. Le banquier ne dort pas »}}.",
      { with: "gildas", text: "Dans le noir, tu sens Frère Gildas tourner la tête vers toi, quand la voix du chantre change. Il n'en dit rien après l'office." },
      { when: "night", text: "Quand tu sors, la cour est blanche de lune et de givre. Une lanterne passe au loin, vers le logis de l'abbé, puis s'éteint." },
    ],
    fx: { ep: ["perso", 1000] },
    choices: [
      { label: "Suivre la lanterne vers le logis de l'abbé", hide: { any: [{ has: "iiim:pelerin_parti" }, { seen: "IIIM_pelerin_suivre" }] }, to: "IIIM_pelerin_suivre" },
      { back: "IIIM_eglise" },
    ] },

  IIIM_laudes: { act: "III", title: "Les Laudes", place: "mont", takes: "morning",
    text: [
      "À l'aube, les fenêtres d'albâtre passent du gris au rose. Les Laudes sont l'office joyeux : un cantique vif, presque dansant, qui fait sourire les plus jeunes. Le soleil arrive sur l'autel au milieu du troisième psaume, et les frères lèvent la tête ensemble, comme pour le saluer.",
      "Le cantique {{echo#iiim_laudes|éclate au moment où le soleil touche l'autel|éclate, et sous ses mots une voix de vieil homme répète, très loin, comme un écho d'il y a longtemps : « Tu apprendras. Tu apprendras »}}.",
      { with: "gildas", text: "Frère Gildas a pris une stalle vide, au bout du rang, et son voisin la lui a laissée d'un signe. Le frère à côté de lui lui a passé son livre ouvert, et Gildas l'a refermé en souriant : il sait les Laudes par cœur depuis trente ans." },
      { if: { has: "iiim:pelerin_vu" }, before: "iiim:pelerin_parti", text: "Le pèlerin est là, au banc des hôtes, les mains jointes. Il remue les lèvres sur les psaumes, et il les sait mal." },
    ],
    choices: [{ back: "IIIM_eglise" }] },

  IIIM_reliquaire: { act: "III", title: "Le trésor de l'église", place: "mont",
    text: [
      "Derrière la grille, dans une chapelle grande comme une armoire, les reliques du Mont : trois châsses de cuivre doré, un bras-reliquaire d'argent, et sur un coussin de velours râpé, le calice de saint Taciturne, le fondateur légendaire, dont l'abbaye garde la fête à la Saint-Gilles.",
      "Le calice {{pie#iiim_calice_faux|est d'or fin, ciselé de vigne, serti de trois grenats|est de cuivre doré, ciselé à la hâte il y a moins d'un an, et ses trois grenats sont des verres teints}}.",
      "Le bras-reliquaire {{pie|est d'argent repoussé, et la petite fenêtre de cristal montre un os|est d'argent repoussé, ancien et vrai ; derrière le cristal, l'os est un os de mouton, mais il l'a toujours été}}.",
      { with: "tibere", text: "Tibère siffle entre ses dents. « Un calice comme ça, à Salvèze, ça paie un an de loyer. Si c'est de l'or. »" },
    ],
    fx: { questSeen: "IIIM_reliquaire" },
    choices: [
      { label: "Chercher qui a remplacé le calice", hide: { any: [{ not: { voile: "iiim_calice_faux" } }, { seen: "IIIM_reliquaire_enquete" }] }, to: "IIIM_reliquaire_enquete" },
      { label: "Remettre le vrai calice sur son coussin", hide: { any: [{ not: { item: "iiim_tr_calice" } }, { quest: "IIIM_reliquaire" }] }, fx: { drop: "iiim_tr_calice", flag: ["iiim:reliquaire", "iiim:calice_rendu"], quest: "IIIM_reliquaire", fac: { moines: 10 }, ep: ["seance", 2000] }, to: "IIIM_calice_rendu" },
      { label: "Garder le vrai calice pour toi", hide: { any: [{ not: { item: "iiim_tr_calice" } }, { quest: "IIIM_reliquaire" }] }, fx: { flag: ["iiim:reliquaire", "iiim:calice_garde", "tresor:iiim_calice"], clock: { tresors: 1 }, quest: "IIIM_reliquaire", ep: ["perso", 1500] }, tag: "Le calice volé", stain: true, back: "IIIM_eglise" },
      { back: "IIIM_eglise" },
    ] },
});

// ==================================================================== the chapter house, the garden, the bell tower
Object.assign(P, {
  IIIM_chapitre: { act: "III", title: "La salle du chapitre", place: "mont", backName: "la salle du chapitre",
    text: [
      "Une salle carrée, voûtée sur quatre colonnes, ouverte sur le cloître par trois arcades. Des bancs de pierre tout autour, et au fond, sur une marche, le siège de l'abbé. C'est ici que les frères s'assemblent chaque matin, que l'on lit un chapitre de la règle, que l'on s'accuse de ses fautes. En signes, comme le reste.",
      "Au mur, une tapisserie usée montre la fondation du Mont : un homme en robe de chancelier qui tend une clé à un moine, et entre eux, une femme couronnée qui tient une main sur sa bouche.",
      "Le banc du fond {{echo#iiim_chapitre_aveu|est poli par trois siècles de frocs|garde une voix d'homme âgé, rauque, qui parle tout haut dans la salle où l'on ne parle pas : « Mes frères, j'ai vendu la grange du bas à la Maison Marrel, et j'ai donné ma parole pour la crypte. Je romps le silence pour vous le dire, et je ne le dirai qu'une fois »}}.",
      { after: "voile:iiim_chapitre_aveu", text: "L'abbé a parlé à voix haute, ici, devant ses frères. Ils savent donc. Et ils se taisent, comme on le leur a appris." },
    ],
    choices: [
      { label: "Demander à paraître devant le chapitre assemblé", hide: { any: [{ seen: "IIIM_chapitre_seance" }, { has: "mont:acces" }] }, to: "IIIM_chapitre_seance" },
      { back: "IIIM_cloitre" },
    ] },

  IIIM_chapitre_seance: { act: "III", title: "Devant le chapitre", place: "mont", takes: "morning",
    text: [
      "On t'a fait attendre sous l'arcade jusqu'au chapitre du matin. Les frères sont assis sur les bancs de pierre, quarante hommes en bure grise, les mains sur les genoux. Dom Évrard est sur son siège, au fond, la crosse en travers des cuisses. Frère Romaric se tient à côté de lui, debout : c'est lui qui parlera pour la maison.",
      "« Le chapitre t'écoute, dit Romaric. Il ne te répondra pas avec la bouche. Dis ce que tu veux. »",
      "Tu demandes le passage vers la crypte, la cache des Taiseurs. Un murmure de mains court sur les bancs. Des poings se lèvent au front, beaucoup ; des mains se posent sur des cœurs, quelques-unes. Dom Évrard ne fait aucun geste.",
      { if: SIGNES3, text: "Tu lis les mains. *Non, non, défendu.* *Paix.* Un frère, au fond, fait le pouce sur la paume et montre l'abbé du menton, et son voisin lui rabat la main. Un autre fait le signe de la porte, puis pose deux doigts sur ses lèvres, longtemps.", else: "Les mains volent trop vite pour toi. Tu reconnais seulement le poing au front, qui revient souvent, et une main qui montre l'abbé." },
      "Romaric se penche vers l'abbé. Puis il se redresse. « Le chapitre dit que la porte des Reflets ne s'ouvre pas pour qui la demande. Il dit aussi que la règle est plus vieille que le chapitre. La règle dit : *qui a passé la nuit dans la salle des voix sans dire un mot a droit au passage.* » Il ajoute, d'une voix plus sèche : « {{oreille#iiim_prosper_epreuve|Personne ne l'a fait depuis trente ans|Le dernier qui l'a fait, il y a trente ans, est debout près de la porte}}. »",
      { with: "gildas", text: "Les têtes, sur les bancs, ne se tournent pas vers Frère Gildas. C'est ce qui les trahit : quarante hommes qui s'appliquent à ne pas regarder le même endroit." },
    ],
    fx: { flag: "iiim:epreuve_offerte", ep: ["perso", 1200] },
    choices: [
      { label: "Accepter l'épreuve du silence", big: true, to: "IIIM_epreuve" },
      { label: "Te retirer et chercher une autre voie", back: "IIIM_cloitre" },
    ] },

  IIIM_jardin: { act: "III", title: "Le jardin des simples", place: "mont", backName: "le jardin des simples",
    text: [
      { first: true, text: "Sous le mur sud, en terrasses, le jardin des simples : sauge, hysope, rue, mélisse, absinthe, chacune dans son carré bordé de buis, avec une plaque de bois qui porte son nom en latin. Plus bas, un verger de pommiers tordus par le vent, et des ruches de paille alignées contre le mur." },
      { again: true, text: "Les carrés de simples, les ruches, le verger tordu." },
      { when: "day", before: "iiim:novice", text: "Un novice sarcle le carré de sauge, à genoux, avec la lenteur de quelqu'un qui n'a nulle part où aller. Un garçon de dix-huit ans, maigre, les poignets trop longs pour ses manches. Quand il te voit, il fait un signe de paix si maladroit qu'il ressemble à un salut militaire." },
      { when: "night", text: "La nuit, les ruches bourdonnent encore, très bas. Au fond du verger, contre le mur, une échelle de cueillette est couchée dans l'herbe, comme oubliée là." },
      { after: "iiim:novice_parti", text: "Le carré de sauge est sarclé par un autre novice, plus petit, plus jeune, qui fait les signes à la perfection." },
      { after: "iiim:novice_reste", text: "Florent sarcle le carré de sauge. Quand il te voit, il fait deux doigts sur les lèvres, et retourne à la terre." },
      "Le mur du verger {{pie|est haut de deux toises, sans une prise|est haut de deux toises, mais à l'angle des ruches trois pierres ont été descellées et remises en place à la main, pour faire des marches}}.",
    ],
    choices: [
      { label: "Parler au novice", hide: { any: [{ seen: "IIIM_novice" }, { has: "iiim:novice_parti" }, { quest: "IIIM_novice" }] }, to: "IIIM_novice" },
      { label: "Retrouver Florent au jardin", hide: { any: [{ not: { seen: "IIIM_novice" } }, { quest: "IIIM_novice" }] }, to: "IIIM_novice_aide" },
      { back: "IIIM_porte" },
    ] },

  IIIM_clocher: { act: "III", title: "Le clocher", place: "mont",
    text: [
      "Cent douze marches de bois dans une tour carrée, et en haut, sous un toit de lauze, deux cloches pendues à un joug de chêne. Le vent passe à travers les baies. D'ici on voit tout : l'abbaye en dessous, ses toits en gradins, ses cours, et plus bas les vignes en terrasses, la grange, les Combes qui s'ouvrent comme une main jusqu'à Orle, et, très loin au sud, une brume plate qui est peut-être la mer.",
      "Sur la route d'Orle, trois cavaliers montent au pas. Ils s'arrêtent à la grange du bas, et un homme en sort à leur rencontre.",
      "La poutre du joug {{pie#iiim_poutre|est noire de suif et de vieilles toiles d'araignée|est creusée par-dessous d'une encoche où l'on a glissé une bourse de cuir durci, collée au suif, qu'on ne voit que couché sur le plancher}}.",
      "La grosse cloche porte une inscription en relief : *{{loupe|VOX MEA VOX TACENTIVM|VOX MEA VOX TACENTIVM · FVSA ANNO XL POST NOCTEM COMPTORIORVM}}*.",
    ],
    choices: [
      { label: "Te glisser sous le joug pour prendre la bourse", hide: { any: [{ not: { voile: "iiim_poutre" } }, { has: "tresor:iiim_bourse" }] }, fx: { item: "iiim_tr_bourse", clock: { tresors: 1 }, flag: "tresor:iiim_bourse", ep: ["perso", 1000] }, to: "IIIM_bourse" },
      { back: "IIIM_porte" },
    ] },

  IIIM_bourse: { act: "III", title: "La bourse du sonneur", place: "mont",
    text: [
      "Couché sur le dos sous le joug, les cloches au-dessus du nez, tu décolles la bourse avec la pointe de ta lame. Le suif cède. Elle est lourde. Dedans, quarante pièces d'argent de l'ancienne frappe, à l'effigie d'une femme couronnée, et un bout de parchemin : *Pour qui sonnera après moi, quand on lui aura dit de se taire.*",
      "Les pièces de la reine Ysaure ne courent plus depuis trois siècles. Un changeur de Salvèze les paierait au poids, et un collectionneur trois fois le poids.",
    ],
    choices: [{ back: "IIIM_clocher" }] },
});

// ==================================================================== the library: Frère Romaric, the book of signs, the annals
Object.assign(P, {
  IIIM_biblio: { act: "III", title: "La bibliothèque", place: "mont", backName: "la bibliothèque",
    text: [
      { first: true, text: "La bibliothèque occupe l'étage au-dessus de la salle du chapitre : une longue pièce sous charpente, éclairée par des lucarnes, où les livres sont couchés à plat sur des pupitres et enchaînés. Il y en a peut-être six cents. Au bout, derrière une grille de bois, un cabinet plus sombre ; à côté, le scriptorium, où quatre frères copient en silence, la langue entre les dents." },
      { first: true, text: "Frère Romaric t'accueille debout, une main sur la grille. Il a des lunettes de corne pincées sur le nez et une voix qui a servi : elle s'éraille au bout des phrases. « Un hôte qui monte à la bibliothèque, dit-il. Ça arrive une fois l'an. D'habitude, ils montent au cellier. »" },
      { again: true, text: "Les pupitres, les chaînes, l'odeur de colle de peau et de poussière. Frère Romaric lève la tête de son registre." },
      "Les livres enchaînés {{pie|sont des psautiers et des vies de saints, comme dans toutes les abbayes|sont des psautiers et des vies de saints, sauf trois, dont les reliures de veau couvrent des ais de bois creusés}}.",
      { with: "gildas", text: "Frère Romaric voit Frère Gildas, et pour une fois il ne parle pas : il fait le signe des trois doigts, très vite, et ses lunettes glissent. Gildas les lui remet sur le nez d'un doigt, comme on fait à un vieux maître." },
    ],
    choices: [
      { label: "Parler avec Frère Romaric", to: "IIIM_prosper" },
      { label: "Le livre des signes", to: "IIIM_livre_signes" },
      { label: "Les annales de l'abbaye", to: "IIIM_annales" },
      { label: "Le scriptorium", to: "IIIM_scriptorium" },
      { label: "Le cartulaire, les actes des terres de l'abbaye", hide: { any: [{ not: { any: [{ has: "iiim:terres_vues" }, { voile: "iiim_cloitre_nuit" }, { voile: "iiim_vepres" }] } }, { has: "iiim:prosper_sait" }] }, to: "IIIM_cartulaire" },
      { label: "Le cabinet grillé, au fond", hide: { has: "iiim:prosper_sait" }, to: "IIIM_enfer" },
      { label: "Monter de nuit au cabinet grillé, fermé à clé désormais", hide: { any: [{ not: { has: "iiim:prosper_sait" } }, { seen: "IIIM_biblio_nuit" }] }, to: "IIIM_biblio_nuit" },
      { back: "IIIM_porte" },
    ] },

  IIIM_prosper: { act: "III", title: "Frère Romaric", place: "mont", backName: "la table de Frère Romaric",
    text: [
      { first: true, text: "Frère Romaric te fait asseoir sur un tabouret, à côté de sa table couverte de feuillets. Il parle vite, comme un homme qui a gardé ses mots toute la journée et les dépense le soir. « J'ai la dispense de parole depuis quarante ans, dit-il. L'abbé me l'a donnée parce qu'il fallait quelqu'un pour lire au réfectoire, pour répondre aux évêques et pour marchander les peaux de veau. Les frères me plaignent. Ils ont tort. »" },
      { again: true, text: "Frère Romaric pose sa plume. « Encore toi. Assieds-toi. Ne touche pas aux chaînes. »" },
      "« Le Mont {{oreille#iiim_prosper_mont|se porte bien, Dieu merci, et les vignes ont donné|doit à la Banque Marrel plus que ses vignes ne rapporteront en vingt ans, et l'abbé signe tout ce qu'on lui tend}}, dit-il. Tu es venu pour la cache, n'est-ce pas ? Tout le monde vient pour la cache, depuis un mois. Le pèlerin aussi. »",
      "« Ce que je pense du pèlerin ? » Il ôte ses lunettes. « {{oreille#iiim_prosper_pelerin|C'est un homme pieux, il paie son écot|C'est un homme de la Banque, il a payé le cellérier, et je l'ai vu mesurer le cloître au pas pendant les Vigiles}}. »",
      { if: { has: "taiseurs:serment" }, text: "Il te regarde par-dessus ses lunettes, longtemps. « Tu as la manière de quelqu'un qui a juré, dit-il. On la reconnaît à la façon de se taire avant de répondre. Bon. Avec toi, je parlerai moins. »" },
    ],
    choices: [
      { label: "Lui demander pourquoi l'abbé doit tant à la Banque", hide: { seen: "IIIM_prosper_dette" }, to: "IIIM_prosper_dette" },
      { label: "Lui dire ce que tu as entendu sous le psaume des Vêpres", hide: { any: [{ not: { voile: "iiim_vepres" } }, { seen: "IIIM_prosper_chant" }] }, to: "IIIM_prosper_chant" },
      { label: "Lui demander ce qu'est la salle des voix", hide: { seen: "IIIM_prosper_voix" }, to: "IIIM_prosper_voix" },
      { back: "IIIM_biblio" },
    ] },

  IIIM_prosper_dette: { act: "III", title: "La dette de l'abbé", place: "mont",
    text: [
      "Romaric soupire, et pour la première fois il baisse la voix. « Il y a quatre ans, la grêle a couché toutes les vignes des Combes, et l'hiver d'après, le toit de l'église est tombé dans la nef. Dom Évrard a emprunté à la Maison Marrel. Six mille ducats. Il n'a jamais su compter, il sait tailler la vigne. »",
      "« Il a remboursé ce qu'il a pu. Puis la Banque a proposé de prendre des terres à la place de l'argent : la grange du bas, et les vignes autour. Il a signé. C'était, dit-il, {{oreille#iiim_prosper_terres|le moindre mal pour la maison|la grange et autre chose sous la grange, et il ne m'a pas laissé lire l'acte}}. »",
      "« Depuis, Madame Marrel tient l'abbé par sa quittance. Le reste de la dette, trois mille ducats. Tant qu'elle ne l'a pas réclamée, il est à elle. » Romaric remet ses lunettes. « Je n'aurais pas dû te dire tout ça. Mais j'ai la dispense, et il faut bien qu'elle serve. »",
    ],
    fx: { flag: "iiim:dette_sue", ep: ["perso", 900] },
    choices: [{ back: "IIIM_prosper" }] },

  IIIM_prosper_chant: { act: "III", title: "Ce que chantent les frères", place: "mont",
    text: [
      "Tu répètes à Romaric ce que le chœur disait sous le latin. Il écoute, et son visage se défait doucement, comme un homme qui entend son secret dans la bouche d'un étranger.",
      "« Tu as l'instrument, dit-il enfin. Le diapason. On en parlait comme d'une histoire, ici. » Il ferme la porte du scriptorium. « Oui, les frères chantent dessous. Ils l'ont toujours fait. C'est la seule façon de dire quelque chose à toute la maison sans rompre la règle. L'abbé le sait. Il fait semblant d'entendre du latin. »",
      "« Depuis un mois, ils chantent contre lui. Ça ne s'était jamais vu. » Il te regarde. « Si tu veux la cache, c'est eux qu'il te faut convaincre, plus que l'abbé. Ou alors tu passes la nuit dans la salle des voix. »",
    ],
    fx: { flag: "iiim:chant_compris", fac: { moines: 3 }, ep: ["perso", 1200] },
    choices: [{ back: "IIIM_prosper" }] },

  IIIM_prosper_voix: { act: "III", title: "La salle des voix", place: "mont",
    text: [
      "« Une crypte sous l'église, la plus vieille pierre du Mont, dit Romaric. C'est là qu'on forme les novices. On les y fait descendre seuls, la nuit, et on leur apprend à se taire en dedans. »",
      "« Se taire avec la bouche, tout le monde y arrive, avec un peu de pain sec. En dedans, c'est autre chose. Ne plus laisser trembler ce qu'on pense sous ce qu'on dit. Les frères qui y arrivent, on ne les entend plus mentir, même quand ils le voudraient. Ils ne mentent plus, d'ailleurs. Ils se taisent. »",
      "« La salle rend les voix, à ce qu'on raconte. Tout ce qu'on y a dit depuis trois siècles. » Il hausse les épaules. « Moi, j'y suis descendu une fois, à vingt ans. J'en suis remonté avec la dispense de parole. On en a conclu que je n'étais pas fait pour le silence. »",
    ],
    
    choices: [{ back: "IIIM_prosper" }] },

  IIIM_livre_signes: { act: "III", title: "Le livre des signes", place: "mont",
    text: [
      "Un gros volume relié de bois, enchaîné à son pupitre, dont chaque page montre une main dessinée à la plume, dans une position, avec en dessous le mot latin et le mot des Combes. *Panis. Le pain* : la main en coupe. *Pax. La paix* : la main à plat sur le cœur. Il y a trois cent douze mains, une par page, et des ajouts dans les marges, de cinquante écritures différentes.",
      "Tu feuillettes. *Mors. La mort* : la paume qui glisse sur le visage. *Debitum. La dette* : le pouce sur la paume. *Extraneus. L'étranger* : l'index vers la vallée. *Ostium. La porte* : les mains jointes qui s'ouvrent. *Non* : le poing au front.",
      "À la dernière page, une main ouverte devant les yeux, paumes en dehors, et une légende : *{{loupe#iiim_signe_reflets|Videre. Voir.|Speculum. Le signe de la salle des Reflets : qui le fait sur le seuil de la salle des voix, le frère de garde lui ouvre.}}*",
      "Une page a été grattée au couteau, entre *Custos* et *Lingua*. {{loupe#iiim_page_grattee|Il n'en reste qu'un parchemin plus mince, presque transparent|Sous le grattage, une main dont trois doigts touchent la gorge, et une liste de noms, du plus ancien au plus récent ; le dernier, d'une encre de trente ans, est réduit à une initiale : G.}}.",
    ],
    fx: { flag: SG, ep: ["perso", 1000], note: "Tu connais les signes du Mont : paix, non, ouvrir, dette, étranger, mort." },
    choices: [{ back: "IIIM_biblio" }] },

  IIIM_annales: { act: "III", title: "Les annales du Mont", place: "mont",
    text: [
      "Les annales tiennent en quatre registres, du plus ancien, relié de bois et de cuir noir, au plus récent, où Frère Romaric écrit encore chaque année l'état des vignes, les morts, les hôtes illustres. Tu ouvres le premier. L'écriture est une ronde serrée, très ancienne, à l'encre devenue brune.",
      "*An premier après la nuit des Comptoirs. Aymeric Vasse, qui fut chancelier de la reine, monte au Mont avec douze secrétaires de la chancellerie. Ils prennent l'habit des mains du vieil ermite qui gardait la source, et ils font vœu de taire ce qu'ils savent, et de le garder jusqu'à ce qu'on le leur redemande.*",
      "*An quatrième. On creuse sous l'église une salle pour les voix. On y apprend aux jeunes frères à se taire en dedans, à la manière de la chancellerie. {{loupe#iiim_annales_registre|La reine a béni la salle avant de mourir|La reine a dicté ici, par signes, le témoignage que sa langue ne pouvait plus porter. Le frère qui tenait la plume l'a mis en écriture dans la langue des mains, si bien que seul un frère du Mont, ou un Taiseur, saura le lire.}}*",
      "*An quarantième. La mer a pris Sorne. On a fondu au Mont la grosse cloche.*",
      { with: "gildas", text: "Frère Gildas lit par-dessus ton épaule. Il ne dit rien. Au mot *Taiseur*, il pose la main sur la page, à plat, comme pour la tenir ouverte au vent." },
    ],
    fx: { clue: "iiim_c_fondation", ep: ["perso", 1500] },
    choices: [{ back: "IIIM_biblio" }] },

  IIIM_scriptorium: { act: "III", title: "Le scriptorium", place: "mont",
    text: [
      "Quatre pupitres inclinés sous les lucarnes, quatre frères qui copient. On entend le grattement des plumes, le canif qui taille, une mouche. Au cinquième pupitre, contre le mur, personne : la plume est sèche dans l'encrier, et un psautier à moitié copié attend, ouvert à la même page depuis des mois.",
      "Le pupitre vide {{echo#iiim_pupitre|est couvert d'une fine poussière que personne n'essuie|rend la voix d'un vieil homme, patiente et sévère : « Encore. Tu as écrit ce que tu pensais au lieu d'écrire ce qui est écrit. Encore, Gildas. Jusqu'à ce que ta main se taise »}}.",
      { with: "gildas", text: "Frère Gildas s'approche du cinquième pupitre. Il souffle sur la poussière, prend la plume sèche, la trempe, et trace sur une chute de parchemin une ligne d'onciale si régulière qu'on la dirait imprimée. Puis il la donne au frère le plus proche, qui la garde.", else: "Un des copistes lève les yeux vers toi, puis vers le pupitre vide, et fait le signe des trois doigts sur la gorge, comme on se signe en passant devant une tombe." },
      "Sur le psautier inachevé, une enluminure : {{pie|une lettrine bleue et rouge, sans or|une lettrine bleue et rouge, et dans la panse du D, sous la peinture, une feuille d'or fin qu'on a recouverte exprès, pour qu'on ne la gratte pas}}.",
    ],
    choices: [{ back: "IIIM_biblio" }] },

  IIIM_cartulaire: { act: "III", title: "Le cartulaire", place: "mont",
    text: [
      "Le cartulaire est un registre épais où l'on recopie les actes de l'abbaye : donations, ventes, baux, depuis trois siècles. Le dernier acte est récent, d'une main de clerc de Salvèze, et il est cousu dedans, l'original même, avec le sceau de cire noire de la Maison Marrel et celui, rouge, du Mont.",
      "*Le Mont-Taciturne cède à la Maison Marrel, en paiement de trois mille ducats sur sa dette, la grange du bas, ses vignes, ses pressoirs, et les terres jusqu'à la borne du Saule, {{loupe#iiim_acte_clause|avec leurs dépendances|avec la crypte creusée sous la salle des voix et tout ce qu'elle renferme, à remettre au porteur de la quittance quand il la présentera}}. Signé, Évrard, abbé. Pour la Maison, C. Marrel.*",
      { if: { has: "iiim:dette_sue" }, text: "Trois mille ducats sur six mille. Romaric l'avait dit. Il n'avait pas lu l'acte." },
    ],
    fx: { flag: "iiim:acte_lu", questSeen: "IIIM_terres" },
    choices: [
      { label: "Découdre l'acte du cartulaire et le garder", once: true, fx: { item: "iiim_acte", fac: { moines: -3 } }, tag: "Le cartulaire mutilé", stain: true, back: "IIIM_biblio" },
      { label: "Demander à Frère Romaric une copie de l'acte", hide: { has: "iiim:copie_acte" }, test: { dom: "social", diff: -10, label: "Convaincre le bibliothécaire de copier l'acte", help: [{ with: "gildas", v: 15 }, { if: { has: "iiim:chant_compris" }, v: 10 }] },
        win: { fx: { item: "iiim_acte", flag: "iiim:copie_acte", fac: { moines: 2 } }, to: "IIIM_cartulaire_copie" }, lose: { fx: { flag: "iiim:prosper_sait", note: "« Copier un acte de l'abbé sans son ordre ? J'ai la dispense de parole, pas celle de trahir. » Romaric range le cartulaire dans le cabinet grillé, et ferme la grille à clé." }, back: "IIIM_biblio" } },
      { back: "IIIM_biblio" },
    ] },

  IIIM_cartulaire_copie: { act: "III", title: "La copie", place: "mont",
    text: [
      "Romaric lit l'acte une fois, en remuant les lèvres. Au mot *crypte*, il s'arrête, et il relit. Puis il prend une plume et copie l'acte entier, mot pour mot, d'une main qui tremble un peu. En bas, il ajoute : *Copie conforme, Romaric, bibliothécaire, qui ne savait pas.*",
      "« Fais-en ce que tu dois, dit-il en soufflant sur l'encre. Le chapitre a le droit de savoir ce qu'on a vendu sous ses pieds. »",
    ],
    choices: [{ back: "IIIM_biblio" }] },

  IIIM_enfer: { act: "III", title: "Le cabinet grillé", place: "mont",
    text: [
      "Derrière la grille de bois, les livres qu'on ne prête pas : des traités de médecine arabe, un bestiaire aux images crues, deux volumes d'hérésies réfutées, et sur une étagère à part, des registres sans titre dont le dos porte seulement un chiffre.",
      { if: { has: "iiim:prosper_sait" }, text: "Le cartulaire est rangé là, désormais." },
      "Un petit livre d'heures, coincé entre deux registres, {{pie#iiim_heures|a une reliure de cuir pauvre, mangée aux coins|a une reliure de cuir pauvre posée par-dessus une autre, de velours pourpre brodé d'argent, aux armes d'une reine}}.",
    ],
    choices: [
      { label: "Ouvrir le petit livre d'heures", hide: { any: [{ not: { voile: "iiim_heures" } }, { seen: "IIIM_psautier" }] }, to: "IIIM_psautier" },
      { back: "IIIM_biblio" },
    ] },

  IIIM_psautier: { act: "III", title: "Les heures de la reine", place: "mont",
    text: [
      "Sous la reliure pauvre, le velours pourpre est intact. Les pages sont minuscules, peintes de bleu et d'or, et dans les marges, partout, une petite main dessinée fait des signes : *paix*, *porte*, *mort*, et d'autres que tu ne connais pas. Au premier feuillet, d'une écriture de jeune femme : *Ysaure, son livre.*",
      "Un livre d'heures de la reine, que quelqu'un a caché ici sous un cuir de pauvre, peut-être Aymeric Vasse lui-même.",
      { if: { fac: "moines", min: 10 }, text: "Frère Romaric, qui t'a suivi{e}, regarde le livre dans tes mains. « Je ne savais pas qu'il était là, dit-il. Je le sais maintenant, et j'aimerais mieux pas. Prends-le. Ici, il finira vendu avec le reste. »", else: "La bibliothèque est vide autour de toi. Tu es seul{e}, à présent, à savoir qu'il est là." },
    ],
    choices: [
      { label: "Prendre le livre d'heures", fx: { item: "iiim_tr_heures", clock: { tresors: 1 }, flag: "tresor:iiim_heures", ep: ["perso", 1500] }, back: "IIIM_biblio" },
      { label: "Le laisser à sa place, sous son cuir de pauvre", fx: { fac: { moines: 3 } }, back: "IIIM_biblio" },
    ] },

  IIIM_biblio_nuit: { act: "III", title: "La bibliothèque, la nuit", place: "mont", takes: "night",
    text: [
      "Tu montes l'escalier du chapitre après Complies, quand le grand silence est tombé. La porte de la bibliothèque n'a qu'un loquet. Dedans, la lune passe par les lucarnes et pose des carrés blancs sur les pupitres ; les chaînes des livres brillent comme du givre.",
      "Le cabinet grillé a une serrure, une vraie, de fer, neuve.",
    ],
    choices: [
      { label: "Crocheter la grille", test: { dom: "discretion", diff: -10, label: "Ouvrir la serrure neuve sans bruit", help: [{ if: { item: "crochets" }, v: 15 }, { with: "fauvette", v: 15 }, { with: "lison", v: 5 }] },
        win: { to: "IIIM_biblio_nuit_dedans" }, lose: { to: "IIIM_biblio_pris" } },
      { label: "Redescendre sans rien toucher", back: "IIIM_biblio" },
    ] },

  IIIM_biblio_nuit_dedans: { act: "III", title: "Le cabinet, la nuit", place: "mont",
    text: [
      "La serrure cède avec un claquement que tu entends jusque dans tes dents. La maison dort. Tu ouvres la grille. À la lune, les registres sans titre, le bestiaire, le cartulaire rangé là. Tu peux tout lire, tout prendre, pendant que l'abbaye dort.",
    ],
    choices: [
      { label: "Lire le cartulaire", to: "IIIM_cartulaire" },
      { label: "Le petit livre d'heures, entre deux registres", hide: { seen: "IIIM_psautier" }, to: "IIIM_enfer" },
      { back: "IIIM_biblio" },
    ] },

  IIIM_biblio_pris: { act: "III", title: "Le frère de veille", place: "mont",
    text: [
      "Le crochet glisse, la serrure claque, et une lanterne s'allume au bout de la pièce. Un jeune frère, en chemise, une lanterne à la main, te regarde à genoux devant la grille. Il fait le poing au front. Puis, sans un bruit, il tire le cordon d'une petite cloche, et tu entends, dans tout le dortoir, des pieds nus qui touchent le sol.",
      "Au matin, l'abbé te fait dire par Romaric que l'hospitalité de la règle est suspendue pour toi jusqu'au chapitre. Tu peux rester. On ne t'ouvrira plus aucune porte qu'on puisse fermer.",
    ],
    fx: { fac: { moines: -10 } },
    choices: [{ back: "IIIM_porte" }] },
});

// ==================================================================== the infirmary: Frère Ursmer, Frère Ignace
Object.assign(P, {
  IIIM_infirmerie: { act: "III", title: "L'infirmerie", place: "mont", backName: "l'infirmerie",
    text: [
      { first: true, text: "L'infirmerie est un bâtiment à part, au bout du jardin, avec sa propre cuisine et sa propre chapelle, pour que les malades entendent la messe de leur lit. Six lits à rideaux, dont deux occupés. Une odeur de sauge brûlée, de vinaigre et d'eau-de-vie. Frère Ursmer, l'infirmier, un homme de quarante ans aux avant-bras de boulanger, écrit sur une ardoise ce qu'il ne peut pas dire." },
      { again: true, text: "La sauge, le vinaigre, les rideaux tirés. Frère Ursmer essuie son ardoise du plat de la main." },
      "Les pots de l'apothicairerie sont alignés sur une étagère, chacun avec son nom peint. Le pot de sirop de pavot {{pie#iiim_pavot|est plein jusqu'au col|est plein jusqu'au col d'une eau teintée de mélasse : on en a pris le sirop et remis de quoi tromper l'œil}}.",
      { if: { pv: { max: 20 } }, text: "Frère Ursmer regarde ta démarche, puis te montre un lit du doigt, sans discuter." },
    ],
    choices: [
      { label: "Te faire soigner par Frère Ursmer (une offrande de 2 ducats)", fx: { gold: -40, pv: "max", fac: { moines: 2 } }, to: "IIIM_soins" },
      { label: "Le vieux frère au fond, derrière le dernier rideau", to: "IIIM_ignace" },
      { label: "Montrer le pot de pavot à Frère Ursmer", hide: { any: [{ not: { voile: "iiim_pavot" } }, { seen: "IIIM_pavot" }] }, to: "IIIM_pavot" },
      { back: "IIIM_porte" },
    ] },

  IIIM_soins: { act: "III", title: "Les soins de Frère Ursmer", place: "mont",
    text: [
      "Frère Ursmer lave tes plaies au vin chaud, les bourre de charpie et de miel, et serre les bandes d'une main sûre. Il te fait boire une infusion amère qui sent la terre. Puis il écrit sur son ardoise, en lettres capitales : *DORS*. Tu dors une heure, et tu te réveilles plus solide que tu ne l'as été depuis Orle.",
      { with: "gildas", text: "Frère Gildas aide l'infirmier sans qu'on le lui demande. Ils travaillent ensemble comme deux hommes qui l'ont fait mille fois, et se passent les bandes sans un signe." },
    ],
    choices: [{ back: "IIIM_infirmerie" }] },

  IIIM_pavot: { act: "III", title: "Le sirop de pavot", place: "mont",
    text: [
      "Tu poses le pot devant Frère Ursmer et tu en verses une goutte sur ta paume. Il la goûte. Son visage se ferme. Il essuie son ardoise et écrit, vite : *QUI ?* Puis, avant que tu répondes, il écrit dessous : *LE PÈLERIN EST VENU MARDI. MAL DE DENTS.*",
      "Il réfléchit, la craie en l'air. Il écrit encore : *ASSEZ POUR ENDORMIR UN HOMME UNE NUIT. OU DEUX HOMMES.* Puis il dessine, d'un trait, une porte, et il la barre.",
      "La porte qu'on garde la nuit, à l'abbaye, c'est celle de la salle des voix.",
    ],
    fx: { flag: "iiim:pavot_su", ep: ["perso", 900] },
    choices: [{ back: "IIIM_infirmerie" }] },

  IIIM_ignace: { act: "III", title: "Frère Ignace", place: "mont", backName: "le lit de Frère Ignace",
    text: [
      { first: true, text: "Derrière le dernier rideau, un vieillard si maigre qu'il ne creuse pas le matelas. Ses yeux sont ouverts, voilés de blanc. Ses mains, posées sur le drap, bougent toutes seules : elles font des signes, lentement, sans arrêt, des phrases entières adressées au plafond. Frère Ursmer écrit sur l'ardoise : *IGNACE. MAÎTRE DES NOVICES. QUATRE-VINGT-DIX ANS. IL PARLE LA NUIT.*" },
      { again: true, text: "Frère Ignace, derrière son rideau. Ses mains parlent toujours." },
      { with: "gildas", text: "Quand Frère Gildas s'approche du lit, les mains du vieillard s'arrêtent. Il tourne la tête. « Petit, dit-il, d'une voix de feuille sèche. Tu es revenu. {{oreille#iiim_ignace_gildas|Tu as bien travaillé, je l'entends|Tu portes quelque chose de lourd, je l'entends à ton pas, et tu le portes bien, comme je t'ai appris}}. » Gildas s'agenouille et pose le front sur la main du vieil homme. Il reste ainsi longtemps. Il ne dit rien." },
      { without: "gildas", text: "Quand tu t'approches, les mains du vieillard s'arrêtent. Il tourne la tête vers ta voix, avant même que tu aies parlé. « Un étranger, dit-il. {{oreille#iiim_ignace_etranger|Bienvenue, mon enfant|Un étranger qui a les mains de la vallée et la voix de chez nous : une Vasse t'a porté}}. »" },
      "« Le pèlerin est venu aussi, dit Ignace. Il m'a demandé où était la porte. {{oreille#iiim_ignace_porte|Je lui ai dit que je ne savais plus|Je lui ai dit sous la salle des voix, parce que j'ai peur de mourir et qu'il m'a promis une messe à Salvèze}}. »",
    ],
    choices: [
      { label: "Lui demander comment on se tait en dedans", hide: { seen: "IIIM_ignace_lecon" }, to: "IIIM_ignace_lecon" },
      { back: "IIIM_infirmerie" },
    ] },

  IIIM_ignace_lecon: { act: "III", title: "La leçon de Frère Ignace", place: "mont",
    text: [
      "Le vieillard sourit, de toutes ses rides. « On ne l'apprend pas en une fois, dit-il. On l'apprend en trente ans. Mais je vais te dire le commencement. »",
      "« Quand on te parle, tu as deux réponses dans la gorge : celle que tu dis et celle que tu penses. Les gens ordinaires choisissent. Nous, on ne choisit pas. On attend que les deux se taisent ensemble. Ce qui reste, après, c'est ce qui est vrai. Et souvent, ce qui reste, c'est rien. Alors on ne dit rien. »",
      "« La nuit, dans la salle, les murs te parlent. Ils te disent ce qu'on y a dit. Laisse-les. Ils parlent à d'autres. » Ses mains recommencent à bouger sur le drap. Il s'est endormi.",
    ],
    fx: { flag: "iiim:lecon_ignace", ep: ["perso", 800] },
    choices: [{ back: "IIIM_infirmerie" }] },
});

// ==================================================================== the hall of voices (the crypt)
Object.assign(P, {
  IIIM_voix_descente: { act: "III", title: "L'escalier de la crypte", place: "mont", backName: "l'escalier de la crypte",
    text: [
      "Derrière le chœur, une porte basse, puis un escalier de pierre qui tourne dans le roc. En haut des marches, sur un escabeau, le frère de garde : la nuit, c'est un novice, le jour un vieux frère qui égrène un chapelet. Il garde la descente, et il la garde contre tout le monde, sauf les novices qu'on y envoie.",
      { if: { has: "iiim:pavot_su" }, before: "iiim:pelerin_parti", when: "night", text: "Cette nuit, le novice de garde dort assis, la tête contre le mur, la bouche ouverte. Sur l'escabeau, à côté de lui, un gobelet vide qui sent la mélasse." },
    ],
    choices: [
      { label: "Descendre avec la permission du chapitre, pour l'épreuve", hide: { not: { has: "iiim:epreuve_offerte" } }, to: "IIIM_epreuve" },
      { label: "Faire au frère de garde le signe des Reflets", hide: { not: { voile: "iiim_signe_reflets" } }, fx: { fac: { moines: 2 } }, to: "IIIM_voix" },
      { label: "Laisse-moi faire", who: "gildas", fx: { conf: { gildas: 3 } }, to: "IIIM_voix_gildas" },
      { label: "Parler en signes au frère de garde : paix, ouvrir", if: SIGNES3, why: "Il faudrait savoir trois signes au moins.", test: { dom: "social", diff: -10, label: "Convaincre le gardien sans un mot", help: [{ if: { has: "iiim:portier_allie" }, v: 15 }] },
        win: { to: "IIIM_voix" }, lose: { fx: { fac: { moines: -2 } }, back: "IIIM_eglise" } },
      { label: "Te glisser derrière lui quand il somnole", test: { dom: "discretion", diff: -20, label: "Passer derrière le gardien", help: [{ when: "night", v: 10 }, { with: "lison", v: 10 }] },
        win: { to: "IIIM_voix" }, lose: { fx: { fac: { moines: -5 } }, to: "IIIM_voix_chasse" } },
      { back: "IIIM_eglise" },
    ] },

  IIIM_voix_chasse: { act: "III", title: "Le gardien de la descente", place: "mont",
    text: [
      "Le frère de garde ouvre les yeux au moment où ton pied touche la première marche. Il se lève, et il te barre l'escalier de tout son corps, les bras écartés, sans un son. Il tremble. Il ne bougera pas.",
      "Tu remontes. Dans la nef, deux frères attendent, alertés par on ne sait quoi, et te raccompagnent jusqu'à la porte de l'église, poliment, chacun une main sous ton coude.",
    ],
    choices: [{ back: "IIIM_eglise" }] },

  IIIM_voix_gildas: { act: "III", title: "Le Gardien descend", place: "mont", with: "gildas",
    text: [
      "Frère Gildas monte vers le gardien. Il ne fait aucun signe. Il se tient devant lui, simplement, et le gardien se lève, s'efface contre le mur, et baisse les yeux jusqu'à ce que vous soyez passés.",
      "Dans l'escalier, Gildas dit, sans se retourner : « Ici, on m'a appris tout ce que je sais. Fais attention à ce que tu entendras. Les murs ne choisissent pas. »",
    ],
    choices: [{ label: "Descendre dans la salle des voix", to: "IIIM_voix" }] },

  IIIM_voix: { act: "III", title: "La salle des voix", place: "mont", backName: "la salle des voix",
    text: [
      { first: true, text: "La salle est ronde, taillée dans le roc, avec une voûte basse en cul-de-four et, tout autour, un banc de pierre où trente hommes tiendraient assis. Au centre, une dalle carrée, usée en creux. Pas de fenêtre ; une lampe à huile dans une niche. Le moindre souffle fait le tour de la salle et te revient dans le dos, un peu plus tard, un peu changé." },
      { again: true, text: "La salle ronde, la lampe dans sa niche, ton souffle qui fait le tour des murs et te revient." },
      "Au fond, en face de l'escalier, une porte de chêne cloutée de bronze, sans poignée. Au-dessus, gravée dans le roc, une main ouverte devant des yeux.",
      "Le banc du nord {{echo#iiim_voix_ignace|est creusé à deux places, par des siècles de novices assis côte à côte|rend deux voix, il y a trente ans : un jeune homme qui pleure, et un homme mûr qui parle bas, très lentement : « Tu apprendras à dire vrai en taisant tout. »}}.",
      "La dalle du centre {{echo#iiim_voix_gildas_jeune|est froide, et la lampe y met une tache jaune|rend une voix jeune, rauque, la même qui pleurait : « Je jure de garder la porte, et de garder le silence de ceux qui gardent. Et si quelqu'un vend ce silence, je le garderai contre lui »}}.",
      "La voûte {{echo#iiim_voix_pelerin|renvoie le bruit de tes pas, longtemps après ton dernier pas|renvoie une voix d'homme, de la semaine dernière, qui compte à mi-voix : « Huit pas jusqu'à la porte. Serrure de bronze. Le porteur de la quittance entrera par ici »}}.",
      { with: "gildas", text: "Frère Gildas s'est assis sur le banc du nord, à la place de gauche. Il a fermé les yeux. Ses lèvres ne bougent pas." },
    ],
    choices: [
      { label: "Rester, et écouter les novices qu'on y forme", hide: { seen: "IIIM_voix_lecon" }, to: "IIIM_voix_lecon" },
      { label: "Approcher de la porte cloutée", to: "IIIM_voix_porte" },
      { label: "Demander à Gildas ce qu'il entend", who: "gildas", hide: { any: [{ not: { voile: "iiim_voix_ignace" } }, { seen: "IIIM_voix_gildas_parle" }] }, to: "IIIM_voix_gildas_parle" },
      { back: "IIIM_eglise" },
    ] },

  IIIM_voix_lecon: { act: "III", title: "La leçon des novices", place: "mont",
    text: [
      "Un vieux frère fait descendre trois novices. Ils s'assoient sur le banc, et le vieux frère se met au centre, sur la dalle. Il leur parle. C'est le seul endroit de l'abbaye, avec la chaire du réfectoire, où l'on parle : il faut qu'on parle pour qu'on apprenne à ne pas répondre.",
      "« Ta mère est malade, dit-il au premier. Elle te réclame. » Le garçon ouvre la bouche. Le vieux frère lève un doigt. Le garçon referme la bouche, et ses yeux se remplissent. « Bien, dit le vieux frère. Maintenant, laisse les deux se taire ensemble. » Le garçon respire. Long temps. Son visage se vide, peu à peu, comme une bassine qu'on renverse.",
      "« Ce n'était pas vrai, pour ta mère, dit le vieux frère. Mais tu ne le savais pas. C'est la leçon. »",
      { if: { has: "iiim:lecon_ignace" }, text: "C'est la leçon d'Ignace, mot pour mot. Le vieux frère a dû l'apprendre de lui, comme Gildas." },
    ],
    fx: { ep: ["perso", 600] },
    choices: [{ back: "IIIM_voix" }] },

  IIIM_voix_gildas_parle: { act: "III", title: "Ce que Gildas entend", place: "mont", with: "gildas",
    text: [
      "Gildas ouvre les yeux. Il sait que tu as entendu, tu le vois à la façon dont il regarde le diapason.",
      "« J'avais vingt-cinq ans, dit-il. J'étais venu au Mont parce que j'avais trop de colère, et que mon père m'avait dit qu'ici on la reprendrait. Frère Ignace m'a fait asseoir là, sur ce banc, pendant deux ans, chaque nuit. »",
      "« Il disait : dire vrai en taisant tout. Je croyais qu'il parlait de prière. » Il se lève. « Il parlait d'un métier. Le mien. »",
    ],
    fx: { conf: { gildas: 5 } },
    choices: [{ back: "IIIM_voix" }] },

  IIIM_voix_porte: { act: "III", title: "La porte cloutée", place: "mont",
    text: [
      "La porte de chêne t'arrive à l'épaule. Elle est cloutée de bronze vert en lignes régulières, et au milieu, à hauteur de main, une serrure de bronze au trou de clé large comme un pouce. Le bois est froid, et il vibre très légèrement, comme si de l'autre côté une source coulait.",
      "{{pie#iiim_porte_serrure|La serrure est d'un seul bloc, scellée dans le chêne|La serrure est d'un seul bloc ; mais elle ne commande qu'un pêne, et ce pêne a deux crans : la clé l'ouvre à moitié, et il faut qu'on fasse le signe gravé au-dessus pour qu'un contrepoids, dans le roc, libère l'autre moitié}}.",
      { if: { has: "mont:acces" }, text: "La porte est entrouverte d'un doigt. Derrière, un escalier de cave descend plus bas encore, vers la crypte des premiers abbés et l'ossuaire, où une autre porte attend, taillée dans le roc." },
    ],
    choices: [
      { label: "Ouvrir avec la clé de bronze, et faire le signe des Reflets", hide: { has: "mont:acces" }, if: { all: [{ item: "iiim_cle_bronze" }, { voile: "iiim_signe_reflets" }] }, why: "Il te faudrait la clé de cette serrure, et savoir quel signe fait l'autre moitié.", to: "IIIM_porte_ouverte" },
      { label: "Forcer la porte", hide: { has: "mont:acces" }, test: { dom: "combat", diff: -30, label: "Enfoncer trois siècles de chêne", help: [{ with: "tibere", v: 15 }, { with: "salome", v: 10 }] },
        win: { fx: { fac: { moines: -15 } }, to: "IIIM_porte_forcee" }, lose: { fx: { pv: -4, fac: { moines: -5 } }, to: "IIIM_voix_chasse" } },
      { label: "Descendre vers la salle des Reflets", big: true, if: { has: "mont:acces" }, why: "La porte est fermée.", to: "IIIR_seuil" },
      { back: "IIIM_voix" },
    ] },

  IIIM_porte_ouverte: { act: "III", title: "La porte des Reflets", place: "mont",
    text: [
      "La clé tourne à moitié, et s'arrête. Tu lèves les mains devant tes yeux, paumes en dehors, comme sur la dernière page du livre des signes. Rien. Puis, dans le roc, très loin, un bruit de pierre qui roule, et la clé finit son tour toute seule, sous tes doigts.",
      "La porte s'ouvre vers l'intérieur. Un escalier de cave descend, étroit, vers la crypte des premiers abbés, et plus loin, derrière l'ossuaire, vers une porte plus vieille que l'église.",
      "Derrière toi, en haut des marches de la crypte, le frère de garde est debout. Il a vu. Il fait le signe de la paix, la main sur le cœur, et il remonte à son escabeau.",
    ],
    fx: { flag: ["mont:acces", "iiim:acces_contourne"], fac: { moines: 5 }, ep: ["seance", 2500] },
    choices: [
      { label: "Descendre vers la salle des Reflets", big: true, if: { has: "mont:acces" }, why: "La porte est fermée.", to: "IIIR_seuil" },
      { back: "IIIM_voix" },
    ] },

  IIIM_porte_forcee: { act: "III", title: "Le chêne fendu", place: "mont",
    text: [
      "Tu frappes, à l'épaule, puis avec un banc arraché au mur, jusqu'à ce que le chêne se fende autour de la serrure. Le bruit fait le tour de la salle et revient, et revient encore, et la salle des voix garde à présent, quelque part dans sa pierre, le bruit d'une porte qu'on brise.",
      "Le pêne tient encore, mais le bois autour est parti. La porte bâille sur un escalier de cave qui descend vers la crypte des premiers abbés. En haut, dans l'église, des sandales courent, et s'arrêtent en haut des marches.",
    ],
    fx: { flag: ["mont:acces", "iiim:acces_force"], ep: ["seance", 1500] },
    choices: [
      { label: "Descendre vers la salle des Reflets", big: true, if: { has: "mont:acces" }, why: "La porte est fermée.", to: "IIIR_seuil" },
      { back: "IIIM_voix" },
    ] },
});

// ==================================================================== the ordeal of silence
Object.assign(P, {
  IIIM_epreuve: { act: "III", title: "L'épreuve du silence", place: "mont",
    text: [
      "Frère Romaric t'explique la règle sur les marches de la crypte, à voix basse. « Tu descends après Complies. Tu t'assieds au centre, sur la dalle. La porte de l'escalier est fermée derrière toi. Tu ne dis pas un mot jusqu'à ce que la cloche des Laudes sonne. Pas un mot, à toi-même, aux murs, ou à qui viendra. »",
      "« Qui viendra ? » demandes-tu. Il a un sourire triste. « Il vient toujours quelqu'un. »",
      { if: { has: "taiseurs:serment" }, text: "« Tu as juré aux Joncs, ajoute-t-il. La salle le saura. Elle est moins dure avec ceux qui ont déjà promis. »" },
      { with: "lison", text: "Lison te prend le bras, sur la première marche. « Je reste en haut, dit-elle. Si tu cries, je descends, et tant pis pour leur règle. » Elle a dit ça en riant. Ses doigts te serrent le bras plus fort que son rire." },
      { if: { has: "iiim:lecon_ignace" }, text: "Tu repenses à la voix de feuille sèche d'Ignace. *Laisse les deux se taire ensemble.*" },
    ],
    choices: [
      { label: "Descendre pour la nuit", big: true, to: "IIIM_epreuve_nuit" },
      { label: "Pas encore", back: "IIIM_porte" },
    ] },

  IIIM_epreuve_nuit: { act: "III", title: "La nuit dans la salle des voix", place: "mont", takes: "night",
    silence: { who: "iiim_severin", label: "Te taire", to: "IIIM_epreuve_voix" },
    text: [
      "La porte se ferme en haut. La lampe brûle dans sa niche. Tu t'assieds sur la dalle, les jambes croisées. Ta respiration fait le tour de la salle et revient. Au bout d'une heure, tu ne sais plus si c'est la tienne.",
      "Puis les murs commencent. {{echo|Un bruit d'eau, quelque part dans le roc|Une femme, très loin, qui fait des signes si fort que ses manches claquent, et un homme qui écrit, et qui répète à mi-voix : « Je n'ai pas de langue. J'ai des mains. Écris »}}. Tu ne réponds pas.",
      "Vers minuit, la porte de l'escalier s'ouvre. Un homme descend, une lanterne sourde à la main, et il porte un manteau de pèlerin à la place de la bure. Il s'assied sur le banc, en face de toi, et il pose la lanterne entre ses pieds.",
      "« Séverin Lambert, dit-il aimablement. De la Maison Marrel. Ne réponds pas, je sais la règle. » Il sourit. « Je vais te parler, et tu vas m'écouter. Ta tête est mise à prix à Salvèze. Moi, je peux la racheter. {{oreille#iiim_severin_epreuve|Il suffit que tu remontes|Il suffit que tu dises un mot, un seul, et la porte des Reflets est à moi, parce que l'abbé ne l'ouvrira à personne d'autre}}. Dis-moi seulement : oui. »",
      { if: { not: { has: "mandat" } }, text: "Tu sais que ta tête n'est pas mise à prix. Il le dit pour voir si tu le reprendras." },
    ],
    choices: [
      { label: "« Va-t'en. »", to: "IIIM_epreuve_echec" },
      { label: "« Combien ? »", to: "IIIM_epreuve_echec" },
    ] },

  IIIM_epreuve_voix: { act: "III", title: "Ce qui reste", place: "mont",
    text: [
      "Tu te tais. Séverin attend. Il dit encore des choses : des chiffres, des noms, le nom de Lothaire Brunel, le nom d'Odeline. Tu laisses les deux réponses monter dans ta gorge, celle que tu dirais et celle que tu penses, et tu attends qu'elles se taisent ensemble. Elles mettent longtemps.",
      "Séverin finit par se lever. « Tu es plus têtu{e} qu'un moine », dit-il, et il remonte. La porte se referme.",
      "Plus tard, bien plus tard, une autre voix. Elle vient de la dalle sous toi, ou de ta mémoire. C'est la voix d'Odeline, dans la boutique, la nuit des Lanternes : « Tu ne sais pas ce que tu dis. » Et la tienne, qui lui répond quelque chose, une phrase que tu n'entends pas tout à fait, parce que la salle la couvre.",
      { with: "lison", text: "En haut, derrière la porte, tu entends Lison marcher de long en large. Une fois, elle frappe, deux coups. Puis plus rien." },
    ],
    choices: [
      { label: "Parler, pour couvrir la voix", to: "IIIM_epreuve_echec" },
      { label: "Laisser la voix finir, et te taire jusqu'à la cloche", big: true, to: "IIIM_epreuve_reussie" },
    ] },

  IIIM_epreuve_reussie: { act: "III", title: "La cloche des Laudes", place: "mont", takes: "morning",
    text: [
      "La cloche des Laudes sonne au-dessus de ta tête, à travers trente pieds de roc, et la salle entière la reprend. Tu as les jambes mortes et la gorge sèche. Tu n'as rien dit.",
      "La porte de l'escalier s'ouvre. Frère Romaric descend, et derrière lui Dom Évrard lui-même, en chape, appuyé sur sa crosse, essoufflé par les marches. L'abbé te regarde un long moment. Puis il fait, lentement, de ses grosses mains de vigneron, le signe de la porte : les mains jointes, qui s'ouvrent.",
      "Au fond de la salle, la porte aux clous de bronze est entrouverte. Elle s'est ouverte seule, pendant la nuit.",
      { with: "gildas", text: "Frère Gildas est en haut des marches, derrière l'abbé. Il ne fait aucun signe. Il te regarde comme on regarde un apprenti qui vient de réussir sa première pièce, et qui ne sait pas encore ce qu'elle lui coûtera." },
      { with: "lison", text: "Lison, à côté de lui, a les yeux rouges. « Une nuit entière sans parler, dit-elle. Je ne te reconnais pas. Ça te va mal. »" },
    ],
    fx: { flag: ["mont:acces", "iiim:acces_epreuve"], fac: { moines: 15, taiseurs: 5 }, ep: ["seance", 3500] },
    choices: [
      { label: "Descendre vers la salle des Reflets", big: true, if: { has: "mont:acces" }, why: "La porte est fermée.", to: "IIIR_seuil" },
      { label: "Remonter d'abord à la lumière", back: "IIIM_porte" },
    ] },

  IIIM_epreuve_echec: { act: "III", title: "Le mot", place: "mont",
    text: [
      "Le mot est sorti. Il fait le tour de la salle, une fois, deux fois, et il te revient de partout à la fois, ta voix, changée, plus aiguë que tu ne la crois. La salle le gardera, comme elle a gardé tous les autres.",
      { if: { seen: "IIIM_epreuve_voix" }, text: "Séverin est déjà parti. C'est la voix d'Odeline que tu as voulu couvrir, et elle s'est tue sous la tienne.", else: "Séverin se lève, satisfait, et remonte l'escalier sans se presser. « Merci », dit-il en passant la porte." },
      "Au matin, Frère Romaric vient te chercher. Il n'a pas l'air surpris. « La plupart parlent avant minuit, dit-il. Moi, j'ai tenu jusqu'à deux heures, à vingt ans. » Il t'aide à te lever. « La règle permet qu'on recommence. Et le Mont a plus d'une porte. »",
    ],
    fx: { fac: { moines: 3 } },
    choices: [{ back: "IIIM_porte" }] },
});

// ==================================================================== the abbot, Dom Évrard
var ACCES = { label: "Descendre vers la salle des Reflets", big: true, if: { has: "mont:acces" }, why: "Il faut d'abord qu'on t'ouvre la voie de la cache.", to: "IIIR_seuil" };
Object.assign(P, {
  IIIM_abbatiale: { act: "III", title: "Le logis de l'abbé", place: "mont", backName: "l'antichambre de l'abbé",
    text: [
      { first: true, text: "Le logis de l'abbé est une maison dans la maison : deux étages de pierre contre le flanc de l'église, une antichambre au carrelage rouge, un banc pour attendre. Aux murs, les portraits des abbés, quarante visages graves peints sur bois, de plus en plus sombres à mesure qu'on remonte le temps. Le dernier, à droite de la porte, est encore clair : un homme lourd, rouge, aux mains épaisses posées sur une crosse." },
      { again: true, text: "L'antichambre au carrelage rouge, les quarante abbés aux murs, la porte fermée." },
      { after: "iiim:abbe_menace", text: "La porte du cabinet est fermée à clé, et la tablette de cire du plateau porte un seul mot, écrit gros : *NON.* Il est pour toi." },
      { after: "iiim:acces_achat", text: "Derrière la porte, tu entends l'abbé compter, à mi-voix, des pièces dans son coffre de fer, et recommencer quand il se trompe." },
      { after: "iiim:acces_quittance", text: "Frère Romaric sort du cabinet sur la pointe des pieds. « Il dort, dit-il. Pour la première fois depuis quatre ans, il dort l'après-midi. »" },
      "La porte du cabinet {{echo#iiim_porte_abbe|est de chêne épais, et l'on n'entend rien au travers|garde la voix de l'abbé, la nuit d'avant, enrouée de vin : « Je ne l'ouvrirai pas, Lambert. Présentez votre quittance si vous l'osez, devant tout le chapitre. Ils vous mettront dehors et moi avec »}}.",
      "Sur une console, un plateau d'étain où les visiteurs posent leur nom, écrit sur une tablette de cire. {{pie|La tablette du dessus est vierge, lissée à la spatule|La tablette du dessus a été lissée à la spatule, mais la cire garde en creux, sous la lumière rasante, les lettres d'un nom effacé : LAMBERT, et un chiffre, 3000}}.",
    ],
    choices: [
      { label: "Demander audience à Dom Évrard", hide: { any: [{ seen: "IIIM_evrard" }, { has: "mont:acces" }] }, to: "IIIM_evrard" },
      { label: "Solliciter une nouvelle audience de l'abbé", hide: { any: [{ not: { seen: "IIIM_evrard" } }, { has: "mont:acces" }, { has: "iiim:abbe_ferme" }] }, to: "IIIM_evrard_suite" },
      { label: "Le cellier du frère cellérier, sous le logis", to: "IIIM_cellier" },
      { back: "IIIM_porte" },
    ] },

  IIIM_evrard: { act: "III", title: "Dom Évrard", place: "mont", devant: "iiim_evrard",
    text: [
      "Le cabinet de l'abbé sent le vin et la cire. Dom Évrard est assis derrière une table chargée de registres, en bure comme ses moines, une croix de bois sur la poitrine. Il te fait signe de t'asseoir. Puis, à ta surprise, il parle : une voix grave, éraillée, de quelqu'un qui s'en sert peu. « L'abbé a le droit de parler à l'hôte, seul à seul, une fois. Usons-en. »",
      "« Vous venez pour la cache. » Il ne pose pas de question. « {{oreille#iiim_evrard_cache|Il n'y a rien sous l'abbaye que des morts et de l'eau|Il y a sous l'abbaye une porte que je n'ai plus le droit d'ouvrir à personne, parce que je l'ai vendue}}. Les Taiseurs sont une histoire de bonnes femmes des marais. Ici, nous prions. »",
      "« Le pèlerin ? » Il remplit deux gobelets. « {{oreille#iiim_evrard_pelerin|Un homme pieux, que nous recevons comme tous les hôtes|Un homme qui me tient par le cou avec un papier, et qui attend que je cède pour me serrer}}. »",
      { with: "gildas", text: "Frère Gildas est resté debout près de la porte. Dom Évrard ne l'a pas regardé une seule fois. « Le Gardien n'a pas d'ordre à donner à l'abbé, dit-il enfin, sans tourner la tête. — Je n'en donne pas, répond Gildas. Je suis là. »" },
      { if: { has: "ib:abbe_lu" }, text: "Tu lui dis que tu as lu sa lettre à Frère Gildas, et la ligne sous la ligne : reprendre ce que tu portes à l'oreille, avant que tu ne parles. Dom Évrard tourne son gobelet entre ses doigts. « Je lui ai écrit cela, dit-il. Ce que le Gardien en a fait le regarde. Il obéit à un serment plus vieux que ma crosse. »" },
      { if: { has: "mandat" }, text: "« Je sais aussi qui vous êtes, ajoute l'abbé. On a placardé votre nom jusqu'à Orle. {{oreille|Je ne vous livrerai pas|Je pourrais vous livrer, et la Banque effacerait cent ducats de ma dette}}. »", else: "« On m'a écrit de Salvèze à votre sujet, ajoute l'abbé. L'élève d'Odeline Carrus, qui entend sous les mots. La Banque décrit bien les gens qu'elle cherche. »" },
    ],
    fx: { meet: "iiim_evrard", ep: ["perso", 1000] },
    choices: [
      { label: "Lui parler du chapitre, qui chante contre lui", hide: { not: { any: [{ voile: "iiim_vepres" }, { voile: "iiim_chapitre_aveu" }, { voile: "iiim_stalles" }] } }, to: "IIIM_evrard_convaincre" },
      { label: "Lui demander d'ouvrir, au nom de la reine et de ce qu'elle a dicté", to: "IIIM_evrard_convaincre" },
      { label: "Poser l'acte de la grange sur sa table, la clause en haut", hide: { not: { all: [{ item: "iiim_acte" }, { voile: "iiim_acte_clause" }] } }, to: "IIIM_evrard_menace" },
      { label: "Lui offrir de quoi payer une part de sa dette", to: "IIIM_evrard_achat" },
      { label: "Lui rendre la quittance de la Banque", hide: { not: { item: "iiim_quittance" } }, to: "IIIM_evrard_quittance" },
      { label: "Prendre congé", fx: { flag: "iiim:abbe_vu" }, back: "IIIM_abbatiale" },
    ] },

  IIIM_evrard_suite: { act: "III", title: "Le cabinet de l'abbé", place: "mont", devant: "iiim_evrard",
    text: [
      "Dom Évrard te reçoit encore, mais il ne parle plus : il a usé sa fois. Frère Romaric se tient à côté de lui et dit, pour lui, ce que ses mains disent. « L'abbé t'écoute. »",
      { if: { has: "iiim:abbe_refus" }, text: "L'abbé a les mains à plat sur la table. Il t'a déjà dit non une fois. Il attend de voir ce que tu apportes de plus." },
    ],
    choices: [
      { label: "Lui parler du chapitre, qui chante contre lui", hide: { any: [{ has: "iiim:abbe_refus" }, { not: { any: [{ voile: "iiim_vepres" }, { voile: "iiim_chapitre_aveu" }, { voile: "iiim_stalles" }] } }] }, to: "IIIM_evrard_convaincre" },
      { label: "Poser l'acte de la grange sur sa table, la clause en haut", hide: { not: { all: [{ item: "iiim_acte" }, { voile: "iiim_acte_clause" }] } }, to: "IIIM_evrard_menace" },
      { label: "Lui offrir de quoi payer une part de sa dette", hide: { seen: "IIIM_evrard_achat" }, to: "IIIM_evrard_achat" },
      { label: "Lui rendre la quittance de la Banque", hide: { not: { item: "iiim_quittance" } }, to: "IIIM_evrard_quittance" },
      { label: "Lui dire que le pèlerin a quitté le Mont", hide: { any: [{ not: { has: "iiim:pelerin_parti" } }, { seen: "IIIM_evrard_libre" }] }, to: "IIIM_evrard_libre" },
      { back: "IIIM_abbatiale" },
    ] },

  IIIM_evrard_convaincre: { act: "III", title: "Convaincre l'abbé", place: "mont",
    text: [
      "Tu parles. De la reine sans langue, du témoignage qu'elle a dicté ici, dans la salle des voix, de la Banque qui veut le brûler. Dom Évrard écoute, les mains autour de son gobelet.",
      { after: "voile:iiim_vepres", text: "Tu lui dis ce que chantent ses frères sous le psaume des Vêpres. *L'abbé vend la crypte. Gardez la porte.* Il pâlit sous sa couperose. Il ne savait pas qu'un étranger pouvait l'entendre." },
      { after: "voile:iiim_chapitre_aveu", text: "Tu lui répètes, mot pour mot, ce que le banc du chapitre a gardé : *je romps le silence pour vous le dire, et je ne le dirai qu'une fois.* Il ferme les yeux." },
      { after: "voile:iiim_stalles", text: "Tu lui dis que sa stalle se souvient de ce qu'il y chuchote. *Pardonnez-moi, mes frères.* Il pose son gobelet." },
      "« Vous me demandez de trahir la Maison Marrel, dit-il. Elle tient ma quittance. Si j'ouvre, elle réclame les trois mille ducats demain, et le Mont est vendu à l'encan. Les frères à la route. {{oreille#iiim_evrard_peur|Je ne peux pas faire ça à la maison|Je ne peux pas être l'abbé qui a perdu le Mont, j'aime mieux être celui qui l'a vendu en douce}}. »",
    ],
    choices: [
      { label: "Lui dire qu'il a déjà perdu le Mont, en douce ou pas", test: { dom: "social", diff: -20, label: "Retourner l'abbé", help: [{ if: { voile: "iiim_vepres" }, v: 10 }, { if: { voile: "iiim_chapitre_aveu" }, v: 10 }, { if: { voile: "iiim_stalles" }, v: 5 }, { if: { voile: "iiim_evrard_peur" }, v: 10 }, { if: { has: "taiseurs:serment" }, v: 10 }, { with: "gildas", v: 10 }] },
        win: { to: "IIIM_evrard_convaincu" }, lose: { fx: { flag: ["iiim:abbe_refus", "iiim:abbe_vu"] }, to: "IIIM_evrard_refus" } },
      { label: "Laisse-moi faire", who: "gildas", test: { dom: "social", diff: -10, label: "Le Gardien parle à l'abbé", help: [{ if: { voile: "iiim_evrard_peur" }, v: 10 }] },
        win: { fx: { conf: { gildas: 5 } }, to: "IIIM_evrard_gildas" }, lose: { fx: { flag: ["iiim:abbe_refus", "iiim:abbe_vu"] }, to: "IIIM_evrard_refus" } },
      { label: "Lui répondre ce que sa peur dit tout bas", hide: { not: { voile: "iiim_evrard_peur" } }, to: "IIIM_evrard_convaincu" },
    ] },

  IIIM_evrard_convaincu: { act: "III", title: "L'abbé qui a vendu", place: "mont",
    text: [
      "« Vous aimez mieux être l'abbé qui l'a vendu en douce, lui dis-tu. Vos frères le savent déjà. Ils le chantent. Il ne vous reste qu'à choisir ce qu'ils chanteront après. »",
      "Dom Évrard te regarde longtemps. Puis il rit, un rire bref et sans joie, et il vide son gobelet. « Trente ans que je n'ai pas entendu quelqu'un me parler comme ça. Le dernier, c'était le vieil Ignace. » Il se lève, lourdement. « J'ouvrirai. Et quand la Banque viendra, je présenterai au chapitre ma démission, et le chapitre en fera ce qu'il voudra. »",
      "Il fait, de ses mains de vigneron, le signe de la porte. Puis il sonne une clochette, et quand Frère Isidore paraît, il lui montre le tableau de clés, de loin, et lève un doigt : la vingt et unième.",
    ],
    fx: { flag: ["mont:acces", "iiim:acces_abbe", "iiim:abbe_convaincu"], fac: { moines: 10 }, ep: ["seance", 3000] },
    choices: [ACCES, { back: "IIIM_porte" }] },

  IIIM_evrard_gildas: { act: "III", title: "Le Gardien et l'abbé", place: "mont", with: "gildas",
    text: [
      "Frère Gildas s'avance jusqu'à la table. Il ne parle pas à l'abbé : il pose les deux mains à plat sur la table, devant lui, et il attend. Dom Évrard regarde les mains. Toi aussi. Elles sont parfaitement immobiles.",
      "« Tu étais novice quand j'étais cellérier, dit enfin l'abbé. Tu faisais trembler les gobelets rien qu'en entrant. » Il soupire. « Et maintenant tu te tiens là comme une pierre, et c'est moi qui tremble. »",
      "« Ouvre, dit Gildas. La porte n'est pas à toi. Elle n'a jamais été à toi. Tu ne pouvais pas la vendre. » Dom Évrard baisse la tête. Après un long temps, il fait le signe de la porte.",
    ],
    fx: { flag: ["mont:acces", "iiim:acces_abbe", "iiim:acces_gildas"], fac: { moines: 8, taiseurs: 5 }, ep: ["seance", 3000] },
    choices: [ACCES, { back: "IIIM_porte" }] },

  IIIM_evrard_refus: { act: "III", title: "Le refus de l'abbé", place: "mont",
    text: [
      "Dom Évrard pose son gobelet et se lève. « J'ai usé ma parole avec vous, dit-il. Je ne la reprendrai pas. » Il fait le poing au front, une fois, sans colère, comme on ferme un registre.",
      "Frère Romaric te raccompagne. Dans l'escalier, il te dit à mi-voix : « Il n'a pas dit non à la porte. Il a dit non à lui. Il y a d'autres voies : le chapitre, la salle des voix, la clé. Ou bien tu lui ôtes la Banque du cou. »",
    ],
    choices: [{ back: "IIIM_abbatiale" }] },

  IIIM_evrard_menace: { act: "III", title: "La clause", place: "mont",
    text: [
      "Tu poses l'acte sur la table, tourné vers lui, le doigt sous la ligne qui ne se lit qu'à la loupe. *Avec la crypte creusée sous la salle des voix et tout ce qu'elle renferme.* Tu la lis à voix haute.",
      "Dom Évrard ne la lit pas. Il la connaît. « Qu'allez-vous en faire ? » demande Romaric, pour lui, car l'abbé a usé sa parole ou n'en a plus.",
      "Tu le lui dis : le lire au chapitre demain matin, devant les quarante frères. Le porter à l'évêque d'Orle. L'afficher à la porte, sous la devise. L'abbé regarde ses mains.",
    ],
    choices: [
      { label: "Exiger l'ouverture de la porte contre ton silence", fx: { flag: ["mont:acces", "iiim:acces_menace", "iiim:abbe_menace"], fac: { moines: -5 }, ep: ["seance", 2500] }, tag: "Chantage", stain: true, to: "IIIM_evrard_cede_menace" },
      { label: "Lui proposer de lire l'acte lui-même au chapitre, et d'ouvrir ensuite", test: { dom: "social", diff: -10, label: "Pousser l'abbé à l'aveu", help: [{ if: { voile: "iiim_chapitre_aveu" }, v: 15 }, { with: "gildas", v: 10 }] },
        win: { fx: { flag: ["mont:acces", "iiim:acces_abbe", "iiim:abbe_aveu"], fac: { moines: 15 }, ep: ["seance", 3000] }, to: "IIIM_evrard_aveu" },
        lose: { fx: { flag: ["mont:acces", "iiim:acces_menace", "iiim:abbe_menace"], fac: { moines: -5 } }, to: "IIIM_evrard_cede_menace" } },
    ] },

  IIIM_evrard_cede_menace: { act: "III", title: "L'abbé cède", place: "mont",
    text: [
      "Dom Évrard prend une plume, écrit trois mots sur un billet, le plie, et le tend à Frère Romaric sans te regarder. Romaric lit, et devient gris. « Pour le portier, dit-il. La vingt et unième clé. » Il ajoute, plus bas : « Garde ton acte. Il a payé pour qu'il reste dans ta poche. »",
      "L'abbé ne se lève pas quand tu sors. Il regarde le dernier portrait, à droite de la porte. Le sien.",
      { if: { fac: "moines", max: 0 }, text: "Dans la cour, un frère crache par terre derrière toi. Les moines du Mont ne parlent pas ; ils ont d'autres façons de dire." },
    ],
    choices: [ACCES, { back: "IIIM_porte" }] },

  IIIM_evrard_aveu: { act: "III", title: "Le chapitre du matin", place: "mont", takes: "morning",
    text: [
      "Au chapitre du matin, Dom Évrard se lève de son siège, ce qu'un abbé ne fait jamais, et il lit l'acte lui-même, à voix haute, d'un bout à l'autre, y compris la ligne de la crypte. Sa voix s'enroue au milieu. Il finit quand même.",
      "Quarante hommes le regardent. Les mains restent sur les genoux. Puis, au fond, un très vieux frère pose la main à plat sur son cœur. Un autre, à côté. Un troisième. La paix gagne les bancs comme une marée gagne une grève, et Dom Évrard, debout, pleure sans s'essuyer.",
      "Il fait le signe de la porte, à l'adresse de tous. Le portier se lève.",
    ],
    choices: [ACCES, { back: "IIIM_porte" }] },

  IIIM_evrard_achat: { act: "III", title: "Le prix de la porte", place: "mont",
    text: [
      "Tu parles d'argent. Dom Évrard écoute avec l'attention d'un vigneron devant un marchand. « Trois mille ducats, dit-il. C'est ce qui reste. Vous ne les avez pas. La Banque seule les a. »",
      "« Mais si le Mont pouvait verser aux Marrel les intérêts de l'année, avant la Saint-Jean, {{oreille#iiim_evrard_interets|on pourrait discuter|je pourrais dire au pèlerin que je ne suis plus en retard, et le pèlerin n'aurait plus de quoi me serrer}}. Les intérêts, c'est cent ducats. Ou la valeur de cent ducats. »",
    ],
    choices: [
      { label: "Lui verser cent ducats", fx: { gold: -2000, flag: ["mont:acces", "iiim:acces_achat"], fac: { moines: 5 }, ep: ["seance", 2500] }, to: "IIIM_evrard_achete" },
      { label: "Lui donner les heures de la reine Ysaure", hide: { not: { item: "iiim_tr_heures" } }, fx: { drop: "iiim_tr_heures", flag: ["mont:acces", "iiim:acces_achat"], fac: { moines: 10 }, ep: ["seance", 2500] }, to: "IIIM_evrard_achete" },
      { label: "Lui donner la croix d'ambre et la bourse du sonneur", hide: { not: { all: [{ item: "iiim_tr_croix" }, { item: "iiim_tr_bourse" }] } }, fx: { drop: ["iiim_tr_croix", "iiim_tr_bourse"], flag: ["mont:acces", "iiim:acces_achat"], fac: { moines: 8 }, ep: ["seance", 2500] }, to: "IIIM_evrard_achete" },
      { label: "Lui dire que tu reviendras avec mieux", fx: { flag: "iiim:abbe_vu" }, back: "IIIM_abbatiale" },
    ] },

  IIIM_evrard_achete: { act: "III", title: "Le marché", place: "mont",
    text: [
      "Dom Évrard regarde ce que tu poses sur la table, le soupèse, et le range dans un coffre de fer derrière lui. Il écrit une reconnaissance, d'une main ronde de clerc de campagne : *Reçu pour le Mont, en intérêts dus à la Maison Marrel.* Il la signe, la sèche, te la tend.",
      "« Le pèlerin aura ses intérêts, dit-il. Et vous aurez votre porte. Ne dites pas aux frères comment. Ils chanteraient encore. »",
      { if: { has: "iiim:pelerin_parti" }, text: "Il ajoute, en refermant le coffre : « Puisque le pèlerin est parti, c'est à Salvèze que j'enverrai l'argent. Ou au chapitre. Je verrai. »" },
    ],
    choices: [ACCES, { back: "IIIM_porte" }] },

  IIIM_evrard_quittance: { act: "III", title: "La quittance", place: "mont",
    text: [
      "Tu poses sur la table la quittance de la Maison Marrel, prise dans la besace du pèlerin : *Reconnaissance de dette du Mont-Taciturne, trois mille ducats, payables à présentation.* Le sceau noir des Marrel, la signature de l'abbé, tremblée.",
      "Dom Évrard la regarde comme on regarde une corde qu'on vient d'ôter de son cou. Il la prend, la tourne, la retourne. Puis il la tend à la flamme de la chandelle, et il la tient jusqu'à ce que le feu lui lèche les doigts.",
      "« La Banque en a un double à Salvèze, dit Romaric doucement. — Je sais, fait l'abbé, de la main. Mais pas ici. Pas dans ma maison. » Et il fait le signe de la porte.",
    ],
    fx: { drop: "iiim_quittance", flag: ["mont:acces", "iiim:acces_quittance"], fac: { moines: 12 }, ep: ["seance", 3000] },
    choices: [ACCES, { back: "IIIM_porte" }] },

  IIIM_evrard_libre: { act: "III", title: "L'abbé sans pèlerin", place: "mont",
    text: [
      "Tu dis à l'abbé que Séverin Lambert a quitté le Mont. Dom Évrard écoute Romaric le lui répéter, et quelque chose se dénoue dans ses épaules. Il reste un moment sans bouger.",
      "Puis il fait des signes, et Romaric traduit : « La Banque reviendra. Elle revient toujours. Mais pas cette semaine. » L'abbé fait le signe de la paix, à ton adresse. Pas celui de la porte.",
      { if: { any: [{ has: "iiim:abbe_refus" }, { has: "iiim:abbe_vu" }] }, text: "Romaric ajoute, de lui-même : « Il ne t'ouvrira pas pour autant. Il a peur de toi aussi, maintenant. Mais le chapitre, lui, se souviendra de qui a mis le banquier dehors. »" },
    ],
    fx: { fac: { moines: 5 } },
    choices: [{ back: "IIIM_abbatiale" }] },

  IIIM_cellier: { act: "III", title: "Le cellier", place: "mont", backName: "le cellier",
    text: [
      "Sous le logis, un cellier voûté où dorment des tonneaux de chêne, le vin des Combes de trois années. Frère Mériadec, le cellérier, compte des bondes à la lueur d'une chandelle : un homme de cinquante ans, maigre et sec, aux doigts tachés d'encre et de lie. Il a le registre vert sous le bras. Quand il te voit, il le serre.",
      "Le registre vert {{pie#iiim_registre_vert|est le livre de comptes du Mont, tenu proprement|est le livre de comptes du Mont, et les dernières pages ont été recollées sur un cahier plus épais : il y a deux comptes, l'un sur l'autre}}.",
      "Sur une étagère, entre deux pichets, {{pie|un gobelet de cuivre terni sert de mesure|un gobelet de cuivre doré, ciselé de vigne, sert de mesure : le même ciseleur que le faux calice de l'église, la même main pressée}}.",
    ],
    choices: [
      { label: "Lui faire comprendre que tu sais, pour le calice", hide: { any: [{ not: { all: [{ voile: "iiim_calice_faux" }, { seen: "IIIM_reliquaire_enquete" }] } }, { seen: "IIIM_medard" }] }, to: "IIIM_medard" },
      { label: "Lui prendre le registre vert", hide: { any: [{ not: { voile: "iiim_registre_vert" } }, { seen: "IIIM_registre_vert" }] }, to: "IIIM_registre_vert" },
      { back: "IIIM_abbatiale" },
    ] },

  IIIM_registre_vert: { act: "III", title: "Le registre vert", place: "mont",
    text: [
      "Frère Mériadec serre le registre. Tu tends la main. Il regarde ta main, puis ton visage, et il te le donne, d'un coup, comme on se débarrasse d'une braise. Puis il s'assied sur un tonneau et se prend la tête dans les mains.",
      "Sous les pages recollées, le second compte. *Reçu du sieur Lambert, cinquante ducats, pour l'oubli de la grange au livre.* *Reçu du sieur Lambert, quatre-vingts ducats, contre le calice, en gage, à racheter à la Saint-Jean.* *Reçu du sieur Lambert, vingt ducats, pour le plan du cloître.* Tout de la même écriture fine de cellérier.",
      "Tout l'argent est passé dans la colonne d'en face : intérêts de la Banque, intérêts de la Banque, intérêts de la Banque.",
    ],
    fx: { flag: "iiim:medard_compte", ep: ["perso", 1000] },
    choices: [{ label: "Rendre le registre au cellérier", to: "IIIM_medard" }] },

  IIIM_medard: { act: "III", title: "Frère Mériadec", place: "mont", devant: "iiim_medard",
    text: [
      "Frère Mériadec rompt la règle. C'est la peur qui parle, d'une petite voix enrouée qui n'a pas servi depuis des années. « J'ai mis le calice en gage, chez le pèlerin. Pour payer les intérêts. L'abbé ne sait pas. {{oreille#iiim_medard_abbe|Je voulais le racheter à la Saint-Jean|Je ne pourrai jamais le racheter, et je comptais sur la fête pour qu'il y ait assez de monde et que personne ne regarde de près}}. »",
      "« J'ai fait faire la copie à Orle, chez un fondeur de cloches. Le pèlerin a le vrai. Dans sa besace. Il dort avec. » Il te regarde, suppliant. « {{oreille|Ne dis rien au chapitre|Dis-le au chapitre, je t'en prie, je n'en peux plus de me taire là-dessus}}. »",
    ],
    fx: { flag: "iiim:calice_gage", meet: "iiim_medard" },
    choices: [{ back: "IIIM_abbatiale" }] },

  IIIM_calice_rendu: { act: "III", title: "Le calice rendu", place: "mont",
    text: [
      "Tu ôtes le calice de cuivre du coussin et tu poses le vrai à sa place. Le velours garde encore la marque de son pied ; il s'y loge exactement. Les trois grenats prennent la lumière de l'albâtre.",
      "Le vieux sacristain, qui balayait le chœur, s'approche, le calice de cuivre dans les mains, puis le vrai sous les yeux. Il ne voit pas bien, mais il touche. Il touche longtemps. Puis il fait la main à plat sur le cœur, et il garde la main là.",
      { if: { has: "iiim:calice_gage" }, text: "Le soir, aux Vêpres, Frère Mériadec est à sa stalle. Il chante, pour la première fois depuis des semaines, à pleine voix, et faux." },
    ],
    choices: [{ back: "IIIM_eglise" }] },

  IIIM_reliquaire_enquete: { act: "III", title: "Qui a touché au calice", place: "mont",
    text: [
      "Tu demandes, par gestes ou par Romaric, qui a la clé de la grille du trésor. Trois hommes : l'abbé, le sacristain, le cellérier. Le sacristain est un vieillard presque aveugle qui astique le faux calice chaque samedi sans rien voir. L'abbé n'y vient qu'aux grandes fêtes.",
      "« Le cellérier, dit Romaric, a fait un voyage à Orle au début de l'hiver. Pour vendre du vin, a-t-il dit. Il est revenu {{oreille#iiim_prosper_medard|avec la charrette vide, ce qui est normal|avec la charrette vide et une caisse de paille qu'il a portée lui-même au cellier, ce qui ne l'est pas}}. »",
      { with: "tibere", text: "Tibère hoche la tête avec la satisfaction d'un vieux sergent. « Le comptable, dit-il. C'est toujours le comptable. Dans les couvents comme au Guet. »" },
    ],
    fx: { ep: ["perso", 600] },
    choices: [{ back: "IIIM_eglise" }] },
});

// ==================================================================== the Bank's pilgrim: Séverin Lambert
var PELERIN_FIGHT = { title: "Le pèlerin de la Banque", enemies: [{ id: "iiim_severin" }, { id: "iiim_homme", n: 2 }],
  win: { fx: { item: ["iiim_quittance", "iiim_lettre_lambert"], flag: ["iiim:pelerin_parti", "iiim:pelerin_vaincu"], fac: { moines: 5, banque: -10 }, ep: ["seance", 2500] }, to: "IIIM_pelerin_vaincu" },
  lose: { fx: { flag: "iiim:pelerin_parti", pv: 1 }, to: "IIIM_pelerin_assomme" },
  flee: { label: "Remonter l'escalier en courant", dom: "discretion", diff: -10, to: "IIIM_pelerin_fui" } };
Object.assign(P, {
  IIIM_pelerin: { act: "III", title: "Le pèlerin", place: "mont", devant: "iiim_severin",
    text: [
      "L'homme à la fenêtre referme son livre sur un doigt. Quarante ans, une barbe courte bien taillée, des mains propres, une voix aimable. La coquille cousue à son épaule est neuve. « Séverin Lambert, dit-il. Pèlerin. Je monte à la Saint-Gilles du Mont, pour une promesse faite à ma mère. Et vous ? »",
      "Il t'écoute répondre en souriant. « Vous êtes {{oreille#iiim_severin_qui|un visage que je ne connais pas, mais on rencontre tant de monde sur les routes|exactement le visage qu'on m'a décrit à Salvèze, et Brunel sera content d'apprendre que vous êtes monté jusqu'ici}}. »",
      "« L'abbaye ? Une maison sainte. {{oreille#iiim_severin_abbaye|Je n'y cherche rien que la paix|J'y attends que l'abbé cède, et il cédera, ils cèdent tous quand la dette arrive à la gorge}}. »",
      { if: { has: "iiim:inscrit" }, text: "« J'ai lu votre nom au registre du portier, ajoute-t-il. Une belle écriture. {{oreille#iiim_severin_nom|On écrit bien, sur le quai des Lanternes|Votre nom est sur une affiche à chaque pont de Salvèze, et je l'ai recopié pour Brunel le soir même}}. »" },
      { with: "tibere", text: "Le pèlerin aperçoit Tibère et son sourire change à peine. « Sergent Gaucelm, dit-il. Le monde est petit. Toujours au service du même maître ? » Tibère répond : « {{oreille#iiim_tibere_lambert|Je sers qui je veux, l'ami|Je sers celui qui me paie le jeudi, et c'est le tien, et je voudrais bien que ça finisse}}. »" },
      { with: "tibere", if: { has: "tibere:espion" }, text: "Tu sais déjà que Tibère rapporte à la Banque. Le pèlerin vient de te le confirmer d'un mot, et il le sait." },
    ],
    fx: { meet: "iiim_severin", flag: "iiim:pelerin_vu" },
    choices: [
      { label: "Lui répéter ce que le portail a gardé de son arrivée", hide: { not: { voile: "iiim_porte_pelerin" } }, to: "IIIM_pelerin_demasque" },
      { label: "Lui dire que tu sais qu'il attend la dette à la gorge de l'abbé", hide: { not: { voile: "iiim_severin_abbaye" } }, to: "IIIM_pelerin_demasque" },
      { label: "Lui demander ce qu'il propose", to: "IIIM_pelerin_marche" },
      { label: "Lui souhaiter une bonne fête", back: "IIIM_hotellerie" },
    ] },

  IIIM_pelerin_demasque: { act: "III", title: "Le pèlerin sans coquille", place: "mont", devant: "iiim_severin",
    text: [
      "Séverin Lambert t'écoute jusqu'au bout. Puis il ôte la coquille de son épaule, la pose sur la table, et soupire comme un comédien à qui l'on a coupé sa réplique. « Brunel m'avait prévenu que vous écoutiez sous les mots. Je croyais qu'il exagérait. Il n'exagère jamais. »",
      "« Bon. Parlons franchement, puisque vous m'y forcez. La Maison Marrel a acheté ce qu'il y a sous ce Mont, en bonne et due forme. J'ai la quittance de l'abbé. Le jour où je la présente au chapitre, la crypte est à nous. {{oreille#iiim_severin_chapitre|Je la présenterai demain|Je ne la présenterai jamais devant le chapitre, ils me jetteraient dans la falaise, et il me faut que l'abbé ouvre seul, de nuit}}. »",
    ],
    fx: { ep: ["perso", 1200] },
    choices: [
      { label: "Le dénoncer au chapitre", to: "IIIM_pelerin_chasse" },
      { label: "Lui demander ce qu'il propose", to: "IIIM_pelerin_marche" },
      { label: "Le laisser à sa fenêtre, et le surveiller", back: "IIIM_hotellerie" },
    ] },

  IIIM_pelerin_marche: { act: "III", title: "L'offre du pèlerin", place: "mont", devant: "iiim_severin",
    text: [
      "« Je vous propose une association, dit Séverin. Vous avez l'oreille des moines, j'ai la quittance de l'abbé. À deux, nous ouvrons cette porte avant la Saint-Gilles. Ce qu'il y a dessous, nous le partageons : le papier à la Banque, le reste à vous. »",
      { if: { has: "mandat" }, text: "« Et Madame Marrel fait lever votre mandat. Une lettre d'elle au prévôt, et vous redevenez un honnête chercheur de choses perdues. »", else: "« Et Madame Marrel se souviendra de votre nom. À Salvèze, en ce moment, c'est ce qui vaut le plus cher. »" },
      "« {{oreille#iiim_severin_offre|Vous avez ma parole|Brunel vous fera arrêter à la première porte de Salvèze, avec ou sans mandat, et je l'aurai prévenu avant que vous soyez descendu du Mont}}. »",
    ],
    choices: [
      { label: "Accepter : la quittance contre ton aide", fx: { item: "iiim_quittance", flag: "iiim:pacte_lambert", fac: { banque: 5, moines: -5 }, gold: 400 }, tag: "Pacte avec la Banque", stain: true, to: "IIIM_pelerin_pacte" },
      { label: "Lui rire au nez",  back: "IIIM_hotellerie" },
      { label: "Le dénoncer au chapitre", to: "IIIM_pelerin_chasse" },
    ] },

  IIIM_pelerin_pacte: { act: "III", title: "Le pacte", place: "mont",
    text: [
      "Séverin sort de sa besace un papier plié en quatre, scellé de noir, et le pose dans ta main avec vingt ducats d'avance. « La quittance. Montrez-la à l'abbé, il ouvrira. Je vous attends à la grange du bas, la nuit où vous descendrez. »",
      "Il remet sa coquille à l'épaule. « Brunel disait que vous refuseriez. Je lui ferai la surprise. »",
      { after: "voile:iiim_severin_offre", text: "Tu sais ce qu'il pense en le disant. Tu as la quittance quand même. C'est une arme, et les armes changent de main." },
    ],
    fx: { flag: "iiim:pelerin_parti" },
    choices: [{ back: "IIIM_hotellerie" }] },

  IIIM_pelerin_chasse: { act: "III", title: "Le chapitre chasse le pèlerin", place: "mont", takes: "morning",
    text: [
      "Au chapitre du matin, tu dis tout devant les quarante frères, par la bouche de Romaric quand ta voix ne suffit pas : l'or de la Banque, le cellérier payé, le plan du cloître, la quittance.",
      { if: { any: [{ has: "iiim:medard_compte" }, { has: "iiim:pavot_su" }, { voile: "iiim_cloitre_nuit" }, { voile: "iiim_voix_pelerin" }] }, text: "Et tu as des preuves : les comptes du registre vert, le sirop de pavot, ce que les murs ont gardé. Les mains des frères se lèvent toutes ensemble, poings au front.", else: "Tu n'as que ta parole. Les mains des frères hésitent, se consultent, puis se lèvent, une à une, poings au front. Ils te croient à moitié, et le pèlerin à moins encore." },
      "Frère Isidore va chercher Séverin Lambert à l'hôtellerie. Il le ramène par le bras, sans brutalité, comme on ramène un enfant. On lui rend son bâton, son chapeau, sa besace. On ouvre la porte. On la referme derrière lui.",
      "Sur le seuil, il se retourne vers toi. « La quittance part avec moi, dit-il. Elle vaudra à Salvèze autant qu'ici. Vous avez gagné une semaine. »",
    ],
    fx: { flag: ["iiim:pelerin_parti", "iiim:pelerin_chasse"], fac: { moines: 10, banque: -5 }, ep: ["seance", 2000] },
    choices: [{ back: "IIIM_porte" }] },

  IIIM_pelerin_sac: { act: "III", title: "La besace du pèlerin", place: "mont",
    text: [
      "Pendant Sexte, l'hôtellerie est vide. La besace du pèlerin est sous son lit, la boucle d'argent fermée par un petit cadenas de cuivre. Dans la cour, la cloche sonne encore ; tu as le temps d'un psaume, à peu près.",
    ],
    choices: [
      { label: "Ouvrir la besace", test: { dom: "discretion", diff: -10, label: "Ouvrir et refermer sans trace", help: [{ if: { item: "crochets" }, v: 15 }, { if: { has: "metier:mains" }, v: 10 }, { with: "lison", v: 10 }] },
        win: { fx: { item: ["iiim_quittance", "iiim_lettre_lambert"], ep: ["perso", 1500] }, to: "IIIM_pelerin_sac_dedans" },
        lose: { to: "IIIM_pelerin_surpris" } },
      { label: "Laisse-moi faire", who: "tibere", test: { dom: "discretion", diff: 0, label: "Tibère fouille comme au Guet", help: [{ if: { item: "crochets" }, v: 10 }] },
        win: { fx: { item: ["iiim_quittance", "iiim_lettre_lambert"], conf: { tibere: 5 }, ep: ["perso", 1500] }, to: "IIIM_pelerin_sac_dedans" },
        lose: { to: "IIIM_pelerin_surpris" } },
      { label: "Laisser la besace", back: "IIIM_hotellerie" },
    ] },

  IIIM_pelerin_sac_dedans: { act: "III", title: "Ce que porte un pèlerin", place: "mont",
    text: [
      "Une chemise de rechange, une bouteille d'eau-de-vie, un rasoir, une bourse de cinquante ducats. Un rouleau de papier fin : un plan du cloître levé au pas, avec la salle des voix marquée d'une croix. Une quittance pliée en quatre, au sceau noir des Marrel. Une lettre. Et, roulé dans une chemise de laine, un calice d'or ciselé de vigne, serti de trois grenats.",
      "Tu prends la quittance et la lettre, et tu refermes le cadenas. Le pèlerin trouvera le vide ce soir, ou demain. Il saura qui.",
      { if: { has: "iiim:calice_gage" }, text: "Le calice est celui que le cellérier a mis en gage. Il pèse dans ta main." },
    ],
    choices: [
      { label: "Prendre aussi le calice", fx: { item: "iiim_tr_calice" }, back: "IIIM_hotellerie" },
      { label: "Laisser le calice où il est", back: "IIIM_hotellerie" },
    ] },

  IIIM_pelerin_surpris: { act: "III", title: "Pris la main dans la besace", place: "mont", devant: "iiim_severin",
    text: [
      "Le cadenas résiste, et quand il cède, la porte de l'hôtellerie s'ouvre. Séverin Lambert est sur le seuil, son bâton à la main. Il a quitté l'office avant la fin. « Brunel disait aussi que vous étiez voleur de métier, dit-il. Je vois qu'il ne se trompait pas. »",
      "Il ferme la porte derrière lui. Il dévisse le pommeau de son bâton, et une lame fine en sort, longue comme l'avant-bras.",
    ],
    choices: [
      { label: "Te battre", fight: { title: "Le pèlerin de la Banque", enemies: [{ id: "iiim_severin" }],
        win: { fx: { item: ["iiim_quittance", "iiim_lettre_lambert"], flag: ["iiim:pelerin_parti", "iiim:pelerin_vaincu"], fac: { moines: 3, banque: -10 }, ep: ["seance", 2000] }, to: "IIIM_pelerin_vaincu" },
        lose: { fx: { flag: "iiim:pelerin_parti", pv: 1 }, to: "IIIM_pelerin_assomme" } } },
      { label: "Crier, pour que les frères accourent", fx: { fac: { moines: -2 } }, to: "IIIM_pelerin_chasse" },
    ] },

  IIIM_pelerin_suivre: { act: "III", title: "La lanterne de nuit", place: "mont", takes: "midnight",
    text: [
      "Tu suis la lanterne à distance. Elle passe sous les fenêtres du logis de l'abbé, s'arrête, frappe trois coups à une porte basse. Personne n'ouvre. Une voix, derrière la porte, dit seulement : « Non. » La lanterne repart, vers l'église.",
      "Le pèlerin entre par la porte du chœur. Tu entends ses pas descendre l'escalier de la crypte, sans que le frère de garde dise rien.",
      { if: { has: "iiim:pavot_su" }, text: "Le frère de garde dort, la tête contre le mur. Le gobelet de mélasse est à ses pieds." },
      "En bas, dans la salle des voix, deux hommes attendent le pèlerin avec des lanternes sourdes, des pinces et une barre à mine. Ils sont montés par la grange et les vignes. Séverin Lambert pose sa lanterne devant la porte cloutée et commence à mesurer la serrure.",
    ],
    choices: [
      { label: "Les attaquer dans la salle des voix", fight: PELERIN_FIGHT },
      { label: "Remonter sonner la cloche du dortoir", test: { dom: "discretion", diff: -10, label: "Remonter sans être vu{e}", help: [{ with: "lison", v: 10 }] },
        win: { to: "IIIM_pelerin_chasse" }, lose: { to: "IIIM_pelerin_vu_nuit" } },
      { label: "Leur parler depuis l'escalier", who: "gildas", to: "IIIM_pelerin_gildas" },
    ] },

  IIIM_pelerin_vu_nuit: { act: "III", title: "Le pas de trop", place: "mont",
    text: [
      "Une marche craque sous ton pied. En bas, les lanternes se tournent vers l'escalier. « On a de la compagnie », dit un des hommes. Séverin Lambert lève la tête et sourit. « Descendez donc. La salle aime qu'on lui parle. »",
    ],
    choices: [
      { label: "Descendre et te battre", fight: PELERIN_FIGHT },
      { label: "Leur parler de ce que la salle a gardé d'eux", hide: { not: { voile: "iiim_voix_pelerin" } }, to: "IIIM_pelerin_chasse" },
    ] },

  IIIM_pelerin_gildas: { act: "III", title: "Le Gardien dans l'escalier", place: "mont", with: "gildas",
    text: [
      "Frère Gildas descend avant que tu puisses le retenir. Il entre dans la lumière des lanternes, sans arme, le capuchon baissé. Les deux hommes de main reculent d'un pas, parce qu'ils ne savent pas quoi faire d'un moine qui ne s'arrête pas.",
      "« Cette porte est à la reine, dit Gildas. Va-t'en. » Séverin Lambert le regarde longtemps. Il cherche dans le visage du moine quelque chose à quoi s'accrocher. Il ne trouve rien. « Brunel m'a parlé de vous, dit-il enfin. Il avait l'air d'avoir peur. »",
      "Il ramasse sa lanterne. « On s'en va, dit-il à ses hommes. Le Gardien est rentré. Ça change le prix. »",
    ],
    fx: { flag: ["iiim:pelerin_parti", "iiim:pelerin_gildas"], conf: { gildas: 5 }, fac: { moines: 8 }, ep: ["seance", 2000] },
    choices: [{ back: "IIIM_voix" }] },

  IIIM_pelerin_vaincu: { act: "III", title: "Le pèlerin à terre", place: "mont",
    text: [
      "Les deux hommes de main se sont enfuis par où ils étaient venus. Séverin Lambert est assis contre le mur, une main sur le côté, sa lame cassée à ses pieds. Tu fouilles sa besace : la quittance, une lettre. « Prenez, dit-il. Je dirai à Brunel que vous m'avez vaincu. C'est ce qu'il y a de moins humiliant à dire. »",
      "Au matin, les frères le descendent sur une civière jusqu'à la grange. Il ne reviendra pas.",
      { if: { not: { item: "iiim_tr_calice" } }, text: "Dans la besace, roulé dans une chemise de laine, il y a aussi un calice d'or ciselé de vigne." },
    ],
    choices: [
      { label: "Prendre le calice", hide: { item: "iiim_tr_calice" }, fx: { item: "iiim_tr_calice" }, back: "IIIM_porte" },
      { back: "IIIM_porte" },
    ] },

  IIIM_pelerin_assomme: { act: "III", title: "Réveil à l'infirmerie", place: "mont", takes: "morning",
    text: [
      "Tu te réveilles dans un lit à rideaux. Frère Ursmer t'a recousu le cuir chevelu et écrit, sur son ardoise posée sur ta poitrine : *LE PÈLERIN EST PARTI. LA PORTE A TENU.*",
      "La serrure à deux crans a résisté à la barre à mine. Les moines, réveillés par le vacarme, sont descendus en nombre, et Séverin Lambert est parti par la grange avec ses hommes, sa quittance dans la besace, avant qu'on le retienne.",
    ],
    fx: { fac: { moines: 3 } },
    choices: [{ back: "IIIM_porte" }] },

  IIIM_pelerin_fui: { act: "III", title: "La fuite dans l'escalier", place: "mont",
    text: [
      "Tu remontes quatre à quatre. En bas, quelqu'un jure. La barre à mine frappe la porte, deux fois, trois fois, et le bruit monte jusqu'au dortoir. Les frères descendent, nombreux, avec des cierges. Le pèlerin et ses hommes s'enfuient par la grange.",
      "La porte cloutée a tenu. Le pèlerin a gardé sa quittance. Il ne reviendra pas cette semaine.",
    ],
    fx: { flag: "iiim:pelerin_parti" },
    choices: [{ back: "IIIM_porte" }] },
});

// ==================================================================== side quest: the sold barn (IIIM_terres)
Object.assign(P, {
  IIIM_grange: { act: "III", title: "La grange du bas", place: "mont", backName: "la grange du bas",
    text: [
      { first: true, text: "Un sentier pavé descend de la porterie, en lacets, jusqu'à la grange de l'abbaye : un grand bâtiment de pierre au toit de lauze, avec son pressoir à long bras, ses cuves, sa cour où sèchent des échalas. Autour, les vignes en terrasses, taillées court, encore noires de l'hiver. Plus bas, un saule penché sur une source, et le chemin d'Orle." },
      { again: true, text: "La grange, le pressoir, les terrasses noires, le saule au bord de la source." },
      { before: "iiim:terres_fin", text: "Sur la grande porte de la grange, quelqu'un a peint en noir, de frais, le besant de la Maison Marrel. Trois chevaux sont attachés à l'anneau. Dans la cour, une famille charge une charrette : des paniers, des tonnelets, un coffre, une vieille femme assise sur le coffre. Un homme d'une quarantaine d'années, la moustache grise de poussière, attache la bâche sans regarder les trois cavaliers qui le regardent faire." },
      { after: "iiim:terres_rendues", text: "La charrette des Courtet est déchargée. Landry taille ses vignes, au-dessus du saule. Le besant noir de la porte a été gratté au couteau ; on le devine encore." },
      "Le mur de la grange {{echo#iiim_grange_bornes|est chaud du soleil de l'après-midi|rend la voix d'un des cavaliers, il y a trois nuits : « Les bornes, on les remonte de deux cents pas cette nuit. Le vigneron ne sait pas lire l'acte, et le saule ne témoignera pas »}}.",
      { with: "salome", text: "Salomé regarde la famille charger. « On a fait ça à des gens de Port-Vasier, l'an passé, dit-elle. Même besant sur la porte. Même charrette. »" },
    ],
    fx: { flag: "iiim:terres_vues", questSeen: "IIIM_terres" },
    choices: [
      { label: "Parler au vigneron", hide: { has: "iiim:terres_fin" }, to: "IIIM_landry" },
      { label: "La borne, près du saule", to: "IIIM_borne" },
      { label: "Aller trouver les cavaliers de la Banque", hide: { any: [{ has: "iiim:terres_fin" }, { not: { seen: "IIIM_landry" } }] }, to: "IIIM_grange_cavaliers" },
      { back: "IIIM_porte" },
    ] },

  IIIM_landry: { act: "III", title: "Landry Courtet", place: "mont", devant: "iiim_landry",
    text: [
      "« Landry Courtet, vigneron. » Il serre ta main d'une main de bois. « Mon grand-père tenait la vigne du saule, et son père avant lui. Pas de l'abbaye : à nous, en franc-alleu. La grange, on la louait aux moines, et le pressoir. Maintenant la grange est à la Banque, et ces messieurs disent que nos vignes aussi. Jusqu'à la borne. »",
      "« La borne a toujours été au saule. {{oreille#iiim_landry_borne|Mais je ne sais pas lire leur papier|Mais elle n'y est plus depuis lundi, je l'ai vu, et je n'ai rien dit parce qu'ils sont trois et que j'ai une mère}}. »",
      "Il regarde vers l'abbaye, là-haut. « Mon neveu est là-dedans. Florent. Novice. Ma sœur l'y a mis à huit ans, à la mort de son homme. {{oreille#iiim_landry_florent|Il est bien chez les moines|Il m'a fait passer un billet par le convers : il veut descendre m'aider, et je lui ai répondu non, et j'ai menti}}. »",
    ],
    fx: { meet: "iiim_landry" },
    choices: [
      { label: "Lui promettre d'aller voir la borne", back: "IIIM_grange" },
      { label: "Aller trouver les cavaliers de la Banque", to: "IIIM_grange_cavaliers" },
    ] },

  IIIM_borne: { act: "III", title: "La borne du Saule", place: "mont",
    text: [
      "Le saule est penché sur la source, les racines dans l'eau. À trois pas de lui, dans l'herbe, un creux carré, de la taille d'une borne, où l'herbe a jauni. Deux cents pas plus haut, au milieu des vignes de Landry, une pierre levée à hauteur de genou, gravée d'une croix d'abbaye et d'un S.",
      "La pierre levée {{pie#iiim_borne_pie|est une vieille borne de grès, couverte de lichen|est une vieille borne de grès dont le lichen s'arrête net à une main du sol : la terre fraîche, tassée au pied, n'a pas une semaine}}.",
      { when: "night", text: "La nuit, sous la lune, le creux près du saule fait une tache noire dans l'herbe. La borne, là-haut, est à portée de bras d'homme et de levier." },
    ],
    choices: [{ back: "IIIM_grange" }] },

  IIIM_grange_cavaliers: { act: "III", title: "Les gens de la Banque", place: "mont",
    text: [
      "Les trois cavaliers sont assis sur le banc de pierre de la grange, une cruche de vin du Mont entre eux. Gants gris, manteaux de voyage, épées courtes. Le plus vieux, un homme rouge aux cheveux ras, se lève sans hâte. « La Maison Marrel prend possession, dit-il. Acte en règle. Circulez, ou signez comme témoin. »",
      "« Les vignes jusqu'à la borne, ajoute-t-il, {{oreille#iiim_cavalier_borne|comme l'acte le dit|comme l'acte le dit, à condition qu'on ne demande pas où était la borne avant lundi}}. »",
    ],
    choices: [
      { label: "Lui montrer l'acte et la terre fraîche au pied de la borne", if: { all: [{ voile: "iiim_borne_pie" }, { any: [{ item: "iiim_acte" }, { has: "iiim:acte_lu" }] }] }, why: "Il te faudrait l'acte, et une preuve que la borne a bougé.",
        test: { dom: "social", diff: -10, label: "Faire reculer la Banque par le droit", help: [{ if: { voile: "iiim_grange_bornes" }, v: 15 }, { if: { has: "metier:lire" }, v: 10 }, { with: "tibere", v: 10 }] },
        win: { fx: { flag: ["iiim:terres_rendues", "iiim:terres_fin", "iiim:terres"], quest: "IIIM_terres", fac: { moines: 5, banque: -5 }, ep: ["seance", 2000] }, to: "IIIM_terres_fin" },
        lose: { fx: { flag: ["iiim:terres_perdues", "iiim:terres_fin", "iiim:terres"], quest: "IIIM_terres" }, to: "IIIM_terres_fin" } },
      { label: "Remettre la borne au saule, de nuit", test: { dom: "nature", diff: -10, label: "Déplacer une borne de grès sans être vu{e}", help: [{ with: "tibere", v: 10 }, { with: "salome", v: 10 }, { with: "lison", v: 10 }, { if: { item: "corde" }, v: 5 }] },
        win: { fx: { flag: ["iiim:terres_rendues", "iiim:terres_fin", "iiim:terres", "iiim:borne_remise"], quest: "IIIM_terres", ep: ["seance", 1500] }, to: "IIIM_terres_fin" },
        lose: { fx: { flag: ["iiim:terres_perdues", "iiim:terres_fin", "iiim:terres"], quest: "IIIM_terres", pv: -3 }, to: "IIIM_terres_fin" } },
      { label: "Les chasser de la grange", fight: { title: "Les gens de la Banque", enemies: [{ id: "iiim_homme", n: 3 }],
        win: { fx: { flag: ["iiim:terres_rendues", "iiim:terres_fin", "iiim:terres", "iiim:cavaliers_battus"], quest: "IIIM_terres", fac: { banque: -10 }, ep: ["seance", 2000] }, to: "IIIM_terres_fin" },
        lose: { fx: { flag: ["iiim:terres_perdues", "iiim:terres_fin", "iiim:terres"], quest: "IIIM_terres", pv: 1 }, to: "IIIM_terres_fin" },
        flee: { label: "Fuir dans les vignes", dom: "nature", diff: -10, to: "IIIM_grange" } } },
      { label: "Ne plus t'en mêler", refuse: true, back: "IIIM_grange" },
    ] },

  IIIM_terres_fin: { act: "III", title: "La vigne du saule", place: "mont",
    text: [
      { if: { has: "iiim:cavaliers_battus" }, text: "Les trois cavaliers remontent en selle, l'un d'eux tenant son bras contre lui, et partent au trot vers Orle sans un regard pour la grange. « Ils reviendront à dix », dit Landry. Puis il ajoute : « Mais pas pour la vigne du saule. Elle ne vaut pas dix hommes. »" },
      { if: { has: "iiim:borne_remise" }, text: "Au matin, la borne est revenue près du saule, dans son creux, comme si elle n'en était jamais partie. Les cavaliers la regardent longtemps, se grattent la tête, consultent leur acte, et finissent par charger leurs sacoches. Le plus vieux crache dans la source en partant." },
      { if: { all: [{ has: "iiim:terres_rendues" }, { not: { has: "iiim:cavaliers_battus" } }, { not: { has: "iiim:borne_remise" } }] }, text: "Le plus vieux des cavaliers lit l'acte, regarde la borne, regarde la terre fraîche, regarde Landry. Il replie le papier. « La Maison n'a pas besoin de trois vignes de plus pour se faire des procès », dit-il. Ils boivent le reste de la cruche et s'en vont." },
      { if: { has: "iiim:terres_rendues" }, text: "Landry Courtet décharge sa charrette en silence. Sa mère, sur le coffre, ne bouge pas jusqu'à ce que le coffre lui-même soit rentré. Puis Landry revient vers toi avec un tonnelet de vin de six ans, tiré de sous la paille. « Le meilleur de la vigne du saule. Pour la route. Et si vous voyez mon neveu, là-haut, dites-lui qu'il y a du travail en bas. »" },
      { if: { has: "iiim:terres_perdues" }, text: "Le soir, la charrette des Courtet descend le chemin d'Orle, la vieille femme sur le coffre, Landry à la tête du cheval. Il ne se retourne pas. Les cavaliers ont planté un piquet au besant noir au pied de la borne. Les vignes du saule seront à la Banque aux vendanges." },
    ],
    fx: { food: 2 },
    choices: [{ back: "IIIM_grange" }] },
});

// ==================================================================== side quest: the novice who wants to leave (IIIM_novice)
Object.assign(P, {
  IIIM_novice: { act: "III", title: "Florent", place: "mont", devant: "iiim_florent",
    text: [
      "Le novice se relève quand tu t'approches, la binette à la main, et regarde autour de lui. Le jardin est vide. Il parle très bas, du bout des lèvres, comme on parle en classe derrière le dos du maître. « Je m'appelle Florent. On n'a pas le droit. Je sais. »",
      "« Je suis ici depuis dix ans. Ma mère m'a donné au Mont quand mon père est mort, parce qu'il y avait une bouche de trop. {{oreille#iiim_florent_vocation|J'aime bien les offices|Je prie mal, je fais mal les signes, je chante faux, et la salle des voix me rend tout ce que je pense}}. »",
      { if: { seen: "IIIM_complies" }, text: "Tu reconnais sa voix : c'est celle qui déraillait aux Complies." },
      "« Mon oncle a des vignes, en bas, près de la grange. La Banque les lui prend. {{oreille#iiim_florent_partir|Je prie pour lui|Je vais passer le mur, cette nuit ou une autre, et si on me prend je passerai encore}}. »",
      { with: "lison", text: "Lison s'est accroupie à côté du carré de sauge. « Dix ans, dit-elle. Moi, à dix-huit ans, je ramais pour ma grand-mère et je rêvais de la ville. Tu rêves de quoi ? » Florent rougit jusqu'aux oreilles. « D'une vigne », dit-il." },
    ],
    fx: { meet: "iiim_florent", questSeen: "IIIM_novice" },
    choices: [
      { label: "Lui dire que tu l'aideras", to: "IIIM_novice_aide" },
      { label: "Le laisser à sa sauge", back: "IIIM_jardin" },
    ] },

  IIIM_novice_aide: { act: "III", title: "Ce que Florent peut faire", place: "mont", devant: "iiim_florent",
    text: [
      "Florent jette un regard vers le cloître. « Il y a trois façons de quitter le Mont, dit-il. La bénédiction de l'abbé, et l'abbé ne la donne plus, il dit qu'il a besoin de bras. Le mur. Ou mourir. »",
      { if: { not: { has: "mont:acces" } }, text: "Puis, plus bas : « Je suis de garde à la descente de la crypte, trois nuits par semaine. Je sais où le portier pend la clé de bronze, et je sais le signe, ils nous l'apprennent pour qu'on sache ce qu'on garde. Si tu m'aides à passer le mur, je t'ouvre la porte avant de partir. »" },
      { if: { has: "iiim:terres_rendues" }, text: "Tu lui dis que la vigne du saule est restée à son oncle, et que son oncle a dit qu'il y avait du travail en bas. Florent se tait. Il s'assied par terre, dans la sauge, et il rit sans bruit, les mains sur la bouche, comme les frères." },
      { if: { has: "iiim:terres_perdues" }, text: "Tu lui dis que son oncle est parti pour Orle avec sa charrette. Florent serre la binette. « Alors il a encore plus besoin de moi », dit-il." },
    ],
    choices: [
      { label: "Accepter : il t'ouvre la porte, tu l'aides à passer le mur", hide: { has: "mont:acces" }, to: "IIIM_novice_ouvre" },
      { label: "L'aider à passer le mur, cette nuit", to: "IIIM_novice_mur" },
      { label: "Demander pour lui la bénédiction de l'abbé", if: { any: [{ has: "iiim:abbe_convaincu" }, { has: "iiim:abbe_aveu" }, { has: "iiim:acces_gildas" }, { fac: "moines", min: 20 }] }, why: "L'abbé t'écoutera sur ce point quand tu auras gagné sa confiance, ou celle du chapitre.", to: "IIIM_novice_reste" },
      { label: "Lui conseiller de rester", fx: { flag: ["iiim:novice", "iiim:novice_reste"], quest: "IIIM_novice", conf: { lison: -3 } }, to: "IIIM_novice_conseil" },
    ] },

  IIIM_novice_ouvre: { act: "III", title: "La garde de Florent", place: "mont", takes: "night",
    text: [
      "Après Complies, tu attends dans le noir de l'église. Florent monte la garde à la descente, sur l'escabeau, et quand le dortoir s'est tu, il se lève, te fait signe et descend devant toi. Il a la clé de bronze dans sa manche ; il l'a décrochée du tableau pendant que le portier chantait.",
      "Dans la salle des voix, il tourne la clé à moitié. Puis il lève les mains devant ses yeux, paumes en dehors, et la clé finit son tour sous ses doigts. La porte cloutée s'ouvre. « Voilà, dit-il, et sa voix fait le tour de la salle. Maintenant, le mur. »",
      "Il remonte la clé au tableau avant les Vigiles. La salle seule saura qui a ouvert.",
    ],
    fx: { flag: ["mont:acces", "iiim:acces_novice"], ep: ["seance", 2500] },
    choices: [{ label: "Tenir ta promesse : le mur du verger", big: true, to: "IIIM_novice_mur" }] },

  IIIM_novice_mur: { act: "III", title: "Le mur du verger", place: "mont", takes: "night",
    text: [
      "Le verger, la nuit. Les ruches bourdonnent. Florent a roulé sa bure de novice sous son bras et mis une chemise de laine trouvée à l'hôtellerie. À l'angle des ruches, les trois pierres descellées font des marches dans le mur ; au-dessus, deux toises de vide, et les vignes.",
      "Il faut passer avant la ronde du frère de nuit, qui fait le tour du verger avec une lanterne à chaque heure.",
    ],
    choices: [
      { label: "Lui faire la courte échelle, et guetter la lanterne", test: { dom: "discretion", diff: -10, label: "Faire passer le mur à un novice", help: [{ with: "lison", v: 15 }, { with: "tibere", v: 5 }, { if: { item: "corde" }, v: 10 }, { if: { has: "iiim:portier_allie" }, v: 10 }] },
        win: { fx: { flag: ["iiim:novice", "iiim:novice_parti"], quest: "IIIM_novice", ep: ["seance", 1500] }, to: "IIIM_novice_adieu" },
        lose: { fx: { flag: ["iiim:novice", "iiim:novice_pris"], quest: "IIIM_novice", fac: { moines: -5 } }, to: "IIIM_novice_adieu" } },
      { label: "Laisse-moi faire", who: "gildas", fx: { flag: ["iiim:novice", "iiim:novice_parti", "iiim:novice_gildas"], quest: "IIIM_novice", conf: { gildas: 5 }, ep: ["seance", 1500] }, to: "IIIM_novice_adieu" },
    ] },

  IIIM_novice_adieu: { act: "III", title: "De l'autre côté du mur", place: "mont",
    text: [
      { if: { has: "iiim:novice_gildas" }, text: "Frère Gildas va lui-même au-devant du frère de nuit, et lui fait un signe que tu ne vois pas. La lanterne s'éloigne. Gildas revient, prend Florent par les épaules, le regarde, puis le pousse vers les marches du mur. « Va, dit-il. Il y a des gens à qui le silence va, et d'autres à qui il ne va pas. Le Seigneur a fait les uns et les autres. » Florent passe le mur. Gildas reste longtemps à regarder l'endroit où il a disparu." },
      { if: { all: [{ has: "iiim:novice_parti" }, { not: { has: "iiim:novice_gildas" } }] }, text: "Florent monte sur tes mains, attrape le chaperon du mur, se hisse. La lanterne du frère de nuit tourne au coin du verger à ce moment-là, et passe, et ne lève pas les yeux. De l'autre côté, un bruit de chute dans la terre meuble, un juron très bas, puis des pas qui courent dans les vignes, vers la grange." },
      { if: { has: "iiim:novice_pris" }, text: "La lanterne arrive trop tôt. Florent est à cheval sur le mur quand le frère de nuit lève sa lumière sur lui. Ils se regardent. Le frère fait le poing au front. Florent redescend du bon côté, le mauvais. Au chapitre du lendemain, on le met au pain sec pour un mois, et on le change de garde. Il ne te regarde plus quand tu passes." },
      { if: { has: "iiim:novice_parti" }, text: "Au chapitre du lendemain, la place de Florent est vide. Les frères font devant elle un signe que tu n'as pas vu jusqu'ici : l'index qui pointe vers la vallée, puis la main sur le cœur. *L'étranger. Paix.* Les poings restent sur les genoux." },
    ],
    choices: [{ back: "IIIM_jardin" }] },

  IIIM_novice_reste: { act: "III", title: "La bénédiction de l'abbé", place: "mont",
    text: [
      "Dom Évrard écoute Romaric lui exposer ta demande. Il fait venir Florent, qui se tient devant lui tout pâle, les mains derrière le dos pour qu'on ne les voie pas trembler.",
      "L'abbé le regarde longtemps. Puis il se lève, pose ses grosses mains sur la tête du garçon, et trace une croix sur son front avec le pouce. Il fait l'index vers la vallée, puis la main sur le cœur. Florent ne comprend pas tout de suite. Romaric le lui dit : « Tu peux partir. Avec la paix. »",
      "Florent part le lendemain matin, par la grande porte, sa bure pliée dans les bras pour la rendre au portier. Frère Isidore la prend, et lui donne en échange un pain et une pomme.",
    ],
    fx: { flag: ["iiim:novice", "iiim:novice_parti"], quest: "IIIM_novice", fac: { moines: 5 }, ep: ["seance", 2000] },
    choices: [{ back: "IIIM_jardin" }] },

  IIIM_novice_conseil: { act: "III", title: "Rester", place: "mont",
    text: [
      "Tu lui dis de rester. Que le monde, en bas, est plus dur qu'un mur ; que la Banque prend les vignes de ceux qui en ont, et que ceux qui n'en ont pas mendient à Salvèze. Florent t'écoute, la tête baissée.",
      "« Bon », dit-il. Il reprend sa binette. Il sarcle. Au bout d'un moment, sans lever la tête, il fait un signe que les novices apprennent le premier jour : deux doigts sur les lèvres. *Silence.* Tu ne sais pas s'il te le dit à toi ou à lui.",
    ],
    choices: [{ back: "IIIM_jardin" }] },
});

// ==================================================================== END PASSAGES

module.exports = {
  passages: P,
  extras: {
    people: {
      iiim_evrard: { name: "Dom Évrard", qui: "L'abbé du Mont-Taciturne.", aspect: { allure: "homme lourd, mains de vigneron", habits: "bure, croix de bois sur la poitrine", voix: "grave, éraillée" }, f: false, face: { age: "ancien", coif: "couronne" }, desc: "L'abbé du Mont-Taciturne. Un homme lourd, aux mains de vigneron, qui porte la crosse comme un outil." },
      iiim_isidore: { name: "Frère Isidore", qui: "Le frère portier du Mont.", aspect: { allure: "soixante ans, haut comme une porte", habits: "bure", signe: "mains comme des pelles à pain, vingt clés" }, f: false, face: { age: "ancien", coif: "couronne" }, desc: "Le frère portier du Mont, haut comme une porte, qui tient les vingt clés de la maison." },
      iiim_prosper: { name: "Frère Romaric", qui: "Le bibliothécaire du Mont, le seul frère qui ait le droit de parler.", aspect: { allure: "vieillard sec", habits: "bure", voix: "fêlée" }, f: false, face: { age: "ancien", coif: "couronne", marks: ["lunettes"] }, desc: "Le bibliothécaire du Mont, le seul frère qui ait le droit de parler, par dispense de l'abbé." },
      iiim_cyprien: { name: "Frère Ursmer", qui: "L'infirmier du Mont.", aspect: { allure: "quarante ans, avant-bras de boulanger", habits: "bure", signe: "ardoise, odeur de sauge et d'eau-de-vie" }, f: false, face: { age: "adulte", coif: "couronne" }, desc: "L'infirmier du Mont, qui sent la sauge et l'eau-de-vie." },
      iiim_medard: { name: "Frère Mériadec", qui: "Le cellérier du Mont.", aspect: { allure: "cinquante ans, maigre et sec", habits: "bure", signe: "doigts tachés d'encre et de lie" }, f: false, face: { age: "mur", coif: "couronne" }, desc: "Le cellérier du Mont : les comptes, les vignes, les ventes." },
      iiim_ignace: { name: "Frère Ignace", qui: "L'ancien maître des novices du Mont, à l'infirmerie.", aspect: { allure: "vieillard couché derrière un rideau", signe: "mains qui parlent par signes", voix: "voix de feuille sèche" }, f: false, face: { age: "ancien", coif: "couronne" }, desc: "L'ancien maître des novices du Mont, qui se meurt à l'infirmerie." },
      iiim_florent: { name: "Florent", qui: "Un novice du Mont, dix-huit ans.", aspect: { allure: "novice timide, rougit vite", habits: "habit de novice", signe: "binette à la main", voix: "très basse, du bout des lèvres" }, f: false, face: { age: "jeune", coif: "court" }, desc: "Un novice du Mont, dix-huit ans, qui fait mal les signes et voudrait partir." },
      iiim_severin: { name: "Séverin Lambert", qui: "Un pèlerin descendu de Salvèze.", aspect: { allure: "quarante ans, aimable", visage: "barbe courte bien taillée", habits: "coquille neuve cousue à l'épaule", signe: "mains propres", voix: "aimable" }, f: false, face: { age: "adulte", coif: "court", beard: "barbe" }, desc: "Un « pèlerin » descendu de Salvèze, une coquille cousue à l'épaule. Il paie en or de la Banque." },
      iiim_landry: { name: "Landry Courtet", qui: "Vigneron de la grange du bas, sur les terres de l'abbaye.", aspect: { allure: "vigneron franc", signe: "main de bois, serrée fort" }, f: false, face: { age: "mur", coif: "court", beard: "moustache" }, desc: "Vigneron de la grange du bas, sur les terres de l'abbaye." },
    },
    items: {
      iiim_cle_bronze: { name: "La clé de bronze du portier", kind: "outil", price: 0, unique: true, desc: "Une clé de bronze vert, au panneton d'une serrure de crypte. Frère Isidore te l'a mise dans la main." },
      iiim_tr_croix: { name: "La croix d'ambre d'Aymeric", kind: "tresor", price: 120, unique: true, desc: "Une petite croix d'ambre jaune, à branches égales, sur une chaîne d'argent. Elle vibre près des pierres chantantes." },
      iiim_tr_heures: { name: "Les heures de la reine Ysaure", kind: "tresor", price: 250, unique: true, desc: "Un petit livre d'heures relié de velours pourpre, peint de bleu et d'or ; dans les marges, une main dessinée fait les signes du Mont. Au premier feuillet : *Ysaure, son livre.*" },
      iiim_acte: { name: "L'acte de la grange", kind: "document", form: "acte", unique: true, desc: "L'acte par lequel le Mont cède à la Maison Marrel la grange du bas et ses vignes.",
        text: "*Le Mont-Taciturne cède à la Maison Marrel, en paiement de trois mille ducats sur sa dette, la grange du bas, ses vignes, ses pressoirs, et les terres jusqu'à la borne du Saule, {{loupe#iiim_acte_clause|avec leurs dépendances|avec la crypte creusée sous la salle des voix et tout ce qu'elle renferme, à remettre au porteur de la quittance quand il la présentera}}. Signé, Évrard, abbé. Pour la Maison, C. Marrel.*" },
      iiim_quittance: { name: "La quittance du Mont", kind: "document", form: "acte", unique: true, desc: "La reconnaissance de dette de l'abbé du Mont envers la Maison Marrel, au sceau noir.",
        text: "*Reconnaissance de dette du Mont-Taciturne envers la Maison Marrel, trois mille ducats, payables à présentation. {{loupe#iiim_quittance_dos|Fait au Mont, à la Saint-Martin. Évrard, abbé|Le porteur de la présente entre en possession de la crypte, selon l'acte de la grange. Contresigné : L. Brunel, pour la Maison}}.*" },
      iiim_lettre_lambert: { name: "La lettre de Brunel au pèlerin", kind: "document", form: "lettre", unique: true, desc: "Une lettre trouvée dans la besace de Séverin Lambert, d'une main régulière.",
        text: "*Séverin,*\n\n*{{loupe#iiim_lettre_brunel|Prie pour moi à la Saint-Gilles, et rapporte-moi du vin du Mont|Ne présente pas la quittance au chapitre. Fais ouvrir l'abbé de nuit, seul. Si le chercheur d'Odeline monte, laisse-le chercher la porte pour toi : il entend sous les mots. Puis prends ce qu'il rapporte}}. Les affaires vont. Madame est contente de toi.*\n\n*{{loupe#iiim_lettre_gaucelm|Salue le sergent Gaucelm si tu le croises|Le sergent Gaucelm est payé jusqu'à la fin du mois. S'il change de camp, dis-le-moi : je saurai quoi faire de sa fille}}.*\n\n*— L. B.*" },
      iiim_tr_calice: { name: "Le calice de saint Taciturne", kind: "tresor", price: 300, unique: true, desc: "Un calice d'or fin ciselé de vigne, serti de trois grenats, le vrai, que le cellérier avait mis en gage chez le pèlerin." },
      iiim_tr_bourse: { name: "La bourse du sonneur", kind: "tresor", price: 90, unique: true, desc: "Quarante pièces d'argent à l'effigie de la reine Ysaure, dans une bourse de cuir durci au suif." },
    },
    enemies: {
      iiim_homme: { name: "Homme de main de la Banque", look: "humain", pv: 30, att: 56, def: 24, dmg: 7, desc: "Un cavalier en manteau de laine sombre, une épée courte et une matraque plombée, payé par la Maison Marrel." },
      iiim_severin: { name: "Séverin Lambert", look: "humain", pv: 70, att: 64, def: 26, dmg: 8, desc: "Le « pèlerin » de la Banque : une lame fine sortie du bâton de marche, et la patience d'un homme qui a appris chez Lothaire Brunel." },
    },
    clues: {
      iiim_c_fondation: { rev: "T", short: "Les annales : la fondation du Mont", text: "Annales du Mont, an premier après la nuit des Comptoirs : Aymeric Vasse, chancelier de la reine, monte au Mont avec douze secrétaires de la chancellerie ; ils font vœu de taire ce qu'ils savent, et de le garder jusqu'à ce qu'on le leur redemande." },
      iiim_c_registre: { rev: "R", short: "Les annales : le Registre en langue des mains", text: "Annales du Mont, an quatrième, sous l'encre visible : la reine a dicté son témoignage par signes dans la salle des voix ; le frère qui tenait la plume l'a mis en écriture dans la langue des mains, que seul un frère du Mont, ou un Taiseur, sait lire." },
      iiim_c_voix: { rev: "O", short: "La salle des voix : « Tu apprendras… »", text: "Dans la salle des voix, il y a trente ans, la voix de frère Ignace à un novice nommé Gildas : « Tu apprendras à dire vrai en taisant tout. »" },
    },
    epilogue: [
      { if: { all: [{ has: "iiim:novice" }, { has: "iiim:novice_parti" }] }, text: "**Florent.** Il descendit dans la vallée et se loua chez un tonnelier d'Orle. Il parla beaucoup, toute sa vie, et vite, comme on rattrape un retard." },
      { if: { all: [{ has: "iiim:novice" }, { not: { has: "iiim:novice_parti" } }] }, text: "**Florent.** Il prononça ses vœux à la Saint-Michel suivante, et sarcla le carré de sauge du cloître jusqu'à sa mort." },
      { if: { all: [{ has: "iiim:reliquaire" }, { has: "iiim:calice_rendu" }] }, text: "**Le calice de saint Taciturne.** Il reprit sa place sur son coussin de velours. Le cellérier fut envoyé dans une grange du Mont, où il compta des sacs d'avoine jusqu'à sa mort." },
      { if: { all: [{ has: "iiim:reliquaire" }, { has: "iiim:calice_garde" }] }, text: "**Le calice de saint Taciturne.** Le Mont dit la messe, jusqu'à la fin du siècle, dans un calice de cuivre doré. Aucun frère ne le fit remarquer à l'abbé." },
    ],
    quests: [
      { id: "IIIM_novice", act: "III", kind: "annexe", title: "Le novice qui veut partir", start: "IIIM_novice", echo: "iiim:novice" },
      { id: "IIIM_terres", act: "III", kind: "annexe", title: "La grange vendue", start: "IIIM_grange", echo: "iiim:terres" },
      { id: "IIIM_reliquaire", act: "III", kind: "annexe", title: "Le calice de saint Taciturne", start: "IIIM_reliquaire", echo: "iiim:reliquaire", closes: { all: [{ has: "iiim:pelerin_parti" }, { not: { item: "iiim_tr_calice" } }] } },
    ],
    veils: {
      iiim_annales_registre: { fx: { clue: "iiim_c_registre", ep: ["perso", 1000] } },
      iiim_voix_ignace: { fx: { clue: "iiim_c_voix", ep: ["perso", 1500] } },
      iiim_registre_hotes: { fx: { ep: ["perso", 500] } },
      iiim_tombe: { fx: { ep: ["perso", 600] } },
      iiim_chapitre_aveu: { fx: { ep: ["perso", 800] } },
      iiim_page_grattee: { fx: { ep: ["perso", 600] } },
    },
  },
};
