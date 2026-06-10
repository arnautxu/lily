/**
 * Motor de moviment del lloc: GSAP (coreografia DOM + scroll) + Lenis (scroll suau).
 * L'escena WebGL del hero és una illa React independent; s'hi comunica
 * unidireccionalment via CustomEvent('hero:progress').
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

/* ── Lenis: smooth scroll conduït pel ticker de GSAP ───────── */
function initLenis() {
  const lenis = new Lenis({
    autoRaf: false,
    anchors: { offset: -96 },
  });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  return lenis;
}

/* ── Scroll-reveal genèric ─────────────────────────────────── */
function initReveal() {
  ScrollTrigger.batch('[data-reveal]', {
    start: 'top 88%',
    once: true,
    onEnter: (batch) => {
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'expo.out',
        stagger: 0.07,
        overwrite: true,
        onComplete: () => batch.forEach((el) => (el as HTMLElement).classList.add('is-visible')),
      });
    },
  });
}

/* ── Botons magnètics + lift de targetes ───────────────────── */
function initMagnetic() {
  if (!finePointer) return;

  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    const strength = 0.3;
    const toX = gsap.quickTo(el, 'x', { duration: 0.3, ease: 'expo.out' });
    const toY = gsap.quickTo(el, 'y', { duration: 0.3, ease: 'expo.out' });
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      toX((e.clientX - r.left - r.width / 2) * strength);
      toY((e.clientY - r.top - r.height / 2) * strength);
    });
    el.addEventListener('pointerleave', () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.6)' });
    });
  });

  document.querySelectorAll<HTMLElement>('[data-lift]').forEach((el) => {
    const toY = gsap.quickTo(el, 'y', { duration: 0.35, ease: 'expo.out' });
    el.addEventListener('pointerenter', () => toY(-6));
    el.addEventListener('pointerleave', () => toY(0));
  });
}

/* ── Tilt 3D (mockups) ─────────────────────────────────────── */
function initTilt() {
  if (!finePointer) return;
  document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((el) => {
    const max = 8;
    gsap.set(el, { transformPerspective: 900 });
    const toRX = gsap.quickTo(el, 'rotationX', { duration: 0.35, ease: 'expo.out' });
    const toRY = gsap.quickTo(el, 'rotationY', { duration: 0.35, ease: 'expo.out' });
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      toRY(px * max);
      toRX(-py * max);
    });
    el.addEventListener('pointerenter', () => gsap.to(el, { scale: 1.02, duration: 0.35, ease: 'expo.out' }));
    el.addEventListener('pointerleave', () => {
      gsap.to(el, { rotationX: 0, rotationY: 0, scale: 1, duration: 0.6, ease: 'elastic.out(1, 0.6)' });
    });
  });
}

/* ── Split de línies (substitut de SplitText) ──────────────── */
function splitLines(el: HTMLElement): HTMLElement[] {
  // Tokenitza preservant elements interns (<em> d'accent, etc.):
  // els nodes de text es parteixen per paraules; els elements són un sol token.
  const tokens: string[] = [];
  el.childNodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      (node.textContent ?? '')
        .split(/\s+/)
        .filter(Boolean)
        .forEach((w) => tokens.push(w));
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      tokens.push((node as HTMLElement).outerHTML);
    }
  });
  el.innerHTML = tokens
    .map((w) => `<span class="sw" style="display:inline-block">${w}</span>`)
    .join(' ');

  const words = Array.from(el.querySelectorAll<HTMLElement>('.sw'));
  const lines = new Map<number, HTMLElement[]>();
  words.forEach((w) => {
    const top = w.offsetTop;
    if (!lines.has(top)) lines.set(top, []);
    lines.get(top)!.push(w);
  });

  el.innerHTML = '';
  const lineEls: HTMLElement[] = [];
  lines.forEach((ws) => {
    const mask = document.createElement('span');
    mask.className = 'line-mask';
    const line = document.createElement('span');
    line.className = 'line';
    line.innerHTML = ws.map((w) => w.innerHTML).join(' ');
    mask.appendChild(line);
    el.appendChild(mask);
    lineEls.push(line);
  });
  return lineEls;
}

/* ── Reveals de línia per a titulars marcats ───────────────── */
function initSplitReveals() {
  document.querySelectorAll<HTMLElement>('[data-split-lines]').forEach((el) => {
    const lines = splitLines(el);
    gsap.set(lines, { yPercent: 110 });
    ScrollTrigger.create({
      trigger: el,
      start: 'top 78%',
      once: true,
      onEnter: () => {
        gsap.to(lines, { yPercent: 0, duration: 1, ease: 'expo.out', stagger: 0.09 });
      },
    });
  });
}

