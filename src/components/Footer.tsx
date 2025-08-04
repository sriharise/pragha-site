// FILE: src/components/Footer.tsx
// CREATE THIS NEW FILE at src/components/Footer.tsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-center items-center">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Pragha Organics. All Rights Reserved.
          </p>
          {/* Add social media icons here later if you want */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;