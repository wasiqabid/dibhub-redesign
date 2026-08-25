'use client';

import Link from 'next/link';

import { usePointerSpotlight } from '@/hooks/usePointerSpotlight';
import { ArrowGlyph } from '@/components/icons/Icons';
import Reveal from '@/components/motion/Reveal';

export default function Cta() {
  const { hostRef, spotRef, spotlightProps } = usePointerSpotlight();

  return (
    <section
      id="contact"
      ref={hostRef}
      className="dh-cta"
      aria-labelledby="cta-title"
      {...spotlightProps}
    >
      <div className="dh-cta-dots" />
      <div ref={spotRef} className="dh-spotlight dh-spotlight--light" />

      <div className="dh-cta-inner">
        <Reveal index={0}>
          <div className="dh-eyebrow-row">
            <span className="dh-eyebrow">Get started</span>
          </div>
          <h2 id="cta-title" className="dh-section-title">
            Book a free consultation.
          </h2>
          <p className="dh-cta-lead">
            Thirty minutes with an engineer, not a salesperson. Bring the problem — you&#39;ll leave
            with an honest read on scope, approach and cost.
          </p>
        </Reveal>

        <Reveal className="dh-cta-actions" index={1}>
          <Link href="/contact" className="dh-button">
            Schedule now
            <ArrowGlyph size="md" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
