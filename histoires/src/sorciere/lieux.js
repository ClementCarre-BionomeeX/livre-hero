// « Une sorcière naîtra » (A Witch Shall Be Born), Robert E. Howard, 1934 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais paru dans Weird Tales
// en décembre 1934 (Project Gutenberg n° 42227, domaine public). Les titres des chapitres sont ceux de Howard ; ceux des
// pages et tout ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude.
// Les lieux du livre.
module.exports = {
  palais: { ambiance: "chateau", name: "Le palais de Khauran", map: "khauran", x: 50, y: 50, region: "Khauran", desc: "La chambre de la reine, ses candélabres d'or et ses tentures de velours, et les tours qui dominent la ville.", arrive: "C1_1" },
  ville: { ambiance: "ville", name: "Les rues de Khauran", map: "khauran", x: 48, y: 54, region: "Khauran", desc: "Des ruelles, des cours ouvertes et des toits en jardins, sous la garde des mercenaires.", arrive: "C2_1" },
  croix: { ambiance: "route", name: "La croix sur la route des caravanes", map: "khauran", x: 60, y: 66, region: "La plaine", desc: "À un mille des murs, au bord de la route, là où s'arrêtent les vautours du désert.", arrive: "C2_3" },
  cachots: { ambiance: "souterrain", name: "Les cachots", map: "khauran", x: 51, y: 49, region: "Khauran", desc: "Une prison reliée au palais par une galerie voûtée, et un cachot tout au fond.", arrive: "C3_3" },
  camp: { ambiance: "route", name: "Le camp des Zuagirs", map: "khauran", x: 82, y: 78, region: "Le désert", desc: "Des rangées de tentes en poil de chameau, des palmiers, et une tente de soie pleine de butin.", arrive: "C4_1" },
  tour: { ambiance: "ville", name: "Une tour près du rempart", map: "khauran", x: 46, y: 58, region: "Khauran", desc: "Une chambre où des hommes en mailles usées parlent bas, l'épée au côté.", arrive: "C5_1" },
  temple: { ambiance: "temple", name: "Le temple d'Ishtar", map: "khauran", x: 52, y: 47, region: "Khauran", desc: "Un grand édifice en face du palais, son portique à colonnes, sa nef, son autel et une porte de métal.", arrive: "C6_2" },
};
