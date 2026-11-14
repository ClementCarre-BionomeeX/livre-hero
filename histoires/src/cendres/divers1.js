// A few more small corners: in the cave of the Corbeaux, the white raven (Act II, Corbe leads, "tu" feminine); at the
// moutier a year later, the bell the brothers recast (Act IV, the child leads); on the last night in Valcendre, the
// ramparts where the watch has nothing to watch (Act III, the child leads).
function P(base) { return function (o) { return Object.assign({ noLead: true }, base, o); }; }
var P2 = P({ act: "II", place: "lacnoir" }), P4 = P({ act: "IV", place: "moutier" }), P3 = P({ act: "III", place: "valcendre" });
module.exports = {
  II_g_corbeau_blanc: P2({ title: "Le corbeau blanc",
    text: [
      "Parmi les centaines de corbeaux de la grotte, un seul est blanc. Il se tient à l'écart, sur une corniche basse, et les autres ne s'approchent pas de lui. Il te regarde depuis que tu es entrée.",
      "Au clan, on dit qu'un corbeau blanc naît une fois par génération, et qu'il porte le nom de quelqu'un que tout le monde a oublié. On le laisse en paix, à l'écart des restes. On attend qu'il le dise.",
    ],
    choices: [
      { label: "Lui tendre un morceau de viande séchée", fx: { food: -1, ep: ["perso", 400], flag: "nord:corbeau_blanc" }, to: "II_g_corbeau_blanc_viande" },
      { label: "Le laisser à sa corniche", to: "II_N2_grotte" },
    ] }),
  II_g_corbeau_blanc_viande: P2({ title: "Ce qu'il dit",
    text: [
      "Il descend de sa corniche, en deux sauts. Il prend la viande dans ta main, délicatement, et il l'avale. Puis il te regarde, la tête penchée, et il ouvre le bec. Il ne croasse pas. Il dit un mot. Un seul. Deux syllabes, avec une voix d'enfant.",
      "Le mot t'échappe : il vient d'une langue étrangère au clan comme aux gens d'en bas. C'est une langue en boucles, douce, qui sonne comme une berceuse. Le corbeau remonte sur sa corniche. Il ne le redira pas.",
    ],
    choices: [
      { label: "Essayer de répéter le mot", to: "II_g_corbeau_blanc_mot" },
      { back: "II_N2_grotte" },
    ] }),
  II_g_corbeau_blanc_mot: P2({ title: "Deux syllabes",
    text: ["Tu essaies. Ta bouche ne sait pas faire les boucles. Ce qui sort ressemble à un mot du clan, un mot pour la neige qui tient. Le corbeau, là-haut, secoue la tête, comme un maître devant un mauvais élève. Puis il cache sa tête sous son aile. Tu gardes les deux syllabes, telles que tu les as entendues, quelque part derrière les yeux."],
    choices: [{ back: "II_N2_grotte" }] }),

  IV_m_cloche: P4({ title: "La cloche refondue",
    text: [
      "Dans la cour du moutier, les frères ont creusé une fosse et refondu la cloche que le géant avait fêlée en posant la main sur le toit. Elle est neuve, d'un bronze encore rose. Elle n'est pas encore montée. Elle est posée sur deux tréteaux, en attendant.",
      "Frère Odon te montre l'inscription, autour de la lèvre. D'habitude, on y grave le nom du saint, et du parrain. Sur celle-ci, il n'y a qu'une phrase : *Je sonne pour ceux qu'on a oubliés, et pour qu'on ne les oublie pas deux fois.*",
    ],
    choices: [
      { label: "Aider les frères à la monter", test: { dom: "nature", label: "La cloche", help: [{ if: { present: "corbe" }, v: 10 }, { if: { present: "gaspard" }, v: 10 }, { if: { item: "corde" }, v: 10 }] },
        win: { fx: { flag: "iv:cloche_moutier", ep: ["perso", 800] }, to: "IV_m_cloche_montee" }, lose: { fx: { pv: -2 }, to: "IV_m_cloche_rate" } },
      { label: "Revenir sous les arcades", back: "IV_moutier" },
    ] }),
  IV_m_cloche_montee: P4({ title: "Le premier coup",
    text: ["Vous la montez à la corde, à huit, frères et voyageurs mêlés, en chantant pour tenir l'effort. Elle monte. Elle se cale sur son joug. Frère Odon tire la corde, une fois. Le son descend dans la vallée, rond, lent, très long. Au bout d'un moment, très loin, au nord, une autre cloche lui répond. Personne ne sait laquelle."],
    choices: [{ label: "Revenir sous les arcades", back: "IV_moutier" }] }),
  IV_m_cloche_rate: P4({ title: "La corde",
    text: ["La corde glisse, la cloche redescend d'un coup, et vous la retenez de justesse, à trois pieds du sol, les paumes en feu. Frère Odon décide qu'on la montera demain, à la fraîche, avec plus de bras. Elle reste sur ses tréteaux. Elle attendra. Elle a l'habitude, dit-il."],
    choices: [{ label: "Revenir sous les arcades", back: "IV_moutier" }] }),

  III_a_remparts: P3({ title: "Les remparts", place: "valcendre",
    text: [
      "Sur les remparts de Valcendre, la garde fait sa ronde. Des soldats en armure d'argent terni, qui marchent depuis trois cents ans, de tour en tour, et qui regardent le blanc. L'horizon est vide, et l'a toujours été. Ils regardent quand même.",
      "Le capitaine de la garde s'arrête à côté de toi. « Tu pars demain, dit-il. Pour là-haut. » Il regarde le blanc. « Si tu vois un pays avec des collines vertes et une rivière qui fait un coude, dis-lui qu'on monte encore la garde. Il ne s'en souvient sûrement pas. Dis-le-lui quand même. »",
    ],
    choices: [
      { label: "« Je le dirai. »", fx: { ep: ["perso", 400], flag: "iii:remparts" }, to: "III_a_nuit" },
      { label: "« Depuis quand montez-vous la garde ? »", to: "III_a_remparts_capitaine" },
    ] }),
  III_a_remparts_capitaine: P3({ title: "Le capitaine",
    text: [
      "« Depuis le jour où on nous a oubliés, dit-il. Le matin, on gardait une ville. Le soir, on gardait ça. » Il montre le blanc. « On n'a pas eu d'ordre de quitter le poste. Alors on ne l'a pas quitté. »",
      "Il ôte son gant. Sa main est grise, transparente au bout des doigts. « Les hommes s'usent, dit-il. Je les vois s'user. Moi aussi. Un jour, il n'y aura plus que les armures qui feront la ronde. Elles la feront bien. Elles ont l'habitude. »",
    ],
    choices: [{ label: "« Je le dirai, là-haut. »", fx: { ep: ["perso", 400], flag: "iii:remparts" }, to: "III_a_nuit" }] }),
};
