'use client';

import { motion, useReducedMotion } from 'framer-motion';

/**
 * The hero's entrance: fade up from 16px below, on mount rather than on scroll.
 */
export default function Rise({
  as = 'div',
  duration = 0.7,
  delay = 0,
  className,
  children,
  ...rest
}) {
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
      data-rise=""
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: [0.2, 0.7, 0.3, 1] }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
