import {
  InteriorHero,
  LinkArrow,
  PublicationCard,
  StorySection,
} from '@/components/Interior';
import { ResponsiveImage } from '@/components/ResponsiveImage';

export function PublicationsPage() {
  return (
    <>
      <InteriorHero
        title="English-North Korean Bilingual Bibles"
        image="current/gods-promises-side2.webp"
        imageAlt="God’s Promises: New Testament bilingual Bible"
      />

      <StorySection
        title="God’s Promises: New Testament"
        image="current/youversion-bible-icon.webp"
        imageAlt="YouVersion Bible App icon"
      >
        <p className="source-kicker">YouVersion Bible app</p>
        <p>
          <em>God’s Promises: New Testament</em> (2017) is our latest
          English-North Korean Bilingual Bible. We have worked with Tyndale
          House Publishers translate the beloved New Living Translation to
          modern North Korean.
        </p>
        <p>
          This work is now freely available in digital format in YouVersion’s
          Bible app as NLT North Korean (NLTNK) translation.
        </p>
        <LinkArrow href="https://www.bible.com/bible/3502/JHN.1.NLTNK" external>
          Read NLTNK on Bible.com
        </LinkArrow>
      </StorySection>

      <StorySection
        title="God’s Promises: Book of John"
        image="English-Korean Biligual Bible - Book of John.jpg"
        imageAlt="Cover of God’s Promises: Book of John"
        reverse
      >
        <p>
          <em>God’s Promises: Book of John</em> (2013) is our first published
          English-North Korean Bilingual Bible. We have worked with NET Bible
          to translate the Book of John in modern North Korean. This process
          laid the foundation for the subsequent translation of the entire
          New Testament in North Korean.
        </p>
        <LinkArrow href="https://netbible.com/" external>Visit the NET Bible</LinkArrow>
      </StorySection>

      <section className="reference-section">
        <div className="shell">
          <div className="section-heading">
            <h2>Publication references</h2>
            <p>Print and digital editions published with PBI’s translation partners.</p>
          </div>
          <div className="publication-list">
            <PublicationCard image="current/gods-promises-side2.webp" title="God’s Promises: New Testament">
              <dl className="spec-list">
                <div><dt>Translation</dt><dd>NLT English-North Korean bilingual Bible</dd></div>
                <div><dt>Author</dt><dd>Pyongyang Bible Institute</dd></div>
                <div><dt>Publisher</dt><dd>Hongsungsa</dd></div>
                <div><dt>Publication Date</dt><dd>2017</dd></div>
                <div><dt>ISBN</dt><dd>9788936512453</dd></div>
              </dl>
              <div className="inline-links">
                <LinkArrow href="https://www.logos.com/product/161668/hananimyi-yagsog-yesu-hupyeon" external>
                  Digital Print Edition Available
                </LinkArrow>
                <LinkArrow href="https://product.kyobobook.co.kr/detail/S000000614249" external>
                  Buy at Kyobo Store
                </LinkArrow>
              </div>
            </PublicationCard>

            <PublicationCard image="current/book-of-john-reference.webp" title="God’s Promises: Book of John">
              <dl className="spec-list">
                <div><dt>Translation</dt><dd>NET English-North Korean bilingual Bible</dd></div>
                <div><dt>Author</dt><dd>Pyongyang Bible Institute</dd></div>
                <div><dt>Publisher</dt><dd>Hongsungsa</dd></div>
                <div><dt>Publication Date</dt><dd>2013</dd></div>
                <div><dt>ISBN</dt><dd>9788936510008</dd></div>
              </dl>
              <LinkArrow href="https://product.kyobobook.co.kr/detail/S000000614114" external>
                Buy at Kyobo Store
              </LinkArrow>
            </PublicationCard>
          </div>
        </div>
      </section>

      <section className="rights-note">
        <div className="shell rights-note-grid">
          <ResponsiveImage
            image="current/publications-cherry-blossoms.webp"
            alt="Cherry blossoms beside an open Bible"
            sizes="(max-width: 700px) 88vw, 384px"
            loading="lazy"
          />
          <p>
            Pyongyang Bible Institute (PBI) provides its Bible content
            royalty-free to our publishing partners in both physical print and
            digital forms. For printed Bibles, we ask our publishing partners
            to maintain sale price that reasonably reflect the material,
            operational, and distribution costs.
          </p>
        </div>
      </section>
    </>
  );
}

