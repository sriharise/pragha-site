// FILE: src/components/Hero.tsx

import Image from 'next/image';
import Link from 'next/link';
import FadeInSection from '@/components/FadeInSection';

const whatsappNumber = '918610437893';

const WhatsAppIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
    <path d="M16.001 3.2c-7.072 0-12.8 5.728-12.8 12.8 0 2.256.592 4.464 1.712 6.4L3.2 28.8l6.576-1.664a12.71 12.71 0 0 0 6.224 1.6c7.072 0 12.8-5.728 12.8-12.8 0-7.072-5.728-12.736-12.8-12.736Zm0 23.296a10.42 10.42 0 0 1-5.312-1.456l-.384-.224-3.904.992 1.04-3.808-.224-.4a10.357 10.357 0 0 1-1.536-5.376c0-5.728 4.672-10.4 10.4-10.4 5.728 0 10.4 4.672 10.4 10.4-.032 5.728-4.704 10.272-10.48 10.272Zm6.064-7.776c-.336-.176-1.968-.976-2.272-1.088-.304-.112-.528-.176-.752.176-.224.352-.864 1.088-1.056 1.312-.192.224-.384.256-.72.08-.336-.176-1.424-.52-2.72-1.664-1.008-.896-1.68-2-1.872-2.336-.192-.336-.016-.512.144-.688.144-.144.336-.4.512-.608.176-.208.24-.352.368-.592.128-.24.064-.448-.032-.624-.096-.176-.752-1.808-1.04-2.488-.272-.656-.544-.56-.752-.576-.192-.016-.416-.016-.64-.016a1.232 1.232 0 0 0-.896.416c-.304.336-1.152 1.12-1.152 2.72s1.184 3.168 1.344 3.392c.16.224 2.32 3.552 5.616 4.976.784.336 1.392.544 1.872.704.784.24 1.504.208 2.064.128.64-.096 1.968-.8 2.24-1.6.272-.8.272-1.488.192-1.6-.08-.144-.304-.224-.64-.4Z" />
  </svg>
);

const Hero = () => {
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Hi Pragha team! I would love to place an order for your natural hair oil.'
  )}`;

  return (
    <section id="home" className="relative w-full bg-gradient-to-br from-[#f1f5f4] via-surface to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <FadeInSection className="order-2 mx-auto w-full max-w-lg lg:order-1">
            <div className="relative">
              <Image
                src="/productImg.png"
                alt="Pragha natural hair oil bottle showcased with botanical ingredients"
                width={720}
                height={720}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </FadeInSection>

          <FadeInSection
            as="div"
            className="order-1 flex flex-col items-start gap-8 text-left lg:order-2"
          >
            <span className="inline-flex items-center rounded-full border border-brand-primary/20 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary">
              Experience Pure Growth
            </span>
            <h1 className="font-heading text-4xl font-semibold text-brand-primary sm:text-5xl lg:text-6xl">
              Your Natural Solution to Dandruff & Hair Fall.
            </h1>
            <p className="max-w-xl text-lg text-brand-primary/80">
              At Pragha, we believe in the power of natural ingredients to transform your hair care routine. Our journey began with a simple yet powerful goal: to create hair oils that not only nourish but also rejuvenate.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-base font-semibold text-white shadow-lg shadow-brand-primary/30 transition hover:bg-brand-teal"
              >
                <WhatsAppIcon />
                Shop Now
              </a>
              <Link
                href="/#about"
                prefetch={false}
                className="inline-flex items-center justify-center rounded-full border border-brand-primary/20 px-6 py-3 text-base font-semibold text-brand-primary transition hover:border-brand-secondary hover:text-brand-secondary"
              >
                Explore Ingredients
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-brand-primary/70">
              <div>
                <p className="text-2xl font-semibold text-brand-secondary">98%</p>
                <p>Felt softer hair in 4 weeks*</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-brand-secondary">100%</p>
                <p>Cold-pressed, clean botanicals</p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;
