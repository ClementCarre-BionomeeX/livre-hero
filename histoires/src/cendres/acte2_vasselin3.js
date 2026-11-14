// Act II · two more corners of Vasselin for the southern company (Lisandre leads, "tu" feminine), off II_S_vasselin:
// the ropewalk of the quai des Cordiers, where an old rope-maker has forgotten the knots and Lisandre sings him the
// sailors' knot song (sud:corderie helps the anchor-chain climb onto the grey galley); and the votive chapel of the
// sailors, where the painted ex-votos lose their names one by one (sud:exvoto).
var S = { act: "II", noLead: true, place: "vasselin" };
function P(o) { return Object.assign({}, S, o); }
var BACK = [{ back: "II_S_vasselin" }];
module.exports = {
  II_S_corderie: P({ title: "La corderie",
    text: [
      "Au bout du quai des Cordiers, la corderie : un hangar de quatre cents pas de long, si étroit qu'on dirait un couloir, où les cordiers marchent à reculons en filant le chanvre, la filasse autour de la taille, depuis la roue jusqu'au fond. Ils filent les aussières des galères, les drisses, les haubans. Ça sent le goudron et la paille mouillée.",
      "Au fond du hangar, assis sur un rouleau, le maître cordier, un vieux tout tordu, tient un bout de corde entre ses mains et le regarde. Il ne sait plus faire le nœud. Lequel ? Tous. Cinquante ans de nœuds, et ce matin, plus un. Ses apprentis attendent, gênés. « La chanson, dit-il. Il y avait une chanson. On apprenait les nœuds avec. Je ne sais plus la chanson. »",
    ],
    choices: [
      { label: "Lui chanter la chanson des nœuds, que chantaient les marins devant l'étal de ta mère", test: { dom: "social", label: "La chanson des nœuds", help: [{ if: { seen: "II_S_port" }, v: 15 }, { if: { item: "luth" }, v: 5 }] },
        win: { fx: { flag: "sud:corderie", ep: ["perso", 700] }, to: "II_S_corderie_noeuds" }, lose: { to: "II_S_corderie_rate" } },
      { label: "Le laisser à sa corde", to: "II_S_vasselin" },
    ] }),
  II_S_corderie_noeuds: P({ title: "Le lapin sort du terrier",
    text: [
      "Tu la sais. Tu ne savais pas que tu la savais. Les marins la chantaient sur le quai, devant l'étal de ta mère, en réparant leurs filets, quand tu avais six ans. *Le lapin sort du terrier, fait le tour de l'arbre, rentre dans son trou.* Le nœud de chaise. *Deux tours morts et deux demi-clés.* *La queue de cochon, le cul-de-porc, la tête d'alouette.*",
      "Au deuxième couplet, ses mains bougent. Au troisième, elles font le nœud de chaise, toutes seules, sans qu'il regarde. Il rit. Les apprentis reprennent le refrain. Toute la corderie chante, à reculons, en filant. Quand tu pars, il te donne un bout de filin, noué d'un nœud de chaise parfait. « Pour grimper, dit-il. Une corde, ça se monte mieux quand on sait ce qu'il y a dedans. »",
    ],
    choices: BACK }),
  II_S_corderie_rate: P({ title: "Le filin",
    text: ["Tu chantes ce dont tu te souviens. Le début. Le lapin, le terrier. Puis plus rien. Tu ne l'as jamais apprise, tu l'as seulement entendue. Le vieux cordier t'écoute jusqu'au bout du premier couplet, les mains immobiles. Il hoche la tête, poliment. « C'était à peu près ça », dit-il. Il fait un nœud. Il le défait. Il en fait un autre. Ce n'est pas le bon. Les apprentis regardent ailleurs."],
    choices: BACK }),
  II_S_exvoto: P({ title: "La chapelle des marins",
    text: [
      "Sur la jetée, une petite chapelle blanche, sans clocher, qu'on appelle Notre-Dame-du-Retour. Les murs sont couverts d'ex-voto : des petits tableaux peints, naïfs, des bateaux dans la tempête, des vagues comme des montagnes, et en bas, en lettres maladroites, *Reconnaissance à la Vierge, Jacques Ribot, sauvé du naufrage de la Marie-Joseph.* Des centaines.",
      "Une vieille femme en noir, assise sur le banc du fond, regarde un tableau, toujours le même. Les lettres, en bas, ont pâli jusqu'à disparaître. On voit encore le bateau. On ne sait plus qui a été sauvé. « C'était mon mari, dit-elle. Il est revenu. Il est mort dans son lit, trente ans après. Je ne sais plus son nom. Je sais qu'il est revenu. C'est ce qu'il y avait d'écrit. »",
    ],
    choices: [
      { label: "Lui demander de te raconter le naufrage, et repeindre le nom", fx: { flag: "sud:exvoto", ep: ["perso", 700] }, to: "II_S_exvoto_nom" },
      { label: "T'asseoir à côté d'elle, et regarder le bateau", fx: { ep: ["perso", 300] }, to: "II_S_exvoto_banc" },
    ] }),
  II_S_exvoto_nom: P({ title: "La Marie-Joseph",
    text: ["Elle raconte. Le bateau de pêche, la nuit de la Saint-Martin, la vague, les trois qu'on a repêchés. Elle ne sait plus le nom de son mari, mais elle sait qu'il avait une dent en moins, devant, et qu'il sifflait par le trou. En racontant, elle s'arrête, elle dit : *Tanguy*. Elle ne s'en rend pas compte. Tu le répètes. Elle te regarde. Tu demandes un pinceau au sacristain, et du noir, et tu écris, en bas du tableau, en lettres maladroites, comme les autres : *Tanguy, revenu.* Elle lit. Elle se tait. Elle pose la main sur le cadre."],
    choices: BACK }),
  II_S_exvoto_banc: P({ title: "Le bateau",
    text: ["Tu t'assieds. Vous regardez le bateau, toutes les deux, sans parler. Il est mal peint. La vague est trop grosse et le ciel trop bleu, le peintre n'avait jamais vu de tempête. Il y a trois petits bonhommes dans la chaloupe, des points avec des bras. L'un d'eux, celui de gauche, a un trou noir au milieu de la figure. Une dent en moins, peut-être. Ou une tache. Elle le regarde. Toi aussi. Au bout d'un long moment, elle dit merci, et elle s'en va."],
    choices: BACK }),
};
