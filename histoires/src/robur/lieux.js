// « Robur-le-Conquérant », Jules Verne, 1886 : un livre à lire, sans choix (lecture: true).
// Texte : l'édition Hetzel de 1886, dans le domaine public (Project Gutenberg n° 5126). La saisie, faite à partir
// d'une reconnaissance de caractères, a été relue et corrigée (fiches/robur_texte.py). Les titres des pages et tout
// ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude.
// Les lieux du livre.
module.exports = {
  niagara: { ambiance: "eau", name: "Les chutes du Niagara", map: "robur", x: 27, y: 32, region: "Amérique du Nord", desc: "Un pont suspendu, deux rives, un hôtel sur Goat-Island, et le bruit des cataractes.", arrive: "I_1" },
  observatoires: { ambiance: "nuit", name: "Les observatoires du monde", map: "robur", x: 50, y: 22, region: "Partout", desc: "Des coupoles et des lunettes, de Pékin à Paris, braquées sur un point qui passe trop vite.", arrive: "I_2" },
  walnut: { ambiance: "ville", name: "Le Weldon-Institute", map: "robur", x: 24, y: 37, region: "Philadelphie", desc: "Une salle de club dans Walnut-Street, une tribune, un timbre de président et cent voix qui crient.", arrive: "II_1" },
  fairmont: { ambiance: "foret", name: "Fairmont-Park", map: "robur", x: 22, y: 39, region: "Philadelphie", desc: "Les bois d'un grand parc au bord de la Schuylkill, déserts un peu avant minuit.", arrive: "IV_1" },
  cellule: { ambiance: "souterrain", name: "Une cellule obscure", map: "robur", x: 22, y: 42, region: "On ne sait où", desc: "Trois pas sur trois, des parois qu'aucune lame n'entame, et un frémissement qui ne cesse pas.", arrive: "V_1" },
  albatros: { ambiance: "montagne", name: "L'Albatros", map: "robur", x: 34, y: 28, region: "Dans les airs", desc: "Une plate-forme longue de trente mètres, hérissée de mâts et d'hélices, avec trois roufles et un fanal électrique.", arrive: "VI_1" },
  canada: { ambiance: "foret", name: "Au-dessus du Canada", map: "robur", x: 29, y: 28, region: "Amérique du Nord", desc: "Les toits d'Ottawa, le Saint-Laurent, le Mont-Royal, et les lacs vus de mille mètres.", arrive: "VII_2" },
  prairie: { ambiance: "champs", name: "La Prairie et les Grands Lacs", map: "robur", x: 20, y: 34, region: "États-Unis", desc: "Des champs à perte de vue, des villes au bord des lacs, un train lancé à toute vapeur sur un rail droit.", arrive: "VIII_1" },
  rocheuses: { ambiance: "montagne", name: "Les montagnes Rocheuses", map: "robur", x: 15, y: 36, region: "États-Unis", desc: "Les geysers du Yellowstone, des crêtes de neige, et le Grand-Lac-Salé au fond d'un désert.", arrive: "VIII_4" },
  pacifique: { ambiance: "mer", name: "Le Pacifique du nord", map: "robur", x: 6, y: 31, region: "L'océan", desc: "Rien que de l'eau, des baleines, des brumes de trois jours et des îles sans nom.", arrive: "IX_1" },
  chine: { ambiance: "ville", name: "Le Japon et la Chine", map: "robur", x: 80, y: 36, region: "Asie", desc: "Yokohama, la mer Jaune, puis Pékin et ses villes emboîtées, sous un vol de cerfs-volants musicaux.", arrive: "IX_5" },
  himalaya: { ambiance: "neige", name: "L'Himalaya", map: "robur", x: 70, y: 42, region: "Asie", desc: "Des pics à huit mille mètres, des glaciers, et un froid où le baromètre tombe à moitié.", arrive: "X_1" },
  inde: { ambiance: "champs", name: "L'Inde et la Perse", map: "robur", x: 68, y: 48, region: "Asie", desc: "Le Cachemire, le lac de Srinagar, Hérat, Téhéran, et le Damavend au-dessus des brumes.", arrive: "X_2" },
  caspienne: { ambiance: "mer", name: "La Caspienne", map: "robur", x: 60, y: 39, region: "Asie", desc: "Une mer sans rivage visible, des viviers que l'on remplit d'un coup de filet, et un orage qui monte.", arrive: "X_3" },
  europe: { ambiance: "ville", name: "L'Europe en une nuit", map: "robur", x: 50, y: 31, region: "Europe", desc: "Moscou, la Norvège, la mer du Nord, Londres, Paris, Rome : des fanfares de trompette au-dessus des toits.", arrive: "XI_1" },
  sahara: { ambiance: "champs", name: "Le Sahara", map: "robur", x: 47, y: 47, region: "Afrique", desc: "Des dunes, des oasis, des puits et des routes de caravanes jusqu'à Tombouctou.", arrive: "XII_1" },
  dahomey: { ambiance: "village", name: "Le Dahomey", map: "robur", x: 48, y: 56, region: "Afrique", desc: "Une ville de cases autour d'un tertre, des milliers de gens, et des tambours pour un couronnement.", arrive: "XII_4" },
  atlantique: { ambiance: "mer", name: "L'Atlantique du sud", map: "robur", x: 39, y: 65, region: "L'océan", desc: "Les alizés, des lames que l'on frôle, une mer qui s'allume la nuit et pas une côte en vue.", arrive: "XIII_1" },
  horn: { ambiance: "mer", name: "Le cap Horn", map: "robur", x: 33, y: 78, region: "Amérique du Sud", desc: "La Terre de Feu, le détroit, et une pointe de rocher rongée par un ressac éternel.", arrive: "XIII_5" },
  antarctique: { ambiance: "neige", name: "Les terres antarctiques", map: "robur", x: 50, y: 92, region: "Le pôle sud", desc: "Des banquises, des icebergs, une aurore australe, et la longue nuit du pôle.", arrive: "XIV_4" },
  ilex: { ambiance: "village", name: "L'île X", map: "robur", x: 9, y: 52, region: "Le Pacifique", desc: "Une île de la mer des Marquises, hors de toutes les routes : des cases, des ateliers, une cinquantaine d'habitants.", arrive: "XV_1" },
  philadelphie: { ambiance: "ville", name: "Philadelphie", map: "robur", x: 25, y: 36, region: "États-Unis", desc: "Des rues au cordeau, des journaux à cinq éditions, et une foule qui veut savoir.", arrive: "XVII_1" },
};
