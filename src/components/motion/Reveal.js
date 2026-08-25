'use client';

import { motion, useReducedMotion } from 'framer-motion';

// The design's scroll reveal: blocks sit 56px low and slightly shrunk, then
// settle as they enter. They re-hide on the way out (the source observer has no
// `once`), and siblings stagger 130ms apart up to a 520ms ceiling.
const STAGGER_MS = 130;
const STAGGER_MAX_MS = 520;

const VARIANTS = {
  hidden: {
    opacity: 0,
    y: 56,
    scale: 0.94,
    transition: { duration: 0.5, ease: [0.16, 0.84, 0.3, 1] },
  },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.95, ease: [0.16, 0.84, 0.3, 1], delay },
  }),
};

export default function Reveal({ as = 'div', index = 0, className, children, ...rest }) {
  const reduced = useReducedMotion();
  const Tag = motion[as] || motion.div;

  if (reduced) {
    const Plain = as;
    return (
      <Plain className={className} {...rest}>
        {children}
      </Plain>
    );
  }

  return (
    <Tag
      className={className}
      data-reveal=""
      variants={VARIANTS}
      custom={Math.min(index * STAGGER_MS, STAGGER_MAX_MS) / 1000}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.08, margin: '0px 0px -8% 0px' }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
