import ServiceDetailBanner from '@/components/banner/ServiceDetailBanner';
import Cta from '@/components/cta/Cta';
import ServiceApproach from '@/components/services/ServiceApproach';
import ServiceCapabilities from '@/components/services/ServiceCapabilities';
import {
  WEB_DEV_APPROACH,
  WEB_DEV_CAPABILITIES,
  WEB_DEV_HERO,
} from '@/components/services/webDevelopmentContent';

export const metadata = {
  title: 'Web Development',
  description:
    'Modern, scalable websites and applications built with React, TypeScript, MongoDB and other cutting-edge technologies, from landing pages to full SaaS platforms.',
  openGraph: {
    title: 'Web Development',
    description:
      'Modern, scalable websites and applications built with React, TypeScript, MongoDB and other cutting-edge technologies, from landing pages to full SaaS platforms.',
    images: ['/assets/images/dibhub-logo.png'],
  },
};

export default function WebDevelopmentPage() {
  return (
    <>
      <ServiceDetailBanner {...WEB_DEV_HERO} />
      <ServiceCapabilities {...WEB_DEV_CAPABILITIES} />
      <ServiceApproach {...WEB_DEV_APPROACH} />
      <Cta />
    </>
  );
}
