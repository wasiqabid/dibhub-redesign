import Reveal from '@/components/motion/Reveal';
import ProjectStoryCard from '@/components/portfolio/ProjectStoryCard';

// Server Component shared by every case study: the challenge and solution
// columns. Only each column's row hover group needs the client, and that sits
// in ProjectStoryCard.
export default function ProjectStory({ content, variant }) {
  return (
    <section
      id="story"
      className={variant ? `dh-project-story dh-project--${variant}` : 'dh-project-story'}
      aria-labelledby="project-story-title"
    >
      <div className="dh-section-shell">
        <Reveal className="dh-eyebrow-row dh-project-story-eyebrow-row">
          <span className="dh-eyebrow">{content.eyebrow}</span>
        </Reveal>

        <Reveal className="dh-project-story-head-row">
          <h2 id="project-story-title" className="dh-section-title dh-project-story-title">
            {content.title}
          </h2>
          <p className="dh-project-story-lead">{content.lead}</p>
        </Reveal>

        <div className="dh-project-story-grid">
          {content.columns.map((column, index) => (
            <ProjectStoryCard key={column.key} column={column} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
