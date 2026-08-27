'use client';

import { usePointerSpotlight } from '@/hooks/usePointerSpotlight';
import Drift from '@/components/motion/Drift';
import Rise from '@/components/motion/Rise';
import { CONTACT_HERO } from '@/components/contact/contactContent';

// Unlike every other hero on the site, this headline does not type — the
// reference rises the whole h1 in, so there is no WordReveal or caret here.
export default function ContactBanner() {
  const { hostRef, spotRef, spotlightProps } = usePointerSpotlight();
  const { title } = CONTACT_HERO;

  return (
    <section
      id="top"
      ref={hostRef}
      data-hero-host=""
      className="dh-page-hero"
      aria-label="Contact header"
      {...spotlightProps}
    >
      <div className="dh-page-hero-dots" />
      <Drift className="dh-hero-glow" />
      <div ref={spotRef} className="dh-spotlight" />
      <div className="dh-hero-rule" />

      <div className="dh-page-hero-inner dh-contact-hero-inner">
        <Rise className="dh-eyebrow-row" duration={0.7}>
          <span className="dh-eyebrow dh-eyebrow--on-dark">{CONTACT_HERO.eyebrow}</span>
        </Rise>

        <Rise
          as="h1"
          className="dh-page-hero-title dh-contact-hero-title"
          duration={0.75}
          delay={0.08}
        >
          {title.before}
          <span className="dh-word--accent">{title.accent}</span>
          {title.after}
        </Rise>

        <Rise as="p" className="dh-page-hero-lead" duration={0.8} delay={0.16}>
          {CONTACT_HERO.lead}
        </Rise>
      </div>
    </section>
  );
}
