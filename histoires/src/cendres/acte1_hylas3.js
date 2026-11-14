// Act I · Hylas goes out into Pallanche for an afternoon, blind, by ear and by nose (Hylas leads, "tu" masculine, an
// old man), opened from HY_tour. The Pont-Neuf, the organ of Saint-Gilles, and in the Teinturiers street a woman he
// loved at twenty, Bérengère, whose cession of him he sealed himself fifty years ago. She does not know him. He knows
// her voice. hylas:berengere=dit|tu.
var HY = { act: "I", place: "pallanche", noLead: true };
function P(o) { return Object.assign({}, HY, o); }
var BACK = [{ label: "Reprendre ta canne, et marcher", to: "HY_V_ville" }];
module.exports = {
  HY_V_sortie: P({ title: "La porte de l'Est",
    text: [
      "Tu sors par la porte de l'Est, celle des livreurs. Le garde te connaît ; il ne te demande rien. Un vieux greffier aveugle qui sort prendre l'air, ça ne s'évade pas. Il a raison.",
      { if: { has: "hylas:page" }, text: "Page Onze te suit, un pas en arrière. Tu lui dis de marcher à côté. Elle ne sait pas faire. Elle essaie. Elle se cogne à toi deux fois avant le premier carrefour." },
      "Dehors, Pallanche te tombe dessus d'un coup, comme une averse. Les cris, les roues, les sabots, les cloches, les odeurs. Tu n'es pas sorti en plein jour depuis l'hiver. Tu avais oublié que la ville faisait tant de bruit.",
    ],
    choices: [{ label: "Marcher au hasard, à l'oreille", to: "HY_V_ville" }] }),
  HY_V_ville: P({ title: "Pallanche, à l'oreille", hub: true,
    text: [
      "Tu marches, la canne devant toi, la main gauche frôlant les murs. Tu connais Pallanche comme on connaît un vieux livre : par cœur, et pas tout à fait. Des rues ont changé de son. Des boutiques ont changé d'odeur.",
    ],
    choices: [
      { label: "Le bruit de l'eau, vers le sud", hide: { seen: "HY_V_pont" }, to: "HY_V_pont" },
      { label: "L'orgue, qui joue faux, à Saint-Gilles", hide: { seen: "HY_V_orgue" }, to: "HY_V_orgue" },
      { label: "L'odeur d'indigo et de garance, rue des Teinturiers", hide: { seen: "HY_V_teinturiers" }, to: "HY_V_teinturiers" },
      { label: "Les cloches de vêpres, depuis un banc de la place des Carmes", hide: { seen: "HY_V_cloches" }, to: "HY_V_cloches" },
      { back: "HY_tour" },
    ] }),
  HY_V_pont: P({ title: "Le Pont-Neuf",
    text: [
      "Le Pont-Neuf. Tu le sais à l'écho, sous tes pas, qui change : le vide en dessous. Tu t'accoudes au parapet. La Pallante coule, épaisse, en charriant ce qu'elle charrie. Tu l'écoutes. Une rivière, c'est une phrase qui ne finit pas.",
      "Sous la deuxième arche, des voix d'hommes, des dés qu'on secoue, un juron. Le tripot. Il était déjà là quand tu avais vingt ans. Tu y as perdu, une nuit, ta bourse, et gagné un ami, qui est mort depuis. C'était une bonne nuit.",
      { if: { has: "hylas:page" }, text: "Page Onze se penche sur le parapet, et elle dit, de sa voix plate : « Il y a des choses dans l'eau. Un chat mort. Une planche. Un bonnet. » Elle s'arrête. « Pourquoi vous voulez savoir ? » Tu ne voulais pas savoir. Tu lui dis merci quand même. Elle ne sait pas quoi faire de ce merci." },
    ],
    choices: BACK }),
  HY_V_orgue: P({ title: "L'orgue de Saint-Gilles",
    text: [
      "Saint-Gilles. L'orgue joue faux : un tuyau, dans les graves, qui grince comme une porte. Tu entres. La nef est fraîche, elle sent la cire et la pierre mouillée. L'organiste s'acharne sur un choral, et chaque fois que la basse descend, le tuyau grince.",
      "Tu t'assieds au dernier rang. Tu connais ce choral. Tu l'as chanté, enfant, dans cette église, avant d'entrer à la Chancellerie. Tu te rappelles les paroles. Toutes. Tu t'en étonnes. Tu croyais les avoir oubliées depuis soixante ans.",
    ],
    choices: [
      { label: "Chanter, à mi-voix, avec l'orgue", fx: { ep: ["perso", 300] }, to: "HY_V_orgue_chant" },
      { label: "Écouter jusqu'à la fin, et sortir", to: "HY_V_ville" },
    ] }),
  HY_V_orgue_chant: P({ title: "Le choral",
    text: ["Tu chantes. Ta voix est cassée, vieille, juste. Là-haut, à la tribune, l'organiste s'arrête, une seconde. Puis il reprend, plus lentement, pour toi, et il évite la note qui grince, en la remplaçant par une autre, qui n'est pas dans la partition et qui est plus belle. Vous finissez ensemble. Personne n'applaudit, dans une église. Il tire un jeu, en haut, et l'orgue soupire, une fois, longuement. C'est pareil."],
    choices: BACK }),
  HY_V_teinturiers: P({ title: "Rue des Teinturiers",
    text: [
      "Rue des Teinturiers. L'odeur d'abord, qui prend à la gorge : l'indigo, la garance, l'urine des cuves, l'alun. Le ruisseau, au milieu de la rue, est de trois couleurs. Tu l'entends couler. Tu sais, sans le voir, qu'il est bleu à gauche et rouge à droite.",
      "Devant une boutique, une voix de vieille femme marchande avec une cliente. Une voix rauque, gaie, qui roule les r à la façon des gens de la Lisse. Tu t'arrêtes. Ta canne s'arrête. Ton cœur, aussi, un peu.",
      "Tu connais cette voix. Tu l'as connue à vingt ans. Elle disait ton prénom en le roulant, comme ça. Elle s'appelait Bérengère. Et il y a cinquante ans, au Bureau des Cessions, c'est toi, jeune greffier, qui as scellé sa cession. Elle t'a cédé, toi, pour deux sous et la paix. Tu as posé ton sceau en bas de la fiche. Tu n'as rien dit. Personne ne savait.",
    ],
    choices: [
      { label: "Entrer dans la boutique", to: "HY_V_berengere" },
      { label: "Repartir, avant qu'elle te voie", fx: { flag: ["hylas:berengere", "hylas:berengere=fui"] }, back: "HY_V_ville" },
    ] }),
  HY_V_berengere: P({ title: "Bérengère",
    text: [
      "Une clochette, au-dessus de la porte. L'odeur des écheveaux de laine teinte, pendus aux poutres. « Bonjour, monsieur, dit la voix. Vous cherchez quelque chose ? » Elle ne te connaît pas. Évidemment. Tu as été bien cédé. Tu y as veillé toi-même.",
      "Tu demandes un ruban. Bleu. Elle t'en fait toucher trois, en te disant les nuances, gentiment, comme on parle aux aveugles, un peu trop fort. Elle te raconte que son mari était teinturier, qu'il est mort, qu'elle tient la boutique avec sa fille. Elle a eu une bonne vie, dit-elle. On ne peut pas se plaindre.",
    ],
    choices: [
      { label: "Lui dire qui tu es", fx: { flag: ["hylas:berengere", "hylas:berengere=dit"], ep: ["perso", 600] }, to: "HY_V_berengere_dit" },
      { label: "Payer le ruban, et ne rien dire", fx: { gold: -1, flag: ["hylas:berengere", "hylas:berengere=tu"], ep: ["perso", 600] }, to: "HY_V_berengere_tu" },
    ] }),
  HY_V_berengere_dit: P({ title: "Ce que tu dis",
    text: [
      "Tu le lui dis. Le prénom. Le bal des Teinturiers, il y a plus de cinquante ans. La barque sous le Pont-Neuf. Le Bureau, ensuite. Elle t'écoute sans t'interrompre. Quand tu as fini, elle se tait longtemps.",
      "« Je ne m'en souviens pas, dit-elle enfin. Je suis désolée. » Elle le dit doucement. Elle n'est pas désolée pour elle. « Mais je me suis toujours demandé pourquoi je n'aimais pas passer sous le Pont-Neuf. Je fais le tour par le pont des Moulins. Toute ma vie. » Elle te met le ruban dans la main. Elle ne veut pas que tu paies.",
    ],
    choices: BACK }),
  HY_V_berengere_tu: P({ title: "Ce que tu tais",
    text: [
      "Tu paies. Elle te rend trop de monnaie, parce qu'elle s'est trompée, ou parce qu'elle a vu ta robe usée. Tu te tais. Tu prends le ruban. Tu sors. La clochette sonne, derrière toi.",
      "Dans la rue, tu entends sa voix qui reprend, avec la cliente suivante, et qui roule les r. Elle a eu une bonne vie. Tu y as veillé toi-même. Tu restes un moment devant la boutique, à l'écouter, avec le ruban dans ton poing, puis tu t'en vas.",
    ],
    choices: BACK }),
};
