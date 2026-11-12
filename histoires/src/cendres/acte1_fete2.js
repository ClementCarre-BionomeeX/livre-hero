// Act I · two more corners of the hay feast at Sauvelune (the child leads, "tu"), off EN_place: the dean of the
// village, Mathilde Aubry, a hundred and one, who counts the unbetrothed; and old Gervais, who repaints the family
// names on the lintels every spring and is late this year (en:linteaux echoes in Act IV, IV_sv_linteaux).
function P(o) { return Object.assign({ act: "I", place: "sauvelune", noLead: true }, o); }
var BACK = [{ back: "EN_place" }];
module.exports = {
  EN_k_doyenne: P({ title: "La doyenne",
    text: [
      "Mathilde Aubry ne se lève plus de sa chaise depuis trois ans. On la porte. On la pose au milieu de la place, à l'ombre, avec une couverture sur les genoux en plein juillet, et elle règne. Elle a cent un ans, quatre dents, et une mémoire qui fait peur à tout le village, parce qu'elle n'oublie rien, ni les dettes ni les baisers.",
      "Elle te fait signe d'approcher, d'un doigt crochu. Tu approches. Elle te regarde de haut en bas, longuement, comme on regarde un veau à la foire. « Toi, dit-elle. Le petit du moulin. Tu as quel âge, maintenant ? » Tu le lui dis. Elle compte sur ses doigts, et elle n'a pas l'air contente du résultat.",
    ],
    choices: [
      { label: "Lui demander ce qu'elle compte", to: "EN_k_doyenne_compte" },
      { label: "Lui demander quel est son plus vieux souvenir", fx: { ep: ["perso", 300] }, to: "EN_k_doyenne_hiver" },
    ] }),
  EN_k_doyenne_compte: P({ title: "Les comptes de Mathilde",
    text: [
      "« Les fiancés, dit-elle. Et ceux qui n'en ont pas. Toi, tu n'en as pas. » Elle pointe le doigt vers la forge, où Tess se dispute avec son père devant l'enclume. « Et elle non plus. Vous êtes deux à me gâcher mes comptes. »",
      "Puis elle se radoucit, d'un coup, comme font les très vieilles gens. « J'ai une arrière-petite-fille, tu sais. Elle porte mon nom. Mathilde Aubry, comme moi, née l'année de la grêle, la même année que ton frère. Elle est là, sous la table des tartes, à manger ce qui tombe. » Elle rit, de ses quatre dents. « Quand je serai morte, il en restera une. C'est tout ce que je demande. Qu'il en reste une, avec le nom. »",
    ],
    choices: BACK }),
  EN_k_doyenne_hiver: P({ title: "Le plus vieux souvenir",
    text: [
      "Elle ferme les yeux. Tu crois qu'elle s'est endormie. Puis elle parle, sans les rouvrir, d'une voix de petite fille. « J'avais six ans. C'était l'été, comme aujourd'hui. Ma grand-mère m'a emmenée au chêne, en haut, et elle m'a dit de regarder vers le nord, très loin, au-dessus des montagnes. Il y avait une lumière blanche, toute blanche, au ras du ciel, comme une aube qui se serait trompée de côté. »",
      "« Ma grand-mère a dit : *Ça, c'est l'Hiver qui rêve. Tant qu'il rêve là-bas, il ne vient pas ici.* Je ne l'ai jamais revue, cette lumière. J'ai regardé, pourtant. Quatre-vingt-quinze ans que je regarde. » Elle rouvre les yeux. Elle te regarde, bizarrement. « Pourquoi je te raconte ça, à toi ? Va danser. Va. »",
    ],
    choices: BACK }),
  EN_k_linteaux: P({ title: "Le peintre des noms",
    text: [
      "Devant la maison des Roux-Lavallée, sur une échelle, le vieux Gervais repeint le linteau. Un pot d'ocre accroché à un barreau, un pinceau en poil de blaireau, la langue entre les dents. Il est en retard. On repeint les noms au printemps, d'habitude, et on est en juillet. Il a eu les fièvres en avril.",
      "« Encore sept, dit-il, sans se retourner. Et le moulin. Le moulin, je ne sais jamais quoi y mettre. Depuis mon grand-père, on y écrit *Moulin*, et rien d'autre : les meuniers passent, le moulin reste, c'est la règle. Ça a toujours fait triste. » Il redescend d'un barreau. « Tu tiens le pot ? »",
    ],
    choices: [
      { label: "Tenir le pot, et l'aider à finir les sept maisons", fx: { ep: ["perso", 300], flag: "en:linteaux" }, to: "EN_k_linteaux_peindre" },
      { label: "Décliner, et le regarder faire un moment", to: "EN_k_linteaux_regarder" },
    ] }),
  EN_k_linteaux_peindre: P({ title: "L'ocre",
    text: [
      "Tu tiens le pot. Puis l'échelle. Puis, à la quatrième maison, il te donne le pinceau, parce que ses mains tremblent, et il te dicte, lettre à lettre, en bas, les mains dans le dos. *F-E-R-R-A-N-D.* Le *D* penche. Il dit que ça ira. Que les Ferrand ont toujours penché un peu.",
      "Au moulin, il te regarde. « À toi de choisir, dit-il. C'est ta maison. » Tu réfléchis longtemps, le pinceau en l'air. Puis tu écris, en ocre, sur la poutre de chêne : *JORIS · AGATHE · PIM*. Et un peu plus bas, plus petit, faute de mieux, une roue. Gervais lit, hoche la tête. « C'est plus long, dit-il. C'est moins triste. »",
    ],
    choices: BACK }),
  EN_k_linteaux_regarder: P({ title: "Les lettres fraîches",
    text: ["Tu restes un moment au pied de l'échelle. Gervais trace les lettres sans modèle, de mémoire, d'un seul geste, comme on signe. *Roux-Lavallée*, avec le trait d'union qui lui a toujours coûté. L'ocre brille au soleil, humide encore, et sent la terre et l'huile. Tu te dis que c'est beau, un village où chaque porte dit qui habite derrière."],
    choices: BACK }),
};
