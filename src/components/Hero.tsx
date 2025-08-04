// FILE: src/components/Hero.tsx

import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 sm:py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            {/* ADD 'font-heading' to the h1 tag */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
              Experience <span className="text-green-600">Pure Growth</span>. Your Natural Solution to Dandruff & Hair Fall.
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-xl mx-auto lg:mx-0">
              Discover the power of nature's finest ingredients. Pragha's organic hair oil is crafted to nourish your scalp, strengthen your roots, and restore your hair's natural vitality.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#purchase"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 shadow-lg transform transition-transform duration-200 hover:scale-105"
              >
                Shop on Amazon
              </a>
              <a
                href="#benefits"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md">
                 <Image
                    src="/product.jpg"
                    alt="Pragha Organic Hair Oil Bottle"
                    width={600}
                    height={600}
                    className="rounded-lg shadow-2xl"
                 />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;