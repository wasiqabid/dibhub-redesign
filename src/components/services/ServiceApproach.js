'use client';

import { useHoverGroup } from '@/hooks/useHoverGroup';
import Reveal from '@/components/motion/Reveal';

// "Key Benefits" — shared across service detail pages. Top-aligned head because
// the right column carries two full paragraphs rather than a single line.
export default function ServiceApproach({ eyebrow, title, paragraphs, benefits }) {
  const { bind, clear, stateOf } = useHoverGroup();

  return (
    <section id="approach" className="dh-svc-approach" aria-labelledby="approach-title">
      <div className="dh-section-shell">
        <Reveal className="dh-svc-approach-head">
          <div>
            <div className="dh-eyebrow-row">
              <span className="dh-eyebrow">{eyebrow}</span>
            </div>
            <h2 id="approach-title" className="dh-section-title dh-svc-approach-title">
              {title}
            </h2>
          </div>
          <div className="dh-svc-approach-copy">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <div className="dh-svc-benefit-grid" onMouseLeave={clear}>
          {benefits.map((benefit, index) => (
            <Reveal
              key={benefit.key}
              className={`dh-svc-benefit is-${stateOf(index)}`}
              index={index}
              {...bind(index)}
            >
              <span className="dh-svc-benefit-icon">{benefit.icon}</span>
              <h3 className="dh-svc-benefit-title">{benefit.title}</h3>
              <p className="dh-svc-benefit-blurb">{benefit.blurb}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
