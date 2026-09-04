'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, type MouseEvent } from 'react';
import { ResponsiveImage } from '@/components/ResponsiveImage';

const navGroups = [
  {
    label: 'Our Bibles',
    links: [
      { label: 'Bible Publications', href: '/en/publications/' },
      { label: 'Children and Teens', href: '/en/teens/' },
      { label: 'Currently In Progress', href: '/en/inprogress/' },
      {
        label: 'Read PBI Bible at Bible.com',
        href: 'https://www.bible.com/bible/3502/JHN.1.NLTNK',
        external: true,
      },
    ],
  },
  {
    label: 'Learn',
    links: [
      { label: 'Why a North Korean Bible?', href: '/en/whynkbible/' },
      { label: 'Why Make It Bilingual?', href: '/en/whybilingual/' },
      { label: 'About Us', href: '/en/about/' },
    ],
  },
  {
    label: 'Get Involved',
    links: [
      { label: 'Prayer Newsletter', href: '/en/prayer-newsletter/' },
      { label: 'Support Us with Prayers', href: '/en/support/' },
      { label: 'Contact Us / Feedback', href: '/en/contactus/' },
    ],
  },
];

export function SiteHeader() {
  const desktopNavigation = useRef<HTMLElement>(null);
  const mobileNavigation = useRef<HTMLDetailsElement>(null);
  const lastMenuTrigger = useRef<HTMLElement>(null);

  const closeNavigation = useCallback((restoreFocus = false) => {
    desktopNavigation.current
      ?.querySelectorAll<HTMLDetailsElement>('details.nav-group[open]')
      .forEach((menu) => { menu.open = false; });

    if (mobileNavigation.current) mobileNavigation.current.open = false;
    if (restoreFocus) lastMenuTrigger.current?.focus();
  }, []);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      const isInsideDesktop = desktopNavigation.current?.contains(target);
      const isInsideMobile = mobileNavigation.current?.contains(target);

      if (!isInsideDesktop && !isInsideMobile) closeNavigation();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;

      const hasOpenMenu = Boolean(
        desktopNavigation.current?.querySelector('details.nav-group[open]')
        || mobileNavigation.current?.open,
      );

      if (hasOpenMenu) {
        event.preventDefault();
        closeNavigation(true);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeNavigation]);

  const handleDesktopSummaryClick = (event: MouseEvent<HTMLElement>) => {
    const selectedMenu = event.currentTarget.parentElement as HTMLDetailsElement;
    lastMenuTrigger.current = event.currentTarget;

    desktopNavigation.current
      ?.querySelectorAll<HTMLDetailsElement>('details.nav-group[open]')
      .forEach((menu) => {
        if (menu !== selectedMenu) menu.open = false;
      });
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="Pyongyang Bible Institute home" onClick={() => closeNavigation()}>
          {/* The supplied logo is the visual source of truth for the wordmark. */}
          <ResponsiveImage className="brand-desktop-logo" image="PBI logo.png" alt="Pyongyang Bible Institute" sizes="462px" />
          <ResponsiveImage className="brand-mobile-logo" image="PBI logo - mobile.png" alt="Pyongyang Bible Institute" sizes="68vw" />
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation" ref={desktopNavigation}>
          {navGroups.map((group) => (
            <details
              className="nav-group"
              name="primary-navigation"
              key={group.label}
            >
              <summary onClick={handleDesktopSummaryClick}>{group.label}</summary>
              <div className="nav-popover">
                {group.links.map((link) =>
                  link.external ? (
                    <a key={link.label} href={link.href} target="_blank" rel="noreferrer" onClick={() => closeNavigation()}>
                      {link.label}<span aria-hidden="true"> ↗</span>
                    </a>
                  ) : (
                    <Link key={link.label} href={link.href} onClick={() => closeNavigation()}>{link.label}</Link>
                  ),
                )}
              </div>
            </details>
          ))}
        </nav>

        <details className="mobile-nav" ref={mobileNavigation}>
          <summary
            aria-label="Toggle navigation"
            onClick={(event) => { lastMenuTrigger.current = event.currentTarget; }}
          ><span>Menu</span></summary>
          <nav aria-label="Mobile navigation">
            {navGroups.map((group) => (
              <div className="mobile-nav-group" key={group.label}>
                <p>{group.label}</p>
                {group.links.map((link) =>
                  link.external ? (
                    <a key={link.label} href={link.href} target="_blank" rel="noreferrer" onClick={() => closeNavigation()}>
                      {link.label}<span aria-hidden="true"> ↗</span>
                    </a>
                  ) : (
                    <Link key={link.label} href={link.href} onClick={() => closeNavigation()}>{link.label}</Link>
                  ),
                )}
              </div>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
