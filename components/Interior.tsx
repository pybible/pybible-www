import type { ReactNode } from 'react';
import Link from 'next/link';

export function InteriorHero({
  title,
  intro,
  image,
  imageAlt = '',
}: {
  title: string;
  intro: string;
  image: string;
  imageAlt?: string;
}) {
  return (
    <section className="interior-hero">
      <div className="shell interior-hero-grid">
        <div>
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
        <div className="interior-hero-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/assets/${image}`} alt={imageAlt} fetchPriority="high" />
        </div>
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/assets/${image}`} alt={imageAlt} loading="lazy" />
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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`/assets/${image}`} alt={title} loading="lazy" />
      </div>
      <div>
        <h3>{title}</h3>
        {children}
      </div>
    </article>
  );
}
