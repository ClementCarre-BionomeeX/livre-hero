// « Le Fantôme de l'Opéra », Gaston Leroux, 1910 : un livre à lire, sans choix (lecture: true). Texte de Leroux
// (1868-1927, domaine public), d'après l'édition du projet Gutenberg ; les notes de l'auteur sont entre parenthèses.
// Les titres des chapitres sont de Leroux ; ceux des pages, comme tout ce qui vit dans les tags (gens, lieux, mots,
// résumés), sont de Claude.
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "P", title: "Avant-propos", question: "", levels: [1, 1], start: "P_1" },
  { id: "I", title: "I. Est-ce le fantôme ?", question: "", levels: [1, 1], start: "I_1" },
  { id: "II", title: "II. La Marguerite nouvelle", question: "", levels: [1, 1], start: "II_1" },
  { id: "III", title: "III. Où, pour la première fois, MM. Debienne et Poligny donnent, en secret, aux nouveaux directeurs de l'Opéra, MM. Armand Moncharmin et Firmin Richard, la véritable et mystérieuse raison de leur départ de l'Académie nationale de musique", question: "", levels: [1, 1], start: "III_1" },
  { id: "IV", title: "IV. La loge n° 5", question: "", levels: [1, 1], start: "IV_1" },
  { id: "V", title: "V. Suite de « La loge n° 5 »", question: "", levels: [1, 1], start: "V_1" },
  { id: "VI", title: "VI. Le violon enchanté", question: "", levels: [1, 1], start: "VI_1" },
  { id: "VII", title: "VII. Une visite à la loge n° 5", question: "", levels: [1, 1], start: "VII_1" },
  { id: "VIII", title: "VIII. Où MM. Firmin Richard et Armand Moncharmin ont l'audace de faire représenter « Faust » dans une salle « maudite », et de l'effroyable événement qui en résulta", question: "", levels: [1, 1], start: "VIII_1" },
  { id: "IX", title: "IX. Le mystérieux coupé", question: "", levels: [1, 1], start: "IX_1" },
  { id: "X", title: "X. Au bal masqué", question: "", levels: [1, 1], start: "X_1" },
  { id: "XI", title: "XI. Il faut oublier le nom de « la voix d'homme »", question: "", levels: [1, 1], start: "XI_1" },
  { id: "XII", title: "XII. Au-dessus des trappes", question: "", levels: [1, 1], start: "XII_1" },
  { id: "XIII", title: "XIII. La lyre d'Apollon", question: "", levels: [1, 1], start: "XIII_1" },
  { id: "XIV", title: "XIV. Un coup de maître de l'amateur de trappes", question: "", levels: [1, 1], start: "XIV_1" },
  { id: "XV", title: "XV. Singulière attitude d'une épingle de nourrice", question: "", levels: [1, 1], start: "XV_1" },
  { id: "XVI", title: "XVI. « Christine ! Christine ! »", question: "", levels: [1, 1], start: "XVI_1" },
  { id: "XVII", title: "XVII. Révélations étonnantes de Mme Giry, relatives à ses relations personnelles avec le fantôme de l'Opéra", question: "", levels: [1, 1], start: "XVII_1" },
  { id: "XVIII", title: "XVIII. Suite de la curieuse attitude d'une épingle de nourrice", question: "", levels: [1, 1], start: "XVIII_1" },
  { id: "XIX", title: "XIX. Le commissaire de police, le vicomte et le Persan", question: "", levels: [1, 1], start: "XIX_1" },
  { id: "XX", title: "XX. Le vicomte et le Persan", question: "", levels: [1, 1], start: "XX_1" },
  { id: "XXI", title: "XXI. Dans les dessous de l'Opéra", question: "", levels: [1, 1], start: "XXI_1" },
  { id: "XXII", title: "XXII. Intéressantes et instructives tribulations d'un Persan dans les dessous de l'Opéra", question: "", levels: [1, 1], start: "XXII_1" },
  { id: "XXIII", title: "XXIII. Dans la chambre des supplices", question: "", levels: [1, 1], start: "XXIII_1" },
  { id: "XXIV", title: "XXIV. Les supplices commencent", question: "", levels: [1, 1], start: "XXIV_1" },
  { id: "XXV", title: "XXV. « Tonneaux ! tonneaux ! avez-vous des tonneaux à vendre ? »", question: "", levels: [1, 1], start: "XXV_1" },
  { id: "XXVI", title: "XXVI. Faut-il tourner le scorpion ? Faut-il tourner la sauterelle ?", question: "", levels: [1, 1], start: "XXVI_1" },
  { id: "XXVII", title: "XXVII. La fin des amours du fantôme", question: "", levels: [1, 1], start: "XXVII_1" },
  { id: "E", title: "Épilogue", question: "", levels: [1, 1], start: "E_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
