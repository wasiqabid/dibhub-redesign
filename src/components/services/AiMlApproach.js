'use client';

import { useHoverGroup } from '@/hooks/useHoverGroup';
import {
  IconAccelerateGrowth,
  IconBoostEfficiency,
  IconCollaboration,
  IconEnhanceSecurity,
  IconGlobalTranslations,
  IconInHouseTechs,
  IconNetworking,
  IconReduceCosts,
} from '@/components/icons/Icons';
import Reveal from '@/components/motion/Reveal';
import { AI_ML_BENEFITS } from '@/components/services/aiMlBenefitItems';

const ICONS = {
  growth: IconAccelerateGrowth,
  efficiency: IconBoostEfficiency,
  costs: IconReduceCosts,
  security: IconEnhanceSecurity,
  collaboration: IconCollaboration,
  networking: IconNetworking,
  translations: IconGlobalTranslations,
  'in-house': IconInHouseTechs,
};

export default function AiMlApproach() {
  const { bind, clear, stateOf } = useHoverGroup();

  return (
    <section id="approach" className="dh-ai-approach" aria-labelledby="approach-title">
      <div className="dh-section-shell">
        <Reveal className="dh-ai-approach-head">
          <div>
            <div className="dh-eyebrow-row">
              <span className="dh-eyebrow">Key Benefits</span>
            </div>
            <h2 id="approach-title" className="dh-section-title dh-ai-approach-title">
              We start with the decision, not the model.
            </h2>
          </div>
          <div className="dh-ai-approach-copy">
            <p>
              Every engagement opens on the data you already hold and the decision you want changed.
              We audit the pipeline first — where the data lives, how clean it is, how often it
              moves — because that determines what a model can honestly do.
            </p>
            <p>
              From there our engineers own the full lifecycle: feature pipelines, training,
              evaluation against a documented baseline, deployment for real-time inference or
              large-scale batch, and monitoring for drift once it is live. Every model ships
              explainable, versioned, and retrainable as your data grows.
            </p>
          </div>
        </Reveal>

        <div className="dh-ai-benefit-grid" onMouseLeave={clear}>
          {AI_ML_BENEFITS.map((benefit, index) => {
            const Icon = ICONS[benefit.key];
            return (
              <Reveal
                key={benefit.key}
                className={`dh-ai-benefit is-${stateOf(index)}`}
                index={index}
                {...bind(index)}
              >
                <span className="dh-ai-benefit-icon">
                  <Icon />
                </span>
                <h3 className="dh-ai-benefit-title">{benefit.title}</h3>
                <p className="dh-ai-benefit-blurb">{benefit.blurb}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
