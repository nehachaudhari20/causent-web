import { useLayoutEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import HeroFlow from '@/components/HeroFlow';
import { gsap, MOTION_QUERY } from '@/lib/gsap';

const WORDMARK = 'CAUSENT';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const mm = gsap.matchMedia();
    mm.add(MOTION_QUERY, () => {
      gsap
        .timeline({ defaults: { ease: 'power3.out' } })
        .fromTo(
          section.querySelectorAll('[data-hero-letter]'),
          { yPercent: 110, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 1.2, stagger: 0.06 },
        )
        .fromTo(
          section.querySelectorAll('[data-hero-reveal]'),
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.14 },
          '-=0.7',
        )
        .fromTo(section.querySelectorAll('[data-hero-flow]'), { opacity: 0 }, { opacity: 1, duration: 1.4 }, '-=0.5');
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative isolate flex min-h-[100svh] flex-col justify-between overflow-hidden px-6 pb-8 pt-28 md:px-12 md:pt-32 lg:px-20"
    >
      <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0 -z-10" />

      <div className="max-w-6xl">
        <h1 aria-label="Causent" className="font-sans text-[clamp(2.75rem,13vw,11rem)] font-extrabold leading-[0.9] tracking-[-0.03em] text-ink">
          {WORDMARK.split('').map((letter, index) => (
            <span key={index} aria-hidden="true" className="inline-block overflow-hidden pb-[0.04em]">
              <span data-hero-letter className="inline-block">
                {letter}
              </span>
            </span>
          ))}
        </h1>

        <p data-hero-reveal className="mt-6 text-xl font-semibold text-ink md:text-2xl">
          Execution assurance for agentic payments.
        </p>

        <h2
          data-hero-reveal
          className="mt-12 max-w-3xl text-[clamp(1.875rem,4.2vw,3.5rem)] font-extrabold leading-[1.15] tracking-[-0.015em] text-ink"
        >
          When AI agents move money, accountability cannot be an afterthought.
        </h2>

        <p data-hero-reveal className="mt-6 max-w-xl text-lg leading-[1.5] text-graphite-strong">
          Connecting authorized intent, financial execution and real-world outcomes in the emerging era of autonomous
          commerce.
        </p>
      </div>

      <div data-hero-flow className="mt-16 md:mt-24">
        <HeroFlow />
      </div>

      <a
        href="#problem"
        className="mt-12 inline-flex items-center gap-3 self-start font-mono text-xs uppercase tracking-[0.2em] text-ink md:mt-16"
      >
        Scroll to explore
        <span className="scroll-cue inline-flex">
          <ArrowDown aria-hidden="true" className="size-4" />
        </span>
      </a>
    </section>
  );
}
