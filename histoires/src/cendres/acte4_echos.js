// Act IV · echoes a year later of small things done in Act II (the child leads, "tu"): at the moutier, the young
// pilgrim whose finger moved when his name was read (nord:pelerins) or the cellarer whose candle was freed
// (nord:chandelle); at the camp of the Corbeau, Leif and the sled race (nord:course) and old Gunnhild's new story.
var A = { act: "IV", noLead: true };
function P(o) { return Object.assign({}, A, o); }
module.exports = {
  IV_m_novice: P({ title: "Le novice aux coquilles", place: "moutier",
    text: [
      "Dans le cloître, un novice balaie. Jeune, maigre, une coquille de pèlerin cousue à l'épaule de sa robe, à l'ancienne. Il te voit, il s'arrête, il s'appuie sur son balai.",
      { if: { has: "nord:pelerins" }, text: "« J'étais à l'hôtellerie, dit-il. Avec les autres. Gelé. J'entendais tout, dans la glace, comme sous l'eau. Et un jour, quelqu'un a lu nos noms, à voix haute. Le mien en dernier. Bérenger. » Il regarde sa main droite. « Mon doigt a bougé. Puis la main, le lendemain. Il m'a fallu un mois pour sortir. Les autres sont sortis au printemps, quand le géant est tombé. Moi, j'étais déjà dehors. »" },
      { if: { all: [{ not: { has: "nord:pelerins" } }, { has: "nord:chandelle" }] }, text: "« Le frère cellérier, dit-il, c'est lui qui m'a recueilli. Il a dégelé le premier, l'hiver dernier, avant tout le monde. Il dit qu'une chandelle l'a réchauffé, de l'intérieur, une nuit. Il ne sait pas qui l'avait rallumée. Il garde le bout de mèche dans un reliquaire, au cellier, entre les jambons. »" },
      { if: { not: { any: [{ has: "nord:pelerins" }, { has: "nord:chandelle" }] } }, text: "« J'étais pèlerin, dit-il. J'allais au col. La glace m'a pris ici, avec les autres, à l'hôtellerie. Quand elle a fondu, au printemps, je ne savais plus où j'allais. Alors je suis resté. » Il reprend son balai. « Le col, de toute façon, il paraît qu'il n'y a plus de tombeau. Il n'y a plus qu'un trou. »" },
    ],
    choices: [{ label: "Le laisser à son balai", fx: { ep: ["perso", 300] }, to: "IV_moutier" }] }),

  IV_k_leif: P({ title: "Leif", place: "corbeau",
    text: [
      "Sur le tarn gelé, sous le camp, les traîneaux courent, comme chaque hiver. Celui qui mène la course a vingt ans, maintenant, une barbe rousse, et un renne têtu qu'il tient d'une main.",
      { if: { has: "nord:course" }, text: "Leif. Il te voit, il lève le bras. « Corbe l'a gagnée, l'an dernier, dit-il. Avec ce renne-là. Personne n'avait jamais rien tiré de lui. Depuis, il ne veut courir qu'avec moi, et il gagne toujours. » Il rit. « Elle me l'a laissé en partant. Elle m'a dit : un renne têtu, c'est un renne qui attend qu'on le comprenne. »" },
      { if: { not: { has: "nord:course" } }, text: "Leif. Il a gagné la course l'an dernier, et il a porté le grand tambour au col, le jour du rite. Il n'aime pas en parler. « J'ai porté le tambour, dit-il seulement. Et puis, au col, j'ai vu des choses. On ne court plus pour le tambour, maintenant. On court pour courir. C'est mieux. »" },
    ],
    choices: [
      { label: "Lui proposer une course", test: { dom: "nature", label: "Le tarn", help: [{ if: { has: "nord:course" }, v: 10 }, { if: { present: "corbe" }, v: 15 }] },
        win: { fx: { ep: ["perso", 600], flag: "iv:leif" }, to: "IV_k_leif_course" }, lose: { fx: { pv: -1 }, to: "IV_k_leif_course" } },
      { label: "Revenir au camp", to: "IV_clan_fin" },
    ] }),
  IV_k_leif_course: P({ title: "Trois tours", place: "corbeau",
    text: [
      "Il te prête un renne. Un docile, celui des enfants. Vous partez. Trois tours de lac, en criant. Tu ne sais pas mener un traîneau. Tu apprends dans le premier virage, en tombant presque, et dans le deuxième, en tombant tout à fait.",
      { if: { has: "iv:leif" }, text: "Au troisième tour, tu le rattrapes. Il te laisse passer, ou non, tu ne le sauras jamais. Tu franchis la ligne le premier, couvert de neige, et les enfants du camp hurlent ton nom, les deux, mélangés." },
      { if: { not: { has: "iv:leif" } }, text: "Tu finis la course loin derrière, à pied, en tirant le renne par la longe. Les enfants du camp t'applaudissent quand même, très fort, comme on applaudit le dernier." },
    ],
    choices: [{ label: "Revenir au camp", to: "IV_clan_fin" }] }),

  IV_k_gunnhild: P({ title: "La nouvelle histoire", place: "corbeau",
    text: [
      "Sous son auvent de peaux, la vieille Gunnhild raconte aux enfants. Elle est plus vieille d'un an, et toujours aveugle, et elle tourne toujours la tête vers le feu.",
      "« Il y avait une Mère, au nord, dans un pays tout blanc, qui avait froid parce que ses enfants l'avaient oubliée. Et un jour, un de ses enfants est revenu. Pas pour rester. Pour lui dire qu'il se souvenait. Il ne lui a pas apporté de nom. Il lui a apporté une couverture. »",
      { if: { has: "nord:conte_mere" }, text: "Un enfant proteste : « L'an dernier, tu disais qu'elle descendait chercher les noms ! » Gunnhild hausse les épaules. « L'an dernier, c'était l'an dernier. Les histoires, ça vieillit, comme les gens. Ça apprend des choses. »" },
      "« Et elle a eu chaud ? » demande un petit. Gunnhild réfléchit. « Un peu, dit-elle. C'était une petite couverture. Mais c'était la première. »",
    ],
    choices: [{ label: "Revenir au camp", fx: { ep: ["perso", 400] }, to: "IV_clan_fin" }] }),
};
