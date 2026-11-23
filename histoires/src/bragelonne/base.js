// « Le Vicomte de Bragelonne », Alexandre Dumas, 1847-1850 : un livre à lire, sans choix (lecture: true). Texte de Dumas
// (avec Auguste Maquet), domaine public, d'après l'édition numérique du projet Gutenberg. Les titres des chapitres sont
// de Dumas ; ceux des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
module.exports = {
  id: "bragelonne",
  title: "Le Vicomte de Bragelonne",
  subtitle: "Un roman à lire · Alexandre Dumas, 1847-1850",
  summary: "1660. Mazarin se meurt, et Louis XIV, qui a vingt-deux ans, va prendre le pouvoir. D'Artagnan, toujours lieutenant, quitte le service ; Athos vit à Blois avec son fils Raoul, qui aime depuis l'enfance Louise de La Vallière ; Aramis est évêque, Porthos baron. Trente-cinq ans après leur première rencontre, les quatre amis vont voir se lever le règne d'un jeune roi qui veut être seul maître, et le surintendant Fouquet briller trop fort.",
  tags: [
    "historique",
    "aventure",
    "intrigue"
  ],
  author: "Alexandre Dumas",
  lecture: true,
  age: 12,
  skin: "parchemin",
  cover: {
    "motif": "soleil",
    "color": "#4a3818"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1847-1850",
    "reminder": "Ce chapitre raconte des morts violentes, avec le regard et les mots de 1850.",
    "text": [
      "*Le Vicomte de Bragelonne* est la suite de *Vingt ans après*, et la fin de la trilogie des mousquetaires. Il a paru en feuilleton dans *Le Siècle*, de 1847 à 1850. Dumas l'a écrit avec Auguste Maquet. Le texte est celui de Dumas, sans retouche, tel que l'a numérisé le projet Gutenberg en quatre tomes.",
      "Louis XIV, Mazarin, Colbert, Fouquet, Louise de La Vallière, Madame Henriette, Molière, La Fontaine et la fête de Vaux ont existé, comme l'expédition de Djidgelli et le prisonnier masqué de l'île Sainte-Marguerite. Dumas en use librement.",
      "C'est un livre de cour, d'amours et de complots, qui finit dans le sang. On y pend deux hommes en place de Grève, on s'y bat à mort dans une grotte, et la guerre d'Afrique y est racontée du côté des soldats français, qui appellent les Arabes des « sauvages ». Le roi et Mazarin y parlent aussi des « juifs » comme de prêteurs d'argent : c'est un préjugé de l'époque, que le livre répète sans le voir."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "blois", hour: 14, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
  start: "I_1",
  acts: require("./chapitres.js"),
  companions: {},
  factions: {},
  relics: {},
  people: require("./gens.js"),
  items: require("./objets.js"),
  endings: { fin: { title: "Fin du livre" } },
  passages: {},
};
