import { InteriorHero, LinkArrow, StorySection } from '@/components/Interior';
import { ContactForm, NewsletterRequestForm } from '@/components/MailForms';

export function SupportPage() {
  return (
    <>
      <InteriorHero
        title="Lift up the people of North Korea in prayer"
        intro="Prayer is the clearest way to stand with PBI’s work and with the people for whom this translation was made."
        image="Prayer Group Signup.png"
        imageAlt="Invitation to join the PBI prayer group"
      />
      <StorySection title="Pray with us" image="Baptism.jpg" imageAlt="A baptism">
        <p>
          Please join us in lifting up the people of North Korea through
          prayer. If you would like to use our Bible translation, report a
          translation error, or speak with the team, contact us directly.
        </p>
        <div className="inline-links">
          <LinkArrow href="/en/prayer-newsletter/">Join the prayer newsletter</LinkArrow>
          <LinkArrow href="/en/contactus/">Contact PBI</LinkArrow>
        </div>
      </StorySection>
      <StorySection
        title="A shared prayer effort"
        image="Dadohaehaesang National Park, Republic of Korea.jfif"
        imageAlt="The Korean coast"
        reverse
      >
        <p>
          PBI shares prayer updates with The Fourth River Project and Pastor
          Ben Torrey. Their ministry brings together people preparing and
          praying for reconciliation on the Korean peninsula.
        </p>
        <LinkArrow href="http://www.thefourthriver.org/home.htm" external>
          Visit The Fourth River Project
        </LinkArrow>
      </StorySection>
    </>
  );
}

export function PrayerNewsletterPage() {
  return (
    <>
      <InteriorHero
        title="A monthly rhythm of prayer for North Korea"
        intro="Pyongyang Bible Institute partners with The Fourth River Project and Pastor Ben Torrey in praying for North Korea."
        image="Prayer Group Signup.png"
        imageAlt="Sign up for the PBI prayer group"
      />
      <section className="newsletter-page">
        <div className="shell newsletter-page-grid">
          <div>
            <h2>Request the monthly prayer newsletter</h2>
            <p>
              Receive prayer prompts and updates that help churches,
              households, and individuals pray with attention and consistency.
            </p>
            <NewsletterRequestForm />
          </div>
          <aside>
            <p>Prayer partner</p>
            <h3>The Fourth River Project</h3>
            <p>
              PBI joins Pastor Ben Torrey and The Fourth River Project in
              sustained prayer for North Korea.
            </p>
            <LinkArrow href="http://www.thefourthriver.org/home.htm" external>
              Learn about the project
            </LinkArrow>
          </aside>
        </div>
      </section>
    </>
  );
}

export function ContactPage() {
  return (
    <>
      <InteriorHero
        title="Contact PBI"
        intro="Questions, translation corrections, requests to use PBI’s work, and words of encouragement are all welcome."
        image="Our Team.png"
        imageAlt="Meet the Pyongyang Bible Institute team"
      />
      <section className="contact-section">
        <div className="shell contact-grid">
          <div>
            <h2>Send a message</h2>
            <ContactForm />
          </div>
          <aside className="contact-details">
            <h2>Address and contact information</h2>
            <address>
              <strong>Pyongyang Bible Institute</strong><br />
              3609 Mercedes Way<br />
              Fairfax, VA 22030
            </address>
            <a className="text-link" href="mailto:contact@pybible.org">
              contact@pybible.org <span aria-hidden="true">↗</span>
            </a>
            <p>Pyongyang Bible Institute, Inc. is a 501(c)(3) tax-exempt organization. EIN 26-4108392.</p>
          </aside>
        </div>
      </section>
    </>
  );
}
