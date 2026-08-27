import Cta from '@/components/cta/Cta';
import ProjectHero from '@/components/portfolio/ProjectHero';
import ProjectMoreWork from '@/components/portfolio/ProjectMoreWork';
import ProjectOutcomes from '@/components/portfolio/ProjectOutcomes';
import ProjectShowcase from '@/components/portfolio/ProjectShowcase';
import ProjectStory from '@/components/portfolio/ProjectStory';
import {
  ALL_TREAT_HERO,
  ALL_TREAT_MORE_WORK,
  ALL_TREAT_OUTCOMES,
  ALL_TREAT_SHOWCASE,
  ALL_TREAT_STORY,
} from '@/components/portfolio/allTreatContent';

const DESCRIPTION =
  'All-in-One Patient Engagement, Marketing, and Practice Management Platform for Healthcare Providers — one dashboard for appointments, reminders, payments and real-time analytics.';

export const metadata = {
  title: 'All Treat',
  description: DESCRIPTION,
  openGraph: {
    title: 'All Treat',
    description: DESCRIPTION,
    images: ['/assets/images/portfolio/AllTreatPortfolio.png'],
  },
};

export default function AllTreatPage() {
  return (
    <>
      <ProjectHero content={ALL_TREAT_HERO} variant="all-treat" />
      <ProjectShowcase content={ALL_TREAT_SHOWCASE} />
      <ProjectStory content={ALL_TREAT_STORY} variant="all-treat" />
      <ProjectOutcomes content={ALL_TREAT_OUTCOMES} variant="all-treat" />
      <ProjectMoreWork content={ALL_TREAT_MORE_WORK} currentKey="all-treat" variant="all-treat" />
      <Cta />
    </>
  );
}
