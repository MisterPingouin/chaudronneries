import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 lg:justify-center mb-5 w-[343px] lg:w-[1210px] h-auto bg-background-white text-white rounded-lg shadow-lg opacity-75 py-6 px-4">
      <div className="flex items-center space-x-2">
        <Image src="/icons/person-24px.svg" alt="Phone" width={24} height={24} />
        <a
          href="tel:+33677235437"
          className="text-link font-semibold hover:text-primary"
        >
          +33 677 235 437
        </a>
      </div>

      <div className="flex items-center space-x-2">
        <Image src="/icons/mail-24px.svg" alt="Mail" width={24} height={24} />
        <a
          href="mailto:contact@leschaudronneries.com"
          className="text-link font-semibold hover:text-primary"
        >
          contact@leschaudronneries.com
        </a>
      </div>

      <div className="flex items-center space-x-2">
        <Image src="/icons/Pin-24px.svg" alt="Location" width={24} height={24} />
        <a
          href="https://www.google.com/maps/search/?api=1&query=124-126+rue+de+Rosny+93100+Montreuil"
          target="_blank"
          rel="noopener noreferrer"
          className="text-link font-semibold hover:text-primary max-w-[200px] lg:max-w-full"
        >
          124-126 rue de Rosny, 93100 Montreuil
        </a>
      </div>

      <div className="flex items-center space-x-2">
        <Image src="/icons/Insta-24px.svg" alt="Instagram" width={24} height={24} />
        <Link
          href="https://www.instagram.com/leschaudronneries/"
          className="text-link font-semibold hover:text-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Les Chaudronneries
        </Link>
      </div>
    </div>
  );
};

export default Footer;
