import Image from 'next/image';

import { ButtonBadge } from '@/components/icons/Icons';
import Reveal from '@/components/motion/Reveal';
import { BARBR_SHOWCASE } from '@/components/portfolio/barbrContent';

// Server Component: the product shot and the outbound link. The card's hover
// treatment is pure CSS, so nothing here needs to run on the client.
export default function ProjectShowcase() {
  return (
    <section id="showcase" className="dh-project-showcase" aria-label="Product showcase">
      <div className="dh-project-showcase-inner">
        <Reveal className="dh-project-shot" index={0}>
          <a
            href={BARBR_SHOWCASE.href}
            target="_blank"
            rel="noopener noreferrer"
            className="dh-project-shot-link"
            aria-label={`Visit the Barbr website — ${BARBR_SHOWCASE.alt}`}
          >
            <span className="dh-project-shot-frame">
              <Image
                className="dh-project-shot-image"
                src={BARBR_SHOWCASE.image}
                alt={BARBR_SHOWCASE.alt}
                width={BARBR_SHOWCASE.width}
                height={BARBR_SHOWCASE.height}
                sizes="(min-width: 1280px) 1168px, 100vw"
              />
            </span>
          </a>
        </Reveal>

        <Reveal className="dh-project-showcase-actions" index={1}>
          <a
            href={BARBR_SHOWCASE.href}
            target="_blank"
            rel="noopener noreferrer"
            className="dh-button"
          >
            {BARBR_SHOWCASE.cta}
            <ButtonBadge />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
