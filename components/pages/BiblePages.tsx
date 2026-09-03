import {
  InteriorHero,
  LinkArrow,
  PublicationCard,
  StorySection,
} from '@/components/Interior';

export function PublicationsPage() {
  return (
    <>
      <InteriorHero
        title="English–North Korean Bilingual Bibles"
        intro="PBI publishes modern North Korean translations beside trusted English Bible texts, making Scripture and language learning available on the same page."
        image="Gods Promises Side2.png"
        imageAlt="God’s Promises: New Testament bilingual Bible"
      />

      <StorySection
        title="God’s Promises: New Testament"
        image="Gods_Promises_New_Testament_Bible_Cover.png"
        imageAlt="Cover of God’s Promises: New Testament"
      >
        <p>
          Published in 2017, this is our latest English–North Korean bilingual
          Bible. PBI worked with Tyndale House Publishers to translate the
          New Living Translation into modern North Korean.
        </p>
        <p>
          The work is freely available in digital format in YouVersion’s Bible
          app as the NLT North Korean (NLTNK) translation.
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
          Published in 2013, our first English–North Korean bilingual Bible
          paired the NET Bible’s Book of John with a modern North Korean
          translation. The work laid the foundation for the complete New
          Testament translation that followed.
        </p>
        <LinkArrow href="https://netbible.org" external>Visit the NET Bible</LinkArrow>
      </StorySection>

      <section className="reference-section">
        <div className="shell">
          <div className="section-heading">
            <h2>Publication references</h2>
            <p>Print and digital editions published with PBI’s translation partners.</p>
          </div>
          <div className="publication-list">
            <PublicationCard
              image="Gods Promises Side v2.jpg"
              title="God’s Promises: New Testament"
            >
              <dl className="spec-list">
                <div><dt>Translation</dt><dd>NLT English–North Korean</dd></div>
                <div><dt>Publisher</dt><dd>Hongsungsa</dd></div>
                <div><dt>Published</dt><dd>2017</dd></div>
                <div><dt>ISBN</dt><dd>9788936512453</dd></div>
              </dl>
              <div className="inline-links">
                <LinkArrow href="https://www.logos.com/product/161668/hananimyi-yagsog-yesu-hupyeon" external>
                  Digital print edition
                </LinkArrow>
                <LinkArrow href="http://www.kyobobook.co.kr/product/detailViewKor.laf?barcode=9788936512453" external>
                  Kyobo Store
                </LinkArrow>
              </div>
            </PublicationCard>

            <PublicationCard
              image="English-Korean Biligual Bible - Book of John.jpg"
              title="God’s Promises: Book of John"
            >
              <dl className="spec-list">
                <div><dt>Translation</dt><dd>NET English–North Korean</dd></div>
                <div><dt>Publisher</dt><dd>Hongsungsa</dd></div>
                <div><dt>Published</dt><dd>2013</dd></div>
                <div><dt>ISBN</dt><dd>9788936510008</dd></div>
              </dl>
              <LinkArrow href="http://www.kyobobook.co.kr/product/detailViewKor.laf?barcode=9788936510008" external>
                Kyobo Store
              </LinkArrow>
            </PublicationCard>
          </div>
        </div>
      </section>

      <section className="rights-note">
        <div className="shell">
          <p>
            PBI provides its Bible content royalty-free to publishing partners
            in physical print and digital forms. For printed Bibles, we ask
            partners to keep the sale price reasonably aligned with material,
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
        title="Bible stories for children and teens"
        intro="Twenty-five stories introduce the people and parables of the Bible in an English–North Korean bilingual format."
        image="Childrens bible story-small.png"
        imageAlt="Bible Stories: South and North Together three-book set"
      />
      <StorySection title="South and North Together" image="bible.jpg" imageAlt="An open Bible">
        <p>
          <em>Bible Stories: South and North Together</em> is a collection of
          twenty-five short stories based on characters and parables from the
          Bible. Each story appears in English and North Korean.
        </p>
        <p>
          The set is currently out of print. PBI plans to update the material
          and make it freely available in digital and audiobook formats.
        </p>
      </StorySection>
      <section className="reference-section">
        <div className="shell story-narrow">
          <div className="story-copy">
            <h2>Publication reference</h2>
            <PublicationCard
              image="Childrens bible story-small.png"
              title="Bible Stories: South and North Together"
            >
              <dl className="spec-list">
                <div><dt>Authors</dt><dd>Pyongyang Bible Institute, Marion Kim</dd></div>
                <div><dt>Publisher</dt><dd>Love One Korea Foundation</dd></div>
                <div><dt>Published</dt><dd>2004 · no longer in print</dd></div>
              </dl>
              <LinkArrow href="http://www.yes24.com/Product/goods/20036794" external>
                Find a used copy
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
        intro="PBI is carrying its written translations into formats that more people can hear, study, and share."
        image="Gods Promises Side.png"
        imageAlt="God’s Promises bilingual New Testament"
      />
      <StorySection
        title="The New Testament, now digital"
        image="Gods Promises.jpg"
        imageAlt="God’s Promises New Testament"
      >
        <p>
          With help from staff and volunteers at YouVersion, the Digital Bible
          Library, and Tyndale, <em>God’s Promises: New Testament</em> is
          available in the Bible App as a free Korean translation.
        </p>
        <LinkArrow href="https://www.youversion.com/the-bible-app/" external>
          Get the Bible App
        </LinkArrow>
      </StorySection>
      <StorySection title="Audio Scripture" image="Lecture2.png" imageAlt="Bible translation session" reverse>
        <p>
          Our team is developing an audio version of the New Testament for
          publication through the YouVersion Bible App. The source site
          announced a 2024 hope for publication; no later release date has been
          confirmed here.
        </p>
      </StorySection>
      <StorySection title="Stories for younger listeners" image="Childrens bible story-small.png" imageAlt="Bible Stories book set">
        <p>
          Work is also beginning on digital and audiobook versions of
          <em> Bible Stories: South and North Together</em>, a collection of
          twenty-five stories about notable people in the Bible and the ways
          God meets regular people.
        </p>
        <div className="inline-links">
          <LinkArrow href="/en/whynkbible/">Why modern North Korean diction?</LinkArrow>
          <LinkArrow href="/en/whybilingual/">Why a bilingual format?</LinkArrow>
        </div>
      </StorySection>
      <section className="video-section">
        <div className="shell video-grid">
          <div>
            <h2>A story in motion</h2>
            <p>
              This short Bible-story video is part of the teaching material
              preserved from the original PBI website.
            </p>
          </div>
          <video controls preload="metadata" poster="/assets/Childrens bible story-small.png">
            <source src="/assets/bible_story.mp4" type="video/mp4" />
            Your browser does not support embedded video.
          </video>
        </div>
      </section>
    </>
  );
}
