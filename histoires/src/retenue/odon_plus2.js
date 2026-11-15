// Odon, second pass: the dyer climbing to the captain at eleven (kept in the sentry box, or turned into a crier), the
// red-haired passeuse at one in the morning and the walk to the blue stone, and the widower's room. Three new endings.
var A = "I";
module.exports = {
  _add: {
    O_menti: [
      { label: "Barrer la route à l'homme aux mains bleues qui monte des Foulons", if: { lu: "I_fulbert_vient" }, to: "O_fulbert" },
      { label: "Attendre : une femme rousse marche vers ta lanterne", if: { lu: "J_odon" }, to: "O_loutre_pont", fx: { time: 1.5 } },
    ],
    O_chambre: [
      { label: "Te relever, et redescendre", if: { savoir: "veine" }, to: "O_veuf" },
    ],
  },

  // ------------------------------------------------------------------ the dyer
  O_fulbert: { act: A, title: "Les mains bleues", place: "pont", fx: { time: 0.25 },
    text: [
      "À onze heures, un homme monte des Foulons d'un pas pressé, une lanterne à la main. Fulbert Cosson, le teinturier de la rue des Teinturiers, voisin de l'apothicaire. Il a les mains bleues jusqu'aux poignets, comme tous ceux de son métier, et un manteau trop beau pour un teinturier.",
      "Tu lèves la main. « Où vas-tu, Cosson ? »",
      "« Chez le capitaine, sergent. J'ai quelque chose pour lui. » Il baisse la voix. « L'apothicaire. Elle va faire lever le quartier à deux heures. Elle me l'a dit elle-même, en me demandant de l'aider. Le capitaine veut savoir tout ce qui se passe chez elle. »",
      "Il sourit. Il a l'air content de lui. Il vous croit du même côté.",
      "Ilde Saunier a soigné ta femme pendant huit mois, jusqu'à la fin, gratis.",
    ],
    choices: [
      { label: "L'enfermer dans la guérite du pont jusqu'au matin", to: "O_guerite" },
      { label: "« Tu as une voix, Cosson ? Alors à deux heures, tu crieras avec elle. »", test: { dom: "social", diff: -10, label: "Retourner un mouchard" }, win: { to: "O_fulbert_retourne" }, lose: { to: "O_guerite" } },
    ] },
  O_guerite: { act: A, title: "La guérite", place: "pont", fx: { time: 0.5 },
    text: [
      "Tu prends Cosson par le col et tu le pousses dans la guérite de pierre, au bout du pont, côté Haute-Ville. Il proteste. Il parle du capitaine, de ses droits, de Monsieur Corlay. Tu fermes la porte. Tu tournes la clé.",
      "« Tu dors ici cette nuit, Cosson. Ivresse sur la voie publique. Thomin, tu as vu ? Il était ivre. »",
      "Thomin, au bout du pont, regarde ses bottes. « Saoul comme une barrique, sergent. »",
      "Cosson cogne à la porte pendant une heure. Puis il se tait.",
    ],
    choices: [{ label: "Tenir ton pont", to: "O_pont_tenu" }] },
  O_pont_tenu: { act: A, title: "Un pont bien tenu", place: "pont", end: true, fx: { time: 6 },
    text: [
      "Tu tiens ton pont. À deux heures, en bas, la cloche du lavoir sonne à la volée. Des lanternes sortent sur les quais. Le quartier monte par la Côte. La Haute-Ville le laisse monter.",
      "À trois heures et quart, au bout de la vallée, la fenêtre de la Maison des Vannes s'allume deux fois, puis trois.",
      "À quatre heures, la pluie. À cinq heures, la Sorge monte sous tes pieds, brune, rapide, jusqu'à lécher les arches. Le pont tient. Les Foulons sont dans l'eau jusqu'aux fenêtres basses, et vides.",
      "Au jour, tu ouvres la guérite. Cosson sort en clignant des yeux. Il te regarde, puis il regarde la vallée noyée, son atelier sous l'eau. Il comprend lentement ce qu'il serait allé dire au capitaine, et ce qu'il aurait empêché.",
      "« Je dirai que j'étais saoul », dit-il.",
      "Rambert te convoque à dix heures. Il te demande pourquoi tu as enfermé un honnête teinturier. Tu réponds : ivresse sur la voie publique. Il te regarde longtemps. Il sait. La preuve lui manque, et le Conseil a d'autres soucis ce matin. Tu gardes ton insigne. Tu le portes un peu plus lourd.",
    ] },
  O_fulbert_retourne: { act: A, title: "Le crieur", place: "foulons", fx: { flag: "foulons:leves", time: 3 },
    text: [
      "Cosson te regarde. Il cherche le piège. Il le trouve : tu as ta hallebarde, ton insigne, et deux hommes au bout du pont.",
      "« Tu as deux enfants, Cosson. Ils dorment au rez-de-chaussée, à trois pas de la Sorge. Le capitaine habite la Haute-Ville. »",
      "Le teinturier reste longtemps immobile. Puis il souffle sa lanterne, et il redescend vers les Foulons.",
      "À deux heures, la cloche du lavoir sonne. Tu entends deux voix crier dans les rues. Celle de l'apothicaire, que tout le monde connaît. Et une voix d'homme, grave, qui crie plus fort qu'elle, rue après rue. « La digue ! Debout ! »",
    ],
    choices: [{ label: "Tenir ton pont jusqu'au jour", to: "O_teinturier" }] },
  O_teinturier: { act: A, title: "Deux voix dans la rue", place: "pont", end: true, fx: { time: 3.5 },
    text: [
      "À trois heures et quart, trois lanternes à la Maison des Vannes. À quatre heures, la pluie. Au jour, la Sorge dans les Foulons jusqu'aux fenêtres basses, et le quartier entier sur le parvis.",
      "Tu descends sur le parvis à huit heures, quand Colin te relève. Ilde est sur les marches, sa trousse sur les genoux. À côté d'elle, Fulbert Cosson, enroué, les mains bleues croisées, ses deux enfants contre lui.",
      "On le remercie. Des femmes lui apportent du café. Il cherche où se mettre. Il te voit arriver. Il baisse les yeux.",
      "Ilde te regarde, puis elle regarde Cosson, puis toi. Elle a compris. Elle te fait une place sur la marche.",
      "Ce que son mouchard a vu cette nuit, Rambert l'ignorera toujours. Cosson se taira, à partir de ce jour. Tu as pris un homme qui vendait ses voisins, et tu lui as montré que sa voix pouvait servir à autre chose. S'en souviendra-t-il la semaine prochaine ? Ce matin, il s'en souvient.",
    ] },

  // ------------------------------------------------------------------ the passeuse at one in the morning
  O_loutre_pont: { act: A, title: "La Loutre, à pied", place: "pont", fx: { time: 0.25 },
    text: [
      "À une heure, une femme marche droit sur ta lanterne depuis la route de la Digue. Une tresse rousse, une veste de toile goudronnée, et cette façon de marcher comme si le sol bougeait. Jacquette Morand, la Loutre. Tu l'as arrêtée deux fois. Tu l'as ratée vingt.",
      "« Sergent. J'attends une commission, cette nuit. Quelqu'un est passé, avec un paquet ? »",
      "Tu la regardes. Il y a deux heures, une courrière en châle gris est passée sur ce pont avec un paquet long comme un avant-bras, vers la digue. Tu l'as laissée passer. Tu as menti au capitaine.",
      "La Loutre attend. Elle ignore ce que tu sais.",
    ],
    choices: [
      { label: "« Celle que tu attends est passée à neuf heures et demie. Regarde sous tes pierres. »", to: "O_loutre_seule" },
      { label: "Laisser le pont à Colin, et partir avec elle", to: "O_route_loutre" },
    ] },
  O_loutre_seule: { act: A, title: "Regarde sous tes pierres", place: "pont", end: true, fx: { time: 5 },
    text: [
      "La Loutre te regarde une seconde de trop. Puis elle part en courant vers la digue.",
      "Tu restes à ton pont. À deux heures, en bas, la cloche du lavoir sonne à la volée. Des lanternes sortent des maisons et montent la Côte en file. Tu cherches des yeux celle de la rue du Lavoir, la troisième après la fontaine. Elle sort la dernière, lentement, à la hauteur d'une femme qui porte un ventre rond.",
      "À trois heures et demie, au bout de la vallée, la fenêtre de la Maison des Vannes s'allume deux fois, puis trois.",
      "À quatre heures, la pluie. Au jour, la Sorge est dans les Foulons jusqu'aux fenêtres basses, et les Foulons sont vides. Ton poste te tient jusqu'à huit heures. Tu regardes le parvis de Saint-Rieul, de loin, jusqu'à ce que Colin te relève.",
      "Tu as menti à ton capitaine, tu as aidé une contrebandière, et tu as tenu ton pont. Trois choses vraies en une nuit. Laquelle tu raconteras à ta petite-fille, tu l'ignores encore.",
    ] },
  O_route_loutre: { act: A, title: "Dix bornes avec la Loutre", place: "berge", fx: { time: 1 },
    text: [
      "« Colin. Le pont est à toi. Si le capitaine descend, je suis parti pisser. »",
      "Colin ouvre de grands yeux. Tu décroches ta lanterne. La Loutre te regarde faire en silence. Puis elle se met en marche, et tu marches à côté d'elle.",
      "Dix bornes sur la route de la Digue. Le vent dans la figure. Vous vous taisez. À la septième borne, elle dit : « Tu m'as arrêtée deux fois. » Tu réponds : « Et ratée vingt. » Elle rit, une fois, sans s'arrêter de marcher.",
      "Au pied du mur, la cabane des Loutres, une planche à la porte, et devant la porte une pierre plate peinte en bleu.",
    ],
    choices: [{ label: "Soulever la pierre", to: "O_pierre_bleue" }] },
  O_pierre_bleue: { act: A, title: "Sous la pierre", place: "berge", fx: { time: 0.5 },
    text: [
      "Jacquette soulève la pierre. Dessous, dans un creux de paille, une toile cirée ficelée en croix. Elle la prend. Elle casse le cachet vert, elle lit à la lueur de ta lanterne.",
      "« Trois heures, la vanne de fond. Il faut quatre bras. » Elle lève les yeux vers toi. « Le vieux en a deux qui tremblent. J'en ai deux. »",
      "Tu regardes tes mains. Vingt-deux ans de hallebarde.",
      "Elle te fait monter dans sa barque. Elle passe une grille, sous la digue, dans un tunnel noir où l'eau coule vers vous.",
    ],
    choices: [{ label: "Monter l'échelle de fer", to: "O_quatre_bras" }] },
  O_quatre_bras: { act: A, title: "Le sergent et la Loutre", place: "digue", end: true, fx: { time: 4.5 },
    text: [
      "Dans la chambre de la vanne, le vieux Vellard est assis contre le mur, une lanterne à ses pieds. Il voit Jacquette. Il voit le sergent du guet derrière elle, avec sa manche et son insigne. Il ferme les yeux une seconde.",
      "« Brasseur, dit-il. Tu m'as ramené mon fils trois fois. »",
      "Il tourne la clé. Jacquette prend un rayon, toi l'autre. Tu pousses comme tu as poussé les charrettes embourbées, les portes de cabaret, les ivrognes : avec les épaules et le dos. La roue avance. Au quinzième tour, la digue rugit.",
      "Au quarantième, il est trois heures et demie. Le vieux allume les deux autres lanternes.",
      "Tu redescends en courant par la route. À cinq heures, tu es à ton pont, trempé, rouge. Colin y est encore. Le capitaine est resté là-haut. La Sorge monte sous les arches, brune. Les Foulons sont dans l'eau, et vides : l'apothicaire a fait sonner la cloche du lavoir à deux heures.",
      "Tu montes au parvis de Saint-Rieul d'une traite. Nine est assise sous le porche, avec son homme et le berceau vide qu'ils ont porté à deux. Elle te voit arriver sans chapeau, couvert de boue jusqu'aux épaules. Elle crie ton nom. Tu ris. Tu découvres qu'un homme peut rire comme ça, trempé jusqu'aux os, devant un quartier sous l'eau.",
    ] },

  // ------------------------------------------------------------------ the widower's room
  O_veuf: { act: A, title: "Le portrait au fusain", place: "hauteville", fx: { time: 0.5 },
    text: [
      "Tu te rassois sur le lit. Le portrait de ta femme est au mur, au fusain, fait par un peintre de foire l'année de vos noces. Elle a l'air plus sérieuse que dans la vie. Elle riait tout le temps.",
      "Quand elle est tombée malade, Ilde Saunier est montée chaque soir pendant huit mois, sans réclamer un sou. Le dernier soir, elle t'a dit : *Occupe-toi de la petite. C'est tout ce qu'elle t'a demandé.*",
      "La petite a dix-neuf ans, un ventre rond, et une chambre au rez-de-chaussée de la rue du Lavoir, à deux pas de la Sorge. Le mercure, dans le baromètre de Vellard, est sur *Tempête*.",
      "Tu remets tes bottes.",
    ],
    choices: [{ label: "Descendre aux Foulons", to: "O_nine_rue" }] },
};
