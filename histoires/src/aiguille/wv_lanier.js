// L'Île Folle-Aiguille · side story « La lanière rouge » (owes its question to The Scarlet Letter: who carries the shame
// in a small community that judges, the one who is marked or the one who is not?). Act IV, Victorine among the outcasts:
// Maëla wears on her arm, since the birth of her daughter five years ago, a strip of red-dyed bark, by sentence of the
// camp's bark court, because she would not name the father. Alban Coatmeur, who reads the prayers on Sundays and whom
// the camp reveres, comes to Victorine at night for a pain in the chest that no remedy eases. She understands. She
// urges him to confess before the camp (wv:aveu), keeps his secret and treats his chest (wv:secret), or tells Maëla
// that she knows, and asks what she wants (wv:maela). Wired in XS_camp.
module.exports = {
  passages: {
    WV_laniere: { act: "IV", title: "La lanière rouge", place: "sylve", ambiance: "nature",
      fx: { meet: "maela" },
      text: [
        "Elle porte la lanière au bras gauche, au-dessus du coude, nouée serré : une bande d'écorce teinte au rocou, d'un rouge qui a passé avec les saisons et qu'elle reteint elle-même, chaque printemps, comme on l'exige. Maëla a vingt-six ans, des cheveux noirs tressés très serré, un visage d'une beauté sévère, presque dure, et une fille de cinq ans, Ninnoc, qui ne la quitte jamais et qui a les yeux les plus étranges du camp, gris pâle, presque transparents, des yeux qui ne ressemblent à ceux de personne.",
        "Victorine demande, prudemment, à Jeanne Brasdefer. Jeanne lui répond sans détour. Il y a six ans, Maëla, veuve depuis le naufrage, s'est trouvée grosse. On lui a demandé le nom du père. Elle a refusé. Le tribunal d'écorce l'a jugée, dans les formes : Guénolé au siège, Jeanne à l'accusation, une croix de bois pour les serments. Sentence : la lanière, à vie, jusqu'à ce qu'elle nomme l'homme. Elle ne l'a jamais nommé. « Dans un camp de cinquante personnes, médecin, dit Jeanne, on ne peut pas laisser les enfants pousser sans père connu. Ça finit en couteaux. »",
        "Le soir, au feu, Maëla s'assied seule, à l'écart, sa fille contre elle. On lui parle poliment. On lui passe le pain. Personne ne s'assied à côté d'elle. Elle a l'air, dans sa solitude, plus droite et plus libre que tous les autres, comme un arbre qu'on aurait laissé debout au milieu d'un champ coupé.",
      ],
      choices: [{ label: "Recevoir, cette nuit, celui qui gratte au rideau de la grotte", to: "WV_alban" }] },
    WV_alban: { act: "IV", title: "La lanière rouge", place: "sylve", ambiance: "nuit",
      text: [
        "C'est Alban Coatmeur. Il a quarante ans, un visage pâle et doux d'ecclésiastique manqué, des cheveux qui grisonnent, et une voix si belle que, le dimanche, quand il lit les prières devant la croix de bois, des hommes rudes pleurent sans savoir pourquoi. Il était séminariste, à Morlenc, avant le Saint-Fiacre. On le vénère, au camp. On dit qu'il est le meilleur d'entre eux. On le dit devant lui, et il baisse les yeux, et on l'aime davantage pour cette modestie.",
        "Il a mal à la poitrine. Il porte la main sur son cœur, et appuie, comme pour l'empêcher de sortir. Il dit que ça le prend la nuit, depuis des années, qu'il étouffe, qu'il a des sueurs, des palpitations. Elle l'ausculte. Le cœur bat vite, mais juste. Les poumons sont clairs. Il n'a rien. Rien que son corps sache nommer.",
        "Elle lui demande d'enlever sa chemise, pour mieux l'entendre. Il hésite, puis obéit. Sur sa poitrine, à l'endroit exact où il appuie, la peau est à vif, labourée, couverte de croûtes et de cicatrices blanches entrecroisées, comme si quelqu'un la grattait depuis des années, toutes les nuits, avec les ongles. Il se rhabille très vite. Il lève les yeux vers elle. Ils sont gris pâle, presque transparents.",
        "Victorine ne dit rien pendant un long moment. Il ne dit rien non plus. Le rideau de la cascade fait son bruit de pluie éternelle. Puis il demande, tout bas, s'il y a un remède.",
      ],
      choices: [
        { label: "« Un seul. Dire devant tout le camp ce que Maëla tait depuis six ans. »", fx: { flag: "wv:aveu" }, to: "WV_aveu" },
        { label: "Lui donner un onguent pour la peau, et garder pour toi ce que tu as vu", fx: { flag: "wv:secret" }, to: "WV_secret" },
        { label: "Aller trouver Maëla, et lui demander à elle ce qu'elle veut", fx: { flag: "wv:maela" }, to: "WV_maela" },
      ] },
    WV_aveu: { act: "IV", title: "La lanière rouge", place: "sylve", ambiance: "nature",
      text: [
        "Il la regarde comme un condamné regarde la corde. Il dit qu'il ne peut pas. Qu'il les perdrait tous. Qu'ils ont besoin de lui, de sa voix, de ses prières, que c'est tout ce qui les tient, depuis douze ans, dans cette grotte, de l'autre côté du monde. Victorine dit que c'est possible. Elle dit aussi que sa poitrine ne guérira pas autrement, et qu'il le sait, et qu'il est venu le lui faire dire. Il pleure. Il s'en va sans répondre.",
        "Le dimanche, devant la croix de bois, il commence à lire les prières, de sa belle voix. Puis il s'arrête, au milieu d'un psaume. Il pose le livre. Il défait sa chemise. Il montre sa poitrine, à tous, et il dit, d'une voix qui ne ressemble plus à rien, le nom de la petite, et le sien. Le silence dure si longtemps qu'on entend les gouttes tomber de la voûte. Maëla est assise à l'écart, sa fille contre elle. Elle ne bouge pas. Elle regarde Alban avec une expression que Victorine n'arrive pas à lire, qui pourrait être de la pitié, ou du mépris, ou de l'amour, ou les trois.",
        "Le tribunal d'écorce se réunit le soir même. Jeanne ôte elle-même la lanière du bras de Maëla, avec son couteau, et la noue au bras d'Alban. Il la porte. Il ne lit plus les prières ; personne ne le lui demande. Il dépérit, dans les semaines qui suivent, plus vite qu'on ne dépérit d'une maladie de poitrine, et on dit qu'il va mourir. Mais un soir, la petite Ninnoc va s'asseoir à côté de lui, au feu, sans qu'on le lui ait dit, et elle lui prend la main, et il ne meurt pas. Victorine apprend tout cela plus tard, par un mot. Sa poitrine a guéri, dit le mot.",
      ],
      choices: [{ label: "Revenir près du feu", fx: { quest: "WV" }, back: "XS_camp" }] },
    WV_secret: { act: "IV", title: "La lanière rouge", place: "sylve", ambiance: "nuit",
      text: [
        "Elle lui donne un onguent, de la graisse et de la cire avec de l'huile de millepertuis, pour la peau. Elle lui dit de ne plus gratter. Elle lui dit que le cœur est solide, ce qui est vrai. Elle ne dit rien d'autre. Il la remercie avec une gratitude immense, éperdue, comme si elle venait de lui accorder l'absolution, et elle comprend, en le regardant partir, qu'il a pris son silence pour un pardon. Elle n'a rien pardonné du tout. Elle a seulement décidé que ce n'était pas son affaire. Elle se demande, cette nuit-là, si c'est la même chose.",
        "Le dimanche, il lit les prières, de sa belle voix. Des hommes pleurent. Maëla, à l'écart, sa fille contre elle, écoute, la tête droite, la lanière rouge au bras. La petite Ninnoc regarde Alban avec ses yeux gris pâle, fixement, pendant toute la prière, comme les enfants regardent ce qu'ils ne comprennent pas encore. Alban ne la regarde pas. Il ne la regarde jamais. Victorine s'aperçoit qu'il ne regarde jamais personne, en lisant, que ses yeux restent fixés au-dessus des têtes, sur un point de la voûte, comme un homme qui marche sur une poutre au-dessus du vide.",
        "Elle repart quelques jours plus tard. Il vient lui dire adieu, au bord du sentier, et il lui rend le pot d'onguent, vide. Il dit que la peau a guéri. Il le dit avec un sourire très doux. En le regardant s'éloigner, elle le voit porter la main à sa poitrine, et appuyer, sans y penser, comme on fait sur une blessure qui n'est pas sur la peau.",
      ],
      choices: [{ label: "Revenir près du feu", fx: { quest: "WV" }, back: "XS_camp" }] },
    WV_maela: { act: "IV", title: "La lanière rouge", place: "sylve", ambiance: "nuit",
      text: [
        "Elle trouve Maëla au bord de la vasque, à l'aube, en train de laver le linge de sa fille. Elle s'assied à côté d'elle. Elle lui dit qu'elle sait. Maëla ne lève pas les yeux du linge. Elle dit : « Bien sûr. Il est allé vous montrer sa poitrine. Il la montre à tout le monde, la nuit, en secret, sauf à ceux qui comptent. » Elle tord une chemise d'enfant, très fort. « Qu'est-ce que vous voulez, médecin ? »",
        "Victorine dit qu'elle ne veut rien. Qu'elle voulait savoir ce que, elle, Maëla, voulait. Que personne ne semblait le lui avoir demandé depuis six ans. Maëla lève enfin les yeux. Elle réfléchit, longtemps. Puis elle dit qu'elle voulait, au début, qu'il parle. Qu'elle a attendu un an, deux ans. Qu'ensuite, elle a cessé de vouloir. Qu'à présent, elle préfère porter la lanière que de le voir la porter, parce que la lanière, elle, la porte bien, et que lui ne la porterait pas, il en mourrait, et que sa fille a besoin d'un père vivant, même un père qui ne la regarde pas.",
        "« Et puis, dit-elle, en reprenant son linge, cette lanière, c'est la seule chose ici qui soit à moi. Les autres ont tout en commun, la grotte, le feu, le pain, la honte, la peur. Moi, j'ai ça. » Elle sourit, d'un sourire dur, magnifique. « Ne le dites à personne, médecin. Ni à lui ni aux autres. Laissez-moi ma lanière. » Victorine se tait. Elle comprend qu'elle vient d'entendre la seule personne libre de ce camp, et que sa liberté a la forme exacte d'une condamnation.",
      ],
      choices: [{ label: "Revenir près du feu", fx: { quest: "WV" }, back: "XS_camp" }] },
  },
  extras: {
    people: {
      maela: { name: "Maëla", aka: ["la femme à la lanière"], f: true, qui: "Proscrite du camp de la cascade, qui porte au bras une lanière rouge." },
    },
    quests: [
      { id: "WV", act: "IV", kind: "annexe", title: "La lanière rouge", start: "WV_laniere", doit: "lettreecarlate", echo: ["wv:aveu", "wv:secret", "wv:maela"] },
    ],
  },
};
