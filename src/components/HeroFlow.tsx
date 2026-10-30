import { useLayoutEffect, useRef } from 'react';
import { gsap, MOTION_QUERY } from '@/lib/gsap';

const STEPS = ['Intent', 'Agent', 'Payment', 'Outcome'];

export default function HeroFlow() {
  const dotRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    const mm = gsap.matchMedia();
    mm.add(MOTION_QUERY, () => {
      gsap.fromTo(
        dot,
        { left: '12.5%' },
        { left: '87.5%', duration: 4.5, ease: 'power1.inOut', repeat: -1, yoyo: true, repeatDelay: 0.8 },
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute left-[12.5%] right-[12.5%] top-[6px] h-px bg-ink/25" />
      <span
        ref={dotRef}
        aria-hidden="true"
        style={{ left: '12.5%' }}
        className="absolute top-[6px] size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink"
      />

      <ol className="relative grid grid-cols-4">
        {STEPS.map((step, index) => {
          const isOutcome = index === STEPS.length - 1;
          return (
            <li key={step} className="flex flex-col items-center text-center">
              <span
                aria-hidden="true"
                className={`size-3 rounded-full border border-ink ${isOutcome ? 'bg-sage' : 'bg-ivory'}`}
              />
              <span className="mt-5 font-mono text-[11px] uppercase tracking-[0.16em] text-graphite-strong md:text-xs md:tracking-[0.2em]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="mt-1 font-sans text-sm font-semibold uppercase tracking-[0.12em] text-ink md:text-base">
                {step}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
