// Copy for /portfolio/barbr, transcribed verbatim from the Barbr case study
// reference. This page is self-contained: the short blurb/tags in projects.js
// are the preview card only and are deliberately not reused here.

import {
  IconAccelerateGrowth,
  IconBoostEfficiency,
  IconCheck,
  IconClientEngagement,
  IconInternalDashboard,
  IconMobile,
  IconSmartPricing,
} from '@/components/icons/Icons';

export const BARBR_HERO = {
  eyebrow: 'Beauty & Wellness SaaS',
  title: 'Barbr',
  lead: 'Barbershop Scheduling and Grooming Business Growth Platform.',
  techLabel: 'Tech stack',
  tech: ['React.js', 'React Native', 'Python', 'Django'],
};

export const BARBR_SHOWCASE = {
  name: 'Barbr',
  href: 'https://dibhub.com/barbr',
  cta: 'Visit website',
  image: '/assets/images/case-barbr-hero.webp',
  width: 1200,
  height: 622,
  alt: 'The Barbr dashboard showing the booking flow',
};

export const BARBR_STORY = {
  eyebrow: 'Challenge & Solution',
  title: 'From a paper diary to a platform.',
  lead: 'Three problems were costing barbers their evenings. Three capabilities took them off the barber’s plate.',
  columns: [
    {
      key: 'challenge',
      label: 'The Challenge',
      items: [
        {
          key: 'scheduling',
          marker: '01',
          title: 'Manual, scattered scheduling',
          blurb:
            'Bookings arrived by DM, phone call or an inconsistent third-party app — with no single source of truth for the day.',
        },
        {
          key: 'admin',
          marker: '02',
          title: 'Administrative burden',
          blurb:
            'Time spent confirming, rescheduling and chasing clients was time taken away from the chair.',
        },
        {
          key: 'retention',
          marker: '03',
          title: 'Cancellations and weak retention',
          blurb:
            'Manual cancellations and no-shows went unmanaged, and there was nothing prompting clients to rebook.',
        },
      ],
    },
    {
      key: 'solution',
      label: 'The Solution',
      items: [
        {
          key: 'booking-links',
          icon: <IconCheck size={13} strokeWidth={2.6} />,
          title: 'Booking links and one dashboard',
          blurb:
            'A personal booking link per barber, with scheduling, client communication and analytics in a single dashboard across web and mobile.',
        },
        {
          key: 'reminders',
          icon: <IconCheck size={13} strokeWidth={2.6} />,
          title: 'Reminders, waitlists and no-show protection',
          blurb:
            'Automated reminders, a waitlist that refills cancelled slots, and deposits covering the ones that still slip.',
        },
        {
          key: 'smart-pricing',
          icon: <IconCheck size={13} strokeWidth={2.6} />,
          title: 'Smart Pricing™ and rebooking insights',
          blurb:
            'Demand-aware pricing guidance plus retention and revenue tracking per barber, with one-tap rebooking prompts at the chair.',
        },
      ],
    },
  ],
};

export const BARBR_OUTCOMES = {
  eyebrow: 'Highlights',
  title: 'What the platform changed.',
  lead: 'Six capabilities carrying the weight that used to sit with the barber between appointments.',
  items: [
    {
      key: 'growth',
      icon: <IconAccelerateGrowth />,
      title: 'Accelerated Growth',
      blurb:
        'More chairs filled per week as booking friction and no-shows came out of the process.',
    },
    {
      key: 'efficiency',
      icon: <IconBoostEfficiency />,
      title: 'Boosted Efficiency',
      blurb:
        'Confirmations, reschedules and reminders run themselves, returning admin hours to client work.',
    },
    {
      key: 'engagement',
      icon: <IconClientEngagement />,
      title: 'Automated Client Engagement',
      blurb:
        'Reminders, waitlist offers and rebooking prompts reach clients without anyone typing a message.',
    },
    {
      key: 'revenue',
      icon: <IconSmartPricing />,
      title: 'Smart Revenue Tools',
      blurb:
        'Smart Pricing™ surfaces where a service is underpriced and where demand can carry more.',
    },
    {
      key: 'insights',
      icon: <IconInternalDashboard />,
      title: 'Insights Dashboard',
      blurb: 'Retention, utilisation and revenue per barber in one view, updated as the day runs.',
    },
    {
      key: 'booking-system',
      icon: <IconMobile size={23} />,
      title: 'Personalized Booking System',
      blurb:
        'A booking link and profile per professional, so the shop scales without a shared calendar.',
    },
  ],
};

export const BARBR_MORE_WORK = {
  eyebrow: 'Other projects',
  title: 'More from our portfolio.',
  lead: 'Open any project for the brief, the approach and what changed for the client.',
};
