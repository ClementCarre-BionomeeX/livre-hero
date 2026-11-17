// L'Île Folle-Aiguille · side story « Les deux petits de la veuve Marzin » (owes its question to Les Pauvres Gens:
// can the poor afford to take in other people's children, and who decides it for them?). Act II, the Basse-Fosse: in a
// room above a net-loft, the widow Marzin, a net-mender, dies of a fever with her two children, Jannic, six, and
// Marivonne, three, asleep beside her. The child, sent upstairs by a neighbour to fetch a borrowed bucket, is the only
// one in the room when she dies, and the one she asks. The child takes the little ones to the Sisters of the
// Basse-Fosse (vm:soeurs), to the fisherman's wife next door, who already has five (vm:voisine), or writes to the
// father at the Fanal, to ask him to take them (vm:fanal). Wired in A2m_bf.
module.exports = {
  passages: {
    VM_seau: { act: "II", title: "Les deux petits de la veuve Marzin", place: "basse_fosse", ambiance: "ville",
      fx: { meet: "marzin" },
      text: [
        "Une femme t'arrête dans la ruelle des Ramendeuses, une grosse femme en sabots, les bras nus et rouges, un enfant sur la hanche et deux autres dans les jupes. « Toi, le mousse, tu as des jambes. Monte chez la Marzin, au-dessus de la saline, et rapporte-moi mon seau. Elle me le rend jamais. » Elle s'appelle la mère Pennec, elle est femme de pêcheur, et elle crie tout ce qu'elle dit, comme si la mer était toujours entre elle et les autres.",
        "Tu montes. Un escalier de bois pourri, raide comme une échelle, au-dessus d'un grenier à filets qui sent le goudron et le poisson sec. La porte est entrouverte. La chambre est une soupente, sous le toit, avec une lucarne, un poêle éteint, des filets en ramendage pendus aux poutres comme des toiles d'araignée géantes. Sur une paillasse, une femme de trente ans, maigre, les yeux brillants, la peau couleur de cire. À côté d'elle, contre elle, sous la même couverture, deux enfants endormis, un petit garçon et une toute petite fille, la joue sur le bras de leur mère.",
        "Elle te voit. Elle ne s'étonne pas. Elle dit, d'une voix qui n'est plus qu'un souffle, que le seau est près du poêle. Puis elle te fait signe d'approcher. Elle te prend la main, d'une main brûlante. Elle a la fièvre des marais, celle qui monte en trois jours et qui ne redescend pas. Elle le sait. Elle dit : « Jannic, six ans. Marivonne, trois. Leur père est au fond de l'eau depuis l'hiver. J'ai personne. Tu es d'un navire. Tu as l'air d'avoir un cœur. » Elle serre ta main. « Trouve-leur quelqu'un. Pas l'hospice. Quelqu'un. »",
      ],
      choices: [{ label: "Rester près d'elle", to: "VM_nuit" }] },
    VM_nuit: { act: "II", title: "Les deux petits de la veuve Marzin", place: "basse_fosse", ambiance: "nuit",
      text: [
        "Tu restes. Tu ne sais pas pourquoi. Tu redescends porter le seau à la mère Pennec, tu lui dis que la Marzin est très malade, et la mère Pennec se signe, et crie qu'elle n'y peut rien, qu'elle a cinq bouches à nourrir et un homme en mer, et qu'elle priera. Tu remontes. Tu allumes le poêle avec les éclats d'une caisse. Tu donnes à boire à la mourante. Les enfants se réveillent, te regardent avec de grands yeux, et ne pleurent pas : ils ont l'habitude des inconnus qui passent.",
        "Elle meurt un peu avant l'aube, sans bruit, entre deux respirations, la main sur la tête du petit garçon. Tu t'en aperçois parce que la main ne bouge plus. Jannic dort. Marivonne, réveillée, joue avec un bout de filet, en chantonnant une chanson sans paroles. Au-dessus de vous, la pluie tambourine sur le toit. Tu restes assis{e} sur le plancher, le dos contre le mur, avec dans la gorge une boule qui ne veut ni monter ni descendre.",
        "Il faut décider. Maître Gobert t'attend à bord pour midi. Les Sœurs de la Basse-Fosse prennent les orphelins, au bout de la rue, dans un grand bâtiment gris aux fenêtres grillagées, d'où l'on entend, à certaines heures, des enfants réciter en chœur. La mère Pennec, en dessous, a cinq enfants, un homme en mer, et un cœur qui crie fort. Et il y a le Fanal, à quatre lieues, avec ton père, sa jambe raide, sa salle vide le matin, et Zélie qui se plaint d'être seule à la cuisine. Tu as trois sous en poche, ceux de la bière. Une lettre coûte deux sous.",
      ],
      choices: [
        { label: "Les conduire chez les Sœurs, au bout de la rue", fx: { flag: "vm:soeurs" }, to: "VM_soeurs" },
        { label: "Descendre frapper chez la mère Pennec, avec les deux petits", fx: { flag: "vm:voisine" }, to: "VM_voisine" },
        { label: "Écrire à ton père, au Fanal, pour lui demander de les prendre", fx: { flag: "vm:fanal" }, to: "VM_fanal" },
      ] },
    VM_soeurs: { act: "II", title: "Les deux petits de la veuve Marzin", place: "basse_fosse", ambiance: "ville",
      text: [
        "Tu prends Marivonne dans tes bras et Jannic par la main, et tu descends la rue sous la pluie. La sœur portière vous ouvre, une grande femme pâle aux mains propres. Elle ne pose pas de questions. Elle en a l'habitude. Elle note les noms dans un registre, et l'âge, et la date, et la cause. Elle dit qu'on enverra quelqu'un pour la mère. Elle prend Marivonne de tes bras avec une adresse de nourrice. Jannic lâche ta main tout seul. Il a compris avant toi.",
        "Avant que la porte se referme, tu vois, au fond d'un long couloir dallé, une rangée de petits lits de fer, alignés comme des barriques dans une cale, et des enfants en tablier gris qui marchent deux par deux, sans parler. C'est propre. C'est chaud. On y mange deux fois par jour. Tu te le répètes en remontant la rue. Tu te le répètes encore à bord, en épissant des cordages, toute la journée.",
        "Le dernier jour, avant l'appareillage, tu repasses devant le bâtiment gris. On entend des enfants réciter en chœur, derrière les fenêtres grillagées, une litanie dont tu ne distingues pas les mots. Tu cherches une voix de six ans. Tu crois la reconnaître. Tu n'en es pas sûr{e}. Tu as fait ce qu'il fallait, ce que tout le monde aurait fait, ce que la Marzin t'avait demandé de ne pas faire. Les trois choses sont vraies à la fois.",
      ],
      choices: [{ label: "Regagner la Basse-Fosse", fx: { quest: "VM" }, back: "A2m_bf" }] },
    VM_voisine: { act: "II", title: "Les deux petits de la veuve Marzin", place: "basse_fosse", ambiance: "ville",
      text: [
        "La mère Pennec ouvre, son cinquième au sein, et regarde les deux petits, mouillés, qui se tiennent par la main sur son seuil. Tu dis que la Marzin est morte. Elle se signe. Elle te regarde. Elle regarde les petits. Elle se met à crier. Elle crie qu'elle n'a pas de quoi, qu'elle a déjà cinq bouches, qu'on mange du pain sec les semaines de tempête, que son homme la tuera, que tout le monde lui met tout sur le dos, que c'est toujours les mêmes, que le bon Dieu devrait avoir honte. Elle crie longtemps.",
        "Puis, toujours en criant, elle prend Marivonne, et la cale sur l'autre hanche, à côté du sien. Puis elle tire Jannic à l'intérieur, par le col, et le pousse vers la table, où ses cinq mangent leur soupe, et elle lui met une cuillère dans la main, et elle crie à son aîné de se pousser. Puis elle te claque la porte au nez. À travers la porte, tu l'entends crier encore, que c'est la dernière fois, la dernière, qu'elle le jure sur la tête de sa mère.",
        "Le soir, tu repasses. Par la fenêtre, tu vois la table, sept enfants autour, et la mère Pennec debout, qui sert la soupe, en criant, une louche pour chacun, la même louche, juste un peu moins pleine. Elle te voit. Elle ouvre la fenêtre et te crie que son homme rentre jeudi, et qu'il va la battre. Puis, plus bas, sans crier, pour la seule fois de ta vie : « Il me battra pas. Il dira rien. Il mangera moins, et il fera semblant d'avoir pas faim. C'est ce qui m'énerve. » Elle referme la fenêtre.",
      ],
      choices: [{ label: "Regagner la Basse-Fosse", fx: { quest: "VM" }, back: "A2m_bf" }] },
    VM_fanal: { act: "II", title: "Les deux petits de la veuve Marzin", place: "basse_fosse", ambiance: "ville",
      text: [
        "Tu demandes à la mère Pennec de garder les petits jusqu'au soir, en jurant que ce n'est que jusqu'au soir. Elle crie, mais elle les prend. Tu cours au bureau de la poste du port. Tu écris, sur le comptoir, avec la plume du commis, en tâchant de ne pas faire de pâtés, la première lettre de ta vie à ton père. Elle est courte. Tu ne sais pas comment lui dire ce que tu demandes, alors tu le dis : deux enfants, six ans et trois ans, une mère morte cette nuit, personne. Tu signes. Tu paies deux sous.",
        "La réponse n'arrive pas. Il n'y a pas de réponse : il y a, le surlendemain, à midi, une carriole de Varnèse qui s'arrête devant la saline, et ton père qui en descend, en boitant, avec sa canne et son chapeau du dimanche, et Zélie, à côté de lui, en coiffe, avec deux couvertures. Il ne te dit rien. Il monte l'escalier pourri, lentement, une marche après l'autre. Il redescend avec Marivonne endormie contre son épaule. Zélie prend Jannic par la main. Le petit regarde ton père comme on regarde une montagne.",
        "Avant de remonter dans la carriole, ton père te regarde, longtemps. Il dit : « Ta mère aurait fait la même chose. » Puis il ajoute, en grimpant, à cause de sa jambe, avec une grimace : « Elle me l'aurait demandé moins poliment. » Zélie rit. La carriole repart. Tu la regardes disparaître au bout de la rue, avec deux petites têtes qui dépassent des couvertures. Tu as maintenant, quelque part, sans l'avoir voulu, un frère et une sœur. Tu ne sais pas encore ce que ça change. Tu sais que ça change tout.",
      ],
      choices: [{ label: "Regagner la Basse-Fosse", fx: { quest: "VM" }, back: "A2m_bf" }] },
  },
  extras: {
    people: {
      marzin: { name: "La veuve Marzin", aka: ["la ramendeuse"], f: true, qui: "Ramendeuse de filets de la Basse-Fosse, mère de deux petits." },
    },
    quests: [
      { id: "VM", act: "II", kind: "annexe", title: "Les deux petits de la veuve Marzin", start: "VM_seau", doit: "pauvresgens", echo: ["vm:soeurs", "vm:voisine", "vm:fanal"] },
    ],
  },
};
