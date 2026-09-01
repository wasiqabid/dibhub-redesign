import Cta from '@/components/cta/Cta';
import AboutBanner from '@/components/about/AboutBanner';
import AboutCulture from '@/components/about/AboutCulture';
import AboutMission from '@/components/about/AboutMission';
import AboutNumbers from '@/components/about/AboutNumbers';
import AboutTeamTeaser from '@/components/about/AboutTeamTeaser';

const DESCRIPTION =
  'A team of engineers, designers and tech enthusiasts who take on the problems businesses cannot solve with off-the-shelf software — and stay accountable for what happens after launch.';

export const metadata = {
  title: 'About',
  description: DESCRIPTION,
  openGraph: {
    title: 'About',
    description: DESCRIPTION,
    images: ['/assets/images/dibhub-logo.png'],
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutBanner />
      <AboutMission />
      <AboutNumbers />
      <AboutCulture />
      <AboutTeamTeaser />
      <Cta />
    </>
  );
}
