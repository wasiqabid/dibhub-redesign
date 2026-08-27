import Cta from '@/components/cta/Cta';
import ProjectHero from '@/components/portfolio/ProjectHero';
import ProjectMoreWork from '@/components/portfolio/ProjectMoreWork';
import ProjectOutcomes from '@/components/portfolio/ProjectOutcomes';
import ProjectShowcase from '@/components/portfolio/ProjectShowcase';
import ProjectStory from '@/components/portfolio/ProjectStory';

const DESCRIPTION =
  'Barbershop Scheduling and Grooming Business Growth Platform — booking links, automated reminders and Smart Pricing™ built across web and mobile.';

export const metadata = {
  title: 'Barbr',
  description: DESCRIPTION,
  openGraph: {
    title: 'Barbr',
    description: DESCRIPTION,
    images: ['/assets/images/case-barbr-hero.webp'],
  },
};

export default function BarbrPage() {
  return (
    <>
      <ProjectHero />
      <ProjectShowcase />
      <ProjectStory />
      <ProjectOutcomes />
      <ProjectMoreWork />
      <Cta />
    </>
  );
}
