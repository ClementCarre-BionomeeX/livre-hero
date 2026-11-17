// L'Île Folle-Aiguille · side story « Le charpentier » (owes its question to Othello: how little does it take to make a
// man believe the thing he already fears?). In the calm, Fréville the carpenter, a pious man, comes to the galley for
// a needle to sew a torn scapular. Fargue knows his fear: holy ground. He could tell him, lightly, that the captain's
// chart marks a chapel on the island, and a cross beside it. He sows it (zs:seme, the carpenter leans to the plot),
// stops at the first word and lets it go (zs:arrete), or tells him the truth about chapels on old charts, and why
// sailors mark them (zs:rassure, the carpenter leans to the captain). Wired in A3f_jours.
module.exports = {
  passages: {
    ZS_aiguille: { act: "III", title: "Le charpentier", place: "cormorane", ambiance: "mer", second: true,
      text: [
        "Abel Fréville entre dans la cambuse en baissant la tête, parce qu'il est grand et que la cambuse est basse, et en tordant entre ses grosses mains blondes un petit carré d'étoffe brune pendu à deux cordons. Son scapulaire. Le cordon a cassé ce matin, en sciant un bordé, et il n'ose pas le porter dans sa poche ; il dit que ça ne compte pas, dans une poche. Il voudrait une aiguille et du fil. Il sait que Fargue en a.",
        "Fargue lui donne l'aiguille et le fil, et lui fait une place sur le banc, à côté du fourneau, et lui verse un café. Fréville coud mal, en tirant la langue, avec des doigts faits pour la hache. Il parle en cousant, comme les gens qui parlent peu et que le travail des mains délie. Il dit que la mer des Sargues ne lui plaît pas. Qu'il y a trop de silence. Qu'on y entend le Bon Dieu réfléchir.",
        "Fargue l'écoute. Il connaît Fréville depuis l'armement : un homme droit, doux, lent, qui fait le signe de croix avant de planter un clou dans une membrure neuve, et qui a demandé à la capitaine, à Morlenc, si l'île où l'on allait était en terre chrétienne. Elle lui a répondu qu'il n'y avait pas de terre chrétienne au-delà du cap des Brumes, seulement de la terre. Il a signé quand même. Il a de bons gages et quatre enfants.",
        "Il y a, sur la carte de la capitaine, au milieu de l'île, un petit dessin à la plume : une chapelle, avec une croix. Fargue l'a vue par-dessus l'épaule du baron, le premier soir. Tout le monde, à bord, sait qu'on va chercher quelque chose sur cette île. Personne ne sait où.",
      ],
      choices: [{ label: "Laisser tomber, comme ça, un mot sur la carte", to: "ZS_mot" }] },
    ZS_mot: { act: "III", title: "Le charpentier", place: "cormorane", ambiance: "mer", second: true,
      text: [
        "« Drôle de carte, dit Fargue, en remuant sa soupe, sans regarder Fréville. Avec une chapelle au milieu. Une croix et tout. »",
        "L'aiguille s'arrête. Fréville lève les yeux. Il a des yeux bleus de porcelaine, d'enfant de chœur, qui ne savent rien cacher, et Fargue y voit monter la chose, aussitôt, comme une eau qui monte dans un puits : une chapelle, au milieu d'une île déserte, sur une carte de chasseurs de trésor. Qu'est-ce qu'on va chercher, avec des pelles, dans une maison de Dieu ?",
        "Il n'a rien dit. Il a dit *drôle de carte*. Le reste, Fréville l'a fait tout seul, en une seconde, parce que c'était déjà là, au fond de lui, depuis Morlenc, depuis la réponse de la capitaine sur la terre chrétienne. Il a suffi d'une goutte. Fargue est presque déçu de la facilité.",
        "« Une chapelle, répète Fréville, d'une voix sourde. Pourquoi une chapelle ? »",
        "Fargue tourne sa soupe. Il sent, dans sa main, le poids de la louche, et le poids de cet homme. Un mot de plus, un seul, *je me demande ce qu'on compte y déterrer*, et Fréville, ce soir, n'aura plus tout à fait confiance en sa capitaine. Il ne passera pas au complot. Les hommes comme lui ne passent pas. Mais il hésitera, au mauvais moment. Et c'est tout ce qu'il faut, d'un charpentier, au mauvais moment.",
      ],
      choices: [
        { label: "« Je me demande ce qu'on compte y déterrer. »", fx: { flag: "zs:seme", penche: { freville: -2 } }, to: "ZS_seme" },
        { label: "Hausser les épaules, et parler d'autre chose", fx: { flag: "zs:arrete" }, to: "ZS_arrete" },
        { label: "Lui expliquer pourquoi les vieilles cartes marquent les chapelles", fx: { flag: "zs:rassure", penche: { freville: 1 } }, to: "ZS_rassure" },
      ] },
    ZS_seme: { act: "III", title: "Le charpentier", place: "cormorane", ambiance: "mer", second: true,
      text: [
        "Il le dit. Comme ça, en goûtant sa soupe, d'un air distrait, en ajoutant du sel. Et il ajoute, pour la forme, que ce ne sont pas ses affaires, à lui, un cuisinier, qu'il a déjà assez de mal avec ses péchés à lui, qu'il ne va pas s'occuper de ceux des autres.",
        "Fréville ne répond pas. Il finit de coudre son scapulaire, en silence, avec un soin terrible, en serrant chaque point. Il le passe à son cou. Il rend l'aiguille. Il remercie pour le café. Il sort, en baissant la tête sous le barrot.",
        "Le soir, Fargue le voit sur le gaillard d'arrière, debout, immobile, qui regarde la capitaine Ribaud penchée sur sa carte, à la lanterne de l'habitacle. Il la regarde longtemps, comme on regarde quelqu'un qu'on croyait connaître. Il touche son scapulaire, à travers sa chemise, du bout des doigts. La capitaine lève la tête, le voit, lui fait un signe amical. Il ne le lui rend pas.",
        "Fargue redescend à la cambuse. Il se dit que ce n'est rien, une goutte, un homme qui hésitera au mauvais moment. Il se dit que c'était facile. Il se dit que c'est justement ce qui le gêne : que ce soit facile, avec un homme qui coud son scapulaire sur votre banc et boit votre café. Il lave la tasse de Fréville avec plus de soin que les autres.",
      ],
      choices: [{ label: "Remettre le café à chauffer", fx: { quest: "ZS" }, back: "A3f_jours" }] },
    ZS_arrete: { act: "III", title: "Le charpentier", place: "cormorane", ambiance: "mer", second: true,
      text: [
        "Il hausse les épaules. « Les cartes, tu sais. Ceux qui les dessinent mettent des croix partout, des sirènes, des monstres. Pour faire joli. » Et il parle d'autre chose. Du fil, qui est mauvais. Du scapulaire, qui vient de Sainte-Anne-des-Grèves, à la Pointe, où il connaît le sacristain. Du café, qu'il faudra rationner.",
        "Fréville se laisse distraire, lentement, comme un enfant qu'on promène loin d'une flaque. Il finit son scapulaire. Il remercie. Il s'en va. Il a encore, au fond de ses yeux bleus, une petite question, mais elle ne remonte pas ; elle reste au fond, comme une pierre au fond d'un puits, qu'on ne voit plus et qui est là.",
        "Fargue reste seul devant son fourneau. Il ne sait pas très bien pourquoi il s'est arrêté. Ce n'est pas la bonté. Il le sait. Peut-être le scapulaire. Peut-être le banc, et le café. Peut-être la facilité, qui lui a fait peur, comme une porte qui s'ouvre trop vite dans une maison où l'on entre pour voler. Il se dit qu'il garde la goutte pour plus tard. Il sait qu'il ment. Il ne sait pas à qui.",
      ],
      choices: [{ label: "Remettre le café à chauffer", fx: { quest: "ZS" }, back: "A3f_jours" }] },
    ZS_rassure: { act: "III", title: "Le charpentier", place: "cormorane", ambiance: "mer", second: true,
      text: [
        "« Toutes les vieilles cartes marquent les chapelles, dit Fargue. Les clochers, les calvaires, les croix. Ce sont des amers. On les voit de la mer, par beau temps, à cinq lieues. Les navigateurs d'autrefois se guidaient dessus pour entrer dans les passes. Une chapelle, sur une carte, c'est un phare de pierre, qui ne coûte pas d'huile. »",
        "Fréville l'écoute, la bouche entrouverte. Puis son visage s'éclaire, lentement, comme un ciel qui se lave. « Un amer, répète-t-il. Une chapelle pour entrer dans les passes. » Il rit, de soulagement, d'un rire d'enfant. « C'est beau. Une chapelle qui guide les navires. » Il finit son scapulaire, le passe à son cou, et dit qu'il ira la voir, cette chapelle, à terre, pour y dire un Ave, si la capitaine le permet.",
        "Il remercie pour le café, deux fois, et s'en va. Fargue reste seul. Il a dit la vérité ; c'est vrai, pour les amers. Pour cette chapelle-là, il sait autre chose, depuis vingt et un ans, et il le garde. Il se dit qu'il vient de rendre à un homme pieux sa confiance dans une capitaine, et dans une croix, avec une demi-vérité. Il se demande si c'est un cadeau ou un piège, et pour qui.",
      ],
      choices: [{ label: "Remettre le café à chauffer", fx: { quest: "ZS" }, back: "A3f_jours" }] },
  },
  extras: {
    quests: [
      { id: "ZS", act: "III", kind: "annexe", title: "Le charpentier", start: "ZS_aiguille", doit: "othello", echo: ["zs:seme", "zs:arrete", "zs:rassure"] },
    ],
  },
};
