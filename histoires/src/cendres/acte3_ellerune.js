// Act III · more of Ellerune, the hamlet of the Orsans in the black forest, who repeat the gestures of a village for
// three hundred years: the woodcutter, the spinner of the endless wool, and the children at the dry well. The child
// leads ("tu", masculine) and understands their language.
var A = { act: "III", noLead: true };
function P(o) { return Object.assign({}, A, o); }
module.exports = {
  III_el_fendeur: P({ title: "Le fendeur", place: "enfance",
    text: [
      "L'homme qui fend du bois ne lève pas les yeux. Il pose une bûche noire sur le billot, il lève la hache, il frappe. La bûche résiste, et résistera toujours : c'est du bois brûlé, dur comme du fer. Il la repose. Il recommence.",
      "« Tu ne devrais pas être ici, dit-il, dans la langue que tu comprends. Je l'ai dit aux autres. Tu étais le seul vivant. » Il frappe. « Mais puisque tu es là, prends la hache. Ton grand-père fendait mieux que moi. On verra si ça se transmet. »",
    ],
    choices: [
      { label: "Prendre la hache", test: { dom: "combat", label: "La bûche noire", help: [{ if: { has: "passe:moulin" }, v: 15 }, { if: { present: "ysolde" }, v: 5 }] },
        win: { fx: { flag: "iii:buche", ep: ["perso", 800] }, to: "III_el_fendeur_ok" }, lose: { to: "III_el_fendeur_rate" } },
      { label: "Lui rendre son silence", to: "III_e_hameau" },
    ] }),
  III_el_fendeur_ok: P({ title: "Fendue", place: "enfance",
    text: [
      "Tu ne fends pas comme lui. Tu fends comme on t'a appris au moulin : en lisant le bois avant de frapper, en cherchant la fente qui y est déjà. Il y en a une, minuscule, dans le charbon. Tu frappes dedans.",
      "La bûche s'ouvre en deux, net, avec un bruit qu'on n'a pas entendu à Ellerune depuis trois siècles. À l'intérieur, au cœur, le bois n'a pas brûlé. Il est blond, et il sent la sève.",
      "L'homme regarde les deux moitiés longtemps. Puis il te reprend la hache, en silence, et il va poser la moitié blonde sur le seuil de la maison de Maëra.",
    ],
    choices: [{ back: "III_e_hameau" }] }),
  III_el_fendeur_rate: P({ title: "Le billot", place: "enfance",
    text: ["La hache rebondit sur la bûche et te remonte dans les bras jusqu'aux épaules. L'homme reprend la hache. « Ça ne se transmet pas, dit-il, sans méchanceté. C'est aussi bien. » Il recommence à frapper. Tu l'entends encore quand tu es de l'autre côté du hameau, régulier, inutile, obstiné."],
    choices: [{ back: "III_e_hameau" }] }),

  III_el_fileuse: P({ title: "La fileuse", place: "enfance",
    text: [
      "Sur un banc, devant sa porte, une vieille femme file une laine grise. Le fil sort de sa quenouille sans jamais diminuer. À ses pieds, la pelote est grosse comme un chaudron, et elle continue de grossir.",
      "« Trois cents ans que je file le même fil, dit-elle. Pour une couverture. Le jour de l'incendie, j'avais promis une couverture à ma fille, pour l'hiver. L'hiver n'est jamais venu. Alors je continue. » Elle te regarde. « Tu as froid, toi. Ça se voit. Tu viens de là-haut, où il fait froid. »",
    ],
    choices: [
      { label: "« Oui. J'ai froid. »", fx: { flag: "iii:fil", item: "fil_ellerune", ep: ["perso", 700] }, to: "III_el_fileuse_fil" },
      { label: "« Non. Gardez-la pour votre fille. »", fx: { ep: ["perso", 400] }, to: "III_el_fileuse_fille" },
    ] }),
  III_el_fileuse_fil: P({ title: "Le fil", place: "enfance",
    text: [
      "Elle coupe le fil avec ses dents. Pour la première fois en trois siècles. Elle te tend le bout, et la pelote, et tu la prends, et elle est lourde, et chaude, comme un chat.",
      "« Ce n'est pas une couverture, dit-elle. Je n'ai jamais su tricoter. Mais ça tient chaud quand même, un fil. Si on l'enroule assez. » Elle pose les mains sur ses genoux, vides, et elle les regarde, et elle sourit, comme quelqu'un qui vient de finir un travail.",
    ],
    choices: [{ back: "III_e_hameau" }] }),
  III_el_fileuse_fille: P({ title: "La quenouille", place: "enfance",
    text: ["Elle hoche la tête, contente. « Tu es un bon garçon, dit-elle. Ta mère sera fière. » Et elle se remet à filer, et le fil sort, et la pelote grossit. Tu te demandes, en t'éloignant, si sa fille est dans le hameau, à filer elle aussi, et si elles se sont reconnues."],
    choices: [{ back: "III_e_hameau" }] }),

  III_el_puits: P({ title: "Le jeu du puits", place: "enfance",
    text: [
      "Autour du puits sans eau, des enfants jouent. Ils jouent à un jeu que tu connais sans le connaître : on se met en rond, on se lance une pierre, et celui qui la rattrape doit dire un nom, n'importe lequel, et si un autre le connaît, celui-là est délivré, et il sort du rond.",
      "Ils jouent depuis trois cents ans. Personne n'est jamais sorti du rond. Les noms qu'ils disent sont ceux d'Ellerune, et personne, ailleurs, ne les connaît.",
      "Une petite fille te lance la pierre.",
    ],
    choices: [
      { label: "Dire « Sauvelune »", fx: { flag: "iii:puits_jeu=sauvelune" }, to: "III_el_puits_sauvelune" },
      { label: "Dire le nom de ta mère d'ici", hide: { not: { seen: "III_e_mere" } }, fx: { flag: "iii:puits_jeu=maera", ep: ["perso", 800] }, to: "III_el_puits_maera" },
    ] }),
  III_el_puits_sauvelune: P({ title: "Sauvelune", place: "enfance",
    text: ["Les enfants se regardent. Personne ne connaît Sauvelune. La petite fille hausse les épaules, gentiment, et reprend la pierre. « Personne ne sort, alors », dit-elle. Tu restes un moment. Tu joues. Personne ne connaît aucun de tes noms. Tu ne connais aucun des leurs. C'est un jeu très triste, et ils rient tout le temps."],
    choices: [{ label: "Sortir du rond, et revenir au centre du hameau", back: "III_e_hameau" }] }),
  III_el_puits_maera: P({ title: "Maëra", place: "enfance",
    text: [
      "« Maëra. »",
      "Tous les enfants le connaissent. Tous. Ils lèvent la main ensemble, en criant. La règle dit qu'un seul est délivré : quand ils sont plusieurs à connaître le nom, c'est celui qui a lancé. La petite fille sort du rond, ravie, en sautant, et elle s'en va en courant vers la maison où l'on chante.",
      "Les autres te regardent avec une envie énorme. Tu leur lances la pierre. Le jeu reprend. Il y a un enfant de moins dans le rond. C'est le premier depuis trois cents ans.",
    ],
    choices: [{ back: "III_e_hameau" }] }),
};
