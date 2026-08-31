'use client';

import { useCallback, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

import { useMediaQuery } from '@/hooks/useMediaQuery';

/**
 * The design's card grids react as a group: the hovered card lifts while every
 * sibling dims and blurs. One index of state on the grid drives all of them.
 * Returns 'active' | 'dimmed' | 'idle' per card, and idles out under
 * prefers-reduced-motion so nothing shifts or blurs.
 *
 * It also idles out where the pointer cannot hover. A tap fires the same
 * mouseenter a mouse does, but nothing fires the matching mouseleave, so on a
 * phone the group would stay stuck with one card lifted and the rest blurred
 * at 45% long after the finger left. This is a hover affordance, so it simply
 * does not run where there is no hover. The query is `(hover: none)` rather
 * than `(hover: hover)` so that the pre-resolution default — and therefore
 * every render on a mouse device — is exactly the existing behaviour.
 */
export function useHoverGroup() {
  const reduced = useReducedMotion();
  const cannotHover = useMediaQuery('(hover: none)');
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
      if (reduced || cannotHover || hovered === null) return 'idle';
      return hovered === index ? 'active' : 'dimmed';
    },
    [hovered, reduced, cannotHover]
  );

  return { bind, clear, stateOf };
}
