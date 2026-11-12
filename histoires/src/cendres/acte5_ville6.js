// Act V · two more sights of Pallanche under the snow on the last night (the child leads, "tu" masculine), off V_ville:
// the tailors' hall, where the guild sewed every customer's name inside the collar, so the frozen can be read back to
// themselves (v:cols); and the physic garden of the Faculty, where an old gardener walks among blank labels saying
// the plants' names aloud (v:jardin).
var A = { act: "V", noLead: true, place: "pallanche" };
function P(o) { return Object.assign({}, A, o); }
var BACK = [{ label: "Revenir sur la place aux Clercs", to: "V_ville" }];
module.exports = {
  V_v_cols: P({ title: "La halle aux Tailleurs",
    text: [
      "Sous la halle aux Tailleurs, les maîtres de la corporation sont assis à leurs tables, l'aiguille en l'air, souriants. Ils ont cédé comme tout le monde. Mais sur la porte de la halle, il y a une affiche, d'avant la neige, d'une écriture d'apprenti : *Par décision des maîtres, à compter de ce jour, tout vêtement sorti de nos ateliers portera, cousu à l'intérieur du col, le nom de qui le porte. Gratis.*",
      "Quelqu'un, dans la corporation, avait compris avant les autres. Ils ont eu trois semaines. Trois semaines à coudre des noms dans des cols, des centaines, des milliers peut-être. Tu sors dans la rue. Dans la queue, devant toi, un homme en manteau neuf. Tu retournes doucement son col. Un ruban de lin, et dessus, au point de chaînette : *ÉLOI BRUNET, CHARRON, RUE DES ROUES.*",
    ],
    choices: [
      { label: "Remonter la queue en lisant les cols, et dire à chacun ce qui est écrit", test: { dom: "social", label: "Les cols", help: [{ if: { has: "v:ecrivain" }, v: 10 }, { if: { has: "v:ecole" }, v: 10 }, { if: { present: "linette" }, v: 15 }] },
        win: { fx: { flag: "v:cols", ep: ["perso", 1200] }, to: "V_v_cols_lire" }, lose: { to: "V_v_cols_froid" } },
      { label: "Lire seulement celui-là, et continuer ta route", fx: { ep: ["perso", 300] }, to: "V_v_cols_un" },
    ] }),
  V_v_cols_lire: P({ title: "Au point de chaînette",
    text: [
      "Tu remontes la queue. Tu retournes les cols, un à un, avec des gestes de valet de chambre. *Margot Lenfant, lingère.* *Hugon Saillard, maître d'armes.* *Petit Jean, à sa mère qui l'aime.* Celui-là, c'est un enfant de quatre ans, et sa mère a fait broder la phrase entière. Tu la lis, tu la lui dis, à l'oreille.",
      "Ils ne se réveillent pas. Mais ils tournent la tête vers toi, chacun, quand tu dis le nom. Quelque chose bouge, au fond des yeux, comme un poisson sous la glace. Quand tu as fait cent cols, tu t'arrêtes. Tes doigts sont gourds. Derrière toi, sur trente pas, les gens de la queue se regardent les uns les autres, et certains, du bout des doigts, cherchent leur propre col.",
    ],
    choices: BACK }),
  V_v_cols_froid: P({ title: "Les doigts gourds",
    text: ["Tu commences. Le froid te prend les doigts au dixième col. Tu ne sens plus le lin. Tu n'arrives plus à retourner les revers, et les points de chaînette sont trop fins, sous la lune, pour tes yeux qui pleurent de froid. Tu en lis douze. Tu dis douze noms. Puis tu mets tes mains sous tes bras et tu restes là, devant un homme dont tu n'as pas pu lire le col, à t'excuser auprès de lui. Il sourit. Il ne sait pas de quoi tu t'excuses."],
    choices: BACK }),
  V_v_cols_un: P({ title: "Éloi Brunet",
    text: ["« Éloi Brunet, dis-tu. Charron, rue des Roues. » L'homme te regarde. Il répète, lentement, *Brunet*. Il ne se souvient de rien d'autre. Mais il regarde ses mains, ses mains de charron, calleuses, noires de graisse d'essieu, et il les ferme et les ouvre, comme quelqu'un qui retrouve un outil. Tu remets son col en place. Tu repars. Il regarde toujours ses mains."],
    choices: BACK }),
  V_v_jardin: P({ title: "Le jardin des simples",
    text: [
      "Derrière la Faculté, le jardin des simples, sous la neige. Des carrés de plantes, bien alignés, et devant chaque carré, une petite étiquette de bois, peinte. Les étiquettes sont blanches. Les plantes ne savent plus ce qu'elles sont : la sauge a l'air d'hésiter, la menthe a l'air de rien.",
      "Entre les carrés, un vieil homme marche, une lanterne à la main, et il parle aux plantes. Le jardinier. Il ne sait plus son nom. Il sait les leurs, en latin, parce qu'il les a dits cinquante ans, chaque matin, en arrosant. *Salvia officinalis. Mentha piperita. Artemisia absinthium.* À chaque nom, il s'arrête, il pose la main sur la plante, et il repart. Il en a pour la nuit. Il y a quatre cents carrés.",
    ],
    choices: [
      { label: "Prendre un pinceau, et récrire les étiquettes sous sa dictée", test: { dom: "savoir", label: "Les simples", help: [{ if: { present: "ombeline" }, v: 20 }, { if: { seen: "II_Q_jardin" }, v: 10 }, { if: { seen: "IV_m_jardin" }, v: 10 }] },
        win: { fx: { flag: "v:jardin", ep: ["perso", 1000] }, to: "V_v_jardin_etiquettes" }, lose: { to: "V_v_jardin_lanterne" } },
      { label: "Marcher avec lui, et tenir la lanterne", fx: { ep: ["perso", 400] }, to: "V_v_jardin_lanterne" },
    ] }),
  V_v_jardin_etiquettes: P({ title: "Les étiquettes",
    text: ["Il dicte. Tu écris, au pinceau, à l'encre des herbiers, sur les étiquettes blanches. *Salvia officinalis.* Il te corrige l'orthographe, sèchement, comme il a dû corriger des générations d'étudiants. « Un seul *l*, petit. » Tu recommences. Vous faites cent carrés. Les étiquettes tiennent : la neige glisse sur l'encre fraîche, comme si le latin était trop vieux pour elle, ou trop sec. À la fin, il te regarde. « Vous ferez un bon apothicaire, dit-il. Vous ne savez rien, mais vous écrivez droit. »"],
    choices: BACK }),
  V_v_jardin_lanterne: P({ title: "Quatre cents carrés",
    text: ["Tu marches avec lui. Tu tiens la lanterne au-dessus de chaque carré, pour qu'il voie ce qu'il nomme. *Hyssopus. Ruta. Melissa.* Il ne te demande pas qui tu es. Il ne te remercie pas. Il dit les noms. Au bout d'une heure, tu dois partir. Tu lui rends la lanterne. Il la prend sans s'arrêter de parler. Quand tu te retournes, au portail, la petite lumière va de carré en carré, très lentement, au fond du jardin blanc, et sa voix arrive jusqu'à toi, de plus en plus faible. *Valeriana.*"],
    choices: BACK }),
};
