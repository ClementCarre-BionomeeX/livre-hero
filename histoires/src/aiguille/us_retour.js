// L'Île Folle-Aiguille · side story « L'homme qui regardait une fenêtre » (owes its question to Maupassant's The Return:
// when a man thought drowned comes back to find his wife remarried and happy, who has the right to the house?). Act
// III, the mousse at Brisegrève: Bastien, a quiet sailor of the Cormorane who signed on at Morlenc, spends the stop
// staring at one window in the soldiers' village. He was Sergeant Laouénan of the fort, lost when the fort's boat
// capsized eleven years ago, picked up by a whaler, carried to the far seas. His wife Mélanie has married the armourer
// Kerouredan and has two small children. Bastien asks the child to go and look at her up close, and tell him whether she
// is happy. The child tells her he is alive (us:femme), helps him leave unseen (us:part), or brings the armourer to him
// (us:armurier). Wired in A3m_brisegreve.
module.exports = {
  passages: {
    US_fenetre: { act: "III", title: "L'homme qui regardait une fenêtre", place: "brisegreve", ambiance: "village",
      fx: { meet: "bastien" },
      text: [
        "Bastien est un matelot de la bordée de bâbord que personne ne connaît vraiment. Il a embarqué à Morlenc, le dernier jour, sur un seul mot du second. Il a quarante ans, une barbe grise taillée court, des yeux pâles d'homme qui a regardé trop longtemps la glace, et une manière de nouer les cordages que Gobert dit baleinière, avec respect. Il travaille bien. Il ne parle pas. Il ne descend jamais à terre.",
        "À Brisegrève, il descend. Tu le vois, le premier jour, au bout de la rue du bourg des soldats, adossé au mur d'un lavoir, immobile. Il regarde une maison. Une petite maison basse, comme les autres, avec un pot de géraniums à la fenêtre et une forge d'armurier attenante, d'où sort un bruit de marteau régulier. Il reste là deux heures. Le soir, il y est encore.",
        "Au coucher du soleil, une femme sort de la maison, avec un panier de linge sur la hanche et un enfant de quatre ans accroché à sa jupe. Elle a trente-cinq ans, des cheveux châtains noués serré, un visage rond, fatigué, qui rit à quelque chose que l'enfant a dit. Bastien ne bouge pas. Mais tu vois ses mains, contre le mur du lavoir. Elles grattent la pierre, doucement, comme pour y entrer.",
      ],
      choices: [{ label: "Aller t'adosser au mur à côté de lui", to: "US_aveu" }] },
    US_forge: { act: "III", title: "L'homme qui regardait une fenêtre", place: "brisegreve", ambiance: "village",
      text: [
        "La forge de l'armurier est une pièce basse, noire, ouverte sur la rue, où le feu fait danser sur les murs des fusils pendus par la crosse, comme des jambons. Kerouredan est un colosse aux bras noirs de suie, constellés de petites brûlures blanches, qui travaille torse nu sous un tablier de cuir. Il est en train de réparer, sur l'enclume, avec un marteau minuscule, un petit soldat de plomb dont la tête s'est détachée.",
        "Il te voit regarder. Il rit. Il dit que c'est celui du petit, qui l'a fait tomber dans le puits, et qu'on a repêché avec un seau, et qu'il faut le ressouder avant ce soir, sinon il n'y aura pas de soupe mangée dans la maison. Il souffle sur la soudure. Il pose le soldat sur le rebord de la fenêtre, pour qu'il refroidisse, à côté du pot de géraniums.",
        "Au mur du fond, au-dessus de l'établi, à la place d'honneur, il y a un sabre d'infanterie, bien astiqué, dans son fourreau, avec une dragonne de sergent. Tu demandes s'il est à lui. Il dit que non. Il dit que c'est celui du premier mari de sa femme, un sergent du fort, noyé, un brave, que lui, Kerouredan, connaissait bien, et qu'il entretient le sabre une fois par mois, parce qu'il faut bien que quelqu'un le fasse. Il dit : « Chez nous, on ne jette pas les gens. »",
        "Il reprend son marteau. Puis, sans te regarder, il ajoute que le petit soldat de plomb, c'est le sergent qui l'avait fondu, autrefois, pour un neveu, et que Mélanie l'a donné au petit. Il dit que le petit ne sait pas. Il dit que ça ne fait rien, que les jouets n'ont pas besoin qu'on sache d'où ils viennent pour qu'on les aime."
      ],
      choices: [
        { back: "US_aveu", label: "Retourner au mur du lavoir, près de Bastien" }
      ] },
    US_croix: { act: "III", title: "L'homme qui regardait une fenêtre", place: "brisegreve", ambiance: "village",
      text: [
        "Le cimetière du fort est accroché à la pente, au-dessus du bourg, entre deux bastions, si près du vide qu'on a dû étayer le mur du côté de la mer. Les tombes y sont rangées comme des soldats à la revue, en lignes droites, avec des croix de bois peintes en gris, toutes pareilles, qui portent un nom, un grade et une date.",
        "Les trois noyés du canot ont trois croix, côte à côte, au bout de la dernière rangée. Deux ont une tombe dessous. La troisième est plantée dans l'herbe, seule, sans tertre : Sergent Hoël Laouénan, péri en mer. Le bois a été repeint plusieurs fois, et l'inscription repassée au pinceau, avec soin, par une main qui n'est pas celle des autres croix.",
        "Au pied de la croix, dans un pot de grès, il y a un bouquet de bruyère sèche, ancien, décoloré, que personne n'a jeté. Et devant, posée dans l'herbe, toute neuve, une pierre ronde, blanche, de celles qu'on ramasse sur la grève, comme en déposent les enfants qui ne savent pas encore ce qu'on met sur les tombes.",
        "Tu restes un moment. Le vent monte de la mer et fait claquer quelque chose, au bastion, un drapeau ou une porte. Tu penses que l'homme sous cette croix est en bas, adossé au mur d'un lavoir, à regarder un pot de géraniums. Tu ne sais pas lequel des deux est le plus seul."
      ],
      choices: [
        { back: "US_aveu", label: "Retourner au mur du lavoir, près de Bastien" }
      ] },
    US_aveu: { act: "III", title: "L'homme qui regardait une fenêtre", place: "brisegreve", ambiance: "village",
      text: [
        { first: true, text: "Il ne te chasse pas. Il te demande, au bout d'un long moment, si tu sais qui habite là. Tu dis que non. Il dit : l'armurier du fort, Kerouredan, un brave homme, dit-on, et sa femme, Mélanie, et deux enfants, une fille de six ans et le petit qu'on a vu. Il dit tout cela d'une voix plate, comme on récite une leçon. Puis il dit que Mélanie a été sa femme. Il dit qu'elle l'est peut-être encore, devant Dieu. Il ne sait pas comment ça se règle." },
        { first: true, text: "Il s'appelait Hoël Laouénan. Sergent au fort de Brisegrève. Il y a onze ans, le canot du fort a chaviré en ramenant des vivres de l'aiguade, par un coup de vent. Trois noyés. On a retrouvé deux corps. Lui, un baleinier de passage l'a repêché, à moitié mort, à deux lieues au large, et l'a emmené, parce qu'un baleinier ne revient pas sur sa route pour un soldat. Trois ans de pêche dans les mers froides. Puis un naufrage, des glaces, un hivernage, un autre navire, des années de ports dont il ne sait plus les noms." },
        { first: true, text: "« J'ai écrit, dit-il. Deux fois. Les lettres sont parties de ports où il y a un bateau postal tous les deux ans. Elles sont arrivées, ou elles sont au fond de la mer. Je ne sais pas. Quand je suis rentré à Morlenc, cet hiver, j'ai demandé. On m'a dit qu'elle était remariée depuis sept ans. J'ai embarqué sur le premier navire qui passait par Brisegrève. Je me suis dit que je regarderais. Juste regarder. »" },
        { first: true, text: "Il te regarde, toi. Il te demande un service. Il dit qu'il ne peut pas s'approcher : elle le reconnaîtrait, ou pire, elle ne le reconnaîtrait pas. Il te demande d'aller au lavoir, demain matin, quand elle y sera, de l'aider à tordre son linge, de lui parler, de la regarder de près. Et de revenir lui dire si elle est heureuse. Il dit qu'il fera ce que tu diras. Il dit qu'il a besoin que quelqu'un d'autre décide, parce que lui, depuis onze ans, n'a décidé de rien." },
        { again: true, text: "Bastien, contre le mur du lavoir, regarde la fenêtre aux géraniums, et il attend." }
      ],
      choices: [
        { label: "Passer devant la forge, l'après-midi, voir l'armurier au travail", to: "US_forge", hide: { seen: "US_forge" } },
        { label: "Monter au cimetière du fort, où l'on t'a dit qu'il y avait trois croix", to: "US_croix", hide: { seen: "US_croix" } },
        { label: "Aller au lavoir, le lendemain, aider Mélanie", to: "US_lavoir" }
      ] },
    US_lavoir: { act: "III", title: "L'homme qui regardait une fenêtre", place: "brisegreve", ambiance: "village",
      text: [
        "Elle accepte ton aide avec un rire, parce qu'un mousse qui propose de tordre le linge, ça ne s'est jamais vu. Vous tordez des draps, chacun à un bout, en tournant en sens contraire, et l'eau tombe sur vos pieds. Elle parle. Elle parle facilement, comme les gens qui n'ont personne à qui parler dans la journée. Le fort, le vent, la cherté du bois, la petite qui apprend ses lettres avec l'aumônier, le petit qui a mangé une limace. Kerouredan, qui rentre à midi tout noir et qui la soulève de terre pour la faire crier.",
        "Tu demandes, l'air de rien, si elle a toujours vécu à Brisegrève. Elle dit que oui. Elle dit qu'elle a eu un premier mari, un sergent, noyé, il y a longtemps. Elle le dit sans tristesse, avec une douceur lointaine, comme on parle d'un pays où l'on a passé une jeunesse. Elle dit qu'elle l'a attendu quatre ans. Elle dit qu'elle allait tous les soirs au bout de la jetée. Elle dit que c'est Kerouredan qui venait la chercher, pour qu'elle ne prenne pas froid. Au bout de quatre ans, elle s'est laissé ramener.",
        "Elle étend un drap au soleil. Elle dit, en riant un peu, qu'elle rêve encore de lui, parfois, et qu'au réveil elle a honte, à côté de l'autre qui ronfle. Puis elle hausse les épaules. Elle dit que les morts ont droit à nos rêves, et les vivants à tout le reste. Elle dit que c'est juste. Elle te donne un morceau de pain d'épice pour ta peine.",
        "Tu reviens au mur du lavoir. Bastien t'attend. Tu lui dis tout, mot pour mot, parce qu'il te regarde comme on regarde un médecin. Quand tu arrives au pain d'épice, il ferme les yeux. Il dit qu'elle en faisait déjà, avant, le dimanche. Il dit : « Alors ? » Il attend que tu décides.",
      ],
      choices: [
        { label: "Lui dire qu'elle a le droit de savoir qu'il est vivant, et aller la chercher", fx: { flag: "us:femme" }, to: "US_femme" },
        { label: "Lui dire qu'elle est heureuse, et l'aider à remonter à bord sans être vu", fx: { flag: "us:part" }, to: "US_part" },
        { label: "Aller chercher l'armurier, et laisser les deux hommes se parler", fx: { flag: "us:armurier" }, to: "US_armurier" },
      ] },
    US_femme: { act: "III", title: "L'homme qui regardait une fenêtre", place: "brisegreve", ambiance: "village",
      text: [
        "Tu retournes à la maison. Tu frappes. Mélanie ouvre, la petite dans les jambes. Tu lui dis qu'il y a quelqu'un au lavoir qui voudrait lui parler. Elle te regarde. Elle voit quelque chose dans ton visage. Elle pâlit avant même de savoir pourquoi. Elle confie la petite à une voisine, elle s'essuie les mains à son tablier, deux fois, trois fois, et elle te suit.",
        "Elle le reconnaît à vingt pas. Elle s'arrête. Tu vois ses genoux plier, puis se raidir. Elle avance. Ils restent face à face, à une longueur de bras, sans se toucher, pendant un temps qui n'en finit pas. Puis elle dit son nom, Hoël, d'une voix d'enfant. Puis elle le gifle, à toute volée, une fois. Puis elle se jette contre lui, et elle pleure, et elle le frappe sur la poitrine avec ses deux poings, et il ne bouge pas, et il la laisse faire.",
        "Tu t'éloignes. Tu ne veux pas entendre ce qu'ils se disent. Tu les vois, de loin, assis sur le bord du lavoir, parler une heure, deux heures. À un moment, Kerouredan sort de sa forge, les voit, et s'arrête au milieu de la rue, son marteau à la main. Il reste là. Il ne s'approche pas. Il attend, lui aussi, comme Mélanie a attendu au bout de la jetée.",
        "Le soir, Bastien remonte à bord. Seul. Il te dit qu'elle a pleuré, qu'elle a crié, qu'elle a ri, qu'elle lui a raconté onze ans en deux heures. Il dit qu'elle lui a demandé de rester. Il dit qu'elle l'a dit sans le penser, et qu'ils l'ont su tous les deux. Il dit qu'il repart avec la Cormorane. Il dit qu'il a eu ce qu'il était venu chercher, et plus encore : il sait qu'elle a pleuré pour lui. Il dit qu'on vit très longtemps avec ça. Puis il monte à la hune, et il y reste jusqu'à la nuit.",
      ],
      choices: [{ label: "Redescendre au bourg", fx: { quest: "US" }, back: "A3m_brisegreve" }] },
    US_part: { act: "III", title: "L'homme qui regardait une fenêtre", place: "brisegreve", ambiance: "village",
      text: [
        "Tu lui dis qu'elle est heureuse. Tu dis que les morts ont droit à nos rêves, et les vivants à tout le reste, et que c'est elle qui l'a dit. Bastien hoche la tête lentement, plusieurs fois, comme un homme qui accepte une sentence qu'il a lui-même rédigée. Il dit que c'est bien. Il dit que c'est ce qu'il espérait. Tu n'es pas sûr{e} qu'il dise vrai.",
        "Il te demande une dernière chose. Il sort de sa vareuse un petit paquet enveloppé de toile cirée : une dent de cachalot gravée au couteau, couverte de dessins fins comme des cheveux. Une maison basse, un pot de géraniums, une femme à une fenêtre, une jetée, et tout autour, des baleines, des glaces, des navires. Onze ans de soirées. Il te demande de la poser sur le rebord du lavoir, ce soir, avant qu'elle revienne prendre son linge sec, et de partir.",
        "Tu le fais. Tu poses la dent sur la pierre, au soleil couchant, et tu te caches derrière un mur, ce qu'il ne t'a pas demandé. Mélanie arrive avec son panier vide. Elle voit la dent. Elle la prend. Elle la tourne dans ses mains. Elle regarde longtemps la maison gravée, la femme à la fenêtre. Puis elle regarde autour d'elle, vers la rue, vers la mer, vers la Cormorane au mouillage. Elle met la dent dans la poche de son tablier. Elle décroche ses draps. Elle chante, en les pliant. Tu ne sais pas si c'est une chanson triste.",
        "Bastien ne redescend plus à terre. Quand on lève l'ancre, il est à la hune de misaine, et il ne regarde pas le bourg. Il regarde le large, du côté où l'on va. Tu te demandes si tu lui as fait un cadeau ou si tu lui as volé quelque chose. Tu te dis que c'est lui qui t'a demandé de choisir, et qu'il savait sans doute ce que tu choisirais : il t'a vu{e} revenir du lavoir.",
      ],
      choices: [{ label: "Redescendre au bourg", fx: { quest: "US" }, back: "A3m_brisegreve" }] },
    US_armurier: { act: "III", title: "L'homme qui regardait une fenêtre", place: "brisegreve", ambiance: "village",
      text: [
        "Tu dis à Bastien que ce n'est pas à toi de décider, ni à elle seule. Tu dis qu'il y a un troisième homme dans cette histoire, et qu'on ne l'a pas consulté. Puis, avant qu'il puisse te retenir, tu traverses la rue et tu entres dans la forge. Kerouredan est un colosse aux bras noirs, aux yeux doux, qui lime un chien de fusil. Tu lui dis qu'un homme l'attend au lavoir, et que cet homme a été sergent au fort, il y a onze ans.",
        "Le colosse pose sa lime. Il comprend tout de suite. Tu le vois pâlir sous le noir de forge. Il dit : « Laouénan. » Puis il ôte son tablier de cuir, il se lave les mains dans le baquet, longuement, comme pour un enterrement, et il sort. Tu le suis. Les deux hommes se font face, au lavoir. Bastien s'est redressé, les mains le long du corps, comme à l'inspection.",
        "Ils parlent. Peu, d'abord. Puis davantage. Ils s'assoient sur le bord du lavoir, l'un à côté de l'autre, à distance. Tu entends des morceaux : le canot, la jetée, les quatre ans, la petite qui apprend ses lettres. Kerouredan parle de Mélanie avec une tendresse sans détour, qui fait mal à entendre. Bastien l'écoute sans l'interrompre. À un moment, Kerouredan dit qu'il s'en ira, si elle le choisit, lui. Il dit qu'il ne la retiendra pas. Il le dit en tremblant, mais il le dit.",
        "Bastien regarde longtemps cet homme qui vient de lui offrir sa vie. Puis il se lève. Il dit qu'il ne lui demandera pas ça. Il dit qu'un homme qui aurait dit ça, il y a onze ans, aurait été un meilleur mari que lui. Il demande seulement une chose : que Kerouredan, un soir, plus tard, quand les enfants seront grands, dise à Mélanie qu'il est revenu, et qu'il l'a vue rire au lavoir, et qu'il est reparti content. Kerouredan promet. Ils se serrent la main, longtemps, deux mains noires, l'une de forge, l'autre de goudron. Bastien remonte à bord. Il te dit que c'est la première fois en onze ans qu'il a décidé de quelque chose. Il dit qu'il l'a décidé avec un autre homme, et que c'est peut-être la seule façon.",
      ],
      choices: [{ label: "Redescendre au bourg", fx: { quest: "US" }, back: "A3m_brisegreve" }] },
  },
  extras: {
    people: {
      bastien: { name: "Bastien", aka: ["Hoël Laouénan", "le sergent Laouénan"], qui: "Matelot taciturne de la Cormorane, embarqué à Morlenc, qui noue les cordages à la manière des baleiniers." },
    },
    quests: [
      { id: "US", act: "III", kind: "annexe", title: "L'homme qui regardait une fenêtre", start: "US_fenetre", doit: "retour", echo: ["us:femme", "us:part", "us:armurier"] },
    ],
  },
};
