import { useEffect, useRef, useState } from 'react';
import { FiTrendingUp, FiHeart, FiUsers, FiMessageCircle, FiBarChart2, FiEye } from 'react-icons/fi';
import Carousel from './Carousel';

// Comptador animat (ease-out). SSR i estat inicial mostren SEMPRE el valor
// real (credibilitat si el JS triga); quan `run` passa a true (la secció
// entra a viewport) reinicia a 0 i compta cap amunt.
function CountUp({
  value,
  run,
  delay = 0,
  duration = 1300,
}: {
  value: string;
  run: boolean;
  delay?: number;
  duration?: number;
}) {
  const target = parseFloat(value);
  const numeric = !Number.isNaN(target);
  const decimals = numeric ? (value.split('.')[1]?.length ?? 0) : 0;
  const [display, setDisplay] = useState(value);
  const done = useRef(false);

  useEffect(() => {
    if (!run || done.current) return;
    if (!numeric || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    done.current = true;
    const fmt = (v: number) =>
      decimals ? v.toFixed(decimals) : Math.round(v).toLocaleString('ca-ES');
    const ease = (x: number) => 1 - Math.pow(1 - x, 3);
    let raf = 0;
    let t0 = 0;
    setDisplay(fmt(0));
    const tick = (now: number) => {
      if (!t0) t0 = now;
      const p = Math.min(1, (now - t0) / duration);
      setDisplay(fmt(target * ease(p)));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setDisplay(value);
    };
    const timer = window.setTimeout(() => {
      raf = requestAnimationFrame(tick);
    }, delay);
    return () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [run]);

  return <span style={{ fontVariantNumeric: 'tabular-nums' }}>{display}</span>;
}

const ICONS = {
  reach: FiTrendingUp,
  likes: FiHeart,
  users: FiUsers,
  chat: FiMessageCircle,
  chart: FiBarChart2,
  eye: FiEye,
} as const;

export interface Metric {
  prefix?: string;
  value: string;
  suffix?: string;
  label: string;
  icon: keyof typeof ICONS;
}

export default function MetricsCarousel({
  metrics,
  baseWidth = 400,
  autoplayDelay = 3200,
}: {
  metrics: Metric[];
  baseWidth?: number;
  autoplayDelay?: number;
}) {
  // baseWidth responsiu. A mòbil la fem prou estreta perquè es vegi
  // el carrusel de fotos del darrere (no tapar-lo del tot).
  const safeWidth = (w: number) => {
    if (typeof window === 'undefined') return w;
    const vw = window.innerWidth;
    return Math.min(w, vw < 640 ? Math.min(vw - 150, 240) : w);
  };
  // Iniciem amb baseWidth (igual que el SSR) i ajustem després del muntatge,
  // per evitar mismatch d'hidratació (React 19 no repara diferències d'estil).
  const [bw, setBw] = useState(baseWidth);
  useEffect(() => {
    const fit = () => setBw(safeWidth(baseWidth));
    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [baseWidth]);

  // Gate del comptador: observem un embolcall amb caixa real (les cards giren
  // en 3D i un IO sobre elles no dispararia mai). Arrenca en entrar a viewport.
  const wrapRef = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setRun(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const items = metrics.map((m, i) => {
    const Icon = ICONS[m.icon] ?? FiTrendingUp;
    return {
      id: i + 1,
      title: (
        <span>
          {m.prefix && <span style={{ color: 'rgb(var(--accent))' }}>{m.prefix}</span>}
          <CountUp value={m.value} run={run} delay={i * 160} />
          {m.suffix}
        </span>
      ),
      description: m.label,
      icon: <Icon className="carousel-icon" />,
    };
  });

  return (
    <div ref={wrapRef}>
      <Carousel
        items={items}
        baseWidth={bw}
        autoplay
        autoplayDelay={autoplayDelay}
        pauseOnHover
        loop
        round={false}
      />
    </div>
  );
}
