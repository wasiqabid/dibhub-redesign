import ServiceDetailBanner from '@/components/banner/ServiceDetailBanner';
import Cta from '@/components/cta/Cta';
import ServiceApproach from '@/components/services/ServiceApproach';
import ServiceCapabilities from '@/components/services/ServiceCapabilities';
import {
  DEVOPS_APPROACH,
  DEVOPS_CAPABILITIES,
  DEVOPS_HERO,
} from '@/components/services/devopsContent';

const DESCRIPTION =
  'Reliable, automated, secure DevOps pipelines with cloud-native architecture to accelerate deployments and optimize infrastructure for startups and enterprises alike.';

export const metadata = {
  title: 'DevOps & Cloud Engineering',
  description: DESCRIPTION,
  openGraph: {
    title: 'DevOps & Cloud Engineering',
    description: DESCRIPTION,
    images: ['/assets/images/dibhub-logo.png'],
  },
};

export default function DevOpsPage() {
  return (
    <>
      <ServiceDetailBanner {...DEVOPS_HERO} />
      <ServiceCapabilities {...DEVOPS_CAPABILITIES} />
      <ServiceApproach {...DEVOPS_APPROACH} />
      <Cta />
    </>
  );
}
