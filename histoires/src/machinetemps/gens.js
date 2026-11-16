// « La Machine à explorer le temps » (The Time Machine), H. G. Wells, 1895 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais de 1895 (Project Gutenberg
// n° 35, domaine public). La traduction d'Henry-D. Davray (1899) reste introuvable en ligne sous une forme réutilisable.
// Les titres des chapitres sont ajoutés (le texte anglais n'en a pas). La note de l'éditeur du chapitre VIII est gardée.
// Tout ce qui n'est pas de Wells vit dans les tags : gens, lieux, mots, résumés des chapitres.
// Les gens du livre (syntaxe de « Qui est qui » : aka, qui, aspect, face). Cliquables à partir de leur entrée en scène.
module.exports = {
  voyageur: { name: "Le Voyageur du Temps", aka: ["Voyageur du Temps"], face: { age: "adulte", hair: "chatain", coif: "court" }, qui: "Un savant inventif, qui reçoit ses amis à dîner le jeudi, à Richmond. Ses amis l'appellent ainsi par commodité.", aspect: { allure: "vif et nerveux", visage: "pâle, les yeux gris et brillants", signe: "sa pipe", voix: "joyeuse, persuasive" } },
  medecin: { name: "Le Médecin", aka: ["Médecin", "Docteur"], face: { age: "mur", hair: "gris", coif: "court" }, qui: "Un médecin, invité habituel des dîners du jeudi. Il doute de tout ce qu'il ne peut toucher.", aspect: { allure: "posé", signe: "examine tout de près" } },
  psychologue: { name: "Le Psychologue", aka: ["Psychologue"], face: { age: "adulte", hair: "brun", coif: "court" }, qui: "Un savant de l'esprit, invité des dîners du jeudi. Il a toujours une explication.", aspect: { allure: "raisonneur" } },
  maire: { name: "Le Maire de province", aka: ["Maire de province"], face: { age: "mur", hair: "gris", coif: "degarni" }, qui: "Le maire d'une petite ville de province, invité au premier dîner.", aspect: { allure: "solennel", signe: "fronce les sourcils" } },
  filby: { name: "Filby", aka: ["Filby"], face: { age: "adulte", hair: "roux", coif: "court" }, qui: "Un invité bavard, qui aime discuter.", aspect: { allure: "batailleur", visage: "cheveux roux" } },
  tresjeune: { name: "Le Très Jeune Homme", aka: ["Très Jeune Homme"], face: { age: "jeune", hair: "blond", coif: "court" }, qui: "Le plus jeune des invités du premier dîner.", aspect: { allure: "enthousiaste" } },
  redacteur: { name: "Le Rédacteur", aka: ["Rédacteur"], face: { age: "mur", hair: "brun", beard: "moustache" }, qui: "Le rédacteur en chef d'un quotidien bien connu, invité au second dîner.", aspect: { allure: "moqueur", signe: "son cigare" } },
  journaliste: { name: "Le Journaliste", aka: ["Journaliste"], face: { age: "adulte", hair: "noir", coif: "court" }, qui: "Un journaliste, invité au second dîner.", aspect: { allure: "pressé", signe: "cherche sa montre" } },
  silencieux: { name: "L'Homme silencieux", aka: ["Homme silencieux"], face: { age: "adulte", hair: "brun", beard: "barbe" }, qui: "Un invité barbu, tranquille et timide, que le narrateur ne connaît pas.", aspect: { allure: "timide", visage: "barbu" } },
  watchett: { name: "Mme Watchett", aka: ["Watchett"], f: true, face: { age: "mur", hair: "gris", coif: "chignon" }, qui: "La gouvernante du Voyageur du Temps.", aspect: { allure: "gouvernante" } },
  weena: { name: "Weena", aka: ["Weena"], f: true, face: { age: "jeune", hair: "blond", coif: "long" }, qui: "Une petite femme du peuple de l'avenir, que le Voyageur a tirée de la rivière. Elle ne le quitte plus.", aspect: { allure: "toute petite et gracieuse", habits: "une robe légère", signe: "des fleurs plein les mains", voix: "un babil chantant" } },
};
