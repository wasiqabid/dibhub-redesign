'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useScrollMetrics } from '@/hooks/useScrollMetrics';
import { CONTACT_LINK, PRIMARY_LINKS, SOCIAL_LINKS } from '@/utils/navigation';
import {
  IconChevronDown,
  IconFacebook,
  IconInstagram,
  IconLinkedIn,
} from '@/components/icons/Icons';
import ServicesMegaMenu from '@/components/header/ServicesMegaMenu';
import MobileMenu from '@/components/header/MobileMenu';

const SOCIAL_ICONS = {
  linkedin: IconLinkedIn,
  facebook: IconFacebook,
  instagram: IconInstagram,
};

// Matches the source's `w >= 900` desktop/mobile split.
const DESKTOP_QUERY = '(min-width: 900px)';

export default function Header() {
  const pathname = usePathname();
  const isDesktop = useMediaQuery(DESKTOP_QUERY);
  const { y, progress } = useScrollMetrics();

  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [navHovered, setNavHovered] = useState(false);
  // null = not measured yet, which is different from "measured, no hero".
  const [heroHeight, setHeroHeight] = useState(null);
  const closeTimer = useRef(null);

  // Only a dark hero lets the bar go transparent; pages without one keep the
  // solid treatment from the first pixel.
  useEffect(() => {
    const hero = document.querySelector('[data-hero-host]');
    setHeroHeight(hero ? hero.offsetHeight : 0);
  }, [pathname]);

  useEffect(() => {
    if (isDesktop) setMenuOpen(false);
  }, [isDesktop]);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
    // You navigate by clicking a link in the bar, so the pointer is still over
    // the header afterwards and `mouseleave` never fires — which left the bar
    // stuck on its hovered (solid) treatment on the next page. A full page load
    // starts this flag false and only sets it when the pointer actually moves
    // in; client-side navigation has to reset it to behave the same way.
    setNavHovered(false);
  }, [pathname]);

  const openServices = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  }, []);

  const closeServices = useCallback((delay = 260) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), delay);
  }, []);

  // The panel opens on hover, so without this a keyboard user could never reach
  // the six links inside it. Close only once focus leaves the trigger and panel
  // entirely, not while it moves between the links within them.
  const handleServicesBlur = useCallback(
    (event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) closeServices(0);
    },
    [closeServices]
  );

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setServicesOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  const measured = heroHeight !== null;
  const overHero = heroHeight > 0 && y < heroHeight - 72;
  const isClear = overHero && y <= 6 && !navHovered && !menuOpen;

  // Before the hero is measured the header claims neither state, so the
  // stylesheet decides from `:has([data-hero-host])` and a hero page never
  // paints the white plate first. Once measured, `--solid` is asserted
  // explicitly and outranks that rule.
  const headerClass = [
    'dh-header',
    measured && !isClear ? 'dh-header--solid' : '',
    measured && !isClear && y > 8 ? 'dh-header--raised' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const isActive = (href) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  // The services overview already lists every service on the page itself, so the
  // nav drops its dropdown there. Detail pages under /services keep it.
  const showServicesMenu = pathname !== '/services';

  return (
    <header
      className={headerClass}
      onMouseEnter={() => setNavHovered(true)}
      onMouseLeave={() => setNavHovered(false)}
    >
      <div className="dh-header-bar">
        <Link href="/" className="dh-header-logo" aria-label="DibHub — home">
          <Image
            src="/assets/images/dibhub-logo.png"
            alt="DibHub"
            width={4625}
            height={2000}
            // Above the fold, so load it eagerly — but the LCP element on every
            // page is the hero heading, so this must not claim `priority` (§10).
            loading="eager"
            sizes="150px"
          />
        </Link>

        {isDesktop ? (
          <>
            <nav className="dh-nav" aria-label="Primary">
              {PRIMARY_LINKS.map((link) =>
                link.hasMegaMenu ? (
                  // The Services item keeps its wrapper and chevron on every
                  // route. On /services the chevron is only hidden, never
                  // removed, so the item keeps its width and the rest of the
                  // nav does not shift when the dropdown is dropped.
                  <div
                    key={link.href}
                    className="dh-nav-services"
                    onMouseEnter={showServicesMenu ? openServices : undefined}
                    onMouseLeave={showServicesMenu ? () => closeServices() : undefined}
                    onFocus={showServicesMenu ? openServices : undefined}
                    onBlur={showServicesMenu ? handleServicesBlur : undefined}
                  >
                    <Link
                      href={link.href}
                      className={`dh-nav-link${isActive(link.href) ? ' is-active' : ''}`}
                      aria-expanded={showServicesMenu ? servicesOpen : undefined}
                    >
                      {link.label}
                      <span
                        className={`dh-nav-chevron${servicesOpen ? ' is-open' : ''}${
                          showServicesMenu ? '' : ' is-hidden'
                        }`}
                      >
                        <IconChevronDown />
                      </span>
                    </Link>
                    {showServicesMenu ? (
                      <ServicesMegaMenu
                        open={servicesOpen}
                        onMouseEnter={openServices}
                        onMouseLeave={() => closeServices()}
                      />
                    ) : null}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`dh-nav-link${isActive(link.href) ? ' is-active' : ''}`}
                    onMouseEnter={() => closeServices(0)}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            <div className="dh-header-end">
              {SOCIAL_LINKS.map((social) => {
                const Icon = SOCIAL_ICONS[social.key];
                return (
                  <a
                    key={social.key}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="dh-nav-social"
                  >
                    <Icon />
                  </a>
                );
              })}
              <Link
                href={CONTACT_LINK.href}
                className={`dh-nav-link dh-nav-link--contact${
                  isActive(CONTACT_LINK.href) ? ' is-active' : ''
                }`}
              >
                {CONTACT_LINK.label}
              </Link>
            </div>
          </>
        ) : (
          <button
            type="button"
            className="dh-burger"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="dh-burger-bar" />
            <span className="dh-burger-bar" />
          </button>
        )}
      </div>

      <div className="dh-progress-track">
        <div className="dh-progress-bar" style={{ transform: `scaleX(${progress})` }} />
      </div>

      {!isDesktop && menuOpen ? <MobileMenu onNavigate={() => setMenuOpen(false)} /> : null}
    </header>
  );
}
