// Act V · "La queue", an adventure inside the adventure on the last night in Pallanche (the child leads, "tu"
// masculine), opened from V_ville: walking the queue of those who wait to cede, from its tail to the tower door.
// Five people, each with what they came to give: a soldier, a young mother, two lovers, a debtor, and an old
// clerk at the very front who has been first since yesterday and will not go in. Each one can be talked out of line
// (v:queue_<who>), or left. At the door, the clerk. v:queue=vide when three or more of the four have left.
var A = { act: "V", noLead: true };
function P(o) { return Object.assign({}, A, o); }
var BACK = [{ label: "Continuer de remonter la queue", to: "V_q_file" }];
var LEFT = ["v:queue_soldat", "v:queue_mere", "v:queue_amants", "v:queue_dette"];
function atLeast(n) {
  // every combination of n flags among LEFT
  var out = [];
  (function rec(start, picked) {
    if (picked.length === n) { out.push({ all: picked.map(function (f) { return { has: f }; }) }); return; }
    for (var i = start; i < LEFT.length; i++) rec(i + 1, picked.concat(LEFT[i]));
  })(0, []);
  return { any: out };
}
function person(id, flag, title, text, label, help, win, lose) {
  var o = {};
  o[id] = P({ title: title, place: "pallanche", text: text,
    choices: [
      { label: label, test: { dom: "social", label: title, help: help }, win: { fx: { flag: flag, ep: ["perso", 700] }, to: id + "_part" }, lose: { to: id + "_reste" } },
      { label: "Passer ton chemin", to: "V_q_file" },
    ] });
  o[id + "_part"] = P({ title: title, place: "pallanche", text: win, choices: BACK });
  o[id + "_reste"] = P({ title: title, place: "pallanche", text: lose, choices: BACK });
  return o;
}
var C = {
  V_q_bout: P({ title: "Le bout de la queue", place: "pallanche",
    fx: { questSeen: "V_Q_queue" },
    text: [
      "Tu prends la queue par le bout, rue des Bassins, là où elle commence. Ou là où elle finit : ça dépend d'où on la regarde. Elle fait trois fois le tour de la place aux Clercs avant d'atteindre la porte. Des centaines de gens, la neige sur les épaules, le jeton de plomb dans la main.",
      "Tu ne peux pas les sortir tous de la file. Tu le sais. Mais tu peux la remonter, d'un bout à l'autre, et leur parler, un par un, à ceux qui lèvent les yeux quand tu passes.",
    ],
    choices: [
      { label: "Remonter la queue", to: "V_q_file" },
      { label: "Revenir sur la place", to: "V_ville" },
    ] }),
  V_q_file: P({ title: "La queue", place: "pallanche", hub: true,
    text: [
      "Tu marches le long de la file. Les gens sourient, tous, du même sourire tranquille, celui des gens qui ont pris leur décision et n'ont plus à y penser. Certains te suivent des yeux. La plupart regardent la porte.",
      { if: atLeast(3), text: "Derrière toi, dans la file, il y a des trous, maintenant. Des places vides, dans la neige, que personne ne vient combler. Les gens, autour des trous, regardent par terre, et ne sourient plus tout à fait." },
    ],
    choices: [
      { label: "Un soldat, la main sur une jambe de bois", hide: { seen: "V_q_soldat" }, to: "V_q_soldat" },
      { label: "Une jeune femme, un châle vide serré contre elle", hide: { seen: "V_q_mere" }, to: "V_q_mere" },
      { label: "Deux jeunes gens qui ne se regardent pas", hide: { seen: "V_q_amants" }, to: "V_q_amants" },
      { label: "Un homme qui compte et recompte des pièces", hide: { seen: "V_q_dette" }, to: "V_q_dette" },
      { label: "La tête de la queue, devant la porte", to: "V_q_tete", big: true },
      { label: "Revenir sur la place", to: "V_ville" },
    ] }),
};
function add(o) { for (var k in o) C[k] = o[k]; }

