// Act IV · two more corners of Sauvelune a year later, off IV_sv_place: the temple of the Saints-Gardiens and its
// register (where a page was torn out in Act I), and the little cemetery behind it, whose stones fade when the village
// stayed forgotten. Same three states as acte4_sauvelune.js. The child leads ("tu").
var A = { act: "IV", noLead: true };
function P(o) { return Object.assign({}, A, o); }
var RENDU = { has: "nord:rendu=sauvelune" };
module.exports = {
  // ---------------------------------------------------------------- Le temple
  IV_sv_temple: P({ title: "Le temple des Saints-Gardiens", place: "sauvelune",
    text: [
      { if: RENDU, text: "Le temple est ouvert. Le Père Anselme balaie la nef, comme tous les samedis, en poussant la poussière vers la porte. Il te voit. Il pose son balai. « Te voilà, dit-il. Je savais bien qu'il manquait quelqu'un aux vêpres. »" },
      { if: { not: RENDU }, text: "La porte du temple n'est pas fermée à clé. Personne n'a pensé à la fermer. Dedans, l'herbe a poussé entre les dalles de la nef, et une hirondelle a fait son nid au-dessus de l'autel. Sur le lutrin, le registre du village est ouvert, comme le Père Anselme l'a laissé le soir de la neige." },
      "Le registre. Tu t'approches. Il est ouvert à la page des naissances. La page de l'année de la grêle manque, arrachée net, au ras de la couture.",
    ],
    choices: [
      { label: "Remettre la page arrachée", hide: { not: { item: "registre_page" } }, to: "IV_sv_temple_page" },
      { label: "Lire le registre", to: "IV_sv_temple_lire" },
      { back: "IV_sv_place" },
    ] }),
  IV_sv_temple_page: P({ title: "La page", place: "sauvelune",
    text: [
      "Tu sors la page de ton sac. Elle est pliée en quatre, usée aux plis, tachée de neige fondue, de sueur, d'une année entière de route. Tu la défroisses sur le lutrin. Tu l'appliques contre la couture. Elle s'y ajuste exactement, comme une clé dans sa serrure.",
      { if: RENDU, text: "Le Père Anselme te regarde faire. Il prend du fil, une aiguille, un dé. Il recoud la page, lui-même, à petits points, sans rien demander. Quand il a fini, il lit, à haute voix, la colonne : *Corentin Ferrand. Mathilde Aubry. Pim, fils de Joris et d'Agathe.* Il s'arrête. Il remonte d'une ligne, celle d'une encre plus vieille : *un enfant trouvé, sans nom, confié au moulin.* Il te regarde. « Il y a de la place dans la marge », dit-il. Il te tend la plume." },
      { if: { not: RENDU }, text: "Il n'y a personne pour la recoudre. Tu trouves, dans la sacristie, une aiguille et le fil des nappes d'autel. Tu recouds la page toi-même, maladroitement, à grands points. Puis tu lis la colonne à voix haute, pour l'hirondelle. *Corentin Ferrand. Mathilde Aubry. Pim, fils de Joris et d'Agathe.* Et la ligne d'au-dessus, d'une encre plus vieille : *un enfant trouvé, sans nom, confié au moulin.* À côté, la marge est blanche." },
    ],
    choices: [
      { label: "Écrire ton nom dans la marge", fx: { drop: "registre_page", flag: "iv:registre=nom", ep: ["perso", 1200] }, to: "IV_sv_temple_nom" },
      { label: "Laisser la marge blanche", fx: { drop: "registre_page", flag: "iv:registre=vide", ep: ["perso", 800] }, to: "IV_sv_temple_vide" },
    ] }),
  IV_sv_temple_nom: P({ title: "Dans la marge", place: "sauvelune",
    text: [
      "Tu trempes la plume. Tu écris, à côté de *sans nom*. Ton nom de Sauvelune. Puis tu t'arrêtes. Puis tu écris l'autre, à la suite, le nom que ta mère chantait, celui de là-bas, en boucles, sans majuscule. Les deux tiennent dans la marge. Tout juste.",
      "L'encre sèche. Elle ne pâlit pas. Tu restes à la regarder un long moment, au cas où. Elle ne pâlit pas.",
    ],
    choices: [{ back: "IV_sv_place" }] }),
  IV_sv_temple_vide: P({ title: "La marge blanche", place: "sauvelune",
    text: [
      "Tu reposes la plume. La marge reste blanche, à côté de *sans nom*, un petit vide de la largeur d'un nom. Tu ne sais pas lequel y mettre. Tu n'as pas encore décidé qui tu es. Le registre peut attendre. Il a attendu vingt ans.",
      { if: RENDU, text: "Le Père Anselme referme le registre, doucement. « Tu reviendras quand tu sauras, dit-il. L'encre ne bouge pas. Moi non plus. »" },
    ],
    choices: [{ back: "IV_sv_place" }] }),
  IV_sv_temple_lire: P({ takes: "night", title: "Les naissances", place: "sauvelune",
    text: [
      "Tu tournes les pages. Les naissances, les mariages, les morts, d'une écriture penchée, à l'encre brune, sur deux cents ans. Tu cherches les noms que tu connais. Joris, né l'année du grand gel. Agathe, venue de Pont-de-Saule pour se marier. Tess, fille du forgeron. Mathurin, qui avait déjà la barbe blanche quand tu es né.",
      { if: RENDU, text: "Les noms sont noirs, nets, comme écrits d'hier." },
      { if: { not: RENDU }, text: "Les noms sont pâles. Certains sont presque partis, comme une buée sur une vitre. Tu passes le doigt dessus. Ça ne les ramène pas. Mais tu les lis tous, à voix haute, un par un, jusqu'au dernier, et quand tu relèves la tête, il fait nuit." },
    ],
    choices: [{ fx: { ep: ["perso", 400] }, back: "IV_sv_place" }] }),

  IV_sv_linteaux: P({ title: "Les linteaux", place: "sauvelune",
    text: [
      "Les linteaux de la place sont nus. Le bois gris, lavé, sans une trace d'ocre. Pas une lettre. La neige les a bus, l'an dernier, et rien n'a repoussé. Les maisons n'ont plus de nom au-dessus de la porte, comme des gens qui ont perdu leur chapeau.",
      { if: RENDU, text: "Les gens sont revenus, pourtant. Ils passent sous les poutres sans lever les yeux. Ils savent où ils habitent. Ils n'ont pas besoin qu'on le leur écrive. Mais le vieux Gervais est mort cet hiver, dans son lit, et personne d'autre ne sait tracer les lettres sans modèle. Sur le perron de la maison commune, quelqu'un a posé son pot d'ocre, sec, et son pinceau en poil de blaireau." },
      { if: { not: RENDU }, text: "Il n'y a personne pour s'en plaindre. Sur le perron de la maison commune, tu trouves le pot d'ocre de Gervais, sec, avec son pinceau. Il y a de l'eau à la fontaine." },
    ],
    choices: [
      { label: "Délayer l'ocre, et repeindre les noms, de mémoire", fx: { flag: "iv:linteaux", ep: ["perso", 800] }, to: "IV_sv_linteaux_peints" },
      { label: "Laisser les poutres nues", to: "IV_sv_place" },
    ] }),
  IV_sv_linteaux_peints: P({ title: "L'ocre, encore", place: "sauvelune",
    text: [
      "Tu délayes l'ocre dans l'eau de la fontaine. Tu prends l'échelle, derrière la maison commune, là où elle a toujours été. *Aubry. Ferrand. Roux-Lavallée.* Le trait d'union te coûte, comme il coûtait à Gervais. Le *D* des Ferrand penche. Tu le laisses pencher.",
      { if: RENDU, text: "À la troisième maison, il y a des gens au pied de l'échelle. À la cinquième, une petite fille tient le pot. Elle s'appelle Mathilde Aubry, elle a sept ans, et elle te regarde peindre son nom avec une gravité de notaire. Quand tu as fini la place, il fait presque nuit. On t'applaudit, un peu, sans savoir pourquoi." },
      { if: { not: RENDU }, text: "Tu peins toutes les maisons. Celles dont tu te souviens. Pour deux d'entre elles, tu ne sais plus ; tu laisses le bois nu, plutôt que d'inventer. Personne ne lira ces noms. Ce n'est pas pour qu'on les lise." },
      "Au moulin, tu n'hésites pas, cette fois. Tu repeins ce que tu avais écrit, l'été d'avant le blanc, lettre pour lettre, et la petite roue en dessous.",
    ],
    choices: [{ back: "IV_sv_place" }] }),

  // ---------------------------------------------------------------- La pierre plate
  IV_sv_pierre: P({ title: "La pierre plate", place: "sauvelune",
    text: [
      "Au-dessus du bief, à dix minutes du moulin, la grosse pierre plate. Ta pierre. Celle où tu montais quand Joris criait, d'où l'on voit toute la vallée, la Sauve, le pont de Pont-de-Saule tout petit, et le col tout là-haut. Personne ne venait jamais t'y chercher.",
      "Tu t'assieds. La pierre est tiède. Elle l'est toujours, même en novembre. Tu ne t'étais jamais demandé pourquoi.",
      { if: { has: "iii:clochette" }, text: "Et là, quand tu t'assieds, quelque part très loin, très haut, dans une ville que tu es seul à connaître, une toute petite cloche sonne. Un son clair, un peu aigu. Tu l'entends. Tu en es sûr. Personne d'autre ne l'entendrait." },
    ],
    choices: [
      { label: "Rester jusqu'au soir", fx: { ep: ["perso", 400], pv: 3 }, to: "IV_sv_pierre_soir" },
      { back: "IV_sv_place" },
    ] }),
  IV_sv_pierre_soir: P({ takes: "evening", title: "Le soir sur la vallée", place: "sauvelune",
    text: [
      "Tu restes. Le soleil descend derrière les crêtes, la vallée devient bleue, puis grise.",
      { if: RENDU, text: "Les cheminées fument, en bas. On t'appelle, au moulin. La voix d'Agathe, qui porte jusqu'ici, comme avant. Pour la soupe. Tu ne réponds pas tout de suite. Tu la laisses appeler deux fois, pour le plaisir de l'entendre appeler ton nom." },
      { if: { has: "ame:moulin" }, text: "Une seule cheminée fume, en bas : celle du moulin. Tu regardes la vallée devenir noire. Tu redescends à l'heure de la soupe, par habitude, et tu t'aperçois en route que tu siffles." },
      { if: { not: { any: [RENDU, { has: "ame:moulin" }] } }, text: "En bas, pas une cheminée, sinon le four. Tu regardes la vallée devenir noire. Personne ne t'appelle. Tu redescends quand même, à l'heure de la soupe, par habitude, et tu t'aperçois en route que tu siffles." },
    ],
    choices: [{ back: "IV_sv_place" }] }),

  // ---------------------------------------------------------------- Le cimetière
  IV_sv_cimetiere: P({ title: "Le petit cimetière", place: "sauvelune",
    text: [
      "Derrière le temple, un muret, une grille rouillée, trente tombes sous les noyers. Des croix de bois pour les pauvres, des pierres pour les autres. Tu y venais, enfant, voler des noix, et Mathurin te courait après avec son bâton en disant que les morts n'aimaient pas les voleurs.",
      { if: RENDU, text: "Les tombes sont fleuries. Quelqu'un a désherbé, cette semaine. Sur la plus récente, une croix neuve : *Hubert Aubry. Mort de vieillesse, l'automne dernier, dans son lit.* Son nom s'était effacé du registre sous tes yeux, le soir de la neige. Il est mort en le sachant de nouveau. Tu restes là un moment, à te dire que c'est déjà beaucoup." },
      { if: { not: RENDU }, text: "Les noms gravés sur les pierres s'effacent. Pas usés par la pluie : effacés, lisses, comme si personne ne les avait jamais taillés. Sur les plus vieilles, il ne reste rien. Sur les plus récentes, une lettre ou deux. La tombe des parents de Joris n'a plus qu'un *J*." },
    ],
    choices: [
      { label: "Regraver les noms au couteau, de mémoire", hide: RENDU, test: { dom: "savoir", label: "Les noms des morts", help: [{ if: { present: "gaspard" }, v: 15 }, { if: { has: "ame:moulin" }, v: 20 }, { if: { present: "hylas" }, v: 10 }] },
        win: { fx: { flag: "iv:cimetiere", ep: ["perso", 1000] }, to: "IV_sv_cimetiere_ok" }, lose: { to: "IV_sv_cimetiere_rate" } },
      { label: "Ramasser des noix, comme avant", fx: { food: 1 }, to: "IV_sv_cimetiere_noix" },
    ] }),
  IV_sv_cimetiere_ok: P({ takes: "morning", title: "Au couteau", place: "sauvelune",
    text: [
      "Tu commences par la tombe des parents de Joris. *Jehan et Perrine.* Tu les sais parce que Joris les disait au bénédicité, tous les dimanches, après les saints. Puis les autres. Tu ne les sais pas tous. Ceux que tu ne sais pas, tu les demandes.",
      { if: { has: "ame:moulin" }, text: "Agathe vient avec toi, et Joris, et Pim, qui tient la lanterne. Agathe dit les noms. Elle les sait tous. Elle a enterré la moitié du village avec le Père Anselme, en chantant. Joris grave les plus durs, ceux de la pierre noire." },
      { if: { not: { has: "ame:moulin" } }, text: "Tu les demandes à ceux qui sont avec toi, qui ne les savent pas. Alors tu les inventes, un peu, à partir d'une lettre restée, d'une date, de la taille de la tombe. Tu demandes pardon aux morts, à chaque fois, à voix basse. Mathurin aurait trouvé ça très bien. Il disait que les morts ne sont pas regardants." },
      "Au matin, il y a trente noms sur trente tombes. Ils tiennent.",
    ],
    choices: [{ back: "IV_sv_place" }] }),
  IV_sv_cimetiere_rate: P({ title: "La pierre", place: "sauvelune",
    text: ["Tu graves *J*, puis tu t'arrêtes. Tu ne sais pas la suite. Tu ne l'as jamais su. Joris disait les noms de ses parents au bénédicité, et tu ne l'écoutais pas, tu regardais la soupe. Tu restes devant la pierre avec ton couteau, et la honte, et le *J* tout seul."],
    choices: [{ back: "IV_sv_place" }] }),
  IV_sv_cimetiere_noix: P({ title: "Les noix", place: "sauvelune",
    text: ["Tu ramasses des noix sous les noyers. Elles sont bonnes, cette année. Tu en remplis tes poches. Personne ne te court après. Tu attends quand même un peu, au cas où. Personne."],
    choices: [{ back: "IV_sv_place" }] }),
};
