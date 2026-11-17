// « La Machine à explorer le temps » (The Time Machine), H. G. Wells, 1895 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais de 1895 (Project Gutenberg
// n° 35, domaine public). La traduction d'Henry-D. Davray (1899) reste introuvable en ligne sous une forme réutilisable.
// Les titres des chapitres sont ajoutés (le texte anglais n'en a pas). La note de l'éditeur du chapitre VIII est gardée.
// Tout ce qui n'est pas de Wells vit dans les tags : gens, lieux, mots, résumés des chapitres.
// Les lieux du livre.
module.exports = {
  salon: { ambiance: "ville", name: "Le fumoir du Voyageur", map: "richmond", x: 40, y: 45, region: "Richmond", desc: "La maison du Voyageur du Temps à Richmond : le fumoir, la cheminée, la salle à manger des dîners du jeudi.", arrive: "I_1" },
  laboratoire: { ambiance: "ville", name: "Le laboratoire", map: "richmond", x: 60, y: 40, region: "Richmond", desc: "L'atelier du Voyageur, au bout d'un long couloir plein de courants d'air, avec ses établis, ses outils, ses dessins et sa verrière.", arrive: "I_4" },
  sphinx: { ambiance: "champs", name: "Le Sphinx blanc", map: "avenir", x: 45, y: 50, region: "L'an 802 701", desc: "Une immense statue de marbre blanc, mi-lion mi-humaine, ailée, sur un piédestal de bronze, au milieu d'une pelouse cernée de rhododendrons.", arrive: "III_2" },
  grandsalle: { ambiance: "chateau", name: "Le grand édifice", map: "avenir", x: 52, y: 44, region: "L'an 802 701", desc: "Un vaste bâtiment de pierre grise usée, où les petits êtres mangent et dorment ensemble, dans une longue salle aux vitraux brisés.", arrive: "IV_2" },
  vallee: { ambiance: "champs", name: "La vallée de la Tamise", map: "avenir", x: 40, y: 30, region: "L'an 802 701", desc: "Un pays devenu jardin, sans haies ni champs cultivés, semé de palais en ruine et de petites coupoles au-dessus de puits.", arrive: "IV_4" },
  riviere: { ambiance: "eau", name: "La rivière", map: "avenir", x: 30, y: 40, region: "L'an 802 701", desc: "La Tamise de l'avenir, plus loin de son lit d'aujourd'hui, où les petits êtres viennent se baigner.", arrive: "V_5" },
  puits: { ambiance: "nuit", name: "Les puits", map: "avenir", x: 60, y: 28, region: "L'an 802 701", desc: "Des puits très profonds, sans eau, coiffés de petits dômes, d'où monte un bruit sourd de machines et un courant d'air.", arrive: "V_8" },
  souterrain: { ambiance: "souterrain", name: "Le Monde souterrain", map: "avenir", x: 62, y: 22, region: "Sous la terre", desc: "Des galeries et des cavernes sans lumière, pleines du vacarme et de l'odeur des machines.", arrive: "VI_2" },
  collines: { ambiance: "nuit", name: "Les collines", map: "avenir", x: 66, y: 62, region: "L'an 802 701", desc: "Les pentes boisées qui mènent vers le Palais de Porcelaine verte, à quelques kilomètres au sud-ouest.", arrive: "VII_2" },
  palais: { ambiance: "chateau", name: "Le Palais de Porcelaine verte", map: "avenir", x: 74, y: 72, region: "L'an 802 701", desc: "Un grand édifice revêtu de porcelaine verte, sur une colline gazonnée : un ancien musée en ruine.", arrive: "VIII_1" },
  foret: { ambiance: "foret", name: "La forêt", map: "avenir", x: 60, y: 62, region: "L'an 802 701", desc: "Le bois épais qui sépare le Palais du Sphinx blanc.", arrive: "IX_1" },
  tertre: { ambiance: "foret", name: "Le tertre", map: "avenir", x: 56, y: 58, region: "L'an 802 701", desc: "Un petit monticule au milieu de la forêt, surmonté d'une aubépine.", arrive: "IX_4" },
  plage: { ambiance: "mer", name: "La dernière plage", map: "fin", x: 50, y: 50, region: "Le bout du temps", desc: "Une plage de pierres sous un soleil rouge immobile, au bord d'une mer sans vagues.", arrive: "XI_1" },
};
