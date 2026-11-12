// Act II · more of the camp of the Corbeau for Corbe's company (Corbe leads, "tu" feminine), off II_N_camp: a newborn
// the clan does not dare to name, the sled race on the frozen tarn, and the old storyteller who tells how the Mère
// Blanche first came. Plus, in Act III, two more corners of Ellerune (the child leads, "tu").
var N = { act: "II", noLead: true };
function P(o) { return Object.assign({}, N, o); }
var T = { act: "III", noLead: true };
function P3(o) { return Object.assign({}, T, o); }
module.exports = {
  // ---------------------------------------------------------------- L'enfant sans nom
  II_Q_nouveau_ne: P({ title: "L'enfant de Runa", place: "corbeau",
    fx: { questSeen: "II_Q_nouveau_ne" },
    text: [
      "Dans une tente au bord du camp, une jeune femme, Runa, allaite un nouveau-né. Né il y a neuf jours. Au clan, on nomme un enfant le neuvième jour, devant le feu, et la Bouche peint le nom sur une bande d'écorce. C'est aujourd'hui.",
      "Personne n'est venu. Runa te regarde entrer, et elle serre l'enfant contre elle. « Hrodna ne peint plus les noms, dit-elle. Elle les donne à la Mère. Si je lui dis le nom de mon fils, elle le donnera. Si je ne le dis à personne, il n'a pas de nom. » Elle baisse les yeux sur l'enfant. « Il n'a pas de nom depuis neuf jours. Il pleure tout le temps. »",
    ],
    choices: [
      { label: "« Dis-le-moi. Je le garderai. »", to: "II_Q_nouveau_ne_garder" },
      { label: "Peindre le nom toi-même, sur une écorce, en secret", test: { dom: "magie", label: "La peinture", help: [{ if: { seen: "CO_k_couleurs" }, v: 20 }, { if: { item: "tambour" }, v: 5 }] },
        win: { fx: { flag: "nord:nouveau_ne=peint", ep: ["perso", 1000] }, to: "II_Q_nouveau_ne_peint" }, lose: { to: "II_Q_nouveau_ne_rate" } },
      { label: "La laisser", refuse: true, to: "II_N_camp" },
    ] }),
  II_Q_nouveau_ne_garder: P({ title: "Un nom à garder", place: "corbeau",
    text: [
      "Runa hésite. Puis elle se penche à ton oreille, et elle te dit le nom, si bas que tu sens son souffle plus que tu n'entends le mot. *Eirik.* Le nom de son père, qui est mort à la chasse l'hiver dernier.",
      "Tu le répètes, toi aussi, à l'oreille de l'enfant. Il cesse de pleurer. Il te regarde, avec ces yeux qu'ont les nouveau-nés, qui ne voient rien et qui regardent tout.",
      "« Maintenant, on est deux à le savoir, dit Runa. Si elle m'en prend un, il en reste un. » Elle sourit pour la première fois. « C'est comme ça qu'on faisait, avant les Bouches, je crois. On se le disait à l'oreille. »",
    ],
    choices: [{ fx: { quest: "II_Q_nouveau_ne", flag: "nord:nouveau_ne=garde", conf: { corbe: 5 } }, back: "II_N_camp" }] }),
  II_Q_nouveau_ne_peint: P({ title: "L'écorce", place: "corbeau",
    text: [
      "Tu prends une bande d'écorce de bouleau, de l'ocre, de la suie. Tu ne sais pas écrire. Mais tu sais peindre les signes du clan, ceux qu'Askel t'a peints sur le visage.",
      { after: "corbe:blanc", text: "Et tu sais, maintenant, ce que veut dire le blanc autour. Tu peins le nom de l'enfant, que Runa te dit à l'oreille. Tu ne mets pas de blanc. Rien. Le nom tout seul, nu, serré contre le bord de l'écorce. Un nom qui ne passera pas." },
      { before: "corbe:blanc", text: "Tu peins le nom de l'enfant, que Runa te dit à l'oreille. Tu n'as pas de blanc : la craie du lac ne sort que pour la Bouche. Le nom tout seul, nu, serré contre le bord de l'écorce." },
      "Runa coud l'écorce dans la doublure du bonnet de l'enfant. « Elle ne regardera pas là, dit-elle. Personne ne regarde dans un bonnet. »",
    ],
    choices: [{ fx: { quest: "II_Q_nouveau_ne", conf: { corbe: 10 } }, back: "II_N_camp" }] }),
  II_Q_nouveau_ne_rate: P({ title: "La peinture", place: "corbeau",
    text: ["Tu peins. Le signe ne vient pas. Ta main tremble, l'ocre bave, le nom ressemble à un autre nom, à rien. Tu recommences, deux fois. Runa te prend le pinceau, doucement. « Laisse, dit-elle. Je le lui dirai tous les soirs, moi. Ça suffira peut-être. » Tu ne sais pas si ça suffira. Elle non plus."],
    choices: [{ fx: { quest: "II_Q_nouveau_ne" }, back: "II_N_camp" }] }),

  // ---------------------------------------------------------------- La course sur le lac
  II_k_course: P({ title: "La course du tarn", place: "corbeau",
    text: [
      "Sur le petit lac gelé, en contrebas du camp, les jeunes du clan font courir les traîneaux. Un renne, un traîneau de bouleau, un garçon ou une fille debout sur les patins, et trois tours du lac en criant. Le gagnant porte le grand tambour au col, pour le rite. C'est un honneur. Tu l'as gagné deux fois, avant.",
      "Ils te voient arriver. Le silence se fait. Puis un garçon, Leif, celui qui avait douze ans quand tu es partie, te tend une longe. « Il reste un renne, dit-il. Le plus têtu. Personne n'en veut. »",
    ],
    choices: [
      { label: "Courir", test: { dom: "nature", label: "Le traîneau", help: [{ if: { has: "co:renne=ramenee" }, v: 15 }, { if: { present: "ysolde" }, v: 5 }] },
        win: { fx: { flag: "nord:course", ep: ["perso", 800] }, to: "II_k_course_gagne" }, lose: { fx: { pv: -2 }, to: "II_k_course_perdu" } },
      { label: "Regarder, et laisser les jeunes à leur course", to: "II_N_camp" },
    ] }),
  II_k_course_gagne: P({ title: "Le grand tambour", place: "corbeau",
    text: [
      "Le renne têtu part de travers, s'arrête, repart, et puis, au deuxième tour, il comprend quelque chose, et il file. Tu passes Leif dans le dernier virage, sur un patin, en hurlant comme quand tu avais quinze ans.",
      "Les jeunes t'entourent. Leif te tape dans le dos, dépité et content. « Tu portes le tambour, alors. » Puis il hésite. « Si tu viens au col. Tu viens au col ? » Tu ne réponds pas. Mais tu prends le tambour.",
    ],
    choices: [{ fx: { conf: { corbe: 5 } }, back: "II_N_camp" }] }),
  II_k_course_perdu: P({ title: "Dans la neige", place: "corbeau",
    text: ["Le renne têtu s'arrête net au premier virage, et tu continues sans lui, sur le ventre, dix pas sur la glace. Les jeunes rient. Tu ris aussi, la figure dans la neige. Leif t'aide à te relever. « Il fait ça à tout le monde, dit-il. Je voulais voir si tu avais changé. »"],
    choices: [{ back: "II_N_camp" }] }),

  // ---------------------------------------------------------------- La conteuse
  II_k_conteuse: P({ title: "La conteuse", place: "corbeau",
    text: [
      "Sous un auvent de peaux, la vieille Gunnhild raconte aux enfants, comme tous les jours. Elle est aveugle depuis toujours, et elle raconte en tournant la tête vers le feu, comme si elle le voyait. Aujourd'hui, l'histoire de la Mère Blanche.",
      "« Au commencement, il n'y avait pas de Mère. Il y avait un pays tout blanc, au nord, où l'on n'avait jamais froid ni chaud. Et dans ce pays, une femme, qui chantait pour que ses enfants dorment. Un jour, ses enfants sont partis vers le sud, vers le soleil, et ils l'ont oubliée. Elle a cessé de chanter. Et depuis, elle a froid. »",
      "« Alors elle descend, de temps en temps, chercher ce qu'on lui a pris. Les noms. Parce que c'est elle qui les avait chantés la première. »",
      "Un enfant demande si c'est vrai. Gunnhild rit. « Rien n'est vrai, dans les histoires. C'est pour ça qu'il faut les retenir. »",
    ],
    choices: [{ fx: { ep: ["perso", 400], flag: "nord:conte_mere" }, back: "II_N_camp" }] }),

  // ---------------------------------------------------------------- Acte III : Ellerune
  III_el_four: P3({ title: "Le four commun", place: "enfance",
    text: [
      "Au milieu du hameau, un four de pierre, sous un toit à quatre poteaux. Une femme y cuit du pain noir, avec une farine qui n'est pas de la farine : de la cendre, fine, tamisée, mêlée d'eau du puits sans eau. Le pain sort du four, gris, léger, et ne sent rien.",
      "« Le pain des cendres, dit-elle dans la langue que tu comprends. La première nuit, quand ils ont brûlé la vallée, on n'avait plus que ça. Alors on a fait du pain avec. Depuis, on continue. » Elle t'en tend un morceau. « Mange. C'est le pain de chez toi. »",
    ],
    choices: [
      { label: "Manger", fx: { ep: ["perso", 400], flag: "iii:pain_cendres" }, to: "III_el_four_manger" },
      { label: "Remercier, et garder le morceau", to: "III_e_hameau" },
    ] }),
  III_el_four_manger: P3({ title: "Le goût", place: "enfance",
    text: [
      "Tu manges. Ça n'a pas de goût. Puis ça en a un. Un goût que tu ne connais pas et que tu reconnais : du blé grillé, de la fumée, et dessous, très loin, quelque chose de doux. Le pain des fêtes, à Sauvelune, au miel et à l'anis. Non. Pas celui-là. Un autre, plus ancien, dont celui-là est le souvenir.",
    ],
    choices: [{ back: "III_e_hameau" }] }),
  III_el_tombes: P3({ title: "Les pierres levées", place: "enfance",
    text: [
      "Derrière la dernière maison, dans l'herbe noire, des pierres levées, petites, une centaine. Pas de noms. Pas de signes. Juste des pierres, debout, chacune de la taille d'un enfant assis.",
      "Une vieille femme est assise au milieu. Elle te voit regarder. « Les nôtres, dit-elle. Ceux qui sont morts dans le feu. On n'a pas écrit leurs noms. On ne savait pas écrire. On les disait. » Elle touche une pierre. « Et puis on est venus ici, et on les a oubliés, nous aussi. Il ne reste que les pierres. On s'assied à côté, au cas où. »",
    ],
    choices: [
      { label: "T'asseoir à côté d'elle, un moment", fx: { ep: ["perso", 300] }, to: "III_e_hameau" },
      { label: "Lui demander s'il y a une pierre pour ton père", to: "III_el_tombes_pere" },
    ] }),
  III_el_tombes_pere: P3({ title: "Pas de pierre", place: "enfance",
    text: ["Elle te regarde. Elle te reconnaît, ou elle reconnaît quelque chose. « Non, dit-elle. Ton père n'est pas mort dans le feu. Il est parti avant, vers les tours blanches. » Elle se tait. « On lui en a voulu. On ne lui en veut plus. On ne se souvient plus pourquoi. »"],
    choices: [{ back: "III_e_hameau" }] }),
};
