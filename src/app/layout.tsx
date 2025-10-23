// FILE: src/app/layout.tsx
// This file has been updated with comprehensive meta tags.

import type { Metadata } from 'next';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

// --- SEO METADATA ---
// Enhanced meta configuration for search, social, and sharing.
export const metadata: Metadata = {
  metadataBase: new URL('https://www.pragha.in'),
  title: {
    default: 'Pragha | Natural Hair Oil for Growth & Dandruff Control',
    template: '%s | Pragha',
  },
  description:
    "Discover Pragha's heritage-inspired hair oils that nourish roots, calm dandruff, and restore luxurious shine using freshly infused botanicals.",
  keywords: [
    'Pragha hair oil',
    'natural hair oil India',
    'herbal hair growth oil',
    'poduthalai oil',
    'dandruff control remedy',
    'ayurvedic hair care',
    'botanical scalp treatment',
  ],
  category: 'beauty',
  authors: [{ name: 'Pragha Organics Team', url: 'https://www.pragha.in' }],
  creator: 'Pragha Organics',
  publisher: 'Pragha Organics',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Pragha',
    title: 'Pragha | Natural Hair Oil for Growth & Dandruff Control',
    description:
      'Nourish your scalp with Pragha—heritage hair oils crafted from hibiscus, amla, and poduthalai for growth, shine, and a flake-free finish.',
    locale: 'en_IN',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pragha hair oil bottle surrounded by botanical ingredients',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pragha | Natural Hair Oil for Growth & Dandruff Control',
    description:
      'Experience naturally stronger, shinier hair with Pragha’s botanically infused oils for growth and dandruff relief.',
    creator: '@PraghaOrganics',
    site: '@PraghaOrganics',
    images: ['/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans bg-surface text-brand-primary antialiased">
        <GoogleAnalytics />
        <Header />
        <main className="min-h-screen w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
