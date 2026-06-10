# DESIGN.md — Lídia Caldera

## Direcció d'art

**Fosc cinemàtic verd pi (drenched).** La superfície ÉS el color de marca: tota la pàgina banyada en pi profund, tipografia ivori càlid, coral d'èmfasi i verd fulla lluminós per a l'acció. Llum càlida d'escenografia (bassals radials subtils + gra de pel·lícula), mai glow neó. El contingut (tiles de feed, mockups) és l'única cosa clara: vibra com fotos sobre el fosc.

## Tokens (OKLCH, components a `:root` de `src/styles/global.css`)

| Token | Valor | Rol |
|---|---|---|
| `--bg` | 23% 0.035 150 | superfície de pàgina (pi) |
| `--bg-deep` | 18.5% 0.03 150 | hero, bandes fosques, footer, tier destacat |
| `--surface` | 27.5% 0.04 148 | panells/cards elevades |
| `--sand` | 34% 0.04 146 | hairlines i vores |
| `--ink` | 95.5% 0.014 95 | text principal (ivori càlid) |
| `--ink-soft` | 76% 0.03 120 | text secundari (salvia) |
| `--accent` | 77% 0.135 135 | acció (verd fulla); text fosc a sobre |
| `--accent-ink` | 86% 0.10 130 | hover/enllaços (menta) |
| `--coral` | 71% 0.145 40 | èmfasi editorial (itàliques, dots, badges) |

Mai `#000`/`#fff` purs (excepte dins d'ombres). `--pine`/`--pine-soft` són àlies de compatibilitat.

## Tipografia

- **Display: Instrument Serif 400** (+ itàlica). Només té un pes: l'èmfasi es fa amb MIDA i amb la *itàlica* (signatura del look, sovint en coral). Mai `font-semibold` sobre `font-display`.
- **Cos/UI: Satoshi Variable** (self-hosted a `public/fonts/`), 300-900.
- Escala: `text-mega` (fins 7.5rem) per al H1; `text-display`/`text-h2` per a seccions; cos 1.0625rem lh 1.65.

## Motion (GSAP + Lenis, `src/lib/motion.ts`)

- Lenis amb `autoRaf:false` conduït pel ticker de GSAP; `anchors: {offset: -96}`. `scroll-behavior: auto` al CSS (Lenis n'és l'amo).
- Ease: `expo.out` per a entrades; `scrub` per a efectes lligats a scroll; elastic suau només per a retorns magnètics.
- Micro-UI <300ms; reveals 0.9s; només `transform`/`opacity`/`clip-path`.
- Patrons: `[data-reveal]` (batch y+opacity), `[data-split-lines]` (línies emmascarades), `[data-clip-reveal]` (inset horitzontal), `[data-rule-reveal]` (hairline scaleX), `[data-quote-scrub]` (lectura paraula a paraula), `[data-magnetic]`/`[data-tilt]` (només pointer fine), `[data-parallax]`, sticky-stack del Process, marquee amb velocitat d'scroll.
- DECISIÓ DE L'USUARI: no hi ha mode `prefers-reduced-motion`; l'experiència animada és l'única.

## WebGL (hero únic)

- Una sola illa React (`src/components/three/HeroScene.tsx`), `client:idle`, R3F.
- Núvol de "posts" amb textures generades en canvas (zero imatges externes), llum càlida + boira de pi, parallax de ratolí amb damping exponencial, dolly d'scroll via `CustomEvent('hero:progress')`.
- DPR màx 2 (mòbil 1.5); frameloop en pausa fora de viewport i amb pestanya oculta; pòster CSS com a estat de càrrega i fallback (sense WebGL, `deviceMemory < 4`).
- GSAP i R3F estrictament aïllats: comunicació unidireccional per esdeveniments.

## Bans

Gradient text (`background-clip`), side-stripe borders, glassmorphism per defecte, graelles de cards idèntiques, files de 3 cards iguals, hero centrat, glows neó, AI-purple, cursors custom, emojis, guions llargs en copy nova, `Inter`.

## Intenció per secció

Hero: asimètric, H1 gegant esquerra + núvol WebGL dreta · Marquee: tipus display gegant alternant roman/itàlica, reacciona a la velocitat d'scroll · Problem: declaració editorial + blocs esglaonats amb indents · Services: índex numerat amb hairlines · Process: banda `bg-deep` amb gra + sticky-stack · Cases: pull-quotes amb lectura scrub + mockups IG clars · Pricing: 3 tiers, destacat més fosc amb vora accent · About: retrat no-fotogràfic amb monograma · Footer: signatura fantasma gegant en itàlica.
