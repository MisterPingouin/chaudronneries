import type { Metadata } from "next";
import { Work_Sans } from 'next/font/google';
import "./globals.css";

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'], 
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-workSans',
});

export const metadata: Metadata = {
  title: "Les Chaudronneries",
  description: "Chaudronneries",
  keywords: 'Chaudronneries',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={workSans.className}>
      <head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
