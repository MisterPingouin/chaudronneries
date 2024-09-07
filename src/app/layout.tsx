import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import Signature from "./components/Signature";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-workSans",
});

// Métadonnées globales pour tout le site
export const metadata: Metadata = {
  title: "Les Chaudronneries",
  description: "Lieu de création audiovisuelle, culturelle et événementielle",
  keywords: ["Chaudronneries", "création", "audiovisuel", "événementiel", "culturel"],
  openGraph: {
    title: "Les Chaudronneries",
    description: "Lieu de création audiovisuelle, culturelle et événementielle",
    url: "https://www.leschaudronneries.com",
    siteName: "Les Chaudronneries",
    images: [
      {
        url: "/images/LogoDesktop.svg",
        width: 800,
        height: 600,
        alt: "Logo Les Chaudronneries",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Les Chaudronneries",
    description: "Lieu de création audiovisuelle, culturelle et événementielle",
    images: ["/images/LogoDesktop.svg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={workSans.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
      <Signature />
    </html>
  );
}
