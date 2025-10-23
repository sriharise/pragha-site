// FILE: src/components/AboutSection.tsx

import Image from 'next/image';
import FadeInSection from '@/components/FadeInSection';

const pillars = [
  {
    title: 'Slow-crafted in micro batches',
    description: 'Each bottle is crafted with care, blending the finest botanical extracts and organic oils.',
  },
  {
    title: 'Transparent sourcing',
    description: 'Every ingredient is handpicked with care from our lush farms in Tamil Nadu, ensuring purity, freshness, and authenticity.',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="w-full bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <FadeInSection as="div" className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-brand-secondary/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-brand-primary">
              About Pragha
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl text-brand-primary">
              Ancient botanicals, elevated for today’s self-care rituals.
            </h2>
            <p className="text-lg text-brand-primary/80">
              Pragha began in our farm grown herbs, where oils simmered with hibiscus petals and curry leaves. We honour that legacy with modern cold-press techniques, delivering a sensorial experience that still feels like home.
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="rounded-2xl border border-brand-primary/10 bg-white/90 p-5 shadow-sm">
                  <h3 className="font-heading text-xl text-brand-primary">{pillar.title}</h3>
                  <p className="mt-2 text-sm text-brand-primary/70">{pillar.description}</p>
                </div>
              ))}
            </div>
          </FadeInSection>

          <FadeInSection as="div" className="relative mx-auto w-full max-w-lg">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/banner_pragha.png"
                alt="Happy Pragha customers with herbal ingredients"
                width={720}
                height={540}
                className="h-full w-full object-cover"
              />
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
