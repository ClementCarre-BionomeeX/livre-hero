// Act II · two detours in the palace at night, for the southern company (Lisandre leads, "tu" feminine), off
// II_S2_palais before the blue chamber: the kitchens, where the old cook makes every night the soup the queen asks for
// (sud2:soupe opens a choice in II_S2_isaure); and the musicians' gallery, where the old harp master Grégoire (who lost the endings in Act I) plays alone for the
// empty ballroom.
var S = { act: "II", noLead: true, place: "vasselin" };
function P(o) { return Object.assign({}, S, o); }
var BACK = [{ label: "Reprendre le couloir", to: "II_S2_palais" }];
module.exports = {
  II_S2_cuisines: P({ title: "Les cuisines de nuit",
    text: [
      "Les cuisines du palais veillent. Elles ont toujours eu le sommeil léger, mais d'habitude, la nuit, on y trouve seulement les marmitons qui ronflent sur les sacs et un feu couvert. Cette nuit, les broches tournent. On plume, on découpe, on pétrit. Un banquet pour trois cents, que personne n'a commandé, et que personne ne mangera.",
      "Au fond, près de la cheminée, un vieux cuisinier ne fait pas le banquet. Il surveille une petite marmite, toute seule sur un trépied. Maître Guérin. Il te laissait voler des beignets, quand tu avais douze ans et que tu attendais, à la porte des cuisines, qu'on t'appelle pour chanter. Il lève les yeux. Il ne te reconnaît pas. Il sourit quand même, à tout hasard.",
    ],
    choices: [
      { label: "Lui demander ce qu'il fait cuire", fx: { flag: "sud2:soupe", ep: ["perso", 300] }, to: "II_S2_cuisines_soupe" },
      { label: "Lui demander pour qui est le banquet", to: "II_S2_cuisines_banquet" },
    ] }),
  II_S2_cuisines_soupe: P({ title: "La soupe du vieux roi",
    text: [
      "« La soupe de la reine, dit-il. Elle la demande toutes les nuits, à deux heures. Elle ne sait pas pourquoi. Elle dit : *la soupe de mon père.* Personne ici ne l'a connu, son père, le vieux roi, sauf moi. » Il remue. Ça sent le lard, le chou, le pain trempé. Une soupe de camp. Une soupe de soldat.",
      "« Il la mangeait en campagne, avec ses hommes, dans la même marmite. Il me l'a fait faire ici, au palais, jusqu'à sa mort. Elle en mangeait avec lui, petite, assise sur ses genoux. » Il goûte, il sale. « Elle ne se souvient pas de lui. Elle se souvient de la soupe. C'est déjà ça. » Il te tend un bol. « Si tu montes chez elle, porte-la-lui. Les laquais la renversent dans l'escalier. »",
    ],
    choices: BACK }),
  II_S2_cuisines_banquet: P({ title: "Le banquet",
    text: ["« Pour la fête, dit-il. » Quelle fête ? Il réfléchit. Il ne sait pas. Personne ne sait. L'ordre est arrivé ce matin, écrit, signé, scellé, et l'ordre ne disait pas pourquoi. Il hausse les épaules. « On a toujours fait des banquets, ici. Les gens aiment bien qu'il y ait un banquet. Même s'ils ne viennent pas. » Derrière lui, un marmiton s'est endormi debout, la cuillère à la main, devant une sauce qui attache. Personne ne le réveille."],
    choices: BACK }),
  II_S2_tribune: P({ title: "La tribune des musiciens",
    text: [
      "La grande salle de bal est vide, éclairée comme en plein jour, les parquets cirés comme pour une noce. Au-dessus, dans la tribune des musiciens, un seul homme joue. Un vieillard, à la harpe, les yeux fermés. Maître Grégoire, qui t'a appris tes premiers accords, et qui dirige les musiciens de la cour depuis trente ans.",
      "Il joue une pavane, lentement, pour personne. Ou pour quelqu'un : la chambre bleue est juste au-dessus, et le son monte par les conduits de la cheminée. Ton pupitre est encore là, à sa droite, avec ton nom peint dessus, à demi effacé. Le sien, à côté, n'a plus de nom du tout.",
      { if: { not: { has: "lisandre:fins" } }, text: "Deux mesures avant la fin, il s'arrête, les mains en l'air, et il reprend au début. Il ne sait toujours pas les fins." },
      { if: { has: "lisandre:fins" }, text: "Il va jusqu'au bout. Les fins que tu as chantées aux musiciens, dans la galerie, quatre jours avant la Fête, sont restées. Il ne sait plus qui les lui a rendues." },
    ],
    choices: [
      { label: "Prendre ton luth, et jouer avec lui", test: { dom: "social", label: "La pavane", help: [{ if: { has: "sud2:isaure_chanson" }, v: 10 }] },
        win: { fx: { flag: "sud2:gregoire", ep: ["perso", 500] }, to: "II_S2_tribune_jouer" }, lose: { to: "II_S2_tribune_ecouter" } },
      { label: "Rester dans l'ombre, et l'écouter", to: "II_S2_tribune_ecouter" },
    ] }),
  II_S2_tribune_jouer: P({ title: "La pavane à deux",
    text: [
      "Tu t'assieds à ton pupitre. Tu accordes, très bas. Tu entres dans la pavane à la reprise, comme il te l'a appris : on n'entre jamais au début, on entre quand l'autre a besoin de toi. Il ne rouvre pas les yeux. Mais sa harpe ralentit, pour t'attendre, et repart avec toi. Vous allez jusqu'au bout ensemble, comme autrefois.",
      "À la fin, il pose les mains à plat sur les cordes. Il te regarde. « Vous jouez comme une de mes élèves, dit-il. La petite Lisandre. Elle entrait toujours un temps trop tôt. » Tu es entrée un temps trop tôt. Tu ne t'en étais pas rendu compte. Il ne sait pas que c'est toi. Il sait comment tu joues. C'est une autre façon de savoir.",
    ],
    choices: BACK }),
  II_S2_tribune_ecouter: P({ title: "Pour personne",
    text: ["Tu restes dans l'ombre de l'escalier. Il joue la pavane, puis il la reprend, puis encore. À travers le plafond, très faiblement, tu entends un pas, au-dessus, qui va et vient, et qui s'arrête quand la musique s'arrête. Il y a quelqu'un, là-haut, qui écoute. Il le sait. C'est pour ça qu'il joue. Tu repars sans te montrer, ton luth contre toi, sans avoir joué une note."],
    choices: BACK }),
  II_S2_isaure_soupe: P({ title: "Le bol",
    text: [
      "Tu poses le bol sur la table de chevet, à côté des feuilles signées. La reine le regarde. Elle le prend à deux mains, comme une enfant, et elle boit, à même le bord, sans cuillère. Elle s'arrête. « Mon père, dit-elle, il soufflait dessus. Pour moi. Il disait que les rois ne se brûlent pas la langue, que c'est pour ça qu'ils ont des filles. »",
      "Elle se tait. Elle a dit *mon père* comme on dit un nom qu'on vient de retrouver dans sa poche. Puis elle boit le reste, et elle te rend le bol, et elle a oublié. Mais elle s'est souvenue, une gorgée. Tu l'as vu.",
    ],
    choices: [{ fx: { ep: ["perso", 500] }, back: "II_S2_isaure" }] }),
};
