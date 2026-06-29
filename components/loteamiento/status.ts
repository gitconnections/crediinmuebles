import type { LotStatus, CommonArea } from './types';

export const STATUS: Record<LotStatus, { label: string; color: string; soft: string }> = {
  disponible: { label: 'Disponible', color: '#16a34a', soft: '#dcfce7' },
  reservado: { label: 'Reservado', color: '#d97706', soft: '#fef3c7' },
  vendido: { label: 'Vendido', color: '#dc2626', soft: '#fee2e2' },
};

export const COMMON_STYLE: Record<
  CommonArea['type'],
  { fill: string; stroke: string; label: string }
> = {
  cancha: { fill: '#bbf7d0', stroke: '#15803d', label: '🏟 Cancha' },
  plaza: { fill: '#cffafe', stroke: '#0891b2', label: '⛲ Plaza' },
  parque: { fill: '#d9f99d', stroke: '#4d7c0f', label: '🌳 Parque' },
  mercado: { fill: '#ede9fe', stroke: '#7c3aed', label: '🛒 Mercado' },
};
