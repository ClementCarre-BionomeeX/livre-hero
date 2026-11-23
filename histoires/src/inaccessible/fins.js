// « Une nuit à l'Inaccessible » · nine o'clock, the Contemplation, and the four endings. Z_matin reads whether the
// violinist came out of the pedestal, what became of the card he found there, and whether the lock broke.
function fin(id, title, place, text) { return { act: "I", title: title, place: place, end: true, fx: { flag: "fin:" + id }, text: text }; }
module.exports = {
  Z_matin: { act: "I", title: "Neuf heures", place: "salle",
    branch: [
      { if: { all: [{ has: "lucien:libre" }, { has: "fiche:vernis" }] }, to: "F_vernis" },
      { if: { has: "lucien:libre" }, to: "F_concert" },
      { if: { has: "clavier:bloque" }, to: "F_sifflet" },
      { to: "F_silence" },
    ] },

  F_concert: fin("concert", "L'air de minuit, à neuf heures", "salle", [
    "Les membres du Club des Inaccessibles entrent un par un, à intervalles irréguliers, chacun par une porte différente, en tenue de soirée à neuf heures du matin. Ils se placent dans la salle à des endroits choisis pour ne voir personne, et ils contemplent le socle. Madame Vernis entre la dernière, son stylo à la main, et se place derrière une colonne, d'où elle peut tout voir sans être vue, ce qui est son métier.",
    "Le faisceau tombe sur le marbre, avec une ampoule neuve. Le socle est vide. Le Gardien se tient devant, entre ses poteaux. Et contre la colonne, Lucien, couvert d'une poussière de marbre qu'il n'a pas eu le temps d'ôter, lève son violon et joue son air de minuit, à l'endroit : mi, sol, la, sol, do. Lent, très lent, comme quelqu'un qui n'attend personne.",
    "Il le joue mieux que jamais. Tu le sais, toi qui es derrière ta colonne : il le joue pour le Gardien. Le Club ne le sait pas. Le Club ferme les yeux, à l'unisson, sans s'être concerté, et c'est la seule chose que ses membres aient jamais faite ensemble.",
    { if: { has: "fiche:basile" }, text: "Au dernier *do*, le Gardien pose la main sur la poche de son smoking, côté cœur, là où il a rangé la fiche. Personne ne le remarque, sauf toi, et Lucien, qui ne le regarde pas, exprès." },
    { if: { has: "fiche:socle" }, text: "Dans le socle, sous le faisceau neuf, la fiche dort de nouveau dans son tiroir. Le socle garde ce qu'il garde. Le Gardien aussi. Ils font une bonne équipe." },
    "À neuf heures vingt, les membres du Club repartent un par un, sans un mot. Madame Vernis passe devant ta colonne en sortant. Elle ne te regarde pas. Elle dit, à voix basse, à la colonne : « Le vide était très bien épousseté. » C'est, venant d'elle, une titularisation.",
  ]),
  F_vernis: fin("vernis", "B. et S.", "salle", [
    "Après la Contemplation, quand le Club est reparti par ses portes différentes, tu remets la fiche à Madame Vernis, derrière sa colonne. Elle la lit une fois. Elle ne la lit pas deux fois : elle n'en a pas besoin.",
    "« Le Héraut d'inox, dit-elle. Sorti le soir même. B. et S. » Elle lève les yeux, au-dessus de la fiche, vers le Gardien, immobile devant le socle, à vingt pas. Il la regarde aussi. Ils se regardent comme deux notaires qui ont signé le même acte il y a trente et un ans, chacun d'un côté de la table.",
    "« Merci, dit-elle. La Maison vous en sera reconnaissante. » Elle glisse la fiche dans son dossier, capuchonne son stylo, et s'en va. Lucien range son violon sans un mot. Il a l'air de quelqu'un qui vient de voir une corde casser.",
    "Le lendemain, le Gardien est à sa place, devant le socle, comme tous les jours. Le surlendemain aussi. Rien ne change, en apparence. Mais il y a désormais, dans le dossier de Madame Vernis, deux initiales, et une question, et la Maison, qui a tout vendu, sait maintenant à qui demander ce qu'elle a perdu.",
    "Le Gardien ne te regarde plus quand tu passes le plumeau sur le socle. Il regarde la porte. Il la regarde comme quelqu'un qui attend qu'on vienne le chercher.",
  ]),
  F_sifflet: fin("sifflet", "Le socle qui siffle", "salle", [
    "Les membres du Club des Inaccessibles entrent un par un, chacun par une porte différente, et se placent dans la salle à des endroits choisis pour ne voir personne. Le faisceau est éteint, les lustres allumés, la trappe du socle levée sur un clavier figé : la salle a l'air d'une salle des fêtes après une fête qui aurait mal tourné. Madame Vernis, derrière sa colonne, a pâli.",
    "Et du socle vide, à travers la trappe, monte un sifflement. Un air, lent, très lent, mi, sol, la, sol, do, sifflé juste, avec une tristesse et une élégance qui remplissent la grande salle jusqu'à la voûte.",
    "Le Club écoute. Le Club ferme les yeux. Le Club n'a jamais rien entendu d'aussi inaccessible : de la musique qui sort de l'absence. À la sortie, trois membres demandent à Madame Vernis le prix de *l'Absence qui siffle*. Elle répond qu'elle ne sait pas encore. Elle le saura à midi. Il sera très élevé.",
    "Lucien sort du socle le lundi, par les soins de l'électricien. Il apprend qu'il est désormais une œuvre, sous contrat, à résidence. Il devra siffler chaque matin, enfermé, pour le Club. Il demande un coussin. On le lui facture.",
  ]),
  F_silence: fin("silence", "L'Absence de Musique", "salle", [
    "Les membres du Club des Inaccessibles entrent un par un, chacun par une porte différente, et contemplent le socle vide sous le faisceau. Il n'y a pas de musique. La chaise du violoniste est vide, son étui posé dessus. Le Gardien regarde la porte.",
    "Le silence dure vingt minutes. Il est parfait. Il est total. Les membres du Club en sortent bouleversés, sans un mot, chacun par sa porte. Le soir même, Madame Vernis rédige la mention légale d'un produit nouveau : *L'Absence de Musique™. Le violoniste n'est pas fourni. C'est ce qui en fait le prix.*",
    "Le lundi, l'électricien de la Maison lève la trappe du socle pour changer l'ampoule du faisceau, et il en sort un jeune homme maigre, couvert de poussière, qui sent le sandwich, et qui demande l'heure. On lui apprend qu'il a été remplacé par son absence, avec un grand succès. Il récupère son violon et s'en va, par la porte du fond, à pied.",
    "Le Gardien le regarde partir. Puis il regarde le socle. Puis il te regarde, toi, longtemps, et tu comprends que tu avais quelque chose à lire, cette nuit, sur le sol de la salle, et que tu ne l'as pas lu.",
  ]),
};
