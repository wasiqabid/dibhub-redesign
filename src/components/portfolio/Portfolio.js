'use client';

import Link from 'next/link';

import { useHoverGroup } from '@/hooks/useHoverGroup';
import { ButtonBadge } from '@/components/icons/Icons';
import Reveal from '@/components/motion/Reveal';
import WorkCard from '@/components/portfolio/WorkCard';
import { PROJECTS } from '@/components/portfolio/projects';

// The grid is designed for exactly four cards. The slice is a guard, not a
// feature: if a fifth project is ever flagged `featured` this silently drops
// it rather than breaking the layout — so if you are here because a project
// you flagged is not showing, decide which four are actually meant to be
// featured instead of raising the cap.
const FEATURED_LIMIT = 4;

export default function Portfolio() {
  const { bind, clear, stateOf } = useHoverGroup();
  const featured = PROJECTS.filter((project) => project.featured).slice(0, FEATURED_LIMIT);

  return (
    <section id="work" className="dh-work" aria-labelledby="work-title">
      <div className="dh-section-shell">
        <Reveal className="dh-work-head">
          <div>
            <div className="dh-eyebrow-row">
              <span className="dh-eyebrow">Featured Portfolio</span>
            </div>
            <h2 id="work-title" className="dh-section-title">
              Products in the hands of real users.
            </h2>
          </div>
        </Reveal>

        <div className="dh-work-grid" onMouseLeave={clear}>
          {featured.map((project, index) => (
            <WorkCard
              key={project.key}
              project={project}
              index={index}
              state={stateOf(index)}
              bind={bind(index)}
              // auto-fit keeps this one column until ~900px.
              sizes="(min-width: 1280px) 570px, (min-width: 900px) 45vw, 100vw"
            />
          ))}
        </div>

        <Reveal className="dh-work-footer">
          <Link href="/portfolio" className="dh-button">
            All projects
            <ButtonBadge />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
