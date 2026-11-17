// L'Île Folle-Aiguille · side story « Le chien des fosses », on the island. One dawn at the hermit's hut the wolf-dog is
// gone: the colony's dogs went back to the wild twenty years ago, and their pack calls him. The child may call him
// back (chien:revenu), let him choose (he fights the brindle bitch who leads them, and kills her or spares her,
// depending on what he was given on board: chien:tue_chef, chien:epargne), or step into the circle (chien:cercle, or a
// bite: chien:morsure). Then the mutineers catch him in a net for a beach fight, as in the pits; the child frees him at
// night, and above the sleeping Malandain he waits for a word (chien:epargne_malandain or chien:malandain_mordu).
// chien:meute: the pack follows him, read at the chapel and after.
var GESTES = [{ has: "chien:pain" }, { has: "chien:voix" }, { has: "chien:assis" }, { has: "chien:main" }, { has: "chien:defendu" }];
module.exports = {
  passages: {
    XC_i_absent: { act: "IV", title: "La place vide", place: "cabane", ambiance: "nature",
      text: [
        "Tu te réveilles avant l'aube, et quelque chose manque. Il te faut un moment pour comprendre quoi : le poids, contre tes jambes, sur la natte. La chaleur. Le souffle.",
        "Le chien n'est pas là.",
        "La porte de la hutte est entrouverte. Dehors, dans la rosée, des traces de grandes pattes partent vers la forêt, droites, sans hésiter. Pas des traces de chien qui se promène, qui flaire, qui revient. Des traces de chien qui sait où il va.",
        "Sauveur est assis sur le seuil, sa tasse de café amer à la main. Il regarde les traces.",
        "« Ils l'ont appelé cette nuit, dit-il. Vous ne les avez pas entendus ? Vers trois heures. Je les entends depuis vingt ans. On finit par ne plus les entendre, sauf quand ils appellent quelqu'un. »",
      ],
      choices: [{ label: "« Qui l'a appelé ? »", to: "XC_i_sauveur" }] },
    XC_i_sauveur: { act: "IV", title: "Les chiens de la colonie", place: "cabane", ambiance: "nature",
      text: [
        "« Les chiens de la colonie, dit-il. Ceux de la Miséricorde. Ils avaient des chiens de berger, des chiens de garde, des chiens de ferme, comme tous les braves gens. Le jour des clefs, les chiens ont aboyé toute la journée. Le lendemain, il n'y avait plus personne pour les nourrir. » Il boit. « Alors ils sont partis dans la Sylve. Ils ont appris à chasser. Ils ont eu des petits, qui n'ont jamais vu un homme qui leur donne à manger. Ils sont redevenus ce que les chiens étaient avant qu'on leur donne à manger. »",
        "Il te regarde.",
        "« Votre chien vient d'un endroit où on lui a appris à tuer. Puis vous lui avez appris autre chose. Eux, ils lui proposent une troisième chose. Une meute. Il n'a jamais eu de meute. » Il pose sa tasse. « Je ne sais pas ce qu'il choisira. Je sais qu'il choisira. Les chiens ne font que ça, toute leur vie, choisir à qui ils appartiennent. Nous, nous faisons semblant de choisir pour eux. »",
      ],
      choices: [{ label: "Suivre les traces", to: "XC_i_traces" }] },
    XC_i_traces: { act: "IV", title: "Les traces", place: "sylve", ambiance: "nature",
      text: [
        "Les traces s'enfoncent dans la Sylve. Tu les suis toute la matinée, dans la boue, sur la mousse, le long d'un ruisseau. Elles se mêlent bientôt à d'autres. D'abord deux, puis cinq, puis tant que tu ne peux plus les compter, des traces de toutes tailles, qui convergent, qui tournent autour des siennes, comme des courants autour d'un rocher.",
        "Vers midi, tu entends. Des grognements, bas, nombreux, un bruit de gorge collectif, comme une forge qu'on attise. Tu avances en rampant, sous les fougères.",
        "Une clairière. Et dans la clairière, des chiens.",
        "Ils sont douze, peut-être quinze. De toutes les couleurs, de toutes les formes, des bâtards de bâtards, maigres, couturés de cicatrices, avec de longues pattes et des museaux pointus que vingt ans de forêt ont rendus plus loups que chiens. Ils forment un cercle. Au milieu du cercle, deux bêtes.",
        "Ton chien-loup, le poil hérissé, la tête basse, immobile. Et en face de lui, une chienne énorme, bringée, noire et fauve, la plus grande de la meute, avec une oreille arrachée et un regard d'une intelligence froide. La reine. Elle tourne autour de lui, lentement, sans le quitter des yeux. Le cercle se resserre.",
      ],
      choices: [
        { label: "L'appeler, de ta voix, celle du bord", test: { dom: "social", diff: 0, label: "Plus fort que la meute" }, win: { fx: { flag: "chien:revenu" }, to: "XC_i_rappel" }, lose: { to: "XC_i_combat" } },
        { label: "Le laisser choisir", to: "XC_i_combat" },
        { label: "Entrer dans le cercle", test: { dom: "nature", diff: 1, label: "Au milieu des chiens" }, win: { fx: { flag: ["chien:cercle", "chien:meute"] }, to: "XC_i_cercle" }, lose: { fx: { flag: "chien:morsure" }, to: "XC_i_morsure" } },
      ] },
    XC_i_rappel: { act: "IV", title: "La voix", place: "sylve", ambiance: "nature",
      text: [
        "Tu te lèves dans les fougères, et tu l'appelles. Par son nom. Avec la voix des nuits de l'entrepont, celle qui lui parlait à travers les barreaux, des heures, sans rien demander.",
        "Il tourne la tête.",
        "Toute la meute tourne la tête avec lui. Quinze paires d'yeux jaunes se posent sur toi. La reine bringée gronde, d'un grondement qui fait vibrer le sol. Tu ne bouges pas. Tu l'appelles encore.",
        "Et il vient. Il sort du cercle, lentement, sans courir, sans baisser la tête, en passant entre deux chiens qui s'écartent. Il vient jusqu'à toi, et s'assied à tes pieds, et regarde la meute, sans un bruit.",
        "La reine le regarde longtemps. Puis elle lève le museau et hurle, un long hurlement de loup, auquel toute la meute répond, et la clairière se vide en un instant, comme une eau qui s'en va par un trou.",
        "Tu rentres avec lui. Il marche contre ta jambe tout le chemin, si près que tu trébuches. Le soir, il ne dort pas. Il écoute la Sylve. Quand ils appellent, vers trois heures, il lève la tête, et la repose sur tes genoux.",
      ],
      choices: [{ label: "Rentrer à la hutte", fx: { quest: "XC2" }, back: "A4n_jours" }] },
    XC_i_combat: { act: "IV", title: "La reine", place: "sylve", ambiance: "nature",
      text: [
        "La reine bringée attaque la première, sans un bruit, d'un bond. Ton chien l'esquive d'un quart de tour, comme dans les fosses de la Basse-Fosse, et la mord à l'épaule en passant. Elle roule. Elle se relève. Le cercle hurle.",
        "C'est un combat de chiens des fosses contre un chien de la forêt. Elle est plus grande, plus lourde, elle a vingt ans de chasse dans les muscles. Il a d'autres choses dans les siennes : des mois de cage, des hommes qui pariaient, deux maîtres qu'il a tués. Il sait des choses qu'aucun chien sauvage ne sait. Il sait où mordre pour finir.",
        "Au bout d'une minute, elle est sur le dos, dans la boue, la gorge offerte, et il est au-dessus d'elle, les mâchoires ouvertes, à un pouce de la veine.",
        "La meute se tait. Toi aussi. Tout le monde attend.",
      ],
      choices: [
        { label: "Attendre ce qu'il va faire", hide: { not: { count: GESTES, min: 4 } }, fx: { flag: ["chien:epargne", "chien:meute"] }, to: "XC_i_epargne" },
        { label: "Attendre ce qu'il va faire", hide: { count: GESTES, min: 4 }, fx: { flag: ["chien:tue_chef", "chien:meute"] }, to: "XC_i_tue" },
      ] },
    XC_i_epargne: { act: "IV", title: "La gorge offerte", place: "sylve", ambiance: "nature",
      text: [
        "Il referme les mâchoires. Sur rien.",
        "Il reste au-dessus d'elle encore un instant, à respirer fort, les babines retroussées. Puis il recule. D'un pas. De deux. Il la laisse se relever.",
        "Elle se relève, la tête basse, et vient lui lécher le museau, longuement, comme les chiots lèchent les mâchoires de leur mère. La meute s'approche, un à un, et fait de même. Puis ils s'assoient autour de lui, tous, en cercle.",
        "Ton chien regarde vers les fougères. Vers toi. Il t'a su là depuis le début.",
        "Tu penses aux jours d'entrepont, au pain sec tendu à travers les barreaux, à la voix, à la main posée pour la première fois sur sa tête, et à tout ce qui, en lui, vient d'empêcher ses mâchoires de se fermer. Tu ne sais pas qui l'a appris à qui.",
        "Il vient vers toi. La meute le suit, à distance. Elle te suivra, désormais, elle aussi, à distance, dans la Sylve, comme une ombre qui a beaucoup de pattes.",
      ],
      choices: [{ label: "Rentrer à la hutte, suivi{e} de loin", fx: { quest: "XC2" }, back: "A4n_jours" }] },
    XC_i_tue: { act: "IV", title: "La gorge offerte", place: "sylve", ambiance: "nature",
      text: [
        "Les mâchoires se ferment.",
        "C'est rapide. C'est propre. C'est le geste qu'on lui a appris, dans les fosses, des dizaines de fois, avec des hommes qui criaient autour et qui jetaient de l'argent. Personne ne crie, ici. La reine bringée ne bouge plus.",
        "Il se redresse. Il a du sang jusqu'aux yeux. La meute s'approche, un par un, la tête basse, et vient lui lécher le museau. Il les laisse faire. Il est leur roi, maintenant. Il l'est devenu de la seule façon qu'il connaissait.",
        "Il regarde vers les fougères. Vers toi. Il vient. La meute le suit.",
        "Tu lui laves le museau dans le ruisseau, longtemps, avec tes mains. Il se laisse faire. Il te lèche les doigts. Il est doux. Il vient de tuer. Il est les deux à la fois, et il ne voit pas où est le problème. Toi, tu le vois. Tu ne sais pas qui, de vous deux, a raison.",
      ],
      choices: [{ label: "Rentrer à la hutte, suivi{e} de loin", fx: { quest: "XC2" }, back: "A4n_jours" }] },
    XC_i_cercle: { act: "IV", title: "Le cercle", place: "sylve", ambiance: "nature",
      text: [
        "Tu sors des fougères et tu marches. Droit sur le cercle. Lentement. Les mains ouvertes, basses, le long du corps. Sans regarder aucun chien dans les yeux, sauf le tien.",
        "Le cercle s'ouvre. Pas pour te laisser passer : pour te prendre. Les chiens se referment derrière toi. Tu es dedans. Tu sens leur odeur de fauve, de boue, de sang séché. Tu entends leurs souffles. La reine bringée s'est tournée vers toi. Elle te regarde, la tête basse, la lèvre relevée sur une rangée de dents jaunes.",
        "Ton chien vient se mettre entre elle et toi. Il ne gronde pas. Il s'assied. Contre tes jambes. Comme sur la natte, la nuit.",
        "La reine regarde le chien assis contre l'enfant. Elle regarde longtemps. Elle n'a jamais vu ça : un chien qui s'assied, au milieu d'une meute, contre un humain, et qui n'a pas peur.",
        "Elle se couche. Lentement. Le museau sur les pattes. Puis un autre chien. Puis un autre. Toute la meute se couche, autour de vous deux, dans la clairière, au soleil de midi, comme si c'était l'heure de la sieste.",
        "Tu restes là une heure. Puis tu te lèves et tu pars, et ton chien vient avec toi. La meute se lève, et suit, de loin.",
      ],
      choices: [{ label: "Rentrer à la hutte, suivi{e} de loin", fx: { quest: "XC2" }, back: "A4n_jours" }] },
    XC_i_morsure: { act: "IV", title: "La morsure", place: "sylve", ambiance: "nature",
      text: [
        "Tu as fait trois pas dans le cercle quand un chien jaune, maigre, derrière toi, te saute sur le mollet, sans prévenir, et serre.",
        "La douleur est blanche. Tu tombes. Et au même instant, le cercle explose. Ton chien a bondi, par-dessus la reine, et s'est jeté sur le jaune, et le jaune a lâché ta jambe pour hurler. La meute recule, d'un seul mouvement. Le jaune s'enfuit dans les fougères en traînant une patte.",
        "Ton chien revient vers toi. Il te lèche la jambe, là où le sang coule, longtemps, avec application. Puis il se plante devant toi, face à la meute, les pattes écartées, et il gronde, un grondement si bas qu'il fait trembler les feuilles. Personne ne s'approche.",
        "Tu rentres à la hutte en boitant, appuyé{e} sur un bâton, avec ton chien collé à ta jambe valide. Sauveur nettoie la morsure au vin de palme, et la coud, avec une aiguille de pêcheur, en fredonnant. « Il a choisi, dit-il. Il vous a choisi{e}, vous. Contre eux. C'est un mauvais calcul pour un chien. C'est un bon calcul pour un ami. »",
      ],
      choices: [{ label: "Dormir, la jambe en feu", fx: { flag: "chien:revenu", quest: "XC2" }, back: "A4n_jours" }] },

    // ---------------------------------------------------------------- the net, and Malandain
    XC_i_filet: { act: "IV", title: "Le filet", place: "sylve", ambiance: "nature",
      text: [
        "Un après-midi, il ne revient pas de sa tournée. Le soir non plus.",
        "Tu le trouves le lendemain, à la lisière, au-dessus de la plage des mutins, en te cachant dans les fougères. Il est sur le sable, au milieu du camp, pris dans un filet de pêche, ficelé comme un paquet, attaché à un piquet. Il ne se débat plus. Il a la gueule en sang, à force d'avoir mordu les mailles.",
        "Autour, des hommes. Ils boivent. Ils rient. Ils parient. Au milieu d'eux, Malandain, accroupi, un bâton à la main, qui l'agace à travers le filet, en lui piquant le museau, en riant.",
        "« Un chien des fosses ! dit-il. Le loup de la graine d'Hersant ! On l'a vu dans les fosses de la Basse-Fosse, ce bestiau, il a tué deux hommes ! Demain soir, on lui trouve un adversaire. Un cochon sauvage. Deux, s'il le faut. Et on parie. » Il rit. « Comme au bon vieux temps. »",
        "Le chien ne le regarde pas. Il regarde vers la lisière. Vers les fougères. Il sait que tu es là.",
      ],
      choices: [{ label: "Attendre la nuit, et y aller quand ils dormiront", test: { dom: "discretion", diff: 1, label: "À travers le camp endormi" }, win: { to: "XC_i_nuit" }, lose: { to: "XC_i_nuit_rate" } }] },
    XC_i_nuit: { act: "IV", title: "Le camp endormi", place: "plage", ambiance: "nuit",
      text: [
        "Tu traverses le camp à quatre pattes, entre les dormeurs, les bouteilles, les braises. Un homme se retourne dans son sommeil et te frôle le bras. Tu restes immobile, une minute entière, à compter les battements de ton cœur. Il ronfle.",
        "Le chien t'attend. Il ne bouge pas. Il ne fait pas un bruit. Tu coupes les mailles une à une avec ton couteau, en commençant par le museau. Il te lèche la main à travers le filet.",
        "La dernière maille cède. Il se lève. Il s'ébroue, sans bruit. Et il ne vient pas vers toi.",
        "Il va vers Malandain.",
        "Malandain dort à trois pas, sur le dos, la bouche ouverte, un bras sur les yeux, la gorge offerte à la lune comme celle de la reine bringée dans la clairière. Le chien s'arrête au-dessus de lui. Ses babines se retroussent, lentement, sans un son. Il regarde la gorge. Puis il tourne la tête vers toi.",
        "Il attend. Il attend un mot. Le tien.",
      ],
      choices: [
        { label: "Secouer la tête, et l'appeler tout bas", fx: { flag: "chien:epargne_malandain" }, to: "XC_i_appel" },
        { label: "Ne rien dire", fx: { flag: "chien:malandain_mordu" }, to: "XC_i_laisse" },
      ] },
    XC_i_nuit_rate: { act: "IV", title: "Le camp endormi", place: "plage", ambiance: "nuit",
      text: [
        "Une bouteille roule sous ton genou et va tinter contre une autre. Un homme se dresse sur un coude. « Qui va là ? » Tu ne bouges plus. Il regarde. Il ne voit rien. Il se recouche. Mais il ne dort plus, et toi, tu ne peux plus avancer.",
        "Le chien a tout entendu. Il te regarde à travers le filet. Puis il se met à mordre. Pas les mailles : le piquet. Il mord le piquet de bois, à la base, avec une patience de rat, sans un grognement, pendant que tu restes immobile dans le noir à trente pas. Il mord une heure. Le piquet craque.",
        "Il sort du camp en traînant le filet derrière lui, à pas de loup, le piquet cassé ballant. Il passe devant Malandain, qui dort la gorge à l'air. Il ne s'arrête pas. Il vient jusqu'à toi, dans les fougères, et se laisse couper les mailles.",
        "Au matin, sur la plage, les mutins trouvent un trou dans le sable, un piquet rongé, et pas de chien. Malandain jure qu'il le retrouvera. Il ne le retrouvera pas.",
      ],
      choices: [{ label: "Rentrer à la hutte", fx: { flag: "chien:epargne_malandain" }, back: "A4n_jours" }] },
    XC_i_appel: { act: "IV", title: "Le mot", place: "plage", ambiance: "nuit",
      text: [
        "Tu secoues la tête. Lentement. Et tu dis son nom, à peine, du bout des lèvres, comme dans l'entrepont.",
        "Il regarde encore la gorge de Malandain, une seconde. Puis il referme la gueule, et il vient. Sans hâte. Sans regret. Comme on quitte une table où l'on n'a pas faim.",
        "Vous sortez du camp ensemble, sans bruit. Derrière vous, Malandain dort, la bouche ouverte, et ne saura jamais qu'il a été, pendant le temps d'un mot, à un pouce de la mort, et que c'est un enfant qui a décidé.",
      ],
      choices: [{ label: "Rentrer à la hutte", back: "A4n_jours" }] },
    XC_i_laisse: { act: "IV", title: "Le silence", place: "plage", ambiance: "nuit",
      text: [
        "Tu ne dis rien. Tu ne secoues pas la tête. Tu ne fais rien.",
        "Le chien attend encore une seconde. Puis il baisse la tête.",
        "Il ne tue pas. Il mord. Une seule fois, à l'épaule, d'un coup sec, profond, jusqu'à l'os, et il lâche aussitôt. Malandain se réveille en hurlant. Le camp se réveille. Le chien est déjà dans les fougères, avec toi, et vous courez, et derrière vous les coups de feu partent au hasard dans la nuit.",
        "Tu ne sais pas s'il a voulu tuer et s'est retenu, ou s'il a voulu seulement marquer. Tu ne le sauras jamais. Malandain, lui, saura. Il portera la marque des dents jusqu'à la fin, à l'épaule droite, celle qui tient le couteau.",
      ],
      choices: [{ label: "Rentrer à la hutte, en courant", back: "A4n_jours" }] },
  },
  extras: {
    quests: [
      { id: "XC2", act: "IV", kind: "annexe", title: "La meute", start: "XC_i_absent", echo: ["chien:meute", "chien:revenu", "chien:epargne", "chien:tue_chef"] },
    ],
  },
};
