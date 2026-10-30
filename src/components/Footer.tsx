import { CONTACT_EMAIL, CONTACT_HREF, CONTACT_PHONE, CONTACT_PHONE_HREF } from '@/data/content';

export default function Footer() {
  return (
    <footer className="bg-mist px-6 py-16 md:px-12 md:py-20 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 md:items-end">
          <div>
            <p className="font-sans text-3xl font-extrabold tracking-[0.2em] text-ink md:text-4xl">CAUSENT</p>
            <p className="mt-4 text-lg text-graphite-strong">Execution assurance for agentic payments.</p>
          </div>

          <dl className="grid gap-8 sm:grid-cols-2 md:justify-self-end">
            <div>
              <dt className="font-mono text-xs uppercase tracking-[0.2em] text-graphite-strong">Contact</dt>
              <dd className="mt-3">
                <a
                  href={CONTACT_HREF}
                  className="font-semibold text-ink underline decoration-ink/30 underline-offset-4 transition-colors duration-300 hover:decoration-ink"
                >
                  {CONTACT_EMAIL}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-[0.2em] text-graphite-strong">Phone</dt>
              <dd className="mt-3">
                <a
                  href={CONTACT_PHONE_HREF}
                  className="font-semibold text-ink underline decoration-ink/30 underline-offset-4 transition-colors duration-300 hover:decoration-ink"
                >
                  {CONTACT_PHONE}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="mt-16 border-t border-ink/15 pt-8 text-sm text-graphite-strong">
          <p>© 2026 Causent. All rights reserved.</p>
        </div>
        <p className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-graphite-strong">
          Causent is under development.
        </p>
      </div>
    </footer>
  );
}
