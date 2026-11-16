// « L'Île du docteur Moreau » (The Island of Doctor Moreau), H. G. Wells, 1896 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais de 1896 (Project Gutenberg
// n° 159, domaine public). Les notes de bas de page de Wells sont gardées dans le texte, entre parenthèses ou crochets.
// Les titres des chapitres sont ceux de Wells, traduits.
// Tout ce qui n'est pas de Wells vit dans les tags : gens, lieux, mots, résumés des chapitres.
// Les lieux du livre.
module.exports = {
  youyou: { ambiance: "mer", name: "Le youyou", map: "pacifique", x: 30, y: 50, region: "Le Pacifique", desc: "Le petit canot de la Lady Vain, sans voile ni vivres, perdu en plein océan.", arrive: "INTRO_1" },
  goelette: { ambiance: "mer", name: "L'Ipecacuanha", map: "pacifique", x: 55, y: 45, region: "Le Pacifique", desc: "Une petite goélette sale, chargée de cages, qui fait le commerce entre les îles. Son capitaine boit.", arrive: "II_1" },
  large: { ambiance: "mer", name: "Le large", map: "pacifique", x: 70, y: 60, region: "Le Pacifique", desc: "La haute mer, autour de l'île, sans une voile à l'horizon.", arrive: "XXII_1" },
  plage: { ambiance: "mer", name: "La plage", map: "ile", x: 50, y: 82, region: "L'île", desc: "Une grève de sable gris, avec un petit débarcadère, au pied de l'enclos.", arrive: "VI_2" },
  enclos: { ambiance: "village", name: "L'enclos", map: "ile", x: 52, y: 66, region: "L'île", desc: "La maison de Moreau et de Montgomery : des bâtiments bas, ceints de murs, avec une cour, des chambres, et une pièce qu'on garde fermée.", arrive: "VII_1" },
  foret: { ambiance: "foret", name: "La forêt", map: "ile", x: 40, y: 45, region: "L'île", desc: "Des broussailles épaisses, des palmiers, des fourrés de cannes et de fougères, qui couvrent presque toute l'île.", arrive: "IX_2" },
  ruisseau: { ambiance: "eau", name: "Le ruisseau chaud", map: "ile", x: 62, y: 42, region: "L'île", desc: "Un ruisseau tiède qui descend des hauteurs volcaniques à travers les bois.", arrive: "IX_1" },
  ravin: { ambiance: "montagne", name: "Le ravin des huttes", map: "ile", x: 68, y: 28, region: "L'île", desc: "Une gorge étroite, embuée de vapeurs, où les habitants de l'île vivent dans des huttes de branches et de cannes.", arrive: "XI_3" },
  angleterre: { ambiance: "ville", name: "L'Angleterre", map: "angleterre", x: 50, y: 50, region: "Le retour", desc: "Londres, puis une maison au bord des collines.", arrive: "XXII_2" },
};
