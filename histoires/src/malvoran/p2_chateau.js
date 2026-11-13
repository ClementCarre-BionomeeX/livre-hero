// Prologue, lot P2: the trolls' castle on the crest (gates, kennel, kitchens and Aglaé, treasure room, dormitories,
// fallen tower, Grauk's throne by fight, trick or word), the cellars, the split stone, Pip, the Voice, the shard,
// the mud guardian, the tunnel to the far slope, the walk back over the crest and the interlude to act I.
var PASS = {};
function add(o) { Object.keys(o).forEach(function (k) { if (PASS[k]) throw new Error("p2_chateau : passage en double " + k); PASS[k] = o[k]; }); }
// Grauk is passed, whatever the way (fight, trick, word): the main quest of the castle is done.
var ROI_PASSE = { quest: "P_roi" };

// ------------------------------------------------------------------ outside the walls
add({
  PT_abords: { act: "P", title: "Sous le rempart", place: "chateau", hub: true, routes: true, backName: "le pied du rempart",
    text: [
      { first: true, text: "Le sentier finit sur un replat d'herbe rase, tondue par le vent, et le château est là, posé sur l'arête comme une dent cassée. Les murs sont de la vieille pierre grise de la crête, mais là où ils ont crevé, les trolls ont bouché les trous avec ce qu'ils avaient : des troncs de sapin entiers, encore couverts d'écorce, calés de travers et liés avec des chaînes de charrette. Ça tient. Ça ne ressemble à rien, mais ça tient." },
      { first: true, text: "Une fumée grasse monte d'une cheminée, du côté sud. Sinon, rien ne bouge. Pas une sentinelle sur le rempart, pas un troll à pisser contre le mur, pas un os jeté par-dessus. Des trolls, on en a toujours eu sur la crête, et des trolls, ça se voit : ça braille, ça casse, ça descend voler. Ceux-là se taisent derrière leurs troncs comme des gens qui ont fermé leurs volets." },
      { first: true, text: "Tu fais le tour du regard. La grande porte, d'abord, en face de toi : deux battants de chêne rapiécés de planches neuves, et devant, assis sur une borne, un troll qui ne dort pas. Au nord, collé contre le mur, un appentis de rondins d'où monte une odeur de chien et de paille sale ; des grognements, des chaînes. Et au sud, sous la fumée, la vieille cheminée des cuisines s'est effondrée vers l'extérieur et a laissé dans la muraille une brèche haute et étroite, où l'on voit le conduit noir grimper à l'intérieur." },
      { again: true, before: "P:pierre", text: "Le château se tait derrière ses troncs. La fumée des cuisines monte droit quand le vent tombe, et se couche sur la crête quand il reprend." },
      { when: "night", before: "P:pierre", text: "La nuit, c'est différent. Des lueurs passent derrière les meurtrières, des voix grosses comme des tonneaux roulent dans la cour, et de temps en temps tout s'arrête d'un coup, toutes les voix ensemble, comme si quelqu'un avait levé la main pour faire silence et écouter quelque chose en dessous." },
      { again: true, after: "P:pierre", text: "Le château n'a pas changé, et pourtant il n'est plus le même. Plus rien ne vibre sous tes semelles. Les trolls sont sortis sur le rempart, pour la première fois depuis longtemps sans doute, et ils regardent la vallée en clignant des yeux comme des convalescents qu'on a assis au soleil." },
      { after: "P:pierre", with: "pip", text: "Pip s'est réfugié dans ton col. Il regarde les murs d'où vous êtes sortis par en dessous, et il ne dit rien pendant un long moment. Puis : « C'était grand, dedans. Ça a l'air petit, d'ici. »" },
      { after: "aglae=ramenee", text: "Aglaé attend près de ta halte, assise sur son baluchon, les mains sur les genoux. Elle a vu passer deux saisons d'ici, à travers une meurtrière. Elle peut bien attendre encore un peu que tu redescendes avec elle." },
      { after: "poivre:libre", before: "P:pierre", text: "Poivre est couché près de ton sac, le museau sur les pattes, la corde lâche. Il lève une oreille chaque fois qu'un chien-loup aboie dans le chenil, puis la rabat." },
    ],
    choices: [
      { label: "Observer le château depuis le rocher, avant d'entrer", hide: { seen: "PT_guet" }, to: "PT_guet" },
      { label: "Aller à la grande porte, où le troll monte la garde", hide: { seen: "PT_cour" }, to: "PT_porte" },
      { label: "Longer le mur jusqu'au chenil, au nord", hide: { any: [{ seen: "PT_cour" }, { seen: "PT_chenil" }] }, to: "PT_chenil_dehors" },
      { label: "Te glisser vers la brèche de la cheminée, au sud", hide: { seen: "PT_cour" }, to: "PT_cheminee" },
      { label: "Passer dans la cour du château", hide: { not: { seen: "PT_cour" } }, to: "PT_cour" },
      { label: "Faire halte sous le rempart, à l'abri du vent", to: "PT_camp" },
      { label: "Aller au-devant du roi des trolls, qui t'attend sur le chemin de ronde", if: { all: [{ has: "P:pierre" }, { has: "grauk:vivant" }] }, hide: { any: [{ not: { has: "P:pierre" } }, { not: { has: "grauk:vivant" } }, { seen: "PT_grauk_adieu" }] }, to: "PT_grauk_adieu" },
      { label: "Regarder les trolls sans roi quitter le château", hide: { any: [{ not: { has: "P:pierre" } }, { not: { has: "grauk:mort" } }, { seen: "PT_trolls_sans_roi" }] }, to: "PT_trolls_sans_roi" },
      { label: "Laisser derrière toi la crête et le château", big: true, exit: true, hide: { not: { has: "P:pierre" } }, to: "PT_entracte" },
    ] },

  PT_guet: { act: "P", title: "Le rocher", place: "chateau",
    fx: { ep: ["perso", 200] },
    text: [
      "Un bloc de granit gros comme une grange domine le replat, à cinquante pas du mur. Tu y grimpes par la face nord, là où la mousse donne prise, et tu t'allonges sur le sommet, à plat ventre, le menton sur les mains. D'ici, on voit par-dessus le rempart.",
      "La cour est une fosse de boue piétinée, encombrée de tout ce que les trolls ont rapporté de la vallée pendant des années : une roue de moulin, des tonneaux, une charrette sans essieu, une cloche de chèvre grande comme un seau. Au fond, le corps de logis, avec ses fenêtres bouchées de paille. À gauche, une tour s'est effondrée sur elle-même et n'est plus qu'un chicot de pierre ouvert au ciel. À droite, la fumée des cuisines.",
      "Ce qui te frappe, c'est la façon dont les trolls se tiennent. Les trois ou quatre que tu vois traverser la cour marchent au bord, contre les murs, jamais au milieu. L'un d'eux porte un seau d'eau ; arrivé au centre de la cour, à l'endroit où une grande dalle ronde ferme l'ancien puits, il fait un détour de dix pas pour ne pas passer dessus.",
      { when: "night", text: "Il fait nuit, et le corps de logis est éclairé de l'intérieur par un grand feu. Tu entends, par les fenêtres crevées, une seule voix qui parle, grave, lente, et les autres qui se taisent pour l'écouter. Le roi, sans doute." },
      { when: "day", text: "Il fait jour, et la plupart des trolls dorment : on entend leurs ronflements jusqu'ici, un bruit de scie dans du bois mouillé. Mais pas tous. Derrière une fenêtre du corps de logis, une silhouette énorme est assise, immobile, et ne dort pas." },
    ],
    choices: [{ back: "PT_abords" }] },

  PT_camp: { act: "P", title: "La halte sous le rempart", place: "chateau", takes: "night",
    fxEvery: { rest: true, pv: "max" },
    text: [
      "Il y a, au pied du mur, un creux entre deux contreforts où le vent ne vient pas. Quelqu'un y a déjà fait du feu : une ronde de pierres noircies, des os de mouton rongés, très vieux. Tu ramasses du bois mort sous les pins rabougris de l'arête et tu allumes un feu petit, de ceux qu'on ne voit pas de loin.",
      { before: "P:pierre", text: "La nuit, derrière le mur, les trolls parlent fort, puis se taisent tous ensemble, puis reprennent. Plusieurs fois, tu crois sentir sous ton dos, à travers la pierre et la terre, une sorte de bourdonnement, très bas, comme celui d'une ruche enfouie. Tu poses ta main à plat sur le sol. Ça ne s'arrête pas." },
      { after: "P:pierre", text: "La nuit est calme. Pour la première fois, la crête est simplement une crête : du vent, des étoiles, le cri d'une chouette sur l'autre versant. Rien ne bourdonne sous ton dos." },
      { with: "pip", text: "Pip s'est installé dans le bout de ta botte retournée, près du feu, comme dans une niche. Il regarde les braises longtemps. « Elles sont comme moi, dit-il, mais elles ne parlent pas. » Puis il s'endort, ou fait ce qu'il fait à la place, et sa lumière baisse jusqu'à n'être plus qu'une lueur de ver luisant." },
      { after: "poivre:libre", before: "P:pierre", text: "Poivre dort contre ta jambe, en tressaillant. De temps en temps il gémit, les pattes agitées, et tu poses la main sur son flanc jusqu'à ce qu'il se calme." },
      "Au matin, tu as les os raides et la tête claire.",
    ],
    choices: [{ back: "PT_abords" }] },
});

// ------------------------------------------------------------------ the great gate and Ragne
add({
  PT_porte: { act: "P", title: "La grande porte", place: "chateau",
    fx: { meet: "pt_ragne" },
    text: [
      "Le troll est assis sur une borne de pierre, à côté des battants, une massue posée en travers des genoux. C'est une massue faite d'une souche de chêne avec ses racines, polie par l'usage. Le troll lui-même est gris, verruqueux, large comme une porte de grange, avec une barbe de lichen et de petits yeux jaunes, très enfoncés, qui te regardent arriver depuis le bas du sentier.",
      "Il ne se lève pas. Quand tu n'es plus qu'à dix pas, il soulève la massue d'une main, la laisse retomber sur le sol devant lui, et la terre te remonte dans les talons.",
      "« Ragne garde porte, dit-il. Grauk dit : pas d'homme. Pas d'homme qui entre. Pas de troll qui sort. » Il penche la tête. Il a l'air moins méchant que fatigué. « Toi, homme. Toi, partir. »",
    ],
    choices: [
      { label: "Lui parler, calmement, comme on parle à un voisin", test: { dom: "social", diff: 0, label: "Convaincre Ragne", help: [{ if: { seen: "PT_guet" }, v: 5 }] },
        win: { fx: { ep: ["perso", 300] }, to: "PT_porte_parle" }, lose: { to: "PT_porte_refus" } },
      { label: "Lui offrir quelques sous pour le passage", if: { gold: { min: 5 } }, why: "Il te faudrait au moins cinq sous.", fx: { gold: -5 }, to: "PT_porte_sous" },
      { label: "Dégainer, et lui montrer que tu passeras quand même", to: "PT_porte_combat" },
      { label: "Faire demi-tour et chercher une autre entrée", back: "PT_abords" },
    ] },

  PT_porte_parle: { act: "P", title: "Le marché de Ragne", place: "chateau",
    fx: { flag: "PT:hote", regard: { pt_ragne: "curieux" } },
    text: [
      "Tu ne parles pas de passer. Tu parles du vent, qui est mauvais sur la crête cet automne, du froid qui vient tôt, des moutons de la bergère qui sont gras cette année et dont pas un n'a disparu. Ragne écoute en remuant les lèvres, comme s'il répétait les mots pour lui. À « pas un n'a disparu », il baisse les yeux.",
      "« Trolls plus descendre, dit-il. Grauk dit : rester. Tous rester. Garder. » Il se gratte la barbe. « Garder quoi, Ragne pas savoir. Grauk pas dire. Grauk plus dormir. »",
      "Tu lui dis que tu es venu{e} pour ça, justement : pour ce que Grauk ne dit pas. Ragne te regarde un long moment. Puis il se lève, et c'est comme un mur qui se lève, et il pousse un battant de l'épaule. « Toi entrer. Toi voir Grauk. Si Grauk manger toi, pas faute à Ragne. »",
    ],
    choices: [{ label: "Entrer dans la cour, sous l'œil de Ragne", to: "PT_cour" }] },

  PT_porte_sous: { act: "P", title: "Cinq sous", place: "chateau",
    fx: { flag: "PT:hote", regard: { pt_ragne: "cordial" } },
    text: [
      "Tu poses cinq sous sur la borne, à côté de sa cuisse, un par un. Ragne les regarde. Il en prend un entre deux doigts énormes, le porte à sa bouche, le mord, et le regarde encore, avec la marque de ses dents dedans.",
      "« Joli », dit-il. Il les ramasse tous dans le creux de sa main, où ils ont l'air de miettes, et les fourre dans une bourse de cuir pendue à son cou, qui tinte déjà. Puis il se lève et pousse un battant de l'épaule.",
      "« Toi pas dire à Grauk. Ragne pas dire à Grauk. Toi entrer. » Il a l'air soulagé, comme si tu lui avais rendu service.",
    ],
    choices: [{ label: "Entrer dans la cour", to: "PT_cour" }] },

  PT_porte_refus: { act: "P", title: "La porte fermée", place: "chateau",
    fx: { regard: { pt_ragne: "mefiant" } },
    text: [
      "Tu parles trop vite, ou trop bien. Ragne plisse les yeux à chaque phrase, et à la troisième il se lève tout à fait, et la massue avec lui. « Homme parler comme renard, dit-il. Grauk dit : homme qui parle bien, homme qui ment. »",
      "Il recule jusqu'aux battants, s'adosse contre eux de tout son poids, et ne te quitte plus des yeux. Par là, maintenant, tu ne passeras qu'en le passant lui.",
    ],
    choices: [
      { label: "Le passer, alors, de force", to: "PT_porte_combat" },
      { label: "Chercher une autre entrée", back: "PT_abords" },
    ] },

  PT_porte_combat: { act: "P", title: "Ragne", place: "chateau",
    combat: { title: "Ragne, à la grande porte", enemies: ["pt_troll"], terrain: "bati", spare: true,
      win: { fx: { flag: "PT:porte_forcee", ep: ["perso", 500] }, to: "PT_porte_force" },
      lose: { to: "PT_porte_jete" },
      calm: { fx: { flag: "PT:porte_forcee", ep: ["perso", 500] }, to: "PT_porte_force" },
      flee: { label: "Reculer jusqu'au bas du replat", dom: "discretion", diff: 0, to: "PT_abords" } },
    text: [
      "Ragne se lève avec un soupir, comme un homme qu'on dérange à l'heure de la soupe, et la souche de chêne décrit dans l'air un arc lent, énorme, qui siffle à peine. Lent, oui. Mais il couvre toute la largeur de la porte.",
    ] },

  PT_porte_force: { act: "P", title: "La porte forcée", place: "chateau",
    fx: { regard: { pt_ragne: "craintif" } },
    text: [
      { outcome: "calm", text: "Ragne s'est assis par terre, la massue entre les jambes, et il a l'air d'avoir oublié pourquoi il se battait. Il te regarde avec une sorte de reconnaissance stupide. « Ragne fatigué, dit-il. Ragne pas dormir depuis longtemps. »" },
      { outcome: "win", text: "Ragne est à genoux, une main à plat sur le sol, l'autre sur sa tête, et il souffle comme un soufflet de forge. Il n'essaie pas de se relever. Les trolls ne meurent pas facilement, et ils ne s'entêtent pas non plus quand ils ont perdu." },
      "« Toi fort, dit-il. Toi entrer. Grauk voir toi. Grauk décider. » Il s'écarte de la porte en rampant à moitié, et le battant, que plus rien ne retient, s'ouvre tout seul en grinçant sur la cour.",
      "Personne n'est venu. Personne n'a crié. Dans la cour, deux trolls ont tourné la tête vers le bruit, puis l'ont détournée, comme si la bagarre à la porte ne les concernait pas. Ils ont d'autres soucis.",
    ],
    choices: [{ label: "Entrer dans la cour", to: "PT_cour" }] },

  PT_porte_jete: { act: "P", title: "Au bas du replat", place: "chateau",
    fx: { pv: 4 },
    text: [
      "Tu ne vois pas venir le coup. Tu sens seulement le monde basculer, et puis l'herbe, et puis la pente, et tu roules, et tu t'arrêtes contre une touffe de genêts, vingt pas plus bas, le souffle coupé.",
      "Quand tu peux de nouveau lever la tête, Ragne s'est rassis sur sa borne. Il ne t'a pas poursuivi{e}. Il te regarde de loin, la massue en travers des genoux, avec une sorte de regret. « Ragne dit : partir », crie-t-il, sans colère.",
      "Tu te relèves en boitant. Rien de cassé. La porte, par là, est fermée. Le château a d'autres entrées.",
    ],
    choices: [{ back: "PT_abords" }] },
});

// ------------------------------------------------------------------ the chimney breach
add({
  PT_cheminee: { act: "P", title: "La brèche de la cheminée", place: "chateau",
    text: [
      "La vieille cheminée des cuisines était adossée au mur sud. Un hiver, le gel a eu raison du mortier, et tout le pan de mur est tombé vers l'extérieur, dans la pente, en entraînant la hotte. Il reste une brèche haute de deux hommes et large d'un seul, et dedans, le conduit noir, qui monte, puis redescend à l'intérieur vers le foyer qu'on ne voit pas.",
      "De la fumée en sort, et une odeur de lard, d'oignon et de pain trop cuit. Tu entends une marmite qui bout. Et une voix, une voix de femme, humaine, qui chante à mi-voix une chanson de veillée de la vallée, en se trompant de couplet.",
      "Les pierres de la brèche sont couvertes de suie grasse. Pour passer, il faudra grimper dans le conduit, ramper en haut du coude, et se laisser glisser de l'autre côté sans tomber dans la marmite.",
    ],
    choices: [
      { label: "Grimper dans le conduit", test: { dom: "nature", diff: 0, label: "Escalade dans la suie", help: [{ if: { item: "corde" }, v: 10 }] },
        win: { fx: { ep: ["perso", 300] }, to: "PT_cheminee_descente" }, lose: { fx: { pv: -2 }, to: "PT_cheminee_chute" } },
      { label: "Renoncer, et chercher une autre entrée", back: "PT_abords" },
    ] },

  PT_cheminee_descente: { act: "P", title: "Dans le conduit", place: "chateau",
    fx: { flag: "PT:cheminee" },
    text: [
      "Le conduit est étroit, tiède, et tu y montes les coudes écartés, les genoux contre la pierre, en crachant la suie. En haut du coude, il y a un rebord où des générations de choucas ont fait leur nid ; tu t'y reposes un instant, couché{e} sur les brindilles, et tu regardes en bas.",
      "En bas, c'est la cuisine. Un foyer large comme une chambre, une marmite pendue à une crémaillère, et à côté, une femme, petite, en tablier, les manches roulées, qui remue avec une louche de bois plus longue que son bras. Un jeune troll tourne une broche où grille un mouton entier.",
      "Tu te laisses glisser le long du conduit, doucement, les pieds en avant, et tu te poses dans la cendre froide, sur le côté du foyer, sans un bruit. La femme se retourne quand même. Elle a dû sentir l'air changer.",
    ],
    choices: [{ label: "Sortir du foyer", to: "PT_cuisines" }] },

  PT_cheminee_chute: { act: "P", title: "La chute dans la cendre", place: "chateau",
    fx: { flag: "PT:cheminee" },
    text: [
      "Au coude du conduit, la suie cède sous ta main comme de la neige pourrie. Tu glisses, tu te rattrapes à rien, et tu dégringoles tout le conduit dans un fracas de pierres et de nids de choucas, pour atterrir assis{e} dans la cendre du foyer, dans un nuage noir.",
      "Quand tu peux de nouveau voir, il y a une femme devant toi, petite, en tablier, qui te tient sous la menace d'une louche de bois comme on tient un chat sous un balai. Derrière elle, un jeune troll s'est caché derrière la broche, et ne cache rien du tout.",
      "« Si c'est pour le mouton, dit la femme, il n'est pas cuit. »",
    ],
    choices: [{ label: "Te relever et t'épousseter", to: "PT_cuisines" }] },
});

