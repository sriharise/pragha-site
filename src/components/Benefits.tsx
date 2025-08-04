// FILE: src/components/Benefits.tsx

import React from 'react';

// Define the type for a single benefit item
interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Array of benefits data. This makes it easy to add or change benefits later.
const benefits: Benefit[] = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 22a8 8 0 0 1 8-8c0-4.42-3.58-8-8-8a8 8 0 0 0-8 8c0 4.42 3.58 8 8 8z"/><path d="M14 14c0-4.42-3.58-8-8-8"/></svg>
    ),
    title: 'Promotes Hair Growth',
    description: 'Our blend of organic oils stimulates follicles to encourage healthy and robust hair growth.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9.5 14.5 5-5"/><path d="m14.5 14.5-5-5"/></svg>
    ),
    title: 'Controls Dandruff',
    description: 'The natural anti-fungal properties of our ingredients help to soothe the scalp and eliminate dandruff.',
  },
  {
    icon: (
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.73 18a2.64 2.64 0 0 0-3.76 0 2.64 2.64 0 0 0-3.76 0 2.64 2.64 0 0 0-3.76 0 2.64 2.64 0 0 0-3.76 0 2.64 2.64 0 0 0-3.76 0"/><path d="M8 12v4"/><path d="M12 12v4"/><path d="M16 12v4"/><path d="M4 12v4"/><path d="M20 12v4"/><path d="M10 10V6.5a2.5 2.5 0 0 1 5 0V10"/></svg>
    ),
    title: 'Strengthens Roots',
    description: 'Nourishes deep into the scalp to fortify hair roots, reducing breakage and hair fall.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 3h4v4h-4z"/><path d="m12 17.5 2-2.5-2-2.5-2 2.5 2 2.5z"/><path d="M3 10h4v4H3z"/><path d="M17 10h4v4h-4z"/></svg>
    ),
    title: 'Adds Natural Shine',
    description: 'Restores your hair’s natural luster and softness, leaving it silky and radiant without any grease.',
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="w-full bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900">
            Pure, As It's Powerful
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Our commitment is to deliver visible results with the purest ingredients nature has to offer.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 sm:gap-x-8 sm:gap-y-16">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-600">
                {benefit.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-900">{benefit.title}</h3>
              <p className="mt-2 text-base text-slate-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;