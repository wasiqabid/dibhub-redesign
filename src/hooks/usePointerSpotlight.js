'use client';

import { useCallback, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * The soft teal disc that trails the cursor across the hero and CTA sections.
 * Written straight to style on pointermove — this fires far too often to route
 * through React state.
 */
export function usePointerSpotlight() {
  const reduced = useReducedMotion();
  const hostRef = useRef(null);
  const spotRef = useRef(null);

  const onPointerMove = useCallback(
    (event) => {
      const host = hostRef.current;
      const spot = spotRef.current;
      if (reduced || !host || !spot) return;

      const rect = host.getBoundingClientRect();
      spot.style.opacity = '1';
      spot.style.transform = `translate3d(${event.clientX - rect.left}px, ${
        event.clientY - rect.top
      }px, 0)`;
    },
    [reduced]
  );

  const onPointerLeave = useCallback(() => {
    if (spotRef.current) spotRef.current.style.opacity = '0';
  }, []);

  return { hostRef, spotRef, spotlightProps: { onPointerMove, onPointerLeave } };
}
