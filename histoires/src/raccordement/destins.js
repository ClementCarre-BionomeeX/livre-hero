// Le Grand Raccordement · the fates. After the dénouement at dawn, what became of the others (epilogue lines, in
// order), then of the people the story follows (the first fate whose condition holds, the last one by default). All of
// them lead to La Grande Fonte, thirty-one years later.
var PRETE = { has: "ange:prete" };
module.exports = {
  endings: {
    soleil: { title: "Le centre" }, idole: { title: "Il a sonné" }, inaccessible: { title: "L'Inaccessible" },
    serment: { title: "Le serment de beurre" }, route: { title: "Born to ride" }, ange: { title: "L'ange de Mirevaux" },
  },
  epilogue: [
    { text: "Octave ne quitte plus le Domaine. Il dit que quelqu'un doit être là si Monsieur appelle, et Monsieur appelle toujours. Il ne parle jamais de la nuit de l'Effondrement. On dit au vestiaire qu'il a vu, cette nuit-là, depuis une fenêtre du palais, deux silhouettes passer dans la cour avec un fardeau qui brillait, et qu'il a tiré le rideau, pour ne pas avoir à l'écrire." },
    { if: { has: "chiot:aboie" }, text: "Monseigneur, le chiot qui n'aboyait jamais, a aboyé une fois, à midi, le jour de l'Effondrement. Il grandit, devient un grand lévrier couleur crème, vit beaucoup plus longtemps que les lévriers n'en ont le droit, et n'aboie plus. On dit qu'il garde son aboiement pour la prochaine fois." },
    { if: { has: "ange:ombre" }, text: "Lumen raconte jusqu'à sa retraite qu'une nuit, dans une cave du Domaine, toutes les petites images d'un ange se sont mises à faire de l'ombre, et qu'il n'a jamais vu un noir pareil. Personne ne le croit. Il cesse d'acheter du beurre." },
    { if: { has: "zenith:connait" }, text: "Phébus garde toute sa vie, dans une boîte, une photographie floue de deux initiales dans la marge d'un registre, et le souvenir d'un visage de garde dans une cave. Il ne les relie jamais. Il pense parfois qu'il aurait dû." },
    { if: PRETE, text: "Pendant des années, on trouve encore, collées sur les murs des villes mortes, des affiches à moitié fondues de l'Ange du Raccordement, un angelot joufflu avec un soleil carré à la bouche. Les motards les arrachent. Ils disent que c'est un faux. Ils ont raison, et c'est bien le pire." },
    { text: "Le pays apprend à vivre sans lumière facturée. Les villes restent en ruines, les voitures aux feux rouges, les horloges sur midi. On allume des feux de pneus aux coins des rues, pour y voir, puis pour l'ambiance. Les très riches restent derrière les grilles dorées du Domaine, qui ne s'ouvrent plus. Les autres prennent la route." },
    { text: "Trente et un ans plus tard, au Carrefour de Mirevaux, l'ange de beurre fond par une canicule plus longue que les autres. On compte les gouttes. Un motard qui crie et un majordome qui se tait finiront par apprendre ce qu'il y a dedans. Le beurre fond. Le chrome reste." },
  ],
  fates: [
    { who: "basile", label: "Basile", list: [
      { id: "gardien", title: "Basile, le gardien", if: { has: "basile=garde" },
        text: "**Basile** garde le socle vide de la Salle de l'Inaccessible pendant trente et un ans, en smoking, muet, au garde-à-vous, à un mètre cinquante. Il connaît encore le règlement par cœur. Il le récite en dedans. Au revers de son smoking, il porte un petit insigne d'émail des Demi-Sel, qu'une moto rouge a déposé un jour, dans une enveloppe, au pied des grilles." },
      { id: "jure", title: "Basile, le serment", if: { has: "basile=serment" },
        text: "**Basile** reste un an à Mirevaux, à saler le beurre dans la cave de la crèmerie, sans un mot. Puis il traverse le désert, à pied, et se présente aux grilles du Domaine. Il devient le gardien d'un socle vide. Il a juré de se taire ; il n'a jamais su faire les choses à moitié. Au revers de son smoking, un petit insigne d'émail des Demi-Sel." },
      { id: "muet", title: "Basile",
        text: "**Basile** ne retrouve jamais sa voix. Il finit gardien au Domaine, parce que c'est le seul métier qu'il connaisse où l'on n'a pas besoin de parler. On lui confie le socle vide de l'Inaccessible. Il le garde comme s'il y avait quelque chose dessus." },
    ] },
    { who: "salee", label: "Salée", list: [
      { id: "mama", title: "Salée, Mama", if: { has: "salee=genoux" },
        text: "**Salée** devient Mama Salée, cheffe du clan des Demi-Sel et prêtresse de l'Enjambeur. Elle sale tout ce qu'elle mange. Ses cheveux roux deviennent gris. Elle porte au cou un reliquaire à beurre. Elle raconte que l'ange est né en une nuit, que le soir il y avait le vide et le matin l'ange, et qu'elle était jeune, et qu'elle dormait. Elle a une fille, rousse, qui partira un jour à seize ans là où l'on ne bouge plus." },
      { id: "cremiere", title: "Salée, la crémière", if: { has: "salee=mere" },
        text: "**Salée** reprend la crèmerie de sa mère, ou ce qu'il en reste : une cave. Elle y invente le demi-sel, plus salé que tout, qui tient au chaud. Les motards viennent l'acheter. Ils l'appellent Mama, d'abord pour rire, puis plus du tout. Elle finit à leur tête, cheffe des Demi-Sel, sans l'avoir demandé, et prêtresse d'un ange dont elle ne dit jamais qu'elle l'a moulé." },
    ] },
    { who: "enjambeur", label: "L'Enjambeur", list: [
      { id: "trompette", title: "L'ange qui a sonné", if: { has: "aube=trompette" },
        text: "**L'Enjambeur** a un corps, et des fidèles, et un clan qui se bat pour lui. Il ne sonne plus jamais : une fois suffit, pour un dieu. Il fond, lentement, été après été, et chaque printemps les Demi-Sel le refont à la louche. Il a toujours la forme d'un ange, à peu près. Il trouve que c'est assez." },
      { id: "soleil", title: "L'ange qui a visé", if: { has: "aube=soleil" },
        text: "**L'Enjambeur** a éteint le soleil des autres d'un seul éclat. Il ne recommence pas. Il garde, au bout de sa trompette, ce point d'acier pas plus gros qu'un ongle, que le beurre recouvre chaque printemps et que le soleil découvre chaque été. Trente et un ans plus tard, quelqu'un le remarquera." },
      { id: "silence", title: "L'ange qui veille",
        text: "**L'Enjambeur** a un corps, et il se tait. Il veille sur une bascule, au milieu d'une ville morte, avec deux cents motards à ses pieds. Il fond, lentement. Il sait que le chrome restera. Il sait aussi que ce n'est pas lui, le chrome. Il a choisi de l'aimer quand même." },
    ] },
    { who: "zenith", label: "Gaspard Zénith", list: [
      { id: "aveugle", title: "Zénith, ébloui", if: { has: "fin:soleil" },
        text: "**Gaspard Zénith** survit à l'effondrement de sa tour, les lunettes fondues sur le nez. Il passe le reste de sa vie sur une chaise longue, face au sud, à regarder le soleil sans cligner. Il ne le facture plus. Il le regarde comme on regarde un débiteur qui s'est enfui." },
      { id: "proprietaire", title: "Zénith, propriétaire",
        text: "**Gaspard Zénith** possède le soleil, légalement, jusqu'à la fin de ses jours. Il n'a plus personne à qui le facturer. Il meurt très riche, dans une tour de verre qui ne tourne plus, entouré de contrats signés par des gens qui n'existent plus." },
    ] },
    { who: "hippolyte", label: "Hippolyte Croûte-Chrome IV", list: [
      { id: "vitrail", title: "Hippolyte et le vitrail", if: { has: "midi=ange" },
        text: "**Hippolyte Croûte-Chrome IV** a vu un ange faire de l'ombre, à midi, le jour de l'Effondrement. Il fait reconstruire l'orangerie, sans verre, pour ne garder que le vitrail. Il va le saluer chaque matin. Il pleure toujours, mais plus de la même façon." },
      { id: "chiot", title: "Hippolyte et Monseigneur", if: { has: "chiot:mord" },
        text: "**Hippolyte Croûte-Chrome IV** fait encadrer le câble du réflectomètre, avec la trace des dents de lait de Monseigneur, et l'accroche dans sa chambre. Il dit à qui veut l'entendre que son chien a sauvé la Maison. Il pleure en le disant, chaque fois. Le chien ne mord plus jamais rien." },
      { id: "larmes", title: "Hippolyte",
        text: "**Hippolyte Croûte-Chrome IV** pleure l'orangerie, la nappe de sa grand-mère, et le Héraut d'inox, dans cet ordre, puis dans le désordre. Il pleure encore trente et un ans plus tard, pour d'autres raisons, avec le même mouchoir." },
    ] },
    { who: "honorine", label: "Honorine Salée", list: [
      { id: "mains", title: "Honorine, les mains", if: { has: "honorine=blessee" },
        text: "**Honorine Salée** garde de la rue du Beurre deux mains couturées qu'elle montre volontiers. Elle dit que c'est le métier qui est rentré. Elle sale son beurre avec ces mains-là jusqu'à sa mort, et elle dit que ça le rend meilleur." },
      { id: "livre", title: "Honorine, le livre",
        text: "**Honorine Salée** rouvre la crèmerie dans la cave, avec le livre de comptes sauvé de la rue du Beurre. Elle y inscrit, à la date de l'Effondrement, une seule ligne : *Beurre : tout.* Puis, en dessous : *Fille : rentrée.*" },
    ] },
    { who: "ripaille", label: "Ripaille", list: [
      { id: "route", title: "Ripaille, sur la route", if: { has: "fin:route" },
        text: "**Ripaille** ne fond plus jamais rien. Elle roule. Elle meurt vieille, sur sa moto, dans un virage du désert qu'elle a pris trop vite exprès. Sur son blouson, au milieu des capsules, un petit ange doré découpé dans un papier de motte." },
      { id: "fonte", title: "Ripaille, au fourneau",
        text: "**Ripaille** rend au Consortium son enveloppe, pleine, sans un mot, le lendemain de l'Effondrement. Puis elle rallume son fourneau, et fond tout ce que le pays a perdu, au poids, honnêtement. Elle refuse, toute sa vie, de fondre un ange." },
    ] },
    { who: "gaston", label: "Gaston", list: [
      { id: "fidele", title: "Gaston, le premier fidèle", if: { any: [{ signe: "fidele" }, { has: "a3=gaston" }] },
        text: "**Gaston** devient Frère Beurrier, le gardien du Grand Enjambeur. Il vit au pied de la bascule et compte les gouttes qui tombent de la trompette. Il dit qu'il a vu l'ange naître. Il dit vrai, à sa façon. Il ne sait pas ce qu'il a vu. Il ne cherche pas à le savoir." },
      { id: "beurrier", title: "Gaston",
        text: "**Gaston** devient Frère Beurrier, le gardien du Grand Enjambeur. Il vit au pied de la bascule, avec un seau et une louche, et il recueille le beurre qui coule. Il a gardé son casque trop grand. Il n'a jamais su qui avait fait l'ange. Il n'en a pas besoin." },
    ] },
  ],
};
