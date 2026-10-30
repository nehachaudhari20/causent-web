import { useEffect, useLayoutEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { CONTACT_HREF, NAV_LINKS } from '@/data/content';
import { ScrollTrigger } from '@/lib/gsap';

const SCROLL_THRESHOLD = 24;

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useLayoutEffect(() => {
    const sectionTriggers = NAV_LINKS.map(({ href }) => {
      const id = href.slice(1);
      const section = document.getElementById(id);
      if (!section) return null;
      return ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        onToggle: (self) => {
          if (self.isActive) setActiveId(id);
        },
      });
    });

    const headerTrigger = ScrollTrigger.create({
      start: SCROLL_THRESHOLD,
      end: 'max',
      onToggle: (self) => setScrolled(self.isActive),
    });

    return () => {
      sectionTriggers.forEach((trigger) => trigger?.kill());
      headerTrigger.kill();
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [menuOpen]);

  const linkClass = (href: string) =>
    `relative py-2 text-sm font-semibold transition-colors duration-300 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-ink after:transition-transform after:duration-500 hover:after:scale-x-100 ${
      activeId === href.slice(1) ? 'after:scale-x-100' : 'after:scale-x-0'
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-500 ${
        scrolled || menuOpen ? 'border-ink/10 bg-ivory/95 backdrop-blur-sm' : 'border-transparent bg-transparent'
      }`}
    >
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20 md:px-12 lg:px-20">
        <a href="#top" className="font-sans text-base font-extrabold tracking-[0.24em] text-ink" onClick={() => setMenuOpen(false)}>
          CAUSENT
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                aria-current={activeId === href.slice(1) ? 'true' : undefined}
                className={linkClass(href)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href={CONTACT_HREF}
            className="group hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-ivory transition-colors duration-300 hover:bg-graphite-strong md:inline-flex"
          >
            Get in touch
            <ArrowUpRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>

          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-ink/20 text-ink md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-16 flex flex-col justify-between bg-ivory px-6 py-10 md:hidden"
        >
          <ul className="flex flex-col">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href} className="border-b border-ink/10">
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between py-6 text-[clamp(1.75rem,8vw,2.25rem)] font-extrabold leading-[1.2] text-ink"
                >
                  {label}
                  <span aria-hidden="true" className="font-mono text-sm text-graphite-strong">
                    0{NAV_LINKS.findIndex((link) => link.href === href) + 1}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href={CONTACT_HREF}
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-sage px-6 py-4 text-base font-semibold text-ink"
          >
            Get in touch
            <ArrowUpRight aria-hidden="true" className="size-5" />
          </a>
        </div>
      )}
    </header>
  );
}
