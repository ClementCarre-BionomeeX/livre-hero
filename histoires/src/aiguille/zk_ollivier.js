// L'Île Folle-Aiguille · side story « Le marchand de grains » (owes its question to The Death of Ivan Ilyich: does a
// dying man have a right to the truth that everyone around him agrees to keep from him?). The evening before
// everything, Victorine is called to Monsieur Ollivier, grain merchant of Varnèse, forty-five, whom the great doctor of
// Morlenc treats for a « wandering kidney ». She feels the mass under the ribs. The wife and the son-in-law beg her to
// say nothing. He asks her, alone. She tells him (zk:verite), keeps the family's line (zk:menti), or answers his
// question with a question, and lets him find it (zk:question). Wired in A1v_soir.
module.exports = {
  passages: {
    ZK_appel: { act: "I", title: "Le marchand de grains", place: "varnese", ambiance: "nuit",
      fx: { meet: "ollivier" },
      text: [
        "C'est le gendre qui vient la chercher, à neuf heures, un jeune homme pommadé en redingote couleur tabac, qui frappe avec le pommeau de sa canne et s'excuse tout de suite de déranger, d'une voix qui ne s'excuse de rien. Monsieur Ollivier a mal. Le docteur Hautecœur, de Morlenc, qui le soigne, ne viendra que dimanche. On a pensé que la femme qui fait les accouchements, en attendant, pour une piqûre de laudanum…",
        "La maison Ollivier est la plus grande de Varnèse, sur la place, en face de l'église : trois étages de granit, des volets peints, un grenier à grains sous le toit qui sent la poussière dorée jusque dans l'escalier. On y monte entre des portraits de famille, tous peints par le même barbouilleur de Morlenc, tous avec le même nez.",
        "La chambre est surchauffée. On a tendu des châles devant les fenêtres, allumé des veilleuses, posé partout des vases de fleurs, des tisanes, des images pieuses, des oreillers, comme on garnit de paille une caisse où voyage un objet fragile. Au milieu, dans le grand lit à colonnes, un homme de quarante-cinq ans, jaune, maigre, avec un ventre gonflé sous le drap et des yeux qui suivent tout.",
        "Madame Ollivier, dans un fauteuil, fait de la tapisserie avec une application terrible. La fille brode. Le gendre se poste à la fenêtre. Tout le monde sourit.",
      ],
      choices: [{ label: "Examiner le malade", to: "ZK_ventre" }] },
    ZK_ventre: { act: "I", title: "Le marchand de grains", place: "varnese", ambiance: "nuit",
      text: [
        "Elle fait sortir la famille, ce qui demande trois fois plus d'autorité qu'un accouchement. Elle découvre le ventre. Elle pose les mains à plat, sous les côtes, à droite, puis au creux de l'estomac, et elle appuie, doucement, et elle trouve ce qu'elle savait qu'elle trouverait, à la couleur de la peau, en entrant : une masse dure, bosselée, grosse comme deux poings, collée au foie, qui ne bouge pas sous les doigts.",
        "Le docteur Hautecœur a appelé ça un rein flottant. Le docteur Hautecœur a quarante ans de métier, une voiture à deux chevaux, et le don rare de ne trouver chez ses malades que les maladies qu'il sait guérir. Ce rein-là ne flotte pas. Il ne reste à cet homme que quelques semaines. Deux mois, avec de la chance, et la chance, ici, serait plutôt une malédiction.",
        "Elle fait la piqûre. Il ferme les yeux sous l'aiguille, et les rouvre, et la regarde remettre la seringue dans sa sacoche, et il voit qu'elle prend son temps, et il comprend qu'elle cherche quoi dire.",
        "Sur le palier, Madame Ollivier l'attend, avec le gendre. Elle a lâché sa tapisserie. Elle lui prend les deux mains. « Nous savons, docteur. Hautecœur nous l'a dit, à nous, il y a un mois, en partant. Lui ne sait pas. Il ne doit pas savoir. Il a peur de la mort comme un enfant du noir. Il en mourrait. » Le gendre ajoute, plus bas : « Les affaires, aussi. La maison est en pleine négociation pour les blés de Lannoz. Une émotion, en ce moment… Vous comprenez. »",
      ],
      choices: [{ label: "Aller reprendre ta sacoche, oubliée sur la table de nuit", to: "ZK_seul" }] },
    ZK_seul: { act: "I", title: "Le marchand de grains", place: "varnese", ambiance: "nuit",
      text: [
        "Elle l'a oubliée exprès. Il le sait. Il a attendu.",
        "« Fermez la porte, docteur. » Elle la ferme. Il parle bas, vite, avec la lucidité étrange que donne le laudanum dans la première demi-heure. « Ils sourient. Depuis un mois, ils sourient tous. Ma femme fait de la tapisserie, elle qui n'en a jamais fait. Mon gendre me parle des blés de Lannoz comme si j'allais les vendre. Le curé est venu parler du beau temps. Hautecœur me tape sur l'épaule. Tout le monde, dans cette maison, joue une comédie, et je suis le seul spectateur, et je n'ai pas payé ma place. »",
        "Il lui saisit le poignet. Il a la main sèche et brûlante.",
        "« Vous, vous êtes une femme, vous n'êtes pas de la Faculté, vous ne leur devez rien, vous ne me devez rien. Personne ne vous paiera pour mentir. Alors je vous le demande, à vous, une fois. Est-ce que je vais mourir ? »",
      ],
      choices: [
        { label: "« Oui. Avant l'été. Je suis désolée. »", fx: { flag: "zk:verite" }, to: "ZK_verite" },
        { label: "« C'est un rein flottant. Le docteur Hautecœur a raison. »", fx: { flag: "zk:menti" }, to: "ZK_menti" },
        { label: "« Qu'est-ce que vous feriez, si c'était oui ? »", fx: { flag: "zk:question" }, to: "ZK_question" },
      ] },
    ZK_verite: { act: "I", title: "Le marchand de grains", place: "varnese", ambiance: "nuit",
      text: [
        "Il lâche son poignet. Il regarde le plafond, longtemps, le baldaquin de damas rouge où sont brodés des épis de blé. Victorine attend le cri, ou les larmes, ou la colère qu'elle a vue cent fois. Il soupire, simplement, d'un long soupir d'homme qui pose un sac.",
        "« Merci, dit-il. Vous êtes la première personne depuis un mois qui me parle comme à un vivant. C'est drôle, il faut être mourant pour ça. » Il se tait. « Avant l'été. Bon. J'ai le temps de faire deux ou trois choses que je repoussais. De dire à ma fille que son mari est un imbécile. De vendre les blés de Lannoz moi-même, à un meilleur prix que lui. Et d'avoir peur, aussi. Je vais avoir très peur. Mais au moins j'aurai peur de la bonne chose. »",
        "Sur le palier, Madame Ollivier lit la vérité sur le visage de Victorine avant qu'elle ait rien dit, et devient blanche de colère. « Vous n'aviez pas le droit. » Victorine descend l'escalier sans répondre, entre les portraits au même nez. Derrière elle, dans la chambre, elle entend la voix du marchand qui appelle sa femme par son prénom, Mathilde, d'un ton qu'elle n'avait pas entendu dans cette maison. La tapisserie, sans doute, restera inachevée.",
      ],
      choices: [{ label: "Traverser la place jusqu'à ta porte", fx: { quest: "ZK" }, back: "A1v_soir" }] },
    ZK_menti: { act: "I", title: "Le marchand de grains", place: "varnese", ambiance: "nuit",
      text: [
        "Elle le dit. Elle s'entend le dire, d'une voix professionnelle, rassurante, exactement la voix du docteur Hautecœur, et la honte lui monte au visage avec une telle chaleur qu'elle se penche sur sa sacoche pour la cacher.",
        "Il la regarde. Il ne la croit pas, et elle le voit. Il lâche son poignet, poliment, et lui sourit, du même sourire que sa femme, que son gendre, que le curé, un sourire de comédie. « Bien sûr, dit-il. Un rein flottant. Merci, docteur. » Et elle comprend, en reprenant sa sacoche, qu'elle vient d'entrer dans la troupe, et que lui, désormais, il va jouer aussi, pour elle, comme pour les autres, jusqu'au bout, pour ne pas les décevoir.",
        "Sur le palier, Madame Ollivier lui serre les mains avec une gratitude humide. Le gendre lui glisse une pièce d'or, qu'elle laisse tomber dans l'escalier, sans se baisser, et qui roule jusqu'au portrait de l'aïeul. Elle rentre chez elle. Elle se lave les mains, longtemps, à la pompe de la cour, en plein froid. Ça ne part pas.",
      ],
      choices: [{ label: "Traverser la place jusqu'à ta porte", fx: { quest: "ZK" }, back: "A1v_soir" }] },
    ZK_question: { act: "I", title: "Le marchand de grains", place: "varnese", ambiance: "nuit",
      text: [
        "Il ouvre la bouche pour répondre qu'il ne demandait pas ça, et il s'arrête. Il réfléchit. Elle le voit réfléchir, les yeux sur le baldaquin, comme un négociant devant un marché dont il ne connaît pas encore tous les termes.",
        "« Si c'était oui, dit-il lentement, je renverrais Hautecœur. Je ferais monter ma petite-fille, qu'on éloigne de moi parce que je suis jaune et qu'elle a peur. Je dirais à Mathilde d'arrêter cette tapisserie, qu'elle déteste. Je ferais venir le notaire, pas le curé. Et je mangerais des huîtres. On me les défend. » Il se tait. Il la regarde. « C'est oui, n'est-ce pas ? »",
        "Victorine soutient son regard, en silence. Il hoche la tête, lentement. « Merci, dit-il. Vous ne m'avez rien dit. Je leur dirai que vous ne m'avez rien dit. » Il ferme les yeux. « Faites-moi porter une douzaine d'huîtres, demain, si vous passez au marché. Mettez-les sur ma note. Je ne serai pas là pour la payer, mais mon gendre, si. »",
        "Elle redescend l'escalier. Sur le palier, Madame Ollivier lui demande, anxieuse, s'il a posé des questions. Victorine répond qu'il a demandé des huîtres. Madame Ollivier ne comprend pas. Elle comprendra demain.",
      ],
      choices: [{ label: "Traverser la place jusqu'à ta porte", fx: { quest: "ZK" }, back: "A1v_soir" }] },
  },
  extras: {
    people: {
      ollivier: { name: "Monsieur Ollivier", aka: ["le marchand de grains"], qui: "Marchand de grains de Varnèse, la plus grande maison de la place." },
    },
    quests: [
      { id: "ZK", act: "I", kind: "annexe", title: "Le marchand de grains", start: "ZK_appel", doit: "ivanilitch", echo: ["zk:verite", "zk:menti", "zk:question"] },
    ],
  },
};
