'use client';

import Link from 'next/link';

import { useHoverGroup } from '@/hooks/useHoverGroup';
import { ButtonBadge } from '@/components/icons/Icons';
import Reveal from '@/components/motion/Reveal';
import WorkCard from '@/components/portfolio/WorkCard';
import { FEATURED_PROJECTS } from '@/components/portfolio/projects';

export default function Portfolio() {
  const { bind, clear, stateOf } = useHoverGroup();

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
          {FEATURED_PROJECTS.map((project, index) => (
            <WorkCard
              key={project.key}
              project={project}
              index={index}
              state={stateOf(index)}
              bind={bind(index)}
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
