import Cta from '@/components/cta/Cta';
import ProjectHero from '@/components/portfolio/ProjectHero';
import ProjectMoreWork from '@/components/portfolio/ProjectMoreWork';
import ProjectOutcomes from '@/components/portfolio/ProjectOutcomes';
import ProjectShowcase from '@/components/portfolio/ProjectShowcase';
import ProjectStory from '@/components/portfolio/ProjectStory';
import {
  MERGE_HERO,
  MERGE_MORE_WORK,
  MERGE_OUTCOMES,
  MERGE_SHOWCASE,
  MERGE_STORY,
} from '@/components/portfolio/mergeContent';

const DESCRIPTION =
  'Affiliate Marketing & Deep-Link Optimization Platform — smart links that route mobile traffic straight into the Amazon app, with cookie-free analytics behind them.';

export const metadata = {
  title: 'Merge',
  description: DESCRIPTION,
  openGraph: {
    title: 'Merge',
    description: DESCRIPTION,
    images: ['/assets/images/case-merge-hero.webp'],
  },
};

export default function MergePage() {
  return (
    <>
      <ProjectHero content={MERGE_HERO} />
      <ProjectShowcase content={MERGE_SHOWCASE} variant="merge" />
      <ProjectStory content={MERGE_STORY} variant="merge" />
      <ProjectOutcomes content={MERGE_OUTCOMES} variant="merge" />
      <ProjectMoreWork content={MERGE_MORE_WORK} currentKey="merge" variant="merge" />
      <Cta />
    </>
  );
}