/* ── Intro del hero (timeline de càrrega, no scroll) ───────── */
function initHeroIntro() {
  const title = document.querySelector<HTMLElement>('[data-hero-title]');
  if (!title) return;
  const lines = splitLines(title);
  const rest = Array.from(document.querySelectorAll<HTMLElement>('[data-hero-fade]'));

  gsap.set(lines, { yPercent: 110 });
  gsap.set(rest, { opacity: 0, y: 24 });

  const tl = gsap.timeline({ delay: 0.15 });
  tl.to(lines, { yPercent: 0, duration: 1.1, ease: 'expo.out', stagger: 0.09 });
  tl.to(rest, { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out', stagger: 0.07 }, '-=0.7');
}

/* ── Progrés del hero → illa WebGL + parallax del contingut ── */
function initHeroProgress() {
  const hero = document.getElementById('hero');
  if (!hero) return;
  const content = hero.querySelector<HTMLElement>('[data-hero-content]');
  ScrollTrigger.create({
    trigger: hero,
    start: 'top top',
    end: 'bottom top',
    scrub: true,
    onUpdate: (st) => {
      window.dispatchEvent(new CustomEvent('hero:progress', { detail: st.progress }));
      if (content) {
        gsap.set(content, { yPercent: -st.progress * 14, opacity: 1 - st.progress * 0.75 });
      }
    },
  });
}

/* ── Parallax genèric [data-parallax] ──────────────────────── */
function initParallax() {
  document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
    const speed = parseFloat(el.dataset.parallax || '0.15');
    gsap.to(el, {
      yPercent: -speed * 100,
      ease: 'none',
      scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
    });
  });
}

/* ── Sticky-stack del procés ───────────────────────────────── */
function initStack() {
  const stack = document.querySelector<HTMLElement>('[data-stack]');
  if (!stack) return;
  const cards = Array.from(stack.querySelectorAll<HTMLElement>('[data-stack-card]'));
  cards.forEach((card, i) => {
    // Hairline que es dibuixa quan la targeta s'enganxa
    const rule = card.querySelector<HTMLElement>('[data-stack-rule]');
    if (rule) {
      gsap.set(rule, { scaleX: 0, transformOrigin: 'left center' });
      ScrollTrigger.create({
        trigger: card,
        start: 'top 30%',
        once: true,
        onEnter: () => gsap.to(rule, { scaleX: 1, duration: 1.1, ease: 'expo.out' }),
      });
    }
    if (i === cards.length - 1) return;
    gsap.to(card, {
      scale: 0.94,
      opacity: 0.5,
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

/* ── Marquee cinètic conduït per la velocitat d'scroll ─────── */
function initMarquee() {
  const track = document.querySelector<HTMLElement>('[data-marquee-track]');
  if (!track) return;

  let pos = 0;
  let velocityBoost = 0;
  const BASE = finePointer ? 2.2 : 1.1; // %/s

  const toSkew = gsap.quickTo(track, 'skewX', { duration: 0.4, ease: 'expo.out' });

  ScrollTrigger.create({
    trigger: document.body,
    start: 0,
    end: 'max',
    onUpdate: (self) => {
      const v = self.getVelocity();
      velocityBoost = gsap.utils.clamp(-18, 18, v / 60);
      toSkew(gsap.utils.clamp(-5, 5, v / 400));
    },
  });

  gsap.ticker.add((_t, dt) => {
    pos -= ((BASE + Math.abs(velocityBoost)) * dt) / 1000;
    pos = gsap.utils.wrap(-50, 0, pos);
    gsap.set(track, { xPercent: pos });
    // Decaïment del boost i retorn del skew
    velocityBoost *= 0.95;
    if (Math.abs(velocityBoost) < 0.3) toSkew(0);
  });
}

/* ── Lectura scrub de les cites (Casos) ────────────────────── */
function initQuoteScrub() {
  document.querySelectorAll<HTMLElement>('[data-quote-scrub]').forEach((quote) => {
    const original = quote.innerHTML;
    quote.innerHTML = original
      .split(/\s+/)
      .filter(Boolean)
      .map((w) => `<span class="qw" style="display:inline-block">${w}</span>`)
      .join(' ');
    const words = quote.querySelectorAll<HTMLElement>('.qw');
    gsap.set(words, { opacity: 0.18 });
    gsap.to(words, {
      opacity: 1,
      stagger: 0.04,
      ease: 'none',
      scrollTrigger: {
        trigger: quote,
        start: 'top 80%',
        end: 'top 30%',
        scrub: 0.8,
      },
    });
  });
}

/* ── Reveals per clip-path (Services) ──────────────────────── */
function initClipReveals() {
  document.querySelectorAll<HTMLElement>('[data-clip-reveal]').forEach((el) => {
    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(el, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.9, ease: 'expo.out' });
      },
    });
  });

  document.querySelectorAll<HTMLElement>('[data-rule-reveal]').forEach((el) => {
    gsap.set(el, { scaleX: 0, transformOrigin: 'left center' });
    ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      once: true,
      onEnter: () => gsap.to(el, { scaleX: 1, duration: 1.1, ease: 'expo.out' }),
    });
  });
}

function init() {
  initLenis();
  initHeroIntro();
  initHeroProgress();
  initReveal();
  initSplitReveals();
  initMagnetic();
  initTilt();
  initParallax();
  initStack();
  initMarquee();
  initQuoteScrub();
  initClipReveals();

  // Recalcular triggers quan canvia l'alçada (FAQ obert/tancat)
  document.querySelectorAll('details').forEach((d) => {
    d.addEventListener('toggle', () => setTimeout(() => ScrollTrigger.refresh(), 450));
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
