import ServicesBanner from '@/components/banner/ServicesBanner';
import Cta from '@/components/cta/Cta';
import KeyBenefits from '@/components/services/KeyBenefits';
import ServiceOfferings from '@/components/services/ServiceOfferings';

export const metadata = {
  title: 'Services',
  description:
    'More than a decade of delivery, with certified specialists in every discipline we offer. One team that owns architecture, build and operations.',
  openGraph: {
    title: 'Services',
    description:
      'More than a decade of delivery, with certified specialists in every discipline we offer. One team that owns architecture, build and operations.',
    images: ['/assets/images/dibhub-logo.png'],
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesBanner />
      <ServiceOfferings />
      <KeyBenefits />
      <Cta />
    </>
  );
}
