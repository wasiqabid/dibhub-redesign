'use client';

import { useHoverGroup } from '@/hooks/useHoverGroup';
import Reveal from '@/components/motion/Reveal';
import { ABOUT_CULTURE } from '@/components/about/aboutContent';

export default function AboutCulture() {
  const { bind, clear, stateOf } = useHoverGroup();

  return (
    <section id="culture" className="dh-about-culture" aria-labelledby="about-culture-title">
      <div className="dh-section-shell">
        <Reveal className="dh-eyebrow-row dh-about-eyebrow-row">
          <span className="dh-eyebrow">{ABOUT_CULTURE.eyebrow}</span>
        </Reveal>

        <Reveal className="dh-about-culture-head">
          <h2 id="about-culture-title" className="dh-about-culture-title">
            {ABOUT_CULTURE.title}
          </h2>
          <p className="dh-about-culture-lead">{ABOUT_CULTURE.lead}</p>
        </Reveal>

        <div className="dh-about-card-grid" onMouseLeave={clear}>
          {ABOUT_CULTURE.items.map((item, index) => (
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
