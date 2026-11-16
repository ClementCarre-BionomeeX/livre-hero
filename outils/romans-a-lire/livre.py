# livre.py spec.py pages.json outdir : écrit histoires/src/<id>/ pour un livre à lire (lecture: true) à partir du texte
# découpé (pages.json, de split.py) et d'une fiche (spec.py : base, chapitres, titres des pages, lieux, gens, mots).
# fx.meet est posé tout seul à la première page où un nom (aka) de la personne apparaît.
import json, sys, re, os, runpy
S = runpy.run_path(sys.argv[1]); C = json.load(open(sys.argv[2], encoding='utf8')); OUT = sys.argv[3]
os.makedirs(OUT, exist_ok=True)
def js(x, ind=2): return json.dumps(x, ensure_ascii=False, indent=ind)
def lit(x):  # objet JS compact sur une ligne, clés sans guillemets quand c'est possible
    if isinstance(x, dict):
        return "{ " + ", ".join((k if re.match(r'^[A-Za-z_$][\w$]*$', k) else json.dumps(k, ensure_ascii=False)) + ": " + lit(v) for k, v in x.items()) + " }"
    if isinstance(x, list): return "[" + ", ".join(lit(v) for v in x) + "]"
    return json.dumps(x, ensure_ascii=False)
B = S['BASE']; ID = B['id']; HEAD = S['HEAD']
LETTER = "A-Za-zÀ-ÖØ-öø-ÿŒœ"
def form_re(f):
    c = f[0]; first = '[' + c.lower() + c.upper() + ']' if c.lower() != c.upper() else re.escape(c)
    return re.compile(r'(^|[^' + LETTER + r'-])' + first + re.escape(f[1:]) + r'(?=$|[^' + LETTER + r'-])')
people = S['PEOPLE']; met = set(S.get('MET_AT_START', [])); forced = S.get('MEET', {})
pats = {k: [form_re(f) for f in (p.get('aka') or [])] for k, p in people.items()}
PT = S['PAGES']; places = S['PLACES']; acts = S['CHAPTERS']
arrive = {}
for ci, c in enumerate(C):
    n = c['n']; lines = [HEAD + "\n// Chapitre " + n + " · " + acts[ci]['title'] + "\nmodule.exports = {"]
    for k, pg in enumerate(c['pages']):
        pid = n + "_" + str(k + 1); spec = PT[pid]
        title, place = spec[0], spec[1]; extra = spec[2] if len(spec) > 2 else {}
        text = [c['paras'][i] for i in pg]
        meet = [m for m in forced.get(pid, []) if m not in met]
        for who, ps in pats.items():
            if who in met or who in meet or who in S.get('NO_AUTO', []): continue
            if any(p.search(t) for p in ps for t in text): meet.append(who)
        met.update(meet)
        fx = dict(extra.get('fx', {}))
        if meet: fx['meet'] = meet
        if place not in places: raise SystemExit("lieu inconnu " + place + " en " + pid)
        arrive.setdefault(place, pid)
        head = "  " + pid + ": { act: " + json.dumps(n) + ", title: " + json.dumps(title, ensure_ascii=False) + ", place: " + json.dumps(place) + (", fx: " + lit(fx) if fx else "") + ","
        lines.append(head + "\n    text: " + js(text, 6).replace('\n]', '\n    ]') + " },\n")
    lines.append("};\n")
    open(os.path.join(OUT, "chapitre%02d.js" % (ci + 1)), "w", encoding='utf8').write("\n".join(lines))
missing = [p for p in people if p not in met and p not in S.get('MET_AT_START', [])]
if missing: print("jamais rencontrés :", missing)
for k, p in places.items():
    if k not in arrive: print("lieu jamais visité :", k)
    else: p['arrive'] = arrive[k]
