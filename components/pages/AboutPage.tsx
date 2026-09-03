import { InteriorHero, LinkArrow, PublicationCard, StorySection } from '@/components/Interior';

const timeline = [
  ['1932', 'Taeyoung Kim is born in South Hamgyong, North Korea.'],
  ['1954–1987', 'He teaches at Pyongyang Kim Hyong Jik University of Education.'],
  ['1988–1991', 'He serves as an exchange professor at Russian National Education University.'],
  ['2003–2006', 'He is a visiting professor at Yale University Divinity School.'],
  ['2007', 'At the Reah International conference, Professor Kim presents the need for a modern North Korean Bible translation.'],
  ['2008', 'Pyongyang Bible Institute is founded in Fairfax, Virginia.'],
  ['2011', 'PBI receives permission from the NET Bible to translate and publish the Book of John.'],
  ['2013 — license', 'PBI receives permission from Tyndale House Publishers to translate the New Living Translation.'],
  ['2013', 'PBI publishes God’s Promises: Book of John.'],
  ['2017', 'PBI publishes God’s Promises: New Testament in NLT English–North Korean.'],
  ['2019', 'Professor Kim dies after completing the New Testament translation.'],
  ['2022', 'The NLTNK translation is released digitally through YouVersion.'],
];

const team = [
  ['Hyun Ja Kim', 'Project Lead', '김현식, 김현자.jpg'],
  ['Yoo Jin Kim', 'Administration', 'yoojinkim.jpg'],
  ['Jong Woo Lee', 'Volunteer Coordinator', 'jongwoolee.JPG'],
  ['Jin Keol Park', 'Legal Counsel', 'Jin Keol Park.jpg'],
  ['Rex Lee', 'External Liaison', 'jisoolee.jpg'],
];

