// « Le Roman de Tristan et Iseut », renouvelé par Joseph Bédier (1900) : un livre à lire, sans choix (lecture: true).
// Édition Piazza, préface de Gaston Paris, domaine public, d'après l'édition numérique du projet Gutenberg. Les titres des
// chapitres sont de Bédier ; ceux des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
// Les lieux du livre.
module.exports = {
  livre: { ambiance: "chateau", name: "Les poèmes des trouvères", map: "bretagnes", x: 50, y: 10, region: "La France et l'Angleterre du XIIe siècle", desc: "Les fragments de poèmes, les traductions allemandes et anglaises, d'où Joseph Bédier a recomposé l'histoire.", arrive: "P_1" },
  loonnois: { ambiance: "chateau", name: "Le Loonnois", map: "bretagnes", x: 30, y: 70, region: "Le royaume de Rivalen, outre-mer", desc: "Le pays du roi Rivalen, où Tristan naît et grandit chez Rohalt le Foi-Tenant.", arrive: "I_1" },
  cornouailles: { ambiance: "mer", name: "Les côtes de Cornouailles", map: "bretagnes", x: 45, y: 45, region: "La Cornouailles", desc: "Des falaises et des forêts au-dessus de la mer, où des marchands abandonnent un enfant.", arrive: "I_2" },
  tintagel: { ambiance: "chateau", name: "Tintagel", map: "bretagnes", x: 50, y: 40, region: "Le château du roi Marc, en Cornouailles", desc: "Un château au bord de la mer, avec ses salles, ses chambres tendues de courtines, son verger et sa grande baronnie de félons.", arrive: "I_3" },
  mer: { ambiance: "mer", name: "La mer", map: "bretagnes", x: 35, y: 40, region: "Entre la Cornouailles, l'Irlande et la Bretagne", desc: "La mer que Tristan passe et repasse, sur des nefs, des barques et une fois sans voile ni rames.", arrive: "II_2" },
  irlande: { ambiance: "chateau", name: "L'Irlande", map: "bretagnes", x: 15, y: 25, region: "Le royaume du roi d'Irlande, à Weisefort", desc: "Le pays du Morholt, de la reine qui connaît les herbes et de sa fille aux cheveux d'or, que ravage un dragon.", arrive: "III_2" },
  foret: { ambiance: "foret", name: "La forêt profonde", map: "bretagnes", x: 55, y: 35, region: "Près de Tintagel", desc: "Une forêt épaisse où l'on emmène quelqu'un pour qu'il ne revienne pas.", arrive: "V_2" },
  verger: { ambiance: "nuit", name: "Le verger du grand pin", map: "bretagnes", x: 52, y: 42, region: "Sous les murs de Tintagel", desc: "Un verger clos de pieux, avec un grand pin et une fontaine dont l'eau court jusqu'aux chambres des femmes.", arrive: "VI_2" },
  chapelle: { ambiance: "mer", name: "La chapelle sur la falaise", map: "bretagnes", x: 48, y: 46, region: "Sur la route du bûcher", desc: "Une petite chapelle bâtie au bord d'une falaise, dont la verrière s'ouvre sur l'abîme et sur la mer.", arrive: "VIII_2" },
  morois: { ambiance: "foret", name: "La forêt du Morois", map: "bretagnes", x: 60, y: 30, region: "La Cornouailles sauvage", desc: "Une forêt sauvage et profonde, où l'on vit de chasse, sans pain ni sel, dans des huttes de feuillage.", arrive: "VIII_4" },
  ermitage: { ambiance: "foret", name: "L'ermitage d'Ogrin", map: "bretagnes", x: 62, y: 34, region: "À la lisière du Morois", desc: "La cabane d'un ermite qui prie pour les pécheurs et sait écrire au roi.", arrive: "X_1" },
  gue: { ambiance: "eau", name: "Le Gué Aventureux", map: "bretagnes", x: 58, y: 45, region: "En Cornouailles", desc: "Un gué au milieu d'une prairie, où les barons dressent leurs tentes pour une assemblée.", arrive: "XI_2" },
  blanchelande: { ambiance: "champs", name: "La Blanche-Lande", map: "bretagnes", x: 56, y: 50, region: "Au bord du fleuve, en Cornouailles", desc: "Une grande lande au-delà d'un fleuve, où l'on tient les jugements devant les reliques des saints.", arrive: "XII_2" },
  galles: { ambiance: "chateau", name: "Le pays de Galles", map: "bretagnes", x: 60, y: 15, region: "La terre du duc Gilain", desc: "Le pays d'un jeune duc puissant et débonnaire, que tourmente un géant.", arrive: "XIV_1" },
  carhaix: { ambiance: "chateau", name: "Carhaix", map: "bretagnes", x: 75, y: 75, region: "La Petite-Bretagne, au-delà de la mer", desc: "La ville du duc Hoël, avec sa tour, ses remparts et la grève où l'on guette les voiles.", arrive: "XV_1" },
};
