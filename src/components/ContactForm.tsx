// FILE: src/components/ContactForm.tsx

'use client';

import { useRef, useState } from 'react';
import type { FormEvent } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

type SubmissionState = 'idle' | 'submitting' | 'success' | 'error';

type ContactFormProps = {
  heading?: string;
  className?: string;
};

const ContactForm = ({
  heading = "We're Here to Help!",
  className = '',
}: ContactFormProps) => {
  const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? '/api/contact';
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<SubmissionState>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');

    const recaptchaToken = recaptchaRef.current?.getValue();
    if (!recaptchaToken) {
      setStatus('error');
      setFeedbackMessage('Please complete the reCAPTCHA.');
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, recaptchaToken }),
      });

      const result = await response.json();
      recaptchaRef.current?.reset();

      if (response.ok) {
        setStatus('success');
        setFeedbackMessage(result.message);
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
        setFeedbackMessage(result.message || 'An unknown error occurred.');
      }
    } catch (error) {
      setStatus('error');
      setFeedbackMessage('Failed to send message. Please try again later.');
      recaptchaRef.current?.reset();
    }
  };

  return (
    <div className={`w-full rounded-3xl border border-brand-primary/10 bg-white/90 p-8 sm:p-12 shadow-xl shadow-brand-primary/5 ${className}`}>
      <h2 className="font-heading text-2xl sm:text-3xl text-brand-primary">
        {heading}
      </h2>
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label htmlFor="name" className="sr-only">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="name"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="block w-full rounded-xl border-brand-primary/20 bg-surface p-3 text-brand-primary shadow-sm focus:border-brand-secondary focus:ring-brand-secondary sm:text-sm"
            placeholder="Full Name"
          />
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="block w-full rounded-xl border-brand-primary/20 bg-surface p-3 text-brand-primary shadow-sm focus:border-brand-secondary focus:ring-brand-secondary sm:text-sm"
            placeholder="Email Address"
          />
        </div>
        <div>
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={4}
            required
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="block w-full rounded-xl border-brand-primary/20 bg-surface p-3 text-brand-primary shadow-sm focus:border-brand-secondary focus:ring-brand-secondary sm:text-sm"
            placeholder="Your Message"
          />
        </div>

        <div className="flex justify-center">
          <ReCAPTCHA ref={recaptchaRef} sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!} />
        </div>

        <div>
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full flex justify-center rounded-full bg-brand-primary px-5 py-3 text-base font-semibold text-white transition hover:bg-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-secondary disabled:bg-brand-primary/40"
          >
            {status === 'submitting' ? 'Sending...' : 'Submit'}
          </button>
        </div>

        {status === 'success' && (
          <p className="text-center text-brand-teal">{feedbackMessage}</p>
        )}
        {status === 'error' && (
          <p className="text-center text-brand-accent">{feedbackMessage}</p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
