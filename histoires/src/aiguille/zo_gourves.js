// L'Île Folle-Aiguille · side story « Le père de Soizic » (owes its question to L'Assommoir: does drink make the misery,
// or the misery the drink, and can anyone pull out a man who has chosen to go down?). In a cellar tavern of the
// Basse-Fosse, the child recognises Fanch Gourvès, a fisherman of the Pointe who left five years ago « to earn in
// Morlenc », whom his wife and his daughter Soizic believe lost at sea. He begs the child to say nothing. The child
// writes to the wife (zo:lettre), gives him Soizic's words and leaves the choice to him (zo:fille), or promises silence
// (zo:tait). Wired in A2m_bf.
module.exports = {
  passages: {
    ZO_cave: { act: "II", title: "Le père de Soizic", place: "basse_fosse", ambiance: "ville",
      fx: { meet: "gourves" },
      text: [
        "La taverne du Pélican est une cave. On y descend par six marches gluantes, sous une enseigne où un pélican peint s'ouvre la poitrine pour nourrir ses petits, ce qui, dans un endroit où l'on vend l'eau-de-vie de grain à deux liards le verre, ressemble moins à une image pieuse qu'à un programme. Il y fait sombre, chaud, humide. On boit debout, contre des tonneaux. Personne ne parle. On entend seulement les verres qui se posent, et, de temps en temps, quelqu'un qui tombe.",
        "Tu y entres pour Gobert, chercher des bras. Tu restes pour un homme.",
        "Il est assis par terre, contre un tonneau, les jambes allongées, un verre vide à la main, et il a la tête qui pend, et une barbe sale, grise par plaques, et des sabots de la Pointe, ceux qu'on taille dans le hêtre là-bas, avec une bride de cuir clouée. Tu connais ces sabots. Tu connais cette main, sur le verre, avec le pouce coupé à la première phalange par un filin, le jour de la Saint-Jean, il y a dix ans, sous tes yeux.",
        "Fanch Gourvès. Le père de Soizic. Parti de la Pointe il y a cinq ans, un matin de mars, pour gagner à Morlenc de quoi racheter un bateau, et qu'on n'a jamais revu. Sa femme porte le deuil depuis trois ans. On a dit une messe. On a mis son nom au registre des noyés, avec un point d'interrogation, que le recteur a fini par effacer.",
      ],
      choices: [{ label: "Dire son nom", to: "ZO_nom" }] },
    ZO_nom: { act: "II", title: "Le père de Soizic", place: "basse_fosse", ambiance: "ville",
      text: [
        "Il lève la tête. Il met longtemps à te reconnaître. Puis il te reconnaît, et son visage fait une chose terrible : il s'éclaire, une seconde, d'une joie d'enfant, et tout de suite il se ferme, comme une porte qu'on claque sur un courant d'air.",
        "Il se relève en s'appuyant au tonneau. Il t'entraîne dans un coin, plus sombre encore, sous l'escalier. Il te tient par le bras, fort, et il sent l'eau-de-vie, la sueur, la pisse et la morue. « Tu ne dis rien, souffle-t-il. Tu ne m'as pas vu. Tu m'entends ? Tu ne m'as pas vu. »",
        "Il raconte, en désordre. Le travail au port, la première année, l'argent qu'il mettait de côté, dans une chaussette, pour le bateau. Un soir, un verre avec des camarades, pour fêter une paie. Puis un autre soir. Puis la chaussette qui se vide. Puis la honte de la chaussette vide, qu'on noie dans un autre verre. Puis la lettre qu'il n'a pas écrite, parce qu'il ne savait pas quoi y mettre. Puis la deuxième année, et c'était trop tard pour écrire. « Elle me croit mort, dit-il. C'est mieux. Un mort, ça se respecte. Ça se pleure. Moi, regarde-moi. »",
        "Tu le regardes. Il a quarante ans. Il en paraît soixante. Il a les yeux de Soizic.",
      ],
      choices: [{ label: "Penser à Soizic", to: "ZO_soizic" }] },
    ZO_soizic: { act: "II", title: "Le père de Soizic", place: "basse_fosse", ambiance: "ville",
      text: [
        "Soizic a douze ans. Elle ramasse le goémon, à la Pointe, avec sa mère, à marée basse, dans le froid, avec des mains rouges. Elle a gardé, dans une boîte à sel, une chique de tabac que son père avait laissée sur la cheminée le matin où il est parti, et elle la sort quelquefois pour la sentir. Elle t'a dit, un jour, sur la grève, qu'elle savait qu'il n'était pas noyé. Qu'elle le sentait. Qu'il reviendrait avec un bateau peint en bleu.",
        "Sa mère, la veuve Gourvès, qui n'est pas veuve, a refusé deux fois de se remarier, avec le meunier de Varnèse, qui a du bien. Elle dit qu'elle attend la preuve. Il n'y a jamais eu de preuve.",
        "Gourvès te regarde penser. Il voit, sur ton visage, passer sa fille, et sa femme, et la Pointe, et il recule contre le mur, comme sous une gifle. « Non, dit-il. Non. »",
      ],
      choices: [
        { label: "Écrire à sa femme, ce soir, quoi qu'il en dise", fx: { flag: "zo:lettre" }, to: "ZO_lettre" },
        { label: "Lui dire, pour la chique dans la boîte à sel, et le bateau bleu, et partir", fx: { flag: "zo:fille" }, to: "ZO_fille" },
        { label: "Lui promettre que tu ne l'as pas vu", fx: { flag: "zo:tait" }, to: "ZO_tait" },
      ] },
    ZO_lettre: { act: "II", title: "Le père de Soizic", place: "cormorane", ambiance: "nuit",
      text: [
        "Tu écris le soir même, dans l'entrepont, sur un bout de planche, à la lumière d'un fanal, avec la plume que tu as empruntée au commis aux vivres. C'est la lettre la plus difficile que tu aies jamais écrite. Tu la recommences trois fois. Tu écris qu'il est vivant. Qu'il est au Pélican, dans la Basse-Fosse, à Morlenc. Qu'il boit. Qu'il a honte. Qu'il a les yeux de Soizic. Tu ne sais pas comment finir. Tu finis par *Je te demande pardon*, sans savoir à qui.",
        "Tu la confies au patron d'un caboteur qui remonte vers la côte du Ponant, avec deux sous. Elle mettra dix jours. La Cormorane, dans dix jours, sera en mer.",
        "Tu ne sauras pas, en partant, ce qu'elle fera, la femme qui n'est pas veuve, en lisant ta lettre. Si elle viendra le chercher, avec Soizic, par la diligence, dans la Basse-Fosse, au Pélican. Si elle déchirera la lettre pour garder son mort. Si elle épousera le meunier. Tu sais seulement que tu lui as donné le choix, et que tu l'as pris à lui, et que tu le referais.",
      ],
      choices: [{ label: "Reprendre ta tournée de la Basse-Fosse", fx: { quest: "ZO" }, back: "A2m_bf" }] },
    ZO_fille: { act: "II", title: "Le père de Soizic", place: "basse_fosse", ambiance: "ville",
      text: [
        "Tu lui dis. La boîte à sel. La chique de tabac qu'elle sort pour la sentir. Le bateau peint en bleu, qu'elle attend. Tu le dis simplement, sans rien ajouter, sans rien demander, et tu vois chaque mot l'atteindre, comme des pierres qu'on lance dans une eau trouble, et qui font des ronds.",
        "Il ne dit rien. Il se laisse glisser le long du mur, jusqu'au sol, sous l'escalier, et il reste assis là, son verre vide à la main, à regarder le verre. Tu t'en vas. Sur la première marche de l'escalier, tu te retournes. Il a posé le verre par terre, à côté de lui, et sa main est restée ouverte, sur le pavé, comme une main qui attend qu'on la prenne.",
        "Tu ne sais pas ce que ça veut dire. Peut-être rien. Un homme pose un verre, il en reprend un autre. Tu remontes dans la ruelle. Tu as les mains qui tremblent, et tu ne sais pas si c'est de colère, ou de pitié, ou d'avoir fait la chose la plus cruelle de ta vie, qui est de donner de l'espoir à un homme qui l'avait noyé exprès.",
      ],
      choices: [{ label: "Reprendre ta tournée de la Basse-Fosse", fx: { quest: "ZO" }, back: "A2m_bf" }] },
    ZO_tait: { act: "II", title: "Le père de Soizic", place: "basse_fosse", ambiance: "ville",
      text: [
        "Tu promets. Il te lâche le bras. Il te remercie, très fort, trop fort, avec des larmes d'ivrogne qui coulent toutes seules, et il veut t'offrir un verre, et tu refuses, et il le boit à ta place, à ta santé, à la santé de la Pointe, à la santé de tous les noyés.",
        "Tu remontes les six marches. Dehors, il pleut sur la Basse-Fosse, une pluie sale qui lave mal. Tu penses à Soizic, à sa boîte à sel, au bateau bleu. Tu penses que tu as gardé un secret qui n'était pas le tien, et qu'il pèse à présent dans ta poche à côté des trois sous de Gobert, et qu'il pèsera plus lourd qu'eux.",
        "Le soir, à bord, tu essaies de te dire que c'était son droit, à lui, de rester mort. Tu y arrives presque. Puis tu penses que Soizic, elle, ne lui a rien demandé, et qu'elle n'aura jamais le droit de choisir, et tu n'y arrives plus.",
      ],
      choices: [{ label: "Reprendre ta tournée de la Basse-Fosse", fx: { quest: "ZO" }, back: "A2m_bf" }] },
  },
  extras: {
    people: {
      gourves: { name: "Fanch Gourvès", aka: ["le père de Soizic"], qui: "Un pêcheur de la Pointe-aux-Corneilles, parti à Morlenc il y a cinq ans, qu'on croit noyé." },
    },
    quests: [
      { id: "ZO", act: "II", kind: "annexe", title: "Le père de Soizic", start: "ZO_cave", doit: "assommoir", echo: ["zo:lettre", "zo:fille", "zo:tait"] },
    ],
  },
};
