// L'Île Folle-Aiguille · side story « Les contes du siège » (owes its question to The Decameron: does telling stories
// keep death outside the door?). A night of the siege, nobody sleeps; the captain decrees that each will tell a story,
// by turns, around the fire in the choir, and that whoever falls asleep will tell two. Benoît tells his, the baron
// his; then it is the doctor's turn. She tells a funny tale (zg:drole), the true story of her marriage (zg:vrai), or
// passes and keeps the fire (zg:feu). Wired in A4w_jours.
var BARON = { not: { has: "xs:baron_mort" } };
var BENOIT = { not: { has: "benoit:parti" } };
module.exports = {
  passages: {
    ZG_feu: { act: "IV", title: "Les contes du siège", place: "misericorde", ambiance: "nuit",
      text: [
        "Il y a des nuits, pendant un siège, où personne ne dort, et où l'on ne sait pas pourquoi celle-là plutôt qu'une autre. Rien ne bouge en bas. La forêt se tait. Le clocher n'a pas tiré. Et tout le monde, dans la nef, est assis les yeux ouverts, les blessés sur leurs paillasses, les hommes contre les piliers, à écouter le silence comme on écoute un pas dans l'escalier.",
        "Vers minuit, la capitaine Ribaud se lève, va au feu du chœur, y jette deux bûches, et s'assied sur la marche de l'autel. « Puisque personne ne dort, dit-elle, on va se raconter des histoires. Chacun la sienne, à tour de rôle. Une histoire vraie ou fausse, c'est égal. Celui qui s'endort pendant l'histoire d'un autre en racontera deux. » Elle regarde la nef. « C'est un ordre. »",
        "On rit, un peu. On approche. Les blessés se font porter près du feu. On fait cercle, dans le chœur, sous l'arbre qui a percé le toit, avec la lune qui passe entre les branches et le feu qui fait danser les ombres sur les murs nus. La capitaine commence. Elle raconte une tempête au large du cap des Brumes, il y a vingt ans, et un mousse qui a sauvé un navire en tombant d'une vergue, par maladresse, sur la tête d'un mutin. On rit encore. Elle désigne le suivant du menton.",
      ],
      choices: [{ label: "Écouter", to: "ZG_contes" }] },
    ZG_contes: { act: "IV", title: "Les contes du siège", place: "misericorde", ambiance: "nuit",
      text: [
        { if: BENOIT, text: "Benoît Quémeneur raconte lentement, de sa voix de laboureur, une histoire de son village : un veau né avec deux têtes, que le curé voulait faire brûler et que sa mère avait caché dans le cellier, et qui avait vécu trois jours, en buvant aux deux têtes à la fois, et que toute la paroisse était venue voir, la nuit, en cachette du curé, avec des lanternes. Il n'y a pas de fin. Le veau meurt. Benoît se tait. Tout le monde attend une morale. Il n'y en a pas. On trouve que c'est la meilleure histoire de la soirée." },
        { if: BARON, text: "Le baron Clavières raconte, en homme du monde, avec des pauses et des effets, une histoire de bal masqué à Morlenc, où un échevin a dansé toute la nuit avec sa propre femme sans la reconnaître et lui a fait une déclaration. C'est drôle. Il la raconte bien. On rit. Puis, sans transition, la voix changée, il ajoute que son père l'emmenait sur les quais, enfant, voir partir les navires, et qu'il lui disait, devant chacun, combien il rapporterait. « Jamais où il allait, dit le baron. Seulement combien. » Il se tait, surpris de l'avoir dit." },
        "Un matelot blessé raconte une histoire de sirène, en patois, que personne ne comprend, et tout le monde applaudit. Un autre raconte une histoire si obscène que la capitaine le fait taire au milieu, en riant elle-même. Le feu baisse. La lune a quitté l'arbre. Puis tous les yeux se tournent vers Victorine.",
        "« À vous, docteur, dit la capitaine. Vous avez dû en entendre, des histoires, dans votre métier. Racontez-en une qui ne soit pas une maladie. »",
      ],
      choices: [
        { label: "Raconter le jour où l'abbé Morisseau a mangé le dîner d'un évêque", fx: { flag: "zg:drole" }, to: "ZG_drole" },
        { label: "Raconter Hector, et douze ans de mariage, sans rien arranger", fx: { flag: "zg:vrai" }, to: "ZG_vrai" },
        { label: "Passer ton tour, et remettre du bois sur le feu", fx: { flag: "zg:feu" }, to: "ZG_passe" },
      ] },
    ZG_drole: { act: "IV", title: "Les contes du siège", place: "misericorde", ambiance: "nuit",
      text: [
        "Elle raconte l'abbé Morisseau. Le petit abbé gourmand de Varnèse, curieux comme une pie, qui s'était invité, un jour de confirmation, à la table de l'évêque de Morlenc, et qui, placé à côté du plat, l'avait mangé pendant que Monseigneur bénissait la nappe. Elle fait la voix de l'abbé. Elle fait la voix de l'évêque. Elle fait la sauce, le chapon, les truffes, le silence de la table, et la phrase de l'abbé, la bouche pleine, quand l'évêque s'est retourné : « Le Seigneur pourvoira, Monseigneur. Il a toujours pourvu. »",
        "On rit. Les blessés rient en se tenant les côtes, et ceux qui ont une côte cassée rient quand même, en jurant. La capitaine rit, la tête renversée contre l'autel, d'un grand rire que personne ne lui connaissait. Pendant une minute, il n'y a plus de siège, plus de mutins, plus d'île : il y a un chapon et un évêque.",
        "Quand le rire s'éteint, quelqu'un s'est endormi, contre un pilier, la bouche ouverte. C'est le premier qui dorme depuis trois nuits. Personne ne le réveille. Personne ne lui fait raconter deux histoires. Les autres s'endorment après lui, un par un, jusqu'à l'aube, et Victorine reste seule éveillée, à garder le feu, avec un petit sourire qu'elle ne cherche pas à faire passer.",
      ],
      choices: [{ label: "Garder le feu jusqu'à l'aube", fx: { quest: "ZG" }, back: "A4w_jours" }] },
    ZG_vrai: { act: "IV", title: "Les contes du siège", place: "misericorde", ambiance: "nuit",
      text: [
        "Elle raconte Hector. Elle ne l'avait jamais raconté à personne. Le bel homme du bal de la Faculté, les dents, les yeux, le livre qu'il n'avait jamais lu. Les douze ans. Les cartes, les dés, les chevaux, les billets, les créanciers qui montaient l'escalier en même temps qu'elle redescendait de chez une accouchée. La façon qu'il avait de dire « ma chérie » en lui prenant sa bourse. Les nuits où elle l'attendait, et celles, plus nombreuses, où elle espérait qu'il ne rentrerait pas. Le matin où il n'est pas rentré.",
        "Elle le raconte sans pathétique, avec précision, comme on dicte une observation clinique. C'est ce qui fait mal. Personne ne rit. Personne ne bouge. Le feu crépite. Les blessés, sur leurs paillasses, l'écoutent avec une attention de chiens.",
        "Quand elle a fini, il y a un long silence. Puis la capitaine Ribaud, sans un mot, se lève, va chercher sa propre gourde, celle où elle garde le rhum de la Martinière, et la lui tend. Victorine boit. La capitaine reprend la gourde, boit à son tour, et dit seulement, très bas : « Le mien s'appelait Ferdinand. Il buvait. Il est mort à Lannoz, sous une charrette. Je ne l'ai jamais raconté non plus. » Elle se rassoit. On n'en dit pas plus. Il n'y a pas besoin.",
      ],
      choices: [{ label: "Garder le feu jusqu'à l'aube", fx: { quest: "ZG" }, back: "A4w_jours" }] },
    ZG_passe: { act: "IV", title: "Les contes du siège", place: "misericorde", ambiance: "nuit",
      text: [
        "Elle secoue la tête. « Je n'en sais pas. Je sais des maladies. » Elle prend deux bûches et les met au feu, et la capitaine n'insiste pas, et le tour passe à Rosemonde, ou à quelqu'un d'autre, peu importe, qui raconte une histoire de canonnière dans la marine, et on rit.",
        "Victorine écoute. Elle écoute toute la nuit, en gardant le feu, et elle regarde les visages. Elle voit l'homme à la jambe cassée qui oublie sa jambe pendant l'histoire de sirène. Elle voit un gabier de dix-neuf ans oublier sa peur pendant l'histoire que la capitaine a fait taire. Elle voit la capitaine oublier le mur. Elle n'a jamais rien prescrit d'aussi efficace.",
        "Vers l'aube, la capitaine vient s'asseoir à côté d'elle, devant les braises, pendant que les autres dorment enfin. « Vous me devez une histoire, docteur, dit-elle. Je vous la réclamerai à Morlenc, devant une vraie bouteille. » Victorine hoche la tête. Elle se demande laquelle elle racontera. Elle s'aperçoit qu'elle a envie de vivre jusque-là pour le savoir.",
      ],
      choices: [{ label: "Garder le feu jusqu'à l'aube", fx: { quest: "ZG" }, back: "A4w_jours" }] },
  },
  extras: {
    quests: [
      { id: "ZG", act: "IV", kind: "annexe", title: "Les contes du siège", start: "ZG_feu", doit: "decameron", echo: ["zg:drole", "zg:vrai", "zg:feu"] },
    ],
  },
};
