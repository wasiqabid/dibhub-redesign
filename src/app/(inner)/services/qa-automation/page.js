import ServiceDetailBanner from '@/components/banner/ServiceDetailBanner';
import Cta from '@/components/cta/Cta';
import ServiceApproach from '@/components/services/ServiceApproach';
import ServiceCapabilities from '@/components/services/ServiceCapabilities';
import { QA_APPROACH, QA_CAPABILITIES, QA_HERO } from '@/components/services/qaAutomationContent';

const DESCRIPTION =
  'End-to-end test automation that accelerates releases, reduces bugs, and ensures exceptional quality across your digital products.';

export const metadata = {
  title: 'QA Automation',
  description: DESCRIPTION,
  openGraph: {
    title: 'QA Automation',
    description: DESCRIPTION,
    images: ['/assets/images/dibhub-logo.png'],
  },
};

export default function QaAutomationPage() {
  return (
    <>
      <ServiceDetailBanner {...QA_HERO} />
      <ServiceCapabilities {...QA_CAPABILITIES} />
      <ServiceApproach {...QA_APPROACH} />
      <Cta />
    </>
  );
}
