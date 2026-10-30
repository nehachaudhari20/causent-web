import type { ReactNode } from 'react';

type EyebrowProps = {
  children: ReactNode;
  tone?: 'light' | 'dark';
};

export default function Eyebrow({ children, tone = 'light' }: EyebrowProps) {
  const toneClass = tone === 'dark' ? 'text-sage' : 'text-graphite-strong';

  return (
    <p className={`inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] ${toneClass}`}>
      <span aria-hidden="true" className="h-px w-8 bg-current" />
      {children}
    </p>
  );
}
