// Act III · "La carte sans noms", an adventure inside the adventure in Valcendre (the child leads, "tu" masculine),
// opened from III_v_porte. The Orsans did not write, so their maps carry no names, only drawings of what happens in
// each place. Maître Oriel's great map has stopped at the day of the fire: beyond the lake, everything is blank. He
// asks the boy who came from above to tell him what is there now, region by region, so he can draw it. Four regions,
// each told as it is (=vrai) or as it should be (=doux), the apprentice who is fading, the drawers of old maps, and
// the finished map. flags iii:carte_<region> plus iii:carte_<region>=vrai|doux, item carte_orsan.
var A = { act: "III", noLead: true };
function P(o) { return Object.assign({}, A, o); }
var BACK = [{ back: "III_K_atelier" }];
var REGIONS = ["iii:carte_vallee", "iii:carte_ville", "iii:carte_riviere", "iii:carte_nord"];
var ALL = { all: REGIONS.map(function (f) { return { has: f }; }) };
function region(id, flag, title, text, vrai, doux) {
  var o = {};
  o[id] = P({ title: title, place: "valcendre", text: text,
    choices: [
      { label: vrai.label, fx: { flag: [flag, flag + "=vrai"], ep: ["perso", 300] }, to: id + "_vrai" },
      { label: doux.label, fx: { flag: [flag, flag + "=doux"], ep: ["perso", 300] }, to: id + "_doux" },
    ] });
  o[id + "_vrai"] = P({ title: title, place: "valcendre", text: vrai.text, choices: BACK });
  o[id + "_doux"] = P({ title: title, place: "valcendre", text: doux.text, choices: BACK });
  return o;
}
var C = {
  III_K_entree: P({ title: "La tour du cartographe", place: "valcendre",
    fx: { questSeen: "III_Q_carte" },
    text: [
      "Une tour basse, ronde, en retrait de la grand-place, avec une seule fenêtre très large tournée vers le sud. Sur le seuil, un homme maigre, en blouse tachée d'encre, t'attend. Il ne t'a jamais vu. Il sait qui tu es. Toute la ville le sait.",
      "« Tu viens d'en haut, dit-il. Je m'appelle Oriel. Je fais les cartes. » Il hésite. « Je faisais les cartes. Ma carte s'est arrêtée le jour du feu. Depuis, je dessine les mêmes collines, encore et encore, parce que je ne sais pas ce qu'il y a derrière. Tu le sais, toi. Tu viens de traverser. »",
    ],
    choices: [
      { label: "Monter voir sa carte", to: "III_K_atelier" },
      { label: "« Je ne peux pas rester. »", refuse: true, to: "III_v_porte" },
    ] }),
  III_K_atelier: P({ title: "La grande table", place: "valcendre", hub: true,
    text: [
      { first: true, text: "En haut, une seule pièce, et au milieu, une table immense, aussi grande qu'une chambre, couverte d'une seule feuille de vélin cousue de cent peaux. La carte du pays d'Orsan. Il n'y a pas un mot dessus. Les Orsans n'écrivaient pas. À la place des noms, des dessins minuscules : une femme qui file la laine pour un village de bergers, deux hommes qui se battent pour un gué disputé, un enfant qui pêche pour un lac poissonneux." },
      { first: true, text: "Au nord, Valcendre, dessinée tour par tour. Au sud, des collines, une rivière qui fait un coude, des villages. Et puis, à partir d'une ligne nette, comme coupée au couteau, plus rien. Du vélin blanc. Oriel pose le doigt sur la ligne. « Ici, dit-il. Le feu. Après, je ne sais pas. »" },
      { again: true, if: { not: ALL }, text: "Oriel t'attend devant la grande table, le pinceau levé. Au-delà de la ligne du feu, il reste du vélin blanc." },
      { again: true, if: ALL, text: "Oriel a posé son pinceau. Au-delà de la ligne du feu, il ne reste plus de blanc." },
    ],
    choices: [
      { label: "La vallée, au sud du lac", hide: { has: "iii:carte_vallee" }, to: "III_K_vallee" },
      { label: "La grande ville, au bord de la rivière", hide: { has: "iii:carte_ville" }, to: "III_K_ville" },
      { label: "La rivière qui fait un coude", hide: { has: "iii:carte_riviere" }, to: "III_K_riviere" },
      { label: "Les montagnes, à l'est", hide: { has: "iii:carte_nord" }, to: "III_K_nord" },
      { label: "L'apprentie, assise près de la fenêtre", hide: { seen: "III_K_apprentie" }, to: "III_K_apprentie" },
      { label: "Les tiroirs des vieilles cartes", hide: { seen: "III_K_tiroirs" }, to: "III_K_tiroirs" },
      { label: "Regarder la carte finie", if: ALL, why: "Il reste du blanc sur la carte.", to: "III_K_fin", big: true },
      { back: "III_v_porte" },
    ] }),
  III_K_apprentie: P({ title: "L'apprentie", place: "valcendre",
    text: [
      "Près de la fenêtre, une jeune fille trace des collines sur une feuille d'essai, toujours les mêmes, d'un trait sûr. Quand tu t'approches, tu vois à travers sa main. Pas beaucoup. Comme à travers un papier huilé.",
      "« Elle s'efface, dit Oriel, sans se retourner. Plus vite que les autres. Elle est arrivée ici à sept ans, la veille du feu. Personne, là-haut, ne l'a jamais connue assez longtemps pour s'en souvenir. » Il pose son pinceau. « Elle ne dessine que ce qu'elle a vu. Elle n'a vu que trois collines. »",
      "La jeune fille lève les yeux vers toi. « Tu me diras à quoi ça ressemble, dit-elle. Là-haut. Les vraies couleurs. Je les dessinerai pendant qu'il me reste des mains. »",
    ],
    choices: [
      { label: "Lui décrire le bief du moulin, un matin d'avril", fx: { ep: ["perso", 400], flag: "iii:apprentie" }, to: "III_K_apprentie_bief" },
      { back: "III_K_atelier" },
    ] }),
  III_K_apprentie_bief: P({ title: "Les vraies couleurs", place: "valcendre",
    text: [
      "Tu lui décris le bief. L'eau verte qui devient brune sous la roue. Les saules. La mousse sur les pierres du canal, et le martin-pêcheur, une seconde de bleu, qu'on ne voit jamais assez longtemps pour être sûr.",
      "Elle dessine. Elle n'a que du noir et de l'ocre. Elle fait le martin-pêcheur avec un point de rien, un trou dans le vélin, qui laisse passer la lumière de la fenêtre. « Comme ça ? » demande-t-elle. C'est exactement comme ça.",
    ],
    choices: BACK }),
  III_K_tiroirs: P({ title: "Les vieilles cartes", place: "valcendre",
    text: [
      "Des tiroirs plats, du sol au plafond, pleins de cartes plus anciennes. Celles du grand-père d'Oriel, et du grand-père de son grand-père. Sur la plus vieille, le pays d'Orsan est minuscule : une vallée, un lac, un seul village. Sur chaque carte suivante, il grandit. Des villages naissent. Des routes poussent.",
      "Sur la dernière, celle d'avant le feu, il y a, au bord de la rivière, un dessin minuscule, plus soigné que les autres : un hameau autour d'un puits, et devant le puits, une femme qui chante, la bouche ouverte, les mains sur son ventre rond.",
    ],
    choices: [{ label: "Refermer le tiroir", fx: { ep: ["perso", 300] }, to: "III_K_atelier" }] }),
};
function add(o) { for (var k in o) C[k] = o[k]; }

