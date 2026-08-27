'use client';

import { useHoverGroup } from '@/hooks/useHoverGroup';
import Reveal from '@/components/motion/Reveal';
import WorkCard from '@/components/portfolio/WorkCard';
import { BARBR_MORE_WORK } from '@/components/portfolio/barbrContent';
import { PROJECTS } from '@/components/portfolio/projects';

// These are other projects' preview cards, not this page's content, so they come
// from the shared project data with its listing copy folded in — the same cards
// the /portfolio listing renders. The reference shows the next two projects in
// listing order after this one.
const MORE_WORK_LIMIT = 2;

const OTHER_PROJECTS = PROJECTS.map((project) => ({ ...project, ...project.listing }))
  .filter((project) => project.key !== 'barbr')
  .sort((a, b) => a.order - b.order)
  .slice(0, MORE_WORK_LIMIT);

export default function ProjectMoreWork() {
  const { bind, clear, stateOf } = useHoverGroup();

  return (
    <section id="more-work" className="dh-project-more" aria-labelledby="project-more-title">
      <div className="dh-section-shell dh-project-more-shell">
        <Reveal className="dh-eyebrow-row dh-project-more-eyebrow-row">
          <span className="dh-eyebrow">{BARBR_MORE_WORK.eyebrow}</span>
        </Reveal>

        <Reveal className="dh-project-more-head">
          <h2 id="project-more-title" className="dh-section-title dh-project-more-title">
            {BARBR_MORE_WORK.title}
          </h2>
          <p className="dh-project-more-lead">{BARBR_MORE_WORK.lead}</p>
        </Reveal>

        <div className="dh-project-more-grid" onMouseLeave={clear}>
          {OTHER_PROJECTS.map((project, index) => (
            <WorkCard
              key={project.key}
              project={project}
              index={index}
              state={stateOf(index)}
              bind={bind(index)}
              ctaLabel="View Project"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
