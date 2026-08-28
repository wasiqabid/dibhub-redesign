// Copy for /team, transcribed verbatim from the Team reference. The nine grid
// members live in teamMembers.js.

export const TEAM_HERO = {
  eyebrow: 'Our team',
  headline: [{ text: 'Meet Our' }, { text: 'Creative Minds', accent: true }],
  lead: 'A collective of passionate professionals — engineers, designers and partnership leads who bring their own expertise to every build and hold each other to the same standard.',
};

export const TEAM_STATS = [
  {
    key: 'members',
    number: '10+',
    label: 'Team members',
    blurb: 'Engineers, designers and partnership leads working as one team.',
  },
  {
    key: 'projects',
    number: '10+',
    label: 'Projects delivered',
    blurb: 'Platforms shipped and still running in production for our clients.',
  },
  {
    key: 'years',
    number: '5+',
    label: 'Years experience',
    blurb: 'Building for startups and enterprise teams across four industries.',
  },
];

export const TEAM_LEAD = {
  eyebrow: 'Leadership',
  badge: 'Co-Founder',
  name: 'Muhammad Taimoor',
  role: 'Co-Founder, DibHub',
  bio: 'Nine-plus years across digital transformation and business growth. Taimoor works with clients from the first conversation through delivery, translating business problems into the technical scope the team builds against.',
  photo: '/assets/images/team/taimoor.webp',
  socials: [
    { type: 'linkedin', href: 'https://www.linkedin.com/in/taimoordibhub/' },
    { type: 'github', href: 'https://github.com/taimoorsultani' },
  ],
};

export const TEAM_GRID = {
  eyebrow: 'The team',
  title: 'The people on your project.',
  lead: 'Every engagement is staffed from this bench — the same engineers who scoped the work are the ones who build and maintain it.',
};

export const TEAM_CULTURE = {
  eyebrow: 'What holds it together',
  // The teal phrase sits inside the quote, so it is split out rather than
  // wrapped in markup inside a string.
  quote: {
    before: 'Passionate professionals, each with their own ',
    accent: 'unique expertise',
    after: ' — held to one standard of excellence across every project we take on.',
  },
};
