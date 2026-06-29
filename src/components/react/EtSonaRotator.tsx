import { useState } from 'react';
import { FlipText } from './FlipText';

interface Item {
  title: string;
  body: string;
}

export default function EtSonaRotator({
  items,
  intervalMs = 5000,
  label,
}: {
  items: Item[];
  intervalMs?: number;
  label?: string;
}) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  const total = String(items.length).padStart(2, '0');
  const cur = items[i];
  const advance = () => setI((p) => (p + 1) % items.length);

  return (
    <div
      className="relative grid items-center gap-9 md:grid-cols-[auto_1fr_auto] md:gap-14"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Stepper numerat amb barra de progrés */}
      <ol className="flex gap-6 md:flex-col md:gap-7" role="tablist" aria-label={label}>
        {items.map((it, idx) => {
          const active = idx === i;
          return (
            <li key={idx}>
              <button
                type="button"
                role="tab"
                aria-selected={active}
                aria-label={it.title}
                onClick={() => setI(idx)}
                className="group flex items-center gap-3"
              >
                <span
                  className={`text-sm font-semibold tabular-nums transition-colors ${
                    active ? 'text-accent-ink' : 'text-ink/30 group-hover:text-ink/60'
                  }`}
                >
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span
                  className={`relative h-px overflow-hidden rounded-full bg-ink/15 transition-all duration-300 ${
                    active ? 'w-14' : 'w-7 group-hover:w-9'
                  }`}
                >
                  {active && (
                    <span
                      key={i}
                      className="etsona-bar absolute inset-0 origin-left bg-accent"
                      style={{
                        animationDuration: `${intervalMs}ms`,
                        animationPlayState: paused ? 'paused' : 'running',
                      }}
                      onAnimationEnd={advance}
                    />
                  )}
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      {/* Enunciat (flip-text) + cos */}
      <div style={{ perspective: '1400px' }} className="md:min-h-[11rem]">
        <h3 className="max-w-2xl text-display font-semibold">
          <FlipText key={i} duration={1.4} loop={false}>
            {cur.title}
          </FlipText>
        </h3>
        <p key={`b${i}`} className="et-fade lead mt-5">
          {cur.body}
        </p>
      </div>

      {/* Número gegant decoratiu (omple l'espai de forma intencionada) */}
      <div
        aria-hidden="true"
        className="pointer-events-none hidden select-none font-display text-[11rem] font-semibold leading-none tabular-nums text-ink/[0.07] lg:block"
      >
        {String(i + 1).padStart(2, '0')}
      </div>
    </div>
  );
}