add(region("III_K_vallee", "iii:carte_vallee", "La vallée", [
  "Oriel pose le doigt au sud du lac, sur le blanc. « Ici, il y avait des vergers. Des pommiers à perte de vue. On les dessinait par une femme qui grimpe à l'échelle. » Il te tend le pinceau, puis le reprend : c'est lui qui dessine, toi tu dis.",
  "Tu connais l'endroit. C'est là que les fondateurs ont planté Sauvelune. Il n'y a plus de vergers. Il y a des champs de blé, un temple, un moulin, et un village qui ne se souvient de rien.",
], { label: "Dire ce qu'il y a : le blé, le temple, l'oubli", text: [
  "Tu le dis. Il dessine. Un champ de blé, par un faucheur. Un temple, par un homme qui tient un registre ouvert. Puis il s'arrête, le pinceau en l'air. « Et l'oubli, dit-il, comment je le dessine ? » Tu ne sais pas. Il réfléchit longtemps. Il dessine un enfant de dos, qui marche vers le nord, une lanterne à la main. Il ne te demande pas si c'est juste.",
] }, { label: "Lui dire que les vergers sont toujours là", text: [
  "Il sourit, soulagé, et il dessine les pommiers, une rangée, deux rangées, et la femme à l'échelle. Tu le regardes faire. Ce n'est pas vrai. Mais sur la table, ça devient vrai, et pour lui, ça le restera. Dans un coin, tu lui demandes d'ajouter un moulin. Il l'ajoute, sans demander pourquoi.",
] }));
add(region("III_K_ville", "iii:carte_ville", "La grande ville", [
  "Sur la carte, au bord de la rivière, un gros bourg, dessiné par un batelier qui décharge des tonneaux. « Un port de rivière, dit Oriel. On y vendait notre laine. Il devait grandir. Ils grandissent tous, les ports. »",
  "Il a grandi. C'est Pallanche. Six cents ans de rues, de clochers, de cheminées, une tour de greffe où l'on écrit les noms pour que les autres puissent les oublier.",
], { label: "Lui raconter Pallanche telle qu'elle est", text: [
  "Tu racontes. La fumée. Les ponts. Les teinturiers et la rivière de trois couleurs. La tour, et les registres, et les greffiers. Il dessine, de plus en plus petit, pour tout faire tenir, des centaines de silhouettes. Pour la tour, il dessine un homme qui écrit, et derrière lui, un autre homme qui efface. « C'est ça ? » demande-t-il. C'est un peu ça.",
] }, { label: "Lui dire que c'est resté un port, avec des bateliers", text: [
  "Il garde son batelier. Il en ajoute deux autres, et des tonneaux, et un chien sur le quai. Ça ressemble au Pont-Neuf, le dimanche matin, quand on ne regarde pas la tour. Ce n'est pas tout à fait un mensonge. C'est la moitié qu'on peut dessiner.",
] }));
add(region("III_K_riviere", "iii:carte_riviere", "La rivière qui fait un coude", [
  "Une rivière qui fait un coude, entre des collines vertes. Oriel l'a dessinée cent fois, mieux que tout le reste. « Le pays de la garde, dit-il. Les soldats des remparts viennent presque tous de là. Ils me la demandent, parfois. Je la leur montre. Ils regardent longtemps. »",
  "Tu sais où c'est. La Lisse. Le fleuve où les deux armées se font face, où l'on se bat depuis si longtemps que personne ne sait plus pourquoi. Les collines ne sont plus vertes. Il y a des tranchées.",
], { label: "Dire la guerre", text: [
  "Il dessine deux hommes, face à face, chacun sur une rive, la lance tendue. Puis il recommence, à côté : deux hommes, face à face. Puis encore. Il en fait une rangée, tout le long de la rivière. « C'est leur pays, dit-il, à voix basse. Je ne le leur montrerai plus. » Il laisse sécher. Il ne range pas le pinceau tout de suite.",
] }, { label: "Dire que les collines sont vertes", text: [
  "Il hoche la tête, et il ne dessine rien : c'est déjà dessiné. Il se contente de repasser le vert, doucement, là où le vélin pâlissait. « Je le dirai au capitaine, dit-il. Il sera content. » Tu penses aux tranchées. Tu ne dis rien. Le capitaine monte la garde depuis trois cents ans. Il peut bien avoir ses collines.",
] }));
add(region("III_K_nord", "iii:carte_nord", "Les montagnes de l'est", [
  "À l'est, les montagnes, et sur les pentes, un homme qui chasse le renne, une femme qui coud des peaux. « Les gens des hauts, dit Oriel. Ils commerçaient avec nous. Ils avaient des corbeaux. Ils disaient les noms, comme nous. Mieux que nous. »",
  { with: "corbe", text: "Corbe s'est approchée de la table, sans un bruit. Elle regarde la femme qui coud des peaux. Elle tend la main, et ne touche pas." },
], { label: "Dire ce que le clan est devenu", text: [
  "Tu dis le clan. Les rites. La Mère. Les noms qu'on donne au lieu de les garder. Oriel dessine une femme debout devant une fente dans la montagne, les bras ouverts. Il hésite, puis, à côté d'elle, il dessine un corbeau, plus grand que les autres. Il le laisse en blanc, sans encre. « Celui-là, dit-il, je ne sais pas ce qu'il fait. Mais il était sur la vieille carte. »",
] }, { label: "Dire qu'ils chassent toujours le renne", text: [
  "C'est vrai, d'ailleurs. Il ajoute trois rennes, et un chasseur de plus, et un feu. Il est content. « Au moins eux, dit-il. Au moins eux n'ont pas changé. » Ils ont changé. Mais ils chassent toujours le renne. On choisit ce qu'on dessine.",
] }));

