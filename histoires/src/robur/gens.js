// « Robur-le-Conquérant », Jules Verne, 1886 : un livre à lire, sans choix (lecture: true).
// Texte : l'édition Hetzel de 1886, dans le domaine public (Project Gutenberg n° 5126). La saisie, faite à partir
// d'une reconnaissance de caractères, a été relue et corrigée (fiches/robur_texte.py). Les titres des pages et tout
// ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude.
// Les gens du livre (syntaxe de « Qui est qui » : aka, qui, aspect, face). Cliquables à partir de leur entrée en scène.
module.exports = {
  robur: { name: "Robur", aka: ["Robur", "Robur-le-Conquérant"], face: { age: "adulte", hair: "noir", coif: "court", beard: "barbe", iris: "noir", skin: "hale" }, qui: "Un inconnu qui demande la parole au Weldon-Institute.", aspect: { allure: "taille moyenne, carrure géométrique", visage: "énorme tête ronde, barbiche de marin", signe: "des yeux qui s'allument à la moindre contrariété" } },
  prudent: { name: "Uncle Prudent", aka: ["Uncle Prudent"], face: { age: "mur", hair: "gris", coif: "court", beard: "moustache", iris: "gris", skin: "clair" }, qui: "Le président du Weldon-Institute, très riche et cité pour son audace.", aspect: { allure: "un homme qui ne cède jamais", signe: "la colère à chaud" } },
  evans: { name: "Phil Evans", aka: ["Phil Evans"], face: { age: "mur", hair: "chatain", coif: "court", beard: "sans", iris: "bleu", skin: "clair" }, qui: "Le secrétaire du Weldon-Institute, qui dirige une usine à montres.", aspect: { allure: "aussi violent que son président", signe: "la colère à froid" } },
  frycollin: { name: "Frycollin", aka: ["Frycollin"], face: { age: "jeune", hair: "noir", coif: "rase", beard: "sans", iris: "noir", skin: "brun" }, qui: "Le valet d'Uncle Prudent, à son service depuis trois ans.", aspect: { allure: "un corps de gringalet", signe: "la peur de tout, surtout des hauteurs" } },
  turner: { name: "Tom Turner", aka: ["Tom Turner"], face: { age: "mur", hair: "brun", coif: "court", beard: "barbe", iris: "gris", skin: "hale" }, qui: "Le contremaître de Robur, d'origine anglaise.", aspect: { allure: "large de buste, charpenté en fer", visage: "une tête énorme, peu encourageante" } },
  tapage: { name: "François Tapage", aka: ["François Tapage", "Tapage"], face: { age: "adulte", hair: "roux", coif: "court", beard: "moustache", iris: "vert", skin: "hale" }, qui: "Le maître coq de l'Albatros, un Gascon.", aspect: { allure: "toujours à rire de la peur des autres", signe: "il scande ses phrases syllabe par syllabe" } },
  forbes: { name: "William T. Forbes", aka: ["William T. Forbes", "Forbes"], face: { age: "mur", hair: "blanc", beard: "barbe", skin: "clair" }, qui: "Un industriel de Philadelphie, membre du Weldon-Institute.", aspect: { allure: "toujours au bras de ses deux filles" } },
};
