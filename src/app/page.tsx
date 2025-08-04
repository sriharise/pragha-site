// src/app/page.tsx

import Header from '@/components/Header'
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import SocialProof from '@/components/SocialProof';
import AboutAndContact from '@/components/AboutAndContact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center">
        <Hero />
        <Benefits />
        <SocialProof />
        <AboutAndContact />
      </main>
      <Footer />
    </>
  );
}