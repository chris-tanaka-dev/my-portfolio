import { Geist, Geist_Mono } from 'next/font/google';

import BackgroundSkillField from '../components/common/BackgroundSkillField';
import Navbar from '../components/layout/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Christopher Tanaka | Senior Software Engineer',
  description:
    'Senior Software Engineer with 12 years of experience building low-latency, AI-powered systems and collaborative tools. Proven impact at Figma, FoxyAI, and more.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Christopher Tanaka | Senior Software Engineer',
    description:
      'Senior Software Engineer building low-latency, AI-powered products and real-time collaboration tools.',
    siteName: 'Christopher Tanaka Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Christopher Tanaka | Senior Software Engineer',
    description:
      'Senior Software Engineer building low-latency, AI-powered products and real-time collaboration tools.',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  themeColor: '#0b0b12',
  robots: {
    index: true,
    follow: true,
  },
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <BackgroundSkillField />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
