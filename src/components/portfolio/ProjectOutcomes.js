'use client';

import { useHoverGroup } from '@/hooks/useHoverGroup';
import Reveal from '@/components/motion/Reveal';

export default function ProjectOutcomes({ content, variant }) {
  const { bind, clear, stateOf } = useHoverGroup();

  return (
    <section
      id="outcomes"
      className={variant ? `dh-project-outcomes dh-project--${variant}` : 'dh-project-outcomes'}
      aria-labelledby="project-outcomes-title"
    >
      <div className="dh-section-shell">
        <Reveal className="dh-eyebrow-row dh-project-outcomes-eyebrow-row">
          <span className="dh-eyebrow">{content.eyebrow}</span>
        </Reveal>

        <Reveal className="dh-project-outcomes-head">
          <h2 id="project-outcomes-title" className="dh-section-title dh-project-outcomes-title">
            {content.title}
          </h2>
          <p className="dh-project-outcomes-lead">{content.lead}</p>
        </Reveal>

        <div className="dh-project-outcome-grid" onMouseLeave={clear}>
          {content.items.map((item, index) => (
            <Reveal
              key={item.key}
              className={`dh-project-outcome is-${stateOf(index)}`}
              index={index}
              {...bind(index)}
            >
              <span className="dh-project-outcome-icon">{item.icon}</span>
              <h3 className="dh-project-outcome-title">{item.title}</h3>
              <p className="dh-project-outcome-blurb">{item.blurb}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
