'use client';

import { useState, type FormEvent } from 'react';

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/contact@pybible.org';

type SubmitState =
  | { kind: 'idle'; message: '' }
  | { kind: 'sending'; message: string }
  | { kind: 'success'; message: string }
  | { kind: 'error'; message: string };

const initialState: SubmitState = { kind: 'idle', message: '' };

async function deliver(form: HTMLFormElement, subject: string) {
  const data = new FormData(form);
  const payload = Object.fromEntries(data.entries());

  if (String(payload._honey || '').trim()) return;

  const response = await fetch(FORM_ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...payload,
      _subject: subject,
      _template: 'table',
      _url: window.location.href,
    }),
  });

  const result = (await response.json().catch(() => null)) as
    | { success?: boolean | string; message?: string }
    | null;
  const wasSuccessful = response.ok && (result?.success === true || result?.success === 'true');

  if (!wasSuccessful) {
    throw new Error(result?.message || 'The message could not be delivered.');
  }
}

function Honeypot() {
  return (
    <div className="form-honeypot" aria-hidden="true">
      <label htmlFor="form-company">Leave this field empty</label>
      <input id="form-company" name="_honey" tabIndex={-1} autoComplete="off" />
    </div>
  );
}

function FormStatus({ state }: { state: SubmitState }) {
  if (state.kind === 'idle') return null;

  return (
    <p
      className={`form-status form-status-${state.kind}`}
      role={state.kind === 'error' ? 'alert' : 'status'}
      aria-live={state.kind === 'error' ? 'assertive' : 'polite'}
    >
      {state.message}
    </p>
  );
}

export function NewsletterRequestForm() {
  const [state, setState] = useState<SubmitState>(initialState);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setState({ kind: 'sending', message: 'Sending your request…' });

    try {
      await deliver(form, 'Prayer newsletter request');
      form.reset();
      setState({ kind: 'success', message: 'Your request was sent to PBI. Thank you.' });
    } catch {
      setState({
        kind: 'error',
        message: 'We could not send your request. Your email is still here—please try again shortly.',
      });
    }
  }

  const isSending = state.kind === 'sending';

  return (
    <form className="mail-form" onSubmit={handleSubmit} aria-busy={isSending}>
      <Honeypot />
      <input type="hidden" name="request" value="Prayer newsletter signup" />
      <label htmlFor="newsletter-email">Email address</label>
      <div className="field-row">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          maxLength={254}
          required
          placeholder="you@example.com"
        />
        <button className="button button-dark" type="submit" disabled={isSending}>
          {isSending ? 'Sending…' : 'Request updates'}
        </button>
      </div>
      <FormStatus state={state} />
      <p className="form-note">Your request is sent directly to contact@pybible.org.</p>
    </form>
  );
}

export function ContactForm() {
  const [state, setState] = useState<SubmitState>(initialState);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const subject = String(data.get('subject') || '').trim();
    setState({ kind: 'sending', message: 'Sending your message…' });

    try {
      await deliver(form, `PBI website: ${subject}`);
      form.reset();
      setState({ kind: 'success', message: 'Your message was sent to PBI. Thank you.' });
    } catch {
      setState({
        kind: 'error',
        message: 'We could not send your message. Your entries are still here—please try again shortly.',
      });
    }
  }

  const isSending = state.kind === 'sending';

  return (
    <form className="contact-form" onSubmit={handleSubmit} aria-busy={isSending}>
      <Honeypot />
      <div className="form-pair">
        <div>
          <label htmlFor="contact-name">Name</label>
          <input id="contact-name" name="name" autoComplete="name" maxLength={120} required />
        </div>
        <div>
          <label htmlFor="contact-email">Email</label>
          <input id="contact-email" name="email" type="email" autoComplete="email" maxLength={254} required />
        </div>
      </div>
      <label htmlFor="contact-subject">Subject</label>
      <input id="contact-subject" name="subject" maxLength={180} required />
      <label htmlFor="contact-message">Message</label>
      <textarea id="contact-message" name="message" rows={7} minLength={2} maxLength={5000} required />
      <button className="button button-dark" type="submit" disabled={isSending}>
        {isSending ? 'Sending…' : 'Send message'}
      </button>
      <FormStatus state={state} />
      <p className="form-note">Your message is sent directly to contact@pybible.org.</p>
    </form>
  );
}
