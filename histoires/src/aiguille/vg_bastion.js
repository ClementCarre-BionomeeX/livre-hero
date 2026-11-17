// L'Île Folle-Aiguille · side story « Le lieutenant du bastion » (owes its question to Ward No. 6: who decides who is
// mad, and what becomes of the doctor who listens too long?). Act III, Brisegrève: in a cell of the north bastion, the
// governor Lebihan keeps Lieutenant Ambroise Kerdoncuff, who wrote to the Amirauté that the garrison's lemons and salt
// meat are sold to passing ships while the soldiers rot. The fort has no surgeon worth the name; a signature from outside is needed.
// The governor asks Victorine to sign a certificate of insanity. She signs (vg:signe), writes that the man is sane
// (vg:sain), or spends the night talking with him in his cell (vg:parle). Wired in A3v_brisegreve.
module.exports = {
  passages: {
    VG_bastion: { act: "III", title: "Le lieutenant du bastion", place: "brisegreve", ambiance: "chateau",
      fx: { meet: "kerdoncuff" },
      text: [
        "Le gouverneur Lebihan l'emmène lui-même, après le café, par un escalier taillé dans la roche qui descend en tournant dans le bastion nord, une lanterne à la main, avec la mine contrite d'un homme qui va montrer un parent infirme. « Un cas, chère madame. Un cas tout à fait curieux. Je serais heureux d'avoir l'avis d'une personne de l'art. Notre chirurgien, vous le savez, est mort à Pâques, et l'homme qui tient l'infirmerie en l'attendant tremble trop pour signer quoi que ce soit, et l'Amirauté le sait. »",
        "La cellule est propre, sèche, éclairée par une meurtrière qui donne sur la mer. Il y a un lit, une table, des livres, beaucoup de livres, rangés par taille. Un homme de trente-cinq ans se lève à leur entrée, en uniforme élimé de lieutenant d'infanterie, rasé, coiffé, avec une politesse de salon. Il s'incline devant Victorine. Il ne regarde pas le gouverneur. Il s'appelle Ambroise Kerdoncuff. Il est enfermé ici depuis huit mois. Il a, dit le gouverneur avec tristesse, la manie de la persécution.",
        "Le gouverneur se retire, pour les laisser causer. Kerdoncuff attend que la porte soit fermée. Puis il dit, très calmement, que les citrons et le lard salé que l'Amirauté envoie à Brisegrève pour la garnison sont revendus aux navires de passage, que les soldats ont le scorbut, que deux sont morts l'an dernier, qu'il en a fait un rapport, en trois exemplaires, et qu'au troisième exemplaire, on l'a trouvé fou. Il sourit. « Vous avez vu l'infirmerie, madame ? Alors vous savez lequel de nous deux délire. »",
      ],
      choices: [{ label: "L'écouter encore un peu", to: "VG_certificat" }] },
    VG_certificat: { act: "III", title: "Le lieutenant du bastion", place: "brisegreve", ambiance: "chateau",
      text: [
        "Il parle une heure. Il parle bien, avec ordre, avec esprit. Il cite des chiffres. Il cite des auteurs. Puis, peu à peu, quelque chose glisse. Il dit que le gouverneur lit son courrier. C'est probable. Il dit que le gouverneur fait mettre quelque chose dans sa soupe. C'est possible. Il dit que les pierres du bastion répètent la nuit ce qu'il dit le jour, et qu'il les a entendues, et qu'il parle maintenant à voix basse pour qu'elles ne puissent pas tout rapporter. Il le dit avec la même précision tranquille que les chiffres. Victorine sent le sol devenir meuble sous ses pieds.",
        "Le gouverneur l'attend en haut de l'escalier, avec un papier et une plume. C'est un certificat, déjà rédigé, d'une belle écriture de commis : *Je soussignée, docteur en médecine, certifie avoir examiné le sieur Kerdoncuff et l'avoir trouvé atteint d'aliénation mentale avec idées de persécution, nécessitant son internement.* Il ne manque que le nom et la signature. « Une simple formalité. Il sera mieux soigné à l'asile de Morlenc. Ici, nous n'avons pas les moyens. Et vous savez, madame, l'Amirauté ne lit les rapports que des gens qui ont l'esprit sain. »",
        "Victorine regarde le papier. Elle pense aux pierres qui écoutent. Elle pense aux citrons. Elle pense à l'infirmerie, aux gencives qui saignent. Elle pense que les deux choses peuvent être vraies à la fois : qu'un homme peut avoir raison et devenir fou à force d'avoir raison seul, dans une cellule, pendant huit mois. Elle pense surtout que la plume est déjà trempée, et que le gouverneur a pris la peine de la tremper lui-même.",
      ],
      choices: [
        { label: "Signer : l'homme est malade, et il sera mieux soigné ailleurs", fx: { flag: "vg:signe" }, to: "VG_signe" },
        { label: "Écrire au bas du papier qu'il est sain d'esprit, et signer cela", fx: { flag: "vg:sain" }, to: "VG_sain" },
        { label: "Demander à redescendre, et passer la nuit à parler avec lui", fx: { flag: "vg:parle" }, to: "VG_parle" },
      ] },
    VG_signe: { act: "III", title: "Le lieutenant du bastion", place: "brisegreve", ambiance: "chateau",
      text: [
        "Elle signe. Elle le fait proprement, sans trembler, en ajoutant même, de sa main, une recommandation de régime et de bains tièdes, parce qu'elle croit, ou qu'elle veut croire, que l'homme du bastion est malade et que l'asile de Morlenc vaut mieux qu'une meurtrière sur la mer. Le gouverneur la remercie avec chaleur. Il sèche l'encre avec du sable, plie le papier en quatre, et le glisse dans sa poche intérieure, contre son cœur, comme une lettre d'amour.",
        "Le lendemain, avant l'appareillage, elle redescend au bastion, sous prétexte de laisser au lieutenant un flacon de valériane. Il sait déjà. Les pierres le lui ont dit, ou le sergent. Il prend le flacon. Il la remercie, avec la même politesse de salon. Il dit : « Vous avez raison, madame. Je suis fou. Huit mois ici rendent fou. Mais j'étais sain le premier jour, et c'est le premier jour qu'ils m'ont enfermé. Votre certificat est exact. Il est seulement daté du mauvais jour. »",
        "Elle remonte. Sur le pont de la Cormorane, en regardant s'éloigner le fort noir, elle se demande si elle a soigné un malade ou servi un voleur, et elle comprend que, pour le gouverneur, la question n'a jamais eu d'importance : il avait besoin d'une signature, n'importe laquelle, et il a choisi la plus honnête qu'il ait trouvée. C'est celle-là qui coûte le plus cher.",
      ],
      choices: [{ label: "Regagner la Cormorane", fx: { quest: "VG" }, back: "A3v_brisegreve" }] },
    VG_sain: { act: "III", title: "Le lieutenant du bastion", place: "brisegreve", ambiance: "chateau",
      text: [
        "Elle prend la plume. Elle barre la phrase du commis, d'un trait net, et elle écrit en dessous, de sa propre main : *certifie avoir examiné le sieur Kerdoncuff, l'avoir trouvé lucide, cohérent et instruit, et atteint seulement des troubles que produit sur tout homme sain un enfermement de huit mois sans motif.* Elle signe. Elle tend le papier au gouverneur. Il le lit. Il sourit. Il le plie, le glisse dans sa poche, et dit qu'il le fera suivre, naturellement.",
        "Le soir, un sergent de la garnison vient la voir à bord, en cachette, sa casquette à la main. Il lui dit que le papier a brûlé dans la cheminée du gouverneur une heure après le dîner. Puis il sort de sa vareuse une liasse épaisse, cousue de fil rouge. C'est le rapport du lieutenant, le quatrième exemplaire, celui que personne n'a trouvé. Le lieutenant le lui fait passer. Il demande seulement qu'elle le remette, à Morlenc ou ailleurs, à quelqu'un qui sache lire.",
        "Elle le range dans sa sacoche, entre les bistouris et les bandes. Il pèse plus lourd que les instruments. Elle pense qu'elle a écrit la vérité sur un papier destiné au feu, et qu'on lui a confié, en échange, une vérité qui ne brûlera que si elle la laisse brûler. Elle pense aussi que le gouverneur Lebihan l'a saluée, au moment de son départ, avec une courtoisie parfaite, et qu'un homme qui brûle les certificats ne se fait jamais d'ennemis pressés.",
      ],
      choices: [{ label: "Regagner la Cormorane", fx: { quest: "VG" }, back: "A3v_brisegreve" }] },
    VG_parle: { act: "III", title: "Le lieutenant du bastion", place: "brisegreve", ambiance: "nuit",
      text: [
        "Le gouverneur, surpris, lui fait ouvrir la cellule et lui laisse une lanterne, en disant qu'il comprend, qu'il admire, que la science a ses exigences. Elle reste toute la nuit. Ils parlent des citrons, puis des livres, puis de tout. Kerdoncuff a tout lu, tout pensé, seul, dans sa cellule, et il pense vite et bien, et il pense en cercle. Victorine se surprend à rire. Elle se surprend à baisser la voix, vers trois heures, à cause des pierres. Elle se surprend à trouver ça raisonnable.",
        "À l'aube, elle veut sortir. La porte est fermée. Elle frappe. Personne ne répond. Elle frappe encore, longtemps. Kerdoncuff, assis sur son lit, la regarde avec une compassion infinie. Il dit : « C'est comme ça que ça commence, madame. On vient parler une nuit. » Une heure passe. Puis deux. Le soleil entre par la meurtrière et monte le long du mur. Victorine s'assied sur le bord de la table, et elle découvre en elle une peur qu'elle ne connaissait pas, qui a la forme exacte d'une porte.",
        "On ouvre à neuf heures. Le sergent s'excuse avec embarras : la clef était chez le gouverneur, qui dormait, qu'on n'ose pas réveiller. La capitaine Ribaud est au pied du fort, avec six hommes armés, et fait savoir qu'elle n'appareillera pas sans sa médecin. Le gouverneur, en robe de chambre, se confond en excuses pour ce malentendu. Victorine le remercie. En sortant, elle se retourne. Le lieutenant est à sa meurtrière. Il lui fait un petit signe de la main, comme on salue quelqu'un qui part en voyage. Il sait qu'elle a compris. C'est le seul cadeau qu'il pouvait lui faire.",
      ],
      choices: [{ label: "Regagner la Cormorane", fx: { quest: "VG" }, back: "A3v_brisegreve" }] },
  },
  extras: {
    people: {
      kerdoncuff: { name: "Ambroise Kerdoncuff", aka: ["le lieutenant du bastion"], qui: "Lieutenant d'infanterie de la garnison de Brisegrève, enfermé pour folie." },
    },
    quests: [
      { id: "VG", act: "III", kind: "annexe", title: "Le lieutenant du bastion", start: "VG_bastion", doit: "salle6", echo: ["vg:signe", "vg:sain", "vg:parle"] },
    ],
  },
};
