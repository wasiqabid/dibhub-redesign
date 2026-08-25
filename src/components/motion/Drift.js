'use client';

import { motion, useReducedMotion } from 'framer-motion';

/**
 * The slow ambient loop on the decorative background discs — a 22s drift that
 * nudges the shape down-left, swells it slightly and lifts its opacity.
 */
export default function Drift({ duration = 22, className, style, children, ...rest }) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <div className={className} style={style} {...rest}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      style={style}
      animate={{
        x: [0, -40, 0],
        y: [0, 34, 0],
        scale: [1, 1.09, 1],
        opacity: [0.95, 1, 0.95],
      }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
