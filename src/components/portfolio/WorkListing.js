'use client';

import { useHoverGroup } from '@/hooks/useHoverGroup';
import Reveal from '@/components/motion/Reveal';
import WorkCard from '@/components/portfolio/WorkCard';
import { PORTFOLIO_LISTING } from '@/components/portfolio/portfolioContent';
import { PROJECTS } from '@/components/portfolio/projects';

// Every project, in the reference's listing order rather than Home's, with each
// project's listing copy folded over its base copy.
const LISTED_PROJECTS = PROJECTS.map((project) => ({ ...project, ...project.listing })).sort(
  (a, b) => a.order - b.order
);

// The reference puts the last project on its own centred row at one column's
// width instead of letting it stretch across the grid.
const GRID_PROJECTS = LISTED_PROJECTS.filter((project) => !project.solo);
const SOLO_PROJECTS = LISTED_PROJECTS.filter((project) => project.solo);

export default function WorkListing() {
  const { bind, clear, stateOf } = useHoverGroup();

  // One hover group spans the grid and the solo row, so hovering the solo card
  // dims the four above it exactly as the reference does.
  const card = (project, index) => (
    <WorkCard
      key={project.key}
      project={project}
      index={index}
      state={stateOf(index)}
      bind={bind(index)}
      ctaLabel="View Project"
    />
  );

  return (
    <section id="projects" className="dh-work-listing" aria-labelledby="work-listing-title">
      <div className="dh-section-shell" onMouseLeave={clear}>
        <Reveal className="dh-work-listing-head">
          <div>
            <div className="dh-eyebrow-row">
              <span className="dh-eyebrow">{PORTFOLIO_LISTING.eyebrow}</span>
            </div>
            <h2 id="work-listing-title" className="dh-section-title">
              {PORTFOLIO_LISTING.title}
            </h2>
          </div>
          <div className="dh-work-listing-lead-cell">
            <p className="dh-work-listing-lead">{PORTFOLIO_LISTING.lead}</p>
          </div>
        </Reveal>

        <div className="dh-work-listing-grid">
          {GRID_PROJECTS.map((project, index) => card(project, index))}
        </div>

        {SOLO_PROJECTS.length > 0 ? (
          <div className="dh-work-listing-solo">
            {SOLO_PROJECTS.map((project, index) => card(project, GRID_PROJECTS.length + index))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
