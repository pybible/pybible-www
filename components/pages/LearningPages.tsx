import { InteriorHero, LinkArrow, StorySection } from '@/components/Interior';

export function WhyNorthKoreanBiblePage() {
  return (
    <>
      <InteriorHero
        title="Why a North Korean Bible?"
        image="current/korean-language-divide.webp"
        imageAlt="Mountains and water on the Korean peninsula"
      />

      <StorySection
        title="One language, a widening divide"
        image="current/old-korean-bible.webp"
        imageAlt="Historic Korean-language Bible"
      >
        <p>
          Significant differences in language used by North and South Koreans
          have since risen the Korean War in 1950 and 70 years of separation
          that followed.
        </p>
        <p>
          We have asked a small group of North Korean defectors to read Easy
          Bible (Agape Publishing)—a modern Korean translation. What we have
          learned is that there are a significant number of words in the Bible
          the readers from North Korea are unfamiliar with. Many of these words
          were Sino-Korean origin and are not part of everyday language in
          North Korea.
        </p>
      </StorySection>

      <StorySection title="Language reform changed everyday words" reverse>
        <p>
          The disparity in the Korean language between North and South Koreas
          traces back to North Korea’s Language Revolution that began in 1960s.
          In the language reform Sino-Korean and other foreign loanwords were
          replaced with Korean words as a compulsory government mandate.
        </p>
        <p>
          In addition, there are significant spelling differences between the
          two Korean languages. For example, the word for the word ‘woman’ in
          North Korean is 녀인 whereas the same word in South Korean is 여인.
        </p>
        <div className="inline-links">
          <LinkArrow href="https://www.npr.org/2021/07/30/1022642030/north-korea-is-strictly-enforcing-its-language-purification-policy" external>
            Read about North Korea’s language policy
          </LinkArrow>
          <LinkArrow href="https://journals.linguisticsociety.org/proceedings/index.php/BLS/article/view/3545" external>
            Linguistic background
          </LinkArrow>
        </div>
      </StorySection>

      <StorySection
        title="Our North Korean translation"
        image="Gods Promises Side.png"
        imageAlt="God’s Promises English–North Korean bilingual Bible"
      >
        <p>
          In our <em>God’s Promises: English-North Korean Bilingual Bible</em>,
          use of Sino-Korean and South Korean words in Bibles have been
          replaced with standard North Korean diction. Instead of referring to
          New Testament using the word 신약 (新约) as it is done in other Korean
          translations, for example, our translation reads “God’s Promises
          After Jesus” in Korean.
        </p>
        <p>
          So why is there a need for a North Korean Bible? We believe there is
          a strong and present need for North Korean Bible translations that
          communicate the Good News of Jesus without the unnecessary
          linguistic hurdles getting in the way.
        </p>
        <p>
          Please read about our mission of providing Bible and other biblical
          literature to present the Good News to people of North Korea.
        </p>
        <LinkArrow href="/en/about/#mission">Read PBI’s mission</LinkArrow>
      </StorySection>
    </>
  );
}

const englishPrayer = [
  'Our Father in heaven, may your name be kept holy.',
  'May your Kingdom come soon.',
  'May your will be done on earth, as it is in heaven.',
  'Give us today the food we need, and forgive us our sins, as we have forgiven those who sin against us.',
  'And don’t let us yield to temptation, but rescue us from the evil one.',
];

const koreanPrayer = [
  '하늘에 계신 우리 아버지, 당신의 이름이 계속 거룩해지도록 하여 주십시오.',
  '당신의 나라가 곧 오게 해주십시오.',
  '당신의 뜻이 하늘에서 처럼, 땅 위에서 실현되게 해주십시오.',
  '오늘 우리에게 필요한 식량을 주십시오, 그리고 우리가 우리에게 죄를 지은 사람들을 용서해 준 것처럼, 우리를 우리의 죄에서 용서해 주십시오.',
  '그리고 우리를 유혹에 빠지지 않게 해주십시오, 그렇지만 우리를 악한 자들로부터 구해 주십시오.',
];

export function WhyBilingualPage() {
  return (
    <>
      <InteriorHero
        title="Why a bilingual Bible?"
        intro="Our English-North Korean Bilingual Bible strategically targets North Korean students and readers interested in learning English as a second language."
        image="current/esl-class.webp"
        imageAlt="A teacher helping a student read in an ESL classroom"
      />

      <StorySection title="Bible stories in English and North Korean">
        <p>
          In the era of re-unified Korea we anticipate limited yet critical
          opportunities in which Bible and its content can penetrate into daily
          life of North Korea citizens. We believe our English-North Korean
          Bilingual Bible can be used by missionaries and youth pastors
          teaching English as a second language.
        </p>
      </StorySection>

      <section className="prayer-excerpt">
        <div className="shell">
          <div className="section-heading">
            <h2>Excerpt from the Lord’s Prayer</h2>
            <p>
              Our North Korean translation closely follows New Living
              Translation (NLT) English content in both sentence organization
              and word selection. This allows our translation to serve as an
              excellent reference material for learning English as a second
              language.
            </p>
          </div>
          <div className="prayer-columns">
            <blockquote lang="en">
              {englishPrayer.map((line) => <p key={line}>{line}</p>)}
              <cite>Matthew 6:9-13</cite>
            </blockquote>
            <blockquote lang="ko">
              {koreanPrayer.map((line) => <p key={line}>{line}</p>)}
              <cite>마태가 전하는 반가운 소식 6:9-13</cite>
            </blockquote>
          </div>
        </div>
      </section>

      <StorySection
        title="Beyond us and now"
        image="current/beyond-now.webp"
        imageAlt="A parent and child walking through a public building"
        reverse
      >
        <p>
          We believe our efforts are paving the way for emergence of
          improved Bible translations and better Bible teaching resources for
          the people of North Korea.
        </p>
        <LinkArrow href="/en/about/#mission">Learn more about our mission</LinkArrow>
      </StorySection>
    </>
  );
}
