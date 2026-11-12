// Act III · in Bourdonne, the town of forgotten bells, the founder who casts bells for places that were never named
// (the child leads, "tu"). Plus, in Act IV, the moutier's herb garden a year later, where the grey flowers of the
// veille-neige grow everywhere now (the child leads, "tu").
var A = { act: "III", noLead: true };
function P(o) { return Object.assign({}, A, o); }
var Q = { act: "IV", noLead: true };
function P4(o) { return Object.assign({}, Q, o); }
module.exports = {
  III_b_fondeur: P({ title: "Le fondeur", place: "cloches",
    text: [
      "Au bout d'une ruelle, une fosse fume. Un homme torse nu, couvert de suie, coule du bronze dans un moule enterré, et le bronze fait en coulant un bruit de soupir. Autour de lui, posées dans l'herbe grise, des cloches neuves. Sans inscription. Sans nom.",
      "« Les cloches des endroits qu'on n'a jamais nommés, dit-il, en s'essuyant le front. Une clairière où deux enfants se sont donné un premier baiser. Un gué où un vieux s'est arrêté pour mourir. Le coin de champ où une femme pleurait, tous les soirs, là où personne ne la voyait. Ça n'a pas de nom, là-haut. Alors ça n'a pas de cloche. Alors j'en fais. »",
    ],
    choices: [
      { label: "« Fais-en une pour moi. »", to: "III_b_fondeur_moi" },
      { label: "L'aider à sortir la cloche du moule", fx: { ep: ["perso", 500] }, to: "III_b_fondeur_aide" },
    ] }),
  III_b_fondeur_moi: P({ title: "Ta cloche", place: "cloches",
    text: [
      "Il te regarde. « Quel endroit ? » Tu réfléchis. Pas Sauvelune, qui a sa cloche. Pas le moulin. Tu dis : la grosse pierre plate au-dessus du bief, où tu allais t'asseoir quand Joris criait, et d'où l'on voyait toute la vallée, et où personne ne venait jamais te chercher, parce que personne ne savait.",
      "Il hoche la tête. Il en prend une, dans l'herbe, une toute petite, grosse comme un poing. Il la frappe avec l'ongle. Elle sonne. Un son clair, un peu aigu, un son de pierre au soleil.",
      "« Celle-là, dit-il. Elle t'attendait. »",
    ],
    choices: [{ fx: { flag: "iii:clochette", ep: ["perso", 700] }, back: "III_c_ville" }] }),
  III_b_fondeur_aide: P({ title: "Le moule", place: "cloches",
    text: [
      "Vous cassez le moule à deux, au maillet. La cloche apparaît, noire de terre, puis dorée quand il la brosse. Il la frappe. Elle ne sonne pas. Il la regarde, sans surprise. « Pas encore, dit-il. Elle sonnera quand là-haut quelqu'un passera à l'endroit et pensera : c'est ici. Ça peut prendre cent ans. »",
      "Il la pose avec les autres, dans l'herbe. Il y en a des centaines, qui attendent.",
    ],
    choices: [{ back: "III_c_ville" }] }),

  IV_m_jardin: P4({ title: "Le jardin des simples", place: "moutier",
    text: [
      "Le jardin du moutier, derrière le cloître, entre quatre murs. Les plates-bandes de sauge et de souci sont là, rangées, étiquetées sur de petites ardoises. Mais entre elles, dans les allées, sur les murs, jusque dans les fentes du puits, poussent de petites fleurs grises, tête en bas, qui sentent la neige.",
      "La veille-neige. Elle ne poussait que sous la neige, avant, dans les combes. Depuis l'année blanche, elle pousse partout. Les frères ne l'arrachent pas. Frère Odon dit qu'elle soigne les gens qui ont trop oublié. Personne ne sait si c'est vrai. On la cueille quand même.",
    ],
    choices: [
      { label: "En cueillir une poignée", fx: { item: "tisane_veille", ep: ["perso", 300] }, to: "IV_m_jardin_cueillir" },
      { back: "IV_moutier" },
    ] }),
  IV_m_jardin_cueillir: P4({ title: "La veille-neige", place: "moutier",
    text: [
      "Tu cueilles. Les fleurs sont froides au toucher. Elles laissent sur tes doigts une odeur d'hiver, de linge gelé, de matin de janvier.",
      { if: { has: "nord:veille_neige" }, text: "Un frère, qui sarcle à côté, te dit que la première touffe, c'est une femme du clan qui l'a trouvée, l'an dernier, avant l'année blanche, quand personne ne savait ce que c'était. Elle avait dit que c'était une mauvaise herbe. Elle en avait cueilli quand même." },
      "Sur une ardoise, au bout d'une allée, quelqu'un a écrit à la craie : *Ne pas arracher. Elle se souvient pour nous.*",
    ],
    choices: [{ back: "IV_moutier" }] }),
};
