// L'Île Folle-Aiguille · side story « La dame de bronze » (owes its question to La Vénus d'Ille: when a thing does harm
// and nothing can explain it, what does one write in the report?). In the orchard of the Miséricorde, the men digging
// a latrine bring up a bronze Virgin of the old colony, green, with a hard face. Simon Tarlet, to play at stones more
// freely, slips his betrothal ring onto her finger; in the evening the finger has closed on it. At dawn Tarlet is found
// at the foot of the statue, his ribs staved in, alive, saying she held him. The doctor writes what she writes
// (yd:mutins, yd:chute, yd:inexplique), and the statue is melted into balls (yd:fondue), given back to the earth
// (yd:enterree), or left standing (yd:debout). Wired in A4w_jours.
module.exports = {
  passages: {
    YD_fouille: { act: "IV", title: "La dame de bronze", place: "misericorde", ambiance: "chateau",
      text: [
        "Au fond du verger, là où la capitaine a fait creuser une fosse pour les latrines, les pelles rencontrent quelque chose de dur à quatre pieds sous la terre rouge, et sonnent. On croit d'abord au trésor ; tout le monde accourt. Ce n'est pas le trésor. C'est une femme.",
        "Une statue de bronze, couchée sur le dos dans la terre, plus grande qu'une femme vivante, que la colonie de la Miséricorde avait dû dresser jadis au-dessus du port, et que quelqu'un, la nuit du massacre ou une autre nuit, a jetée dans un trou. On la redresse avec des cordes, à six. Elle est verte, d'un vert profond de vieux cuivre, avec des coulées noires sur les joues comme des larmes séchées. C'est une Vierge, à en juger par le manteau et le croissant de lune sous ses pieds. Personne n'a jamais vu une Vierge avec ce visage.",
        "Il est beau. C'est ce qui est le plus pénible. Il est d'une beauté hautaine, dédaigneuse, presque cruelle ; les yeux, incrustés d'argent, ont gardé tout leur éclat sous la terre, et ils regardent un peu au-dessus des têtes, avec une expression d'ironie méchante, comme si la dame savait sur chacun de ceux qui la regardent une chose honteuse, et s'en amusait. Les marins, qui ont l'habitude de se signer devant les Vierges, lèvent la main, et la redescendent, et ne savent plus quoi en faire.",
        "On la laisse debout au bout du verger, adossée à un oranger, faute de mieux. L'après-midi, entre deux corvées, les hommes jouent au palet devant elle, sur la terre battue. Simon Tarlet, qui gagne, et qui a dans la main droite une bague de fiançailles en argent, trop large, achetée à Morlenc pour une fille de Kerverzot, ôte la bague pour mieux lancer, cherche où la poser, et, en riant, la passe au doigt de la dame de bronze. « Garde-la-moi, la belle. Tu n'en feras rien. »",
        "Victorine, qui passe avec ses seaux, voit la scène, et elle a, sans savoir pourquoi, un frisson à la nuque, comme lorsqu'on ouvre une porte dans une maison vide.",
      ],
      choices: [
        { label: "Lui dire de reprendre sa bague, tout de suite", to: "YD_bague" },
        { label: "Hausser les épaules, et porter l'eau aux blessés", to: "YD_bague" },
      ] },
    YD_bague: { act: "IV", title: "La dame de bronze", place: "misericorde", ambiance: "nuit",
      text: [
        "Le soir, Tarlet revient chercher sa bague. Il revient seul, puis il revient avec deux autres, puis avec une lanterne. Victorine, qu'on est venu chercher pour un pansement, le trouve au pied de la statue, la lanterne levée, très pâle.",
        "« Regardez, docteur. Regardez son doigt. »",
        "Elle regarde. L'annulaire de bronze, qui était droit à midi, est replié. Pas beaucoup. Assez. La bague d'argent est prise dans le pli, comme dans un poing qui se ferme, et elle ne bouge plus quand on tire dessus, et elle ne tourne plus.",
        "« Le métal a joué, dit Victorine. Le soleil l'a chauffé tout l'après-midi, la fraîcheur du soir le contracte. Cela s'explique. — Vous l'aviez vu, ce doigt, à midi ? — Non. » Elle ne l'avait pas vu. Personne ne l'avait vu. Tout le monde se souvient pourtant qu'il était droit.",
        "On décide d'attendre le jour, et de scier le doigt. La lanterne s'en va. La dame reste dans le noir, au bout du verger, avec la bague, et ses yeux d'argent, quand on se retourne, accrochent un instant la lueur de la lanterne qui s'éloigne, et la gardent, et la renvoient, longtemps après qu'on a cessé de l'éclairer.",
      ],
      choices: [{ label: "Aller dormir, mal", to: "YD_aube" }] },
    YD_aube: { act: "IV", title: "Le matin", place: "misericorde", ambiance: "chateau",
      text: [
        "Un cri, avant l'aube. Victorine court, en chemise, sa trousse à la main.",
        "Tarlet est couché au pied de la statue, sur le dos, les bras en croix, la bouche pleine d'écume rosée. Il respire, à petits coups, en sifflant. Elle ouvre sa chemise. Les côtes sont enfoncées des deux côtés, régulièrement, à la même hauteur, sans une écorchure, sans une ecchymose de coup : une empreinte large et lisse, comme si on l'avait serré, très longtemps, contre quelque chose de très dur.",
        "Il ouvre les yeux. Il la reconnaît. Il dit, avec une peine infinie : « Elle m'a pris. J'étais venu… la bague… elle m'a pris dans ses bras, docteur. Elle était froide. Elle était si lourde. » Puis il s'évanouit.",
        "Au-dessus de lui, la dame de bronze est debout contre son oranger, exactement comme la veille, le doigt replié sur la bague. Mais il y a, à ses pieds, dans la terre battue, deux traces profondes et parallèles, comme celles que laisserait une chose très lourde, si elle avait fait un pas, puis l'autre, puis était revenue.",
        "Et sur le bronze de sa poitrine, à hauteur d'homme, une tache sombre, encore humide : la salive de Tarlet.",
      ],
      choices: [{ label: "Le faire porter à la sacristie, et le soigner", to: "YD_rapport" }] },
    YD_rapport: { act: "IV", title: "Le rapport", place: "misericorde", ambiance: "chateau",
      text: [
        "Tarlet vivra, si les côtes cassées ne crèvent pas le poumon. Il délire. Il a peur des lanternes. Victorine a tenu toute la matinée à son chevet, et quand il s'endort enfin, la capitaine Ribaud entre dans la sacristie, s'assied sur un coffre, et demande, pour le livre de bord : « Qu'est-ce que j'écris ? »",
        "Victorine réfléchit. Elle connaît la médecine, et rien dans la médecine ne serre un homme de cette façon. Une poutre, un arbre, une vague contre un bordé, peut-être. Il n'y a ni poutre, ni arbre, ni vague au bout du verger. Il y a une statue. Il y a, de l'autre côté du ravin, une quinzaine de mutins qui savent manier un madrier, et qui ont toutes les raisons de vouloir faire peur.",
        "« Les hommes disent que c'est elle, dit la capitaine. Ils ne veulent plus aller au verger. Ils veulent la jeter au ravin, ou la faire fondre pour en tirer des balles. Le bronze, ça fait de mauvaises balles. Ça fait de bonnes histoires. Qu'est-ce que j'écris, docteur ? »",
      ],
      choices: [
        { label: "« Écrivez : attaqué de nuit par des hommes de la plage. »", fx: { flag: "yd:mutins" }, to: "YD_mutins" },
        { label: "« Écrivez : tombé de l'oranger, en cherchant sa bague. »", fx: { flag: "yd:chute" }, to: "YD_chute" },
        { label: "« Écrivez la vérité : je ne sais pas. »", fx: { flag: "yd:inexplique" }, to: "YD_inexplique" },
      ] },
    YD_mutins: { act: "IV", title: "Le rapport", place: "misericorde", ambiance: "chateau",
      text: [
        "La capitaine l'écrit. Elle relit. Elle hoche la tête : c'est une explication utile. Une explication qui fait de la peur une colère, et de la colère une garde plus attentive aux remparts. Avant midi, toute la chapelle sait que les mutins ont rampé de nuit jusqu'au verger pour écraser un homme seul, et chacun a pris son mousquet un peu plus serré, et regarde le ravin avec des yeux neufs.",
        "Victorine sait qu'elle a menti. Elle ne sait pas sur quoi. C'est une sorte de mensonge qu'elle n'avait encore jamais fait, et elle découvre qu'il pèse exactement le même poids que les autres.",
      ],
      choices: [{ label: "Et la statue ?", to: "YD_statue" }] },
    YD_chute: { act: "IV", title: "Le rapport", place: "misericorde", ambiance: "chateau",
      text: [
        "La capitaine l'écrit. Elle relit. Elle lève un sourcil. « Un oranger de douze pieds. Une chute sur le dos. Les côtes enfoncées des deux côtés, à la même hauteur. » Elle referme le livre. « Personne n'y croira, docteur. — Non. Mais personne n'aura rien à faire de ce qu'il ne croit pas. On croit ce qu'on veut, entre soi, à voix basse ; dans un livre de bord, il faut une chute. »",
        "La capitaine sourit, d'un sourire bref, presque admiratif. « Vous auriez fait un bon capitaine. Vous mentez avec méthode. »",
      ],
      choices: [{ label: "Et la statue ?", to: "YD_statue" }] },
    YD_inexplique: { act: "IV", title: "Le rapport", place: "misericorde", ambiance: "chateau",
      text: [
        "La capitaine la regarde longtemps. Puis elle écrit, en effet : *Le matelot Tarlet trouvé à l'aube au fond du verger, les côtes enfoncées. Cause inconnue. Le médecin du bord déclare ne pas savoir.*",
        "« Vingt ans que je tiens ce livre, dit-elle, et c'est la première fois que j'y écris qu'un médecin ne sait pas. » Elle sèche l'encre. « C'est sans doute la phrase la plus honnête qu'il contienne. Ce n'est pas celle qui me rassure le plus. »",
        "Victorine retourne au chevet de Tarlet. Elle s'aperçoit qu'elle évite, en traversant la cour, de regarder vers le fond du verger. Elle s'arrête. Elle regarde. La dame est là, contre l'oranger. Elle a toujours la même ironie dans ses yeux d'argent. Victorine soutient le regard, par principe, aussi longtemps qu'elle peut. Ce n'est pas très longtemps.",
      ],
      choices: [{ label: "Et la statue ?", to: "YD_statue" }] },
    YD_statue: { act: "IV", title: "La dame de bronze", place: "misericorde", ambiance: "chateau",
      text: [
        "Les hommes attendent dans la cour, en groupe, sans armes, comme une délégation. Le plus vieux d'entre eux parle pour eux, le bonnet à la main : on ne dormira plus avec cette chose au fond du verger. La capitaine se tourne vers Victorine. Le malade est à elle ; la statue, dit-elle, va avec le malade.",
      ],
      choices: [
        { label: "La faire fondre dans la forge de la cour, et couler des balles", to: "YD_fondue" },
        { label: "La rendre à son trou, face contre terre, et reboucher", to: "YD_enterree" },
        { label: "« Elle reste debout. On ne se rend pas à une statue. »", to: "YD_debout" },
      ] },
    YD_fondue: { act: "IV", title: "Le bronze", place: "misericorde", ambiance: "nuit",
      text: [
        "Il faut deux jours pour la casser à la masse, et une nuit entière pour en fondre les morceaux dans un creuset de fortune, sur la vieille forge de la colonie qu'on a remise en état. Le bronze coule rouge, puis blanc, et se fige dans les moules en chapelets de balles vertes. Le visage est fondu en dernier ; personne n'a voulu le casser, on l'a jeté entier dans le creuset, et il a mis longtemps à disparaître, les yeux d'argent flottant à la surface du métal en fusion, toujours ironiques, jusqu'au bout.",
        "Il reste la bague. Elle n'a pas fondu : l'argent fond plus bas que le bronze, et pourtant elle est là, au fond du creuset refroidi, intacte, noire, et elle ne tourne plus sur aucun doigt. Tarlet ne veut pas la reprendre. On la jette au ravin.",
        "Les balles de bronze sont distribuées aux tireurs du mur. Ils les chargent en dernier, quand ils n'en ont plus d'autres. Aucun ne dit pourquoi.",
      ],
      choices: [{ label: "Retourner aux blessés", fx: { flag: "yd:fondue" }, back: "A4w_jours" }] },
    YD_enterree: { act: "IV", title: "La terre", place: "misericorde", ambiance: "nuit",
      text: [
        "On la couche dans son trou, face contre terre, avec les cordes, à six, comme on l'a sortie. Personne ne veut lui toucher le visage. On rebouche. On tasse la terre rouge à coups de talon, longtemps, plus qu'il ne faut. Quelqu'un plante dessus une croix de deux branches. Quelqu'un d'autre l'arrache, en disant qu'on ne met pas de croix sur ça.",
        "La bague est restée à son doigt, sous la terre, à quatre pieds. Tarlet dit qu'il la sent, la nuit, qui serre.",
      ],
      choices: [{ label: "Retourner aux blessés", fx: { flag: "yd:enterree" }, back: "A4w_jours" }] },
    YD_debout: { act: "IV", title: "La dame de bronze", place: "misericorde", ambiance: "chateau",
      text: [
        "Victorine traverse la cour, va jusqu'au fond du verger, et se plante devant la dame de bronze, les bras croisés, sous les yeux de tous les hommes. Elle la regarde dans ses yeux d'argent. Elle dit, assez fort pour qu'on l'entende de la cour : « Madame, vous êtes une statue. J'ai soigné des vivants plus méchants que vous. »",
        "Puis elle revient. Les hommes la regardent revenir avec un mélange de respect et de pitié, comme on regarde quelqu'un qui vient de défier la foudre et qui ne sait pas encore s'il l'a fait.",
        "La statue reste debout contre son oranger, jusqu'à la fin du siège. Personne ne va plus au fond du verger. Les oranges y pourrissent sur l'arbre. Certaines nuits, les sentinelles du mur jurent qu'elles ont entendu, de ce côté, un bruit de pas très lourds, très lents, qui s'arrêtent dès qu'on lève la lanterne.",
      ],
      choices: [{ label: "Retourner aux blessés", fx: { flag: "yd:debout" }, back: "A4w_jours" }] },
  },
  extras: {
    quests: [
      { id: "YD", act: "IV", kind: "annexe", title: "La dame de bronze", start: "YD_fouille", doit: "venusdille", echo: ["yd:fondue", "yd:enterree", "yd:debout"] },
    ],
  },
};
