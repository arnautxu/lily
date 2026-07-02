import { useEffect, useState } from 'react';
import { FiTrendingUp, FiHeart, FiUsers, FiMessageCircle, FiBarChart2, FiEye } from 'react-icons/fi';
import Carousel from './Carousel';

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

  const items = metrics.map((m, i) => {
    const Icon = ICONS[m.icon] ?? FiTrendingUp;
    return {
      id: i + 1,
      title: (
        <span>
          {m.prefix && <span style={{ color: 'rgb(var(--accent))' }}>{m.prefix}</span>}
          {m.value}
          {m.suffix}
        </span>
      ),
      description: m.label,
      icon: <Icon className="carousel-icon" />,
    };
  });

  return (
    <Carousel
      items={items}
      baseWidth={bw}
      autoplay
      autoplayDelay={autoplayDelay}
      pauseOnHover
      loop
      round={false}
    />
  );
}
