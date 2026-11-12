// Act I · the junk stall of the Cédants, at the foot of the black tower (Pie leads, "tu" masculine), opened from
// PI_ville: an old woman sells the objects people leave behind with the memories they sold. Among them, the willow
// whistle Pie carved for Linette. He can buy it or steal it; in the scriptorium he can give it back (PI_linette_sifflet).
var PI = { act: "I", place: "pallanche", noLead: true };
function P(o) { return Object.assign({}, PI, o); }
module.exports = {
  PI_k_brocante: P({ title: "La brocante des Cédants",
    text: [
      "Au pied de la tour, contre le mur du Bureau, une vieille femme a étalé une couverture par terre. Dessus, des objets. Une bague de cuivre. Une mèche de cheveux nouée d'un fil rouge. Des lettres, liées par paquets. Une poupée sans bras. Un dé à coudre. Une pipe.",
      "« Ce qu'ils laissent en sortant, dit-elle. Ils vendent le souvenir, au guichet, et en ressortant, l'objet ne leur dit plus rien. Alors ils le posent là, sur le rebord, et ils s'en vont. Moi, je ramasse. Je revends. Un sou pièce. Les objets, ça ne s'oublie pas, ça. Ça attend. »",
      "Au bord de la couverture, entre un sabot d'enfant et un chapelet, un sifflet de saule. Taillé au couteau, maladroitement, avec une encoche de travers. Tu l'as taillé toi-même, il y a trois ans, sous le pont des Teinturiers, pour une petite fille qui avait peur du noir.",
    ],
    choices: [
      { label: "Le lui acheter", fx: { gold: -1, item: "sifflet_linette", ep: ["perso", 300] }, to: "PI_k_brocante_achat" },
      { label: "Le prendre sans qu'elle voie", test: { dom: "discretion", label: "Le sifflet", help: [{ if: { has: "pie:grelot" }, v: 10 }] },
        win: { fx: { item: "sifflet_linette", ep: ["perso", 300] }, to: "PI_k_brocante_vol" }, lose: { to: "PI_k_brocante_prise" } },
      { label: "Lui demander qui l'a laissé", to: "PI_k_brocante_qui" },
    ] }),
  PI_k_brocante_qui: P({ title: "Qui l'a laissé",
    text: [
      "La vieille prend le sifflet, le tourne dans ses doigts. « Ça ? Ce n'est pas un cédant. C'est un greffier qui l'a jeté là, l'été dernier. Il l'avait trouvé dans la poche d'une petite, en la rasant, pour le scriptorium. Elles n'ont rien le droit de garder, les petites. » Elle te regarde. « Tu la connais ? »",
      "Tu ne réponds pas. Elle n'insiste pas. Elle a vu beaucoup de gens regarder des objets sur sa couverture, et elle sait ce que veut dire ce silence-là.",
    ],
    choices: [
      { label: "Le lui acheter", fx: { gold: -1, item: "sifflet_linette", ep: ["perso", 300] }, to: "PI_k_brocante_achat" },
      { label: "Repartir les mains vides", to: "PI_ville" },
    ] }),
  PI_k_brocante_achat: P({ title: "Deux liards",
    text: ["Tu paies. Elle te tend le sifflet, et en plus, sans rien dire, la mèche de cheveux au fil rouge, qu'elle te glisse dans la main. Tu la regardes. « Personne ne la prendra, dit-elle. Et toi, tu as une tête à garder les choses. » Ce ne sont pas les cheveux de Linette. Ce sont ceux de quelqu'un. Tu les gardes quand même. Tu ne sais pas ce que tu en feras."],
    choices: [{ label: "Revenir dans les bas-quartiers", to: "PI_ville" }] }),
  PI_k_brocante_vol: P({ title: "Le sifflet",
    text: ["Ta main passe au ras de la couverture, et le sifflet n'est plus là. La vieille n'a rien vu. Ou si : elle lève les yeux, au moment où tu te relèves, et elle te fait un petit signe de tête, à peine, comme on salue un confrère. Elle savait. Elle a laissé faire. Tu ne sauras jamais pourquoi."],
    choices: [{ label: "Revenir dans les bas-quartiers", to: "PI_ville" }] }),
  PI_k_brocante_prise: P({ title: "Une main sèche",
    text: ["Une main sèche se referme sur ton poignet, le sifflet encore dans ta paume. « Un sou, dit la vieille, calmement. Pas un de moins. Les objets d'ici ont déjà été volés une fois, petit. » Elle ne te lâche pas. Elle attend. Tu as honte, tout à coup, et ce n'est pas d'avoir été pris."],
    choices: [
      { label: "Payer", fx: { gold: -1, item: "sifflet_linette" }, to: "PI_k_brocante_achat" },
      { label: "Reposer le sifflet, et partir", to: "PI_ville" },
    ] }),
  PI_linette_sifflet: P({ title: "Le sifflet de saule",
    text: [
      "Tu sors le sifflet de ta poche. Tu le poses sur son pupitre, à côté de l'encrier. Elle le regarde. Elle ne le prend pas. On n'a pas le droit.",
      "Puis sa main gauche, celle qui n'écrit pas, glisse sur le bois, toute seule, et le prend, et le porte à sa bouche. Elle souffle. Un son aigre, faux, à cause de l'encoche de travers. Dans tout le scriptorium, quarante plumes s'arrêtent. Quarante têtes rasées se lèvent.",
      "Linette regarde le sifflet dans sa main comme si elle ne savait pas comment il était arrivé là. « Il siffle faux », dit-elle. Puis, plus bas : « Il a toujours sifflé faux. »",
    ],
    choices: [{ label: "Chercher où ils gardent ce qu'ils lui ont pris", fx: { drop: "sifflet_linette", flag: "pie:sifflet", ep: ["perso", 1000] }, to: "PI_archives" }] }),
};