C.III_K_fin = P({ title: "La carte", place: "valcendre",
  text: [
    "Oriel recule d'un pas. Toi aussi. Pour la première fois depuis trois cents ans, la carte n'a plus de bord. Le blanc a disparu. Le pays d'en haut est dessiné, sans un nom, par ce qu'on y fait.",
    { if: { all: [{ has: "iii:carte_vallee=vrai" }, { has: "iii:carte_ville=vrai" }, { has: "iii:carte_riviere=vrai" }, { has: "iii:carte_nord=vrai" }] }, text: "C'est une carte dure. Des registres, des tranchées, des faucheurs, des greffiers. Oriel la regarde longtemps. « C'est un pays qui travaille, dit-il enfin. Et qui a peur. On a été comme ça, nous aussi, juste avant. » Il ne la trouve pas belle. Il la trouve juste." },
    { if: { all: [{ has: "iii:carte_vallee=doux" }, { has: "iii:carte_ville=doux" }, { has: "iii:carte_riviere=doux" }, { has: "iii:carte_nord=doux" }] }, text: "C'est une carte douce. Des vergers, des bateliers, des collines vertes, des chasseurs. Elle ressemble beaucoup à l'ancienne. Oriel la regarde, ému. « Ils ont gardé notre pays, dit-il. Sans le savoir. » Tu ne le contredis pas. Quelque part derrière, l'apprentie te regarde, et elle, tu crois qu'elle sait." },
    { if: { not: { any: [{ all: [{ has: "iii:carte_vallee=vrai" }, { has: "iii:carte_ville=vrai" }, { has: "iii:carte_riviere=vrai" }, { has: "iii:carte_nord=vrai" }] }, { all: [{ has: "iii:carte_vallee=doux" }, { has: "iii:carte_ville=doux" }, { has: "iii:carte_riviere=doux" }, { has: "iii:carte_nord=doux" }] }] } }, text: "C'est une carte mêlée. Des vergers à côté des tranchées, des greffiers à côté des chasseurs de renne. Oriel la regarde, et il rit, pour la première fois. « C'est un vrai pays, dit-il. Il ne sait pas ce qu'il est. Aucun pays ne le sait. »" },
    "Il découpe, au couteau, un petit carré dans un coin du vélin : un hameau, un puits, une femme qui chante. Il te le tend. « Pour là-haut, dit-il. Ils n'ont pas de carte de nous. Qu'ils en aient au moins un morceau. »",
  ],
  choices: [{ label: "Le plier dans ta chemise, et redescendre", fx: { item: "carte_orsan", ep: ["perso", 1200], quest: "III_Q_carte" }, to: "III_K_sortie" }] });
C.III_K_sortie = P({ title: "Le seuil", place: "valcendre",
  text: [
    { after: "iii:apprentie", text: "Au bas de la tour, l'apprentie t'a rattrapé. Elle te tend une feuille d'essai, roulée. Dessus, trois collines, les siennes, et au-dessus des collines, un point de rien, un trou dans le vélin, qui laisse passer le jour." },
    { before: "iii:apprentie", text: "Au bas de la tour, l'apprentie d'Oriel t'a rattrapé, la jeune fille qui dessinait près de la fenêtre. Elle te tend une feuille d'essai, roulée. Dessus, trois collines, toujours les mêmes, d'un trait sûr." },
    "« Pour quand je ne serai plus là, dit-elle. Comme ça, quelqu'un aura vu ce que j'ai vu. » Elle remonte. Sur l'escalier, tu vois le mur à travers ses chevilles.",
  ],
  choices: [{ back: "III_v_porte" }] });

module.exports = C;
