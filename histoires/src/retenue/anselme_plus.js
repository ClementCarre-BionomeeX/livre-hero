// Anselme, the scenes added: the hand on the vein, the pointeau greased at six, the secret session remembered, the
// three lanterns made ready, and the two young guards of midnight told the truth.
var A = "I";
module.exports = {
  A_veine_main: { act: A, title: "La main sur la pierre", place: "digue", fx: { flag: "anselme:main" },
    text: [
      "Tu poses la main à plat sur la veine, entre deux plâtres. La pierre est tiède. L'eau te coule entre les doigts.",
      "Ferréol t'emmenait ici quand tu avais huit ans. Il posait ta main sur le grès, à cet endroit précis, et il te disait d'écouter. Tu entendais seulement l'eau. Il disait : *Elle chante. Le jour où tu l'entendras, il faudra vider le lac.*",
      "Ce soir, sous ta paume, la pierre chante. Un bourdonnement très bas, continu, comme une ruche derrière un mur. Tu l'entends depuis la Saint-Michel. Jusqu'à la Toussaint, tu as fait semblant d'être sourd.",
    ],
    choices: [{ label: "Retirer ta main", back: "A_galerie" }] },
  A_pointeau_vu: { act: A, title: "Le bouchon de bronze", place: "digue", fx: { flag: "pointeau:graisse", time: 0.25 },
    text: [
      "Tu te penches sur l'eau, la lanterne levée. Sous la surface trouble, tu devines le volant de bronze du pointeau, vert-de-grisé, large comme une assiette.",
      "Tu as dans ta poche un pot de suif de mouton, comme tous les soirs depuis trois ans. Tu plonges le bras jusqu'à l'épaule. Tu enduis la tige, à l'aveugle, à la place où le pas de vis entre dans le bronze. Puis tu tournes d'un quart de tour, pour voir. Il tourne. Tu reviens d'un quart de tour.",
      "Tes dents claquent quand tu ressors le bras. Si quelqu'un doit le dévisser une nuit, que ce soit au moins sans se casser les ongles.",
    ],
    choices: [{ label: "Revenir à la console", back: "A_galerie" }] },
  A_seance: { act: A, title: "Le 2 octobre", place: "digue", fx: { flag: "anselme:seance" },
    text: [
      "Tu déplies les trois feuilles. Tu les connais par cœur, mais tu les relis, comme on relit la lettre d'un mort.",
      "La petite salle de l'Hôtel, il y a trois ans. Les sept drapiers autour de la table ovale. Toi debout au bout, en habit du dimanche, ton carnet ouvert. Tu as dit la fissure, la mesure, la seule réparation possible : vider le lac et refaire le joint.",
      "Corlay a parlé ensuite, bien, longtemps. Un an sans moulins. Les foulons sans travail, les tisserands sans laine, l'hiver. Il a dit *mille familles*. Il a dit *raisonnable*. Il a dit *du mortier, et on verra au printemps*.",
      "Dame Hesdin a voté contre. Les six autres pour. Puis Corlay t'a pris à part dans le couloir, une main sur ton épaule. Il savait pour les dettes de Bastien. Il savait le chiffre exact. Il a dit : *Le Conseil n'oublie pas ceux qui le servent.*",
      "Tu as dit merci. Tu te souviens du mot. Merci.",
    ],
    choices: [{ label: "Replier les feuilles", back: "A_fauteuil" }] },
  A_lanternes: { act: A, title: "Trois lanternes", place: "digue", fx: { time: 0.5 },
    text: [
      "Tu prépares les trois lanternes sur la table de la cuisine. Tu les remplis d'huile, une à une, en renversant un peu. Tu tailles les mèches. Tu nettoies les verres avec ta manche. Tu en allumes une seule, et tu la poses sur l'appui de la fenêtre. Les deux autres attendent, éteintes, à côté.",
      "Par la fenêtre, toute la vallée. Les lumières de Corvèze au bout, la Haute-Ville sur son rocher, les Foulons en bas, au bord de l'eau. Et au milieu, sur le pont des Moulins, une petite lumière fixe, là où, à cette heure, tu n'en as jamais vu.",
      "Une lanterne au milieu du pont. Le guet. La nuit, d'ordinaire, le pont reste sans garde.",
    ],
    choices: [{ label: "T'asseoir, et attendre", to: "A_attente" }] },
  A_gardes_parle: { act: A, title: "Deux gamins", place: "digue", fx: { time: 0.5 },
    text: [
      "Tu les fais asseoir. Tu leur sers du vin, sans rien dedans. Ils s'appellent Mathurin et Gilles. Ils ont dix-huit et dix-neuf ans, et ils te regardent comme on regarde un vieillard qui va mourir : avec respect, et de loin.",
      "Tu leur dis la veine, et l'orage. Tu leur montres ton carnet, tes mesures, ta main qui tremble. Tu leur dis : vos familles habitent où ?",
      "Gilles a une sœur aux Foulons. Il se lève avant que tu aies fini.",
    ],
    choices: [
      { label: "« Alors descendez. Frappez aux portes, à deux heures. Le capitaine, je m'en charge. »", test: { dom: "social", diff: -10, label: "Les décider" }, win: { to: "A_vide", fx: { flag: "gardes:foulons" } }, lose: { to: "A_vide", via: "gilles" } },
    ] },
};
