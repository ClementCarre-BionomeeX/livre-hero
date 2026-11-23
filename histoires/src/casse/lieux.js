// « Histoire d'un casse-noisette », Alexandre Dumas, 1844 : un livre à lire, sans choix (lecture: true). Texte de Dumas,
// domaine public, d'après l'édition numérique du projet Gutenberg. Les titres des chapitres sont ceux de Dumas (raccourcis pour VII à X) ; les
// titres des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
// Les lieux du livre.
module.exports = {
  boudoir: { ambiance: "ville", name: "Le boudoir du comte de M…", map: "paris", x: 50, y: 45, region: "Paris", desc: "Un petit salon retiré, plafond de Boucher, buffets chargés de gâteaux, et un grand fauteuil à la Voltaire où l'on s'endort.", arrive: "P_1" },
  salon: { ambiance: "ville", name: "Le salon du président", map: "nuremberg", x: 50, y: 50, region: "Nuremberg", desc: "Une grande pièce où l'on dresse le soir de Noël un sapin couvert de lumières et de bonbons.", arrive: "I_1" },
  armoire: { ambiance: "nuit", name: "L'armoire vitrée", map: "nuremberg", x: 55, y: 48, region: "Le salon du président, à droite en entrant", desc: "Une armoire aux carreaux brillants : sur les rayons, les hussards de Fritz, les poupées de Marie, et un petit lit blanc.", arrive: "IV_1" },
  chambre: { ambiance: "ville", name: "La chambre de Marie", map: "nuremberg", x: 45, y: 52, region: "Nuremberg", desc: "Un petit lit, des carreaux couverts de givre, et la nuit un rayon de lune entre les rideaux.", arrive: "VI_1" },
  royaume: { ambiance: "chateau", name: "Le petit royaume sans nom", map: "pirlipate", x: 50, y: 50, region: "Dans les environs de Nuremberg", desc: "Un palais, une cuisine où mijotent les boudins du roi, un âtre où vit la famille des souris, et une chambre où six gardiennes veillent un berceau.", arrive: "VII_1" },
  monde: { ambiance: "route", name: "Les quatre parties du monde", map: "pirlipate", x: 20, y: 30, region: "L'Europe, l'Amérique, l'Afrique, l'Asie, et une cinquième", desc: "Quinze années de routes, de forêts et de mers, et des noisettes de toutes les formes.", arrive: "IX_1" },
  boutique: { ambiance: "ville", name: "La boutique de Zacharias", map: "nuremberg", x: 60, y: 55, region: "Nuremberg", desc: "Une boutique de joujoux, où un jeune homme botté casse les noisettes des jeunes filles.", arrive: "IX_2" },
  foret: { ambiance: "foret", name: "La forêt de Noël", map: "poupees", x: 30, y: 60, region: "Au-delà de la manche de la pelisse", desc: "Une prairie qui scintille, et des arbres chargés de fruits d'or et d'argent, de rubans et de bouquets.", arrive: "XIII_1" },
  fleuve: { ambiance: "eau", name: "Le fleuve d'essence de rose", map: "poupees", x: 45, y: 50, region: "Le royaume des poupées", desc: "Un fleuve parfumé où glissent des cygnes à colliers d'or et des poissons de diamant.", arrive: "XIV_1" },
  confiturembourg: { ambiance: "ville", name: "Confiturembourg", map: "poupees", x: 60, y: 40, region: "Capitale du royaume des poupées", desc: "Une ville de sucreries, des fontaines de limonade et d'orgeat, une brioche en obélisque, et une foule qui se querelle et s'apaise.", arrive: "XIV_2" },
  palais: { ambiance: "chateau", name: "Le palais des Massepains", map: "poupees", x: 70, y: 30, region: "Confiturembourg", desc: "Un palais rose aux cent tourelles, sa coupole semée d'étoiles d'or et d'argent.", arrive: "XIV_3" },
};
