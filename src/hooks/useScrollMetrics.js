'use client';

import { useEffect, useState } from 'react';

/**
 * Scroll position plus 0–1 document progress, sampled on a single rAF-throttled
 * listener so the header, progress bar and back-to-top button share one read.
 */
export function useScrollMetrics() {
  const [metrics, setMetrics] = useState({ y: 0, progress: 0 });

  useEffect(() => {
    let frame = null;

    const read = () => {
      frame = null;
      const y = window.scrollY || 0;
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      setMetrics({ y, progress: Math.min(1, y / max) });
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(read);
    };

    read();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return metrics;
}
