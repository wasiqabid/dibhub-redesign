import Image from 'next/image';

import Reveal from '@/components/motion/Reveal';
import TeamSocials from '@/components/team/TeamSocials';
import { TEAM_LEAD } from '@/components/team/teamContent';

// Server Component: the card's hover lift is pure CSS, driven by hovering the
// panel around it, so nothing here runs on the client.
export default function TeamLeadership() {
  return (
    <section id="leadership" className="dh-team-lead" aria-labelledby="team-lead-name">
      <div className="dh-team-lead-inner">
        <Reveal className="dh-eyebrow-row dh-team-lead-eyebrow-row">
          <span className="dh-eyebrow">{TEAM_LEAD.eyebrow}</span>
        </Reveal>

        <Reveal className="dh-team-lead-panel">
          <div className="dh-team-lead-card">
            <Image
              className="dh-team-lead-photo"
              src={TEAM_LEAD.photo}
              alt={`${TEAM_LEAD.name}, ${TEAM_LEAD.role}`}
              width={676}
              height={500}
              sizes="(min-width: 900px) 340px, 100vw"
            />
          </div>

          <div>
            <span className="dh-team-lead-badge">{TEAM_LEAD.badge}</span>
            <h2 id="team-lead-name" className="dh-team-lead-name">
              {TEAM_LEAD.name}
            </h2>
            <p className="dh-team-lead-role">{TEAM_LEAD.role}</p>
            <p className="dh-team-lead-bio">{TEAM_LEAD.bio}</p>
            <TeamSocials
              socials={TEAM_LEAD.socials}
              name={TEAM_LEAD.name}
              className="dh-team-socials dh-team-socials--lead"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
