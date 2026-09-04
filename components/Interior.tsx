import type { ReactNode } from 'react';
import Link from 'next/link';
import { ResponsiveImage } from '@/components/ResponsiveImage';

export function InteriorHero({
  title,
  intro,
  image,
  imageAlt = '',
  imageLayout = 'split',
}: {
  title: string;
  intro?: string;
  image?: string;
  imageAlt?: string;
  imageLayout?: 'split' | 'wide' | 'background';
}) {
  return (
    <section className={`interior-hero interior-hero-${imageLayout}`}>
      <div className={`shell interior-hero-grid ${image ? '' : 'interior-hero-text-only'}`}>
        <div>
          <h1>{title}</h1>
          {intro && <p>{intro}</p>}
        </div>
        {image && (
          <div className="interior-hero-media">
            <ResponsiveImage
              image={image}
              alt={imageAlt}
              sizes={imageLayout === 'background' ? '100vw' : imageLayout === 'wide' ? '92vw' : '(max-width: 700px) 88vw, 46vw'}
              fetchPriority="high"
            />
          </div>
        )}
      </div>
    </section>
  );
}

export function StorySection({
  title,
  image,
  imageAlt = '',
  reverse = false,
  id,
  children,
}: {
  title: string;
  image?: string;
  imageAlt?: string;
  reverse?: boolean;
  id?: string;
  children: ReactNode;
}) {
  return (
    <section className={`story-section ${reverse ? 'story-reverse' : ''}`} id={id}>
      <div className={`shell ${image ? 'story-grid' : 'story-narrow'}`}>
        {image && (
          <div className="story-media">
            <ResponsiveImage image={image} alt={imageAlt} sizes="(max-width: 700px) 88vw, 46vw" loading="lazy" />
          </div>
        )}
        <div className="story-copy">
          <h2>{title}</h2>
          {children}
        </div>
      </div>
    </section>
  );
}

export function LinkArrow({
  href,
  children,
  external = false,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  if (external) {
    return (
      <a className="text-link" href={href} target="_blank" rel="noreferrer">
        {children} <span aria-hidden="true">↗</span>
      </a>
    );
  }

  return (
    <Link className="text-link" href={href}>
      {children} <span aria-hidden="true">→</span>
    </Link>
  );
}

export function PublicationCard({
  image,
  title,
  children,
}: {
  image: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="publication-item">
      <div className="publication-cover">
        <ResponsiveImage image={image} alt={title} sizes="(max-width: 700px) 75vw, (max-width: 960px) 230px, 30vw" loading="lazy" />
      </div>
      <div>
        <h3>{title}</h3>
        {children}
      </div>
    </article>
  );
}
