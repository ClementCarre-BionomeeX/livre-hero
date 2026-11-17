// « Les Premiers Hommes dans la Lune » (The First Men in the Moon), H. G. Wells, 1901 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais de 1901 (Project Gutenberg
// n° 1013, domaine public). Les notes de Wells sont gardées dans le texte, entre parenthèses ; les mesures sont converties
// en mètres et en kilomètres. Les titres des chapitres sont ceux de Wells, traduits.
// Tout ce qui n'est pas de Wells vit dans les tags : gens, lieux, mots, résumés des chapitres.
// Les lieux du livre.
module.exports = {
  bungalow: { ambiance: "village", name: "Le bungalow de Bedford", map: "kent", x: 45, y: 50, region: "Le Kent", desc: "Un petit bungalow loué à Lympne, au bord de l'ancienne falaise qui domine les marais de Romney.", arrive: "I_1" },
  laboratoire: { ambiance: "village", name: "La maison de Cavor", map: "kent", x: 55, y: 45, region: "Le Kent", desc: "Une maison isolée près de Lympne, avec son laboratoire, son fourneau et ses trois aides.", arrive: "I_6" },
  lympne: { ambiance: "champs", name: "Lympne", map: "kent", x: 50, y: 55, region: "Le Kent", desc: "Un village sur l'ancienne falaise, au-dessus des marais, près des ruines d'un port romain.", arrive: "II_2" },
  littlestone: { ambiance: "mer", name: "Littlestone", map: "kent", x: 62, y: 78, region: "Le Kent", desc: "Une petite station balnéaire sur la côte, entre New Romney et la pointe de Dungeness.", arrive: "XXI_1" },
  sphere: { ambiance: "nuit", name: "La sphère", map: "espace", x: 50, y: 50, region: "L'espace", desc: "La sphère de verre et d'acier de Cavor, couverte de volets de Cavorite qu'on ouvre ou ferme pour se laisser attirer par un astre.", arrive: "IV_1" },
  cratere: { ambiance: "montagne", name: "Le cratère", map: "lune", x: 50, y: 30, region: "La surface de la lune", desc: "Un immense cirque de rochers où la sphère est tombée. La nuit, tout y gèle ; le jour, une jungle y pousse à vue d'œil.", arrive: "VI_2" },
  paturages: { ambiance: "champs", name: "Les pâturages", map: "lune", x: 35, y: 40, region: "La surface de la lune", desc: "Les pentes du cratère où l'on mène brouter les veaux de lune pendant le jour.", arrive: "XI_1" },
  galeries: { ambiance: "souterrain", name: "Les galeries", map: "lune", x: 50, y: 60, region: "L'intérieur de la lune", desc: "Le dédale de galeries, de puits et de cavernes éclairées de bleu qui creuse la lune.", arrive: "XII_1" },
  pont: { ambiance: "souterrain", name: "Le pont du vertige", map: "lune", x: 60, y: 62, region: "L'intérieur de la lune", desc: "Une planche étroite jetée au-dessus d'un gouffre lumineux.", arrive: "XV_4" },
  boucherie: { ambiance: "souterrain", name: "La caverne des bouchers", map: "lune", x: 40, y: 52, region: "L'intérieur de la lune", desc: "Une caverne près de la surface où des Sélénites dépècent les veaux de lune.", arrive: "XVII_1" },
  mercentrale: { ambiance: "eau", name: "La Mer centrale", map: "lune", x: 50, y: 85, region: "L'intérieur de la lune", desc: "La mer intérieure de la lune, qui brille quand elle bouge.", arrive: "XXIII_2" },
  palais: { ambiance: "temple", name: "Le palais du Grand Lunaire", map: "lune", x: 55, y: 75, region: "L'intérieur de la lune", desc: "Une suite de salles de plus en plus vastes, noyées d'encens bleu, au bout desquelles se dresse un trône.", arrive: "XXV_1" },
  montrose: { ambiance: "montagne", name: "L'observatoire du mont Rose", map: "terre", x: 50, y: 50, region: "Les Alpes", desc: "L'observatoire que M. Wendigee a fait construire sur les flancs du mont Rose, dans les Alpes, pour écouter le ciel.", arrive: "XXII_1" },
};
