// Copy for /services/web-development, transcribed verbatim from the Web
// Development reference.

import {
  IconAccelerateGrowth,
  IconApiBackend,
  IconBoostEfficiency,
  IconCollaboration,
  IconEnhanceSecurity,
  IconGlobalTranslations,
  IconInHouseTechs,
  IconInternalDashboard,
  IconMarketingSite,
  IconNetworking,
  IconReduceCosts,
  IconSaasPlatform,
} from '@/components/icons/Icons';

export const WEB_DEV_HERO = {
  screenLabel: 'Web dev hero',
  label: 'Web Development',
  headline: [{ text: 'Web development that turns ideas into' }, { text: 'impact.', accent: true }],
  lead: 'We build modern, scalable websites and applications using React, TypeScript, MongoDB, and other cutting-edge technologies, from landing pages to full SaaS platforms.',
  stack: ['MERN stack', 'Next.js', 'TypeScript', 'NestJS', 'MongoDB', 'MySQL'],
};

export const WEB_DEV_CAPABILITIES = {
  eyebrow: 'What we build',
  title: 'Four kinds of build, one delivery standard.',
  lead: 'From a single marketing page to a multi-tenant platform, the same engineering standards apply — typed code, tested paths, measured performance.',
  items: [
    {
      key: 'marketing',
      icon: <IconMarketingSite />,
      title: 'Marketing Sites & Landing Pages',
      blurb:
        'Next.js sites that render fast and rank, with a CMS your marketing team can edit without filing a ticket.',
    },
    {
      key: 'saas',
      icon: <IconSaasPlatform />,
      title: 'SaaS Platforms',
      blurb:
        'Multi-tenant products with authentication, billing, roles and admin tooling built in from the first sprint rather than retrofitted.',
    },
    {
      key: 'api',
      icon: <IconApiBackend />,
      title: 'APIs & Backends',
      blurb:
        'NestJS and Node services over MongoDB or MySQL, with documented contracts, indexed queries and migrations that run cleanly.',
    },
    {
      key: 'internal',
      icon: <IconInternalDashboard />,
      title: 'Internal Tools & Dashboards',
      blurb:
        'Operations consoles and reporting interfaces that replace the spreadsheets your teams are currently maintaining by hand.',
    },
  ],
};

export const WEB_DEV_APPROACH = {
  eyebrow: 'Key Benefits',
  title: 'Performant frontends, robust backends.',
  paragraphs: [
    'We engineer performant frontends paired with robust backends, supporting startups through enterprises with an agile delivery model backed by CI/CD pipelines and strong database practices.',
    'In practice that means typed code from the database schema up to the UI, a pipeline that tests and ships every merge, and a data layer designed for the queries your product actually runs — so the platform still holds up three years and ten features later.',
  ],
  benefits: [
    {
      key: 'growth',
      icon: <IconAccelerateGrowth />,
      title: 'Accelerate Growth',
      blurb: 'Faster pages and clearer flows that convert more of the traffic you already pay for.',
    },
    {
      key: 'efficiency',
      icon: <IconBoostEfficiency />,
      title: 'Boost Efficiency',
      blurb: 'CI/CD pipelines that test and release on merge, so shipping stops being an event.',
    },
    {
      key: 'costs',
      icon: <IconReduceCosts />,
      title: 'Reduce Costs',
      blurb: 'Typed, tested code and sane hosting choices that keep maintenance off your run rate.',
    },
    {
      key: 'security',
      icon: <IconEnhanceSecurity />,
      title: 'Enhance Security',
      blurb: 'Auth, roles and dependency hygiene handled properly, deployed inside your own cloud.',
    },
    {
      key: 'collaboration',
      icon: <IconCollaboration />,
      title: 'Collaboration',
      blurb: 'Your team and ours share one repo, one board and one review cycle from day one.',
    },
    {
      key: 'networking',
      icon: <IconNetworking />,
      title: 'Networking',
      blurb:
        'Documented APIs and integrations that connect the platform to the tools you already run.',
    },
    {
      key: 'translations',
      icon: <IconGlobalTranslations />,
      title: 'Global Translations',
      blurb: 'Internationalisation and locale routing built in, for the markets you sell in.',
    },
    {
      key: 'in-house',
      icon: <IconInHouseTechs />,
      title: 'In-house Techs',
      blurb:
        'A permanent engineering team, not subcontractors — the same people stay through handover.',
    },
  ],
};
