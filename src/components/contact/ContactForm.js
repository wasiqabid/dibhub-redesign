'use client';

import { useState } from 'react';

import { ButtonBadge, IconCheck } from '@/components/icons/Icons';
import { CONTACT_FORM } from '@/components/contact/contactContent';

// Markup only. There is deliberately no submit handler, no validation logic and
// no loading/success/error state here — the working versions of those come from
// the legacy contact form and get merged in separately. `name` attributes are
// plain and conventional so that merge is a direct match.
//
// The consent checkbox is the one piece of interactivity, and it is handled by
// CSS (`:checked` on the visually hidden input) rather than React state, so
// nothing here pretends to manage form data.
export default function ContactForm({ className = '', ...hoverProps }) {
  const [acknowledged, setAcknowledged] = useState(false);

  const handleSubmit = (event) => {
    // Stops the browser doing a native GET submission until the real handler
    // lands. Native `required` validation still runs before this fires.
    event.preventDefault();
    // Temporary stand-in so a submit is not silently swallowed. This is an
    // acknowledgment only — no request, no loading or error state. That arrives
    // with the legacy contact-form merge.
    // TODO: wire up submit handler when merging legacy contact-form logic
    setAcknowledged(true);
  };

  return (
    <div className={`dh-contact-panel dh-contact-form-panel ${className}`} {...hoverProps}>
      <h2 className="dh-contact-form-title">{CONTACT_FORM.title}</h2>
      <p className="dh-contact-form-lead">{CONTACT_FORM.lead}</p>

      <form className="dh-contact-form" onSubmit={handleSubmit} noValidate={false}>
        <div className="dh-contact-field-grid">
          <label className="dh-contact-field" htmlFor="firstname">
            <span className="dh-contact-field-label">First name</span>
            <input
              id="firstname"
              name="firstname"
              type="text"
              placeholder="First name"
              autoComplete="given-name"
              required
              className="dh-contact-input"
            />
          </label>

          <label className="dh-contact-field" htmlFor="lastname">
            <span className="dh-contact-field-label">Last name</span>
            <input
              id="lastname"
              name="lastname"
              type="text"
              placeholder="Last name"
              autoComplete="family-name"
              required
              className="dh-contact-input"
            />
          </label>

          <label className="dh-contact-field" htmlFor="email">
            <span className="dh-contact-field-label">Email</span>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@company.com"
              autoComplete="email"
              required
              className="dh-contact-input"
            />
          </label>

          <label className="dh-contact-field" htmlFor="phone">
            <span className="dh-contact-field-label">
              Phone <span className="dh-contact-field-optional">optional</span>
            </span>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+1 555 0134"
              autoComplete="tel"
              className="dh-contact-input"
            />
          </label>
        </div>

        <label className="dh-contact-field dh-contact-field--message" htmlFor="message">
          <span className="dh-contact-field-label">Message</span>
          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder="What are you building, and what is in the way right now?"
            required
            className="dh-contact-input dh-contact-textarea"
          />
        </label>

        <label className="dh-contact-consent" htmlFor="consent">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            required
            className="dh-contact-consent-input"
          />
          <span className="dh-contact-checkbox" aria-hidden="true">
            <IconCheck />
          </span>
          <span className="dh-contact-consent-text">{CONTACT_FORM.consent}</span>
        </label>

        <div className="dh-contact-actions">
          <button type="submit" className="dh-button">
            {CONTACT_FORM.submit}
            <ButtonBadge />
          </button>
          <span className="dh-contact-reassurance">{CONTACT_FORM.reassurance}</span>
        </div>

        {acknowledged ? (
          <p className="dh-contact-pending" role="status">
            {CONTACT_FORM.pending.before}
            <a href={CONTACT_FORM.pending.emailHref}>{CONTACT_FORM.pending.email}</a>
            {CONTACT_FORM.pending.after}
          </p>
        ) : null}
      </form>
    </div>
  );
}
