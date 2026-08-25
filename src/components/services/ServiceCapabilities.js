'use client';

import { useHoverGroup } from '@/hooks/useHoverGroup';
import Reveal from '@/components/motion/Reveal';

// "What we build" — shared across service detail pages. The reference keeps the
// eyebrow outside the two-column head, so it sits full width above the heading.
export default function ServiceCapabilities({ eyebrow, title, lead, items }) {
  const { bind, clear, stateOf } = useHoverGroup();

  return (
    <section id="capabilities" className="dh-svc-capabilities" aria-labelledby="capabilities-title">
      <div className="dh-section-shell">
        <Reveal className="dh-eyebrow-row">
          <span className="dh-eyebrow">{eyebrow}</span>
        </Reveal>

        <Reveal className="dh-svc-capabilities-head">
          <h2 id="capabilities-title" className="dh-section-title">
            {title}
          </h2>
          <p className="dh-section-lead">{lead}</p>
        </Reveal>

        <div className="dh-svc-capability-grid" onMouseLeave={clear}>
          {items.map((item, index) => (
            <Reveal
              key={item.key}
              className={`dh-svc-capability is-${stateOf(index)}`}
              index={index}
              {...bind(index)}
            >
              <span className="dh-svc-capability-icon">{item.icon}</span>
              <h3 className="dh-svc-capability-title">{item.title}</h3>
              <p className="dh-svc-capability-blurb">{item.blurb}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
