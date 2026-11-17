// L'Île Folle-Aiguille · side story « Les chevaux du roulier » (owes its question to Michael Kohlhaas: how far may a
// man go to obtain justice, and when does justice turn into something else?). Act II, Fargue in Morlenc: Josse Le
// Ruyet, carter, an honest and stubborn man, had his two horses seized at the toll of the baron's mills under a false
// pretext, worked half to death and given back lame. A year of petitions. Nothing. He has learned that the baron sails
// on the Cormorane and comes to sign on, to settle the matter at sea. Fargue takes him on, on condition that he waits
// (vh:engage), sends him away with advice to go to law (vh:refuse), or offers him money for new horses (vh:paie).
// Wired in XR_jours.
module.exports = {
  passages: {
    VH_roulier: { act: "II", title: "Les chevaux du roulier", place: "basse_fosse", ambiance: "ville", second: true,
      fx: { meet: "ruyet" },
      text: [
        "L'homme l'attend devant le bureau d'enrôlement, sur le quai, depuis l'aube, debout, sa casquette à la main, au milieu des matelots qui rient de ses sabots. Un roulier : des épaules de bœuf, des mains de cuir, une blouse bleue délavée, une figure carrée, honnête, butée, d'une honnêteté qui a cessé d'espérer quoi que ce soit des autres. Il demande à parler au maître-coq. On lui a dit que c'était le maître-coq qui choisissait les hommes, en vrai. Fargue n'aime pas qu'on le sache.",
        "Il s'appelle Josse Le Ruyet. Il avait deux chevaux, Bijou et Capitaine, des bêtes de trait comme on n'en voit plus, qu'il a élevés lui-même et qui tiraient trois tonnes sur la côte des Hollandes sans souffler. Il y a un an, au péage des moulins Clavières, l'intendant du baron les a retenus, sous prétexte d'un papier qui manquait, un papier que personne n'avait jamais demandé à personne. Il les a fait travailler trois semaines aux meules. On les lui a rendus boiteux, couverts de plaies, et l'un des deux est mort à l'écurie le mois suivant.",
        "Depuis un an, il a écrit. Au tribunal de commerce, à l'échevinage, au baron lui-même, à l'Amirauté. On a perdu ses lettres. On l'a renvoyé d'un bureau à l'autre. Un avocat lui a pris quarante livres pour lui conseiller d'oublier. Il n'a pas oublié. Il a appris que le baron s'embarque sur la Cormorane. Il dit, très simplement, en regardant Fargue dans les yeux : « Je ne sais pas naviguer. J'apprendrai. Je veux être sur ce navire. En mer, il n'y a pas de bureaux. »",
      ],
      choices: [{ label: "Le faire asseoir, et l'écouter jusqu'au bout", to: "VH_justice" }] },
    VH_justice: { act: "II", title: "Les chevaux du roulier", place: "basse_fosse", ambiance: "ville", second: true,
      text: [
        "Fargue l'emmène boire un verre dans une taverne du quai. Le roulier boit de l'eau. Il dit qu'il ne veut pas d'argent. On lui en a proposé, à la fin, pour qu'il se taise : vingt livres, le prix d'un cheval de réforme. Il a refusé. Il veut que le baron dise qu'il a eu tort. Devant témoins. Il veut que Capitaine, qui boite encore, soit payé comme un cheval sain, et que Bijou soit payé comme un mort. Il dit qu'il ne cédera pas. Il dit qu'il a vendu sa charrette pour payer les avocats, et que maintenant il lui reste ses mains, et qu'il n'en a besoin que pour une chose.",
        "Fargue l'écoute. Il reconnaît ce ton. C'est le sien, à peu de chose près, le soir où il a décidé, dans la cambuse de la Maraude ou au bord d'une fosse des pauvres, qu'il ne demanderait plus rien à personne et qu'il prendrait. Il pense que cet homme est exactement ce qu'il lui faut : une rancune droite, solide, qui ne se laissera pas acheter. Il pense aussi qu'un homme qui veut la peau du baron pour lui tout seul, à bord, sans attendre, peut faire sauter en une nuit tout ce qu'il a monté en six mois.",
        "Le roulier attend, les mains à plat sur la table, comme il a attendu dans tous les bureaux de Morlenc. Il a l'air de pouvoir attendre ainsi jusqu'à la fin du monde. Puis il ajoute, sans élever la voix : « Si vous ne me prenez pas, je trouverai autre chose. Avant que le navire parte. »",
      ],
      choices: [
        { label: "L'engager, à condition qu'il attende le signal, et rien d'autre", fx: { flag: "vh:engage" }, to: "VH_engage" },
        { label: "Le renvoyer, et lui dire de retourner devant les juges", fx: { flag: "vh:refuse" }, to: "VH_refuse" },
        { label: "Lui offrir quarante livres pour un cheval neuf", if: { gold: { min: 40 } }, why: "Fargue n'a plus de quoi.", fx: { flag: "vh:paie", gold: -40 }, to: "VH_paie" },
      ] },
    VH_engage: { act: "II", title: "Les chevaux du roulier", place: "basse_fosse", ambiance: "ville", second: true,
      text: [
        "Fargue lui explique les choses lentement, comme on explique un nœud. Il y aura un jour. Ce jour-là, le baron et beaucoup d'autres auront à rendre des comptes, et Le Ruyet sera devant, s'il le veut. D'ici là, il ne touchera à personne. Il frottera le pont, il tirera sur les bouts, il mangera ce qu'on lui donne et il dira « oui, monsieur le baron » quand le baron passera. S'il ne peut pas, qu'il le dise maintenant. Le roulier réfléchit longtemps. Puis il dit qu'il peut. Il a attendu un an devant des guichets. Il attendra devant un baron.",
        "On l'inscrit au rôle comme matelot de troisième classe, avec la mention *novice, terrien*, qui fait rire le commis. Il apprend vite. Il a la force de deux hommes et la patience de quatre. Il vit à l'écart, à l'eau claire, loin des dés et des chansons. Les autres l'appellent le Bœuf. Il se laisse appeler ainsi.",
        "Un soir, à quai, avant l'appareillage, Fargue le voit sur le pont, accoudé au bastingage, qui regarde le baron monter la passerelle, en redingote, avec sa canne et son lorgnon. Le roulier reste immobile, les mains ouvertes sur le bois. Il regarde, simplement, avec une attention extraordinaire, comme on regarde un champ qu'on va labourer. Fargue se dit qu'il a acheté un outil très solide, et il a, pour la première fois depuis longtemps, un peu peur de ce qu'il a acheté.",
      ],
      choices: [{ label: "Retourner aux préparatifs", fx: { quest: "VH" }, back: "XR_jours" }] },
    VH_refuse: { act: "II", title: "Les chevaux du roulier", place: "basse_fosse", ambiance: "ville", second: true,
      text: [
        "Fargue lui dit non. Il lui dit que la Cormorane n'est pas une salle d'audience, que la mer ne rend pas la justice, qu'elle la noie, et qu'un roulier qui ne sait pas nager n'a rien à y faire. Il lui conseille de retourner devant les juges, de trouver un autre avocat, de faire écrire un journal. Il s'entend parler, et il s'étonne de sa propre voix, qui ressemble à celle d'un échevin. Le roulier l'écoute jusqu'au bout. Puis il se lève, remet sa casquette, et dit : « Vous aussi. » Il s'en va.",
        "Fargue n'y pense plus pendant quatre jours. Il achète son lard, ses pois, son vinaigre. Le soir du cinquième jour, depuis le pont de la Cormorane, il voit une lueur rouge monter au-dessus des toits, du côté des moulins Clavières. On dit, au matin, que le péage a brûlé, et le bureau de l'intendant avec, et tous les registres. On dit qu'on a trouvé, sur la porte du péage, cloué avec un clou de fer à cheval, un papier sur lequel était écrite, d'une main d'homme qui écrit peu, la liste de toutes les lettres restées sans réponse.",
        "On arrête Le Ruyet le jour même. Il ne se cache pas. Il attend les gendarmes assis devant l'écurie, à côté de Capitaine, qui boite. Fargue apprend tout cela en ville, en marchandant des oignons. Il pense que le roulier a fait ce qu'il aurait fait, lui, à sa place, et qu'il l'a fait seul, et trop tôt, et pour rien. Il pense aussi qu'il lui a refusé une place à bord pour éviter exactement ça. Il n'arrive pas à décider si c'est une victoire.",
      ],
      choices: [{ label: "Retourner aux préparatifs", fx: { quest: "VH" }, back: "XR_jours" }] },
    VH_paie: { act: "II", title: "Les chevaux du roulier", place: "basse_fosse", ambiance: "ville", second: true,
      text: [
        "Il pose quarante livres sur la table, de l'argent du baron, et il trouve ça drôle. Il dit que c'est pour un cheval neuf, pour reprendre la route, pour vivre. Il dit qu'il y a des combats qu'on ne gagne pas, et que le seul moyen de ne pas les perdre est de ne pas les livrer. Il dit qu'il en sait quelque chose. Le roulier regarde l'argent. Il le regarde longtemps, sans y toucher, comme on regarde une bête morte au bord d'un chemin.",
        "Puis il le repousse, d'un doigt, vers Fargue. « On m'a proposé vingt livres pour me taire, dit-il. Vous m'en proposez quarante. C'est plus. C'est la même chose. » Il se lève. Il dit qu'il ne veut pas un cheval. Il veut les siens, et qu'on dise qu'on a eu tort. Il dit que si personne ne le dit jamais, il le dira lui-même, tous les jours, devant le péage, jusqu'à ce qu'on l'enferme ou qu'on l'écoute. Il remercie Fargue pour l'eau. Il s'en va.",
        "Fargue ramasse ses quarante livres. Il les garde un moment dans la main. Il les sent plus lourdes qu'à l'aller. Le lendemain, en passant devant les moulins Clavières, il voit un homme en blouse bleue debout devant la barrière du péage, immobile, sa casquette à la main, avec un cheval boiteux à côté de lui, que les charretiers contournent en haussant les épaules. Il y est encore le jour de l'appareillage. Fargue passe son chemin, sans savoir s'il vient de voir un fou ou le seul homme libre de Morlenc.",
      ],
      choices: [{ label: "Retourner aux préparatifs", fx: { quest: "VH" }, back: "XR_jours" }] },
  },
  extras: {
    people: {
      ruyet: { name: "Josse Le Ruyet", aka: ["le roulier", "le Bœuf"], qui: "Roulier de Morlenc, ruiné par l'intendant du baron Clavières." },
    },
    quests: [
      { id: "VH", act: "II", kind: "annexe", title: "Les chevaux du roulier", start: "VH_roulier", doit: "kohlhaas", echo: ["vh:engage", "vh:refuse", "vh:paie"] },
    ],
  },
};
