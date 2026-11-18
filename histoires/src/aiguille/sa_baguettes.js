// L'Île Folle-Aiguille · side story « Les baguettes » (owes its question to Tolstoy's After the Ball: what does one do
// with a kind man after seeing what he does at dawn?). Act III, the ship's boy at Brisegrève: the commandant of the
// garrison, a charming old soldier, receives the boy who carries up the Cormorane's cask of wine, plays him a tune,
// shows him his daughter at the spinet, sends him off with sugared almonds. At dawn, in the lower yard, the same man
// has a deserter run the gauntlet between two rows of soldiers with rods, and strikes the soldier who hits too softly.
// The boy breaks the ranks with a cup of water (sa:eau), runs to fetch the daughter (sa:fille), or stays and watches to
// the end (sa:regarde). Wired in A3m_brisegreve.
module.exports = {
  passages: {
    SA_cadre: { act: "III", title: "Les baguettes", place: "brisegreve", ambiance: "village",
      text: [
        "Au-dessus du bureau du commandant, entre deux sabres croisés et un portrait de femme voilé de crêpe, il y a un grand cadre noir. Dedans, sous verre, des pages imprimées, serrées, jaunies, couvertes de notes à l'encre rouge, d'une écriture minuscule et appliquée.",
        "« Le règlement, dit le commandant, avec un sourire de collectionneur. Le règlement de discipline des places fortes, édition de ma jeunesse. Je l'ai annoté pendant quarante ans. Chaque article. Chaque peine. Chaque cas. » Il pose le doigt sur le verre, avec tendresse, comme sur la joue d'un enfant. « Vois-tu, mon enfant, un fort, c'est un navire de pierre. Trois cents hommes enfermés sur un rocher, loin de tout. Sans le règlement, ils se mangeraient entre eux en un mois. Avec, ils jouent aux dés et ils chantent. Le règlement, c'est ce qui permet d'être bon. »",
        "Il te montre un article, tout en bas, souligné trois fois. Tu lis, sans comprendre tout : *désertion en temps de paix, place forte insulaire*, et un chiffre.",
        "Puis Hermine rit, dans la pièce à côté, en se trompant à l'épinette, et le commandant se retourne vers le rire, et oublie le cadre, et son visage redevient tout rose et tout doux."
      ],
      choices: [
        { label: "Revenir à la coupe de dragées", back: "SA_tonneau" }
      ] },
    SA_tonneau: { act: "III", title: "Les baguettes", place: "brisegreve", ambiance: "village",
      fx: { meet: "kervern" },
      text: [
        { first: true, text: "Maître Gobert t'envoie porter au fort un tonnelet de vin de la Cormorane, un cadeau de la capitaine au commandant de la garnison, pour les bonnes relations. Tu le roules sur une brouette, tout le long de l'escalier des forçats, et tu arrives en haut trempé de sueur." },
        { first: true, text: "Le commandant Kervern t'ouvre lui-même la porte de son logis, dans la tour est. Un grand vieillard droit comme un mât, aux moustaches blanches, en vieil uniforme, avec un visage rose, rasé de frais, et des yeux bleus d'une bonté désarmante. Il te fait entrer. Il te fait asseoir. Il te fait servir un verre de lait, et des dragées dans une coupe d'argent, parce qu'un garçon ou une fille de ton âge, dit-il, doit avoir faim après l'escalier." },
        { first: true, text: "Il te parle comme à un égal. Il te demande d'où tu viens, ce que fait ton père. Quand tu dis aubergiste, il dit que c'est le plus beau métier du monde, parce qu'on y nourrit des inconnus. Il te raconte ses campagnes, en riant de lui-même, ses peurs, ses erreurs, une bataille où il s'était perdu dans le brouillard avec tout son bataillon et où il avait gagné par hasard." },
        { first: true, text: "Puis il appelle sa fille. Hermine Kervern a dix-huit ans, des cheveux d'or et un rire de grelot. Elle joue de l'épinette pour toi, un air de danse, et son père la regarde jouer avec des yeux mouillés de fierté. Il bat la mesure du bout de sa botte. Il dit : « Elle est tout ce que j'ai. Sa mère est morte en la mettant au monde. Quand elle joue, je redeviens un homme. »" },
        { first: true, text: "Tu redescends avec les poches pleines de dragées, et une sorte de chaleur dans la poitrine. Tu te dis qu'il y a des hommes qui sont bons jusqu'au bout des doigts, même dans un fort battu par la mer, même sous un uniforme." },
        { again: true, text: "Le salon de la tour est, l'épinette, la coupe de dragées. Le commandant bat la mesure du bout de sa botte." }
      ],
      choices: [
        { label: "Demander au commandant ce qu'est le grand cadre accroché au-dessus de son bureau", to: "SA_cadre", hide: { seen: "SA_cadre" } },
        { label: "Passer la nuit à bord, et remonter au fort à l'aube rendre la brouette", to: "SA_aube" }
      ] },
    SA_aube: { act: "III", title: "Les baguettes", place: "brisegreve", ambiance: "nature",
      text: [
        "À l'aube, tu remontes l'escalier des forçats avec la brouette vide, pour la rendre au magasin du fort. En haut, tu entends un tambour. Un tambour lent, sourd, régulier, et, entre les coups, un sifflement, et un bruit mat, et un autre, et un autre.",
        "Tu passes la poterne. La cour basse du fort est grise, mouillée de brume. Au milieu, deux rangées de soldats face à face, une centaine d'hommes, chacun avec une baguette de saule à la main, longue et souple. Entre les deux rangées, un homme qui avance. Il est torse nu. Il a les mains attachées, devant lui, à la crosse d'un fusil que deux sergents tiennent par les deux bouts, et le tirent, et le font marcher. À chaque pas, de chaque côté, une baguette siffle et s'abat sur son dos.",
        "Son dos n'est plus un dos. C'est une chose rouge, ruisselante, à vif, où la peau pend en lanières. Il trébuche. Les sergents le relèvent en tirant sur le fusil. Il dit quelque chose, toujours la même chose, d'une voix qui n'est plus une voix : « Frères, ayez pitié. Frères, ayez pitié. »",
        "Et derrière lui, marchant du même pas, il y a le commandant Kervern. Droit comme un mât. Moustaches blanches. Visage rose, rasé de frais. Il surveille les coups. Il dit au tambour de ralentir.",
        "Un petit soldat au nez cassé frappe mollement, pour ne pas faire mal. Le commandant s'arrête. Il le regarde. Il lui donne, de sa main gantée, une gifle en pleine figure, si forte que le soldat chancelle. « Je vais t'apprendre à caresser, dit-il, de sa voix douce. Frappe. »",
        "Le petit soldat frappe. Le dos gicle.",
        "Le commandant lève les yeux. Il te voit, à la poterne, avec ta brouette vide. Il te reconnaît. Il détourne le regard, très vite, comme si de rien n'était, et reprend sa marche derrière le supplicié."
      ],
      choices: [
        { label: "Demander à un soldat de garde ce que l'homme a fait", to: "SA_deserteur" }
      ] },
    SA_rouquin: { act: "III", title: "Les baguettes", place: "brisegreve", ambiance: "nature",
      text: [
        "Il est dans la rangée de gauche, le cinquième à partir de la poterne. Dix-huit ans, peut-être, un nez cassé de travers, une joue toute rouge, avec la marque des quatre doigts du gant, nette comme un tampon. Il a les larmes aux yeux. Il tient sa baguette à deux mains.",
        "Quand Ollivro passe devant lui, il frappe. Fort. De toutes ses forces, comme on frappe pour ne pas être frappé soi-même. Et à chaque coup, ses lèvres bougent. Tu es assez près pour lire sur ses lèvres. Il dit : pardon. Pardon. Pardon.",
        "À côté de lui, un vieux soldat frappe aussi, régulièrement, avec une sorte de lassitude de batteur en grange. Il a fait ça cent fois. Il fera ça cent fois encore. Il bâille, entre deux coups.",
        "Tu ne sais pas lequel des deux te fait le plus peur."
      ],
      choices: [
        { label: "Revenir à la poterne", back: "SA_deserteur" }
      ] },
    SA_deserteur: { act: "III", title: "Les baguettes", place: "brisegreve", ambiance: "nature",
      text: [
        { first: true, text: "Le soldat de garde, un vieux à moustaches grises, crache par terre. « Déserteur, dit-il. Ollivro. Vingt ans. Il a essayé de partir à la nage, la nuit, vers un caboteur. On l'a repêché. Mille coups. C'est le règlement. Il en est à quatre cents. Il ne verra pas les mille. Mais le règlement, c'est le règlement. Le commandant est très à cheval sur le règlement. »" },
        { first: true, text: "Il ajoute, plus bas : « C'est un brave homme, le commandant. Il donne des dragées aux enfants. Il pleure quand sa fille joue. Mais le règlement... »" },
        { first: true, text: "Le tambour bat. Ollivro fait un pas. La baguette siffle." },
        { first: true, text: "Tu as dans ta poche, encore, une poignée de dragées. Tu les sens contre ta cuisse. Elles te brûlent. Au bout de la cour, l'homme est tombé à genoux. Les sergents tirent sur le fusil. Il ne se relève pas. Il a les lèvres noires. Il a soif. Tu vois sa langue, qui cherche, entre les lèvres." },
        { again: true, text: "Le tambour bat. Ollivro est à genoux, au bout de la cour, les lèvres noires." }
      ],
      choices: [
        { label: "Chercher des yeux le petit soldat qui a reçu la gifle", to: "SA_rouquin", hide: { seen: "SA_rouquin" } },
        { label: "Prendre le gobelet du puits, et traverser les rangs pour lui donner à boire", fx: { flag: "sa:eau" }, to: "SA_eau" },
        { label: "Courir à la tour est chercher Hermine", fx: { flag: "sa:fille" }, to: "SA_fille" },
        { label: "Rester à la poterne, et regarder jusqu'au bout", fx: { flag: "sa:regarde" }, to: "SA_regarde" }
      ] },
    SA_eau: { act: "III", title: "Les baguettes", place: "brisegreve", ambiance: "nature",
      text: [
        "Tu prends le gobelet d'étain enchaîné au puits. Tu le remplis. Tu tires sur la chaîne jusqu'à l'arracher. Et tu traverses la cour en courant, entre les deux rangées, sous les baguettes levées, jusqu'à l'homme à genoux.",
        "Une baguette te cingle l'épaule, par erreur, ou pas. Tu ne sens rien. Tu t'agenouilles. Tu tiens le gobelet aux lèvres noires. Ollivro boit. Il boit comme une bête, en renversant la moitié sur son menton. Ses yeux te regardent. Il dit : « Merci, frère. » Il dit frère, à toi, qui n'es pas soldat.",
        "Le tambour s'est arrêté. Toute la cour s'est arrêtée. Le commandant Kervern est là, debout au-dessus de toi. Il ne crie pas. Il te prend par le bras, doucement, presque tendrement, et te relève, et t'emmène jusqu'à la poterne, comme on reconduit un invité qui s'est trompé de porte.",
        "« Tu ne comprends pas, dit-il à voix basse. C'est le règlement. Sans le règlement, il n'y a pas d'armée, et sans armée, il n'y a pas de fort, et sans fort, la mer vient. Va-t'en. Je ne dirai rien à ta capitaine. » Il te pousse dehors, et la poterne se referme. Derrière, le tambour reprend.",
        "Tu as, sur l'épaule, une marque rouge, en travers, qui brûle. Le soir, Maître Gobert la voit, ne demande rien, et te donne un peu de graisse. Tu jettes les dragées par-dessus bord, une à une. Les poissons les mangent."
      ],
      choices: [
        { label: "Redescendre au bourg", fx: { quest: "SA" }, back: "A3m_brisegreve" }
      ] },
    SA_fille: { act: "III", title: "Les baguettes", place: "brisegreve", ambiance: "nature",
      text: [
        "Tu cours. Tu cours jusqu'à la tour est, tu montes l'escalier quatre à quatre, tu frappes à la porte du logis. Hermine t'ouvre, en peignoir, ses cheveux d'or défaits, une tasse de chocolat à la main, et elle rit en te voyant si essoufflé{e}.",
        "Tu lui dis de venir. Tu lui dis de venir voir son père. Elle ne comprend pas. Elle te suit, en riant encore, en pantoufles, par les couloirs du fort, jusqu'à la poterne de la cour basse.",
        "Elle voit. Tu la regardes voir. Tu vois son rire s'arrêter au milieu, comme une montre qu'on écrase. Elle voit l'homme à genoux, la chose rouge à la place du dos, les baguettes, et son père, droit comme un mât, qui marche derrière, et qui surveille les coups.",
        "Le commandant se retourne. Il la voit. Il reste figé, une seconde, la main levée. Il a l'air, à cet instant, d'un très vieil homme. Puis il fait un geste au tambour. Le tambour s'arrête. Il dit, d'une voix enrouée : « Assez. Portez-le à l'infirmerie. » Les sergents détachent Ollivro. Ils l'emportent.",
        "Hermine remonte à la tour est, sans un mot, sans se retourner, en pantoufles. Le soir, on entend, depuis le bourg, au-dessus de la mer, quelqu'un qui joue de l'épinette, très mal, en frappant les touches, le même air de danse, encore et encore, en se trompant toujours à la même mesure.",
        "Tu ne sauras pas si tu as sauvé un homme ou détruit une maison. Peut-être les deux."
      ],
      choices: [
        { label: "Redescendre au bourg", fx: { quest: "SA" }, back: "A3m_brisegreve" }
      ] },
    SA_regarde: { act: "III", title: "Les baguettes", place: "brisegreve", ambiance: "nature",
      text: [
        "Tu restes. Tu restes à la poterne, avec ta brouette vide, et tu regardes, parce que tu ne peux pas faire autrement, et que tu as décidé, sans savoir pourquoi, qu'il fallait que quelqu'un regarde jusqu'au bout.",
        "Cela dure encore une heure. Ollivro tombe au six centième coup. On le relève. Il tombe au six cent cinquantième. On le met sur une civière, et on continue à le porter entre les rangs, couché sur le ventre, et les baguettes s'abattent sur la civière. Au sept centième, le sergent-major, un vieil homme blême, lève la main, et montre les lèvres du supplicié. Le commandant fait signe d'arrêter. On reprendra le reste quand il sera guéri. C'est le règlement.",
        "Le commandant passe devant toi, en sortant de la cour. Il s'arrête. Il te regarde. Il a les yeux bleus, très doux, et une petite tache de sang sur son gant gauche. Il sourit, un peu gêné, comme un homme qu'on surprend en robe de chambre. « Il faut tout voir, dit-il. C'est bien. Un jour, tu commanderas peut-être. » Il te tend une dragée, tirée de sa poche.",
        "Tu la prends. Tu la tiens dans ta main tout le long de l'escalier des forçats. En bas, sur la jetée, tu ouvres la main. La dragée a fondu. Tu as les doigts collés de sucre rose. Tu les laves dans la mer. Ils restent collés longtemps."
      ],
      choices: [
        { label: "Redescendre au bourg", fx: { quest: "SA" }, back: "A3m_brisegreve" }
      ] }
  },
  extras: {
    people: {
      kervern: { name: "le commandant Kervern", aka: ["le commandant de la garnison"], qui: "Commandant de la garnison de Brisegrève, grand vieillard aux moustaches blanches, qui donne des dragées aux enfants et pleure quand sa fille Hermine joue de l'épinette." }
    },
    quests: [
      { id: "SA", act: "III", kind: "annexe", title: "Les baguettes", start: "SA_tonneau", doit: "apresbal", echo: ["sa:eau", "sa:fille", "sa:regarde"] }
    ]
  }
};
