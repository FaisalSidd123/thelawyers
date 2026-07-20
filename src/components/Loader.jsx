'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Loader({ exiting }) {
  const prefersReducedMotion = useReducedMotion();
  const [settled, setSettled] = useState(false);

  // Animation constants based on reduced motion preferences
  const drawDuration = prefersReducedMotion ? 0.1 : 1.2;
  const settleDelay = prefersReducedMotion ? 0.1 : 1.3;

  useEffect(() => {
    // Settle scale after drawing finishes
    const timerSettle = setTimeout(() => {
      setSettled(true);
    }, (settleDelay + 0.5) * 1000);

    return () => {
      clearTimeout(timerSettle);
    };
  }, [settleDelay]);

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: drawDuration, ease: 'easeInOut' }
    }
  };

  const scaleRotation = prefersReducedMotion 
    ? { rotate: 0 }
    : { 
        rotate: [0, -8, 6, -3, 1, 0],
        transition: { delay: settleDelay, duration: 1.4, ease: 'easeInOut' }
      };

  const leftPanY = prefersReducedMotion
    ? { y: 0 }
    : {
        y: [0, 4.5, -3.3, 1.6, -0.5, 0],
        transition: { delay: settleDelay, duration: 1.4, ease: 'easeInOut' }
      };

  const rightPanY = prefersReducedMotion
    ? { y: 0 }
    : {
        y: [0, -4.5, 3.3, -1.6, 0.5, 0],
        transition: { delay: settleDelay, duration: 1.4, ease: 'easeInOut' }
      };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden select-none">
      {/* Left Panel */}
      <motion.div
        className="absolute top-0 left-0 w-1/2 h-full bg-brand-navy z-10 pointer-events-auto"
        initial={{ x: 0 }}
        animate={exiting ? { x: '-100%' } : { x: 0 }}
        transition={{ duration: 0.6, ease: [0.85, 0, 0.15, 1] }}
      />
      
      {/* Right Panel */}
      <motion.div
        className="absolute top-0 right-0 w-1/2 h-full bg-brand-navy z-10 pointer-events-auto"
        initial={{ x: 0 }}
        animate={exiting ? { x: '100%' } : { x: 0 }}
        transition={{ duration: 0.6, ease: [0.85, 0, 0.15, 1] }}
      />

      {/* Loader Graphic Content */}
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center text-brand-paper"
        animate={exiting ? { opacity: 0, scale: 0.95 } : { opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          className="text-brand-burgundy mb-6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Base and Shaft */}
          <motion.path
            d="M50 15V80 M32 80H68"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />

          <circle cx="50" cy="25" r="2.5" className="fill-brand-burgundy" />

          {/* Crossbar Group (Pivots around 50, 25) */}
          <motion.g
            animate={scaleRotation}
            style={{ originX: '50px', originY: '25px' }}
          >
            <motion.path
              d="M20 25H80"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
            <circle cx="20" cy="25" r="1.5" className="fill-brand-burgundy" />
            <circle cx="80" cy="25" r="1.5" className="fill-brand-burgundy" />
          </motion.g>

          {/* Left Pan (Hangs from 20, 25) */}
          <motion.g animate={leftPanY}>
            <motion.path
              d="M20 25L10 50 M20 25L30 50"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
            <motion.path
              d="M5 50 H35 C5 50 9 61 20 61 C31 61 35 50 35 50"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
          </motion.g>

          {/* Right Pan (Hangs from 80, 25) */}
          <motion.g animate={rightPanY}>
            <motion.path
              d="M80 25L70 50 M80 25L90 50"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
            <motion.path
              d="M65 50 H95 C65 50 69 61 80 61 C91 61 95 50 95 50"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
          </motion.g>
        </svg>

        {/* Wordmark */}
        <div className="overflow-hidden h-6 relative flex items-center justify-center">
          <motion.span
            className="font-serif text-[11px] font-bold tracking-[0.4em] uppercase text-brand-paper"
            initial={{ y: 24, opacity: 0 }}
            animate={settled ? { y: 0, opacity: 1 } : { y: 24, opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: prefersReducedMotion ? 0.05 : 0.3 }}
          >
            THE LAWYERS
          </motion.span>
        </div>
      </motion.div>
    </div>
  );
}
