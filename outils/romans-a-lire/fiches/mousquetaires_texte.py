# mousquetaires_texte.py ch.json sortie.json : retouches des « Trois Mousquetaires » après gut.py (Gutenberg n° 13951).
# Titres des chapitres en minuscules (ceux de Dumas) ; le sous-titre de la préface aussi ; le « FIN » final retiré.
import json, sys
TITRES = ["Préface", "Les trois présents de M. d'Artagnan père", "L'antichambre de M. de Tréville", "L'audience",
  "L'épaule d'Athos, le baudrier de Porthos et le mouchoir d'Aramis", "Les mousquetaires du roi et les gardes de M. le cardinal",
  "Sa Majesté le roi Louis treizième", "L'intérieur des mousquetaires", "Une intrigue de cœur", "D'Artagnan se dessine",
  "Une souricière au XVIIe siècle", "L'intrigue se noue", "Georges Villiers, duc de Buckingham", "Monsieur Bonacieux",
  "L'homme de Meung", "Gens de robe et gens d'épée",
  "Où M. le garde des sceaux Séguier chercha plus d'une fois la cloche pour la sonner, comme il le faisait autrefois",
  "Le ménage Bonacieux", "L'amant et le mari", "Plan de campagne", "Voyage", "La comtesse de Winter", "Le ballet de la Merlaison",
  "Le rendez-vous", "Le pavillon", "Porthos", "La thèse d'Aramis", "La femme d'Athos", "Retour", "La chasse à l'équipement",
  "Milady", "Anglais et Français", "Un dîner de procureur", "Soubrette et maîtresse",
  "Où il est traité de l'équipement d'Aramis et de Porthos", "La nuit tous les chats sont gris", "Rêve de vengeance",
  "Le secret de Milady", "Comment, sans se déranger, Athos trouva son équipement", "Une vision", "Le cardinal",
  "Le siège de La Rochelle", "Le vin d'Anjou", "L'auberge du Colombier-Rouge", "De l'utilité des tuyaux de poêle",
  "Scène conjugale", "Le bastion Saint-Gervais", "Le conseil des mousquetaires", "Affaire de famille", "Fatalité",
  "Causerie d'un frère avec sa sœur", "Officier", "Première journée de captivité", "Deuxième journée de captivité",
  "Troisième journée de captivité", "Quatrième journée de captivité", "Cinquième journée de captivité",
  "Un moyen de tragédie classique", "Évasion", "Ce qui se passait à Portsmouth le 23 août 1628", "En France",
  "Le couvent des Carmélites de Béthune", "Deux variétés de démons", "Une goutte d'eau", "L'homme au manteau rouge",
  "Le jugement", "L'exécution", "Conclusion", "Épilogue"]
C = json.load(open(sys.argv[1], encoding='utf8'))
assert len(C) == len(TITRES), len(C)
for c, t in zip(C, TITRES): c['head'] = t
p0 = C[0]['paras'][0]; assert p0.startswith('DANS LAQUELLE'), p0
C[0]['paras'][0] = "*Dans laquelle il est établi que, malgré leurs noms en* os *et en* is, *les héros de l'histoire que nous allons avoir l'honneur de raconter à nos lecteurs n'ont rien de mythologique.*"
if C[-1]['paras'][-1] == 'FIN': C[-1]['paras'].pop()
json.dump(C, open(sys.argv[2], 'w', encoding='utf8'), ensure_ascii=False, indent=0)
