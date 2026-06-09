import { animate, stagger } from 'motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const EASE = [0.22, 1, 0.36, 1] as const;
const reduced =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── Scroll-reveal (IntersectionObserver + Motion One) ─────── */
function initReveal() {
  const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
  if (!els.length) return;
  if (reduced) {
    els.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver(
    (entries, obs) => {
      const vis = entries.filter((e) => e.isIntersecting).map((e) => e.target as HTMLElement);
      if (!vis.length) return;
      animate(
        vis,
        { opacity: [0, 1], transform: ['translateY(28px)', 'translateY(0)'], filter: ['blur(6px)', 'blur(0px)'] },
        { duration: 0.8, easing: EASE, delay: stagger(0.07) },
      );
      vis.forEach((el) => {
        el.classList.add('is-visible');
        obs.unobserve(el);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
  );
  els.forEach((el) => io.observe(el));
}

/* ── Magnetic buttons + soft lift on cards ─────────────────── */
function initMagnetic() {
  if (reduced) return;
  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    const strength = 0.3;
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * strength;
      const y = (e.clientY - r.top - r.height / 2) * strength;
      animate(el, { transform: `translate(${x}px, ${y}px)` }, { duration: 0.25, easing: EASE });
    });
    el.addEventListener('pointerleave', () => {
      animate(el, { transform: 'translate(0px, 0px)' }, { duration: 0.6, easing: [0.34, 1.56, 0.64, 1] });
    });
  });

  document.querySelectorAll<HTMLElement>('[data-lift]').forEach((el) => {
    el.addEventListener('pointerenter', () =>
      animate(el, { transform: 'translateY(-6px)' }, { duration: 0.3, easing: EASE }),
    );
    el.addEventListener('pointerleave', () =>
      animate(el, { transform: 'translateY(0px)' }, { duration: 0.4, easing: EASE }),
    );
  });
}

/* ── Parallax 3D tilt (portfolio) ──────────────────────────── */
function initTilt() {
  if (reduced) return;
  document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((el) => {
    const max = 8;
    el.style.transformStyle = 'preserve-3d';
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      animate(
        el,
        { transform: `perspective(900px) rotateY(${px * max}deg) rotateX(${-py * max}deg) scale(1.02)` },
        { duration: 0.3, easing: EASE },
      );
    });
    el.addEventListener('pointerleave', () =>
      animate(
        el,
        { transform: 'perspective(900px) rotateY(0deg) rotateX(0deg) scale(1)' },
        { duration: 0.6, easing: [0.34, 1.56, 0.64, 1] },
      ),
    );
  });
}

/* ── GSAP ScrollTrigger: sticky-stack del procés + parallax ── */
function initScrollTrigger() {
  if (reduced) return;
  gsap.registerPlugin(ScrollTrigger);

  // Subtle parallax on elements with [data-parallax]
  document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
    const speed = parseFloat(el.dataset.parallax || '0.15');
    gsap.to(el, {
      yPercent: -speed * 100,
      ease: 'none',
      scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
    });
  });

  // Sticky stacking cards (process steps)
  const stack = document.querySelector<HTMLElement>('[data-stack]');
  if (stack) {
    const cards = Array.from(stack.querySelectorAll<HTMLElement>('[data-stack-card]'));
    cards.forEach((card, i) => {
      if (i === cards.length - 1) return;
      gsap.to(card, {
        scale: 0.94,
        opacity: 0.55,
        filter: 'blur(2px)',
        ease: 'none',
        scrollTrigger: {
          trigger: cards[i + 1],
          start: 'top 22%',
          end: 'top 8%',
          scrub: true,
        },
      });
    });
  }
}

function init() {
  initReveal();
  initMagnetic();
  initTilt();
  initScrollTrigger();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
