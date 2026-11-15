// Act V · the road west under the white snow, between V_route and V_compagnons (the child leads, "tu" masculine):
// a few stops in the frozen country before Pallanche. The post house where the courier is still awaited, an inn where
// a wedding meal has stopped mid-toast, a carriage in the ditch, a wayside shrine. Each returns to the road.
var A = { act: "V", noLead: true };
function P(o) { return Object.assign({}, A, o); }
var BACK = [{ back: "V_r_chemin" }];
module.exports = {
  V_r_chemin: P({ title: "La route de l'ouest", place: null, hub: true,
    text: [
      "La route file vers l'ouest, droite, sous la neige qui tombe sans bruit. De loin en loin, une maison, un relais, une charrette arrêtée, les brancards dans la neige. Vous êtes, avec la neige, les seules choses en mouvement.",
      { if: { all: [{ seen: "V_r_relais" }, { seen: "V_r_auberge" }, { seen: "V_r_carrosse" }] }, text: "Tu commences à reconnaître les sourires : la même courbe, la même douceur, sur tous les visages. C'est ce qui fait le plus peur." },
    ],
    choices: [
      { label: "Le relais de poste, au croisement", hide: { seen: "V_r_relais" }, to: "V_r_relais" },
      { label: "Une auberge, toutes fenêtres éclairées", hide: { seen: "V_r_auberge" }, to: "V_r_auberge" },
      { label: "Un carrosse, versé dans le fossé", hide: { seen: "V_r_carrosse" }, to: "V_r_carrosse" },
      { label: "Un petit oratoire, au bord du chemin", hide: { seen: "V_r_oratoire" }, to: "V_r_oratoire" },
      { label: "Un moulin à vent, dont les ailes tournent sans vent", hide: { seen: "V_r_moulin" }, to: "V_r_moulin" },
      { label: "Un chien de berger, qui aboie pour toi", hide: { seen: "V_r_chien" }, to: "V_r_chien" },
      { label: "Marcher sans plus t'arrêter jusqu'à l'aube", to: "V_compagnons", big: true },
    ] }),
  V_r_relais: P({ title: "Le relais", place: null,
    text: [
      "Le relais de poste, au croisement de deux routes. Les chevaux sont dans l'écurie, debout, immobiles, la neige sur le dos. Le postillon est assis sur le banc, une chope pleine à la main, où la bière a gelé en surface. Le maître de poste est devant le tableau des courriers attendus, la craie levée.",
      "Le tableau est vide. Tout a été effacé. Il ne reste, en haut, qu'une trace de craie, à moitié essuyée, qu'on devine encore : *un cheval pie.*",
      { if: { has: "iii:courrier" }, text: "Le pli restera en route. Ceux qui l'attendaient ont oublié l'attendre." },
    ],
    choices: [
      { label: "Prendre la craie, et récrire ce qui manque", fx: { ep: ["perso", 400] }, to: "V_r_relais_craie" },
      { back: "V_r_chemin" },
    ] }),
  V_r_relais_craie: P({ title: "La craie", place: null,
    text: ["Tu prends la craie dans sa main levée. Il se laisse faire. Tu écris, en haut du tableau : *Courrier de la reine. Un cheval pie. Attendu.* Le mot *attendu* t'est venu sans raison. Tu laisses la craie dans sa main. Au moment où tu passes la porte, derrière toi, tu entends le maître de poste, très bas, dire : « Attendu. » Rien d'autre. Ça suffit pour un relais."],
    choices: BACK }),
  V_r_auberge: P({ title: "La noce", place: null,
    text: [
      "Dans l'auberge, une noce. Une grande table, une nappe blanche, des plats à moitié mangés, des chandelles fondues jusqu'au chandelier. Trente invités, debout, le verre levé. Au bout de la table, la mariée, en robe de laine verte, une couronne de buis, le verre levé aussi. Le marié est absent. Sa chaise est vide, la serviette pliée sur l'assiette.",
      "Ils trinquaient. À quoi, à qui, ils l'ont oublié. Ils ont gardé le verre levé. La mariée sourit à la chaise vide.",
    ],
    choices: [
      { label: "Chercher le marié", fx: { ep: ["perso", 300] }, to: "V_r_auberge_marie" },
      { back: "V_r_chemin" },
    ] }),
  V_r_auberge_marie: P({ title: "Le marié", place: null,
    text: [
      "Tu le trouves dans la cour, derrière l'auberge, debout dans la neige, une bague à la main. Il était sorti prendre l'air, peut-être, ou pleurer, ou vomir le vin. Il a oublié dans quel ordre on fait les choses. Il tient la bague, et il regarde l'auberge, planté dans la neige jusqu'aux chevilles.",
      "Tu le prends par le bras. Il se laisse conduire. Tu l'assieds sur la chaise vide, à côté de la mariée. Il pose la bague sur la nappe, devant elle. Elle baisse les yeux vers la bague. Son sourire change. Très peu. Comme quelqu'un qui reconnaît un air sans retrouver les paroles.",
    ],
    choices: BACK }),
  V_r_carrosse: P({ title: "Le carrosse", place: null,
    text: [
      "Un carrosse aux armes d'une maison de Vasselin, versé dans le fossé, une roue en l'air qui tourne encore, très lentement, par habitude. Les traits sont rompus net : les chevaux ont arraché leurs harnais et pris le large. Le cocher est assis sur le talus. À l'intérieur, une dame en fourrure, la tête en bas, parfaitement calme, qui tient son chapeau sur ses genoux.",
      "« On allait à Pallanche, dit-elle, aimablement, quand tu ouvres la portière. Pour la Grande Cession. On nous a dit qu'il fallait y être, que tout le monde y serait. » Elle réfléchit. « Ce que je voulais céder, je l'ai oublié. J'avais une liste. »",
    ],
    choices: [
      { label: "Lui demander la liste", fx: { ep: ["perso", 300] }, to: "V_r_carrosse_liste" },
      { label: "La sortir de là, et l'asseoir sur le talus", fx: { pv: -1, ep: ["perso", 300] }, to: "V_r_carrosse_talus" },
    ] }),
  V_r_carrosse_liste: P({ title: "La liste", place: null,
    text: ["Elle fouille dans son manchon, la tête en bas, et te tend un papier plié. La liste est écrite d'une belle main, à l'encre violette. *Le jour où Mère m'a giflée devant les invités. La nuit de la petite vérole. Le visage de Robin.* Le reste a pâli. Il reste trois lignes, et leur sens lui échappe. Tu remets la liste dans son manchon. Elle te remercie, la tête en bas, avec beaucoup de grâce."],
    choices: BACK }),
  V_r_carrosse_talus: P({ title: "Le talus", place: null,
    text: ["Elle est légère, sous la fourrure. Tu la poses sur le talus, à côté du cocher. Elle remet son chapeau, l'ajuste, et regarde la route, vers l'ouest. « Merci, mon enfant, dit-elle. On attendra la prochaine voiture. » La route est vide jusqu'à l'horizon. Elle a l'air d'une femme qui a toujours su attendre la prochaine voiture."],
    choices: BACK }),
  V_r_oratoire: P({ title: "L'oratoire", place: null,
    text: [
      "Un petit oratoire de pierre, au bord du chemin, haut comme un homme, avec une statue de saint usée par la pluie jusqu'à n'avoir plus de visage. Au pied de la statue, des offrandes : des fleurs séchées, des rubans, des petits papiers pliés. Des prières. Les gens d'ici écrivaient leurs prières, et les glissaient sous le socle.",
      "Les papiers sont blancs. Tous. La neige a mangé les prières, ou bien les fidèles ont oublié ce qu'ils demandaient.",
    ],
    choices: [
      { label: "Écrire une prière, toi aussi, sur un papier blanc", fx: { ep: ["perso", 400] }, to: "V_r_oratoire_priere" },
      { back: "V_r_chemin" },
    ] }),
  V_r_oratoire_priere: P({ title: "Une prière", place: null,
    text: ["Tu prends un papier. L'encre te manque. Tu écris avec le doigt, dans le givre du papier, en appuyant. Ta prière ne demande rien pour toi. Tu écris les noms des gens du moulin, puis de ceux qui marchent avec toi, et, tout au bout, après une hésitation, le tien. Tu glisses le papier sous le socle. Le saint sans visage se tait. C'est ce qu'on attend d'un saint."],
    choices: BACK }),
};
