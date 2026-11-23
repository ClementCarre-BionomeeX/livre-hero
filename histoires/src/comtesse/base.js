// « La Comtesse n'arrive jamais » : the ninth of ten short puzzle books in the Croûte & Chrome universe (Clément, 23/11).
// A Comtesse's engineless parade motorbike, pushed by twelve valets, rolls away down the Great Descent towards the market
// of Mirevaux, and a Tartineuil never arrives anywhere. The panel was wired by a jeweller (leviers with lamps); the
// safety brake opens with Madame's year of birth, which nobody may know (molettes, deduced from examens). BIBLE.md.
module.exports = {
  id: "comtesse",
  title: "La Comtesse n'arrive jamais",
  subtitle: "Croûte & Chrome · vingt kilomètres de descente et un secret de famille",
  summary: "Douze valets poussent sur un tapis rouge la moto sans moteur de la Comtesse de Tartineuil, qui se promène dans le désert sans jamais aller nulle part : une Tartineuil n'arrive pas, c'est ce qui la distingue. Ce soir, au sommet de la Grande Descente, les valets s'arrêtent pour le thé. La moto, elle, continue. En bas, à vingt kilomètres, il y a le marché de Mirevaux. Et tu es accroché{e} à l'arrière.",
  tags: ["enigmes", "humour", "aventure"],
  serie: "Croûte 'n Chrome",
  author: "Claude, pour Clément",
  age: 10,
  skin: "sable",
  cover: { motif: "etoile", color: "#7a2a4a" },
  glossary: Object.assign({}, require("../glossaire.js"), {
    "pousseur|pousseuse|pousseurs|pousseuses": "Le valet qui pousse la moto sans moteur d'un riche, sur un tapis rouge déroulé devant elle.",
    "poinçon|poinçons": "La petite marque frappée sur un bijou, qui dit qui l'a fait et quand.",
    "nécessaire de voyage": "Une mallette où l'on range brosses, flacons et miroirs pour sa toilette en voyage.",
    "joaillier|joailliers": "Celui qui fabrique des bijoux de pierres précieuses.",
  }),
  voice: "deuxième personne, présent",
  version: 1,
  start: "A_cortege",
  intro: [
    "Il y a trente et un ans, le monde s'est effondré. Les riches ne vont nulle part : *too rich to arrive*. Le mouvement, l'effort et la destination sont pour les autres.",
    "Pour se promener quand même, ils ont des motos sans moteur, chromées, dorées, que des valets poussent sur des tapis rouges, au pas, dans le désert, pendant que d'autres valets les éventent. On ne va nulle part. On y va lentement. C'est le comble du luxe.",
  ],
  acts: [
    { id: "I", title: "La Grande Descente", question: "Comment arrêter une moto qu'on ne doit jamais arrêter ?", levels: [1, 1], start: "A_cortege" },
  ],
  voies: {
    pousseur: { label: "Pousseur de queue", labelF: "Pousseuse de queue", tip: "Les épaules, les jambes, le tapis rouge : tu pousses depuis dix ans sans jamais regarder où l'on va.", like: "guerrier", bonus: { combat: 35, nature: 20, discretion: 15, social: 10, savoir: 5, magie: 5 } },
    eventailleur: { label: "Éventailleur", labelF: "Éventailleuse", tip: "Les plumes, les éventails, les humeurs de Madame : tu sens le vent tourner avant qu'il tourne.", like: "barde", bonus: { social: 35, discretion: 20, nature: 15, savoir: 10, combat: 5, magie: 5 } },
    lustreur: { label: "Lustreur de chrome", labelF: "Lustreuse de chrome", tip: "Les chiffons, les cires, les mécanismes : tu connais cette moto mieux que son joaillier.", like: "mage", bonus: { savoir: 35, nature: 15, discretion: 15, combat: 10, social: 10, magie: 5 } },
  },
  past: [
    { q: "Quelle est ta place dans le cortège de la Comtesse ?", answers: [
      { label: "Tu pousses à l'arrière, au milieu, la place la plus dure et la moins vue. Tu connais par cœur la nuque de Madame, et rien d'autre.", fx: { voie: "pousseur" } },
      { label: "Tu marches à côté de la selle, avec l'éventail de plumes d'autruche. Madame ne te parle jamais. Elle te dit tout, par la manière dont elle ne te parle pas.", fx: { voie: "eventailleur" } },
      { label: "Tu suis le cortège avec ta boîte de cires et de chiffons, et chaque soir tu lustres la moto, vis par vis. Tu es la seule personne à avoir vu son tableau de bord ouvert.", fx: { voie: "lustreur" } },
    ] },
  ],
  lore: {
    pages: [
      { title: "Les Tartineuil", text: [
        "Les **Tartineuil** sont la plus ancienne famille du Domaine après la Maison elle-même. Leur devise est brodée sur la selle de la Comtesse : *Nous n'arrivons pas.* Aucun Tartineuil, depuis l'Effondrement, n'est arrivé nulle part. Ils partent, ils se promènent, ils reviennent ; arriver est une affaire de livreurs.",
        "La Comtesse a un autre secret de famille, mieux gardé que la devise : son âge. Personne ne le connaît. Son joaillier l'a pourtant gravé quelque part, puisqu'il fallait bien une combinaison au frein.",
      ] },
    ],
    names: {
      "Mirevaux": "La ville du premier magasin de la Maison, au bord du désert, avec son marché du soir.",
      "Domaine": "Le quartier des riches, derrière les grilles dorées qui ne s'ouvrent jamais.",
      "Grande Descente": "Vingt kilomètres de route en pente douce, du plateau du Domaine jusqu'au marché de Mirevaux.",
      "Demi-Sel": "Le clan de motards du désert qui tient que l'Enjambeur est de beurre demi-sel.",
    },
  },
  companions: {},
  factions: {},
  relics: {},
  people: {
    comtesse: { name: "La Comtesse de Tartineuil", aka: ["la Comtesse", "Madame", "Madame de Tartineuil"], f: true,
      face: { age: "ancien", skin: "porcelaine", hair: "blanc", coif: "chignon", beard: "sans", eyes: "tombants", iris: "bleu", nose: "fin", lips: "fines", shape: "allonge", marks: [] },
      aspect: { allure: "droite comme un cierge sur sa selle", habits: "robe de soie grise, collier de perles", signe: "garde les yeux fermés en promenade" },
      qui: "La Comtesse que tu pousses.", desc: "La Comtesse de Tartineuil, doyenne du Domaine. Elle se promène tous les soirs sur sa moto sans moteur, les yeux fermés, et elle n'est jamais arrivée nulle part." },
    crouton: { name: "Croûton", aka: ["la mécanicienne"], f: true,
      face: { age: "enfant", skin: "brun", hair: "noir", coif: "crepus", beard: "sans", eyes: "ronds", iris: "brun", nose: "retrousse", lips: "pleines", shape: "rond", marks: ["cicatrice"] },
      aspect: { allure: "treize ans, une salopette pleine de cambouis", signe: "une clé à molette à la poche", voix: "précise, sans un mot de trop" },
      qui: "La mécanicienne des Demi-Sel. Treize ans.", desc: "La mécanicienne des Demi-Sel, treize ans. Elle parle peu, avec précision, et elle a toujours raison sur les machines." },
  },
  items: {
    mouchoir: { name: "Le mouchoir de batiste", kind: "outil", keep: true, desc: "Un mouchoir de batiste brodé aux armes des Tartineuil, pour essuyer le chrome, les perles et, si nécessaire, Madame." },
    lanterne: { name: "La lanterne de cortège", kind: "outil", keep: true, desc: "Une petite lanterne de cuivre que les pousseurs accrochent à leur ceinture à la tombée du jour, pour que Madame soit vue de loin, sans voir personne." },
    gants: { name: "Les gants de pousseur", kind: "outil", keep: true, desc: "Des gants de cuir épais, à paume renforcée, faits pour pousser huit cents kilos de chrome sans y laisser de traces." },
  },
  clues: {
    i_devise: { rev: "M", text: "La devise des Tartineuil, brodée sur la selle : *Nous n'arrivons pas.* Si la moto atteint le marché de Mirevaux, la Comtesse sera arrivée, pour la première fois de sa vie." },
    i_plaque: { rev: "M", text: "La plaque du frein de sûreté : la combinaison est l'année de naissance de Madame. Nul ne doit la connaître. Le frein ne s'ouvre que le tableau au repos." },
    i_collier: { rev: "M", text: "Sous le beurre, sur le fermoir du collier de perles : *Pour nos vingt ans de mariage. 1987.*" },
    i_photo: { rev: "M", text: "Au dos de la photographie du nécessaire : *Juin 1967. La mariée avait vingt-six ans, ce qui ne se dit pas.*" },
    i_cablage: { rev: "M", text: "Croûton : un joaillier a câblé ce tableau. Chaque manette allume ou éteint ce qui lui plaît. Il faut essayer, et noter ce que fait chacune." },
  },
  quests: [],
  mysteries: {
    M: { title: "Quel âge a la Comtesse ?", act: "I", solved: "frein:ouvert",
      answer: { person: "comtesse", text: "Elle est née en 1941 : mariée en juin 1967 à vingt-six ans, d'après la photographie, et le collier de ses vingt ans de mariage date de 1987." } },
  },
  examens: {
    tableau: { title: "Le tableau de bord",
      nu: "Sous le guidon, un tableau de bord de nacre et d'or, en forme de lyre, sans compteur de vitesse : une Tartineuil n'en a pas l'usage. Quatre voyants de verre taillé, quatre manettes d'ivoire. Trois voyants brûlent : *Feux de parade*, *Fontaine à beurre*, *Orgue*. Le quatrième, *Sûreté*, est éteint.",
      avec: {
        lanterne: { text: "Tu approches la lanterne. Sous le tableau, une petite plaque de laiton : *Câblage : Joaillerie Fils & Fils. Chaque manette est un bijou. Elle agit sur ce qui lui sied.* Un électricien aurait relié chaque manette à son voyant. Un joaillier les a reliées à ce qui était joli." },
        gants: { text: "Les manettes d'ivoire résistent sous tes gants, puis basculent avec un claquement de boîte à bijoux. Tu les remets aussitôt en place. Il faudra s'y prendre avec méthode." },
        mouchoir: { text: "Tu essuies la nacre. Elle brille. Elle ne te dit rien de plus, sinon que tu fais très bien ton métier, ce qui ne ralentit pas la moto." },
      } },
    frein: { title: "Le frein de sûreté",
      nu: "Entre les deux repose-pieds, un levier de frein en or massif, verrouillé par un capot ciselé. Sur le capot, une plaque gravée : *Frein de sûreté à secret. Il ne s'ouvre que le tableau au repos, feux, fontaine et orgue éteints. Combinaison : l'année de naissance de Madame. Nul ne doit la connaître. Joaillerie Fils & Fils.*",
      fx: { clue: "i_plaque" },
      avec: {
        gants: { text: "Tu tires de toutes tes forces sur le levier d'or, ganté, arc-bouté{e} sur le repose-pied. Il ne bouge pas d'un millimètre. Le joaillier a fait les choses bien : on ne freine pas une Tartineuil sans son autorisation." },
      } },
    collier: { title: "Le collier de la Comtesse",
      nu: "Un rang de perles grosses comme des noisettes, autour du cou de la Comtesse, qui tressaute à chaque bosse. Le fermoir, sur la nuque, juste sous ton nez, est englué de beurre : la Fontaine à beurre du tableau de bord éclabousse tout ce qui passe derrière elle.",
      avec: {
        mouchoir: { text: "Tu essuies le fermoir avec le mouchoir, délicatement, sans toucher la nuque. Sous le beurre, une gravure fine : *Pour nos vingt ans de mariage. 1987.*", fx: { clue: "i_collier" } },
        lanterne: { text: "À la lanterne, les perles prennent une couleur de lait chaud. Le fermoir est gravé, sous une couche de beurre." },
      } },
    necessaire: { title: "Le nécessaire de voyage",
      nu: "Une mallette de cuir rouge, sanglée sur le porte-bagages, que tu ouvres d'une main en te tenant de l'autre. Des brosses d'argent, des flacons, un miroir, et, glissée dans le couvercle, une vieille photographie : une mariée en voile, sur les marches d'une église, au bras d'un homme qui sourit à quelqu'un hors du cadre.",
      avec: {
        lanterne: { text: "À la lanterne, tu retournes la photographie. Au dos, d'une écriture penchée, à l'encre pâlie : *Juin 1967. La mariée avait vingt-six ans, ce qui ne se dit pas.*", fx: { clue: "i_photo" } },
        mouchoir: { text: "Tu essuies le miroir, par réflexe. Tu y vois ton propre visage, couvert de poussière et de beurre, et derrière toi, très loin en bas, les premières lumières de Mirevaux." },
      } },
    comtesse: { title: "La Comtesse",
      nu: "La Comtesse est assise droite sur la selle, les yeux fermés, les mains croisées sur les genoux. Le vent de la descente fait voler ses cheveux blancs hors du chignon. Elle sourit. Elle n'a pas encore compris. Elle croit que les valets poussent très bien, ce soir.",
      avec: {
        gants: { text: "Tu poses une main gantée sur son épaule, pour la prévenir. « Madame… » Elle ne rouvre pas les yeux. « Plus vite, dit-elle. Vous poussez à merveille. » Tu retires ta main. Il n'y a personne d'autre que toi derrière elle." },
      } },
  },
  puzzles: {
    p_tableau: {
      kind: "leviers", title: "Le tableau de bord",
      text: "Quatre voyants de verre taillé, quatre manettes d'ivoire. Il faut éteindre les feux, la fontaine et l'orgue, et allumer la sûreté. Chaque manette, câblée par un joaillier, agit sur ce qui lui sied.",
      lamps: ["Feux de parade", "Fontaine à beurre", "Orgue", "Sûreté"],
      levers: [{ name: "Manette des feux", flips: [0, 2] }, { name: "Manette de la fontaine", flips: [1] }, { name: "Manette de l'orgue", flips: [1, 2] }, { name: "Manette du repos", flips: [0, 1, 3] }],
      start: [1, 1, 1, 0], answer: [0, 0, 0, 1], states: ["levée", "baissée"],
      hint: [{ if: { clue: "i_cablage" }, text: "Essaie chaque manette seule, une fois, et regarde ce qui change." }],
      tryLabel: "Valider le tableau", label: "Basculer les manettes", leave: "Lâcher le tableau",
      win: { to: "A_repos", fx: { flag: "tableau:repos", ep: ["seance", 400] } },
    },
    p_frein: {
      kind: "molettes", title: "Le frein de sûreté",
      text: "Sous le capot ciselé, quatre molettes d'or, chacune de zéro à neuf. *L'année de naissance de Madame.*",
      labels: ["Millier", "Centaine", "Dizaine", "Unité"],
      wheels: [["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]],
      answer: ["1", "9", "4", "1"],
      tries: 3,
      hint: [{ if: { all: [{ clue: "i_collier" }, { clue: "i_photo" }] }, text: "Le collier date le mariage ; la photographie dit l'âge de la mariée." }],
      wrongText: "Les molettes d'or claquent, et le frein reste de marbre. Au tableau, un petit voyant rouge s'allume, que tu n'avais pas vu : *Tentative indiscrète.*",
      tryLabel: "Tirer le frein", label: "Tourner les molettes", leave: "Refermer le capot",
      win: { to: "A_arret", fx: { flag: "frein:ouvert", ep: ["seance", 500] } },
      lose: { to: "A_bloque" },
    },
  },
  achievements: {
    tableau: { title: "Bijoux câblés", desc: "Mettre au repos le tableau du joaillier.", if: { has: "tableau:repos" } },
    frein: { title: "Ce qui ne se dit pas", desc: "Trouver l'année de naissance de la Comtesse.", if: { has: "frein:ouvert" } },
  },
  endings: {},
  world: {
    noFood: true,
    money: { units: [{ name: "euro", plural: "euros", value: 1, short: "€" }] },
    start: { place: "plateau", hour: 18, gold: 0, food: 0, items: ["mouchoir", "lanterne", "gants"], kits: {} },
    places: {
      plateau: { ambiance: "route", name: "Le plateau du Domaine", map: "desert", x: 20, y: 20, desc: "Le haut de la Grande Descente, où le tapis rouge s'arrête et où les valets prennent le thé." },
      descente: { ambiance: "route", name: "La Grande Descente", map: "desert", x: 50, y: 50, desc: "Vingt kilomètres de route en pente douce, droite comme une règle, vers les lumières de Mirevaux." },
      mirevaux: { ambiance: "ville", name: "Le marché de Mirevaux", map: "desert", x: 80, y: 80, desc: "La place du marché de Mirevaux, ses étals, ses lampions, et la boulangerie en face de la forge." },
    },
    routes: [], regions: {}, events: {},
  },
  banter: [],
  passages: {},
};
