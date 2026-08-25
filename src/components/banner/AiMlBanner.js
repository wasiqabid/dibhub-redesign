'use client';

import Link from 'next/link';

import { usePointerSpotlight } from '@/hooks/usePointerSpotlight';
import Drift from '@/components/motion/Drift';
import Rise from '@/components/motion/Rise';
import WordReveal from '@/components/motion/WordReveal';

const HEADLINE = [{ text: 'Machine learning that reaches' }, { text: 'production.', accent: true }];

const STACK = ['Python', 'TensorFlow', 'PyTorch', 'AWS SageMaker', 'Google AI'];

export default function AiMlBanner() {
  const { hostRef, spotRef, spotlightProps } = usePointerSpotlight();

  return (
    <section
      id="top"
      ref={hostRef}
      data-hero-host=""
      className="dh-page-hero"
      aria-label="AI/ML hero"
      {...spotlightProps}
    >
      <div className="dh-page-hero-dots" />
      <Drift className="dh-hero-glow" />
      <div ref={spotRef} className="dh-spotlight" />
      <div className="dh-hero-rule" />

      <div className="dh-page-hero-inner dh-ai-hero-inner">
        <Rise as="nav" className="dh-breadcrumb" aria-label="Breadcrumb" duration={0.7}>
          <Link href="/services">Services</Link>
          <span aria-hidden="true">/</span>
          <span className="dh-breadcrumb-current">AI &amp; Machine Learning</span>
        </Rise>

        <Rise className="dh-eyebrow-row dh-ai-hero-eyebrow" duration={0.7} delay={0.06}>
          <span className="dh-eyebrow dh-eyebrow--on-dark">AI &amp; Machine Learning</span>
        </Rise>

        <h1 className="dh-page-hero-title dh-ai-hero-title">
          <WordReveal segments={HEADLINE} caret />
        </h1>

        <Rise as="p" className="dh-page-hero-lead dh-ai-hero-lead" duration={0.8} delay={0.18}>
          We build natural language processing, computer vision, predictive analytics and
          recommendation systems that automate real workflows and put predictive insight in front of
          the people making decisions. Models are trained, evaluated, deployed and monitored — not
          handed over as a notebook.
        </Rise>

        <Rise className="dh-stack-row" duration={0.8} delay={0.26}>
          {STACK.map((item) => (
            <span key={item} className="dh-stack-pill">
              {item}
            </span>
          ))}
        </Rise>
      </div>
    </section>
  );
}
