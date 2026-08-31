'use client';

import { useHoverGroup } from '@/hooks/useHoverGroup';
import Reveal from '@/components/motion/Reveal';
import { ABOUT_MISSION } from '@/components/about/aboutContent';

export default function AboutMission() {
  const { bind, clear, stateOf } = useHoverGroup();
  const { quote } = ABOUT_MISSION;

  return (
    <section id="mission" className="dh-about-mission" aria-labelledby="about-mission-title">
      <div className="dh-section-shell">
        {/* This section's only heading is the eyebrow — the quote below is a
            blockquote, not a heading — so it carries the h2 itself rather than
            letting the card h3s skip a level. Styling is unchanged. */}
        <Reveal className="dh-eyebrow-row dh-about-eyebrow-row">
          <h2 id="about-mission-title" className="dh-eyebrow dh-about-mission-heading">
            {ABOUT_MISSION.eyebrow}
          </h2>
        </Reveal>

        <Reveal className="dh-about-mission-head">
          <blockquote className="dh-about-quote">
            {quote.before}
            <span className="dh-about-quote-accent">{quote.accent}</span>
            {quote.after}
          </blockquote>
          <div className="dh-about-mission-copy">
            {/* Static prose that never reorders, so the index is a stable key. */}
            {ABOUT_MISSION.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <div className="dh-about-card-grid" onMouseLeave={clear}>
          {ABOUT_MISSION.items.map((item, index) => (
            <Reveal
              key={item.key}
              className={`dh-about-card is-${stateOf(index)}`}
              index={index}
              {...bind(index)}
            >
              <span className="dh-about-card-icon">{item.icon}</span>
              <h3 className="dh-about-card-title">{item.title}</h3>
              <p className="dh-about-card-blurb">{item.blurb}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