// ------------------------------------------------------------------ the kennel and Poivre
add({
  PT_chenil_dehors: { act: "P", title: "Le chenil", place: "chateau",
    text: [
      "Le chenil est un appentis de rondins collé contre le mur nord, couvert de lauzes à moitié glissées. Avant même que tu sois à vingt pas, les chiens t'ont senti{e}. Ça commence par un grognement, un seul, et puis c'est tout le chenil qui se jette contre les planches en aboyant, et les chaînes qui claquent.",
      "Par les fentes, tu les vois. Des chiens-loups de troll : hauts comme des veaux, gris, maigres, le poil ras sur des côtes saillantes. Il y en a quatre ou cinq, enchaînés chacun à un poteau, et deux qui ne sont pas enchaînés du tout. Les trolls ne doivent pas beaucoup les nourrir.",
      "Et dans le fond, à part, dans une cage de branches tressées, un chien qui n'aboie pas. Un chien de berger, noir et blanc, avec une tache rousse sur l'œil gauche, couché la tête sur les pattes. Il te regarde à travers les fentes et il remue la queue, une seule fois, sans y croire.",
    ],
    choices: [
      { label: "Leur parler bas, et attendre qu'ils se calment", test: { dom: "nature", diff: -10, label: "Calmer les chiens-loups", help: [{ if: { has: "maitre:ortie" }, v: 10 }] },
        win: { fx: { ep: ["perso", 300] }, to: "PT_chenil_calme" }, lose: { to: "PT_chenil_combat" } },
      { label: "Leur jeter tes provisions par-dessus la palissade", if: { food: { min: 1 } }, why: "Tu n'as rien à leur jeter.", fx: { food: -1 }, to: "PT_chenil_viande" },
      { label: "Forcer la porte du chenil et les affronter", to: "PT_chenil_combat" },
      { label: "Laisser les chiens et chercher une autre entrée", back: "PT_abords" },
    ] },

  PT_chenil_calme: { act: "P", title: "Les chiens se couchent", place: "chateau",
    fx: { flag: "PT:chiens" },
    text: [
      "Tu t'accroupis contre les planches, à leur hauteur, et tu ne fais rien. Tu ne les regardes pas dans les yeux. Tu respires lentement, et tu leur parles bas, des mots sans importance, des mots de berger. Le plus gros se jette encore deux fois contre la palissade. Puis il s'arrête, haletant, et il renifle par la fente, longuement.",
      "Un à un, ils se taisent. Pas parce qu'ils t'aiment : parce que tu ne vaux pas la peine. Ils se recouchent sur la paille sale, en gardant un œil ouvert, et le gros pousse un soupir de vieux chien.",
      "Tu soulèves le loquet de la porte extérieure, et tu entres.",
    ],
    choices: [{ label: "Entrer dans le chenil", to: "PT_chenil" }] },

  PT_chenil_viande: { act: "P", title: "Le pain et le lard", place: "chateau",
    fx: { flag: "PT:chiens" },
    text: [
      "Tu défais ton sac et tu lances par-dessus la palissade ce que tu as : un quignon, un bout de lard, un morceau de fromage de chèvre. C'est ta part de deux jours. Le chenil explose en grondements, en mâchoires qui claquent, en chaînes tendues à se rompre.",
      "Et puis c'est fini, aussi vite, et les chiens-loups se lèchent les babines en te regardant d'un autre œil. Le gros s'assoit. Un autre bâille. Tu as acheté leur silence, et tu sais combien de temps dure ce genre de marché : le temps de passer.",
    ],
    choices: [{ label: "Entrer dans le chenil", to: "PT_chenil" }] },

  PT_chenil_combat: { act: "P", title: "Les chiens-loups", place: "chateau",
    combat: { title: "Les chiens-loups du chenil", enemies: [{ id: "pt_chienloup", n: 2 }], terrain: "bati", spare: true,
      win: { fx: { flag: "PT:chiens", ep: ["perso", 500] }, to: "PT_chenil" },
      calm: { fx: { flag: "PT:chiens", ep: ["perso", 500] }, to: "PT_chenil" },
      lose: { to: "PT_chenil_mordu" },
      flee: { label: "Sauter par-dessus la palissade et t'enfuir", dom: "nature", diff: 0, to: "PT_chenil_mordu" } },
    text: [
      "Les deux chiens-loups libres jaillissent ensemble, l'un droit sur toi, l'autre de biais, par la gauche, bas, pour les jambes. Ils chassent comme des loups. Ils ont faim comme des loups. Derrière eux, les enchaînés hurlent en tirant sur leurs poteaux.",
    ] },

  PT_chenil_mordu: { act: "P", title: "Les crocs", place: "chateau",
    fx: { pv: 3 },
    text: [
      "Tu te retrouves dehors, de l'autre côté de la palissade, sans savoir tout à fait comment, le mollet en sang et la manche arrachée. Les chiens-loups se jettent encore contre les planches, puis se lassent. Ils n'ont pas le droit de sortir, et ils le savent.",
      "Tu bandes ta jambe avec un pan de ta chemise, assis{e} dans l'herbe, en serrant les dents. Dans sa cage, au fond, le chien de berger te regarde toujours. Il n'a pas aboyé une seule fois.",
    ],
    choices: [{ back: "PT_abords" }] },

  PT_chenil: { act: "P", title: "Dans le chenil", place: "chateau", backName: "le chenil",
    text: [
      { first: true, text: "Dedans, l'odeur prend à la gorge : paille pourrie, urine, os rongés, et la viande crue qui traîne dans une auge. Le jour passe entre les rondins en lames minces où danse la poussière. Les chiens-loups sont enchaînés de part et d'autre d'un couloir de terre battue, et au bout, il y a la cage tressée, et le chien de berger." },
      { first: true, text: "Une petite porte, dans le mur du château, donne sur la cour. Elle est fermée d'un simple loquet de bois. Les trolls passent par là pour nourrir leurs bêtes, quand ils y pensent." },
      { again: true, text: "Les chiens-loups lèvent la tête quand tu entres, et grondent pour la forme. La paille, l'odeur, les lames de jour entre les rondins." },
      { if: { has: "PT:chiens" }, text: "Les chiens-loups te laissent passer. Ils grondent bas, la tête basse, mais aucun ne se lève.", else: "Les chiens-loups se dressent tous ensemble quand tu entres, et le plus gros, qui n'est pas enchaîné, vient se planter au milieu du couloir, les babines retroussées sur des crocs jaunes." },
      { before: "poivre:libre", text: "Le chien de berger s'est levé dans sa cage. Il porte un collier de cuir clouté de cuivre, à l'ancienne, et sur le cuir, quelqu'un a gravé au couteau un nom : POIVRE." },
      { after: "poivre:libre", text: "La cage tressée, au fond, est vide, la porte pendante. Les chiens-loups la reniflent de temps en temps, déçus." },
    ],
    choices: [
      { label: "Calmer les chiens-loups, sans hâte", hide: { has: "PT:chiens" }, test: { dom: "nature", diff: -10, label: "Calmer les chiens-loups" },
        win: { fx: { flag: "PT:chiens", ep: ["perso", 300] }, to: "PT_chenil" }, lose: { to: "PT_chenil_combat" } },
      { label: "Leur jeter le jambon des cuisines", hide: { has: "PT:chiens" }, if: { item: "pt_jambon" }, why: "Il te faudrait de quoi les occuper.", fx: { drop: "pt_jambon" }, to: "PT_chenil_jambon" },
      { label: "Dégager le passage à coups de lame", hide: { has: "PT:chiens" }, to: "PT_chenil_combat" },
      { label: "Ouvrir la cage du chien de berger", if: { has: "PT:chiens" }, why: "Les chiens-loups ne te laisseront pas aller jusqu'au fond.", hide: { has: "poivre:libre" }, to: "PT_poivre" },
      { label: "Passer dans la cour par la petite porte", to: "PT_cour" },
      { label: "Sortir par la porte extérieure", back: "PT_abords" },
    ] },

  PT_chenil_jambon: { act: "P", title: "Le jambon", place: "chateau",
    fx: { flag: "PT:chiens", ep: ["perso", 200] },
    text: [
      "Tu lances le jambon au milieu du couloir. C'est comme jeter une pierre dans une mare : tout le chenil se rue au même endroit, les libres d'abord, les enchaînés au bout de leurs chaînes, et pendant un long moment il n'y a plus que des grondements, des os qui craquent et de la ficelle arrachée.",
      "Le plus gros a gagné. Il emporte l'os dans un coin, le reste de la meute lèche la terre battue, et personne ne fait plus attention à toi. Le couloir est libre.",
    ],
    choices: [{ label: "Aller jusqu'à la cage, au fond", to: "PT_poivre" }] },

  PT_poivre: { act: "P", title: "Poivre", place: "chateau",
    fx: { flag: "poivre:libre", ep: ["perso", 400], fac: { bornes: 5 } },
    text: [
      "La cage est faite de branches de noisetier tressées serré et liées au fil de fer. Les trolls l'ont fermée d'un nœud que tu mets un moment à comprendre, puis tu le défais, et la porte bascule. Le chien ne sort pas tout de suite. Il te renifle les mains, les poignets, les genoux, avec application, comme on lit une lettre. Puis il pose sa tête contre ta cuisse et il s'appuie de tout son poids.",
      "Il est maigre à faire peur. On voit le dessin de ses côtes sous le poil noir et blanc, et il a une patte avant qui a été mordue, mal guérie. Mais ses yeux sont clairs, et quand tu passes la main sous son collier, sur le cuir gravé, POIVRE, il remue la queue pour de bon.",
      "Les trolls ont dû le prendre sur la crête avec un mouton, et le garder parce qu'il était joli, ou pour plus tard. Un chien de berger n'a rien à faire dans un chenil de chiens-loups. Il n'a pas aboyé une fois depuis que tu es là. Il a appris, ici, à ne pas se faire remarquer.",
    ],
    choices: [
      { label: "L'emmener dehors, et l'attacher près de ta halte sous le rempart", to: "PT_poivre_dehors" },
    ] },

  PT_poivre_dehors: { act: "P", title: "Une corde et un chien", place: "chateau",
    text: [
      "Tu sors avec lui par la porte extérieure du chenil. Dehors, au grand air, il s'arrête net, la truffe levée vers la crête, vers le sud, vers la vallée, et il tremble de tout le corps. Il sait où il est. Il sait où est sa maison. Tu le tiens par le collier, parce qu'il serait capable de partir seul, sur trois pattes, avec les loups qu'il y a cet automne.",
      "Tu l'attaches avec une corde à un piquet, dans le creux du rempart, là où tu as posé ton sac, et tu lui laisses un fond d'eau dans ton écuelle. Il boit tout, et se couche, la tête tournée vers la vallée. Quelqu'un, en bas, doit l'attendre. On le ramènera.",
    ],
    choices: [{ back: "PT_abords" }] },
});

// ------------------------------------------------------------------ the courtyard (hub inside the walls)
add({
  PT_cour: { act: "P", title: "La cour du château", place: "chateau", hub: true, backName: "la cour du château",
    text: [
      { first: true, text: "La cour est plus grande qu'elle n'en avait l'air de l'extérieur, et plus sale. La boue y est profonde d'une main, mêlée de paille, d'os et de tessons, et partout s'entassent les prises de trente ans de rapines : des roues, des tonneaux, un soc de charrue, une cuve de lavoir, la moitié d'une barque. Une odeur de fumée, de suif et de bête mouillée flotte sur tout ça." },
      { first: true, text: "Au centre, une dalle ronde, épaisse, ferme l'ancien puits. La boue autour est lisse, sans une trace de pas. Les trolls qui traversent la cour la contournent tous, sans la regarder, en rasant les murs. Au fond, le corps de logis, et sa grande porte ouverte sur l'ombre d'une salle. À gauche, les cuisines qui fument. À droite, une porte basse cerclée de fer, des bâtiments longs, et le chicot de la tour effondrée." },
      { first: true, if: { has: "PT:hote" }, text: "Les trolls te regardent passer sans s'approcher. Ragne a dû le dire, ou bien ça se voit : tu es entré{e} par la porte, tu es une affaire du roi.", else: "Tu te glisses le long du mur, dans l'ombre d'un tas de fagots. Les trolls que tu croises ne te voient pas, ou font semblant. Ils ont l'air d'avoir l'esprit ailleurs, en dessous." },
      { again: true, before: "quete:P_roi", text: "La boue, les tas de rapines, la dalle ronde que personne n'approche. Les trolls rasent les murs." },
      { again: true, after: "quete:P_roi", before: "P:pierre", text: "La nouvelle a fait le tour du château : on te laisse aller où tu veux. Les trolls s'arrêtent de parler quand tu passes, et reprennent derrière toi, plus bas." },
      { again: true, after: "P:pierre", text: "La boue sèche au soleil. Quelqu'un a soulevé un coin de la dalle du puits, pour voir, et l'a laissée retomber. Les trolls traversent la cour par le milieu, maintenant, en se regardant les uns les autres, étonnés de leur propre audace." },
      { when: "night", before: "P:pierre", text: "Il fait nuit, et la cour est pleine de trolls réveillés qui ne font rien : ils sont assis le long des murs, autour de petits feux, et ils écoutent. Quand ils se taisent tous ensemble, tu écoutes aussi. Il y a, sous la terre, quelque chose comme une note tenue, très basse, que l'on sent dans les dents plus qu'on ne l'entend." },
      { when: "day", before: "P:pierre", text: "Il fait jour, et le château dort à moitié. On entend ronfler par les fenêtres des dortoirs. Seuls quelques trolls de corvée traînent des seaux ou des fagots, les yeux plissés contre la lumière." },
      { with: "pip", text: "Pip ne quitte pas ton col. Il regarde les trolls, un par un, avec une curiosité sans fond, et il te souffle des questions à l'oreille : pourquoi ils sont gris, pourquoi ils sont si grands, s'ils ont des noms." },
    ],
    choices: [
      { label: "Les cuisines, d'où monte la fumée", to: "PT_cuisines" },
      { label: "Le chenil, contre le mur nord", to: "PT_chenil" },
      { label: "La porte basse cerclée de fer", hide: { has: "PT:tresor_ouvert" }, to: "PT_tresor_porte" },
      { label: "La salle du trésor", hide: { not: { has: "PT:tresor_ouvert" } }, to: "PT_tresor" },
      { label: "Les dortoirs des trolls", to: "PT_dortoirs" },
      { label: "La tour effondrée", to: "PT_tour" },
      { label: "Monter sur le rempart", hide: { seen: "PT_rempart" }, to: "PT_rempart" },
      { label: "La dalle ronde du puits, au milieu de la cour", hide: { seen: "PT_puits_cour" }, to: "PT_puits_cour" },
      { label: "Parler à Ragne, qui rôde près de la porte", if: { seen: "PT_porte" }, hide: { any: [{ not: { seen: "PT_porte" } }, { seen: "PT_ragne" }] }, to: "PT_ragne" },
      { label: "Laisser Pip regarder les trolls de près", with: "pip", hide: { seen: "PT_pip_trolls" }, to: "PT_pip_trolls" },
      { label: "La grande salle, et le trône du roi des trolls", big: true, hide: { quest: "P_roi" }, to: "PT_trone" },
      { label: "L'escalier des caves, derrière le trône", big: true, hide: { not: { quest: "P_roi" } }, to: "PT_caves_escalier" },
      { back: "PT_abords" },
    ] },

  PT_puits_cour: { act: "P", title: "La dalle du puits", place: "chateau",
    fx: { ep: ["perso", 200] },
    text: [
      "La dalle est une meule de moulin, épaisse comme un avant-bras, qu'on a roulée jusque-là et couchée sur la margelle. Il a fallu au moins trois trolls pour la porter. Tout autour, sur la pierre de la margelle, on a gratté des marques avec quelque chose de dur : des traits, des croix, des ronds, comme des enfants dessinent pour conjurer.",
      "Tu poses la main sur la meule. Elle est tiède, alors que l'air de la crête est froid. Et sous ta paume, très loin, tu crois sentir une vibration, régulière, lente, qui n'est pas celle de ton propre sang.",
      { before: "P:pierre", text: "Un troll s'est arrêté au bord de la cour et te regarde faire, un fagot sur l'épaule, la bouche ouverte. Quand tu lèves les yeux, il secoue la tête, lentement, avec une gravité d'enfant qui voit un adulte mettre la main dans le feu.", else: "Elle est froide, maintenant. Simplement froide." },
    ],
    choices: [{ back: "PT_cour" }] },

  PT_ragne: { act: "P", title: "Ragne", place: "chateau",
    fx: { ep: ["perso", 200] },
    text: [
      "Ragne a quitté sa borne pour s'abriter du vent contre le mur, à l'intérieur. Il se gratte le dos à un angle de pierre, les yeux mi-clos. Quand il te voit approcher, il ne se lève pas.",
      { if: { has: "PT:porte_forcee" }, text: "« Toi, dit-il en se frottant la tête là où tu l'as frappé. Toi bien taper. » Ce n'est pas un reproche. Il dit ça comme on parle du temps.", else: "« Toi, dit-il. Toi encore là. Grauk pas manger toi. » Il a l'air content pour toi, sincèrement." },
      "Tu lui demandes depuis quand les trolls ne descendent plus. Il compte sur ses doigts, se trompe, recommence. « Depuis feuilles tomber. Avant, chanson petite. Après, chanson grande. Grauk dit : personne sortir. Si trolls sortir, chanson sortir avec. » Il hausse les épaules, un mouvement de montagne. « Ragne pas comprendre. Ragne garder porte. »",
      "Puis, plus bas, en regardant la dalle du puits : « La nuit, chanson dit nom de Ragne. Ragne jamais dit nom à chanson. »",
    ],
    choices: [{ back: "PT_cour" }] },

  PT_pip_trolls: { act: "P", title: "Pip et les trolls", place: "chateau", with: "pip",
    fx: { conf: { pip: 5 }, ep: ["perso", 200] },
    text: [
      "Pip sort de ton col, s'élève d'une coudée, et file avant que tu aies pu le retenir vers un groupe de trolls assis contre le mur des dortoirs. Ils se figent tous les trois. Pip tourne autour de leurs têtes, lentement, en éclairant leurs verrues, leurs barbes de lichen, leurs petits yeux jaunes écarquillés.",
      "« Tu as un nom ? » demande-t-il au plus gros. Le troll regarde la lumière, puis te regarde, puis la lumière. « Bouc, dit-il enfin. Moi, Bouc. » Pip répète « Bouc » avec un plaisir immense, comme on goûte un fruit.",
      "Il revient vers toi, ravi. Derrière lui, les trois trolls se sont mis à parler tous en même temps, à voix basse, en montrant la lumière du doigt. L'un d'eux a ôté son bonnet.",
    ],
    choices: [{ back: "PT_cour" }] },
});

