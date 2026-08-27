// Copy for /portfolio/all-treat, transcribed verbatim from the All Treat case
// study reference. This page is self-contained: the short blurb/tags in
// projects.js are the preview card only and are deliberately not reused here.

import {
  IconAppointments,
  IconAutomatedWorkflows,
  IconCheck,
  IconClientEngagement,
  IconInternalDashboard,
  IconScalableArchitecture,
  IconSmartPricing,
} from '@/components/icons/Icons';

export const ALL_TREAT_HERO = {
  eyebrow: 'Healthcare Technology',
  title: 'AllTreat',
  lead: 'All-in-One Patient Engagement, Marketing, and Practice Management Platform for Healthcare Providers.',
  techLabel: 'Tech stack',
  tech: ['React.js', 'TypeScript', 'MUI v5', 'Nest.js', 'MongoDB', 'Jenkins CI/CD'],
};

export const ALL_TREAT_SHOWCASE = {
  name: 'AllTreat',
  href: 'https://dibhub.com/all-treat',
  cta: 'Visit website',
  image: '/assets/images/portfolio/AllTreatPortfolio.png',
  width: 1888,
  height: 958,
  alt: 'The Treat homepage, headlined “Unify Your Practice. Multiply Your Growth.”',
};

export const ALL_TREAT_STORY = {
  eyebrow: 'Challenge & Solution',
  title: 'Four tools, one clinic, no clear picture.',
  lead: 'Three problems were pulling clinics apart. Three capabilities put the practice back in one place.',
  columns: [
    {
      key: 'challenge',
      label: 'The Challenge',
      items: [
        {
          key: 'fragmented',
          marker: '01',
          title: 'Fragmented systems',
          blurb:
            'Booking, reminders, payments and marketing each lived in a different tool, and none of them talked to the others.',
        },
        {
          key: 'no-data',
          marker: '02',
          title: 'No real-time performance data',
          blurb:
            'Owners had no live read on bookings, revenue or campaign results — only what could be assembled after the fact.',
        },
        {
          key: 'cost-confusion',
          marker: '03',
          title: 'Confusion over cost and payment',
          blurb:
            'Patients arrived unclear on what treatment would cost and what payment flexibility was available to them.',
        },
      ],
    },
    {
      key: 'solution',
      label: 'The Solution',
      items: [
        {
          key: 'dashboard',
          icon: <IconCheck size={13} strokeWidth={2.6} />,
          title: 'One consolidated dashboard',
          blurb:
            'Appointments, reminders and payments managed through a single interface, with automated workflows behind them.',
        },
        {
          key: 'analytics',
          icon: <IconCheck size={13} strokeWidth={2.6} />,
          title: 'Real-time analytics on multi-tenant architecture',
          blurb:
            'Live performance data per clinic and location, on an architecture that scales as practices are added.',
        },
        {
          key: 'communication',
          icon: <IconCheck size={13} strokeWidth={2.6} />,
          title: 'Multi-channel communication and financing',
          blurb:
            'VOIP, SMS and email reminders, with flexible financing options presented to patients up front.',
        },
      ],
    },
  ],
};

export const ALL_TREAT_OUTCOMES = {
  eyebrow: 'Highlights',
  title: 'What the platform changed.',
  lead: 'Six capabilities carrying work that used to sit with the front desk between patients.',
  items: [
    {
      key: 'appointments',
      icon: <IconAppointments />,
      title: 'Unified Appointment & Payment Management',
      blurb:
        'Scheduling and payment taken in the same place, so the front desk stops reconciling two systems.',
    },
    {
      key: 'reminders',
      icon: <IconClientEngagement />,
      title: 'Multi-Channel Reminders',
      blurb:
        'VOIP, SMS and email reminders sent automatically, reaching patients on the channel they answer.',
    },
    {
      key: 'financing',
      icon: <IconSmartPricing />,
      title: 'Flexible Financing',
      blurb:
        'Financing options surfaced at the point of decision, so cost stops stalling treatment.',
    },
    {
      key: 'analytics',
      icon: <IconInternalDashboard />,
      title: 'Real-Time Analytics',
      blurb: 'Bookings, revenue and campaign performance updating live rather than at month end.',
    },
    {
      key: 'architecture',
      icon: <IconScalableArchitecture />,
      title: 'Scalable Architecture',
      blurb:
        'Multi-tenant by design, so new clinics and locations onboard without a separate deployment.',
    },
    {
      key: 'workflows',
      icon: <IconAutomatedWorkflows />,
      title: 'Automated Workflows',
      blurb:
        'Confirmations, follow-ups and recalls run on their own, removing the manual checklist.',
    },
  ],
};

export const ALL_TREAT_MORE_WORK = {
  eyebrow: 'Other projects',
  title: 'More from our portfolio.',
  lead: 'Open any project for the brief, the approach and what changed for the client.',
};
