// Act III, « Les Dents de Morgue » (days 9 and 10): the crew's assembly, the accusation, the second assembly for the
// way home, the night of the Teeth and the seven endings. The epilogue tells what became of each person on board.
function endFx(id, more) { return Object.assign({ flag: "fin:" + id, ep: ["histoire", 2000] }, more || {}); }
var FERS = { has: "morvan:fers" };
var GOT = { all: [{ has: "accuse:M:qui" }, { has: "accuse:M:preuve" }] };
var PILOTE = { any: [{ has: "treguer:abord" }] };

module.exports = { passages: {
  // ------------------------------------------------------------------ the assembly
  C_assemblee: {
    act: "III", title: "L'assemblée", place: "pont",
    text: [
      "Le neuvième jour, à neuf heures, Guénolé fait siffler l'équipage au pied du grand mât. En bas restent seulement l'homme de barre et le mousse de la cambuse. Les autres sont là, trente visages tannés, debout sur un pont qui roule.",
      { if: { has: "cap:soigne" }, text: "Le capitaine Coët est vivant. Il a repris des couleurs, mais Daoulas lui interdit de se lever avant trois jours : son cœur bat encore trop lentement. Il a fait dire à l'équipage qu'il acceptait par avance ce que l'assemblée déciderait pour ces trois jours." },
      { if: { all: [{ not: { has: "cap:soigne" } }, { has: "marche:malade" }] }, text: "Depuis la nuit dernière, le capitaine Coët regarde les visages sans les reconnaître. Daoulas sort de sa chambre pour l'assemblée, les yeux rouges, et reste debout près de l'escalier de la dunette." },
      { if: { has: "mutinerie" }, text: "Depuis la mutinerie, le second commande. L'assemblée doit dire si l'équipage le garde." },
      "Le second monte sur le cabestan, à côté de Guénolé. Il parle bien, comme toujours, avec cet art des prédicateurs et des sergents recruteurs, qui laissent chaque auditeur persuadé qu'on parlait pour lui seul. Il parle du capitaine, qu'il respecte ; des Dents, qu'il connaît ; de Marbecq, à deux jours à peine. Il appelle chaque homme par son prénom, et il n'en oublie aucun. Quand il descend, plusieurs lui tapent sur l'épaule.",
      "Guénolé se tourne vers toi. « Le subrécargue a une voix, lui aussi. C'est l'usage. »",
    ],
    fx: { set: { mer: "brumes" } },
    council: { motion: "commandement", to: "C_apres", label: "Passer au vote" },
  },
  C_apres: {
    act: "III", title: "Après le vote", place: "pont",
    text: [
      { if: { vote: "commandement", is: "adopte" }, text: "La proposition est adoptée. Le second remercie l'équipage d'un salut de la main, puis il monte à la dunette et donne la route à Kerlo devant tout le monde : sud-sud-ouest. « Nous serons devant les Dents demain soir, dit-il. Nous passerons de nuit. La lune se lève tard, et la Passe des Veuves se voit mieux au phare qu'au soleil. »" },
      { if: { vote: "commandement", is: "rejete" }, text: "La proposition est rejetée. Un murmure court dans l'équipage. Guénolé annonce que la Sterne sera conduite jusqu'à Marbecq, au nom du capitaine, par quatre personnes ensemble : le maître d'équipage, le timonier, le chirurgien et le subrécargue. Le second s'incline avec un sourire et retourne à sa chambre." },
      { if: { all: [{ vote: "commandement", is: "adopte" }, { has: "kerlo:route" }] }, text: "Kerlo répète la route à voix haute, sans la discuter. Tu le vois ensuite jeter un coup d'œil à la carte du capitaine, épinglée dans l'habitacle, et sa main s'attarde sur la roue." },
      "On sonne la soupe. Les hommes se dispersent. Il reste un jour et demi avant les Dents de Morgue.",
    ],
    choices: [{ back: "H_pont" }],
  },

  // ------------------------------------------------------------------ the accusation
  A_accuser: {
    act: "III", title: "Devant l'équipage", place: "pont",
    accuse: { mystery: "M", label: "Parler devant l'équipage",
      to: [
        { if: GOT, to: "A_fers" },
        { if: { has: "accuse:M:qui" }, to: "A_rire" },
        { to: "A_tort" },
      ] },
    text: [
      "Guénolé siffle l'équipage une seconde fois. Les hommes viennent de mauvaise grâce, en s'essuyant les mains sur leurs culottes. Le second s'adosse au grand mât, les bras croisés, et attend comme tout le monde.",
      { if: { has: "guenole:allie" }, text: "Guénolé se place derrière toi, avec six hommes de sa bordée. Ils ont tous une barre d'anspect à la main." },
      "Tu montes sur le panneau de la grande écoutille. Trente paires d'yeux se lèvent vers toi.",
    ],
    choices: [{ label: "Renoncer, et renvoyer les hommes au travail", fx: { stock: { equipage: -5 } }, to: "H_pont" }],
  },
  A_fers: {
    act: "III", title: "Devant l'équipage", place: "pont",
    text: [
      "Tu dis le nom de Morvan Le Hir. Puis tu poses les choses une à une sur le panneau, devant tout le monde, et tu laisses les hommes les toucher, les soupeser, se les passer de main en main.",
      { if: { has: "accuse:M:mobile" }, text: "Tu leur dis pourquoi : quarante mille écus d'assurance sur un navire et une cargaison qui en valent dix. Tu leur dis ce que vaut, pour un armateur ruiné, un navire qui coule avec trente hommes à bord. Les visages se ferment un par un." },
      { if: { not: { has: "accuse:M:mobile" } }, text: "Les mots te manquent pour dire pourquoi. Guénolé les trouve pour toi, d'une voix sourde : « Un navire perdu, ça se paie. Quelqu'un touche. »" },
      "Le second décroise les bras. Il cherche des yeux un homme, puis un autre, ceux qui lui tapaient sur l'épaule l'avant-veille. Tous regardent leurs pieds.",
      "Guénolé s'avance avec les fers. Le second tend lui-même les poignets, et il sourit encore. « Tu as fait du bon travail, dit-il en passant devant toi. Corbière s'est trompé de subrécargue. »",
      "On l'enferme dans la soute aux voiles, sous le gaillard, avec une sentinelle devant la porte. Ses trois hommes de confiance rendent leurs coutelas sans combattre.",
    ],
    fx: { flag: ["morvan:fers", "m:verite"], set: { commandement: "conseil" }, stock: { equipage: 20 }, regard: { guenole: "allie" }, ep: ["histoire", 3000] },
    choices: [{ label: "Prendre la route de la carte avec Kerlo", to: "H_pont" }],
  },
  A_rire: {
    act: "III", title: "Devant l'équipage", place: "pont",
    text: [
      "Tu dis le nom de Morvan Le Hir. Un silence. Puis le second rit, de bon cœur, et quelques hommes rient avec lui.",
      "« Le subrécargue a de l'imagination, dit-il. Il faut dire qu'il a eu peur, depuis Gavre. On le comprend. » Il te pose la main sur l'épaule, très doucement, devant tout le monde. « Qu'on lui donne une ration de rhum, et qu'il aille dormir. »",
      "Les hommes retournent au travail : ce que tu as posé sur le panneau ne suffit pas à les convaincre. De la dunette, le second te suit des yeux.",
    ],
    fx: { flag: "morvan:alerte", stock: { equipage: -10 }, regard: { morvan: "hostile" } },
    choices: [{ label: "Descendre du panneau", to: "H_pont" }],
  },
  A_tort: {
    act: "III", title: "Devant l'équipage", place: "pont",
    text: [
      { if: { is: { "accuse-M-qui": "guenole" } }, text: "Tu dis le nom de Guénolé Le Bihan. Le maître d'équipage pâlit sous son hâle. Il te regarde longtemps, puis il s'en va à l'avant, le dos raide." },
      { if: { is: { "accuse-M-qui": "kerlo" } }, text: "Tu dis le nom d'Yves Kerlo. À la barre, le timonier tourne la tête pour la première fois du voyage. « Moi ? » dit-il. Et il retourne à son compas." },
      { if: { is: { "accuse-M-qui": "rozenn" } }, text: "Tu dis le nom de Rozenn Le Dû. La cuisinière pose sa louche sur le panneau, devant toi. « Fais-la toi-même, ta soupe, ce soir. » Tout le bord s'en souviendra." },
      { if: { is: { "accuse-M-qui": "daoulas" } }, text: "Tu dis le nom de Lucien Daoulas. Le chirurgien ôte ses lunettes et les essuie longuement. « Je soigne ce capitaine jour et nuit depuis une semaine », dit-il seulement." },
      { if: { is: { "accuse-M-qui": "erwan" } }, text: "Tu dis le nom d'Erwan Le Goff. Le jeune matelot blêmit et regarde vers la dunette. Les hommes le regardent aussi, puis ils te regardent, toi. Erwan a peut-être percé des tonneaux. Personne ici ne le croit capable de tenir un navire entier dans sa main." },
      "Le second laisse passer un long moment. Puis il dit, d'une voix triste : « Je crois qu'on a tous besoin de repos. » L'équipage se disperse en grommelant.",
    ],
    fx: { flag: "morvan:alerte", stock: { equipage: -15 } },
    choices: [{ label: "Descendre du panneau", to: "H_pont" }],
  },

  // ------------------------------------------------------------------ the way home
  C_retour: {
    act: "III", title: "La seconde assemblée", place: "pont",
    text: [
      "Tu vas trouver Guénolé à l'avant et tu lui demandes une seconde assemblée. Il fronce les sourcils. « Pour quoi faire ? » Tu le lui dis. Il réfléchit longtemps, sa pipe froide entre les dents, puis il porte son sifflet à sa bouche.",
      "Devant l'équipage, tu gardes les noms pour toi. Tu dis seulement ce que tu as vu, à Port-Aubier, à Gavre, à bord. Tu dis qu'à Marbecq, trente matelots pèseront peu contre la maison Corbière, et qu'à Port-Aubier, la Chambre des Assurances écoutera, parce que c'est elle qui paiera.",
      { if: FERS, text: "Le second, aux fers dans la soute aux voiles, entend tout à travers la cloison. On l'entend rire, une fois." },
      { if: { not: FERS }, text: "Le second écoute sans t'interrompre, appuyé à la lisse, avec l'air d'un homme qui regarde jouer des enfants." },
    ],
    council: { motion: "retour", to: "C_retour_vote", label: "Passer au vote" },
  },
  C_retour_vote: {
    act: "III", title: "La seconde assemblée", place: "pont",
    text: [
      { if: { vote: "retour", is: "adopte" }, text: "Le retour est adopté. Il y a un moment de flottement, puis Guénolé siffle la manœuvre, et les hommes courent aux bras de vergue." },
      { if: { vote: "retour", is: "rejete" }, text: "Le retour est rejeté. La Sterne continue sur Marbecq. Les hommes retournent au travail plus vite qu'ils n'étaient venus." },
    ],
    choices: [
      { label: "Virer de bord", if: { vote: "retour", is: "adopte" }, hide: { not: { vote: "retour", is: "adopte" } }, to: "F_retour" },
      { if: { vote: "retour", is: "rejete" }, hide: { not: { vote: "retour", is: "rejete" } }, back: "H_pont" },
    ],
  },

  // ------------------------------------------------------------------ the night of the Teeth
  X_dents: {
    act: "III", title: "Les Dents de Morgue", place: "pont",
    text: [
      "Le dixième jour, à neuf heures du soir, la vigie annonce les Dents.",
      "On les entend avant de les voir : un grondement sourd, à l'avant, qui monte et retombe avec la houle, et que l'oreille prend d'abord pour le bruit de son propre sang. Puis, dans le noir, une longue ligne blanche se dessine d'un bord à l'autre de l'horizon, mince, presque paisible ; il faut un moment à l'esprit pour consentir à ce qu'elle signifie. C'est la mer qui se brise sur six lieues de rochers.",
      { if: FERS, text: "Le second est aux fers sous le gaillard. Sur la dunette, Guénolé et Kerlo t'attendent à côté de la barre, avec Daoulas qui tient une lanterne. « À toi de dire », dit Guénolé." },
      { if: { not: FERS }, text: "Sur la dunette, le second a pris la barre lui-même. Quatre de ses hommes se tiennent en haut de l'escalier, des coutelas passés dans la ceinture et des pistolets à la main. Il a écarté Kerlo d'un mot. La Sterne court droit sur la partie ouest de la ligne blanche, là où elle est la plus large." },
      { if: { all: [{ not: FERS }, { has: "chaloupe:videe" }] }, text: "Un des hommes du second descend à la chaloupe avec une lanterne, soulève la bâche, et remonte en courant. Il parle à l'oreille du second, qui jure, longuement, avec une variété de termes qui doit beaucoup aux ports." },
      { if: { all: [{ not: FERS }, { has: "morvan:offre" }] }, text: "Le second te cherche des yeux par-dessus la foule. Il te fait un petit signe de tête vers l'arrière, là où la chaloupe est saisie sur ses chantiers." },
    ],
    fx: { set: { mer: "dents" }, meteo: { is: "frais", hours: 8 } },
    choices: [
      { label: "Monter à la barre avec Kerlo", if: FERS, hide: { not: FERS }, to: "X_passe" },
      { label: "Rassembler les tiens et reprendre la barre", if: { not: FERS }, hide: FERS, to: "X_combat" },
      { label: "Rejoindre le second à la chaloupe", if: { all: [{ not: FERS }, { has: "morvan:offre" }] }, hide: { not: { all: [{ not: FERS }, { has: "morvan:offre" }] } }, to: "F_chaloupe" },
      { label: "Laisser Guénolé et ses hommes prendre le navire", if: { all: [{ not: FERS }, { has: "guenole:allie" }, { has: "sait:morvan_corbiere" }] }, hide: { not: { all: [{ not: FERS }, { has: "guenole:allie" }, { has: "sait:morvan_corbiere" }] } }, to: "F_libres" },
    ],
  },
  X_combat: {
    act: "III", title: "La nuit des Dents", place: "pont",
    text: [
      "Tu descends au gaillard en courant. Tu réveilles ceux qui dorment, tu appelles ceux qui veillent. On sort des barres d'anspect, des haches, un vieux mousquet. Le grondement des brisants couvre tout le reste.",
    ],
    battle: "dents",
  },
  X_barre: {
    act: "III", title: "La barre", place: "pont",
    text: [
      "Le dernier des hommes du second jette son coutelas sur le pont et lève les mains. Le second lui-même est assis contre l'habitacle, une jambe repliée sous lui. Armelle lui tient le fer de sa hache sous le menton.",
      "On l'attache au grand mât avec ses hommes. Il se laisse faire, et regarde la ligne blanche des brisants, qui s'est beaucoup rapprochée.",
      "« Si tu veux voir Marbecq, dit-il, il faut virer maintenant. Je te laisse deviner de quel bord. »",
    ],
    choices: [{ label: "Prendre la barre", to: "X_passe" }],
  },
  X_perdue: {
    act: "III", title: "La barre", place: "pont",
    text: [
      "Un coup de crosse t'envoie rouler contre la lisse. Quand tu te relèves, la dunette est vide.",
      "Le second et ses hommes ont mis la chaloupe à l'eau. Elle s'éloigne déjà sur la houle, quatre avirons de chaque bord, une lanterne à l'arrière. Avant de partir, le second a amarré la roue de la barre avec un bout de filin, serré de trois tours. La Sterne court seule sur les brisants.",
      "Kerlo se relève, du sang sur la tempe. Il tranche le filin d'un coup de couteau et se jette sur la roue.",
    ],
    fx: { stock: { coque: -10 } },
    choices: [{ label: "Aider Kerlo à la barre", to: "X_passe" }],
  },
  X_passe: {
    act: "III", title: "La Passe des Veuves", place: "pont",
    text: [
      "Kerlo tient la barre. Le grondement est partout : devant, à droite, à gauche ; il entre par la plante des pieds et monte jusqu'aux dents. L'eau et le ciel se confondent. Les gerbes d'écume montent plus haut que les vergues et retombent en pluie sur le pont.",
      { if: PILOTE, text: "Le vieux Tréguer est monté à la dunette. Il a écarté Kerlo d'un geste et pris la roue dans ses mains noueuses. Il garde les yeux fermés. Il écoute la mer." },
      { if: { not: PILOTE }, text: "Deux lueurs percent la nuit, devant. À droite, loin et haut, une lumière pâle et fixe, qui grossit très lentement. À gauche, plus près et plus bas, une lueur blanche et plus vive, qui tremble, s'allonge, s'éteint et se rallume au rythme de la houle." },
      { if: { all: [{ not: PILOTE }, { item: "routier" }] }, text: "Le routier de Tréguer est ouvert sur l'habitacle, sous la lanterne, trempé." },
      { if: { not: PILOTE }, text: "Kerlo te regarde. « Laquelle ? » crie-t-il. « Il faut choisir maintenant ! »" },
    ],
    choices: [
      { label: "Laisser Tréguer gouverner", if: PILOTE, hide: { not: PILOTE }, takes: 2, fx: { flag: "dents:passees" }, to: "X_passees" },
      { label: "Gouverner sur la lumière de droite, haute et fixe", if: { not: PILOTE }, hide: PILOTE, takes: 2,
        test: { dom: "nature", diff: -10, label: "Nature", help: [{ if: { has: "dents:passe" }, v: 20 }, { if: { has: "kerlo:route" }, v: 10 }, { if: { has: "passe:marin" }, v: 10 }, { with: "armelle", v: 5 }, { if: { has: "morvan:fui" }, v: -10 }] },
        win: { fx: { flag: "dents:passees" }, to: "X_passees" }, lose: { fx: { stock: { coque: -35 } }, to: "X_touche" } },
      { label: "Gouverner sur la lumière de gauche, la plus vive", if: { not: PILOTE }, hide: PILOTE, takes: 1, to: "F_naufrage" },
    ],
  },
  X_touche: {
    act: "III", title: "La Passe des Veuves", place: "pont",
    text: [
      "Un choc formidable soulève la Sterne et la jette sur le flanc. Un grand bruit de bois déchiré monte de la cale. Les hommes roulent sur le pont. Le mât de misaine plie, craque, et tient.",
      "Puis la houle soulève le navire et le reprend. La Sterne racle le rocher sur toute sa longueur, et passe.",
      { if: { stock: "coque", min: 30 }, text: "Armelle remonte de la cale, trempée jusqu'à la poitrine. « Elle tient, crie-t-elle. Elle prend l'eau, mais elle tient. Aux pompes, tout le monde ! »" },
      { if: { stock: "coque", max: 29 }, text: "Armelle remonte de la cale en hurlant. La coque est ouverte sur trois membrures. L'eau entre à pleins flots, et la Sterne s'enfonce par l'avant." },
    ],
    choices: [
      { label: "Faire pomper jusqu'au jour", if: { stock: "coque", min: 30 }, hide: { stock: "coque", max: 29 }, takes: 3, fx: { fatigue: 2, flag: "dents:passees" }, to: "X_passees" },
      { label: "Faire mettre les canots à la mer", if: { stock: "coque", max: 29 }, hide: { stock: "coque", min: 30 }, to: "F_naufrage" },
    ],
  },
  X_passees: {
    act: "III", title: "Le phare de Marbecq", place: "pont",
    text: [
      "Le grondement s'éloigne sur l'arrière. La mer se creuse, longue et lente, et la Sterne se remet à rouler comme un navire, au lieu de bondir comme une bête.",
      "Devant, la lumière fixe grossit, monte, et devient une tour sur une colline. Quand le jour se lève, gris et rose, Marbecq apparaît au pied du phare : des toits blancs, un port, des barques qui sortent pour la pêche du matin.",
      "Les hommes gardent le silence. Ils s'assoient sur le pont, là où ils se trouvent, et regardent la terre.",
    ],
    fx: { set: { mer: "cote" }, meteo: "calme" },
    choices: [
      { label: "Entrer au port", if: { not: { has: "cap:mort" } }, hide: { has: "cap:mort" }, to: "F_marbecq" },
      { label: "Entrer au port", if: { has: "cap:mort" }, hide: { not: { has: "cap:mort" } }, to: "F_capitaine" },
    ],
  },

  // ------------------------------------------------------------------ the endings
  F_marbecq: {
    act: "III", title: "Marbecq", place: "marbecq", end: true, epilogue: true, fx: endFx("marbecq", { quest: "III_dents" }),
    text: [
      "La Sterne entre au port de Marbecq à huit heures du matin, sous ses huniers, la coque balafrée, les pompes crachant toujours. On s'attroupe sur le quai pour la regarder.",
      "Le capitaine Coët est sur la dunette, appuyé sur Daoulas, pâle comme sa chemise. Il a voulu être debout pour l'entrée au port. Il donne les ordres d'une voix faible, et Guénolé les répète au sifflet.",
      { if: FERS, text: "On débarque le second les fers aux poignets, entre deux sergents du port. Il salue la foule d'un mouvement de tête, comme un passager qui descend après une bonne traversée." },
      { if: { has: "morvan:fui" }, text: "La chaloupe du second manque au port. Le capitaine porte plainte auprès du lieutenant de l'amirauté, qui envoie un cotre fouiller la côte." },
      "Le lendemain, devant le lieutenant de l'amirauté, on ouvre les caisses de la cale une à une, sur le quai : draps sur le dessus, sable et galets en dessous. Les portefaix qui les déchargent s'arrêtent pour regarder, et la nouvelle fait le tour du port avant midi.",
      { if: { has: "manifeste:refuse" }, text: "Le lieutenant te demande qui a signé le manifeste. Tu lui montres la dernière page, vierge. Il hoche la tête et écrit quelque chose dans son registre." },
      { if: { all: [{ has: "manifeste:signe" }, { not: { has: "manifeste:reserve" } }] }, text: "Le lieutenant te demande qui a signé le manifeste. Tu lui montres ton nom, au bas de la dernière page. Il te regarde longuement. Il te faudra du temps, et le témoignage de tout l'équipage, pour qu'il te croie." },
      { if: { has: "manifeste:reserve" }, text: "Le lieutenant te demande qui a signé le manifeste. Tu lui montres ton nom, et en dessous, les quatre mots : « sous réserve de vérification ». Il sourit pour la première fois." },
    ],
  },
  F_capitaine: {
    act: "III", title: "Marbecq", place: "marbecq", end: true, epilogue: true, fx: endFx("capitaine", { quest: "III_dents" }),
    text: [
      "La Sterne entre au port de Marbecq à huit heures du matin, son pavillon en berne, la coque balafrée, les pompes crachant toujours.",
      "Le capitaine Coët est dans sa chambre, cousu dans sa toile, un boulet à ses pieds. L'équipage a voté contre l'immersion : on l'enterrera à terre, dans le cimetière des marins de Marbecq, face à la mer.",
      "C'est toi qui as donné les ordres pendant la nuit. Guénolé les a répétés au sifflet. Kerlo les a suivis à la barre. Sur le quai, le lieutenant de l'amirauté demande à parler au capitaine. Guénolé te désigne du menton.",
      { if: FERS, text: "On débarque le second les fers aux poignets, entre deux sergents. En passant devant la chambre du capitaine, il ralentit, et les sergents le poussent." },
      { if: { has: "morvan:fui" }, text: "La chaloupe du second manque au port. Le lieutenant envoie un cotre fouiller la côte." },
      "Le lendemain, on ouvre les caisses de la cale sur le quai : draps sur le dessus, sable et galets en dessous. Le lieutenant fait mettre les scellés sur ce qui reste à bord.",
      "Au cimetière, Guénolé t'apporte la longue-vue du capitaine, dans son étui de cuir. « Il aurait voulu que ce soit toi », dit-il. Tu sais que c'est faux. Tu la prends quand même.",
    ],
  },
  F_naufrage: {
    act: "III", title: "La Mâchoire", end: true, epilogue: true, fx: endFx("naufrage"),
    text: [
      "La Sterne touche la Mâchoire à pleine vitesse. Le choc arrache le mât de misaine, qui s'abat sur le pont dans un fracas de vergues et de cordages. L'eau entre partout à la fois.",
      "Les caisses de la cale crèvent. Le sable se répand dans l'eau noire, et le navire s'enfonce par l'avant, lourd comme la pierre qu'il transportait.",
      { if: { all: [{ item: "bouee" }, { present: "gabin" }] }, text: "Gabin est passé par-dessus bord. Tu lui lances la bouée de liège, au jugé, dans le noir. La ligne se tend. Tu tires, tu tires encore, tu le ramènes contre la coque, et des mains le hissent sur le rocher." },
      "Tu te retrouves sur une roche plate, au milieu des brisants, avec une quinzaine d'hommes trempés qui se tiennent les uns aux autres. Le jour se lève sur la Sterne couchée sur le flanc, à cinquante brasses. Ses mâts pointent vers le ciel comme des doigts.",
      "Les barques de Marbecq arrivent dans la matinée. On compte les vivants dans la première barque, puis dans la deuxième. Le compte est court.",
    ],
  },
  F_chaloupe: {
    act: "III", title: "La chaloupe", end: true, epilogue: true, fx: endFx("chaloupe", { flag: ["fin:chaloupe", "morvan:fui"] }),
    text: [
      "Tu te glisses à l'arrière pendant que les hommes regardent les brisants. Le second t'attend près de la chaloupe. Il te tend la main pour t'aider à enjamber le plat-bord. « Je savais que tu étais raisonnable », dit-il.",
      "La chaloupe touche l'eau. Quatre hommes prennent les avirons. Derrière vous, la Sterne file sur la ligne blanche, toutes voiles dehors, sa barre amarrée. Au moment où la chaloupe s'éloigne, des cris montent du bord.",
      { if: { has: "chaloupe:videe" }, text: "Les barils de la chaloupe sont vides, et le compas a disparu. Vous ramez trois jours sur la mer des Brumes, en buvant la pluie recueillie dans la voile tendue. Le troisième soir, une barque de pêche de Marbecq vous ramasse. Le second se tait depuis la veille." },
      { if: { not: { has: "chaloupe:videe" } }, text: "Le second gouverne au compas, tranquillement, en sifflotant. Au matin, il fait route vers le sud des Îles Blanches, loin de Marbecq. « On dira qu'on a été jetés à la côte, dit-il. Cinq rescapés. Comme la dernière fois. »" },
      "Tu touches tes mille écus de Corbière six mois plus tard, par un homme de loi que tu ne reverras plus. La Chambre des Assurances a payé.",
    ],
  },
  F_retour: {
    act: "III", title: "Port-Aubier", end: true, epilogue: true, fx: endFx("retour", { quest: "III_dents" }),
    text: [
      "La Sterne vire de bord et remonte au nord, contre le vent, à petites bordées. Le voyage de retour dure neuf jours. On rationne l'eau jusqu'à Gavre, où l'on refait le plein.",
      { if: FERS, text: "Le second reste aux fers sous le gaillard. Erwan lui porte sa soupe deux fois par jour, sur ordre de Guénolé. Le second lui parle à travers la porte. Erwan pose l'écuelle et s'en va." },
      { if: { not: FERS }, text: "La deuxième nuit, la chaloupe disparaît, avec le second et trois de ses hommes. Au matin, on trouve les saisines tranchées net. Guénolé regarde la mer vide et fait reprendre la route." },
      "À Port-Aubier, tu descends à terre avec Guénolé, Daoulas et tout ce que tu as rassemblé. À la Chambre des Assurances, la greffière Dornac écoute tout, puis elle va chercher son président. Le président va chercher le prévôt.",
      "Le lendemain, on ouvre les caisses de la Sterne sur le quai des Morutiers, devant la moitié de la ville : draps sur le dessus, sable et galets en dessous.",
      "Maître Anselme Corbière est arrêté chez lui le soir même. Il ouvre la porte en robe de chambre, et il tend les mains.",
    ],
  },
  F_derive: {
    title: "Le canot", end: true, epilogue: true, fx: endFx("derive"),
    text: [
      "On te désarme. On te lie les mains, sans brutalité. Guénolé fait mettre le petit canot à l'eau, avec un baril d'eau, un sac de biscuit et une paire d'avirons.",
      "« L'île Ronce est à une journée dans le nord-est, dit-il. Le courant t'y portera. » Il te regarde dans les yeux. « Je regrette. Tu as choisi le mauvais côté de la porte. »",
      "Le canot s'éloigne de la Sterne. Tu regardes le navire diminuer, puis se fondre dans la brume.",
      "Deux jours plus tard, une barque de pêcheurs de Ronce te trouve à moitié mort{e} de soif, à trois lieues de l'île. Soizic, la gardienne du phare, te soigne une semaine. Tu apprends le reste par les pêcheurs, des semaines plus tard, à Gavre.",
    ],
  },
  F_libres: {
    act: "III", title: "Les hommes du gaillard", end: true, epilogue: true, fx: endFx("libres", { quest: "III_dents" }),
    text: [
      "Tu fais un signe à Guénolé. Il porte son sifflet à sa bouche et donne trois coups brefs.",
      "En un instant, la bordée de Guénolé est sur la dunette. Les hommes du second sont désarmés avant d'avoir compris. Le second lui-même se retrouve à plat ventre sur le pont, le pied de Guénolé entre les épaules. Kerlo reprend la barre et vire de bord, loin des brisants.",
      "On met la Sterne en panne au large des Dents, et l'on attend le jour. À l'aube, on franchit la Passe des Veuves sous voilure réduite, la sonde à la main.",
      "Devant Marbecq, l'équipage tient une dernière assemblée, sans toi. Quand tu remontes sur le pont, Guénolé t'annonce la décision des hommes. La Sterne débarquera à Marbecq le capitaine, le chirurgien, le passager, le subrécargue, et le second les fers aux poignets. Puis elle repartira, pour les Antilles ou pour plus loin, et changera de nom en route.",
      "« Corbière voulait nous noyer pour quarante mille écus, dit Guénolé. Son navire, on le lui prend. C'est une dette. » Il te serre la main. « Tu n'as rien vu. »",
      "Le lendemain matin, la Sterne quitte le port de Marbecq sur la marée. Dans la nuit, elle a déjà jeté à l'eau quatre-vingt-dix caisses de sable.",
    ],
  },
},

epilogue: [
  { if: { has: "manifeste:refuse" }, text: "**Le manifeste.** Tu as refusé de le signer. Personne n'a pu te reprocher la cargaison de la Sterne." },
  { if: { has: "manifeste:reserve" }, text: "**Le manifeste.** Tu l'as signé sous réserve. Ces quatre mots ont suffi, devant le lieutenant de l'amirauté." },
  { if: { all: [{ has: "manifeste:signe" }, { not: { has: "manifeste:reserve" } }] }, text: "**Le manifeste.** Tu l'as signé. Ton nom est resté au bas de la dernière page, sous la liste des draps qui étaient du sable." },
  { if: { any: [{ has: "fin:marbecq" }, { has: "fin:capitaine" }, { has: "fin:retour" }] }, text: "**Maître Corbière.** L'armateur a été jugé à Port-Aubier pour la Sterne et pour la Bergeronnette. La Chambre des Assurances a saisi ses six navires et sa maison de la ville haute." },
  { if: { has: "fin:libres" }, text: "**Maître Corbière.** L'armateur a déclaré la Sterne volée, et réclamé l'assurance. La Chambre a ouvert une enquête, qui dure encore." },
  { if: { any: [{ has: "fin:naufrage" }, { has: "fin:chaloupe" }, { has: "fin:derive" }] }, text: "**Maître Corbière.** La Chambre des Assurances a payé la Sterne, après de longs mois. L'armateur a racheté deux navires." },
  { if: FERS, text: "**Morvan Le Hir.** Le second a été jugé pour la Sterne et pour la Bergeronnette. Il a souri au juge." },
  { if: { all: [{ has: "morvan:fui" }, { not: { has: "fin:chaloupe" } }] }, text: "**Morvan Le Hir.** Le second a disparu en chaloupe dans la nuit des Dents. On dit qu'on l'a vu, l'année suivante, sur un autre navire, sous un autre nom." },
  { if: { has: "fin:chaloupe" }, text: "**Morvan Le Hir.** Tu as partagé sa chaloupe. Tu as partagé aussi ce qu'il savait." },
  { if: { has: "cap:soigne" }, text: "**Le capitaine Coët.** Son cœur a retrouvé son pas. Il a repris la mer au printemps, sur un autre navire, et il ne boit plus que de l'eau." },
  { if: { has: "cap:mort" }, text: "**Le capitaine Coët.** Il repose à Marbecq, ou au fond de la mer des Brumes, selon la fin de son navire." },
  { if: { all: [{ has: "gabin:promesse" }, { not: { has: "fin:naufrage" } }, { not: { has: "fin:chaloupe" } }] }, text: "**Gabin.** Il est resté aux Îles Blanches, comme il l'avait dit. Un capitaine de Marbecq l'a pris comme mousse. Il garde la boussole de son père dans sa poche de poitrine." },
  { if: { all: [{ not: { has: "gabin:promesse" } }, { not: { has: "fin:chaloupe" } }] }, text: "**Gabin.** Il a hérité de la moitié de la maison Corbière, ou de ce qu'il en restait. Il a vendu les navires et acheté une librairie de cartes marines." },
  { if: { has: "fin:chaloupe" }, text: "**Gabin.** On n'a jamais su s'il était dans les barques de Marbecq, au matin des Dents." },
  { if: { has: "erwan:fers" }, text: "**Erwan Le Goff.** Il a percé les tonneaux pour une dette de jeu. Il a fait deux ans de bagne." },
  { if: { has: "erwan:temoin" }, text: "**Erwan Le Goff.** Il a témoigné contre le second. Le juge s'en est souvenu." },
  { if: { has: "treguer:abord" }, text: "**Joachim Tréguer.** Le vieux pilote a passé la Passe des Veuves une fois de plus. On dit à Gavre qu'il n'a plus bu depuis." },
  { if: { has: "lerac:parle" }, text: "**Thibaut Lerac.** L'ancien subrécargue a témoigné à son tour, sur sa jambe raide. Il a raconté l'escalier de l'entrepôt." },
  { if: { has: "dents:passe" }, text: "**Le pilote de Gavre.** Ce que savait Tréguer de la Passe des Veuves est monté à bord avec toi, cette nuit-là." },
  { if: { has: "fait:pompe" }, text: "**La pompe.** La grande pompe regarnie de cuirs neufs a aspiré jusqu'au dernier jour. Armelle l'a signée de ses initiales, au fer chaud." },
  { if: { has: "eau:coupable" }, text: "**Les tonneaux.** On a su qui les avait percés, et les hommes ont rendu à Armelle leur confiance." },
  { if: { has: "cale:ouverte" }, text: "**La cale.** Tu as ouvert une caisse au troisième jour, et tu as vu le sable avant tout le monde." },
  { if: { has: "eau:ronce" }, text: "**L'eau de Ronce.** Les barriques remplies à la source de l'île ont tenu la soif à distance jusqu'aux Dents." },
  { if: { has: "coffre:routier" }, text: "**Le coffre de bord.** Il y manquait douze écus au retour. Le routier de Tréguer, posé sur le registre, a suffi à les justifier." },
  { if: { has: "homme:sauve" }, text: "**L'homme à la mer.** Celui que tu as tiré de l'eau pendant la tempête de l'équinoxe raconte encore l'histoire dans les tavernes. Elle s'allonge un peu chaque année." },
  { if: { has: "homme:morvan" }, text: "**L'homme à la mer.** Celui que le second a tiré de l'eau pendant la tempête de l'équinoxe a gardé pour lui une reconnaissance têtue, quoi qu'on ait dit plus tard au tribunal." },
  { if: { all: [{ has: "armelle:consignee" }, { conf: "armelle", max: 49 }] }, text: "**Armelle Kerbrat.** Elle a fini le voyage consignée à sa cale. Elle se souvient de qui l'y a laissée." },
  { if: { conf: "armelle", min: 50 }, text: "**Armelle Kerbrat.** Elle est rentrée chez ses filles avec un petit cheval de bois de plus. La petite en a fait le chef des onze autres." },
  { if: { conf: "pierrick", min: 50 }, text: "**Pierrick.** Il a appris à lire les étoiles, puis les cartes. Il sera pilote." },
] };