// ------------------------------------------------------------------ the kitchens, Aglaé and Bourle
add({
  PT_cuisines: { act: "P", title: "Les cuisines", place: "chateau", backName: "les cuisines",
    fx: { meet: ["aglae", "pt_bourle"], questSeen: "P_aglae" },
    text: [
      { first: true, text: "Les cuisines sont la seule pièce propre du château. Le sol de dalles a été balayé, les marmites récurées au sable sont pendues par taille au-dessus d'une table longue comme une barque, et les herbes sèchent en bottes aux poutres : thym, sauge, laurier, des chapelets d'oignons. Il fait chaud. Ça sent le pain." },
      { first: true, after: "PT:cheminee", text: "La femme repose sa louche dans la marmite, sans te quitter des yeux. Elle a une cinquantaine d'années, un visage qui a dû être rond et que deux hivers ont creusé, des avant-bras de boulangère, et un regard qui a fini d'avoir peur il y a longtemps." },
      { first: true, before: "PT:cheminee", text: "Une femme est à la table, une cinquantaine d'années, un visage qui a dû être rond et que deux hivers ont creusé, des avant-bras de boulangère. Elle pétrit. Elle lève les yeux quand tu entres par la porte de la cour, et ses mains s'arrêtent dans la pâte. Un jeune troll, accroupi près de la broche, se cache derrière un sac de farine qui ne cache rien." },
      { first: true, text: "« Un homme du bas », dit-elle, et sa voix tremble à peine. « Deux hivers. Deux hivers que personne ne monte, et voilà qu'on monte. » Elle s'essuie les mains à son tablier, très lentement. « Je m'appelle Aglaé. Et lui, c'est Bourle. Il ne mord pas. Moi, ça dépend. »" },
      { again: true, text: "Aglaé est à ses fourneaux. Bourle tourne la broche, ou épluche, ou dort sur un sac de farine, le pouce dans la bouche. La chaleur, l'odeur du pain." },
      { again: true, after: "aglae=reste", text: "Aglaé a mis un tablier propre. Elle commande la cuisine comme on commande un navire, et Bourle file doux." },
      { with: "pip", text: "Aglaé voit la lumière dans ton col et pose sa louche. Elle ne crie pas. Elle se signe à l'ancienne, de la main ouverte, et elle dit à Pip, très poliment : « Bonjour. Tu as faim ? » Pip ne sait pas s'il a faim. Il le dit." },
    ],
    choices: [
      { label: "Lui demander comment elle est arrivée ici", hide: { seen: "PT_aglae_parle" }, to: "PT_aglae_parle" },
      { label: "Lui demander ce qu'elle entend la nuit", if: { seen: "PT_aglae_parle" }, why: "Elle ne te connaît pas encore assez pour ça.", hide: { seen: "PT_aglae_chant" }, to: "PT_aglae_chant" },
      { label: "Lui demander ce qu'il faut savoir de Grauk", if: { seen: "PT_aglae_parle" }, why: "Elle ne te connaît pas encore assez pour ça.", hide: { any: [{ seen: "PT_aglae_grauk" }, { quest: "P_roi" }] }, to: "PT_aglae_grauk" },
      { label: "Parler à Bourle", hide: { seen: "PT_bourle" }, to: "PT_bourle" },
      { label: "Demander de quoi amadouer les chiens-loups", hide: { any: [{ has: "PT:chiens" }, { item: "pt_jambon" }, { seen: "PT_cuisines_jambon" }] }, to: "PT_cuisines_jambon" },
      { label: "Accepter une écuelle de soupe", hide: { seen: "PT_aglae_repas" }, to: "PT_aglae_repas" },
      { label: "Présenter Pip à Aglaé", with: "pip", hide: { seen: "PT_cuisines_pip" }, to: "PT_cuisines_pip" },
      { label: "Lui parler de la lanterne éteinte de Mère Ternes", if: { seen: "PB_ternes_aglae" }, hide: { any: [{ not: { seen: "PB_ternes_aglae" } }, { seen: "PT_aglae_lanterne" }, { not: { seen: "PT_aglae_parle" } }] }, to: "PT_aglae_lanterne" },
      { label: "Goûter le pain de Bourle", hide: { any: [{ not: { has: "P:pierre" } }, { seen: "PT_bourle_pain" }] }, to: "PT_bourle_pain" },
      { label: "Lui proposer de quitter le château", big: true, if: { quest: "P_roi" }, why: "« Pas tant que Grauk est assis devant cet escalier », dit-elle.", hide: { any: [{ quest: "P_aglae" }, { not: { seen: "PT_aglae_parle" } }] }, to: "PT_aglae_choix" },
      { label: "Passer dans la cour", to: "PT_cour" },
    ] },

  PT_aglae_parle: { act: "P", title: "Deux hivers", place: "chateau",
    fx: { ep: ["perso", 300] },
    text: [
      "Elle te fait asseoir sur un tabouret, au bout de la table, et elle continue de pétrir en parlant. « J'étais cuisinière à la Lanterne, en bas, aux Trois-Bornes. Chez Mère Ternes. Trente ans que je faisais sa soupe. Une nuit de neige, il y a deux hivers, ils sont descendus comme ils descendaient tous les ans, ils ont cassé la porte de ma cuisine, ils ont pris les jambons, et ils m'ont prise avec. Sur l'épaule, comme un sac. Je les ai traités de tout ce que je savais, et je sais beaucoup de choses. »",
      "Elle rit, un peu. « Les trolls ne mangent pas les gens. Pas souvent. Ils mangent ce qu'ils trouvent, et ce qu'ils trouvaient, ils le faisaient cuire comme des sauvages : tout brûlé dehors, tout cru dedans. Grauk avait mal au ventre depuis dix ans. Il voulait une cuisinière. Il a eu une cuisinière. »",
      "Elle donne un coup de poing dans la pâte. « Le premier hiver, j'ai attendu qu'on vienne. Le deuxième, j'ai arrêté d'attendre. J'ai appris à Bourle à faire la pâte. J'ai appris à Grauk à dire merci. Il ne le dit pas bien, mais il le dit. » Elle te regarde enfin. « Personne n'est venu, en deux hivers. Et toi, tu n'es pas venu{e} pour moi. Ne dis pas le contraire, ça se voit. »",
    ],
    choices: [
      { label: "« C'est vrai. Je suis venu{e} pour ce qu'il y a sous le château. »", fx: { regard: { aglae: "cordial" } }, back: "PT_cuisines" },
      { label: "« Maintenant que je sais que tu es là, ça change les choses. »", fx: { regard: { aglae: "curieux" } }, back: "PT_cuisines" },
    ] },

  PT_aglae_chant: { act: "P", title: "Sous les cuisines", place: "chateau",
    fx: { clue: "p_aglae", ep: ["perso", 400] },
    text: [
      "Aglaé arrête de pétrir. Elle regarde le sol, les dalles qu'elle a balayées, comme si elles pouvaient l'entendre. Puis elle va fermer la porte de la cour, et elle revient s'asseoir en face de toi.",
      "« Ça a commencé à la Saint-Martin, l'an dernier. Je dors ici, contre le four, c'est le seul endroit chaud. Une nuit, j'ai entendu chanter dessous. Pas une chanson. Une voix qui monte et qui ne s'arrête pas pour respirer, parce qu'elle n'a rien pour respirer. Une voix sans bouche. »",
      "Elle se frotte les bras. « Et puis elle a dit mon nom. Aglaé. Comme ça, tout bas, gentiment. Moi, je n'avais dit mon nom à personne ici, les trolls m'appelaient la femme. Elle l'a dit avant moi. Elle a dit celui de Bourle, aussi, la nuit d'après, et il ne le savait pas encore lui-même : c'est moi qui le lui ai donné, le lendemain, sans y penser. » Elle a un rire qui n'en est pas un. « Elle dit les noms avant qu'on les donne. Voilà ce qu'il y a sous mes cuisines. »",
    ],
    choices: [{ back: "PT_cuisines" }] },

  PT_aglae_grauk: { act: "P", title: "Ce qu'il faut savoir de Grauk", place: "chateau",
    fx: { flag: "PT:conseil_aglae", ep: ["perso", 300] },
    text: [
      "« Grauk », dit Aglaé, et elle sourit malgré elle. « Il est vieux. Il est gros. Il est moins bête que tous les autres réunis, et il le sait, et ça le rend malheureux. Il ne dort plus depuis la Saint-Martin. Il a mis son trône devant l'escalier des caves, et il s'assoit dessus, jour et nuit, comme une poule sur un œuf qu'elle ne veut pas voir éclore. »",
      "Elle compte sur ses doigts farineux. « Ne le flatte pas, il déteste ça. Ne le menace pas, il te mangera pour l'exemple, même sans faim. Parle-lui de ce qui l'empêche de dormir. Il a peur, et il n'a personne à qui le dire : un roi, ça ne dit pas qu'il a peur. Si tu lui offres de l'en débarrasser, il t'écoutera. »",
      "Elle hésite. « Et il aime les devinettes. Les vieilles, celles de la vallée. Je lui en dis le soir. S'il t'en pose une, prends ton temps. Il déteste qu'on réponde vite et faux. »",
    ],
    choices: [{ back: "PT_cuisines" }] },

  PT_bourle: { act: "P", title: "Bourle", place: "chateau",
    fx: { flag: "PT:bourle_ami", regard: { pt_bourle: "curieux" }, ep: ["perso", 200] },
    text: [
      "Bourle est jeune, pour un troll : pas beaucoup plus grand qu'un homme, la peau encore lisse par endroits, d'un gris de pierre mouillée, et des oreilles trop grandes qui bougent toutes seules. Il sort de derrière son sac de farine quand tu t'accroupis devant lui, et il te tend, sans un mot, un oignon épluché. C'est ce qu'il a de plus précieux en main.",
      "Tu le prends. Il sourit, d'un sourire immense et plein de trous. « Bourle faire pain, dit-il. Aglaé apprendre. Bourle faire bon pain. » Tu lui dis que ça sent très bon, et c'est vrai. Il en devient vert sombre, ce qui doit être sa façon de rougir.",
      "Puis, en regardant ses pieds : « Grauk pas dormir. Bourle pas dormir non plus. Sous la cuisine, ça chante. Bourle mettre doigts dans oreilles. Pas marcher. » Il met ses doigts dans ses oreilles, pour te montrer. Il a l'air d'un enfant qui attend qu'on lui dise que ça va aller.",
    ],
    choices: [{ back: "PT_cuisines" }] },

  PT_cuisines_jambon: { act: "P", title: "Un jambon pour les chiens", place: "chateau",
    fx: { item: "pt_jambon" },
    text: [
      "Aglaé lève les yeux au ciel. « Les chiens-loups. Ils ont faim depuis que les trolls ne chassent plus. Ils ont mangé un troll l'été dernier, un petit, qui avait trop bu. On n'en parle pas. »",
      "Elle décroche d'une poutre un jambon fumé, noir, à moitié entamé, et te le colle dans les bras. « Celui-là est trop salé, Grauk n'en veut plus. Jette-le au milieu du chenil, pas devant toi : au milieu. Le temps qu'ils se battent pour l'os, tu as le temps de faire ce que tu as à faire. »",
    ],
    choices: [{ back: "PT_cuisines" }] },

  PT_aglae_repas: { act: "P", title: "La soupe d'Aglaé", place: "chateau",
    fx: { pv: "max", food: 1 },
    text: [
      "Aglaé te sert une écuelle de soupe de lard et de fèves, épaisse à y planter la cuillère, avec une tranche de pain encore tiède. Elle te regarde manger comme regardent les cuisinières, sans rien dire, en guettant la deuxième bouchée, qui est toujours celle qui compte.",
      "« Ça fait deux hivers que je cuisine pour des gens qui ne savent pas ce qu'ils mangent », dit-elle quand tu racles le fond. Elle a les yeux brillants, et elle se retourne vers sa marmite pour que tu ne le voies pas. Elle te glisse dans le sac un pain entier et un morceau de fromage, enveloppés dans un torchon.",
    ],
    choices: [{ back: "PT_cuisines" }] },

  PT_cuisines_pip: { act: "P", title: "Une lumière à table", place: "chateau", with: "pip",
    fx: { conf: { pip: 5 }, regard: { aglae: "admiratif" } },
    text: [
      "Pip descend de ton col jusqu'à la table, se pose sur le bord d'une écuelle, et regarde Aglaé. Aglaé le regarde. Bourle, derrière elle, a mis ses deux mains devant sa bouche.",
      "« C'est toi qui chantais ? » demande Aglaé. Pip réfléchit très sérieusement. « Je ne crois pas, dit-il. Moi, je ne chante pas. Je ne sais pas. » Il se tourne vers toi. « Est-ce qu'on peut apprendre ? »",
      "Aglaé rit, pour la première fois vraiment, la tête en arrière. « Bourle, dit-elle, va chercher le miel. » Elle pose une goutte de miel sur le bord de l'écuelle. Pip la regarde, la goûte d'une manière que tu ne comprends pas, avec sa lumière, et devient tout doré.",
    ],
    choices: [{ back: "PT_cuisines" }] },

  PT_aglae_choix: { act: "P", title: "Partir ou rester", place: "chateau",
    text: [
      "Tu lui dis que la voie est libre. Que Grauk ne la retiendra pas. Qu'elle peut sortir par la grande porte en plein jour, si elle veut, et descendre. Aglaé pose sa louche. Elle s'assoit, ce qu'elle ne fait jamais, et elle regarde ses mains pendant un long moment.",
      { if: { has: "grauk:allie" }, text: "« Grauk m'a dit, hier, qu'il me paierait, maintenant, dit-elle. En sous, comme une vraie cuisinière. Il a un coffre plein de sous qu'il ne sait pas compter. Il a dit : Aglaé rester, Aglaé payée, Aglaé reine de la cuisine. » Elle rit. « Reine de la cuisine. Personne ne m'a jamais rien dit de pareil, en bas. »" },
      { if: { has: "grauk:mort" }, text: "« Grauk est mort, dit-elle. Je l'aimais bien, ce vieux sac. Les autres ne savent pas quoi faire. Ils viennent me demander, à moi, s'il faut manger ou dormir. » Elle secoue la tête. « Si je pars, ils vont mourir de faim cet hiver, ou redescendre voler, et on les tuera. Bourle le premier. »" },
      { if: { has: "roi=ruse" }, text: "« Grauk a compris qu'on l'avait roulé, dit-elle. Il ne sait pas encore par qui. Il cherche. S'il pense que c'est moi qui t'ai aidé{e}... » Elle n'a pas besoin de finir." },
      { after: "PT_aglae_lanterne", text: "Elle regarde vers la fenêtre, vers la vallée qu'on ne voit pas d'ici. Tu sais à quoi elle pense : à une lanterne noire, au-dessus d'une cheminée, qu'on n'allume plus." },
      "« En bas, dit-elle, Ternes a dû prendre une autre cuisinière. Trente ans que je faisais sa soupe, et elle n'est pas montée. Personne n'est monté. Ici, j'ai une cuisine. J'ai Bourle. » Elle regarde le jeune troll, qui fait semblant de ne pas écouter. « Mais c'est une prison, ici. C'est une prison avec du pain chaud, mais c'est une prison. Je ne sais pas. Dis-moi, toi. Qu'est-ce que tu ferais ? »",
    ],
    choices: [
      { label: "« Je te ramène aux Trois-Bornes. Je descends avec toi jusqu'au sentier. »", to: "PT_aglae_descente" },
      { label: "« Tu n'as rien à faire en bas si personne ne t'y attend. Va où tu veux. Pars. »", to: "PT_aglae_libre" },
      { label: "« Si tu as trouvé ta place ici, reste. Mais reste parce que tu le choisis. »", to: "PT_aglae_reste" },
    ] },

  PT_aglae_descente: { act: "P", title: "Le baluchon", place: "chateau",
    fx: { set: { aglae: "ramenee" }, quest: "P_aglae", fac: { bornes: 10 }, regard: { aglae: "redevable" }, ep: ["seance", 600] },
    text: [
      "Elle met une heure à faire son baluchon. Elle n'a presque rien : un tablier de rechange, un couteau à désosser, une cuillère de buis qu'elle a sculptée elle-même pendant le premier hiver. Bourle la regarde faire sans rien dire, assis sur le sac de farine, et quand elle a fini il lui tend l'oignon qu'il gardait dans sa poche. Elle le prend. Elle l'embrasse sur le front, et il faut qu'elle se mette sur la pointe des pieds.",
      "Tu la conduis par la grande porte. Les trolls se rangent contre les murs pour la laisser passer, et quelques-uns ôtent leur bonnet, gauchement, sans savoir pourquoi. Ragne lui ouvre le battant. « Femme partir, dit-il. Pain partir. » Il a l'air de comprendre la catastrophe mieux que les autres.",
      "Au bord du replat, là où le sentier plonge vers la vallée, elle s'arrête. En bas, très loin, on voit fumer les six cheminées des Trois-Bornes. Elle les regarde longtemps. « Elles sont plus petites que dans mon souvenir », dit-elle. Puis elle s'assoit sur son baluchon, près de ta halte, sous le rempart. « Je descendrai avec toi. Quand tu descendras. Je ne veux pas arriver toute seule, après deux hivers. Je veux qu'on voie que quelqu'un est venu me chercher. »",
    ],
    choices: [{ back: "PT_abords" }] },

  PT_aglae_libre: { act: "P", title: "Le chemin d'Aglaé", place: "chateau",
    fx: { set: { aglae: "libre" }, quest: "P_aglae", regard: { aglae: "allie" }, ep: ["seance", 600] },
    text: [
      "Elle te regarde comme si tu avais dit quelque chose de scandaleux, et puis elle rit. « Va où tu veux. Personne ne m'a jamais dit ça. Mon père me disait : va au lavoir. Mon homme me disait : va chercher le pain. Grauk me dit : va faire la soupe. »",
      "Elle réfléchit. « J'ai une sœur à Sorbe-le-Bas, sur l'autre versant. On ne se parle plus depuis vingt ans, pour une histoire d'héritage, une armoire. Une armoire ! » Elle secoue la tête. « Je vais aller lui dire que je ne suis pas morte. Et peut-être qu'elle aura besoin de quelqu'un pour faire la cuisine. Et peut-être pas. On verra. »",
      "Elle part le soir même, par la grande porte, son baluchon sur l'épaule, et elle prend le sentier qui longe la crête vers l'est au lieu de celui qui descend aux Trois-Bornes. Bourle la regarde partir depuis le rempart, et il agite le bras jusqu'à ce qu'elle soit hors de vue. Puis il redescend dans la cuisine, et tu l'entends, un peu plus tard, qui pétrit tout seul, en reniflant.",
    ],
    choices: [{ label: "Passer dans la cour", to: "PT_cour" }] },

  PT_aglae_reste: { act: "P", title: "La reine de la cuisine", place: "chateau",
    fx: { set: { aglae: "reste" }, quest: "P_aglae", regard: { aglae: "cordial" }, ep: ["seance", 500] },
    text: [
      "Aglaé hoche la tête, lentement, comme si tu venais de lui dire une chose qu'elle savait déjà mais qu'il fallait que quelqu'un dise. « Parce que je le choisis, répète-t-elle. Oui. C'est ça qui change tout. Hier, j'étais prisonnière. Aujourd'hui, je suis cuisinière. Les marmites sont les mêmes. »",
      { if: { has: "grauk:mort" }, text: "« Il faudra bien que quelqu'un leur apprenne à vivre sans roi. Je commencerai par leur apprendre à faire la vaisselle. Après ça, la guerre et la politique, ce sera facile. »" },
      { if: { has: "grauk:vivant" }, text: "« J'irai voir Grauk ce soir. Je lui dirai mes conditions. Une paillasse, des sous, et le droit de descendre au marché une fois par mois avec Bourle. S'il dit non, je lui fais des lentilles jusqu'à ce qu'il dise oui. »" },
      "Elle te met dans les mains un paquet ficelé, pour la route, et elle te pousse vers la porte. « Et si tu repasses par la crête, tu montes. Il y aura toujours une écuelle. Et dis à Ternes que je ne suis pas morte. Qu'elle sache où me trouver, si elle veut. Elle ne montera pas, elle a peur des trolls depuis qu'elle est petite, mais qu'elle sache. »",
    ],
    choices: [{ label: "Passer dans la cour", to: "PT_cour" }] },
});

// ------------------------------------------------------------------ the treasure room
add({
  PT_tresor_porte: { act: "P", title: "La porte basse", place: "chateau",
    text: [
      "La porte est basse, épaisse, en chêne noirci, cerclée de bandes de fer cloutées comme une porte de prison. Ce devait être la salle des archives du vieux seigneur, ou sa réserve de vin. Les trolls l'ont fermée avec une chaîne de charrette passée trois fois dans les anneaux, et un cadenas de marchand gros comme un poing, sans doute pris avec la charrette.",
      "Au-dessus de la porte, quelqu'un a cloué une tête de mouton desséchée, les orbites pleines de paille. C'est la façon des trolls de dire : à moi.",
      { if: { has: "roi=parole" }, text: "Grauk t'a dit, d'un geste large, que tu pouvais prendre ce qui était à toi. Tu n'as qu'à demander la clé à Ragne. Il te la donne sans discuter, en te regardant comme on regarde quelqu'un qui va se servir dans le garde-manger d'un ami." },
    ],
    choices: [
      { label: "Ouvrir avec la clé que Ragne te donne", if: { has: "roi=parole" }, hide: { not: { has: "roi=parole" } }, fx: { flag: "PT:tresor_ouvert" }, to: "PT_tresor" },
      { label: "Crocheter le cadenas", test: { dom: "discretion", diff: -10, label: "Crocheter", help: [{ if: { item: "pied_de_biche" }, v: 15 }, { if: { arch: "voleur" }, v: 10 }] },
        win: { fx: { flag: "PT:tresor_ouvert", ep: ["perso", 400] }, to: "PT_tresor" }, lose: { to: "PT_tresor_bruit" } },
      { label: "Faire sauter un anneau de la chaîne", test: { dom: "combat", diff: -10, label: "Arracher la chaîne", help: [{ if: { item: "pied_de_biche" }, v: 15 }, { if: { item: "hache" }, v: 10 }] },
        win: { fx: { flag: "PT:tresor_ouvert", ep: ["perso", 400] }, to: "PT_tresor" }, lose: { to: "PT_tresor_bruit" } },
      { back: "PT_cour" },
    ] },

  PT_tresor_bruit: { act: "P", title: "Le bruit", place: "chateau",
    fx: { meet: "pt_moufle" },
    text: [
      "La chaîne sonne contre le fer, une fois, deux fois, et le bruit court dans la cour comme un cri. Derrière toi, une porte s'ouvre en grinçant. Un troll sort des dortoirs, en traînant une couverture de laine derrière lui comme un enfant malade, les yeux bouffis de sommeil.",
      "Il est gros et mou, la peau tachée de lichen, un bonnet de laine rouge enfoncé jusqu'aux sourcils. Il te regarde, il regarde la chaîne, il te regarde encore. « Moufle dormir, dit-il avec reproche. Toi faire bruit. Toi voleur ? » Il ne crie pas. Il a l'air de réfléchir à la question pour de vrai.",
    ],
    choices: [
      { label: "« Je ne vole rien. Je cherche quelque chose qui n'est pas aux trolls. »", test: { dom: "social", diff: 0, label: "Convaincre Moufle", help: [{ if: { has: "PT:hote" }, v: 10 }] },
        win: { fx: { flag: "PT:tresor_ouvert", regard: { pt_moufle: "curieux" }, ep: ["perso", 300] }, to: "PT_tresor" }, lose: { to: "PT_tresor_combat" } },
      { label: "Le frapper avant qu'il donne l'alerte", to: "PT_tresor_combat" },
      { label: "T'éloigner sans rien dire", back: "PT_cour" },
    ] },

  PT_tresor_combat: { act: "P", title: "Moufle", place: "chateau",
    combat: { title: "Moufle, devant la porte basse", enemies: ["pt_troll"], terrain: "bati", spare: true,
      win: { fx: { flag: "PT:tresor_ouvert", ep: ["perso", 400] }, to: "PT_tresor" },
      calm: { fx: { flag: "PT:tresor_ouvert", ep: ["perso", 400] }, to: "PT_tresor" },
      lose: { to: "PT_cage" },
      flee: { label: "Te perdre entre les tas de rapines", dom: "discretion", diff: 0, to: "PT_cour" } },
    text: [
      "Moufle laisse tomber sa couverture et ramasse ce qui traîne, c'est-à-dire un timon de charrette. Il le tient comme une cuillère. « Moufle pas content », annonce-t-il, et c'est sans doute la phrase la plus longue qu'il ait jamais dite en colère.",
    ] },

  PT_tresor: { act: "P", title: "La salle du trésor", place: "chateau", backName: "la salle du trésor",
    text: [
      { first: true, outcome: "win", text: "La chaîne tombe à tes pieds avec un bruit de serpent. La porte s'ouvre vers l'intérieur, lourdement." },
      { first: true, text: "C'est une cave voûtée, éclairée par un soupirail. Et c'est le trésor des trolls : un tas, littéralement, qui monte jusqu'à la voûte. Des chaudrons percés, des fers à cheval, des cloches de vache, une selle, des pots de chambre, un rouet, des bougeoirs d'étain, la statue d'un saint sans tête, des bottes dépareillées, une baignoire de cuivre. Tout ce qui brille, tout ce qui sonne, tout ce qui a appartenu à quelqu'un d'autre." },
      { first: true, text: "Il faut un moment pour voir le reste. Fiché dans un billot, au pied du tas, un marteau de forge à manche de frêne. Couchée en travers d'un coffre, une épée longue dans un fourreau de cuir moisi. Et dans le coffre ouvert, sous une couche de poussière, de l'argent : des sous, des deniers, quelques couronnes même, en vrac, mêlés à des boutons et à des clous." },
      { again: true, text: "Le tas, la poussière, le soupirail. Rien n'a bougé. Les trolls ne viennent ici que pour ajouter, jamais pour compter." },
      { with: "pip", text: "Pip fait le tour du tas, lentement, en éclairant chaque objet. « Tout ça est à quelqu'un, dit-il. À quelqu'un d'autre. On le sent. »" },
    ],
    choices: [
      { label: "Le marteau fiché dans le billot", hide: { seen: "PT_tresor_marteau" }, to: "PT_tresor_marteau" },
      { label: "L'épée couchée sur le coffre", hide: { seen: "PT_tresor_epee" }, to: "PT_tresor_epee" },
      { label: "L'argent du coffre", hide: { seen: "PT_tresor_or" }, to: "PT_tresor_or" },
      { back: "PT_cour" },
    ] },

  PT_tresor_marteau: { act: "P", title: "Le marteau", place: "chateau",
    fx: { item: "marteau_durn", ep: ["perso", 300] },
    text: [
      "Le marteau est fiché dans le billot jusqu'au tiers de la tête, comme si un troll avait voulu montrer qu'il savait s'en servir. Tu dois t'y reprendre à deux mains et à trois fois pour l'arracher. Il est lourd, bien équilibré, le manche de frêne poli et noirci par une main qui l'a tenu des milliers d'heures.",
      "Sur la tête de fer, du côté de la panne, quelqu'un a gravé au burin trois petites pierres levées, côte à côte. Les trois bornes. C'est le marteau d'un forgeron qui est fier de son hameau, et qui doit chercher partout, en bas, ce qu'il n'a pas pu garder.",
    ],
    choices: [{ back: "PT_tresor" }] },

  PT_tresor_epee: { act: "P", title: "L'épée du vieux seigneur", place: "chateau",
    fx: { item: "pt_epee", ep: ["perso", 300] },
    text: [
      "Le fourreau tombe en miettes quand tu le soulèves, mais la lame, dessous, a été graissée avant d'y être mise, et il y a longtemps. Elle sort presque propre : une épée longue, droite, un peu étroite pour le goût d'aujourd'hui, avec une garde simple et un pommeau rond.",
      "Sur le pommeau, une main ouverte. Une seule, usée par les paumes. Les seigneurs du château devaient être de l'Ordre, autrefois, ou leurs vassaux.",
      { if: { has: "passe:ordre" }, text: "Tu connais ce geste. Tu l'as fait toi-même, trois ans, au début de chaque garde : la main ouverte posée sur la poitrine. On te disait qu'elle voulait dire : je tiens ma parole. On ne t'a jamais dit ce qu'il fallait tenir d'autre." },
      "Tu la soupèses. Elle est meilleure que ce que tu portes. Les trolls ne s'en servaient pas : trop petite pour leurs mains, et trop fine pour taper avec.",
    ],
    choices: [{ back: "PT_tresor" }] },

  PT_tresor_or: { act: "P", title: "L'argent des trolls", place: "chateau",
    text: [
      "Tu plonges les mains dans le coffre. Il y a là, en vrac, ce qu'on prend aux voyageurs de la crête depuis des années : des sous d'Aldaran à la tour, des sous de Vel-Orin au croissant, des deniers de cuivre verdis, et quelques couronnes d'or, lourdes, que les trolls ont dû garder parce qu'elles brillaient. De quoi vivre un an, si on est économe.",
      "Tout ça a appartenu à quelqu'un. À des colporteurs, des bergers, des pèlerins. À des gens des Trois-Bornes, peut-être. Aucun d'eux ne reviendra le chercher, et les trolls ne savent même pas ce que c'est.",
      { if: { has: "maitre:hauberte" }, text: "Hauberte t'a écrit : ne prends rien que tu ne saurais rendre. Elle le disait déjà quand tu étais petit{e}, en te tapant sur les doigts avec le plat de son épée." },
      { if: { has: "maitre:ortie" }, text: "Ortie t'a écrit : ne prends rien que tu ne saurais rendre. Elle le disait des plantes, autrefois : on ne cueille pas la dernière." },
      { if: { has: "maitre:maelle" }, text: "Maëlle t'a écrit : ne prends rien que tu ne saurais rendre. Elle le disait des livres, autrefois, en te les prêtant un par un." },
      { with: "pip", text: "Pip ne dit rien. Il s'est posé sur le bord du coffre, et il te regarde faire." },
    ],
    choices: [
      { label: "Tout prendre : ça ne sert à personne ici", fx: { gold: 25, flag: "PT:or_pris", conf: { pip: -5 } }, back: "PT_tresor" },
      { label: "Prendre de quoi payer ta route, pas plus", fx: { gold: 6 }, back: "PT_tresor" },
      { label: "Ne rien prendre, et refermer le coffre", fx: { conf: { pip: 5 }, ep: ["perso", 200] }, back: "PT_tresor" },
    ] },
});

