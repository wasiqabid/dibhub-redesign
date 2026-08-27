import Image from 'next/image';

import { ButtonBadge } from '@/components/icons/Icons';
import Reveal from '@/components/motion/Reveal';

// Server Component shared by every case study: the product shot and the
// outbound link. The card's hover treatment is pure CSS, so nothing here needs
// to run on the client.
export default function ProjectShowcase({ content }) {
  return (
    <section id="showcase" className="dh-project-showcase" aria-label="Product showcase">
      <div className="dh-project-showcase-inner">
        <Reveal className="dh-project-shot" index={0}>
          <a
            href={content.href}
            target="_blank"
            rel="noopener noreferrer"
            className="dh-project-shot-link"
            aria-label={`Visit the ${content.name} website — ${content.alt}`}
          >
            <span className="dh-project-shot-frame">
              <Image
                className="dh-project-shot-image"
                src={content.image}
                alt={content.alt}
                width={content.width}
                height={content.height}
                sizes="(min-width: 1280px) 1168px, 100vw"
              />
            </span>
          </a>
        </Reveal>

        <Reveal className="dh-project-showcase-actions" index={1}>
          <a href={content.href} target="_blank" rel="noopener noreferrer" className="dh-button">
            {content.cta}
            <ButtonBadge />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
