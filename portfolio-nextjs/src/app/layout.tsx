import type { Metadata } from "next";
import Script from "next/script";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne"
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: "--font-dm-sans"
});

export const metadata: Metadata = {
  title: 'Victor Raymond — Fullstack Developer',
  description: 'Victor Raymond Usen — Fullstack Developer specializing in building clean, scalable, and performant web applications with React, Next, Tailwind and some of the latest tools',
  keywords: 'Victor Raymond, Victor Usen, Victor R. Usen, Victor Raymond Usen Fullstack Developer, Web Developer, React, JavaScript, portfolio, portfolio website, Tailwind CSS, Victor Usen, Nigeria',
  authors: [{ name: 'Victor Raymond Usen' }],
  openGraph: {
    type: 'website',
    url: 'https://victorusen.netlify.app',
    title: 'Victor Raymond — Fullstack Developer',
    description: 'Fullstack Developer building clean, scalable, and performant websites with React & modern web tools.',
    images: [
      {
        url: 'https://victorusen.netlify.app/assets/pfp/vics-picture.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@__victorusen',
    creator: '@__victorusen',
    title: 'Victor Raymond — Fullstack Developer',
    description: 'Fullstack Developer building clean, scalable, and performant websites with React & modern web tools.',
    images: ['https://victorusen.netlify.app/assets/pfp/vics-picture.png'],
  },
  robots: 'index, follow',
  // canonical: 'https://victorusen.netlify.app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-3316G9D8YB" strategy="afterInteractive" async />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3316G9D8YB');
          `}
        </Script>
        {children}</body>
    </html>
  );
}