// ------------------------------------------------------------------ the dormitories
add({
  PT_dortoirs: { act: "P", title: "Les dortoirs", place: "chateau", backName: "les dortoirs",
    text: [
      { first: true, text: "Les dortoirs occupent l'ancienne écurie : une longue salle basse, voûtée, où les mangeoires de pierre sont encore scellées aux murs. Les trolls dorment dedans. Chaque mangeoire est un lit, garni de paille, de peaux de mouton et de couvertures volées, et entre les mangeoires traînent des os, des bottes, des cruches vides." },
      { when: "day", before: "P:pierre", text: "Il fait jour, et les dortoirs sont pleins. Une douzaine de trolls ronflent dans leurs mangeoires, les uns sur les autres, en tas, comme des chiots qui ont froid. Ils ne dorment pas tranquilles. Ils remuent, grognent, se bouchent les oreilles dans leur sommeil.", else: "Les mangeoires sont presque vides. Un seul troll y dort, dans le fond, roulé sous une couverture rouge, et il gémit en dormant." },
      { again: true, text: "L'odeur de paille et de troll, les ronflements, les mangeoires." },
      { after: "P:pierre", text: "Les trolls dorment, cette fois. Ils dorment vraiment, sans bouger, la bouche ouverte, d'un sommeil de pierre. Certains sourient." },
    ],
    choices: [
      { label: "Fouiller les paillasses, sans bruit", hide: { seen: "PT_dortoirs_fouille" }, test: { dom: "discretion", diff: 0, label: "Fouiller sans réveiller" },
        win: { fx: { ep: ["perso", 300] }, to: "PT_dortoirs_fouille" }, lose: { to: "PT_dortoirs_reveil" } },
      { label: "Dire à Moufle ce que tu as trouvé dans le dernier cachot", if: { all: [{ seen: "PT_dortoirs_moufle" }, { seen: "PT_cachots" }] }, hide: { any: [{ not: { seen: "PT_dortoirs_moufle" } }, { not: { seen: "PT_cachots" } }, { seen: "PT_moufle_hurle" }] }, to: "PT_moufle_hurle" },
      { label: "Écouter le troll qui parle dans son sommeil", hide: { any: [{ seen: "PT_dortoirs_reve" }, { has: "P:pierre" }] }, to: "PT_dortoirs_reve" },
      { back: "PT_cour" },
    ] },

  PT_dortoirs_fouille: { act: "P", title: "Sous la paille", place: "chateau",
    fx: { gold: 4, item: "onguent" },
    text: [
      "Tu marches entre les mangeoires sur la pointe des pieds, en enjambant les bras qui pendent. Les trolls cachent leurs trésors à eux sous la paille de leur lit, comme des enfants : des cailloux brillants, des boutons, un sifflet, une poupée de chiffon qui a dû être volée à une petite fille et qu'on a gardée, soigneusement, enveloppée dans une feuille de chou séchée.",
      "Tu ne prends pas la poupée. Tu prends quatre sous oubliés au fond d'une botte, et un petit pot de grès qui sent la cire et la sauge, un onguent de colporteur, encore à moitié plein. Le troll dont c'était le lit ronfle plus fort quand tu te penches sur lui, et se gratte le ventre, et se rendort.",
    ],
    choices: [{ back: "PT_dortoirs" }] },

  PT_dortoirs_reve: { act: "P", title: "Ce que disent les dormeurs", place: "chateau",
    fx: { flag: "PT:reve", ep: ["perso", 200] },
    text: [
      "Il est couché sur le dos dans une mangeoire au bout de la salle, un vieux troll à la barbe blanche de lichen, et il parle. Pas fort. Des mots de troll, d'abord, que tu ne comprends pas, et puis des mots d'homme, appris de travers, qui reviennent toujours dans le même ordre.",
      "« Pas mon nom. Pas mon nom. Toi pas savoir mon nom. Grauk dit : pas dire nom. » Ses mains se lèvent, à plat, et poussent contre rien, contre l'air au-dessus de lui, comme pour retenir un couvercle. « Lourd. Lourd. Toi tenir. Moi pas tenir. »",
      "Il se réveille d'un coup, les yeux grands ouverts, et ne te voit pas. Il regarde le plafond. Puis il se retourne, se cache la tête sous la paille, et se rendort en tremblant. Ce qui fait peur à un troll de cette taille, dans son sommeil, ce n'est pas un homme avec une épée.",
    ],
    choices: [{ back: "PT_dortoirs" }] },

  PT_dortoirs_reveil: { act: "P", title: "Un œil qui s'ouvre", place: "chateau",
    fx: { meet: "pt_moufle" },
    text: [
      "Une paille craque sous ton pied. Rien. Une deuxième. Dans la mangeoire la plus proche, un œil jaune s'ouvre, puis l'autre. Un troll se dresse sur un coude, un gros troll mou au bonnet de laine rouge, et te regarde en clignant.",
      "« Toi qui ? » demande-t-il, la voix pâteuse. Autour de lui, les autres dorment toujours. Pour l'instant.",
    ],
    choices: [
      { label: "Lui parler tout bas, pour ne pas réveiller les autres", test: { dom: "social", diff: 0, label: "Rassurer le troll", help: [{ if: { has: "PT:hote" }, v: 10 }] },
        win: { fx: { ep: ["perso", 300] }, to: "PT_dortoirs_moufle" }, lose: { to: "PT_dortoirs_combat" } },
      { label: "Le faire taire avant qu'il crie", to: "PT_dortoirs_combat" },
      { label: "Reculer jusqu'à la porte, lentement", back: "PT_cour" },
    ] },

  PT_dortoirs_moufle: { act: "P", title: "Moufle", place: "chateau",
    fx: { flag: "PT:hurle", regard: { pt_moufle: "cordial" } },
    text: [
      "Il s'appelle Moufle. Il te le dit tout de suite, fièrement, et puis il a l'air inquiet de l'avoir dit, et il regarde le sol. « Pas dire nom, dit-il. Grauk dit. Mais toi, homme. Homme pas chanter. »",
      "Tu t'assois sur le bord de sa mangeoire. Il se pousse pour te faire de la place, poliment. Et il parle, tout bas, en roulant le bord de sa couverture entre ses doigts énormes. « Avant, Hurle. Frère de Grauk. Hurle fort, Hurle pas peur. Hurle descendre caves, avec torche, pour faire taire chanson. Hurle pas remonter. » Il se tait. « Grauk attendre. Trois jours. Après, Grauk mettre tonneaux. Après, Grauk mettre trône. Après, Grauk plus dormir. »",
      "Il te regarde. « Toi descendre ? » Tu ne réponds pas. Il hoche la tête comme si tu avais dit oui. « Si toi voir Hurle, toi dire : Moufle pas oublier. »",
    ],
    choices: [{ back: "PT_dortoirs" }] },

  PT_dortoirs_combat: { act: "P", title: "La bagarre des dortoirs", place: "chateau",
    combat: { title: "Le troll au bonnet rouge", enemies: ["pt_troll"], terrain: "bati", spare: true,
      win: { fx: { ep: ["perso", 400] }, to: "PT_dortoirs_apres" },
      calm: { fx: { ep: ["perso", 400] }, to: "PT_dortoirs_apres" },
      lose: { to: "PT_cage" },
      flee: { label: "Filer entre les mangeoires", dom: "discretion", diff: 0, to: "PT_cour" } },
    text: [
      "Le troll au bonnet rouge se dresse de toute sa hauteur dans sa mangeoire, en faisant voler la paille, et rugit. Autour de lui, des têtes se lèvent, des yeux s'ouvrent. Il faut que ce soit fini avant qu'ils soient tous debout.",
    ] },

  PT_dortoirs_apres: { act: "P", title: "Le silence revient", place: "chateau",
    text: [
      { outcome: "calm", text: "Le troll s'est rendormi, assis, la tête sur la poitrine, et il ronfle comme si de rien n'était. Les autres, qui s'étaient à moitié levés, le regardent, te regardent, et se recouchent en grognant. Ce n'était qu'un rêve.", else: "Le troll s'effondre dans sa mangeoire, sonné, les bras en croix, et il ne se relève pas. Les autres, qui s'étaient à moitié levés, regardent, hésitent, et se recouchent en grognant : ce n'est pas leur affaire, et ils ont sommeil." },
      "Tu restes immobile un long moment, le cœur battant, au milieu de la salle. Puis tu sors à reculons, sans rien emporter. Il y a des endroits où l'on ne fouille pas deux fois.",
    ],
    choices: [{ back: "PT_cour" }] },
});

// ------------------------------------------------------------------ the fallen tower
add({
  PT_tour: { act: "P", title: "La tour effondrée", place: "chateau", backName: "la tour effondrée",
    text: [
      { first: true, text: "La tour s'est effondrée sur elle-même, un hiver, il y a longtemps : les étages se sont empilés au fond comme des assiettes cassées, et il ne reste debout que la coque de pierre, ouverte au ciel, avec ses fenêtres vides où passent les choucas. Les trolls n'y viennent pas. Ils ont peur de ce qui est tombé, et de ce qui pourrait tomber encore." },
      { first: true, text: "Au pied, sous les décombres, on devine les restes d'un coffre de fer écrasé sous une poutre. Et à mi-hauteur, accroché au mur par un miracle de maçonnerie, il reste un bout de plancher, la chambre du dernier seigneur peut-être, avec un lit à baldaquin qui pend dans le vide." },
      { again: true, text: "La coque de pierre, le ciel au-dessus, les choucas qui crient. Le plancher pend toujours à mi-hauteur." },
    ],
    choices: [
      { label: "Dégager le coffre écrasé sous la poutre", hide: { seen: "PT_tour_coffre" }, to: "PT_tour_coffre" },
      { label: "Grimper jusqu'au plancher suspendu", hide: { any: [{ seen: "PT_tour_haut" }, { seen: "PT_tour_chute" }] }, test: { dom: "nature", diff: -10, label: "Escalader la tour", help: [{ if: { item: "corde" }, v: 15 }] },
        win: { fx: { ep: ["perso", 400] }, to: "PT_tour_haut" }, lose: { fx: { pv: -3 }, to: "PT_tour_chute" } },
      { back: "PT_cour" },
    ] },

  PT_tour_coffre: { act: "P", title: "Le coffre du seigneur", place: "chateau",
    fx: { item: "pt_registre", ep: ["perso", 300] },
    text: [
      "Tu fais levier avec un bout de poutre, tu pousses, la poutre glisse dans un grincement et une pluie de plâtre, et le couvercle du coffre, tordu, s'ouvre à moitié. Dedans, des étoffes pourries, une odeur de cave et de souris. Et dessous, protégé par une toile cirée, un registre relié de cuir.",
      "C'est le livre de cave du dernier seigneur, tenu de sa main jusqu'à la fin. Des colonnes de chiffres, des noms de vins, des dates. Et à la dernière page, un plan dessiné à l'encre brune : la tour, vue en coupe, et sous la tour, un caveau voûté, avec des tonneaux dessinés un par un, quarante, et dans le coin, un coffre cerclé, et cette note : *Le meilleur, et le coffre de ma mère. Que les héritiers boivent à ma santé.*",
      "Les héritiers ne sont jamais venus. La tour est tombée sur le caveau, et sans doute sur les quarante tonneaux. Mais le dessin est beau, net, avec ses tonneaux bien ronds et son coffre bien carré. On n'a pas besoin de savoir lire pour comprendre qu'il y a là-dessous quelque chose qui vaut qu'on creuse.",
    ],
    choices: [{ back: "PT_tour" }] },

  PT_tour_haut: { act: "P", title: "La chambre suspendue", place: "chateau",
    fx: { flag: "PT:poterne_vue", gold: 3 },
    text: [
      "Tu montes par les pierres saillantes, par les trous des anciennes poutres, en ne regardant que la pierre devant toi. Le plancher suspendu craque quand tu te hisses dessus, mais il tient. Le lit à baldaquin est un squelette de bois rongé. Dans un coin, les choucas ont fait leur nid avec ce qui brillait : tu y trouves trois sous et un dé à coudre en argent.",
      "Par la fenêtre de l'est, on voit l'autre versant de la crête, celui qu'on ne voit jamais d'en bas. Il plonge en falaises vers une vallée plus large, plus douce, où serpente une rivière : la Sorbe, et ses moulins, et ses brumes. Et plus loin, à l'est, au bout du ciel, une ligne blanche et dure : le glacier de la Fenne.",
      "Juste sous le château, au pied des falaises, à mi-pente, tu remarques quelque chose qui n'est pas un rocher : une petite porte voûtée, taillée dans la paroi, à moitié cachée par les ronces. Une poterne. Les vieux seigneurs avaient une sortie de secours de ce côté-là.",
    ],
    choices: [{ back: "PT_tour" }] },

  PT_tour_chute: { act: "P", title: "La chute", place: "chateau",
    text: [
      "À mi-hauteur, une pierre que tu croyais scellée te reste dans la main. Tu glisses le long du mur, tu te rattrapes, tu glisses encore, et tu tombes les trois dernières toises dans les décombres, sur le dos, dans un nuage de plâtre.",
      "Tu restes un moment allongé{e} à regarder le ciel tourner au-dessus de la coque de pierre. Les choucas, là-haut, crient de rire. Rien de cassé, mais tu ne remonteras pas par là aujourd'hui.",
    ],
    choices: [{ back: "PT_tour" }] },
});

// ------------------------------------------------------------------ the throne of Grauk
add({
  PT_trone: { act: "P", title: "Le trône de Grauk", place: "chateau", backName: "la grande salle",
    fx: { meet: "grauk", clue: "p_chant" },
    text: [
      { first: true, text: "La grande salle est longue et basse, noire de suie jusqu'aux poutres. Au milieu, un feu de troncs entiers brûle dans une fosse, et la fumée cherche toute seule son chemin vers les trous du toit. Des tapisseries pourrissent aux murs, où l'on devine encore des cavaliers et des cerfs. Trois trolls sont assis par terre, près du feu, et se taisent quand tu entres." },
      { first: true, text: "Au fond, il y a le trône. C'est l'avant d'une charrette de foin, roues comprises, posé sur une souche de chêne, et garni de peaux de mouton. Il n'est pas contre le mur. Il est contre une porte : une porte basse, voûtée, qui devait mener aux caves, et que l'on a bouchée de tonneaux, empilés jusqu'au linteau, les uns sur les autres, du côté de la salle. Des tonneaux pleins. Tu vois des pierres dépasser des bondes. Personne ne descendra par là, et surtout, rien n'en montera." },
      { first: true, text: "Et sur le trône, il y a Grauk. Il est énorme, même pour un troll : assis, il te dépasse d'une tête. Vieux, la peau grise craquelée comme une écorce, une barbe de lichen blanc qui lui descend jusqu'au ventre, et sur le crâne, en guise de couronne, un cercle de fer de tonneau planté de dents de loup. Ses yeux sont rouges, gonflés, cernés de noir. Ce sont les yeux de quelqu'un qui n'a pas dormi depuis des mois." },
      { first: true, if: { has: "PT:hote" }, text: "« Ragne dit : homme à la porte, dit Grauk, d'une voix grave et lente, qui roule comme un tonneau dans une cave. Ragne dit : homme parler bien. Viens, homme. Grauk écoute. Grauk ne mange pas pendant qu'il écoute. »", else: "« Toi, dans l'ombre, dit Grauk sans bouger, sans même tourner la tête vers toi. Viens. Grauk voit. Grauk ne dort plus, alors Grauk voit tout. » Il a une voix grave et lente, qui roule comme un tonneau dans une cave." },
      { again: true, before: "quete:P_roi", text: "Grauk est sur son trône, adossé aux tonneaux. Il te regarde venir de ses yeux rouges, sans bouger. Le feu craque dans la fosse." },
      { again: true, after: "roi=parole", text: "Grauk est debout près du feu, pas sur son trône. Il a fait rouler les tonneaux contre le mur, et la porte des caves est ouverte, noire. Il te fait un signe de tête, grave, d'égal à égal." },
      { again: true, after: "grauk:mort", text: "Le trône est vide. On a tiré le corps de Grauk dehors, et la salle sent encore le sang et la fumée. Les trolls n'osent pas s'asseoir sur le trône. Ils n'osent pas non plus le déplacer." },
      { again: true, after: "roi=ruse", text: "Grauk est revenu sur son trône, couvert de terre jusqu'aux coudes. Il te regarde entrer avec une rancune lourde et fatiguée, et il ne dit rien. La porte des caves est ouverte derrière lui. Il ne la regarde pas." },
      { again: true, after: "roi=combat", before: "grauk:mort", text: "Grauk est assis sur son trône, une main pressée sur ses côtes. Quand tu entres, il baisse la tête, une fois, comme on salue quelqu'un de plus fort. La porte des caves est ouverte derrière lui." },
    ],
    choices: [
      { label: "Lui parler de ce qui l'empêche de dormir", hide: { quest: "P_roi" }, to: "PT_grauk_parole" },
      { label: "Ruser pour l'éloigner de ces tonneaux", hide: { quest: "P_roi" }, to: "PT_ruse_plan" },
      { label: "Le défier, et passer de force", hide: { quest: "P_roi" }, to: "PT_grauk_combat" },
      { label: "Descendre par la porte des caves", big: true, hide: { not: { quest: "P_roi" } }, to: "PT_caves_escalier" },
      { back: "PT_cour" },
    ] },

  PT_grauk_parole: { act: "P", title: "Parler au roi", place: "chateau",
    text: [
      "Tu t'approches du trône, jusqu'à sentir l'odeur de Grauk : la fumée, la laine mouillée, et la vieille sueur de la peur. Tu ne t'agenouilles pas. Tu ne le flattes pas. Tu lui dis que tu as entendu, à travers la terre, sous ta halte au pied du rempart, la même chose que lui.",
      "Grauk te regarde longtemps. Ses trois trolls ne bougent plus. « Toi entendre, dit-il. Toi, homme. » Il penche sa grosse tête. « Ça chante. Depuis feuilles tomber, l'an d'avant. D'abord petit. Maintenant grand. Ça dit les noms. Ça dit le nom de Grauk. » Il se tait. « Grauk roi. Roi pas avoir peur. »",
      "Il le dit, et ses mains énormes se crispent sur les accoudoirs de la charrette, et le bois craque.",
      { if: { has: "PT:hurle" }, text: "Tu repenses à ce que t'a dit Moufle, dans les dortoirs, du frère qui est descendu avec une torche et qui n'est pas remonté." },
      { if: { has: "PT:conseil_aglae" }, text: "Tu repenses à ce que t'a dit Aglaé : parle-lui de ce qui l'empêche de dormir. Pas de toi. De lui." },
    ],
    choices: [
      { label: "« Laisse-moi descendre. Je ferai taire ce qui chante, et tu dormiras. »", test: { dom: "social", diff: -10, label: "Convaincre le roi des trolls",
        help: [{ if: { has: "PT:conseil_aglae" }, v: 15 }, { if: { has: "PT:hurle" }, v: 10 }, { if: { has: "PT:reve" }, v: 5 }, { if: { has: "PT:hote" }, v: 5 }] },
        win: { fx: { ep: ["perso", 500] }, to: "PT_grauk_accord" }, lose: { to: "PT_grauk_devinette" } },
      { label: "« Un roi qui a peur n'est plus un roi. Laisse-moi passer, ou je passe sans toi. »", to: "PT_grauk_colere" },
    ] },

  PT_grauk_devinette: { act: "P", title: "La devinette", place: "chateau",
    text: [
      "Grauk secoue la tête, lentement. « Homme parler. Homme toujours parler. Hurle aussi parler, avant descendre. » Il se penche en avant, et le trône gémit. « Grauk veut savoir si homme malin. Malin, peut-être revenir. Bête, sûr mourir. Grauk pose devinette. Toi répondre. »",
      "Il ferme les yeux, comme pour retrouver les mots exacts, appris d'Aglaé un soir d'hiver. « Plus on en prend, plus on en laisse derrière. Qu'est-ce que c'est ? »",
      { if: { has: "PT:conseil_aglae" }, text: "Prends ton temps, a dit Aglaé. Il déteste qu'on réponde vite et faux." },
    ],
    choices: [
      { label: "« Des pas. »", fx: { ep: ["perso", 400] }, to: "PT_grauk_accord" },
      { label: "« L'eau. »", to: "PT_grauk_colere" },
      { label: "« Des années. »", to: "PT_grauk_colere" },
      { label: "Prendre ton temps, et chercher", test: { dom: "savoir", diff: 0, label: "La devinette du roi", help: [{ if: { has: "PT:conseil_aglae" }, v: 10 }] },
        win: { fx: { ep: ["perso", 400] }, to: "PT_grauk_accord" }, lose: { to: "PT_grauk_colere" } },
    ] },

  PT_grauk_colere: { act: "P", title: "La colère du roi", place: "chateau",
    text: [
      "Grauk se lève. C'est long. Il se déplie comme une montagne qui se lève de son lit, et quand il est debout, sa couronne de fer touche les poutres. Les trois trolls, près du feu, se sont aplatis par terre. Il ne crie pas. Ce serait moins effrayant s'il criait.",
      "« Toi bête, dit-il tout bas. Ou toi menteur. Grauk pas savoir lequel pire. » Il ramasse, appuyée contre le trône, une poutre de chêne garnie de clous, qui lui sert de sceptre et de gourdin. « Toi partir. Maintenant. Ou toi rester, pour toujours. »",
    ],
    choices: [
      { label: "Rester, et te battre", to: "PT_grauk_combat" },
      { label: "Reculer jusqu'à la cour, sans lui tourner le dos", back: "PT_cour" },
    ] },

  PT_grauk_accord: { act: "P", title: "La parole du roi", place: "chateau",
    fx: { set: { roi: "parole" }, flag: ["grauk:vivant", "grauk:allie"], quest: "P_roi", ep: ["seance", 800], regard: { grauk: "allie" } },
    text: [
      { if: { seen: "PT_grauk_devinette" }, text: "Grauk ouvre les yeux. Il te regarde un long moment, puis un sourire lui fend la barbe, un sourire de vieux troll avec plus de trous que de dents. « Des pas, dit-il. Aglaé dit pareil. Toi malin. »" },
      "Grauk se laisse aller contre le dossier de son trône, et il pousse un soupir si long que le feu se couche dans la fosse. « Bon, dit-il. Bon. Toi descendre. Toi faire taire. » Il lève un doigt gros comme un manche d'outil. « Si toi faire taire, Grauk dormir. Si Grauk dormir, Grauk ami. Trolls de Grauk amis de toi. Grauk dit, Grauk fait. Toujours. »",
      "Il claque des mains. Les trois trolls se lèvent et se mettent à rouler les tonneaux contre le mur, un par un, en grognant sous le poids, en évitant de regarder la porte qui se découvre. Elle est noire. Un air tiède en sort, qui sent la cave, la pierre mouillée, et autre chose, de douceâtre, comme une vase de mare au soleil.",
      "Grauk te tend une torche de résine, de sa propre main. « Hurle, frère de Grauk, descendu avec torche comme ça. Hurle pas remonté. » Il te regarde. « Toi remonter. »",
    ],
    choices: [{ label: "Descendre par la porte des caves", big: true, to: "PT_caves_escalier" }] },

  PT_grauk_combat: { act: "P", title: "Le roi des trolls", place: "chateau",
    combat: { title: "Grauk, roi des trolls", enemies: ["pt_grauk"], terrain: "bati", spare: true,
      win: { fx: { ep: ["seance", 800] }, to: "PT_grauk_vaincu" },
      calm: { fx: { ep: ["seance", 800] }, to: "PT_grauk_dort" },
      lose: { to: "PT_cage" },
      flee: { label: "Te jeter derrière le feu et filer vers la cour", dom: "discretion", diff: -10, to: "PT_cour" } },
    text: [
      "Grauk ne se presse pas. Il descend de son trône, sa poutre cloutée à la main, et les trois trolls s'écartent jusqu'aux murs. Il est vieux, il est fatigué, il n'a pas dormi depuis des mois. Mais il est roi depuis quarante ans, et on ne reste pas roi des trolls quarante ans sans savoir ce qu'on fait avec une poutre.",
    ] },

  PT_grauk_vaincu: { act: "P", title: "Le roi à genoux", place: "chateau",
    text: [
      "Grauk tombe à genoux, puis sur une main, et la poutre cloutée roule dans la fosse du feu où elle se met à brûler. Il respire comme un soufflet crevé. Le sang des trolls est sombre, presque noir, et il en perd par une entaille au front qui lui coule dans les yeux.",
      "Il ne se relève pas. Il te regarde à travers le sang. « Toi gagner, dit-il. Toi roi, maintenant. Coutume. Toi tuer Grauk, toi roi. » Il ferme les yeux. Il attend. Il n'a pas l'air d'avoir peur de ça. Il a l'air presque soulagé.",
      "Autour de vous, les trois trolls ne bougent pas. Ils attendent aussi.",
    ],
    choices: [
      { label: "Achever le vieux roi", to: "PT_grauk_mort" },
      { label: "L'épargner", to: "PT_grauk_epargne" },
    ] },

  PT_grauk_mort: { act: "P", title: "La mort de Grauk", place: "chateau",
    fx: { set: { roi: "combat" }, flag: "grauk:mort", quest: "P_roi", fac: { bornes: 5 }, ep: ["seance", 600] },
    text: [
      "Tu le fais vite. C'est la seule chose qu'on puisse faire bien, dans ce genre de chose. Grauk bascule sur le côté, lentement, et il reste couché devant son trône de charrette, et la couronne de fer roule jusqu'au bord de la fosse et tourne un moment sur elle-même avant de se coucher.",
      "Personne ne dit rien. Les trois trolls regardent le corps de leur roi. Puis l'un d'eux, le plus jeune, se met à pleurer, bruyamment, comme un enfant, la bouche ouverte. Les deux autres ne le font pas taire.",
      "Quand tu leur dis de dégager la porte des caves, ils obéissent sans un mot, comme on obéit au roi. Ils roulent les tonneaux contre le mur, un par un. Tu n'es pas leur roi. Tu ne le seras pas. Mais pour l'heure, il n'y a personne d'autre.",
    ],
    choices: [{ label: "Descendre par la porte des caves", big: true, to: "PT_caves_escalier" }] },

  PT_grauk_epargne: { act: "P", title: "Le roi épargné", place: "chateau",
    fx: { set: { roi: "combat" }, flag: "grauk:vivant", quest: "P_roi", regard: { grauk: "redevable" }, ep: ["seance", 700] },
    text: [
      "Tu baisses ton arme. Tu lui dis que tu ne veux pas être roi des trolls. Que tu veux descendre, c'est tout, et qu'il reste roi pendant ce temps-là, puisqu'il faut bien que quelqu'un le soit.",
      "Grauk ouvre les yeux. Il te regarde comme on regarde une chose qu'on ne comprend pas, longtemps. Puis il se met à rire, un rire énorme et cassé, qui lui fait mal aux côtes et qu'il ne peut pas arrêter. « Toi pas vouloir être roi ! dit-il. Toi plus malin que Grauk. »",
      "Il se relève, en s'appuyant au trône, et il crie quelque chose en troll. Les trois trolls bondissent et se mettent à rouler les tonneaux contre le mur. La porte des caves apparaît, noire, et l'air tiède qui en sort sent la vase. Grauk te regarde. « Toi descendre. Toi remonter. Après, Grauk pas oublier. »",
    ],
    choices: [{ label: "Descendre par la porte des caves", big: true, to: "PT_caves_escalier" }] },

  PT_grauk_dort: { act: "P", title: "Le sommeil du roi", place: "chateau",
    fx: { set: { roi: "ruse" }, flag: "grauk:vivant", quest: "P_roi", ep: ["seance", 700] },
    text: [
      "Grauk s'arrête au milieu d'un pas. La poutre cloutée s'abaisse, lentement, jusqu'à toucher le sol. Ses paupières tombent sur ses yeux rouges, se relèvent, retombent. Il tangue. Et il s'assoit, par terre, au milieu de la salle, le dos contre son trône, comme un vieil homme qui s'assoit au soleil.",
      "Il dort. Le roi des trolls dort, pour la première fois depuis des mois, la bouche ouverte, avec un ronflement doux, presque timide. Les trois trolls, près du feu, le regardent avec des yeux ronds. L'un d'eux s'approche à quatre pattes, regarde son roi de tout près, et se retourne vers toi avec un respect immense.",
      "Tu lui montres les tonneaux. Il comprend. Les trois trolls se mettent à les rouler contre le mur, tout doucement, en se faisant signe de ne pas faire de bruit, avec les gestes exagérés des gens qui ont peur de réveiller un bébé. La porte des caves apparaît, noire. Grauk ronfle.",
    ],
    choices: [{ label: "Descendre par la porte des caves", big: true, to: "PT_caves_escalier" }] },
});

