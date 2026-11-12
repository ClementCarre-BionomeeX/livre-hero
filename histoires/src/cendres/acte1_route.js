// Act I · more random road events. The plain of Pallanche, the crests and the mountain of Sauvelune are walked by the
// child of Sauvelune ("tu", masculine); the Marches by Ysolde and her column ("tu", feminine).
function P(o) { return Object.assign({ act: "I", noLead: true, place: null }, o); }
module.exports = {
  // ------------------------------------------------------------ plaine
  E_foire: P({ title: "La foire aux noms",
    text: [
      "Un bourg en fête, sur la route des Cloches. Des étals, des bannières, un montreur d'ours. Et, sous une tente rayée, un homme en habit vert qui vend des noms.",
      "« Des noms neufs, des noms anciens, des noms de saints, des noms de rois ! Pour vos enfants, pour vos chiens, pour vous-mêmes si le vôtre vous pèse ! Deux liards le nom commun, un sou le nom de baptême, trois sous le nom à particule ! » On fait la queue. Une femme achète un nom pour son nouveau-né. Un vieux en achète un pour lui, et s'en va en le répétant à voix basse, ravi.",
    ],
    choices: [
      { label: "Lui demander d'où viennent ses noms", test: { dom: "social", label: "Le marchand", help: [{ if: { has: "passe:temple" }, v: 10 }] },
        win: { fx: { ep: ["perso", 500] }, to: "E_foire_registre" }, lose: { to: "E_foire_rien" } },
      { label: "Passer ton chemin", to: "@route" },
    ] }),
  E_foire_registre: P({ title: "Le vieux registre",
    text: [
      "Il rit, il cligne de l'œil, il finit par te montrer, sous son comptoir, un gros registre de paroisse, relié de cuir, dont il arrache une page à chaque vente. « Acheté à un greffier, à Pallanche. Des noms qui ne servent plus : leurs gens sont morts, ou partis, ou personne ne s'en souvient. Ça serait dommage de les perdre, non ? »",
      "Sur la couverture, à demi effacé, le nom d'un village. Tu ne le connais pas. Personne ici ne le connaît.",
    ],
    choices: [{ label: "Reprendre la route", to: "@route" }] }),
  E_foire_rien: P({ title: "Un nom pour toi",
    text: ["« Secret de fabrication, mon garçon. » Il te propose un nom, pour toi, gratuitement, parce que tu as une bonne tête : Florimond. Tu refuses. Il insiste. Tu t'en vas, et pendant une lieue, tu ne peux pas t'empêcher de le répéter dans ta tête, Florimond, Florimond, comme une chanson idiote."],
    choices: [{ label: "Reprendre la route", to: "@route" }] }),

  E_mendiant: P({ title: "Le frère mendiant",
    text: [
      "Un frère mendiant, assis au bord d'un fossé, pieds nus, la robe grise trouée aux coudes. Il a une écuelle vide et un sourire plein de dents. « Un morceau de pain, mon fils, et je te dis ton avenir. »",
    ],
    choices: [
      { label: "Lui donner du pain", fx: { food: -1 }, to: "E_mendiant_avenir" },
      { label: "Lui dire que tu n'as rien", to: "E_mendiant_rien" },
    ] }),
  E_mendiant_avenir: P({ title: "L'avenir",
    fx: { ep: ["perso", 300] },
    text: [
      "Il mange le pain lentement, en entier, et tu attends. Quand il a fini, il te regarde longtemps, la tête penchée. « Tu vas rentrer chez toi, dit-il. Et ce ne sera pas chez toi. » Il s'essuie la bouche. « C'est tout. C'est ce que je dis à tout le monde. Ça tombe juste, presque toujours. »",
    ],
    choices: [{ label: "Reprendre la route", to: "@route" }] }),
  E_mendiant_rien: P({ title: "Rien",
    text: ["« Alors je ne te dis rien, et ça ne te coûte rien », dit-il gaiement. Tu repars. Quand tu te retournes, il a sorti de sous sa robe un pain blanc entier, et il mange, et il te fait un signe de la main."],
    choices: [{ label: "Reprendre la route", to: "@route" }] }),

  E_fosse: P({ title: "La fosse",
    text: [
      "Au bord d'un champ, des hommes creusent une fosse. Longue. Un fossoyeur, deux valets, un prêtre qui attend. Il n'y a pas de cercueil. Il n'y a pas de famille.",
      "« Pour qui ? » demandes-tu. Le prêtre hausse les épaules. « Pour ceux du hameau d'à côté. Trois familles. Partis dans la neige, la nuit de mardi, tous ensemble, en chemise. On en a retrouvé deux. Les autres, on les enterre quand même. Ça ne coûte rien, une fosse, et ça fait un endroit. »",
    ],
    choices: [
      { label: "Prendre une pelle et aider", fx: { ep: ["perso", 400] }, to: "E_fosse_pelle" },
      { label: "Reprendre la route", to: "@route" },
    ] }),
  E_fosse_pelle: P({ title: "Un endroit",
    text: ["Tu creuses jusqu'au soir. Le prêtre dit une prière sans noms, parce qu'il ne les connaît pas. Les valets plantent une croix de bois. Le fossoyeur te donne un quignon et du lard, et te dit que tu as de bons bras, pour un enfant de la montagne. Tu ne lui dis pas que là-haut, chez toi, il n'y aura peut-être bientôt plus personne pour creuser."],
    choices: [{ label: "Reprendre la route", fx: { food: 1 }, to: "@route" }] }),

  // ------------------------------------------------------------ crêtes
  E_orage: P({ title: "L'orage",
    text: [
      "Le ciel noircit en une heure, comme toujours en montagne. Les premiers coups de tonnerre roulent sur les crêtes. La foudre tombe à cent pas, sur un pin isolé, qui se fend en deux avec un bruit de porte qu'on claque.",
      "Il faut descendre du fil de la crête. Tout de suite.",
    ],
    choices: [{ label: "Chercher un abri", test: { dom: "nature", label: "L'orage", help: [{ if: { has: "passe:alpage" }, v: 20 }] },
      win: { fx: { ep: ["seance", 400] }, to: "E_orage_abri" }, lose: { fx: { pv: -3 }, to: "E_orage_trempe" } }] }),
  E_orage_abri: P({ title: "Le surplomb",
    text: ["Tu te glisses sous un surplomb de roche, sec, assez grand pour un mouton, et tu attends, roulé en boule, pendant que la montagne tonne. Quand l'orage passe, la neige blanche, en face, sur les Hautes-Combes, n'a pas bougé. La pluie ne l'a pas touchée. Elle est sèche, sous un ciel qui ruisselle."],
    choices: [{ label: "Reprendre la route", to: "@route" }] }),
  E_orage_trempe: P({ title: "Trempé",
    text: ["Tu dévales la pente sous la grêle, tu glisses, tu te relèves, tu te cognes un genou sur une pierre. Tu passes l'orage dans un creux, trempé jusqu'aux os, à compter les secondes entre l'éclair et le tonnerre, comme Joris te l'a appris. Le soir, tu claques des dents jusqu'à ce que le feu prenne."],
    choices: [{ label: "Reprendre la route", to: "@route" }] }),

  E_chamois: P({ title: "Le chamois",
    text: [
      "Sur une vire, au-dessus du sentier, un chamois. Il ne fuit pas. Il te regarde, immobile, la tête haute. Puis il fait un pas vers la neige blanche, au nord, s'arrête, revient, refait un pas. Il ne sait plus de quel côté il habite.",
    ],
    choices: [
      { label: "Le chasser vers le sud, vers le vert", test: { dom: "nature", label: "Le chamois", help: [{ if: { has: "passe:alpage" }, v: 15 }] },
        win: { fx: { ep: ["perso", 400] }, to: "E_chamois_sud" }, lose: { to: "E_chamois_nord" } },
      { label: "Le laisser", to: "@route" },
    ] }),
  E_chamois_sud: P({ title: "Vers le vert",
    text: ["Tu lances un caillou, puis un autre, du côté de la neige. Le chamois sursaute, fait volte-face, et file vers le sud en trois bonds, vers les alpages verts. Il ne se retourne pas. Toi, tu te retournes longtemps vers le nord."],
    choices: [{ label: "Reprendre la route", to: "@route" }] }),
  E_chamois_nord: P({ title: "Vers le blanc",
    text: ["Ton caillou le manque. Le chamois sursaute, et file du mauvais côté, vers le nord, dans la neige blanche, où ses sabots ne laissent pas de trace. Tu le regardes devenir un point gris, puis plus rien."],
    choices: [{ label: "Reprendre la route", to: "@route" }] }),

  // ------------------------------------------------------------ montagne
  E_source: P({ title: "La source",
    text: [
      "Une source sous un rocher, au bord du chemin, où tout Sauvelune s'arrête pour boire en descendant à la vallée. Quelqu'un y a gravé, il y a longtemps, des initiales et un cœur. Tu les as toujours vues. Tu ne t'es jamais demandé à qui elles étaient.",
      "Aujourd'hui, les initiales ont disparu. Le cœur est toujours là, tout seul, sur la pierre.",
    ],
    choices: [{ label: "Boire et repartir", fx: { pv: 2 }, to: "@route" }] }),
  E_marmotte: P({ title: "Le sifflet",
    text: [
      "Un sifflet strident, tout près : une marmotte, dressée sur son rocher, qui donne l'alerte à toute la colonie. Les autres disparaissent dans leurs terriers, toutes, d'un coup. Elle reste seule sur son rocher, à siffler. Elle a vu quelque chose que tu ne vois pas.",
      "Derrière toi, sur le chemin, il n'y a personne. Seulement, dans la poussière, des traces de pas qui ne s'enfoncent pas, et qui s'arrêtent là où tu t'es arrêté.",
    ],
    choices: [{ label: "Presser le pas", to: "@route" }] }),

  // ------------------------------------------------------------ marches (Ysolde)
  E_veuve_soldat: P({ title: "La veuve de soldat",
    text: [
      "Une femme attend au bord de la route, avec une charrette à bras et deux enfants. Elle t'arrête de la main. « Capitaine. Mon mari était de Brenne. Pierre Aubin, de la compagnie du Loup. Il est mort à la guerre des Trois Ans. La pension ne vient plus. Au fort, on me dit qu'il n'y a pas de Pierre Aubin sur les rôles. Qu'il n'y en a jamais eu. »",
      "Elle te tend un papier. Un brevet de soldat, plié en huit, avec le sceau du loup. Pierre Aubin. La signature, en bas, est celle de ton père.",
    ],
    choices: [
      { label: "Lui écrire un ordre de pension, de ta main, sous ton sceau", fx: { flag: "ys:aubin", gold: -2, ep: ["perso", 600] }, to: "E_veuve_soldat_ordre" },
      { label: "Lui dire que tu verras au retour", to: "@route" },
    ] }),
  E_veuve_soldat_ordre: P({ title: "Ton sceau",
    text: ["Tu écris, sur le dos d'un ordre de marche, à la plume, en appuyant : *Pierre Aubin, de la compagnie du Loup, mort au service. Sa veuve a droit.* Tu signes. Tu scelles. Tu lui donnes en plus deux sous de ta bourse, parce que tu sais ce que vaut un papier, ces temps-ci. Elle serre le papier contre elle comme un enfant."],
    choices: [{ label: "Reprendre la route", to: "@route" }] }),
  E_pont_coupe: P({ title: "Le pont coupé",
    text: [
      "Le pont de bois sur le ruisseau des Aulnes a été coupé à la hache, cette nuit. Les entailles sont fraîches. Quelqu'un ne voulait pas qu'on passe, ou ne voulait pas qu'on revienne.",
    ],
    choices: [{ label: "Faire passer tout le monde à gué", test: { dom: "nature", label: "Le gué des Aulnes", help: [{ if: { item: "corde" }, v: 15 }] },
      win: { fx: { ep: ["seance", 500] }, to: "E_pont_coupe_ok" }, lose: { fx: { pv: -2, food: -1 }, to: "E_pont_coupe_rate" } }] }),
  E_pont_coupe_ok: P({ title: "Le gué",
    text: ["Tu fais tendre une corde d'une rive à l'autre, et tout le monde passe en se tenant, les enfants sur les épaules des soldats. Personne ne tombe. De l'autre côté, sur la boue, des traces de bottes qui partent vers l'est. Tu ne les suis pas."],
    choices: [{ label: "Reprendre la route", to: "@route" }] }),
  E_pont_coupe_rate: P({ title: "L'eau froide",
    text: ["Au milieu du gué, une femme glisse avec son panier. Un soldat la rattrape, et perd son sac, et les vivres de deux jours partent avec le courant. Vous arrivez de l'autre côté trempés, en colère, et plus légers."],
    choices: [{ label: "Reprendre la route", to: "@route" }] }),
};
