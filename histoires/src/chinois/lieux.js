// « Les Tribulations d'un Chinois en Chine », Jules Verne, 1879 : un livre à lire, sans choix (lecture: true). Texte
// de Verne, domaine public, d'après l'édition numérisée par le Projet Gutenberg. Les notes de l'auteur restent à leur
// place. Les titres courts des chapitres, comme ceux des pages, sont de Claude, ainsi que tout ce qui vit dans les
// tags (gens, lieux, mots, résumés).
// Les lieux du livre.
module.exports = {
  canton: { ambiance: "eau", name: "Un bateau-fleurs à Canton", x: 40, y: 92, region: "La rivière des Perles", desc: "Un bateau de plaisance aux salons dorés et fleuris, amarré parmi des centaines d'autres sur la rivière des Perles.", map: "chine", arrive: "I_1" },
  shanghai: { ambiance: "ville", name: "Shang-Haï", x: 84, y: 58, region: "Au bord du Wousung", desc: "Un grand port de commerce : des concessions anglaise, américaine et française, et la vieille ville chinoise derrière ses murailles.", map: "chine", arrive: "III_1" },
  yamen: { ambiance: "ville", name: "Le yamen de Kin-Fo", x: 85, y: 59, region: "Près de Shang-Haï", desc: "Une riche demeure de pavillons et de jardins, où l'on trouve tout le confort de l'Occident.", map: "chine", arrive: "IV_1" },
  centenaire: { ambiance: "ville", name: "Les bureaux de la Centenaire", x: 83, y: 58, region: "Shang-Haï", desc: "Les bureaux d'une compagnie américaine d'assurances sur la vie, sur les bords du Wousung.", map: "chine", arrive: "VI_1" },
  campagne: { ambiance: "champs", name: "La campagne de Shang-Haï", x: 82, y: 60, region: "Autour de Shang-Haï", desc: "Des champs bien cultivés, semés de tombes et de cercueils posés à même le sol.", map: "chine", arrive: "VII_4" },
  nanking: { ambiance: "ville", name: "Nan-King", x: 76, y: 54, region: "Sur le fleuve Bleu", desc: "L'ancienne capitale de l'Empire, ruinée par la guerre des Taï-ping.", map: "chine", arrive: "XI_3" },
  fleuve: { ambiance: "eau", name: "Le fleuve Bleu", x: 62, y: 58, region: "Le Yang-tsé-Kiang", desc: "Un fleuve immense qu'on remonte en steamboat, de Nan-King à Ran-Kéou et au-delà.", map: "chine", arrive: "XI_2" },
  route: { ambiance: "route", name: "Les routes de l'intérieur", x: 42, y: 50, region: "Par Si-Gnan-Fou", desc: "Des routes de terre, des rivières et des canaux, à travers les provinces du centre et du nord.", map: "chine", arrive: "XII_3" },
  jaune: { ambiance: "eau", name: "Le fleuve Jaune", x: 48, y: 42, region: "Le Rouang-Ro", desc: "Un fleuve boueux et capricieux qui descend du nord et change parfois de lit.", map: "chine", arrive: "XII_4" },
  tongtcheou: { ambiance: "ville", name: "Tong-Tchéou", x: 71, y: 26, region: "Sur le Peï-ho, près de Péking", desc: "Une vieille cité commerçante, aux faubourgs pleins de monde, au bord d'un bras du Peï-ho.", map: "chine", arrive: "XIII_1" },
  palikao: { ambiance: "eau", name: "Le pont de Palikao", x: 70, y: 27, region: "Entre Tong-Tchéou et Péking", desc: "Un grand pont de marbre sur le canal, où se livra une bataille en 1860.", map: "chine", arrive: "XIII_4" },
  peking: { ambiance: "ville", name: "Péking", x: 68, y: 26, region: "La capitale", desc: "Quatre villes en une, enfermées dans leurs murailles : la ville tartare, la ville jaune, la ville rouge et la ville chinoise.", map: "chine", arrive: "XIV_1" },
  chacoua: { ambiance: "ville", name: "La maison de Lé-ou", x: 67, y: 25, region: "Avenue de Cha-Coua, à Péking", desc: "Une petite maison modeste et bien tenue, avec un boudoir où l'on attend le courrier.", map: "chine", arrive: "V_1" },
  koanine: { ambiance: "temple", name: "Le temple de Koanine", x: 68, y: 24, region: "Péking", desc: "Un temple bouddhiste dédié à la déesse Koanine, où les fidèles achètent des prières aux bonzes.", map: "chine", arrive: "XIV_4" },
  bonheur: { ambiance: "ville", name: "L'hôtel du Bonheur Céleste", x: 69, y: 25, region: "Péking", desc: "Un hôtel de la capitale, décoré pour une noce.", map: "chine", arrive: "XV_4" },
  peiho: { ambiance: "eau", name: "Le Peï-ho", x: 73, y: 30, region: "De Péking à la mer", desc: "Une rivière large et tranquille entre des champs de sorgho, de maïs et de millet, jusqu'au port de Takou.", map: "chine", arrive: "XVI_3" },
  jonque: { ambiance: "mer", name: "La Sam-Yep", x: 79, y: 31, region: "Le golfe de Pé-Tché-Li", desc: "Une jonque à voiles de nattes, à l'arrière relevé, qui fait du cabotage le long des côtes.", map: "chine", arrive: "XVII_1" },
  mer: { ambiance: "mer", name: "En pleine mer", x: 84, y: 30, region: "Le golfe de Pé-Tché-Li", desc: "Une mer sans terre en vue, que la houle soulève lentement.", map: "chine", arrive: "XIX_1" },
  founing: { ambiance: "village", name: "Fou-Ning", x: 82, y: 22, region: "La côte du Pé-Tché-Li", desc: "Un petit port de pêcheurs, au pied des montagnes que longe la Grande Muraille.", map: "chine", arrive: "XXI_1" },
  muraille: { ambiance: "montagne", name: "La Grande Muraille", x: 80, y: 17, region: "La frontière du nord", desc: "Un mur de briques et de pierres crénelé, long de quatre cents lieues, qui court par monts et par vaux.", map: "chine", arrive: "XXI_3" },
  crypte: { ambiance: "souterrain", name: "Un temple souterrain", x: 79, y: 15, region: "Au-delà de la Grande Muraille", desc: "Une salle voûtée, enterrée sous un ancien temple, éclairée de quelques torches.", map: "chine", arrive: "XXII_2" },
};
