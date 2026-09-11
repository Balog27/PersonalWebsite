import type { Metadata } from 'next';
import './globals.css';
import SiteShell from '@/components/SiteShell';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: 'David-George Balog — Software Developer',
  description:
    'Personal portfolio of David-George Balog — Computer Science student and Software Developer specializing in .NET, React, and clean architecture.',
  keywords: ['developer', 'portfolio', 'computer science', 'software engineer', 'next.js', 'react', 'C#', '.NET'],
  openGraph: {
    title: 'David-George Balog — Portfolio',
    description: 'Computer Science student & Software Developer.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem={true}>
          <SiteShell>{children}</SiteShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
