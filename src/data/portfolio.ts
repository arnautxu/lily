import type { Lang } from '../lib/i18n';

export interface Piece {
  /** PLACEHOLDER · nom del comerç real */
  client: string;
  /** PLACEHOLDER · sector */
  sector: string;
  /** PLACEHOLDER · resultat o frase curta de prova */
  result: string;
  /** PLACEHOLDER · ruta de la imatge real a /public/images */
  image: string;
  imageAlt: string;
}

export const portfolio: Record<Lang, Piece[]> = {
  ca: [
    {
      client: 'Nom del comerç', // PLACEHOLDER
      sector: 'Restaurant · Vic',
      result: 'Feed coherent i stories diàries del servei.',
      image: '/images/portfolio-1.jpg', // PLACEHOLDER
      imageAlt: 'PLACEHOLDER · mostra de feed del restaurant',
    },
    {
      client: 'Nom del comerç', // PLACEHOLDER
      sector: 'Perruqueria · Osona',
      result: 'Abans i després que omplen agenda.',
      image: '/images/portfolio-2.jpg', // PLACEHOLDER
      imageAlt: 'PLACEHOLDER · mostra de feed de la perruqueria',
    },
    {
      client: 'Nom del comerç', // PLACEHOLDER
      sector: 'Botiga de roba · Vic',
      result: 'Reels de novetats cada setmana.',
      image: '/images/portfolio-3.jpg', // PLACEHOLDER
      imageAlt: 'PLACEHOLDER · mostra de feed de la botiga',
    },
  ],
  es: [
    {
      client: 'Nombre del comercio', // PLACEHOLDER
      sector: 'Restaurante · Vic',
      result: 'Feed coherente y stories diarias del servicio.',
      image: '/images/portfolio-1.jpg', // PLACEHOLDER
      imageAlt: 'PLACEHOLDER · muestra de feed del restaurante',
    },
    {
      client: 'Nombre del comercio', // PLACEHOLDER
      sector: 'Peluquería · Osona',
      result: 'Antes y después que llenan agenda.',
      image: '/images/portfolio-2.jpg', // PLACEHOLDER
      imageAlt: 'PLACEHOLDER · muestra de feed de la peluquería',
    },
    {
      client: 'Nombre del comercio', // PLACEHOLDER
      sector: 'Tienda de ropa · Vic',
      result: 'Reels de novedades cada semana.',
      image: '/images/portfolio-3.jpg', // PLACEHOLDER
      imageAlt: 'PLACEHOLDER · muestra de feed de la tienda',
    },
  ],
};
