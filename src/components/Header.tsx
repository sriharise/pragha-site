// FILE: src/components/Header.tsx
// This code belongs in its own file at src/components/Header.tsx

import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
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
          <nav className="flex items-center gap-8">
            <Link
              href="#about"
              className="text-sm font-medium text-slate-700 hover:text-green-600 transition-colors"
            >
              About us
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-slate-700 hover:text-green-600 transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;