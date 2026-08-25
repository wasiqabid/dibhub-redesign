// Copy for /services/mobile-application, transcribed verbatim from the Mobile
// Applications reference.

import {
  IconAccelerateGrowth,
  IconApiIntegration,
  IconBoostEfficiency,
  IconCollaboration,
  IconCrossPlatform,
  IconEnhanceSecurity,
  IconGlobalTranslations,
  IconInHouseTechs,
  IconNetworking,
  IconReduceCosts,
  IconStoreRelease,
} from '@/components/icons/Icons';

export const MOBILE_HERO = {
  screenLabel: 'Mobile apps hero',
  label: 'Mobile Applications',
  headline: [{ text: 'Apps that move with your' }, { text: 'users.', accent: true }],
  lead: 'We build high-performance mobile apps using React Native, delivering smooth cross-platform experiences for both iOS and Android.',
  stack: ['React Native', 'ReactJS', 'CI/CD pipelines', 'Automated testing'],
};

export const MOBILE_CAPABILITIES = {
  eyebrow: 'What we build',
  title: 'Four kinds of app, one delivery standard.',
  lead: 'From a first MVP to a shipped enterprise platform, the same standards apply — profiled rendering, tested flows, and releases that pass store review first time.',
  items: [
    {
      key: 'cross-platform',
      icon: <IconCrossPlatform />,
      title: 'Cross-Platform Apps',
      blurb:
        'One React Native codebase serving iOS and Android, with native modules where a platform genuinely needs them.',
    },
    {
      key: 'mvp',
      icon: <IconBoostEfficiency />,
      title: 'MVP Builds',
      blurb:
        'A shippable first version in weeks, scoped to the flows that prove the idea and built to extend rather than replace.',
    },
    {
      key: 'api',
      icon: <IconApiIntegration />,
      title: 'API Integration',
      blurb:
        'Secure API layers with token handling, offline caching and retry logic, so the app stays usable on a weak connection.',
    },
    {
      key: 'release',
      icon: <IconStoreRelease />,
      title: 'Release & Store Delivery',
      blurb:
        'Signed builds, staged rollouts and crash reporting through CI/CD, plus the App Store and Play Store submissions themselves.',
    },
  ],
};

export const MOBILE_APPROACH = {
  eyebrow: 'Key Benefits',
  title: 'Smooth on device, solid under the surface.',
  paragraphs: [
    'We focus on optimized UI rendering, solid state management, and secure API integrations, serving everyone from startups building an MVP to enterprises deploying full-scale platforms.',
    'In practice that means profiling every screen against real devices rather than a simulator, keeping state predictable as the app grows, and treating each release as an automated pipeline instead of a manual upload.',
  ],
  benefits: [
    {
      key: 'growth',
      icon: <IconAccelerateGrowth />,
      title: 'Accelerate Growth',
      blurb: 'Faster screens and clearer flows that keep more of the users you already acquired.',
    },
    {
      key: 'efficiency',
      icon: <IconBoostEfficiency />,
      title: 'Boost Efficiency',
      blurb: 'Automated tests and CI/CD builds, so a store release takes an afternoon, not a week.',
    },
    {
      key: 'costs',
      icon: <IconReduceCosts />,
      title: 'Reduce Costs',
      blurb: 'One codebase for both platforms, so you are not funding two separate app teams.',
    },
    {
      key: 'security',
      icon: <IconEnhanceSecurity />,
      title: 'Enhance Security',
      blurb:
        'Encrypted storage, certificate pinning and dependency hygiene as standard, not extras.',
    },
    {
      key: 'collaboration',
      icon: <IconCollaboration />,
      title: 'Collaboration',
      blurb: 'Your team and ours share one repo, one board and one release cycle from day one.',
    },
    {
      key: 'networking',
      icon: <IconNetworking />,
      title: 'Networking',
      blurb:
        'Secure integrations with the backends, payment and identity providers you already use.',
    },
    {
      key: 'translations',
      icon: <IconGlobalTranslations />,
      title: 'Global Translations',
      blurb:
        'Localisation and right-to-left support built in, for every store region you publish to.',
    },
    {
      key: 'in-house',
      icon: <IconInHouseTechs />,
      title: 'In-house Techs',
      blurb: 'A permanent mobile team, not subcontractors — the same people stay through handover.',
    },
  ],
};
