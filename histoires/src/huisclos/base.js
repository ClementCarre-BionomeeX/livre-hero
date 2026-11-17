// « Ce que garde la neige » : the closed room (piste « Huis clos », Clément, 13/11). Three nights of a funeral wake in
// the Sorlin house, at Les Lisières, cut off by the snow. Few people, one house, many things left unsaid. The engine
// (8.3) carries what the room needs: the accounts each one gives, kept word for word and put in doubt (accounts,
// devant, seul), the remembrances played in the past (souvenir), keeping silent as a choice of its own (silence), what
// the hero did coming back (gestes), dread that troubles the page (dread), and the bonds the reader may mask
// (attachments, tendre). From 8.2 the traits and the dreams; from 8.0 the world that moves on; from 7.9 the hours of
// the people, the documents and the deadline. The plot is in BIBLE.md, in the project folder, out of the repository.
module.exports = {
  id: "huisclos",
  title: "Ce que garde la neige",
  subtitle: "Huis clos · trois nuits dans la maison de ta mère",
  summary: "Il y a huit jours, une lettre de ta mère t'est parvenue à Varenne : « Viens avant la neige. Il faut que je te parle. » Tu n'étais pas revenu{e} aux Lisières depuis douze ans. Tu arrives le soir du lendemain de sa mort, avec la première neige. Derrière toi, la route se ferme. Trois nuits de veillée, six personnes, une maison, et ce que chacun a décidé de taire.",
  tags: ["drame","huisclos"],
  author: "Claude, pour Clément",
  age: 16,
  adult: { themes: ["Deuil et mort d'un enfant", "Fin de vie choisie", "Culpabilité et secrets de famille", "Emprise et argent dans une famille"] },
  skin: "givre",
  cover: { motif: "flocon", color: "#2e3a44" },
  glossary: Object.assign({}, require("../glossaire.js"), {
    "laudanum": "Un remède à base d'opium dissous dans l'alcool, brun et amer, qu'on donne en gouttes contre la douleur. À forte dose, il endort pour toujours.",
    "gaffe|gaffes": "Une longue perche terminée par un crochet de fer, qui sert à tirer une barque ou à repêcher ce qui flotte.",
    "scierie": "L'atelier où l'on débite les troncs en planches, souvent au bord d'un ruisseau dont l'eau fait tourner la scie.",
    "veillée funèbre|veillée": "Les heures passées auprès d'un mort, avant l'enterrement, pour qu'il ne reste jamais seul.",
    "Chandeleur": "Une fête du début février, où l'on mange des crêpes et où les marchands règlent souvent leurs comptes.",
    "engelure|engelures": "Une blessure de la peau due au grand froid. Elle peut laisser des marques blanches pour toujours.",
    "linceul": "Le drap dans lequel on coud un mort pour l'enterrer.",
  }),
  voice: "deuxième personne, présent",
  version: 1,
  start: "A_arrivee",
  intro: [
    "Les Lisières, ce sont trois fermes et une chapelle au bout d'une route qui monte, au-dessus du bourg de Saint-Amans-des-Combes, à l'endroit où la forêt commence. La plus grande maison est celle des Sorlin : un logis de pierre grise à deux étages, une scierie en contrebas sur le ruisseau, et derrière, entre les saules, un étang que l'hiver ferme d'un couvercle de glace.",
    "Tu y as grandi. Tu en es parti{e} à dix-sept ans, un lundi de janvier, pour Varenne, chez ton oncle Firmin, et ta mère t'a écrit quatre fois en douze ans. La cinquième lettre est arrivée il y a huit jours, d'une écriture tremblée que tu as eu du mal à reconnaître : « Viens avant la neige. Il faut que je te parle. A. »",
    "Tu as pris la diligence le lendemain. Elle a mis six jours.",
  ],
  acts: [
    { id: "I", title: "Acte I · La première nuit", question: "Qui t'attend encore dans cette maison ?", levels: [1, 1], start: "A_arrivee" },
    { id: "II", title: "Acte II · Le jour blanc", question: "Qu'a voulu te dire ta mère ?", levels: [1, 2], start: "B_lettre" },
    { id: "III", title: "Acte III · La dernière veillée", question: "Que diras-tu sur sa tombe ?", levels: [2, 2], start: "C_matin" },
  ],
  factions: {},
  relics: {},
  // The hero's callings (8.5): the trade the past question names, played like one of the six classes.
  voies: {
    copiste: {"label": "Copiste", "tip": "Les actes, les comptes et ce qu'on écrit dans les marges.", "like": "voleur", "bonus": {"savoir": 35, "discretion": 20, "social": 15, "combat": 5, "nature": 5, "magie": 0}},
    guet: {"label": "Garde du guet", "tip": "Voir qui ment, et se tenir prêt.", "like": "guerrier", "bonus": {"combat": 25, "discretion": 25, "social": 15, "savoir": 10, "nature": 10, "magie": 0}},
    theatre: {"label": "Comédien", "labelF": "Comédienne", "tip": "Faire parler les gens, et se taire au bon moment.", "like": "barde", "bonus": {"social": 35, "discretion": 25, "savoir": 15, "combat": 5, "nature": 5, "magie": 0}},
  },
  past: [
    {
      q: "Qu'es-tu devenu{e} à Varenne, pendant ces douze ans ?",
      answers: [
        { label: "Copiste chez maître Aubertin, notaire. Tu lis vite les actes, les testaments, et ce que les gens cachent dans les marges.", fx: { voie: "copiste", flag: "passe:copiste" } },
        { label: "Tu es entré{e} au guet de la ville. Tu as appris à voir quand quelqu'un ment, et à te tenir prêt{e} quand ça tourne mal.", fx: { voie: "guet", flag: "passe:guet" } },
        { label: "Tu joues la comédie dans une troupe qui tourne de ville en ville. Tu sais faire parler les gens, et te taire au bon moment.", fx: { voie: "theatre", flag: "passe:theatre" } },
      ],
    },
  ],
  // The world of this book (8.6): what an inhabitant knows before the first page. Nothing of the plot.
  lore: {
    pages: [
      { title: "Les Lisières", text: [
        "Les **Lisières**, ce sont trois fermes et une chapelle au bout d'une route qui monte, au-dessus du bourg de Saint-Amans-des-Combes, là où la forêt commence. Le bourg a son docteur, son église et ses diligences ; là-haut, on a le bois, l'eau du ruisseau et la neige.",
        "La plus grande maison est celle des Sorlin : un logis de pierre grise à deux étages, une scierie en contrebas sur le ruisseau, et derrière, entre les saules, un étang que l'hiver ferme d'un couvercle de glace. Au-delà, la forêt des Fayards, des hêtres et des sapins.",
        "L'hiver, quand la neige tient, les chevaux refusent la côte, et le dernier quart de lieue se fait à pied. Varenne, la ville, est à six jours de diligence.",
      ] },
    ],
    names: {
      "Lisières": "Trois fermes et une chapelle au-dessus de Saint-Amans, là où la forêt commence.",
      "Saint-Amans|Saint-Amans-des-Combes": "Le bourg en contrebas des Lisières : son docteur, son église, sa route.",
      "Fayards": "La forêt de hêtres et de sapins derrière les Lisières.",
      "Varenne": "La ville, à six jours de diligence des Lisières.",
    },
  },
  world: {
    noFood: true,
    money: { units: [{ name: "livre", plural: "livres", value: 20, short: "l." }, { name: "sou", plural: "sous", value: 1, short: "s." }] },
    start: { place: "cour", hour: 16, clock: true, gold: 34, food: 0, items: ["convocation"], kits: {} },
    places: {
      salle: { ambiance: "village", name: "La grande salle", map: "maison", x: 50, y: 52, arrive: "H_salle", desc: "La cheminée, la longue table, la pendule arrêtée, le miroir voilé." },
      cuisine: { ambiance: "village", name: "La cuisine", map: "maison", x: 26, y: 58, arrive: "H_cuisine", desc: "Le fourneau, la table de bois blanc, et Mariette." },
      chambre: { ambiance: "village", name: "La chambre d'Armance", map: "maison", x: 58, y: 24, arrive: "H_chambre", desc: "Le grand lit, les cierges, et ta mère." },
      bureau: { ambiance: "village", name: "Le bureau", map: "maison", x: 76, y: 50, arrive: "H_bureau", desc: "Le secrétaire de ta mère, les registres de la scierie, un poêle froid." },
      etage: { ambiance: "village", name: "L'étage", map: "maison", x: 38, y: 22, arrive: "H_etage", desc: "Le couloir des chambres : la tienne, celle de Lucien, la chambre de couture, la chambre d'amis." },
      grenier: { ambiance: "village", name: "Le grenier", map: "maison", x: 46, y: 8, arrive: "H_grenier", desc: "Les malles, la luge, le froid sous les tuiles." },
      cour: { ambiance: "champs", name: "La cour et la scierie", map: "maison", x: 64, y: 78, arrive: "H_cour", desc: "Le bûcher, le sentier, et en contrebas la scierie sur le ruisseau gelé." },
      etang: { ambiance: "eau", name: "L'étang des Saules", map: "maison", x: 22, y: 86, arrive: "H_etang", desc: "La glace, les saules, la cabane aux barques, et la source qui ne gèle jamais tout à fait." },
    },
    routes: [], regions: {}, events: {},
  },

  // ------------------------------------------------------------------ the closed room (8.3)
  traits: {
    aveu: { name: "Ce que tu dis", low: "Secret{e}", high: "Sincère", mid: "Réservé{e}" },
    coeur: { name: "Ce que tu pardonnes", low: "Dur{e}", high: "Indulgent{e}", mid: "Partagé{e}" },
  },
  dread: {
    name: "L'angoisse", start: 2, max: 10, trouble: 6, sleep: -3, mod: { from: 5, per: -3 },
    panic: { to: "P_panique" },
    levels: [{ min: 0, word: "Calme" }, { min: 3, word: "Inquiet{e}" }, { min: 6, word: "Troublé{e}" }, { min: 9, word: "Au bord de la panique" }],
    say: {
      trouble: "Ton cœur cogne trop fort. Les bords des choses se mettent à trembler, et tu ne sais plus très bien ce que tu vois.",
      calm: "Ton souffle revient. La pièce reprend ses angles, ses couleurs, son poids.",
    },
  },
  attachments: { jeanne: { tendre: true }, odile: {}, mariette: {} },
  topics: {
    etang: { title: "La nuit de l'étang, il y a douze ans", solved: "etang:verite" },
    nuit: { title: "La dernière nuit de ta mère", solved: "odile:aveu" },
  },
  accounts: {
    v_hero_etang: { by: "hero", topic: "etang", true: "partiel", belie: "D_moi_etang", short: "J'ai tenu Lucien, et Odile n'a pas bougé",
      text: "J'ai couru sur la glace. J'ai attrapé Lucien par le col, et je l'ai tenu longtemps, les bras dans l'eau noire. Odile était sur la berge, sa lanterne à la main. Elle n'a pas bougé." },
    v_odile_etang: { by: "odile", topic: "etang", true: false, belie: "D_odile_etang", short: "J'étais couchée, je n'ai rien vu",
      text: "J'étais couchée. Maman m'avait envoyée au lit à neuf heures. Je n'ai rien vu, rien entendu avant les cris." },
    v_mariette_etang: { by: "mariette", topic: "etang", true: "partiel", belie: "D_mariette_etang", short: "Le petit est sorti seul",
      text: "Le petit est sorti seul, avec ses patins sur l'épaule. C'est la glace qui l'a pris, près de la source. La glace, et personne d'autre." },
    v_fabre_etang: { by: "fabre", topic: "etang", true: true, short: "L'enfant était mort depuis une heure",
      text: "Quand je suis monté, l'enfant était mort depuis une heure. Personne n'y pouvait plus rien. Ta mère avait des engelures jusqu'aux coudes, et toi, quarante de fièvre." },
    v_jeanne_etang: { by: "jeanne", topic: "etang", true: false, belie: "D_jeanne_etang", short: "Je n'étais pas aux Lisières ce soir-là",
      text: "Je n'étais pas aux Lisières ce soir-là. Mon père me l'avait défendu depuis la Toussaint. J'ai su le lendemain, à la messe." },
    v_germain_etang: { by: "germain", topic: "etang", true: false, belie: "D_germain_etang", short: "Au bourg, on dit que c'est toi qui l'as emmené",
      text: "Moi, je n'étais pas encore de la famille. Mais au bourg, on dit que c'est toi qui l'as emmené sur la glace, ce soir-là." },
    v_fabre_nuit: { by: "fabre", topic: "nuit", true: false, belie: "D_fabre_nuit", short: "Le cœur. Elle s'est endormie",
      text: "Le cœur. Il était usé depuis deux ans, je le lui avais dit. Elle s'est endormie vers minuit et ne s'est pas réveillée. C'est une belle mort, crois-moi." },
    v_germain_nuit: { by: "germain", topic: "nuit", true: false, belie: "D_germain_nuit", short: "Je suis monté me coucher à dix heures",
      text: "Je suis monté me coucher à dix heures, comme tous les soirs. Je ne l'ai pas revue. C'est Odile qui m'a réveillé, vers une heure." },
    v_odile_nuit: { by: "odile", topic: "nuit", true: false, belie: "D_odile_nuit", short: "Elle dormait quand je suis partie",
      text: "Je l'ai veillée jusqu'à onze heures. Elle dormait quand je suis partie. Je suis revenue à une heure, et elle était froide." },
    v_mariette_nuit: { by: "mariette", topic: "nuit", true: true, short: "Des voix, tard, puis Odile dans l'escalier",
      text: "Il y a eu des voix dans sa chambre, tard, vers onze heures. Une voix d'homme. Puis plus rien. Puis, après minuit, Odile dans l'escalier, qui montait." },
    v_jeanne_nuit: { by: "jeanne", topic: "nuit", true: true, short: "Odile avait déjà fait la toilette, seule",
      text: "Quand je suis arrivée, le matin, Odile avait déjà fait la toilette. Seule. D'habitude, on s'y met à deux ou trois. Elle n'avait voulu personne." },
  },
  gestes: {
    g_fouille_odile: { name: "Fouiller la chambre d'Odile", poids: 2, echoes: [
      "Tu revois tes propres mains dans le tiroir d'Odile, entre ses bas et ses mouchoirs pliés en quatre. Des mains de voleur, dans la maison où tu es né{e}.",
      "Ce matin, Odile a ouvert son tiroir devant toi pour y prendre un mouchoir. Elle a eu un temps d'arrêt, très court. Peut-être rien n'était dérangé. Peut-être que si." ] },
    g_fouille_fabre: { name: "Fouiller la sacoche du docteur", poids: 1, echoes: [
      "L'odeur de la sacoche de Fabre te revient : le cuir, le camphre, l'alcool. Et ton geste pour la refermer exactement comme elle était." ] },
    g_crochete: { name: "Forcer la porte de Lucien", poids: 1, echoes: [
      "La serrure de la chambre de Lucien porte maintenant une rayure claire, au bord du trou. Ta rayure." ] },
    g_mensonge: { name: "Mentir à Odile", poids: 2, echoes: [
      "Tu entends encore ta voix, très calme, dire à Odile une chose fausse. Tu as menti comme on mentait dans cette maison : sans hausser le ton.",
      { text: "Odile t'a regardé{e} longtemps, ce soir, au-dessus de la soupe. Tu as baissé les yeux le premier, ou la première, tu ne sais plus.", if: { day: { min: 3 } } } ] },
    g_menace: { name: "Menacer le docteur", poids: 2, echoes: [
      "Les mains de Fabre tremblaient sur son verre quand tu lui as parlé. Tu as aimé, une seconde, le voir trembler. Cette seconde-là te reste." ] },
    g_baiser: { name: "Embrasser Jeanne", poids: 1, echoes: [
      { text: "Le goût de la bouche de Jeanne, sel et fumée de bois. Et l'anneau de son mari, froid sur ta nuque.", tendre: true, else: "Ce qui s'est passé avec Jeanne, dans la chambre de la morte, te revient par vagues." } ] },
    g_signe: { name: "Signer la vente du bois", poids: 3, echoes: [
      "Ta signature sur l'acte de Germain, nette, appliquée. Les hêtres des Fayards, que ton père appelait par leurs noms." ] },
    g_brule: { name: "Brûler la lettre", poids: 3, echoes: [
      "Le papier de ta mère se recroqueville dans le feu, et l'écriture tremblée brille une seconde en lettres d'or avant de noircir." ] },
    g_tu_odile: { name: "Laisser Odile seule", poids: 1, echoes: [
      "Odile, dans la chambre de Lucien, le dos tourné, les épaules qui tremblent. Toi, sur le seuil. Puis toi, dans l'escalier." ] },
  },

  // ------------------------------------------------------------------ the world moves on
  march: [
    { id: "souper", at: { day: 1, hour: 19 }, to: "A_souper", acts: ["I"] },
    { id: "lettre", at: { day: 2, hour: 8 }, to: "B_lettre", acts: ["I"] },
    { id: "germain", at: { day: 2, hour: 11 }, to: "B_germain", acts: ["II"] },
    { id: "testament", at: { day: 2, hour: 17 }, to: "B_testament", acts: ["II"] },
    { id: "lampe", at: { day: 2, hour: 21 }, to: "B_lampe", acts: ["II"] },
    { id: "matin3", at: { day: 3, hour: 8 }, to: "C_matin", acts: ["II"] },
    { id: "odile", at: { day: 3, hour: 15 }, if: { not: { has: "odile:aveu" } }, to: "C_odile", acts: ["III"] },
    { id: "veillee", at: { day: 3, hour: 20 }, to: "C_veillee", acts: ["III"] },
  ],
  deadline: { day: 4, hour: 10, to: "X_enterrement", acts: ["III"] },

  // ------------------------------------------------------------------ mysteries and clues
  mysteries: {
    E: { title: "Ce qui s'est passé sur l'étang", act: "III", solved: "etang:verite",
      answer: { text: "Lucien a suivi le héros, qui était parti retrouver Jeanne à la cabane. Odile l'a vu partir de sa fenêtre et ne l'a pas rappelé. Le héros a couru sur la glace et l'a crevée à son tour. Armance n'a pu tirer qu'un enfant de l'eau : elle a tiré le héros." } },
    N: { title: "La dernière nuit d'Armance", act: "III", solved: "odile:aveu",
      answer: { person: "odile", text: "Armance a demandé la fiole de laudanum à Odile, après minuit, et lui a dit : « Tout. » Ses mains ne pouvaient plus la déboucher. Odile la lui a versée, et elle est restée jusqu'à la fin." } },
  },
  clues: {
    e_engelures: { rev: "E", short: "Les bras de ta mère", text: "Sur les avant-bras de ta mère, de vieilles cicatrices blanches et lisses, des poignets jusqu'aux coudes, comme des brûlures de froid." },
    e_fenetre: { rev: "E", short: "La fenêtre de la couture", text: "De la fenêtre de l'ancienne chambre d'Odile, on voit tout le sentier de la cabane aux barques, jusqu'aux saules." },
    e_lanterne: { rev: "E", short: "La lanterne de tempête", text: "Dans la cabane, une vieille lanterne de tempête au verre fêlé, marquée au fer sur son socle : A. S." },
    e_poutre: { rev: "E", short: "La poutre de la cabane", text: "Sur la poutre de la cabane, gravées au couteau, deux initiales, la tienne et un J, et une date : l'hiver où Lucien est mort." },
    e_patins: { rev: "E", short: "Les patins de Lucien", text: "Les patins de Lucien, dans sa chambre : la courroie du pied droit a été tranchée net, d'un coup de lame." },
    e_carnet: { rev: "E", short: "Le carnet du docteur", text: "Dans le carnet de visites du docteur Fabre, le soir de l'étang, deux lignes : l'enfant noyé, et toi, « tiré de l'eau par la mère, fièvre de froid »." },
    e_firmin: { rev: "E", short: "Les lettres à l'oncle Firmin", text: "Au grenier, les réponses de l'oncle Firmin à ta mère, une par mois pendant douze ans. Chacune commence par : « Tu me demandes encore comment il va. »" },
    e_lettre: { rev: "E", short: "La lettre de ta mère", text: "La lettre de ta mère dit l'étang tel qu'il fut : la cabane, la fenêtre d'Odile, la corde, et le choix qu'elle a fait." },
    n_mains: { rev: "N", short: "Les mains de ta mère", text: "Selon Mariette, ta mère ne pouvait plus déboucher un flacon ni tourner une clef depuis l'automne. Il fallait tout lui ouvrir." },
    n_fiole: { rev: "N", short: "La fiole vide", text: "Derrière le pot de chambre, sous le lit de ta mère : la fiole de laudanum du docteur, vide, bouchée." },
    n_cuiller: { rev: "N", short: "La cuiller oubliée", text: "Sur la table de nuit, derrière le bougeoir, une petite cuiller d'argent au creux brun et sec, qui sent le clou de girofle." },
    n_voix: { rev: "N", short: "Les voix de onze heures", text: "Mariette a entendu une voix d'homme dans la chambre de ta mère vers onze heures, le soir de sa mort." },
    n_manche: { rev: "N", short: "La manche d'Odile", text: "Au poignet gauche d'Odile, sur sa robe noire, une tache ronde et raide, brun-jaune, qui sent l'épice." },
    n_acte: { rev: "N", short: "L'acte de vente", text: "L'acte de vente du bois des Fayards, préparé pour la signature de ta mère, porte une tache d'encre et une date : le jour de sa mort." },
    n_germain: { rev: "N", short: "Germain est monté", text: "Germain est monté chez ta mère le soir de sa mort, vers onze heures, avec l'acte de vente. Il a menti sur sa soirée." },
    n_vernet: { rev: "N", short: "La lettre de Vernet", text: "Le marchand de bois Vernet réclame à Germain trois cents livres avant la Chandeleur, « faute de quoi j'irai voir qui de droit ».", leurre: true },
  },
  contradictions: [
    { a: "n_voix", b: "n_acte", clue: "n_germain" },
  ],
  items: {
    convocation: { name: "La lettre qui t'a fait venir", kind: "document", form: "billet", hand: "tremblee",
      text: "Viens avant la neige. Il faut que je te parle.\n\nA." },
    lettre: { name: "La lettre de ta mère", kind: "document", form: "lettre", hand: "tremblee", clue: "e_lettre",
      text: "{hero},\n\nJe t'ai demandé de venir et je ne suis plus sûre de tenir jusqu'à toi. Alors j'écris, puisque c'est ce que je fais de moins mal.\n\nTu crois depuis douze ans que je t'ai chassé{e}. Je t'ai éloigné{e}, et c'est autre chose. Je ne t'ai jamais dit pourquoi.\n\nCe soir-là, Lucien t'a suivi{e}. Tu étais à la cabane avec la petite Pradel, je le sais, tout le monde le sait. Odile l'a vu partir de sa fenêtre et ne l'a pas rappelé. Elle me l'a dit la nuit même, à genoux dans la cuisine. Je lui ai dit de se relever et de ne jamais le redire. Je te demande la même chose : ne lui fais pas payer cette fenêtre. Elle l'a assez payée.\n\nQuand je suis arrivée au bord avec la lanterne, vous étiez deux dans l'eau. Toi, tu tenais le bord. Lui, je voyais sa main. Je t'ai tendu{e} la gaffe parce que tu étais le plus près, et quand je suis revenue vers lui, il n'y avait plus de main. J'ai eu une seconde pour choisir et je n'ai pas choisi : j'ai tiré ce qui était à portée. Je me le suis répété douze ans. Je ne suis pas sûre que ce soit vrai.\n\nAprès, je ne pouvais plus te regarder sans voir l'autre main. Et le père Pradel disait au bourg que c'était toi qui l'avais emmené sur la glace. Je t'ai envoyé{e} chez Firmin pour ces deux raisons, et la première est la plus laide.\n\nTu as été tiré{e} de l'eau, {hero}. Tu n'as rien tenu, tu étais à moitié mort{e}. Si tu te souviens d'autre chose, c'est la fièvre.\n\nJe t'embrasse comme je n'ai pas su le faire.\n\nTa mère." },
    carnet_fabre: { name: "Le carnet de visites du docteur Fabre", kind: "document", form: "registre", hand: "hative", clue: "e_carnet",
      text: "14 janvier. Les Lisières, maison Sorlin, appelé à onze heures du soir.\n— Sorlin, Lucien, neuf ans. Noyé sous la glace de l'étang, près de la source. Sorti par le valet Baptiste. Décédé à mon arrivée, depuis une heure au moins.\n— Sorlin, {hero}, dix-sept ans. Tiré{e} de l'eau par la mère, à la gaffe. Fièvre de froid, délire. Frictions, bouillon, laudanum, six gouttes.\n— Mme Sorlin : engelures graves aux deux avant-bras. Refuse les soins.\n— Mlle Odile : rien. Ne parle pas." },
    acte_vente: { name: "L'acte de vente du bois des Fayards", kind: "document", form: "acte", hand: "soignee", clue: "n_acte",
      text: "Par-devant maître Combaz, notaire à Saint-Amans, Mme Armance Sorlin, veuve, propriétaire, vend au sieur Jules Vernet, marchand de bois, la coupe entière du bois dit des Fayards, quarante arpents de hêtres et de sapins, pour la somme de neuf cents livres.\n\nFait aux Lisières, le 6 décembre.\n\n(La ligne de la signature de la venderesse est vide. Juste au-dessus, une grosse tache d'encre a coulé, comme d'une plume qu'on a jetée.)" },
    lettre_vernet: { name: "La lettre de Vernet à Germain", kind: "document", form: "lettre", hand: "hative", clue: "n_vernet",
      text: "Monsieur Rouvière,\n\nVos promesses ne me paient pas. Trois cents livres avant la Chandeleur, ou la coupe des Fayards comme convenu, faute de quoi j'irai voir qui de droit, et votre belle-mère saura à quoi vous employez l'argent de sa scierie.\n\nJ. Vernet" },
    cle_lucien: { name: "La clef de la chambre de Lucien", kind: "outil" },
  },

  quests: [
    { id: "I_retour", act: "I", kind: "principale", title: "Revenir aux Lisières", start: "A_arrivee" },
    { id: "III_lucien", act: "III", kind: "annexe", title: "La chambre fermée", start: "Q_mariette_lucien", echo: "lucien:chambre" },
    { id: "III_lettre", act: "III", kind: "annexe", title: "La lettre disparue", start: "B_lettre", echo: "lettre:lue" },
    { id: "III_jeanne", act: "III", kind: "annexe", title: "Ce que Jeanne a vu", start: "Q_jeanne_cabane", echo: "jeanne:aveu" },
    { id: "III_bois", act: "III", kind: "annexe", title: "Le bois des Fayards", start: "B_germain", echo: "bois:decide" },
    { id: "III_nuit", act: "III", kind: "annexe", title: "La dernière nuit de ta mère", start: "Q_fabre_nuit", echo: "odile:aveu" },
    { id: "III_parole", act: "III", kind: "principale", title: "La parole sur la tombe", start: "C_matin" },
  ],

  // ------------------------------------------------------------------ dreams (the conscience at night)
  dreams: [
    { to: "R_glace", if: { seen: "S3_glace" } },
    { to: "R_mere", if: { seen: "A_lit" } },
    { to: "R_fiole", if: { clue: "n_fiole" } },
    { to: "R_cabane", if: { geste: "g_baiser" } },
  ],

  achievements: {
    sincere: { title: "Une chose vraie", desc: "Dire une chose vraie sur ta mère, à la dernière veillée.", if: { has: "veillee:vrai" } },
    doute: { title: "Rien ne tient tout seul", desc: "Mettre en doute trois versions devant ceux qui les ont données.", if: { count: [{ dementi: "v_odile_etang" }, { dementi: "v_odile_nuit" }, { dementi: "v_jeanne_etang" }, { dementi: "v_fabre_nuit" }, { dementi: "v_germain_nuit" }, { dementi: "v_germain_etang" }, { dementi: "v_mariette_etang" }], min: 3 } },
    soi: { title: "Ta propre version", desc: "Revenir sur ce dont tu croyais te souvenir.", if: { dementi: "v_hero_etang" } },
  },

  // ------------------------------------------------------------------ people (the house is small: everyone is somewhere)
  people: {
    odile: { name: "Odile", aspect: { allure: "trente-quatre ans, droite, peu de mots", habits: "robe de deuil", voix: "parle peu, et ça coupe" }, f: true, face: { age: "adulte", skin: "clair", hair: "chatain", coif: "chignon", eyes: "lourds", iris: "gris", nose: "fin", lips: "fines", shape: "allonge" },
      desc: "Ta sœur aînée, trente-quatre ans. Elle est restée. Elle a soigné ta mère pendant trois ans. Elle parle peu, et quand elle parle, ça coupe.",
      at: [
        { when: "matin", place: "cuisine", talk: "T_odile", label: "Parler à Odile", see: "Odile, à la table de la cuisine, coupe du pain qu'elle ne mange pas." },
        { when: ["midi", "apresmidi"], place: "chambre", talk: "T_odile", label: "Parler à Odile", see: "Odile est assise près du lit, le dos très droit, les mains sur les genoux.", if: { not: { has: "odile:refuge" } } },
        { when: "apresmidi", place: "etage", talk: "T_odile", label: "Frapper à la porte de Lucien", see: "Un rai de lumière sous la porte de la chambre de Lucien. Quelqu'un est entré là.", if: { has: "odile:refuge" } },
        { when: "soir", place: "salle", talk: "T_odile", label: "T'asseoir près d'Odile", see: "Odile raccommode à la lueur de la lampe, au bout de la table." },
        { when: "nuit", place: "chambre", talk: "T_odile", label: "Rejoindre Odile près du lit", see: "Odile veille, enveloppée dans un châle, le visage tourné vers le lit.", from: { day: 3, hour: 21 } },
      ],
      confront: { n_fiole: "M_odile_fiole", n_cuiller: "M_odile_fiole", n_manche: "M_odile_fiole", e_fenetre: "M_odile_fenetre", e_lettre: "M_odile_lettre" },
      shrug: ["Odile regarde la chose, puis toi. « Et alors ? »", "« Range ça, dit Odile. Ce n'est pas le jour. »"] },
    germain: { name: "Germain Rouvière", aspect: { allure: "homme aimable, prudent", visage: "moustache brune", signe: "fait attention à ses bottes" }, f: false, face: { age: "adulte", skin: "hale", hair: "brun", coif: "court", beard: "moustache", eyes: "ronds", iris: "brun", nose: "large", shape: "carre" },
      desc: "Le mari d'Odile, quarante et un ans. Il tient la scierie depuis la mort de ton père, ou depuis qu'Odile l'a épousé, selon qui raconte. Un homme aimable qui fait attention à ses bottes.",
      at: [
        { when: "matin", place: "cour", talk: "T_germain", label: "Descendre voir Germain à la scierie", see: "En contrebas, Germain tourne autour de la grande scie immobile, les mains dans les poches." },
        { when: "midi", place: "salle", talk: "T_germain", label: "Parler à Germain", see: "Germain se chauffe le dos à la cheminée, une pipe éteinte entre les dents." },
        { when: "apresmidi", place: "bureau", talk: "T_germain", label: "Parler à Germain", see: "Germain est au secrétaire de ta mère. Il referme un tiroir en t'entendant." },
        { when: "soir", place: "salle", talk: "T_germain", label: "Parler à Germain", see: "Germain bat les cartes pour personne, sur un coin de la table." },
      ],
      confront: { n_acte: "M_germain_acte", n_voix: "M_germain_acte", n_germain: "M_germain_acte", n_vernet: "M_germain_vernet", lettre_vernet: "M_germain_vernet" },
      shrug: ["Germain sourit. « Je ne vois pas. »", "« Garde tes papiers, dit Germain. On réglera les affaires après l'enterrement. »"] },
    mariette: { name: "Mariette Coulon", aspect: { allure: "soixante-dix ans, jamais assise", habits: "tablier, foulard", signe: "s'essuie les mains à son tablier" }, f: true, face: { age: "ancien", skin: "hale", hair: "blanc", coif: "foulard", eyes: "tombants", iris: "noir", nose: "busque", marks: ["grain"] },
      desc: "La servante de la maison depuis quarante ans. Elle t'a appris à lire l'heure, à plumer une poule et à te taire. Elle a soixante-dix ans et le pas d'une femme qui n'a jamais été assise.",
      at: [
        { when: ["matin", "midi", "apresmidi", "soir"], place: "cuisine", talk: "T_mariette", label: "Parler à Mariette", see: "Mariette est au fourneau. Elle ne se retourne pas, mais elle sait que tu es là." },
        { when: "nuit", place: "chambre", talk: "T_mariette", label: "T'asseoir près de Mariette", see: "Mariette veille, son chapelet entre les doigts, sans le dire.", until: { day: 2, hour: 7 } },
      ],
      confront: { e_engelures: "M_mariette_bras", e_lanterne: "M_mariette_bras", n_fiole: "M_mariette_fiole", n_cuiller: "M_mariette_fiole" },
      shrug: ["Mariette regarde à peine. « Je n'ai pas mes lunettes. »", "« Ça, dit Mariette, c'est à ta sœur qu'il faut le montrer. »"] },
    fabre: { name: "Le docteur Fabre", aspect: { habits: "gilet noir", visage: "lunettes, barbe grise", signe: "un verre à la main" }, f: false, face: { age: "mur", skin: "clair", hair: "gris", coif: "degarni", beard: "barbe", eyes: "lourds", iris: "bleu", nose: "busque", marks: ["lunettes"] },
      desc: "Anselme Fabre, médecin de Saint-Amans, cinquante-huit ans. Il est monté constater le décès et la neige l'a gardé. Il a soigné toute la famille, et il boit comme un homme qui a décidé de ne plus compter.",
      at: [
        { when: ["matin", "midi"], place: "salle", talk: "T_fabre", label: "Parler au docteur Fabre", see: "Le docteur Fabre lit un almanach vieux de trois ans près du feu, un verre à portée de main." },
        { when: ["apresmidi", "soir"], place: "salle", talk: "T_fabre", label: "Parler au docteur Fabre", see: "Le docteur Fabre somnole dans le fauteuil de ton père, son verre en équilibre sur l'accoudoir." },
        { when: "nuit", place: "salle", talk: "T_fabre", label: "Réveiller le docteur", see: "Le docteur dort dans le fauteuil, la bouche ouverte. La bouteille, à ses pieds, est presque vide." },
      ],
      confront: { e_carnet: "M_fabre_carnet", carnet_fabre: "M_fabre_carnet", n_fiole: "D_fabre_nuit", n_cuiller: "D_fabre_nuit", e_engelures: "M_fabre_bras" },
      shrug: ["Fabre plisse les yeux derrière ses lunettes. « Je suis médecin, pas juge de paix. »", "« Montre ça à qui ça regarde », dit Fabre, et il boit."] },
    jeanne: { name: "Jeanne Gerbaud", aspect: { allure: "l'institutrice, ton amie d'autrefois", signe: "aiguille et drap noir", voix: "voix si basse qu'on se penche" }, f: true, face: { age: "jeune", skin: "beige", hair: "noir", coif: "chignon", eyes: "amande", iris: "vert", nose: "retrousse", lips: "pleines", shape: "ovale", marks: ["rousseur"] },
      desc: "Jeanne Pradel, devenue Gerbaud. L'institutrice de Saint-Amans, mariée au meunier. Elle est montée aider Odile pour la toilette de ta mère, et la neige l'a gardée. Vous aviez seize et dix-sept ans, autrefois.",
      at: [
        { when: ["matin", "midi"], place: "chambre", talk: "T_jeanne", label: "Parler à Jeanne", see: "Jeanne coud le linceul au pied du lit, l'aiguille très vite, le fil entre les dents." },
        { when: "apresmidi", place: "cuisine", talk: "T_jeanne", label: "Parler à Jeanne", see: "Jeanne pèle des pommes de terre avec Mariette. Elles ne parlent pas." },
        { when: "soir", place: "salle", talk: "T_jeanne", label: "Parler à Jeanne", see: "Jeanne se tient près de la fenêtre et regarde tomber la neige sur la vitre noire." },
        { when: "nuit", place: "chambre", talk: "T_jeanne", label: "Prendre la veille avec Jeanne", see: "Jeanne veille. Elle a posé son châle sur ses genoux, et la lumière des cierges lui fait un visage de quinze ans.", from: { day: 2, hour: 21 }, until: { day: 3, hour: 7 } },
      ],
      confront: { e_poutre: "M_jeanne_poutre", e_lettre: "M_jeanne_lettre" },
      shrug: ["Jeanne regarde, et secoue la tête. « Je ne sais pas ce que tu veux que je te dise. »", "« Tu cherches quelque chose, dit Jeanne doucement. Je ne crois pas que ce soit ça. »"] },
  },
  companions: {},
  endings: {},
  epilogueTitle: "Ce que devinrent les gens des Lisières",
};
