import Link from 'next/link';
import { PageShell } from '@/components/PageShell';

export default function NotFound() {
  return (
    <PageShell>
      <section className="not-found-section">
        <div className="shell story-narrow">
          <p className="source-kicker">Page not found</p>
          <h1>This page is no longer here.</h1>
          <p>The archived PBI site may have moved this address during the transition from Squarespace.</p>
          <Link className="button button-dark" href="/">Return to the PBI homepage</Link>
        </div>
      </section>
    </PageShell>
  );
}
