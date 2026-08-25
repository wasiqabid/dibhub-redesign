import AiMlBanner from '@/components/banner/AiMlBanner';
import Cta from '@/components/cta/Cta';
import AiMlApproach from '@/components/services/AiMlApproach';
import AiMlCapabilities from '@/components/services/AiMlCapabilities';

export const metadata = {
  title: 'AI & Machine Learning',
  description:
    'Natural language processing, computer vision, predictive analytics and recommendation systems, trained, evaluated, deployed and monitored — not handed over as a notebook.',
};

export default function AiMlPage() {
  return (
    <>
      <AiMlBanner />
      <AiMlCapabilities />
      <AiMlApproach />
      <Cta />
    </>
  );
}
