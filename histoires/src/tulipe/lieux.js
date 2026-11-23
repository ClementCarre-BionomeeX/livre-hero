// « La Tulipe noire », Alexandre Dumas, 1850 : un livre à lire, sans choix (lecture: true). Texte de Dumas, domaine
// public, numérisé par le projet Gutenberg. Les titres des chapitres sont de Dumas ; ceux des pages, comme tout ce qui
// vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
// Les lieux du livre.
module.exports = {
  lahaye: { ambiance: "ville", name: "La Haye", map: "hollande", x: 30, y: 50, region: "La capitale des Provinces-Unies", desc: "Des maisons gothiques, des canaux, un grand parc, et une foule qui court, le couteau à la ceinture.", arrive: "I_1" },
  buitenhof: { ambiance: "souterrain", name: "La prison du Buitenhof", map: "hollande", x: 31, y: 52, region: "La Haye", desc: "Une prison aux fenêtres grillées, un escalier de pierre, une chambre de famille, et un geôlier qui tient les clefs.", arrive: "I_4" },
  dordrecht: { ambiance: "ville", name: "Dordrecht", map: "hollande", x: 48, y: 70, region: "Sur la Meuse", desc: "Une belle maison sur le port, un jardin de tulipes, un séchoir plein d'oignons rares, et le mur du voisin.", arrive: "V_1" },
  loewestein: { ambiance: "chateau", name: "Le château de Loewestein", map: "hollande", x: 62, y: 72, region: "Au confluent du Wahal et de la Meuse", desc: "Une forteresse au bord de l'eau, une cellule au sommet, un guichet dans la porte, et des pigeons sur le toit.", arrive: "XIV_1" },
  route: { ambiance: "route", name: "Sur la route", map: "hollande", x: 42, y: 42, region: "Entre Dordrecht et Harlem", desc: "Delft, Rotterdam, des digues, des moulins, et une voiture aux rideaux fermés.", arrive: "XXIV_2" },
  harlem: { ambiance: "ville", name: "Harlem", map: "hollande", x: 36, y: 22, region: "La ville des fleurs", desc: "Le bois, l'hôtel de ville, la société horticole, et une estrade dressée pour la fête de la tulipe.", arrive: "XXV_3" },
};
