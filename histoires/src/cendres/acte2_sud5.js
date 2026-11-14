// Act II · the southern company, chapter 5, "Le registre noir": the night heist of the Tower of the royal Archives,
// using whatever the company gathered (the Mouettes' plan and locksmith, the wax of the three keys, the sewer grate, the
// garden door, Linette's invitation, Jacotte's boat), Mordace on the stairs, and the act choice: to whom the black
// register goes (the queen, the Greffiers through Frère Orlan, or the clans, carried north to the col). Lisandre leads.
var S = { act: "II", noLead: true };
function P(o) { return Object.assign({}, S, o); }
var KEYS = { all: [{ item: "cire_cles" }, { any: [{ has: "sud:mouettes" }, { has: "sud:mouettes_dette" }] }] };
module.exports = {
  II_S5_nuit: P({ title: "Le plan", place: "vasselin",
    text: [
      "À l'Ancre, dans la chambre, à la chandelle. Personne n'a envie de dormir. Vous faites le compte de ce que vous avez.",
      { if: { item: "plan_tour" }, text: "Le plan des Mouettes, déroulé sur le lit, tenu aux quatre coins par des gobelets." },
      { if: { item: "cire_cles" }, text: "La boîte de fer-blanc, et dans la cire, les trois clés." },
      { if: { has: "sud3:chemin_glaneur" }, text: "La grille de la halle aux poissons, par où les Glaneurs entrent." },
      { if: { has: "sud3:chemin_garde" }, text: "La porte du jardin, au pied de la Tour, et les trois coups." },
      { with: "linette", if: { has: "linette:invitee" }, text: "Linette, assise sur le coffre, les mains croisées. « Il m'a dit de venir quand je voudrais », dit-elle." },
      { if: { has: "sud4:registre_vu" }, text: "Et ce que tu as vu, dans le coffre, à l'envers, très vite." },
      "Mordace passe ses nuits au chevet de la reine. La Tour, la nuit, n'a que ses gardes, ses deux archivistes, et ce qui descend du ciel.",
    ],
    choices: [
      { label: "Faire tailler les trois clés par le serrurier des Mouettes", hide: { not: KEYS }, fx: { flag: "sud5:cles", item: "trois_cles" }, to: "II_S5_serrurier" },
      { label: "Entrer par la grille de la halle, comme les Glaneurs", hide: { not: { has: "sud3:chemin_glaneur" } }, fx: { flag: "sud5:entree=grille" }, to: "II_S5_egouts" },
      { label: "Entrer par la porte du jardin, avec les trois coups", hide: { not: { has: "sud3:chemin_garde" } }, fx: { flag: "sud5:entree=jardin" }, to: "II_S5_jardin" },
      { label: "Laisser Linette entrer, seule, par la grande porte, en apprentie", hide: { not: { all: [{ has: "linette:invitee" }, { present: "linette" }] } }, fx: { flag: "sud5:entree=linette" }, to: "II_S5_linette" },
      { label: "Escalader la Tour par la face nord, jusqu'à la coupole", fx: { flag: "sud5:entree=coupole" }, to: "II_S5_escalade" },
    ] }),

  II_S5_serrurier: P({ title: "Le serrurier", place: "vasselin",
    text: [
      "Le serrurier des Mouettes est un petit homme chauve qui travaille dans une cave sous la halle aux poissons, à la lueur d'une forge grosse comme une soupière. Il regarde la cire longtemps.",
      "« Fer noir, dit-il. Je connais ce fer. On le forge à Pallanche, à la Chancellerie. Il est froid même au feu. » Il taille les trois clés en quatre heures, sans parler. Elles sont froides dans ta main.",
      { if: { has: "sud:mouettes_dette" }, text: "La prévôte, en tricotant, te rappelle la dette. « Un jour, on te demandera. Tu diras oui. »" },
    ],
    choices: [
      { label: "Entrer par la grille de la halle", hide: { not: { has: "sud3:chemin_glaneur" } }, fx: { flag: "sud5:entree=grille" }, to: "II_S5_egouts" },
      { label: "Entrer par la porte du jardin", hide: { not: { has: "sud3:chemin_garde" } }, fx: { flag: "sud5:entree=jardin" }, to: "II_S5_jardin" },
      { label: "Escalader la face nord", fx: { flag: "sud5:entree=coupole" }, to: "II_S5_escalade" },
    ] }),

  II_S5_egouts: P({ title: "Sous la ville", place: "vasselin",
    text: [
      "La grille se soulève sans bruit : on l'a huilée. Dessous, un égout de pierre, voûté, où l'on marche courbé dans l'eau jusqu'aux chevilles. Il monte. Vasselin est bâtie sur une colline, et ses égouts aussi.",
      "Sur les parois, à hauteur d'épaule, des traces blanches, comme si on avait frotté de la craie. Les Glaneurs passent par là. Souvent.",
      "Au bout d'une heure, une échelle de fer, et au-dessus, une trappe. Au-dessus de la trappe, du froid.",
    ],
    choices: [{ label: "Pousser la trappe", test: { dom: "discretion", label: "Silence", help: [{ if: { present: "pie" }, v: 10 }] },
      win: { to: "II_S5_paliers" }, lose: { fx: { flag: "sud5:alerte" }, to: "II_S5_paliers" } }] }),

  II_S5_jardin: P({ title: "Les trois coups", place: "vasselin",
    text: [
      "La ruelle des Tanneurs, le jardin, la porte basse. Trois coups. On ouvre : un vieux garde, en noir, une lanterne à la main, qui demande : « Combien ? »",
    ],
    choices: [
      { label: "« Vingt-trois. »", test: { dom: "social", label: "Aplomb", help: [{ if: { item: "liste_champions" }, v: 15 }, { if: { present: "ysolde" }, v: 5 }] },
        win: { fx: { flag: "sud5:garde_dupe" }, to: "II_S5_paliers" },
        lose: { fx: { flag: "sud5:alerte" }, to: "II_S5_garde_combat" } },
      { label: "Le faire taire avant qu'il ne crie", to: "II_S5_garde_combat" },
    ] }),

  II_S5_garde_combat: P({ title: "La porte du jardin",
    combat: { title: "Les gardes de la Tour", enemies: [{ id: "garde_noir", n: 2 }], terrain: "bati", range: "contact",
      flee: { dom: "discretion", label: "Se jeter dans l'escalier", to: "II_S5_paliers" },
      win: { fx: { ep: ["seance", 1200] }, to: "II_S5_paliers" },
      lose: { fx: { flag: "sud5:alerte", pv: -3 }, to: "II_S5_paliers" } },
    text: ["Il recule d'un pas, ouvre la bouche. Derrière lui, dans l'escalier, un autre garde descend déjà, la main sur l'épée. Ils se battent muets, comme toujours."],
    choices: [] }),

  II_S5_linette: P({ title: "L'apprentie", place: "vasselin",
    text: [
      "Linette traverse la place, seule, dans sa robe grise, et frappe à la grande porte de la Tour. On lui ouvre. Elle dit quelque chose. On la laisse entrer.",
      "Vous attendez dans l'ombre d'un porche. Une heure. Pie ne tient pas en place. Puis, au pied de la Tour, la porte du jardin s'entrouvre, et une petite main grise vous fait signe.",
      "« Les archivistes m'ont donné un pupitre, dit Linette quand vous la rejoignez. Ils m'ont demandé de recopier. Je recopie très vite. Ils se sont endormis. » Elle ajoute, sans expression : « Il a fait préparer un lit pour moi, en haut. Avec mon nom brodé dessus. Page Onze. »",
    ],
    choices: [{ label: "Monter", fx: { flag: "sud5:linette_dedans", conf: { pie: 5 } }, to: "II_S5_paliers" }] }),

  II_S5_escalade: P({ title: "La face nord", place: "vasselin",
    text: [
      "La Tour est en pierre de taille, aux joints larges, et la face nord, côté mer, n'est jamais éclairée. Deux cents pieds. Il y a du vent.",
      { if: { has: "sansnom:page" }, text: "La coupole est brisée, depuis la grâce. Personne ne l'a réparée. On voit, d'en bas, la neige qui tombe dedans." },
    ],
    choices: [{ label: "Monter", test: { dom: "nature", label: "Escalade", help: [{ if: { item: "corde" }, v: 15 }, { if: { present: "pie" }, v: 10 }, { if: { has: "sansnom:page" }, v: 10 }] },
      win: { fx: { ep: ["perso", 1000] }, to: "II_S5_salle" },
      lose: { fx: { pv: -4, flag: "sud5:alerte" }, to: "II_S5_paliers" } }] }),

  II_S5_paliers: P({ title: "L'escalier des registres", place: "vasselin",
    text: [
      "Deux cents marches entre les étagères. La nuit, la Tour bruisse : les registres, sur les rayons, craquent, se tassent, comme une forêt sous la neige. Il fait de plus en plus froid à mesure qu'on monte.",
      { if: { has: "sud5:alerte" }, text: "En bas, une cloche s'est mise à sonner. Pas fort. Une petite cloche de pupitre, qu'on agite, une fois, deux fois. Quelqu'un sait que vous êtes là." },
      { if: { item: "plan_tour" }, text: "Le plan des Mouettes dans la tête, tu évites le palier de la serrure à trois pênes, tu prends l'escalier des copistes, plus étroit, qui contourne celui où les Mouettes ont écrit *ne pas*." },
      { if: { not: { item: "plan_tour" } }, text: "Au palier du milieu, une porte fermée, qu'on ne peut pas contourner. Derrière, du froid, et un bruit de respiration lente, énorme." },
    ],
    choices: [
      { label: "Continuer à monter", hide: { not: { item: "plan_tour" } }, to: "II_S5_salle" },
      { label: "Ouvrir la porte", hide: { item: "plan_tour" }, to: "II_S5_chien" },
    ] }),

  II_S5_chien: P({ title: "Ne pas", place: "vasselin",
    text: [
      "Derrière la porte, une salle d'archives, et au milieu, couché sur les dalles, quelque chose qui a été un chien de garde, un grand mâtin, et qui est maintenant de neige, de la tête aux pattes. Il dort. Il respire. Chaque souffle fait voler les feuilles sur les pupitres.",
      "Il ouvre un œil.",
    ],
    choices: [
      { label: "Passer le long du mur, sans respirer", test: { dom: "discretion", label: "Silence" },
        win: { to: "II_S5_salle" }, lose: { to: "II_S5_chien_combat" } },
      { label: "Lui parler. C'était un chien, avant", test: { dom: "nature", label: "Bêtes", help: [{ if: { present: "enfant" }, v: 10 }] },
        win: { fx: { flag: "sud5:chien_calme" }, to: "II_S5_salle" }, lose: { to: "II_S5_chien_combat" } },
    ] }),

  II_S5_chien_combat: P({ title: "Le mâtin",
    combat: { title: "Le chien de neige", enemies: ["loup", "glaneur_petit"], terrain: "bati", range: "contact",
      flee: { dom: "discretion", label: "Courir vers l'escalier du haut", to: "II_S5_salle" },
      win: { fx: { ep: ["seance", 1000] }, to: "II_S5_salle" },
      lose: { fx: { pv: -3, flag: "sud5:alerte" }, to: "II_S5_salle" } },
    text: ["Il se lève en silence. De ses flancs se détache un Glaneur, maigre et blanc, qui dormait contre lui comme un chiot contre sa mère."],
    choices: [] }),

  II_S5_salle: P({ title: "La grande salle", place: "vasselin",
    text: [
      "La grande salle, sous la coupole, à la lumière de la lune. Le trône est vide. Le cercle de neige autour de l'estrade a grandi : il monte jusqu'aux genoux, maintenant, et il est lisse, sans une trace.",
      { after: "sansnom:page", text: "Par la coupole crevée, la neige tombe droit sur l'estrade." },
      "Au centre, le coffre de fer noir, couvert de givre. Trois serrures.",
    ],
    choices: [
      { label: "Ouvrir avec les trois clés du serrurier", hide: { not: { item: "trois_cles" } }, fx: { ep: ["perso", 800] }, to: "II_S5_coffre" },
      { label: "Laisser Pie crocheter les trois serrures", hide: { any: [{ item: "trois_cles" }, { not: { present: "pie" } }] }, test: { dom: "discretion", label: "Crochets", help: [{ v: 25, if: { present: "pie" } }] },
        win: { fx: { ep: ["perso", 1500] }, to: "II_S5_coffre" }, lose: { fx: { flag: "sud5:alerte" }, to: "II_S5_coffre_force" } },
      { label: "Demander à Linette : elle sait peut-être où il range un double", hide: { any: [{ item: "trois_cles" }, { not: { has: "sud5:linette_dedans" } }] }, to: "II_S5_coffre_linette" },
      { label: "Forcer le coffre", hide: { item: "trois_cles" }, to: "II_S5_coffre_force" },
    ] }),

  II_S5_coffre_linette: P({ title: "Le double", place: "vasselin",
    text: ["Linette réfléchit. « Il ne fait pas de double, dit-elle. Mais il a toujours peur de perdre. Les gens qui ont peur de perdre écrivent. » Elle va au pupitre de l'archiviste, sous la coupole, ouvre le tiroir, en sort un carnet, le feuillette. « Les gardes ne savent pas lire. Il le sait. » Elle te tend le carnet ouvert. Trois dessins de clés, cotés au millième, de sa main. Et dessous, l'ordre des serrures."],
    choices: [{ label: "Laisser Linette ouvrir", fx: { ep: ["perso", 1200], conf: { pie: 5 } }, to: "II_S5_coffre" }] }),

  II_S5_coffre_force: P({ title: "Le fer froid", place: "vasselin",
    text: [
      "Le fer noir ne cède pas. Les crochets glissent, la lame plie. Le froid du coffre monte dans tes mains, dans tes bras, et tu sens, une seconde, quelque chose qui part. Le nom d'une rue. Le goût d'un fruit. Rien, peut-être.",
      "Puis la troisième serrure claque, d'elle-même, comme si quelqu'un l'avait ouverte de l'intérieur.",
    ],
    choices: [{ label: "Soulever le couvercle", fx: { flag: "sud5:coffre_force" }, to: "II_S5_coffre" }] }),

  II_S5_coffre: P({ title: "Le registre noir", place: "vasselin",
    text: [
      "Le couvercle se soulève. Le souffle froid. Le givre qui fond.",
      "Le Grand Registre. Noir, immense, lourd comme un enfant. Il faut deux personnes pour le sortir du coffre. Sous lui, au fond du coffre, des feuilles volantes, des centaines, rangées par liasses : les cessions. Celles qu'on a payées, celles qu'on a données.",
      { if: { not: { item: "feuilles_lisse" } }, text: "Une liasse cousue, sur le dessus : *Lisse.*" },
    ],
    choices: [
      { label: "Prendre le registre", fx: { item: "registre_noir", flag: "sud5:registre", quest: "II_S_archives", ep: ["perso", 3000] }, to: "II_S5_escalier" },
      { label: "Prendre aussi la liasse de Lisse", hide: { item: "feuilles_lisse" }, fx: { item: ["registre_noir", "feuilles_lisse"], flag: ["sud5:registre", "sud5:lisse_pris"], quest: ["II_S_archives", "II_S_lisse"], ep: ["perso", 3000] }, to: "II_S5_escalier" },
    ] }),

  II_S5_escalier: P({ title: "Quelqu'un monte", place: "vasselin",
    text: [
      "Vous avez fait dix pas vers l'escalier quand vous l'entendez. Un pas. Lent, régulier, qui monte. Un bruit de pas : ce n'est donc pas un garde.",
      "Mordace apparaît en haut des marches, une chandelle à la main, l'écharpe autour du cou. Il est seul. Il est essoufflé. Il a monté deux cents marches à son âge, au milieu de la nuit.",
      "Il regarde le registre entre vos bras. Puis toi.",
      "« Dame Lisandre, dit-il. Vous savez ce que vous portez ? »",
    ],
    choices: [
      { label: "« Oui. »", to: "II_S5_mordace" },
      { label: "Ne rien répondre, et passer", test: { dom: "social", label: "Sang-froid", help: [{ if: { has: "sud2:confidence" }, v: 15 }, { if: { present: "ysolde" }, v: 10 }] },
        win: { to: "II_S5_mordace" }, lose: { to: "II_S5_mordace" } },
    ] }),

  II_S5_mordace: P({ title: "Ce que vous portez", place: "vasselin",
    text: [
      "« Vous portez trois cents ans d'oubli, dit-il. Un royaume entier qui dort dessus. Ouvrez-le n'importe où, lisez une page à voix haute dans la rue, et demain matin il y aura des gens qui se tueront pour ce qu'ils auront appris. »",
      "Il pose la chandelle sur une marche. « Je ne vous arrêterai pas. Je suis un vieil homme, et vous êtes jeunes. Mais écoutez : ce registre est la digue. Tant qu'il est écrit, et gardé, et fermé, le reste du monde peut oublier. Si vous l'emportez loin de son coffre, tout ce qui est écrit dedans voudra revenir. »",
      { with: "hylas", text: "Hylas sort de l'ombre derrière toi. Mordace le voit. Il a un mouvement de recul, un seul. « Maître », dit-il. Il a la voix d'un garçon de quinze ans. Hylas se tait. Il tend la main, et Mordace, après un long moment, s'écarte." },
      { without: "hylas", text: "Puis il s'écarte, et vous laisse passer, et reste là, sur sa marche, à côté de sa chandelle, à regarder le coffre ouvert." },
    ],
    choices: [{ label: "Descendre, vite", to: "II_S5_fuite" }] }),

  II_S5_fuite: P({ title: "La ville", place: "vasselin",
    text: [
      "En bas, les gardes vous laissent passer. Ils regardent l'escalier, en haut, dans l'attente d'un ordre.",
      "Dans les rues, il neige. En juillet, sur Vasselin, une neige fine, blanche, qui ne fond pas sur les pavés. Sur le quai, des gens sortent de chez eux et regardent le ciel. Certains se mettent à pleurer sans savoir pourquoi. D'autres se souviennent soudain d'un nom.",
      "Le registre pèse dans vos bras. Il est froid. Il est vivant.",
    ],
    choices: [
      { label: "Aller au port. Jacotte a dit : un bateau, de nuit, sans lanterne", hide: { not: { any: [{ has: "sud:port_ami" }, { has: "sud:port_dit" }] } }, fx: { flag: "sud5:fuite=bateau" }, to: "II_S5_choix" },
      { label: "Aller à l'Ancre, et partir à l'aube par la route", fx: { flag: "sud5:fuite=route" }, to: "II_S5_choix" },
    ] }),

  II_S5_choix: P({ title: "À qui", place: "vasselin",
    fx: { questSeen: "II_S_registre" },
    text: [
      "Avant de partir, il faut décider. Vous ne pouvez pas garder le registre pour vous. Il est trop lourd, trop froid, trop recherché. Et vous avez promis de rejoindre les autres au col de l'Ourse.",
      "Trois mains peuvent le tenir.",
      "La reine, qui a donné son fils et des villes, et qui est la seule à pouvoir ordonner qu'on rende.",
      "Les Greffiers : pas Mordace, les autres. Le Frère Orlan, qui a toujours froid, qui t'a donné les faits de Hautvent, et qui connaît ceux de la Chancellerie qui ne sont pas à Mordace.",
      "Les clans, au col de l'Ourse, là où la digue cède. Corbe. Ceux qui n'ont jamais su lire.",
      { with: "hylas", text: "Hylas se tait. Il a les mains posées à plat sur la couverture du registre, comme on pose les mains sur la poitrine d'un malade." },
    ],
    choices: [
      { label: "Le porter à la reine", fx: { flag: "registre:reine", quest: "II_S_registre", conf: { lisandre: 5 }, ep: ["perso", 2000] }, to: "II_S5_reine" },
      { label: "Le confier au Frère Orlan et aux Greffiers fidèles", fx: { flag: "registre:greffiers", quest: "II_S_registre", conf: { lisandre: 5 }, ep: ["perso", 2000] }, to: "II_S5_orlan" },
      { label: "L'emporter au col de l'Ourse, pour les clans", fx: { flag: "registre:clans", quest: "II_S_registre", conf: { lisandre: 5 }, ep: ["perso", 2000] }, to: "II_S5_col" },
    ] }),

  II_S5_reine: P({ title: "La chambre bleue", place: "vasselin",
    text: [
      "Ermengarde vous fait entrer par les cuisines, sans poser une question. Elle regarde le registre, puis toi, puis elle ouvre les portes, une à une, jusqu'à la chambre bleue.",
      "La reine ne dort pas. Elle est assise à sa fenêtre, à regarder la neige.",
      { if: { has: "isaure:brisee" }, text: "Elle a la feuille d'Aymeric sur les genoux. Elle a pleuré toute la nuit. Elle a l'air de quelqu'un qui revient d'un long voyage, épuisée, et plus elle-même qu'elle ne l'a été depuis des années." },
      "Tu poses le registre sur le lit. Elle le regarde longtemps.",
      "« C'est tout ce que j'ai donné ? » demande-t-elle. Tu dis : pas seulement. Tout ce que d'autres ont donné avant elle. Elle hoche la tête. « Alors c'est à moi de le garder. Ce n'est pas un cadeau, n'est-ce pas ? » Elle pose la main dessus. « Laissez-moi. Allez où vous devez aller. Je lirai. »",
    ],
    choices: [{ label: "Partir vers le nord", fx: { drop: "registre_noir", flag: "isaure:registre" }, to: "II_S5_depart" }] }),

  II_S5_orlan: P({ title: "Frère Orlan", place: "vasselin",
    fx: { meet: "orlan" },
    text: [
      "Le Frère Orlan loge dans une mansarde de la rue des Copistes, au-dessus d'une boutique de papier. Il ouvre en chemise de nuit, avec trois châles, enrhumé.",
      "Quand il voit le registre, il éternue. Puis il s'assied par terre, sur le seuil, parce que ses jambes ne le tiennent plus.",
      "« Nous sommes onze, dit-il quand il peut parler. Onze Greffiers qui ne sont pas à lui. On se réunit le jeudi, on recopie ce qu'il efface, sur des feuilles qu'on cache dans les murs. On n'a jamais rien pu faire d'autre. » Il pose les mains sur le registre. « Maintenant, on peut. Il faudra des années. On le recopiera. Dix fois. Cent fois. Qu'il ne soit plus jamais dans un seul coffre. »",
    ],
    choices: [{ label: "Partir vers le nord", fx: { drop: "registre_noir", flag: "orlan:registre" }, to: "II_S5_depart" }] }),

  II_S5_col: P({ title: "Le poids", place: "vasselin",
    text: [
      "Vous l'enveloppez dans une couverture, puis dans une toile cirée, et vous le sanglez sur le dos de celui qui peut le porter le plus longtemps. Il est si froid que la toile se couvre de givre en une heure.",
      "Il pèse. Pas comme une pierre : comme une personne endormie.",
      { with: "hylas", text: "Hylas marche à côté, la main sur la toile, sans la lâcher." },
    ],
    choices: [{ label: "Partir vers le nord", to: "II_S5_depart" }] }),

  II_S5_depart: P({ title: "Vers le col", place: "vasselin",
    text: [
      { if: { has: "sud5:fuite=bateau" }, text: "Jacotte vous attend au bout du quai, dans une barque de pêche à voile rousse, sans lanterne. Elle ne pose pas de questions. Elle vous remonte la côte jusqu'à l'embouchure de la Pallante, et de là, à contre-courant, avec deux rameurs qui chantent bas. Trois jours gagnés sur la route." },
      { if: { has: "sud5:fuite=route" }, text: "À l'aube, vous quittez Vasselin par la porte du Nord, à cheval, sur des bêtes que Rodric, ou Pie, ou personne, a payées. Personne ne vous suit. La neige tombe sur la route, fine, et ne fond pas." },
      "Derrière vous, Vasselin blanchit, toit après toit, comme Pallanche.",
      "Devant vous, au bout de la vallée, puis des collines, puis des crêtes, le col de l'Ourse. Vous l'avez promis.",
    ],
    choices: [{ label: "Le col de l'Ourse", fx: { flag: "ch2:sud:5", resume: "II_R_col", catchup: 9, catchupAll: true, catchupWhy: "le registre noir" }, to: "C2_carrefour", big: true }] }),
};
