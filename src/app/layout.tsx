// FILE: src/app/layout.tsx
// This file has been updated with comprehensive meta tags.

import type { Metadata } from 'next';
import { Jost, Josefin_Sans } from 'next/font/google';
import './globals.css';

// Font configuration (no changes here)
const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-josefin-sans',
  weight: ['400', '500', '700'],
});

const jost = Jost({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jost',
  weight: ['700', '800', '900'],
});

// --- SEO METADATA ---
// This is the new, comprehensive metadata object.
export const metadata: Metadata = {
  // --- Primary Meta Tags ---
  title: 'Pragha Organics | Natural Hair Oil for Growth & Dandruff Control',
  description: 'Discover Pragha Organics, a pure, powerful blend of botanical ingredients designed to promote healthy hair growth, eliminate dandruff, and strengthen roots. Experience nature\'s solution for beautiful hair.',
  keywords: ['organic hair oil', 'hair growth oil', 'dandruff control', 'natural hair care', 'pragha organics', 'herbal hair oil', 'ayurvedic hair oil', 'hair fall solution'],
  
  // --- Open Graph / Facebook Meta Tags ---
  openGraph: {
    type: 'website',
    url: 'https://www.pragha.in', // Replace with your actual domain later
    title: 'Pragha Organics | Natural Hair Oil for Growth & Dandruff Control',
    description: 'Nourish your scalp and restore your hair\'s vitality with our all-natural, organic hair oil.',
    images: [
      {
        url: 'https://www.praghaorganics.com/og-image.png', // You'll need to create and place this image in your /public folder
        width: 1200,
        height: 630,
        alt: 'Pragha Organics Hair Oil Bottle with Natural Ingredients',
      },
    ],
  },

  // --- Twitter Card Meta Tags ---
  twitter: {
    card: 'summary_large_image',
    title: 'Pragha Organics | Natural Hair Oil for Growth & Dandruff Control',
    description: 'Experience nature\'s solution for beautiful, healthy hair with Pragha Organics.',
    images: ['https://www.praghaorganics.com/twitter-image.png'], // You'll need to create and place this image in your /public folder
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${josefin.variable} ${jost.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