add(person("V_q_soldat", "v:queue_soldat", "Le soldat", [
  "Un soldat de la Lisse, en capote grise, une jambe de bois, un jeton dans le poing. Trente ans, peut-être. Il a l'air d'en avoir cinquante. « La jambe, dit-il quand tu t'arrêtes. Non. Pas la jambe. Le jour de la jambe. Je le revois toutes les nuits. Je veux dormir. Une seule nuit, sans ce jour-là. »",
], "« Sans ce jour-là, tu ne sauras plus pourquoi tu boites. »", [{ if: { present: "ysolde" }, v: 20 }, { if: { present: "rodric" }, v: 15 }, { if: { has: "v:archives=rendues" }, v: 10 }],
["Il réfléchit. Longtemps. « C'est vrai, dit-il. Je me demanderai. Toute ma vie, je me demanderai. Je regarderai ma jambe, et je me demanderai. » Il regarde son jeton. « C'est peut-être pire. » Il sort de la file, en boitant, et il s'en va, sans se retourner, vers une taverne qui n'est pas ouverte."],
["« Je saurai que c'était la guerre, dit-il. Ça me suffira. Tout le monde boite, à la guerre. » Il se retourne vers la porte. Tu as dit ce qu'il fallait. Il n'avait pas besoin de l'entendre. Il avait besoin de dormir."]));
add(person("V_q_mere", "v:queue_mere", "La jeune mère", [
  "Une jeune femme, vingt ans, qui serre contre elle un châle de laine plié en quatre, comme on porte un nourrisson. Il n'y a rien dans le châle. Elle le berce quand même, doucement, sans s'en rendre compte. « Trois semaines, dit-elle. Il a vécu trois semaines. Je voudrais ne l'avoir jamais eu. Ce serait moins lourd. »",
], "« Trois semaines, c'est quelqu'un. Il n'aura eu que toi pour s'en souvenir. »", [{ if: { present: "corbe" }, v: 15 }, { if: { present: "ombeline" }, v: 20 }, { if: { has: "nord:nouveau_ne=garde" }, v: 10 }, { if: { has: "nord:nouveau_ne=peint" }, v: 10 }],
["Elle te regarde. Elle regarde le châle. Elle le déplie, à moitié, et elle regarde dedans, comme s'il y avait quelqu'un. « Il avait des cheveux noirs, dit-elle. Beaucoup. Comme un petit vieux. » Elle rit, et elle pleure, et elle sort de la file, le châle serré contre elle, et elle s'assied sur une marche, pour pleurer à son aise. C'est mieux. C'est beaucoup mieux."],
["« Personne ne s'en souviendra, alors, dit-elle. Ni lui, ni moi. Ce sera juste. » Elle reprend son bercement. Tu ne trouves rien à répondre qui ne soit pas cruel. Tu la laisses à son châle, et au sourire qui lui revient, très vite, trop vite."]));
add(person("V_q_amants", "v:queue_amants", "Les amants", [
  "Un garçon et une fille, dix-huit ans, côte à côte dans la file, qui ne se regardent pas. Leurs mains se touchent presque. « Nos pères, dit la fille, à voix basse. Les deux maisons. On ne pourra jamais. Alors on a décidé de se céder l'un l'autre. Comme ça, demain, on se croisera dans la rue, et ça ne fera rien. »",
  "Le garçon ne dit rien. Il serre son jeton si fort que le plomb a pris la forme de ses doigts.",
], "« Demain, vous vous croiserez, et vous vous retournerez, sans savoir pourquoi. Toute votre vie. »", [{ if: { present: "lisandre" }, v: 20 }, { if: { present: "pie" }, v: 10 }, { if: { has: "iii:noces" }, v: 15 }],
["La fille se tourne vers le garçon. Pour la première fois de la nuit, elle le regarde. Il lâche son jeton, qui tombe dans la neige, sans bruit. Ils sortent de la file, ensemble, la main dans la main, et ils partent en courant, vers le Pont-Neuf, vers n'importe où, en riant comme des voleurs. Leurs pères, demain, se débrouilleront."],
["« On se retournera, dit la fille. Et puis on ne se retournera plus. On s'habitue à tout. » Elle a raison, peut-être. Le garçon ne dit toujours rien. Quand tu t'éloignes, tu le vois, du coin de l'œil, lui frôler la main. Une seule fois. Pour la dernière fois."]));
add(person("V_q_dette", "v:queue_dette", "Le débiteur", [
  "Un homme en habit râpé, qui compte des pièces dans sa paume, les recompte, les remet dans sa bourse, les ressort. « Ce n'est pas pour moi, dit-il. Ils paient, au Bureau. Deux sous pour un souvenir, cinq pour un bon. Je vais leur vendre mon enfance. Elle était bonne. Ça fera dix sous. Avec ça, je paie le boulanger. »",
], "« Ton enfance, c'est la seule chose que le boulanger ne pourra jamais te prendre. »", [{ if: { present: "gaspard" }, v: 20 }, { if: { present: "pie" }, v: 15 }, { if: { has: "v:fours" }, v: 10 }],
["Il rit, un rire sec. Puis il s'arrête de rire. « Mon père m'emmenait pêcher, dit-il. Le dimanche. On ne prenait jamais rien. » Il range sa bourse. « Il faudra que je trouve dix sous ailleurs. » Il sort de la file. Il a l'air plus pauvre. Il a l'air moins seul."],
["« Le boulanger, il me prend déjà tout le reste, dit-il. Alors un peu plus, un peu moins. » Il recompte ses pièces. Il en manque toujours, quoi qu'il fasse. C'est ce qui le pousse vers la porte, et ce n'est pas toi qui pourras remplir sa bourse."]));

