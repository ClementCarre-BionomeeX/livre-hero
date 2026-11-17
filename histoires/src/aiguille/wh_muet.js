// L'Île Folle-Aiguille · side story « Le chiot du muet » (owes its question to Mumu: what does one owe to the order that
// keeps everyone alive, when it asks a man to kill the only thing he loves?). Act IV, Victorine among the outcasts behind
// the waterfall: Goulven, deaf and mute since birth, the strongest of the camp, has taken in a pup from the wild pack.
// The pup barks at night. The mutineers hunt in the forest below. Jeanne Brasdefer orders Goulven to drown it in the
// basin. Victorine pleads with Jeanne (wh:plaide), offers to cut the dog's voice with a scalpel (wh:voix), or takes the
// pup with her when she goes back to the chapel (wh:emmene). Wired in XS_camp.
module.exports = {
  passages: {
    WH_chiot: { act: "IV", title: "Le chiot du muet", place: "sylve", ambiance: "nature",
      fx: { meet: "goulven" },
      text: [
        "Goulven est le plus grand homme du camp, et le plus doux, et le seul qui n'ait jamais rien dit à personne. Il est né sourd, et muet par voie de conséquence, sur le Saint-Fiacre, au milieu de la traversée, il y a vingt-cinq ans, et il est arrivé sur l'île à l'âge de trois mois dans les bras d'une mère qui est morte la première année. Il porte les charges que deux hommes ne portent pas, il abat les arbres, il remonte les seaux de la cascade, et le soir il s'assied à l'écart, contre la paroi de la grotte, et il regarde le feu, avec un sourire tranquille, comme un homme qui écouterait une musique qu'il est seul à entendre.",
        "Depuis dix jours, il a un chiot. Une petite chose jaune, aux oreilles trop grandes, à la queue en fouet, qu'il a trouvée dans la forêt sous un arbre abattu, près du cadavre de sa mère, une chienne de la meute sauvage prise dans un collet des mutins. Il l'a nourrie de bouillie mâchée, au bout de ses doigts. Il l'a portée dix jours contre sa poitrine, dans sa chemise. À présent, elle le suit partout, en trottinant, en tombant, en se relevant, et quand il s'arrête, elle s'assied sur son pied.",
        "Elle aboie. Elle aboie la nuit, à la lune, aux chauves-souris, au vent dans le rideau de la cascade, d'un petit aboiement aigu, joyeux, qui porte loin dans la forêt, beaucoup plus loin qu'on ne croirait. Goulven ne l'entend pas. Tous les autres l'entendent. Et, en bas, sous la forêt, les mutins de Fargue chassent le cochon sauvage depuis trois jours, de plus en plus près.",
      ],
      choices: [{ label: "S'asseoir près du feu, où l'on discute à voix basse", to: "WH_ordre" }] },
    WH_ordre: { act: "IV", title: "Le chiot du muet", place: "sylve", ambiance: "nuit",
      text: [
        "Jeanne Brasdefer a écouté tout le monde, longtemps, sans rien dire, comme elle fait toujours. Puis elle a tranché. Elle le dit à Victorine sans baisser la voix, puisque celui qu'elle condamne ne l'entendra pas. « Douze ans que nous vivons derrière cette eau sans que personne ne sache où. Douze ans de silence, médecin. Les enfants ici ont appris à pleurer sans bruit avant d'apprendre à parler. Et une chienne de dix jours va nous faire égorger, tous, pour une lune. Demain à l'aube, Goulven la noiera dans la vasque. »",
        "Elle va vers Goulven. Elle s'accroupit devant lui. Ils ont un langage à eux, de gestes, de mimiques, de doigts posés sur la paume. Victorine regarde Jeanne le lui dire : la main sur la bouche, le doigt vers la forêt, le geste de l'égorgement, puis les deux mains qui plongent dans une eau invisible, et qui tiennent, et qui serrent. Goulven regarde les mains. Il regarde le chiot, qui dort sur son pied. Il regarde Jeanne. Il hoche la tête, une fois, lentement, comme un homme qui comprend une chose qu'il savait.",
        "Puis il prend le chiot dans ses bras, et il va s'asseoir contre la paroi, à l'écart, et il reste là, sans bouger, à le regarder dormir, avec son sourire tranquille, qui ne change pas. C'est ce sourire que Victorine ne supporte pas.",
      ],
      choices: [
        { label: "Aller trouver Jeanne, et plaider pour la chienne", fx: { flag: "wh:plaide" }, to: "WH_plaide" },
        { label: "Proposer de lui couper la voix, d'un coup de scalpel", fx: { flag: "wh:voix" }, to: "WH_voix" },
        { label: "Dire à Jeanne que tu l'emportes, quand tu redescendras à la chapelle", fx: { flag: "wh:emmene" }, to: "WH_emmene" },
      ] },
    WH_plaide: { act: "IV", title: "Le chiot du muet", place: "sylve", ambiance: "nuit",
      text: [
        "Elle plaide. Elle dit qu'on peut museler une chienne, l'enfermer la nuit, la dresser ; elle dit que Goulven a tout donné au camp depuis vingt-cinq ans, sa force, ses bras, son dos, et qu'on lui doit au moins ça ; elle dit que l'on peut vivre avec un risque. Jeanne l'écoute jusqu'au bout. « Vous avez raison sur tout, médecin, dit-elle. Et moi, je ne peux pas vous écouter. C'est ça, commander. Plaidez auprès de lui, si vous voulez. C'est lui qui a la chienne. »",
        "Victorine va s'asseoir près de Goulven. Elle n'a pas les gestes. Elle essaie, maladroitement : la main sur son cœur, la main vers le chiot, la tête qu'on secoue, *non*. Il la regarde faire avec une grande bonté, comme on regarde un enfant qui explique la mer à un pêcheur. Puis il lui prend la main, doucement, et la pose sur la tête du chiot, et la retire. Il a décidé. Il l'avait décidé avant qu'elle vienne.",
        "À l'aube, il descend à la vasque, seul, avec le chiot dans sa chemise. Personne ne le suit. Il remonte une heure plus tard, trempé jusqu'aux épaules. Il reprend ses seaux, ses arbres, ses charges, le jour même, comme avant. Le soir, il s'assied contre la paroi et regarde le feu. Il sourit toujours. Victorine, une nuit, l'entend, ou croit l'entendre, faire un bruit avec sa gorge, un petit bruit aigu, joyeux, très bas, le seul son qu'elle lui connaîtra jamais. Elle ne sait pas s'il sait qu'il le fait.",
      ],
      choices: [{ label: "Revenir près du feu", fx: { quest: "WH" }, back: "XS_camp" }] },
    WH_voix: { act: "IV", title: "Le chiot du muet", place: "sylve", ambiance: "nuit",
      text: [
        "Elle l'a vu faire une fois, à la Faculté, sur des chiens de laboratoire que les étudiants faisaient taire pour pouvoir travailler. Deux incisions, au fond de la gorge, dans les cordes. La bête survit. Elle ne crie plus jamais. Victorine se souvient d'avoir trouvé ça monstrueux, à vingt ans. Elle le propose à Jeanne. Jeanne la regarde longtemps, avec une sorte d'horreur respectueuse. Puis elle dit oui.",
        "Il faut l'expliquer à Goulven. C'est Jeanne qui le fait, avec ses mains : le doigt sur la gorge du chiot, un petit geste de couteau, très petit, puis le chiot qui court, qui vit, qui mange, la bouche ouverte, sans bruit. Goulven regarde longtemps. Puis il touche sa propre gorge, à lui, et il rit, d'un rire sans son, qui lui secoue les épaules. Il tend le chiot à Victorine. Il tient sa tête pendant l'opération, avec des mains d'une délicatesse incroyable, et il lui souffle dans le museau pendant qu'elle coupe.",
        "La chienne guérit en quatre jours. Elle court, elle saute, elle joue, elle ouvre la gueule à la lune et aux chauves-souris, et il n'en sort rien qu'un souffle. Elle ne semble pas s'en apercevoir. Goulven non plus, évidemment : il ne l'a jamais entendue aboyer. Pour lui, rien n'a changé. Pour tous les autres, au camp, il y a désormais deux bêtes qui ouvrent la bouche sans bruit, au coin du feu, l'une à côté de l'autre, et qui ont l'air heureuses, et personne n'arrive tout à fait à les regarder.",
      ],
      choices: [{ label: "Revenir près du feu", fx: { quest: "WH" }, back: "XS_camp" }] },
    WH_emmene: { act: "IV", title: "Le chiot du muet", place: "sylve", ambiance: "nuit",
      text: [
        "Jeanne réfléchit. Elle dit que la chapelle est assiégée, qu'une chienne y aboiera aussi, mais que ce sera contre des gens qui savent déjà où elle est. Elle dit que c'est la première bonne idée qu'elle entend depuis le début de la soirée et qu'elle aurait dû l'avoir. Il reste à le dire à Goulven. C'est Jeanne qui le fait : le chiot dans les bras de la médecin, la médecin qui part, loin, vers la mer, et le chiot qui vit.",
        "Goulven comprend. Il garde le chiot contre lui toute la nuit, toutes les nuits qui restent, contre sa poitrine, dans sa chemise, et il lui fabrique un collier, avec une lanière de cuir de cochon et un petit os sculpté où il a gravé, au couteau, des signes que personne ne sait lire, peut-être un nom. Il le passe au cou du chiot le dernier matin. Puis il le tend à Victorine, sans hésiter, d'un seul geste, comme on tend un enfant à quelqu'un qui part.",
        "Au moment où elle s'éloigne sur le sentier, la chienne se met à aboyer, à se débattre, à hurler dans ses bras en regardant en arrière. Victorine se retourne. Goulven est debout à l'entrée de la grotte, dans le rideau de la cascade, immense, trempé, le visage tourné vers elle. Il sourit. Il n'entend rien. Il est le seul, dans toute la forêt, à ne rien entendre, et il sourit.",
      ],
      choices: [{ label: "Revenir près du feu, pour les nuits qui restent", fx: { quest: "WH" }, back: "XS_camp" }] },
  },
  extras: {
    people: {
      goulven: { name: "Goulven", aka: ["le muet", "le grand muet"], qui: "Proscrit né sourd et muet, le plus fort du camp de Jeanne Brasdefer." },
    },
    quests: [
      { id: "WH", act: "IV", kind: "annexe", title: "Le chiot du muet", start: "WH_chiot", doit: "moumou", echo: ["wh:plaide", "wh:voix", "wh:emmene"] },
    ],
  },
};
