// Act III · more encounters on the white plain (region outreblanc, gated on acte3:debut in base.js). The child leads
// ("tu" masculine). Each returns to the road.
function P(o) { return Object.assign({ act: "III", noLead: true, place: null }, o); }
var BACK = [{ label: "Reprendre la marche", to: "@route" }];
module.exports = {
  E3_bibliothecaire: P({ title: "Les livres blancs",
    text: [
      "Une femme assise sur une pile de livres, au milieu du blanc, qui en lit un. Elle tourne les pages, une à une, attentivement. Les pages sont blanches. Toutes. Elle lit quand même, en remuant les lèvres.",
      "« Ce sont les livres qu'on a oubliés, dit-elle sans lever les yeux. Pas perdus. Oubliés. Les gens les ont lus, et ils n'en ont rien gardé. Alors ils viennent ici, vides. » Elle tourne une page. « Moi, je me rappelle un peu de chacun. Une phrase. Un nom. Je les leur rends en lisant. Ça prend du temps. »",
    ],
    choices: [
      { label: "Lui demander ce qu'elle lit en ce moment", fx: { ep: ["perso", 300] }, to: "E3_bibliothecaire_page" },
      { label: "La laisser lire", to: "@route" },
    ] }),
  E3_bibliothecaire_page: P({ title: "Une phrase",
    text: ["« Un almanach, dit-elle. De Pont-de-Saule. L'année de la grande crue. » Elle suit du doigt une ligne invisible. « *Planter les fèves à la lune descendante, et ne pas oublier de remercier la rivière, même quand elle a tout pris.* » Elle sourit. « C'est la seule phrase dont je me souviens. Mais elle est bonne. » Sur la page, sous son doigt, pendant une seconde, tu crois voir de l'encre. Puis plus rien."],
    choices: BACK }),
  E3_horloge: P({ title: "L'horloge",
    text: [
      "Une horloge de parquet, haute comme un homme, debout toute seule au milieu de la plaine, sans maison autour. Le balancier bat. On l'entend de loin, dans le silence : tic, tac. Les aiguilles tournent. Il n'y a pas de chiffres sur le cadran.",
      "Elle a dû rester dans une maison qu'on a oubliée, quelque part, et la maison est partie, et l'horloge est restée, parce que personne ne s'était jamais vraiment intéressé à elle. Elle continue de compter. Elle ne sait pas quoi.",
    ],
    choices: [
      { label: "Ouvrir la porte du coffre, sous le cadran", fx: { ep: ["perso", 300] }, to: "E3_horloge_coffre" },
      { label: "Chercher la clé, et la remonter", fx: { ep: ["perso", 200] }, to: "E3_horloge_cle" },
      { label: "Écouter le balancier un moment, puis repartir", to: "@route" },
    ] }),
  E3_horloge_coffre: P({ title: "Le coffre de l'horloge",
    text: ["Dans le coffre, derrière le balancier, collé au bois, un papier jauni. Une écriture d'enfant : *Ici on a caché le chat le jour où le notaire est venu. Il s'appelait Moustache. On l'a pas donné.* Tu refermes. Le balancier continue. Quelque part, il y a eu une famille, un notaire, un chat qu'on n'a pas donné. L'horloge s'en souvient. C'est tout ce qu'elle sait, mais elle le sait."],
    choices: BACK }),
  E3_horloge_cle: P({ title: "La clé",
    text: ["La clé est accrochée à un clou, à l'intérieur du coffre, là où on l'accroche dans toutes les maisons. Tu la tournes. Le ressort se tend, cran par cran. Tu ne sais pas pourquoi tu le fais. Personne n'a besoin de cette heure-là. Mais quelqu'un, autrefois, la remontait chaque dimanche après la messe, et l'horloge l'attend. Tu remontes jusqu'au bout. Elle repart pour huit jours. Huit jours, ici, ça ne veut rien dire. Elle les comptera quand même."],
    choices: BACK }),
  E3_danseurs: P({ title: "Le bal",
    text: [
      "Des musiciens, au loin. Une vielle, un tambourin, une flûte. Tu t'approches. Une piste de danse, de planches, posée sur le blanc, avec des lampions accrochés à rien. Des gens dansent. Ils dansent très bien, en rond, puis en ligne, puis en rond.",
      "Chacun danse avec quelqu'un qui n'est pas là. Une femme tourne, les bras levés sur une épaule absente. Un vieux s'incline devant personne, et attend qu'on lui rende sa révérence. Ils ont oublié avec qui ils dansaient. Pas comment.",
    ],
    choices: [
      { label: "Inviter le vieux qui s'incline", fx: { ep: ["perso", 400], flag: "iii:bal" }, to: "E3_danseurs_vieux" },
      { label: "Passer au large", to: "@route" },
    ] }),
  E3_danseurs_vieux: P({ title: "Une bourrée",
    text: ["Tu t'inclines devant lui. Il se redresse. Il te prend les mains. Il danse comme on danse dans les villages, en frappant du pied, en tournant trop vite, et il rit. Il ne sait pas qui tu es. Toi non plus, tu ne sais pas qui il est. À la fin de la bourrée, il te lâche les mains, et il s'incline de nouveau. Devant personne. Tu as pris la place un moment. Elle est de nouveau vide. Il avait l'air content quand même."],
    choices: BACK }),
  E3_berger: P({ title: "Le berger sans moutons",
    text: [
      "Un berger, son bâton à la main, son chien à ses pieds, qui garde un troupeau qui n'est pas là. Il compte. Il compte à voix haute, en touchant chaque fois du bout du bâton un mouton qui n'existe pas. Il en compte cent douze. Son chien le regarde faire, la tête penchée.",
      "« Il en manque, dit-il, en te voyant. Il en manque tous les jours. J'en avais trois cents. » Il recommence à compter. « Ce n'est pas qu'ils partent. C'est que je ne me rappelle plus qu'ils étaient là. »",
    ],
    choices: [
      { label: "L'aider à compter, en touchant le vide avec lui", fx: { ep: ["perso", 300] }, to: "E3_berger_compte" },
      { label: "Caresser le chien, et repartir", to: "@route" },
    ] }),
  E3_berger_compte: P({ title: "Cent treize",
    text: ["Tu comptes avec lui. Tu touches le vide. Au cent treizième, son chien se lève, va renifler l'endroit que tu viens de toucher, et remue la queue. Le berger s'arrête. Il regarde le chien. Il regarde l'endroit. « La Blanchette, dit-il, très doucement. Celle qui boitait. » Il pose la main sur le vide, et sous sa main, une seconde, il y a de la laine. Puis il n'y a plus rien. Mais il a dit cent treize. Hier, il en avait cent douze."],
    choices: BACK }),
};
