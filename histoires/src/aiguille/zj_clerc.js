// L'Île Folle-Aiguille · side story « Le clerc de la rue des Juges » (owes its question to Great Expectations: what
// becomes of a gift when the one who receives it learns who gave it?). Eleven years ago Fargue pulled a drowning boy of
// nine out of the harbour of Morlenc, and has paid ever since, through the sisters of the Basse-Fosse, for the boy's
// schooling and his place with a notary. The boy, Aurélien Penven, now twenty, believes his benefactor a lady of the
// Haute-Ville. Before sailing, Fargue brings him a will for Lisette. He tells him who he is (zj:revele), comes as an
// ordinary client (zj:client), or watches him through the window and keeps the paper (zj:loin). Wired in XR_jours.
module.exports = {
  passages: {
    ZJ_rue: { act: "II", title: "Le clerc de la rue des Juges", place: "haute_ville", ambiance: "ville", second: true,
      fx: { meet: "penven" },
      text: [
        "La rue des Juges monte de la place du Change jusqu'au Présidial, entre deux rangées de maisons hautes et étroites, toutes pareilles, toutes noires de pluie, avec des plaques de cuivre à chaque porte, que des servantes frottent chaque matin pour que la ville sache qui, là-dedans, rédige les testaments, plaide les faillites et marie les fortunes. C'est la rue la plus propre de Morlenc. Elle sent la cire, l'encre et la prudence.",
        "Fargue y monte en habit du dimanche, rasé, la main mutilée dans la poche. Il a dans l'autre poche un papier plié en quatre, qu'il a écrit lui-même, la nuit, à la chandelle, dans la cambuse, en recommençant six fois, parce qu'il écrit mal et qu'il tient à ce que celui-là soit propre. En haut, il est écrit *Ceci est ma volonté*. En bas, il est écrit *Lisette*.",
        "Il s'arrête devant la maison de maître Le Scouarnec, notaire, troisième porte à gauche. Il reste sur le trottoir et regarde par la fenêtre basse, entre les rideaux de mousseline, l'étude : une longue pièce sombre, des registres jusqu'au plafond, quatre pupitres, et au premier pupitre, près de la fenêtre, un jeune homme blond, maigre, en habit noir, qui écrit vite, d'une belle écriture penchée, en mordant sa lèvre.",
        "Aurélien Penven. Vingt ans. Premier clerc depuis la Saint-Michel.",
      ],
      choices: [{ label: "Se souvenir du port, il y a onze ans", to: "ZJ_port" }] },
    ZJ_port: { act: "II", title: "Le clerc de la rue des Juges", place: "haute_ville", ambiance: "ville", second: true,
      text: [
        "C'était un soir de grande marée, au bassin du Commerce. Un gamin de neuf ans, maigre comme un clou, pêchait des crabes au bout d'une ficelle, à plat ventre sur le bord du quai ; il a glissé ; il est tombé entre la pierre et la coque d'un brick, dans l'eau noire, et l'eau noire s'est refermée sans même une bulle. Fargue passait. Il a plongé sans réfléchir, ce qui ne lui ressemble guère, et il a cherché à tâtons dans la vase, entre les chaînes et les ordures, jusqu'à ce que sa main trouve une cheville.",
        "Le gamin n'avait personne. Une mère morte, un père parti. Il dormait sous l'étal d'une marchande de morue. Fargue l'a porté chez les sœurs de la Basse-Fosse, ruisselant, et a laissé à la sœur tourière tout ce qu'il avait dans les poches. Le lendemain, il est revenu, et il a laissé encore. Il est revenu tous les mois, depuis. Onze ans. Les sœurs ont mis l'enfant à l'école des frères, puis chez maître Le Scouarnec, comme petit saute-ruisseau, puis comme clerc. Fargue a payé l'école, les habits, la pension, la plume. Il a demandé une seule chose : qu'on ne dise pas qui.",
        "Les sœurs, pour avoir la paix, ont dit au garçon qu'une dame de la Haute-Ville veillait sur lui, une dame pieuse et riche, qui voulait rester cachée. Il le croit. Il lui écrit, une fois l'an, à la Noël, une lettre de remerciements très bien tournée, que la sœur tourière remet à Fargue, et que Fargue garde, dans une boîte de fer, sous son hamac, avec les cheveux d'Annette.",
        "Il y a onze lettres dans la boîte. Fargue les sait par cœur. *Madame, je prie chaque soir pour que le Ciel vous rende au centuple…*",
      ],
      choices: [{ label: "Regarder le jeune homme écrire", to: "ZJ_vitre" }] },
    ZJ_vitre: { act: "II", title: "Le clerc de la rue des Juges", place: "haute_ville", ambiance: "ville", second: true,
      text: [
        "Le jeune homme lève la tête, une seconde, et regarde dans la rue, sans le voir ; il a les yeux bleus, très clairs, un peu myopes, et un air de sérieux appliqué que Fargue ne lui connaissait pas, et qui lui va bien. Un autre clerc lui dit quelque chose. Il rit. Il a gardé le rire du gamin aux crabes, un rire qui part du nez.",
        "Puis une jeune fille entre dans l'étude, avec sa mère, en manteau de velours, et le jeune homme se lève, rougit, s'incline, et leur avance des chaises avec un empressement qui fait sourire la mère. Fargue reconnaît la mère : c'est la femme de l'armateur Le Meur, qui a deux navires au bassin et une maison place du Change. Il comprend. On ne l'a pas mis au courant de celle-là, à la Noël.",
        "Il reste devant la fenêtre. Il sent le papier, dans sa poche, contre sa cuisse. Il faut que quelqu'un le garde, ce papier. Quelqu'un qui sache ce que c'est, un testament, et qui ne le vende pas, et qui le sorte au bon moment, si le maître-coq de la Cormorane ne revient pas. Il n'a personne d'autre à Morlenc qui sache lire et qui lui doive quelque chose.",
        "Il voit son reflet dans la vitre, par-dessus le jeune homme : un gros homme de quarante-huit ans, au teint de cuisine, en habit du dimanche trop étroit, avec une main dans la poche pour cacher qu'il lui manque deux doigts.",
      ],
      choices: [
        { label: "Entrer, demander maître Penven, et lui dire qui est la dame de la Haute-Ville", fx: { flag: "zj:revele" }, to: "ZJ_revele" },
        { label: "Entrer, en client, et lui confier le papier sans rien dire d'autre", fx: { flag: "zj:client" }, to: "ZJ_client" },
        { label: "Garder le papier dans ta poche, et redescendre la rue des Juges", fx: { flag: "zj:loin" }, to: "ZJ_loin" },
      ] },
    ZJ_revele: { act: "II", title: "Le clerc de la rue des Juges", place: "haute_ville", ambiance: "ville", second: true,
      text: [
        "Le jeune homme le reçoit dans le petit cabinet du fond, poliment, la plume à la main, en attendant qu'on lui dise l'affaire. Fargue la dit. Il pose sur la table, à côté du testament, la première des onze lettres, celle de la première Noël, l'écriture énorme d'un enfant de dix ans : *Madame, je sais écrire maintenant.*",
        "Aurélien Penven regarde la lettre. Il regarde Fargue. Il regarde la main à trois doigts, que Fargue a sortie de sa poche, exprès, et posée à plat sur la table. On voit dans ses yeux bleus passer la dame pieuse de la Haute-Ville, son manteau, sa voiture, ses prières, et s'en aller, comme une voiture qui tourne au coin d'une rue.",
        "Il rougit, très fort, jusqu'aux oreilles. Il dit, d'une voix qui cherche un ton : « Je… Il faudra que je vous rembourse, naturellement. » Puis il se mord la lèvre, parce qu'il a entendu ce qu'il vient de dire. Fargue le regarde avec une immense douceur. « Tu me rembourseras en gardant ce papier, dit-il. C'est tout. Et en épousant la petite Le Meur, si elle veut de toi. Elle a l'air de vouloir. »",
        "Le jeune homme range le testament dans un registre, avec des gestes de clerc, précis, et ne dit plus rien. Sur le seuil, au moment où Fargue remet son chapeau, il dit très vite, sans le regarder : « Je l'ai cherchée, vous savez. La dame. Tous les dimanches, à la cathédrale, je regardais les chapeaux. » Il s'arrête. « J'aurais dû regarder sur le port. »",
        "Fargue redescend la rue des Juges en chantant, faux, ce qui ne lui arrive jamais.",
      ],
      choices: [{ label: "Redescendre vers le port", fx: { quest: "ZJ" }, back: "XR_jours" }] },
    ZJ_client: { act: "II", title: "Le clerc de la rue des Juges", place: "haute_ville", ambiance: "ville", second: true,
      text: [
        "Le jeune homme le reçoit dans le petit cabinet du fond, poliment, avec une courtoisie de première année, exacte, un peu raide, qui s'applique à ne pas regarder la main mutilée et la regarde sans arrêt. Il lit le testament. Il corrige, au crayon, deux fautes d'orthographe, avec un petit sourire indulgent. Il explique qu'il faudra deux témoins, et un droit de garde, quatre livres, payables d'avance.",
        "Fargue paie. Le jeune homme compte les pièces, les range, inscrit la somme dans un registre de sa belle écriture penchée, et lui tend un reçu. *Reçu du sieur Fargue, cuisinier, la somme de quatre livres.* Fargue plie le reçu en quatre, très soigneusement, et le met dans sa poche, à la place du testament.",
        "« Vous avez de la famille à Morlenc ? demande le jeune homme, par politesse, en le raccompagnant. — Une fille, dit Fargue. Et un garçon, d'une certaine façon. — Ah, dit le jeune homme, qui n'écoute plus. C'est bien. La famille, c'est ce qui reste. »",
        "La porte se referme. Sur le trottoir, Fargue relit le reçu, trois fois. Il le rangera ce soir dans la boîte de fer, sous le hamac, avec les onze lettres. Ce sera la douzième, et la seule qui lui soit adressée.",
      ],
      choices: [{ label: "Redescendre vers le port", fx: { quest: "ZJ" }, back: "XR_jours" }] },
    ZJ_loin: { act: "II", title: "Le clerc de la rue des Juges", place: "haute_ville", ambiance: "ville", second: true,
      text: [
        "Il reste là encore un moment. Dans l'étude, la jeune fille Le Meur rit d'une chose que le jeune homme a dite, et le jeune homme, ravi, en dit une autre, et la mère fait semblant de lire un acte. Une servante, dans la maison d'en face, se met à la fenêtre pour regarder le gros homme qui regarde chez le notaire, et Fargue lui fait un petit salut de la main, la bonne.",
        "Il pense que ce garçon a de la chance d'avoir une dame pieuse dans la Haute-Ville. Une dame, ça se garde. On la prie, on lui écrit, on l'imagine vieille, belle, triste, généreuse ; on la porte toute sa vie, comme une médaille, sans qu'elle pèse rien. Un cuisinier à trois doigts, qui part demain sur un navire avec un papier de dernières volontés, ça pèse. Il ne veut pas lui donner ça à porter. Pas à lui.",
        "Il redescend la rue des Juges, le testament dans sa poche. Il le confiera ailleurs, à quelqu'un qui ne lui doit rien, ce qui est plus sûr. Ou il ne le confiera pas. Il reviendra. Il revient toujours.",
        "À la Noël suivante, la sœur tourière de la Basse-Fosse recevra, comme chaque année, une lettre très bien tournée, adressée à une dame qui n'existe pas. Elle la gardera, en attendant qu'on vienne la chercher.",
      ],
      choices: [{ label: "Redescendre vers le port", fx: { quest: "ZJ" }, back: "XR_jours" }] },
  },
  extras: {
    people: {
      penven: { name: "Aurélien Penven", aka: ["le clerc"], qui: "Premier clerc chez maître Le Scouarnec, notaire de la rue des Juges, à Morlenc." },
    },
    quests: [
      { id: "ZJ", act: "II", kind: "annexe", title: "Le clerc de la rue des Juges", start: "ZJ_rue", doit: "esperances", echo: ["zj:revele", "zj:client", "zj:loin"] },
    ],
  },
};
