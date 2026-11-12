// Act I · two more corners of the yard at Brenne (Ysolde leads, "tu" feminine), off YS_cour: the lime tree her
// grandfather planted, with something older carved at its foot, and the well where the soldiers' wives draw water
// and talk about the order.
var Y = { act: "I", noLead: true, place: "brenne" };
function P(o) { return Object.assign({}, Y, o); }
var BACK = [{ back: "YS_cour" }];
module.exports = {
  YS_k_tilleul: P({ title: "Le tilleul",
    text: [
      "Le tilleul de ton grand-père. Tu t'assieds dessous, comme quand tu étais petite, le dos contre le tronc. Il gêne les manœuvres depuis cinquante ans. Ton grand-père disait qu'un fort sans arbre, c'est une prison, et qu'il préférait gêner les manœuvres.",
      "En bas du tronc, à ras de terre, là où l'écorce est la plus vieille, il y a une gravure que tu avais oubliée. Tu la retrouves sous tes doigts. Un cerf. La tête levée, les bois en couronne. Elle n'est pas dans l'écorce : c'est une pierre, prise dans les racines, que l'arbre a avalée en grandissant, et sur la pierre, le cerf.",
      "Les Brenne portent un loup depuis toujours. Sur les chapiteaux de la chapelle, sur la porte, sur ton écu. Ton grand-père, quand tu lui avais demandé, petite, ce que faisait ce cerf sous l'arbre, avait haussé les épaules. « Avant le loup, avait-il dit. Il y a longtemps. On en a changé. » Tu n'avais pas demandé pourquoi.",
    ],
    choices: [
      { label: "Gratter la mousse, pour mieux voir", fx: { ep: ["perso", 300], flag: "ysolde:cerf" }, to: "YS_k_tilleul_pierre" },
      { label: "Rester un moment sous l'arbre, sans penser à rien", fx: { pv: 2 }, to: "YS_k_tilleul_repos" },
    ] }),
  YS_k_tilleul_pierre: P({ title: "La pierre",
    text: ["Sous la mousse, autour du cerf, il y a des lettres. Une devise, à moitié avalée par l'écorce. Tu lis ce qui reste : *... PREMIER ...*. Le reste est dans le bois. Il faudrait abattre l'arbre pour le lire. Tu remets la mousse en place, du plat de la main. Ton grand-père n'aurait pas voulu qu'on abatte l'arbre. Tu n'es pas sûre qu'il aurait voulu qu'on lise."],
    choices: BACK }),
  YS_k_tilleul_repos: P({ title: "L'ombre",
    text: ["Tu restes. Les feuilles bougent au-dessus de toi. Les abeilles du tilleul font un bruit de forge lointaine. Pendant un moment, il n'y a pas d'ordre, pas de Hautvent, pas de Frère Sévrin à la fenêtre. Il y a une petite fille sous un arbre, et un vieil homme qui vient s'asseoir à côté d'elle, en se plaignant de son genou. Puis la cloche sonne. Tu te relèves. Il n'y a personne à côté de toi. Il n'y a plus personne, depuis longtemps."],
    choices: BACK }),
  YS_k_puits: P({ title: "Le puits",
    text: [
      "Autour du puits, les femmes des soldats tirent l'eau du matin, les seaux à la main, et elles parlent. Elles se taisent quand tu approches. Puis l'une d'elles, la grosse Hersende, la femme de Hugues le forgeron, qui n'a peur de personne, te tend la louche.",
      "« Hautvent, dit-elle. On sait. Ma sœur est mariée là-bas. Une tisserande. Trois enfants. » Elle ne baisse pas les yeux. « Je ne vous demande rien, capitaine. Je voulais juste que vous sachiez qu'il y a une sœur de quelqu'un, sur cette liste. Il y a toujours une sœur de quelqu'un. »",
    ],
    choices: [
      { label: "Lui demander le nom de sa sœur", fx: { ep: ["perso", 300], flag: "ysolde:perrine" }, to: "YS_k_puits_nom" },
      { label: "Boire, rendre la louche, et ne rien dire", to: "YS_k_puits_silence" },
    ] }),
  YS_k_puits_nom: P({ title: "Perrine",
    text: ["« Perrine, dit Hersende. Perrine Fournel. Elle a une tache de vin sur la joue, ici. Elle chante faux. Elle fait le meilleur pâté de lièvre de la vallée. » Elle s'arrête. Elle a les yeux humides. Elle ne pleure pas : on ne pleure pas au puits, devant la capitaine. « Voilà. Maintenant, vous savez qui c'est. Faites-en ce que vous voulez. » Elle reprend ses seaux. Les autres femmes la suivent, sans un mot."],
    choices: BACK }),
  YS_k_puits_silence: P({ title: "La louche",
    text: ["Tu bois. L'eau du puits de Brenne a le goût de fer et de pierre, le goût de ton enfance. Tu rends la louche. Tu ne dis rien. Hersende hoche la tête, comme si ton silence lui suffisait, ou comme si elle n'attendait rien d'autre d'une capitaine. Elle reprend ses seaux. Elle ne te regarde plus. Les autres non plus."],
    choices: BACK }),
};