C.V_q_tete = P({ title: "La tête de la queue", place: "pallanche",
  text: [
    "Devant la porte de la tour, le premier de la file. Un vieux greffier, en robe noire râpée, un jeton à la main, qui ne bouge pas. Il est là depuis hier soir. Il aurait pu entrer cent fois. La porte est ouverte. Il n'entre pas.",
    "« Je les ai tous inscrits, dit-il sans que tu demandes. Quarante ans au guichet. Chaque cession. Chaque nom. Je voulais leur donner tout ça, ce soir. Les quarante ans. » Il regarde la porte ouverte. « Et je n'y arrive pas. Je reste là. Je ne sais pas pourquoi. »",
    { if: atLeast(3), text: "Il regarde par-dessus ton épaule, vers la file, vers les trous dans la file. « Tu en as fait partir, dit-il. J'ai vu. » Il hoche la tête, lentement. « C'est peut-être pour ça que j'attendais. Pour voir si quelqu'un viendrait les chercher. »" },
  ],
  choices: [
    { label: "« Alors ne rentre pas. Garde-les. »", hide: atLeast(3), fx: { flag: "v:queue", quest: "V_Q_queue", ep: ["perso", 800] }, to: "V_q_fin" },
    { label: "« Alors ne rentre pas. Sors de la file. »", hide: { not: atLeast(3) }, fx: { flag: ["v:queue", "v:queue=vide"], quest: "V_Q_queue", ep: ["perso", 1500] }, to: "V_q_fin" },
  ] });
C.V_q_fin = P({ title: "Le premier", place: "pallanche",
  text: [
    { if: atLeast(3), text: "Il pose son jeton sur le seuil de la tour. Puis il sort de la file. Le premier. Derrière lui, quelqu'un hésite, puis un autre. Pas beaucoup. Une dizaine. Ils posent leur jeton sur le seuil, à côté du sien, et ils s'en vont. La file avance d'autant. Elle reste immense. Mais il y a, sur le seuil, un petit tas de plomb qui brille sous la neige." },
    { if: { not: atLeast(3) }, text: "Il te regarde longtemps. Puis il serre son jeton, et il reste. « Je resterai là, dit-il. Devant. Je ne rentrerai pas. Mais je ne partirai pas non plus. Comme ça, ceux qui viendront après moi devront me passer devant. Ça les fera peut-être réfléchir. »" },
  ],
  choices: [{ label: "Revenir sur la place", to: "V_ville" }] });
module.exports = C;
