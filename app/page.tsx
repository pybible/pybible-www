import Link from 'next/link';
import { PageShell } from '@/components/PageShell';
import { ResponsiveImage } from '@/components/ResponsiveImage';

const features = [
  ['Why a North Korean Bible?', 'Why North Korean Bible.png', '/en/whynkbible/'],
  ['God’s Promises: New Testament', 'Gods Promises New Testament.png', '/en/publications/'],
  ['Behind the Translation', 'Behind the Scenes.png', '/en/about/#translation-session'],
  ['Looking Back', 'Looking Back.png', '/en/about/#timeline'],
  ['Prayer Group Signup', 'Prayer Group Signup.png', '/en/prayer-newsletter/'],
  ['Donate', 'Donate.png', '/en/support/'],
] as const;

export default function Home() {
  return (
    <PageShell>
      <h1 className="sr-only">Pyongyang Bible Institute</h1>
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
            <ResponsiveImage image={image} alt="" sizes="(max-width: 700px) 44vw, 30vw" loading="lazy" />
          </Link>
        ))}
      </section>
    </PageShell>
  );
}
