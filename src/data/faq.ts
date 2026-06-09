import type { Lang } from '../lib/i18n';

export interface QA {
  q: string;
  a: string;
}

export const faq: Record<Lang, QA[]> = {
  ca: [
    {
      q: 'Hi ha permanència?',
      a: 'No. Treballem mes a mes. Si un mes no et va bé, ho pauses i ja està. La idea és que et quedis perquè veus resultats, no perquè has signat un contracte llarg.',
    },
    {
      q: 'Qui fa les fotos?',
      a: 'Idealment, foto real del teu local. Puc venir a fer-les jo (entra al pack Complet o com a extra) o em passes les teves i jo trio i edito les bones. Res de bancs d\'imatges genèrics: la gràcia és que es vegi el teu negoci.',
    },
    {
      q: 'De qui són les imatges i els continguts?',
      a: 'Teus. Tot el que es publica al teu Instagram és teu. Si algun dia ho deixem, et quedes el compte, les fotos i tot el material tal com està.',
    },
    {
      q: 'Useu intel·ligència artificial?',
      a: 'Per a l\'esborrany i per anar més ràpid, sí. Però mai per al resultat final: tot passa per revisió humana abans de publicar-se. La IA m\'estalvia temps; el criteri el poso jo.',
    },
    {
      q: 'En quant de temps comencem?',
      a: 'Normalment, la mateixa setmana que tenim la primera xerrada. Et preparo el primer calendari i, en quant em dones l\'OK, comencem a publicar.',
    },
    {
      q: 'I si no tinc clar quin pack em convé?',
      a: 'Escriu-me i t\'ho dic sense compromís. La majoria comença pel pack d\'entrada o pel de creixement i ajustem sobre la marxa segons com vagi.',
    },
  ],
  es: [
    {
      q: '¿Hay permanencia?',
      a: 'No. Trabajamos mes a mes. Si un mes no te va bien, lo pausas y ya está. La idea es que te quedes porque ves resultados, no porque has firmado un contrato largo.',
    },
    {
      q: '¿Quién hace las fotos?',
      a: 'Idealmente, foto real de tu local. Puedo ir a hacerlas yo (entra en el pack Completo o como extra) o me pasas las tuyas y yo elijo y edito las buenas. Nada de bancos de imágenes genéricos: la gracia es que se vea tu negocio.',
    },
    {
      q: '¿De quién son las imágenes y los contenidos?',
      a: 'Tuyos. Todo lo que se publica en tu Instagram es tuyo. Si algún día lo dejamos, te quedas la cuenta, las fotos y todo el material tal cual.',
    },
    {
      q: '¿Usáis inteligencia artificial?',
      a: 'Para el borrador y para ir más rápido, sí. Pero nunca para el resultado final: todo pasa por revisión humana antes de publicarse. La IA me ahorra tiempo; el criterio lo pongo yo.',
    },
    {
      q: '¿En cuánto tiempo empezamos?',
      a: 'Normalmente, la misma semana que tenemos la primera charla. Te preparo el primer calendario y, en cuanto me das el OK, empezamos a publicar.',
    },
    {
      q: '¿Y si no tengo claro qué pack me conviene?',
      a: 'Escríbeme y te lo digo sin compromiso. La mayoría empieza por el pack de entrada o el de crecimiento y ajustamos sobre la marcha según cómo vaya.',
    },
  ],
};
