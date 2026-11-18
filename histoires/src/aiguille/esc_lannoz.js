// L'Île Folle-Aiguille · the port of call of Lannoz, beyond the sold boy and the scurvy grass. For the child: the girl
// with the black sheep and the lights over the bogs; the wake for the drowned, with empty coffins (lannoz:veillee); the
// peat-cutters and what the bog keeps (lannoz:tourbe); the cairn on the hill, from which one sees the brig's men beat
// the moor with dogs (lannoz:battue, read at the stream). For the doctor: a birth in a stone hut (lannoz:naissance or
// lannoz:mort_nee); the rector's register of the drowned and a captain the sea brought back eleven years ago
// (lannoz:brehat, read when the Saint-Fiacre's orders are found); a walk on the moor with Benoît (lannoz:benoit).
module.exports = {
  passages: {
    // ---------------------------------------------------------------- the child
    XQ_l_bergere: { act: "III", title: "Les moutons noirs", place: "lannoz", ambiance: "nature",
      text: [
        "Sur la lande, au-dessus du village, un troupeau de moutons noirs. Pas gris, pas bruns : noirs, d'un noir de suie, avec des yeux jaunes à pupille fendue, qui te regardent passer tous ensemble en tournant la tête du même mouvement, comme une assemblée de magistrats.",
        "La bergère a dix ans, des jambes nues griffées d'ajoncs, une cape de laine noire, elle aussi, et un bâton plus grand qu'elle. Elle s'appelle Nolwenn. Elle ne parle pas la langue du Ponant, ou très mal, mais elle parle avec les mains, et avec les yeux, et cela suffit.",
        "Elle te montre la lande. Elle te montre les tourbières, les plaques d'eau noire. Et elle te montre, avec beaucoup de gestes, ce qu'il y a dessus, la nuit. Des lumières. De petites flammes bleues, qui dansent au-dessus de l'eau, et qui s'en vont quand on s'approche, et qui reviennent derrière vous.",
        "« Les morts, dit-elle, en appuyant sur le mot, le seul qu'elle sache bien. Les morts. Ils cherchent. » Elle fait le geste de quelqu'un qui cherche par terre, plié en deux. « Pas suivre. Jamais. Toi, pas suivre. »",
        "Puis elle te donne, sans raison, une pelote de laine noire, grosse comme le poing, filée par elle, qui sent le mouton et la fumée.",
      ],
      choices: [{ label: "La remercier, et redescendre", back: "A3o_lannoz" }] },
    XQ_l_veillee: { act: "III", title: "La veillée des noyés", place: "lannoz", ambiance: "nuit",
      text: [
        "Le soir, au village, il y a une veillée. Trois hommes de Lannoz se sont noyés, la semaine dernière, en pêchant au large. La mer ne les a pas rendus. Alors on veille des cercueils vides.",
        "Ils sont posés sur des tréteaux, dans la plus grande maison du village, trois caisses de bois blanc, fermées, avec une chandelle à chaque bout, et sur chaque couvercle, le béret du mort, et sa pipe. Les femmes sont assises autour, en noir, la coiffe rabattue sur le front. Les hommes sont debout contre les murs. On ne pleure pas. On chante.",
        "C'est un chant lent, en langue de Lannoz, à plusieurs voix, qui monte et redescend comme une houle, avec un refrain où revient le même mot, que la vieille femme assise près de toi te traduit, à l'oreille, avec son haleine de cidre : « Reviens. »",
        "Ils le chantent toute la nuit. Pas pour que les morts reviennent : ils savent. Pour que les morts sachent qu'on les attend, s'ils veulent. Pour qu'ils ne se croient pas oubliés, là-bas, au fond, dans le noir, et qu'ils ne viennent pas, de dépit, chercher quelqu'un pour leur tenir compagnie.",
        "Vers trois heures, les chandelles baissent. Une femme se lève, va à la porte, l'ouvre en grand sur la nuit et la bruine, et reste là, sur le seuil, à regarder vers la mer, pendant que les autres chantent derrière elle.",
        "Tu chantes, toi aussi, à la fin. Tu ne sais pas les mots. Tu chantes le refrain.",
      ],
      choices: [{ label: "Rentrer à l'aube", fx: { flag: "lannoz:veillee" }, back: "A3o_lannoz" }] },
    XQ_l_tourbe: { act: "III", title: "La tourbe", place: "lannoz", ambiance: "nature",
      text: [
        "Les tourbiers travaillent au bord d'une grande tourbière, à l'est du village. Ils découpent la tourbe en briques, avec une bêche étroite et longue, et les empilent en murets pour qu'elles sèchent au vent. Ça brûle tout l'hiver, la tourbe, d'une flamme basse et d'une fumée qui sent le pain grillé.",
        "Ils te laissent essayer. La bêche s'enfonce dans la tourbe comme dans du beurre noir. Tu soulèves une brique, puis une autre. C'est lourd, mouillé, ça colle aux mains. Les tourbiers rient. Au troisième coup, ta bêche rencontre quelque chose.",
        "Quelque chose de mou, qui résiste. Un tourbier se penche, et cesse de rire.",
        "Ils dégagent à la main, lentement, avec des gestes de sages-femmes. Dans la tourbe, il y a une main. Une main brune, de cuir, aux doigts fins, aux ongles intacts. Puis un bras. Puis un visage, un visage d'homme, couché sur le côté, les yeux fermés, une barbe rousse, des cils, des rides au coin des yeux, comme s'il dormait. Il porte autour du cou une corde de cuir tressé, nouée serré.",
        "« Un vieux, dit le chef des tourbiers, en ôtant son bonnet. Un très vieux. La tourbe les garde. Elle garde tout. On en trouve un tous les dix ans. Celui-là, il est d'avant les églises. » Il se signe quand même, par précaution.",
        "On le recouvre de tourbe, soigneusement, comme on borde un lit. On ne le dérange pas. On ira creuser ailleurs. Tu ne dors pas très bien, cette nuit-là, et dans tes rêves, l'homme à la barbe rousse ouvre les yeux, et te demande l'heure.",
      ],
      choices: [{ label: "Redescendre au village", fx: { flag: "lannoz:tourbe" }, back: "A3o_lannoz" }] },
    XQ_l_cairn: { act: "III", title: "Le cairn", place: "lannoz", ambiance: "nature",
      text: [
        "Sur la plus haute colline, au-dessus de la lande, il y a un cairn. Un tas de pierres plates, haut comme deux hommes, que chaque passant augmente d'un caillou, depuis des siècles. Tu en poses un. Puis tu regardes.",
        "La lande, de là-haut, est un tapis roux et vert, crevé de tourbières qui brillent comme des miroirs cassés. L'anse, la Cormorane, le brick jaune à côté, plus petit, plus sale. Le village, ses fumées. Et à l'ouest, sur les collines, des hommes.",
        "Une ligne d'hommes, une douzaine, qui avancent sur la lande en se tenant à distance égale, comme des rabatteurs à la chasse. Ils ont des bâtons. Deux d'entre eux tiennent des chiens en laisse, de grands chiens jaunes, qui tirent. Ils fouillent chaque creux, chaque buisson d'ajoncs. Ils viennent du brick jaune : tu reconnais, en tête, la vareuse rouge du matelot à la gourde, celui du quai de Morlenc.",
        "Ils cherchent quelqu'un. Ils cherchent vers le ruisseau.",
      ],
      choices: [{ label: "Redescendre, vite", fx: { flag: "lannoz:battue" }, back: "A3o_lannoz" }] },

    // ---------------------------------------------------------------- the doctor
    XQ_l_couches: { act: "III", title: "La maison de pierres sèches", place: "lannoz", ambiance: "nuit",
      text: [
        "Un garçon court sur la grève en criant quelque chose dans la langue de Lannoz, et le seul mot que Victorine comprend, c'est « médecin ». On a vu sa trousse. On vient la chercher.",
        "La maison est une seule pièce, basse, de pierres sèches, au toit de chaume, avec un feu de tourbe au milieu et pas de cheminée. La fumée sort par où elle peut. Sur un lit clos, une femme de vingt ans, trempée de sueur, en travail depuis deux jours. Autour, trois vieilles, qui prient, et une sage-femme qui ne sait plus quoi faire.",
        "Victorine examine. L'enfant se présente par l'épaule. Il ne sortira pas comme ça. Il faut le retourner, dans le ventre, à la main, entre deux contractions, ou la mère et l'enfant mourront avant l'aube.",
        "Elle l'a fait deux fois, à Varnèse. Une fois, l'enfant a vécu.",
      ],
      choices: [{ label: "Se laver les mains, et le retourner", test: { dom: "savoir", diff: 1, label: "La version, à la main" }, win: { fx: { flag: "lannoz:naissance" }, to: "XQ_l_couches_ok" }, lose: { fx: { flag: "lannoz:mort_nee" }, to: "XQ_l_couches_rate" } }] },
    XQ_l_couches_ok: { act: "III", title: "Le premier cri", place: "lannoz", ambiance: "nuit",
      text: [
        "Cela prend une heure. Une heure à genoux sur la terre battue, le bras dans le corps d'une femme qui hurle, à sentir sous ses doigts un dos, une tête, une épaule, un petit pied qui se dérobe, à pousser, à attendre, à repousser, pendant que les vieilles prient de plus en plus fort et que la sage-femme tient la chandelle.",
        "Puis l'enfant tourne. D'un coup, comme un poisson. La tête se présente. La suite va vite, comme si tout le monde, et l'enfant le premier, avait hâte d'en finir.",
        "C'est une fille. Elle crie, d'un cri furieux, outragé, qui fait taire les vieilles. La mère pleure, et rit, et demande quelque chose dans sa langue. La sage-femme traduit, avec un sourire édenté.",
        "« Elle demande votre nom. Pour la petite. »",
        "Victorine le dit. La mère le répète, avec l'accent de Lannoz, qui lui donne un son de cloche. Victorine sort dans la nuit, s'assied sur un muret, sous la bruine, et reste là un long moment, les mains tremblantes posées sur ses genoux, à écouter la petite crier dans la maison derrière elle.",
      ],
      choices: [{ label: "Redescendre vers l'anse", back: "A3x_lannoz" }] },
    XQ_l_couches_rate: { act: "III", title: "Le silence", place: "lannoz", ambiance: "nuit",
      text: [
        "Cela prend une heure. L'enfant ne tourne pas. Il tourne à moitié, puis revient, puis le cœur, qu'elle sentait battre sous sa main à travers le ventre, ralentit, et s'arrête.",
        "Elle sauve la mère. Elle sort l'enfant, mort, en morceaux qu'elle ne nommera jamais à personne, et elle arrête l'hémorragie, et la mère vit, grise, vidée, endormie par l'épuisement avant d'avoir compris.",
        "Les vieilles ne disent rien. Elles enveloppent ce qu'il faut envelopper dans un linge blanc. La sage-femme lui tient la cuvette pendant qu'elle se lave, et lui dit, dans un ponantais rocailleux : « Sans vous, les deux. Avec vous, une. C'est le compte. »",
        "C'est le compte. Victorine le connaît. Elle le fait depuis des années. Il ne devient jamais plus facile à faire.",
      ],
      choices: [{ label: "Redescendre vers l'anse", back: "A3x_lannoz" }] },
    XQ_l_recteur: { act: "III", title: "Le registre des noyés", place: "lannoz", ambiance: "nature",
      text: [
        "Le recteur de Lannoz est un vieux prêtre en soutane verdie, qui reçoit Victorine dans son presbytère, au milieu de ses ruches. Il tient le registre des noyés. Toutes les paroisses de la côte en tiennent un. Le sien remonte à cent quarante ans.",
        "Il le lui montre parce qu'elle le demande, et qu'on lui demande rarement quelque chose. Des noms, des dates, des bateaux. Et, de loin en loin, une autre sorte de ligne : *Un homme, inconnu, rejeté à l'anse.* La mer rend à Lannoz ce qu'elle prend ailleurs. Le courant passe par là.",
        "Il y a onze ans, une ligne plus longue. *Rejeté à la pointe de Kerlan, un homme d'une cinquantaine d'années, en habit de capitaine, la poche garnie d'une bourse de quarante livres et d'un portefeuille de cuir. Le portefeuille portait le nom : Bréhat, capitaine du Saint-Fiacre, de Morlenc. Inhumé au cimetière marin. Le portefeuille contenait une page de journal de bord, que nous avons gardée, la famille n'ayant pas répondu.*",
        "« La voulez-vous voir ? demande le recteur. Personne ne l'a jamais réclamée. »",
        "Elle est dans une enveloppe, entre deux pages du registre. Une page arrachée, gondolée par l'eau de mer, l'encre délavée mais lisible, d'une écriture qui tremble.",
        "*Quatorze à terre. Ordre exécuté. Que Dieu me pardonne, ou que le baron me paie double, l'un ou l'autre, je ne sais plus ce que je préfère.*",
      ],
      choices: [{ label: "Recopier la page, et rendre l'enveloppe au recteur", fx: { flag: "lannoz:brehat" }, back: "A3x_lannoz" }] },
    XQ_l_benoit: { act: "III", title: "La lande", place: "lannoz", ambiance: "nature",
      text: [
        "Benoît Quémeneur descend à terre pour la première fois depuis Morlenc. Il marche sur la lande, seul, les mains derrière le dos, comme sur la dunette. Victorine marche à côté de lui. Ils marchent longtemps, sous la bruine, dans la bruyère qui leur mouille les jambes.",
        "« Il y a, à Morlenc, au bord du fleuve, un pré qu'on appelle le Pré-aux-Mouettes, dit-il enfin. Avec un calvaire. Nous y allions, enfants. Alexis voulait toujours se battre. Au bâton, à l'épée de bois, aux poings. Moi, je ne voulais pas. Je n'ai jamais voulu. »",
        "Il s'arrête, regarde la mer.",
        "« Il m'attendait, là-bas, au bout du pré, le dimanche, avec deux bâtons. Et moi, j'allais à la messe. Je savais qu'il m'attendait. J'y allais quand même, à la messe. Je me disais que si je n'y allais jamais, il finirait par se lasser. » Il sourit, un sourire de travers. « Il ne s'est jamais lassé. Il m'attend encore, je crois. Quelque part. Avec deux bâtons. »",
      ],
      choices: [{ label: "Redescendre avec lui, en silence", fx: { flag: "lannoz:benoit", regard: { benoit: "cordial" } }, back: "A3x_lannoz" }] },
  },
  extras: {},
};
