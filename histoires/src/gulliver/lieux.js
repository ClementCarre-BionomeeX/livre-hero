// « Voyages de Gulliver » (Gulliver's Travels), Jonathan Swift, 1726 : un livre à lire, sans choix (lecture: true).
// Texte de Swift (1667-1745, domaine public), dans la traduction de l'abbé Desfontaines (1727, domaine public), revue
// au XIXe siècle, d'après l'édition d'Ebooks libres et gratuits. Les sommaires en italique ouvrent les chapitres de cette
// édition ; les titres des chapitres et des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés),
// sont de Claude.
// Les lieux du livre.
module.exports = {
  mer: { ambiance: "mer", name: "La mer", map: "monde", x: 50, y: 60, region: "Les mers du Sud et de l'Inde", desc: "Des vaisseaux marchands, des tempêtes, des chaloupes, et des terres que nulle carte ne porte.", arrive: "I1_1" },
  redriff: { ambiance: "village", name: "Redriff", map: "monde", x: 30, y: 20, region: "Sur la Tamise, près de Londres", desc: "La maison du voyageur, sa femme, ses enfants, et plus tard une écurie neuve.", arrive: "II6_5" },
  rivage: { ambiance: "champs", name: "Le rivage de Lilliput", map: "lilliput", x: 30, y: 70, region: "L'empire de Lilliput", desc: "Une herbe courte et fine, des arbres de sept pieds, et un vieux temple où l'on enchaîne le géant.", arrive: "I1_2" },
  mildendo: { ambiance: "ville", name: "Mildendo", map: "lilliput", x: 45, y: 45, region: "La capitale de Lilliput", desc: "Une ville carrée de cinq cents pieds de côté, des maisons de trois à cinq étages, et un palais entouré d'une muraille haute de vingt-trois pouces.", arrive: "I3_1" },
  blefuscu: { ambiance: "mer", name: "Blefuscu", map: "lilliput", x: 70, y: 20, region: "L'île au nord-est de Lilliput", desc: "Un empire rival, un port plein de vaisseaux de guerre, et un canal de quatre cents toises entre les deux.", arrive: "I5_1" },
  ferme: { ambiance: "champs", name: "La ferme du laboureur", map: "brobdingnag", x: 30, y: 70, region: "Brobdingnag, près de la côte", desc: "Des champs d'orge aux épis hauts comme des arbres, des haies de cent vingt pieds, une maison où un chat vaut trois bœufs.", arrive: "II1_2" },
  lorbrulgrud: { ambiance: "chateau", name: "Lorbrulgrud", map: "brobdingnag", x: 55, y: 45, region: "La capitale de Brobdingnag", desc: "L'Orgueil de l'univers : une ville coupée par un fleuve, et un palais de sept milles de tour aux chambres hautes de deux cent quarante pieds.", arrive: "II2_3" },
  laputa: { ambiance: "montagne", name: "Laputa", map: "laputa", x: 45, y: 25, region: "L'île volante", desc: "Une île ronde de quatre mille pas, des galeries en terrasses, un palais au sommet et, au fond d'une grotte, l'aimant qui la porte.", arrive: "III1_3" },
  lagado: { ambiance: "ville", name: "Lagado", map: "laputa", x: 40, y: 55, region: "Les Balnibarbes", desc: "Une capitale grande comme la moitié de Londres, des maisons de travers, des champs en friche et des gens en haillons.", arrive: "III4_1" },
  academie: { ambiance: "ville", name: "L'académie de Lagado", map: "laputa", x: 50, y: 60, region: "À Lagado", desc: "Une suite de bâtiments des deux côtés d'une rue, et dans chaque chambre un projet.", arrive: "III5_1" },
  gloubbdoubdrib: { ambiance: "nuit", name: "Gloubbdoubdrib", map: "laputa", x: 25, y: 75, region: "L'île des sorciers", desc: "Une île fertile, un palais au milieu d'un parc, des gardes étranges et des serviteurs qui s'évanouissent d'un geste.", arrive: "III7_1" },
  luggnagg: { ambiance: "chateau", name: "Luggnagg", map: "laputa", x: 70, y: 70, region: "Un royaume entre les Balnibarbes et le Japon", desc: "Un port, la cour de Trildrogdrib, et un trône qu'on approche en rampant.", arrive: "III8_1" },
  japon: { ambiance: "ville", name: "Le Japon", map: "laputa", x: 85, y: 50, region: "Yedo et Nangasaki", desc: "Une cour fermée aux étrangers, et le port où les vaisseaux hollandais attendent leur cargaison.", arrive: "III10_1" },
  houyhnhnms: { ambiance: "champs", name: "Le pays des Houyhnhnms", map: "houyhnhnms", x: 40, y: 50, region: "Une terre australe inconnue", desc: "Des herbages, des champs d'avoine, des yahous dans les arbres, et une longue maison de bois couverte de paille.", arrive: "IV1_2" },
  cote: { ambiance: "mer", name: "La côte", map: "houyhnhnms", x: 20, y: 75, region: "Le rivage du pays des Houyhnhnms", desc: "La plage où l'équipage abandonne son capitaine, et d'où l'on voit, par beau temps, une île au nord-est.", arrive: "IV1_1" },
  lisbonne: { ambiance: "ville", name: "Lisbonne", map: "monde", x: 35, y: 45, region: "Le Portugal", desc: "Le port, la maison du capitaine Pedro de Mendez, et un vaisseau anglais en partance.", arrive: "IV11_3" },
};
