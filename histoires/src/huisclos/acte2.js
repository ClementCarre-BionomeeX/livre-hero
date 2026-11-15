// Act II, the white day: the storm shuts the house in. In the morning a letter is missing; at eleven Germain speaks of
// the forest; at five the draft of the will sets the house against itself; at nine the lamp goes out. The vigil of the
// second night is Jeanne's (gens.js).
module.exports = {
  B_lettre: {
    act: "II", title: "La lettre disparue", place: "cuisine", devant: "mariette",
    text: [
      "Le deuxième jour commence dans un vent qui fait gémir toute la maison. Il neige à l'horizontale. De la fenêtre de la cuisine, on ne voit plus la grange. On ne voit plus rien.",
      "Mariette te sert ton café et reste debout à côté de toi, la cafetière à la main, plus longtemps qu'il ne faut. Puis elle parle bas, vite, en regardant la porte.",
      "« Ta mère t'avait écrit. L'après-midi d'avant, en quatre heures, avec la plume attachée à la main. C'est moi qui ai posé la lettre sur le bureau, sous l'encrier, à ton nom. Hier matin, elle n'y était plus. » Elle repose la cafetière sur le fourneau. « Je n'ai rien vu. Je te le dis parce qu'elle était à toi. »",
      "Elle retourne à son évier. Elle a dit tout ce qu'elle dira.",
    ],
    choices: [
      { label: "Demander à Odile, tout de suite, devant tout le monde", to: "B_lettre_table" },
      { label: "Remercier Mariette, et garder ça pour toi", fx: { trait: { aveu: -1 }, attache: { mariette: 1 } }, to: "H_cuisine" },
    ],
    silence: { who: "mariette", to: "H_cuisine" },
  },
  B_lettre_table: {
    act: "II", title: "La lettre disparue", place: "salle", devant: "odile", fx: { trait: { aveu: 1 } },
    text: [
      "Tu entres dans la grande salle, où Odile, Germain et le docteur prennent leur café, et tu demandes, assez fort pour être entendu{e} : « Qui a pris la lettre que maman m'avait laissée sur le bureau ? »",
      { if: "passe:theatre", text: "Tu as joué cette scène sur des tréteaux, la femme qu'on accuse et qui beurre sa tartine. Odile la joue mieux que toutes les actrices de ta troupe." },
      "Germain lève les sourcils, sincèrement surpris. Le docteur regarde son café. Odile beurre sa tartine jusqu'au bord, très soigneusement.",
      "« Maman n'écrivait plus, dit-elle. Elle ne pouvait plus tenir une plume. Quelqu'un t'a raconté des histoires. » Elle mord dans sa tartine. Elle n'a pas regardé du côté de la cuisine. Elle sait très bien qui raconte des histoires dans cette maison.",
    ],
    choices: [
      { label: "Laisser tomber, pour l'instant", to: "H_salle" },
    ],
    silence: { who: "odile", to: "H_salle" },
  },
  B_germain: {
    act: "II", title: "Le bois des Fayards", place: "bureau", devant: "germain",
    text: [
      "Germain t'attend dans le bureau, au secrétaire de ta mère, assis dans son fauteuil à coussin. Il se lève quand tu entres, et t'offre le fauteuil. Tu ne le prends pas. Il s'y rassoit.",
      "« Je vais te parler franchement, dit-il, parce que tu es de la famille et que tu es quelqu'un d'intelligent. Ta mère t'a laissé le bois des Fayards. C'est dans son testament, chez Combaz, au bourg. Quarante arpents. »",
      "« Il y a un acheteur, Vernet, le marchand de Saint-Amans. Neuf cents livres, comptant, pour la coupe. C'est une fortune. La scierie en a besoin, je ne te le cache pas : les affaires ont été dures, cette année, avec ta mère malade. Ta mère allait signer. Elle était d'accord. » Il sourit. « Il ne manque que ta signature, maintenant. Tu n'as rien à faire. Tu signes, tu repars, l'argent te suit à Varenne. »",
      "Il attend. Il a l'air de quelqu'un qui a l'habitude qu'on lui dise oui.",
    ],
    choices: [
      { label: "Lui demander à lire l'acte d'abord", hide: { item: "acte_vente" }, fx: { item: "acte_vente" }, to: "B_germain_acte" },
      { label: "Lui dire que tu signeras, après l'enterrement", fx: { flag: "vente:promise", regard: { germain: "cordial" } }, to: "B_germain_fin" },
      { label: "Lui dire que tu ne vendras pas le bois de ton père", fx: { flag: "germain:refus", regard: { germain: "mefiant" }, trait: { aveu: 1 } }, to: "B_germain_fin" },
    ],
    silence: { who: "germain", fx: { flag: "vente:tacite" }, to: "B_germain_fin" },
  },
  B_germain_acte: {
    act: "II", title: "L'acte", place: "bureau", devant: "germain",
    text: [
      "Germain sort de sa poche intérieure un papier plié en quatre et te le tend, de bonne grâce. Un bel acte de notaire, d'une écriture de clerc. La coupe des Fayards, neuf cents livres, au sieur Vernet.",
      "Il est daté du six décembre. La ligne de la signature est vide, et juste au-dessus, une grosse tache d'encre a coulé et séché, comme d'une plume qu'on aurait jetée sur la feuille.",
      "« Tu peux le garder pour le lire tranquillement, dit Germain. J'en ai un double. »",
    ],
    choices: [
      { label: "Lui dire que tu signeras, après l'enterrement", fx: { flag: "vente:promise", regard: { germain: "cordial" } }, to: "B_germain_fin" },
      { label: "Lui dire que tu ne vendras pas le bois de ton père", fx: { flag: "germain:refus", regard: { germain: "mefiant" }, trait: { aveu: 1 } }, to: "B_germain_fin" },
    ],
    silence: { who: "germain", fx: { flag: "vente:tacite" }, to: "B_germain_fin" },
  },
  B_germain_fin: {
    act: "II", title: "Le bois des Fayards", place: "bureau",
    text: [
      { if: { has: "vente:promise" }, text: "Germain se lève et te serre la main, très fort. « Je savais qu'on s'entendrait. Après l'enterrement, alors. On ira chez Combaz ensemble, ou il montera, ça m'est égal. »" },
      { if: { has: "germain:refus" }, text: "Germain garde son sourire, mais le sourire est devenu une chose qu'il tient à bout de bras. « Réfléchis, dit-il. Tu as trois jours. Tu ne connais pas les affaires d'ici. »" },
      { if: { all: [{ has: "vente:tacite" }, { not: { any: ["vente:promise", "germain:refus"] } }] }, text: "Tu ne dis rien. Germain prend ton silence pour ce qu'il veut qu'il soit. « Bon. On en reparlera après l'enterrement, mais je vois qu'on est d'accord. » Il te tape sur l'épaule. Tu n'as rien promis. Il est persuadé du contraire." },
      "Par la fenêtre du bureau, à travers la neige qui file, on devine à peine le versant des Fayards, une masse plus sombre dans le blanc.",
    ],
    choices: [{ label: "Laisser Germain à ses comptes", to: "H_salle" }],
  },
  B_testament: {
    act: "II", title: "Le brouillon", place: "salle", fx: { flag: ["testament:vu", "lettre:boite"] },
    text: [
      "Vers cinq heures, des éclats de voix montent du bureau. La voix de Germain, puis celle d'Odile, plus haute que tu ne l'as jamais entendue.",
      "Tu t'approches. La porte est entrouverte. Odile tient une feuille à la main, une feuille raturée, et Germain est debout devant le secrétaire grand ouvert, les tiroirs tirés.",
      "« La maison à moi, “qui l'a gagnée”, lit Odile. Et les Fayards à l'autre, “pour qu'il y ait encore quelque chose de son père qui pousse”. » Elle rit, d'un rire affreux. « Qui pousse. Elle savait très bien que tu voulais les couper, et elle le lui donne pour que ça pousse. »",
      "« C'est un brouillon, dit Germain. Ça ne vaut rien. Combaz a le vrai. »",
      "« Le vrai dit la même chose, tu le sais bien, puisque tu es allé le lire en cachette chez Combaz en novembre. » Odile pose la feuille sur le secrétaire, très doucement. Puis elle sort du bureau, passe devant toi sans te voir, et monte l'escalier.",
    ],
    choices: [
      { label: "Suivre Odile dans l'escalier", to: "B_testament_odile" },
      { label: "Entrer dans le bureau, avec Germain", to: "B_testament_germain" },
      { label: "Rester où tu es, et laisser la maison se calmer", to: "H_salle" },
    ],
  },
  B_testament_odile: {
    act: "II", title: "Le brouillon", place: "etage",
    text: [
      "Tu montes derrière elle, à quelques marches. Dans le couloir de l'étage, Odile ne va pas vers sa chambre. Elle va au bout, devant la porte de Lucien. Elle sort une clef de sa poche, ouvre, entre, et referme derrière elle.",
      "Tu restes dans le couloir. Au bout d'un moment, à travers la porte, une petite musique grêle et fausse se met à jouer. « Au clair de la lune ». Elle joue jusqu'au bout, et s'arrête. Puis plus rien.",
      "Quand Odile ressort, elle a le visage lavé et les yeux secs. Elle referme à clef, te voit, et passe à côté de toi comme si tu étais un meuble du couloir.",
    ],
    choices: [{ label: "La laisser passer", to: "H_etage" }],
  },
  B_testament_germain: {
    act: "II", title: "Le brouillon", place: "bureau", devant: "germain",
    text: [
      "Germain referme les tiroirs du secrétaire un par un, du plat de la main. Il ne cherche pas à cacher ce qu'il faisait.",
      "« Tu vois bien, dit-il. La maison à elle, les Fayards à toi, la scierie à moitié, et moi au milieu avec Vernet sur le dos. Ta mère a fait ça pour nous diviser. Elle a toujours aimé ça, diviser. » Il te regarde. « Il faut vendre, crois-moi. Après, chacun reprend ses billes, et on ne se doit plus rien. »",
    ],
    choices: [{ label: "Laisser Germain à ses tiroirs", to: "H_salle" }],
    silence: { who: "germain", to: "H_salle" },
  },
  B_lampe: {
    act: "II", title: "La lampe", place: "salle", fx: { angoisse: 2 },
    text: [
      "À neuf heures, on est tous dans la grande salle, parce que c'est la seule pièce où le feu tient tête au vent. Germain fait une réussite. Jeanne coud. Odile raccommode. Le docteur boit. Mariette tricote près de la porte de la cuisine, une oreille vers l'étage.",
      "Une rafale plus forte que les autres secoue les volets, la porte de la cour s'ouvre d'un coup, et un tourbillon de neige entre, et la lampe s'éteint. Le feu se couche sous le vent. Pendant quelques secondes, il n'y a plus rien que le noir et le hurlement de la tempête dans la cheminée.",
      { trouble: true, text: "Dans le noir, quelqu'un respire tout près de toi. Tu sens un souffle froid sur ta nuque, comme d'une bouche mouillée. Tu ne bouges pas. Tu n'oses pas bouger." },
      { calme: true, text: "Dans le noir, tu entends Germain qui jure, Mariette qui se lève pour aller fermer la porte, le docteur qui rit tout seul." },
      { tendre: true, text: "Une main trouve la tienne sur la table, et la serre, une fois, fort. Une main de femme, avec une alliance. Puis elle s'en va.", else: "Une main frôle la tienne sur la table, et s'en va." },
      "Puis la voix du docteur, dans le noir, pâteuse et très douce : « Je l'ai laissée sur la cheminée, cette fiole. Hors de ses mains. »",
      "Quelqu'un frotte une allumette. C'est Odile. Son visage, dans la petite flamme, est blanc comme la nappe.",
    ],
    choices: [
      { label: "T'asseoir près du docteur, pendant que les autres cherchent les chandelles", to: "Q_fabre_nuit" },
      { label: "Aider Mariette à trouver les chandelles dans le buffet", fx: { angoisse: -1, attache: { mariette: 1 } }, to: "H_salle" },
      { label: "Aller sur le seuil, dans la tempête, respirer", fx: { angoisse: 1 }, to: "H_cour" },
    ],
  },
};
