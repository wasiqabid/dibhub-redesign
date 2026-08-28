import Cta from '@/components/cta/Cta';
import TeamBanner from '@/components/team/TeamBanner';
import TeamCulture from '@/components/team/TeamCulture';
import TeamGrid from '@/components/team/TeamGrid';
import TeamLeadership from '@/components/team/TeamLeadership';
import TeamStats from '@/components/team/TeamStats';

const DESCRIPTION =
  'A collective of passionate professionals — engineers, designers and partnership leads who bring their own expertise to every build and hold each other to the same standard.';

export const metadata = {
  title: 'Team',
  description: DESCRIPTION,
  openGraph: {
    title: 'Team',
    description: DESCRIPTION,
    images: ['/assets/images/dibhub-logo.png'],
  },
};

export default function TeamPage() {
  return (
    <>
      <TeamBanner />
      <TeamStats />
      <TeamLeadership />
      <TeamGrid />
      <TeamCulture />
      <Cta />
    </>
  );
}
