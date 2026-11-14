// Act I, « Le pain compté » (days 1 to 4): the nomination, the count of the granaries, the Tower of Salt, the first
// Council (the half ration) and the assault on the Tanners' Gate.
module.exports = {
  A_reveil: {
    act: "I", title: "Le Chat-Huant", place: "port",
    text: [
      "On frappe à la porte de ta chambre, sous le toit du Chat-Huant, alors que le jour se lève à peine. Tu ouvres sur un sergent en cotte de mailles, le casque sous le bras, qui sent la pluie et le feu de garde.",
      "« C'est toi, l'étranger{e} du convoi ? C'est toi qui tiens les comptes ? » Il n'attend pas la réponse. « Le Conseil te demande. Tout de suite. »",
      { if: { has: "passe:commis" }, text: "Tu as tenu les livres d'une maison de commerce pendant six ans. Le mot « comptes », dans la bouche d'un soldat, te fait l'effet d'une main sur l'épaule." },
      { if: { has: "passe:soldat" }, text: "Tu reconnais l'allure du sergent : la sienne était la tienne, il n'y a pas si longtemps. Tu boucles ton ceinturon sans réfléchir." },
      { if: { has: "passe:escorte" }, text: "Le marchand qui t'a laissé{e} ici t'a au moins appris une chose : quand un soldat frappe chez toi avant l'aube, on le suit, et on discute après." },
      "Par la lucarne, tu vois les fumées du camp du Margrave, au nord, de l'autre côté des murs. Il y en a davantage que la veille.",
    ],
    fx: { set: { rations: "pleine" } },
    choices: [{ label: "Suivre le sergent jusqu'au château", takes: 1, to: "A_conseil" }],
  },
  A_conseil: {
    act: "I", title: "La salle du Conseil", place: "chateau",
    text: [
      "La salle du Conseil est une pièce haute et froide, tendue de tapisseries usées. Autour d'une table de chêne, six personnes t'attendent. Personne ne se lève.",
      "Au bout de la table, un homme de cinquante ans, une balafre blanche de la tempe au menton : Bertrand d'Aussonne, capitaine du Roi. À sa droite, son lieutenant, Oudart de Lys, en pourpoint bleu, qui te sourit comme à une vieille connaissance. En face, une femme sèche vêtue de gris, Dame Aliénor Vassal, jurée des marchands, et à côté d'elle Maître Carbonnel, le prévôt, qui essuie ses lunettes. Plus loin, une abbesse aux avant-bras de lavandière, Mère Ysaure, et un grand roux aux mains de batelier, Gilles Aubron, l'élu du port.",
      "C'est Aussonne qui parle. « Josse Bréhal, l'intendant des greniers, est mort avant-hier soir. Il est tombé de la Tour du Sel. Ivre, à ce qu'on dit. Il nous faut quelqu'un pour tenir les greniers, et ce Conseil n'arrive pas à s'entendre sur un nom de la ville. »",
      "Dame Vassal achève pour lui, d'une voix égale : « Chacun de nous soupçonne le candidat des autres de vouloir nourrir ses amis. Vous n'avez pas d'amis ici. C'est votre principale qualité. »",
      "Gilles Aubron éclate de rire. Carbonnel sourit sans savoir s'il doit. Mère Ysaure te regarde comme on regarde un cheval qu'on vous vend.",
      "Aussonne pousse vers toi un anneau de fer et sept clés, et un gros registre relié de cuir. « Vous aurez la Maison des Greniers pour logis, une voix à ce Conseil, et la charge de nous dire, après-demain soir, combien de jours la ville peut tenir. Le Conseil votera alors sur la ration. Vous acceptez ? »",
      "Le ton de la question n'en fait pas une question.",
    ],
    fx: { meet: ["aussonne", "oudart", "alienor", "carbonnel", "ysaure", "gilles"], item: ["cles", "registre"], ep: ["seance", 300] },
    choices: [{ label: "Prendre les clés, et descendre à la Halle aux grains", takes: 1, to: "H_halle" }],
  },
  A_compte: {
    act: "I", title: "Les greniers", place: "halle",
    text: [
      "Les greniers de la Halle occupent toute la longueur des combles, sous la charpente : trois grandes salles où le jour entre par des lucarnes, et où les sacs s'empilent jusqu'aux poutres, par travées numérotées à la craie.",
      "Il fait chaud et sec, ça sent la poussière de blé, le chanvre et la souris. Deux commis de la Halle t'attendent en haut de l'escalier, une lanterne à la main. Ils ont l'air de deux hommes qui ont vu partir leur maître et qui attendent de savoir à quoi ressemble le suivant.",
      "Le registre de Bréhal dit combien il devrait y avoir de sacs. Il reste à savoir combien il y en a.",
    ],
    choices: [
      { label: "Compter les sacs un par un, travée par travée", test: { dom: "savoir", diff: 0, label: "Savoir" }, win: { to: "A_compte_juste" }, lose: { fx: { flag: "compte:flou" }, to: "A_compte_flou" } },
      { label: "Compter en marchand : une travée pesée, les autres mesurées à la corde", if: { has: "passe:commis" }, hide: { not: { has: "passe:commis" } }, to: "A_compte_juste" },
    ],
  },
  A_compte_juste: {
    title: "Le compte", place: "halle",
    text: [
      "Il te faut l'après-midi entier. Les commis portent la lanterne, tu tiens la craie. À la fin, tu as un chiffre, et tu le vérifies deux fois : sept cent quatre-vingts setiers.",
      "Tu ouvres le registre de Bréhal sur un sac. Au soir du dixième jour du siège, sa main a écrit mille quatre-vingts. Il est mort le soir même.",
      "Trois cents setiers. Il en faut quatre cents pour remplir une grange de village. On ne les perd pas comme on perd une clé.",
    ],
    fx: { clue: "g_compte", ep: ["seance", 300] },
    choices: [{ label: "Descendre l'escalier des greniers avec ton chiffre", to: "H_halle" }],
  },
  A_compte_flou: {
    title: "Le compte", place: "halle",
    text: [
      "Les travées se ressemblent toutes. Au milieu de la deuxième salle, tu t'aperçois que les numéros à la craie sautent de quatorze à dix-sept, et que tu as compté deux fois la même rangée, ou peut-être aucune. Les commis te regardent recommencer avec une politesse qui fait mal.",
      "À la nuit tombante, tu as un chiffre, autour de huit cents setiers. Le registre de Bréhal en annonce davantage. Tu sais que l'erreur peut venir de toi. Il faudra recompter, autrement.",
    ],
    choices: [{ label: "Descendre l'escalier des greniers", to: "H_halle" }],
  },
  A_recompte: {
    title: "Le recompte", place: "halle",
    text: [
      "Cette fois, tu fais apporter des cordes, des bâtons et un seau de chaux. Chaque rangée comptée reçoit un trait blanc. Les commis finissent par s'y mettre avec toi, et le jeu les amuse presque.",
      "Sept cent quatre-vingts setiers. Tu recommences la dernière salle pour être sûr{e}, et tu trouves le même nombre.",
      "Le registre de Bréhal, au soir du dixième jour, en porte mille quatre-vingts. Trois cents setiers manquent. L'erreur ne venait pas de toi.",
    ],
    fx: { clue: "g_compte", ep: ["seance", 300] },
    choices: [{ label: "Descendre l'escalier des greniers avec ton chiffre", to: "H_halle" }],
  },
  G_boisseau: {
    title: "Le boisseau étalon", place: "halle",
    text: [
      "Le boisseau étalon de Sarance trône au milieu de la Halle, sur un socle de pierre : un grand récipient de bronze cerclé de fer, poinçonné aux armes de la ville. C'est sur lui que l'on vérifie toutes les mesures des marchands. « Là où l'on mesure juste », disait Bréhal à sa fille.",
      "Tu le fais basculer avec l'aide d'un commis. Le fond est double : une plaque de bronze qui joue sous l'ongle. Dessous, enveloppé dans un linge ciré, un petit carnet de cuir noir.",
      "Tu l'ouvres debout, sous le regard du commis que tu renvoies d'un geste. C'est l'écriture de Bréhal, petite et droite, plus serrée qu'à l'ordinaire.",
    ],
    fx: { item: "carnet", ep: ["histoire", 600] },
    choices: [{ label: "Glisser le carnet sous ta chemise", to: "H_halle" }],
  },
  R_tour: {
    title: "La Tour du Sel", place: "remparts",
    text: [
      { first: true, text: "La Tour du Sel est ronde, trapue, coiffée d'une plate-forme à créneaux où l'on monte par un escalier de quatre-vingts marches. De là-haut, on voit tout : le camp du Margrave étalé sur les pâtures, la boucle de la Dorve, les Moulins, et à l'aplomb du mur, trente pieds plus bas, les dalles du fossé où l'on a trouvé Josse Bréhal." },
      { first: true, text: "Le parapet t'arrive à la hanche. Pour passer par-dessus, il faut le vouloir, ou y être aidé." },
      { again: true, text: "La plate-forme de la Tour du Sel, le vent, et en bas le fossé." },
      { when: "night", text: "La nuit, les feux du camp font une seconde ville en face de la première. En aval, les Moulins sont noirs sur l'eau noire." },
      { if: { item: "bouton" }, text: "Tu passes la main sur le parapet, à l'endroit où tu as trouvé le bouton. La pierre est froide." },
    ],
    choices: [
      { label: "Fouiller le parapet d'où il est tombé", hide: { item: "bouton" }, takes: 1, test: { dom: "nature", diff: 0, label: "Observation" }, win: { to: "R_bouton" }, lose: { to: "R_tour_rien" } },
      { label: "Attendre minuit là-haut, comme Bréhal", when: "night", hide: { clue: "b_lumieres" }, takes: 2, to: "R_tour_nuit" },
      { back: "H_remparts" },
    ],
  },
  R_bouton: {
    title: "Le parapet", place: "remparts",
    text: [
      "Tu fais le tour de la plate-forme à genoux, les mains sur la pierre. Les créneaux, les joints, les mousses. À l'angle qui donne sur le fossé, la gouttière du parapet est bouchée de feuilles mortes et de fientes. Tu y passes les doigts.",
      "Quelque chose de dur et de rond. Un bouton d'argent ciselé d'une fleur de lys, arraché avec un bout de fil bleu encore pris dans son anneau. C'est un bouton de pourpoint, et un pourpoint de prix.",
    ],
    fx: { item: "bouton", clue: "b_bouton", ep: ["histoire", 600] },
    choices: [{ back: "R_tour" }],
  },
  R_tour_rien: {
    title: "Le parapet", place: "remparts",
    text: [
      "Tu fais le tour de la plate-forme, tu regardes chaque créneau. Une sentinelle te demande ce que tu cherches. Tu hausses les épaules. La lumière baisse. Tu reviendras par un jour plus clair.",
    ],
    choices: [{ back: "R_tour" }],
  },
  R_tour_nuit: {
    title: "Minuit sur la Tour du Sel", place: "remparts",
    text: [
      "Tu restes accoudé{e} au parapet, ton manteau serré. La sentinelle a fini par s'asseoir dans l'escalier pour être à l'abri du vent. Les feux du camp s'éteignent un à un.",
      "Un peu avant minuit, en aval, dans le Moulin du milieu, une lumière s'allume derrière une lucarne. Elle s'éteint, se rallume, s'éteint. Trois fois. De l'autre côté de la Dorve, une lanterne répond, une seule fois.",
      "Puis plus rien, et la rivière.",
    ],
    fx: { clue: "b_lumieres" },
    choices: [{ back: "R_tour" }],
  },
  R_truie: {
    title: "La Truie", place: "remparts",
    text: [
      "Tu restes un long moment au créneau à regarder la machine. Sur la butte aux Pendus, au bord de la Dorve, des charpentiers ont dressé un bâti de poutres haut comme trois maisons. Le grand bras est déjà en place. Il reste à monter la caisse du contrepoids et à la remplir de pierres.",
      "Un vieil arbalétrier crache par-dessus le mur. « Deux jours pour le contrepoids. Après, elle tirera par-dessus la Porte des Tanneurs, droit sur la Basse-Ville. La Halle est en plein dessous. »",
      "« Il faudrait la brûler avant », dit un autre. « Avec quoi ? Et par où ? On n'a pas de bras qui portent jusque-là. » Ils regardent tous les deux vers la barbacane, puis vers la rivière, et se taisent.",
    ],
    choices: [{ back: "H_remparts" }],
  },

  // ------------------------------------------------------------------ the first Council
  C1_seance: {
    act: "I", title: "Le Conseil de la Herse", place: "chateau",
    text: [
      "La cloche du château sonne six coups. Dans la salle du Conseil, on a allumé des chandelles de suif qui fument. Les six sont là, à leurs places. On t'a mis un tabouret au bout de la table, en face du capitaine.",
      "Aussonne ouvre la séance sans préambule. « L'intendance. Combien de jours ? »",
      { if: { clue: "g_compte" }, text: "Tu as ton chiffre, juste et vérifié : sept cent quatre-vingts setiers, et trois cents qui manquent par rapport au registre. Tu les donnes tous les deux. Un silence suit. Dame Vassal regarde ses mains. Gilles Aubron frappe la table du plat de la main. « Trois cents setiers ne s'envolent pas ! »" },
      { if: { not: { clue: "g_compte" } }, text: "Tu donnes le chiffre du registre de Bréhal, faute d'en avoir un meilleur. Dame Vassal hoche la tête, satisfaite, comme on approuve un élève." },
      { if: { days: "ble", min: 11 }, text: "À ration pleine, tu annonces une douzaine de jours, avec les réfugiés. À demi-ration, une vingtaine. Personne ne sait quand le Roi viendra." },
      { if: { days: "ble", max: 10 }, text: "À ration pleine, tu annonces une dizaine de jours, à peine. À demi-ration, presque le double. Personne ne sait quand le Roi viendra." },
      "Le greffier se lève et déroule la motion.",
    ],
    council: { motion: "rations", to: "C1_apres", label: "Passer au vote" },
  },
  C1_apres: {
    act: "I", title: "Après le vote", place: "chateau",
    text: [
      { if: { vote: "rations", is: "adopte" }, text: "La demi-ration est adoptée. Aussonne lève la séance d'un mot. Dans l'escalier, Gilles Aubron passe devant toi sans te regarder, et tu entends sa voix, plus bas, qui dit : « Demain, le port aura faim. Et les caves des Vassal seront pleines. »" },
      { if: { vote: "rations", is: "rejete" }, text: "La demi-ration est rejetée. Aussonne regarde un long moment la table, puis lève la séance. Dame Vassal range ses gants avec soin. « Nous mangerons bien, dit-elle à Carbonnel, assez fort pour que tu l'entendes. Jusqu'au jour où nous ne mangerons plus du tout. »" },
      "Demain matin, les boulangers jurés viendront chercher leur farine à la Halle, et c'est toi qui la leur pèseras.",
    ],
    fx: { quest: "I_pain", ep: ["seance", 600] },
    choices: [{ label: "Descendre dans la cour", to: "H_chateau" }],
  },

  // ------------------------------------------------------------------ the assault on the Tanners' Gate
  B1_alerte: {
    act: "I", title: "L'assaut", place: "remparts",
    text: [
      "Les cloches. Toutes les cloches de Sarance à la fois, avant l'aube, Saint-Aubin, le beffroi, le château. Un sergent tambourine à ta porte. « L'assaut ! À la Porte des Tanneurs ! Le capitaine veut tout le monde sur le mur ! »",
      "Tu cours dans les rues avec la moitié de la Basse-Ville : des tanneurs en tablier de cuir, des bateliers avec des gaffes, des femmes qui portent des seaux d'eau et des pierres dans leur jupe. Sur le chemin de ronde, Aussonne distribue les secteurs comme on distribue le pain.",
      "« L'intendance ! Tu as compté mes sacs, compte mes hommes. La Porte des Tanneurs, le mur des tanneries, la tour d'Angle. Tiens-les. »",
      { if: { has: "passe:soldat" }, text: "Tu as tenu un mur, une fois, dans les compagnies du Roi. Tes mains s'en souviennent avant ta tête." },
      { if: { has: "poix" }, text: "Les pots de poix sont dans la tour d'Angle, avec les chaudrons. Quelqu'un a déjà allumé le feu dessous." },
      { if: { has: "solde:payee" }, text: "Les sergents ont été payés il y a deux jours. Ils prennent leurs postes en courant." },
      "Dans les pâtures, les cors sonnent.",
    ],
    battle: "tanneurs",
  },
};
