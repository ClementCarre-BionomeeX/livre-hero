// Act I · road events of the court's procession from Vasselin to Pallanche, for Lisandre (she leads, "tu" feminine).
// Region "cour", gated in base.js world.events on lead lisandre during her chapter 2. Each returns to the road.
function P(o) { return Object.assign({ act: "I", noLead: true, place: null }, o); }
var BACK = [{ label: "Remonter dans la voiture", to: "@route" }];
module.exports = {
  E_c_harpe: P({ title: "La harpe",
    text: [
      "Dans la voiture des musiciens, la harpe a perdu une corde au premier cahot. La harpiste, une vieille femme sèche nommée Dame Orsolle, qui joue pour la reine depuis trente ans, la regarde comme on regarde un enfant tombé. Elle n'a pas de corde de rechange. Elle a joué trente ans sans jamais en casser une.",
      "« Le mi, dit-elle. Le mi grave. Celui de la berceuse de la reine. » Elle ne pleure pas. Ses mains tremblent.",
    ],
    choices: [
      { label: "Lui donner une corde de ton luth, et l'aider à la monter", fx: { ep: ["perso", 400], flag: "lisandre:orsolle" }, to: "E_c_harpe_corde" },
      { label: "Lui proposer de chanter le mi, à la place, le soir venu", fx: { ep: ["perso", 300] }, to: "E_c_harpe_voix" },
    ] }),
  E_c_harpe_corde: P({ title: "La corde",
    text: ["Ta corde est trop fine, trop courte. Vous la rallongez d'un nœud, à deux, penchées sur la harpe, pendant que la voiture cahote. Le mi sonne. Pas tout à fait juste, avec un petit bourdonnement, là où passe le nœud. Dame Orsolle l'écoute longtemps. « C'est mieux qu'avant, dit-elle. Avant, il était trop sûr de lui. » Elle ne te remercie pas. Elle te fait une place, à côté d'elle, sur la banquette, et c'est la place des musiciens qu'elle respecte."],
    choices: BACK }),
  E_c_harpe_voix: P({ title: "Le mi grave",
    text: ["Le soir, au relais, elle joue la berceuse de la reine, et à chaque fois que vient le mi, elle s'arrête, et tu le chantes, très bas, une note seule, tenue. Les valets, dans la cour, s'arrêtent de décharger. Personne ne savait qu'une voix de femme pouvait descendre si bas. Dame Orsolle te regarde, à la fin, d'un œil que tu ne lui connaissais pas. « Tu n'as pas la voix qu'ils croient, dit-elle. Garde-la. »"],
    choices: BACK }),
  E_c_village: P({ title: "Les enfants du village",
    text: [
      "Dans un village de vignerons, les enfants de l'école attendent au bord de la route, en rang, endimanchés, avec leur maître. Quand passe la voiture de la reine, ils chantent. Un chant d'accueil, appris pour l'occasion, qu'ils ont dû répéter tout l'hiver. Ils chantent faux, fort, avec application.",
      "La voiture de la reine ne s'arrête pas. Les rideaux restent tirés. Les enfants chantent jusqu'au bout quand même, devant la poussière.",
    ],
    choices: [
      { label: "Faire arrêter la voiture des musiciens, et descendre", fx: { ep: ["perso", 400], flag: "lisandre:enfants" }, to: "E_c_village_arret" },
      { label: "Les applaudir par la portière, en passant", to: "@route" },
    ] }),
  E_c_village_arret: P({ title: "Un auditoire",
    text: ["Tu descends. Le cocher jure. Tu vas te planter devant les enfants, et tu leur demandes de recommencer, pour toi. Ils recommencent, intimidés, puis de moins en moins. À la fin, tu applaudis, seule, au bord de la route, et le maître d'école, un jeune homme très pâle, rougit jusqu'aux oreilles. Tu rattrapes la voiture en courant, ta robe de cour retroussée jusqu'aux genoux. Dans la voiture, les musiciens font semblant de ne pas avoir vu."],
    choices: BACK }),
  E_c_essieu: P({ title: "L'essieu",
    text: [
      "Un essieu casse, à la sortie d'un pont. La voiture des dames d'honneur penche, puis se couche, doucement, dans le fossé. Personne n'est blessé. Les dames sortent par la portière du haut, en criant, dans un froufrou de soie. Le cortège s'arrête. On attend le charron.",
      "L'attente dure deux heures. Les dames s'assoient sur des malles, au soleil, et s'ennuient à mourir. L'une d'elles, la plus jeune, te fait signe. « Toi qui chantes. Chante quelque chose. N'importe quoi. Pas pour la reine. Pour nous. »",
    ],
    choices: [
      { label: "Leur chanter une chanson de quai, une chanson pas pour les dames", fx: { ep: ["perso", 400] }, to: "E_c_essieu_rue" },
      { label: "Leur chanter la ballade de la Fête, pour la répéter", fx: { ep: ["perso", 200] }, to: "E_c_essieu_ballade" },
    ] }),
  E_c_essieu_rue: P({ title: "Une chanson pas pour les dames",
    text: ["Tu chantes la chanson du batelier et de la meunière, celle qu'on chante sur les quais à la fermeture des tavernes. Au deuxième couplet, les dames rougissent. Au troisième, elles rient derrière leurs éventails. Au quatrième, la plus jeune chante le refrain avec toi. Elle le connaissait. Elle ne dira jamais où elle l'a appris. Quand le charron arrive, elles ont oublié qu'elles s'ennuyaient."],
    choices: BACK }),
  E_c_essieu_ballade: P({ title: "La ballade",
    text: ["Tu chantes la ballade. Elles écoutent poliment. À la fin, la plus jeune dit : « C'est beau. C'est triste. C'est vrai, tout ça ? » Tu ne sais pas quoi répondre. Elle hoche la tête, comme si ton silence était une réponse, et elle regarde le pont derrière vous, longtemps, sans rien dire. Le charron arrive. On repart."],
    choices: BACK }),
  E_c_escorte: P({ title: "Le cavalier de l'escorte",
    text: [
      "Un cavalier de l'escorte se laisse glisser à hauteur de la voiture des musiciens. Un garçon de vingt ans, la cuirasse trop grande, un duvet blond sur la lèvre. Il chevauche longtemps à côté de ta portière sans rien dire, en rougissant.",
      "Puis il dit, très vite, en regardant devant lui : « Ma mère vous a entendue chanter, à Vasselin, l'an dernier. Elle est morte cet hiver. Elle en parlait tout le temps. » Il serre les rênes. « Je voulais vous le dire. C'est tout. »",
    ],
    choices: [
      { label: "Lui demander le nom de sa mère", fx: { ep: ["perso", 400], flag: "lisandre:cavalier" }, to: "E_c_escorte_nom" },
      { label: "Le remercier, simplement", to: "E_c_escorte_merci" },
    ] }),
  E_c_escorte_nom: P({ title: "Son nom",
    text: ["« Aelis, dit-il. Aelis Varenne. Elle vendait des œufs, au marché du Château. » Tu ne t'en souviens pas, évidemment. Il y avait mille personnes. Tu ne le lui dis pas. Tu lui dis : « Je chanterai pour elle, à la Fête. Une chanson. Elle ne saura pas laquelle. Toi, si. » Il hoche la tête, trop vite, et il éperonne son cheval, et il remonte la colonne au trot, pour que personne ne le voie."],
    choices: BACK }),
  E_c_escorte_merci: P({ title: "Merci",
    text: ["Tu le remercies. Il rougit encore plus, salue maladroitement, et remonte la colonne au trot. Tu le cherches des yeux, plus tard, à chaque halte. Tu ne le revois pas. Il y a deux cents cavaliers. Ils ont tous la même cuirasse trop grande."],
    choices: BACK }),
};
