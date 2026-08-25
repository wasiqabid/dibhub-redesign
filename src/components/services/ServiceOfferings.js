'use client';

import Link from 'next/link';

import { useHoverGroup } from '@/hooks/useHoverGroup';
import {
  IconAiMl,
  IconClientSolutions,
  IconDevOps,
  IconMobile,
  IconQaAutomation,
  IconWebDevelopment,
} from '@/components/icons/Icons';
import Reveal from '@/components/motion/Reveal';
import { SERVICE_OFFERINGS } from '@/components/services/offerings';

const ICONS = {
  ai: IconAiMl,
  web: IconWebDevelopment,
  mobile: IconMobile,
  devops: IconDevOps,
  qa: IconQaAutomation,
  client: IconClientSolutions,
};

export default function ServiceOfferings() {
  const { bind, clear, stateOf } = useHoverGroup();

  return (
    <section id="offerings" className="dh-offerings" aria-labelledby="offerings-title">
      <div className="dh-section-shell">
        <Reveal className="dh-offerings-head">
          <div>
            <div className="dh-eyebrow-row">
              <span className="dh-eyebrow">What we do</span>
            </div>
            <h2 id="offerings-title" className="dh-section-title">
              Every discipline, staffed by specialists.
            </h2>
          </div>
          <p className="dh-section-lead">
            Each service runs with its own standards and senior leads. Engage one of them, or the
            full stack on a single delivery cadence.
          </p>
        </Reveal>

        <div className="dh-offerings-grid" onMouseLeave={clear}>
          {SERVICE_OFFERINGS.map((service, index) => {
            const Icon = ICONS[service.key];
            return (
              <Reveal
                key={service.key}
                id={service.anchor}
                className={`dh-offering is-${stateOf(index)}`}
                index={index}
                {...bind(index)}
              >
                <span className="dh-offering-icon">
                  <Icon size={23} />
                </span>
                <h3 className="dh-offering-title">
                  {/* Stretched anchor makes the whole card the link, as in the source. */}
                  <Link href={service.href} className="dh-offering-link">
                    {service.title}
                  </Link>
                </h3>
                <p className="dh-offering-blurb">{service.blurb}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
