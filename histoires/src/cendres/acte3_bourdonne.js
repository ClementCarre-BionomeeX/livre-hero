// Act III · more bells of Bourdonne, the town of the bells of forgotten places (opened once the Sonneuse has spoken):
// her own bell of Vaure-sur-Lac, a school bell, a ship's bell, and a wedding bell for two old people who wait at the
// two ends of a street. The child leads ("tu", masculine).
var A = { act: "III", noLead: true };
function P(o) { return Object.assign({}, A, o); }
module.exports = {
  III_b_vaure: P({ title: "La cloche de Vaure-sur-Lac", place: "cloches",
    fx: { questSeen: "III_Q_vaure" },
    text: [
      "Au coin de la grand-place, un petit clocher de village, couvert d'algues sèches et de coquilles d'eau douce. La cloche est verte de vert-de-gris. Des herbes de lac pendent encore au battant.",
      "La Sonneuse t'a suivi. Elle regarde sa cloche comme on regarde un vieux chien. « Cent cinquante ans, dit-elle. Plus personne là-haut ne sait que Vaure a existé. Ni le nom, ni le lac, ni l'église. Rien. »",
    ],
    choices: [
      { label: "La faire sonner à la main", test: { dom: "combat", label: "La cloche verte", help: [{ if: { present: "ysolde" }, v: 10 }, { if: { present: "corbe" }, v: 10 }] },
        win: { fx: { ep: ["perso", 600] }, to: "III_b_vaure_sonne" }, lose: { to: "III_b_vaure_muette" } },
      { label: "Lui promettre de parler de Vaure, quand tu remonteras", fx: { flag: "iii:vaure_promis", ep: ["perso", 800] }, to: "III_b_vaure_promesse" },
    ] }),
  III_b_vaure_sonne: P({ title: "Un coup", place: "cloches",
    text: [
      "Tu tires sur le battant de toutes tes forces. La cloche bouge, à peine, et frappe un coup, un seul, sourd, mouillé, comme une cloche qui sonne sous l'eau.",
      "La Sonneuse a fermé les yeux. « Ce n'est pas pareil, dit-elle. Quand on la sonne d'ici, ça ne compte pas. » Elle rouvre les yeux. « Mais c'était beau. Merci. »",
    ],
    choices: [{ label: "Revenir sur la place", fx: { quest: "III_Q_vaure" }, to: "III_c_ville" }] }),
  III_b_vaure_muette: P({ title: "Le battant", place: "cloches",
    text: ["Le battant est soudé par la rouille. Tu t'y suspends de tout ton poids. Rien. La Sonneuse rit, d'un rire de vieille, plein de gencives. « Elle est têtue, dit-elle. Comme moi. Elle attend qu'on pense à elle. Pas qu'on la tire. »"],
    choices: [
      { label: "Lui promettre de parler de Vaure, quand tu remonteras", fx: { flag: "iii:vaure_promis", ep: ["perso", 800] }, to: "III_b_vaure_promesse" },
      { label: "Revenir sur la place", fx: { quest: "III_Q_vaure" }, to: "III_c_ville" },
    ] }),
  III_b_vaure_promesse: P({ title: "Vaure", place: "cloches",
    text: [
      "Elle te fait répéter. Vaure-sur-Lac. L'église Saint-Loup. Le lac, les barques plates, les anguilles. Le barrage de l'an mil quatre cent et quelque. Elle-même : Gillette-la-Sonneuse, qui sonnait l'angélus avec un quart d'heure de retard parce qu'elle avait les jambes courtes.",
      "« Une fois, dit-elle. Dis-le une fois, à quelqu'un, là-haut. Ça suffit pour un coup. » Elle te serre la main, très fort, avec ses doigts tordus. « Et si tu oublies, ne t'en fais pas. J'ai l'habitude. »",
    ],
    choices: [{ label: "Revenir sur la place", fx: { quest: "III_Q_vaure" }, to: "III_c_ville" }] }),

  III_b_ecole: P({ title: "La cloche d'école", place: "cloches",
    text: [
      "Une petite tour de brique, avec une cloche à main suspendue à un crochet, comme on en voit aux portes des écoles de campagne. Au pied de la tour, des bancs. Sur les bancs, des enfants, une vingtaine, en tabliers gris, qui récitent ensemble, d'une voix monotone, une leçon que personne n'écoute.",
      "Ils récitent les noms des rivières d'un pays qui n'existe plus. Ils s'arrêtent toujours au même endroit, après la septième rivière, et recommencent.",
      "Debout devant eux, une maîtresse d'école, jeune, avec une baguette, qui attend la huitième rivière comme on attend le coche.",
    ],
    choices: [
      { label: "Chercher la huitième rivière", test: { dom: "savoir", label: "La leçon", help: [{ if: { present: "hylas" }, v: 20 }, { if: { has: "passe:temple" }, v: 15 }, { if: { present: "lisandre" }, v: 5 }] },
        win: { fx: { flag: "iii:ecole", ep: ["perso", 900] }, to: "III_b_ecole_riviere" }, lose: { to: "III_b_ecole_rien" } },
      { label: "Revenir sur la place", to: "III_c_ville" },
    ] }),
  III_b_ecole_riviere: P({ title: "La huitième rivière", place: "cloches",
    text: [
      "Tu ne connais pas ce pays. Mais tu écoutes les sept noms, et tu entends qu'ils se suivent dans l'ordre de l'alphabet, comme les maîtres d'école aiment les ranger. Tu en proposes un, qui commence par la bonne lettre et qui sonne comme les autres.",
      "La maîtresse te regarde, interdite. Puis elle sourit. Ce n'est pas la bonne. Mais elle la répète aux enfants, et les enfants la répètent, et continuent, la neuvième, la dixième, toute la leçon, jusqu'au bout, et à la fin, ils se lèvent tous ensemble et s'en vont en courant, en criant. La classe est finie.",
      "La maîtresse sonne sa cloche à main, une fois. Puis elle s'en va aussi.",
    ],
    choices: [{ label: "Revenir sur la place", to: "III_c_ville" }] }),
  III_b_ecole_rien: P({ title: "La septième rivière", place: "cloches",
    text: ["Tu ne trouves pas. La maîtresse te regarde avec une immense politesse, et se retourne vers ses élèves. Ils reprennent du début. Tu les entends encore réciter quand tu tournes le coin de la rue, et tu sais qu'ils s'arrêteront à la septième."],
    choices: [{ label: "Revenir sur la place", to: "III_c_ville" }] }),

  III_b_navire: P({ title: "La cloche du navire", place: "cloches",
    text: [
      "Une tour faite de planches de navire, goudronnées, avec des hublots en guise de fenêtres. En haut, une cloche de bord, en bronze, avec un nom gravé : LA FIDÈLE, et une date. Au pied de la tour, un marin assis sur un rouleau de cordage, qui épisse un bout avec des gestes très lents.",
      "« Quel jour on est ? demande-t-il sans lever la tête. On devait rentrer le jour de la Saint-Martin. Ma femme m'attend avec des châtaignes. »",
    ],
    choices: [
      { label: "« C'est la Saint-Martin. Tu peux rentrer. »", fx: { flag: "iii:navire=rentre", ep: ["perso", 500] }, to: "III_b_navire_rentre" },
      { label: "« Je ne sais pas. Ici, il n'y a pas de jours. »", fx: { flag: "iii:navire=verite" }, to: "III_b_navire_verite" },
    ] }),
  III_b_navire_rentre: P({ title: "Les châtaignes", place: "cloches",
    text: ["Il lève la tête. Il sourit, de toutes ses dents gâtées. Il range son épissoir, se lève, ajuste son bonnet, et s'en va, d'un pas de marin, vers les files qui marchent. Au-dessus de toi, la cloche de La Fidèle sonne un coup, tout seul, comme quand un navire entre au port."],
    choices: [{ label: "Revenir sur la place", to: "III_c_ville" }] }),
  III_b_navire_verite: P({ title: "Pas de jours", place: "cloches",
    text: ["Il hoche la tête, lentement, comme s'il s'en doutait. « Alors je vais continuer d'épisser, dit-il. Il faut que le bout soit prêt quand on rentrera. » Il se remet au travail. Le bout fait déjà cinquante brasses, enroulé autour de la tour."],
    choices: [{ label: "Revenir sur la place", to: "III_c_ville" }] }),

  III_b_noces: P({ title: "La cloche des noces", place: "cloches",
    text: [
      "Une rue droite, bordée de petits clochers de chapelles. À un bout de la rue, un vieil homme en habit de noce, élimé, une fleur fanée à la boutonnière, qui attend. À l'autre bout, une vieille femme en robe blanche jaunie, un voile sur les cheveux, qui attend aussi.",
      "Ils se tournent le dos. Ils attendent quelqu'un. Ils attendent depuis si longtemps qu'ils ne se souviennent plus qui. Au milieu de la rue, dans le plus petit des clochers, une cloche de noces, fleurie de rubans blancs.",
    ],
    choices: [
      { label: "Les amener l'un vers l'autre", test: { dom: "social", label: "Les noces", help: [{ if: { present: "lisandre" }, v: 15 }, { if: { present: "pie" }, v: 10 }, { if: { present: "corbe" }, v: 5 }] },
        win: { fx: { flag: "iii:noces", ep: ["perso", 1200] }, to: "III_b_noces_ok" }, lose: { to: "III_b_noces_rate" } },
      { label: "Revenir sur la place", to: "III_c_ville" },
    ] }),
  III_b_noces_ok: P({ title: "Le bras", place: "cloches",
    text: [
      "Tu vas chercher le vieil homme. Tu lui dis qu'on l'attend, au bout de la rue. Il te suit, poliment, sans y croire. La vieille femme se retourne quand vous arrivez. Ils se regardent.",
      "Ils ne se reconnaissent pas. Ça se voit. Il y a cinquante ans d'oubli entre eux. Mais le vieil homme, au bout d'un moment, lui tend le bras, comme on fait, et elle le prend, comme on fait, et ils remontent la rue ensemble, au pas, très lentement.",
      "La petite cloche fleurie sonne. Toute seule. À la volée.",
      { with: "lisandre", text: "Lisandre s'essuie les yeux d'un revers de main furieux. « Je ne pleure jamais aux mariages, dit-elle. J'en ai chanté cent. » Elle renifle. « Ça doit être l'air d'ici. »" },
    ],
    choices: [{ label: "Revenir sur la place", to: "III_c_ville" }] }),
  III_b_noces_rate: P({ title: "Les deux bouts", place: "cloches",
    text: ["Le vieil homme refuse de bouger. « Elle va venir, dit-il. Elle a dit qu'elle viendrait. » À l'autre bout, la vieille femme dit la même chose, avec les mêmes mots. Tu restes un moment au milieu de la rue, entre eux deux, sous la cloche muette. Tu ne sais pas comment leur dire."],
    choices: [{ label: "Revenir sur la place", to: "III_c_ville" }] }),
};
