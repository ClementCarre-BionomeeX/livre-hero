// « Ombres au clair de lune » (Shadows in the Moonlight), Robert E. Howard, 1934 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais paru dans Weird Tales
// en avril 1934 (Project Gutenberg n° 42188, domaine public). Les chapitres de Howard sont seulement numérotés ; leurs
// titres, ceux des pages et tout ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude.
// Les lieux du livre.
module.exports = {
  roseaux: { ambiance: "eau", name: "Les roseaux du Vilayet", map: "vilayet", x: 30, y: 80, region: "La côte sud-ouest", desc: "Une jungle de hauts roseaux, une petite clairière, et l'eau bleue qui clapote contre la rive basse.", arrive: "C1_1" },
  mer: { ambiance: "mer", name: "Le Vilayet", map: "vilayet", x: 40, y: 55, region: "La mer intérieure", desc: "Une grande mer intérieure que les galères hyrkaniennes tiennent comme un étang.", arrive: "C1_3" },
  baie: { ambiance: "eau", name: "La baie de l'île", map: "vilayet", x: 52, y: 30, region: "L'île", desc: "Une baie bleue et calme, des arbres qui trempent leurs racines dans l'eau, une barque amarrée.", arrive: "C1_5" },
  bois: { ambiance: "foret", name: "Les bois de l'île", map: "vilayet", x: 54, y: 27, region: "L'île", desc: "Des arches de feuillage, une herbe courte et douce, des fruits dorés, et des fourrés où rien ne laisse de traces.", arrive: "C1_6" },
  ruines: { ambiance: "temple", name: "La ruine du plateau", map: "vilayet", x: 55, y: 24, region: "L'île", desc: "Un grand bâtiment de pierre verdâtre au toit crevé, et dans sa salle, entre les piliers, des statues de fer noir.", arrive: "C1_7" },
  plateau: { ambiance: "champs", name: "Le plateau", map: "vilayet", x: 56, y: 23, region: "L'île", desc: "Un plateau d'herbe haute, presque nu, entre les bois du rivage et les falaises du nord.", arrive: "C2_2" },
  falaises: { ambiance: "montagne", name: "Les falaises du nord", map: "vilayet", x: 57, y: 19, region: "L'île", desc: "Le point le plus haut de l'île : un chaos de rochers qui plonge à pic sur les bois de la plage.", arrive: "C2_4" },
  galere: { ambiance: "mer", name: "La galère à l'ancre", map: "vilayet", x: 50, y: 22, region: "L'île", desc: "Une galère hyrkanienne au mât peint, à l'ancre près d'une étroite plage.", arrive: "C4_1" },
};
