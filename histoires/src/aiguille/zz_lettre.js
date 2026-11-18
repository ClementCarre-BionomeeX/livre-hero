// L'Île Folle-Aiguille · side story « La lettre des bancs » (owes its question to An Iceland Fisherman: how long may one
// wait for someone the sea has kept, and who has the right to end the waiting?). Bleunven, nineteen, net-mender at the
// Pointe, betrothed to Tugdual Kervran who fishes cod on the northern banks since March, cannot read. She brings the
// child a letter that has just come by the coaster, so the child will read it to her, as for the three before. This
// one is from the skipper. The child reads it as written (zz:lit), reads her the letter Tugdual would have written
// (zz:invente), or says it is too hard to read and takes it to the rector (zz:recteur). Wired in A1_jours.
module.exports = {
  passages: {
    ZZ_filets: { act: "I", title: "La lettre des bancs", place: "greve", ambiance: "mer",
      fx: { meet: "bleunven" },
      text: [
        "Bleunven raccommode les filets au pied de la cale, assise sur un rouleau de chanvre, ses aiguilles de bois volant dans les mailles plus vite que l'œil. Dix-neuf ans, des yeux gris, un rire qu'on entend du Fanal, et des doigts coupés partout par le fil, qu'elle suce sans y penser. Elle est promise à Tugdual Kervran, qui pêche la morue sur les bancs du Nord depuis le mois de mars, et qui rentrera à la Toussaint, ou à la Saint-Martin au plus tard, et qu'on mariera à Noël.",
        "Elle ne sait pas lire. Tugdual non plus, d'ailleurs ; il dicte ses lettres à l'écrivain du bord, et elle te les apporte, une par une, pour que tu les lui lises, à la grève, à l'abri du vent, en la regardant rougir. Tu en as lu trois. Il y est question de la morue, du froid, du brouillard, d'un mousse qui a perdu deux doigts, et, à la fin, toujours, d'une même phrase, que l'écrivain du bord écrit sans doute à tous les promis de tous les équipages : *Je t'embrasse comme le premier jour.*",
        "Ce matin, elle vient vers toi en courant, une enveloppe à la main, une lettre arrivée la veille par le caboteur de Lannoz, avec un cachet de cire noire qu'elle n'a pas remarqué. « Lis-la-moi, dit-elle, essoufflée. Vite. Il dit peut-être quand il rentre. »",
      ],
      choices: [{ label: "Ouvrir la lettre", to: "ZZ_lire" }] },
    ZZ_lire: { act: "I", title: "La lettre des bancs", place: "greve", ambiance: "mer",
      text: [
        "L'écriture est différente. Plus grosse, plus lente, appuyée, d'un homme qui écrit rarement. C'est le patron de la goélette, le capitaine Le Gac. Tu lis la première ligne pour toi, en silence, avant de la lire pour elle, comme tu le fais toujours, pour ne pas buter.",
        "*Mademoiselle, c'est avec une grande peine que je vous fais savoir que le matelot Tugdual Kervran est disparu en mer le neuf septembre, dans le brouillard, sur le banc du Large, étant parti à la ligne dans le doris avec le nommé Le Bras, et qu'on a cherché trois jours sans rien trouver que l'aviron. Il était bon garçon et bon pêcheur. Sa part de pêche vous sera remise à la Toussaint. Je vous salue avec respect.*",
        "Tu relèves les yeux. Bleunven te regarde, en souriant, ses aiguilles immobiles dans les mailles, la tête penchée, attendant la date, la Toussaint, la Saint-Martin. Le vent fait claquer la lettre dans tes mains. Derrière elle, la mer est grise, et plate, et ne dit rien.",
        "Tu as seize ans. Personne ne t'a appris à faire ça. Ta mère, quand la fièvre l'a prise, c'est ton père qui te l'a dit, en une phrase, au pied de l'escalier. Tu te souviens encore de la phrase. Tu te souviens surtout de la seconde d'avant.",
      ],
      choices: [
        { label: "Lui lire la lettre, telle qu'elle est écrite", fx: { flag: "zz:lit" }, to: "ZZ_lit" },
        { label: "Lui lire une autre lettre, celle que Tugdual aurait dictée", fx: { flag: "zz:invente" }, to: "ZZ_invente" },
        { label: "Dire que l'écriture est trop difficile, et la porter au recteur", fx: { flag: "zz:recteur" }, to: "ZZ_recteur" },
      ] },
    ZZ_lit: { act: "I", title: "La lettre des bancs", place: "greve", ambiance: "mer",
      text: [
        "Tu lis. Lentement, mot à mot, comme c'est écrit, sans rien adoucir, parce que tu ne sais pas comment on adoucit. Le neuf septembre. Le brouillard. Le doris. L'aviron.",
        "Elle ne crie pas. Elle reste assise, les aiguilles dans les mailles. Elle demande : « Relis. » Tu relis. Elle demande : « L'aviron, c'était le sien ? » Tu dis que la lettre ne le dit pas. Elle hoche la tête. Puis elle reprend ses aiguilles, et elle se remet à raccommoder, très vite, plus vite qu'avant, les yeux secs, et tu restes là, la lettre à la main, à la regarder faire des mailles, jusqu'à ce que sa mère descende de la falaise en courant, parce que quelqu'un lui a dit.",
        "Le soir, tu entends, depuis le Fanal, les femmes de la Pointe qui chantent pour elle, dans la maison, la complainte des noyés. Tu entends aussi, entre deux couplets, une voix seule, celle de Bleunven, qui demande, encore et encore, si l'aviron était le sien. Ton père, au comptoir, te regarde rentrer. Il te sert un bol de cidre chaud, ce qu'il ne fait jamais, et le pose devant toi.",
      ],
      choices: [{ label: "Boire le cidre", fx: { quest: "ZZ" }, back: "A1_jours" }] },
    ZZ_invente: { act: "I", title: "La lettre des bancs", place: "greve", ambiance: "mer",
      text: [
        "Tu lis une autre lettre. Celle qui n'existe pas. Tu la fais avec les trois d'avant : la morue, le brouillard, le froid, un hiver qui vient tôt, et le capitaine qui a décidé de prolonger la campagne, à cause d'un banc très riche, jusqu'à la Chandeleur peut-être. Et la phrase, à la fin, que tu connais par cœur : *Je t'embrasse comme le premier jour.*",
        "Elle soupire, déçue, la Chandeleur, c'est loin, mais elle rit quand même, elle dit qu'il ne perd rien pour attendre, qu'elle lui fera payer chaque semaine de retard. Elle te reprend la lettre, la plie, la glisse dans son corsage, contre sa peau, avec les trois autres. Elle se remet à ses filets en chantonnant.",
        "Tu sais que tu n'as gagné que du temps. Le capitaine Le Gac reviendra à la Toussaint avec la part de pêche, et un mot, et des yeux baissés. Tu sais qu'elle aura alors, contre sa peau, une lettre où quelqu'un lui disait *je t'embrasse*, et qu'elle saura que c'était toi. Tu ne sais pas si elle te remerciera de ces deux mois, ou si elle ne te les pardonnera jamais. Tu crois que les deux.",
      ],
      choices: [{ label: "Remonter la grève, sans te retourner", fx: { quest: "ZZ" }, back: "A1_jours" }] },
    ZZ_recteur: { act: "I", title: "La lettre des bancs", place: "greve", ambiance: "mer",
      text: [
        "Tu dis que l'écriture est trop difficile. Que c'est un autre qui a écrit. Que tu n'arrives pas à lire. Elle te regarde, étonnée ; tu lis toujours tout. Puis elle regarde le cachet de cire noire, pour la première fois, et tu vois qu'elle le voit, et qu'elle ne veut pas le voir, et qu'elle te tend la main pour reprendre la lettre.",
        "Vous montez ensemble à Sainte-Anne-des-Grèves, chez le recteur. Elle marche devant toi, la lettre serrée contre elle. Elle ne te parle pas. Au presbytère, elle entre seule, et la porte se referme. Tu restes dehors, sur le muret, sous la croix de granit, au vent. Tu entends, au bout d'un long moment, à travers la porte, un seul cri, bref, comme un oiseau qu'on attrape.",
        "Quand elle ressort, elle passe devant toi sans s'arrêter. Puis elle revient sur ses pas. Elle te prend la main, une seconde. « Tu savais, dit-elle. Merci de ne pas l'avoir dit toi-même. » Et elle s'en va vers la falaise. Tu ne sais pas si tu as eu du cœur ou de la lâcheté. Le recteur, sur le seuil, te regarde, et soupire, et te dit que c'est souvent la même chose, à ton âge, et au sien.",
      ],
      choices: [{ label: "Redescendre vers la grève", fx: { quest: "ZZ" }, back: "A1_jours" }] },
  },
  extras: {
    people: {
      bleunven: { name: "Bleunven", aka: ["la ramendeuse"], f: true, qui: "Ramendeuse de filets à la Pointe-aux-Corneilles, promise à un pêcheur des bancs du Nord." },
    },
    quests: [
      { id: "ZZ", act: "I", kind: "annexe", title: "La lettre des bancs", start: "ZZ_filets", doit: "pecheurislande", echo: ["zz:lit", "zz:invente", "zz:recteur"] },
    ],
  },
};
