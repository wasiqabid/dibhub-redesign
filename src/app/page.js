import Banner from '@/components/banner/Banner';
import Cta from '@/components/cta/Cta';
import Portfolio from '@/components/portfolio/Portfolio';
import Process from '@/components/process/Process';
import Services from '@/components/services/Services';

// The design exposes this as an editable toggle whose default is `true`, so the
// "How we work" section renders.
const SHOW_PROCESS = true;

export const metadata = {
  title: 'DibHub — Dedicated Innovative Brains Hub',
  description:
    "More than an IT provider — we're your strategic partner in digital transformation. Backed by a decade of experience and a team of certified experts.",
};

export default function HomePage() {
  return (
    <>
      <Banner />
      <Portfolio />
      {SHOW_PROCESS ? <Process /> : null}
      <Services />
      <Cta />
    </>
  );
}
