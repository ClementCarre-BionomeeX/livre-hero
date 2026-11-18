// L'Île Folle-Aiguille · side story « Les mains de Madame Kerfriden » (owes its question to La Parure: when ten years
// of sacrifice rest on a mistake, does one owe the truth to the one who made them?). Act I, Victorine's evening in
// Varnèse: Ninon Kerfriden, thirty-four, who looks fifty, comes for her ruined hands. She is a washerwoman. Ten years
// ago, the wife of a clerk, she borrowed a necklace from Madame Orsel, the notary's wife, for a ball, lost it, and
// replaced it with a real one bought on ruinous credit. She has just paid the last instalment. Victorine knows, from a
// fever of Madame Orsel's, that all her jewels were paste. She tells Ninon (ve:dit), keeps silent (ve:tait), or goes
// to Madame Orsel to make her give back the difference (ve:orsel). Wired in A1v_soir.
module.exports = {
  passages: {
    VE_mains: { act: "I", title: "Les mains de Madame Kerfriden", place: "varnese_maison", ambiance: "village",
      fx: { meet: "kerfriden" },
      text: [
        "Elle frappe à la porte du cabinet à neuf heures, timidement, du bout d'un doigt, comme on frappe chez quelqu'un qu'on a peur de déranger depuis dix ans. Une femme sans âge, en caraco de laine, un fichu sur des cheveux gris tirés en arrière, des épaules de portefaix. Elle dit qu'elle s'appelle Ninon Kerfriden, qu'elle est blanchisseuse au lavoir du bas, et qu'elle a trente-quatre ans. Victorine lui en aurait donné cinquante. Elle tend ses mains.",
        "Ce sont des mains de dix ans de lessive : rouges, gonflées, crevassées jusqu'au sang, avec des ongles cassés et une peau qui pèle par plaques sous l'effet de la cendre et de la soude. Victorine les prend, les tourne sous la lampe, et pense à ce qu'il en coûte de laver chaque jour, à genoux sur la pierre, le linge des autres. Elle prépare un onguent. Pendant qu'elle le pile, Ninon parle, parce que personne ne l'écoute plus depuis longtemps et que le cabinet est chaud.",
        "Elle était jolie, dit-elle, sans fausse modestie, comme on parle d'une morte. Femme d'un commis du greffe. Un soir, il y a dix ans, on les a invités au bal du sous-préfet. Elle n'avait rien à mettre au cou. Madame Orsel, la femme du notaire, chez qui elle allait en journée pour la couture, lui a prêté une rivière de diamants, en riant. Elle a dansé toute la nuit. Elle l'a perdue en rentrant, sur la route. On a cherché huit jours. Puis on a trouvé chez un joaillier de Morlenc la même, exactement la même, pour dix-huit mille livres, et on l'a achetée à crédit, chez trois usuriers, et on l'a rendue à Madame Orsel dans son écrin.",
      ],
      choices: [{ label: "Lui demander de continuer", to: "VE_dette" }] },
    VE_dette: { act: "I", title: "Les mains de Madame Kerfriden", place: "varnese_maison", ambiance: "village",
      text: [
        "Dix ans. Le mari a pris des écritures le soir, chez des marchands. Elle a renvoyé la bonne, pris le lavoir, la couture, les ménages. Ils ont quitté l'appartement pour une mansarde, puis la mansarde pour une soupente. Le mari est mort il y a deux ans, d'épuisement, dit-elle, et d'un rhume qu'on n'avait pas les moyens de soigner. Elle a continué seule. Hier, elle a payé le dernier usurier. Elle ne doit plus rien à personne. Elle le dit avec une fierté terrible, en redressant ses épaules de portefaix, et Victorine voit passer sur son visage, une seconde, la jolie femme du bal.",
        "Victorine, elle, a cessé de piler. Elle se souvient d'une nuit, trois ans plus tôt, au chevet de Madame Orsel, qui avait une pneumonie et délirait. La femme du notaire lui a tenu la main en pleurant, et lui a avoué, comme on avoue un crime, que tous ses bijoux étaient faux, depuis toujours, depuis la ruine de son père, que personne ne le savait, pas même son mari, et que c'était sa honte la plus secrète. Une rivière, entre autres. Du strass. Cinq cents livres au plus. Madame Orsel guérie n'en a jamais reparlé. Elle a sans doute oublié l'avoir dit.",
        "Ninon Kerfriden essuie ses yeux avec le coin de son fichu, et rit, et dit qu'elle ne sait pas pourquoi elle raconte tout ça, que c'est fini, et qu'au moins elle peut regarder Madame Orsel en face quand elle va chercher son linge. Elle tend ses mains pour l'onguent. Victorine a la vérité au bout de la langue, et elle sent son poids : dix ans, une jeunesse, un mari mort, dix-sept mille cinq cents livres, et un collier de verre.",
      ],
      choices: [
        { label: "Lui dire ce que Madame Orsel a avoué", fx: { flag: "ve:dit" }, to: "VE_dit" },
        { label: "Lui mettre l'onguent, et se taire", fx: { flag: "ve:tait" }, to: "VE_tait" },
        { label: "Aller trouver Madame Orsel, dès demain, et exiger qu'elle rende la différence", fx: { flag: "ve:orsel" }, to: "VE_orsel" },
      ] },
    VE_dit: { act: "I", title: "Les mains de Madame Kerfriden", place: "varnese_maison", ambiance: "village",
      text: [
        "Elle le dit simplement, en lui tenant les mains, avec l'onguent entre leurs doigts, comme une mauvaise nouvelle de médecin, sans adjectifs. Ninon Kerfriden l'écoute sans bouger. Elle ne pleure pas. Elle regarde ses mains dans celles de Victorine, longtemps, très longtemps, comme on regarde des mains étrangères. Puis elle dit, d'une voix plate : « Cinq cents livres. »",
        "Elle se lève. Elle remercie pour l'onguent, poliment. Elle remet son fichu. Sur le seuil, elle se retourne et dit qu'elle aurait préféré ne pas savoir, et qu'elle est contente de savoir, et qu'elle ne sait pas laquelle de ces deux choses est vraie. Puis elle s'en va dans la nuit, à grands pas, du côté de la maison du notaire.",
        "Victorine apprendra la suite par la rumeur. Ninon Kerfriden sonne chez les Orsel ce soir même, à dix heures. Elle demande à voir Madame. Elle lui parle une heure, dans le vestibule, debout, et personne ne saura jamais ce qu'elle a dit. Quelques jours plus tard, Madame Orsel vendra la rivière de diamants à un joaillier de Morlenc, et Ninon Kerfriden quittera le lavoir. On la verra au marché, en robe neuve, les mains gantées, aussi grave qu'avant. Elle saluera Victorine, chaque fois, d'un signe de tête grave, comme on salue un chirurgien qui vous a coupé quelque chose de pourri.",
      ],
      choices: [{ label: "Revenir au cabinet", fx: { quest: "VE" }, back: "A1v_soir" }] },
    VE_tait: { act: "I", title: "Les mains de Madame Kerfriden", place: "varnese_maison", ambiance: "village",
      text: [
        "Elle se tait. Elle étale l'onguent, doucement, sur chaque crevasse, avec un soin qu'elle n'a pour personne, et elle bande les mains dans de la toile fine, et elle dit qu'il faudra revenir dans huit jours. Ninon Kerfriden la remercie avec effusion. Elle dit que c'est la première fois depuis dix ans qu'on lui touche les mains pour leur faire du bien. Victorine refuse son argent. Ninon insiste. Victorine accepte un sou, pour qu'elle garde sa fierté.",
        "Victorine la regarde partir, droite, payée, quitte, heureuse d'une manière austère et têtue, comme on est heureux d'avoir gagné une guerre. Demain matin, Ninon passera devant la maison du notaire, avec sa hotte de linge, la tête haute. Elle croisera Madame Orsel et la saluera en égale. C'est la seule chose qu'elle possède, désormais. Victorine se dit qu'elle n'avait pas le droit de la lui reprendre.",
        "Elle se le répète, après le départ de Ninon, devant ses propres comptes, devant la lettre de la banque Clavières et les dettes d'Hector, elle se demande parfois ce qu'elle préférerait, elle, si quelqu'un savait quelque chose. Elle ne trouve pas la réponse. Elle sait seulement qu'elle a tenu, ce soir-là, entre ses mains enduites d'onguent, dix ans d'une vie, et qu'elle a choisi de les laisser entières, avec leur mensonge dedans, comme une perle autour d'un grain de sable.",
      ],
      choices: [{ label: "Revenir au cabinet", fx: { quest: "VE" }, back: "A1v_soir" }] },
    VE_orsel: { act: "I", title: "Les mains de Madame Kerfriden", place: "varnese_maison", ambiance: "village",
      text: [
        "Elle se tait devant Ninon, et lui bande les mains, et la laisse partir. Puis elle remet son manteau encore humide, sous les orbites réprobatrices de Monsieur Prosper, et traverse Varnèse dans la nuit jusqu'à la maison du notaire, où l'on donne une soirée. Madame Orsel la reçoit dans le petit salon, aimable, un peu surprise, parée, au cou, d'une rivière qui jette des feux. Victorine refuse le thé. Elle raconte. Elle raconte tout, le bal, la route, les usuriers, la mansarde, le mari mort, les mains. Puis elle rappelle, à voix basse, une nuit de pneumonie, il y a trois ans.",
        "Madame Orsel devient très pâle, puis très rouge. Elle porte la main à son cou. Elle comprend, en une seconde, que le collier qu'elle porte n'est pas le sien, qu'il vaut dix-huit mille livres, et que la femme qui lui lave son linge l'a payé de sa vie. Elle pleure. Puis elle cesse de pleurer, et elle demande, avec une lucidité de femme de notaire, si quelqu'un d'autre est au courant. Victorine dit que non. Elle dit que ça dépendra de ce que Madame Orsel décidera.",
        "Madame Orsel décide, ce soir même, entre deux invités. Elle vendra la rivière, discrètement, à Morlenc, et fera porter la somme à Ninon Kerfriden, par un clerc, sans un mot d'explication, sous le nom d'un héritage. Ninon quittera le lavoir, persuadée qu'un oncle de l'Amirauté lui a laissé quelque chose, et viendra remercier Victorine pour l'onguent, une dernière fois, en gants neufs, sans jamais rien savoir. Madame Orsel, elle, saluera désormais Victorine dans la rue avec une haine polie et éternelle. Victorine trouve que c'est un bon prix pour dix-sept mille cinq cents livres.",
      ],
      choices: [{ label: "Revenir au cabinet", fx: { quest: "VE" }, back: "A1v_soir" }] },
  },
  extras: {
    people: {
      kerfriden: { name: "Ninon Kerfriden", aka: ["la blanchisseuse"], qui: "Blanchisseuse au lavoir de Varnèse, veuve d'un commis du greffe." },
    },
    quests: [
      { id: "VE", act: "I", kind: "annexe", title: "Les mains de Madame Kerfriden", start: "VE_mains", doit: "parure", echo: ["ve:dit", "ve:tait", "ve:orsel"] },
    ],
  },
};
