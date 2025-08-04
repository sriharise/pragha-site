// FILE: src/components/AboutAndContact.tsx
// CREATE THIS NEW FILE at src/components/AboutAndContact.tsx

import React from 'react';
import Image from 'next/image';

const AboutAndContact = () => {
  return (
    <section id="about" className="w-full bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* About Us & Image Section */}
          <div className="space-y-8">
            <div className="text-left">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900">
                Driven by a Passion for Purity
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                At Pragha, we believe in the power of natural ingredients to transform your hair care routine. Our journey began with a simple yet powerful goal: to create hair oils that not only nourish but also rejuvenate.
              </p>
              <p className="mt-4 text-lg text-slate-600">
                Each bottle is crafted with care, blending the finest botanical extracts and organic oils. We are dedicated to transparency and sustainability, ensuring a wholesome experience that respects both you and the environment.
              </p>
            </div>
            <div className="w-full">
              <Image
                src="/aboutus.jpg"
                alt="Natural ingredients for Pragha hair oil"
                width={800}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Contact Form Section */}
          <div id="contact" className="w-full bg-slate-50 p-8 sm:p-12 rounded-lg shadow-lg">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900">
              We're Here to Help!
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Have questions or feedback? We look forward to hearing from you.
            </p>
            <form action="#" method="POST" className="mt-8 space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  required
                  className="block w-full rounded-md border-slate-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-3"
                  placeholder="Full Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-slate-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-3"
                  placeholder="Email Address"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="block w-full rounded-md border-slate-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-3"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutAndContact;