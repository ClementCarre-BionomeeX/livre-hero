// « Le Catalogue de 1899 » : the seventh of ten short puzzle books in the Croûte & Chrome universe (Clément, 23/11).
// The only copy of the Maison's first Catalogue goes under the hammer tonight. The reader authenticates it for the
// auctioneer. The founders' preface hides an acrostic (chiffre, typed answer); a UV lamp shows the stub of a torn last
// page (examens); the page, sewn into the binding, is enciphered with the name of the first shop's town (Vigenère).
// The plot is in BIBLE.md.
module.exports = {
  id: "catalogue",
  title: "Le Catalogue de 1899",
  subtitle: "Croûte & Chrome · une vente aux enchères et une page qui manque",
  summary: "Ce soir, à vingt heures, la Maison Croûte & Chrome met en vente le seul exemplaire connu de son premier Catalogue, imprimé à Mirevaux en 1899 par Barnabé Croûte et Ernestine Chrome. Tu travailles pour Maître Gratin, le commissaire-priseur : tu as trois heures pour certifier que le lot est complet et conforme. Il l'est presque.",
  tags: ["enigmes", "humour", "intrigue"],
  serie: "Croûte 'n Chrome",
  author: "Claude, pour Clément",
  age: 10,
  skin: "parchemin",
  cover: { motif: "sceau", color: "#6a4a2a" },
  glossary: Object.assign({}, require("../glossaire.js"), {
    "commissaire-priseur|commissaires-priseurs": "Celui qui dirige une vente aux enchères et frappe du marteau quand le lot est adjugé.",
    "adjugé|adjugée": "Vendu au plus offrant, d'un coup de marteau.",
    "lot|lots": "Ce qu'on met en vente aux enchères, d'un seul coup de marteau.",
    "acrostiche|acrostiches": "Un texte dont les premières lettres des lignes, lues de haut en bas, forment un mot.",
    "lampe de Wood": "Une petite lampe à lumière violette qui fait briller ce que l'œil ne voit pas : colles, encres effacées, papiers récents.",
    "onglet|onglets": "Une étroite bande de papier qui dépasse de la reliure, là où une page a été coupée.",
    "préface|préfaces": "Le texte placé au début d'un livre, où l'auteur explique ce qu'il a voulu faire.",
  }),
  voice: "deuxième personne, présent",
  version: 1,
  start: "A_salle",
  intro: [
    "Il y a trente et un ans, le monde s'est effondré. Il y a cent vingt-sept ans, à Mirevaux, une boulangère et une forgeronne ont ouvert une boutique où rien ne se mangeait. C'était la Maison Croûte & Chrome. Elle vend depuis ce qui ne sert à rien à ceux qui ont déjà tout, et elle a très bien traversé la fin du monde : ses clients aussi.",
    "Du premier Catalogue, imprimé en 1899, il ne reste qu'un exemplaire. La Maison a décidé de le vendre. C'est le seul objet de son histoire qui ait jamais eu une utilité : il servait à vendre les autres.",
  ],
  acts: [
    { id: "I", title: "Le lot n° 1", question: "Le Catalogue de 1899 est-il complet ?", levels: [1, 1], start: "A_salle" },
  ],
  voies: {
    archiviste: { label: "Archiviste de la Maison", labelF: "Archiviste de la Maison", tip: "Les papiers anciens, les reliures, les encres : tu dates une page à son odeur.", like: "mage", bonus: { savoir: 35, discretion: 15, social: 15, nature: 5, combat: 5, magie: 5 } },
    clerc: { label: "Clerc de commissaire-priseur", labelF: "Clerc de commissaire-priseur", tip: "Les ventes, les acheteurs, les prix : tu sais qui lèvera la main avant qu'il le sache lui-même.", like: "barde", bonus: { social: 35, savoir: 20, discretion: 15, nature: 5, combat: 5, magie: 5 } },
    mitron: { label: "Mitron de Mirevaux", labelF: "Mitronne de Mirevaux", tip: "Le pain, le four, la farine : tu es né{e} à Mirevaux, et tu sais ce que vaut un sou.", like: "guerrier", bonus: { nature: 30, combat: 25, social: 15, savoir: 10, discretion: 5, magie: 5 } },
  },
  past: [
    { q: "Pourquoi Maître Gratin t'a-t-il choisi{e} pour ce soir ?", answers: [
      { label: "Tu ranges depuis dix ans les archives de la Maison, au sous-sol, où personne ne descend. Tu es la seule personne à savoir où sont les choses qu'on ne cherche jamais.", fx: { voie: "archiviste" } },
      { label: "Tu tiens le registre de ses ventes depuis sept ans. Tu as vu adjuger une goutte de rosée en flacon de cristal pour le prix d'un immeuble.", fx: { voie: "clerc" } },
      { label: "Tu as grandi à Mirevaux, au-dessus d'un fournil. Maître Gratin voulait quelqu'un qui connaisse la ville du premier magasin. Tu es la seule personne de la Maison qui y soit jamais allée.", fx: { voie: "mitron" } },
    ] },
  ],
  lore: {
    pages: [
      { title: "Barnabé et Ernestine", text: [
        "**Barnabé Croûte** était boulanger à Mirevaux. **Ernestine Chrome** était forgeronne, de l'autre côté de la rue. En 1899, ils ont associé leurs deux métiers et leurs deux noms, et ouvert une boutique où l'on vendait une baguette d'acier qui ne rassirait jamais, un couteau de beurre qui fondait à la première tartine, et une plaquette de pain en forme de motte de beurre.",
        "La Maison raconte qu'ils ont inventé le luxe inutile. Elle raconte moins ce qu'ils vendaient d'autre.",
      ] },
    ],
    names: {
      "Mirevaux": "La ville du premier magasin de la Maison, au bord du désert, où la Banque garde ses créances.",
      "Domaine": "Le quartier des riches, derrière les grilles dorées qui ne s'ouvrent jamais.",
      "Maison": "La Maison Croûte & Chrome, qui vend depuis 1899 des objets de luxe inutiles.",
    },
  },
  companions: {},
  factions: {},
  relics: {},
  people: {
    gratin: { name: "Maître Gratin", aka: ["Gratin", "le commissaire-priseur"],
      face: { age: "ancien", skin: "porcelaine", hair: "blanc", coif: "degarni", beard: "moustache", eyes: "ronds", iris: "gris", nose: "busque", lips: "fines", shape: "rond", marks: ["lunettes"] },
      aspect: { allure: "petit et rond", signe: "une loupe d'horloger vissée à l'œil" },
      qui: "Le commissaire-priseur de la Maison, ton patron.", desc: "Le commissaire-priseur attitré de la Maison. Il a adjugé tout ce qui pouvait l'être, et quelques choses qui ne pouvaient pas." },
    vernis: { name: "Madame Clarisse Vernis", aka: ["Madame Vernis", "Vernis"], f: true,
      face: { age: "mur", skin: "clair", hair: "noir", coif: "court", beard: "sans", eyes: "amande", iris: "gris", nose: "fin", lips: "fines", shape: "allonge", marks: ["lunettes"] },
      aspect: { allure: "très droite", habits: "tailleur gris perle", signe: "un stylo-plume en or toujours ouvert" },
      qui: "La directrice des Mentions légales de la Maison.", desc: "La directrice des Mentions légales de la Maison Croûte & Chrome. Elle a lu tous les contrats de la Maison depuis 1899, sauf un." },
    sorbier: { name: "Monsieur Sorbier", aka: ["Sorbier", "le Collectionneur"],
      face: { age: "ancien", skin: "hale", hair: "blanc", coif: "court", beard: "sans", eyes: "lourds", iris: "noir", nose: "busque", lips: "fines", shape: "carre", marks: ["lunettes"] },
      aspect: { habits: "costume noir, lunettes de soleil", signe: "un catalogue de ventes sous le bras" },
      qui: "Le Collectionneur, qui veut le lot.", desc: "Le Collectionneur. Il possède quarante motos qu'il ne monte jamais, et des objets qu'il a achetés pour ne pas les voir." },
  },
  items: {
    gants: { name: "Les gants de coton blanc", kind: "outil", keep: true, desc: "Une paire de gants de coton blanc, pour toucher les papiers anciens sans y laisser le gras des doigts." },
    lampe: { name: "La lampe de Wood", kind: "outil", keep: true, desc: "Une petite lampe à lumière violette. Sous elle, les colles récentes brillent, les encres effacées reviennent, et le vieux papier reste sombre comme une cave." },
    coupe: { name: "Le coupe-papier d'os", kind: "outil", keep: true, desc: "Un coupe-papier d'os, à lame mince et sans tranchant, qui ouvre les pages et les coutures sans rien déchirer." },
    catalogue: { name: "Le Catalogue de 1899", kind: "document", keep: true, form: "acte", hand: "soignee",
      desc: "Le seul exemplaire connu du premier Catalogue de la Maison : quatre feuillets de papier crème, une couverture de toile brune, imprimés à Mirevaux.",
      text: "**Maison Croûte & Chrome · Mirevaux · 1899**\n\n*Préface.*\n\n*Regardez ce pain : il ne rassira jamais, car il n'a jamais été du pain.*\n*Essayez ce couteau : il fondra à la première tartine, car il est fait de ce qu'il tartine.*\n*Lisez cette plaquette : c'est un pain qui a pris la forme du beurre, pour qu'on ne sache plus où l'un commence.*\n*Ici, à Mirevaux, nous vendons ce qui ne sert à rien à ceux qui ont déjà tout.*\n*Un jour, ils voudront l'absence même des choses ; nous la leur vendrons aussi.*\n*Rien de ce qui suit ne se mange, ne se garde, ne se rend.*\n*Et pour le reste, voyez la dernière page.*\n\n*B. C. et E. C.*\n\n**I.** *La Baguette d'acier.* **II.** *Le Couteau de beurre.* **III.** *La Plaquette de pain.*" },
    page4: { name: "La dernière page", kind: "document", keep: true, form: "acte", hand: "soignee",
      desc: "Un feuillet plié en quatre, cousu dans le dos de la reliure, et couvert de capitales qui ne font aucun mot. En tête, en clair, une seule ligne : *À lire avec le nom de notre ville.*",
      text: "*À lire avec le nom de notre ville.*\n\n**{{chiffre:p_page}}**" },
  },
  clues: {
    i_lot: { rev: "M", text: "Maître Gratin : le lot doit être certifié complet et conforme avant vingt heures, sans quoi la vente est nulle." },
    i_contrat: { rev: "M", text: "Madame Vernis : tout ce qui est relié dans un lot est vendu avec lui, et engage la Maison comme un contrat." },
    i_onglet: { rev: "M", text: "Sous la lampe de Wood, contre la couture du Catalogue, un onglet : une quatrième page a été coupée au ras de la reliure." },
    i_beurre: { rev: "M", text: "Le Couteau de beurre de 1899, dans sa vitrine réfrigérée, est remplacé chaque semaine par la Maison. Il a cent vingt-sept ans en principe, et six jours en fait." },
  },
  quests: [],
  mysteries: {
    M: { title: "Que disait la dernière page ?", act: "I", solved: "page:lue",
      answer: { person: "vernis", text: "Barnabé et Ernestine vendaient aussi un pain ordinaire, à un sou, et avaient inscrit dans le contrat de chaque vente que pour chaque objet inutile vendu, la Maison donnerait cent pains au quartier, tant qu'elle vendrait." } },
  },
  examens: {
    couverture: { title: "La couverture du Catalogue",
      nu: "Une couverture de toile brune, usée aux coins, avec un titre doré à moitié parti : *Maison Croûte & Chrome · Mirevaux · 1899*. Tu ne la touches pas à mains nues : cent vingt-sept ans de papier ont horreur des doigts.",
      avec: {
        gants: { text: "Avec les gants, tu soulèves la couverture. Le Catalogue est mince : une préface, trois planches gravées, trois produits. La toile sent le four et la limaille, une odeur que personne n'a respirée à la Maison depuis un siècle." },
        lampe: { text: "Sous la lumière violette, le titre doré s'éteint, et la toile devient noire. Une empreinte de pouce apparaît dans le coin, large, farineuse : celle d'un boulanger, qui a tenu ce livre en sortant du fournil." },
      } },
    reliure: { title: "La reliure",
      nu: "Le dos du Catalogue est cousu au fil de lin, en trois points, d'une couture serrée de boulangère, qui ferme un sac de farine pour qu'il tienne jusqu'au moulin. La dernière planche finit sur une page blanche. Après, la couverture.",
      avec: {
        lampe: { text: "Sous la lampe de Wood, contre la couture, entre la dernière planche et la couverture, une étroite bande de papier brille à peine : un onglet. Une quatrième page a été coupée là, au ras du fil, avec un soin d'orfèvre. Et sous l'onglet, la toile du dos est un peu plus épaisse, comme si elle avait été doublée.", fx: { clue: "i_onglet", flag: "vu:onglet" } },
        gants: { text: "Tes doigts gantés suivent le dos de la reliure. À un endroit, il est plus épais, et un peu raide, comme une lettre glissée sous une doublure de veste." },
        coupe: { text: "Tu poses la lame d'os contre le fil de lin. Maître Gratin, à l'autre bout de la salle, toussote d'une manière qui veut dire : on ne découd pas un lot pour rien. Il te faut une raison." },
      } },
    couteau: { title: "Le Couteau de beurre",
      nu: "Dans une vitrine réfrigérée, à côté du Catalogue, sur un coussin de velours, le Couteau de beurre de 1899, lot n° 2. Il a une lame parfaite, un manche sculpté de feuilles, et il brille d'un jaune frais de crémerie.",
      avec: {
        gants: { text: "Tu ouvres la vitrine, et tu effleures le manche d'un doigt ganté. Le coton glisse : le beurre est tendre, frais, de la semaine. Sur l'étiquette, en petit, au dos : *Remplacé le lundi. Prochain remplacement : lundi.* Le Couteau a cent vingt-sept ans en principe, et six jours en fait.", fx: { clue: "i_beurre" } },
        lampe: { text: "Sous la lampe de Wood, le beurre devient d'un jaune pâle très uniforme. C'est le jaune du beurre de cette semaine." },
      } },
    salle: { title: "La salle des ventes",
      nu: "Douze rangées de chaises dorées, un pupitre d'acajou, un marteau d'ivoire posé sur un coussin. Au fond, sur un chevalet, une affiche : *Lot n° 1. Le premier Catalogue. Mise à prix : un million.* En dessous, quelqu'un a ajouté au crayon : *Un sou en 1899.*",
      avec: {
        lampe: { text: "Sous la lampe de Wood, le crayon de l'affiche brille d'un éclat frais : ajouté ce matin. Maître Gratin, qui te voit faire, rougit jusqu'à la loupe. « C'est moi, avoue-t-il. J'aime noter ce que valaient les choses avant que je les vende. Cela me rappelle mon métier. »" },
      } },
  },
  puzzles: {
    p_preface: {
      kind: "chiffre", title: "La préface",
      text: "**R**egardez ce pain : il ne rassira jamais, car il n'a jamais été du pain.\n**E**ssayez ce couteau : il fondra à la première tartine, car il est fait de ce qu'il tartine.\n**L**isez cette plaquette : c'est un pain qui a pris la forme du beurre, pour qu'on ne sache plus où l'un commence.\n**I**ci, à Mirevaux, nous vendons ce qui ne sert à rien à ceux qui ont déjà tout.\n**U**n jour, ils voudront l'absence même des choses ; nous la leur vendrons aussi.\n**R**ien de ce qui suit ne se mange, ne se garde, ne se rend.\n**E**t pour le reste, voyez la dernière page.\n\nSept lignes, imprimées l'une sous l'autre, chacune avec une grande capitale ornée, plus grosse que les autres lettres. Une préface ordinaire n'en met qu'une, au début. Celle-ci en a sept. Où est la dernière page ?",
      answer: ["reliure", "la reliure", "dans la reliure"],
      hint: [{ if: { has: "vu:onglet" }, text: "Dans cette préface, les capitales ornées en disent plus long que les phrases." }],
      wrongText: "Tu tournes le Catalogue dans tous les sens à cet endroit-là. Rien. Les sept capitales ornées te regardent, très droites, comme des invités qui attendent qu'on les présente.",
      tryLabel: "Chercher la dernière page à cet endroit", label: "Relire la préface", leave: "Refermer le Catalogue",
      win: { to: "A_preface_lue", fx: { flag: "preface:lue", ep: ["seance", 400] } },
    },
    p_page: {
      kind: "clef", scheme: "vigenere", key: "mirevaux", title: "La dernière page",
      plain: "Le pain ordinaire. Comestible. Un sou. Pour chaque objet inutile vendu par la Maison, cent pains ordinaires seront donnés au quartier, tant que la Maison vendra. Cette page fait partie de chaque vente.",
      text: "Le feuillet est couvert de capitales serrées, d'une encre brune de forge. Chaque lettre a avancé dans l'alphabet, mais d'un pas différent chaque fois, au rythme d'un mot qu'on répète. En tête, en clair, d'une écriture de boulangère : *À lire avec le nom de notre ville.*",
      keyLabel: "Le mot qui fait avancer les lettres",
      hint: [{ if: { examen: "couverture" }, text: "Le nom de la ville est sur la couverture." }],
      tryLabel: "Lire la page avec ce mot", label: "Déchiffrer la dernière page", leave: "Replier le feuillet",
      win: { to: "A_page_lue", fx: { flag: "page:lue", ep: ["seance", 400] } },
    },
  },
  achievements: {
    preface: { title: "Sept capitales", desc: "Lire ce que dit la préface du Catalogue, de haut en bas.", if: { has: "preface:lue" } },
    page: { title: "La dernière page", desc: "Lire la page cousue dans la reliure.", if: { has: "page:lue" } },
  },
  endings: {},
  world: {
    noFood: true,
    money: { units: [{ name: "euro", plural: "euros", value: 1, short: "€" }] },
    start: { place: "salle", hour: 17, gold: 0, food: 0, items: ["gants", "lampe", "coupe", "catalogue"], kits: {} },
    places: {
      salle: { ambiance: "chateau", name: "La salle des ventes de la Maison", map: "domaine", x: 50, y: 50, desc: "Douze rangées de chaises dorées, un pupitre d'acajou, un marteau d'ivoire, et le lot n° 1 sous sa vitre." },
    },
    routes: [], regions: {}, events: {},
  },
  banter: [],
  passages: {},
};
