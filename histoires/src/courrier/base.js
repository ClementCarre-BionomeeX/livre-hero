// « Le Courrier de Vèze » : la première histoire à cartes (9.7, phase 1 du chantier « cartes et draft », Clément,
// 16/11/2026). Trois haltes sur la route d'un pli scellé : à chaque halte, le lecteur joue une carte de sa main, et la
// carte décide de ce qui arrive (rencontre, obstacle, détour…) ; l'histoire dit ce que la carte devient à cet endroit.
// Trois fils (le cavalier, la dette, le cachet) s'ouvrent et se nouent selon les cartes ; le dénouement les lit.
module.exports = {
  id: "courrier",
  title: "Le Courrier de Vèze",
  subtitle: "Histoire à cartes · trois haltes, un pli scellé",
  summary: "La margrave d'Orbec te confie un pli scellé pour le conseil de Vèze, qui vote après-demain au soir. Deux jours de route, un gué, un col, une porte. À chaque halte, tu joues une carte de ta main : une rencontre, un obstacle, un détour, une trahison. La route se construit avec ce que tu joues, et elle se rejoue autrement à chaque partie.",
  author: "Claude, pour Clément",
  age: 12,
  cover: { motif: "cle", color: "#4a3a2a" },
  glossary: require("../glossaire.js"),
  voice: "deuxième personne, présent",
  version: 1,
  start: "A_depart",
  intro: [
    "Les histoires à cartes se jouent avec une main de cartes. À chaque halte, tu en choisis une : elle décide du genre de chose qui t'arrive, et l'histoire te dit ce qu'elle devient à cet endroit. Les cartes fortes coûtent de l'élan ; deux cartes de la même enseigne à la suite t'en rendent un.",
  ],
  acts: [
    { id: "I", title: "Acte I · La route", question: "Arriveras-tu à Vèze avant le vote ?", levels: [1, 1], start: "A_depart" },
    { id: "II", title: "Acte II · Vèze", question: "Que diras-tu au conseil ?", levels: [1, 1], start: "H3_porte" },
  ],
  cartes: require("../../jeux/base.js"),
  fils: {
    rival: { titre: "Le cavalier", ouvert: "Un cavalier en manteau gris va à Vèze par ta route, et il presse son cheval.", noue: "Le cavalier a montré son jeu : il voulait ton pli." },
    dette: { titre: "La dette du passeur", ouvert: "Gilles Tranchemer t'a aidé{e}. Il viendra chercher son prix.", noue: "Tu as payé ce que tu devais à Gilles Tranchemer." },
    secret: { titre: "Le cachet doublé", ouvert: "Deux cires sur ton pli : quelqu'un l'a ouvert avant toi.", noue: "Tu sais qui a ouvert ton pli." },
  },
  jeu: {
    main: 5,
    elan: { depart: 1, halte: 1 },
    deck: ["inconnu_manteau", "colporteur", "pont_emporte", "peagers", "sentier_chevres", "grange", "auberge", "mot_de_trop", "bourse", "loups",
      "corbeau", "bergere", "rival", "rival", "passeur", "passeur", "cachet_double", "cachet_double", "couteau", "couteau", "heure_payer", "heure_payer", "cire_ongle", "cire_ongle", "faux_ami", "raccourci"],
  },
  companions: {},
  factions: {},
  relics: {},
  mysteries: {},
  clues: {},
  quests: [
    { id: "pli", act: "I", kind: "principale", title: "Porter le pli à Vèze", start: "A_depart" },
  ],
  people: {
    margrave: { name: "La margrave d'Orbec", f: true, aspect: { allure: "grande femme sèche", visage: "cheveux gris tirés", voix: "parle par ordres brefs" }, face: { age: "mur", hair: "gris", coif: "chignon" }, desc: "Héloïse d'Orbec, margrave de la marche. Elle gouverne trois vallées, et elle a besoin du vote de Vèze." },
    fremond: { name: "Ancel Frémond", aspect: { allure: "cavalier en manteau gris", visage: "moustache cirée", signe: "une cravache à pommeau d'argent" }, face: { age: "adulte", beard: "moustache" }, desc: "Un cavalier en manteau gris, poli comme un huissier, pressé comme un héritier." },
    gilles: { name: "Gilles Tranchemer", aspect: { allure: "passeur au dos voûté", signe: "un anneau de fer à l'oreille" }, face: { age: "mur", marks: ["cicatrice"] }, desc: "Passeur, guide, contrebandier quand il le faut. Il rend des services, et il tient des comptes." },
    aubertin: { name: "Le prévôt Aubertin", aspect: { allure: "gros homme en robe noire", visage: "triple menton", voix: "voix de chantre" }, face: { age: "mur", shape: "rond" }, desc: "Le prévôt du conseil de Vèze. Il préside le vote, et il aime qu'on le sache." },
  },
  items: {
    pli: { name: "Le pli scellé", kind: "document", desc: "Une lettre pliée en quatre, cachetée de cire rouge aux armes d'Orbec : une tour et trois clés." },
  },
  world: { start: { items: ["pli"], gold: 6, food: 2, hour: 16 } },
  enemies: {},
  shops: {},
  endings: {
    livre: { title: "Le pli remis" },
    verite: { title: "La cire et la vérité" },
    tard: { title: "Trop tard pour le vote" },
    devance: { title: "Le courrier devancé" },
  },
  epilogueTitle: "Ce qu'il advint",
  fates: [
    { who: "fremond", label: "Le cavalier", list: [
      { id: "demasque", title: "le cavalier démasqué", if: { fil: "rival", is: "noue" }, text: "Ancel Frémond quitte Vèze par la porte du nord avant le jour, sans son cheval, qu'on a saisi pour dettes. On dit qu'il sert à présent un autre maître ; on dit aussi qu'il se plaint beaucoup de toi." },
      { id: "court", title: "le cavalier court toujours", if: { fil: "rival" }, text: "Le cavalier en manteau gris disparaît de la marche aussi vite qu'il y était venu. À Vèze, on ignore pour qui il courait, et tu l'ignores aussi." },
      { id: "aucun", title: "une route sans cavalier", text: "Sur la route du retour, tu croises des charrettes, des pèlerins, un troupeau d'oies. Aucun cavalier ne te dépasse." },
    ] },
    { who: "gilles", label: "Le passeur", list: [
      { id: "quitte", title: "le passeur payé", if: { fil: "dette", is: "noue" }, text: "Gilles Tranchemer a raturé ton nom dans son carnet ; il le dit en te croisant au gué, et il ajoute qu'il garde la page, au cas où." },
      { id: "creancier", title: "le passeur attend", if: { fil: "dette" }, text: "Au gué de la Saulne, Gilles Tranchemer t'attend avec la constance d'un percepteur. Ta dette court toujours, et elle a pris des intérêts." },
      { id: "inconnu", title: "aucune dette", text: "Tu es quitte envers tout le monde sur cette route, ce qui est rare, et presque suspect." },
    ] },
  ],
  banter: [],
  passages: {},
};
