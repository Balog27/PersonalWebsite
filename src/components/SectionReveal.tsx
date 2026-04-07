'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
}

export default function SectionReveal({
  children,
  className,
  delay = 0,
  direction = 'up',
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px 0px' });

  const initial = {
    up:    { opacity: 0, y: 40 },
    left:  { opacity: 0, x: -40 },
    right: { opacity: 0, x: 40 },
    none:  { opacity: 0 },
  }[direction];

  const animate = inView
    ? { opacity: 1, x: 0, y: 0 }
    : initial;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={animate}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
