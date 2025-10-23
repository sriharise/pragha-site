// FILE: src/app/terms/page.tsx

const TermsPage = () => {
  const updatedDate = new Intl.DateTimeFormat('en-IN', {
    month: 'long',
    year: 'numeric',
  }).format(new Date());

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-brand-primary text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h1 className="font-heading text-3xl sm:text-4xl">Terms & Conditions</h1>
          <p className="mt-4 text-base text-white/80">
            Last Updated: {updatedDate}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="space-y-12 text-brand-primary/80">
          <section className="space-y-4">
            <p>
              Welcome to Pragha (referred to as &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). By accessing or using our
              website www.pragha.in, you agree to comply with these Terms and Conditions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl text-brand-primary">1. General Information</h2>
            <p>
              Pragha is an Indian brand offering natural and herbal hair care products made from coconut oil and
              carefully selected herbs. The information provided on this website is for general informational and
              promotional purposes only.
            </p>
            <p>
              We make every effort to ensure that descriptions, visuals, and pricing details are accurate; however, we
              do not warrant that all information is error-free or complete.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl text-brand-primary">2. Orders &amp; Availability</h2>
            <p>
              Our oils are handcrafted in small batches. Orders are accepted subject to product availability. If an
              item is unavailable after you place an order, we will contact you with an expected restock date or arrange
              a full refund.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl text-brand-primary">3. Pricing &amp; Payment</h2>
            <p>
              Prices displayed include applicable taxes and standard domestic shipping. Payments are processed through
              secure third-party gateways—Pragha does not store your payment credentials.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl text-brand-primary">4. Use of Products</h2>
            <p>
              Our oils are formulated for topical use only. Perform a patch test before first use. If irritation occurs,
              discontinue use immediately and consult a healthcare professional.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl text-brand-primary">5. Use of Website</h2>
            <p>By using this website, you agree:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Not to use the site for any unlawful or harmful purpose.</li>
              <li>Not to attempt to disrupt or gain unauthorized access to the website or its systems.</li>
              <li>Not to copy, reproduce, or distribute any content without written permission from Pragha.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl text-brand-primary">6. Contact Form &amp; User Information</h2>
            <p>
              When you use our contact form, we collect your name and email address to identify the sender, respond to
              queries, and maintain a record of enquiries to improve our service.
            </p>
            <p>
              Messages are delivered to <a className="underline" href="mailto:info@pragha.in">info@pragha.in</a>. We may also gather technical details such as
              IP address or browser type to understand where enquiries originate for security and service-quality
              purposes.
            </p>
            <p>
              We do not share or sell this information. Data is disclosed only when required by law or when working with
              website maintenance partners bound by confidentiality agreements.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl text-brand-primary">7. Intellectual Property</h2>
            <p>
              All website content, photography, copy, and trademarks belong to Pragha. You may not reproduce or
              distribute any materials without prior written consent.
            </p>
            <p>
              We may update these Terms and Conditions from time to time. Any changes will be posted on this page with the revised date.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl text-brand-primary">8. External Links</h2>
            <p>
              Our website may include links to third-party sites such as social media platforms or e-commerce partners.
              Pragha is not responsible for the content, security, or privacy practices of those external destinations.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl text-brand-primary">9. Limitation of Liability</h2>
            <p>Pragha shall not be liable for any damages arising from:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Your use or inability to use this website;</li>
              <li>Any inaccuracies or omissions in website content; or</li>
              <li>Unauthorized access to or alteration of your data.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl text-brand-primary">10. Contact</h2>
            <p className="space-y-2">
              <span className="block">If you have any questions regarding these Terms &amp; Conditions, please contact us at:</span>
              <span className="block">
                📧{' '}
                <a className="underline" href="mailto:info@pragha.in">
                  info@pragha.in
                </a>
              </span>
              <span className="block">
                🌿{' '}
                <a className="underline" href="/#contact">
                  www.pragha.in
                </a>
              </span>
            </p>
          </section>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
