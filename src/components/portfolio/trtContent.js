// Copy for /portfolio/trt, transcribed verbatim from the Team Recovery Tech
// case study reference. This page is self-contained: the short blurb/tags in
// projects.js are the preview card only and are deliberately not reused here.

import {
  IconAppointments,
  IconAutomatedWorkflows,
  IconCheck,
  IconCollaboration,
  IconInternalDashboard,
  IconPrivacy,
  IconWhiteLabel,
} from '@/components/icons/Icons';

export const TRT_HERO = {
  eyebrow: 'Behavioral Health / Mobile App Platform',
  title: 'Team Recovery Tech',
  lead: 'Custom Mobile App Platform for Addiction Treatment Centers and Behavioral Health Providers.',
  techLabel: 'Tech stack',
  tech: [
    'React Native',
    'React.js',
    'Nest.js',
    'TypeScript',
    'AWS',
    'PostgreSQL',
    'HIPAA-compliant architecture',
  ],
};

export const TRT_SHOWCASE = {
  name: 'Team Recovery Tech',
  href: 'https://dibhub.com/team-recovery-tech',
  cta: 'Visit website',
  image: '/assets/images/case-trt-hero.webp',
  width: 1200,
  height: 900,
  alt: 'Team Recovery Tech alumni app screens',
};

export const TRT_STORY = {
  eyebrow: 'Challenge & Solution',
  title: 'Alumni follow-up on spreadsheets and phone calls.',
  lead: 'Three problems were limiting what centers could prove and sustain. Three capabilities replaced the manual work.',
  columns: [
    {
      key: 'challenge',
      label: 'The Challenge',
      items: [
        {
          key: 'manual-outreach',
          marker: '01',
          title: 'Manual, fragmented outreach',
          blurb:
            'Alumni follow-up ran on spreadsheets and phone calls, with no record of who had been reached or when.',
        },
        {
          key: 'no-tracking',
          marker: '02',
          title: 'No unified outcome tracking',
          blurb:
            'Centers could not prove clinical effectiveness to insurers without pulling numbers together by hand.',
        },
        {
          key: 'no-hipaa',
          marker: '03',
          title: 'No HIPAA-compliant tooling',
          blurb: 'Sensitive health data was moving through channels never designed to carry it.',
        },
      ],
    },
    {
      key: 'solution',
      label: 'The Solution',
      items: [
        {
          key: 'engagement',
          icon: <IconCheck size={13} strokeWidth={2.6} />,
          title: 'Automated alumni engagement',
          blurb:
            'Messaging and check-ins that run on their own, keeping alumni connected to the community after discharge.',
        },
        {
          key: 'reporting',
          icon: <IconCheck size={13} strokeWidth={2.6} />,
          title: 'Outcome tracking built for reporting',
          blurb:
            'Engagement and outcome data captured as it happens, ready to evidence effectiveness for reimbursement.',
        },
        {
          key: 'white-label',
          icon: <IconCheck size={13} strokeWidth={2.6} />,
          title: 'White-labeled, HIPAA-compliant platform',
          blurb:
            'A fully branded mobile app on HIPAA-compliant architecture, with communities live inside 90 days.',
        },
      ],
    },
  ],
};

export const TRT_OUTCOMES = {
  eyebrow: 'Highlights',
  title: 'What the platform changed.',
  lead: 'Six capabilities carrying alumni engagement and reporting that used to sit with clinical staff.',
  items: [
    {
      key: 'engagement',
      icon: <IconCollaboration />,
      title: 'Alumni Engagement Tools',
      blurb:
        'Messaging, check-ins and community features that keep alumni in contact long after discharge.',
    },
    {
      key: 'white-label',
      icon: <IconWhiteLabel />,
      title: 'White-Label Branding',
      blurb: 'The center’s own name, colours and identity throughout, on iOS and Android.',
    },
    {
      key: 'outcomes',
      icon: <IconInternalDashboard />,
      title: 'Outcome Tracking & Reporting',
      blurb:
        'Engagement and recovery outcomes recorded as they happen, exportable for insurers and boards.',
    },
    {
      key: 'hipaa',
      icon: <IconPrivacy />,
      title: 'HIPAA-Compliant Security',
      blurb:
        'Architecture, access control and audit trails built to handle protected health information.',
    },
    {
      key: 'scheduling',
      icon: <IconAppointments />,
      title: 'Appointment Scheduling',
      blurb:
        'Follow-up appointments booked and reminded in-app, without a phone call from the front desk.',
    },
    {
      key: 'workflows',
      icon: <IconAutomatedWorkflows />,
      title: 'Automated Workflows',
      blurb:
        'Outreach sequences and follow-ups run on schedule, freeing staff from the manual list.',
    },
  ],
};

export const TRT_MORE_WORK = {
  eyebrow: 'Other projects',
  title: 'More from our portfolio.',
  lead: 'Open any project for the brief, the approach and what changed for the client.',
};
