// L'Île Folle-Aiguille · side story « Le double de la rue des Juges » (owes its question to Twain's The Prince and the
// Pauper: does one learn another's life by wearing his clothes for a day, and whose life is it at nightfall?). Act II,
// the mousse in Morlenc: on the quay, a child of the upper town, Camille de Kersaint, sixteen, who has run away from a
// tutor, stops dead before the child: same height, same face, same eyes. Camille proposes to swap clothes until the
// evening bell. The child spends the day in a cold great house of the upper town, before a widowed father who looks at
// Camille without seeing anyone. Camille does not come back at the bell. The child tells the father the truth
// (tf:verite), stays the night in the role (tf:reste), or runs down to the port to find Camille (tf:cherche).
// Camille's gender follows the child's: they are each other's double. Wired in A2m_jours.
module.exports = {
  passages: {
    TF_quai: { act: "II", title: "Le double de la rue des Juges", place: "quai_hollandes", ambiance: "ville",
      fx: { meet: "kersaint" },
      text: [
        "Tu roules une barrique sur le quai quand quelqu'un s'arrête net devant toi, à te toucher, et te dévisage. Une personne de ton âge, en habit de drap fin, gilet brodé, bottes cirées, avec un chapeau à la main et des cheveux trop bien peignés, qui a couru, à en juger par son souffle. Tu lèves les yeux. Tu restes saisi{e}. Tu as l'impression de te voir dans un miroir qu'on aurait habillé pour un mariage.",
        "La même taille. Le même visage, à une égratignure près. Les mêmes yeux. Les mêmes mains, sauf que les tiennes sont noires de goudron et que les siennes sont blanches comme du papier. La personne en habit éclate de rire. Elle dit qu'elle s'appelle Camille de Kersaint, rue des Juges, en haute ville, qu'elle vient de fausser compagnie à son précepteur, et qu'elle n'a jamais rien vu d'aussi extraordinaire que toi.",
        "Camille parle vite, avec une ardeur fébrile. Seize ans, comme toi. Une mère morte, comme toi, depuis deux ans. Un père qui ne parle plus. Une grande maison froide, des leçons de latin, de danse et de maintien, et jamais le droit de descendre au port. Camille regarde le quai, les navires, les cordages, les matelots qui jurent, avec des yeux d'affamé. Puis Camille te regarde, toi. Et propose l'échange.",
      ],
      choices: [{ label: "Accepter : les habits jusqu'à la cloche du soir", to: "TF_maison" }] },
    TF_maison: { act: "II", title: "Le double de la rue des Juges", place: "haute_ville", ambiance: "ville",
      text: [
        "Vous échangez vos habits derrière une pile de caisses, en riant comme des voleurs. Le drap fin te gratte. Les bottes te serrent. Camille enfile ta vareuse, ton bonnet, tes sabots, se frotte les mains dans le goudron d'un seau, se barbouille la joue, et part en courant vers le bout du quai, en criant qu'on se retrouve à la cloche du soir, ici même. Tu restes seul{e}, en habit de soie, sur un quai où plus personne ne te reconnaît. Un portefaix te salue. C'est la première fois.",
        "Tu montes en haute ville. La rue des Juges. Une grande maison de granit, derrière une grille, avec un perron. Un valet t'ouvre, te gronde à mi-voix pour le précepteur, te pousse vers un escalier de marbre. Personne ne remarque rien. Personne ne te regarde assez pour remarquer quoi que ce soit. Tu passes la journée dans une chambre de soie bleue, avec des livres, un clavecin, une fenêtre sur les toits. On t'apporte à manger sur un plateau d'argent. Du pain blanc. Un poulet. Tu manges tout. Personne ne te parle.",
        "Le soir, on t'appelle pour le dîner. Une salle à manger immense, une table pour vingt, deux couverts. Au bout, un homme en noir, maigre, aux tempes grises, qui ne lève pas les yeux de son assiette. Le père. Il ne te regarde pas. Il dit, sans te regarder, que le précepteur s'est plaint. Il dit que ta mère aurait eu honte. Il le dit d'une voix morte, comme on récite une leçon. Puis il se tait, et mange, et le silence dure tout le dîner, avec le bruit des couverts et la pendule.",
        "Tu le regardes, lui. Tu vois un homme qui n'a pas regardé son enfant en face depuis deux ans, peut-être parce que son enfant a les yeux de sa femme morte. Tu penses à ton père, au Fanal, qui te regarde trop, qui te parle trop, qui t'engueule et qui t'embrasse. Tu as envie de crier. La cloche du soir sonne, au loin, sur le port. Tu es à table, en haute ville. Camille t'attend sur le quai. Ou pas.",
      ],
      choices: [{ label: "Prétexter une migraine, et courir au quai à la fin du dîner", to: "TF_nuit" }] },
    TF_nuit: { act: "II", title: "Le double de la rue des Juges", place: "quai_hollandes", ambiance: "nuit",
      text: [
        "Tu cours jusqu'au quai, en habit de soie, sous le regard ahuri des sentinelles. Personne au pied de la pile de caisses. Tu attends. Une heure. La Cormorane, à quai, est éteinte, sauf le fanal de quart. Tu montes à bord. Le matelot de quart te barre le passage, en habit de soie comme tu es, et te demande ce que veut monsieur, ou madame. Tu lui dis qui tu es. Il rit. Puis il te regarde mieux, et il ne rit plus.",
        "Tu apprends l'essentiel en dix minutes. Ton double est venu à bord, à midi, a frotté le pont avec un enthousiasme qui a stupéfié Gobert, s'est fait traiter de bigorneau et en a ri aux larmes, a mangé la soupe de Fargue en disant que c'était la meilleure de sa vie. Puis, le soir, Petit-Jules l'a emmené{e} à la Truie-qui-file, pour fêter quelque chose, et on ne les a pas revus. Petit-Jules est rentré seul, à dix heures, ivre, sans savoir où Camille était passé{e}.",
        "Tu es sur le quai, en habit de soie, à minuit. En haute ville, une maison froide où personne ne regardera dans ton lit avant le matin. Dans la Basse-Fosse, quelque part, quelqu'un qui a ton visage et tes habits, qui ne connaît rien au port, et qui a trop bu pour la première fois de sa vie. Tu as trois choses à faire, et le temps d'en faire une.",
      ],
      choices: [
        { label: "Remonter rue des Juges, réveiller le père, et tout lui dire", fx: { flag: "tf:verite" }, to: "TF_verite" },
        { label: "Remonter dormir dans la chambre bleue, et tenir le rôle jusqu'au matin", fx: { flag: "tf:reste" }, to: "TF_reste" },
        { label: "Descendre dans la Basse-Fosse, en habit de soie, chercher Camille", fx: { flag: "tf:cherche" }, to: "TF_cherche" },
      ] },
    TF_verite: { act: "II", title: "Le double de la rue des Juges", place: "haute_ville", ambiance: "nuit",
      text: [
        "Tu remontes en courant. Tu sonnes à la grille. Tu réveilles le valet, puis la maison, puis le père, qui descend en robe de chambre, une bougie à la main, l'air d'un homme qu'on tire d'un tombeau. Tu lui dis tout, d'un trait, dans le vestibule de marbre : le quai, l'échange, la journée, la cloche, la Truie-qui-file. Tu lui dis que son enfant est quelque part dans la Basse-Fosse, à minuit, avec des sabots et une vareuse.",
        "Il te regarde. Il te regarde vraiment, pour la première fois, à la bougie. Tu le vois découvrir, sur ton visage, une égratignure qui n'est pas celle de Camille, des mains noires de goudron, des yeux qui ne sont pas ceux de sa femme. Il pâlit. Il dit : « Je ne m'en suis pas aperçu. » Il le répète. « Toute une journée. Je ne m'en suis pas aperçu. » Puis il prend son manteau, sans quitter sa robe de chambre, et il sort dans la nuit, avec toi, et le valet derrière, et une lanterne.",
        "Vous trouvez Camille à deux heures du matin, endormi{e} sur un banc, devant la chapelle murée de la Basse-Fosse, avec ta vareuse sur les épaules et un chien errant contre les jambes. Le père s'arrête. Il regarde longtemps son enfant, sale, ivre, heureux dans son sommeil. Puis il s'assied sur le banc, à côté, et il pose la main sur la tête de Camille, et il ne dit rien. Camille se réveille. Ils se regardent. Personne ne parle. Tu t'en vas.",
        "Le lendemain, un valet t'apporte au quai, en échange de l'habit de soie, ta vareuse, ton bonnet et tes sabots, lavés et repassés, et une lettre. Camille écrit que son père lui a parlé, pour la première fois depuis deux ans, toute la nuit, de sa mère. Camille écrit que c'est grâce à toi, et grâce à une vareuse qui sentait le goudron. Camille écrit que son père a demandé à te voir, pour te remercier, et que tu peux venir quand tu veux. Tu n'y vas pas. Tu as le sentiment d'avoir rendu à un homme son enfant, et de devoir maintenant le lui laisser.",
      ],
      choices: [{ label: "Retourner à bord", fx: { quest: "TF" }, back: "A2m_jours" }] },
    TF_reste: { act: "II", title: "Le double de la rue des Juges", place: "haute_ville", ambiance: "nuit",
      text: [
        "Tu remontes, tu entres par la porte de service, que le valet t'a montrée, et tu te couches dans la chambre bleue, dans des draps de lin qui sentent la lavande. Tu ne dors pas. Tu penses à Camille, dans la Basse-Fosse. Tu te dis que Petit-Jules l'a sûrement ramené{e} quelque part. Tu te dis que Camille a voulu sa nuit, et qu'il faut la lui laisser. Tu te dis beaucoup de choses. Tu ne dors pas.",
        "Au matin, on frappe. C'est le père. Il entre, ce qu'il ne fait jamais, à en juger par la stupeur du valet derrière lui. Il s'assied au bord du lit. Il ne te regarde toujours pas. Il dit qu'il a mal dormi. Il dit qu'il a rêvé de ta mère. Il dit, très bas, qu'il sait qu'il est un mauvais père, depuis deux ans, et qu'il ne sait pas comment on redevient un bon. Il dit qu'il s'excuse pour hier soir. Puis il se lève, et sort. Tu restes seul{e}, avec des excuses qui ne t'étaient pas destinées.",
        "Camille revient à midi, par la porte de service, pâle, les yeux cernés, ravi{e}, avec une histoire de bagarre, de chanson, de chien errant et de banc devant une chapelle. Vous rechangez d'habits dans la chambre bleue. Tu racontes le père, le matin, le rêve, les excuses. Camille cesse de sourire. Camille s'assied sur le lit et ne dit plus rien pendant un long moment. Puis Camille demande, d'une voix étrange, s'il t'a regardé{e}. Tu dis non. Camille dit : « Alors il me les aurait dites à moi aussi sans me regarder. »",
        "Tu redescends au port, dans ta vareuse, avec le goût du pain blanc dans la bouche et le poids d'excuses volées sur le cœur. Tu ne sais pas si Camille ira les réclamer. Tu ne sais pas si le père les répétera. Tu sais qu'il y a, en haute ville, un homme qui a demandé pardon à son enfant pour la première fois, et que ce n'était pas à son enfant. Tu te demandes si les mots qu'on dit au mauvais destinataire comptent quand même. Tu te dis qu'ils ont été dits. C'est peut-être le plus difficile.",
      ],
      choices: [{ label: "Retourner à bord", fx: { quest: "TF" }, back: "A2m_jours" }] },
    TF_cherche: { act: "II", title: "Le double de la rue des Juges", place: "basse_fosse", ambiance: "nuit",
      text: [
        "Tu descends dans la Basse-Fosse, à minuit, en habit de soie et en bottes cirées. C'est la pire idée de ta vie, et tu le sais au bout de cent pas. Les logeurs te regardent comme on regarde une bourse qui marche. Une femme te prend par le bras en t'appelant mon prince, ou ma princesse, selon la lumière. Deux hommes te suivent, rue des Cordiers. Tu cours. Tu connais les ruelles. Eux aussi. Tu entres à la Truie-qui-file par la porte de derrière, essoufflé{e}, et tu demandes au patron s'il a vu quelqu'un qui te ressemble.",
        "Le patron te regarde, puis regarde vers le fond de la salle. Tu y vas. Camille est là, assis{e} sur un tonneau, ta vareuse ouverte, ton bonnet de travers, au milieu d'un cercle de matelots ivres, en train de chanter une chanson de bord dont tu reconnais l'air et dont Camille a inventé les paroles. Les matelots rient. Ils trouvent Camille extraordinaire. Camille t'aperçoit. Camille s'arrête de chanter. Les matelots se retournent, et voient deux fois la même personne, l'une en soie, l'autre en goudron.",
        "Il y a un silence. Puis un vieux matelot, au fond, éclate de rire, et dit que le rhum de la Truie est plus fort qu'il ne croyait. Toute la salle rit. Vous riez aussi. Les deux hommes qui te suivaient, à la porte, n'osent plus entrer. Vous ressortez ensemble, bras dessus bras dessous, sous les acclamations. Dans la ruelle, vous échangez vos habits contre un mur, à la lueur d'une lanterne. Camille te rend ta vareuse avec un regret visible.",
        "Tu raccompagnes Camille jusqu'à la grille de la rue des Juges, à trois heures du matin. Camille te dit que c'était le plus beau jour de sa vie. Camille te demande comment était sa vie à elle, ou à lui, de l'intérieur. Tu dis : froide. Tu dis : un père qui ne regarde pas. Camille hoche la tête. Camille dit qu'au port, toute la journée, tout le monde l'a regardé{e} : Gobert, le cuisinier, les matelots, les filles. Camille dit qu'on ne savait pas qu'on pouvait être regardé comme ça. Camille rentre par la porte de service. Tu redescends vers le port. Tu te dis que tu as sauvé ton double d'une nuit dangereuse, et que tu l'as ramené{e} dans une maison où personne ne le regarde. Tu te dis que tu n'avais pas d'autre maison à lui offrir.",
      ],
      choices: [{ label: "Retourner à bord", fx: { quest: "TF" }, back: "A2m_jours" }] },
  },
  extras: {
    people: {
      kersaint: { name: "Camille de Kersaint", aka: ["ton double", "Camille"], qui: "Héritier ou héritière d'une grande maison de la rue des Juges, à Morlenc, qui a ton âge, ton visage et tes yeux." },
    },
    quests: [
      { id: "TF", act: "II", kind: "annexe", title: "Le double de la rue des Juges", start: "TF_quai", doit: "princepauvre", echo: ["tf:verite", "tf:reste", "tf:cherche"] },
    ],
  },
};
