// L'Île Folle-Aiguille · side story « Le directeur de conscience » (owes its question to Tartuffe: how do you unmask a
// hypocrite to the one who loves him?). Madame Desroches, widow of a shipowner, sixty, is wasting away. Her daughter
// calls Victorine behind the back of the abbé Vauquelin, the widow's director, who has her drink a « water of Lourmes »
// against the sin of gluttony and has had her sign over, one by one, three ships to a pious foundation that he runs.
// The water is a purge. Victorine sets a trap to make him show himself (zv:piege), tells the widow plainly (zv:dit), or
// treats the body and leaves the soul to its director (zv:laisse). Wired in A2v_jours.
module.exports = {
  passages: {
    ZV_fille: { act: "II", title: "Le directeur de conscience", place: "haute_ville", ambiance: "ville",
      fx: { meet: ["desroches", "vauquelin"] },
      text: [
        "Mademoiselle Desroches attend Victorine dans l'escalier du Cormoran, à sept heures du matin, une voilette baissée sur un visage de trente ans qui a pleuré toute la nuit. Elle parle vite, bas, en regardant derrière elle, comme une conspiratrice de comédie, et il y a dans cette peur quelque chose de si sincère que Victorine cesse de sourire au bout de deux phrases.",
        "Sa mère se meurt. Lentement. Depuis un an. Elle ne mange plus, ou presque : un bouillon, une pomme, parce que la gourmandise est un péché capital et que son directeur de conscience, l'abbé Vauquelin, lui a prescrit le jeûne pour son salut. Elle boit, trois fois par jour, une eau miraculeuse, l'eau de Lourmes, qu'il lui procure lui-même, d'une source bénie qu'il est seul à connaître. Elle maigrit. Elle a des coliques. Elle ne quitte plus son lit. Elle est heureuse. Elle dit qu'elle n'a jamais été si près de Dieu.",
        "« Et elle signe, dit la fille, d'une voix blanche. Tous les mois. Les navires de mon père. L'*Espérance*, le *Saint-Yves*, la *Fidèle*. À l'Œuvre des Âmes du Purgatoire, que l'abbé dirige. Il reste la maison, et le *Belle-Morlenquaise*. Le médecin de la famille ne veut rien voir : l'abbé l'a confessé. Je n'ai personne d'autre. On dit que vous ne devez rien à personne, à Morlenc. »",
      ],
      choices: [{ label: "Monter chez Madame Desroches", to: "ZV_chambre" }] },
    ZV_chambre: { act: "II", title: "Le directeur de conscience", place: "haute_ville", ambiance: "ville",
      text: [
        "La chambre est une chapelle. Un prie-Dieu, trois crucifix, des images saintes jusqu'au plafond, des cierges, une odeur de cire, de lavande et de quelque chose de plus aigre, qui vient du lit. Madame Desroches y repose, menue comme une enfant, la peau jaune et transparente, les yeux immenses et brillants, avec un chapelet entre ses doigts qui ne sont plus que des os. Elle sourit à Victorine avec une douceur infinie.",
        "À son chevet, assis dans le seul fauteuil, l'abbé Vauquelin. Un homme de quarante ans, rose, grassouillet, aux mains blanches et soignées, aux lèvres humides, avec une voix suave qui semble toujours sortir d'un confessionnal. Il se lève à l'entrée de Victorine, la salue avec une politesse parfaite, et se rassied. Il ne quitte pas la chambre. Il a l'air de quelqu'un qui ne quitte jamais la chambre.",
        "Victorine examine la malade sous ses yeux. Le pouls est faible, rapide. Le ventre est creux, douloureux. La langue, sèche. Sur la table de nuit, un flacon d'eau de Lourmes, à demi plein. Victorine le débouche, le sent, en verse une goutte sur son doigt, la goûte. Elle reconnaît tout de suite : de l'eau, du sel amer, et une pointe de séné. Une purge. Une purge de cheval, trois fois par jour, depuis un an, sur une femme qui ne mange plus.",
        "Elle lève les yeux. L'abbé la regarde. Il a vu qu'elle a compris. Il sourit, de son sourire de confessionnal. « Une eau très pure, docteur. Elle lave le corps de ses humeurs, et l'âme de ses péchés. Madame Desroches n'a jamais été si sereine. N'est-ce pas, ma fille ? » Et Madame Desroches, sur son oreiller, hoche la tête, avec un regard d'adoration.",
      ],
      choices: [
        { label: "Lui tendre un piège, devant la malade, pour qu'il se montre", fx: { flag: "zv:piege" }, to: "ZV_piege" },
        { label: "Dire à Madame Desroches ce qu'il y a dans le flacon", fx: { flag: "zv:dit" }, to: "ZV_dit" },
        { label: "Soigner le corps en secret, avec la fille, et laisser l'âme à son directeur", fx: { flag: "zv:laisse" }, to: "ZV_laisse" },
      ] },
    ZV_piege: { act: "II", title: "Le directeur de conscience", place: "haute_ville", ambiance: "ville",
      text: [
        "Victorine se retourne vers l'abbé, avec un sourire aussi suave que le sien. Elle dit qu'elle est émerveillée. Qu'elle a entendu parler de l'Œuvre des Âmes du Purgatoire, et qu'elle voudrait, elle aussi, faire un don. Qu'elle n'a pas de navires, hélas. Mais qu'elle a une maison à Varnèse, et des créances, et un petit héritage de son mari, et que Madame Desroches, si elle guérissait, serait la plus belle preuve des vertus de l'eau de Lourmes ; que la guérison d'une telle sainte vaudrait, pour l'Œuvre, plus que trois navires.",
        "L'abbé l'écoute. Il calcule. On le voit calculer, comme on voit un chat suivre une mouche. Puis il dit, d'une voix un peu trop rapide, que la guérison, c'est l'affaire de Dieu, et que les dons, c'est l'affaire de l'Œuvre, et qu'il faudrait mieux ne pas mêler les deux, et que Madame Desroches, d'ailleurs, est trop près de Dieu pour qu'on la retienne, et qu'elle a fait ses dispositions, n'est-ce pas, pour la maison et le *Belle-Morlenquaise*, il ne manque que la signature…",
        "Il s'arrête. Trop tard. Il l'a dit devant le lit. Madame Desroches le regarde. Ses yeux immenses ont changé. Elle ne dit rien pendant un long moment. Puis elle demande, très doucement, à sa fille, de lui apporter un bouillon. Un vrai. Avec du pain dedans. L'abbé Vauquelin se lève, salue, et sort, avec beaucoup de dignité, sans oublier le flacon. Sur le palier, il croise Victorine. Il lui dit, à voix basse, toujours suave : « Vous avez une âme bien noire, docteur. Je prierai pour elle. » Elle lui répond qu'elle compte sur lui.",
      ],
      choices: [{ label: "Descendre au Cormoran", fx: { quest: "ZV" }, back: "A2v_jours" }] },
    ZV_dit: { act: "II", title: "Le directeur de conscience", place: "haute_ville", ambiance: "ville",
      text: [
        "Elle le dit. Simplement, au chevet, en tenant la main d'os. De l'eau, du sel amer, du séné. Une purge, trois fois par jour, depuis un an. Qu'elle meurt de faim et de colique, et que Dieu n'y est pour rien. Qu'elle a encore, si elle mange, si elle cesse l'eau, dix ans à vivre, peut-être quinze.",
        "Madame Desroches l'écoute avec une bonté patiente, comme on écoute un enfant qui raconte un cauchemar. Puis elle tourne la tête vers l'abbé Vauquelin, qui n'a pas bougé de son fauteuil, et qui la regarde avec une tristesse infinie. « Mon père, dit-elle. Vous m'aviez prévenue. Vous m'aviez dit que le démon enverrait quelqu'un, à la fin, pour me détourner. Une femme. Avec des raisons. » L'abbé baisse les yeux, et soupire, et fait le signe de croix.",
        "On raccompagne Victorine à la porte. La fille pleure dans l'escalier. Victorine lui laisse, dans le creux de la main, une adresse à Varnèse, une liste de bouillons, et une phrase : « Si elle change d'avis, je reviendrai. Les saints changent d'avis, quelquefois, quand ils ont faim. » Elle descend la rue. Elle sait qu'elle a dit la vérité, et qu'elle l'a dite à la seule personne au monde qui avait décidé, avec bonheur, de ne pas l'entendre.",
      ],
      choices: [{ label: "Descendre au Cormoran", fx: { quest: "ZV" }, back: "A2v_jours" }] },
    ZV_laisse: { act: "II", title: "Le directeur de conscience", place: "haute_ville", ambiance: "ville",
      text: [
        "Elle ne dit rien devant l'abbé. Elle prescrit, gravement, un bouillon de poule « pour soutenir l'eau de Lourmes dans son action », et l'abbé, qui ne voit pas le piège, approuve. Sur le palier, elle prend la fille par le bras et lui explique. On videra le flacon chaque nuit, et on le remplira d'eau de source, avec un peu de sucre pour le goût. On épaissira les bouillons, sans le dire. On mettra du jaune d'œuf dans la tisane du soir. On soignera le corps en cachette, comme on fait passer des vivres dans une ville assiégée.",
        "Pendant les huit jours qui lui restent à Morlenc, Victorine passe tous les soirs. Madame Desroches reprend des couleurs. Elle se lève. Elle marche jusqu'à la fenêtre. Elle attribue tout à l'eau de Lourmes, et le dit à l'abbé, qui triomphe, et qui en parle en chaire, le dimanche, comme d'un miracle. On vient de toute la Haute-Ville acheter de l'eau de Lourmes. L'Œuvre des Âmes du Purgatoire s'enrichit de deux maisons de plus.",
        "Le dernier soir, la fille raccompagne Victorine à la porte. Elle dit que sa mère va mieux, et qu'elle a signé, le matin même, la donation du *Belle-Morlenquaise*, pour remercier le Ciel de sa guérison. Elle rit, d'un rire nerveux. Victorine rit aussi. Elle a sauvé une vie, et donné à un fripon le plus beau miracle de sa carrière. Elle se dit que c'est un échange honnête, à Morlenc. Elle n'arrive pas tout à fait à le croire.",
      ],
      choices: [{ label: "Descendre au Cormoran", fx: { quest: "ZV" }, back: "A2v_jours" }] },
  },
  extras: {
    people: {
      desroches: { name: "Madame Desroches", aka: ["la veuve de l'armateur"], f: true, qui: "Veuve d'un armateur de Morlenc, qui se meurt de sainteté dans la Haute-Ville." },
      vauquelin: { name: "L'abbé Vauquelin", aka: ["le directeur de conscience"], qui: "Directeur de conscience de Madame Desroches, et de l'Œuvre des Âmes du Purgatoire." },
    },
    quests: [
      { id: "ZV", act: "II", kind: "annexe", title: "Le directeur de conscience", start: "ZV_fille", doit: "tartuffe", echo: ["zv:piege", "zv:dit", "zv:laisse"] },
    ],
  },
};
