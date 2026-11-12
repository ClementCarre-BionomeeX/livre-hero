// Act IV · two more corners of Pont-de-Saule a year later (the child leads, "tu" masculine), off IV_ps: Agathe's elder
// sister Mariette, who paid the taille with her memory of a sister (unless the phials were given back,
// iv:pontsaule=libere), iv:mariette; and a hawker of broadside ballads who sells "La Complainte de la Neige blanche"
// and gets it wrong (iv:complainte=vraie|achetee).
var A = { act: "IV", noLead: true, place: "pontsaule" };
function P(o) { return Object.assign({}, A, o); }
var BACK = [{ back: "IV_ps" }];
var LIBERE = { has: "iv:pontsaule=libere" };
module.exports = {
  IV_ps_mariette: P({ title: "La maison du passeur",
    text: [
      "Près du gué, en aval du pont, la maison du passeur : une maison basse, un ponton, une barque à fond plat tirée sur la berge. C'est là qu'Agathe est née. Elle te l'a montrée une fois, quand tu avais six ans, du haut du pont, sans y entrer. *Ma sœur habite là. On ne se parle plus. C'est une longue histoire, et elle est bête.*",
      "Une femme sort sur le ponton avec une bassine. Grande, sèche, les cheveux gris tirés en arrière. Elle a les mains d'Agathe. Exactement. Les mêmes doigts courts, les mêmes jointures rouges. Mariette. Elle te regarde. « Tu veux passer ? Le pont est à cent pas. »",
      { if: { not: LIBERE }, text: "Tu lui parles d'Agathe. Elle fronce les sourcils, polie. « Agathe ? Je ne connais pas d'Agathe. » Elle hésite, la bassine contre la hanche. « J'ai payé la taille, au printemps. Deux écus, deux souvenirs. Je ne sais plus lesquels. On ne sait jamais, après. »" },
      { if: LIBERE, text: "Tu lui parles d'Agathe. Elle pose sa bassine. « Agathe, dit-elle. Ma petite sœur. On m'avait pris ça, au printemps, pour la taille. C'est revenu le jour où ils ont ouvert les fioles. Tout d'un coup, au milieu de la lessive, j'avais une sœur. » Elle s'essuie les mains. « On ne se parlait plus. Je ne sais plus pourquoi. Je crois que c'était bête. »" },
    ],
    choices: [
      { label: "Lui raconter Agathe : le four, le moulin, ses mains, sa voix", test: { dom: "social", label: "Mariette", help: [{ if: LIBERE, v: 20 }, { if: { has: "nord:rendu=sauvelune" }, v: 10 }] },
        win: { fx: { flag: "iv:mariette", ep: ["perso", 1000] }, to: "IV_ps_mariette_oui" }, lose: { to: "IV_ps_mariette_non" } },
      { label: "Lui dire que tu t'es trompé de maison", to: "IV_ps_mariette_partir" },
    ] }),
  IV_ps_mariette_oui: P({ title: "Les mains d'Agathe",
    text: [
      "Tu racontes. Le pain au miel et à l'anis. La mèche qu'elle te pousse derrière l'oreille sans te regarder, depuis que tu as trois ans. Sa façon de dire *jusqu'à la fin de mes jours, qui ne sont plus très nombreux*. Mariette écoute, assise sur le ponton, les pieds au-dessus de l'eau. À un moment, elle rit. C'est le rire d'Agathe, une octave plus bas.",
      "« L'anis, dit-elle. C'est notre mère qui le mettait. Elle a gardé ça. » Elle se lève. Elle rentre dans la maison, et elle ressort avec un pot de grès fermé d'un tissu. « Du miel de la Sauve. Tu lui donneras. Tu ne lui diras pas que c'est de moi. Elle le saura au goût. » Elle te regarde. « Et dis-lui que la barque est toujours là. Si elle veut passer. »",
    ],
    choices: BACK }),
  IV_ps_mariette_non: P({ title: "La bassine",
    text: ["Tu racontes, mais tu racontes mal. Le moulin, le four, la farine. Elle écoute poliment, comme on écoute un voyageur parler d'un pays où l'on n'ira jamais. À la fin, elle reprend sa bassine. « Elle a l'air d'une brave femme, ta mère, dit-elle. Tu as de la chance. » Elle retourne à sa lessive. Elle frotte un drap contre la planche, longtemps, au même endroit, comme si elle cherchait quelque chose dedans."],
    choices: BACK }),
  IV_ps_mariette_partir: P({ title: "Le gué",
    text: ["« Je me suis trompé de maison », dis-tu. Elle hausse les épaules et retourne à sa bassine. Tu remontes vers le pont. En haut, tu te retournes. Elle s'est arrêtée de laver. Elle regarde vers l'amont, vers Sauvelune, la main en visière, sans savoir pourquoi. Puis elle baisse la main, et elle reprend son drap."],
    choices: BACK }),
  IV_ps_complainte: P({ title: "Le marchand de complaintes",
    text: [
      "Sous la halle, monté sur une caisse, un homme maigre en chapeau mou chante à pleine voix en agitant une liasse de feuilles imprimées. Un marchand de complaintes. Un sou la feuille, avec l'image. Il chante *La Complainte de la Neige blanche, ou le Malheur de Sauvelune*, sur l'air de *La Belle au rouet*.",
      "Tu écoutes. La neige tombe sur Sauvelune en décembre, pas en juillet. Elle tombe parce que le meunier a trompé sa femme, et que Dieu est en colère. Le village entier meurt de froid dans la nuit, sauf un petit berger, qui survit en se cachant dans le four à pain, et qui devient fou. Sur l'image, gravée sur bois, un four, et un enfant qui en sort, les cheveux dressés.",
    ],
    choices: [
      { label: "Monter sur la caisse à côté de lui, et raconter ce qui s'est vraiment passé", test: { dom: "social", label: "La vraie complainte", help: [{ if: { present: "lisandre" }, v: 20 }, { if: { has: "iv:violons=appris" }, v: 10 }] },
        win: { fx: { flag: ["iv:complainte", "iv:complainte=vraie"], ep: ["perso", 1000] }, to: "IV_ps_complainte_vraie" }, lose: { to: "IV_ps_complainte_rire" } },
      { label: "Acheter une feuille, pour la garder", fx: { flag: ["iv:complainte", "iv:complainte=achetee"], gold: -1 }, to: "IV_ps_complainte_feuille" },
    ] }),
  IV_ps_complainte_vraie: P({ title: "Le petit du moulin",
    text: [
      "Tu montes sur la caisse. Le marchand te regarde de travers, puis te laisse faire, par curiosité. Tu racontes. Juillet, la fête des foins, la ronde, la neige qui tombe dans la chaleur et qui ne fond pas. Les noms qui partent des linteaux. Les gens qui se demandent poliment qui ils sont. Personne n'est mort de froid. C'est pire. Tu le dis.",
      "La halle s'est tue. Le marchand a cessé d'agiter ses feuilles. Quand tu descends, il te prend par la manche. « Le petit du moulin, dit-il. C'était toi ? » Tu ne réponds pas. Il regarde sa liasse. Il en déchire une, en deux, lentement. « Je la referai, dit-il. Il me faut un autre air. Celui-là est trop gai. »",
    ],
    choices: BACK }),
  IV_ps_complainte_rire: P({ title: "La caisse",
    text: ["Tu montes sur la caisse et tu commences. Mais la halle veut la complainte, pas la vérité : la vérité n'a pas de rime, et le meunier qui trompe sa femme, c'est meilleur. On rit. On te fait descendre. Le marchand reprend au troisième couplet, là où le petit berger se cache dans le four. On applaudit. Tu t'en vas. Derrière toi, la halle chante en chœur un malheur qui n'est pas arrivé, sur un air de rouet."],
    choices: BACK }),
  IV_ps_complainte_feuille: P({ title: "Un sou",
    text: ["Tu donnes un sou. Il te tend une feuille, encore humide d'encre, l'image en haut. Tu la plies en quatre. Tu la gardes. Tout y est faux, sauf une chose : le nom du village, en grosses lettres, *SAUVELUNE*, et en dessous, *qui fut*. C'est imprimé. Ça a été tiré à trois cents exemplaires. Quelque part, dans trois cents maisons, il y a une feuille avec ce nom-là dessus. Ce n'est pas rien."],
    choices: BACK }),
};
