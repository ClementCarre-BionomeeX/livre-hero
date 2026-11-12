// Act III · "Le feu qui reste", an adventure inside the adventure in the black forest around Ellerune (the child leads,
// "tu" masculine), opened from III_e_hameau. Solenn's brother Ewen went into the burnt forest to find the last ember
// of the night of the fire, and has been feeding it ever since with his own memories, so that no one forgets what was
// done. A hub of three places (the tree that still burns inside, the river of those who fled, the camp of the five)
// and Ewen by the ember. iii:braise=eteinte|emportee|gardee.
var A = { act: "III", noLead: true };
function P(o) { return Object.assign({}, A, o); }
var BACK = [{ label: "Revenir sous les arbres noirs", back: "III_F_bois" }];
module.exports = {
  III_F_lisiere: P({ title: "Solenn", place: "enfance",
    fx: { questSeen: "III_Q_foret" },
    text: [
      "À la lisière du hameau, là où les maisons rondes s'arrêtent et où commencent les arbres noirs, une fille de ton âge t'attend, les bras croisés, le menton levé. Elle a l'air en colère. Elle a l'air de l'être depuis longtemps.",
      "« Solenn, dit-elle. Mon frère, Ewen, est parti dans la forêt chercher le feu qui reste. Il dit qu'il y a encore une braise, quelque part, de la nuit où ils sont venus. Il dit que tant qu'elle brûle, on ne pourra pas oublier. » Elle serre les poings. « Ça fait cent ans qu'il est parti. Ici, ça ne compte pas, cent ans. Mais quand même. »",
    ],
    choices: [
      { label: "« Je vais le chercher. »", to: "III_F_bois" },
      { label: "« Je ne peux pas. »", refuse: true, to: "III_e_hameau" },
    ] }),
  III_F_bois: P({ title: "Les arbres noirs", place: "enfance", hub: true,
    text: [
      { first: true, text: "Sous les arbres, il n'y a pas de neige. Il y a de la cendre, épaisse, douce, qui étouffe les pas. Les troncs sont noirs, lisses, comme vernis, et ils ne tombent pas. Pas de feuilles. Pas d'oiseaux. Une odeur, très ancienne, de bois brûlé et de résine." },
      "Quelque part devant toi, très loin, une lueur rouge, à peine, qui va et qui vient, comme une respiration.",
    ],
    choices: [
      { label: "Le grand arbre qui fume encore", hide: { seen: "III_F_arbre" }, to: "III_F_arbre" },
      { label: "Le bruit d'eau, en contrebas", hide: { seen: "III_F_riviere" }, to: "III_F_riviere" },
      { label: "Une clairière, avec des cercles de pierres", hide: { seen: "III_F_camp" }, to: "III_F_camp" },
      { label: "Marcher vers la lueur rouge", if: { any: [{ seen: "III_F_arbre" }, { seen: "III_F_riviere" }, { seen: "III_F_camp" }] }, why: "Tu ne sais pas encore où tu mets les pieds.", to: "III_F_braise", big: true },
      { back: "III_e_hameau" },
    ] }),
  III_F_arbre: P({ title: "L'arbre qui fume", place: "enfance",
    text: [
      "Un chêne, énorme, plus vieux que les autres. Le tronc est fendu du haut en bas, et par la fente sort un filet de fumée, mince, continu, qui monte tout droit. Il brûle encore, dedans. Il brûle depuis trois cents ans, sans se consumer.",
      "Tu poses la main sur l'écorce. Elle est tiède. Et sous ta main, tu entends : des cris, des pas qui courent, une porte qu'on enfonce, une femme qui appelle un nom. Le même nom, encore et encore. Puis le craquement du feu qui couvre tout.",
    ],
    choices: [
      { label: "Garder la main sur l'écorce, et écouter jusqu'au bout", fx: { pv: -2, ep: ["perso", 400], flag: "iii:arbre_ecoute" }, to: "III_F_arbre_bout" },
      { label: "Retirer la main", to: "III_F_bois" },
    ] }),
  III_F_arbre_bout: P({ title: "Jusqu'au bout", place: "enfance",
    text: ["Tu écoutes. Ça dure longtemps. Ça dure toute la nuit, la nuit de là-bas, et ta main brûle un peu. À la fin, quand le feu se tait, il reste une seule voix, celle de la femme, qui ne crie plus. Elle chante. Doucement. Trois vers. Tu les connais. Tu retires ta main. Elle est rouge. Elle n'est pas brûlée."],
    choices: BACK }),
  III_F_riviere: P({ title: "La rivière", place: "enfance",
    text: [
      "En contrebas, une rivière, étroite, rapide, qui coule sur des galets noirs. L'eau est claire. Et dans l'eau, quand tu te penches, il y a des reflets qui ne sont pas les tiens. Des gens qui courent, le long de la berge, dans l'autre sens, en se retournant. Des femmes avec des enfants dans les bras. Des vieux qu'on porte.",
      "Ils fuient. Ils fuient depuis trois cents ans, dans l'eau, et la rivière les emporte, et ils remontent, et ils fuient de nouveau.",
      { with: "ysolde", text: "Ysolde regarde l'eau sans rien dire. Puis elle s'accroupit, et elle met la main dans le courant, au milieu des reflets, comme pour arrêter quelqu'un. Les reflets passent à travers ses doigts." },
    ],
    choices: [{ fx: { ep: ["perso", 300], flag: "iii:riviere_vue" }, back: "III_F_bois" }] }),
  III_F_camp: P({ title: "Les cinq feux", place: "enfance",
    text: [
      "Une clairière, sur une butte, d'où l'on voit, entre les troncs, la vallée et le hameau. Cinq cercles de pierres noircies, en rond. Cinq feux de camp. Autour de chaque feu, la trace de couvertures, de selles, d'armes posées. On a dormi ici, la veille. On a regardé la vallée.",
      "Contre un tronc, une hampe plantée, avec un lambeau d'étendard que la cendre a grisé. On devine encore, brodé dessus, un cerf, la tête levée.",
      "Dans la cendre du troisième feu, une cuillère de bois, sculptée. Sur le manche, une lettre, gravée au couteau, avec application. Une seule lettre : B.",
    ],
    choices: [
      { label: "Ramasser la cuillère", fx: { ep: ["perso", 400], flag: "iii:cuillere" }, to: "III_F_camp_cuillere" },
      { label: "Ne toucher à rien, et redescendre", fx: { ep: ["perso", 200] }, to: "III_F_bois" },
    ] }),
  III_F_camp_cuillere: P({ title: "La cuillère", place: "enfance",
    text: [
      "Elle est usée, la cuillère, par des années de soupe, et polie par une main. Une cuillère qu'on emporte avec soi en voyage parce qu'on y tient. On a mangé avec, ici, la veille, en regardant le hameau. On l'a oubliée, le matin, en partant vers la vallée.",
      "Elle sent encore, très faiblement, le pain.",
    ],
    choices: [
      { label: "La reposer dans la cendre, et redescendre", to: "III_F_bois" },
    ] }),
  III_F_braise: P({ title: "Ewen", place: "enfance",
    text: [
      "Au cœur de la forêt, dans un creux de terre noire, une braise. Une seule. Grosse comme un poing, rouge, vivante, qui palpite. Et devant la braise, assis en tailleur, un garçon maigre, de quinze ans, les mains tendues au-dessus, comme pour se chauffer.",
      "Il ne se chauffe pas. Il la nourrit. Tu le vois faire : il ferme les yeux, il pense à quelque chose, et quelque chose passe de lui à la braise, un fil de lumière pâle, et la braise rougit. Il a les tempes blanches. À quinze ans.",
      "« Je sais pourquoi tu es là, dit-il sans ouvrir les yeux. Solenn. Dis-lui que non. Si la braise s'éteint, on oubliera. Comme eux, là-haut. On deviendra comme eux. Il faut que quelqu'un se souvienne du feu. Alors je me souviens. Je lui donne tout le reste, pour qu'il dure. »",
    ],
    choices: [
      { label: "« Le feu ne se souvient de rien. Il mange. »", test: { dom: "social", label: "Ewen", help: [{ if: { has: "iii:arbre_ecoute" }, v: 15 }, { if: { has: "iii:riviere_vue" }, v: 10 }, { if: { has: "iii:cuillere" }, v: 10 }, { if: { has: "iii:noms_dits" }, v: 10 }, { if: { present: "hylas" }, v: 10 }] },
        win: { fx: { flag: ["iii:braise", "iii:braise=eteinte"], quest: "III_Q_foret", ep: ["perso", 1500] }, to: "III_F_eteinte" },
        lose: { to: "III_F_refus" } },
      { label: "« Donne-la-moi. Je l'emporte là-haut. Ils en ont besoin plus que toi. »", fx: { flag: ["iii:braise", "iii:braise=emportee"], quest: "III_Q_foret", ep: ["perso", 1200], item: "braise_ellerune" }, to: "III_F_emportee" },
    ] }),
  III_F_refus: P({ title: "La braise", place: "enfance",
    text: [
      "Il ouvre les yeux. Ils sont gris presque blancs, comme les tiens. « Tu dis ça parce que tu viens d'en haut, dit-il. Là-haut, on a tout oublié, et on vit très bien. Je sais. » Il referme les yeux. « Moi, je ne veux pas vivre très bien. »",
      "La braise palpite. Tu pourrais la lui prendre. Tu pourrais aussi le laisser. C'est son feu.",
    ],
    choices: [
      { label: "« Donne-la-moi. Je l'emporte là-haut. »", fx: { flag: ["iii:braise", "iii:braise=emportee"], quest: "III_Q_foret", ep: ["perso", 1000], item: "braise_ellerune" }, to: "III_F_emportee" },
      { label: "Le laisser à sa braise", fx: { flag: ["iii:braise", "iii:braise=gardee"], quest: "III_Q_foret" }, to: "III_F_gardee" },
    ] }),
  III_F_eteinte: P({ title: "La cendre", place: "enfance",
    text: [
      "Il te regarde, longtemps. Puis il regarde ses mains, au-dessus de la braise. « Je ne sais plus la couleur des yeux de ma mère, dit-il. Je lui ai donné ça, il y a longtemps. Et le goût des mûres. Et le prénom de mon meilleur ami. » Sa voix se casse. « Et je ne me souviens pas mieux du feu qu'au début. »",
      "Il baisse les mains. La braise, sans lui, rougit encore un moment. Puis elle pâlit. Elle devient grise. Elle devient cendre, comme tout le reste, et la forêt, autour de vous, pour la première fois depuis trois cents ans, refroidit.",
      "Ewen se lève. Il a les jambes raides. « Solenn va me crier dessus, dit-il. Pendant cent ans. » Il sourit, d'un sourire de quinze ans, qui lui va mieux.",
    ],
    choices: [{ label: "Le ramener au hameau", to: "III_F_retour" }] }),
  III_F_emportee: P({ title: "Le poing de feu", place: "enfance",
    text: [
      "Il hésite. Puis il prend la braise dans ses mains nues, et elle ne le brûle pas, et il la pose dans les tiennes. Elle ne te brûle pas non plus. Elle est chaude comme une pierre au soleil. Elle pèse plus lourd qu'elle ne devrait.",
      "« Là-haut, dit-il, montre-la-leur. Qu'ils sachent qu'il y a eu un feu. Juste ça. » Il se lève. Il a les jambes raides. Il regarde ses mains vides, longtemps, comme on regarde des mains qui ont travaillé cent ans et qui n'ont plus rien à tenir.",
    ],
    choices: [{ label: "Le ramener au hameau", to: "III_F_retour" }] }),
  III_F_gardee: P({ title: "Celui qui se souvient", place: "enfance",
    text: ["Tu le laisses. Il ne te regarde pas partir. Derrière toi, la lueur rouge va et vient, va et vient, comme une respiration. Au hameau, Solenn t'attend à la lisière. Elle voit que tu reviens sans lui. Elle ne dit rien. Elle décroise les bras, enfin, et elle rentre chez elle, en laissant la porte ouverte, au cas où."],
    choices: [{ back: "III_e_hameau" }] }),
  III_F_retour: P({ title: "La lisière", place: "enfance",
    text: [
      "Solenn vous voit arriver de loin. Elle ne court pas. Elle attend que son frère soit à trois pas. Puis elle le gifle. Puis elle le serre contre elle, si fort qu'il tousse. Elle ne dit rien. Elle ne le lâche pas.",
      "Par-dessus l'épaule de sa sœur, Ewen te fait un signe de la main. Les tempes blanches, à quinze ans. Ça ne repoussera pas. Mais le reste, peut-être.",
    ],
    choices: [{ back: "III_e_hameau" }] }),
};
