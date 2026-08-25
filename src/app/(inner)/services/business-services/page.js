import ServiceDetailBanner from '@/components/banner/ServiceDetailBanner';
import Cta from '@/components/cta/Cta';
import ServiceApproach from '@/components/services/ServiceApproach';
import ServiceCapabilities from '@/components/services/ServiceCapabilities';
import {
  BUSINESS_APPROACH,
  BUSINESS_CAPABILITIES,
  BUSINESS_HERO,
} from '@/components/services/businessServicesContent';

const DESCRIPTION =
  'End-to-end solutions — from digital onboarding to CRM, logistics, and customer engagement — tailored for modern B2B and B2C operations.';

export const metadata = {
  title: 'Client Driven Solutions',
  description: DESCRIPTION,
  openGraph: {
    title: 'Client Driven Solutions',
    description: DESCRIPTION,
    images: ['/assets/images/dibhub-logo.png'],
  },
};

export default function BusinessServicesPage() {
  return (
    <>
      <ServiceDetailBanner {...BUSINESS_HERO} />
      <ServiceCapabilities {...BUSINESS_CAPABILITIES} />
      <ServiceApproach {...BUSINESS_APPROACH} />
      <Cta />
    </>
  );
}
