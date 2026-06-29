"""Genera data/loteamiento.json desde el DXF real.
Lotes: reconstruidos del DWG (capa 'parcelamiento', encadenado de divisorias).
Calles: capa 'via' real. Áreas comunes y status: demo (sintéticos).
Uso: python gen.py <plano.dxf> <salida.json>
"""
import sys, ezdxf, math, json, random
import numpy as np
from ezdxf import recover
from shapely.geometry import Polygon

dxf, outpath = sys.argv[1], sys.argv[2]
doc, _ = recover.readfile(dxf); msp = doc.modelspace()
BB = (2000, 2880, 1240, 1800)
def inbb(x, y): return BB[0] <= x <= BB[1] and BB[2] <= y <= BB[3]
rnd = random.Random(42)

# 1. teeth -> chained rows -> lots
teeth = []
for e in msp:
    if e.dxf.layer != 'parcelamiento' or e.dxftype() != 'LINE': continue
    a = np.array([e.dxf.start.x, e.dxf.start.y]); b = np.array([e.dxf.end.x, e.dxf.end.y])
    if not (inbb(*a) or inbb(*b)): continue
    L = np.linalg.norm(b - a)
    if 8 < L < 60: teeth.append((a, b, (a + b) / 2, (b - a) / L))
used = [False] * len(teeth)
def dsim(d1, d2): return abs(float(np.dot(d1, d2)))
chains = []
for s in range(len(teeth)):
    if used[s]: continue
    ch = [s]; used[s] = True
    for _ in range(2):
        ch = ch[::-1]
        while True:
            ci = ch[-1]; m = teeth[ci][2]; d = teeth[ci][3]; best = None; bd = 1e9
            for j in range(len(teeth)):
                if used[j]: continue
                dist = np.linalg.norm(teeth[j][2] - m)
                if dist < 18 and dsim(d, teeth[j][3]) > 0.93 and dist < bd: bd = dist; best = j
            if best is None: break
            ch.append(best); used[best] = True
    if len(ch) >= 2: chains.append(ch)

raw_lots = []
for mi, ch in enumerate(chains):
    for i in range(len(ch) - 1):
        a1, b1, _, _ = teeth[ch[i]]; a2, b2, _, _ = teeth[ch[i + 1]]
        if np.linalg.norm(a1 - a2) + np.linalg.norm(b1 - b2) <= np.linalg.norm(a1 - b2) + np.linalg.norm(b1 - a2):
            quad = [a1, b1, b2, a2]
        else:
            quad = [a1, b1, a2, b2]
        p = Polygon(quad)
        if p.is_valid and 70 <= p.area <= 800: raw_lots.append((mi, p))

# lot world bbox (para colocar áreas comunes dentro del loteamiento)
lc = np.array([[p.centroid.x, p.centroid.y] for _, p in raw_lots])
lminx, lminy = lc.min(0); lmaxx, lmaxy = lc.max(0)
dx, dy = lmaxx - lminx, lmaxy - lminy
def at(fx, fy): return (lminx + fx * dx, lminy + fy * dy)
# bbox real (vértices) para filtrar ruido de calles
_lx = [c[0] for _, p in raw_lots for c in p.exterior.coords]
_ly = [c[1] for _, p in raw_lots for c in p.exterior.coords]
LX0, LX1, LY0, LY1 = min(_lx), max(_lx), min(_ly), max(_ly)
MARGIN = 60
def near_lots(pts):
    return any(LX0 - MARGIN <= x <= LX1 + MARGIN and LY0 - MARGIN <= y <= LY1 + MARGIN for x, y in pts)

# 2. streets (via)
streets = []
for e in msp:
    if e.dxf.layer != 'via': continue
    t = e.dxftype()
    if t == 'LINE':
        a = (e.dxf.start.x, e.dxf.start.y); b = (e.dxf.end.x, e.dxf.end.y)
        if inbb(*a) or inbb(*b): streets.append([a, b])
    elif t in ('LWPOLYLINE', 'POLYLINE'):
        pts = [(p[0], p[1]) for p in e.get_points()] if t == 'LWPOLYLINE' else [(v.dxf.location.x, v.dxf.location.y) for v in e.vertices]
        if any(inbb(x, y) for x, y in pts) and len(pts) >= 2: streets.append(pts)
    elif t == 'ARC':
        c = e.dxf.center
        if inbb(c.x, c.y):
            a0 = math.radians(e.dxf.start_angle); a1 = math.radians(e.dxf.end_angle)
            if a1 < a0: a1 += 2 * math.pi
            r = e.dxf.radius
            streets.append([(c.x + r * math.cos(a0 + (a1 - a0) * k / 14), c.y + r * math.sin(a0 + (a1 - a0) * k / 14)) for k in range(15)])

# 3. áreas comunes (sintéticas, ubicadas dentro del footprint de lotes)
def rect(cx, cy, w, h, rot=0):
    pts = [(-w / 2, -h / 2), (w / 2, -h / 2), (w / 2, h / 2), (-w / 2, h / 2)]
    cr, sr = math.cos(rot), math.sin(rot)
    return [(cx + x * cr - y * sr, cy + x * sr + y * cr) for x, y in pts]
def circle(cx, cy, r, n=28):
    return [(cx + r * math.cos(2 * math.pi * k / n), cy + r * math.sin(2 * math.pi * k / n)) for k in range(n)]