// ------------------------------------------------------------------ the cage
add({
  PT_cage: { act: "P", title: "La cage", place: "chateau", takes: 6,
    fx: { pv: 5 },
    text: [
      "Tu te réveilles dans le noir, avec un goût de sang dans la bouche et une douleur sourde partout. Tu es couché{e} sur de la paille, dans une cage de troncs de frêne liés au cuir, dans ce qui devait être le garde-manger du château : des crocs de boucher au plafond, une odeur de lard rance. Une lucarne grillagée laisse passer un peu de jour gris.",
      "On ne t'a pas tué{e}. On ne t'a même pas attaché{e}. On t'a mis{e} de côté, comme on met de côté une chose dont on décidera plus tard ce qu'on fera. On t'a laissé tes affaires, sauf ton arme, posée sur une table, hors de portée. Les trolls ne fouillent pas : ils ne savent pas ce qui a de la valeur.",
      "Les liens de cuir qui tiennent les barreaux sont gros, durcis par le temps. Il faudrait des heures pour en défaire un avec les doigts. Ou de bons ongles, et de la patience.",
    ],
    choices: [
      { label: "Défaire les liens d'un barreau", test: { dom: "discretion", diff: -10, label: "S'évader de la cage", help: [{ if: { arch: "voleur" }, v: 15 }, { if: { item: "pied_de_biche" }, v: 10 }] },
        win: { fx: { ep: ["perso", 400] }, to: "PT_cage_evasion" }, lose: { to: "PT_cage_grauk" } },
      { label: "Appeler Aglaé, par la lucarne qui donne sur les cuisines", if: { seen: "PT_cuisines" }, why: "Tu ne connais personne ici qui viendrait.", to: "PT_cage_aglae" },
      { label: "Attendre que le roi vienne te voir", to: "PT_cage_grauk" },
    ] },

  PT_cage_evasion: { act: "P", title: "Le barreau", place: "chateau",
    text: [
      "Tu y passes des heures. Le cuir est dur comme de la corne, mais il a séché de travers, et il y a, sous le nœud, un endroit où il a commencé à se fendre. Tu y mets les ongles, les dents, la boucle de ta ceinture. Il fait nuit quand le premier barreau bascule, et tu dois le retenir des deux mains pour qu'il ne tombe pas sur les dalles.",
      "Tu te glisses dehors. Tu reprends ton arme sur la table. Le garde-manger donne sur un couloir obscur, et le couloir sur la cour. Personne. Dans les dortoirs, on ronfle ; dans la grande salle, le feu craque. Personne ne s'attend à ce que la chose mise de côté se mette à marcher.",
    ],
    choices: [{ label: "Te glisser dans la cour", to: "PT_cour" }] },

  PT_cage_aglae: { act: "P", title: "La soupe et le couteau", place: "chateau",
    fx: { regard: { aglae: "allie" } },
    text: [
      "Tu appelles tout bas, par la lucarne. Rien. Tu appelles encore. Au bout d'un moment, la porte du garde-manger s'ouvre, et Aglaé entre, avec une écuelle fumante dans une main et un couteau à désosser dans l'autre. Elle referme derrière elle.",
      "« Je savais bien qu'on te mettrait là, dit-elle. Ils mettent tout là. » Elle te passe l'écuelle entre les barreaux, et pendant que tu manges, elle coupe les liens de cuir d'un barreau, méthodiquement, comme on désosse une épaule. « Grauk ne va pas aimer. Grauk va croire que c'est Bourle. Bourle va dire que c'est moi. Et Grauk ne dira rien, parce que si je pars, il mange cru. »",
      "Elle range son couteau dans son tablier. « Tu me dois une écuelle. Et si tu retournes dans cette salle, tâche de parler au lieu de taper. Ça marche mieux, avec lui. Avec tous les hommes, d'ailleurs. »",
    ],
    choices: [{ label: "Te glisser dans la cour", to: "PT_cour" }] },

  PT_cage_grauk: { act: "P", title: "Le roi devant la cage", place: "chateau",
    text: [
      "Grauk vient à la nuit tombée. Tu l'entends arriver de loin : le sol tremble un peu sous ses pas. Il pousse la porte du garde-manger, et il s'assoit par terre devant la cage, avec un soupir de vieux, une lanterne posée à côté de lui. Il te regarde longtemps.",
      "« Toi te battre bien, dit-il enfin. Toi pas peur. Hurle aussi pas peur. Hurle, frère de Grauk. » Il se gratte la barbe. « Hurle descendre caves. Faire taire chanson. Hurle pas remonter. Depuis, Grauk pas dormir. »",
      "Il se penche vers les barreaux, et tu sens son haleine, la fumée et le lard. « Grauk propose. Toi descendre. Toi faire taire. Si toi remonter, toi libre, et Grauk ami. Trolls de Grauk amis. Si toi pas remonter... » Il hausse les épaules. « Grauk pas avoir besoin de te manger. Chanson manger toi. »",
    ],
    choices: [
      { label: "« Marché conclu. Ouvre la cage. »", fx: { set: { roi: "parole" }, flag: ["grauk:vivant", "grauk:allie"], quest: "P_roi", ep: ["seance", 700], regard: { grauk: "allie" } }, to: "PT_caves_escalier" },
    ] },
});

// ------------------------------------------------------------------ the trick
add({
  PT_ruse_plan: { act: "P", title: "Une raison plus forte que la peur", place: "chateau",
    text: [
      "Grauk ne quitte jamais son trône. Ses trolls disent qu'il n'en descend que pour pisser, et encore, pas loin. Pour l'éloigner de ces tonneaux, il faudrait lui donner une raison plus forte que la peur. Et chez un troll, il n'y a guère qu'une chose plus forte que la peur : l'envie.",
      "Ou bien une peur plus grande, ailleurs.",
      { if: { item: "pt_registre" }, text: "Tu as dans ton sac le livre de cave du vieux seigneur, avec son beau plan : la tour, et sous la tour, quarante tonneaux et un coffre." },
      { if: { has: "PT:bourle_ami" }, text: "Et tu as un ami en cuisine. Bourle répète tout ce qu'il entend, à tout le monde, avec de grands gestes." },
    ],
    choices: [
      { label: "Montrer à Grauk le plan du caveau sous la tour", if: { item: "pt_registre" }, why: "Il te faudrait quelque chose à lui montrer.", test: { dom: "discretion", diff: 0, label: "Faire croire au trésor", help: [{ if: { has: "PT:bourle_ami" }, v: 10 }] },
        win: { fx: { flag: "PT:ruse_tresor", ep: ["perso", 400] }, to: "PT_ruse_creuse" }, lose: { to: "PT_ruse_rate" } },
      { label: "Semer des sous de la cour jusqu'à la tour, et faire courir le bruit d'un trésor", if: { gold: { min: 5 } }, why: "Il te faudrait au moins cinq sous à semer.", fx: { gold: -5 }, test: { dom: "discretion", diff: -10, label: "Faire croire au trésor", help: [{ if: { has: "PT:bourle_ami" }, v: 15 }] },
        win: { fx: { flag: "PT:ruse_tresor", ep: ["perso", 400] }, to: "PT_ruse_creuse" }, lose: { to: "PT_ruse_rate" } },
      { label: "Faire croire que le chant s'est déplacé sous la tour, et qu'il faut l'y murer", test: { dom: "social", diff: -10, label: "Faire croire au piège", help: [{ if: { has: "PT:reve" }, v: 10 }, { if: { has: "PT:hurle" }, v: 10 }] },
        win: { fx: { flag: "PT:ruse_chant", ep: ["perso", 400] }, to: "PT_ruse_creuse" }, lose: { to: "PT_ruse_rate" } },
      { back: "PT_trone" },
    ] },

  PT_ruse_creuse: { act: "P", title: "Les trolls creusent", place: "chateau", takes: 2,
    text: [
      { if: { has: "PT:ruse_tresor" }, text: "Il faut moins d'une heure. D'abord un troll qui ramasse un sou dans la boue de la cour et le mord, puis deux, puis Bourle qui court partout en criant « Trésor ! Trésor sous tour ! », et puis Grauk qui se lève de son trône, lourdement, pour voir. Il voit. Il regarde la tour. Il regarde ses tonneaux. Le trésor gagne." },
      { if: { has: "PT:ruse_chant" }, text: "Tu as dit à Grauk, tout bas, que le chant s'était déplacé, que tu l'avais entendu sous la tour, plus fort, plus près, qu'il cherchait une autre sortie. Grauk a pâli, ce qui chez un troll donne une couleur de cendre. Il a rugi des ordres. Tout le château s'est mis en branle pour aller murer la tour, avec des pierres, avec des troncs, avec n'importe quoi, et Grauk est parti en tête, pour surveiller." },
      "Bientôt, toute la tribu est dans la tour effondrée, à creuser, à déblayer, à se disputer, avec des pelles, des pioches, des marmites, avec les mains. Grauk dirige depuis le seuil, à grands coups de poutre sur le sol. Le vacarme monte jusqu'au ciel. Les choucas s'enfuient en criant.",
      "Dans la grande salle, il n'y a plus personne. Le feu brûle seul dans sa fosse. Le trône de charrette est vide, et derrière lui, les tonneaux attendent.",
    ],
    choices: [{ label: "Aller aux tonneaux, vite", to: "PT_ruse_escalier" }] },

  PT_ruse_escalier: { act: "P", title: "Les tonneaux", place: "chateau",
    text: [
      "Les tonneaux sont pleins de pierres jusqu'à la bonde. Chacun pèse le poids d'un homme. Il y en a une douzaine, empilés sur trois rangs, et il faut en dégager au moins le tiers pour ouvrir un passage par le haut de la porte. Il ne faut pas en faire tomber un seul : le bruit s'entendrait jusqu'à la tour.",
      "Tu entends au loin les trolls qui creusent, Grauk qui hurle des ordres, quelque chose qui s'écroule et des rires. Tu as un peu de temps. Pas beaucoup.",
    ],
    choices: [
      { label: "Les faire rouler un par un, doucement, sur des sacs de paille", test: { dom: "discretion", diff: -10, label: "Dégager l'escalier sans bruit" },
        win: { fx: { ep: ["perso", 400] }, to: "PT_ruse_reussie" }, lose: { to: "PT_ruse_bruit" } },
      { label: "Les soulever à bras-le-corps, et les poser contre le mur", test: { dom: "combat", diff: -10, label: "Soulever les tonneaux" },
        win: { fx: { ep: ["perso", 400] }, to: "PT_ruse_reussie" }, lose: { to: "PT_ruse_bruit" } },
    ] },

  PT_ruse_bruit: { act: "P", title: "Le tonneau qui tombe", place: "chateau",
    text: [
      "Le tonneau t'échappe. Il bascule, roule sur l'arête de celui du dessous, et tombe sur les dalles avec un bruit de tonnerre. Les douves éclatent, les pierres se répandent dans toute la salle. Le vacarme de la tour s'arrête net.",
      "Dans le silence, des pas. Quelqu'un arrive en courant de la cour. Mais par le haut de la porte, maintenant, il y a un trou : un trou noir, juste assez grand pour un homme, et derrière, la première marche d'un escalier qui descend.",
    ],
    choices: [
      { label: "Faire signe à Bourle, qui arrive le premier, de se taire", if: { has: "PT:bourle_ami" }, why: "Personne ici ne te doit ce silence.", fx: { regard: { pt_bourle: "allie" } }, to: "PT_ruse_reussie" },
      { label: "Te jeter dans le trou, et descendre dans le noir avant qu'on t'attrape", to: "PT_ruse_reussie" },
    ] },

  PT_ruse_rate: { act: "P", title: "Le roi n'est pas bête", place: "chateau",
    text: [
      "Grauk t'écoute jusqu'au bout. Puis il se met à rire, doucement, sans joie. « Toi croire Grauk bête, dit-il. Tous croire Grauk bête. Trolls bêtes, Grauk bête. » Il secoue la tête. « Grauk pas bête. Grauk triste. Pas pareil. »",
      "Il te regarde, et il n'a pas l'air en colère. Il a l'air déçu, comme un vieillard à qui un enfant a menti. « Toi veux descendre, dit-il. Grauk voit. Pourquoi pas dire ? Pourquoi ruser ? Dire, c'est plus court. »",
    ],
    choices: [
      { label: "Lui dire, alors, ce que tu veux vraiment", to: "PT_grauk_parole" },
      { label: "Passer de force", to: "PT_grauk_combat" },
      { label: "Te retirer dans la cour", back: "PT_cour" },
    ] },

  PT_ruse_reussie: { act: "P", title: "Dans le noir", place: "chateau", ambiance: "souterrain",
    fx: { set: { roi: "ruse" }, flag: "grauk:vivant", quest: "P_roi", ep: ["seance", 700] },
    text: [
      { if: { seen: "PT_ruse_bruit" }, text: "Tu te glisses par le trou, les pieds d'abord, et tu te laisses tomber sur les marches. Au-dessus de toi, quelqu'un arrive dans la grande salle, s'arrête devant le trou, et ne te suit pas. Tu l'entends respirer fort, longtemps. Puis repartir en courant.", else: "Tu poses le dernier tonneau contre le mur et tu essuies tes mains sur tes cuisses. La porte des caves est ouverte. Personne ne t'a vu. Là-bas, dans la tour, ils creusent toujours, et Grauk hurle toujours." },
      "Tu es dans l'escalier. Les marches sont usées en creux par des siècles de pieds, glissantes, humides. Un air tiède monte d'en bas, qui sent la cave, la pierre mouillée, et une douceur de vase au soleil. Plus haut, dans le château, Grauk finira par comprendre. Mais Grauk ne descendra pas. Personne, là-haut, ne descendra.",
      "Tu souffles sur la mèche de ce que tu as pour t'éclairer, jusqu'à ce que la flamme tienne. Et tu descends.",
    ],
    choices: [{ label: "Descendre dans les caves", big: true, to: "PT_caves_haut" }] },
});

