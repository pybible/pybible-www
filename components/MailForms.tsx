'use client';

import type { FormEvent } from 'react';

function openMail(subject: string, body: string) {
  window.location.href = `mailto:contact@pybible.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function NewsletterRequestForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get('email') || '').trim();
    openMail('Prayer newsletter request', `Please add ${email} to the PBI prayer newsletter.`);
  }

  return (
    <form className="mail-form" onSubmit={handleSubmit}>
      <label htmlFor="newsletter-email">Email address</label>
      <div className="field-row">
        <input id="newsletter-email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" />
        <button className="button button-dark" type="submit">Request updates</button>
      </div>
      <p className="form-note">This opens your email app so you can send the request directly to PBI.</p>
    </form>
  );
}

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const subject = String(data.get('subject') || '').trim();
    const message = String(data.get('message') || '').trim();
    openMail(subject || 'Message from pybible.org', `From: ${name} <${email}>\n\n${message}`);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-pair">
        <div>
          <label htmlFor="contact-name">Name</label>
          <input id="contact-name" name="name" autoComplete="name" required />
        </div>
        <div>
          <label htmlFor="contact-email">Email</label>
          <input id="contact-email" name="email" type="email" autoComplete="email" required />
        </div>
      </div>
      <label htmlFor="contact-subject">Subject</label>
      <input id="contact-subject" name="subject" required />
      <label htmlFor="contact-message">Message</label>
      <textarea id="contact-message" name="message" rows={7} required />
      <button className="button button-dark" type="submit">Open email to send</button>
      <p className="form-note">Your email app will open with this message addressed to contact@pybible.org.</p>
    </form>
  );
}
