import { useRef } from 'react';
import SourceLink from '@/components/ui/SourceLink';
import { INDUSTRY_STATS, TRUST_FRAMEWORK } from '@/data/content';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';

export default function IndustrySignals() {
  const sectionRef = useRef<HTMLElement>(null);
  useRevealOnScroll(sectionRef);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="industry-signals-heading"
      className="bg-ink px-6 py-24 text-ivory md:px-12 md:py-32 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2
            id="industry-signals-heading"
            data-reveal
            className="text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[1.05] tracking-[-0.025em]"
          >
            Industry signals
          </h2>
          <p data-reveal className="max-w-sm text-base leading-[1.5] text-ivory/75">
            Industry-reported figures, shown as published by each source. They are not Causent metrics.
          </p>
        </div>

        <div className="mt-16 grid gap-px bg-ivory/15 sm:grid-cols-2 md:mt-20 lg:grid-cols-4">
          {INDUSTRY_STATS.map((stat, index) => (
            <article key={stat.value} data-reveal data-reveal-delay={index} className="flex flex-col bg-ink p-8 lg:p-10">
              <p className="text-[clamp(2.75rem,5.5vw,4.75rem)] font-extrabold leading-none tracking-[-0.035em]">
                {stat.value}
              </p>
              <h3 className="mt-8 text-lg font-semibold leading-[1.3]">{stat.label}</h3>
              <p className="mt-3 text-base leading-[1.5] text-ivory/75">{stat.description}</p>
              <SourceLink href={stat.sourceUrl} tone="dark" className="mt-auto pt-8">
                {stat.source}
              </SourceLink>
            </article>
          ))}
        </div>

        <div data-reveal className="mt-20 grid gap-10 border-t border-ivory/15 pt-12 md:grid-cols-12">
          <p className="text-2xl font-semibold leading-[1.3] md:col-span-4">Industry frameworks are evolving too.</p>

          <div className="md:col-span-8">
            <p className="text-lg leading-[1.5] text-ivory/85">{TRUST_FRAMEWORK.summary}</p>
            <ol className="mt-8 grid gap-px bg-ivory/15 sm:grid-cols-2 lg:grid-cols-5">
              {TRUST_FRAMEWORK.pillars.map((pillar, index) => (
                <li key={pillar} className="flex flex-col gap-3 bg-ink p-5">
                  <span className="font-mono text-xs text-sage">{String(index + 1).padStart(2, '0')}</span>
                  <span className="text-base font-semibold leading-[1.3]">{pillar}</span>
                </li>
              ))}
            </ol>
            <SourceLink href={TRUST_FRAMEWORK.sourceUrl} tone="dark" className="mt-8">
              {TRUST_FRAMEWORK.source}
            </SourceLink>
          </div>
        </div>
      </div>
    </section>
  );
}
