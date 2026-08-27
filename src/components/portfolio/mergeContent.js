// Copy for /portfolio/merge, transcribed verbatim from the Merge case study
// reference. This page is self-contained: the short blurb/tags in projects.js
// are the preview card only and are deliberately not reused here.

import {
  IconCheck,
  IconDeepLink,
  IconEnhanceSecurity,
  IconGlobe,
  IconInternalDashboard,
  IconMultilingual,
  IconSmartLink,
} from '@/components/icons/Icons';

export const MERGE_HERO = {
  eyebrow: 'E-Commerce / Deep-Linking',
  title: 'Merge',
  lead: 'Affiliate Marketing & Deep-Link Optimization Platform.',
  techLabel: 'Tech stack',
  tech: [
    'Next.js',
    'TypeScript',
    'MUI v5',
    'Node.js',
    'Express.js',
    'Flask',
    'Firebase',
    'Google Cloud',
    'Docker',
    'MongoDB',
  ],
};

// Unlike the other two case studies this shot is a narrow portrait card, so it
// carries its own `sizes` to match the 660px cap the design puts on it.
export const MERGE_SHOWCASE = {
  name: 'Merge',
  href: 'https://dibhub.com/merge',
  cta: 'Visit website',
  image: '/assets/images/case-merge-hero.webp',
  width: 1069,
  height: 1200,
  sizes: '(min-width: 800px) 660px, 100vw',
  alt: 'The Merge smart link dashboard',
};

export const MERGE_STORY = {
  eyebrow: 'Challenge & Solution',
  title: 'Commission lost between the link and the app.',
  lead: 'Three problems were leaking revenue on mobile. Three capabilities closed the gap.',
  columns: [
    {
      key: 'challenge',
      label: 'The Challenge',
      items: [
        {
          key: 'browser-links',
          marker: '01',
          title: 'Mobile links opened in the browser',
          blurb:
            'Amazon affiliate links dropped mobile users into a mobile web page instead of the app they were already signed into.',
        },
        {
          key: 'lost-conversions',
          marker: '02',
          title: 'Conversions lost at the last step',
          blurb:
            'Every extra tap between the link and the buy button cost commission on traffic already paid for.',
        },
        {
          key: 'bounce',
          marker: '03',
          title: 'Bounce up, engagement down',
          blurb:
            'Sessions ended on the landing page, and marketers had no reliable read on which campaigns were working.',
        },
      ],
    },
    {
      key: 'solution',
      label: 'The Solution',
      items: [
        {
          key: 'deep-linking',
          icon: <IconCheck size={13} strokeWidth={2.6} />,
          title: 'Automatic deep-linking into the app',
          blurb:
            'A mobile-first engine that routes Amazon links straight into the native app, keeping the session and the sign-in intact.',
        },
        {
          key: 'smart-links',
          icon: <IconCheck size={13} strokeWidth={2.6} />,
          title: 'Smart links from a responsive web app',
          blurb:
            'Marketers generate and manage smart links in the browser, on any device, without touching code.',
        },
        {
          key: 'analytics',
          icon: <IconCheck size={13} strokeWidth={2.6} />,
          title: 'Cookie-free analytics and a secure dashboard',
          blurb:
            'GDPR-compliant measurement with no cookies, campaign performance in one dashboard, and Google login for access.',
        },
      ],
    },
  ],
};

export const MERGE_OUTCOMES = {
  eyebrow: 'Highlights',
  title: 'What the platform changed.',
  lead: 'Six capabilities keeping affiliate traffic on the shortest path to a purchase.',
  items: [
    {
      key: 'smart-links',
      icon: <IconSmartLink />,
      title: 'Smart Link Generation',
      blurb: 'Affiliate links built in a few taps, ready to drop into a post, a story or an email.',
    },
    {
      key: 'deep-linking',
      icon: <IconDeepLink />,
      title: 'Deep-Linking Engine',
      blurb:
        'Mobile traffic lands in the Amazon app, not a browser tab, so the purchase path stays short.',
    },
    {
      key: 'cookie-free',
      icon: <IconEnhanceSecurity />,
      title: 'Cookie-Free Analytics',
      blurb: 'Attribution without cookies, keeping measurement GDPR-compliant by design.',
    },
    {
      key: 'dashboard',
      icon: <IconInternalDashboard />,
      title: 'Campaign Dashboard',
      blurb: 'Clicks, conversions and campaign performance in one secure view.',
    },
    {
      key: 'google-login',
      icon: <IconGlobe />,
      title: 'Google Login Integration',
      blurb: 'Sign-in through Google, so teams get access without another password to manage.',
    },
    {
      key: 'multilingual',
      icon: <IconMultilingual />,
      title: 'Multilingual Support',
      blurb: 'The interface follows the marketer’s language, wherever the campaign runs.',
    },
  ],
};

export const MERGE_MORE_WORK = {
  eyebrow: 'Other projects',
  title: 'More from our portfolio.',
  lead: 'Open any project for the brief, the approach and what changed for the client.',
};
