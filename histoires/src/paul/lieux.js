// « Le Capitaine Paul », Alexandre Dumas, 1838 : un livre à lire, sans choix (lecture: true). Texte de Dumas,
// domaine public, d'après l'édition numérique du projet Gutenberg. Cette édition ne titre pas ses chapitres ; les
// titres des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
// Les lieux du livre.
module.exports = {
  portlouis: { ambiance: "port", name: "Port-Louis", map: "bretagne", x: 30, y: 50, region: "Morbihan, en face de Lorient", desc: "Une petite ville fortifiée à l'entrée de la rade de Lorient, où les curieux commentent chaque voile qui entre.", arrive: "I_1" },
  indienne: { ambiance: "mer", name: "L'Indienne", map: "bretagne", x: 8, y: 70, region: "En mer, au large de la Bretagne", desc: "Une frégate de trente-deux canons, fine, rapide et parée comme une fiancée, avec un équipage venu de toutes les nations.", arrive: "II_1" },
  route: { ambiance: "route", name: "La route de Vannes à Auray", map: "bretagne", x: 70, y: 40, region: "Morbihan", desc: "Un chemin vicinal plein d'ornières, entre les landes et les bois de la Basse-Bretagne.", arrive: "IV_1" },
  chateau: { ambiance: "chateau", name: "Le château d'Auray", map: "bretagne", x: 55, y: 55, region: "Morbihan, au bord de l'Océan", desc: "Un vieux château féodal aux tourelles noires et aux cours herbeuses, à une lieue et demie de toute habitation, une façade tournée vers la mer.", arrive: "IV_2" },
  maison: { ambiance: "foret", name: "La maison d'Achard", map: "bretagne", x: 60, y: 48, region: "À la lisière du parc d'Auray", desc: "Une petite maison de deux pièces près d'une grille du parc, non loin d'un grand chêne qui garde un secret.", arrive: "VII_2" },
  plage: { ambiance: "mer", name: "La cabane du pêcheur", map: "bretagne", x: 42, y: 60, region: "Sur la grève, entre Port-Louis et Auray", desc: "Une cabane sur le bord de la mer, où l'on se retrouve à l'écart et où l'on règle ses affaires d'honneur.", arrive: "VI_3" },
  paris: { ambiance: "ville", name: "Paris", map: "monde", x: 48, y: 26, region: "France", desc: "Les théâtres de la Porte Saint-Martin, les directeurs, les acteurs et les journaux où naît le roman-feuilleton.", arrive: "P_1" },
  sicile: { ambiance: "mer", name: "Le détroit de Messine", map: "monde", x: 54, y: 40, region: "Entre la Sicile et la Calabre", desc: "Un speronare sicilien, son pilote qui lit le vent, et la prière du soir que chante tout l'équipage.", arrive: "P_3" },
  guadeloupe: { ambiance: "port", name: "La Guadeloupe", map: "monde", x: 22, y: 50, region: "Les Antilles", desc: "Des côtes coupées de rivières, la Soufrière qui éclaire la nuit, des cocotiers et des palmistes au bord de la mer.", arrive: "E_1" },
  russie: { ambiance: "route", name: "La Russie de Catherine", map: "monde", x: 64, y: 22, region: "De Saint-Pétersbourg à la Crimée", desc: "Une cour où l'on donne des grades d'amiral, et une route de plusieurs centaines de lieues à travers les nouvelles conquêtes.", arrive: "E_5" },
};
