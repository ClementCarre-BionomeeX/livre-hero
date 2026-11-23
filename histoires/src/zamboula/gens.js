// « Ombres sur Zamboula » (Shadows in Zamboula), Robert E. Howard, 1935 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais paru dans Weird Tales
// en novembre 1935 (Project Gutenberg n° 42196, domaine public). Les titres des chapitres sont ceux de Howard ; ceux des
// pages et tout ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude.
// Les gens du livre (syntaxe de « Qui est qui » : aka, qui, aspect, face). Cliquables à partir de leur entrée en scène.
module.exports = {
  conan: { name: "Conan le Cimmérien", aka: ["Conan", "Cimmérien"], face: { age: "jeune", hair: "noir", coif: "milong", beard: "sans", iris: "bleu", skin: "hale", marks: ["cicatrice"] }, qui: "Un barbare du Nord, arrivé du désert, sans le sou.", aspect: { allure: "un géant, large de poitrine", visage: "sourcils noirs, yeux bleus", signe: "une épée droite à la hanche" } },
  aram: { name: "Aram Baksh", aka: ["Aram Baksh", "Aram"], face: { age: "adulte", hair: "noir", beard: "longue", iris: "noir" }, qui: "Un aubergiste de Zamboula, au bord du désert.", aspect: { allure: "corpulent, pas feutré", visage: "nez crochu, petits yeux noirs mobiles", signe: "une barbe noire jusqu'à la poitrine" } },
  jungir: { name: "Jungir Khan", aka: ["Jungir Khan"], face: { age: "jeune" }, qui: "Le satrape touranien qui gouverne Zamboula.", aspect: { allure: "le maître de la ville" } },
  nafertari: { name: "Nafertari", aka: ["Nafertari"], f: true, qui: "La maîtresse du satrape, qui le gouverne, dit-on.", aspect: { allure: "celle qui gouverne le gouverneur" } },
  zabibi: { name: "Zabibi", aka: ["Zabibi"], f: true, face: { age: "jeune", hair: "noir", coif: "long", skin: "clair" }, qui: "Une danseuse de Zamboula.", aspect: { allure: "grande, mince et souple", visage: "cheveux épais, très bruns et lustrés" } },
  alafdhal: { name: "Alafdhal", aka: ["Alafdhal"], face: { age: "jeune" }, qui: "L'amant de Zabibi, un jeune officier touranien.", aspect: { allure: "grand, jeune soldat" } },
  totrasmek: { name: "Totrasmek", aka: ["Totrasmek"], face: { age: "adulte", skin: "clair" }, qui: "Le grand prêtre d'Hanuman, que toute la ville craint.", aspect: { allure: "large et gras", visage: "des yeux de serpent", signe: "de grosses mains blanches" } },
  baal: { name: "Baal-ptéor", aka: ["Baal-ptéor"], face: { age: "adulte", hair: "noir", coif: "court", beard: "sans", iris: "noir", skin: "brun" }, qui: "Le serviteur de Totrasmek, venu du pays de Kosala.", aspect: { allure: "énorme, des bras trop longs", visage: "large et arrogant", signe: "les plus grandes mains du monde" } },
};
