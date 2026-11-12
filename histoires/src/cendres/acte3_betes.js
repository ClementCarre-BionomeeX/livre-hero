// Act III · "Les bêtes oubliées", an adventure inside the adventure on the white plain (the child leads, "tu"
// masculine), opened from III_plaine once the walkers have spoken. A shepherdess drives a flock of animals that were
// forgotten by those who loved them: a yellow dog, too fat; a piebald horse still saddled for the queen's post; a
// small bear with a cross-shaped scar on the muzzle; a hawk with a bell. She is looking for a meadow where they can
// stop walking. The boy can lead them there (iii:betes=pre) or let them go on with the walkers (iii:betes=marche).
var A = { act: "III", noLead: true };
function P(o) { return Object.assign({}, A, o); }
var BACK = [{ back: "III_B_troupeau" }];
module.exports = {
  III_B_bergere: P({ title: "La bergère", place: "plaine",
    fx: { questSeen: "III_Q_betes" },
    text: [
      "Un bruit de clochettes, dans le blanc, qui ne vient pas des clochers. Un troupeau. Pas des moutons : des chiens, des chats, des chevaux, des chèvres, un âne, des oiseaux sur le dos des chevaux, un petit ours. Toutes les bêtes marchent ensemble, sans se battre, sans se presser, et une femme les mène, avec un bâton de noisetier.",
      "Elle est jeune, les joues rouges, un fichu sur la tête, des sabots. Elle a l'air de ne pas avoir froid. « Ce sont les bêtes qu'on a oubliées, dit-elle, avant que tu demandes. Personne ne les cherche. Alors elles viennent ici. Il faut bien que quelqu'un les garde. »",
      "« Je cherche un pré, dit-elle. Un endroit où elles pourraient s'arrêter de marcher. Ça fait longtemps que je cherche. Le blanc n'a pas de pré. »",
    ],
    choices: [
      { label: "Marcher un moment avec le troupeau", to: "III_B_troupeau" },
      { label: "La laisser passer", refuse: true, to: "III_plaine" },
    ] }),
  III_B_troupeau: P({ title: "Le troupeau", place: "plaine", hub: true,
    text: [
      "Les bêtes marchent autour de toi. Elles te frôlent, te reniflent, puis reprennent leur pas. Aucune ne te demande rien. C'est ce qui serre le cœur : elles ne demandent plus rien.",
      { with: "givre", text: "Givre trotte au milieu du troupeau comme s'il en avait toujours fait partie. Les chiens le laissent passer. Les chats, non." },
    ],
    choices: [
      { label: "Le chien jaune, qui traîne derrière", hide: { seen: "III_B_chien" }, to: "III_B_chien" },
      { label: "Le cheval pie, encore sellé", hide: { seen: "III_B_cheval" }, to: "III_B_cheval" },
      { label: "Le petit ours, qui marche à quatre pattes en regardant ses pieds", hide: { seen: "III_B_ours" }, to: "III_B_ours" },
      { label: "L'oiseau de proie, sur le dos d'un âne", hide: { seen: "III_B_faucon" }, to: "III_B_faucon" },
      { label: "Chercher un pré pour la bergère", if: { any: [{ seen: "III_B_chien" }, { seen: "III_B_cheval" }, { seen: "III_B_ours" }] }, why: "Tu ne connais pas encore assez le troupeau.", to: "III_B_pre", big: true },
      { label: "Les laisser continuer sans toi", to: "III_B_quitter" },
    ] }),
  III_B_chien: P({ title: "Le chien jaune", place: "plaine",
    text: [
      "Un chien jaune, court sur pattes, et gros. Trop gros pour un chien de ferme. Gros comme on le devient quand un enfant vous donne la moitié de son pain chaque jour, en cachette, sous la table. Il traîne derrière, en soufflant. Il s'arrête souvent pour regarder en arrière, vers rien.",
      "Tu t'accroupis. Il vient. Il pose la tête sur ton genou, et il soupire, d'un soupir de vieux chien, très long. Il sent le figuier. Tu ne saurais pas dire d'où tu connais cette odeur.",
    ],
    choices: [
      { label: "Le gratter derrière les oreilles, longtemps", fx: { flag: "iii:chien_jaune", ep: ["perso", 400] }, to: "III_B_chien_oreilles" },
      { label: "Le laisser à sa traîne", to: "III_B_troupeau" },
    ] }),
  III_B_chien_oreilles: P({ title: "Derrière les oreilles", place: "plaine",
    text: ["Il ferme les yeux. Il pousse sa tête contre ta main, pour que tu continues. Quand tu t'arrêtes, il te regarde, et il remue la queue, une fois, poliment, comme pour te remercier d'avoir essayé. Puis il repart, derrière le troupeau, en regardant en arrière. Ce n'est pas toi qu'il attend. Il attend un garçon de onze ans, qui avait toujours un morceau de pain dans la poche."],
    choices: BACK }),
  III_B_cheval: P({ title: "Le cheval pie", place: "plaine",
    text: [
      "Un cheval pie, noir et blanc, une selle de poste sur le dos, les sacoches encore bouclées. Le cuir porte les armes de la reine, une couronne sur une plume. Il marche au pas, la tête droite, comme s'il avait encore une route à tenir et une heure à respecter.",
      "Dans la sacoche, un pli scellé. Le cachet est intact. Il n'y a pas d'adresse dessus, ou plutôt il y en avait une, et elle s'est effacée. Il reste une ligne, en bas, d'une écriture pressée : *à remettre en main propre, avant le gel.*",
    ],
    choices: [
      { label: "Ouvrir le pli", fx: { ep: ["perso", 300], flag: "iii:courrier" }, to: "III_B_cheval_pli" },
      { label: "Le laisser cacheté, et reboucler la sacoche", fx: { ep: ["perso", 300] }, to: "III_B_cheval_boucle" },
    ] }),
  III_B_cheval_pli: P({ title: "Le pli", place: "plaine",
    text: ["Tu brises le cachet. À l'intérieur, une feuille blanche. Tout à fait blanche. Le message s'est oublié avec le cavalier. Tu la retournes. Au dos, une tache d'encre, et la trace d'un pouce, celui de quelqu'un qui a scellé la lettre trop vite, avant que l'encre sèche. C'est tout ce qui reste de la reine, ici. Une empreinte de pouce."],
    choices: BACK }),
  III_B_cheval_boucle: P({ title: "La sacoche", place: "plaine",
    text: ["Tu reboucles la sacoche. Le cheval tourne la tête vers toi, et il hennit, doucement, une fois. Il a gardé ce pli tout ce temps sans savoir pour qui. Ce n'est pas à toi de savoir à sa place. Il repart au pas, la tête droite, au milieu des chèvres."],
    choices: BACK }),
  III_B_ours: P({ title: "Le petit ours", place: "plaine",
    text: [
      "Un petit ours brun, pas plus haut qu'un chien de berger, pelé aux coudes. Il n'a plus de collier, mais on voit encore, dans sa fourrure, autour du cou, la trace d'un collier, plus claire. Au museau, une cicatrice ancienne, en forme de croix.",
      "Il marche à quatre pattes, la tête basse. De temps en temps, sans raison, il se dresse sur ses pattes de derrière, au milieu du troupeau, et il fait une révérence, à personne. Puis il retombe, et il reprend sa marche.",
      { if: { has: "corbe:ours" }, text: "En marchant, il grogne, très bas, deux syllabes. Toujours les mêmes. On dirait qu'il les répète pour ne pas les perdre." },
    ],
    choices: [
      { label: "Lui rendre sa révérence", fx: { ep: ["perso", 400], flag: "iii:ours" }, to: "III_B_ours_reverence" },
      { label: "Le laisser marcher", to: "III_B_troupeau" },
    ] }),
  III_B_ours_reverence: P({ title: "La révérence", place: "plaine",
    text: ["Tu t'inclines devant lui, profondément, comme devant un seigneur. Il s'arrête. Il te regarde, de ses yeux très doux. Puis il se dresse, et il te rend la révérence, lentement, avec soin, la meilleure qu'il ait jamais faite. Personne n'applaudit. Il n'y a personne pour applaudir. Il attend quand même un moment, au cas où."],
    choices: BACK }),
  III_B_faucon: P({ title: "L'oiseau de proie", place: "plaine",
    text: [
      "Sur le dos d'un âne gris, un aigle, les serres plantées dans le bât. Il a une bague de cuir à la patte, avec un grelot. Il ne dort pas. Il regarde le ciel blanc, en tournant la tête par petits coups, comme s'il cherchait le gant d'un maître.",
      "Quand tu tends le bras, il te regarde. Il ne vient pas. Il a déjà essayé, avec quelqu'un, une fois, sur une crête. Il ne sait plus si c'était une bonne idée.",
    ],
    choices: [{ label: "Baisser le bras", fx: { ep: ["perso", 200] }, to: "III_B_troupeau" }] }),
  III_B_pre: P({ title: "Le pré", place: "plaine",
    text: [
      "Un pré. Dans le blanc. Il faudrait que quelqu'un se souvienne d'un pré assez fort pour qu'il y en ait un. La bergère te regarde. « Toi, tu viens d'en haut, dit-elle. Tu en as vu, des prés. Pense à un. »",
      "Tu fermes les yeux. Tu penses au pré derrière le moulin, celui qui descend jusqu'au bief, où l'on menait la vache de Joris, où Pim et toi vous couchiez dans l'herbe haute pour que personne ne vous trouve.",
    ],
    choices: [
      { label: "Y penser de toutes tes forces", test: { dom: "magie", label: "Le pré", help: [{ if: { has: "iii:chien_jaune" }, v: 5 }, { if: { has: "iii:ours" }, v: 5 }, { if: { present: "givre" }, v: 10 }, { if: { present: "corbe" }, v: 10 }, { if: { has: "iii:pomme" }, v: 5 }] },
        win: { fx: { flag: ["iii:betes", "iii:betes=pre"], quest: "III_Q_betes", ep: ["perso", 1500] }, to: "III_B_pre_vert" },
        lose: { to: "III_B_pre_rate" } },
    ] }),
  III_B_pre_vert: P({ title: "L'herbe", place: "plaine",
    text: [
      "Sous tes pieds, quelque chose change. Le blanc devient moins blanc. Puis vert pâle, comme une herbe qui a passé l'hiver sous la neige. Puis vert. Ce n'est pas grand : la taille du pré derrière le moulin, exactement, avec la pente vers un bief qui n'est pas là. Mais c'est de l'herbe.",
      "Les bêtes s'arrêtent. Une à une. Le cheval pie baisse la tête et broute, la selle toujours sur le dos. L'âne se roule. Le petit ours s'assied, sur son derrière, et regarde ses pattes dans l'herbe. Le chien jaune se couche, et il ne regarde plus en arrière.",
      "La bergère plante son bâton dans le pré. Elle s'assied. « Elles vont pouvoir attendre, ici, dit-elle. Quelqu'un viendra peut-être. Sinon, ce n'est pas grave. Elles auront de l'herbe. »",
    ],
    choices: [{ back: "III_plaine" }] }),
  III_B_pre_rate: P({ title: "Le blanc", place: "plaine",
    text: ["Tu penses au pré. Mais le pré s'échappe : tu vois l'herbe, tu ne la sens pas ; tu vois Pim, tu n'entends pas son rire. Le blanc reste blanc. La bergère te touche l'épaule. « Ce n'est rien, dit-elle. Ils oublient vite, en haut. Même toi, un peu, déjà. » Elle relève son bâton. « On va continuer de marcher. On sait faire. »"],
    choices: [
      { label: "Réessayer", to: "III_B_pre" },
      { label: "Les laisser continuer sans toi", to: "III_B_quitter" },
    ] }),
  III_B_quitter: P({ title: "Les clochettes", place: "plaine",
    fx: { flag: "iii:betes", quest: "III_Q_betes" },
    text: ["Le troupeau s'éloigne, avec ses clochettes, vers l'endroit où vont les marcheurs. La bergère ne se retourne pas. Le chien jaune, si. Une seule fois. Puis le blanc les reprend, et longtemps après tu entends encore un grelot, un seul, de plus en plus loin."],
    choices: [{ back: "III_plaine" }] }),
};
