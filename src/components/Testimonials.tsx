// FILE: src/components/Testimonials.tsx

'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import FadeInSection from '@/components/FadeInSection';

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      'Pragha fit perfectly into my Sunday ritual—my scalp feels calmer and my curls look fuller every week.',
    name: 'Aisha Varma',
    role: 'Creative Director, 34',
    image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80',
  },
  {
    quote:
      'The cooling blend is a lifesaver after workouts. Zero flakes, just a clean, fresh scalp and natural shine.',
    name: 'Rohan Desai',
    role: 'Product Manager, 29',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&q=80',
  },
  {
    quote:
      'Love how lightweight it is—I can oil my hair before work without worrying about greasiness at all.',
    name: 'Meera Iyer',
    role: 'Wellness Coach, 37',
    image: 'https://images.unsplash.com/photo-1504595403659-9088ce801e29?auto=format&fit=crop&w=400&q=80',
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((index) => (index + 1) % testimonials.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setActiveIndex((index + testimonials.length) % testimonials.length);
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section id="testimonials" className="w-full bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeInSection as="div" className="text-center">
          <span className="inline-flex items-center rounded-full bg-brand-secondary/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-brand-primary">
            Stories
          </span>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl text-brand-primary">
            Real journeys, real glow.
          </h2>
        </FadeInSection>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <FadeInSection
            as="div"
            className="relative mx-auto flex w-full max-w-xs items-center justify-center overflow-hidden rounded-full bg-brand-primary/10 p-2"
          >
            <div className="relative h-64 w-64 overflow-hidden rounded-full">
              <Image
                src={activeTestimonial.image}
                alt={activeTestimonial.name}
                fill
                sizes="(max-width: 768px) 60vw, 256px"
                className="object-cover"
                priority
              />
            </div>
          </FadeInSection>

          <FadeInSection as="div" className="space-y-6 text-left">
            <blockquote className="font-testimonial text-2xl italic text-brand-primary/90">
              “{activeTestimonial.quote}”
            </blockquote>
            <div>
              <p className="font-semibold text-brand-primary">{activeTestimonial.name}</p>
              <p className="text-sm uppercase tracking-wide text-brand-primary/60">
                {activeTestimonial.role}
              </p>
            </div>
            <div className="flex items-center gap-3">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  type="button"
                  onClick={() => goTo(index)}
                  aria-label={`View testimonial from ${testimonial.name}`}
                  className={`h-3 w-3 rounded-full transition ${
                    index === activeIndex
                      ? 'bg-brand-secondary'
                      : 'bg-brand-primary/20 hover:bg-brand-primary/40'
                  }`}
                />
              ))}
            </div>
            <div className="text-sm text-brand-primary/60">
              *Based on feedback from our community of Pragha loyalists surveyed in 2024.
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
