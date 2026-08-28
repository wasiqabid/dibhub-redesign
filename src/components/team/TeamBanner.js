'use client';

import { usePointerSpotlight } from '@/hooks/usePointerSpotlight';
import Drift from '@/components/motion/Drift';
import Rise from '@/components/motion/Rise';
import WordReveal from '@/components/motion/WordReveal';
import { TEAM_HERO } from '@/components/team/teamContent';

export default function TeamBanner() {
  const { hostRef, spotRef, spotlightProps } = usePointerSpotlight();

  return (
    <section
      id="top"
      ref={hostRef}
      data-hero-host=""
      className="dh-page-hero"
      aria-label="Team header"
      {...spotlightProps}
    >
      <div className="dh-page-hero-dots" />
      <Drift className="dh-hero-glow" />
      <div ref={spotRef} className="dh-spotlight" />
      <div className="dh-hero-rule" />

      <div className="dh-page-hero-inner">
        <Rise className="dh-eyebrow-row" duration={0.7}>
          <span className="dh-eyebrow dh-eyebrow--on-dark">{TEAM_HERO.eyebrow}</span>
        </Rise>

        <h1 className="dh-page-hero-title dh-team-hero-title">
          <WordReveal segments={TEAM_HERO.headline} caret />
        </h1>

        <Rise as="p" className="dh-page-hero-lead dh-team-hero-lead" duration={0.8} delay={0.16}>
          {TEAM_HERO.lead}
        </Rise>
      </div>
    </section>
  );
}
