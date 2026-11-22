// « Le Livre de la jungle » (The Jungle Book), Rudyard Kipling, 1894 : un livre à lire, sans choix (lecture: true).
// Texte de Kipling (1865-1936, domaine public), dans la traduction de Louis Fabulet et Robert d'Humières (1899, domaine
// public), d'après l'édition d'Ebooks libres et gratuits. Les titres des sept récits sont ceux de Kipling ; ceux des
// pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
// Les lieux du livre.
module.exports = {
  caverne: { ambiance: "foret", name: "La caverne des loups", map: "seeonee", x: 40, y: 40, region: "Les collines de Seeonee", desc: "Une caverne au flanc de la colline, la vallée en dessous, et la rivière où chasse le tigre.", arrive: "I_1" },
  conseil: { ambiance: "montagne", name: "Le Rocher du Conseil", map: "seeonee", x: 46, y: 32, region: "Au sommet d'une colline", desc: "Un plateau de pierres et de rochers où le Clan s'assemble à la pleine lune, et la pierre plate d'Akela.", arrive: "I_4" },
  jungle: { ambiance: "foret", name: "La Jungle", map: "seeonee", x: 55, y: 50, region: "Le long de la Waingunga", desc: "Des arbres, des lianes, des fourrés de bambous, et chacun des peuples avec sa Loi.", arrive: "I_7" },
  grottes: { ambiance: "souterrain", name: "Les Grottes Froides", map: "seeonee", x: 75, y: 25, region: "Une ville perdue dans la Jungle", desc: "Un palais de roi en ruine, des terrasses, des citernes vides, un pavillon aux murs de marbre et des milliers de singes.", arrive: "II_8" },
  village: { ambiance: "village", name: "Le village", map: "seeonee", x: 25, y: 70, region: "Au bord des terres cultivées", desc: "Des huttes, une barrière d'épines, un grand figuier où les vieux fument le soir, et des pâturages pleins de rochers.", arrive: "I_9" },
  ravin: { ambiance: "montagne", name: "Le ravin de la Waingunga", map: "seeonee", x: 35, y: 60, region: "Entre la plaine et la Jungle", desc: "Une gorge sèche aux flancs à pic, tapissés de lianes, qui débouche sur la plaine.", arrive: "III_6" },
  novastoshnah: { ambiance: "mer", name: "Novastoshnah", map: "behring", x: 40, y: 30, region: "L'île de Saint-Paul, mer de Behring", desc: "Une grève couverte de phoques à perte de vue, des rochers, la houle et le brouillard.", arrive: "IV_1" },
  mer: { ambiance: "mer", name: "La mer", map: "behring", x: 55, y: 60, region: "Le Pacifique", desc: "Le large, les tempêtes, les bancs de poissons et les îles lointaines.", arrive: "IV_3" },
  plages: { ambiance: "mer", name: "Les plages des vaches marines", map: "behring", x: 70, y: 40, region: "Derrière la falaise", desc: "Des plages de sable que ferme une muraille de falaises, et un tunnel sous l'eau pour y entrer.", arrive: "IV_9" },
  jardin: { ambiance: "village", name: "Le bungalow de Segowlee", map: "segowlee", x: 50, y: 50, region: "Un cantonnement de l'Inde", desc: "Un grand jardin à demi cultivé, des rosiers, des orangers, des fourrés, un buisson d'épines et une salle de bains à l'écoulement ouvert.", arrive: "V_1" },
  camp: { ambiance: "foret", name: "Le camp des chasseurs d'éléphants", map: "garo", x: 40, y: 50, region: "Les montagnes de Garo", desc: "Des piquets d'éléphants, des feux, des tentes, et la forêt qui monte sur les pentes.", arrive: "VI_1" },
  keddah: { ambiance: "foret", name: "La clairière des éléphants", map: "garo", x: 70, y: 30, region: "Au cœur des montagnes", desc: "Un terrain battu, dur comme un plancher, au milieu d'arbres immenses.", arrive: "VI_6" },
  rawal: { ambiance: "ville", name: "Le camp de Rawal Pindi", map: "rawal", x: 50, y: 50, region: "Le nord de l'Inde", desc: "Trente mille hommes, des chameaux, des éléphants, des chevaux et des mulets sous une pluie d'un mois, et des tentes dans la boue.", arrive: "VII_1" },
};
