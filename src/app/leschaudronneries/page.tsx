import React from "react";
import Image from "next/image";
import CardsMobile from '../components/Cards/cards-mobile';
import Footer from '../components/Footer';
import Link from "next/link";

const LesChaudronneries = () => {
  return (
    <div
      className="relative h-screen bg-black bg-cover bg-center"
      style={{ backgroundImage: "url('/images/Background.jpg')" }}
    >
      {/* Content Overlay */}
      <div className="relative z-20 flex flex-col items-center justify-between h-full text-white pt-11">
        <header className="flex items-center justify-center">
        <Link href="/">
          {/* Logo Mobile */}
          <div className="lg:hidden">
            <Image
              src="/images/LogoMobile.svg"
              width={231}
              height={83}
              alt="Logo"
              className="w-auto h-auto"
            />
          </div>
          {/* Logo Desktop */}
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

        {/* CardsMobile component */}
        <div className="flex flex-col gap-6">
         <CardsMobile />
        <Footer />
        </div>
      </div>
    </div>
  );
};

export default LesChaudronneries;
