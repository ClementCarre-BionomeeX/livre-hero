// Act I · road of Maître Hylas, in two chapters. Chapter 1, "La Chancellerie des Noms": a blind greffier in the black
// tower; Page Onze given him as reader; the Bureau and a woman who wants her memory back; the black register in the
// vault; the audience with Mordace, who asks where the child of the white plain is. Chapter 2, "Le vin de Corvanne":
// the eve of the Fête, the delivery of Hautvent, Frère Baudoin's doubt, the archives at night, and the choice at
// mère Tissot's: wait for the child, go back into the tower, or go up to Mordace.
var HY = { place: "pallanche", noLead: true };
function P(o) { return Object.assign({ act: "I" }, HY, o); }
module.exports = {
  // ================================================================ chapter 1 · la Chancellerie des Noms
  HY_reveil: P({ title: "La cellule de Maître Hylas",
    fx: { questSeen: "HY_mordace" },
    text: [
      "Tu te réveilles avant les cloches, comme toujours. Il y a vingt ans que tu ne vois plus, et ton corps a gardé l'habitude de l'aube, comme un chien garde l'habitude d'un maître mort.",
      "Ta cellule est au septième étage de la tour, côté nord. Quatre pas sur trois. Un lit, une table, une cuvette, une étagère de livres que tu ne peux plus lire et que tu n'as pas eu le cœur de rendre. Tu passes le doigt sur leurs dos, un par un, en t'habillant. C'est ta prière.",
      "Tu as soixante-dix-huit ans. Tu es greffier de la Chancellerie des Noms depuis l'âge de quatorze ans. Tu lis encore, à ta façon : du bout des doigts, dans le creux que la plume laisse au vélin. Tu es le seul à savoir le faire. On te garde pour ça, et parce qu'on n'ose pas te chasser.",
      "On frappe. Une voix de jeune homme, essoufflée. « Maître Hylas ? Le Greffier-Majeur vous fait dire qu'il vous recevra ce soir, après complies. Et que vous aurez désormais une page pour vous faire la lecture. Elle vous attend au scriptorium. »",
    ],
    choices: [{ label: "Descendre", to: "HY_tour" }] }),

  HY_tour: P({ title: "La tour", hub: true,
    text: [
      "La tour de la Chancellerie, tu la connais à l'oreille et au nez. L'escalier principal, qui sent la cire. Le scriptorium au quatrième, et son bruit de pluie. Le Bureau, en bas, qui sent la sueur des pauvres. Les archives au troisième, la poussière, le plomb. Et plus bas que le Bureau, plus bas que les caves, une porte que tu n'as passée qu'une fois.",
      { if: { has: "hylas:page" }, text: "Page Onze marche à ta gauche, un pas en arrière, comme on le lui a appris. Elle ne parle que si tu lui parles." },
      "Ce soir, après complies, Mordace.",
    ],
    choices: [
      { label: "Le scriptorium, chercher ta page", to: "HY_scriptorium", hide: { seen: "HY_scriptorium" } },
      { label: "Le Bureau des Cessions", to: "HY_bureau", hide: { seen: "HY_bureau" } },
      { label: "La porte sous les caves", to: "HY_caveau", hide: { seen: "HY_caveau" } },
      { label: "La chapelle, où le frère Gauvain t'attend", to: "HY_Q_mur", hide: { seen: "HY_Q_mur" } },
      { label: "Ta cellule, le soir, avec Page Onze", hide: { any: [{ seen: "HY_Q_page" }, { not: { has: "hylas:page" } }] }, to: "HY_Q_page" },
      { label: "L'atelier de reliure, au deuxième", to: "HY_Q_relieur", hide: { seen: "HY_Q_relieur" } },
      { label: "Les cuisines, où Mahaut crie après les marmitons", to: "HY_k_cuisines", hide: { seen: "HY_k_cuisines" } },
      { label: "Sortir dans la ville, par la porte de l'Est", to: "HY_V_sortie", hide: { seen: "HY_V_sortie" } },
      { label: "Le dortoir des pages, sous les combles, la nuit", to: "HY_k_dortoir", hide: { seen: "HY_k_dortoir" } },
      { label: "Le maître des pages, qui cherche un greffier pour une épreuve", to: "HY_k_examen", hide: { seen: "HY_k_examen" } },
      { label: "Monter chez le Greffier-Majeur", to: "HY_mordace", big: true },
    ] }),

  HY_scriptorium: P({ title: "Page Onze",
    fx: { flag: "hylas:page", meet: "linette_p", questSeen: "HY_page" },
    text: [
      "Le maître des pages te conduit au deuxième rang et met dans ta main une petite main froide, tachée d'encre. « Page Onze. Elle a la meilleure écriture et la meilleure voix. Elle vous lira ce que vous voudrez. »",
      "Elle lit, en effet. Tu lui tends le premier registre venu et elle le lit d'une voix claire, sans hésiter, sans comprendre, comme on lit une langue étrangère dont on connaît les lettres. Des noms. Des dates. Des sous.",
      "À la pause, elle te demande, très bas : « Maître, est-ce que vous savez comment je m'appelais ? Avant. Les autres pages disent que c'est défendu de demander. »",
      "Tu le sais. Tu as tenu le registre gris pendant dix ans. Tu te souviens de toutes les lignes que tu as touchées. *Page Onze. Linette, neuf ans, des Teinturiers.*",
    ],
    choices: [
      { label: "« Linette. Tu t'appelais Linette. Ne le dis à personne. »", fx: { flag: "linette:nom_dit", quest: "HY_page", ep: ["perso", 800] }, to: "HY_linette_nom" },
      { label: "« Je ne sais pas, petite. » C'est plus sûr, pour elle", fx: { flag: "linette:nom_tu", quest: "HY_page", ep: ["perso", 300] }, to: "HY_linette_tu" },
    ] }),

  HY_linette_nom: P({ title: "Linette",
    text: [
      "Elle répète le nom, trois fois, sans voix, en bougeant les lèvres. Tu l'entends au souffle. Puis elle reprend sa lecture, et pendant tout l'après-midi, sa voix est un peu différente. Tu ne saurais pas dire en quoi.",
    ],
    choices: [{ label: "Continuer", to: "HY_tour" }] }),

  HY_linette_tu: P({ title: "Rien",
    text: [
      "« Merci, maître », dit-elle, comme si tu lui avais répondu. Elle reprend sa lecture. Sa voix est exactement la même qu'avant. C'est ce qu'on lui a appris.",
    ],
    choices: [{ label: "Continuer", to: "HY_tour" }] }),

  HY_bureau: P({ title: "Le Bureau des Cessions",
    fx: { meet: "baudoin", questSeen: "HY_rachat" },
    text: [
      "Le Bureau sent la sueur et le chou. Il y a la file, que tu entends respirer. Il y a Frère Baudoin, au comptoir, avec sa voix douce. Et il y a l'odeur froide du coffret de plomb, une odeur de cave en plein été.",
      "Une femme crie. On essaie de la faire sortir. « Je veux le reprendre ! Je l'ai vendu hier, je veux le reprendre, je vous rends vos sous ! » Baudoin, patient : « Une cession est définitive, madame. C'est écrit sur votre reçu. » « Je ne sais même plus ce que c'était ! Je sais seulement qu'il me manque ! »",
      "Elle s'appelle Marion Lebas. Tu le sais parce que tu as entendu Baudoin lire son reçu. *La nuit où son mari l'a battue. Deux sous.*",
    ],
    choices: [
      { label: "Poser ton sceau sur son reçu et annuler la cession. Tu en as encore le droit", fx: { flag: ["hylas:annule", "mordace:soupcon"], quest: "HY_rachat", ep: ["perso", 1000] }, to: "HY_rachat" },
      { label: "Lui expliquer, doucement, ce qu'elle a vendu, et lui demander si elle le veut vraiment", test: { dom: "social", label: "Parole" },
        win: { fx: { flag: "marion:garde", quest: "HY_rachat", ep: ["perso", 800] }, to: "HY_marion_choisit" },
        lose: { fx: { quest: "HY_rachat" }, to: "HY_marion_partie" } },
      { label: "Ne rien faire. Pas aujourd'hui. Pas avant Mordace", to: "HY_marion_partie" },
    ] }),

  HY_rachat: P({ title: "Le sceau d'argent",
    text: [
      "Tu poses ton sceau sur le comptoir. Baudoin se tait. Il n'y a pas eu d'annulation de cession depuis la fondation de la Chancellerie, et vous le savez tous les deux.",
      "Baudoin rouvre le coffret de plomb, en tremblant, et cherche une boîte sur une étagère derrière lui. Tu entends Marion Lebas respirer, puis s'arrêter de respirer, puis se mettre à pleurer, d'un pleur qui vient de très loin.",
      "« Merci, dit-elle. Merci. Je vous déteste. »",
      "Elle s'en va. Baudoin te regarde longtemps, tu le sens à sa façon de ne pas bouger. « Le Greffier-Majeur le saura, maître. »",
      "« Je sais. »",
    ],
    choices: [{ back: "HY_tour" }] }),

  HY_marion_choisit: P({ title: "Ce qu'on garde",
    text: [
      "Tu lui dis ce que dit le reçu. Elle t'écoute. Quand tu as fini, elle reste un long moment immobile. Puis elle dit : « Non. Gardez-le. Je ne veux pas le savoir. Mais je voulais savoir que je l'avais su. » Elle s'en va. Elle ne crie plus.",
    ],
    choices: [{ back: "HY_tour" }] }),

  HY_marion_partie: P({ title: "Dehors",
    text: ["Deux gardes la raccompagnent dans la rue. Elle crie encore longtemps sous les fenêtres. Puis plus du tout. Baudoin reprend sa file. « Suivant. »"],
    choices: [{ back: "HY_tour" }] }),

  // the black register
  HY_caveau: P({ title: "La porte sous les caves",
    fx: { questSeen: "HY_noir" },
    text: [
      "On descend par l'escalier des caves, puis par un autre, plus étroit, taillé dans le roc, dont les marches sont usées en creux. Il fait froid. Il fait de plus en plus froid. En bas, une porte de fer. Tu poses la main sur la serrure. Ce n'est plus la serrure d'il y a vingt ans. Quelqu'un l'a changée.",
      "Derrière la porte, tu le sais, il y a une salle ronde, et au milieu de la salle, sur un pupitre de pierre, le premier registre de la Chancellerie, celui des Fondateurs. Le registre noir. Tu l'as touché une fois. Tu en es ressorti aveugle, et tu n'as jamais dit à personne que les deux choses étaient liées, parce que tu n'en es pas sûr.",
    ],
    choices: [
      { label: "Ouvrir la serrure par un sortilège", test: { dom: "magie", label: "Sortilège" },
        win: { fx: { ep: ["perso", 600] }, to: "HY_salle_noire" }, lose: { fx: { flag: "hylas:bruit" }, to: "HY_gardien" } },
      { label: "Demander la clé à l'archiviste, en lui mentant", test: { dom: "social", label: "Mensonge", diff: -10 },
        win: { fx: { ep: ["perso", 600] }, to: "HY_salle_noire" }, lose: { fx: { flag: "mordace:soupcon" }, to: "HY_caveau_refus" } },
      { label: "Remonter. Pas aujourd'hui", back: "HY_tour" },
    ] }),

  HY_caveau_refus: P({ title: "L'archiviste",
    text: ["L'archiviste, Frère Amaury, t'écoute jusqu'au bout. « La clé du caveau est chez le Greffier-Majeur, maître. Depuis le printemps. Je lui dirai que vous l'avez demandée. Il sera content de savoir que vous vous intéressez encore aux archives. »"],
    choices: [{ back: "HY_tour" }] }),

  HY_gardien: P({ title: "Ce qui garde la porte",
    combat: { title: "Le gardien du caveau", enemies: ["glaneur_petit"], terrain: "bati", range: "contact",
      flee: { dom: "magie", label: "Remonter l'escalier à reculons, en traçant un signe de feu sur chaque marche", fx: { flag: "hylas:fui_caveau" }, to: "HY_tour" },
      win: { fx: { ep: ["seance", 1200], flag: "hylas:gardien_brise" }, to: "HY_salle_noire" },
      lose: { fx: { flag: "hylas:fui_caveau", pv: -1 }, to: "HY_tour" } },
    text: [
      "Le froid monte d'un coup, comme une eau. Quelque chose se lève dans le coin de l'escalier, quelque chose qui ne respire pas et qui craque comme de la neige tassée sous un pas. Tu ne le vois pas. Tu n'en as pas besoin.",
    ],
    choices: [] }),

  HY_salle_noire: P({ title: "Le registre noir",
    fx: { clue: "n_noir", quest: "HY_noir" },
    text: [
      "La salle ronde n'a pas changé. Le froid, le silence, et cette odeur que tu n'as sentie nulle part ailleurs, de pierre et de neige. Tu traverses jusqu'au pupitre. Tu poses les mains sur le registre.",
      "Le vélin est lisse comme une joue. Tu cherches le creux des plumes. Il y a, sur la première page, une liste de noms qui ne sont dans aucune langue d'Esquarre, gravés si profond que la plume a percé le vélin par endroits. Puis, en travers de chaque nom, un trait.",
      "Tu tournes les pages. Des centaines de pages, des milliers de noms barrés. Et à la fin, sur les dernières pages, des noms d'ici, d'une écriture récente, à peine sèche. *Roncière. Chaumont. Les Aulnes.* Et sur la toute dernière ligne, une ligne qui n'a pas trois jours :",
      "*Sauvelune.*",
      { if: { souv: "hylas:enfant" }, text: "Tu restes longtemps la main posée sur ce mot." },
    ],
    choices: [{ label: "Remonter, avant qu'on te trouve", back: "HY_tour" }] }),

  // the audience
  HY_mordace: P({ title: "Le Greffier-Majeur",
    fx: { meet: "mordace" },
    text: [
      "Le cabinet du Greffier-Majeur est au sommet de la tour, sous la plume et la clé de fer. Il y fait chaud. Il y a un feu, en juillet. Mordace a toujours eu froid.",
      "« Maître. » Il se lève, il vient à toi, il prend tes deux mains dans les siennes. Elles sont froides. Sa voix n'a pas changé depuis le temps où il t'apportait de la tisane et posait les meilleures questions de toute la Chancellerie. « Asseyez-vous. »",
      { if: { seen: "HY_caveau" }, text: "« Vous avez fait le tour de la maison, aujourd'hui. » Un temps. « Jusqu'à l'escalier des caves. »" },
      { if: { all: [{ not: { seen: "HY_caveau" } }, { any: [{ seen: "HY_bureau" }, { seen: "HY_scriptorium" }] }] }, text: "« Vous avez fait le tour de la maison, aujourd'hui. On me l'a dit. »" },
      { if: { has: "hylas:annule" }, text: "« Une annulation de cession. La première en trois cents ans. Vous m'auriez demandé, je vous l'aurais accordée. Vous ne m'avez pas demandé. »" },
      "Il te sert du vin. Du vin de Corvanne. Il se souvient de tout, lui.",
      "« Je vais être franc, maître, parce que vous l'avez toujours été avec moi. Il y a vingt ans, vous êtes parti en mission dans le Nord, au-delà des Hautes-Combes. Vous êtes revenu aveugle, au bout de trois mois, et seul. Le rapport dit seul. » Il pose son verre. « Je ne crois pas que vous soyez revenu seul. Je crois que vous avez ramené quelque chose, et que vous l'avez laissé quelque part. Et j'ai besoin de savoir où. »",
    ],
    choices: [
      { label: "Mentir. « J'étais seul. J'ai failli mourir seul. »", test: { dom: "social", label: "Mensonge", diff: -15, help: [{ if: { not: { has: "mordace:soupcon" } }, v: 15 }] },
        win: { fx: { flag: "hylas:ment", ep: ["perso", 1000] }, to: "HY_mordace_mensonge" },
        lose: { fx: { flag: ["hylas:ment", "mordace:sait_mensonge"] }, to: "HY_mordace_mensonge_rate" } },
      { label: "Lui demander d'abord ce que veut dire la dernière ligne du registre noir", hide: { not: { seen: "HY_salle_noire" } }, to: "HY_mordace_registre" },
      { label: "Te taire. Et cette nuit, donner ce souvenir à la neige, pour qu'il ne puisse jamais le prendre", tag: "Souvenir donné", stain: true, if: { souv: "hylas:enfant" }, why: "Tu ne l'as plus.",
        fx: { souv: "hylas:enfant", flag: "hylas:oublie_enfant", ep: ["perso", 1500] }, to: "HY_mordace_silence" },
    ] }),

  HY_mordace_registre: P({ title: "La dernière ligne",
    text: [
      "Mordace ne répond pas tout de suite. Tu entends le feu, et sa respiration, très calme.",
      "« Vous avez toujours posé les meilleures questions, vous aussi, maître. » Il se lève. « Une Chancellerie ne garde pas les noms. Elle garde l'ordre des noms. Ce qui doit être retenu. Ce qui doit être laissé. Les Fondateurs l'ont su. Nous l'avons oublié. Je le rappelle. »",
      "« Quatre cents personnes. »",
      "« Quatre cents personnes que personne n'oubliera, maître, puisque personne ne s'en souvient. » Il revient près de toi. « Maintenant, à votre tour. L'enfant. »",
    ],
    choices: [
      { label: "Mentir", test: { dom: "social", label: "Mensonge", diff: -25 },
        win: { fx: { flag: "hylas:ment", ep: ["perso", 1000] }, to: "HY_mordace_mensonge" },
        lose: { fx: { flag: ["hylas:ment", "mordace:sait_mensonge"] }, to: "HY_mordace_mensonge_rate" } },
      { label: "Te taire, et cette nuit, donner ce souvenir à la neige", tag: "Souvenir donné", stain: true, if: { souv: "hylas:enfant" }, why: "Tu ne l'as plus.",
        fx: { souv: "hylas:enfant", flag: "hylas:oublie_enfant", ep: ["perso", 1500] }, to: "HY_mordace_silence" },
    ] }),

  HY_mordace_mensonge: P({ title: "Seul",
    text: [
      "Tu lui racontes le froid, la faim, la plaine blanche, la cécité qui vient comme un brouillard. Tout est vrai, sauf un enfant. Tu mens bien. Tu as appris de lui, ou il a appris de toi, tu ne sais plus.",
      "Il t'écoute. Il te remercie. Il te raccompagne à la porte, une main sous ton coude. « Reposez-vous, maître. Demain, j'aurai besoin de vous pour certifier une livraison. »",
    ],
    choices: [{ label: "Redescendre", to: "HY_nuit" }] }),

  HY_mordace_mensonge_rate: P({ title: "Le silence de Mordace",
    text: [
      "Il ne dit rien pendant si longtemps que tu crois qu'il est sorti. Puis : « Vous mentez mal, maître. Vous avez toujours mal menti. C'est pour ça que je vous aimais. »",
      "Il te raccompagne à la porte, une main sous ton coude. « Demain, j'aurai besoin de vous pour certifier une livraison. Et après, nous reparlerons. »",
    ],
    choices: [{ label: "Redescendre", to: "HY_nuit" }] }),

  HY_mordace_silence: P({ title: "Ce que tu donnes",
    text: [
      "Tu ne dis rien. Il attend. Tu ne dis rien. Il finit par sourire, tu l'entends à sa voix. « Bien. Nous avons le temps. »",
      "Cette nuit-là, dans ta cellule, tu ouvres la fenêtre étroite qui donne sur la cour. Il y a, sur le rebord, une poussière blanche, froide, que le vent apporte du sommet de la tour. Tu en prends une pincée. Tu penses à trois jours de marche dans la neige, à un poids chaud contre ta poitrine, à un moulin. Tu souffles.",
      "Quand tu refermes la fenêtre, tu sais que tu as donné quelque chose. Tu ne sais plus quoi. Tu sais que c'était à toi, et que c'était important, et que maintenant, personne ne pourra jamais te le prendre.",
    ],
    choices: [{ label: "Te coucher", to: "HY_nuit" }] }),

  HY_nuit: P({ title: "La cellule, la nuit",
    text: [
      "Tu es allongé dans le noir, qui est le même que le jour. La tour respire autour de toi. Quelque part au-dessus, sous la plume et la clé, Mordace ne dort pas non plus.",
    ],
    choices: [{ label: "Attendre le matin", fx: { flag: "ch:hylas:1", resume: "HY_jour" }, to: "C_carrefour" }] }),

  // ================================================================ chapter 2 · le vin de Corvanne
  HY_jour: P({ title: "La veille de la Fête",
    fx: { time: 54 },
    text: [
      "Trois jours ont passé. La tour est devenue une ruche. On entend des pas dans tous les escaliers, des portes, des voix. Les pages copient jour et nuit. Mordace ne t'a pas rappelé. Ce matin, un garde t'a conduit à la porte de l'Est.",
      { if: { has: "ysolde:voie=obeit" }, text: "Une colonne entre dans la cour. Tu l'entends : des pieds nus, des chaînes, des enfants, et des chevaux ferrés. Une voix de femme, sèche, donne le compte à un greffier. Cent dix-huit." },
      { if: { has: "ysolde:voie=ruse" }, text: "Une colonne entre dans la cour. Une voix de femme donne le compte à un greffier : cent treize. Le greffier, une voix fluette que tu reconnais, celle de Frère Sévrin, recompte, et ne dit rien." },
      { if: { has: "ysolde:voie=deserte" }, text: "La colonne attendue n'arrive pas. On parle de cordes coupées dans les faubourgs, de soldats de la reine qui ont tourné bride. Des gardes noirs passent en courant. Un greffier te met quand même une liste sous la main." },
      { if: { not: { has: "ch:ysolde:2" } }, text: "Une colonne arrive par la route de Varre. On t'a fait venir pour la recevoir. En attendant, on te fait asseoir sur un banc, au soleil, comme un vieux chien." },
      "« Le Greffier-Majeur demande que vous certifiiez la livraison, maître. Votre sceau, ici. »",
    ],
    choices: [
      { label: "Poser ton sceau. Il est trop tôt pour te perdre", fx: { flag: "hylas:certifie" }, to: "HY_baudoin" },
      { label: "Refuser. « Je ne certifie pas ce que je n'ai pas lu. »", fx: { flag: ["hylas:refuse", "mordace:soupcon"], ep: ["perso", 800] }, to: "HY_baudoin" },
      { label: "Demander qu'on te lise chaque nom, un par un, avant de signer", fx: { flag: "hylas:noms_lus", time: 4, ep: ["perso", 1200] }, to: "HY_noms" },
    ] }),

  HY_noms: P({ title: "Un par un",
    text: [
      { if: { not: { has: "ysolde:voie=deserte" } }, text: "Le greffier soupire et commence. Tu l'arrêtes au troisième. « Plus lentement. » Il reprend. Tu répètes chaque nom après lui, à voix haute, dans la cour, devant les prisonniers. Quatre heures. Les gardes s'assoient. Les prisonniers se taisent. À la fin, une femme dit, en esquarrois, avec un accent de Corvanne : « Merci, vieil homme. »" },
      { if: { has: "ysolde:voie=deserte" }, text: "Le greffier soupire et commence. Tu l'arrêtes au troisième. « Plus lentement. » Il reprend. Tu répètes chaque nom après lui, à voix haute, dans la cour vide, devant les gardes. Quatre heures. Les gardes s'assoient. Personne ne répond à aucun nom. À la fin, le greffier dit, plus bas qu'au début : « C'est tout, maître. »" },
      "Tu poses ton sceau. Tu sais leurs noms, maintenant. Tous. Tu les sauras jusqu'à ta mort.",
    ],
    choices: [{ label: "Rentrer", to: "HY_baudoin" }] }),

  HY_baudoin: P({ title: "Frère Baudoin",
    fx: { questSeen: "HY_baudoin" },
    text: [
      "Le soir, Frère Baudoin frappe à ta porte. Il ne s'assied pas. Il reste debout près de la porte, et tu entends ses mains qui se tordent.",
      "« Maître, je souffle depuis deux ans. Six jours sur sept. Des centaines de fois par jour. Et depuis une semaine, quand je rentre chez moi, je ne sais plus par quelle rue on y va. Hier, j'ai dû demander mon chemin. » Sa voix se casse. « Qu'est-ce que c'est, la poudre ? D'où elle vient ? On ne me l'a jamais dit. »",
    ],
    choices: [
      { label: "Lui dire ce que tu sais, et ce que tu crois", fx: { flag: "baudoin:sait", quest: "HY_baudoin", ep: ["perso", 1000] }, to: "HY_baudoin_sait" },
      { label: "Lui dire d'arrêter. De partir de Pallanche ce soir, sans rien dire", fx: { flag: "baudoin:parti", quest: "HY_baudoin", ep: ["perso", 800] }, to: "HY_baudoin_part" },
      { label: "Lui dire de continuer, et de t'apporter, chaque soir, un reçu du jour", fx: { flag: "baudoin:espion", quest: "HY_baudoin", ep: ["perso", 800] }, to: "HY_baudoin_espion" },
    ] }),

  HY_baudoin_sait: P({ title: "Ce que tu crois",
    text: [
      { if: { seen: "HY_salle_noire" }, text: "Tu lui parles du registre noir. Des noms barrés. De la dernière ligne." },
      { if: { not: { seen: "HY_salle_noire" } }, text: "Tu lui parles de la porte sous les caves. Du registre noir, que tu as touché une fois. Du froid qu'il fait là-dessous, et qui n'est pas celui d'une cave." },
      "Tu ne lui dis pas tout. Tu ne sais pas tout. Il t'écoute sans un mot. À la fin, il dit : « Je le savais. Je crois que je le savais. » Il part. Tu ne sais pas ce qu'il va faire. Lui non plus.",
    ],
    choices: [{ label: "Sortir. C'est l'heure de vêpres", to: "HY_archives" }] }),

  HY_baudoin_part: P({ title: "Par la porte des Teinturiers",
    text: ["Il hésite. Puis il dit : « Ma mère habite à Pont-de-Saule. » Tu entends la porte se refermer, et ses pas, rapides, dans l'escalier. Il aura demain un remplaçant au comptoir. Il y a toujours un remplaçant."],
    choices: [{ label: "Sortir. C'est l'heure de vêpres", to: "HY_archives" }] }),

  HY_baudoin_espion: P({ title: "Un reçu par jour",
    text: ["Il te regarde longtemps, tu le sens. « Et moi, maître ? Qui va se souvenir de moi ? » Tu ne réponds pas. Il part. Le lendemain matin, sous ta porte, il y aura un reçu. Et le surlendemain. Et un jour, il n'y en aura plus."],
    choices: [{ label: "Sortir. C'est l'heure de vêpres", to: "HY_archives" }] }),

  HY_archives: P({ title: "Les archives, en passant",
    text: [
      "Pour descendre à la porte des Teinturiers, tu passes par les archives des cessions. C'est un détour. Tu le fais tous les soirs depuis trois jours.",
      { if: { seen: "PI_hylas" }, after: "PI_linge", text: "Il y a eu un voleur, ici, la nuit dernière. Tu étais assis là, entre deux étagères, quand il est entré. Il sentait la suie, le plomb des gouttières et la sueur des lavandières. Il avait la voix de quelqu'un de très jeune et de très fatigué." },
      { if: { seen: "PI_hylas" }, before: "PI_linge", text: "Il y a eu un voleur, ici, la nuit dernière. Tu étais assis là, entre deux étagères, quand il est entré. Il sentait la suie et le plomb des gouttières. Il avait la voix de quelqu'un de très jeune et de très fatigué." },
      { if: { has: "pie:choix=boite" }, text: "Au troisième rang, la place d'une boîte est vide. Tu passes le doigt sur la poussière autour." },
      { if: { has: "pie:choix=liste" }, text: "Sur le grand pupitre, le registre rouge a une page en moins. On ne s'en est pas encore aperçu. On s'en apercevra." },
      { if: { has: "pie:choix=linette" }, text: "Au scriptorium, au deuxième rang, il y a une place vide. La page qu'on t'envoie désormais pour la lecture s'appelle Page Vingt-Deux. Tu ne lui demandes pas son nom." },
      { if: { not: { seen: "PI_hylas" } }, text: "Rien n'a bougé. Les boîtes de plomb, sur leurs étagères. Au-dessus, sur les toits, il y a parfois un pas léger, qui va et vient, comme celui de quelqu'un qui cherche par où entrer." },
    ],
    choices: [{ label: "Sortir par la porte des Teinturiers", to: "HY_tissot" }] }),

  HY_tissot: P({ title: "Chez la mère Tissot",
    text: [
      "La mère Tissot tient une taverne de quatre tables dans une ruelle des Teinturiers, et elle sert le seul vin de Corvanne de tout Pallanche, sous le comptoir, depuis la guerre. Tu viens ici tous les soirs depuis trente ans. Elle pose ton verre devant toi sans rien dire, et elle te parle de ses rhumatismes.",
      { if: { has: "croise:pie_enfant" }, text: "Ce soir, quelqu'un est assis à la table du fond. Tu entends un souffle jeune, une respiration de quelqu'un qui a marché longtemps, et le froissement d'un papier qu'on plie et qu'on déplie. Personne ne vient vers toi." },
      { if: { not: { has: "croise:pie_enfant" } }, text: "Ce soir, il n'y a personne d'autre que toi. La mère Tissot a mis des lampions pour la Fête. Tu entends leur papier frémir au vent." },
      { if: { has: "hylas:oublie_enfant" }, text: "Tu ne sais plus pourquoi tu viens ici tous les soirs depuis trois jours, à vêpres, au lieu de complies, comme avant. Tu sais seulement que tu dois y être." },
      "Demain soir, les cent cloches.",
    ],
    choices: [
      { label: "Rester. Attendre, jusqu'à la fermeture s'il le faut", fx: { flag: "hylas:voie=attendre", ep: ["histoire", 3000] }, to: "HY_fin" },
      { label: "Retourner dans la tour, et trouver comment arrêter les cloches", fx: { flag: "hylas:voie=cloches", ep: ["histoire", 3000] }, to: "HY_fin" },
      { label: "Monter chez Mordace, cette nuit, et lui parler une dernière fois", fx: { flag: "hylas:voie=mordace", ep: ["histoire", 3000] }, to: "HY_fin" },
    ] }),

  HY_fin: P({ title: "Maître Hylas, la veille",
    fx: { flag: "prologue:hylas", quest: "HY_mordace", catchup: 5, catchupWhy: "la Chancellerie des Noms" },
    text: [
      { if: { has: "hylas:voie=attendre" }, text: "Tu restes. La mère Tissot ferme les volets autour de toi et te laisse la clé, comme elle le fait parfois. Tu as tout ton temps. Tu en as eu vingt ans." },
      { if: { all: [{ has: "hylas:voie=attendre" }, { has: "croise:pie_enfant" }] }, text: "À la table du fond, le papier se froisse encore." },
      { if: { has: "hylas:voie=cloches" }, text: "Tu remontes l'escalier de la tour en comptant les marches, et tu t'arrêtes devant la porte du grand beffroi, celle qui commande aux cent cloches de la ville par cent cordes et un seul mécanisme. Elle est fermée. Tu as une nuit et un jour." },
      { if: { has: "hylas:voie=mordace" }, text: "Tu montes. Le feu brûle encore dans le cabinet du Greffier-Majeur, à minuit, en juillet. La porte est ouverte. « Entrez, maître, dit Mordace. Je vous attendais. »" },
    ],
    choices: [{ label: "Attendre la nuit", fx: { flag: "ch:hylas:2" }, to: "C_carrefour" }] }),
};
