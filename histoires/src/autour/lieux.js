// « Autour de la Lune », Jules Verne, 1869 : un livre à lire, sans choix (lecture: true). Texte de Verne, domaine public,
// d'après l'édition illustrée de Hetzel numérisée par le Projet Gutenberg ; les gravures sont retirées. Les notes de
// l'auteur restent entre parenthèses à leur appel. Les titres des chapitres sont ceux de Verne ; les titres des pages
// sont de Claude, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés).
// Les lieux du livre.
module.exports = {
  stoneshill: { ambiance: "champs", name: "Stone's-Hill", map: "etats", x: 77, y: 85, region: "La Floride", desc: "Une colline de pierres au milieu de la plaine, la bouche de la Columbiad, et des millions de spectateurs.", arrive: "P_1" },
  longspeak: { ambiance: "montagne", name: "Long's-Peak", map: "etats", x: 40, y: 36, region: "Les montagnes Rocheuses", desc: "Un sommet des montagnes Rocheuses, et le télescope géant de l'Observatoire de Cambridge.", arrive: "P_2" },
  projectile: { ambiance: "nuit", name: "Le projectile", map: "ciel", x: 25, y: 70, region: "Entre la Terre et la Lune", desc: "Un obus d'aluminium capitonné, ses hublots, son bec de gaz, des vivres pour un an, et trois voyageurs.", arrive: "I_2" },
  neutre: { ambiance: "nuit", name: "Le point neutre", map: "ciel", x: 60, y: 40, region: "Entre la Terre et la Lune", desc: "L'endroit où la Terre et la Lune attirent également, et où plus rien ne pèse.", arrive: "VIII_3" },
  visible: { ambiance: "montagne", name: "La face visible", map: "lune", x: 45, y: 30, region: "La Lune", desc: "Des cirques, des cratères, des chaînes de montagnes, des rainures, et des mers sans eau aux noms étranges.", arrive: "X_1" },
  cachee: { ambiance: "nuit", name: "La face cachée", map: "lune", x: 55, y: 50, region: "La Lune", desc: "La moitié de la Lune qu'on ne voit jamais de la Terre, plongée dans une nuit de quinze jours.", arrive: "XIV_1" },
  tycho: { ambiance: "montagne", name: "Tycho", map: "lune", x: 45, y: 75, region: "La Lune", desc: "Une montagne annulaire éclatante de l'hémisphère sud, d'où partent des raies lumineuses dans toutes les directions.", arrive: "XVI_2" },
  pacifique: { ambiance: "mer", name: "Le Pacifique", map: "etats", x: 4, y: 72, region: "Au large de la Basse-Californie", desc: "Une mer profonde, et une corvette de la marine qui en sonde le fond.", arrive: "XX_1" },
  sanfrancisco: { ambiance: "ville", name: "San Francisco", map: "etats", x: 6, y: 45, region: "La Californie", desc: "La capitale du pays de l'or, sa baie, son port, et le télégraphe qui la relie au reste de l'Union.", arrive: "XXI_1" },
  union: { ambiance: "ville", name: "Les États de l'Union", map: "etats", x: 75, y: 35, region: "Les États-Unis", desc: "Des gares pavoisées, des tables dressées, et des foules qui acclament de ville en ville.", arrive: "XXIII_1" },
};
