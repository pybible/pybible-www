import type { ReactNode } from 'react';
import { SiteFooter } from './SiteFooter';
import { SiteHeader } from './SiteHeader';

export function DirectionContract() {
  return (
    <span
      hidden
      dangerouslySetInnerHTML={{
        __html: `<!--
THESIS: Let the translation itself lead; refuse a generic charity hero followed by interchangeable appeal cards.
OWN-WORLD: Sky blue, ink black, and white; documentary photography, bilingual text, crisp rules, and book-cover silhouettes.
STORY: Visitors understand the language barrier, see PBI's translation work, then read, pray, support, or contact.
FIRST VIEWPORT: A full-width documentary scene carries the mission line; the compact white wordmark header and a clear reading action remain immediately available.
FORM: An archival field guide, chosen to preserve the established identity and organize the source site's full public record.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->`,
      }}
    />
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <DirectionContract />
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}
