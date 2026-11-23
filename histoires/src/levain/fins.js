// « Le Levain de la Banque » · noon, and the five endings. Z_midi reads whether Eugénie came home, and whether the Doux
// owned up to their letter.
function fin(id, title, place, text) { return { act: "I", title: title, place: place, end: true, fx: { flag: "fin:" + id }, text: text }; }
module.exports = {
  Z_midi: { act: "I", title: "Midi", place: "fournil",
    branch: [
      { if: { has: "eugenie:trouvee" }, to: "F_eugenie" },
      { to: "F_vide" },
    ] },

  F_fournee: fin("fournee", "Le pain des deux clans", "rue", [
    "À midi, la porte blindée s'ouvre sur la grande rue, et l'odeur sort la première, chaude, épaisse, avec ce goût de pomme et de vin qu'Eugénie donne à tout ce qu'elle touche. La queue frémit d'un bout à l'autre comme une couleuvre qu'on réveille.",
    "Au milieu de la queue, à la place qui lui revient, c'est-à-dire la dernière, le Baron Doux attend, son gilet blanc sur les épaules, les mains jointes devant lui. Ses garçons sont derrière. De la lettre au beurre, la rue garde le silence. Tout le monde le sait, et le savoir suffit.",
    "Quand son tour arrive, Firmin lui tend une miche, et une seconde, plus petite, à part, enveloppée dans du papier. « Celle-là est sans sel, dit Firmin. Pour essayer. La recette, c'est farine, eau, et Eugénie. Le sel, je le mets parce que la ville le demande. Pour vous, une fois par semaine, je n'en mettrai pas. »",
    "Le Baron prend la petite miche comme on prend un nouveau-né. Il la porte à son nez. Il ferme les yeux. Quand il les rouvre, ils sont humides, et il dit d'une voix si douce que la rue entière se penche pour l'entendre : « Elle est fade. » Il sourit. « Elle est parfaite. »",
    { if: { item: "registre" }, text: "Le soir, la couverture vide du Registre des créances est clouée au-dessus de la porte du fournil, comme un trophée de chasse. On vient de loin pour la voir. On la touche en passant, pour la chance, et pour être bien sûr." },
  ]),
  F_eugenie: fin("eugenie", "La mère est rentrée", "rue", [
    "À midi, la porte blindée s'ouvre sur la grande rue, et l'odeur sort la première. La queue frémit d'un bout à l'autre. Le pain d'aujourd'hui est un peu bleu à la mie, de l'encre de banque, et personne ne s'en plaint : on le mange en se disant qu'on mange trente et un ans de dettes, et il a meilleur goût que jamais.",
    "Le Baron Doux est dans la queue, lui aussi, à sa place, avec ses garçons. Il prend sa miche sans un mot. Firmin la lui donne sans un mot. La lettre au beurre reste dans ta poche ; tu ne sais pas qui l'a écrite pour de bon, et le Baron a l'air de quelqu'un qui préfère qu'on reste dans cette ignorance. Tu l'y laisses. Il y a des énigmes qu'on emporte avec son pain.",
    { if: { has: "escompte:paye" }, text: "Le lendemain, à neuf heures précises, Firmin pose une miche chaude sur le marbre du dernier guichet. Monsieur Escompte la regarde longtemps, sous sa lampe verte, comme on regarde un premier versement. Puis il la rompt, et il mange, et il ne recopie rien de toute la matinée." },
    { if: { not: { has: "escompte:paye" } }, text: "Le lendemain, au dernier guichet de la Banque, Monsieur Escompte commence un nouveau registre, de mémoire. Il se souvient de tout. Il se souviendra toujours de tout. Mais la ville a mangé son pain, et il est seul, désormais, à croire à ses chiffres." },
  ]),
  F_dettes: fin("dettes", "Le pain qui a mangé les dettes", "rue", [
    "Tu montes sur une caisse, au milieu de la grande rue, et tu l'annonces : Eugénie est rentrée, et elle a mangé le Registre des créances. Toutes les dettes de Mirevaux. Les prêts, les découverts, les hypothèques sur des maisons qui n'existent plus, et trente et un ans d'intérêts composés. Il n'en reste que la couverture.",
    "La rue se tait. Puis une vieille femme, au milieu de la queue, pose son panier, lève les bras au ciel, et pousse un cri que personne à Mirevaux n'avait entendu depuis l'Effondrement : un cri de joie. La rue entière la suit. Les Demi-Sel et les Doux s'embrassent sans s'en apercevoir, et s'en aperçoivent trop tard pour revenir en arrière.",
    "La fournée de midi part en un quart d'heure. On la mange debout, dans la rue, en se passant les miches. On l'appellera désormais le pain des dettes, et chaque année, à la même date, Firmin cuira une fournée bleue, à l'encre, pour qu'on se souvienne.",
    "Au dernier guichet de la Banque, Monsieur Escompte écoute la rue chanter, sous sa lampe verte. Le soir, il pose sur le pupitre vide de la chambre forte un écriteau, de sa plus belle main de caissier : *Compte soldé.* Puis il ferme la porte ronde, et il tourne le cadran, deux à gauche, un à droite, trois à gauche, pour la dernière fois.",
  ]),
  F_gage: fin("gage", "La créance", "soussol", [
    "Monsieur Escompte appose sur Eugénie une étiquette de saisie, au bout d'une longue épingle, en tremblant un peu. Elle se gonfle autour de l'épingle, et l'avale, étiquette comprise. Il en appose une seconde. Elle l'avale aussi. À la troisième, il renonce à l'étiquette, et il referme la porte ronde de la chambre forte sur elle, deux à gauche, un à droite, trois à gauche.",
    "« Le gage est sous bonne garde, dit-il. Le boulanger pourra le racheter. Le prix est le Registre. Trente et un ans de créances. » Il réfléchit. « Avec les intérêts. »",
    "À midi, la grande rue attend devant la porte blindée du fournil. Le pain manque. Il manquera demain. Il reviendra, peut-être, le jour où quelqu'un, à Mirevaux, aura de quoi payer une dette qu'une pâte a mangée.",
    "Dans la chambre forte, sous la Banque, Eugénie continue de lever, très lentement, dans le noir. On dit qu'à la saison chaude, par le conduit, toute la grande rue sent la pomme et le vin, et que les enfants y collent le nez, en passant, pour se rappeler ce qu'est le pain.",
  ]),
  F_vide: fin("vide", "Une ville sans pain", "rue", [
    "À midi, la porte blindée s'ouvre sur la grande rue, et il en sort seulement l'odeur froide du métal. Firmin se tient sur le seuil, les mains vides, blanches jusqu'aux coudes, et la queue comprend avant qu'il ait parlé. Les gens repartent un par un, sans un mot, leurs paniers vides au bras. Les Demi-Sel partent d'un côté. Les Doux de l'autre, très vite.",
    { if: { has: "rancon:lue" }, text: "La rançon court jusqu'au soir : la recette contre Eugénie. Firmin n'a rien à donner que la vérité, farine, eau, sel, et le Baron ne la croit pas. On ne croit pas ce qui est trop simple, quand on a écrit une lettre au beurre pour l'obtenir." },
    "Firmin recommence une pâte mère, le soir même, avec la farine du jour et l'eau de la citerne. Il lui faudra trois semaines pour qu'elle lève, et trente et un ans pour qu'elle ressemble à Eugénie. Il l'appelle Eugénie-Deux. Il la nourrit une fois par soir, pas deux, même quand il fait chaud.",
    "Et quelquefois, la nuit, quand il dort sur les banquettes du hall, il entend sous le marbre, très loin, très bas, un *blop*.",
  ]),
};
