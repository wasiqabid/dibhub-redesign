import Reveal from '@/components/motion/Reveal';
import ProjectStoryCard from '@/components/portfolio/ProjectStoryCard';
import { BARBR_STORY } from '@/components/portfolio/barbrContent';

// Server Component: the challenge and solution columns. Only each column's row
// hover group needs the client, and that sits in ProjectStoryCard.
export default function ProjectStory() {
  return (
    <section id="story" className="dh-project-story" aria-labelledby="project-story-title">
      <div className="dh-section-shell">
        <Reveal className="dh-eyebrow-row dh-project-story-eyebrow-row">
          <span className="dh-eyebrow">{BARBR_STORY.eyebrow}</span>
        </Reveal>

        <Reveal className="dh-project-story-head-row">
          <h2 id="project-story-title" className="dh-section-title dh-project-story-title">
            {BARBR_STORY.title}
          </h2>
          <p className="dh-project-story-lead">{BARBR_STORY.lead}</p>
        </Reveal>

        <div className="dh-project-story-grid">
          {BARBR_STORY.columns.map((column, index) => (
            <ProjectStoryCard key={column.key} column={column} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
