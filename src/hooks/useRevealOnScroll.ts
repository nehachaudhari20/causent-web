import { useLayoutEffect, type RefObject } from 'react';
import { gsap, MOTION_QUERY } from '@/lib/gsap';

export function useRevealOnScroll(scopeRef: RefObject<HTMLElement>, selector = '[data-reveal]') {
  useLayoutEffect(() => {
    const scope = scopeRef.current;
    if (!scope) return;

    const mm = gsap.matchMedia();
    mm.add(MOTION_QUERY, () => {
      gsap.utils.toArray<HTMLElement>(scope.querySelectorAll(selector)).forEach((el) => {
        const delay = Number(el.dataset.revealDelay ?? 0) * 0.15;
        gsap.fromTo(
          el,
          { y: 32, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          },
        );
      });
    });

    return () => mm.revert();
  }, [scopeRef, selector]);
}
