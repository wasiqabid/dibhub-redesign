import Cta from '@/components/cta/Cta';
import ProjectHero from '@/components/portfolio/ProjectHero';
import ProjectMoreWork from '@/components/portfolio/ProjectMoreWork';
import ProjectOutcomes from '@/components/portfolio/ProjectOutcomes';
import ProjectShowcase from '@/components/portfolio/ProjectShowcase';
import ProjectStory from '@/components/portfolio/ProjectStory';
import {
  BARBR_HERO,
  BARBR_MORE_WORK,
  BARBR_OUTCOMES,
  BARBR_SHOWCASE,
  BARBR_STORY,
} from '@/components/portfolio/barbrContent';

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
      <ProjectHero content={BARBR_HERO} />
      <ProjectShowcase content={BARBR_SHOWCASE} />
      <ProjectStory content={BARBR_STORY} />
      <ProjectOutcomes content={BARBR_OUTCOMES} />
      <ProjectMoreWork content={BARBR_MORE_WORK} currentKey="barbr" />
      <Cta />
    </>
  );
}
