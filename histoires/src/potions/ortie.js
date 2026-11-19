// Ortie: the evenings under the roof (vigils, one a night, each once), her mischief on the way (encounters, on coming
// back to a crossroads), her toad Monseigneur, and the tear the Grande Rosée asks for. A little sister who is a pain,
// and whom one loves: the confidence she gives (conf) decides whether the two of you can keep the Source together.
var WITH = "ortie";
var HOME_PLACES = { any: [{ place: "boutique" }, { place: "atelier" }, { place: "jardin" }, { place: "chambre" }] };
module.exports = {
  vigils: [
    { to: "V_parents", with: WITH, label: "Laisser Ortie poser sa question du soir" },
    { to: "V_monstres", with: WITH, if: { day: { min: 2 } }, label: "Regarder sous le lit avec Ortie" },
    { to: "V_meme", with: WITH, if: { seen: "A_tiennot" }, label: "Demander à Ortie à quoi elle pense" },
    { to: "V_bistre", with: WITH, if: { day: { min: 6 } }, label: "Écouter Ortie raconter ce que dit Bistre" },
    { to: "V_larme", with: WITH, if: { all: [{ seen: "C_aube" }, { conf: "ortie", min: 65 }] }, label: "Prendre Ortie dans tes bras" },
    { to: "V_peur", with: WITH, if: { all: [{ seen: "B_dispute_fin" }, { any: [{ has: "dispute:crie" }, { has: "dispute:punie" }] }] }, label: "T'asseoir au bord du lit d'Ortie" },
  ],
  encounters: {
    every: 3, chance: 0.4,
    list: [
      { to: "E_peinture", if: { all: [{ day: { min: 2 } }, HOME_PLACES] } },
      { to: "E_bille", if: { all: [{ day: { min: 2 } }, { not: { seen: "A_tiennot" } }, HOME_PLACES] } },
      { to: "E_questions", if: { all: [{ place: "atelier" }] } },
      { to: "E_menthe", if: { all: [{ place: "jardin" }, { item: "menthe" }] } },
      { to: "E_plouf", if: { place: "etang" } },
      { to: "E_escargots", if: { place: "lisiere" } },
      { to: "E_bistre_juge", if: { all: [{ day: { min: 3 } }, HOME_PLACES] } },
      { to: "E_tiennot_dormeur", if: { all: [{ place: "hameau" }, { seen: "B_forge" }, { not: { has: "tiennot:reveille" } }] } },
      { to: "E_sucre", if: { all: [{ place: "hameau" }, { day: { min: 3 } }] } },
      { to: "E_rangement", if: { all: [{ seen: "C_aube" }, HOME_PLACES] } },
    ],
  },
  passages: {
    // ---------------------------------------------------------------- the evenings
    V_parents: {
      title: "La question du soir", place: "chambre", back: true, with: WITH,
      text: [
        "Ortie a le drap tiré jusqu'au nez. Elle a une question. Elle en a une tous les soirs, et c'est toujours la même, posée chaque fois comme si c'était la première : « Raconte comment ils étaient. Papa et maman. »",
        "Elle avait deux ans quand la fièvre les a pris, l'hiver où la moitié des Ronceraies a toussé. Toi, tu en avais onze. Tu racontes : le rire de maman, qui faisait peur aux poules ; les grandes mains de papa, qui sentaient la résine ; la chanson qu'ils chantaient en cueillant les mûres, si faux qu'on la reconnaissait à trois prés de distance. Tu ne racontes pas l'hiver.",
        "Ortie écoute avec une attention terrible. À la fin, elle dit, comme tous les soirs : « Et moi, j'étais comment ? » Tu lui dis qu'elle était exactement pareille, en plus petit, et elle s'endort contente.",
      ],
      fx: { conf: { ortie: 5 } },
    },
    V_monstres: {
      title: "Sous le lit", place: "chambre", back: true, with: WITH,
      text: [
        "« Il y a quelque chose sous mon lit », dit Ortie, d'une voix très calme, qui est la voix qu'elle prend quand elle a très peur.",
        "Tu prends la chandelle et tu regardes sous le lit. Il y a une chaussette, un trognon de pomme, deux billes, un livre de Mémé qu'on cherchait depuis l'été, et Bistre, couché sur le dos, les quatre pattes en l'air, qui te fixe de ses yeux jaunes avec l'air d'un évêque dérangé pendant sa sieste.",
        "Ortie se penche par-dessus le bord du lit, la tête en bas, et regarde Bistre. « Il dit que c'est son lit, et que c'est moi qui suis dessus. » Puis elle rit, et elle a beaucoup moins peur, et toi aussi, un peu, sans savoir de quoi.",
      ],
      fx: { conf: { ortie: 5 } },
    },
    V_meme: {
      title: "À quoi elle pense", place: "chambre", back: true, with: WITH,
      text: [
        "Ortie regarde le plafond. Elle pense, et cela se voit, parce qu'elle se tait.",
        "« Tiennot, il va se réveiller ? » demande-t-elle enfin. Puis, sans attendre : « Si je tombe grise, toi, tu me réveilles ? »",
        "Tu dis oui. Tu le dis trop vite, et elle le remarque.",
        "« Mémé est partie, dit Ortie. Papa et maman sont partis. » Elle se tourne vers toi sur l'oreiller. « Toi, tu pars pas. Promis ? »",
      ],
      choices: [
        { label: "« Promis. Jamais. »", fx: { conf: { ortie: 10 }, flag: "promesse:jamais" }, to: "V_meme_fin" },
        { label: "« Je ne sais pas ce qui arrivera. Mais je ne partirai jamais sans toi. »", fx: { conf: { ortie: 10 }, flag: "promesse:sans_toi" }, to: "V_meme_fin" },
      ],
    },
    V_meme_fin: {
      title: "Promis", place: "chambre", back: true, with: WITH,
      text: [
        { if: { has: "promesse:jamais" }, text: "Ortie hoche la tête et ferme les yeux. Elle s'endort en tenant ton petit doigt, et tu restes tordue au bord de ton lit jusqu'à ce que sa main s'ouvre." },
        { if: { has: "promesse:sans_toi" }, text: "Ortie réfléchit. « Sans moi, c'est pas pareil que jamais, dit-elle. Mais c'est mieux, en fait. » Elle s'endort en tenant ton petit doigt." },
      ],
    },
    V_bistre: {
      title: "Ce que dit Bistre", place: "chambre", back: true, with: WITH,
      fx: { conf: { ortie: 5 } },
      text: [
        "Bistre est monté sur le lit d'Ortie et s'est couché sur ses pieds, ce qu'il ne fait jamais pour personne.",
        "« Il parle, dit Ortie. Je te l'ai dit cent fois. Personne me croit. » Elle écoute le chat un moment. « Il dit que ta potion de cet après-midi sentait la chaussette. Il dit qu'il est âgé de trente-quatre ans et qu'il a connu des sorcières qui savaient préparer. Il dit que tu es une grande bête maladroite, mais qu'il t'aime bien quand même, parce que tu lui donnes le lait de la veille au lieu de celui du matin, et que celui de la veille est meilleur. Il dit que je suis la seule ici qui comprenne quelque chose. »",
        "Bistre ferme les yeux, très lentement, ce qui chez un chat est un sourire, ou une insulte.",
        "Tu ne crois pas qu'il parle. Mais tu lui donnes le lait de la veille depuis toujours, et tu ne l'as jamais dit à personne.",
      ],
    },
    V_larme: {
      title: "La larme", place: "chambre", back: true, with: WITH,
      fx: { item: "larme", flag: "larme:ortie", conf: { ortie: 5 }, ep: ["seance", 300] },
      text: [
        "Tu prends Ortie dans tes bras, en silence. Elle se laisse faire, raide d'abord, puis toute molle, comme un chat qu'on porte.",
        "« Je veux pas que Mémé reste un arbre, dit-elle dans ton épaule. Je veux pas être un arbre. Je veux pas que tu sois un arbre. Je veux qu'on soit trois dans la boutique, avec Bistre, et Monseigneur, et que tu cries parce que j'ai mis les doigts dans la confiture. »",
        "Elle pleure, sans bruit, ce qui ne lui ressemble pas. Une larme glisse sur sa joue, s'arrête au bord du menton, et tombe.",
        "Tu la recueilles dans le petit flacon de cristal que Mémé t'a donné au Creux, sans réfléchir, d'un geste aussi naturel que de rattraper une tasse. La larme brille au fond du flacon comme une perle d'eau, et Ortie s'endort contre toi, le nez mouillé, avant d'avoir vu ce que tu as fait.",
      ],
    },
    V_peur: {
      title: "Au bord du lit", place: "chambre", back: true, with: WITH,
      fx: { conf: { ortie: 10 } },
      text: [
        "Tu t'assois au bord du lit d'Ortie. Elle te tourne le dos et fait semblant de dormir. Tu sais qu'elle fait semblant, parce qu'elle ronfle, et qu'elle ne ronfle jamais.",
        "Tu poses la main sur son épaule. Au bout d'un long moment, elle dit, sans se retourner : « Tu m'en veux encore ? » Tu dis non. Elle dit : « Moi, je t'en veux un peu. » Tu dis que c'est juste. Elle se retourne.",
        "Vous restez comme ça, sans parler, jusqu'à ce qu'elle dorme pour de bon. La paix viendra demain, ou après-demain. Ce soir, c'est le chemin qui y mène.",
      ],
    },
    K_larme_toi: {
      title: "Sous la lucarne", place: "chambre", back: true,
      fx: { item: "larme", flag: "larme:toi", ep: ["seance", 300] },
      text: [
        "Ortie dort. Tu t'assois sous la lucarne, dans le rond de lune, et tu penses à Mémé assise entre ses racines, au bois qui grisonne, à Ortie qui chante en dormant des chansons qui ne sont pas à elle, à la boutique, à la patente, à tout ce qu'il faudrait tenir et que tu tiens à peine.",
        "Tu n'as pas pleuré quand Mémé est partie. Tu n'as pas pleuré quand la boutique s'est vidée. Tu pleures maintenant, d'un coup, sans bruit, le front contre la vitre froide, parce qu'il n'y a personne pour te voir.",
        "Quand c'est fini, il y a une larme au bord de ta main. Tu la recueilles dans le petit flacon de cristal de Mémé. Elle brille au fond comme une perle d'eau. Mémé a dit : une larme donnée de bon cœur. Tu ne sais pas si celle-ci compte. Tu la gardes quand même.",
      ],
    },

    // ---------------------------------------------------------------- Ortie's mischief
    E_peinture: {
      title: "Le chat bleu", back: true,
      text: [
        "Bistre traverse la pièce avec une dignité de cardinal, et sa queue est bleue. Bleu vif, bleu de bleuet, de la base jusqu'à la pointe.",
        { with: WITH, text: "Ortie, sur le seuil, tient un pinceau et le pot de peinture bleue de la remise. « Il dormait, explique-t-elle. Il avait l'air de s'ennuyer. Je l'ai décoré. »" },
        "Bistre s'assoit au milieu de la pièce, te regarde, puis regarde sa queue, puis te regarde de nouveau, avec une expression où l'on lit clairement qu'il te tient pour seule responsable de l'éducation de cette enfant.",
      ],
      choices: [
        { label: "Rire aux larmes", with: WITH, fx: { conf: { ortie: 5 } }, back: true },
        { label: "Gronder Ortie et lui faire laver le chat", with: WITH, fx: { conf: { ortie: -5 }, flag: "chat:lave" }, to: "E_peinture_bain" },
      ],
    },
    E_peinture_bain: {
      title: "Le bain du chat", back: true,
      text: [
        "Laver un chat est une entreprise qu'on ne recommande qu'à ses ennemis. Ortie s'y emploie une heure, dans la bassine du jardin, avec du savon noir et une détermination qui l'honore. À la fin, Bistre est propre, Ortie est bleue, et la bassine a pris la couleur d'un ciel d'été.",
        { with: WITH, text: "Ortie ne te parle pas de l'après-midi. Le soir, elle accepte de te passer le sel." },
      ],
    },
    E_bille: {
      title: "La bille", back: true,
      text: [
        { with: WITH, text: "Ortie se plante devant toi, la main tendue, et ouvre les doigts : une bille de verre, avec une spirale rouge dedans. « Je l'ai gagnée, dit-elle. Je l'ai vendue à Tiennot. »" },
        "Tu demandes ce qu'elle a vendu. Une tisane de lavande, prise sur l'étagère, « pour qu'il dorme bien, parce qu'il a peur du noir, mais il faut pas le dire ». Elle a fixé le prix elle-même, et elle trouve qu'elle a fait une très bonne affaire.",
      ],
      choices: [
        { label: "La féliciter : c'est une marchande", with: WITH, fx: { conf: { ortie: 5 }, flag: "ortie:marchande" }, back: true },
        { label: "Lui expliquer qu'une tisane vaut trois sous, pas une bille", with: WITH, fx: { conf: { ortie: -5 } }, back: true },
      ],
    },
    E_questions: {
      title: "Pourquoi", back: true,
      text: [
        { with: WITH, text: "Ortie est assise sur la table de l'arrière-boutique, à côté du mortier, et pose des questions. Pourquoi on pile dans le sens des aiguilles. Pourquoi le miel colle. Pourquoi Mémé parlait au chaudron. Pourquoi le chaudron ne répond pas. Pourquoi les orties piquent. Pourquoi on l'a appelée Ortie, puisque les orties piquent. Est-ce que c'est parce qu'elle pique." },
        "Tu réponds à vingt questions. À la vingt et unième, tu ne sais plus combien de cuillères de miel tu as mises.",
        { with: WITH, text: "« Trois, dit Ortie. Tu en as mis trois. J'ai compté pendant que je parlais. » Elle a raison. Elle est pénible, et elle a raison, et c'est le plus pénible des deux." },
      ],
      fx: { conf: { ortie: 3 } },
    },
    E_menthe: {
      title: "L'aide d'Ortie", back: true,
      text: [
        { with: WITH, text: "Ortie a décidé de t'aider au jardin. Elle revient du puits, triomphante, avec une brassée de menthe arrachée racines comprises, et un ver de terre qui pend au bout d'une racine, l'air aussi surpris que toi." },
        "La menthe repoussera, d'ici un mois. Le ver, lui, retourne à sa terre, déposé par Ortie avec des excuses.",
      ],
      choices: [
        { label: "La remercier quand même", with: WITH, fx: { conf: { ortie: 5 } }, back: true },
        { label: "Lui montrer comment on coupe une tige au-dessus de la feuille", with: WITH, fx: { conf: { ortie: 3 }, flag: "ortie:cueille" }, back: true },
      ],
    },
    E_plouf: {
      title: "Plouf", back: true,
      text: [
        { with: WITH, text: "Ortie se penche au-dessus de l'eau noire pour attraper un nénuphar, se penche encore, se penche trop, et disparaît dans l'étang avec un bruit qui ressemble exactement à son nom." },
        { with: WITH, text: "Elle remonte aussitôt : l'eau, au bord, ne lui arrive qu'à la taille. Elle a des lentilles d'eau dans les cheveux, la bouche ouverte, et dans la main, serré à le broyer, le nénuphar." },
      ],
      choices: [
        { label: "La sortir de l'eau et la frictionner avec ton châle", with: WITH, fx: { conf: { ortie: 5 }, item: "nenuphar" }, back: true },
        { label: "Rire si fort que tu tombes assise dans la boue", with: WITH, fx: { conf: { ortie: 5 }, item: "nenuphar" }, back: true },
      ],
    },
    E_escargots: {
      title: "La collection", back: true,
      text: [
        "Ton panier de cueillette pèse plus lourd que tout à l'heure. Tu soulèves le linge qui le couvre : douze escargots y font leur promenade, sur les herbes, avec une lenteur d'ambassadeurs.",
        { with: WITH, text: "« C'est ma collection, dit Ortie. Ils voyagent avec nous. Celui-là, c'est le capitaine. » Le capitaine est en train de manger ton millepertuis." },
      ],
      choices: [
        { label: "Négocier : les escargots voyagent dans son tablier, pas dans le panier", with: WITH, fx: { conf: { ortie: 3 } }, back: true },
      ],
    },
    E_bistre_juge: {
      title: "Le jugement de Bistre", back: true,
      text: [
        "Bistre est assis sur le comptoir, ce qui est défendu, au milieu des flacons, et te regarde travailler.",
        { with: WITH, text: "« Il dit, traduit Ortie, que de son temps, une sorcière savait tenir une boutique sans courir partout comme une poule. Il dit qu'il a vu passer quatre sorcières dans cette maison, en comptant Mémé deux fois parce qu'elle a changé en vieillissant, et que tu es la plus agitée. Il dit qu'il a faim. Il dit que ça, ce n'est pas une opinion, c'est un fait. »" },
        "Bistre bâille, d'une façon qui montre toutes ses dents, sans exception, comme une preuve.",
      ],
      fx: { conf: { ortie: 3 } },
    },
    E_tiennot_dormeur: {
      title: "La fenêtre de la forge", back: true,
      text: [
        { with: WITH, text: "Ortie a disparu. Tu la retrouves derrière la forge, debout sur un seau renversé, le nez contre la petite fenêtre de l'arrière-salle, où Tiennot dort, gris, sur son lit de sangle." },
        { with: WITH, text: "Elle lui parle à travers la vitre, tout bas. « T'as perdu, dit-elle. Tu dors, alors t'as perdu. Je l'ai dit à tout le monde. » Elle attend. « Réveille-toi, que je te le dise en face. »" },
        "Tu la fais descendre du seau. Elle se laisse faire, sans un mot, et elle te tient la main jusqu'à la place.",
      ],
      fx: { conf: { ortie: 5 } },
    },
    E_sucre: {
      title: "Le sucre d'orge", back: true,
      text: [
        { with: WITH, text: "Devant les ruches de la mère Gaubert, Ortie s'arrête net, comme un chien d'arrêt, la main tendue vers les sucres d'orge rouges et blancs, alignés sur leur planche." },
        { with: WITH, text: "Elle ne demande rien. Elle sait qu'il ne faut pas demander. Elle se contente de les regarder avec une intensité qui ferait fondre le sucre." },
      ],
      choices: [
        { label: "Lui en acheter un (1 sou)", with: WITH, fx: { gold: -1, conf: { ortie: 5 } }, back: true },
        { label: "Lui dire « une autre fois »", with: WITH, back: true },
      ],
    },
    E_rangement: {
      title: "Le rangement", back: true,
      text: [
        { with: WITH, text: "Ortie a rangé les étagères de la boutique. Tu ne lui as rien demandé. Elle les a rangées par couleur, du jaune au vert, en passant par le brun, si bien que le sirop de toux est à côté de l'élixir de saule, et le baume à côté de l'eau de brume." },
        "C'est complètement faux, et c'est très joli. Les flacons, en rang dans la lumière, font un arc-en-ciel.",
      ],
      choices: [
        { label: "Garder ce rangement", with: WITH, fx: { conf: { ortie: 5 } }, back: true },
        { label: "Tout remettre en ordre, en lui expliquant pourquoi", with: WITH, fx: { conf: { ortie: 2 } }, back: true },
      ],
    },

    // ---------------------------------------------------------------- Monseigneur
    K_monseigneur_joncs: {
      title: "Monseigneur", place: "etang", with: WITH,
      fx: { flag: "monseigneur:trouve", quest: "I_monseigneur", conf: { ortie: 10 }, ep: ["seance", 300] },
      text: [
        "Vous fouillez les joncs, Ortie d'un côté, toi de l'autre, pendant une heure qui sent la vase et la menthe d'eau. Ortie appelle « Monseigneur ! Monseigneur ! » d'une voix de plus en plus petite, comme on appelle quelqu'un dont on n'espère plus la réponse.",
        "C'est toi qui le trouves, sous une souche, à moitié enfoncé dans la boue tiède. Il n'est pas gris. Il est vert, brun, pustuleux, magnifique, et il a l'air de quelqu'un qui attendait qu'on vienne le chercher en personne.",
        "Ortie le prend dans ses deux mains, le colle contre sa joue, ce que Monseigneur supporte avec la patience des grands, et se met à pleurer, puis à rire, puis à te serrer la taille avec un bras, l'autre levé pour protéger le crapaud.",
        "« Il est parti voir sa famille, explique-t-elle en reniflant. Il en a pas, mais il est allé voir quand même. »",
      ],
      choices: [{ back: "H_etang" }],
    },
  },
};
