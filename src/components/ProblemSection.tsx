import { useRef } from 'react';
import Eyebrow from '@/components/ui/Eyebrow';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';

export default function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useRevealOnScroll(sectionRef);

  return (
    <section
      id="problem"
      ref={sectionRef}
      aria-labelledby="problem-heading"
      className="scroll-mt-16 px-6 py-24 md:px-12 md:py-40 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div data-reveal>
          <Eyebrow>The shift is already happening</Eyebrow>
        </div>

        <h2
          id="problem-heading"
          data-reveal
          className="mt-8 max-w-5xl text-[clamp(2.5rem,6vw,5.5rem)] font-extrabold leading-[1.08] tracking-[-0.025em] text-ink"
        >
          The way money moves is changing. Accountability must catch up.
        </h2>

        <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-12">
          <p data-reveal className="text-2xl leading-[1.4] text-ink md:col-span-5 md:text-3xl">
            AI agents are moving beyond recommendations. They are beginning to initiate purchases, interact with payment
            infrastructure and transact autonomously.
          </p>

          <div className="space-y-6 text-lg leading-[1.5] text-graphite-strong md:col-span-6 md:col-start-7">
            <p data-reveal>
              But when an agent acts across multiple systems, it can become difficult to establish exactly what was
              authorized, what happened during execution and where the outcome diverged from the original instruction.
            </p>
            <p data-reveal className="border-l-2 border-sage pl-6 text-ink">
              A payment receipt may confirm that a transaction occurred. It does not necessarily provide a unified
              account of the entire agent-driven execution journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
