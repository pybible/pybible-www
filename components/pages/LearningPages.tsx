import { InteriorHero, LinkArrow, StorySection } from '@/components/Interior';

export function WhyNorthKoreanBiblePage() {
  return (
    <>
      <InteriorHero
        title="Why a North Korean Bible?"
        intro="Seventy years of separation have changed how Korean is spoken on either side of the border. PBI translates Scripture to remove avoidable language barriers."
        image="Splash_NorthAndSouthLangDiff.png"
        imageAlt="Illustration comparing language used in North and South Korea"
      />

      <StorySection
        title="One language, a widening divide"
        image="North_Korean_students.jpg"
        imageAlt="North Korean students"
      >
        <p>
          Significant differences in the language used by North and South
          Koreans have grown since the Korean War in 1950 and the decades of
          separation that followed.
        </p>
        <p>
          PBI asked a small group of North Korean defectors to read the
          Easy Bible, a modern South Korean translation. Readers encountered
          many unfamiliar words, especially words of Sino-Korean origin that
          are not part of everyday speech in North Korea.
        </p>
      </StorySection>

      <StorySection
        title="Language reform changed everyday words"
        image="Protestant mission territories in Korea.jpg"
        imageAlt="Historic map of Protestant mission territories in Korea"
        reverse
      >
        <p>
          The disparity traces in part to North Korea’s Language Revolution,
          which began in the 1960s. Sino-Korean and other foreign loanwords
          were replaced with Korean words through government policy. Spelling
          also diverged: for example, “woman” is written 녀인 in North Korean
          and 여인 in South Korean.
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
          In <em>God’s Promises</em>, Sino-Korean and South Korean words used
          in other Bibles are replaced with standard North Korean diction.
          Instead of the Sino-Korean term 신약 (新約) for New Testament, our
          translation reads “God’s Promises After Jesus” in Korean.
        </p>
        <p>
          We believe a North Korean translation should communicate the Good
          News of Jesus without unnecessary linguistic hurdles standing in the
          way.
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
        title="Why make it bilingual?"
        intro="English and North Korean appear side by side so Scripture can also support students and teachers working across a language barrier."
        image="English-Korean Biligual Bible - Book of John.jpg"
        imageAlt="English–North Korean bilingual Book of John"
      />

      <StorySection
        title="Bible stories in English and North Korean"
        image="missionary academy pyongyang.jpg"
        imageAlt="Students at a missionary academy in Pyongyang"
      >
        <p>
          Our bilingual Bible is designed for North Korean students and readers
          interested in learning English as a second language.
        </p>
        <p>
          In a future reunified Korea, we anticipate limited yet important
          opportunities for Scripture to enter daily life in the North. The
          bilingual format can support missionaries and youth pastors teaching
          English as a second language.
        </p>
      </StorySection>

      <section className="prayer-excerpt">
        <div className="shell">
          <div className="section-heading">
            <h2>The Lord’s Prayer, side by side</h2>
            <p>
              The North Korean translation follows the NLT’s sentence
              organization and word selection, making it useful as an English
              learning reference.
            </p>
          </div>
          <div className="prayer-columns">
            <blockquote lang="en">
              {englishPrayer.map((line) => <p key={line}>{line}</p>)}
              <cite>Matthew 6:9–13</cite>
            </blockquote>
            <blockquote lang="ko">
              {koreanPrayer.map((line) => <p key={line}>{line}</p>)}
              <cite>마태가 전하는 반가운 소식 6:9–13</cite>
            </blockquote>
          </div>
        </div>
      </section>

      <StorySection
        title="Beyond us and now"
        image="Dadohaehaesang National Park, Republic of Korea.jfif"
        imageAlt="Coastline of Dadohaehaesang National Park in Korea"
        reverse
      >
        <p>
          We believe this work is helping make room for improved Bible
          translations and better teaching resources for the people of North
          Korea.
        </p>
        <LinkArrow href="/en/about/#mission">Learn about our mission</LinkArrow>
      </StorySection>
    </>
  );
}
