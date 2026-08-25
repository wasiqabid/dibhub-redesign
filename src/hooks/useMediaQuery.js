'use client';

import { useEffect, useState } from 'react';

/**
 * Tracks a media query. Starts false so server and first client render agree —
 * the desktop/mobile nav swap therefore settles on the first effect tick.
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = (e) => setMatches(e.matches);

    setMatches(mql.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, [query]);

  return matches;
}
