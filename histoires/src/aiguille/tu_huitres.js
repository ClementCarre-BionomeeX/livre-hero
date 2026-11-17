// L'Île Folle-Aiguille · side story « L'écailler du bac » (owes its question to Maupassant's Mon oncle Jules: what is a
// poor relation worth to a family that has been living on the hope of his fortune?). Act II, the ship's boy at
// Morlenc: hired for a Sunday to carry the baskets of a clerk's family on the sailing ferry to the isle of Lanvaon, the
// boy hears about the uncle who went to the Islands and wrote, ten years ago, that he was rich. On board, an old
// oyster-opener in rags. The father turns grey. The mother sends the boy to ask the man's name. It is the uncle. The
// boy tells the family before the daughter's fiancé (tu:dit), tells the uncle that his brother is there (tu:frere), or
// lies to the family and leaves the old man a tip of everything in his pockets (tu:tait). Wired in A2m_jours.
module.exports = {
  passages: {
    TU_dimanche: { act: "II", title: "L'écailler du bac", place: "quai_hollandes", ambiance: "ville",
      fx: { meet: "ponthou" },
      text: [
        "Maître Gobert te loue pour un dimanche, à deux sous l'heure, à une famille qui a besoin de bras pour ses paniers. « C'est de l'argent propre, dit-il. Tu portes, tu te tais, tu souris. Et tu me rapportes la moitié. »",
        "La famille Ponthou t'attend sur le quai du bac, endimanchée de la tête aux pieds, comme pour une noce. Le père, monsieur Ponthou, est commis principal à la Compagnie des Bancs, un petit homme à favoris gris, aux souliers trop étroits. La mère est grande, sèche, avec un chapeau à plumes et une voix qui compte. Deux filles : l'aînée, Eulalie, vingt-huit ans, qui a attendu longtemps ; la cadette, Aglaé, dix-neuf ans, qui est jolie et qui le sait. Et le fiancé de Aglaé, un jeune clerc de notaire à lorgnon, que toute la famille couve des yeux comme un œuf d'or.",
        "Le bac part pour l'île de Lanvaon, de l'autre côté de la rade, où l'on va le dimanche manger des crêpes et regarder la mer. C'est une grosse barque pontée, à voile carrée, où l'on tient à trente, serrés. Tu portes deux paniers, un parapluie, un châle et un tabouret pliant.",
        "Dès le départ, monsieur Ponthou tire de sa poche une lettre usée, pliée en huit, et la lit à voix haute au fiancé, pour la dixième fois peut-être. Une lettre de son frère Yvon, parti aux Îles il y a vingt ans, qui écrivait, il y a dix ans : *Je suis riche. Je reviendrai bientôt, et je ferai votre bonheur à tous.* Depuis, plus rien. Mais on l'attend. On l'attend chaque dimanche sur le quai, en regardant les grands navires. Le fiancé hoche la tête. On sent que la lettre a beaucoup compté dans la demande en mariage."
      ],
      choices: [
        { label: "Porter les paniers sur le pont du bac", to: "TU_ecailler" }
      ] },
    TU_ecailler: { act: "II", title: "L'écailler du bac", place: "quai_hollandes", ambiance: "mer",
      text: [
        "À l'avant du bac, assis sur un tonneau, un vieil homme vend des huîtres aux passagers. Il les ouvre au couteau, d'un coup de poignet, et les tend sur un plat d'étain avec un citron coupé. Il est maigre, voûté, rasé de travers, vêtu d'une vareuse rapiécée qui a été bleue, avec des mains crevassées, noires de vase, qui tremblent un peu entre deux huîtres.",
        "Monsieur Ponthou veut offrir des huîtres au fiancé. C'est élégant, les huîtres, en bateau. Il s'approche. Il en commande une douzaine. Il regarde l'homme les ouvrir.",
        "Et il pâlit. Il pâlit d'un coup, sous ses favoris, et il recule de deux pas, avec la douzaine d'huîtres sur son plat d'étain, et il revient vers sa femme d'une démarche de somnambule.",
        "Ils parlent bas, tous les deux, à l'arrière, avec des têtes de conspirateurs. La mère se retourne vers l'avant, regarde l'écailler longtemps, entre ses paupières plissées. Puis elle t'appelle d'un doigt."
      ],
      choices: [
        { label: "Aller voir ce qu'elle te veut", to: "TU_mission" }
      ] },
    TU_fiance: { act: "II", title: "L'écailler du bac", place: "quai_hollandes", ambiance: "mer",
      text: [
        "Le fiancé s'appelle monsieur Morvan-Laz. Il est deuxième clerc chez un notaire de la Haute-Ville, et il le dit dans la première phrase, comme on montre son passeport. Il mange les huîtres d'une manière savante, en renversant la tête, le petit doigt levé, et il commente chacune, comme un vin.",
        "Il te prend pour confident, puisque tu es là et que tu portes son verre. Il t'explique qu'un mariage est une association. Que la jeune personne est charmante, certes, mais qu'on n'épouse pas une jeune personne : on épouse une famille, un avenir, des espérances. Que les espérances de la famille Ponthou sont aux Îles, dans le sucre, et que le sucre est une valeur sûre, quoi qu'on en dise.",
        "Il boit. Il essuie son lorgnon. Il ajoute, à mi-voix, que l'oncle a quarante-huit ans, d'après la lettre, qu'il est célibataire, d'après la lettre, et qu'il a le teint jaune des colonies, d'après la lettre, ce qui, entre nous, ne promet pas une longue vieillesse. Il sourit. Il a de très petites dents.",
        "Tu reprends le verre vide. Tu te dis que tu n'aimerais pas être l'oncle Yvon, ni la cadette, ni le sucre."
      ],
      choices: [
        { label: "Rejoindre la mère, qui t'attend", back: "TU_mission" }
      ] },
    TU_mission: { act: "II", title: "L'écailler du bac", place: "quai_hollandes", ambiance: "mer",
      text: [
        { first: true, text: "Elle te glisse un sou dans la main. Elle a une voix de fer, très basse." },
        { first: true, text: "« Va demander au marchand d'huîtres son nom. Discrètement. Tu lui demandes d'où il vient, depuis quand il fait ce métier, s'il a de la famille. Tu fais l'enfant curieux. Et tu reviens me le dire, à moi, sans que personne entende. Surtout pas monsieur. » Elle désigne du menton le fiancé, qui mange une huître avec un petit doigt en l'air." },
        { first: true, text: "Derrière elle, monsieur Ponthou s'est assis sur un rouleau de cordage, la lettre pliée en huit à la main, et la regarde comme un homme qui regarde une carte de navigation fausse." },
        { again: true, text: "La mère t'attend, le sou dans la main, avec ses yeux plissés vers l'avant du bac." }
      ],
      choices: [
        { label: "Porter d'abord son verre de vin blanc au fiancé, qui mange ses huîtres", to: "TU_fiance", hide: { seen: "TU_fiance" } },
        { label: "Aller parler à l'écailler", to: "TU_nom" }
      ] },
    TU_iles: { act: "II", title: "L'écailler du bac", place: "quai_hollandes", ambiance: "mer",
      text: [
        "Il rit, d'un petit rire sans dents. « On la perd comme on la gagne, dit-il. Sans s'en apercevoir. »",
        "Il raconte. La plantation, sur une île où la terre est si rouge qu'on dirait de la viande. Les cannes plus hautes qu'un homme à cheval. Le moulin, la chaudière, l'odeur de sucre cuit qui monte le soir, si épaisse qu'on la mâche. Il avait une maison à colonnes, un cheval blanc, un associé qui jouait du violon. Il écrivait à son frère, ces années-là, des lettres de quatre pages.",
        "Puis la fièvre jaune a pris la moitié des ouvriers en un mois. L'associé est parti, une nuit, avec le violon et la caisse. La chaudière a éclaté. Le feu a pris aux cannes, et le vent l'a porté jusqu'à la maison à colonnes. Il a regardé brûler tout ça depuis la route, sur son cheval blanc, et puis il a vendu le cheval pour payer les procès.",
        "« Le plus dur, dit-il, c'est d'avoir écrit, avant, qu'on avait tout. Perdre, ça s'apprend. On ne peut plus écrire, après. On ne sait pas comment commencer la lettre. » Il ouvre une huître. « Alors on ouvre des huîtres. Ça, on sait comment commencer. »"
      ],
      choices: [
        { label: "Revenir à côté de son tonneau", back: "TU_nom" }
      ] },
    TU_nom: { act: "II", title: "L'écailler du bac", place: "quai_hollandes", ambiance: "mer",
      fx: { meet: "yvon" },
      text: [
        { first: true, text: "Tu t'assieds sur le pont, à côté de son tonneau. Il t'offre une huître, pour rien, parce que tu es un mousse et qu'il en a été un. Tu la manges. Elle a le goût de la mer et du cuivre." },
        { first: true, text: "Il parle volontiers. Il parle comme parlent ceux à qui personne ne parle. Il s'appelle Yvon. Yvon Ponthou. Il est parti jeune, aux Îles, sur un trois-mâts. Il a fait fortune, oui, là-bas, une vraie, dans le sucre, un moment. Puis la fièvre, un associé, un incendie, un procès, et il a tout perdu en un an. Il est revenu il y a trois ans, sur un navire où il a payé son passage en lavant le pont. Il ouvre des huîtres sur le bac. Il couche dans une soupente de Lanvaon, chez le patron." },
        { first: true, text: "Tu lui demandes s'il a de la famille. Il ouvre une huître, lentement. « Un frère, dit-il. À Morlenc. Un homme bien. Commis, je crois. Je lui ai écrit, autrefois, quand j'étais riche, que je reviendrais faire son bonheur. » Il pose l'huître sur le plat. « Je ne suis pas allé le voir. On ne va pas faire le bonheur des gens avec un couteau à huîtres. »" },
        { first: true, text: "Il regarde vers l'arrière du bac, sans le savoir, droit vers la famille en habits du dimanche, sans les reconnaître. Ses yeux sont très faibles. Il dit : « Il a peut-être des enfants, maintenant. Des filles. J'aurais aimé les voir. »" },
        { first: true, text: "À l'arrière, la mère te fait signe. Monsieur Ponthou a la tête dans les mains. Le fiancé, qui ne se doute de rien, demande une deuxième douzaine." },
        { again: true, text: "Le vieil homme ouvre ses huîtres, d'un coup de poignet, en regardant la mer de ses yeux faibles." }
      ],
      choices: [
        { label: "Lui demander comment on perd une fortune en un an", to: "TU_iles", hide: { seen: "TU_iles" } },
        { label: "Aller à l'arrière et dire tout haut qui il est", fx: { flag: "tu:dit" }, to: "TU_dit" },
        { label: "Dire au vieil homme que son frère est là, à l'arrière", fx: { flag: "tu:frere" }, to: "TU_frere" },
        { label: "Mentir à la mère, et laisser au vieil homme tout ce que tu as", fx: { flag: "tu:tait" }, to: "TU_tait" }
      ] },
    TU_dit: { act: "II", title: "L'écailler du bac", place: "quai_hollandes", ambiance: "mer",
      text: [
        "Tu reviens vers l'arrière, et tu le dis. Pas bas, comme la mère voulait. Tout haut, pour que tout le monde entende : il s'appelle Yvon Ponthou, il a fait fortune et il l'a perdue, il ouvre des huîtres, il a un frère commis à Morlenc, et il aurait aimé voir ses nièces.",
        "Le silence tombe sur l'arrière du bac comme un seau d'eau. Eulalie porte la main à sa bouche. Aglaé devient écarlate. Le fiancé enlève son lorgnon, l'essuie, le remet, et regarde l'avant du bac avec beaucoup d'attention, comme on regarde un compte qui ne tombe pas juste. La mère te fixe avec une haine pure, parfaite, que tu n'oublieras pas.",
        "Et monsieur Ponthou se lève. Il se lève lentement, sur ses souliers trop étroits, la lettre pliée en huit dans la main. Il traverse tout le bac, entre les passagers, jusqu'au tonneau. Il dit : « Yvon. » L'écailler lève ses yeux faibles, et le reconnaît à la voix. Ils restent là, les deux frères, devant le plat d'étain, sans s'embrasser, sans rien dire, parce qu'ils sont de cette race d'hommes qui ne savent pas.",
        "Le fiancé de Aglaé descend du bac à Lanvaon, prétend une migraine, et prend le premier bac du retour, seul. Aglaé pleure toute l'après-midi sur les galets. Eulalie, l'aînée, celle qui a attendu longtemps, va s'asseoir près de son oncle, et elle lui demande de lui apprendre à ouvrir les huîtres. Elle s'y coupe deux fois. Elle rit."
      ],
      choices: [
        { label: "Rentrer à Morlenc par le bac du soir", fx: { quest: "TU" }, back: "A2m_jours" }
      ] },
    TU_frere: { act: "II", title: "L'écailler du bac", place: "quai_hollandes", ambiance: "mer",
      text: [
        "Tu le lui dis, tout bas, à côté du tonneau : votre frère est là. À l'arrière. Le petit homme à favoris gris, avec la lettre à la main. Et ses deux filles. Et le fiancé de la plus jeune.",
        "Le vieil homme ne regarde pas tout de suite. Il finit d'ouvrir son huître. Il la pose sur le plat. Puis il lève les yeux, et il plisse ses yeux faibles, longtemps, vers l'arrière. Et tu le vois comprendre : le petit homme pâle, la lettre, la femme qui te fait des signes, la tête dans les mains.",
        "« Ah, dit-il. Il m'a vu. » Il sourit, d'un sourire très doux. « Il m'a vu, et il a eu peur. C'est bien naturel. Je lui ai promis la fortune et je lui apporte des huîtres. »",
        "Il s'essuie les mains sur sa vareuse. Il prend le plat d'étain, avec une douzaine d'huîtres ouvertes, les plus belles, et il traverse le bac, lentement, jusqu'à l'arrière. Il s'arrête devant la famille. Il tend le plat au fiancé, avec une petite courbette. « Pour la noce, dit-il. De la part d'un ami de la famille, qui a connu le frère de monsieur, aux Îles. Un homme riche, très riche, qui pense à vous tous. Il n'a pas pu venir. Il vous fait dire qu'il est heureux. »",
        "Puis il retourne à son tonneau. Monsieur Ponthou le regarde partir, la bouche ouverte, la lettre à la main. Il ne se lève pas. Le fiancé mange les huîtres, ravi. Le soir, sur le quai de Morlenc, en te payant tes deux sous l'heure, monsieur Ponthou te donne, en plus, sans un mot, la lettre pliée en huit. Tu ne sais pas quoi en faire. Tu la gardes."
      ],
      choices: [
        { label: "Rentrer à Morlenc par le bac du soir", fx: { quest: "TU" }, back: "A2m_jours" }
      ] },
    TU_tait: { act: "II", title: "L'écailler du bac", place: "quai_hollandes", ambiance: "mer",
      text: [
        "Tu reviens vers la mère. Tu lui dis, tout bas, que le marchand d'huîtres s'appelle Le Goarnig, qu'il est de Lanvaon depuis toujours, qu'il n'a jamais quitté la rade, et qu'il n'a pas de famille. Tu le dis bien. Tu as eu, à la Basse-Fosse, de bons maîtres.",
        "La mère te regarde longtemps, entre ses paupières plissées. Puis elle respire. « Tu vois, dit-elle à son mari, tout bas. Une ressemblance. » Monsieur Ponthou hoche la tête, comme un homme qui accepte une erreur de calcul qui l'arrange. Il remet la lettre dans sa poche. Il ne regarde plus l'avant du bac de toute la traversée.",
        "À Lanvaon, quand tout le monde descend, tu traînes. Tu reviens au tonneau. Tu vides tes poches dans la main crevassée du vieil homme : le sou de la mère, les deux sous du matin, tout ce que tu as. Il regarde la monnaie. Il te regarde. « C'est beaucoup, pour une huître, dit-il. » Tu lui dis que c'est un pourboire. Il dit qu'on ne lui en a jamais donné, de pourboire, depuis trois ans. Il dit merci, avec une grande dignité, comme un monsieur.",
        "Le soir, sur le quai de Morlenc, monsieur Ponthou te paie tes deux sous l'heure. Il compte bien. Il ne te regarde pas. Tu rapportes la moitié à maître Gobert, qui trouve la somme maigre, et qui te demande ce que tu as fait du reste. Tu dis que tu as mangé des huîtres."
      ],
      choices: [
        { label: "Rentrer à bord", fx: { quest: "TU" }, back: "A2m_jours" }
      ] }
  },
  extras: {
    people: {
      ponthou: { name: "monsieur Ponthou", aka: ["le commis de la Compagnie des Bancs"], qui: "Commis principal à la Compagnie des Bancs de Morlenc, père de deux filles, qui attend chaque dimanche le retour d'un frère riche." },
      yvon: { name: "Yvon Ponthou", aka: ["l'écailler du bac"], qui: "Ancien marin revenu des Îles ruiné, qui ouvre des huîtres sur le bac de Lanvaon." }
    },
    quests: [
      { id: "TU", act: "II", kind: "annexe", title: "L'écailler du bac", start: "TU_dimanche", doit: "mononcle", echo: ["tu:dit", "tu:frere", "tu:tait"] }
    ]
  }
};
