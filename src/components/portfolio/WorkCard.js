'use client';

import Image from 'next/image';
import Link from 'next/link';

import { ArrowGlyph } from '@/components/icons/Icons';
import Reveal from '@/components/motion/Reveal';

export default function WorkCard({ project, index, state, bind }) {
  return (
    <Reveal className={`dh-work-card is-${state}`} index={index} {...bind}>
      <div className="dh-work-frame">
        <Image
          className="dh-work-image"
          src={project.image}
          alt={`${project.title} — project screenshot`}
          width={project.width}
          height={project.height}
          sizes="(min-width: 900px) 45vw, 100vw"
        />
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
        </h3>

        <p className="dh-work-blurb">{project.blurb}</p>

        <span className="dh-work-cta">
          View project
          <ArrowGlyph size="sm" />
        </span>
      </div>
    </Reveal>
  );
}
