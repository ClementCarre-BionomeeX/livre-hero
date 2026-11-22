// « Les Mines du roi Salomon » (King Solomon's Mines), H. Rider Haggard, 1885 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais de 1885 (Project
// Gutenberg n° 2166, domaine public). Les titres des chapitres sont ceux de Haggard, traduits ; ceux des pages, comme
// tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude. Quelques mots et généralités sur les
// peuples d'Afrique, courants en 1885 et blessants aujourd'hui, ont été adoucis ou retirés ; la notice le dit.
module.exports = {
  id: "mines",
  title: "Les Mines du roi Salomon",
  subtitle: "Un roman à lire · H. Rider Haggard, 1885",
  summary: "Allan Quatermain, vieux chasseur d'éléphants du Natal, rencontre sur un bateau sir Henry Curtis, qui cherche son frère disparu, et le capitaine Good, officier de marine en retraite. Le frère est parti vers les monts de Suliman, au-delà d'un désert, sur la foi d'une vieille carte qui mène aux mines du roi Salomon. Quatermain possède cette carte. Le roman de Haggard en entier, dans une traduction nouvelle, sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: [
    "aventure",
    "voyage",
    "guerre"
  ],
  author: "H. Rider Haggard · traduction de Claude (2026)",
  lecture: true,
  age: 12,
  skin: "parchemin",
  cover: {
    "motif": "montagne",
    "color": "#7a5a22"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "première personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1885",
    "text": [
      "Henry Rider Haggard a passé sa jeunesse en Afrique australe, au service de l'administration coloniale. Il écrit *Les Mines du roi Salomon* en 1885, dit-on pour gagner un pari avec son frère, qui jugeait *L'Île au trésor* impossible à égaler. Le livre fonde un genre entier : celui du « monde perdu », un royaume caché que des voyageurs atteignent au bout d'une route oubliée. Le pays des Koukouanas, Loo et les monts de Suliman sont inventés.",
      "La traduction est nouvelle, faite pour cette bibliothèque à partir du texte anglais, et elle suit Haggard de près. Allan Quatermain raconte lui-même, avec la bonhomie et les manies d'un vieux chasseur.",
      "C'est un livre de son temps, écrit par un Anglais de l'époque coloniale, et il regarde l'Afrique avec les yeux de ce temps-là. Quelques mots méprisants et quelques généralités sur les peuples africains, ordinaires en 1885 et blessants aujourd'hui, ont été adoucis ou retirés ; le reste est laissé tel quel, parce qu'il dit aussi quelque chose de l'époque. Les personnages africains les plus forts du livre, Ignosi, Infadoos, Foulata, sont pourtant ceux qui ont le plus de grandeur.",
      "On y chasse l'éléphant, on y meurt de soif et de froid, et une grande bataille y fait des milliers de morts. Certaines scènes, une chasse aux sorciers et une salle de rois morts, sont dures et sombres."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "durban", hour: 9, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
