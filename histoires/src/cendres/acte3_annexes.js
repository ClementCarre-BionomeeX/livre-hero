// Act III · side places on the white plain, opened from the hub III_plaine: the forgotten soldiers of the Three Years'
// war who still fight at a ford that no longer exists, the lake of reflections, and the burrow where Givre comes from.
// The child leads ("tu", masculine).
var A = { act: "III", noLead: true };
function P(o) { return Object.assign({}, A, o); }
module.exports = {
  // ------------------------------------------------------------ le gué des Trois Ans
  III_Q_gue: P({ title: "Le bruit de fer", place: "plaine",
    fx: { questSeen: "III_Q_gue" },
    text: [
      "Sur la droite de la plaine, un bruit. Le premier bruit franc depuis que tu es ici : du fer contre du fer, des cris, des chevaux. Une bataille.",
      "Tu t'approches. Au milieu du blanc, une rivière qui n'existe pas, un trait gris sans eau, et sur ses deux bords deux troupes qui se chargent. Des piquiers en bleu. Des hommes d'armes aux couleurs d'Esquarre. Ils se jettent les uns sur les autres au milieu du lit vide, ils tombent, ils se relèvent, ils reculent sur leur bord, et ils recommencent.",
      "Personne ne meurt. Ils sont déjà morts. Ils ont été oubliés avant d'avoir fini.",
      { with: "ysolde", text: "Ysolde s'est arrêtée net. Elle connaît ces couleurs. Elle connaît ce gué, ou un autre exactement pareil : il y en a eu vingt, pendant la guerre des Trois Ans. « Le gué aux Saules, dit-elle. J'avais quinze ans. J'étais page. Je tenais le cheval de mon père de l'autre côté de la colline. Je n'ai rien vu. On ne m'a jamais dit combien ils étaient. »" },
    ],
    choices: [
      { label: "Descendre au milieu du gué", to: "III_Q_gue_milieu" },
      { label: "Les laisser à leur guerre", refuse: true, to: "III_plaine" },
    ] }),
  III_Q_gue_milieu: P({ title: "Au milieu", place: "plaine",
    text: [
      "Tu descends dans le lit vide. La charge suivante passe à travers toi. Ce n'est pas douloureux : c'est froid, et ça sent le cheval et la sueur. Ils ne te voient pas. Ils ne voient que l'autre bord.",
      "Un vieux sergent esquarrois, la jambe raide, reste en arrière à chaque charge. Il est le seul à regarder autour de lui. Il te voit. « Toi, dit-il. Tu n'es pas d'ici. Qui a gagné ? »",
    ],
    choices: [
      { label: "« Personne. Tout le monde a oublié. »", to: "III_Q_gue_verite" },
      { label: "« Vous. »", fx: { flag: "iii:gue_mensonge" }, to: "III_Q_gue_mensonge" },
    ] }),
  III_Q_gue_mensonge: P({ title: "Victoire", place: "plaine",
    text: [
      "Le sergent hoche la tête, lentement. Il se tourne vers ses hommes et crie quelque chose. Ils s'arrêtent, ils lèvent les armes, ils poussent un hourra.",
      "Sur l'autre bord, les piquiers bleus ne s'arrêtent pas. Ils chargent. Le hourra se défait. Et ça recommence, avec un peu plus de rage d'un côté, parce que maintenant ils ont gagné, et qu'on ne les laisse pas en profiter.",
      "Tu remontes sur le bord sans te retourner.",
    ],
    choices: [{ label: "Revenir sur la plaine", fx: { quest: "III_Q_gue" }, to: "III_plaine" }] }),
  III_Q_gue_verite: P({ title: "Personne", place: "plaine",
    text: [
      "Le sergent te regarde longtemps. « Oublié, dit-il. Même là-bas ? Même chez nous ? » Tu dis oui. Tu dis que dans les villages de la Lisse, on ne sait plus où était le gué aux Saules. Que la guerre des Trois Ans tient en deux lignes dans les livres d'école, et qu'il n'y a pas d'école.",
      "« Alors pourquoi on se bat ? »",
      "Il faut que quelqu'un le leur dise. Tous. Des deux côtés. Et pour ça, il faut qu'ils s'arrêtent assez longtemps pour écouter.",
    ],
    choices: [{ label: "Monter sur une pierre au milieu du gué et parler aux deux bords", test: { dom: "social", label: "Le gué", help: [{ if: { present: "ysolde" }, v: 15 }, { if: { present: "lisandre" }, v: 15 }, { if: { present: "corbe" }, v: 5 }] },
      win: { fx: { flag: "iii:gue_paix", ep: ["perso", 2000] }, to: "III_Q_gue_paix" },
      lose: { fx: { ep: ["perso", 500] }, to: "III_Q_gue_charge" } }] }),
  III_Q_gue_paix: P({ title: "Les armes posées", place: "plaine",
    text: [
      "Tu parles. Tu ne sais pas ce que tu dis exactement. Tu parles de Sauvelune, qui a été oubliée en une nuit, et de ceux qui marchent sur la plaine, et de la Lisse, là-bas, où on se prépare à recommencer. Tu dis qu'ils peuvent continuer jusqu'à la fin du monde, et que personne, de l'autre côté, ne saura jamais pourquoi.",
      "Un piquier bleu baisse sa pique le premier. Il est très jeune. Il traverse le lit vide, lentement, et va s'asseoir à côté du vieux sergent. Ils ne se disent rien. Ils n'ont pas de langue commune.",
      "Les autres suivent, un par un. Quand le dernier a posé ses armes, le trait gris de la rivière s'efface, et ils se lèvent, tous ensemble, et vont rejoindre les files qui marchent vers la porte.",
      { with: "ysolde", text: "Ysolde reste longtemps au bord du gué vide. « Quinze ans, dit-elle. Je tenais un cheval. » C'est tout ce qu'elle dit." },
    ],
    choices: [{ label: "Revenir sur la plaine", fx: { quest: "III_Q_gue", conf: { ysolde: 10 } }, to: "III_plaine" }] }),
  III_Q_gue_charge: P({ title: "La charge suivante", place: "plaine",
    text: [
      "Ils t'écoutent, une charge. Une seule. Puis un cor sonne, quelque part derrière les piquiers, un cor qui sonne depuis cinquante ans, et ils repartent.",
      "Le vieux sergent reste un moment près de toi, la jambe raide. « Merci quand même, petit », dit-il. Et il repart, en boitant, à l'arrière de sa troupe, comme toujours.",
    ],
    choices: [{ label: "Revenir sur la plaine", fx: { quest: "III_Q_gue" }, to: "III_plaine" }] }),

  // ------------------------------------------------------------ le lac des reflets
  III_Q_lac: P({ title: "Le lac", place: "plaine",
    fx: { questSeen: "III_Q_lac" },
    text: [
      "Une étendue lisse, au milieu du blanc. Pas de l'eau, pas de la glace : un miroir à plat, sans bord, où le blanc d'en haut se reflète dans le blanc d'en bas. Mais quand tu te penches, ce n'est pas toi que tu vois.",
      "C'est quelqu'un que tu as oublié.",
    ],
    choices: [{ label: "Regarder", to: "III_Q_lac_reflet" }] }),
  III_Q_lac_reflet: P({ title: "Les reflets", place: "plaine",
    text: [
      "Dans le lac, un homme jeune, brun, aux mains abîmées, qui rit. Tu ne sais pas qui c'est. Tu sais que tu l'as aimé, quand tu avais trois ans. Tu sais qu'il te portait sur ses épaules. Rien d'autre.",
      { with: "pie", text: "Pie se penche à côté de toi, et recule aussitôt. « Pas question, dit-il. Je sais ce que je vais voir. » Il ne se penche plus." },
      { with: "hylas", text: "Hylas s'agenouille au bord. Lui qui voit, ici, ne regarde pas. Il ferme les yeux, pose la main à plat sur le miroir, et il sourit, d'un sourire que tu ne lui connais pas, et il ne dit pas ce qu'il sent." },
      { with: "corbe", text: "Corbe regarde longtemps. « Mon père, dit-elle. Je ne me souvenais même pas d'en avoir eu un. Il a ma bouche. Ou j'ai la sienne. »" },
      { with: "lisandre", text: "Lisandre se penche, et éclate de rire. « C'est moi, dit-elle. Moi à seize ans. Avant la cour. Regarde ces joues. J'avais complètement oublié cette fille-là. » Elle ne rit plus, après." },
      { with: "ysolde", text: "Ysolde ne se penche pas. Elle reste debout, droite, à trois pas du bord, et elle regarde de loin. Ce qu'elle voit de là doit lui suffire." },
    ],
    choices: [
      { label: "Toucher le reflet", test: { dom: "magie", label: "Le reflet", help: [{ if: { present: "givre" }, v: 10 }, { if: { has: "iii:toupie" }, v: 15 }] },
        win: { fx: { flag: "iii:lac_pere", ep: ["perso", 1500] }, to: "III_Q_lac_touche" }, lose: { to: "III_Q_lac_trouble" } },
      { label: "Te relever avant de vouloir y retourner", fx: { flag: "iii:lac_quitte" }, to: "III_Q_lac_fin" },
    ] }),
  III_Q_lac_touche: P({ title: "Les épaules", place: "plaine",
    text: [
      "Tu poses la main sur le miroir. Le reflet pose la sienne de l'autre côté. Il est chaud. Pendant un instant, tu as trois ans, tu es en haut, très haut, sur des épaules, et quelqu'un marche dans des rues blanches en chantant faux, et tu tiens deux poignées de cheveux bruns, et tu n'as jamais eu aussi peu peur de ta vie.",
      "Puis le reflet retire sa main, et c'est ton visage qui revient dans le lac, ton visage à toi, avec ses yeux rougis.",
      "Tu ne sais toujours pas son nom. Mais tu sais qu'il chantait faux. C'est déjà quelque chose qui t'appartient.",
    ],
    choices: [{ label: "Revenir sur la plaine", fx: { quest: "III_Q_lac" }, to: "III_plaine" }] }),
  III_Q_lac_trouble: P({ title: "Le miroir se trouble", place: "plaine",
    text: ["Ta main passe à travers. Le miroir se trouble, comme de l'eau, et quand il redevient lisse, le reflet est parti. Il n'y a plus que toi, et le blanc. Tu restes un moment à genoux, à attendre qu'il revienne. Il ne revient pas."],
    choices: [{ label: "Revenir sur la plaine", fx: { quest: "III_Q_lac" }, to: "III_plaine" }] }),
  III_Q_lac_fin: P({ title: "Te relever", place: "plaine",
    text: ["Tu te relèves. C'est très difficile. Au bord du lac, assis, couchés, il y a des gens qui ne se sont pas relevés. Ils regardent. Ils regardent depuis des années. Ils ont l'air heureux, et ils n'ont plus de visage."],
    choices: [{ label: "Revenir sur la plaine", fx: { quest: "III_Q_lac" }, to: "III_plaine" }] }),

  // ------------------------------------------------------------ le terrier de Givre
  III_Q_givre: P({ title: "Givre s'en va", place: "plaine",
    fx: { questSeen: "III_Q_givre" },
    text: [
      "Givre s'arrête, le nez en l'air. Il renifle. Puis il part, au trot, vers un endroit de la plaine où il n'y a rien, et il se retourne pour voir si tu suis.",
      "Il ne t'a jamais fait ça.",
    ],
    choices: [
      { label: "Le suivre", to: "III_Q_givre_terrier" },
      { label: "L'appeler pour qu'il revienne", fx: { conf: { givre: -5 } }, to: "III_plaine" },
    ] }),
  III_Q_givre_terrier: P({ title: "Le terrier", place: "plaine",
    text: [
      "Il te mène à une butte de blanc, et dans la butte, un trou rond. Un terrier. Devant, des petits os de neige, et des choses minuscules, rangées en tas : un bouton, un dé à coudre, une dent de lait, un ruban, un caillou peint.",
      "Une portée. Quatre renardeaux de neige, plus petits que Givre, qui sortent la tête du trou en couinant. Ils n'ont rien mangé depuis longtemps. Ils sont presque transparents.",
      "Et sur le côté, couchée, une renarde de neige qui ne bouge plus. Elle est à moitié devenue un tas de neige ordinaire. On voit encore ses oreilles.",
      "Givre va se coucher contre elle. Il ne mange pas. Il te regarde.",
    ],
    choices: [
      { label: "Leur donner à manger. De petits oublis, sans importance", to: "III_Q_givre_nourrir" },
      { label: "Attendre ce que Givre veut faire", to: "III_Q_givre_choix" },
    ] }),
  III_Q_givre_nourrir: P({ title: "Les miettes", place: "plaine",
    text: [
      "Tu cherches dans ta tête des choses sans importance. La couleur du ciel le matin du départ. Le nombre de marches du temple. Le nom d'un chien de Pont-de-Saule. Tu les tends, une par une. Les renardeaux les mangent dans ta main, en se bousculant, et deviennent plus blancs, plus nets, plus vivants.",
      "Quand ils n'ont plus faim, tu essaies de te souvenir du chien de Pont-de-Saule. Tu ne peux pas. Tu ne sais pas s'il y avait un chien.",
      { with: "hylas", text: "« C'est le prix, dit Hylas. Ce n'est pas cher. Mais c'est un prix. »" },
    ],
    choices: [{ label: "Attendre ce que Givre veut faire", fx: { flag: "iii:renardeaux", conf: { givre: 10 }, ep: ["perso", 1000] }, to: "III_Q_givre_choix" }] }),
  III_Q_givre_choix: P({ title: "Givre", place: "plaine",
    text: [
      "Givre reste longtemps contre la renarde. Puis il se lève, il lèche les quatre petits, un par un, sur le front, là où il n'y a pas de sceau. Il fait trois pas vers toi. Il s'arrête. Il se retourne vers le terrier.",
      "Il hésite. Tu n'as jamais vu une bête hésiter comme ça, avec tout le corps.",
    ],
    choices: [
      { label: "Lui dire de rester avec eux", fx: { flag: "givre:terrier", leave: "givre", ep: ["perso", 1000] }, to: "III_Q_givre_reste" },
      { label: "L'appeler", fx: { flag: "givre:choisi", conf: { givre: 20 }, ep: ["perso", 800] }, to: "III_Q_givre_vient" },
    ] }),
  III_Q_givre_reste: P({ title: "Le terrier", place: "plaine",
    text: [
      "« Reste », dis-tu. Il comprend. Il comprend toujours tout ce qu'on lui dit, c'est son défaut. Il te regarde encore un moment, et il rentre dans le terrier, avec les petits, et tu entends des couinements, puis plus rien.",
      "Tu repars sans lui. Pendant longtemps, tu te retournes sans t'en rendre compte, pour voir s'il suit.",
    ],
    choices: [{ label: "Revenir sur la plaine", fx: { quest: "III_Q_givre" }, to: "III_plaine" }] }),
  III_Q_givre_vient: P({ title: "Il vient", place: "plaine",
    text: [
      "Il vient. Il te dépasse, il trotte devant, la queue haute, sans se retourner vers le terrier, avec cette dignité exagérée des bêtes qui ont pris une décision difficile et ne veulent pas qu'on en parle.",
      { if: { has: "iii:renardeaux" }, text: "Derrière vous, les quatre petits sortent du terrier et vous regardent partir. Ils ont l'air de bien se porter. Ils sont presque blancs." },
    ],
    choices: [{ label: "Revenir sur la plaine", fx: { quest: "III_Q_givre" }, to: "III_plaine" }] }),
};
