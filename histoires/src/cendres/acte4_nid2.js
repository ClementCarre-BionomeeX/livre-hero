// Act IV · a fifth gallery of the Nest under the cirque (the child leads, "tu" masculine), off IV_N_galeries: the
// gallery of echoes, where the Glaneurs' meals come back as voices, and where the names they could not digest are
// frozen in the walls like flies in amber. Freeing one (iv:nid_echo) helps to speak to the old Glaneuse.
var A = { act: "IV", noLead: true, place: "moutier" };
function P(o) { return Object.assign({}, A, o); }
var BACK = [{ label: "Revenir dans la salle des galeries", to: "IV_N_galeries" }];
var RENDU = { has: "nord:rendu=sauvelune" };
module.exports = {
  IV_N_echos: P({ title: "La galerie des échos",
    text: [
      "Une galerie basse, où il faut marcher courbé. Les parois sont striées, comme l'intérieur d'un coquillage, et elles parlent. Pas fort. Des bribes. *Passe-moi le sel.* *Il va pleuvoir, regarde les hirondelles.* *Je t'avais dit de fermer la barrière.* Ce que les Glaneurs ont mangé leur ressort par la glace, comme un rot, des années après. Des phrases de rien du tout, de tous les jours, qui n'appartiennent plus à personne.",
      { if: { not: RENDU }, text: "Et soudain, une voix que tu connais. *Si tu pouvais le faire descendre avant qu'il se rompe le cou.* Agathe. Le matin de la fête. Elle sort du mur, à hauteur de ta tête, dit sa phrase, et repart dans la glace. Tu poses la main sur la paroi. Elle est froide, comme tout le reste." },
      { if: RENDU, text: "Tu tends l'oreille, malgré toi, pour reconnaître une voix de Sauvelune. Il n'y en a pas. Sauvelune a repris tout ce qu'on lui avait pris. Ici, il ne reste que des inconnus." },
      "Au fond de la galerie, la glace est plus claire. Et dedans, pris comme des mouches dans l'ambre, des noms. Écrits. Des lettres noires, suspendues dans la glace, à des profondeurs différentes. Des noms que les Glaneurs n'ont pas pu avaler, et qu'ils ont recrachés là.",
    ],
    choices: [
      { label: "Chauffer la glace de tes mains, et en libérer un", test: { dom: "magie", label: "Les noms dans la glace", help: [{ if: { present: "givre" }, v: 15 }, { if: { present: "gaspard" }, v: 10 }, { if: { has: "glaneur_petit:nourri" }, v: 10 }] },
        win: { fx: { flag: "iv:nid_echo", ep: ["perso", 1000] }, to: "IV_N_echos_libre" }, lose: { fx: { pv: -2 }, to: "IV_N_echos_froid" } },
      { label: "Lire les noms, sans y toucher", fx: { ep: ["perso", 400] }, to: "IV_N_echos_lire" },
    ] }),
  IV_N_echos_libre: P({ title: "Un nom, dans la main",
    text: [
      "Tu poses les paumes à plat sur la glace, et tu attends. Tes mains brûlent, puis ne sentent plus rien. La glace fond, très lentement, en larmes qui coulent jusqu'au sol. Un nom remonte vers toi, lettre après lettre, comme un poisson vers la surface. Il sort. Il reste un moment dans le creux de ta main, noir, humide, léger comme une feuille morte.",
      "*Odile.* Rien d'autre. Pas de famille, pas de village. Odile. Tu ne sais pas qui c'était. Tu le dis à voix haute, une fois, pour qu'il ait été dit. Le nom s'envole, comme une cendre, vers le haut de la galerie, et disparaît. Derrière toi, dans les parois, les bribes de phrases se sont tues. Toute la galerie écoute.",
    ],
    choices: BACK }),
  IV_N_echos_froid: P({ title: "Le froid dans les mains",
    text: ["Tu poses les paumes sur la glace. Elle ne fond pas. C'est toi qui gèles. Le froid te monte aux poignets, aux coudes, il te prend les doigts un par un, et tu arraches tes mains de la paroi avec un bruit de peau qui reste collée. Tu les mets sous tes bras. Elles te font mal pendant une heure. Dans la glace, le nom que tu visais n'a pas bougé d'un cheveu. Il attendra quelqu'un d'autre."],
    choices: BACK }),
  IV_N_echos_lire: P({ title: "Les noms dans l'ambre",
    text: ["Tu lis. Lentement, en te penchant, en plissant les yeux, ceux qui sont près de la surface. *Odile. Bastien Croq. La petite Jacquette des Noues. Frère Albin. Marcelline.* Tu ne connais personne. Tu continues. Au bout d'un moment, tu comprends que ce sont des noms que personne, nulle part, n'a jamais réclamés. Ni dans un registre, ni dans une prière, ni dans une chanson. Les Glaneurs n'ont pas pu les avaler parce qu'ils n'avaient pas de goût : personne ne les avait jamais dits avec amour. Tu les dis. Avec ce que tu as."],
    choices: BACK }),
};
