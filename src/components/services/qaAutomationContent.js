// Copy for /services/qa-automation, transcribed verbatim from the QA
// Automation reference.

import {
  IconAccelerateGrowth,
  IconApiTesting,
  IconBoostEfficiency,
  IconCollaboration,
  IconEndToEndTesting,
  IconEnhanceSecurity,
  IconGlobalTranslations,
  IconInHouseTechs,
  IconIntegrationTesting,
  IconNetworking,
  IconReduceCosts,
  IconUnitTesting,
} from '@/components/icons/Icons';

export const QA_HERO = {
  screenLabel: 'QA hero',
  label: 'QA Automation',
  headline: [{ text: 'Quality that moves at the' }, { text: 'speed of development', accent: true }],
  lead: 'We deliver end-to-end test automation that accelerates releases, reduces bugs, and ensures exceptional quality across your digital products.',
  stack: ['Jest', 'Cypress', 'Selenium', 'CI/CD pipeline integration'],
};

export const QA_CAPABILITIES = {
  eyebrow: 'What we build',
  title: 'Four layers of testing, one quality standard.',
  lead: 'Coverage runs from a single function to a full user journey, and every suite reports back into the same pipeline.',
  items: [
    {
      key: 'unit',
      icon: <IconUnitTesting />,
      title: 'Unit Testing',
      blurb:
        'Jest suites written alongside the code, catching regressions in the logic layer before anything reaches a branch.',
    },
    {
      key: 'integration',
      icon: <IconIntegrationTesting />,
      title: 'Integration Testing',
      blurb:
        'Tests across module and service boundaries, where most defects actually hide, run on every merge.',
    },
    {
      key: 'api',
      icon: <IconApiTesting />,
      title: 'API Testing',
      blurb:
        'Contract, payload and error-path checks against your endpoints, so a schema change never breaks a client silently.',
    },
    {
      key: 'e2e',
      icon: <IconEndToEndTesting />,
      title: 'End-to-End Testing',
      blurb:
        'Cypress and Selenium journeys through the real interface across browsers, with detailed reporting and traceability.',
    },
  ],
};

export const QA_APPROACH = {
  eyebrow: 'Key Benefits',
  title: 'Quality built in, not bolted on at the end.',
  paragraphs: [
    'Quality isn’t a final checkpoint for us — it’s woven into every stage of development, with test coverage spanning unit, integration, API, and end-to-end testing, backed by detailed reporting and traceability.',
    'In practice that means suites that run automatically on every commit, failures that point straight at the offending change, and a coverage report your team can read without a QA translator.',
  ],
  benefits: [
    {
      key: 'growth',
      icon: <IconAccelerateGrowth />,
      title: 'Accelerate Growth',
      blurb: 'Confident releases ship on schedule instead of waiting on a manual regression pass.',
    },
    {
      key: 'efficiency',
      icon: <IconBoostEfficiency />,
      title: 'Boost Efficiency',
      blurb: 'Hours of manual clicking replaced by suites that run on every commit in minutes.',
    },
    {
      key: 'costs',
      icon: <IconReduceCosts />,
      title: 'Reduce Costs',
      blurb:
        'Defects caught in the pipeline cost a fraction of the same defect found in production.',
    },
    {
      key: 'security',
      icon: <IconEnhanceSecurity />,
      title: 'Enhance Security',
      blurb: 'Security and dependency checks run as part of the suite, not as an annual review.',
    },
    {
      key: 'collaboration',
      icon: <IconCollaboration />,
      title: 'Collaboration',
      blurb:
        'Developers, QA and product read the same test reports and the same definition of done.',
    },
    {
      key: 'networking',
      icon: <IconNetworking />,
      title: 'Networking',
      blurb:
        'Suites integrated with your CI/CD, issue tracker and reporting tools rather than run in isolation.',
    },
    {
      key: 'translations',
      icon: <IconGlobalTranslations />,
      title: 'Global Translations',
      blurb:
        'Cross-browser, cross-device and multi-locale runs covering every market you release in.',
    },
    {
      key: 'in-house',
      icon: <IconInHouseTechs />,
      title: 'In-house Techs',
      blurb:
        'A permanent QA team, not subcontractors — the same engineers maintain the suites they wrote.',
    },
  ],
};
