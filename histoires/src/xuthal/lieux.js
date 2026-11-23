// « L'Ombre qui glisse » (The Slithering Shadow), Robert E. Howard, 1933 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais paru dans Weird Tales
// en septembre 1933 (domaine public). Les chapitres de Howard sont seulement numérotés ; leurs titres, ceux des pages et
// tout ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude.
// Les lieux du livre.
module.exports = {
  desert: { ambiance: "route", name: "Le désert du Sud", map: "hyborie", x: 60, y: 90, region: "Au-delà de Kush et de la Stygie", desc: "Des sables et des pierres sous un soleil meurtrier, des brumes pourpres au loin, et des mirages qui narguent les assoiffés.", arrive: "C1_1" },
  porte: { ambiance: "ville", name: "La cour de la porte", map: "hyborie", x: 62, y: 92, region: "Xuthal, derrière le grand portail", desc: "Des murs d'une matière verte et lisse comme du verre, des coupoles et des minarets brillants, et au centre de la cour la margelle d'un puits trop profond.", arrive: "C1_3" },
  salles: { ambiance: "chateau", name: "Les salles de Xuthal", map: "hyborie", x: 62, y: 93, region: "Le grand palais qui forme toute la ville", desc: "Des salles de pierre verte tendues de velours, des coussins de satin, des joyaux qui brillent dans les murs, et des dormeurs immobiles comme des morts.", arrive: "C1_4" },
  couloir: { ambiance: "souterrain", name: "Le couloir secret", map: "hyborie", x: 62, y: 94, region: "Derrière les tapisseries de Xuthal", desc: "Un couloir noir derrière une porte secrète, un anneau de métal scellé au mur, et plus loin un grand puits rond à la margelle gluante.", arrive: "C2_1" },
};
