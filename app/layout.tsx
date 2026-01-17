import type { Metadata } from 'next';
import { Lexend } from 'next/font/google';
import './globals.css';

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'BeyondBoundary - T20 World Cup Fantasy Cricket',
  description: 'The ultimate fantasy cricket experience.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lexend.variable} dark`}>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" />
      </head>
      <body className="bg-background-light dark:bg-background-dark text-[#111418] dark:text-white antialiased font-display">
        {children}
      </body>
    </html>
  );
}
