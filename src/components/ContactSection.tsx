// FILE: src/components/ContactSection.tsx

import ContactForm from '@/components/ContactForm';
import FadeInSection from '@/components/FadeInSection';

const contactDetails = [
  {
    label: 'Email',
    value: 'praghaorganics@gmail.com',
    href: 'mailto:praghaorganics@gmail.com',
  },
  {
    label: 'WhatsApp Chat',
    value: '+91 86104 37893',
    href: 'https://wa.me/918610437893',
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="w-full bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInSection as="div" className="max-w-3xl">
          <span className="inline-flex items-center rounded-full bg-brand-secondary/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-brand-primary">
            Contact
          </span>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl text-brand-primary">
            Let’s personalise your Pragha ritual.
          </h2>
        </FadeInSection>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <FadeInSection as="div" className="rounded-3xl border border-brand-primary/10 bg-surface p-8 shadow-sm">
            <h3 className="font-heading text-2xl text-brand-primary">Reach us directly</h3>
            <ul className="mt-6 space-y-4 text-base text-brand-primary/75">
              {contactDetails.map((detail) => (
                <li key={detail.label}>
                  <span className="block text-sm uppercase tracking-[0.2em] text-brand-primary/60">
                    {detail.label}
                  </span>
                  <a
                    href={detail.href}
                    className="mt-1 inline-block text-lg font-semibold text-brand-primary transition hover:text-brand-secondary"
                  >
                    {detail.value}
                  </a>
                </li>
              ))}
            </ul>
{/* 
            <div className="mt-8 rounded-2xl bg-white/80 p-6 shadow-inner">
              <h4 className="font-heading text-lg text-brand-primary">Visit our studio</h4>
              <p className="mt-2 text-sm text-brand-primary/70">
                Pragha Organics, 14 Greenway Avenue, Chennai 600041, India
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.3em] text-brand-primary/50">
                Visits by appointment only
              </p>
            </div> */}
          </FadeInSection>

          <ContactForm heading="Send us a message" className="h-full" />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
