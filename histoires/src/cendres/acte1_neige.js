// Act I · two more sights of Sauvelune under the snow, the day after the feast (the child leads, "tu" masculine), off
// EN_village: Mathilde Aubry, the dean, who has forgotten everything except her oldest memory (the old ones go last);
// and old Gervais in front of the blank lintels, with his pot of ochre (reads en:linteaux).
var A = { act: "I", place: "sauvelune", noLead: true };
function P(o) { return Object.assign({}, A, o); }
var BACK = [{ back: "EN_village" }];
module.exports = {
  EN_k_doyenne_neige: P({ title: "La chaise de Mathilde",
    text: [
      "La doyenne est sur sa chaise, au milieu de la place, là où on l'a posée hier pour la fête. Personne n'est venu la rentrer. Plus personne ne sait à qui il revient de le faire. Elle a de la neige sur sa couverture, sur ses genoux, sur son bonnet. Elle ne la secoue pas.",
      "Tu t'approches. Elle te regarde sans te reconnaître. Elle t'a oublié, et elle s'est oubliée elle-même. Tu lui demandes son nom. Elle cherche, poliment, comme tous les autres. Puis son regard part au-dessus de toi, vers le nord, vers les montagnes.",
      { if: { seen: "EN_k_doyenne_hiver" }, text: "« Une lumière blanche, dit-elle. Au ras du ciel. Ma grand-mère m'a emmenée au chêne pour la voir. J'avais six ans. » Elle te regarde à nouveau. « Je ne sais plus comment je m'appelle, petit. Mais ça, je le sais encore. C'est drôle, non ? Les vieilles choses partent en dernier. »" },
      { if: { not: { seen: "EN_k_doyenne_hiver" } }, text: "« Ma grand-mère, dit-elle. Elle m'a emmenée au chêne, un été, quand j'avais six ans. Pour voir quelque chose, au nord. Je ne sais plus quoi. » Elle sourit, de ses quatre dents. « Je ne sais plus comment je m'appelle. Mais je sais ma grand-mère, et le chêne. C'est drôle. Les vieilles choses partent en dernier. »" },
    ],
    choices: [
      { label: "Lui dire son nom, et la rentrer chez elle", fx: { ep: ["perso", 400] }, to: "EN_k_doyenne_rentrer" },
      { label: "Secouer la neige de sa couverture, et repartir", to: "EN_village" },
    ] }),
  EN_k_doyenne_rentrer: P({ title: "Mathilde Aubry",
    text: ["« Mathilde Aubry, dis-tu. Vous vous appelez Mathilde Aubry. Vous avez cent un ans. » Elle répète, comme on répète la leçon d'un autre. Tu prends la chaise par le dossier, et tu la tires sur la neige, jusqu'à la maison Aubry, dont le linteau est blanc. Personne dedans ne la reconnaît. On la remercie d'être passée. Tu la poses près du feu. Sous la table, une petite fille la regarde, et vient s'asseoir contre ses jambes, sans savoir pourquoi. La doyenne lui pose la main sur la tête. Tu les laisses comme ça."],
    choices: BACK }),
  EN_k_gervais: P({ title: "Les linteaux blancs",
    text: [
      "Le vieux Gervais est debout au milieu de la place, son pot d'ocre à la main, et il regarde les façades. Les linteaux sont blancs. Pas une lettre. Il a le pinceau prêt, trempé, qui goutte sur la neige en taches rouges. Il ne sait plus quoi écrire. Il sait qu'il faut écrire quelque chose : ça, ses mains le savent. Le reste est parti.",
      { if: { has: "en:linteaux" }, text: "Il te voit. Il reconnaît le geste, à défaut de toi : tu tenais le pot, hier. Il te le tend. « Toi, dit-il. Tu sais ce qu'il y avait ? »" },
      { if: { not: { has: "en:linteaux" } }, text: "Il te regarde, puis il regarde le pot, puis les linteaux. « Il y avait des noms, dit-il. Je les ai peints. Tous les printemps. Je ne sais plus lesquels. » Il pose le pot dans la neige, très doucement, comme on pose quelque chose qu'on ne reprendra pas." },
    ],
    choices: [
      { label: "Lui dicter les noms, maison après maison, comme il te les avait dictés", hide: { not: { has: "en:linteaux" } }, fx: { flag: "en:linteaux_neige", ep: ["perso", 600] }, to: "EN_k_gervais_peindre" },
      { label: "Prendre le pot, et le garder", fx: { ep: ["perso", 200] }, to: "EN_k_gervais_pot" },
    ] }),
  EN_k_gervais_peindre: P({ title: "Repeindre",
    text: [
      "Tu dictes. *A-U-B-R-Y.* Il peint, de son seul geste, sans modèle, la langue entre les dents. Les lettres ocre brillent sur le bois blanc. Tu dictes *Ferrand*, et il fait pencher le *D*, sans que tu le lui dises. Ses mains savent. Tu dictes le moulin. Il écrit, en grosses lettres, *JORIS · AGATHE · PIM*, et dessous, une roue.",
      "Puis vous regardez. La neige tombe sur les linteaux. Elle se pose sur les lettres fraîches. Et les lettres pâlissent, une à une, comme une buée sur une vitre, jusqu'au blanc. Gervais regarde. Il se tait. Il trempe le pinceau. Il recommence. Tu le laisses recommencer. Il recommencera jusqu'au soir.",
    ],
    choices: BACK }),
  EN_k_gervais_pot: P({ title: "Le pot d'ocre",
    text: ["Tu prends le pot. L'ocre est épaisse, encore humide, rouge comme une brique. Gervais te regarde faire. Il ne proteste pas. « Garde-le, dit-il. Quelqu'un saura, un jour. » Il s'éloigne, les mains vides, en regardant les façades, en remuant les lèvres, comme quelqu'un qui cherche un mot sur le bout de la langue et qui ne le trouvera pas. Tu poses le pot sur le perron de la maison commune, à l'abri. Pour plus tard."],
    choices: BACK }),
};
