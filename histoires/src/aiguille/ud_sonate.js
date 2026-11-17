// L'Île Folle-Aiguille · side story « La sonate de Madame Cosquer » (owes its question to Tolstoy's The Kreutzer
// Sonata: what does a doctor owe a woman whose husband's jealousy has already put its hands on her throat?). Act I, the
// same evening in Varnèse: Victorine is called to Hélène Cosquer, wife of the harbour clerk, who « fell on the stairs ».
// The marks are on her neck, four on one side, one on the other. The jealousy has a name: the rector's nephew, who
// plays the violin with her on Thursdays. Victorine confronts the husband (ud:mari), takes Hélène out of the house that
// night (ud:fuite), or writes a dated certificate of the marks and leaves it in Hélène's hands (ud:certificat).
// Wired in A1v_soir.
module.exports = {
  passages: {
    UD_servante: { act: "I", title: "La sonate de Madame Cosquer", place: "varnese", ambiance: "nuit",
      text: [
        "La petite servante est restée sur le palier, assise sur la dernière marche, les genoux serrés, son tablier tordu entre ses mains. Elle a quatorze ans. Elle se lève d'un bond quand Victorine sort de la chambre, comme prise en faute. Victorine lui fait signe de se rasseoir, et s'assied à côté d'elle, sur la marche, ce qui ne s'était jamais vu dans cette maison.",
        "La petite parle vite, tout bas, en surveillant le vestibule par-dessus la rampe. Elle dit que les jeudis, quand le jeune monsieur au violon vient, Monsieur ne va pas au port. Il dit qu'il y va. Il sort par la grande porte, en faisant claquer ses talons. Puis il rentre par la cuisine, en chaussettes, et il s'assied dans le vestibule, sur la chaise qui est sous l'escalier, avec sa montre ouverte sur le genou, et il écoute.",
        "Elle dit qu'il note des choses dans un petit carnet. Les heures. Les silences. Combien de temps dure le morceau. Combien de temps il y a entre la fin du morceau et le moment où le jeune monsieur descend. Elle dit qu'une fois, le jeune monsieur est resté trois minutes de plus pour remettre une corde à son violon, et que Monsieur, ce soir-là, n'a pas dîné.",
        "Elle dit qu'elle a vu le carnet, une fois, oublié sur la console. Il y avait des pages et des pages de chiffres, comme un livre de comptes. Et en bas d'une page, d'une écriture plus grosse, tremblée, un seul mot, souligné trois fois. Elle ne sait pas lire. Elle a regardé la forme du mot. Elle la dessine du doigt sur la marche, dans la poussière de cire. Victorine reconnaît le mot. C'est : « Andante »."
      ],
      choices: [
        { back: "UD_escalier", label: "Retourner au chevet d'Hélène Cosquer" }
      ] },
    UD_piano: { act: "I", title: "La sonate de Madame Cosquer", place: "varnese", ambiance: "nuit",
      text: [
        "Le salon du premier est sombre, éclairé seulement par la lampe de la rue qui passe à travers les rideaux de tulle. Le piano carré est ouvert, le couvercle relevé, comme une bouche qui aurait été interrompue au milieu d'une phrase. Sur le pupitre, une partition, ouverte aux pages du milieu. Sur une chaise, à côté, un étui de violon, oublié.",
        "Victorine s'approche. La partition est usée, cornée, annotée au crayon de deux écritures différentes, l'une ronde et l'autre penchée, qui se répondent en marge : ici plus doux, ici attendre, ici ensemble. À un endroit, au milieu d'une page, les deux écritures ont tracé le même signe, au même endroit, une petite croix, sans commentaire.",
        "Sur les touches du piano, il y a une épingle à cheveux, tombée. Et sur le tapis, sous le tabouret, un bouton de manchette, d'argent, arraché, avec un bout de fil. Victorine le ramasse. Il porte, gravées, deux initiales : celles de Monsieur Cosquer.",
        "Elle repose le bouton sur le pupitre, à côté de la partition. Elle regarde les deux croix au crayon, une ronde, une penchée, au même endroit de la musique. Elle pense que deux personnes qui ne se sont jamais regardées en face peuvent se donner rendez-vous au milieu d'une page, et qu'un homme qui ne lit pas la musique peut entendre ce rendez-vous à travers un plancher. Elle referme le couvercle du piano, doucement."
      ],
      choices: [
        { back: "UD_escalier", label: "Retourner au chevet d'Hélène Cosquer" }
      ] },
    UD_escalier: { act: "I", title: "La sonate de Madame Cosquer", place: "varnese", ambiance: "nuit",
      fx: { meet: "helene" },
      text: [
        { first: true, text: "C'est une petite servante qui frappe, essoufflée, sans bonnet, et qui dit que Madame est tombée dans l'escalier. Elle dit « tombée » trop vite, en regardant ses souliers. Victorine reprend sa sacoche. La maison Cosquer est la plus belle de la rue du port, à deux étages, avec un balcon de fer forgé et, dans le salon du premier, un piano carré qu'on entend jusqu'au quai, les jeudis." },
        { first: true, text: "Monsieur Cosquer reçoit la médecin au pied de l'escalier, en habit, très pâle, très poli, les mains derrière le dos. Commis principal du port, quarante ans, une moustache cirée, une voix de chapelle. Il dit que sa femme a glissé sur une marche cirée, qu'elle est un peu commotionnée, qu'il est désolé de déranger à une heure pareille. Il ne monte pas avec elle. Il reste en bas, dans le vestibule, à écouter." },
        { first: true, text: "Hélène Cosquer est assise dans son lit, en chemise de nuit, avec un châle remonté jusqu'au menton. Trente ans, très belle, d'une beauté fatiguée, avec des yeux qui guettent la porte. Elle répète l'histoire de la marche cirée. Victorine lui demande d'ôter le châle. Elle hésite, puis obéit." },
        { first: true, text: "Sur le cou, à gauche, quatre marques ovales, bleues, en rang. À droite, une seule, plus large. Victorine en a vu sur des noyés repêchés, et une fois sur une servante de ferme qu'on avait retrouvée dans un fossé. On ne se fait pas ces marques-là dans un escalier. On se les fait faire par une main droite, d'homme, qui serre longtemps." },
        { again: true, text: "Hélène Cosquer, dans son lit, le châle remonté jusqu'au menton, guette la porte, et en bas Monsieur Cosquer écoute." }
      ],
      choices: [
        { label: "Interroger la petite servante, restée sur le palier", to: "UD_servante", hide: { seen: "UD_servante" } },
        { label: "Entrer un instant dans le salon, où le piano est resté ouvert", to: "UD_piano", hide: { seen: "UD_piano" } },
        { label: "Lui dire ce que disent ces marques, et attendre", to: "UD_jeudi" }
      ] },
    UD_jeudi: { act: "I", title: "La sonate de Madame Cosquer", place: "varnese", ambiance: "nuit",
      text: [
        "Hélène ne nie pas longtemps. Elle parle bas, en regardant la porte. Le jeudi, le neveu du recteur vient jouer avec elle. Un garçon de vingt-cinq ans, maigre, myope, qui joue du violon comme un ange et qui n'a jamais osé la regarder en face. Ils jouent une sonate. Toujours la même, depuis l'hiver, parce qu'elle est difficile et qu'ils ne l'ont pas encore domptée. Il y a un passage, au milieu, où le violon et le piano se répondent, se poursuivent, s'attrapent, et se lâchent. Ce soir, après le départ du violoniste, son mari est monté. Il lui a demandé ce que voulait dire ce passage.",
        "Elle a dit que ça ne voulait rien dire. Que c'était de la musique. Il a dit qu'il avait entendu, d'en bas, ce que ça voulait dire, et que tout le quai l'avait entendu aussi. Puis il a mis sa main là. Elle touche son cou. Il a serré jusqu'à ce qu'elle voie noir. Puis il a lâché, il a pleuré, il lui a demandé pardon à genoux, il a dit qu'il ne savait pas ce qui lui avait pris, que c'était la musique, que cette musique rendait fou. C'est lui qui a envoyé la servante chercher la médecin. Elle dit qu'il l'aime. Elle dit qu'il n'avait jamais fait ça. Elle dit « jamais » en baissant les yeux.",
        "Victorine relève la manche de la chemise de nuit, doucement. Sur le bras, plus haut, des marques plus anciennes, jaunes, vertes, à des degrés divers de guérison. Un calendrier. Hélène rabaisse la manche. Elle dit qu'elle est maladroite. Elle dit qu'il ne faut rien faire, qu'il ne faut rien dire, que si l'on dit quelque chose, il saura que c'est elle, et que ce sera pire. Dans le vestibule, en bas, on entend Monsieur Cosquer qui marche, de long en large, sur le dallage. Ses pas sont réguliers comme un métronome.",
      ],
      choices: [
        { label: "Descendre parler à Monsieur Cosquer, dans le vestibule", fx: { flag: "ud:mari" }, to: "UD_mari" },
        { label: "Faire habiller Hélène et l'emmener cette nuit, chez elle, à la maison de la médecin", fx: { flag: "ud:fuite" }, to: "UD_fuite" },
        { label: "Écrire un certificat des marques, daté, signé, et le lui laisser", fx: { flag: "ud:certificat" }, to: "UD_certificat" },
      ] },
    UD_mari: { act: "I", title: "La sonate de Madame Cosquer", place: "varnese", ambiance: "nuit",
      text: [
        "Elle descend. Il l'attend au pied de l'escalier, les mains toujours derrière le dos. Elle lui dit, sans élever la voix, qu'elle a vu le cou de sa femme, et qu'elle sait lire une main sur une gorge comme il sait lire un connaissement. Elle lui dit qu'elle a vu aussi le bras. Il ne nie pas. Il s'effondre sur une chaise du vestibule, très vite, comme un homme qui attendait qu'on le pousse. Il pleure. Il dit qu'il l'aime. Il dit que c'est la musique. Il dit qu'il ne supporte pas d'entendre sa femme parler à un autre homme dans une langue qu'il ne comprend pas.",
        "Victorine le laisse pleurer. Puis elle lui dit qu'elle reviendra. Demain, après-demain, dans huit jours, à l'improviste, sous n'importe quel prétexte, et qu'elle demandera chaque fois à voir le cou et les bras de Madame Cosquer, et que s'il y trouve un jour une marque de plus, elle portera ce qu'elle sait au juge de paix, au recteur et au maître de port, dans cet ordre, et qu'à Varnèse un commis du port qui étrangle sa femme ne reste pas commis du port. Il la regarde. Il hoche la tête. Il dit merci. Il le dit sincèrement, ce qui est pire.",
        "En sortant, elle se retourne. Il est remonté. Elle le voit, par la fenêtre éclairée du premier, qui s'agenouille au pied du lit, et sa femme qui lui pose la main sur la tête, comme on bénit. Victorine reste un moment dans la rue, dans le noir, avec sa sacoche. Elle a mis un homme sous surveillance. Elle part pour Morlenc dans quelques jours, et elle ne sait pas pour combien de temps. Elle se demande qui surveillera, quand elle sera partie, et si une menace vaut quelque chose quand celle qui menace n'est plus là.",
      ],
      choices: [{ label: "Rentrer à la maison, par la rue du port", fx: { quest: "UD" }, back: "A1v_soir" }] },
    UD_fuite: { act: "I", title: "La sonate de Madame Cosquer", place: "varnese", ambiance: "nuit",
      text: [
        "Elle dit à Hélène de s'habiller. Tout de suite. Une robe, un manteau, des souliers, rien d'autre. Hélène la regarde comme si elle proposait de sauter par la fenêtre. Puis, lentement, elle se lève. Elle s'habille. Ses mains tremblent sur les agrafes ; Victorine les agrafe pour elle. Elles descendent l'escalier ensemble. Monsieur Cosquer est au pied, dans le vestibule. Il voit sa femme en manteau. Il comprend.",
        "Il ne crie pas. Il dit seulement, très doucement : « Hélène. » Juste son nom. Hélène s'arrête sur la dernière marche. Victorine sent le bras qu'elle tient se raidir, puis mollir, puis se raidir encore. Une seconde. Deux. Victorine dit, sans quitter le mari des yeux, que Madame Cosquer a besoin de soins qu'on ne peut donner que chez la médecin, et qu'elle y passera la nuit, et que Monsieur pourra venir prendre de ses nouvelles demain, à midi, en présence de l'abbé Morisseau. Elle ouvre la porte. Elles sortent.",
        "Hélène dort dans le lit de Victorine. Victorine veille dans le fauteuil du cabinet, avec Monsieur Prosper, le squelette, qui la regarde de ses orbites creuses. Au matin, Hélène se réveille et pleure, et dit qu'elle doit rentrer, que ce n'est pas possible, que tout Varnèse va savoir, que son mari l'aime. Puis elle dit qu'elle a une sœur, à Morlenc, qui tient une mercerie, et qui l'a toujours détesté. Elle le dit comme on avoue un péché. Victorine dit qu'elle va à Morlenc dans quelques jours. Qu'il y a de la place dans la voiture.",
        "Elle ne sait pas si Hélène montera dans cette voiture. Elle sait qu'elle a ouvert une porte, une nuit, et qu'une femme l'a franchie une fois. Elle a appris, à Varnèse, que la deuxième fois est la plus difficile, et que la plupart ne la franchissent pas.",
      ],
      choices: [{ label: "Rentrer à la maison, avec Hélène", fx: { quest: "UD" }, back: "A1v_soir" }] },
    UD_certificat: { act: "I", title: "La sonate de Madame Cosquer", place: "varnese", ambiance: "nuit",
      text: [
        "Elle sort de sa sacoche une feuille de papier, son encrier de voyage, sa plume. Elle écrit, sur la table de toilette, à la lueur de la chandelle, en latin pour les mots du métier, en clair pour le reste : la date, l'heure, le nom, les marques, leur nombre, leur forme, leur couleur, leur disposition, l'avis du médecin soussigné sur la main qui les a faites. Elle décrit aussi les marques du bras, une par une, avec leur âge probable. Elle signe. Elle sèche l'encre à la poudre. Elle plie la feuille en quatre.",
        "Elle la met dans la main d'Hélène et lui referme les doigts dessus. Elle lui dit qu'elle n'a rien à en faire, ce soir. Qu'elle peut la cacher, la coudre dans un ourlet, la brûler, ou la garder vingt ans. Mais qu'avec cette feuille, le jour où elle voudra partir, ou se plaindre, ou divorcer, elle aura un témoin qui ne se laissera pas intimider, et qui ne sera pas là pour flancher. Elle dit : « Moi, je pars bientôt. Le papier reste. »",
        "Hélène regarde la feuille pliée, longtemps. Puis elle la glisse dans la doublure de son châle. Elle dit merci, d'une voix qu'on n'entend presque pas. En bas, dans le vestibule, Monsieur Cosquer remercie la médecin de s'être dérangée, et lui demande ce qu'elle a trouvé. Victorine dit : une commotion légère, du repos, une tisane. Il paie, généreusement. Il lui serre la main. Elle sent sa main droite dans la sienne, sèche, ferme, chaude. Elle la lâche.",
        "En rentrant, elle se dit qu'elle a donné une arme à une femme qui ne s'en servira peut-être jamais, et qu'elle l'a laissée seule avec elle dans la maison. Elle se dit qu'on ne peut pas sauver les gens à leur place, mais qu'on peut leur laisser un papier. Elle trouve ça peu. Elle trouve ça exact.",
      ],
      choices: [{ label: "Rentrer à la maison, par la rue du port", fx: { quest: "UD" }, back: "A1v_soir" }] },
  },
  extras: {
    people: {
      helene: { name: "Hélène Cosquer", aka: ["la femme du commis du port"], f: true, qui: "Épouse du commis principal du port de Varnèse, pianiste du jeudi." },
    },
    quests: [
      { id: "UD", act: "I", kind: "annexe", title: "La sonate de Madame Cosquer", start: "UD_escalier", doit: "kreutzer", echo: ["ud:mari", "ud:fuite", "ud:certificat"] },
    ],
  },
};
