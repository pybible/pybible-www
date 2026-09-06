'use client';
import Link from 'next/link';
import { useState } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as Dialog from '@radix-ui/react-dialog';
import { ResponsiveImage } from '@/components/ResponsiveImage';

const groups = [
  { label: 'Our Bibles', links: [ ['Bible Publications', '/en/publications/'], ['Children and Teens', '/en/teens/'], ['Currently In Progress', '/en/inprogress/'], ['Read PBI Bible at Bible.com', 'https://www.bible.com/bible/3502/JHN.1.NLTNK'] ] },
  { label: 'Learn', links: [ ['Why a North Korean Bible?', '/en/whynkbible/'], ['Why Make It Bilingual?', '/en/whybilingual/'], ['About Us', '/en/about/'] ] },
  { label: 'Get Involved', links: [ ['Prayer Newsletter', '/en/prayer-newsletter/'], ['Support Us with Prayers', '/en/support/'], ['Contact Us / Feedback', '/en/contactus/'] ] },
];

function NavLink({ label, href }: { label: string; href: string }) {
  const external = href.startsWith('https:');
  return <Link href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>{label}{external && <span aria-hidden="true"> ↗</span>}</Link>;
}

export function SiteHeader() {
  const [activeMenu, setActiveMenu] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="Pyongyang Bible Institute home" onClick={() => { setActiveMenu(''); setMobileOpen(false); }}>
          <ResponsiveImage className="brand-desktop-logo" image="PBI logo.png" alt="Pyongyang Bible Institute" sizes="380px" />
          <ResponsiveImage className="brand-mobile-logo" image="PBI logo - mobile.png" alt="Pyongyang Bible Institute" sizes="68vw" />
        </Link>
        <NavigationMenu.Root className="modern-desktop-nav" aria-label="Primary navigation" value={activeMenu} onValueChange={setActiveMenu} delayDuration={150}>
          <NavigationMenu.List className="modern-nav-list">
            {groups.map(group => (
              <NavigationMenu.Item className="modern-nav-item" key={group.label} value={group.label}>
                <NavigationMenu.Trigger className="modern-nav-trigger">{group.label}<span aria-hidden="true">⌄</span></NavigationMenu.Trigger>
                <NavigationMenu.Content className="modern-nav-content">
                  {group.links.map(([label, href]) => (
                    <NavigationMenu.Link asChild key={href} onSelect={() => setActiveMenu('')}>
                      <Link href={href} target={href.startsWith('https:') ? '_blank' : undefined} rel={href.startsWith('https:') ? 'noreferrer' : undefined}>{label}</Link>
                    </NavigationMenu.Link>
                  ))}
                </NavigationMenu.Content>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>
        </NavigationMenu.Root>
        <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
          <Dialog.Trigger className="modern-mobile-trigger">Menu <span aria-hidden="true">☰</span></Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="mobile-menu-overlay" />
            <Dialog.Content className="mobile-menu-sheet" aria-describedby={undefined}>
              <div className="mobile-sheet-heading"><Dialog.Title>Explore PBI</Dialog.Title><Dialog.Close aria-label="Close navigation">×</Dialog.Close></div>
              <nav aria-label="Mobile navigation">
                {groups.map(group => (
                  <div className="mobile-sheet-group" key={group.label}>
                    <h3>{group.label}</h3>
                    {group.links.map(([label, href]) => <div key={href} onClick={() => setMobileOpen(false)}><NavLink label={label} href={href} /></div>)}
                  </div>
                ))}
              </nav>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
