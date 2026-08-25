'use client';

import { useHoverGroup } from '@/hooks/useHoverGroup';
import {
  ArrowGlyph,
  IconBolt,
  IconDataDiscovery,
  IconLayers,
  IconPrivacy,
  IconRisk,
  IconThirdParty,
} from '@/components/icons/Icons';
import Reveal from '@/components/motion/Reveal';
import { SERVICE_ITEMS } from '@/components/services/serviceItems';

const ICONS = {
  'fast-reliable': IconBolt,
  'discover-data': IconDataDiscovery,
  'enrich-data': IconLayers,
  'risk-management': IconRisk,
  'privacy-compliance': IconPrivacy,
  'third-party': IconThirdParty,
};

export default function Services() {
  const { bind, clear, stateOf } = useHoverGroup();

  return (
    <section id="services" className="dh-services" aria-labelledby="services-title">
      <div className="dh-section-shell">
        <Reveal className="dh-services-head">
          <div>
            <div className="dh-eyebrow-row">
              <span className="dh-eyebrow">Our Expertise</span>
            </div>
            <h2 id="services-title" className="dh-section-title">
              Innovative solutions from experts!
            </h2>
          </div>
          <p className="dh-section-lead">
            Offers a unified platform that fosters innovation while providing end-to-end data
            management. See how we help your team solve today&rsquo;s biggest challenges.
          </p>
        </Reveal>

        <div className="dh-services-grid" onMouseLeave={clear}>
          {SERVICE_ITEMS.map((item, index) => {
            const Icon = ICONS[item.key];
            return (
              <Reveal
                key={item.key}
                className={`dh-service-card is-${stateOf(index)}`}
                index={index}
                {...bind(index)}
              >
                <span className="dh-service-icon">
                  <Icon />
                </span>
                <h3 className="dh-service-title">{item.title}</h3>
                <p className="dh-service-blurb">{item.blurb}</p>
                <span className="dh-service-cta">
                  Service Details
                  <ArrowGlyph size="md" />
                </span>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
