// Act IV · "Les foins", a day of haymaking at Sauvelune a year later, if the village was given back (the child leads,
// "tu" masculine). Opened from IV_sv_place. Mowing in line with the men (test), Pim's song if he has his name, the
// meal in the shade, the hay cart, and the evening. Echoes pim:nom, tess:bal, mathurin:ruches. iv:foins.
var A = { act: "IV", noLead: true };
function P(o) { return Object.assign({}, A, o); }
module.exports = {
  IV_f_pre: P({ takes: "day", title: "Les foins", place: "sauvelune",
    text: [
      "C'est le jour des foins, au grand pré du bas. Tout le village y est, les hommes la faux sur l'épaule, les femmes avec les râteaux, les enfants avec les cruches. Le ciel est bleu, dur, sans un nuage. Il fait déjà chaud à huit heures.",
      "Joris te tend une faux. La tienne, celle de l'an dernier, qu'il a gardée, affûtée, pendue au mur de la grange. « On n'allait pas la donner à quelqu'un d'autre », dit-il. Il garde pour lui qu'il t'a cru perdu. Il l'a affûtée quand même.",
    ],
    choices: [
      { label: "Prendre ta place dans la ligne", test: { dom: "nature", label: "La faux", help: [{ if: { present: "gaspard" }, v: 5 }, { if: { present: "corbe" }, v: 10 }] },
        win: { fx: { ep: ["perso", 600] }, to: "IV_f_ligne" }, lose: { fx: { pv: -2 }, to: "IV_f_ligne_rate" } },
      { back: "IV_sv_place" },
    ] }),
  IV_f_ligne: P({ title: "La ligne", place: "sauvelune",
    text: [
      "Tu prends ta place, entre Joris et le grand Bastien. La faux part, revient, part, revient. L'herbe tombe en andains réguliers, avec un bruit de soie déchirée. Ton corps se souvient. Il y a des choses qu'on garde parce qu'on ignore les avoir.",
      "Au bout de la première rangée, Joris s'arrête pour affûter. Il te regarde faire. Il hoche la tête. C'est le plus long compliment qu'il t'ait jamais fait.",
    ],
    choices: [{ label: "Continuer jusqu'à midi", to: "IV_f_midi" }] }),
  IV_f_ligne_rate: P({ title: "La ligne", place: "sauvelune",
    text: [
      "Tu prends ta place. La faux part de travers, accroche une motte, te tord le poignet. La deuxième fois, tu te coupes au mollet, juste assez pour saigner. Bastien rit. Joris ne rit pas. Il te prend la faux, il te montre, comme quand tu avais dix ans. Le pied, les hanches, le bras qui suit.",
      "Tu as oublié. Le geste. Ton corps l'a donné quelque part, dans le blanc, sans te demander. Tu le réapprends. Au bout d'une heure, tu fauches presque droit.",
    ],
    choices: [{ label: "Continuer jusqu'à midi", to: "IV_f_midi" }] }),
  IV_f_midi: P({ title: "Midi", place: "sauvelune",
    text: [
      "À midi, on s'assied à l'ombre de la haie. Agathe a apporté du pain, du lard, des oignons, du fromage. Les cruches passent de main en main. On boit à la régalade, la tête en arrière, et l'eau coule dans le cou, et c'est la meilleure eau du monde.",
      { if: { has: "pim:nom" }, text: "Pim, qui a grandi d'une tête, se lève, monte sur une meule de foin, et entonne la chanson des foins. Tout le monde chante avec lui. Au deuxième couplet, il change les paroles, comme on le fait chaque année, et il met ton nom dedans, et tout le monde rit, et chante ton nom, faux, fort, à pleine gorge." },
      { if: { not: { has: "pim:nom" } }, text: "Pim, qui a grandi d'une tête, se lève et commence la chanson des foins. Il s'arrête au premier couplet. La suite s'est perdue, pour lui comme pour tous. Ils se regardent. Quelqu'un fredonne l'air, sans les paroles. On fredonne tous, un moment, puis on se tait, et on mange." },
      { if: { has: "mathurin:ruches" }, text: "Le vieux Mathurin a apporté un pot de miel. Il le fait passer, avec une cuillère, et il annonce, pour chaque cuillerée, de quelle ruche elle vient. La Reine-Claude. La Folle. Personne n'écoute. Il le dit quand même." },
    ],
    choices: [
      { label: "Dormir un moment, à l'ombre", fx: { pv: 4 }, to: "IV_f_sieste" },
      { label: "Aider les femmes à faner", to: "IV_f_faner" },
    ] }),
  IV_f_sieste: P({ title: "L'ombre", place: "sauvelune",
    text: ["Tu t'allonges sous la haie, le chapeau sur les yeux. Les abeilles passent. Quelqu'un ronfle, plus loin. Tu ne dors pas tout à fait. Tu écoutes. Le pré, le bief, la faux qu'on affûte, un rire de femme, une cigale. Tu les ranges, un par un, quelque part derrière les yeux, très soigneusement, là où personne ne viendra les chercher."],
    choices: [{ label: "Charger la charrette", to: "IV_f_charrette" }] }),
  IV_f_faner: P({ title: "Faner", place: "sauvelune",
    text: [
      "Les femmes retournent l'herbe coupée, au râteau, pour qu'elle sèche des deux côtés. Elles chantent autre chose, une chanson de femmes, que les hommes ne connaissent pas. Elles te laissent prendre un râteau. Elles ne s'arrêtent pas de chanter.",
      { if: { has: "tess:bal" }, text: "Tess est là, dans la rangée, les manches retroussées sur des bras de forgeronne. Elle te fait une place à côté d'elle. Elle se tait sur le bal de l'an dernier. Elle te pousse du coude, une fois, quand tu fanes de travers. Ça veut tout dire." },
    ],
    choices: [{ label: "Charger la charrette", fx: { ep: ["perso", 300] }, to: "IV_f_charrette" }] }),
  IV_f_charrette: P({ title: "La charrette", place: "sauvelune",
    text: [
      "Le soir, on charge la grande charrette, à la fourche, et le foin monte, monte, plus haut que les ridelles, et on y hisse les enfants, tout en haut, pour tasser. On te hisse aussi. Tu es trop vieux. Personne ne le dit.",
      "La charrette remonte vers le village, lentement, au pas des bœufs. Tu es couché sur le foin, sur le dos. Le ciel devient orange, puis rose, puis vert. Pim est couché à côté de toi. Il dit : « Tu repars demain. » Ce n'est pas une question.",
    ],
    choices: [
      { label: "« Oui. Mais je reviens. »", fx: { flag: "iv:foins", ep: ["perso", 800] }, to: "IV_f_soir" },
      { label: "Ne rien dire, et lui prendre la main", fx: { flag: "iv:foins", ep: ["perso", 800] }, to: "IV_f_soir" },
    ] }),
  IV_f_soir: P({ title: "Le soir des foins", place: "sauvelune",
    text: [
      "Pim se tait. Il regarde le ciel. Il dit, au bout d'un long moment : « La première étoile, c'est la mienne. On avait dit. » Tu ne te souviens pas d'avoir dit ça. Tu dis oui. Il est content.",
      "La charrette entre dans la cour du moulin. La grange sent le foin neuf, à en tourner la tête. Il fait nuit. Personne ne parle de demain.",
    ],
    choices: [{ back: "IV_sv_place" }] }),
};
