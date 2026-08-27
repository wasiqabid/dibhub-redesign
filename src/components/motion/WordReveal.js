'use client';

import { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// The headline effect from the design, which is two layers at once:
//
//   * each word is its own inline-block that rises 0.16em and sharpens from a
//     6px blur, so words never break mid-word across lines;
//   * within them characters appear one at a time on an 85ms cadence, with the
//     caret sitting after the most recently revealed character until the line
//     finishes, at which point it parks at the end and blinks.
//
// `revealed` is the single clock for the text layer: the caret position and
// which characters are visible both derive from it in the same render, so a
// character can never appear before the caret reaches it. It is computed from
// elapsed time rather than counted up by an interval, because an interval
// accumulates drift and would slide the caret out of step with the text.
// Characters switch on outright — the design source assigns opacity with no
// transition, and a fade longer than the 85ms cadence leaves the next character
// visibly bleeding through ahead of the caret.
//
// The per-word blur/lift stays on its own Framer delay: it moves the word
// container, never a character's visibility, so it cannot leak text early.
//
// Under prefers-reduced-motion the text renders complete and the caret stops.
//
// The server renders the plain headline and the split only happens once mounted
// — same as the source, which types over already-rendered text. That keeps the
// h1 readable with JavaScript off and stops crawlers seeing loose characters.

const START_DELAY = 0.1;
const PER_CHAR = 0.085;
const WORD_DURATION = 0.5;

// Swapping in the split before paint avoids a flash of the finished headline.
const useIsomorphicLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

export default function WordReveal({ segments, caret = false, className }) {
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useIsomorphicLayoutEffect(() => setMounted(true), []);

  // Flatten to words while keeping a running character index, so the cadence is
  // continuous across the whole headline rather than restarting per word.
  const { words, totalChars, plainText } = useMemo(() => {
    let charIndex = 0;
    const out = [];

    segments.forEach((segment, segmentIndex) => {
      segment.text.split(' ').forEach((word) => {
        out.push({
          text: word,
          accent: Boolean(segment.accent),
          firstChar: charIndex,
          key: `${segmentIndex}-${out.length}`,
        });
        charIndex += word.length;
      });
    });

    return {
      words: out,
      totalChars: charIndex,
      plainText: segments.map((s) => s.text).join(' '),
    };
  }, [segments]);

  const [revealed, setRevealed] = useState(reduced ? totalChars : 0);

  useEffect(() => {
    if (reduced) {
      setRevealed(totalChars);
      return undefined;
    }

    let frame = null;
    const start = performance.now();

    const tick = (now) => {
      const elapsed = (now - start) / 1000 - START_DELAY;
      const next = Math.min(totalChars, Math.max(0, Math.floor(elapsed / PER_CHAR) + 1));
      setRevealed(next);
      if (next < totalChars) frame = requestAnimationFrame(tick);
    };

    setRevealed(0);
    frame = requestAnimationFrame(tick);

    return () => {
      if (frame) cancelAnimationFrame(frame);
    };
  }, [reduced, totalChars]);

  const finished = revealed >= totalChars;

  const caretNode = caret ? (
    <span className={`dh-caret${finished && !reduced ? ' dh-caret--blinking' : ''}`} />
  ) : null;

  if (reduced || !mounted) {
    // The server sends the finished headline so crawlers and no-JS readers get
    // it, but the browser would otherwise paint it during the hydration gap and
    // then restart it as the typed animation. `data-type-pending` holds it
    // visually hidden until mount; CSS keeps it visible under reduced motion,
    // and the root layout's <noscript> rule restores it without JavaScript.
    return (
      <span className={className} data-type-pending="">
        {segments.map((segment, i) => (
          <span key={i} className={segment.accent ? 'dh-word--accent' : undefined}>
            {i > 0 ? ' ' : ''}
            {segment.text}
          </span>
        ))}
        {caretNode}
      </span>
    );
  }

  return (
    <span className={className}>
      <span className="dh-sr-only">{plainText}</span>
      {words.map((word, wordIndex) => (
        <span key={word.key} aria-hidden="true">
          {wordIndex > 0 ? ' ' : ''}
          <motion.span
            className={`dh-word${word.accent ? ' dh-word--accent' : ''}`}
            initial={{ y: '0.16em', filter: 'blur(6px)' }}
            animate={{ y: 0, filter: 'blur(0px)' }}
            transition={{
              duration: WORD_DURATION,
              delay: START_DELAY + word.firstChar * PER_CHAR,
              ease: [0.2, 0.7, 0.3, 1],
            }}
          >
            {word.text.split('').map((char, i) => {
              const absolute = word.firstChar + i;
              return (
                <span key={i} className="dh-char" style={{ opacity: absolute < revealed ? 1 : 0 }}>
                  {char}
                  {caret && !finished && absolute === revealed - 1 ? caretNode : null}
                </span>
              );
            })}
          </motion.span>
        </span>
      ))}
      {finished ? caretNode : null}
    </span>
  );
}
