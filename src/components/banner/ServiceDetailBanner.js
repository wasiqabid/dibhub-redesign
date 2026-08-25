'use client';

import Link from 'next/link';

import { usePointerSpotlight } from '@/hooks/usePointerSpotlight';
import Drift from '@/components/motion/Drift';
import Rise from '@/components/motion/Rise';
import WordReveal from '@/components/motion/WordReveal';

// Shared hero for every service detail page. Layout is identical across them;
// only the copy differs, so each page supplies its own content.
export default function ServiceDetailBanner({ label, headline, lead, stack, screenLabel }) {
  const { hostRef, spotRef, spotlightProps } = usePointerSpotlight();

  return (
    <section
      id="top"
      ref={hostRef}
      data-hero-host=""
      className="dh-page-hero"
      aria-label={screenLabel}
      {...spotlightProps}
    >
      <div className="dh-page-hero-dots" />
      <Drift className="dh-hero-glow" />
      <div ref={spotRef} className="dh-spotlight" />
      <div className="dh-hero-rule" />

      <div className="dh-page-hero-inner dh-svc-hero-inner">
        <Rise as="nav" className="dh-breadcrumb" aria-label="Breadcrumb" duration={0.7}>
          <Link href="/services">Services</Link>
          <span aria-hidden="true">/</span>
          <span className="dh-breadcrumb-current">{label}</span>
        </Rise>

        <Rise className="dh-eyebrow-row dh-svc-hero-eyebrow" duration={0.7} delay={0.06}>
          <span className="dh-eyebrow dh-eyebrow--on-dark">{label}</span>
        </Rise>

        <h1 className="dh-page-hero-title dh-svc-hero-title">
          <WordReveal segments={headline} caret />
        </h1>

        <Rise as="p" className="dh-page-hero-lead dh-svc-hero-lead" duration={0.8} delay={0.18}>
          {lead}
        </Rise>

        <Rise className="dh-stack-row" duration={0.8} delay={0.26}>
          {stack.map((item) => (
            <span key={item} className="dh-stack-pill">
              {item}
            </span>
          ))}
        </Rise>
      </div>
    </section>
  );
}
