'use client';

import { useHoverGroup } from '@/hooks/useHoverGroup';
import Reveal from '@/components/motion/Reveal';
import { ABOUT_STATS } from '@/components/about/aboutContent';

export default function AboutNumbers() {
  const { bind, clear, stateOf } = useHoverGroup();

  return (
    <section id="numbers" className="dh-about-numbers" aria-label="By the numbers">
      <div className="dh-about-numbers-dots" />
      <div className="dh-about-numbers-inner">
        <Reveal className="dh-eyebrow-row dh-about-numbers-eyebrow">
          <span className="dh-eyebrow">{ABOUT_STATS.eyebrow}</span>
        </Reveal>

        <div className="dh-about-stat-grid" onMouseLeave={clear}>
          {ABOUT_STATS.items.map((item, index) => (
            <Reveal
              key={item.key}
              className={`dh-about-stat is-${stateOf(index)}`}
              index={index}
              {...bind(index)}
            >
              <span className="dh-about-stat-num">{item.value}</span>
              <span className="dh-about-stat-label">{item.label}</span>
              <span className="dh-about-stat-note">{item.note}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
