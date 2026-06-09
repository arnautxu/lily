import { animate, stagger } from 'motion';

const REVEAL_SELECTOR = '[data-reveal]';
const EASE = [0.22, 1, 0.36, 1] as const;

function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

/** Scroll-reveal amb IntersectionObserver + Motion One per a l'animació. */
function initReveal() {
  const els = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));
  if (!els.length) return;

  if (prefersReducedMotion()) {
    els.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      // Agrupa per "fila" perquè el stagger se senti per grup proper.
      const visible = entries
        .filter((e) => e.isIntersecting)
        .map((e) => e.target as HTMLElement);

      if (visible.length) {
        animate(
          visible,
          { opacity: [0, 1], transform: ['translateY(20px)', 'translateY(0px)'] },
          { duration: 0.55, easing: EASE, delay: stagger(0.06) },
        );
        visible.forEach((el) => {
          el.classList.add('is-visible');
          obs.unobserve(el);
        });
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
  );

  els.forEach((el) => observer.observe(el));
}

/** Micro-interaccions: lift suau a targetes amb [data-lift]. */
function initLift() {
  if (prefersReducedMotion()) return;
  const cards = document.querySelectorAll<HTMLElement>('[data-lift]');
  cards.forEach((card) => {
    card.addEventListener('pointerenter', () => {
      animate(card, { transform: 'translateY(-4px)' }, { duration: 0.25, easing: EASE });
    });
    card.addEventListener('pointerleave', () => {
      animate(card, { transform: 'translateY(0px)' }, { duration: 0.3, easing: EASE });
    });
  });
}

function init() {
  initReveal();
  initLift();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
