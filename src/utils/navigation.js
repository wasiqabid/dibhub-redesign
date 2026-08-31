// Shared link data for the header, mega-menu, mobile menu and footer.
// Design labels are kept verbatim; hrefs are mapped onto this project's routes.
// Order mirrors the /services page listing so the dropdown matches it everywhere.

export const SERVICE_LINKS = [
  {
    key: 'ai-ml',
    label: 'AI & Machine Learning',
    blurb: 'Empowering machines to mimic intelligence.',
    href: '/services/ai-ml',
  },
  {
    key: 'web-development',
    label: 'Web Development',
    blurb: 'Crafting digital experiences for modern businesses.',
    href: '/services/web-development',
  },
  {
    key: 'mobile',
    label: 'Mobile Applications',
    blurb: 'Delivering seamless apps with elegant interfaces.',
    href: '/services/mobile-application',
  },
  {
    key: 'devops',
    label: 'DevOps & Cloud Engineering',
    blurb: 'Protecting data software and networks.',
    href: '/services/devops',
  },
  {
    key: 'qa-automation',
    label: 'QA Automation',
    blurb: 'Accelerating quality with reliable test systems.',
    href: '/services/qa-automation',
  },
  {
    key: 'client-driven',
    label: 'Client Driven Solutions',
    blurb: 'Built around your vision, powered by our expertise.',
    href: '/services/business-services',
  },
];

export const PRIMARY_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services', hasMegaMenu: true },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Team', href: '/team' },
];

export const CONTACT_LINK = { label: 'Contact us', href: '/contact' };

export const SOCIAL_LINKS = [
  { key: 'linkedin', label: 'DibHub on LinkedIn', href: 'https://www.linkedin.com/company/dibhub' },
  {
    key: 'facebook',
    label: 'DibHub on Facebook',
    href: 'https://www.facebook.com/people/DibHub/61578628965230/',
  },
  { key: 'instagram', label: 'DibHub on Instagram', href: 'https://www.instagram.com/dib_hub/' },
];

export const FOOTER_COMPANY_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About us', href: '/about' },
  { label: 'Our Team', href: '/team' },
  { label: 'Contact', href: '/contact' },
];

export const FOOTER_CONTACT_LINKS = [
  { label: 'hello@dibhub.com', href: 'mailto:hello@dibhub.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/dibhub' },
  { label: 'Instagram', href: 'https://www.instagram.com/dib_hub/' },
  { label: 'Facebook', href: 'https://www.facebook.com/people/DibHub/61578628965230/' },
];
