// Act III · the inn of the white plain (the child leads, "tu" masculine), off III_plaine once the walkers have been
// heard: an Esquarrois innkeeper dead two hundred years who keeps a register of everyone who passes; the Sauvelune
// entries (unless the village was sung back, nord:rendu=sauvelune); the child's own line (iii:relais_nom); and the
// little wooden god nobody prays to any more, sitting by the fire (iii:petit_dieu).
var A = { act: "III", noLead: true, place: "plaine" };
function P(o) { return Object.assign({}, A, o); }
var BACK = [{ back: "III_r_salle" }];
var RENDU = { has: "nord:rendu=sauvelune" };
module.exports = {
  III_r_salle: P({ title: "Le relais du Gué-Blanc",
    text: [
      { first: true, text: "Une maison, au milieu du blanc. Une vraie maison, à colombages, avec une enseigne qui grince sans vent : un gué, trois pierres, et de l'eau peinte. AU GUÉ-BLANC, BON GÎTE. De la fumée sort de la cheminée. Les marcheurs passent devant sans s'arrêter, mais certains entrent, s'assoient un moment, et repartent." },
      { first: true, text: "Dans la salle, un feu, des bancs, une odeur de soupe aux poireaux. Derrière le comptoir, un aubergiste en tablier, gros, chauve, le nez rouge, une plume derrière l'oreille. Maître Anthelme. Il est mort depuis deux cents ans, dit-il, sans en faire une histoire. Il tenait le relais du Gué-Blanc sur la route de Varre. Quand on l'a oublié, il est venu ici, avec sa maison. L'habitude." },
      { first: true, text: "Sur le comptoir, un registre énorme, ouvert. « Tout le monde signe, dit-il. C'est la règle de la maison. Même ici. Surtout ici. »" },
      { again: true, text: "La salle, le feu, l'odeur de soupe aux poireaux. Maître Anthelme essuie son comptoir, autour du registre resté ouvert." },
    ],
    choices: [
      { label: "Chercher dans le registre les gens de Sauvelune", hide: { seen: "III_r_sauvelune" }, to: "III_r_sauvelune" },
      { label: "Signer le registre, toi aussi", hide: { seen: "III_r_signer" }, to: "III_r_signer" },
      { label: "Le petit dieu de bois, assis au coin du feu", hide: { seen: "III_r_dieu" }, to: "III_r_dieu" },
      { back: "III_plaine" },
    ] }),
  III_r_sauvelune: P({ title: "Les pages de Sauvelune",
    text: [
      "Anthelme tourne les pages, en mouillant son pouce. Des milliers de noms, de toutes les écritures, de toutes les époques. Des croix, pour ceux qui ne savaient pas écrire, et à côté, de la main d'Anthelme, ce qu'ils lui ont dit.",
      { if: { not: RENDU }, text: "Il s'arrête. « Sauvelune. Ils sont passés il y a quelques jours, tout un village. Ils ont pris la soupe. » Une page entière, de sa main à lui : ils ne savaient plus signer leur nom. *Un vieux avec des abeilles dans la barbe, il dit qu'il en a douze ruches. Une femme forte, les mains rouges, elle a demandé si quelqu'un avait vu son fils. Un homme qui ne parle pas, qui a réparé le banc. Un petit garçon qui siffle.* Tu lis la page deux fois. Tu poses le doigt sur *son fils*. Anthelme te regarde. Il ne demande rien." },
      { if: RENDU, text: "Il cherche. Il fronce les sourcils. « Sauvelune. Il y avait une page. » Il la trouve : elle est blanche. Blanche, comme une page vierge. « Ils sont repartis, dit-il. Dans l'autre sens. Quelqu'un les a rappelés. Ça arrive. Pas souvent. » Il passe la main sur la page blanche, content, comme on passe la main sur une table qu'on vient de nettoyer." },
    ],
    choices: [{ fx: { ep: ["perso", 500] }, back: "III_r_salle" }] }),
  III_r_signer: P({ title: "La règle de la maison",
    text: [
      "Il te tend la plume. Tu hésites. Quel nom ? Celui de Sauvelune, que le Père Anselme a écrit au temple, est le seul que tu connaisses. Mais depuis que tu marches dans ce blanc où il te semble être déjà venu, tu n'es plus sûr de n'en avoir qu'un. Anthelme attend. Il a l'habitude des gens qui hésitent, ici.",
    ],
    choices: [
      { label: "Écrire ton nom et, dessous, une croix pour celui que tu ne connais pas", fx: { flag: "iii:relais_nom", ep: ["perso", 600] }, to: "III_r_signer_deux" },
      { label: "Écrire seulement celui de Sauvelune", fx: { ep: ["perso", 400] }, to: "III_r_signer_un" },
    ] }),
  III_r_signer_deux: P({ title: "Deux lignes",
    text: ["Tu écris ton nom. Puis, dessous, plus lentement, une croix, pour l'autre, celui que tu ne connais pas. Anthelme lit, à l'envers, par-dessus le comptoir. Il hoche la tête. « Deux lignes, dit-il. C'est permis. J'ai eu un roi, une fois, qui en a pris six. » Il souffle sur l'encre pour la sécher. Elle sèche. Elle ne pâlit pas. Ici, rien ne pâlit. C'est le seul endroit du monde où ce que tu écris est sûr de rester, et c'est un endroit où personne ne vient le lire."],
    choices: BACK }),
  III_r_signer_un: P({ title: "Une ligne",
    text: ["Tu écris le nom de Sauvelune. Celui d'Agathe et de Joris, celui du temple. Anthelme lit. « C'est un nom de chez nous, dit-il. D'Esquarre. » Il a l'air content. Puis il regarde la ligne d'en dessous, vide, et il se tait, la main à plat sur la page. Il la laisse ouverte, au cas où, comme on laisse une chaise à table pour quelqu'un qui est en retard."],
    choices: BACK }),
  III_r_dieu: P({ title: "Le petit dieu de bois",
    text: [
      "Au coin du feu, sur un tabouret, le petit dieu de bois que tu as vu marcher dans la file. Haut comme un chien. Sculpté grossièrement, dans du chêne, avec une barbe de copeaux et des yeux en clous de cuivre. Il tend ses mains de bois vers les flammes. Personne ne lui parle. Les prières ont cessé depuis si longtemps qu'il a oublié de quoi il était le dieu.",
      "Anthelme, en passant, lui pose un bol de soupe à côté, par politesse. « Il était aux carrefours, dit-il. Je crois. On lui mettait des pommes. Ou alors c'était le dieu des chaudrons. Il ne se souvient pas. Moi non plus. »",
    ],
    choices: [
      { label: "Lui faire une prière, n'importe laquelle", fx: { flag: "iii:petit_dieu", ep: ["perso", 600] }, to: "III_r_dieu_priere" },
      { label: "T'asseoir à côté de lui, et te chauffer les mains aussi", fx: { pv: 2 }, to: "III_r_dieu_feu" },
    ] }),
  III_r_dieu_priere: P({ title: "Une prière",
    text: [
      "Tu ne sais pas prier. Le Père Anselme t'a appris les répons, et s'est arrêté là. Tu dis ce qui te vient. Que la route soit sèche. Que Pim n'ait pas froid, là où il est. Que quelqu'un mette une pomme, demain, à un carrefour, pour rien, sans savoir pourquoi.",
      "Le petit dieu tourne la tête vers toi, avec un craquement de bois sec. Ses yeux de cuivre brillent. Il se tait : la parole lui a toujours manqué. Mais il se lève de son tabouret, il prend son bol de soupe à deux mains, et il te le donne. C'est la première fois depuis des siècles qu'il exauce quelque chose. Il ne sait pas faire grand-chose d'autre. La soupe est bonne.",
    ],
    choices: BACK }),
  III_r_dieu_feu: P({ title: "Au coin du feu",
    text: ["Tu t'assieds à côté de lui. Vous tendez les mains vers le feu, tous les deux, sans parler. Il sent le chêne et la vieille cire. Au bout d'un moment, il pose sa main de bois sur ton genou, comme un vieux qui se relève, et il ne l'enlève pas. Tu ne la chasses pas. Le feu craque. La soupe cuit. Pour une heure, au milieu du blanc, il fait chaud."],
    choices: BACK }),
};
