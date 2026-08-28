import Reveal from '@/components/motion/Reveal';
import { TEAM_CULTURE } from '@/components/team/teamContent';

// The section's only heading is the eyebrow — what follows is a blockquote, not
// a heading — so the eyebrow carries the h2 rather than leaving the section
// unlabelled. Styling is unchanged.
export default function TeamCulture() {
  const { quote } = TEAM_CULTURE;

  return (
    <section id="culture" className="dh-team-culture" aria-labelledby="team-culture-title">
      <div className="dh-team-culture-inner">
        <Reveal className="dh-team-culture-row">
          <div className="dh-eyebrow-row">
            <h2 id="team-culture-title" className="dh-eyebrow">
              {TEAM_CULTURE.eyebrow}
            </h2>
          </div>
          <blockquote className="dh-team-culture-quote">
            {quote.before}
            <span className="dh-team-culture-accent">{quote.accent}</span>
            {quote.after}
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
