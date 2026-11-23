// « Le Capitaine Fracasse », Théophile Gautier, 1863 : un livre à lire, sans choix (lecture: true). Texte de Gautier,
// domaine public, d'après l'édition Charpentier de 1913 numérisée par le projet Gutenberg. Les titres des chapitres sont
// de Gautier ; ceux des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
// Les lieux du livre.
module.exports = {
  sigognac: { ambiance: "chateau", name: "Le château de Sigognac", map: "france", x: 32, y: 82, region: "Les Landes, entre Dax et Mont-de-Marsan", desc: "Deux tours rondes, des fenêtres sans vitres, des salles où pleut le plafond, des portraits d'ancêtres et un jardin aux ronces.", arrive: "I_1" },
  landes: { ambiance: "route", name: "Les routes de Gascogne", map: "france", x: 34, y: 80, region: "Les Landes", desc: "La lande nue, les bruyères, les pins, des ornières de sable où le chariot s'enfonce.", arrive: "II_16" },
  soleilbleu: { ambiance: "village", name: "L'auberge du *Soleil bleu*", map: "france", x: 33, y: 78, region: "Les Landes", desc: "Un hameau de cahutes, une auberge sale, un hôte espagnol, une cuisine sans rien dedans.", arrive: "III_1" },
  bruyeres: { ambiance: "chateau", name: "Le château de Bruyères", map: "france", x: 35, y: 74, region: "La Gascogne", desc: "Un château neuf aux toits bleus et aux murs vermeils, des ifs taillés, une salle pour la comédie.", arrive: "V_1" },
  neige: { ambiance: "neige", name: "Sous la neige", map: "france", x: 37, y: 66, region: "Sur la route du Poitou", desc: "Une route blanche, un vent glacial, des corbeaux, et un chariot qui avance à peine.", arrive: "VI_5" },
  bellombre: { ambiance: "village", name: "La ferme de Bellombre", map: "france", x: 38, y: 62, region: "Le Poitou", desc: "Une grande ferme, une salle chaude, un ancien comédien devenu paysan, et une grange pour jouer.", arrive: "VII_7" },
  poitiers: { ambiance: "ville", name: "Poitiers", map: "france", x: 38, y: 56, region: "Le Poitou", desc: "L'hôtellerie des *Armes de France*, un jeu de paume changé en théâtre, des rues où guettent des laquais.", arrive: "VIII_1" },
  pontneuf: { ambiance: "ville", name: "Le Pont-Neuf", map: "france", x: 50, y: 30, region: "Paris", desc: "La statue d'Henri IV, la Samaritaine, les chanteurs, les charlatans, les filous, et toute la ville qui passe.", arrive: "XI_2" },
  paris: { ambiance: "nuit", name: "Paris la nuit", map: "france", x: 51, y: 31, region: "Paris", desc: "Des rues noires, un quai désert, un hôtel où logent les comédiens, et des hommes qui attendent dans l'ombre.", arrive: "XI_16" },
  radis: { ambiance: "souterrain", name: "Le *Radis couronné*", map: "france", x: 49, y: 31, region: "Paris", desc: "Un bouge enfumé, des piliers gras, des bretteurs, des voleurs, et une enfant qui dort dans un coin.", arrive: "XII_2" },
  hotelduc: { ambiance: "chateau", name: "L'hôtel de Vallombreuse", map: "france", x: 50, y: 29, region: "Paris", desc: "Des tapisseries, des laquais, un valet de chambre qui pare son maître, et un duc qui ne supporte pas qu'on lui dise non.", arrive: "XIII_1" },
  vallombreuse: { ambiance: "chateau", name: "Le château de Vallombreuse", map: "france", x: 56, y: 26, region: "Loin de Paris", desc: "Des douves, un pont-levis, une galerie de portraits, une chambre dorée qui est une prison, et des gardes qui boivent.", arrive: "XV_11" },
  greve: { ambiance: "ville", name: "La place de Grève", map: "france", x: 51, y: 30, region: "Paris", desc: "La place devant l'Hôtel de Ville, une foule matinale, et un échafaud où l'on a dressé la roue.", arrive: "XX_1" },
};
