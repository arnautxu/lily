/**
 * Factory de textures per a les tiles del núvol del hero.
 * Tot generat en canvas offscreen: zero imatges externes.
 * Cantonades arrodonides via clip amb cantonades transparents,
 * així els plans de three.js es veuen com a posts d'Instagram.
 */
import * as THREE from 'three';

const SIZE = 512;
const RADIUS = SIZE * 0.12;

export interface TileSpec {
  kind: 'type' | 'duotone' | 'block' | 'reel';
  word?: string;
  a?: string; // color principal
  b?: string; // color secundari (duotone) o color de text (type)
}

function makeCanvas(): [HTMLCanvasElement, CanvasRenderingContext2D] {
  const c = document.createElement('canvas');
  c.width = SIZE;
  c.height = SIZE;
  const ctx = c.getContext('2d')!;
  ctx.beginPath();
  ctx.roundRect(0, 0, SIZE, SIZE, RADIUS);
  ctx.clip();
  return [c, ctx];
}

function grain(ctx: CanvasRenderingContext2D, alpha: number) {
  const img = ctx.getImageData(0, 0, SIZE, SIZE);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const n = (Math.random() - 0.5) * 255 * alpha;
    d[i] += n;
    d[i + 1] += n;
    d[i + 2] += n;
  }
  ctx.putImageData(img, 0, 0);
}

function drawTile(spec: TileSpec): HTMLCanvasElement {
  const [c, ctx] = makeCanvas();

  if (spec.kind === 'type') {
    ctx.fillStyle = spec.a ?? '#f4efe4';
    ctx.fillRect(0, 0, SIZE, SIZE);
    ctx.fillStyle = spec.b ?? '#2a3a20';
    ctx.font = `400 ${SIZE * 0.16}px "Instrument Serif", Georgia, serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const words = (spec.word ?? '').split(' ');
    const lh = SIZE * 0.18;
    const y0 = SIZE / 2 - ((words.length - 1) * lh) / 2;
    words.forEach((w, i) => ctx.fillText(w, SIZE / 2, y0 + i * lh));
  } else if (spec.kind === 'duotone') {
    const g = ctx.createLinearGradient(0, 0, SIZE, SIZE);
    g.addColorStop(0, spec.a ?? '#a8bd92');
    g.addColorStop(1, spec.b ?? '#6f8a58');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, SIZE, SIZE);
    // Llum radial suau perquè llegeixi com a foto
    const r = ctx.createRadialGradient(SIZE * 0.35, SIZE * 0.3, SIZE * 0.1, SIZE * 0.5, SIZE * 0.5, SIZE * 0.9);
    r.addColorStop(0, 'rgba(255,250,240,0.22)');
    r.addColorStop(1, 'rgba(0,0,0,0.18)');
    ctx.fillStyle = r;
    ctx.fillRect(0, 0, SIZE, SIZE);
    grain(ctx, 0.05);
  } else if (spec.kind === 'block') {
    ctx.fillStyle = spec.a ?? '#cf6b43';
    ctx.fillRect(0, 0, SIZE, SIZE);
    grain(ctx, 0.03);
  } else {
    // reel
    ctx.fillStyle = spec.a ?? '#171b14';
    ctx.fillRect(0, 0, SIZE, SIZE);
    ctx.fillStyle = 'rgba(244,239,228,0.92)';
    ctx.beginPath();
    const s = SIZE * 0.13;
    ctx.moveTo(SIZE / 2 - s * 0.5, SIZE / 2 - s);
    ctx.lineTo(SIZE / 2 + s, SIZE / 2);
    ctx.lineTo(SIZE / 2 - s * 0.5, SIZE / 2 + s);
    ctx.closePath();
    ctx.fill();
    ctx.font = `600 ${SIZE * 0.055}px Satoshi, system-ui, sans-serif`;
    ctx.textAlign = 'center';
    ctx.letterSpacing = '6px';
    ctx.fillText('REEL', SIZE / 2, SIZE * 0.72);
  }

  return c;
}

/** Paleta de contingut (llegeix com a fotos/posts dins l'escena fosca) */
export function buildSpecs(words: string[]): TileSpec[] {
  const w = (i: number) => words[i % words.length];
  return [
    { kind: 'duotone', a: '#cf6b43', b: '#9c4e2e' },
    { kind: 'type', word: w(0), a: '#f4efe4', b: '#385c22' },
    { kind: 'duotone', a: '#a8bd92', b: '#6f8a58' },
    { kind: 'reel', a: '#171b14' },
    { kind: 'duotone', a: '#d8c9b2', b: '#a98f68' },
    { kind: 'type', word: w(1), a: '#eef1e6', b: '#3f5233' },
    { kind: 'block', a: '#cf6b43' },
    { kind: 'type', word: w(2), a: '#f7f3ea', b: '#b05328' },
    { kind: 'duotone', a: '#8a6a4a', b: '#5c4430' },
    { kind: 'block', a: '#4d7c2f' },
  ];
}

export async function buildTextures(words: string[]): Promise<THREE.CanvasTexture[]> {
  // Esperem les fonts perquè les tiles tipogràfiques surtin amb Instrument Serif
  try {
    await document.fonts.ready;
  } catch {
    /* fallback serif acceptable */
  }
  return buildSpecs(words).map((spec) => {
    const tex = new THREE.CanvasTexture(drawTile(spec));
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 4;
    return tex;
  });
}
