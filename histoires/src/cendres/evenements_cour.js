// Act I · road events of the court's procession from Vasselin to Pallanche, for Lisandre (she leads, "tu" feminine).
// Region "cour", gated in base.js world.events on lead lisandre during her chapter 2. Each returns to the road.
function P(o) { return Object.assign({ act: "I", noLead: true, place: null }, o); }
var BACK = [{ back: "@route" }];
module.exports = {
  E_c_harpe: P({ title: "La harpe",
    text: [
      "Dans la voiture des musiciens, la harpe a perdu une corde au premier cahot. La harpiste, une vieille femme sèche nommée Dame Orsolle, qui joue pour la reine depuis trente ans, la regarde comme on regarde un enfant tombé. Sa boîte à cordes est restée à Vasselin : en trente ans, elle n'en a jamais cassé une.",
      "« Le mi, dit-elle. Le mi grave. Celui de la berceuse de la reine. » Ses yeux restent secs. Ses mains tremblent.",
    ],
    choices: [
      { label: "Lui donner une corde de ton luth, et l'aider à la monter", fx: { ep: ["perso", 400] }, to: "E_c_harpe_corde" },
      { label: "Lui proposer de chanter le mi, à la place, le soir venu", fx: { ep: ["perso", 300] }, to: "E_c_harpe_voix" },
    ] }),
  E_c_harpe_corde: P({ title: "La corde",
    text: ["Ta corde est trop fine, et trop courte d'un empan. Vous la rallongez d'un nœud, à deux, penchées sur la harpe, pendant que la voiture cahote. Le mi sonne, un rien en dessous de la note, avec un petit bourdonnement, là où passe le nœud. Dame Orsolle l'écoute longtemps. « C'est mieux qu'avant, dit-elle. Avant, il était trop sûr de lui. » Elle garde ses remerciements. Elle te fait une place, à côté d'elle, sur la banquette, et c'est la place des musiciens qu'elle respecte."],
    choices: BACK }),
  E_c_harpe_voix: P({ title: "Le mi grave",
    text: ["Le soir, au relais, elle joue la berceuse de la reine, et à chaque fois que vient le mi, elle s'arrête, et tu le chantes, très bas, une note seule, tenue. Les valets, dans la cour, s'arrêtent de décharger. Une voix de femme, si bas : la cour entière l'ignorait. Dame Orsolle te regarde, à la fin, d'un œil que tu ne lui connaissais pas. « Ta voix est autre que celle qu'ils croient, dit-elle. Garde-la. »"],
    choices: BACK }),
  E_c_village: P({ title: "Les enfants du village",
    text: [
      "Dans un village de vignerons, les enfants de l'école attendent au bord de la route, en rang, endimanchés, une vingtaine, les cheveux mouillés et peignés, avec leur maître. Quand passe la voiture de la reine, ils chantent. Un chant d'accueil, appris pour l'occasion, qu'ils ont dû répéter tout l'hiver. Ils chantent faux, fort, avec application.",
      "La voiture de la reine passe au trot. Les rideaux restent tirés. Les enfants chantent jusqu'au bout quand même, devant la poussière.",
    ],
    choices: [
      { label: "Faire arrêter la voiture des musiciens, et descendre", fx: { ep: ["perso", 400] }, to: "E_c_village_arret" },
      { label: "Les applaudir par la portière, en passant", to: "@route" },
    ] }),
  E_c_village_arret: P({ title: "Un auditoire",
    text: ["Tu descends. Le cocher jure. Tu vas te planter devant les enfants, et tu leur demandes de recommencer, pour toi. Ils recommencent, intimidés, puis de moins en moins. À la fin, tu applaudis, seule, au bord de la route, et le maître d'école, un jeune homme très pâle, rougit jusqu'aux oreilles. Tu rattrapes la voiture en courant, ta robe de cour retroussée jusqu'aux genoux. Dans la voiture, les musiciens regardent le plafond avec un grand intérêt."],
    choices: BACK }),
  E_c_essieu: P({ title: "L'essieu",
    text: [
      "Un essieu casse, à la sortie d'un pont. La voiture des dames d'honneur penche, puis se couche, doucement, dans le fossé. Le bilan se limite à trois chapeaux et un éventail. Les dames sortent par la portière du haut, en criant, dans un froufrou de soie. Le cortège s'arrête. On attend le charron.",
      "L'attente dure deux heures. Les dames s'assoient sur des malles, au soleil, et s'ennuient à mourir. L'une d'elles, la plus jeune, te fait signe. « Toi qui chantes. Chante quelque chose. N'importe quoi. Pour nous, cette fois, et la reine attendra. »",
    ],
    choices: [
      { label: "Leur chanter une chanson de quai, une chanson pas pour les dames", fx: { ep: ["perso", 400] }, to: "E_c_essieu_rue" },
      { label: "Leur chanter la ballade de la Fête, pour la répéter", fx: { ep: ["perso", 200] }, to: "E_c_essieu_ballade" },
    ] }),
  E_c_essieu_rue: P({ title: "Une chanson pas pour les dames",
    text: ["Tu chantes la chanson du batelier et de la meunière, celle qu'on chante sur les quais à la fermeture des tavernes. Au deuxième couplet, les dames rougissent. Au troisième, elles rient derrière leurs éventails. Au quatrième, la plus jeune chante le refrain avec toi. Elle le connaissait. Où elle l'a appris, elle l'emportera dans la tombe. Quand le charron arrive, elles ont oublié qu'elles s'ennuyaient."],
    choices: BACK }),
  E_c_essieu_ballade: P({ title: "La ballade",
    text: ["Tu chantes la ballade. Elles écoutent poliment. À la fin, la plus jeune dit : « C'est beau. C'est triste. C'est vrai, tout ça ? » Les mots te manquent. Elle hoche la tête, comme si ton silence était une réponse, et elle regarde le pont derrière vous, longtemps, en silence. Le charron arrive. On repart."],
    choices: BACK }),
  E_c_escorte: P({ title: "Le cavalier de l'escorte",
    text: [
      "Un cavalier de l'escorte se laisse glisser à hauteur de la voiture des musiciens. Un garçon de vingt ans, la cuirasse trop grande, un duvet blond sur la lèvre. Il chevauche une demi-lieue à côté de ta portière, en silence, en rougissant.",
      "Puis il dit, très vite, en regardant devant lui : « Ma mère vous a entendue chanter, à Vasselin, l'an dernier. Elle est morte cet hiver. Elle en parlait tout le temps. » Il serre les rênes. « Je voulais vous le dire. C'est tout. »",
    ],
    choices: [
      { label: "Lui demander le nom de sa mère", fx: { ep: ["perso", 400] }, to: "E_c_escorte_nom" },
      { label: "Le remercier, simplement", to: "E_c_escorte_merci" },
    ] }),
  E_c_escorte_nom: P({ title: "Son nom",
    text: ["« Aelis, dit-il. Aelis Varenne. Elle vendait des œufs, au marché du Château. » Le nom ne te dit rien, évidemment. Il y avait mille personnes. Tu le gardes pour toi. Tu lui dis : « Je chanterai pour elle, à la Fête. Une chanson. Elle ne saura pas laquelle. Toi, si. » Il hoche la tête, trop vite, et il éperonne son cheval, et il remonte la colonne au trot, pour que personne ne le voie."],
    choices: BACK }),
  E_c_escorte_merci: P({ title: "Merci",
    text: ["Tu le remercies. Il rougit encore plus, salue maladroitement, et remonte la colonne au trot. Tu le cherches des yeux, plus tard, à chaque halte. Il reste introuvable. Il y a deux cents cavaliers. Ils ont tous la même cuirasse trop grande."],
    choices: BACK }),
};
