// Copy for /about, transcribed verbatim from the About reference.

import {
  IconAiMl,
  IconBolt,
  IconCuriosity,
  IconOperate,
  IconThirdParty,
  IconWebDevelopment,
} from '@/components/icons/Icons';

export const ABOUT_HERO = {
  eyebrow: 'About DibHub',
  headline: [{ text: 'Dedicated Innovative' }, { text: 'Brains Hub.', accent: true }],
  lead: 'The name is the brief. A team of engineers, designers and tech enthusiasts who take on the problems businesses cannot solve with off-the-shelf software — and stay accountable for what happens after launch.',
};

export const ABOUT_MISSION = {
  eyebrow: 'Our mission',
  // The teal phrase sits inside the quote, so it is split out rather than
  // wrapped in markup inside a string.
  quote: {
    before: 'At DibHub, we build intelligent, scalable, and ',
    accent: 'user-centric digital solutions',
    after: ' tailored to your business needs.',
  },
  paragraphs: [
    'We are a go-to partner for custom software: web and mobile applications, AI and machine learning integration, and DevOps workflows that hold up in production.',
    'The work is the same whether you are a startup shipping a first release or an established enterprise modernising what already runs the business — help you scale smarter, with a team that owns the outcome.',
  ],
  items: [
    {
      key: 'web-mobile',
      icon: <IconWebDevelopment size={23} />,
      title: 'Web and mobile products',
      blurb:
        'Progressive web apps and native mobile applications built on stacks your team can maintain after we hand over.',
    },
    {
      key: 'ai-ml',
      icon: <IconAiMl size={23} />,
      title: 'AI and ML integration',
      blurb: 'Models trained, deployed and monitored inside your product, not left in a notebook.',
    },
    {
      key: 'devops',
      icon: <IconOperate />,
      title: 'DevOps workflows',
      blurb: 'Pipelines, monitoring and infrastructure as code, so releases stop being events.',
    },
  ],
};

export const ABOUT_STATS = {
  eyebrow: 'By the numbers',
  items: [
    {
      key: 'years',
      value: '10+',
      label: 'Years delivering',
      note: 'A decade of shipped software behind every engagement.',
    },
    {
      key: 'disciplines',
      value: '6',
      label: 'Disciplines in-house',
      note: 'AI, web, mobile, DevOps, QA and client-driven delivery under one roof.',
    },
    {
      key: 'platforms',
      value: '5',
      label: 'Flagship platforms',
      note: 'Products live in grooming, healthcare, affiliate marketing and behavioral health.',
    },
    {
      key: 'clients',
      value: 'Startups to enterprise',
      label: 'Who we work with',
      note: 'The same senior team, whether it is a first release or a regulated rollout.',
    },
  ],
};

export const ABOUT_CULTURE = {
  eyebrow: 'How we work together',
  title: 'A team that likes the hard problems.',
  lead: 'Passionate developers, designers and tech enthusiasts — people who care how the thing is built, not just that it shipped.',
  items: [
    {
      key: 'creativity',
      icon: <IconBolt />,
      title: 'Creativity',
      blurb:
        'We would rather find the simpler idea than ship the obvious one. Every project starts with the question of what the user actually needs.',
    },
    {
      key: 'curiosity',
      icon: <IconCuriosity />,
      title: 'Curiosity',
      blurb:
        'Engineers here read the docs, take apart the problem, and ask about your business before writing code.',
    },
    {
      key: 'collaboration',
      icon: <IconThirdParty />,
      title: 'Collaboration',
      blurb:
        'Designers, developers and your team in the same conversation. Weekly demos, shared decisions, no black boxes.',
    },
  ],
};

export const ABOUT_TEAM = {
  eyebrow: 'The people',
  title: 'The engineers behind the work.',
  lead: 'Certified specialists in every discipline we offer, with the senior leads who will actually be on your project.',
  cta: { label: 'Meet the team', href: '/team' },
};
