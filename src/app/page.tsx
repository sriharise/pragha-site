// src/app/page.tsx

import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import AboutSection from '@/components/AboutSection';
import ProductShowcase from '@/components/ProductShowcase';
import CtaBanner from '@/components/CtaBanner';
import ContactSection from '@/components/ContactSection';
import StickyCtaButton from '@/components/StickyCtaButton';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Benefits />
      <AboutSection />
      <ProductShowcase />
      <CtaBanner />
      <ContactSection />
      <StickyCtaButton />
    </div>
  );
}
