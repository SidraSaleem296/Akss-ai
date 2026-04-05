import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        target.classList.contains('soft-card') ||
        target.classList.contains('scene-card');

      setIsHovering(isInteractive);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="pointer-events-none fixed z-[9999] hidden h-2 w-2 rounded-full bg-white mix-blend-difference lg:block"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0.5 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 400,
          mass: 0.5,
        }}
      />

      {/* Cursor glow ring */}
      <motion.div
        className="pointer-events-none fixed z-[9998] hidden h-8 w-8 rounded-full border border-royal/40 lg:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 20,
          stiffness: 150,
          mass: 0.8,
        }}
        style={{
          boxShadow: '0 0 20px rgba(76, 47, 207, 0.3)',
        }}
      />

      {/* Cursor trail glow */}
      <motion.div
        className="pointer-events-none fixed z-[9997] hidden h-12 w-12 rounded-full bg-gradient-radial from-royal/20 to-transparent blur-md lg:block"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          scale: isHovering ? 1.8 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 15,
          stiffness: 100,
          mass: 1,
        }}
      />
    </>
  );
};

export default CustomCursor;
