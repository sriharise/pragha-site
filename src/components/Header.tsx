'use client';

// FILE: src/components/Header.tsx
// This code belongs in its own file at src/components/Header.tsx

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { href: '/#home', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#products', label: 'Products' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/#contact', label: 'Contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((value) => !value);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className="w-full bg-surface/90 backdrop-blur-md sticky top-0 z-50 border-b border-brand-primary/10 shadow-sm">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between py-4">
          <div className="sm:flex items-center">
            {/* Logo */}
            <Link href="/">
              <Image
                src="/logo.png" // Assumes logo.png is in the /public folder
                alt="Pragha Organics Logo"
                width={100}
                height={40}
                priority
              />
            </Link>
            <p className="sm:ml-4 text-sm italic text-slate-500">
                ...pure, as its powerful
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="hidden sm:flex items-center gap-6 sm:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-brand-primary hover:text-brand-secondary transition-colors"
                prefetch={false}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            className="sm:hidden inline-flex items-center justify-center rounded-md p-2 text-brand-primary hover:text-brand-secondary focus:outline-none focus:ring-2 focus:ring-brand-secondary"
          >
            {isOpen ? (
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6l-12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {isOpen && (
          <div className="sm:hidden absolute inset-x-0 top-full border-b border-brand-primary/10 bg-surface/95 backdrop-blur-xl shadow-lg">
            <nav className="flex flex-col space-y-1 px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="rounded-md px-3 py-2 text-base font-medium text-brand-primary hover:bg-brand-secondary/10 hover:text-brand-secondary"
                  prefetch={false}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
