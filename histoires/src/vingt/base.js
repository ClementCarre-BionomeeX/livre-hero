// « Vingt ans après », Alexandre Dumas, 1845 : un livre à lire, sans choix (lecture: true). Texte de Dumas
// (avec Auguste Maquet), domaine public, d'après l'édition numérique du projet Gutenberg. Les titres des chapitres sont
// de Dumas ; ceux des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
module.exports = {
  id: "vingt",
  title: "Vingt ans après",
  subtitle: "Un roman à lire · Alexandre Dumas, 1845",
  summary: "1648. Richelieu est mort, Louis XIII aussi ; la reine Anne d'Autriche gouverne avec le cardinal Mazarin, que Paris déteste. D'Artagnan a quarante ans et n'est toujours que lieutenant aux mousquetaires. Mazarin a besoin d'hommes sûrs : il le charge de retrouver Athos, Porthos et Aramis. Les quatre amis se retrouvent, mais pas tous du même côté, entre la Fronde qui gronde à Paris et la guerre civile qui emporte l'Angleterre.",
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
    "motif": "sceau",
    "color": "#5a2a2a"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1845",
    "reminder": "Ce chapitre raconte une mise à mort, et la violence d'une guerre civile, avec le regard et les mots de 1845.",
    "text": [
      "*Vingt ans après* est la suite des *Trois Mousquetaires*. Il a paru en feuilleton dans *Le Siècle*, de janvier à août 1845. Dumas l'a écrit avec Auguste Maquet. Le texte est celui de Dumas, sans retouche.",
      "Mazarin, Anne d'Autriche, le coadjuteur Gondy, le conseiller Broussel, le duc de Beaufort, Charles Ier d'Angleterre et Cromwell ont existé ; la Fronde, la bataille de Lens et le procès du roi d'Angleterre aussi. Dumas en use librement, et ses héros se glissent partout où l'histoire laisse un blanc.",
      "C'est un livre de guerre civile, de duels et de vengeance, avec une exécution racontée de près. Les héros battent leurs valets et se moquent des petites gens. Deux fois, le texte reprend le vieux reproche fait aux Juifs d'avoir vendu ou insulté le Christ : c'est un préjugé de l'époque, que le livre répète sans le voir."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "palais", hour: 20, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
