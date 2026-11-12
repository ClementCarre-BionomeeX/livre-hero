// Act IV · more of the queen's camp around Brenne on the eve of the Lisse (the child leads, "tu"), off IV_br: the field
// hospital where the wounded have forgotten their wounds, the chaplain who stamps names on lead tags, and the boy from
// Ysolde's spring recruits a year later (ys:recrue=renvoye|ecuries).
var A = { act: "IV", noLead: true };
function P(o) { return Object.assign({}, A, o); }
module.exports = {
  IV_br_infirmerie: P({ title: "L'infirmerie", place: "brenne",
    text: [
      "Sous une grande tente ouverte sur les côtés, l'infirmerie du camp. Des paillasses, des seaux, une odeur de vinaigre et de sang cuit. Un chirurgien, les manches retroussées, et deux sœurs grises qui roulent des bandes.",
      "Les blessés des escarmouches de la semaine. Ils sont étranges. Un homme qui a un trou dans la cuisse rit avec son voisin. Un autre, le bras en écharpe, demande à rejoindre sa compagnie demain. « Ils ont cédé leurs blessures, dit le chirurgien, sans lever la tête. Au clerc du camp, pour la solde. Ils ne savent plus qu'ils ont mal. Alors ils se relèvent, et ça se rouvre, et ils meurent sans comprendre. »",
    ],
    choices: [
      { label: "Aider le chirurgien, cette nuit", test: { dom: "savoir", label: "Les pansements", help: [{ if: { present: "ombeline" }, v: 20 }, { if: { item: "tisane_veille" }, v: 10 }, { if: { present: "hylas" }, v: 5 }] },
        win: { fx: { flag: "iv:infirmerie", ep: ["perso", 1000] }, to: "IV_br_infirmerie_ok" }, lose: { to: "IV_br_infirmerie_rate" } },
      { label: "Ressortir", to: "IV_br" },
    ] }),
  IV_br_infirmerie_ok: P({ title: "La nuit à l'infirmerie", place: "brenne",
    text: [
      "Tu restes la nuit. Tu tiens les lampes, tu fais bouillir l'eau, tu attaches les poignets des blessés qui veulent se lever, et tu leur dis, à chacun, où ils ont mal. « Là. À la cuisse. Tu as reçu un carreau. » Ils te regardent, incrédules. Puis ils regardent leur cuisse. Et ils ont mal, et ils se recouchent.",
      "Au matin, le chirurgien te tend un gobelet de vin chaud. « Tu leur as rendu leurs blessures, dit-il. C'est la première fois que j'entends un blessé dire merci pour ça. » Il boit. « Trois d'entre eux vivront. Ils n'auraient pas vécu. »",
    ],
    choices: [{ label: "Ressortir dans le camp", to: "IV_br" }] }),
  IV_br_infirmerie_rate: P({ title: "Les bandes", place: "brenne",
    text: ["Tu roules des bandes, maladroitement, et tu en fais tomber la moitié dans la boue. Une sœur grise te les reprend des mains sans un mot. Le chirurgien te montre la sortie d'un mouvement de menton. Il n'a pas le temps. Derrière toi, un blessé se lève en riant, et retombe."],
    choices: [{ label: "Ressortir dans le camp", to: "IV_br" }] }),

  IV_br_plaques: P({ title: "L'aumônier", place: "brenne",
    text: [
      "Devant la chapelle de toile, l'aumônier du camp, un gros homme à la barbe grise, a installé une enclume de campagne et un poinçon. Une file de soldats. Pour chacun, il frappe une plaque de plomb ronde, percée d'un trou : le nom, le village, la compagnie. Le soldat la passe à son cou, sur un lacet.",
      "« Les greffiers prennent les noms dans les têtes, dit-il en frappant. Moi, je les mets dans le plomb. Le plomb, ça ne se cède pas. Si un garçon tombe demain sans savoir qui il est, quelqu'un saura le lire. » Il frappe. « Et on l'enterrera avec. Pas sous une croix vide. »",
    ],
    choices: [
      { label: "Te faire frapper une plaque, toi aussi", fx: { item: "plaque_plomb", ep: ["perso", 400] }, to: "IV_br_plaques_toi" },
      { label: "Prendre le poinçon, et frapper avec lui jusqu'au soir", fx: { flag: "iv:plaques", ep: ["perso", 800] }, to: "IV_br_plaques_aide" },
    ] }),
  IV_br_plaques_toi: P({ title: "Une plaque", place: "brenne",
    text: ["Il te demande ton nom. Tu le lui dis. Le nom de Sauvelune. Il frappe. Puis il te regarde, le poinçon levé, comme s'il attendait autre chose. Tu ne dis rien. Il hoche la tête, et il frappe, en dessous, en petit, un deuxième mot, sans te demander lequel : *Revenu.* « Ça se voit sur toi », dit-il. Tu passes la plaque à ton cou. Elle est froide, puis elle ne l'est plus."],
    choices: [{ label: "Ressortir dans le camp", to: "IV_br" }] }),
  IV_br_plaques_aide: P({ takes: "evening", title: "Le poinçon", place: "brenne",
    text: [
      "Tu frappes. Il épelle, tu frappes. Les noms passent sous tes mains, cent, deux cents. Des noms de vallées, de fermes, de rues de Vasselin. Un garçon ne sait pas écrire le sien, et ne sait plus très bien le dire. Vous le cherchez ensemble, à trois, avec son voisin de compagnie, qui finit par s'en souvenir pour lui.",
      "Le soir, tu as les mains noires de plomb, et des ampoules, et dans la tête deux cents noms que tu ne retiendras pas. Mais ils sont dans le plomb, et ils y resteront.",
    ],
    choices: [{ label: "Ressortir dans le camp", to: "IV_br" }] }),

  IV_br_recrue: P({ title: "Le petit de Brenne", place: "brenne",
    text: [
      { with: "ysolde", if: { has: "ys:recrue=renvoye" }, text: "Au bord du camp, un garçon d'une quinzaine d'années, en habits de ferme, qui vend des œufs aux cuisines. Il a la voix qui a mué, maintenant. Il te regarde passer, puis il voit Ysolde. « Capitaine, dit-il. Vous m'avez renvoyé chez moi, l'an dernier. Je vous ai détestée tout l'été. » Il lui tend un œuf. « Tous ceux de mon rang sont là-bas, maintenant, avec des piques. Moi, je vends des œufs. Merci. »" },
      { without: "ysolde", if: { has: "ys:recrue=renvoye" }, text: "Au bord du camp, un garçon d'une quinzaine d'années, en habits de ferme, qui vend des œufs aux cuisines. Il a la voix qui a mué, maintenant. Il te regarde passer, puis il cherche quelqu'un derrière toi. « Vous connaissez la capitaine de Brenne, dit-il. Elle m'a renvoyé chez moi, l'an dernier. Je l'ai détestée tout l'été. » Il te tend un œuf. « Tous ceux de mon rang sont là-bas, maintenant, avec des piques. Moi, je vends des œufs. Dites-lui merci. »" },
      { with: "ysolde", if: { has: "ys:recrue=ecuries" }, text: "Aux écuries du fort, un garçon d'une quinzaine d'années panse un grand cheval gris. Il a la voix qui a mué, maintenant, et des épaules. Il se redresse en voyant Ysolde. « Vous m'avez mis aux écuries, l'an dernier, au lieu des piques, dit-il. J'ai appris les chevaux. Demain, je reste ici, avec eux. On ne fait pas monter les palefreniers au pont. » Il flatte le cheval. « Je sais lequel est le vôtre. Je le garderai. »" },
      { without: "ysolde", if: { has: "ys:recrue=ecuries" }, text: "Aux écuries du fort, un garçon d'une quinzaine d'années panse un grand cheval gris. Il a la voix qui a mué, maintenant, et des épaules. « La capitaine m'a mis aux écuries, l'an dernier, au lieu des piques, dit-il. J'ai appris les chevaux. Demain, je reste ici, avec eux. On ne fait pas monter les palefreniers au pont. » Il flatte le cheval. « Dites-lui que je sais lequel est le sien. Je le garderai. »" },
      { if: { not: { any: [{ has: "ys:recrue=renvoye" }, { has: "ys:recrue=ecuries" }] } }, text: "Dans le rang des piquiers, un garçon trop jeune, qui tient sa pique comme un balai. Il a la voix qui a mué, à peine. Sur sa plaque de plomb, on lit *Brenne*. Il était dans les recrues de printemps de l'an dernier. Il a eu un an pour apprendre. Ça ne se voit pas." },
    ],
    choices: [{ label: "Ressortir dans le camp", fx: { ep: ["perso", 300] }, to: "IV_br" }] }),
};
