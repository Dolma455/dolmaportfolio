import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/ui/Navbar';
import CursorGlow from '@/components/ui/CursorGlow';
import NoiseOverlay from '@/components/ui/NoiseOverlay';
import SmoothScroll from '@/components/ui/SmoothScroll';

export const metadata: Metadata = {
  title: 'Dolma Lama — UI/UX Designer & Frontend Engineer',
  description:
    'Award-winning product designer and frontend developer based in the United Kingdom. Combining human-centered UX thinking with high-performance Next.js and Flutter engineering.',
  keywords: [
    'Dolma Lama',
    'Product Designer',
    'UI/UX Designer',
    'Frontend Developer',
    'Next.js Portfolio',
    'Design Systems',
    'Figma to Code',
    'Ulster University MSc',
    'UK Designer',
  ],
  authors: [{ name: 'Dolma Lama', url: 'https://github.com/Dolma455' }],
  creator: 'Dolma Lama',
  openGraph: {
    title: 'Dolma Lama — UI/UX Designer & Frontend Engineer',
    description:
      'Designing digital experiences that people remember. 3+ years building high-impact products from zero to scale.',
    url: 'https://dolma.dev',
    siteName: 'Dolma Lama Portfolio',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dolma Lama — UI/UX Designer & Frontend Engineer',
    description: 'Designing digital experiences that people remember.',
    creator: '@dolmadev',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#05070A',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

import { ThemeProvider } from '@/context/ThemeContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" data-theme="yellow">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&family=Syne:wght@700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@500,600,700,800,900&f[]=clash-display@600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-obsidian text-fg-primary antialiased min-h-screen">
        <ThemeProvider>
          <SmoothScroll>
            <NoiseOverlay />
            <CursorGlow />
            <Navbar />
            <main id="main-content" className="relative z-10">
              {children}
            </main>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
