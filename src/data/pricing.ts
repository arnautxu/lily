import type { Lang } from '../lib/i18n';

export interface Tier {
  id: string;
  name: string;
  price: string;
  tagline: string;
  features: string[];
  featured?: boolean;
}

export interface Extra {
  name: string;
  price: string;
}

export const pricing: Record<Lang, { tiers: Tier[]; extras: Extra[] }> = {
  ca: {
    tiers: [
      {
        id: 'iniciacio',
        name: 'Iniciació',
        price: '190 €',
        tagline: 'Per començar a tenir presència de veritat.',
        features: [
          '8 publicacions al mes',
          '2 històries per setmana',
          'Textos amb criteri',
          'Calendari mensual',
        ],
      },
      {
        id: 'creixement',
        name: 'Creixement',
        price: '320 €',
        tagline: 'El pas natural quan vols créixer.',
        featured: true,
        features: [
          '12 publicacions al mes',
          'Stories tota la setmana',
          '1 reel al mes',
          'Textos i calendari',
          'Revisió i ajustos cada mes',
        ],
      },
      {
        id: 'complert',
        name: 'Complert',
        price: '470 €',
        tagline: 'Presència forta i amb seguiment.',
        features: [
          '16 publicacions al mes',
          'Stories diàries',
          '2 reels al mes',
          'Report mensual de resultats',
          'Sessió de fotos puntual',
        ],
      },
    ],
    extras: [
      { name: 'Reel (guió, contingut i edició)', price: '45 €' },
      { name: 'Sessió de fotos', price: '120 €' },
      { name: 'Campanya (Nadal, rebaixes, estiu…)', price: '150 €' },
      { name: 'Cartell / peça gràfica puntual', price: '35 €' },
      { name: 'Report mensual', price: '40 €' },
    ],
  },
  es: {
    tiers: [
      {
        id: 'iniciacio',
        name: 'Iniciación',
        price: '190 €',
        tagline: 'Para empezar a tener presencia de verdad.',
        features: [
          '8 publicaciones al mes',
          '2 historias por semana',
          'Textos con criterio',
          'Calendario mensual',
        ],
      },
      {
        id: 'creixement',
        name: 'Crecimiento',
        price: '320 €',
        tagline: 'El paso natural cuando quieres crecer.',
        featured: true,
        features: [
          '12 publicaciones al mes',
          'Stories toda la semana',
          '1 reel al mes',
          'Textos y calendario',
          'Revisión y ajustes cada mes',
        ],
      },
      {
        id: 'complert',
        name: 'Completo',
        price: '470 €',
        tagline: 'Presencia fuerte y con seguimiento.',
        features: [
          '16 publicaciones al mes',
          'Stories diarias',
          '2 reels al mes',
          'Informe mensual de resultados',
          'Sesión de fotos puntual',
        ],
      },
    ],
    extras: [
      { name: 'Reel (guion, contenido y edición)', price: '45 €' },
      { name: 'Sesión de fotos', price: '120 €' },
      { name: 'Campaña (Navidad, rebajas, verano…)', price: '150 €' },
      { name: 'Cartel / pieza gráfica puntual', price: '35 €' },
      { name: 'Informe mensual', price: '40 €' },
    ],
  },
};
