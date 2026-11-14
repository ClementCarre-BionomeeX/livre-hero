// Act V · two more sights on the road west to Pallanche, the last night (the child leads, "tu" masculine), off
// V_r_chemin: a windmill that still turns, because its miller counts his sacks aloud and will not stop (v:moulin_vent);
// and a sheepdog who still knows, leading the child to a shepherd who no longer does (v:berger).
var A = { act: "V", noLead: true, place: null };
function P(o) { return Object.assign({}, A, o); }
var BACK = [{ back: "V_r_chemin" }];
module.exports = {
  V_r_moulin: P({ title: "Le moulin à vent",
    text: [
      "Sur une butte, à gauche de la route, un moulin à vent. L'air est immobile depuis la veille. Les ailes tournent quand même, lentement, en grinçant, et la neige tombe à travers, sans être dérangée.",
      "La porte est ouverte. Dedans, la meule tourne, la farine coule dans un sac, et un vieux meunier, enfariné jusqu'aux sourcils, tient le sac et compte. À voix haute. *Trois cent douze. Trois cent treize.* Il ne s'arrête pas pour te regarder. « Si je m'arrête de compter, dit-il, entre deux sacs, je m'arrête tout court. Je l'ai senti, vers minuit. Alors je compte. »",
    ],
    choices: [
      { label: "Prendre un sac, et compter avec lui", fx: { flag: "v:moulin_vent", ep: ["perso", 800] }, to: "V_r_moulin_compter" },
      { label: "Lui demander son nom, avant qu'il ne l'oublie", to: "V_r_moulin_nom" },
    ] }),
  V_r_moulin_compter: P({ title: "Trois cent quatorze",
    text: [
      "Tu prends un sac vide sur la pile. Tu le tiens sous l'autre goulotte. Tu comptes avec lui, à voix haute, sur le même rythme. *Trois cent quatorze.* Il te jette un coup d'œil, pour la première fois. *Trois cent quinze.* Il sourit. Tu sais faire. Tu as tenu des sacs toute ton enfance, sous la goulotte de Joris, en comptant pour lui pendant qu'il surveillait la meule.",
      "Vous comptez une heure. À trois cent soixante, il te dit de partir. « Tu as de la route, dit-il. Moi, j'ai du grain jusqu'à l'aube. » Tu poses ton sac. Il continue. Quand tu redescends la butte, tu l'entends encore, de loin, par la porte ouverte, à travers la neige : *Trois cent soixante et un.* Les ailes tournent.",
    ],
    choices: BACK }),
  V_r_moulin_nom: P({ title: "Le meunier",
    text: ["« Mon nom ? » Il continue de compter, en dessous, du bout des lèvres. Il cherche. Ses sourcils se rapprochent. *Trois cent vingt.* « Je ne sais plus, dit-il. Mais je sais combien de sacs. » Il te regarde, et il a l'air de trouver ça juste, comme un marché honnête. « On ne peut pas tout garder. J'ai gardé ça. » *Trois cent vingt et un.* Tu le laisses. A-t-il eu raison ? Les ailes tournent."],
    choices: BACK }),
  V_r_chien: P({ title: "Le chien",
    text: [
      "Un chien sort de la neige, sur le bord de la route. Un chien de berger, noir et blanc, le poil collé de givre. Il aboie, une fois, pour toi. Il recule. Il revient. Il te prend la manche entre les dents, doucement, sans serrer, et il tire. Il veut que tu viennes.",
      "Tu le suis, à travers un champ, jusqu'à une cabane de berger, et devant la cabane, un parc, et dans le parc, des moutons serrés les uns contre les autres. Et un berger, assis sur une souche, son bâton en travers des genoux, qui sourit à la neige. Le chien va à lui. Il pose la tête sur son genou. Le berger lui gratte la tête, poliment, comme on gratte la tête d'un chien qu'on ne connaît pas.",
    ],
    choices: [
      { label: "Chercher le nom du chien, sur son collier", fx: { flag: "v:berger", ep: ["perso", 800] }, to: "V_r_chien_collier" },
      { label: "Rentrer les moutons dans la cabane, à l'abri, avec le chien", fx: { ep: ["perso", 400] }, to: "V_r_chien_moutons" },
    ] }),
  V_r_chien_collier: P({ title: "Le collier",
    text: [
      "Le chien te laisse faire. Un collier de cuir, usé, et une plaque de laiton, gravée au clou, maladroitement, par quelqu'un qui ne savait pas bien écrire : *FIDÈLE*. Tu le dis au berger. « Il s'appelle Fidèle. »",
      "Le berger répète. *Fidèle.* Il regarde le chien. Le chien remue la queue, une fois, très fort. Le berger fronce les sourcils. « C'est moi qui l'ai gravé, dit-il, lentement. Avec un clou. Je ne sais pas écrire. J'ai demandé les lettres au curé. » Il ne se rappelle pas son propre nom, ni celui de sa ferme. Il se rappelle ça. Il met la main sur la tête du chien, et cette fois, il ne la gratte pas poliment. Il la garde.",
    ],
    choices: BACK }),
  V_r_chien_moutons: P({ title: "Le parc",
    text: ["Tu ouvres la porte de la cabane. Le chien comprend avant toi. Il fait le tour du parc, une fois, deux fois, sans aboyer, et les moutons entrent, l'un derrière l'autre, à l'abri. Quand le dernier est entré, il se couche en travers de la porte. Le berger n'a pas bougé de sa souche. Tu lui mets une couverture sur les épaules. Il te remercie. Le chien te regarde partir, et ne te suit pas. Il a du travail."],
    choices: BACK }),
};
