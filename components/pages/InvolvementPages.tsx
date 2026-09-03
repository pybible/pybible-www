import { InteriorHero, LinkArrow, StorySection } from '@/components/Interior';
import { ContactForm, NewsletterRequestForm } from '@/components/MailForms';

export function SupportPage() {
  return (
    <>
      <InteriorHero
        title="Lift up the people of North Korea in prayer"
        intro="Please join with us in lifting up the people of North Korea through prayer."
        image="current/support-prayer.webp"
        imageAlt="A sign among leaves reading God is faithful"
      />
      <StorySection title="Pray with us">
        <p>
          If you would like to reach out to us for the use of our Bible
          translation, report errors in translation, or reach out to us please
          go to Contact Us page to reach out to us.
        </p>
        <p>
          To receive updates about our work, we have joined The Fourth River
          Project and pastor Ben Torrey in sharing our newsletter through this
          forum.
        </p>
        <div className="inline-links">
          <LinkArrow href="/en/prayer-newsletter/">Join the prayer newsletter</LinkArrow>
          <LinkArrow href="/en/contactus/">Contact PBI</LinkArrow>
          <LinkArrow href="http://www.thefourthriver.org/home.htm" external>
            Visit The Fourth River Project
          </LinkArrow>
        </div>
      </StorySection>
    </>
  );
}

export function PrayerNewsletterPage() {
  return (
    <>
      <InteriorHero
        title="Praying for North Korea"
        intro="Pyongyang Bible Institute partners with The Fourth River Project and Pastor Ben Torrey in praying for North Korea."
        image="current/prayer-newsletter.webp"
        imageAlt="A person praying beside a window"
      />
      <section className="newsletter-page">
        <div className="shell newsletter-page-grid">
          <div>
            <h2>Sign Up for monthly prayer newsletter for North Korea from pastor Ben Torrey</h2>
            <p>
              Receive Pastor Ben Torrey’s monthly prayer newsletter for North
              Korea through PBI’s partnership with The Fourth River Project.
            </p>
            <NewsletterRequestForm />
          </div>
          <aside>
            <p>Prayer partner</p>
            <h3>The Fourth River Project</h3>
            <p>
              Pyongyang Bible Institute partners in praying for North Korea
              with The Fourth River Project and pastor Ben Torrey.
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
        intro="For questions, concerns, typographical error found, compliments, or get in touch with us, please use the form below to give us your contact information and a message."
      />
      <section className="contact-section">
        <div className="shell contact-grid">
          <div>
            <h2>Send a message</h2>
            <ContactForm />
          </div>
          <aside className="contact-details">
            <h2>Address and Contact Info</h2>
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
