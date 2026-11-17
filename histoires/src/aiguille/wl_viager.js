// L'Île Folle-Aiguille · side story « Le compte de la mère Le Hir » (owes its question to Le Petit Fût: who kills an old
// woman who drinks herself to death on someone else's bill?). Act I, at the Fanal: last spring, Mathelin Quiniou, grain
// merchant at Varnèse, bought the farm of old mother Le Hir in life annuity; he pays her a rent until she dies. Since
// then, he has opened an account for her at the Fanal: everything she drinks, he pays, and he asks the child to pour
// generously. The child waters her brandy (wl:eau), tells her what Quiniou is doing (wl:dit), or keeps pouring
// (wl:sert). Wired in A1_jours.
module.exports = {
  passages: {
    WL_compte: { act: "I", title: "Le compte de la mère Le Hir", place: "fanal_salle", ambiance: "village",
      text: [
        "Elle arrive chaque soir à la même heure, au moment où le Gabier commence à parler, et elle s'assied à la même place, au bout du banc, près du feu, avec son châle noir, sa coiffe de veuve, sa canne de houx et ses petits yeux vifs de pie qui ne perdent rien. La mère Le Hir a soixante-douze ans. Elle a enterré deux maris et trois fils, et elle a gardé de tout cela une ferme à la sortie de la Pointe, une vache, et un goût pour l'eau-de-vie de cidre qu'elle appelle « mon remède ».",
        "Depuis le printemps, elle n'a plus de ferme. Elle l'a vendue en viager à Mathelin Quiniou, le marchand de grains de Varnèse, un homme gras, rose, jovial, qui serre toutes les mains avec les deux siennes. Il lui verse une rente, tous les trimestres, jusqu'à sa mort. Après quoi, la ferme est à lui. Tout le monde à la Pointe a trouvé que c'était une bonne affaire pour la vieille ; Quiniou avait l'air d'avoir payé cher. Il avait l'air content quand même.",
        "Et depuis le printemps, chaque soir, elle a un compte au Fanal. C'est Quiniou qui l'a ouvert. Tout ce qu'elle boit, il le paie, à la fin du mois, rubis sur l'ongle, et il a dit à ton père, en lui serrant la main des deux siennes : « Qu'elle ne manque de rien, la pauvre vieille. Ce n'est pas tous les jours qu'on peut faire plaisir. Et toi, l'enfant, quand tu lui sers, sers large. Je n'aime pas les petites mesures. »",
      ],
      choices: [{ label: "Lui servir son remède", to: "WL_verre" }] },
    WL_verre: { act: "I", title: "Le compte de la mère Le Hir", place: "fanal_salle", ambiance: "nuit",
      text: [
        "Elle boit. Au début, au printemps, dit Zélie, elle prenait deux petits verres, le soir, et rentrait à pied, droite comme un cierge. À présent, tu lui en sers six, sept, huit. Sa main tremble quand elle tend le verre. Elle rit trop fort aux histoires du Gabier. Elle a les joues marbrées de petites veines violettes, le nez rouge, le blanc des yeux jaune comme du vieux suif. Elle tousse. Elle oublie sa canne. Un soir, en rentrant, elle est tombée dans le fossé du chemin creux, et le valet des Guéguen l'a ramassée à l'aube, couverte de givre, en train de chanter.",
        "Quiniou passe, une ou deux fois par semaine, en voisin. Il s'assied à côté d'elle. Il lui demande comment va la santé, avec une sollicitude touchante. Il commande lui-même une autre tournée. Il trinque avec elle, il la fait rire, il lui raconte les foires de Varnèse. Il boit peu. Il la regarde boire, avec ses petits yeux bleus dans sa grosse figure rose, comme un fermier regarde monter le blé.",
        "Un soir, il reste après qu'elle est partie, et il compte sur ses doigts, à voix basse, devant son verre de cidre, en croyant que personne n'écoute. Tu l'entends dire : « Une rente par trimestre… Le printemps, l'été… Avant les gelées. Au pire, à la Chandeleur. » Puis il voit que tu le regardes, et il te fait un grand sourire, et il te glisse une pièce dans la main, en te disant que tu es un{e} brave enfant, et de bien servir la mère Le Hir.",
        "Ton père, au comptoir, essuie les chopes. Il a tout entendu. Il ne dit rien. Il te regarde, simplement, comme on regarde quelqu'un à qui l'on va laisser une chose à porter.",
      ],
      choices: [
        { label: "Couper d'eau, en cachette, le remède de la mère Le Hir", fx: { flag: "wl:eau" }, to: "WL_eau" },
        { label: "Aller lui dire, à elle, ce que compte Quiniou", fx: { flag: "wl:dit" }, to: "WL_dit" },
        { label: "Garder la pièce, et servir large, comme on te l'a demandé", fx: { flag: "wl:sert" }, to: "WL_sert" },
      ] },
    WL_eau: { act: "I", title: "Le compte de la mère Le Hir", place: "fanal_salle", ambiance: "village",
      text: [
        "À partir du lendemain, tu coupes. Un tiers d'eau, puis la moitié, puis plus. Tu la verses de la cruche de la cuisine, à l'abri de la porte, en tremblant chaque fois que Zélie passe. La mère Le Hir boit. Elle fait la grimace, le troisième soir, et dit que l'eau-de-vie du Fanal n'est plus ce qu'elle était, que ton père se fait voler par son bouilleur. Elle boit quand même. Elle rentre droite. Ses joues reprennent une couleur de pomme.",
        "Quiniou paie le prix plein, sans rien remarquer. La semaine suivante, il trouve que la vieille a bonne mine. Il le dit, avec un sourire un peu crispé. Il commande des tournées plus nombreuses. Tu coupes davantage. À la fin, la mère Le Hir boit chaque soir huit verres d'une eau de source légèrement parfumée, qu'elle déclare infecte, et dont elle redemande.",
        "Un soir, ton père s'approche de la cruche de la cuisine, au moment où tu y remplis le verre. Il te regarde faire. Tu t'arrêtes, pris{e} sur le fait. Il prend la cruche de tes mains, sans un mot, et il finit de remplir le verre lui-même, d'une main sûre, avec exactement la même dose que toi. Puis il te rend le verre, et il retourne à son comptoir. Il ne t'en parlera jamais. Il fera ça, désormais, quand tu ne seras pas là.",
      ],
      choices: [{ label: "Reprendre le service, dans la salle commune", fx: { quest: "WL" }, back: "A1_jours" }] },
    WL_dit: { act: "I", title: "Le compte de la mère Le Hir", place: "fanal_salle", ambiance: "nuit",
      text: [
        "Tu la rattrapes sur le chemin creux, à la sortie de la Pointe, une lanterne à la main, et tu marches à côté d'elle, et tu lui dis tout, en bafouillant : Quiniou, la rente, les doigts, les gelées, la Chandeleur. Elle t'écoute en s'appuyant sur sa canne, la tête penchée, avec ses yeux de pie. Quand tu as fini, elle rit. Un vrai rire, aigu, joyeux, qui fait s'envoler une chouette de la haie.",
        "« Mais je le sais, petit{e} innocent{e}, dit-elle. Je le sais depuis le printemps. Tu crois que je suis bête ? J'ai enterré deux maris. Le premier m'a battue trente ans. Le deuxième m'a ennuyée vingt. Mes trois fils sont au fond de la mer, et la vache me regarde comme si c'était ma faute. » Elle reprend sa marche. « Il me paie l'eau-de-vie jusqu'à ce que j'en crève. Eh bien, j'en ai connu de pires, et c'est la seule qu'on m'ait jamais offerte. Il croit qu'il me vole ma ferme. Moi, je crois qu'il me paie un enterrement de reine. On verra lequel des deux a fait la meilleure affaire. »",
        "Elle s'arrête devant sa porte. Elle te tapote la joue, de sa main sèche et froide. « C'est gentil, de t'inquiéter. Personne ne s'inquiète plus pour moi depuis longtemps. Ça m'a fait plaisir. Ça ne changera rien. » Le lendemain soir, elle est à sa place, au bout du banc, et elle commande son remède, et elle te fait un clin d'œil. Tu la sers. Tu ne sais plus très bien qui tu sers.",
      ],
      choices: [{ label: "Reprendre le service, dans la salle commune", fx: { quest: "WL" }, back: "A1_jours" }] },
    WL_sert: { act: "I", title: "Le compte de la mère Le Hir", place: "fanal_salle", ambiance: "nuit",
      text: [
        "Tu gardes la pièce. Tu sers large. Tu te dis que ce n'est pas ton affaire, qu'elle est grande, qu'elle est vieille, qu'elle aime ça, que Quiniou paie, que ton père encaisse, et que tu n'es que l'enfant du Fanal, qui porte les verres. Tu te le dis souvent, ces soirs-là. On ne se répète pas si souvent une chose qu'on croit.",
        "La mère Le Hir boit. Elle rit aux histoires du Gabier. Elle chante, un soir, debout sur le banc, une chanson de son jeune temps, d'une voix cassée, et toute la salle reprend le refrain en tapant sur les tables, et c'est la plus belle soirée de l'automne. Elle rentre seule, après minuit, par le chemin creux, sans lanterne, en chantant encore.",
        "Le valet des Guéguen la trouve à l'aube, dans le fossé, sous le givre. Elle a l'air de dormir, les mains croisées sur sa canne de houx, avec un sourire. Quiniou suit l'enterrement en habit neuf, et il pleure, et il paie les cierges. Le lendemain, il prend possession de la ferme. Le jour d'après, il vient au Fanal régler le compte, rubis sur l'ongle. Il te regarde en payant. Il ne te donne pas de pièce, cette fois. Tu n'en avais pas demandé.",
      ],
      choices: [{ label: "Reprendre le service, dans la salle commune", fx: { quest: "WL" }, back: "A1_jours" }] },
  },
  extras: {
    people: {
      lehir: { name: "La mère Le Hir", aka: ["la vieille au remède"], f: true, qui: "Vieille veuve de la Pointe-aux-Corneilles, qui a vendu sa ferme en viager." },
    },
    quests: [
      { id: "WL", act: "I", kind: "annexe", title: "Le compte de la mère Le Hir", start: "WL_compte", doit: "petitfut", echo: ["wl:eau", "wl:dit", "wl:sert"] },
    ],
  },
};
