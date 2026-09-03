import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.pybible.org'),
  title: {
    default: 'Pyongyang Bible Institute — NLTNK',
    template: '%s — Pyongyang Bible Institute',
  },
  description:
    'Pyongyang Bible Institute provides an accessible Bible translation in modern North Korean diction.',
  alternates: { canonical: '/' },
  icons: {
    icon: '/assets/PBI favicon.png',
    apple: '/assets/PBI favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Pyongyang Bible Institute',
    title: 'Pyongyang Bible Institute — NLTNK',
    description:
      'An accessible Bible translation in modern North Korean diction.',
    images: [{ url: '/assets/Splash.png', width: 1504, height: 1125 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pyongyang Bible Institute — NLTNK',
    description:
      'An accessible Bible translation in modern North Korean diction.',
    images: ['/assets/Splash.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
