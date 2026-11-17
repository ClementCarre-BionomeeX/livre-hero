// L'Île Folle-Aiguille · side story « La fontaine neuve » (owes its question to An Enemy of the People: what is a true
// report worth against the prosperity of a whole town, and who pays for saying it?). Act II, Morlenc: the bloody flux
// has come back to the Quai-aux-Harengs, in the three streets around the new fountain the aldermen inaugurated in
// spring, paid for by the Clavières bank. Victorine follows the pipe and finds that it runs under the tanneries' pit.
// The herring fair opens in a week. She reads her report at the public session of the Academy (wr:publie), takes it to
// the baron to have the pipe moved quietly after the fair (wr:baron), or leaves it sealed with old Brindejonc, to be
// opened once the ship has sailed (wr:lettre). Wired in A2v_jours.
module.exports = {
  passages: {
    WR_flux: { act: "II", title: "La fontaine neuve", place: "quai_hollandes", ambiance: "ville",
      text: [
        "C'est un garçon des Sœurs de la Basse-Fosse qui vient la chercher : Sœur Marthe fait dire qu'il y a quatre enfants du Quai-aux-Harengs couchés dans la salle basse de la maison, avec le flux de sang, et qu'elle n'aime pas ça. Victorine non plus. Elle les examine. Quatre enfants, puis une mère, puis un vieux tonnelier, tous de la rue du Hareng-Saur, de la rue des Saurisseurs et de la ruelle Saint-Mathurin, trois rues qui se touchent, et qui puisent toutes à la même eau.",
        "La fontaine neuve du Quai-aux-Harengs est une merveille. On l'a inaugurée au printemps, en grande pompe, avec un discours du premier échevin, un cantique, et une plaque de bronze qui remercie la Banque Clavières de sa générosité. Elle a trois vasques, des dauphins qui crachent, un dieu marin barbu aux joues gonflées, et une eau abondante, fraîche, un peu grise, qui vient d'une source des coteaux par un conduit neuf, de terre cuite, enterré sous la ville.",
        "Victorine passe deux jours à suivre le conduit. Elle soudoie un fontainier, ivre, qui lui montre le plan. Elle descend dans une cave, puis dans une autre, avec une lanterne et ses jupes relevées, et elle trouve, sous la rue des Tanneurs, là où le conduit passe à deux pieds sous la grande fosse des tanneries, des tuiles fendues, et un suintement noir, épais, qui sent la chaux, la peau morte et l'urine, et qui goutte, lentement, dans l'eau qui va aux dauphins.",
      ],
      choices: [{ label: "Écrire le rapport, la nuit, au Cormoran", to: "WR_rapport" }] },
    WR_rapport: { act: "II", title: "La fontaine neuve", place: "quai_hollandes", ambiance: "nuit",
      text: [
        "Elle l'écrit en une nuit, à la chandelle, de sa petite écriture serrée de praticienne : les cas, les rues, les dates, le plan du conduit, la cave, les tuiles, le suintement. Elle conclut qu'il faut fermer la fontaine sur-le-champ, refaire le conduit, et faire bouillir l'eau de ces trois rues jusqu'à nouvel ordre. C'est un bon rapport. Elle le relit au matin, et elle sait exactement ce qu'il va coûter.",
        "Car la foire aux harengs ouvre dans six jours. Trois semaines de foire, la moitié du revenu de la ville pour l'année. Des milliers de gens qui viendront boire, manger, acheter, et qui ne viendront pas si l'on dit que l'eau du Quai-aux-Harengs donne le flux de sang. Refaire le conduit, c'est éventrer la rue des Tanneurs, en pleine foire. C'est aussi reconnaître que le cadeau de la Banque Clavières empoisonne les enfants, au moment où la Banque Clavières arme un navire, et où la médecin de ce navire mange à la table du baron.",
        "Le vieux notaire Brindejonc, à qui elle montre le rapport, le lit avec ses lunettes au bout du nez, et le lui rend en soupirant. « C'est vrai, dit-il. Tout est vrai. Ma pauvre amie, vous allez vous faire haïr par toute une ville, à commencer par ceux que vous sauverez. C'est la règle. On pardonne tout aux médecins, sauf d'avoir raison avant les autres. »",
      ],
      choices: [
        { label: "Lire le rapport à la séance publique de l'Académie, devant tout Morlenc", fx: { flag: "wr:publie" }, to: "WR_publie" },
        { label: "Porter le rapport au baron, et lui demander de faire refaire le conduit après la foire", fx: { flag: "wr:baron" }, to: "WR_baron" },
        { label: "Le confier, cacheté, à Brindejonc, pour qu'il l'ouvre quand la Cormorane aura appareillé", fx: { flag: "wr:lettre" }, to: "WR_lettre" },
      ] },
    WR_publie: { act: "II", title: "La fontaine neuve", place: "haute_ville", ambiance: "ville",
      text: [
        "La séance publique de l'Académie de Morlenc a lieu le jeudi, dans la grande salle du palais des échevins, sous un plafond peint où des allégories obèses couronnent un Commerce barbu. Victorine demande la parole, au milieu d'une communication sur les mœurs du hareng. On la lui accorde par politesse, en souriant. On cesse de sourire à la troisième phrase. À la sixième, le premier échevin s'est levé. À la dixième, on parle tous à la fois.",
        "On lui dit qu'elle est une étrangère, de Varnèse, une femme, une veuve de mauvaises dettes, une protégée du baron qui crache dans la main qui la nourrit. On dit que ses tuiles fendues sont une invention. On dit que les enfants du Quai-aux-Harengs ont le flux parce qu'ils mangent du poisson pourri, ce qui est vrai aussi. Un apothicaire du Quai des Hollandes se lève pour assurer que l'eau de la fontaine est la meilleure de la ville et qu'il en boit tous les matins. Il est très pâle. Le lendemain, on placarde son nom, à elle, sur la porte du Cormoran, avec un mot qu'on n'écrit pas dans les rapports.",
        "La fontaine n'est pas fermée. Mais trois jours avant la foire, sans un mot, on voit arriver rue des Tanneurs des terrassiers payés par personne, qui éventrent la chaussée de nuit et changent vingt pieds de conduit. Le flux s'arrête. Personne ne dit pourquoi. Personne ne remercie Victorine. Le jour où elle embarque, un enfant du Quai-aux-Harengs lui jette une pierre, que sa mère lui a mise dans la main. Elle la ramasse. Elle la garde. Elle la pose, à bord, sur sa table, à côté de l'encrier.",
      ],
      choices: [{ label: "Regagner le Cormoran", fx: { quest: "WR" }, back: "A2v_jours" }] },
    WR_baron: { act: "II", title: "La fontaine neuve", place: "haute_ville", ambiance: "ville",
      text: [
        "Le baron la reçoit dans son cabinet, entre deux rendez-vous, et il lit le rapport debout, d'un trait, sans s'asseoir, en tournant les pages avec un ongle. Puis il le pose sur son bureau. Il la remercie. Il dit que c'est remarquable, qu'elle a l'œil d'un procureur, et qu'il a eu raison de l'engager. Il dit qu'on refera le conduit. Après la foire. En silence. Aux frais de la Banque. Il dit cela avec une générosité si complète qu'on ne voit plus du tout ce qu'on lui demandait.",
        "Victorine demande ce qu'on fait des trois rues, pendant trois semaines. Le baron réfléchit. Il dit qu'on peut faire distribuer, par la paroisse, une eau de puits aux familles du Quai-aux-Harengs, gratuitement, à la charité de la Banque, en disant qu'il s'agit d'une œuvre pieuse pour la foire. Personne ne saura. Personne ne paniquera. Les enfants boiront de l'eau propre. La foire aura lieu. Il ouvre les mains. « Voilà, docteur. La vérité sauve-t-elle mieux ? »",
        "Elle accepte. L'eau de puits est distribuée. Le flux recule, sans s'arrêter tout à fait : une famille ne vient pas chercher son eau, par fierté, et perd un enfant. La foire bat son plein. Après la foire, le conduit est refait, de nuit. Le baron garde le rapport dans son coffre, avec ses titres. Il le lui montre, un soir, à bord, en souriant. Elle comprend ce soir-là qu'il lui a sauvé quatre-vingts enfants et qu'il possède à présent quelque chose d'elle, et qu'il ne fait aucune différence entre les deux.",
      ],
      choices: [{ label: "Regagner le Cormoran", fx: { quest: "WR" }, back: "A2v_jours" }] },
    WR_lettre: { act: "II", title: "La fontaine neuve", place: "quai_hollandes", ambiance: "nuit",
      text: [
        "Elle cachette le rapport, avec trois copies, une pour les échevins, une pour l'Académie, une pour la gazette de Morlenc. Elle les confie au vieux Brindejonc, qui les range dans son coffre en hochant la tête, avec l'air d'un homme à qui l'on confie une grenade. Elle lui demande de les envoyer le lendemain de l'appareillage. Il promet. Il ajoute, très doucement, qu'elle a choisi de dire la vérité à une ville quand elle ne serait plus là pour l'entendre crier.",
        "En attendant, elle fait ce qu'elle peut, de ses mains. Elle passe dans les trois rues, porte à porte, et elle dit aux mères de faire bouillir l'eau de la fontaine, sans dire pourquoi, avec l'autorité de la blouse. Certaines obéissent. D'autres rient. Le flux ralentit dans les maisons qui obéissent. Il continue dans les autres. Elle soigne les uns et les autres, chez les Sœurs, la nuit, jusqu'au départ, en se lavant les mains au vinaigre jusqu'aux coudes.",
        "Elle ne saura jamais ce que la ville a fait de ses enveloppes. Brindejonc lui écrira, peut-être, à Folle-Aiguille, où aucune lettre n'arrive. Elle y pense souvent, en mer, la nuit, sur le pont, en regardant le sillage : une vérité qu'elle a laissée tomber derrière elle comme une pierre dans l'eau, et dont elle ne verra jamais les ronds.",
      ],
      choices: [{ label: "Regagner le Cormoran", fx: { quest: "WR" }, back: "A2v_jours" }] },
  },
  extras: {
    quests: [
      { id: "WR", act: "II", kind: "annexe", title: "La fontaine neuve", start: "WR_flux", doit: "ennemipeuple", echo: ["wr:publie", "wr:baron", "wr:lettre"] },
    ],
  },
};
