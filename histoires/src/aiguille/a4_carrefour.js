// L'Île Folle-Aiguille · act IV, the crossroads of the island. Three chapters, each opened by a choice of whom to follow:
// IV.1 the landing (the child goes ashore with the cook's party, the doctor stays aboard when the mutiny breaks), IV.2
// the people of the island (the child with the hermit, the doctor in the besieged chapel, or in a second reading the
// cook among his mutineers), IV.3 the privateer (the Désinvolte comes into the bay). Before the first carrefour two
// branches fix what the island will make of the crew: the loyal sailor whom Malandain kills ashore (victime=<id>), and
// whether the loyal hands are enough to keep the ship (cormorane:tenue), only enough to leave it (cormorane:mutins), or
// so few that they leave with nothing (chapelle:demunis). The branches after each chapter set the quiet defaults of
// whoever was not followed.
function played(ch, who) { return { has: "regard:" + ch + "=" + who }; }
var VICTIMES = ["daguenet", "rivoal", "freville", "lemerle"];
module.exports = {
  passages: {
    // Who dies on the beach: the first loyal sailor still aboard, in this order.
    C4_victime: { act: "IV", title: "L'Anse-Morte", branch: [
      { if: { marin: "daguenet", is: "loyal" }, fx: { set: { victime: "daguenet" } }, to: "C4_etat" },
      { if: { marin: "rivoal", is: "loyal" }, fx: { set: { victime: "rivoal" } }, to: "C4_etat" },
      { if: { marin: "freville", is: "abord" }, fx: { set: { victime: "freville" } }, to: "C4_etat" },
      { fx: { set: { victime: "lemerle" } }, to: "C4_etat" },
    ] },
    // How many the captain can count on, the night before the landing (the same count as at the council of Lannoz).
    C4_etat: { act: "IV", title: "L'Anse-Morte", branch: [
      { if: { equipage: "loyal", min: 9 }, fx: { flag: "cormorane:tenue" }, to: "C4" },
      { if: { equipage: "loyal", min: 6 }, fx: { flag: "cormorane:mutins" }, to: "C4" },
      { fx: { flag: ["cormorane:mutins", "chapelle:demunis"] }, to: "C4" },
    ] },

    C4: { act: "IV", title: "La première nuit", place: "anse_morte", hub: true, noLead: true, backName: "l'Anse-Morte", ambiance: "nuit",
      text: [
        { first: true, text: "La première nuit à l'ancre, personne ne dort. La chaleur reste couchée sur l'eau comme une bête sur sa proie. La forêt, à deux encablures, respire : on l'entend, un souffle énorme, mouillé, régulier, fait de millions de feuilles qui bougent sans vent, et de temps en temps, du fond de ce souffle, monte un cri, un seul, qui ne ressemble à rien de connu, et qui s'arrête net, comme si on avait refermé une porte dessus. L'odeur vient par bouffées : fleur, vase, fruit trop mûr, et dessous, plus fade, quelque chose qui pourrit avec patience." },
        { first: true, text: "Sur le pont, les hommes sont assis par petits groupes, et chaque groupe se tait quand un autre passe. Les fidèles regardent les autres. Les autres regardent la terre. Le maître-coq chante, à la cambuse, une chanson de bord à couplets, très gaie, que personne ne reprend." },
        { first: true, if: { has: "scorbut:grave" }, text: "Sur le gaillard d'avant, les malades du scorbut regardent les arbres en remuant les lèvres. Ils ont mal aux dents, aux jambes, aux vieilles blessures. Demain, s'il y a des fruits sur cette île, ils les mangeront avec la peau, avec les noyaux, avec les vers." },
        { first: true, text: "À minuit, la capitaine Ribaud fait savoir sa décision par Maître Gobert, d'une voix qui porte d'un bout à l'autre du navire : demain, à l'aube, on descend à terre pour l'aiguade. Les barriques sont à sec. Deux canots. Quartier libre jusqu'au soir pour les hommes de corvée, qui pourront chasser, cueillir et se dégourdir. Le maître-coq conduira la partie de terre, puisqu'il faut quelqu'un qui sache reconnaître un fruit." },
        { first: true, text: "Un murmure satisfait court sur le pont, et l'on sent la tension baisser d'un cran, comme une voile qu'on choque. Ceux du conseil, à l'arrière, échangent un regard. On envoie à terre ceux qu'on craint, avec celui qui les mène, et l'on garde le navire. C'est un pari. Il vaut ce que valent les comptes qu'on a faits à Lannoz." },
        { first: true, text: "Demain, tu le vivras avec l'une ou l'autre." },
        { again: true, text: "La forêt respire, à deux encablures. Personne ne dort." },
      ],
      choices: [
        { label: "{joueur} · le débarquement", fx: { team: "mousse", set: { "regard:IV.1": "mousse" } }, to: "A4m_debut", big: true },
        { label: "Victorine Davrigny · le débarquement", fx: { team: "victorine", set: { "regard:IV.1": "victorine" } }, to: "A4v_debut", big: true },
      ] },
    C4_fin: { act: "IV", title: "Le débarquement", branch: [
      { if: played("IV.1", "mousse"), to: "C4_fin_v" },
      { fx: { flag: ["m4:defaut", "sauveur:rencontre"] }, to: "C4_fin_v" },
    ] },
    C4_fin_v: { act: "IV", title: "Le débarquement", branch: [
      { if: played("IV.1", "victorine"), to: "C4_perte" },
      { if: { has: "chapelle:demunis" }, fx: { flag: "v4:defaut" }, to: "C4_perte" },
      { fx: { flag: ["v4:defaut", "evac:vivres"] }, to: "C4_perte" },
    ] },
    // The dead of the beach, whoever saw it.
    C4_perte: { act: "IV", title: "Le débarquement", branch: VICTIMES.map(function (v, i) {
      return i < VICTIMES.length - 1 ? { if: { has: "victime=" + v }, fx: { perte: v }, to: "C4_recit" } : { fx: { perte: v }, to: "C4_recit" };
    }) },
    C4_recit: { act: "IV", title: "Le débarquement", place: "misericorde", ambiance: "nuit",
      text: [
        "Le soir du premier jour, deux pavillons flottent sur Folle-Aiguille.",
        { if: { has: "cormorane:tenue" }, text: "L'un pend à la corne de la Cormorane, dans l'anse, où Maître Gobert tient le navire avec une poignée d'hommes sûrs, les canons chargés à mitraille, braqués sur la plage. L'autre, aux couleurs de la capitaine, monte au clocher de la Miséricorde, sur l'éperon, au-dessus de la source." },
        { if: { all: [{ has: "cormorane:mutins" }, { not: { has: "chapelle:demunis" } }] }, text: "L'un est noir. Il pend à la corne de la Cormorane, une chemise teinte au goudron, et l'on chante à bord. L'autre, aux couleurs de la capitaine, monte au clocher de la Miséricorde, sur l'éperon, au-dessus de la source, où les fidèles se sont retranchés avec ce qu'ils ont pu sauver." },
        { if: { has: "chapelle:demunis" }, text: "L'un est noir. Il pend à la corne de la Cormorane, une chemise teinte au goudron, et l'on chante à bord. L'autre est une chemise blanche attachée à une gaffe, au clocher de la Miséricorde, sur l'éperon, où les fidèles sont arrivés à la nage, trempés, avec trois mousquets, un baril de poudre mouillée et leurs mains." },
        { if: { has: "m4:defaut" }, text: "{joueur} est descendu{e} à terre dans le canot du maître-coq. Sur la plage, l'enfant a vu ce que personne ne devait voir, et s'est enfui{e} dans la forêt. On ne l'a pas retrouvé{e}. Dans la Sylve, la nuit tombée, quelqu'un lui a parlé : un vieil homme à barbe blanche, très poli, qui offrait des fruits." },
        { if: { has: "v4:defaut" }, text: "Victorine a passé la journée à bord, à la lunette, puis dans le canot de la capitaine, avec sa pharmacie sur les genoux, puis sur le sentier de l'éperon, sous les balles. Le soir, elle a recousu dans la nef de la chapelle tout ce qu'on lui a apporté." },
        { if: { has: "victime=daguenet" }, text: "Olivier Daguenet est resté sur la plage. Il avait vingt ans, de beaux cheveux, et il se regardait dans les seaux." },
        { if: { has: "victime=rivoal" }, text: "Pascal Rivoal est resté sur la plage. Il avait un jeu de cartes dans sa poche, et l'on a retrouvé les cartes, le lendemain, éparpillées sur le sable par les crabes." },
        { if: { has: "victime=freville" }, text: "Abel Fréville, le charpentier, est resté sur la plage, les mains jointes sur sa poitrine par quelqu'un qui a eu le temps de le faire." },
        { if: { has: "victime=lemerle" }, text: "Annick Lemerle, la timonière, est restée sur la plage. Elle avait dit à l'aube qu'elle ne descendrait pas, que l'île était mauvaise. On l'avait fait descendre quand même." },
        "Entre les deux pavillons, il y a la forêt, et dans la forêt, il y a autre chose que des arbres.",
      ],
      choices: [{ label: "Les jours suivants", to: "C4b", big: true }] },

    C4b: { act: "IV", title: "Les gens de l'île", place: "sylve", hub: true, noLead: true, backName: "Folle-Aiguille", ambiance: "nature",
      text: [
        { first: true, text: "Folle-Aiguille se révèle comme se révèle une maison où l'on entre de nuit : par les bruits d'abord, puis par les coins, puis, beaucoup plus tard, par ceux qui l'habitent." },
        { first: true, text: "La Sylve couvre les deux tiers de l'île, de l'anse aux collines, une forêt si haute et si serrée que le jour y descend en filets, verdâtre, comme de l'eau dans un puits. Les compas y tournent. Les chemins y tournent aussi. Au centre, la Table dresse ses falaises droites, et sur la Table, une autre forêt, qu'on voit d'en bas, suspendue, comme une chevelure sur un front. Au nord, les collines rousses fument parfois, au crépuscule, par des trous qu'on prendrait pour des terriers de géants." },
        { first: true, text: "Des gens vivent là. Les marins l'ont compris le deuxième matin, en trouvant une plume noire plantée dans la poitrine d'un mort." },
        { first: true, text: "Ces jours-là, tu les vivras avec l'un ou l'autre." },
        { again: true, text: "La Sylve, la Table, les collines qui fument. Des gens vivent là." },
      ],
      choices: [
        { label: "{joueur} · les gens de l'île", fx: { team: "mousse", set: { "regard:IV.2": "mousse" } }, to: "A4n_debut", big: true },
        { label: "Victorine Davrigny · la chapelle", fx: { team: "victorine", set: { "regard:IV.2": "victorine" } }, to: "A4w_debut", big: true },
        { label: "Lucien Fargue · les gens de l'île", second: true, fx: { team: "fargue", set: { "regard:IV.2": "fargue" } }, to: "A4f_debut", big: true },
      ] },
    C4b_fin: { act: "IV", title: "Les gens de l'île", branch: [
      { if: played("IV.2", "mousse"), to: "C4b_fin_v" },
      { fx: { flag: ["m4b:defaut", "sauveur:haut_verger"] }, to: "C4b_fin_v" },
    ] },
    // The doctor not followed: the chapel holds if enough loyal hands are left, and the cook's flag of truce is refused.
    C4b_fin_v: { act: "IV", title: "Les gens de l'île", branch: [
      { if: played("IV.2", "victorine"), to: "C4b_recit" },
      { if: { equipage: "loyal", min: 5 }, fx: { flag: ["v4b:defaut", "chapelle:tenue", "parlement:refuse"] }, to: "C4b_recit" },
      { fx: { flag: ["v4b:defaut", "chapelle:perdue", "parlement:refuse"] }, to: "C4b_recit" },
    ] },
    C4b_recit: { act: "IV", title: "Les gens de l'île", place: "sylve", ambiance: "nature",
      text: [
        "Quatre jours passent ainsi, que les survivants appelleront plus tard, faute de mieux, « la semaine de la chapelle », bien qu'elle n'ait duré que quatre jours et qu'une bonne partie se soit passée ailleurs.",
        { if: { has: "m4b:defaut" }, text: "{joueur} a vécu ces jours chez le vieil homme de la forêt, qui l'a mené{e} au Haut-Verger, chez des gens doux et oublieux qui vivent dans des vergers sans clôtures et ne se souviennent pas de la veille." },
        { if: { all: [{ has: "v4b:defaut" }, { has: "chapelle:tenue" }] }, text: "À la chapelle, les fidèles ont tenu. Les mutins sont venus à l'assaut le deuxième jour, par la brèche de la nef ; ils ont été repoussés, et ils ont laissé deux hommes dans les ronces. Le soir, le maître-coq est venu seul sous un drapeau blanc demander à parler. La capitaine l'a écouté sans le faire entrer, puis l'a renvoyé." },
        { if: { all: [{ has: "v4b:defaut" }, { has: "chapelle:perdue" }] }, text: "À la chapelle, les fidèles ont cédé le deuxième jour, quand les mutins sont entrés par la brèche de la nef. Ils se sont repliés dans la forêt, avec les blessés sur des brancards de branches, sans la source, et ils ont erré jusqu'à la nuit avant de trouver un refuge, chez des gens qui vivent dans des vergers et ne posent pas de questions." },
        { if: { has: "dagrel:demasque" }, text: "Et quelqu'un, quelque part sur l'île, a prononcé un nom qu'on croyait enterré depuis vingt et un ans." },
        "Le cinquième matin, la vigie de la chapelle crie une voile. Les mutins, sur la Cormorane, la voient aussi. Pendant une heure, personne ne tire, de part et d'autre : on regarde.",
        "Un brigantin gris, fin, rapide, entre dans la baie sous toute sa toile, avec l'aisance d'un homme qui entre chez lui. À sa corne flotte un pavillon que personne ne connaît, un écu d'or sur fond de sable. Il mouille à l'entrée de l'anse, en travers, de façon à fermer la sortie à quiconque voudrait partir.",
      ],
      choices: [{ label: "La Désinvolte", to: "C4c", big: true }] },

    C4c: { act: "IV", title: "La Désinvolte", place: "anse_morte", hub: true, noLead: true, backName: "l'Anse-Morte", ambiance: "mer",
      text: [
        { first: true, text: "Une chaloupe se détache du brigantin, avec huit rameurs et un drapeau blanc, et va de la Cormorane à la plage, de la plage au pied de l'éperon, et partout où elle aborde, un homme en habit de velours noir, la dentelle au jabot, saute dans l'eau jusqu'aux genoux sans se soucier de ses bas de soie, salue avec son chapeau à plumes, et demande, du ton le plus aimable, à qui il a l'honneur." },
        { first: true, text: "Le Chevalier Alexis Quémeneur est venu chercher un trésor, avec trente hommes, quatorze canons, une lettre de course d'un prince dont personne n'a jamais vu la principauté, et une copie de carte." },
        { first: true, if: { has: "sabran:copie" }, text: "À côté de lui, dans la chaloupe, un homme au visage grêlé sourit en montrant une dent d'or." },
        { first: true, text: "Trois partis, désormais, sur une île où les aiguilles mentent. Ces derniers jours, tu les vivras avec l'une ou l'autre." },
        { again: true, text: "Le brigantin gris, en travers de l'anse. Trois pavillons." },
      ],
      choices: [
        { label: "{joueur} · la Désinvolte", fx: { team: "mousse", set: { "regard:IV.3": "mousse" } }, to: "A4o_debut", big: true },
        { label: "Victorine Davrigny · la Désinvolte", fx: { team: "victorine", set: { "regard:IV.3": "victorine" } }, to: "A4x_debut", big: true },
      ] },
    C4c_fin: { act: "IV", title: "La Désinvolte", branch: [
      { if: played("IV.3", "mousse"), to: "C4c_fin_v" },
      { fx: { flag: "m4c:defaut" }, to: "C4c_fin_v" },
    ] },
    // The doctor not followed: the brothers settle nothing, and the privateer keeps his own counsel.
    C4c_fin_v: { act: "IV", title: "La Désinvolte", branch: [
      { if: played("IV.3", "victorine"), to: "A4_fin" },
      { fx: { flag: ["v4c:defaut", "desinvolte:hostile"] }, to: "A4_fin" },
    ] },
    A4_fin: { act: "IV", title: "Trois pavillons", place: "anse_morte", ambiance: "nuit",
      text: [
        "La nuit tombe sur Folle-Aiguille, et l'île compte ses feux. Un sur la Cormorane, ou deux. Un au clocher de la Miséricorde, ou plus aucun. Six sur la Désinvolte, en ligne, comme les fenêtres d'un hôtel de la Haute-Ville. Et dans la Sylve, d'autres feux, petits, que personne n'a allumés parmi ceux qui sont venus par la mer.",
        { if: { has: "m4c:defaut" }, text: "{joueur} a vu entrer la Désinvolte depuis la forêt, à côté du vieil homme, qui a regardé longtemps le pavillon à l'écu d'or, puis a dit, d'une voix tranquille : « Encore un qui vient creuser. Ils creusent tous. »" },
        { if: { has: "v4c:defaut" }, text: "Victorine a vu le Chevalier saluer au pied de l'éperon, et Benoît Quémeneur, à côté d'elle, devenir gris, puis rentrer dans la chapelle sans un mot. Il n'est pas descendu. Le Chevalier a attendu une heure, puis il est reparti en riant." },
        { if: { has: "sabran:copie" }, text: "Avant la nuit, on voit les hommes de la Désinvolte débarquer avec des pelles et des pioches, et un homme au visage grêlé qui marche devant, une boussole à la main, en comptant ses pas." },
        "Le trésor de Folle-Aiguille dort quelque part sous leurs pieds, depuis vingt et un ans, à l'endroit exact où les aiguilles ne le montrent pas.",
      ],
      choices: [{ label: "Acte V · Le trésor", to: "C5", big: true }] },
  },
  extras: {
    people: {
      dagrel: { name: "Jéricho Dagrel", aka: ["Sauveur", "le Vieux", "Dagrel", "le vieil homme de la forêt"], f: false,
        face: { age: "ancien", skin: "hale", hair: "blanc", coif: "long", beard: "longue", eyes: "lourds", iris: "gris", nose: "busque", lips: "fines", shape: "allonge", marks: ["cicatrice"] },
        desc: "Un vieil homme de la Sylve, courtois et lettré, qui troque des fruits contre des nouvelles du monde.", qui: "L'ermite de la Sylve, qu'on appelle Sauveur au Haut-Verger et le Vieux aux Puits.",
        aspect: { allure: "grand, maigre, très droit, vêtu de peaux", voix: "douce, précise, polie à faire peur", habits: "peaux cousues, un tricorne sans bord" } },
      brasdefer: { name: "Jeanne Brasdefer", aka: ["Brasdefer", "Jeanne"], f: true,
        face: { age: "mur", skin: "brun", hair: "gris", coif: "tresses", beard: "sans", eyes: "amande", iris: "noir", nose: "busque", lips: "fines", shape: "carre", marks: ["balafre"] },
        desc: "La cheffe des proscrits de la Sylve, laissés sur l'île il y a douze ans.", qui: "La femme à l'arc, qui signe ses morts d'une plume noire.",
        aspect: { allure: "sèche, nouée, un arc à l'épaule", voix: "basse, sans colère", habits: "toile de voile et cuir de chèvre" } },
      aubepine: { name: "La Mère Aubépine", aka: ["Aubépine", "la Mère"], f: true,
        face: { age: "ancien", skin: "clair", hair: "blanc", coif: "long", beard: "sans", eyes: "tombants", iris: "bleu", nose: "fin", lips: "fines", shape: "ovale", marks: [] },
        desc: "L'ancienne des gens du Haut-Verger.", qui: "La vieille femme des vergers, qui se souvient de la colonie.",
        aspect: { allure: "petite, lente, couronnée de fleurs", voix: "chantante, distraite", habits: "une robe d'écorce battue" } },
      hugon: { name: "Hugon Forge-Noire", aka: ["Hugon", "Forge-Noire", "le maître de puits"], f: false,
        face: { age: "mur", skin: "porcelaine", hair: "noir", coif: "rase", beard: "barbe", eyes: "ronds", iris: "clair", nose: "large", lips: "pleines", shape: "carre", marks: ["brulure"] },
        desc: "Le maître de puits des Fondeurs, qui vivent sous les collines du nord.", qui: "L'homme pâle des Puits, aux yeux qui craignent le jour.",
        aspect: { allure: "massif, blême, les yeux plissés", voix: "rauque, enfumée", habits: "un tablier de cuir brûlé" } },
    },
    places: {
      anse_morte: { ambiance: "mer", name: "L'Anse-Morte", map: "ile", region: "anse", x: 50, y: 80, desc: "La baie où mouille la Cormorane, cernée de forêt, sans un chant d'oiseau." },
      plage: { ambiance: "nature", name: "La plage de l'Anse", map: "ile", region: "anse", x: 46, y: 74, desc: "Un croissant de sable gris, des cocotiers penchés, le ruisseau qui se perd dans le sable." },
      misericorde: { ambiance: "chateau", name: "La Miséricorde", map: "ile", region: "anse", x: 60, y: 70, desc: "La chapelle-fort de la colonie, sur l'éperon : un clocher sans toit, une nef éventrée, une source au fond d'une cour." },
      sylve: { ambiance: "nature", name: "La Sylve", map: "ile", region: "sylve", x: 44, y: 56, desc: "La grande forêt, haute, serrée, verdâtre, où les compas tournent." },
      cabane: { ambiance: "nature", name: "La hutte sous la Table", map: "ile", region: "sylve", x: 40, y: 44, desc: "Une hutte de troncs et de palmes au pied des falaises de la Table." },
      haut_verger: { ambiance: "village", name: "Le Haut-Verger", map: "ile", region: "verger", x: 62, y: 40, desc: "Des vergers sans clôtures sur les pentes de l'est, des maisons de bois, des gens doux." },
      puits: { ambiance: "nuit", name: "Les Puits", map: "ile", region: "collines", x: 56, y: 18, desc: "Les collines rousses du nord, trouées de puits de mine qui fument au crépuscule." },
      table: { ambiance: "nature", name: "La Table", map: "ile", region: "table", x: 38, y: 36, desc: "Un plateau à falaises droites, au centre de l'île, couronné d'une autre forêt." },
      dent_nord: { ambiance: "mer", name: "La Dent-du-Nord", map: "ile", region: "couchant", x: 22, y: 24, desc: "Une dent de roche noire à l'ouest de l'île, au-dessus de la mer." },
      crique: { ambiance: "eau", name: "La Crique-aux-Raies", map: "ile", region: "anse", x: 70, y: 84, desc: "Une crique de palétuviers à l'est de l'anse, envasée, profonde au milieu." },
    },
  },
};
