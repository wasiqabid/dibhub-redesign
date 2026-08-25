'use client';

import { useCallback, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * The design's card grids react as a group: the hovered card lifts while every
 * sibling dims and blurs. One index of state on the grid drives all of them.
 * Returns 'active' | 'dimmed' | 'idle' per card, and idles out under
 * prefers-reduced-motion so nothing shifts or blurs.
 */
export function useHoverGroup() {
  const reduced = useReducedMotion();
  const [hovered, setHovered] = useState(null);

  const clear = useCallback(() => setHovered(null), []);

  const bind = useCallback(
    (index) => ({
      onMouseEnter: () => setHovered(index),
      onFocus: () => setHovered(index),
    }),
    []
  );

  const stateOf = useCallback(
    (index) => {
      if (reduced || hovered === null) return 'idle';
      return hovered === index ? 'active' : 'dimmed';
    },
    [hovered, reduced]
  );

  return { bind, clear, stateOf };
}
