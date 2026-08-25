import ServiceDetailBanner from '@/components/banner/ServiceDetailBanner';
import Cta from '@/components/cta/Cta';
import ServiceApproach from '@/components/services/ServiceApproach';
import ServiceCapabilities from '@/components/services/ServiceCapabilities';
import {
  MOBILE_APPROACH,
  MOBILE_CAPABILITIES,
  MOBILE_HERO,
} from '@/components/services/mobileApplicationContent';

const DESCRIPTION =
  'High-performance mobile apps built with React Native, delivering smooth cross-platform experiences for both iOS and Android.';

export const metadata = {
  title: 'Mobile Applications',
  description: DESCRIPTION,
  openGraph: {
    title: 'Mobile Applications',
    description: DESCRIPTION,
    images: ['/assets/images/dibhub-logo.png'],
  },
};

export default function MobileApplicationPage() {
  return (
    <>
      <ServiceDetailBanner {...MOBILE_HERO} />
      <ServiceCapabilities {...MOBILE_CAPABILITIES} />
      <ServiceApproach {...MOBILE_APPROACH} />
      <Cta />
    </>
  );
}
