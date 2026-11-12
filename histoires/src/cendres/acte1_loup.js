// Act I · "Le loup blanc", a short hunt for Corbe (Corbe leads, "tu" feminine), opened from CO_camp: the hunters go
// after a white she-wolf that has started killing the reindeer; the trail, the den, and a wolf that has forgotten her
// own cubs. corbe:loup=tue|nomme|chasse.
function P(o) { return Object.assign({ act: "I", place: "corbeau", noLead: true }, o); }
module.exports = {
  CO_L_depart: P({ title: "Les chasseurs",
    fx: { questSeen: "CO_Q_loup" },
    text: [
      "Au bord du camp, trois chasseurs graissent leurs lances et vérifient leurs raquettes. Bjarki, le plus vieux, avec ses moustaches gelées. Ses deux fils. « Une louve blanche, dit-il. Elle a pris quatre rennes en six nuits. Elle ne les mange pas. Elle les tue, et elle les laisse. »",
      "Il crache. « Ce n'est pas une louve normale. Une louve tue pour manger, ou pour ses petits. Celle-là tue comme on oublie quelque chose. » Il te regarde. « Tu es la Bouche, maintenant. Tu sais peut-être ce que c'est. Viens. »",
    ],
    choices: [
      { label: "Partir avec eux", to: "CO_L_piste" },
      { label: "Rester au camp", refuse: true, to: "CO_camp" },
    ] }),
  CO_L_piste: P({ title: "La piste",
    text: [
      "Vous montez vers les crêtes, en file, sur les raquettes. La piste est fraîche, large, des empreintes plus grandes que la main. Puis, sur un replat, elle s'arrête. Pas d'empreintes devant. Pas d'empreintes sur les côtés. Comme si la louve s'était envolée.",
      "« Ça fait ça chaque fois, dit un des fils. On perd la piste ici. » Bjarki tourne en rond, le nez au vent.",
    ],
    choices: [
      { label: "Chercher ce que les hommes ne voient pas", test: { dom: "nature", label: "La piste", help: [{ if: { has: "corbe:glaneur_vu" }, v: 10 }, { if: { item: "tambour" }, v: 5 }] },
        win: { fx: { ep: ["perso", 600] }, to: "CO_L_taniere" }, lose: { to: "CO_L_perdus" } },
    ] }),
  CO_L_perdus: P({ title: "Le blanc",
    text: [
      { if: { not: { seen: "CO_L_taniere" } }, text: "Vous cherchez jusqu'au soir. Rien. La neige recommence à tomber, fine, et efface même vos propres traces. Bjarki décide de redescendre." },
      { if: { seen: "CO_L_taniere" }, text: "Vous redescendez sans elle. La neige recommence à tomber, fine, et efface derrière vous jusqu'à vos propres traces." },
      "En chemin, l'un de ses fils s'arrête, se retourne, regarde la crête. « Elle nous suit », dit-il. Personne ne la voit.",
      "Cette nuit-là, elle prend un cinquième renne, au bord du troupeau, à vingt pas des tentes.",
    ],
    choices: [{ fx: { quest: "CO_Q_loup", flag: "corbe:loup=perdue" }, back: "CO_camp" }] }),
  CO_L_taniere: P({ title: "La tanière",
    text: [
      "Tu t'accroupis. La neige du replat n'est pas comme l'autre : plus lisse, plus fine. Tu souffles dessus. Dessous, les empreintes continuent, recouvertes d'une neige blanche, plus blanche que la neige. Quelque chose les efface derrière la louve, à mesure qu'elle passe.",
      "Vous suivez. Une heure. Un éboulis, une fente sous un rocher. L'odeur. Et un bruit, à l'intérieur : des petits cris aigus, affamés.",
      "Elle sort. Une louve énorme, blanche jusqu'aux yeux. Les yeux aussi sont blancs. Elle vous regarde sans vous voir, et derrière elle, dans la fente, trois louveteaux gris crient de faim, et elle ne se retourne pas vers eux. Elle ne sait plus qu'ils sont à elle.",
    ],
    choices: [
      { label: "La tuer, pour les rennes", to: "CO_L_combat" },
      { label: "Battre le tambour et lui dire ce qu'elle a oublié", test: { dom: "magie", label: "La louve", help: [{ if: { item: "tambour" }, v: 15 }, { if: { seen: "CO_veillee" }, v: 10 }] },
        win: { fx: { flag: "corbe:loup=nomme", ep: ["perso", 1500] }, to: "CO_L_nommee" }, lose: { to: "CO_L_combat" } },
      { label: "La chasser loin du camp, et prendre les louveteaux", test: { dom: "combat", label: "Les lances" },
        win: { fx: { flag: "corbe:loup=chasse", ep: ["perso", 900] }, to: "CO_L_chassee" }, lose: { to: "CO_L_combat" } },
    ] }),
  CO_L_combat: P({ title: "La louve blanche",
    combat: { title: "La louve blanche", enemies: ["loup_blanc"], terrain: "nature", range: "contact",
      flee: { dom: "nature", label: "Redescendre en courant", to: "CO_L_perdus" },
      win: { fx: { flag: "corbe:loup=tue", ep: ["seance", 1200] }, to: "CO_L_tuee" }, lose: { fx: { pv: -4 }, to: "CO_L_perdus" } },
    text: ["Elle ne gronde pas. Elle attaque sans un bruit, comme la neige qui tombe d'un toit."],
    choices: [] }),
  CO_L_tuee: P({ title: "Les louveteaux",
    text: [
      "Elle tombe dans la neige, et la neige ne se tache pas. Pas de sang. Elle devient plus blanche encore, puis elle n'est plus là. Il reste un creux, la forme d'une louve, et un peu de froid.",
      "Dans la fente, les louveteaux crient. Bjarki les regarde. « On ne peut pas les laisser, dit-il. On ne peut pas les prendre. » Il lève sa lance. Tu détournes la tête. Ça ne dure pas.",
      "En redescendant, personne ne parle. Les rennes sont sauvés. Ce n'est pas une victoire. C'est seulement fini.",
    ],
    choices: [{ fx: { quest: "CO_Q_loup" }, back: "CO_camp" }] }),
  CO_L_nommee: P({ title: "Ce qu'elle avait oublié",
    text: [
      "Tu poses ta lance. Tu prends le tambour. Tu bats, doucement, le rythme des veillées, et tu parles à la louve comme on parle au rite, dans la vieille langue. Tu ne lui dis pas un nom. Les loups n'ont pas de nom. Tu lui dis ce qu'il y a derrière elle. Trois petits. Gris. À toi. Ils ont faim.",
      "Elle tourne la tête. Lentement. Ses yeux blancs se posent sur la fente, sur les louveteaux, qui crient. Et, du fond du blanc, quelque chose remonte, une couleur, un jaune de loup, d'abord au bord des pupilles, puis partout.",
      "Elle entre dans la tanière. Elle se couche. Les louveteaux se jettent sur elle. Elle ne vous regarde plus. Elle ne regarde plus que ses petits. Bjarki baisse sa lance, lentement, et il te regarde, toi, comme on regarde une Bouche pour la première fois.",
    ],
    choices: [{ fx: { quest: "CO_Q_loup", conf: { corbe: 10 } }, back: "CO_camp" }] }),
  CO_L_chassee: P({ title: "Vers le nord",
    text: [
      "Vous criez, vous frappez les lances sur les rochers, vous lancez des pierres. La louve recule, sans comprendre, puis elle s'en va, vers le nord, vers le col, d'un trot lent, sans se retourner. Elle ne se retourne jamais.",
      "Les louveteaux, vous les ramenez au camp, dans un sac. Les enfants se les disputent. Les vieux disent que c'est une mauvaise idée. Ils grandiront avec les chiens, et ils ne sauront jamais ce qu'ils sont.",
    ],
    choices: [{ fx: { quest: "CO_Q_loup" }, back: "CO_camp" }] }),
};
