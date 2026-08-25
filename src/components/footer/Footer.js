import Image from 'next/image';
import Link from 'next/link';

import { FOOTER_COMPANY_LINKS, FOOTER_CONTACT_LINKS, SERVICE_LINKS } from '@/utils/navigation';

export default function Footer() {
  return (
    <footer className="dh-footer">
      <div className="dh-container">
        <div className="dh-footer-grid">
          <div className="dh-footer-brand">
            <Image
              src="/assets/images/dibhub-logo.png"
              alt="DibHub"
              width={4625}
              height={2000}
              sizes="170px"
            />
            <p>
              Dibhub is a leading IT solutions company that provides innovative technology services
              to businesses of all sizes.
            </p>
          </div>

          <div className="dh-footer-col">
            <h4>Services</h4>
            <div className="dh-footer-links">
              {SERVICE_LINKS.map((service) => (
                <Link key={service.key} href={service.href}>
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="dh-footer-col">
            <h4>Company</h4>
            <div className="dh-footer-links">
              {FOOTER_COMPANY_LINKS.map((link) => (
                <Link key={link.label} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="dh-footer-col">
            <h4>Get in touch</h4>
            <div className="dh-footer-links">
              {FOOTER_CONTACT_LINKS.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="dh-footer-base">
          <span>© 2026 Dibhub. All rights reserved.</span>
          <span>Dedicated Innovative Brains Hub</span>
        </div>
      </div>
    </footer>
  );
}
