// L'Île Folle-Aiguille · side story « Le feu de la grève » (owes its question to Turgenev's Bezhin Meadow: what do the
// stories men tell each other in the dark say about the men who tell them?). Act III, the ship's boy at the islet:
// three sailors of the water party and the boy spend a night on the beach beside the barrels, to finish the filling
// at dawn. The cry from the forest comes back, and around the fire each man tells his story of the dead, and each
// story is his own. The boy tells one in turn (sg:conte), laughs at them all (sg:moque), or keeps the fire alone
// while they sleep (sg:veille). Optional: SG_rioual. Wired in A3n_ilot.
module.exports = {
  passages: {
    SG_feu: { act: "III", title: "Le feu de la grève", place: "ilot", ambiance: "nuit",
      fx: { meet: "rioual" },
      text: [
        "La source de la crique coule si lentement qu'à la nuit tombée, il reste six barriques à remplir. La chaloupe est repartie au navire avec les pleines. On a laissé à terre trois hommes et toi, avec les vides, un fanal, du biscuit, et l'ordre de finir à l'aube. On allume un feu de bois flotté au-dessus de la laisse de mer. Le bois flotté brûle bleu, à cause du sel, et il siffle en brûlant, comme s'il avait encore quelque chose à dire.",
        "Il y a là le vieux Jos Rioual, gabier depuis quarante ans, qui ne parle presque jamais et qui fume une pipe si courte qu'elle lui roussit la moustache. Il y a Fañch Paugam, vingt ans, beau parleur, qui a des dents blanches et l'habitude de les montrer. Il y a Yann Bodiou, un grand garçon lent et pieux, qui a cousu une médaille de la Vierge dans la doublure de sa vareuse et qui la touche à travers le drap quand il croit qu'on ne le voit pas.",
        "La nuit tombe d'un coup, comme on tire un rideau. Sur la plage, des formes noires, lourdes, sortent de l'eau et montent dans le sable en soufflant : les tortues, qui viennent pondre. Elles passent à dix pas du feu sans le regarder, avec une lenteur de pèlerines. Puis, de la forêt, au-dessus de la crique, le cri monte. Le même qu'au mouillage. Long, aigu, qui pourrait être celui d'un oiseau, ou d'une bête, ou d'un enfant. Il s'arrête net.",
        "Personne ne bouge. Paugam rit, trop fort. Bodiou touche sa médaille. Le vieux Rioual retire sa pipe de sa bouche, regarde le feu, et dit, de sa voix rouillée : « Ça, c'est quelqu'un qui appelle. Et quand quelqu'un appelle, la nuit, il vaut mieux savoir qui. » Puis il remet sa pipe, et il commence."
      ],
      choices: [
        { label: "Écouter les histoires, autour du feu", to: "SG_contes" }
      ] },
    SG_rioual: { act: "III", title: "Le feu de la grève", place: "ilot", ambiance: "nuit",
      text: [
        "Tu vas t'asseoir à côté de lui, plus près du feu, et tu lui demandes, à voix basse, où il a entendu l'histoire des laveuses. Il fume longtemps avant de répondre. Les autres sont partis pisser derrière les barriques, en se tenant compagnie, sans en avoir l'air.",
        "Il dit qu'il l'a entendue de sa grand-mère, comme tout le monde. Puis il dit qu'il l'a vue, aussi. Une fois. Il avait trente ans. Il rentrait d'une campagne de deux ans, et il a pris le raccourci de la grève, la nuit, pour arriver plus vite chez lui. Il a vu une femme qui lavait, à genoux, au bord de l'eau, sous la lune. Elle lui a tendu un drap, sans lever la tête. Il a passé son chemin sans le prendre.",
        "Sa femme était morte depuis trois semaines quand il est arrivé chez lui. On l'avait mise en terre dans un drap qu'elle avait lavé elle-même, avant de se coucher pour la dernière fois. Personne n'avait su où lui écrire.",
        "Il secoue sa pipe contre une pierre. Il dit : « Si j'avais pris le drap, peut-être que je l'aurais aidée à le tordre. Voilà tout. C'est une histoire pour les enfants. » Les deux autres reviennent. Il se tait. Il ne dit plus rien de la nuit."
      ],
      choices: [
        { back: "SG_contes", label: "Retourner près du feu" }
      ] },
    SG_contes: { act: "III", title: "Le feu de la grève", place: "ilot", ambiance: "nuit",
      text: [
        { first: true, text: "Rioual raconte les laveuses de la grève : des femmes qu'on voit, les nuits de lune, à genoux au bord de la mer, qui lavent des draps blancs et chantent sans ouvrir la bouche. Elles lavent le linceul de quelqu'un qui va mourir. Elles demandent au passant de les aider à tordre le drap. Si tu tords dans le même sens qu'elles, tu meurs dans l'année. Si tu refuses, c'est celui que tu aimes. Il raconte ça sans élever la voix, en regardant le feu, comme on lit un acte." },
        { first: true, text: "Paugam raconte, pour faire le malin, l'histoire du matelot noyé qui frappe à la coque, la nuit, en dessous de la ligne de flottaison, trois coups, à l'endroit exact du hamac de celui qui l'a laissé tomber à la mer. Il la raconte en riant. Puis il s'arrête de rire, sans raison, au milieu d'une phrase, et il dit qu'il a sommeil, et il ne dort pas, et il regarde la mer." },
        { first: true, text: "Bodiou, à la fin, raconte une histoire de puits. Un enfant qui est tombé dans le puits d'une ferme, un été, et qu'on n'a pas retrouvé tout de suite, et qui appelle encore, les soirs d'août, du fond de l'eau, avec une petite voix de quatre ans : « Yann ! Yann ! » Il dit le prénom sans s'en apercevoir. Puis il s'en aperçoit. Il devient très rouge. Personne ne lui demande rien. Rioual lui tend sa pipe." },
        { first: true, text: "Et le cri revient, dans la forêt, plus près, cette fois. Les trois hommes se tournent ensemble vers toi, le plus jeune, comme si c'était à ton tour de payer quelque chose." },
        { again: true, text: "Le feu siffle. Les tortues creusent dans le noir. Les trois hommes attendent." }
      ],
      choices: [
        { label: "Demander au vieux Rioual où il a entendu l'histoire des laveuses", to: "SG_rioual", hide: { seen: "SG_rioual" } },
        { label: "Suivre Paugam, qui descend seul au bord de l'eau", to: "SG_paugam", hide: { seen: "SG_paugam" } },
        { label: "Raconter à ton tour une histoire de morts, celle que tu connais le mieux", fx: { flag: "sg:conte" }, to: "SG_conte" },
        { label: "Dire que ce cri est celui d'un oiseau, et rire de leurs histoires", fx: { flag: "sg:moque" }, to: "SG_moque" },
        { label: "Proposer de garder le feu seul, pendant qu'ils dorment", fx: { flag: "sg:veille" }, to: "SG_veille" }
      ] },
    SG_paugam: { act: "III", title: "Le feu de la grève", place: "ilot", ambiance: "nuit",
      fx: { meet: "paugam" },
      text: [
        "Paugam s'est levé en disant qu'il allait voir les tortues. Tu le retrouves au bord de l'eau, debout, les pieds dans l'écume tiède, qui regarde la mer noire. Il ne regarde pas les tortues. Il sursaute quand tu arrives, puis il rit, de ses belles dents blanches, et le rire tombe à côté.",
        "Il dit que l'histoire du noyé, c'est une blague de gaillard d'avant, qu'on raconte aux novices pour leur faire faire des cauchemars. Puis il dit, sans transition, qu'il a fait sa première campagne à quinze ans, sur un caboteur, avec un ami d'enfance, un petit blond qui ne savait pas nager. Qu'un soir de grain, sur la vergue de misaine, le petit blond a glissé, et l'a attrapé par la manche, et que lui, Paugam, a eu peur d'être entraîné, et qu'il a secoué le bras.",
        "Il dit ça d'une traite, vite, comme on vomit. Puis il s'essuie la bouche. Il dit qu'il avait quinze ans, que n'importe qui aurait fait pareil, que le capitaine l'a dit lui-même. Il dit que depuis, il dort dans le hamac le plus haut, contre les barrots, le plus loin possible de l'eau. Il dit qu'il entend frapper quand même.",
        "Il te regarde. Il demande, avec ses dents blanches qui ne sourient plus, si tu vas le répéter. Puis, sans attendre la réponse, il remonte vers le feu en sifflant, et il se remet à rire avant d'arriver à la lumière, pour que les autres l'entendent rire."
      ],
      choices: [
        { back: "SG_contes", label: "Retourner près du feu" }
      ] },
    SG_conte: { act: "III", title: "Le feu de la grève", place: "ilot", ambiance: "nuit",
      text: [
        "Tu racontes l'histoire d'une femme d'aubergiste qui avait la fièvre, dans une chambre au-dessus d'une salle commune, et qui entendait, à travers le plancher, les clients rire et chanter, pendant qu'elle mourait. Tu racontes qu'elle a demandé qu'on ne les fasse pas taire, parce que ça lui tenait compagnie. Tu racontes qu'après, les soirs où la salle chante trop fort, on entend quelqu'un qui marche au-dessus, doucement, pour ne déranger personne.",
        "Tu racontes ça comme un conte. Avec le début, le milieu et la fin, et la voix basse qu'il faut. Tu t'aperçois, au milieu, que ta voix tremble. Tu continues quand même, jusqu'au bout, jusqu'aux pas sur le plancher, et tu te tais.",
        "Personne ne rit. Paugam regarde ailleurs. Bodiou touche sa médaille, puis, après une hésitation, il la découd de sa vareuse avec son couteau, et il te la tend, sans un mot. Le vieux Rioual ne dit rien pendant un long moment. Puis il dit, en regardant le feu : « Elle a eu raison, ta femme d'aubergiste. Il vaut mieux mourir avec du bruit en bas. »",
        "Le cri ne revient plus, de toute la nuit. Les trois hommes s'endorment les uns contre les autres, comme des chiens de ferme. Tu dors aussi, la médaille dans ton poing. À l'aube, en remplissant les barriques, personne ne reparle de la nuit. Mais Rioual, à chaque barrique, te laisse la plus légère."
      ],
      choices: [
        { label: "Remonter sur la plage de l'îlot", fx: { quest: "SG" }, back: "A3n_ilot" }
      ] },
    SG_moque: { act: "III", title: "Le feu de la grève", place: "ilot", ambiance: "nuit",
      text: [
        "Tu ris. Tu dis que ce cri est celui d'un oiseau de nuit, et que les laveuses, les noyés et les enfants des puits, c'est bon pour les veillées de bonnes femmes. Tu le dis avec l'aplomb de tes seize ans, et ça fait du bien à entendre, un moment. Paugam rit avec toi, très fort, soulagé. Bodiou sourit, gêné. Rioual hausse les épaules, et dit que tu as peut-être raison, et qu'il aimerait bien.",
        "On s'endort. Toi aussi, content de toi, le dos au feu.",
        "Tu te réveilles au milieu de la nuit, sans savoir pourquoi. Le feu est presque mort. Les trois hommes dorment. Et à la limite de la lumière rouge, de l'autre côté des braises, il y a quelque chose. Une ombre, debout, immobile, qui regarde le feu. Elle a la hauteur d'un homme. Elle se tient d'une façon qu'aucun homme n'a. Tu sens une odeur de poil mouillé.",
        "Tu retiens ton cri. Tu restes allongé{e}, immobile, les yeux à demi fermés, le cœur dans la gorge, pendant un temps qui n'a pas de mesure. Puis l'ombre recule, sans bruit, et la forêt la reprend. Au matin, tu gardes la nuit pour toi. Tu remplis les barriques. Rioual te regarde, une fois, longuement, comme s'il voyait sur ta figure quelque chose que tu n'y avais pas la veille. Il ne te demande rien."
      ],
      choices: [
        { label: "Remonter sur la plage de l'îlot", fx: { quest: "SG" }, back: "A3n_ilot" }
      ] },
    SG_veille: { act: "III", title: "Le feu de la grève", place: "ilot", ambiance: "nuit",
      text: [
        "Les trois hommes acceptent avec une reconnaissance qu'ils essaient de cacher. Ils s'endorment vite, en tas, Bodiou le premier, Paugam le dernier, qui se retourne longtemps. Tu restes seul{e} devant le feu, avec le fanal, le bois flotté, la mer qui respire dans le noir, et la forêt.",
        "Tu nourris le feu. Les heures passent, longues, épaisses. Les tortues ont fini de pondre ; elles redescendent vers la mer, une par une, laissant dans le sable des traces larges comme des chemins de charrette. Le cri revient deux fois. La première fois, loin. La seconde, si près que tu entends, juste après, une respiration, et une branche qui casse.",
        "Tu jettes une brassée de bois sur les braises. La flamme monte d'un coup, bleue et blanche, en sifflant. Pendant une seconde, tu vois, à l'orée des arbres, deux yeux qui renvoient la lumière, verts, très haut au-dessus du sol. Puis plus rien. Tu restes debout jusqu'à l'aube, le couteau à la main, sans quitter la forêt des yeux.",
        "Au lever du jour, tu descends à l'orée. Dans le sable humide, entre les racines, il y a des traces. Des traces de pieds nus, qui ont la forme de pieds d'homme, sauf l'écartement des orteils, et la profondeur du talon, qui sont faux, d'une manière que tu ne saurais pas dire. Tu les effaces avec ta semelle avant que les autres se réveillent. Tu ne sais pas pourquoi tu fais ça. Tu le fais."
      ],
      choices: [
        { label: "Remonter sur la plage de l'îlot", fx: { quest: "SG" }, back: "A3n_ilot" }
      ] }
  },
  extras: {
    people: {
      rioual: { name: "Jos Rioual", qui: "Vieux gabier de quarante ans de mer, qui fume une pipe si courte qu'elle lui roussit la moustache, et raconte les laveuses de la grève." },
      paugam: { name: "Fañch Paugam", qui: "Matelot de vingt ans, beau parleur aux dents blanches, qui raconte l'histoire du noyé qui frappe à la coque." },
      bodiou: { name: "Yann Bodiou", qui: "Grand matelot lent et pieux, qui porte une médaille cousue dans sa vareuse." }
    },
    quests: [
      { id: "SG", act: "III", kind: "annexe", title: "Le feu de la grève", start: "SG_feu", doit: "prebejine", echo: ["sg:conte", "sg:moque", "sg:veille"] }
    ]
  }
};
