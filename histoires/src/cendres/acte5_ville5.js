// Act V · three more sights of Pallanche under the snow on the last night (the child leads, "tu" masculine), off
// V_ville: the public letter-writer at his table on the place aux Clercs (reads iv:lettre_gardee, iv:lettre_moulin),
// the school of the rue des Chanoines where the children chant their names, and the cemetery of Saint-Gilles where
// the sexton recuts the stones (reads iv:ossuaire=nourri).
var A = { act: "V", noLead: true, place: "pallanche" };
function P(o) { return Object.assign({}, A, o); }
var BACK = [{ back: "V_ville" }];
module.exports = {
  V_v_ecrivain: P({ title: "La table de l'écrivain",
    text: [
      "Au coin de la place aux Clercs, à l'écart de la queue, l'écrivain public est à sa table. Il n'a pas pris de jeton. Il écrit. La neige tombe sur sa feuille, et là où elle tombe, l'encre pâlit. Il trempe sa plume, il réécrit par-dessus, il pâlit encore, il réécrit. Ses doigts sont bleus.",
      { if: { has: "iv:lettre_gardee" }, text: "Il te voit. Il te reconnaît, lui, ou il reconnaît quelque chose. Il ouvre son coffre, sous la table, en silence, et il en sort une liasse pliée en quatre, de son écriture à lui, de tes mots à toi. La lettre pour personne. « Je l'ai relue tous les soirs, dit-il. Pour qu'elle ne s'efface pas. Je ne sais plus qui me l'a dictée. Mais je sais tout ce qu'il y a dedans. »" },
      { if: { all: [{ has: "iv:lettre_moulin" }, { not: { has: "iv:lettre_gardee" } }] }, text: "Il ne te reconnaît pas. Mais sur le coin de sa table, sous une pierre, il y a une lettre arrivée pour toi, pliée, cachetée d'un pain de cire, salie par la route : *Pour le petit du moulin, aux bons soins de l'écrivain de la place aux Clercs.* L'écriture est grosse, appliquée, celle de quelqu'un qui n'écrit pas souvent. Agathe. Elle a trouvé quelqu'un, à Pont-de-Saule, pour tenir la plume." },
      "« Je copie la queue, dit-il. Tous ceux qui attendent. Leurs noms, comme ils me les disent, tant qu'ils s'en souviennent. Si je m'arrête, il n'y aura plus personne pour les avoir écrits. »",
    ],
    choices: [
      { label: "Lire la lettre gardée, à voix haute, pour lui et pour toi", hide: { not: { has: "iv:lettre_gardee" } }, fx: { flag: "v:lettre_lue", ep: ["perso", 1000] }, to: "V_v_ecrivain_lire" },
      { label: "Ouvrir la lettre d'Agathe", hide: { any: [{ not: { has: "iv:lettre_moulin" } }, { has: "iv:lettre_gardee" }] }, fx: { flag: "v:lettre_agathe", ep: ["perso", 1000] }, to: "V_v_ecrivain_agathe" },
      { label: "Lui dicter les noms de la queue que tu connais, pour qu'il les écrive", test: { dom: "savoir", label: "Les noms de la queue", help: [{ if: { seen: "V_q_bout" }, v: 15 }, { if: { has: "v:queue=vide" }, v: 10 }] },
        win: { fx: { flag: "v:ecrivain", ep: ["perso", 800] }, to: "V_v_ecrivain_noms" }, lose: { to: "V_v_ecrivain_blanc" } },
    ] }),
  V_v_ecrivain_lire: P({ title: "La lettre pour personne",
    text: [
      "Tu lis. Ta voix tremble au début, puis plus. Le blanc. Les marcheurs. La femme qui chante. Le procès. Tout ce que tu as dicté à cette table, de peur de l'oublier un matin, et que tu n'as pas oublié. Les gens de la queue, les plus proches, tournent la tête. Ils écoutent. Ils ne comprennent pas. Ils écoutent quand même.",
      "Quand tu as fini, l'écrivain reprend la liasse, la plie, et la remet dans le coffre. « Je la garde encore, dit-il. Elle n'est pas finie. Il manque la fin. Tu reviendras me la dicter. » Tu dis oui. Tu as envie d'y croire. Pour la première fois depuis Sauvelune, tu as envie d'y croire.",
    ],
    choices: BACK }),
  V_v_ecrivain_agathe: P({ title: "Ta place à table",
    text: [
      "Une seule phrase, au milieu de la feuille, en grosses lettres que quelqu'un d'autre a tracées pour elle, et une croix en dessous, à la place d'une signature, appuyée si fort que la plume a percé le papier.",
      "*On te la garde.*",
      "Tu replies la lettre. Tu la mets contre ta peau, sous ta chemise, à l'endroit où l'on met les choses qui ne doivent pas avoir froid. La neige peut bien tomber sur toi, maintenant. Il y a une croix d'encre, contre ton cœur, qui sait qui tu es.",
    ],
    choices: BACK }),
  V_v_ecrivain_noms: P({ title: "La copie de la queue",
    text: ["Tu remontes la queue avec lui, une main sur son épaule pour le guider, et tu dis les noms que tu sais, ceux qu'on t'a dits en chemin, ceux que tu as lus sur les jetons. Il écrit. Il écrit vite, maintenant, plus vite que la neige. Au bout d'une heure, il a une liste de deux cents noms, et il la met sous sa chemise, contre lui, comme un manteau. « Ils sont là, dit-il. Quoi qu'il arrive, là-haut, ils sont là. »"],
    choices: BACK }),
  V_v_ecrivain_blanc: P({ title: "La neige sur la page",
    text: ["Tu dis des noms. Il les écrit. Mais tu en sais trop peu, et la neige va plus vite que vous deux, et chaque nom que vous écrivez pâlit avant que vous ayez fini le suivant. À la fin, il pose sa plume. Il a trente noms, à demi effacés. Il les recopie une dernière fois, à l'intérieur de sa manche, sur la doublure, à l'encre, là où la neige ne va pas. « Trente, dit-il. C'est trente de plus que rien. »"],
    choices: BACK }),
  V_v_ecole: P({ title: "L'école des Chanoines",
    text: [
      "Rue des Chanoines, une petite école de garçons, deux fenêtres éclairées. Sur le toit, il n'y a pas de neige. Pas un flocon. Tout autour, la rue est blanche jusqu'aux genoux. Le toit de l'école est noir, mouillé, net, comme sous une pluie d'été.",
      "Tu t'approches de la fenêtre. Dedans, une trentaine d'enfants, debout sur les bancs, et un vieux maître en robe qui bat la mesure avec une règle. Ils récitent. Leurs noms. Chacun le sien, puis celui du voisin, puis celui de la mère du voisin, en chœur, en rond, sans s'arrêter, depuis le coucher du soleil. Ils sont enroués. Ils continuent.",
    ],
    choices: [
      { label: "Entrer, et réciter avec eux", fx: { flag: "v:ecole", ep: ["perso", 800] }, to: "V_v_ecole_reciter" },
      { label: "Les laisser, et ne pas déranger la ronde", to: "V_v_ecole_dehors" },
    ] }),
  V_v_ecole_reciter: P({ title: "La ronde des noms",
    text: [
      "Le maître te voit entrer, couvert de neige. Il ne s'arrête pas de battre la mesure. Il te montre un bout de banc, du menton. Tu montes. Le garçon à côté de toi dit son nom, Tiennot, puis il se tourne vers toi et attend. Tu dis le tien. Celui de Sauvelune. Puis, après un temps, l'autre aussi. Le garçon le répète, sans faire d'histoire, et le passe au suivant.",
      "Ton nom fait le tour de la classe. Trente bouches le disent, mal, de travers, avec l'accent de la ville basse. Il revient vers toi, usé, chaud, comme une pièce qu'on se serait passée de main en main. Sur le toit, tu entends la neige qui fond.",
    ],
    choices: BACK }),
  V_v_ecole_dehors: P({ title: "Le toit noir",
    text: ["Tu restes dehors, sous la fenêtre. Tu écoutes. Les noms passent à travers la vitre, en rond, comme une roue. Tu ne connais aucun de ces enfants. À la fin de la troisième ronde, tu les connais tous. Tu repars avec trente noms dans la tête, confiés à ta garde."],
    choices: BACK }),
  V_v_cimetiere: P({ title: "Le cimetière de Saint-Gilles",
    text: [
      "Derrière Saint-Gilles, le cimetière, sous la neige. Les croix, les stèles, les dalles. Les noms partent des pierres, comme ils partent des linteaux et des registres : les lettres gravées se remplissent de blanc, et quand on souffle dessus, il n'y a plus rien de creusé. La pierre est lisse.",
      "Au milieu des tombes, une lanterne posée par terre, et le fossoyeur, à genoux devant une stèle, avec un ciseau et un maillet. Il regrave. Lettre à lettre, dans la pierre lisse, de mémoire. Tac. Tac. Tac.",
      { if: { has: "iv:ossuaire=nourri" }, text: "Il te reconnaît. Il lève son maillet, en guise de salut. « Les carnets, dit-il. J'en ai rempli trois, depuis l'autre fois. Ils sont dans ma loge, si jamais. Je n'en ai pas besoin, pour ça. » Il tape sur la pierre. « Ça, je le sais par cœur. Trente-deux ans que je les enterre. »" },
    ],
    choices: [
      { label: "Prendre un ciseau, et regraver avec lui", test: { dom: "combat", label: "Le ciseau et le maillet", help: [{ if: { has: "iv:ossuaire=nourri" }, v: 15 }, { if: { has: "iv:linteaux" }, v: 10 }] },
        win: { fx: { flag: "v:cimetiere", ep: ["perso", 800] }, to: "V_v_cimetiere_graver" }, lose: { fx: { pv: -1 }, to: "V_v_cimetiere_main" } },
      { label: "Lui demander qui il regrave d'abord", to: "V_v_cimetiere_qui" },
    ] }),
  V_v_cimetiere_graver: P({ title: "Tac, tac",
    text: ["Il te donne le ciseau de rechange. Il te dicte. Tu graves. C'est facile, en fin de compte : la pierre se souvient du chemin, elle se laisse faire là où les lettres étaient. Vous allez de tombe en tombe, lui à une rangée, toi à l'autre. Tu ne connais aucun de ces morts. Lui les connaît tous, et pour chacun il te dit une chose, en plus du nom. *Elle trichait aux cartes. Il avait une jambe de bois. Il chantait bien.* Tu graves les noms. Tu gardes le reste."],
    choices: BACK }),
  V_v_cimetiere_main: P({ title: "Le maillet",
    text: ["Tu prends le ciseau. Le maillet t'échappe au troisième coup, et tu te tapes sur les doigts. Le fossoyeur rit, sans méchanceté. Il reprend son ciseau. « Laisse, dit-il. Tiens-moi la lanterne, plutôt. C'est déjà ça. » Tu tiens la lanterne. Tu le regardes graver, une tombe, deux, dix. Le froid te mord les doigts. Il ne s'arrête pas."],
    choices: BACK }),
  V_v_cimetiere_qui: P({ title: "Les premiers",
    text: ["« Les enfants, dit-il, sans lever les yeux. Toujours les enfants d'abord. Les vieux, on s'en souviendra un peu, de toute façon, il y aura toujours quelqu'un pour dire *le vieux Machin, qui avait une jambe de bois*. Les enfants morts petits, personne ne s'en souvient que leur mère, et leur mère est dans la queue. » Il souffle sur la pierre. Les lettres sont nettes. Une petite fille, morte à trois ans, il y a quarante ans. Il passe à la suivante."],
    choices: BACK }),
};
