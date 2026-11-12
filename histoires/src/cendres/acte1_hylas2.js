// Act I · more of the black tower for Maître Hylas (blind, "tu"), off HY_tour: the binders' workshop where old Odilon
// has just covered an enormous blank register in black leather, and the kitchens where Mahaut, the cook, remembers the
// boy Mordace was. Plus, in Act IV, two more corners of Pont-de-Saule (the child leads, "tu").
var HY = { place: "pallanche", noLead: true };
function P(o) { return Object.assign({ act: "I" }, HY, o); }
var Q = { act: "IV", noLead: true };
function P4(o) { return Object.assign({}, Q, o); }
module.exports = {
  // ---------------------------------------------------------------- La reliure
  HY_Q_relieur: P({ title: "L'atelier de reliure",
    fx: { questSeen: "HY_Q_relieur" },
    text: [
      "Au deuxième, au fond du couloir, l'atelier de reliure. Tu le trouves à l'odeur : la colle de peau, le cuir mouillé, la cire d'abeille. Et au bruit : le petit coup sec du plioir sur le papier, régulier, qui n'a pas changé depuis que tu es entré dans cette tour, il y a soixante-quatre ans.",
      "« Maître Hylas », dit Odilon, sans s'arrêter de plier. Il est plus vieux que toi. Il a relié tous les registres de la Chancellerie depuis le temps du vieux chancelier. « Vous venez toucher ? Venez toucher. Personne ne vient plus toucher. Les jeunes greffiers ne savent même pas qu'un livre, ça se touche. »",
    ],
    choices: [
      { label: "Toucher ce qui est sur l'établi", to: "HY_Q_relieur_livre" },
      { label: "Lui parler du vieux temps, et repartir", refuse: true, fx: { ep: ["perso", 200] }, to: "HY_tour" },
    ] }),
  HY_Q_relieur_livre: P({ title: "Le cuir noir",
    text: [
      "Il te guide la main. Sur l'établi, un livre. Non : une masse. Tu en fais le tour avec les paumes. Il est plus large que tes deux bras écartés, épais comme une marche d'escalier. La couverture est en cuir, lisse, très fin, froid. Les coins sont de fer. Tu l'ouvres, au hasard. Les pages sont vierges. Tu le sais à la façon dont elles glissent sous tes doigts : aucune encre ne les a encore alourdies.",
      "« Six cents cahiers, dit Odilon, fier. Vélin d'agneau mort-né. Trois mois de travail. Le cuir est teint au noir de fumée, comme il l'a demandé. Pas un titre. Pas une lettre au dos. Il a dit : *Il n'aura pas besoin de titre. Tout le monde saura ce que c'est.* »",
      "« Il », c'est Mordace. Odilon ne dit jamais le nom. Personne ne le dit, dans les ateliers.",
    ],
    choices: [
      { label: "« Combien de noms, dans six cents cahiers ? »", test: { dom: "savoir", label: "Le compte", help: [{ if: { has: "hylas:page" }, v: 10 }, { if: { item: "canne" }, v: 5 }] },
        win: { fx: { flag: "hylas:relieur", ep: ["perso", 900] }, to: "HY_Q_relieur_compte" }, lose: { to: "HY_Q_relieur_fin" } },
      { label: "Refermer le livre", to: "HY_Q_relieur_fin" },
    ] }),
  HY_Q_relieur_compte: P({ title: "Le compte",
    text: [
      "Tu calcules à voix basse, comme on t'a appris quand tu étais jeune clerc, sur les doigts, avec la règle des trente lignes. Six cents cahiers, seize pages, deux colonnes, quarante lignes. Odilon t'écoute compter, et il cesse de plier.",
      "Tu arrives à un nombre. Un peu plus de sept cent mille. Ce n'est pas le nombre des morts du royaume. Ce n'est pas le nombre des nés. C'est, à quelques milliers près, le nombre des vivants d'Esquarre, tel que l'a donné le dernier dénombrement.",
      "« Tous, dit Odilon, très bas. C'est pour les mettre tous. » Il reprend son plioir. Ses mains tremblent un peu. « Moi, je fais les reliures. Je ne lis pas ce qu'on met dedans. Je n'ai jamais lu. » Il le répète deux fois, comme une prière.",
    ],
    choices: [{ fx: { quest: "HY_Q_relieur" }, back: "HY_tour" }] }),
  HY_Q_relieur_fin: P({ title: "Le plioir",
    text: ["Tu refermes le livre. Il fait un bruit sourd, de porte de cave. Odilon te raccompagne jusqu'au seuil de l'atelier, une main sur ton coude. « Revenez toucher, dit-il. Quand il sera plein, il sera lourd, je pense. Très lourd. Il faudra six hommes pour le monter. »"],
    choices: [{ fx: { quest: "HY_Q_relieur" }, back: "HY_tour" }] }),

  // ---------------------------------------------------------------- Les cuisines
  HY_k_cuisines: P({ title: "Les cuisines de la tour",
    text: [
      "Les cuisines, au rez-de-chaussée, derrière le Bureau. La seule pièce chaude de la tour. Mahaut est là, au milieu de ses marmites, qui crie après un marmiton parce que l'oignon brûle. Elle a toujours crié. Elle t'a toujours donné du pain.",
      "« Maître Hylas ! Asseyez-vous. Vous n'avez pas mangé, ça se voit. Personne ne mange, dans cette tour. Ils écrivent, ils écrivent, et ils oublient de manger. » Elle te met un bol dans les mains, de la soupe aux poireaux, et un quignon. Elle s'assied en face de toi. Tu l'entends s'essuyer les mains sur son tablier.",
    ],
    choices: [
      { label: "Lui parler de Mordace", to: "HY_k_cuisines_mordace" },
      { label: "Manger, et la remercier", fx: { pv: 4, ep: ["perso", 200] }, to: "HY_tour" },
    ] }),
  HY_k_cuisines_mordace: P({ title: "Le petit",
    text: [
      "Mahaut se tait. C'est rare. Puis elle rit, un rire de gorge. « Je l'ai connu à onze ans, vous savez. Il est arrivé à la tour avec un baluchon et des souliers trop grands, apprenti copiste, envoyé par le curé de son village. Il pleurait le soir, dans la paneterie, où il croyait que personne ne l'entendait. Je lui donnais des pommes. »",
      "« Il ne pleurait pas pour sa mère. Il pleurait pour sa maison. Une maison avec un figuier, il disait, et un puits, et un chien jaune. Il me la décrivait tous les soirs, pièce par pièce, pour ne pas l'oublier. » Elle soupire. « Et puis un jour, il a arrêté de me la décrire. Il a arrêté de pleurer. Il est monté au troisième, puis au quatrième. Il ne descend plus aux cuisines. »",
      "« Je lui fais monter un plateau, le soir. Il n'y touche pas. Mais je le fais monter quand même. »",
    ],
    choices: [{ label: "Finir ta soupe", fx: { flag: "hylas:mahaut", ep: ["perso", 600], pv: 4 }, to: "HY_tour" }] }),

  // ---------------------------------------------------------------- Acte IV, Pont-de-Saule
  IV_ps_pont: P4({ title: "Les pêcheurs du pont", place: "pontsaule",
    text: [
      "Sur le pont aux sept arches, une rangée d'enfants, les jambes dans le vide, une ligne à la main. Ils ne prennent rien. Ils ne se disputent pas. Ils regardent l'eau.",
      "Un petit, au bout, plus petit que les autres, a une ligne sans hameçon. Tu lui demandes ce qu'il pêche. « Le nom de ma sœur, dit-il, sérieux. Elle l'a donné à la baraque grise, pour la taille. Le clerc a dit qu'il descendait la rivière jusqu'à Pallanche. Alors je le pêche quand il passe. »",
    ],
    choices: [
      { label: "T'asseoir à côté de lui et pêcher aussi", fx: { ep: ["perso", 400], flag: "iv:ps_peche" }, to: "IV_ps_pont_peche" },
      { label: "Lui dire que les noms ne descendent pas la rivière", to: "IV_ps_pont_verite" },
    ] }),
  IV_ps_pont_peche: P4({ title: "Une ligne sans hameçon", place: "pontsaule",
    text: [
      "Tu t'assieds. Il te prête une ligne, sans hameçon aussi. Vous pêchez. L'eau passe sous le pont, verte, lente. Au bout d'une heure, il dit : « Elle s'appelle Margot. Je le dis tous les jours. Comme ça, si elle passe, elle saura que quelqu'un l'appelle. »",
      { if: { has: "iv:pontsaule=libere" }, text: "Le soir même, une fillette remonte la grand-rue en courant, une fiole débouchée à la main, et elle crie un nom. Le sien. Le petit lâche sa ligne. La ligne tombe dans la Sauve. Personne ne va la repêcher." },
      { if: { not: { has: "iv:pontsaule=libere" } }, text: "Tu redis le nom avec lui, une fois, pour qu'il y ait deux voix. Margot. L'eau ne répond pas. Il hoche la tête, satisfait. « Demain, dit-il. Elle passera peut-être demain. »" },
    ],
    choices: [{ back: "IV_ps" }] }),
  IV_ps_pont_verite: P4({ title: "La rivière", place: "pontsaule",
    text: ["Il te regarde comme on regarde un adulte qui ne comprend rien. « Je sais, dit-il. Mais si je ne pêche pas, je fais quoi ? » Il se retourne vers l'eau. Tu n'as pas de réponse. Tu restes un moment derrière lui, puis tu t'en vas."],
    choices: [{ back: "IV_ps" }] }),
};
