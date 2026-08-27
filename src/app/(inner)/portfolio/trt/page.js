import Cta from '@/components/cta/Cta';
import ProjectHero from '@/components/portfolio/ProjectHero';
import ProjectMoreWork from '@/components/portfolio/ProjectMoreWork';
import ProjectOutcomes from '@/components/portfolio/ProjectOutcomes';
import ProjectShowcase from '@/components/portfolio/ProjectShowcase';
import ProjectStory from '@/components/portfolio/ProjectStory';
import {
  TRT_HERO,
  TRT_MORE_WORK,
  TRT_OUTCOMES,
  TRT_SHOWCASE,
  TRT_STORY,
} from '@/components/portfolio/trtContent';

const DESCRIPTION =
  'Custom Mobile App Platform for Addiction Treatment Centers and Behavioral Health Providers — white-labeled alumni engagement and outcome reporting on HIPAA-compliant architecture.';

export const metadata = {
  title: 'Team Recovery Tech',
  description: DESCRIPTION,
  openGraph: {
    title: 'Team Recovery Tech',
    description: DESCRIPTION,
    images: ['/assets/images/case-trt-hero.webp'],
  },
};

export default function TrtPage() {
  return (
    <>
      <ProjectHero content={TRT_HERO} variant="trt" />
      <ProjectShowcase content={TRT_SHOWCASE} />
      <ProjectStory content={TRT_STORY} variant="trt" />
      <ProjectOutcomes content={TRT_OUTCOMES} variant="trt" />
      {/* The reference pairs this page with Barbr and Merge rather than the
          first two in listing order, so the pair is named explicitly. */}
      <ProjectMoreWork
        content={TRT_MORE_WORK}
        currentKey="trt"
        projectKeys={['barbr', 'merge']}
        variant="trt"
      />
      <Cta />
    </>
  );
}