cx0, cy0 = at(0.04, 0.06)            # entrada (esquina baja-izq del footprint)
entrada = (cx0, cy0)
entrada_rot = 0.5
# cada área común lleva forma + tamaño + rotación (para dibujarlas con detalle en la web)
def mkrect(name, typ, fx, fy, w, h, rot):
    c = at(fx, fy)
    return {"name": name, "type": typ, "shape": "rect", "c": c, "w": w, "h": h, "rot": rot,
            "pts": rect(c[0], c[1], w, h, rot)}
def mkcircle(name, typ, fx, fy, r):
    c = at(fx, fy)
    return {"name": name, "type": typ, "shape": "circle", "c": c, "r": r, "rot": 0,
            "pts": circle(c[0], c[1], r)}
commons = [
    mkrect("Mercado", "mercado", 0.10, 0.48, 32, 22, 0.7),
    mkrect("Cancha polideportiva", "cancha", 0.17, 0.66, 44, 26, 0.7),
    mkcircle("Plaza central", "plaza", 0.52, 0.55, 18),
    mkrect("Área verde / Parque", "parque", 0.86, 0.50, 50, 32, 0.5),
]

# Nota: el recorte de lotes bajo las áreas comunes se hace EN EL FRONTEND
# (ocultando los lotes cubiertos), para que el editor drag&drop recalcule
# el recorte en vivo al mover las áreas. Aquí se emiten todos los lotes.

# 4. normalización a viewBox (flip Y)
allpts = []
for _, p in raw_lots: allpts += list(p.exterior.coords)
for s in streets: allpts += s
for c in commons: allpts += c["pts"]
allpts.append(entrada)
xs = [p[0] for p in allpts]; ys = [p[1] for p in allpts]
minx, maxx, miny, maxy = min(xs), max(xs), min(ys), max(ys)
PAD = 20
W = (maxx - minx) + 2 * PAD; H = (maxy - miny) + 2 * PAD
def tx(p): return ((p[0] - minx) + PAD, (maxy - p[1]) + PAD)
def fmt(pts): return " ".join(f"{x:.1f},{y:.1f}" for x, y in (tx(p) for p in pts))
def centroid(pts):
    c = Polygon(pts).centroid; return tx((c.x, c.y))

# 5. atributos + status demo
canch_c = Polygon(commons[1]["pts"]).centroid; merc_c = Polygon(commons[0]["pts"]).centroid
parq_c = Polygon(commons[3]["pts"]).centroid
def dist(a, b): return math.hypot(a[0] - b[0], a[1] - b[1])
statuses = ["disponible"] * 55 + ["reservado"] * 25 + ["vendido"] * 20
letters = "ABCDEFGHIJKLMNOP"
counters = {}; lots_json = []
for mi, p in sorted(raw_lots, key=lambda t: (t[0], t[1].centroid.x)):
    manz = letters[mi] if mi < len(letters) else f"M{mi}"
    counters[manz] = counters.get(manz, 0) + 1; num = counters[manz]
    area = round(p.area); c = (p.centroid.x, p.centroid.y); vent = []
    if dist(c, (canch_c.x, canch_c.y)) < 90: vent.append("Cerca de la cancha")
    if dist(c, (merc_c.x, merc_c.y)) < 110: vent.append("Cerca del mercado")
    if dist(c, (parq_c.x, parq_c.y)) < 90: vent.append("Frente a área verde")
    if dist(c, entrada) < 140: vent.append("Cerca de la entrada")
    incl = round(rnd.uniform(0, 9), 1)
    if incl < 2: vent.append("Terreno plano")
    status = rnd.choice(statuses)
    price = round(area * 30)  # USD 30 por m²
    coords = list(p.exterior.coords)[:-1]
    lots_json.append({
        "id": f"{manz}-{num:02d}", "manzana": manz, "numero": num,
        "areaM2": area, "status": status, "inclinacionPct": incl,
        "precioUSD": price, "ventajas": vent or ["Buena ubicación"],
        "points": fmt(coords),
        "cx": round(centroid(list(p.exterior.coords))[0], 1),
        "cy": round(centroid(list(p.exterior.coords))[1], 1),
    })

streets_json = []
for s in streets:
    length = sum(math.hypot(s[i + 1][0] - s[i][0], s[i + 1][1] - s[i][1]) for i in range(len(s) - 1))
    if length < 8 or not near_lots(s):  # descartar ruido y segmentos sueltos lejanos
        continue
    streets_json.append({"type": "avenida" if length > 120 else "calle", "points": fmt(s)})
commons_json = []
for c in commons:
    cc = centroid(c["pts"])
    item = {"name": c["name"], "type": c["type"], "shape": c["shape"], "points": fmt(c["pts"]),
            "cx": round(cc[0], 1), "cy": round(cc[1], 1),
            "angleDeg": round(-math.degrees(c["rot"]), 1)}
    if c["shape"] == "rect":
        item["w"] = c["w"]; item["h"] = c["h"]
    else:
        item["r"] = c["r"]
    commons_json.append(item)

out = {
    "meta": {"source": "porfa plotear.dwg22.dwg (demo)", "unit": "m", "lots": len(lots_json),
             "manzanas": len(chains), "note": "Lotes reconstruidos del DWG real; áreas comunes y status son demo."},
    "viewBox": f"0 0 {W:.1f} {H:.1f}",
    "entrada": [round(tx(entrada)[0], 1), round(tx(entrada)[1], 1)],
    "entradaAngleDeg": round(-math.degrees(entrada_rot), 1),
    "streets": streets_json, "commonAreas": commons_json, "lots": lots_json,
}
json.dump(out, open(outpath, "w"), ensure_ascii=False, indent=1)
from collections import Counter
print("lots:", len(lots_json), "| status:", dict(Counter(l["status"] for l in lots_json)),
      "| viewBox:", out["viewBox"])
