export type LotStatus = 'disponible' | 'reservado' | 'vendido';

export interface Lot {
  id: string;
  manzana: string;
  numero: number;
  areaM2: number;
  status: LotStatus;
  inclinacionPct: number;
  precioUSD: number;
  ventajas: string[];
  points: string;
  cx: number;
  cy: number;
}

export interface Street {
  type: 'avenida' | 'calle';
  points: string;
}

export interface CommonArea {
  name: string;
  type: 'cancha' | 'plaza' | 'parque' | 'mercado';
  shape: 'rect' | 'circle';
  points: string;
  cx: number;
  cy: number;
  angleDeg: number;
  w?: number;
  h?: number;
  r?: number;
}

export interface LoteamientoData {
  meta: { source: string; unit: string; lots: number; manzanas: number; note: string };
  viewBox: string;
  entrada: [number, number];
  entradaAngleDeg: number;
  streets: Street[];
  commonAreas: CommonArea[];
  lots: Lot[];
}
