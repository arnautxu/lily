/**
 * Núvol de "posts" surant en la boira del hero.
 * Posicions en el·lipsoide esbiaixat a la dreta: el H1 (DOM) mana a l'esquerra.
 */
import { useMemo, useRef, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { buildTextures } from './tileTextures';

interface Props {
  words: string[];
  mobile: boolean;
}

interface TileDef {
  pos: [number, number, number];
  scale: number;
  rot: number;
  speed: number;
  phase: number;
  tex: number;
}

/* Generador pseudoaleatori determinista (mateixa composició a cada càrrega) */
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const damp = (current: number, target: number, dt: number, lambda = 4) =>
  current + (target - current) * (1 - Math.exp(-lambda * dt));

export default function FeedCloud({ words, mobile }: Props) {
  const group = useRef<THREE.Group>(null!);
  const [textures, setTextures] = useState<THREE.CanvasTexture[] | null>(null);
  const { camera, scene } = useThree();

  // Objectius d'interacció (ratolí + scroll), esmorteïts a cada frame
  const target = useRef({ rx: 0, ry: 0, px: 0, camZ: 9, gy: 0, fog: 0.055 });

  useEffect(() => {
    let alive = true;
    buildTextures(words).then((t) => alive && setTextures(t));
    return () => {
      alive = false;
    };
  }, [words]);

  useEffect(() => {
    const onProgress = (e: Event) => {
      const p = (e as CustomEvent<number>).detail;
      target.current.camZ = 9 - p * 3.5;
      target.current.gy = p * 0.8;
      target.current.fog = 0.055 + p * 0.03;
    };
    window.addEventListener('hero:progress', onProgress);

    let onMove: ((e: PointerEvent) => void) | null = null;
    if (!mobile && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      onMove = (e) => {
        const px = (e.clientX / window.innerWidth) * 2 - 1;
        const py = (e.clientY / window.innerHeight) * 2 - 1;
        target.current.ry = px * 0.07;
        target.current.rx = -py * 0.04;
        target.current.px = px * 0.25;
      };
      window.addEventListener('pointermove', onMove);
    }
    return () => {
      window.removeEventListener('hero:progress', onProgress);
      if (onMove) window.removeEventListener('pointermove', onMove);
    };
  }, [mobile]);

  const tiles = useMemo<TileDef[]>(() => {
    const rnd = mulberry32(20260610);
    const count = mobile ? 9 : 16;
    const defs: TileDef[] = [];
    for (let i = 0; i < count; i++) {
      defs.push({
        pos: [
          -0.4 + rnd() * 5.4, // x ∈ [-0.4, 5] — esbiaixat a la dreta
          -2 + rnd() * 4.2, // y ∈ [-2, 2.2]
          -6 + rnd() * 7, // z ∈ [-6, 1]
        ],
        scale: 0.6 + rnd() * 0.8,
        rot: (rnd() - 0.5) * 0.12,
        speed: 0.4 + rnd() * 0.5,
        phase: rnd() * Math.PI * 2,
        tex: i, // distribució uniforme (mòdul al render) — evita paraules repetides juntes
      });
    }
    return defs;
  }, [mobile]);

  const meshRefs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame((state, dt) => {
    const t = state.clock.elapsedTime;
    const tg = target.current;
    const g = group.current;
    if (!g) return;

    g.rotation.y = damp(g.rotation.y, tg.ry, dt);
    g.rotation.x = damp(g.rotation.x, tg.rx, dt);
    g.position.x = damp(g.position.x, tg.px, dt);
    g.position.y = damp(g.position.y, tg.gy, dt);
    camera.position.z = damp(camera.position.z, tg.camZ, dt);
    const fog = scene.fog as THREE.FogExp2 | null;
    if (fog) fog.density = damp(fog.density, tg.fog, dt);

    meshRefs.current.forEach((m, i) => {
      if (!m) return;
      const d = tiles[i];
      m.position.y = d.pos[1] + Math.sin(t * d.speed + d.phase) * 0.08;
      m.rotation.z = d.rot + Math.sin(t * 0.3 + d.phase) * 0.02;
    });
  });

  if (!textures) return null;

  return (
    <group ref={group}>
      {tiles.map((d, i) => (
        <mesh
          key={i}
          ref={(el) => (meshRefs.current[i] = el)}
          position={d.pos}
          rotation={[0, 0, d.rot]}
          scale={d.scale}
        >
          <planeGeometry args={[1, 1]} />
          <meshStandardMaterial
            map={textures[d.tex % textures.length]}
            roughness={0.85}
            metalness={0}
            transparent
          />
        </mesh>
      ))}
    </group>
  );
}
