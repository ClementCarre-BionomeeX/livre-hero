// « Gabriel Lambert », Alexandre Dumas, 1844 : un livre à lire, sans choix (lecture: true). Texte de Dumas,
// domaine public, d'après l'édition numérique du projet Gutenberg. Les titres des chapitres sont ceux de Dumas ; les
// titres des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
// Les lieux du livre.
module.exports = {
  bastide: { ambiance: "port", name: "La bastide du fort Lamalgue", map: "france", x: 72, y: 88, region: "Toulon", desc: "Une petite maison de campagne au bord de la mer, à cinquante pas du fort, face à la redoute où commença la fortune de Bonaparte.", arrive: "I_1" },
  rade: { ambiance: "mer", name: "La rade de Toulon", map: "france", x: 70, y: 90, region: "Toulon", desc: "Une rade bleue où glissent les canots de la marine, menés à la rame par des forçats sous la garde d'un argousin.", arrive: "I_2" },
  paris: { ambiance: "ville", name: "Paris", map: "paris", x: 50, y: 50, region: "Paris", desc: "Le Paris des clubs, des tables de jeu et des boulevards, où l'on juge un homme à son cheval et à son tailleur.", arrive: "IV_1" },
  opera: { ambiance: "ville", name: "L'Opéra", map: "paris", x: 55, y: 30, region: "Paris, rue Le Peletier", desc: "Le foyer des abonnés et des dandys, un soir de Robert le Diable, et la file des voitures à la sortie.", arrive: "III_1" },
  muette: { ambiance: "foret", name: "L'allée de la Muette", map: "paris", x: 10, y: 45, region: "Bois de Boulogne", desc: "Une allée du bois de Boulogne, noyée de brouillard à l'aube, où l'on vient se battre loin des regards.", arrive: "V_1" },
  cabinet: { ambiance: "ville", name: "Le cabinet du docteur Fabien", map: "paris", x: 45, y: 60, region: "Paris", desc: "Un cabinet de médecin, des livres, une lampe, et des confidences reçues à minuit.", arrive: "VI_1" },
  taitbout: { ambiance: "ville", name: "L'appartement de la rue Taitbout", map: "paris", x: 60, y: 40, region: "Paris, rue Taitbout, n° 11", desc: "Un appartement de luxe neuf, valets, tapis et secrétaire à secrets, où l'on ferme la porte à double tour.", arrive: "VII_1" },
  trouville: { ambiance: "village", name: "Trouville", map: "france", x: 40, y: 24, region: "Normandie, près de Pont-l'Évêque", desc: "Un village de pêcheurs et de paysans sur la côte normande, avec sa mairie, son curé et ses haies.", arrive: "XII_1" },
  bicetre: { ambiance: "souterrain", name: "Bicêtre", map: "paris", x: 60, y: 90, region: "Aux portes de Paris", desc: "Une prison aux portes massives, des corridors sombres, et en bas quelques marches, les cachots des condamnés à mort.", arrive: "XVII_1" },
  tuileries: { ambiance: "chateau", name: "Les Tuileries", map: "paris", x: 48, y: 45, region: "Paris", desc: "Le palais du roi : au salon, la reine et les princesses à leur tapisserie ; plus loin, le cabinet où le roi travaille seul.", arrive: "XVIII_1" },
  bagne: { ambiance: "port", name: "Le bagne de Toulon", map: "france", x: 71, y: 89, region: "Toulon, l'arsenal", desc: "L'arsenal où les forçats, enchaînés deux à deux, traînent les canons, empilent les planches et passent devant la corderie.", arrive: "XIX_2" },
};
