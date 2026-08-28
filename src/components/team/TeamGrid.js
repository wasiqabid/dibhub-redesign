'use client';

import { useHoverGroup } from '@/hooks/useHoverGroup';
import Reveal from '@/components/motion/Reveal';
import TeamMemberCard from '@/components/team/TeamMemberCard';
import { TEAM_GRID } from '@/components/team/teamContent';
import { TEAM_MEMBERS } from '@/components/team/teamMembers';

export default function TeamGrid() {
  const { bind, clear, stateOf } = useHoverGroup();

  return (
    <section id="people" className="dh-team-people" aria-labelledby="team-people-title">
      <div className="dh-team-people-inner">
        <Reveal className="dh-team-people-head">
          <div>
            <div className="dh-eyebrow-row dh-team-people-eyebrow-row">
              <span className="dh-eyebrow">{TEAM_GRID.eyebrow}</span>
            </div>
            <h2 id="team-people-title" className="dh-team-people-title">
              {TEAM_GRID.title}
            </h2>
          </div>
          <div className="dh-team-people-lead-cell">
            <p className="dh-team-people-lead">{TEAM_GRID.lead}</p>
          </div>
        </Reveal>

        <div className="dh-team-grid" onMouseLeave={clear}>
          {TEAM_MEMBERS.map((member, index) => (
            <TeamMemberCard
              key={member.key}
              member={member}
              index={index}
              state={stateOf(index)}
              bind={bind(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
