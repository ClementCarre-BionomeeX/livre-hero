// Act IV · "La patrouille", a night adventure from the camp of Brenne: an Esquarrois scout has not come back from the
// other bank. Across the Lisse at night, the reed island, a Corvannais patrol, and in a ruined mill two scouts of the
// two armies who no longer know which side they are on. The child leads ("tu").
var A = { act: "IV", noLead: true };
function P(o) { return Object.assign({}, A, o); }
module.exports = {
  IV_P_debut: P({ title: "L'éclaireur", place: "brenne",
    fx: { questSeen: "IV_Q_patrouille" },
    text: [
      "Le lieutenant Herbelot a vingt-cinq ans, un visage de notaire et des cernes jusqu'au menton. Il t'arrête devant la tente des éclaireurs, une liste roulée à la main, qu'il tient comme d'autres tiennent une épée.",
      "« Colin Mesnil. Éclaireur. Parti il y a trois nuits reconnaître les gués en aval. Pas revenu. Le capitaine dit qu'il a déserté. Je ne le crois pas. Colin a peur de l'eau ; il se lave au seau. Un homme comme ça ne passe pas la Lisse à la nage pour rejoindre l'ennemi. » Il hésite. « Envoyer des hommes m'est interdit. Vous, vous n'êtes pas à nous. »",
      { with: "ysolde", text: "Ysolde le regarde. « Tu as raison de ne pas le croire, dit-elle. Un homme qui déserte emporte ses bottes. Est-ce qu'il a laissé ses bottes ? » Herbelot la regarde, interdit. « Oui. »" },
    ],
    choices: [
      { label: "Partir à la tombée de la nuit", to: "IV_P_riviere" },
      { label: "« Pas maintenant. »", to: "IV_br" },
    ] }),
  IV_P_riviere: P({ title: "La Lisse, la nuit", place: "brenne",
    text: [
      "Herbelot vous a montré le gué aux Saules, en aval, sur une carte, à une lieue et demie du camp. L'eau monte à mi-cuisse, froide, rapide, et tire sur les jambes comme une main. Sur l'autre rive, des feux de garde, espacés. Entre deux feux, un trou noir de deux cents pas. C'est là qu'il faut passer.",
    ],
    choices: [
      { label: "Traverser entre les feux", test: { dom: "discretion", label: "Le gué", help: [{ if: { present: "pie" }, v: 15 }, { if: { present: "corbe" }, v: 10 }, { if: { present: "givre" }, v: 10 }, { if: { has: "iii:gue_paix" }, v: 5 }] },
        win: { fx: { ep: ["seance", 800] }, to: "IV_P_ile" }, lose: { to: "IV_P_patrouille" } },
    ] }),
  IV_P_patrouille: P({ title: "Qui vive", place: "brenne",
    text: [
      "Au milieu de l'eau, une lanterne se lève sur la rive d'en face. « Qui vive ? » En corvannais, puis en esquarrois, avec un accent épais. Deux piquiers descendent vers le gué, la pique basse.",
      { with: "lisandre", text: "Lisandre répond avant toi, en corvannais, d'une voix de femme de marché, quelque chose sur des anguilles et un mari ivre. Les piquiers se regardent, la pique toujours basse, mais moins sûre." },
    ],
    choices: [
      { label: "Les combattre dans l'eau", to: "IV_P_combat" },
      { label: "Leur parler", test: { dom: "social", label: "Les piquiers", help: [{ if: { present: "lisandre" }, v: 20 }, { if: { has: "corvanne:iv=ecoute" }, v: 15 }, { if: { has: "ilan:iv" }, v: 10 }] },
        win: { fx: { flag: "iv:patrouille_parle", ep: ["perso", 900] }, to: "IV_P_piquiers" }, lose: { to: "IV_P_combat" } },
    ] }),
  IV_P_combat: P({ title: "Le gué aux Saules",
    combat: { title: "La patrouille de Corvanne", enemies: ["soldat_bleu", "soldat_bleu"], terrain: "nature", range: "contact",
      flee: { dom: "nature", label: "Plonger et se laisser porter par le courant", to: "IV_P_courant" },
      win: { fx: { ep: ["seance", 1500] }, to: "IV_P_ile" }, lose: { fx: { pv: -4 }, to: "IV_P_courant" } },
    text: ["Ils gardent l'alarme pour eux : deux piques contre quelques ombres dans l'eau, ils pensent que ça suffit. L'eau froide te monte au ventre. Tes pieds sont deux pierres au bout de tes jambes."],
    choices: [] }),
  IV_P_courant: P({ title: "Le courant", place: "brenne",
    fx: { pv: -2 },
    text: ["Le courant vous emporte, vous roule, vous recrache trois cents pas plus bas sur une grève de galets, transis, à moitié noyés, de l'autre côté, avec du sable jusque dans les oreilles. Dans les roseaux, devant vous, une forme sombre : une île, et sur l'île, un toit."],
    choices: [{ label: "L'île", to: "IV_P_ile" }] }),
  IV_P_piquiers: P({ title: "Les anguilles", place: "brenne",
    text: [
      "Les piquiers finissent par rire. Le plus vieux baisse sa lanterne. « Passez, dit-il. Mais si vous cherchez votre éclaireur, il est au moulin de l'île. Avec le nôtre. Ça fait trois jours. On n'ose pas y aller. » Il crache dans l'eau, avec précision, à trois pas. « Ils ont perdu qui ils sont. L'un comme l'autre. Ça s'attrape peut-être. »",
    ],
    choices: [{ label: "L'île", to: "IV_P_ile" }] }),
  IV_P_ile: P({ title: "L'île aux roseaux", place: "brenne",
    text: [
      "L'île est un banc de vase de trois cents pas de long, couvert de roseaux plus hauts qu'un homme. Au milieu, un moulin à eau abandonné depuis la guerre des Trois Ans, la roue arrachée, le toit à moitié effondré. Une fenêtre est éclairée, au premier, sous les solives à nu. Une odeur de feu de bois et de poisson grillé.",
      "Et deux voix, qui parlent doucement, chacune dans sa langue, chacune à côté de l'autre, et qui rient.",
    ],
    choices: [{ label: "Entrer", to: "IV_P_moulin" }] }),
  IV_P_moulin: P({ title: "Le moulin", place: "brenne",
    text: [
      "Deux hommes assis par terre, devant un feu, partagent une anguille sur une broche. L'un porte un gambison d'Esquarre, l'autre la casaque bleue de Corvanne. Ils ont posé leurs armes dans un coin, ensemble, en tas : une pique, une arbalète, deux coutelas, un casque qui sert de marmite. À qui est quoi, ils l'ignorent.",
      "Ils te regardent entrer avec une curiosité tranquille. L'Esquarrois a un visage rond de paysan et des yeux très doux. « Bonsoir, dit-il. Vous êtes perdus aussi ? »",
      "Leur nom les a quittés. Leur armée aussi, et la raison des deux armées. Ils se sont rencontrés au gué, il y a trois nuits, et ils ont oublié en même temps, au même endroit, la même chose. Depuis, ils pêchent. À en juger par les arêtes au pied du mur, ils pêchent bien.",
      { with: "gaspard", text: "Gaspard renifle l'air du moulin, deux fois, comme un chien de berger. « Un Glaneur est passé ici, dit-il. Il y a trois nuits. Il n'a pris qu'une chose à chacun. La même. » Il regarde les deux hommes. « Il a pris l'ennemi. »" },
    ],
    choices: [
      { label: "Leur dire qui ils sont", to: "IV_P_dire" },
      { label: "Les ramener tous les deux à Brenne", to: "IV_P_deux" },
      { label: "Les laisser à leur île", fx: { flag: "iv:patrouille=ile" }, to: "IV_P_laisser" },
    ] }),
  IV_P_dire: P({ title: "Colin Mesnil", place: "brenne",
    text: [
      "Tu dis à l'Esquarrois qu'il s'appelle Colin Mesnil, qu'il est éclaireur, qu'il a un lieutenant qui l'attend et qui ne croit pas qu'il a déserté. Il écoute avec intérêt, poliment, la tête un peu penchée, comme on écoute l'histoire de quelqu'un d'autre. Puis il traduit, avec les mains, au Corvannais.",
      "Le Corvannais te regarde. Il désigne sa propre poitrine. Il attend.",
      "Son nom, tu l'ignores. Il est resté de l'autre côté du gué, avec ceux qui le savaient.",
    ],
    choices: [
      { label: "Ramener Colin seul", fx: { flag: "iv:patrouille=colin" }, to: "IV_P_colin" },
      { label: "Les ramener tous les deux à Brenne", to: "IV_P_deux" },
    ] }),
  IV_P_deux: P({ title: "Deux éclaireurs", place: "brenne",
    text: [
      "Ils viennent sans discuter. Ils prennent leurs armes au tas, au hasard : l'Esquarrois repart avec la pique bleue, le Corvannais avec l'arbalète d'Esquarre. L'erreur reste où elle est.",
      { after: "iv:patrouille_parle", text: "Au retour, sur le gué, la patrouille de Corvanne vous regarde passer, la lanterne levée, sans bouger." },
      { before: "iv:patrouille_parle", text: "Au retour, le gué est désert." },
      "Sur la rive d'Esquarre, Herbelot attend dans l'eau jusqu'aux genoux. Il voit Colin. Il voit l'autre. Il reste muet le temps que l'eau lui gagne les cuisses.",
      "« Le capitaine va le faire pendre, dit-il enfin. Le Corvannais. » Il regarde les deux hommes, qui se tiennent côte à côte, trempés, étonnés. « Ou alors, je le porte sur la liste de ma compagnie, sous un nom d'ici. Les listes, c'est moi qui les tiens. »",
    ],
    choices: [
      { label: "« Fais ça. »", fx: { flag: "iv:patrouille=deux", ep: ["perso", 2000] }, to: "IV_P_fin" },
    ] }),
  IV_P_colin: P({ title: "Le retour", place: "brenne",
    text: [
      "Colin te suit. À la porte du moulin, il se retourne vers l'autre, qui est resté assis devant le feu, la broche à la main. Ils se font un petit signe, celui qu'on fait à un voisin.",
      "À Brenne, Herbelot serre Colin dans ses bras, ce qui ne se fait pas entre un lieutenant et un éclaireur. Colin se laisse faire, poliment, les bras le long du corps. Le visage de son lieutenant lui reste étranger. Il dit qu'il aimerait bien retourner pêcher.",
    ],
    choices: [{ fx: { quest: "IV_Q_patrouille", ep: ["perso", 1000] }, back: "IV_br" }] }),
  IV_P_laisser: P({ title: "L'île", place: "brenne",
    text: ["Tu t'assieds avec eux. Tu manges un morceau d'anguille. Ils sont heureux, sur leur île, délivrés de leur nom et de leurs ennemis. Tu repars avant l'aube, sur la pointe des pieds. À Brenne, tu dis à Herbelot que Colin n'a pas déserté. Que l'affaire est plus compliquée. Il te regarde comme si tu lui avais menti, et il a peut-être raison."],
    choices: [{ fx: { quest: "IV_Q_patrouille", ep: ["perso", 800] }, back: "IV_br" }] }),
  IV_P_fin: P({ title: "Colin et Colas", place: "brenne",
    text: [
      "Le lendemain, sur la liste de la compagnie Herbelot, il y a deux noms de plus : Colin Mesnil, et en dessous, d'une écriture appliquée, Colas Mesnil, son frère. Les deux frères dorment sous la même tente. Chacun parle sa langue. Ils pêchent ensemble, le soir, au bord de la Lisse, et toute la compagnie a pris l'habitude de venir les regarder, en silence.",
    ],
    choices: [{ fx: { quest: "IV_Q_patrouille" }, back: "IV_br" }] }),
};
