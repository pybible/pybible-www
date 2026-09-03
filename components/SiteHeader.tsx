import Link from 'next/link';

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
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="Pyongyang Bible Institute home">
          {/* The supplied logo is the visual source of truth for the wordmark. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="brand-desktop-logo" src="/assets/PBI logo.png" alt="Pyongyang Bible Institute" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="brand-mobile-logo" src="/assets/PBI logo - mobile.png" alt="Pyongyang Bible Institute" />
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navGroups.map((group) => (
            <details className="nav-group" key={group.label}>
              <summary>{group.label}</summary>
              <div className="nav-popover">
                {group.links.map((link) =>
                  link.external ? (
                    <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                      {link.label}<span aria-hidden="true"> ↗</span>
                    </a>
                  ) : (
                    <Link key={link.label} href={link.href}>{link.label}</Link>
                  ),
                )}
              </div>
            </details>
          ))}
        </nav>

        <details className="mobile-nav">
          <summary aria-label="Open navigation"><span>Menu</span></summary>
          <nav aria-label="Mobile navigation">
            {navGroups.map((group) => (
              <div className="mobile-nav-group" key={group.label}>
                <p>{group.label}</p>
                {group.links.map((link) =>
                  link.external ? (
                    <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                      {link.label}<span aria-hidden="true"> ↗</span>
                    </a>
                  ) : (
                    <Link key={link.label} href={link.href}>{link.label}</Link>
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
