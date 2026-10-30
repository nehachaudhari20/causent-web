import type { ReactElement } from 'react';
import { EVIDENCE_TIMELINE, type CapabilityVisualKind } from '@/data/content';

const STROKE = 'currentColor';

function IntentArt() {
  return (
    <svg viewBox="0 0 400 300" className="size-full" fill="none" stroke={STROKE} strokeWidth={1.5} aria-hidden="true">
      <rect x="44" y="28" width="312" height="244" strokeDasharray="4 6" className="text-graphite" />
      <path data-draw pathLength={1} d="M120 70 H250 L282 102 V230 H120 Z" />
      <path data-draw pathLength={1} d="M250 70 V102 H282" />
      <path data-draw pathLength={1} d="M146 134 H256" />
      <path data-draw pathLength={1} d="M146 164 H256" />
      <path data-draw pathLength={1} d="M146 194 H220" />
      <circle cx="44" cy="28" r="5" fill="#B9CF91" />
      <circle cx="356" cy="272" r="5" fill="#B9CF91" />
    </svg>
  );
}

function ExecutionArt() {
  const nodes = [40, 120, 200, 280, 360];
  return (
    <svg viewBox="0 0 400 300" className="size-full" fill="none" stroke={STROKE} strokeWidth={1.5} aria-hidden="true">
      <path data-draw pathLength={1} d="M40 150 H360" />
      {nodes.map((x, index) => {
        const isLast = index === nodes.length - 1;
        return (
          <g key={x}>
            <circle cx={x} cy={150} r={8} fill={isLast ? '#B9CF91' : '#F3F1E9'} />
            {isLast && <circle cx={x} cy={150} r={8} className="pulse-ring" />}
          </g>
        );
      })}
      <path d="M40 118 V182" className="text-graphite" strokeDasharray="2 4" />
      <path d="M360 118 V182" className="text-graphite" strokeDasharray="2 4" />
    </svg>
  );
}

function DivergenceArt() {
  return (
    <svg viewBox="0 0 400 300" className="size-full" fill="none" stroke={STROKE} strokeWidth={1.5} aria-hidden="true">
      <path d="M40 170 H360" strokeDasharray="4 6" className="text-graphite" />
      <path data-draw pathLength={1} d="M40 170 C150 170 190 170 230 170 C280 170 300 100 360 92" />
      <circle cx="230" cy="170" r="5" fill="#B9CF91" />
      <circle cx="360" cy="92" r="6" fill="#171A18" />
      <circle cx="360" cy="170" r="4" fill="#F3F1E9" />
    </svg>
  );
}

function AccountabilityArt() {
  return (
    <ol className="flex size-full flex-col justify-center gap-5" aria-label="Evidence timeline">
      {EVIDENCE_TIMELINE.map((step, index) => {
        const isLast = index === EVIDENCE_TIMELINE.length - 1;
        return (
          <li key={step} className="flex items-center gap-4">
            <span className="w-8 shrink-0 font-mono text-xs text-graphite-strong">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span
              aria-hidden="true"
              className={`size-3 shrink-0 border border-ink ${isLast ? 'bg-sage' : 'bg-ivory'}`}
            />
            <span className="text-sm font-semibold leading-[1.4] text-ink md:text-base">{step}</span>
          </li>
        );
      })}
    </ol>
  );
}

const ARTWORK: Record<CapabilityVisualKind, () => ReactElement> = {
  intent: IntentArt,
  execution: ExecutionArt,
  divergence: DivergenceArt,
  accountability: AccountabilityArt,
};

export function CapabilityVisual({ kind }: { kind: CapabilityVisualKind }) {
  const Artwork = ARTWORK[kind];
  return (
    <div data-reveal className="flex aspect-[4/3] w-full items-center border border-ink/15 bg-mist/70 p-6 text-ink md:p-10">
      <Artwork />
    </div>
  );
}
