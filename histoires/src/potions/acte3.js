// Act III, « La Rosée » (days 10 to 12): Mémé's plan at dawn, what Ortie took from the steward's pocket, the countess's
// hunt on day 11, the inspector and the licence at noon on day 12, and the night of the full moon at the Creux, where
// the steward comes for the last of the water. The heart of the rite (C_coeur) opens on the endings, in fins.js.
var WITH = "ortie";
var STOPPED = { has: "malbec:arrete" };
var ARREST = { flag: ["malbec:arrete", "grisaille:arretee"], quest: "III_malbec", ep: ["seance", 800] };
function proofChoices() {
  return [
    { label: "Montrer à la comtesse la page du carnet du sénéchal", if: { item: "registre" }, to: "C_comtesse_preuve", fx: { flag: "preuve:registre" } },
    { label: "Poser devant la comtesse la douve givrée, et laisser parler Maître Corvin", if: { all: [{ item: "tonneau_douve" }, { has: "corvin:allie" }] }, to: "C_comtesse_preuve", fx: { flag: "preuve:douve" } },
  ];
}
module.exports = {
  // ------------------------------------------------------------------ dawn at the Creux
  C_aube: {
    act: "III", title: "Le plan de Mémé", place: "creux",
    fx: { item: "page_verite", flag: "recette:verite", ep: ["seance", 200] },
    text: [
      "Le jour monte sur le Creux comme l'eau monte dans un puits : par le fond, lentement, en noyant les ombres une à une. Les arbres gris sortent de la nuit l'un après l'autre, figés dans des attitudes de dormeurs, les branches tendues vers la Source comme des mains vers un feu qui s'éteint. Au-dessus de la combe, entre les cimes, un pan de ciel pâlit. Aucun oiseau ne chante. Tu t'aperçois que tu attends un oiseau, et qu'il ne viendra pas.",
      "Mémé a passé la nuit à réfléchir, et la réflexion a toujours rendu Mémé très désagréable. Elle compte sur ses doigts d'écorce, et ses doigts craquent.",
      "« Trois choses, ma grande. Un : la pleine lune, après-demain, la nuit du douzième jour. Le sénéchal viendra prendre ce qui reste, avec tous ses tonneaux, parce qu'à la pleine lune la Source donne le double, et qu'il le sait. Ce sera la dernière récolte : après, il n'y aura plus rien à prendre, ni dans la Source, ni dans le bois, ni dans les enfants du hameau. »",
      "« Deux : la comtesse chasse en Vergeronde demain. Elle chasse le onzième jour de chaque mois depuis vingt ans, par habitude et pour se donner de l'appétit. Elle s'arrête toujours à la boutique pour faire boire ses chevaux. Ombeline me l'a dit, et Ombeline savait tout ce qui passait sous ses arbres. Si tu as quelque chose à lui dire sur son sénéchal, ce sera le moment, et il sera à côté d'elle, en train de sourire. »",
      "« Trois : la Grande Rosée. Tu as la recette. Il te manque une larme, et tu ne la trouveras pas en la cherchant. »",
      "Elle fouille dans les plis de mousse de sa robe, en tire une carte à jouer, le valet de pique, cornée et tachée de vert, et te la tend. « Et puisqu'on parle de sénéchal. Ombeline jouait aux cartes comme on se bat, et elle trichait. Elle avait écrit ça au dos d'une carte pour ne pas l'oublier. Un philtre de franc-parler. Ne t'en sers pas sur quelqu'un que tu aimes. Les gens qu'on aime, on préfère ne pas savoir tout ce qu'ils pensent. »",
      { with: WITH, text: "Ortie dort roulée en boule entre deux racines, un pouce dans la bouche, ce qu'elle nie farouchement faire depuis deux ans. Bistre est couché sur ses pieds, et il te regarde comme on regarde une domestique en retard." },
      "(Tu sais maintenant préparer le philtre de franc-parler : deux langues-de-cerf et une cuillère de miel.)",
    ],
    choices: [{ label: "Réveiller Ortie, et rester un moment au Creux", to: "H_creux" }],
  },

  // ------------------------------------------------------------------ what Ortie took
  C_poche: {
    act: "III", title: "Ce qu'Ortie a pris", place: "boutique", with: WITH,
    fx: { item: "registre", conf: { ortie: 5 }, ep: ["seance", 300] },
    text: [
      "Ortie t'attend derrière le comptoir, les mains dans le dos, avec l'air d'innocence absolue qui précède chez elle les catastrophes. Elle a mis sa robe propre. Elle s'est coiffée. Tu commences à avoir peur.",
      "« Je vais te montrer quelque chose, dit-elle, mais il faut d'abord que tu promettes de ne pas crier, de ne pas me punir, de ne pas le dire à Mémé, et de dire que je suis intelligente. »",
      "Tu promets les trois premières choses. La quatrième, elle la prend d'autorité.",
      "Elle sort de sa poche une page de carnet, pliée en seize, froissée, et un peu mâchée sur un coin. « Le jour où le monsieur rose est venu. Pendant qu'il parlait de la comtesse, j'ai mis Monseigneur sur sa manche, et il a regardé Monseigneur, et moi, j'ai regardé dans sa poche. Il y avait un petit carnet. J'ai pris une page. » Elle réfléchit. « Bistre dit que c'est du vol. Bistre vole du jambon tous les dimanches. »",
      "Tu déplies la page. Une belle écriture de clerc, ronde, appliquée, l'écriture de quelqu'un qui a toujours eu de bonnes notes. *Eau de Jouvence, livrée à Valombre, quarante flacons, à douze livres. Pour le Creux : six hommes, deux nuits sur trois. Brunet : double gage. Gaspard : la fille, pour qu'il tienne sa langue. A. M.*",
      "Les initiales du sénéchal, au bas de la page, avec un paraphe en forme de nœud.",
      "« Alors ? demande Ortie. Je suis intelligente ? »",
    ],
    choices: [
      { label: "Lui dire qu'elle est la plus intelligente des petites sœurs", fx: { conf: { ortie: 5 }, flag: "poche:bravo" }, back: "H_boutique" },
      { label: "Lui dire qu'elle est intelligente, et qu'on ne fouille pas dans les poches des gens", fx: { flag: "poche:sermon" }, back: "H_boutique" },
    ],
  },

  // ------------------------------------------------------------------ the countess's hunt, day 11
  C_comtesse: {
    act: "III", title: "La chasse de la comtesse", place: "boutique",
    fx: { meet: "comtesse", ep: ["seance", 200] },
    text: [
      "La chasse arrive par le chemin du hameau dans un tumulte de cors, de chiens et de sabots, qui fait taire le bois d'un coup, comme une gifle fait taire une salle. Douze cavaliers, une meute qui hurle dans ton jardin, des valets qui courent derrière en tenant leurs chapeaux, et, au milieu, sur une jument grise, une dame en habit de chasse vert, droite comme un piquet, avec le visage las d'une femme qui s'ennuie à cheval depuis vingt ans.",
      "La comtesse Isaure de Rocheclaire descend devant ta porte sans regarder où elle met les pieds, parce que d'autres l'ont toujours regardé pour elle. Elle entre, s'assied sur le banc des clients, et demande de l'eau pour ses chevaux et du vin pour elle-même. Tu n'as pas de vin. Elle prend une tisane, avec la mine de quelqu'un qui découvre un pays étranger.",
      "Derrière elle entre Ambroise Malbec, rose et souriant, en velours vert pour aller avec sa maîtresse. Il salue ton enseigne, il te salue, il salue Bistre, qui lui tourne le dos avec une lenteur calculée. Il s'assied à la droite de la comtesse, un peu en retrait, à la place exacte où se tient un homme qui parle à l'oreille des grands.",
      { if: { has: "corvin:allie" }, text: "Maître Corvin entre le dernier, ses bottes couvertes de boue, la sacoche sous le bras, et il se poste près de la porte avec l'expression d'un savant venu assister à une expérience qu'il juge mal préparée. Il te fait un petit signe de tête. Il a tenu parole : il est là, et il parlera fort." },
      { with: WITH, text: "Ortie s'est cachée sous le comptoir. Tu sens sa main qui serre le bas de ta jupe." },
      "« Une boutique charmante, dit la comtesse, d'une voix qui ne trouve rien charmant. Mon sénéchal me dit que vous êtes une jeune personne raisonnable. » Elle boit une gorgée de tisane, et fait une grimace. « Il dit cela de tout le monde. C'est son seul défaut. »",
      "Malbec sourit. Sur la table, devant lui, son gobelet de tisane fume.",
    ],
    choices: [
      { label: "Verser le philtre de franc-parler dans le gobelet du sénéchal", if: { item: "p_verite" }, fx: { drop: "p_verite" },
        test: { dom: "discretion", diff: 10, label: "Discrétion" }, win: { to: "C_comtesse_verite" }, lose: { to: "C_comtesse_rate" } },
    ].concat(proofChoices(), [
      { label: "Avouer à la comtesse ce que tu as signé pour son sénéchal", if: { has: "malbec:signe" }, hide: { has: "cession:dechiree" }, to: "C_comtesse_aveu" },
      { label: "Accuser le sénéchal devant tout le monde", to: "C_comtesse_rire" },
      { label: "Servir la tisane, et tenir ta langue", to: "C_comtesse_silence" },
    ]),
  },
  C_comtesse_rate: {
    act: "III", title: "Le gobelet", place: "boutique",
    fx: { regard: { malbec: "hostile" } },
    text: [
      "Tu te penches avec la théière pour resservir le sénéchal, et tu débouches le flacon dans ta manche, et le bouchon t'échappe. Il roule sur la table avec un petit bruit de bille, s'arrête contre le gobelet de Malbec, et Malbec le regarde.",
      "Il le prend entre deux doigts bagués, le renifle, et sourit d'un sourire qui ne monte plus jusqu'aux yeux. « De la langue-de-cerf, dit-il doucement. Ma grand-mère en mettait dans la soupe de mon grand-père les soirs où elle voulait savoir où il avait passé la journée. » Il vide son gobelet par terre, sur les pieds de Bistre, qui s'en va avec une dignité outragée. « Les sorcières et leurs tisanes, madame. Je vous avais prévenue. »",
      "La comtesse n'a rien vu, ou n'a rien voulu voir, ce qui revient au même chez les grands.",
    ],
    choices: proofChoices().concat([
      { label: "Te taire, le feu aux joues", to: "C_comtesse_silence" },
    ]),
  },
  C_comtesse_verite: {
    act: "III", title: "Franc-parler", place: "boutique",
    fx: ARREST,
    text: [
      "Le philtre glisse dans le gobelet du sénéchal avec un petit reflet vert, et se perd dans la tisane. Malbec boit en parlant, comme il fait tout, avec élégance et sans y penser.",
      "Puis il s'arrête au milieu d'une phrase sur le prix du foin.",
      "Son visage change. Le sourire ne disparaît pas : il se fige, il s'élargit, il devient le sourire véritable qui vivait derrière l'autre depuis toujours, et ce sourire-là est plus inquiétant que tous les froncements de sourcils du monde.",
      "« Le foin, dit Ambroise Malbec, je m'en moque. Je vole votre bois, madame. » Il le dit avec une sorte de soulagement, comme on retire des bottes trop étroites. « Je fais puiser l'eau du Creux, la nuit, depuis un an, et je la vends aux dames de Valombre sous le nom d'Eau de Jouvence. Douze livres le flacon. Vous en buvez vous-même, madame : je vous la vends trois fois le prix, puisque vous ne regardez jamais les comptes. J'ai fait signer le décret de patente pour chasser la sorcière, parce qu'une sorcière, ça voit. J'ai acheté un garde-chasse, un colporteur et six manants. J'ai très bien fait les choses. » Il se penche vers la comtesse, confidentiel. « J'ai une maison à Valombre, une autre en Lombardie, et un nom de baron qui m'attend chez un notaire. Les enfants du hameau dorment, oui. C'est fâcheux. On n'a rien sans rien. »",
      { if: { has: "corvin:allie" }, text: "« Ha ! tonne Maître Corvin, si fort que les chiens se mettent à aboyer dans le jardin. Ha ! Voilà, madame ! Voilà une démonstration ! Je n'en espérais pas tant ! Douze ans d'Académie, quatre cents traités, et la vérité tombe d'un gobelet de tisane ! Notez, madame, notez ! Moi, je note ! »" },
      "La comtesse pose sa tisane. Elle regarde son sénéchal longtemps, avec une attention qu'elle n'a sans doute jamais accordée à aucun homme de sa maison. « Trois fois le prix, dit-elle enfin. Vous m'avez vendu ma propre eau trois fois le prix. »",
      "Elle se lève. Elle appelle ses gens d'une voix qui n'est plus lasse du tout. On emmène Ambroise Malbec, qui sourit encore, et qui parle encore, de ses caves, de ses maîtresses, de ce qu'il pense de la comtesse au réveil, et les valets qui le tiennent par les bras ont beaucoup de mal à garder leur sérieux.",
      { with: WITH, text: "Ortie sort de sous le comptoir. « Tu vois, dit-elle. Il ne faut pas en donner aux gens qu'on aime. Lui, ça va. »" },
    ],
    choices: [{ label: "Regarder la chasse repartir", to: "C_comtesse_fin" }],
  },
  C_comtesse_preuve: {
    act: "III", title: "La preuve", place: "boutique",
    fx: ARREST,
    text: [
      { if: { has: "preuve:registre" }, text: "Tu poses sur la table, devant la comtesse, la page de carnet froissée, et un peu mâchée sur un coin. Elle la prend du bout des doigts, la lit, la relit, et tu vois ses yeux revenir trois fois sur la même ligne. Puis elle regarde le paraphe en forme de nœud. Elle le connaît : elle le voit au bas de tous ses comptes depuis quinze ans." },
      { if: { has: "preuve:douve" }, text: "Tu poses sur la table, devant la comtesse, la douve marquée de ses propres armes, couverte d'un givre qui ne fond pas dans la chaleur de la boutique. Maître Corvin s'avance, ouvre sa sacoche, et pose à côté le petit flacon de cristal au bouchon d'or. *Eau de Jouvence de Valombre.*" },
      { if: { has: "corvin:allie" }, text: "« Madame, dit Maître Corvin, et sa voix remplit la boutique jusqu'aux poutres, je suis inspecteur de la Guilde des Alambics depuis onze ans, et je n'ai jamais rien vu de plus froid que ce bois, sinon votre sénéchal. Le givre de cette douve et l'eau de ce flacon sont la même eau. Je l'affirme. Je le signerai. Je le crierai devant l'Académie, et l'Académie me détestera, ce qui m'est égal, puisqu'elle me déteste déjà. »" },
      { if: { has: "t:brunet" }, text: "Dehors, près des chevaux, Brunet le garde-chasse a ôté son chapeau. Il regarde ses gants de cuir. Quand la comtesse se tourne vers lui et lui demande s'il sait quelque chose, il répond « oui, madame », très bas, et il ne regarde pas le sénéchal." },
      "Ambroise Malbec sourit jusqu'au bout. Il dit que c'est une invention, une page volée, un faux de sorcière ; il dit que la jeune personne est jalouse, et la Guilde rancunière, et le bois malade de sa propre vieillesse. Il le dit très bien.",
      "La comtesse l'écoute jusqu'à la fin, comme elle écoute un sermon : sans un mot, sans un geste, en pensant à autre chose. Puis elle dit : « Ambroise, vous parlez trop bien pour un honnête homme. » Et elle appelle ses gens.",
      "On l'emmène. Il proteste avec politesse, en soulevant son chapeau.",
      { with: WITH, text: "Ortie sort de sous le comptoir, et tire la langue au dos du sénéchal, longuement. Tu ne la grondes pas." },
    ],
    choices: [{ label: "Regarder la chasse repartir", to: "C_comtesse_fin" }],
  },
  C_comtesse_fin: {
    act: "III", title: "Les armes de Rocheclaire", place: "boutique",
    fx: { regard: { comtesse: "cordial" }, stock: { renommee: 3 } },
    text: [
      "Avant de remonter à cheval, la comtesse s'arrête sur le seuil et regarde ton enseigne, longuement, comme elle n'a regardé aucune enseigne de sa vie.",
      "« Votre grand-mère m'a soignée de la rougeole quand j'avais six ans, dit-elle. Je l'avais oublié. On oublie beaucoup, quand on a des sénéchaux. » Elle remonte en selle. « Le Creux ne sera plus puisé. Je le fais garder dès ce soir. »",
      "La chasse repart dans le même tumulte, et le bois se referme derrière elle. Sur la table reste un gobelet de tisane à moitié bu, et sur le banc, oublié, un gant de chasse vert brodé d'argent.",
    ],
    choices: [{ back: "H_boutique" }],
  },
  C_comtesse_aveu: {
    act: "III", title: "La feuille signée", place: "boutique",
    fx: { flag: "cession:dechiree", conf: { ortie: 5 }, regard: { malbec: "hostile" }, ep: ["seance", 300] },
    text: [
      "Tu racontes à la comtesse la feuille que le sénéchal t'a fait signer, sur ce comptoir, le sixième jour : le droit de puisage et de recueil des eaux du Creux, cédé pour cent ans à la maison de Rocheclaire, contre la patente.",
      "La comtesse se tourne vers son sénéchal. « Je n'ai jamais demandé l'eau du Creux, Ambroise. »",
      "« Une précaution, madame, dit Malbec avec douceur. Un droit ancien qui traînait. Vos archives aiment les droits anciens. » Il tire la feuille de son pourpoint, parce qu'il l'a sur lui, contre son cœur, comme les choses précieuses. Elle la lui prend des mains avant qu'il ait fini de sourire.",
      "Elle la lit. Elle la déchire en quatre, puis en huit, et laisse tomber les morceaux dans ta cheminée. « Je n'aime pas les précautions qu'on prend en mon nom sans me le dire, dit-elle. Vous me ferez un rapport, Ambroise. Long. »",
      "Le sénéchal reste libre. Il remonte à cheval à côté de sa maîtresse, souriant toujours. Mais en passant devant toi, il te regarde, et pour la première fois tu vois dans ses yeux quelque chose qui ressemble à de la colère.",
      { with: WITH, text: "Ortie sort de sous le comptoir. « Bistre dit que tu as repris ce que tu avais vendu, dit-elle. Il dit que c'est rare. Il dit que les gens, d'habitude, préfèrent garder l'argent. »" },
    ],
    choices: [{ back: "H_boutique" }],
  },
  C_comtesse_rire: {
    act: "III", title: "Une accusation", place: "boutique",
    fx: { flag: "accuse:rire", regard: { malbec: "hostile" } },
    text: [
      "Tu dis tout, d'un seul souffle, debout devant la comtesse : le Creux, la Source, les tonneaux, la nuit, la Grisaille, les enfants qui dorment. Ta voix tremble au début et ne tremble plus à la fin.",
      "Un silence. Puis le sénéchal se met à rire, d'un rire franc, chaleureux, si sympathique que deux valets rient avec lui sans savoir pourquoi.",
      "« Madame, dit-il, voilà les sorcières. Une source magique, des voleurs de nuit, des enfants enchantés. Ma nourrice racontait les mêmes histoires, en mieux. » Il se tourne vers toi avec une bonté écrasante. « Avez-vous une preuve, mon enfant ? Un papier, un témoin ? Non ? Alors vous avez une imagination, ce qui est très joli à votre âge, et très dangereux au mien. »",
      { if: { has: "corvin:allie" }, text: "Maître Corvin ouvre la bouche, la referme, et serre sa sacoche contre lui. Il n'a pas d'écrit. Il te l'avait dit." },
      "La comtesse finit sa tisane. « Les jeunes filles seules dans les bois se font des idées, dit-elle, sans méchanceté, et sans intérêt. Ambroise, nous partons. »",
    ],
    choices: [{ back: "H_boutique" }],
  },
  C_comtesse_silence: {
    act: "III", title: "La tisane", place: "boutique",
    text: [
      "Tu sers la tisane. La comtesse parle de chasse, de chiens, d'un cerf dix-cors qui lui échappe depuis trois ans et qu'elle soupçonne de le faire exprès. Le sénéchal rit aux bons endroits. Personne ne parle du bois.",
      "Avant de partir, la comtesse regarde tes étagères d'un œil distrait, puis moins distrait.",
    ],
    choices: [
      { label: "Lui proposer une eau d'églantine, pour le teint", if: { item: "p_beaute" }, fx: { drop: "p_beaute", gold: 40, stock: { renommee: 3 }, flag: "comtesse:cliente" }, to: "C_comtesse_cliente" },
      { label: "La regarder partir", back: "H_boutique" },
    ],
  },
  C_comtesse_cliente: {
    act: "III", title: "Une cliente", place: "boutique",
    fx: { regard: { comtesse: "cordial" } },
    text: [
      "La comtesse débouche le flacon, respire, et son visage las se défait un instant, comme un ruban qu'on dénoue. « La haie au mois de juin, dit-elle. Je ne l'avais pas sentie depuis l'enfance. » Elle pose sur le comptoir deux livres d'argent, sans demander le prix, et range le flacon dans son gant.",
      "Le sénéchal regarde le flacon disparaître avec un intérêt d'homme d'affaires.",
      { with: WITH, text: "« C'est ma potion, dit Ortie, sous le comptoir, assez fort pour être entendue. Je l'ai inventée. » La comtesse se penche, voit Ortie, et sourit, pour la première fois de la journée." },
    ],
    choices: [{ back: "H_boutique" }],
  },

  // ------------------------------------------------------------------ the licence, day 12 at noon
  C_patente: {
    act: "III", title: "La patente", place: "boutique",
    fx: { ep: ["seance", 200] },
    text: [
      "À midi sonnant au clocher des Ronceraies, dont le son arrive jusqu'ici quand le vent est au sud, Maître Corvin Lachaise pousse la porte de la boutique. Il est exact. L'exactitude est une de ses vertus, et il en a fait un vice, à force de s'en vanter.",
      "Il pose sur le comptoir le décret à sceau rouge, son registre, son encrier de voyage, et sa plume, alignés comme des instruments de chirurgien. « Le douzième jour, dit-il. Cinq livres, et une préparation de votre main, aux fins d'analyse. La loi est la loi, mademoiselle. Elle est bête, souvent, mais elle est la même pour tous, et c'est sa seule qualité. »",
      { if: STOPPED, text: "Il ajoute, sans lever les yeux : « On dit à Valombre que le sénéchal de Rocheclaire est au cachot de la tour. On dit aussi que c'est une sorcière qui l'y a mis. » Il trempe sa plume. « Je n'ai rien dit. J'ai seulement souri. Je souris rarement. »" },
      { with: WITH, text: "Ortie est assise sur l'escalier, Bistre sur les genoux. Elle a décidé que Maître Corvin était un ennemi personnel, et elle le fixe sans ciller, comme les chats fixent les oiseaux derrière une vitre." },
    ],
    choices: [
      { label: "Le regarder relire le décret", if: { all: [{ has: "corvin:allie" }, STOPPED] }, to: "C_patente_dechiree" },
      { label: "Lui tendre le reçu que t'a laissé le sénéchal", if: { has: "malbec:signe" }, to: "C_patente_recu" },
      { label: "Payer cinq livres, et lui donner un sirop de toux", if: { all: [{ gold: { min: 100 } }, { item: "p_toux" }] }, why: "Il te faut cinq livres et un sirop de toux.", fx: { gold: -100, drop: "p_toux" }, to: "C_patente_payee" },
      { label: "Payer cinq livres, et lui donner un baume de plantain", if: { all: [{ gold: { min: 100 } }, { item: "p_baume" }] }, why: "Il te faut cinq livres et un baume.", fx: { gold: -100, drop: "p_baume" }, to: "C_patente_payee" },
      { label: "Payer cinq livres, et lui donner une potion d'éveil", if: { all: [{ gold: { min: 100 } }, { item: "p_eveil" }] }, why: "Il te faut cinq livres et une potion d'éveil.", fx: { gold: -100, drop: "p_eveil", flag: "corvin:eveil" }, to: "C_patente_payee" },
      { label: "Lui demander un délai", test: { dom: "social", diff: 15, label: "Persuasion" }, win: { to: "C_patente_delai" }, lose: { to: "C_patente_fermee" } },
      { label: "Lui avouer que tu n'as pas de quoi payer", to: "C_patente_fermee" },
    ],
  },
  C_patente_dechiree: {
    act: "III", title: "Le décret", place: "boutique",
    fx: { quest: "Q_patente", flag: "patente:dechiree", ep: ["seance", 400] },
    text: [
      "Maître Corvin relit le décret. Il le relit deux fois, en suivant les lignes du doigt, en remuant les lèvres, avec l'application d'un homme qui cherche une faute d'orthographe dans une lettre d'amour.",
      "« Rédigé à la demande du sénéchal Malbec, dit-il. Présenté à la signature de madame la comtesse par le sénéchal Malbec. Enregistré par le greffe sur la recommandation du sénéchal Malbec. » Il pose le décret. « Un acte obtenu par un homme qui le voulait pour commettre un crime est un acte vicié, mademoiselle. C'est du droit. C'est même du très bon droit. J'en suis assez fier. »",
      "Il déchire le décret en deux, d'un geste sec, puis en quatre, puis il hésite, et il garde un des morceaux, celui avec le sceau, et le glisse dans son registre. « Pour ma collection. On ne m'a jamais permis de déchirer un décret. Je voudrais m'en souvenir. »",
      "Il range ses instruments. Sur le seuil, il se retourne. « Votre sirop. J'en voudrais un autre flacon. À titre privé. » Il tousse. « Je le paierai. »",
    ],
    choices: [{ back: "H_boutique" }],
  },
  C_patente_recu: {
    act: "III", title: "Le reçu", place: "boutique",
    fx: { quest: "Q_patente", flag: "patente:recu" },
    text: [
      "Maître Corvin prend le reçu tamponné du bout des doigts, comme une lettre trouvée dans une poubelle. Il le lit, le retourne, le lit de nouveau.",
      "« Payé par la maison de Rocheclaire, dit-il. Par le sénéchal Malbec. » Il te regarde par-dessus ses lunettes, longuement. « La patente est en règle, mademoiselle. Le reste ne regarde pas la Guilde. » Il écrit dans son registre, d'une écriture appuyée qui troue presque le papier.",
      "Il range ses instruments en silence, ce qui ne lui ressemble pas.",
    ],
    choices: [{ back: "H_boutique" }],
  },
  C_patente_payee: {
    act: "III", title: "Cinq livres", place: "boutique",
    fx: { quest: "Q_patente", flag: "patente:payee", ep: ["seance", 300] },
    text: [
      "Tu vides la boîte en fer-blanc sur le comptoir, et Maître Corvin compte les sous lui-même, par piles de dix, en mouillant le pouce, comme Mémé. Cent sous. Le compte est bon. Il le refait quand même.",
      { if: { has: "corvin:eveil" }, text: "Puis il prend la potion d'éveil, la lève vers la fenêtre, et la regarde briller dans le jour comme un ciel avant le soleil. Il reste ainsi un long moment. « Je n'ai pas d'appareil pour mesurer ça, dit-il enfin, d'une voix étrange. L'Académie non plus. Elle va devoir en inventer un. » Il range le flacon dans sa sacoche avec la tendresse d'un père qui couche un nouveau-né." },
      { if: { not: { has: "corvin:eveil" } }, text: "Puis il prend le flacon, le débouche, le renifle, en verse une goutte sur le dos de sa main, la goûte, et note dans son registre une ligne si longue qu'elle déborde dans la marge." },
      "Il signe la patente. Il la tamponne. Il te la tend. « Vous êtes désormais une sorcière autorisée par la Guilde des Alambics de Valombre, mademoiselle. Je ne sais pas si c'est un honneur pour vous. Pour la Guilde, je crains que oui. »",
    ],
    choices: [{ back: "H_boutique" }],
  },
  C_patente_delai: {
    act: "III", title: "Un délai", place: "boutique",
    fx: { quest: "Q_patente", flag: "patente:delai" },
    text: [
      "Tu lui parles du bois, des enfants, de Mémé partie, de la caisse, de la petite sœur à nourrir. Tu ne pleures pas. Tu y penses, et tu décides que ce serait tricher.",
      "Maître Corvin t'écoute en tapotant le comptoir du bout de sa plume. « La loi ne prévoit pas de délai, dit-il. La loi prévoit cependant que l'inspecteur constate l'activité de l'officine à la date dite. » Il regarde tes étagères, ton chaudron, ton enseigne. « Je constate. L'officine est active. Je reviendrai à la Saint-Martin pour constater le paiement. La Saint-Martin est loin. Je marche lentement. »",
      "Il range ses instruments, et il sort sans te regarder, comme un homme qui vient de faire une chose dont il aura honte devant ses collègues et dont il sera fier tout seul.",
    ],
    choices: [{ back: "H_boutique" }],
  },
  C_patente_fermee: {
    act: "III", title: "Le sceau", place: "boutique",
    fx: { flag: "boutique:fermee", stock: { renommee: -3 } },
    text: [
      "Maître Corvin soupire, longuement, par le nez. « Je le craignais, dit-il. Je l'ai écrit dans mon rapport de la semaine dernière. J'aurais préféré me tromper. Ça m'arrive si rarement que j'en aurais fait une fête. »",
      "Il fait chauffer sa cire à la flamme de ta chandelle, et appose sur le décret le sceau rouge de la Guilde, qui sèche avec un petit craquement. « La loi vous laisse jusqu'à demain matin pour vider les lieux, mademoiselle. Je reviendrai à l'aube poser les scellés sur la porte. Je ne serai pas en avance. » Il hésite. « Je ne le suis jamais, en réalité. Mais demain, je serai en retard. »",
      { with: WITH, text: "Ortie se lève, traverse la boutique, et donne à Maître Corvin un coup de pied dans le tibia, de toutes ses forces. Il ne dit rien. Il se frotte la jambe, il ramasse son registre, et il s'en va." },
    ],
    choices: [{ back: "H_boutique" }],
  },

  // ------------------------------------------------------------------ the night of the full moon
  C_rituel: {
    act: "III", title: "La pleine lune", place: "creux",
    fx: { join: "ortie", ep: ["seance", 300] },
    text: [
      "La lune se lève sur Vergeronde, énorme, blanche, si proche qu'on croirait pouvoir lire ce qui est écrit sur ses taches. Tu montes au Creux avec Ortie, une lanterne à la main, par le sentier de la combe, et la forêt grise vous regarde passer. Les arbres endormis ont des formes que tu ne leur connaissais pas : un dos voûté, un bras levé, une tête penchée pour écouter. Les fougères givrées crissent sous vos pas. Un hibou appelle, une fois, très loin, et personne ne lui répond.",
      { if: { item: "grande_rosee" }, text: "Dans ta besace, le flacon de cristal de Mémé est tiède contre ta hanche, comme une bête vivante qui dort." },
      "Au Creux, la Source brille au fond de la combe d'une lumière pâle et malade, plus faible qu'il y a trois nuits. Mémé est assise entre ses racines. Elle vous attend. Elle a l'air plus petite, et plus grise, et ses yeux sont fermés.",
      "Ortie lâche ta main, et elle se met à chanter.",
      "Elle chante sans le savoir, sans ouvrir vraiment la bouche, un air très ancien qui monte de sa gorge comme l'eau monte d'une source. La Source frémit. Mémé ouvre les yeux.",
      { if: STOPPED, text: "Le bois est silencieux. Aucune lanterne sur le sentier du nord. Aucun grincement d'essieu. Ce soir, personne ne viendra." },
      { if: { not: STOPPED }, text: "Et sur le sentier du nord, les lanternes paraissent. Dix, cette fois. Puis douze. Des charrettes, des mulets, des tonneaux à n'en plus finir, et des hommes avec des louches et des gants, et Brunet devant, et derrière, sur un cheval gris, enveloppé dans une cape de velours, Ambroise Malbec en personne, qui vient voir de ses yeux la dernière récolte, comme un vigneron vient voir la dernière vendange." },
      { if: { all: [{ not: STOPPED }, { has: "gaspard:avoue" }] }, text: "Ils arrivent tard, crottés jusqu'aux genoux, en jurant : leur guide habituel les a lâchés, et ils se sont perdus deux heures dans les marais de l'étang. Gaspard a tenu parole." },
      { if: { all: [{ not: STOPPED }, { has: "cession:dechiree" }] }, text: "Le sénéchal n'a plus de feuille signée dans son pourpoint. Il n'en a plus besoin : il a des tonneaux, et il a des hommes." },
    ],
    choices: [
      { label: "Écouter Ortie chanter", if: STOPPED, to: "C_coeur" },
      { label: "Déboucher la potion de brume sur le sentier, devant eux", if: { all: [{ not: STOPPED }, { item: "p_brume" }] }, fx: { drop: "p_brume" }, to: "C_piege" },
      { label: "Appeler Brunet par son nom", if: { all: [{ not: STOPPED }, { has: "t:brunet" }] }, to: "C_brunet" },
      { label: "Te dresser devant eux, avec Mémé", if: { not: STOPPED }, to: "C_face" },
      { label: "Prendre Ortie et te cacher entre les racines", if: { not: STOPPED }, to: "C_vol" },
    ],
  },
  C_piege: {
    act: "III", title: "La brume", place: "creux",
    fx: { flag: ["malbec:piege", "malbec:arrete", "grisaille:arretee"], quest: "III_malbec", ep: ["seance", 800] },
    text: [
      "Tu débouches le flacon au bord du sentier, et tu le poses dans l'herbe, et tu recules.",
      "La brume en sort comme une bête sort d'un terrier : d'abord un museau, une volute curieuse qui flaire le vent, puis le corps entier, blanc, épais, qui se déroule et coule sur le sentier, jusqu'aux genoux des mulets, jusqu'au poitrail des chevaux, jusqu'aux lanternes, qu'il avale l'une après l'autre. Le Creux est plein de lait. On entend des jurons, des appels, un mulet qui proteste, un tonneau qui roule, un homme qui tombe dans un roncier avec un cri de surprise outragée.",
      "Puis on entend la voix de Mémé, et ce n'est plus une voix de vieille femme : c'est un bruit de feuillage dans un grand vent, qui vient de partout et de nulle part, et qui dit les noms des hommes, un par un, avec le nom de leur mère et celui de leur village. Les hommes de Malbec lâchent leurs louches et s'enfuient au hasard dans le blanc, chacun pour soi, et la brume les avale.",
      { if: { has: "tiennot:reveille" }, text: "Au loin, sur le chemin du hameau, d'autres lanternes : Maître Ferrand, son marteau de forge sur l'épaule, et derrière lui la moitié des Ronceraies, avec des fourches et des fléaux. Tiennot leur a raconté son rêve. Ils sont venus." },
      { if: { has: "corvin:allie" }, text: "Et au milieu d'eux, une voix qui domine toutes les autres, et qui réclame, sur le ton d'un professeur qui fait l'appel, qu'on lui apporte une lanterne, une corde et un témoin." },
      "Quand la brume se lève, à minuit, Ambroise Malbec est assis dans un roncier, sa belle cape de velours accrochée à cent épines, son cheval parti, et il sourit encore, mais d'un seul côté de la bouche.",
      "Brunet lui-même le ramène au hameau, une main sur son épaule. « Braconnage, dit le garde-chasse. C'est mon métier. »",
    ],
    choices: [{ label: "Revenir vers la Source", to: "C_coeur" }],
  },
  C_brunet: {
    act: "III", title: "Le garde-chasse", place: "creux",
    fx: { flag: ["brunet:tourne", "malbec:arrete", "grisaille:arretee"], quest: "III_malbec", ep: ["seance", 800] },
    text: [
      "« Brunet ! »",
      "Ta voix part sur la combe et revient en écho, deux fois, trois fois, et à chaque écho les hommes s'arrêtent un peu plus. Le garde-chasse lève sa lanterne vers toi. Il te reconnaît. Il regarde ses gants de cuir, et les mains brûlées de froid qu'il a dessous, et le bois gris autour de lui, où il chasse depuis vingt ans, et où il a appris à marcher.",
      "« Ma petite a dormi trois jours, dit-il, et sa voix est rauque. La semaine dernière. Elle s'est réveillée toute seule. Je ne savais pas que c'était nous. » Il pose sa louche par terre, au bord de la Source, doucement, comme on pose une arme qu'on ne reprendra pas.",
      "Derrière lui, un homme pose la sienne. Puis un autre. Puis tous.",
      "« Brunet, dit le sénéchal du haut de son cheval, d'une voix toujours douce. Je vous paie double. »",
      "Brunet se retourne vers lui, prend la bride du cheval gris, et fait descendre Ambroise Malbec de sa selle avec une politesse terrible. « Braconnage en forêt seigneuriale, monsieur le sénéchal. De nuit. Avec armes et charrettes. » Il le tient par le bras. « C'est mon métier. Je l'avais oublié. »",
    ],
    choices: [{ label: "Revenir vers la Source", to: "C_coeur" }],
  },
  C_face: {
    act: "III", title: "Le Vieux Chêne", place: "creux",
    fx: { flag: ["nuit:gardee", "meme:epuisee", "malbec:fuite"], ep: ["seance", 500] },
    text: [
      "Tu te lèves, la lanterne haute, et tu marches vers les hommes. Tu as peur. Tu marches quand même : c'est, t'a dit Mémé un jour, la seule définition du courage qui tienne debout.",
      "Derrière toi, Mémé se lève.",
      "Elle se lève comme la dernière fois, en grinçant, plus haute qu'elle n'était, et le Vieux Chêne se lève avec elle, et cette fois tout le Creux se lève : les arbres gris s'arrachent à leur sommeil avec des craquements de mâts dans la tempête, les racines sortent de la terre comme des serpents, les branches se tendent vers les lanternes. Le bois entier se penche sur les hommes de Malbec avec un long soupir de colère.",
      "Les mulets s'emballent. Les charrettes se renversent. Les tonneaux roulent dans la combe et se fendent, et l'eau d'argent qu'ils contenaient, l'eau volée depuis des mois, coule vers la Source comme une bête qui rentre au terrier. Les hommes s'enfuient en hurlant par le sentier du nord. Le sénéchal tourne bride et disparaît au galop, sa cape de velours claquant derrière lui comme un drapeau de défaite.",
      "Quand le dernier cri s'éteint, Mémé retombe entre ses racines, et elle ne se relève pas. Elle respire. Elle est très grise. « Celle-là, dit-elle dans un souffle, je ne la referai plus jamais. »",
    ],
    choices: [{ label: "T'agenouiller près d'elle", to: "C_coeur" }],
  },
  C_vol: {
    act: "III", title: "La dernière récolte", place: "creux",
    fx: { flag: "source:volee", stock: { grisaille: 3 } },
    text: [
      "Tu prends Ortie dans tes bras. Elle chante encore, contre ton épaule, très bas, et tu lui mets la main sur la bouche, et elle se tait, et la Source frémit comme si on venait de lui arracher quelque chose.",
      "Ils travaillent toute la nuit. Douze tonneaux, puis quinze, puis vingt. La lumière de la Source pâlit à chaque louche, et autour de la combe le bois grisonne avec un bruit doux de givre qui prend, une branche, une autre, un arbre entier. Mémé, entre ses racines, ferme les yeux. Tu la vois devenir plus petite à chaque tonneau.",
      "Vers trois heures du matin, le sénéchal descend de cheval et s'approche de la Source. Il trempe le bout d'un doigt ganté dans l'eau qui reste, le regarde, et soupire avec satisfaction. « Une belle année », dit-il.",
      "Puis ils repartent, lourds, lents, en riant de fatigue, et le grincement des essieux s'éloigne vers le nord.",
    ],
    choices: [
      { label: "Rejoindre le sénéchal sur le sentier : tu as signé, il te l'a rappelé", if: { all: [{ has: "malbec:signe" }, { not: { has: "cession:dechiree" } }] }, to: "X_jouvence" },
      { label: "Sortir de ta cachette, et courir vers Mémé", to: "C_coeur" },
    ],
  },
  C_coeur: {
    act: "III", title: "Le cœur du bois", place: "creux",
    fx: { join: "ortie" },
    text: [
      "La lune est au milieu du ciel, au-dessus du Creux, exactement, comme un œil qui regarde dans un puits. La Source tremble. Sa lumière monte et descend, faible, irrégulière, comme le souffle d'un malade.",
      { if: { not: { has: "source:volee" } }, text: "Elle respire encore. Elle attend." },
      { if: { has: "source:volee" }, text: "Elle respire à peine. Le bois, autour de la combe, est gris jusqu'à l'horizon." },
      "Ortie s'est remise à chanter, assise au bord de l'eau, les pieds nus dans la mousse. Elle chante les yeux ouverts, cette fois, et elle te regarde en chantant, comme pour te demander si elle a le droit.",
      "Mémé te fait signe d'approcher. Elle parle très bas, et sa voix est un bruit de feuilles mortes. « C'est maintenant, ma grande. La Source a besoin de quelqu'un, cette nuit, avant que la lune descende. Quelqu'un pour veiller. Une qui veille, une qui chante. Et le reste, tu le sais aussi bien que moi. » Elle sourit. « Tu as toujours tout su avant moi. Tu faisais semblant de ne pas savoir, pour me faire plaisir. »",
      { if: { item: "grande_rosee" }, text: "Dans ta main, le flacon de cristal est devenu chaud." },
      { if: { has: "meme:epuisee" }, text: "Mémé est si grise que tu ne la distingues plus du chêne. Seuls ses yeux bougent encore." },
    ],
    choices: [
      { label: "Verser la Grande Rosée, et veiller avec Ortie : une qui veille, une qui chante", if: { all: [{ item: "grande_rosee" }, STOPPED, { conf: "ortie", min: 70 }] }, big: true, to: "X_deux_soeurs" },
      { label: "Verser la Grande Rosée, et laisser Mémé choisir", if: { all: [{ item: "grande_rosee" }, { not: { has: "meme:epuisee" } }] }, to: "X_meme" },
      { label: "Laisser Ortie répondre à la forêt", if: { item: "grande_rosee" }, to: "X_ortie" },
      { label: "Prendre la place de Mémé", if: { any: [{ item: "grande_rosee" }, { not: { has: "source:volee" } }] }, to: "X_veilleuse" },
      { label: "Prendre Ortie par la main, et quitter le bois", to: "X_grisaille" },
    ],
  },
};
