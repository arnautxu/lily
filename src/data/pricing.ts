import type { Lang } from '../lib/i18n';

export interface Tier {
  id: string;
  name: string;
  /** PLACEHOLDER · preu orientatiu */
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
        id: 'entrada',
        name: 'Porta d\'entrada',
        price: '—€', // PLACEHOLDER
        tagline: 'Per estar present sense complicar-te.',
        features: [
          '8 publicacions de feed al mes',
          'Stories 2 dies per setmana',
          'Text revisat per una persona',
          'Calendari mensual i vist-i-plau',
        ],
      },
      {
        id: 'creixement',
        name: 'Creixement',
        price: '—€', // PLACEHOLDER
        tagline: 'El pack que tria la majoria.',
        featured: true,
        features: [
          '12 publicacions de feed al mes',
          '2 reels al mes',
          'Stories cada dia laborable',
          'Community management (respondre missatges)',
          'Calendari i revisió humana de tot',
        ],
      },
      {
        id: 'complet',
        name: 'Complet',
        price: '—€', // PLACEHOLDER
        tagline: 'Presència forta i amb dades.',
        features: [
          '16 publicacions + 4 reels al mes',
          'Stories diàries i campanyes puntuals',
          'Community management complet',
          'Report mensual amb què ha funcionat',
          'Sessió de fotos trimestral al local',
        ],
      },
    ],
    extras: [
      { name: 'Reel addicional', price: '—€' },
      { name: 'Sessió de fotos al local', price: '—€' },
      { name: 'Campanya per a data assenyalada', price: '—€' },
      { name: 'Disseny de cartell / promoció', price: '—€' },
    ],
  },
  es: {
    tiers: [
      {
        id: 'entrada',
        name: 'Puerta de entrada',
        price: '—€', // PLACEHOLDER
        tagline: 'Para estar presente sin complicarte.',
        features: [
          '8 publicaciones de feed al mes',
          'Stories 2 días por semana',
          'Texto revisado por una persona',
          'Calendario mensual y visto bueno',
        ],
      },
      {
        id: 'creixement',
        name: 'Crecimiento',
        price: '—€', // PLACEHOLDER
        tagline: 'El pack que elige la mayoría.',
        featured: true,
        features: [
          '12 publicaciones de feed al mes',
          '2 reels al mes',
          'Stories cada día laborable',
          'Community management (responder mensajes)',
          'Calendario y revisión humana de todo',
        ],
      },
      {
        id: 'complet',
        name: 'Completo',
        price: '—€', // PLACEHOLDER
        tagline: 'Presencia fuerte y con datos.',
        features: [
          '16 publicaciones + 4 reels al mes',
          'Stories diarias y campañas puntuales',
          'Community management completo',
          'Informe mensual con qué ha funcionado',
          'Sesión de fotos trimestral en el local',
        ],
      },
    ],
    extras: [
      { name: 'Reel adicional', price: '—€' },
      { name: 'Sesión de fotos en el local', price: '—€' },
      { name: 'Campaña para fecha señalada', price: '—€' },
      { name: 'Diseño de cartel / promoción', price: '—€' },
    ],
  },
};
