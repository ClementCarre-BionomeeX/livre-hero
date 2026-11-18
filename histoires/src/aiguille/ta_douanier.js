// L'Île Folle-Aiguille · side story « La lettre du douanier » (owes its question to Goethe's The Sorrows of Young Werther:
// when a young man in love with a married woman decides that his life is over, who has the right to hold him back, and
// how?). Act I, the mousse at the Fanal: Fulgence Dérien, the young customs officer of Brigadier Fouques's post, who
// drinks his cider at the Fanal every evening without touching it, gives the child a sealed letter for Mathilde Lagadic,
// the miller's wife at Varnèse, « to be delivered tomorrow, not before ». He has given away his books and his dog. The
// child understands. The child delivers the letter tonight (ta:porte), wakes the father (ta:pere), or follows him alone to
// the cliff and stays there with him all night (ta:veille). Wired in A1_jours.
module.exports = {
  passages: {
    TA_cidre: { act: "I", title: "La lettre du douanier", place: "fanal_salle", ambiance: "village",
      fx: { meet: "derien" },
      text: [
        "Fulgence Dérien est le plus jeune douanier du poste du brigadier Fouques. Il a vingt-trois ans, des cheveux blonds trop longs pour le règlement, un uniforme qu'il porte comme un déguisement, et une habitude qui fait rire la salle : il commande un pichet de cidre chaque soir, au Fanal, s'assied près de la fenêtre qui donne sur la route de Varnèse, et ne le boit pas. Il lit. Des poèmes, dans de petits livres qu'il garde dans sa vareuse. Le père Pochon dit qu'il est amoureux. Le père Pochon dit ça de tout le monde.",
        "Ce soir-là, il n'a pas de livre. Il a donné ses livres, dit-il, à l'instituteur de Varnèse, ce matin. Il a donné son chien, un épagneul noir et blanc qui le suit partout, à un pêcheur de la grève. Il est calme, très calme, plus calme qu'on ne l'a jamais vu, et il te sourit quand tu poses le pichet devant lui, d'un sourire doux, reposé, comme celui des gens qui ont fini un long travail.",
        "Au moment de partir, il te fait signe. Il sort de sa vareuse une lettre cachetée, et une pièce d'argent, beaucoup trop grosse pour une commission. La lettre est adressée à Madame Mathilde Lagadic, au moulin de Varnèse. Il te demande de la porter demain matin. Demain. Pas avant. Il insiste sur ce mot avec une douceur qui te glace. Puis il remet son chapeau, salue ton père d'un signe de tête, et sort. Il prend le sentier de la falaise. Le poste de douane est de l'autre côté.",
      ],
      choices: [{ label: "Regarder la lettre, sous la lampe du comptoir", to: "TA_lettre" }] },
    TA_lettre: { act: "I", title: "La lettre du douanier", place: "fanal_salle", ambiance: "nuit",
      text: [
        "Tu ne l'ouvres pas. Tu n'en as pas besoin. Tu sais qui est Mathilde Lagadic : la femme du meunier de Varnèse, une grande femme brune de vingt-cinq ans qui rit fort et qui chante en tamisant la farine, mariée depuis trois ans à un homme bon, lourd et poudré de blanc, qui l'adore. Tu l'as vue au marché, avec Zélie. Tu as vu aussi, au marché, le douanier blond qui achetait des pommes à l'étal d'à côté, sans les regarder, en la regardant.",
        "Tu repenses aux livres donnés. Au chien donné. À la pièce trop grosse. À demain, pas avant. Au sentier de la falaise, qui ne mène nulle part, sauf au bord. Tu sens ton cœur cogner. Tu as seize ans, et tu sais, sans que personne te l'ait appris, ce que fait un homme qui range ses affaires et qui dit au revoir à tout le monde avec un sourire reposé.",
        "La salle se vide. Ton père essuie les verres derrière le comptoir, la jambe raide appuyée sur un tabouret, et ne te regarde pas. Zélie monte se coucher. Le Gabier ronfle déjà, là-haut, dans la chambre de la mer. Dehors, la nuit est noire, sans lune, avec un vent de terre qui siffle dans les ajoncs. La falaise est à un quart d'heure. Tu as la lettre dans la main.",
      ],
      choices: [
        { label: "Courir à Varnèse, porter la lettre cette nuit même", fx: { flag: "ta:porte" }, to: "TA_porte" },
        { label: "Montrer la lettre à ton père, et tout lui dire", fx: { flag: "ta:pere" }, to: "TA_pere" },
        { label: "Prendre une lanterne, et le suivre seul{e} sur la falaise", fx: { flag: "ta:veille" }, to: "TA_veille" },
      ] },
    TA_porte: { act: "I", title: "La lettre du douanier", place: "route_varnese", ambiance: "nuit",
      text: [
        "Tu cours. Deux lieues, dans le noir, sur la route de Varnèse, avec la lettre serrée contre ta poitrine et le vent dans le dos. Tu tombes deux fois. Tu arrives au moulin à minuit, hors d'haleine, et tu frappes à la porte à grands coups, comme on frappe pour un incendie. Le meunier ouvre, en chemise, une chandelle à la main. Derrière lui, sa femme, enveloppée d'un châle. Tu tends la lettre. Tu dis qu'il faut la lire maintenant. Tu dis : la falaise.",
        "Mathilde Lagadic lit la lettre debout, à la chandelle de son mari. Elle devient blanche. Elle la lui tend. Il la lit. Tu vois son gros visage poudré de farine se défaire, lentement, de la colère à la stupeur, puis à autre chose. Puis il décroche sa veste, prend la lanterne de l'écurie, et dit à sa femme de mettre ses sabots. Il dit : « Vite. » Il ne dit rien d'autre.",
        "Vous revenez tous les trois, au pas de course, dans la nuit. Le meunier devant, avec la lanterne. Vous le trouvez au bord, assis sur une pierre, face à la mer noire, les bras autour des genoux. Il n'a pas encore bougé. Il attend, peut-être, comme on attend le courage. Quand il voit la lanterne, il se lève d'un bond. Quand il voit qui la porte, il se met à trembler.",
        "C'est le meunier qui parle. Pas la femme. Le meunier pose la lanterne par terre, s'approche, et prend le douanier dans ses bras, comme on prend un enfant qui s'est perdu. Il le tient longtemps. Mathilde reste en arrière, son châle serré, et pleure. Puis le meunier dit, d'une grosse voix enrouée, qu'on va rentrer, tous, au moulin, et boire quelque chose de chaud, et qu'on parlera demain. Ils redescendent. Tu restes seul{e} sur la falaise, avec la lanterne qu'ils ont oubliée. Tu as livré une lettre d'amour au mari. Tu ne sais pas encore ce que ça va coûter, à qui. Tu sais que personne, cette nuit, n'est tombé.",
      ],
      choices: [{ label: "Rentrer au Fanal avant l'aube", fx: { quest: "TA" }, back: "A1_jours" }] },
    TA_pere: { act: "I", title: "La lettre du douanier", place: "fanal_salle", ambiance: "nuit",
      text: [
        "Tu poses la lettre sur le comptoir, devant ton père. Tu lui dis tout : les livres, le chien, la pièce, demain pas avant, le sentier. Lazare Hersant t'écoute sans t'interrompre, en essuyant le même verre. Puis il pose le verre. Il ne prend pas la lettre. Il la regarde. Il dit, très bas : « Ah. » Il a l'air de quelqu'un qui reconnaît une chose qu'il a déjà vue.",
        "Il décroche sa vieille vareuse de la Maraude, celle qu'il ne met jamais, et prend sa canne. Il te dit de rester là, et de garder la salle. Tu protestes : sa jambe, la falaise, la nuit. Il dit que sa jambe a vu pire. Il dit qu'un garçon de vingt-trois ans qui veut mourir n'écoute pas un enfant de seize ans, mais qu'il écoute quelquefois un vieil infirme qui boite, parce qu'il se demande comment on fait pour continuer, avec une jambe pareille. Il sort dans la nuit. Tu l'entends longtemps, la canne et la jambe, sur les cailloux du sentier.",
        "Il rentre à l'aube. Seul. Il est trempé de rosée, gris de fatigue, et il boite plus que jamais. Il s'assied près de l'âtre éteint. Il dit que le petit est rentré au poste. Il dit qu'ils ont parlé toute la nuit, assis sur une pierre, au bord. Il ne dit pas de quoi. Il dit seulement qu'à un moment, il lui a raconté la Maraude, et la balle, et ce qui a suivi, quelques années plus tard, quand lui aussi s'était assis au bord d'une falaise, une nuit, avec une jambe qui ne servait plus à rien, et une fille à Morlenc qui ne voulait plus le voir.",
        "Tu ne savais pas. Tu le regardes. Il ne te regarde pas. Il dit que ce qui l'a fait redescendre, cette nuit-là, c'était un vieux pêcheur qui passait par là, et qui s'est assis à côté de lui sans rien dire, jusqu'au matin. Il dit que ta mère, il l'a rencontrée deux ans plus tard. Il dit qu'il faut qu'on soit quelqu'un qui passe, quelquefois. Puis il prend la lettre, et la jette au feu, sans l'ouvrir. Il dit que le petit lui a demandé de la brûler. Il dit qu'on ne parlera plus de cette nuit. Il se lève, et va ouvrir les volets. Tu n'en reparles jamais. Tu y penses souvent.",
      ],
      choices: [{ label: "Remonter dormir une heure", fx: { quest: "TA" }, back: "A1_jours" }] },
    TA_veille: { act: "I", title: "La lettre du douanier", place: "falaise", ambiance: "nuit",
      text: [
        "Tu prends la lanterne de la cuisine, et tu sors par la porte de derrière, sans bruit. Le sentier de la falaise est étroit, entre les ajoncs, et le vent de terre te pousse dans le dos, vers le bord. Tu marches vite. Tu ne cours pas, pour ne pas lui faire peur. Tu le trouves au bout du sentier, sur la grande pierre plate où les amoureux de Pointe-aux-Corneilles viennent graver leurs noms. Il est assis, face au noir. Il entend tes pas. Il se retourne. Il voit la lanterne, et ton visage.",
        "Il te dit de rentrer. Gentiment. Tu dis non. Tu t'assieds sur la pierre, à côté de lui, à une longueur de bras, et tu poses la lanterne entre vous. Il te dit que tu ne comprends pas. Tu dis que c'est vrai. Il te dit que ce n'est pas ton affaire. Tu dis que c'est vrai aussi. Il te demande ce que tu veux. Tu dis que tu veux rester assis{e} là. C'est tout. Il rit, un petit rire cassé. Il dit que tu es têtu{e}. Il dit qu'il a toute la nuit. Tu dis que toi aussi.",
        "Alors il parle. Il parle de Mathilde, d'abord, longtemps, de son rire au marché, de la farine dans ses cheveux, du seul jour où elle lui a parlé, pour lui rendre trop de monnaie. Puis il parle d'autre chose. De sa mère, à Morlenc, qui le croit heureux. De ses poèmes. Du chien. Il parle de plus en plus lentement. Tu écoutes. Tu as froid. La lanterne baisse. Tu ne bouges pas. À un moment, il se tait. Tu crois qu'il s'est endormi. Il pleure.",
        "L'aube vient. Une ligne grise, puis rose, sur la mer, à l'est. Les mouettes se réveillent et tournent au-dessus de vous en criant. Fulgence Dérien regarde la mer devenir bleue. Il dit qu'il avait oublié qu'elle faisait ça, le matin. Il te demande la lettre. Tu la lui rends. Il la déchire en petits morceaux, très petits, et les laisse partir dans le vent, vers la mer. Puis il se lève, raide de froid, et te tend la main pour t'aider à te lever. Il dit qu'il va aller rechercher son chien. Il dit merci. Il dit que tu es la personne la plus têtue qu'il ait jamais rencontrée. Vous redescendez ensemble. Tu ne sais pas ce que tu as fait. Tu sais que tu n'as rien fait d'autre que rester. Tu commences à penser que c'est parfois la seule chose à faire, et la plus difficile.",
      ],
      choices: [{ label: "Rentrer au Fanal avant que ton père se réveille", fx: { quest: "TA" }, back: "A1_jours" }] },
  },
  extras: {
    people: {
      derien: { name: "Fulgence Dérien", aka: ["le jeune douanier", "le douanier blond"], qui: "Plus jeune douanier du poste du brigadier Fouques, qui commande chaque soir au Fanal un cidre qu'il ne boit pas." },
    },
    quests: [
      { id: "TA", act: "I", kind: "annexe", title: "La lettre du douanier", start: "TA_cidre", doit: "werther", echo: ["ta:porte", "ta:pere", "ta:veille"] },
    ],
  },
};
