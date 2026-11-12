// Act IV · two more fires in the Corvanne camp on the eve of battle (the child leads, "tu" masculine), off IV_cv_camp:
// a drummer boy of twelve, from Hautvent, who teaches the child the Corvanne beat for parley (iv:tambour helps the
// bridge in IV_l_pont and is heard there); and the tent of the Esquarrois prisoners, among them a soldier of Brenne
// believed dead since the night of the bridge (iv:prisonnier=rendu|reste).
var A = { act: "IV", noLead: true, place: "brenne" };
function P(o) { return Object.assign({}, A, o); }
var BACK = [{ back: "IV_cv_camp" }];
module.exports = {
  IV_cv_tambour: P({ title: "Le tambour",
    text: [
      "Un peu à l'écart des feux, un garçon de douze ans tape sur un tambour posé sur ses genoux, très bas, avec deux doigts au lieu des baguettes, pour ne réveiller personne. Il répète. Demain, il marchera devant le premier rang. Il porte le bleu de Corvanne, trop grand pour lui, et il a l'accent de Hautvent, moitié l'un, moitié l'autre.",
      "Il te voit, il te reconnaît : l'enfant aux yeux pâles, celui dont tout le camp parle. Il s'arrête de taper. « Tu viens d'en face, dit-il. J'ai des cousins en face. À Hautvent. Une petite, Ilse, sept ans. Si tu la vois, ne lui dis pas que je suis là. Elle me croit apprenti chez un tonnelier. »",
    ],
    choices: [
      { label: "Lui demander de t'apprendre les batteries de Corvanne", fx: { flag: "iv:tambour", ep: ["perso", 600] }, to: "IV_cv_tambour_chamade" },
      { label: "Lui promettre de ne rien dire à Ilse", fx: { ep: ["perso", 300] }, to: "IV_cv_tambour_promesse" },
    ] }),
  IV_cv_tambour_chamade: P({ title: "La chamade",
    text: [
      "Il est fier qu'on le lui demande. Il te montre. La générale, qui réveille le camp. La charge, rapide, qui fait courir les jambes avant la tête. La retraite, lente. Et une dernière, qu'il joue plus doucement, presque à regret : quatre coups longs, deux courts, quatre longs. La chamade. « Pour parlementer, dit-il. Quand on veut parler à ceux d'en face. Je ne l'ai jamais jouée pour de vrai. Personne ne la demande jamais. »",
      "Tu la répètes, sur le bord du tambour, avec deux doigts. Quatre longs, deux courts, quatre longs. Il te corrige. Tu recommences. À la fin, tu la sais. Il te regarde. « Si demain tu veux parler, dit-il, lève la main. Je la jouerai. Je dirai que je me suis trompé. »",
    ],
    choices: BACK }),
  IV_cv_tambour_promesse: P({ title: "Apprenti tonnelier",
    text: ["« Promis », dis-tu. Il hoche la tête, très sérieux, comme un homme qui vient de conclure une affaire. Il reprend son tambour. Il répète la charge, avec deux doigts, tout bas, en regardant le feu. Ses mains tremblent un peu. Il ne le cache pas. Au bout d'un moment, il dit, sans lever les yeux : « Tonnelier, c'était bien aussi. » Tu ne sais pas quoi répondre. Tu restes à côté de lui jusqu'à ce qu'il s'endorme sur son tambour."],
    choices: BACK }),
  IV_cv_prisonniers: P({ title: "La tente des prisonniers",
    text: [
      "Une tente plus petite que les autres, deux sentinelles qui jouent aux dés devant. Dedans, six Esquarrois, les mains liées devant eux, assis sur la paille. Des éclaireurs pris cet hiver, pour la plupart. Et un septième, plus vieux, plus maigre, la barbe longue, qui porte encore sur la manche, délavé, le loup de Brenne.",
      "« Gilles, dit-il, quand tu lui demandes son nom. Gilles le Roux. De la compagnie de Brenne. » Il est là depuis la nuit du pont, plus de trois ans. On l'a repêché dans la Lisse, à moitié noyé, du mauvais côté. Personne à Brenne ne sait qu'il vit. Ils l'ont pleuré. Ils ont gravé son nom quelque part, sans doute.",
      { with: "ysolde", text: "Ysolde est entrée derrière toi. Elle s'arrête net. Gilles la voit. Il essaie de se lever, avec ses mains liées, pour le salut. Elle lui fait signe de rester assis. Elle ne dit rien. Elle a la mâchoire serrée comme un poing." },
    ],
    choices: [
      { label: "Demander à l'officier de garde qu'on le rende, cette nuit, sur parole", test: { dom: "social", label: "L'officier de garde", help: [{ if: { present: "ysolde" }, v: 15 }, { if: { has: "ilan:iv" }, v: 10 }, { if: { present: "rodric" }, v: 10 }] },
        win: { fx: { flag: ["iv:prisonnier", "iv:prisonnier=rendu"], ep: ["perso", 1200] }, to: "IV_cv_prisonniers_rendu" }, lose: { fx: { flag: ["iv:prisonnier", "iv:prisonnier=reste"] }, to: "IV_cv_prisonniers_reste" } },
      { label: "Lui promettre de dire à Brenne qu'il est vivant", fx: { flag: ["iv:prisonnier", "iv:prisonnier=reste"], ep: ["perso", 500] }, to: "IV_cv_prisonniers_reste" },
    ] }),
  IV_cv_prisonniers_rendu: P({ title: "Sur parole",
    text: ["L'officier de garde est un vieux capitaine corvannais qui a perdu un fils au pont. Il t'écoute. Il regarde Gilles. Il dit quelque chose en corvannais à la sentinelle, qui coupe la corde. « Sur parole, dit-il. Qu'il ne porte pas d'arme demain. Je ne veux pas le tuer deux fois. » Gilles se lève. Il frotte ses poignets. Il ne remercie personne. Il sort de la tente, et il regarde vers la Lisse, vers les feux de Brenne, de l'autre côté de l'eau, comme on regarde une maison où l'on n'est pas sûr d'être encore attendu."],
    choices: BACK }),
  IV_cv_prisonniers_reste: P({ title: "Le loup délavé",
    text: ["On ne rend pas un prisonnier la veille d'une bataille. Gilles le sait mieux que toi. Il hausse les épaules, avec ses mains liées. « Dis-leur, dit-il. À Brenne. Dis au vieux Gautier que je lui dois toujours trois sous, et que je compte bien les lui rendre. » Il se recouche dans la paille. Tu lui promets. Tu répètes la phrase, pour ne pas l'oublier, sur le chemin du retour. *Trois sous. Gautier.*"],
    choices: BACK }),
};
