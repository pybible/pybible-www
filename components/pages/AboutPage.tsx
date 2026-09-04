import { LinkArrow, PublicationCard, StorySection } from '@/components/Interior';
import { ResponsiveImage } from '@/components/ResponsiveImage';

const team = [
  ['Hyun Ja Kim', 'Project Lead', 'current/prof-and-mrs-kim.webp'],
  ['Yoo Jin Kim', 'Administration', 'current/yoo-jin-kim.webp'],
  ['Jong Woo Lee', 'Volunteer Coordinator', 'current/jong-woo-lee.webp'],
  ['Jin Keol Park', 'Legal Counsel', 'current/jin-keol-park.webp'],
  ['Rex Lee', 'External Liaison', 'current/rex-lee.webp'],
];

export function AboutPage() {
  return (
    <>
      <section className="about-story">
        <div className="shell about-story-grid">
          <div className="about-story-copy">
            <h1>Our Story</h1>
            <p>
              A group of people attending 2007 Reah International conference
              {' '}(<a href="https://www.reah.org/" target="_blank" rel="noreferrer">reah.org</a>) met
              Prof. Hyunsik Kim who presented a talk on the need for modern
              translation of Bible for North Korea. The case for a dedicated North
              Korean translation of the Bible without use of Sino-Korean words
              unfamiliar to North Korean readers were presented. After the
              completion of the workshop, people gathered to ask the Lord to give
              Prof. Kim the strength to take up the mantle of Bible translation.
              Prof. Kim was 76 years old at the time. After the conference some
              volunteers continue to meet at Prof. Kim’s house and Pyongyang Bible
              Institute Inc. was founded in December 2008.
            </p>
          </div>
          <div className="about-story-media">
            <ResponsiveImage image="PBI founding members.jpg" alt="Founding members of Pyongyang Bible Institute" sizes="(max-width: 960px) 88vw, 46vw" fetchPriority="high" />
          </div>
        </div>
      </section>

      <section className="about-principles" id="mission">
        <div className="shell about-principles-grid">
          <figure className="about-principle-media about-mission-media">
            <ResponsiveImage image="current/about-mission.webp" alt="A historic Korean family photograph" sizes="(max-width: 960px) 88vw, 651px" loading="lazy" />
          </figure>
          <div className="about-principle-copy about-mission-copy">
            <h2>Our Mission</h2>
            <p>To provide accessible modern translation of Bible for people of North Korea.</p>
          </div>

          <div className="about-principle-copy about-vision-copy">
            <h2>Our Vision</h2>
            <p>People of North Korea meeting Jesus and encountering life anew as beloved children of God.</p>
          </div>
          <figure className="about-principle-media about-vision-media">
            <ResponsiveImage image="KASCON.jpg" alt="Professor Kim speaking at KASCON" sizes="(max-width: 960px) 88vw, 651px" loading="lazy" />
          </figure>

          <figure className="about-principle-media about-values-media">
            <ResponsiveImage image="North_Korean_students.jpg" alt="North Korean students" sizes="(max-width: 960px) 88vw, 651px" loading="lazy" />
          </figure>
          <div className="about-principle-copy about-values-copy">
            <h2>Our Core Values</h2>
            <ul>
              <li>Dependence on God’s Leading</li>
              <li>Accountability and Transparency</li>
              <li>Commitment to Excellence</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="timeline-section" id="timeline">
        <div className="shell">
          <div className="section-heading">
            <h2>Timeline of Events in Our History</h2>
          </div>
          <iframe
            className="timeline-frame"
            src="/timeline/index.html"
            data-original-source="1vjDzTt-zc2e8VwPZ_t65iUGftNaj8GydFp3mhp_QbGk"
            title="Timeline of events in Pyongyang Bible Institute history"
            width="100%"
            height="650"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </section>

      <section className="team-section" id="team">
        <div className="shell">
          <div className="section-heading">
            <h2>Our Team Members</h2>
          </div>
          <div className="team-grid">
            {team.map(([name, role, image]) => (
              <figure className="team-member" key={name}>
                <ResponsiveImage image={image} alt={name} sizes="(max-width: 700px) 300px, (max-width: 960px) 44vw, 210px" loading="lazy" />
                <figcaption><span>{name}</span><span>{role}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <StorySection
        title="Interesting story of Prof. Kim"
        image="ProfKimDuringLecture.png"
        imageAlt="Professor Hyunsik Kim during a lecture"
      >
        <p>
          Pyongyang Bible Institute was founded by Hyunsik Kim (born Taeyoung
          Kim), a linguistics professor from North Korea. He worked at Kim
          Hyong Jik University of Education in North Korea for nearly 40 years
          after which he defected to South Korea and eventually immigrated to
          United States. He carried out several translation projects such as
          children’s Bible stories and English-North Korean dictionary.
        </p>
        <p>
          Pyongyang Bible Institute was founded by Hyunsik Kim in 2008 and he
          has served as the lead translator until his passing on August 2019.
          Hyunsik was an ardent believer in the transformative power of Jesus
          and the message of Good News and often reminded those visiting him at
          his home in Fairfax, Virginia.
        </p>
        <p>
          Prof. Kim passed away on August 8, 2019 having completed the New
          Testament translation of New Living Bible (NLT) bible published in
          2017.
        </p>
        <LinkArrow href="https://foreignpolicy.com/2009/10/06/the-secret-history-of-kim-jong-il/" external>
          Read his Foreign Policy article to learn more about Professor Kim’s own account of life in North Korea
        </LinkArrow>
      </StorySection>

      <section className="profile-section">
        <div className="shell profile-grid">
          <div className="profile-image">
            <ResponsiveImage image="current/prof-kim-couple.webp" alt="Professor and Mrs. Kim" sizes="(max-width: 700px) 88vw, 419px" loading="lazy" />
          </div>
          <div>
            <h2>Academic profile of Taeyoung Kim</h2>
            <ul className="profile-list">
              <li>Born 1932 in South Hamyong, North Korea</li>
              <li>Participated in Korean War as a soldier of North Korean People’s Army, 1950</li>
              <li>Professor at Pyongyang Kim Hyong Jik University of Education, 1954~1987</li>
              <li>Exchange Professor at Russian National Education University, 1988~1991</li>
              <li>Changed name from Taeyoung Kim to Hyunsik Kim for security reasons</li>
              <li>Professor at Seoul Foreign Language University, and KCIA University, 1994~1999</li>
              <li>Visiting Professor at New Orleans Baptist Theological Seminary, 2001~2002</li>
              <li>Visiting Professor at Yale University Divinity School, 2003~2006</li>
              <li>Research Professor at George Mason University, 2007~2017</li>
              <li>Founded Pyongyang Bible Institute in Fairfax, Virginia, 2008</li>
            </ul>
          </div>
        </div>
      </section>

      <StorySection
        title="By his side"
        image="current/prof-and-mrs-kim.webp"
        imageAlt="Professor Kim with his wife, Hyun Ja Kim"
        reverse
      >
        <p>
          Professor Kim was reliant on his wife after a Brain aneurysm left him
          unable to control left side of his body. Despite significant slur in
          his speech and use of wheelchair he spoke at nearly fifty speaking
          venues including at Yale, Harvard, Duke, Tufts, Georgetown,
          University of Washington, UC Berkeley, UC San Diego, William College,
          Fuller Theological Seminary. This feat was made possible with the help
          of Mrs. Kim by his side.
        </p>
      </StorySection>

      <section className="video-section" id="translation-session">
        <div className="shell video-grid">
          <div>
            <h2>Translation Review Session</h2>
            <p>
              One of the recorded translation sessions reviewing a Bible
              passage. During these sessions professor Kim at times compared
              English and Korean Bible passages to Japanese and Russian
              translations. This video was recorded on May 21, 2014.
            </p>
          </div>
          <figure className="video-player">
            <video
              controls
              preload="metadata"
              poster="/assets/current/translation-review-poster.webp"
              width={1280}
              height={720}
            >
              <source src="/assets/Bible Translation Record 2014-05-21.mp4" type="video/mp4" />
              <track
                kind="captions"
                src="/assets/captions/translation-review-en.vtt"
                srcLang="en"
                label="English (translated)"
                default
              />
              Your browser does not support embedded video.
            </video>
            <figcaption>English captions translate the Japanese and Korean discussion.</figcaption>
          </figure>
        </div>
      </section>

      <section className="past-work">
        <div className="shell">
          <div className="section-heading">
            <h2>Past translation projects</h2>
            <p>
              Prior to publication of <em>God’s Promises: New Testament</em>
              (2017) professor Kim had served as also served as the lead translator for
              <em> God’s Promises: Book of John</em> (2013), <em>Korea
              Re-Unification Dictionary</em> (2007), and <em>Bible Stories:
              South and North Together</em> (2004). Pyongyang Bible Institute
              has also created an English-North Korean Dictionary with the help
              of numerous volunteers that have not been published.
            </p>
          </div>
          <div className="past-work-grid">
            <PublicationCard image="English-Korean Biligual Bible - Book of John.jpg" title="God’s Promises: Book of John">
              <p>English-North Korean Bilingual Bible for Book of John, 2013. ISBN: NET English-North Korean Bilingual Bible.</p>
            </PublicationCard>
            <PublicationCard image="Childrens bible story-small.png" title="Bible Stories: South and North Together">
              <p>Short stories about 25 people of the Bible. English-North Korean bilingual format, 2004.</p>
            </PublicationCard>
            <PublicationCard image="NorthSouthDictionary.jpg" title="Korea Re-Unification Dictionary">
              <p>Dictionary containing about 10,000 words that are different between North and South, 2007. Note inaccurate authorship in front page. ISBN: 9788900217100.</p>
              <LinkArrow href="http://www.tongilnews.com/news/articleView.html?idxno=70330" external>
                Note on listed authorship
              </LinkArrow>
            </PublicationCard>
          </div>
        </div>
      </section>

      <section className="past-work focus-work">
        <div className="shell">
          <div className="section-heading">
            <h2>Focusing on Jesus and his Good News</h2>
            <p>
              Professor Kim has published two autobiographies that provide a
              visual insight into the lives of North Korean people after the
              Korean War. These references also include the series of events
              that led to his commitment to the work on Bible translation and
              the creation of Pyongyang Bible Institute. Our central thesis is
              one that is often reiterated by Prof. and Mrs. Kim and
              acknowledged by other members of PBI: Jesus is the ultimate
              transformative force. Pyongyang Bible Institute will continue to
              serve as an organization that will continue to promote the Living
              Words of Jesus and what He has to say to us today through the
              Bible and Bible teaching resources.
            </p>
          </div>
          <div className="past-work-grid">
            <PublicationCard image="current/autobiography-80-years.webp" title="80 years, 35,000 km">
              <p>Second autobiography of Hyunsik Kim, 2013 · ISBN 9788936503147</p>
            </PublicationCard>
            <PublicationCard image="current/autobiography-nomad.webp" title="I am a nomad in the 21st century">
              <p>First autobiography of Hyunsik Kim, 2007 · ISBN 9788934925491</p>
            </PublicationCard>
            <PublicationCard image="DocumentaryKJI.jpg" title="Documentary Kim Jung Il">
              <p>Hyunsik Kim’s first-hand account of Kim Jung Il and an essay on the downfall of North Korea, 1997 · ISBN 9788986144062</p>
            </PublicationCard>
          </div>
        </div>
      </section>
    </>
  );
}
