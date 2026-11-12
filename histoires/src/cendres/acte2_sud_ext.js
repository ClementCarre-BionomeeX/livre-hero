// Act II · more for the southern company (Lisandre leads, "tu" feminine): two more talks on the day after the queen's
// night (Rodric, Linette), and two more corners of the champions' camp on the evening of the jousts (the card-reader,
// the squire whose knight forgot him).
var S = { act: "II", noLead: true };
function P(o) { return Object.assign({}, S, o); }
module.exports = {
  II_S2_nuit_rodric: P({ title: "Rodric", place: "vasselin",
    text: [
      "Rodric est dans la cour de l'Ancre, torse nu malgré le froid, à fendre du bois pour la patronne, qui ne lui a rien demandé. Il fend comme on se bat, d'un coup, sans reprendre. Tu t'assieds sur le billot d'à côté.",
      "« La reine, dit-il, dans son esquarrois à lui, lent, rocailleux. Elle t'a reconnue ? » Non. « Elle m'a fait pendre trois cousins, à Lisse. Elle ne s'en souvient pas non plus. » Il fend. « C'est bien. Ce serait pire, si elle se souvenait. Il faudrait la haïr. »",
    ],
    choices: [
      { label: "« Tu ne la hais pas ? »", fx: { conf: { rodric: 5 } }, to: "II_S2_nuit_rodric2" },
      { label: "L'aider à fendre, sans rien dire", fx: { conf: { rodric: 10 } }, to: "II_S2_nuit" },
    ] }),
  II_S2_nuit_rodric2: P({ title: "Haïr", place: "vasselin",
    text: ["Il pose sa hache. Il réfléchit, longtemps, avec ce sérieux qu'il met à tout. « Je hais la femme qui a signé, dit-il enfin. Celle-là, elle n'existe plus. Celle qui dort au palais, je ne la connais pas. » Il reprend sa hache. « C'est très commode. Je n'aime pas que ce soit commode. »"],
    choices: [{ back: "II_S2_nuit" }] }),
  II_S2_nuit_linette: P({ title: "Linette", place: "vasselin",
    text: [
      "Linette s'est installée à la fenêtre, avec un crayon et le dos d'une affiche du tournoi. Elle recopie, de mémoire, les lettres de la cession qu'elle a vue chez la reine. Elle a une mémoire de page. Ça lui fait peur, parfois, de tout retenir.",
      "« Tu crois qu'un jour j'oublierai ? demande-t-elle sans lever les yeux. Tout ce que j'ai recopié, à la tour ? Les noms, les sommes ? » Elle a dix ans. Elle a recopié dix mille cessions.",
    ],
    choices: [
      { label: "« J'espère que oui. »", fx: { conf: { linette: 5 } }, to: "II_S2_nuit_linette_oui" },
      { label: "« Non. Et un jour, ça servira. »", fx: { conf: { linette: 10 }, flag: "sud2:linette_memoire" }, to: "II_S2_nuit_linette_non" },
    ] }),
  II_S2_nuit_linette_oui: P({ title: "Oublier", place: "vasselin",
    text: ["Elle hoche la tête. Elle continue de recopier. « Moi aussi, j'espère », dit-elle. Mais elle ne s'arrête pas d'écrire, et la colonne descend, droite, régulière, jusqu'en bas de l'affiche."],
    choices: [{ label: "La laisser à sa page", to: "II_S2_nuit" }] }),
  II_S2_nuit_linette_non: P({ title: "Ça servira", place: "vasselin",
    text: ["Elle lève les yeux. Elle te regarde longtemps, avec l'air de quelqu'un qui vérifie une écriture. « D'accord », dit-elle. Et elle se remet à écrire, plus vite, avec un petit pli au front, comme une greffière."],
    choices: [{ label: "La laisser à sa page", to: "II_S2_nuit" }] }),

  // ---------------------------------------------------------------- Le camp des champions
  II_S3_cartes: P({ title: "La liseuse de cartes", place: "vasselin",
    text: [
      "Entre deux tentes, une femme en châle rouge, assise sur un tabouret, tire les cartes aux écuyers pour un sou. Elle a un jeu usé jusqu'à la trame, avec des figures que tu ne connais pas : la Gerbe, la Barque, la Tour, le Cerf, la Plume croisée d'une Clé.",
      "« Une carte pour la chanteuse ? » Elle étale le jeu en éventail, faces cachées. « Une seule. Les autres, on ne les tire plus. Ça porte malheur, cette année. »",
    ],
    choices: [
      { label: "Tirer une carte", fx: { ep: ["perso", 300] }, to: "II_S3_cartes_tirage" },
      { label: "Lui demander d'où vient ce jeu", to: "II_S3_cartes_jeu" },
    ] }),
  II_S3_cartes_tirage: P({ title: "Une carte", place: "vasselin",
    text: [
      "Tu tires. Elle retourne la carte. Une figure blanche, sans visage, sur un fond blanc. On ne la distingue presque pas. La femme la regarde, et ne dit rien pendant un moment.",
      "« La Sixième, dit-elle. Il n'y a que cinq figures, d'habitude. Celle-là, elle est dans tous les jeux, mais on ne la voit pas. On la tire une fois dans sa vie, et encore. » Elle remet la carte dans le paquet, très vite. « Ça veut dire que quelqu'un qu'on a oublié va revenir. Pour le meilleur ou pour le pire. Les cartes ne disent pas lequel. Elles ne le disent jamais. »",
    ],
    choices: [{ label: "Lui laisser deux sous, et repartir", to: "II_S3_soir" }] }),
  II_S3_cartes_jeu: P({ title: "Le jeu", place: "vasselin",
    text: ["« De ma grand-mère, dit-elle. Qui le tenait de la sienne. C'est un jeu du nord, d'après le bois des couleurs. On dit qu'il a été peint l'année de la fondation, pour les fêtes, et qu'on y a mis tous ceux qui comptaient. » Elle range les cartes. « Ceux qui ont fondé le royaume, et puis une de plus. Personne ne sait qui. »"],
    choices: [{ back: "II_S3_soir" }] }),

  II_S3_ecuyer: P({ title: "L'écuyer", place: "vasselin",
    text: [
      "Devant une tente vert et or, un écuyer de quinze ans, assis par terre, le heaume de son maître sur les genoux. Il le frotte. Il le frotte depuis des heures, à voir l'éclat.",
      "« Messire Gondebaud, dit-il quand tu lui demandes. Il a couru ce matin. Il a gagné. En revenant, il m'a regardé et il m'a demandé qui j'étais. » Le garçon frotte. « Il a pris un autre écuyer, un qui passait. Il dit que je suis un voleur, qui veut son heaume. »",
    ],
    choices: [
      { label: "Aller parler à Messire Gondebaud", test: { dom: "social", label: "Le chevalier", help: [{ if: { present: "ysolde" }, v: 20 }, { if: { item: "luth" }, v: 5 }] },
        win: { fx: { flag: "sud3:ecuyer", ep: ["perso", 800] }, to: "II_S3_ecuyer_ok" }, lose: { to: "II_S3_ecuyer_rate" } },
      { label: "Le prendre au service de la compagnie", fx: { flag: "sud3:ecuyer_pris", ep: ["perso", 500] }, to: "II_S3_ecuyer_pris" },
    ] }),
  II_S3_ecuyer_ok: P({ title: "Messire Gondebaud", place: "vasselin",
    text: [
      "Le chevalier boit sous sa tente avec son nouvel écuyer. Tu entres. Tu ne parles pas du garçon. Tu parles de la joute du matin, tu lui fais raconter, coup par coup. Il raconte, ravi. Qui a sanglé votre selle, Messire ? Qui a tenu votre lance ? Qui vous a crié de baisser l'épaule, au deuxième passage ?",
      "Il s'arrête. Il fronce les sourcils. Il sort de la tente, il regarde le garçon assis par terre avec son heaume. « Toi, dit-il. C'est toi qui as crié. » Le garçon se lève. Le chevalier ne dit pas qu'il se souvient. Il dit : « Ma selle est mal sanglée. Viens voir. »",
    ],
    choices: [{ back: "II_S3_soir" }] }),
  II_S3_ecuyer_rate: P({ title: "La tente verte", place: "vasselin",
    text: ["Le chevalier t'écoute, poliment, puis il te raccompagne à l'entrée de la tente. « Je n'ai jamais eu d'autre écuyer que celui-là, Madame », dit-il en montrant le nouveau, qui baisse la tête. Dehors, le garçon frotte toujours le heaume. Il ne te demande pas comment ça s'est passé."],
    choices: [{ back: "II_S3_soir" }] }),
  II_S3_ecuyer_pris: P({ title: "Un écuyer", place: "vasselin",
    text: ["Il pose le heaume, très délicatement, devant la tente verte, comme on dépose un enfant devant une porte. Puis il te suit. Il s'appelle Mahé. Le soir même, il a graissé tous les cuirs de la compagnie, et il dort en travers de l'entrée de la tente, comme un chien de garde."],
    choices: [{ back: "II_S3_soir" }] }),
};
