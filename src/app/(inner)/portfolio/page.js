import Cta from '@/components/cta/Cta';
import PortfolioBanner from '@/components/portfolio/PortfolioBanner';
import WorkListing from '@/components/portfolio/WorkListing';

const DESCRIPTION =
  'Not a gallery. Every project below is a real engagement with a real client — shipped, supported, and measured against the outcomes it was commissioned to move.';

export const metadata = {
  title: 'Portfolio',
  description: DESCRIPTION,
  openGraph: {
    title: 'Portfolio',
    description: DESCRIPTION,
    images: ['/assets/images/dibhub-logo.png'],
  },
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioBanner />
      <WorkListing />
      <Cta />
    </>
  );
}