// ------------------------------------------------------------------ the cellars
add({
  PT_caves_escalier: { act: "P", title: "L'escalier des caves", place: "chateau", ambiance: "souterrain", backName: "l'escalier des caves",
    text: [
      { first: true, if: { has: "roi=parole" }, text: "Grauk se tient en haut des marches, sa torche levée au-dessus de ta tête, aussi loin dans l'escalier qu'il ose aller : une marche. Pas deux. « Grauk attendre ici », dit-il. Tu l'entends respirer derrière toi longtemps après que sa lumière t'a quitté{e}." },
      { first: true, if: { has: "grauk:mort" }, text: "Les trolls te regardent descendre depuis la grande salle, groupés autour du corps de leur roi. Aucun ne te suit. Aucun ne te souhaite rien." },
      { first: true, if: { all: [{ has: "roi=combat" }, { has: "grauk:vivant" }] }, text: "Grauk s'est assis sur la première marche, une main sur ses côtes, et il te regarde passer à côté de lui. « Toi remonter », dit-il. Ce n'est pas un ordre. C'est presque une prière." },
      { first: true, text: "L'escalier tourne sur lui-même, taillé dans le roc de la crête, et les marches sont usées en creux par des siècles de pieds, glissantes, humides. L'air qui monte est tiède. Il ne devrait pas l'être : sous une montagne, en automne, l'air des caves est froid. Celui-là sent la pierre mouillée et, par-dessous, une douceur de vase au soleil." },
      { again: true, before: "P:pierre", text: "L'escalier tourne dans le noir. L'air tiède, la douceur de vase." },
      { after: "P:pierre", text: "L'escalier ne descend plus très loin. À la dixième marche, il plonge dans une eau noire, immobile, lisse comme une ardoise, qui a noyé les caves jusqu'à la voûte. Rien ne chante plus là-dessous. Rien ne bouge. Tu jettes un caillou : il entre dans l'eau sans un bruit, sans une ride." },
    ],
    choices: [
      { label: "Descendre jusqu'aux caves", big: true, hide: { has: "P:pierre" }, to: "PT_caves_haut" },
      { back: "PT_cour" },
    ] },

  PT_caves_haut: { act: "P", title: "La cave aux tonneaux", place: "chateau", ambiance: "souterrain", backName: "la cave aux tonneaux",
    text: [
      { first: true, text: "L'escalier débouche dans une cave voûtée, longue, où s'alignaient autrefois les tonneaux des seigneurs. Il en reste quelques-uns, éventrés, et des casiers à bouteilles vides, et des brocs renversés. Les trolls ont bu le reste depuis longtemps. La flamme que tu portes fait danser ton ombre sur la voûte, énorme, puis minuscule." },
      { first: true, text: "Et sur les murs, partout, il y a des mains. Des empreintes noires, posées à plat sur la pierre, des centaines. Tu t'approches. Ce n'est pas de la suie. C'est une matière grasse, sombre, qui brille un peu à la lumière. Elles couvrent les murs du sol jusqu'à hauteur d'homme, et plus haut encore, là où seul un troll aurait pu atteindre." },
      { again: true, text: "La cave aux tonneaux, et les mains noires sur tous les murs." },
      "Au fond de la cave, un couloir s'enfonce plus bas. C'est de là que monte l'air tiède. Et le bourdonnement, qu'on sentait sous la cour, est plus fort ici : il fait vibrer le fond des brocs renversés.",
    ],
    choices: [
      { label: "Regarder les mains de près", hide: { seen: "PT_caves_mains" }, to: "PT_caves_mains" },
      { label: "Voir ce qui gratte derrière les tonneaux éventrés", hide: { seen: "PT_caves_rats" }, to: "PT_caves_rats" },
      { label: "Prendre le couloir qui descend", big: true, to: "PT_caves_couloir" },
      { back: "PT_cour" },
    ] },

  PT_caves_mains: { act: "P", title: "Les mains", place: "chateau", ambiance: "souterrain",
    fx: { clue: "p_mains", ep: ["perso", 400] },
    text: [
      "Tu lèves ta flamme. Il y a de toutes les tailles. De grandes mains de troll, larges comme des pelles, avec des doigts trop courts. Des mains d'homme. Et de petites, très petites, des mains d'enfant, si fines que tu te demandes quel enfant est jamais descendu ici. Certaines sont anciennes, presque effacées, mangées par le salpêtre. D'autres sont fraîches : la matière noire y colle encore aux doigts quand tu les effleures.",
      "Et toutes, sans exception, ont les doigts tournés vers le bas. Pas vers le haut, comme quand on s'appuie à un mur pour se relever. Vers le sol. Comme si on avait posé les paumes contre la pierre et poussé, de toutes ses forces, pour empêcher quelque chose de monter.",
      { if: { has: "passe:cercle" }, text: "Au Cercle, dans un registre que tu recopiais, il y avait en marge une petite main dessinée, doigts vers le bas, à côté d'un paragraphe qu'on avait gratté au couteau. Tu avais cru à une manie de copiste." },
      { if: { arch: "mage" }, text: "Tu poses le bout des doigts sur une empreinte fraîche, et tu retires la main aussitôt. Il y a quelque chose dedans, une trace de volonté, comme la chaleur qui reste sur un siège qu'on vient de quitter. Celui qui a posé cette main-là ne voulait qu'une chose, et la voulait de toute son âme." },
    ],
    choices: [{ back: "PT_caves_haut" }] },

  PT_caves_rats: { act: "P", title: "Les rats de la cave", place: "chateau", ambiance: "souterrain",
    combat: { title: "Les rats de la cave", enemies: [{ id: "rat", n: 3 }], terrain: "galerie",
      win: { fx: { ep: ["perso", 300] }, to: "PT_caves_couloir" }, lose: { to: "PT_caves_couloir" },
      flee: { label: "Agiter ta flamme et filer vers le couloir", dom: "discretion", diff: 0, to: "PT_caves_couloir" } },
    text: [
      "Derrière les douves éclatées d'un tonneau, des yeux rouges s'allument, trois paires, puis d'autres derrière. Des rats de cave, gros comme des chats, pelés, le poil collé de cette même matière noire qui couvre les murs. Ils ne fuient pas ta lumière. Ils ont l'air de t'attendre.",
    ] },

  PT_caves_couloir: { act: "P", title: "Le couloir", place: "chateau", ambiance: "souterrain", backName: "le couloir des caves",
    text: [
      { outcome: "win", text: "Les rats crevés restent derrière toi, dans la cave. Tu as encore leur odeur sur les mains." },
      { outcome: "lose", text: "Tu as réussi à te dégager des rats et à les semer dans le couloir, mais ils t'ont mordu{e} aux mollets et aux mains, et chaque morsure brûle comme une ortie." },
      { outcome: "flee", text: "Les rats ne t'ont pas suivi{e} dans le couloir. Ils restent sur le seuil, à te regarder partir, comme des chiens au bout de leur chaîne." },
      { first: true, text: "Le couloir est taillé dans le roc, assez haut pour un troll, assez large pour deux. Il descend en pente douce. Au bout de trente pas, il se divise. À gauche, une rangée de portes basses, cerclées de fer rouillé : des cachots. À droite, un escalier étroit qui plonge vers un bruit d'eau. Et tout droit, le couloir continue, s'élargit, et c'est de là, tu en es sûr{e} maintenant, que vient le chant." },
      { again: true, text: "Le couloir se divise : les cachots à gauche, l'escalier de l'eau à droite, et tout droit, le chant." },
      "Parce que c'en est un. Ce n'était qu'un bourdonnement, dans la cour ; ici, c'est une note, une seule, tenue sans fin, qui ne monte ni ne descend, et qui n'a jamais besoin de reprendre son souffle.",
    ],
    choices: [
      { label: "Les cachots, à gauche", hide: { seen: "PT_cachots" }, to: "PT_cachots" },
      { label: "L'escalier de l'eau, à droite", hide: { seen: "PT_caves_eau" }, to: "PT_caves_eau" },
      { label: "Suivre le chant, tout droit", big: true, to: "PT_salle_chant" },
      { back: "PT_caves_haut" },
    ] },

  PT_cachots: { act: "P", title: "Les cachots", place: "chateau", ambiance: "souterrain",
    fx: { ep: ["perso", 300] },
    text: [
      "Les portes des cachots sont ouvertes, sauf la dernière. Dans les premières, il n'y a que de la paille pourrie, des anneaux scellés au mur, et sur la porte de l'une d'elles, gravés au clou, des traits par groupes de cinq, des centaines, le calendrier d'un prisonnier mort depuis deux siècles.",
      "Devant la dernière porte, par terre, il y a un bonnet de laine noirci de charbon, et une lanterne de fer renversée, sa chandelle mangée jusqu'au bout. Quelqu'un est venu jusqu'ici, et il a tout lâché pour remonter en courant. Un homme, à la taille du bonnet.",
      "La dernière porte n'est pas fermée à clé. Elle est bloquée de l'intérieur par quelque chose de lourd. Quand tu pousses, elle cède d'un pouce, et une odeur sort, sèche, de pierre et de vieux cuir. Tu pousses encore. Il y a un troll assis contre la porte. Un grand troll, mort depuis longtemps, gris comme le roc. Assis le dos à la porte, face au mur du fond, les deux mains posées à plat sur la pierre, doigts vers le sol. Sa torche éteinte entre ses pieds. Il n'a pas une blessure. Il s'est assis là, et il a tenu, jusqu'à ce qu'il n'y ait plus rien à tenir.",
      { if: { has: "PT:hurle" }, text: "Autour de son cou, un torque de bronze épais comme un pouce. Hurle, frère de Grauk. Moufle avait dit : Hurle fort, Hurle pas peur.", else: "Autour de son cou, un torque de bronze épais comme un pouce, un bijou de chef." },
    ],
    choices: [
      { label: "Prendre la lanterne du charbonnier", hide: { any: [{ item: "lanterne" }, { seen: "PT_cachots_lanterne" }] }, to: "PT_cachots_lanterne" },
      { label: "Prendre le torque de bronze, pour le rendre aux siens", hide: { item: "pt_torque" }, fx: { item: "pt_torque", ep: ["perso", 200] }, back: "PT_caves_couloir" },
      { back: "PT_caves_couloir" },
    ] },

  PT_cachots_lanterne: { act: "P", title: "La lanterne", place: "chateau", ambiance: "souterrain",
    fx: { item: "lanterne" },
    text: [
      "Tu ramasses la lanterne. C'est une lanterne sourde, de celles qu'on ferme d'un volet, en bon fer, noircie de charbon jusqu'à l'anse. Il reste dans le fond un bout de chandelle de suif que tu peux rallumer. Tu ramasses aussi le bonnet, sans savoir pourquoi, et tu le poses sur un anneau du mur, comme on accroche un bonnet chez quelqu'un.",
      "Il est descendu jusqu'ici avec sa lanterne, cet homme. Il a ouvert cette porte, ou essayé. Il a vu ce que tu vois. Et il est remonté, sans rien, en laissant tout, aussi vite que ses jambes le portaient.",
    ],
    choices: [{ back: "PT_cachots" }] },

  PT_caves_eau: { act: "P", title: "L'escalier de l'eau", place: "chateau", ambiance: "souterrain",
    text: [
      "L'escalier de droite descend vingt marches, et la vingt et unième est sous l'eau. Une eau noire, parfaitement immobile, qui remplit une salle basse dont tu ne vois pas le fond. Pas un clapotis. Pas une ride, même quand une goutte tombe de la voûte : la goutte entre dans l'eau sans un bruit, et l'eau se referme dessus.",
      "Tu t'accroupis et tu effleures la surface du bout des doigts. Elle est tiède. Plus tiède que l'air. Et quand tu retires la main, l'eau a laissé sur ta peau un film gras, sombre, que tu dois essuyer longtemps contre la pierre.",
      "De l'autre côté, à trente pas peut-être, une corniche sort de l'eau et file vers la gauche, vers le chant. On pourrait traverser. Ça n'a pas l'air profond. Ça n'a l'air de rien.",
    ],
    choices: [
      { label: "Traverser à gué jusqu'à la corniche", test: { dom: "nature", diff: 0, label: "Traverser l'eau noire", help: [{ if: { item: "lanterne" }, v: 10 }] },
        win: { fx: { ep: ["perso", 300] }, to: "PT_salle_chant" }, lose: { fx: { pv: -3 }, to: "PT_salle_chant" } },
      { back: "PT_caves_couloir" },
    ] },

  PT_salle_chant: { act: "P", title: "La salle qui chante", place: "chateau", ambiance: "souterrain",
    text: [
      { outcome: "win", text: "Tu sors de l'eau noire sur la corniche, trempé{e} jusqu'aux cuisses, et tu suis la paroi jusqu'à une ouverture." },
      { outcome: "lose", text: "À mi-chemin, le fond se dérobe. Tu coules. L'eau tiède se referme sur ta tête, et pendant un instant, tu entends, dedans, très près, quelqu'un qui dit ton nom. Tu remontes en suffoquant, tu nages, tu te hisses sur la corniche, et tu restes longtemps à cracher une eau qui a le goût de la vase." },
      "Le couloir s'ouvre sur une salle naturelle, une grotte immense, plus grande que la grande salle du château, plus haute que sa tour. La voûte se perd dans le noir. Le sol descend en gradins de roc, comme les marches d'un théâtre, vers un fond que ta lumière n'atteint pas encore. L'air est chaud, presque moite, comme dans une étable l'hiver.",
      "Et le chant est là, partout, dans la roche, dans l'air, dans tes dents. Ce n'est pas une voix. Ce n'est pas un instrument. C'est une note qui ne finit pas, et dans la note, quand on s'arrête pour l'écouter, il y a des mots, ou des choses qui ressemblent à des mots. Des noms. Ragne. Bourle. Aglaé. Grauk. Hurle. Et d'autres, que tu ne connais pas, des centaines, des noms anciens.",
      "Et puis le tien. {hero}. Tout bas, gentiment.",
    ],
    choices: [
      { label: "T'arrêter, et écouter ce que dit le chant", test: { dom: "savoir", diff: -10, label: "Écouter le chant", help: [{ if: { arch: "barde" }, v: 15 }] },
        win: { fx: { ep: ["perso", 500] }, to: "PT_salle_ecoute" }, lose: { fx: { pv: -2 }, to: "PT_salle_ecoute" } },
      { label: "Te boucher les oreilles et descendre les gradins", fx: { pv: -1 }, to: "PT_pierre" },
    ] },

  PT_salle_ecoute: { act: "P", title: "Ce que dit le chant", place: "chateau", ambiance: "souterrain",
    text: [
      { outcome: "win", text: "Tu fermes les yeux, et tu écoutes, longtemps. Et peu à peu, tu entends qu'il y a deux choses, dans le chant, et non une. Il y a la note : grave, tenue, immense, qui ne dit rien, qui ne demande rien, qui ressemble au bruit que fait quelqu'un qui retient une porte contre le vent en serrant les dents. Et il y a, par-dessus, comme une eau qui coule sur une pierre, une autre voix, plus douce, plus proche, qui dit les noms. Elles ne viennent pas du même endroit. Elles ne veulent pas la même chose." },
      { outcome: "lose", text: "Tu écoutes, et le chant entre en toi. Il te remplit la tête, il te pousse les yeux de l'intérieur, et pendant un moment tu ne sais plus où sont tes pieds. Tu te retrouves à genoux sur le roc, sans savoir comment, avec le goût du sang dans la bouche, et une seule chose dans la tête : ton nom, dit par quelqu'un qui le connaissait avant que tu ne le connaisses toi-même." },
      "Tu te relèves. Tu descends les gradins, un à un, vers le fond de la grotte, ta lumière tendue devant toi. Le chant grandit à chaque marche.",
    ],
    choices: [{ label: "Descendre jusqu'au fond de la grotte", big: true, to: "PT_pierre" }] },
});

// ------------------------------------------------------------------ the split stone, Pip, the Voice, the shard
add({
  PT_pierre: { act: "P", title: "La pierre fendue", place: "chateau", ambiance: "souterrain",
    fx: { clue: "p_main_pierre", ep: ["seance", 800] },
    text: [
      "Au fond de la grotte, il y a une main.",
      "Elle sort du roc, au bas de la paroi, comme sortirait d'une eau la main d'un noyé qui appelle : un poignet, une paume, cinq doigts. Mais elle est de pierre, et elle est grande comme une charrette. Une pierre grise, lisse, plus lisse que le roc qui l'entoure, avec des plis aux jointures et des lignes dans la paume, comme une vraie main. La paume est ouverte, tournée vers le haut, vers la voûte, vers le château, vers le ciel qu'on ne voit pas.",
      "Elle est fendue. Une fissure noire part du poignet et monte jusqu'à la base du majeur, large comme un doigt, et de la fissure suinte quelque chose de sombre, de luisant, qui coule le long de la pierre et va former au pied de la main une flaque, une petite flaque immobile, noire comme de l'encre. C'est la même matière que sur les murs de la cave.",
      "C'est la main qui chante. Tu le sais maintenant. La note grave vient d'elle, de l'intérieur de la pierre, et la pierre tremble à peine, comme tremble un bras qui porte trop lourd depuis trop longtemps.",
      "Et dans le creux de la paume, au milieu, il y a une lumière. Toute petite. Pas plus grosse qu'une noix. Elle tremble, elle aussi.",
    ],
    choices: [
      { label: "Regarder la fissure de près", hide: { seen: "PT_pierre_fente" }, to: "PT_pierre_fente" },
      { label: "Grimper sur la main, jusqu'à la lumière", big: true, to: "PT_pierre_lumiere" },
    ] },

  PT_pierre_fente: { act: "P", title: "La fissure", place: "chateau", ambiance: "souterrain",
    fx: { ep: ["perso", 300] },
    text: [
      "Tu t'approches de la fissure en évitant la flaque. Il en sort un souffle chaud, régulier, qui sent la vase et le fer. La matière noire suinte des deux lèvres de la fente, lentement, comme suinte la sève d'un arbre blessé.",
      "Au bord de la fissure, à hauteur de ta poitrine, un éclat de pierre est en train de se détacher. Un fragment gros comme un pouce, à moitié décollé, retenu par un fil de roche. Il est plus sombre que le reste. Et il bat. Doucement, régulièrement, comme un cœur, tu le vois bouger d'un cheveu à chaque battement.",
      { if: { arch: "mage" }, text: "Tu sens la force qu'il y a dedans avant même de le toucher. Une force brute, sans forme, qui ne demande qu'à servir. Il te suffirait de tendre la main pour qu'elle soit à toi. C'est si facile que c'en est inquiétant." },
      { if: { has: "passe:profite" }, text: "Tu connais cette sensation dans le ventre. Tu l'as eue à Saint-Gilles, il y a sept ans, devant les terres des gens qui partaient : la chose est là, personne n'en veut, il n'y a qu'à prendre." },
    ],
    choices: [{ back: "PT_pierre" }] },

  PT_pierre_lumiere: { act: "P", title: "La lumière dans la paume", place: "chateau", ambiance: "souterrain",
    text: [
      "Tu grimpes par le poignet, en t'accrochant aux plis de pierre, en évitant la fente. La pierre est tiède sous tes mains, et elle vibre. Tu te hisses sur le bord de la paume, et tu restes là, à genoux, au bord de ce creux immense, lisse, où tu pourrais te coucher tout entier{e}.",
      "La lumière est au milieu. De près, ce n'est pas une flamme. C'est une petite boule de clarté, d'un blanc doré, qui palpite, et dans la clarté, il y a deux points plus sombres. Deux yeux. Ils te regardent. Ils ont peur.",
      "La lumière recule quand tu bouges. Pas loin : jusqu'au pli de la paume, contre le pouce de pierre, comme un enfant recule contre la jambe de sa mère. Elle tremble plus fort. Et ta propre lumière, celle que tu as apportée, lui fait mal, tu le vois à la façon dont elle se tasse.",
    ],
    choices: [
      { label: "Masquer ta lumière, et attendre", fx: { conf: { pip: 5 } }, to: "PT_pip" },
      { label: "Lui parler tout doucement", fx: { conf: { pip: 5 } }, to: "PT_pip" },
      { label: "Poser ta main ouverte sur la pierre, paume en l'air, et ne plus bouger", fx: { conf: { pip: 10 } }, to: "PT_pip" },
    ] },

  PT_pip: { act: "P", title: "Pip", place: "chateau", ambiance: "souterrain",
    text: [
      "Il se passe un long moment. Le chant de la pierre continue autour de vous, dessous, dedans. Puis la lumière avance. Un peu. Elle s'arrête. Elle avance encore, et elle vient se poser tout près de toi, à un doigt de ta main, et elle te regarde avec ses deux yeux sombres.",
      "« Tu es chaud », dit-elle. C'est une voix minuscule, claire, une voix d'enfant très jeune, qui ne sait pas encore qu'on peut mentir. « Est-ce que tu viens du dehors ? Il fait chaud, dehors ? »",
      "Tu lui demandes son nom. Elle réfléchit, très sérieusement. « Je ne sais pas. Ici, il n'y a personne pour dire les noms. Sauf elle, en bas. » Elle frissonne. « Et l'eau. L'eau qui tombe, là-haut, elle fait pip. Pip. Pip. Toute la journée. » Elle te regarde. « Je crois que c'est moi. Pip. »",
      "Pip. Ça lui va. Il rosit, ce qui doit être sa façon d'être content.",
    ],
    choices: [
      { label: "Lui demander depuis quand il est là", hide: { seen: "PT_pip_questions" }, to: "PT_pip_questions" },
      { label: "« Viens avec moi. Je t'emmène dehors. »", big: true, fx: { conf: { pip: 10 } }, to: "PT_pip_join" },
      { label: "« Tu ne peux pas rester ici. Viens. »", big: true, fx: { conf: { pip: 5 } }, to: "PT_pip_join" },
    ] },

  PT_pip_questions: { act: "P", title: "Depuis toujours", place: "chateau", ambiance: "souterrain",
    fx: { ep: ["perso", 300] },
    text: [
      "« Depuis toujours », dit Pip. Puis il se reprend, parce que tu as l'air de vouloir une vraie réponse, et qu'il veut te faire plaisir. « Je ne sais pas. Depuis que je suis là. J'étais là, et la main était là. Elle me tenait. » Il regarde la pierre autour de lui, le grand creux de la paume. « Elle me tient. Avant, elle était fermée, je crois. Maintenant, elle est ouverte. Elle est fatiguée. »",
      "Tu lui demandes à qui est la main. Il ne comprend pas la question. Pour lui, la main n'est à personne : c'est la main, comme le ciel est le ciel. Il ne se souvient pas d'un visage, d'une voix, d'un bras. Il ne se souvient que de la paume, et du chant, toujours.",
      "« Une fois, je suis sorti, dit-il tout bas, comme on avoue une bêtise. Tout en haut, par un trou. Il faisait noir et froid, et il y avait plein de petites lumières tout en haut, très loin, qui ne bougeaient pas. J'ai eu peur. Je suis rentré tout de suite. » Il hésite. « Est-ce qu'elles sont toujours là, les petites lumières ? »",
    ],
    choices: [{ back: "PT_pip" }] },

  PT_pip_join: { act: "P", title: "La petite lumière", place: "chateau", ambiance: "souterrain",
    fx: { join: "pip", flag: "pip:trouve", ep: ["seance", 1200] },
    text: [
      "Pip regarde le creux de la paume, longtemps, comme on regarde une maison qu'on quitte. Puis il s'élève d'une coudée, hésite, et vient se poser sur ton épaule, contre ton cou. Il est tiède, et il ne pèse rien. Il tremble un peu.",
      "« D'accord », dit-il. Et puis, tout bas, à la main de pierre : « Je reviendrai. »",
      "Sous vous, la note grave change. Pas beaucoup. Elle descend d'un cheveu, comme le souffle de quelqu'un qui a lâché quelque chose sans le vouloir. La pierre frémit sous tes genoux. Et au pied de la main, la petite flaque noire, qui n'avait jamais bougé, se ride.",
    ],
    choices: [{ label: "Regarder la flaque, au pied de la pierre", big: true, to: "PT_voix" }] },

  PT_voix: { act: "P", title: "La voix dans la flaque", place: "chateau", ambiance: "souterrain",
    fx: { meet: "voix" },
    text: [
      { first: true, text: "Tu redescends de la main, Pip dans ton col. La flaque s'est élargie. Elle n'est plus ronde : elle a pris une forme allongée, et dans l'eau noire, à la surface, quelque chose se dessine, comme se dessine un visage dans les nuages quand on le cherche. Une tête. Des cheveux longs, qui flottent, qui sont des algues. Une bouche. Elle ne sort pas de l'eau. Elle est dans l'eau, à fleur, tournée vers toi." },
      { first: true, text: "« {hero} », dit-elle. Sa voix est douce. C'est la voix qui disait les noms, dans le chant ; de près, elle n'a rien d'effrayant. C'est une voix de femme, un peu voilée, une voix qui a l'air de comprendre. « Tu es venu{e} de loin. Tu as froid. Tu as eu peur dans l'escalier, et tu es descendu{e} quand même. C'est bien. »" },
      { again: true, text: "Le visage de vase attend à la surface de la flaque, patient, les cheveux d'algue étalés autour de lui." },
      { with: "pip", text: "Pip s'est enfoncé dans ton col jusqu'à disparaître. Tu sens sa chaleur contre ta peau, et tu sens qu'il tremble." },
      { first: true, if: { has: "passe:aide" }, text: "« Tu as porté les malades de Saint-Gilles jusqu'au temple, dit la voix. Un par un. Je m'en souviens, moi. Personne d'autre ne s'en souvient. »" },
      { first: true, if: { has: "passe:fui" }, text: "« Tu es parti{e} de Saint-Gilles avant que l'eau ne tourne, dit la voix. Tu as bien fait. Ceux qui sont restés n'ont rien sauvé. Ne laisse personne te dire le contraire. »" },
      { first: true, if: { has: "passe:profite" }, text: "« Les terres de Saint-Gilles, dit la voix. Tu les as eues pour rien. Ils partaient de toute façon. Tu as été le seul à voir ce que les autres ne voyaient pas. Ce n'est pas un crime, de voir. »" },
      { first: true, text: "« Ta maîtresse t'a écrit : ne prends rien que tu ne saurais rendre. » La voix sourit, tu l'entends sourire. « C'est joli. Elle avait peur de tout. Toi, tu n'as pas peur. Regarde. » Au bord de la fissure, l'éclat de pierre se détache, enfin, et tombe dans la flaque sans faire de rides, et la flaque le repousse vers toi, doucement, jusqu'au bord, jusqu'à tes pieds. Il bat comme un cœur. « C'est un cadeau. Tu pourras le rendre quand tu voudras. On peut toujours me rendre ce que je donne. »" },
      { after: "PT:or_pris", text: "« Tu as déjà pris l'or des trolls, ajoute-t-elle. Tu vois bien que prendre n'est pas si difficile. Personne n'en est mort. »" },
    ],
    choices: [
      { label: "« Qui es-tu ? »", hide: { seen: "PT_voix_qui" }, to: "PT_voix_qui" },
      { label: "« Et lui ? Qu'est-ce que tu sais de Pip ? »", hide: { seen: "PT_voix_pip" }, to: "PT_voix_pip" },
      { label: "Ramasser l'éclat", tag: "Marque +1", stain: true, to: "PT_eclat_prendre" },
      { label: "Le laisser où il est, et lui dire non", to: "PT_eclat_refuser" },
      { label: "Le ramasser du bout des doigts, et le remettre dans la fissure", to: "PT_eclat_rendre" },
    ] },

  PT_voix_qui: { act: "P", title: "Qui elle est", place: "chateau", ambiance: "souterrain",
    text: [
      "« Qui je suis ? » Le visage de vase penche la tête, et ses cheveux d'algue glissent sur l'eau. « Quelqu'un qui a eu très froid, très longtemps, dans le noir. Quelqu'un qui écoute. J'écoute tout le monde. Je sais le nom de tout le monde. C'est le mien qu'on a oublié. »",
      "Elle rit, un rire doux, sans méchanceté. « Tu veux une réponse simple. Je n'en ai pas. Je suis ce qui pousse là où on pleure trop longtemps. Je suis ce qui reste. Ça ne te dit rien, je sais. Ça te dira, plus tard. »",
      "Elle n'a pas menti. Tu le sens. Mais tu sens aussi qu'elle a choisi chaque mot, l'un après l'autre, comme on choisit ses pierres pour traverser un gué.",
    ],
    choices: [{ back: "PT_voix" }] },

  PT_voix_pip: { act: "P", title: "La petite chose", place: "chateau", ambiance: "souterrain",
    text: [
      "« Cette petite chose ? » La voix est presque tendre. « Elle était dans une main. Tu l'as vue, la main. Elle la tient depuis si longtemps qu'elle ne sait plus pourquoi. Et la main se fatigue. Les mains se fatiguent toujours, {hero}. Même celles-là. »",
      { with: "pip", text: "Dans ton col, Pip ne bouge plus du tout. Il a éteint sa lumière, presque. Tu sens seulement un point tiède, minuscule, contre ta gorge." },
      "« Il ne sait rien, ajoute-t-elle. Il ne te servira à rien. Il a peur du noir, et il a peur du jour. Mais garde-le, si tu veux. Il est joli. Moi, je n'en veux pas. » Elle le dit trop vite. C'est la première fois qu'elle parle trop vite.",
    ],
    choices: [{ back: "PT_voix" }] },

  PT_eclat_prendre: { act: "P", title: "L'éclat", place: "chateau", ambiance: "souterrain",
    fx: { mark: 1, item: "eclat", flag: "marque:eclat", fear: { pip: 10 }, conf: { pip: -5 }, ep: ["seance", 600] },
    text: [
      "Tu te baisses, et tu le ramasses. Il est tiède, presque chaud, plus lourd qu'il ne devrait l'être, et il bat contre ta paume, régulièrement, au rythme de ton propre cœur, puis un peu plus vite, comme pour te montrer le chemin. Une force douce te remonte dans le bras, dans l'épaule, dans la tête. Tout devient plus net. Les ombres de la grotte, les lignes de la pierre, les mots que tu pourrais dire : tout est là, à portée.",
      "Quand tu ouvres la main pour le regarder, il y a sur ta paume, là où il était posé, une tache. Petite, ronde, noire, de la taille d'une lentille. Elle ne part pas quand tu frottes. Elle ne fait pas mal.",
      "« Merci », dit la voix. Seulement ça. Elle a l'air sincèrement heureuse, et c'est peut-être ce qui te fait le plus froid dans le dos.",
      { with: "pip", text: "Pip est sorti de ton col. Il s'est posé sur ton autre épaule, celle de la main propre, et il regarde la tache sur ta paume sans rien dire. Il ne revient pas contre ton cou." },
    ],
    choices: [{ label: "La pierre tremble", big: true, to: "PT_chant_monte" }] },

  PT_eclat_refuser: { act: "P", title: "Non", place: "chateau", ambiance: "souterrain",
    fx: { flag: "eclat:refuse", conf: { pip: 10 }, ep: ["seance", 600] },
    text: [
      "Tu ne te baisses pas. Tu regardes l'éclat qui bat à tes pieds, au bord de l'eau noire, et tu dis non. Pas fort. Il n'y a pas besoin de le dire fort.",
      "Le visage de vase ne change pas d'expression. « Comme tu voudras, dit-il. Je suis patiente. J'ai l'habitude d'attendre, tu sais. J'ai attendu bien plus longtemps que toi. » L'éclat glisse en arrière, lentement, et s'enfonce dans la flaque sans un bruit. « Il y en aura d'autres. Il y a toujours d'autres cadeaux. »",
      { with: "pip", text: "Contre ton cou, Pip se remet à briller, tout doucement, comme une braise sur laquelle on souffle." },
    ],
    choices: [{ label: "La pierre tremble", big: true, to: "PT_chant_monte" }] },

  PT_eclat_rendre: { act: "P", title: "Rendre", place: "chateau", ambiance: "souterrain",
    fx: { flag: "eclat:refuse", conf: { pip: 15 }, ep: ["seance", 700] },
    text: [
      "Tu prends l'éclat du bout des doigts, sans le serrer, comme on prend une braise. Il est brûlant et il bat. Tu remontes jusqu'à la fissure, et tu le remets à sa place, dans la lèvre de pierre d'où il est tombé, et tu appuies, de la paume, de tout ton poids, comme les mains de la cave appuyaient sur les murs.",
      "Il tient. Un instant, il tient. Toute la main de pierre frémit sous ta paume, et la note grave monte d'un ton, comme un soupir, comme quelqu'un qu'on aide à porter et qui sent, pour la première fois depuis des siècles, une autre épaule sous la charge. Puis l'éclat glisse à nouveau et retombe dans la flaque. Ça ne suffit pas. Ça ne pouvait pas suffire. Mais ta paume, quand tu la retires, est propre.",
      "Dans la flaque, le visage de vase a perdu son sourire. Pour la première fois, sa voix a un tranchant. « Ce n'est pas à toi de rendre ce que je donne. »",
      { with: "pip", text: "Pip sort de ton col et vient se poser sur la pierre, à l'endroit exact où ta main était posée. Il y reste un moment, sans rien dire, tout lumineux." },
    ],
    choices: [{ label: "La pierre tremble", big: true, to: "PT_chant_monte" }] },
});

