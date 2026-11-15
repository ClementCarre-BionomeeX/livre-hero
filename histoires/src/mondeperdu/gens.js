// The people of the book. Syntax of the thread « Aider à reconnaître les personnages » (15/11):
// aka: the forms the text uses for them; qui: what the narrator knows of them (the bubble); aspect: five short keys
// (allure, visage, habits, signe, voix) that the reader may set beside the name. They become clickable from the page
// where they enter (fx.meet), never before. Their description follows Doyle's own words where he gives one.
module.exports = {
  malone: { name: "Edward Dunn Malone", aka: ["Ned", "Malone"],
    face: { age: "jeune", hair: "chatain", coif: "court", skin: "clair" },
    qui: "Le narrateur : c'est lui qui écrit ce livre, au « je ». Vingt-trois ans, reporter à la Daily Gazette.",
    aspect: { allure: "grand Irlandais athlétique", visage: "jeune, rasé de près", habits: "costume sombre, chapeau melon", signe: "carnet de reporter" } },
  gladys: { name: "Gladys Hungerton", aka: ["Gladys"], f: true,
    face: { age: "jeune", hair: "noir", skin: "dore", iris: "brun", lips: "pleines", coif: "chignon" },
    qui: "La jeune fille qu'aime Ned. Elle n'épousera qu'un homme qui a accompli de grandes choses.",
    aspect: { allure: "fière, profil délicat", visage: "teint mat, grands yeux sombres", habits: "robe du soir", signe: "cheveux noirs de corbeau" } },
  hungerton: { name: "M. Hungerton", aka: ["Hungerton"],
    face: { age: "mur", hair: "gris", coif: "degarni" },
    qui: "Le père de Gladys. Il croit que Ned vient pour lui et l'ennuie avec ses théories sur la monnaie.",
    aspect: { allure: "ébouriffé, en désordre", visage: "air de cacatoès", voix: "gazouillis monotone" } },
  mcardle: { name: "McArdle", aka: ["McArdle"],
    face: { age: "ancien", hair: "roux", coif: "degarni", marks: ["lunettes"] },
    qui: "Le chef des informations de la Daily Gazette, le supérieur direct de Ned. Écossais, bourru mais bienveillant.",
    aspect: { allure: "vieil homme voûté", visage: "front chauve, frange rousse", signe: "lunettes remontées sur le front", voix: "fort accent écossais" } },
  tarp_henry: { name: "Tarp Henry", aka: ["Tarp Henry"],
    face: { age: "mur", shape: "allonge" },
    qui: "Un ami de Ned, bactériologiste, journaliste à la revue Nature. Sec en apparence, chaleureux au fond.",
    aspect: { allure: "grand, maigre, anguleux", visage: "sec, tanné comme du cuir", signe: "vit « dans un microscope »" } },
};
