import Link from 'next/link';
import { HeroMedia } from '@/components/HeroMedia';
import { PageShell } from '@/components/PageShell';

const features = [
  ['Why a North Korean Bible?', 'Why North Korean Bible.png', '/en/whynkbible/', 'feature-wide'],
  ['God’s Promises: New Testament', 'Gods Promises New Testament.png', '/en/publications/', ''],
  ['Behind the Translation', 'Behind the Scenes.png', '/en/about/#translation-session', ''],
  ['Looking Back', 'Looking Back.png', '/en/about/#timeline', ''],
  ['Pray With Us', 'Prayer Group Signup.png', '/en/prayer-newsletter/', ''],
  ['Support the Work', 'Donate.png', '/en/support/', 'feature-wide'],
] as const;

export default function Home() {
  return (
    <PageShell>
      <section className="home-hero" aria-labelledby="home-title">
        <HeroMedia />
        <div className="home-hero-shade" />
        <div className="home-hero-content shell">
          <h1 id="home-title">
            Scripture in the language North Korean readers use today.
          </h1>
          <p>
            PBI’s NLTNK translation carries the Good News across a widening
            language divide—clearly, faithfully, and side by side with English.
          </p>
          <div className="hero-actions">
            <a
              className="button button-light"
              href="https://www.bible.com/bible/3502/JHN.1.NLTNK"
              target="_blank"
              rel="noreferrer"
            >
              Read NLTNK at Bible.com <span aria-hidden="true">↗</span>
            </a>
            <Link className="text-link light-link" href="/en/whynkbible/">
              Why this translation matters <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="scripture-pair" aria-label="Acts 1:8 in English and North Korean">
        <div className="shell scripture-grid">
          <blockquote lang="en">
            <p className="source-verse">
              <span>“You will receive power when the Holy Spirit comes upon you. And you will be my witnesses,</span>{' '}
              <span>telling people about me everywhere—in Jerusalem, throughout Judea, in Samaria, and to</span>{' '}
              <span>the ends of the earth.”</span>
            </p>
            <cite><a href="https://www.bible.com/bible/3502/ACT.1.NLTNK" target="_blank" rel="noreferrer">Acts 1:8 NLT</a></cite>
          </blockquote>
          <blockquote lang="ko">
            <p className="source-verse">
              <span>너희는 성령님이 너희에게 오시면 너희는 능력을 받을 것이다. 그리고 너희는</span>{' '}
              <span>사람들에게 나에 대해 어디서나—예루살렘, 유태 온 지역, 사마리아, 그리고</span>{' '}
              <span>땅의 끝까지—말하면서, 나의 립증자들이 될 것이다.</span>
            </p>
            <cite><a href="https://www.bible.com/bible/3502/ACT.1.NLTNK" target="_blank" rel="noreferrer">선교활동 1:8 하나님의 약속</a></cite>
          </blockquote>
        </div>
      </section>
      <section className="youversion">
        <div className="shell youversion-grid">
          <div className="book-stage" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/Gods_Promises_New_Testament_Bible_Cover.png" alt="" loading="lazy" />
          </div>
          <div className="youversion-copy">
            <h2>God’s Promises is ready to read.</h2>
            <p>
              PBI’s complete New Testament translation is freely available as
              NLT North Korean (NLTNK) in the YouVersion Bible App on Android,
              iOS, and the web.
            </p>
            <a
              className="button button-dark"
              href="https://www.bible.com/bible/3502/JHN.1.NLTNK"
              target="_blank"
              rel="noreferrer"
            >
              Open the Bible <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
      <section className="home-features shell" aria-labelledby="explore-heading">
        <div className="section-heading">
          <h2 id="explore-heading">Explore the work</h2>
          <p>Read the case for a North Korean translation, meet the people behind it, and take part.</p>
        </div>
        <div className="feature-grid">
          {features.map(([title, image, href, className]) => (
            <Link className={`feature-tile ${className}`} href={href} key={title}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/assets/${image}`} alt="" loading="lazy" />
              <span>{title}<b aria-hidden="true"> ↗</b></span>
            </Link>
          ))}
        </div>
      </section>
      <section className="newsletter-cta">
        <div className="shell newsletter-inner">
          <div>
            <h2>Pray with us each month.</h2>
            <p>Receive prayer updates for North Korea and news from PBI’s translation work.</p>
          </div>
          <div className="newsletter-actions">
            <Link className="button button-light" href="/en/prayer-newsletter/">Prayer newsletter</Link>
            <a className="text-link light-link" href="mailto:contact@pybible.org?subject=Prayer%20newsletter%20request">
              Request by email <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
