import { Cabin } from 'next/font/google';

import BackToTop from '@/components/back-to-top/BackToTop';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';

import '../../public/assets/scss/style.scss';

const cabin = Cabin({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-cabin',
});

// Inline styles from Framer only lose to !important.
const NOSCRIPT_REVEAL_CSS =
  '[data-reveal],[data-rise]{opacity:1!important;transform:none!important;filter:none!important}';

export const metadata = {
  title: {
    default: 'DibHub — Dedicated Innovative Brains Hub',
    template: '%s | DibHub',
  },
  description:
    'DibHub is a leading IT solutions company that provides innovative technology services to businesses of all sizes.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={cabin.variable}>
      <body>
        {/* Entrance motion server-renders at opacity 0, so without JS the page
            below the hero would never appear. Restore it for those readers. */}
        <noscript>
          <style>{NOSCRIPT_REVEAL_CSS}</style>
        </noscript>
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
