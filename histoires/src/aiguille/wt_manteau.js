// L'Île Folle-Aiguille · side story « Le manteau du commis » (owes its question to The Overcoat: who sees the small man,
// and what does it cost the strong to give him back the one thing he had?). Act II, Fargue: every barrel of salt beef
// must be certified by a copying clerk of the Admiralty's victualling office, Anatole Picot, fifty years old, who has
// copied for thirty years, and who has just bought, after three winters of soup without meat, a new overcoat with an
// otter collar. Two nights ago, at the Basse-Fosse, it was torn from his back. Fargue knows who took it: Térence Gabet,
// one of the men he is recruiting. He makes Gabet give it back (wt:rend), buys the clerk a new one with the baron's
// money (wt:achete), or leaves it be (wt:laisse). Wired in XR_jours.
module.exports = {
  passages: {
    WT_commis: { act: "II", title: "Le manteau du commis", place: "quai_hollandes", ambiance: "ville", second: true,
      text: [
        "Le bureau des vivres de l'Amirauté occupe trois pièces au rez-de-chaussée d'un ancien grenier à sel, sur le quai, et il y fait si humide que l'encre y moisit dans les encriers. Chaque baril de bœuf salé qui monte à bord d'un navire armé à Morlenc doit y être inscrit, pesé, goûté, certifié, et le certificat recopié trois fois, à la plume d'oie, par un commis. Il y en a six. Fargue a affaire au dernier, celui du fond, contre le mur qui suinte.",
        "Il s'appelle Anatole Picot. Il a cinquante ans, une tête de souris chauve, des manches de lustrine, et une écriture si belle, si régulière, si parfaitement penchée qu'on la croirait gravée. Il copie depuis trente ans. Il ne lève jamais les yeux de sa page. Ses collègues lui jettent des boulettes de papier dans le dos, en riant, et il les ramasse, et il les défroisse, et il les range dans un tiroir, parce que du papier, c'est du papier.",
        "Ce matin-là, il tremble. Il grelotte, dans sa veste élimée, les lèvres bleues, et il fait trois pâtés sur un certificat, ce qui, au dire de ses collègues hilares, ne lui est pas arrivé depuis l'an de la grande comète. Fargue, qui attend son tampon, lui demande s'il est malade. Le petit homme lève enfin les yeux, et ce sont des yeux de chien perdu. Il dit qu'on lui a volé son manteau.",
      ],
      choices: [{ label: "Écouter l'histoire du manteau", to: "WT_loutre" }] },
    WT_loutre: { act: "II", title: "Le manteau du commis", place: "quai_hollandes", ambiance: "ville", second: true,
      text: [
        "Il l'a économisé pendant trois hivers. Il a mangé de la soupe sans viande, il a marché sur la pointe des pieds pour ne pas user ses semelles, il a renoncé à la chandelle le soir et il copiait, chez lui, pour un libraire, à la lumière de la lune. Il a choisi le drap avec le tailleur, des semaines, et le col, en loutre, une vraie loutre des marais de Varnèse, douce comme un chat. Il l'a porté onze jours. Il raconte ces onze jours comme d'autres racontent leur lune de miel.",
        "Le douzième soir, un collègue du bureau a donné une petite fête pour l'occasion, par moquerie, en l'honneur du manteau. Il a bu deux verres de vin. Il est rentré par la Basse-Fosse, pour couper. Deux hommes l'ont arrêté sous un porche, rue des Cordiers ; l'un l'a tenu, l'autre a tiré le manteau, et ils l'ont laissé dans la boue, en chemise, et ils sont partis en riant. Il a couru au guet. Le guet a ri. Il a couru chez le commissaire. Le commissaire l'a fait attendre trois heures, puis l'a renvoyé en lui demandant s'il savait à qui il parlait.",
        "Fargue écoute. Il connaît la rue des Cordiers. Il connaît aussi le manteau. Il l'a vu, la veille au soir, à la Truie-qui-file, sur le dos de Térence Gabet, un gabier de la Basse-Fosse qu'il est en train de gagner à sa cause, un garçon solide, gai, menteur, utile, qui se pavanait au comptoir en caressant un col de loutre, en racontant à tout le monde qu'il l'avait gagné aux dés à un notaire.",
        "Le petit homme a fini. Il se remet à copier. Sa main tremble. Il fait un quatrième pâté. Il le regarde, sur sa page, longtemps, comme on regarde une tache de sang.",
      ],
      choices: [
        { label: "Aller trouver Gabet, ce soir, et lui faire rendre le manteau", fx: { flag: "wt:rend" }, to: "WT_rend" },
        { label: "Acheter au commis un manteau neuf, avec l'argent du baron", if: { gold: { min: 30 } }, fx: { flag: "wt:achete", gold: -30 }, to: "WT_achete" },
        { label: "Prendre son tampon, et laisser le petit homme à sa page", fx: { flag: "wt:laisse" }, to: "WT_laisse" },
      ] },
    WT_rend: { act: "II", title: "Le manteau du commis", place: "basse_fosse", ambiance: "nuit", second: true,
      text: [
        "Il trouve Gabet à la Truie-qui-file, au comptoir, dans le manteau. Il ne fait pas de scène. Il s'assied à côté de lui, commande deux rhums, et lui dit, à voix basse, en regardant son verre, qu'il sait d'où vient la loutre. Gabet rit, puis cesse de rire. Fargue lui dit qu'il le rendra ce soir, plié, au bureau des vivres, devant la porte, avec un mot d'excuse, et que s'il ne le fait pas, il ne montera pas à bord de la Cormorane, ni d'aucun autre navire où Fargue a des amis, c'est-à-dire d'aucun.",
        "Gabet le rend. Il le rend en jurant, en crachant, en disant que c'est pour un rond-de-cuir qui ne vaut pas la loutre qu'il porte. Le lendemain matin, Anatole Picot trouve le manteau sur le seuil, plié, dans un papier, avec un mot écrit en lettres de forçat : *Pardon. Erreur.* Il le prend dans ses bras. Il ne le met pas tout de suite. Il le serre contre lui, longtemps, debout dans l'humidité du bureau, sous les rires de ses collègues, qui ne rient plus.",
        "Gabet monte à bord, quand même. Il est utile. Mais il regarde Fargue autrement, désormais, avec une rancune patiente, comme on regarde un homme qui vous a pris quelque chose de doux pour le donner à quelqu'un de laid. Fargue se dit qu'il vient de perdre un fidèle pour un commis qu'il ne reverra jamais. Puis il se dit qu'il en a vu d'autres, de ces petits hommes, mourir dans la boue de la Basse-Fosse, et qu'Annette en était un, à sa manière, et que personne ne lui a rien rendu.",
      ],
      choices: [{ label: "Retourner aux affaires du bord", fx: { quest: "WT" }, back: "XR_jours" }] },
    WT_achete: { act: "II", title: "Le manteau du commis", place: "quai_hollandes", ambiance: "ville", second: true,
      text: [
        "Il ne veut pas d'histoires avec Gabet. Il a besoin de Gabet. Il va chez le fripier de la rue des Juges, et il achète un manteau de drap bleu, chaud, presque neuf, avec un col de lapin teint, qui imite la loutre de loin, par temps de brume. Il paie avec l'argent du baron. Il le fait porter au bureau des vivres par un gamin, avec un mot : *De la part de l'Amirauté, pour services rendus.*",
        "Le petit homme le reçoit en tremblant. Il croit au mot. Il croit que l'Amirauté, quelque part, au sommet d'un escalier de marbre, s'est souvenue de son nom et de ses trente ans de copies. Il le dit à tous ses collègues, qui se taisent, éberlués, et qui, pendant une semaine, cessent de lui jeter des boulettes. Il porte le manteau au bureau, même à l'intérieur, malgré la chaleur du poêle, pour qu'on le voie.",
        "Fargue repasse l'avant-veille de l'appareillage, pour le dernier certificat. Anatole Picot le reconnaît. Il lui dit, avec une fierté timide, que l'Amirauté lui a fait un cadeau. Il caresse le col de lapin. Fargue le félicite. En sortant, il croise Gabet sur le quai, dans la loutre, qui le salue gaiement. Fargue lui rend son salut. Il a payé pour que tout le monde soit content, et tout le monde l'est, et il n'aime pas ça du tout, sans savoir dire pourquoi.",
      ],
      choices: [{ label: "Retourner aux affaires du bord", fx: { quest: "WT" }, back: "XR_jours" }] },
    WT_laisse: { act: "II", title: "Le manteau du commis", place: "quai_hollandes", ambiance: "ville", second: true,
      text: [
        "Il prend son tampon. Il dit au petit homme qu'il est désolé, et il l'est, à peu près, autant qu'on l'est pour un inconnu. Il sort. Il a quarante barils de bœuf à faire monter avant le soir, et un équipage à gagner, et Gabet en est, et Gabet porte la loutre, et la loutre, en fin de compte, est un détail. Il se le dit. Il se le redit plusieurs fois dans la journée, ce qui devrait l'alerter.",
        "Il revient au bureau des vivres l'avant-veille de l'appareillage, pour le dernier certificat. Le bureau du fond est vide. Un autre commis, jeune, à favoris, a pris sa place. Fargue demande où est le petit homme. On lui répond, avec une indifférence polie, qu'il a pris froid, cette nuit-là, en rentrant en chemise, qu'il a eu la fièvre, puis le délire, qu'il a crié des choses horribles contre le commissaire, contre le guet, contre l'Amirauté elle-même, des choses qu'on ne l'aurait jamais cru capable de penser, et qu'il est mort hier, à l'hospice.",
        "Le soir, à la Truie-qui-file, Gabet est au comptoir, dans le manteau. Il fait très froid, pour la saison. La porte s'ouvre et se referme seule, deux fois, avec un courant d'air qui fait vaciller les chandelles et qui sent l'encre moisie. Gabet frissonne, resserre le col de loutre, rit, commande un rhum. Fargue, à l'autre bout du comptoir, regarde la porte. Il ne croit à rien. Il paie sa tournée et s'en va, plus tôt que d'habitude, par une autre rue que la rue des Cordiers.",
      ],
      choices: [{ label: "Retourner aux affaires du bord", fx: { quest: "WT" }, back: "XR_jours" }] },
  },
  extras: {
    people: {
      picot: { name: "Anatole Picot", aka: ["le petit commis"], qui: "Commis aux écritures du bureau des vivres de l'Amirauté, à Morlenc." },
    },
    quests: [
      { id: "WT", act: "II", kind: "annexe", title: "Le manteau du commis", start: "WT_commis", doit: "manteau", echo: ["wt:rend", "wt:achete", "wt:laisse"] },
    ],
  },
};
