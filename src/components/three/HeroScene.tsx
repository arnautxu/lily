/**
 * Illa React del hero: canvas R3F amb el núvol de posts.
 * - Es retira sol (return null) si no hi ha WebGL o el dispositiu és modest:
 *   el pòster CSS del Hero.astro queda al seu lloc.
 * - Pausa el frameloop quan surt de viewport o la pestanya s'amaga.
 * - Marca data-scene-ready a la secció per al crossfade pòster → canvas.
 */
import { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import FeedCloud from './FeedCloud';

interface Props {
  words: string[];
}

function webglAvailable(): boolean {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch {
    return false;
  }
}

export default function HeroScene({ words }: Props) {
  const wrapper = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [frameloop, setFrameloop] = useState<'always' | 'never'>('always');
  const mobile = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;

  useEffect(() => {
    const mem = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
    if (!webglAvailable() || (mem !== undefined && mem < 4)) return;
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled || !wrapper.current) return;

    const io = new IntersectionObserver(
      ([entry]) => setFrameloop(entry.isIntersecting ? 'always' : 'never'),
      { threshold: 0 },
    );
    io.observe(wrapper.current);

    const onVis = () => setFrameloop(document.hidden ? 'never' : 'always');
    document.addEventListener('visibilitychange', onVis);
    return () => {
      io.disconnect();
      document.removeEventListener('visibilitychange', onVis);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div ref={wrapper} className="absolute inset-0" aria-hidden="true">
      <Canvas
        dpr={mobile ? [1, 1.5] : [1, 2]}
        frameloop={frameloop}
        camera={{ fov: 38, position: [0, 0, 9] }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        onCreated={() => {
          wrapper.current?.closest('section')?.setAttribute('data-scene-ready', '');
        }}
      >
        <fogExp2 attach="fog" args={['#141b12', 0.055]} />
        <ambientLight color="#f4ecd9" intensity={0.4} />
        <directionalLight position={[-4, 5, 6]} color="#f7eed8" intensity={1.1} />
        <pointLight position={[5, -1, -3]} color="#e5683c" intensity={0.6} distance={14} />
        <FeedCloud words={words} mobile={mobile} />
      </Canvas>
    </div>
  );
}
