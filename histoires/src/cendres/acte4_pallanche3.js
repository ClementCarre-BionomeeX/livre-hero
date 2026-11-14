// Act IV · two more corners of Pallanche a year later (the child leads, "tu" masculine), off IV_pal: the public
// letter-writer on the place aux Clercs, where the boy can send word home to the mill; and, if Hylas walks with him
// and found her in Act I, the dyer Bérengère's shop.
var A = { act: "IV", noLead: true, place: "pallanche" };
function P(o) { return Object.assign({}, A, o); }
var BACK = [{ back: "IV_pal" }];
module.exports = {
  IV_pal_ecrivain: P({ title: "L'écrivain public",
    text: [
      "Au coin de la place aux Clercs, à l'écart de la queue, un homme assis à une petite table, une plume, de l'encre, des feuilles. L'écrivain public. Il écrit pour ceux qui ne savent pas : des lettres d'amour, des réclamations, des testaments. Il a plus de travail que jamais, cette année. Les gens veulent tout mettre par écrit, avant d'oublier.",
      { if: { has: "corbe:lettre_askel" }, with: "corbe", text: "Il lève les yeux vers toi, puis vers les autres, et son regard s'arrête sur Corbe, sur ses pieds nus, sur ses joues peintes. « La fille des montagnes, dit-il. Je lui ai écrit une lettre pour sa mère, l'an dernier. Elle l'a fait lire ? » Il n'attend pas de réponse. Il sourit. « On ne sait jamais ce que deviennent les lettres. »" },
      "« Une lettre ? demande-t-il. Pour qui ? »",
    ],
    choices: [
      { label: "« Pour le moulin de Sauvelune. Joris et Agathe. »", hide: { not: { any: [{ has: "nord:rendu=sauvelune" }, { has: "ame:moulin" }] } }, fx: { gold: -1 }, to: "IV_pal_ecrivain_moulin" },
      { label: "« Pour personne. Écrivez juste ce que je vous dis, et gardez-la. »", fx: { gold: -1, ep: ["perso", 300] }, to: "IV_pal_ecrivain_garde" },
      { back: "IV_pal" },
    ] }),
  IV_pal_ecrivain_moulin: P({ title: "Au moulin",
    text: [
      "Tu dictes. Par où commencer ? Il te propose *Chers parents*. Tu dis non. Tu dis *Agathe, Joris, Pim*. Il écrit. Puis tu dis la ville, la tour, la queue devant la porte, la soupe de la Veuve. Tu passes sur la plaine blanche, et sur Valcendre. Tu gardes pour toi l'autre nom, celui que t'a donné un homme à la couronne de givre. Tu dis que tu manges bien.",
      "« Et pour finir ? » Tu réfléchis. Tu dis : *Gardez-moi ma place à table.* Il écrit. Il plie. Il cachette. « Le courrier de Pont-de-Saule part demain, dit-il. Elle arrivera dans quatre jours. Si tout va bien. » Rien ne va bien. Elle arrivera peut-être quand même.",
    ],
    choices: [{ fx: { flag: "iv:lettre_moulin", ep: ["perso", 500] }, back: "IV_pal" }] }),
  IV_pal_ecrivain_garde: P({ title: "Pour personne",
    text: [
      "Il te regarde, intrigué. Puis il trempe sa plume. Tu dictes. Au début, tu dictes au hasard. Puis ça vient : ce que tu as vu, depuis un an. Le blanc. Les marcheurs. La femme qui chante. Le procès. Tout ce que personne ne croira jamais, et que tu as peur d'oublier, toi aussi, un matin.",
      "Il écrit tout, en silence, sans une question, de plus en plus lentement. À la fin, il pose sa plume. Il te regarde. « Je la garde, dit-il. Dans mon coffre. Si tu reviens la chercher, elle sera là. Si quelqu'un d'autre vient, de ta part, je la lui lirai. » Il ne garde qu'un sou, pour le papier. Le reste, dit-il, ce n'est pas du travail.",
    ],
    choices: [{ fx: { flag: "iv:lettre_gardee" }, back: "IV_pal" }] }),
  IV_pal_berengere: P({ title: "La teinturière",
    text: [
      "Hylas t'arrête au coin de la rue des Teinturiers. « Ici, dit-il. Attends-moi. » Il entre dans une boutique, sous les écheveaux pendus. Tu restes dehors, devant l'étal. Tu entends une clochette, puis une voix de vieille femme, rauque, gaie, qui roule les r.",
      { if: { has: "hylas:berengere=dit" }, text: "Il ne reste pas longtemps. Quand il ressort, il a un écheveau de laine bleue sous le bras. « Elle ne se souvient toujours pas, dit-il. Mais elle m'a reconnu. Le vieil aveugle de l'an dernier, celui du ruban. Elle m'a demandé si j'étais celui qui l'avait fait passer sous le Pont-Neuf, dans une autre vie. Elle riait. » Il serre l'écheveau. « J'ai dit oui. »" },
      { if: { not: { has: "hylas:berengere=dit" } }, text: "Il ne reste pas longtemps. Quand il ressort, il a un écheveau de laine bleue sous le bras, et il se tait. Tu ne demandes pas. Au bout de la rue, il s'arrête, et il dit, à personne : « Elle a encore sa voix. » Puis il repart, en tapant sa canne un peu plus fort que d'habitude." },
    ],
    choices: [{ fx: { conf: { hylas: 5 }, ep: ["perso", 400] }, back: "IV_pal" }] }),
};
