'use client';

import Image from 'next/image';
import Link from 'next/link';

import { ArrowGlyph } from '@/components/icons/Icons';
import Reveal from '@/components/motion/Reveal';

// `ctaLabel` differs by page — Home reads "View project", the Portfolio listing
// "View Project" — so it is a prop with Home's wording as the default rather
// than a second copy of this component.
export default function WorkCard({ project, index, state, bind, ctaLabel = 'View project' }) {
  return (
    <Reveal className={`dh-work-card is-${state}`} index={index} {...bind}>
      {/* The frame is always reserved, so a project still waiting on its
          screenshot keeps the same 4:3 block and card height as the rest and
          the image drops straight in later. Only the image is conditional. */}
      <div className="dh-work-frame">
        {project.image ? (
          <Image
            className="dh-work-image"
            src={project.image}
            alt={`${project.title} — project screenshot`}
            width={project.width}
            height={project.height}
            sizes="(min-width: 900px) 45vw, 100vw"
          />
        ) : null}
      </div>

      <div className="dh-work-body">
        <div className="dh-tag-row">
          {project.tags.map((tag) => (
            <span key={tag} className="dh-tag">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="dh-work-title">
          {/* The whole card is the click target; the anchor carries the a11y role
              and its stretched pseudo-element covers the card. */}
          <Link href={project.href} className="dh-work-link">
            {project.title}
          </Link>
          {project.titleNote ? (
            <span className="dh-work-title-note"> {project.titleNote}</span>
          ) : null}
        </h3>

        <p className="dh-work-blurb">{project.blurb}</p>

        <span className="dh-work-cta">
          {ctaLabel}
          <ArrowGlyph size="sm" />
        </span>
      </div>
    </Reveal>
  );
}
