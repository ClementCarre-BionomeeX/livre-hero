// Act II · more of the cirque of the Moissons (north, Corbe leads, "tu" feminine): a file of Glaneurs carrying
// something from Sauvelune, and the black cliff from which the whole cirque can be read. Plus, in Act IV, three more
// scenes at the camp of the Corbeau a year later (the child leads, "tu"): Torgal, Arnald, and the clan's first letters.
var N = { act: "II", noLead: true };
var Q = { act: "IV", noLead: true };
function P(o) { return Object.assign({}, N, o); }
function P4(o) { return Object.assign({}, Q, o); }
module.exports = {
  II_c_file: P({ title: "La file", place: "cirque",
    text: [
      "Une file de petits Glaneurs descend la pente la plus proche, en silence, chacun portant quelque chose dans ses mains jointes. Des lueurs, pour la plupart. Mais l'avant-dernier porte un objet. Un vrai. Une enseigne de bois peinte, grande comme un plateau, qu'il tient à deux mains au-dessus de sa tête.",
      "AU MOUTON BLEU. L'enseigne de l'auberge de Sauvelune.",
      { with: "enfant", text: "L'enfant de Sauvelune s'est figé. « J'ai bu ma première bière sous cette enseigne, dit-il. J'avais onze ans. Joris m'a ramené à la maison sur son dos. »" },
    ],
    choices: [
      { label: "Reprendre l'enseigne au porteur", test: { dom: "discretion", label: "La file", help: [{ if: { present: "pie" }, v: 20 }, { if: { present: "enfant" }, v: 5 }] },
        win: { fx: { flag: "nord:enseigne", ep: ["perso", 900] }, to: "II_c_file_ok" }, lose: { to: "II_c_file_combat" } },
      { label: "La laisser descendre vers le géant", to: "II_N4_cirque" },
    ] }),
  II_c_file_combat: P({ title: "La pente",
    combat: { title: "Les porteurs", enemies: ["glaneur_petit", "glaneur_petit"], terrain: "nature", range: "contact",
      flee: { dom: "nature", label: "Remonter la pente", to: "II_N4_cirque" },
      win: { fx: { flag: "nord:enseigne", ep: ["seance", 900] }, to: "II_c_file_ok" }, lose: { fx: { pv: -3 }, to: "II_N4_cirque" } },
    text: ["Le Glaneur lâche l'enseigne et se retourne. Toute la file se retourne avec lui, sans hâte, sans colère. Ils ne connaissent pas la colère. Ils connaissent la faim."],
    choices: [] }),
  II_c_file_ok: P({ title: "Au Mouton Bleu", place: "cirque",
    text: [
      "L'enseigne est lourde, et froide, et la peinture s'écaille. Le mouton est plus gris que bleu. Tu la cales contre un rocher, à l'abri, face au sud, du côté de Sauvelune.",
      "Le soir, en passant, tu vois que quelqu'un de la compagnie a gravé dessous, au couteau, une date et un nom. Personne ne dit qui.",
    ],
    choices: [{ label: "Revenir au bord du cirque", to: "II_N4_cirque" }] }),

  II_c_falaise: P({ title: "La falaise noire", place: "cirque",
    text: [
      "La falaise noire domine le cirque d'un côté. On peut y monter, par une cheminée, si on n'a pas peur du vide. De là-haut, on doit voir tout le fond : le géant, les files, les passages entre les rochers.",
    ],
    choices: [
      { label: "Grimper", test: { dom: "nature", label: "La cheminée", help: [{ if: { item: "corde" }, v: 15 }, { if: { present: "ysolde" }, v: 5 }] },
        win: { fx: { flag: "nord:falaise", ep: ["seance", 700] }, to: "II_c_falaise_vue" }, lose: { fx: { pv: -3 }, to: "II_c_falaise_chute" } },
      { label: "Ne pas tenter le diable", to: "II_N4_cirque" },
    ] }),
  II_c_falaise_vue: P({ title: "D'en haut", place: "cirque",
    text: [
      "D'en haut, le cirque se lit comme une carte. Le géant au milieu. Les files de Glaneurs qui descendent de toutes les pentes, comme des rayons de roue. Et, entre deux rayons, au sud, un couloir où ne passe personne : une ravine, où la neige est plus grise. On pourrait arriver jusqu'au géant par là, sans croiser une seule file.",
      "Tu regardes le géant longtemps. De là-haut, il n'a pas l'air d'un monstre. Il a l'air d'un très vieil homme assis, qui mange parce qu'on lui apporte à manger.",
    ],
    choices: [{ label: "Redescendre", to: "II_N4_cirque" }] }),
  II_c_falaise_chute: P({ title: "La cheminée", place: "cirque",
    text: ["À mi-hauteur, une prise cède. Tu redescends la cheminée beaucoup plus vite que tu ne l'as montée, sur le dos, en t'écorchant tout ce qui dépasse. En bas, les autres te regardent. Tu dis que tu as vu ce qu'il fallait voir. Ce n'est pas vrai."],
    choices: [{ label: "Revenir au bord du cirque", to: "II_N4_cirque" }] }),

  // ------------------------------------------------------------ Acte IV, au camp du Corbeau
  IV_k_torgal: P4({ title: "Torgal", place: "corbeau",
    text: [
      "Le vieux Torgal est toujours sous son auvent, devant son tambour plat. Il est plus vieux d'un an et de cent ans.",
      { after: "nord:enfant", text: "Il te reconnaît. Il ne s'arrête pas de jouer." },
      { before: "nord:enfant", text: "Il lève les yeux sur toi, te pèse, et ne s'arrête pas de jouer." },
      { if: { has: "nord:lignee" }, text: "Il chante les lignées, d'une traite. Quand il arrive à Haldis, il chante Sigrun, et il te regarde en la chantant, et il appuie dessus, un peu, comme sur une marche qu'on a réparée." },
      { if: { not: { has: "nord:lignee" } }, text: "Il chante les lignées. Il s'arrête après Haldis. Il recommence. Il s'arrête au même endroit. Il te regarde. « Toujours pas, dit-il. Il y a un an que j'attends quelqu'un qui sache. »" },
      { if: { any: [{ has: "nord:nouveau_ne=peint" }, { has: "nord:nouveau_ne=garde" }] }, text: "Un petit garçon d'un an titube devant l'auvent, un bonnet de renne sur la tête. Sa mère le rattrape par le col. « Eirik ! » Torgal sourit, sans s'arrêter de frapper. « Celui-là, dit-il, il a un nom que la Mère n'a pas eu. »" },
      "« Cette année, dit-il en frappant, on a ajouté des noms. Ceux qu'on a perdus dans l'année blanche. On ne les met pas à la fin. On les met là où ils étaient. Ça fait des trous qui ne sont pas des trous. »",
    ],
    choices: [{ label: "L'écouter jusqu'au bout", fx: { ep: ["perso", 500] }, to: "IV_clan_fin" }] }),
  IV_k_arnald: P4({ title: "Le troupeau", place: "corbeau",
    text: [
      "Le troupeau de rennes est plus petit qu'avant. La moitié des bêtes est partie vers le col pendant l'année blanche, et n'est jamais revenue. Le vieux Arnald compte celles qui restent, tous les soirs, deux fois, pour être sûr.",
      { if: { has: "co:renne=ramenee" }, text: "Une vieille femelle maigre broute au milieu, avec une ceinture de cuir à moitié mâchée qui lui pend de la bouche. « Brindille, dit Arnald. Celle de Corbe. Elle est la seule de cette année-là qui ne soit pas partie. » Il crache par terre. « Ça se soigne, cette chose. Ça se soigne avec une nuit et une longe. Personne ne l'avait jamais essayé. »" },
      { if: { not: { has: "co:renne=ramenee" } }, text: "« Il y en avait une, dit Arnald, que Corbe avait nourrie à la main. Brindille. Partie la première. » Il compte. Il recompte. Il en manque toujours autant." },
    ],
    choices: [{ label: "L'aider à compter", fx: { ep: ["perso", 300] }, to: "IV_clan_fin" }] }),
  IV_k_lettres: P4({ title: "Les lettres", place: "corbeau",
    text: [
      "Au bord du camp, devant une tente, une femme du clan trace des signes dans la cendre avec un bâton. Autour d'elle, une dizaine d'enfants, accroupis, recopient avec des bâtons à eux. Des lettres. Le clan du Corbeau, qui n'a jamais rien écrit en quarante générations, apprend à écrire.",
      "« Les noms qu'on chante, on peut les perdre, dit la femme. On l'a vu cette année. Ceux qu'on écrit aussi. Mais pas les deux en même temps. » Elle te tend un bâton. « Écris le tien. Les enfants veulent voir comment ça fait, un nom de quelqu'un d'en bas. »",
    ],
    choices: [{ label: "Écrire tes deux noms dans la cendre", fx: { flag: "iv:clan_lettres", ep: ["perso", 600] }, to: "IV_k_lettres_fin" }] }),
  IV_k_lettres_fin: P4({ title: "Dans la cendre", place: "corbeau",
    text: ["Tu écris. Ton nom de Sauvelune, et l'autre. Les enfants recopient, en tirant la langue. Le plus petit fait une faute à l'autre nom, et la femme ne la corrige pas. « Il s'en souviendra mieux comme ça », dit-elle."],
    choices: [{ label: "Revenir au camp", to: "IV_clan_fin" }] }),
};
