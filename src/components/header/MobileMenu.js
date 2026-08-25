'use client';

import Link from 'next/link';

import { CONTACT_LINK, SERVICE_LINKS } from '@/utils/navigation';

export default function MobileMenu({ onNavigate }) {
  return (
    <nav className="dh-mobile-menu" aria-label="Primary">
      <Link href="/" className="dh-mobile-link dh-mobile-link--home" onClick={onNavigate}>
        Home
      </Link>

      <div className="dh-mobile-group">
        <Link href="/services" className="dh-mobile-group-title" onClick={onNavigate}>
          Services
        </Link>
        {SERVICE_LINKS.map((service) => (
          <Link
            key={service.key}
            href={service.href}
            className="dh-mobile-sublink"
            onClick={onNavigate}
          >
            {service.label}
          </Link>
        ))}
      </div>

      <Link href="/portfolio" className="dh-mobile-link" onClick={onNavigate}>
        Portfolio
      </Link>
      <Link href="/about" className="dh-mobile-link" onClick={onNavigate}>
        About
      </Link>
      <Link href="/team" className="dh-mobile-link" onClick={onNavigate}>
        Team
      </Link>

      <Link href={CONTACT_LINK.href} className="dh-mobile-cta" onClick={onNavigate}>
        {CONTACT_LINK.label}
      </Link>
    </nav>
  );
}
