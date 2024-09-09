import { Metadata } from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chaudrons - Les Chaudronneries",
  description: "Lieu de création audiovisuelle, culturelle et Sociétal",
  keywords: ["Les Chaudronneries", "Art", "tournage", "événementiel", "solidaire"],
  openGraph: {
    title: "Chaudrons - Les Chaudronneries",
    description: "Découvrez l'univers de création audiovisuelle, culturelle et événementielle des Chaudronneries.",
    url: "https://www.leschaudronneries.com",
    images: [
      {
        url: "/images/LogoDesktop.svg",
        width: 800,
        height: 600,
        alt: "Logo Les Chaudronneries",
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="relative h-screen bg-black">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-3/4 lg:h-full object-cover z-0"
        src="/videos/ChaudronneriesHomepageVideo.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay semi-transparent avec la couleur #0B1214 à 31% */}
      <div className="absolute top-0 left-0 w-full h-full bg-[rgba(11,18,20,0.31)] z-10"></div>

      {/* Content Overlay */}
      <div className="relative z-20 flex flex-col items-center justify-between h-full text-white pt-11">
        <header className="flex items-center justify-center">
          <Link href="/">
            <div className="lg:hidden">
              <Image
                src="/images/LogoMobile.svg"
                width={231}
                height={83}
                alt="Logo"
                className="w-auto h-auto"
              />
            </div>
            <div className="hidden lg:block">
              <Image
                src="/images/LogoDesktop.svg"
                width={294}
                height={110}
                alt="Logo"
                className="w-auto h-auto"
              />
            </div>
          </Link>
        </header>

        <div className="relative flex flex-col">
          <div className="flex items-end px-6 pb-2 lg:hidden">
            <h1 className="mt-2 text-heading font-semibold italic">
              LIEU DE CRÉATION AUDIOVISUELLE, CULTURELLE ET ÉVÉNEMENTIELLE
            </h1>
            {/* Pastille verte */}
            <div className="pr-10">
              <Link href="/leschaudronneries">
                <div className="w-10 h-10 bg-primary text-black rounded-full flex items-center justify-center shadow-lg hover:bg-green-500 transition duration-300 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>

          {/* Encart Desktop */}
          <div className="hidden lg:flex flex-col items-center justify-center">
            <h1 className="mt-2 text-heading font-semibold italic w-[379px] text-center leading-8">
              LIEU DE CRÉATION AUDIOVISUELLE, CULTURELLE ET ÉVÉNEMENTIELLE
            </h1>
            {/* Pastille verte Desktop */}
            <div className="pt-6">
              <Link href="/leschaudronneries">
                <div className="px-5 w-auto h-10 bg-primary text-black rounded-full flex items-center justify-center shadow-lg hover:bg-white transition duration-300 cursor-pointer">
                  <p className="text-label font-semibold pr-1">VISITEZ</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row py-4 pt-14 lg:mt-4">
            <Link href="http://leschaud.cluster003.ovh.net/residence.html">
              <div className="hover:text-primary px-6 text-body uppercase font-semibold underline underline-offset-2 decoration-1 italic">
                <p className="lg:hidden">résidences pour projets</p>
                <p className="lg:hidden">sociétaux</p>
                <p className="hidden lg:block">
                  résidences pour projets sociétaux
                </p>
              </div>
            </Link>
            <Link href="https://jakmousse.org/">
              <div className="hover:text-primary px-6 py-5 text-body uppercase font-semibold underline underline-offset-2 decoration-1 italic lg:flex lg:py-0 lg:pb-8">
                <p className="lg:hidden">Jakmousse +-</p>
                <p className="lg:hidden">Art Design Experiment</p>
                <p className="hidden lg:block">Jakmousse +- Art Design Experiment</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
