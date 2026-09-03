import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Home from '@/app/page';
import { PageShell } from '@/components/PageShell';
import { AboutPage } from '@/components/pages/AboutPage';
import { InProgressPage, PublicationsPage, TeensPage } from '@/components/pages/BiblePages';
import { ContactPage, PrayerNewsletterPage, SupportPage } from '@/components/pages/InvolvementPages';
import { WhyBilingualPage, WhyNorthKoreanBiblePage } from '@/components/pages/LearningPages';

const pageMeta = {
  home: {
    title: 'Home',
    description: 'PBI provides an accessible Bible translation in modern North Korean diction.',
  },
  publications: {
    title: 'Bible Publications',
    description: 'English–North Korean bilingual Bible publications from Pyongyang Bible Institute.',
  },
  teens: {
    title: 'Children and Teens',
    description: 'English–North Korean Bible stories for children and teens.',
  },
  inprogress: {
    title: 'Currently In Progress',
    description: 'Digital and audio Bible projects currently in progress at PBI.',
  },
  whynkbible: {
    title: 'Why a North Korean Bible?',
    description: 'Why North Korean readers need Scripture translated in modern North Korean diction.',
  },
  whybilingual: {
    title: 'Why Make It Bilingual?',
    description: 'How an English–North Korean bilingual Bible supports students and teachers.',
  },
  about: {
    title: 'About PBI',
    description: 'The mission, history, and team of Pyongyang Bible Institute.',
  },
  support: {
    title: 'Support PBI with Prayer',
    description: 'Join Pyongyang Bible Institute in praying for the people of North Korea.',
  },
  'prayer-newsletter': {
    title: 'Prayer Newsletter',
    description: 'Request the monthly North Korea prayer newsletter shared by PBI.',
  },
  contactus: {
    title: 'Contact Us',
    description: 'Contact Pyongyang Bible Institute with questions, feedback, or corrections.',
  },
} as const;

type Slug = keyof typeof pageMeta;

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(pageMeta).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!(slug in pageMeta)) return {};
  const meta = pageMeta[slug as Slug];
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: slug === 'home' ? '/' : `/en/${slug}/` },
    openGraph: {
      title: `${meta.title} — Pyongyang Bible Institute`,
      description: meta.description,
      url: slug === 'home' ? '/' : `/en/${slug}/`,
    },
    twitter: {
      title: `${meta.title} — Pyongyang Bible Institute`,
      description: meta.description,
    },
  };
}

function renderPage(slug: Slug) {
  switch (slug) {
    case 'publications': return <PublicationsPage />;
    case 'teens': return <TeensPage />;
    case 'inprogress': return <InProgressPage />;
    case 'whynkbible': return <WhyNorthKoreanBiblePage />;
    case 'whybilingual': return <WhyBilingualPage />;
    case 'about': return <AboutPage />;
    case 'support': return <SupportPage />;
    case 'prayer-newsletter': return <PrayerNewsletterPage />;
    case 'contactus': return <ContactPage />;
    default: return null;
  }
}

export default async function PublicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!(slug in pageMeta)) notFound();
  if (slug === 'home') return <Home />;

  return <PageShell>{renderPage(slug as Slug)}</PageShell>;
}
