import { useRef, RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface ParallaxOptions {
  speed?: number; // 0.5 = slower, 2 = faster
  direction?: 'up' | 'down' | 'left' | 'right';
  start?: string;
  end?: string;
  scrub?: boolean | number;
}

export const useParallax = <T extends HTMLElement>(
  options: ParallaxOptions = {}
): RefObject<T> => {
  const {
    speed = 0.5,
    direction = 'up',
    start = 'top bottom',
    end = 'bottom top',
    scrub = true,
  } = options;

  const ref = useRef<T>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || !ref.current) {
      return;
    }

    const element = ref.current;
    const movement = 100 * speed;

    let yStart = 0;
    let yEnd = 0;
    let xStart = 0;
    let xEnd = 0;

    switch (direction) {
      case 'up':
        yStart = movement;
        yEnd = -movement;
        break;
      case 'down':
        yStart = -movement;
        yEnd = movement;
        break;
      case 'left':
        xStart = movement;
        xEnd = -movement;
        break;
      case 'right':
        xStart = -movement;
        xEnd = movement;
        break;
    }

    gsap.fromTo(
      element,
      {
        y: yStart,
        x: xStart,
      },
      {
        y: yEnd,
        x: xEnd,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start,
          end,
          scrub,
        },
      }
    );
  });

  return ref;
};

export default useParallax;
