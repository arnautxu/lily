import type { Lang } from '../lib/i18n';

/** Tile del mockup de feed — quan hi hagi captures reals, substituir per kind: 'image' amb src */
export interface FeedTile {
  kind: 'type' | 'block' | 'duotone' | 'reel';
  /** Text curt per a tiles tipogràfiques */
  text?: string;
  /** Classes de fons/text Tailwind (colors arbitraris permesos) */
  bg?: string;
  fg?: string;
}

export interface Case {
  id: string;
  name: string;
  sector: string;
  town: string;
  /** Cita VERBATIM del client (CA) — no retocar. ES és traducció nostra. */
  quote: string;
  /** Resultat en una línia, qualitatiu i honest */
  kicker: string;
  feed: {
    handle: string;
    stats: string;
    tiles: FeedTile[];
  };
}

export const cases: Record<Lang, Case[]> = {
  ca: [
    {
      id: 'ipediatria',
      name: 'iPediatria',
      sector: 'Pediatria',
      town: 'Palamós, Baix Empordà',
      quote:
        'Des de que la Lídia em va començar a generar contingut, el meu engagement a xarxes ha pujat una barbaritat, a més de que he aconseguit nous clients.',
      kicker: 'Engagement amunt i pacients nous a la consulta.',
      feed: {
        handle: 'ipediatria',
        stats: 'publicacions · seguidors · seguits',
        tiles: [
          // SWAP POINT: quan hi hagi captures reals, substituir cada tile per { kind: 'image', src: '/images/...' }
          { kind: 'type', text: 'Consells de son', bg: 'bg-[#eef1e6]', fg: 'text-[#3f5233]' },
          { kind: 'duotone', bg: 'bg-gradient-to-br from-[#a8bd92] to-[#7d9468]' },
          { kind: 'type', text: 'Demana visita', bg: 'bg-[#f7f3ea]', fg: 'text-[#cf6b43]' },
          { kind: 'block', bg: 'bg-[#cf6b43]' },
          { kind: 'type', text: 'Vacunes: el calendari', bg: 'bg-[#fcfaf5]', fg: 'text-[#385c22]' },
          { kind: 'duotone', bg: 'bg-gradient-to-br from-[#e8dcc8] to-[#cdbb9d]' },
          { kind: 'reel', text: 'Reel' },
          { kind: 'type', text: 'Primeres farinetes', bg: 'bg-[#eef1e6]', fg: 'text-[#3f5233]' },
          { kind: 'duotone', bg: 'bg-gradient-to-br from-[#d8e0ce] to-[#aebfa0]' },
        ],
      },
    },
    {
      id: 'luthier',
      name: 'Fernando C.',
      sector: 'Lutheria',
      town: 'Sant Jordi de Cercs, Berguedà',
      quote:
        "Sóc luthier, una professió on l'ús de xarxes no és lo més comú. Amb la Lídia he aconseguit trobar un tipus de client jove al qual mai m'hagués pogut apropar.",
      kicker: 'Un ofici centenari arribant a públic jove.',
      feed: {
        handle: 'luthier',
        stats: 'publicacions · seguidors · seguits',
        tiles: [
          // SWAP POINT: quan hi hagi captures reals, substituir cada tile per { kind: 'image', src: '/images/...' }
          { kind: 'duotone', bg: 'bg-gradient-to-br from-[#8a6a4a] to-[#5c4430]' },
          { kind: 'type', text: 'Del taller', bg: 'bg-[#f3ece0]', fg: 'text-[#5c4430]' },
          { kind: 'reel', text: 'Reel' },
          { kind: 'type', text: 'Fusta i corda', bg: 'bg-[#efe6d6]', fg: 'text-[#8a4a2a]' },
          { kind: 'duotone', bg: 'bg-gradient-to-br from-[#cf6b43] to-[#9c4e2e]' },
          { kind: 'block', bg: 'bg-[#2a241d]' },
          { kind: 'duotone', bg: 'bg-gradient-to-br from-[#d8c9b2] to-[#b09a7b]' },
          { kind: 'type', text: 'Cada peça, única', bg: 'bg-[#fcfaf5]', fg: 'text-[#3d342a]' },
          { kind: 'duotone', bg: 'bg-gradient-to-br from-[#6a5a44] to-[#46392a]' },
        ],
      },
    },
  ],
  es: [
    {
      id: 'ipediatria',
      name: 'iPediatria',
      sector: 'Pediatría',
      town: 'Palamós, Baix Empordà',
      quote:
        'Desde que Lídia empezó a generarme contenido, mi engagement en redes ha subido una barbaridad, además de que he conseguido nuevos clientes.',
      kicker: 'Engagement arriba y pacientes nuevos en la consulta.',
      feed: {
        handle: 'ipediatria',
        stats: 'publicaciones · seguidores · seguidos',
        tiles: [
          // SWAP POINT: cuando haya capturas reales, sustituir cada tile por { kind: 'image', src: '/images/...' }
          { kind: 'type', text: 'Consejos de sueño', bg: 'bg-[#eef1e6]', fg: 'text-[#3f5233]' },
          { kind: 'duotone', bg: 'bg-gradient-to-br from-[#a8bd92] to-[#7d9468]' },
          { kind: 'type', text: 'Pide visita', bg: 'bg-[#f7f3ea]', fg: 'text-[#cf6b43]' },
          { kind: 'block', bg: 'bg-[#cf6b43]' },
          { kind: 'type', text: 'Vacunas: el calendario', bg: 'bg-[#fcfaf5]', fg: 'text-[#385c22]' },
          { kind: 'duotone', bg: 'bg-gradient-to-br from-[#e8dcc8] to-[#cdbb9d]' },
          { kind: 'reel', text: 'Reel' },
          { kind: 'type', text: 'Primeras papillas', bg: 'bg-[#eef1e6]', fg: 'text-[#3f5233]' },
          { kind: 'duotone', bg: 'bg-gradient-to-br from-[#d8e0ce] to-[#aebfa0]' },
        ],
      },
    },
    {
      id: 'luthier',
      name: 'Fernando C.',
      sector: 'Luthería',
      town: 'Sant Jordi de Cercs, Berguedà',
      quote:
        'Soy luthier, una profesión donde el uso de redes no es lo más común. Con Lídia he conseguido encontrar un tipo de cliente joven al que nunca me habría podido acercar.',
      kicker: 'Un oficio centenario llegando a público joven.',
      feed: {
        handle: 'luthier',
        stats: 'publicaciones · seguidores · seguidos',
        tiles: [
          // SWAP POINT: cuando haya capturas reales, sustituir cada tile por { kind: 'image', src: '/images/...' }
          { kind: 'duotone', bg: 'bg-gradient-to-br from-[#8a6a4a] to-[#5c4430]' },
          { kind: 'type', text: 'Del taller', bg: 'bg-[#f3ece0]', fg: 'text-[#5c4430]' },
          { kind: 'reel', text: 'Reel' },
          { kind: 'type', text: 'Madera y cuerda', bg: 'bg-[#efe6d6]', fg: 'text-[#8a4a2a]' },
          { kind: 'duotone', bg: 'bg-gradient-to-br from-[#cf6b43] to-[#9c4e2e]' },
          { kind: 'block', bg: 'bg-[#2a241d]' },
          { kind: 'duotone', bg: 'bg-gradient-to-br from-[#d8c9b2] to-[#b09a7b]' },
          { kind: 'type', text: 'Cada pieza, única', bg: 'bg-[#fcfaf5]', fg: 'text-[#3d342a]' },
          { kind: 'duotone', bg: 'bg-gradient-to-br from-[#6a5a44] to-[#46392a]' },
        ],
      },
    },
  ],
};
