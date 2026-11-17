// L'Île Folle-Aiguille · side story « Le guérisseur de la lande » (owes its question to Molière's Le Médecin malgré
// lui: is a false healer who comforts and does no harm worth less than a true one who leaves tomorrow?). Act III,
// Victorine at Lannoz: Jaffrès, a peat-cutter whom his wife once passed off as a great healer to pay him back for his
// beatings, has been the healer of the moor for two years, with Latin, bread pills and a good deal of luck. Today a girl
// of the moor has an abscess in the thigh that only a blade will save, and her family trusts only Jaffrès. Victorine
// unmasks him (vy:demasque), operates while he recites his Latin and takes the credit (vy:associe), or spends her two
// days teaching him enough to do it himself (vy:apprend). Wired in A3x_lannoz.
module.exports = {
  passages: {
    VY_femme: { act: "III", title: "Le guérisseur de la lande", place: "lannoz", ambiance: "nature",
      fx: { meet: "jaffres" },
      text: [
        "C'est la femme qui raconte, à la fontaine, en tordant son linge, avec une joie si franche que Victorine s'arrête pour l'écouter. Maïwenn Jaffrès, quarante ans, des bras de lavandière et un rire de mouette. Son mari coupait la tourbe, buvait le cidre et la battait le samedi, à heure fixe, comme on remonte une horloge. Il y a deux ans, un domestique du recteur courait la lande en cherchant un rebouteux pour un enfant qui se mourait d'une fièvre. Maïwenn lui a dit que son mari était le plus grand guérisseur du pays, mais qu'il était modeste, et qu'il ne l'avouait que sous le bâton.",
        "On a donc battu Jaffrès, très consciencieusement, dans sa propre tourbière, jusqu'à ce qu'il avoue être guérisseur. Il l'a avoué au quatrième coup. On l'a traîné au chevet de l'enfant. Il a dit du latin, ou ce qu'il croyait être du latin, il a fait ouvrir la fenêtre, chasser les vieilles, il a fait boire de l'eau du puits à l'enfant, beaucoup, parce qu'il ne savait pas quoi faire d'autre. L'enfant a guéri. La fièvre tombait d'elle-même, peut-être. Peu importe : depuis, Jaffrès est le grand guérisseur de la lande. On vient de trois paroisses. On le paie en œufs, en lard, en cidre.",
        "« Et il ne me bat plus, conclut Maïwenn en riant. Un médecin, ça ne bat pas sa femme. Ça fait mauvais effet. » Puis son rire se casse. Elle dit, plus bas, qu'aujourd'hui il y a la petite Gaëlle Le Bec, la fille du sabotier, avec une cuisse grosse comme une barrique, et qu'il lui donne ses pilules de mie de pain depuis cinq jours, et que la petite ne crie plus, et que ça, Maïwenn, ça ne lui plaît pas du tout.",
      ],
      choices: [{ label: "Aller trouver le guérisseur, au cabaret de la lande", to: "VY_cabaret" }] },
    VY_cabaret: { act: "III", title: "Le guérisseur de la lande", place: "lannoz", ambiance: "village",
      text: [
        "Jaffrès tient séance au cabaret, au coin du feu de tourbe, dans un vieil habit noir de notaire qu'on lui a donné en paiement et qui le serre aux épaules. Un homme maigre, au nez rouge, à l'œil vif, qui reçoit les malades entre deux bolées, leur tâte le pouls en regardant le plafond, et prononce des mots superbes : *Ossibus, tourbibus, purgatorium cidrum.* On l'écoute avec ferveur. Victorine s'assied en face de lui avec sa sacoche. Il la voit. Il voit la sacoche. Il pâlit sous son nez rouge.",
        "Il ne nie rien, quand elle lui parle bas. Il est même soulagé, à ce qu'il semble, d'avoir enfin un confrère. Il dit qu'il ne sait rien, absolument rien, qu'il n'a jamais rien su. Mais il dit aussi qu'il a remarqué des choses, en deux ans. Que les malades vont mieux quand on chasse les vieilles et qu'on ouvre la fenêtre. Qu'ils vont mieux quand ils boivent de l'eau propre. Qu'ils vont mieux quand on leur parle en latin, quel qu'il soit. Et qu'il n'a jamais saigné personne, ni purgé, ni rien coupé, parce qu'il aurait eu trop peur. « Je ne guéris personne, madame. Je ne tue personne non plus. Combien de vos confrères de la Faculté peuvent en dire autant ? »",
        "Puis il baisse la voix. La petite Le Bec. Il sait. Il sait depuis trois jours que ses pilules ne font rien, et que la cuisse sent mauvais, et qu'il faudrait un couteau. Il n'ose pas. Il n'ose pas l'avouer non plus : s'il avoue, on le battra de nouveau, à l'envers cette fois, pour qu'il dise qu'il n'est pas guérisseur. Et les parents ne laisseront pas une étrangère toucher la petite. Ils ont confiance en lui. C'est bien le malheur.",
      ],
      choices: [{ label: "Aller voir la petite, avec lui, chez le sabotier", to: "VY_sabotier" }] },
    VY_sabotier: { act: "III", title: "Le guérisseur de la lande", place: "lannoz", ambiance: "nature",
      text: [
        "La maison du sabotier sent le bois vert et la tourbe. Gaëlle Le Bec, douze ans, est couchée dans le lit clos, la cuisse droite rouge, luisante, tendue comme une peau de tambour, brûlante sous la main. Un abcès profond, mûr depuis deux jours, qui va s'ouvrir tout seul vers le dedans si personne ne l'ouvre vers le dehors, et alors ce sera le sang empoisonné, et la fièvre noire, et la fin. Victorine le voit en entrant. Elle le sent. Il reste un jour, peut-être moins.",
        "Le père et la mère se tiennent devant le lit, les bras croisés, entre la petite et l'étrangère. Ils regardent Jaffrès. Ils attendent qu'il parle. Jaffrès regarde Victorine. Victorine regarde la cuisse. La Cormorane part demain soir.",
      ],
      choices: [
        { label: "Dire aux parents, devant lui, qu'il ne sait rien", fx: { flag: "vy:demasque" }, to: "VY_demasque" },
        { label: "Lui souffler de la présenter comme son élève, et opérer pendant qu'il récite", fx: { flag: "vy:associe" }, to: "VY_associe" },
        { label: "Lui mettre le bistouri dans la main, et le guider", fx: { flag: "vy:apprend" }, to: "VY_apprend" },
      ] },
    VY_demasque: { act: "III", title: "Le guérisseur de la lande", place: "lannoz", ambiance: "nature",
      text: [
        "Elle le dit, tranquillement, sans méchanceté : cet homme est coupeur de tourbe, il ne sait rien, il le reconnaît lui-même, et la petite mourra demain s'il continue. Le père se tourne vers Jaffrès. Jaffrès, après un long moment, baisse la tête. Il dit que c'est vrai. Il dit qu'il demande pardon. La mère pousse un cri qui fait trembler le lit clos. Le père décroche un bâton de derrière la porte.",
        "Victorine se met entre eux. Elle dit qu'on battra le guérisseur plus tard, si on y tient, mais qu'il faut d'abord de l'eau bouillie, du linge propre et deux hommes pour tenir la petite. On obéit, par stupeur. Elle ouvre l'abcès. Le pus jaillit jusqu'au chaume. La petite hurle, puis s'évanouit, puis respire. Le soir, la fièvre baisse. Elle vivra. Elle boitera peut-être.",
        "On bat Jaffrès quand même, le lendemain, dans la tourbière, comme la première fois. Pas très fort : on l'aimait bien. Maïwenn ne fait rien pour l'empêcher. Puis elle le ramasse et le ramène à la maison. Le soir, au cabaret, on dit que la lande n'a plus de guérisseur, et qu'on ira désormais chercher le médecin de la ville, à une journée de charrette, et qu'on n'ira pas, parce que c'est trop loin et trop cher. On dit que la médecin de la Cormorane a sauvé une enfant et tué un guérisseur, et qu'on ne sait pas si le compte est bon.",
        "En remontant au canot, Victorine voit Jaffrès, assis devant sa porte, la figure enflée, qui la regarde passer. Il ne lui en veut pas. Il lui fait même un petit signe. Elle se demande combien de fenêtres il aurait encore ouvertes, et combien de vieilles il aurait chassées, et combien de malades auraient bu de l'eau propre, s'il était resté guérisseur.",
      ],
      choices: [{ label: "Retourner à bord", fx: { quest: "VY" }, back: "A3x_lannoz" }] },
    VY_associe: { act: "III", title: "Le guérisseur de la lande", place: "lannoz", ambiance: "nature",
      text: [
        "Elle lui parle à l'oreille. Il comprend vite ; il a le génie de la situation. Il se redresse dans son habit de notaire et annonce aux parents que le cas est grave, très grave, si grave qu'il a fait venir de loin, à grands frais, son élève, une femme savante qu'il a formée lui-même, et qui opérera sous sa direction. Les parents se signent. Ils s'écartent. On n'ose pas contredire un maître qui a une élève.",
        "Pendant que Victorine ouvre l'abcès, Jaffrès se tient au pied du lit, les mains levées, et récite. Il récite tout ce qu'il sait : *Ossibus, tourbibus.* Puis, quand il n'a plus rien, le *Pater* en latin, qu'il connaît, et l'*Ave*, et le début du *Credo*, et un bout de chanson à boire qu'il latinise à mesure. Il ne s'arrête pas une seconde. La mère, fascinée, n'entend pas crier sa fille. Victorine travaille au rythme de cette litanie absurde, et s'aperçoit qu'elle l'aide.",
        "La petite vivra. Le cabaret célèbre le grand guérisseur toute la nuit. Jaffrès boit à la santé de son élève. Victorine, le lendemain, avant de partir, lui laisse sur un papier, en écriture de copiste, cinq choses vraies : ouvrir la fenêtre, faire bouillir l'eau et le linge, ne jamais saigner, ne jamais purger, et quand une chair est rouge, chaude, tendue et qu'elle sent mauvais, envoyer chercher un chirurgien, même à une journée de charrette. Il ne sait pas lire. Maïwenn, elle, sait.",
        "Victorine se dit, en remontant au canot, qu'elle a laissé un faux médecin plus fort qu'avant, et qu'elle a menti à deux parents pour sauver leur fille. Elle se dit aussi que la lande garde un guérisseur qui ne tue personne, et cinq lignes écrites. Elle a connu, à Varnèse, de vrais médecins qui en savaient moins.",
      ],
      choices: [{ label: "Retourner à bord", fx: { quest: "VY" }, back: "A3x_lannoz" }] },
    VY_apprend: { act: "III", title: "Le guérisseur de la lande", place: "lannoz", ambiance: "nature",
      text: [
        "Elle sort le bistouri de sa trousse et le lui met dans la main. Il manque de le laisser tomber. Elle lui dit, en souriant pour les parents, qu'elle est une consœur de passage venue apprendre la méthode de Lannoz, et qu'elle serait honorée de le voir opérer. Les parents rayonnent. Jaffrès est vert. Il tient le bistouri comme on tient une vipère par la queue.",
        "Elle le guide. À voix basse, en langue de ville, pendant qu'il fait semblant de réfléchir. Où chercher le point le plus mou. Comment tendre la peau. Où entrer, combien profond, dans quel sens. Elle met sa main sur la sienne, au moment de couper, juste assez pour qu'elle ne tremble plus. Il coupe. Le pus jaillit. Il recule d'un pas, épouvanté, puis il revient. Il fait le reste, sous sa voix, le drain, la mèche, le linge bouilli. Les parents pleurent. La petite respire.",
        "Victorine passe le reste de ses deux jours avec lui, dans la cuisine de Maïwenn, et elle lui apprend ce qu'on peut apprendre en deux jours à un homme qui ne sait pas lire et qui retient tout. Les fièvres qu'on laisse faire et celles qu'on ne laisse pas. L'eau bouillie. Les os qu'on remet et ceux qu'on ne touche pas. Le jour où il faut avouer qu'on ne sait pas, et envoyer la charrette. Il écoute comme un enfant. Il pose des questions de tourbier, exactes, pratiques, qu'un étudiant n'aurait pas pensé à poser. Le soir du deuxième jour, il lui dit qu'il a peur, maintenant, beaucoup plus qu'avant. Elle lui dit que c'est la première chose qu'on apprend vraiment.",
        "Elle lui laisse son vieux bistouri, celui de Varnèse, dans un étui de cuir. Il le prend à deux mains. Maïwenn, sur le pas de la porte, regarde son mari tenir cet outil, et dit, à mi-voix, qu'elle a fait de lui un guérisseur à coups de bâton, et que cette femme en a fait un autre avec deux jours de patience, et qu'elle ne sait pas encore lequel des deux lui plaira le mieux.",
      ],
      choices: [{ label: "Retourner à bord", fx: { quest: "VY" }, back: "A3x_lannoz" }] },
  },
  extras: {
    people: {
      jaffres: { name: "Jaffrès", aka: ["le guérisseur de la lande"], qui: "Coupeur de tourbe de Lannoz, devenu guérisseur à coups de bâton, par la volonté de sa femme Maïwenn." },
    },
    quests: [
      { id: "VY", act: "III", kind: "annexe", title: "Le guérisseur de la lande", start: "VY_femme", doit: "medecinmalgre", echo: ["vy:demasque", "vy:associe", "vy:apprend"] },
    ],
  },
};