export function AboutPage() {
  return (
    <>
      <InteriorHero
        title="A translation shaped by lived experience"
        intro="PBI began around Professor Hyunsik Kim’s conviction that North Korean readers should meet Scripture without first having to decode unfamiliar South Korean words."
        image="PBI founding members.jpg"
        imageAlt="Founding members of Pyongyang Bible Institute"
      />

      <StorySection title="Our story" image="group_pic.jpg" imageAlt="PBI members gathered together">
        <p>
          At the 2007 Reah International conference, a group of attendees met
          Professor Hyunsik Kim and heard his case for a modern Bible
          translation for North Korea—one that did not depend on Sino-Korean
          words unfamiliar to many North Korean readers.
        </p>
        <p>
          After the workshop, people gathered to pray that Professor Kim,
          then 76, would have strength to take up the work. Volunteers
          continued meeting at his home, and Pyongyang Bible Institute, Inc.
          was founded in December 2008.
        </p>
        <LinkArrow href="https://reah.org" external>Visit Reah International</LinkArrow>
      </StorySection>

      <section className="mission-panel" id="mission">
        <div className="shell mission-grid">
          <div>
            <h2>Our mission</h2>
            <p>To provide an accessible modern translation of the Bible for the people of North Korea.</p>
          </div>
          <div>
            <h2>Our vision</h2>
            <p>People of North Korea meeting Jesus and encountering life anew as beloved children of God.</p>
          </div>
          <div>
            <h2>Our core values</h2>
            <ul>
              <li>Dependence on God’s leading</li>
              <li>Accountability and transparency</li>
              <li>Commitment to excellence</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="timeline-section" id="timeline">
        <div className="shell">
          <div className="section-heading">
            <h2>Timeline of our history</h2>
            <p>From Professor Kim’s years in North Korea to a complete New Testament translation.</p>
          </div>
          <ol className="timeline">
            {timeline.map(([year, event]) => (
              <li key={year}>
                <time>{year}</time>
                <p>{event}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="team-section" id="team">
        <div className="shell">
          <div className="section-heading">
            <h2>Our team</h2>
            <p>Staff and volunteers continuing PBI’s translation and publishing work.</p>
          </div>
          <div className="team-grid">
            {team.map(([name, role, image]) => (
              <article className="team-member" key={name}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/assets/${image}`} alt={name} loading="lazy" />
                <div><h3>{name}</h3><p>{role}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <StorySection
        title="Professor Hyunsik Kim"
        image="ProfKimDuringLecture.png"
        imageAlt="Professor Hyunsik Kim during a lecture"
      >
        <p>
          PBI was founded by Hyunsik Kim, born Taeyoung Kim, a linguistics
          professor who taught at Kim Hyong Jik University of Education in
          North Korea for nearly forty years. After defecting to South Korea
          and later immigrating to the United States, he led translation
          projects including children’s Bible stories and an English–North
          Korean dictionary.
        </p>
        <p>
          Professor Kim founded PBI in 2008 and remained lead translator until
          his death in August 2019. He often reminded visitors of the
          transformative power of Jesus and the Good News.
        </p>
        <LinkArrow href="https://foreignpolicy.com/2009/10/06/the-secret-history-of-kim-jong-il/" external>
          Read Professor Kim’s Foreign Policy account
        </LinkArrow>
      </StorySection>

      <section className="profile-section">
        <div className="shell profile-grid">
          <div className="profile-image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/disguised-in-russia.jpg" alt="Professor Kim while living in Russia" loading="lazy" />
          </div>
          <div>
            <h2>Academic profile of Taeyoung Kim</h2>
            <ul className="profile-list">
              <li>Born in South Hamgyong, North Korea, 1932</li>
              <li>North Korean People’s Army soldier during the Korean War, 1950</li>
              <li>Professor at Pyongyang Kim Hyong Jik University of Education, 1954–1987</li>
              <li>Exchange professor at Russian National Education University, 1988–1991</li>
              <li>Changed his name from Taeyoung Kim to Hyunsik Kim for security</li>
              <li>Professor at Seoul Foreign Language University and KCIA University, 1994–1999</li>
              <li>Visiting professor at New Orleans Baptist Theological Seminary, 2001–2002</li>
              <li>Visiting professor at Yale University Divinity School, 2003–2006</li>
              <li>Research professor at George Mason University, 2007–2017</li>
              <li>Founded Pyongyang Bible Institute in Fairfax, Virginia, 2008</li>
            </ul>
          </div>
        </div>
      </section>

      <StorySection
        title="By his side"
        image="아내 김현자.jpg"
        imageAlt="Professor Kim with his wife, Hyun Ja Kim"
        reverse
      >
        <p>
          After a brain aneurysm left Professor Kim unable to control the left
          side of his body, he relied on his wife. Despite significant speech
          difficulty and the use of a wheelchair, he spoke at nearly fifty
          venues—including Yale, Harvard, Duke, Tufts, Georgetown, UC Berkeley,
          UC San Diego, the University of Washington, Williams College, and
          Fuller Theological Seminary. Mrs. Kim made that work possible at his
          side.
        </p>
      </StorySection>

      <section className="video-section" id="translation-session">
        <div className="shell video-grid">
          <div>
            <h2>Translation review session</h2>
            <p>
              This recording captures a May 21, 2014 review of a Bible passage.
              In sessions like this, Professor Kim sometimes compared English
              and Korean passages with Japanese and Russian translations.
            </p>
          </div>
          <video controls preload="metadata">
            <source src="/assets/Bible Translation Record 2014-05-21.mp4" type="video/mp4" />
            Your browser does not support embedded video.
          </video>
        </div>
      </section>

      <section className="past-work">
        <div className="shell">
          <div className="section-heading">
            <h2>Past translation projects</h2>
            <p>Professor Kim’s work before and alongside the 2017 New Testament.</p>
          </div>
          <div className="past-work-grid">
            <PublicationCard image="English-Korean Biligual Bible - Book of John.jpg" title="God’s Promises: Book of John">
              <p>English–North Korean bilingual Book of John, 2013.</p>
            </PublicationCard>
            <PublicationCard image="Childrens bible story-small.png" title="Bible Stories: South and North Together">
              <p>Twenty-five bilingual Bible stories, 2004.</p>
            </PublicationCard>
            <PublicationCard image="NorthSouthDictionary.jpg" title="Korea Re-Unification Dictionary">
              <p>About 10,000 words that differ between North and South Korean usage, 2007.</p>
              <LinkArrow href="http://www.tongilnews.com/news/articleView.html?idxno=70330" external>
                Note on listed authorship
              </LinkArrow>
            </PublicationCard>
          </div>
        </div>
      </section>

      <StorySection title="Focusing on Jesus and his Good News" image="Baptism.jpg" imageAlt="A baptism">
        <p>
          Professor Kim published two autobiographies that offer a view into
          North Korean life after the Korean War and the events that led him to
          Bible translation. PBI’s central conviction, often repeated by
          Professor and Mrs. Kim, is that Jesus is the ultimate transformative
          force. PBI continues to promote the living words of Jesus through
          Scripture and teaching resources.
        </p>
        <ul>
          <li><em>80 years, 35,000 km</em>, second autobiography, 2013 · ISBN 9788936503147</li>
          <li><em>I am a nomad in the 21st century</em>, first autobiography, 2007 · ISBN 9788934925491</li>
          <li><em>Documentary Kim Jung Il</em>, firsthand account and essay, 1997 · ISBN 9788986144062</li>
        </ul>
      </StorySection>
    </>
  );
}
