// « Le Bossu », Paul Féval, 1857 : un livre à lire, sans choix (lecture: true). Texte de Féval, domaine public,
// d'après l'édition d'Ebooks libres et gratuits. Les titres des chapitres sont de Féval ; ceux des pages, comme tout ce
// qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
// Les lieux du livre.
module.exports = {
  louron: { ambiance: "montagne", name: "La vallée de Louron", map: "pyrenees", x: 50, y: 50, region: "Les Pyrénées", desc: "Un val désert entre les vallées d'Aure et de Barousse, des colonnes romaines sous la charrue, des torrents, et la montagne tout près.", arrive: "I1_1" },
  caylus: { ambiance: "chateau", name: "Le château de Caylus", map: "pyrenees", x: 52, y: 46, region: "La vallée de Louron", desc: "Un vieux château vaniteux, ses tourelles, ses douves, un chêne où pendait le baron, et une fenêtre basse qu'on n'ouvre jamais.", arrive: "I1_2" },
  pomme: { ambiance: "village", name: "La Pomme d'Adam", map: "pyrenees", x: 54, y: 48, region: "Sous les murs de Caylus", desc: "Un cabaret de montagne, une salle basse, une maritorne louche, et une fenêtre qui donne sur les douves du château.", arrive: "I2_2" },
  fosses: { ambiance: "nuit", name: "Les douves de Caylus", map: "pyrenees", x: 53, y: 45, region: "Sous les murs de Caylus", desc: "Le fond des fossés, une prairie, un pont de bois, un petit escalier, et la fenêtre basse au-dessus.", arrive: "I6_1" },
  montagne: { ambiance: "montagne", name: "Les Pyrénées espagnoles", map: "pyrenees", x: 40, y: 70, region: "L'Espagne", desc: "Des fermes perdues, des muletiers, des gitanos autour d'un feu, des chèvres, et des sentiers de contrebandiers.", arrive: "III1_5" },
  pampelune: { ambiance: "ville", name: "Pampelune", map: "pyrenees", x: 30, y: 62, region: "La Navarre", desc: "Une ville de clochers et de remparts, une chambre pauvre, un vieux traité d'escrime, et des pistoles qu'on refuse.", arrive: "III2_1" },
  madrid: { ambiance: "ville", name: "Madrid", map: "pyrenees", x: 20, y: 95, region: "L'Espagne", desc: "Une maison aux jalousies closes, un jardin, et un jeune gentilhomme qui lit sur un banc.", arrive: "III5_1" },
  route: { ambiance: "route", name: "Sur la route", map: "paris", x: 70, y: 6, region: "Les routes", desc: "Ostende, Bruxelles, la route de Flandre, une chaise et un cavalier qui la précède.", arrive: "III6_2" },
  paris: { ambiance: "ville", name: "Paris", map: "paris", x: 50, y: 50, region: "Paris", desc: "La Régence : les salons, les tripots, la rue Quincampoix, la folie du papier et des actions.", arrive: "II1_1" },
  hotel: { ambiance: "ville", name: "L'hôtel de Gonzague", map: "paris", x: 56, y: 46, region: "Paris, l'ancien hôtel de Lorraine", desc: "Un palais princier, la grande salle des conseils, un jardin couvert de loges pour les agioteurs, et l'appartement d'une veuve en deuil.", arrive: "II1_2" },
  chantre: { ambiance: "ville", name: "La rue du Chantre", map: "paris", x: 46, y: 44, region: "Paris, près du Palais-Royal", desc: "Une ruelle sale, une maison à deux entrées, un ciseleur qui sort la nuit, une jeune fille qui chante, et des voisines qui jasent.", arrive: "III1_1" },
  palaisroyal: { ambiance: "chateau", name: "Le Palais-Royal", map: "paris", x: 45, y: 40, region: "Paris", desc: "Le palais du Régent, ses jardins illuminés pour le bal, la charmille, le rond-point de Diane, et le cabinet du prince.", arrive: "IV1_1" },
  petitemaison: { ambiance: "nuit", name: "La petite maison", map: "paris", x: 70, y: 40, region: "Paris, rue Folie-Méricourt", desc: "Une folie de la Régence, des boudoirs peints, une galerie, une table servie pour les roués et les filles d'Opéra.", arrive: "V6_1" },
  chatelet: { ambiance: "souterrain", name: "Le Châtelet", map: "paris", x: 50, y: 56, region: "Paris", desc: "Trois étages de cachots, un greffe, des geôliers, et la Chambre ardente qui juge à huis clos.", arrive: "VI3_1" },
  magloire: { ambiance: "nuit", name: "Le cimetière Saint-Magloire", map: "paris", x: 58, y: 44, region: "Paris, rue Saint-Denis", desc: "Un vieux cimetière derrière l'hôtel de Gonzague, ses cyprès, une chapelle, et le tombeau de Philippe de Lorraine.", arrive: "VI10_1" },
};
