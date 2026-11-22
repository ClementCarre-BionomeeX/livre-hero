// « Kim », Rudyard Kipling, 1901 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais de 1901 (Project
// Gutenberg n° 2226, domaine public). Les épigraphes en vers sont gardées en tête des chapitres. Les titres des
// chapitres (Kipling les numérotait seulement) et ceux des pages sont de Claude, comme tout ce qui vit dans les tags
// (gens, lieux, mots, résumés). Les généralités du narrateur sur les « Orientaux » ont été retirées ou adoucies ; voir la notice.
module.exports = {
  id: "kim",
  title: "Kim",
  subtitle: "Un roman à lire · Rudyard Kipling, 1901",
  summary: "Lahore, vers 1890. Kimball O'Hara a treize ans ; fils d'un soldat irlandais mort dans la misère, il a grandi pieds nus dans les bazars, plus brun que les gamins du pays, et passe pour l'un d'eux. Un matin, au pied du grand canon de la ville, il voit arriver un vieux lama venu du Tibet, qui cherche une rivière née d'une flèche de Bouddha. Kim se fait son disciple, prend avec lui la Grande Route, et se retrouve, sans l'avoir cherché, chargé d'un message d'un marchand de chevaux afghan pour un officier anglais. Le roman de Kipling en entier, dans une traduction nouvelle, sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: [
    "aventure",
    "voyage",
    "intrigue"
  ],
  author: "Rudyard Kipling · traduction de Claude (2026)",
  lecture: true,
  age: 12,
  skin: "parchemin",
  cover: {
    "motif": "oeil",
    "color": "#8a4a1a"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1901",
    "text": [
      "Rudyard Kipling est né à Bombay en 1865 et y a passé son enfance ; il a été journaliste à Lahore à vingt ans. *Kim*, paru en 1901, est le livre où il a mis tout ce qu'il aimait de l'Inde : ses routes, ses foules, ses religions et ses langues. Kipling est mort en 1936 ; le roman est dans le domaine public.",
      "Le livre raconte deux quêtes qui se croisent : celle d'un vieux lama tibétain qui veut se délivrer de la Roue des renaissances, et celle d'un garçon qui découvre le « Grand Jeu », la rivalité secrète de l'Angleterre et de la Russie aux frontières du nord de l'Inde. Kipling y croit à l'Empire, et ne s'en cache pas.",
      "C'est là que le livre a vieilli. Le narrateur aime glisser des sentences sur « l'Oriental », « l'Asiatique », « l'indigène », et Hurree Babou, le Bengali instruit, est écrit en partie comme une caricature. La traduction, nouvelle, faite pour cette bibliothèque, garde l'histoire entière et tous les personnages, y compris leurs préjugés et leurs injures quand ce sont eux qui parlent ; mais elle retire ou adoucit les généralités du narrateur, et rend l'anglais très livresque de Hurree Babou par le ton, sans singer sa prononciation.",
      "Les gens du livre se tutoient presque tous, comme dans les langues qu'ils parlent ; quelques mots du pays sont gardés, expliqués d'un appui. Il y a de la violence (un empoisonnement manqué, une agression, un coup porté à un vieillard), mais le cœur du livre est l'amitié d'un garçon et d'un vieil homme, et une question que Kim se pose de plus en plus souvent : « Qui est Kim ? »"
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "canon", hour: 10, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
  start: "C1_1",
  acts: require("./chapitres.js"),
  companions: {},
  factions: {},
  relics: {},
  people: require("./gens.js"),
  items: require("./objets.js"),
  endings: { fin: { title: "Fin du livre" } },
  passages: {},
};
