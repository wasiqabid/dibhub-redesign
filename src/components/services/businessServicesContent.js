// Copy for /services/business-services, transcribed verbatim from the Client
// Driven Solutions reference. The route segment is this project's (§3); every
// label below is the design's own wording.

import {
  IconAccelerateGrowth,
  IconBoostEfficiency,
  IconClientSolutions,
  IconCollaboration,
  IconDigitalOnboarding,
  IconEnhanceSecurity,
  IconGlobalTranslations,
  IconInHouseTechs,
  IconNetworking,
  IconPortalsPayments,
  IconReduceCosts,
  IconWorkflowAutomation,
} from '@/components/icons/Icons';

export const BUSINESS_HERO = {
  screenLabel: 'Client solutions hero',
  label: 'Client Driven Solutions',
  headline: [{ text: 'Solutions built around your' }, { text: 'goals.', accent: true }],
  lead: 'End-to-end solutions — from digital onboarding to CRM, logistics, and customer engagement — tailored for modern B2B and B2C operations.',
  stack: ['React', 'Node.js', 'MongoDB', 'Cloud-native infrastructure'],
};

export const BUSINESS_CAPABILITIES = {
  eyebrow: 'What we build',
  title: 'Four kinds of engagement, one delivery standard.',
  lead: 'Each one starts from the operation you actually run today, and is scoped against your constraints rather than a template.',
  items: [
    {
      key: 'onboarding',
      icon: <IconDigitalOnboarding />,
      title: 'Digital Onboarding',
      blurb:
        'Sign-up, verification and account setup flows that get customers from first contact to active without a paper trail.',
    },
    {
      key: 'crm',
      // Same glyph as the mega-menu entry, at the capability card's size.
      icon: <IconClientSolutions size={23} />,
      title: 'CRM & Order Management',
      blurb:
        'CRM integration and order pipelines connected to the systems your sales and fulfilment teams already work in.',
    },
    {
      key: 'workflow',
      icon: <IconWorkflowAutomation />,
      title: 'Workflow Automation',
      blurb:
        'Approvals, handoffs and logistics steps automated end to end, with multi-channel communication built into each stage.',
    },
    {
      key: 'portals',
      icon: <IconPortalsPayments />,
      title: 'Portals & Payments',
      blurb:
        'Self-serve portals and secure payment flows that move routine requests off your support queue entirely.',
    },
  ],
};

export const BUSINESS_APPROACH = {
  eyebrow: 'Key Benefits',
  title: 'We connect systems, people and workflows.',
  paragraphs: [
    'We connect systems, people, and workflows to simplify operations and scale impact — covering CRM integration, order management, multi-channel communication, workflow automation, self-serve portals, and secure payment flows, for SaaS, retail, logistics, and finance clients.',
    'In practice that means mapping the process before writing code, integrating with the tools your teams refuse to give up, and replacing only the steps that genuinely cost you time.',
  ],
  benefits: [
    {
      key: 'growth',
      icon: <IconAccelerateGrowth />,
      title: 'Accelerate Growth',
      blurb: 'Faster onboarding and fewer drop-offs across the journeys that bring revenue in.',
    },
    {
      key: 'efficiency',
      icon: <IconBoostEfficiency />,
      title: 'Boost Efficiency',
      blurb: 'Manual handoffs and re-entry replaced by workflows that move themselves along.',
    },
    {
      key: 'costs',
      icon: <IconReduceCosts />,
      title: 'Reduce Costs',
      blurb:
        'Self-serve portals absorb routine requests, so support headcount scales with value, not volume.',
    },
    {
      key: 'security',
      icon: <IconEnhanceSecurity />,
      title: 'Enhance Security',
      blurb:
        'Secure payment flows, audited access and compliant data handling across every integration.',
    },
    {
      key: 'collaboration',
      icon: <IconCollaboration />,
      title: 'Collaboration',
      blurb:
        'Sales, operations and support work from one record instead of four disconnected tools.',
    },
    {
      key: 'networking',
      icon: <IconNetworking />,
      title: 'Networking',
      blurb:
        'CRM, ERP, payment and messaging systems integrated so data moves without a spreadsheet.',
    },
    {
      key: 'translations',
      icon: <IconGlobalTranslations />,
      title: 'Global Translations',
      blurb:
        'Multi-channel, multi-currency and multi-language flows for the regions you operate in.',
    },
    {
      key: 'in-house',
      icon: <IconInHouseTechs />,
      title: 'In-house Techs',
      blurb:
        'A permanent delivery team, not subcontractors — the same people who scoped it build it.',
    },
  ],
};
