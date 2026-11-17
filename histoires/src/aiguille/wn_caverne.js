// L'Île Folle-Aiguille · side story « Celui qui est remonté » (owes its question to the cave of Plato's Republic: what
// becomes of the one who has seen the light and comes back down to tell it?). Act IV, in the Wells: Riwal, eighteen,
// stayed three days at the surface instead of one hour, saw the sea, the stars, the rain, and came back down speaking of
// them without end. The young listen to him; the Mothers say the sun has burnt his head and want him tied to the wheel
// until he forgets. They ask the child, who comes from up there, whether he lies. The child bears witness to all of it
// (wn:temoigne), tells Riwal to keep silent, to stay among his own (wn:silence), or takes him back up and leaves him at
// the mouth of the shaft (wn:remonte). Wired in XD_forge.
module.exports = {
  passages: {
    WN_riwal: { act: "IV", title: "Celui qui est remonté", place: "puits", ambiance: "nuit",
      fx: { meet: "riwal" },
      text: [
        "Il parle dans la galerie des fondeurs, au milieu d'un cercle de jeunes gens assis par terre, dans la lueur rouge, et sa voix monte et descend comme la roue. C'est un grand garçon pâle, maigre, avec des cheveux blancs de naissance et des yeux immenses, rougis, qui larmoient sans arrêt, comme s'il avait pleuré pendant des jours. Il s'appelle Riwal. Il a dix-huit ans. Il est monté, comme chacun ici, une fois, pour voir. Il devait rester une heure. Il est resté trois jours.",
        "Il raconte. Il raconte une eau qui n'a pas de bords, qui bouge toute seule, qui crie, qui est salée comme le sang. Il raconte une nuit où le plafond est percé de milliers de trous, par où passe la lumière d'une autre forge, très loin. Il raconte une eau qui tombe du ciel, tiède, sans qu'on sache qui la verse, et des arbres qui bougent sans qu'on les touche, et des bêtes qui volent et qui chantent. Il raconte une lumière qui ne vient d'aucun feu.",
        "Les jeunes l'écoutent, la bouche ouverte. Les plus vieux, en passant, haussent les épaules, ou font le signe qu'on fait ici contre le mauvais air des veines profondes. Un homme dit, assez fort pour qu'on l'entende, que la lumière lui a cuit la cervelle comme un œuf. Riwal ne l'entend pas. Il te voit, toi, au bord du cercle. Ses yeux rougis s'illuminent. « Toi, dit-il. Tu viens de là-haut. Dis-leur. »",
      ],
      choices: [{ label: "Le suivre devant les Mères, où on l'appelle", to: "WN_meres" }] },
    WN_meres: { act: "IV", title: "Celui qui est remonté", place: "puits", ambiance: "nuit",
      text: [
        "Les trois Mères sont assises près du foyer, sur leurs tabourets de fer, avec leurs aiguilles qui sont des clous. On a fait venir Riwal. On t'a fait venir aussi. Hugon se tient derrière, les bras croisés sur son tablier, et ne dit rien ; ici, il ne commande pas. Autour, dans l'ombre des galeries, des dizaines de visages pâles, tournés vers le feu, comme des fleurs qui pousseraient dans une cave.",
        "La plus vieille parle sans lever les yeux de son tricot. Elle dit que Riwal trouble les jeunes. Qu'il leur fait regarder le plafond de la galerie comme s'il était une prison. Que trois fondeurs ont manqué la coulée hier, parce qu'ils écoutaient ses histoires. Qu'un garçon de douze ans a essayé de monter seul, la nuit, par le puits d'aérage, et qu'on l'a retrouvé coincé dans la cheminée, à moitié étouffé, en pleurant qu'il voulait voir l'eau qui crie. Qu'il faut que ça cesse.",
        "« Le soleil lui a pris la tête, dit la deuxième. On l'attachera à la roue, avec les autres, jusqu'à ce qu'il oublie. La roue fait oublier. » La troisième ne dit rien. Elle tricote. La plus vieille lève enfin les yeux, et ce sont des yeux blancs, voilés, qui ne voient que le feu. Elle les tourne vers toi. « Toi, tu viens d'en haut. Tu vois clair, à ce qu'on dit, dans leur lumière. Alors dis-nous. Est-ce qu'il ment ? »",
        "Riwal te regarde, avec ses yeux qui pleurent. Les Mères te regardent. Hugon te regarde. Tu penses que tout ce qu'il a dit est vrai, à peu près, et que la vérité, ici, à cent pieds sous la roche, ressemble trait pour trait à la folie.",
      ],
      choices: [
        { label: "« Il dit vrai. Tout. La mer, les étoiles, la pluie. Je l'ai vu. »", fx: { flag: "wn:temoigne" }, to: "WN_temoigne" },
        { label: "Prendre Riwal à part, et lui conseiller de se taire, pour rester des leurs", fx: { flag: "wn:silence" }, to: "WN_silence" },
        { label: "« Il ne ment pas. Mais il n'est plus d'ici. Laissez-moi le remonter. »", fx: { flag: "wn:remonte" }, to: "WN_remonte" },
      ] },
    WN_temoigne: { act: "IV", title: "Celui qui est remonté", place: "puits", ambiance: "nuit",
      text: [
        "Tu le dis. Tout. Tu dis la mer, et qu'elle est salée, et qu'elle crie, et qu'elle n'a pas de bords qu'on voie. Tu dis les étoiles, et la pluie, et les oiseaux. Tu en rajoutes, même, emporté{e} : la neige, les baleines, les tempêtes. Un murmure monte des galeries, de plus en plus fort, comme une coulée qui déborde. Les jeunes se lèvent. Riwal pleure, mais de joie, cette fois, et il te serre les mains si fort que tu as mal.",
        "La plus vieille Mère t'écoute jusqu'au bout. Puis elle reprend son tricot. Elle dit, très calmement, que les gens d'en haut ont toujours raconté des choses merveilleuses sur leur monde, et que c'est avec ces choses-là qu'on a fait monter leurs hommes, il y a des années, le jour des clefs, et qu'aucun n'est redescendu. Elle dit que tu as l'air d'un{e} enfant honnête. Elle dit que c'est le plus dangereux. Elle remercie Hugon de t'avoir accueilli{e}, et elle dit que tu repartiras demain.",
        "On n'attache pas Riwal à la roue. On n'ose plus, après toi ; le murmure des galeries ne s'est pas tout à fait éteint. Mais le lendemain, quand tu remontes, vingt jeunes gens pâles te suivent jusqu'au bas du puits, et regardent la lumière grise tomber de là-haut sur leurs visages, en clignant des yeux, en pleurant, et ne remontent pas. Pas encore. Riwal est devant eux. Il te fait un signe de la main, en bas, dans le rond de lumière. Tu ne sais pas si tu viens de les libérer ou de leur apprendre à être malheureux.",
      ],
      choices: [{ label: "Revenir vers la forge", fx: { quest: "WN" }, back: "XD_forge" }] },
    WN_silence: { act: "IV", title: "Celui qui est remonté", place: "puits", ambiance: "nuit",
      text: [
        "Tu demandes aux Mères le temps de lui parler. On te l'accorde. Tu l'emmènes dans une galerie latérale, où l'eau goutte de la voûte avec un bruit d'horloge. Tu lui dis qu'il a raison. Tu lui dis aussi qu'ils l'attacheront à la roue, et que la roue fait oublier, et qu'il vaut mieux se souvenir en silence qu'oublier en criant. Tu lui dis de dire aux Mères qu'il a rêvé. Qu'il a eu la fièvre du soleil. Qu'il regrette.",
        "Il te regarde longtemps, avec ses yeux rougis. Puis il dit : « Tu as vu tout ça toute ta vie. Tu peux te taire, toi. Tu le revois demain. Moi, je n'ai que les mots. Si je ne les dis plus, je n'aurai plus rien. » Il réfléchit. Il dit qu'il le fera quand même. Pas pour lui. Pour le garçon de douze ans coincé dans la cheminée. Pour que les autres ne montent pas seuls, la nuit, et ne meurent pas étouffés dans la roche en cherchant l'eau qui crie.",
        "Il retourne devant les Mères. Il dit qu'il a rêvé. Il le dit bien, d'une voix plate, en baissant les yeux. La plus vieille hoche la tête et lui pardonne. Les jeunes se dispersent, déçus. Le soir, en passant devant la forge, tu le vois au soufflet, qui pompe, qui pompe, le visage rouge de la flamme. Il te regarde passer. Il te fait un petit sourire. Et, au moment où tu t'éloignes, tu l'entends dire, très bas, pour lui seul, au rythme du soufflet, un mot qui ressemble à *mer*.",
      ],
      choices: [{ label: "Revenir vers la forge", fx: { quest: "WN" }, back: "XD_forge" }] },
    WN_remonte: { act: "IV", title: "Celui qui est remonté", place: "puits", ambiance: "nuit",
      text: [
        "Les Mères se regardent. La troisième, celle qui ne dit jamais rien, pose son tricot pour la première fois. Elle dit, d'une voix enrouée : « Oui. » Les deux autres se taisent. On n'avait jamais entendu la troisième dire oui à quoi que ce soit, à ce que te souffle Hugon, plus tard, à l'oreille, avec une sorte d'effroi.",
        "Vous montez à l'aube. Riwal emporte un marteau, une couverture, une pierre à feu, et rien d'autre. Personne ne vient lui dire adieu, sauf une fille, une seule, qui le regarde partir depuis l'entrée d'une galerie, sans un geste. Il ne se retourne pas. Dans la cheminée, plus vous montez, plus il respire vite. Au dernier palier, quand la lumière grise tombe sur vous, il s'arrête, et ferme les yeux, et pleure, de douleur, et ouvre les yeux quand même.",
        "Tu le laisses au bord du puits, dans les fougères, assis, le visage tourné vers l'est, où le soleil se lève. Il ignore comment on fait un feu sans soufflet, où l'on trouve une eau qui ne soit pas salée, et à peu près tout le reste. Il rit. Tu le regardes, en t'éloignant, de plus en plus petit au milieu de la forêt, un homme pâle, à moitié aveugle, qui rit tout seul au soleil comme un nouveau-né. Tu te demandes combien de temps il vivra. Tu te demandes si c'est la bonne question.",
      ],
      choices: [{ label: "Redescendre vers la forge", fx: { quest: "WN" }, back: "XD_forge" }] },
  },
  extras: {
    people: {
      riwal: { name: "Riwal", aka: ["celui qui est remonté"], qui: "Jeune fondeur des Puits, resté trois jours à la surface." },
    },
    quests: [
      { id: "WN", act: "IV", kind: "annexe", title: "Celui qui est remonté", start: "WN_riwal", doit: "caverne", echo: ["wn:temoigne", "wn:silence", "wn:remonte"] },
    ],
  },
};
