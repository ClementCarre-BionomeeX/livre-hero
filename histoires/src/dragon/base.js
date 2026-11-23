// « L'Heure du dragon » (The Hour of the Dragon), Robert E. Howard, 1935-1936 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais paru dans Weird Tales
// de décembre 1935 à avril 1936 (Project Gutenberg n° 42243, domaine public). Les titres des chapitres sont ceux de Howard ;
// ceux des pages et tout ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude.
module.exports = {
  id: "dragon",
  title: "L'Heure du dragon",
  subtitle: "Un roman de Conan le Cimmérien · Robert E. Howard, 1935-1936",
  summary: "Conan est roi d'Aquilonie depuis des années quand quatre conjurés, dans une salle close de Némédie, ouvrent un sarcophage vieux de trois mille ans avec un joyau rouge qui palpite comme un cœur. Peu après, la peste, la guerre et un ennemi qu'aucune épée n'atteint fondent sur son royaume, et le roi se retrouve seul, sans couronne, sur des routes qui mènent du nord jusqu'aux murs noirs de la Stygie. Le seul roman de Conan écrit par Robert E. Howard, en entier, dans une traduction nouvelle, sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: [
    "aventure",
    "fantastique"
  ],
  author: "Robert E. Howard · traduction de Claude (2026)",
  lecture: true,
  age: 16,
  skin: "parchemin",
  cover: {
    "motif": "oeil",
    "color": "#4a1414"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un roman de 1935",
    "text": [
      "Robert E. Howard publie *L'Heure du dragon* en cinq livraisons, de décembre 1935 à avril 1936, dans *Weird Tales*, une revue américaine de récits étranges. C'est le seul roman de Conan qu'il ait écrit. Le Cimmérien y est roi d'Aquilonie, dans l'« âge hyborien », un passé imaginaire plein de royaumes et de dieux inventés. Howard est mort en 1936, à trente ans ; ses récits sont dans le domaine public.",
      "La traduction est nouvelle, faite pour cette bibliothèque à partir du texte anglais, et elle suit Howard de près, sauf sur un point. Howard décrit plusieurs peuples par leur couleur de peau, en bien ou en mal, et bâtit sur elle des hiérarchies : les tueurs venus du Khitaï, les géants qui gardent les cachots, les rameurs enchaînés de la galère, les Stygiens, et jusqu'aux nobles qu'il dit plus beaux parce que plus pâles. La traduction a retiré ces couleurs et ces hiérarchies ; le parler « petit-nègre » qu'il prête aux geôliers est rendu par des phrases sèches, et quand des captifs reconnaissent Conan, ils l'acclament au lieu de se prosterner. Une phrase où des hommes « blancs » vendent des hommes « blancs » devient : des Aquiloniens vendent des Aquiloniens. Le nom des « corsaires noirs » est gardé, car c'est celui de l'équipage de Conan.",
      "Il faut nommer ce que le récit montre. La peste, la guerre, des pendaisons et des massacres. Des soldats d'occupation font violence aux femmes ; un roi remplit son palais de jeunes filles « de gré ou de force » ; une comtesse est menée au billot pour avoir refusé de devenir sa maîtresse, et la fille d'un seigneur a été outragée et tuée. On torture un prisonnier jusqu'à la mort. Les combats sont sanglants, il y a une vampire, des morts qui se lèvent, un massacre sur une galère d'esclaves, et une jeune fille liée sur un autel pour un sacrifice."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "maison_orastes", hour: 23, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
