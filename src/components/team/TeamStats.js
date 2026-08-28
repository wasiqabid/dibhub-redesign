'use client';

import { useHoverGroup } from '@/hooks/useHoverGroup';
import Reveal from '@/components/motion/Reveal';
import { TEAM_STATS } from '@/components/team/teamContent';

// This section has no visible heading, so it takes an aria-label from the
// design's own screen label.
export default function TeamStats() {
  const { bind, clear, stateOf } = useHoverGroup();

  return (
    <section id="numbers" className="dh-team-stats" aria-label="Team stats">
      <div className="dh-team-stats-dots" />

      <div className="dh-team-stats-inner" onMouseLeave={clear}>
        <div className="dh-team-stats-grid">
          {TEAM_STATS.map((stat, index) => (
            <Reveal
              key={stat.key}
              className={`dh-team-stat is-${stateOf(index)}`}
              index={index}
              {...bind(index)}
            >
              <span className="dh-team-stat-num">{stat.number}</span>
              <span className="dh-team-stat-label">{stat.label}</span>
              <span className="dh-team-stat-blurb">{stat.blurb}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
