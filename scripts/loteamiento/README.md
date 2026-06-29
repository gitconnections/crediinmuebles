# Generador del mapa de lotes

Convierte el plano CAD del loteamiento en `data/loteamiento.json`, que consume
`/loteamiento` (componente `components/loteamiento/`).

## Qué hace
- Lee un **DXF** (convertido del DWG con `dwg2dxf`, de LibreDWG).
- Reconstruye los **lotes** desde la capa `parcelamiento` encadenando las líneas
  divisorias (el DWG no tiene los lotes como polígonos cerrados).
- Toma las **calles** reales de la capa `via`.
- Genera **áreas comunes** (cancha, plaza, parque, mercado) y el **status**
  (disponible/reservado/vendido) de forma sintética — son DEMO, no datos reales.
- Normaliza todo a coordenadas SVG (viewBox) con la Y invertida.

## Requisitos
```bash
brew install libredwg            # provee dwg2dxf
python3 -m venv venv && ./venv/bin/pip install ezdxf shapely
```

## Uso
```bash
# 1) DWG -> DXF
dwg2dxf -o plano.dxf "porfa plotear.dwg22.dwg"
# 2) DXF -> JSON de la app
./venv/bin/python gen_loteamiento.py plano.dxf ../../data/loteamiento.json
```

## Notas / límites
- El recorte `BB` y la capa `parcelamiento` están afinados para ESTE plano.
  Con otro DWG hay que ajustar `BB` y los nombres de capa.
- El status es aleatorio con semilla fija (42) → estable entre corridas.
  Para status editable por ventas, reemplazar por una fuente externa (JSON/CMS).