// ------------------------------------------------------------------ the stone sings: the mud guardian
add({
  PT_chant_monte: { act: "P", title: "Le chant monte", place: "chateau", ambiance: "souterrain", urgent: 25,
    text: [
      "La main de pierre se met à chanter. Pas la note grave, la note tenue qui ne demandait rien : un autre chant, plus haut, plus fort, qui remplit la grotte d'un coup, qui fait tomber de la voûte des pierres et de la poussière, qui te fait mal aux dents et aux yeux. Comme un cri qu'on retient depuis longtemps et qui sort enfin.",
      { with: "pip", text: "« C'est parce que je pars, crie Pip contre ton oreille. C'est moi. Elle ne veut pas que je parte. » Tu ne sais pas s'il parle de la main ou de la voix." },
      "Et la flaque monte. Elle déborde, elle s'étale sur les gradins, et dans toutes les fentes du roc, l'eau noire sourd, rejoint la flaque, et la flaque se lève. Elle se lève comme se lève quelqu'un qui était couché : d'abord une épaule, puis une tête, puis un corps entier, de vase et d'eau sale, haut comme deux hommes, avec la forme vague d'une personne, sans visage, et deux bras qui pendent jusqu'au sol.",
      "Le visage de femme n'est plus là. Ce qui se tient devant toi n'a pas de visage. C'est un gardien, une chose faite pour garder, et elle avance vers toi, entre toi et le couloir, en traînant derrière elle des filets de vase. Derrière, quelque part, un courant d'air froid. Un vrai courant d'air, qui sent le dehors.",
    ],
    choices: [
      { label: "Lui faire face", timeout: true, to: "PT_gardien" },
      { label: "Courir vers le courant d'air, avec Pip", test: { dom: "discretion", diff: -10, label: "Fuir le gardien", help: [{ with: "pip", v: 10 }, { if: { item: "lanterne" }, v: 5 }] },
        win: { fx: { ep: ["perso", 400] }, to: "PT_fuite" }, lose: { to: "PT_gardien" } },
      { label: "Laisser Pip t'ouvrir le chemin avec sa lumière", who: "pip", test: { dom: "magie", diff: 0, label: "L'éclat de Pip" },
        win: { fx: { conf: { pip: 10 }, ep: ["perso", 500] }, to: "PT_pip_eclair" }, lose: { to: "PT_gardien" } },
      { label: "Lever l'éclat, et ordonner à la vase de se coucher", if: { item: "eclat" }, why: "Il te faudrait quelque chose qui lui parle.", hide: { not: { item: "eclat" } }, tag: "Marque +1", stain: true, fx: { mark: 1, fear: { pip: 10 } }, to: "PT_eclat_ordre" },
    ] },

  PT_gardien: { act: "P", title: "Le gardien de vase", place: "chateau", ambiance: "souterrain",
    combat: { title: "Le gardien de vase", enemies: ["pt_gardien_vase"], terrain: "galerie",
      win: { fx: { ep: ["seance", 1500] }, to: "PT_gardien_vaincu" },
      lose: { to: "PT_gardien_defaite" },
      flee: { label: "Plonger sous ses bras vers le courant d'air", dom: "discretion", diff: -10, to: "PT_fuite" } },
    text: [
      "Le gardien frappe le premier. Son bras s'abat comme une vague, et là où il touche le roc, la vase éclabousse et brûle comme de la chaux vive. Il n'a pas d'yeux, mais il sait où tu es. Il sait toujours où tu es. Il a appris ton nom.",
      { with: "pip", text: "Pip tourne autour de sa tête en jetant de petits éclairs dorés, qui ne lui font pas de mal mais qui l'agacent : la chose se détourne, chaque fois, une fraction de seconde, comme on chasse une mouche." },
    ] },

  PT_gardien_vaincu: { act: "P", title: "La vase retombe", place: "chateau", ambiance: "souterrain",
    text: [
      "Le gardien se défait. Il ne tombe pas, il fond : ses bras coulent, sa tête s'affaisse dans ses épaules, et il redevient ce qu'il était, une flaque, une grande flaque noire qui s'étale sur les gradins en fumant. Tu restes debout au-dessus, haletant{e}, ton arme ruisselante de vase.",
      "Mais l'eau monte toujours. Elle sourd de toutes les fentes, elle remplit le fond de la grotte, elle monte les gradins un par un, et derrière toi, du côté du couloir, tu l'entends gargouiller dans l'escalier de l'eau. Par là, c'est fini : dans un moment, tout sera noyé jusqu'aux caves.",
      { with: "pip", text: "« Par ici ! » Pip file vers le haut des gradins, vers un coin de la grotte où ta lumière n'était jamais allée, et il s'arrête devant une fente dans la paroi, d'où vient le courant d'air froid. « C'est par là que je suis sorti, la fois ! Par là ! »" },
    ],
    choices: [{ label: "Suivre Pip dans la fente", big: true, to: "PT_souterrain" }] },

  PT_gardien_defaite: { act: "P", title: "Sous la vase", place: "chateau", ambiance: "souterrain",
    fx: { pv: 4 },
    text: [
      "Le bras du gardien t'atteint en pleine poitrine et te jette contre le roc. Tu glisses. La vase se referme sur toi, sur tes jambes, sur ton ventre, chaude, lourde, vivante, et elle te tire vers le bas, vers la flaque, doucement, comme on tire une couverture sur un enfant. Tu entends, tout près, une voix qui dit ton nom.",
      "Et puis il y a de la lumière. Une lumière blanche, dorée, violente, qui explose juste au-dessus de toi, et la vase se rétracte en sifflant comme de l'eau sur un fer rouge. Elle te lâche. Tu roules sur le côté. Tu rampes, tu ne sais pas vers où, tu suis la lumière qui file devant toi, qui revient te chercher, qui repart.",
      "Quand tu reprends tes esprits, tu es couché{e} dans un boyau étroit, dans le noir et le froid, et l'air sent la pierre sèche. Pip est posé sur ta poitrine. Il est tout pâle, à peine une lueur. « Je ne savais pas que je pouvais faire ça, dit-il d'une toute petite voix. Je ne veux plus jamais le faire. »",
    ],
    choices: [{ label: "Te relever, et suivre le boyau", big: true, to: "PT_souterrain" }] },

  PT_fuite: { act: "P", title: "La fuite", place: "chateau", ambiance: "souterrain",
    text: [
      "Tu cours. Tu cours sur les gradins glissants, sous les bras du gardien, à travers les éclaboussures de vase qui brûlent, en suivant le courant d'air, en suivant Pip qui file devant toi, petite étoile dans le noir. Derrière toi, la chose se retourne, lentement, et te suit, et l'eau monte avec elle.",
      "La fente est là, dans un coin de la paroi, à peine plus large que tes épaules. Tu t'y jettes. Tu y rampes. Derrière, le gardien arrive, et il essaie de te suivre, mais la fente est trop étroite pour lui, et il reste là, à l'entrée, à pousser contre la pierre, à couler dans les interstices, à appeler ton nom.",
      "Et puis il ne pousse plus. Le chant, derrière, retombe, et redevient la note grave, la note tenue. Plus faible qu'avant. Bien plus faible.",
    ],
    choices: [{ label: "Suivre le boyau", big: true, to: "PT_souterrain" }] },

  PT_pip_eclair: { act: "P", title: "La lumière de Pip", place: "chateau", ambiance: "souterrain", with: "pip",
    text: [
      "Pip quitte ton épaule. Il monte, droit, jusqu'à la hauteur de la tête sans visage du gardien, et il s'arrête là, et il grandit. Sa lumière enfle, blanchit, devient si forte que tu dois fermer les yeux, et même à travers tes paupières tu la vois, rouge, brûlante, comme le soleil d'août qu'on regarde en face.",
      "Quand tu rouvres les yeux, le gardien a reculé. Il s'est tassé contre la paroi, à moitié fondu, les bras levés devant ce qui lui tient lieu de visage, et la vase fume sur ses épaules. Le chemin vers le courant d'air est libre.",
      "Pip retombe. Il retombe comme une feuille, tout pâle, et tu le rattrapes dans le creux de ta main. Il est froid. « Vite », souffle-t-il. Tu cours, la main fermée sur lui, contre ta poitrine.",
    ],
    choices: [{ label: "Courir vers le courant d'air", big: true, to: "PT_souterrain" }] },

  PT_eclat_ordre: { act: "P", title: "La vase obéit", place: "chateau", ambiance: "souterrain",
    text: [
      "Tu lèves l'éclat au-dessus de ta tête, et tu dis : couche-toi. Tu ne sais pas pourquoi tu dis ça. Les mots viennent tout seuls, avec la force qui monte de l'éclat dans ton bras, et ta voix sonne dans la grotte plus fort que le chant.",
      "Le gardien s'arrête. Il te regarde, s'il regarde. Et puis il se couche. Il s'affaisse, lentement, docilement, comme un chien qu'on a grondé, et il redevient flaque à tes pieds, et la flaque s'écarte devant toi pour te laisser passer. Tout s'est fait sans effort. C'est ça qui est terrible : ça n'a demandé aucun effort.",
      "Sur ta paume, autour de l'éclat, la tache noire a grandi. Elle a la taille d'un sou, maintenant. Et quelque part dans l'eau, une voix douce rit, sans méchanceté, comme on rit d'un enfant qui fait ses premiers pas.",
      { with: "pip", text: "Pip s'est réfugié tout en haut, dans les ombres de la voûte. Il ne redescend que quand tu as rangé l'éclat, et il ne se pose pas sur ton épaule. Il vole devant toi, à distance, vers le courant d'air." },
    ],
    choices: [{ label: "Marcher vers le courant d'air", big: true, to: "PT_souterrain" }] },
});

// ------------------------------------------------------------------ the tunnel to the far slope
add({
  PT_souterrain: { act: "P", title: "Le souterrain", place: "chateau", ambiance: "souterrain", backName: "le souterrain",
    text: [
      "Le boyau naturel s'élargit au bout de quarante pas, et débouche dans un vrai couloir, taillé de main d'homme : un souterrain voûté, étroit, avec des marches par endroits, qui file vers l'est sous la crête. Les seigneurs du château l'avaient creusé pour s'enfuir en cas de siège, et sans doute oublié depuis. Le sol est sec. L'air est froid, et sent la terre, la racine, le dehors.",
      { with: "pip", text: "Pip éclaire les parois. Il a repris un peu de couleur. Il regarde tout, les marques des pics dans la pierre, les toiles d'araignée, un vieux clou rouillé, avec la même curiosité affamée que dans la cour du château. « Quelqu'un a fait ça ? demande-t-il. Avec ses mains ? Pour sortir ? »" },
      "Derrière vous, très loin, la note grave continue. Mais tu ne la sens plus dans tes dents. Seulement sous tes pieds, faiblement, comme le pouls de quelqu'un qui dort.",
    ],
    choices: [
      { label: "La salle de garde, sur le côté", hide: { seen: "PT_souterrain_garde" }, to: "PT_souterrain_garde" },
      { label: "Avancer vers l'est", big: true, to: "PT_souterrain_eboulis" },
    ] },

  PT_souterrain_garde: { act: "P", title: "La salle de garde", place: "chateau", ambiance: "souterrain",
    fx: { food: 1, ep: ["perso", 200] },
    text: [
      "Une porte basse ouvre sur une petite salle carrée, avec deux bat-flanc de bois vermoulu, une table, et un coffre. Les gardes qui devaient tenir le souterrain en cas de siège ont laissé leur partie de dés sur la table, les dés en os encore posés : un trois et un cinq. Personne n'est revenu jouer.",
      "Dans le coffre, enveloppés dans de la toile cirée, des biscuits de guerre, durs comme du bois, mais secs, mangeables. Les soldats d'autrefois savaient faire des provisions qui durent. Tu en remplis ton sac.",
      { with: "pip", text: "Pip s'est posé sur la table et regarde les dés. Il en pousse un, du bout de sa lumière, et il le fait rouler. Un six. Il ne sait pas ce que ça veut dire, mais il est très content." },
    ],
    choices: [{ back: "PT_souterrain" }] },

  PT_souterrain_eboulis: { act: "P", title: "L'éboulis", place: "chateau", ambiance: "souterrain",
    text: [
      "Au bout de trois cents pas, le souterrain est barré. La voûte s'est effondrée, il y a longtemps, et un éboulis de pierres et de terre remplit le couloir du sol au plafond. Le courant d'air passe pourtant : tu le sens sur ton visage, froid, qui filtre entre les blocs. Il y a un passage, quelque part. Pas pour un homme, peut-être. Pas tel quel.",
    ],
    choices: [
      { label: "Dégager les pierres à mains nues", test: { dom: "combat", diff: -10, label: "Déblayer l'éboulis" },
        win: { fx: { ep: ["perso", 300] }, to: "PT_souterrain_sortie" }, lose: { fx: { pv: -2 }, to: "PT_souterrain_sortie" } },
      { label: "Te glisser entre les blocs, là où passe l'air", test: { dom: "discretion", diff: -10, label: "Ramper dans l'éboulis" },
        win: { fx: { ep: ["perso", 300] }, to: "PT_souterrain_sortie" }, lose: { fx: { pv: -2 }, to: "PT_souterrain_sortie" } },
      { label: "Laisser Pip trouver le chemin", who: "pip", fx: { conf: { pip: 5 }, ep: ["perso", 300] }, to: "PT_souterrain_sortie" },
    ] },

  PT_souterrain_sortie: { act: "P", title: "La poterne", place: "chateau", ambiance: "souterrain",
    text: [
      { if: { seen: "PT_souterrain_eboulis" }, text: "Tu passes l'éboulis, d'une façon ou d'une autre, les mains écorchées, les genoux en sang, de la terre jusque dans les oreilles. De l'autre côté, le souterrain remonte en pente raide, par des marches taillées, vers une lueur grise." },
      "C'est une porte. Une petite poterne voûtée, fermée d'une grille de fer, et derrière la grille, des ronces, et derrière les ronces, le ciel. Le ciel gris pâle d'avant l'aube. La grille est rouillée, mais rouillée dans les deux sens : ses gonds ne valent plus rien. Il suffit de pousser fort.",
      { if: { has: "PT:poterne_vue" }, text: "Tu reconnais l'endroit : c'est la petite porte que tu as vue d'en haut, depuis la chambre suspendue de la tour, à mi-pente des falaises de l'autre versant." },
      "Tu pousses. La grille gémit, cède, bascule dans les ronces avec un fracas qui fait s'envoler une nuée de moineaux. L'air du dehors entre d'un coup, froid, mouillé, plein d'odeurs de bruyère et de pierre. Tu sors.",
    ],
    choices: [{ label: "Pousser la grille, et marcher vers le jour", big: true, to: "PT_versant" }] },

  PT_versant: { act: "P", title: "L'autre versant", place: "pt_versant", routes: true, backName: "l'autre versant",
    fx: { flag: "P:pierre", ep: ["histoire", 3000], reveal: "pt_versant" },
    text: [
      { first: true, text: "Tu es à mi-pente d'une falaise, sur une étroite vire de bruyère, et devant toi, il y a l'autre côté du monde. La crête, derrière toi, coupe le ciel en deux. De ce côté-ci, la montagne tombe en gradins de rocs et de pins vers une vallée large, douce, encore pleine de brume, où l'on devine une rivière, des moulins, des toits. La Sorbe. Et loin, très loin à l'est, au-dessus de la brume, une ligne blanche et dure accroche les premiers rayons : le glacier de la Fenne." },
      { first: true, text: "Le soleil se lève. Il sort de derrière la Fenne, rouge, puis doré, et la lumière arrive sur la vallée, sur les pins, sur la falaise, sur toi." },
      { first: true, with: "pip", text: "Pip ne dit rien. Il est sorti de ton col, il s'est posé sur ton épaule, et il regarde le soleil se lever. Il le regarde en face, sans ciller, lui qui craignait ta petite flamme. Sa propre lumière, à côté, est presque invisible. Puis il dit, très bas, d'une voix que tu ne lui connaissais pas : « Oh. » Rien d'autre. Il ne dira rien d'autre pendant longtemps." },
      { first: true, if: { item: "eclat" }, text: "Dans ta poche, l'éclat bat contre ta cuisse. Dans la lumière du matin, la tache sur ta paume a l'air plus noire encore." },
      { again: true, text: "La vire de bruyère, la vallée de la Sorbe sous la brume, la Fenne au loin. La poterne, derrière toi, est un trou noir dans les ronces." },
      "Pour retourner au château, il n'y a qu'à suivre la vire jusqu'au col, et reprendre la crête vers l'ouest. Une demi-journée de marche.",
    ],
    choices: [
      { label: "T'asseoir un moment avec Pip, face au jour", with: "pip", hide: { seen: "PT_versant_pip" }, to: "PT_versant_pip" },
    ] },

  PT_versant_pip: { act: "P", title: "Le jour", place: "pt_versant", with: "pip",
    fx: { conf: { pip: 10 }, ep: ["perso", 400] },
    text: [
      "Vous vous asseyez dans la bruyère, le dos contre un rocher que le soleil commence à chauffer. Pip reste sur ton genou. Il regarde la vallée, les toits, les fumées qui montent droites dans l'air calme, un oiseau de proie qui tourne très haut.",
      "« Elles sont parties, les petites lumières, dit-il enfin. Celles d'en haut. » Tu lui expliques que non. Qu'elles sont toujours là, mais que le soleil les cache, et qu'elles reviendront ce soir. Il réfléchit à ça très longtemps. « Alors, elles se cachent aussi, dit-il. Comme moi. »",
      "Puis, plus tard, sans te regarder : « La main. Elle est toute seule, maintenant. Est-ce qu'on retournera la voir ? » Tu ne sais pas quoi lui répondre. Tu lui dis la vérité : que tu ne sais pas. Il hoche ce qui lui tient lieu de tête. « D'accord, dit-il. Mais je lui ai dit que je reviendrais. Alors il faudra. »",
    ],
    choices: [{ back: "PT_versant" }] },

  PT_crete_aube: { act: "P", title: "Sur la crête", place: null,
    text: [
      "La vire rejoint le col, et le col la crête, et vous marchez vers l'ouest sur l'échine de la montagne, dans le vent. D'un côté, la vallée des Trois-Bornes, avec ses six fumées minuscules. De l'autre, la Sorbe et ses brumes. Tu marches sur la ligne qui sépare les deux, comme sur le faîte d'un toit.",
      { with: "pip", text: "Le vent dérange Pip. Il le pousse, le fait tourner, l'emporte d'une toise avant qu'il revienne en protestant se réfugier dans ton col. À la troisième fois, il ne revient pas. Il se laisse emporter exprès, et il rit, pour la première fois, un rire minuscule qui ressemble au bruit d'une goutte sur une pierre." },
      "Au bout de quelques heures, le château apparaît devant vous, de dos, dent cassée sur l'arête. Une fumée monte des cuisines. Rien ne vibre plus sous tes pieds.",
    ],
    choices: [{ label: "Reprendre la route vers le château", back: "@route" }] },
});

