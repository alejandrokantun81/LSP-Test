import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'LSP Explorer — LEGO® Serious Play® Catalog',
  description:
    'Descubre el taller de LEGO Serious Play que tu organización necesita. Diagnóstico profesional y metodología validada para equipos ejecutivos.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <style>{`
          *, *::before, *::after { box-sizing: border-box; }
          .nav-link-item:hover { color: var(--ink-000) !important; }
          a:focus-visible { outline: 2px solid var(--lego-yellow); outline-offset: 2px; border-radius: 2px; }
        `}</style>
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
