// L'Île Folle-Aiguille · side story « Le Rieur des Îles » (owes its question to The Man Who Laughs: what is a face that
// others made, and what does one owe to someone the crowd pays to laugh at?). Act II, at the herring fair: behind a
// striped tent, a showman exhibits for a sou « the Laugher of the Isles », a boy of fourteen whose mouth was slit to the
// ears when he was small and healed into a smile he cannot undo. The child brings the ship's doctor to look at him
// (wk:medecin), offers to help him run away in the night (wk:fuite), or asks him his name, and finds he has none
// (wk:nom). Wired in A2m_jours, after the fair.
module.exports = {
  passages: {
    WK_tente: { act: "II", title: "Le Rieur des Îles", place: "champ_foire", ambiance: "ville",
      text: [
        "Tu y retournes un soir, seul{e}, sans Petit-Jules, qui a perdu ses quatre sous et sa bonne humeur. La foire, à la nuit, n'est plus la même bête. Les lanternes de papier font des taches de couleur sur la boue, les flammes des torches tordent les ombres, et les visages des badauds, éclairés d'en bas, ressemblent tous un peu à ceux des gargouilles de la cathédrale de Morlenc, qui rient elles aussi, de très haut, depuis trois cents ans, sans qu'on sache de quoi.",
        "Derrière la tente de la Femme-Poisson, il y a une baraque plus petite, de toile grise, sans peinture, avec une pancarte écrite à la main : *Le Rieur des Îles. Il rit depuis sa naissance. Il rira jusqu'à sa mort. Un sou.* Un gros homme en gilet de velours, assis sur un tabouret, tient la caisse d'une main et une saucisse de l'autre. Il s'appelle maître Chiquet. Il le dit à tout le monde, comme si c'était une recommandation.",
        "Tu paies ton sou. À l'intérieur, sur une estrade de planches, éclairé par deux chandelles, un garçon de ton âge est assis sur un tabouret, en habit d'arlequin trop court. Il a les cheveux noirs, des mains fines, de beaux yeux sombres, très tristes. Et une bouche fendue jusqu'aux oreilles, d'une joue à l'autre, en un rire énorme, figé, qui découvre toutes ses dents. On rit, autour de toi. Une femme rit tant qu'elle doit s'asseoir. Lui ne bouge pas. Il regarde le fond de la tente, au-dessus des têtes, et il rit, il rit, il rit, avec des yeux de noyé.",
      ],
      choices: [{ label: "Attendre que les autres soient sortis", to: "WK_seul" }] },
    WK_seul: { act: "II", title: "Le Rieur des Îles", place: "champ_foire", ambiance: "nuit",
      text: [
        "Tu restes. Les autres sortent. Maître Chiquet passe la tête par la fente de la toile, voit que tu as payé, et retourne à sa saucisse. Le garçon tourne les yeux vers toi. Il a l'habitude qu'on reste, dit-il : il y en a toujours un, chaque soir, qui reste, pour regarder de plus près, ou pour toucher. Il parle mal, avec cette bouche, en mangeant les consonnes, d'une voix douce de fille. Il demande si tu veux toucher. Les gens paient un sou de plus pour toucher.",
        "Tu dis que non. Tu lui demandes s'il a mal. Il réfléchit, comme si personne ne lui avait jamais posé la question. Il dit que non, plus maintenant ; seulement l'hiver, quand il gèle, les coins de la bouche se fendent et saignent. Il dit qu'il est né comme ça. Maître Chiquet le lui a dit. Maître Chiquet l'a acheté tout petit à des gens qui l'avaient trouvé dans une barque, sur une plage du Couchant. Il n'a jamais su sa mère. Il dit que ce n'est pas grave, parce qu'avec une figure comme ça, une mère, ça ne t'aurait pas gardé.",
        "Il te regarde, avec ses yeux sombres, au-dessus de son rire. Tu regardes les commissures de sa bouche, à la lueur des chandelles : deux lignes blanches, fines, droites, régulières, comme des coutures. Tu as raccommodé assez de voiles pour connaître une couture. Les choses qui poussent ont des bords qui hésitent. Celles-là ont des bords qui obéissent : quelqu'un les a faites.",
      ],
      choices: [
        { label: "Lui promettre de revenir demain avec la médecin de la Cormorane", fx: { flag: "wk:medecin" }, to: "WK_medecin" },
        { label: "Lui proposer de l'aider à s'enfuir, cette nuit", fx: { flag: "wk:fuite" }, to: "WK_fuite" },
        { label: "Lui demander comment il s'appelle", fx: { flag: "wk:nom" }, to: "WK_nom" },
      ] },
    WK_medecin: { act: "II", title: "Le Rieur des Îles", place: "champ_foire", ambiance: "ville",
      text: [
        "La médecin vient. Tu ne sais pas pourquoi elle dit oui ; elle a l'air d'avoir dix choses à faire et de les faire toutes à la fois. Elle paie deux sous, un pour elle, un pour toi, et elle s'approche de l'estrade, et elle demande au garçon la permission de le regarder. Personne ne lui a jamais demandé la permission. Il la lui donne, étonné. Elle prend son menton entre ses doigts, tourne son visage vers la chandelle, regarde longtemps les commissures, tâte la joue, à l'intérieur, avec le pouce, comme on tâte la doublure d'un habit.",
        "« On t'a fait ça, dit-elle. Avec un couteau, quand tu avais deux ou trois ans. Proprement. Par quelqu'un qui savait coudre. C'est un métier, dans certains ports, de fabriquer des enfants qui rapportent. » Elle le lui dit sans précaution, d'une voix de médecin, plate, précise, comme on donne un diagnostic. Puis elle ajoute, plus bas : « Je ne peux pas le défaire. Personne ne peut. Mais tu as le droit de savoir d'où ça vient, et que la faute en revient à d'autres. »",
        "Le garçon reste immobile. Puis ses yeux se remplissent. Il pleure, sans un bruit, avec cette bouche qui continue de rire, et c'est la chose la plus terrible que tu aies vue de ta vie, et tu en verras d'autres. La médecin lui tient la main jusqu'à ce que ça passe. En sortant, elle dit à maître Chiquet deux phrases que tu n'entends pas, et le gros homme pâlit, et lâche sa saucisse. Sur le chemin du quai, elle ne dit rien. Au moment de monter à bord, elle dit seulement : « Merci de m'avoir emmenée. Je déteste cette ville. »",
      ],
      choices: [{ label: "Rentrer à bord, derrière elle", fx: { quest: "WK" }, back: "A2m_jours" }] },
    WK_fuite: { act: "II", title: "Le Rieur des Îles", place: "champ_foire", ambiance: "nuit",
      text: [
        "Tu le lui proposes tout bas : maître Chiquet dort, la nuit, ivre, tu as vu les bouteilles ; la toile se soulève derrière, au ras de la boue ; le port est à deux cents pas ; il y a des navires qui partent chaque marée, et des capitaines qui ne regardent pas les figures des mousses, pourvu qu'ils tirent sur les bouts. Tu en connais un. Tu parles vite. Tu t'enflammes.",
        "Il t'écoute jusqu'au bout. Puis il secoue la tête, doucement. « Et après ? demande-t-il. Après, je vais où, avec ça ? » Il montre sa bouche. « Ici, on me paie pour que je la montre. Dehors, on me jettera des pierres pour que je la cache. Ici, j'ai une soupe, un lit, et un homme qui me bat seulement quand il a bu. Dehors, j'aurai ma figure. Je l'ai essayé, une fois, à Lannoz. Je suis revenu tout seul, au bout de trois jours, en courant. »",
        "Il te remercie. Il le dit avec une sincérité qui te fait honte, comme si tu lui avais offert quelque chose d'immense et d'impossible, un château, une couronne. Tu sors. Maître Chiquet, sur son tabouret, te souhaite le bonsoir. Derrière toi, à travers la toile grise, tu entends la voix douce du garçon, qui chante pour lui seul une chanson de marins, très juste, en mangeant toutes les consonnes. Tu apprends, ce soir-là, qu'on peut chanter juste avec une bouche pareille, et beaucoup d'autres choses que tu aurais préféré ignorer.",
      ],
      choices: [{ label: "Rentrer à bord, dans la nuit", fx: { quest: "WK" }, back: "A2m_jours" }] },
    WK_nom: { act: "II", title: "Le Rieur des Îles", place: "champ_foire", ambiance: "nuit",
      text: [
        "Il te regarde, surpris. Il dit qu'il s'appelle le Rieur. Tu dis que c'est le nom de la pancarte. Il réfléchit. Maître Chiquet l'appelle « toi », ou « la bête », ou « mon capital », selon l'heure. Les gens qui l'ont vendu l'appelaient, croit-il, d'un mot dans une langue qu'il a oubliée. Il n'a pas de nom. Il le découvre en le disant, devant toi, avec une sorte d'étonnement poli, comme on découvre qu'on a perdu un bouton.",
        "Tu lui en proposes. Tous ceux que tu connais : ceux des pêcheurs de la Pointe, des matelots de la Cormorane, des saints de Sainte-Anne-des-Grèves. Il les écoute un par un, gravement, en les répétant tout bas, avec sa bouche, pour voir comment ils sonnent. Il en refuse beaucoup. Il hésite sur deux ou trois. Puis tu dis, sans y penser, le prénom de ta mère, au masculin, comme on le disait pour les garçons de son village, et il lève la tête. Il le répète. Il le répète encore. « Celui-là », dit-il.",
        "Il te fait jurer de ne le dire à personne, surtout pas à maître Chiquet, qui le lui prendrait comme le reste. Il le gardera pour lui, dit-il, dans sa poche, pour les soirs où il ne rira plus pour personne. Tu sors de la baraque. Il fait froid. La foire s'éteint. Tu marches vers le quai, et il te semble qu'il y a, quelque part dans Morlenc, à l'abri sous une toile grise, un garçon qui porte quelque chose de ta mère, et que c'est la première chose d'elle que tu donnes à quelqu'un.",
      ],
      choices: [{ label: "Rentrer à bord, avec ton secret", fx: { quest: "WK" }, back: "A2m_jours" }] },
  },
  extras: {
    quests: [
      { id: "WK", act: "II", kind: "annexe", title: "Le Rieur des Îles", start: "WK_tente", doit: "hommequirit", echo: ["wk:medecin", "wk:fuite", "wk:nom"] },
    ],
  },
};
