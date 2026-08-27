import ContactBanner from '@/components/contact/ContactBanner';
import ContactSection from '@/components/contact/ContactSection';

const DESCRIPTION =
  'Tell us what you are trying to build and a senior engineer will read it — not a sales queue. We come back with an honest view on scope, approach and whether we are the right team for it.';

export const metadata = {
  title: 'Contact',
  description: DESCRIPTION,
  openGraph: {
    title: 'Contact',
    description: DESCRIPTION,
    images: ['/assets/images/dibhub-logo.png'],
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactBanner />
      <ContactSection />
    </>
  );
}
