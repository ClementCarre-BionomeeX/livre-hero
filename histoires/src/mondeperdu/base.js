// « Le Monde perdu » (The Lost World), Arthur Conan Doyle, 1912 : a book to read, with no choices (lecture: true).
// Text: Project Gutenberg EBook #139 (English, public domain). French translation by Claude for Clément (15/11),
// paragraph for paragraph, nothing cut or added; the period words and ideas are kept as written (Clément, 15/11),
// with a notice at the opening and a reminder at the head of each chapter that has them (`notice: true` on the act).
// Everything that is not Doyle's lives in the tags: people (who, aspect), places, words, the summaries of the chapters.
module.exports = {
  id: "mondeperdu",
  title: "Le Monde perdu",
  subtitle: "Un roman à lire · Arthur Conan Doyle, 1912",
  summary: "Londres, 1912. Pour plaire à la jeune fille qu'il aime, Ned Malone, jeune reporter, cherche un exploit. Il trouve le professeur Challenger, un savant colérique qui affirme avoir vu, au cœur de l'Amazonie, des animaux disparus depuis des millions d'années. Une expédition part vérifier. Le roman de Conan Doyle, en entier, sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  author: "Arthur Conan Doyle · traduction de Claude, pour Clément",
  lecture: true,
  narrator: "malone",
  age: 11,
  skin: "parchemin",
  cover: { motif: "feuille", color: "#3f5a3a" },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "première personne, passé",
  version: 1,
  start: "I_1",
  notice: {
    title: "Un livre de 1912",
    reminder: "Ce chapitre contient des mots et des idées racistes de 1912, gardés tels que l'auteur les a écrits.",
    text: [
      "*Le Monde perdu* a été écrit par Arthur Conan Doyle en 1912, au temps où la Grande-Bretagne régnait sur un immense empire colonial. Le roman est donné ici en entier, traduit au plus près, tel que son auteur l'a voulu.",
      "Les personnages, et souvent le narrateur lui-même, parlent des peuples d'Amazonie, des métis et des personnes noires avec les mots et les idées de leur époque : des termes méprisants, et la croyance en des « races » rangées du haut en bas d'une échelle. Les savants de 1912 pensaient aussi que certains peuples étaient « restés en arrière » sur le chemin de l'évolution. La science a montré depuis que tout cela est faux : l'humanité forme une seule espèce, et toutes ses cultures ont la même histoire, aussi longue.",
      "Ces passages sont gardés tels quels, parce qu'ils montrent comment on pensait alors, jusque chez des hommes qui se croyaient justes et courageux. Chaque chapitre qui en contient s'ouvre sur un rappel de cette notice. Quand un mot ou une scène arrête le lecteur, c'est une bonne occasion d'en parler.",
      "Le livre raconte aussi des chasses et des animaux tués sans nécessité, comme on le faisait volontiers à l'époque.",
    ],
  },
  intro: [
    "*Avis de l'éditeur.* M. E. D. Malone tient à déclarer que l'ordonnance d'interdiction et le procès en diffamation ont été retirés sans réserve par le professeur G. E. Challenger, lequel, convaincu qu'aucune critique et qu'aucun commentaire de ce livre ne sont écrits dans un esprit offensant, s'est engagé à ne mettre aucun obstacle à sa publication ni à sa diffusion.",
    "*J'ai mené à bien mon simple dessein*\n*Si j'ai donné une heure de joie*\n*Au garçon qui est à moitié un homme,*\n*Ou à l'homme qui est à moitié un garçon.*",
  ],
  // The chapters are the acts: a title page each, the ruler at the top, « Où en étais-je ? » reads their summaries.
  acts: require("./chapitres.js"),
  companions: {},
  factions: {},
  relics: {},
  people: require("./gens.js"),
  items: require("./objets.js"),
  world: {
    noFood: true,
    start: { place: "chataigniers", hour: 19, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } },
    places: require("./lieux.js"),
    routes: [],
    regions: {},
    events: {},
  },
  endings: { fin: { title: "Fin du livre" } },
  passages: {},
};
