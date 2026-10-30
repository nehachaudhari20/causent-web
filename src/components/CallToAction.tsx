import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Eyebrow from '@/components/ui/Eyebrow';
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF, WALKTHROUGH_HREF } from '@/data/content';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';

export default function CallToAction() {
  const sectionRef = useRef<HTMLElement>(null);
  useRevealOnScroll(sectionRef);

  return (
    <section
      id="contact"
      ref={sectionRef}
      aria-labelledby="contact-heading"
      className="scroll-mt-16 bg-ink px-6 py-24 text-ivory md:px-12 md:py-40 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div data-reveal>
          <Eyebrow tone="dark">The future of trusted commerce</Eyebrow>
        </div>

        <h2
          id="contact-heading"
          data-reveal
          className="mt-8 max-w-5xl text-[clamp(2.75rem,7vw,6.5rem)] font-extrabold leading-[1.02] tracking-[-0.03em]"
        >
          Let&rsquo;s make agentic payments accountable.
        </h2>

        <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12 md:items-end">
          <p data-reveal className="max-w-xl text-lg leading-[1.5] text-ivory/80 md:col-span-6 md:text-xl">
            Interested in exploring execution assurance, research collaboration or potential integrations? We&rsquo;d
            love to start a conversation.
          </p>

          <div data-reveal className="md:col-span-5 md:col-start-8 md:justify-self-end">
            <a
              href={WALKTHROUGH_HREF}
              className="group inline-flex items-center gap-3 rounded-full bg-sage px-8 py-4 text-base font-semibold text-ink transition-colors duration-500 hover:bg-ivory focus-visible:outline-sage"
            >
              Request a walkthrough
              <ArrowUpRight
                aria-hidden="true"
                className="size-5 transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
            <p className="mt-6 font-mono text-xs text-ivory/60">
              <a href={`mailto:${CONTACT_EMAIL}`} className="underline decoration-ivory/30 underline-offset-4 hover:decoration-ivory">
                {CONTACT_EMAIL}
              </a>
              <span className="mx-2 text-ivory/40" aria-hidden="true">
                ·
              </span>
              <a href={CONTACT_PHONE_HREF} className="underline decoration-ivory/30 underline-offset-4 hover:decoration-ivory">
                {CONTACT_PHONE}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
