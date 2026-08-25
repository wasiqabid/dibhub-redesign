'use client';

import Link from 'next/link';

import { useHoverGroup } from '@/hooks/useHoverGroup';
import { SERVICE_LINKS } from '@/utils/navigation';
import {
  IconAiMl,
  IconClientSolutions,
  IconDevOps,
  IconMobile,
  IconQaAutomation,
  IconWebDevelopment,
} from '@/components/icons/Icons';

const ICONS = {
  'ai-ml': IconAiMl,
  'client-driven': IconClientSolutions,
  'web-development': IconWebDevelopment,
  mobile: IconMobile,
  devops: IconDevOps,
  'qa-automation': IconQaAutomation,
};

export default function ServicesMegaMenu({ open, onMouseEnter, onMouseLeave }) {
  const { bind, clear, stateOf } = useHoverGroup();

  return (
    <div
      className={`dh-mega${open ? ' is-open' : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={(event) => {
        clear();
        onMouseLeave(event);
      }}
    >
      {SERVICE_LINKS.map((service, index) => {
        const Icon = ICONS[service.key];
        return (
          <Link
            key={service.key}
            href={service.href}
            className={`dh-cap is-${stateOf(index)}`}
            tabIndex={open ? undefined : -1}
            {...bind(index)}
          >
            <span className="dh-cap-icon">
              <Icon />
            </span>
            <span className="dh-cap-text">
              <span className="dh-cap-title">{service.label}</span>
              <span className="dh-cap-blurb">{service.blurb}</span>
            </span>
          </Link>
        );
      })}
    </div>
  );
}
