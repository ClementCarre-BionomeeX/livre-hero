// « Le Docteur Ox », Jules Verne, 1874 : un livre à lire, sans choix (lecture: true). Recueil de quatre récits de
// Jules Verne et d'un récit de son frère Paul, domaine public, d'après l'édition numérisée par le Projet Gutenberg
// (Hetzel). Les titres des chapitres de « Maître Zacharius » et d'« Un hivernage dans les glaces » sont ceux de Verne ;
// ceux du « Docteur Ox », très longs chez Verne, sont de Claude et cités dans les résumés, comme les titres des pages
// et tout ce qui vit dans les tags (gens, lieux, mots, résumés).
// Les gens du livre (syntaxe de « Qui est qui » : aka, qui, aspect, face). Cliquables à partir de leur entrée en scène.
module.exports = {
  tricasse: { name: "Le bourgmestre van Tricasse", aka: ["van Tricasse", "Van Tricasse"], face: { age: "mur", hair: "gris", coif: "court", beard: "sans", skin: "clair" }, qui: "Le bourgmestre de Quiquendone, un homme modéré en tout, qui ne décide jamais rien.", aspect: { allure: "cinquante ans, ni gras ni maigre" } },
  niklausse: { name: "Le conseiller Niklausse", aka: ["conseiller Niklausse", "Niklausse"], face: { age: "mur", hair: "gris", coif: "degarni", beard: "sans", skin: "clair" }, qui: "Le conseiller de Quiquendone, vieil ami du bourgmestre, aussi calme que lui." },
  passauf: { name: "Le commissaire Passauf", aka: ["Passauf"], face: { age: "mur", hair: "brun", coif: "court", beard: "moustache", skin: "clair" }, qui: "Le commissaire civil de Quiquendone, dont on parle depuis dix ans de supprimer la charge." },
  ox: { name: "Le docteur Ox", aka: ["docteur Ox"], face: { age: "mur", hair: "brun", coif: "boucles", beard: "barbe", skin: "clair" }, qui: "Un savant étranger, physiologiste et chimiste, qui offre à Quiquendone un éclairage au gaz.", aspect: { allure: "demi-gros, taille moyenne, sang chaud" } },
  ygene: { name: "Gédéon Ygène", aka: ["Ygène"], face: { age: "adulte", hair: "brun", coif: "court", beard: "sans", skin: "clair" }, qui: "Le préparateur du docteur Ox, qui lui obéit aveuglément.", aspect: { allure: "grand, sec, maigre, tout en hauteur" } },
  suzel: { name: "Suzel van Tricasse", aka: ["Suzel"], face: { age: "jeune", hair: "blond", coif: "tresses", skin: "clair" }, qui: "La fille du bourgmestre, dix-sept ans, blonde et rose." },
  frantz: { name: "Frantz Niklausse", aka: ["Frantz"], face: { age: "jeune", hair: "blond", coif: "court", beard: "sans", skin: "clair" }, qui: "Le fils du conseiller Niklausse, vingt-deux ans, fiancé à Suzel van Tricasse." },
  tatanemance: { name: "Tatanémance", aka: ["Tatanémance"], face: { age: "mur", hair: "gris", coif: "chignon", skin: "clair" }, qui: "La tante Hermance, sœur du bourgmestre, vieille fille ; sa nièce Suzel l'appelait ainsi petite." },
  lotche: { name: "Lotchè Janshéu", aka: ["Lotchè"], face: { age: "adulte", hair: "blond", coif: "chignon", skin: "clair" }, qui: "La servante du bourgmestre, une brave fille qui ne perd pas la tête." },
  zacharius: { name: "Maître Zacharius", aka: ["maître Zacharius", "Maître Zacharius", "Zacharius"], face: { age: "ancien", hair: "blanc", coif: "long", beard: "sans", skin: "clair" }, qui: "Un vieil horloger de Genève, savant et orgueilleux, l'inventeur de l'échappement.", aspect: { allure: "âge indéchiffrable", visage: "tête maigre et pointue, longue chevelure blanche" } },
  gerande: { name: "Gérande", aka: ["Gérande"], face: { age: "jeune", hair: "chatain", coif: "long", skin: "clair" }, qui: "La fille de maître Zacharius, pieuse et douce." },
  aubert: { name: "Aubert Thün", aka: ["Aubert"], face: { age: "jeune", hair: "brun", coif: "court", beard: "sans", skin: "clair" }, qui: "L'apprenti de maître Zacharius, dévoué à lui et à Gérande." },
  scholastique: { name: "Scholastique", aka: ["Scholastique"], face: { age: "ancien", hair: "gris", coif: "chignon", skin: "clair" }, qui: "La vieille servante de maître Zacharius, bavarde et dévote." },
  vieillard: { name: "Le petit vieillard", aka: ["petit vieillard"], face: { age: "ancien", hair: "blanc", coif: "degarni", beard: "barbe", skin: "clair" }, qui: "Un petit vieillard étrange, que personne à Genève ne connaît." },
  aeronaute: { name: "L'aéronaute", aka: [], face: { age: "adulte", hair: "brun", coif: "court", beard: "moustache", skin: "clair" }, qui: "Le narrateur d'« Un drame dans les airs », qui fait des ascensions en ballon dans les villes d'Allemagne." },
  jean: { name: "Jean Cornbutte", aka: ["Jean Cornbutte"], face: { age: "ancien", hair: "blanc", coif: "court", beard: "barbe", skin: "hale" }, qui: "Un vieux capitaine de Dunkerque, qui a fait construire le brick la Jeune-Hardie." },
  louis: { name: "Louis Cornbutte", aka: ["Louis Cornbutte"], face: { age: "jeune", hair: "brun", coif: "court", beard: "sans", skin: "hale" }, qui: "Le fils de Jean Cornbutte, capitaine de la Jeune-Hardie, fiancé à sa cousine Marie." },
  marie: { name: "Marie", aka: ["Marie"], face: { age: "jeune", hair: "blond", coif: "long", skin: "clair" }, qui: "La nièce de Jean Cornbutte, vingt ans à peine, fiancée de Louis.", aspect: { allure: "belle Flamande, sang hollandais" } },
  penellan: { name: "Penellan", aka: ["Penellan"], face: { age: "mur", hair: "gris", coif: "court", beard: "barbe", skin: "hale" }, qui: "Un marin breton de la Jeune-Hardie, qui a déjà pêché la baleine dans les mers arctiques." },
  vasling: { name: "André Vasling", aka: ["André Vasling", "Vasling"], face: { age: "adulte", hair: "blond", coif: "court", beard: "barbe", skin: "clair" }, qui: "Le second de la Jeune-Hardie, Hollandais d'origine, bon marin." },
  misonne: { name: "Fidèle Misonne", aka: ["Misonne"], face: { age: "mur", hair: "brun", coif: "court", beard: "barbe", skin: "hale" }, qui: "Le charpentier de la Jeune-Hardie." },
  turquiette: { name: "Alain Turquiette", aka: ["Turquiette"], face: { age: "adulte", hair: "brun", coif: "court", beard: "moustache", skin: "hale" }, qui: "Un matelot de la Jeune-Hardie." },
  clerbaut: { name: "Le compère Clerbaut", aka: ["Clerbaut"], face: { age: "ancien", hair: "gris", coif: "degarni", beard: "barbe", skin: "clair" }, qui: "Un vieil ami de Jean Cornbutte, à Dunkerque." },
  paul: { name: "Paul Verne", aka: [], face: { age: "mur", hair: "brun", coif: "court", beard: "barbe", skin: "clair" }, qui: "Le frère de Jules Verne, qui raconte son ascension du mont Blanc." },
  levesque: { name: "Donatien Levesque", aka: ["Donatien Levesque", "Levesque"], face: { age: "adulte", hair: "brun", coif: "court", beard: "moustache", skin: "clair" }, qui: "Un ami et compatriote de Paul Verne, touriste enragé et marcheur intrépide." },
};