export function TeensPage() {
  return (
    <>
      <InteriorHero
        title="English-North Korean Bible Stories for Children"
        image="Childrens bible story-small.png"
        imageAlt="Bible Stories: South and North Together three-book set"
      />
      <StorySection
        title="Bible Stories: South and North Together"
        image="Childrens bible story-small.png"
        imageAlt="Bible Stories: South and North Together three-book set"
      >
        <p>
          <em>Bible Stories: South and North Together</em> is a collection of
          twenty-five short stories based on characters and parables from the
          Bible in English-North Korean Bilingual format. While currently
          out of print, our plan is to update and make this material freely
          available in digital and audiobook formats.
        </p>
      </StorySection>
      <section className="video-section">
        <div className="shell source-video-wrap">
          <iframe
            className="video-frame"
            src="https://fast.wistia.net/embed/iframe/h5wa9okarf?wmode=opaque"
            title="Bible Stories: South and North Together video"
            allow="autoplay; fullscreen"
            loading="lazy"
          />
        </div>
      </section>
      <section className="reference-section">
        <div className="shell story-narrow">
          <div className="story-copy">
            <h2>Publication references</h2>
            <PublicationCard image="Childrens bible story-small.png" title="Bible Stories: South and North Together (3 book set)">
              <dl className="spec-list">
                <div><dt>Authors</dt><dd>Pyongyang Bible Institute, Marion Kim</dd></div>
                <div><dt>Publisher</dt><dd>Love One Korea Foundation</dd></div>
                <div><dt>Publication Date</dt><dd>2004 · no longer in print</dd></div>
              </dl>
              <LinkArrow href="https://www.yes24.com/Product/goods/20036794" external>
                Buy It Used
              </LinkArrow>
            </PublicationCard>
          </div>
        </div>
      </section>
    </>
  );
}

export function InProgressPage() {
  return (
    <>
      <InteriorHero
        title="Currently in progress"
        image="Gods Promises Side.png"
        imageAlt="God’s Promises bilingual New Testament"
      />
      <StorySection
        title="The New Testament, now digital"
        image="current/youversion-bible-icon.webp"
        imageAlt="YouVersion Bible App icon"
      >
        <p>
          With help from staff and volunteers at YouVersion, Digital Bible
          Library (DBL), and Tyndale the digital version of <em>God’s
          Promises: New Testament</em> is now available in Bible app as a
          freely downloadable Korean translation.
        </p>
        <p>
          Our team is currently working on developing an audio version of the
          New Testament which we hope to publish by 2024 also through
          YouVersion Bible app.
        </p>
        <p>
          Please check out why we are publishing Bible in modern North Korean
          diction and also why we feel strongly about presenting this Bible in
          a bilingual format suitable for students learning English as a
          second language (ESL).
        </p>
        <p>
          We are also starting digital and audiobook version of <em>Bible
          Stories: South and North Together</em>, which is a collection of 25
          short stories about notable characters in the Bible. These powerful
          stories demonstrate how God manifests in the lives of regular people
          and paints colors to the message of Good News.
        </p>
        <div className="inline-links">
          <LinkArrow href="https://www.youversion.com/bible-app" external>Get the Bible App</LinkArrow>
          <LinkArrow href="/en/whynkbible/">Why modern North Korean diction?</LinkArrow>
          <LinkArrow href="/en/whybilingual/">Why a bilingual format?</LinkArrow>
        </div>
      </StorySection>
      <section className="video-section">
        <div className="shell video-grid">
          <div>
            <h2>Bible stories in motion</h2>
            <p>The original PBI Bible story video remains available here.</p>
          </div>
          <iframe
            className="video-frame"
            src="https://fast.wistia.net/embed/iframe/h5wa9okarf?wmode=opaque"
            title="PBI Bible story video"
            allow="autoplay; fullscreen"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}
