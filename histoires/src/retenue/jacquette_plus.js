// Jacquette, the scenes added: the salt thrown overboard, Gaudry's share, how she met the old man, the sergeant on the
// bridge, the courier's name on the Aulnes, and the turn on the lake at three in the morning (a new ending).
var A = "I";
module.exports = {
  J_sel_jete: { act: A, title: "Dix sacs à l'eau", place: "lac", fx: { flag: "sel:jete", time: 0.25 },
    text: [
      "Tu tranches les cordes de la bâche. Un sac, deux sacs. Ils tombent dans le lac avec un bruit mou et restent au fond. Quinze livres de profit fondent dans l'eau noire de la Retenue.",
      "La barque se soulève, allégée. Tu rames droit sur la lanterne de l'octroi, en pleine lumière.",
      "« Morand ! La Loutre ! » Gaudry t'aborde, fouille la barque, soulève les planches du fond, sonde la cale avec sa perche. Il trouve de l'eau et une couverture. Il te regarde, déçu comme un enfant.",
      "« Promenade de santé, dis-tu. On m'a recommandé l'air du lac et la compagnie des honnêtes gens. J'ai déjà trouvé l'air. »",
      "Il te laisse passer en jurant. Tu as perdu ta saison. Tu as gagné une heure.",
    ],
    choices: [{ label: "Filer vers la digue", to: "J_pied", via: "droit" }] },
  J_gaudry: { act: A, title: "La part de Gaudry", place: "lac", fx: { flag: "gaudry:paye", time: 0.5 },
    text: [
      "« Gaudry. Cinq sacs pour toi, cinq pour moi, et tu ne m'as pas vue. »",
      "Le vieux douanier te regarde par-dessus sa lanterne. Le jeune, derrière lui, regarde Gaudry.",
      "« Six, dit Gaudry. Et tu me dois une anguille fumée pour la Saint-Martin. »",
      "Vous passez les sacs d'une barque à l'autre en silence, comme des gens qui déménagent. Le jeune douanier aide. Il a l'air de faire cela pour la première fois, et de comprendre beaucoup de choses en même temps.",
    ],
    choices: [{ label: "Reprendre ta route vers la digue", to: "J_pied", via: "hetres" }] },
  J_souvenir: { act: A, title: "Six ans", place: "berge", fx: { flag: "jacquette:souvenir" },
    text: [
      "Il y a six ans, l'octroi t'a coulé ta barque à coups de gaffe, au milieu du lac, en plein hiver. Tu as nagé jusqu'au pied de la digue. Tu t'es hissée sur la margelle du canal de fuite, bleue de froid, et tu es restée là, incapable de bouger.",
      "Le vieux t'a trouvée là au matin, en faisant sa ronde. Il t'a portée jusqu'à sa cuisine. Il t'a fait boire un café arrosé, il a mis tes vêtements à sécher sur le poêle, et il a gardé ses questions.",
      "Quand tu es repartie, il t'a donné la clé de la grille du canal. « Les sacs, je ne les vois pas, a-t-il dit. Mais si un jour je te demande quelque chose, tu viendras. »",
      "Avant le gamin de cet après-midi, il t'avait tout donné et rien demandé.",
    ],
    choices: [{ label: "Revenir à ton attente", back: "J_cabane" }] },
  J_odon: { act: A, title: "Le sergent du pont", place: "pont", fx: { time: 0.25 },
    text: [
      "Tu marches droit sur la lanterne. Le sergent te reconnaît de loin, à ta tresse et à ta façon de marcher, comme si le sol bougeait.",
      "« La Loutre. Tu t'es trompée de rive, ce soir. »",
      "« J'attends une commission, sergent. Quelqu'un est passé, avec un paquet ? »",
      "Il te regarde longtemps. Derrière lui, ses deux jeunes font semblant de regarder ailleurs.",
      "« Le capitaine attend une courrière, cette nuit, dit-il enfin. Il ne l'a pas eue. Personne n'est passé sur ce pont. » Il baisse la voix. « Celle que tu attends a pris un autre chemin, si elle est maligne. Rentre chez toi, la Loutre, et regarde sous tes pierres. »",
    ],
    choices: [{ label: "Faire demi-tour", to: "J_retour", via: "odon" }] },
  J_retour: { act: A, title: "Dix bornes, dans l'autre sens", place: "berge", fx: { time: 1.25 },
    text: [
      { via: "odon", text: "Tu reprends la route de la Digue avec la phrase du sergent dans la tête. *Regarde sous tes pierres.*" },
      { if: { not: { via: "odon" } }, text: "Si le paquet a pris ce pont, il est au poste, et le poste t'est fermé." },
      "Tu refais les dix bornes dans l'autre sens. Le vent te gifle. Il est deux heures et demie quand tu revois ta cabane.",
    ],
    choices: [{ label: "Soulever la pierre bleue", to: "J_pierre" }] },
  J_maelle_nom: { act: A, title: "Maëlle", place: "berge",
    text: [
      "« Comment tu t'appelles ? »",
      "« Maëlle. Ternier. » Elle lâche enfin son caillou. « Quelqu'un m'a suivie depuis les tanneries. Un homme, avec une lanterne. Les mains bleues. Il a fait demi-tour au Grand Saule. »",
      "Fulbert Cosson, le teinturier. Tu lui as vendu du sel de Brême pour ses cuves, l'hiver dernier, au prix d'ami.",
      "« Tu as bien fait de prendre les Aulnes, dis-tu. Le pont est gardé. »",
      "« Je sais, dit Maëlle. J'ai vu la lanterne. » Elle regarde la digue, puis toi. « Qu'est-ce qu'il y a dans ce paquet, pour qu'on garde un pont ? »",
    ],
    choices: [
      { label: "« Viens avec moi, tu le verras. Il me faut deux bras de plus. »", to: "J_chambre", via: "maelle", fx: { item: "paquet", time: 1.25 } },
      { label: "« Retourne aux Foulons. À deux heures, réveille tout le monde. »", to: "J_chambre", via: "seule", fx: { item: "paquet", flag: "foulons:leves", time: 1.25 } },
    ] },

  // ------------------------------------------------------------------ on the lake, turning back
  J_demitour_lac: { act: A, title: "Trois heures, au milieu du lac", place: "lac", fx: { time: 1.5 },
    text: [
      "Au milieu du lac, à trois heures, le vent tombe une minute. Dans le silence, tu entends Saint-Rieul sonner, très loin, de l'autre côté de la digue. Trois coups.",
      "*Trois heures, la vanne de fond.* La lettre, tu ne l'as pas lue, mais tu sais lire une heure. Et tu sais ce que tu as vu sortir du mur ce soir, gros comme un bras.",
      "Tu as ton sel, ta barque, et deux heures et demie avant le jour. La digue est derrière toi. Le vent se relève, droit dans ton dos, pour la première fois de la nuit.",
    ],
    choices: [
      { label: "Faire demi-tour, vent arrière, vers la digue", to: "J_cri", fx: { time: 1 } },
      { label: "Continuer vers Saint-Vaast", to: "J_large" },
    ] },
  J_cri: { act: A, title: "Le long des quais", place: "foulons", end: true, fx: { time: 2.5 },
    text: [
      "Tu reviens vent arrière, le sel par-dessus bord, sac après sac, pour aller plus vite. À quatre heures, la pluie te rattrape. Tu passes la grille du canal, tu descends le canal de fuite jusqu'à la Sorge, et tu te laisses porter par le courant vers la ville.",
      "La lanterne de la Maison des Vannes, là-haut, est seule. La clé est entre d'autres mains, quelque part. Toi, tu as tes deux bras et une voix qui porte sur l'eau.",
      "À cinq heures, tu longes les quais des Foulons en criant. Tu cognes avec ta rame contre les volets des rez-de-chaussée. Tu siffles, deux coups courts, un long, le sifflet que les flotteurs connaissent. « Debout ! La digue ! Montez ! »",
      "Des fenêtres s'ouvrent. On te reconnaît : la Loutre, la contrebandière, qui crie dans la nuit. Certains rient. D'autres montent. Une femme te jette une couverture, comme pour te faire taire, puis elle prend ses enfants et elle part vers la Côte.",
      "À cinq heures et demie, la digue cède. Tu l'entends derrière toi, un grondement qui roule dans la vallée. Tu pousses ta barque dans la cour du lavoir, entre deux piliers, et tu t'accroches à la cloche.",
      "La vague passe. Quand elle est passée, tu es toujours accrochée à la cloche, et ta barque a disparu. Sur la Côte, il y a du monde : plus que tu ne pensais. Moins qu'il en faudrait.",
      "Ce que le vieux a fait, seul là-haut, avec sa lanterne, personne ne le racontera. Toi, tu as rebroussé chemin au milieu du lac. Tu te le rappelleras, les nuits où tu aimeras peu ce que tu es.",
    ] },
};
