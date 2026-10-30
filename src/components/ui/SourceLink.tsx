import type { ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';

type SourceLinkProps = {
  href: string;
  children: ReactNode;
  tone?: 'light' | 'dark';
  className?: string;
};

export default function SourceLink({ href, children, tone = 'light', className = '' }: SourceLinkProps) {
  const toneClass =
    tone === 'dark'
      ? 'text-sage focus-visible:outline-sage'
      : 'text-ink focus-visible:outline-ink';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-2 font-mono text-sm underline decoration-current/40 underline-offset-4 transition-colors duration-300 hover:decoration-current ${toneClass} ${className}`}
    >
      {children}
      <ArrowUpRight
        aria-hidden="true"
        className="size-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}
