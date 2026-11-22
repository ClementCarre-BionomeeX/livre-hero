// « De la Terre à la Lune », Jules Verne, 1865 : un livre à lire, sans choix (lecture: true). Texte de Verne, domaine
// public, d'après l'édition du Projet Gutenberg. Les notes de l'auteur restent entre parenthèses à leur appel. Les titres
// des chapitres sont ceux de Verne ; les titres des pages sont de Claude, comme tout ce qui vit dans les tags (gens, lieux,
// mots, résumés).
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "I", title: "I. Le Gun-Club", question: "", levels: [1, 1], start: "I_1" },
  { id: "II", title: "II. Communication du président Barbicane", question: "", levels: [1, 1], start: "II_1" },
  { id: "III", title: "III. Effet de la communication Barbicane", question: "", levels: [1, 1], start: "III_1" },
  { id: "IV", title: "IV. Réponse de l'Observatoire de Cambridge", question: "", levels: [1, 1], start: "IV_1" },
  { id: "V", title: "V. Le roman de la Lune", question: "", levels: [1, 1], start: "V_1" },
  { id: "VI", title: "VI. Ce qu'il n'est pas possible d'ignorer et ce qu'il n'est plus permis de croire dans les États-Unis", question: "", levels: [1, 1], start: "VI_1" },
  { id: "VII", title: "VII. L'hymne du boulet", question: "", levels: [1, 1], start: "VII_1" },
  { id: "VIII", title: "VIII. L'histoire du canon", question: "", levels: [1, 1], start: "VIII_1" },
  { id: "IX", title: "IX. La question des poudres", question: "", levels: [1, 1], start: "IX_1" },
  { id: "X", title: "X. Un ennemi sur vingt-cinq millions d'amis", question: "", levels: [1, 1], start: "X_1" },
  { id: "XI", title: "XI. Floride et Texas", question: "", levels: [1, 1], start: "XI_1" },
  { id: "XII", title: "XII. Urbi et orbi", question: "", levels: [1, 1], start: "XII_1" },
  { id: "XIII", title: "XIII. Stone's-Hill", question: "", levels: [1, 1], start: "XIII_1" },
  { id: "XIV", title: "XIV. Pioche et truelle", question: "", levels: [1, 1], start: "XIV_1" },
  { id: "XV", title: "XV. La fête de la fonte", question: "", levels: [1, 1], start: "XV_1" },
  { id: "XVI", title: "XVI. La Columbiad", question: "", levels: [1, 1], start: "XVI_1" },
  { id: "XVII", title: "XVII. Une dépêche télégraphique", question: "", levels: [1, 1], start: "XVII_1" },
  { id: "XVIII", title: "XVIII. Le passager de l'« Atlanta »", question: "", levels: [1, 1], start: "XVIII_1" },
  { id: "XIX", title: "XIX. Un meeting", question: "", levels: [1, 1], start: "XIX_1" },
  { id: "XX", title: "XX. Attaque et riposte", question: "", levels: [1, 1], start: "XX_1" },
  { id: "XXI", title: "XXI. Comment un Français arrange une affaire", question: "", levels: [1, 1], start: "XXI_1" },
  { id: "XXII", title: "XXII. Le nouveau citoyen des États-Unis", question: "", levels: [1, 1], start: "XXII_1" },
  { id: "XXIII", title: "XXIII. Le wagon-projectile", question: "", levels: [1, 1], start: "XXIII_1" },
  { id: "XXIV", title: "XXIV. Le télescope des montagnes Rocheuses", question: "", levels: [1, 1], start: "XXIV_1" },
  { id: "XXV", title: "XXV. Derniers détails", question: "", levels: [1, 1], start: "XXV_1" },
  { id: "XXVI", title: "XXVI. Feu !", question: "", levels: [1, 1], start: "XXVI_1" },
  { id: "XXVII", title: "XXVII. Temps couvert", question: "", levels: [1, 1], start: "XXVII_1" },
  { id: "XXVIII", title: "XXVIII. Un nouvel astre", question: "", levels: [1, 1], start: "XXVIII_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
