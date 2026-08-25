import ServiceDetailBanner from '@/components/banner/ServiceDetailBanner';
import Cta from '@/components/cta/Cta';
import ServiceApproach from '@/components/services/ServiceApproach';
import ServiceCapabilities from '@/components/services/ServiceCapabilities';
import { AI_ML_APPROACH, AI_ML_CAPABILITIES, AI_ML_HERO } from '@/components/services/aiMlContent';

export const metadata = {
  title: 'AI & Machine Learning',
  description:
    'Natural language processing, computer vision, predictive analytics and recommendation systems, trained, evaluated, deployed and monitored — not handed over as a notebook.',
  openGraph: {
    title: 'AI & Machine Learning',
    description:
      'Natural language processing, computer vision, predictive analytics and recommendation systems, trained, evaluated, deployed and monitored — not handed over as a notebook.',
    images: ['/assets/images/dibhub-logo.png'],
  },
};

export default function AiMlPage() {
  return (
    <>
      <ServiceDetailBanner {...AI_ML_HERO} />
      <ServiceCapabilities {...AI_ML_CAPABILITIES} />
      <ServiceApproach {...AI_ML_APPROACH} />
      <Cta />
    </>
  );
}
