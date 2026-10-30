import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const MOTION_QUERY = '(prefers-reduced-motion: no-preference)';

export { gsap, ScrollTrigger };
