// « Un billet de loterie », Jules Verne, 1886 : un livre à lire, sans choix (lecture: true). Texte de Verne, domaine public,
// d'après l'édition numérisée par le Projet Gutenberg (saisie d'Ebooks libres et gratuits). L'unique note de l'auteur
// reste entre parenthèses à sa place. Verne n'a pas titré ses chapitres : leurs titres, comme ceux des pages, sont de
// Claude, ainsi que tout ce qui vit dans les tags (gens, lieux, mots, résumés).
// Les gens du livre (syntaxe de « Qui est qui » : aka, qui, aspect, face). Cliquables à partir de leur entrée en scène.
module.exports = {
  hansen: { name: "Dame Hansen", aka: ["dame Hansen"], face: { age: "mur", hair: "gris", coif: "foulard", skin: "clair", iris: "bleu" }, qui: "La veuve de l'aubergiste Harald Hansen, qui tient l'auberge de Dal.", aspect: { allure: "froide, soucieuse, silencieuse" } },
  hulda: { name: "Hulda Hansen", aka: ["Hulda Hansen", "Hulda"], face: { age: "jeune", hair: "blond", coif: "long", skin: "clair", iris: "bleu" }, qui: "La fille de dame Hansen, fiancée à son cousin Ole Kamp.", aspect: { allure: "dix-huit ans, douce et sérieuse" } },
  joel: { name: "Joël Hansen", aka: ["Joël Hansen", "Joël"], face: { age: "jeune", hair: "chatain", coif: "court", beard: "sans", skin: "clair", iris: "bleu" }, qui: "Le fils de dame Hansen, guide de montagne dans le Telemark.", aspect: { allure: "vingt-cinq ans, grand, l'allure hardie", visage: "blond presque châtain, yeux bleu sombre" } },
  ole: { name: "Ole Kamp", aka: ["Ole Kamp", "Ole"], face: { age: "jeune", hair: "blond", coif: "court", beard: "sans", skin: "clair", iris: "bleu" }, qui: "Le cousin de Joël et de Hulda, jeune marin de Bergen, fiancé à Hulda." },
  sandgoist: { name: "Sandgoïst", aka: ["Sandgoïst"], face: { age: "ancien", hair: "gris", coif: "court", beard: "sans", skin: "clair" }, qui: "Un homme de Drammen, que dame Hansen connaît.", aspect: { allure: "maigre, un peu courbé", visage: "nez pointu, petits yeux, grosses lunettes" } },
  hog: { name: "Sylvius Hog", aka: ["Sylvius Hog", "professeur Hog", "monsieur Sylvius", "Sylvius"], face: { age: "mur", hair: "blanc", coif: "court", beard: "sans", skin: "clair", iris: "bleu" }, qui: "Un professeur de droit de Christiania, député au Storthing.", aspect: { allure: "soixante ans, grand, droit, vigoureux", visage: "belle figure aimable et souriante" } },
  siegfrid: { name: "Siegfrid Helmboë", aka: ["Siegfrid"], face: { age: "jeune", hair: "blond", coif: "long", skin: "clair", iris: "bleu" }, qui: "L'amie de Hulda, fille du fermier Helmboë de Bamble.", aspect: { allure: "jolie blonde de dix-huit ans" } },
  helmboe: { name: "Le fermier Helmboë", aka: ["fermier Helmboë", "Helmboë"], face: { age: "mur", hair: "blond", coif: "court", beard: "barbe", skin: "clair" }, qui: "Un riche fermier de Bamble, père de Siegfrid." },
  andresen: { name: "Le pasteur Andresen", aka: ["pasteur Andresen"], face: { age: "mur", hair: "gris", coif: "court", beard: "sans", skin: "clair" }, qui: "Le pasteur de Moel, obligeant et bon marcheur." },
  help: { name: "Help junior", aka: ["Help junior"], face: { age: "adulte", hair: "chatain", coif: "court", beard: "barbe", skin: "clair" }, qui: "L'un des frères Help, armateurs à Bergen, ami de Sylvius Hog." },
  benett: { name: "M. Benett", aka: ["M. Benett", "monsieur Benett"], face: { age: "adulte", hair: "brun", coif: "court", beard: "moustache", skin: "clair" }, qui: "Le propriétaire du grand bazar de Christiania, connu de toute la Norvège." },
};
