import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const paths = [
  '',
  '/en/publications/',
  '/en/teens/',
  '/en/inprogress/',
  '/en/whynkbible/',
  '/en/whybilingual/',
  '/en/about/',
  '/en/support/',
  '/en/prayer-newsletter/',
  '/en/contactus/',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `https://www.pybible.org${path}`,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.75,
  }));
}
