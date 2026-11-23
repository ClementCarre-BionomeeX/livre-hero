// « Les Mille et Une Nuits », contes choisis : un livre à lire, sans choix (lecture: true). Traduction d'Antoine Galland
// (1704-1717), édition Morizot illustrée par Godefroy Durand, domaine public, d'après l'édition numérique du projet Gutenberg.
// Les titres des chapitres et des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "I", title: "Schahriar et Scheherazade", question: "", levels: [1, 1], start: "I_1" },
  { id: "II", title: "Le Marchand et le Génie", question: "", levels: [1, 1], start: "II_1" },
  { id: "III", title: "Le Premier Vieillard et la Biche", question: "", levels: [1, 1], start: "III_1" },
  { id: "IV", title: "Le Second Vieillard et les Deux Chiens", question: "", levels: [1, 1], start: "IV_1" },
  { id: "V", title: "Le Pêcheur et le Génie", question: "", levels: [1, 1], start: "V_1" },
  { id: "VI", title: "Le Jeune Roi des Îles Noires", question: "", levels: [1, 1], start: "VI_1" },
  { id: "VII", title: "Trois Calenders et cinq dames de Bagdad", question: "", levels: [1, 1], start: "VII_1" },
  { id: "VIII", title: "Le Premier Calender", question: "", levels: [1, 1], start: "VIII_1" },
  { id: "IX", title: "Le Second Calender", question: "", levels: [1, 1], start: "IX_1" },
  { id: "X", title: "Le Troisième Calender", question: "", levels: [1, 1], start: "X_1" },
  { id: "XI", title: "Zobéide", question: "", levels: [1, 1], start: "XI_1" },
  { id: "XII", title: "Amine", question: "", levels: [1, 1], start: "XII_1" },
  { id: "XIII", title: "Sindbad le marin", question: "", levels: [1, 1], start: "XIII_1" },
  { id: "XIV", title: "Premier voyage de Sindbad", question: "", levels: [1, 1], start: "XIV_1" },
  { id: "XV", title: "Second voyage de Sindbad", question: "", levels: [1, 1], start: "XV_1" },
  { id: "XVI", title: "Troisième voyage de Sindbad", question: "", levels: [1, 1], start: "XVI_1" },
  { id: "XVII", title: "Quatrième voyage de Sindbad", question: "", levels: [1, 1], start: "XVII_1" },
  { id: "XVIII", title: "Cinquième voyage de Sindbad", question: "", levels: [1, 1], start: "XVIII_1" },
  { id: "XIX", title: "Sixième voyage de Sindbad", question: "", levels: [1, 1], start: "XIX_1" },
  { id: "XX", title: "Septième et dernier voyage de Sindbad", question: "", levels: [1, 1], start: "XX_1" },
  { id: "XXI", title: "Le Petit Bossu", question: "", levels: [1, 1], start: "XXI_1" },
  { id: "XXII", title: "Le Pourvoyeur du sultan de Casgar", question: "", levels: [1, 1], start: "XXII_1" },
  { id: "XXIII", title: "Le Tailleur", question: "", levels: [1, 1], start: "XXIII_1" },
  { id: "XXIV", title: "Le Barbier", question: "", levels: [1, 1], start: "XXIV_1" },
  { id: "XXV", title: "Aladdin : le caveau", question: "", levels: [1, 1], start: "XXV_1" },
  { id: "XXVI", title: "Aladdin : la lampe", question: "", levels: [1, 1], start: "XXVI_1" },
  { id: "XXVII", title: "Aladdin : la princesse", question: "", levels: [1, 1], start: "XXVII_1" },
  { id: "XXVIII", title: "Aladdin : le palais", question: "", levels: [1, 1], start: "XXVIII_1" },
  { id: "XXIX", title: "Aladdin : les lampes neuves", question: "", levels: [1, 1], start: "XXIX_1" },
  { id: "XXX", title: "Aladdin : la sainte femme", question: "", levels: [1, 1], start: "XXX_1" },
  { id: "XXXI", title: "Ali Baba : le rocher", question: "", levels: [1, 1], start: "XXXI_1" },
  { id: "XXXII", title: "Ali Baba : les quarante voleurs", question: "", levels: [1, 1], start: "XXXII_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
