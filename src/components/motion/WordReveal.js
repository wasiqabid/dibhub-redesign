'use client';

import { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// The headline effect from the design, which is two layers at once:
//
//   * each word is its own inline-block that rises 0.16em and sharpens from a
//     6px blur, so words never break mid-word across lines;
//   * within them characters fade in one at a time on an 85ms cadence, with the
//     caret sitting after the most recently revealed character until the line
//     finishes, at which point it parks at the end and blinks.
//
// Under prefers-reduced-motion the text renders complete and the caret stops.
//
// The server renders the plain headline and the split only happens once mounted
// — same as the source, which types over already-rendered text. That keeps the
// h1 readable with JavaScript off and stops crawlers seeing loose characters.

const START_DELAY = 0.1;
const PER_CHAR = 0.085;
const WORD_DURATION = 0.5;
const CHAR_DURATION = 0.18;

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

  // Only the caret's position needs a timer; the glyphs themselves run on
  // declarative Framer delays.
  const [caretAt, setCaretAt] = useState(reduced ? totalChars : 0);

  useEffect(() => {
    if (!caret || reduced) {
      setCaretAt(totalChars);
      return undefined;
    }

    let step = 0;
    let timer = null;

    setCaretAt(0);
    const start = window.setTimeout(() => {
      timer = window.setInterval(() => {
        step += 1;
        setCaretAt(step);
        if (step >= totalChars) window.clearInterval(timer);
      }, PER_CHAR * 1000);
    }, START_DELAY * 1000);

    return () => {
      window.clearTimeout(start);
      if (timer) window.clearInterval(timer);
    };
  }, [caret, reduced, totalChars]);

  const finished = caretAt >= totalChars;

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
                <motion.span
                  key={i}
                  className="dh-char"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: CHAR_DURATION,
                    delay: START_DELAY + absolute * PER_CHAR,
                  }}
                >
                  {char}
                  {caret && !finished && absolute === caretAt - 1 ? caretNode : null}
                </motion.span>
              );
            })}
          </motion.span>
        </span>
      ))}
      {finished ? caretNode : null}
    </span>
  );
}