open(os.path.join(OUT, "gens.js"), "w", encoding='utf8').write(HEAD + "\n// Les gens du livre (syntaxe de « Qui est qui » : aka, qui, aspect, face). Cliquables à partir de leur entrée en scène.\nmodule.exports = {\n" + ",\n".join("  " + k + ": " + lit(v) for k, v in people.items()) + ",\n};\n")
open(os.path.join(OUT, "lieux.js"), "w", encoding='utf8').write(HEAD + "\n// Les lieux du livre.\nmodule.exports = {\n" + ",\n".join("  " + k + ": " + lit(v) for k, v in places.items()) + ",\n};\n")
open(os.path.join(OUT, "mots.js"), "w", encoding='utf8').write(HEAD + "\n// Les mots et les noms de l'époque, expliqués d'un toucher. Rien de l'intrigue.\nmodule.exports = {\n" + ",\n".join("  " + json.dumps(k, ensure_ascii=False) + ": " + json.dumps(v, ensure_ascii=False) for k, v in S['WORDS'].items()) + ",\n};\n")
open(os.path.join(OUT, "objets.js"), "w", encoding='utf8').write(HEAD + "\n// Ce que le narrateur garde et dont le texte reparle : dans le carnet.\nmodule.exports = {\n" + ",\n".join("  " + k + ": " + lit(v) for k, v in S.get('ITEMS', {}).items()) + (",\n" if S.get('ITEMS') else "") + "};\n")
open(os.path.join(OUT, "resumes.js"), "w", encoding='utf8').write(HEAD + "\n// Ce qui se passe dans chaque chapitre, en quelques lignes (Claude), montré par « Où en étais-je ? » une fois le chapitre lu.\nmodule.exports = {\n" + ",\n".join("  " + c['n'] + ": " + lit({k: v for k, v in a.items() if k in ('text', 'notice')}) for c, a in zip(C, acts)) + ",\n};\n")
ch = HEAD + "\n// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.\nvar RECAP = require(\"./resumes.js\");\nmodule.exports = [\n" + ",\n".join("  " + lit({"id": c['n'], "title": a['title'], "question": "", "levels": [1, 1], "start": c['n'] + "_1"}) for c, a in zip(C, acts)) + ",\n].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || \"\"; a.notice = !!r.notice; return a; });\n"
open(os.path.join(OUT, "chapitres.js"), "w", encoding='utf8').write(ch)
idx = HEAD + "\n// La base (le livre, sa notice, ses chapitres, ses gens, ses lieux, ses mots) et les pages des chapitres, dans l'ordre du\n// livre. Un livre à lire (lecture: true) : l'ordre des pages est l'ordre de lecture.\nvar base = require(\"./base.js\");\nfor (var n = 1; n <= " + str(len(C)) + "; n++) {\n  var ps = require(\"./chapitre\" + (n < 10 ? \"0\" : \"\") + n + \".js\");\n  Object.keys(ps).forEach(function (k) { if (base.passages[k]) throw new Error(\"passage en double : \" + k); base.passages[k] = ps[k]; });\n}\nmodule.exports = base;\n"
open(os.path.join(OUT, "index.js"), "w", encoding='utf8').write(idx)
b = dict(B); b['start'] = C[0]['n'] + "_1"
body = HEAD + "\nmodule.exports = {\n"
for k, v in b.items():
    if k == 'glossary': body += "  glossary: Object.assign({}, require(\"../glossaire.js\"), require(\"./mots.js\")),\n"; continue
    if k == 'world':
        w = dict(v); body += "  world: { noFood: true, start: " + lit(w['start']) + ", places: require(\"./lieux.js\"), routes: [], regions: {}, events: {} },\n"; continue
    body += "  " + k + ": " + js(v, 2).replace("\n", "\n  ") + ",\n"
body += "  acts: require(\"./chapitres.js\"),\n  companions: {},\n  factions: {},\n  relics: {},\n  people: require(\"./gens.js\"),\n  items: require(\"./objets.js\"),\n  endings: { fin: { title: \"Fin du livre\" } },\n  passages: {},\n};\n"
open(os.path.join(OUT, "base.js"), "w", encoding='utf8').write(body)
print("ok", ID, sum(len(c['pages']) for c in C), "pages")
