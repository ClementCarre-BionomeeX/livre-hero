// « L'Homme invisible » (The Invisible Man), H. G. Wells, 1897 : un livre à lire, sans choix (lecture: true).
// Texte : la traduction d'Achille Laurent (La Revue de Paris, 1900-1901, puis Mercure de France), transcrite par
// Wikisource (domaine public ; transcription reprise d'un export Wikisource de février 2025). Texte gardé tel quel, sauf la
// typographie ; la note du traducteur sur les fenêtres anglaises est mise entre parenthèses dans sa page.
// Tout ce qui n'est pas de Wells ou de son traducteur vit dans les tags : gens, lieux, mots, résumés des chapitres.
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "I", title: "Chapitre I · Un étrange voyageur", question: "", levels: [1, 1], start: "I_1" },
  { id: "II", title: "Chapitre II · Les premières impressions de Teddy Henfrey", question: "", levels: [1, 1], start: "II_1" },
  { id: "III", title: "Chapitre III · Les mille et une bouteilles", question: "", levels: [1, 1], start: "III_1" },
  { id: "IV", title: "Chapitre IV · Une interview", question: "", levels: [1, 1], start: "IV_1" },
  { id: "V", title: "Chapitre V · Un voleur au presbytère", question: "", levels: [1, 1], start: "V_1" },
  { id: "VI", title: "Chapitre VI · Le mobilier qui danse", question: "", levels: [1, 1], start: "VI_1" },
  { id: "VII", title: "Chapitre VII · L'étranger démasqué", question: "", levels: [1, 1], start: "VII_1" },
  { id: "VIII", title: "Chapitre VIII · Sur le passage de l'homme invisible", question: "", levels: [1, 1], start: "VIII_1" },
  { id: "IX", title: "Chapitre IX · M. Thomas Marvel", question: "", levels: [1, 1], start: "IX_1" },
  { id: "X", title: "Chapitre X · Visite de M. Thomas Marvel à Iping", question: "", levels: [1, 1], start: "X_1" },
  { id: "XI", title: "Chapitre XI · Dans l'auberge", question: "", levels: [1, 1], start: "XI_1" },
  { id: "XII", title: "Chapitre XII · L'homme invisible se fâche", question: "", levels: [1, 1], start: "XII_1" },
  { id: "XIII", title: "Chapitre XIII · M. Marvel discute sa soumission", question: "", levels: [1, 1], start: "XIII_1" },
  { id: "XIV", title: "Chapitre XIV · À Port-Stowe", question: "", levels: [1, 1], start: "XIV_1" },
  { id: "XV", title: "Chapitre XV · L'homme qui courait", question: "", levels: [1, 1], start: "XV_1" },
  { id: "XVI", title: "Chapitre XVI · « Aux joyeux joueurs de cricket »", question: "", levels: [1, 1], start: "XVI_1" },
  { id: "XVII", title: "Chapitre XVII · L'hôte du docteur Kemp", question: "", levels: [1, 1], start: "XVII_1" },
  { id: "XVIII", title: "Chapitre XVIII · L'homme invisible dort", question: "", levels: [1, 1], start: "XVIII_1" },
  { id: "XIX", title: "Chapitre XIX · Premiers principes", question: "", levels: [1, 1], start: "XIX_1" },
  { id: "XX", title: "Chapitre XX · Le logement de Great Portland Street", question: "", levels: [1, 1], start: "XX_1" },
  { id: "XXI", title: "Chapitre XXI · Oxford Street", question: "", levels: [1, 1], start: "XXI_1" },
  { id: "XXII", title: "Chapitre XXII · Dans un grand magasin", question: "", levels: [1, 1], start: "XXII_1" },
  { id: "XXIII", title: "Chapitre XXIII · La boutique de Drury Lane", question: "", levels: [1, 1], start: "XXIII_1" },
  { id: "XXIV", title: "Chapitre XXIV · Le projet avorté", question: "", levels: [1, 1], start: "XXIV_1" },
  { id: "XXV", title: "Chapitre XXV · La chasse à l'homme invisible", question: "", levels: [1, 1], start: "XXV_1" },
  { id: "XXVI", title: "Chapitre XXVI · Le meurtre de M. Wicksteed", question: "", levels: [1, 1], start: "XXVI_1" },
  { id: "XXVII", title: "Chapitre XXVII · Le siège de la maison de Kemp", question: "", levels: [1, 1], start: "XXVII_1" },
  { id: "XXVIII", title: "Chapitre XXVIII · Le chasseur chassé", question: "", levels: [1, 1], start: "XXVIII_1" },
  { id: "EP", title: "Épilogue", question: "", levels: [1, 1], start: "EP_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
