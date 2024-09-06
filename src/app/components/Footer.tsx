import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
      <div className="flex flex-col gap-6 mb-5 w-[343px] h-auto bg-background-white text-white rounded-lg shadow-lg opacity-75 py-6 px-4">
        <div className="flex items-center space-x-2">
            <Image
              src="/icons/person-24px.svg"
              alt="Phone"
              width={24}
              height={24}
            />
            <p className="text-link font-semibold">+33 677 235 437</p>
          </div>
          <div className="flex items-center space-x-2">
            <Image
              src="/icons/mail-24px.svg"
              alt="Phone"
              width={24}
              height={24}
            />
            <p className="text-link font-semibold">contact@leschaudronneries.com</p>
          </div>
          <div className="flex items-center space-x-2">
            <Image
              src="/icons/pin-24px.svg"
              alt="Phone"
              width={24}
              height={24}
            />
            <p className="text-link font-semibold max-w-[200px]">124-126 rue de Rosny 93100 montreuil</p>
          </div>
          <div className="flex items-center space-x-2">
            <Image
              src="/icons/insta-24px.svg"
              alt="Phone"
              width={24}
              height={24}
            />
            <p className="text-link font-semibold">Les chaudonneries</p>
          </div>
      </div>
    );
  };
  
  export default Footer;
  