// L'Île Folle-Aiguille · act V, the child's false trails on the morning of the three crosses. Following the bearings of
// the northern cross as they are written leads to the mangrove of the south, where the Chevalier's men dig in the mud
// with the same false figures: a sailor sinking in the quicksand (xw:enlise_sauve or xw:enlise_laisse), a grave of the
// Maraude with a carved name (xw:tombe_maraude), the crabs' beach and the drowned boat (xw:canot). Everything brings
// the child back to the map in the head.
module.exports = {
  passages: {
    XW_nord: { act: "V", title: "La croix du nord", place: "sylve", ambiance: "nature",
      text: [
        "Tu essaies la troisième croix, celle du nord, avec ses deux relèvements tels qu'ils sont écrits. Tu prends le premier quart sur la Dent-du-Nord, le second sur le sommet de la Table. Tu marches. Tu corriges. Tu marches encore. L'aiguille frissonne, hésite, tourne, revient, comme un chien qui ne veut pas aller là où on le mène.",
        "Les lignes se croisent au sud. Tout au sud, à l'opposé exact des collines du nord, dans la mangrove.",
        "La mangrove de Folle-Aiguille borde la côte sud sur une demi-lieue, entre la plage des crabes et l'embouchure d'un ruisseau noir. C'est une forêt qui marche sur l'eau. Les palétuviers se dressent sur leurs racines comme sur des échasses, des centaines de racines arquées, grises, entremêlées, qui plongent dans une vase noire où la marée monte et descend deux fois par jour. Il y fait une chaleur de serre. L'air sent le soufre, la feuille pourrie, et une sorte de sucre. Des crabes rouges, par milliers, détalent devant toi en agitant une pince énorme, une seule, comme s'ils te menaçaient tous d'un même geste.",
        "Et tu entends des voix. Des voix d'hommes, et des bruits de pelles dans la boue.",
      ],
      choices: [
        { label: "T'approcher des voix, à travers les racines", to: "XW_creuseurs" },
        { label: "Les contourner par la plage des crabes", to: "XW_plage" },
      ] },
    XW_creuseurs: { act: "V", title: "La mangrove", place: "sylve", ambiance: "nature",
      text: [
        "Ils sont six, dans une clairière de vase, entre les racines. Des marins du brigantin, la Désinvolte, en chemise, en culotte retroussée, couverts de boue noire jusqu'aux épaules. Ils creusent. Ils ont creusé toute la matinée, à en juger par les trous : une douzaine, partout, pleins d'eau, qui se referment à mesure qu'on les creuse, comme une bouche qui mâche.",
        "Un officier, en habit bleu taché, une copie de la carte à la main, un compas dans l'autre, crie des ordres en regardant tour à tour la carte et l'aiguille, qui tourne. « Ici ! Non. Là. Trois pas au nord. Non, au nord, au vrai nord, celui de la carte ! » Les hommes le regardent sans amour.",
        "Ils suivent les mêmes chiffres que toi. Ils creusent là où la carte ment. Ils ne trouveront rien, que de la vase et des crabes.",
        "Puis un des hommes, à l'écart, au bord d'un trou plus grand que les autres, pousse un cri. Il s'enfonce. Il était debout dans la vase, et la vase s'est ouverte sous lui, et elle l'aspire, lentement, jusqu'aux cuisses, jusqu'à la taille. Il se débat. Plus il se débat, plus il descend. Les autres le regardent, figés. L'officier crie qu'on ne bouge pas, qu'on va s'enliser tous.",
      ],
      choices: [
        { label: "Quitter les racines, et lui tendre une branche", test: { dom: "nature", diff: 1, label: "La vase qui avale" }, win: { fx: { flag: "xw:enlise_sauve" }, to: "XW_enlise_sauve" }, lose: { fx: { flag: "xw:enlise_sauve" }, to: "XW_enlise_pris" } },
        { label: "Rester caché{e}", fx: { flag: "xw:enlise_laisse" }, to: "XW_enlise_laisse" },
      ] },
    XW_enlise_sauve: { act: "V", title: "La vase", place: "sylve", ambiance: "nature",
      text: [
        "Tu sors des racines. Les marins sursautent, lèvent leurs pelles. Tu ne les regardes pas. Tu casses une longue branche morte de palétuvier, tu te couches à plat ventre sur un lit de racines, au bord du trou, pour répartir ton poids comme les pêcheurs de l'anse des Corneilles sur la vase de la baie, et tu tends la branche à l'homme qui s'enfonce.",
        "« Ne bouge plus, dis-tu. Ne te débats plus. Couche-toi sur le dos, comme dans l'eau. La vase te portera si tu lui en laisses le temps. »",
        "Il te regarde, fou de peur. Puis il obéit. Il se renverse en arrière, lentement, les bras en croix, et la vase, qui l'avalait, s'arrête. Il attrape la branche. Tu tires. Les autres marins, enfin, se couchent à côté de toi, sur les racines, et tirent aussi. L'homme sort de la vase avec un bruit énorme de succion, en laissant ses deux bottes au fond.",
        "Il reste couché sur les racines, couvert de boue noire, à respirer. Puis il te regarde. C'est un garçon de vingt ans, à peine, avec un accent du Couchant et une dent en moins.",
        "L'officier en habit bleu s'approche, sa carte à la main. Il te regarde de la tête aux pieds. « Toi, tu es de la Cormorane. » Il hésite. Puis il range son pistolet, qu'il avait sorti. « Va-t'en. Je ne t'ai pas vu{e}. Et dis à ta capitaine que le Chevalier Quémeneur n'oublie pas les services. »",
      ],
      choices: [{ label: "Continuer à travers les racines", to: "XW_tombe" }] },
    XW_enlise_pris: { act: "V", title: "La vase", place: "sylve", ambiance: "nature",
      text: [
        "Tu sors des racines, une branche à la main. Tu te couches au bord du trou, tu la tends. L'homme l'attrape. Tu tires. Et la vase, sous ton propre ventre, s'ouvre à son tour, et tu glisses, et tu t'enfonces jusqu'aux hanches, à côté de lui.",
        "Pendant un moment épouvantable, vous êtes deux à descendre, côte à côte, dans la boue noire et tiède, en vous tenant la main. Puis les marins de la Désinvolte se couchent sur les racines, en chaîne, comme on fait sur la glace, et vous tirent, l'un après l'autre, avec une gaffe et beaucoup de jurons.",
        "Tu sors sans tes souliers. L'homme sort sans ses bottes. Vous restez couchés côte à côte sur les racines, noirs de vase des pieds à la tête, à respirer, et il se met à rire, d'un rire nerveux, interminable, et tu ris aussi, sans savoir pourquoi.",
        "L'officier en habit bleu te regarde partir à pieds nus sans rien dire. Il a son pistolet à la main. Il ne s'en sert pas. Il le range, au bout d'un moment, comme on range un argument dont on n'a plus besoin.",
      ],
      choices: [{ label: "Continuer à travers les racines, pieds nus", to: "XW_tombe" }] },
    XW_enlise_laisse: { act: "V", title: "La vase", place: "sylve", ambiance: "nature",
      text: [
        "Tu restes accroupi{e} derrière les racines, sans bouger. Tu te dis qu'ils sont six, armés, que ce sont les hommes du brigantin, que tu as le trésor à trouver, que ce n'est pas ton affaire.",
        "L'homme s'enfonce. Jusqu'à la poitrine. Jusqu'aux épaules. Les autres finissent par se coucher sur les racines et lui tendre une pelle. Il l'attrape. Ils tirent. Ils le sortent, enfin, au dernier moment, avec la vase jusqu'au menton, et il reste couché sur les racines à vomir de la boue noire.",
        "Il vit. Ils l'ont sauvé sans toi.",
        "Tu repars à travers les racines, sans bruit, avec la sensation d'avoir regardé, une fois de plus, à trois pas de quelque chose, sans rien faire. Elle te colle à la peau, comme la vase de la mangrove, et il faudra plus qu'un bain pour l'enlever.",
      ],
      choices: [{ label: "Continuer à travers les racines", to: "XW_tombe" }] },
    XW_tombe: { act: "V", title: "La tombe dans les racines", place: "sylve", ambiance: "nature",
      text: [
        "Plus loin, là où la mangrove remonte vers la terre ferme, au pied d'un palétuvier plus grand et plus vieux que les autres, il y a une croix. Une croix de bois, presque pourrie, à moitié mangée par les crabes, enfoncée dans un petit tertre que les racines ont envahi.",
        "Sur la traverse, on a gravé au couteau, il y a longtemps, des lettres que l'humidité a presque effacées. Tu les déchiffres du bout des doigts, comme un aveugle.",
        "*JOS. KERDRÉAN. MAÎTRE DE MANŒUVRE. LA MARAUDE. MORT DES FIÈVRES.* Et dessous, d'une autre main, plus maladroite : *IL ÉTAIT BON.*",
        "Quelqu'un de l'équipage de la Maraude est mort ici, il y a vingt et un ans, pendant les jours où ils enterraient le trésor. Et quelqu'un l'a enterré, et lui a fait une croix, et a gravé dessus que c'était un homme bon. Au milieu de tout le reste. Au milieu des clefs, de la chapelle, de la crypte.",
        "Tu restes un moment devant la croix pourrie. Tu ne sais pas quoi penser d'un équipage qui massacre une colonie et grave sur la tombe d'un camarade qu'il était bon. Tu penses que c'est peut-être la question la plus difficile que t'ait posée cette île.",
      ],
      choices: [
        { label: "Redresser la croix, et la caler avec des pierres", fx: { flag: "xw:tombe_maraude" }, to: "XW_plage" },
        { label: "La laisser aux crabes", to: "XW_plage" },
      ] },
    XW_plage: { act: "V", title: "La plage des crabes", place: "plage", ambiance: "nature",
      text: [
        "La mangrove s'ouvre sur une plage de sable gris, au sud, que personne n'a encore foulée de ce voyage. Elle est rouge. Rouge de crabes, des milliers, des millions peut-être, qui couvrent le sable d'un tapis mouvant et cliquetant, et qui s'écartent devant tes pas en vague, avec un bruit de pluie sèche, et se referment derrière toi.",
        "Au milieu de la plage, à demi enfoui dans le sable, il y a un canot. Un canot de navire, retourné, la quille en l'air, blanchi par le sel et le soleil comme un os de baleine. Les crabes entrent et sortent par les fentes du bordage.",
        "Tu le retournes, avec beaucoup de peine. Dessous, dans le sable, rien. Des crabes, un aviron cassé, une écope de bois. Et, gravé sur le banc de nage, à la pointe de couteau, comme sur la croix de la mangrove, un nom de navire : *MARAUDE.*",
        "Le canot de la Maraude. Celui qui a servi à enterrer le trésor, peut-être. Ou celui qui a ramené les mutins à leur bord, la nuit où ils ont laissé leur capitaine sur la plage. Il est là depuis vingt et un ans, la quille au ciel, sur une plage où personne ne vient, à attendre qu'on le retourne.",
      ],
      choices: [
        { label: "Fouiller le canot jusqu'au bout", fx: { flag: "xw:canot" }, to: "XW_canot" },
        { label: "Revenir à la carte, dans ta tête", back: "A5m_debut" },
      ] },
    XW_canot: { act: "V", title: "La plage des crabes", place: "plage", ambiance: "nature",
      text: [
        "Tu fouilles le canot, planche par planche. Sous le banc de l'arrière, dans un coin que le sel a épargné, coincé entre deux membrures, il y a un objet enveloppé dans un morceau de toile cirée, durcie, cassante.",
        "Tu le déballes. C'est un pistolet. Un vieux pistolet d'arçon, rongé de rouille, au chien cassé. Il est déchargé. Dans le canon, il n'y a rien. À côté, dans la toile, une seule balle de plomb, intacte, grise, ronde.",
        { if: { has: "sauveur:histoire" }, text: "Tu as déjà vu ce genre de pistolet. Au-dessus d'une porte, sur deux chevilles. Celui-ci n'a jamais été tiré. Celui de la hutte, tu ne sais pas." },
        "Tu ne sais pas à qui il était. Tu sais que quelqu'un l'a caché là, dans le canot, avec une balle qui n'a jamais servi, et ne l'a jamais repris.",
        "Tu laisses le pistolet dans sa toile, sous le banc. Il n'est pas à toi. La balle non plus. Tu remets le canot à l'endroit où tu l'as trouvé, la quille au ciel, pour les crabes.",
      ],
      choices: [{ label: "Revenir à la carte, dans ta tête", back: "A5m_debut" }] },
  },
  extras: {},
};
