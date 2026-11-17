// L'Île Folle-Aiguille · side story « Le souper sur la dalle » (owes its question to Dom Juan: does a man who mocks
// the dead owe them anything, and is fear worth a repentance?). Act IV, the chapel, after the crypt: Aymar Lesquer, a
// handsome gabier of the loyal watch, a debtor in every port, walks on the slab that everyone walks round, pours his
// wine on it and invites the forty-three to supper at midnight. At midnight, three knocks answer from below. Victorine
// has the slab lifted (vt:ouvre), sends Lesquer down alone to beg pardon (vt:pardon), or lets him finish his supper
// (vt:laisse). Wired in A4w_jours, once the crypt has been found.
module.exports = {
  passages: {
    VT_souper: { act: "IV", title: "Le souper sur la dalle", place: "misericorde", ambiance: "nuit",
      fx: { meet: "lesquer" },
      text: [
        "Il y a, dans toute garnison assiégée, un homme qui rit trop fort. À la chapelle, c'est Aymar Lesquer, gabier de la bordée de tribord, vingt-cinq ans, une belle figure de médaille un peu usée aux angles, des boucles noires qu'il entretient au suif de chandelle, et des dettes dans tous les ports où la Cormorane a relâché, dettes d'argent et dettes d'une autre nature, qu'il énumère volontiers, le soir, au feu du chœur, en comptant sur ses doigts. Il en manque toujours. Il recommence.",
        { if: { seen: "XY_crypte_sceller" }, text: "Ce soir-là, il a bu la ration de deux hommes, la sienne et celle d'un blessé qui n'en voulait plus. Il se lève, sa timbale à la main, et il va se planter au milieu du chœur, sur la dalle que Fréville a scellée de son pouce, celle dont tout le monde fait le tour depuis la prière de la capitaine. Il y piétine un peu, pour qu'on voie bien. Le mortier crisse sous ses talons." },
        { if: { not: { seen: "XY_crypte_sceller" } }, text: "Ce soir-là, il a bu la ration de deux hommes, la sienne et celle d'un blessé qui n'en voulait plus. Il se lève, sa timbale à la main, et il va se planter au milieu du chœur, sur la dalle de la crypte, que Fréville a remise en place après la visite de la médecin et dont tout le monde fait le tour sans en parler. Il y piétine un peu, pour qu'on voie bien." },
        "« Mesdames, messieurs, dit-il vers ses pieds, avec une révérence de maître à danser. Quarante-trois, m'a-t-on dit. Une belle tablée. Vous recevez peu, je crois. » Il verse un fond de vin sur la pierre, qui le boit tout de suite, sans laisser de trace. « Voilà pour l'apéritif. Je vous invite à souper. Ce soir, à minuit, ici même. Le couvert sera mis. Vous m'excuserez pour le menu : c'est le siège. »",
        "Quelques rires, autour du feu, minces, qui s'éteignent vite. Benoît Quémeneur, le second, dit sans lever les yeux de son épissure que la plaisanterie a assez duré. Lesquer lui répond qu'aucune plaisanterie ne dure assez, et que c'est bien là leur seul défaut.",
      ],
      choices: [{ label: "Aller s'asseoir à côté de lui, et lui demander à quoi il croit", to: "VT_credo" }] },
    VT_credo: { act: "IV", title: "Le souper sur la dalle", place: "misericorde", ambiance: "nuit",
      text: [
        "Il se rassied au feu, ravi d'avoir un public qui sache lire. Ce qu'il croit ? Il croit à ce qui se boit et à ce qui se paie. Au vent, quand il souffle. Au biscuit, quand il n'a pas de vers. Le reste, il le laisse aux curés, qui en vivent, et aux veuves, qui en meurent. Il a vu, dit-il, des noyés, des pendus, des fiévreux, des hommes coupés en deux par une poulie : aucun ne s'est relevé pour lui réclamer quoi que ce soit. Les morts sont les seuls créanciers honnêtes. Ils ne viennent jamais.",
        "Victorine lui fait remarquer, du ton dont elle parlerait d'une fracture, qu'il a pris la peine de piétiner une dalle pour des gens qui ne viennent jamais. Il rit, et il convient que c'est bien observé, et que c'est précisément pour cela : on ne se moque pas de ce qui n'existe pas, on se moque de ce qui fait peur aux autres, pour leur rendre service. Il leur montre le chemin. Il dit qu'il est, en somme, une sorte de médecin, lui aussi.",
        "Elle le regarde. Sous le rire, il a les mains très tranquilles, trop tranquilles, posées à plat sur ses genoux, comme on les pose pour qu'elles ne bougent pas. Elle a vu ces mains-là chez des hommes qu'on allait amputer et qui assuraient qu'ils n'avaient pas mal.",
        "À minuit moins le quart, il se lève, va chercher une gamelle, une cuillère, la bouteille, et une chandelle. Il s'installe en tailleur au milieu de la dalle. Il met le couvert. Le chœur est devenu très silencieux. Même les blessés, dans la sacristie, se sont tus.",
      ],
      choices: [{ label: "Attendre minuit avec les autres, au feu", to: "VT_minuit" }] },
    VT_minuit: { act: "IV", title: "Le souper sur la dalle", place: "misericorde", ambiance: "nuit",
      text: [
        "Minuit, à la montre de la capitaine, qu'elle tient ouverte dans sa paume sans rien dire. Lesquer lève sa timbale vers le vide. « Vous êtes en retard, dit-il. C'est bien les gens de qualité. »",
        "Trois coups. Sous la dalle. Sourds, espacés, très nets, comme on frappe à une porte quand on sait qu'on est attendu. Ils montent par la pierre et on les sent dans les pieds avant de les entendre. Puis le silence. Le feu craque. Quelqu'un, derrière Victorine, récite un Ave à toute vitesse, en avalant les mots.",
        "Lesquer est resté la timbale levée. Une seconde, deux. Victorine voit sa pomme d'Adam monter et descendre. Puis il éclate de rire, d'un rire plus haut que le premier, et il frappe trois fois la dalle du talon de sa botte. « Entrez ! »",
        "Trois coups lui répondent. Exactement les mêmes.",
        { if: { seen: "XY_crypte_sceller" }, text: "Fréville, le charpentier, est blanc comme sa chaux. Il dit, à voix basse, qu'il a scellé cette dalle lui-même, et que rien, en dessous, ne bouge plus depuis vingt et un ans. Il dit qu'il l'a vu." },
        { if: { not: { seen: "XY_crypte_sceller" } }, text: "Fréville, le charpentier, est blanc comme un drap. Il dit, à voix basse, qu'il était dans la crypte avec la médecin, qu'il a vu les quarante-trois, et que rien, en dessous, ne bouge plus depuis vingt et un ans. Il dit qu'il l'a vu." },
        "Tout le monde regarde Victorine. Elle est la seule, ici, qui soit descendue et qui ait des mots pour ce qu'il y a en bas. La capitaine aussi la regarde, et referme sa montre.",
      ],
      choices: [
        { label: "Faire lever la dalle, tout de suite, et descendre à la lanterne", fx: { flag: "vt:ouvre" }, to: "VT_ouvre" },
        { label: "Exiger de Lesquer qu'il descende seul rendre la visite qu'il doit", fx: { flag: "vt:pardon" }, to: "VT_pardon" },
        { label: "Le laisser finir son souper, puisqu'il l'a voulu", fx: { flag: "vt:laisse" }, to: "VT_laisse" },
      ] },
    VT_ouvre: { act: "IV", title: "Le souper sur la dalle", place: "misericorde", ambiance: "souterrain",
      text: [
        { if: { seen: "XY_crypte_sceller" }, text: "Fréville refuse d'abord, puis prend sa masse, parce que c'est elle qui le demande. Le mortier saute par plaques. Deux barres de fer, quatre hommes. La dalle se soulève avec un soupir d'air froid qui couche la flamme des chandelles." },
        { if: { not: { seen: "XY_crypte_sceller" } }, text: "Deux barres de fer, quatre hommes. La dalle se soulève avec un soupir d'air froid qui couche la flamme des chandelles." },
        "Elle descend la première. Lesquer descend derrière elle, parce qu'il ne peut pas faire autrement sans perdre la face, et elle l'entend respirer par la bouche. En bas, rien n'a bougé. Les quarante-trois sont là où elle les a laissés, couchés, recroquevillés, serrés, avec leurs boutons et leurs boucles de souliers. Elle lève la lanterne. Elle attend.",
        "Trois coups. Tout près. Au fond, à gauche, là où la voûte rejoint le roc. Elle s'approche à genoux, entre les os. Il y a, dans le rocher, une fissure de la largeur d'une main, d'où monte un souffle humide et salé, et le bruit, très lointain, de la mer. Dans la fissure, coincé, un galet gros comme un poing. Quand la houle entre dans l'éperon, en bas, l'air pousse, et le galet cogne contre la pierre, trois fois, à chaque série de vagues. À minuit, la marée était haute.",
        "Lesquer rit, derrière elle, d'un rire où il y a surtout du soulagement. « La marée, docteur ! Mes convives, c'est la marée ! » Il le crie vers l'escalier, pour ceux d'en haut.",
      ],
      choices: [{ label: "Regarder le galet de plus près", to: "VT_galet" }] },
    VT_galet: { act: "IV", title: "Le souper sur la dalle", place: "misericorde", ambiance: "souterrain",
      text: [
        "Elle regarde de plus près. Le galet ne vient pas de la mer. Il est entouré d'un chiffon, une bande d'étoffe brune, durcie par le sel, nouée serré, pour qu'il cogne sans glisser. Quelqu'un l'a coincé là. Quelqu'un l'a calé avec soin, en tâtonnant dans le noir, et autour de la fissure, dans le roc tendre, il y a des marques de grattage, des centaines, faites avec des ongles ou une boucle de soulier, comme on gratte autour d'une serrure.",
        "Ils ont trouvé la fissure. Ils ont senti l'air. Ils ont cru qu'il y avait quelqu'un, de l'autre côté, dehors. Ils ont frappé, avec ce qu'ils avaient. Puis ils ont calé le galet pour que la mer frappe à leur place, quand ils n'en auraient plus la force. Et la mer frappe, depuis vingt et un ans, trois coups par houle, pour quarante-trois personnes qui demandaient qu'on leur ouvre.",
        "Elle le dit à Lesquer. Simplement, avec les mots du carnet. Il ne rit plus. Il regarde le chiffon. Il dit, très bas, que c'était donc ça, l'invitation. Qu'il avait cru lancer la sienne, et qu'il répondait à la leur, avec vingt et un ans de retard.",
        "Ils remontent. Fréville scelle la dalle, au mortier, en lissant les joints de son pouce. Le galet est resté où il était : elle n'a pas eu le cœur de l'ôter. Désormais, les nuits de grande marée, on l'entend frapper, et chacun, au chœur, sait ce que c'est. On ne prie plus. On se tait, le temps des trois coups, comme on se découvre au passage d'un convoi. Lesquer aussi. Il est le premier à se taire.",
      ],
      choices: [{ label: "Retourner au feu du chœur", fx: { quest: "VT" }, back: "A4w_jours" }] },
    VT_pardon: { act: "IV", title: "Le souper sur la dalle", place: "misericorde", ambiance: "souterrain",
      text: [
        "Elle lui dit, devant tout le monde, qu'il a lancé une invitation, qu'on lui a répondu, et qu'un homme bien élevé rend la visite qu'on lui fait. Seul. Avec une chandelle. Et qu'il aura la bonté, en bas, de présenter ses excuses à ses hôtes, puisqu'il les a fait attendre. Quelqu'un, au feu, rit nerveusement. Lesquer la dévisage. Elle vient de le prendre à son propre jeu, et il le sait, et il ne peut plus reculer sans que tout le chœur le voie reculer.",
        { if: { seen: "XY_crypte_sceller" }, text: "Fréville casse le mortier à la masse, sans un mot. On soulève la dalle. Lesquer prend la chandelle, salue la compagnie d'une révérence, et descend en sifflant un air de cabaret." },
        { if: { not: { seen: "XY_crypte_sceller" } }, text: "On soulève la dalle. Lesquer prend la chandelle, salue la compagnie d'une révérence, et descend en sifflant un air de cabaret." },
        "Le sifflement s'arrête au bas des marches. On voit la lueur de la chandelle bouger contre la voûte, s'éloigner, se fixer quelque part, au fond. Puis plus rien. Pas un mot. Les trois coups reviennent, une fois, et ne reviennent plus. Le chœur attend. Un quart d'heure. Benoît Quémeneur dit qu'il descend le chercher. Victorine lui pose la main sur le bras.",
        "Lesquer remonte au bout d'une demi-heure. La chandelle est éteinte ; il l'a gardée à la main. Il a de la poussière sur les genoux, sur ses deux genoux. Il ne dit rien. Il va reprendre la bouteille et la gamelle sur le rebord de la dalle, très soigneusement, comme on débarrasse une table après un repas, et il les rapporte au feu, et il s'assied.",
        "Le lendemain, il rit de nouveau, aussi fort, de ses dettes et de ses femmes ; le siège n'a que faire d'un gabier converti. Mais il fait le tour de la dalle, comme les autres. Et quand on lui demande ce qu'il a vu en bas, il répond qu'il a présenté ses excuses, et qu'on les a acceptées, et qu'il ne savait pas que ça se faisait encore. Victorine se demande si la peur vaut un repentir. Elle se dit que, de loin, à la lueur d'une chandelle, on les confond facilement, et que, pour ceux d'en bas, c'est peut-être la même chose.",
      ],
      choices: [{ label: "Retourner au feu du chœur", fx: { quest: "VT" }, back: "A4w_jours" }] },
    VT_laisse: { act: "IV", title: "Le souper sur la dalle", place: "misericorde", ambiance: "nuit",
      text: [
        "Elle dit, assez haut pour qu'il l'entende, qu'il a invité ses hôtes, et qu'on n'interrompt pas un souper. Puis elle retourne à la sacristie, à ses blessés, qui ont peur, et qui la réclament. Derrière elle, elle entend Lesquer reprendre sa cuillère, et la gratter dans la gamelle, très fort, pour qu'on l'entende manger.",
        "Il soupe. Il porte des santés. À la capitaine, aux dames de Morlenc, aux créanciers absents, aux quarante-trois. Les trois coups reviennent, de loin en loin, pendant une heure, et il trinque à chaque fois avec la dalle, et il compte les coups, et il leur répond. Le chœur s'est vidé autour de lui. On s'est couché dans les bas-côtés, la tête sous les couvertures. Vers deux heures, la chandelle s'éteint. Personne ne se lève pour la rallumer.",
        "À l'aube, Victorine le trouve endormi sur la dalle, en chien de fusil, la joue contre la pierre, la bouteille vide à côté de lui. Il a les cheveux pleins de poussière grise. Elle le secoue. Il ouvre les yeux, la regarde sans la reconnaître, une seconde, puis il sourit de toutes ses dents et dit qu'il a très bien soupé, que la compagnie était choisie, et que ses hôtes l'ont prié de revenir.",
        "Il ne dit jamais ce qui s'est passé après la chandelle. Il demande, ce jour-là, à prendre le quart du clocher, la nuit, le plus exposé, celui dont personne ne veut, et il le garde jusqu'à la fin du siège, en riant toujours aussi fort, mais en haut, loin du chœur. Victorine pense qu'elle a laissé un homme aller au bout de sa bravade, et que c'est le seul moyen d'en connaître le fond. Elle pense aussi qu'il est remonté de ce fond avec quelque chose qu'il ne lâchera plus, et qu'elle ne saura jamais si c'était de la peur, du vin ou de la politesse.",
      ],
      choices: [{ label: "Retourner aux blessés", fx: { quest: "VT" }, back: "A4w_jours" }] },
  },
  extras: {
    people: {
      lesquer: { name: "Aymar Lesquer", aka: ["le gabier qui rit"], qui: "Gabier de la bordée de tribord, endetté dans tous les ports, rieur de la garnison." },
    },
    quests: [
      { id: "VT", act: "IV", kind: "annexe", title: "Le souper sur la dalle", start: "VT_souper", doit: "domjuan", echo: ["vt:ouvre", "vt:pardon", "vt:laisse"] },
    ],
  },
};
