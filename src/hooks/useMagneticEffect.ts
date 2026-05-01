import { useRef, useEffect, RefObject } from 'react';

interface MagneticOptions {
  strength?: number; // 0-1, how strong the magnetic effect is
  radius?: number; // pixel radius of magnetic field
}

export const useMagneticEffect = <T extends HTMLElement>(
  options: MagneticOptions = {}
): RefObject<T> => {
  const { strength = 0.3, radius = 100 } = options;
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      if (distance < radius) {
        const pullStrength = (1 - distance / radius) * strength;
        const moveX = deltaX * pullStrength;
        const moveY = deltaY * pullStrength;

        element.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.02)`;
      } else {
        element.style.transform = 'translate(0px, 0px) scale(1)';
      }
    };

    const handleMouseLeave = () => {
      if (element) {
        element.style.transform = 'translate(0px, 0px) scale(1)';
      }
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength, radius]);

  return ref;
};

export default useMagneticEffect;
