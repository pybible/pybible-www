import Link from 'next/link';
import { PageShell } from '@/components/PageShell';
import { ResponsiveImage } from '@/components/ResponsiveImage';

const features = [
  ['Why a North Korean Bible?', 'current/korean-language-divide.webp', '/en/whynkbible/'],
  ['God’s Promises: New Testament', 'current/publications-cherry-blossoms.webp', '/en/publications/'],
  ['Behind the Translation', 'ProfKimDuringLecture.png', '/en/about/#translation-session'],
  ['Looking Back', 'PBI founding members.jpg', '/en/about/#timeline'],
  ['Prayer Group Signup', 'current/prayer-newsletter.webp', '/en/prayer-newsletter/'],
  ['Support Our Work', 'current/support-prayer.webp', '/en/support/'],
] as const;

export default function Home() {
  return (
    <PageShell>
      <section className="translation-intro">
        <div className="shell translation-intro-grid">
          <div className="translation-intro-copy">
            <h1>Scripture in the language of North Korea.</h1>
            <p>Discover <em>God’s Promises</em> — an English–North Korean bilingual Bible, bringing Scripture into modern North Korean diction.</p>
            <div className="translation-actions">
              <a className="button button-dark" href="https://www.bible.com/bible/3502/JHN.1.NLTNK" target="_blank" rel="noreferrer">Read the Bible <span aria-hidden="true">↗</span></a>
              <Link className="text-link" href="/en/whynkbible/">Why this translation matters <span aria-hidden="true">→</span></Link>
            </div>
          </div>
          <figure className="translation-book">
            <ResponsiveImage image="Gods Promises Side.png" alt="God’s Promises: English–North Korean New Testament" sizes="(max-width: 700px) 76vw, 36vw" fetchPriority="high" />
            <figcaption>God’s Promises <span>English · North Korean</span></figcaption>
          </figure>
        </div>
      </section>
      <section className="source-home-verse">
        <div className="shell source-verse-grid">
          <blockquote lang="en">
            <p>
              <span>“You will receive power when the Holy Spirit comes upon you.</span>
              {' '}<span>And you will be my witnesses,</span>
              {' '}<span>telling people about me everywhere—in Jerusalem, throughout Judea, in Samaria,</span>
              {' '}<span>and to the ends of the earth.”</span>
            </p>
            <cite>Acts 1:8 NLT</cite>
          </blockquote>
          <blockquote lang="ko">
            <p>
              <span>너희는 성령님이 너희에게 오시면 너희는 능력을 받을 것이다.</span>
              {' '}<span>그리고 너희는 사람들에게 나에 대해 어디서나—예루살렘, 유태 온 지역,</span>
              {' '}<span>사마리아, 그리고 땅의 끝까지—말하면서, 나의 립증자들이 될 것이다.</span>
            </p>
            <cite>선교활동 1:8 하나님의 약속</cite>
          </blockquote>
        </div>
      </section>
      <section className="source-youversion">
        <div className="shell source-youversion-grid">
          <ResponsiveImage image="current/youversion-bible-icon.webp" alt="YouVersion Bible App" sizes="109px" />
          <p>
            NLTNK translation <em>God’s Promises: New Testament</em> is now
            available on YouVersion Bible App on Android or iOS.
          </p>
        </div>
      </section>
      <section className="source-gallery shell" aria-label="Explore Pyongyang Bible Institute">
        {features.map(([title, image, href]) => (
          <Link href={href} key={title} aria-label={title}>
            <ResponsiveImage image={image} alt="" className={image === 'ProfKimDuringLecture.png' ? 'photo-focus-top' : undefined} sizes="(max-width: 700px) 88vw, 30vw" loading="lazy" />
            <span className="feature-caption">{title}<span aria-hidden="true">↗</span></span>
          </Link>
        ))}
      </section>
    </PageShell>
  );
}
