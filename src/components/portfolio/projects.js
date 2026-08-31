// Every project, copy and tags verbatim from the approved designs.
//
// Two surfaces read this file and they do not show the same thing. The base
// fields carry the Home page's featured-grid copy; `listing` carries the
// Portfolio page's overrides, because the Portfolio reference gives most
// projects longer blurbs, a different tag set and a different card order.
// The Portfolio page merges the two (`{ ...project, ...project.listing }`),
// so anything absent from `listing` simply falls through to the base copy.
//
// `featured` marks what Home shows. Array order is Home's order — do not
// reorder to change the Portfolio page, use `listing.order` for that.

export const PROJECTS = [
  {
    key: 'merge',
    title: 'Merge',
    href: '/portfolio/merge',
    tags: ['Node.js Development', 'Security'],
    blurb:
      'A hardened Node.js platform rebuilt for scale, with authentication, audit logging and dependency security brought up to standard.',
    image: '/assets/images/work-merge.webp',
    width: 1166,
    height: 875,
    featured: true,
    // Same copy on both pages; only the position in the listing differs.
    listing: { order: 3 },
  },
  {
    key: 'all-treat',
    title: 'All Treat',
    href: '/portfolio/all-treat',
    tags: ['Cloud Migration', 'Web Design'],
    blurb: 'Lifted off ageing hosting onto managed cloud, alongside a full front-end redesign.',
    image: '/assets/images/work-all-treat.webp',
    width: 738,
    height: 554,
    featured: true,
    listing: {
      order: 2,
      tags: ['Web Design', 'Cloud Migration', 'Healthcare'],
      blurb:
        'All-in-One Patient Engagement, Marketing, and Practice Management Platform — moved off ageing hosting onto managed cloud and rebuilt front to back.',
    },
  },
  {
    key: 'barbr',
    title: 'Barbr App',
    href: '/portfolio/barbr',
    tags: ['Mobile', 'Booking'],
    blurb: 'A booking app for barbers and their clients, from first prototype to store release.',
    image: '/assets/images/work-barbr.webp',
    width: 738,
    height: 554,
    featured: true,
    listing: {
      order: 1,
      title: 'Barbr',
      // The reference sets "(Web & App)" in a lighter weight beside the title
      // rather than as part of it.
      titleNote: '(Web & App)',
      tags: ['Web Design', 'Mobile App', 'Booking Platform'],
      blurb:
        'Barber Scheduling & Business Growth Platform for Independent Grooming Professionals — one product across web and mobile, with the diary and deposits on the dashboard and booking, reminders and client history in the barber’s pocket.',
    },
  },
  {
    key: 'trt',
    title: 'Team Recovery Tech',
    href: '/portfolio/trt',
    tags: ['Mobile App', 'Behavioral Health'],
    blurb:
      'Custom Mobile App Platform for Addiction Treatment Centers and Behavioral Health Providers',
    image: '/assets/images/work-team-recovery-tech.webp',
    width: 1136,
    height: 852,
    featured: true,
    listing: {
      order: 4,
      blurb:
        'Custom Mobile App Platform for Addiction Treatment Centers and Behavioral Health Providers, supporting clients through treatment and beyond.',
    },
  },
  {
    // Listing-only: the Portfolio reference shows Truxops as a centred card on
    // its own row and Home does not show it at all, so there is no `featured`
    // flag and no base copy to fall back to. The design ships no image for this
    // slot and its blurb is a placeholder the design itself flags — both need
    // real content before launch.
    key: 'truxops',
    title: 'Truxops',
    href: 'https://dibhub.com/truxops',
    external: true,
    tags: ['Web Development'],
    blurb: 'Tagline and project summary to confirm with the team before this page goes live.',
    listing: { order: 5, solo: true },
  },
];

// Every project with its `listing` overrides folded over the base copy — what
// the Portfolio listing and each case study's "other projects" row both render.
// Order is the caller's business; this only does the merge.
export function listedProjects() {
  return PROJECTS.map((project) => ({ ...project, ...project.listing }));
}
