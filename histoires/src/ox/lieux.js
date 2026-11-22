// « Le Docteur Ox », Jules Verne, 1874 : un livre à lire, sans choix (lecture: true). Recueil de quatre récits de
// Jules Verne et d'un récit de son frère Paul, domaine public, d'après l'édition numérisée par le Projet Gutenberg
// (Hetzel). Les titres des chapitres de « Maître Zacharius » et d'« Un hivernage dans les glaces » sont ceux de Verne ;
// ceux du « Docteur Ox », très longs chez Verne, sont de Claude et cités dans les résumés, comme les titres des pages
// et tout ce qui vit dans les tags (gens, lieux, mots, résumés).
// Les lieux du livre.
module.exports = {
  parloir: { ambiance: "ville", name: "La maison du bourgmestre", x: 45, y: 45, region: "Quiquendone, en Flandre", desc: "Une maison paisible, où les portes ne crient pas : le parloir, son poêle, son portrait d'ancêtre, et la chambre de Suzel.", map: "quiquendone", arrive: "I2_1" },
  ville: { ambiance: "ville", name: "Les rues de Quiquendone", x: 55, y: 55, region: "Quiquendone, en Flandre", desc: "Une petite ville flamande, ses maisons à pignon, sa place, sa maison commune, ses jardins de tulipes.", map: "quiquendone", arrive: "I1_1" },
  usine: { ambiance: "ville", name: "L'usine du docteur Ox", x: 25, y: 70, region: "Quiquendone, en Flandre", desc: "Le cabinet de travail du docteur Ox et de son préparateur, ses cuves et ses gazomètres.", map: "quiquendone", arrive: "I4_1" },
  theatre: { ambiance: "ville", name: "Le théâtre de Quiquendone", x: 62, y: 38, region: "Quiquendone, en Flandre", desc: "Une salle où l'on joue l'opéra avec une extrême lenteur, ses loges, son parterre et ses galeries.", map: "quiquendone", arrive: "I7_1" },
  beffroi: { ambiance: "ville", name: "La tour du beffroi", x: 50, y: 25, region: "Quiquendone, en Flandre", desc: "La haute tour de la ville, son escalier, sa cloche et sa vue sur toute la Flandre.", map: "quiquendone", arrive: "I13_2" },
  audenarde: { ambiance: "route", name: "La porte d'Audenarde", x: 80, y: 60, region: "Quiquendone, en Flandre", desc: "La porte de la ville qui mène vers la campagne flamande et vers Virgamen.", map: "quiquendone", arrive: "I14_1" },
  zacharius: { ambiance: "ville", name: "La maison de maître Zacharius", x: 40, y: 55, region: "Genève, sur l'île du Rhône", desc: "Une vieille maison au bord du Rhône, son atelier plein d'horloges, et la chambre de Gérande.", map: "leman", arrive: "II1_1" },
  geneve: { ambiance: "ville", name: "Genève", x: 45, y: 45, region: "Au bout du lac Léman", desc: "La vieille ville, la promenade de la Treille, l'église de Saint-Pierre.", map: "leman", arrive: "II3_1" },
  andernatt: { ambiance: "montagne", name: "Le château d'Andernatt", x: 75, y: 75, region: "Les gorges des Dents-du-Midi", desc: "Un château en ruines dans les montagnes, au-dessus du Rhône.", map: "leman", arrive: "II5_3" },
  lac: { ambiance: "route", name: "Les bords du lac Léman", x: 60, y: 55, region: "La rive du lac, de Genève vers le Valais", desc: "Les villages et les routes qui longent le lac, Thonon, Évian, puis l'ermitage de Notre-Dame du Sex.", map: "leman", arrive: "II5_1" },
  francfort: { ambiance: "ville", name: "Francfort", x: 50, y: 80, region: "Francfort-sur-le-Mein, en Allemagne", desc: "La ville de la grande foire de septembre, et la place d'où partent les ballons.", map: "airs", arrive: "III1_1" },
  nacelle: { ambiance: "nuit", name: "Dans la nacelle", x: 50, y: 30, region: "Dans le ciel d'Allemagne", desc: "Une nacelle ronde de quatre pieds, ses sacs de lest, ses instruments, sous un ballon gonflé au gaz d'éclairage.", map: "airs", arrive: "III1_2" },
  dunkerque: { ambiance: "port", name: "Dunkerque", x: 50, y: 92, region: "La côte de Flandre, en France", desc: "Le port, ses jetées, la vieille église et la maison de Jean Cornbutte.", map: "nord", arrive: "IV1_1" },
  jeunehardie: { ambiance: "mer", name: "À bord de la Jeune-Hardie", x: 45, y: 60, region: "La mer du Nord, puis les mers du Groenland", desc: "Un brick de Dunkerque, son pont, sa cabine et son équipage.", map: "nord", arrive: "IV3_1" },
  liverpool: { ambiance: "neige", name: "L'île Liverpool", x: 30, y: 35, region: "La côte est du Groenland", desc: "Une île de la côte du Groenland, découverte en 1821, et quelques familles de chasseurs.", map: "nord", arrive: "IV5_2" },
  hivernage: { ambiance: "neige", name: "La baie de l'hivernage", x: 25, y: 20, region: "La côte est du Groenland", desc: "Une petite baie abritée par une pointe de terre, où le navire est pris dans la glace.", map: "nord", arrive: "IV6_1" },
  banquise: { ambiance: "neige", name: "Sur les glaces", x: 20, y: 8, region: "Au nord de l'hivernage", desc: "Des plaines de glace et de neige sous la nuit polaire, des icebergs, une maison de neige.", map: "nord", arrive: "IV9_1" },
  chamonix: { ambiance: "village", name: "Chamonix", x: 50, y: 85, region: "La vallée de Chamonix, en Savoie", desc: "Le village des guides, ses hôtels, et en face le Brevent.", map: "montblanc", arrive: "V1_1" },
  mulets: { ambiance: "montagne", name: "Les Grands-Mulets", x: 45, y: 50, region: "Le massif du mont Blanc, à 3 050 mètres", desc: "Des rochers qui dominent le glacier des Bossons, et la petite cabane des guides.", map: "montblanc", arrive: "V1_4" },
  sommet: { ambiance: "neige", name: "Les pentes du mont Blanc", x: 50, y: 15, region: "Le massif du mont Blanc", desc: "Le dôme du Goûter, le Grand-Plateau, et la cime.", map: "montblanc", arrive: "V1_6" },
};
