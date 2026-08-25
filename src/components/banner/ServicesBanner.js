'use client';

import { usePointerSpotlight } from '@/hooks/usePointerSpotlight';
import Drift from '@/components/motion/Drift';
import Rise from '@/components/motion/Rise';
import WordReveal from '@/components/motion/WordReveal';

const HEADLINE = [
  { text: 'Six disciplines. One accountable engineering' },
  { text: 'partner.', accent: true },
];

export default function ServicesBanner() {
  const { hostRef, spotRef, spotlightProps } = usePointerSpotlight();

  return (
    <section
      id="top"
      ref={hostRef}
      data-hero-host=""
      className="dh-page-hero"
      aria-label="Services header"
      {...spotlightProps}
    >
      <div className="dh-page-hero-dots" />
      <Drift className="dh-hero-glow" />
      <div ref={spotRef} className="dh-spotlight" />
      <div className="dh-hero-rule" />

      <div className="dh-page-hero-inner">
        <Rise className="dh-eyebrow-row" duration={0.7}>
          <span className="dh-eyebrow dh-eyebrow--on-dark">Our Services</span>
        </Rise>

        <h1 className="dh-page-hero-title">
          <WordReveal segments={HEADLINE} caret />
        </h1>

        <Rise as="p" className="dh-page-hero-lead" duration={0.8} delay={0.16}>
          More than a decade of delivery, with certified specialists in every discipline we offer.
          You get one team that owns architecture, build and operations — not a chain of vendors
          passing work between them.
        </Rise>
      </div>
    </section>
  );
}
