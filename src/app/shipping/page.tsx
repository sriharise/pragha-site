// FILE: src/app/shipping/page.tsx

const ShippingPage = () => {
  const updatedDate = new Intl.DateTimeFormat('en-IN', {
    month: 'long',
    year: 'numeric',
  }).format(new Date());

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-brand-primary text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h1 className="font-heading text-3xl sm:text-4xl">Shipping &amp; Returns</h1>
          <p className="mt-4 text-base text-white/80">
            Everything you need to know about how Pragha prepares, ships, and supports your orders nationwide.
          </p>
          <p className="mt-2 text-sm uppercase tracking-[0.3em] text-white/60">Last Updated: {updatedDate}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="space-y-10 text-brand-primary/80">
          <section className="space-y-4">
            <h2 className="font-heading text-2xl text-brand-primary">Shipping Timeline</h2>
            <p>
              Orders are processed within 24 hours, freshly crafted, and dispatched via trusted courier partners. Most
              deliveries arrive within 3–7 business days; remote locations may require an additional 1–2 days.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl text-brand-primary">Shipping Charges</h2>
            <p>
              Domestic shipping is free on every Pragha order. Need express delivery? Reach out before placing your
              order and we will share available options and costs.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl text-brand-primary">Order Tracking</h2>
            <p>
              Once dispatched, you will receive an email or SMS with a tracking number so you can follow your parcel in
              real time through our courier partner.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl text-brand-primary">Returns</h2>
            <p>
              Due to hygiene standards, purchased / opened products cannot be returned. If your order arrives damaged, incorrect, or
              compromised, contact us within 48 hours of delivery and share unboxing photos and videos—after carefull consideration we may arrange a replacement
              or refund for the affected items.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl text-brand-primary">Contact Support</h2>
            <p>
              Need help with shipping or returns? Email <a className="underline" href="mailto:info@pragha.in">info@pragha.in</a> or message us on WhatsApp at
              <a className="underline" href="https://wa.me/918610437893" target="_blank" rel="noreferrer"> +91&nbsp;86104&nbsp;37893</a>.
            </p>
          </section>
        </div>
      </section>
    </div>
  );
};

export default ShippingPage;
