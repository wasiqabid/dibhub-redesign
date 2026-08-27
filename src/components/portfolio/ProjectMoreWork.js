'use client';

import { useHoverGroup } from '@/hooks/useHoverGroup';
import Reveal from '@/components/motion/Reveal';
import WorkCard from '@/components/portfolio/WorkCard';
import { PROJECTS } from '@/components/portfolio/projects';

// These are other projects' preview cards, not this page's content, so they come
// from the shared project data with its listing copy folded in — the same cards
// the /portfolio listing renders.
//
// Most references show the first two projects in listing order once the current
// one is dropped, which is the default here. Team Recovery Tech is the
// exception — its reference skips All Treat — so a page can name its pair
// explicitly with `projectKeys` instead.
const MORE_WORK_LIMIT = 2;

function listed() {
  return PROJECTS.map((project) => ({ ...project, ...project.listing }));
}

function otherProjects(currentKey, projectKeys) {
  if (projectKeys) {
    return projectKeys
      .map((key) => listed().find((project) => project.key === key))
      .filter(Boolean);
  }

  return listed()
    .filter((project) => project.key !== currentKey)
    .sort((a, b) => a.order - b.order)
    .slice(0, MORE_WORK_LIMIT);
}

export default function ProjectMoreWork({ content, currentKey, projectKeys, variant }) {
  const { bind, clear, stateOf } = useHoverGroup();
  const projects = otherProjects(currentKey, projectKeys);

  return (
    <section
      id="more-work"
      className={variant ? `dh-project-more dh-project--${variant}` : 'dh-project-more'}
      aria-labelledby="project-more-title"
    >
      <div className="dh-section-shell dh-project-more-shell">
        <Reveal className="dh-eyebrow-row dh-project-more-eyebrow-row">
          <span className="dh-eyebrow">{content.eyebrow}</span>
        </Reveal>

        <Reveal className="dh-project-more-head">
          <h2 id="project-more-title" className="dh-section-title dh-project-more-title">
            {content.title}
          </h2>
          <p className="dh-project-more-lead">{content.lead}</p>
        </Reveal>

        <div className="dh-project-more-grid" onMouseLeave={clear}>
          {projects.map((project, index) => (
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
