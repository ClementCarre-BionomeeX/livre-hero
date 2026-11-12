// Act I · two more corners of the tower of the Chancellery for Maître Hylas (Hylas leads, "tu" masculine, an old blind
// greffier), off HY_tour: the pages' dormitory at night, where the children whisper their real names under the
// blankets (hylas:dortoir=tu or =signale; in Act V they have carved what they kept under the beds); and a page's copy
// test, which Hylas is asked to judge by ear.
var HY = { act: "I", place: "pallanche", noLead: true };
function P(o) { return Object.assign({}, HY, o); }
var BACK = [{ label: "Revenir dans la tour", to: "HY_tour" }];
module.exports = {
  HY_k_dortoir: P({ title: "Le dortoir des pages",
    text: [
      "Tu montes sous les combles, la nuit, parce que tu ne dors pas et que c'est le seul étage où ça ne sent pas l'encre. Cent lits de fer, cent souffles. Tu les entends dormir, d'ici, comme on entend une ruche en hiver. Tu connais ce dortoir. Tu y as dormi, il y a soixante-quatre ans, au onzième lit du deuxième rang, sous un autre numéro.",
      "Tu t'arrêtes au milieu de l'allée. Il y a un bruit, sous le bruit des souffles. Un chuchotement. Puis un autre, plus loin, qui lui répond. Des enfants qui se parlent d'un lit à l'autre, sous les couvertures, très bas. Tu tends l'oreille. Ce ne sont pas des secrets. Ce sont des noms. *Jeannot. — Margot. — Colin. — Annette.* Leurs noms à eux, ceux d'avant, qu'on leur a interdit de prononcer. Ils se les disent chaque nuit, pour les garder.",
      "Le règlement est clair. Tu l'as signé toi-même, il y a trente ans, en tant que greffier du premier rang. Les noms d'avant sont une faute. Le maître des pages doit être averti.",
    ],
    choices: [
      { label: "Toussoter, pour qu'ils sachent qu'on est là, et repartir sans rien dire", fx: { flag: ["hylas:dortoir", "hylas:dortoir=tu"], ep: ["perso", 500] }, to: "HY_k_dortoir_tu" },
      { label: "Rester, et écouter jusqu'au bout", fx: { flag: ["hylas:dortoir", "hylas:dortoir=tu"], ep: ["perso", 300] }, to: "HY_k_dortoir_ecoute" },
      { label: "Faire ce que dit le règlement", fx: { flag: ["hylas:dortoir", "hylas:dortoir=signale"] }, to: "HY_k_dortoir_regle" },
    ] }),
  HY_k_dortoir_tu: P({ title: "Une toux",
    text: ["Tu toussotes. Les chuchotements s'arrêtent net. Cent souffles retenus. Tu restes immobile un instant, pour qu'ils comprennent que tu as entendu. Puis tu repars, en tapant ta canne un peu plus fort que nécessaire sur le plancher, pour qu'ils sachent où tu es, et que tu t'en vas. Dans l'escalier, derrière toi, très bas, ça reprend. *Jeannot. — Margot.* Tu ne t'arrêtes pas. Tu souris dans le noir. Tu ne sais pas depuis combien de temps tu n'as pas souri."],
    choices: BACK }),
  HY_k_dortoir_ecoute: P({ title: "Cent noms",
    text: [
      "Tu t'assieds sur un lit vide, au bout de l'allée, sans bruit. Tu écoutes. Ça dure une heure. Les noms passent d'un lit à l'autre, de rang en rang, comme une chandelle qu'on se passe. Parfois quelqu'un hésite. Un autre lui souffle. Personne n'oublie personne, ici, la nuit.",
      "Au deuxième rang, onzième lit, une petite fille se tait. Elle écoute, comme toi. Quand vient son tour, il y a un silence.",
      { before: "linette:nom_dit", text: "Elle n'a rien à dire. Personne ne dit rien pour elle. La ronde passe au lit suivant, comme on enjambe une flaque. Toi, tu sais ce qu'il y a dans la flaque. Tu as tenu le registre gris." },
      { after: "linette:nom_dit", text: "Puis une voix qui n'en a pas l'habitude, à peine un souffle : *Linette.* La ronde hésite, une seconde, et passe au lit suivant." },
      "Tu restes jusqu'à ce que le dernier se taise. Puis tu redescends, avec cent noms dans la tête, et le sentiment d'avoir volé quelque chose de très précieux, ou de l'avoir reçu.",
    ],
    choices: BACK }),
  HY_k_dortoir_regle: P({ title: "Le règlement",
    text: ["Tu descends chez le maître des pages. Tu le réveilles. Tu lui dis ce que tu as entendu, sans un nom, sans un numéro : tu ne sais pas lesquels, tu es aveugle. Il te remercie. Il monte. Tu entends, de ta cellule, à travers trois étages, les lits qu'on tire, les voix qui se taisent, une règle sur une main. Puis plus rien. Le lendemain, au scriptorium, cent plumes grattent un peu plus vite que d'habitude. Le règlement est respecté. Tu l'as signé. Tu te répètes ça toute la journée."],
    choices: BACK }),
  HY_k_examen: P({ title: "L'épreuve de copie",
    text: [
      "Au troisième, le maître des pages t'attend avec une page de douze ans et une feuille. Une épreuve de copie : si la page passe, elle monte au premier rang des copistes ; si elle échoue, elle retourne au balai pour un an. Il faut un greffier pour juger. Il n'y a que toi de libre. Le maître ne semble pas trouver étrange de faire juger une copie par un aveugle.",
      "Il te lit la cession originale, à voix haute. Puis la page te lit sa copie, d'une voix qui tremble. Tu écoutes. C'est parfait. Presque. À la onzième ligne, elle a écrit *le souvenir de sa mère* au lieu de *le souvenir de son père*. Deux petits mots. Une seule faute, et la règle dit : une faute, au balai.",
    ],
    choices: [
      { label: "Appliquer la règle", fx: { flag: "hylas:examen=regle" }, to: "HY_k_examen_regle" },
      { label: "Dire que c'est parfait", fx: { flag: "hylas:examen=passe", ep: ["perso", 300] }, to: "HY_k_examen_passe" },
      { label: "Lui demander de relire la onzième ligne, lentement, pour elle-même", test: { dom: "social", label: "La onzième ligne", help: [{ if: { has: "hylas:page" }, v: 10 }, { if: { has: "hylas:dortoir=tu" }, v: 10 }] },
        win: { fx: { flag: "hylas:examen=relu", ep: ["perso", 600] }, to: "HY_k_examen_relu" }, lose: { fx: { flag: "hylas:examen=regle" }, to: "HY_k_examen_regle" } },
    ] }),
  HY_k_examen_regle: P({ title: "Au balai",
    text: ["Tu dis : « Onzième ligne. *Sa mère* pour *son père*. » Il y a un silence. Le maître des pages dit : « Au balai. » La page ne dit rien. Tu l'entends ramasser sa feuille, la plier, la mettre dans sa manche. En sortant, elle s'arrête à la porte, et elle dit, très bas, sans colère : « C'était ma mère qui me manquait, maître. Pas mon père. » Puis elle s'en va. Tu restes avec la cession originale sous la main, et le souvenir de quelqu'un, quelque part, qui ne sera jamais rendu à personne."],
    choices: BACK }),
  HY_k_examen_passe: P({ title: "Parfait",
    text: ["« Parfait », dis-tu. Le maître des pages signe. La page monte au premier rang. Elle te remercie d'une voix qui ne tremble plus. Tu sais que tu as menti. Tu sais aussi que demain, au Bureau, une femme viendra demander ce qu'elle a cédé, et qu'on lui lira, peut-être, sur cette copie, le souvenir d'une mère qui n'est pas la sienne. Tu te dis qu'il y a pire. Tu n'en es pas sûr."],
    choices: BACK }),
  HY_k_examen_relu: P({ title: "Pour elle-même",
    text: [
      "« Relis la onzième ligne, dis-tu. Lentement. Pas pour moi. Pour toi. » Elle relit. Elle s'arrête au milieu. Tu entends sa respiration changer. Elle a vu. Elle prend le grattoir, sans demander, et elle corrige, un mot, deux, très soigneusement. Le maître des pages ne dit rien : il n'a pas entendu de faute. Elle n'en a pas fait. Elle l'a trouvée.",
      "En sortant, elle passe tout près de toi, et elle dit : « J'avais écrit ma mère. » Tu dis : « Je sais. » Elle dit : « Je ne l'ai pas fait exprès. » Tu dis : « Je sais aussi. » Elle s'en va au premier rang. Toi, tu restes un moment, à te demander combien de fautes comme celle-là tu as laissé passer en soixante ans sans les entendre.",
    ],
    choices: BACK }),
};
