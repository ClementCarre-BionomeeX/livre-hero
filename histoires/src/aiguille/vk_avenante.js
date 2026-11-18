// L'Île Folle-Aiguille · side story « Le capitaine de l'Avenante » (owes its question to Benito Cereno: when one sees
// that a ship's captain is the prisoner of his own crew, whom does one owe?). Act III, Brisegrève: a battered brig, the
// Avenante, anchors near the Cormorane. Gobert rows over with the child to offer water. Her captain, Morvézen, pale and
// trembling, never leaves the side of his boatswain, Rozec, who answers for him. The child understands: the crew holds
// the captain. Rozec, alone with the child, shows the scars on his back. The child tells Captain Ribaud (vk:dit), takes
// the note the captain slips into a hand and gives it to no one (vk:billet), or says nothing (vk:tait).
// Wired in A3m_brisegreve.
module.exports = {
  passages: {
    VK_brick: { act: "III", title: "Le capitaine de l'Avenante", place: "brisegreve", ambiance: "mer",
      fx: { meet: "morvezen" },
      text: [
        "Elle entre dans l'anse au matin du deuxième jour, sous un ciel bas, en tirant des bords maladroits, comme un ivrogne qui cherche sa porte : un brick de commerce, l'Avenante, de Morlenc, la peinture écaillée, une vergue cassée, des voiles reprisées de toile de couleurs différentes. Elle mouille à deux encablures de la Cormorane, de travers, trop près des roches. Sur le pont, des hommes, beaucoup d'hommes pour un si petit navire, qui regardent le fort sans bouger.",
        "La capitaine Ribaud fait armer le canot et envoie Gobert proposer de l'eau, des vivres, un charpentier, ce que les marins doivent aux marins. Gobert t'emmène pour ramer. Au pied de l'échelle de coupée, un homme vous accueille, un grand gaillard au cou de taureau, à la barbe rousse, avec un sifflet de maître d'équipage sur la poitrine et un couteau à la ceinture. Il s'appelle Rozec. Il remercie avec une politesse appliquée. Le capitaine est malade, dit-il, mais il va venir.",
        "Le capitaine vient. Un homme de cinquante ans, très maigre, en uniforme trop grand, rasé de frais avec des coupures au menton, comme si on l'avait rasé de force ou en tremblant. Il s'appelle Morvézen. Il serre la main de Gobert. Il parle d'une tempête au large, de scorbut, de la moitié de ses officiers morts. Il parle bien, avec des phrases toutes faites. Chaque fois qu'il cherche un mot, Rozec, à côté de lui, le lui souffle. Chaque fois qu'il fait un pas, Rozec en fait un. Ils ne se quittent pas d'une semelle. Rozec appelle ça du dévouement.",
      ],
      choices: [{ label: "Regarder autour de toi, pendant que Gobert parle", to: "VK_pont" }] },
    VK_pont: { act: "III", title: "Le capitaine de l'Avenante", place: "brisegreve", ambiance: "mer",
      text: [
        "Tu regardes. À l'arrière, assis sur la dunette, trois vieux matelots polissent des haches d'abordage, lentement, avec des chiffons, et suivent chaque geste du capitaine sans lever la tête. Le carré des officiers a sa porte clouée. La cloche du bord n'a pas de battant. Personne ne salue le capitaine quand il passe ; tout le monde salue Rozec. Et le capitaine, en parlant à Gobert, tourne sans cesse sa bague à son doigt, une grosse bague d'or, toujours dans le même sens, comme on tourne une clef dans une serrure qui ne s'ouvre pas.",
        "Gobert, lui, ne remarque rien, ou fait semblant. Il parle d'eau, de barriques, de charpentier. Puis Rozec t'emmène à la cambuse pour te donner un biscuit, en camarade. Là, seul avec toi, il ôte sa chemise, sans un mot. Son dos est un champ labouré : des cicatrices de fouet, les unes sur les autres, des blanches, des roses, des récentes. Il remet sa chemise. Il dit, très doucement : « Tu es mousse. Tu sais ce que c'est. Lui, il a fait ça à douze hommes, en quatre mois. Deux en sont morts. Maintenant, c'est lui qui obéit. On le ramène à Morlenc, vivant, pour qu'on le juge. Si quelqu'un se mêle de ça, on ne le ramènera pas. »",
        "Quand vous remontez, le capitaine Morvézen serre la main de Gobert pour prendre congé. Puis la tienne. Sa main est glacée, et mouillée, et elle laisse dans la tienne un petit papier roulé, serré, de la taille d'un doigt. Il ne te regarde pas. Rozec est à un pas. Dans le canot, en ramant, tu sens le papier contre ta paume, comme un charbon. Tu ne l'as pas encore ouvert.",
      ],
      choices: [
        { label: "Tout raconter à la capitaine Ribaud, dès le retour à bord", fx: { flag: "vk:dit" }, to: "VK_dit" },
        { label: "Lire le billet, et le garder pour toi", fx: { flag: "vk:billet" }, to: "VK_billet" },
        { label: "Jeter le papier à la mer sans le lire, et ne rien dire", fx: { flag: "vk:tait" }, to: "VK_tait" },
      ] },
    VK_dit: { act: "III", title: "Le capitaine de l'Avenante", place: "brisegreve", ambiance: "mer",
      text: [
        "La capitaine Ribaud t'écoute dans sa chambre, sans t'interrompre. Elle déroule le billet. Trois mots, d'une écriture tremblée : *Mutinerie. Sauvez-moi.* Elle reste un long moment à le regarder. Puis elle te demande de lui répéter, exactement, ce que t'a dit Rozec, avec les mots de Rozec. Tu répètes. Elle hoche la tête. Elle dit que c'est une affaire pour le gouverneur, pas pour elle, et qu'un navire mutiné dans un port du roi est une affaire de fort. Elle fait porter le billet au fort.",
        "À la nuit, les chaloupes du fort abordent l'Avenante, avec quarante soldats. On entend des cris, deux coups de feu, un plongeon. Au matin, le capitaine Morvézen a retrouvé son uniforme et sa cabine. Rozec et onze hommes sont aux fers, dans les cachots de Brisegrève, en attendant un navire de l'Amirauté qui les ramènera pour être pendus. L'un des trois vieux matelots s'est noyé en essayant de gagner la côte à la nage. Le capitaine fait porter à bord de la Cormorane une caisse de vin, avec ses compliments, pour le mousse.",
        "Gobert ouvre la caisse et te tend une bouteille. Tu ne la prends pas. Il la remet dans la caisse, et il referme la caisse, et il la jette à la mer, de ses propres mains, par-dessus le bastingage, devant tout l'équipage qui ne comprend pas. Puis il te dit, à voix basse : « Tu as bien fait. Il fallait le dire. C'était la loi. » Il crache dans l'eau. « Et maintenant, tu sais ce que ça vaut, la loi. Souviens-t'en, petit{e}. »",
      ],
      choices: [{ label: "Regagner la Cormorane", fx: { quest: "VK" }, back: "A3m_brisegreve" }] },
    VK_billet: { act: "III", title: "Le capitaine de l'Avenante", place: "brisegreve", ambiance: "mer",
      text: [
        "Tu le déroules derrière la chaloupe, à l'abri des regards. Trois mots, d'une écriture tremblée : *Mutinerie. Sauvez-moi.* Tu penses au dos de Rozec. Tu penses aux mains glacées du capitaine. Tu penses que tu tiens dans ta paume la vie de douze hommes, ou celle d'un seul, et que tu n'as pas la moindre idée de laquelle compte le plus. Tu plies le billet en quatre. Tu le glisses dans ta chemise. Tu décides d'attendre. Tu te dis qu'attendre, c'est encore choisir, et tu te le dis pour te consoler.",
        "Le lendemain, l'Avenante appareille, avant la Cormorane, en tirant ses bords maladroits. Tu la regardes sortir de l'anse, du haut de la hune. À l'arrière, près de la barre, tu distingues deux silhouettes côte à côte, une grande et une maigre, qui ne se quittent pas d'une semelle. La maigre lève la main, une fois, vers la Cormorane, et la laisse retomber. Tu ne sais pas si c'est un salut ou un reproche. Tu gardes ton billet contre ta peau toute la journée, et il te brûle.",
        "Tu ne sauras jamais si l'Avenante est arrivée à Morlenc, si le capitaine Morvézen a été jugé, ou jeté à la mer un soir de mauvaise humeur. Tu sais seulement que tu as tenu un homme au bout de ton silence, et que tu l'as laissé partir. Tu gardes le billet. Tu le gardes longtemps, des années, dans une boîte, avec d'autres papiers. Il t'arrive de le relire, sans raison, et de chercher, dans ces trois mots tremblés, ce que tu aurais dû faire. Les trois mots ne disent rien d'autre qu'eux-mêmes.",
      ],
      choices: [{ label: "Regagner la Cormorane", fx: { quest: "VK" }, back: "A3m_brisegreve" }] },
    VK_tait: { act: "III", title: "Le capitaine de l'Avenante", place: "brisegreve", ambiance: "mer",
      text: [
        "Tu laisses tomber le papier par-dessus le plat-bord, sans le dérouler, au milieu de l'anse. Il flotte une seconde, blanc sur l'eau grise, puis il s'imbibe et coule. Gobert, qui rame en face de toi, l'a vu. Il rame. Au bout d'un moment, il dit seulement, sans te regarder : « Ce que tu ne sais pas, tu n'as pas à le porter. C'est ce qu'on se dit. Ça ne marche pas très bien. »",
        "Le soir, tu regardes l'Avenante, à deux encablures, avec ses feux allumés. On entend de la musique à bord, une vielle, des chants, des rires. Les mutins fêtent quelque chose, ou se donnent du courage. Dans la cabine arrière, une seule lumière brûle, très tard, jusqu'à l'aube. Tu ne dors pas. Tu te dis que le papier ne disait peut-être rien d'important. Tu te dis que Rozec avait le dos en lambeaux. Tu te dis beaucoup de choses. Aucune ne t'endort.",
        "L'Avenante appareille le lendemain, à l'aube. La Cormorane, à midi. En mer, la nuit, dans ton hamac, il t'arrive de rêver d'un papier blanc qui coule dans une eau grise, et que tu essaies de rattraper, à la nage, sans jamais l'atteindre, et qui se déroule en coulant, lentement, sans que tu puisses lire ce qu'il y a dessus. Tu as choisi de ne pas savoir. Tu découvres que ne pas savoir pèse aussi lourd que savoir, et qu'on ne peut même pas le poser.",
      ],
      choices: [{ label: "Regagner la Cormorane", fx: { quest: "VK" }, back: "A3m_brisegreve" }] },
  },
  extras: {
    people: {
      morvezen: { name: "Le capitaine Morvézen", aka: ["le capitaine de l'Avenante"], qui: "Capitaine du brick l'Avenante, de Morlenc, que son équipage tient prisonnier." },
    },
    quests: [
      { id: "VK", act: "III", kind: "annexe", title: "Le capitaine de l'Avenante", start: "VK_brick", doit: "benitocereno", echo: ["vk:dit", "vk:billet", "vk:tait"] },
    ],
  },
};
