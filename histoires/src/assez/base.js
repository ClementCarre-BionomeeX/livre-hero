// « Le Mot de Monsieur Orbe » : the tenth of ten short puzzle books in the Croûte & Chrome universe (Clément, 23/11).
// Monsieur Orbe, the round financier of the Club, has died. His will leaves everything to whoever says, before the
// notary and before sunset, the word he never said; one letter is hidden in each round thing of his round house
// (examens with tools), and the five letters must be put back in order (suite, each letter once). The plot is in BIBLE.md.
module.exports = {
  id: "assez",
  title: "Le Mot de Monsieur Orbe",
  subtitle: "Croûte & Chrome · un testament, une maison ronde et cinq lettres",
  summary: "Monsieur Orbe est mort, rond, riche, et sans enfants. Son testament lègue tout à celui qui prononcera devant le notaire, avant le coucher du soleil, le mot qu'il n'a jamais dit de sa vie. Une lettre est cachée dans chaque objet rond de sa maison ronde. Ses neveux cherchent depuis midi, en criant. Toi, tu es son valet de chambre depuis vingt ans, et tu sais où il rangeait les choses.",
  tags: ["enigmes", "humour", "intrigue"],
  serie: "Croûte 'n Chrome",
  author: "Claude, pour Clément",
  age: 10,
  skin: "parchemin",
  cover: { motif: "oeil", color: "#4a4a6a" },
  glossary: Object.assign({}, require("../glossaire.js"), {
    "testament|testaments": "L'écrit où quelqu'un dit à qui iront ses biens après sa mort.",
    "codicille|codicilles": "Un ajout à un testament, écrit après lui, et qui le complète.",
    "notaire|notaires": "Celui qui lit et fait respecter les testaments et les contrats.",
    "légataire|légataires": "Celui ou celle à qui un testament donne quelque chose.",
  }),
  voice: "deuxième personne, présent",
  version: 1,
  start: "A_lecture",
  intro: [
    "Il y a trente et un ans, le monde s'est effondré. Monsieur Orbe ne s'en est pas aperçu : sa fortune a continué de grossir, comme une bille qui roule sur une pente qu'elle ne voit pas.",
    "Il vivait au Domaine, dans une maison ronde, sans un angle, avec des meubles ronds, des tapis ronds, et un jardin en cercle. Il disait que les angles sont le commencement de la pauvreté : on s'y cogne, on y range des choses, on y finit.",
  ],
  acts: [
    { id: "I", title: "Le mot", question: "Quel mot Monsieur Orbe n'a-t-il jamais dit ?", levels: [1, 1], start: "A_lecture" },
  ],
  voies: {
    valet: { label: "Valet de chambre", labelF: "Femme de chambre", tip: "Les habitudes de Monsieur, ses tiroirs, ses manies : tu sais tout de lui, sauf ce qu'il pensait.", like: "barde", bonus: { social: 30, discretion: 30, savoir: 15, nature: 5, combat: 5, magie: 5 } },
    cuisinier: { label: "Cuisinier de la maison", labelF: "Cuisinière de la maison", tip: "Les plats ronds, les biscuits, les desserts : Monsieur ne mangeait que ce qui roulait.", like: "rodeur", bonus: { nature: 30, social: 20, combat: 15, discretion: 15, savoir: 5, magie: 5 } },
    comptable: { label: "Comptable de Monsieur", labelF: "Comptable de Monsieur", tip: "Les chiffres, les comptes, les coffres : tu as additionné sa fortune pendant vingt ans sans jamais en voir le bout.", like: "mage", bonus: { savoir: 35, discretion: 20, social: 15, nature: 5, combat: 5, magie: 5 } },
  },
  past: [
    { q: "Que faisais-tu chez Monsieur Orbe ?", answers: [
      { label: "Tu l'habillais chaque matin, de costumes crème taillés en rond. En vingt ans, il t'a dit trois cents fois *encore*, et une fois *merci*, par erreur.", fx: { voie: "valet" } },
      { label: "Tu lui faisais des gâteaux ronds, des biscuits ronds, des soufflés ronds. Il en redemandait toujours. Il n'a jamais laissé une miette dans une assiette.", fx: { voie: "cuisinier" } },
      { label: "Tu tenais ses comptes, dans de grands registres ronds. Chaque soir, il te demandait le total, et chaque soir il disait : *et demain ?*", fx: { voie: "comptable" } },
    ] },
  ],
  lore: {
    pages: [
      { title: "Monsieur Orbe", text: [
        "**Monsieur Orbe** était membre du Club des Inaccessibles. Il était si riche qu'il ne savait plus ce qu'il possédait, et il avait la forme exacte de sa fortune : ronde, et sans angle par où la saisir.",
        "On ne l'a jamais entendu refuser quoi que ce soit : un plat, un placement, un compliment. Il disait *encore*, *davantage*, *et puis ?* Ses neveux, qui l'ont fréquenté autant qu'il le fallait pour hériter, disent la même chose, plus fort.",
      ] },
    ],
    names: {
      "Domaine": "Le quartier des riches, derrière les grilles dorées qui ne s'ouvrent jamais.",
      "Club des Inaccessibles": "Le club des clients les plus riches de la Maison, qui ne se réunit jamais.",
      "Bas-Quartier": "Les rues d'en bas, au pied du Domaine, où vivent ceux qui fabriquent ce que le Domaine achète.",
    },
  },
  companions: {},
  factions: {},
  relics: {},
  people: {
    paraphe: { name: "Maître Paraphe", aka: ["Paraphe", "le notaire"],
      face: { age: "ancien", skin: "clair", hair: "gris", coif: "court", beard: "moustache", eyes: "lourds", iris: "gris", nose: "fin", lips: "fines", shape: "allonge", marks: ["lunettes"] },
      aspect: { allure: "long et sec comme une plume", habits: "redingote noire", signe: "un sablier sur la table" },
      qui: "Le notaire de Monsieur Orbe.", desc: "Le notaire de Monsieur Orbe. Il lit les testaments à voix lente, comme on compte des pièces, et il ne sourit qu'aux clauses bien rédigées." },
    cyprien: { name: "Cyprien Orbe", aka: ["Cyprien", "le neveu"],
      face: { age: "adulte", skin: "clair", hair: "chatain", coif: "court", beard: "sans", eyes: "ronds", iris: "bleu", nose: "large", lips: "pleines", shape: "rond", marks: [] },
      aspect: { allure: "rond comme son oncle, en plus pressé", habits: "gilet brodé", signe: "dit « et puis ? » à tout" },
      qui: "Le neveu de Monsieur Orbe.", desc: "Le neveu de Monsieur Orbe, déjà rond à quarante ans. Il cherche le mot en criant tous ceux qu'il connaît : plus, encore, davantage, toujours." },
    ottilie: { name: "Ottilie Orbe", aka: ["Ottilie", "la nièce"], f: true,
      face: { age: "jeune", skin: "clair", hair: "chatain", coif: "milong", beard: "sans", eyes: "amande", iris: "noisette", nose: "fin", lips: "fines", shape: "ovale", marks: ["rousseur"] },
      aspect: { allure: "mince, discrète", habits: "robe de deuil trop grande", signe: "un bouquet de pâquerettes à la main" },
      qui: "La nièce de Monsieur Orbe.", desc: "La nièce de Monsieur Orbe. Elle venait le voir le dimanche, sans rien demander, et il ne savait pas quoi faire d'elle." },
  },
  items: {
    loupe: { name: "La loupe de Monsieur", kind: "outil", keep: true, desc: "Une loupe ronde à manche d'ivoire, que Monsieur Orbe utilisait pour lire les petits caractères de ses contrats, et surtout pour se voir plus gros dans la vitre." },
    chiffon: { name: "Le chiffon de laine", kind: "outil", keep: true, desc: "Un chiffon de laine douce, pour les miroirs, les cuivres et les vitrines. Il y a beaucoup de miroirs dans une maison ronde." },
    clef: { name: "La clef de remontage", kind: "outil", keep: true, desc: "Une petite clef de laiton, pour remonter l'horloge du salon, que Monsieur Orbe aimait entendre sonner : elle lui rappelait que les intérêts tombaient." },
    testament: { name: "Le testament", kind: "document", keep: true, form: "acte", hand: "soignee",
      desc: "Une copie du testament de Monsieur Orbe, que Maître Paraphe a remise à chacun.",
      text: "*Je lègue l'ensemble de ma fortune à celui qui prononcera devant mon notaire, avant le coucher du soleil, le mot que je n'ai jamais dit de ma vie.*\n\n*Je l'ai caché dans ma maison, une lettre par chose ronde, puisque je n'ai rien d'autre. Les angles n'en cachent aucune : je n'en ai pas.*\n\n*Si personne ne le dit, ma fortune reviendra au Club des Inaccessibles, qui n'en fera rien, ce qui est la seule chose qu'on puisse faire d'une fortune quand on en a trop.*\n\n*Un codicille, scellé, sera ouvert quand le mot aura été dit.*\n\n*Orbe.*" },
  },
  clues: {
    i_testament: { rev: "M", text: "Le testament : le mot que Monsieur Orbe n'a jamais dit, une lettre cachée par chose ronde de la maison, à dire devant le notaire avant le coucher du soleil." },
    i_encore: { rev: "M", text: "En vingt ans, Monsieur Orbe a dit *encore*, *davantage*, *et puis ?*. Il n'a jamais rien refusé." },
  },
  quests: [],
  mysteries: {
    M: { title: "Quel mot Monsieur Orbe n'a-t-il jamais dit ?", act: "I", solved: "mot:trouve",
      answer: { person: "paraphe", text: "ASSEZ. Il ne l'a jamais dit de sa vie, et il a laissé sa fortune à celui qui saurait le dire." } },
  },
  examens: {
    miroir: { title: "Le grand miroir rond",
      nu: "Au mur du salon, un miroir rond de deux mètres, cerclé d'or, où Monsieur Orbe se regardait chaque matin avec l'intérêt d'un homme qui suit le cours d'une action. Il est terne de poussière, depuis la mort de Monsieur : personne n'a eu le cœur de l'essuyer.",
      avec: {
        chiffon: { text: "Tu essuies le miroir, en rond, comme il aimait. Et ton souffle, en s'approchant, fait paraître sur le verre, en buée, une lettre tracée au doigt, de l'intérieur de la poussière, qui disparaît dès que tu recules : un **S**.", fx: { flag: "lettre:s1" } },
        loupe: { text: "La loupe te montre ton propre œil, énorme, dans le miroir, et derrière lui la maison ronde, toute petite. Monsieur Orbe aimait ce jeu-là." },
      } },
    globe: { title: "Le globe du bureau",
      nu: "Sur le bureau rond, un globe terrestre d'avant l'Effondrement, aux océans bleu passé, qui tourne au moindre souffle. Monsieur Orbe y posait le doigt, le matin, sur un pays au hasard, et l'achetait.",
      avec: {
        loupe: { text: "Sous la loupe, sur le globe, au bord du désert, un point minuscule a été entouré à l'encre : le Domaine. Et à côté, d'une plume très fine, une lettre : un **A**. C'est le seul endroit du monde qu'il n'ait jamais acheté. Il y habitait.", fx: { flag: "lettre:a" } },
        chiffon: { text: "Tu essuies le globe. Il tourne sous le chiffon, et l'Effondrement tout entier passe sous tes doigts, en bleu passé, sans un pli." },
      } },
    horloge: { title: "L'horloge ronde",
      nu: "Dans le salon, une horloge ronde, haute comme une porte, au cadran d'émail blanc. Elle s'est arrêtée à l'heure de la mort de Monsieur, comme le veut l'usage, parce que personne ne l'a remontée.",
      avec: {
        clef: { text: "Tu remontes l'horloge. Elle repart, fait trois tours de balancier, et sonne midi d'un coup, comme si elle avait du retard à rattraper. Au douzième coup, une petite trappe s'ouvre au milieu du cadran, sous les aiguilles, et montre une plaque d'émail : un **Z**.", fx: { flag: "lettre:z" } },
        loupe: { text: "La loupe grossit le cadran. Au centre, sous les aiguilles, la jointure d'une trappe minuscule, qui ne s'ouvre qu'avec l'horloge." },
      } },
    biscuits: { title: "La boîte à biscuits",
      nu: "Dans la cuisine, sur la plus haute étagère, la grande boîte à biscuits ronde de Monsieur, en fer blanc, où il piochait la nuit. Tu l'ouvres. Elle est vide, sauf un biscuit, un seul, en forme de lettre : un **E**. Monsieur Orbe n'a jamais laissé un biscuit dans une boîte de sa vie. Celui-là, il l'a laissé exprès.",
      fx: { flag: "lettre:e" },
      avec: {
        loupe: { text: "Sous la loupe, le biscuit en forme d'E porte une trace de dent, très légère, au coin. Il a failli le manger. Il s'est retenu. C'est, à ta connaissance, la seule fois." },
      } },
    coffre: { title: "Le coffre-fort rond",
      nu: "Dans le bureau, encastré dans le mur courbe, un coffre-fort rond comme un hublot, au volant d'acier. Il est ouvert. Il est vide. Maître Paraphe l'a fait ouvrir ce matin : la fortune de Monsieur Orbe est ailleurs, dans des banques qui n'ont pas de murs.",
      avec: {
        loupe: { text: "Sous la loupe, au fond du coffre vide, gravée dans l'acier, d'une pointe de diamant : une lettre, un **S**. Seule. Au fond d'un coffre vide. Il l'a gravée là, au seul endroit de la maison où l'on ne cherche jamais rien, parce qu'on sait qu'il n'y a plus rien.", fx: { flag: "lettre:s2" } },
        chiffon: { text: "Tu passes le chiffon au fond du coffre. Il accroche, à un endroit, une rayure fine, régulière, comme une lettre gravée." },
      } },
  },
  puzzles: {
    p_mot: {
      kind: "suite", once: true, title: "Les cinq lettres",
      text: "Cinq lettres, trouvées dans cinq choses rondes. Un mot que Monsieur Orbe n'a jamais dit de sa vie. Tu les poses sur la table du salon, comme des pions.",
      symbols: ["S", "Z", "A", "E", "S"], answer: ["A", "S", "S", "E", "Z"],
      tries: 3,
      hint: [{ if: { clue: "i_encore" }, text: "Il disait encore, davantage, et puis. Le contraire ?" }],
      wrongText: "Tu dis le mot à voix basse, pour l'essayer. Il sonne faux, comme un mot qu'on aurait inventé pour l'occasion.",
      tryLabel: "Dire ce mot à voix basse", label: "Remettre les lettres dans l'ordre", leave: "Ramasser les lettres",
      win: { to: "A_mot", fx: { flag: "mot:trouve", ep: ["seance", 500] } },
      lose: { to: "A_brouille" },
    },
  },
  achievements: {
    lettres: { title: "Cinq choses rondes", desc: "Trouver les cinq lettres de la maison ronde.", if: { all: [{ has: "lettre:s1" }, { has: "lettre:a" }, { has: "lettre:z" }, { has: "lettre:e" }, { has: "lettre:s2" }] } },
    mot: { title: "Le mot", desc: "Trouver le mot que Monsieur Orbe n'a jamais dit.", if: { has: "mot:trouve" } },
  },
  endings: {},
  world: {
    noFood: true,
    money: { units: [{ name: "euro", plural: "euros", value: 1, short: "€" }] },
    start: { place: "salon", hour: 14, gold: 0, food: 0, items: ["loupe", "chiffon", "clef", "testament"], kits: {} },
    places: {
      salon: { ambiance: "chateau", name: "Le salon rond", map: "domaine", x: 50, y: 50, desc: "Un salon circulaire, un tapis rond, un miroir rond, une horloge ronde, et le notaire assis au milieu." },
      bureau: { ambiance: "chateau", name: "Le bureau de Monsieur", map: "domaine", x: 70, y: 40, desc: "Un bureau rond, un globe, et un coffre-fort rond encastré dans le mur courbe." },
      cuisine: { ambiance: "chateau", name: "La cuisine", map: "domaine", x: 30, y: 60, desc: "La cuisine ronde, ses moules ronds, ses casseroles rondes, et la boîte à biscuits sur la plus haute étagère." },
    },
    routes: [], regions: {}, events: {},
  },
  banter: [],
  passages: {},
};
