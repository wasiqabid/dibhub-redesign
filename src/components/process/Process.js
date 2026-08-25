'use client';

import { useHoverGroup } from '@/hooks/useHoverGroup';
import { IconBuild, IconDesign, IconDiscover, IconOperate } from '@/components/icons/Icons';
import Reveal from '@/components/motion/Reveal';
import { PROCESS_STEPS } from '@/components/process/processSteps';

const ICONS = {
  discover: IconDiscover,
  design: IconDesign,
  build: IconBuild,
  operate: IconOperate,
};

export default function Process() {
  const { bind, clear, stateOf } = useHoverGroup();

  return (
    <section id="process" className="dh-process" aria-labelledby="process-title">
      <div className="dh-section-shell">
        <Reveal className="dh-process-head">
          <div>
            <div className="dh-eyebrow-row">
              <span className="dh-eyebrow">Our Approach</span>
            </div>
            <h2 id="process-title" className="dh-section-title">
              A process you can plan a quarter around.
            </h2>
          </div>
          <p className="dh-process-lead">
            Fixed cadence, visible progress, no surprises at the end. You see working software from
            the second week, not a status deck.
          </p>
        </Reveal>

        <div className="dh-process-grid" onMouseLeave={clear}>
          {PROCESS_STEPS.map((step, index) => {
            const Icon = ICONS[step.key];
            const isLast = index === PROCESS_STEPS.length - 1;

            return (
              <Reveal
                key={step.key}
                className={`dh-step is-${stateOf(index)}`}
                index={index}
                {...bind(index)}
              >
                <div className="dh-step-icon">
                  <Icon />
                </div>
                {isLast ? null : (
                  <span className="dh-step-arrow" aria-hidden="true">
                    <span className="dh-step-arrow-head" />
                  </span>
                )}
                <h3 className="dh-step-title">{step.title}</h3>
                <p className="dh-step-blurb">{step.blurb}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
