// Act II · more of the Corbeau camp for the northern company (Corbe leads, "tu" feminine), off II_N_camp: the clan's
// wrestlers who want to try the big Corvannais (if Rodric came), the children who ask Linette to read the painted signs
// on the tents (if she came), and the hunters who came back empty-handed from the high pastures.
var N = { act: "II", noLead: true, place: "corbeau" };
function P(o) { return Object.assign({}, N, o); }
var BACK = [{ back: "II_N_camp" }];
module.exports = {
  II_N_lutte: P({ title: "La lutte",
    text: [
      "Autour d'un cercle tracé dans la neige, les jeunes hommes du clan luttent, torse nu, en soufflant de la vapeur. On lutte, chez le Corbeau, pour se réchauffer, pour régler une dispute, pour rien. Le plus fort, un roux énorme qu'on appelle Bjarki, a déjà mis quatre adversaires à terre.",
      "Il voit Rodric. Il le montre du menton. Il dit quelque chose. Les autres rient. Tu traduis, pour Rodric : il demande si l'homme du sud est aussi lourd qu'il en a l'air, ou si c'est le manteau.",
    ],
    choices: [
      { label: "Laisser Rodric entrer dans le cercle", to: "II_N_lutte_rodric" },
      { label: "Entrer dans le cercle toi-même", test: { dom: "combat", label: "La lutte", help: [{ if: { has: "corbe:loup=nomme" }, v: 10 }] },
        win: { fx: { ep: ["perso", 500], flag: "nord:lutte" }, to: "II_N_lutte_corbe" }, lose: { fx: { pv: -2 }, to: "II_N_lutte_terre" } },
    ] }),
  II_N_lutte_rodric: P({ title: "Rodric dans le cercle",
    text: ["Rodric enlève son manteau, lentement, le plie, te le confie. Il entre dans le cercle. Bjarki se jette sur lui. Rodric reste planté là. Bjarki rebondit. Il recommence. Rodric le prend sous les bras, le soulève comme on soulève un sac de grain, le regarde un moment, à hauteur des yeux, et le repose, debout, hors du cercle. Il y a un silence. Puis tout le clan hurle de rire, Bjarki le premier. Le soir, Bjarki lui apporte une corne de bière. Ils ne se comprennent pas. Ils boivent ensemble jusqu'à minuit."],
    choices: [{ fx: { conf: { rodric: 5 }, flag: "nord:lutte" }, back: "II_N_camp" }] }),
  II_N_lutte_corbe: P({ title: "Dans le cercle",
    text: ["Tu entres. Bjarki rit. Il ne rit pas longtemps. Tu es petite, tu es vive, tu sais où sont les genoux d'un homme et ce qu'ils deviennent quand on passe derrière. Il tombe dans la neige, de tout son long, et tu es assise sur son dos avant qu'il ait compris. Le clan hurle. Bjarki, le nez dans la neige, rit aussi. « La fille d'Askel, dit-il. J'aurais dû me méfier. »"],
    choices: BACK }),
  II_N_lutte_terre: P({ title: "Dans la neige",
    text: ["Tu entres. Bjarki te prend par la ceinture et te pose dans la neige, à plat dos, sans même forcer. Le clan rit. Tu te relèves, de la neige plein les cheveux. Bjarki te tend la main. « La fille d'Askel, dit-il. Reviens quand tu auras fini de grandir. » Tu as fini de grandir depuis longtemps. Tu lui fais une promesse, à voix basse, sur la prochaine fois. Il rit encore."],
    choices: BACK }),
  II_N_signes: P({ title: "Les signes peints",
    text: [
      "Au feu des enfants, Linette est assise, entourée. Les petits du clan ont appris qu'elle savait lire, et ils lui montrent, un par un, les signes peints sur les peaux des tentes : des spirales, des traits, des corbeaux stylisés, des mains. « Lis ! Lis ça ! »",
      "Linette regarde les signes. Elle fronce les sourcils. Elle sait lire les lettres, toutes, même les plus mal formées. Ces signes-là, elle ne les connaît pas. Elle se tait. Les enfants attendent. Elle a l'air de quelqu'un qui découvre qu'il ne sait pas tout, et qui ne sait pas quoi faire de ses mains.",
    ],
    choices: [
      { label: "Lui expliquer les signes, un par un", fx: { conf: { linette: 10 }, ep: ["perso", 400] }, to: "II_N_signes_corbe" },
      { label: "Laisser les enfants le lui apprendre", fx: { conf: { linette: 5 }, ep: ["perso", 300] }, to: "II_N_signes_enfants" },
    ] }),
  II_N_signes_corbe: P({ title: "La spirale",
    text: ["Tu t'assieds à côté d'elle. La spirale, c'est le vent. La main ouverte, c'est quelqu'un qui est mort et qu'on salue. Le corbeau avec un trait, c'est le clan. Le corbeau sans trait, c'est quelqu'un qui est parti. Elle écoute, sans rien noter, et elle répète, en montrant du doigt, sans se tromper. Puis elle te demande comment on dit, avec ces signes-là, « Linette ». Tu ne sais pas. On ne dit pas les noms, avec les signes. Elle trouve ça très intéressant, et un peu inquiétant."],
    choices: BACK }),
  II_N_signes_enfants: P({ title: "Les maîtres",
    text: ["Tu te tais. Ce sont les enfants qui lui apprennent, tous à la fois, en criant, en se contredisant, en se disputant sur le sens d'une spirale. Linette les écoute avec un sérieux terrible. À la fin, un petit de cinq ans lui fait réciter, comme un maître d'école. Elle récite. Elle se trompe sur une main. Il la corrige, gravement. Elle dit merci. Il n'a jamais été aussi fier de sa vie."],
    choices: BACK }),
  II_N_chasseurs: P({ title: "Les chasseurs bredouilles",
    text: [
      "Trois chasseurs reviennent des hauts pâturages, les mains vides. Les mains vides. Ils n'ont pas l'air de chasseurs bredouilles. Ils ont l'air de gens qui ont vu quelque chose.",
      "« Le troupeau sauvage, dit le plus vieux, en s'asseyant près du feu. On l'a trouvé. Trois cents bêtes, dans le cirque du Haut-Tarn. Elles étaient debout dans la neige blanche, immobiles, toutes tournées vers le nord. On s'est approchés à dix pas. Elles ne nous ont pas vus. » Il tend les mains vers le feu. « On n'a pas pu tirer. On ne tire pas sur des bêtes qui ont oublié qu'elles avaient peur. »",
    ],
    choices: [
      { label: "« Vous avez bien fait. »", to: "II_N_camp" },
      { label: "« Le clan aura faim, cet hiver. »", to: "II_N_chasseurs_faim" },
    ] }),
  II_N_chasseurs_faim: P({ title: "La faim",
    text: ["Le vieux te regarde. « Oui, dit-il. Le clan aura faim. » Il le dit tel quel, la tête haute. « On mangera les chiens, s'il faut. Les chiens, eux, ils se souviennent qu'ils ont peur. » Il se tait. Personne, autour du feu, ne le contredit. Les chiens, couchés dans la neige, lèvent la tête, tous en même temps, comme s'ils avaient compris."],
    choices: BACK }),
};
