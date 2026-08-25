'use client';

import { useReducedMotion } from 'framer-motion';

import { useScrollMetrics } from '@/hooks/useScrollMetrics';

export default function BackToTop() {
  const reduced = useReducedMotion();
  const { y } = useScrollMetrics();
  const visible = y > 520;

  return (
    <button
      type="button"
      className={`dh-to-top${visible ? ' is-visible' : ''}`}
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })}
    >
      <span className="dh-to-top-chevron" />
    </button>
  );
}
