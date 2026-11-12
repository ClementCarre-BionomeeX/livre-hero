// Act II · two more places on the grey galley (Lisandre leads, "tu" feminine), off II_G_pont: the galley kitchen, where
// an old Esquarrois cook feeds the rowers and knows a tavern on the fishermen's quay (galere:cuisinier helps the port
// test in II_G_liberer); and the crow's nest, where a ship's boy keeps awake by singing (galere:mousse helps it too, or
// galere:alerte).
var S = { act: "II", noLead: true, place: "vasselin" };
function P(o) { return Object.assign({}, S, o); }
var BACK = [{ back: "II_G_pont" }];
module.exports = {
  II_G_cambuse: P({ title: "La cambuse",
    text: [
      "Sous le gaillard d'avant, une porte basse, une odeur de fèves et de lard rance. La cambuse. Un vieil homme, assis sur un tonneau, épluche des oignons à la lueur d'une lampe à huile. Un Esquarrois, à l'accent de la côte. Il n'est pas enchaîné. Il te regarde entrer, le couteau en l'air, et il ne crie pas.",
      "« Si tu viens voler, dit-il, il n'y a que des fèves. Si tu viens pour eux… » Il montre le pont du menton, à travers le plafond. « Je leur fais la soupe depuis deux ans. Ils me remercient tous les soirs. Ils me remercient, tu comprends ? Avec le dos qu'ils ont. » Il pose son couteau. « Je ne peux rien faire. Je suis vieux, et j'ai peur. Mais je sais des choses. »",
    ],
    choices: [
      { label: "Lui demander où cacher cent quatre-vingts hommes, à Vasselin, en une nuit", fx: { flag: "galere:cuisinier", ep: ["perso", 500] }, to: "II_G_cambuse_taverne" },
      { label: "Lui demander leurs noms", fx: { ep: ["perso", 400] }, to: "II_G_cambuse_noms" },
    ] }),
  II_G_cambuse_taverne: P({ title: "La Morue Bleue",
    text: ["Il réfléchit, en se grattant la joue avec le dos du couteau. « La Morue Bleue, dit-il. Sur le quai des pêcheurs, au bout. La patronne a eu un fils aux galères, autrefois. Elle a une cave qui donne sur l'eau, et un mari qui ne pose pas de questions parce qu'il est sourd. » Il se remet aux oignons. « Tu lui dis que c'est Basile qui t'envoie. Elle me doit une soupe. Ça fait vingt ans. Elle ne l'a pas oublié, elle. Elle n'oublie rien, cette femme-là. »"],
    choices: BACK }),
  II_G_cambuse_noms: P({ title: "Les noms des rameurs",
    text: ["« Leurs noms ? » Il rit, un peu. Puis il ne rit plus. Il te les dit. Tous. Cent quatre-vingts. Il les sait dans l'ordre des bancs, de la proue à la poupe, comme une litanie, parce qu'il leur sert la soupe dans cet ordre depuis deux ans, et qu'il les appelle, un par un, quand il passe avec la marmite. *Joachim. Tibor. Les deux Mathis. Vanko.* Ils répondent. Ils ne savent pas qu'ils sont prisonniers, mais ils savent qu'ils s'appellent comme ça. « C'est la seule chose que je leur ai gardée, dit-il. Je ne sais pas si ça compte. »"],
    choices: BACK }),
  II_G_vigie: P({ title: "La hune",
    text: [
      "Tu lèves les yeux. En haut du mât, dans la hune, quelqu'un chante, à mi-voix, pour ne pas s'endormir. Une voix de garçon qui mue, qui casse sur les notes hautes. Le mousse de veille. S'il te voit, il donnera l'alerte. C'est son métier.",
      "Tu grimpes. Les haubans sont mouillés. À mi-hauteur, il s'arrête de chanter. Il t'a entendue. Il se penche. Un gamin de douze ans, un sifflet d'os au cou, qui te regarde comme on regarde un fantôme. Il porte le sifflet à ses lèvres.",
    ],
    choices: [
      { label: "Lui reprendre sa chanson, là où il l'a laissée", test: { dom: "social", label: "Le mousse", help: [{ if: { item: "luth" }, v: 5 }, { if: { has: "lisandre:fins" }, v: 10 }] },
        win: { fx: { flag: "galere:mousse", ep: ["perso", 600] }, to: "II_G_vigie_chanson" }, lose: { fx: { flag: "galere:alerte" }, to: "II_G_vigie_sifflet" } },
      { label: "Redescendre, vite, avant qu'il siffle", back: "II_G_pont" },
    ] }),
  II_G_vigie_chanson: P({ title: "La fin de la chanson",
    text: ["Tu chantes. Doucement, d'en bas, accrochée aux haubans. La suite de sa chanson, une chanson de port, sur un bateau qui ne revient pas et une fille qui ne l'attend plus. Il garde le sifflet aux lèvres. Il ne siffle pas. Au refrain, il chante avec toi, et sa voix ne casse plus. À la fin, il lâche le sifflet. « Je ne vous ai pas vue, dit-il. Je ne vois jamais rien, la nuit. Je suis myope. » Il te montre, du doigt, la ronde de la garde sur le quai, qu'il voit très bien. Il te dit quand elle passe."],
    choices: BACK }),
  II_G_vigie_sifflet: P({ title: "Le sifflet",
    text: ["Tu chantes. Il ne connaît pas cette version. Il siffle. Un coup bref, strident, qui traverse le bassin. Puis il te regarde, et il a l'air désolé, sincèrement. « C'est mon métier », dit-il. Tu redescends en glissant le long des haubans. En bas, sous le pont, les pas commencent."],
    choices: BACK }),
};
