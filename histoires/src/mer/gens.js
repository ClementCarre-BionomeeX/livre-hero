// The people of the Sterne: what they say when one comes to them (at their hours, see base.js `people.at`), what they do
// when one shows them a clue (`confront`), and the rumours of the forecastle and of the Cormorant.
module.exports = { rumors: {
  gaillard: [
    { id: "g_bergeronnette", true: true, text: "Un vieux gabier raconte, en roulant sa chique, que la Bergeronnette a sombré sur les Dents par une nuit sans lune, et que la chaloupe des rescapés est arrivée à Marbecq avec ses barils encore à moitié pleins." },
    { id: "g_capitaine", true: false, text: "« Le vieux a le mauvais œil, dit un matelot. Trois navires sous ses ordres, trois naufrages. » Son voisin hausse les épaules : Coët n'a jamais perdu un navire en quarante ans, tout le monde le sait." },
    { id: "g_armelle", true: false, text: "On murmure qu'Armelle Kerbrat boit en cachette dans sa cale, et que c'est elle qui a laissé pourrir les cuirs des pompes." },
    { id: "g_second", true: true, text: "Un jeune matelot dit, admiratif, que le second a payé de sa poche les dettes de jeu de deux ou trois gars, à Port-Aubier, sans rien demander en échange. « Pas encore », corrige quelqu'un, et personne ne rit." },
    { id: "g_marbecq", true: true, text: "Un matelot qui a déjà fait le voyage raconte qu'à Marbecq, on paie l'eau douce plus cher que le vin, et que les filles du fort dansent pieds nus." },
    { id: "g_digitale", true: false, if: { has: "marche:malade" }, text: "On dit que le capitaine a le mal de cœur depuis toujours, qu'il se soigne en cachette, et qu'il ne verra pas Marbecq." },
    { id: "g_route", true: true, if: { seen: "R_depart" }, text: "Un homme de la bordée de Kerlo se plaint qu'on change de cap toutes les nuits, à la relève, et qu'on rattrape le jour ce qu'on a perdu la nuit, mais pas tout." },
  ],
  gavre: [
    { id: "v_treguer", true: true, text: "Un pêcheur de homards raconte que le vieux Tréguer a perdu son fils sur la Bergeronnette, et qu'il a juré de ne plus jamais piloter un navire Corbière. « Mais il a juré tant de choses. »" },
    { id: "v_dents", true: true, text: "On dit au comptoir qu'il y a, sur la Mâchoire, la pointe la plus à l'ouest des Dents, une lueur qui danse les nuits de grosse mer, à cause de l'écume sur les rochers, et que plus d'un navire l'a prise pour le phare de Marbecq." },
    { id: "v_sirene", true: false, text: "Une vieille assure qu'une femme aux cheveux verts chante sur les Dents les nuits d'équinoxe, et que ceux qui l'entendent tournent la barre vers elle." },
    { id: "v_corbiere", true: true, text: "Mère Ozanne dit, en essuyant un bol, que Maître Corbière a vendu deux navires cet été, et qu'un armateur qui vend ses navires, c'est un armateur qui a des dettes." },
  ],
}, passages: {
  // ------------------------------------------------------------------ the captain
  T_coet: {
    title: "Le capitaine Coët", back: true,
    text: [
      { first: true, text: "Le capitaine garde les yeux sur la voilure pendant que tu lui parles. Quand tu as fini, il dit : « Vous avez une question, ou vous faites la conversation ? Je ne fais pas la conversation. »" },
      { first: true, text: "Tu insistes. Il soupire. « Quarante ans de mer. Sept navires. Aucun perdu. Corbière m'a donné la Sterne parce que je suis le dernier capitaine de Port-Aubier qui ne lui demande pas de part sur la cargaison. Voilà. Maintenant, laissez-moi travailler. »" },
      { again: true, text: "Le capitaine Coët t'écoute en regardant ailleurs, te répond en trois mots, et retourne à sa voilure." },
      { with: "gabin", once: true, text: "Avant que tu partes, il ajoute sans tourner la tête : « Le petit. Qu'il ne monte pas dans la mâture. Son père n'avait pas le pied marin non plus. »" },
    ],
  },
  K_halos: {
    title: "La chambre du capitaine", place: "arriere", back: true, montrer: "coet",
    text: [
      { first: true, text: "La chambre du capitaine sent le vinaigre et le vomi. Le vieil homme est couché tout habillé sur sa couchette, une cuvette à portée de main. Il a le teint jaune, les lèvres grises, et il respire lentement, comme s'il comptait." },
      { first: true, text: "« Le cœur, dit-il. Daoulas dit que c'est le cœur. Il y a des jours où il bat si lentement que je l'attends. » Il montre la lampe de cuivre accrochée au plafond. « Et ça. Depuis deux jours, je vois des cercles jaunes autour des lumières. Jaunes comme des soucis. Daoulas dit que c'est la fatigue. »" },
      { first: true, text: "Il ferme les yeux. « Je ne mange plus. Je ne bois plus que mon grog du soir. Le second est un bon garçon, il me le monte lui-même tous les soirs, pour que je n'aie pas à descendre. »" },
      { again: true, before: ["cap:soigne", "cap:mort"], text: "Le capitaine est plus jaune que la veille. Il ouvre les yeux quand tu entres, te reconnaît, les referme." },
      { again: true, after: "cap:soigne", text: "Le capitaine est assis contre ses oreillers, un bol de bouillon sur les genoux. Il a encore le teint jaune, mais ses yeux suivent tout. « Les halos s'en vont, dit-il. Ce matin, la lampe n'avait plus qu'une couronne. Ce soir, elle n'en aura plus. »" },
      "Sur la tablette, à côté de la couchette, une chandelle brûle dans un bougeoir de cuivre.",
    ],
    fx: { clue: ["c_halos", "c_grog"] },
  },
  K_coet_digitale: {
    title: "La chambre du capitaine", place: "arriere", back: true,
    text: [
      "Tu dis au capitaine ce que t'a raconté l'apothicaire de Port-Aubier : une once de digitale, achetée par le second, pour son cœur.",
      "Le vieil homme ouvre les yeux. « Je n'ai jamais pris de digitale de ma vie. Mon cœur allait très bien à Port-Aubier. » Il regarde la lampe, ses cercles jaunes. Il se tait longtemps, et quand il parle, c'est à voix très basse. « Allez voir Daoulas. Et ne dites rien à personne. À personne, vous m'entendez. »",
    ],
    fx: { regard: { coet: "allie" } },
  },

  // ------------------------------------------------------------------ the surgeon
  T_daoulas: {
    title: "L'infirmerie", place: "arriere", back: true, montrer: "daoulas",
    text: [
      { first: true, text: "L'infirmerie est un réduit éclairé par un hublot, où tiennent une couchette, un coffre de chirurgien ouvert comme une boîte à couture, et une étagère de fioles calées dans de la paille. Maître Daoulas, en manches de chemise, verse quelques gouttes d'un flacon dans un verre d'eau, et le boit." },
      { first: true, text: "« Pour la main, dit-il en montrant ses doigts qui tremblent un peu. Trente ans de scie et de lancette, et la marine du roi par-dessus. » Il remonte ses lunettes. « Je soigne tout, sauf moi. Qu'est-ce qui vous amène ? »" },
      { again: true, text: "Daoulas lève les yeux de ses fioles. « Encore vous. Asseyez-vous, il n'y a qu'une place, et c'est la couchette. »" },
      { blessure: true, text: "Il regarde ta blessure par-dessus ses lunettes, claque la langue, et sort de quoi la nettoyer et la panser. « Ne bougez pas. Ça va piquer, et ensuite ça ira mieux. »" },
      { after: "marche:malade", before: ["c:verite", "cap:mort"], text: "« Le capitaine ? Le cœur. Il est vieux, il a trop bu, trop crié, trop vécu. Je lui donne de la saignée et du repos. Le reste est entre les mains de Dieu. » Il n'a pas l'air d'y croire beaucoup." },
    ],
    choices: [
      { label: "Lui faire panser tes blessures", blessure: true, fx: { soigner: ["cotes", "main", "arcade", "cheville"] }, back: "H_arriere" },
    ],
  },
  K_daoulas_digitale: {
    title: "L'infirmerie", place: "arriere", back: true, montrer: "daoulas",
    text: [
      "Daoulas écoute, sans t'interrompre, en tournant ses lunettes entre ses doigts.",
      { if: { clue: "c_digitale" }, text: "« De la digitale ? Je n'ai jamais prescrit de digitale au capitaine. Personne ne m'en a parlé. » Il se lève, prend un livre sur l'étagère, le feuillette, s'arrête sur une page." },
      { if: { clue: "c_halos" }, text: "« Des cercles jaunes autour des lumières. Le pouls lent, les nausées, le dégoût de manger. » Il pose le doigt sur la page. « C'est dans tous les traités. Je l'ai appris à vingt ans, et je ne l'ai pas vu. Je ne l'ai pas vu parce que je ne le cherchais pas. »" },
      { if: { not: { all: [{ clue: "c_digitale" }, { clue: "c_halos" }] } }, text: "Il referme le livre à moitié, le doigt dans la page. « Il me faudrait plus que ça pour en être sûr. Ce qu'il voit, ce qu'il prend. Revenez quand vous en saurez davantage. »" },
    ],
    choices: [
      { label: "Lui demander ce qu'il en conclut", if: { all: [{ clue: "c_digitale" }, { clue: "c_halos" }] }, hide: { not: { all: [{ clue: "c_digitale" }, { clue: "c_halos" }] } }, to: "K_daoulas_verite" },
    ],
  },
  K_daoulas_verite: {
    title: "La digitale", place: "arriere",
    text: [
      "Daoulas parle très bas, comme si la cloison avait des oreilles. Elle en a peut-être.",
      "« La digitale, à petite dose, fait battre plus fort un cœur fatigué. À forte dose, elle le ralentit jusqu'à l'arrêter. Les halos jaunes, c'est sa signature. Quelqu'un en donne au capitaine, et pas une pincée. Assez pour qu'il meure en quelques jours d'un mal de cœur, à son âge, sans que personne s'en étonne. Moi le premier. »",
      "Il retire ses lunettes et se frotte les yeux. « S'il n'en reçoit plus, il peut s'en remettre. Une semaine, dix jours. Mais il faut que plus rien n'entre dans sa bouche qui ne soit passé par nos mains. Rien. Ni l'eau, ni le bouillon, ni ce maudit grog du soir. »",
      { after: "cap:mort", text: "Puis il se rappelle que le capitaine est mort, et il remet ses lunettes, lentement." },
    ],
    fx: { flag: "c:verite", regard: { daoulas: "allie" }, sway: { commandement: { daoulas: "contre" } }, ep: ["histoire", 1500] },
    choices: [{ back: "H_arriere" }],
  },

  // ------------------------------------------------------------------ the second
  T_morvan: {
    title: "Morvan Le Hir", back: true, montrer: "morvan",
    text: [
      { first: true, text: "Le second t'accueille comme un vieil ami. Il te parle de la Sterne, qu'il connaît depuis sa mise à l'eau, de Marbecq, où il a « une fille dans chaque rue et une dette dans chaque taverne », du capitaine Coët, « le dernier des vrais marins, et le plus mauvais caractère des sept mers »." },
      { first: true, text: "Il te pose aussi des questions, l'air de rien. D'où tu viens. Qui tu connais à Port-Aubier. Si quelqu'un t'attend quelque part. Il écoute tes réponses avec beaucoup d'attention." },
      { again: true, before: "morvan:alerte", text: "Morvan te sourit, te parle du vent, du temps, de la route. Il a toujours un mot gentil, et il sait toujours où tu étais une heure plus tôt." },
      { again: true, after: "morvan:alerte", text: "Morvan te sourit toujours. Mais il ne te tourne plus le dos, et il garde une main près de sa ceinture." },
      { with: "gabin", once: true, text: "Gabin écoute le second les yeux brillants. Morvan lui raconte une tempête, du temps où son père naviguait avec lui ; Gabin rit pour la première fois depuis Port-Aubier." },
    ],
  },
  T_morvan_digitale: {
    title: "Morvan Le Hir", back: true,
    text: [
      "Tu parles de l'apothicaire Haudry. Morvan hoche la tête, grave. « La digitale, oui. C'est Daoulas qui l'a conseillée pour le cœur du capitaine. Il me l'a demandé, et je suis allé la chercher, puisque Daoulas ne descend jamais à terre sans finir au cabaret. » Il te regarde droit dans les yeux. « Pourquoi ? »",
    ],
  },
  T_morvan_berge: {
    title: "Morvan Le Hir", back: true,
    text: [
      "Tu parles de la plaque de la chapelle de Gavre. Le visage du second se ferme, et ses yeux se mouillent. « La Bergeronnette. On a touché la Mâchoire à minuit, par grosse mer. Elle s'est ouverte en deux. J'ai mis la chaloupe à l'eau avec quatre hommes, j'ai cherché les autres jusqu'au jour. » Il serre les poings. « Hervé Corbière était à l'arrière. Je l'ai vu sauter. Je n'ai pas pu l'atteindre. »",
      { with: "gabin", text: "Gabin baisse la tête. Morvan lui met la main sur l'épaule, et le garçon la laisse là." },
    ],
  },
  T_morvan_sable: {
    title: "Morvan Le Hir", back: true,
    text: [
      "Tu parles des caisses de la cale. Le second ne sourit plus. Il te regarde longtemps, la tête un peu penchée, comme on regarde un cheval qui vient de boiter.",
      "« Tu n'aurais pas dû ouvrir ces caisses, dit-il enfin, très doucement. Ce n'est pas ton argent, ce n'est pas ton navire, ce n'est pas ta vie. Pense à ça, la nuit, quand tu dors dans ta cabine. Moi, j'y pense pour toi. »",
    ],
    fx: { flag: "morvan:alerte", regard: { morvan: "hostile" } },
  },
  T_morvan_lettre: {
    title: "Morvan Le Hir", back: true,
    text: [
      "Tu lui montres la lettre au cachet vert. Il la reconnaît avant même que tu la déplies. Il te la laisse.",
      "« Tu as fouillé ma chambre. » Il rit, tout bas. « Tu vois, c'est pour ça que Corbière t'a choisi{e}. Un étranger, qui ne connaît personne, qui ne sait rien. Il s'est trompé sur le dernier point. »",
      "Il se penche vers toi. « Écoute bien, parce que je ne le dirai qu'une fois. Ce navire va finir sur les Dents, avec ou sans toi. Mille écus, c'est beaucoup d'argent. Il y a de la place dans la chaloupe. Réfléchis jusqu'aux Dents. »",
    ],
    fx: { flag: ["morvan:alerte", "morvan:offre", "sait:morvan_corbiere"], tie: "morvan_corbiere", regard: { morvan: "hostile" } },
  },
  T_morvan_chaloupe: {
    title: "Morvan Le Hir", back: true,
    text: [
      "Tu parles de la chaloupe, de ses barils d'eau, de son biscuit, de la boussole et du coffre. Le second hausse les épaules. « Une vieille habitude. Depuis la Bergeronnette, je garnis toujours la chaloupe. On ne sait jamais. » Il sourit. « Et mon coffre, c'est mon affaire. »",
    ],
    fx: { flag: "morvan:alerte" },
  },

  // ------------------------------------------------------------------ the bosun, the helmsman, the cook
  T_guenole: {
    title: "Guénolé Le Bihan", back: true, montrer: "guenole",
    text: [
      { first: true, text: "Le maître d'équipage t'écoute en mâchonnant le tuyau de sa pipe éteinte. « Moi, je fais travailler les hommes. Le capitaine commande, le second transmet, je siffle, ils courent. Toi, tu comptes. Chacun son métier. »" },
      { first: true, text: "Il crache par-dessus bord. « Vingt-deux ans que je navigue pour Corbière. Il paie à l'heure, il ne vole pas sur le biscuit. C'est rare. Je n'en demande pas plus. »" },
      { again: true, text: "Guénolé te fait un signe de tête, sans retirer sa pipe de sa bouche." },
      { after: "marche:sabotage", before: "eau:coupable", text: "« Les tonneaux, dit-il. Trouve-moi qui a fait ça. Moi, je le jette à la mer, et l'affaire est réglée. »" },
    ],
  },
  K_guenole_preuve: {
    title: "Guénolé Le Bihan", back: true,
    text: [
      "Tu dis au maître d'équipage ce que tu as trouvé. Il t'écoute, sa pipe à la main. Quand tu as fini, il la remet dans sa poche, avec soin, comme on range une chose précieuse.",
      "« Vingt-deux ans pour Corbière », dit-il. Il regarde les matelots sur le pont, un par un. « Il y a trente hommes sur ce navire. Trente familles à terre. » Il se tourne vers toi. « Quand tu auras besoin de bras, viens me chercher. Pas avant. Si le second se doute de quelque chose avant, on est tous morts. »",
    ],
    fx: { flag: "guenole:allie", regard: { guenole: "allie" }, sway: { commandement: { guenole: "contre" } }, ep: ["seance", 800] },
  },
  T_kerlo: {
    title: "Yves Kerlo", place: "pont", back: true, montrer: "kerlo",
    text: [
      { first: true, text: "Le timonier garde la tête droite. Il a les deux mains sur les poignées de la roue, et ses yeux vont du compas à la voile, de la voile au compas. « On peut causer, dit-il. Mais pas me faire rire. Je ris, je lâche la barre. »" },
      { again: true, text: "Kerlo te fait un signe de tête, et garde les yeux sur son compas." },
      { temps: "brume", text: "« Par brume, dit-il, je gouverne au compas et à l'oreille. La mer fait pas le même bruit sur un haut-fond. »" },
      { temps: ["grain", "tempete"], text: "Il est trempé jusqu'aux os, et il chante quelque chose entre ses dents pour garder le rythme des coups de barre." },
    ],
  },
  K_kerlo_route: {
    title: "Yves Kerlo", place: "pont", back: true,
    text: [
      "Tu montres au timonier ce que tu as. Il lit, lentement, en remuant les lèvres, sans lâcher la barre. Puis il regarde le compas, longtemps.",
      "« Le second me donne la route à la relève de minuit. Le capitaine me la donnait à midi. » Il crache. « J'aurais dû me poser la question. Je me pose jamais de questions, c'est pour ça qu'on me met à la barre. » Il tourne la roue d'un rayon, puis d'un autre. « À partir de maintenant, je tiens la route du capitaine. Celle de la carte. Le second dira ce qu'il voudra. »",
    ],
    fx: { flag: "kerlo:route", regard: { kerlo: "allie" }, sway: { commandement: { kerlo: "contre" } }, ep: ["seance", 800] },
  },
  T_rozenn: {
    title: "La cambuse", place: "gaillard", back: true, shop: "rozenn", montrer: "rozenn",
    text: [
      { first: true, text: "Rozenn te barre l'entrée de sa cambuse. Elle se tient sur le seuil, une louche à la main, et t'écoute en surveillant son chaudron par-dessus son épaule." },
      { first: true, text: "« Le subrécargue. Tu viens compter mes pois cassés ? Compte-les, ils sont là. Moi, je nourris trente hommes deux fois par jour depuis quinze ans pour le capitaine Coët, et jamais un homme n'a eu faim sous mon fourneau. »" },
      { again: true, text: "Rozenn te tend une écuelle de soupe sans te demander ton avis, et attend que tu l'aies finie pour t'écouter." },
      { after: "marche:malade", before: ["cap:soigne", "cap:mort"], text: "« Le capitaine ne mange plus rien de ce que je lui fais. Il n'y a que son grog qu'il boit. Je le lui prépare comme il l'aime, rhum, citron, cassonade, et le second le lui monte. »" },
    ],
  },
  K_rozenn_feuilles: {
    title: "La cambuse", place: "gaillard", back: true,
    text: [
      "Tu dis à Rozenn ce que tu as trouvé au fond du pot à grog. Elle pose sa louche. Elle s'essuie les mains sur son tablier, longtemps, comme si elles étaient sales.",
      "« Je le prépare, dit-elle. Je le verse dans le pot. Le second vient le chercher à huit heures. » Elle lève la tête, et ses yeux sont deux pierres. « À partir de ce soir, c'est moi qui le monte. Et le second, je l'empoisonnerai pas, parce que je suis une chrétienne. Mais il faudra pas qu'il me demande de la soupe. »",
    ],
    fx: { flag: "cap:soigne", quest: "II_capitaine", regard: { rozenn: "allie" }, sway: { commandement: { rozenn: "contre" } }, ep: ["histoire", 2000] },
  },

  // ------------------------------------------------------------------ the gambler
  T_erwan: {
    title: "Erwan Le Goff", place: "gaillard", back: true, montrer: "erwan",
    text: [
      { first: true, text: "Erwan est un garçon nerveux qui rit avant la fin de ses phrases. Il te propose une partie de dés, puis deux, puis te raconte qu'il a gagné cent écus en une nuit à Port-Aubier, puis qu'il les a perdus la nuit d'après. Il rit encore." },
      { again: true, text: "Erwan te salue d'un grand geste, et retourne à ses dés." },
      { after: "marche:sabotage", before: "eau:coupable", text: "Depuis l'affaire des tonneaux, il joue moins et boit davantage. Il sursaute quand on l'appelle." },
    ],
  },
  E_aveu: {
    title: "Erwan Le Goff", place: "gaillard",
    text: [
      "Tu poses devant lui ce que tu as trouvé dans son hamac. Erwan regarde la vrille, puis toi, et son rire meurt dans sa gorge. Il est très jeune, tout à coup.",
      "« J'avais perdu aux dés, à Port-Aubier. Plus que ma solde de l'année. Le type m'aurait fait casser les deux mains. » Il parle très vite, très bas. « Quelqu'un du bord a tout racheté. Il m'a dit que je lui devais un service, un seul, et qu'on serait quittes. Percer les tonneaux du rang du bas, la quatrième nuit. Avec la vrille de la charpentière, pour qu'on l'accuse elle. »",
      "« Qui ? » Il secoue la tête. « Il me tuera. Il me l'a dit, et il le fera. Il a déjà… » Il s'arrête. Il tremble.",
    ],
    fx: { clue: "e_dette", flag: "eau:coupable", quest: "II_eau", tie: "erwan_morvan", ep: ["seance", 1000] },
    choices: [
      { label: "Le livrer au maître d'équipage", fx: { flag: "erwan:fers", stock: { equipage: 8 }, regard: { erwan: "hostile" } }, to: "E_fers" },
      { label: "Lui promettre ta protection s'il dit tout devant l'équipage, le moment venu", test: { dom: "social", diff: -10, label: "Social", help: [{ with: "armelle", v: 10 }] }, win: { fx: { flag: "erwan:temoin", regard: { erwan: "redevable" } }, to: "E_temoin" }, lose: { fx: { flag: "erwan:fers", stock: { equipage: 4 } }, to: "E_fers" } },
    ],
  },
  E_fers: {
    title: "Les fers", place: "gaillard",
    text: [
      "Guénolé met lui-même les fers à Erwan, au pied du mât de misaine, devant tout l'équipage. Il explique ce qu'il a fait, d'une voix qui porte jusqu'à la poupe. Les hommes crachent par terre en passant.",
      { with: "armelle", text: "Armelle regarde Erwan, la mâchoire serrée. « Avec ma vrille », dit-elle seulement." },
      "Le second arrive, écoute, approuve d'un hochement de tête grave. « Bonne justice. On le remettra au prévôt de Marbecq. » En passant près d'Erwan, il ne le regarde pas. Erwan, lui, le suit des yeux jusqu'à ce qu'il ait disparu.",
    ],
    fx: { conf: { armelle: 5 } },
    choices: [{ back: "H_pont" }],
  },
  E_temoin: {
    title: "Erwan Le Goff", place: "gaillard",
    text: [
      "Erwan te regarde longtemps, puis il crache dans sa main et te la tend, comme on fait sur les marchés. « Le moment venu. Pas avant. » Il remet la vrille dans ta main. « Garde-la. Et dis à la charpentière que je lui demande pardon. Plus tard. »",
      "Ce soir-là, au gaillard, tu fais savoir que l'affaire des tonneaux est réglée, et que le coupable paiera à Marbecq. Les hommes ne savent pas qui, mais ils te croient. L'air du gaillard est moins lourd.",
    ],
    fx: { stock: { equipage: 6 } },
    choices: [{ back: "H_pont" }],
  },
} };