// ------------------------------------------------------------------ after the stone: the trolls, and the interlude
add({
  PT_grauk_adieu: { act: "P", title: "Le roi sur le rempart", place: "chateau",
    text: [
      "Grauk t'attend sur le chemin de ronde, au-dessus de la grande porte, assis sur le parapet, les pieds pendants dans le vide comme un enfant sur un mur. Il a dormi : ça se voit à ses yeux, qui ne sont plus rouges, et à sa façon de cligner dans le soleil, étonné, comme quelqu'un qui découvre que le monde a continué pendant son absence.",
      { if: { has: "grauk:allie" }, text: "« Toi remonter, dit-il. Grauk savoir. Chanson se taire, cette nuit. Grauk dormir. Tous dormir. » Il pose sa main énorme sur ton épaule, et tes genoux plient. « Grauk dit, Grauk fait. Trolls de Grauk amis de toi. Toi appeler, un jour, n'importe où, trolls venir. Pas oublier. Trolls pas savoir lire, mais trolls pas oublier. »" },
      { if: { all: [{ has: "roi=ruse" }, { not: { seen: "PT_grauk_dort" } }] }, text: "« Toi menteur, dit-il sans colère. Trésor sous tour, pas trésor. Quarante tonneaux, pas tonneaux. Trolls creuser deux jours pour rien. » Il te regarde longtemps. « Mais chanson se taire. Grauk dormir. Alors Grauk pas savoir s'il faut te manger ou te donner à boire. » Il soupire. « Grauk choisit boire. Cette fois. »" },
      { if: { seen: "PT_grauk_dort" }, text: "« Toi faire dormir Grauk, dit-il. Avant chanson se taire, toi faire dormir Grauk. Grauk rêver. Rêve bon. » Il se frotte les yeux. « Grauk pas comprendre comment. Grauk pas demander. »" },
      { if: { all: [{ has: "roi=combat" }, { has: "grauk:vivant" }] }, text: "« Toi battre Grauk, dit-il. Toi pas tuer Grauk. Toi descendre. Toi remonter. » Il hoche la tête plusieurs fois, lentement. « Grauk vieux. Grauk pas comprendre homme. Mais Grauk pas oublier. »" },
      { with: "pip", text: "Pip sort de ton col pour regarder le roi des trolls. Grauk le regarde aussi, avec une méfiance de vieux paysan devant une bête qu'il ne connaît pas. Puis il tend un doigt, gros comme un manche de pelle, et Pip vient s'y poser. Le roi des trolls ne bouge plus du tout. Il retient son souffle." },
    ],
    choices: [
      { label: "Lui rendre le torque de bronze de son frère Hurle", if: { item: "pt_torque" }, hide: { not: { item: "pt_torque" } }, to: "PT_grauk_torque" },
      { back: "PT_abords" },
    ] },

  PT_grauk_torque: { act: "P", title: "Le torque de Hurle", place: "chateau",
    fx: { drop: "pt_torque", flag: "PT:torque_rendu", regard: { grauk: "redevable" }, ep: ["perso", 500] },
    text: [
      "Tu sors de ton sac le torque de bronze, et tu le poses sur le parapet, à côté de lui. Grauk le regarde. Il ne le prend pas tout de suite. Il le touche du bout d'un doigt, comme on touche quelque chose de chaud.",
      "Tu lui dis où tu l'as trouvé. Dans le dernier cachot, le dos à la porte, les mains contre la pierre. Qu'il n'avait pas une blessure. Qu'il n'avait pas fui. Qu'il avait tenu.",
      "Grauk ferme les yeux. Il reste longtemps comme ça, le torque dans le creux de sa main, sans rien dire, pendant que le vent passe sur la crête. Quand il les rouvre, ses yeux sont mouillés, et il ne s'en cache pas. « Hurle fort, dit-il. Hurle pas peur. » Il passe le torque à son propre cou. « Maintenant Grauk porter. »",
    ],
    choices: [{ back: "PT_abords" }] },

  PT_trolls_sans_roi: { act: "P", title: "Les trolls sans roi", place: "chateau",
    text: [
      "Les trolls sortent du château par la grande porte, un par un, en file, avec leurs baluchons de rapines sur le dos. Ils ne savent pas où ils vont. Sans Grauk, il n'y a plus personne pour décider de rester, alors ils partent, vers le nord, vers les forêts plus hautes, là où il n'y a pas d'hommes.",
      { if: { has: "aglae=reste" }, text: "Pas tous. Une demi-douzaine restent sur le seuil avec Aglaé, qui leur crie dessus en agitant sa louche, et Bourle à côté d'elle, droit comme un piquet. Ceux-là ont choisi la soupe plutôt que la forêt." },
      "Ragne passe le dernier. Il s'arrête devant toi, il te regarde de ses petits yeux jaunes. « Toi tuer Grauk, dit-il. Coutume dit : toi roi. » Il attend. Tu ne dis rien. Il hoche la tête comme s'il s'y attendait. « Pas de roi, alors. » Et il s'en va, sa massue sur l'épaule, sans se retourner.",
    ],
    choices: [
      { label: "Rattraper Ragne, et lui confier le torque de Hurle pour les siens", if: { item: "pt_torque" }, hide: { not: { item: "pt_torque" } }, fx: { drop: "pt_torque", flag: "PT:torque_rendu", regard: { pt_ragne: "redevable" }, ep: ["perso", 300] }, back: "PT_abords" },
      { back: "PT_abords" },
    ] },

  PT_entracte: { act: "P", title: "Entracte · Les semaines de brume", place: "chateau",
    fx: { quest: "P_pierre", catchup: 3, catchupWhy: "Les semaines passées aux Trois-Bornes à reprendre des forces, à t'exercer, et à apprendre à vivre avec une petite lumière dans ton col." },
    text: [
      "Tu redescends aux Trois-Bornes, et tu y restes plus longtemps que tu ne l'avais prévu. Le mois des Brumes avance. Les feuilles tombent des hêtres de la crête, les premières gelées blanchissent les prés au matin, et les bergers redescendent leurs bêtes. Tu dors, tu manges, tu t'exerces, tu laisses tes plaies se fermer. Tu écris une lettre que tu n'envoies pas.",
      { with: "pip", after: "pip:trouve", text: "Pip découvre tout. Le lait, la pluie, les chats, les enfants qui le suivent dans la rue en criant, et qu'il fuit, et vers qui il revient. Il pose mille questions par jour. Il dort dans ta botte. Les gens du hameau ont fini par s'habituer à lui, à peu près, comme on s'habitue à un chien qui parlerait." },
      { if: { has: "grauk:allie" }, text: "Une nuit, sur la crête, on entend chanter les trolls. Pas le chant d'en dessous : une vraie chanson de trolls, fausse et joyeuse, qui dure jusqu'au matin. Personne au hameau n'a jamais entendu ça. Mère Ternes dit que ça veut dire qu'ils dorment, à présent, et qu'ils se réveillent contents." },
      { after: "PT:torque_rendu", text: "Le torque de bronze de Hurle est retourné aux trolls. Tu y repenses parfois, à ce grand corps gris assis le dos à la porte, les mains contre la pierre, et tu te demandes combien d'autres, avant lui, ont tenu comme ça sans que personne le sache." },
      { if: { has: "grauk:mort" }, text: "On dit au hameau que les trolls sont partis vers le nord, sauf quelques-uns. On dit aussi que tu as tué leur roi. On te regarde un peu autrement, après ça : avec plus de respect, et un peu moins de chaleur." },
      { if: { has: "aglae=ramenee" }, text: "Aglaé a repris sa cuisine à la Lanterne, comme si elle ne l'avait jamais quittée. Elle te fait porter une tourte chaque dimanche, sans un mot." },
      { if: { has: "aglae=libre" }, text: "On reçoit, un jour, par un colporteur, une lettre de Sorbe-le-Bas, dictée à un écrivain public : Aglaé est chez sa sœur. Elles se disputent toujours pour l'armoire. Elle est heureuse." },
      { if: { has: "aglae=reste" }, text: "Une fois, tu remontes au château. Aglaé te sert une écuelle sans te demander si tu as faim, et Bourle te montre le pain qu'il fait tout seul, à présent. Il est presque bon." },
      { if: { has: "marque:eclat" }, text: "La tache sur ta paume ne grandit pas. Elle ne pâlit pas non plus. La nuit, tu rêves d'eau, d'une eau tiède où tu marches jusqu'à la taille, et d'une voix qui t'appelle par ton nom. Tu te réveilles reposé{e}, et c'est ça qui t'inquiète." },
      { if: { has: "eclat:refuse" }, text: "Parfois, la nuit, tu rêves d'une flaque, et d'un éclat qui bat au bord de l'eau. Dans le rêve, tu ne te baisses jamais. Tu te réveilles fatigué{e}, mais tes mains sont propres." },
      "Et puis vient le jour où l'on apprend, par un muletier qui monte de la Sorbe, qu'à Brumefeuille, de l'autre côté de la crête, l'eau du puits a noirci. Qu'on n'y boit plus. Que les bêtes deviennent grises dans les bois, et que les enfants ont la fièvre. Tu penses à la flaque au pied de la main de pierre. Tu refais ton sac.",
    ],
    choices: [{ label: "Partir pour la vallée de la Sorbe", big: true, to: "I_route" }] },
});

// ------------------------------------------------------------------ small scenes: the rampart, the lantern, Moufle, Bourle's bread
add({
  PT_rempart: { act: "P", title: "Le rempart", place: "chateau",
    fx: { ep: ["perso", 200] },
    text: [
      "Un escalier sans rampe monte le long du mur, contre la tour effondrée, jusqu'au chemin de ronde. Les trolls l'ont renforcé de rondins, à leur mesure, et chaque marche t'arrive au genou. En haut, le vent te prend de face, froid, chargé d'odeurs de neige qui n'est pas encore tombée.",
      { when: "night", before: "P:pierre", text: "Il fait nuit. Dans la cour, en bas, les feux des trolls dessinent un cercle autour de la dalle du puits, à bonne distance. Ils sont assis, ils écoutent, ils ne parlent pas. Personne n'est sur le rempart pour regarder dehors : ce qu'ils guettent est dedans, et dessous.", else: "D'ici, on voit toute la vallée des Trois-Bornes, les six fumées, les prés en lanières, la bergerie d'Isaure accrochée à la pente. Et derrière toi, au-dessus de la cour, la crête qui file vers l'est, vers un autre versant que tu ne vois pas." },
      { after: "P:pierre", text: "Les trolls sont sortis sur le rempart, eux aussi. Ils regardent dehors, maintenant, pour la première fois depuis un an. L'un d'eux te montre la vallée du doigt et dit un mot en troll, plusieurs fois, avec une sorte d'émerveillement." },
      "Le long du parapet, tous les dix pas, quelqu'un a gravé dans la pierre, il y a très longtemps, une main ouverte. Les trolls ont accroché leurs lanternes aux doigts.",
    ],
    choices: [{ back: "PT_cour" }] },

  PT_aglae_lanterne: { act: "P", title: "La lanterne éteinte", place: "chateau",
    fx: { regard: { aglae: "admiratif" }, ep: ["perso", 300] },
    text: [
      "Tu lui racontes. Que Mère Ternes a décroché la lanterne de l'enseigne la nuit où on l'a emportée. Qu'elle ne la rallume plus. Qu'elle a dit qu'elle la rallumerait quand Aglaé rentrerait, ou quand on lui dirait qu'elle ne rentrerait pas, et que les gens trouvaient ça bête.",
      "Aglaé arrête de pétrir. Elle reste les mains dans la pâte, sans bouger, et elle regarde le mur en face d'elle. « La vieille bourrique », dit-elle enfin. Sa voix ne tient pas. « Trente ans qu'on se dispute pour la quantité de sel. Trente ans. » Elle sort ses mains de la pâte, les essuie à son tablier, longtemps, beaucoup plus longtemps qu'il ne faut.",
      "« Elle n'est pas montée, dit-elle. Mais elle a éteint sa lanterne. » Elle hoche la tête, pour elle-même. « Ça compte. Ça compte, ça. »",
    ],
    choices: [{ back: "PT_cuisines" }] },

  PT_moufle_hurle: { act: "P", title: "Ce que Moufle n'oubliera pas", place: "chateau",
    fx: { regard: { pt_moufle: "redevable" }, ep: ["perso", 300] },
    text: [
      "Moufle est assis dans sa mangeoire, sa couverture rouge sur les épaules. Il te voit venir, et il comprend avant que tu parles : ça se voit à ta façon de marcher. Il baisse la tête.",
      "Tu lui dis. Le dernier cachot, le dos à la porte, les deux mains à plat contre la pierre. Pas de blessure. Pas de fuite. Moufle écoute sans bouger. Quand tu as fini, il pose ses deux grosses mains à plat sur le bord de pierre de sa mangeoire, doigts vers le bas, et il pousse, longtemps, les yeux fermés, comme pour essayer.",
      "« Hurle tenir, dit-il. Moufle dire aux autres. Moufle pas oublier. » Il rouvre les yeux. « Toi aussi, pas oublier. »",
    ],
    choices: [{ back: "PT_dortoirs" }] },

  PT_bourle_pain: { act: "P", title: "Le pain de Bourle", place: "chateau",
    fx: { food: 1, regard: { pt_bourle: "admiratif" } },
    text: [
      "Bourle sort du four, sur une pelle de bois, une miche ronde, dorée, fendue sur le dessus comme il faut. Il la pose devant toi sur la table, et il recule de trois pas, les mains derrière le dos, les oreilles à plat, et il attend.",
      "Tu romps la croûte. La mie est blanche, serrée, encore fumante, et elle sent le levain et le feu de bois. Tu en manges un morceau. C'est bon. C'est vraiment bon. Tu le lui dis.",
      { if: { has: "aglae=reste" }, text: "Derrière lui, Aglaé croise les bras et ne dit rien, mais elle a ce petit sourire des maîtres d'apprentissage le jour où l'apprenti fait mieux qu'eux.", else: "Bourle regarde vers le fourneau, là où Aglaé se tenait. Il n'y a personne. Il a appris tout seul, depuis. Il s'est brûlé les doigts tous les jours, et il a continué." },
      "Il t'enveloppe la miche dans un torchon et te la colle dans les bras, pour la route. « Bourle faire bon pain, dit-il, et c'est la première fois que ce n'est pas une question. »",
    ],
    choices: [{ back: "PT_cuisines" }] },
});

module.exports = {
  passages: PASS,
  extras: {
    people: {
      aglae: { name: "Aglaé", f: true, face: { age: "mur", coif: "foulard", shape: "rond" }, desc: "Une cuisinière de la crête, enlevée par les trolls il y a deux hivers. Elle a appris au roi des trolls à dire merci." },
      pt_bourle: { name: "Bourle", f: false, desc: "Un jeune troll aux oreilles trop grandes, qui tourne la broche aux cuisines du château et apprend à faire le pain." },
      pt_ragne: { name: "Ragne", f: false, desc: "Le troll qui garde la grande porte du château, assis sur sa borne, une souche de chêne en travers des genoux. Il a l'air moins méchant que fatigué." },
      pt_moufle: { name: "Moufle", f: false, desc: "Un gros troll mou au bonnet de laine rouge, qui dort mal dans les dortoirs du château." },
    },
    items: {
      pt_jambon: { name: "Jambon fumé", kind: "quete", desc: "Un jambon noir, trop salé pour le roi des trolls. Assez bon pour ses chiens." },
      pt_epee: { name: "Épée du vieux seigneur", kind: "arme", dmg: 7, att: 5, price: 35, desc: "Une épée longue, droite, un peu étroite, au pommeau gravé d'une main ouverte. Trouvée dans le trésor des trolls." },
      pt_registre: { name: "Le livre de cave du vieux seigneur", kind: "document", desc: "Des colonnes de chiffres, des noms de vins, et à la dernière page, le plan d'un caveau sous la tour.",
        text: "À la dernière page, un plan à l'encre brune : la tour, vue en coupe, et sous elle un caveau, quarante tonneaux dessinés un par un, un coffre cerclé dans le coin. *Le meilleur, et le coffre de ma mère. Que les héritiers boivent à ma santé.*" },
      pt_torque: { name: "Le torque de Hurle", kind: "quete", desc: "Un torque de bronze épais comme un pouce, pris au cou d'un troll mort dans les caves, le dos à la porte." },
    },
    enemies: {
      pt_troll: { name: "Troll de la crête", look: "humain", pv: 12, att: 24, def: 10, dmg: 4, desc: "Gris, verruqueux, une barbe de lichen. Lent à se fâcher, et plus lent encore à comprendre qu'il a perdu." },
      pt_chienloup: { name: "Chien-loup des trolls", look: "loup", pv: 7, att: 22, def: 11, dmg: 3, flank: true, desc: "Haut comme un veau, gris, maigre à faire peur. Les trolls ne les nourrissent plus beaucoup." },
      pt_grauk: { name: "Grauk, roi des trolls", look: "ours", pv: 30, att: 32, def: 12, dmg: 5, desc: "Vieux, énorme, une couronne de fer de tonneau plantée de dents de loup. Il n'a pas dormi depuis des mois, et il se bat quand même comme un roi." },
      pt_gardien_vase: { name: "Gardien de la pierre fendue", look: "ombre", pv: 24, att: 30, def: 10, dmg: 4, desc: "De la vase debout, haute comme deux hommes, sans visage. Elle sait ton nom." },
    },
    quests: [
      { id: "P_aglae", act: "P", kind: "annexe", title: "La cuisinière des trolls", start: "PT_cuisines", echo: ["aglae=libre", "aglae=reste", "aglae=ramenee"] },
    ],
    places: {
      pt_versant: { ambiance: "montagne", region: "crete", name: "L'autre versant", map: "marches", x: 28, y: 6, arrive: "PT_versant", desc: "Une vire de bruyère à mi-falaise, sous le château, du côté de la Sorbe. Une vieille poterne s'y ouvre dans les ronces." },
    },
    routes: [
      { id: "pt_r_versant", name: "Le chemin de crête", from: "pt_versant", to: "chateau", steps: 1, twoWay: false,
        label: "Remonter par la crête jusqu'au château", legs: [{ step: 1, passage: "PT_crete_aube" }] },
    ],
    achievements: {
      pt_roi_sans_sang: { title: "Le roi dort", desc: "Passer le roi des trolls sans le tuer.", if: { has: "grauk:vivant" } },
    },
  },
};
