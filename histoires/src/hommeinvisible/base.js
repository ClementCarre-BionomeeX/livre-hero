// « L'Homme invisible » (The Invisible Man), H. G. Wells, 1897 : un livre à lire, sans choix (lecture: true).
// Texte : la traduction d'Achille Laurent (La Revue de Paris, 1900-1901, puis Mercure de France), transcrite par
// Wikisource (domaine public ; transcription reprise d'un export Wikisource de février 2025). Texte gardé tel quel, sauf la
// typographie ; la note du traducteur sur les fenêtres anglaises est mise entre parenthèses dans sa page.
// Tout ce qui n'est pas de Wells ou de son traducteur vit dans les tags : gens, lieux, mots, résumés des chapitres.
module.exports = {
  id: "hommeinvisible",
  title: "L'Homme invisible",
  subtitle: "Un roman à lire · H. G. Wells, 1897",
  summary: "Un jour de neige de février, un étranger emmitouflé de la tête aux pieds, le visage caché sous des bandages et de grosses lunettes, entre à l'auberge d'Iping et demande une chambre et du feu. Il paie d'avance, fuit tout le monde et remplit sa chambre de flacons. Le village s'interroge, puis s'inquiète. Le roman de Wells en entier, dans la traduction d'Achille Laurent, sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: ["sf","fantastique"],
  added: "2026-11-16",
  author: "H. G. Wells · traduction d'Achille Laurent (1901)",
  lecture: true,
  age: 11,
  skin: "parchemin",
  cover: {
    "motif": "oeil",
    "color": "#2f3b4a"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1897",
    "reminder": "Ce chapitre contient des mots de 1897 sur les Noirs ou les Juifs, gardés tels que l'auteur et son traducteur les ont écrits.",
    "text": [
      "*L'Homme invisible* a paru en 1897. Le roman est donné ici en entier, dans la traduction française d'Achille Laurent, telle qu'elle a été publiée en 1901.",
      "Quelques passages emploient les mots et les préjugés de l'époque : le mot « nègre », et des portraits méprisants de Juifs pauvres de Londres, vus par le personnage principal. Ces façons de parler étaient courantes alors ; elles blessent, et elles disent aussi quelque chose de celui qui parle.",
      "Ces passages sont gardés tels quels. Les chapitres qui en contiennent s'ouvrent sur un rappel de cette notice.",
      "Le livre raconte aussi des violences, dont un meurtre."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "auberge", hour: 15, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
