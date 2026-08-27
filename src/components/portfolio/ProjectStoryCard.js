'use client';

import { useHoverGroup } from '@/hooks/useHoverGroup';
import Reveal from '@/components/motion/Reveal';

// The rows inside one column behave as their own hover group — the row under
// the cursor inverts to dark while its siblings blur — so the state lives here,
// per column, rather than across both cards.
export default function ProjectStoryCard({ column, index }) {
  const { bind, clear, stateOf } = useHoverGroup();

  return (
    <Reveal className="dh-project-story-card" index={index}>
      <div className="dh-project-story-head">
        <span className="dh-project-story-label">{column.label}</span>
        <span className="dh-project-story-rule" aria-hidden="true" />
      </div>

      <div className="dh-project-story-rows" onMouseLeave={clear}>
        {column.items.map((item, rowIndex) => (
          <div
            key={item.key}
            className={`dh-project-story-row is-${stateOf(rowIndex)}`}
            {...bind(rowIndex)}
          >
            <span className="dh-project-story-marker">{item.icon ?? item.marker}</span>
            <div>
              <h3 className="dh-project-story-row-title">{item.title}</h3>
              <p className="dh-project-story-row-blurb">{item.blurb}</p>
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
