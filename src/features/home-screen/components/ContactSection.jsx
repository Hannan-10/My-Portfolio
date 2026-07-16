import React, { useState } from 'react';
import gmailIcon from '../../../assets/icons/gmail.svg';

const web3FormsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

const initialForm = {
  name: '',
  email: '',
  message: '',
};

export function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!web3FormsKey) {
      setStatus({
        type: 'error',
        message: 'Email service is not connected yet. Add VITE_WEB3FORMS_ACCESS_KEY to enable sending.',
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: 'idle', message: '' });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: web3FormsKey,
          subject: `Portfolio session request from ${form.name}`,
          from_name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || 'Unable to send message.');
      }

      setForm(initialForm);
      setStatus({ type: 'success', message: 'Message sent. I will get back to you soon.' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Something went wrong while sending your message.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="contact-form-section" id="contact" aria-labelledby="contact-form-title">
      <div className="contact-form-copy">
        <p className="section-kicker">Contact</p>
        <h2 id="contact-form-title">Book a session or send a message.</h2>
        <p>
          Share what you want to build, review, or discuss. A short message is enough to
          start the conversation.
        </p>
        <a className="direct-email-link" href="mailto:hannan11862@gmail.com">
          <span aria-hidden="true">
            <img src={gmailIcon} alt="" width="20" height="15" />
          </span>
          hannan11862@gmail.com
        </a>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          <span>Name</span>
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={updateField}
            placeholder="Your name"
            required
          />
        </label>

        <label>
          <span>Email</span>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={updateField}
            placeholder="you@example.com"
            required
          />
        </label>

        <label>
          <span>Message</span>
          <textarea
            name="message"
            value={form.message}
            onChange={updateField}
            placeholder="Tell me what you would like to discuss"
            rows="6"
            required
          />
        </label>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {status.message && (
          <p className={`form-status is-${status.type}`} role="status">
            {status.message}
          </p>
        )}
      </form>
    </section>
  );
}
