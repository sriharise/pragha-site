// FILE: src/components/Benefits.tsx

import FadeInSection from '@/components/FadeInSection';

type Benefit = {
  icon: string;
  title: string;
  description: string;
};

const benefits: Benefit[] = [
  {
    icon: '🌱',
    title: 'Growth',
    description:
      'Stimulates dormant follicles with potent amla and bhringraj infusions for visibly fuller hair.',
  },
  {
    icon: '❄️',
    title: 'Dandruff',
    description:
      'Podduthalai’s antifungal power soothes irritation, reduces flakes, and keeps your scalp balanced.',
  },
  {
    icon: '💪',
    title: 'Roots',
    description:
      'Strengthens the root structure with vitamin-rich cold-pressed oils to curb breakage at the source.',
  },
  {
    icon: '✨',
    title: 'Shine',
    description:
      'Cool and shine with Aloe vera, leaving hair glossy without a greasy after-feel.',
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="w-full bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInSection as="div" className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl sm:text-4xl text-brand-primary">
            Benefits grounded in ritual and results.
          </h2>
          <p className="mt-4 text-lg text-brand-primary/75">
            Designed for everyday nourishment, each drop supports your long-term scalp and strand health.
          </p>
        </FadeInSection>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <FadeInSection
              key={benefit.title}
              as="div"
              className="h-full rounded-2xl border border-brand-primary/10 bg-surface px-6 py-8 text-left shadow-sm"
            >
              <span className="text-4xl" aria-hidden>
                {benefit.icon}
              </span>
              <h3 className="mt-4 font-heading text-2xl text-brand-primary">{benefit.title}</h3>
              <p className="mt-3 text-base text-brand-primary/80">{benefit.description}</p>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
