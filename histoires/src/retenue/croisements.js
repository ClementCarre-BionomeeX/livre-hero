// Second pass on Odon, Ilde, Jacquette and Anselme: roads where one night crosses another. Odon follows the green
// valet to the Corlay house; Ilde gives the parcel to Nine's boatman; Jacquette climbs to the old man before midnight;
// Anselme puts the key in his son's hands (a new ending each for Ilde and Anselme).
var A = "I";
module.exports = {
  // ------------------------------------------------------------------ Odon follows the valet
  O_valet: { act: A, title: "Le valet vert", place: "hauteville", fx: { time: 0.25 },
    text: [
      "Tu sors du bureau. Dans la rue, à cinquante pas devant toi, la livrée verte remonte vers la rue Haute, la toile cirée sous le bras. Tu le suis de loin, comme tu suis les voleurs de foire.",
      "Le valet entre chez Corlay par la porte du jardin. Au premier étage, derrière une fenêtre aux rideaux mal tirés, tu vois un cabinet tendu de vert, un feu, et un homme en habit de soirée qui reçoit la toile. Il l'ouvre. Il regarde la clé longtemps. Puis il fait glisser une carte encadrée sur le mur, et derrière la carte il y a un coffre.",
      "Une femme en gris, à un pupitre, lève les yeux vers la fenêtre. Elle te voit dans la rue, sous ta lanterne, ton insigne à la manche. Elle ne dit rien à son maître.",
    ],
    choices: [
      { label: "Attendre qu'elle descende", if: { lore: "veine" }, to: "O_pernelle" },
      { label: "Rentrer chez toi", to: "O_chambre" },
    ] },
  O_pernelle: { act: A, title: "La porte du jardin", place: "hauteville", fx: { time: 0.75 },
    text: [
      "Elle descend à minuit, quand le souper finit et que les invités partent en riant fort dans la rue Haute. Elle ouvre la porte du jardin et elle te fait signe.",
      "« Pernelle Daguet, dit-elle. Je tiens ses comptes. Vous êtes le sergent du pont. » Elle ne demande pas pourquoi tu es là. « Dites-moi ce que c'est, cette clé. Ce qu'elle ouvre vraiment. Monsieur dit : une lubie de vieillard. »",
      "Tu lui dis la veine, l'orage, la vanne de fond, les Foulons. Elle écoute les bras croisés, sans un geste. À la fin, elle rentre. Tu attends dans le froid un quart d'heure, sûr qu'elle est allée réveiller Corlay.",
      "Elle revient avec la toile cirée. « Le coffre a deux clés. Monsieur garde l'une sur lui. L'autre est dans mon pupitre depuis douze ans, au cas où il mourrait. » Elle te met le paquet dans les bras. « Il ne mourra pas cette nuit. Allez-vous-en vite. »",
    ],
    choices: [
      { label: "Prendre le cheval du guet, et porter la clé à la digue", to: "O_cheval", fx: { item: "cle_vannes" } },
    ] },

  // ------------------------------------------------------------------ Ilde and the boatman
  I_guillot: { act: A, title: "Le batelier de Nine", place: "foulons", fx: { flag: "route:guillot", drop: "paquet", time: 0.5 },
    text: [
      "Rue du Lavoir, la troisième maison après la fontaine. Tu frappes. Guillot, l'homme de Nine, t'ouvre en chemise, une gaffe à la main. Il a vingt-cinq ans et une barque à fond plat amarrée sous ses fenêtres. Derrière lui, Nine, le ventre en avant. Tu l'as suivie tout l'hiver.",
      "« Je ne peux pas passer le pont, Guillot. Toi, tu n'as pas besoin du pont. » Tu poses le paquet sur la table. « La cabane des Loutres, au pied de la digue. Par la Sorge, à contre-courant. Avant minuit. À Jacquette, et à personne d'autre. »",
      "Guillot soupèse le paquet. Il regarde Nine. Nine regarde le paquet, puis toi. « Le père de Nine garde le pont, ce soir, dit-il. Avec deux gars. Pour un paquet, je parie. »",
      "Il prend sa veste. Nine lui tend son bonnet sans un mot. Cinq minutes après, tu entends sa gaffe cogner contre les pierres du quai, puis plus rien que la rivière.",
    ],
    choices: [{ label: "Rentrer à ta boutique", to: "I_fulbert_vient" }] },

  // ------------------------------------------------------------------ Jacquette climbs before midnight
  J_vieux_tot: { act: A, title: "Avant minuit", place: "digue", fx: { learn: "cle", time: 0.75 },
    text: [
      "Tu laisses le sel dans les roseaux et tu montes les deux cents marches de la digue avant d'aller à ta cabane. Le vieux t'ouvre en chemise, une lanterne à la main. Il sent le laudanum. Derrière lui, sur l'appui de la fenêtre, une lanterne allumée, et deux autres éteintes à côté.",
      "« Jacquette ? Il est trop tôt. »",
      "Il te dit, parce que tu es là et qu'il est fatigué de se taire. La clé de la vanne de fond, confiée à Ilde à sept heures. Ilde qui la fera porter. Trois heures, quatre bras. Le pont gardé, on le lui a dit en bas.",
      "« Si elle est maligne, la porteuse, dit-il, elle prendra la berge des Aulnes. »",
    ],
    choices: [
      { label: "Traverser la Sorge et descendre la berge des Aulnes au-devant d'elle", to: "J_aulnes" },
      { label: "Redescendre l'attendre à ta cabane", to: "J_cabane" },
    ] },

  // ------------------------------------------------------------------ Anselme trusts his son
  A_bastien_porte: { act: A, title: "La clé au fils", place: "digue", fx: { time: 0.25 },
    text: [
      "« Ilde, attends. » Tu te lèves en t'appuyant sur le bras du fauteuil. Tu vas jusqu'à la porte de la pièce d'à côté. Bastien est sur le banc, les yeux fermés, la respiration trop régulière.",
      "« Bastien. Je sais que tu ne dors pas. »",
      "Il ouvre les yeux. Il ne fait pas semblant de se réveiller. Il a tout entendu, et tu le sais, et il sait que tu le sais.",
      "Tu lui mets la toile cirée dans les bras. Tu lui dis : « La cabane des Loutres, avant minuit. À Jacquette. Puis tu remontes avec elle par le canal, et tu tournes la roue avec elle. Il faut quatre bras, et tu en as deux. »",
      "Ilde te regarde comme si tu étais devenu fou. Tu ne regardes que ton fils.",
    ],
    choices: [{ label: "Le laisser partir", to: "A_confiance_nuit" }] },
  A_confiance_nuit: { act: A, title: "L'escalier", place: "digue", fx: { time: 4.5 },
    text: [
      "Bastien descend l'escalier de la digue. Tu entends son pas décroître : lent au début, puis plus vite, puis très vite, comme quelqu'un qui court vers la ville.",
      "Ilde reste. En silence, elle compte tes gouttes. À neuf heures, elle redescend aux Foulons pour faire lever le quartier à deux heures, comme prévu. Elle t'embrasse sur le front en partant.",
      "Dix heures. Onze. Minuit. Personne. Une seule lanterne à ta fenêtre. Tu ne t'étonnes de rien. Tu attends quand même.",
      "À deux heures et quart, on gratte à la porte de l'escalier intérieur.",
    ],
    choices: [{ label: "Ouvrir", to: "A_confiance" }] },
  A_confiance: { act: A, title: "Le fils revenu", place: "digue", end: true, fx: { time: 3.5 },
    text: [
      "Bastien est là, avec Jacquette derrière lui. Il est trempé, couvert de boue, il a une joue ouverte. Il a la toile cirée dans les bras.",
      "« Je suis allé jusqu'à la porte de son jardin, dit-il sans te regarder. J'avais la main sur la cloche. Je l'ai tenue longtemps. » Il pose la toile cirée sur tes genoux. « Je n'ai pas pu. Avec la clé dans les bras, je n'ai pas pu. Ce qu'on entend derrière une porte, ça se vend. Ce qu'on vous met dans les mains, non. »",
      "Puis : « J'ai fait le tour par les Aulnes. Je suis tombé dans le déversoir. »",
      "Vous descendez à la vanne. Tu tournes la clé. Bastien prend un rayon, Jacquette l'autre. Quarante tours. Au quinzième, la digue rugit.",
      "Au jour, il pleut. Le lac descend. Aux Foulons, Ilde a fait lever le quartier à deux heures ; tout le monde est sur le parvis de Saint-Rieul.",
      "Ton fils dort sur le banc, pour de vrai cette fois, la bouche ouverte. Tu le regardes dormir jusqu'à ce que ta tête tombe. Il te reste peu de temps. Tu l'as passé à la bonne place.",
    ] },
};
