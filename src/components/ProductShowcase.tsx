// FILE: src/components/ProductShowcase.tsx

import Image from 'next/image';
import FadeInSection from '@/components/FadeInSection';

const whatsappNumber = '918610437893';

type SizeOption = {
  volume: string;
  regularPrice: number;
  offerPrice: number;
};

type Product = {
  name: string;
  description: string;
  highlights: string[];
  image: string;
  sizes: SizeOption[];
  offerClass: string;
  titleClass: string;
  ctaClass: string;
};

const products: Product[] = [
  {
    name: 'Herbal Hair Oil',
    description:
      'A heritage blend of amla, bhringraj, and cold-pressed coconut oil that strengthens roots and boosts circulation for fuller growth.',
    highlights: ['Supports thicker, denser hair over time', 'Deeply nourishes scalp and roots', 'Infused over 72 hours for potent freshness'],
    image: '/pragha_herbal_hairoil.png',
    sizes: [
      { volume: 'Pragha Herbal Hair Oil - 200 ml', regularPrice: 499, offerPrice: 439 },
      { volume: 'Pragha Herbal Hair Oil - 100 ml', regularPrice: 279, offerPrice: 249 },
    ],
    offerClass: 'text-brand-primary',
    titleClass: 'text-brand-primary',
    ctaClass: 'bg-brand-primary hover:bg-brand-teal text-white',
  },
  {
    name: 'Poduthalai Hair Oil',
    description:
      'Formulated with poduthalai, neem, and peppermint to cool irritation, balance sebum, and keep dandruff in check.',
    highlights: ['Targets flakes and itchy scalp fast', 'Lightweight finish ideal for regular use', 'Herbal actives calm and purify the scalp'],
    image: '/pragha_poduthalai_hairoil.png',
    sizes: [
      { volume: 'Pragha Poduthalai Hair Oil - 200 ml', regularPrice: 449, offerPrice: 399 },
      { volume: 'Pragha Poduthalai Hair Oil - 100 ml', regularPrice: 249, offerPrice: 220 },
    ],
    offerClass: 'text-amber-700',
    titleClass: 'text-amber-800',
    ctaClass: 'bg-amber-700 hover:bg-amber-800 text-white',
  },
];

const faqs = [
  {
    question: 'What is Pragha Herbal Hair Oil made of?',
    answer:
      'It is crafted from pure coconut oil infused with farm-grown hibiscus, amla, curry leaves, bhringraj, neem, vetiver, rose petals, and henna—each hand-selected for freshness and purity.',
  },
  {
    question: 'Is Pragha Herbal Hair Oil suitable for all hair types?',
    answer:
      'Yes. The balanced herbal blend nourishes dry, oily, curly, straight, or chemically treated hair without leaving it greasy.',
  },
  {
    question: 'How often should I use Pragha Herbal Hair Oil?',
    answer:
      'Apply 2–3 times a week. Massage gently into the scalp, leave on for at least 1 hour—or overnight—and rinse with a mild herbal shampoo.',
  },
  {
    question: 'What are the main benefits of using Pragha Herbal Hair Oil?',
    answer:
      'Regular use helps reduce hair fall, promote natural black hair growth, control dandruff and dryness, strengthen roots, and restore shine and softness.',
  },
  {
    question: 'Does it contain any chemicals or preservatives?',
    answer:
      'No. It is 100% natural with zero mineral oil, parabens, or synthetic fragrance—each bottle is made to ensure purity and safety.',
  },
  {
    question: 'Can children or elderly people use this oil?',
    answer:
      'Yes. The edible-grade coconut oil base and Ayurvedic herbs make it gentle and safe for all age groups.',
  },
  {
    question: 'How long will it take to see visible results?',
    answer:
      'Most users notice reduced hair fall and better texture within 3–4 weeks; continue for 8–12 weeks for regrowth and luminous shine.',
  },
  {
    question: 'How should I store Pragha Herbal Hair Oil?',
    answer:
      'Keep it in a cool, dry place away from direct sunlight. Minor colour or aroma variations are normal and indicate the absence of artificial stabilisers.',
  },
  {
    question: 'How long does delivery take after placing an order?',
    answer:
      'Orders are processed within 24 hours and delivered in 3–7 business days depending on location—rural areas may take slightly longer.',
  },
  {
    question: 'Do you offer free shipping?',
    answer:
      'Yes, all orders qualify for free shipping across India.',
  },
  {
    question: 'How can I track my order?',
    answer:
      'Once dispatched, you receive a tracking number by email or SMS to monitor real-time updates from our courier partner.',
  },
  {
    question: 'Do you ship outside India?',
    answer:
      'International shipping is coming soon—we currently deliver within India only. Follow our website or Instagram for updates.',
  },
];

const WhatsAppIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
    <path d="M16.001 3.2c-7.072 0-12.8 5.728-12.8 12.8 0 2.256.592 4.464 1.712 6.4L3.2 28.8l6.576-1.664a12.71 12.71 0 0 0 6.224 1.6c7.072 0 12.8-5.728 12.8-12.8 0-7.072-5.728-12.736-12.8-12.736Zm0 23.296a10.42 10.42 0 0 1-5.312-1.456l-.384-.224-3.904.992 1.04-3.808-.224-.4a10.357 10.357 0 0 1-1.536-5.376c0-5.728 4.672-10.4 10.4-10.4 5.728 0 10.4 4.672 10.4 10.4-.032 5.728-4.704 10.272-10.48 10.272Zm6.064-7.776c-.336-.176-1.968-.976-2.272-1.088-.304-.112-.528-.176-.752.176-.224.352-.864 1.088-1.056 1.312-.192.224-.384.256-.72.08-.336-.176-1.424-.52-2.72-1.664-1.008-.896-1.68-2-1.872-2.336-.192-.336-.016-.512.144-.688.144-.144.336-.4.512-.608.176-.208.24-.352.368-.592.128-.24.064-.448-.032-.624-.096-.176-.752-1.808-1.04-2.488-.272-.656-.544-.56-.752-.576-.192-.016-.416-.016-.64-.016a1.232 1.232 0 0 0-.896.416c-.304.336-1.152 1.12-1.152 2.72s1.184 3.168 1.344 3.392c.16.224 2.32 3.552 5.616 4.976.784.336 1.392.544 1.872.704.784.24 1.504.208 2.064.128.64-.096 1.968-.8 2.24-1.6.272-.8.272-1.488.192-1.6-.08-.144-.304-.224-.64-.4Z" />
  </svg>
);

const ProductShowcase = () => {
  return (
    <section id="products" className="w-full bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInSection as="div" className="max-w-3xl">
          <span className="inline-flex items-center rounded-full bg-brand-secondary/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-brand-primary">
            Our Blends
          </span>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl text-brand-primary">
            Choose the ritual that fits your hair journey.
          </h2>
          <p className="mt-4 text-lg text-brand-primary/75">
            Crafted with raw botanicals and zero synthetics. Order via WhatsApp for concierge guidance and custom bundle offers.
          </p>
        </FadeInSection>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {products.map((product) => {
            const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              `Hi Pragha team! I would like to order the ${product.name}.`
            )}`;

            return (
              <FadeInSection
                key={product.name}
                as="article"
                className="flex h-full flex-col rounded-3xl border border-brand-primary/10 bg-surface p-6 shadow-lg shadow-brand-primary/5"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={420}
                    height={520}
                    className="h-64 w-full object-cover"
                  />
                </div>

                <div className="mt-6 flex flex-1 flex-col">
                  <h3 className={`font-heading text-2xl ${product.titleClass}`}>{product.name}</h3>
                  <p className="mt-3 text-base text-brand-primary/75">{product.description}</p>
                  <ul className="mt-4 space-y-2 text-sm text-brand-primary/70">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand-secondary" aria-hidden />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 space-y-2 text-sm text-brand-primary/75">
                    {product.sizes.map((size) => (
                      <div
                        key={size.volume}
                        className="flex items-baseline justify-between rounded-xl bg-white/90 px-3 py-3 shadow-sm"
                      >
                        <span className="font-semibold text-brand-primary">{size.volume}</span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-xs text-brand-primary/50 line-through sm:text-sm">
                            ₹{size.regularPrice}
                          </span>
                          <span className={`text-lg font-semibold sm:text-xl ${product.offerClass}`}>
                            ₹{size.offerPrice}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold shadow-md transition duration-200 ${product.ctaClass}`}
                >
                  <WhatsAppIcon />
                  Order on WhatsApp
                </a>
              </FadeInSection>
            );
          })}
        </div>

        <FadeInSection as="p" className="mt-10 text-sm text-brand-primary/60">
          Prices include shipping. Orders are prepared fresh and delivered within 5–7 working days across India.
        </FadeInSection>

        <FadeInSection
          as="section"
          id="faq"
          className="mt-16 scroll-mt-32 rounded-3xl bg-surface p-8 shadow-sm"
        >
          <h3 className="font-heading text-2xl text-brand-primary">Frequently Asked Questions</h3>
          <dl className="mt-8 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-brand-primary/10 bg-white/90 px-5 py-4 shadow-sm">
                <dt className="font-heading text-lg text-brand-primary">{faq.question}</dt>
                <dd className="mt-2 text-sm text-brand-primary/75">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </FadeInSection>
      </div>
    </section>
  );
};

export default ProductShowcase;
