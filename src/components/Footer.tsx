// FILE: src/components/Footer.tsx
// CREATE THIS NEW FILE at src/components/Footer.tsx

import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { href: '/#home', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#products', label: 'Products' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/#contact', label: 'Contact' },
];

const legalLinks = [
  { href: '/terms', label: 'Terms & Conditions' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/shipping', label: 'Shipping & Returns' },
];

const socialLinks = [
  {
    label: 'WhatsApp',
    href: 'https://wa.me/918610437893',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
        <path d="M16.001 3.2c-7.072 0-12.8 5.728-12.8 12.8 0 2.256.592 4.464 1.712 6.4L3.2 28.8l6.576-1.664a12.71 12.71 0 0 0 6.224 1.6c7.072 0 12.8-5.728 12.8-12.8 0-7.072-5.728-12.736-12.8-12.736Zm0 23.296a10.42 10.42 0 0 1-5.312-1.456l-.384-.224-3.904.992 1.04-3.808-.224-.4a10.357 10.357 0 0 1-1.536-5.376c0-5.728 4.672-10.4 10.4-10.4 5.728 0 10.4 4.672 10.4 10.4-.032 5.728-4.704 10.272-10.48 10.272Zm6.064-7.776c-.336-.176-1.968-.976-2.272-1.088-.304-.112-.528-.176-.752.176-.224.352-.864 1.088-1.056 1.312-.192.224-.384.256-.72.08-.336-.176-1.424-.52-2.72-1.664-1.008-.896-1.68-2-1.872-2.336-.192-.336-.016-.512.144-.688.144-.144.336-.4.512-.608.176-.208.24-.352.368-.592.128-.24.064-.448-.032-.624-.096-.176-.752-1.808-1.04-2.488-.272-.656-.544-.56-.752-.576-.192-.016-.416-.016-.64-.016a1.232 1.232 0 0 0-.896.416c-.304.336-1.152 1.12-1.152 2.72s1.184 3.168 1.344 3.392c.16.224 2.32 3.552 5.616 4.976.784.336 1.392.544 1.872.704.784.24 1.504.208 2.064.128.64-.096 1.968-.8 2.24-1.6.272-.8.272-1.488.192-1.6-.08-.144-.304-.224-.64-.4Z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/praghaorganics/',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <path d="M17.5 6.5h.01" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/praghaorganics/',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-brand-primary text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 py-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Pragha logo" width={48} height={48} className="h-12 w-12" />
            <div>
              <p className="font-heading text-[1.36rem]">Pragha</p>
              <p className="text-[0.61rem] tracking-[0.35em] text-brand-secondary">
                ...pure, as its powerful
              </p>
            </div>
          </div>

          <div className="grid gap-6 text-sm uppercase tracking-[0.25em] text-white/70 sm:grid-cols-2">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} prefetch={false} className="hover:text-brand-secondary">
                  {link.label}
                </Link>
              ))}
            </nav>
            <nav className="flex flex-col gap-3">
              {legalLinks.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-brand-secondary">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center justify-center gap-4 sm:justify-end">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-brand-secondary hover:text-brand-primary"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-white/10 py-6 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Pragha. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
