import Link from 'next/link';

import { ButtonBadge } from '@/components/icons/Icons';
import Reveal from '@/components/motion/Reveal';
import { ABOUT_TEAM } from '@/components/about/aboutContent';

// Server Component: it only renders the shared Reveal wrapper, no client state.
export default function AboutTeamTeaser() {
  return (
    <section id="team" className="dh-about-team" aria-labelledby="about-team-title">
      <div className="dh-about-team-shell">
        <Reveal className="dh-about-team-card">
          <div>
            <div className="dh-eyebrow-row dh-about-team-eyebrow">
              <span className="dh-eyebrow">{ABOUT_TEAM.eyebrow}</span>
            </div>
            <h2 id="about-team-title" className="dh-about-team-title">
              {ABOUT_TEAM.title}
            </h2>
            <p className="dh-about-team-lead">{ABOUT_TEAM.lead}</p>
          </div>
          <div className="dh-about-team-actions">
            <Link href={ABOUT_TEAM.cta.href} className="dh-button">
              {ABOUT_TEAM.cta.label}
              <ButtonBadge />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
