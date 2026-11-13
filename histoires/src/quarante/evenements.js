// Route events: the lagoon (the south channel to the salt-pans) and the mainland (the river road to Castel-Brume).
// Each one comes back to the journey with { back: "@route" }.

var ROUTE = "@route";

module.exports = {
  // ------------------------------------------------------------------ the lagoon
  E_pecheurs: { title: "Les pêcheurs de Torre",
    text: [
      "Trois barques à fond plat barrent le chenal, nez à nez, comme des chiens qui se reniflent. Des pêcheurs de Torre, l'îlot aux cabanes, relèvent un filet commun. Ils ont l'air maigres. Le filet aussi.",
      "Le plus vieux se redresse en voyant ta barque et le lion ailé de la proue. Il ôte son bonnet. « C'est le Sceau ? » Il crache dans l'eau, poliment, de côté. « Alors dites au Sceau qu'on vend la seiche à la Hanse au prix d'il y a dix ans, et qu'on rachète le pain au prix de demain. »",
    ],
    choices: [
      { label: "Lui acheter sa pêche au prix juste, de ta poche", if: { gold: { min: 24 } }, why: "Tu n'as pas de quoi payer une barque de seiches.", fx: { gold: -24, food: 3, fac: { rames: 5 }, ep: ["perso", 300] }, to: "E_pecheurs_paye" },
      { label: "L'écouter jusqu'au bout", fx: { ep: ["perso", 200] }, to: "E_pecheurs_ecoute" },
      { label: "Lui demander de dégager le chenal", back: ROUTE },
    ] },
  E_pecheurs_paye: { title: "Le prix juste",
    text: [
      "Le vieux compte les pièces deux fois. Puis il te tend le panier, et une bouteille d'eau-de-vie de figue que personne ne lui a demandée. « Pour la route, dit-il. Et pour que vous vous souveniez de Torre quand vous voterez. »",
      "Tu ne lui dis pas que le Sceau ne vote pas pour le prix des seiches. Il le sait sans doute. Il voulait juste qu'on le paie une fois au bon prix.",
    ],
    choices: [{ back: ROUTE }] },
  E_pecheurs_ecoute: { title: "Torre",
    text: [
      "Il parle longtemps. Des gabelous de la Hanse qui pèsent la pêche avec des poids limés. Des enfants qui rament dès six ans. D'un frère mort à l'an des Rames, il y a trente ans, sur le pont qui porte aujourd'hui ce nom. Il parle sans colère, comme on récite une liste de courses qu'on connaît par cœur.",
      "Quand il a fini, il remet son bonnet. « Voilà. Le prince écoutait, lui aussi. Ça n'a rien changé, mais il écoutait. » Les barques s'écartent pour vous laisser passer.",
    ],
    choices: [{ back: ROUTE }] },

  E_brouillard: { title: "Le brouillard",
    text: [
      "Le brouillard tombe d'un coup, comme un drap qu'on jette. En vingt coups de rame, tu ne vois plus la proue. Les rameurs lèvent les avirons et attendent, immobiles, en écoutant. On entend l'eau, et quelque part, très près, une autre barque qui avance sans lumière.",
    ],
    choices: [
      { label: "Ne pas bouger, et laisser passer", test: { dom: "discretion", label: "Discrétion" },
        win: { fx: { ep: ["perso", 300] }, to: "E_brouillard_passe" }, lose: { to: "E_brouillard_choc" } },
      { label: "Héler l'autre barque", to: "E_brouillard_hele" },
    ] },
  E_brouillard_passe: { title: "Une ombre",
    text: [
      "L'autre barque passe à trois brasses, longue et basse, chargée de sacs. Personne n'y parle. Un homme, à la poupe, fume une pipe éteinte. Il ne vous voit pas, ou il fait semblant. Le brouillard le reprend.",
      "Le batelier attend encore un long moment avant de reprendre la rame. « Des sacs qui voyagent sans lanterne, dit-il, c'est des sacs qui n'ont pas payé. » Il n'en dit pas plus.",
    ],
    choices: [{ back: ROUTE }] },
  E_brouillard_hele: { title: "Qui va là",
    text: [
      "« Qui va là ? » La réponse met longtemps à venir. « Personne », dit une voix, et la barque accélère, et le bruit des rames s'éloigne vers le sud, vers les salines, beaucoup trop vite pour une barque de pêcheur.",
    ],
    choices: [{ back: ROUTE }] },
  E_brouillard_choc: { title: "La collision",
    combat: { title: "Les contrebandiers", enemies: [{ id: "contrebandier", n: 2 }], terrain: "nature", spare: true,
      win: { fx: { gold: 18, ep: ["perso", 600] }, to: "E_brouillard_fouille" }, lose: { fx: { pv: -2 }, to: "E_brouillard_fuite" },
      flee: { label: "Faire force de rames dans le brouillard", dom: "nature", diff: 0, to: "E_brouillard_fuite" } },
    text: [
      "Un raclement, un juron, et la proue de l'autre barque heurte la vôtre par le travers. Des visages surgissent du brouillard, des gaffes, un couteau. Ils ne savent pas qui vous êtes. Ils savent que vous les avez vus.",
    ] },
  E_brouillard_fouille: { title: "Les sacs",
    text: [
      "Les contrebandiers sautent à l'eau et disparaissent dans le brouillard en nageant. Leur barque reste là, à la dérive. Dans les sacs, du sel blanc, du beau, sans marque de la Hanse ni sceau du port. Dans une bourse cousue sous le banc, quelques besants.",
      "Tu laisses le sel. Tu prends la bourse. Le batelier hoche la tête, comme si tu venais de passer un examen.",
    ],
    choices: [{ back: ROUTE }] },
  E_brouillard_fuite: { title: "Les rames",
    text: [
      "Tes rameurs se jettent sur les avirons. On se cogne à un pieu, à un banc de vase, à un autre pieu, et puis plus rien : le silence, et le brouillard, et le cœur qui bat. Personne ne vous a suivis.",
    ],
    choices: [{ back: ROUTE }] },

  E_noye: { title: "Le noyé",
    text: [
      "Quelque chose flotte contre un pieu du chenal, retenu par un pan de vêtement. Le batelier détourne la barque, puis la ramène, parce que tu le lui demandes.",
      "C'est un homme, sur le ventre, depuis deux ou trois jours. Un débardeur, à ses mains. Il a une corde nouée au poignet, et l'autre bout de la corde n'est attaché à rien.",
    ],
    choices: [
      { label: "Le faire hisser dans la barque, pour le rendre aux Canaux", fx: { fac: { rames: 5 }, ep: ["perso", 300] }, to: "E_noye_rendu" },
      { label: "L'examiner, sans le toucher", test: { dom: "savoir", label: "Savoir" },
        win: { fx: { ep: ["perso", 500] }, to: "E_noye_examen" }, lose: { to: "E_noye_rien" } },
      { label: "Le laisser à la lagune", back: ROUTE },
    ] },
  E_noye_rendu: { title: "Le passager",
    text: [
      "On l'enveloppe dans une voile. Le batelier dit une prière, très vite, en dialecte. Il fera le reste du chemin sous la voile, au fond de la barque, et vous le laisserez au premier ponton des Canaux, où quelqu'un saura son nom.",
      "Quelqu'un le sait, en effet. Le soir, on te dit que c'était un homme de la distribution de pain, et qu'il avait parlé trop fort, au marché, de grain qui dormait quelque part.",
    ],
    choices: [{ back: ROUTE }] },
  E_noye_examen: { title: "Ce que dit un corps",
    text: [
      "Il n'est pas tombé à l'eau. La corde a laissé, autour du poignet, une marque large et rouge, et il en a une autre, plus fine, autour du cou. On l'a attaché à quelque chose de lourd, et quelque chose de lourd a lâché.",
      "Dans sa poche, une poignée de grains de blé, gonflés d'eau. Pas de la farine. Du grain.",
    ],
    choices: [{ back: ROUTE }] },
  E_noye_rien: { title: "La lagune",
    text: [
      "Tu regardes longtemps, et tu ne vois qu'un mort. La lagune en rend de temps en temps ; elle en garde beaucoup plus. Le batelier repousse le corps de sa gaffe, doucement, comme on écarte une branche.",
    ],
    choices: [{ back: ROUTE }] },

  E_douane: { title: "Les gabelous",
    text: [
      "Une barque de la Hanse vous rattrape, six rameurs en livrée blanche et un gabelou à la proue, qui tient un registre contre sa poitrine comme un bréviaire. « Contrôle du sel ! Vous allez aux salines ? Pour quel motif ? »",
      "Il n'a pas vu le lion ailé. Ou il l'a vu, et on lui a dit de ne pas le voir.",
    ],
    choices: [
      { label: "Montrer le Sceau", hide: { not: { item: "sceau" } }, fx: { ep: ["perso", 200] }, to: "E_douane_sceau" },
      { label: "Répondre que tu vas voir les salines, comme tout le monde a le droit de le faire", test: { dom: "social", label: "Social", help: [{ fac: "sel", min: 20, v: 15 }] },
        win: { to: "E_douane_passe" }, lose: { fx: { gold: -6 }, to: "E_douane_taxe" } },
    ] },
  E_douane_sceau: { title: "Le lion ailé",
    text: [
      "Le gabelou voit le Sceau, pâlit, se découvre. Il bafouille des excuses, des ordres, le zèle, la saison. Sa barque s'écarte si vite qu'un rameur perd son aviron.",
      "Tu remarques qu'il ne note rien dans son registre. Tu remarques aussi qu'au lieu de reprendre sa ronde, il file droit vers le sud, vers les salines, à toute vitesse. Quelqu'un, là-bas, saura que tu arrives avant que tu sois arrivé.",
    ],
    choices: [{ back: ROUTE }] },
  E_douane_passe: { title: "Le droit de passage",
    text: [
      "Le gabelou te regarde, regarde ses rameurs, regarde le chenal vide. « Le droit, dit-il. Bien sûr. Le droit. » Il fait un geste. La barque blanche s'écarte, sans hâte, pour bien montrer qu'elle le fait parce qu'elle le veut.",
    ],
    choices: [{ back: ROUTE }] },
  E_douane_taxe: { title: "La taxe",
    text: [
      "« Taxe de passage, dit le gabelou. Six deniers. » Il n'y a pas de taxe de passage sur le chenal du sud. Il le sait. Tu le sais. Ses six rameurs le savent aussi, et ils sont six.",
      "Tu paies. Il te fait un reçu, d'une belle écriture, au nom de la Hanse du Sel. Tu le gardes. Il pourra servir.",
    ],
    choices: [{ back: ROUTE }] },

  // ------------------------------------------------------------------ the mainland
  E_refugies: { title: "Ceux qui descendent",
    text: [
      "Sur le chemin de halage, une file de charrettes descend vers la lagune, à contresens. Des familles entières, avec des lits, des poules, une horloge de parquet ficelée debout comme un passager. Elles viennent des villages de la frontière.",
      "« Les tentes noires, te dit une femme sans s'arrêter. Ils réquisitionnent. Le foin, les bêtes, les garçons. On va chez ma sœur, à Sarvelle. Il paraît qu'on n'y meurt pas encore de faim. »",
    ],
    choices: [
      { label: "Leur donner de quoi manger", if: { food: { min: 1 } }, why: "Tu n'as rien à leur donner.", fx: { food: -1, ep: ["perso", 300] }, to: "E_refugies_pain" },
      { label: "Leur demander ce qu'ils ont vu, exactement", test: { dom: "social", label: "Social" },
        win: { fx: { ep: ["perso", 500] }, to: "E_refugies_vu" }, lose: { to: "E_refugies_muets" } },
      { label: "Les laisser passer", back: ROUTE },
    ] },
  E_refugies_pain: { title: "Le pain",
    text: [
      "La femme prend ce que tu lui tends sans un mot et le partage entre quatre enfants, en parts exactement égales, avec un couteau qu'elle sort de son corsage. Elle ne garde rien pour elle.",
      "« Vous êtes de la ville, dit-elle. Dites-leur qu'on arrive. Qu'ils ne ferment pas les portes. »",
    ],
    choices: [{ back: ROUTE }] },
  E_refugies_vu: { title: "Ce qu'ils ont vu",
    text: [
      "Un homme, finalement, s'arrête. Il était charron. Il a ferré des chevaux pour les tentes noires, la semaine dernière, à la forteresse. « Pas des chevaux de soldats, dit-il. Des chevaux de bât. Beaucoup. Et des barques, des barques plates, qu'ils font descendre de l'amont sur des chariots. Pour quoi faire, des barques, sur une route ? »",
      "Il repart avant que tu aies trouvé une réponse.",
    ],
    choices: [{ back: ROUTE }] },
  E_refugies_muets: { title: "Le silence",
    text: [
      "Personne ne s'arrête. Les gens de la frontière ont appris, ces dernières semaines, qu'on ne répond pas aux questions des inconnus bien habillés. Ils te regardent passer comme on regarde la pluie.",
    ],
    choices: [{ back: ROUTE }] },

  E_patrouille: { title: "La patrouille",
    text: [
      "Quatre cavaliers sur la route, en manteau noir, sans blason. Ils vous barrent le passage au trot, sans hâte, et le premier lève la main. « Où allez-vous ? Qui êtes-vous ? »",
      "Ils ne sont pas en Thérance. Ils sont sur la terre de Sarvelle, à deux lieues de la frontière. Ils ont l'air de ne pas le savoir, ou de s'en moquer.",
    ],
    choices: [
      { label: "« Le Garde du Sceau de Sarvelle, sur la terre de Sarvelle. Et vous ? »", test: { dom: "social", diff: -10, label: "Social", help: [{ item: "sceau", v: 10 }] },
        win: { fx: { ep: ["perso", 500] }, to: "E_patrouille_recule" }, lose: { to: "E_patrouille_combat" } },
      { label: "Te faire passer pour un marchand de sel", test: { dom: "discretion", label: "Discrétion" },
        win: { fx: { gold: -4, ep: ["perso", 300] }, to: "E_patrouille_marchand" }, lose: { to: "E_patrouille_combat" } },
    ] },
  E_patrouille_recule: { title: "La frontière",
    text: [
      "Le cavalier te regarde un long moment. Puis il tourne bride, sans un mot, et ses trois hommes le suivent. Au bout de cent pas, il se retourne sur sa selle et te salue, deux doigts à la tempe, comme on salue un adversaire qu'on reverra.",
    ],
    choices: [{ back: ROUTE }] },
  E_patrouille_marchand: { title: "Le péage",
    text: [
      "On te croit, ou on fait semblant. On te prend quatre deniers de *droit de route*, au nom d'un duc dont on ne dit pas le nom, et on te laisse passer en riant de ton accent de la lagune.",
    ],
    choices: [{ back: ROUTE }] },
  E_patrouille_combat: { title: "Les manteaux noirs",
    combat: { title: "La patrouille", enemies: [{ id: "mercenaire", n: 1 }, { id: "sbire", n: 2 }], terrain: "nature", spare: true,
      win: { fx: { ep: ["perso", 800] }, to: "E_patrouille_apres" }, lose: { fx: { pv: -2, gold: -10 }, to: "E_patrouille_depouille" },
      flee: { label: "Couper à travers les roseaux du fleuve", dom: "nature", diff: -10, to: "E_patrouille_roseaux" } },
    text: [
      "Le cavalier sourit, et tire l'épée. Les autres mettent pied à terre, à l'aise, comme des gens qui font ça souvent.",
    ] },
  E_patrouille_apres: { title: "Le chemin libre",
    text: [
      "Les survivants remontent en selle et partent au galop vers l'est. Sur le chemin, un manteau noir, et dans la poche du manteau, un billet de solde au nom de la forteresse de Castel-Brume, signé d'un capitaine. Ils ne se cachent même plus.",
    ],
    choices: [{ back: ROUTE }] },
  E_patrouille_depouille: { title: "Dans le fossé",
    text: [
      "Tu te réveilles dans le fossé, la bouche pleine de terre, sans ta bourse. Ils ne t'ont pas tué. Ils ne se sont pas donné cette peine.",
    ],
    choices: [{ label: "Te relever et repartir", back: ROUTE }] },
  E_patrouille_roseaux: { title: "Les roseaux",
    text: [
      "Tu plonges dans les roseaux, dans l'eau jusqu'à la taille, et tu avances courbé. Les chevaux ne te suivent pas dans la vase. On t'appelle, on rit, puis on se lasse. Tu ressors une heure plus tard, trempé, à une demi-lieue en amont.",
    ],
    choices: [{ back: ROUTE }] },

  E_bac: { title: "Le bac",
    text: [
      "Pour passer sur la rive droite, il faut prendre le bac : une plate-forme de planches, tirée sur un câble par un vieux passeur et son âne. Le passeur ne se presse pas. Il regarde ta bourse avant de regarder ton visage.",
      "« Deux deniers le passage, dit-il. Dix, si vous voulez que je ne me souvienne pas de vous quand les manteaux noirs passeront me demander qui j'ai fait traverser. »",
    ],
    choices: [
      { label: "Payer dix deniers", if: { gold: { min: 10 } }, why: "Tu n'as pas dix deniers.", fx: { gold: -10 }, to: "E_bac_oubli" },
      { label: "Payer deux deniers", fx: { gold: -2 }, to: "E_bac_passe" },
      { label: "Lui demander ce que les manteaux noirs lui demandent d'habitude", test: { dom: "social", label: "Social" },
        win: { fx: { gold: -2, ep: ["perso", 400] }, to: "E_bac_bavard" }, lose: { fx: { gold: -2 }, to: "E_bac_passe" } },
    ] },
  E_bac_oubli: { title: "La mémoire du passeur",
    text: [
      "Le passeur empoche les pièces, et te regarde enfin, longuement, comme pour s'imprimer ton visage. « Voilà, dit-il. Maintenant, je vous ai oublié. » Il tire sur le câble. L'âne avance. Le fleuve passe sous les planches, jaune et lent.",
    ],
    choices: [{ back: ROUTE }] },
  E_bac_passe: { title: "La traversée",
    text: [
      "Le bac traverse lentement, en grinçant. Au milieu du fleuve, le passeur se met à chanter une chanson de Thérance, une chanson de moisson, très douce. Il s'arrête net quand il voit que tu écoutes.",
    ],
    choices: [{ back: ROUTE }] },
  E_bac_bavard: { title: "Ce qu'on demande",
    text: [
      "« Ils demandent combien de gens descendent vers la lagune, dit le passeur. Combien en remontent. Combien de barques ont les pêcheurs de Torre. Si l'eau est profonde au gué des Saules, en septembre. » Il crache dans le fleuve. « Moi, je leur dis la vérité. Que je ne sais pas nager. »",
    ],
    choices: [{ back: ROUTE }] },
};
