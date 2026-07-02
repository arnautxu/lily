/**
 * ─────────────────────────────────────────────────────────────────────────
 *  CONFIGURACIÓ CENTRAL — dades del negoci.
 *  Aquest és l'únic fitxer que has de tocar per posar les teves dades reals.
 * ─────────────────────────────────────────────────────────────────────────
 */

export const site = {
  brand: 'Lídia Caldera',
  tagline: 'Màrqueting i comunicació',
  // Domini final (canvia'l també a astro.config.mjs > site)
  url: 'https://lidiacaldera.com',
};

export const contact = {
  // Número en format internacional sense símbols
  whatsappNumber: '34619862217',
  // Email de contacte
  email: 'lidiacaldera09@gmail.com',
  // Handle d'Instagram sense @
  instagram: 'lidiacaldera',
  // Ubicació (per a SEO local i confiança)
  city: 'Vic',
  region: 'Osona',
};

/** Missatge pre-omplert del WhatsApp (CA per defecte; ES s'injecta a la pàgina) */
export const waMessage = {
  ca: "Hola Lídia! T'escric des de la web, m'agradaria informació sobre la gestió d'Instagram del meu negoci.",
  es: 'Hola Lídia! Te escribo desde la web, me gustaría información sobre la gestión de Instagram de mi negocio.',
};

export function whatsappLink(lang: 'ca' | 'es' = 'ca') {
  const text = encodeURIComponent(waMessage[lang]);
  return `https://wa.me/${contact.whatsappNumber}?text=${text}`;
}

export const instagramLink = `https://instagram.com/${contact.instagram}`;
