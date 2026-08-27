// Copy for /contact, transcribed verbatim from the Contact reference.

import { IconClock, IconEnvelope, IconPhone } from '@/components/icons/Icons';

export const CONTACT_HERO = {
  eyebrow: 'Contact',
  title: { before: 'Get in ', accent: 'touch', after: '.' },
  lead: 'Tell us what you are trying to build and a senior engineer will read it — not a sales queue. We come back with an honest view on scope, approach and whether we are the right team for it.',
};

export const CONTACT_FORM = {
  title: 'Start the conversation',
  lead: 'A few details are enough. The more you can say about the problem, the more useful our first reply will be.',
  consent:
    'I agree to DibHub storing the details above so the team can respond to my enquiry. We never share them with third parties.',
  submit: 'Send message',
  reassurance: 'No obligation, no automated drip.',
};

export const CONTACT_PANEL = {
  eyebrow: 'Reach us directly',
  // The reference marks these as placeholders — see the notice below.
  rows: [
    {
      key: 'email',
      icon: <IconEnvelope />,
      label: 'Email',
      value: 'hello@dibhub.com',
      href: 'mailto:hello@dibhub.com?subject=Project%20enquiry%20for%20DibHub',
    },
    {
      key: 'phone',
      icon: <IconPhone />,
      label: 'Phone',
      value: '+1 (555) 0134-000',
      href: 'tel:+15550134000',
    },
    {
      key: 'response',
      icon: <IconClock />,
      label: 'Response time',
      value: 'We typically respond within 1 business day',
    },
  ],
  notice: 'Placeholder details — swap in the live inbox, phone line and SLA before launch.',
};
