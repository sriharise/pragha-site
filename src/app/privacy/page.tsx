// FILE: src/app/privacy/page.tsx

const PrivacyPage = () => {
  const updatedDate = new Intl.DateTimeFormat('en-IN', {
    month: 'long',
    year: 'numeric',
  }).format(new Date());

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-brand-primary text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h1 className="font-heading text-3xl sm:text-4xl">Privacy Policy</h1>
          <p className="mt-4 text-base text-white/80">
            Learn how Pragha collects, uses, and protects the personal information you share with us.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="space-y-10 text-brand-primary/80">
          <section className="space-y-4">
            <p>Last Updated: {updatedDate}</p>
            <h2 className="font-heading text-2xl text-brand-primary">Information We Collect</h2>
            <p>
              We collect only the information necessary to provide you with a better experience and to respond to your
              enquiries.
            </p>
            <div className="space-y-3">
              <h3 className="font-heading text-xl text-brand-primary">a. Information You Provide Directly</h3>
              <p>When you use our contact form, we collect:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Name &mdash; to identify who the message is from.</li>
                <li>Email Address &mdash; to reply to your query or provide requested information.</li>
                <li>Message Content &mdash; to understand your enquiry or feedback.</li>
              </ul>
              <p>
                These details are securely sent to our official business email address
                <a className="underline" href="mailto:info@pragha.in"> info@pragha.in</a>.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-heading text-xl text-brand-primary">b. Automatically Collected Information</h3>
              <p>When you browse our website, we may automatically capture technical data such as:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device type (desktop or mobile)</li>
                <li>Pages visited and time spent</li>
              </ul>
              <p>
                This information helps us understand how visitors use the site and enables us to improve performance and
                security.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl text-brand-primary">How We Use Your Data</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>Process and fulfill orders, including shipping notifications</li>
              <li>Respond to customer service queries and feedback</li>
              <li>Send order updates and optional marketing communications</li>
              <li>Improve our products, website experience, and customer support</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl text-brand-primary">Data Sharing</h2>
            <p>
              We do not sell your personal information. Data is shared only with trusted partners who facilitate payment
              processing, order delivery, analytics, or website maintenance—and each partner is bound by confidentiality
              agreements.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl text-brand-primary">Security</h2>
            <p>
              Pragha uses HTTPS encryption, secure payment gateways, and access controls to protect your data. While no
              security measure is absolute, we regularly review and upgrade our safeguards.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl text-brand-primary">Cookies</h2>
            <p>
              Our website may use cookies—small text files stored on your browser—to enhance your browsing experience.
              Cookies help remember preferences and measure website traffic anonymously. You can control or delete
              cookies through your browser settings.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl text-brand-primary">Email Communication</h2>
            <p>If you contact us by email or through our website form, we may use your email address to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Respond to your messages</li>
              <li>Send requested information about our products or services</li>
            </ul>
            <p>
              You will not receive promotional or marketing emails unless you explicitly subscribe or request them.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl text-brand-primary">Third-Party Links</h2>
            <p>
              Our website may include links to external websites (for example, our social media pages or online stores).
              We are not responsible for the privacy policies or content of those external websites.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl text-brand-primary">Your Choices</h2>
            <p>
              You can request access, correction, or deletion of your data at any time by emailing
              <a className="underline" href="mailto:info@pragha.in"> info@pragha.in</a>. Every marketing email includes an unsubscribe link so you can opt out
              instantly.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl text-brand-primary">Policy Updates</h2>
            <p>
              We may update this policy to reflect regulatory or business changes. The revised policy will be posted here
              with an updated effective date.
            </p>
          </section>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
