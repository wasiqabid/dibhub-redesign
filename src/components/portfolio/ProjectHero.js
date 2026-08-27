'use client';

import Link from 'next/link';

import { usePointerSpotlight } from '@/hooks/usePointerSpotlight';
import Drift from '@/components/motion/Drift';
import Rise from '@/components/motion/Rise';
import { BARBR_HERO } from '@/components/portfolio/barbrContent';

// The case-study hero reuses the shared dark inner-page shell but sets its
// headline at the full $fs-h1 step rather than the inner-page one, and opens
// with a breadcrumb — both straight from the reference.
export default function ProjectHero() {
  const { hostRef, spotRef, spotlightProps } = usePointerSpotlight();

  return (
    <section
      id="top"
      ref={hostRef}
      data-hero-host=""
      className="dh-page-hero"
      aria-label="Barbr header"
      {...spotlightProps}
    >
      <div className="dh-page-hero-dots" />
      <Drift className="dh-hero-glow" />
      <div ref={spotRef} className="dh-spotlight" />
      <div className="dh-hero-rule" />

      <div className="dh-page-hero-inner dh-project-hero-inner">
        <Rise as="nav" className="dh-project-crumbs" duration={0.7} aria-label="Breadcrumb">
          <Link href="/portfolio" className="dh-project-crumb-link">
            Portfolio
          </Link>
          <span aria-hidden="true">/</span>
          <span className="dh-project-crumb-current" aria-current="page">
            {BARBR_HERO.title}
          </span>
        </Rise>

        <Rise className="dh-eyebrow-row dh-project-eyebrow-row" duration={0.7} delay={0.06}>
          <span className="dh-eyebrow dh-eyebrow--on-dark">{BARBR_HERO.eyebrow}</span>
        </Rise>

        <h1 className="dh-project-title">
          <span className="dh-word--accent">{BARBR_HERO.title}</span>
        </h1>

        <Rise as="p" className="dh-project-lead" duration={0.8} delay={0.18}>
          {BARBR_HERO.lead}
        </Rise>

        <Rise className="dh-project-tech" duration={0.8} delay={0.26}>
          <span className="dh-project-tech-label">{BARBR_HERO.techLabel}</span>
          {BARBR_HERO.tech.map((item) => (
            <span key={item} className="dh-project-tech-pill">
              {item}
            </span>
          ))}
        </Rise>
      </div>
    </section>
  );
}
