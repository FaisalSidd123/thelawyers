'use client';

import { useEffect, useRef } from 'react';
import { useMotionValue, useTransform, animate, useInView } from 'framer-motion';

export default function Counter({ value, duration = 1.8 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: duration,
        ease: 'easeOut',
      });
      return controls.stop;
    }
  }, [isInView, count, value, duration]);

  useEffect(() => {
    return rounded.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = latest;
      }
    });
  }, [rounded]);

  return <span ref={ref}>0</span>;
}
