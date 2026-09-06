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
FIRST VIEWPORT: A sky-tinted introduction pairs a direct statement of the translation's purpose with its actual book cover and a prominent reading action beneath a compact white navigation header.
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
