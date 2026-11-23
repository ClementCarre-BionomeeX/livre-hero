// « Au-delà de la rivière Noire » (Beyond the Black River), Robert E. Howard, 1935 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais paru dans Weird Tales
// en mai et juin 1935 (Project Gutenberg n° 42254, domaine public). Les titres des chapitres sont ceux de Howard ; ceux des
// pages et tout ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude.
// Les lieux du livre.
module.exports = {
  piste: { ambiance: "foret", name: "La piste de Velitrium", map: "conajohara", x: 55, y: 50, region: "Le Conajohara", desc: "Une piste étroite entre deux murailles vertes, à quelques milles de la rivière Noire.", arrive: "C1_1" },
  fort: { ambiance: "chateau", name: "Le fort Tuscelan", map: "conajohara", x: 40, y: 50, region: "Le Conajohara", desc: "Une palissade de rondins sur la rive est de la rivière Noire, ses tours, son donjon et sa place d'exercice.", arrive: "C2_1" },
  riviere: { ambiance: "eau", name: "La rivière Noire", map: "conajohara", x: 36, y: 58, region: "La frontière", desc: "Une rivière maussade, sombre et luisante, bordée de buissons, entre la forêt picte et le Conajohara.", arrive: "C3_1" },
  gwawela: { ambiance: "village", name: "Gwawela", map: "conajohara", x: 28, y: 56, region: "Le pays picte", desc: "Un village de huttes de boue et de clayonnage dans une palissade, et une longue hutte ornée de crânes.", arrive: "C4_1" },
  foret: { ambiance: "foret", name: "La forêt picte", map: "conajohara", x: 18, y: 64, region: "Le pays picte", desc: "Une forêt immense et obscure à l'ouest de la rivière, des pistes, des rochers et des collines.", arrive: "C5_1" },
  route: { ambiance: "route", name: "La route de Velitrium", map: "conajohara", x: 60, y: 48, region: "Le Conajohara", desc: "La route qui va du fort à la rivière du Tonnerre, et les cabanes de rondins des colons.", arrive: "C6_4" },
  bois: { ambiance: "foret", name: "Les bois du nord", map: "conajohara", x: 58, y: 36, region: "Le Conajohara", desc: "Des bois épais entre la route et les salines, au bord du marais.", arrive: "C7_1" },
  velitrium: { ambiance: "ville", name: "Velitrium", map: "conajohara", x: 80, y: 48, region: "La rivière du Tonnerre", desc: "Une ville frontière rude et turbulente, ses tavernes au bord de la rivière du Tonnerre.", arrive: "C8_1" },
};
