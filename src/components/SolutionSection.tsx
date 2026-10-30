import { useLayoutEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { CapabilityVisual } from '@/components/CapabilityVisuals';
import Eyebrow from '@/components/ui/Eyebrow';
import { CAPABILITIES } from '@/data/content';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';
import { gsap, MOTION_QUERY, ScrollTrigger } from '@/lib/gsap';

const FLOW = ['Intent', 'Execution', 'Outcome'];

export default function SolutionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useRevealOnScroll(sectionRef);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const mm = gsap.matchMedia();
    mm.add(MOTION_QUERY, () => {
      section.querySelectorAll<SVGGraphicsElement>('[data-draw]').forEach((path) => {
        gsap.set(path, { strokeDasharray: 1, strokeDashoffset: 1 });
      });

      section.querySelectorAll<HTMLElement>('[data-stage]').forEach((stage) => {
        ScrollTrigger.create({
          trigger: stage,
          start: 'top 65%',
          once: true,
          onEnter: () => {
            gsap.to(stage.querySelectorAll('[data-draw]'), {
              strokeDashoffset: 0,
              duration: 1.8,
              ease: 'power2.inOut',
              stagger: 0.15,
            });
          },
        });
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="approach"
      ref={sectionRef}
      aria-labelledby="approach-heading"
      className="scroll-mt-16 bg-ivory px-6 py-24 md:px-12 md:py-40 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div data-reveal>
          <Eyebrow>Introducing Causent</Eyebrow>
        </div>

        <h2
          id="approach-heading"
          data-reveal
          className="mt-8 max-w-4xl text-[clamp(2.5rem,6vw,5.5rem)] font-extrabold leading-[1.08] tracking-[-0.025em]"
        >
          From authorized intent to accountable execution.
        </h2>

        <div className="mt-16 grid gap-10 md:mt-24 md:grid-cols-12">
          <div className="space-y-6 text-lg leading-[1.5] md:col-span-6">
            <p data-reveal className="text-2xl leading-[1.4] text-ink md:text-3xl">
              Causent is exploring an evidence-led approach to agentic payment accountability.
            </p>
            <p data-reveal className="text-graphite-strong">
              It is designed to connect what a user or business authorized with the events that followed, helping
              establish a clearer picture of how an autonomous payment was executed and where things may have diverged.
            </p>
          </div>

          <ol data-reveal className="flex flex-wrap items-center gap-3 self-end font-mono text-xs uppercase tracking-[0.18em] text-ink md:col-span-5 md:col-start-8">
            {FLOW.map((step, index) => (
              <li key={step} className="flex items-center gap-3">
                <span className="border border-ink px-4 py-2">{step}</span>
                {index < FLOW.length - 1 && <ArrowRight aria-hidden="true" className="size-4 text-graphite-strong" />}
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-32 md:mt-40">
          {CAPABILITIES.map((capability) => (
            <article
              key={capability.number}
              data-stage
              className="grid gap-10 border-t border-ink/15 py-16 md:grid-cols-12 md:items-center md:gap-12 md:py-28"
            >
              <div className="md:col-span-5">
                <p data-reveal className="text-[clamp(3.5rem,7vw,6.25rem)] font-extrabold leading-none tracking-[-0.04em]">
                  {capability.number}
                </p>
                <h3 data-reveal className="mt-8 text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold leading-[1.2] tracking-[-0.01em]">
                  {capability.title}
                </h3>
                <p data-reveal className="mt-5 max-w-md text-lg leading-[1.5] text-graphite-strong">
                  {capability.description}
                </p>
              </div>

              <div className="md:col-span-6 md:col-start-7">
                <CapabilityVisual kind={capability.visual} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
