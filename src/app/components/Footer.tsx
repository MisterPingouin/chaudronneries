import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col gap-6 mb-5 w-[343px] h-auto bg-background-white text-white rounded-lg shadow-lg opacity-75 py-6 px-4">
      {/* Phone number with tel: */}
      <div className="flex items-center space-x-2">
        <Image src="/icons/person-24px.svg" alt="Phone" width={24} height={24} />
        <a
          href="tel:+33677235437"
          className="text-link font-semibold hover:text-primary"
        >
          +33 677 235 437
        </a>
      </div>

      {/* Email with mailto: */}
      <div className="flex items-center space-x-2">
        <Image src="/icons/mail-24px.svg" alt="Mail" width={24} height={24} />
        <a
          href="mailto:contact@leschaudronneries.com"
          className="text-link font-semibold hover:text-primary"
        >
          contact@leschaudronneries.com
        </a>
      </div>

      {/* Google Maps link for address */}
      <div className="flex items-center space-x-2">
        <Image src="/icons/pin-24px.svg" alt="Location" width={24} height={24} />
        <a
          href="https://www.google.com/maps/search/?api=1&query=124-126+rue+de+Rosny+93100+Montreuil"
          target="_blank"
          rel="noopener noreferrer"
          className="text-link font-semibold hover:text-primary max-w-[200px]"
        >
          124-126 rue de Rosny, 93100 Montreuil
        </a>
      </div>

      {/* Instagram link */}
      <div className="flex items-center space-x-2">
        <Image src="/icons/insta-24px.svg" alt="Instagram" width={24} height={24} />
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
