'use client';

import { useHoverGroup } from '@/hooks/useHoverGroup';
import {
  IconComputerVision,
  IconNlp,
  IconPredictiveAnalytics,
  IconRecommendationEngines,
} from '@/components/icons/Icons';
import Reveal from '@/components/motion/Reveal';
import { AI_ML_CAPABILITIES } from '@/components/services/aiMlCapabilityItems';

const ICONS = {
  nlp: IconNlp,
  vision: IconComputerVision,
  predictive: IconPredictiveAnalytics,
  recommendation: IconRecommendationEngines,
};

export default function AiMlCapabilities() {
  const { bind, clear, stateOf } = useHoverGroup();

  return (
    <section id="capabilities" className="dh-ai-capabilities" aria-labelledby="capabilities-title">
      <div className="dh-section-shell">
        {/* The reference keeps this eyebrow outside the two-column head, so it
            sits full width above the heading rather than in the left column. */}
        <Reveal className="dh-eyebrow-row">
          <span className="dh-eyebrow">What we build</span>
        </Reveal>

        <Reveal className="dh-ai-capabilities-head">
          <h2 id="capabilities-title" className="dh-section-title">
            Four kinds of system, one delivery standard.
          </h2>
          <p className="dh-section-lead">
            Each one starts from a decision your business already makes by hand, and ends with a
            measurable baseline it has to beat.
          </p>
        </Reveal>

        <div className="dh-ai-capability-grid" onMouseLeave={clear}>
          {AI_ML_CAPABILITIES.map((capability, index) => {
            const Icon = ICONS[capability.key];
            return (
              <Reveal
                key={capability.key}
                className={`dh-ai-capability is-${stateOf(index)}`}
                index={index}
                {...bind(index)}
              >
                <span className="dh-ai-capability-icon">
                  <Icon />
                </span>
                <h3 className="dh-ai-capability-title">{capability.title}</h3>
                <p className="dh-ai-capability-blurb">{capability.blurb}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
