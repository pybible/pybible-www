import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main shell">
        <div className="footer-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/PBI logo - mobile.png" alt="Pyongyang Bible Institute" loading="lazy" />
          <p>Making Scripture clear in the language North Korean readers use today.</p>
        </div>

        <div className="footer-links">
          <div>
            <p>Pyongyang Bible Institute</p>
            <Link href="/en/about/">About Us</Link>
            <Link href="/en/about/#mission">Our Mission</Link>
            <Link href="/en/about/#timeline">Our Timeline</Link>
            <Link href="/en/about/#team">Our Team</Link>
          </div>
          <div>
            <p>Stay Connected</p>
            <Link href="/en/contactus/">Contact Us</Link>
            <Link href="/en/prayer-newsletter/">Get Monthly Prayer Calendar</Link>
            <a href="https://www.youtube.com/channel/UCgGTwcezTmKx3bILAYCyJfg" target="_blank" rel="noreferrer">YouTube</a>
          </div>
        </div>
      </div>

      <div className="footer-legal shell">
        <p>Pyongyang Bible Institute, Inc · 501(c)(3) tax-exempt organization · EIN: 26-4108392</p>
        <address>3609 Mercedes Way, Fairfax, VA 22030-2953</address>
      </div>
    </footer>
  );
}
