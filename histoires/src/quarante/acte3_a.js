// Act III · days thirty-one to thirty-nine: the city after the placards, the cabinet (hub), winning the votes of the five
// Benches, Iselda's choice, Joris's loyalty, and the army at Castel-Brume.
module.exports = {
  T_aube: { act: "III", title: "Le trente et unième jour", place: "palais",
    fx: { questSeen: ["T_conseil", "T_brume", "T_joris"], catchup: 5, catchupWhy: "les jours de la crise" },
    text: [
      "On a arraché les placards. On en a recloué d'autres pendant la nuit, et d'autres encore, avec des mots plus crus. Sur les ponts, on ne parle que de ça. Dans les tavernes des Canaux, on chante une chanson sur un amiral qui confond les chambres. À la Loge, on fait des comptes. Au Temple, on prie. Dans la salle des Pas-Perdus, personne n'ose plus dire le nom d'Iselda à voix haute, et tout le monde le pense.",
      { after: "odile:retournee", text: "Un billet d'Odile Varn, glissé sous ta porte, d'une écriture penchée : *Les placards viennent de Castel-Brume. Le duc veut que la ville se déchire avant le quarantième jour. Ses épées noires entreront dans le palais la nuit du trente-neuvième, par la porte d'eau, quand tout le monde regardera la salle du Conseil. Je vous dirai l'heure.*" },
      { after: "odile:renvoyee", text: "Une lettre du comte Mérande, arrivée par courrier de Thérance : le roi a reçu sa lettre, et celle de la reine. Il a écrit à son frère. Le duc n'a pas répondu. Il a fait doubler les feux de Castel-Brume." },
      "Il reste neuf jours. Au quarantième, les Cinq Bancs voteront. Chacun a son candidat. Il faut que tu saches, avant d'entrer dans la salle, qui votera pour qui, et pourquoi.",
      { with: "livia", text: "Livia a dressé un tableau : cinq colonnes, une par Banc, et dans chaque colonne un nom, au crayon, qu'elle efface et réécrit à mesure que les jours passent." },
    ],
    choices: [{ label: "Se mettre au travail", to: "T_cabinet" }] },

  T_cabinet: { act: "III", title: "Le cabinet du Sceau", backName: "le cabinet du Sceau", place: "palais", hub: true, routes: true,
    text: [
      { first: true, text: "Sur ta table, le tableau de Livia. *Banc de la Mer : l'amiral. Banc du Sel : l'amiral (dettes). Banc des Eaux : la tutelle du Temple. Banc des Rames : personne (Nello refuse tout régent). Banc du Prince : ?*" },
      { again: true, text: "Le tableau de Livia a changé. Des noms ont été rayés, d'autres ajoutés. Au bas de la colonne du Prince, il y a toujours un point d'interrogation." },
      { after: "appui:mer:conseil", text: "Sous *Banc de la Mer*, Livia a rayé *l'amiral* et écrit *le conseil*. Elle a souligné deux fois." },
      { after: "brume:retrait", text: "Les feux de Castel-Brume se sont éteints. Les péniches recommencent à descendre le fleuve." },
    ],
    choices: [
      { label: "L'Arsenal : le Banc de la Mer", to: "T_mer" },
      { label: "La Loge du Sel : le Banc du Sel", to: "T_sel" },
      { label: "Le Temple : le Banc des Eaux", to: "T_eaux" },
      { label: "Les Canaux : le Banc des Rames", to: "T_rames" },
      { label: "L'ambassade de Thérance", to: "T_therance" },
      { label: "Iselda", to: "T_iselda" },
      { label: "Parler à Joris", hide: { quest: "T_joris" }, to: "T_joris" },
      { label: "Le marché aux Voiles", to: "T_voiles" },
      { label: "La nuit du trente-neuvième jour", big: true, exit: true, to: "T_nuit" },
    ] },
  T_voiles: { act: "III", title: "Le marché aux Voiles", place: "canaux", shop: "voiles",
    text: ["L'armurier de Corne n'a plus rien à vendre que des lames de duel et des jaques de mailles. Tout le reste est parti. La ville s'arme, en silence, maison par maison."],
    choices: [{ back: "T_cabinet" }] },

  // ------------------------------------------------------------------ the Sea Bench
  T_mer: { act: "III", title: "L'amiral", place: "arsenal", backName: "l'Arsenal",
    text: [
      "L'amiral te reçoit dans la salle des cartes. Il n'a pas dormi. Il n'a pas l'air d'un homme qui va être régent ; il a l'air d'un homme qui va être jugé.",
      { first: true, text: "« Ils chantent des chansons sur moi aux Canaux, dit-il. Je les ai entendues. Elles sont bien tournées. » Il pose les mains à plat sur la table. « Je reste candidat. Si je me retire, toute la ville dira que c'est un aveu, et c'est elle qui paiera. Si je suis régent, personne n'osera plus chanter. »" },
      { after: "appui:mer:conseil", text: "« J'ai dit que je voterais le conseil, dit-il. Je le ferai. Ne revenez pas me le demander tous les jours. »" },
    ],
    choices: [
      { label: "« Si vous êtes régent, vous la verrez tous les jours. Et tout le monde verra. »", hide: { any: [{ has: "appui:mer:conseil" }, { has: "mer:refus" }] }, if: { any: [{ has: "liane:ghislain" }, { has: "iselda:sait" }, { has: "amiral:aveu" }] }, why: "Tu n'as pas de quoi lui parler d'Iselda à cœur ouvert.", to: "T_mer_iselda" },
      { label: "« Votez pour le conseil de régence que voulait votre frère. »", hide: { any: [{ has: "appui:mer:conseil" }, { has: "mer:refus" }] }, test: { dom: "social", diff: -20, label: "Social", help: [{ if: { fac: "mer", min: 20 }, v: 20 }, { after: "solde:payee", v: 10 }, { with: "joris", v: 10 }] },
        win: { fx: { flag: "appui:mer:conseil", fac: { mer: -5 }, ep: ["histoire", 2000] }, to: "T_mer_oui" }, lose: { fx: { flag: "mer:refus" }, to: "T_mer_non" } },
      { back: "T_cabinet" },
    ] },
  T_mer_iselda: { act: "III", title: "Un père", place: "arsenal",
    text: [
      "L'amiral te regarde longtemps. Puis il s'assied, pour la première fois, sur un coffre de cartes, comme un homme qui n'a plus de jambes.",
      "« Il l'a compris avant moi, dit-il. Il comprenait tout avant tout le monde. Il savait que si j'étais régent, je ne pourrais pas m'empêcher d'être son père. Et qu'un jour, quelqu'un le verrait, et que ce jour-là, elle perdrait tout. » Il se frotte le visage. « Il m'a protégé de moi-même. Même mort. »",
      "« Je voterai le conseil. Pas pour vous. Pour elle. Et pour lui, qui avait raison. »",
    ],
    choices: [{ label: "Le laisser", fx: { flag: "appui:mer:conseil", ep: ["histoire", 3000] }, back: "T_cabinet" }] },
  T_mer_oui: { act: "III", title: "Le conseil", place: "arsenal",
    text: [
      "L'amiral réfléchit longtemps. « Mon frère voulait que les Cinq Bancs gouvernent ensemble ? dit-il enfin. Ça ne marchera pas. Ils ne s'entendent sur rien. » Il a un sourire bref. « C'est peut-être ce qu'il voulait. Que personne ne gagne. Je voterai le conseil. Si ça tourne mal, je reprendrai la flotte et je serai là. »",
    ],
    choices: [{ back: "T_cabinet" }] },
  T_mer_non: { act: "III", title: "Non", place: "arsenal",
    text: [
      "« Non, dit l'amiral. Un conseil, c'est cinq hommes qui se battent dans une pièce pendant que Thérance attend à la porte. Je reste candidat. Ma voix est à moi. »",
    ],
    choices: [{ back: "T_cabinet" }] },

  // ------------------------------------------------------------------ the Salt Bench
  T_sel: { act: "III", title: "Ser Orsanne", place: "loge", backName: "la Loge du Sel",
    text: [
      { after: "loge:brulee", text: "Orsanne te reçoit dans une salle de la Monnaie, entre deux presses à frapper. Il mange des olives dans un cornet de papier. « Je n'ai plus de table, dit-il. J'ai encore de l'appétit. »", else: "Orsanne est à table. Il te fait servir un poisson entier, et il attend que tu en aies mangé la moitié." },
      "« Je voterai pour l'amiral, dit-il, parce qu'il me doit quarante mille besants et qu'un régent endetté est un régent raisonnable. À moins que quelqu'un ne m'offre mieux. Je suis ouvert à tout. C'est ma seule vertu. »",
    ],
    choices: [
      { label: "« Le conseil de régence : la fin de la taxe du sel, et je retire la remise des dettes du pain. »", hide: { any: [{ has: "appui:sel:conseil" }, { has: "appui:sel:toi" }, { has: "appui:sel:liane" }, { has: "appui:sel:republique" }] }, to: "T_sel_conseil" },
      { label: "Lui rappeler ce que contient le cahier de Morte-Eau", hide: { any: [{ has: "appui:sel:conseil" }, { has: "appui:sel:toi" }, { has: "appui:sel:liane" }, { has: "appui:sel:republique" }, { not: { item: "liste_greniers" } }] }, to: "T_sel_cahier" },
      { label: "« Une république des marchands et des rameurs, sans prince et sans taxe du sel. »", hide: { any: [{ has: "appui:sel:conseil" }, { has: "appui:sel:toi" }, { has: "appui:sel:liane" }, { has: "appui:sel:republique" }, { not: { has: "iselda:renonce" } }] }, to: "T_sel_republique" },
      { back: "T_cabinet" },
    ] },
  T_sel_conseil: { act: "III", title: "Le marché", place: "loge",
    text: [
      "Orsanne repose sa fourchette. « Vous me proposez de renoncer à quarante mille besants de l'amiral contre une taxe, et contre les dettes de quelques milliers de familles des Canaux. » Il calcule. « C'est un mauvais marché pour moi et un très mauvais pour les Canaux. J'accepte. »",
      { with: "livia", text: "Livia, qui prenait des notes, s'arrête. Elle te regarde. Elle reprend sa plume." },
    ],
    choices: [{ label: "Sceller", fx: { flag: ["appui:sel:conseil", "testament:sans_dettes"], fac: { sel: 15, rames: -10 }, conf: { livia: -5 }, ep: ["histoire", 2000] }, back: "T_cabinet" }] },
  T_sel_cahier: { act: "III", title: "Le cahier", place: "loge",
    text: [
      "Tu poses le cahier de Morte-Eau sur la nappe, à côté du poisson. Orsanne le regarde comme on regarde un serpent sur une table de jeu.",
      "« Quatre mille sacs de grain cachés pendant une disette, dis-tu. Trois morts sur le port. Si ce cahier est lu au Conseil, la Hanse perd son Banc, et vous la tête. »",
      "Orsanne s'essuie les doigts. « Que voulez-vous ? »",
    ],
    choices: [
      { label: "« Votre voix pour le conseil de régence. »", fx: { flag: "appui:sel:conseil", clock: { emprise: 1 }, ep: ["histoire", 2000] }, to: "T_sel_cede" },
      { label: "« Votre voix pour moi. »", fx: { flag: "appui:sel:toi", clock: { emprise: 2 }, ep: ["histoire", 2000] }, to: "T_sel_cede" },
    ] },
  T_sel_cede: { act: "III", title: "Le prix d'une voix", place: "loge",
    text: [
      "Orsanne hoche la tête, très lentement. « Vous m'aurez, dit-il. Une fois. On n'a jamais personne qu'une fois. » Il pousse le plat vers toi. « Finissez votre poisson. Ce serait dommage de le gâcher. »",
    ],
    choices: [{ back: "T_cabinet" }] },
  T_sel_republique: { act: "III", title: "La république", place: "loge",
    text: [
      "Orsanne te regarde comme si tu venais de lui offrir un royaume. Ce qui est, en somme, le cas.",
      "« Pas de prince, pas de régent, pas de taxe du sel, dit-il lentement. Un conseil élu par les guildes et les quartiers. La Hanse y siégerait, évidemment. Les rameurs aussi, je suppose. » Il rit. « Corne a essayé, il y a deux siècles. Ça a duré trente ans, et ce sont les trente meilleures années de Corne. Je voterai. Et je vous préviens : ce sera moi, le premier consul. »",
    ],
    choices: [{ label: "Sceller", fx: { flag: "appui:sel:republique", fac: { sel: 20 }, ep: ["histoire", 2000] }, back: "T_cabinet" }] },

  // ------------------------------------------------------------------ the Water Bench
  T_eaux: { act: "III", title: "Mère Ysaure", place: "temple", backName: "le Temple des Eaux",
    text: [
      "Mère Ysaure te sert de l'eau. Elle te regarde boire.",
      "« Je voterai pour que l'enfant soit confiée au Temple, dit-elle, et la ville à sa mère, qui ne gouvernera rien et ne fera de mal à personne. C'est la seule solution où personne ne gagne trop. »",
      { after: "ysaure:tenue", text: "Elle ajoute, sans changer de ton : « À moins que vous ne me demandiez autre chose. Vous savez que je ne peux pas vous le refuser. Je préférerais que vous ne le fassiez pas. »" },
    ],
    choices: [
      { label: "« Le Temple aura l'éducation de l'enfant, au sein du conseil de régence. »", hide: { any: [{ has: "appui:eaux:conseil" }, { has: "appui:eaux:toi" }, { has: "appui:eaux:liane" }] }, test: { dom: "social", diff: -10, label: "Social", help: [{ if: { fac: "eaux", min: 20 }, v: 15 }, { after: "oraison:vraie", v: 10 }, { after: "ysaure:promesse", v: 15 }] },
        win: { fx: { flag: ["appui:eaux:conseil", "temple:education"], ep: ["histoire", 2000] }, to: "T_eaux_oui" }, lose: { to: "T_eaux_non" } },
      { label: "Exiger sa voix pour le conseil", hide: { any: [{ has: "appui:eaux:conseil" }, { has: "appui:eaux:toi" }, { has: "appui:eaux:liane" }, { not: { has: "ysaure:tenue" } }] }, fx: { flag: "appui:eaux:conseil", clock: { emprise: 1 } }, to: "T_eaux_exige" },
      { label: "Exiger sa voix pour toi", hide: { any: [{ has: "appui:eaux:conseil" }, { has: "appui:eaux:toi" }, { has: "appui:eaux:liane" }, { not: { has: "ysaure:tenue" } }] }, fx: { flag: "appui:eaux:toi", clock: { emprise: 2 } }, to: "T_eaux_exige" },
      { back: "T_cabinet" },
    ] },
  T_eaux_oui: { act: "III", title: "Le conseil et l'enfant", place: "temple",
    text: [
      "Mère Ysaure réfléchit. « Un conseil des Cinq Bancs, dit-elle, où le Temple a l'enfant, et où la Mer et le Sel se surveillent. Où personne ne peut rien seul. » Elle pose la cruche. « Corradin a écrit cela, n'est-ce pas ? Je le reconnais. Il n'a jamais su gouverner. Il savait empêcher les autres de le faire. Je voterai. »",
    ],
    choices: [{ back: "T_cabinet" }] },
  T_eaux_non: { act: "III", title: "La tutelle", place: "temple",
    text: [
      "« Non, dit Mère Ysaure. Un conseil, c'est la Hanse et l'Amirauté qui se disputent l'enfant pendant sept ans. Je la veux derrière des murs, avec des livres. Je ne changerai pas d'avis. » Elle te ressert de l'eau, comme pour te consoler.",
    ],
    choices: [{ back: "T_cabinet" }] },
  T_eaux_exige: { act: "III", title: "Ce qu'on exige", place: "temple",
    text: [
      "Mère Ysaure incline la tête, une seule fois. « Comme vous voudrez. » Elle ne dit rien d'autre. Quand tu sors, elle ne te raccompagne pas, pour la première fois.",
      { with: "livia", text: "Livia t'attend dans la barque. Elle n'est pas entrée." },
    ],
    choices: [{ back: "T_cabinet" }] },

  // ------------------------------------------------------------------ the Oar Bench
  T_rames: { act: "III", title: "Nello Brisse", place: "canaux", backName: "les Canaux",
    text: [
      { after: "tessa:arretee", text: "Nello te reçoit dans la cuisine de sa mère, une pièce basse au-dessus d'un canal. « Ma sœur est dans votre prison, dit-il. Je ne vous demande rien. Je vous dis seulement où elle est. »" },
      { after: "tessa:prise", text: "Nello ne te fait pas entrer. Il te parle sur le seuil. « Ma sœur boite, dit-il. Deux de ses amis sont morts. C'est vous qui avez prévenu la Hanse. Tout le monde le sait. »" },
      { if: { not: { any: [{ has: "tessa:arretee" }, { has: "tessa:prise" }] } }, text: "Nello te reçoit sur son ponton, au bout du canal. Il te tend une bière tiède." },
      "« Je ne voterai pour aucun régent, dit-il. Le Banc des Rames s'abstiendra. Ce n'est pas notre affaire de choisir qui commandera aux autres. »",
    ],
    choices: [
      { label: "Lui lire le testament : les Cinq Bancs ensemble, et la remise des dettes du pain", hide: { any: [{ has: "appui:rames:conseil" }, { has: "appui:rames:toi" }, { has: "appui:rames:republique" }, { has: "rames:boude" }] }, to: "T_rames_testament" },
      { label: "« Votez pour moi. Je vous donnerai du pain et une voix. »", hide: { any: [{ has: "appui:rames:conseil" }, { has: "appui:rames:toi" }, { has: "appui:rames:republique" }, { has: "rames:boude" }] }, if: { fac: "rames", min: 25 }, why: "Les Canaux ne te font pas assez confiance pour te donner leur voix.", fx: { flag: "appui:rames:toi", clock: { emprise: 1 }, ep: ["histoire", 2000] }, to: "T_rames_toi" },
      { label: "« Une république. Iselda y renonce elle-même. »", hide: { any: [{ has: "appui:rames:conseil" }, { has: "appui:rames:toi" }, { has: "appui:rames:republique" }, { has: "rames:boude" }, { not: { has: "iselda:renonce" } }] }, fx: { flag: "appui:rames:republique", ep: ["histoire", 2000] }, to: "T_rames_republique" },
      { label: "Libérer Tessa", hide: { not: { has: "tessa:arretee" } }, once: true, fx: { flag: "tessa:liberee", unflag: "tessa:arretee", fac: { rames: 15 } }, to: "T_rames_tessa" },
      { back: "T_cabinet" },
    ] },
  T_rames_testament: { act: "III", title: "Ce qu'il voulait", place: "canaux",
    text: [
      "Tu sors les quatre feuilles. Tu lis la troisième et la quatrième, pas la première. Nello écoute sans bouger.",
      { after: "testament:sans_dettes", text: "Il ne remarque pas tout de suite que tu as promis à Orsanne de retirer la remise des dettes. Quand il le comprend, à ta façon de lire la dernière phrase, il te regarde longuement. « Vous avez vendu nos dettes, dit-il. Pour une voix. » Il réfléchit. « C'est quand même la meilleure offre qu'on ait jamais eue. »" },
      { before: "testament:sans_dettes", text: "« Les dettes du pain, répète-t-il. Toutes ? » Toutes. Il se détourne vers le canal. Il a les épaules qui tremblent. Quand il se retourne, il a l'air d'avoir dix ans de moins." },
    ],
    choices: [
      { label: "Lui demander sa voix pour le conseil", if: { not: { any: [{ has: "tessa:prise" }, { all: [{ has: "emeute:sang" }, { has: "tessa:arretee" }] }] } }, why: "Après ce qui est arrivé à sa sœur, Nello ne votera rien de ce que tu proposes.",
        fx: { flag: "appui:rames:conseil", fac: { rames: 10 }, ep: ["histoire", 2500] }, to: "T_rames_oui" },
      { label: "Repartir", fx: { flag: "rames:boude" }, back: "T_cabinet" },
    ] },
  T_rames_oui: { act: "III", title: "Le Banc des Rames", place: "canaux",
    text: [
      "« Je voterai, dit Nello. Pour la première fois de ma vie, je voterai pour un prince. Un prince mort, remarquez. C'est le seul genre de prince à qui je fasse confiance. »",
    ],
    choices: [{ back: "T_cabinet" }] },
  T_rames_toi: { act: "III", title: "Une voix", place: "canaux",
    text: [
      "Nello réfléchit longtemps. « Vous étiez entre les hallebardes et nous, le jour de l'émeute, ou vous étiez sur la borne. Vous avez cherché le grain. » Il hoche la tête. « Je voterai pour vous. Et le jour où vous oublierez les Canaux, je serai le premier sur la borne. »",
    ],
    choices: [{ back: "T_cabinet" }] },
  T_rames_republique: { act: "III", title: "Pas de prince", place: "canaux",
    text: [
      "Nello ne dit rien pendant si longtemps que tu crois qu'il n'a pas compris. Puis il se met à rire, d'un grand rire de gondolier qui fait se retourner les gens sur le quai d'en face. « Mon père est mort pour un banc, dit-il. Vous m'offrez la salle. » Il te serre la main à te briser les doigts.",
    ],
    choices: [{ back: "T_cabinet" }] },
  T_rames_tessa: { act: "III", title: "Tessa", place: "canaux",
    text: [
      "Tessa sort de la prison du palais avec la même tête qu'elle y est entrée. Elle te regarde. « Vous croyez que ça change quelque chose ? » Tu ne réponds pas. Elle hausse les épaules et s'en va rejoindre son frère, et en passant le pont, elle se retourne une fois.",
    ],
    choices: [{ back: "T_rames" }] },

  // ------------------------------------------------------------------ Thérance
  T_therance: { act: "III", title: "Le comte Mérande", place: "ambassade", backName: "l'ambassade de Thérance",
    text: [
      "Le comte te reçoit dans sa bibliothèque. La partie d'échecs est finie : les pièces sont rangées dans leur boîte.",
      "« La princesse Liane sera candidate, dit-il. Elle ne le veut pas. Le roi le veut. Ce sera la paix : un traité de commerce, des quais pour nos marchands, et les épées noires du duc renvoyées chez elles. Ce sera aussi la fin de Sarvelle comme vous la connaissez. Je ne vous mens pas. Je ne vous ai jamais menti. »",
    ],
    choices: [
      { label: "Accepter : la paix de Thérance, et la princesse régente", hide: { any: [{ has: "appui:sel:liane" }, { has: "therance:refus" }] }, fx: { flag: ["appui:sel:liane", "brume:retrait"], fac: { therance: 20 }, ep: ["histoire", 2000] }, to: "T_therance_paix" },
      { label: "Lui demander une lettre de son roi qui rappelle les épées noires", hide: { any: [{ has: "brume:lettre" }, { has: "brume:retrait" }] }, if: { any: [{ has: "merande:dette" }, { has: "odile:renvoyee" }] }, why: "Le comte ne te doit pas un service de cette taille.", fx: { flag: "brume:lettre" }, to: "T_therance_lettre" },
      { label: "Refuser", hide: { any: [{ has: "appui:sel:liane" }, { has: "therance:refus" }] }, fx: { flag: "therance:refus" }, back: "T_cabinet" },
      { back: "T_cabinet" },
    ] },
  T_therance_paix: { act: "III", title: "La paix", place: "ambassade",
    text: [
      "Le comte te serre la main, longuement. « Orsanne votera avec nous, dit-il. Le traité lui ouvre trois ports en terre ferme. Je lui ai écrit ce matin, au cas où. » Il sourit. « Je suis désolé. Je crois sincèrement que c'est la meilleure solution. Je crois aussi que, dans dix ans, on dira que c'est le jour où Sarvelle a cessé d'être Sarvelle. Les deux sont vrais. »",
    ],
    choices: [{ back: "T_cabinet" }] },
  T_therance_lettre: { act: "III", title: "La lettre du roi", place: "ambassade",
    text: [
      "Le comte ouvre un tiroir. Il en sort une lettre scellée de rouge et d'or. « Elle est arrivée hier. Le roi ordonne à son frère de rentrer. Le duc ne l'a pas encore reçue : le courrier passe par moi. » Il te la tend. « Portez-la vous-même à Castel-Brume. Si c'est moi qui la porte, le duc dira que c'est un faux. Si c'est le Garde du Sceau de Sarvelle, devant ses capitaines, il ne pourra pas. »",
    ],
    choices: [{ label: "Prendre la lettre", fx: { flag: "brume:appel" }, back: "T_cabinet" }] },

  // ------------------------------------------------------------------ Iselda
  T_iselda: { act: "III", title: "Iselda", place: "palais", backName: "la chambre d'Iselda",
    text: [
      "Iselda est assise à la fenêtre. Elle a ressorti ses coquillages, mais elle ne les aligne plus par taille. Elle les a mis en cercle.",
      { after: "iselda:sait", text: "Elle ne parle plus des placards. Elle a demandé à Ortensia de lui apprendre à nager. Ortensia a dit non. Elle a demandé à l'amiral. L'amiral a dit oui." },
      { after: "iselda:mensonge", text: "Elle te dit bonjour, poliment. Elle te dit qu'elle va bien. Elle dit à tout le monde qu'elle va bien." },
    ],
    choices: [
      { label: "« À quoi tu penses ? »", hide: { any: [{ seen: "T_iselda_pense" }, { not: { has: "iselda:sait" } }] }, to: "T_iselda_pense" },
      { label: "Lui demander si elle veut que tu viennes la voir après le quarantième jour", hide: { seen: "T_iselda_apres" }, to: "T_iselda_apres" },
      { back: "T_cabinet" },
    ] },
  T_iselda_pense: { act: "III", title: "Ce qu'elle pense", place: "palais",
    text: [
      "« Je pense que je ne veux pas être princesse, dit Iselda. Papa disait que la ville n'avait pas besoin d'un prince. Qu'elle avait besoin de pain et de gens qui se disputent dans une salle sans se tuer. Il disait qu'il était le dernier, et qu'il faisait semblant. »",
      "Elle te regarde. « Si je dis non, est-ce que ça compte ? Ou bien je suis trop petite ? »",
    ],
    choices: [
      { label: "« Ça compte. Si tu le dis toi-même, devant le Conseil, ça compte. »", if: { clock: "iselda", min: 5 }, why: "Elle ne te fait pas encore assez confiance pour une chose pareille.", fx: { flag: "iselda:renonce", clock: { iselda: 1 } }, to: "T_iselda_renonce" },
      { label: "« Attends d'avoir seize ans. Tu choisiras alors. »", fx: { flag: "iselda:attend", clock: { iselda: 1 } }, back: "T_iselda" },
    ] },
  T_iselda_renonce: { act: "III", title: "Non", place: "palais",
    text: [
      "Iselda hoche la tête, très sérieusement. Puis elle prend un coquillage dans le cercle, le plus petit, la spirale blanche du premier jour, et te le met dans la main.",
      "« Celui-là, tu peux le garder, dit-elle. Pas le tenir. Le garder. »",
    ],
    choices: [{ back: "T_iselda" }] },
  T_iselda_apres: { act: "III", title: "Après", place: "palais",
    text: [
      { if: { clock: "iselda", min: 4 }, text: "« Oui », dit Iselda, tout de suite, sans réfléchir. Puis elle réfléchit. « Mais pas comme le Sceau. Comme toi. »",
        else: "Iselda hausse les épaules. « Si tu veux. Les grands disent toujours qu'ils viendront. »" },
    ],
    choices: [{ back: "T_iselda" }] },

  // ------------------------------------------------------------------ Joris
  T_joris: { act: "III", title: "Joris", place: "palais",
    text: [
      "Joris entre dans le cabinet, ferme la porte, et pose sur la table un billet ouvert. Il est sobre. Tu ne l'avais jamais vu aussi sobre.",
      "« L'amiral m'a écrit, dit-il. Il me demande, au nom de vingt ans de service, de lui ouvrir la porte d'eau la nuit du trente-neuvième, s'il me fait signe. Pour protéger la petite, dit-il, si les choses tournent mal. » Il te regarde. « Je pouvais ne rien vous dire. Je vous le dis. Maintenant c'est à vous. »",
      { if: { conf: "joris", max: 20 }, text: "Il ajoute, plus bas : « Je ne sais pas encore ce que je ferai. C'est pour ça que je suis venu. »" },
    ],
    choices: [
      { label: "« Tu feras ce que tu jugeras bon. Je ne te donnerai pas d'ordre. »", fx: { quest: "T_joris", flag: ["joris:libre_choix", "joris:sort"], conf: { joris: 15 } }, to: "T_joris_libre" },
      { label: "« La porte d'eau reste fermée. C'est un ordre. »", fx: { quest: "T_joris", flag: ["joris:ordre", "joris:sort"], conf: { joris: -5 } }, to: "T_joris_ordre" },
      { label: "Le relever de son commandement jusqu'au quarantième jour", fx: { quest: "T_joris", flag: ["joris:releve", "joris:sort"], leave: "joris", clock: { emprise: 1 } }, to: "T_joris_releve" },
    ] },
  T_joris_libre: { act: "III", title: "Le choix de Joris", place: "palais",
    text: [
      "Joris te regarde longtemps. Puis il reprend le billet, le froisse, et le jette dans le poêle.",
      "« Personne ne m'avait jamais laissé choisir, dit-il. Ni mon père, ni la marine, ni l'amiral. Je vais vous décevoir : c'est très désagréable. » Il se lève. « Je serai à la porte d'eau, la nuit du trente-neuvième. De votre côté. »",
    ],
    choices: [{ label: "Le laisser", fx: { flag: "joris:fidele" }, back: "T_cabinet" }] },
  T_joris_ordre: { act: "III", title: "Un ordre", place: "palais",
    text: [
      "Joris se met au garde-à-vous. « À vos ordres. » Il sort. Il a l'air soulagé, et tu ne sais pas si c'est parce qu'on lui a enlevé le choix ou parce qu'on lui a donné une excuse.",
    ],
    choices: [{ label: "Le laisser", back: "T_cabinet" }] },
  T_joris_releve: { act: "III", title: "Relevé", place: "palais",
    text: [
      "Joris défait son ceinturon, lentement, et pose son sabre sur la table. « Vous avez sans doute raison, dit-il. Je ne vous en veux pas. » Il sort sans se retourner. Le soir, on te dit qu'il est à l'Arsenal.",
    ],
    choices: [{ back: "T_cabinet" }] },

  // ------------------------------------------------------------------ Castel-Brume
  T_brume_arrivee: { act: "III", title: "Castel-Brume", place: "brume", backName: "Castel-Brume", routes: true,
    text: [
      { first: true, text: "Castel-Brume est une forteresse grise posée sur un éperon, là où le fleuve sort des marais et commence à ressembler à un fleuve. Autour, dans les prés, trois mille hommes campent sous des tentes noires. On a tendu une chaîne en travers du fleuve. Des péniches sont amarrées en amont, par dizaines, chargées de grain, et attendent." },
      { first: true, text: "On te fait attendre une heure dans une cour, sous la pluie, puis on te fait monter dans une salle où un homme de quarante ans, en cuirasse noire, mange du pain et du lard, debout : le capitaine Sorrède, qui commande les épées noires en l'absence du duc. Le duc est à la chasse. Le duc est toujours à la chasse quand on vient le voir." },
      { again: true, text: "Les tentes noires sont toujours là. Le capitaine Sorrède aussi." },
    ],
    choices: [
      { label: "Lui remettre la lettre du roi devant ses capitaines", hide: { any: [{ not: { has: "brume:lettre" } }, { quest: "T_brume" }] }, to: "T_brume_lettre" },
      { label: "Lui réclamer les copies de tes lettres de Corne", hide: { any: [{ not: { has: "lettres:brume" } }, { has: "lettres:reprises" }] }, to: "T_brume_copies" },
      { label: "Repérer, pendant qu'on te fait attendre, ce qu'ils préparent", hide: { any: [{ has: "coup:connu" }, { quest: "T_brume" }] }, test: { dom: "discretion", label: "Discrétion", help: [{ with: "joris", v: 15 }] },
        win: { fx: { quest: "T_brume", flag: ["coup:connu", "brume:sort"], ep: ["histoire", 2500] }, to: "T_brume_plan" }, lose: { to: "T_brume_vu" } },
      { label: "Défier Sorrède en combat singulier, devant ses hommes", hide: { quest: "T_brume" }, to: "T_brume_duel" },
      { label: "Repartir", hide: { not: { quest: "T_brume" } }, back: "T_cabinet" },
    ] },
  T_brume_lettre: { act: "III", title: "La lettre du roi", place: "brume",
    fx: { quest: "T_brume", flag: ["brume:retrait", "brume:sort"], fac: { therance: 10 }, ep: ["histoire", 4000] },
    text: [
      "Tu demandes que les capitaines soient présents. Sorrède hausse les épaules, puis les fait venir : six hommes en cuirasse noire, qui te regardent comme on regarde un cerf qui entre dans une auberge.",
      "Tu brises le cachet devant eux, tu tends la lettre à Sorrède. Il la lit. Il la relit. Ses capitaines regardent son visage.",
      "« Le roi ordonne à son frère de rentrer, dit-il enfin, à voix haute, parce qu'il n'a pas le choix. Et à la compagnie de lever le camp. » Il replie la lettre. « Le duc ne sera pas content. » Il te regarde. « Moi, ça m'est égal. Je suis payé par le roi. Le duc paie mieux, mais le roi paie plus longtemps. »",
      "Le lendemain, on détache la chaîne. Les péniches de grain descendent le fleuve vers Sarvelle.",
    ],
    choices: [{ label: "Repartir", back: "T_cabinet" }] },
  T_brume_copies: { act: "III", title: "Les copies", place: "brume",
    text: [
      "Sorrède mâche son lard. « Les lettres de Corne ? » Il ouvre un coffre de campagne, en sort une liasse, et la soupèse. « Le duc me les a confiées pour qu'on les lise au Conseil le quarantième jour, si vous votiez mal. » Il te regarde. « Qu'est-ce que vous me donnez ? »",
    ],
    choices: [
      { label: "Une franchise de péage du Sceau pour les péniches de sa famille, sur la lagune, pour dix ans", fx: { flag: "lettres:reprises", clock: { emprise: 1 }, ep: ["perso", 500] }, to: "T_brume_copies_ok" },
      { label: "Ta parole qu'aucun Théran ne sera inquiété à Sarvelle après le Conseil", test: { dom: "social", diff: -10, label: "Social" },
        win: { fx: { flag: "lettres:reprises" }, to: "T_brume_copies_ok" }, lose: { to: "T_brume_copies_non" } },
      { label: "Rien", back: "T_brume_arrivee" },
    ] },
  T_brume_copies_ok: { act: "III", title: "Le feu", place: "brume",
    text: [
      "Sorrède te tend la liasse. Tu la jettes dans la cheminée, devant lui. Il te regarde faire sans rien dire, puis il hausse les épaules. « On en a fait d'autres copies, je suppose, dit-il. On en fait toujours. Mais pas moi. »",
    ],
    choices: [{ back: "T_brume_arrivee" }] },
  T_brume_copies_non: { act: "III", title: "Non", place: "brume",
    text: [
      "Sorrède sourit. Il remet la liasse dans le coffre, et il ferme le coffre à clé. « Votez bien », dit-il.",
    ],
    choices: [{ back: "T_brume_arrivee" }] },
  T_brume_plan: { act: "III", title: "Ce qu'ils préparent", place: "brume",
    text: [
      "Pendant qu'on te fait attendre, tu marches dans la cour comme quelqu'un qui s'ennuie. Derrière un hangar, des charpentiers construisent des échelles courtes, faites pour monter d'une barque sur un quai. Dans la forge, on noircit des lames. Sur une table, sous un auvent, un plan du palais de Sarvelle, avec la porte d'eau entourée d'un trait rouge, et une date : *trente-neuvième, deuxième heure*.",
      "Tu n'as rien vu. Tu remontes voir Sorrède, tu parles de péages et de péniches, et tu repars.",
    ],
    choices: [{ label: "Repartir", back: "T_cabinet" }] },
  T_brume_vu: { act: "III", title: "Surpris", place: "brume",
    text: [
      "Un garde te trouve derrière le hangar des charpentiers. Il te ramène à Sorrède, très poliment, la main sur l'épaule. Sorrède rit. « Le Sceau visite, dit-il. Vous avez vu des échelles. Tout le monde a des échelles. » Il ne te retient pas. Mais il sait que tu sais quelque chose, et il changera ce qu'il faut changer.",
    ],
    choices: [{ label: "Repartir", fx: { quest: "T_brume", flag: "brume:sort" }, back: "T_cabinet" }] },
  T_brume_duel: { act: "III", title: "Le défi", place: "brume",
    combat: { title: "Le capitaine Sorrède", enemies: ["capitaine_noir"], terrain: "bati",
      win: { fx: { quest: "T_brume", flag: ["brume:duel", "brume:sort", "coup:affaibli"], ep: ["histoire", 4000] }, to: "T_brume_duel_gagne" },
      lose: { fx: { quest: "T_brume", flag: ["brume:sort"], pv: -4 }, to: "T_brume_duel_perdu" } },
    text: [
      "Tu le dis devant ses hommes : le Garde du Sceau de Sarvelle défie le capitaine des épées noires, ici, maintenant, au premier sang, et si tu gagnes, la chaîne sera détachée du fleuve.",
      "Sorrède te regarde, amusé, puis il voit ses hommes qui le regardent, et il n'est plus amusé. Il pose son pain. Il dégaine.",
    ] },
  T_brume_duel_gagne: { act: "III", title: "Le premier sang", place: "brume",
    text: [
      "Sorrède regarde le sang sur son bras, puis toi. Ses hommes ne disent rien. « Détachez la chaîne », dit-il. Il te salue de l'épée. « Le duc va me pendre. Ou me promouvoir. Avec lui, c'est souvent la même chose. »",
      "Les péniches de grain descendent vers Sarvelle le lendemain. Les épées noires restent dans leurs tentes, mais ils ont vu leur capitaine saigner devant un homme de la ville.",
    ],
    choices: [{ label: "Repartir", back: "T_cabinet" }] },
  T_brume_duel_perdu: { act: "III", title: "À terre", place: "brume",
    text: [
      "Tu te retrouves à genoux dans la boue, la lame de Sorrède contre la gorge. Il ne la presse pas. « Le premier sang, dit-il. C'est le vôtre. » Il rengaine. « Rentrez chez vous, Sceau. Et votez bien. »",
    ],
    choices: [{ label: "Repartir", back: "T_cabinet" }] },
};
