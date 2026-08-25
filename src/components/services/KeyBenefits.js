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
import { KEY_BENEFITS } from '@/components/services/benefits';

const ICONS = {
  growth: IconAccelerateGrowth,
  efficiency: IconBoostEfficiency,
  collaboration: IconCollaboration,
  costs: IconReduceCosts,
  networking: IconNetworking,
  translations: IconGlobalTranslations,
  security: IconEnhanceSecurity,
  'in-house': IconInHouseTechs,
};

export default function KeyBenefits() {
  const { bind, clear, stateOf } = useHoverGroup();

  return (
    <section id="benefits" className="dh-benefits" aria-labelledby="benefits-title">
      <div className="dh-section-shell">
        <Reveal className="dh-benefits-head">
          <div>
            <div className="dh-eyebrow-row">
              <span className="dh-eyebrow">Key Benefits</span>
            </div>
            <h2 id="benefits-title" className="dh-section-title">
              What working with us gives you.
            </h2>
          </div>
          <p className="dh-benefits-lead">
            The outcomes our clients come back for, across every service we deliver.
          </p>
        </Reveal>

        <div className="dh-benefits-grid" onMouseLeave={clear}>
          {KEY_BENEFITS.map((benefit, index) => {
            const Icon = ICONS[benefit.key];
            return (
              <Reveal
                key={benefit.key}
                className={`dh-benefit is-${stateOf(index)}`}
                index={index}
                {...bind(index)}
              >
                <span className="dh-benefit-icon">
                  <Icon />
                </span>
                <h3 className="dh-benefit-title">{benefit.title}</h3>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
