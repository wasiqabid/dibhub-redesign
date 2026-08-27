'use client';

import Link from 'next/link';

import { usePointerSpotlight } from '@/hooks/usePointerSpotlight';
import { ButtonBadge } from '@/components/icons/Icons';
import Reveal from '@/components/motion/Reveal';
import { ABOUT_CTA } from '@/components/about/aboutContent';

// The section shell matches the shared CTA exactly; only the button differs —
// this page uses the badge variant rather than the arrow rule.
export default function AboutCta() {
  const { hostRef, spotRef, spotlightProps } = usePointerSpotlight();

  return (
    <section
      id="contact"
      ref={hostRef}
      className="dh-cta"
      aria-labelledby="about-cta-title"
      {...spotlightProps}
    >
      <div className="dh-cta-dots" />
      <div ref={spotRef} className="dh-spotlight dh-spotlight--light" />

      <div className="dh-cta-inner">
        <Reveal index={0}>
          <div className="dh-eyebrow-row">
            <span className="dh-eyebrow">{ABOUT_CTA.eyebrow}</span>
          </div>
          <h2 id="about-cta-title" className="dh-section-title">
            {ABOUT_CTA.title}
          </h2>
          <p className="dh-cta-lead">{ABOUT_CTA.lead}</p>
        </Reveal>

        <Reveal className="dh-cta-actions" index={1}>
          <Link href={ABOUT_CTA.cta.href} className="dh-button">
            {ABOUT_CTA.cta.label}
            <ButtonBadge />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
