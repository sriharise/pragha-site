// FILE: src/components/SocialProof.tsx
// CREATE THIS NEW FILE at src/components/SocialProof.tsx

import React from 'react';

// --- Testimonials Data ---
// We define testimonials here to keep the component clean.
// You can easily replace these with real customer quotes.
const testimonials = [
  {
    quote: "I've struggled with dandruff for years, and nothing worked. After just two weeks of using Pragha oil, my scalp is clear and my hair has never felt softer. It's a miracle in a bottle!",
    name: 'Vinoth K.',
    location: 'Bangalore',
  },
  {
    quote: "My hair fall has reduced significantly since I started using this oil. I love that it's completely organic and doesn't have any harsh chemicals. The smell is so natural and calming.",
    name: 'Senthil K',
    location: 'Madurai',
  },
  {
    quote: "This is the best hair oil I have ever used. It's not greasy at all and absorbs so well. My hair is shinier, stronger, and feels so much healthier. I'm recommending it to everyone!",
    name: 'Shubhadeep T.',
    location: 'Delhi',
  },
];

// --- Social Media Icons ---
// SVG icons for social media links
const socialIcons = {
  instagram: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
  ),
  facebook: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
  ),
  youtube: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10C2.5 6 7.5 4 12 4s9.5 2 9.5 3a24.12 24.12 0 0 1 0 10c0 1-4.5 3-9.5 3s-9.5-2-9.5-3z"/><path d="m10 15 5-3-5-3z"/></svg>
  ),
};

const SocialProof = () => {
  return (
    <section className="w-full bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900">
            Loved by Customers Like You
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Real results from real people. See what our community is saying about Pragha.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-slate-700 italic">"{testimonial.quote}"</p>
              <p className="mt-4 font-bold text-slate-900">{testimonial.name}</p>
              <p className="text-sm text-slate-500">{testimonial.location}</p>
            </div>
          ))}
        </div>

        {/* Social Media Links */}
        <div className="mt-20 text-center">
            <h3 className="text-xl font-semibold text-slate-800">Follow Our Journey</h3>
            <div className="mt-6 flex justify-center gap-6">
                <a href="#" aria-label="Instagram" className="text-slate-500 hover:text-green-600 transition-colors">{socialIcons.instagram}</a>
                <a href="#" aria-label="Facebook" className="text-slate-500 hover:text-green-600 transition-colors">{socialIcons.facebook}</a>
                <a href="#" aria-label="YouTube" className="text-slate-500 hover:text-green-600 transition-colors">{socialIcons.youtube}</a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;